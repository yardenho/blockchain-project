// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Rentals {
    string public name;
    uint public rentalsCount = 0;
    mapping(uint => Rental) public rentals;

    struct Rental {
        uint id;
        string vehicleVin;
        address payable owner;
        address payable renter;
        string rentDates;
        uint rentPrice;
        string status;
        string ownerName;
        string renterName;
    }

    event RentalCreated(
        uint id,
        string vehicleVin,
        address payable owner,
        address payable renter,
        string rentDates,
        uint rentPrice,
        string status
    );

    event RentalUpdated(
        uint id,
        string vehicleVin,
        address payable owner,
        address payable renter,
        string rentDates,
        uint rentPrice,
        string status
    );

    event RentalPayed(
        uint id,
        string vehicleVin,
        address payable owner,
        address payable renter,
        string rentDates,
        uint rentPrice,
        string status
    );

    constructor() public {
        name = "Chen & Yarden final project";
    }

    function createRental(string memory _vehicleVin, address _owner, string memory _rentDates, uint _rentPrice, string memory _status, string memory _ownerName, string memory _renterName) public {
        // Require a valid vehicle vin
        require(bytes(_vehicleVin).length > 0);
    
        // Require a valid rent dates
        require(bytes(_rentDates).length > 0);

        // Require a valid rent price
        require(_rentPrice > 0);
        // Require a valid owner name
        require(bytes(_ownerName).length > 0);
        // Require a valid owner name
        require(bytes(_renterName).length > 0);

        // Increment retals count
        rentalsCount++;
        // Create the rental
        rentals[rentalsCount] = Rental(
            rentalsCount,
            _vehicleVin,
            payable(_owner),
            payable(msg.sender),
            _rentDates,
            _rentPrice,
            _status,
            _ownerName,
            _renterName
        );
        // Trigger an event
        emit RentalCreated(
            rentalsCount,
            _vehicleVin,
            payable(_owner),
            payable(msg.sender),
            _rentDates,
            _rentPrice,
            _status
        );

    }

    function updateRental(uint _id, string memory _status) public payable {
        // this function purpose is to upadate the rental status in the follwing cases:
        // 1. the rental status was updated to declined.
        // 2. the rentl status was updated from waiting to approved by owner.

        // Make sure the id is valid
        require(_id > 0 && _id <= rentalsCount);

        // fetch the rental by id
        Rental memory _rental = rentals[_id];

        // update the status
        _rental.status = _status;

        // Update the product
        rentals[_id] = _rental;

        // Trigger a rental update event
        emit RentalUpdated(
            _rental.id,
            _rental.vehicleVin,
            _rental.owner,
            _rental.renter,
            _rental.rentDates,
            _rental.rentPrice,
            _rental.status
        );  
    }

    function rentalPayment(uint _id, string memory _status)payable public  {
        // this function purpose is to upadate the rental status to approved (final approval by the renter)
        // in this function we need to make the payment and update the status to approved in the contract

        // Make sure the id is valid
        require(_id > 0 && _id <= rentalsCount);

        // fetch the rental by id
        Rental memory _rental = rentals[_id];

        // TODO: we will need to do this outside of the contract
        // make sure the vehicle is available in the rental date
        // check if the renter paying is the one that created the rental request


        // make the paymenyt

        // Fetch the owner
        address payable _owner = _rental.owner;

        // Require that there is enough Ether in the transaction
        // require(msg.value >= _rental.rentPrice);

        // Require that the buyer is not the seller
        // require(_owner != msg.sender);

        // Require that the buyer is the same one that created the rental request
        // address payable _renter = _rental.renter;
        // require(_renter == msg.sender);



        // update the status and save
        _rental.status = _status;

        // Update the product
        rentals[_id] = _rental;

        // Pay the owner by sending them Ether
        payable(_owner).transfer(msg.value);

        // Trigger an event
        emit RentalPayed(
            _rental.id,
            _rental.vehicleVin,
            _rental.owner,
            _rental.renter,
            _rental.rentDates,
            _rental.rentPrice,
            _rental.status
        );
    }
}

import React, { Component } from 'react';

export class Covid19 extends Component {
  render() {
    return (
      <div className='covid'>
        <div className='top'>
          <h2 className='covtitle'>How to coronavirus-proof your home</h2>
          <p className='desc'>
            Life under coronavirus means staying at home as much as possible —
            but you’ll likely need to make a trip to the grocery store or
            pharmacy at some point. Perhaps it is a good idea to make a
            checklist of some the do's and dont's.
          </p>
        </div>
        <div className='list'>
          <h4 className='list-heading'> Make a game plan</h4>
          <ol className='listing'>
            <li>
              Designate one person to be your errand-runner to limit your
              outside exposures
            </li>
            <li>
              Set up a disinfecting station — an area outside your home or in a
              room with low foot traffic where you can disinfect packaged food
            </li>
          </ol>
          <h4 className='list-heading'> When you’re out</h4>
          <ol className='listing'>
            <li>Avoid coming within less than six feet of others</li>
            <li>Wipe handles on carts or baskets while shopping</li>
            <li>
              You don’t have to have gloves or a mask — just wash your hands
              frequently while you’re out and avoid touching your face
            </li>
          </ol>
          <h4 className='list-heading'> When you get back</h4>
          <ol className='listing'>
            <li>Wash your hands with soap and water for 20 seconds</li>
            <li>
              Disinfect takeout boxes and packaged foods at your disinfecting
              station
            </li>
            <li>Thoroughly wash produce before putting it in your kitchen</li>
          </ol>
          <h4 className='list-heading'> Disinfect</h4>
          <ol className='listing'>
            <li>
              Disinfect everything you touch — doorknobs, light switches, keys,
              phone, keyboards, remotes, etc.
            </li>
            <li>
              Use EPA-approved disinfectants (these include Clorox Disinfecting
              Wipes and certain Lysol sprays) and leave surfaces wet for 3-5
              minutes
            </li>
          </ol>
          <h4 className='list-heading'> Delivery</h4>
          <ol className='listing'>
            <li>
              Ask workers to drop deliveries off on your doorstep or an area of
              your complex
            </li>
            <li>
              If they need you to come to the door, keep six feet of distance
            </li>
            <li>Pay and tip online when possible</li>
            <li>
              Offer sanitizer to them as well if you're collecting in person{' '}
            </li>
            <li>After you pick up mail from your mailbox, wash your hands</li>
          </ol>
          <h4 className='list-heading'>Laundry</h4>
          <ol className='listing'>
            <li>
              Wash clothes, towels and linens regularly on the warmest setting
            </li>
            <li>
              Disinfect your laundry hamper, too, or place a removable liner
              inside it
            </li>
            <li>
              Don’t shake dirty laundry to avoid dispersing the virus in the air
            </li>
          </ol>
          <h4 className='list-heading'>Guests</h4>
          <ol className='listing'>
            <li>You shouldn’t allow guests over right now</li>
            <li>
              If you need to house a family member or friend, avoid shared
              living spaces as much as you can
            </li>
            <li>
              If they need to enter shared living spaces, ask them to keep six
              feet of distance
            </li>
          </ol>
          <h4 className='list-heading'> If someone in your home gets sick</h4>
          <ol className='listing'>
            <li>First, consult your doctor</li>
            <li>
              Isolate them in another room and ask them to use a separate
              restroom
            </li>
            <li>Disinfect frequently touched surfaces every day</li>
            <li>Avoid sharing items with them</li>
            <li>Wear gloves when washing their laundry</li>
            <li>Continue to wash your hands frequently</li>
            <li>Ask them to wear a face mask if they have one</li>
          </ol>
          <h4 className='list-heading'> Supplies you’ll need</h4>
          <ol className='listing'>
            <li>EPA-approved disinfectants</li>
            <li>
              If you don’t have disinfectants, make a bleach solution:
              <ul>
                <li>Mix four teaspoons bleach per quart of water; or</li>
                <li>Use a 70% alcohol solution</li>
              </ul>
            </li>
            <li>Laundry detergent</li>
            <li>Trash bags</li>
            <li>Prescription medicines (you can mail order these)</li>
            <li>Dry goods — breads, pastas, nut butters</li>
            <li>Frozen foods — meats, veggies, fruits</li>
            <li>Canned foods — fruits, veggies, beans</li>
            <li>Avoid stocking too much food items. Be considerate.</li>
          </ol>
          <h4 className='list-heading'>Pets</h4>
          <ol className='listing'>
            <li>Supervise your pet in your backyard</li>
            <li>
              It’s OK to play with them outside — just keep your distance from
              other humans
            </li>
            <li>
              If you’re sick, ask someone you live with to take care of them
              while you recover
            </li>
            <li>
              If you must care for them while you’re sick, wash your hands
              frequently
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Covid19;

import React from 'react';
import'./page.css';
function Page() {
  return (
    <div className='pagecontainer'>
      <div className='pagecards'>
      <label for="Title of Top services"></label>
        <input type=" Title of Top services" placeholder=" Title of Top services" id="Title of Top services" name="Title of Top services" required={true} />
      </div>
      <div className='pagecards'>
        <label for="Category of top service"></label>
        <input type=" Category of top service" placeholder=" Category of top service" id="Category of top service" name="TCategory of top service" required={true} />
      
      </div>
      <div className='pagecards'>
      <label for="Price of service"></label>
        <input type=" Price of service" placeholder="Price of service" id="Price of service" name="Price of service" required={true} />
      
      </div>
      <div className='pagecards'>
      <label for="Offer on product"></label>
        <input type=" Offer on product" placeholder="Offer on product" id="Offer on product" name="Offer on product" required={true} />
      
      </div>
      <div className='pagecards'>
      <label for="Description of service"></label>
        <input type=" Description of service" placeholder="Description of service" id="Description of service" name="Description of service" required={true} />
      

      </div>
      
      <div className='pagecar'>
        <button className='bybutton'>Chose file</button>                                                                      <button className='buybutton'>Upload images of service</button>
       
      </div>
      <div class="pageca">

    <button className='pagec'>Save<i class="bi bi-arrows-fullscreen"></i></button>                                                  <button className='pagec'>Discart</button>
    
   
  
  </div>
      
    </div>
  )
}

export default Page


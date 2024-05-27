import React from 'react'
import Page from './Page';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function About(props) {
  let count=0;
  let onresolve=(result) => {
    console.log("hi"+count++)
  
  }
  let onreject=(result) => {
    console.log("hello"+count++)
  
  }
  
  let pro=(a) => {
  
    return  new Promise((resolve,reject)=>{
    if(a){
      count++
    resolve("Sccessful");
    }
    else{
      count++;
    reject("Fail");
    }
    });
    }
    
    console.log(pro)
    

    



  //navigate
  const navigate=useNavigate();
  const gohome=()=>{
navigate("/");

  }

//useeffect
useEffect(()=>{
  const scrollY=sessionStorage.getItem(window.location.pathname) ?? 0; //if value null then store 0
  window.scroll(0,scrollY);
})

  return (
    <>
    
    <div className="container">
  <div className="row">

    <div className="col-6">
    <h1  style={{color:props.mode=='light'?'black':'white'}}>About</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde ab repudiandae quidem laudantium repellat cum laboriosam in perspiciatis dignissimos pariatur consequuntur voluptas nesciunt, rerum, aut ratione tenetur. Itaque laboriosam doloremque esse molestias modi, nemo deleniti recusandae aperiam, beatae aut fugiat nobis assumenda nesciunt dicta quae dolorum porro. Eaque quo optio sed architecto voluptas quibusdam consequatur, dolorum labore sunt enim eveniet modi quod quis eos harum suscipit dolorem libero nulla ea impedit commodi tempore maiores nisi dolor. Ab facilis esse libero numquam quia. Enim natus necessitatibus debitis mollitia hic? Voluptate eum impedit, asperiores consequatur culpa tenetur nesciunt tempora ipsam ea eaque, recusandae necessitatibus dolor, iure explicabo eligendi! Saepe quasi voluptate perspiciatis optio possimus laboriosam deleniti commodi esse aspernatur quod recusandae, quidem natus eveniet ea. Ut nulla voluptates harum ad soluta? Aperiam ipsum nulla quo fugiat dolorum laboriosam, ipsa iste, molestiae mollitia accusantium voluptate placeat provident quis, dicta veritatis molestias blanditiis modi. Eius eaque commodi possimus ad rem labore quidem temporibus error, ex ipsam asperiores. Harum numquam dolore eaque, id unde minima atque minus nemo nostrum repellendus iure doloremque, ipsum modi dignissimos! Vero, reiciendis doloribus veritatis beatae architecto pariatur deleniti aliquam hic, eligendi, aperiam qui eveniet rerum mollitia laborum sequi. Aliquid, itaque. Rem amet deleniti velit exercitationem. Natus cum nam porro pariatur quis repellat odio dolores vero deleniti vel, quam saepe minima nihil quos veniam distinctio sint quaerat dolore illum neque cupiditate. Maxime a vero velit enim minus sequi labore mollitia quaerat quas. Eaque quidem facilis ut labore eligendi officia non porro consequatur? Eligendi reprehenderit at commodi ut expedita blanditiis enim aperiam, vitae, ab velit sunt recusandae placeat dolorem rem! Excepturi commodi similique tenetur! Ducimus, molestiae delectus nobis dolorem magni beatae consequatur odit omnis cum aliquam similique quidem nulla, reprehenderit quisquam accusamus? Vel quos expedita suscipit dignissimos magni possimus hic blanditiis odio aperiam, odit animi architecto incidunt natus asperiores? Doloremque odit, nulla consectetur accusantium, voluptatem assumenda qui voluptatum incidunt ea et esse ex officiis, nobis repellendus sit illum! Numquam ex corporis dicta illo autem odio explicabo vitae quas, consectetur praesentium voluptatibus, minima esse voluptates asperiores inventore debitis! Atque dicta possimus quo sed, sunt placeat repellendus enim praesentium cumque nemo maxime architecto quis, magni id quibusdam incidunt cum laborum officia iure et porro amet temporibus ipsa? Ullam non possimus, quasi atque, ad magnam accusantium consequuntur nulla harum praesentium doloribus quod laboriosam maiores alias corrupti id omnis est dolor in! Rerum repudiandae quos hic quae. Beatae officia vitae aspernatur repellat dolore libero optio debitis? Totam eos voluptate sequi debitis exercitationem ut voluptatum fuga distinctio ea! Sequi delectus, veniam deleniti fugiat cum eaque ad distinctio ut minima cupiditate ullam. Debitis et labore rem, possimus veritatis officia blanditiis vitae officiis cupiditate natus inventore, modi dignissimos corrupti, nobis numquam culpa cumque. Consequuntur eligendi laudantium non mollitia ratione excepturi commodi officia beatae, error similique accusamus quam provident quia corporis obcaecati dolores molestiae rerum quasi. Enim voluptates dolores porro natus nam! Impedit accusamus quos molestiae excepturi vero. Incidunt libero ipsum quia consectetur quam dolores. Molestias eum odit hic numquam fugiat tenetur harum quae provident cumque animi facilis nulla deleniti, officiis alias necessitatibus quaerat tempora sint mollitia sed eius neque nesciunt exercitationem consequuntur. Et quis facilis laudantium ullam illo exercitationem, voluptas rerum fuga nulla. Earum porro, officia minima ullam suscipit eaque numquam odit at perspiciatis mollitia ad praesentium ipsam minus et dolore facere dolorum accusamus provident. Placeat amet, dolorum facere tenetur eveniet optio ipsum ullam architecto et expedita quisquam quis a nam laudantium rem enim aliquam neque laboriosam est nihil dolor unde eaque consequuntur delectus? Corporis, sint animi nostrum autem molestias perspiciatis ab architecto tenetur veniam voluptatum, at provident quo totam necessitatibus voluptate corrupti iusto libero facere id, omnis velit ipsam quia! Optio perferendis quae eligendi, architecto aperiam eos nam eius molestias! Eligendi quisquam odit illo eaque laudantium cupiditate quod, porro suscipit eum qui magni sed repellendus nihil soluta. Obcaecati similique itaque consequatur, architecto blanditiis suscipit nam esse animi, minus distinctio praesentium amet, dolor voluptate magni natus sed aperiam consectetur! Totam dolorum ipsam facilis? Commodi eius esse, quasi fuga vero magni consequuntur consectetur molestiae asperiores, quia optio architecto hic qui, aperiam quaerat repudiandae eum aliquid cum consequatur quos? Soluta ut suscipit nihil, distinctio maxime, at reprehenderit blanditiis rerum tempora non eum quos! Omnis magni sequi quam sed saepe sit officiis iure quas perspiciatis. Consectetur alias error eligendi officiis voluptates tempore quisquam. Voluptatem, obcaecati excepturi deleniti ea illo necessitatibus, officiis accusamus sapiente adipisci quia illum consectetur ducimus aliquid! Harum ipsa, architecto distinctio fugit voluptate facilis magnam laudantium debitis libero odio officiis, quasi laborum eos ipsum perspiciatis dolor ipsam. Est rem facere veritatis pariatur velit. Sint, alias? Ipsum magni rem vel non libero earum exercitationem reprehenderit unde itaque, aperiam in inventore, consectetur mollitia. Facilis animi totam quia omnis earum assumenda explicabo illum corrupti itaque, vel beatae maiores. Quas et incidunt voluptatum dolorem, corrupti soluta provident non eum, asperiores, iste sapiente aspernatur unde? Sapiente modi labore delectus quibusdam, saepe dolorem illo temporibus tempore vel necessitatibus ex impedit voluptate alias tempora minus molestiae minima praesentium dolor accusantium doloribus, voluptas non. Recusandae vitae eligendi vero ea doloribus quaerat ipsa nulla, dolorem nobis quia eveniet at hic perferendis quos, perspiciatis optio rerum! Alias praesentium nam, officia aspernatur error expedita ratione aliquid maiores deleniti quod esse harum quis facilis voluptatem rerum aperiam sequi libero, molestias, deserunt culpa. Sed aperiam quas earum, ut quam veritatis inventore temporibus minus aliquid reprehenderit quisquam voluptatibus, corporis ipsum doloremque labore culpa cumque et, exercitationem dolores perspiciatis beatae aliquam eaque. Eum aliquid, incidunt dolor temporibus delectus ab eligendi quasi deleniti amet rerum harum adipisci fuga nobis possimus debitis alias error voluptatibus tenetur vel impedit. Laboriosam sed hic veritatis? Atque amet harum ut placeat et architecto tempore dolores expedita sapiente in. Obcaecati excepturi, explicabo quis quas expedita saepe vero quae quisquam qui nobis accusamus veniam, optio minima ipsam a similique repellendus ad eveniet provident tenetur suscipit et illum praesentium. Temporibus nemo dolore amet, officiis tenetur sed tempora ullam. Eos fugiat id quibusdam reiciendis est illo, suscipit non adipisci temporibus velit at perferendis iure?</p>
    </div>
    <div className="col-6">
    {props.mode=="light"? <Page /> :null}
    </div>
    
  </div>

  <div className="btn btn-primary" onClick={gohome}>
    Home
  </div>
</div>  


    </>
   
  )
}

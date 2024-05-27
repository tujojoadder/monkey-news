import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Home(props) {
 
  //State for count text word
const [text, settext] = useState("");

  //Use navigate
    const navigate=useNavigate();
    const gohome=()=>{   
        navigate(-1);
    }
    //useeffect
    useEffect(()=>{
      const scrollY=sessionStorage.getItem(window.location.pathname) ?? 0; //if value null then store 0
      window.scroll(0,scrollY);
    })
  



  return (
    <>
    <div className="conatiner">
      <h1>{props.mode}</h1>
    <h1> <div style={{color:props.mode==='light'?'black':'white'}} >Homee {props.mode}</div></h1>
    <Outlet/>
    <p></p>
    <button onClick={gohome}>Go to home</button>
    <br />
    <p></p>
    <input type="text" value={text} onChange={(event)=>{settext(event.target.value)}}/>
<br />
<p>{text}</p>
<br />

<div className="btn btn-primary" onClick={props.count}>Count</div>

<p>{text.split(" ").filter((ele)=>{return ele.length!=0}).length}</p>
<h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis at facere a, obcaecati distinctio non eveniet commodi quas vero laudantium earum, deleniti accusamus tenetur, cupiditate quo eos quod? Vel, quas?</h3>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni, aliquid dolorem autem ipsum enim, veniam tenetur ratione repudiandae similique excepturi qui quisquam quasi voluptate modi nostrum? Praesentium odio, voluptate dolore autem expedita necessitatibus, minus consectetur architecto nostrum rerum quod ducimus quibusdam voluptatibus! Libero placeat sed, laborum illo inventore unde fugiat totam repellendus reprehenderit est, quam consequuntur voluptatibus error dolores esse, voluptatem eaque. Aliquam saepe maxime quasi! Labore sapiente eius quis, quae ducimus amet vero, totam possimus porro animi cupiditate maiores dolor ad. Praesentium libero cum assumenda, adipisci dicta eum illum laboriosam sapiente unde sunt deleniti, ea soluta! Laudantium deleniti sed, unde praesentium dolorum ab atque magnam enim temporibus voluptatibus obcaecati consequuntur inventore eveniet eos doloribus consectetur ad exercitationem eius officia maiores facilis ipsa, ullam illo libero. Consequuntur asperiores a neque laboriosam natus perspiciatis autem deleniti cumque, doloribus alias numquam perferendis, qui ratione. Officiis nihil maxime adipisci ex illo, facere quis iste nemo obcaecati voluptate, porro hic officia doloribus culpa impedit. Ab inventore sequi voluptatem consectetur illo eveniet culpa, fugit, temporibus excepturi omnis nam repellendus corporis officiis nostrum dolorem nulla deleniti doloremque! Ducimus quis officiis expedita, non animi minus! Fugit, ex? Ad eaque nisi dicta molestiae nobis, ex harum pariatur ipsam omnis, eligendi aliquid optio asperiores reiciendis. Accusantium, dolorem porro. Dolorum aliquid laudantium deleniti ab dignissimos commodi ut dicta beatae minus soluta error atque rerum, earum debitis, nesciunt incidunt dolores. Corporis, quo id dolores expedita deleniti sit, laborum minima recusandae facilis autem officiis rem nobis, porro eveniet tenetur itaque saepe deserunt. Aliquid debitis officia neque impedit cum! Dolorem repellendus, molestias unde odio ipsam porro vero quisquam, consequatur, cupiditate ab iste eum distinctio fuga reiciendis esse cumque quibusdam voluptatum perferendis explicabo reprehenderit? Totam vel praesentium voluptate quisquam minus! Aspernatur dicta enim eius consequuntur sint? Accusantium enim adipisci consequuntur illum aut quas consectetur molestiae, in distinctio modi itaque deserunt ab vero quisquam voluptate quod saepe eveniet sint laudantium rem ex possimus eius magnam? Nam distinctio, doloremque delectus vel odio consequatur aspernatur voluptatem minus sit debitis pariatur eveniet maiores nulla voluptates illum molestiae optio ducimus. Quidem rem dolore repudiandae. Minus repellendus illum id, non aut dolore? Aut ullam sed nesciunt, perspiciatis cum fugiat eos reiciendis quod consectetur dolorum reprehenderit dolor enim, praesentium itaque molestias corrupti, doloribus atque quas! Quod consequuntur ullam veniam laborum tempore ratione modi accusamus numquam quaerat, ut possimus a ducimus dolores quis fugit quos quae eum nulla obcaecati eos quibusdam! Quasi omnis pariatur sit. Sequi dicta saepe necessitatibus. Soluta nemo sunt dolores autem. Maiores laboriosam tempora, totam unde rerum nam voluptas ea quasi non harum. Illo blanditiis ex debitis eos autem vel atque quaerat? Facilis consequuntur voluptatibus blanditiis optio unde molestias quis id fuga tempore iusto delectus illum fugiat et vitae ipsum, eveniet distinctio? Dignissimos blanditiis incidunt ex ducimus! Quas eveniet repudiandae eum dolor odio quae, libero deleniti laudantium saepe minus, voluptatibus beatae ducimus mollitia, deserunt explicabo quam aperiam aspernatur. Expedita, fugiat sunt? Iure ad non repellendus voluptates voluptate rem dolore eos a, ex doloribus recusandae temporibus nobis autem incidunt dolorem expedita quibusdam velit provident aspernatur eaque architecto beatae voluptatem? Nihil veniam laborum quasi maiores voluptatem, suscipit soluta modi porro consequatur nisi in ad magni, voluptates aspernatur accusamus vero illo blanditiis aperiam adipisci eaque eum illum. Sunt magnam, pariatur sequi esse cupiditate dicta sed eveniet autem est laborum facere necessitatibus ut suscipit voluptas eos aut accusamus officiis cumque ullam commodi ratione, dolore nihil numquam quisquam. Dolorem nostrum esse exercitationem vel consequatur dolor suscipit temporibus doloribus totam iusto nisi expedita mollitia magni consequuntur dolorum sapiente facere deserunt saepe laudantium, numquam dolores doloremque quidem aperiam! Praesentium dicta consequatur dolorum! Recusandae doloremque, quia ipsum ipsa, neque dolorum vero in amet distinctio dolorem incidunt, iste obcaecati repellendus dolore explicabo possimus aut officia? Debitis, itaque. Ullam minus officiis in quibusdam dolorum cupiditate laudantium nobis quae beatae dolorem fugiat, accusamus iste distinctio blanditiis quidem molestiae voluptatibus nam repudiandae modi sed veniam voluptas vel aut! Illo, tempora vero. Eum adipisci cum libero cupiditate maiores. Ipsam, architecto perspiciatis vel rem molestias commodi! Voluptas repellendus iure veniam repudiandae alias nesciunt debitis, magnam ex ipsam accusantium! Eum, deserunt! Pariatur velit numquam quam, voluptate vitae labore laborum voluptates explicabo cupiditate natus iste tempore odio delectus ipsum. Amet voluptatem eos velit suscipit harum iure libero illo mollitia sequi accusantium, porro voluptate optio quae, laborum placeat eum quibusdam totam recusandae veniam, accusamus iste vitae consectetur doloremque. Fuga minus enim repellat officiis illo quam earum sint voluptatibus sequi dolor libero assumenda, ullam, possimus natus nulla modi excepturi delectus in neque ea? Deserunt nesciunt animi vitae nam, reprehenderit iure id? In atque ipsam vero minima iure voluptas quae molestias eos sit, reiciendis magnam inventore natus ratione est corporis itaque voluptate tempora laborum dolorem consectetur asperiores vitae sequi! Ratione, aut odio eum itaque ea ut dolore atque corrupti! Nemo exercitationem explicabo pariatur magnam quisquam illum autem. Doloremque quidem, iure optio impedit nam aut! Obcaecati expedita laudantium voluptatum perspiciatis dolore iusto dignissimos id neque deleniti aliquam. Aliquid atque autem ipsa similique aspernatur, nesciunt officia accusantium dolorem velit optio labore natus voluptas obcaecati voluptatibus ipsum praesentium deserunt ab quibusdam ut, ipsam hic asperiores delectus. Molestiae magni eum nostrum atque quos natus est sit consectetur sed beatae, praesentium accusantium ab provident corporis. Exercitationem, totam eius deleniti sit velit architecto, sed ratione at expedita, atque molestiae nobis eligendi? Libero optio omnis unde eligendi nesciunt quam corrupti eius magni provident. Quasi nam ipsa vel commodi et, doloremque dolores aperiam eum, iste earum provident similique numquam, repudiandae quod tempora! Nobis explicabo aliquid quasi, natus, tempora voluptatem fugit esse excepturi velit atque perferendis officiis saepe voluptatum asperiores! Impedit unde saepe error minus expedita incidunt, esse, commodi distinctio beatae totam ipsam? Repudiandae dolorum ea iusto veritatis quos cupiditate illum iste dignissimos. Voluptate totam ea ipsum ipsa voluptatem, sed, tenetur consequatur expedita pariatur, aliquam corporis? Saepe quas nemo provident labore. Voluptatibus soluta dicta cupiditate aliquid nihil explicabo eveniet quia itaque eum sunt unde doloremque qui pariatur ea voluptatum, excepturi culpa? Tempora quo ex, eaque, exercitationem praesentium aut perspiciatis rerum architecto eveniet nisi minima molestias cupiditate.

 
 <h1>hello</h1>
 </div>


    </>
  )
}

Home.defaultProps={
  title:"Please set title"
}

import React from 'react';
import Schoolform from '../Schoolform/Schoolform';
import './School.css';

const School = ({ onRouteChange}) => {
  return (
    <div>
      <div id="want">
   <p>want to upgrade your <br/>school transportation  to next level ?</p>
    
    </div>
    <div class="benifits">
    <p> Benefits of joing ridesgo !</p>
    </div>
    
    
           <div class = "horizontal">   
        <div class="item">
        <img src= "  data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///9NTU8/P0FEREbNzc1CQkSkpKU7Oz09PUDq6utKSkzY2Ng5OTyTk5RHR0ng4OD29vbx8fGqqqpQUFJlZWdVVVdqamxdXV94eHmBgYJvb3GOjo/CwsLj4+OZmZq+vr59fX6IiImfn6CoqKi0tLUzMzXJycngIAJhAAAKgUlEQVR4nO2dCXviIBCGGzCGYMSk1qNaz9r+/5+4Jl5hmJyQYly+59l2t7qBV66ZYaBvb05OTk5OTk5OTk7/m8JNgv48DsP4j6vSiUY0CqLZBP74a3n+eRCR+XFjo1YmRbnneTz4zjfXaDglwsvEaTTfWaucCW2iCwmNhtefxEMaZNg3ceLj3bgfmrAbCGUfh/V6/hFRD8p/t11NDSVBrrGEEJwrfJ4n1rarqaE4QIheizCqQUj73EvrEX7brqaGHKEjfH45Qkf4/HKEjvD55Qgd4fPrP/YtBKU+8alIPWI6rH7Q0+pCSAIh4XFGl9vj7utreEijGuLTdjU1lBGSQbgK7uELToPZIPeWYcT2tqpnQJc2PP9lMI/ouU8KGi3fQYh0M1bCqT1SRsizv27ej5/Lz/c+Rw4xZYS+7Vp0qcs4fIn9iQJlhIEj7LMcYf+VRfXZ6xParkWXGpF0teizzVKhZJptAU9ftpvG04u9LRa2a9KR4unNaRKzl2zFePbwCl8S8dGCmVcoXg4xmQG/fvpiflOs5CTwqe06GVU4VZMuXmosJhTNKnmddXGDAqbTTWi7amYUFgCeEb2XmG7wLnpF5C+AmCCTzEt11LIWzBD9niMmXjlg762buLSLXhG9HiPKtmhxK/Y29bke4BkxGtmuajuForqLXhX0MrAR4gnADPspD3rYUXFLxl9uVj6GyHrXUXFblKbbu2uCtmLPOuooQgE/shf3GKIX9aqjhuhoo6vrywe0o9IeWTchasnQ+f0NSxTRbqj4dziuq+0n2oJ+PsXiwJB3eMFhW7eQ9fbLLOAqoqKuKLrO37voRWN0LIoGpQRzk9beh3p2p6H8JXgkOqM2kskoyFIfUM0CQqebRqJ7U4CDOtlo5YCwBVPpd4zgZAZwU+ewUqkoBnheF7URIzOz76K2AV0E+FHw5JUuIp+ZADzoVgPMonlpd1RR/Oza+tIdhGC3ULLNYm1Epn2oNtRuwbn0vPnPQprjD7qLhrb3PNMchEIeg+eRB36iu2hwrgd41CwfdNFsYQWtitqoTYqQH9dQuishlS2r/QUGrNSfmh2VaOSFx5ofL2it/e1xYHb91CyGtHe7FvViZTUBc5YoeEUTsf1m61ivYIBxzDtMoBU1DV//2A5wp2etAcCt/DSAONdDjFqtioneLAMWhTF0eQGipgEXtXGkllqDECwTyMIOrFU966bNkrHVmsNBC6ILAujGH1qfqD9uCjj50SlPyFtmc3zKAu280GrF6LcZ4EZrGhUfEmDhTAnG4l6r0KjZqlhj369YIIBSMk9CA06nFZsNxbFWUYgtWiSTM6rf4E4ULXNUyO5RhWENEXU6ajR4q6vKzfcSgRasNMhM2qik7tbHSmPeBqvcFo1tS/L30v/QGYu8ZvLxqbpWhQLrYK2wr29uLPrbOoATjUFYZaoV1EsOF+vYqLWGosYgBGOwJqDSUTUQ6zhSGmFaANhgZwLExDUQRVFs9q5Te5cJpMSumwxn0IoaNiqpOAk+aj8IhZzbpBrbXFz39jmyAQdaUSO6UBFerMizKxEHLagAksX4uLicmRlvl+rLkkWiESouDy++t15vuZAyRRVvgrJ0lgvTnsvSd44CiGBsLIp9IV+Mb8zWeqp8uECxTNjx0sJZAZfCjnDEG1s0WGF4MTQFCD16HlyXqThtQ3J91wBmpJhCFPhmXkr403J8+yDoBAH5zXXLzh+Se3lwy4AcpOe0jYbT4msnwn1ECGEk/cKyL/lvj3+Sy7tu/47kim1h93tkOsuE6jkTJsciPn+yourWiKX/Jn5Qmlk92o2aS85GP8J1MGdJAUJ1cWLyhxU2r8zg1HWGnDKB5EcFJHzbwrFGnv5qzzEElCxFhVC1gp8dcagYfdKNQepJ55Myf7OWIfq/kTLJgJTDSxtKxo+aB0Ge9waeEAn8ymtTTGAbvu3UJcFfPelJmlOELKdyYmyijEM0W0dEhlKBDGqyG36gFpF8GU3WYDIhfjkWWX3vOszFPK6238P6+h5uvcDHvZJHSs9uv/6+bEjKhG+4HcWpH00bVWP4PV7VzMg8G2+0oQp9Ln4bhu8/97RMQLgq/s8NayFEVI9QP4/tobsnk9urA3ebbPW20iVF9aaosAvCdSHhUDt/7yGiwPwd4TtLfYxUZC8XNzbYhjUv2TJJyG+hr3hO6GI+nU0X0Cr70E19zMkCoUcrizNZmg3CoGrsGy3NShtWpWQhVlt72SCsvBXK5DC0Q+iXm5hfGhtdSGE2CHn5RoJ2ErkkK4TlyZFmm9ASofdTvPdsuihLhCX91GwftUZYvKenl+iFyBYhTAy6Axq0uS+yRugJrmadfXHTLahDyBmLoiAIzl8ihhkhlAVRwC7vIsjg4tFYXvnjdYAew0zLSB8SMYa1sGBZJbI/yDnO1oR8Nonv2qghTo+OkzhOJpP0beEAnT8o+3xE9wfLAG1Avkvu5STISQi6zlVkpJ4FaU0IjMu9Ujt523WCL3KCzbanwWh02s4Y3kGJ3Jfnyv1g8nhWTdrWhESO8HzD/gPXg6KBzKlPGCsIWp0VyI9RvH/wSaufZHtC+bN9VwjBCbK27gK42VQpp0NCuQ1VQtCGbU0x0IZ/SOg37KVtd8stEsrHGRyhI3xCwqarRVvCp5lLKwnbzqVg2+EvCavWw/730ipC4B21XfHBtsNJSX2To1rdzTRKigg4+F/rdx5hAuHjT2i9UjmJ4VfpK+19C6kXTpBfUpz/CJJDW8ePSxv4O7Wz+/lsoET1YTT8Q7K470P62Cjzvdn9DQWOQy1ERm+7s9zH+joh92JmJv3DtOzKyrUA0hLqQGsQ9kOO8A8I0yT2DvuzbUJO6Go9XK84HqQxIMuE9P771UI1Vd+M7BIG+fzfo/bVU6isEgayTfnbCaJNQuU0uZIsbaQUe4TI2UfF6jQgnah+GrK/CrOmRPB4AxbVZ+oeYog0IvcfxaDGnyD3lwNkttKI6o/SkP1VJyzaHob313/V5AMYUM2kEvDp1/0pm8latfDpYXR/Q/hr0C6lsl+G5NpJr8fqA7DTq2pSIrhqV43qy4dh1I/alAeseKbQA1a9Gux2FcWRrvbxO/OAK2PegFCpOsPyfdUszyrCP/Pxm0ei8NyvxoRPHC/FCZVF316srRtCNZwDbgp64nipI/yPCeU39GmHtCbh0+zMNI9595+wqg3RcxDPRAierJ4fENLrifKAmoTA9FFujBPyGVqDdqnn5Z2fDZYxlJsFE9WkrtlL+SxfDpKZRPILc6hWU4OQpeH8VOfv6O1ytzecvyKOXU3CNKp/KcanAo3q+483TBE/1J6PX5dQV47QEbaXIzQle4Q110NtOcLuCF+/lz4ZoeYVyZjwE8jmdy6qz3N2RRigR/TM95WahErA10DJ2H0lSqhAXxVHAVOtz7UxX/D5ob7HhZimEkLw9LvfRTm+z0Xp1ShH9LdtGVN6WF3+SxdCfzHRRcnC5Jlceyq5r62LfmNBJfe1dZUE8scqvlbQEfZFjrD/Kplp0EOP/RMIq+YU715jufgpufL693rZZJ/Fyq9CSwa91++TXmfn5OTk5OTk5OTk5OTk5OSkrX9YOt0Hh2p1MAAAAABJRU5ErkJggg== " class="image2"/>
              <p class="hi">    Brand Enhancement<br/><div class="safe21"> Convert your institution into a brand<br/> by providing an excellent service to the parents <br/>and solving their major problem of mobility. </div> </p>
            </div>  
          
           <div class="item">
        <img src=" https://image.flaticon.com/icons/svg/2929/2929002.svg"  class="image2"/>
               <p class="hi">Safety<br/><div class="safe21">Make your institution more safety-oriented <br/>with Ridesgo smart cab transportation <br/>specially made for childrens.</div></p>
            </div>  

        </div>
       
            <div class = "horizontal">   
        <div class="item">
        <img src= "   https://cdn1.iconfinder.com/data/icons/essentials-2-3-2/32/happy-essential-interface-128.png " class="image2"/>
              <p class="hi"> Stress-Free  Management <br/><div class="safe21"> Toss off your pain of managing your academy <br/>and student transportation altogether. Let <br/>ridego handle the transportation for you</div> </p>
            </div>  
          
           <div class="item">
        <img src=" https://cdn1.iconfinder.com/data/icons/computer-techologies-outline-part-1/128/ic_money_no-128.png "  class="image2"/>
               <p class="hi">No charges<br/><div class="safe21">yes! you heard it right. Ridesgo<br/> will not charge anything from the school<br/> for managing student transportation  </div></p>
            </div>  
        </div>

<div class="get"><p>Get Ridesgo and leave your pain of managing transportation to us</p></div>
    <Schoolform onRouteChange={onRouteChange}/>
       
    </div>
  );
}

export default School;
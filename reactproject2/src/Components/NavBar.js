import OldSchoolMenuLink from './OldSchoolMenuLink';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useState,useEffect } from 'react';
import { faLink } from '@fortawesome/free-solid-svg-icons';
function NavBar(props){
    const [menu,setMenu] = useState([]);
    const [nsx,setNsx] = useState([]);
    
    useEffect(() => {
        fetch("https://localhost:44318/api/DanhMuc/GetAll")
          .then(res => res.json())
          .then(
            (result) => {
              setMenu(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              
            }
          )

          fetch("https://localhost:44318/api/NhaSanXuat/GetAll")
          .then(res => res.json())
          .then(
            (result) => {
              setNsx(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              
            }
          )



      }, [])

      
    return (

        <div className="nav-bar">
            <div className="container">
                <div className="row justify-content-center">
                    
                    <ul className="mb-0">
                        <li>
                            <OldSchoolMenuLink to="/" activeOnlyWhenExact={true} label="Trang Chủ"/>
                        </li>
                        
                        <li>
                            <i className="fa fa-angle-down" />
                            <OldSchoolMenuLink to="/sanpham" activeOnlyWhenExact={false} label="Sản Phẩm">
                                
                            </OldSchoolMenuLink>
                            
                            <div className="menu-product-drop-down">
                            <div className="container">
                                <div className="row">
                                
                                    {menu.map((e)=>{
                                        return (
                                        <div className="col-xl-3 col-lg-3">
                                            <ul className="pl-0">
                                    
                                    <h3>
                                        <a href="/dong-ho-nam" title="Đồng hồ nam">{e.tenTL}</a>
                                    </h3>
                                    {
                                                e.menuSub.map(value => <li>
                                        <i className="fa fa-angle-right" /> 
                                        <Link to={`/danhmuc/${value.slug}`} title="Đồng hồ Philips" >
                                            {value.tenLoaiSP}
                                        </Link> 
                                    </li>)
                                           
                                           }
                                    
                                    
                                    </ul>
                                   </div>
                                        );
                                    })}
                                
                                
                            </div>
                        </div>
                        </div>
                    </li>
                        <li style={{position: 'relative'}}>
                            <i className="fa fa-angle-down" />
                            <OldSchoolMenuLink to="/smart-watch" activeOnlyWhenExact={false} label="SmartWatch">
                                
                            </OldSchoolMenuLink>
                            <ul className="dropdown-menu">

                                {
                                    nsx.map((e)=>{
                                        return (
                                        <li>
                                            <Link to={`/nhasanxuat/${e.slug}`} title="Apple Watch">{e.tenNSX}</Link>
                                        </li>
                                        );
                                    })
                                }
                                
                               
                            </ul>
                        </li>
                        <li>
                            <Link to="/tin-tuc">
                            Tin tức
                            </Link>
                        </li>
                        <li>
                            <Link to="/ve-chung-toi">Về chúng tôi</Link>
                        </li>
                        <li>
                            <Link to="/dia-chi-cua-hang">Địa chỉ cửa hàng</Link>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
            
    </div>
    )
}

export default NavBar;
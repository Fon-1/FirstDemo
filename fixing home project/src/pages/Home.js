import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="frame-parent">
          <div className="ellipse-parent">
            <div className="kid-infomation-container" />
            <div className="kid-profile-avatar">
              <div className="ellipse-group">
                <img className="kid-avatar" alt="" src="/ellipse-1@2x.png" />
                <div className="kid-main-info">
                  <div className="kid-name">
                    Subin
                  </div>
                  <div className="kid-description">3.5 tuổi - Lớp chồi 1A</div>
                </div>
              </div>
              <div className="button" >

                <div className="instance-parent">
                  <img className="frame-inner" alt="" />
                  <div className="tip-tc">Xem tất cả</div>
                </div>
                <img
                  className="image-btn-conten"
                  alt=""
                  src="/hugeiconinterfacesolidmorevertical@2x.png"
                />
              </div>
            </div>
            {/* .itemHomeSummary
              img.--icon
              h5
              p
              a */}

            <div className="today">
              {/* lấy thời gian hôm nay */}
              <div className="ucalendar-alt-parent">
                <img
                  className="mini-image-icon"
                  alt=""
                  src="/ucalendaralt@2x.png"
                />
                <div className="line-div" />
                {/* lấy thời gian hôm nay(fix latter) */}
                <div className="ting-vit">Thứ 2, 23/08/2022</div>
              </div>
              <img className="uangle-down-icon" alt="" />
            </div>
            <div className="kid-today-description-container">
              <div className="kid-today-description">
                Sau 1 tuần nghỉ hè các bạn nhỏ trở lại lớp học rất ngoan và vô
                cùng hào hứng. Hôm nay các bạn nhỏ tiếp tục rèn kỹ năng cắt kéo.
                Có những bạn vẫn chưa cầm kéo tốt các con đã học cách xé những
                dải giấy theo đường dài…..
              </div>
              {/* onClickEvent to see full description */}
              <div className="see-full-content"
              // onClick={()=>SeeFullDes()}
              >{`Xem thêm >>`}</div>
            </div>
            {/* fix later: use loop to take 6 image and the last 
            have onclick to jupm to full album
            */}
            <div className="kid-image">
              <div className="kid-image-album">
                <img
                  className="component-child"
                  alt=""
                  src="/Rectangle 225.png"
                />
              </div>
              <div className="kid-image-album">
                <img
                  className="component-child"
                  alt=""
                  src="/Rectangle 225.png"
                />
              </div>

              <div className="kid-image-album">
                <img
                  className="component-child"
                  alt=""
                  src="/Rectangle 225.png"
                />
              </div>

              <div className="kid-image-album">
                <img
                  className="component-child"
                  alt=""
                  src="/Rectangle 225.png"
                />
              </div>
              <div className="kid-image-album">
                <img
                  className="component-child"
                  alt=""
                  src="/Rectangle 225.png"
                />
              </div>
              <div className="kid-image-album">
                <img
                  className="component-child"
                  alt=""
                  src="/Rectangle 225.png"
                />
              </div>



            </div>

          </div>

          <div className="kid-act-today">
            <div className="block-title">
              <img
                className="block-title-image"
                alt=""
                src="/hugeiconeducationoutlinebookadd@2x.png"
              />
              <div className="block-title-conten">- Hôm nay của bé ? -</div>
            </div>


            <div className="kid-act-today-contain">

              <div className="kid-Sum-Today">

                <div className="component-group">

                  <div className="kid-first-main-act">
                    <div className="icon-3d-wrapper">
                      <img className="icon-3d" alt="" src="/icon-3d@2x.png" />
                    </div>
                    <div className="act-conten-title">
                      <div className="act-title">Hoạt động</div>
                      <div className="act-conten">
                        <p  >Nhận biết, tập nói:</p>

                        ·Môi, mũi...

                      </div>
                    </div>
                    <div className=" see-more-infor">{`Chi tiết  >>`}</div>
                  </div>

                </div>

                
                <div className="component-group">

                  <div className="kid-first-main-act" >
                    <div className="icon-3d-wrapper">
                      <img className="icon-3d" alt="" src="/icon-3d@2x.png" />
                    </div>
                    <div className="act-conten-title">
                      <div className="act-title">Hoạt động</div>
                      <div className="act-conten">
                        <p  >Nhận biết, tập nói:</p>

                        ·Môi, mũi...

                      </div>
                    </div>
                    <div className=" see-more-infor">{`Chi tiết  >>`}</div>
                  </div>
                </div>



                <div className="component-group">

                  <div className="kid-first-main-act">
                    <div className="icon-3d-wrapper">
                      <img className="icon-3d" alt="" src="/icon-3d@2x.png" />
                    </div>
                    <div className="act-conten-title">
                      <div className="act-title">Hoạt động</div>
                      <div className="act-conten">
                        <p  >Nhận biết, tập nói:</p>

                        ·Môi, mũi...

                      </div>
                    </div>
                    <div className=" see-more-infor">{`Chi tiết  >>`}</div>
                  </div>
                </div>

                <div className="component-group">

                  <div className="kid-first-main-act" >
                    <div className="icon-3d-wrapper">
                      <img className="icon-3d" alt="" src="/icon-3d@2x.png" />
                    </div>
                    <div className="act-conten-title">
                      <div className="act-title">Hoạt động</div>
                      <div className="act-conten">
                        <p  >Nhận biết, tập nói:</p>

                        ·Môi, mũi...

                      </div>
                    </div>
                    <div className=" see-more-infor">{`Chi tiết  >>`}</div>
                  </div>
                </div>



              </div>
              {/* onclick popupmodel absent request next day */}
              <div className="kid-absenRequest" >
                <div className="instance-container">
                  <div className="AbsenRequestConten">Báo nghỉ buổi sau cho bé</div>
                </div>
                <img
                  className="image-btn-conten"
                  alt=""
                  src="/hugeiconarrowsbulkarrowright@2x.png"
                />
              </div>
            </div>
          </div>

          {/*  */}
          <div className="nextEvent">
            <div className="block-title">
              <img
                className="block-title-image"
                alt=""
                src="/hugeicontime-and-dateoutlinecalendarcheck@2x.png"
              />
              <div className="block-title-conten">- Sự kiện sắp diễn ra -</div>
            </div>
            <div className="nextEvent-container">
              <div className="nextEvent-conten" >
                <div className="nextEvent-Info">
                  <div className="nextEvent-date-title-place">
                    <div className="nextEvent-date">
                      <div className="getDate-event">
                        THỨ 4
                      </div>
                      <div className="getTime">
                        <div >24</div>
                        <div >T8 / 2022</div>
                      </div>
                    </div>
                    <div className="title-placeOfEvent">
                      <div className="act-title">
                        Lễ khai giảng năm học mới 2022-2023
                      </div>
                      <div className="act-place">
                        <img
                          className="mini-image-icon"
                          alt=""
                          src="/hugeiconnavigation-mapsbulklocation@2x.png"
                        />
                        <div >
                          Trường mầm non Nguyễn Thị...
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="act-conten">
                    Your course has been updated, you can check the new course
                    in your study course.
                  </div>
                </div>
                <img
                  className="even-image"
                  alt=""
                  src="/rectangle-229@2x.png"
                />
              </div>
       
            </div>
          </div>


          <div className="scheduler-plan">
            <div className="block-title">
              <img
                className="block-title-image"
                alt=""
                src="/hugeiconnotes-and-taskoutlinetask@2x.png"
              />
              <div className="block-title-conten">- Kế hoạch trong tuần -</div>
            </div>
            <div className="week-conten">
              <div className="week-conten-image-contain"  >
                <div className="week-conten-title">
                  <div>Thực đơn tuần</div>
                </div>
                <img className="week-conten-image" alt="" src="/image-6@2x.png" />
              </div>
              

              <div className="week-conten-image-contain"  >
                <div className="week-conten-title">
                  <div className="copy-24">Thực đơn tuần</div>
                </div>
                <img className="week-conten-image" alt="" src="/image-6@2x.png" />
              </div>
            </div>
          </div>
          <div className="newest-nofi">
            <div className="block-title">
              <img
                className="block-title-image"
                alt=""
                src="/hugeiconinterfaceoutlinenotificationringing@2x.png"
              />
              <div className="block-title-conten">- THông báo mới nhất -</div>
            </div>

            <div className="noti-parent">

              {/* use for loop to take 2 newest nofi and display on screen */}
              <div className="noti">
                <div className="newest-nofi-container">
                  <div className="noficontainer">
                    <img
                      className="mini-image-icon"
                      alt=""
                      src="/unlock@2x.png"
                    />
                  </div>
                  <div className="noficonten">
                    <div className="nofi-title-conten">
                      <div className="nofi-title">Đóng học phí</div>
                      <div className="nofi-conten">
                        Quý phụ huynh vui lòng đóng học...
                      </div>
                    </div>
                    <div className="nofi-time">1 phút trước</div>
                  </div>
                </div>
              </div>

              {/* when user click on some nofi the nofi will change color */}
              <div className="noti">
                <div className="newest-nofi-container">
                  <div className="noficontainer">
                    <img
                      className="mini-image-icon"
                      alt=""
                      src="/unlock@2x.png"
                    />
                  </div>
                  <div className="noficonten">
                    <div className="nofi-title-conten">
                      <div className="nofi-title">Đóng học phí</div>
                      <div className="nofi-conten">
                        Quý phụ huynh vui lòng đóng học...
                      </div>
                    </div>
                    <div className="nofi-time">1 phút trước</div>
                  </div>
                </div>
              </div>              <div className="noti">
                <div className="newest-nofi-container">
                  <div className="noficontainer">
                    <img
                      className="mini-image-icon"
                      alt=""
                      src="/unlock@2x.png"
                    />
                  </div>
                  <div className="noficonten">
                    <div className="nofi-title-conten">
                      <div className="nofi-title">Đóng học phí</div>
                      <div className="nofi-conten">
                        Quý phụ huynh vui lòng đóng học...
                      </div>
                    </div>
                    <div className="nofi-time">1 phút trước</div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>


      </div>
 
    </>
  );
};

export default Home;

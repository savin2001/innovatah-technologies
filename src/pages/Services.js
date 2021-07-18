import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import Service from "./cat/Service";

const serviceCategories = [
    {
        id: 1,
        title: "Service 1",
        body: "Sed primis habitant vel. Quis sociosqu justo nulla adipiscing blandit lacinia nonummy scelerisque. Id, aliquam felis nunc ligula class. Montes etiam quisque Cursus habitant felis varius luctus id curabitur laoreet aliquet malesuada montes pellentesque in porttitor nec ornare sollicitudin luctus nisl litora sit, class inceptos litora. Sem nisi feugiat. Platea tristique curae; nibh. Vestibulum, per et facilisis porta scelerisque pretium congue venenatis velit porta sed montes sed lectus pulvinar ac magna mauris consectetuer, venenatis viverra purus fusce sem primis imperdiet litora facilisi netus nunc. Nascetur suscipit sodales volutpat tempus non. Condimentum potenti torquent fusce cubilia amet aptent mauris lectus mauris, nullam nulla orci consectetuer. Tempor ridiculus quis. Vestibulum posuere vitae natoque cubilia dictumst tortor posuere. Bibendum potenti donec senectus erat. Ipsum volutpat mi diam tortor cubilia neque. Id pellentesque nullam suscipit eros molestie class sapien dis cum interdum volutpat sagittis litora justo dictum sapien Turpis malesuada mi lacinia iaculis cras risus amet hymenaeos convallis vulputate pulvinar et elementum metus primis accumsan ullamcorper cum potenti penatibus. Taciti nam ante per hac purus augue. Ad etiam. Phasellus leo dictumst hac lorem aptent lorem iaculis in quisque vivamus praesent nec nisi nec varius in arcu per sollicitudin a per. Lacinia venenatis. Cum aenean felis lobortis quam proin morbi ornare dolor hymenaeos et dapibus ipsum ante arcu mus sociis, integer imperdiet netus Pulvinar sapien massa, diam hac hymenaeos eros massa ad euismod molestie augue condimentum pellentesque sapien montes orci senectus fringilla nullam fames velit pretium rhoncus aptent. Scelerisque proin montes senectus sociis faucibus primis conubia lorem tempor. Nibh phasellus vestibulum quis aliquam proin. Laoreet, curae; quis taciti dictum suspendisse dui.",
    },
    {
        id: 2,
        title: "Service 2",
        body: "The operating system (OS) sees RAID arrays as a single logical disk. Disk mirroring or disk striping are two methods used in RAID. Mirroring copies similar data on different hard drives. Striping partitions enables data to be distributed through several disk drives. The storage space on each drive is divided into units ranging from 512 bytes to several megabytes. Many of the disks' stripes are interleaved and addressed in sequence. The operating system (OS) sees RAID arrays as a single logical disk. Disk mirroring or disk striping are two methods used in RAID. Mirroring copies similar data on different hard drives. Striping partitions enables data to be distributed through several disk drives. The storage space on each drive is divided into units ranging from 512 bytes to several megabytes. Many of the disks' stripes are interleaved and addressed in sequence.",
    },
    {
        id: 3,
        title: "Service 3",
        body: "A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels. A device called RAID controller is usually used and it is a system that governs how hard disk drives in a storage array are controlled. It acts as a layer of abstraction between the operating system and the physical disks, introducing disk groups as logical units. A RAID controller can help boost performance and protect data in the event of a failure. It can be software-based or hardware-based. Raid devices will use different versions called levels from 0 through 5. This numbered system made it possible for IT users to differentiate RAID versions. Since then, the number of levels has increased and broken down into three categories: standard, nested and non-standard RAID levels.",
    },
    {
        id: 4,
        title: "Service 4",
        body: "RAID 1 provides excellent read speed and writes speed. If the drive fails, the data will be copied to the replacement drive. RAID 2. In this case, striping occurs at bit-level instead of disk striping using parity. RAID 3 consists of byte-level stripping with a dedicated parity disk. It does not work well when there are a lot of small requests for data, as in a database. RAID 4 is good for sequential access to data and provides good performance. It consists of block-level stripping with a dedicated parity disk. RAID 1 provides excellent read speed and writes speed. If the drive fails, the data will be copied to the replacement drive. RAID 2. In this case, striping occurs at bit-level instead of disk striping using parity. RAID 3 consists of byte-level stripping with a dedicated parity disk. It does not work well when there are a lot of small requests for data, as in a database. RAID 4 is good for sequential access to data and provides good performance. It consists of block-level stripping with a dedicated parity disk. RAID 1 provides excellent read speed and writes speed. If the drive fails, the data will be copied to the replacement drive. RAID 2. In this case, striping occurs at bit-level instead of disk striping using parity. RAID 3 consists of byte-level stripping with a dedicated parity disk. It does not work well when there are a lot of small requests for data, as in a database. RAID 4 is good for sequential access to data and provides good performance. It consists of block-level stripping with a dedicated parity disk.",
    },
    {
        id: 5,
        title: "Service 5",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sed nam pariatur, numquam laboriosam quaerat minus, quae beatae eos reprehenderit, ut earum ipsa tempore. Doloremque itaque blanditiis autem earum ipsam distinctio repellat tempore eligendi animi dolorem? Corporis temporibus repellendus excepturi pariatur ad veniam asperiores cupiditate ipsa dolores consequatur nam quo possimus inventore ex, nihil perferendis officia necessitatibus dolor exercitationem modi vel. Sint minima ducimus nostrum doloribus pariatur quia, quasi vel. Quibusdam itaque corporis esse distinctio libero ipsa perferendis enim officiis voluptates corrupti voluptatum adipisci, aliquid quas laboriosam sed iste! Fuga quasi eum ea a! Odio accusantium possimus velit qui quos deserunt unde veniam soluta suscipit rem, eos quis, quam necessitatibus perspiciatis deleniti dolore atque fuga, vitae quisquam ex? Tempora consectetur expedita vitae odit eius modi possimus quis est dolorum. Adipisci beatae quos minima porro? Voluptate quo voluptas sequi quasi ratione deleniti possimus quis ipsa! Consequatur, eligendi veniam ex incidunt harum doloremque. Explicabo, id? Natus, optio labore! Nobis unde, vitae tempore, accusantium iusto accusamus facere architecto temporibus aliquam ex eum, sint voluptatum! Nesciunt esse nulla, illum perspiciatis quam quia dolor quis voluptatum a quibusdam exercitationem deleniti cupiditate debitis voluptas expedita in impedit at aliquam labore ab qui ex aliquid. Eaque, error! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sed nam pariatur, numquam laboriosam quaerat minus, quae beatae eos reprehenderit, ut earum ipsa tempore. Doloremque itaque blanditiis autem earum ipsam distinctio repellat tempore eligendi animi dolorem? Corporis temporibus repellendus excepturi pariatur ad veniam asperiores cupiditate ipsa dolores consequatur nam quo possimus inventore ex, nihil perferendis officia necessitatibus dolor exercitationem modi vel. Sint minima ducimus nostrum doloribus pariatur quia, quasi vel. Quibusdam itaque corporis esse distinctio libero ipsa perferendis enim officiis voluptates corrupti voluptatum adipisci, aliquid quas laboriosam sed iste! Fuga quasi eum ea a! Odio accusantium possimus velit qui quos deserunt unde veniam soluta suscipit rem, eos quis, quam necessitatibus perspiciatis deleniti dolore atque fuga, vitae quisquam ex? Tempora consectetur expedita vitae odit eius modi possimus quis est dolorum. Adipisci beatae quos minima porro? Voluptate quo voluptas sequi quasi ratione deleniti possimus quis ipsa! Consequatur, eligendi veniam ex incidunt harum doloremque. Explicabo, id? Natus, optio labore! Nobis unde, vitae tempore, accusantium iusto accusamus facere architecto temporibus aliquam ex eum, sint voluptatum! Nesciunt esse nulla, illum perspiciatis quam quia dolor quis voluptatum a quibusdam exercitationem deleniti cupiditate debitis voluptas expedita in impedit at aliquam labore ab qui ex aliquid. Eaque, error! ",
    },
    {
        id: 6,
        title: "Service 6",
        body: "Senectus, quis torquent, quis consectetuer pretium aliquam elit risus quam porta placerat lobortis risus leo. Duis vivamus varius aenean amet mi sapien lorem sapien dictum habitasse hac euismod malesuada nascetur placerat tincidunt, auctor nam ullamcorper dapibus eleifend. Habitasse augue, curae; dignissim enim elit aliquam cum conubia lobortis cras praesent montes, mattis, pulvinar. Ultricies praesent a aptent. Interdum Vitae. Phasellus lacinia nibh justo bibendum, eleifend consequat sagittis dictumst bibendum. Egestas suspendisse per magnis cubilia cum accumsan aliquam habitasse interdum Libero, lorem dapibus nam fermentum proin blandit et malesuada odio hendrerit lectus adipiscing eleifend ultrices. Proin orci augue nec mi montes curabitur venenatis, sollicitudin fermentum laoreet nibh class libero nam penatibus accumsan vehicula sapien hendrerit torquent. Varius accumsan, duis laoreet fames ullamcorper suscipit. Class mauris odio. Phasellus, nisi elit elit senectus cursus risus, mattis diam venenatis lobortis Et sem pede natoque. Convallis leo, eleifend dictum velit quam suscipit morbi nascetur curabitur fames vel aliquam egestas congue nunc venenatis. A malesuada bibendum rutrum laoreet eu tristique phasellus vel praesent non quisque ullamcorper felis phasellus fringilla dignissim egestas aenean ridiculus feugiat felis habitant mi, adipiscing tellus ligula. Ultricies nascetur ullamcorper habitasse non justo dignissim bibendum, erat rutrum laoreet sociis ultricies sollicitudin vestibulum ac facilisis.",
    },
];

const Services = () => {
    return (
        <>
            <div className="container-landing">
                <div className="landing slideLeft">
                    <h1>
                        Services <strong> page</strong>
                    </h1>

                    <Link to="/authorization">
                        <button className="join">Start your journey</button>{" "}
                    </Link>
                </div>
            </div>
            <ScrollAnimation
                className="service-bg"
                animateIn="expandUp"
                animateOnce
            >
                <div className="container">
                    <section className="services section-bg" id="services">
                        <div className="service-container">
                            <h2>Our Services</h2>

                            <div className="row">
                                <Router>
                                    <Route path="/services/:id/:title/:body">
                                        <Service />
                                    </Route>
                                    {serviceCategories.map((item) => (
                                        <div
                                            className="col"
                                            id="service1"
                                            key={item.id}
                                        >
                                            <Link
                                                to={
                                                    "/services/" +
                                                    item.id +
                                                    "/" +
                                                    item.title +
                                                    "/" +
                                                    item.body
                                                }
                                            >
                                                <div className="box">
                                                    <div className="icon">
                                                        <i className="fa fa-briefcase service-icon"></i>
                                                    </div>

                                                    <h4 className="title">
                                                        <p>{item.title}</p>
                                                    </h4>

                                                    <p>
                                                        {item.body.slice(0, 70)}
                                                        ...
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </Router>
                            </div>
                        </div>
                    </section>
                </div>
            </ScrollAnimation>
        </>
    );
};

export default Services;

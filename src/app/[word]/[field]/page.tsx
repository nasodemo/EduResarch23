import data from '../../../../public/data.json'
import styles from './field.module.css'
import {GiPlainCircle} from 'react-icons/gi'
import userdata from '../../../../public/userdata.json'
import Uploadcommentshow from './(fieldcomponent)/(uploadcomment)/uploadcommentshow'

export default function fieldpage(){
    const descriptions=[
        {title: data.description.naturescience.contents.title1, content: data.description.naturescience.contents.content1},
        {title: data.description.naturescience.contents.title2, content: data.description.naturescience.contents.content2},
        {title: data.description.naturescience.contents.title3, content: data.description.naturescience.contents.content3},
        {title: data.description.naturescience.contents.title4, content: data.description.naturescience.contents.content4},
        {title: data.description.naturescience.contents.title5, content: data.description.naturescience.contents.content5},
        {title: data.description.naturescience.contents.title6, content: data.description.naturescience.contents.content6},

    ]

    const comments=[
        {username: userdata.user1.username, comment: userdata.user1.comment},
        {username: userdata.user2.username, comment: userdata.user2.comment}
    ]
    return (
        <div>
        <div className={styles.container}>
            <h2 className={styles.header}>{data.description.naturescience.field}</h2>
            {descriptions.map((item, index) => (
                <div key={index}>
                    <h3 className={styles.title}>{index+1}. {item.title}</h3>
                    <p className={styles.paragraph}>{item.content}</p>
                    <br/>
                </div>
            ))}
            
        </div>
        <hr/>
        
        {comments.map((item) => (
            <div className={styles.commentContainer}>
                <div className={styles.flexContainer}>
                    <GiPlainCircle className={styles.icon}/>
                    &nbsp;
                    <h3 className={styles.username}>{item.username}</h3>
                </div>
                <p>{item.comment}</p>
            </div>
        ))}
        <Uploadcommentshow/>
        </div>
    );
}
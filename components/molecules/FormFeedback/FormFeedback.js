import styles from './FormFeedback.module.scss';
import {Input} from "@/components/atoms/Input/Input";
import {useEffect, useState} from "react";
import {Textarea} from "@/components/atoms/Textarea/Textarea";
import {Button} from "@/components/atoms/Button/Button";

export const FormFeedback = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const [isValid, setIsValid] = useState(false);

  const onSubmitForm = () => {
    if (!isValid) return;
    console.log(name, phone, description)
  }

  useEffect(() => {
    if (name.length > 0 && phone.length > 0 && description.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, phone, description]);

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <Input value={name} setValue={setName} label='Ваше имя *' />
        <Input value={phone} setValue={setPhone} label='Телефон или мессенджер *' />
      </div>
      <Textarea value={description} setValue={setDescription} label='Краткое описание задачи *' rows={5}/>
      <div className={styles.form_btn}>
        <Button onClick={onSubmitForm} disabled={!isValid}>Отправить</Button>
      </div>
    </form>
  )
}

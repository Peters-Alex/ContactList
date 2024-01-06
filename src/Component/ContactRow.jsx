export default function ContactRow({contact}) {
    console.log(contact)    
    
        return(
            <tr> 
                <td>
                    name: {contact.name}
                </td>
                <td>
                    phone: {contact.phone}
                </td>
                <td>
                    email: {contact.email}
                </td>
            </tr>
        )
}
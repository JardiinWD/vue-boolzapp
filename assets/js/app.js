// Milestone 1

/*
- Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
e dall’interlocutore (bianco) assegnando due classi CSS diverse

- Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
visualizzare nome e immagine di ogni contatto
*/

// Milestone 2

/* 
- Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti 
i messaggi relativi al contatto attivo all’interno del pannello della conversazione

- Click sul contatto mostra la conversazione del contatto cliccato
*/

const app = new Vue({
    // Riferimento all'container con id App
    el: '#app',
    // dati contenuti
    data: {
        // Classi con V-BIND
        // Aside Zone
        row_aside_class: "row h-100 g-0 d-flex flex-column flex-wrap",
        row_main_class: "row h-100 g-0 d-flex flex-column flex-wrap",
        active_chat_class: "col-12 h_xs d-flex bg_active_Chat flex-row justify-content-between align-content-center",
        notification_chat_class: "col-12 h_sm d-flex flex-nowrap justify-content-center align-content-center bg_ricevi_notifiche",
        input_search_class: "col-12 h_xs gx-4 bg_active_Chat d-flex justify-content-center align-items-center",
        all_chat_class: "col-12 h_md bg_Chat_and_Answer d-flex flex-column justify-content-start overflow_s",
        // Main zone
        upper_user_chat: "col-12 h_xs d-flex bg_active_Chat flex-row justify-content-between align-content-center",
        message_zone_class: "col-12 h_xl overflow_s bg_chat_image d-flex flex-column align-items-center p-5",
        type_message_class: "col-12 h_xs d-flex flex-nowrap justify-content-center align-items-center bg_type",
        // Struttura dati dei contatti
        contacts: [
            { // Michele
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            { // Fabio

                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            { // Samuele
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            { // Alessandro
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            { // Alessandro L.
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
                ],
            },
            { // Claudia
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
                ],
            },
            { // Federico
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
                ],
            },
            { // Davide
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
                ],
            }
        ],
    },
})
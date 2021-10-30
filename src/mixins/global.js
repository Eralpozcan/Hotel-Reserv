export const global = {
    data(){
        return {

        }
    },
    methods:{

    },
    computed:{
        CalDate(){
            let start = new Date(this.startdate)
            let end = new Date(this.enddate)
            return this.stayedDate = ((end - start)/86400000)
        }
    }
}
 // Cmrt Ders
export const filters = {
    filters: {
        capitalize: function (value) {
          if (!value) return ''
          value = value.toString()
          return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}

import { minLength, required, email, numeric, maxLength } from "vuelidate/lib/validators";


export const vuelidate = {
    validations: {
        name: {
            required,
            minLength:minLength(3),
        },
        surname: {
            required,
            minLength:minLength(3),
        },
        mail:{
          required,
          email,  
        },
        age:{
            required,
            numeric,
        },
        phone:{
            required,
            numeric,
            minLength:minLength(10),
            maxLength:maxLength(11),
        },
        hes:{
            required,
            minLength:minLength(11),

        },
        citizenId:{
            required,
            minLength:minLength(11),
            numeric,
        },
        checkIndate:{
            required,
        },
        checkOutdate:{
            required,
        }
    }
}
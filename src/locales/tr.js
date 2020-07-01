/**
 * Here we can import additional helper functions to assist in formatting our
 * language. Feel free to add additional helper methods to libs/formats if it
 * assists in creating good validation messages for your locale.
 */
import { sentence as s } from '../libs/formats'

/**
 * This is the ISO 639-1 and (optionally) ISO 639-2 language "tag".
 * Some valid examples:
 * zh
 * zh-CN
 * zh-HK
 * en
 * en-GB
 */
const locale = 'tr'

/**
 * This is an object of functions that each produce valid responses. There's no
 * need for these to be 1-1 with english, feel free to change the wording or
 * use/not use any of the variables available in the object or the
 * arguments for the message to make the most sense in your language and culture.
 *
 * The validation context object includes the following properties:
 * {
 *   args        // Array of rule arguments: between:5,10 (args are ['5', '10'])
 *   name:       // The validation name to be used
 *   value:      // The value of the field (do not mutate!),
 *   vm: the     // FormulateInput instance this belongs to,
 *   formValues: // If wrapped in a FormulateForm, the value of other form fields.
 * }
 */
const localizedValidationMessages = {

  /**
   * Valid accepted value.
   */
  accepted: function ({ name }) {
    return `Lütfen kabul ediniz ${name}.`
  },

  /**
   * The date is not after.
   */
  after: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} tarihi ${args[0]} tarihinden sonra olmalı.`
    }
    return `${s(name)} ileri bir tarih olmalı.`
  },

  /**
   * The value is not a letter.
   */
  alpha: function ({ name }) {
    return `${s(name)} sadece alfabetik karakterler içerebilir.`
  },

  /**
   * Rule: checks if the value is alpha numeric
   */
  alphanumeric: function ({ name }) {
    return `${s(name)} sadece harf ve rakamdan oluşabilir. `
  },

  /**
   * The date is not before.
   */
  before: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} tarihi ${args[0]} tarihinden önce olmalı.`
    }
    return `${s(name)} önceki bir tarih olmalı.`
  },

  /**
   * The value is not between two numbers or lengths
   */
  between: function ({ name, value, args }) {
    const force = Array.isArray(args) && args[2] ? args[2] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} must be between ${args[0]} and ${args[1]}.`
    }
    return `${s(name)} uzunluğu ${args[0]} ve ${args[1]} arasında karakter içerebilir.`
  },

  /**
   * The confirmation field does not match
   */
  confirm: function ({ name, args }) {
    return `${s(name)} eşleşmiyor.`
  },

  /**
   * Is not a valid date.
   */
  date: function ({ name, args }) {
    if (Array.isArray(args) && args.length) {
      return `${s(name)} tarihi geçerli bir tarih değil , lütfen bu formatı kullanınız. ${args[0]}`
    }
    return `${s(name)} tarihi geçerli bir tarih değil.`
  },

  /**
   * The default render method for error messages.
   */
  default: function ({ name }) {
    return `Geçerli bir alan değil.`
  },

  /**
   * Is not a valid email address.
   */
  email: function ({ name, value }) {
    if (!value) {
      return 'Lütfen geçerli bir email adresi giriniz.'
    }
    return `“${value}” is not a valid email address.`
  },

  /**
   * Ends with specified value
   */
  endsWith: function ({ name, value }) {
    if (!value) {
      return `Bu alan geçerli bir değerle bitmiyor.`
    }
    return `“${value}” geçerli bir değerle bitmiyor.`
  },

  /**
   * Value is an allowed value.
   */
  in: function ({ name, value }) {
    if (typeof value === 'string' && value) {
      return `“${s(value)}” kabul edilebilir bir ${name} değil.`
    }
    return `Bu kabul edilebilir bir ${name} değil.`
  },

  /**
   * Value is not a match.
   */
  matches: function ({ name }) {
    return `${s(name)} kabul edilebilir bir değer değil.`
  },

  /**
   * The maximum value allowed.
   */
  max: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `Bu ${args[0]} kadar ${name} seçebilirsiniz.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)}, ${args[0]} değerinden küçük ya da eşit olmalı.`
    }
    return `${s(name)} karakter sayısı ${args[0]} değerinden küçük ya da eşit olmalı`
  },

  /**
   * The (field-level) error message for mime errors.
   */
  mime: function ({ name, args }) {
    return `${s(name)} must be of the the type: ${args[0] || 'Hiçbir dosya biçimine izin verilmiyor.'}`
  },

  /**
   * The maximum value allowed.
   */
  min: function ({ name, value, args }) {
    if (Array.isArray(value)) {
      return `En az bu kadar ${args[0]} ${name}.`
    }
    const force = Array.isArray(args) && args[1] ? args[1] : false
    if ((!isNaN(value) && force !== 'length') || force === 'value') {
      return `${s(name)} en az bu kadar ${args[0]}.`
    }
    return `${s(name)} karakter sayısı ${args[0]} en az bu kadar olmalı.`
  },

  /**
   * The field is not an allowed value
   */
  not: function ({ name, value }) {
    return `“${value}” kabul edilebilir bir ${name} değil.`
  },

  /**
   * The field is not a number
   */
  number: function ({ name }) {
    return `${s(name)} sayı olmalı.`
  },

  /**
   * Required field.
   */
  required: function ({ name }) {
    return `${s(name)} alan zorunludur.`
  },

  /**
   * Starts with specified value
   */
  startsWith: function ({ name, value }) {
    if (!value) {
      return `Bu alan geçerli bir değerle başlamıyor.`
    }
    return `“${value}” alan geçerli bir değerle başlamıyor.`
  },

  /**
   * Value is not a url.
   */
  url: function ({ name }) {
    return `Lütfen geçerli bir url adresi kullanınız.`
  }
}

/**
 * This creates a vue-formulate plugin that can be imported and used on each
 * project.
 */
export default function (instance) {
  instance.extend({
    locales: {
      [locale]: localizedValidationMessages
    }
  })
}

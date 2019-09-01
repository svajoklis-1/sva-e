import _ from 'lodash';
import * as R from 'ramda';

export const types = {
    animal: 0,
    a: 0,

    possiblyAnimal: 1,
    pa: 1,

    vegan: 2,
    v: 2,

    vegetarian: 3,
    vg: 3
};
const t = types;

/*
{
    code: 'E120',
    names: {
        en: 'Carmine Dye from Cochineal Beetles, Natural Red 4'
    },
    types: [t.a]
}
*/

const additives = [
    // ===================================================================================================================== ANIMAL

    {
        code: 'E120',
        names: {
            en: 'Carmine Dye from Cochineal Beetles, Natural Red 4',
            lt: 'Kochinelas, karmino rūgštis, karminas'
        },
        types: [t.a]
    },
    {
        code: 'E441',
        names: {
            en: 'Gelatine',
            lt: 'Želatina'
        },
        types: [t.a]
    },
    {
        code: 'E542',
        names: {
            en: 'Edible Bone Phosphate',
            lt: 'Maistinis kaulų fosfatas'
        },
        types: [t.a]
    },
    {
        code: 'E901',
        names: {
            en: 'Beeswax, white and yellow',
            lt: 'Bičių vaškas'
        },
        types: [t.vg]
    },
    {
        code: 'E904',
        names: {
            en: 'Shellac - Resin from Lac Bug',
            lt: 'Šelakas'
        },
        types: [t.vg]
    },
    {
        code: 'E910',
        names: {
            en: 'L-cysteine',
            lt: 'L-cisteinas'
        },
        types: [t.a]
    },
    {
        code: 'E913',
        names: {
            en: 'Lanolin, sheep wool grease',
            lt: 'Lanolinas'
        },
        types: [t.vg]
    },
    {
        code: 'E920',
        names: {
            en: 'L-cysteine',
            lt: 'L-cisteinas'
        },
        types: [t.pa]
    },
    {
        code: 'E921',
        names: {
            en: 'L-cysteine',
            lt: 'L-cistinas'
        },
        types: [t.pa]
    },
    {
        code: 'E966',
        names: {
            en: 'Lactitol',
            lt: 'Laktitolis'
        },
        types: [t.vg]
    },

    // ===================================================================================================================== POOSIBLY ANIMAL

    {
        code: 'E153',
        names: {
            en: 'Carbon black, Vegetable carbon',
            lt: 'Anglies juodasis'
        },
        types: [t.v]
    },
    {
        code: 'E161g',
        names: {
            en: 'Canthaxanthin',
            lt: 'Kantaksatinas'
        },
        types: [t.v]
    },
    {
        code: 'E161h',
        names: {
            en: 'Zeaxanthin',
            lt: 'Zeaksantinas'
        },
        types: [t.v]
    },
    {
        code: 'E161i',
        names: {
            en: 'Citranaxanthin',
            lt: 'Citranaksantinas'
        },
        types: [t.v]
    },
    {
        code: 'E161j',
        names: {
            en: 'Astaxanthin',
            lt: 'Astaksantinas'
        },
        types: [t.v]
    },
    {
        code: 'E252',
        names: {
            en: 'Potassium nitrate (Saltpetre)',
            lt: 'Kalio nitratas'
        },
        types: [t.v]
    },
    {
        code: 'E270',
        names: {
            en: 'Lactic acid',
            lt: 'Pieno rūgštis'
        },
        types: [t.v]
    },
    {
        code: 'E322',
        names: {
            en: 'Lecithin',
            lt: 'Lecitinas'
        },
        types: [t.v]
    },
    {
        code: 'E325',
        names: {
            en: 'Sodium lactate',
            lt: 'Natrio laktatas'
        },
        types: [t.v]
    },
    {
        code: 'E326',
        names: {
            en: 'Potassium lactate',
            lt: 'Kalio laktatas'
        },
        types: [t.v]
    },
    {
        code: 'E327',
        names: {
            en: 'Calcium lactate',
            lt: 'Kalcio laktatas'
        },
        types: [t.v]
    },
    {
        code: 'E422',
        names: {
            en: 'Glycerol',
            lt: 'Glicerolis'
        },
        types: [t.v]
    },
    {
        code: 'E430',
        names: {
            en: 'Polyoxyethene (8) stearate',
            lt: 'Polioksietileno (8) stearatas'
        },
        types: [t.pa]
    },
    {
        code: 'E431',
        names: {
            en: 'Polyoxyethene (40) stearate',
            lt: 'Polyoxyethylene (40) stearate'
        },
        types: [t.pa]
    },
    {
        code: 'E432',
        names: {
            en: 'Polyoxyethene (20) sorbitan monolaurate (polysorbate 20)',
            lt: 'Polioksietileno (20) sorbitano mono-lauratas'
        },
        types: [t.pa]
    },
    {
        code: 'E433',
        names: {
            en: 'Polyoxyethene (20) sorbitan monooleate (polysorbate 80)',
            lt: 'Polioksietileno (20) sorbitano mono-oleatas'
        },
        types: [t.pa]
    },
    {
        code: 'E434',
        names: {
            en: 'Polyoxyethene (20) sorbitan monopalmitate (polysorbate 40)',
            lt: 'Polioksietileno (20) sorbitano monopalmitatas'
        },
        types: [t.pa]
    },
    {
        code: 'E435',
        names: {
            en: 'Polyoxyethene (20) sorbitan monostearate (polysorbate 60)',
            lt: 'Polioksietileno (20) sorbitano monostearatas'
        },
        types: [t.pa]
    },
    {
        code: 'E436',
        names: {
            en: 'Polyoxyethene (20) sorbitan tristearate (polysorbate 65)',
            lt: 'Polioksietileno (20) sorbitano tristearatas'
        },
        types: [t.pa]
    },
    {
        code: 'E442',
        names: {
            en: 'Ammonium phosphatides',
            lt: 'Amonio fosfatidai'
        },
        types: [t.pa]
    },
    {
        code: 'E470a',
        names: {
            en: 'Sodium, potassium and calcium salts of fatty acids',
            lt: 'Riebalų rūgščių druskos'
        },
        types: [t.pa]
    },
    {
        code: 'E470b',
        names: {
            en: 'Magnesium salts of fatty acids',
            lt: 'Riebalų rūgščių druskos'
        },
        types: [t.pa]
    },
    {
        code: 'E471',
        names: {
            en: 'Mono- and diglycerides of fatty acids (glyceryl monostearate, glyceryl distearate)',
            lt: 'Riebalų rūgščių mono- ir digliceridai'
        },
        types: [t.pa]
    },
    {
        code: 'E472a',
        names: {
            en: 'Acetic acid esters of mono- and diglycerides of fatty acids',
            lt: 'Mono- ir digliceridų esteriai'
        },
        types: [t.pa]
    },
    {
        code: 'E472b',
        names: {
            en: 'Lactic acid esters of mono- and diglycerides of fatty acid',
            lt: 'Mono- ir digliceridų esteriai'
        },
        types: [t.pa]
    },
    {
        code: 'E472c',
        names: {
            en: 'Citric acid esters of mono- and diglycerides of fatty acids',
            lt: 'Mono- ir digliceridų esteriai'
        },
        types: [t.pa]
    },
    {
        code: 'E472d',
        names: {
            en: 'Tartaric acid esters of mono- and diglycerides of fatty acids',
            lt: 'Mono- ir digliceridų esteriai'
        },
        types: [t.pa]
    },
    {
        code: 'E472e',
        names: {
            en: 'Mono- and diacetyl tartaric acid esters of mono- and diglycerides of fatty acids',
            lt: 'Mono- ir digliceridų esteriai'
        },
        types: [t.pa]
    },
    {
        code: 'E472f',
        names: {
            en: 'Mixed acetic and tartaric acid esters of mono- and diglycerides of fatty acids',
            lt: 'Mono- ir digliceridų esteriai'
        },
        types: [t.pa]
    },
    {
        code: 'E473',
        names: {
            en: 'Sucrose esters of fatty acids',
            lt: 'Riebalų rūgščių sacharozės esteriai'
        },
        types: [t.pa]
    },
    {
        code: 'E474',
        names: {
            en: 'Sucroglycerides',
            lt: 'Sacharozės gliceridai'
        },
        types: [t.pa]
    },
    {
        code: 'E475',
        names: {
            en: 'Polyglycerol esters of fatty acids',
            lt: 'Riebalų rūgščių poliglicerolio esteriai'
        },
        types: [t.pa]
    },
    {
        code: 'E476',
        names: {
            en: 'Polyglycerol polyricinoleate',
            lt: 'Poliglicerolio poliricinoleatas'
        },
        types: [t.v]
    },
    {
        code: 'E477',
        names: {
            en: 'Propane-1, 2-diol esters of fatty acids, propylene glycol esters of fatty acids',
            lt: 'Riebalų rūgščių propilenglikolio esteriai'
        },
        types: [t.pa]
    },
    {
        code: 'E478',
        names: {
            en: 'Lactylated fatty acid esters of glycerol and propane-1',
            lt: 'Pieno rūgšties ir riebalų rųgščių glicerolio ir propilenglikolio esterių mišinys'
        },
        types: [t.pa]
    },
    {
        code: 'E479b',
        names: {
            en: 'Thermally oxidized soya bean oil interacted with mono- and diglycerides of fatty acids',
            lt: 'Esterifikuotas sojų aliejus'
        },
        types: [t.pa]
    },
    {
        code: 'E481',
        names: {
            en: 'Sodium stearoyl-2-lactylate',
            lt: 'Natrio stearoil laktatas'
        },
        types: [t.pa]
    },
    {
        code: 'E482',
        names: {
            en: 'Calcium stearoyl-2-lactylate',
            lt: 'Kalcio stearoil laktatas'
        },
        types: [t.pa]
    },
    {
        code: 'E483',
        names: {
            en: 'Stearyl tartrate',
            lt: 'Stearilo tartratas'
        },
        types: [t.pa]
    },
    {
        code: 'E491',
        names: {
            en: 'Sorbitan monostearate',
            lt: 'Sorbitano monostearatas'
        },
        types: [t.pa]
    },
    {
        code: 'E492',
        names: {
            en: 'Sorbitan tristearate',
            lt: 'Sorbitano tristearatas'
        },
        types: [t.pa]
    },
    {
        code: 'E493',
        names: {
            en: 'Sorbitan monolaurate',
            lt: 'Sorbitano monolauratas'
        },
        types: [t.pa]
    },
    {
        code: 'E494',
        names: {
            en: 'Sorbitan monooleate',
            lt: 'Sorbitano monooleatas'
        },
        types: [t.pa]
    },
    {
        code: 'E495',
        names: {
            en: 'Sorbitan monopalmitate',
            lt: 'Sorbitano monopalmitatas'
        },
        types: [t.pa]
    },
    {
        code: 'E570',
        names: {
            en: 'Stearic acid',
            lt: 'Riebalų rūgštys'
        },
        types: [t.pa]
    },
    {
        code: 'E572',
        names: {
            en: 'Magnesium stearate, calcium stearate',
            lt: 'Magnio stearatas'
        },
        types: [t.pa]
    },
    {
        code: 'E585',
        names: {
            en: 'Ferrous lactate',
            lt: 'Geležies laktatas'
        },
        types: [t.v]
    },
    {
        code: 'E627',
        names: {
            en: 'Disodium guanylate, sodium guanylate',
            lt: 'Dinatrio guanilatas'
        },
        types: [t.a]
    },
    {
        code: 'E631',
        names: {
            en: 'Disodium inosinate',
            lt: 'Dinatrio inozinatas'
        },
        types: [t.a]
    },
    {
        code: 'E635',
        names: {
            en: 'Disodium 5′-ribonucleotides',
            lt: 'Natrio ribonukleotidai'
        },
        types: [t.a]
    },
    {
        code: 'E640',
        names: {
            en: 'Glycine and its sodium salt',
            lt: 'Glicinas ir jo sodos druska'
        },
        types: [t.a]
    },

    // ===================================================================================================================== VEGAN

    {
        code: 'E100',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E101',
        names: {
            en: 'Riboflavin, Vitamin B',
            lt: 'Riboflavinas, Vitaminas B'
        },
        types: [t.v]
    },
    {
        code: 'E101a',
        names: {
            en: 'Riboflavin-5\'-Phosphate, Vitamin B',
            lt: 'Riboflavino-5-fosfatas, vitaminas B'
        },
        types: [t.v]
    },
    {
        code: 'E102',
        names: {
            en: 'Tartrazine',
            lt: 'Tartrazinas'
        },
        types: [t.v]
    },
    {
        code: 'E103',
        names: {
            en: 'Alkannin',
            lt: 'Alkaninas'
        },
        types: [t.v]
    },
    {
        code: 'E104',
        names: {
            en: 'Quinoline Yellow',
            lt: 'Kinolino geltonis'
        },
        types: [t.v]
    },
    {
        code: 'E105',
        names: {
            en: 'Fast Yellow AB',
            lt: 'Greitasis geltonis AB'
        },
        types: [t.v]
    },
    {
        code: 'E106',
        names: {
            en: 'Flavin mononucleotide',
            lt: 'Flavino mononukleatidas'
        },
        types: [t.v]
    },
    {
        code: 'E107',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E110',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E111',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E121',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E122',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E123',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E124',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E125',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E126',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E127',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E128',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E129',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E130',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E131',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E132',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E133',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E140',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E141',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E142',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E143',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E150a',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E150b',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E150c',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E150d',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E151',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E152',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E154',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E155',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E160a',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E160b',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E160c',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E160d',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E160e',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E160f',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E161a',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E161b',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E161c',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E161d',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E161e',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E161f',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E162',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E163',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E170',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E171',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E172',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E173',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E174',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E175',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E180',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E181',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },

    {
        code: 'E200',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E201',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E202',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E203',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E210',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E211',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E212',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E213',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E214',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E215',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E216',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E217',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E218',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E219',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E220',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E221',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E222',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E223',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E224',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E225',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E226',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E227',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E228',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E230',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E231',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E232',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E233',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E234',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E235',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E236',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E237',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E238',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E239',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E240',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E242',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E249',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E250',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E251',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E260',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E261',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E262',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E263',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E264',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E280',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E281',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E282',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E283',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E284',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E285',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E290',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E296',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E297',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },

    {
        code: 'E300',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E301',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E302',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E303',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E304',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E306',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E307',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E308',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E309',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E310',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E311',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E312',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E315',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E316',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E317',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E318',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E319',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E320',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E321',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E329',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E330',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E331',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E332',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E333',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E334',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E335',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E336',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E337',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E338',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E339',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E340',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E341',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E343',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E350',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E351',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E352',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E353',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E354',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E355',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E356',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E357',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E363',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E365',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E366',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E367',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E370',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E375',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E380',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E381',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E385',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E400',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E401',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E402',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E403',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E404',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E405',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E406',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E407',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E407a',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E410',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E412',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E413',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E414',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E415',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E416',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E417',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E418',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E420',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E421',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E425',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E440',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E444',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E445',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E450',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E451',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E452',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E459',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E460',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E461',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E462',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E463',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E464',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E465',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E466',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E468',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E469',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },

    {
        code: 'E500',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E501',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E503',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E504',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E507',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E508',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E509',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E510',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E511',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E512',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E513',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E517',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E518',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E519',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E520',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E521',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E522',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E523',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E524',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E525',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E526',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E527',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E528',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E529',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E530',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E535',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E536',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E538',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E540',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E541',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E543',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E544',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E545',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E550',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E551',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E552',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E553b',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E554',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E555',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E556',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E558',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E559',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E574',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E575',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E576',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E577',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E578',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E579',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },

    {
        code: 'E620',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E621',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E622',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E623',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E624',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E625',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E626',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E628',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E629',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E630',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E632',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E633',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E634',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E636',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E637',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },

    {
        code: 'E900',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E902',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E903',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E905',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E905a',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E905b',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E905c',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E906',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E907',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E908',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E912',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E914',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E915',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E922',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E923',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E924',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E925',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E926',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E927',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E297b',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E928',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E930',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E938',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E939',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E940',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E941',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E942',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E943a',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E943b',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E944',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E948',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E949',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E950',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E951',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E952',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E953',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E954',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E955',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E957',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E959',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E965',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E967',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E999',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },

    {
        code: 'E1103',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1105',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1106',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1107',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1108',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1109',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1110',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1111',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1112',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1113',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1114',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1115',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1116',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1117',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1118',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1119',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1120',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1121',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1122',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1123',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1124',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1125',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1126',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1127',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1128',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1129',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1130',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1131',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1132',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1133',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1134',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1135',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1136',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1137',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1138',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1139',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1140',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1141',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1142',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1143',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1144',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1145',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1146',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1147',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1148',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1149',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1150',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1151',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1152',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1153',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1154',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1155',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1156',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1157',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1158',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1159',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1160',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1161',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1162',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1163',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1164',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1165',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1166',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1167',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1168',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1169',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1170',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1171',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1172',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1173',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1174',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1175',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1176',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1177',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1178',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1179',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1180',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1181',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1182',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1183',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1184',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1185',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1186',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1187',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1188',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1189',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1190',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1191',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1192',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1193',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1194',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1195',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1196',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1197',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1198',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1199',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1200',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1201',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1202',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1400',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1401',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1402',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1403',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1404',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1410',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1412',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1413',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1414',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1420',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1421',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1422',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1430',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1440',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1441',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1442',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1450',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1451',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1505',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1510',
        names: {
            en: 'Ethanol',
            lt: 'Etanolis'
        },
        types: [t.v]
    },
    {
        code: 'E1518',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    },
    {
        code: 'E1520',
        names: {
            en: '',
            lt: ''
        },
        types: [t.v]
    }
];

additives.push({
    code: null,
    names: { en: 'Casein protein', lt: 'Kazeino baltymai' },
    types: [t.vg]
});

const addsIndex = R.indexBy(R.prop('code'), additives);

addsIndex['E120'].names.lt = 'Kochinelas, karmino rūgštis, karminas';
addsIndex['E441'].names.lt = 'Želatina';
addsIndex['E542'].names.lt = 'Maistinis kaulų fosfatas';
addsIndex['E901'].names.lt = 'Bičių vaškas';
addsIndex['E904'].names.lt = 'Šelakas';
addsIndex['E913'].names.lt = 'Lanolinas';
addsIndex['E920'].names.lt = 'L-cisteinas';
addsIndex['E921'].names.lt = 'L-cistinas';
addsIndex['E966'].names.lt = 'Laktitolis';
addsIndex['E153'].names.lt = 'Anglies juodasis';
addsIndex['E161h'].names.lt = 'Citranaksantinas';
addsIndex['E252'].names.lt = 'Kalio nitratas';
addsIndex['E270'].names.lt = 'Pieno rūgštis';
addsIndex['E322'].names.lt = 'Lecitinas';
addsIndex['E325'].names.lt = 'Natrio laktatas';
addsIndex['E326'].names.lt = 'Kalio laktatas';
addsIndex['E327'].names.lt = 'Kalcio laktatas';
addsIndex['E422'].names.lt = 'Glicerolis';
addsIndex['E430'].names.lt = 'Polioksietileno (8) stearatas';
addsIndex['E431'].names.lt = 'Polioksietileno (40) stearatas';
addsIndex['E432'].names.lt = 'Polioksietileno (20) sorbitano mono-lauratas';
addsIndex['E434'].names.lt = 'Polioksietileno (20) sorbitano monopalmitatas';
addsIndex['E435'].names.lt = 'Polioksietileno (20) sorbitano monostearatas';
addsIndex['E436'].names.lt = 'Polioksietileno (20) sorbitano tristearatas';
addsIndex['E442'].names.lt = 'Amonio fosfatidai';
addsIndex['E471'].names.lt = 'Riebalų rūgščių mono- ir digliceridai';
addsIndex['E473'].names.lt = 'Riebalų rūgščių sacharozės esteriai';
addsIndex['E474'].names.lt = 'Sacharozės gliceridai';
addsIndex['E475'].names.lt = 'Riebalų rūgščių poliglicerolio esteriai';
addsIndex['E476'].names.lt = 'Poliglicerolio poliricinoleatas';
addsIndex['E477'].names.lt = 'Riebalų rūgščių propilenglikolio esteriai';
addsIndex['E478'].names.lt = 'Pieno rūgšties ir riebalų rųgščių glicerolio ir propilenglikolio esterių mišinys';
addsIndex['E481'].names.lt = 'Natrio stearoil laktatas';
addsIndex['E482'].names.lt = 'Kalcio stearoil laktatas';
addsIndex['E483'].names.lt = 'Stearilo tartratas';
addsIndex['E491'].names.lt = 'Sorbitano monostearatas';
addsIndex['E492'].names.lt = 'Sorbitano tristearatas';
addsIndex['E493'].names.lt = 'Sorbitano monolauratas';
addsIndex['E494'].names.lt = 'Sorbitano monooleatas';
addsIndex['E495'].names.lt = 'Sorbitano monopalmitatas';
addsIndex['E570'].names.lt = 'Riebalų rūgštys';
addsIndex['E572'].names.lt = 'Magnio stearatas';
addsIndex['E585'].names.lt = 'Geležies laktatas';
addsIndex['E627'].names.lt = 'Dinatrio guanilatas';
addsIndex['E631'].names.lt = 'Dinatrio inozinatas';
addsIndex['E635'].names.lt = 'Natrio ribonukleotidai';
addsIndex['E640'].names.lt = 'Glicinas';
addsIndex['E100'].names.lt = 'Kurkuminas';
addsIndex['E101'].names.lt = 'Riboflavinas';
addsIndex['E104'].names.lt = 'Chinolino geltonasis';
addsIndex['E107'].names.lt = 'Geltonasis 2G';
addsIndex['E110'].names.lt = 'Saulėlydžio geltonasis FCF';
addsIndex['E122'].names.lt = 'Azorubinas, karmosinas';
addsIndex['E123'].names.lt = 'Amarantas';
addsIndex['E124'].names.lt = 'Ponso 4R, Kochinelas raudonasis A';
addsIndex['E127'].names.lt = 'Eritrozinas';
addsIndex['E128'].names.lt = 'Raudonasis 2G';
addsIndex['E129'].names.lt = 'Alura raudonasis AC';
addsIndex['E131'].names.lt = 'Patent mėlynasis';
addsIndex['E132'].names.lt = 'Indigotinas, Indigokarminas';
addsIndex['E133'].names.lt = 'Brilliantinis mėlynasis FCF';
addsIndex['E140'].names.lt = 'Chlorofilas';
addsIndex['E141'].names.lt = 'Chlorofilų vario kompleksai';
addsIndex['E142'].names.lt = 'Žaliasis S';
addsIndex['E151'].names.lt = 'Juodasis PN';
addsIndex['E154'].names.lt = 'Rudasis KF';
addsIndex['E155'].names.lt = 'Rudasis FT';
addsIndex['E160a'].names.lt = 'karotinas';
addsIndex['E160b'].names.lt = 'Anatas, Biksinas, Norbiksinas';
addsIndex['E160c'].names.lt = 'Kapsantinas';
addsIndex['E160d'].names.lt = 'Likopenas';
addsIndex['E160e'].names.lt = 'beta-apo-8\'-karotenalis';
addsIndex['E160f'].names.lt = 'Beta-apo-8\'-karotino rūgšties etilesteris';
addsIndex['E161a'].names.lt = 'Flavoksantinas';
addsIndex['E161b'].names.lt = 'Luteinas';
addsIndex['E161c'].names.lt = 'Kriptoksantinas';
addsIndex['E161d'].names.lt = 'Rubiksantinas';
addsIndex['E161e'].names.lt = 'Violaksantinas';
addsIndex['E161f'].names.lt = 'Rodoksantinas';
addsIndex['E162'].names.lt = 'Burokėlių raudonasis (betaninas)';
addsIndex['E163'].names.lt = 'Antocia(ni)nai';
addsIndex['E170'].names.lt = 'Kalcio karbonatas';
addsIndex['E171'].names.lt = 'Titano dioksidas';
addsIndex['E172'].names.lt = 'Geležies oksidai';
addsIndex['E173'].names.lt = 'Aliuminis';
addsIndex['E174'].names.lt = 'Sidabras';
addsIndex['E175'].names.lt = 'Auksas';
addsIndex['E180'].names.lt = 'Pigmentas Rubinas';
addsIndex['E181'].names.lt = 'Taninai';
addsIndex['E200'].names.lt = 'Sorbo rūgštis';
addsIndex['E201'].names.lt = 'Natrio sorbatas';
addsIndex['E202'].names.lt = 'Kalio sorbatas';
addsIndex['E203'].names.lt = 'Kalcio sorbatas';
addsIndex['E210'].names.lt = 'Benzoinė rūgštis';
addsIndex['E211'].names.lt = 'Natrio benzoates';
addsIndex['E212'].names.lt = 'Kalio benzoatas';
addsIndex['E213'].names.lt = 'Kalcio benzoatas';
addsIndex['E214'].names.lt = 'Etilo-p-hidroksibenzoatas';
addsIndex['E215'].names.lt = 'Natrio etilo p-hidroksibenzoatas';
addsIndex['E216'].names.lt = 'Propilo p-hidroksibenzoatas';
addsIndex['E217'].names.lt = 'Natrio propilo p-hidroksibenzoatas';
addsIndex['E218'].names.lt = 'Metilo p-hidroksibenzoatas';
addsIndex['E219'].names.lt = 'Natrio metilo p-hidroksibenzoatas';
addsIndex['E220'].names.lt = 'Sieros dioksidas';
addsIndex['E221'].names.lt = 'Natrio sulfitas';
addsIndex['E222'].names.lt = 'Natrio rūgštusis sulfitas';
addsIndex['E223'].names.lt = 'Natrio disulfitas';
addsIndex['E224'].names.lt = 'Kalio disulfitas';
addsIndex['E225'].names.lt = 'Kalio sulfitas';
addsIndex['E226'].names.lt = 'Kalcio sulfitas';
addsIndex['E227'].names.lt = 'Kalcio rūgštusis sulfitas';
addsIndex['E228'].names.lt = 'Kalio rūgštusis sulfitas';
addsIndex['E230'].names.lt = 'Difenilas';
addsIndex['E231'].names.lt = 'Fenilfenolis';
addsIndex['E232'].names.lt = 'Fenilfenolio natrio druska';
addsIndex['E233'].names.lt = 'Tiabendazolas';
addsIndex['E234'].names.lt = 'Nizinas';
addsIndex['E235'].names.lt = 'Pimaracinas';
addsIndex['E236'].names.lt = 'Skruzdžių rūgštis';
addsIndex['E237'].names.lt = 'Skruzdžių rūgšties natrio druska';
addsIndex['E238'].names.lt = 'Skruzdžių rūgšties kalcio druska';
addsIndex['E239'].names.lt = 'Heksametilentetraminas';
addsIndex['E240'].names.lt = 'Formaldehidas';
addsIndex['E242'].names.lt = 'Dimetilkarbonatas';
addsIndex['E249'].names.lt = 'Kalio nitritas';
addsIndex['E250'].names.lt = 'Natrio nitritas';
addsIndex['E251'].names.lt = 'Natrio nitratas';
addsIndex['E260'].names.lt = 'Acto rūgštis';
addsIndex['E261'].names.lt = 'Kalio acetatas';
addsIndex['E262'].names.lt = 'Natrio acetates';
addsIndex['E263'].names.lt = 'Kalcio acetatas';
addsIndex['E280'].names.lt = 'Propiono rūgštis';
addsIndex['E281'].names.lt = 'Natrio propionatas';
addsIndex['E282'].names.lt = 'Kalcio propionatas';
addsIndex['E283'].names.lt = 'Kalio propionatas';
addsIndex['E284'].names.lt = 'Boro rūgštis';
addsIndex['E285'].names.lt = 'Natrio tetraboratas';
addsIndex['E290'].names.lt = 'Anglies dioksidas';
addsIndex['E296'].names.lt = 'Obuolių rūgštis';
addsIndex['E297'].names.lt = 'Fumaro rūgštis';
addsIndex['E300'].names.lt = 'Askorbo rūgštis';
addsIndex['E301'].names.lt = 'Askorbo rūgšties natrio druskos';
addsIndex['E302'].names.lt = 'Askorbo rūgšties kalcio druska';
addsIndex['E304'].names.lt = 'Askorbilpalmitatas';
addsIndex['E306'].names.lt = 'Tokoferolių koncentratai';
addsIndex['E307'].names.lt = 'Alfa-tokoferolis';
addsIndex['E308'].names.lt = 'Gama-tokoferolis';
addsIndex['E309'].names.lt = 'Delta -tokoferolis';
addsIndex['E310'].names.lt = 'Propilgalatas';
addsIndex['E311'].names.lt = 'Oktilgalatas';
addsIndex['E312'].names.lt = 'Dodecilgalatas';
addsIndex['E315'].names.lt = 'Eritorbo rūgštis';
addsIndex['E316'].names.lt = 'Natrio eritorbatas';
addsIndex['E319'].names.lt = 'Butilhidroksinonas';
addsIndex['E320'].names.lt = 'Butilintas hidroksianizolas';
addsIndex['E321'].names.lt = 'Butilintas hidroksitoluenas';
addsIndex['E330'].names.lt = 'Citrinų rūgštis';
addsIndex['E331'].names.lt = 'Natrio citratas';
addsIndex['E332'].names.lt = 'Kalio citratas';
addsIndex['E333'].names.lt = 'Kalcio citratas';
addsIndex['E334'].names.lt = 'Vyno rūgštis (L±)';
addsIndex['E335'].names.lt = 'Natrio tartratas';
addsIndex['E336'].names.lt = 'Kalio tartratai';
addsIndex['E337'].names.lt = 'Kalio natrio tartratas';
addsIndex['E338'].names.lt = 'Ortofosfato rūgštis';
addsIndex['E339'].names.lt = 'Natrio fosfatas';
addsIndex['E340'].names.lt = 'Kalio fosfatas';
addsIndex['E341'].names.lt = 'Kalcio fosfatas';
addsIndex['E343'].names.lt = 'Magnio fosfatas';
addsIndex['E350'].names.lt = 'Natrio malatas';
addsIndex['E351'].names.lt = 'Kalio malatai';
addsIndex['E352'].names.lt = 'Kalcio malatai';
addsIndex['E353'].names.lt = 'Metavyno rūgštis';
addsIndex['E354'].names.lt = 'Kalcio tartratas';
addsIndex['E355'].names.lt = 'Adipo rūgštis';
addsIndex['E356'].names.lt = 'Natrio adipatas';
addsIndex['E357'].names.lt = 'Kalio adipatas';
addsIndex['E363'].names.lt = 'Gintaro rūgštis';
addsIndex['E365'].names.lt = 'Natrio fumaratas';
addsIndex['E370'].names.lt = '1,4-Heptonolaktonas';
addsIndex['E375'].names.lt = 'Nikotino rūgštis';
addsIndex['E380'].names.lt = 'Amonio citratas';
addsIndex['E381'].names.lt = 'Amonio geležies citratas';
addsIndex['E385'].names.lt = 'Kalcio dinatrio EDTA';
addsIndex['E400'].names.lt = 'Algino rūgštis';
addsIndex['E401'].names.lt = 'Natrio alginatas';
addsIndex['E402'].names.lt = 'Kalio alginatas';
addsIndex['E403'].names.lt = 'Amonio alginatas';
addsIndex['E404'].names.lt = 'Kalcio alginatas';
addsIndex['E405'].names.lt = 'Propan-1,2-diolio alginatas';
addsIndex['E406'].names.lt = 'Agaras';
addsIndex['E407'].names.lt = 'Karageninas';
addsIndex['E410'].names.lt = 'Saldžiųjų ceratonijų derva';
addsIndex['E412'].names.lt = 'Guaro guma';
addsIndex['E413'].names.lt = 'Tragakantas';
addsIndex['E414'].names.lt = 'Gumiarabikas (akacijų sakai)';
addsIndex['E415'].names.lt = 'Ksantano derva';
addsIndex['E416'].names.lt = 'Karaja sakai';
addsIndex['E418'].names.lt = 'Gelano derva';
addsIndex['E420'].names.lt = 'Sorbitolis';
addsIndex['E421'].names.lt = 'Manitolis';
addsIndex['E440'].names.lt = 'Pektinas';
addsIndex['E450'].names.lt = 'Kalio ir natrio difosfatai';
addsIndex['E451'].names.lt = 'Kalio ir natrio trifosfatai';
addsIndex['E452'].names.lt = 'Polifosfatai';
addsIndex['E460'].names.lt = 'Celiuliozė';
addsIndex['E461'].names.lt = 'Metilceliuliozė';
addsIndex['E462'].names.lt = 'Etilceliuliozė';
addsIndex['E463'].names.lt = 'Hidroksipropilceliuliozė';
addsIndex['E464'].names.lt = 'Hidroksipropilmetilceliuliozė';
addsIndex['E465'].names.lt = 'Etilmetilceliuliozė';
addsIndex['E466'].names.lt = 'Karboksimetilceliuliozė';
addsIndex['E500'].names.lt = 'Natrio karbonatas';
addsIndex['E501'].names.lt = 'Kalio karbonatas';
addsIndex['E503'].names.lt = 'Amonio karbonatas';
addsIndex['E504'].names.lt = 'Magnio karbonatai';
addsIndex['E507'].names.lt = 'Vandenilio chlorido rūgštis';
addsIndex['E508'].names.lt = 'Kalio chloridas';
addsIndex['E509'].names.lt = 'Kalcio chloridas';
addsIndex['E510'].names.lt = 'Amonio chloridas';
addsIndex['E511'].names.lt = 'Magnio chloridas';
addsIndex['E512'].names.lt = 'Alavo chloridas';
addsIndex['E513'].names.lt = 'Sulfato rūgštis';
addsIndex['E517'].names.lt = 'Amonio sulfatas';
addsIndex['E518'].names.lt = 'Magnio sulfatas';
addsIndex['E520'].names.lt = 'Aliuminio sulfatas';
addsIndex['E521'].names.lt = 'Aliuminio natrio sulfatas';
addsIndex['E523'].names.lt = 'Aliuminio amonio sulfatas';
addsIndex['E524'].names.lt = 'Natrio hidroksidas';
addsIndex['E525'].names.lt = 'Kalio hidroksidas';
addsIndex['E526'].names.lt = 'Kalcio hidroksidas';
addsIndex['E527'].names.lt = 'Amonio hidroksidas';
addsIndex['E528'].names.lt = 'Magnio hidroksidas';
addsIndex['E529'].names.lt = 'Kalcio oksidas';
addsIndex['E530'].names.lt = 'Magnio oksidas';
addsIndex['E535'].names.lt = 'Natrio ferocianidas';
addsIndex['E536'].names.lt = 'Kalio ferocianidas';
addsIndex['E538'].names.lt = 'Kalcio ferocianidas';
addsIndex['E541'].names.lt = 'Natrio aliuminio fosfatas';
addsIndex['E543'].names.lt = 'Natrio kalcio polifosfatas';
addsIndex['E544'].names.lt = 'Kalcio polifosfatas';
addsIndex['E545'].names.lt = 'Amonio polifosfatas';
addsIndex['E550'].names.lt = 'Natrio silikatai';
addsIndex['E551'].names.lt = 'Silicio dioksidas';
addsIndex['E552'].names.lt = 'Kalcio silikatas';
addsIndex['E554'].names.lt = 'Natrio aliuminio silikatas';
addsIndex['E555'].names.lt = 'Kalio aliuminio silikatas';
addsIndex['E556'].names.lt = 'Kalcio aliuminio silikatas';
addsIndex['E558'].names.lt = 'Bentonitas';
addsIndex['E559'].names.lt = 'Aliuminio silikatas';
addsIndex['E574'].names.lt = 'Gliukono rūgštis';
addsIndex['E575'].names.lt = 'Gliukono-delta-laktonas';
addsIndex['E576'].names.lt = 'Natrio gliukonatas';
addsIndex['E577'].names.lt = 'Kalio gliukonatas';
addsIndex['E578'].names.lt = 'Kalcio gliukonatas';
addsIndex['E579'].names.lt = 'Geležies gliukonatas';
addsIndex['E620'].names.lt = 'Glutamo rūgštis';
addsIndex['E621'].names.lt = 'Mononatrio glutamatas';
addsIndex['E622'].names.lt = 'Monokalio glutamatas';
addsIndex['E623'].names.lt = 'Kalcio glutamatas';
addsIndex['E624'].names.lt = 'Amonio glutamatas';
addsIndex['E625'].names.lt = 'Magnio diglutamatas';
addsIndex['E626'].names.lt = 'Guanilo rūgštis';
addsIndex['E628'].names.lt = 'Dikalio guanilatas';
addsIndex['E629'].names.lt = 'Kalcio guanilatas';
addsIndex['E630'].names.lt = 'Inozino rūgštis';
addsIndex['E632'].names.lt = 'Dikalio inozinatas';
addsIndex['E633'].names.lt = 'Kalcio inozinatas';
addsIndex['E634'].names.lt = 'Kalcio ribonukleotidai';
addsIndex['E636'].names.lt = 'Maltolis';
addsIndex['E637'].names.lt = 'Etilmaltolis';
addsIndex['E900'].names.lt = 'Dimetilpolisiloksanas';
addsIndex['E902'].names.lt = 'Kandelila vaškas';
addsIndex['E903'].names.lt = 'Karnauba vaškas';
addsIndex['E905'].names.lt = 'Parafinai';
addsIndex['E906'].names.lt = 'Benzoinė guma';
addsIndex['E908'].names.lt = 'Ryžių sėlenų vaškas';
addsIndex['E912'].names.lt = 'Montano rūgščių esteriai';
addsIndex['E915'].names.lt = 'Kolofano esteriai';
addsIndex['E922'].names.lt = 'Kalio persulfatas';
addsIndex['E923'].names.lt = 'Amonio persulfatas';
addsIndex['E925'].names.lt = 'Chlorinas';
addsIndex['E926'].names.lt = 'Chlordioksidas';
addsIndex['E928'].names.lt = 'Benzoilperoksidas';
addsIndex['E930'].names.lt = 'Kalcio peroksidas';
addsIndex['E938'].names.lt = 'Argonas';
addsIndex['E939'].names.lt = 'Helis';
addsIndex['E940'].names.lt = 'Dichlordiflormetanas';
addsIndex['E941'].names.lt = 'Azotas';
addsIndex['E942'].names.lt = 'Nitrito oksidas';
addsIndex['E944'].names.lt = 'Propanas';
addsIndex['E948'].names.lt = 'Deguonis';
addsIndex['E949'].names.lt = 'Vandenilis';
addsIndex['E967'].names.lt = 'Ksilitolis';
addsIndex['E1105'].names.lt = 'Lizocimas';
addsIndex['E1200'].names.lt = 'Polidekstrozė';
addsIndex['E1201'].names.lt = 'Polivinilpirolidonas';
addsIndex['E1202'].names.lt = 'Polivinilpolipirolinonas';
addsIndex['E1400'].names.lt = 'Dekstrinai';
addsIndex['E1401'].names.lt = 'Rūgštimi paveiktas krakmolas';
addsIndex['E1402'].names.lt = 'Šarmu paveiktas krakmolas';
addsIndex['E1403'].names.lt = 'Balintas krakmolas';
addsIndex['E1404'].names.lt = 'Oksiduotasis krakmolas';
addsIndex['E1410'].names.lt = 'Monokrakmolo fosfatas';
addsIndex['E1505'].names.lt = 'Trietilcitratas';
addsIndex['E1518'].names.lt = 'Glicerolio triacetatas';
addsIndex['E1520'].names.lt = 'Propilenglikolis';

addsIndex['E100'].names.en = 'Curcumin';
addsIndex['E107'].names.en = 'Yellow 2G';
addsIndex['E110'].names.en = 'Sunset Yellow';
addsIndex['E122'].names.en = 'Azorubine';
addsIndex['E123'].names.en = 'Amaranth';
addsIndex['E124'].names.en = 'Ponceau 4R';
addsIndex['E127'].names.en = 'Erythrosine';
addsIndex['E128'].names.en = 'Red 2G';
addsIndex['E129'].names.en = 'Allura Red';
addsIndex['E131'].names.en = 'Patent Blue V';
addsIndex['E132'].names.en = 'Indigotine';
addsIndex['E133'].names.en = 'Brilliant Blue FCF';
addsIndex['E140'].names.en = 'Chlorophyll';
addsIndex['E141'].names.en = 'Copper complexes of chlorophyll';
addsIndex['E142'].names.en = 'Brilliant green BS';
addsIndex['E151'].names.en = 'Brilliant Black BN';
addsIndex['E154'].names.en = 'Brown FK';
addsIndex['E155'].names.en = 'Brown HT';
addsIndex['E160a'].names.en = 'Carotenes';
addsIndex['E160b'].names.en = 'Annatto, Bixin, Norbixin';
addsIndex['E160c'].names.en = 'Capsicum (bell pepper) extract';
addsIndex['E160d'].names.en = 'Lycopene';
addsIndex['E160e'].names.en = 'ß-Apo-8\'-carotenal';
addsIndex['E160f'].names.en = 'Ethyl-ß-apo-8\'-carotenate (ethyl ester of ß-apo-8\'-carotenic acid)';
addsIndex['E161a'].names.en = 'Flavoxanthin';
addsIndex['E161b'].names.en = 'Lutein';
addsIndex['E161c'].names.en = 'Cryptoxanthin';
addsIndex['E161d'].names.en = 'Rubixanthin';
addsIndex['E161e'].names.en = 'Violoxanthin';
addsIndex['E161f'].names.en = 'Rhodoxanthin';
addsIndex['E162'].names.en = 'Beetroot extract';
addsIndex['E163'].names.en = 'Anthocyan(in)s';
addsIndex['E170'].names.en = 'Calcium carbonate';
addsIndex['E171'].names.en = 'Titanium dioxide';
addsIndex['E172'].names.en = '172 Iron oxides';
addsIndex['E173'].names.en = 'Aluminium';
addsIndex['E174'].names.en = 'Silver';
addsIndex['E175'].names.en = 'Gold';
addsIndex['E180'].names.en = 'Lithol Rubin BK';
addsIndex['E181'].names.en = 'Tannins';
addsIndex['E200'].names.en = 'Sorbic acid';
addsIndex['E201'].names.en = 'Sodium sorbate / Sorbic acid sodium salt';
addsIndex['E202'].names.en = 'Potassium sorbate / Sorbic acid potassium salt';
addsIndex['E203'].names.en = 'Calcium sorbate / Sorbic acid calcium salt';
addsIndex['E210'].names.en = 'Benzoic acid';
addsIndex['E211'].names.en = 'Sodium benzoate / Benzoic acid sodium salt';
addsIndex['E212'].names.en = 'Potassium benzoate / Benzoic acid potassium salt';
addsIndex['E213'].names.en = 'Calcium benzoate / Benzoic acid calcium salt';
addsIndex['E214'].names.en = 'Ethyl-p-hydroxybenzoate';
addsIndex['E215'].names.en = 'Ethyl-p-hydroxybenzoate sodium salt';
addsIndex['E216'].names.en = 'Propyl-p-hydroxybenzoate';
addsIndex['E217'].names.en = 'Propyl-p-hydroxybenzoate sodium salt';
addsIndex['E218'].names.en = 'Methyl-p-hydroxybenzoate';
addsIndex['E219'].names.en = 'Methyl-p-hydroxybenzoate sodium salt';
addsIndex['E220'].names.en = 'Sulphur dioxide';
addsIndex['E221'].names.en = 'Sodium sulphite';
addsIndex['E222'].names.en = 'Sodium hydrogen sulphite';
addsIndex['E223'].names.en = 'Sodium disulphite';
addsIndex['E224'].names.en = 'Potassium disulphite';
addsIndex['E225'].names.en = 'Potassium sulphite';
addsIndex['E226'].names.en = 'Calcium sulphite';
addsIndex['E227'].names.en = 'Calcium hydrogen sulphite';
addsIndex['E228'].names.en = 'Potassium hydrogen sulphite';
addsIndex['E230'].names.en = 'Diphenyl';
addsIndex['E231'].names.en = 'Phenylphenol';
addsIndex['E232'].names.en = 'Phenylphenol sodium salt';
addsIndex['E233'].names.en = 'Thiabendazole';
addsIndex['E234'].names.en = 'Nisin';
addsIndex['E235'].names.en = 'Pimaracin';
addsIndex['E236'].names.en = 'Formic acid';
addsIndex['E237'].names.en = 'Formic acid sodium salt';
addsIndex['E238'].names.en = 'Formic acid calcium salt';
addsIndex['E239'].names.en = 'Hexamethylene tetramine';
addsIndex['E240'].names.en = 'Formaldehyde';
addsIndex['E242'].names.en = 'Dimethylcarbonate';
addsIndex['E249'].names.en = 'Potassium nitrite';
addsIndex['E250'].names.en = 'Sodium nitrite';
addsIndex['E251'].names.en = 'Sodium nitrate';
addsIndex['E260'].names.en = 'Acetic acid';
addsIndex['E261'].names.en = 'Potassium acetate';
addsIndex['E262'].names.en = 'Sodium acetate';
addsIndex['E263'].names.en = 'Calcium acetate';
addsIndex['E280'].names.en = 'Propionic acid';
addsIndex['E281'].names.en = 'Sodium propionate';
addsIndex['E282'].names.en = 'Calcium propionate';
addsIndex['E283'].names.en = 'Potassium propionate';
addsIndex['E284'].names.en = 'Boric acid';
addsIndex['E285'].names.en = 'Sodium tetraborate';
addsIndex['E290'].names.en = 'Carbon dioxide';
addsIndex['E296'].names.en = 'Malic acid';
addsIndex['E297'].names.en = 'Fumaric acid';
addsIndex['E300'].names.en = 'Ascorbic acid';
addsIndex['E301'].names.en = 'Ascorbic acid sodium salt';
addsIndex['E302'].names.en = 'Ascorbic acid calcium salt';
addsIndex['E304'].names.en = 'Ascorbyl palmitate';
addsIndex['E306'].names.en = 'Tocopherol concentrate';
addsIndex['E307'].names.en = 'Alpha-tocopherol';
addsIndex['E308'].names.en = 'Gamma-Tocopherol';
addsIndex['E309'].names.en = 'd -Tocopherol';
addsIndex['E310'].names.en = 'Propyl gallate';
addsIndex['E311'].names.en = 'Octyl gallate';
addsIndex['E312'].names.en = 'Dodecyl gallate';
addsIndex['E315'].names.en = 'Erythorbic acid';
addsIndex['E316'].names.en = 'Sodium erythorbate';
addsIndex['E319'].names.en = 'Butylhydroxinon';
addsIndex['E320'].names.en = 'Butylated hydroxyanisole';
addsIndex['E321'].names.en = 'Butylated hydroxytoluene';
addsIndex['E330'].names.en = 'Citric acid';
addsIndex['E331'].names.en = 'Sodium citrates';
addsIndex['E332'].names.en = 'Potassium citrates';
addsIndex['E333'].names.en = 'Calcium citrates';
addsIndex['E334'].names.en = 'Tartaric acid';
addsIndex['E335'].names.en = 'Sodium tartarates';
addsIndex['E336'].names.en = 'Potassium tartarates';
addsIndex['E337'].names.en = 'Potassium sodium tartarate';
addsIndex['E338'].names.en = 'Phosphoric acid';
addsIndex['E339'].names.en = 'Sodium phosphates';
addsIndex['E340'].names.en = 'Potassium phosphates';
addsIndex['E341'].names.en = 'Calcium phosphates';
addsIndex['E343'].names.en = 'Magnesium phosphates';
addsIndex['E350'].names.en = 'Sodium malates';
addsIndex['E351'].names.en = 'Potassium malates';
addsIndex['E352'].names.en = 'Calcium malates';
addsIndex['E353'].names.en = 'Meta-tartaric acid';
addsIndex['E354'].names.en = 'Calcium tartarate';
addsIndex['E355'].names.en = 'Adipic acid';
addsIndex['E356'].names.en = 'Sodium adipate';
addsIndex['E357'].names.en = 'Potassium adipate';
addsIndex['E363'].names.en = 'Succinic acid';
addsIndex['E365'].names.en = 'Sodium fumarate';
addsIndex['E370'].names.en = '1,4-Heptonolactone';
addsIndex['E375'].names.en = 'Nicotinic acid';
addsIndex['E380'].names.en = '380 Ammonium citrate';
addsIndex['E381'].names.en = 'Ammonium ferric citrate';
addsIndex['E385'].names.en = 'Calcium disodium EDTA';
addsIndex['E400'].names.en = 'Alginic acid';
addsIndex['E401'].names.en = 'Sodium alginate';
addsIndex['E402'].names.en = 'Potassium alginate';
addsIndex['E403'].names.en = 'Ammonium alginate';
addsIndex['E404'].names.en = 'Calcium alginate';
addsIndex['E405'].names.en = 'Propane-1,2-diol alginate';
addsIndex['E406'].names.en = 'Agar';
addsIndex['E407'].names.en = 'Carrageenan';
addsIndex['E410'].names.en = 'Locust Bean Gum';
addsIndex['E412'].names.en = 'Guar Gum';
addsIndex['E413'].names.en = 'Gum Tragacanth';
addsIndex['E414'].names.en = 'Gum Arabic';
addsIndex['E415'].names.en = 'Xanthan gum';
addsIndex['E416'].names.en = 'Karaya Gum';
addsIndex['E417'].names.en = 'Tara Gum';
addsIndex['E418'].names.en = 'Gellan gum';
addsIndex['E420'].names.en = 'Sorbitol';
addsIndex['E421'].names.en = 'Mannitol';
addsIndex['E440'].names.en = 'Pectins';
addsIndex['E450'].names.en = 'Potassium and sodium di-phosphates';
addsIndex['E451'].names.en = 'Potassium and sodium tri-phosphates';
addsIndex['E452'].names.en = 'Polyphosphates';
addsIndex['E460'].names.en = 'Cellulose';
addsIndex['E461'].names.en = 'Methylcellulose';
addsIndex['E462'].names.en = 'Ethylcellulose';
addsIndex['E463'].names.en = 'Hydroxypropylcellulose';
addsIndex['E464'].names.en = 'Hydroxypropylmethylcellulose';
addsIndex['E465'].names.en = 'Methylethylcellulose';
addsIndex['E466'].names.en = 'Carboxymethylcellulose';
addsIndex['E500'].names.en = 'Sodium carbonates';
addsIndex['E501'].names.en = 'Potassium carbonates';
addsIndex['E503'].names.en = 'Ammonium carbonates';
addsIndex['E504'].names.en = 'Magnesium carbonates';
addsIndex['E507'].names.en = 'Hydrochloric acid';
addsIndex['E508'].names.en = 'Potassium chloride';
addsIndex['E509'].names.en = 'Calcium chloride';
addsIndex['E510'].names.en = 'Ammonium chloride';
addsIndex['E511'].names.en = 'Magnesium chloride';
addsIndex['E512'].names.en = 'Stannous chloride';
addsIndex['E513'].names.en = 'Sulphuric acid';
addsIndex['E517'].names.en = 'Ammonium sulphate';
addsIndex['E518'].names.en = 'Magnesium sulphate';
addsIndex['E520'].names.en = 'Aluminium sulphate';
addsIndex['E521'].names.en = 'Aluminium-sodium sulphate';
addsIndex['E522'].names.en = 'Aluminium-ammonium sulphate';
addsIndex['E523'].names.en = 'Aluminium-ammonium sulphate';
addsIndex['E524'].names.en = 'Sodium hydroxide';
addsIndex['E525'].names.en = 'Potassium hydroxide';
addsIndex['E526'].names.en = 'Calcium hydroxide';
addsIndex['E527'].names.en = 'Ammonium hydroxide';
addsIndex['E528'].names.en = 'Magnesium hydroxide';
addsIndex['E529'].names.en = 'Calcium hydroxide';
addsIndex['E530'].names.en = 'Magnesium hydroxide';
addsIndex['E535'].names.en = 'Sodium ferrocyanide';
addsIndex['E536'].names.en = 'Potassium ferrocyanide';
addsIndex['E538'].names.en = 'Calcium ferrocyanide';
addsIndex['E541'].names.en = 'Sodium aluminium phosphate';
addsIndex['E543'].names.en = 'Sodium calcium polyphosphate';
addsIndex['E544'].names.en = 'Calcium polyphosphate';
addsIndex['E545'].names.en = 'Ammonium polyphosphate';
addsIndex['E550'].names.en = 'Sodium silicates';
addsIndex['E551'].names.en = 'Silicium dioxide';
addsIndex['E552'].names.en = 'Calcium silicate';
addsIndex['E554'].names.en = 'Sodium aluminium silicate';
addsIndex['E555'].names.en = 'Potassium aluminium silicate';
addsIndex['E556'].names.en = 'Calcium aluminium silicate';
addsIndex['E558'].names.en = 'Bentonite';
addsIndex['E559'].names.en = 'Aluminium silicate';
addsIndex['E574'].names.en = 'Gluconic acid';
addsIndex['E575'].names.en = 'Glucono-delta-lactone';
addsIndex['E576'].names.en = 'Sodium gluconate';
addsIndex['E577'].names.en = 'Potassium gluconate';
addsIndex['E578'].names.en = 'Calcium gluconate';
addsIndex['E579'].names.en = 'Iron gluconate';
addsIndex['E620'].names.en = 'Glutamic acid';
addsIndex['E621'].names.en = 'Monosodiumglutamate';
addsIndex['E622'].names.en = 'Monopotassiumglutamate';
addsIndex['E623'].names.en = 'Calcium glutamate';
addsIndex['E624'].names.en = 'Ammonium glutamate';
addsIndex['E625'].names.en = 'Magnesium glutamate';
addsIndex['E626'].names.en = 'Guanylic acid';
addsIndex['E628'].names.en = 'Potassium guanylate';
addsIndex['E629'].names.en = 'Calcium guanylate';
addsIndex['E630'].names.en = 'Inosinic acid';
addsIndex['E632'].names.en = 'Potassium inosinate';
addsIndex['E633'].names.en = 'Calcium inosinate';
addsIndex['E634'].names.en = 'Calcium ribonucleotides';
addsIndex['E636'].names.en = 'Maltol';
addsIndex['E637'].names.en = 'Ethylmaltol';
addsIndex['E900'].names.en = 'Dimethyl-polysiloxane';
addsIndex['E902'].names.en = 'Candellila wax';
addsIndex['E903'].names.en = 'Canauba wax';
addsIndex['E905'].names.en = 'Paraffins';
addsIndex['E906'].names.en = 'Gum benzoic';
addsIndex['E908'].names.en = 'Rice bran wax';
addsIndex['E912'].names.en = 'Montan wax';
addsIndex['E915'].names.en = 'Esters of Colophane';
addsIndex['E922'].names.en = 'Potassium persulphate';
addsIndex['E923'].names.en = 'Ammonium persulphate';
addsIndex['E925'].names.en = 'Chlorine';
addsIndex['E926'].names.en = 'Chlorodioxide';
addsIndex['E928'].names.en = 'Benzoylperoxide';
addsIndex['E930'].names.en = 'Calcium peroxide';
addsIndex['E938'].names.en = 'Argon';
addsIndex['E939'].names.en = 'Helium';
addsIndex['E940'].names.en = 'Dichlorodifluoromethane';
addsIndex['E941'].names.en = 'Nitrogen';
addsIndex['E942'].names.en = 'Nitrous oxides';
addsIndex['E944'].names.en = 'Propane';
addsIndex['E948'].names.en = 'Oxygen';
addsIndex['E949'].names.en = 'Hydrogen';
addsIndex['E965'].names.en = 'Maltitol';
addsIndex['E967'].names.en = 'Xylitol';
addsIndex['E1105'].names.en = 'Lysozyme';
addsIndex['E1200'].names.en = 'Polydextrose';
addsIndex['E1201'].names.en = 'Polyvinylpyrrolidon (PVP)';
addsIndex['E1202'].names.en = 'Insoluble Polyvinylpyrrolidon (PVP)';
addsIndex['E1400'].names.en = 'Dextrins';
addsIndex['E1401'].names.en = 'Acid treated starch';
addsIndex['E1402'].names.en = 'Alkaline treated starch';
addsIndex['E1403'].names.en = 'Bleached starch';
addsIndex['E1404'].names.en = 'Oxidised starch';
addsIndex['E1410'].names.en = 'mono-starch phosphate';
addsIndex['E1412'].names.en = 'Di-starch phosphates';
addsIndex['E1413'].names.en = 'Phosphorylated di-starch phosphate';
addsIndex['E1414'].names.en = 'Acetylated di-starch phosphate';
addsIndex['E1420'].names.en = 'Starch acetate';
addsIndex['E1421'].names.en = 'Starch acetate';
addsIndex['E1422'].names.en = 'Acetylated di-starch adipate';
addsIndex['E1440'].names.en = 'Hydroxypropylstarch';
addsIndex['E1441'].names.en = 'Hydoxypropyl di-starch glycerol';
addsIndex['E1442'].names.en = 'Hydroxypropyl di-starch phosphate';
addsIndex['E1450'].names.en = 'Starch sodium octenyl succinate';
addsIndex['E1505'].names.en = 'Triethyl citrate';
addsIndex['E1518'].names.en = 'Glycerol triacetate';
addsIndex['E1520'].names.en = 'Propylene glycol';

// console.log(_.join(_.map(_.filter(additives, (add) => add.names.lt === ''), (add) => `${add.code} '${add.names.en}' '${add.names.lt}'`), '\n'));
// console.log(JSON.stringify(_.map(_.filter(additives, (add) => add.names.en === ''), (add) => add.code)))

addsIndex['E1412'].names.lt = 'Dikrakmolo fosfatas';

export default additives;

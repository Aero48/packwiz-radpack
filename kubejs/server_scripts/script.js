// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

var vanillaWoodTypes = ['oak', 'birch', 'jungle', 'dark_oak', 'acacia', 'spruce', 'crimson', 'warped', 'mangrove']

var quarkWoodTypes = ['azalea', 'blossom', 'ancient', 'bamboo']

var abnormalsWoodTypes = ['upgrade_aquatic:driftwood', 'upgrade_aquatic:river', 'environmental:willow', 'environmental:cherry', 'environmental:wisteria', 'atmospheric:rosewood', 'atmospheric:morado', 'atmospheric:yucca', 'atmospheric:kousa', 'atmospheric:aspen', 'atmospheric:grimwood', 'autumnity:maple', 'endergetic:poise', 'windswept:holly', 'windswept:chestnut']

ServerEvents.recipes(event => {
	// Change recipes here
	vanillaWoodTypes.forEach(wood => event.remove({ output: 'quark:' + wood + '_chest' }));

	vanillaWoodTypes.forEach(wood => event.remove({ output: 'quark:' + wood + '_ladder' }));

	vanillaWoodTypes.forEach(wood => event.remove({ output: 'quark:' + wood + '_bookshelf' }));

	vanillaWoodTypes.forEach(wood => event.remove({ output: 'quark:' + wood + '_trapped_chest' }));

	vanillaWoodTypes.forEach(wood => event.remove({ output: 'quark:vertical_' + wood + '_planks' }));

	quarkWoodTypes.forEach(wood => event.remove({ output: 'quark:vertical_' + wood + '_planks' }));

	abnormalsWoodTypes.forEach(wood => event.remove({ output: wood.split(':')[0] + ':vertical_'+ wood.split(':')[1] + '_planks' }));

	event.shaped('3x supplementaries:rope', [
		'S',
		'S',
		'S'
	  ], {
		S: 'farmersdelight:straw'
	  })

	event.shaped('3x supplementaries:rope', [
		'T',
		'T',
		'T'
	  ], {
		T: 'spelunkery:tangle_roots'
	  })

	event.shaped('3x supplementaries:rope', [
		'Y',
		'Y',
		'Y'
	  ], {
		Y: 'environmental:yak_hair'
	  })

	event.shaped('minecraft:lead', [
		'RR ',
		'RR ',
		'  R'
	  ], {
		R: 'supplementaries:rope'
	  })

	event.shaped('farmersdelight:safety_net', [
		'RR',
		'RR'
	  ], {
		R: 'supplementaries:rope'
	  })

	event.replaceInput({output: 'spelunkery:rope_ladder'}, 'spelunkery:tangle_roots', 'supplementaries:rope')

	event.remove({output: 'farmersdelight:rope'})

	event.remove({id: 'farmersdelight:safety_net'})
	event.remove({id: 'farmersdelight:lead_from_rope'})

	event.remove({output: 'friendsandfoes:acacia_beehive'})
	event.remove({output: 'friendsandfoes:birch_beehive'})
	event.remove({output: 'friendsandfoes:crimson_beehive'})
	event.remove({output: 'friendsandfoes:dark_oak_beehive'})
	event.remove({output: 'friendsandfoes:jungle_beehive'})
	event.remove({output: 'friendsandfoes:mangrove_beehive'})
	event.remove({output: 'friendsandfoes:spruce_beehive'})
	event.remove({output: 'friendsandfoes:warped_beehive'})

	event.remove({output: 'everycomp:faf/quark/ancient_beehive'})
	event.remove({output: 'everycomp:faf/quark/blossom_beehive'})
	event.remove({output: 'everycomp:faf/quark/bamboo_beehive'})
	event.remove({output: 'everycomp:faf/quark/azalea_beehive'})

	//egg
	event.remove({output: 'farmersdelight:fried_egg'})

	//milk
	event.remove({output: 'farmersdelight:milk_bottle'})

	//pancake
	event.remove({output: 'autumnity:pancake'})

	//Honey apple
	event.remove({output: 'buzzier_bees:honey_apple'})

	//Chocolate
	event.replaceOutput({output: 'create:bar_of_chocolate'}, 'create:bar_of_chocolate', 'neapolitan:chocolate_bar')

	//Driftwood
	event.custom({
		"type": "create:splashing",
  	"ingredients": [
    {
      "tag": "minecraft:logs"
    }
  ],
  "results": [
    {
      "item": "upgrade_aquatic:driftwood_log"
    }
  ]
	})

	// //When Caverns is present

	// //Silver knife
	// event.replaceInput({output: 'abnormals_delight:silver_knife'}, 'caverns_and_chasms:silver_ingot', 'oreganized:silver_ingot')

	// //Lapis Bricks
	// event.remove({id: 'supplementaries:lapis_bricks'})

	// event.shapeless('supplementaries:lapis_bricks', ['minecraft:bricks', 'minecraft:lapis_lazuli'])

	// //Cobble Bricks
	// event.remove({id: 'caverns_and_chasms:cobblestone_bricks'})
	// event.shaped('9x caverns_and_chasms:cobblestone_bricks', [
	// 	'CCC',
	// 	'CCC',
	// 	'CCC'
	// ], {
	// 	C: 'minecraft:cobblestone'
	// })

	// event.remove({id: 'caverns_and_chasms:mossy_cobblestone_bricks'})
	// event.shaped('9x caverns_and_chasms:mossy_cobblestone_bricks', [
	// 	'CCC',
	// 	'CCC',
	// 	'CCC'
	// ], {
	// 	C: 'minecraft:mossy_cobblestone'
	// })

	// //Quark blocks
	// event.remove({output: 'quark:polished_calcite'})
	// event.remove({output: 'quark:polished_tuff'})

	// event.replaceInput({input: 'quark:polished_calcite'}, 'quark:polished_calcite', 'caverns_and_chasms:polished_calcite')
	// event.replaceInput({input: 'quark:polished_tuff'}, 'quark:polished_tuff', 'caverns_and_chasms:polished_tuff')

	// event.remove({output: 'quark:polished_calcite_slab'})
	// event.remove({output: 'quark:polished_calcite_stairs'})
	// event.remove({output: 'quark:polished_tuff_slab'})
	// event.remove({output: 'quark:polished_tuff_stairs'})

	// event.replaceInput({input: 'quark:polished_calcite_slab'}, 'quark:polished_calcite_slab', 'caverns_and_chasms:polished_calcite_slab')
	// event.replaceInput({input: 'quark:polished_tuff_slab'}, 'quark:polished_tuff_slab', 'caverns_and_chasms:polished_tuff_slab')

	// event.remove({output: 'quark:calcite_slab'})
	// event.remove({output: 'quark:calcite_stairs'})
	// event.remove({output: 'quark:calcite_vertical_slab'})

	// event.remove({output: 'quark:tuff_slab'})
	// event.remove({output: 'quark:tuff_stairs'})
	// event.remove({output: 'quark:tuff_vertical_slab'})

	// //Dripstone shingles
	// event.remove({id: 'caverns_and_chasms:dripstone_shingles'})
	// event.shaped('9x caverns_and_chasms:dripstone_shingles', [
	// 	'DDD',
	// 	'DDD',
	// 	'DDD'
	// ], {
	// 	D: 'minecraft:dripstone_block'
	// })

	// //Gold bars
	// event.remove({output: 'quark:gold_bars'})

	// //Depth Meter
	// event.remove({output: 'spelunkery:depth_gauge'})

	// //Nuggets
	// event.remove({output: 'caverns_and_chasms:copper_nugget'})
	// event.remove({output: 'caverns_and_chasms:netherite_nugget'})
})

LootJS.modifiers((event) => {
     event
         .addLootTypeModifier(LootType.CHEST)
         .replaceLoot("farmersdelight:rope", "supplementaries:rope", true)
		 .replaceLoot("farmersdelight:fried_egg", "incubation:fried_egg", true)
		 .replaceLoot("autumnity:pancake", "supplementaries:pancake", true)
		 .replaceLoot("buzzier_bees:honey_apple", "create:honeyed_apple", true)
		 .replaceLoot("create:bar_of_chocolate", "neapolitan:chocolate_bar", true);

	// event.addLootTypeModifier(LootType.CHEST)
	// 	.replaceLoot("caverns_and_chasms:silver_ingot", "oreganized:silver_ingot", true)
	// 	.replaceLoot("caverns_and_chasms:silver_nugget", "oreganized:silver_nugget", true)
		

});

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

ServerEvents.loaded(event => {
	event.server.schedule(5000, () => {
		Utils.server.runCommand('tellraw @p {"text":"Notice: due to a KubeJS bug, scripts must be reloaded on world load. This may take a second...","bold":true}')
		Utils.server.runCommand('reload')
	})
})
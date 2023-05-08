// priority: 0
var quarkWoodTypes = ['oak', 'birch', 'jungle', 'dark_oak', 'acacia', 'spruce', 'crimson', 'warped', 'mangrove', 'ancient', 'azalea', 'blossom', 'bamboo']
var abnormalsWoodTypes = ['upgrade_aquatic:driftwood', 'upgrade_aquatic:river', 'environmental:willow', 'environmental:cherry', 'environmental:wisteria', 'atmospheric:rosewood', 'atmospheric:morado', 'atmospheric:yucca', 'atmospheric:kousa', 'atmospheric:aspen', 'atmospheric:grimwood', 'autumnity:maple', 'windswept:holly', 'windswept:chestnut', 'minecraft:oak', 'minecraft:spruce', 'minecraft:dark_oak', 'minecraft:birch', 'minecraft:mangrove', 'minecraft:jungle', 'minecraft:acacia']

JEIEvents.hideItems(event => {
	
	quarkWoodTypes.forEach(wood => {
		event.hide('quark:vertical_' + wood + "_planks")
	})

	abnormalsWoodTypes.forEach(wood => {
		event.hide(wood.split(':')[0] + ':vertical_'+ wood.split(':')[1] + '_planks' )
	})
})
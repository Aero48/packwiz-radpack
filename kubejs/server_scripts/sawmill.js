var vanillaWoodTypes = ['oak', 'birch', 'jungle', 'dark_oak', 'acacia', 'spruce', 'crimson', 'warped', 'mangrove']
var abnormalsWoodTypes = ['upgrade_aquatic:driftwood', 'upgrade_aquatic:river', 'environmental:willow', 'environmental:cherry', 'environmental:wisteria', 'atmospheric:rosewood', 'atmospheric:morado', 'atmospheric:yucca', 'atmospheric:kousa', 'atmospheric:aspen', 'atmospheric:grimwood', 'autumnity:maple', 'windswept:holly', 'windswept:chestnut', 'minecraft:oak', 'minecraft:spruce', 'minecraft:dark_oak', 'minecraft:birch', 'minecraft:mangrove', 'minecraft:jungle', 'minecraft:acacia']

ServerEvents.recipes(event => {

//Vanilla Vert Slabs
vanillaWoodTypes.forEach(wood => {
    event.custom({
        "type": "forge:conditional",
        "recipes": [
          {
            "conditions": [
              {
                "value": "sawmill",
                "type": "woodworks:config"
              }
            ],
            "recipe": {
              "type": "woodworks:sawmill",
              "ingredient": {
                "item": "minecraft:" + wood + "_planks"
              },
              "result": "quark:" + wood + "_vertical_slab",
              "count": 2
            }
          }
        ]
      })

      event.custom({
        "type": "forge:conditional",
        "recipes": [
          {
            "conditions": [
              {
                "value": "sawmill",
                "type": "woodworks:config"
              }
            ],
            "recipe": {
              "type": "woodworks:sawmill",
              "ingredient": {
                "tag": "minecraft:" + wood + "_logs"
              },
              "result": "quark:" + wood + "_vertical_slab",
              "count": 8
            }
          }
        ]
      })
})


//Abnormals Vertical Slabs
abnormalsWoodTypes.forEach(wood => {
    event.custom({
        "type": "forge:conditional",
        "recipes": [
          {
            "conditions": [
              {
                "value": "sawmill",
                "type": "woodworks:config"
              }
            ],
            "recipe": {
              "type": "woodworks:sawmill",
              "ingredient": {
                "item": wood + "_planks"
              },
              "result": wood + "_vertical_slab",
              "count": 2
            }
          }
        ]
      })

      event.custom({
        "type": "forge:conditional",
        "recipes": [
          {
            "conditions": [
              {
                "value": "sawmill",
                "type": "woodworks:config"
              }
            ],
            "recipe": {
              "type": "woodworks:sawmill",
              "ingredient": {
                "tag": wood + "_logs"
              },
              "result": wood + "_vertical_slab",
              "count": 8
            }
          }
        ]
      })
})

//Quark Wood
    //Azalea
    event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:azalea_planks"
			  },
			  "result": "everycomp:abnww/quark/azalea_boards",
			  "count": 1
			}
		  }
		]
	  })

    event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:azalea_planks"
			  },
			  "result": "quark:azalea_button",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:azalea_planks"
			  },
			  "result": "quark:azalea_fence",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:azalea_planks"
			  },
			  "result": "quark:azalea_planks_slab",
			  "count": 2
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:azalea_planks"
			  },
			  "result": "quark:azalea_planks_vertical_slab",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:azalea_planks"
			  },
			  "result": "quark:azalea_planks_stairs",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:azalea_planks"
			  },
			  "result": "quark:azalea_ladder",
			  "count": 1
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "everycomp:abnww/quark/azalea_boards",
			  "count": 4
			}
		  }
		]
	  })


	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_button",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_door",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_fence",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_fence_gate",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_planks",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_pressure_plate",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_planks_slab",
			  "count": 8
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_planks_vertical_slab",
			  "count": 8
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_planks_stairs",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_trapdoor",
			  "count": 2
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_sign",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:azalea_logs"
			  },
			  "result": "quark:azalea_ladder",
			  "count": 4
			}
		  }
		]
	  })

      //Blossom
      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:blossom_planks"
			  },
			  "result": "everycomp:abnww/quark/blossom_boards",
			  "count": 1
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:blossom_planks"
			  },
			  "result": "quark:blossom_button",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:blossom_planks"
			  },
			  "result": "quark:blossom_fence",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:blossom_planks"
			  },
			  "result": "quark:blossom_planks_slab",
			  "count": 2
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:blossom_planks"
			  },
			  "result": "quark:blossom_planks_vertical_slab",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:blossom_planks"
			  },
			  "result": "quark:blossom_planks_stairs",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:blossom_planks"
			  },
			  "result": "quark:blossom_ladder",
			  "count": 1
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "everycomp:abnww/quark/blossom_boards",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_button",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_door",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_fence",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_fence_gate",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_planks",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_pressure_plate",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_planks_slab",
			  "count": 8
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_planks_vertical_slab",
			  "count": 8
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_planks_stairs",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_trapdoor",
			  "count": 2
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_sign",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:blossom_logs"
			  },
			  "result": "quark:blossom_ladder",
			  "count": 4
			}
		  }
		]
	  })

      //ancient
      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:ancient_planks"
			  },
			  "result": "everycomp:abnww/quark/ancient_boards",
			  "count": 1
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:ancient_planks"
			  },
			  "result": "quark:ancient_button",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:ancient_planks"
			  },
			  "result": "quark:ancient_fence",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:ancient_planks"
			  },
			  "result": "quark:ancient_planks_slab",
			  "count": 2
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:ancient_planks"
			  },
			  "result": "quark:ancient_planks_vertical_slab",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:ancient_planks"
			  },
			  "result": "quark:ancient_planks_stairs",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"item": "quark:ancient_planks"
			  },
			  "result": "quark:ancient_ladder",
			  "count": 1
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "everycomp:abnww/quark/ancient_boards",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_button",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_door",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_fence",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_fence_gate",
			  "count": 1
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_planks",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_pressure_plate",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_planks_slab",
			  "count": 8
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_planks_vertical_slab",
			  "count": 8
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_planks_stairs",
			  "count": 4
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_trapdoor",
			  "count": 2
			}
		  }
		]
	  })

      event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_sign",
			  "count": 2
			}
		  }
		]
	  })

	  event.custom({
		"type": "forge:conditional",
		"recipes": [
		  {
			"conditions": [
			  {
				"value": "sawmill",
				"type": "woodworks:config"
			  }
			],
			"recipe": {
			  "type": "woodworks:sawmill",
			  "ingredient": {
				"tag": "quark:ancient_logs"
			  },
			  "result": "quark:ancient_ladder",
			  "count": 4
			}
		  }
		]
	  })

//bamboo
event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "item": "quark:bamboo_planks"
          },
          "result": "everycomp:abnww/quark/bamboo_boards",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "item": "quark:bamboo_planks"
          },
          "result": "quark:bamboo_button",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "item": "quark:bamboo_planks"
          },
          "result": "quark:bamboo_fence",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "item": "quark:bamboo_planks"
          },
          "result": "quark:bamboo_planks_slab",
          "count": 2
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "item": "quark:bamboo_planks"
          },
          "result": "quark:bamboo_planks_vertical_slab",
          "count": 2
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "item": "quark:bamboo_planks"
          },
          "result": "quark:bamboo_planks_stairs",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "item": "quark:bamboo_planks"
          },
          "result": "quark:bamboo_ladder",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "everycomp:abnww/quark/bamboo_boards",
          "count": 2
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_button",
          "count": 2
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_door",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_fence",
          "count": 2
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_fence_gate",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_planks",
          "count": 2
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_pressure_plate",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_planks_slab",
          "count": 4
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_planks_vertical_slab",
          "count": 4
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_planks_stairs",
          "count": 2
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_trapdoor",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_sign",
          "count": 1
        }
      }
    ]
  })

  event.custom({
    "type": "forge:conditional",
    "recipes": [
      {
        "conditions": [
          {
            "value": "sawmill",
            "type": "woodworks:config"
          }
        ],
        "recipe": {
          "type": "woodworks:sawmill",
          "ingredient": {
            "tag": "quark:bamboo_logs"
          },
          "result": "quark:bamboo_ladder",
          "count": 2
        }
      }
    ]
  })
})
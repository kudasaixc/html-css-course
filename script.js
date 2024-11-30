const champions = [
    { name: "Aatrox", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/aatrox/skins/base/images/aatrox_splash_tile_0.jpg" },
    { name: "Ahri", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ahri/skins/base/images/ahri_splash_tile_0.jpg" },
    { name: "Akali", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/akali/skins/base/images/akali_splash_tile_0.jpg" },
    { name: "Akshan", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/akshan/skins/base/images/akshan_splash_tile_0.jpg" },
    { name: "Alistar", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/alistar/skins/base/images/alistar_splash_tile_0.jpg" },
    { name: "Amumu", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/amumu/skins/base/images/amumu_splash_tile_0.jpg" },
    { name: "Anivia", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/anivia/skins/base/images/anivia_splash_tile_0.jpg" },
    { name: "Annie", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/annie/skins/base/images/annie_splash_tile_0.jpg" },
    { name: "Aphelios", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/aphelios/skins/base/images/aphelios_splash_tile_0.jpg" },
    { name: "Ashe", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ashe/skins/base/images/ashe_splash_tile_0.jpg" },
    { name: "Aurelion Sol", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/aurelionsol/skins/base/images/aurelionsol_splash_tile_0.jpg" },
    { name: "Azir", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/azir/skins/base/images/azir_splash_tile_0.jpg" },
    { name: "Bard", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/bard/skins/base/images/bard_splash_tile_0.jpg" },
    { name: "Bel'Veth", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/belveth/skins/base/images/belveth_splash_tile_0.jpg" },
    { name: "Blitzcrank", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/blitzcrank/skins/base/images/blitzcrank_splash_tile_0.jpg" },
    { name: "Brand", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/brand/skins/base/images/brand_splash_tile_0.jpg" },
    { name: "Braum", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/braum/skins/base/images/braum_splash_tile_0.jpg" },
    { name: "Briar", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/briar/skins/base/images/briar_splash_tile_0.jpg" },
    { name: "Caitlyn", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/caitlyn/skins/base/images/caitlyn_splash_tile_0.jpg" },
    { name: "Camille", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/camille/skins/base/images/camille_splash_tile_0.jpg" },
    { name: "Cassiopeia", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/cassiopeia/skins/base/images/cassiopeia_splash_tile_0.jpg" },
    { name: "Cho'Gath", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/chogath/skins/base/images/chogath_splash_tile_0.jpg" },
    { name: "Corki", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/corki/skins/base/images/corki_splash_tile_0.jpg" },
    { name: "Darius", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/darius/skins/base/images/darius_splash_tile_0.jpg" },
    { name: "Diana", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/diana/skins/base/images/diana_splash_tile_0.jpg" },
    { name: "Dr. Mundo", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/drmundo/skins/base/images/drmundo_splash_tile_0.jpg" },
    { name: "Draven", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/draven/skins/base/images/draven_splash_tile_0.jpg" },
    { name: "Ekko", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ekko/skins/base/images/ekko_splash_tile_0.jpg" },
    { name: "Elise", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/elise/skins/base/images/elise_splash_tile_0.jpg" },
    { name: "Evelynn", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/evelynn/skins/base/images/evelynn_splash_tile_0.jpg" },
    { name: "Ezreal", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ezreal/skins/base/images/ezreal_splash_tile_0.jpg" },
    { name: "Fiddlesticks", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/fiddlesticks/skins/base/images/fiddlesticks_splash_tile_0.jpg" },
    { name: "Fiora", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/fiora/skins/base/images/fiora_splash_tile_0.jpg" },
    { name: "Fizz", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/fizz/skins/base/images/fizz_splash_tile_0.jpg" },
    { name: "Galio", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/galio/skins/base/images/galio_splash_tile_0.jpg" },
    { name: "Gangplank", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/gangplank/skins/base/images/gangplank_splash_tile_0.jpg" },
    { name: "Garen", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/garen/skins/base/images/garen_splash_tile_0.jpg" },
    { name: "Gnar", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/gnar/skins/base/images/gnar_splash_tile_0.jpg" },
    { name: "Gragas", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/gragas/skins/base/images/gragas_splash_tile_0.jpg" },
    { name: "Graves", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/graves/skins/base/images/graves_splash_tile_0.jpg" },
    { name: "Gwen", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/gwen/skins/base/images/gwen_splash_tile_0.jpg" },
    { name: "Hecarim", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/hecarim/skins/base/images/hecarim_splash_tile_0.jpg" },
    { name: "Heimerdinger", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/heimerdinger/skins/base/images/heimerdinger_splash_tile_0.jpg" },
    { name: "Hwei", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/hwei/skins/skin0/images/hwei_splash_tile_0.jpg" },
    { name: "Illaoi", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/illaoi/skins/base/images/illaoi_splash_tile_0.jpg" },
    { name: "Irelia", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/irelia/skins/base/images/irelia_splash_tile_0.jpg" },
    { name: "Ivern", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ivern/skins/base/images/ivern_splash_tile_0.jpg" },
    { name: "Janna", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/janna/skins/base/images/janna_splash_tile_0.jpg" },
    { name: "Jarvan IV", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jarvaniv/skins/base/images/jarvaniv_splash_tile_0.jpg" },
    { name: "Jax", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jax/skins/base/images/jax_splash_tile_0.jpg" },
    { name: "Jayce", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jayce/skins/base/images/jayce_splash_tile_0.jpg" },
    { name: "Jhin", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jhin/skins/base/images/jhin_splash_tile_0.jpg" },
    { name: "Jinx", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/jinx/skins/base/images/jinx_splash_tile_0.jpg" },
    { name: "K'Santé", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ksante/skins/base/images/ksante_splash_tile_0.jpg" },
    { name: "Kai'Sa", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kaisa/skins/base/images/kaisa_splash_tile_0.jpg" },
    { name: "Kalista", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kalista/skins/base/images/kalista_splash_tile_0.jpg" },
    { name: "Karma", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/karma/skins/base/images/karma_splash_tile_0.jpg" },
    { name: "Karthus", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/karthus/skins/base/images/karthus_splash_tile_0.jpg" },
    { name: "Kassadin", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kassadin/skins/base/images/kassadin_splash_tile_0.jpg" },
    { name: "Katarina", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/katarina/skins/base/images/katarina_splash_tile_0.jpg" },
    { name: "Kayle", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kayle/skins/base/images/kayle_splash_tile_0.jpg" },
    { name: "Kayn", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kayn/skins/base/images/kayn_splash_tile_0.jpg" },
    { name: "Kennen", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kennen/skins/base/images/kennen_splash_tile_0.jpg" },
    { name: "Kha'Zix", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/khazix/skins/base/images/khazix_splash_tile_0.jpg" },
    { name: "Kindred", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kindred/skins/base/images/kindred_splash_tile_0.jpg" },
    { name: "Kled", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kled/skins/base/images/kled_splash_tile_0.jpg" },
    { name: "Kog'Maw", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/kogmaw/skins/base/images/kogmaw_splash_tile_0.jpg" },
    { name: "LeBlanc", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/leblanc/skins/base/images/leblanc_splash_tile_0.jpg" },
    { name: "Lee Sin", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/leesin/skins/base/images/leesin_splash_tile_0.jpg" },
    { name: "Leona", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/leona/skins/base/images/leona_splash_tile_0.jpg" },
    { name: "Lillia", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/lillia/skins/base/images/lillia_splash_tile_0.jpg" },
    { name: "Lissandra", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/lissandra/skins/base/images/lissandra_splash_tile_0.jpg" },
    { name: "Lucian", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/lucian/skins/base/images/lucian_splash_tile_0.jpg" },
    { name: "Lulu", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/lulu/skins/base/images/lulu_splash_tile_0.jpg" },
    { name: "Lux", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/lux/skins/base/images/lux_splash_tile_0.jpg" },
    { name: "Maître Yi", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/masteryi/skins/base/images/masteryi_splash_tile_0.jpg" },
    { name: "Malphite", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/malphite/skins/base/images/malphite_splash_tile_0.jpg" },
    { name: "Malzahar", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/malzahar/skins/base/images/malzahar_splash_tile_0.jpg" },
    { name: "Maokai", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/maokai/skins/base/images/maokai_splash_tile_0.jpg" },
    { name: "Milio", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/milio/skins/base/images/milio_splash_tile_0.jpg" },
    { name: "Miss Fortune", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/missfortune/skins/base/images/missfortune_splash_tile_0.jpg" },
    { name: "Mordekaiser", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/mordekaiser/skins/base/images/mordekaiser_splash_tile_0.jpg" },
    { name: "Morgana", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/morgana/skins/base/images/morgana_splash_tile_0.jpg" },
    { name: "Nami", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/nami/skins/base/images/nami_splash_tile_0.jpg" },
    { name: "Nasus", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/nasus/skins/base/images/nasus_splash_tile_0.jpg" },
    { name: "Nautilus", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/nautilus/skins/base/images/nautilus_splash_tile_0.jpg" },
    { name: "Neeko", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/neeko/skins/base/images/neeko_splash_tile_0.jpg" },
    { name: "Nidalee", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/nidalee/skins/base/images/nidalee_splash_tile_0.jpg" },
    { name: "Nilah", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/nilah/skins/base/images/nilah_splash_tile_0.jpg" },
    { name: "Nocturne", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/nocturne/skins/base/images/nocturne_splash_tile_0.jpg" },
    { name: "Nunu et Willump", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/nunu/skins/base/images/nunu_splash_tile_0.jpg" },
    { name: "Olaf", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/olaf/skins/base/images/olaf_splash_tile_0.jpg" },
    { name: "Orianna", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/orianna/skins/base/images/orianna_splash_tile_0.jpg" },
    { name: "Ornn", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ornn/skins/base/images/ornn_splash_tile_0.jpg" },
    { name: "Pantheon", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/pantheon/skins/base/images/pantheon_splash_tile_0.jpg" },
    { name: "Poppy", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/poppy/skins/base/images/poppy_splash_tile_0.jpg" },
    { name: "Pyke", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/pyke/skins/base/images/pyke_splash_tile_0.jpg" },
    { name: "Qiyana", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/qiyana/skins/base/images/qiyana_splash_tile_0.jpg" },
    { name: "Quinn", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/quinn/skins/base/images/quinn_splash_tile_0.jpg" },
    { name: "Rakan", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/rakan/skins/base/images/rakan_splash_tile_0.jpg" },
    { name: "Rammus", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/rammus/skins/base/images/rammus_splash_tile_0.jpg" },
    { name: "Rek'Sai", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/reksai/skins/base/images/reksai_splash_tile_0.jpg" },
    { name: "Rell", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/rell/skins/base/images/rell_splash_tile_0.jpg" },
    { name: "Renata Glasc", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/renata/skins/base/images/renata_splash_tile_0.jpg" },
    { name: "Renekton", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/renekton/skins/base/images/renekton_splash_tile_0.jpg" },
    { name: "Rengar", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/rengar/skins/base/images/rengar_splash_tile_0.jpg" },
    { name: "Riven", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/riven/skins/base/images/riven_splash_tile_0.jpg" },
    { name: "Rumble", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/rumble/skins/base/images/rumble_splash_tile_0.jpg" },
    { name: "Ryze", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ryze/skins/base/images/ryze_splash_tile_0.jpg" },
    { name: "Samira", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/samira/skins/base/images/samira_splash_tile_0.jpg" },
    { name: "Sejuani", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/sejuani/skins/base/images/sejuani_splash_tile_0.jpg" },
    { name: "Senna", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/senna/skins/base/images/senna_splash_tile_0.jpg" },
    { name: "Seraphine", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/seraphine/skins/base/images/seraphine_splash_tile_0.jpg" },
    { name: "Sett", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/sett/skins/base/images/sett_splash_tile_0.jpg" },
    { name: "Shaco", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/shaco/skins/base/images/shaco_splash_tile_0.jpg" },
    { name: "Shen", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/shen/skins/base/images/shen_splash_tile_0.jpg" },
    { name: "Shyvana", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/shyvana/skins/base/images/shyvana_splash_tile_0.jpg" },
    { name: "Singed", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/singed/skins/base/images/singed_splash_tile_0.jpg" },
    { name: "Sion", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/sion/skins/base/images/sion_splash_tile_0.jpg" },
    { name: "Sivir", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/sivir/skins/base/images/sivir_splash_tile_0.jpg" },
    { name: "Skarner", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/skarner/skins/base/images/skarner_splash_tile_0.jpg" },
    { name: "Smolder", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/smolder/skins/base/images/smolder_splash_tile_0.jpg" },
    { name: "Sona", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/sona/skins/base/images/sona_splash_tile_0.jpg" },
    { name: "Soraka", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/soraka/skins/base/images/soraka_splash_tile_0.jpg" },
    { name: "Swain", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/swain/skins/base/images/swain_splash_tile_0.jpg" },
    { name: "Sylas", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/sylas/skins/base/images/sylas_splash_tile_0.jpg" },
    { name: "Syndra", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/syndra/skins/base/images/syndra_splash_tile_0.jpg" },
    { name: "Tahm Kench", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/tahmkench/skins/base/images/tahmkench_splash_tile_0.jpg" },
    { name: "Taliyah", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/taliyah/skins/base/images/taliyah_splash_tile_0.jpg" },
    { name: "Talon", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/talon/skins/base/images/talon_splash_tile_0.jpg" },
    { name: "Taric", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/taric/skins/base/images/taric_splash_tile_0.jpg" },
    { name: "Teemo", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/teemo/skins/base/images/teemo_splash_tile_0.asu_teemo.jpg" },
    { name: "Thresh", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/thresh/skins/base/images/thresh_splash_tile_0.jpg" },
    { name: "Tristana", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/tristana/skins/base/images/tristana_splash_tile_0.jpg" },
    { name: "Trundle", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/trundle/skins/base/images/trundle_splash_tile_0.jpg" },
    { name: "Tryndamere", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/tryndamere/skins/base/images/tryndamere_splash_tile_0.jpg" },
    { name: "Twisted Fate", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/twistedfate/skins/base/images/twistedfate_splash_tile_0.jpg" },
    { name: "Twitch", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/twitch/skins/base/images/twitch_splash_tile_0.jpg" },
    { name: "Udyr", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/udyr/skins/base/images/udyr_splash_tile_0.jpg" },
    { name: "Urgot", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/urgot/skins/base/images/urgot_splash_tile_0.jpg" },
    { name: "Varus", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/varus/skins/base/images/varus_splash_tile_0.jpg" },
    { name: "Vayne", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/vayne/skins/base/images/vayne_splash_tile_0.jpg" },
    { name: "Veigar", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/veigar/skins/base/images/veigar_splash_tile_0.jpg" },
    { name: "Vel'Koz", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/velkoz/skins/base/images/velkoz_splash_tile_0.jpg" },
    { name: "Vex", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/vex/skins/base/images/vex_splash_tile_0.jpg" },
    { name: "Vi", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/vi/skins/base/images/vi_splash_tile_0.jpg" },
    { name: "Viego", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/viego/skins/base/images/viego_splash_tile_0.jpg" },
    { name: "Viktor", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/viktor/skins/base/images/viktor_splash_tile_0.jpg" },
    { name: "Vladimir", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/vladimir/skins/base/images/vladimir_splash_tile_0.jpg" },
    { name: "Volibear", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/volibear/skins/base/images/volibear_splash_tile_0.jpg" },
    { name: "Warwick", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/warwick/skins/base/images/warwick_splash_tile_0.jpg" },
    { name: "Wukong", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/monkeyking/skins/base/images/monkeyking_splash_tile_0.jpg" },
    { name: "Xayah", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/xayah/skins/base/images/xayah_splash_tile_0.jpg" },
    { name: "Xerath", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/xerath/skins/base/images/xerath_splash_tile_0.jpg" },
    { name: "Xin Zhao", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/xinzhao/skins/base/images/xinzhao_splash_tile_0.jpg" },
    { name: "Yasuo", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/yasuo/skins/base/images/yasuo_splash_tile_0.jpg" },
    { name: "Yone", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/yone/skins/base/images/yone_splash_tile_0.jpg" },
    { name: "Yorick", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/yorick/skins/base/images/yorick_splash_tile_0.jpg" },
    { name: "Yuumi", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/yuumi/skins/base/images/yuumi_splash_tile_0.jpg" },
    { name: "Zac", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/zac/skins/base/images/zac_splash_tile_0.jpg" },
    { name: "Zed", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/zed/skins/base/images/zed_splash_tile_0.jpg" },
    { name: "Zeri", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/zeri/skins/base/images/zeri_splash_tile_0.jpg" },
    { name: "Ziggs", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/ziggs/skins/base/images/ziggs_splash_tile_0.jpg" },
    { name: "Zilean", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/zilean/skins/base/images/zilean_splash_tile_0.jpg" },
    { name: "Zoe", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/zoe/skins/base/images/zoe_splash_tile_0.jpg" },
    { name: "Zyra", image: "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/zyra/skins/base/images/zyra_splash_tile_0.jpg" },
]




const searchBar = document.getElementById("searchBar");
const championList = document.getElementById("championList");

championList.style.display = 'none';

searchBar.addEventListener("input", () => {
    const searchQuery = searchBar.value.toLowerCase();
    championList.innerHTML = ""; 

    if (searchQuery) {
        championList.style.display = 'block'; 

        const filteredChampions = champions.filter(champion =>
            champion.name.toLowerCase().startsWith(searchQuery)
        );

        filteredChampions.forEach(champion => {
            const li = document.createElement("li");
            li.addEventListener("click", () => {
                window.location.href = `/champions/${champion.name.toLowerCase()}.html`;
            });

            const img = document.createElement("img");
            img.src = champion.image;
            img.alt = champion.name;

            const name = document.createTextNode(champion.name);

            li.appendChild(img);
            li.appendChild(name);
            championList.appendChild(li);
        });
    } else {
        championList.style.display = 'none'; 
    }
});

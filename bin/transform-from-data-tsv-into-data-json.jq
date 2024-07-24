[
    inputs
    | split("\t")
    | {
        id: .[0],
        handle: .[1],
        title_as_cy: .[2],
        title_as_en: .[3],
        subtitle_as_cy: .[4],
        subtitle_as_en: .[5],
        emojis: .[6],
        tags: .[7],
        email: .[8],
        phoneGlobalPrefix: .[9],
        phoneLocalPrefix: .[10],
        phone: .[11],
        websiteURL: .[12],
        facebookURL: .[13],
        instagramURL: .[14],
        youtubeURL: .[15],
        tiktokURL: .[16],
        twitterURL: .[17],
        street: .[18],
        city: .[19],
        district: .[20],
        subcountry: .[21],
        postcode: .[22],
        country: .[23],
        latitude: .[24],
        longitude: .[25]
    }
]

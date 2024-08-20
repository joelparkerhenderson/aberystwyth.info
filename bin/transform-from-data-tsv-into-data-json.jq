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
        tripadvisorURL: .[18],
        linkedinURL: .[19],
        street: .[20],
        city: .[21],
        district: .[22],
        subcountry: .[23],
        postcode: .[24],
        country: .[25],
        latitude: .[26],
        longitude: .[27]
    }
]

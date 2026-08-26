---
title: "yappari: Tilik"
date: 2026-08-24
banner: "../../../public/images/ds1.jpg"
description: "muntahan gw waktu bangun Tilik, bisa reasoning, bisa kemumetan, bisa kekaguman dll"
---

## Transformation
### 24 aug
#### CSV banyak, kalo beda format gimana? 

* kepikiran gimana kalo csv nya banyak dan gatau schema/kolom dll beda ngga.
* 1 giant csv / generic function buat tiap possibility? NO. dataset profiler. [moar](https://docs.aws.amazon.com/pdfs/whitepapers/latest/modern-data-architecture-rationales-on-aws/modern-data-architecture-rationales-on-aws.pdf?utm_source=chatgpt.com)

### 25 aug
#### ai selalu muntahin semua pengetahuan yg dia punya tanpa peduli mental state lu. LOL
 * ai overstimulates me bruh. terlalu banyak hal yang lu sendiri blm ketemu scr problem tpi jadi kedistraksi karna di mention ama AI. ga blg kalo ini jelek sih, jadi sedikit pinpoint kurangnya teori entah kurang komprehensif atau sesimpel ga dapet big picture nya. CONSUME MORE THEORY? [python etl, read this](https://www.freecodecamp.org/news/the-etl-pipeline-handbook-how-to-build-a-production-grade-pipeline-in-python/)
### 26 aug
#### batch processing enaknya gimana?
-better raw csv  ingest taruh mana? terus enaknya load buat etl nya gimana?
-opsi 1, ga sentuh ingestion, load tiap pemda, load tiap year, filename dijadiin target dir aja. misal tender_wonogiri_2025 brati wonogirikab/2025/tender_wonogiri_2025

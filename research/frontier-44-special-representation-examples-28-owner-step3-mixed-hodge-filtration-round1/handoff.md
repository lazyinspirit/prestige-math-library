# Same first unapplied review/repair pass

Exact held target: lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights. No canonical, state, receipt or live writer files changed.

Confirmed: Step 2.1 assumes higher differentials preserve recurrent F without proof. The missing comparison is needed here as well as at the abutment. Steps 4.2/5.1 incorrectly write Gr^L_q H^n for the shifted weight graded piece; correct Gr^W_q H^n = Gr^L_{q-n} H^n. Original Statement can stay unchanged.

Proposed inline proof: apply the G=W_{-p} spectral sequence to 0→F^a K→K→K/F^a K→0, with intersection/quotient G. E0 exact. For any complex C whose d is F-strict, 0→H(F^a C)→H(C)→H(C/F^a C)→0 is exact: correct boundaries inside F by strictness, and correct quotient-cycle lifts by F preimages of their boundaries. Thus E1 exact from d0 strict. Naturality gives F-preservation of d1, purity implies strictness, hence E2 exact. Recurrent F is the image of E_r(F^a K); naturality gives F-preservation of higher d_r, weight difference gives d_r=0. Exactness persists and all three sequences stabilize. At infinity the graded H(F^a K)→H(K) map is injective; finite filtered leading-term descent proves the map injective and G-strict. The graded image is therefore the F-image filtration on grG H(K), equal to recurrent F. This proves the needed abutment comparison without assuming the desired MHS on H(K).

Actually read Deligne II cached full carrier /tmp/klr-foundation-monodromy/DeligneII.pdf (recorded matching SHA256 748edefb44fded8af67869abfed87062d66977d25b5d12f7d014f1810a063c3f), text clauses 1.3.1–1.3.17 and 3.2.5–3.2.10. Read III Scholie 8.1.9 from cached full carrier with hash d78d4f46742916cd669279e7db365e4db6a43f38d2dcdec6862c6d27d07216b3. Not an entire-source reading claim.

Actual batch38 and46 direct consumers exist in current manifests but their canonical files were absent at initial read; manifest uses require the full MHS/functoriality and shifted Gr^W identification. Focused consumer reconciliation and final actual binding still pending.

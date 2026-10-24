# Category O and Geometric Representation Theory rendering audit — lane 01

Reviewed all 26 assigned items and all 56 revision-2 screenshot tiles at original resolution. Checked each title and complete ItemBody, including proofs, facts, remarks, scratch text where present, internal reference titles, and TikZ. The 26 assignment IDs match the manifest lane-01 allocation; all frozen source hashes and screenshot tile hashes match their manifests. No TikZ diagrams were present in the assigned items.

## Findings

1. **def-local-intersection-form-for-a-soergel-summand** — Title (snapshot line 4, confirmed). The item title is displayed literally; the underscores appear as source characters rather than subscripts. Repair: Use a plain-text display title, or make the title renderer support math before including TeX syntax. Screenshot: `screenshots/def-local-intersection-form-for-a-soergel-summand--01.png`.
2. **def-rational-cherednik-algebra** — Title (snapshot line 4, confirmed). The title shows raw TeX braces and underscore in H_{t,c}(W,h). Repair: Use a plain-text display title or render title math before including TeX syntax. Screenshot: `screenshots/def-rational-cherednik-algebra--01.png`.
3. **def-the-deformed-lefschetz-operator-on-b-x-b-s** — Title (snapshot line 4, confirmed). The title shows raw TeX underscores in L_zeta and B_x B_s. Repair: Use a plain-text display title or render title math before including TeX syntax. Screenshot: `screenshots/def-the-deformed-lefschetz-operator-on-b-x-b-s--01.png`.
4. **lem-pa36-global-section-unit** — Title (snapshot line 4, confirmed). The title shows raw TeX underscore in Loc_kappa(V). Repair: Use a plain-text display title or render title math before including TeX syntax. Screenshot: `screenshots/lem-pa36-global-section-unit--01.png`.

## Coverage

The JSON coverage rows match all 26 assignment IDs and preserve all 56 listed tile paths. Items without findings are recorded as clean.

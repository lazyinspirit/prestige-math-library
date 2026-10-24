# Linear Algebra rendering audit — lane 08

Reviewed 75 assigned items and 90 local PNG tiles at original resolution. Full title and ItemBody coverage was reviewed for each item; all tile windows cover the recorded document height without gaps. Source, frozen snapshot, rendered HTML, and PNG hashes are recorded in [lane-08.json](lane-08.json).

## Findings

1. **Raw LaTeX in the technique banner** — `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent`, snapshot line 45, tile `thm-eigenvectors-for-distinct-eigenvalues-are-linearly-independent--01.png`. The source contains valid `$m$`; the uppercase banner displays `$M$` literally.
2. **Raw LaTeX in the technique banner** — `thm-nilpotent-jordan-string-basis`, snapshot line 41, tile `thm-nilpotent-jordan-string-basis--01.png`. The source contains valid `\dim\operatorname{im}N`; the uppercase banner displays the TeX commands literally.
3. **Raw LaTeX in the technique banner** — `thm-sylvesters-criterion-for-positive-definiteness`, snapshot line 49, tile `thm-sylvesters-criterion-for-positive-definiteness--01.png`. The source contains valid `$n$`; the uppercase banner displays `$N$` literally.

All three findings have zero KaTeX errors in the item; the captured HTML confirms the inline formula remains inside the uppercase banner without math rendering. This is a presentation defect in the banner. The uppercase style itself is intended.

## Coverage and diagram review

All 75 assigned items have gapless tile coverage. Assignment source, local HTML, and tile hashes match; the captured metadata reports zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. No Scratch text, raw inline or display math outside the technique-banner findings, or reference-title leak was observed. Reference links intentionally render as block links. No existing diagram mathematics was present to check.

Two optional source-supported diagram candidates are documented in the JSON: an eigenvalue crossing/eigendirection switch for the symmetric crossing counterexample, and a matrix sparsity-pattern sequence for the worked Givens QR example. These are editorial candidates, not confirmed defects. No optional typography observations were recorded.

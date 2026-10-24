# Homological Algebra visual audit — lane 09

## Scope and coverage

Reviewed all 109 assigned items in the frozen source snapshot and local HTML preview. Opened each of the 151 assigned PNG tiles individually at original resolution. The ledger records per-item source, snapshot, and HTML hashes and each viewed tile hash: [lane-09.json](lane-09.json). Snapshot and HTML hashes match the frozen assignment. This review covers local preview artifacts only; it makes no claim about production routes.

Titles and full rendered ItemBody sections were visually checked across the tile set. TeX/KaTeX and source-authored diagram mathematics generally render; the exact-couple and cochain-map diagram displays were checked as existing correct diagram coverage. The technique banner is intentional. Reference titles appear as block links, and punctuation wrapping around them was not treated as a defect. No Scratch content, reference-title leaks, or standalone-image clipping were observed. No TikZ source was found in the reviewed assigned bodies.

## Confirmed rendering defect

- **`ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group`, frozen snapshot line 30.** The opening example line uses literal ASCII arrows and raw `Ext^1_Z(Z/n,A)=A/nA`; the local preview displays those tokens literally, unlike the correctly typeset TeX formulas in the proof. Typeset the opening resolution and Ext expression consistently. Evidence: tile `ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group--01.png` (hash in ledger).

## Optional diagram candidate

- **`def-exact-couple`, frozen snapshot lines 28–37.** A cyclic exact-couple diagram could show the three vertices `D_{p,q}`, `D_{p+1,q-1}`, `E_{p+1,q-r}` and maps `i`, `j`, `k` with their bidegree shifts, marking exactness at each position and the zero composites `ji`, `kj`, `ik`. The text and formulas already state the mathematics correctly; this is an optional orientation aid, not a defect.

No production status, website, or publication state was inspected or changed.

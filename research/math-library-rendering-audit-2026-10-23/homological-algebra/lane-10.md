# Homological Algebra rendering audit — lane 10

Reviewed all 109 assigned frozen item bodies and all 150 screenshot tiles individually at original resolution. Exact item, source/snapshot/HTML and per-tile hashes, dimensions, section coverage and drift status are in `lane-10.json`. All source hashes match their frozen assignment hashes and all local HTML hashes match their assigned hashes. No item or tile was left unreviewed.

One confirmed visual markup defect was found: source-authored raw math notation occurs in an example description. No separate renderer or standalone clipping defect was found. Reference wikilinks render on block lines by design, and punctuation wrapping alone is not a defect. No Scratch text or reference-title leak was found. Uppercase technique banners are intended; no raw math inside a banner was found.

## Confirmed markup defect

- **ex-an-ext-dimension-shift** — source line 30: `Ext^{n+1}(M,N)` and `Ext^n(Omega M,N)` render literally with ASCII carets and unrendered `Omega` in the Example text. The local tile confirms the mathematical formula is source-authored outside MathMarkdown delimiters. Suggested repair: typeset the full math, e.g. `$\operatorname{Ext}^{n+1}(M,N)$` and `$\operatorname{Ext}^n(\Omega M,N)$`. Screenshot: `screenshots/ex-an-ext-dimension-shift--01.png`.

## Optional diagram candidate

- **thm-a-filtered-complex-produces-an-exact-couple** — source lines 29–31, 51, 53: optional TikZ exact-couple triangle. The source explicitly gives the objects, arrows, bidegrees, and exactness at all three vertices. Draw `D^1_{p-1,q+1} --i--> D^1_{p,q} --j--> E^1_{p,q} --k--> D^1_{p-1,q}`, continuing the `i` arrow from the final `D` term to `D^1_{p,q-1}`; label bidegrees `i=(1,-1)`, `j=(0,0)`, `k=(-1,0)` and the three image-kernel identities. Keep `n=p+q` and the stated connector target convention. This is an optional aid supported by explicit source data; no omission defect is confirmed. Screenshot: `screenshots/thm-a-filtered-complex-produces-an-exact-couple--01.png`.

## Existing diagram checks

No authored TikZ, SVG, or embedded image diagrams appear in the assigned bodies or HTML. Existing KaTeX array displays were inspected. In `cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram`, the two short exact rows and vertical maps `a,b,c` render as the stated ladder. In `def-morphism-of-short-exact-sequences-of-complexes`, the short exact rows and vertical chain maps also render in the stated order. These correct diagrams count as coverage, not defects.

No live website, HTTP(S), external images, application edits, publication-status changes, builds, tests, gates, or Git operations were used.

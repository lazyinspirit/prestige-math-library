# Linear Algebra rendering review — lane 09

## Scope and method

Reviewed all 75 assigned frozen source snapshots and local HTML renders. Opened all 98 assigned PNG tiles individually at original resolution. Assignment source and HTML hashes, screenshot manifest hashes, and on-disk hashes matched. This is a local preview review and makes no production-route claim. Inline math SVG output was treated as formula rendering, not an authored diagram; no TikZ or diagram markup was present in assigned snapshots.

## Confirmed rendering defects

1. `cor-operator-norm-submultiplicative-and-t-star-t-identity`, title, source line 4: `||T^*T|| = ||T||^2` displays as literal ASCII notation. The Statement body typesets the same formulas. Suggested repair: use supported inline math delimiters. Tile: `screenshots/cor-operator-norm-submultiplicative-and-t-star-t-identity--01.png`.

2. `ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix`, Verification, source line 44: the Proof technique banner shows `$m$` literally in “induction on $m$”. The uppercase technique banner is intended; the raw math inside it is visible. Suggested repair: use “induction” or a supported math rendering path for the variable. Tile: `screenshots/ex-cayley-hamilton-reduces-powers-of-a-two-by-two-matrix--01.png`.

3. `thm-operator-norm-is-the-largest-singular-value`, Statement, source lines 37–39: an expanded reference title inserts raw `max_{||v||=1} ||Tv||` notation into the sentence. Suggested repair: replace the title expansion with “the maximum defining the operator norm”. Tile: `screenshots/thm-operator-norm-is-the-largest-singular-value--01.png`.

4. `thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison`, Statement, source lines 33–34: the expanded operator-norm reference title leaks the same raw maximum notation into the spectral formula. Suggested repair: use “the operator norm” and typeset the definition only if needed. Tile: `screenshots/thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison--01.png`.

## Diagram candidate

`ex-orthogonal-projection-onto-a-plane-and-nearest-point`, source lines 27–35 and 51–55 — editorial and uncertain, not a defect. The example explicitly identifies a plane and a point projection. A schematic could show `W: x+y+z=0` in `R^3`, `v=(1,2,3)`, `p=P_Wv=(-1,0,1)`, and the normal residual `v-p=(2,2,2)`. Label `||v-p||^2=12` and the stated relation `||v-q||^2=12+||p-q||^2` for `q∈W`. Keep lengths schematic; the source gives the exact metric relation.

## Coverage and hashes

Coverage in `lane-09.json` records all 75 items, frozen snapshot and HTML digests, and all 98 individually viewed tile paths and digests. All digests matched the assignment and screenshot manifests. Items without a listed defect were visually clean for the requested checks.

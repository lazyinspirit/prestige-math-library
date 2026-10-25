# Differential Geometry rendering audit — lane 03

Reviewed all 160 assigned items and all 254 screenshot tiles. Every tile was opened separately at original resolution. Source, snapshot, HTML and screenshot SHA256 values match the assignment/capture metadata; no drift was found. No Scratch block or existing TikZ/tikzcd diagram was present.

## Rendering finding

- **Confirmed:** `def-hh-cochain-complex-and-gerstenhaber-bracket`, source lines 35–36. The displayed Hochschild differential runs into neighboring prose; its first term, summation and final term are split across prose lines. The standalone original tile confirms the issue. Put it in a dedicated display block with explicit alignment. Evidence: `screenshots/def-hh-cochain-complex-and-gerstenhaber-bracket--01.png`.

No clipping was confirmed from a standalone tile. Wikilinks rendering as block lines and uppercase CSS technique banners are expected; no optional typography finding was recorded.

## Diagram candidates

- **Strongly warranted:** `prop-distance-between-corresponding-side-points-in-toponogov-comparison`, source lines 46–60 and 62–65. A paired actual/model triangle schematic can mark `p,q,r`, `σ₁,σ₂`, `u,v`, their comparison points, side lengths, and `d_g(u,v) ≥ d_k(ū,v̄)`. It must not suggest a global map between manifolds.
- **Strongly warranted:** `thm-the-de-rham-map-is-an-isomorphism-on-a-two-open-union-when-it-is-on-the-pieces-and-intersection`, source lines 31–35 and 47–51. The proof uses two exact Mayer–Vietoris rows, vertical integration maps, restriction/difference/connector squares and the five lemma. Any diagram must preserve the `V−U` convention and check connector signs against the cited lemmas.
- **Useful but optional:** `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution`, source lines 31–37. A commuting factorization triangle summarizes the unique lift `F~:P→L` with `j∘F~=F` and `F(P)⊆L`.

The exact per-item paths and SHA256 coverage, screenshot hashes, finding evidence and candidate specifications are in `lane-03.json`. This review covers only local frozen ItemBody captures; it excludes live navigation, dependency graph and Sources footer.

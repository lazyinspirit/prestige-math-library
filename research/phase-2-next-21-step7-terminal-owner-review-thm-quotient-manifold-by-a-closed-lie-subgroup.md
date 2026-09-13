# Step-7 terminal owner-review draft: `thm-quotient-manifold-by-a-closed-lie-subgroup`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `faaff0b7cd31a2557be83333936d11d09a404c390833e6f6ca6bd819ed62a1fd`  
**Rejected-item SHA-256 (historical):** `20c762b970c47e57288d6b9bc0bf6172f18dd151603b228ba0378d5cc45dd9d0`  
**Proposed disposition:** `repair-required`

## Mathematical review

The translated chart construction works locally, but Step 5.1's stated transition argument applies the inverse of the g'-product chart to an arbitrary lift from the g-chart. A point in q(gU)∩q(g'U) need not have that lift in g'U: it may differ from one there by a right H-factor. Without fixing that factor locally, the displayed inverse is undefined. The rest of the submersion/uniqueness argument depends on a smooth atlas.

## Repair disposition

At an overlap coset represented by z=g exp(X0), choose h0∈H with zh0∈g'U. By openness, for X near X0 the smooth representative g exp(X)h0 remains in g'U. Apply the translated product inverse there and take its m-component; right multiplication by the *fixed* h0 does not change the coset. This gives a smooth transition on a neighbourhood, and symmetry gives the inverse transition.

## Implemented repair — draft owner evidence

**Repaired item SHA-256:** `6229c4fcb65dfcd30e416905e2bdcb9d2590c831933ae19a506fd5aee7e3017d`  
**State:** local repair implemented; terminal owner decision and judge verdict still pending.

Step 5.1 now fixes, at each chart-overlap coset, one h0∈H that moves the first-chart representative into the second translated product-chart domain. Openness keeps the same h0 valid locally. Applying the second product inverse to g exp(X)h0 is therefore legitimate, and its m-component is the smooth second quotient coordinate. This closes Terra’s missing transition-map domain check. Batch 8 exact derivation contract is synchronized.

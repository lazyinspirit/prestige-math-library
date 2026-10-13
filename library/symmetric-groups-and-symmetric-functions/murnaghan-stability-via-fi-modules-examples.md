---
page: murnaghan-stability-via-fi-modules-examples
title: "Murnaghan Stability via FI-Modules — Examples"
status: published
items: []
examples: [ex-murnaghan-stability-for-alpha-beta-two,
           cex-a-global-product-threshold-is-not-a-per-triple-sharpness-claim]
requires:
  - murnaghan-stability-via-fi-modules
---

**Objective.** This companion works a Kronecker product
whose stable behaviour is visible at small ranks: the pair
$\alpha=\beta=(2)$ on [[murnaghan-stability-via-fi-modules]]. The first item
records the source's displayed products at ranks $4$ to $9$ and the stable row,
re-derives the rank-four product from the $S_4$ character table as an
independent check, reads off the ten reduced coefficients
$\bar g^\gamma_{(2),(2)}=1,1,2,1,1,2,1,1,1,1$, and verifies directly that the
whole product is $V$-stable at rank $8$—the exact threshold
$|(2)|+|(2)|+2+2$ of the A page—and fails at rank $7$, where applying $V$
misses the term $s_{4,4}$
([[ex-murnaghan-stability-for-alpha-beta-two]]).

The second item is the boundary warning the first makes possible: the
individual coefficient $\bar g^{(2)}_{(2),(2)}=2$ already equals its stable
value at rank $6$, two ranks before the whole product stabilizes, so the exact
global product threshold is not a per-coefficient sharpness statement
([[cex-a-global-product-threshold-is-not-a-per-triple-sharpness-claim]]).
Both items are finite computations from the displayed data together with the
proved threshold theorem; neither claims a general positivity or stabilization
rule for individual coefficients.

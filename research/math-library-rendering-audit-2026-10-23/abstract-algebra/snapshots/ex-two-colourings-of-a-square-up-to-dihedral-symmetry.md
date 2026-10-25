---
id: ex-two-colourings-of-a-square-up-to-dihedral-symmetry
kind: example
title: "There are six two-colourings of the vertices of a square up to its eight symmetries"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchy-frobenius-orbit-counting, ex-class-equation-of-the-dihedral-group-of-order-eight, def-group-action, thm-cardinality-of-a-set-of-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.3"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-burnsides-counting-theorem.html"
pipeline_run: null
---

## Example

The eight symmetries of a square act on its two-colour vertex colourings. There
are exactly six orbits, so there are six colourings up to symmetry.

## Facts & Assumptions

**Given:** The square-symmetry group $D$ acting on the vertex set $V=\{1,2,3,4\}$ and the colouring set $C=\{0,1\}^V$.

[L1] Orbit counting gives $|D|\,|C/D|=\sum_{g\in D}|C^g|$ ([[thm-cauchy-frobenius-orbit-counting]]).

[L2] The group $D$ has eight elements: four rotations and four reflections ([[ex-class-equation-of-the-dihedral-group-of-order-eight]]).

[L3] A left action satisfies the usual identity and product laws ([[def-group-action]]).

[L4] There are $2^4=16$ functions $V\to\{0,1\}$ ([[thm-cardinality-of-a-set-of-functions]]).

## Verification

**Proof technique:** direct.

1.1 Define $(g\cdot c)(v)=c(g^{-1}v)$. Inverse precomposition gives $e\cdot c=c$ and $(gh)\cdot c=g\cdot(h\cdot c)$, so [L2] and [L3] give an action on the $16$ colourings counted by [L4]. [L2, L3, L4]

2.1 A colouring fixed by a symmetry is constant on each cycle of that symmetry. Thus the identity fixes $16$ colourings; the two quarter-turns fix $2$ each; the half-turn fixes $4$; the two reflections through opposite vertices fix $8$ each; and the two reflections through opposite edges fix $4$ each. [step 1.1, L2, algebra]

3.1 The fixed-point sum is $16+2+2+4+8+8+4+4=48$. By [L1] and $|D|=8$, one has $48=8|C/D|$, so $|C/D|=6$. [step 2.1, L1, L2, algebra]

4.1 The six orbits can also be distinguished by the number of black vertices, with the two-black case split into adjacent and opposite pairs, confirming the count. [step 3.1, algebra] ∎

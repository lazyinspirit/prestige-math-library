---
id: def-local-artin-schreier-pairing
kind: definition
title: "Artin–Schreier local pairing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-local-artin-reciprocity-map
  - def-absolute-galois-group-of-a-local-field
  - def-local-field-valuation-ring-uniformizer-and-residue-field
justified_by: []
proof_strategy: direct
axiom_use: >-
  No additional choice principle is used: once the separable closure and local
  reciprocity map are fixed, the root comparison is finite algebra.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter IV §5.4"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Definition

Let $F$ be a complete discretely valued field of characteristic $p>0$ with
finite residue field, fix a separable closure $F_s$ and a local reciprocity
map as defined for $F$, and let $\wp(x)=x^p-x$. For $a\in F^\times$ and
$b\in F$, choose $\gamma\in F_s$ with $\wp(\gamma)=b$. The
**Artin–Schreier local pairing** is
$$[a,b]_F=\operatorname{rec}_F(a)(\gamma)-\gamma\in\mathbb F_p,$$
where the local reciprocity map is restricted to the cyclic extension
$F(\gamma)/F$. The definition is independent of the chosen root because
the roots are exactly $\gamma+c$ for $c\in\mathbb F_p$.

## Definition references

[[def-local-artin-reciprocity-map]]

[[def-absolute-galois-group-of-a-local-field]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

## Facts & Assumptions

**Given:** The field, a fixed separable closure, and a chosen local reciprocity
map with compatible finite quotient actions.

[F1] The local reciprocity map assigns compatible automorphisms to finite
abelian extensions and restricts to the cyclic extension $F(\gamma)/F$.
[[def-local-artin-reciprocity-map]]

[F2] The absolute Galois group is formed from the chosen separable closure.
[[def-absolute-galois-group-of-a-local-field]]

[Fesenko and Vostokov, *Local Fields and Their Extensions*, Chapter IV §5.4, printed pp. 147–148](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

## Verification

**Given:** The finite-residue characteristic-$p$ field, its separable closure,
and a local reciprocity map with compatible finite quotient actions.

1.1 The polynomial $X^p-X-b$ has derivative $-1$, so every one of its roots is separable over $F$ and lies in the chosen separable closure from [F2]. Its roots are exactly $\gamma+c$ for $c\in\mathbb F_p$, because their differences are roots of $X^p-X$ and that polynomial has precisely $\mathbb F_p$ as its roots. Thus $F(\gamma)/F$ is a finite Galois extension with cyclic Galois group of order at most $p$, and the restriction in [F1] is defined. [F1, F2, given, algebra]

2.1 If $\gamma'=\gamma+c$ is another root, every automorphism in the restricted Galois group fixes $c\in\mathbb F_p$. Hence $\operatorname{rec}_F(a)(\gamma')-\gamma' =\operatorname{rec}_F(a)(\gamma)-\gamma$, so the value is independent of the chosen root and lies in $\mathbb F_p$. This verifies that the displayed rule defines a pairing. [F1, step 1.1, given, algebra] ∎ 
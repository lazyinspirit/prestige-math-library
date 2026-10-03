---
id: def-abelian-variety-over-a-field
kind: definition
title: "Abelian varieties over a field"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-scheme-over-base, def-proper-morphism, def-smooth-morphism-schemes, def-geometrically-reduced-integral-connected-fibre, thm-ag-standard-smooth-geometric-regularity, thm-regular-local-rings-are-domains-and-cohen-macaulay]
justified_by: [prop-abelian-variety-commutativity-from-rigidity]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Definition 8.3 and Chapter 8"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Stacks Project, Definition 39.9.1"
      url: https://stacks.math.columbia.edu/tag/0BF9
---

## Definition

Let $k$ be a field. A **group variety** over $k$ means a smooth separated finite-type $k$-scheme $G$ equipped with $k$-morphisms $m:G\times_kG\to G$, $i:G\to G$, and $e:\operatorname{Spec}k\to G$ satisfying associativity, the two identity laws, and the two inverse laws as identities of scheme morphisms. A homomorphism respects these maps. A closed subgroup scheme is a closed subscheme on which these maps restrict; it is normal if conjugation factors through it.

An **abelian variety** over $k$ is a proper geometrically connected group variety over $k$. This definition does not include projectivity as an assumption. Commutativity follows from [[prop-abelian-variety-commutativity-from-rigidity]]. The identity gives a $k$-rational point. Using AC for the referenced smoothness/regularity suppliers, smoothness and geometric connectedness imply geometric integrality: after any algebraically closed field extension the local rings are regular, so distinct irreducible components cannot meet; the finitely many irreducible components are therefore open and closed, and connectedness leaves exactly one.

A **pseudo-abelian variety** is a smooth connected finite-type $k$-group scheme with no nontrivial smooth connected affine normal subgroup scheme. In this terminology connectedness is ordinary connectedness, not a replacement for properness. Over imperfect fields a pseudo-abelian variety need not be proper.

## References

Milne, *Algebraic Groups*, Definition 8.3, pp. 149–150, and Chapter 8 definitions of complete connected group varieties; Stacks, Section 39.9 [0BF9], Definition 39.9.1 [03RO]. The smoothness requirement excludes finite nonreduced group schemes.

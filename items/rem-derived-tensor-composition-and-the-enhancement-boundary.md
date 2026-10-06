---
id: rem-derived-tensor-composition-and-the-enhancement-boundary
kind: remark
title: Derived tensor composition and the enhancement boundary
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility, thm-inverse-bimodule-complexes-give-derived-tensor-equivalences, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, def-graded-ring-module-bimodule-and-internal-shift, lem-graded-balanced-tensor-and-shift-isomorphisms]
justified_by: []
aliases: []
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "M. Khovanov and P. Seidel, Quivers, Floer Cohomology, and Braid Group Actions (arXiv:math/0006056), §2a-2c, author pp.8-11 (internal shift {k} and cochain shift [k] with ∂_{M[k]}=(-1)^k∂_M)"
      url: "https://arxiv.org/pdf/math/0006056"
    - title: "Roozbeh Hazrat, Graded Rings and Graded Grothendieck Groups (arXiv:1405.5071), §1.2.2 shift of modules (1.16), printed p.34; §1.2.6 graded tensor product (1.21)-(1.23), printed pp.40-41; §2.3 Definitions 2.3.3-2.3.4, Theorem 2.3.7 with its proof, Theorem 2.3.8, Example 2.3.9, printed pp.118-123"
      url: "https://arxiv.org/pdf/1405.5071"
---

## Remark

Let $k$ be a commutative ring and $A,B,C$ graded $k$-algebras. For bounded cochain
complexes $F$ of graded $(B,A)$-bimodules and $G$ of graded $(A,C)$-bimodules
satisfying the projectivity and boundedness hypotheses of the bounded-complex page,
composition of the derived tensor functors corresponds to the degreewise balanced
tensor product with the signed cochain totalization of
[[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]. Internal
degrees enter only the grading of the total complex, so no additional internal-degree
sign is introduced, and the cochain sign depends only on the cochain degree: this is
the convention of the internal shift $M\{r\}_d=M_{d-r}$ of
[[def-graded-ring-module-bimodule-and-internal-shift]], under which a shifted complex
has the same differential and the same elements, unlike the cochain shift $[1]$ which
has $X[1]^n=X^{n+1}$ and differential $-d_X^{n+1}$, so it lowers cochain
placement by one.

The associativity, unit and cone-compatibility statements and the derived-tensor
equivalences supplied by inverse complexes are exactly those of
[[thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]] and
[[thm-inverse-bimodule-complexes-give-derived-tensor-equivalences]], applied with the
graded balanced associators and unitors of
[[lem-graded-balanced-tensor-and-shift-isomorphisms]]; their projectivity,
boundedness, homotopy and graded/cochain hypotheses are preserved verbatim, with each
coherence identity an identity of underlying graded bimodules checked on elementary
tensors.

This remark asserts **only** that supplied inverse complexes give those equivalences.
It makes no assertion that an arbitrary abstract triangulated functor or natural
transformation between derived categories is induced by a bimodule complex: a dg or
stable enhancement with an appropriate notion of morphism would be needed for such a
classification, and it lies outside this A/B pair. Likewise relative tensor
categories, Radford's $S^4$ theorem, arbitrary Grothendieck categories and schemes are
not prerequisites of this pair, and the internal shift $\{r\}$ of the graded theorem is
the graded-module shift of
[[def-graded-ring-module-bimodule-and-internal-shift]], not the cochain shift $[1]$ of
the bounded-complex page. No commutativity beyond $k$ and no choice are used.

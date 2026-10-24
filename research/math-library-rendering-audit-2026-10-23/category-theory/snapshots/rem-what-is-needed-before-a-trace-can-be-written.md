---
id: rem-what-is-needed-before-a-trace-can-be-written
kind: remark
title: "What is needed before a trace can be written"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-the-categorical-trace-of-a-morphism-into-the-double-dual, thm-a-braided-rigid-category-has-a-drinfeld-morphism]
verification:
  audited: 2026-09-04
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 4.7.2 and Sections 8.9-8.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "A. Bruguieres and A. Virelizier, Hopf monads, Lemma 8.1"
      url: "https://imag.umontpellier.fr/~bruguieres/docs/Hopf-monads.pdf"
---

## Remark

The hypothesis ladder is strict.

- Rigidity is what types $\operatorname{Tr}_L(a)$ and $\operatorname{Tr}_R(b)$
  at all, because their formulas use evaluation and coevaluation maps.
- A chosen comparison $j_X:X\to X^{\vee\vee}$ turns an endomorphism
  $x:X\to X$ into a traceable morphism $j_Xx$. A pivotal structure supplies
  such comparisons as monoidal isomorphisms.
- Sphericality is an additional condition guaranteeing that the left and right
  traces agree.
- In a braided rigid category, the Drinfeld morphism
  $u_X:X\to X^{\vee\vee}$ from
  [[thm-a-braided-rigid-category-has-a-drinfeld-morphism]] already makes
  $\operatorname{Tr}_L(u_Xx)$ well typed. This Drinfeld morphism is already a
  natural isomorphism under the bare braided-rigid hypotheses, but it need not
  be monoidal; a twist is what combines with it to produce a pivotal structure.

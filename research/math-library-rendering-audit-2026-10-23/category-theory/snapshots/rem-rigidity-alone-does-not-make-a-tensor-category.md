---
id: rem-rigidity-alone-does-not-make-a-tensor-category
kind: remark
title: "Rigidity alone does not make a tensor category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-rigid-object-and-rigid-monoidal-category]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Definitions 4.1.1 and 4.2.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Remark

EGNO's term **tensor category** is much stronger than "rigid monoidal
category". Their Definition 4.1.1 requires a locally finite $k$-linear abelian
rigid monoidal category over an algebraically closed field with
$\operatorname{End}(\mathbf 1)\cong k$, and Definition 4.2.3 similarly adds
the ambient hypotheses for multitensor categories.

So this page may use rigidity, pivotality, sphericality, twists, and ribbon
structure, but it may not silently import fusion-category or Grothendieck-ring
consequences whose proofs need those extra hypotheses.

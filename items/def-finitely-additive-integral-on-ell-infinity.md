---
id: def-finitely-additive-integral-on-ell-infinity
kind: definition
title: "The finitely additive integral on ell-infinity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finitely-additive-charge-and-total-variation-on-the-power-set-of-n, lem-finite-range-sequences-are-uniformly-dense-in-ell-infinity]
justified_by: [lem-finitely-additive-integral-is-well-defined-and-isometric]
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Theorem B.18 and its proof, printed pp.192-193"
pipeline_run: phase-2-next-18
---

## Definition

Let $\nu\in ba(\mathcal P(\mathbb N))$. If a finite-range sequence is written
using a finite disjoint partition of $\mathbb N$ as

$$s=\sum_{j=1}^m c_j\mathbf1_{A_j},$$

define its **finitely additive integral** provisionally by

$$I_\nu^0(s):=\sum_{j=1}^m c_j\nu(A_j).$$

The well-definedness lemma
[[lem-finitely-additive-integral-is-well-defined-and-isometric]] proves that
this does not depend on the displayed representation and extends uniquely and
continuously from the dense finite-range subspace to all of $\ell^\infty$.
That extension is denoted $I_\nu(x)=\int_{\mathbb N}x\,d\nu$.

No countably additive integration theorem is being used here.

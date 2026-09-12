---
id: def-kac-moody-denominator-product-with-root-multiplicities
kind: definition
title: Kac Moody denominator product with root multiplicities
deps: ["def-kac-moody-formal-character-completion", "def-kac-moody-weyl-vector", "prop-kac-moody-root-spaces-are-finite-dimensional"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Sections 9.2 and 10.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Sections 10.7 and 11.2
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
---

## Definition

For a finite symmetrizable GCM, use the completion [[def-kac-moody-formal-character-completion]] and a Weyl vector from [[def-kac-moody-weyl-vector]]. For $\alpha\in\Delta^+$ put $m_\alpha=\dim\mathfrak g_\alpha$ and define
$$P=\prod_{\alpha\in\Delta^+}(1-e^{-\alpha})^{m_\alpha},\qquad D=e^\rho P.$$
These are the **normalized denominator product** and the **shifted denominator**, respectively. Multiplicities, root signs and finiteness of each root space are supplied by [[prop-kac-moody-root-spaces-are-finite-dimensional]]. The imaginary factors have their actual dimensions as exponents.

At coefficient $e^{-\beta}$, with $\beta=\sum_i b_i\alpha_i\in Q^+$, a contributing factor has a positive root degree whose simple coordinates are bounded by the corresponding $b_i$. There are finitely many such lattice points, each of positive height, and each finite power has a finite binomial expansion. Thus the coefficient is a finite integer sum, independent of how the factors are ordered. The support of $P$ lies in $-Q^+$, its constant coefficient is one, and all its other terms have strictly positive depth. In particular it is invertible by the finite-at-each-height geometric recursion proved in the completion definition. A simple-axis coefficient sees only the root $\alpha_i$ with multiplicity one, so setting all other simple-root variables to zero gives $P=1-e^{-\alpha_i}$ on that axis.

No analytic product limit or complex exponential evaluation is part of these definitions. The empty subproduct equals one, and no choice of bases in the root spaces is needed: only their finite dimensions enter.

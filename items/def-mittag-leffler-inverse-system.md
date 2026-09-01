---
id: def-mittag-leffler-inverse-system
kind: definition
title: "Mittag-Leffler inverse systems"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inverse-system-and-inverse-limit-of-modules]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 22.6(3)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Definition 10.86.1"
      url: "https://stacks.math.columbia.edu/tag/0594"
pipeline_run: null
---

## Definition

Let
$$M_1 \xleftarrow{\varphi_2} M_2 \xleftarrow{\varphi_3} M_3 \xleftarrow{} \cdots$$
be an inverse system of $R$-modules.

The system is **Mittag-Leffler** if for every $m \ge 1$ the descending family
of images
$$\operatorname{im}(\varphi_{n,m}) \subseteq M_m \qquad (n \ge m)$$
eventually stabilizes. Explicitly, for each $m$ there exists $c(m)\ge m$ such
that
$$\operatorname{im}(\varphi_{n,m})=\operatorname{im}(\varphi_{c(m),m}) \qquad\text{for every }n \ge c(m).$$

In particular, any inverse system with surjective transition maps is
Mittag-Leffler.

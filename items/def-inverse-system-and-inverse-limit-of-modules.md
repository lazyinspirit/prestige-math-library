---
id: def-inverse-system-and-inverse-limit-of-modules
kind: definition
title: "Inverse systems and inverse limits of modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: []
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §22.5"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 10.87"
      url: "https://stacks.math.columbia.edu/tag/03C9"
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring.

An **inverse system of $R$-modules indexed by** $\mathbb{N}_{\ge 1}$ is a
sequence of $R$-modules
$$M_1 \xleftarrow{\varphi_2} M_2 \xleftarrow{\varphi_3} M_3 \xleftarrow{\varphi_4} \cdots$$
together with $R$-linear transition maps and their composites
$$\varphi_{n,m} := \varphi_{m+1} \circ \cdots \circ \varphi_n \colon M_n \to M_m \qquad (n \ge m),$$
and $\varphi_{m,m} := \operatorname{id}_{M_m}$.

Its **inverse limit** is the submodule
$$\varprojlim M_n := \left\{(x_n)_{n \ge 1} \in \prod_{n \ge 1} M_n : \varphi_n(x_n)=x_{n-1}\text{ for every }n \ge 2\right\}.$$

The coordinate maps
$$\pi_n \colon \varprojlim M_n \to M_n, \qquad (x_m)_m \mapsto x_n,$$
are called the **limit projections**.

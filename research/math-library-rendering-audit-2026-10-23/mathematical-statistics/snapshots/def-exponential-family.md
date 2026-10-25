---
id: def-exponential-family
kind: definition
title: "Exponential families and full rank"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistic-and-estimator
  - def-likelihood-density
  - def-finite-sigma-finite-and-semifinite-measures
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-standard-borel-space
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Mathematical Statistics Lecture Notes"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
    - title: "Peter Kempthorne, MIT 18.655 Lecture Note 6: Sufficiency"
      url: "https://ocw.mit.edu/courses/18-655-mathematical-statistics-spring-2016/bbbca14a2009e47add8c7ea2a49daa41_MIT18_655S16_LecNote6.pdf"
    - title: "Noah Fithian, Stat 210a Reader: Sufficiency"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/sufficiency.html"
    - title: "Noah Fithian, Stat 210a Reader: Completeness, Ancillarity, and Basu’s Theorem"
      url: "https://stat210a.berkeley.edu/fall-2025/reader/completeness.html"
    - title: "Charles J. Geyer, Stat 5421 Lecture Notes: Exponential Families"
      url: "https://www.stat.umn.edu/geyer/5421/notes/expfam.pdf"
    - title: "Jiahao Tian, Chapter 2: Sufficiency and Exponential Families"
      url: "https://jiahaotian-stat.github.io/Notes/en/Advanced_Stat/2Sufficiency/"
---

## Definition

Let $(\mathcal X,\mathcal A)$ be standard Borel, let $\mu$ be a $\sigma$-finite positive measure, let $h:\mathcal X\to[0,\infty)$ be measurable, and let $T:\mathcal X\to\mathbb R^k$ be a measurable statistic. For $\eta\in\mathbb R^k$ put

$$Z(\eta)=\int h(x)e^{\eta\cdot T(x)}\,\mu(dx),\qquad H=\{\eta:0<Z(\eta)<\infty\},\qquad A(\eta)=\log Z(\eta).$$

For a parameter set $\Omega\subseteq H$, the associated **exponential family** has laws $P_\eta$ with density

$$p_\eta(x)=h(x)\exp\{\eta\cdot T(x)-A(\eta)\}\quad(\eta\in\Omega).$$

The normalization $A(\eta)=\log Z(\eta)$ makes each density integrate to one. In this item **full-rank** means that $\Omega$ contains a nonempty open subset of $\mathbb R^k$ and there do not exist $b\ne0$ and $c\in\mathbb R$ with $b\cdot T=c$ $\mu$-almost everywhere on $\{h>0\}$. A parameter set containing an open subset is also called regular in some sources; terminology varies, so this definition controls here. The condition is stronger than needed for the completeness theorem below but rules out redundant displayed coordinates.

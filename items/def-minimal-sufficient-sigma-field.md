---
id: def-minimal-sufficient-sigma-field
kind: definition
title: "Minimal sufficient sigma-fields"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-sufficient-statistic
  - def-conditional-expectation-given-a-sigma-algebra
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

For a family $(P_\theta)_{\theta\in\Theta}$ on $(\mathcal X,\mathcal A)$, a sub-$\sigma$-field $\mathcal G\subseteq\mathcal A$ is **sufficient** if for every bounded measurable $u:\mathcal X\to\mathbb R$ there is one $\mathcal G$-measurable bounded function $v_u$ such that

$$\int_A u\,dP_\theta=\int_A v_u\,dP_\theta\quad(A\in\mathcal G,\ \theta\in\Theta).$$

For each $\theta$, this says that $v_u$ is a version of $E_\theta[u\mid\mathcal G]$, with the same pointwise version used for every parameter. Define the family-null ideal $\mathcal N=\{N\in\mathcal A:P_\theta(N)=0\text{ for every }\theta\}$. We say $\mathcal G\subseteq\mathcal H\pmod{\mathcal N}$ if for every $A\in\mathcal G$ there is $B\in\mathcal H$ with $A\triangle B\in\mathcal N$. A sufficient $\sigma$-field $\mathcal G_*$ is **minimal sufficient** if $\mathcal G_*\subseteq\mathcal H\pmod{\mathcal N}$ for every sufficient $\mathcal H$.

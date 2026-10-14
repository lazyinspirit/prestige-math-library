---
id: def-likelihood-ratio-equivalence-on-common-discrete-support
kind: definition
title: "Likelihood-ratio equivalence on common discrete support"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-likelihood-density
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

Let $\mathcal X$ be countable with its full $\sigma$-field, so it is standard Borel under the discrete metric. Let $\Theta\ne\varnothing$, and let $(P_\theta)_{\theta\in\Theta}$ be dominated by a fixed $\sigma$-finite positive measure $\mu$. Choose the finite-valued densities $p_\theta=dP_\theta/d\mu$ as in [[def-likelihood-density]]. Let $X_0\subseteq\mathcal X$ satisfy $P_\theta(X_0)=1$ and $P_\theta(\{x\})>0$ for every $x\in X_0$ and every $\theta$. Write $m_\theta(x)=P_\theta(\{x\})$. For each $x\in X_0$, $0<\mu(\{x\})<\infty$ and $p_\theta(x)=m_\theta(x)/\mu(\{x\})$: positivity follows from $m_\theta(x)>0$, finiteness from sigma-finiteness, and the value is fixed by the density integral on the positive-measure singleton. Consequently

$$\frac{p_\theta(x)}{p_\theta(y)}=\frac{m_\theta(x)}{m_\theta(y)}\frac{\mu(\{y\})}{\mu(\{x\})}.$$

For $x,y\in X_0$, define $x\sim y$ if there is a constant $c(x,y)>0$ such that $m_\theta(x)/m_\theta(y)=c(x,y)$ for every $\theta$. The displayed fixed singleton factor shows this is equivalent to constancy of the common-reference density ratio. This is an equivalence relation: the constants for $(x,x)$, $(y,x)$ and $(x,z)$ are respectively $1$, $c(x,y)^{-1}$ and $c(x,y)c(y,z)$. Its equivalence classes form a countable quotient. Equip that quotient with its discrete $\sigma$-field; it is standard Borel because the discrete metric is complete and the countable space itself is dense. Since $\Theta\ne\varnothing$ and $P_\theta(X_0)=1$, $X_0$ is nonempty; define the class statistic by mapping each point of $X_0$ to its class and every point off $X_0$ to any fixed class. It is measurable because $\mathcal X$ has the full $\sigma$-field, and values off $X_0$ are null under every law.

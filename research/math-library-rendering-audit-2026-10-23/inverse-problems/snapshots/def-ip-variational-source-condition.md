---
id: def-ip-variational-source-condition
kind: definition
title: Variational source conditions on a regularizer sublevel
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-ip-bregman-distance
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, equation (10.17)"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, equations (2.22) and (2.26)"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, equations (1.28)–(1.31)"
      url: "https://arxiv.org/pdf/2403.18704"
---

## Definition

Let $X,Y$ be real Banach spaces, let $F:D(F)\subseteq X\to Y$, let $x^\dagger\in D(F)$ with exact datum $y=F(x^\dagger)$, and let $R:X\to(-\infty,+\infty]$ be proper and convex with $x^\dagger\in\operatorname{dom}R$. Fix $\xi^\dagger\in\partial R(x^\dagger)$, an exponent $1\le p<\infty$, a continuous nondecreasing concave function $\psi:[0,\infty)\to[0,\infty)$ with $\psi(0)=0$ and $\psi(t)>0$ for $t>0$, a coefficient $0\le\beta<1$, and a level $R_0\ge R(x^\dagger)$. The **variational source condition** with these data holds on the named regularizer sublevel $L_{R_0}:=\{x\in D(F):R(x)\le R_0\}$ when

$$-\langle\xi^\dagger,x-x^\dagger\rangle_{X^*,X}\le\beta D_R^{\xi^\dagger}(x,x^\dagger)+\psi\!\left(\|F(x)-F(x^\dagger)\|_Y^p\right)\qquad(x\in L_{R_0}).$$

The condition is an assumption on the selected subgradient and the stated sublevel; it makes no assertion that a subgradient exists at every point or that a regularized minimizer exists.

## Definition references

[[def-ip-banach-convex-subgradient-and-dual-pairing|Banach subgradients and dual pairings]]

[[def-ip-bregman-distance|Bregman distance orientation]]

[Christian Clason, *Regularization of Inverse Problems*, equation (10.17)](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, equations (2.22) and (2.26)](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, equations (1.28)–(1.31)](https://arxiv.org/pdf/2403.18704)

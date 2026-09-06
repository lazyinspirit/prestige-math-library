---
id: def-spherical-averages-and-local-ball-means-in-rn
kind: definition
title: "Spherical averages and local ball means in Rn"
status: draft
origin: pipeline
deps: [def-ball-average-operator-on-r-n, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Definition

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, and let $u:\Omega\to\mathbb R$ be locally Lebesgue integrable. Assume also that $\theta\mapsto u(x+r\theta)$ is $\sigma$-integrable on $S^{n-1}$ whenever $\overline{B_r(x)}\subseteq\Omega$. Put $\omega_{n-1}:=\sigma(S^{n-1})$. For $x\in\Omega$ and $r>0$ with $\overline{B_r(x)}\subseteq\Omega$, define
$$M_u(x,r):=\frac1{\omega_{n-1}}\int_{S^{n-1}}u(x+r\theta)d\sigma(\theta),\qquad A_u(x,r):=\frac{1}{|B_r(x)|}\int_{B_r(x)}u(y)dy.$$
The spherical (respectively ball) mean-value property says $u(x)=M_u(x,r)$ (respectively $u(x)=A_u(x,r)$) for every such ball. The polar formula [[thm-polar-coordinates-formula-for-lebesgue-measure]] makes the normalizations meaningful.

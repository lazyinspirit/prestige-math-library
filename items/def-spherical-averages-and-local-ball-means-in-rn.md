---
id: def-spherical-averages-and-local-ball-means-in-rn
kind: definition
title: "Spherical averages and local ball means in Rn"
status: published
origin: pipeline
deps: [def-countable-choice, def-ball-average-operator-on-r-n, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---
## Definition

Assume the Axiom of Countable Choice ([[def-countable-choice]]), under which
the cited Lebesgue and polar surface measures and their integrals are supplied.

Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, and let $u:\Omega\to\mathbb R$ be locally Lebesgue integrable. Assume also that $\theta\mapsto u(x+r\theta)$ is $\sigma$-integrable on $S^{n-1}$ whenever $\overline{B_r(x)}\subseteq\Omega$. Put $\omega_{n-1}:=\sigma(S^{n-1})$. For $x\in\Omega$ and $r>0$ with $\overline{B_r(x)}\subseteq\Omega$, define
$$M_u(x,r):=\frac1{\omega_{n-1}}\int_{S^{n-1}}u(x+r\theta)d\sigma(\theta),\qquad A_u(x,r):=\frac{1}{|B_r(x)|}\int_{B_r(x)}u(y)dy.$$
The spherical (respectively ball) mean-value property says $u(x)=M_u(x,r)$ (respectively $u(x)=A_u(x,r)$) for every such ball. The polar formula [[thm-polar-coordinates-formula-for-lebesgue-measure]] makes the normalizations meaningful.

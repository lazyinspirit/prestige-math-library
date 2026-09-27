---
id: lem-radial-derivative-of-a-spherical-average
kind: lemma
title: "Radial derivative of a spherical average"
status: published
origin: pipeline
deps: [def-countable-choice, def-spherical-averages-and-local-ball-means-in-rn, def-polar-surface-measure-on-the-unit-sphere, lem-sphere-and-ball-measures-scale, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, lem-euclidean-chart-measure-agrees-with-polar-surface-measure]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "PDE source treatment"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be open, and let $u\in C^2(\Omega)$. If $r>0$, $B_r(x)\Subset\Omega$, and $m(t)=M_u(x,t)$, then
$$m'(r)=\frac r n\frac{1}{|B_r(x)|}\int_{B_r(x)}\Delta u(y)\,dy.$$

## Facts & Assumptions

**Given:** The data in the statement, including $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] A bounded $C^1$ Euclidean domain satisfies the divergence theorem for a $C^1$ vector field under $\mathrm{AC}_\omega$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F2] For $n\ge2$ under $\mathrm{AC}_\omega$, chart surface measure on the unit sphere equals the polar measure and scales by $r^{n-1}$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F3] The ball volume is $|B_r(x)|=\omega_{n-1}r^n/n$ under the stated hypotheses ([[lem-sphere-and-ball-measures-scale]]).

[F4] The polar sphere measure is defined by cone volume, so on $S^0=\{-1,1\}$ each singleton has measure one ([[def-polar-surface-measure-on-the-unit-sphere]]).

## Proof

1.1 Compact containment gives a slightly larger ball inside $\Omega$. Since $u$ is $C^2$ there and $\sigma$ is finite, differentiation under the spherical integral gives $$m'(r)=\omega_{n-1}^{-1}\int_{S^{n-1}}\nabla u(x+r\theta)\cdot\theta\,d\sigma(\theta).$$ [given]

2.1 If $n=1$, [F4] gives $m(t)=(u(x+t)+u(x-t))/2$ and $|B_r(x)|=2r$. Thus $m'(r)=(u'(x+r)-u'(x-r))/2$. The one-dimensional fundamental theorem of calculus gives $\int_{x-r}^{x+r}u''(y)\,dy=u'(x+r)-u'(x-r)$, exactly the displayed formula. [F4, step 1.1, algebra]

3.1 Suppose $n\ge2$. The ball is a bounded smooth domain, and $F=\nabla u$ is $C^1$ on its closure. Its outward normal at $x+r\theta$ is $\theta$. Applying [F1] and using [F2] to identify and scale its surface measure gives $$\int_{B_r(x)}\Delta u(y)\,dy=r^{n-1}\int_{S^{n-1}}\nabla u(x+r\theta)\cdot\theta\,d\sigma(\theta)=\omega_{n-1}r^{n-1}m'(r).$$ By [F3], $\omega_{n-1}r^{n-1}=n|B_r(x)|/r$, so division gives the claimed identity. [F1, F2, F3, step 1.1, algebra] ∎

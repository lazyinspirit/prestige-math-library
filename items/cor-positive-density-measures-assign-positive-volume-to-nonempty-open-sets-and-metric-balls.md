---
id: cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls
title: "Positive open-set and metric-ball volume"
kind: corollary
status: draft
origin: pipeline
deps: ["thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure", "thm-lebesgue-measure-of-a-box-of-every-kind", "def-metric-ball", "thm-density-measure-is-independent-of-the-chart-gluing"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Statement

Let $r$ be positive smooth. Every nonempty open $O\subseteq M$ has $\mu_r(O)>0$. If $d$ induces the manifold topology, then for every $p\in M$ and $R>0$ the ball $B_d(p,R)$ is Borel and has positive measure. If its closure in $M$ is compact, it also has finite measure.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Nonempty open set; topology-compatible positive-radius ball.

[F1] [[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]: Positive smooth densities give compact-finite Borel measures.

[F2] [[thm-density-measure-is-independent-of-the-chart-gluing]]: The measure in any chart is its coefficient integral.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]]: A nondegenerate coordinate box has positive measure, equal to its volume.

[F4] [[def-metric-ball]]: $B_d(p,R)=\{q:d(p,q)<R\}$ for $R>0$.

## Proof

1.1 Choose $p\in O$ and a chart around it restricted inside $O$. For $n\ge1$, continuity and $r_x(x(p))>0$ give a relative coordinate neighborhood where $r_x\ge c=r_x(x(p))/2>0$. This neighborhood contains a closed nondegenerate Euclidean box $Q$ in the interior of the half-space: even if $p$ is on the face, move its last coordinate a sufficiently small positive distance and choose a still smaller box. Hence $\mu_r(O)\ge\int_Qr_x\ge c\operatorname{vol}(Q)>0$. [F2, F3, given]

2.1 For $n=0$ the singleton $\{p\}$ is open with measure $r(p)>0$, so again $\mu_r(O)>0$. The empty manifold has no nonempty open subset, making this clause vacuous. [F2, step 1.1]

3.1 If $q\in B_d(p,R)$, then $\epsilon=R-d(p,q)>0$ and the triangle inequality gives $B_d(q,\epsilon)\subset B_d(p,R)$. Thus the ball is open in the metric topology, hence in the manifold topology and Borel. It contains $p$ since $d(p,p)=0<R$, so the preceding positivity applies. If $\overline{B_d(p,R)}$ is compact, monotonicity and compact-finiteness give $\mu_r(B_d(p,R))\le\mu_r(\overline{B_d(p,R)})<\infty$. [F1, F4, step 1.1, step 2.1] ∎

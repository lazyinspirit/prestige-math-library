---
id: thm-riemann-stieltjes-existence-finitely-discontinuous
kind: theorem
title: "A bounded function with finitely many discontinuities is Stieltjes integrable against a continuous bounded-variation integrator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-stieltjes-darboux-criterion,
       thm-jordan-decomposition-for-bv-functions,
       lem-jumps-of-the-variation-function,
       thm-riemann-stieltjes-linearity-and-additivity,
       def-bounded-variation-and-total-variation, def-continuity-real,
       thm-heine-cantor-r]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.10"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Let $f:[a,b]\to\mathbb R$ be bounded and have only finitely many discontinuities. If $\alpha:[a,b]\to\mathbb R$ is continuous and has bounded variation, then $\int_a^b f\,d\alpha$ exists.

## Facts & Assumptions

**Given:** A bounded $f$ with finite discontinuity set $D$, and a continuous BV integrator $\alpha$ on $[a,b]$.

[L1] A BV function is the difference of two nondecreasing functions ([[thm-jordan-decomposition-for-bv-functions]]).

[L2] The canonical monotone summands of a continuous BV function are continuous ([[lem-jumps-of-the-variation-function]]).

[L3] For $a<b$, a bounded integrand and a nondecreasing integrator, mesh integrability is equivalent to continuity of the integrand at every discontinuity of the integrator together with the weighted oscillation criterion ([[thm-riemann-stieltjes-darboux-criterion]]).

[L4] Continuous functions on compact intervals are uniformly continuous ([[thm-heine-cantor-r]]).

[L5] Stieltjes integration is linear in the integrator ([[thm-riemann-stieltjes-linearity-and-additivity]]).

[L6] Continuity makes the increment of $\alpha$ arbitrarily small on sufficiently short intervals around each point ([[def-continuity-real]]).

## Proof

**Proof technique:** direct.

1.1 If $a=b$ the integral is $0$ by the definition of the Riemann-Stieltjes integral on a singleton interval and there is nothing to prove, so assume $a<b$, which is the standing hypothesis of [L3]. [given, L3]

1.2 First suppose that $\alpha$ is continuous and nondecreasing. Write $|f|\le M$. Given $\varepsilon>0$, [L6] and finiteness of $D$ allow pairwise disjoint closed intervals $I_x$ about the points $x\in D$ whose total $\alpha$-increment is less than $\varepsilon/(4M+1)$. [L6]

2.1 On the compact complement of the interiors of the $I_x$, the function $f$ is continuous and hence uniformly continuous by [L4]. Choose a partition containing all endpoints of the $I_x$ and fine enough that every remaining partition interval has oscillation below $\varepsilon/(1+\alpha(b)-\alpha(a))$. The intervals meeting $D$ contribute at most $2M$ times their total $\alpha$-increment, and all other intervals contribute less than $\varepsilon$. After rescaling the two preliminary bounds, the weighted oscillation sum is arbitrarily small, so [L3] gives $f\in R(\alpha)$. [step 1.2, L3, L4]

3.1 For a general continuous BV $\alpha$, [L1] writes $\alpha=\alpha(a)+P_\alpha-N_\alpha$. Both $P_\alpha$ and $N_\alpha$ are continuous by [L2]. Step 2.1 gives integrability against each, and linearity in the integrator [L5] gives integrability against $\alpha$. [step 2.1, L1, L2, L5] ∎

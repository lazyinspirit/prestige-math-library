---
id: thm-riemann-stieltjes-continuous-composition
kind: theorem
title: "A continuous function of a Stieltjes-integrable function is Stieltjes integrable for a nondecreasing integrator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-stieltjes-darboux-criterion,
       def-riemann-stieltjes-sum-and-integral, thm-heine-cantor-r,
       cor-boundedness-theorem-r, def-continuity-real,
       def-monotone-function, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.11"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Suppose $\alpha:[a,b]\to\mathbb R$ is nondecreasing, $f$ is bounded and Riemann–Stieltjes integrable with respect to $\alpha$, and $\phi$ is continuous on a compact interval containing $f([a,b])$. Then $\phi\circ f$ is Riemann–Stieltjes integrable with respect to $\alpha$.

## Facts & Assumptions

**Given:** A nondecreasing $\alpha$, a bounded $f\in R(\alpha)$, and a continuous $\phi$ on a compact interval containing the range of $f$.

[L1] Integrability with respect to a nondecreasing integrator is equivalent to arbitrarily small weighted oscillation sums ([[thm-riemann-stieltjes-darboux-criterion]]).

[L2] The function $\phi$ is bounded and uniformly continuous on its compact domain ([[cor-boundedness-theorem-r]], [[thm-heine-cantor-r]]).

[L3] Finite sums may be split and estimated termwise ([[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 Choose $K$ with $|\phi|\le K$. Given $\varepsilon>0$, uniform continuity supplies $\eta>0$ such that $|u-v|<\eta$ implies $|\phi(u)-\phi(v)|<\varepsilon/(2(1+\alpha(b)-\alpha(a)))$. [L2]

1.2 By [L1], choose a partition $P$ for which $\sum_I\operatorname{osc}_I(f)\,\Delta_I\alpha<\eta\varepsilon/(4K+1)$. Split its intervals into those with $\operatorname{osc}_I(f)<\eta$ and the rest. The first class contributes less than $\varepsilon/2$ to the weighted oscillation sum of $\phi\circ f$. In the second class, $\operatorname{osc}_I(\phi\circ f)\le2K$, while $\eta\sum\Delta_I\alpha\le\sumoperatorname{osc}_I(f)\Delta_I\alpha$; hence it too contributes less than $\varepsilon/2$. [step 1.1, L1, L2, L3]

2.1 Thus the weighted oscillation criterion [L1] holds for $\phi\circ f$, proving $\phi\circ f\in R(\alpha)$. [step 1.2, L1] ∎

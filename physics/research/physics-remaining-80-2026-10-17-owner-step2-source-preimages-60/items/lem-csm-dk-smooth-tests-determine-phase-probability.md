---
id: lem-csm-dk-smooth-tests-determine-phase-probability
kind: lemma
title: Smooth compact tests determine phase-space probabilities
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-dk-phase-space-wasserstein-one
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
  - thm-dominated-convergence
  - thm-dynkin-pi-lambda
dependency_roles:
  def-csm-dk-phase-space-wasserstein-one: mathematical-premise
  lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-dynkin-pi-lambda: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Appendix I.A-I.B, printed pp. 16-22: phase-space W1 couplings and measure-valued empirical convergence; the test-determination lemma is proved locally from DCT and Dynkin.'
---

## Statement

Use $Z=\mathbb T^d\times\mathbb R^d$ and
$d_Z((x,v),(y,w))=d_{\mathbb T^d}(x,y)+|v-w|$ from
[[def-csm-dk-phase-space-wasserstein-one]]. Let $\mu$ and $\nu$ be Borel
probability measures on $Z$. If

$$\int_Z\varphi\,d\mu=\int_Z\varphi\,d\nu \quad\text{for every }\varphi\in C_c^\infty(Z),$$

where $C_c^\infty(Z)$ means smooth and periodic in position with compact
velocity support, then $\mu=\nu$ on all Borel subsets of $Z$.

## Facts & Assumptions

**Given:** The phase metric and Borel structure on $Z$, two Borel probability
measures agreeing on smooth compactly supported tests, and the suppliers below.

[F1] [[def-csm-dk-phase-space-wasserstein-one]]: $d_Z$ is a metric generating
the product Borel structure on $Z$.

[F2] [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]: there is a smooth
cutoff $\chi_R$ on $\mathbb R^d$ with $0\le\chi_R\le1$, equal to one on the
radius-$R$ ball and supported in the radius-$2R$ ball; for each fixed $v$,
$\chi_R(v)\to1$ as $R\to\infty$.

[F3] [[thm-dominated-convergence]]: bounded pointwise-convergent integrands
under a finite measure may be passed to the limit in their integrals.

[F4] [[thm-dynkin-pi-lambda]]: probability measures agreeing on a generating
pi-system agree on its generated sigma-algebra.

## Proof

1.1 Fix a bounded Lipschitz function $f:Z\to\mathbb R$. Convolve it in the periodic position variables and Euclidean velocity variables with a nonnegative smooth approximate identity of radius $\epsilon$; call the result $f_\epsilon$. Differentiating the compactly supported smooth kernel under the integral shows $f_\epsilon$ is smooth and bounded by $\|f\|_\infty$. Since the kernel moves position by at most $\epsilon$ and velocity by at most $\epsilon$, the sum metric gives $\|f_\epsilon-f\|_\infty\le2\epsilon\operatorname{Lip}(f)$. For each $R>0$, $\chi_R(v)f_\epsilon(x,v)$ is in $C_c^\infty(Z)$, so its integrals agree by the hypothesis. Let $R\to\infty$ and apply [F3] to each probability measure; then let $\epsilon\downarrow0$ and use uniform convergence. Thus $\mu$ and $\nu$ have equal integrals for every bounded Lipschitz $f$. [F1, F2, F3, given, construct]

2.1 If $C\subseteq Z$ is a nonempty closed set, distance to $C$ is 1-Lipschitz by the triangle inequality. Hence $h_n(z)=\max(0,1-n d_Z(z,C))$ is bounded Lipschitz and decreases pointwise to $\mathbf1_C$. Step 1.1 gives equal integrals of $h_n$, and [F3] gives $\mu(C)=\nu(C)$. The empty closed set has mass zero for both. Closed sets form a pi-system containing $Z$ and generate its Borel sigma-algebra, so [F4] implies $\mu=\nu$. [F1, F3, F4, step 1.1] ∎

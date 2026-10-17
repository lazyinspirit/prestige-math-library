---
id: lem-csm-dk-smooth-tests-determine-phase-probability
kind: lemma
title: Smooth compact tests determine phase-space probabilities
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-csm-dk-phase-space-wasserstein-one
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
  - thm-dominated-convergence
  - thm-dynkin-pi-lambda
dependency_roles:
  def-csm-dk-phase-space-wasserstein-one: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
  lem-schwartz-cutoffs-from-the-standard-smooth-step: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-dynkin-pi-lambda: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

**Given:** The phase metric and Borel structure on $Z$, two Borel probability measures agreeing on smooth compactly supported tests, and the suppliers below.

[F1] [[def-csm-dk-phase-space-wasserstein-one]]: $d_Z$ is a metric generating the product Borel structure on $Z$.

[F2] [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]: there is a smooth cutoff $\chi_R$ on $\mathbb R^d$ with $0\le\chi_R\le1$, equal to one on the radius-$R$ ball and supported in the radius-$2R$ ball; for each fixed $v$, $\chi_R(v)\to1$ as $R\to\infty$.

[F3] [[thm-dominated-convergence]]: bounded pointwise-convergent integrands under a finite measure may be passed to the limit in their integrals.

[F4] [[thm-dynkin-pi-lambda]]: probability measures agreeing on a generating pi-system agree on its generated sigma-algebra.

[F5] [[def-the-one-dimensional-torus-and-normalized-haar-integral]]: for every $d\ge1$, the normalized torus probability $m_{\mathbb T^d}$ is defined by push-forward of Lebesgue measure on $[0,1)^d$, and $\lambda_d$ is Lebesgue measure on $\mathbb R^d$; the product topology has the product Borel sigma algebra.

## Proof

1.1 Fix a bounded Lipschitz function $f:Z\to\mathbb R$. Use $\lambda_d$ and $m_{\mathbb T^d}$ from [F5]. Choose the smooth cutoff $\chi$ of [F2] and set $\eta(u)=c\chi(2u)$ on $\mathbb R^d$, where $c=(\int_{\mathbb R^d}\chi(2u)\,d\lambda_d(u))^{-1}$; its integral is positive and finite because $\chi=1$ on the unit ball and is supported in the radius-two ball. Thus $\eta$ is a nonnegative smooth probability density supported in the unit ball. For $0<\epsilon<1/4$, define $\eta_\epsilon^{\mathbb R}(v)=\epsilon^{-d}\eta(v/\epsilon)$ and periodize it to $\mathbb T^d$ by $\eta_\epsilon^{\mathbb T}(x)=\sum_{n\in\mathbb Z^d}\epsilon^{-d}\eta((\widetilde x+n)/\epsilon)$, where $\widetilde x$ is any representative. The sum is locally finite and independent of the representative; the fundamental-domain formula for $m_{\mathbb T^d}$ in [F5], followed by the change of variables $u=(\widetilde x+n)/\epsilon$, gives integral one, and its support satisfies $d_{\mathbb T^d}(x,0)\le\epsilon$. Set $f_\epsilon(x,v)=\int_{\mathbb T^d}\int_{\mathbb R^d}\eta_\epsilon^{\mathbb T}(x-y)\eta_\epsilon^{\mathbb R}(v-w)f(y,w)\,d\lambda_d(w)\,dm_{\mathbb T^d}(y)$. Differentiating the compactly supported smooth kernels under the integral shows that $f_\epsilon$ is smooth, and their nonnegativity and unit integrals give $\|f_\epsilon\|_\infty\le\|f\|_\infty$. On their support, $d_{\mathbb T^d}(x,y)\le\epsilon$ and $|v-w|\le\epsilon$, so $\|f_\epsilon-f\|_\infty\le2\epsilon\operatorname{Lip}(f)$. For each $R>0$, $\chi_R(v)f_\epsilon(x,v)$ is in $C_c^\infty(Z)$, so its integrals agree by the hypothesis. Let $R\to\infty$ and apply [F3] to each probability measure; then let $\epsilon\downarrow0$ and use uniform convergence. Thus $\mu$ and $\nu$ have equal integrals for every bounded Lipschitz $f$. [F1, F2, F3, F5, given, construct]

2.1 If $C\subseteq Z$ is a nonempty closed set, distance to $C$ is 1-Lipschitz by the triangle inequality. Hence $h_n(z)=\max(0,1-n d_Z(z,C))$ is bounded Lipschitz and decreases pointwise to $\mathbf1_C$. Step 1.1 gives equal integrals of $h_n$, and [F3] gives $\mu(C)=\nu(C)$. The empty closed set has mass zero for both. Let $\mathcal D:=\{E\in\mathcal B(Z):\mu(E)=\nu(E)\}$. Since $\mu$ and $\nu$ are probabilities, $Z\in\mathcal D$; equality of total mass makes $\mathcal D$ closed under complements in $Z$, and countable additivity makes it closed under countable disjoint unions. Thus $\mathcal D$ is a lambda-system. The $d_Z$ sum metric induces the product topology on $Z$, so its closed sets form a pi-system containing $Z$ and generating $\mathcal B(Z)$. Apply [F4] to this pi-system and $\mathcal D$ to get $\mu=\nu$. [F1, F3, F4, step 1.1] ∎

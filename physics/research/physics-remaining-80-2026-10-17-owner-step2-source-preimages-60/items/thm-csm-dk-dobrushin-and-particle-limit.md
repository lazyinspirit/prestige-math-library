---
id: thm-csm-dk-dobrushin-and-particle-limit
kind: theorem
title: Dobrushin coupling estimate and actual particle-to-Vlasov limit
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 5
deps:
  - def-csm-dk-periodic-mean-field-model
  - def-csm-dk-phase-space-wasserstein-one
  - lem-csm-dk-continuous-time-field-smooth-flow
  - thm-csm-dk-finite-n-complete-flow
  - thm-csm-dk-global-lipschitz-vlasov
  - thm-dominated-convergence
  - lem-csm-dk-smooth-tests-determine-phase-probability
  - thm-gronwall-integral-inequality
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  def-csm-dk-phase-space-wasserstein-one: mathematical-premise
  lem-csm-dk-continuous-time-field-smooth-flow: mathematical-premise
  thm-csm-dk-finite-n-complete-flow: mathematical-premise
  thm-csm-dk-global-lipschitz-vlasov: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-csm-dk-smooth-tests-determine-phase-probability: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Appendix I.A, printed pp. 16-18: first-order Dobrushin coupling; the second-order periodic estimate here is derived separately.'
    - title: Pierre-Emmanuel Jabin and Zhenfu Wang, Mean Field Limit and Propagation of Chaos for Vlasov Systems with Bounded Forces (2015)
      url: https://arxiv.org/pdf/1511.03769
      locator: '§§1.1-1.2, printed pp. 3-5: weak particle and Vlasov formulations; their force and solution hypotheses differ from this smooth periodic result.'
---

## Statement

Use $Z=\mathbb T^d\times\mathbb R^d$, $d_Z$, $\mathcal P_1(Z)$ and
$\mathcal W_1$ from [[def-csm-dk-phase-space-wasserstein-one]], and the odd
smooth force $k$ with $A=\|Dk\|_\infty$ and $k(0)=0$ from
[[def-csm-dk-periodic-mean-field-model]]. If $\mu_0,\nu_0\in\mathcal P_1(Z)$,
let $\mu_s,\nu_s$ be their global characteristic evolutions from
[[thm-csm-dk-global-lipschitz-vlasov]]. Then for every $s\in\mathbb R$,

$$\mathcal W_1(\mu_s,\nu_s)\le e^{(1+2A)|s|}\mathcal W_1(\mu_0,\nu_0).$$

For any finite-N initial points $Z_1^0,\ldots,Z_N^0\in Z$, let $Z_i(s)$ be
their complete trajectory under [[thm-csm-dk-finite-n-complete-flow]], and put
$\mu_N(s)=N^{-1}\sum_{i=1}^N\delta_{Z_i(s)}$. If $\mu_s$ is the characteristic
evolution from any $\mu_0\in\mathcal P_1(Z)$, then

$$\mathcal W_1(\mu_N(s),\mu_s)\le e^{(1+2A)|s|}\mathcal W_1(\mu_N(0),\mu_0).$$

Finally, a narrowly continuous curve (meaning that $s\mapsto\int g\,d\sigma_s$
is continuous for every bounded continuous $g$) $\sigma_s\in\mathcal P_1(Z)$ with
locally bounded first velocity moments that satisfies the weak Vlasov identity
in [[thm-csm-dk-global-lipschitz-vlasov]] is the characteristic evolution from
its initial law. Thus this weak-solution class is unique. The estimate is for
the periodic second-order phase metric above; it is not Golse's first-order
estimate and does not use a collision or Boltzmann-Grad scaling.

## Facts & Assumptions

**Given:** The smooth periodic $N^{-1}$ model, its complete finite-particle flow,
the global characteristic evolution for every first-moment probability, the
phase-space metric and coupling cost, and the stated weak-solution class.

[F1] [[def-csm-dk-periodic-mean-field-model]]: $k$ is smooth, periodic,
bounded and globally $A$-Lipschitz, is odd, and satisfies $k(0)=0$.

[F2] [[def-csm-dk-phase-space-wasserstein-one]]: $d_Z=d_{\mathbb T^d}+|v-w|$,
$\mathcal P_1(Z)$ consists of probabilities with finite first velocity moment,
and $\mathcal W_1$ is the infimum of the $d_Z$ cost over all couplings; no
minimizer is assumed.

[F3] [[thm-csm-dk-finite-n-complete-flow]]: the finite-N flow is complete,
unique and permutation-equivariant and its particle acceleration is the
displayed $N^{-1}$ sum.

[F4] [[thm-csm-dk-global-lipschitz-vlasov]]: every first-moment probability has
a unique global characteristic evolution, with acceleration equal to the force
integrated against its current law, and it satisfies the stated weak identity.

[F5] [[lem-csm-dk-continuous-time-field-smooth-flow]]: for a force continuous in
time, smooth in state with bounded state derivatives and bounded magnitude,
the second-order characteristic system has a complete flow on finite time
intervals, smooth in initial state with bounded finite-time state derivatives.

[F6] [[def-product-measure-on-sigma-finite-spaces]],
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] and
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: finite Borel measures
have their product measure, and nonnegative or integrable product integrals
may be evaluated as iterated integrals.

[F7] [[thm-dominated-convergence]]: pointwise convergence under an integrable
majorant permits passage to the limit in the integral.

[F8] [[lem-csm-dk-smooth-tests-determine-phase-probability]]: equality of
integrals over $C_c^\infty(Z)$ tests identifies Borel probability measures.

[F9] [[thm-gronwall-integral-inequality]]: an absolutely continuous
nonnegative function satisfying $D(s)\le D(0)+C\int_0^sD(r)\,dr$ obeys
$D(s)\le e^{Cs}D(0)$ for $s\ge0$.

## Proof

1.1 Fix a coupling $\pi_0$ of $\mu_0$ and $\nu_0$. Write the two characteristics as $(X_s,V_s)$ and $(Y_s,W_s)$, and push $\pi_0$ forward by their product flow to obtain $\pi_s$. Define $D_x(s)=\int d_{\mathbb T^d}(X_s,Y_s)\,d\pi_0$, $D_v(s)=\int|V_s-W_s|\,d\pi_0$, and $D=D_x+D_v$. The torus distance along absolutely continuous curves has upper derivative at most $|V_s-W_s|$. Writing both accelerations as integrals against the same $\pi_0$, the force difference is bounded by $A(d_{\mathbb T^d}(X_s,Y_s)+D_x(s))$. On every bounded time slab the velocity difference is bounded by its integrable initial difference plus $2\|k\|_\infty |s|$, and the acceleration difference is at most $2\|k\|_\infty$. Integrate the pathwise distance inequalities in time and against $\pi_0$; Tonelli [F6] justifies the order of integration and gives $D(s)\le D(0)+\int_0^s(D_v(r)+2A D_x(r))\,dr\le D(0)+(1+2A)\int_0^sD(r)\,dr$. Gronwall [F9] gives $D(s)\le e^{(1+2A)s}D(0)$. For negative time, the transformation $R(x,v)=(x,-v)$ sends a solution run backward to a forward solution starting from $R_\#\mu_0$ (and likewise for $\nu_0$). Explicitly, if the original characteristic starts at $(x,v)$ with law $\mu_0$, set $\widetilde X_r=X_{-r}(x,v)$ and $\widetilde V_r=-V_{-r}(x,v)$; the reversed initial state is $(x,-v)$. Then $\dot{\widetilde X}=\widetilde V$ and $\dot{\widetilde V}=F_{\mu_{-r}}(\widetilde X)=F_{R_\#\mu_{-r}}(\widetilde X)$, because the force depends only on position. Thus $R_\#\mu_{-r}$ is a forward solution starting at $R_\#\mu_0$. Since $R$ preserves $d_Z$, the positive-time estimate for these reversed solutions proves the estimate with $|s|$. [F1, F4, F6, F9, given, construct]

1.2 Let $\sigma_s$ be a weak solution in the Statement and set $F_s(x)=\int k(x-y)\,d\sigma_s(y,w)$. Narrow continuity and boundedness of $k$ make $F_s(x)$ continuous in $(s,x)$; every state derivative is bounded by the corresponding bound on $k$. By [F5] the field $(v,F_s(x))$ has a complete state flow on every bounded time interval and bounded state derivatives of that flow there. For fixed terminal $t$ and $\psi\in C_c^\infty(Z)$, compose $\psi$ with the characteristic map from time $s$ to $t$. Bounded acceleration makes the preimage of its compact velocity support remain in a bounded velocity set on the finite slab, so the resulting time-dependent test $\phi(s,z)$, its first state derivatives, and its time derivative are bounded. It satisfies $\partial_s\phi+v\cdot\nabla_x\phi+F_s\cdot\nabla_v\phi=0$. The weak identity makes $\int\phi(s,z)\,d\sigma_s(z)$ constant, hence $\int\psi\,d\sigma_t=\int\psi(S_{t,0}(z))\,d\sigma_0(z)$. This is equality on every smooth compactly supported test, so the phase-space measure lemma [F8] gives $\sigma_t=(S_{t,0})_\#\sigma_0$.[F5, F7, F8, given, construct]

2.1 The measure $\pi_s$ is a coupling of $\mu_s$ and $\nu_s$, so [F2] gives $\mathcal W_1(\mu_s,\nu_s)\le D(s)$. The estimate in step 1.1 holds for every coupling $\pi_0$; taking the infimum of its right side gives the first claimed inequality without assuming an optimal coupling exists. [F2, step 1.1]

3.1 For the finite particle trajectory, the empirical law satisfies $N^{-1}\sum_j k(X_i-X_j)=N^{-1}\sum_{j\ne i}k(X_i-X_j)$ because $k(0)=0$. Thus each atom of $\mu_N(s)$ follows the characteristic equation whose field is generated by $\mu_N(s)$ itself. The initial empirical law is in $\mathcal P_1(Z)$, and uniqueness of the global characteristic evolution in [F4] identifies $\mu_N(s)$ with that evolution from $\mu_N(0)$. Applying the coupling estimate from the preceding steps to initial laws $\mu_N(0)$ and $\mu_0$ gives the particle estimate. [F1, F3, F4, step 2.1]

4.1 By step 1.2 any two weak solutions with the same initial law are the characteristic evolutions of that law. Step 2.1 gives zero $\mathcal W_1$ between them at each time; alternatively their representation in step 1.2 already identifies both with the same push-forward. This proves uniqueness in the stated weak class. [F4, step 2.1, step 1.2] ∎

## Remarks
Golse's cited Appendix I.A treats a first-order characteristic equation and
gets exponent $2\operatorname{Lip}(k)t$. The additional $1$ here comes from
the position component of the second-order phase metric; the force comparison
contributes $2A$. The empirical law is an exact characteristic solution only
because the adopted force has $k(0)=0$ and includes the self term as zero.


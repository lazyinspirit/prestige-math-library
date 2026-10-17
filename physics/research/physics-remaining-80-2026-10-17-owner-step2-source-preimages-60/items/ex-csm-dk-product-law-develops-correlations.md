---
id: ex-csm-dk-product-law-develops-correlations
kind: example
title: Finite pair dynamics immediately creates correlations
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-csm-dk-periodic-mean-field-model
  - thm-csm-dk-exact-bbgky
  - def-countable-choice
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  thm-csm-dk-exact-bbgky: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Sec. 1.2.1, printed pp. 6-7, and Part I, printed pp. 12-15: finite-particle Liouville equation and exact interacting dynamics.'
---

## Statement

Use the finite-N model and units of
[[def-csm-dk-periodic-mean-field-model]]. Let $N=2$, $d\ge1$, mass $m>0$ in
kilograms, side length $L>0$ in metres, and choose a smooth, even, nonconstant
periodic potential $W\in C^\infty(\mathbb T_L^d)$ in joules with force
$K=-\nabla W$ in newtons. Let $\sigma_p>0$ in kilogram-metres per second and
$g_{\sigma_p}(p)=(2\pi\sigma_p^2)^{-d/2}
\exp(-|p|^2/(2\sigma_p^2))$. The normalized initial density, relative to
$dq_1dq_2dp_1dp_2$, is

$$F_2^0(q_1,q_2,p_1,p_2)=L^{-2d}g_{\sigma_p}(p_1)g_{\sigma_p}(p_2).$$

It is a product law with uniform independent positions and centered Gaussian
independent momenta. Under the exact smooth periodic finite-particle flow,
the one-particle marginal has $\partial_t f_1(0)=0$, while

$$\partial_tF_2(0)=\frac{1}{2\sigma_p^2} K(q_1-q_2)\cdot(p_1-p_2)F_2^0,$$

which is nonzero on a nonempty open subset of phase space. Thus the evolved
two-particle law fails to remain a product for every sufficiently small
nonzero time. No factorization or chaos assumption is made at positive time.

## Facts & Assumptions

**Given:** The smooth even periodic $N^{-1}$ pair model, $N=2$, the displayed
normalized product density, and countable choice for the completed-product
hierarchy input.

[F1] [[def-csm-dk-periodic-mean-field-model]]: positions lie in
$\mathbb T_L^d$, momenta in $\mathbb R^d$, and the pair force is the odd
periodic field $K=-\nabla W$ in the stated $N^{-1}$ model.

[F2] [[thm-csm-dk-exact-bbgky]]: the exact normalized hierarchy follows from
the finite-$N$ Liouville equation under symmetry, smoothness, rapid tails and
countable choice.

[A1] [[def-countable-choice]]: assume countable choice as required by the
completed-product integration input in [F2].

## Proof

1.1 The Gaussian integrates to one on $\mathbb R^d$, and normalized Lebesgue measure on $\mathbb T_L^d$ has density $L^{-d}$. Hence $F_2^0$ integrates to one. It is symmetric and smooth; every momentum derivative is a polynomial times a Gaussian, so it has all rapid-tail bounds required by [F2]. Its one-particle marginal is $f_1(0,q,p)=L^{-d}g_{\sigma_p}(p)$. [F1, F2, A1, given, algebra]

2.1 Use the $k=1,N=2$ case of [F2]: $\partial_tf_1+\frac{p_1}{m}\cdot\nabla_{q_1}f_1 +\frac12\nabla_{p_1}\cdot\int K(q_1-q_2)F_2(t,z_1,z_2)\,dz_2=0.$ At $t=0$, the streaming derivative vanishes because $f_1(0)$ is independent of $q_1$. Also $\int_{\mathbb T_L^d}K(q_1-q_2)L^{-d}\,dq_2=0$: each component is the integral of a periodic derivative of $W$ over one period. Thus the force average in the marginal equation is identically zero before its momentum divergence, and $\partial_tf_1(0)=0$. [F1, F2, A1, step 1.1, algebra]

2.2 The $N=2$ joint Liouville equation in [F2] has interaction coefficient $1/2$. The initial position derivatives vanish, and $\nabla_{p_i}g_{\sigma_p}(p_i)=-(p_i/\sigma_p^2)g_{\sigma_p}(p_i)$. Consequently $\partial_tF_2(0)=-\frac12K(q_1-q_2)\cdot (\nabla_{p_1}-\nabla_{p_2})F_2^0 =\frac{1}{2\sigma_p^2}K(q_1-q_2)\cdot(p_1-p_2)F_2^0.$ Because $W$ is nonconstant, its gradient is nonzero at some point; continuity gives an open set of differences where $K\ne0$. For each such difference, the condition $K\cdot(p_1-p_2)\ne0$ holds on a nonempty open momentum set, and $F_2^0$ is strictly positive there. Hence the joint derivative is nonzero on a nonempty open set. [F1, F2, step 1.1, algebra]

3.1 If the evolved joint density remained the product of its two one-particle marginals on a time interval around zero, differentiating that product at $t=0$ would give $\partial_tf_1(0)\otimes f_1(0)+f_1(0)\otimes\partial_tf_1(0)=0$ by step 2.1. Step 2.2 gives a nonzero joint derivative on an open set, a contradiction. At a point in that set, differentiability makes the difference between the joint density and the product density nonzero for all sufficiently small nonzero times. Thus correlations appear immediately from this initially factorized law. [step 2.1, step 2.2, algebra] ∎

## Remarks

This example shows that an initially factorized law need not remain
factorized under the exact finite-$N$ interaction. It does not contradict a
large-$N$ propagation-of-chaos limit, which is a separate asymptotic claim.


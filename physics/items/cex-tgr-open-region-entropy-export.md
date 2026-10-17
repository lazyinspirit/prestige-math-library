---
id: cex-tgr-open-region-entropy-export
kind: counterexample
title: "Zero divergence with decreasing slice charge in an open region"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-countable-choice
  - def-gr-smooth-lorentzian-objects
  - def-oriented-smooth-manifold-and-oriented-chart
  - thm-ftc-second-part
  - thm-jordan-fubini-by-sections
  - lem-tgr-coordinate-boxes-are-compact-jordan
  - def-tgr-spacelike-current-slab
  - lem-tgr-c1-current-density-divergence
  - thm-tgr-finite-current-production-balance
dependency_roles:
  def-countable-choice: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-jordan-fubini-by-sections: mathematical-premise
  lem-tgr-coordinate-boxes-are-compact-jordan: mathematical-premise
  def-tgr-spacelike-current-slab: mathematical-premise
  lem-tgr-c1-current-density-divergence: mathematical-premise
  thm-tgr-finite-current-production-balance: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
sources:
  references:
    - title: "Harvey Reall, Part III General Relativity, University of Cambridge lecture notes, 12 October 2022, §§8.6–8.7, printed pp. 108–110 (PDF pp. 109–111)"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Background for finite-slab current flux and the boundary term; the explicit vector field and all values in this counterexample are constructed and verified locally."
    - title: "David Tong, General Relativity, University of Cambridge Part III Mathematical Tripos lecture notes, Michaelmas Term 2019, §§3.2.4 and 4.5.5, printed pp. 110–112 and 187–189 (PDF pp. 117–119 and 194–196)"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "Background for the curved-space divergence theorem, slice charge and outward side flux. The counterexample is a new mathematical construction, not a reported physical solution or observation."
---

## Statement refuted

The following universal assertion is false: for every slab and current of
[[def-tgr-spacelike-current-slab]], pointwise nonnegative production
$\nabla_aJ^a\ge0$ implies nondecreasing slice charge
$Q_J(t_1)\ge Q_J(t_0)$ even when outward side flux is unrestricted.

## Facts & Assumptions

**Given:** Positive real parameters $L,L_2,L_3,T,a,s_0$ with $aT<1$, and a speed ratio $0<\beta<1$. Put $\gamma=(1-\beta^2)^{-1/2}$. The coordinates below are mathematical real coordinates with no assigned physical units.

[A1] Use the $\mathrm{AC}_\omega$ tangent-bundle convention recorded in [[def-countable-choice]] and [[def-gr-smooth-lorentzian-objects]]. No additional choice is used in the explicit construction.

[F1] In signature $(-,+,+,+)$, a vector is future timelike when it is timelike and has negative inner product with the supplied future timelike orientation field [[def-gr-smooth-lorentzian-objects]].

[F2] The C¹ divergence satisfies $\nabla_aJ^a=w^{-1}\partial_a(wJ^a)$ in a chart ([[lem-tgr-c1-current-density-divergence]]).

[F3] The slice charge and net outward side flux are the coordinate integrals specified in [[def-tgr-spacelike-current-slab]].

[F4] On the same finite slab, the exact balance is $Q_J(t_1)-Q_J(t_0)+\Phi_J(B)=\int_K\nabla_aJ^a\,\mathrm{vol}_g$ ([[thm-tgr-finite-current-production-balance]]).

[F5] The open and mixed-endpoint coordinate products in this example are Jordan sets, and the continuous densities on them are Riemann integrable ([[lem-tgr-coordinate-boxes-are-compact-jordan]]). Continuous product integrands may be integrated by sections ([[thm-jordan-fubini-by-sections]]), and the one-dimensional FTC evaluates the affine-coordinate integrals ([[thm-ftc-second-part]]). The same box lemma states that the boundary of each closed coordinate box has content zero.

[F6] The chosen four-form $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ supplies the orientation of the flat chart ([[def-oriented-smooth-manifold-and-oriented-chart]]).

## Counterexample


1.1 Let $M=\mathbb R^4$ with coordinates $(x^0,x^1,x^2,x^3)$, metric $\eta=\operatorname{diag}(-1,1,1,1)$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and future direction $\partial_0$. Let $\Omega=(0,L)\times(0,L_2)\times(0,L_3)$ and $K=[0,T]\times\Omega$, with compact closure $\overline K=[0,T]\times[0,L]\times[0,L_2]\times[0,L_3]$. Define the constant vector $u=(\gamma,\gamma\beta,0,0)$ and scalar $s=s_0[1+a(x^1-\beta x^0)]$. Since $0<\beta<1$ and $aT<1$, $1+a(x^1-\beta x^0)\ge1-a\beta T>0$ on $\overline K$, so $s$ is positive there and extends smoothly to a neighborhood of $\overline K$. Also $\eta(u,u)=-\gamma^2(1-\beta^2)=-1$ and $u$ is future-directed. [given, A1, F1, F6, algebra]

1.2 Let $Q$ be the closed rectangular hull of either $\Omega$ or a side-face parameter rectangle $\Omega_i$, and let $R$ be the corresponding endpoint-variant product. For a continuous density $f:Q\to\mathbb R$, the zero-extension convention in [F3] represents $\int_R f$ by a Riemann integral on $Q$. The extension differs from $f$ only on $\partial Q$, which has content zero by [F5]. If $|f|\le M$, finite box covers of $\partial Q$ with arbitrarily small total volume bound the change in the upper and lower Darboux sums by $2M$ times that volume; hence the two integrals agree as the volume tends to zero. [F3, F5, algebra]

2.1 Put $J=su$, so $J^0=\gamma s$ and $J^1=\gamma\beta s$. In this chart $w=1$, and [F2] gives $$\nabla_aJ^a=\partial_0J^0+\partial_1J^1 =\gamma(-s_0a\beta)+\gamma\beta(s_0a)=0$$ throughout the slab; the remaining components vanish. Thus local production is zero everywhere. [step 1.1, F2, algebra]

2.2 By step 1.2, [F3] and [F5], the integral of the slice density over the open rectangle equals its ordinary integral over the closed rectangular hull. Integrating the affine density gives $$Q_J(t)=\gamma s_0LL_2L_3\left(1+\frac{aL}{2}-a\beta t\right),$$ so $$Q_J(T)-Q_J(0)=-\gamma s_0a\beta TLL_2L_3<0.$$ The slice charge strictly decreases. [step 1.1, step 1.2, F3, F5, algebra]

3.1 Only the $x^1$ side faces carry flux. Their upper-minus-lower density is $J^1(t,L,x^2,x^3)-J^1(t,0,x^2,x^3)=\gamma\beta s_0aL$, independent of $t,x^2,x^3$. By step 1.2, the integral over the mixed-endpoint face parameter rectangle equals the integral over its closed rectangular hull, so the **integrated** net outward side flux is $$\Phi_J(B)=\gamma s_0a\beta TLL_2L_3>0.$$ The factor $T$ is the duration of the slab. By [F4], $Q_J(T)-Q_J(0)+\Phi_J(B)=0$, in agreement with the zero production calculation. The example refutes the unrestricted monotonicity assertion and shows that the side-flux hypothesis is essential. [step 1.2, step 2.1, step 2.2, F3, F4, F5, algebra] ∎

## Remarks

This is an explicit mathematical current example. The scalar $s$ is entropy-like only if a separate physical model assigns that meaning. The construction does not solve an Einstein–fluid system, adopt a second-law postulate, or report an observation.

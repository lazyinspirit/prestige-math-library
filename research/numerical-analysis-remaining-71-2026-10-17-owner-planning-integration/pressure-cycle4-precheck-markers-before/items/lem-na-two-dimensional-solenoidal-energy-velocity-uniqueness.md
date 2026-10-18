---
id: lem-na-two-dimensional-solenoidal-energy-velocity-uniqueness
kind: lemma
title: "Uniqueness and strong trace for two-dimensional solenoidal energy velocities"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-na-solenoidal-energy-weak-ns-velocity, def-na-stokes-zero-mean-pressure-and-velocity-spaces, def-na-evolutionary-skew-convective-form, def-pe12-gelfand-triple, lem-pe12-evolution-energy-chain-rule, thm-poincare-inequality-for-w-one-p-zero, thm-sobolev-spaces-are-banach-spaces, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, cor-hilbert-spaces-are-reflexive, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, thm-holder-inequality-for-integrals, thm-dominated-convergence, lem-na-homogeneous-dirichlet-korn-identity, lem-na-evolutionary-skew-convective-form-bound]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids"
      url: https://arxiv.org/pdf/1804.02264
      locator: "Pressure-free energy-space setting as context; the planar Newtonian uniqueness proof is supplied locally."
    - title: "Christian Clason, Introduction to Finite Element Methods"
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: "Evolution-space chain-rule background, used through the existing local chain-rule supplier."
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb R^2$ be bounded, connected, Lipschitz and polyhedral, $T>0$, $\nu>0$, $f\in L^2(0,T;L^2(D)^2)$ and $u_0\in H_\sigma$. There is at most one solenoidal energy weak velocity in the sense of [[def-na-solenoidal-energy-weak-ns-velocity]] for these data. Every such velocity belongs to $L^4(0,T;L^4(D)^2)\cap C([0,T];H_\sigma)$ and has its actual restricted derivative in $L^2(0,T;V_\sigma^*)$. The continuity is strong, its initial value is $u_0$, and its solenoidal evolution equation satisfies the Hilbert-triple energy chain rule. No full nonsolenoidal $V^*$ derivative or regular instantaneous pressure is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice and the data and spaces in the Statement.

[A1] Full Choice supplies Countable and Dependent Choice, including the approximation and countable selections below. ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]])

[F1] The velocity is in $L^\infty_tH_\sigma\cap L^2_tV_\sigma$, is weakly continuous in $H_\sigma$ with initial value $u_0$, and satisfies the fixed-solenoidal-test momentum equation. The skew convection agrees with the divergence-free convective form, and its energy pairing cancels by the proved skew-convection supplier. The strain identity polarizes to $2(\varepsilon(u),\varepsilon(v))=(\nabla u,\nabla v)+(\operatorname{div}u,\operatorname{div}v)$; for solenoidal inputs the Newtonian viscosity is therefore $\nu(\nabla u,\nabla v)$. ([[def-na-solenoidal-energy-weak-ns-velocity]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[def-na-evolutionary-skew-convective-form]], [[lem-na-evolutionary-skew-convective-form-bound]], [[lem-na-homogeneous-dirichlet-korn-identity]])

[F2] $L^2$ is Hilbert, $H^1$ is complete, the zero-boundary gradient norm is equivalent by Poincare, and Hilbert spaces are reflexive. Rational-box step functions give separability of scalar $L^2$. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-sobolev-spaces-are-banach-spaces]], [[thm-poincare-inequality-for-w-one-p-zero]], [[cor-hilbert-spaces-are-reflexive]], [[thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn]])

[F3] A separable reflexive energy space continuously and densely embedded in its Hilbert pivot forms the canonical evolution triple, and its $L^2_tV$ functions with $L^2_tV^*$ derivative are strongly continuous in the pivot and satisfy the energy chain rule. ([[def-pe12-gelfand-triple]], [[lem-pe12-evolution-energy-chain-rule]])

[F4] Holder and dominated convergence apply. In particular, for a nonnegative $B\in L^1(0,T)$ the integrable majorant $B$ gives $\int_{\{B>K\}}B\to0$ as $K\to\infty$. ([[thm-holder-inequality-for-integrals]], [[thm-dominated-convergence]])

## Proof

1.1 For scalar $z\in C_c^\infty(\mathbb R^2)$ the coordinate fundamental theorem gives $|z(x,y)|^2\le2\int_{\mathbb R}|z z_x|(s,y)\,ds=:A(y)$ and $|z(x,y)|^2\le2\int_{\mathbb R}|z z_y|(x,s)\,ds=:B(x)$. Thus $|z|^4\le A(y)B(x)$, and integration and Holder give $\|z\|_4^4\le4\|z\|_2^2\|z_x\|_2\|z_y\|_2\le2\|z\|_2^2\|\nabla z\|_2^2$. Apply this to components of a vector and to differences of compact smooth approximants defining $H^1_0(D)^2$, extended by zero. The inequality makes the approximants Cauchy in $L^4$, so their limit is the same $L^2$ function; consequently $\|z\|_4^2\le C\|z\|_2\|\nabla z\|_2$ on $H^1_0(D)^2$. Each energy velocity therefore belongs to $L^4_tL^4_x$. [F1, F4, given, algebra]

1.2 With its $H^1$ inner product the complete space $H^1(D)^2$ is Hilbert. Its closed subspace $H^1_0(D)^2$ is Hilbert, as is $V_\sigma$, the kernel of bounded divergence therein. Poincare gives its equivalent gradient norm and [F2] gives reflexivity. Separability follows by mapping $H^1(D)^2$ isometrically, in its full norm, into the finite product of scalar $L^2$ spaces listing components and first derivatives. This product is separable by [F2]; every metric subspace of a separable metric space is separable: restrict a countable ambient base and, using Countable Choice, select a point from each nonempty restricted basic set. This proves separability of $V_\sigma$. The closure $H_\sigma$ is Hilbert as a closed $L^2$ subspace. Its inclusion of $V_\sigma$ is continuous by Poincare, injective and dense by definition. Thus the canonical pivot map $Jh(v)=(h,v)_2$ is bounded and injective and the triple has all hypotheses of [F3]. [A1, F1, F2, F3, construct, algebra]

2.1 For a solenoidal energy velocity $u$, its convection functional on $V_\sigma$ is $N(u)(v)=-\int_D(u\otimes u):\nabla v$, since the divergence and boundary terms vanish by approximation. Holder bounds its norm by $\|u\|_4^2$, which belongs to $L^2(0,T)$ by step 1.1. This is a strongly measurable dual-valued function: the map $L^4(D)^2\to V_\sigma^*$ is continuous and quadratic, and $u$ is strongly measurable in $L^4$ as a continuous image of its Bochner $V_\sigma$ representative. The viscous functional is a bounded linear image of $u\in L^2_tV_\sigma$, and the force functional is a bounded linear image of $f\in L^2_tL^2$. The fixed-test equation [F1] therefore says that the actual restricted derivative is the $L^2_tV_\sigma^*$ function $f-\nu(\nabla u,\nabla\cdot)-N(u)$. Apply [F3] to obtain a unique strong $C([0,T];H_\sigma)$ representative and its energy chain rule. This representative agrees with the given weakly continuous one (fixed dense tests identify them), and so its initial value is $u_0$. [F1, F3, F4, step 1.1, step 1.2, algebra]

3.1 For two such velocities $u,\widetilde u$ with the same data let $z=u-\widetilde u$. Their difference has restricted derivative in $L^2_tV_\sigma^*$ by step 2.1, so [F3] permits pairing its equation with $z$ and differentiating its squared pivot norm. The trilinear cancellation leaves, with either velocity named $u$,
$$\tfrac12\frac{d}{dt}\|z\|_2^2+\nu\|\nabla z\|_2^2\le\left|\int_D(z\cdot\nabla)u\cdot z\right|\le C\|\nabla u\|_2\|z\|_2\|\nabla z\|_2\le\tfrac\nu2\|\nabla z\|_2^2+C\nu^{-1}\|\nabla u\|_2^2\|z\|_2^2.$$
The first estimate uses the planar bound in step 1.1; the final one is $ab\le\nu a^2/2+C\nu^{-1}b^2$. The initial difference is zero by step 2.1. Put $Y(t)=\|z(t)\|_2^2$ and $B(t)=C\nu^{-1}\|\nabla u(t)\|_2^2$, increasing the constant to absorb the factor $2$. The chain rule makes $Y$ absolutely continuous and gives $Y(t)\le Y(s)+\int_s^t B(r)Y(r)\,dr$, with $B\ge0$ in $L^1$. Choose $K>0$ with $\int_{\{B>K\}}B<1/4$ by [F4], and choose $\delta>0$ with $K\delta<1/4$. Partition $[0,T]$ into finitely many intervals of length at most $\delta$; each has $\int_I B<1/2$. On the first interval $Y(0)=0$ and continuity gives $\sup_IY\le(\sup_IY)\int_I B\le\tfrac12\sup_IY$, hence $Y=0$. Inductively the same argument applies on every next interval since its initial value is zero. Thus $z=0$ throughout $[0,T]$. This proves uniqueness and, together with the earlier steps, all stated regularity and trace assertions. [F1, F3, F4, step 1.1, step 2.1, algebra] ∎

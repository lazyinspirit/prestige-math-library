---
title: Multiplier boundary term and hidden normal trace
status: published
research_item: prop-se-boundary-hidden-regularity
dependency_level: 5
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 5: ` §1.4(i), boundary term and parenthesis `

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus)
- [lem-se-localized-boundary-normal-trace](item-lem-se-localized-boundary-normal-trace)
- [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization)
- [prop-se-star-shaped-sign](item-prop-se-star-shaped-sign)
- [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization)
- [math:thm-sobolev-gauss-green-formula-on-c-one-domains](https://alphabetamath.cc/item/thm-sobolev-gauss-green-formula-on-c-one-domains)
- [math:thm-sharp-trace-theorem-for-w-one-p](https://alphabetamath.cc/item/thm-sharp-trace-theorem-for-w-one-p)
- [math:thm-smooth-up-to-the-boundary-density-on-smooth-domains](https://alphabetamath.cc/item/thm-smooth-up-to-the-boundary-density-on-smooth-domains)
- [math:def-bounded-c-one-domain-boundary-charts-and-outward-normal](https://alphabetamath.cc/item/def-bounded-c-one-domain-boundary-charts-and-outward-normal)
- [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)


## Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^n\setminus\Theta$, $n\ge2$, be the smooth connected exterior of a nonempty compact obstacle, let $\nu$ be the outward normal of $\Omega$, and let $T>0$. For $v_0\in H^1_0(\Omega)$ let $v(t)=e^{it\Delta_D}v_0$ be the homogeneous Dirichlet evolution. Its normal trace is well defined by energy-norm approximation and satisfies
$$\|\partial_\nu v\|_{L^2((0,T)\times\partial\Omega)}\le C_{\Omega,T}\|v_0\|_{H^1(\Omega)}.$$
A real smooth compactly supported multiplier $Q$ equal to $\nu$ on the boundary proves this estimate, without star-shapedness or non-trapping.

For a real compactly supported smooth vector field $q$, put $M_q(t)=\operatorname{Im}\int_\Omega\overline v\,q\cdot\nabla v\,dx$. The multiplier identity has the boundary term
$$\frac12\int_0^T\!\int_{\partial\Omega}(q\cdot\nu)|\partial_\nu v|^2\,dS\,dt.$$
In particular the radial choice $q(x)=x$ has this boundary term; for energy data one can use a fixed compactly supported field equal to $x$ near the compact boundary, with the same boundary term. If the solid obstacle is star-shaped with respect to $x_0$ in the segment sense of [prop-se-star-shaped-sign](item-prop-se-star-shaped-sign), the translated radial field $x-x_0$ has $(x-x_0)\cdot\nu\le0$ on the obstacle boundary (and positive sign on the enclosing outer sphere of the truncated domain). This is the star-shaped sign condition in the usual radial multiplier comparison. The geometric sign has to be handled separately from the existence of the $L^2$ normal trace.

## Facts & Assumptions

**Given:** The hypotheses and conventions of the Statement.

[F1] Assume the Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice); in particular its countable and dependent instances are available.

[F2] [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) fixes the nonpositive self-adjoint $\Delta_D$ and $A=I-\Delta_D$ for this exterior. [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation) defines the complex $H^1$ norm and closure $H^1_0$; [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) fixes time continuity and spacetime $L^2$ conventions.

[F3] [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus) is the mathematical flow calculus for a self-adjoint generator: its spectral group agrees with $e^{it\Delta_D}$, preserves spectral domains and commutes with bounded spectral cutoffs under Choice. Its physical interpretation is not used.

[F4] [lem-se-localized-boundary-normal-trace](item-lem-se-localized-boundary-normal-trace) supplies the unique energy-space normal trace, its bound, and a compact real field $Q=\nu$ on the boundary whose multiplier identity yields that bound. Its stated multiplier interface concerns this particular $Q$. The identity for arbitrary $q$ is proved locally below, rather than imported from that interface.

[F5] [math:lem-test-function-cutoffs-and-euclidean-localization](https://alphabetamath.cc/item/lem-test-function-cutoffs-and-euclidean-localization) gives a real smooth compactly supported $\rho=1$ near the compact obstacle, so $q=\rho x$ or $q=\rho(x-x_0)$ has precisely the respective radial boundary weight.

[F6] [prop-se-star-shaped-sign](item-prop-se-star-shaped-sign) proves the segment-convention signs on the truncated exterior: for $x_0\in\Theta$ and $q=x-x_0$, $q\cdot\nu\le0$ on $\partial\Theta$ with the exterior outward normal, and $q\cdot\nu>0$ on the enclosing sphere. Use only these stated geometric hypotheses.

[F7] On a bounded smooth truncation, [math:thm-sobolev-gauss-green-formula-on-c-one-domains](https://alphabetamath.cc/item/thm-sobolev-gauss-green-formula-on-c-one-domains) applies with $p=p'=2$ to complex $H^1$ factors. [math:thm-sharp-trace-theorem-for-w-one-p](https://alphabetamath.cc/item/thm-sharp-trace-theorem-for-w-one-p) gives bounded traces of those factors, in particular in boundary $L^2$. [Ambient smooth restrictions are dense on bounded $C^k$ domains](https://alphabetamath.cc/item/thm-smooth-up-to-the-boundary-density-on-smooth-domains) applies with $k=p=2$ to approximate complex $H^2$ functions by ambient smooth restrictions. The graph charts and outward normal are those of [math:def-bounded-c-one-domain-boundary-charts-and-outward-normal](https://alphabetamath.cc/item/def-bounded-c-one-domain-boundary-charts-and-outward-normal). All these bounded-domain hypotheses will be checked on the truncation; none of these suppliers is applied directly to the unbounded exterior.

[F8] [lem-se-exterior-dirichlet-realization](item-lem-se-exterior-dirichlet-realization) gives $D(A)=H^2(\Omega)\cap H^1_0(\Omega)$, equivalence of its graph norm with $H^2$, and $D(A^{1/2})=H^1_0(\Omega)$ with $\|A^{1/2}u\|_2=\|u\|_{H^1}$. Use the spectral measure and calculus already defined in [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian). [math:thm-dominated-convergence](https://alphabetamath.cc/item/thm-dominated-convergence) applies to the scalar spectral measure with integrable majorant $\lambda$ for energy data and proves the cutoff convergence used below.

[F9] [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals) at exponents $2,2$, applied to the real nonnegative moduli of complex factors, bounds all products used below in volume and boundary measure. Bounded smooth coefficients may be pulled out of these bounds. This also gives continuity of quadratic integral expressions under the indicated $L^2$ convergences.

## Proof

**Given:** The hypotheses and data in the Statement.

**Goal:** Establish every assertion of the Statement with the stated spaces and bounds.

1.1 The Dirichlet realization is self-adjoint on the nonzero complex $L^2(\Omega)$ space. The mathematical flow supplier, used with generator $\Delta_D$, gives the same spectral evolution $v=e^{it\Delta_D}v_0$ as in the localized trace theorem. The hypotheses of its self-adjoint calculus hold under the assumed Choice axiom, which also supplies the choice assumptions of the Sobolev and bounded-domain suppliers. [given, F1, F2, F3, F4]

2.1 Write $E_A$ for the spectral measure of $A$, set $v_{0,N}=E_A([1,N])v_0$, and put $w_N(t)=e^{it\Delta_D}v_{0,N}$. The spectral support of $A$ is in $[1,\infty)$. The realization's form identity gives $\|v_0-v_{0,N}\|_{H^1}^2=\int_{(N,\infty)}\lambda\,d(E_A)_{v_0}(\lambda)\to0$ by dominated convergence. Multiplication by the spectral exponential has modulus one, so $w_N\to v$ in $C([0,T];H^1)$ and $\|w_N(t)\|_{H^1}=\|v_{0,N}\|_{H^1}$. Each $w_N$ has bounded spectral support and hence lies in every integer power domain of $A$. The flow derivative is $\partial_t w_N=i\Delta_Dw_N$; commuting this identity with $A$ shows differentiability also in its graph norm, since all relevant powers of $A$ are bounded on that spectral subspace. The graph norm equivalence therefore gives $w_N\in C^1([0,T];H^2(\Omega))$. Each $w_N$ and its time derivative belong to $H^1_0(\Omega)$. [F2, F3, F8, step 1.1]

3.1 Apply the localized normal-trace theorem to $v$. Its unique trace is the spacetime $L^2$ limit of the normal traces of these spectral approximants, and it gives the displayed estimate. Its compact field $Q=\nu$ has $Q\cdot\nu=1$ on the boundary; the theorem controls its remaining multiplier terms by the energy norm. This proves trace existence and the bound under smooth compact-boundary geometry, independently of a radial sign condition. [F2, F4, step 1.1, step 2.1]

3.2 Fix an arbitrary real smooth compactly supported field $q$. Choose $R$ so large that both $\Theta$ and $\operatorname{supp}q$ lie strictly inside $B_R(0)$. Then $D=B_R(0)\setminus\Theta$ is bounded with smooth boundary, whose inner normal is the exterior normal $\nu$; $q$ vanishes near its artificial outer sphere. For $w=w_N$, the restriction to $D$ is $H^2$. Its trace on $\partial\Omega$ is zero: approximate $w\in H^1_0(\Omega)$ in $H^1$ by interior test functions and use local trace continuity. Moreover $T\nabla w=\nu\,\partial_\nu w$ there. To justify the latter equality, approximate $w|_D$ in $H^2(D)$ by ambient smooth restrictions. In a boundary graph chart $x=(y,h(y))$, their boundary derivatives satisfy $\partial_{y_a}(w|_{\partial D})=T(\partial_a w)+(\partial_a h)T(\partial_n w)$ before taking limits. Both boundary restrictions and first-derivative traces converge in local boundary $L^2$ by the trace theorem, so the equality passes to distributions in $y$. The limiting restriction is zero on the inner boundary; thus every tangential component of $T\nabla w$ vanishes. Resolving the vector into its normal and tangential components gives the asserted equality, with $\partial_\nu w=\nu\cdot T\nabla w$. All normal and product boundary terms below are consequently $L^2$ and $L^1$ traces, respectively. [given, F2, F7, F9, step 2.1]

4.1 For this regular solution put $d=\operatorname{div}q$ and $M_q[w](t)=\operatorname{Im}\int_D\overline w\,q\cdot\nabla w$. Differentiate using $w_t=i\Delta w$, then move $q\cdot\nabla$ off $\Delta w$ in the second term. The result is $M_q[w]'=-2\operatorname{Re}\int_D\Delta\overline w\,q\cdot\nabla w-\operatorname{Re}\int_D d\,\overline w\,\Delta w$. Indeed, the differentiated terms are $-\operatorname{Re}\int_D\Delta\overline w\,q\cdot\nabla w+\operatorname{Re}\int_D\overline w\,q\cdot\nabla\Delta w$; integration by parts changes the latter to $-\operatorname{Re}\int_D(q\cdot\nabla\overline w+d\,\overline w)\Delta w$. Its boundary contribution vanishes because $Tw=0$ on the inner boundary and $q=0$ near the outer sphere. Here $\Delta w=w_t/i\in H^2$, so this first integration by parts uses $H^1$ factors. [F7, step 2.1, step 3.2, algebra]

5.1 Define $B_q[w]=\int_{\partial\Omega}(q\cdot\nu)|\partial_\nu w|^2$, $I_q[w]=\operatorname{Re}\int_D\sum_{j,k}(\partial_jq_k)(\partial_j\overline w)(\partial_kw)$, and $J_q[w]=\operatorname{Re}\int_D\overline w\,\nabla d\cdot\nabla w$. Integrating the first term in step 4.1 once in each $j$ gives $-2\operatorname{Re}\int_D\Delta\overline w\,q\cdot\nabla w=-2B_q[w]+2I_q[w]+\int_Dq\cdot\nabla(|\nabla w|^2)$. In this formula the last integral denotes the sum of the integrable first-derivative products. Applying coordinate Gauss–Green to the $H^1$ factors $\partial_j\overline w$ and $q_k\partial_jw$, and summing real parts, makes it $B_q[w]-\int_Dd|\nabla w|^2$, since $|T\nabla w|^2=|\partial_\nu w|^2$ on the inner boundary. The second term in step 4.1 is $-\operatorname{Re}\int_Dd\,\overline w\,\Delta w=\int_Dd|\nabla w|^2+J_q[w]$, with zero boundary contribution because $Tw=0$ where $q$ or its derivatives meet the boundary. Smooth approximation proves the product expansions for the $H^2$ functions, and trace continuity and the $2,2$ product bound pass their boundary products to the limit. Combining these equalities cancels the two terms with $d|\nabla w|^2$ and proves $M_q[w]'=-B_q[w]+2I_q[w]+J_q[w]$ for arbitrary $q$. No equality $q=\nu$ was used. [F7, F9, step 3.2, step 4.1, algebra]

6.1 Integrate the locally proved identity to obtain $\tfrac12\int_0^T B_q[w_N](t)dt=\tfrac12(M_q[w_N](0)-M_q[w_N](T))+\int_0^T I_q[w_N](t)dt+\tfrac12\int_0^T J_q[w_N](t)dt$. Since $q$ vanishes outside $D$, its volume integrals are the corresponding integrals on $\Omega$. The convergence $w_N\to v$ in $C_tH^1$ passes every momentum and volume term to the limit by boundedness of $q,Dq,D^2q$ and the $2,2$ product bound. If $g_N=\partial_\nu w_N$ and $g=\partial_\nu v$, the trace theorem used in step 3.1 gives $g_N\to g$ in boundary spacetime $L^2$ and $\||g_N|^2-|g|^2\|_1\le(\|g_N\|_2+\|g\|_2)\|g_N-g\|_2\to0$. Since $q\cdot\nu$ is bounded on the compact boundary, the weighted boundary integrals converge too. This proves the energy-space identity with exactly the boundary term stated. [F2, F4, F9, step 2.1, step 3.1, step 5.1, algebra]

7.1 For the radial boundary expression take $q=\rho x$, with $\rho=1$ near $\Theta$. On $\partial\Omega$ this equals $x$, hence its boundary term is the one of the usual radial multiplier. The cutoff allows the energy identity just proved without assuming that $xv$ is globally square integrable. For a star-shaped obstacle use instead $\rho(x-x_0)$; its boundary weight agrees with the translated radial weight. The supplied geometric calculation gives the nonpositive obstacle sign and, on the bounded truncated geometry with the uncut radial field, the positive enclosing-sphere sign. The compact cutoff identity itself has zero weight on a sphere outside its support. The hidden trace estimate from the second phase used neither radial sign. This establishes the claimed distinction between the radial sign condition and existence of the trace. [F5, F6, step 3.1, step 6.1] ∎

## Source notes

The article's PDF page 5, §1.4(i), supplies attribution for the radial boundary term and the distinction between its sign and trace existence. It is not a premise of the proof. The normal-trace estimate uses the stated interface of the localized trace supplier. The arbitrary-field identity is calculated locally using the declared bounded-domain Gauss–Green, trace and density suppliers, with the spectral approximants justified by the realization and flow calculus. The radial boundary weight is localized near the compact obstacle for energy data, so no unassumed global moment is asserted. The enclosing-sphere sign refers to the uncut radial field on the truncated geometry. The Physics Library flow supplier has mathematical domain and contributes no physical premise. This repair addresses a generated-proof interface gap, not a defect established in the original article.

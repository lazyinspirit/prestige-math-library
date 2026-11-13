---
title: "Theorem 1.1: exact outer boundary controllability"
status: draft
research_item: thm-se-1-1
dependency_level: 24
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 4 and 16–17, Theorem 1.1 and its proof
---

PDF p. 4: ` Theorem 1.1; (1.7) `; PDF p. 16: ` proof begins `; PDF p. 17: ` proof concludes `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-boundary-state-space](item-def-se-boundary-state-space)
- [def-se-cubic-boundary-system](item-def-se-cubic-boundary-system)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-internal-systems](item-def-se-internal-systems)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation)
- [thm-se-1-3](item-thm-se-1-3)
- [lem-se-3-11](item-lem-se-3-11)
- [prop-se-boundary-transfer](item-prop-se-boundary-transfer)
- [prop-se-scale-identifications](item-prop-se-scale-identifications)
- [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus)
- [lem-se-collar-traces-and-partial-extension](item-lem-se-collar-traces-and-partial-extension)
- [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)
- [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)


## Statement

Assume the Axiom of Choice. Let $n\in\{2,3\}$ and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary, connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and non-trapping generalized reflected and glancing rays: each such ray leaves every compact set in finite forward time. Choose $R_0>0$ with $\Theta\subset B_{R_0}(0)$ and set $\Omega_0=B_{R_0}(0)\setminus\Theta$, $\Gamma_1=\partial B_{R_0}(0)$ and $\Gamma_2=\partial\Theta$.

Let $T>0$, $s\in\{1,2\}$ and $\lambda\in\mathbb R\setminus\{0\}$. Write $X^s(\Omega_0)=\{f\in H^s(\Omega_0):\gamma_{\Gamma_2}f=0\}$, with the inherited $H^s$ norm; $\gamma$ denotes the Sobolev value trace. Then there is $\delta>0$ such that, for every $u_0,u_1\in X^s(\Omega_0)$ with $\|u_0\|_{H^s},\|u_1\|_{H^s}\le\delta$, there are $u\in C([0,T];H^s(\Omega_0))$ and $h\in C([0,T];H^{s-1/2}(\Gamma_1))$ satisfying

$$i\partial_tu+\Delta u+\lambda|u|^2u=0\quad\text{in }\mathcal D'((0,T)\times\Omega_0),$$

with $u(0)=u_0$, $u(T)=u_1$, $\gamma_{\Gamma_1}u=h$, and $\gamma_{\Gamma_2}u=0$. The boundary equalities are Sobolev trace equalities at every time, and $C([0,T];Y)$ means norm-continuous paths in $Y$.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-boundary-state-space](item-def-se-boundary-state-space)

[def-se-cubic-boundary-system](item-def-se-cubic-boundary-system)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The geometry and non-trapping convention are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping). The state space and trace convention are those of [def-se-boundary-state-space](item-def-se-boundary-state-space), the boundary equation is that of [def-se-cubic-boundary-system](item-def-se-cubic-boundary-system), and time continuity and distributional equality have the meanings in [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces) and [def-se-foundation-distributional-equation](item-def-se-foundation-distributional-equation). The assumed choice principle is [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] Under these geometric and Choice hypotheses, [lem-se-3-11](item-lem-se-3-11) supplies a bounded linear extension $E:X^s(\Omega_0)\to H_D^s(\Omega)$ with $(Ef)|_{\Omega_0}=f$. Here [def-se-dirichlet-scale](item-def-se-dirichlet-scale) defines $H_D^s(\Omega)=D((I-\Delta_D)^{s/2})$ with its spectral norm, and [prop-se-scale-identifications](item-prop-se-scale-identifications) identifies it with $H^s(\Omega)\cap H_0^1(\Omega)$ for the present $s$, with equivalent norms.

[F3] For $R=R_0+1$, [def-se-control-cutoffs](item-def-se-control-cutoffs) supplies a smooth cutoff $\varphi$ equal to zero on $|x|\le R$, positive on $|x|>R$, and one on $|x|\ge R+1$. With this cutoff and $m=3$, [thm-se-1-3](item-thm-se-1-3) gives a positive exterior endpoint radius and an integral solution and control continuous in $H_D^s$ for every pair of exterior endpoints inside that radius. The controlled equation is specified by [def-se-internal-systems](item-def-se-internal-systems).

[F4] The integral-solution convention in [prop-se-nonlinear-mild](item-prop-se-nonlinear-mild) requires $g(v)=\lambda|v|^2v$ and $\varphi k$ to be Bochner integrable in $X=H_D^s(\Omega)$. Writing $f=i g(v)-i\varphi k$, $B$ for the generator on $X$, and $q_X(t)=\int_0^t v(r)\,dr$, it gives $q_X(t)\in D(B)$ and $v(t)=v(0)+Bq_X(t)+\int_0^t f(r)\,dr$. The group on $X$ is the consistent extension of $W(t)=e^{it\Delta_D}$ on $L^2(\Omega)$ by [prop-se-scale-flow](item-prop-se-scale-flow).

[F5] The Dirichlet realization in [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) is self-adjoint on $L^2(\Omega)$, with $D(\Delta_D)=H^2(\Omega)\cap H^1_0(\Omega)$, and its action there is the weak spatial Laplacian. Since $A=I-\Delta_D\ge I$, the spectral norm in [def-se-dirichlet-scale](item-def-se-dirichlet-scale) gives the bounded inclusion $J:X\to L^2(\Omega)$: $\|Jw\|_2\le\|w\|_X$. For this self-adjoint $\Delta_D$, [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus), part (a), identifies the full $L^2$ generator domain of $W$ with $D(\Delta_D)$ and the generator with $i\Delta_D$. That supplier has domain mathematics, assumes AC and Countable Choice, and uses no physical premise; both choice hypotheses follow from the assumed AC.

[F6] On the smooth bounded truncated domain $\Omega_0$, [lem-se-collar-traces-and-partial-extension](item-lem-se-collar-traces-and-partial-extension) supplies the bounded trace $H^1(\Omega_0)\to H^{1/2}(\Gamma_2)$, agreeing with classical restriction on smooth functions. Its traces at orders $1\le s\le2$ agree in $L^2(\Gamma_2)$ with this first-order trace and are local, so restriction from an exterior collar gives the same obstacle trace.

[F7] [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration) applies to the bounded inclusion $J$ and to bounded spatial test functionals on $L^2$. [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals), applied to absolute values with exponents $2,2$, gives $\|a\|_{L^1(K)}\le |K|^{1/2}\|a\|_2$ on every spatial set $K$ of finite measure. [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces) permits exchanging the integrals of absolutely integrable complex functions on the Lebesgue time and space products used below. The time interval is finite, spatial test supports are compact, and these measures are sigma-finite.

[F8] [prop-se-boundary-transfer](item-prop-se-boundary-transfer) transfers an exterior solution satisfying the distributional equation, local integrability and zero obstacle trace, together with its endpoint values and outer trace, to the stated boundary problem when the cutoff vanishes on $\Omega_0$.

## Proof

**Given:** The hypotheses and endpoint data in the Statement.

**Goal:** Construct a boundary control and a solution with the prescribed endpoints, equation and traces.

1.1 Choose $R=R_0+1$ and the cutoff in F3. Let $\delta_1>0$ be the radius supplied there, and let $E$ be the extension in F2. The operator norm $\|E\|$ is positive: a nonzero smooth function compactly supported in $\Omega_0$ belongs to $X^s(\Omega_0)$ and is recovered by restriction after applying $E$. Set $\delta=\delta_1/\|E\|$. Then $\|Eu_j\|_{H_D^s}\le\delta_1$ for $j=0,1$. [F2, F3, given]

2.1 Apply F3 to the extended endpoints. It supplies $k,v\in C([0,T];X)$ with $v(0)=Eu_0$ and $v(T)=Eu_1$, where $X=H_D^s(\Omega)$, and the integral-solution identity in F4. Retain its notation $f=i\lambda|v|^2v-i\varphi k$ and $q_X(t)=\int_0^t v(r)\,dr$. In particular $g(v),\varphi k,f\in L^1(0,T;X)$. By the inclusion $J$ and the local estimate in F7, their $L^2$ realizations, and also the continuous $L^2$ paths $v$ and $k$, have jointly measurable, locally integrable space-time representatives. For example, for compact $K\subset\Omega$, $\int_0^T\int_K|Jf(t,x)|\,dx\,dt\le |K|^{1/2}\int_0^T\|f(t)\|_X\,dt$. Jointly measurable local representatives can be obtained from Bochner simple approximations, which converge in local space-time $L^1$ by the same estimate. [F3, F4, F5, F7, step 1.1]

3.1 Fix $t$ and put $q(t)=Jq_X(t)=\int_0^t Jv(r)\,dr$, where the equality is F7. Since $q_X(t)\in D(B)$, its right group difference quotient converges in $X$ to $Bq_X(t)$. Applying $J$ and the consistency in F4 gives convergence of the same quotient in $L^2$ to $JBq_X(t)$. For a unitary group a right limit is also the left limit: for $h>0$, $(W(-h)q-q)/(-h)=W(-h)(W(h)q-q)/h$, and strong continuity preserves the limit. Thus the full generator identification in F5 gives $q(t)\in D(\Delta_D)$ and $JBq_X(t)=i\Delta_Dq(t)$. Applying $J$ to the integral identity therefore yields $Jv(t)=Jv(0)+i\Delta_Dq(t)+p(t)$ in $L^2$, where $p(t)=\int_0^t Jf(r)\,dr$. On this full domain, $\Delta_Dq(t)=\Delta_xq(t)$ in spatial distributions by F5. [F4, F5, F7, step 2.1]

3.2 Fix any $t\in[0,T]$. By F2, $v(t)\in H^1_0(\Omega)$, so there are $w_j\in C_c^\infty(\Omega)$ converging to $v(t)$ in $H^1(\Omega)$. Their restrictions converge to $v(t)|_{\Omega_0}$ in $H^1(\Omega_0)$: every whole-space $H^1$ representative of their difference from $v(t)$ on $\Omega$ is also a representative on $\Omega_0$, so restriction cannot increase the quotient norm. Each $w_j$ vanishes near $\Gamma_2$, so its classical trace there is zero. Boundedness of the first-order trace in F6 makes the $H^{1/2}(\Gamma_2)$ trace of $v(t)|_{\Omega_0}$ zero. Since $v(t)|_{\Omega_0}\in H^s(\Omega_0)$ and the order-$s$ trace agrees in $L^2$ with that first-order trace, its $H^{s-1/2}(\Gamma_2)$ trace is zero as well. Trace locality identifies this with the exterior obstacle trace. This argument applies separately at every $t$, including the endpoints, and requires no convergence of $w_j$ in $H^2$. [F2, F6, step 2.1]

4.1 The primitives in step 3.1 satisfy $\partial_tq=Jv$ and $\partial_tp=Jf$ in space-time distributions. Explicitly, for $a=Jv$ or $a=Jf$, $P_a(t)=\int_0^t a(r)\,dr$ and arbitrary $\eta\in C_c^\infty((0,T)\times\Omega;\mathbb C)$, bounded spatial test functionals and Fubini give $\int_0^T\int_\Omega P_a(t,x)\partial_t\eta(t,x)\,dx\,dt=\int_0^T\int_\Omega a(r,x)\bigl(\int_r^T\partial_t\eta(t,x)\,dt\bigr)\,dx\,dr=-\int_0^T\int_\Omega a(r,x)\eta(r,x)\,dx\,dr$. Absolute integrability follows from the estimate in step 2.1, the finite time interval, and boundedness of the test function and its derivative. This calculation uses the bilinear distribution pairing, with no conjugation. The $L^2$ identity in step 3.1 also gives $\Delta_xq=(Jv-Jv(0)-p)/i$ as a locally integrable space-time distribution. Differentiating that identity, commuting spatial and temporal distributional derivatives, and using the two primitive identities gives $\partial_tv=i\Delta_xv+f$. Multiplication by $i$ and the definition of $f$ give $i\partial_tv+\Delta_xv+\lambda|v|^2v=\varphi k$ in distributions. No assertion that $v(t)$ itself lies in $D(\Delta_D)$ is used. [F1, F5, F7, step 2.1, step 3.1]

5.1 The cutoff vanishes on $\Omega_0$, since $R>R_0$. Steps 2.1, 3.1, 3.2 and 4.1 verify local integrability, the exterior distributional equation and zero obstacle trace, so all hypotheses of the boundary-transfer proposition in F8 hold for $v,E$ and $m=3$. It gives $u=v|_{\Omega_0}$ and $h=\gamma_{\Gamma_1}v$ with the asserted path regularity, endpoint values and boundary traces, and with the unforced cubic equation in distributions on $(0,T)\times\Omega_0$. These are precisely the conditions in the Statement. [F1, F8, step 1.1, step 2.1, step 3.1, step 4.1, step 3.2] ∎

## Source notes

The frozen article is cited for attribution of Theorem 1.1 and its extension-and-restriction reduction. The proof above uses the separately supplied internal-control theorem, extension and transfer proposition; it does not use the article's boundary-control claim as a premise.

The integral-to-distribution and zero-trace bridges above are local arguments using the declared mathematical suppliers, including a Physics Library item whose actual domain is mathematics. The article citation is used only for original-theorem attribution; no prerequisite is imported from the article and no independent acceptance is claimed.

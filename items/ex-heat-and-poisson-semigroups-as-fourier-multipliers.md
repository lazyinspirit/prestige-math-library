---
id: ex-heat-and-poisson-semigroups-as-fourier-multipliers
kind: example
title: Heat and Poisson semigroups as Fourier multipliers
status: draft
origin: pipeline
deps:
  - def-translation-invariant-fourier-multiplier-on-schwartz-space
  - lem-ltwo-fourier-multiplier-bound
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-plancherel
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
  - def-regular-distribution-from-a-locally-integrable-function
  - thm-dominated-convergence
  - thm-exponential-addition-formula
  - def-real-exponential-function-and-e
  - lem-exponential-dominates-one-plus-x
  - cor-mean-value-theorem
  - thm-derivative-of-exponential
  - thm-chain-rule
  - prop-essential-supremum-is-attained-as-the-least-essential-bound
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-countable-choice
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis"
      url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
      locator: "§2.3, Corollary 2.11 and the Poisson-kernel discussion, printed pp. 5-6"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§2.1 Poisson transform, printed pp. 92-95, and §2.2 Fourier normalization, printed pp. 113-114"
---

## Example

Assume Countable Choice, let $n\ge1$, and use the complex $L^2$ conventions of
[[def-complex-lp-and-euclidean-test-function-conventions]]. For $t\ge0$
define the bounded continuous frequency symbols
$$m_t(\xi)=e^{-4\pi^2t|\xi|^2},\qquad p_t(\xi)=e^{-2\pi t|\xi|},\qquad \xi\in\mathbb R^n,$$
and let
$$H_t:=T_{m_t},\qquad P_t:=T_{p_t}$$
be the unique bounded extensions to $L^2(\mathbb R^n;\mathbb C)$ that
[[lem-ltwo-fourier-multiplier-bound]] supplies for the Schwartz-core multiplier
of [[def-translation-invariant-fourier-multiplier-on-schwartz-space]]; explicitly
$$H_t=\mathcal F_2^{-1}M_{m_t}\mathcal F_2,\qquad P_t=\mathcal F_2^{-1}M_{p_t}\mathcal F_2 .$$
These are the operators customarily written $e^{t\Delta}$ and
$e^{-t\sqrt{-\Delta}}$. They are defined here only through the bounded Fourier
symbols: no spectral theorem, generator, or functional calculus is assumed.
Then:

1. Both families are $L^2$ contractions, with operator norm exactly one:
   $\|H_tf\|_2\le\|f\|_2$ and $\|P_tf\|_2\le\|f\|_2$ for all
   $f\in L^2(\mathbb R^n;\mathbb C)$ and all $t\ge0$.
2. $H_0=P_0=\mathrm{id}_{L^2(\mathbb R^n;\mathbb C)}$.
3. $H_tH_r=H_{t+r}$ and $P_tP_r=P_{t+r}$ for all $t,r\ge0$.
4. For every $f\in L^2(\mathbb R^n;\mathbb C)$ and every $t>0$ the map
   $s\mapsto H_sf$ is differentiable from $(0,\infty)$ into $L^2$ with
   derivative
   $u'(t)=\mathcal F_2^{-1}\bigl(-4\pi^2|\xi|^2m_t(\xi)\mathcal F_2f\bigr)$,
   and the distributional Laplacian in $x$ of $u(t)=H_tf$ is the regular
   distribution of the $L^2$ class $u'(t)$; that is, $u$ solves the heat
   equation $\partial_tu=\Delta u$ for $t>0$. Likewise $s\mapsto P_sf$ is
   twice differentiable on $(0,\infty)$ and $w(t)=P_tf$ satisfies the
   upper-half-space Laplace equation
   $\partial_t^2w+\Delta_xw=0$ in $\mathcal S'(\mathbb R^n)$ for every $t>0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, an $L^2$ class
$f\in L^2(\mathbb R^n;\mathbb C)$, and real parameters $t,r\ge0$ and $h$ with
$0<|h|\le t/2$ wherever these appear.

[A1] Countable Choice is the hypothesis carried by every cited Fourier and
integration interface below ([[def-countable-choice]]).

[F1] On $\mathcal S(\mathbb R^n)$ the multiplier with symbol $m$ has domain
$D_m=\{f:m\widehat f\text{ locally integrable with tempered regular
distribution}\}$ and acts by $T_mf=\mathcal F^{-1}(u_{m\widehat f})$
([[def-translation-invariant-fourier-multiplier-on-schwartz-space]]).

[F2] If $m$ is measurable with
$M=\|m\|_\infty=\operatorname{ess\,sup}|m|<\infty$, then
$\mathcal S\subseteq D_m$, $T_mf=\mathcal F_2^{-1}(m\mathcal F_2f)$ as $L^2$
classes for Schwartz $f$, and $T_m$ has a unique bounded $L^2$ extension
$T_m=\mathcal F_2^{-1}M_m\mathcal F_2$ whose operator norm is exactly $M$
([[lem-ltwo-fourier-multiplier-bound]]).

[F3] Plancherel $\mathcal F_2$ is a surjective complex-linear isometry of
$L^2(\mathbb R^n;\mathbb C)$, so $\mathcal F_2^{-1}$ exists, is complex-linear,
and preserves norms ([[thm-plancherel]]).

[F4] For $u\in\mathcal S'(\mathbb R^n)$ and every multi-index $\alpha$,
$\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ in
$\mathcal S'(\mathbb R^n)$
([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

[F5] For an $L^2$ class $h$ with regular distribution $u_h$,
$\mathcal Fu_h=u_{\mathcal F_2h}$ in $\mathcal S'(\mathbb R^n)$
([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F6] $\mathcal F$ is a topological automorphism of
$\mathcal S'(\mathbb R^n)$, in particular injective with inverse
$\mathcal F^{-1}$
([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

[F7] A smooth function $a$ whose derivatives are all polynomially bounded
multiplies $\mathcal S'$ by $\langle au,\varphi\rangle=\langle u,a\varphi\rangle$
([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]); if $g,ag\in L^2$, their regular distributions are tempered by [F5],
and for every Schwartz test $\varphi$ the integrals
$\langle au_g,\varphi\rangle=\int g(a\varphi)=\int(ag)\varphi
=\langle u_{ag},\varphi\rangle$ converge by Cauchy–Schwarz, since
$a\varphi\in\mathcal S\subseteq L^2$. Thus $au_g=u_{ag}$ in the case used
below. The underlying compact-test regular functional is that of
[[def-regular-distribution-from-a-locally-integrable-function]].

[F8] Dominated convergence: if measurable $F_j$ satisfy $F_j\to F$ almost
everywhere and $|F_j|\le G$ almost everywhere for one nonnegative integrable
$G$, then $\int|F_j-F|\to0$ ([[thm-dominated-convergence]]).

[F9] $\exp(x+y)=\exp(x)\exp(y)$ for real $x,y$, and the real exponential is the
power series of [[def-real-exponential-function-and-e]], so $\exp(0)=1$
([[thm-exponential-addition-formula]]).

[F10] $1+x\le\exp(x)$ for every real $x$
([[lem-exponential-dominates-one-plus-x]]).

[F11] If $g$ is continuous on $[a,b]$ and differentiable on $(a,b)$, there is
$c\in(a,b)$ with $g(b)-g(a)=g'(c)(b-a)$ ([[cor-mean-value-theorem]]).

[F12] $(\exp)'=\exp$, and the chain rule computes
$(f\circ g)'(s)=f'(g(s))g'(s)$
([[thm-derivative-of-exponential]], [[thm-chain-rule]]).

[F13] The essential supremum of a measurable function is the least essential
bound: if $|a|\le L$ almost everywhere then $\|a\|_\infty\le L$
([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F14] Every nonempty Euclidean ball has positive finite Lebesgue measure
([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

## Verification

**Given:** The data and conventions of the Example above and of [F1]-[F14].

1.1 Each map $\xi\mapsto m_t(\xi)=e^{-4\pi^2t|\xi|^2}$ is continuous, and $|m_t|\le1$ everywhere because $-4\pi^2t|\xi|^2\le0$; the same holds for $p_t$ with $|p_t|\le1$. At $\xi=0$ both symbols equal $1$ by [F9]. For $\varepsilon>0$, continuity at $0$ gives a ball on which $|m_t|>1-\varepsilon$ and $|p_t|>1-\varepsilon$, these balls have positive measure by [F14], so no number below $1$ is an essential bound; with [F13] this gives $\|m_t\|_\infty=\|p_t\|_\infty=1$ for every $t\ge0$. [F9, F10, F13, F14, algebra]

1.2 For all $t>0$ and $r\ge0$: (i) $4\pi^2r^2e^{-4\pi^2tr^2}\le\frac1{et}$, (ii) $2\pi re^{-2\pi tr}\le\frac1{et}$, (iii) $4\pi^2r^2e^{-2\pi tr}\le\frac4{e^2t^2}$. Indeed [F10] with $x=s-1$ gives $0<se^{-s}\le e^{-1}$ for every real $s>0$; substituting $s=4\pi^2tr^2$ proves (i), substituting $s=2\pi tr$ proves (ii), and writing $s^2e^{-s}=(2\cdot\frac s2e^{-s/2})^2\le(2e^{-1})^2$ with the same substitution proves (iii). [F10, algebra]

2.1 Step 1.1 bounds the symbols, so the operators under discussion are the domain-qualified Schwartz multipliers $T_{m_t},T_{p_t}$ of [F1], and [F2] gives $\mathcal S\subseteq D_{m_t}\cap D_{p_t}$ together with, for every $t\ge0$, the unique bounded extensions $H_t=T_{m_t}$ and $P_t=T_{p_t}$ on $L^2(\mathbb R^n;\mathbb C)$ with $H_t=\mathcal F_2^{-1}M_{m_t}\mathcal F_2$, $P_t=\mathcal F_2^{-1}M_{p_t}\mathcal F_2$ and operator norm $\|m_t\|_\infty=\|p_t\|_\infty=1$; in particular $\|H_tf\|_2\le\|f\|_2$ and $\|P_tf\|_2\le\|f\|_2$ for every $f\in L^2$. Since $m_0=p_0=1$ by [F9], the same formulas and [F3] give $H_0=P_0=\mathcal F_2^{-1}\mathcal F_2=\mathrm{id}_{L^2}$. [F1, F2, F3, F9, step 1.1]

2.2 Fix $f\in L^2$ and $t>0$ and put $g_t=-4\pi^2|\xi|^2m_t\mathcal F_2f$, $q_t=-2\pi|\xi|p_t\mathcal F_2f$ and $\widetilde g_t=4\pi^2|\xi|^2p_t\mathcal F_2f$. Each is a measurable function of $\xi$ and step 1.2 bounds its modulus by $\frac1{et}|\mathcal F_2f|$, $\frac1{et}|\mathcal F_2f|$ and $\frac4{e^2t^2}|\mathcal F_2f|$ respectively; hence by [F3], $g_t,q_t,\widetilde g_t\in L^2(\mathbb R^n;\mathbb C)$ with $\|g_t\|_2\le\frac1{et}\|f\|_2$, $\|q_t\|_2\le\frac1{et}\|f\|_2$ and $\|\widetilde g_t\|_2\le\frac4{e^2t^2}\|f\|_2$. [F3, step 1.2, algebra]

3.1 For all $t,r\ge0$ the addition law [F9] gives the pointwise symbol identities $m_tm_r=m_{t+r}$ and $p_tp_r=p_{t+r}$. Substituting the explicit formulas of step 2.1 and using that composition of multiplication operators multiplies symbols,
$$H_tH_r=\mathcal F_2^{-1}M_{m_t}\mathcal F_2\mathcal F_2^{-1}M_{m_r}\mathcal F_2=\mathcal F_2^{-1}M_{m_tm_r}\mathcal F_2=H_{t+r},$$
and identically $P_tP_r=P_{t+r}$; the case $t=r=0$ reduces to $H_0^2=H_0$, consistent with step 2.1. [F3, F9, step 2.1]

3.2 (Heat, first time derivative.) Fix $f\in L^2$ and $t>0$. For $0<|h|\le t/2$, step 2.1 and linearity of $\mathcal F_2^{-1}$ write the difference quotient as $\frac{H_{t+h}f-H_tf}{h}=\mathcal F_2^{-1}\bigl(\frac{m_{t+h}-m_t}{h}\mathcal F_2f\bigr)$. For fixed $\xi$ the function $s\mapsto m_s(\xi)=e^{-4\pi^2s|\xi|^2}$ is differentiable on the interval with endpoints $t+h$ and $t$ (both positive), with derivative $s\mapsto-4\pi^2|\xi|^2e^{-4\pi^2s|\xi|^2}$ by [F12]; [F11] therefore gives a point $s_h(\xi)$ between $t+h$ and $t$ with $\frac{m_{t+h}(\xi)-m_t(\xi)}{h}=-4\pi^2|\xi|^2e^{-4\pi^2s_h(\xi)|\xi|^2}$. As $h\to0$ one has $s_h(\xi)\to t$, so the quotient tends to $-4\pi^2|\xi|^2m_t(\xi)$ pointwise. Since $s_h(\xi)\ge t/2$, step 1.2(i) with $t/2$ bounds the quotient by $\frac2{et}$, while step 1.2(i) also gives $|4\pi^2|\xi|^2m_t(\xi)|\le\frac1{et}$. Hence $F_h=\bigl|\frac{m_{t+h}-m_t}{h}+4\pi^2|\xi|^2m_t\bigr|^2|\mathcal F_2f|^2$ tends to $0$ pointwise and is dominated by $\frac9{e^2t^2}|\mathcal F_2f|^2$, which is integrable; for every sequence $h_j\to0$ with $|h_j|\le t/2$, [F8] gives $\int F_{h_j}\to0$, and the isometry [F3] converts this into $\bigl\|\frac{H_{t+h_j}f-H_tf}{h_j}-\mathcal F_2^{-1}(g_t)\bigr\|_2\to0$ with $g_t$ from step 2.2, which is the two-sided limit statement. Thus $s\mapsto H_sf$ is differentiable on $(0,\infty)$ with $u'(t)=\mathcal F_2^{-1}(g_t)=\mathcal F_2^{-1}\bigl(-4\pi^2|\xi|^2m_t\mathcal F_2f\bigr)$. [F3, F8, F11, F12, step 1.2, step 2.1, step 2.2]

3.3 (Poisson, first time derivative.) The same computation with $p_t$ in place of $m_t$: for fixed $\xi$ the function $s\mapsto p_s(\xi)=e^{-2\pi s|\xi|}$ has derivative $-2\pi|\xi|e^{-2\pi s|\xi|}$ by [F12], so [F11] gives points with quotient tending pointwise to $-2\pi|\xi|p_t(\xi)$; step 1.2(ii) bounds the quotient by $\frac2{et}$ and the limit symbol by $\frac1{et}$, so [F8] and [F3] give that $s\mapsto P_sf$ is differentiable on $(0,\infty)$ with $w'(t)=\mathcal F_2^{-1}(q_t)$, $q_t$ as in step 2.2. [F3, F8, F11, F12, step 1.2, step 2.1, step 2.2]

4.1 (Heat equation.) Let $u(t)=H_tf$. By step 2.1, $\mathcal F_2u(t)=m_t\mathcal F_2f$, so [F5] gives $\mathcal F(u_{u(t)})=u_{m_t\mathcal F_2f}$. Summing the coordinate identities of [F4] with $|\alpha|=2$ gives $\mathcal F(\Delta u_{u(t)})=\sum_j(2\pi i\xi_j)^2\mathcal F(u_{u(t)})=-4\pi^2|\xi|^2u_{m_t\mathcal F_2f}$, and the polynomial $-4\pi^2|\xi|^2$ together with [F7] identifies this as the regular distribution $u_{g_t}$ of the $L^2$ class $g_t$ of step 2.2. Since [F5] applied to $h=\mathcal F_2^{-1}g_t$ gives $\mathcal F\bigl(u_{\mathcal F_2^{-1}g_t}\bigr)=u_{g_t}$, injectivity of $\mathcal F$ on $\mathcal S'$ [F6] yields $\Delta u_{u(t)}=u_{\mathcal F_2^{-1}g_t}$. By step 3.2 the class $u'(t)$ is exactly $\mathcal F_2^{-1}g_t$, so for every $t>0$ the distributional Laplacian of $u(t)=H_tf$ is the regular distribution of the strong $L^2$ derivative $u'(t)$: the solution satisfies $\partial_tu=\Delta u$ for $t>0$. [F4, F5, F6, F7, step 2.1, step 2.2, step 3.2]

4.2 (Poisson, second time derivative.) Apply the argument of step 3.2 to the family the scalar symbols $b_s(\xi)=-2\pi|\xi|p_s(\xi)$, so that $q_s=b_s\mathcal F_2f$ is the $L^2$ class of step 2.2: for fixed $\xi$, the map $s\mapsto-2\pi|\xi|e^{-2\pi s|\xi|}$ has derivative $4\pi^2|\xi|^2p_s(\xi)$ by [F12], so [F11] gives points $\sigma_h(\xi)\ge t/2$ with $\frac{b_{t+h}(\xi)-b_t(\xi)}{h}=4\pi^2|\xi|^2e^{-2\pi\sigma_h(\xi)|\xi|}$ tending to $4\pi^2|\xi|^2p_t(\xi)$ pointwise, and step 1.2(iii) with $t/2$ in place of $t$ bounds these quotients by $\frac{16}{e^2t^2}$ while step 1.2(iii) bounds $|4\pi^2|\xi|^2p_t(\xi)|$ by $\frac4{e^2t^2}$. Hence $F_h=\bigl|\frac{b_{t+h}-b_t}{h}-4\pi^2|\xi|^2p_t\bigr|^2|\mathcal F_2f|^2\to0$ pointwise, dominated by $\bigl(\frac{20}{e^2t^2}\bigr)^2|\mathcal F_2f|^2$; [F8] and [F3] give $\bigl\|\frac{w'(t+h)-w'(t)}{h}-\mathcal F_2^{-1}(\widetilde g_t)\bigr\|_2\to0$ with $\widetilde g_t$ of step 2.2, so $s\mapsto P_sf$ is twice differentiable on $(0,\infty)$ with $w''(t)=\mathcal F_2^{-1}(\widetilde g_t)$. [F3, F8, F11, F12, step 1.2, step 2.2, step 3.3]

5.1 (Upper-half-space Laplace equation.) Let $w(t)=P_tf$. By step 2.1, $\mathcal F_2w(t)=p_t\mathcal F_2f$, so [F5] and [F4] with $|\alpha|=2$ give $\mathcal F(\Delta_xw(t))=-4\pi^2|\xi|^2u_{p_t\mathcal F_2f}=u_{-\widetilde g_t}$ by [F7]. Step 4.2 gives $\mathcal F(u_{w''(t)})=u_{\widetilde g_t}$ by [F5], so by linearity of $\mathcal F$ the distribution $u_{w''(t)}+\Delta_xw(t)$ has Fourier transform $u_{\widetilde g_t}+u_{-\widetilde g_t}=0$; injectivity of $\mathcal F$ [F6] gives $w''(t)+\Delta_xw(t)=0$ in $\mathcal S'(\mathbb R^n)$ for every $t>0$, the upper-half-space Laplace equation with boundary control left entirely to the symbol $e^{-2\pi t|\xi|}$. [F4, F5, F6, F7, step 2.1, step 4.2]

6.1 The operators $H_t,P_t$ are defined only through the bounded symbols $m_t,p_t$ by [F2] (step 2.1): step 2.1 gives the contraction and identity claims, step 3.1 the semigroup laws, step 4.1 the heat equation, and step 5.1 the upper-half-space Laplace equation, which are exactly the four asserted properties; Countable Choice enters only through the cited published interfaces of [A1], and no spectral theorem is used. [A1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

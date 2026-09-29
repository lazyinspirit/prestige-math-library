---
id: ex-translation-and-differentiation-multiplier-symbols
kind: example
title: Translation and differentiation symbols
status: draft
origin: pipeline
deps:
  - def-translation-invariant-fourier-multiplier-on-schwartz-space
  - lem-ltwo-fourier-multiplier-bound
  - lem-weak-derivatives-are-polynomial-fourier-multipliers
  - thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space
  - def-countable-choice
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-plancherel
  - lem-schwartz-space-is-dense-in-l-two
  - lem-schwartz-functions-and-all-derivatives-are-integrable
  - thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions
  - thm-fourier-translation-modulation-dilation-and-reflection-laws
  - def-translation-of-a-function-on-rn
  - lem-smooth-polynomially-bounded-multipliers-on-schwartz-space
  - def-regular-distribution-from-a-locally-integrable-function
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
  - thm-heine-borel-rn
  - lem-test-function-inclusion-in-schwartz-space-is-continuous
  - def-complex-lp-and-euclidean-test-function-conventions
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed."
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: "§2.5.5, Example 2.5.12 and the translation symbol discussion, printed p. 156"
    - title: "Semyon Dyatlov, Lecture Notes for 18.155, current revision"
      url: https://math.mit.edu/~dyatlov/18.155/155-notes.pdf
      locator: "§12.1.1, Fourier-derivative multiplier in the proof of Proposition 12.1, printed p. 139"
---

## Example

Assume Countable Choice and let $n\ge1$ with the complex $L^2$ conventions of
[[def-complex-lp-and-euclidean-test-function-conventions]]. For
$a\in\mathbb R^n$ let $\tau_af(x)=f(x-a)$ be the translate of
[[def-translation-of-a-function-on-rn]], acting on Schwarz space, and let
$\partial_j$ be the $j$-th coordinate derivative. Then:

1. The Fourier multiplier with symbol $m(\xi)=e^{-2\pi ia\cdot\xi}$ acts on
   $\mathcal S(\mathbb R^n)$ exactly as $\tau_a$:
   $T_m=\tau_a$ on the Schwartz core, and $\tau_a$ extends to an isometry of
   $L^2(\mathbb R^n;\mathbb C)$.
2. The distributional derivative $\partial_j$ has the Fourier symbol
   $\sigma(\xi)=2\pi i\xi_j$: for every $u\in\mathcal S'(\mathbb R^n)$,
   $\mathcal F(\partial_ju)=\sigma\,\mathcal Fu$, and on Schwartz functions
   the multiplier with symbol $\sigma$ is the classical quotient derivative.
3. Although $\sigma$ is smooth and polynomially bounded, it is unbounded, and
   $\partial_j$ admits no bounded $L^2$ extension from the Schwartz core: no
   bounded linear $P:L^2(\mathbb R^n;\mathbb C)\to L^2(\mathbb R^n;\mathbb C)$
   satisfies $Pf=\partial_jf$ for every Schwartz $f$.
4. No Mihlin-type criterion is invoked here; the obstruction in part 3 is the
   elementary frequency growth of $|\sigma(\xi)|=2\pi|\xi_j|$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $a\in\mathbb R^n$, $j\in\{1,\dots,n\}$,
the Schwartz core conventions of
[[def-translation-invariant-fourier-multiplier-on-schwartz-space]], and an
$L^2$ class $g$ where a norm estimate is stated.

[A1] Countable Choice is inherited from every cited interface below
([[def-countable-choice]]).

[F1] On $\mathcal S(\mathbb R^n)$ the transform is the integral transform;
$\mathcal F$ is a topological automorphism of $\mathcal S$ with
$\mathcal F^{-1}=R\mathcal F$, $Rf=f(-\cdot)$, and for $f\in L^1$ the
distributional transform of the regular distribution is
$\mathcal Fu_f=u_{\widehat f}$
([[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]],
[[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F2] Translation is continuous on $\mathcal S$, is the convention
$\tau_af(x)=f(x-a)$, and satisfies the $L^1$ translation law
$\widehat{\tau_af}(\xi)=e^{-2\pi ia\cdot\xi}\widehat f(\xi)$
([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]],
[[def-translation-of-a-function-on-rn]],
[[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

[F3] Every Schwartz function is integrable
([[lem-schwartz-functions-and-all-derivatives-are-integrable]]), and
for $f\in D_m$, the multiplier is $T_mf=\mathcal F^{-1}(u_{m\widehat f})$
([[def-translation-invariant-fourier-multiplier-on-schwartz-space]]).

[F4] If $m$ is measurable with finite essential supremum, then
$\mathcal S\subseteq D_m$, $T_mf=\mathcal F_2^{-1}(m\mathcal F_2f)$ as $L^2$
classes for Schwartz $f$, and $T_m$ has a unique bounded $L^2$ extension with
operator norm $\|m\|_\infty$ ([[lem-ltwo-fourier-multiplier-bound]]).

[F5] Plancherel $\mathcal F_2$ is a surjective complex-linear isometry of
$L^2(\mathbb R^n;\mathbb C)$ extending the Schwartz transform, and the
Schwartz classes are dense in $L^2$
([[thm-plancherel]], [[lem-schwartz-space-is-dense-in-l-two]]).

[F6] For $u\in\mathcal S'(\mathbb R^n)$ and every multi-index $\alpha$,
$\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ in
$\mathcal S'(\mathbb R^n)$
([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]),
and for $L^2$ classes $f,h$ with $u_f=u$, $u_h=\partial^\alpha u$ one has
$\mathcal F_2h=(2\pi i\xi)^\alpha\mathcal F_2f$ almost everywhere
([[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F7] On Schwartz space, $\partial_j$ maps $\mathcal S$ continuously into
$\mathcal S$ and
$\mathcal F(\partial_jf)(\xi)=2\pi i\xi_j\widehat f(\xi)$ pointwise for every
$f\in\mathcal S$
([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]],
[[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]).

[F8] $\mathcal F$ is a topological automorphism of $\mathcal S'(\mathbb R^n)$,
in particular injective with inverse $\mathcal F^{-1}$, so
$\mathcal F^{-1}\mathcal Fu=u$ for every tempered distribution
([[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]]).

[F9] If $a$ is smooth with every derivative polynomially bounded, it maps
Schwartz functions to Schwartz functions and multiplies tempered distributions
by $\langle au,\varphi\rangle=\langle u,a\varphi\rangle$
([[lem-smooth-polynomially-bounded-multipliers-on-schwartz-space]]).
For the Schwartz function $h=\widehat f$ used below, both $h$ and $ah$ are
Schwartz. Their regular pairings are absolutely convergent and
$\langle au_h,\varphi\rangle=\int h(a\varphi)=\int(ah)\varphi
=\langle u_{ah},\varphi\rangle$, so $au_h=u_{ah}$
([[def-regular-distribution-from-a-locally-integrable-function]], [F3]).

[F10] $|\exp(x+iy)|=e^x$ for real $x,y$, so $|e^{i\theta}|=1$ for every real
$\theta$
([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F11] For every compact $K$ inside an open $U\subseteq\mathbb R^n$ there is a
smooth $\rho:\mathbb R^n\to[0,1]$ with $\rho=1$ on $K$ and
$\operatorname{supp}\rho\subseteq U$
([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]).

[F12] The natural inclusion $\mathcal D(\mathbb R^n)=C_c^\infty(\mathbb R^n)
\hookrightarrow\mathcal S(\mathbb R^n)$ is continuous with dense image, so
each compactly supported smooth function is Schwartz
([[lem-test-function-inclusion-in-schwartz-space-is-continuous]]).

[F13] A closed bounded subset of Euclidean space is compact
([[thm-heine-borel-rn]]).

## Verification

**Given:** The data, symbols and conventions of the Example and of [F1]-[F13].

1.1 The symbol $m(\xi)=e^{-2\pi ia\cdot\xi}$ is continuous, and [F10] with $x=0$ and $y=-2\pi a\cdot\xi$ gives $|m(\xi)|=1$ for every $\xi$; hence $\|m\|_\infty=1$. The symbol $\sigma(\xi)=2\pi i\xi_j$ is smooth with $|\sigma(\xi)|=2\pi|\xi_j|\le2\pi(1+|\xi|)$, so all its derivatives are polynomially bounded, and $|\sigma(te_j)|=2\pi|t|\to\infty$ as $t\to\infty$ shows it is unbounded. [F10, algebra]

1.2 For $f\in\mathcal S$: [F2] gives $\tau_af\in\mathcal S$ with $\widehat{\tau_af}(\xi)=m(\xi)\widehat f(\xi)$ at every $\xi$, and $f\in L^1$ by [F3], so the $L^1$ case of [F1] gives the distributional identity $\mathcal F u_{\tau_af}=u_{m\widehat f}$. Likewise [F7] gives $\partial_jf\in\mathcal S$ with $\mathcal F(\partial_jf)=\sigma\widehat f$ and hence $\mathcal F u_{\partial_jf}=u_{\sigma\widehat f}$. [F1, F2, F3, F7]

1.3 Fix $N>0$ and put $\eta=(N+2)e_j$. The singleton $K=\{\eta\}$ is compact, $U=B(\eta,1)\subseteq\{\xi\in\mathbb R^n:\xi_j>N\}$ is bounded and open, and $K\subseteq U$; [F11] gives a smooth $\psi_N$ with $0\le\psi_N\le1$, $\psi_N(\eta)=1$ and $\operatorname{supp}\psi_N\subseteq U$. Its support is closed and bounded, hence compact by [F13], so $\psi_N\in C_c^\infty$. Then $\psi_N\neq0$, and $\psi_N\in\mathcal S$ by [F12]; by [F1] the class $f_N:=\mathcal F^{-1}\psi_N$ lies in $\mathcal S$ with $\mathcal Ff_N=\psi_N$. [F1, F11, F12, F13, algebra]

2.1 Since $m$ is bounded and measurable by step 1.1, [F4] gives $\mathcal S\subseteq D_m$ and $T_mf=\mathcal F^{-1}(u_{m\widehat f})$ for $f\in\mathcal S$; substituting step 1.2, $T_mf=\mathcal F^{-1}\bigl(\mathcal F u_{\tau_af}\bigr)=u_{\tau_af}$ by [F8]. Thus the multiplier with symbol $m$ equals the translate $\tau_a$ on the Schwartz core, so $m$ is the multiplier symbol of $\tau_a$. [F4, F8, step 1.1, step 1.2]

2.2 Since $\sigma$ is smooth and polynomially bounded by step 1.1, $\sigma\widehat f\in\mathcal S$ for $f\in\mathcal S$; the distributional derivative identity [F6] gives $\mathcal F(\partial_ju_f)=\sigma\mathcal Fu_f=\sigma u_{\widehat f}=u_{\sigma\widehat f}$, using [F1] and [F9] for the middle identifications, while step 1.2 gives $\mathcal F u_{\partial_jf}=u_{\sigma\widehat f}$. Injectivity of $\mathcal F$ on $\mathcal S'$ [F8] yields $\partial_ju_f=u_{\partial_jf}$: on Schwartz classes the distributional derivative is the classical derivative. Consequently $T_\sigma f=\mathcal F^{-1}(u_{\sigma\widehat f})=\mathcal F^{-1}\bigl(\mathcal F u_{\partial_jf}\bigr)=u_{\partial_jf}$ by [F8], so the Schwarz-core multiplier with symbol $\sigma=2\pi i\xi_j$ is exactly $\partial_j$. [F1, F6, F8, F9, step 1.1, step 1.2]

2.3 For the $f_N$ of step 1.3, Plancherel [F5], the derivative identity of [F7] and $\mathcal Ff_N=\psi_N$ give $\|\partial_jf_N\|_2=\|\mathcal F_2(\partial_jf_N)\|_2=\|2\pi i\xi_j\psi_N\|_2=2\pi\|\xi_j\psi_N\|_2$. On $\operatorname{supp}\psi_N$ one has $\xi_j>N$, so $\|\xi_j\psi_N\|_2\ge N\|\psi_N\|_2= N\|f_N\|_2$ by [F5]; hence $\|\partial_jf_N\|_2\ge2\pi N\|f_N\|_2$, and $f_N\neq0$ since $\psi_N(\eta)=1$. [F5, F7, step 1.3]

3.1 Since $|m|=1$ everywhere by step 1.1, [F4] and [F5] give, for every $g\in L^2$, $T_mg=\mathcal F_2^{-1}(m\mathcal F_2g)$ and $\|T_mg\|_2=\|m\mathcal F_2g\|_2=\|\mathcal F_2g\|_2=\|g\|_2$; thus $T_m$ is an isometry of $L^2$ (indeed unitary, with inverse $T_{\overline m}$). By step 2.1 the operator $T_m$ agrees with $\tau_a$ on the dense Schwartz subspace [F5]; the $L^2$ extension of $\tau_a$ is unique by [F4], so that extension is this isometry and $\tau_a$ is an $L^2$ isometry. [F4, F5, step 1.1, step 2.1]

4.1 Suppose a bounded linear $P:L^2\to L^2$ extended $\partial_j$ from the Schwartz core, say $\|Pg\|_2\le C\|g\|_2$ and $Pf=\partial_jf$ for every $f\in\mathcal S$. Applying this to $f_N\in\mathcal S$ of step 1.3 and using step 2.3 gives $2\pi N\|f_N\|_2\le\|\partial_jf_N\|_2=\|Pf_N\|_2\le C\|f_N\|_2$, hence $2\pi N\le C$ for every $N>0$ with $f_N\ne0$, which is impossible. Therefore no bounded $L^2$ extension exists, while steps 2.1 and 2.2 identify the symbols $m$ and $\sigma$ and step 3.1 establishes the $L^2$ isometry of $\tau_a$; no Mihlin or other smoothness criterion was used. [A1, step 2.1, step 2.2, step 3.1, step 2.3] ∎

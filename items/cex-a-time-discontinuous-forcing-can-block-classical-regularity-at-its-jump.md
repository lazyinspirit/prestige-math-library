---
id: cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump
kind: counterexample
title: A time-discontinuous forcing blocks classical regularity at its jump
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [thm-classical-regularity-for-holder-continuous-forcing-under-compatibility, lem-analytic-duhamel-cancellation-removes-the-generator-singularity, thm-analytic-semigroup-smoothing-estimates, def-classical-strong-and-mild-abstract-cauchy-solutions, thm-variation-of-constants-formula, def-infinitesimal-generator-of-a-c-zero-semigroup, def-bochner-integrable-function, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, Remark 2.32 and the counterexample reference, printed p. 70'
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: 'Chapter 11 Section 11.3, Lemma 11.12: a mild solution with continuous forcing need not be a solution, printed pp. 258-259'
verification:
  precheck: pass
---

## Statement refuted

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $X=\mathbb C$, $A=0$ (a bounded generator), $0<t_0<b$, and $f:={\bf 1}_{[t_0,b]}$, which is bounded and measurable but neither continuous nor H\"older at $t_0$. The mild solution of $u^{\prime}=Au+f=0\cdot u+f$, $u(0)=0$, is
$$u(t)=\int_0^t{\bf 1}_{[t_0,b]}(s)\,ds=\begin{cases}0,&0\le t\le t_0,\\ t-t_0,&t_0<t\le b.\end{cases}$$
It is continuous and Lipschitz and satisfies $u^{\prime}(t)=f(t)$ for $t\ne t_0$, but it is not differentiable at $t_0$ (left derivative $0$, right derivative $1$) and hence is not a classical solution on $[0,b]$ in the sense of [[def-classical-strong-and-mild-abstract-cauchy-solutions]]. Thus $u\in C([0,b],X)\cap C^1((0,b]\setminus\{t_0\},X)$ but $u\notin C^1([0,b],X)$, and the H\"older-continuity hypothesis in [[thm-classical-regularity-for-holder-continuous-forcing-under-compatibility]] cannot be lowered to mere boundedness. For continuous forcing with modulus $\omega_f(\sigma):=\sup_{|s-r|\le\sigma}\|f(s)-f(r)\|$, the analytic smoothing bound $\|AT(\sigma)\|\le C\sigma^{-1}$ ([[thm-analytic-semigroup-smoothing-estimates]]) makes $\int_0^b\omega_f(\sigma)\sigma^{-1}d\sigma<\infty$ sufficient for the singular generator integral in the Duhamel cancellation estimate; H\"older continuity is one way to meet this condition. This is a sufficient condition for that estimate, not a necessary condition for classicality, and the jump is outside its continuous-Dini hypothesis. The present $A=0$ example shows directly that bounded measurable forcing alone does not suffice: the jump makes the mild solution nondifferentiable. The example isolates this failure of time regularity with a trivial initial datum.

**Refuted claim.** With $A=0$ on $\mathbb C$, a bounded measurable forcing produces a classical solution of $u'=Au+f$. The jump forcing $f={\bf 1}_{[t_0,b]}$ satisfies $f\in L^\infty(0,b)$ and the mild solution exists, but its left and right derivatives at the jump $t_0$ disagree, so the mild solution is not even differentiable there and the classical notion fails without any additional time regularity of $f$.

## Facts & Assumptions

**Given:** $X=\mathbb C$, the zero operator $A=0$ with $D(A)=X$, the numbers $0<t_0<b$, the indicator $f=\mathbf 1_{[t_0,b]}$ and the datum $x=0$.

[L1] The infinitesimal generator of a strongly continuous semigroup $(T(t))_{t\ge0}$ is $Ax:=\lim_{t\downarrow0}(T(t)x-x)/t$ on its domain ([[def-infinitesimal-generator-of-a-c-zero-semigroup]]).

[L2] For a strongly continuous semigroup with generator $A$ and a Bochner integrable $f$ with $\int_0^{T_0}\|f\|<\infty$, the formula $u(t)=T(t)x+\int_0^tT(t-s)f(s)\,ds$ defines the unique mild solution and the unique integral solution of $u'=Au+f$, $u(0)=x$ ([[thm-variation-of-constants-formula]], [[def-bochner-integrable-function]]).

[L3] A classical solution is a $u\in C^1([0,T_0];X)$ with $u(t)\in D(A)$ for every $t$, $Au\in C([0,T_0];X)$, $u'(t)=Au(t)+f(t)$ for $0<t<T_0$ and $u(0)=x$; endpoint equations are imposed only when $f$ extends continuously to $[0,T_0]$ ([[def-classical-strong-and-mild-abstract-cauchy-solutions]]).

[L4] For $A$ sectorial with semigroup bounds $c_0,c_1$ and $f\in C^\alpha([0,b],X)$ one has $\|Av_1(t)\|\le\frac{c_1}{\alpha}[f]_\alpha t^\alpha$ for the Duhamel term $v_1(t)=\int_0^tT(t-s)(f(s)-f(t))ds$ ([[lem-analytic-duhamel-cancellation-removes-the-generator-singularity]]).

[L5] The classical regularity theorem assumes $x\in D(A)$ and $f\in C^\alpha([0,b],X)$ for some $\alpha\in(0,1)$ and concludes classicality of the mild solution ([[thm-classical-regularity-for-holder-continuous-forcing-under-compatibility]]).

[L6] For the analytic contour semigroup generated by a sectorial operator with vertex $0$, $T(\sigma)X\subseteq D(A)$ and $\|AT(\sigma)\|\le C\sigma^{-1}$ for $\sigma>0$, with $C$ depending on the sectoriality bounds ([[thm-analytic-semigroup-smoothing-estimates]]).

## Counterexample

**Proof technique:** direct.

1.1 The semigroup and the mild solution. On $X$ the operator $A=0$ has domain $X$ and generates the identity semigroup $T(t)=I$: for every $x$ the difference quotient $(T(t)x-x)/t=0$ converges to $0=Ax$, so $D(A)=X$ and the generator is $0$; the forcing $f=\mathbf 1_{[t_0,b]}$ is bounded and measurable, hence Bochner integrable on $(0,b)$ with $\int_0^b\|f\|=b-t_0<\infty$, and [L2] with $x=0$ gives the unique mild solution $u(t)=\int_0^t\mathbf 1_{[t_0,b]}(s)\,ds$, that is $u(t)=0$ for $0\le t\le t_0$ and $u(t)=t-t_0$ for $t_0<t\le b$; this $u$ is continuous, equals $0$ at the origin and is Lipschitz with constant $1$ on $[0,b]$. [L1, L2, given, algebra]

2.1 The differentiability failure at the jump. For $0<h<t_0$ the left difference quotient of $u$ at $t_0$ is $(u(t_0)-u(t_0-h))/h=0$, while for $0<h<b-t_0$ the right quotient is $(u(t_0+h)-u(t_0))/h=h/h=1$; hence the one-sided limits differ and $u$ is not differentiable at $t_0$, although on each open piece $u'(t)=f(t)$ (the derivative is $0$ on $(0,t_0)$ and $1$ on $(t_0,b)$), so $u\in C^1((0,b]\setminus\{t_0\},X)$ and $u\notin C^1([0,b],X)$. [step 1.1, given, algebra]

3.1 Why boundedness is not enough. A classical solution on $[0,b]$ must be $C^1$ on the closed interval with $Au$ continuous and $u'(t)=Au(t)+f(t)=f(t)$ for $0<t<b$ by [L3], so [step 2.1] shows that this mild solution is not classical even though the generator $A=0$ is bounded, the datum is trivial and $f$ is bounded; therefore the H\"older hypothesis of [L5] cannot be weakened to mere boundedness. For a continuous forcing with modulus $\omega_f(\sigma):=\sup_{|s-r|\le\sigma}\|f(s)-f(r)\|$, [L6] bounds the generator integrand in the cancellation term by $C\omega_f(\sigma)\sigma^{-1}$. Thus $\int_0^b\omega_f(\sigma)\sigma^{-1}d\sigma<\infty$ is sufficient for that cancellation estimate; in the H\"older case it yields $C[f]_\alpha t^\alpha/\alpha$. This sufficient estimate is not a necessary characterization of classicality. In the present example $A=0$, hence $AT(\sigma)=0$; the failure follows directly from the unequal one-sided derivatives in [step 2.1], not from a singular generator kernel. All functions here are explicit, so no choice principle beyond Dependent Choice is used. [step 2.1, L3, L4, L5, L6, given, algebra] ∎

## Remarks

The same witness works in any nonzero Banach space after multiplying both $f$ and $u$ by a fixed nonzero vector.

---
id: ex-poincare-on-an-interval-with-sharp-scaling
kind: example
title: "Poincare on an interval: the length dependence is linear"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-axiom-of-choice, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, thm-lebesgue-measure-of-a-box-of-every-kind, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-holder-inequality-for-integrals, lem-classical-derivatives-are-weak-derivatives, cor-newton-leibniz-with-finitely-many-exceptional-points, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-real-power-continuity-and-derivatives]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.2, Theorem 3.12 for $n=1$, printed pp. 70-71."
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 4 §4.4, Theorem 4.9 and its remarks, printed p. 98 (the source proves p=2; the present argument uses Holder for general p)."
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $I=(0,L)$ with $L>0$ and let $1\le p<\infty$. For every $u\in W^{1,p}(I)$ with mean $u_I=|I|^{-1}\int_Iu$ one has
$$\|u-u_I\|_{L^p(I)}\le L\,\|u'\|_{L^p(I)} .$$
The dependence on $L$ cannot be improved below a positive multiple of $L$: for $u(x)=x-\frac{L}{2}$ the weak derivative is $u'\equiv1$, the mean vanishes, and
$$\|u-u_I\|_{L^p(I)}=L^{1+1/p}2^{-1}(p+1)^{-1/p},\qquad\|u'\|_{L^p(I)}=L^{1/p},$$
so the ratio $\|u-u_I\|_{L^p}/\|\text{u}'\|_{L^p}$ equals $c_pL$ with $c_p=\frac12(p+1)^{-1/p}>0$. Consequently every admissible constant for this family is at least $c_pL$, while the inequality above shows that $L$ itself is admissible: the optimal constant is of order $L$.

## Facts & Assumptions

**Given:** The Axiom of Choice (used only through the cited absolutely-continuous-representative interface); reals $0<L<\infty$ and $1\le p<\infty$; the interval $I=(0,L)$; and a class $u\in W^{1,p}(I;\mathbb K)$ with $\mathbb K\in\{\mathbb R,\mathbb C\}$.

[F1] Every $u\in W^{1,p}(I)$ has exactly one continuous locally absolutely continuous representative $u^{*}$ with $u^{*}(x)-u^{*}(y)=\int_y^xu'$ for all $x,y\in I$, and $u^{*}=u$ almost everywhere ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F2] $W^{1,p}$ consists of the $L^p$ classes whose weak derivative exists as an $L^p$ class, and equality of classes is equality almost everywhere ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] On a finite measure space $L^r$ includes into $L^1$ for $1\le r<\infty$, so $u\in L^1(I)$ and the mean $u_I=|I|^{-1}\int_Iu$ is a well-defined scalar ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]); the interval has $|I|=L$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] Holder's inequality gives $\int_I|g|\le|I|^{1-1/p}\|g\|_{L^p(I)}$ for $g\in L^p(I)$ and $1<p<\infty$, while for $p=1$ the same display holds with $|I|^0=1$ ([[thm-holder-inequality-for-integrals]]).

[F5] A function with $C^k$ real and imaginary parts has its classical partial derivatives as weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F6] Newton-Leibniz with finitely many exceptional points: if $G$ is continuous on $[a,b]$, differentiable off a finite set, and $f$ is Riemann integrable with $f=G'$ off that set, then $\int_a^bf=G(b)-G(a)$ ([[cor-newton-leibniz-with-finitely-many-exceptional-points]]).

[F7] A bounded Riemann integrable function on $[a,b]$ is Lebesgue integrable there and its Lebesgue integral equals its Riemann integral ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F8] For real $\alpha$ the function $x\mapsto x^{\alpha}$ is differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] the class $u$ has a continuous representative $u^{*}$ on $I$ that is locally absolutely continuous and satisfies $u^{*}(x)-u^{*}(y)=\int_y^xu'$ for all $x,y\in I$, and $u^{*}=u$ almost everywhere. Since $u\in L^p(I)$ and $|I|=L<\infty$, [F3] gives $u\in L^1(I)$, so $u_I=|I|^{-1}\int_Iu$ is well defined and equals $L^{-1}\int_Iu^{*}$ by [F2]; the norms $\|u-u_I\|_{L^p(I)}=\|u^{*}-u_I\|_{L^p(I)}$ agree because the two integrands coincide almost everywhere. [F1, F2, F3, given, algebra]

1.2 The linear function attains the scaling. Let $u(x)=x-\frac{L}{2}$ on $I$. Its real and imaginary parts are $C^\infty$, so by [F5] $u\in W^{1,p}(I)$ with weak derivative $u'\equiv1$, and $\|u'\|_{L^p(I)}=(L)^{1/p}=L^{1/p}$ by [F3]. The antiderivative $G(x)=\frac{x^2}2-\frac{Lx}2$ is continuous and $G'=u$ on $I$, so [F6], [F7] and [F3] give $u_I=L^{-1}(G(L)-G(0))=L^{-1}(L^2/2-L^2/2)=0$. Finally $|u|^{p}$ has the continuous majorant-free antiderivative identity $\int_0^{L/2}s^p\,ds=(L/2)^{p+1}/(p+1)$ by [F6], [F7] and [F8] (the derivative of $s^{p+1}/(p+1)$ is $s^p$ on $(0,L/2)$ and the endpoint values are limits), so $\int_I|u-u_I|^p\,dx=2\int_0^{L/2}s^p\,ds=2(L/2)^{p+1}/(p+1)=L^{p+1}2^{-p}(p+1)^{-1}$. Taking $p$-th roots gives $\|u-u_I\|_{L^p(I)}=L^{1+1/p}2^{-1}(p+1)^{-1/p}$. [F3, F5, F6, F7, F8, given, algebra]

2.1 Oscillation bound. For all $x,y\in I$ the representative satisfies $|u^{*}(x)-u^{*}(y)|=|\int_y^xu'|\le\int_I|u'|$; by [F4], applied to $g=u'$, this is at most $L^{1-1/p}\|u'\|_{L^p(I)}$ for $1<p<\infty$ and at most $\|u'\|_{L^1(I)}$ for $p=1$, that is, at most $L^{1-1/p}\|u'\|_{L^p(I)}$ in both cases. [F4, step 1.1, algebra]

3.1 The mean-zero bound. For every $x\in I$ the identity $u^{*}(x)-u_I=L^{-1}\int_I(u^{*}(x)-u^{*}(y))\,dy$ and [F4] with $g(y)=u^{*}(x)-u^{*}(y)$ give $|u^{*}(x)-u_I|^p\le L^{-1}\int_I|u^{*}(x)-u^{*}(y)|^p\,dy$; by step 2.1 the integrand is at most $(L^{1-1/p}\|u'\|_{L^p(I)})^p=L^{p-1}\|u'\|_{L^p(I)}^p$ for every $y$. Integrating over $x\in I$ therefore yields $\int_I|u-u_I|^p\le L\cdot L^{p-1}\|u'\|_{L^p(I)}^p=L^p\|u'\|_{L^p(I)}^p$, and taking $p$-th roots gives the asserted inequality. [F4, step 1.1, step 2.1, algebra]

4.1 Sharpness. Dividing the two norms computed in step 1.2 gives $\|u-u_I\|_{L^p(I)}/\|u'\|_{L^p(I)}=L\cdot\frac12(p+1)^{-1/p}=c_pL$ with $c_p=\frac12(p+1)^{-1/p}>0$. Hence for every $L>0$ there is a class in $W^{1,p}(I)$ for which the ratio of the left side to $\|u'\|_{L^p(I)}$ equals $c_pL$, so no constant smaller than $c_pL$ can be admissible for all $u\in W^{1,p}(I)$; combined with step 3.1 the optimal constant for this family lies between $c_pL$ and $L$, and in particular is a positive multiple of $L$. [step 3.1, step 1.2, given, algebra] ∎

## Source notes

The upper bound is the one-dimensional instance of the Poincare inequality for $W^{1,p}$ functions on bounded open sets; Kinnunen, Theorem 3.12 treats cube mean oscillations (an interval when $n=1$); the present proof works directly on the given interval, and Hunter's Theorem 4.9 gives the related p=2 zero-boundary slab estimate; here the cited one-dimensional representative supplier gives the mean-zero interval argument for all finite p. The computation of the extremal ratio for the affine function is included to fix the linear dependence on the interval length, which the statement of the companion theorem does not quantify; no claim about the exact optimal constant beyond the two-sided order $c_pL\le C^*(L)\le L$ is made.

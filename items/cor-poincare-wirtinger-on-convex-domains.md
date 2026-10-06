---
id: cor-poincare-wirtinger-on-convex-domains
kind: corollary
title: "Poincare-Wirtinger on bounded convex domains by the direct pairwise argument"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-axiom-of-choice, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, thm-local-smooth-approximation-in-wkp, thm-tonelli-and-fubini-for-completed-product-measures, thm-jensens-integral-inequality, thm-holder-inequality-for-integrals, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, cor-vector-valued-ftc-and-lipschitz-bound, thm-chain-rule-for-total-derivatives, lem-euclidean-balls-have-positive-finite-lebesgue-measure, prop-measure-monotonicity, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, thm-dominated-convergence]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 5 §5.3, Lemma 5.22 and Theorem 5.25, printed pp. 133-136; the segment argument is run with the ball replaced by the convex set."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Exercise 3.25 and the Poincare discussion of Theorem 3.29, printed pp. 77-79."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega\subseteq\mathbb R^n$ be open, bounded, convex and nonempty, and let $1\le p<\infty$. Then $\|u-u_\Omega\|_{L^p(\Omega)}\le C(n)\operatorname{diam}(\Omega)\|Du\|_{L^p(\Omega)}$ for every $u\in W^{1,p}(\Omega;\mathbb K)$.

Here $u_\Omega=|\Omega|^{-1}\int_\Omega u\,dx$ is the mean of $u$ over $\Omega$,
which is well defined because $\Omega$ is nonempty open and bounded. The proof
below gives the explicit choice
$$C(n)=\frac{2\,(2^n-1)}{n},$$
which depends only on the dimension; no dependence on $p$, on the shape of
$\Omega$, on $|\Omega|$ or on the regularity of $\partial\Omega$ is used.

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge1$; an open, bounded, convex, nonempty set $\Omega\subseteq\mathbb R^n$ with $d:=\operatorname{diam}(\Omega)$; an exponent $1\le p<\infty$; a field $\mathbb K\in\{\mathbb R,\mathbb C\}$; and a class $u\in W^{1,p}(\Omega;\mathbb K)$.

[F1] $W^{1,p}(\Omega;\mathbb K)$ consists of the $L^p(\Omega;\mathbb K)$ classes whose weak first derivatives exist as $L^p$ classes, and $\|Du\|_{L^p(\Omega)}$ is the $L^p$ norm of the weak gradient ([[def-sobolev-space-wkp-and-its-norm]]); an element of $L^p$ is an almost-everywhere equivalence class of measurable representatives ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] The Axiom of Choice is the statement that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); it implies the Axiom of Countable Choice, the statement that every at most countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F3] Under Countable Choice, for every open $U\subset\subset\Omega$ the interior mollifications $u_\varepsilon$ of $u$ satisfy $u_\varepsilon\to u$ in $W^{1,p}(U;\mathbb K)$ as $\varepsilon\to0^+$ ([[thm-local-smooth-approximation-in-wkp]]).

[F4] On a completed sigma-finite product, nonnegative measurable functions may be integrated in either order and the iterated integrals agree, and integrable functions obey the same identity; this is Tonelli-Fubini ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F5] Jensen's inequality: for a probability space, an integrable real function $f$ with values in an interval $I$ and a convex $\varphi$ on $I$ such that $\varphi\circ f\in L^1(\mathbb P)$, one has $\varphi(\int f\,d\mathbb P)\le\int\varphi(f)\,d\mathbb P$ ([[thm-jensens-integral-inequality]]).

[F6] Holder's inequality: for conjugate exponents $p,q$ and measurable real $f,g$ in the corresponding $\mathcal L$-spaces, $\int|fg|\,d\mu\le\|f\|_p\|g\|_q$ ([[thm-holder-inequality-for-integrals]]).

[F7] For a $C^1$ diffeomorphism $T:U\to V$ between open subsets of $\mathbb R^m$ and every nonnegative Borel $h:V\to[0,\infty]$, $\int_Vh(y)\,dy=\int_Uh(T(x))|\det DT(x)|\,dx$, with equality in $[0,\infty]$ and the convention $0\cdot\infty=0$ ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

[F8] If $f:[a,b]\to\mathbb R^m$ is differentiable with integrable derivative then $\int_a^bf'=f(b)-f(a)$ ([[cor-vector-valued-ftc-and-lipschitz-bound]]); if $g\circ f$ is formed from totally differentiable maps then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[F9] Every Euclidean ball has positive finite Lebesgue measure ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]), a measure is monotone under inclusion ([[prop-measure-monotonicity]]), and every bounded subset of $\mathbb R^n$ has finite outer measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F10] Dominated convergence applies to integrable majorants ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Means and integrability. Since $\Omega$ is nonempty and open it contains a Euclidean ball $B\subseteq\Omega$, and [F9] gives $0<\lambda(B)\le\lambda(\Omega)$ by monotonicity; since $\Omega$ is bounded, [F9] gives $|\Omega|<\infty$. Thus $0<|\Omega|<\infty$ and $u_\Omega$ is defined once $u$ is integrable. For $1<p<\infty$ Holder's inequality [F6] with $g=\mathbf 1_\Omega$ gives $\|u\|_1\le|\Omega|^{1-1/p}\|u\|_p<\infty$, and for $p=1$ integrability is immediate; in both cases $u\in L^1(\Omega;\mathbb K)$ and $u_\Omega$ is an element of $\mathbb K$, understood componentwise when $\mathbb K=\mathbb C\cong\mathbb R^2$. [F1, F6, F9, given, algebra]

1.2 The smooth segment inequality. Let $V\subseteq\Omega$ be open and convex and let $v\in C^\infty(V;\mathbb K)\cap W^{1,p}(V;\mathbb K)$. Fix $x,y\in V$ and put $\gamma(t)=x+t(y-x)$ for $t\in[0,1]$; convexity gives $\gamma([0,1])\subseteq V$. By the chain rule [F8], $v\circ\gamma$ is differentiable with $(v\circ\gamma)'(t)=Dv(\gamma(t))(y-x)$, and the vector-valued fundamental theorem [F8] gives $v(x)-v(y)=\int_0^1 Dv(\gamma(t))(x-y)\,dt$. Hence $|v(x)-v(y)|\le|x-y|\int_0^1|Dv(\gamma(t))|\,dt$, and, since $Dv$ is continuous on the compact segment, $|Dv\circ\gamma|^p$ is integrable. Jensen's inequality [F5] applied to the probability measure $dt$ on $[0,1]$ and the convex function $\varphi(s)=s^p$ on $[0,\infty)$ yields $|v(x)-v(y)|^p\le|x-y|^p\int_0^1|Dv(\gamma(t))|^p\,dt$. [F5, F8, given, algebra]

2.1 The first half of the substitution. For $t\in[1/2,1]$ and fixed $x\in V$, the affine diffeomorphism $y\mapsto z=(1-t)x+ty$ has image $(1-t)x+tV\subseteq V$ and inverse Jacobian $t^{-n}$. Bound $|x-y|\le d$ before substituting in [F7]; this gives $\int_V|x-y|^p|Dv((1-t)x+ty)|^p\,dy\le d^pt^{-n}\int_V|Dv|^p$. Integrating over $x\in V$ and $t\in[1/2,1]$ yields $c_n d^p|V|\int_V|Dv|^p$, where $c_n:=\int_{1/2}^1t^{-n}\,dt$. [F4, F7, step 1.2, algebra]

2.2 The second half. For $t\in[0,1/2]$ and fixed $y\in V$, substitute $z=(1-t)x+ty\in V$ in the $x$ integral. The bound $|x-y|\le d$ and [F7] give $\int_V|x-y|^p|Dv((1-t)x+ty)|^p\,dx\le d^p(1-t)^{-n}\int_V|Dv|^p$. Integration over $y$ and $t$, with $s=1-t$, gives the same $c_n d^p|V|\int_V|Dv|^p$. [F4, F7, step 1.2, algebra]

3.1 The mean-zero bound for smooth functions. Adding steps 2.1 and 2.2 and using [F4] to identify the iterated integral over $V\times V\times[0,1]$ of the nonnegative integrand with the sum of its two halves, $$\int_V\int_V|v(x)-v(y)|^p\,dx\,dy\le2c_n\,d^p|V|\int_V|Dv|^p.$$ The normalized Lebesgue measure $dy/|V|$ is a probability measure, so using $|\int h|\le\int|h|$ and scalar Jensen [F5] for $s\mapsto s^p$, with $v_V=|V|^{-1}\int_Vv$, the required integrability holds because $v\in L^p(V)$ implies $|v(x)-v(\cdot)|^p\in L^1(V)$ for every fixed $x$; hence one has $|v(x)-v_V|^p\le|V|^{-1}\int_V|v(x)-v(y)|^p\,dy$ for every $x\in V$, and integrating in $x$ yields $$\int_V|v-v_V|^p\le2c_n\,d^p\int_V|Dv|^p.$$ [F4, F5, step 2.1, step 2.2, algebra]

4.1 Passage to $W^{1,p}$ and to the whole of $\Omega$. Choose open convex sets $V_1\subseteq V_2\subseteq\cdots\subset\subset\Omega$ with $\bigcup_jV_j=\Omega$, for instance $V_j=\{x\in\Omega:\operatorname{dist}(x,\mathbb R^n\setminus\Omega)>1/j\}\cap B(0,j)$. Fix $j$; by [F3] the mollifications $u_\varepsilon$ of $u$ converge to $u$ in $W^{1,p}(V_j;\mathbb K)$ as $\varepsilon\to0^+$, and each $u_\varepsilon$ is smooth on a neighbourhood of $V_j$. Step 3.1 applied to $v=u_\varepsilon$ on the convex set $V_j$, followed by the limits $\|u_\varepsilon-u\|_{L^p(V_j)}\to0$, $\|Du_\varepsilon-Du\|_{L^p(V_j)}\to0$ and $(u_\varepsilon)_{V_j}\to u_{V_j}$ as $\varepsilon\to0^+$, gives $$\int_{V_j}|u-u_{V_j}|^p\le2c_n\,d^p\int_{V_j}|Du|^p\le2c_n\,d^p\int_\Omega|Du|^p.$$ [F1, F2, F3, step 3.1, given, algebra]

5.1 Exhaustion and the constant. Discard the finitely many empty $V_j$. Since $V_j\uparrow\Omega$ and $u\in L^1$, dominated convergence [F10] gives $|V_j|\to|\Omega|$ and $u_{V_j}\to u_\Omega$. The means are bounded; hence $\mathbf1_{V_j}|u-u_{V_j}|^p$ is dominated by $2^{p-1}(|u|^p+\sup_j|u_{V_j}|^p)$ on the finite-measure set $\Omega$. By [F10] it converges in integral to $|u-u_\Omega|^p$, and similarly $\int_{V_j}|Du|^p\to\int_\Omega|Du|^p$. Step 4.1 yields $\|u-u_\Omega\|_p\le(2c_n)^{1/p}d\|Du\|_p$. For $1/2\le t\le1$, $t^{-n}\ge1$ and $t^{-n}\le t^{-n-1}$, so $1\le2c_n\le2\int_{1/2}^1t^{-n-1}\,dt=2(2^n-1)/n$. Thus $(2c_n)^{1/p}\le2c_n\le2(2^n-1)/n$ for every $p\ge1$, proving the stated dimension-only constant. [F10, step 4.1, algebra] ∎

## Source notes

The computation follows Kinnunen's ball proof of the pointwise oscillation estimate and the Poincare inequality, printed pp. 133-136, with the segment argument of Lemma 5.22: the ball is replaced by the convex set, polar coordinates and the maximal function are not needed, and the two halves of the parameter interval carry the substitution from the moving interior point to a fixed one. The constant is not claimed to be sharp; the dimension-only bound is the conclusion used here.

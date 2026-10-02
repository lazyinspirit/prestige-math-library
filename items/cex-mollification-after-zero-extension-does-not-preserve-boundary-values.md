---
id: cex-mollification-after-zero-extension-does-not-preserve-boundary-values
kind: counterexample
title: Mollifying a zero extension leaks across the boundary
status: published
origin: pipeline
deps: [def-wkp-zero-as-a-sobolev-closure, cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-holder-inequality-for-integrals, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, def-axiom-of-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Definition 1.23 and Theorem 1.25
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapter 1 §1.6, Definition 1.23 and Theorem 1.25, printed pp. 21–23
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020), Definition 3.11 and §3.6
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: Chapter 3 §3.5–3.6, printed pp. 59–62
---

## Statement refuted

Smoothing a zero extension does not preserve zero boundary values. Let
$u\equiv1$ on $(0,1)$, let $\chi_{(0,1)}$ be its extension by zero, and let
$\rho\in C_c^\infty(\mathbb R)$ be nonnegative, even, of unit mass, and
supported in $[-1,1]$. For $0<\varepsilon<1/2$ set
$\rho_\varepsilon(x)=\varepsilon^{-1}\rho(x/\varepsilon)$ and
$v_\varepsilon:=(\rho_\varepsilon*\chi_{(0,1)})|_{(0,1)}$.
Then $v_\varepsilon$ is smooth on $(0,1)$ with bounded derivatives, but it has
the one-sided endpoint limits
$$v_\varepsilon(0^+)=v_\varepsilon(1^-)=\tfrac12,$$
and consequently $v_\varepsilon\notin W_0^{1,p}(0,1)$ for every
$1\le p\le\infty$. Thus mollification after zero extension produces a function
with nonzero boundary values. The zero extension itself has jumps at the two
endpoints; convolution smooths those jumps but does not impose zero Sobolev
boundary values on the restriction.

## Facts & Assumptions

**Given:** the Axiom of Choice; the constant $u\equiv1$ on $(0,1)$; its zero extension $\chi_{(0,1)}$; a nonnegative even unit-mass $\rho\in C_c^\infty(\mathbb R)$ supported in $[-1,1]$; a scale $0<\varepsilon<1/2$ and its rescaling $\rho_\varepsilon$; the restriction $v_\varepsilon=(\rho_\varepsilon*\chi_{(0,1)})|_{(0,1)}$; and $1\le p\le\infty$.

[F1] Under Countable Choice (implied by the assumed Axiom of Choice), $W_0^{1,p}(0,1)$ is the closure of $C_c^\infty(0,1)$ in the $W^{1,p}(0,1)$ norm: $w\in W_0^{1,p}(0,1)$ if and only if for every $\delta>0$ there is a test function on $(0,1)$ within $\delta$ of $w$ ([[def-wkp-zero-as-a-sobolev-closure]]).

[F2] Under the assumed Axiom of Choice, every $w\in W^{1,p}(I)$ on a nonempty open interval has exactly one continuous representative $w^*$, which is locally absolutely continuous; if $I=(a,b)$ has finite endpoints then $w'\in L^1(a,b)$, $w^*$ extends uniquely to an absolutely continuous function on $[a,b]$, and $w^*(x)=w^*(a)+\int_a^xw'$ for $x\in[a,b]$ ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F3] Mean-value and endpoint estimate: for the representative of [F2] on $I=(0,1)$ there is $a\in(1/4,3/4)$ with $|w^*(a)|\le2\int_0^1|w|$, and likewise at the endpoint $1$, hence $|w^*(0)|\le2\int_0^1|w|+\int_0^1|w'|$; by Hölder on the finite interval this is at most $C_p\|w\|_{W^{1,p}(0,1)}$ with a constant $C_p$ depending only on $p$ ([[thm-holder-inequality-for-integrals]], [F2]).

[F4] If $\varphi\in C_c^\infty(0,1)$, then the continuous representative of $[F2]$ is $\varphi$ itself and $\varphi(0)=\varphi(1)=0$ by compact support in the open interval. [F2, given]

[F5] For $\chi_{(0,1)}\in L^1(\mathbb R)$, the convolution $\rho_\varepsilon*\chi_{(0,1)}$ is smooth on $\mathbb R$ and equals $\int_{\mathbb R}\chi_{(0,1)}(y)\rho_\varepsilon(x-y)\,dy$; it is the classical convolution of [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]. By the support hypothesis on $\rho$ and its rescaling in [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], $\rho_\varepsilon$ is supported in $[-\varepsilon,\varepsilon]$.

[F6] The zero extension $\chi_{(0,1)}$ does not belong to $W^{1,p}(\mathbb R)$ for any $1\le p\le\infty$ ([[cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump]]).

**Choice use.** The Axiom of Choice licenses the representative interface [F2], including its fundamental-theorem prerequisites. Countable Choice is inherited by the closure and convolution interfaces [F1] and [F5] and selects the sequence of test approximants in step 2.1.

## Counterexample

1.1 The function $v_\varepsilon$ is the restriction to $(0,1)$ of the smooth function $\rho_\varepsilon*\chi_{(0,1)}$ of [F5]; hence $v_\varepsilon$ is smooth on $(0,1)$ with bounded derivatives, so $v_\varepsilon\in W^{1,p}(0,1)$ for every $1\le p\le\infty$. [F5, given]

1.2 Endpoint values. Since $\rho_\varepsilon$ is even, has mass one and is supported in $[-\varepsilon,\varepsilon]$ with $\varepsilon<1/2$, $$v_\varepsilon(0^+)=(\rho_\varepsilon*\chi_{(0,1)})(0)=\int_0^1\rho_\varepsilon(-y)\,dy=\int_0^1\rho_\varepsilon(y)\,dy=\tfrac12,$$ and likewise $v_\varepsilon(1^-)=\int_0^1\rho_\varepsilon(1-y)\,dy=\int_0^1\rho_\varepsilon(z)\,dz=\tfrac12$. [F5, algebra, given]

1.3 The endpoint functional is continuous in the Sobolev norm: every $w\in W^{1,p}(0,1)$ has a representative $w^*$ with $|w^*(0)|\le C_p\|w\|_{W^{1,p}(0,1)}$ as in [F3], so $|w^*(0)|\le C_p\|w\|_{W^{1,p}}$ and $w\mapsto w^*(0)$ is a continuous linear functional on $W^{1,p}(0,1)$. [F2, F3]

2.1 Every element of $W_0^{1,p}(0,1)$ has zero endpoint value: if $w\in W_0^{1,p}(0,1)$ and $\varphi_j\in C_c^\infty(0,1)$ are test functions with $\|\varphi_j-w\|_{W^{1,p}}\to0$ as in [F1], then by step 1.3 and [F4] $$w^*(0)=\lim_j\varphi_j(0)=0,\qquad w^*(1)=\lim_j\varphi_j(1)=0.$$ [F1, F4, step 1.3]

3.1 Suppose $v_\varepsilon\in W_0^{1,p}(0,1)$ for some $1\le p\le\infty$. By step 2.1 its continuous representative satisfies $v_\varepsilon^*(0)=0$; but by step 1.1 the function $v_\varepsilon$ itself is continuous on $(0,1)$ with the endpoint limit of step 1.2, so its unique continuous representative from [F2] has $v_\varepsilon^*(0)=\tfrac12$, a contradiction. Hence $v_\varepsilon\notin W_0^{1,p}(0,1)$ for every $1\le p\le\infty$. [F2, step 1.1, step 1.2, step 2.1]

4.1 Context. The zero extension used here is itself outside $W^{1,p}(\mathbb R)$ by [F6]; the present example isolates the additional failure of boundary values after mollification, namely that $\rho_\varepsilon*\chi_{(0,1)}$ approaches $\tfrac12$ at both endpoints although the original jump function has no values assigned at the endpoints. [F6, step 3.1, given] ∎

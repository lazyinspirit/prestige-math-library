---
id: thm-riemann-lebesgue-lemma-for-continuous-functions
kind: theorem
title: "Riemann–Lebesgue lemma for continuous functions on a compact interval"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-weierstrass-approximation-on-a-closed-interval,
       thm-integration-by-parts, lem-integral-elementary-bounds,
       lem-uniform-integral-error-bound,
       cor-integrability-of-absolute-values-products-and-lattice-operations,
       thm-monotonicity-of-the-integral, thm-linearity-of-the-integral,
       thm-sine-and-cosine-derivatives, thm-chain-rule,
       thm-algebra-of-derivatives, lem-derivative-of-a-power,
       thm-algebra-of-continuous-functions,
       cor-differentiable-implies-continuous,
       thm-continuous-implies-integrable,
       cor-trigonometric-parity-and-pythagorean-identity,
       cor-archimedean-reciprocal, def-real-limit,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: true
short: "continuous Riemann–Lebesgue lemma"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Basic Analysis I, Exercise 5.2.18"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ and let $f:[a,b]\to\mathbb R$ be continuous. For positive integer
$n$, put

$$I_n:=\int_a^b f(t)\sin(nt)\,dt,\qquad J_n:=\int_a^b f(t)\cos(nt)\,dt.$$

Then

$$\lim_{n\to\infty}I_n=0,\qquad \lim_{n\to\infty}J_n=0.$$

In particular, for every continuous $g:[0,\pi]\to\mathbb R$, $\lim_{n\to\infty}\int_0^\pi g(x)\sin(nx)\,dx=0$.

## Facts & Assumptions

**Given:** Reals $a<b$, a continuous $f:[a,b]\to\mathbb R$, and a real $\varepsilon>0$.

[L1] For $a\le b$, every continuous real function on $[a,b]$ is a uniform limit of polynomials ([[cor-weierstrass-approximation-on-a-closed-interval]]).

[L2] If integrable functions $u,v$ satisfy $|u(x)-v(x)|\le\eta$ between endpoints, then $|\int u-\int v|\le\eta$ times the endpoint distance ([[lem-uniform-integral-error-bound]]).

[L3] If $u,v$ are differentiable on $[a,b]$ with integrable derivatives, then $\int_a^buv'=u(b)v(b)-u(a)v(a)-\int_a^bu'v$ ([[thm-integration-by-parts]]).

[L4] The derivative formulas for sine and cosine, together with the chain rule, give $(\sin nt)'=n\cos nt$ and $(\cos nt)'=-n\sin nt$ for positive integers $n$ ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]).

[L5] Polynomials and their derivatives exist by the power and derivative-algebra rules; polynomials are continuous, differentiable functions are continuous, and continuous functions on $[a,b]$ are integrable ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[thm-algebra-of-continuous-functions]], [[cor-differentiable-implies-continuous]], [[thm-continuous-implies-integrable]]).

[L6] Absolute values and products of integrable functions are integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L7] The integral is linear and monotone, and a constant $c$ has integral $c(b-a)$ ([[thm-linearity-of-the-integral]], [[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L8] For every real $\eta>0$ there is a positive integer $N$ with $1/N<\eta$ ([[cor-archimedean-reciprocal]]).

[L9] For every real $x$, $|\sin x|\le1$ and $|\cos x|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L10] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

[L11] If $h$ is integrable on $[a,b]$, then $|\int_a^bh|\le\int_a^b|h|$ ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 3).

[L12] A real sequence converges to zero when, for every positive rational $\varepsilon$, its terms are eventually smaller than $\varepsilon$ in absolute value ([[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a polynomial $p$ with $|f(t)-p(t)|<\varepsilon/(4(b-a))$ for every $t\in[a,b]$. [given, L1, choose]

1.2 Put $C_p:=|p(a)|+|p(b)|+\int_a^b|p'(t)|\,dt$. Using $v(t)=-\cos(nt)/n$ in [L3], and then [L6], [L7], [L9], and [L11], gives $$\left|\int_a^bp(t)\sin(nt)\,dt\right|\le C_p/n.$$ Using $v(t)=\sin(nt)/n$ gives the identical bound for the cosine integral. [L3, L4, L5, L6, L7, L9, L11, algebra]

1.3 Apply [L8] to $\varepsilon/(2(C_p+1))$ and choose a positive integer $N$ with $(C_p+1)/N<\varepsilon/2$. Then $C_p/n<\varepsilon/2$ whenever $n\ge N$. [L8, choose, algebra]

2.1 The functions $f(t)\sin(nt)$ and $p(t)\sin(nt)$ are integrable, and [L2] with [L6] and [L9] gives $$\left|\int_a^b(f(t)-p(t))\sin(nt)\,dt\right|\le\varepsilon/4<\varepsilon/2$$ for every positive integer $n$; the same estimate holds with cosine. [step 1.1, L2, L5, L6, L9, algebra]

3.1 For every $n\ge N$, linearity [L7] splits each integral into its $(f-p)$ part and its $p$ part. Steps 2.1, 1.2, and 1.3 make the absolute value of each integral less than $\varepsilon$, for sine and for cosine. [step 2.1, step 1.2, step 1.3, L7, algebra]

4.1 Since $\varepsilon>0$ was arbitrary, step 3.1 is exactly convergence of both sequences of integrals to zero by [L12]; [L10] permits the substitution $a=0$, $b=\pi$, and $g$ for $f$ in the stated special case. [step 3.1, L10, L12] ∎

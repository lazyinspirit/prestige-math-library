---
id: thm-kuehn-weighted-prime-translate-sieve
kind: theorem
title: "Kuhn weighted-sieve lower bound for prime translates"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-chen-kuehn-weighted-sifted-sum
  - lem-chen-singular-series-specialization
  - lem-uniform-sharp-linear-sieve-for-prime-translates
  - lem-geometric-convergence-to-the-optimal-linear-sieve-functions
  - thm-choice-free-siegel-walfisz-from-mobius-cancellation
  - thm-logarithm-slower-than-every-positive-power
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H.-E. Richert, Lectures on Sieve Methods, Chapter 12, Theorem 12.2 (full-text copy hosted by the University of Toledo)"
      url: "https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf"
    - title: "Heini Halberstam, A proof of Chen's theorem, Section 1"
      url: "https://www.numdam.org/item/AST_1975__24-25__281_0.pdf"
proof_strategy: direct
axiom_use: Actual unqualified sharp prime-translate sieve with its proved quantitative error; finite weighted sums and proper partial summation, no choice hypothesis.
---

## Statement

Let $x$ be sufficiently large, let $h$ be an even integer with
$0<|h|\le x$, and let $u,v,\lambda$ be fixed real numbers satisfying
$2<u<v$, $4\le v\le8$, and $\lambda\ge2$. Let
$\mathfrak S_{\rm pair}(h)=2C(h)$ be the ordinary two-prime singular series
for the shifts $\{0,h\}$, and let $W_h(x;u,v,\lambda)$ be the weighted
sifted sum that assigns weight

$$1-\frac1\lambda\#\{q\text{ prime}:q\nmid h, x^{1/v}\le q<x^{1/u},\ q\mid |p+h|\}$$

to each prime $p\le x$ for which $p+h\ne0$ and $|p+h|$ has no prime divisor
$q\nmid h$ below $x^{1/v}$. There are constants $K_{u,v},x_0(u,v)>0$ such
that, for every $x\ge x_0(u,v)$ and every such $h$,

$$W_h(x;u,v,\lambda)\ge \frac{4\mathfrak S_{\rm pair}(h)x}{(\log x)^2} \left(\log\left(\frac v2-1\right) -\frac1\lambda\log\left(\frac{v-2}{u-2}\right) -\frac{K_{u,v}}{(\log x)^{1/15}}\right).$$

## Statement references

[[def-chen-kuehn-weighted-sifted-sum]]

[[lem-uniform-sharp-linear-sieve-for-prime-translates]]

Richert, *Lectures on Sieve Methods*, Theorem12.2, printed p159; the sharp-function convergence and uniform arithmetic transfer are locally proved suppliers, not imported sieve theorems.

## Facts & Assumptions

**Given:** Exactly the original fixed parameters $2<u<v$, $4\le v\le8$, $\lambda\ge2$ and the nonzero even integer $h$ with $|h|\le x$.

[F1] [[def-chen-kuehn-weighted-sifted-sum]] defines the finite distinct-divisor Kuhn weight, its half-open prime interval and the full untruncated prime-translate sum.

[F2] [[lem-uniform-sharp-linear-sieve-for-prime-translates]] supplies the sharp $F,f$ bounds at $D=x^{1/2}(\log x)^{-1000}$, uniform in the growing even shift and permitted rough fixed factor, with relative $O((\log x)^{-1/15})$ and fixed $3^{\omega(d)}$ remainder coefficients. Its global $\tau^3$ remainder sum is $O(x(\log x)^{-20})$, and its stated normalization is $V_h(z)=2e^{-\gamma}C(h)(\log z)^{-1}(1+O((\log x)^{-1}))$.

[F3] [[lem-geometric-convergence-to-the-optimal-linear-sieve-functions]] supplies the locally constructed functions, including $f(s)=0$ below two, $f(s)=2e^\gamma\log(s-1)/s$ for $2\le s\le4$, and $F(s)=2e^\gamma/s$ for $0<s\le3$.

[F4] [[lem-chen-singular-series-specialization]] gives $\mathfrak S_{\rm pair}(h)=2C(h)$ and $C(h)\ge C(2)>0$. [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] at modulus one supplies the prime harmonic partial-summation asymptotics with every fixed logarithmic saving. [[thm-logarithm-slower-than-every-positive-power]] absorbs $\log\log x/\log x$ in $(\log x)^{-1/15}$ and every fixed endpoint power error.

## Proof

1.1 Put $L=\log x$, $z=x^{1/v}$, $y=x^{1/u}$ and $c=e^\gamma$. The exact finite distinct-divisor identity is [F1, given, algebra]
$$W_h(x;u,v,\lambda)=S_h(1,z)-\frac1\lambda\sum_{\substack{z\le p<y\\p\nmid h}}S_h(p,z).$$
It holds for all repeated prime factors, negative translates and all eligible endpoint conventions in the Definition, since divisibility of $|p+h|$ is the same as divisibility of $p+h$ and the zero translate is excluded throughout. With the level in [F2], the first argument is $s=v/2-1000v\log L/L$. For each subtracted prime its argument is $s_p=v/2-v\log p/L-1000v\log L/L$. Since $u>2$, their limiting range $[v(1/2-1/u),v/2-1]$ is a compact positive interval. Also $\log(D/p)\ge\tfrac12(1/2-1/u)L$ for large $x$. Thus every stated range condition of [F2] is met with constants depending only on $u,v$; $\lambda$ does not enter their choice. [F1, F2, given, algebra]

2.1 Use the LOWER sieve bound on $S_h(1,z)$ and the UPPER bound on every subtracted term. When $v=4$ the first actual argument is below two and its lower bound zero is exact; the limiting sharp value $f(2)$ is also zero. For other $v$ the lower argument is eventually above two. The first remainder has weight at most $\tau^2$. Summing the prime-factor remainders adds at most one divisor factor, because a final modulus has at most $\omega(d)\le\tau(d)$ possible designated prime divisors. Hence their entire contribution is $O(xL^{-20})$ by [F2], uniformly even as $h$ varies. The functions in [F3] are Lipschitz on the fixed argument ranges needed here, including the zero extension of $f$ at two, so replacing each actual argument by its limiting value costs $O_{u,v}(\log L/L)$. This is smaller than $L^{-1/15}$. No logarithmic-modulus or choice-qualified distribution premise is substituted. [F2, F3, F4, step 1.1, algebra]

3.1 Unqualified modulus-one partial summation from [F4] gives the harmonic prime measure $dt/t$ for $t=\log p/L$ on $[1/v,1/u]$, with $O_{u,v}(L^{-1})$ cumulative error. Replacing $1/(p-1)$ by $1/p$ costs a power saving. Deleting primes dividing $h$ does likewise uniformly: there are at most $v$ of them above $x^{1/v}$, so their reciprocal sum is at most $v x^{-1/v}$. Finite summation by parts with the bounded-variation function $F(v/2-vt)$ now gives [F2, F3, F4, step 2.1, algebra]
$$W_h(x;u,v,\lambda)\ge\frac{2v C(h)x}{cL^2}\left[f(v/2)-\frac1\lambda\int_{1/v}^{1/u}\frac{F(v/2-vt)}t\,dt-O_{u,v}(L^{-1/15})\right].$$
Here $X=\operatorname{li}(x)=xL^{-1}(1+O(L^{-1}))$ and the normalization in [F2] were used. The endpoint prime choices alter the partial-summation estimates by at most $O_{u,v}(x^{-1/v})$. The absolute remainder is absorbed because $C(h)\ge C(2)>0$. All error constants are uniform for $\lambda\ge2$, since every subtracted error is multiplied by $1/\lambda\le1/2$. [F2, F3, F4, step 2.1, algebra]

4.1 The range $4\le v\le8$ is exactly what permits the explicit branches in [F3]: $v/2\in[2,4]$ and $0<v/2-vt\le v/2-1\le3$ on the integral. Substitution and elementary partial fractions therefore give [F3, F4, step 3.1, algebra]
$$f(v/2)=\frac{4c}{v}\log(v/2-1),\qquad \int_{1/v}^{1/u}\frac{F(v/2-vt)}t\,dt=\frac{4c}{v}\log\frac{v-2}{u-2}.$$
For the second equality integrate $2c/[vt(1/2-t)]$ and evaluate the two positive endpoints; no singular endpoint occurs because $u>2$. Multiplying the bracket in step3.1 by $2v/c$ gives $8C(h)=4\mathfrak S_{\rm pair}(h)$ times exactly the two logarithms in the original Statement. Increase one positive constant $K_{u,v}$ to cover the fixed uniform error constants and choose $x_0(u,v)$ covering their large-$x$ thresholds. Neither depends on $\lambda$ or $h$. This proves the entire original optimal bracket, its stated logarithmic error, and its full uniform shift and parameter scopes. [F3, F4, step 3.1, algebra] ∎

## Reconstruction limits

The old source route through choice-qualified SW/BV is historical and unused. The active sharp-function and arithmetic suppliers were reconstructed locally, including the previously omitted optimal-limit convergence and growing-depth error estimate. No source theorem or external finite computation is imported. The original Statement, its uniform $h$, every $\lambda\ge2$, and its exact $1/15$ exponent are retained.

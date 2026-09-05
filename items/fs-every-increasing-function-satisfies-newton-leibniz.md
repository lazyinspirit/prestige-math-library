---
id: fs-every-increasing-function-satisfies-newton-leibniz
kind: false-statement
title: "FALSE: every increasing function satisfies Newton-Leibniz with its derivative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-singular-function, thm-cantor-function-properties, thm-cantor-set-properties, thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions, thm-the-lebesgue-integral-respects-almost-everywhere-equality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Statement

For every increasing $F : [a,b] \to \mathbb{R}$,

$$
\int_a^b F'(x)\,d\lambda(x) = F(b)-F(a).
$$

## Facts & Assumptions

**Given:** The statement above.

[A1] We refute it with a strictly increasing singular function on $[0,1]$.

## Refutation

**Proof technique:** direct.

1.1 Enumerate all closed rational intervals $I_n=[u_n,v_n]$ with $0 \le u_n < v_n \le 1$. Let $c:[0,1]\to\mathbb R$ be the Cantor function of [[thm-cantor-function-properties]]. For each $n$, let $c_n$ be the function that is $0$ on $[0,u_n]$, is $1$ on $[v_n,1]$, and on $[u_n,v_n]$ is the affine rescaling of $c$. Then each $c_n$ is continuous, nondecreasing, and takes values in $[0,1]$. [given, choose]
$$S(x):=\sum_{n \ge 1} 2^{-n-1} c_n(x).$$
The series converges uniformly because each summand is bounded by $2^{-n-1}$, so $S$ is continuous and nondecreasing. [given, choose]

2.1 If $x<y$, choose a rational interval $I_n$ with $x<u_n<v_n<y$. Then $c_n(x)=0$ and $c_n(y)=1$, so $S(y)-S(x)\ge 2^{-n-1}>0$. Hence $S$ is strictly increasing. For each $n$, the derivative of $c_n$ is $0$ almost everywhere because off the scaled Cantor set inside $I_n$ the function is locally constant by [[thm-cantor-function-properties]], and that scaled Cantor set is null because the Cantor set is null by [[thm-cantor-set-properties]]. Since each $c_n$ is nondecreasing, [[thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions]] applies and gives $S'(x)=\sum_{n \ge 1} 2^{-n-1}c_n'(x)=0$ almost everywhere. Together with step 1.1, [[def-singular-function]] shows that $S$ is a singular function. [step 1.1]

3.1 Therefore $$\int_0^1 S'(x)\,d\lambda(x)=0$$ by [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], while strict increase gives $S(1)-S(0)>0$. Hence Newton-Leibniz fails for this increasing function, and the statement is false. [step 2.1] ∎

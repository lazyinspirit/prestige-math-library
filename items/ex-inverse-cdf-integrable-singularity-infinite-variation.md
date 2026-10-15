---
id: ex-inverse-cdf-integrable-singularity-infinite-variation
kind: example
title: "An inverse-CDF singularity can be integrable but have infinite variation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-hardykrause-variation
  - thm-koksma-hlawka-integration-bound
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-change-of-variables-for-expectation
  - def-cumulative-distribution-function-of-a-random-variable
  - def-rational-power
  - lem-rational-power-laws
  - lem-power-monotone
  - lem-of-inverse-positive
  - lem-of-square-monotone
  - def-ordered-field
  - thm-of-square-roots
  - def-borel-sigma-algebra
  - def-measurable-function-between-measurable-spaces
  - def-random-element-and-real-random-variable
  - def-probability-measure
  - thm-seven-generators-of-the-borel-sigma-algebra-on-r
  - thm-composition-with-borel-functions-preserves-measurability
  - lem-geometric-sequence-null
  - cor-layer-cake-formulas-for-random-variables
  - thm-improper-p-test-rational
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 §15.11"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapter 2 §2.2"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
---

## Example

Let $U$ have the uniform law on $[0,1)$ and define $g(u)=(1-u)^{-1/2}$ for $0\le u<1$. Extend $g$ to the closed cube by setting $g(1)=0$; this endpoint convention does not change $g(U)$. The map $g$ has distribution function $F_X(x)=0$ for $x<1$ and $F_X(x)=1-x^{-2}$ for $x\ge1$, and satisfies $F_X(g(u))=u$ for all $0\le u<1$ (the inverse-CDF property in this example). Its expectation is finite, but $V_{HK,1}(g)=\infty$, so the Koksma–Hlawka bound gives no finite error guarantee for this integrand.

## Facts & Assumptions
**Given:** A real random variable $U$ with the uniform probability law on $[0,1)$, represented by the identity map on $([0,1),\mathcal B([0,1)),\mathbb P_U)$.

[A1] For $0\le a<1$, $\mathbb P_U(U\le a)=a$; thus $\mathbb P_U(U>a)=1-a$.

[F1] A real random variable is a measurable map into $\mathbb R$ with its Borel sigma-algebra. ([[def-random-element-and-real-random-variable]], [[def-borel-sigma-algebra]])

[F2] A map between measurable spaces is measurable when the preimage of every measurable target set is measurable. ([[def-measurable-function-between-measurable-spaces]])

[F3] The half-lines $(-\infty,x]$ generate the Borel sigma-algebra of $\mathbb R$. ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]])

[F4] A measurable function composed with a random element is measurable. ([[thm-composition-with-borel-functions-preserves-measurability]])

[F5] The cumulative distribution function of a real random variable is $F_X(x)=\mathbb P(X\le x)$. ([[def-cumulative-distribution-function-of-a-random-variable]])

[F6] For $a>0$, $a^{-1/2}=1/\sqrt a$, the square root is the unique nonnegative root, squaring preserves nonstrict order on nonnegative reals, and taking reciprocals reverses positive order; the equality case follows from trichotomy. ([[def-rational-power]], [[lem-rational-power-laws]], [[thm-of-square-roots]], [[lem-of-square-monotone]], [[lem-of-inverse-positive]], [[def-ordered-field]])

[F7] For every positive integer $n$, $0<(1/2)^n<1$, and $(1/2)^n\to0$. ([[lem-power-monotone]], [[lem-geometric-sequence-null]])

[F8] The expectation of a nonnegative random variable is its extended Lebesgue integral. ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]])

[F9] For a measurable $h\ge0$, $\mathbb E[h(U)]=\int h\,d\mathbb P_U$. ([[thm-change-of-variables-for-expectation]])

[F10] For nonnegative $X$, $\mathbb E[X]=\int_0^\infty\mathbb P(X>t)\,dt$. ([[cor-layer-cake-formulas-for-random-variables]])

[F11] For rational $p>1$, $\int_1^\infty t^{-p}\,dt=1/(p-1)$. ([[thm-improper-p-test-rational]])

[F12] In dimension one, upper-anchor Hardy–Krause variation is ordinary total variation. ([[def-hardykrause-variation]])

[F13] Koksma–Hlawka applies to a finite nonempty point multiset and requires finite upper-anchor Hardy–Krause variation. ([[thm-koksma-hlawka-integration-bound]])

## Proof

1.1 On $[0,1)$ define $g(u)=(1-u)^{-1/2}$. Since $0<1-u\le1$, [F6] gives $g(u)\ge1$. For $x<1$, the sublevel set $\{u:g(u)\le x\}$ is empty. For $x\ge1$, [F6] gives $g(u)\le x$ exactly when $x^{-2}\le1-u$, so this sublevel set is $[0,1-x^{-2}]$ (with the endpoint interpreted inside $[0,1)$). Each such set is Borel. Since the half-lines in [F3] generate the target Borel sigma-algebra and preimages commute with complements and countable unions, [F2] shows that $g$ is measurable. Thus $X:=g(U)$ is a real random variable by [F1] and [F4]. [given, F1, F2, F3, F4, F6, construct]

1.2 For $n\ge1$ put $u_n=1-2^{-2n}$. By [F7], $0<u_n<1$. The unique nonnegative square root of $(2^{-n})^2$ is $2^{-n}$, so [F6] gives $g(u_n)=2^n$. Given $M>0$, choose $n$ with $2^{-n}<2/(M+1)$ using [F7]; then $g(u_n)>(M+1)/2$. The grid with knots $0<u_n<1$ has variation at least $|g(u_n)-g(0)|+|g(1)-g(u_n)|=2g(u_n)-1>M$. Hence $V_{HK,1}(g)=\infty$ by [F12]. [F6, F7, F12, given, choose]

2.1 By [F5] and [A1], the distribution function of $X$ is $F_X(x)=0$ for $x<1$ and $F_X(x)=1-x^{-2}$ for $x\ge1$. For each $u<1$, $F_X(g(u))=1-(g(u))^{-2}=u$, so $g$ is the inverse-CDF transform on $[0,1)$. [A1, F5, F6, step 1.1, algebra]

2.2 For $0\le t<1$, $X\ge1$ gives $\mathbb P(X>t)=1$. For $t\ge1$, [F6] gives $X>t$ exactly when $U>1-t^{-2}$, and [A1] then gives $\mathbb P(X>t)=t^{-2}$. By [F8], [F10], and [F11] with $p=2$, $\mathbb E[X]=\int_0^1 1\,dt+\int_1^\infty t^{-2}\,dt=1+1=2$. [A1, F6, F8, F10, F11, step 1.1]

3.1 By [F9], change of variables for expectation applied to the measurable nonnegative $g$ and random element $U$ identifies $\mathbb E[X]$ with $\int g\,d\mathbb P_U$. By [F8] and step 2.2 this value is finite and equals $2$. [F8, F9, step 1.1, step 2.2]

4.1 The expectation is finite by step 3.1, but the integrand has infinite upper-anchor variation by step 1.2. Therefore the finite-variation hypothesis in [F13] fails, so Koksma–Hlawka yields no finite error bound for this integrand. [F13, step 3.1, step 1.2] ∎

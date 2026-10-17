---
id: lem-fundamental-theorem-and-integration-by-parts
kind: lemma
title: The fundamental theorem of calculus and integration by parts
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-continuity-and-derivative-on-real-interval, lem-continuous-functions-riemann-integrable, lem-riemann-integral-linearity, lem-derivative-algebra-and-chain-rules, lem-mean-value-theorem-on-closed-interval]
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 18: Integrable Functions"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec18.pdf"
    - title: "Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §5.3"
      url: "https://www.jirka.org/ra/realanal.pdf"
---

## Statement

Let $a,b$ lie in an open interval $J$, and let $f$ be continuously
differentiable on $J$. Then
$$
\int_a^b f'(t)\,dt=f(b)-f(a).
$$
If $f,g$ are continuously differentiable on $J$, then
$$\int_a^b f(t)g'(t)\,dt =f(b)g(b)-f(a)g(a)-\int_a^b f'(t)g(t)\,dt.$$
Both identities hold for oriented endpoints.

## Facts & Assumptions

**Given:** The difference-quotient definition of derivative, the local
oriented integral of continuous functions, linearity of that integral, the
product rule, and the closed-interval mean value theorem.

[F1] [[def-continuity-and-derivative-on-real-interval]]: continuous
differentiability on an open interval includes existence and continuity of
the derivative.

[L1] [[lem-continuous-functions-riemann-integrable]]: for continuous $h$,
$H(x)=\int_a^x h(t)\,dt$ is defined and $H'(x)=h(x)$; the integral is
additive and oriented.

[L2] [[lem-riemann-integral-linearity]]: the integral of a sum is the sum of
the integrals.

[L3] [[lem-derivative-algebra-and-chain-rules]]: differentiability implies
continuity and $(fg)'=f'g+fg'$.

[L4] [[lem-mean-value-theorem-on-closed-interval]]: a continuous function on
$[a,b]$ differentiable on $(a,b)$ satisfies the mean value theorem.

## Proof

1.1 Assume first $a<b$ and let $H(x)=\int_a^x f'(t)\,dt$. By [L1], $H'(x)=f'(x)$ on an open interval containing $[a,b]$, and $H(a)=0$. By [L3], $H$ is continuous there. Thus $q=f-H$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $q'=0$. Applying [L4] gives $q(b)-q(a)=0$, so $f(b)-H(b)=f(a)$. Rearranging proves the first identity. [given, F1, L1, L3, L4, construct, algebra]

1.2 For $a=b$ the first identity is $0=0$; reversing endpoints proves it for $a>b$. [L1, algebra]

2.1 Assume $a<b$. By [L3], $(fg)'=f'g+fg'$. These terms are continuous: for continuous $u,v$, $$|u(t)v(t)-u(t_0)v(t_0)| \le |u(t)|\,|v(t)-v(t_0)|+|v(t_0)|\,|u(t)-u(t_0)|,$$ and continuity of $u$ bounds $|u(t)|$ near $t_0$. Thus $fg$ is continuously differentiable. Apply step 1.1 to $fg$ and then [L2]: $$f(b)g(b)-f(a)g(a)=\int_a^b(f'g+fg') =\int_a^b f'g+\int_a^b fg'.$$ Rearranging gives the second identity. For $a=b$ both sides are zero, and for $a>b$ reverse endpoints using [L1]. [step 1.1, step 1.2, L1, L2, L3, algebra] ∎


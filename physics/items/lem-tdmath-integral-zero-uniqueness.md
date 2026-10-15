---
id: lem-tdmath-integral-zero-uniqueness
kind: lemma
title: Zero-start integral inequality
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: [def-darboux-integral, thm-continuous-implies-integrable, thm-algebra-of-derivatives, thm-chain-rule, cor-mean-value-theorem, thm-derivative-of-exponential]
dependency_roles:
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §III.C"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Appendix 9.9, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: pass
---

## Statement

Use the Darboux integral on nondegenerate intervals and the convention $\int_a^a f=0$. Let $L\ge0$, $T>0$, and let $f:[0,T]\to[0,\infty)$ be continuous. If $f(t)\le L\int_0^t f(s)\,ds$ for every $t\in[0,T]$, then $f(t)=0$ for every $t\in[0,T]$.

## Facts & Assumptions

**Given:** A nonnegative continuous function and the stated integral inequality.

[F1] [[thm-continuous-implies-integrable]]: a continuous function on a compact interval is Riemann integrable.

[F2] [[thm-algebra-of-derivatives]], [[thm-chain-rule]], and [[cor-mean-value-theorem]]: the product rule, chain rule, and mean value theorem apply to the displayed differentiable real functions.

[F3] [[thm-derivative-of-exponential]]: $(e^x)'=e^x$ for every real $x$.

[F4] [[def-darboux-integral]]: a Riemann/Darboux integrable real function is bounded.

## Proof

1.1 For a continuous function on $[a,b]$, the Darboux definition gives $m(b-a)\le\int_a^b f\le M(b-a)$ whenever $m\le f\le M$, because every lower and upper sum has these bounds. For $a<c<b$, concatenating partitions of $[a,c]$ and $[c,b]$ adds both their lower sums and their upper sums. By integrability [F1], choose on each interval a lower sum within $\eta$ of its integral and an upper sum within $\eta$ of its integral, and refine these finitely many partitions together. The concatenated sums sandwich $\int_a^b f$ within $2\eta$ of $\int_a^c f+\int_c^b f$; letting $\eta\downarrow0$ proves additivity. This also holds when $c$ is an endpoint under the zero-interval convention. Define reversed integrals by $\int_b^a f=-\int_a^b f$. By [F1], the integral defining $h(t)=\int_0^t f(s)\,ds$ exists. Continuity of $f$ gives $h'(t)=f(t)$ on $(0,T)$: the difference quotient error is bounded by $\sup_{|s-t|\le|r|}|f(s)-f(t)|$, which tends to zero as $r\to0$. By [F4], choose a finite $M$ with $0\le f\le M$. Then $|h(t)-h(s)|=|\int_s^t f|\le M|t-s|$ for all $s,t\in[0,T]$, which proves continuity at the endpoints as well as in the interior. The hypothesis gives $h'\le Lh$, so [F2]–[F3] yield $g'(t)\le0$ for $g(t)=e^{-Lt}h(t)$ on $(0,T)$. The mean value theorem makes $g$ nonincreasing; since $g(0)=0$ and $g\ge0$, $g\equiv0$ and $h\equiv0$. [given, F1, F2, F3, F4, algebra]

2.1 For any $t>0$, the nonnegative continuous function $f$ has integral $h(t)=0$. If $f(t_0)>0$ at any $t_0>0$, continuity gives a positive lower bound on a nonempty subinterval of $[0,t_0]$, contradicting $h(t_0)=0$. At $t=0$ the assumed inequality gives $f(0)\le0$; nonnegativity gives $f(0)=0$. Hence $f\equiv0$. [step 1.1, given] ∎

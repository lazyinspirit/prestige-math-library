---
id: lem-riemann-integral-linearity
kind: lemma
title: The oriented Riemann integral is linear in continuous integrands
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: outward-rounded-interval-and-ball-arithmetic
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-continuous-functions-riemann-integrable]
sources:
  references:
    - title: "Michael C. Colding, MIT 18.100B Real Analysis, Lecture 18: Integrable Functions"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec18.pdf"
    - title: "Jiří Lebl, Basic Analysis: Introduction to Real Analysis, Volume I, §5.2.4"
      url: "https://www.jirka.org/ra/realanal.pdf"
---

## Statement

Let $f,g$ be continuous on $[a,b]$, $a<b$, and let $\alpha,\beta\in\mathbb R$.
Then $\alpha f+\beta g$ is continuous and
$$\int_a^b(\alpha f(t)+\beta g(t))\,dt =\alpha\int_a^b f(t)\,dt+\beta\int_a^b g(t)\,dt.$$
The same identity holds for the oriented integral when $b<a$, and for the
zero-length interval both sides are zero.

## Facts & Assumptions

**Given:** Continuous real functions on finite intervals and the Darboux
construction in [[lem-continuous-functions-riemann-integrable]].

[L1] [[lem-continuous-functions-riemann-integrable]]: the integral is the
common supremum of lower sums and infimum of upper sums; a common refinement
increases lower sums and decreases upper sums.

## Proof

1.1 On each partition interval, the maximum of $f+g$ is at most the sum of the separate maxima, while its minimum is at least the sum of the separate minima. Thus $U(f+g,P)\le U(f,P)+U(g,P)$ and $L(f+g,P)\ge L(f,P)+L(g,P)$. Given $\varepsilon>0$, choose partitions whose upper sums for $f,g$ are within $\varepsilon/2$ above their infima, and refine both to a common partition $P$. By [L1], refinement cannot increase those upper sums, so $\int_a^b(f+g)\le U(f+g,P)<\int_a^b f+\int_a^b g+\varepsilon$. Similarly choose lower sums within $\varepsilon/2$ below their suprema and refine to a common partition; [L1] gives $\int_a^b(f+g)\ge L(f+g,P)>\int_a^b f+\int_a^b g-\varepsilon$. Since this holds for every $\varepsilon>0$, the integral is additive in the integrand. [given, L1, choose, construct, algebra]

2.1 If $\alpha>0$, maxima and minima of $\alpha f$ on every partition piece are $\alpha$ times those of $f$, so both Darboux sums scale by $\alpha$ and their infimum/supremum do as well. If $\alpha=0$, every sum is zero. If $\alpha<0$, multiplication reverses order, giving $U(\alpha f,P)=\alpha L(f,P)$ and $L(\alpha f,P)=\alpha U(f,P)$; taking the infimum and supremum, which reverse under multiplication by negative $\alpha$, again gives $\int_a^b\alpha f=\alpha\int_a^b f$. Combine this homogeneity with step 1.1 to obtain the displayed formula. For reversed endpoints use $\int_b^a=-\int_a^b$; for $a=b$ use the zero-length definition. [given, L1, step 1.1, algebra] ∎


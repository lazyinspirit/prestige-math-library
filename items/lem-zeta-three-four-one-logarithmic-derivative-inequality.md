---
id: lem-zeta-three-four-one-logarithmic-derivative-inequality
title: "Zeta three four one logarithmic derivative inequality"
kind: lemma
status: draft
origin: pipeline
deps: [thm-von-mangoldt-logarithmic-derivative-zeta]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a76.1, proof of Theorem 6.6 invoking Lemma 6.5"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

For $\sigma>1$ and $t\in\mathbb R$,
$$-3\frac{\zeta'(\sigma)}{\zeta(\sigma)}-4\operatorname{Re}\frac{\zeta'(\sigma+it)}{\zeta(\sigma+it)}-\operatorname{Re}\frac{\zeta'(\sigma+2it)}{\zeta(\sigma+2it)}\ge0.$$

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-von-mangoldt-logarithmic-derivative-zeta]]: For $\Re s>1$, if $\zeta(s):=\sum_{n \ge 1} n^{-s},$ then $-\frac{\zeta'(s)}{\zeta(s)} = \sum_{n \ge 1} \Lambda(n)n^{-s}.$

## Proof

1.1 The negative logarithmic derivative has coefficients $\Lambda(n)\ge0$. Its series is absolutely convergent for $\sigma>1$ (also $\Lambda(n)\le\log n$), so the displayed expression equals $\sum_{n\ge1}\Lambda(n)n^{-\sigma}[3+4\cos(t\log n)+\cos(2t\log n)]$. [F1]

2.1 For real $u$, $3+4\cos u+\cos(2u)=2(1+\cos u)^2\ge0$. Every summand is nonnegative, so the convergent sum is nonnegative. [step 1.1, algebra] ∎

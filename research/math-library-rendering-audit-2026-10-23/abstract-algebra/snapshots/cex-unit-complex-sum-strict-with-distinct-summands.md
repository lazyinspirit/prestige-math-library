---
id: cex-unit-complex-sum-strict-with-distinct-summands
kind: counterexample
title: "Distinct unit summands need not attain the sum bound"
status: published
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [lem-equality-case-for-a-finite-sum-of-unit-complex-numbers]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
---

## Statement refuted

The assertion “for all $n>0$ and all unit complex numbers $z_1,\ldots,z_n$, $|\sum_i z_i|=n$” is false.

## Facts & Assumptions

**Given:** The universal equality assertion for unit complex summands.

[F1] The upper bound is attained exactly when all unit summands agree ([[lem-equality-case-for-a-finite-sum-of-unit-complex-numbers]]).

## Counterexample

**Proof technique:** direct.

1.1 Take $n=2$, $z_1=1$ and $z_2=-1$ in $\mathbb C$. Their moduli are $\sqrt{1^2+0^2}=1$ and $\sqrt{(-1)^2+0^2}=1$, so both satisfy the unit-modulus hypothesis and $n>0$. [given, algebra]

2.1 Their sum is $1+(-1)=0$, whose modulus is zero. Consequently $|z_1+z_2|=0<2=n$, so this instance fails the asserted equality and refutes its universal quantifier. The summands are distinct, in agreement with F1. [step 1.1, F1, algebra] ∎

## Sources

[Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Lemma 5.4.5 proof, p. 101, motivates the strictness interface. The pair $1,-1$ is the locally specified counterexample.

---
id: lem-qc-dyadic-cyclotomic-conjugate-norm
kind: lemma
title: Conjugate norms from the dyadic eighth-cyclotomic ring are real dyadics
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - lem-qc-dyadic-coefficient-encoding
  - lem-qc-sqrt-two-divisibility-criterion
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 2
---

## Statement

Let $D=\mathbb Z[\omega,1/2]$ and
$D_+=\mathbb Z[\sqrt2,1/2]\subseteq\mathbb R$. For every $z\in D$, its
complex-conjugate norm satisfies $z^\dagger z\in D_+$. More precisely, if
$z=(a_0+a_1\omega+a_2\omega^2+a_3\omega^3)/2^r$ is its canonical encoding,
then
$$z^\dagger z=\frac{P+\sqrt2Q}{2^{2r}},\quad P=\sum_{j=0}^3a_j^2,\quad Q=a_0(a_1-a_3)+a_2(a_1+a_3).$$

## Facts & Assumptions

**Given:** $\omega=e^{i\pi/4}$, $\sqrt2=\omega-\omega^3$, $z\in D$, and
scalar adjoint means complex conjugation: $z^\dagger=\bar z$.

[F1] [[lem-qc-dyadic-coefficient-encoding]]: every $z\in D$ has a canonical
power-basis numerator over a power $2^r$.

[F2] [[lem-qc-sqrt-two-divisibility-criterion]]: for
$a=a_0+a_1\omega+a_2\omega^2+a_3\omega^3\in O$,
$a^\dagger a=P+\sqrt2Q$ with the displayed integer forms $P,Q$.

## Proof


1.1 Write $z=a/2^r$ using [F1]. Since $2^r$ is real, $z^\dagger z=(a^\dagger a)/2^{2r}$. [F1, given, algebra]

2.1 Substituting the exact norm formula from [F2] gives $z^\dagger z=(P+\sqrt2Q)/2^{2r}$. Both coefficients are dyadic rationals, so this element lies in $D_+=\mathbb Z[\sqrt2,1/2]$ and has the claimed form. [F2, step 1.1, algebra] ∎


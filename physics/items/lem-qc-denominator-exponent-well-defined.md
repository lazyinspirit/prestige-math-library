---
id: lem-qc-denominator-exponent-well-defined
kind: lemma
title: Denominator exponent is a well-defined integer
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-dyadic-cyclotomic-ring
  - lem-qc-dyadic-coefficient-encoding
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
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 2
---

## Statement

For every nonzero $z\in D$, the set
$\{k\in\mathbb Z:(\sqrt2)^kz\in O\}$ is nonempty and bounded below, hence
has a least integer.

## Facts & Assumptions

**Given:** $z\ne0$ has the canonical form $z=(a_0+a_1\omega+a_2\omega^2+a_3\omega^3)/2^r$ with $r\ge0$.

[F1] [[lem-qc-dyadic-coefficient-encoding]]: the canonical numerator has integer coefficients, is not all even when $r>0$, and is nonzero.

## Proof


1.1 Since $(\sqrt2)^{2r}=2^r$, multiplying $z$ by $(\sqrt2)^{2r}$ gives its canonical numerator in $O$. Hence the exponent set is nonempty. [F1, given, algebra]

1.2 Suppose $k=-m<0$ belongs to that set, so $z=(\sqrt2)^m y$ for some $y\in O$. Then the numerator $a=2^rz=(\sqrt2)^{m+2r}y=2^q(\sqrt2)^\epsilon y$, where $q=\lfloor(m+2r)/2\rfloor$ and $\epsilon\in\{0,1\}$. Multiplication by $\sqrt2$ has integer coefficients in the power basis, so all coefficients of $a$ are divisible by $2^q$. Choose a nonzero coefficient $a_j$; its finite $2$-adic valuation bounds $q$ above, and therefore bounds $m$ above. Thus the negative exponents in the set are bounded below; nonnegative exponents already are. [F1, given, choose, algebra]

2.1 A nonempty subset of $\mathbb Z$ bounded below has a least element. Hence the set of clearing exponents has a least integer; this does not assume that the least exponent is nonnegative. [step 1.1, step 1.2, algebra] ∎

## Remarks

For $z=0$ the exponent set is all of $\mathbb Z$ and has no least element;
that is why the definition assigns $-\infty$ separately.

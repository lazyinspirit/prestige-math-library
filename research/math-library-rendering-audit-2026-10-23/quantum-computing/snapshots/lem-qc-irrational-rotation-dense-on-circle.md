---
id: lem-qc-irrational-rotation-dense-on-circle
kind: lemma
title: Powers of an Irrational Rotation Are Dense on the Circle
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - lem-integer-part
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-sine-and-cosine-derivatives
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §4.1, SU(2) rotation angles, PDF pp. 8–9
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: Ch. 2 §2.2, PDF pp. 26–29; general finite-gate universality context
---

## Statement

If $\alpha\in\mathbb R\setminus\mathbb Q$, then
$\{e^{2\pi i n\alpha}:n\in\mathbb Z\}$ is dense in the unit circle.

## Facts & Assumptions

**Given:** An irrational real number $\alpha$.

[F1] [[lem-integer-part]]: the unique integer part satisfies
$\lfloor x\rfloor\le x<\lfloor x\rfloor+1$, so the fractional part
$\{x\}:=x-\lfloor x\rfloor$ lies in $[0,1)$.

[F2] The map $\beta\mapsto e^{2\pi i\beta}$ is continuous and onto the
unit circle, and two points agree exactly when their parameters differ by an
integer ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]],
[[thm-complex-exponential-addition-and-real-extension]],
[[thm-kernel-and-fibres-of-complex-exponential]],
[[thm-sine-and-cosine-parametrize-the-unit-circle]],
[[thm-sine-and-cosine-derivatives]]).

## Proof

1.1 Fix an integer $M\ge2$. Among the $M+1$ fractional parts $\{j\alpha\}$ for $0\le j\le M$, two lie in one of the $M$ half-open intervals of length $1/M$. Their difference is nonzero, since $\alpha$ is irrational, and has absolute value $\delta<1/M$. Choosing the sign of the index difference gives an integer $q\ne0$ with $\{q\alpha\}=\delta$. [F1, given, choose]

2.1 For any $\beta\in[0,1)$, let $k=\lfloor\beta/\delta\rfloor$. Then $0\le\beta-k\delta<\delta$ and $k\delta<1$. Since $\{kq\alpha\}=k\delta$, a power of $e^{2\pi i\alpha}$ has parameter within $1/M$ of $\beta$ modulo integers. By [F2], this approximates the circle point $e^{2\pi i\beta}$; as $M$ is arbitrary, the integer powers are dense. [F1, F2, step 1.1, algebra, choose] ∎
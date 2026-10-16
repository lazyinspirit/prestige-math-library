---
id: lem-qa-phase-estimation-geometric-sum
kind: lemma
title: Finite geometric sum for phase-estimation amplitudes
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-numbers-form-a-field
  - def-complex-integer-powers
  - def-finite-sum-in-a-commutative-monoid
  - lem-finite-sum-reindexing-and-fubini
  - thm-induction-principle
  - def-canonical-natural
  - def-complex-exponential
  - thm-kernel-and-fibres-of-complex-exponential
justified_by: []
axiom_use: "None; the proof uses finite sums, recursion, and field laws."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For $n\in\mathbb N$ and $z\in\mathbb C$, define
$$S_n(z):=\sum_{j=0}^{n-1}z^j,$$
with the empty sum $S_0(z)=0$. Then
$$S_n(z)=\begin{cases}\iota_{\mathbb C}(n),&z=1,\\[2pt](1-z^n)/(1-z),&z\ne1,\end{cases}$$
where $\iota_{\mathbb C}$ is the canonical natural embedding of $\mathbb N$ into $\mathbb C$.

For $Q=2^m$, $\theta\in[0,1)$, and integer $y$, setting
$z=\exp(2\pi i(\theta-y/Q))$ gives
$z^Q=\exp(2\pi iQ\theta)$; moreover $z=1$ exactly when
$Q\theta-y\in Q\mathbb Z$.

## Facts & Assumptions

**Given:** $n\in\mathbb N$, $z\in\mathbb C$, and, for the specialization, $m\ge1$, $Q=2^m$, $\theta\in[0,1)$, and $y\in\mathbb Z$.

[F1] A finite sum is independent of its enumeration and splits over a disjoint union; for the initial segment $\{0,\ldots,n\}$, this gives $S_{n+1}(z)=S_n(z)+z^n$ ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]).

[F2] Complex powers satisfy $z^0=1$ and $z^{n+1}=z^nz$ ([[def-complex-integer-powers]]).

[F3] The complex numbers form a field, so multiplication distributes over addition and every nonzero element has an inverse ([[thm-complex-numbers-form-a-field]]).

[F4] The canonical natural is defined recursively by $\iota_{\mathbb C}(0)=0$, $\iota_{\mathbb C}(n+1)=\iota_{\mathbb C}(n)+1$ ([[def-canonical-natural]]).

[F5] Induction holds on $\mathbb N$ ([[thm-induction-principle]]).

[F6] The complex exponential satisfies $\exp(a+b)=\exp(a)\exp(b)$, and $\exp(w)=1$ exactly when $w\in2\pi i\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]], [[def-complex-exponential]]).

## Proof

1.1 At $n=0$, the sum is empty, so $(1-z)S_0(z)=0=1-z^0$ by [F1] and [F2]. [F1, F2, base, algebra]

1.2 Fix $n\in\mathbb N$ and assume $(1-z)S_n(z)=1-z^n$; this is the induction hypothesis. [given, ih]

2.1 By [F1] and [F2], $(1-z)S_{n+1}=(1-z)S_n+(1-z)z^n=(1-z^n)+(z^n-z^{n+1})=1-z^{n+1}$, using distributivity in [F3] and the induction hypothesis [step 1.2]. Thus [F5] proves $(1-z)S_n(z)=1-z^n$ for every $n$. [F1, F2, F3, F5, step 1.2, discharge-induction]

3.1 If $z=1$, every summand is $1$, so [F1] gives $S_0(1)=0$ and $S_{n+1}(1)=S_n(1)+1$. At $n=0$, this equals $\iota_{\mathbb C}(0)=0$ by [F4]; if $S_n(1)=\iota_{\mathbb C}(n)$, the two successor recursions give $S_{n+1}(1)=S_n(1)+1=\iota_{\mathbb C}(n)+1=\iota_{\mathbb C}(n+1)$. Induction [F5] proves $S_n(1)=\iota_{\mathbb C}(n)$ for every $n$. If $z\ne1$, then $1-z\ne0$, so divide the identity from step 2.1 by $1-z$ in the field [F3] to obtain $S_n(z)=(1-z^n)/(1-z)$. [F1, F3, F4, F5, step 2.1]

4.1 In the QPE specialization, repeated use of [F6] and the power recursion [F2] gives $z^Q=\exp(2\pi iQ(\theta-y/Q))=\exp(2\pi i(Q\theta-y))$. Since $y\in\mathbb Z$, [F6] gives $\exp(-2\pi iy)=1$, hence $z^Q=\exp(2\pi iQ\theta)$. The same kernel statement gives $z=1$ exactly when $2\pi i(\theta-y/Q)\in2\pi i\mathbb Z$, equivalently $\theta-y/Q\in\mathbb Z$, or $Q\theta-y\in Q\mathbb Z$. [F2, F6, step 2.1, discharge-induction] ∎

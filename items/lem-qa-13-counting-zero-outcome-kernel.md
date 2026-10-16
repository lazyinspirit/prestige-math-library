---
id: lem-qa-13-counting-zero-outcome-kernel
kind: lemma
title: "Exact zero-label probability for counting"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-13-counting-from-amplitude-estimation
  - lem-qa-13-grover-eigenphase-relation
  - lem-qa-phase-estimation-outcome-kernel
  - lem-qa-phase-estimation-geometric-sum
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-double-angle-and-power-reduction-identities
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-quarter-turn-values-and-shift-formulas
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-qa-phase-estimation-superposition-law
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

For a fresh Count run with $L=2^\ell\ge2$ and $\theta=\arcsin\sqrt{t/N}$, the QPE label is zero exactly when the raw count estimate is zero. If $0<t<N$, then
$$\Pr(y=0)=\frac{\sin^2(L\theta)}{L^2\sin^2\theta}.$$
For $t=0$ this probability is $1$; when $L=2$ and $0<t<N$ it is $\cos^2\theta$.

## Facts & Assumptions

**Given:** A fresh Count preparation, a Boolean predicate with $t$ marked elements, and an even power-of-two phase-grid size $L\ge2$.

[F1] For $0<t<N$, the prepared state has equal squared overlap with Grover eigenphases $\theta/\pi$ and $1-\theta/\pi$; at $t=0$ it is a $+1$ eigenvector ([[lem-qa-13-grover-eigenphase-relation]]).

[F2] QPE on an eigenphase has the finite outcome kernel of [[lem-qa-phase-estimation-outcome-kernel]].

[F3] For an eigenphase superposition, measurement probabilities are the eigenphase-weighted mixture with no cross terms ([[thm-qa-phase-estimation-superposition-law]]).

[F4] The geometric sum, Euler formula, and integer periodicity give the label-zero sine quotient ([[lem-qa-phase-estimation-geometric-sum]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F5] $\sin(2\theta)=2\sin\theta\cos\theta$ ([[thm-double-angle-and-power-reduction-identities]]).

[F6] Sine vanishes exactly at integer multiples of $\pi$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F7] The raw Count estimate for label $y$ is $N\sin^2(\pi y/L)$ ([[alg-qa-13-counting-from-amplitude-estimation]]).

[F8] Sine changes sign under an integer shift by $\pi$, and $\sin(\pi-\theta)=\sin\theta$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-cofunction-supplementary-and-reflection-identities]]).

## Proof

1.1 For a phase $\phi$ and label zero, the kernel in [F2] and geometric-sum fact [F4] give $L^{-2}|\sum_{j=0}^{L-1}e^{2\pi i j\phi}|^2=\sin^2(\pi L\phi)/(L^2\sin^2(\pi\phi))$ when $\phi\notin\mathbb Z$, by Euler’s formula. At an integer phase all summands are $1$, so the probability is one. [given, F2, F4, algebra]

2.1 For $0<t<N$, [F1]–[F3] average this expression over $\phi=\theta/\pi$ and $1-\theta/\pi$ with weights $1/2$. For the second branch, [F8] gives $\sin(\pi-\theta)=\sin\theta$ and, by iterating the $\pi$-shift, $\sin(L\pi-L\theta)=(-1)^{L+1}\sin(L\theta)$ for the integer $L$. Squaring these identities shows that both branches have the same squared numerator and denominator, so their mixture is the stated value. For $t=0$, the phase is zero and label zero is certain. [given, F1, F2, F3, F8, step 1.1, algebra]

3.1 When $L=2$, [F5] gives $\sin(2\theta)=2\sin\theta\cos\theta$, so the quotient in step 2.1 is $\cos^2\theta$. By [F6], $\sin^2(\pi y/L)=0$ for an integer label $0\le y<L$ exactly when $y$ is a multiple of $L$, hence exactly when $y=0$. Fact [F7] identifies this with a zero raw count estimate. [given, F5, F6, F7, step 2.1, algebra] ∎


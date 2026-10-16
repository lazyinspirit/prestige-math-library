---
id: thm-qa-modular-order-finding-success
kind: theorem
title: Success probability and repetition for modular order finding
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-modular-order-finding
  - thm-qa-phase-estimation-success-and-tail
  - thm-qa-phase-estimation-superposition-law
  - thm-qa-rational-reconstruction-correctness
  - alg-qa-modular-multiplication-circuit
  - thm-qa-modular-multiplication-circuit-correctness
  - lem-qa-totient-ratio-logarithmic-lower-bound
  - def-unit-group-modulo-n-and-euler-totient
  - thm-unit-criterion-modulo-n
  - cor-order-of-element-divides-group-order
  - lem-order-characterisation
  - thm-standard-representatives-modulo-n
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - thm-qc-computational-basis-orthonormal
  - thm-archimedean-polygon-perimeter-characterization-of-pi
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - def-tangent-cotangent-secant-cosecant
  - def-pi-via-first-positive-cosine-zero
justified_by: []
axiom_use: "None; the proof uses a finite cyclic Fourier basis and elementary probability bounds."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §9"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§9, PDF pp. 45–49; order-finding success probability"
    - title: "Peter W. Shor, Polynomial-Time Algorithms for Prime Factorization and Discrete Logarithms on a Quantum Computer"
      url: "https://arxiv.org/pdf/quant-ph/9508027"
      locator: "§4, PDF pp. 16–19; period-finding probability argument"
---

## Statement

Let integer $N\ge3$, and let $x$ be a unit modulo $N$ of order $r$. Use [[alg-qa-modular-order-finding]] with $b\in\mathbb Z_{\ge1}$ and $\delta=2^{-b}$. One independent phase sample yields denominator $r$ with probability at least
$$\frac4{\pi^2}\frac{\varphi(r)}r\ge\frac4{\pi^2(1+\log_2N)}.$$
After $t=4(n+1)b$ independent samples, where $n=\lceil\log_2N\rceil$, the algorithm returns the exact order with probability at least $1-2^{-b}$. For any requested $0<\delta<1$, taking $b=\lceil\log_2(1/\delta)\rceil$ gives success probability at least $1-\delta$.

## Facts & Assumptions

**Given:** $N\ge3$, a unit class $x$ modulo $N$, its order $r$, and the circuit/sampling instructions in [[alg-qa-modular-order-finding]].

[F1] The unit classes form a finite group of size $\varphi(N)$; an element of a finite group has finite order dividing the group size. Standard representatives identify this group with a subset of $\{0,\ldots,N-1\}$ ([[def-unit-group-modulo-n-and-euler-totient]], [[cor-order-of-element-divides-group-order]], [[thm-standard-representatives-modulo-n]]).

[F2] On valid residues, $U_x|z\rangle=|xz\bmod N\rangle$ and invalid $n$-bit encodings are fixed by the multiplier circuit ([[alg-qa-modular-multiplication-circuit]], [[thm-qa-modular-multiplication-circuit-correctness]]).

[F3] The finite cyclic characters are orthogonal: $\sum_{s=0}^{r-1}e^{2\pi i(k-\ell)s/r}=r$ if $k=\ell\pmod r$ and $0$ otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]]).

[F4] For each eigenphase, phase estimation on a superposition has the eigenspace-weighted outcome mixture; every nearest $Q$-grid label has probability at least $4/\pi^2$ ([[thm-qa-phase-estimation-superposition-law]], [[thm-qa-phase-estimation-success-and-tail]]).

[F5] A coprime class modulo $r$ is counted among the $\varphi(r)$ units, and $\varphi(r)/r\ge1/(1+\log_2r)$ ([[thm-unit-criterion-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]], [[lem-qa-totient-ratio-logarithmic-lower-bound]]).

[F6] If $x$ has order $r$, then $x^q=1$ exactly when $r\mid q$ ([[lem-order-characterisation]]).

[F7] For every integer $s\ge3$, the circumscribed regular $s$-gon has perimeter $O_s=2s\tan(\pi/s)$ and satisfies $2\pi<O_s$ ([[thm-archimedean-polygon-perimeter-characterization-of-pi]]).

[F8] The cofunction identity gives $\sin(\pi/2-x)=\cos x$, and the Pythagorean identity gives $\sin^2x+\cos^2x=1$ ([[thm-cofunction-supplementary-and-reflection-identities]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

[F9] Sine is strictly increasing on $[-\pi/2,\pi/2]$, cosine is strictly decreasing on $[0,\pi]$, $\sin0=0$, $\cos(\pi/2)=0$, and $\pi>0$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[thm-quarter-turn-values-and-shift-formulas]], [[def-pi-via-first-positive-cosine-zero]]).

[F10] On its natural domain, $\tan x=\sin x/\cos x$ ([[def-tangent-cotangent-secant-cosecant]]).

[F11] Distinct computational-basis vectors of a register are orthonormal ([[thm-qc-computational-basis-orthonormal]]).

## Proof

1.1 By [F1], $r$ is a positive integer and $r\le\varphi(N)\le N$: the order divides the finite group size, which counts only standard residue representatives. The orbit $|x^s\bmod N\rangle$, $0\le s<r$, consists of distinct valid computational-basis vectors, since equality of two residues would imply a smaller positive power of $x$ is $1$. [given, F1, F2, algebra]

2.1 Define $|\psi_k\rangle=r^{-1/2}\sum_{s=0}^{r-1}e^{-2\pi iks/r}|x^s\bmod N\rangle$ for $0\le k<r$. The shift action in [F2] gives $U_x|\psi_k\rangle=e^{2\pi ik/r}|\psi_k\rangle$, including the wrap from $s=r-1$ to $s=0$. By [F11] and [F3] these are orthonormal unit vectors; the same character sum gives $|1\rangle=r^{-1/2}\sum_{k=0}^{r-1}|\psi_k\rangle$. [F2, F3, F11, step 1.1, algebra]

3.1 Apply the QPE circuit from [F4] to this decomposition. Its outcome law is the uniform mixture over $k=0,\ldots,r-1$, each phase being $k/r$; this uses the superposition law in [F4], rather than an eigenvector promise for $|1\rangle$. There are exactly $\varphi(r)$ indices with $\gcd(k,r)=1$, counted by [F5]. [F3, F4, F5, step 2.1]

4.1 For each coprime $k$, [F4] gives probability at least $4/\pi^2$ to a nearest grid label. The reconstruction correctness theorem then returns reduced denominator $r$ on that event. Summing the disjoint eigenspace-mixture probabilities gives one-sample success at least $(4/\pi^2)\varphi(r)/r$. By [F5] and $r\le N$, this is at least $4/[\pi^2(1+\log_2N)]$. [F4, F5, step 1.1, step 3.1, algebra]

5.1 Every retained $q$ passes $x^q=1$, so [F6] implies $r\mid q$. If the exact denominator $r$ is ever retained, no retained candidate is smaller than $r$ and $r$ itself is present; the algorithm's minimum rule therefore returns $r$. [F6, step 4.1, algebra]

6.1 First put $\theta=\pi/4$. Since $\pi>0$ by [F9], $0<\theta<\pi/2$. The cofunction law [F8] gives $\sin\theta=\cos\theta$; strict monotonicity and the endpoint values in [F9] show both are positive. Thus [F10] gives $\tan(\pi/4)=1$, and [F7] at $s=4$ gives $2\pi<O_4=8\tan(\pi/4)=8$, so $\pi<4$. Now put $n=\lceil\log_2N\rceil$ and $u=1/[4(n+1)]$. The one-sample lower bound in step 4.1 and $\pi<4$, together with $1+\log_2N\le n+1$, give $p\ge u$. Independent resets make the $t=4(n+1)b$ samples independent, hence the probability that no successful sample occurs is at most $(1-u)^t$. Since $1-u\le(1+u)^{-1}$, and with integer $K=4(n+1)$ the binomial expansion gives $(1+1/K)^K\ge1+K(1/K)=2$, we obtain $(1-u)^{Kb}\le2^{-b}$. By step 5.1, the output is the exact order except on this event. [given, F7, F8, F9, F10, step 4.1, step 5.1, algebra]

7.1 For arbitrary $0<\delta<1$, choosing $b=\lceil\log_2(1/\delta)\rceil$ gives $2^{-b}\le\delta$. Thus the stated guarantee follows without using an inexact floating-point threshold. [given, step 6.1, algebra] ∎

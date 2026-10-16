---
id: lem-qa-phase-estimation-tail-bound
kind: lemma
title: Circular-distance tail bound in phase estimation
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - lem-qa-phase-estimation-outcome-kernel
  - lem-qa-phase-estimation-geometric-sum
  - lem-qa-phase-estimation-sine-chord-bounds
  - def-qa-circular-phase-distance
  - lem-integer-part
  - def-complex-exponential
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
  - cor-trigonometric-parity-and-pythagorean-identity
justified_by: []
axiom_use: "None; the annulus count and series estimate are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
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
    - title: "Lin Lin, Lecture Notes on Quantum Algorithms for Scientific Computation, §§16.1–16.3"
      url: "https://math.berkeley.edu/~linlin/qasc/live_notes_0315.pdf"
---

## Statement

Let $m\ge1$, $Q=2^m$, $\theta\in[0,1)$, $\eta\in\mathbb R$, and
$K=\lfloor Q\eta\rfloor\ge2$. With
$d_{\mathbb T}(\theta-y/Q)$ as in [[def-qa-circular-phase-distance]],
$$\Pr_{y\sim P_\theta}\!\left[d_{\mathbb T}(\theta-y/Q)\ge\eta\right]\le\frac1{2(K-1)}.$$

## Facts & Assumptions

**Given:** $m\ge1$, $Q=2^m$, $\theta\in[0,1)$, and $\eta\in\mathbb R$ with $K=\lfloor Q\eta\rfloor\ge2$.

[F1] The outcome law is $P_\theta(y)=Q^{-2}|\sum_{j<Q}\exp(2\pi ij(\theta-y/Q))|^2$ ([[lem-qa-phase-estimation-outcome-kernel]]).

[F2] Circular distance satisfies $0\le d_{\mathbb T}(x)\le1/2$ for $x\in(-1,1)$ ([[def-qa-circular-phase-distance]]).

[F3] The integer part $K=\lfloor Q\eta\rfloor$ satisfies $K\le Q\eta<K+1$, and the same floor property applies to $Qd_{\mathbb T}(\theta-y/Q)$ ([[lem-integer-part]]).

[F4] The geometric-sum identity gives $\sum_{j<Q}z^j=(1-z^Q)/(1-z)$ for $z\ne1$ ([[lem-qa-phase-estimation-geometric-sum]]).

[F5] For $0\le u\le1/2$, $\sin(\pi u)\ge2u$ ([[lem-qa-phase-estimation-sine-chord-bounds]]).

[F6] For real $t$, $|\exp(2\pi it)|=1$, and the exponential is periodic under integer shifts ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F7] The complex modulus is subadditive ([[lem-complex-conjugation-and-modulus-laws]]).

[F8] Sine is odd and cosine is even ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Proof

1.1 For an outcome $y$, put $x=\theta-y/Q$ and $d=d_{\mathbb T}(x)$. If $d>0$, then $x\notin\mathbb Z$; write $x=\ell+\varepsilon d$ with $\ell\in\{-1,0,1\}$ and $\varepsilon\in\{-1,1\}$. By [F4] and [F1], $P_\theta(y)=Q^{-2}|1-\exp(2\pi iQx)|^2/|1-\exp(2\pi ix)|^2$. By [F6], integer shifts do not change these exponentials. For $d\in[0,1/2]$, Euler's formula gives $1-\exp(2\pi id)=\exp(\pi id)(\exp(-\pi id)-\exp(\pi id))=-2i\exp(\pi id)\sin(\pi d)$. Since $|\exp(\pi id)|=1$ and $\sin(\pi d)\ge2d$ by [F5], the denominator modulus is at least $4d$; if $\varepsilon=-1$, Euler's formula and the evenness of cosine and oddness of sine in [F8] give $\exp(-2\pi id)=\overline{\exp(2\pi id)}$, so [F7] gives the same modulus. The numerator is at most $2$ by [F6]–[F7]. Hence $P_\theta(y)\le1/(4Q^2d^2)$. If $d=0$, this outcome is not in the tail event because $Q\eta\ge K\ge2$. [F1, F4, F5, F6, F7, F8, given, algebra]

1.2 For an outcome in the tail, let $k=\lfloor Qd\rfloor$. If $k<K$, then $Qd<k+1\le K\le Q\eta\le Qd$, a contradiction; hence $k\ge K$. Also $k\le Q/2$ by [F2], since $Qd\le Q/2$. If $K>Q/2$, there are no tail outcomes. [F2, F3, given, algebra]

1.3 Suppose $K\le Q/2$. For each label $y$, choose $\ell_y=0$ if $|x|\le1/2$, $\ell_y=1$ if $x>1/2$, and $\ell_y=-1$ if $x<-1/2$, where $x=\theta-y/Q$. Then $\delta_y=Q(x-\ell_y)\in Q\theta+\mathbb Z$ and $|\delta_y|=Qd$. Distinct labels give distinct lifts: equality would make their difference a multiple of $Q$, while their label difference has magnitude less than $Q$. For an annulus $k\le Qd<k+1$, the lift lies in $[k,k+1)$ or $(-(k+1),-k]$. Each half-open interval of length $1$ contains at most one element of the integer translate $Q\theta+\mathbb Z$, because distinct elements differ by a nonzero integer. Thus at most two labels lie in this annulus. [F2, F3, given, construct]

2.1 Every such label has $d\ge k/Q$, so step 1.1 bounds its probability by $1/(4k^2)$. The total tail probability is therefore at most $\frac12\sum_{k=K}^{Q/2}k^{-2}$. For $k\ge K\ge2$, $k^{-2}\le[k(k-1)]^{-1}=(k-1)^{-1}-k^{-1}$. The finite sum telescopes to at most $1/(K-1)$, so the tail is at most $1/(2(K-1))$. Together with the empty-tail case in step 1.2 this proves the claim. [F3, step 1.1, step 1.2, step 1.3, algebra] ∎

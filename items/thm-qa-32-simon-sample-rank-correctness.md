---
id: thm-qa-32-simon-sample-rank-correctness
kind: theorem
title: Simon rank test correctness and linear query cost
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: quantum-complexity-classes-and-oracle-separations
dependency_level: 17
deps:
  - alg-qa-32-simon-query-rank-test
  - def-qa-32-simon-decision-oracle-promise
  - lem-qa-32-simon-function-register-instrument
  - def-finite-probability-space-and-event
  - lem-finite-probability-basic-laws
  - thm-product-probability-has-independent-coordinate-events
  - def-qc-clifford-t-gate-library
  - def-qc-tensor-map
  - def-qc-tensor-register-and-permutation
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses only finite sums, finite probability spaces, and explicit bit-vector operations."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 3, Section 3.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "John Watrous, Quantum Computational Complexity, Section IV.1"
      url: "https://arxiv.org/pdf/0804.3401"
---

## Statement

For every $n\ge1$, the sample in [[alg-qa-32-simon-query-rank-test]] is uniform on $V_n$ when $f$ is YES, and uniform on $s^\perp=\{y:s\cdot y=0\}$ when $f$ is NO with mask $s\ne0$. The rank test rejects every NO instance. On YES its error probability is at most

$$ (2^n-1)2^{-(n+2)}<\frac14. $$

It uses exactly $n+2$ queries, $2n(n+2)$ ordinary Hadamard gates, $2(n+2)$ finite register readouts, and $O(n^3)$ classical bit operations.

## Facts & Assumptions

**Given:** $n\ge1$, $N=2^n$, a promised Simon function $f$, and $m=n+2$ independent runs of the algorithm.

[F1] [[def-qa-32-simon-decision-oracle-promise]]: in the NO case each fiber is $\{x,x\oplus s\}$ for one nonzero mask $s$; in the YES case each nonempty fiber is a singleton.

[F2] [[alg-qa-32-simon-query-rank-test]]: each run prepares $|0^n,0^n\rangle$, applies $H^{\otimes n}$, queries $U_f$, measures the function register with the computational-basis instrument, applies $H^{\otimes n}$ to the input register, and measures the input register.

[F3] [[def-qc-clifford-t-gate-library]]: $H|x\rangle=2^{-1/2}\sum_{y\in\{0,1\}}(-1)^{xy}|y\rangle$ on one bit.

[F4] [[lem-qa-32-simon-function-register-instrument]]: for a basis state superposition, measuring one register has probability equal to the squared norm of its projected branch; a positive branch is the normalized projection.

[F5] [[def-qc-tensor-map]] and [[def-qc-tensor-register-and-permutation]]: tensor gates act factorwise and the displayed register order is retained.

[F6] [[def-finite-probability-space-and-event]]: probabilities on a finite outcome set are sums of its nonnegative weights.

[F7] [[thm-product-probability-has-independent-coordinate-events]]: independent fresh runs have the product output law.

[F8] [[lem-finite-probability-basic-laws]]: finite sums of nonnegative weights preserve order.

## Proof

1.1 By the factorwise tensor rule [F5], $H^{\otimes n}|x\rangle=N^{-1/2}\sum_{y\in V_n}(-1)^{x\cdot y}|y\rangle$. In particular the first Hadamards prepare $N^{-1/2}\sum_{x\in V_n}|x,0^n\rangle$. After one query the state is $|\psi_f\rangle=N^{-1/2}\sum_{x\in V_n}|x,f(x)\rangle.$ For each function-register result $z$ in the image of $f$, [F4] gives probability $|f^{-1}(z)|/N$ and the conditional input superposition that is uniform on that fiber. [F1, F2, F3, F4, F5, algebra]

2.1 If $f$ is YES, every fiber is a singleton $\{x\}$. The conditional input state is $|x\rangle$, and the second Hadamards give amplitude $N^{-1/2}(-1)^{x\cdot y}$ at every $y\in V_n$. By the first-register instrument law [F4], its squared modulus is the conditional output probability $1/N$, independent of the measured function-register value; hence the unconditional sample is uniform on $V_n$. [F1, F2, F3, F4, F5, step 1.1, algebra]

2.2 If $f$ is NO with mask $s\ne0$, a positive-probability fiber has the form $\{x,x\oplus s\}$. Its conditional input state is $(|x\rangle+|x\oplus s\rangle)/\sqrt2$. After the second Hadamards the amplitude at $y$ is $\frac{(-1)^{x\cdot y}}{\sqrt{2N}}\bigl(1+(-1)^{s\cdot y}\bigr).$ It is zero when $s\cdot y=1$ and has squared modulus $2/N$ when $s\cdot y=0$. By [F4], these squared moduli are the conditional output probabilities. Pairing $y$ with $y\oplus e_j$ for a coordinate $j$ with $s_j=1$ shows that exactly $N/2$ strings lie in $s^\perp$. The conditional law is therefore uniform on $s^\perp$ and independent of the measured fiber label, so the unconditional law is the same. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 In the NO case every sample lies in $s^\perp$, which is proper because $e_j\notin s^\perp$ when $s_j=1$. The span of the samples is proper, so its rank is less than $n$ and the algorithm rejects. The elimination procedure preserves row span under row swaps and row XORs; at termination its nonzero rows have distinct pivot columns and are linearly independent. They still span the original rows, so the pivot count is the matrix rank. At most $n$ pivots each inspect and update $O(n+2)$ rows of $n$ bits, giving $O(n^3)$ bit operations. [F1, F2, step 2.2, construct, algebra]

3.2 Each run reinitializes both registers and uses no earlier outcome as an input. Thus the conditional law of the next sample given any previous transcript is the same one-run law; induction on the number of runs gives the product law, and [F7] identifies the coordinates as independent. In the YES case each sample is uniform on $V_n$ by step 2.1. Their matrix has rank below $n$ exactly when some nonzero $t\in V_n$ satisfies $t\cdot y_j=0$ for every row $j$: Gaussian elimination uses invertible row operations and produces fewer than $n$ pivot columns, so a free variable can be set to $1$ and the pivot variables solved backwards to give a nonzero solution of the homogeneous system. Conversely, if such a $t$ exists, every row lies in its kernel; a coordinate vector $e_k$ with $t_k=1$ is outside that kernel, so the rows cannot span $V_n$. [F2, F7, step 2.1, algebra]

4.1 Fix $t\ne0$ and choose $k$ with $t_k=1$. The involution $y\mapsto y\oplus e_k$ pairs vectors with opposite values of $t\cdot y$, so a uniform sample satisfies $t\cdot y=0$ with probability $1/2$. Independence gives probability $2^{-m}$ that all $m$ samples are orthogonal to $t$. Pointwise, the indicator of the union over the $N-1$ nonzero $t$ is at most the sum of their indicators; summing over the finite probability space yields $\Pr[\operatorname{rank}<n]\le (N-1)2^{-m}=(2^n-1)2^{-(n+2)}<\frac14.$ Each of the $m=n+2$ runs in [F2] makes one oracle call, applies two layers of $n$ ordinary Hadamard gates, and performs two finite register readouts. Thus the totals are $n+2$ queries, $2n(n+2)$ Hadamard gates, and $2(n+2)$ readouts; step 3.1 gives the classical elimination cost. [F2, F6, F7, F8, step 3.1, step 3.2, algebra] ∎

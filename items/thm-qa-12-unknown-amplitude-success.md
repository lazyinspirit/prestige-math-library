---
id: thm-qa-12-unknown-amplitude-success
kind: theorem
title: "Unknown-amplitude search has no false positives and halts almost surely"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-12-unknown-amplitude-search
  - thm-qa-12-amplification-rotation-correctness
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - thm-qc-unit-vector-projector-is-density
  - def-qa-expected-query-cost
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-cosine-has-a-smallest-positive-zero
  - thm-sine-and-cosine-addition-formulas
justified_by: []
proof_strategy: direct
axiom_use: "None; each round uses finite registers, a finite random choice, and a finite projective instrument."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

For $0<a<1$, let $\sin^2\theta=a$. For every integer $M\ge1$, the second fresh sample with $j$ uniform on $\{1,\ldots,M\}$ has good-outcome probability
$
p_M=\frac1M\sum_{j=1}^M\sin^2((2j+1)\theta)
=\frac12-\frac1{2M}\sum_{j=1}^M\cos((4j+2)\theta)
\ge\frac12-\frac1{2M|\sin(2\theta)|}.
$
For every $a>0$, the procedure [[alg-qa-12-unknown-amplitude-search]] returns a good output with probability $1$. If $a=0$, it never returns a good output and does not halt.

## Facts & Assumptions

**Given:** The fresh-register schedule, the good/bad measurement, and the verification rule in the algorithm.

[F1] [[alg-qa-12-unknown-amplitude-search]]: every round begins with a direct fresh sample, and its second fresh sample uses a uniform $j\in\{1,\ldots,M_\ell\}$; only verified good outputs are returned.

[F2] [[thm-qa-12-amplification-rotation-correctness]]: conditional on the second sample using $j$ iterates, its good probability is $\sin^2((2j+1)\theta)$.

[F3] [[thm-qc-projective-measurement-outcome-law]]: the good/bad projective instrument assigns the good branch its Born probability.

[F4] [[thm-qc-projective-conditional-state]]: a positive-probability good branch has a conditional state supported in the good projection.

[F5] [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]]: $\cos(x+y)=\cos x\cos y-\sin x\sin y$; $|\cos x|\le1$ follows from [[cor-trigonometric-parity-and-pythagorean-identity]].

[F6] [[thm-complex-exponential-addition-and-real-extension]] and [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: finite complex exponentials multiply by adding their exponents, and $|1-e^{it}|=2|\sin(t/2)|$.

## Proof

1.1 Assume $0<a<1$, and let $0<\theta<\pi/2$ satisfy $\sin^2\theta=a$. The identity $\sin^2x=(1-\cos(2x))/2$ gives
$
p_M=\frac1M\sum_{j=1}^M\sin^2((2j+1)\theta)
=\frac12-\frac1{2M}\sum_{j=1}^M\cos((4j+2)\theta).
$
The cosine sum is the real part of $e^{i6\theta}\sum_{r=0}^{M-1}e^{i4r\theta}$. By [F6], this finite geometric sum has modulus
$
\frac{|1-e^{i4M\theta}|}{|1-e^{i4\theta}|}
=\frac{|\sin(2M\theta)|}{|\sin(2\theta)|}
\le\frac1{|\sin(2\theta)|}.
$
Taking real parts therefore gives
$
p_M\ge\frac12-\frac1{2M|\sin(2\theta)|}.
$
[given, F2, F5, F6, algebra]

2.1 If $0<a<3/4$, then $\sin(2\theta)=2\sqrt{a(1-a)}\ge\sqrt a$. Since $M_\ell\to\infty$, some finite round has $M_\ell\ge2/\sqrt a$, after which [F1]–[F2] give a conditional per-round success probability at least $p_{M_\ell}\ge1/4$. If $a\ge3/4$, the direct sample in each round succeeds with probability at least $3/4$. Thus in either case there is a finite round after which every fresh round has conditional success probability bounded below by a fixed positive constant. [given, F1, F2, step 1.1, algebra]

3.1 Registers and randomness are fresh each round, so after $r$ rounds beyond the finite threshold in step 2.1, the probability of still not returning is at most $(3/4)^r$ in the first case and $(1/4)^r$ in the second. Both tend to zero. Since every output is returned only after the good instrument outcome (and verification when required), no bad output is returned; on every positive-probability good branch [F4] supplies its conditional state. [given, F1, F3, F4, step 2.1, algebra]

4.1 If $a=0$, every fresh preparation has zero projection onto $\operatorname{ran}\Pi_{\mathrm{good}}$, so each good outcome has probability zero by [F3]. The procedure therefore never returns and runs forever, as specified in [F1]. [given, F1, F3, algebra] ∎

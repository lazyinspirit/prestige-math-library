---
id: alg-qa-13-relative-approximate-counting
kind: algorithm
title: "Relative approximate counting with unknown marked count"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
deps:
  - alg-qa-13-counting-from-amplitude-estimation
  - lem-qa-13-counting-zero-outcome-kernel
  - lem-qa-13-certified-count-output-rounding
  - lem-qa-13-pi-rational-bounds
  - def-qa-classical-bit-cost
  - def-nat-power
  - thm-induction-principle
  - thm-of-archimedean
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
## Definition

**Input.** A Boolean predicate on $N=2^n\ge1$ addresses with an integer $n\ge0$, the fully declared controlled counting access model, and rational $0<\epsilon\le1$.

Set $\ell=0$. Repeatedly increment $\ell$, set $L=2^\ell$, run a fresh Count$(f,L)$, and stop exactly when its label $y$ is nonzero or $L^2\ge4N$. The test $y\ne0$ is an exact finite label test. Initialize $m=0$ and $M=1$; repeatedly increment $m$ and double $M$ while $M<[20(22/7)^2/\epsilon]L$, using exact rational comparison, so that $M=2^m$. Run a fresh Count$(f,M)$ and use [[lem-qa-13-certified-count-output-rounding]] to output an integer within $2/3$ of its exact algebraic count estimate. The scale loop returns the least power of two meeting its rational threshold; all scales are powers of two and the multiplier grows as $1/\epsilon$ times $L$.

## Facts & Assumptions

**Given:** $N=2^n\ge1$ with an integer $n\ge0$, the counting access contract, and rational $0<\epsilon\le1$.

[F1] Count is defined for every power-of-two label size $L\ge2$ and uses the explicit controlled membership reflection ([[alg-qa-13-counting-from-amplitude-estimation]]).

[F2] The exact zero-label probability is the kernel in [[lem-qa-13-counting-zero-outcome-kernel]].

[F3] The rational upper bound $22/7$ exceeds $\pi$ ([[lem-qa-13-pi-rational-bounds]]).

[F4] Certified integer rounding returns an integer within $2/3$ of the raw algebraic value ([[lem-qa-13-certified-count-output-rounding]]).

[F5] The exact label and interval operations are classical postprocessing ([[def-qa-classical-bit-cost]]).

[F6] The real field is Archimedean, natural powers obey $2^{j+1}=2^j\cdot2$, and induction holds on the naturals ([[thm-of-archimedean]], [[def-nat-power]], [[thm-induction-principle]]).

## Proof

1.1 The rough loop starts at $L=2$ and doubles each round. By [F6] choose a natural $q>4N$. Induction gives $2^j\ge j+1$ for every natural $j$: it is equality at $j=0$, and $2^{j+1}=2^j+2^j\ge(j+1)+(j+1)\ge j+2$. Thus after at most $q$ rounds the scale $L=2^q>4N$ has been reached, so $L^2\ge4N$; the other stopping condition can only make the loop stop earlier. By [F1]–[F2], $y\ne0$ is exactly a nonzero raw estimate test. [given, F1, F2, F5, F6, algebra]

2.1 The threshold $T=[20(22/7)^2/\epsilon]L$ is a positive rational. By [F6] and the induction argument in step 1.1, some power of two exceeds $T$, so the doubling loop terminates; its first value $M\ge T$ is the least such power and satisfies $M<2T$. Since $L\ge2$ and $\epsilon\le1$, $T>2$, so $M$ is even and at least $2$, as required by Count and the rounding lemma. Since $22/7>\pi$, $M\ge20\pi^2L/\epsilon$ and $M<40(22/7)^2L/\epsilon$. The rounding step [F4] terminates and makes the integer output explicit; its bit work is covered by [F5]. [given, F3, F4, F5, F6, step 1.1, algebra]

3.1 Each Count call uses a fresh preparation; the algorithm uses only the supplied access capabilities in [F1]. It is a finite procedure with exact finite stopping tests and certified final output, but no success or query-cost bound follows from this definition alone. [given, F1, F2, step 1.1, step 2.1] ∎


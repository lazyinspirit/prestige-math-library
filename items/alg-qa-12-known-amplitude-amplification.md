---
id: alg-qa-12-known-amplitude-amplification
kind: algorithm
title: "Known-amplitude amplification with integer rounding"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-12-prepared-success-subspace
  - alg-qa-12-amplitude-amplification
  - def-qa-quantum-query-algorithm
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-cosine-has-a-smallest-positive-zero
  - thm-sine-and-cosine-addition-formulas
  - thm-double-angle-and-power-reduction-identities
  - def-principal-inverse-sine-and-cosine
  - thm-of-square-roots
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

Input a coherent sampler with an exactly represented known success weight $a\in[0,1]$. For the finite rational-input procedure, $a$ is given as a binary rational; exact algebraic inputs are also allowed when the supplied representation supports exact comparisons. If $a=0$, return fail without normalizing a good component. If $a=1$, prepare $A|0\rangle$, apply the declared good/bad projective instrument, and return its good conditional state (or, in the diagonal classical-output specialization, measure and verify the output).

For $0<a<1$, set $\theta:=\arcsin\sqrt a\in(0,\pi/2)$, using the principal inverse-sine and nonnegative-square-root conventions of [[def-principal-inverse-sine-and-cosine]] and [[thm-of-square-roots]]. Then $\theta$ is the unique angle with $\sin^2\theta=a$. Set $K:=\lceil1/\sqrt a\rceil$, equivalently the least positive integer $K$ with $K^2a\ge1$. For each integer $k=0,\ldots,K$, compute $p_k=\sin^2((2k+1)\theta)$ exactly by the rational recurrence
$
x_0=1,\qquad x_1=1-2a,\qquad x_{n+1}=2(1-2a)x_n-x_{n-1}\ (n\ge1),\qquad p_k=(1-x_{2k+1})/2.
$
Indeed, writing $x_n=\cos(2n\theta)$, double-angle gives $x_0=1$, $x_1=\cos(2\theta)=1-2a$, and cosine addition gives the displayed recurrence. Also $\sin^2((2k+1)\theta)=(1-\cos((4k+2)\theta))/2=(1-x_{2k+1})/2$. Choose the least $k$ attaining the maximum of this finite list. Run the fixed-$k$ procedure [[alg-qa-12-amplitude-amplification]], verify when a classical candidate is requested, and return the good conditional output or fail. For rational $a$, every $x_n$ and $p_k$ is rational, so the comparisons are exact. No time bound for this classical preprocessing is claimed.

## Remarks

For a general real $a$, the same mathematical maximizer is defined, but a finite implementation requires an exact representation and a procedure that decides all finitely many comparisons, including ties. The item makes no computation claim for an arbitrary unrepresented real.

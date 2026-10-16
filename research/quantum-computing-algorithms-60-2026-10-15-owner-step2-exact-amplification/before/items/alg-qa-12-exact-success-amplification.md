---
id: alg-qa-12-exact-success-amplification
kind: algorithm
title: "Exact success amplification by attenuating the good branch"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-12-prepared-success-subspace
  - alg-qa-12-amplitude-amplification
  - def-qc-clean-and-dirty-ancillas
  - def-qa-quantum-query-algorithm
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
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
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-of-square-roots
  - def-principal-inverse-sine-and-cosine
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

Input a prepared sampler $A$, its inverse $A^\dagger$, an orthogonal good projection $\Pi_{\mathrm{good}}$, and an exactly represented known $a\in[0,1]$ equal to the success weight. The model must supply the coherent flag unitary
$
C_{\mathrm{good}}=\Pi_{\mathrm{good}}\otimes X+(I-\Pi_{\mathrm{good}})\otimes I
$
and its inverse, a clean temporary qubit, and exact real arithmetic and rotation access. These are explicit capabilities; a bare phase reflection does not supply $C_{\mathrm{good}}$, and no finite-bit gate synthesis is asserted.

If $a=0$, return fail without normalizing a good component. If $a=1$, prepare $A|0\rangle$, apply $\{\Pi_{\mathrm{good}},I-\Pi_{\mathrm{good}}\}$, and return the good conditional state; in the diagonal classical-output case, measure the designated output and verify it.

For $0<a<1$, set $\theta:=\arcsin\sqrt a\in(0,\pi/2)$, using [[def-principal-inverse-sine-and-cosine]] and [[thm-of-square-roots]], and define
$
m=\left\lceil\frac{\pi}{4\theta}-\frac12\right\rceil,\qquad
\theta'=\frac{\pi}{4m+2},\qquad r=\frac{\sin^2\theta'}{a}.
$
Since $m\ge\pi/(4\theta)-1/2$, we have $4m+2\ge\pi/\theta$, hence $0<\theta'\le\theta<\pi/2$. Sine is strictly increasing on $[0,\pi/2]$, so $0<\sin^2\theta'\le\sin^2\theta=a$, proving $0<r\le1$; the square roots in the following rotation are the unique nonnegative roots. On the enlarged data, flag, and temporary registers, construct $A'$ by the following finite gate sequence:

1. Start every added register in $|0\rangle$ and apply $A$ to the data.
2. Apply $C_{\mathrm{good}}$ to the data and temporary bit.
3. Controlled on the temporary bit being $1$, apply the flag rotation
$
R_r=\begin{pmatrix}\sqrt{1-r}&-\sqrt r\\ \sqrt r&\sqrt{1-r}\end{pmatrix},
\qquad R_r|0\rangle=\sqrt{1-r}|0\rangle+\sqrt r|1\rangle .
$
4. Apply $C_{\mathrm{good}}^\dagger$ to uncompute the temporary bit. This full unitary is $A'$; its inverse reverses these operations and uses $A^\dagger$.

Use the enlarged success projector $\Pi'=\Pi_{\mathrm{good}}\otimes|1\rangle\langle1|_{\mathrm{flag}}\otimes I_{\mathrm{temporary}}$. Prepare $A'|0\rangle$, apply $m$ standard amplification iterates built from $A'$, $A'^\dagger$, $\Pi'$, and reflection about the all-zero enlarged input, then apply the declared good/bad instrument for $\Pi'$. Return the good conditional output, discarding the flag and temporary registers; the temporary bit has been uncomputed, while the success flag is $1$ and is not claimed to be reset. In the diagonal classical-output specialization, measure the designated output after the good outcome and use the supplied verifier.

## Remarks

The ideal exact-real and exact-rotation assumptions are part of the input model. A finite-precision implementation requires a separate error budget and theorem.

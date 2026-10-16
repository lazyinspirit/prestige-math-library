---
id: alg-qa-12-exact-success-amplification
kind: algorithm
title: "Exact success amplification by attenuating the good branch"
status: published
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
  - def-qc-pauli-matrices
  - def-qc-toffoli-and-fredkin
  - def-qc-controlled-z-and-swap
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
and its inverse, a clean flag qubit $F$, a clean temporary qubit $T$, external clean implementation workspace, and exact real arithmetic and controlled flag-rotation access, including inverse rotations. These are explicit capabilities; a bare phase reflection does not supply $C_{\mathrm{good}}$, and no finite-bit gate synthesis is asserted. The input data space is the possibly abstract space $H$ and specified vector $|0\rangle$ of [[def-qa-12-prepared-success-subspace]]; no full classical description or computational-basis test for that vector is inferred. No controlled access to $A$ is required.

If $a=0$, return fail without normalizing a good component. If $a=1$, prepare $A|0\rangle$ and apply $\{\Pi_{\mathrm{good}},I-\Pi_{\mathrm{good}}\}$. Supply and charge that instrument directly, or construct it by applying $C_{\mathrm{good}}$ to data and a clean scratch bit, measuring only that bit, and applying $C_{\mathrm{good}}^\dagger$; this costs two flag calls and one bit measurement and resets the scratch. Return the good conditional state; in the diagonal classical-output case, measure the designated output and verify it.

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

The logical enlarged space is $H'=H\otimes F\otimes T$, with specified input $|0'\rangle=|0\rangle_H|0\rangle_F|0\rangle_T$ and success projector $\Pi'=\Pi_{\mathrm{good}}\otimes|1\rangle\langle1|_F\otimes I_T$. Its required reflections are $S'_0=I_{H'}-2|0'\rangle\langle0'|$ and $S'_{\mathrm{good}}=I_{H'}-2\Pi'$. Select and charge the following access modes before execution.

- **Zero reflection.** Either explicitly supply one direct $S'_0$ call, or supply controlled access $C(S_0)$ to the original data reflection $S_0=I_H-2|0\rangle\langle0|$. In the latter mode, initialize an external scratch qubit $q$ to $0$; apply $X$ to $F,T$, Toffoli$(F,T;q)$, $C(S_0)$ controlled by $q$ on $H$, Toffoli$(F,T;q)$, and $X$ to $F,T$ again. This uses one controlled-$S_0$ call, two Toffolis and four $X$ gates per enlarged zero reflection. Controlled $S_0$ is an additional capability and is not inferred from ordinary $S_0$ access.
- **Good reflection.** In the constructed mode, apply $C_{\mathrm{good}}$ to $(H,q)$ with external scratch $q=0$, then $CZ(q,F)$, then $C_{\mathrm{good}}^\dagger$ to $(H,q)$. This uses two flag calls and one $CZ$ per $S'_{\mathrm{good}}$. An alternative direct mode explicitly supplies and charges $S'_{\mathrm{good}}$ instead. Here $X$, Toffoli and $CZ$ are the exact supplied qubit gates of [[def-qc-pauli-matrices]], [[def-qc-toffoli-and-fredkin]] and [[def-qc-controlled-z-and-swap]], with their gate costs charged.

The scratch $q$ starts and ends in $0$ for each reflection and may be reused. It is external implementation workspace, not part of the logical input $|0'\rangle$ or the projector defining $S'_0$. The constructions implement the displayed logical operators on every vector of $H'$ with clean scratch; neither assumes $T=0$ to implement $I_T$ in the good projector.

Prepare $A'|0'\rangle$, apply exactly $m$ iterates $-A'S'_0A'^\dagger S'_{\mathrm{good}}$, then perform the projective instrument $\{\Pi',I-\Pi'\}$. The terminal instrument is an explicitly supplied, separately charged capability. Alternatively construct it with two external clean bits $q,d$: apply $C_{\mathrm{good}}$ on $(H,q)$, Toffoli$(q,F;d)$, measure only $d$ in the computational basis to obtain the good/bad record, then reverse the Toffoli and the flag call. Both scratch bits return to $0$ on either observed branch; this option adds two flag calls, two Toffolis and one bit measurement, separately from the reflection counts. Return the good conditional output, discarding $F,T$; $T$ is clean and $F=1$ on success. In the diagonal classical-output specialization, measure the designated output after the good outcome and use the supplied verifier.

## Remarks

The ideal exact-real and exact-rotation assumptions are part of the input model. A finite-precision implementation requires a separate error budget and theorem.

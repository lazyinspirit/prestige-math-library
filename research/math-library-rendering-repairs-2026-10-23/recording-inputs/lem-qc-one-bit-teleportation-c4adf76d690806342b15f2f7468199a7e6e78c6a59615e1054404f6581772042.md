---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-qc-one-bit-teleportation.json
  precheck: pass
id: lem-qc-one-bit-teleportation
kind: lemma
title: "One-bit J-gate teleportation branch identity"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-tensor-register-and-permutation, def-qc-tensor-map, def-qc-register-and-computational-basis, thm-qc-computational-basis-orthonormal, def-qc-pure-state-and-ray, thm-qc-ray-projector-well-defined-and-bijective, def-qc-density-operator, def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-pauli-matrices, def-qc-controlled-phase-rotation, def-qc-projective-measurement, def-qc-povm-and-outcome-law, def-qc-instrument-and-conditional-state, def-qc-j-gate-and-equatorial-basis, lem-qc-j-basis-and-phase-identities, def-qc-dirac-notation-conversion, thm-qc-dirac-notation-coordinate-identity, def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba, prop-standard-coordinate-inner-products]
justified_by: []
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6, p. 179"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf and Hans J. Briegel, Quantum computing via measurements only, arXiv:quant-ph/0010033, pp. 1–2"
      url: https://arxiv.org/pdf/quant-ph/0010033
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, arXiv:quant-ph/0301052, §§II B and II E"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

For a normalized qubit $|\psi\rangle=a|0\rangle+c|1\rangle$ and real
$\alpha$, prepare $CZ(|\psi\rangle\otimes|+\rangle)$ and project the first
qubit in the ordered basis $\{|b\rangle_\alpha:b=0,1\}$ of
[[def-qc-j-gate-and-equatorial-basis]]. The outcome-$b$ branch operator on the
second qubit is

$$K_b=2^{-1/2}X^bJ(\alpha).$$

Thus each outcome has probability $1/2$ and the normalized output is
$X^bJ(\alpha)|\psi\rangle$. The operator identity is linear and therefore
also holds when the input qubit is entangled with a finite-dimensional
reference register.

## Facts & Assumptions

**Given:** A normalized qubit $|\psi\rangle=a|0\rangle+c|1\rangle$, a fresh
$|+\rangle$ ancilla, and a real angle $\alpha$.

[F1] The J-gate definition sets
$|b\rangle_\alpha=J(\alpha)^\dagger|b\rangle$; its identity lemma gives
$|b\rangle_\alpha=2^{-1/2}(|0\rangle+(-1)^be^{-i\alpha}|1\rangle)$ and
proves the pair is orthonormal
([[def-qc-j-gate-and-equatorial-basis]],
[[lem-qc-j-basis-and-phase-identities]]).

[F2] A finite projective measurement assigns each orthogonal projection its
Born outcome weight ([[def-qc-projective-measurement]]).

[F3] A unit representative $\psi$ gives the density operator
$|\psi\rangle\langle\psi|$; it is nonnegative with trace one. The outer
product has coordinate matrix $uu^\dagger$
([[def-qc-pure-state-and-ray]],
[[thm-qc-ray-projector-well-defined-and-bijective]],
[[def-qc-density-operator]], [[def-qc-dirac-notation-conversion]],
[[thm-qc-dirac-notation-coordinate-identity]]).

[F4] Trace is the finite sum of diagonal entries in an orthonormal basis and is
cyclic for conformable matrices; $|u\rangle\langle u|$ has matrix $uu^\dagger$,
whose trace is the squared norm of $u$
([[def-trace-of-an-endomorphism]], [[thm-trace-of-ab-equals-trace-of-ba]],
[[thm-qc-dirac-notation-coordinate-identity]],
[[prop-standard-coordinate-inner-products]]).

[F5] The same two rank-one projectors are a finite POVM with weights
$\operatorname{tr}(|\Psi\rangle\langle\Psi|\Pi_b)$
([[def-qc-povm-and-outcome-law]]).

[F6] For an instrument branch map $\mathcal I_b$, its conditional state is
$\mathcal I_b(\rho)/p_b$ only when $p_b>0$
([[def-qc-instrument-and-conditional-state]]).

[F7] The current matrix definitions give
$X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$,
$H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$,
$CZ=\operatorname{diag}(1,1,1,-1)$, and
$J(\alpha)=H\operatorname{diag}(1,e^{i\alpha})$
([[def-qc-pauli-matrices]], [[def-qc-controlled-phase-rotation]],
[[def-qc-one-qubit-gate-alphabet-and-rotations]],
[[def-qc-j-gate-and-equatorial-basis]]). Direct multiplication gives
$CZ^*CZ=I$.

[F8] Tensoring equal linear maps with the identity preserves their equality on
the ordered product register ([[def-qc-tensor-map]]).

[F9] The computational basis of $\mathbb C^2$ is orthonormal, so
$|+\rangle=2^{-1/2}(|0\rangle+|1\rangle)$ is a unit vector
([[def-qc-register-and-computational-basis]],
[[thm-qc-computational-basis-orthonormal]]).

## Proof


1.1 The prepared state expands as $2^{-1/2}(a|00\rangle+a|01\rangle+c|10\rangle-c|11\rangle)$: expand $|\psi\rangle\otimes|+\rangle$, and the diagonal $CZ$ changes only the $|11\rangle$ coefficient's sign by [F7] and [F9]. Projecting the first factor onto $|b\rangle_\alpha$ leaves the second-factor vector $$K_b|\psi\rangle=\tfrac12\bigl((a+(-1)^be^{i\alpha}c)|0\rangle+ (a-(-1)^be^{i\alpha}c)|1\rangle\bigr),$$ by [F1]. Matrix multiplication from [F7] gives $J(\alpha)|\psi\rangle=2^{-1/2}((a+e^{i\alpha}c)|0\rangle+ (a-e^{i\alpha}c)|1\rangle)$. For $b=0$ these coefficients agree; for $b=1$, $X$ swaps them. Thus $K_b=2^{-1/2}X^bJ(\alpha)$. [F1, F7, F9, algebra]

2.1 Let $\Psi=CZ(|\psi\rangle\otimes|+\rangle)$ and $\Pi_b=|b\rangle_\alpha\langle b|\otimes I$. The vector $\Psi$ is normalized because $|\psi\rangle$ and $|+\rangle$ are unit, and direct multiplication of the displayed diagonal $CZ$ matrix gives $CZ^*CZ=I$ by [F7] and [F9]. The branch vector is $\Pi_b\Psi=|b\rangle_\alpha\otimes K_b|\psi\rangle$ by step 1.1 and the unit norm of $|b\rangle_\alpha$ from [F1]. The projective outcome law [F2] gives $p_b=\operatorname{tr}(|\Psi\rangle\langle\Psi|\Pi_b)$; [F5] gives the same law as a POVM. Since $\Pi_b^*=\Pi_b=\Pi_b^2$, trace cyclicity [F4] and the rank-one coordinate formula [F3] give $p_b=\operatorname{tr}(|\Pi_b\Psi\rangle\langle\Pi_b\Psi|) =\|\Pi_b\Psi\|^2=\|K_b|\psi\rangle\|^2$. Direct multiplication of the displayed $X$ matrix in [F7] gives $X^*X=I$, and [[lem-qc-j-basis-and-phase-identities]] proves $J(\alpha)$ is unitary, so $\|K_b|\psi\rangle\|^2=\tfrac12\|X^bJ(\alpha)|\psi\rangle\|^2 =\tfrac12\|\psi\|^2=1/2$. Thus the branch is positive-probability and normalization is defined. [step 1.1, F1, F2, F3, F4, F5, F7, F9, algebra]

3.1 Dividing the branch vector in step 1.1 by its norm $1/\sqrt2$ yields $X^bJ(\alpha)|\psi\rangle$; equivalently, the instrument conditional density from [F6] is the rank-one operator of this normalized vector. The map identity in step 1.1 remains an identity after tensoring with the identity on any finite reference register by [F8], so it also holds for entangled inputs. [step 1.1, step 2.1, F6, F8, algebra] ∎

## Remarks

The circuit reads from left to right; the upper wire is the first tensor
factor and is measured, while the lower wire is the surviving second factor.
The box $M_\alpha$ denotes measurement in the ordered basis
$\{|b\rangle_\alpha:b=0,1\}$. Its dashed outgoing line carries the classical
outcome $b$, not a surviving quantum wire.

```tikz
\begin{tikzpicture}[x=1cm,y=1cm]
\node at (-0.8,1) {$|\psi\rangle$};
\node at (-0.8,-0.7) {$|+\rangle$};
\draw (-0.2,1) -- (2.65,1);
\draw (-0.2,-0.7) -- (4.4,-0.7);
\draw (1,1) -- (1,-0.7);
\fill (1,1) circle (2pt);
\fill (1,-0.7) circle (2pt);
\node at (1,1.5) {$CZ$};
\draw (2.65,0.62) rectangle (3.65,1.38);
\node at (3.15,1) {$M_\alpha$};
\draw[dashed,->] (3.65,1) -- (4.45,1);
\node[right] at (4.45,1) {$b\in\{0,1\}$};
\node[right] at (4.4,-0.7) {$X^bJ(\alpha)|\psi\rangle$};
\node at (2.2,-1.4) {$p_b=1/2$};
\end{tikzpicture}
```

The lower output label is the state conditioned on outcome $b$. Before
normalization the second-wire vector is
$K_b|\psi\rangle=2^{-1/2}X^bJ(\alpha)|\psi\rangle$, as proved in step 1.1;
steps 2.1 and 3.1 establish its probability and normalization. The figure
illustrates these identities; the proof does not depend on it.

---
id: ex-qc-stabilizer-x-measurement-branches
kind: example
title: Stabilizer measurement on $|0\rangle$ in the $X$ basis
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-qc-gottesman-knill-exact-simulation
  - def-qc-pauli-matrices
  - def-qc-register-and-computational-basis
  - def-qc-pauli-measurement-branch-semantics
  - lem-qc-anticommuting-stabilizer-measurement-is-fair
  - lem-qc-random-measurement-stabilizer-update
  - lem-qc-zero-probability-branch
justified_by: []
dependency_level: 19
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1 and §20.3"
      url: https://arxiv.org/pdf/1907.09415
    - title: John Watrous, Understanding Quantum Information and Computation, Lesson 14
      url: https://jhwatrous.github.io/UQIC.pdf
---

## Example

Start in the one-qubit basis state $|0\rangle$, whose stabilizer is
$S=\langle Z\rangle$. Measure $X$, then measure $X$ again. The first
measurement has two equiprobable outcomes and updates the signed stabilizer
generator to the corresponding $X$ eigenvalue. The second measurement is
deterministic; its opposite branch has probability zero and no normalized
conditional state.

## Facts & Assumptions

**Given:** The ordered one-qubit computational basis, $|0\rangle$, and the
Pauli matrices $X,Z$.

[F1] [[def-qc-pauli-matrices]]: $X|0\rangle=|1\rangle$,
$Z|0\rangle=|0\rangle$,
$ZX=-XZ$, and $X^2=Z^2=I$.

[F2] [[def-qc-pauli-measurement-branch-semantics]]: for $M=X$, the projectors
are $(I+X)/2$ and $(I-X)/2$.

[F3] [[lem-qc-anticommuting-stabilizer-measurement-is-fair]]: if the measured
Pauli anticommutes with a stabilizer generator, each bit occurs with
probability $1/2$.

[F4] [[lem-qc-random-measurement-stabilizer-update]]: an allowed bit $b$
replaces the anticommuting pivot by $(-1)^bX$.

[F5] [[lem-qc-zero-probability-branch]]: a zero branch map is zero and does
not define a normalized conditional state.

## Verification

**Given:** The data in the Example.

1.1 The initial generator $Z$ fixes $|0\rangle$, and it anticommutes with $X$ by [F1]. Hence [F3] gives $p_0=p_1=1/2$ for the first measurement. [F1, F3, given]

2.1 Directly, $P_0|0\rangle=(|0\rangle+|1\rangle)/2$ and $P_1|0\rangle=(|0\rangle-|1\rangle)/2$. Each vector has squared norm $1/2$, so normalization gives $|+\rangle=(|0\rangle+|1\rangle)/\sqrt2$ and $|-\rangle=(|0\rangle-|1\rangle)/\sqrt2$. By [F4], their stabilizers are $+X$ and $-X$, respectively. [F1, F2, F4, step 1.1, algebra]

3.1 Measuring $X$ again on either state is deterministic: $|+\rangle$ lies in $P_0H_1$ and $|-\rangle$ lies in $P_1H_1$. The opposite projector annihilates the state, so its branch has probability zero and no normalized conditional state by [F5]. [F2, step 2.1, F5] ∎

## Sources

The $|0\rangle$ stabilizer and $X$-eigenstate examples appear in de Wolf
§20.1 and Watrous Lesson 14 §14.1, printed pp. 405–407 (PDF pp. 411–413).
The branch probabilities and update follow
the exact local calculations above:
https://arxiv.org/pdf/1907.09415;
https://jhwatrous.github.io/UQIC.pdf.

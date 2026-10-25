---
id: lem-qa-11-grover-invariant-plane-rotation
kind: lemma
title: The Grover iterate rotates the marked/unmarked plane
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
proof_strategy: direct
deps:
  - alg-qa-11-grover-iterate
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-qc-dirac-notation-conversion
  - def-qc-reflection
  - lem-qa-11-good-bad-decomposition
  - thm-double-angle-and-power-reduction-identities
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, §19.1
      url: https://cs.umd.edu/~amchilds/qa/qa.pdf
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---

## Statement

Assume $0<t<N$ and use the orthonormal ordered basis $(|B\rangle,|G\rangle)$ of [[lem-qa-11-good-bad-decomposition]]. Let $\Pi_M$ project onto the marked-address span, $S_M=I-2\Pi_M$, and $R_s=2|s\rangle\langle s|-I$. The Grover iterate $G=R_sS_M$ preserves $\operatorname{span}\{|B\rangle,|G\rangle\}$, and in this basis has matrix
$$\begin{pmatrix}\cos(2\theta)&-\sin(2\theta)\\ \sin(2\theta)&\cos(2\theta)\end{pmatrix},\qquad \theta=\arcsin\sqrt{t/N}.$$
The initially prepared state has coordinate column $(\cos\theta,\sin\theta)^{\mathsf T}$.

## Facts & Assumptions

**Given:** $0<t<N$ and the normalized vectors in the marked/unmarked decomposition.

[F1] [[lem-qa-11-good-bad-decomposition]]: $|B\rangle,|G\rangle$ are orthonormal and $|s\rangle=\cos\theta|B\rangle+\sin\theta|G\rangle$.

[F2] [[def-qc-reflection]]: $R_\Pi=2\Pi-I$ and $S_\Pi=I-2\Pi$ have the displayed opposite signs.

[F3] [[alg-qa-11-grover-iterate]]: $G=R_sS_M$ and $R_s=2|s\rangle\langle s|-I$.

[F4] [[thm-double-angle-and-power-reduction-identities]]: $\cos(2\theta)=\cos^2\theta-\sin^2\theta$ and $\sin(2\theta)=2\sin\theta\cos\theta$.

## Proof

1.1 The mark $S_M$ fixes each unmarked basis vector and negates each marked basis vector. Thus its matrix on $(|B\rangle,|G\rangle)$ is $\operatorname{diag}(1,-1)$ and it preserves the plane. [given, F1, F2, algebra]

1.2 In the same basis, [F1] and the rank-one convention [F3] give $R_s=2\begin{pmatrix}\cos^2\theta&\cos\theta\sin\theta\\\cos\theta\sin\theta&\sin^2\theta\end{pmatrix}-I =\begin{pmatrix}\cos2\theta&\sin2\theta\\\sin2\theta&-\cos2\theta\end{pmatrix}$ by [F4]. [F1, F3, F4, algebra]

2.1 Multiplying the matrix in step 1.2 by $\operatorname{diag}(1,-1)$ from step 1.1 gives the stated rotation matrix. Its columns lie in the same two-dimensional plane, so the plane is invariant; the initial coordinate column is $(\cos\theta,\sin\theta)^{\mathsf T}$ by [F1]. [step 1.1, step 1.2, F1, algebra] ∎
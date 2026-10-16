---
id: thm-qa-simon-postquery-coset-state
kind: theorem
title: "Simon query and output measurement produce a coset pair"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - alg-qa-simon-one-sample
  - def-qa-simon-promise
  - def-qa-standard-bit-query
  - lem-qa-hadamard-f2-kernel
  - def-qc-dirac-notation-conversion
  - def-qc-projective-measurement
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-qc-instrument-outcome-law-normalizes
  - thm-qc-instrument-conditional-state-is-density
  - thm-non-negative-square-root-exists-and-is-unique
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - thm-qc-unit-vector-projector-is-density
  - def-trace-of-an-endomorphism
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; all register bases, branches, and sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3 §§3.1-3.3, PDF pp.35-39: Simon promise, one-sample derivation, uniform s-perp law, rank growth, expected queries and classical lower-bound proof."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11-13 and §6.5, PDF pp.27-33: independent Simon sample derivation and finite-abelian HSP context."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33-37: Simon as a finite-abelian hidden-subgroup instance and Fourier sampling context."
---
## Statement

For a Simon oracle with hidden nonzero string $s$, immediately after its one standard query the joint state is

$$2^{-n/2}\sum_{x\in\{0,1\}^n}|x\rangle|f(x)\rangle.$$

For each output value $v$ in the image of $f$, the target Lüders instrument has probability $2^{1-n}$ and its conditional joint state factors as

$$\frac{|x_0\rangle+|x_0\oplus s\rangle}{\sqrt2}\otimes|v\rangle,$$

where $x_0$ is either preimage of $v$. Outcomes outside the image have probability zero. Hence the address register conditional state is the normalized coset-pair vector shown above.

## Facts & Assumptions
**Given:** A Simon oracle with $n\ge1$, $m\ge n-1$, and unique nonzero hidden string $s$.

[F1] [[def-qa-simon-promise]]: every fiber is exactly one pair $\{x,x\oplus s\}$, and $s\ne0$.

[F2] [[def-qa-standard-bit-query]]: the ordinary oracle acts by $U_f|x\rangle|z\rangle=|x\rangle|z\oplus f(x)\rangle$ on the ordered address and target bases.

[F3] [[alg-qa-simon-one-sample]]: the address is prepared uniformly by $H^{\otimes n}$, queried once, and the target is measured with the branch maps $X\mapsto P_vXP_v$ for $P_v=I\otimes|v\rangle\langle v|$.

[F4] [[def-qc-projective-measurement]]: a projective measurement is a finite family of pairwise orthogonal self-adjoint idempotents summing to the identity.

[F5] [[def-qc-povm-and-outcome-law]]: a POVM is a finite family of nonnegative effects summing to the identity.

[F6] [[thm-non-negative-square-root-exists-and-is-unique]]: every nonnegative operator has a unique nonnegative square root.

[F7] [[thm-qc-luders-instrument-of-a-povm-is-valid]]: for a finite POVM $(E_v)$, the square-root maps $X\mapsto E_v^{1/2}XE_v^{1/2}$ form a finite instrument.

[F8] [[def-qc-instrument-and-conditional-state]]: an instrument assigns branch probability $\operatorname{tr}(\mathcal I_v(\rho))$ and, on a positive branch, conditional state $\mathcal I_v(\rho)/\operatorname{tr}(\mathcal I_v(\rho))$.

[F9] [[thm-qc-instrument-outcome-law-normalizes]]: for an input density operator, the branch weights of a finite instrument are nonnegative and sum to one.

[F10] [[def-qc-tensor-register-and-permutation]]: elementary tensor products use the displayed factor order and product inner product.

[F11] [[thm-qc-computational-basis-orthonormal]]: each computational register basis is orthonormal.

[F12] [[def-qc-dirac-notation-conversion]]: $|w\rangle\langle w|$ sends $z$ to $\langle z,w\rangle_{\rm root}w$.

[F13] [[def-trace-of-an-endomorphism]]: trace is the sum of diagonal entries in any finite-dimensional basis.

[F14] [[lem-qa-hadamard-f2-kernel]]: the tensor Hadamard sends $|0^n\rangle$ to the uniform vector $2^{-n/2}\sum_x|x\rangle$.

[F15] [[thm-qc-unit-vector-projector-is-density]]: the outer product of a unit vector is a density operator.

## Proof

1.1 The Hadamard-character formula [F14] gives $H^{\otimes n}|0^n\rangle=2^{-n/2}\sum_x|x\rangle$. Applying [F2] to this vector and the zero target produces the displayed joint vector $\Psi$. Its $2^n$ orthogonal terms all have squared coefficient $2^{-n}$ by [F10]–[F11], so $\|\Psi\|=1$ and $|\Psi\rangle\langle\Psi|$ is a density operator by [F15]. [given, F2, F3, F10, F11, F14, F15, algebra]

1.2 For each $v$, the maps in [F3] have projectors $P_v$. By [F10]–[F11], computational basis vectors are orthonormal, so the $P_v$ are self-adjoint idempotents, pairwise orthogonal, and sum to the identity. Also $\langle P_vz,z\rangle=\langle P_vz,P_vz\rangle\ge0$, so these projectors form a POVM by [F4]–[F5]. The nonnegative square root of each projector is itself by [F6]; hence [F7] makes the branch maps a valid instrument with the probabilities and conditional states of [F8]. [given, F3, F4, F5, F6, F7, F8]

1.3 Fix $v$ in the image and let $x_0$ be one preimage. Set $w_v:=2^{-n/2}(|x_0\rangle+|x_0\oplus s\rangle)\otimes|v\rangle$. The post-query vector projected into branch $v$ is
$$2^{-n/2}\sum_{x:f(x)=v}|x\rangle|v\rangle=w_v$$
by [F1]. The two address basis vectors are distinct and orthonormal by [F1] and [F11]. [given, F1, F3, F11, construct, algebra]

2.1 The branch operator is the rank-one map $|w_v\rangle\langle w_v|$ for the projected vector $w_v$ in step 1.3. In the product basis its only nonzero diagonal entries are the two squared coefficients $2^{-n}$, by [F12]–[F13]. Thus the branch probability is $\operatorname{tr}(|w_v\rangle\langle w_v|)=2^{1-n}$. An output outside the image has zero projected vector and therefore zero trace. [given, F3, F12, F13, step 1.3, algebra]

3.1 Dividing the projected vector in step 1.3 by its norm $2^{(1-n)/2}$ gives the normalized conditional state in the Statement; it factors into an address vector and the fixed output basis vector $|v\rangle$. Its rank-one outer product is a density operator by [F15], and its probability is positive, so it is the conditional state in [F8]. There are exactly $2^{n-1}$ image values by the fiber partition in [F1], and their probabilities sum to one as required by [F9]. [given, F1, F8, F9, F15, step 1.3, step 2.1, algebra] ∎


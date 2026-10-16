---
id: thm-qc-state-preparation-rotation-level-upper-bound
kind: theorem
title: QC24 State Preparation Rotation Level Upper Bound
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - alg-qc-state-preparation
  - lem-qc-prefix-norm-rotation-identities
  - def-qc-toffoli-and-fredkin
  - def-qc-controlled-unitary-access
  - def-qc-pauli-matrices
  - def-qc-ordered-bitstring-encoding
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-axis-rotation-pauli-formula
  - thm-qc-computational-basis-orthonormal
  - def-qc-elementary-circuit-resources
  - def-qc-circuit-denotational-semantics
  - thm-polar-form-with-unique-principal-argument
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
---

## Statement

For an integer $n\ge0$, $D=2^n$, and a normalized explicit amplitude table, [[alg-qc-state-preparation]] exactly prepares the target ray using at most $D-1$ prefix rotations and at most $D$ leaf phases. The specified Toffoli flag chain expands each operation into $O(n+1)$ bounded-arity gates using at most $\max\{n-1,0\}$ reusable clean work bits, so the complete circuit has $O((n+1)D)$ gates and serial depth, in addition to the $n$ data qubits. For $n=0$, the ray is trivial and no gate is needed.

## Facts & Assumptions

**Given:** The exact algorithm, a normalized table $(a_x)$, and $D=2^n$.

[F1] The algorithm applies prefix rotations with angles determined by the child subtree norms, uses the stated clean Toffoli flag chain, and applies each nonzero relative leaf phase after subtracting the reference argument ([[alg-qc-state-preparation]]).

[F2] At a positive-norm prefix, the rotation half-angle has cosine and sine equal to the child-radius ratios ([[lem-qc-prefix-norm-rotation-identities]]).

[F3] Toffoli maps $|a,b,t\rangle$ to $|a,b,t\oplus ab\rangle$ and preserves its two control bits ([[def-qc-toffoli-and-fredkin]]).

[F4] A controlled operation on a control-first register applies its target unitary exactly on the control-$1$ subspace and the identity on the control-$0$ subspace ([[def-qc-controlled-unitary-access]]).

[F5] The Pauli matrix $X$ interchanges computational basis vectors, $X|c\rangle=|1-c\rangle$ for $c\in\{0,1\}$ ([[def-qc-pauli-matrices]]).

[F6] The ordered bitstring encoding places table entry $a_x$ at basis vector $|x\rangle$ ([[def-qc-ordered-bitstring-encoding]]).

[F7] In the algorithm's convention, $R_y(\theta)$ has first column $(\cos(\theta/2),\sin(\theta/2))^{\mathsf T}$ and is unitary ([[thm-qc-axis-rotation-pauli-formula]]).

[F8] The ordered computational basis is orthonormal ([[thm-qc-computational-basis-orthonormal]]).

[F9] A finite layered circuit denotes the chronological product of its local gate embeddings ([[def-qc-circuit-denotational-semantics]]).

[F10] Every nonzero $z$ satisfies $z=|z|e^{i\arg z}$ for the principal argument, and $|e^{i\phi}|=1$ for real $\phi$ ([[thm-polar-form-with-unique-principal-argument]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 Before any rotation the only nonzero prefix amplitude is the empty-prefix amplitude $1=r_{\emptyset}$ because the table is normalized. [given, F1]

1.2 Consider a computational-basis control word $c_1,\ldots,c_m$. Conjugating each zero-control by $X$ turns the requested pattern into all ones by [F5]. Starting from zero work bits, [F3] first sets $w_1=c_1c_2$ and then, successively, $w_{j-1}=w_{j-2}c_j$; induction on $j$ shows the final flag is $1$ exactly on the requested control pattern. The controlled operation in [F4] therefore acts only on that branch and changes neither the controls nor the flag. The basis action [F3] shows each Toffoli is its own inverse, and [F5] shows $X$ is its own inverse, so reversing the Toffoli list and undoing the $X$ conjugations restores all work bits to zero. For a leaf phase, the phase gate is diagonal and also leaves the flag's bit value unchanged. For one control the direct controlled block has the same branch action, and for no controls the one-qubit block acts on every branch. The Toffoli and $X$ are basis permutations, the rotations are unitary by [F7], and controlled blocks are unitary by [F4]; the phase gates are unitary by [F10]. The basis calculation extends linearly to superpositions under [F8] and [F9]. [F1, F3, F4, F5, F7, F8, F9, F10, given, construct, induction]

2.1 Suppose at depth $l$ every prefix $p$ has amplitude $r_p$ on $|p0^{n-l}\rangle$ under the basis order in [F6]. If $r_p>0$, [F1], [F2], and [F7] split that amplitude into the nonnegative real amplitudes $r_p(r_{p0}/r_p)=r_{p0}$ and $r_p(r_{p1}/r_p)=r_{p1}$ on the two child prefixes. Step 1.2 shows the rotation is confined to the selected prefix branch; distinct length-$l$ prefixes therefore leave each other's amplitudes unchanged. If $r_p=0$, both children have radius zero and the zero branch remains zero without division. Thus induction gives the nonnegative real leaf amplitude $r_x=|a_x|$ at every leaf. [F1, F2, F6, F7, F8, F9, step 1.1, step 1.2, algebra, cases]

3.1 Put $\phi_*=\arg(a_{x_*})$ for the first nonzero leaf. For every other nonzero leaf, [F10] gives $e^{i(\arg(a_x)-\phi_*)}|a_x|=e^{-i\phi_*}a_x$. The reference leaf has unchanged amplitude $|a_{x_*}|=e^{-i\phi_*}a_{x_*}$, so the same scalar multiplies every nonzero coordinate. A zero relative phase needs no gate. Its flag ladder restores the work bits by step 1.2, and a diagonal phase leaves the flag's bit value unchanged. Zero leaves stay zero. Thus the joint output is $e^{-i\phi_*}a\otimes|0^s\rangle$ with the reused workspace zero, and its data ray is exactly $[a]$. [F1, F10, step 1.2, step 2.1, algebra]

4.1 The number of prefixes at depths $0$ through $n-1$ is $\sum_{l=0}^{n-1}2^l=D-1$, and there are at most $D$ leaf phases. A control of $m\ge2$ bits uses $2(m-1)$ Toffolis, at most $2m$ $X$ gates for zero-control conjugations, and one controlled one-qubit block; it uses $m-1$ clean work bits. Prefix rotations have $m\le n-1$ controls and leaf phases have $m=n$, so the maximum work count is $\max\{n-1,0\}$; the $m=0,1$ cases use constant resources. Since $m\le n$, each of at most $2D-1$ operations costs $O(n+1)$ gates and serial depth, and step 1.2 shows the same work bits are restored and reused. For $n=0$, both operation lists are empty and the normalized one-entry table has a single ray. [F1, step 1.2, given, algebra, cases] ∎

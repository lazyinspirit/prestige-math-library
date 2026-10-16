---
id: thm-qa-qft-finite-gate-set-compile-cost
kind: theorem
title: Finite universal-gate compilation cost for the truncated QFT
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps: [alg-qa-truncated-binary-qft-circuit, thm-qa-truncated-qft-operator-norm-error, def-qa-qft-gate-cost-model, def-qc-elementary-circuit-resources, def-qc-circuit-denotational-semantics, lem-qc-local-gate-wire-embedding, lem-qa-swap-is-three-cnot-circuit, thm-qc-one-control-unitary-two-cnot, def-qc-controlled-phase-rotation, alg-qc-solovay-kitaev-unitary-compiler, thm-qc-solovay-kitaev-error-and-resource-bound, def-qc-inverse-closed-dense-su2-gate-set, thm-qc-controlled-global-phase-is-relative-phase, thm-qa-projective-operator-closeness-bounds-output-distribution, lem-qa-tensor-extension-preserves-operator-norm, def-qc-tensor-map, def-operator-norm-on-a-finite-dimensional-inner-product-space, cor-operator-norm-submultiplicative-and-t-star-t-identity, cor-triangle-inequality-for-inner-product-norm, thm-finite-dimensional-isometry-characterisations, cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus, thm-every-complex-number-has-a-square-root, lem-complex-conjugation-and-modulus-laws]
axiom_use: "No choice axiom is used once the finite exact decompositions are supplied; the scalar roots and compiler outputs are selected for only finitely many factors."
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits"
      url: "https://arxiv.org/pdf/quant-ph/0406176"
      locator: "§§5.1–5.3 and Appendix A.1–A.2, PDF pp.11–16: recursive QSD and CNOT-count optimization instructions"
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm"
      url: "https://arxiv.org/pdf/quant-ph/0505030"
      locator: "§§3–4, PDF pp.3–9: SU(2) recursive approximation and word-length analysis; finite-precision bit costs are not supplied"
---

## Statement

Each retained Hadamard or complete controlled-phase block has an exact no-ancilla decomposition with at most four one-qubit $U(2)$ gates and two CNOTs, uniformly in its angle. Fix an integer $c\ge1$ bounding both counts for the chosen decompositions; $c=4$ always suffices. Assume QC12's fixed inverse-closed dense one-qubit alphabet $G\subset SU(2)$, its exact-real compiler, and a fixed rational $0<\kappa\le\eta_0<64^{-2}$ within the certified compiler range.

Let $n\ge1$, rational $0<\eta<1$, and put

$$m=\min\{n,\lceil\log_2(4\pi n/\eta)\rceil\},\qquad L=n+\sum_{s=2}^{\min(m,n)}(n-s+1),\qquad \delta=\min\{\eta/(2cL),\kappa\}.$$

Compile each truncated-circuit block using that exact decomposition, compile each resulting one-qubit special-unitary factor to operator-norm error at most $\delta$ by QC12, and keep every phase scalar as metadata for the entire standalone circuit. Expand final SWAPs into exact CNOTs. Then the compiled unitary $C$ satisfies

$$d_{\rm pr}(C,\operatorname{QFT}_{2^n})\le\eta,$$

so every unit-input computational-basis output law differs from that of $\operatorname{QFT}_{2^n}$ by total variation at most $\eta$. Its finite-set gate count is

$$O\!\left(nm\,\log^{3.97}(2nm/\eta)\right).$$

This is a gate-count claim under the stated exact-real compiler interface; it gives no classical bit-time bound for generating arbitrary target-angle descriptions and makes no outer-controlled-QFT compilation claim.

## Facts & Assumptions

**Given:** $n\ge1$, rational $0<\eta<1$, the exact fixed-arity decompositions, QC12's SU(2) compiler hypotheses, and a computational-basis measurement of the compiled standalone circuit.

[F1] The truncated circuit retains $n$ Hadamards, the controlled phases with $2\le s\le m$, and the final reversal swaps ([[alg-qa-truncated-binary-qft-circuit]]).

[F2] Its operator-norm error from the exact QFT is at most $2\pi n2^{-m}$ when $m<n$, and zero when $m=n$ ([[thm-qa-truncated-qft-operator-norm-error]]).

[F3] The gate-cost model counts exact CNOTs and keeps compiler scalar phases for the whole standalone circuit ([[def-qa-qft-gate-cost-model]]).

[F4] Projective operator distance at most $\zeta$ bounds each unit-input computational-basis output-law distance by $\zeta$ ([[thm-qa-projective-operator-closeness-bounds-output-distribution]]).

[F5] The operator norm is the maximum over unit vectors, is submultiplicative, and satisfies a triangle inequality ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[cor-operator-norm-submultiplicative-and-t-star-t-identity]], [[cor-triangle-inequality-for-inner-product-norm]]).

[F6] Finite-dimensional unitaries preserve vector norms and have operator norm one ([[thm-finite-dimensional-isometry-characterisations]]).

[F7] The QC12 compiler takes a target $S\in SU(2)$ and rational $0<\delta\le\eta_0$, using exact-real arithmetic ([[alg-qc-solovay-kitaev-unitary-compiler]]).

[F8] For $0<\delta\le\eta_0<64^{-2}$, the compiler returns a word with operator-norm error at most $\delta$ and length $O(\log^{3.97}(1/\delta))$ ([[thm-qc-solovay-kitaev-error-and-resource-bound]]).

[F9] $G$ is a fixed inverse-closed dense finite subset of $SU(2)$ ([[def-qc-inverse-closed-dense-su2-gate-set]]).

[F10] The determinant of a finite-dimensional unitary has modulus one ([[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]).

[F11] Every complex number has a square root ([[thm-every-complex-number-has-a-square-root]]).

[F12] Complex modulus is multiplicative ([[lem-complex-conjugation-and-modulus-laws]]).

[F13] Adding spectator factors or moving target wires preserves the operator norm of a local gate ([[lem-qa-tensor-extension-preserves-operator-norm]]).

[F14] Tensor maps act linearly on each factor; in particular $(\lambda W)\otimes I=\lambda(W\otimes I)$ ([[def-qc-tensor-map]]).

[F15] Each final SWAP has an exact three-CNOT implementation ([[lem-qa-swap-is-three-cnot-circuit]]).

[F16] A local unitary on a specified ordered tuple of wires has a unique unitary global embedding acting by that gate on those wires and by the identity on the others ([[lem-qc-local-gate-wire-embedding]]).

[A1] [[thm-qc-one-control-unitary-two-cnot]] supplies the exact decomposition of a controlled $U(2)$ into two CNOTs and the four one-qubit gates displayed in its proof. In [[def-qc-controlled-phase-rotation]], each complete controlled phase is $C(P_\theta)$ for the unitary $P_\theta=\operatorname{diag}(1,e^{i\theta})$. A Hadamard is itself one one-qubit gate.

[A2] [[def-qc-elementary-circuit-resources]] counts declared gate occurrences and includes every workspace wire in width; the decompositions in [A1] use the two data wires only.

[A3] [[def-qc-circuit-denotational-semantics]] assigns a chronological gate list its right-to-left product, using the unique embedding of each local gate.

[A4] [[thm-qc-controlled-global-phase-is-relative-phase]] proves that a scalar phase on a controlled block becomes a relative control phase; its inspected draft statement and full proof supply the outer-control caveat.

## Proof

**Proof technique:** direct.

**Given:** The parameters, circuit and compiler and exact decomposition interfaces above.

1.1 If $m<n$, then $2^m\ge4\pi n/\eta$, so [F2] gives truncation error at most $\eta/2$. If $m=n$, the truncated circuit is exact by [F2]. Thus in either case the ideal truncated unitary is within $\eta/2$ of the exact QFT. [given, F2, algebra]

1.2 There are $L$ retained one- or two-qubit blocks. For $m\ge1$, each summand in $L$ is at most $n$, hence $L\le n+n(m-1)=nm$. The final reversal uses $\lfloor n/2\rfloor$ swaps, or $3\lfloor n/2\rfloor=O(n)$ exact CNOTs by [F15] and the resource convention [A2]. [given, F1, F3, F15, A2, algebra]

1.3 For any factor $U\in U(2)$, [F10] gives $|\det U|=1$. Choose $\lambda\in\mathbb C$ with $\lambda^2=\det U$ by [F11]. Then [F12] gives $|\lambda|^2=|\det U|=1$, so $|\lambda|=1$. The matrix $S=\lambda^{-1}U$ is unitary and has determinant $1$, hence $S\in SU(2)$. By [F7]–[F9] and $0<\delta\le\kappa\le\eta_0$, compile $S$ to a word $W$ with $\|S-W\|\le\delta$ and $O(\log^{3.97}(1/\delta))$ gates. Thus $\|U-\lambda W\|\le\delta$. The local error lifts to the full register with the same operator norm by [F13]. By [F14], the embedded scalar $\lambda$ remains one scalar on the entire standalone circuit. [given, F7, F8, F9, F10, F11, F12, F13, F14, algebra]

2.1 Apply [A1] to each retained block: use one gate for a Hadamard and, for $C(P_\theta)$, the three target gates $A,B,C$ and one control phase gate from the controlled-unitary proof, with its two exact CNOTs. The phase gate is retained, so this is the complete controlled phase. These lists prove the uniform bound with $c=4$, independently of the angle. For any chosen lists bounded by $c$ as in the statement, the total number $K$ of one-qubit factors obeys $K\le cL$, and at most $cL$ CNOTs occur. Keep the Hadamards as one-gate lists, so $K\ge n\ge1$. No ancilla or unproved QSD optimization is used. [given, A1, step 1.2, algebra]

3.1 By the circuit denotation interface [A3], compose the compiled factors in chronological order, leaving every decomposition CNOT exact. The global embeddings act on their specified wires by [F16]. The exact-minus-compiled product telescopes with one local difference per one-qubit factor. Every surrounding factor is unitary and has norm one by [F6]; [F5] bounds the norm of the sum by the sum of local errors, at most $K\delta\le cL\delta\le\eta/2$. The product of the $K$ scalars from step 1.3 is one scalar for the whole standalone circuit. [given, A3, F3, F5, F6, F16, step 2.1, step 1.3, algebra]

4.1 Let $C$ be the compiled circuit and let $\lambda$ be the total scalar from step 3.1. The triangle inequality, step 1.1 and step 3.1 give $\|\operatorname{QFT}_{2^n}-\lambda C\|\le\eta$. By the max-over-unit-vectors definition in [F5], operator-norm homogeneity gives $\|C-\overline\lambda\operatorname{QFT}_{2^n}\|=\|\overline\lambda(\operatorname{QFT}_{2^n}-\lambda C)\|=\|\operatorname{QFT}_{2^n}-\lambda C\|\le\eta$; the first vectors differ by the scalar $-1$, and $|\lambda|=1$. Choosing $\overline\lambda$ in the defining infimum proves $d_{\rm pr}(C,\operatorname{QFT}_{2^n})\le\eta$. Applying [F4] gives the asserted total-variation bound for every unit input. [given, F4, F5, step 1.1, step 3.1, algebra]

4.2 The scalar in step 3.1 is harmless for this standalone output law because the conclusion uses projective distance and [F4]. It cannot be silently discarded if this entire compiled block is placed under outer control, by [A4]; no outer-controlled compilation claim is made. [given, F4, A4, step 3.1]

5.1 By [F8], the $K\le cL$ compiled one-qubit factors use $O(cL\log^{3.97}(1/\delta))$ gates. The decomposition CNOTs contribute at most $cL$ and the final SWAP expansion contributes $3\lfloor n/2\rfloor$ exact CNOTs by [A2,F15]. Since $L\le nm$ and $1/\delta=\max\{2cL/\eta,1/\kappa\}$ with fixed $c,\kappa$, $\log(1/\delta)=O(\log(2nm/\eta))$. Therefore the total is $O(nm\log^{3.97}(2nm/\eta))$. No step bounds the classical bit-time for target-angle descriptions. [given, A2, F8, F15, step 1.2, step 2.1, algebra] ∎

## Remarks

No axiom of choice is needed once the finite exact factor lists are supplied: the scalar roots and finite compiler outputs are selected for the finitely many explicit gates. The uniform fixed-arity factor count follows from the explicit controlled-unitary construction in step 2.1; the compiler assumptions remain those stated above.

---
id: thm-qc-two-level-gate-synthesis-correct
kind: theorem
title: Correctness of Gray-Path Two-Level Synthesis
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - alg-qc-two-level-gate-to-elementary-gates
  - def-qc-two-level-unitary
  - def-qc-ordered-bitstring-encoding
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - thm-qc-computational-basis-orthonormal
  - thm-qc-multicontrolled-ancilla-resource-tradeoff
  - lem-qc-borrowed-bit-multicontrolled-x-linear
  - thm-qc-one-control-unitary-two-cnot
  - thm-qc-one-qubit-euler-decomposition
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-polar-form-with-unique-principal-argument
  - thm-sine-and-cosine-addition-formulas
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---

## Statement

The algorithm of [[alg-qc-two-level-gate-to-elementary-gates]] realizes the exact two-level unitary on the ordered selected pair $(x,y)$ and fixes every other computational-basis vector. Write $d$ for their Hamming distance and $m=n-1$. Before expansion there are $2(d-1)$ pattern-controlled swaps and one pattern-controlled target block.

Here are exact post-expansion counts for its literal circuits. A cost pair $(c,q)$ counts CNOTs and arbitrary one-qubit gates, respectively; pairs are added componentwise and identity gate occurrences are retained. Define
$$E_1=(1,0),\quad E_2=(8,12),\quad E_s=(4s-8)(8,12)\quad(s\ge3),$$
$$B_1=(1,0),\quad B_2=(8,12),\quad B_r=2E_{\lceil r/2\rceil}+2E_{\lfloor r/2\rfloor+1}\quad(r\ge3).$$
For a positive $m$-controlled one-qubit call the no-workspace cost is
$$Q_0=(0,1),\quad Q_1=(2,4),\quad Q_m=Q_{m-1}+2B_{m-1}+(4,8)\quad(m\ge2),$$
and the selected one-clean-bit cost is $K_m=2B_m+(2,4)$ for $m\ge1$ (use $K_0=Q_0$ with no work bit). For each forward swap $j$, choose $S_j\in\{Q_m,K_m\}$, and for the middle block choose $T\in\{Q_m,K_m\}$. If $z_j$ and $z_V$ are the numbers of zero-valued controls in their patterns, the exact total pair is
$$2\sum_{j=0}^{d-2}\bigl(S_j+(0,2z_j)\bigr)+T+(0,2z_V).$$
Its sum of coordinates is the exact elementary gate count. All-no-workspace selection uses $n$ wires and $O(dn^2)$ gates; all-clean selection uses at most $n+1$ wires and $O(dn)$ gates. For mixed selections one clean bit suffices and is reused sequentially, returned to zero after each call. When $n=1$, the circuit is one arbitrary one-qubit gate with cost $(0,1)$ and no work bit.

## Facts & Assumptions

**Given:** Distinct labels $x,y$, block $V$, and the path and literal expansion choices of [[alg-qc-two-level-gate-to-elementary-gates]].

[F1] [[def-qc-two-level-unitary]]: the desired two-level operator applies $V$ on the ordered pair $(|x\rangle,|y\rangle)$ and is identity on its orthogonal complement.

[F2] [[def-qc-ordered-bitstring-encoding]]: a computational basis word is identified with its ordered bitstring, so individual wire values and bit flips determine the corresponding basis label.

[F3] [[def-qc-cnot-and-control-target-order]]: a CNOT flips its target bit exactly when its named control bit is $1$.

[F4] [[def-qc-circuit-denotational-semantics]]: chronological circuit layers $L_1,\ldots,L_d$ denote $U_{L_d}\cdots U_{L_1}$.

[F5] [[def-qc-elementary-circuit-resources]]: costs count declared gate occurrences under the explicit operation model.

[F6] [[thm-qc-computational-basis-orthonormal]]: the ordered computational basis of the register is orthonormal.

[F7] [[thm-qc-multicontrolled-ancilla-resource-tradeoff]] gives exact no-workspace $O(m^2)$ and one-clean-bit $O(m)$ elementary constructions; each clean call returns its work bit to zero.


[F8] [[lem-qc-borrowed-bit-multicontrolled-x-linear]] supplies an exact $O(r)$ elementary implementation of $C^r(X)$ with one borrowed wire, whose full operator is $C^r(X)\otimes I$ even on correlated inputs.

[F9] [[thm-qc-one-control-unitary-two-cnot]] supplies an exact two-CNOT realization of each controlled one-qubit matrix with arbitrary one-qubit gates, retaining its scalar phase.

[F10] [[alg-qc-two-level-gate-to-elementary-gates]] specifies the forward path swaps, the final controlled block with the ordered-block reversal when needed, their reversed adjoints, and the chosen literal expansions.

[F11] [[thm-qc-one-qubit-euler-decomposition]] gives the exact $e^{i\delta}R_z(\alpha)R_y(\theta)R_z(\beta)$ decomposition and the displayed matrices for $R_z$ and $R_y$.

[F12] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] diagonalizes a unitary in an orthonormal eigenbasis; [[thm-polar-form-with-unique-principal-argument]] supplies polar angles for its unit eigenvalues, and [[thm-sine-and-cosine-addition-formulas]] gives the double-angle identities.

## Proof

1.1 By [F2] and [F3], each path swap is an $X$ controlled on the other bits' fixed values, so it exchanges exactly the two indicated basis labels and fixes every other basis vector. Each swap is a permutation of the orthonormal computational basis [F6], hence a unitary. Their chronological product $P$ sends $x=g_0$ to $g_{d-1}$ and fixes $y=g_d$, because the last path edge is deliberately omitted. [given, F1, F2, F3, F6, algebra]

1.2 For the algorithm's single-control list $S$, direct multiplication of the rotation matrices in [F11] gives $ABC=I$ and $AXBXC=e^{-i\delta}W$. Its two control branches therefore have target blocks $I$ and $e^{-i\delta}W$; the final phase gate makes them $I,W$ exactly, as required by [F9]. The list in [F10] contains exactly two CNOTs and four one-qubit occurrences, even when one is the identity. For the fixed matrix $J$, the orthogonal projectors $(I+X)/2$ and $(I-X)/2$ give $J^2=X$ and unitarity. The list $T(a,b;t)$ restores $b$ and applies target exponent $b-(b\oplus a)+a=2ab$ of $J$, hence is exactly Toffoli. Its cost is $3(2,4)+(2,0)=(8,12)$. [F9, F10, F11, algebra]

2.1 For the ladder $L$ of [F10] with $s\ge3$, each of its two compute/target/uncompute lists restores all spares, since the central $H$ changes only the target. Let $u_j,v_j$ be the values of $a_j$ just before $H$ in the first and second lists. The common initial spare values give $u_1=a_1\oplus c_1c_2$, $v_1=a_1$ and $u_j=a_j\oplus c_{j+1}u_{j-1}$, $v_j=a_j\oplus c_{j+1}v_{j-1}$ for $j\ge2$. Induction yields $u_j\oplus v_j=\prod_{h=1}^{j+1}c_h$, so the two target toggles sum to $c_s(u_{s-2}\oplus v_{s-2})=\prod_{h=1}^s c_h$. Thus $L$ is the exact controlled $X$ and restores its arbitrary spares. Its lists contain $2s-3$ and $2s-5$ Toffolis, giving $E_s=(4s-8)(8,12)$; the CNOT and Toffoli base cases give $E_1,E_2$. [F10, step 1.2, algebra, induction]

2.2 At the level of ideal data gates, let $M$ be the middle operation and $P$ the forward swap permutation. The middle gate acts only on $(g_{d-1},g_d)$; using $XVX$ when the target bit of $g_{d-1}$ is $1$ makes its ordered action exactly $V$. By [F4], the data product is $P^*MP$. Since $P$ sends $(x,y)$ to $(g_{d-1},g_d)$ and no other basis vector into this active pair, the conjugate acts by $V$ on $(x,y)$ and fixes every other data basis vector. Thus the ideal data circuit is the exact two-level unitary, including its scalar phase. [step 1.1, F1, F4, algebra]

3.1 For the balanced list $D$ in [F10], put $a=\prod_{c\in A}c$ and $b=\prod_{c\in B}c$. The ideal actions of $F,G,F,G$ send $z$ to $z\oplus a$ and back and toggle $t$ by $b(z\oplus a)\oplus bz=ab$. Step 2.1 restores the temporary spares after each ladder, so this is valid even when the spares include the other call's controls or target. The inequalities $q+1\ge p-2$ and $p\ge q-1$ ensure enough spares. Two calls of each size have pair $2E_p+2E_{q+1}=B_r$; the one- and two-control cases have pairs $B_1,B_2$. Equality on every basis word extends by [F6] to the full operator $C^r(X)\otimes I_z$, including entangled inputs, so these literal lists meet the borrowed-wire contract of [F8]. All spares are existing wires in each invocation of $D$. [F6, F8, F10, step 2.1, algebra]

4.1 For the no-workspace list $N$, [F12] gives the unitary square root $Z$ prescribed in [F10]: each eigenvalue has modulus one, its half-angle scalar squares to it by the double-angle identities, and that scalar has modulus one. For at least two controls, put $A_0=\prod_{c\in A}c$. The two $D(A;b;t)$ calls restore their borrowed data target exactly by step 3.1. Thus on a basis control branch the target exponent of $Z$ in the five-call list is $b-(b\oplus A_0)+A_0=2A_0b$. Induction on the number of controls, with the one-control case of step 1.2 and the zero-control gate as bases, proves its exact $C^m(W)$ action. No new wire is used. Its literal cost is $Q_{m-1}+2B_{m-1}+2(2,4)$, with $Q_1=(2,4)$ and $Q_0=(0,1)$; the recursion decreases the number of controls and terminates. [F10, F12, step 1.2, step 3.1, algebra, induction]

4.2 In the clean branch, $D(C;w;t)$ computes the controls' AND into $w$, restoring the borrowed data target by step 3.1. The list $S(w,t;W)$ applies $W$ precisely on that branch, and the reversed adjoint $D$ list restores $w=0$ for every data input. Linearity extends this basis calculation to superposed or entangled data. This gives the exact clean-input data operation and pair $2B_m+(2,4)=K_m$ for $m\ge1$; with no controls the sole gate has pair $K_0=Q_0$. No claim about the other initial workspace sector is required. [F10, step 1.2, step 3.1, algebra]

5.1 There are $d-1$ swaps, their $d-1$ inverses, and one controlled-$V$ call. Each zero-valued pattern control is implemented by an $X$ before and after the positive-control call, adding exactly two one-qubit occurrences under [F5]. Steps 4.1–4.2 prove that these selected expansions implement the ideal data gates exactly and each clean-bit call returns its work bit to zero, in the model of [F7]. Sequential composition therefore permits reuse of that bit. [step 2.2, step 4.1, step 4.2, F5, F7, F10, algebra]

6.1 If $d=1$, the swap lists are empty and the single controlled target block acts on $(x,y)$ directly. If $n=1$, there are no controls and the construction is one gate on the sole wire: its matrix is $V$ when $x=0,y=1$, and $XVX$ when $x=1,y=0$, so its action on the selected ordered pair is $V$ in both cases. For the other cases, steps 4.1–4.2 supply the elementary expansions used in step 5.1 with the stated work-bit return, consistently with [F7]. Thus every case is an exact elementary implementation. [step 1.1, step 2.2, step 4.1, step 4.2, step 5.1, F7, algebra]

7.1 A zero control adds two one-qubit $X$ gates, independently of the selected positive-control circuit. The reversed adjoint list has the same pair as its forward list. Adding all forward, reverse, and middle lists therefore gives the claimed total pair. Since $B_r=O(r)$, the recurrence sums to $Q_m=O(m^2)$, whereas $K_m=O(m)$. There are $2d-1$ calls, and at most $m$ negative controls per call, giving the two claimed total bounds for $n\ge2$. Sequential exact clean return permits reuse of one bit even on superposed data. The empty swap lists when $d=1$ and the direct ordered one-qubit block when $n=1$ give the stated boundary cases. [step 5.1, step 6.1, step 3.1, step 4.1, step 4.2, F5, F7, F10, algebra] ∎

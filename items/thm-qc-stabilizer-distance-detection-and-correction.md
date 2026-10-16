---
id: thm-qc-stabilizer-distance-detection-and-correction
kind: theorem
title: Stabilizer distance detection and correction
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - def-qc-local-operator-support-and-weight
  - def-qc-pauli-matrices
  - def-qc-stabilizer-code-space
  - def-qc-stabilizer-distance
  - def-qc-stabilizer-syndrome-and-logical-operators
  - def-qc-tensor-register-and-permutation
  - thm-qc-knill-laflamme-explicit-recovery
  - thm-qc-stabilizer-projector-and-dimension
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses finite Pauli expansions and the finite Knill–Laflamme recovery theorem."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1'
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

Let $n\ge1$ and let $S$ be a stabilizer code on $n$ qubits of distance $d(S)$. Every Pauli error $E$ of
weight less than $d(S)$ either acts as a scalar on the code space (when
$E\in Z_nS$) or is detected by some stabilizer check. A finite error channel
whose Kraus operators lie in the span of Pauli operators of weight at most
$t$, for $t\in\mathbb Z_{\ge0}$, is correctable whenever $2t<d(S)$. In particular, all unknown Pauli
errors of weight at most $t$ are correctable.

## Facts & Assumptions

**Given:** $n\ge1$, an $n$-qubit stabilizer code with projector $P$, distance $d(S)$,
and a finite family of Pauli or bounded-support error operators.

[F1] [[def-qc-stabilizer-distance]]: if the code dimension is $2^k$ with
$k>0$, $d(S)$ is the minimum weight of a normalizer Pauli outside $Z_nS$.
If $k=0$, the logical quotient is trivial, so $N(S)=Z_nS$ and $d(S)=+\infty$.

[F2] [[def-qc-stabilizer-syndrome-and-logical-operators]]: a Pauli outside
the normalizer anticommutes with at least one stabilizer generator.

[F3] [[def-qc-stabilizer-code-space]]: the code space is the common $+1$
eigenspace of every stabilizer element.

[F4] [[thm-qc-stabilizer-projector-and-dimension]]: $P$ is the orthogonal
projector onto the common $+1$ eigenspace; for every stabilizer $g$,
$gP=Pg=P$.

[F5] [[thm-qc-knill-laflamme-explicit-recovery]]: if
$PE_a^*E_bP=C_{ab}P$ for a finite channel's Kraus operators, a finite exact
recovery exists.

[F6] [[def-qc-pauli-matrices]]: the matrices $I,X,Y,Z$ are the exact
one-qubit Pauli basis matrices.

[F7] [[def-qc-tensor-register-and-permutation]]: ordered product bases
identify tensor products of one-qubit operators with operators on the
physical register.

[F8] [[def-qc-local-operator-support-and-weight]]: support is the set of
qubits on which an operator can act nontrivially, and Pauli weight is its
support size.

## Proof

1.1 Let $E$ be a Pauli of weight less than $d(S)$. The code space is the common fixed space by [F3], and [F4] gives $P=Pg=gP$ for each $g\in S$. If $E$ anticommutes with some $g\in S$, then $PEP=PgEP=-PEgP=-PEP$ and hence $PEP=0$. If instead $E$ commutes with every $g$, then $E\in N(S)$. For $k>0$, its weight is below the minimum in [F1], forcing $E\in Z_nS$; for $k=0$, the same conclusion follows from $N(S)=Z_nS$. Writing $E=zs$ gives $PEP=zP$. Thus every such Pauli has scalar code-space compression, and every nonzero one not in the scalar-phase stabilizer is detected. [F1, F2, F3, F4, algebra]

2.1 Enumerate the $m\ge1$ tensor Paulis of weight at most $t$ with factors in $\{I,X,Y,Z\}$ as $E_1,\ldots,E_m$; scalar phases do not affect correction. For any pair, the support of $E_a^*E_b$ lies in the union of their supports, so its weight is at most $2t<d(S)$. Step 1.1 gives $PE_a^*E_bP=C_{ab}P$ for a scalar $C_{ab}$. Let $V$ be the inclusion of the nonzero code space, so $P=VV^*$ by [F4]. Each $E_a$ is unitary by the matrices in [F6] and their tensor action [F7], so $F_a=E_a/\sqrt m$ are Kraus operators of the channel $\mathcal N(A)=m^{-1}\sum_a E_aAE_a^*$: each summand is a unitary conjugation and $\sum_aF_a^*F_a=I$. Applying [F5] to $PF_a^*F_bP=(C_{ab}/m)P$ gives a recovery $\mathcal R$. Its off-diagonal formula gives $\mathcal R(E_aVX V^*E_a^*)=C_{aa}X=X$, since $E_a^*E_a=I$. Thus this single recovery corrects every Pauli in the family. [F1, F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 On one qubit every matrix $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ has the expansion $A=\frac{a+d}{2}I+\frac{b+c}{2}X+\frac{c-b}{2i}Y+\frac{a-d}{2}Z$, as direct substitution of [F6] verifies. In the ordered one-qubit basis, the matrix units satisfy $|0\rangle\langle0|=(I+Z)/2$, $|1\rangle\langle1|=(I-Z)/2$, $|0\rangle\langle1|=(X+iY)/2$, and $|1\rangle\langle0|=(X-iY)/2$. For bit strings $a,b\in\{0,1\}^n$, [F7] identifies the global matrix unit $|a\rangle\langle b|$ with the tensor product of the corresponding one-qubit matrix units, so each global matrix unit is a linear combination of tensor Pauli operators. Every endomorphism has its matrix-unit expansion $A=\sum_{a,b}\langle A e_b,e_a\rangle\,|a\rangle\langle b|$ in this ordered computational basis; hence tensor Pauli operators span the full operator space. An operator supported on a fixed set of at most $t$ qubits is a linear combination of the tensor Paulis that are identity off that set, so each term has weight at most $t$. For Kraus operators $K_\mu=\sum_a u_{\mu a}E_a$ in the stated span, $PK_\mu^*K_\nu P=\bigl(\sum_{a,b}\overline{u_{\mu a}}u_{\nu b}C_{ab}\bigr)P$ by step 2.1. The code is nonzero by [F4], so [F5] applies to this actual finite channel and gives exact recovery. [F4, F5, F6, F7, F8, step 2.1, algebra] ∎

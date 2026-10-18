---
id: thm-qc-tqc-arbitrary-n-register-universality
kind: theorem
title: Arbitrary-size triple-encoded braid universality
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - thm-qc-tqc-fibonacci-single-qubit-density
  - thm-qc-tqc-spectator-extension
  - thm-qc-exact-arbitrary-unitary-qsd-upper-bound
  - lem-qc-tqc-leakage-logical-error-accumulation
  - lem-qc-tqc-determinant-character-phase
  - def-countable-choice
dependency_level: 11
axiom_use: Assumes exactly ACω through the Fibonacci density and joint-block density theorems; no full Axiom of Choice is used.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §IV.B.c, PDF pp. 53–57
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §§9.14–9.17, PDF pp. 53–62; different four-anyon encoding and chirality
---

## Statement

Assume $\mathrm{AC}_\omega$. For every $n\ge1$, every total charge $c$ with
$V(\tau^n\to c)\ne0$, every unitary $U$ on $n$ logical qubits, and every
$\epsilon>0$, the triple-$\tau$ code
$$(\mathbb C^2)^{\otimes n}\otimes V(\tau^n\to c)$$
admits a finite normalized braid word $V_b$ such that
$$\inf_{|z|=1}\|P_{\rm code}V_bP_{\rm code} -zJ(U\otimes I_S)J^*\|_{\mathrm{op}}\le\epsilon,\qquad \|(I-P_{\rm code})V_bP_{\rm code}\|_{\mathrm{op}}\le\epsilon.$$
Here $S=V(\tau^n\to c)$ is the spectator space, $J:(\mathbb C^2)^{\otimes n}\otimes S\to V(\tau^{3n}\to c)$ is the isometric triple-code inclusion, and the logical target is lifted as $U\otimes I_S$. The bounds are uniform over spectator fusion states. No efficient braid
word-length, search-time, or finite-precision bound is asserted.

## Facts & Assumptions

**Given:** The finite logical target, the triple code and spectator space,
$\epsilon>0$, and $\mathrm{AC}_\omega$.

[F1] The Fibonacci braid image on the three-$\tau$, total-$\tau$ space is
projectively dense in $PU(2)$.
[[thm-qc-tqc-fibonacci-single-qubit-density]]

[F2] Any adjacent two-logical-qubit target has a spectator-safe extension
with logical error and leakage at most the requested tolerance.
[[thm-qc-tqc-spectator-extension]]

[F3] Every finite-dimensional unitary has a finite exact QSD decomposition
into one-qubit gates and CNOTs; the theorem makes only its stated gate-count
claim. [[thm-qc-exact-arbitrary-unitary-qsd-upper-bound]]

[F4] Per-gate full-space errors add, and code-preserving ideal targets give
the same total bounds on logical block error and leakage.
[[lem-qc-tqc-leakage-logical-error-accumulation]]

[F5] Braid words carry a common scalar phase; it must be tracked under
coherent control. [[lem-qc-tqc-determinant-character-phase]]

[A1] $\mathrm{AC}_\omega$ is countable choice.
[[def-countable-choice]]

## Proof

1.1 Reassociation of the fusion trees gives the code factor $(\mathbb C^2)^{\otimes n}\otimes V(\tau^n\to c)$, with the second factor retaining every spectator fusion path. The code inclusion is $J$ on this full logical-and-spectator tensor product, and the target on it is $U\otimes I_S$. For $n=1$, only $c=\tau$ occurs and the single triple supplies the one-qubit code. [given, F2, construct]

1.2 By [F3], $U$ has a finite exact decomposition into one-qubit gates and CNOT gates. Replace each nonadjacent two-qubit gate by the exact standard sequence of adjacent SWAP targets, the gate on neighboring wires, and the inverse SWAP targets. These are abstract $U(4)$ targets, not assumed to be exact leakage-free braids. The result is a finite list of $G$ one-qubit or adjacent two-qubit targets whose product is $U$. [F3, algebra]

1.3 If $G=0$, then $U=I$ and the empty braid proves the statement. Otherwise put $\delta_j=\epsilon/G$ for $1\le j\le G$. For each one-qubit target $U_j$, projective density [F1] supplies a braid whose two-dimensional matrix is within $\delta_j$ of a phase multiple $z_jU_j$. Extend its ideal action on the local total-$\tau$ sector by $z_jU_j$ tensored with spectator identity, and on the local total-$1$ sector by the actual compiled braid action. This braid-dependent extension is unitary, preserves the code, and differs from the physical braid by at most $\delta_j$ on the full ambient space; the complementary sector agrees exactly, so density on that sector is not assumed. [A1, F1, F2, algebra]

2.1 For each adjacent two-qubit target, [F2] supplies a six-strand braid and a code-preserving ideal extension with full-space error at most $\delta_j$, including all spectator fusion sectors. The ideal one- and two-qubit extensions therefore give a finite code-preserving target sequence whose action on the code is $(\prod_j z_j)U$. [A1, F2, step 1.3, algebra]

3.1 Apply [F4] to the $G$ physical/ideal pairs. Their product differs in operator norm by at most $\sum_j\delta_j=\epsilon$. Compression to the code gives the logical block bound, while projection to its orthogonal complement gives leakage at most $\epsilon$. The product scalar $\prod_jz_j$, together with the common braid phases in [F5], is the single phase removed by the projective infimum; it is not free under coherent control. The proof gives existence only, because [F1] and [F2] supply no useful joint B6 word-length bound. [F1, F2, F4, F5, step 2.1, algebra] ∎
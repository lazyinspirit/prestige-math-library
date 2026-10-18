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
  - thm-qc-tqc-braid-action-unitary-and-artin
  - thm-qc-tqc-gauge-covariance
  - lem-qc-tqc-fusion-tree-dimension
  - ex-qc-tqc-fibonacci-data
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
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

Assume $\mathrm{AC}_\omega$. For every $n\ge1$, every total-charge label $c\in\{1,\tau\}$ with
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

[F6] The Fibonacci data and fusion-tree count give
$\dim V(\tau^3\to1)=1$ and $\dim V(\tau^3\to\tau)=2$. In an ordered
fusion-tree decomposition, a braid supported on a contiguous local block
acts on that block's fixed-charge factor and as the identity on the prefix,
suffix, and their fusion multiplicities; its fixed-charge action is unitary.
Dividing the physical action by its common $R_1$ phase retains these
properties; write $\widetilde\rho$ for the resulting normalized action.
[[thm-qc-tqc-braid-action-unitary-and-artin]]
[[thm-qc-tqc-gauge-covariance]]
[[lem-qc-tqc-fusion-tree-dimension]]
[[ex-qc-tqc-fibonacci-data]]
[[lem-qc-tqc-determinant-character-phase]]

[F7] Every finite-dimensional spectator fusion space has an orthonormal
basis. [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

[A1] $\mathrm{AC}_\omega$ is countable choice.
[[def-countable-choice]]

## Proof

1.1 Reassociation of the fusion trees gives the code factor $(\mathbb C^2)^{\otimes n}\otimes V(\tau^n\to c)$, with the second factor retaining every spectator fusion path. The code inclusion is $J$ on this full logical-and-spectator tensor product, and the target on it is $U\otimes I_S$. For $n=1$, only $c=\tau$ occurs and the single triple supplies the one-qubit code. [given, F2, construct]

1.2 By [F3], $U$ has a finite exact decomposition into one-qubit gates and CNOT gates. Replace each nonadjacent two-qubit gate by the exact standard sequence of adjacent SWAP targets, the gate on neighboring wires, and the inverse SWAP targets. These are abstract $U(4)$ targets, not assumed to be exact leakage-free braids. The result is a finite list of $G$ one-qubit or adjacent two-qubit targets whose product is $U$. [F3, algebra]

1.3 If $G=0$, then $U=I$ and the empty braid proves the statement. Otherwise put $\delta_j=\epsilon/G$ for $1\le j\le G$. For a one-qubit target $U_j$ at logical position $j$, let $p=3(j-1)$ and $q=3(n-j)$. Reassociate the ordered $3n$ strands into prefix, this triple, and suffix, without changing their order. The fusion-tree basis gives the orthogonal decomposition $$V(\tau^{3n}\to c)\cong\bigoplus_{\alpha,a,e,d}V(\tau^p\to\alpha)\otimes V(\tau^3\to a)\otimes V_{\alpha a}^{e}\otimes V(\tau^q\to d)\otimes V_{ed}^{c},$$ with zero-dimensional summands omitted and $\tau^0=\mathbf1$. By [F6], a braid word $\beta_j$ on this triple acts on each summand by the normalized block $\widetilde\rho_a(\beta_j)$ on $V(\tau^3\to a)$ and identity on all other factors. The code lies in the local total-$\tau$ summands, where $V(\tau^3\to\tau)\cong\mathbb C^2$ is the logical qubit; total-$1$ summands lie in the orthogonal complement. Projective density [F1] supplies $\beta_j$ and $z_j\in U(1)$ with $\|\widetilde\rho_\tau(\beta_j)-z_jU_j\|_{\rm op}\le\delta_j$. Define a code-preserving ideal unitary on each local total-$\tau$ summand as $z_jU_j$ tensored with identity on the ordered prefix, suffix, and fusion multiplicities; on each local total-$1$ summand define it to equal the normalized $\widetilde\rho_1(\beta_j)$. It is unitary, and its difference from the normalized braid is at most $\delta_j$ on every summand (at most $\delta_j$ on total $\tau$ and zero on total $1$). In a fixed fusion summand, group the factors before the local triple as $S_L$ and those after it as $S_R$. Expanding $\xi=\sum_{k,\ell}e_k\otimes\xi_{k\ell}\otimes f_\ell$ in orthonormal bases of $S_L,S_R$ supplied by [F7] gives $\|(I\otimes A\otimes I)\xi\|^2=\sum_{k,\ell}\|A\xi_{k\ell}\|^2\le\|A\|_{\rm op}^2\sum_{k,\ell}\|\xi_{k\ell}\|^2$ for each local block error $A$. Thus tensoring with the spectator identities does not increase the block error. For the orthogonal direct sum, squared norms add, so its norm is at most the maximum block norm (attained by a maximizing vector in a maximizing block); hence the full ambient error is at most $\delta_j$. [A1, F1, F6, F7, step 1.1, algebra]

2.1 For each adjacent two-qubit target, [F2] supplies a six-strand braid and a code-preserving ideal extension with full-space error at most $\delta_j$, including all spectator fusion sectors. The ideal one- and two-qubit extensions therefore give a finite code-preserving target sequence whose action on the code is $(\prod_j z_j)U$. [A1, F2, step 1.3, algebra]

3.1 Apply [F4] to the $G$ physical/ideal pairs. Their product differs in operator norm by at most $\sum_j\delta_j=\epsilon$. Compression to the code gives the logical block bound, while projection to its orthogonal complement gives leakage at most $\epsilon$. The product scalar $\prod_jz_j$, together with the common braid phases in [F5], is the single phase removed by the projective infimum; it is not free under coherent control. The proof gives existence only, because [F1] and [F2] supply no useful joint B6 word-length bound. [F1, F2, F4, F5, step 2.1, algebra] ∎

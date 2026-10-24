---
id: thm-qc-tqc-spectator-extension
kind: theorem
title: Six-anyon braid target extends uniformly to fusion spectators
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - lem-qc-tqc-b6-joint-su5-su8-density
  - def-qc-tqc-six-anyon-encoded-subspace
  - thm-qc-tqc-block-approximation-error
  - thm-qc-tqc-gauge-covariance
  - lem-qc-tqc-determinant-character-phase
  - def-countable-choice
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
dependency_level: 10
axiom_use: Assumes exactly ACω through the joint-density theorem; no full Axiom of Choice is used.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael H. Freedman, Michael J. Larsen, and Zhenghan Wang, A Modular Functor Which Is Universal for Quantum Computation"
      url: https://arxiv.org/pdf/quant-ph/0001108
      locator: §4, Theorem 4.1 and complete proof, printed pp. 17–21
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B and §IV.B.c, PDF pp. 7–11 and 53–57
---

## Statement

Assume $\mathrm{AC}_\omega$, $n\ge2$, and a total-charge label $c\in\{1,\tau\}$ with
$V(\tau^n\to c)\ne0$. The code in $3n$ $\tau$ anyons factors as
$\mathcal C_n\cong(\mathbb C^2)^{\otimes n}\otimes V(\tau^n\to c)$.
For any adjacent pair of encoded triples, any $U\in U(4)$, and any
$\delta>0$, one normalized six-strand braid induces an ambient operator
within $\delta$ of the code-preserving ideal extension of $U$ on the entire
fixed-charge space $V(\tau^{3n}\to c)$. Consequently, on code inputs, its
logical block error and leakage amplitude are each at most $\delta$, uniformly
over all spectator fusion paths. The full-space approximation bound also
holds on arbitrary ambient inputs, including states that already have a
component outside the code.

## Facts & Assumptions

**Given:** The triple code, the full fusion space, an adjacent pair of triples, $U\in U(4)$, $\delta>0$, and $\mathrm{AC}_\omega$.

[F1] The normalized six-strand image has closure containing $SU(5)\times SU(8)$, and for each $U\in U(4)$ there are determinant-one extensions $T_1=U\oplus(\det U)^{-1}$ and $T_\tau=U\oplus\operatorname{diag}((\det U)^{-1},1,1,1)$. [[lem-qc-tqc-b6-joint-su5-su8-density]] [[def-qc-tqc-six-anyon-encoded-subspace]]

[F2] A full-space norm bound by $\delta$ bounds logical block error and leakage by $\delta$. [[thm-qc-tqc-block-approximation-error]]

[F3] A local braid on a tensor factor acts as its braid operator tensored with the identity on spectator factors; unitary fusion-tree reassociation changes basis by a unitary. The physical braid phase is common to all charge and spectator blocks; write $\widetilde\rho$ for the normalized action obtained by removing it, which preserves the same local tensor-factor action. [[thm-qc-tqc-gauge-covariance]] [[lem-qc-tqc-determinant-character-phase]]

[F4] Every finite-dimensional spectator multiplicity space has an orthonormal basis. [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]

[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]]

## Proof

1.1 Each triple has fusion factor $V(\tau^3\to\tau)\cong\mathbb C^2$. Associating the $n$ triple charges first gives the code factorization $(\mathbb C^2)^{\otimes n}\otimes V(\tau^n\to c)$; the second factor records all spectator fusion paths. This is an orthogonal fusion-tree decomposition by [F1, F3]. [given, F1, F3, construct]

1.2 Let the chosen adjacent pair of triples occupy strands $3j-2,\ldots,3j+3$, and put $p=3(j-1)$ and $q=3(n-j-1)$. Reassociate the ordered input only, retaining the prefix of $p$ strands, the selected six-strand block, and the suffix of $q$ strands in that order; no permutation of strands is used. The fusion-tree basis gives the orthogonal decomposition $$V(\tau^{3n}\to c)\cong\bigoplus_{\alpha,a,e,d}V(\tau^p\to\alpha)\otimes V(\tau^6\to a)\otimes V_{\alpha a}^{e}\otimes V(\tau^q\to d)\otimes V_{ed}^{c},$$ where the sums run over simple charges and zero-dimensional summands are omitted (with $\tau^0=\mathbf1$). Every factor other than $V(\tau^6\to a)$ records a prefix, suffix, or fusion-multiplicity spectator. By [F3], a normalized braid word $\beta$ supported on the selected six consecutive strands acts on each summand as the identity on all other factors and $\widetilde\rho_a(\beta)$ on $V(\tau^6\to a)$. [given, F3, algebra]

2.1 For each local total charge $a$, let $T_a$ be the target extension in [F1]. On the decomposition in step 1.2 define $\mathcal W$ on each summand by the identity on every factor other than $V(\tau^6\to a)$ and by $T_a$ on that block. This is a unitary direct sum; it preserves the triple code and acts there as $U$ on the selected adjacent pair and identity on all other logical and spectator factors. Joint density [F1] gives one normalized six-strand braid word $\beta$ with $\|\widetilde\rho_a(\beta)-T_a\|_{\mathrm{op}}\le\delta$ for both $a=1,\tau$. [A1, F1, step 1.1, step 1.2, choose]

3.1 In a summand of step 1.2, group the factors before $V(\tau^6\to a)$ as $S_L$ and those after it as $S_R$. Choose orthonormal bases $(e_k)$ and $(f_\ell)$ of $S_L,S_R$ by [F4] and write $\xi=\sum_{k,\ell}e_k\otimes\xi_{k\ell}\otimes f_\ell$. Then $\|(I\otimes A\otimes I)\xi\|^2=\sum_{k,\ell}\|A\xi_{k\ell}\|^2\le\|A\|_{\mathrm{op}}^2\sum_{k,\ell}\|\xi_{k\ell}\|^2$, with equality on a maximizing vector in the middle factor tensored with basis vectors; hence the operator norm on each tensor summand equals $\|A\|_{\mathrm{op}}$. For an orthogonal direct sum of blocks, squared norms add, so its operator norm is the maximum block norm (equality follows by testing a maximizing vector in a maximizing block). The decomposition in step 1.2 and the bounds in step 2.1 therefore give $\|\widetilde\rho(\beta)-\mathcal W\|_{\mathrm{op}}\le\delta$ on the whole ambient space. [F1, F3, F4, step 2.1, algebra]

4.1 Apply [F2] to $\widetilde\rho(\beta)$ and $\mathcal W$. Their compression to the code differs from the target by at most $\delta$, and $(I-P)\mathcal W P=0$, so the leakage amplitude is also at most $\delta$. The norm estimate is on the whole ambient space, so it remains valid for inputs with prior leakage. The physical categorical word has the common phase of [[lem-qc-tqc-determinant-character-phase]], which is harmless only after phase matching or when reported projectively. [F1, F2, step 3.1] ∎

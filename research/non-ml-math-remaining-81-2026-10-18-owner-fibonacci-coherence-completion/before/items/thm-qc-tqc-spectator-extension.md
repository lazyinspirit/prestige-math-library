---
id: thm-qc-tqc-spectator-extension
kind: theorem
title: Six-anyon braid target extends uniformly to fusion spectators
status: draft
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
  statement: literature-derived
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

Assume $\mathrm{AC}_\omega$, $n\ge2$, and a total charge $c$ with
$V(\tau^n\to c)\ne0$. The code in $3n$ $\tau$ anyons factors as
$\mathcal C_n\cong(\mathbb C^2)^{\otimes n}\otimes V(\tau^n\to c)$.
For any adjacent pair of encoded triples, any $U\in U(4)$, and any
$\delta>0$, one normalized six-strand braid induces an ambient operator
within $\delta$ of the code-preserving ideal extension of $U$ on the entire
fixed-charge space $V(\tau^{3n}\to c)$. Consequently its logical block error
and leakage amplitude are each at most $\delta$, uniformly over all
spectator fusion paths and states that already have a component outside the
code.

## Facts & Assumptions

**Given:** The triple code, the full fusion space, an adjacent pair of
triples, $U\in U(4)$, $\delta>0$, and $\mathrm{AC}_\omega$.

[F1] The normalized six-strand image has closure containing
$SU(5)\times SU(8)$, and for each $U\in U(4)$ there are determinant-one
extensions $T_1=U\oplus(\det U)^{-1}$ and
$T_\tau=U\oplus\operatorname{diag}((\det U)^{-1},1,1,1)$.
[[lem-qc-tqc-b6-joint-su5-su8-density]]
[[def-qc-tqc-six-anyon-encoded-subspace]]

[F2] A full-space norm bound by $\delta$ bounds logical block error and
leakage by $\delta$.
[[thm-qc-tqc-block-approximation-error]]

[F3] A local braid on a tensor factor acts as its braid operator tensored with
the identity on spectator factors; unitary fusion-tree reassociation changes
basis by a unitary.
[[thm-qc-tqc-gauge-covariance]]

[A1] $\mathrm{AC}_\omega$ is countable choice.
[[def-countable-choice]]

## Proof

1.1 Each triple has fusion factor $V(\tau^3\to\tau)\cong\mathbb C^2$.
Associating the $n$ triple charges first gives the code factorization
$(\mathbb C^2)^{\otimes n}\otimes V(\tau^n\to c)$; the second factor records
all spectator fusion paths. This is an orthogonal fusion-tree
decomposition by [F1, F3]. [given, F1, F3, construct]

1.2 Reassociate so the chosen adjacent six strands are first. Their total
charge is $a\in\{1,\tau\}$, giving the orthogonal ambient decomposition
$$V(\tau^{3n}\to c)\cong
\bigoplus_{a=1,\tau}V(\tau^6\to a)\otimes
V(a\otimes\tau^{3n-6}\to c).$$
The second factor contains every remaining fusion path and every multiplicity
of the spectator triples. By [F3], a local six-strand braid $b$ acts as
$\bigoplus_a\rho_a(b)\otimes I$ in this decomposition. [given, F3, algebra]

2.1 For each $a$, let $T_a$ be the target extension in [F1] and define the
global ideal unitary
$\mathcal W=\bigoplus_aT_a\otimes I_{V(a\otimes\tau^{3n-6}\to c)}$,
omitting zero-dimensional summands. It preserves the triple code and acts
there as $U$ on the selected adjacent pair and identity on all other logical
and spectator factors. Joint density [F1] gives one normalized braid $b$
with $\|\rho_a(b)-T_a\|_{\mathrm{op}}\le\delta$ for both $a=1,\tau$.
[A1, F1, step 1.1, step 1.2, choose]

2.2 Tensoring an operator $A$ with a spectator identity preserves its norm:
expand a vector in an orthonormal spectator basis to get
$\|(A\otimes I)\xi\|^2=\sum_j\|A\xi_j\|^2\le\|A\|_{\mathrm{op}}^2\|\xi\|^2$,
with equality on a maximizing unit vector tensored with one basis vector.
The norm of an orthogonal direct sum is the maximum of the block norms,
because the squared norm is the sum of the squared block norms. Hence
$\|\rho(b)-\mathcal W\|_{\mathrm{op}}\le\delta$ on the whole ambient space.
[F1, F3, step 2.1, algebra]

3.1 Apply [F2] to $\rho(b)$ and $\mathcal W$. Their compression to the code
differs from the target by at most $\delta$, and
$(I-P)\mathcal W P=0$, so the leakage amplitude is also at most $\delta$.
The norm estimate is on the whole ambient space, so it remains valid for
inputs with prior leakage. The physical categorical word has the common
phase of [[lem-qc-tqc-determinant-character-phase]], which is harmless only
after phase matching or when reported projectively. [F1, F2, step 2.2] ∎

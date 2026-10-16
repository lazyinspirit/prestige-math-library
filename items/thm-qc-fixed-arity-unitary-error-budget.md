---
id: thm-qc-fixed-arity-unitary-error-budget
kind: theorem
title: Fixed-Arity Unitary Error Budget
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - alg-qc-solovay-kitaev-unitary-compiler
  - thm-qc-solovay-kitaev-error-and-resource-bound
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-non-negative-and-positive-operator
  - thm-of-square-roots
  - thm-closed-unit-ball-compact-iff-finite-dimensional
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - cor-triangle-inequality-for-inner-product-norm
  - def-qc-tensor-register-and-permutation
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176"
      url: https://arxiv.org/pdf/quant-ph/0406176
      locator: §§2–6, exact Quantum Shannon Decomposition and CNOT bounds, PDF pp. 7–16
    - title: "Christopher M. Dawson and Michael A. Nielsen, The Solovay–Kitaev Algorithm, arXiv:quant-ph/0505030v2"
      url: https://arxiv.org/pdf/quant-ph/0505030
      locator: §2–§4, SU(2) approximation bound, PDF pp. 2–10
---

## Statement

Fix $k\ge1$, $U\in U(2^k)$, and a real $0<\varepsilon<1/2$. Suppose a supplied exact decomposition of
$U$ has $m\ge1$ one-qubit $U(2)$ factors and $c\ge0$ exact CNOT factors,
with no ancillas. Compiling the special-unitary part of each one-qubit factor
to error $\varepsilon/m$ gives a circuit $C$ such that
$$\min_{|\lambda|=1}\|U-\lambda C\|\le\varepsilon.$$
Its gate count is at most
$c+O(m\log^{\log_{3/2}5}(m/\varepsilon))$ for fixed $k$ and fixed base net.
For every unit vector $\psi$ and every nonnegative contraction $E$ on the
$2^k$-dimensional space, the event value
$p_E(V,\psi):=\|E^{1/2}V\psi\|^2$ changes by at most $2\varepsilon$ between
$V=U$ and $V=C$. The phase guarantee is for the whole unconditional block.
Here nonnegative contraction means $E=E^*$, $\langle Ev,v\rangle\ge0$ for
all $v$, and $\|E\|\le1$.

## Facts & Assumptions

**Given:** A fixed $k\ge1$, one exact no-ancilla factorization of
$U\in U(2^k)$ with $m\ge1$ one-qubit $U(2)$ factors and $c\ge0$ CNOT
factors, and $0<\varepsilon<1/2$.

[F1] The SU(2) compiler gives an operator-norm approximation with word length
$O(\log^{\log_{3/2}5}(1/\delta))$
([[thm-qc-solovay-kitaev-error-and-resource-bound]]).

[F2] The operator norm is submultiplicative
([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F3] Nonnegative means self-adjoint with nonnegative quadratic form
([[def-non-negative-and-positive-operator]]).

[F4] A normal finite-dimensional complex operator has an orthonormal
eigenbasis ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F5] Every nonnegative real has a unique nonnegative square root
([[thm-of-square-roots]]).

[F6] The closed unit ball in finite-dimensional $\mathbb C$ is compact
([[thm-closed-unit-ball-compact-iff-finite-dimensional]]).

[F7] Every unit-modulus complex number has the form $e^{it}$ for a real $t$
([[thm-sine-and-cosine-parametrize-the-unit-circle]]).

[F8] The operator norm is the maximum over unit vectors
([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F9] The vector norm induced by an inner product satisfies the triangle
inequality ([[cor-triangle-inequality-for-inner-product-norm]]).

[F10] The ordered tensor register has an orthonormal product basis, with the product inner product; wire permutations permute that basis ([[def-qc-tensor-register-and-permutation]]).

## Proof

1.1 For each one-qubit factor $G_j\in U(2)$, determinant multiplicativity and $G_j^*G_j=I$ give $|\det G_j|^2=1$. Thus [F7] gives $\det G_j=e^{i\theta_j}$ for a real $\theta_j$. Put $\phi_j=\theta_j/2$ and $S_j=e^{-i\phi_j}G_j$. Then $\det S_j=e^{-2i\phi_j}\det G_j=1$ and $S_j$ is unitary, so $S_j\in SU(2)$ and $G_j=e^{i\phi_j}S_j$. [F7, given, construct]

2.1 Put $h=\min(\eta_0,\varepsilon/m)>0$. Let $r$ be the least nonnegative integer with $2^{-r}\le h$ and put $\delta=2^{-r}$. Such an $r$ exists since $2^{-r}\to0$; since $h<1$, minimality gives $h/2<\delta\le h$. Thus $\delta$ is rational, satisfies $0<\delta\le\eta_0$ and $\delta\le\varepsilon/m$, and is a permitted input to the compiler in [F1]. Apply it to each $S_j$. It gives a gate word $W_j$ with $\|S_j-W_j\|\le\delta$. The phase factors $e^{i\phi_j}$ commute with all factors and multiply to one scalar for the entire circuit; after factoring it out, the exact and compiled products have the same CNOT slots and respectively $S_j$ and $W_j$ in each one-qubit slot. [F1, step 1.1]

3.1 First justify the full-register error at each local slot. Group its one-qubit support first and unused wires second, using the unitary wire permutation of [F10]. For a finite orthonormal basis $(e_\ell)$ of the unused register, every vector is uniquely $v=\sum_\ell v_\ell\otimes e_\ell$, and the product inner product gives $\|v\|^2=\sum_\ell\|v_\ell\|^2$. For a local difference $A$, it also gives $\|(A\otimes I)v\|^2=\sum_\ell\|Av_\ell\|^2\le\|A\|^2\sum_\ell\|v_\ell\|^2=\|A\|^2\|v\|^2$ by [F8]. Thus $\|A\otimes I\|\le\|A\|$. Conjugation by the wire permutation preserves norm, since a unitary preserves vector norms and maps the unit sphere onto itself. This includes the empty unused register. Apply this to each $S_j-W_j$ from step 2.1, giving full-register slot error at most $\delta$. Index the full ordered circuit product by $q=m+c$ slots, so the two products are $A_q\cdots A_1$ and $B_q\cdots B_1$. At a CNOT slot set $A_r=B_r$ to that exact gate; at a one-qubit slot use the exact $S_j$ and its compiled word $W_j$. Insert one factor at a time to obtain $A_q\cdots A_1-B_q\cdots B_1=\sum_{r=1}^q A_q\cdots A_{r+1}(A_r-B_r)B_{r-1}\cdots B_1$. Every surrounding factor is unitary: exact factors, compiled words, and CNOTs are all unitary. For a unitary $Q$, $\|Qv\|=\|v\|$ for every unit vector $v$, so [F8] gives $\|Q\|=1$. The operator-norm triangle inequality follows from [F8] by applying [F9] to each unit input and taking the maximum. Then [F2] bounds the product difference by the sum of the $q$ factor errors. The CNOT slots contribute zero, and the $m$ one-qubit slots each contribute at most $\delta$, giving $m\delta\le\varepsilon$. The scalar from step 2.1 is a single whole-circuit phase, proving the projective operator bound. [F2, F8, F9, F10, step 2.1, algebra]

4.1 The unit circle is a closed subset of the closed unit ball in $\mathbb C$, so it is compact by [F6]. The continuous function $\lambda\mapsto\|U-\lambda C\|$ therefore attains its minimum at some $|\lambda|=1$. The phase from step 3.1 gives one value at most $\varepsilon$, so this minimum is also at most $\varepsilon$. By [F4], diagonalize $E$ in an orthonormal basis with eigenvalues $\lambda_1,\ldots,\lambda_{2^k}$. Nonnegativity [F3] makes each $\lambda_i\ge0$, and $\|E\|\le1$ gives $\lambda_i\le1$ by applying the norm to a corresponding unit eigenvector. Define $E^{1/2}$ in this basis by diagonal entries $\sqrt{\lambda_i}$, which exist by [F5]. Its square is $E$, it is self-adjoint, and direct calculation on coordinates gives $\|E^{1/2}\|=\max_i\sqrt{\lambda_i}\le1$. The factors $U,C$ are unitary, so [F8] gives $\|U\psi\|=\|C\psi\|=1$. The two vectors $E^{1/2}U\psi$ and $E^{1/2}\lambda C\psi$ have norms at most $1$, and their distance is at most $\varepsilon$ by step 3.1 and [F2]. The reverse triangle inequality from [F9] gives $|\|x\|-\|y\||\le\|x-y\|$ for these vectors; factoring the difference of their squared norms therefore bounds it by $(1+1)\varepsilon=2\varepsilon$. Since the scalar phase does not change a norm, this proves the event bound. [F2, F3, F4, F5, F6, F8, F9, given, step 3.1, algebra]

5.1 Each one-qubit word uses $O(\log^{\log_{3/2}5}(1/\delta))$ gates by [F1]. Since $1/\delta<2\max(1/\eta_0,m/\varepsilon)$ and $m/\varepsilon>2$, this is $O(\log^{\log_{3/2}5}(m/\varepsilon))$, with constants depending on the fixed base-net radius. Summing over $m$ factors and adding the $c$ exact CNOTs gives the stated count. The factorization and all replacements use the same wires, so no ancillas are introduced. [F1, step 2.1] ∎
## Remarks

This item proves the error budget for any supplied exact factorization. To
apply it uniformly to every fixed-arity unitary, the QC11 exact-synthesis
supplier must provide such a factorization. Its separate improved numeric
CNOT bound is not used in this conditional result.

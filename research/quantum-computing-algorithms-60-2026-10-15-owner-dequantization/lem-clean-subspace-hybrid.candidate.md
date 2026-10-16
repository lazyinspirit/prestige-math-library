---
id: lem-qa-25-clean-subspace-unitary-hybrid
kind: lemma
title: Unitary hybrids on a preserved clean-work subspace
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - thm-singular-value-decomposition
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond
      url: https://arxiv.org/pdf/1806.01838
---

## Statement

Let $J:H\to K$ be an isometry of nonzero finite-dimensional complex Hilbert spaces, $V$ a unitary on $H$, and $U$ a unitary on $K$. If $\|UJ-JV\|_{\rm op}\le\eta$, then $\|U^*J-JV^*\|_{\rm op}\le\eta$. The same inequalities hold after adjoining an arbitrary finite reference space or coherently controlling $U$ and $V$ against identity.

More generally, let $U_1,\ldots,U_s$ be actual unitaries on $K$ and $V_1,\ldots,V_s$ ideal unitaries on $H$, with $\|U_jJ-JV_j\|_{\rm op}\le\eta_j$. Then
$$\|U_s\cdots U_1J-JV_s\cdots V_1\|_{\rm op}\le\sum_{j=1}^s\eta_j.$$
The empty products give zero error. Each bound concerns the clean input subspace $\operatorname{ran}J$; none assumes that an actual intermediate state belongs to that subspace or claims a full-space approximation on arbitrary dirty-work inputs.

## Facts & Assumptions

**Given:** The finite spaces, isometry, unitaries and error bounds in the Statement.

[F1] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]] gives the operator-norm product inequality. Unitary multiplication preserves vector norms and hence preserves the operator norm of any compatible matrix.

[F2] [[thm-singular-value-decomposition]] diagonalizes the squared norm of a finite rectangular map in orthonormal bases.

## Proof

1.1 The exact identity $U^*(JV-UJ)V^*=U^*J-JV^*$, together with unitary invariance, gives $\|U^*J-JV^*\|_{\rm op}=\|JV-UJ\|_{\rm op}\le\eta$. Thus reversing the actual circuit supplies the inverse clean-input bound, without applying a forward error promise to dirty work. [given, F1, algebra]

1.2 If $E:H\to K$ has singular values $s_j$, [F2] gives orthonormal bases in which $\|E\psi\|^2=\sum_j s_j^2|\psi_j|^2$. Tensor those bases with any orthonormal reference basis; for $\Psi=\sum_{j,r}c_{j,r}e_j\otimes f_r$, $\|(E\otimes I)\Psi\|^2=\sum_{j,r}s_j^2|c_{j,r}|^2\le\|E\|_{\rm op}^2\|\Psi\|^2$. A top singular vector tensored with any unit reference vector attains equality, so $\|E\otimes I\|_{\rm op}=\|E\|_{\rm op}$. If the reference space is zero, the amplified map is zero and its bound is immediate. For coherent control against identity, the difference between the actual and ideal clean-input maps is zero on the control-zero summand and $E$ on the orthogonal control-one summand; its norm is at most $\|E\|_{\rm op}$. These statements apply to step 1.1 as well as to the original forward bound. [given, F2, step 1.1, algebra]

2.1 For $s\ge1$, expansion and cancellation give
$$U_s\cdots U_1J-JV_s\cdots V_1=\sum_{j=1}^s U_s\cdots U_{j+1}(U_jJ-JV_j)V_{j-1}\cdots V_1.$$
Every factor outside the local difference is unitary, so each summand has norm at most $\eta_j$. The triangle inequality yields the claimed sum. On the right of each local difference are only ideal system unitaries followed by $J$, so this expansion evaluates that difference on clean ideal inputs. The actual later unitaries on the left propagate the error without any cleanliness assumption. For $s=0$, both products are identity maps, so the difference is zero. [given, F1, algebra, cases] ∎

---
id: lem-qc-rz-scaled-grid-norm-solution-exists
kind: lemma
title: Every Rz epsilon region contains an exact norm-solvable grid point
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - lem-qc-clifford-t-determinant-one-approximants
  - lem-qc-rz-epsilon-region-equivalence
  - def-qc-dyadic-cyclotomic-ring
  - def-qc-cyclotomic-bullet-automorphism
  - def-qc-clifford-t-gate-library
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations
      url: https://arxiv.org/pdf/1403.2975
    - title: Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
dependency_level: 12
---

## Statement

For $\theta\in\mathbb R$ and $0<\varepsilon<1/2$, there are $u,t\in D$
such that
$$|u|\le1,\qquad |u^\bullet|\le1,\qquad \operatorname{Re}(e^{i\theta/2}u)\ge1-\varepsilon^2/2,\qquad t^\dagger t=1-u^\dagger u.$$
Thus the scaled grid has at least one candidate whose norm equation is
solvable.

## Facts & Assumptions

**Given:** The exact Clifford+T one-qubit matrices, $D=\mathbb Z[\omega,1/2]$,
the automorphism $\bullet$, $R_z(\theta)$, and $0<\varepsilon<1/2$.
For scalar $z$, $z^\dagger=\bar z$.

[F1] [[lem-qc-clifford-t-determinant-one-approximants]]: every $SU(2)$ target
has an exact determinant-one Clifford+T word within any positive operator-norm
error.

[F2] [[def-qc-dyadic-cyclotomic-ring]]: $D=\mathbb Z[\omega,1/2]$ is a
subring of $K=\mathbb Q(\omega)$.

[F3] [[def-qc-clifford-t-gate-library]]: the exact displayed $H,T,T^\dagger$
matrices are the one-qubit generators.

[F4] [[def-qc-cyclotomic-bullet-automorphism]]: $\bullet$ is a field
automorphism of $K$ that preserves $D$ and commutes with complex conjugation.

[F5] [[lem-qc-rz-epsilon-region-equivalence]]: for
$U=\begin{pmatrix}u&-\bar t\\t&\bar u\end{pmatrix}\in SU(2)$, the
operator-norm error bound is equivalent to the displayed real-part condition.

## Proof


1.1 By [F2,F3], the entries of $T,T^\dagger$ lie in $D$. Also $\sqrt2=\omega-\omega^3$ and $1/\sqrt2=(\omega-\omega^3)/2$, so every entry of $H$ lies in $D$. The ring $D$ is closed under complex conjugation because $\bar\omega=\omega^{-1}=\omega^7\in D$. Apply [F1] to $R_z(\theta)\in SU(2)$ and choose an exact word $U$ with $\det U=1$ and $\|R_z(\theta)-U\|_{\mathrm{op}}<\varepsilon$. Every entry of $U$ lies in $D$ because each generator has entries in $D$ and products of matrices over a subring remain over that subring. Let the first column be $(u,t)^T$. It is a unit vector; its orthogonal unit vector $(-\bar t,\bar u)^T$ is therefore the second column up to a unit scalar $\lambda$. The determinant of the resulting matrix is $\lambda$, so $\det U=1$ forces $\lambda=1$. Hence $U=\begin{pmatrix}u&-\bar t\\t&\bar u\end{pmatrix}$ and $t^\dagger t=1-u^\dagger u$. [F1, F2, F3, given, choose]

2.1 Applying $\bullet$ to $U^*U=I$ preserves products and fixes $I$; [F4] also makes it commute with the adjoint. Thus $U^\bullet$ is unitary, and its first-column norm gives $|u^\bullet|^2+|t^\bullet|^2=1$. The original first column similarly gives $|u|^2+|t|^2=1$, so $|u|,|u^\bullet|\le1$. [F4, step 1.1, algebra]

3.1 The strict approximation in step 1.1 and [F5] imply $\operatorname{Re}(e^{i\theta/2}u)>1-\varepsilon^2/2$, hence the required weak inequality. Together with step 1.1 this gives a grid candidate and an exact solution of its norm equation. [F5, step 1.1, algebra] ∎

## Unresolved supplier checks

The actual QC12 projective-density proof and its Pauli-axis suppliers were
inspected. Its normalized lifts are used only for projective density; the
exact scalar phases are retained in the local matrix argument. This records
interface reconciliation, not approval of those supplier drafts.


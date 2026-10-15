---
id: thm-qft-x03-photon-count-pvm
kind: theorem
title: The Fock number operator has its sector counting PVM
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: physics
physical_scope: null
dependency_level: 2
deps:
  - def-countable-choice
  - def-qft-fock-and-test-spaces
  - def-qft-x03-photon-count-pvm
  - def-projection-valued-measure
  - def-unbounded-linear-operator-domain-and-graph
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-qft-x03-photon-count-pvm: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 prepublication book draft, §55 “Electrodynamics in Coulomb Gauge,” printed pp. 335–338
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
---

## Statement

Assume Countable Choice [[def-countable-choice]]. Let $H$ be a complex Hilbert
space, and let $N$, $E_N(B)$, and $P_n$ be as in
[[def-qft-x03-photon-count-pvm]]. Then $N$ is self-adjoint on its stated
domain and $E_N$ is a projection-valued measure on the Borel subsets of
$\mathbb R$. It is the sector counting resolution: $E_N(B)$ keeps exactly the
sectors whose integer label lies in $B$, and $N$ multiplies sector $n$ by $n$.
For any finite Borel partition $(B_a)_{a=1}^m$ of $\mathbb R$, the projections
$E_N(B_a)$ are mutually orthogonal and sum to the identity.

## Facts & Assumptions

**Given:** Countable Choice, the square-summable symmetric Fock direct sum,
the number-operator definition, and the standard definitions of adjoint,
self-adjoint operator, and projection-valued measure.

[A1] Countable Choice [[def-countable-choice]] is the choice assumption of
the Fock construction used here.

[F1] [[def-qft-fock-and-test-spaces]]: $\mathcal F_s(H)$ is the Hilbert direct
sum of the symmetric sectors $H_s^{(n)}$, $n\ge0$, with
$\sum_n\|\Psi_n\|^2<\infty$; finite-sector vectors form a dense subspace.

[F2] [[def-qft-x03-photon-count-pvm]]: $D(N)=\{\Psi:\sum_n n^2\|\Psi_n\|^2<\infty\}$,
$(N\Psi)_n=n\Psi_n$, and $(E_N(B)\Psi)_n=\mathbf1_B(n)\Psi_n$.

[F3] [[def-projection-valued-measure]]: every value must be an orthogonal
projection, $E_N(\varnothing)=0$, $E_N(\mathbb R)=I$,
$E_N(B\cap C)=E_N(B)E_N(C)$, and disjoint countable unions must converge
strongly.

[F4] Under the second-variable-linear Fock pairing of
[[def-qft-fock-and-test-spaces]], conjugating the first-variable-linear
definition in [[def-adjoint-of-a-densely-defined-unbounded-operator]] gives:
$y\in D(N^*)$ exactly when there is $z$ such that
$\langle Nx,y\rangle_2=\langle x,z\rangle_2$ for every $x\in D(N)$; then
$N^*y=z$.

[F5] [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]:
self-adjointness means equality of the operator and its adjoint, including
equality of their domains.

## Proof

**Given:** [A1], [F1]–[F5], and the number-operator and sector-projection
formulas in [F2].

1.1 Finite-sector vectors lie in $D(N)$ and are dense by [F1]. For $\Psi,\Phi\in D(N)$, the Cauchy–Schwarz inequality gives absolute convergence of $\sum_n n\langle\Psi_n,\Phi_n\rangle_2$, and because each $n$ is real, $$\langle N\Psi,\Phi\rangle_2 =\sum_n n\langle\Psi_n,\Phi_n\rangle_2 =\langle\Psi,N\Phi\rangle_2.$$ Thus $N$ is densely defined and symmetric. [A1, F1, F2, algebra]

1.2 For each Borel $B$, [F2] makes $E_N(B)$ the diagonal multiplier by the real indicator $\mathbf1_B(n)$. It is bounded with norm at most one, self-adjoint, and idempotent. The same coordinate formula gives $E_N(\varnothing)=0$, $E_N(\mathbb R)=I$, and $E_N(B)E_N(C)=E_N(B\cap C)$. [F2, F3, algebra]

2.1 Suppose $y\in D(N^*)$ and write $z=N^*y$. Test [F4] on vectors supported in only sector $n$. Since $N$ acts there as $nI$, the identity for every $x_n\in H_s^{(n)}$ gives $z_n=ny_n$. Hence $\sum_n n^2\|y_n\|^2=\sum_n\|z_n\|^2<\infty$, so $y\in D(N)$ and $N^*y=Ny$. Conversely, if $y\in D(N)$, the convergent sector sum in step 1.1 gives $\langle Nx,y\rangle_2=\langle x,Ny\rangle_2$ for every $x\in D(N)$; [F4] then gives $y\in D(N^*)$ and $N^*y=Ny$. Thus $D(N^*)=D(N)$ and $N=N^*$, which proves self-adjointness by [F5]. [F1, F2, F4, F5, step 1.1, algebra]

2.2 Let $(B_j)_{j\ge0}$ be pairwise disjoint Borel sets with union $B$, and fix $\Psi\in\mathcal F_s(H)$. Given $\epsilon>0$, choose $M$ so that $\sum_{n>M}\|\Psi_n\|^2<\epsilon$. Among the finitely many labels $0,\ldots,M$, each label in $B$ belongs to one $B_j$; choose $J$ at least as large as all those finitely many indices. Then $E_N(B)\Psi-\sum_{j=0}^{J}E_N(B_j)\Psi$ has zero components through sector $M$, and its squared norm is at most $\sum_{n>M}\|\Psi_n\|^2<\epsilon$. This proves strong countable additivity. Together with step 1.2 it proves the PVM clauses in [F3]. The coordinate formula in [F2] shows this PVM retains exactly the sectors on which $N$ acts by their labels. [F1, F2, F3, step 1.2, construct]

3.1 In a finite Borel partition $(B_a)_{a=1}^m$ of $\mathbb R$, distinct sets are disjoint, so step 1.2 gives $E_N(B_a)E_N(B_b)=0$ for $a\ne b$. Append empty sets to this finite list to apply the countable-additivity result of step 2.2; since the union is $\mathbb R$ and $E_N(\mathbb R)=I$, the finite projections sum to $I$. [F3, step 1.2, step 2.2] ∎

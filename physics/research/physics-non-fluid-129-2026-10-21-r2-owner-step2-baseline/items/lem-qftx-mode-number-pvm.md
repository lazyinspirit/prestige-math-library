---
id: lem-qftx-mode-number-pvm
kind: lemma
title: "One-mode photon number operator and count PVM"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - def-projection-valued-measure
  - def-qft-fock-and-test-spaces
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-unbounded-linear-operator-domain-and-graph
  - lem-qft-fock-ccr-car
  - lem-qft-fock-one-mode-splitting
dependency_roles:
  def-countable-choice: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  lem-qft-fock-ccr-car: mathematical-premise
  lem-qft-fock-one-mode-splitting: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel A. Steck, Quantum and Atom Optics, revision 0.16.7, Chapter 16"
      url: "https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf"
      locator: "Author-hosted complete course text, §16.4.2.2, PDF pp. 691–692, for normalized pulse-mode creation operators. The count PVM and operator domains below are constructed locally."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $H$ be a complex Hilbert space with the second-variable-linear pairing used for bosonic Fock space, and let $u\in H$ satisfy $\|u\|=1$. Put $K=u^\perp$. Let $J_u:\mathcal F_s(\mathbb C u)\widehat\otimes\mathcal F_s(K)\to\mathcal F_s(H)$ be the one-mode Fock unitary, and for $n\in\mathbb N_0$ let $e_n=u^{\otimes n}\in(\mathbb C u)_s^{(n)}$, with $e_0=1$. On $\mathcal F_s(\mathbb C u)$ define $Q_n z=\langle e_n,z\rangle_2e_n$, and on $\mathcal F_s(H)$ put
$$P_n:=J_u(Q_n\otimes I)J_u^{-1}.$$
For every Borel set $B\subseteq\mathbb R$, define the strong sum
$$E_u(B):=\sum_{n\in B\cap\mathbb N_0}P_n.$$
Define the mode number operator
$$N_u:=\sum_{n=0}^{\infty}nP_n,\qquad D(N_u):=\left\{\Psi\in\mathcal F_s(H):\sum_{n=0}^{\infty}n^2\|P_n\Psi\|^2<\infty\right\}.$$
Then $(P_n)_{n\ge0}$ are mutually orthogonal projections with strong sum $I$, $E_u$ is a projection-valued measure supported on $\mathbb N_0$, and $N_u$ is self-adjoint with these spectral projections. The diagonal operator $N_u(N_u-I)$ has domain $\{\Psi:\sum_n n^2(n-1)^2\|P_n\Psi\|^2<\infty\}$, and $\mathcal D_{\rm fin}$ is a graph core for it. On the finite-particle subspace,
$$N_u=a^\dagger(u)a(u),\qquad N_u(N_u-I)=a^\dagger(u)^2a(u)^2.$$

## Statement references

[[def-qft-fock-and-test-spaces]]

[[lem-qft-fock-one-mode-splitting]]

[[lem-qft-fock-ccr-car]]

[[def-projection-valued-measure]]

[Steck, Quantum and Atom Optics](https://atomoptics.uoregon.edu/~dsteck/teaching/quantum-optics/quantum-optics-notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the bosonic Fock space over $H$, a unit vector $u$, and its closed orthogonal complement $K=u^\perp$.

[A1] Assume Countable Choice, written $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] The bosonic Fock space is the square-summable direct sum of its symmetric particle sectors; its finite-particle subspace is $\mathcal D_{\rm fin}$, and the creation and annihilation maps are defined on those sectors. [[def-qft-fock-and-test-spaces]]

[F2] The one-mode splitting is a unitary $J_u:\mathcal F_s(\mathbb C u)\widehat\otimes\mathcal F_s(K)\to\mathcal F_s(H)$; under it, creation and annihilation by $u$ act on the first factor by $e_n\mapsto\sqrt{n+1}e_{n+1}$ and $e_n\mapsto\sqrt n e_{n-1}$ on finite-particle vectors. [[lem-qft-fock-one-mode-splitting]]

[F3] On $\mathcal D_{\rm fin}$, the bosonic CCR include $[a(u),a^\dagger(u)]=I$, and the finite-particle subspace is invariant under these creation and annihilation maps. [[lem-qft-fock-ccr-car]]

[F4] A PVM is a countably strongly additive map from a sigma-algebra to orthogonal projections, with empty-set value zero, full-space value the identity, and $E(B\cap C)=E(B)E(C)$. [[def-projection-valued-measure]]

[F5] A densely defined operator is self-adjoint when it equals its adjoint, including equality of domains and values; its operator domain is part of the data. [[def-unbounded-linear-operator-domain-and-graph]] [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

## Proof

1.1 Under the unitary $J_u$ of [F2], the one-dimensional $n$th sector of $\mathcal F_s(\mathbb C u)$ is spanned by the unit vector $e_n$. Therefore $Q_n$ are mutually orthogonal projections and their strong sum is the identity on $\mathcal F_s(\mathbb C u)$. Tensoring with the identity on $\mathcal F_s(K)$ and conjugating by $J_u$ shows that each $P_n$ is an orthogonal projection, $P_nP_m=0$ for $n\ne m$, and $\sum_{n\ge0}P_n\Psi=\Psi$ in norm for every $\Psi\in\mathcal F_s(H)$. [A1, F1, F2, given, algebra]

2.1 For Borel $B$, the orthogonal sum defining $E_u(B)$ converges strongly because $\sum_n\|P_n\Psi\|^2=\|\Psi\|^2$. It is an orthogonal projection, $E_u(\varnothing)=0$, $E_u(\mathbb R)=I$, and orthogonality gives $E_u(B)E_u(C)=E_u(B\cap C)$. For pairwise disjoint Borel sets $B_j$, their intersections with $\mathbb N_0$ partition $B\cap\mathbb N_0$, so the corresponding orthogonal series gives $E_u(\bigcup_jB_j)\Psi=\sum_jE_u(B_j)\Psi$ in norm. Thus $E_u$ is a PVM supported on $\mathbb N_0$, and $E_u(\{n\})=P_n$. [A1, F4, step 1.1, algebra]

2.2 Under $J_u$, $N_u$ is the diagonal operator $(\Psi_n)_{n\ge0}\mapsto(n\Psi_n)_{n\ge0}$ with domain $\sum_n n^2\|\Psi_n\|^2<\infty$. It is symmetric because every diagonal coefficient $n$ is real. If $\Phi$ lies in its adjoint domain with adjoint value $\Xi$, testing the adjoint identity on vectors supported in a single sector forces $\Xi_n=n\Phi_n$ for every $n$. Since $\Xi$ is square-summable, $\sum_n n^2\|\Phi_n\|^2<\infty$, so $\Phi\in D(N_u)$. Conversely, for $\Phi\in D(N_u)$, Cauchy–Schwarz on the sector sum gives the adjoint identity with value $N_u\Phi$. Hence $D(N_u^*)=D(N_u)$ and $N_u^*=N_u$, and its projections are the constructed $E_u(\{n\})=P_n$. [F2, F5, step 1.1, algebra]

3.1 By [F2], on a one-mode occupation vector $e_n\otimes\phi$ one has $a(u)(e_n\otimes\phi)=\sqrt n\,e_{n-1}\otimes\phi$ and $a^\dagger(u)(e_n\otimes\phi)=\sqrt{n+1}\,e_{n+1}\otimes\phi$; thus $a^\dagger(u)a(u)=N_u$ on finite-particle vectors, including the $n=0$ sector. On the same invariant subspace, [F3] gives $a(u)a^\dagger(u)=a^\dagger(u)a(u)+I$. Consequently
$$N_u(N_u-I)=a^\dagger(u)a(u)a^\dagger(u)a(u)-a^\dagger(u)a(u)=a^\dagger(u)^2a(u)^2$$
on $\mathcal D_{\rm fin}$, by substitution of the CCR and cancellation of the two $a^\dagger(u)a(u)$ terms. [F1, F2, F3, step 1.1, step 2.2, algebra]

4.1 Let $\Psi$ lie in the domain of $N_u(N_u-I)$ and truncate its one-mode occupation to $\Psi^{(M)}=\sum_{n=0}^{M}P_n\Psi$. The tail of the squared graph norm is $\sum_{n>M}(1+n^2(n-1)^2)\|P_n\Psi\|^2$, which tends to zero by the domain condition. For fixed $M$, write each $P_n\Psi$ under $J_u^{-1}$ as $e_n\otimes\phi_n$ with $\phi_n\in\mathcal F_s(K)$. Finite-particle vectors are dense in $\mathcal F_s(K)$ by [F1]; approximate each of the finitely many $\phi_n$ by such a vector. The one-mode unitary preserves norm, and on $n\le M$ the multiplier $n(n-1)$ is bounded, so these approximations also converge in graph norm. Their images under $J_u$ have finite total particle number. Thus $\mathcal D_{\rm fin}$ is a graph core for $N_u(N_u-I)$, and the finite-core normal-ordered identity of step 3.1 determines this closed extension. [F1, F2, step 3.1, algebra] ∎

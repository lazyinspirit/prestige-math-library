---
id: thm-qsm-onsite-product-kms
kind: theorem
title: Unique onsite product Gibbs KMS state
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-qsm-bounded-finite-range-interaction
  - def-qsm-kms-state
  - def-qsm-local-spin-algebras
  - lem-qsm-local-spin-inclusions-isometric
  - def-qsm-quasilocal-spin-algebra
  - lem-qsm-quasilocal-completion
  - lem-qsm-consistent-local-states
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - lem-qsm-gibbs-strip-limit
  - lem-qsm-kms-strip-uniqueness
  - lem-qsm-matrix-state-calculus
  - thm-qsm-finite-kms-gibbs-characterization
  - thm-qsm-finite-range-spin-dynamics
  - thm-weierstrass-convergence-holomorphic-functions
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsm-bounded-finite-range-interaction: mathematical-premise
  def-qsm-kms-state: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  lem-qsm-local-spin-inclusions-isometric: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-consistent-local-states: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  lem-qsm-gibbs-strip-limit: mathematical-premise
  lem-qsm-kms-strip-uniqueness: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-qsm-finite-kms-gibbs-characterization: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §3.4, Definition 3.4.4 and finite Gibbs/KMS characterization, printed pp. 74–77
      url: https://arxiv.org/pdf/1311.2717
    - title: David Ruelle, Topics in Quantum Statistical Mechanics and Operator Algebras, Chapter 1 §7, printed pp. 13–14; Chapter 2 §6, pp. 24–25
      url: https://arxiv.org/pdf/math-ph/0107009
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ and the exact finite-matrix C*-identity and positive-functional/density interfaces in [A2] below. Let $\Gamma=\mathbb Z^d$, $d\ge1$, and let $q\ge1$ be a finite on-site dimension as in [[def-qsm-local-spin-algebras]]. Let $h=h^*$ be a $q\times q$ on-site Hamiltonian, with energy unit J, and set
$$Z:=\operatorname{Tr}(e^{-\beta h}),\qquad r:=Z^{-1}e^{-\beta h},$$
where $h$ has unit J and $\beta>0$ has unit J$^{-1}$. Let $\hbar>0$ have unit J s. The consistent local densities $r^{\otimes\Lambda}$ have a unique state extension $\omega_r$ to the norm-completed quasi-local algebra $\mathcal A$ by [[lem-qsm-consistent-local-states]], with local restrictions
$$\omega_r(A)=\operatorname{Tr}_{\Lambda}(r^{\otimes\Lambda}A)\qquad(A\in\mathcal A_\Lambda).$$
Define the onsite interaction by $\Phi(\{x\})=h_x$, the copy of $h$ at site $x$, and $\Phi(Z)=0$ for all other finite nonempty $Z$. Let $\alpha_t$ be its thermodynamic dynamics under [[thm-qsm-finite-range-spin-dynamics]]. Then $\omega_r$ is the unique $\beta$-KMS state for $\alpha$ in the physical-time strip convention of [[def-qsm-kms-state]], whose width is $\beta\hbar$ seconds. The conclusion is mathematical; it does not assert relaxation or select a physical preparation.

## Facts & Assumptions

**Given:** The finite spin system, $\mathrm{AC}_\omega$, the exact finite-matrix interfaces [A2], $h=h^*$, $\beta>0$, and $\hbar>0$.

[A1] Countable Choice $\mathrm{AC}_\omega$ is the stated assumption of the quasi-local completion and of consistent-state extension ([[def-countable-choice]], [[def-qsm-quasilocal-spin-algebra]], [[lem-qsm-consistent-local-states]]).

[A2] Assume the exact finite-matrix C*-identity and density/state norm interface supplied by [[lem-qsm-finite-matrix-cstar-and-state-duality]]. Its current proof supplies these finite-dimensional clauses and has an owner-recorded Step-1 `ready` record; that authoring-readiness record is not independent proof acceptance. The proof below is conditional on the stated interface.

[F1] [[def-qsm-local-spin-algebras]]: for every finite $\Lambda\subset\Gamma$, $\mathcal A_\Lambda$ is the matrix algebra on the finite tensor product of the $q$-dimensional site spaces; nested regions use tensor-with-identity inclusions.

[F2] [[def-qsm-quasilocal-spin-algebra]] and [[lem-qsm-quasilocal-completion]]: $\mathcal A_{\mathrm{loc}}=\bigcup_\Lambda\mathcal A_\Lambda$ is norm dense in its norm completion $\mathcal A$; the conditional C*-structure uses [A1]–[A2].

[F3] [[def-qsm-bounded-finite-range-interaction]]: $\Phi$ consists of finite-region self-adjoint matrices with finite range and bounded per-site norm; $\Phi(\{x\})=h_x$, $\Phi(Z)=0$ otherwise, is such an interaction, and its finite-volume Hamiltonian is $H_\Lambda=\sum_{x\in\Lambda}h_x$.

[F4] [[thm-qsm-finite-range-spin-dynamics]]: under Countable Choice and the finite-matrix C*-identity condition, the finite-volume onsite dynamics have a thermodynamic limit that is a strongly continuous group of isometric *-automorphisms. Its current proof retains that finite-matrix condition explicitly.

[F5] [[lem-qsm-consistent-local-states]]: positive trace-one densities on all finite regions that agree under partial traces extend uniquely to a bounded normalized positive functional on $\mathcal A$, under its stated Countable Choice and finite-matrix density/norm hypotheses.

[F6] [[def-qsm-kms-state]]: for each $A,B\in\mathcal A$, a $\beta$-KMS state has a bounded function continuous on $S_{\beta\hbar}=\{z:0\le\operatorname{Im}z\le\beta\hbar\}$, holomorphic inside, with lower edge $\omega(A\alpha_t(B))$ and upper edge $\omega(\alpha_t(B)A)$.

[F7] [[lem-qsm-gibbs-strip-limit]]: for any pointwise-convergent sequence of the specified finite-volume Gibbs state extensions, each fixed pair of local observables has a bounded continuous strip function, holomorphic inside, with the two limiting KMS boundary values. This is a local-pair statement only. Its proof explicitly assumes the finite-matrix interfaces in [A2]; the current supplier and its transitive inputs have current authoring-readiness records documented in batch-43 dependency evidence, not independent proof acceptance.

[F8] [[lem-qsm-kms-strip-uniqueness]]: bounded continuous functions holomorphic inside the same strip obey the three-lines boundary norm bound; equality on the lower edge determines the full function, including the upper edge.

[F9] [[thm-qsm-finite-kms-gibbs-characterization]]: on a finite-dimensional matrix algebra with self-adjoint Hamiltonian $H$, physical-time dynamics $e^{itH/\hbar}(\cdot)e^{-itH/\hbar}$ has exactly the Gibbs state $A\mapsto\operatorname{Tr}(e^{-\beta H}A)/\operatorname{Tr}(e^{-\beta H})$ as its $\beta$-KMS state. Its proof uses the finite Hermitian spectral-calculus clause [F11] and the finite-matrix interface [A2].

[F10] [[thm-weierstrass-convergence-holomorphic-functions]]: a locally uniform limit of holomorphic scalar functions on an open set is holomorphic.

[F11] [[lem-qsm-matrix-state-calculus]]: every finite-dimensional Hermitian matrix has an orthonormal eigenbasis with real eigenvalues, and the finite matrix trace is cyclic and basis-independent. Its current proof correctly handles normalized rational-coordinate approximants; the owner-recorded Step-1 `ready` record is authoring readiness only. The finite C*-identity and converse density/state correspondence are supplied separately by [A2].

## Proof
**Proof technique:** construct the consistent product state, apply the inspected local Gibbs-strip limit conditionally, extend the strip functions by norm density, and use finite-volume uniqueness on each local algebra.

**Given:** [A1]–[A2], [F1]–[F11], $h$, $\beta$, $\hbar$, and the onsite interaction $\Phi$.

1.1 The finite Hermitian spectral calculus [F11] diagonalizes $h$ with real eigenvalues; exponentiating them gives $Z>0$ and a positive trace-one matrix $r$. For nested finite regions $\Lambda\subseteq\Lambda'$, the product-basis trace factorization and $\operatorname{Tr}r=1$ give $\operatorname{Tr}_{\Lambda'\setminus\Lambda}(r^{\otimes\Lambda'})=r^{\otimes\Lambda}$. Thus the family is consistent, and [F5] defines a unique state $\omega_r$ with the displayed local restrictions. [A1, A2, F1, F5, F11, construct]

2.1 Let $\Lambda_n=[-n,n]^d\cap\Gamma$. In a finite-volume product eigenbasis, $H_{\Lambda_n}=\sum_{x\in\Lambda_n}h_x$ has eigenvalues equal to sums of the corresponding one-site eigenvalues by [F11]. Therefore $e^{-\beta H_{\Lambda_n}}=(e^{-\beta h})^{\otimes\Lambda_n}$ and its partition function is $Z^{|\Lambda_n|}$, so its normalized Gibbs density is $r^{\otimes\Lambda_n}$. For every finite $X\subseteq\Gamma$, define $$\rho_X^{(n)}:=\operatorname{Tr}_{(X\cup\Lambda_n)\setminus X}\!\left(r^{\otimes\Lambda_n}\otimes(q^{-1}I)^{\otimes(X\setminus\Lambda_n)}\right),$$ placing the tensor factors on $\Lambda_n$ and $X\setminus\Lambda_n$ respectively. These densities are consistent: removing a site outside $\Lambda_n$ traces a factor $q^{-1}I$ to $1$, while tracing sites in $\Lambda_n$ commutes with the displayed partial trace because both are finite tensor-basis sums. Therefore [F5] gives an algebraic state $\omega_n$ on $\mathcal A$. If $A$ is local in $\mathcal A_X$, then for all sufficiently large $n$, $X\subseteq\Lambda_n$ and $\omega_n(A)=\omega_r(A)$. For arbitrary $A\in\mathcal A$, choose local $C$ with $\|A-C\|<\varepsilon/4$ using [F2]; since both states have norm one, $|\omega_n(A)-\omega_r(A)|\le2\|A-C\|+|\omega_n(C)-\omega_r(C)|<\varepsilon$ for all sufficiently large $n$. Hence $\omega_n\to\omega_r$ pointwise on $\mathcal A$. [A1, A2, F1, F2, F3, F5, F11, step 1.1, algebra]

3.1 Applying the local-pair conclusion of [F7] to this particular pointwise-convergent finite Gibbs sequence gives, for every local $C,D$, a bounded continuous strip function $F_{C,D}$, holomorphic inside, with lower and upper edges $\omega_r(C\alpha_t(D))$ and $\omega_r(\alpha_t(D)C)$. This is precisely the local conclusion of [F7]; no whole-algebra KMS conclusion is attributed to that supplier. [A1, A2, F3, F6, F7, step 2.1]

4.1 Let $A,B\in\mathcal A$ and choose local sequences $A_n\to A$, $B_n\to B$. On either boundary, the correlation difference for local pairs is bounded by $$\|A_n-A_m\|\,\|B_n\|+\|A_m\|\,\|B_n-B_m\|,$$ because $\omega_r$ has norm one and $\alpha_t$ is isometric by [F4]. Decomposing the difference into the two local-pair differences $(A_n-A_m,B_n)$ and $(A_m,B_n-B_m)$, [F8] gives the same bound throughout the strip; its zero-edge uniqueness makes this decomposition equal to $F_{A_n,B_n}-F_{A_m,B_m}$. The right side tends to zero, since the convergent sequences have bounded norms. Thus $F_{A_n,B_n}$ is uniformly Cauchy on the closed strip. Its limit $F_{A,B}$ is bounded and continuous there and is holomorphic inside by [F10]. Norm continuity of $\omega_r$, $\alpha_t$, and multiplication gives the required lower and upper boundary values. Therefore $\omega_r$ is KMS for all $A,B\in\mathcal A$. [F2, F4, F6, F8, F10, step 3.1, algebra]

5.1 Let $\nu$ be any $\beta$-KMS state on $\mathcal A$. For a finite region $\Lambda$, every larger finite-volume Hamiltonian has the form $H_{\Lambda'}=H_\Lambda+K_{\Lambda'\setminus\Lambda}$, where $K_{\Lambda'\setminus\Lambda}$ is a sum of onsite terms supported outside $\Lambda$ and therefore commutes with every $A\in\mathcal A_\Lambda$. Hence $\alpha_t^{\Lambda'}(A)=e^{itH_\Lambda/\hbar}Ae^{-itH_\Lambda/\hbar}$ whenever $\Lambda'\supseteq\Lambda$. Taking the thermodynamic limit in [F4] shows that $\mathcal A_\Lambda$ is invariant under $\alpha_t$ and its restriction is exactly this finite-dimensional conjugation group. Restricting the KMS functions to $A,B\in\mathcal A_\Lambda$ shows that $\nu|_{\mathcal A_\Lambda}$ is a finite-dimensional $\beta$-KMS state. By [F9], its density is $e^{-\beta H_\Lambda}/Z^{|\Lambda|}=r^{\otimes\Lambda}$. Thus $\nu$ and $\omega_r$ agree on every finite local algebra; continuity and density of $\mathcal A_{\mathrm{loc}}$ imply $\nu=\omega_r$. This proves uniqueness. [A2, F1, F2, F4, F6, F9, step 2.1, step 4.1] ∎

## Remarks

The current finite-matrix and KMS suppliers are used at their inspected conditional interfaces. The proof does not infer that a finite Gibbs trace is an infinite-volume density matrix; it constructs an algebraic product state and proves the full KMS condition by local-pair strip limits and norm approximation.

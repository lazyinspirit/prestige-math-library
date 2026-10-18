---
id: thm-general-car-has-universal-inductive-limit-norm
kind: theorem
title: CAR over a Hilbert Space Has the Universal Inductive-Limit Norm
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: car-algebras-majorana-generators-and-clifford-comparison
dependency_level: 8
deps:
  - def-car-algebra-over-hilbert-space
  - def-finite-dimensional-car-algebra
  - thm-finite-dimensional-car-algebra-is-matrix-algebra
  - lem-car-finite-subspace-inclusions-are-isometric
  - lem-fock-creation-annihilation-satisfy-car
  - def-fermionic-fock-space-over-hilbert-space
  - def-countable-choice
  - def-hilbert-space-adjoint
  - thm-hilbert-adjoint-properties
  - thm-bounded-operator-space-is-banach
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - lem-composition-operator-norm-inequality
  - def-c-star-algebra
justified_by: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Günther Hörmann, C*-Algebras with Aspects of Quantum Physics, Chapter 6, §§6.4 and 6.7"
      url: https://www.mat.univie.ac.at/~gue/lehre/2324CStarQP/CAQP.pdf
    - title: "Jan Dereziński, Introduction to Representations of the Canonical Commutation and Anticommutation Relations, §§4.1, 4.2 and 5.7"
      url: https://arxiv.org/pdf/math-ph/0511030
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space, and let $\mathsf{CAR}(H)$ be the completion of its directed union of finite-dimensional CAR algebras from [[def-car-algebra-over-hilbert-space]]. Let $K\ne\{0\}$ be a complex Hilbert space, and let $C:H\to\mathcal B(K)$ be a complex-linear family of bounded operators satisfying

$$ \{C(f),C(g)\}=0,\qquad \{C(f)^*,C(g)^*\}=0,\qquad \{C(f)^*,C(g)\}=\langle g,f\rangle I_K \quad(f,g\in H). $$

There is a unique unital isometric $*$-homomorphism $\rho:\mathsf{CAR}(H)\to\mathcal B(K)$ with $\rho(c(f))=C(f)$. For each $x$ in the algebraic union, its inductive-limit norm equals the supremum of $\|\rho(x)\|$ over all such families on nonzero Hilbert spaces. This family is nonempty: the fermionic Fock representation $C(f)\mapsto C(f)$ of [[lem-fock-creation-annihilation-satisfy-car]] attains the norm on every finite stage.

## Facts & Assumptions
**Given:** A complex Hilbert space $H$, a nonzero complex Hilbert space $K$, and a complex-linear CAR family $C:H\to\mathcal B(K)$.

[F1] $\mathsf{CAR}(H)$ is the completion of the directed union of its finite-dimensional CAR C*-algebras, with generator-preserving isometric inclusions ([[def-car-algebra-over-hilbert-space]], [[lem-car-finite-subspace-inclusions-are-isometric]]).

[F2] Every finite-dimensional CAR C*-algebra is a full matrix algebra, and every unital $*$-representation on a nonzero Hilbert space is isometric ([[thm-finite-dimensional-car-algebra-is-matrix-algebra]]).

[F3] Fermionic Fock space has a nonzero vacuum vector ([[def-fermionic-fock-space-over-hilbert-space]]).

[F4] Fock creation operators and their adjoints satisfy the stated CAR relations ([[lem-fock-creation-annihilation-satisfy-car]]).

[F5] If $Y$ is Banach, then $\mathcal B(X,Y)$ is Banach for the operator norm ([[thm-bounded-operator-space-is-banach]]).

[F6] $\mathcal B(K)$ denotes bounded linear operators with operator norm $\|T\|=\sup_{\|x\|\le1}\|Tx\|$ ([[def-space-of-bounded-linear-operators]], [[def-operator-norm]]).

[A1] Countable Choice is retained for the Hilbert tensor/Fock construction and Hilbert-space adjoints in the Fock representation ([[def-countable-choice]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[F7] Under Countable Choice, bounded Hilbert-space adjoints satisfy $\|T^*\|=\|T\|$ and $(ST)^*=T^*S^*$ ([[thm-hilbert-adjoint-properties]]).

[F8] Operator norms satisfy $\|ST\|\le\|S\|\,\|T\|$ ([[lem-composition-operator-norm-inequality]]).

[F9] A C*-norm is submultiplicative and its involution is isometric ([[def-c-star-algebra]]).

## Proof

1.1 For each finite-dimensional $F\subseteq H$, the restriction $C|_F$ satisfies the defining relations of $\mathsf{CAR}^{\mathrm{alg}}(F)$. Its universal property gives a unital $*$-homomorphism $\rho_F$ from that algebra to $\mathcal B(K)$. These homomorphisms agree on inclusions because each sends every $c(f)$ to $C(f)$. By [F2], every $\rho_F$ is isometric since $K\ne\{0\}$. They therefore define an isometric $*$-homomorphism $\rho_0$ on the algebraic union. [given, F1, F2, construct]

2.1 Since $K$ is Hilbert, it is Banach; applying [F5] with $X=Y=K$ shows $\mathcal B(K)$ is complete for its operator norm [F6]. The isometry $\rho_0$ sends Cauchy sequences to Cauchy sequences, so for $x\in\mathsf{CAR}(H)$ choose a local sequence $x_m\to x$ and define $\rho(x)=\lim_m\rho_0(x_m)$. Isometry makes this limit independent of the chosen sequence and proves that $\rho$ is a linear isometry extending $\rho_0$. [F1, F5, F6, step 1.1, construct]

3.1 Let $x,y\in\mathsf{CAR}(H)$ and choose local sequences $x_m\to x$ and $y_m\to y$. Since $(x_m)$ is bounded, [F9] gives $\|x_my_m-xy\|\le\|x_m\|\|y_m-y\|+\|x_m-x\|\|y\|\to0$; [F8] gives the same estimate for $\rho_0(x_m)\rho_0(y_m)\to\rho(x)\rho(y)$. Because $\rho_0(x_my_m)=\rho_0(x_m)\rho_0(y_m)$, limits prove multiplicativity. Also [F9] gives $x_m^*\to x^*$, while [F7] and $\rho_0(x_m)\to\rho(x)$ give $\rho_0(x_m)^*\to\rho(x)^*$. Since $\rho_0(x_m^*)=\rho_0(x_m)^*$, taking limits proves $\rho(x^*)=\rho(x)^*$. The common unit is preserved on the dense union. Any other continuous extension agrees there and hence equals $\rho$. [F1, F7, F8, F9, step 2.1, algebra]

4.1 By [F3] the Fock space is nonzero, and under [A1] the creation and adjoint operators in [F4] give one of the stated CAR families. Applying the extension construction of steps 1.1, 2.1 and 3.1 to this family gives its representation of $\mathsf{CAR}(H)$. Every such representation restricts on a finite stage to a unital representation of that matrix algebra, so [F2] makes its norm on each local element equal the stage norm. Thus the global family is nonempty and the supremum of represented norms equals the inductive-limit norm for every local element. [A1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎

## Remarks

The directed finite-dimensional CAR system and its finite-stage norms use finite-dimensional subspaces and finite orthonormal bases. The theorem retains Countable Choice for its completion and Hilbert/Fock construction context, including the bounded Hilbert adjoints in the Fock representation that witnesses nonemptiness of the global representation family. This is an abstract CAR C*-algebra statement and supplies no QFT locality or spin-statistics theorem.

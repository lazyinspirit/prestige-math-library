---
id: lem-cm-constraint-multipliers-and-accelerations
kind: lemma
title: "Reactions annihilating the virtual displacements are transpose multiples, with a positive definite multiplier matrix"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [cor-inverse-matrix-by-adjugate, thm-rank-nullity, def-cm-holonomic-constraint-and-ideal-reactions, lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple, lem-cm-positive-definite-matrix-square-roots, def-matrix-product-and-identity-matrix, def-invertible-matrix-and-general-linear-group, def-linear-map, thm-linear-kernel-image-and-injectivity, def-transpose-of-a-matrix, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  cor-inverse-matrix-by-adjugate: mathematical-premise
  thm-rank-nullity: mathematical-premise
  def-cm-holonomic-constraint-and-ideal-reactions: mathematical-premise
  lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple: mathematical-premise
  lem-cm-positive-definite-matrix-square-roots: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-linear-map: mathematical-premise
  thm-linear-kernel-image-and-injectivity: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.9 (Lagrange multipliers for Holonomic Constraints) and Section 6.8 (constraint forces)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.3 (the Lagrange multiplier method for constrained systems and the constraint forces), printed pages 17-22"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $G:O\to\mathbb R^k$ be a $C^2$ regular holonomic constraint with $G_q(t,q)$ of rank $k$ on
$O\subseteq\mathbb R\times\mathbb R^n$ ([[def-cm-holonomic-constraint-and-ideal-reactions]]), and
let $M\in M_n(\mathbb R)$ be symmetric positive definite. Fix $(t,q)\in O$ and write
$V=\ker G_q(t,q)$ for the virtual displacements. Then:

1. for every $R\in\mathbb R^n$, the condition $R\cdot\delta=0$ for all $\delta\in V$ holds if and
   only if there is a unique $\lambda\in\mathbb R^k$ with

$$R=G_q(t,q)^{\mathsf T}\lambda ;$$

2. the $k\times k$ matrix

$$C(t,q):=G_q(t,q)M^{-1}G_q(t,q)^{\mathsf T}$$

   is symmetric and positive definite, hence invertible; in particular for every $R$ orthogonal to
   $V$ the multiplier of clause 1 is $\lambda=\bigl(G_qM^{-1}G_q^{\mathsf T}\bigr)^{-1}G_qM^{-1}R$,
   and the multiplier is a $C^1$ function of $(t,q,R)$.

## Facts & Assumptions

**Given:** The regular constraint $G$ with $k\times n$ Jacobian $G_q(t,q)$ of rank $k$ at the fixed point, the symmetric positive definite matrix $M$, and a vector $R\in\mathbb R^n$.

[F1] The multiplier lemma ([[lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple]]): for a surjective linear map $A:\mathbb R^n\to\mathbb R^k$ and a linear functional $\ell:\mathbb R^n\to\mathbb R$ vanishing on $\ker A$, there is a unique $\lambda\in\mathbb R^k$ with $\ell(v)=\lambda\cdot Av$ for all $v$. Here $A=G_q(t,q)$ is surjective because its rank is $k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]]).

[F2] The inverse of a symmetric positive definite matrix is symmetric and positive definite, and the matrix $M$ is invertible ([[lem-cm-positive-definite-matrix-square-roots]] clause 1); matrix transposition and multiplication satisfy $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$ and $(G_q^{\mathsf T}\lambda)\cdot v=\lambda\cdot G_qv$ ([[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-euclidean-inner-product]], [[def-linear-map]]).

[F3] A linear map of a finite-dimensional space with trivial kernel is injective ([[thm-linear-kernel-image-and-injectivity]]), and an injective linear endomorphism of $\mathbb R^k$ is invertible: [[thm-rank-nullity]] gives image dimension $k$, hence surjectivity, and the inverse of a linear bijection is linear and two-sided ([[def-invertible-matrix-and-general-linear-group]]).

## Proof

**Proof technique:** direct; translate the orthogonality condition into the multiplier lemma and verify positive definiteness of the multiplier matrix by a quadratic-form computation.

1.1 Clause 1, forward: assume $R\cdot\delta=0$ for all $\delta\in V=\ker G_q(t,q)$. Apply [F1] to the surjective $A=G_q(t,q)$ and the linear functional $\ell(v):=R\cdot v$, which vanishes on $\ker A=V$ by hypothesis: there is a unique $\lambda\in\mathbb R^k$ with $R\cdot v=\lambda\cdot G_q(t,q)v=(G_q(t,q)^{\mathsf T}\lambda)\cdot v$ for every $v\in\mathbb R^n$. Hence $R=G_q(t,q)^{\mathsf T}\lambda$. [F1, F2, algebra]

1.2 Clause 1, converse: if $R=G_q^{\mathsf T}\lambda$ and $\delta\in V$, then $R\cdot\delta=\lambda\cdot G_q\delta=0$. Uniqueness of $\lambda$ is the uniqueness statement of [F1]. [F1, F2, algebra]

1.3 Clause 2, symmetry: $C^{\mathsf T}=(G_qM^{-1}G_q^{\mathsf T})^{\mathsf T}=G_q(M^{-1})^{\mathsf T}G_q^{\mathsf T}=G_qM^{-1}G_q^{\mathsf T}=C$, because $M^{-1}$ is symmetric by [F2]. [F2, algebra]

1.4 Clause 2, positive definiteness: let $0\ne z\in\mathbb R^k$ and put $w:=G_q^{\mathsf T}z$. If $w=0$, then $z\cdot G_qv=(G_q^{\mathsf T}z)\cdot v=0$ for every $v\in\mathbb R^n$; since $G_q$ is surjective, $z\cdot u=0$ for every $u\in\mathbb R^k$, hence $z=0$, a contradiction. Thus $w\ne0$, and by positive definiteness of $M^{-1}$, $$z^{\mathsf T}Cz=z^{\mathsf T}G_qM^{-1}G_q^{\mathsf T}z=w\cdot M^{-1}w>0 .$$ Hence $C$ is positive definite. By the kernel argument ($Cz=0$ implies $z^{\mathsf T}Cz=0$ implies $z=0$) and [F3], $C$ is invertible. [F2, F3, algebra]

2.1 The formula for $\lambda$: if $R$ is orthogonal to $V$, clause 1 gives $R=G_q^{\mathsf T}\lambda$; multiplying by $G_qM^{-1}$ on the left gives $G_qM^{-1}R=C\lambda$, hence $\lambda=C^{-1}G_qM^{-1}R$. The right-hand side is a composition of $C^1$ maps of $(t,q)$ — the entries of $G_q$ and of $C^{-1}$ are $C^1$ by [[cor-inverse-matrix-by-adjugate]], because $G$ is $C^2$ and $\det C\ne0$ — and is linear in $R$, so $\lambda$ depends on $(t,q,R)$ in a $C^1$ way. [F2, step 1.4, algebra] ∎

## Remarks

- The uniqueness in clause 1 is uniqueness of the multiplier for a *given* reaction $R$, not yet uniqueness of the reaction or of the acceleration: which $R$ occurs is determined only after the twice-differentiated constraint is imposed, and that is done in [[prop-cm-ideal-holonomic-system-in-a-time-dependent-chart]].

- The matrix $C$ is the inverse of the reduced mass matrix on the conormal directions; its positive definiteness is the reason the constrained acceleration is determined by the data wherever the rank hypothesis holds. At a point where the rank of $G_q$ drops, $C$ degenerates and the construction is not available; the proposition below makes no claim there.

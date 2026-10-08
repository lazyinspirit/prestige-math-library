---
id: cor-picard-zero-is-the-jacobian
kind: corollary
title: Picard zero is the Jacobian
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 25
deps:
  - def-abel-jacobi-map
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-jacobian-of-a-compact-riemann-surface
  - def-picard-group-of-divisor-classes-and-pic-zero
  - lem-abel-jacobi-map-is-well-defined-and-base-point-independent
  - thm-abels-theorem-for-divisors
  - thm-first-isomorphism-theorem-groups
  - thm-jacobi-inversion
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2, §§21.6-21.7: the map $j:\\operatorname{Pic}^0(X)\\to\\operatorname{Jac}(X)$ is injective by Abel's theorem and surjective by Jacobi inversion, printed pp. 170-171."
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 7 §2, Theorems 7.4 and 7.6: the Abel-Jacobi map $I:\\operatorname{Pic}^0(S)\\to\\operatorname{Jac}(S)$ is an isomorphism, printed pp. 60-63."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, Theorem 15.4 and Corollary 15.9: $\\operatorname{Jac}(X)\\cong\\operatorname{Pic}^0(X)=\\operatorname{Div}^0(X)/(\\mathcal M^*(X))$, printed pp. 129-130."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact
connected Riemann surface. Then the Abel-Jacobi homomorphism
$u:\operatorname{Div}^0(X)\to\operatorname{Jac}(X)$ induces a canonical
isomorphism of abelian groups
$$\operatorname{Pic}^0(X)=\operatorname{Div}^0(X)/\!\sim\;\xrightarrow{\ \cong\ }\;\operatorname{Jac}(X),$$
where $\operatorname{Pic}^0(X)$ is the group of degree-zero divisor classes
([[def-picard-group-of-divisor-classes-and-pic-zero]]) and
$\operatorname{Jac}(X)=\Omega(X)^{*}/\Lambda$ is the Jacobian
([[def-jacobian-of-a-compact-riemann-surface]]). The isomorphism is canonical:
it depends only on $X$ and on the Abel-Jacobi construction, and in particular on
no choice of base point, symplectic basis or basis of $\Omega(X)$.
Equivalently, in the line-bundle reading, degree-zero holomorphic line bundles
on $X$ are classified up to isomorphism by their Abel-Jacobi class in
$\operatorname{Jac}(X)$.

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$, the Abel-Jacobi homomorphism $u$, and the groups $\operatorname{Div}^0(X)$, $\operatorname{Prin}(X)$, $\operatorname{Pic}^0(X)$ and $\operatorname{Jac}(X)$.

[F1] $u:\operatorname{Div}^0(X)\to\operatorname{Jac}(X)$ is a group homomorphism, base-point free on degree-zero divisors ([[def-abel-jacobi-map]], [[lem-abel-jacobi-map-is-well-defined-and-base-point-independent]]).

[F2] Kernel of $u$ equals the subgroup $\operatorname{Prin}(X)$ of principal divisors ([[thm-abels-theorem-for-divisors]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] $u$ is surjective ([[thm-jacobi-inversion]]).

[F4] $\operatorname{Pic}^0(X)=\operatorname{Div}^0(X)/\operatorname{Prin}(X)$ is the quotient of the abelian group $\operatorname{Div}^0(X)$ by its subgroup $\operatorname{Prin}(X)$; its elements are the linear-equivalence classes $[D]$ ([[def-picard-group-of-divisor-classes-and-pic-zero]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F5] First isomorphism theorem for groups: a homomorphism with kernel $N$ induces an isomorphism from the quotient by $N$ onto its image ([[thm-first-isomorphism-theorem-groups]]).

[F6] The line-bundle dictionary of the Picard group identifies divisor classes with isomorphism classes of holomorphic line bundles, and the degree-zero part with degree-zero line bundles ([[def-picard-group-of-divisor-classes-and-pic-zero]]).

[F7] Full AC is inherited from the Abel and inversion suppliers and from the meromorphic-section existence used in the line-bundle dictionary ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $u:\operatorname{Div}^0(X)\to\operatorname{Jac}(X)$ is a homomorphism of abelian groups with kernel $\ker u=\operatorname{Prin}(X)$ by [F2]. Since $\operatorname{Pic}^0(X)=\operatorname{Div}^0(X)/\operatorname{Prin}(X)$ by [F4], the first isomorphism theorem [F5] gives an injective homomorphism $\bar u:\operatorname{Pic}^0(X)\to\operatorname{Jac}(X)$, $[D]\mapsto u(D)$. [F1, F2, F4, F5]

2.1 By [F3] the homomorphism $u$ is surjective, so $\bar u$ is surjective as well; hence $\bar u$ is an isomorphism of abelian groups. [F3, step 1.1]

2.2 The isomorphism $\bar u$ is computed from $u$ alone, and $u$ and its divisor extension are defined from the intrinsic period pairing on $X$; by [F1] the values on $\operatorname{Div}^0(X)$ do not depend on the chosen base point, and the definition of $\operatorname{Jac}(X)$ as the quotient of $\Omega(X)^*$ by the intrinsic lattice $\Lambda=e(H_1(X;\mathbb Z))$ makes the isomorphism independent of the chosen symplectic basis or basis of $\Omega(X)$. Hence the isomorphism is canonical in the stated sense. [F1, F4, step 1.1]

3.1 Under the line-bundle dictionary [F6], the quotient $\operatorname{Pic}^0(X)$ is the group of isomorphism classes of degree-zero holomorphic line bundles on $X$, and the isomorphism $\bar u$ attaches to the class of such a bundle its Abel-Jacobi class $u(D)$ for any divisor $D$ with $\mathcal O(D)$ the bundle. [F6, step 2.1]

4.1 Steps 1.1-2.2 prove the existence and canonicity of the isomorphism and its line-bundle reading, under the inherited full AC of [F7]. [F7, step 2.1, step 2.2, step 3.1] ∎

## Source notes

Forster's §§21.6-21.7 (*Lectures on Riemann Surfaces*, printed pp. 170-171)
factor the Abel-Jacobi construction through $\operatorname{Pic}^0(X)$ and prove
injectivity by Abel's theorem and surjectivity by Jacobi inversion; Looijenga's
Theorems 7.4 and 7.6 (printed pp. 60-63) and McMullen's Theorem 15.4 with
Corollary 15.9 (printed pp. 129-130) state the same isomorphism. The item
composes the two directions already proved in this batch through the first
isomorphism theorem and records the canonicity.

Unfinished suppliers and exact uses: `thm-abels-theorem-for-divisors` supplies
$\ker u=\operatorname{Prin}(X)$ in step 1.1 and is escalated on the weak-solution,
solvability and trace suppliers; `thm-jacobi-inversion` supplies surjectivity in
step 1.2 and is escalated on Riemann-Roch and the separation lemma;
`def-picard-group-of-divisor-classes-and-pic-zero` supplies the quotient and the
line-bundle dictionary in steps 1.1 and 2.2 and is escalated on the meromorphic
section lemma. Keep this corollary escalated until those decisions and uses are
reconciled.

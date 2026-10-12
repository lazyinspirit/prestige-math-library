---
id: prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets
kind: proposition
title: "The distribution $\\mathrm{span}\\{\\partial_x,\\partial_y+x\\partial_z\\}$ is not tangent to any regular level sets"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-nonholonomic-velocity-constraint-law, thm-clairaut-schwarz-mixed-partials, thm-algebra-of-derivatives, def-derivative, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-regular-critical-points-values-and-level-sets, def-tangent-space-to-a-regular-level-set]
dependency_roles:
  def-cm-nonholonomic-velocity-constraint-law: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-regular-critical-points-values-and-level-sets: mathematical-premise
  def-tangent-space-to-a-regular-level-set: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Cortes, M. de Leon, D. Martin de Diego and S. Martinez, Geometric description of vakonomic and nonholonomic dynamics. Comparison of solutions (SIAM J. Control Optim., author PDF), Section 5 (Chetaev equations for non-integrable linear constraints and the non-integrability discussion)"
      url: "http://terrano.ucsd.edu/jorge/publications/data/2003_CoLeMaMa-sicon.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.7 (Constrained Variational Systems: differential constraints and integrability) and Section 6.9 (Applications involving Non-holonomic Constraints)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---

## Statement

Let $O\subseteq\mathbb R^3$ be open and nonempty, and consider the derivations
$A:=\partial_x$ and $B:=\partial_y+x\,\partial_z$ acting on $C^2$ functions on $O$. If
$G:O\to\mathbb R$ is of class $C^2$ with

$$AG=0\quad\text{and}\quad BG=0\quad\text{on }O,$$

then $DG=0$ on $O$. Consequently, if $G:O\to\mathbb R$ is $C^2$ and $DG(q)\ne0$ for every
$q\in O$ (so that every level set of $G$ is a regular level set with tangent space
$\ker DG(q)$, [[def-regular-critical-points-values-and-level-sets]],
[[def-tangent-space-to-a-regular-level-set]]), then the distribution
$D(q)=\operatorname{span}\{A(q),B(q)\}$ of [[def-cm-nonholonomic-velocity-constraint-law]] is not
equal to $\ker DG(q)$; that is, no such $G$ has level sets whose tangent planes are everywhere the
virtual displacements of the constraint $z'=xy'$.

## Facts & Assumptions

**Given:** The open set $O$, a $C^2$ function $G:O\to\mathbb R$, and the two derivations
$A=\partial_x$, $B=\partial_y+x\partial_z$.

[F1] Partial derivatives, the gradient and the Jacobian
([[def-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]],
[[def-ck-and-multi-index-notation-in-several-variables]],
[[def-ck-euclidean-maps-and-diffeomorphisms]]): $AG=\partial_xG$ and
$BG=\partial_yG+x\partial_zG$ are the displayed $C^1$ functions, and $DG=(\partial_xG,\partial_yG,\partial_zG)$.

[F2] Equality of mixed partial derivatives for a $C^2$ function
([[thm-clairaut-schwarz-mixed-partials]]):
$\partial_x\partial_yG=\partial_y\partial_xG$ and
$\partial_x\partial_zG=\partial_z\partial_xG$ on $O$.

[F3] One-variable calculus and the product rule
([[thm-algebra-of-derivatives]], [[def-derivative]]): the composition of partial derivatives
acts by the usual product rule, so
$ABG=\partial_x\bigl(\partial_yG+x\partial_zG\bigr)=\partial_x\partial_yG+\partial_zG+x\partial_x\partial_zG$
and $BAG=\partial_y\partial_xG+x\partial_z\partial_xG$.

## Proof

**Proof technique:** direct; bracket the two defining vector fields and use the equality of mixed
partials.

1.1 The hypotheses $AG=0$ and $BG=0$ on $O$ give, by the product rule and linearity of the derivations, $A(BG)-B(AG)=0-0=0$ on $O$; that is, $[A,B]G=0$ where $[A,B]G:=ABG-BAG$. [F1, F3, given, algebra]

1.2 Compute $[A,B]G$ from [F3]: $$ABG-BAG=\bigl(\partial_x\partial_yG+\partial_zG+x\partial_x\partial_zG\bigr) -\bigl(\partial_y\partial_xG+x\partial_z\partial_xG\bigr)=\partial_zG,$$ because [F2] cancels the first pair and the pair multiplied by $x$. [F2, F3, algebra]

2.1 Steps 1.1 and 1.2 give $\partial_zG=0$ on $O$. Then $BG=\partial_yG+x\partial_zG=\partial_yG=0$, and $AG=\partial_xG=0$; hence all three partial derivatives vanish and $DG=0$ on $O$. [F1, step 1.1, step 1.2, algebra]

3.1 Consequently, if $DG(q)\ne0$ at every point of $O$, no $C^2$ function satisfies $AG=BG=0$; in particular no such $G$ has $D(q)=\ker DG(q)$ for every $q$, since equality with the kernel would force $A$ and $B$ to annihilate $G$. [step 2.1, F1] ∎

## Remarks

- The computation shows that the constraint distribution of $z'=xy'$ is not tangent to a
  two-dimensional regular level foliation: steps 1.1-1.2 identify the bracket $[A,B]$ on $C^2$
  functions as the derivation $\partial_z$, and the hypothesis that $A$ and $B$ annihilate a
  defining function forces $\partial_zG=0$ and hence a vanishing gradient. The conclusion needed
  by the classical-mechanics development is drawn directly, without invoking a converse of the
  Frobenius theorem.

- The proposition is the precise sense in which $z'=xy'$ is a *non-holonomic* constraint: it is
  not equivalent to $G(q)=\text{constant}$ for any $C^2$ function with nonvanishing differential.
  Nothing is asserted about constraints that merely look similar or about kinematic mechanisms;
  those belong to the consuming physical models.

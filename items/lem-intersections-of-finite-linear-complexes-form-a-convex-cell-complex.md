---
id: lem-intersections-of-finite-linear-complexes-form-a-convex-cell-complex
kind: lemma
title: "Intersections of finite linear complexes form a convex cell complex"
status: draft
origin: pipeline
deps: ["def-finite-convex-cell-complex-and-linear-subdivision"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. P. Rourke and B. J. Sanderson, Introduction to Piecewise-Linear Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rsplx.pdf"
---

## Statement

Let $K_1,K_2$ be finite linear simplicial complexes in one Euclidean space, with the same underlying polyhedron. Their cells $\sigma\cap\tau$, together with all their faces and the empty cell, form a finite convex cell complex refining both. Each nonempty cell has finitely many faces and a relative interior point, and its proper faces cover its relative boundary.

The face and interior assertions also hold for every nonempty bounded finite-inequality cell in the definition.

## Source locators

2.6–2.8(5), pp.13–15; Appendix to Chapter 2 pp.27–30.


## Facts & Assumptions

[F1] Cells are bounded finite-inequality sets; supporting equality defines a face. [[def-finite-convex-cell-complex-and-linear-subdivision]].


## Proof

**Given:** Two finite geometric simplicial complexes, and finite systems of affine inequalities for their simplices.

1.1 A simplex in its affine hull is defined by its barycentric coordinates $\lambda_i\geq0$. Intersecting two simplices combines these finitely many inequalities in the intersection of their affine hulls. A nonempty intersection $C$ is closed and bounded, hence is a cell. More generally consider any nonempty such finite-inequality cell $C$. Discard inequalities identically zero on $C$. For each remaining inequality choose a witness $x_i\in C$ where it is positive. Their average is in $C$ and makes every remaining inequality positive, since all other terms are nonnegative. Finitely many strict inequalities give a relative open ball about this average in $\operatorname{aff}C$. If no inequalities remain, boundedness forces $C$ to be a singleton, and its sole point is relatively interior. [F1]

2.1 For $x\in C$, put $I(x)=\{i:\ell_i(x)=0\}$ and $F_x=\{y\in C:\ell_i(y)=0\text{ for }i\in I(x)\}$. This is an exposed face, using the supporting function $\sum_{i\in I(x)}\ell_i$; an empty index set gives $C$. Its remaining inequalities are strict at $x$, so $x$ is relatively interior in $F_x$. If $G$ is any exposed face containing $x$, then for $y\in F_x$ a small extension $z=x+\epsilon(x-y)$ still lies in $F_x$: active inequalities stay zero and all others stay nonnegative for small positive $\epsilon$. Since $x$ lies strictly between $y$ and $z$, a supporting function nonnegative on $C$ and zero at $x$ must vanish at both endpoints. Hence $y\in G$ and $F_x\subseteq G$. [step 1.1]

3.1 Conversely, choose $x$ relatively interior to any nonempty exposed face $G$, using the finite-inequality argument with its added supporting equality. For any $y\in G$, extend slightly past $x$ away from $y$ inside $G$. Every original inequality active at $x$ must vanish at $y$, by the same nonnegative weighted-sum argument. Thus $G\subseteq F_x$, and the reverse inclusion was just proved. Consequently every face is obtained from an active subset of the finite inequalities, so there are finitely many faces. Intersections of faces are faces by adding their active equalities, and a face of a face is a face of $C$ by adding more equalities. A point is in the relative boundary exactly when at least one inequality not identically zero on $C$ is active: otherwise a relative ball lies in $C$; if one is active its nonconstant affine function has negative values arbitrarily nearby in $\operatorname{aff}C$. Thus proper faces cover exactly the relative boundary. [step 1.1, step 2.1]

4.1 Let $C=\sigma\cap\tau$ and $D=\sigma^{\prime}\cap\tau^{\prime}$. In each original simplicial complex the intersections $\sigma\cap\sigma^{\prime}$ and $\tau\cap\tau^{\prime}$ are common faces. They are cut out by supporting affine equalities nonnegative on $\sigma$ and $\tau$, respectively. Restricting these equalities to $C$ shows $C\cap D$ is a face of $C$; reversing the roles proves it is a face of $D$. Now take arbitrary faces $F$ of $C$ and $G$ of $D$. First restrict to the common face $C\cap D$; intersections and transitivity of faces from the preceding step show $F\cap G$ is a face of $F$ and $G$. Including all faces therefore gives a finite complex. Every such cell is contained in its original $\sigma$ and $\tau$, and each point of the common polyhedron lies in at least one such intersection, proving refinement and equality of underlying sets. [F1, step 3.1] ∎


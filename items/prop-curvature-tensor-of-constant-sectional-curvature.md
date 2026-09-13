---
id: prop-curvature-tensor-of-constant-sectional-curvature
kind: proposition
title: Curvature tensor of constant sectional curvature
status: draft
origin: pipeline
deps: ["def-countable-choice","def-constant-sectional-curvature-and-space-form","thm-sectional-curvatures-determine-the-riemann-tensor"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 12.3.1, equation (12.1), printed pages 86–87
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Lemma 8.10, printed pages 148–149
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

This item assumes $\mathrm{AC}_\omega$, namely [[def-countable-choice|countable choice]]. In the propagated dependency chain, that assumption is required through [[def-constant-sectional-curvature-and-space-form]]; the tensor-determination argument is choice-free.

Assume $\mathrm{AC}_\omega$ as inherited through
[[def-constant-sectional-curvature-and-space-form]]; the algebraic proof below
uses no additional choice. A Riemannian manifold has constant sectional
curvature $K$ if and only if

$$R(X,Y)Z=K\bigl(g(Y,Z)X-g(X,Z)Y\bigr).$$

Equivalently,

$$\operatorname{Rm}(X,Y,Z,W)=K\bigl(g(Y,Z)g(X,W)-g(X,Z)g(Y,W)\bigr).$$

## Facts & Assumptions

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]] and is required here through [[def-constant-sectional-curvature-and-space-form]]; the pointwise tensor argument makes no additional countable-family choice.

[F1] Constant sectional curvature $K$ means that every tangent two-plane has sectional curvature $K$, with the stated low-dimensional convention and inherited $\mathrm{AC}_\omega$. [[def-constant-sectional-curvature-and-space-form]].

[F2] Algebraic curvature tensors with equal sectional curvatures on every two-plane are equal. [[thm-sectional-curvatures-determine-the-riemann-tensor]].

## Proof

**Given:** $\mathrm{AC}_\omega$, a real number $K$ and the Riemannian metric $g$.

1.1 Define $A_K(X,Y,Z,W)=K(g(Y,Z)g(X,W)-g(X,Z)g(Y,W))$. Directly exchanging arguments shows that $A_K$ is skew in each pair and invariant under pair interchange; its three cyclic terms cancel pairwise, so it has all algebraic curvature symmetries. Moreover $A_K(X,Y,Y,X)=K(g(X,X)g(Y,Y)-g(X,Y)^2)$. [A1, F2, algebra]

2.1 If the manifold has constant sectional curvature $K$, step 1.1 shows that $A_K$ and $\operatorname{Rm}$ give the same quotient on every two-plane. By [F2], $\operatorname{Rm}=A_K$. Conversely, if $\operatorname{Rm}=A_K$, division of the last identity in step 1.1 by the positive Gram determinant gives sectional curvature $K$ on every two-plane, which is [F1]. [F1, F2, step 1.1]

3.1 The four-tensor identity says for every $W$ that $g(R(X,Y)Z,W)=g(K(g(Y,Z)X-g(X,Z)Y),W)$. Nondegeneracy of $g$ yields the vector-valued formula, and pairing that formula with $W$ gives the converse equivalence. [step 2.1, algebra] ∎

---
id: thm-the-koszul-formula-defines-an-affine-connection
kind: theorem
title: "The koszul formula defines an affine connection"
status: published
origin: pipeline
deps: ["lem-koszul-formula-is-necessary-for-a-levi-civita-connection","thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms","prop-leibniz-rules-for-the-lie-bracket-with-function-multiples","prop-connection-laws-in-directional-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

For any supplied smooth Riemannian metric, its Koszul expression $K$ determines a unique smooth affine connection by
$$\nabla_XY=\left(\tfrac12 K(X,Y,\mathord\cdot)\right)^\sharp.$$
This construction works on manifolds with boundary and requires no AC.

## Facts & Assumptions

**Given:** A smooth positive-definite metric $g$; $K$ denotes the six-term expression, without assuming a connection exists.

[F1] The Koszul expression is the displayed metric-and-bracket formula ([[lem-koszul-formula-is-necessary-for-a-levi-civita-connection]]). Only its formula is used here, not that lemma's hypothesis of an existing Levi–Civita connection.

[F2] Musical maps are smooth inverse bundle isomorphisms ([[thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms]]).

[F3] Bracket function-multiple identities hold ([[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]]).

[F4] The three directional connection laws determine an intrinsic connection ([[prop-connection-laws-in-directional-form]]).

## Proof

1.1 Expand $K(X,Y,fZ)$ using the scalar product rule and [F3]. The derivative-of-$f$ terms, in the order of the six summands, are $(Xf)g(Y,Z)$, $(Yf)g(Z,X)$, $0$, $-(Yf)g(X,Z)$, $-(Xf)g(Y,Z)$, $0$. They cancel by symmetry of $g$, so $K(X,Y,fZ)=fK(X,Y,Z)$. Real linearity and additivity in all three fields follow termwise. [F1, F3]

1.2 In $K(fX,Y,Z)$ the additional terms are $0$, $(Yf)g(Z,X)$, $-(Zf)g(X,Y)$, $0$, $(Zf)g(Y,X)$, $-(Yf)g(Z,X)$, and hence cancel. Thus $K(fX,Y,Z)=fK(X,Y,Z)$. For $K(X,fY,Z)$ the additional terms are $(Xf)g(Y,Z)$, $0$, $-(Zf)g(X,Y)$, $(Zf)g(X,Y)$, $0$, $(Xf)g(Z,Y)$. Their sum is $2(Xf)g(Y,Z)$, proving $K(X,fY,Z)=fK(X,Y,Z)+2(Xf)g(Y,Z)$. [F1, F3]

2.1 For fixed local $X,Y$, expand $Z=\sum_i Z^i\partial_i$. Step 1.1 gives $K(X,Y,Z)=\sum_iZ^iK(X,Y,\partial_i)$, so $K(X,Y,\cdot)/2$ is a smooth one-form with those smooth coordinate coefficients. The intrinsic six-term expression shows agreement on overlaps. Apply the smooth map $\sharp$ to get the displayed smooth vector field. Nondegeneracy makes it the unique field with $2g(\nabla_XY,Z)=K(X,Y,Z)$ for every $Z$. [F2, step 1.1]

3.1 Step 1.2 and real linearity give function-linearity in $X$, real linearity in $Y$, and $\nabla_X(fY)=f\nabla_XY+(Xf)Y$, since $g(Y,\cdot)^\sharp=Y$. Thus [F4] gives an affine connection. The local formulas agree on restrictions, so they define a global operator without choosing an initial connection. Rank zero and empty base give the unique zero maps; in dimension one the same scalar identities apply. Smooth up-to-boundary functions have the same product and bracket rules in half-space charts, so the argument includes boundary points. Every construction is uniquely determined by the given metric; no AC or partition of unity enters. [F2, F4, step 1.2, step 2.1] ∎

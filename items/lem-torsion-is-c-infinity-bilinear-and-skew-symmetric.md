---
id: lem-torsion-is-c-infinity-bilinear-and-skew-symmetric
kind: lemma
title: "Torsion is c infinity bilinear and skew symmetric"
status: draft
origin: pipeline
deps: ["def-torsion-tensor-of-an-affine-connection","prop-connection-laws-in-directional-form","prop-leibniz-rules-for-the-lie-bracket-with-function-multiples","prop-coordinate-formula-for-the-lie-bracket"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
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

Torsion is $C^\infty(M)$-bilinear and skew-symmetric, and determines a smooth section of $\operatorname{Hom}(\bigwedge^2TM,TM)$, equivalently an alternating tensor of type $(1,2)$.

## Facts & Assumptions

**Given:** An affine connection and its torsion operation.

[F1] Torsion is the difference of two covariant derivatives and the bracket ([[def-torsion-tensor-of-an-affine-connection]]).

[F2] Directional connection laws hold ([[prop-connection-laws-in-directional-form]]).

[F3] The bracket has the function-multiple Leibniz identities ([[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]]).

[F4] The bracket is skew and its coordinate expression uses first derivatives of field coefficients ([[prop-coordinate-formula-for-the-lie-bracket]]).

## Proof

1.1 Expand $T(fX,Y)=f\nabla_XY-(Y(f)X+f\nabla_YX)-(f[X,Y]-Y(f)X)=fT(X,Y)$. Also $T(Y,X)=-T(X,Y)$ because the derivative terms exchange and the bracket is skew. This implies function-linearity in the second argument, while additivity and real linearity follow termwise. [F1, F2, F3, F4]

2.1 Locally write $X=X^i\partial_i$, $Y=Y^j\partial_j$. Bilinearity gives $T(X,Y)=\sum_{i,j}X^iY^jT(\partial_i,\partial_j)$; thus the value depends only on $X(p),Y(p)$. The displayed basis values are smooth by the smooth connection and bracket. This constructs the smooth fibrewise alternating bilinear map, whose values agree across frames since the original expression is intrinsic. Skew-symmetry gives $T(X,X)=0$ over the reals. In dimensions zero and one all alternating pairs vanish. Zero input gives zero, and the construction on an empty base is unique. No global frame or choice axiom is used. [F1, F4, step 1.1] ∎

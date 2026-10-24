---
id: thm-sectional-curvatures-determine-the-riemann-tensor
kind: theorem
title: Sectional curvatures determine the Riemann tensor
status: published
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 12.1.6 and Corollary 12.1.7, printed pages 83–84
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Lemma 8.9, complete proof on printed pages 146–147
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Let $R_1$ and $R_2$ be covariant four-tensors on a finite-dimensional real
inner-product space, each having all algebraic symmetries of a Riemann
curvature tensor. If they give the same sectional curvature on every
two-plane, then $R_1=R_2$.

## Facts & Assumptions

**Given:** The stated tensors have first- and last-pair skewness, pair-interchange symmetry, and the cyclic Bianchi identity. Their difference $T=R_1-R_2$ has the same symmetries.

## Proof

**Proof technique:** polarization using only the stated algebraic symmetries.

1.1 The sectional quotient is intrinsic to a two-plane using only the given pair skews. Indeed, if its ordered basis $(X,Y)$ is changed by a matrix $A\in\mathrm{GL}_2(\mathbb R)$ with determinant $d$, the alternating-pair numerator $R(X,Y,Y,X)$ becomes $d^2R(X,Y,Y,X)$, while the Gram determinant becomes $\det(AGA^{\mathsf T})=d^2\det G$. Thus the quotient is basis-independent. For independent $X,Y$, equality of the two quotients and positivity of the common Gram denominator give $T(X,Y,Y,X)=0$. For dependent $X,Y$, the same equality follows from first-pair skewness. [given, algebra]

2.1 Expanding $0=T(X+Y,Z,Z,X+Y)$ and using step 1.1 removes both diagonal terms. Pair interchange followed by the two pair skews identifies the two cross terms, so $2T(X,Z,Z,Y)=0$. Hence $T(X,Z,Z,Y)=0$ for all $X,Y,Z$. [given, step 1.1, algebra]

3.1 Polarize step 2.1 in $Z$: expanding $0=T(X,Z+W,Z+W,Y)$ leaves $T(X,Z,W,Y)+T(X,W,Z,Y)=0$, so $T$ is also skew in its two middle slots. The Bianchi identity now gives $0=T(X,Y,Z,W)-T(Y,X,Z,W)-T(X,Z,Y,W)=3T(X,Y,Z,W)$ by first-pair and middle-slot skewness. Therefore $T=0$ and $R_1=R_2$. [given, step 2.1, algebra] ∎

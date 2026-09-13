---
id: thm-differential-second-bianchi-identity
kind: theorem
title: Differential second Bianchi identity
status: draft
origin: pipeline
deps: ["thm-second-bianchi-identity-for-a-bundle-connection", "def-riemann-curvature-four-tensor", "prop-induced-connections-commute-with-contraction-and-permutation", "def-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Will J. Merry, Differential Geometry (2021)
      url: https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf
      locator: Theorem 36.21
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 11.3.3, printed pages 76–77
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Proposition 7.5, complete proof on printed pages 123–124
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

For the Levi–Civita connection,

$$(\nabla_XR)(Y,Z)+(\nabla_YR)(Z,X)+(\nabla_ZR)(X,Y)=0.$$

After lowering the output index, the equivalent covariant form is

$$(\nabla_X\operatorname{Rm})(Y,Z,U,V)+(\nabla_Y\operatorname{Rm})(Z,X,U,V)+(\nabla_Z\operatorname{Rm})(X,Y,U,V)=0.$$

## Facts & Assumptions

[F1] Curvature of any bundle connection obeys $d^\nabla\Omega=0$. [[thm-second-bianchi-identity-for-a-bundle-connection]].

[F2] The Riemann four-tensor is obtained by lowering the curvature output with the Riemannian metric. [[def-riemann-curvature-four-tensor]].

[F3] Induced tensor connections commute with fixed permutations and contractions. [[prop-induced-connections-commute-with-contraction-and-permutation]].

[F4] Torsion freeness of the Levi–Civita connection gives
$[A,B]=\nabla_AB-\nabla_BA$. [[def-levi-civita-connection]].

## Proof

**Given:** Smooth vector fields $X,Y,Z,U,V$ and the torsion-free, metric-compatible Levi–Civita connection.

1.1 Expanding the alternating definition of $d^\nabla R$ gives three output-derivative terms and the bracket terms $-R([X,Y],Z)+R([X,Z],Y)-R([Y,Z],X)$. Replace every bracket by $[A,B]=\nabla_AB-\nabla_BA$ using [F4], and use skewness of the two-form $R$. The six resulting argument-derivative terms are exactly those subtracted in the tensor covariant derivatives, so $d^\nabla R(X,Y,Z)=(\nabla_XR)(Y,Z)+(\nabla_YR)(Z,X)+(\nabla_ZR)(X,Y)$. [F1, F4, algebra]

2.1 Specialize [F1] to the tangent bundle to make the left side of step 1.1 zero, proving the first displayed identity. Since the Levi–Civita connection preserves $g$, lowering the output in [F2] commutes with covariant differentiation by [F3]; evaluating the resulting contracted identity on $U,V$ gives the second displayed formula. [F1, F2, F3, step 1.1] ∎

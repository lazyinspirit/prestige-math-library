---
id: thm-pgl-torsors-classify-azumaya-algebras
kind: theorem
title: "PGL torsors classify Azumaya algebras of fixed degree"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-azumaya-algebra-on-a-variety
  - thm-smooth-morphism-formally-smooth-finite-presentation
  - thm-jacobian-criterion-smooth-morphism
  - thm-wedderburn-artin-theorem
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - lem-affine-representable-fppf-family-descent
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the smoothness criterion and geometric-point constructions."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§6.6, Azumaya algebras and their PGL torsors; the matrix-unit and deformation construction is reconstructed here."
verification: {}
---

## Statement

Assume AC. For every scheme $X$ and integer $n\ge1$, the fppf sheaf of algebra automorphisms of $M_n(\mathcal O_X)$ is $\operatorname{PGL}_{n,X}$. The association $\mathcal A\mapsto\operatorname{Isom}_{\mathcal O_X\text{-alg}}(M_n(\mathcal O_X),\mathcal A)$ is an equivalence between the groupoid of degree-$n$ Azumaya algebras on $X$ and the groupoid of $\operatorname{PGL}_{n,X}$-torsors. Equivalently their isomorphism classes are in natural bijection with $H^1_{\mathrm{fppf}}(X,\operatorname{PGL}_n)$, and the connecting class from $1\to\mathbb G_m\to\operatorname{GL}_n\to\operatorname{PGL}_n\to1$ is the fppf cohomological class of the algebra and is killed by $n$. On a Noetherian scheme it is the corresponding étale cohomological Brauer class.

## Facts & Assumptions

**Given:** The scheme $X$ and the integer $n$ in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Degree-$n$ Azumaya algebras are rank-$n^2$ locally free algebras with the canonical tensor-to-endomorphism isomorphism. [[def-azumaya-algebra-on-a-variety]]

[F2] A locally finitely presented formally smooth morphism is smooth under AC. [[thm-smooth-morphism-formally-smooth-finite-presentation]]

[F3] Finite-dimensional semisimple algebras decompose into matrix algebras over division algebras. [[thm-wedderburn-artin-theorem]]

[F4] Faithfully flat module and algebra descent is effective, and affine representables are fppf sheaves. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]] [[lem-affine-representable-fppf-family-descent]]

[F5] Smooth affine étale and fppf cohomology agree over Noetherian schemes. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]]

[F6] Smooth morphisms have local charts with an invertible Jacobian minor. [[thm-jacobian-criterion-smooth-morphism]]

## Proof

**Proof technique:** identify matrix automorphisms, prove local splitting by a finite separability contraction, and descend the split algebra.

1.1 Let $T$ be affine and let $\alpha$ be an automorphism of $M_n(\mathcal O_T)$. The images $e_{ij}=\alpha(E_{ij})$ satisfy the matrix-unit identities and decompose $\mathcal O_T^n$ into the images of the orthogonal idempotents $e_{ii}$. These images are locally free rank-one summands: at each residue field the matrix-unit relations identify all summands and their direct sum has dimension $n$. Locally choose a generator $v_1$ of the first summand and put $v_i=e_{i1}v_1$. They form a basis in which every $e_{ij}$ acts as $E_{ij}$, so $\alpha$ is locally conjugation by an invertible matrix. Its kernel consists exactly of scalar matrices, since an element commuting with every $E_{ij}$ is scalar. Therefore conjugation identifies the fppf quotient $\operatorname{GL}_n/\mathbb G_m$ with the automorphism sheaf. [given, choose, construct, algebra]

1.2 Let $\mathcal A$ be Azumaya. Its splitting functor $P=\operatorname{Isom}_{\mathrm{alg}}(M_n,\mathcal A)$ is represented locally by the affine space of linear maps cut out by the finitely many unit and multiplication equations, with the determinant of the underlying map inverted; hence $P\to X$ is locally of finite presentation. At a geometric point, the Azumaya identity [F1] makes the fibre central simple: a nonzero two-sided ideal would induce a nonzero two-sided ideal of its full endomorphism algebra, and the centre acts by central endomorphisms. A minimal nonzero left ideal is simple and has zero two-sided annihilator; finitely many of its elements give a faithful map from the regular module into a finite sum of copies of that ideal. Thus the algebra is semisimple. By [F3] and algebraic closedness, its division factor is the base field, so it is $M_n$; thus every geometric fibre of $P$ is nonempty. [A1, F1, F3, given, construct, algebra]

2.1 The morphism $P\to X$ is formally smooth. For a square-zero thickening of affine tests, lift the finitely many matrix-unit images of a splitting to the locally free target algebra as a unital linear map $s$. Its multiplication defect is a Hochschild $2$-cocycle with values in the square-zero ideal, viewed as a bimodule via the given splitting. The finite separability element $e=\sum_iE_{i1}\otimes E_{1i}$ satisfies $\mu(e)=1$ and $ae=ea$ for every matrix $a$. For a normalized $2$-cocycle $c$, the finite formula $h(c)(a)=\sum_i E_{i1}c(E_{1i},a)$ satisfies $dh(c)=c$: expand the cocycle identity, use $ae=ea$, and use $\mu(e)=1$. Hence the defect is a coboundary; correcting $s$ by the resulting linear $1$-cochain gives a unital algebra homomorphism lifting the original splitting. Its determinant is a unit because it is a unit modulo a nilpotent ideal, so it is an isomorphism. By [F2] the finite-presentation morphism $P\to X$ is smooth; by step 1.2 it is surjective. By [F6], fixing the free coordinates in a smooth Jacobian chart gives an étale neighborhood carrying a section through each chosen geometric fibre point. Thus $P$ is an fppf $\operatorname{PGL}_n$-torsor by step 1.1. [A1, F2, F6, step 1.1, step 1.2, construct, algebra]

3.1 Conversely, given a $\operatorname{PGL}_n$-torsor, choose local sections in an fppf cover and glue the split matrix algebras using the conjugation action from step 1.1. Effective algebra and module descent [F4] gives an algebra locally isomorphic to $M_n$, hence an Azumaya algebra by [F1]; the same descent identifies its splitting torsor with the original torsor. These constructions are inverse on objects and morphisms and commute with base change. On a common cover, lift each $\operatorname{PGL}_n$ transition to a $\operatorname{GL}_n$ transition; the scalar triple-product defect is the connecting $\mathbb G_m$-cocycle. This is exactly the Čech representative of the associated Azumaya cohomology class. Taking determinants shows its $n$th power is a coboundary, so the class is $n$-torsion. For Noetherian $X$, [F5] identifies the fppf class with the corresponding étale class. [F1, F4, F5, step 1.1, step 2.1, construct, algebra] ∎

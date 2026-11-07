---
id: lem-smooth-affine-commutative-weil-restriction-and-diagonal-quotient
kind: lemma
title: "Smooth affine Weil restriction and its diagonal quotient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - thm-smooth-morphism-formally-smooth-finite-presentation
  - thm-jacobian-criterion-smooth-morphism
  - lem-affine-qc-cech-unit-ideal-exact
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - lem-affine-representable-fppf-family-descent
  - thm-faithfully-flat-descent-of-flatness
  - lem-ag-geometric-regularity-field-tests
  - cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented
justified_by: []
proof_strategy: direct
axiom_use: "AC is retained for the published smooth/formal-smooth, affine Cech and geometric-regularity interfaces. The finite coefficient construction and effective affine descent add no further choice premise."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, More on Morphisms and Descent; Weil restriction and smoothness"
      url: "https://stacks.math.columbia.edu/download/more-morphisms.pdf"
      locator: "The affine finite-free coefficient construction and diagonal-quotient descent are proved explicitly below; no general quotient-representability theorem is imported."
verification: {}
---

## Statement

Assume AC. Let $A$ be Noetherian, let $A\to B$ be faithfully flat with $B$
finite free as an $A$-module, and let $G$ be a smooth affine commutative
group scheme of finite presentation over $A$.
The functor $X(C)=G(B\otimes_AC)$ on $A$-algebras is represented by a smooth
affine commutative group scheme of finite presentation. Its diagonal map
$G\to X$ is a monomorphism, and its fppf quotient is represented by a smooth
affine commutative group scheme $Q$ of finite presentation.
The sequence $0\to G\to X\to Q\to0$ is exact as fppf abelian sheaves;
$X\to Q$ is a smooth surjective $G$-torsor. These constructions commute
with every Noetherian base change. The rank-one and trivial-group cases are
included.

## Facts & Assumptions

**Given:** Exactly AC and the finite-free cover and smooth affine group in the Statement.

[A1] AC is assumed for the quoted geometry. [[def-axiom-of-choice]]

[F1] Smoothness is equivalent to local finite presentation and local square-zero lifting; smooth schemes admit standard smooth Jacobian charts. [[thm-smooth-morphism-formally-smooth-finite-presentation]] [[thm-jacobian-criterion-smooth-morphism]]

[F2] A quasi-coherent module on an affine scheme has an exact augmented Cech complex for a finite principal-open cover generating the unit ideal. [[lem-affine-qc-cech-unit-ideal-exact]]

[F3] Faithfully flat descent of modules and commutative algebras is effective, and affine representable functors have unique fppf family descent. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]] [[lem-affine-representable-fppf-family-descent]]

[F4] Flatness descends along faithfully flat base change. Geometric regularity of a finite-type algebra over a field descends from a field extension. A finite-type algebra over a Noetherian ring is finitely presented. [[thm-faithfully-flat-descent-of-flatness]] [[lem-ag-geometric-regularity-field-tests]] [[cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented]]

## Proof

**Proof technique:** coefficient equations, square-zero corrections, and a quotient split after the same cover.

**Given:** The data above; all square-zero test schemes below are affine.

1.1 Write the coordinate algebra of $G$ as a finite polynomial presentation. Fix one finite $A$-basis of $B$. Replacing every coordinate by its basis-coefficient vector and imposing every coefficient of the finitely many equations gives an affine finite-presentation $A$-scheme $X$ representing exactly $C\mapsto G(B\otimes_AC)$. Multiplication, inverse and identity are represented by their coefficient polynomials. This constructs a commutative group scheme, and the functor formula proves compatibility with every base change. The diagonal is induced by $C\to B\otimes_AC$ and is a monomorphism: this map is faithfully flat, and affine representable descent [F3] detects equality of its points. [F3, given, choose, construct, algebra]

1.2 We need global square-zero lifting for smooth affine schemes, rather than silently upgrading the local convention of [F1]. Let $D'\twoheadrightarrow D$ have square-zero kernel $J$, and let $\operatorname{Spec}D\to Y$ be a point of a smooth affine scheme. By [F1] choose finitely many principal opens covering $\operatorname{Spec}D'$ on which this point lifts. Differences of two lifts on an overlap are derivations into $J$, since their difference on a product is the Leibniz expression and products of two elements of $J$ vanish. These form the quasi-coherent module $\operatorname{Hom}_D(u^*\Omega_{Y/A},J)$; the finite locally free cotangent module in a standard smooth chart identifies its local Hom sheaves with the localizations of this module. The differences satisfy the additive Cech cocycle identity. Exactness [F2] expresses them as differences of local derivations. Correct each lift by its corresponding derivation; square-zero Taylor expansion shows that it remains an algebra map. The corrected maps agree, so their coordinate maps glue to one $D'$-point of the affine $Y$. Thus the lift exists globally. [F1, F2, choose, construct, algebra]

2.1 Apply step 1.2 to $Y=G$ and the square-zero surjection $B\otimes_AD'\twoheadrightarrow B\otimes_AD$, whose kernel is square-zero because $B$ is flat. Every $X(D)$-point therefore lifts to $X(D')$. In particular $X$ is formally smooth even in this global affine-test convention. Its finite presentation from step 1.1 and [F1] make it smooth. This proof does not infer smoothness everywhere merely from smoothness at the identity. [F1, step 1.1, step 1.2, algebra]

3.1 After base change to $B$, evaluation along multiplication $B\otimes_AB\to B$ gives a group map $e:X_B\to G_B$ with section the diagonal $G_B\to X_B$. Its kernel $H$ is affine of finite presentation. Indeed it is the fibre of the affine finite-presentation morphism $e$ over the identity; that morphism is finitely presented because its affine source is finite type over the Noetherian affine target. The map $e$ is smooth. Given a square-zero lifting problem for it, lift the source point globally by step 2.1. The difference between its evaluated image and the prescribed target lift belongs to the square-zero kernel of $G$. Subtract its diagonal image from the source lift. This corrects evaluation exactly without changing reduction. Thus $e$ is formally smooth; finite presentation and [F1] prove the assertion. In particular $H$ is smooth over $B$, and the section splits the group as $X_B\cong G_B\times H$ by $z\mapsto(e(z),z-\operatorname{diag}(e(z)))$. [F1, step 1.1, step 2.1, construct, algebra]

4.1 This product shows that the fppf sheaf quotient $(X/G)_B$ is precisely $H$: two points have the same second coordinate if and only if their difference is diagonal, and every second coordinate has the lift $(0,h)$. Over $B\otimes_AB$ the two resulting presentations of $H$ identify uniquely, because both are that same quotient of $X_{B\otimes_AB}$ by $G_{B\otimes_AB}$. These are algebra isomorphisms by affine Yoneda, and uniqueness proves their cocycle identity. Effective algebra descent [F3] supplies an affine $A$-scheme $Q$ with $Q_B\cong H$. The quotient identifications descend to $X\to Q$ and identify $Q$ with the fppf sheaf quotient, using affine family descent. Addition descends, so $Q$ is a commutative group and the sequence in the Statement is exact as sheaves. [F3, step 3.1, construct, algebra]

5.1 The coordinate algebra $C$ of $Q$ is finite type over $A$. Choose finitely many $B$-algebra generators of $B\otimes_AC$ and write them as finite sums of tensors. Let $C_0\subseteq C$ be the $A$-subalgebra generated by their finitely many $C$-coefficients. The image of $B\otimes_AC_0$ in $B\otimes_AC$ contains all generators, so $B\otimes_A(C/C_0)=0$. Faithfulness gives $C=C_0$. Noetherianity and [F4] then make $C$ finitely presented. The same finite-generation argument after any affine Noetherian base change applies to the descended maps and their presentations. [F3, F4, step 4.1, choose, algebra]

6.1 Smoothness descends here directly from its stated geometric definition. Since $C\otimes_AB$ is smooth over $B$, it is $B$-flat, so $C$ is $A$-flat by [F4]. For each field $k$ over a residue field of $A$, the nonzero finite $k$-algebra $B\otimes_Ak$ has a maximal ideal and hence a finite residue extension $\ell/k$. Base changing $Q_B$ along that residue map shows $Q_\ell$ is smooth over $\ell$. Thus its coordinate algebra is geometrically regular over $\ell$, and [F4] implies geometric regularity over $k$. This proves geometrically regular fibres of $Q\to\operatorname{Spec}A$; with finite presentation and flatness it is smooth. The same argument for the morphism $X\to Q$, whose base change by $B$ is the smooth projection $G_B\times H\to H$, proves that it is smooth; its finite presentation follows from Noetherianity and finite type. It is surjective because that projection is surjective and the base change is faithfully flat. The usual torsor map $X\times G\to X\times_QX$ is an isomorphism after base change to $B$ by the product formula, hence before base change by faithful algebra descent. Thus it is a represented $G$-torsor. [F1, F3, F4, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 The functorial coefficient construction of $X$ and the uniquely characterized quotient identify their base changes with the constructions for any Noetherian $A'$; finite freeness and faithful flatness of $B\otimes_AA'$ persist. If the cover has rank one, its unit identifies $B$ with $A$ locally and hence globally, so $X=G$ and $Q=0$. A trivial $G$ gives trivial $X,Q$. No algebraic closure, group-quotient existence theorem or fppf/etale cohomology comparison has been used. AC is retained exactly as declared, and the lemma supplies a geometric quotient rather than an assumed cohomological result. [A1, F3, step 1.1, step 4.1, step 6.1, algebra] ∎

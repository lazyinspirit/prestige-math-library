---
dependency_level: 6
id: lem-smooth-function-field-curves-descend-after-finite-constant-extension
kind: lemma
title: Smooth function-field curves descend after a finite constant extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-infinite-points-on-smooth-curves-over-algebraically-closed-constants
  - thm-existence-of-algebraic-closures
  - thm-algebraic-elements-form-a-subfield
  - thm-finite-field-extensions-are-algebraic
  - thm-transitivity-of-algebraicity
  - cor-transcendence-degree-tower-additivity
  - thm-finitely-generated-algebraic-extensions-are-finite
  - lem-relative-algebraic-constants-fg-field-finite
  - cor-canonical-degree-two-g-minus-two
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - lem-proper-cohomology-field-extension
  - thm-differentials-smooth-locally-free
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - lem-ag-geometric-regularity-field-tests
  - thm-ag-standard-smooth-geometric-regularity
  - thm-projective-space-proper-over-base
  - lem-proper-stable-base-change
  - cor-noether-normalisation-module-finiteness
  - cor-dimension-preserved-by-integral-extensions
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III, printed pp. 71–78; arbitrary-constant finite-coefficient descent"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
    - title: "Bjorn Poonen, Rational Points on Varieties, §9.5.2, printed pp. 287–288; smooth-input scope qualification"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ be any field, let $K/k$ be a finitely generated
extension of positive transcendence degree with $k$ relatively algebraically
closed in $K$, and let $C/K$ be a smooth proper geometrically integral
curve of genus $g\ge2$ with $C(K)$ infinite. Then there are a finite
extension $L/K$ and a smooth proper geometrically integral genus-$g$
curve $C_0/k_L$, where
$$k_L=\{a\in L:a\text{ is algebraic over }k\},$$
such that $C_L\cong(C_0)_L$. The extension $k_L/k$ is finite, and $k_L$
is relatively algebraically closed in $L$. Both characteristics are
included, with no perfectness, separability or separably-generated
hypothesis on $k$, $K/k$ or $L/K$. Smoothness of $C$ is assumed.

## Facts & Assumptions

**Given:** AC and the exact-constant field extension, smooth curve and
infinite point set of the Statement.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Over an algebraically closed constant field, a smooth proper
geometrically integral curve of genus at least two with infinitely many
function-field points becomes constant after a finite extension, in every
characteristic.
[[lem-infinite-points-on-smooth-curves-over-algebraically-closed-constants]]

[F2] Under AC every field has an algebraic closure. Algebraicity is
transitive and transcendence degrees add in finite-transcendence-degree
towers. Finitely many algebraic elements generate a finite extension.
The relative algebraic constants of a finitely generated field form a
finite extension.
[[thm-existence-of-algebraic-closures]] [[thm-transitivity-of-algebraicity]]
Algebraic elements form a subfield and finite extensions are algebraic.
[[thm-algebraic-elements-form-a-subfield]]
[[thm-finite-field-extensions-are-algebraic]]
[[cor-transcendence-degree-tower-additivity]]
[[thm-finitely-generated-algebraic-extensions-are-finite]]
[[lem-relative-algebraic-constants-fg-field-finite]]

[F3] The complete tricanonical system embeds a smooth proper genus-$g$
curve for $g\ge2$: its degree $3(2g-2)$ is at least $2g+1$. Its canonical
sheaf and global sections commute with field extension, so an isomorphism
of curves induces a linear change between complete tricanonical coordinate
systems.
[[cor-canonical-degree-two-g-minus-two]]
[[thm-degree-two-g-plus-one-line-bundle-very-ample]]
[[lem-proper-cohomology-field-extension]]
[[thm-differentials-smooth-locally-free]]

[F4] Closed projective subschemes are described by finite homogeneous
equations, with standard affine charts. Smoothness descends under a field
extension by the geometric-regularity field test. Projective schemes are
proper, and proper cohomology commutes with field extension.
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]
[[lem-ag-geometric-regularity-field-tests]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-projective-space-proper-over-base]] [[lem-closed-immersion-proper]]
[[lem-proper-stable-composition]] [[lem-proper-cohomology-field-extension]]
Properness is stable under base change. Noether normalization and integral
dimension preservation show that dimensions of finite-type domain charts
are unchanged by a field extension.
[[lem-proper-stable-base-change]]
[[cor-noether-normalisation-module-finiteness]]
[[cor-dimension-preserved-by-integral-extensions]]

## Axiom use

AC is inherited from the algebraic closure and geometric suppliers.
Only finitely many constant coefficients, matrix entries and extension
equations are selected in the descent.

## Proof

**Proof technique:** direct; pass to algebraically closed constants
inside an algebraic closure and descend the resulting finite data.

1.1 Choose an algebraic closure $\Omega$ of $K$ by [F2]. The elements of $\Omega$ algebraic over $k$ form an algebraic closure $\overline k$ of $k$: they form a field, and any root in $\Omega$ of a polynomial with such coefficients is algebraic over their finite coefficient extension and hence over $k$ by [F2]. Put $E=K\overline k\subseteq\Omega$. It is algebraic over $K$, is finitely generated over $\overline k$ by any finite list of field generators of $K/k$, and has the same positive transcendence degree over $\overline k$ by the tower formula in [F2]. The curve $C_E$ remains smooth proper geometrically integral of genus $g$, and its point set is infinite since distinct $K$-points remain distinct under field extension. Apply [F1] to $E/\overline k$. There are a finite extension $M/E$ and a smooth proper geometrically integral genus-$g$ curve $D/\overline k$ with $C_M\cong D_M$. [F1, F2, F4, given, construct]

1.2 Choose complete tricanonical embeddings of $C$ over $K$ and $D$ over $\overline k$. By [F3] their dimensions agree, and the given isomorphism over $M$ is induced on these embeddings by a matrix $H\in\mathrm{GL}_{N+1}(M)$. Choose a finite field generating list $m_1,\ldots,m_r$ for $M/E$ and monic algebraic equations for these elements over $E$. Every coefficient of these equations is a rational expression in finitely many elements of $K$ and $\overline k$. The same is true of the finitely many entries of $H$ and its inverse as elements of $E(m_1,\ldots,m_r)$. Finally the homogeneous ideal of $D$ has finitely many generators over $\overline k$ by [F4]. Gather all the constant coefficients in these finite lists and let $k'/k$ be the field they generate inside $\overline k$. It is finite by [F2]. Then
$$L=Kk'(m_1,\ldots,m_r)\subseteq M$$
is finite over $K$: $k'/k$ is finite, and the chosen monic equations make all the $m_i$ algebraic over $Kk'$. The chosen matrix and its inverse are defined over $L$. Let $D'/k'$ be the projective scheme given by the chosen homogeneous equations of $D$. [F2, F3, F4, construct, algebra, step 1.1]

2.1 The matrix $H$ identifies $C_L$ with $(D')_L$. Indeed it does so after extending to $M$ by construction; equality of homogeneous ideals over $L$ is detected after that field extension, since each coefficient-vector quotient injects into its scalar extension. Thus the two embedded projective schemes and their inverse projective maps are already equal over $L$. The scheme $D'$ is smooth by [F4], since its extension to $\overline k$ is $D$, and is proper by its projective construction. It is geometrically integral: its extension to the algebraic closure $\overline k$ is integral. Its dimension and genus are those of $D$, namely one and $g$, by field extension and [F4]. [F3, F4, algebra, step 1.2]

3.1 The field $L$ is finitely generated over $k$, so its relative algebraic constants $k_L$ are finite over $k$ by [F2]. They contain $k'$. Moreover they are relatively algebraically closed in $L$: any element of $L$ algebraic over $k_L$ is algebraic over $k$ by transitivity and hence belongs to $k_L$ by definition. Set $C_0=(D')_{k_L}$. It is smooth proper geometrically integral of genus $g$, and step 2.1 gives $C_L\cong(C_0)_L$. This proves the stated exact-constant formulation while retaining all possible inseparability. [F2, F4, given, construct, step 1.2, step 2.1] ∎

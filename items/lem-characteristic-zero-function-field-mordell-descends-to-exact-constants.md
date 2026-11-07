---
dependency_level: 6
id: lem-characteristic-zero-function-field-mordell-descends-to-exact-constants
kind: lemma
title: Characteristic-zero function-field Mordell descends to the exact constants
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - thm-perfect-field-characterizations
  - thm-regular-equals-smooth-over-perfect-field
  - thm-global-functions-proper-integral-variety
  - lem-infinite-points-on-smooth-curves-over-algebraically-closed-constants
  - lem-constant-high-genus-curve-has-finitely-many-nonhorizontal-points
  - lem-infinite-curve-points-give-projective-frame-and-descent
  - lem-relative-algebraic-constants-fg-field-finite
  - thm-existence-of-algebraic-closures
  - thm-algebraic-elements-form-a-subfield
  - thm-transitivity-of-algebraicity
  - cor-transcendence-degree-tower-additivity
  - thm-finitely-generated-algebraic-extensions-are-finite
  - cor-canonical-degree-two-g-minus-two
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - lem-proper-cohomology-field-extension
  - thm-differentials-smooth-locally-free
  - thm-gauss-jordan-elimination-produces-reduced-row-echelon-form
  - thm-reduced-row-echelon-form-is-unique
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - lem-ag-geometric-regularity-field-tests
  - thm-ag-standard-smooth-geometric-regularity
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-proper
  - lem-proper-stable-composition
  - cor-noether-normalisation-module-finiteness
  - cor-dimension-preserved-by-integral-extensions
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hans Grauert, Mordells Vermutung, §4(2), printed pp. 143–144; exact-constant projective-frame descent"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, Chapter III, printed pp. 73–80"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
    - title: "Bjorn Poonen, Rational Points on Varieties, Theorem 9.5.10 characteristic-zero clause, printed p. 288"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
verification: {}
---

## Statement

Assume AC. Let $k$ have characteristic zero and let $K/k$ be finitely
generated of positive transcendence degree, with $k$ relatively
algebraically closed in $K$. Let $C/K$ be a regular projective
geometrically integral curve of arithmetic genus $g>1$. If $C(K)$ is
infinite, then $C$ is smooth over $K$ and there is a smooth projective
geometrically integral curve $C_0/k$ of genus $g$, with $C_0(k)$ infinite,
such that $C\cong(C_0)_K$ over $K$. The constant model is over the
original exact field $k$, not merely a finite constant extension.

## Facts & Assumptions

**Given:** AC, the characteristic-zero exact-constant extension, the
regular projective curve, and its infinite point set.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] Characteristic-zero fields are perfect, and finite-type regular
schemes over a perfect field are smooth. A proper geometrically integral
curve has only its base field as global functions; hence its arithmetic
genus equals the dimension of its first structure-sheaf cohomology.
[[thm-perfect-field-characterizations]]
[[thm-regular-equals-smooth-over-perfect-field]]
[[thm-global-functions-proper-integral-variety]]

[F2] Over algebraically closed constants in characteristic zero, a
smooth proper high-genus curve with infinitely many function-field points
is actually isomorphic over that function field to a constant curve.
For a constant such curve $D/\overline k$ and a finitely generated
extension $E/\overline k$, $D(E)\setminus D(\overline k)$ is finite.
[[lem-infinite-points-on-smooth-curves-over-algebraically-closed-constants]]
[[lem-constant-high-genus-curve-has-finitely-many-nonhorizontal-points]]

[F3] An infinite rational point set on a nondegenerate integral
projective curve contains a projective frame. The projective transformation
normalizing an ordered rational frame to the standard frame is defined
over its point field, and the transformation fixing that standard frame
is the identity over every extension.
[[lem-infinite-curve-points-give-projective-frame-and-descent]]

[F4] Under AC fields have algebraic closures. Algebraic elements form
a field, algebraicity is transitive, and transcendence degrees add in
towers. Finitely many algebraic elements generate a finite extension;
the relative algebraic constants of a finitely generated field form a
finite extension.
[[thm-existence-of-algebraic-closures]]
[[thm-algebraic-elements-form-a-subfield]] [[thm-transitivity-of-algebraicity]]
[[cor-transcendence-degree-tower-additivity]]
[[thm-finitely-generated-algebraic-extensions-are-finite]]
[[lem-relative-algebraic-constants-fg-field-finite]]

[F5] The canonical degree is $2g-2$, so the complete tricanonical
system embeds a genus-$g\ge2$ smooth proper curve. Its canonical sheaf
and global sections commute with field extension, so isomorphisms act by
linear changes of complete tricanonical coordinates.
[[cor-canonical-degree-two-g-minus-two]]
[[thm-degree-two-g-plus-one-line-bundle-very-ample]]
[[lem-proper-cohomology-field-extension]]
[[thm-differentials-smooth-locally-free]]

[F6] Finite coefficient subspaces have a unique reduced row echelon
basis. Homogeneous ideals define projective closed subschemes. Smoothness
descends under field extension; projective closed subschemes are proper.
Noether normalization and integral dimension preservation make the
dimensions of finite-type domain charts unchanged under field extension.
Proper cohomology commutes with field extension.
[[thm-gauss-jordan-elimination-produces-reduced-row-echelon-form]]
[[thm-reduced-row-echelon-form-is-unique]]
[[thm-closed-subschemes-projective-space-homogeneous-ideals]]
[[lem-ag-geometric-regularity-field-tests]]
[[thm-ag-standard-smooth-geometric-regularity]]
[[thm-projective-space-proper-over-base]] [[lem-closed-immersion-proper]]
[[lem-proper-stable-composition]]
[[cor-noether-normalisation-module-finiteness]]
[[cor-dimension-preserved-by-integral-extensions]]
[[lem-proper-cohomology-field-extension]]

## Axiom use

AC is inherited from the algebraic closure, curve and geometric suppliers.
The point frame and all coefficient and matrix selections are finite.
No Galois descent theorem or assertion of linear disjointness is used.

## Proof

**Proof technique:** direct; normalize infinitely many common points
over the two fields and descend the resulting identical equations through
their intersection.

1.1 The curve is smooth over $K$ by [F1], since $K$ has characteristic zero. Its genus in the smooth-curve sense is $g$, by the last assertion of [F1]. Choose an algebraic closure $\Omega$ of $K$ and let $\overline k$ be the subfield of its elements algebraic over $k$. It is an algebraic closure of $k$: a root in $\Omega$ of a polynomial with finitely many algebraic coefficients is algebraic over $k$ by [F4]. Put $E=K\overline k$. This is finitely generated over $\overline k$ of the same positive transcendence degree, by [F4]. Applying [F2] gives a smooth proper geometrically integral genus-$g$ curve $D/\overline k$ and an $E$-isomorphism $u:C_E\to D_E$. [F1, F2, F4, given, construct]

2.1 Embed $C$ and $D$ by complete tricanonical systems. By [F5], $u$ is represented by a projective matrix $H\in\mathrm{GL}_{N+1}(E)$ between these embeddings. Choose a finite extension $k'/k$ inside $\overline k$ containing the coefficients of finite homogeneous equations for $D$ and all the constant coefficients needed to express the entries of $H$ and its inverse as rational expressions in $K\overline k$. With $E'=Kk'$, the same equations define a projective curve $D'/k'$, and the matrix gives an $E'$-isomorphism $C_{E'}\cong(D')_{E'}$. This follows by scalar extension to $E$ and injectivity of coefficient-vector scalar extension, as in [F6]. Smoothness, geometric integrality and genus of $D'$ follow from its base extension to $\overline k$ by [F6]. Let $c$ be the relative algebraic constants of $E'/k$. It is finite over $k$ by [F4], contains $k'$, and lies in $\overline k$ by its definition inside $\Omega$. Thus $E'\cap\overline k=c$, while $K\cap c=k$ by the given exact-constant hypothesis. Extend $D'$ to $c$ and call it $D_c$. [F4, F5, F6, construct, algebra, step 1.1]

3.1 By the constant-curve assertion in [F2], all but finitely many of the images $u(P)$ for $P\in C(K)$ belong to $D(\overline k)$. They also belong to $D'(E')$ by step 2.1. On a standard projective chart their coordinate ratios therefore lie in $E'\cap\overline k=c$, so they are points of $D_c(c)$. The remaining set of points is infinite. The tricanonical embedding of $C$ is nondegenerate: a hyperplane containing it would give a zero linear combination of a basis of global sections. By [F3], choose a projective frame $P_0,\ldots,P_{N+1}$ from this infinite subset. Their images form a frame over $c$ because the projective transformation $H$ preserves independence. Normalize the first frame over $K$ and the second over $c$ to the standard frame, using [F3]. The conjugated projective transformation over $E'$ fixes that frame and is therefore the identity. Hence the two normalized embedded curves, one defined over $K$ and the other over $c$, are identical after scalar extension to $E'$. [F2, F3, F5, algebra, step 2.1]

4.1 For each homogeneous degree, the coefficient subspace of this common ideal over $E'$ has a basis defined over $K$ and one defined over $c$. Its unique nonzero RREF rows from [F6] are consequently the same over $E'$ and have entries in $K\cap c=k$. Let $J\subseteq k[T_0,\ldots,T_N]$ be their homogeneous relation ideal. Degree by degree its scalar extension to $K$ is the ideal of the normalized $C$, and its scalar extension to $c$ is that of the normalized $D_c$. Define $C_0=\operatorname{Proj}(k[T]/J)$. By [F6] its base extension to $K$ is the normalized $C$, so the inverse of the frame normalization yields an actual $K$-isomorphism $(C_0)_K\cong C$. It is smooth by field descent, proper by its projective construction, and geometrically integral because its extension to the algebraic closure $\overline k$ is the normalized curve $D$, by the equality of ideals over $c$ just proved. Its dimension is one by the dimension assertion in [F6], and its genus is $g$ by proper cohomology base change. Finally the normalized images of the infinite common point set have coordinate ratios in both $K$ and $c$, hence in $k$. They are distinct $k$-points of $C_0$, proving $C_0(k)$ infinite. This completes the full characteristic-zero branch over the original exact constants. [F3, F4, F6, given, construct, algebra, step 2.1, step 3.1] ∎

---
page: category-o-klr-and-hecke-categorification-route
title: "Category O, KLR, and Hecke Categorification Route"
status: draft
items:
  - def-category-o-klr-and-hecke-route-conventions
examples: []
---

This page is a cross-category route through existing theorem homes. It adds
one route-convention definition and makes no duplicate theorem claim. The
companion contains finite calculations that check the parameter boundaries:
[[category-o-klr-and-hecke-categorification-route-examples]].

## Reading prerequisites

The plan lists [[algebraic-representation-and-tensor-symmetry-map]] and
[[ariki-categorification-and-graded-decomposition-numbers]] as page-level
prerequisites. The Ariki page is published. The algebraic gateway page is
currently a draft; its actual authored interface and the remaining reconciliation
are recorded in the batch evidence. This page uses the published theorem and
definition carriers below directly and does not quote an unreviewed excerpt from
that draft page.

## Route map

### Category O and the degenerate affine Hecke algebra

For $\mathfrak{gl}_N(\mathbb C)$ and $M\otimes (\mathbb C^N)^{\otimes d}$,
the Casimir and place-permutation operators give the degenerate affine Hecke
action in [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]] and
[[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]].
This route keeps the two normalizations visible: the relation theorem uses
$x_j,s_i$, while the Arakawa–Suzuki source uses
$y_j=x_j-z_M/N+(N-1)/2$.

The higher-level Schur–Weyl results distinguish the raw double centralizer,
the Morita equivalence at an admissible origin, and the stable-range equality
of the Hecke image with the full cyclotomic algebra. Outside the stable range
the admissible-origin image is a central corner. These are separate clauses of
[[thm-higher-level-schur-weyl-double-centralizer]] and
[[thm-higher-level-schur-weyl-endomorphism-isomorphism]]; a centralizer
statement alone does not supply Morita equivalence.

For an admissible origin, the Category-O residue-translation comparison is
[[thm-category-o-translation-intertwines-residue-induction-and-restriction]].
Its image residue functors agree with the full cyclotomic functors only when
the selected algebras are faithfully realized, or with the corresponding
central cuts when the selected contents are fully supported. The result is
ungraded and asserts no Koszul or parity lift.

For the admissible-origin, fully supported situation, the functor square is
commutative up to the natural isomorphisms in that theorem. Here $B_d$ denotes
the tensor-image algebra $\operatorname{End}_{\mathfrak g}(T_d)^{\mathrm{op}}$;
it is not presumed to equal the whole cyclotomic algebra outside the stated
stable or full-support conditions.

```tikzcd
\mathcal O_\alpha \arrow[r,"\pi_\alpha"] \arrow[d,"f_i^{\mathcal O}"'] &
B_\alpha\text{-mod} \arrow[d,"f_i^B"] \\
\mathcal O_{\alpha+\alpha_i} \arrow[r,"\pi_{\alpha+\alpha_i}"'] &
B_{\alpha+\alpha_i}\text{-mod}
```

The horizontal arrows are the Schur quotient functors, and the vertical arrows
are the O-side and image-algebra residue functors. The commutation means the
natural isomorphisms $f_i^B\pi\cong\pi f_i^{\mathcal O}$, not literal equality
of functor expressions. When full cyclotomic functors are used, the support
conditions just stated are part of the diagram's hypotheses.

### Finite cyclic type-A Hecke and KLR blocks

The blockwise bridge is
[[thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism]] under finite quantum
characteristic $e\ge2$. Its nondegenerate case has $q\ne1$; its degenerate
case has $q=1$ and requires $\operatorname{char}F=e$. The Category-O route
over $\mathbb C$ is degenerate affine Hecke theory and must not be confused
with this positive-characteristic $q=1$ cyclotomic branch. In the nondegenerate
level-one route, write the Hecke parameter $\xi$ and keep the grading variable
$q$ independent, as fixed by
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]].

Ariki's canonical-basis theorem and the characteristic-zero graded
decomposition-number identity apply in branch (C0), with the level-one,
root-of-unity and grading conventions of that regime:
[[thm-ariki-canonical-basis-theorem-in-characteristic-zero]] and
[[thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]].
In branch (CP), use the adjustment factorization in
[[thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment]];
the adjustment matrix is not asserted to be the identity. The general
negative-half categorification and cyclotomic highest-weight projective-$K_0$
identification are distinct results with their own hypotheses and Axiom of
Choice dependencies:
[[thm-klr-categorification-of-the-negative-quantum-half]] and
[[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]].

### Specht, Soergel, and Category-O multiplicities

The type-A Murphy/Specht cellular basis is
[[thm-murphy-tableau-elements-form-a-cellular-basis]], valid over its stated
commutative coefficient rings and unit parameter without a semisimplicity
assumption. The local type-A Soergel character theorem is
[[thm-soergels-character-conjecture]]; it supplies no general Coxeter or
positive-characteristic extension. The singular Category-O multiplicity
formula is spherical and evaluated at $1$ in
[[thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials]]. The
parabolic-category formula uses antispherical coefficients in a regular
ambient block, by
[[thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials]].
These two formulas are not interchangeable.

## Axiom and scope ledger

No new axiom is introduced by this route. The all-origin double-centralizer
and admissible-origin Schur comparisons retain their stated Axiom of Choice
assumptions; the Category-O residue comparison also retains its Axiom of
Choice assumption. Ariki's characteristic-zero theorem and the graded
decomposition theorem inherit choice only through their QG-8/global-basis
suppliers. The negative-half KLR theorem uses choice through the stated
nondegeneracy of the quantum form, and the cyclotomic projective-$K_0$ theorem
states its Axiom of Choice hypothesis. The finite Brundan–Kleshchev block
isomorphism and the finite examples in the companion add no choice principle.
The positive-characteristic adjustment theorem also assumes choice through
its crystal-label and global-basis suppliers; its finite coefficient
substitution adds no choice. The singular and parabolic Category-O
multiplicity theorems state choice as a hypothesis for their regular-block,
translation, and highest-weight arguments. Each assumption is used only within
its cited theorem's hypotheses.

## Reuse boundaries

- The plan's source inventory and the full design section are in
  [the Hecke dossier](../../research/physics-algebras-planning-2026-10-17/dossiers/05-hecke.md).
- The exact diagram and parameter contracts are in
  [definition and diagram contracts](../../research/physics-algebras-planning-2026-10-17/definition-and-diagram-contracts.md).
- The partial shifted-Yangian result
  [[thm-ordered-monomial-pbw-basis-for-the-shifted-yangian]] is deliberately
  not used as a supplier.
- Existing claims stay at their canonical pages; no regular/singular,
  characteristic-zero/positive-characteristic, or degenerate/nondegenerate
  hypothesis is enlarged here.

---
page: perfect-complexes-and-triangulated-grothendieck-groups
title: "Perfect Complexes and Triangulated Grothendieck Groups"
status: draft
requires: [grothendieck-groups-and-graded-cartan-pairings, bounded-bimodule-complexes-and-derived-tensor]
items:
  - def-perfect-complex-over-a-ring
  - lem-perfect-complexes-form-a-triangulated-subcategory
  - def-triangulated-grothendieck-group
  - lem-triangulated-k-zero-shifts-and-exact-functors
  - lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant
  - thm-perfect-complex-k-zero-agrees-with-projective-k-zero
  - thm-abelian-k-zero-agrees-with-bounded-derived-k-zero
  - thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories
  - thm-graded-tensor-equivalences-induce-laurent-linear-k-zero-actions
examples: []
---

This page defines perfect complexes over a unital associative ring and their
graded analogue, and computes the Grothendieck group built from distinguished
triangles on them. An object of $D(A\text{-}\mathrm{Mod})$ is perfect when it is
isomorphic there to a bounded cochain complex of finitely generated projective
left $A$-modules; no single representative is singled out, and boundedness of a
complex of arbitrary modules is explicitly not enough. In the graded version
the terms are finite graded projectives and every differential is a degree-zero
map, with the cochain shift $[1]$ and the internal shift $\{1\}$ kept apart
throughout.

The page then establishes the structural input the triangle group needs:
$D_{\mathrm{perf}}(A)$ is an essentially small strictly full triangulated
subcategory of $D(A\text{-}\mathrm{Mod})$, and every derived morphism between
bounded finite-projective representatives is represented by a chain map
uniquely up to homotopy, with a cone that is again such a representative. The
proof descends finitely many projective lifts and therefore needs no
global-dimension hypothesis and no choice principle.

The triangulated Grothendieck group $K_0^{\mathrm{tri}}(\mathcal T)$ is defined
by triangle relations $[Y]=[X]+[Z]$, and the page proves its first
computational rules: $[0]=0$, $[X[n]]=(-1)^n[X]$, and exact functors induce
homomorphisms that respect identities, composition and natural isomorphisms. The
Euler class $\chi(P)=\sum_n(-1)^n[P^n]$ of a bounded complex of finitely
generated projectives is then shown to be invariant under homotopy equivalence
and quasi-isomorphism, to depend only on the represented perfect object, and to
be additive on distinguished triangles of perfect objects. Degree-zero
inclusion and the Euler class are proved to be mutually inverse: for every ring,
$K_0^{\mathrm{split}}(\operatorname{Proj}_{\mathrm{fg}}(A))\cong K_0^{\mathrm{tri}}(D_{\mathrm{perf}}(A))$,
with the same comparison in the graded setting.

The second comparison, proved independently and without enough-projectives,
enough-injectives, Noetherian or finite-global-dimension hypotheses, identifies
$G_0(\mathcal C)$ with $K_0^{\mathrm{tri}}(D^b(\mathcal C))$ for every
essentially small abelian category, the inverse being the alternating
cohomology class $\sum_n(-1)^n[H^n(X)]$; the argument uses the finite long exact
cohomology sequence and canonical truncation triangles. The two comparisons are
then identified with each other only under an added hypothesis: if $A$ is left
Noetherian of finite left global dimension, the bounded derived categories
$D^b(A\text{-}\mathrm{mod}_{\mathrm{fg}})$ and $D_{\mathrm{perf}}(A)$ are
equivalent, and the Cartan map becomes an isomorphism through the two separate
comparisons. That theorem states the Axiom of Choice, whose exact use is the
published bounded-above projective-replacement and K-projectivity results
through AC $\Rightarrow$ DC; every other item on the page is choice-free.

The final theorem treats the graded action quantitatively. For a field $k$ and
finite-dimensional unital graded $k$-algebras $A,B$, bounded graded bimodule
complexes satisfying the published two-sided projectivity and supplied
homotopy-inverse hypotheses induce exact tensor equivalences, which produce
mutually inverse $\mathbb Z[v,v^{-1}]$-linear maps on graded projective $K_0$
and graded finite-module $G_0$ with $v[M]=[M\{1\}]$. The internal shift is
degree-zero and natural, so it gives the Laurent linearity, while the cochain
shift supplies the sign $(-1)^n$; in the published shift-orbit bases the maps
are inverse matrices over $\mathbb Z[v,v^{-1}]$. Supplied natural-isomorphism
relations between composites descend to equalities of these maps, and no
coherent categorical action upstairs is claimed.

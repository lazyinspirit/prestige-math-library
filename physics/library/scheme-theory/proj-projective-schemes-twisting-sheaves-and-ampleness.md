---
page: proj-projective-schemes-twisting-sheaves-and-ampleness
title: Proj Projective Schemes Twisting Sheaves and Ampleness
status: published
items:
  - def-proj-graded-ring-points
  - def-shifted-graded-module
  - def-standard-open-proj
  - lem-proj-prime-localization-correspondence
  - thm-proj-structure-sheaf-scheme
  - lem-standard-opens-proj-affine
  - def-associated-sheaf-graded-module-proj
  - def-very-ample-invertible-sheaf-relative
  - def-ample-invertible-sheaf
  - def-globally-generated-sheaf
  - lem-section-nonvanishing-affine-intersection
  - lem-proj-associated-sheaf-basic-sections
  - def-twisting-sheaf-proj
  - thm-projective-space-as-proj
  - lem-relative-proj-affine-local-gluing
  - def-relatively-ample-invertible-sheaf
  - lem-extend-sections-from-nonvanishing-open
  - lem-ample-stable-positive-power
  - lem-ample-pullback-finite-morphism
  - lem-proj-irrelevant-and-nilpotent-boundaries
  - thm-twisting-sheaf-invertible-standard-graded
  - lem-proj-veronese-invariance
  - lem-projective-space-saturation-local-criterion
  - def-relative-proj-quasi-coherent-graded-algebra
  - def-section-zero-scheme-invertible-sheaf
  - lem-very-ample-implies-ample
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-relative-proj-base-change
  - thm-line-bundle-sections-define-projective-map
  - rem-proj-does-not-recover-graded-ring-literally
  - thm-projective-map-line-bundle-data-equivalence
  - lem-projective-morphism-relative-proj-presentation
  - thm-serre-criterion-ampleness
  - thm-segre-line-bundle-external-tensor
  - thm-veronese-pullback-twist
  - def-projective-bundle-scheme
  - thm-ample-powers-very-ample-proper-base
  - thm-projective-bundle-represents-line-quotients
---

This page constructs $\operatorname{Proj}$ of a nonnegatively graded ring,
develops the associated sheaves of graded modules and the twisting sheaves
$\mathcal O_X(n)$, and defines ampleness, relative ampleness, and relative
very ampleness for invertible sheaves. It then proves the basic dictionary
between line-bundle data and morphisms to projective space, Serre's
global-generation criterion, and the existence of high-power closed
embeddings for proper schemes.

Every construction on this page allows the degenerate cases: the zero ring
and empty $\operatorname{Proj}$ are admissible, the empty scheme may carry
ample invertible sheaves, and projective space is allowed to be
$\mathbb P^0_S\cong S$. The choice principle AC is inherited from the
published affine-scheme, gluing and associated-sheaf machinery; each item
that uses it states the inheritance and the exact place the choice enters.
No Noetherian or finite-generation hypothesis is implicit anywhere: it is
added only where an item's statement says so.

The construction begins with the topological space: homogeneous primes
avoiding the irrelevant ideal, closed sets $V_+(I)$, the standard opens
$D_+(f)$, and the bijection between homogeneous primes avoiding a positive-degree
$f$ and primes of the degree-zero localisation $S_{(f)}$. These charts glue
along their canonical overlap localisations to a scheme whose structure sheaf
has $\Gamma(D_+(f),\mathcal O)=S_{(f)}$, and each standard open is
affine, including the empty chart.

Associated to any graded module $M$ is the sheaf $\widetilde M$ built from the
degree-zero localisations $M_{(f)}$, with the twisting sheaves
$\mathcal O_X(n)=\widetilde{S(n)}$ as the basic example. If $S$ is generated
over $S_0$ by $S_1$, every twist is invertible and tensor products of twists
add degrees; for an arbitrary grading this can fail, and the page records the
failure rather than assuming it away. Veronese regrading does not change
$\operatorname{Proj}$ but rescales the twists, so $\operatorname{Proj}$ alone
does not determine the graded ring.

Ampleness is defined by affine nonvanishing loci of global sections of
positive powers; relative ampleness is checked on the preimages of affine
opens of the base, and H-very ampleness asks for a quasi-compact (or closed)
immersion into a finite projective space pulling $\mathcal O(1)$ back to the
given sheaf. The page proves that positive powers preserve ampleness, that
finite pullback preserves it, that very ampleness implies ampleness, and the
denominator-clearing lemma under the inherited AC convention: if $X$ is
quasi-compact and quasi-separated, $F$ is quasi-coherent, $L$ is invertible,
and $s\in\Gamma(X,L^d)$ for $d>0$, then every section $t$ of $F$ on $X_s$ is
the restriction of some $a\in\Gamma(X,F\otimes L^{dr})$ for an $r\ge0$, using
$s^{-r}$ to trivialise $L^{dr}$ over $X_s$. These are ingredients of Serre's
criterion: on a Noetherian scheme, an invertible sheaf is ample if and only if
every coherent sheaf twisted by all sufficiently large powers is globally
generated.

The abstract construction is tied back to the previously published projective
spaces: $\operatorname{Proj}$ of a polynomial ring in degree-one variables is
canonically the chart-glued $\mathbb P^n_A$, compatibly with base change.
Relative $\operatorname{Proj}$ of a quasi-coherent graded algebra glues over
any base and commutes with arbitrary base change. Closed subschemes of
$\mathbb P^n_A$ correspond to saturated homogeneous ideals, while generating
global sections of an invertible sheaf define the unique morphism to
projective space with the prescribed pullback data, and conversely every
morphism arises from such data. The Segre and Veronese embeddings are proved
in the same style, with $\sigma^*\mathcal O(1)=\mathrm{pr}_1^*\mathcal O(1)
\otimes\mathrm{pr}_2^*\mathcal O(1)$ and $\nu_d^*\mathcal O(1)=\mathcal O(d)$.

Under the inherited AC convention, if the base $S$ is Noetherian, $f:X\to S$ is
proper and of finite type, and $L$ is ample on $X$, then all sufficiently
large powers of $L$ are closed H-very ample relative to $S$; the proof combines
Serre's criterion with the data equivalence and the Segre embedding. Finally,
the projective bundle $\mathbb P_S(E)=\operatorname{Proj}_S\operatorname{Sym}(E)$
of a finite locally free module is defined in the quotient convention, where
its tautological invertible quotient represents line quotients of $E$; the
rank-zero bundle is empty.

The companion page
[[proj-projective-schemes-twisting-sheaves-and-ampleness-examples]] records
the chart computations, transitions, degenerate cases, and counterexamples
that accompany these results.

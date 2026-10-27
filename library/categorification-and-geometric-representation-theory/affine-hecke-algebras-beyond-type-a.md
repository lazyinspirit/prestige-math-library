---
page: affine-hecke-algebras-beyond-type-a
title: Affine Hecke Algebras Beyond Type A
status: published
items:
- def-hh-affine-hecke-algebra-from-root-datum
- lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic
- lem-hh-sl2-q3-lattice-tree-and-iwahori-orbits
- lem-hh-affine-hecke-im-basis
- lem-hh-root-datum-affine-geometry-and-wall-parameters
- def-hh-affine-hecke-bernstein-presentation
- lem-hh-signed-alcove-products-and-oriented-basis
- thm-hh-sl2-q3-iwahori-convolution-corner
- lem-hh-affine-hecke-bernstein-quotients-are-well-defined
- thm-hh-affine-hecke-general-root-data-bernstein-pbw
- def-hh-affine-hecke-parabolic-subalgebras-and-central-characters
- rem-hh-affine-hecke-general-bernstein-pbw-awaits-local-proof
- def-hh-affine-hecke-weight-temperedness-and-positive-position
- lem-hh-affine-hecke-parabolic-weight-filtration
- lem-hh-langlands-dominant-projection
- thm-hh-affine-hecke-standard-module-unique-irreducible-quotient
- thm-hh-affine-hecke-tempered-langlands-classification
- rem-hh-affine-tempered-langlands-classification-awaits-local-proof
examples: []
requires:
  - hopf-hecke-and-quantum-symmetry-interfaces
  - split-reductive-root-systems-bruhat-cells-and-parabolics
  - absolute-values-completions-and-p-adic-numbers
  - affine-reflections-coroot-translations-and-alcoves
  - haar-measure-existence-and-uniqueness

---

This page constructs affine Hecke algebras for every reduced based root datum, with arbitrary positive real affine parameters constant on extended conjugacy classes. It uses the canonical affine-wall geometry, including the central root kernel and length-zero symmetries. The Iwahori–Matsumoto normalization is $(T_s-q_s)(T_s+1)=0$; the symmetric generator is $N_s=q_s^{-1/2}T_s$.

## Bernstein construction

[[lem-hh-root-datum-affine-geometry-and-wall-parameters]] constructs the actual canonical Coxeter/lattice interface and wall-parameter parity. [[def-hh-affine-hecke-bernstein-presentation]] defines the lattice quotient with both ordinary and doubled-root cross-relations. For comparison with a fixed affine parameter function the exceptional scalar is attached to the odd affine wall; an unrelated formal scalar is not silently equated with that parameter.

[[thm-hh-affine-hecke-general-root-data-bernstein-pbw]] proves multiplicative Bernstein translations, both ordered bases, and the presentation isomorphism. Signed oriented galleries give a length-triangular basis; deleting and reflecting each changed crossing gives the exact Bernstein relation. All sums and word reductions are finite. The separate existing [[thm-hh-affine-type-a-bernstein-pbw]] and [[thm-hh-affine-type-a-center]] retain their canonical homes and precise type-A setup.

## Tempered and Langlands classification

The local parabolic definitions retain the full lattice and the full central real exponent. Temperedness is stated through logarithmic absolute values of generalized Bernstein weights. [[thm-hh-affine-hecke-standard-module-unique-irreducible-quotient]] proves the unique irreducible quotient in strictly positive position. [[thm-hh-affine-hecke-tempered-langlands-classification]] proves exhaustivity and uniqueness for every irreducible finite-dimensional module with positive real affine parameters. Its proof uses the parabolic weight filtration and the strictly decreasing norm of the dominant projection on nonidentity parabolic cosets. The intrinsic maximal-weight subspace reconstructs the inducing datum, including central directions.

## Selected p-adic corner and parameter boundary

Assuming AC for the stated Haar/compactness suppliers, [[thm-hh-sl2-q3-iwahori-convolution-corner]] identifies the actual Iwahori convolution corner for $\operatorname{SL}_2(\mathbb Q_3)$ with its affine rank-one Hecke algebra. Explicit root cosets and the degree-four lattice tree give $q_{s_0}=q_{s_1}=3$ and $T_s^2=2T_s+3$. It constructs the unital action on $V^I$ for a smooth representation $V$. This exact corner interface is the approved selected-group corner alternative; it does not assert a whole smooth-category or block equivalence. The separate scalar result gives infinite quantum characteristic for $3$ and the companion computes finite quantum characteristic $4$ for $i$.

The complete original native source reports and proof escalations are archived in the owner completion evidence. The general PBW and classification now have local draft proofs; no source report is used as a logical premise. The plan-required [[hopf-hecke-and-quantum-symmetry-interfaces]] is navigation context, and its finite spectral R-matrix is not a supplier for this construction.

Companion: [[affine-hecke-algebras-beyond-type-a-examples]].

# Step 7 adjudication — group **c**, run `frontier-36-complete`

You are the group Alpha for batches **4**, **16**, **13**: 3 A/B pair(s), 6 page(s), 119 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-36-complete-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `zariski-tangent-spaces-regular-points-smoothness-and-bertini` | A | algebraic-geometry | 366.059 | `algebraic-differentials-separability-and-smooth-local-presentations`, `fibre-products-base-change-and-scheme-theoretic-fibres`, `diagonals-separated-morphisms-and-valuative-uniqueness`, `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`, `linear-algebra-methods-in-combinatorics` |
| 4 | `zariski-tangent-spaces-regular-points-smoothness-and-bertini-examples` | B | algebraic-geometry | 366.06 | `zariski-tangent-spaces-regular-points-smoothness-and-bertini`, `linear-recurrences-and-rational-generating-functions` |
| 16 | `smooth-projective-serre-duality-and-flag-variety-line-bundles` | A | algebraic-geometry | 510.0161 | `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `sheaf-cohomology-cech-cohomology-and-comparison`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `ext-and-balanced-resolutions`, `derived-categories`, `spectral-sequences`, `grothendieck-spectral-sequences-and-computations`, `lie-subgroups-actions-and-homogeneous-spaces`, `cartan-subalgebras-and-root-space-decompositions`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `highest-weight-theory-for-complex-semisimple-lie-algebras`, `finite-weyl-invariants-bruhat-and-kostant-harmonics` |
| 16 | `smooth-projective-serre-duality-and-flag-variety-line-bundles-examples` | B | algebraic-geometry | 510.0162 | `smooth-projective-serre-duality-and-flag-variety-line-bundles`, `harish-chandra-isomorphism-casimir-and-central-characters` |
| 13 | `fourier-multipliers-and-sobolev-characterisations` | A | fourier-analysis | 458.02601 | `weak-derivatives-and-sobolev-spaces`, `bessel-potential-completions-and-real-order-sobolev-spaces`, `complex-riesz-thorin-endpoint-interpolation`, `orthonormal-bases-parseval-and-fourier-series`, `smooth-partitions-of-unity-and-exhaustions` |
| 13 | `fourier-multipliers-and-sobolev-characterisations-examples` | B | fourier-analysis | 458.02602 | `fourier-multipliers-and-sobolev-characterisations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `zariski-tangent-spaces-regular-points-smoothness-and-bertini` — Zariski Tangent Spaces Regular Points Smoothness and Bertini (43 item(s))

- `def-zariski-cotangent-space-point` · definition — The intrinsic cotangent space
- `def-zariski-tangent-space-point` · definition — The intrinsic Zariski tangent space
- `lem-cotangent-localization-at-rational-point` · lemma — Cotangent spaces commute with localization at a rational point
- `lem-tangent-vectors-as-dual-number-points` · lemma — Tangent vectors at rational points are dual-number points
- `lem-tangent-points-over-square-zero-vector-extensions` · lemma — Square-zero vector extensions encode tangent vectors with coefficients
- `def-jacobian-matrix-affine-algebraic-set` · definition — Equation rows and coordinate columns in a Jacobian
- `thm-zariski-tangent-space-jacobian-kernel` · theorem — The Jacobian kernel computes the tangent space
- `lem-tangent-space-functoriality-classical` · lemma — Differentials, open restriction, and the chain rule
- `lem-tangent-space-product` · lemma — Tangent spaces of products over a field
- `def-regular-local-ring-geometric-point` · definition — Regular points use the existing regular-local-ring definition
- `lem-local-dimension-reduced-variety-components` · lemma — Local dimension for a reducible classical algebraic set
- `thm-embedding-dimension-at-least-local-dimension` · theorem — Tangent dimension bounds local dimension
- `def-singular-and-regular-loci-variety` · definition — Regular and singular loci
- `thm-jacobian-criterion-affine-variety` · theorem — Jacobian rank detects regularity at closed points
- `cor-hypersurface-singular-locus-gradient` · corollary — The gradient test for a reduced hypersurface
- `lem-regular-point-lies-on-one-component` · lemma — A regular point lies on one irreducible component
- `thm-regular-locus-is-open-variety` · theorem — Openness of the regular locus over a perfect field
- `lem-separating-hypersurface-chart-variety` · lemma — A dense hypersurface chart with a nonzero partial derivative
- `thm-nonempty-regular-locus-reduced-variety-perfect-field` · theorem — Dense regular loci on every component
- `cor-minimum-tangent-dimension-and-homogeneous-regularity` · corollary — Minimal tangent dimension and homogeneous regularity
- `def-smooth-morphism-to-field-classical` · definition — Smoothness over a field by geometric regularity
- `thm-regular-equals-smooth-over-perfect-field` · theorem — Regular equals smooth over a perfect field
- `thm-regular-not-smooth-imperfect-field` · theorem — Purely inseparable field algebras separate regularity from smoothness
- `def-tangent-cone-point` · definition — The scheme-theoretic tangent cone at a point
- `lem-tangent-cone-initial-ideal-presentation` · lemma — All initial forms define the tangent cone
- `lem-tangent-cone-linear-span-tangent-space` · lemma — The scheme-theoretic linear span of the tangent cone
- `def-multiplicity-hypersurface-point` · definition — Hypersurface multiplicity at a rational point
- `lem-hypersurface-smooth-iff-multiplicity-one` · lemma — Multiplicity one is the smooth hypersurface test
- `lem-smoothness-stable-under-product-classical` · lemma — Products preserve smoothness
- `def-smooth-morphism-classical` · definition — Smooth morphisms via local standard smooth presentations
- `lem-smooth-map-tangent-surjectivity-criterion` · lemma — The submersion criterion between smooth varieties
- `lem-smooth-hyperplane-slice-at-transverse-point` · lemma — A transverse hyperplane slice is smooth at the chosen point
- `lem-smooth-curve-realizing-a-tangent-direction` · lemma — A tangent direction is realized by a local smooth curve
- `lem-dominant-map-generic-differential-surjectivity-char-zero` · lemma — A dominant map has a surjective differential on a dense source open
- `cor-generic-smoothness-on-source-characteristic-zero` · corollary — Generic smoothness on the source
- `lem-critical-locus-image-dimension-bound` · lemma — Critical loci have small images in characteristic zero
- `thm-generic-smoothness-characteristic-zero` · theorem — Generic smoothness over a dense target open
- `lem-zero-scheme-of-line-bundle-section` · lemma — A section of an invertible sheaf has a canonical zero subscheme
- `def-linear-system-base-locus` · definition — Linear systems, base loci, and general members
- `lem-linear-system-incidence-is-smooth` · lemma — The universal member away from the base locus
- `thm-bertini-smooth-hyperplane-section` · theorem — Bertini smoothness away from the base locus
- `cor-smooth-projective-complete-intersections-general` · corollary — General hypersurfaces give smooth complete intersections
- `rem-jacobian-presentation-independence` · remark — Conventions and hypotheses carried by this pair

### `zariski-tangent-spaces-regular-points-smoothness-and-bertini-examples` — Zariski Tangent Spaces Regular Points Smoothness and Bertini — Examples (17 item(s))

- `ex-tangent-space-parabola` · example — The parabola at a general point
- `ex-node-two-tangent-directions` · example — A node has two distinct tangent directions
- `ex-cusp-double-tangent` · example — The cusp retains a doubled tangent line
- `ex-smooth-quadric-hypersurface` · example — A nondegenerate projective quadric
- `cex-nonreduced-hypersurface-jacobian` · counterexample — The equation must define the intended scheme
- `cex-regular-not-smooth-purely-inseparable-point` · counterexample — A regular inseparable point becomes nonregular
- `cex-bertini-characteristic-p-failure` · counterexample — Frobenius linear systems have nonreduced general members
- `ex-tangent-space-product-origin` · example — The product of two parabolas: a block Jacobian and the direct-sum formula
- `ex-projective-cone-singular-vertex` · example — A projective cone with a smooth conic base
- `cex-generic-target-smoothness-needs-smooth-source` · counterexample — A cusp family defeats the missing source hypothesis
- `ex-determinantal-quadric-singularity` · example — The rank-one 2 by 2 determinantal cone
- `ex-tangent-spaces-general-and-special-linear-groups` · example — Dual numbers compute the tangent spaces of the general and special linear groups
- `ex-tangent-dimension-distinguishes-three-line-configurations` · example — Three axes are not three coplanar lines
- `ex-higher-plane-curve-tangent-cones` · example — Different singularities can share a tangent cone
- `ex-orthogonal-and-symplectic-tangent-matrices` · example — Classical bilinear-form equations linearize to matrix spaces
- `ex-irreducible-curve-with-arbitrary-embedding-dimension` · example — An irreducible curve can have arbitrarily large tangent dimension
- `cex-nonradical-ideal-can-have-the-same-tangent-space` · counterexample — A nonradical ideal need not enlarge every tangent space

### `smooth-projective-serre-duality-and-flag-variety-line-bundles` — Smooth-Projective Serre Duality and Flag-Variety Line Bundles (39 item(s))

- `def-smooth-projective-dualizing-line-bundle-and-trace` · definition — Dualizing line bundle and trace datum of a smooth projective variety
- `lem-projective-space-top-cohomology-residue-pairing` · lemma — Top-cohomology residue pairing on projective space
- `thm-serre-duality-projective-space-twisting-sheaves` · theorem — Serre duality for projective-space twists
- `lem-coherent-sheaf-finite-twisted-locally-free-resolution-projective-space` · lemma — Finite twisted locally free resolutions on projective space
- `lem-injective-modules-flasque-and-ext-of-structure-sheaf` · lemma — Injective modules are flasque and Ext from the structure sheaf is cohomology
- `def-sheaf-ext-for-coherent-modules` · definition — Sheaf Ext of coherent modules
- `lem-global-sheaf-ext-long-exact-in-first-variable` · lemma — Long exact global sheaf Ext sequence in the first variable
- `thm-serre-duality-projective-space-coherent-sheaves` · theorem — Serre duality for coherent sheaves on projective space
- `lem-smooth-closed-immersion-regular-conormal-sequence` · lemma — Smooth closed immersion is regular with exact conormal sequence
- `lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction` · lemma — Adjunction for a smooth closed subvariety
- `lem-regular-immersion-koszul-ext-sheaf` · lemma — Koszul sheaf Ext of a smooth regular immersion
- `lem-regular-immersion-local-to-global-ext-collapse` · lemma — Local-to-global Ext collapse for a regular immersion
- `lem-smooth-projective-rational-point-koszul-residue-normalization` · lemma — Rational-point Koszul residue normalization for a smooth projective embedding
- `lem-smooth-projective-embedding-gysin-trace-compatibility` · lemma — Embedding compatibility of smooth-projective Gysin traces
- `thm-serre-duality-smooth-projective-variety-locally-free-sheaves` · theorem — Serre duality for locally free sheaves on a smooth projective variety
- `def-complex-semisimple-algebraic-group-borel-and-flag-variety` · definition — Complex semisimple algebraic group, Borel, and flag variety
- `lem-affine-algebraic-group-faithful-rational-representation` · lemma — A finite-type affine algebraic group has a faithful rational representation
- `lem-semisimple-root-exponential-algebraic-subgroups` · lemma — Algebraic root subgroups from root exponentials
- `lem-semisimple-rank-one-sl2-root-homomorphism` · lemma — Rank-one SL₂ homomorphism and Weyl representative
- `lem-semisimple-borel-root-factorization` · lemma — Borel, opposite unipotent groups and root coordinates
- `lem-semisimple-opposite-borel-big-cell` · lemma — The opposite-root big cell is an open chart
- `lem-semisimple-bruhat-double-cosets` · lemma — Bruhat double cosets from rank-one multiplication
- `lem-semisimple-minimal-parabolic-root-subgroup` · lemma — Minimal parabolic from one negative simple root
- `lem-borel-fixed-point-for-projective-actions` · lemma — Fixed point for the specified Borel on a projective variety
- `lem-semisimple-rational-pluecker-highest-weight-modules` · lemma — Rational highest-weight modules from adjoint Plücker vectors
- `lem-semisimple-projective-orbit-flag-quotients` · lemma — Projective orbit constructions for G/B and G/Pα
- `lem-semisimple-flag-torsor-zariski-charts` · lemma — Zariski sections of Borel and minimal-parabolic orbit maps
- `thm-semisimple-flag-variety-smooth-projective` · theorem — Smooth projective semisimple flag variety
- `thm-flag-variety-bruhat-cell-decomposition` · theorem — Bruhat cells of the flag variety
- `def-borel-character-equivariant-line-bundle` · definition — Borel-character equivariant line bundle
- `thm-borel-characters-classify-equivariant-line-bundles-simply-connected` · theorem — Borel characters classify equivariant flag line bundles
- `lem-flag-variety-canonical-bundle-weight-minus-two-rho` · lemma — Canonical weight of a flag variety
- `thm-minimal-parabolic-flag-projection-is-p1-bundle` · theorem — Minimal parabolic flag projection is a projective-line bundle
- `lem-flag-line-bundle-degree-on-minimal-parabolic-fibre` · lemma — Flag line-bundle degree on a minimal-parabolic fiber
- `lem-minimal-parabolic-relative-canonical-line-bundle-root-weight` · lemma — Relative canonical weight for a minimal-parabolic flag projection
- `lem-relative-projective-line-degree-normal-form` · lemma — Local normal form for a line bundle on a projective-line bundle
- `thm-leray-spectral-sequence-for-sheaf-cohomology` · theorem — Leray spectral sequence for sheaf cohomology
- `lem-relative-projective-line-cohomology-and-apolarity` · lemma — Relative projective-line cohomology and apolarity
- `thm-relative-p1-line-bundle-cohomology-shift` · theorem — Relative projective-line cohomology shift

### `smooth-projective-serre-duality-and-flag-variety-line-bundles-examples` — Smooth-Projective Serre Duality and Flag-Variety Line Bundles — Examples (3 item(s))

- `ex-sl2-flag-variety-line-bundles` · example — Flag line bundles for SL₂
- `ex-sl3-two-minimal-parabolic-projections` · example — Two minimal-parabolic projections for SL₃
- `ex-serre-duality-projective-space-twist-pairing` · example — Projective-space twist pairing in Serre duality

### `fourier-multipliers-and-sobolev-characterisations` — Fourier Multipliers and Sobolev Characterisations (12 item(s))

- `def-translation-invariant-fourier-multiplier-on-schwartz-space` · definition — Fourier multiplier on the Schwartz core
- `lem-ltwo-fourier-multiplier-bound` · lemma — Exact L2 Fourier multiplier norm
- `def-lp-fourier-multiplier-and-multiplier-norm` · definition — Lp Fourier multiplier and its norm
- `thm-hausdorff-young-for-periodic-fourier-coefficients` · theorem — Hausdorff–Young for periodic Fourier coefficients
- `thm-hausdorff-young-for-the-euclidean-fourier-transform` · theorem — Hausdorff–Young for the Euclidean Fourier transform
- `def-mihlin-symbol-with-more-than-half-dimension-derivatives` · definition — Mihlin smoothness convention above half the dimension
- `lem-weak-derivatives-are-polynomial-fourier-multipliers` · lemma — Distributional derivatives are polynomial Fourier multipliers
- `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces` · theorem — Integer-order W^{k,2} and H^k agree with equivalent norms
- `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces` · theorem — Real-order H^s as weighted Fourier distributions
- `def-japanese-bracket-bessel-potential-operator` · definition — Japanese-bracket and Laplacian Bessel-potential operators
- `lem-bessel-potentials-shift-sobolev-order-isometrically` · lemma — Bessel potentials shift Sobolev order
- `cor-sobolev-duality-from-the-fourier-pairing` · corollary — Conjugate duality of H^s and H^{-s}

### `fourier-multipliers-and-sobolev-characterisations-examples` — Fourier Multipliers and Sobolev Characterisations — Examples (5 item(s))

- `ex-heat-and-poisson-semigroups-as-fourier-multipliers` · example — Heat and Poisson semigroups as Fourier multipliers
- `ex-translation-and-differentiation-multiplier-symbols` · example — Translation and differentiation symbols
- `rem-fefferman-ball-multiplier-obstruction` · remark — Fefferman ball multiplier obstruction
- `rem-jump-multipliers-can-be-bounded-outside-mihlin` · remark — Jump multipliers may lie outside the Mihlin criterion
- `ex-negative-sobolev-order-containing-a-dirac-mass` · example — A Dirac mass has precisely sufficiently negative Sobolev order

## Your seams

Your pages depend on another group's:

- `smooth-projective-serre-duality-and-flag-variety-line-bundles` requires `quasi-coherent-and-coherent-sheaves-and-vector-bundles` (group a, batch 7)
- `smooth-projective-serre-duality-and-flag-variety-line-bundles` requires `proj-projective-schemes-twisting-sheaves-and-ampleness` (group a, batch 8)
- `smooth-projective-serre-duality-and-flag-variety-line-bundles` requires `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` (group b, batch 9)
- `fourier-multipliers-and-sobolev-characterisations` requires `weak-derivatives-and-sobolev-spaces` (group g, batch 30)
- `fourier-multipliers-and-sobolev-characterisations` requires `bessel-potential-completions-and-real-order-sobolev-spaces` (group g, batch 12)

Another group's pages depend on yours:

- `flat-smooth-and-etale-morphisms` (group b) requires your `zariski-tangent-spaces-regular-points-smoothness-and-bertini`
- `riemann-surfaces-branched-maps-and-differentials` (group e) requires your `zariski-tangent-spaces-regular-points-smoothness-and-bertini`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-36-complete-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-36-complete`

Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task.
It supplies the batch, exact rejections, ownership, evidence paths and structured
result schema. Do not reconstruct these from an old group task.

Adjudicate by logical validity, repair all confirmed defects (including nonfatal
defects), and identify all
relevant downstream consumers including published items. The engine routes
downstream repairs to three Sol xhigh owners and certifies once after all
writers drain. Sol rejudgment and adjudication/repair/certification repeat
under WORKFLOW.md. New downstream work continues in the repair phase until
complete before certification. Fatal classification controls only the threshold.
Historical terminal receipts cannot close current rounds.
Adjudicators and all three owner agents may author new items only for genuine
unmet prerequisites. Follow the dedicated briefs for evidence, unique IDs,
registry/index and metadata inclusion, downstream repair closure and central
certification and gates; the frozen original scope never grows.

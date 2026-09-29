# Step 7 adjudication — group **b**, run `frontier-36-complete`

You are the group Alpha for batches **6**, **9**, **24**: 3 A/B pair(s), 6 page(s), 168 item(s), 0 open rejection(s) over 0 item(s).

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
| 6 | `flat-smooth-and-etale-morphisms` | A | scheme-theory | 366.073 | `finite-proper-and-projective-morphisms`, `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`, `zariski-tangent-spaces-regular-points-smoothness-and-bertini`, `homogeneous-resultants-and-projective-intersection-length` |
| 6 | `flat-smooth-and-etale-morphisms-examples` | B | scheme-theory | 366.074 | `flat-smooth-and-etale-morphisms` |
| 9 | `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` | A | scheme-theory | 366.083 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `sheaf-cohomology-cech-cohomology-and-comparison`, `rees-modules-artin-rees-and-hilbert-samuel-theory`, `projective-and-injective-resolutions`, `derived-functors`, `banach-alaoglu-goldstine-and-krein-milman`, `combinatorial-classes-and-the-symbolic-method`, `homogeneous-resultants-and-projective-intersection-length` |
| 9 | `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-examples` | B | scheme-theory | 366.084 | `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` |
| 24 | `braids-as-fundamental-groups-of-configuration-spaces` | A | braid-groups | 733 | `geometric-braids-and-artin-generators`, `ordered-and-unordered-configuration-spaces`, `the-fundamental-group` |
| 24 | `braids-as-fundamental-groups-of-configuration-spaces-examples` | B | braid-groups | 734 | `braids-as-fundamental-groups-of-configuration-spaces`, `complex-differentiability-and-cauchy-riemann` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `flat-smooth-and-etale-morphisms` — Flat Smooth and Etale Morphisms (77 item(s))

- `def-constructible-subset-scheme` · definition — Constructible subsets of a scheme
- `def-flat-morphism-schemes` · definition — Flat morphism of schemes
- `lem-flatness-affine-local-source-target` · lemma — Affine-local flatness
- `lem-flat-morphisms-stable-base-change` · lemma — Flatness under base change
- `lem-flat-morphisms-stable-composition` · lemma — Flatness under composition
- `def-faithfully-flat-morphism-schemes` · definition — Faithfully flat scheme morphism
- `lem-flat-local-map-faithfully-flat` · lemma — A flat local map is faithfully flat
- `thm-faithfully-flat-descent-vanishing` · theorem — Vanishing descends along an fpqc morphism
- `lem-generic-freeness-finite-type-algebra-module` · lemma — Generic freeness over a Noetherian domain
- `thm-generic-flatness-morphisms` · theorem — Generic flatness for finite-type morphisms
- `lem-finite-presentation-image-constructible` · lemma — Constructible images for finite-presentation affine maps
- `lem-constructible-stable-generalisation-open` · lemma — Constructible subsets stable under generalisation are open in an affine spectrum
- `def-open-morphism-schemes` · definition — Open and universally open morphisms of schemes
- `thm-flat-finite-presentation-is-open` · theorem — Flat finite-presentation morphisms are open
- `lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness` · lemma — Local fibre-dimension bound from polynomial quasi-finiteness
- `lem-fibre-dimension-upper-semicont-proper` · lemma — Upper semicontinuity of proper fibre dimension
- `def-smooth-morphism-schemes` · definition — Smooth morphism of schemes
- `def-relative-dimension-smooth-morphism` · definition — Relative dimension for a smooth morphism
- `thm-smooth-morphisms-stable-base-change-composition` · theorem — Smoothness survives base change and composition
- `thm-smooth-morphism-formally-smooth-finite-presentation` · theorem — Smoothness and formal smoothness
- `thm-jacobian-criterion-smooth-morphism` · theorem — Relative Jacobian criterion with its presentation hypothesis
- `thm-differentials-smooth-locally-free` · theorem — Differentials of a smooth morphism
- `lem-smooth-fibres-smooth` · lemma — Fibres of a smooth morphism are smooth
- `def-etale-morphism-schemes` · definition — Étale morphism of schemes
- `def-elementary-etale-neighbourhood` · definition — Etale neighbourhoods and elementary etale neighbourhoods of a point
- `thm-smooth-local-standard-form` · theorem — Smooth maps have étale local affine-space form
- `thm-etale-equivalent-flat-unramified-fp` · theorem — Étale equals flat and unramified in finite presentation
- `thm-etale-formally-etale-finite-presentation` · theorem — Étale and formal étaleness
- `lem-etale-stable-base-change-composition` · lemma — Étale stability
- `thm-etale-morphisms-open-and-quasi-finite` · theorem — Étale maps are open and locally quasi-finite
- `def-standard-etale-algebra` · definition — Standard étale algebra
- `thm-etale-locally-standard-etale` · theorem — Every étale morphism has standard étale charts
- `thm-etale-over-algebraically-closed-field-discrete-smooth-points` · theorem — Finite étale schemes over an algebraically closed field
- `def-smooth-locus-morphism` · definition — Smooth locus of a morphism
- `thm-smooth-locus-open` · theorem — The smooth locus is open
- `def-etale-locus-morphism` · definition — Étale locus of a morphism
- `thm-etale-locus-open` · theorem — The étale locus is open
- `cor-smooth-variety-classical-scheme-conventions-agree` · corollary — Classical and scheme smoothness over a perfect field
- `lem-fibre-injective-map-flat-cokernel-noetherian-target` · lemma — Fibrewise injectivity lifts and leaves a flat cokernel over a Noetherian target
- `lem-free-fibre-flat-module-free-noetherian-target` · lemma — A finite module with free fibre and flat base is free over a Noetherian target
- `lem-flat-locus-open-finitely-presented-algebra` · lemma — The flat locus of a finitely presented algebra is open
- `lem-noetherian-local-flatness-criterion-finite-over-target` · lemma — Local flatness criterion for a module finite over a larger Noetherian local algebra
- `lem-noetherian-approximation-fp-algebra-module-system` · lemma — Finite presentation data descend to Noetherian algebra and module stages
- `lem-noetherian-local-flatness-tor-killing-base-change` · lemma — A killed first Tor obstruction yields flatness after local Noetherian base change
- `lem-eventual-flatness-noetherian-local-approximation` · lemma — Flatness over a local filtered colimit appears at a Noetherian stage
- `lem-noetherian-flatness-by-fibres-finite-target-module` · lemma — Noetherian fibrewise flatness for a module finite over the target
- `lem-flatness-by-fibres-for-polynomial-chart` · lemma — Flatness over a polynomial chart from base and fibre flatness
- `lem-flat-fp-relative-dimension-strata` · lemma — Dense relative-dimension strata in flat finitely presented fibres
- `lem-flat-fp-fibre-dimension-lower-semicont` · lemma — Lower semicontinuity of flat finitely presented fibre dimension
- `thm-flat-families-fibre-dimension-locally-constant` · theorem — Fibre dimension of proper flat finitely presented families
- `rem-flatness-is-not-constant-fibre-isomorphism` · remark — Flatness does not identify fibres
- `lem-coprime-polynomial-factorization-lifts-etale-locally` · lemma — Coprime fibre factorizations lift after an elementary étale base change
- `lem-etale-neighbourhood-isolated-fibre-point-finite` · lemma — Finite neighbourhood of an isolated fibre point after elementary étale change
- `lem-elementary-etale-neighbourhood-finite-decomposition` · lemma — Elementary étale finite-component decomposition
- `lem-qcqs-structure-pushforward-affine-local` · lemma — Quasi-compact quasi-separated structure pushforward is affine-local
- `lem-integral-closure-commutes-etale-base-change` · lemma — Integral closure commutes with étale base change
- `lem-integral-quasicoherent-algebra-finite-subalgebra-filtration` · lemma — Integral quasi-coherent algebras over qcqs bases are unions of finite subalgebras
- `lem-etale-radicial-morphism-open-immersion` · lemma — An étale universally injective morphism is an open immersion
- `lem-relative-normalization-finite-stage` · lemma — Relative normalization and finite-stage descent for quasi-finite maps
- `lem-scheme-zariski-main-factorization-quasi-finite` · lemma — Scheme Zariski Main factorization
- `thm-proper-quasi-finite-is-finite` · theorem — Proper quasi-finite morphisms are finite
- `lem-fibrewise-exact-flat-complex-lifts-noetherian-target` · lemma — Fibrewise exact finite flat complexes lift over a Noetherian target
- `lem-cm-equidimensional-fibre-dimension-bound-regular-sequence` · lemma — A sharp dimension bound makes equations regular on an equidimensional Cohen-Macaulay fibre
- `lem-cm-local-regular-sequence-dimension-drop` · lemma — A regular sequence lowers dimension exactly in a Cohen-Macaulay local ring
- `lem-affine-local-dimension-residue-transcendence` · lemma — Local fibre dimension equals local ring dimension plus residue transcendence degree
- `lem-fibre-regular-sequence-locus-open-cm-equidimensional` · lemma — Fibrewise regular sequences persist openly in equidimensional Cohen-Macaulay fibres
- `lem-depth-acyclicity-highest-homology` · lemma — The highest positive homology of a depth-bounded finite complex has positive depth
- `lem-exact-free-complex-reduction-nonzerodivisor` · lemma — Reduction of an exact free complex by a nonzerodivisor stays exact above degree one
- `lem-free-complex-unit-entry-splits-contractible-pair` · lemma — A unit differential entry splits a contractible two-term summand
- `lem-depth-zero-exact-free-complex-splits` · lemma — Positive-degree exact free complexes split over a depth-zero local ring
- `lem-ring-detected-at-associated-prime-localizations` · lemma — Associated-prime localizations detect elements and have depth zero
- `lem-determinantal-grade-necessary-exact-free-complex` · lemma — Exact free complexes have the expected ranks and determinantal regular sequences
- `lem-determinantal-grade-sufficient-exact-free-complex` · lemma — Expected ranks and determinantal regular sequences force a free complex to be exact
- `thm-determinantal-grade-criterion-free-complex-exactness` · theorem — Buchsbaum-Eisenbud rank and grade criterion for exact free complexes
- `lem-fibrewise-exact-free-complex-locus-open-cm-flat-family` · lemma — Fibrewise exactness of a finite free complex is open in a flat Cohen-Macaulay family
- `lem-base-flat-syzygies-and-fibrewise-resolution-exactness` · lemma — Syzygies of a base-flat module over a flat algebra stay base-flat and fibrewise exact
- `ex-localization-etale-open-immersion` · example — Open immersions are étale

### `flat-smooth-and-etale-morphisms-examples` — Flat Smooth and Etale Morphisms — Examples (9 item(s))

- `ex-polynomial-ring-flat-smooth` · example — Affine space is smooth
- `ex-standard-etale-square-root` · example — Square-root standard étale chart
- `cex-flat-not-smooth-nodal-family` · counterexample — Flat nodal family fails smoothness
- `cex-smooth-not-etale-affine-line` · counterexample — The affine line is smooth but not étale
- `cex-unramified-not-flat-closed-immersion` · counterexample — A closed immersion can be unramified without flatness
- `cex-flat-finite-type-not-open-without-presentation-warning` · counterexample — Flat finite type need not be open without finite presentation
- `ex-finite-etale-separable-extension` · example — Finite field extensions and étaleness
- `cex-frobenius-not-smooth` · counterexample — Frobenius on the affine line is finite flat but not smooth
- `ex-family-xy-equals-t-flat-not-smooth-at-node` · example — The family xy=t

### `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` — Cohomology of Quasi Coherent Sheaves on Affine and Projective Schemes (56 item(s))

- `lem-ringed-space-module-sheaves-enough-injectives` · lemma — Enough injective sheaves of modules
- `def-higher-direct-image-sheaf` · definition — Higher direct image of a sheaf
- `lem-higher-direct-image-local-section-formula` · lemma — Local-section formula for derived direct image
- `lem-affine-qc-cech-unit-ideal-exact` · lemma — Exact principal-open Čech resolution
- `thm-qc-sheaf-affine-higher-cohomology-vanishes` · theorem — Affine acyclicity of quasi-coherent sheaves
- `lem-principal-open-cover-qc-acyclic-intersections` · lemma — Acyclic intersections of principal affine opens
- `thm-cech-computes-qc-cohomology-separated-scheme-affine-cover` · theorem — Finite affine Čech computation on a separated scheme
- `thm-affine-morphism-higher-direct-images-qc-vanish` · theorem — Affine morphisms have no higher direct images of quasi-coherent modules
- `lem-affine-morphism-cohomology-pushforward` · lemma — Cohomology of an affine morphism and its pushforward
- `lem-closed-immersion-cohomology-pushforward` · lemma — Closed immersion preserves cohomology and coherent pushforward
- `def-twist-quasi-coherent-sheaf-projective` · definition — Twist of a quasi-coherent sheaf
- `lem-projective-space-cech-monomial-complex` · lemma — Laurent-monomial decomposition of the projective Čech complex
- `thm-cohomology-projective-space-twisting-sheaves` · theorem — Cohomology of O(d) on projective space
- `cor-h0-projective-space-o-d-homogeneous-polynomials` · corollary — Global sections of projective twists
- `cor-intermediate-cohomology-o-d-projective-space-vanishes` · corollary — Intermediate cohomology of projective twists vanishes
- `cor-top-cohomology-projective-space-o-d` · corollary — Top cohomology of projective twists
- `thm-cohomological-dimension-projective-n-space` · theorem — Projective n-space has quasi-coherent cohomological dimension at most n
- `thm-cohomological-dimension-noetherian-scheme` · theorem — Dimension bound for quasi-coherent cohomology on a Noetherian scheme
- `lem-eventual-global-generation-coherent-twists` · lemma — Eventual generation of coherent projective twists
- `lem-projective-coherent-cohomology-finite-and-vanishing` · lemma — Projective coherent finiteness and large twist vanishing
- `thm-serre-vanishing` · theorem — Serre vanishing for coherent sheaves and ample twists
- `lem-higher-direct-image-affine-localization` · lemma — Higher direct images localize over an affine base
- `lem-affine-open-containing-component-generics` · lemma — Affine neighbourhood containing component generic points
- `lem-schematic-closure-and-dense-agreement` · lemma — Schematic closure and agreement on a dense open
- `lem-relative-projective-space-universally-closed` · lemma — Projective-space projection is universally closed by finite graded pieces
- `lem-affine-finite-type-source-immerses-in-relative-projective-space` · lemma — Affine finite-type source immerses into relative projective space
- `lem-chow-lemma-proper-noetherian` · lemma — Chow lemma for proper Noetherian schemes
- `lem-coherent-devissage-one-generic-generator` · lemma — Noetherian dévissage for coherent proper pushforward
- `thm-proper-pushforward-coherent` · theorem — Coherent higher direct images under proper morphisms
- `thm-serre-finiteness-projective-cohomology` · theorem — Finite coherent cohomology for proper schemes
- `cor-projective-cohomology-finite-dimensional-field` · corollary — Finite-dimensional coherent cohomology over a field
- `def-euler-characteristic-coherent-sheaf` · definition — Euler characteristic of a coherent sheaf
- `lem-euler-characteristic-additive-short-exact` · lemma — Euler characteristic is additive
- `def-hilbert-function-sheaf-projective` · definition — Hilbert function and Euler characteristic on a projective scheme
- `lem-graded-section-module-finite-projective` · lemma — High-degree section module is finite graded
- `lem-proper-cohomology-field-extension` · lemma — Flat field extension commutes with coherent cohomology
- `lem-support-dimension-preserved-field-extension` · lemma — Support dimension under field extension
- `lem-serre-vanishing-induction-hyperplane` · lemma — Regular hyperplane step for coherent support induction
- `thm-hilbert-polynomial-coherent-sheaf` · theorem — Euler characteristic is a Hilbert polynomial
- `thm-hilbert-polynomial-degree-support-dimension` · theorem — Degree of the coherent Hilbert polynomial
- `lem-flat-sheaf-sections-flat-over-base` · lemma — Sections of a sheaf flat over the base are flat over affine opens
- `lem-proper-flat-cohomology-perfect-complex` · lemma — Finite projective complex for proper flat coherent cohomology
- `lem-filtered-colimit-fp-scheme-stage` · lemma — Finite-stage descent of finitely presented schemes and their morphisms
- `lem-filtered-colimit-fp-sheaf-stage` · lemma — Finite-stage descent of finitely presented quasi-coherent sheaves
- `lem-filtered-colimit-flat-fp-sheaf-stage` · lemma — Finite-stage descent of relative flatness for a finitely presented sheaf
- `lem-filtered-colimit-proper-fp-stage` · lemma — Finite-stage descent of properness for finitely presented schemes
- `lem-noetherian-approximation-proper-fp-flat-sheaf` · lemma — Noetherian approximation of proper flat finitely presented sheaf data
- `lem-proper-flat-fp-cohomology-perfect-complex` · lemma — Universal finite projective cohomology complex over any base
- `def-base-change-map-cohomology` · definition — Cohomology and base-change map
- `lem-cohomology-base-change-finite-free-criterion` · lemma — Finite-free local criterion for base change
- `thm-cohomology-and-base-change` · theorem — Cohomology and base change for proper flat coherent families
- `cor-upper-semicontinuity-cohomology-dimension` · corollary — Upper semicontinuity of fibre cohomology
- `cor-euler-characteristic-locally-constant-flat-proper-family` · corollary — Euler characteristic in a proper flat family is locally constant
- `lem-projective-hypersurface-cohomology-sequence` · lemma — Hypersurface cohomology sequence
- `cor-connected-projective-variety-h0-o` · corollary — Global functions on geometrically connected reduced proper schemes
- `rem-proper-cohomology-finiteness-needs-coherence` · remark — Coherence is essential for proper finiteness

### `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-examples` — Cohomology of Quasi Coherent Sheaves on Affine and Projective Schemes — Examples (12 item(s))

- `ex-cohomology-o-d-projective-line-all-d` · example — All twists on the projective line
- `ex-cech-cocycle-projective-line-o-minus-two` · example — Generator cocycle for H1 of O(-2)
- `ex-hypersurface-structure-sheaf-cohomology` · example — Plane cubic structure-sheaf cohomology
- `ex-hilbert-polynomial-projective-space` · example — Hilbert polynomial of projective space
- `cex-h0-not-euler-characteristic-before-serre-vanishing` · counterexample — h0 differs from Euler characteristic before vanishing
- `cex-affine-vanishing-fails-non-qc-sheaf` · counterexample — A non-quasi-coherent module with H1 on an affine scheme
- `cex-proper-finiteness-fails-noncoherent` · counterexample — Proper cohomology need not be finite for noncoherent sheaves
- `ex-upper-semicontinuity-jumping-h0` · example — An upper jump of h0 in a flat projective family
- `ex-flat-family-constant-euler-variable-h0-h1` · example — Compensating h0 and h1 jumps with constant Euler characteristic
- `ex-projective-zero-space-cohomology` · example — Projective zero-space over an affine base
- `cex-fixed-affine-cover-nonseparated-intersections` · counterexample — A nonseparated affine cover can have nonaffine intersection
- `rem-base-change-is-not-automatic` · remark — Base change requires its actual map and hypotheses

### `braids-as-fundamental-groups-of-configuration-spaces` — Braids as Fundamental Groups of Configuration Spaces (10 item(s))

- `def-motion-of-an-unordered-point-configuration` · definition — Based motions of an unordered point configuration
- `lem-a-configuration-loop-traces-a-geometric-braid` · lemma — An interior configuration loop traces a geometric braid
- `lem-path-homotopy-traces-braid-isotopy` · lemma — A based configuration-loop homotopy traces a braid isotopy
- `lem-a-geometric-braid-slices-to-a-configuration-loop` · lemma — A geometric braid slices to an interior configuration loop
- `lem-slicing-and-tracing-are-mutually-inverse-on-classes` · lemma — Tracing and slicing are inverse on relative classes
- `lem-stacking-corresponds-to-loop-concatenation` · lemma — Raw slicing reverses geometric stacking products
- `thm-geometric-braids-are-the-fundamental-group-of-unordered-configurations` · theorem — Geometric braid classes and the unordered configuration fundamental group
- `cor-pure-geometric-braids-are-the-fundamental-group-of-ordered-configurations` · corollary — Pure geometric braids and ordered configuration loops
- `prop-geometric-endpoint-permutation-equals-covering-monodromy` · proposition — The geometric endpoint permutation matches covering monodromy
- `thm-geometric-and-configuration-braid-models-are-canonically-isomorphic` · theorem — The geometric and configuration braid models agree at the fixed base configuration

### `braids-as-fundamental-groups-of-configuration-spaces-examples` — Braids as Fundamental Groups of Configuration Spaces — Examples (4 item(s))

- `ex-a-half-twist-loop-traces-the-standard-generator` · example — A half-circle configuration loop traces an elementary half twist
- `ex-a-pure-full-twist-as-an-ordered-configuration-loop` · example — A pure two-strand full twist as an ordered loop
- `cex-forgetting-labels-can-close-a-nonlooping-coordinate-path` · counterexample — An exchange closes only after forgetting labels
- `cex-a-crossing-diagram-without-height-monotonicity-does-not-define-a-configuration-loop` · counterexample — An embedded height-folded arc has no configuration-loop slices

## Your seams

Your pages depend on another group's:

- `flat-smooth-and-etale-morphisms` requires `finite-proper-and-projective-morphisms` (group a, batch 5)
- `flat-smooth-and-etale-morphisms` requires `zariski-tangent-spaces-regular-points-smoothness-and-bertini` (group c, batch 4)
- `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` requires `quasi-coherent-and-coherent-sheaves-and-vector-bundles` (group a, batch 7)
- `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` requires `proj-projective-schemes-twisting-sheaves-and-ampleness` (group a, batch 8)

Another group's pages depend on yours:

- `quasi-coherent-and-coherent-sheaves-and-vector-bundles` (group a) requires your `flat-smooth-and-etale-morphisms`
- `smooth-projective-serre-duality-and-flag-variety-line-bundles` (group c) requires your `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`

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

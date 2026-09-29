# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-36-complete-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators and all three owner repair agents may fully author new items only
for genuine unmet prerequisites of assigned repairs. Use unique IDs and register
each addition in the canonical registry/index, page, applicable manifest and
contract. Resolve dependency and downstream effects before central certification
and the complete gate battery. Otherwise report the issue without changing it.
Current Step-7 dispatches also follow
`step7-adjudicator.md` or `step7-owner-repair.md`; their tasks authorize assigned
published downstream repairs across the whole library.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 task ownership rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Logical validity is the ground truth; authoritative sources and judges can err.
State uncertainty honestly and consult primary sources when unsure.
Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. Current Step-7 adjudication repairs every confirmed defect,
including `confirmed_nonfatal`; `confirmed_fatal` additionally enters the fatal
threshold count. A `false_positive` requires evidence without unnecessary edits.
The task controls repair ownership, fresh downstream continuation and any
required rejudge; never initiate a cycle independently.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-36-complete
role: alpha-group-read
label: b
covers: b

# Step 6 whole-group reading — group **b**, run `frontier-36-complete`

You are the group Alpha for batches **6**, **9**, **24**: 3 A/B pair(s), 6 page(s), 168 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

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

---

# Step 6 — group reading digest, `frontier-36-complete`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

The reply is parsed as JSON, so every backslash inside a string is an escape:
write a LaTeX command as a doubled backslash (`\\perp`, `\\omega`), never as
`\perp`. An invalid escape invalidates the whole digest. When a symbol is
available in plain text or Unicode (⊥, ω, ≤, ∈), prefer it over TeX.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.

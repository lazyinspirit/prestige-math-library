# Step 6 whole-group reading — group **a**, run `frontier-36-complete`

You are the group Alpha for batches **5**, **7**, **8**: 3 A/B pair(s), 6 page(s), 156 item(s).

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
| 5 | `finite-proper-and-projective-morphisms` | A | scheme-theory | 366.069 | `diagonals-separated-morphisms-and-valuative-uniqueness`, `algebraic-zariski-main-for-quasi-finite-morphisms`, `homogeneous-resultants-and-projective-intersection-length`, `regular-local-rings-and-homological-dimension` |
| 5 | `finite-proper-and-projective-morphisms-examples` | B | scheme-theory | 366.07 | `finite-proper-and-projective-morphisms` |
| 7 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles` | A | scheme-theory | 366.075 | `sheaf-operations-exactness-ringed-spaces-and-module-pullback`, `affine-schemes-and-the-structure-sheaf`, `schemes-subschemes-and-morphisms-locally-of-finite-type`, `fibre-products-base-change-and-scheme-theoretic-fibres`, `flat-smooth-and-etale-morphisms`, `noetherian-rings-and-hilbert-basis`, `localisation-of-modules-and-support`, `finite-proper-and-projective-morphisms` |
| 7 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles-examples` | B | scheme-theory | 366.076 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles` |
| 8 | `proj-projective-schemes-twisting-sheaves-and-ampleness` | A | scheme-theory | 366.077 | `fibre-products-base-change-and-scheme-theoretic-fibres`, `finite-proper-and-projective-morphisms`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `rees-modules-artin-rees-and-hilbert-samuel-theory` |
| 8 | `proj-projective-schemes-twisting-sheaves-and-ampleness-examples` | B | scheme-theory | 366.078 | `proj-projective-schemes-twisting-sheaves-and-ampleness` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-proper-and-projective-morphisms` — Finite Proper and Projective Morphisms (49 item(s))

- `def-affine-local-quasi-coherent-algebra` · definition — Affine-local quasi-coherent algebras before general sheaf theory
- `lem-affine-morphism-structure-sheaf-pushforward-localizes` · lemma — Affine pushforward algebra localizes
- `lem-relative-spec-glues-affine-algebras` · lemma — Glue relative spectra of affine-local algebras
- `thm-affine-morphism-relative-spec-characterization` · theorem — Affine morphisms are relative spectra
- `def-finite-morphism-schemes` · definition — Finite morphisms of schemes
- `lem-finite-morphism-affine` · lemma — Finite is affine and local on its target
- `lem-finite-stable-base-change-composition` · lemma — Finite morphisms survive base change and composition
- `thm-finite-morphism-integral-closed` · theorem — Finite morphisms are universally closed
- `def-universally-closed-morphism` · definition — Universally closed morphisms
- `def-proper-morphism` · definition — Proper morphisms
- `lem-closed-immersion-affine-quotient-and-base-change` · lemma — Closed immersions are affine quotients and survive base change
- `cor-finite-morphism-proper` · corollary — Finite morphisms are proper
- `lem-proper-stable-base-change` · lemma — Properness survives arbitrary base change
- `lem-proper-stable-composition` · lemma — Properness survives composition
- `lem-proper-local-on-base` · lemma — Properness is local on the target
- `thm-proper-morphism-closed-image` · theorem — Proper maps have closed images
- `lem-closed-immersion-proper` · lemma — Closed immersions are proper
- `lem-proper-source-to-separated-target-proper` · lemma — A map from a proper source to a separated target is proper
- `lem-quasi-compact-scheme-image-specialization-closed` · lemma — A quasi-compact image stable under specialization is closed
- `lem-universally-closed-valuative-existence-quasicompact` · lemma — Valuation lifts detect universal closedness
- `thm-valuative-criterion-properness` · theorem — Valuative criterion for properness
- `def-complete-variety` · definition — Complete varieties
- `lem-integral-finite-type-scheme-function-field` · lemma — Function field of an integral finite-type scheme
- `def-algebraically-independent-finite-tuples-over-a-field` · definition — Algebraic independence in a field extension
- `lem-relative-algebraic-constants-fg-field-finite` · lemma — A finite-type field has finite relative algebraic constants
- `thm-global-functions-proper-integral-variety` · theorem — Regular functions on proper integral varieties are constants
- `cor-no-nonconstant-map-proper-variety-to-affine-line` · corollary — Proper integral varieties have constant affine-line maps
- `def-projective-morphism-pre-proj` · definition — Projective morphisms before Proj
- `def-quasi-projective-morphism` · definition — Quasi-projective morphisms before Proj
- `thm-projective-space-proper-over-base` · theorem — Finite-dimensional projective space is proper over every base
- `thm-projective-morphism-proper` · theorem — Projective morphisms are proper
- `def-quasi-finite-morphism-schemes` · definition — Quasi-finite morphisms of schemes
- `lem-quasi-finite-morphism-fibre-characterization` · lemma — Finite-fibre and pointwise characterizations of quasi-finiteness
- `cor-proper-birational-normal-curve-isomorphism-off-finite-set` · corollary — Proper birational normal curves agree off finitely many points
- `def-fpqc-morphism-schemes` · definition — Fpqc covering morphisms
- `lem-fpqc-cover-submersive` · lemma — Fpqc covers are universally submersive
- `lem-fpqc-descent-properness-components` · lemma — Fpqc descent of properness components
- `thm-properness-descent-fpqc` · theorem — Properness descends through fpqc base change
- `lem-proper-fibres-proper` · lemma — Fibres of proper morphisms are proper
- `lem-closed-gluing-of-two-projective-three-spaces-is-proper` · lemma — Closed gluing of two projective three-spaces is proper
- `lem-line-bundles-on-projective-three-space-restrict-by-degree` · lemma — Line bundles on projective three-space and their restrictions
- `lem-uniqueness-of-twists-on-the-projective-line` · lemma — The twist index on the projective line is an isomorphism invariant
- `rem-projective-versus-proper` · remark — Projective and proper are distinct notions
- `rem-proper-not-topologically-compact-over-arbitrary-field` · remark — Properness is not compactness of rational points
- `def-birational-morphism-schemes` · definition — Birational morphisms of integral finite-type schemes
- `lem-birational-morphism-principal-open-isomorphism` · lemma — Birational morphisms are isomorphisms over a principal open
- `lem-curve-closed-subsets-finite` · lemma — Proper closed subsets of a curve are finite
- `lem-projective-space-finite-type-over-base` · lemma — Projective space is of finite type over its base
- `lem-closed-immersion-pushout-schemes` · lemma — Pushouts of closed immersions exist

### `finite-proper-and-projective-morphisms-examples` — Finite Proper and Projective Morphisms — Examples (9 item(s))

- `ex-finite-power-map-affine-line` · example — Finite power map of the affine line
- `ex-closed-immersion-finite-proper` · example — Closed immersion from a quotient ring
- `ex-projective-space-valuative-extension` · example — Valuative extension of projective coordinates
- `cex-affine-line-not-proper` · counterexample — The affine line has a pole obstruction
- `cex-open-immersion-not-proper` · counterexample — A nonclosed open immersion is not proper
- `ex-proper-image-projective-variety` · example — Incidence projection has closed determinantal image
- `cex-proper-not-affine-positive-dimensional` · counterexample — Positive-dimensional proper integral schemes are not affine
- `cex-proper-not-necessarily-projective` · counterexample — A proper nonprojective scheme from glued projective spaces
- `ex-empty-morphism-proper-projective` · example — The empty morphism is finite, proper and projective

### `quasi-coherent-and-coherent-sheaves-and-vector-bundles` — Quasi Coherent and Coherent Sheaves and Vector Bundles (40 item(s))

- `def-associated-sheaf-module-affine-scheme` · definition — Module sheaf on an affine scheme
- `thm-associated-module-sheaf-exists` · theorem — Associated module sheaf exists
- `def-quasi-coherent-ideal-sheaf` · definition — Quasi-coherent ideal sheaves
- `lem-associated-sheaf-stalk-localization` · lemma — Stalk of an associated module sheaf
- `lem-associated-sheaf-sections-basic-open` · lemma — Sections of an associated sheaf on a basic open
- `lem-associated-sheaf-restriction-affine-open` · lemma — An associated sheaf restricts to an associated sheaf on any affine open
- `def-quasi-coherent-module-scheme` · definition — Quasi-coherent module on a scheme
- `lem-principal-affine-module-descent` · lemma — Descent of modules on a finite principal cover
- `thm-affine-quasi-coherent-equivalence` · theorem — Affine quasi-coherent sheaves are modules
- `cor-affine-qc-sheaf-determined-global-sections` · corollary — Affine quasi-coherent sheaf determined by sections
- `thm-quasi-coherence-check-affine-cover` · theorem — Checking quasi-coherence on an affine cover
- `thm-kernels-cokernels-qc-modules` · theorem — Kernels and cokernels of quasi-coherent modules
- `lem-tensor-qc-modules-quasi-coherent` · lemma — Tensor product preserves quasi-coherence
- `lem-pullback-qc-module-quasi-coherent` · lemma — Scheme pullback preserves quasi-coherence
- `thm-pushforward-qc-under-qcqs-morphism` · theorem — Quasi-coherence of pushforward for qcqs morphisms
- `def-finite-type-finite-presentation-module-sheaf` · definition — Finite type and finite presentation module sheaves
- `def-coherent-module-scheme` · definition — Coherent sheaf on a scheme
- `thm-coherent-sheaves-abelian-noetherian-scheme` · theorem — Coherent sheaves on a locally Noetherian scheme
- `def-internal-hom-qc-sheaves` · definition — Internal Hom of quasi-coherent sheaves
- `lem-internal-hom-fp-qc` · lemma — Internal Hom from a finitely presented sheaf is quasi-coherent
- `def-locally-free-sheaf-finite-rank` · definition — Finite locally free sheaf and rank
- `lem-dual-locally-free-and-base-change` · lemma — Dual and base change for finite locally free sheaves
- `def-symmetric-algebra-qc-module` · definition — Symmetric algebra of a quasi-coherent module
- `lem-symmetric-algebra-qc-and-base-change` · lemma — Symmetric algebras are quasi-coherent and commute with pullback
- `def-vector-bundle-scheme` · definition — Geometric vector bundle with the sections convention
- `thm-vector-bundles-locally-free-sheaves-equivalence` · theorem — Finite locally free sheaves and geometric vector bundles
- `def-invertible-sheaf` · definition — Invertible sheaf
- `lem-invertible-sheaf-dual-tensor-inverse` · lemma — Dual of a line bundle is its tensor inverse
- `def-support-module-sheaf` · definition — Support of a module sheaf
- `thm-support-finite-type-qc-closed` · theorem — Support of a finite-type quasi-coherent sheaf is closed
- `def-fibre-of-module-at-point` · definition — Fibre of a module sheaf at a point
- `lem-sheaf-nakayama-fibre-detects-generation` · lemma — Geometric Nakayama for finite-type sheaves
- `thm-locally-free-locus-finite-presentation-open` · theorem — Openness of the finite free locus
- `lem-fitting-ideals-presentation-independent` · lemma — Fitting minors do not depend on a presentation
- `def-fitting-ideal-sheaf` · definition — Fitting ideal sheaf
- `thm-fitting-ideals-control-rank-loci` · theorem — Fitting ideals control fibre generator loci
- `thm-qc-ideal-closed-subscheme-correspondence-complete` · theorem — Quasi-coherent ideals and closed subschemes, complete route
- `thm-quasi-coherent-ideal-closed-subscheme-correspondence` · theorem — Quasi-coherent ideals and closed subschemes
- `thm-scheme-theoretic-image-quasi-compact-morphism` · theorem — Scheme-theoretic image of a quasi-compact morphism
- `rem-coherent-needs-noetherian-or-coherent-ring-care` · remark — Finite type need not mean coherent

### `quasi-coherent-and-coherent-sheaves-and-vector-bundles-examples` — Quasi Coherent and Coherent Sheaves and Vector Bundles — Examples (10 item(s))

- `ex-associated-sheaf-quotient-module` · example — Quotient module sheaf and its support
- `ex-associated-sheaf-localized-module` · example — Restricting an associated sheaf to a localization
- `ex-skyscraper-coherent-closed-point` · example — A coherent closed-point skyscraper
- `ex-line-bundle-projective-line-transition` · example — Twists on the two-affine projective line
- `cex-qc-sheaf-global-sections-not-determine-nonaffine` · counterexample — Global sections do not determine a sheaf on P1
- `cex-pushforward-qc-needs-quasi-separated` · counterexample — Quasi-separatedness in pushforward cannot be omitted
- `cex-finite-type-module-not-locally-free` · counterexample — Finite type need not be locally free
- `ex-fitting-ideal-two-by-two-presentation` · example — Fitting ideals of a diagonal two-by-two presentation
- `ex-rank-zero-locally-free-sheaf` · example — The rank-zero bundle
- `cex-stalk-versus-fibre-module` · counterexample — Stalk and fibre are different

### `proj-projective-schemes-twisting-sheaves-and-ampleness` — Proj Projective Schemes Twisting Sheaves and Ampleness (38 item(s))

- `def-proj-graded-ring-points` · definition — Points of Proj of a graded ring
- `def-shifted-graded-module` · definition — Graded shift convention for Proj
- `def-standard-open-proj` · definition — Standard opens of Proj
- `lem-proj-prime-localization-correspondence` · lemma — Prime correspondence on a Proj chart
- `thm-proj-structure-sheaf-scheme` · theorem — Proj carries a scheme structure
- `lem-standard-opens-proj-affine` · lemma — Standard opens are affine
- `def-associated-sheaf-graded-module-proj` · definition — Associated sheaf of a graded module on Proj
- `def-very-ample-invertible-sheaf-relative` · definition — Relative very ampleness in the finite projective-space convention
- `def-ample-invertible-sheaf` · definition — Absolute ampleness by affine section opens
- `def-globally-generated-sheaf` · definition — Global generation by the evaluation map
- `lem-section-nonvanishing-affine-intersection` · lemma — A line-bundle section cuts an affine open inside an affine scheme
- `lem-proj-associated-sheaf-basic-sections` · lemma — Sections of a graded-module sheaf on a standard open
- `def-twisting-sheaf-proj` · definition — Twisting sheaf on Proj
- `thm-projective-space-as-proj` · theorem — Projective space is Proj of a polynomial ring
- `lem-relative-proj-affine-local-gluing` · lemma — Affine-local graded algebras glue their Proj charts
- `def-relatively-ample-invertible-sheaf` · definition — Relative ampleness over an arbitrary base
- `lem-extend-sections-from-nonvanishing-open` · lemma — Extend a quasi-coherent section after multiplying by a power
- `lem-ample-stable-positive-power` · lemma — Ampleness is invariant under positive powers
- `lem-ample-pullback-finite-morphism` · lemma — Finite pullback preserves absolute ampleness
- `lem-proj-irrelevant-and-nilpotent-boundaries` · lemma — Empty Proj and irrelevant torsion
- `thm-twisting-sheaf-invertible-standard-graded` · theorem — Invertible twists for degree-one generated rings
- `lem-proj-veronese-invariance` · lemma — Proj is invariant under Veronese regrading
- `lem-projective-space-saturation-local-criterion` · lemma — Saturation detected on projective charts
- `def-relative-proj-quasi-coherent-graded-algebra` · definition — Relative Proj of a graded quasi-coherent algebra
- `def-section-zero-scheme-invertible-sheaf` · definition — Zero scheme of a line-bundle section
- `lem-very-ample-implies-ample` · lemma — Relative very ampleness implies relative ampleness
- `thm-closed-subschemes-projective-space-homogeneous-ideals` · theorem — Closed subschemes of projective space and saturated ideals
- `thm-relative-proj-base-change` · theorem — Relative Proj commutes with arbitrary base change
- `thm-line-bundle-sections-define-projective-map` · theorem — Generating line-bundle sections define a projective morphism
- `rem-proj-does-not-recover-graded-ring-literally` · remark — Proj forgets irrelevant torsion and grading scale
- `thm-projective-map-line-bundle-data-equivalence` · theorem — Maps to projective space equal generating line-bundle data
- `lem-projective-morphism-relative-proj-presentation` · lemma — A projective morphism has a relative Proj presentation
- `thm-serre-criterion-ampleness` · theorem — Serre global-generation criterion for ampleness
- `thm-segre-line-bundle-external-tensor` · theorem — Segre embedding and its line bundle
- `thm-veronese-pullback-twist` · theorem — Veronese embedding pulls O(1) back to O(d)
- `def-projective-bundle-scheme` · definition — Projective bundle in the quotient convention
- `thm-ample-powers-very-ample-proper-base` · theorem — High powers of an ample line bundle embed a proper scheme
- `thm-projective-bundle-represents-line-quotients` · theorem — Projective bundle represents line quotients

### `proj-projective-schemes-twisting-sheaves-and-ampleness-examples` — Proj Projective Schemes Twisting Sheaves and Ampleness — Examples (10 item(s))

- `ex-proj-polynomial-ring-projective-space` · example — Polynomial Proj charts
- `ex-proj-empty-irrelevant-nilpotent` · example — A nilpotent irrelevant ideal gives empty Proj
- `ex-twisting-sheaf-projective-line-transitions` · example — Twist transitions on the projective line
- `ex-zero-section-empty-effective-divisor` · example — A nowhere-vanishing section has empty zero divisor
- `ex-proj-quotient-projective-hypersurface` · example — A projective hypersurface as a homogeneous quotient
- `cex-o-minus-one-no-global-generators` · counterexample — O(-1) has no global generator
- `cex-proj-graded-ring-not-faithful` · counterexample — Two graded rings with the same Proj
- `ex-line-bundle-map-conic-veronese` · example — The conic map from O(2)
- `cex-globally-generated-not-very-ample` · counterexample — Global generation does not imply very ampleness
- `ex-projective-bundle-trivial-rank-r` · example — Projective bundle of a trivial module

## Your seams

Your pages depend on another group's:

- `quasi-coherent-and-coherent-sheaves-and-vector-bundles` requires `flat-smooth-and-etale-morphisms` (group b, batch 6)

Another group's pages depend on yours:

- `flat-smooth-and-etale-morphisms` (group b) requires your `finite-proper-and-projective-morphisms`
- `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` (group b) requires your `quasi-coherent-and-coherent-sheaves-and-vector-bundles`
- `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` (group b) requires your `proj-projective-schemes-twisting-sheaves-and-ampleness`
- `smooth-projective-serre-duality-and-flag-variety-line-bundles` (group c) requires your `quasi-coherent-and-coherent-sheaves-and-vector-bundles`
- `smooth-projective-serre-duality-and-flag-variety-line-bundles` (group c) requires your `proj-projective-schemes-twisting-sheaves-and-ampleness`

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

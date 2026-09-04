# Alpha

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
group work, `research/frontier-29-alpha-groups.json` is the assignment: it permits at
most eight groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

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
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-29
role: alpha-adjudicate
label: step8-b
covers: 3, 13, 14

# Step 8 adjudication — group **b**, run `frontier-29`

You are the group Alpha for batches **3**, **13**, **14**: 3 A/B pair(s), 6 page(s), 115 item(s), 37 open rejection(s) over 37 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-29-alpha-b-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-29-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 3 | `henselian-rings-and-equicharacteristic-cohen-structure` | A | commutative-algebra | 194.001 | `inverse-limits-and-noetherian-completion-examples`, `formal-power-series` |
| 3 | `henselian-rings-and-equicharacteristic-cohen-structure-examples` | B | commutative-algebra | 194.002 | `henselian-rings-and-equicharacteristic-cohen-structure` |
| 13 | `affine-algebraic-sets-and-coordinate-rings` | A | algebraic-geometry | 366.041 | `chern-and-pontryagin-classes-by-splitting-and-complexification-examples`, `noether-normalisation-and-nullstellensatz` |
| 13 | `affine-algebraic-sets-and-coordinate-rings-examples` | B | algebraic-geometry | 366.042 | `affine-algebraic-sets-and-coordinate-rings` |
| 14 | `presheaves-sheaves-stalks-and-sheafification` | A | scheme-theory | 366.057 | `plane-curves-local-intersection-multiplicity-and-bezout-examples` |
| 14 | `presheaves-sheaves-stalks-and-sheafification-examples` | B | scheme-theory | 366.058 | `presheaves-sheaves-stalks-and-sheafification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `henselian-rings-and-equicharacteristic-cohen-structure` — Henselian Rings and Equicharacteristic Cohen Structure (39 item(s))

- `def-henselian-pair-and-henselian-local-ring` · definition — Henselian pairs and Henselian local rings
- `lem-henselian-pair-ideal-in-jacobson-radical` · lemma — The defining ideal of a Henselian pair lies in the Jacobson radical
- `lem-coprime-factor-bezout-lift` · lemma — Lift a Bezout identity for coprime residue factors
- `lem-hensel-factor-lift-leading-coefficient-normalisation` · lemma — Monicity and degree stay fixed during Hensel factor lifting
- `lem-hensel-factor-correction-one-stage` · lemma — One correction step raises factor lifting by one ideal power
- `lem-hensel-factor-corrections-form-cauchy-sequences` · lemma — Successive Hensel corrections are Cauchy
- `lem-hensel-factor-limit-multiplies-to-original` · lemma — The coefficientwise limits multiply back to the original polynomial
- `lem-hensel-factor-lift-uniqueness-induction` · lemma — Two lifted factorisations agree modulo every ideal power
- `prop-uniqueness-of-hensel-factor-lifting` · proposition — Lifted coprime factorisations are unique
- `lem-simple-root-to-coprime-factorisation` · lemma — A simple residue root determines a coprime residue factorisation
- `cor-factor-hensel-implies-simple-root-hensel` · corollary — Factor lifting implies simple-root lifting
- `cor-idempotents-lift-uniquely-in-a-henselian-pair` · corollary — Idempotents lift uniquely in a Henselian pair
- `lem-simple-root-hensel-lifts-idempotents` · lemma — Simple-root lifting also lifts idempotents
- `lem-simple-root-form-recovers-factor-lifting` · lemma — The simple-root form recovers factor lifting
- `cor-henselian-local-simple-root-criterion` · corollary — A local ring is Henselian exactly when simple residue roots lift uniquely
- `thm-equivalent-elementary-forms-of-hensels-property` · theorem — Equivalent elementary forms of Hensel's property
- `cor-complete-separated-adic-pair-henselian` · corollary — Complete separated adic pairs are Henselian
- `cor-complete-local-rings-are-henselian` · corollary — Complete local rings are Henselian
- `cor-nilpotent-ideal-pair-is-henselian` · corollary — Nilpotent Jacobson pairs are Henselian
- `cor-artinian-local-henselian-via-nilpotent-maximal-ideal` · corollary — Artinian local rings are Henselian
- `lem-henselian-quotient-factor-lift` · lemma — Henselian factor lifting descends to quotients
- `cor-quotient-of-a-henselian-local-ring-is-henselian` · corollary — Quotients of Henselian local rings are Henselian
- `def-equicharacteristic-local-ring-and-coefficient-field` · definition — Equicharacteristic local rings and coefficient fields
- `lem-coefficient-field-maps-isomorphically-to-residue-field` · lemma — A coefficient field maps isomorphically to the residue field
- `lem-equicharacteristic-prime-field-lifts` · lemma — The prime field lifts in the equicharacteristic case
- `lem-maximal-residue-injective-subfield` · lemma — Maximal residue-injective subfields exist
- `lem-coefficient-field-separable-adjunction-step` · lemma — Separable residue elements adjoin across a maximal subfield
- `lem-coefficient-field-transcendental-adjunction-step` · lemma — Transcendental residue elements adjoin across a maximal subfield
- `lem-coefficient-field-purely-inseparable-complete-step` · lemma — Completeness handles the purely inseparable residue step
- `cor-equicharacteristic-complete-local-ring-has-coefficient-field` · corollary — Complete equicharacteristic local rings have coefficient fields
- `lem-formal-power-series-evaluation-converges` · lemma — Formal power-series substitution converges in a complete local algebra
- `lem-formal-power-series-evaluation-unique-continuous-map` · lemma — Formal power-series substitution is the unique continuous k-algebra map
- `lem-cohen-presentation-surjective-mod-maximal-square` · lemma — The Cohen map is surjective modulo every power of the maximal ideal
- `lem-cohen-presentation-surjective-by-completeness` · lemma — Completeness turns dense image into surjectivity
- `cor-equicharacteristic-complete-local-power-series-quotient` · corollary — A complete equicharacteristic Noetherian local ring is a power-series quotient
- `lem-parameter-power-series-subring-makes-ring-finite` · lemma — Parameters make a complete local domain finite over a power-series subring
- `lem-parameter-power-series-map-injective-by-dimension` · lemma — The parameter power-series map is injective by dimension
- `cor-complete-local-domain-finite-over-a-regular-power-series-ring` · corollary — A complete local domain is finite over a regular power-series ring
- `rem-mixed-characteristic-cohen-structure-boundary` · remark — Mixed-characteristic Cohen structure remains a cited boundary

### `henselian-rings-and-equicharacteristic-cohen-structure-examples` — Henselian Rings and Equicharacteristic Cohen Structure — Examples (9 item(s))

- `ex-hensel-factor-correction-mod-three-powers` · example — Three Hensel correction stages for a coprime factorisation
- `ex-simple-root-and-factor-hensel-same-lift` · example — Simple-root lifting and factor lifting produce the same root
- `ex-multiple-residue-root-does-not-lift-uniquely` · example — A multiple residue root need not lift uniquely
- `ex-idempotent-lifting-and-product-decomposition` · example — Lifting an idempotent recovers a product decomposition
- `ex-complete-discrete-valuation-ring-henselian` · example — A complete discrete valuation ring is Henselian
- `ex-artinian-local-ring-henselian` · example — A truncated polynomial local ring is Henselian
- `ex-localised-integers-not-henselian` · example — A localization of the integers at p need not be Henselian
- `ex-cohen-presentation-singular-hypersurface` · example — A complete singular local ring as a power-series quotient
- `ex-coefficient-field-noncanonical-choice` · example — Coefficient fields need not be unique

### `affine-algebraic-sets-and-coordinate-rings` — Affine Algebraic Sets and Coordinate Rings (22 item(s))

- `def-affine-algebraic-set` · definition — An affine algebraic set in affine space
- `lem-zero-locus-ideal-closure` · lemma — A zero locus depends only on the generated ideal and its radical
- `thm-zariski-closed-sets-affine-space` · theorem — Zero loci in affine space are the closed sets of the classical Zariski topology
- `def-vanishing-ideal-affine-set` · definition — The vanishing ideal of a subset of affine space
- `lem-variety-ideal-galois-connection` · lemma — Vanishing ideals and zero loci form a Galois connection
- `thm-affine-nullstellensatz-correspondence` · theorem — Affine algebraic sets correspond to radical ideals, and irreducible ones to prime ideals
- `def-affine-variety-classical` · definition — A classical affine variety
- `lem-irreducible-space-open-intersections` · lemma — Irreducibility is equivalent to every pair of nonempty open sets meeting
- `def-coordinate-ring-affine-algebraic-set` · definition — The coordinate ring of an affine algebraic set
- `thm-affine-variety-prime-coordinate-ring` · theorem — A classical affine variety has a domain as its coordinate ring, and conversely
- `thm-regular-functions-on-affine-algebraic-set` · theorem — Polynomial functions on an affine algebraic set are exactly its coordinate ring
- `def-principal-open-classical-variety` · definition — A principal open subset of a classical affine variety
- `lem-principal-opens-form-affine-basis` · lemma — Principal opens form a basis for the Zariski topology on an affine variety
- `thm-coordinate-ring-principal-open` · theorem — Regular functions on a principal open are the principal localization of the coordinate ring
- `def-quasi-affine-algebraic-set` · definition — A quasi-affine algebraic set
- `lem-algebraic-set-finite-irreducible-components` · lemma — Every affine algebraic set has finitely many irreducible components
- `def-reduced-affine-algebra` · definition — A reduced affine k-algebra
- `thm-affine-algebraic-sets-coordinate-duality` · theorem — Affine algebraic sets contravariantly match reduced affine k-algebras
- `lem-maximal-ideals-are-points-over-algebraically-closed-field` · lemma — Points of an affine algebraic set correspond to maximal ideals of its coordinate ring
- `cor-zariski-topology-cofinite-on-affine-line` · corollary — On the affine line, the classical Zariski topology is cofinite
- `lem-density-nonempty-open-affine-variety` · lemma — Every nonempty open subset of an affine variety is dense
- `rem-classical-affine-register-limit` · remark — The classical affine dictionary forgets nilpotents and non-rational points

### `affine-algebraic-sets-and-coordinate-rings-examples` — Affine Algebraic Sets and Coordinate Rings — Examples (7 item(s))

- `ex-affine-line-and-affine-space-coordinate-rings` · example — Affine space has zero vanishing ideal and polynomial coordinate ring
- `ex-parabola-is-affine-line` · example — The parabola y=x^2 has coordinate ring k[t] and isomorphic intrinsic geometry to the affine line
- `ex-coordinate-cross-reducible` · example — The coordinate cross V(xy) is reducible and its coordinate ring has zero divisors
- `ex-punctured-affine-line-not-affine-closed-subset` · example — The punctured affine line is a principal open with Laurent-polynomial coordinate ring but is not closed in affine space
- `cex-zariski-topology-not-hausdorff` · counterexample — The Zariski topology on the affine line over an infinite field is not Hausdorff
- `cex-nilpotent-polynomial-data-invisible-to-zero-locus` · counterexample — The ideals (x) and (x^2) have the same zero locus but different quotient rings
- `ex-empty-affine-algebraic-set-unit-ideal` · example — The empty affine algebraic set corresponds to the unit ideal and the zero coordinate ring

### `presheaves-sheaves-stalks-and-sheafification` — Presheaves Sheaves Stalks and Sheafification (29 item(s))

- `def-open-set-category-topological-space` · definition — The category of open subsets of a topological space
- `def-presheaf-on-topological-space` · definition — A presheaf on a topological space
- `def-section-restriction-and-global-section` · definition — Sections, restrictions, and global sections of a presheaf
- `def-morphism-of-presheaves` · definition — Morphisms of presheaves
- `def-separated-presheaf` · definition — Separated presheaves
- `def-sheaf-on-topological-space` · definition — A sheaf on a topological space
- `lem-sheaf-section-over-empty-set-terminal` · lemma — A set-valued sheaf has a unique section over the empty open set
- `thm-sheaf-equalizer-condition` · theorem — The sheaf axiom is the equalizer condition on a cover
- `lem-sheaf-condition-check-on-basis` · lemma — The sheaf condition can be checked on a basis with basis-refinable intersections
- `def-presheaf-of-groups-rings-modules` · definition — Presheaves and sheaves of groups, rings, and modules
- `lem-forgetful-sheaf-compatibility` · lemma — Sheafhood of algebraic-structure valued presheaves is detected on underlying sets
- `def-stalk-of-presheaf` · definition — The stalk of a presheaf at a point
- `lem-germ-equivalence-relation` · lemma — Equality on a smaller neighbourhood defines the germ equivalence relation
- `def-germ-of-section` · definition — Germs of sections
- `lem-section-zero-if-all-germs-zero` · lemma — A section of a sheaf of groups is zero exactly when all of its germs are zero
- `lem-morphisms-of-sheaves-determined-by-stalks` · lemma — Morphisms of sheaves are determined by their maps on stalks
- `thm-sheaf-morphism-isomorphism-stalkwise` · theorem — A morphism of sheaves is an isomorphism exactly when it is an isomorphism on every stalk
- `def-etale-space-of-sheaf-of-sets` · definition — The etale space of a sheaf of sets
- `thm-sheaves-as-local-homeomorphisms` · theorem — Sheaves of sets are equivalent to local homeomorphisms over the base space
- `def-presheaf-plus-construction` · definition — The plus construction for a presheaf
- `lem-first-plus-construction-is-separated` · lemma — The first plus construction is separated and preserves stalks
- `lem-second-plus-construction-is-sheaf` · lemma — The second plus construction is a sheaf
- `def-sheafification` · definition — Sheafification of a presheaf
- `thm-sheafification-universal-property` · theorem — Sheafification is left adjoint to the inclusion of sheaves into presheaves
- `thm-sheafification-preserves-stalks` · theorem — Sheafification preserves stalks
- `cor-sheafification-idempotent` · corollary — Sheafification is idempotent
- `def-subsheaf` · definition — Subsheaves
- `lem-image-sheaf-is-sheafification-presheaf-image` · lemma — The image sheaf is the sheafification of the presheaf image
- `rem-sections-not-determined-by-single-stalk` · remark — A single stalk does not determine a global section

### `presheaves-sheaves-stalks-and-sheafification-examples` — Presheaves Sheaves Stalks and Sheafification — Examples (9 item(s))

- `ex-sheaf-continuous-real-functions` · example — Continuous real-valued functions form a sheaf
- `ex-sheaf-locally-constant-functions` · example — Locally constant functions form a sheaf and have constant stalks
- `cex-presheaf-bounded-continuous-functions-not-sheaf` · counterexample — Bounded continuous functions need not form a sheaf
- `cex-constant-presheaf-not-sheaf-disconnected-open` · counterexample — The constant presheaf need not be a sheaf on a disconnected open set
- `ex-skyscraper-set-sheaf-stalks` · example — A set-valued skyscraper sheaf and its stalks
- `ex-extension-by-empty-outside-open` · example — Sections on an open subset extended by the empty set outside it
- `cex-objectwise-image-not-sheaf` · counterexample — The objectwise image of a sheaf morphism need not be a sheaf
- `ex-germs-of-continuous-functions` · example — Distinct continuous functions can share one germ, but equal germs everywhere force equality
- `ex-empty-space-unique-sheaf-sections` · example — The empty space has a unique sheaf section over the empty open set

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-constant-presheaf-not-sheaf-disconnected-open` | `presheaves-sheaves-stalks-and-sheafification-examples` | gpt-5.6-terra | `fd3b966cfe65774c67f474ff0c34b5063e7e1c6bb7e09513012a090467b1e642` |
| `cex-nilpotent-polynomial-data-invisible-to-zero-locus` | `affine-algebraic-sets-and-coordinate-rings-examples` | gpt-5.6-terra | `51023d52dd5b7e883f5c3eef390a15ca2817a3f984eaeb8f12256c9e7519b800` |
| `cex-zariski-topology-not-hausdorff` | `affine-algebraic-sets-and-coordinate-rings-examples` | gpt-5.6-terra | `6b5ba864ac48356d2dcffac5569cdf92af861d1d0f0022c04fbc679c7c091904` |
| `cor-artinian-local-henselian-via-nilpotent-maximal-ideal` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `3aaa733990d398860d8683efdab553107b35f4eea4a0a48173b5204754781d7d` |
| `cor-complete-local-domain-finite-over-a-regular-power-series-ring` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `8ba06d45b45271f363a1a7c33d997f6dc8d4a8f95d029d815619d01857057ace` |
| `cor-quotient-of-a-henselian-local-ring-is-henselian` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `9cbac5d66dac4739776a555bd569e4f84b537615b3f9cbd63372d4f2624f0d4b` |
| `def-germ-of-section` | `presheaves-sheaves-stalks-and-sheafification` | gpt-5.6-terra | `c4ee5b65c212fa162149112ab0f2fbb6a68057556870e632159e623e5e8e12ae` |
| `def-open-set-category-topological-space` | `presheaves-sheaves-stalks-and-sheafification` | gpt-5.6-terra | `7a3fd4b8ed65267f8256187b3b9ab02d0b868198100d4d497080200e31dbb2ab` |
| `def-stalk-of-presheaf` | `presheaves-sheaves-stalks-and-sheafification` | gpt-5.6-terra | `1aed637c183f5fe3c675ec9f0ca3a077351152de421e4497151868e963b74d5f` |
| `ex-cohen-presentation-singular-hypersurface` | `henselian-rings-and-equicharacteristic-cohen-structure-examples` | gpt-5.6-terra | `8957f948e846ff0b05e29a152a614de8a06ea3f5042f47d33a755aca1e257670` |
| `ex-complete-discrete-valuation-ring-henselian` | `henselian-rings-and-equicharacteristic-cohen-structure-examples` | gpt-5.6-terra | `f0d7976cd9b0049404b4796686e857146639994f4fad011ff503f83ed67d8957` |
| `ex-coordinate-cross-reducible` | `affine-algebraic-sets-and-coordinate-rings-examples` | gpt-5.6-terra | `2854b39144a7820f63afb0ce4116fbd4ac221c1f4d68b9b4cf31bd7e8b649a86` |
| `ex-germs-of-continuous-functions` | `presheaves-sheaves-stalks-and-sheafification-examples` | gpt-5.6-terra | `9ad00d27d11668db5a5570bd90443c9a628ed8631a598147b81dde416547a83f` |
| `ex-hensel-factor-correction-mod-three-powers` | `henselian-rings-and-equicharacteristic-cohen-structure-examples` | gpt-5.6-terra | `cfac243a98206fa52cf59bcca50b3dd861fa3bcfd38b247dbb2116c091358b91` |
| `ex-parabola-is-affine-line` | `affine-algebraic-sets-and-coordinate-rings-examples` | gpt-5.6-terra | `f05ead7d6392e1c3caef9e2e23589434b29a7ad3699e4771b462e04da189d243` |
| `ex-punctured-affine-line-not-affine-closed-subset` | `affine-algebraic-sets-and-coordinate-rings-examples` | gpt-5.6-terra | `efe35e4b643da886bf21b5f66cd11b2838b302fbea6fae41880be087321cf216` |
| `lem-algebraic-set-finite-irreducible-components` | `affine-algebraic-sets-and-coordinate-rings` | gpt-5.6-terra | `8d5e94708eaa1b38d20b7eac71cb23b4bbca4d98681e7aadeb563ac52ec0f85a` |
| `lem-coefficient-field-purely-inseparable-complete-step` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `95f4db4595dd6a45db2eb51e0c8041716fbdcb74bcb727f4d0fca15e04c5bb0b` |
| `lem-coefficient-field-separable-adjunction-step` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `4e84dda28ffbca7d3d147a2674ecbc46dd077b0f40edbf7d6abbc4ba3b2dd907` |
| `lem-coefficient-field-transcendental-adjunction-step` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `abe9e59dc3f4a3eae2b2503bf537a1c3a9dd5e567f522c14aae096dd372382b7` |
| `lem-cohen-presentation-surjective-by-completeness` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `4b20baae9bd4488406d818acbc143332793bd9ce10078824fd86c68c962a1947` |
| `lem-cohen-presentation-surjective-mod-maximal-square` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `9d8b770d3eab70a716e48664a70577301db8ec13d11aae37d0ee68d73fcd5e94` |
| `lem-formal-power-series-evaluation-unique-continuous-map` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `5a99612d6aa6820ac91dd2fa741e3271d746daa207b6eca87bfb9d6fa8f300d6` |
| `lem-hensel-factor-correction-one-stage` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `cb673b5882ad7039e5174ec1133d00b51c3d9bf597907e73c75ab95c6fb217bc` |
| `lem-hensel-factor-lift-uniqueness-induction` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `a511be31f947d7c5353f984652e437b15970f206b1c7ffead320ee5f9ad1a41a` |
| `lem-parameter-power-series-map-injective-by-dimension` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `219a5f129c3510565ea1e74add5fb736afe6221ab88ad35f2d5d3596c3f931b0` |
| `lem-parameter-power-series-subring-makes-ring-finite` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `2c9fdc9f95a13a087818d271803f819a9a83d3171a5d107dac25170a652cc691` |
| `lem-second-plus-construction-is-sheaf` | `presheaves-sheaves-stalks-and-sheafification` | gpt-5.6-terra | `887ce54bc1a27221725c9e1fdeb7af74a0e9cab7fb6b2a77bf693dcff6d4850a` |
| `lem-section-zero-if-all-germs-zero` | `presheaves-sheaves-stalks-and-sheafification` | gpt-5.6-terra | `f99b63d460b4c9a6525f3c9f8b46cdecf1228cb42705d7bda7031ae8d4289160` |
| `lem-simple-root-form-recovers-factor-lifting` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `c765992e636a3c54b880fcc08c185dd23fc61548e492831cedb2a76548cbcc76` |
| `lem-simple-root-to-coprime-factorisation` | `henselian-rings-and-equicharacteristic-cohen-structure` | gpt-5.6-terra | `d61adf8537ca070b07b5b06e415ca878dd587a7fd42734dd08461a64f651bf3a` |
| `rem-classical-affine-register-limit` | `affine-algebraic-sets-and-coordinate-rings` | gpt-5.6-terra | `3f044737836d29d02449006fe9964694a53d49fe6106c8b3d9ca0ede576a6252` |
| `thm-affine-algebraic-sets-coordinate-duality` | `affine-algebraic-sets-and-coordinate-rings` | gpt-5.6-terra | `ca6c742deef2db6797af4e4cd0091711cba64c6d16dc863b18a0351326d8310e` |
| `thm-affine-nullstellensatz-correspondence` | `affine-algebraic-sets-and-coordinate-rings` | gpt-5.6-terra | `10c58699f3e63d32e64eecf2f46050d7b4339a7f4d6a6fabd46e2770212e41de` |
| `thm-regular-functions-on-affine-algebraic-set` | `affine-algebraic-sets-and-coordinate-rings` | gpt-5.6-terra | `ae27a71bfce6d973742bd5d2b3c3c68954400fa76ae6a60dc8feabe386a6a51e` |
| `thm-sheaves-as-local-homeomorphisms` | `presheaves-sheaves-stalks-and-sheafification` | gpt-5.6-terra | `e13afcd26dcc5f04119a10d5f41962e8d92fdd25b84b4e21f0d4cc6891ffa781` |
| `thm-zariski-closed-sets-affine-space` | `affine-algebraic-sets-and-coordinate-rings` | gpt-5.6-terra | `dc99266fe66a1de7e003e12684c19a23612240cb029b276014290e5150a3e5f8` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-29`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-29-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For an incoming alert, append the owning-group disposition to
`research/frontier-29-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-29-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-29-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.

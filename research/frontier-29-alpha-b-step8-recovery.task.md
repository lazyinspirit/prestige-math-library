# Step 8 adjudication — group **b**, run `frontier-29`

You are the group Alpha for batches **3**, **13**, **14**: 3 A/B pair(s), 6 page(s), 115 item(s), 0 open rejection(s) over 0 item(s).

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
- `lem-parameter-power-series-subring-makes-ring-finite` · lemma — Parameters make a complete local domain finite over the image of a power-series map
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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-29-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — exact closure recovery, `frontier-29`

Read `research/frontier-29-judge-closure.json`,
`research/frontier-29-judge.jsonl`,
`research/frontier-29-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-29-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-29-step8-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/frontier-29-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.

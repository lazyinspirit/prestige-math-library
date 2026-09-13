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
group work, `research/phase-2-next-21-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

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
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
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

run: phase-2-next-21
role: alpha-adjudicate
label: step7-b
covers: 5, 6, 9

# Step 7 adjudication — group **b**, run `phase-2-next-21`

You are the group Alpha for batches **5**, **6**, **9**: 5 A/B pair(s), 10 page(s), 135 item(s), 52 open rejection(s) over 52 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-21-alpha-b-step7-context.json` is what a group Alpha for this group wrote during step 6,
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

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-next-21-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 5 | `bocksteins-steenrod-squares-and-cohomology-operations` | A | algebraic-topology | 366.017 | `cup-cap-cross-products-and-cohomology-rings`, `orientations-poincare-lefschetz-and-alexander-duality` |
| 5 | `bocksteins-steenrod-squares-and-cohomology-operations-examples` | B | algebraic-topology | 366.018 | `bocksteins-steenrod-squares-and-cohomology-operations` |
| 5 | `local-coefficients-twisted-homology-and-duality` | A | algebraic-topology | 366.0243 | `singular-cohomology-and-coefficient-theorems`, `orientations-poincare-lefschetz-and-alexander-duality`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `categories-functors-and-natural-transformations`, `the-group-algebra-and-representations` |
| 5 | `local-coefficients-twisted-homology-and-duality-examples` | B | algebraic-topology | 366.0244 | `local-coefficients-twisted-homology-and-duality` |
| 6 | `spectra-and-stable-homotopy-groups` | A | algebraic-topology | 366.0241 | `higher-homotopy-groups-and-cofiber-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `subspaces-products-and-quotients`, `limits-and-colimits` |
| 6 | `spectra-and-stable-homotopy-groups-examples` | B | algebraic-topology | 366.0242 | `spectra-and-stable-homotopy-groups` |
| 6 | `obstruction-theory-postnikov-towers-and-classifying-spaces` | A | algebraic-topology | 366.025 | `singular-cohomology-and-coefficient-theorems`, `bocksteins-steenrod-squares-and-cohomology-operations`, `higher-homotopy-groups-and-cofiber-sequences`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `local-coefficients-twisted-homology-and-duality`, `applications-of-the-fundamental-group` |
| 6 | `obstruction-theory-postnikov-towers-and-classifying-spaces-examples` | B | algebraic-topology | 366.026 | `obstruction-theory-postnikov-towers-and-classifying-spaces` |
| 9 | `brauers-second-main-theorem` | A | representation-theory | 510.063 | `blocks-defect-groups-and-the-brauer-homomorphism`, `vertices-sources-and-the-green-correspondence`, `brauers-first-main-theorem`, `brauer-characters-and-decomposition-matrices` |
| 9 | `brauers-second-main-theorem-examples` | B | representation-theory | 510.064 | `brauers-second-main-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `bocksteins-steenrod-squares-and-cohomology-operations` — Bocksteins Steenrod Squares and Cohomology Operations (30 item(s))

- `def-stable-natural-cohomology-operation` · definition — Stable natural cohomology operation
- `def-bockstein-connecting-operation` · definition — Bockstein connecting operation
- `lem-the-bockstein-is-independent-of-lift-and-cocycle-representative` · lemma — The Bockstein is independent of lift and representative
- `prop-bocksteins-are-natural-and-commute-with-suspension` · proposition — Bocksteins are natural and stable
- `prop-the-mod-two-bockstein-is-a-derivation` · proposition — The mod-two Bockstein is a derivation
- `lem-natural-higher-diagonal-approximations-on-singular-chains` · lemma — Natural higher diagonal approximations
- `def-higher-cup-i-products` · definition — Higher cup-i products
- `thm-cup-i-coboundary-identity` · theorem — Cup-i coboundary identity
- `def-steenrod-squares-from-cup-i-products` · definition — Steenrod squares from cup-i
- `thm-steenrod-squares-are-well-defined-and-natural` · theorem — Steenrod squares are well-defined and natural
- `prop-steenrod-square-normalization-instability-and-top-square` · proposition — Steenrod normalization, instability, suspension, and top square
- `lem-cartan-coherence-for-higher-diagonal-approximations` · lemma — Cartan coherence for higher diagonals
- `thm-cartan-formula-for-steenrod-squares` · theorem — Cartan formula for Steenrod squares
- `lem-free-cyclic-resolution-and-transfer-for-power-operations` · lemma — Free cyclic resolution, group cohomology, and transfer for power operations
- `lem-equivariant-p-fold-external-power-and-diagonal` · lemma — Equivariant p-fold external power and diagonal decomposition
- `lem-wreath-double-power-coefficient-symmetry` · lemma — Wreath double-power comparison and coefficient transposition
- `lem-finite-cellular-cyclic-squares-cartan-and-basis-action` · lemma — Finite-cellular cyclic squares, Cartan formula, and cyclic-basis action
- `lem-adem-double-power-comparison` · lemma — Adem double-power comparison
- `lem-finite-cellular-cyclic-squares-agree-with-singular-cup-i-squares` · lemma — Finite-cellular cyclic squares agree with singular cup-i squares
- `lem-natural-singular-cohomology-identities-are-detected-on-finite-regular-complexes` · lemma — Natural singular-cohomology identities are detected on finite regular complexes
- `thm-adem-relations-for-steenrod-squares` · theorem — Adem relations for Steenrod squares
- `lem-bockstein-square-parity-recurrence` · lemma — Bockstein parity recurrence for Steenrod squares
- `prop-first-steenrod-square-is-the-mod-two-bockstein` · proposition — Sq^1 is the mod-two Bockstein
- `def-total-steenrod-square` · definition — Total Steenrod square
- `def-wu-classes-of-a-closed-manifold` · definition — Wu classes of a closed manifold
- `lem-cyclic-p-fold-power-construction` · lemma — Cyclic p-fold power construction
- `def-mod-p-reduced-power-operations` · definition — Mod-p reduced power operations
- `thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations` · theorem — Reduced powers satisfy naturality, instability, Cartan, and Adem relations
- `lem-mod-two-cohomology-ring-of-infinite-real-projective-space` · lemma — Mod-two cohomology ring of infinite real projective space
- `lem-mod-two-cohomology-rings-of-complex-projective-spaces` · lemma — Mod-two cohomology rings of complex projective spaces

### `bocksteins-steenrod-squares-and-cohomology-operations-examples` — Bocksteins Steenrod Squares and Cohomology Operations — Examples (7 item(s))

- `ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space` · example — Bockstein detects integral two-torsion in real projective space
- `ex-steenrod-squares-on-real-projective-space` · example — Steenrod squares on real projective space
- `ex-steenrod-squares-on-complex-projective-space-mod-two` · example — Steenrod squares on complex projective space mod two
- `ex-adem-relation-sq-one-sq-one-equals-zero` · example — The relation Sq^1Sq^1=0
- `ex-wu-classes-of-a-closed-surface` · example — Wu classes of a closed surface
- `cex-the-top-square-formula-does-not-define-all-lower-squares` · counterexample — Top squares do not determine lower squares
- `cex-steenrod-squares-are-not-integral-cohomology-operations` · counterexample — Steenrod squares do not all lift integrally

### `local-coefficients-twisted-homology-and-duality` — Local Coefficients, Twisted Homology, and Duality (21 item(s))

- `def-fundamental-groupoid-of-a-space` · definition — Fundamental groupoid of a space
- `prop-the-vertex-group-of-the-fundamental-groupoid-is-the-published-fundamental-group` · proposition — Vertex groups recover the fundamental group
- `def-local-system-of-r-modules-and-its-pullback` · definition — Local systems and pullback
- `thm-local-systems-on-a-connected-cw-complex-correspond-to-modules-over-its-group-ring` · theorem — Local systems correspond to group-ring modules
- `def-right-group-ring-action-on-the-chains-of-a-universal-cover` · definition — Right action on universal-cover chains
- `def-singular-and-cellular-chain-complexes-with-local-coefficients` · definition — Singular and cellular local chain complexes
- `lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases` · lemma — Twisted boundaries square to zero and ignore lift bases
- `def-homology-and-cohomology-with-local-coefficients` · definition — Homology and cohomology with local coefficients
- `prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism` · proposition — Functoriality with coefficient morphisms
- `thm-cellular-chains-compute-homology-with-local-coefficients` · theorem — Cellular chains compute local homology
- `thm-pair-long-exact-sequences-with-local-coefficients` · theorem — Pair exact sequences with local coefficients
- `thm-cellular-cochains-compute-cohomology-with-local-coefficients` · theorem — Cellular cochains compute cohomology with local coefficients
- `thm-excision-and-mayer-vietoris-with-local-coefficients` · theorem — Excision and Mayer–Vietoris with local coefficients
- `def-compactly-supported-cohomology-with-local-coefficients` · definition — Compactly supported cohomology with local coefficients
- `prop-the-manifold-orientation-system-is-a-local-system` · proposition — The orientation system is a local system
- `def-orientation-local-system-on-a-manifold-with-boundary` · definition — Orientation local system on a manifold with boundary
- `lem-canonical-twisted-fundamental-classes-over-compact-subsets` · lemma — Canonical twisted fundamental classes over compact subsets
- `def-cup-and-cap-products-with-local-coefficient-pairings` · definition — Cup and cap products with local coefficients
- `thm-poincare-duality-with-the-orientation-local-system` · theorem — Poincare duality with the orientation local system
- `thm-poincare-lefschetz-duality-with-local-coefficients` · theorem — Poincare–Lefschetz duality with local coefficients
- `lem-fiber-transport-homology-and-cohomology-form-the-serre-local-systems` · lemma — Fiber transport gives the Serre local systems

### `local-coefficients-twisted-homology-and-duality-examples` — Local Coefficients, Twisted Homology, and Duality: Examples (6 item(s))

- `ex-circle-homology-with-a-module-automorphism` · example — Circle homology with monodromy
- `ex-sign-local-system-on-real-projective-space` · example — Sign local system on real projective space
- `ex-the-orientation-system-of-the-mobius-band` · example — Orientation system of the Mobius band
- `ex-twisted-poincare-duality-for-a-closed-nonorientable-surface` · example — Twisted duality for a nonorientable surface
- `cex-constant-coefficients-do-not-compute-a-nontrivial-monodromy-system` · counterexample — Constant coefficients miss monodromy
- `cex-the-untwisted-e-two-page-misses-monodromy-in-a-mapping-torus` · counterexample — An untwisted E2 table misses mapping-torus monodromy

### `spectra-and-stable-homotopy-groups` — Spectra and Stable Homotopy Groups (16 item(s))

- `def-compactly-generated-based-space-and-well-pointed-object` · definition — Compactly generated based spaces and well-pointed objects
- `def-smash-product-of-based-spaces` · definition — Smash product of based spaces
- `prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms` · proposition — Canonical associativity, symmetry, and unit maps for smash products
- `def-sequential-prespectrum-spectrum-and-adjoint-structure-maps` · definition — Sequential prespectra, spectra, and adjoint structure maps
- `def-suspension-prespectrum-and-sphere-prespectrum` · definition — Suspension and sphere prespectra
- `def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra` · definition — Strict maps and structure-compatible homotopies of sequential prespectra
- `def-stable-homotopy-groups-of-a-sequential-prespectrum` · definition — Stable homotopy groups of a sequential prespectrum
- `lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail` · lemma — Stable homotopy colimits are independent of a cofinal tail
- `prop-maps-of-prespectra-induce-functorial-maps-on-stable-homotopy-groups` · proposition — Strict prespectrum maps act functorially on stable homotopy groups
- `def-shift-and-suspension-of-a-sequential-prespectrum` · definition — Shift and suspension of sequential prespectra
- `def-stable-stem-of-the-sphere` · definition — Stable stems of the sphere
- `lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres` · lemma — Freudenthal identifies the eventual suspension system for spheres
- `prop-the-sphere-prespectrum-homotopy-groups-are-the-stable-stems` · proposition — The sphere prespectrum groups are the classical stable stems
- `def-pairing-and-unital-multiplication-of-sequential-prespectra` · definition — Pairings and unital multiplication of sequential prespectra
- `prop-a-ring-prespectrum-gives-a-graded-product-on-stable-homotopy-groups` · proposition — A ring prespectrum gives a graded product on stable homotopy groups
- `rem-positive-stable-stems-brown-representability-and-model-categorical-replacement-are-not-proved-here` · remark — Scope boundary for stable homotopy theory

### `spectra-and-stable-homotopy-groups-examples` — Spectra and Stable Homotopy Groups: Examples (4 item(s))

- `ex-the-zero-stem-is-the-integers` · example — The zero stable stem is the integers
- `ex-stabilizing-a-map-between-spheres` · example — Stabilizing a map between spheres
- `ex-suspension-prespectra-of-spheres-are-shifts` · example — Suspension prespectra of spheres are shifts
- `cex-an-unstable-homotopy-class-need-not-yet-be-stable` · counterexample — An unstable homotopy class need not yet be stable

### `obstruction-theory-postnikov-towers-and-classifying-spaces` — Obstruction Theory Postnikov Towers and Classifying Spaces (24 item(s))

- `lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere` · lemma — Extending over one cell is equivalent to nullhomotoping its attaching sphere
- `def-homotopy-group-local-system-along-a-cellular-map` · definition — Homotopy-group local system along a cellular map
- `def-primary-cellular-obstruction-cochain` · definition — Primary cellular obstruction cochain
- `thm-the-primary-obstruction-cochain-is-a-cocycle` · theorem — The primary obstruction cochain is a cocycle
- `def-difference-cochain-between-two-cellular-extensions` · definition — Difference cochain between two cellular extensions
- `thm-the-primary-obstruction-class-is-independent-of-cellular-choices` · theorem — The primary obstruction class is independent of cellular choices
- `thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton` · theorem — Vanishing of the primary obstruction is equivalent to extension over the next skeleton
- `thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage` · theorem — Difference cochains classify homotopies in the stable stage
- `thm-obstruction-theory-for-lifting-through-a-fibration` · theorem — Obstruction theory for lifting through a fibration
- `def-eilenberg-maclane-space` · definition — Eilenberg–Mac Lane spaces
- `thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces` · theorem — Existence and homotopy uniqueness of Eilenberg–Mac Lane spaces
- `thm-eilenberg-maclane-spaces-represent-singular-cohomology` · theorem — Eilenberg–Mac Lane spaces represent singular cohomology
- `cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces` · corollary — Cohomology operations are universal classes on Eilenberg–Mac Lane spaces
- `def-postnikov-section-and-postnikov-tower` · definition — Postnikov sections and Postnikov towers
- `thm-postnikov-towers-exist-for-connected-cw-complexes` · theorem — Postnikov towers exist for connected CW complexes
- `def-postnikov-k-invariant` · definition — Postnikov k-invariants
- `thm-simple-postnikov-stages-are-classified-by-k-invariants` · theorem — Simple Postnikov stages are classified by k-invariants
- `def-universal-principal-bundle-and-classifying-space` · definition — Universal principal bundles and classifying spaces
- `def-milnor-infinite-join-model-of-eg` · definition — Milnor’s infinite-join model of EG
- `lem-finite-join-models-for-circle-and-two-point-groups` · lemma — Finite join models for the circle and the two-point group
- `thm-milnor-join-model-is-a-contractible-free-g-space` · theorem — Milnor’s join model is a contractible free G-space
- `thm-principal-bundles-are-classified-by-maps-to-bg` · theorem — Numerable principal bundles are classified by maps to BG
- `prop-loop-space-of-bg-recovers-g-up-to-homotopy` · proposition — The based loop space of BG recovers G weakly
- `cor-classifying-space-of-a-discrete-group-is-a-k-g-one` · corollary — The classifying space of a discrete group is a K(G,1)

### `obstruction-theory-postnikov-towers-and-classifying-spaces-examples` — Obstruction Theory Postnikov Towers and Classifying Spaces — Examples (7 item(s))

- `ex-primary-obstruction-to-a-nowhere-zero-section-of-a-sphere-fibration` · example — Primary obstruction to a nowhere-zero section of a sphere fibration
- `ex-k-z-one-as-the-infinite-complex-projective-space` · example — Infinite complex projective space is K(Z,2)
- `ex-real-projective-infinity-as-b-z-two` · example — Real projective infinity as BZ/2
- `ex-first-postnikov-stage-of-a-simply-connected-space` · example — First nontrivial Postnikov stage of a simply connected space
- `ex-trivial-principal-bundle-corresponds-to-a-nullhomotopic-classifying-map` · example — The trivial principal bundle has a nullhomotopic classifying map
- `cex-cellwise-vanishing-obstructions-with-incompatible-choices-need-not-give-a-global-extension` · counterexample — Incompatible choices do not define one global obstruction problem
- `cex-principal-bundle-classification-can-fail-without-numerability` · counterexample — Principal-bundle classification can fail without numerability

### `brauers-second-main-theorem` — Brauers Second Main Theorem (17 item(s))

- `lem-commuting-p-and-p-prime-parts-of-a-finite-group-element` · lemma — Every finite-group element has unique commuting p- and p-prime parts
- `def-p-section-of-a-p-element` · definition — The p-section of a p-element
- `def-generalized-decomposition-numbers` · definition — Generalized decomposition numbers
- `thm-generalized-decomposition-numbers-exist-and-are-unique` · theorem — Generalized decomposition numbers exist and are unique
- `lem-block-idempotents-lift-uniquely-from-kh-to-oh` · lemma — Block idempotents lift uniquely from kH to OH
- `def-relative-projectivity-and-vertices-for-og-lattices` · definition — Relative projectivity and vertices for integral group lattices
- `thm-krull-schmidt-for-og-lattices` · theorem — Krull-Schmidt holds for finite-rank OH-lattices
- `lem-integral-mackey-and-higman-for-og-lattices` · lemma — Integral Mackey decomposition and Higman's criterion for group lattices
- `thm-green-indecomposability-for-index-p-integral-induction` · theorem — Green indecomposability for index-p integral induction
- `lem-central-p-subgroups-lie-in-every-block-defect-group` · lemma — Central p-subgroups lie in every block defect group
- `def-brauer-subsection` · definition — Brauer subsections and B-subsections
- `lem-relative-projectivity-forces-p-section-character-vanishing` · lemma — Relative projectivity forces character vanishing off the controlling p-section
- `thm-nagao-decomposition-for-restriction-to-a-centralizer` · theorem — Nagao decomposition for restriction to a centralizer
- `lem-nagao-error-terms-have-zero-trace-on-the-relevant-p-section` · lemma — Nagao error terms have zero trace on the relevant p-section
- `lem-local-block-projection-controls-generalized-decomposition-support` · lemma — Local block projection controls p-section character support
- `thm-brauer-second-main-theorem` · theorem — Brauer's Second Main Theorem
- `cor-generalized-decomposition-columns-have-corresponding-block-support` · corollary — Generalized decomposition columns have corresponding block support

### `brauers-second-main-theorem-examples` — Brauers Second Main Theorem — Examples (3 item(s))

- `ex-p-sections-and-brauer-subsections-in-a-small-finite-group` · example — p-sections and Brauer subsections in S3
- `ex-second-main-theorem-at-u-equals-one` · example — The Second Main Theorem at u=1 is block-diagonal decomposition
- `ex-second-main-theorem-with-no-inducing-local-block` · example — A p-section with no local block inducing to the chosen global block

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

6 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-7f1e3417f3f8f07c4ffbc2a9 · `def-stable-natural-cohomology-operation`** (from group b, gap-a-reader-closes) — The definition of stability requires that 'cohomology suspension' commute with Φ but does not fix a sign for it, while prop-bocksteins-are-natural-and-commute-with-suspension proves its statement only after declaring σ_n^G:=(−1)^n∂_G as 'the stable cone-suspension sign convention'; with the unsigned connector β would come out anti-stable. All later users declare or quote the signed convention, so nothing is false, but the definition itself is underdetermined at the seam.
- **s8a-5a8067907d3f5cbc0849147c · `lem-cyclic-p-fold-power-construction`** (from group b, gap-a-reader-closes) — Step 4.5 asserts that evaluating z^{⊗p} on the carried value m!(J_1^p−J_2^p) 'contributes the Koszul sign (−1)^{p(p−1)/2}', giving D_{p−1}(z)=(−1)^m m!z and a_1=(−1)^m m!. The library's tensor-functional convention carries no extra evaluation sign (def-additive-singular-cohomology-cross-product says so explicitly), so the origin of the sign in the Steenrod–Epstein carried map is not reconstructed locally; a reader must consult the source for it, and the whole top-coefficient formula a_q depends on it.
- **s8a-9a44384d30e00a1b836b1b5f · `lem-cyclic-p-fold-power-construction`** (from group b, gap-a-reader-closes) — The top coefficient D_{(p−1)q}(x)=(−1)^{mq(q+1)/2}(m!)^q x is cited to Steenrod–Epstein (Chapter VII Lemma 6.4 region) on the same page that reverses the source's printed (m!)^q to (m!)^{-q}; the sign of a_q is therefore tied to a source statement the authors read as requiring correction, and should be rechecked against the source's exact Lemma 6.4 rather than inherited from the corrected normalization.
- **s8a-dc52a7a4aefd0043ef42bd40 · `thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations`** (from group b, gap-a-reader-closes) — Step 2.2 states that the total sign exponent k+i+j+m(r²+r+s²+s+rs)+pmrs 'is even' without showing the parity calculation, and step 4.1 replaces the normalized double power by 'four finite coefficient rows' whose displayed expansions are not written out; both odd-primary Adem relations are derived from these two unexhibited computations.
- **s8a-8c0b511e6c93ff7f5306d0ad · `thm-simple-postnikov-stages-are-classified-by-k-invariants`** (from group b, gap-a-reader-closes) — Steps 2.4 and 3.1 introduce a space of homotopy-equivalence data and assert that 'homotopy lifting and the exponential law assemble a mapping-path model of these spaces into a fibration Q→B' together with the obstruction-theoretic completeness argument, but the assembly, the fiberwise-equivalence comparison with the self-equivalence fibration, and the resulting comparison formula are sketched rather than constructed; completeness of the classification rests on them.
- **s8a-13a2f39f014eafa988ab2684 · `ex-wu-classes-of-a-closed-surface`** (from group b, presentation) — The Remarks section carries pipeline bookkeeping (batch-5 manifest forwardRefs, Step-5b resolution, a proposed rehoming 'owner-only reading-order change') as item prose, and the five later-page suppliers in [F2]–[F5] are named as raw IDs in backticks rather than linked, so the rendered page shows bare identifiers and internal build-process text.

Append one owning-group disposition per warning to `research/phase-2-next-21-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-the-top-square-formula-does-not-define-all-lower-squares` | `bocksteins-steenrod-squares-and-cohomology-operations-examples` | gpt-5.6-terra | `55dc978c45c3ec040e2023a9d7d91010ee3872bb78e4530c341f084ce2ab4164` |
| `cex-the-untwisted-e-two-page-misses-monodromy-in-a-mapping-torus` | `local-coefficients-twisted-homology-and-duality-examples` | gpt-5.6-terra | `3cff62a50e5e419d1282425afe429940da69cc68abd428ae93b8c26c4b8599c4` |
| `cor-classifying-space-of-a-discrete-group-is-a-k-g-one` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `201ca366369d7a000b6417f5fbeef7e4f0ae128d04ea57080c7caa3a8ee9a1fe` |
| `cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `7ea7921db6de99c3725c72715d85f16ef557c5ce7879226a29a66bc551261a52` |
| `def-bockstein-connecting-operation` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `cb144a05e4cbeec8fe8e43c2121b7013600c13ce50c63944f64a28be9c26021c` |
| `def-fundamental-groupoid-of-a-space` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `fd8955e70626ab28bda8a0caab362fb2d5dfb9ce0803ac7ec86143a7b4efd17c` |
| `def-pairing-and-unital-multiplication-of-sequential-prespectra` | `spectra-and-stable-homotopy-groups` | gpt-5.6-terra | `76e8f768eab60ce3cab87785ed6918349d43bf20ef1e1944e43a40708fbee148` |
| `def-right-group-ring-action-on-the-chains-of-a-universal-cover` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `900ed1394d99dcdd05dc1dda7da330721c2114871b8008aecfe8f328a954b4c5` |
| `def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra` | `spectra-and-stable-homotopy-groups` | gpt-5.6-terra | `5b9e2eee28051f89788bddb68f145409cc60f2c28e0d72e499e62ec77ae5ddee` |
| `def-universal-principal-bundle-and-classifying-space` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `5d6ac32c11f05f34e1250307f20bf202b03280fb8a036830ec17518ca7279475` |
| `ex-adem-relation-sq-one-sq-one-equals-zero` | `bocksteins-steenrod-squares-and-cohomology-operations-examples` | gpt-5.6-terra | `d653e0ce244446a23f2123dcc7de6bd276b40b9413f9623be4e9478e0559ce77` |
| `ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space` | `bocksteins-steenrod-squares-and-cohomology-operations-examples` | gpt-5.6-terra | `f343db106f7a3b37a6bc25b470b680dc3dcb1b019ffe4791cd73287922ce7c44` |
| `ex-first-postnikov-stage-of-a-simply-connected-space` | `obstruction-theory-postnikov-towers-and-classifying-spaces-examples` | gpt-5.6-terra | `ea15a06d61dff7ee198f8cce575f1e364207c00eda2c1bfc7ffacac2ea92b5f5` |
| `ex-p-sections-and-brauer-subsections-in-a-small-finite-group` | `brauers-second-main-theorem-examples` | gpt-5.6-terra | `55278de095d2bc85f984439f1aae321f81701ab88f30e3fe07fdca33b15bb676` |
| `ex-real-projective-infinity-as-b-z-two` | `obstruction-theory-postnikov-towers-and-classifying-spaces-examples` | gpt-5.6-terra | `84a8523809b86227285d93f3dfedfc913ad9dce6a25942c5f011f02e7a38f89a` |
| `ex-second-main-theorem-with-no-inducing-local-block` | `brauers-second-main-theorem-examples` | gpt-5.6-terra | `cbeb5082182607a119b9498bf3c25e15769de961b82981de8b5a5777fbb88896` |
| `ex-steenrod-squares-on-real-projective-space` | `bocksteins-steenrod-squares-and-cohomology-operations-examples` | gpt-5.6-terra | `7324c8e99a352363331523fc48c1e4fa33f2001e304444c5d1a80e5b2db83957` |
| `ex-the-orientation-system-of-the-mobius-band` | `local-coefficients-twisted-homology-and-duality-examples` | gpt-5.6-terra | `72df89a929f399fe570b324b1e5a1c4c11cc9c63e9ae0cae5a5ecda4f7f4d52c` |
| `ex-trivial-principal-bundle-corresponds-to-a-nullhomotopic-classifying-map` | `obstruction-theory-postnikov-towers-and-classifying-spaces-examples` | gpt-5.6-terra | `ee8e5759f5403628c46ff59749f47797d74bb516f0088ac2728793bb782549f6` |
| `ex-wu-classes-of-a-closed-surface` | `bocksteins-steenrod-squares-and-cohomology-operations-examples` | gpt-5.6-terra | `a397704e6fc73a11a66c2b8c7263230917167c56d6e60ee649243148e45988d3` |
| `lem-adem-double-power-comparison` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `61d65dfa49c3a17db1a77887f44c36fb072ccd18f4e829c7cd6a0c9179d0fa45` |
| `lem-bockstein-square-parity-recurrence` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `d449c1527e92eb476b6baf0309ff5213c85cb846e009ee04e4faa86af1c0a0c1` |
| `lem-canonical-twisted-fundamental-classes-over-compact-subsets` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `9c7dda76cc1d91256e59c55d1c602f3fd83bf448a8492dd429b81836c3831cc5` |
| `lem-equivariant-p-fold-external-power-and-diagonal` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `a59de306020d386079624edf06137e77b4a84a807593016f0cbbb994e22abe36` |
| `lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `172075cd1ca0f48432a7bbae26621934b441dc0f01ee563dc888e00335f554dd` |
| `lem-free-cyclic-resolution-and-transfer-for-power-operations` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `16881e6f9c72d30dc498cd03b9016d711641a1420031af12eef17ca3d235b864` |
| `lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres` | `spectra-and-stable-homotopy-groups` | gpt-5.6-terra | `d5951995ffabe7428f83e720fc691dbb06bd11a8032427166835656cb370206b` |
| `lem-local-block-projection-controls-generalized-decomposition-support` | `brauers-second-main-theorem` | gpt-5.6-terra | `ccd8de6e633d40881f81dca411686c6b9b4a0f98b54bf92c168a65eaf2a8b4d0` |
| `lem-mod-two-cohomology-ring-of-infinite-real-projective-space` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `114f722515123c1c9378a70c2c8047a59a5f80c2abd7ac2295fac03d4f75d76e` |
| `lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail` | `spectra-and-stable-homotopy-groups` | gpt-5.6-terra | `3f2647672102a73740c1d28beabd682aa577ca6cebbe072ba36cdb8397aed9a6` |
| `lem-wreath-double-power-coefficient-symmetry` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `ef3b63cf5dd10ed2f2bd4fac17a9e8f4d5516dbae12852f55ce5feffae6085eb` |
| `prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `691dec003a585bd7c9578bb75c0c1cda5a256a977787a8e703ec1aca899fa374` |
| `prop-loop-space-of-bg-recovers-g-up-to-homotopy` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `0badd6c1cfae54df5bddfd6cd6b1dff5f3fd8ddf20d4fe8295dd50c434339f42` |
| `prop-steenrod-square-normalization-instability-and-top-square` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `340c1bd3aaa35015c7ede09bf53cab12819e73b7970374ead183a2040a5651f7` |
| `prop-the-manifold-orientation-system-is-a-local-system` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `233b310e4a6d055f7c2eab38e28acc4d05b6b17d5efdaf72abc722661fa39d3d` |
| `prop-the-mod-two-bockstein-is-a-derivation` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `fcc23e48b1588c9c6966bad569f62d18e652e5d9b8e9d896a10bc28f58409498` |
| `prop-the-vertex-group-of-the-fundamental-groupoid-is-the-published-fundamental-group` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `5f5061f9b19fc5aad165c63ce92f83b3551695ff1970db215ceb9e1969f51656` |
| `thm-cellular-chains-compute-homology-with-local-coefficients` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `591fde35773b3259a260debee9877a414ff62240e90a0117cc88301e3c87e947` |
| `thm-cellular-cochains-compute-cohomology-with-local-coefficients` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `ac632457200bcfb69e143be674a777767e380d634a4062a38abe21e965ecebdb` |
| `thm-cup-i-coboundary-identity` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `291b4ac87f8c7b239f597847dcd135ae4d959529f9fab2d6474dc00a9d9a1849` |
| `thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `ce6970d38bb0d912c1f89ba3cf5cfe4ac2697fa5ecb989024f5506d42f0a1575` |
| `thm-excision-and-mayer-vietoris-with-local-coefficients` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `2e0e7fbea9ebd093550d52b98b904600a25c93bfd57e1181ea9d408f00ebf821` |
| `thm-generalized-decomposition-numbers-exist-and-are-unique` | `brauers-second-main-theorem` | gpt-5.6-terra | `7dd3c7a665c73e030eb01a734d66cfbdcc28b009b7e8c16317c47f1d7b4223f8` |
| `thm-milnor-join-model-is-a-contractible-free-g-space` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `702bca3571bc04359efa13671b5401cf4fe1c8ce57986dec4fd64a485e819f74` |
| `thm-obstruction-theory-for-lifting-through-a-fibration` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `feb72a62be2d7a99416657e7afe234bacffe2fd86250ac9d7167daaf5547ea10` |
| `thm-poincare-duality-with-the-orientation-local-system` | `local-coefficients-twisted-homology-and-duality` | gpt-5.6-terra | `1cd0259e57c4743518a31367e1ff72297e0163d755f4e088e7ae2b6f2ae96062` |
| `thm-principal-bundles-are-classified-by-maps-to-bg` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `53aca2e45c1fc2948598f2e4e1e6f3aacf0813709f954da5d081030173bfb24f` |
| `thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `22577231cf5192edb727a320cb76e03f4c1fe79f2aba0ed479cd03ff4db05318` |
| `thm-simple-postnikov-stages-are-classified-by-k-invariants` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `6f442e6e63c58eb03e27d26d758c10d975156f5f8e21797099488f449999ad43` |
| `thm-steenrod-squares-are-well-defined-and-natural` | `bocksteins-steenrod-squares-and-cohomology-operations` | gpt-5.6-terra | `93e45953ebea80277177e1c050fb7cb601e9aba27d30e412d882f3eb25f1b501` |
| `thm-the-primary-obstruction-class-is-independent-of-cellular-choices` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `fb7f6b73549ac02e220776c830e0adf946315dc8e444cb4a38341de96b73ef95` |
| `thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton` | `obstruction-theory-postnikov-towers-and-classifying-spaces` | gpt-5.6-terra | `7dfed8ee8b2d2546883bb78d7b94e060409a1f4daa2343644e5e670b493795ad` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 7 — fatal-only judge and reader-warning adjudication, `phase-2-next-21`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Audit one item, record its decision, complete its authorized repair and focused
checks, then continue to the next item. Do not run judges or final adjudicators.
The engine runs repair checks, one rejudge, then one terminal adjudication pass
after every group finishes. On resume, retain completed decisions and repairs.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/phase-2-next-21-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set after preflight.

You may add and author new lemma items when a licensed fatal repair needs a
genuinely missing dependency. Prove each lemma fully, verify unfamiliar or
uncertain mathematics against authoritative sources, and cite it in the
consumer's `deps` and proof. Supporting chains of new lemmas are permitted.
Place the lemmas on an owned page before their consumers and update that page,
the owning batch manifest and proof contract, and the Step-7 scope's group item
list and `by_item` entries. Record the missing dependency and its consuming
fatal repair in your report. This is an authorized scope addition; do not
invent a rejection or adjudication for a new lemma. New lemmas enter the
engine's normal coverage and targeted judgment checks.

Every entry under **Step-6 reader warnings** also requires an owning-group
decision in `research/phase-2-next-21-step7-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-6 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-6 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
The frontier policy permits unbuilt cross-category prerequisites. Check actual
item dependencies and citations before classifying such an absence as fatal;
the scheduling allowance does not excuse a missing fact used in a proof.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/phase-2-next-21-step7-alert-decisions.jsonl`. A defect in another group is a
`research/phase-2-next-21-step7-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-7 baseline or rewrite shared ledgers. Run the Step-7 guard
and scope check, then write `research/phase-2-next-21-alpha-step7-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


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

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.

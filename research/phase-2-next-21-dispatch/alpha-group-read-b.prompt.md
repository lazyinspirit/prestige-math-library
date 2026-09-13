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
role: alpha-group-read
label: b
covers: b

# Step 6 whole-group reading — group **b**, run `phase-2-next-21`

You are the group Alpha for batches **5**, **6**, **9**: 5 A/B pair(s), 10 page(s), 135 item(s).

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

---

# Step 6 — group reading digest, `phase-2-next-21`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

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

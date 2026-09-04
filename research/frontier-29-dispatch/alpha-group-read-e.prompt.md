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
role: alpha-group-read
label: e
covers: e

# Step 7 whole-group reading — group **e**, run `frontier-29`

You are the group Alpha for batches **5**, **16**: 2 A/B pair(s), 4 page(s), 83 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
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
| 5 | `finite-dimensional-normed-spaces-and-riesz-lemma` | A | functional-analysis | 288.051 | `bounded-linear-operators-and-quotient-spaces-examples` |
| 5 | `finite-dimensional-normed-spaces-and-riesz-lemma-examples` | B | functional-analysis | 288.052 | `finite-dimensional-normed-spaces-and-riesz-lemma` |
| 16 | `vector-fields-flows-and-lie-derivatives` | A | differential-geometry | 459 | `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `euclidean-ordinary-differential-equations-with-smooth-dependence` |
| 16 | `vector-fields-flows-and-lie-derivatives-examples` | B | differential-geometry | 460 | `vector-fields-flows-and-lie-derivatives` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-dimensional-normed-spaces-and-riesz-lemma` — Finite Dimensional Normed Spaces and Riesz Lemma (16 item(s))

- `thm-coordinate-map-for-a-finite-dimensional-normed-space` · theorem — A chosen algebraic basis identifies a finite-dimensional normed space with a coordinate space
- `thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent` · theorem — All norms on a finite-dimensional complex normed space are equivalent
- `cor-finite-dimensional-normed-spaces-are-banach` · corollary — Every finite-dimensional normed space is Banach
- `cor-finite-dimensional-subspaces-are-closed` · corollary — A finite-dimensional normed subspace is closed
- `cor-linear-maps-with-finite-dimensional-domain-are-bounded` · corollary — A linear map from a finite-dimensional normed space is bounded
- `lem-riesz-lemma` · lemma — Riesz lemma
- `thm-locally-compact-normed-space-iff-finite-dimensional` · theorem — A normed space is locally compact if and only if it is finite-dimensional
- `lem-dependent-choice-riesz-separated-unit-sequence` · lemma — Under dependent choice, Riesz lemma builds an infinite separated sequence in the unit sphere
- `thm-closed-unit-ball-compact-iff-finite-dimensional` · theorem — The closed unit ball is compact if and only if the normed space is finite-dimensional
- `cor-infinite-dimensional-closed-unit-ball-is-not-compact` · corollary — In an infinite-dimensional normed space the closed unit ball is not compact
- `cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact` · corollary — On an infinite-dimensional normed space, the identity operator is not compact
- `thm-banach-space-no-countably-infinite-hamel-basis` · theorem — A Banach space has no countably infinite Hamel basis
- `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost` · remark — Why the unrestricted complete-metric Baire theorem would overstate the choice cost here
- `def-kuratowski-distance-map` · definition — The based Kuratowski distance map into bounded continuous functions
- `thm-kuratowski-distance-map-is-an-isometry` · theorem — The based Kuratowski distance map is an isometric embedding
- `thm-kuratowski-wojdyslawski-embedding` · theorem — Kuratowski-Wojdyslawski embedding theorem

### `finite-dimensional-normed-spaces-and-riesz-lemma-examples` — Finite Dimensional Normed Spaces and Riesz Lemma — Examples (7 item(s))

- `ex-explicit-equivalence-constants-for-standard-norms-on-kn` · example — Explicit comparison constants for the standard norms on K^n
- `ex-an-infinite-separated-subset-of-the-unit-sphere` · example — An infinite separated subset of the unit sphere
- `cex-heine-borel-fails-in-ell-two` · counterexample — Heine-Borel fails in ell^2
- `cex-polynomial-space-admits-no-complete-norm` · counterexample — The polynomial space admits no complete norm
- `ex-kuratowski-embedding-of-a-finite-metric-space` · example — The Kuratowski embedding of a finite metric space
- `rem-discontinuous-functionals-on-banach-spaces-and-choice` · remark — Discontinuous linear functionals on Banach spaces are not available in ZF + DC
- `ex-choice-free-discontinuous-functional-on-c00` · example — A choice-free discontinuous linear functional on c_00

### `vector-fields-flows-and-lie-derivatives` — Vector Fields Flows and Lie Derivatives (50 item(s))

- `def-smooth-vector-field-as-a-tangent-bundle-section` · definition — A smooth vector field is a smooth section of the tangent bundle
- `prop-smoothness-of-a-vector-field-is-equivalent-to-smooth-coordinate-components` · proposition — Smoothness of a vector field is equivalent to smooth coordinate components
- `def-action-of-a-vector-field-on-smooth-functions` · definition — The action of a vector field on smooth functions
- `prop-a-vector-field-acts-as-a-derivation-of-smooth-functions` · proposition — A vector field acts as a derivation of smooth functions
- `thm-derivations-of-smooth-functions-are-smooth-vector-fields` · theorem — Derivations of smooth functions are exactly smooth vector fields
- `def-f-related-vector-fields` · definition — F-related vector fields
- `prop-f-relatedness-is-equivalent-to-the-derivation-intertwining-law` · proposition — F-relatedness is equivalent to the derivation intertwining law
- `def-pushforward-and-pullback-of-a-vector-field-by-a-diffeomorphism` · definition — Pushforwards and pullbacks of vector fields by a diffeomorphism
- `lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed` · lemma — A vector field along an embedded submanifold extends to a neighbourhood and globally when the submanifold is closed
- `prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field` · proposition — A vector field tangent to an embedded submanifold restricts to a vector field on it
- `def-lie-bracket-of-smooth-vector-fields` · definition — The Lie bracket of smooth vector fields
- `lem-the-commutator-of-vector-field-derivations-is-a-derivation` · lemma — The commutator of vector-field derivations is again a derivation
- `prop-coordinate-formula-for-the-lie-bracket` · proposition — Coordinate formula for the Lie bracket
- `thm-vector-fields-form-a-lie-algebra` · theorem — Smooth vector fields form a Lie algebra under the Lie bracket
- `prop-leibniz-rules-for-the-lie-bracket-with-function-multiples` · proposition — Leibniz rules for the Lie bracket with function multiples
- `prop-related-vector-fields-have-related-lie-brackets` · proposition — Related vector fields have related Lie brackets
- `cor-diffeomorphism-pushforward-preserves-lie-brackets` · corollary — Diffeomorphism pushforward preserves Lie brackets
- `prop-coordinate-vector-fields-commute` · proposition — Coordinate vector fields commute
- `def-integral-curve-of-a-vector-field` · definition — Integral curves of a vector field
- `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves` · theorem — Local existence, uniqueness, and smooth dependence for manifold integral curves
- `thm-unique-maximal-integral-curve-through-each-point` · theorem — Through each point there is a unique maximal integral curve
- `def-complete-vector-field` · definition — Complete vector fields
- `def-local-and-global-flow` · definition — Local and global flows generated by a vector field
- `thm-fundamental-theorem-on-flows` · theorem — The fundamental theorem on flows
- `prop-time-t-flow-maps-are-diffeomorphisms-between-open-domains` · proposition — Time-t flow maps are diffeomorphisms between open domains
- `prop-the-generating-vector-field-is-invariant-under-its-flow` · proposition — The generating vector field is invariant under its own flow
- `prop-a-vector-field-is-complete-if-and-only-if-its-flow-is-global` · proposition — A vector field is complete if and only if its flow is global
- `thm-compactly-supported-vector-fields-are-complete` · theorem — Compactly supported smooth vector fields are complete
- `cor-every-smooth-vector-field-on-a-compact-manifold-is-complete` · corollary — Every smooth vector field on a compact manifold is complete
- `prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it` · proposition — The flow of a vector field tangent to a closed embedded submanifold preserves it
- `thm-flow-box-theorem` · theorem — The flow-box theorem
- `cor-a-nonvanishing-vector-field-has-locally-parallel-integral-curves` · corollary — A nonvanishing vector field has locally parallel integral curves
- `def-flowout-of-an-embedded-submanifold` · definition — The flowout of an embedded submanifold by a vector field
- `thm-flowout-theorem` · theorem — The flowout theorem
- `def-lie-derivative-of-a-function` · definition — The Lie derivative of a function
- `def-lie-derivative-of-a-vector-field` · definition — The Lie derivative of a vector field
- `thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket` · theorem — The Lie derivative of a vector field equals the Lie bracket
- `prop-a-vector-field-is-flow-invariant-if-and-only-if-its-lie-derivative-vanishes` · proposition — A vector field is flow-invariant if and only if its Lie derivative vanishes
- `thm-two-vector-fields-commute-if-and-only-if-their-local-flows-commute` · theorem — Two vector fields commute if and only if their local flows commute
- `prop-related-complete-vector-fields-have-intertwined-flows` · proposition — Related complete vector fields have intertwined flows
- `def-time-dependent-vector-field-and-evolution-operator` · definition — Time-dependent vector fields and their evolution operators
- `thm-time-dependent-vector-fields-have-local-smooth-evolution-operators` · theorem — Time-dependent vector fields have local smooth evolution operators
- `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law` · proposition — Time-dependent evolution satisfies the two-time cocycle law
- `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval` · theorem — Compactly supported time-dependent vector fields have global evolution on a compact time interval
- `fs-every-pointwise-assignment-of-a-tangent-vector-is-a-smooth-vector-field` · false-statement — FALSE: every pointwise assignment of a tangent vector is a smooth vector field
- `fs-every-vector-field-can-be-pushed-forward-by-every-smooth-map` · false-statement — FALSE: every smooth vector field can be pushed forward by every smooth map
- `fs-every-smooth-vector-field-is-complete` · false-statement — FALSE: every smooth vector field is complete
- `fs-the-lie-bracket-is-c-infinity-linear-in-each-vector-field` · false-statement — FALSE: the Lie bracket is C^infty-linear in each vector-field entry
- `fs-the-pointwise-values-x-p-and-y-p-determine-the-value-of-their-lie-bracket-at-p` · false-statement — FALSE: the point values X_p and Y_p determine the bracket value [X,Y]_p
- `fs-vanishing-lie-bracket-implies-the-vector-fields-are-pointwise-linearly-dependent` · false-statement — FALSE: a vanishing Lie bracket forces the vector fields to be pointwise linearly dependent

### `vector-fields-flows-and-lie-derivatives-examples` — Vector Fields Flows and Lie Derivatives — Examples (10 item(s))

- `ex-constant-vector-fields-and-translation-flows` · example — Constant vector fields have translation flows
- `ex-the-radial-vector-field-and-dilation-flow` · example — The radial vector field has the dilation flow
- `ex-the-rotation-vector-field-and-circle-flow` · example — The planar rotation field has the circle rotation flow
- `ex-a-vector-field-with-finite-time-escape` · example — The vector field x^2 d/dx has finite-time escape
- `ex-a-compactly-supported-cutoff-of-an-incomplete-vector-field-is-complete` · example — A compactly supported cutoff of an incomplete vector field is complete
- `ex-coordinate-formula-for-a-nonzero-lie-bracket` · example — A coordinate computation of a nonzero Lie bracket
- `ex-commuting-coordinate-fields-and-their-commuting-flows` · example — Commuting coordinate fields have commuting flows
- `cex-pointwise-values-do-not-determine-the-lie-bracket-at-a-point` · counterexample — Two pairs of vector fields can agree at a point and still have different bracket values there
- `ex-a-time-dependent-translation-field-and-its-evolution-operator` · example — A time-dependent translation field and its evolution operator
- `ex-the-flow-box-coordinates-for-a-nonconstant-planar-field` · example — Flow-box coordinates for a nonconstant planar field

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-29`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.

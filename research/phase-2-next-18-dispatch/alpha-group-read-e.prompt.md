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
group work, `research/phase-2-next-18-alpha-groups.json` is the assignment: it permits at
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

run: phase-2-next-18
role: alpha-group-read
label: e
covers: e

# Step 6 whole-group reading — group **e**, run `phase-2-next-18`

You are the group Alpha for batches **1**: 2 A/B pair(s), 4 page(s), 80 item(s).

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
| 1 | `schauder-bases-approximation-and-banach-space-pathologies` | A | functional-analysis | 288.067 | `reflexivity-and-eberlein-smulian` |
| 1 | `schauder-bases-approximation-and-banach-space-pathologies-examples` | B | functional-analysis | 288.068 | `schauder-bases-approximation-and-banach-space-pathologies` |
| 1 | `banach-valued-integration-and-the-radon-nikodym-property` | A | functional-analysis | 288.069 | `schauder-bases-approximation-and-banach-space-pathologies` |
| 1 | `banach-valued-integration-and-the-radon-nikodym-property-examples` | B | functional-analysis | 288.07 | `banach-valued-integration-and-the-radon-nikodym-property` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `schauder-bases-approximation-and-banach-space-pathologies` — Schauder Bases Approximation and Banach Space Pathologies (35 item(s))

- `def-schauder-basis-and-coordinate-functionals` · definition — Schauder basis and coordinate functionals
- `def-partial-sum-projections-and-basis-constant` · definition — Partial sum projections and basis constant
- `lem-schauder-coefficient-space-is-banach` · lemma — Schauder coefficient space is banach
- `thm-coordinate-functionals-of-a-schauder-basis-are-bounded` · theorem — Coordinate functionals of a schauder basis are bounded
- `cor-banach-space-with-a-schauder-basis-is-separable` · corollary — Banach space with a schauder basis is separable
- `def-unconditional-convergence-of-a-banach-space-series` · definition — Unconditional convergence of a banach space series
- `def-unconditional-and-conditional-basis` · definition — Unconditional and conditional basis
- `thm-unconditional-convergence-equivalences` · theorem — Unconditional convergence equivalences
- `def-approximation-property-and-bounded-approximation-property` · definition — Approximation property and bounded approximation property
- `lem-pointwise-convergent-uniformly-bounded-operators-converge-uniformly-on-compact-sets` · lemma — Pointwise convergent uniformly bounded operators converge uniformly on compact sets
- `thm-schauder-basis-implies-bounded-approximation-property` · theorem — Schauder basis implies bounded approximation property
- `def-finitely-additive-charge-and-total-variation-on-the-power-set-of-n` · definition — Finitely additive charge and total variation on the power set of n
- `lem-finite-range-sequences-are-uniformly-dense-in-ell-infinity` · lemma — Finite range sequences are uniformly dense in ell infinity
- `def-finitely-additive-integral-on-ell-infinity` · definition — Finitely additive integral on ell infinity
- `lem-finitely-additive-integral-is-well-defined-and-isometric` · lemma — Finitely additive integral is well defined and isometric
- `thm-dual-of-ell-infinity-is-ba` · theorem — Dual of ell infinity is ba
- `thm-existence-of-a-shift-invariant-mean-on-bounded-sequences` · theorem — Existence of a shift invariant mean on bounded sequences
- `cor-countably-additive-part-of-ba-is-ell-one` · corollary — Countably additive part of ba is ell one
- `def-james-space` · definition — James space
- `lem-james-formula-defines-a-norm` · lemma — James formula defines a norm
- `thm-james-space-is-complete-and-separable` · theorem — James space is complete and separable
- `lem-james-space-dual-and-bidual-identification` · lemma — James space dual and bidual identification
- `thm-canonical-image-of-james-space-has-codimension-one` · theorem — Canonical image of james space has codimension one
- `thm-james-space-is-isometrically-isomorphic-to-its-bidual` · theorem — James space is isometrically isomorphic to its bidual
- `def-enflo-finite-support-localized-trace-system` · definition — Enflo finite-support and localized-trace system
- `lem-enflo-quantitative-trace-obstruction-to-the-approximation-property` · lemma — Quantitative trace obstruction to the approximation property
- `lem-enflo-walsh-block-estimates` · lemma — Enflo Walsh block estimates
- `lem-enflo-symmetry-averaging-and-block-assembly` · lemma — Enflo symmetry averaging and block assembly
- `thm-reflexive-approximation-property-implies-metric-approximation-property` · theorem — Reflexive approximation property implies metric approximation property
- `thm-enflo-separable-reflexive-banach-space-without-the-approximation-property` · theorem — A separable reflexive Banach space without the approximation property
- `rem-enflo-space-without-the-approximation-property` · remark — Enflo space without the approximation property
- `lem-finite-dimensional-auerbach-basis` · lemma — Finite dimensional auerbach basis
- `lem-dvoretzky-rogers-finite-block-estimate` · lemma — Dvoretzky rogers finite block estimate
- `thm-dvoretzky-rogers` · theorem — Dvoretzky rogers
- `cor-absolute-and-unconditional-convergence-agree-universally-iff-finite-dimensional` · corollary — Absolute and unconditional convergence agree universally iff finite dimensional

### `schauder-bases-approximation-and-banach-space-pathologies-examples` — Schauder Bases Approximation and Banach Space Pathologies — Examples (7 item(s))

- `ex-standard-schauder-bases-of-c0-and-ell-p` · example — Standard schauder bases of c0 and ell p
- `cex-standard-unit-vectors-are-not-a-schauder-basis-of-ell-infinity` · counterexample — Standard unit vectors are not a schauder basis of ell infinity
- `ex-the-summing-basis-of-c0-is-conditional` · example — The summing basis of c0 is conditional
- `cex-reordering-a-conditional-basis-can-destroy-convergence` · counterexample — Reordering a conditional basis can destroy convergence
- `ex-banach-limit-revisited-as-a-charge` · example — Banach limit revisited as a charge
- `cex-ell-one-and-ell-infinity-are-not-reflexive` · counterexample — Ell one and ell infinity are not reflexive
- `rem-subspaces-of-classical-spaces-can-fail-ap` · remark — Subspaces of classical spaces can fail ap

### `banach-valued-integration-and-the-radon-nikodym-property` — Banach Valued Integration and the Radon Nikodym Property (30 item(s))

- `def-banach-valued-simple-function-and-integral` · definition — Banach valued simple function and integral
- `lem-banach-valued-simple-integral-is-well-defined` · lemma — Banach valued simple integral is well defined
- `def-strongly-measurable-banach-valued-function` · definition — Strongly measurable banach valued function
- `thm-pettis-measurability-criterion-for-strong-measurability` · theorem — Pettis measurability criterion for strong measurability
- `def-bochner-integrable-function` · definition — Bochner integrable function
- `thm-bochner-integrability-criterion` · theorem — Bochner integrability criterion
- `lem-bochner-integral-norm-inequality` · lemma — Bochner integral norm inequality
- `thm-bochner-dominated-convergence` · theorem — Bochner dominated convergence
- `thm-bounded-linear-maps-commute-with-bochner-integration` · theorem — Bounded linear maps commute with bochner integration
- `def-banach-valued-vector-measure-and-variation` · definition — Banach valued vector measure and variation
- `lem-bounded-variation-of-a-vector-measure-is-a-finite-measure` · lemma — Bounded variation of a vector measure is a finite measure
- `lem-bochner-density-defines-an-absolutely-continuous-vector-measure` · lemma — Bochner density defines an absolutely continuous vector measure
- `def-radon-nikodym-property` · definition — Radon nikodym property
- `def-dentable-bounded-set-and-slice` · definition — Dentable bounded set and slice
- `lem-dentable-average-ranges-give-vector-measure-densities` · lemma — Dentable average ranges give vector measure densities
- `lem-nondentability-produces-a-vector-measure-without-density` · lemma — Nondentability produces a vector measure without density
- `thm-rnp-dentability-characterization` · theorem — Rnp dentability characterization
- `lem-rnp-is-invariant-under-banach-space-isomorphism` · lemma — Rnp is invariant under banach space isomorphism
- `lem-rnp-is-separably-determined` · lemma — Rnp is separably determined
- `lem-rnp-may-be-tested-on-the-lebesgue-interval` · lemma — Rnp may be tested on the lebesgue interval
- `lem-lipschitz-curves-and-dominated-interval-vector-measures` · lemma — Lipschitz curves and dominated interval vector measures
- `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` · lemma — AC supplies the countable and dependent choices used in Banach integration
- `thm-rnp-lipschitz-differentiability-characterization` · theorem — Rnp lipschitz differentiability characterization
- `thm-separable-dual-spaces-have-rnp` · theorem — Separable dual spaces have rnp
- `thm-hilbert-spaces-are-reflexive-by-riesz-representation` · theorem — Hilbert spaces are reflexive by riesz representation
- `thm-reflexive-spaces-have-rnp` · theorem — Reflexive spaces have rnp
- `thm-c0-fails-the-radon-nikodym-property` · theorem — C0 fails the radon nikodym property
- `thm-l-one-of-zero-one-fails-rnp` · theorem — L one of zero one fails rnp
- `cor-c0-is-not-isomorphic-to-a-dual-space` · corollary — C0 is not isomorphic to a dual space
- `thm-dunford-pettis-for-l-one-on-a-finite-measure-space` · theorem — Dunford pettis for l one on a finite measure space

### `banach-valued-integration-and-the-radon-nikodym-property-examples` — Banach Valued Integration and the Radon Nikodym Property — Examples (8 item(s))

- `ex-bochner-integral-of-a-countably-valued-function` · example — Bochner integral of a countably valued function
- `cex-weakly-measurable-need-not-be-strongly-measurable` · counterexample — Weakly measurable need not be strongly measurable
- `ex-vector-measure-induced-by-an-l-one-function` · example — Vector measure induced by an l one function
- `ex-hilbert-spaces-have-rnp` · example — Hilbert spaces have rnp
- `cex-c0-unit-ball-is-not-dentable` · counterexample — C0 unit ball is not dentable
- `rem-l-one-sequence-versus-l-one-nonatomic-rnp` · remark — L one sequence versus l one nonatomic rnp
- `rem-rnp-is-not-the-scalar-radon-nikodym-theorem` · remark — Rnp is not the scalar radon nikodym theorem
- `ex-dunford-pettis-uniformly-integrable-and-concentrating-families` · example — Dunford pettis uniformly integrable and concentrating families

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-18`

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

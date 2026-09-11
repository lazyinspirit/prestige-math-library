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
group work, `research/phase-2-next-20-alpha-groups.json` is the assignment: it permits at
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

run: phase-2-next-20
role: alpha-group-read
label: f
covers: f

# Step 6 whole-group reading — group **f**, run `phase-2-next-20`

You are the group Alpha for batches **10**, **11**: 3 A/B pair(s), 6 page(s), 66 item(s).

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
| 10 | `finite-weyl-invariants-bruhat-and-kostant-harmonics` | A | lie-theory | 510.0002 | `semisimple-lie-algebras-cohomology-and-levi-theory`, `cartan-subalgebras-and-root-space-decompositions`, `root-systems-dynkin-diagrams-and-cartan-killing-classification`, `highest-weight-theory-for-complex-semisimple-lie-algebras`, `depth-and-cohen-macaulay-modules` |
| 10 | `finite-weyl-invariants-bruhat-and-kostant-harmonics-examples` | B | lie-theory | 510.0004 | `finite-weyl-invariants-bruhat-and-kostant-harmonics` |
| 10 | `integrable-highest-weight-kac-moody-modules` | A | lie-theory | 510.027 | `kac-moody-algebras-from-generalized-cartan-matrices`, `verma-modules-and-shapovalov-forms` |
| 10 | `integrable-highest-weight-kac-moody-modules-examples` | B | lie-theory | 510.028 | `integrable-highest-weight-kac-moody-modules` |
| 11 | `vertices-sources-and-the-green-correspondence` | A | representation-theory | 510.059 | `blocks-defect-groups-and-the-brauer-homomorphism`, `modular-representations-and-projective-covers` |
| 11 | `vertices-sources-and-the-green-correspondence-examples` | B | representation-theory | 510.06 | `vertices-sources-and-the-green-correspondence` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `finite-weyl-invariants-bruhat-and-kostant-harmonics` — Finite Weyl Invariants, Bruhat Order, and Kostant Harmonics (26 item(s))

- `def-finite-weyl-root-system-lattice-and-chamber-conventions` · definition — Finite Weyl root system, lattice and chamber conventions
- `lem-finite-weyl-positive-roots-and-simple-reflections` · lemma — Finite Weyl positive roots and simple reflections
- `lem-finite-weyl-strong-exchange-and-deletion` · lemma — Finite weyl strong exchange and deletion
- `lem-finite-weyl-closed-chambers-and-stabilizers` · lemma — Finite Weyl closed chambers and stabilizers
- `def-bruhat-order-on-a-finite-weyl-group` · definition — Bruhat order on a finite weyl group
- `def-weyl-orbit-sum-in-a-group-algebra` · definition — Weyl orbit sum in a group algebra
- `lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants` · lemma — Weyl orbit sums form a basis of finite weyl invariants
- `def-finite-linear-invariant-and-coinvariant-polynomial-algebras` · definition — Finite linear invariant and coinvariant polynomial algebras
- `lem-finite-linear-group-invariant-polynomials-separate-orbits` · lemma — Finite linear group invariant polynomials separate orbits
- `def-weyl-discriminant-and-reflecting-hyperplane-arrangement` · definition — Weyl discriminant and reflecting hyperplane arrangement
- `lem-weyl-anti-invariants-are-divisible-by-the-discriminant` · lemma — Weyl anti invariants are divisible by the discriminant
- `lem-finite-reflection-invariant-generators-are-algebraically-independent` · lemma — Finite reflection invariant generators are algebraically independent
- `lem-reflection-basic-invariants-form-a-regular-sequence` · lemma — Reflection basic invariants form a regular sequence
- `lem-weyl-coinvariant-hilbert-series-has-order-w-dimension` · lemma — Weyl coinvariant hilbert series has order w dimension
- `thm-chevalley-shephard-todd-for-finite-weyl-groups` · theorem — Chevalley shephard todd for finite weyl groups
- `def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action` · definition — Finite semisimple Lie algebras and the symmetric adjoint action
- `lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy` · lemma — Engel, the trace criterion, and Killing nondegeneracy
- `lem-finite-lie-triangularization-and-rank-one-complete-reducibility` · lemma — Finite Lie triangularization and rank-one complete reducibility
- `lem-finite-semisimple-cartan-root-and-string-structure` · lemma — Finite semisimple Cartan, root and string structure
- `lem-finite-semisimple-pbw-and-highest-weight-construction` · lemma — Finite semisimple PBW and highest-weight construction
- `def-kostant-harmonic-subspace-of-the-symmetric-algebra` · definition — Kostant harmonic subspace of the symmetric algebra
- `lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums` · lemma — Highest-weight characters are unitriangular in Weyl orbit sums
- `lem-kostant-harmonics-give-an-invariant-polynomial-complement` · lemma — Kostant harmonics give an invariant polynomial complement
- `lem-local-chevalley-restriction-for-kostant-freeness` · lemma — Local Chevalley restriction for Kostant freeness
- `thm-kostant-harmonic-decomposition-of-the-symmetric-algebra` · theorem — Kostant harmonic decomposition of the symmetric algebra
- `lem-filtered-freeness-lifts-from-associated-graded-algebras` · lemma — Filtered freeness lifts from associated graded algebras

### `finite-weyl-invariants-bruhat-and-kostant-harmonics-examples` — Finite Weyl Invariants, Bruhat Order, and Kostant Harmonics: Examples (3 item(s))

- `ex-s3-bruhat-order-and-inversion-sets` · example — S3 bruhat order and inversion sets
- `ex-a2-coinvariant-algebra-and-basic-invariants` · example — A2 coinvariant algebra and basic invariants
- `ex-sl2-kostant-harmonic-decomposition` · example — Sl2 kostant harmonic decomposition

### `integrable-highest-weight-kac-moody-modules` — Integrable Highest Weight Kac Moody Modules (20 item(s))

- `thm-universal-property-and-pbw-character-of-kac-moody-verma-modules` · theorem — Universal property and pbw character of kac moody verma modules
- `thm-kac-moody-verma-module-has-a-unique-simple-quotient` · theorem — Kac moody verma module has a unique simple quotient
- `def-kac-moody-integral-and-dominant-integral-weights` · definition — Kac moody integral and dominant integral weights
- `def-integrable-kac-moody-module` · definition — Integrable kac moody module
- `lem-integrability-can-be-checked-on-simple-root-sl2-subalgebras` · lemma — Integrability can be checked on simple root sl2 subalgebras
- `lem-dominance-is-necessary-for-an-integrable-highest-weight-module` · lemma — Dominance is necessary for an integrable highest weight module
- `lem-simple-root-power-relations-generate-the-integrable-quotient` · lemma — Simple root power relations generate the integrable quotient
- `thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules` · theorem — Integrability criterion for simple highest weight kac moody modules
- `prop-integrable-weight-sets-and-multiplicities-are-weyl-invariant` · proposition — Integrable weight sets and multiplicities are weyl invariant
- `def-kac-moody-real-coroot-inversions` · definition — Real coroot signs, word length and inversion sets
- `lem-kac-moody-reduced-words-and-coroot-signs` · lemma — Reduced words, root signs and finite coroot inversions
- `lem-kac-moody-chamber-boundary-stabilizers` · lemma — Dominant representatives, wall stabilizers and terminating reflection descent
- `prop-every-integrable-weight-is-weyl-conjugate-toward-the-dominant-chamber` · proposition — Every integrable weight is weyl conjugate toward the dominant chamber
- `lem-an-integrable-o-module-is-generated-by-dominant-maximal-weights` · lemma — An integrable o module is generated by dominant maximal weights
- `lem-casimir-separates-comparable-dominant-primitive-weights` · lemma — Casimir separates comparable dominant primitive weights
- `thm-complete-reducibility-of-integrable-kac-moody-o-modules` · theorem — Complete reducibility of integrable kac moody o modules
- `cor-tensor-products-of-integrable-highest-weight-modules-decompose` · corollary — Tensor products of integrable highest weight modules decompose
- `lem-affine-central-coroot-from-the-transpose-null-ray` · lemma — Affine central coroot from the transpose null ray
- `prop-integrable-affine-highest-weights-have-nonnegative-integral-level` · proposition — Integrable affine highest weights have nonnegative integral level
- `prop-level-zero-integrable-affine-highest-weight-simples-are-one-dimensional` · proposition — Level zero integrable affine highest weight simples are one dimensional

### `integrable-highest-weight-kac-moody-modules-examples` — Integrable Highest Weight Kac Moody Modules — Examples (5 item(s))

- `ex-integrable-highest-weight-modules-for-rank-one-gcm` · example — Integrable highest weight modules for rank one gcm
- `ex-the-basic-level-one-weight-of-affine-sl2` · example — The basic level one weight of affine sl2
- `ex-simple-root-string-in-an-integrable-kac-moody-module` · example — Simple root string in an integrable kac moody module
- `cex-a-kac-moody-verma-module-is-not-integrable-in-general` · counterexample — A kac moody verma module is not integrable in general
- `cex-local-nilpotence-of-only-the-ei-does-not-imply-integrability` · counterexample — Local nilpotence of only the ei does not imply integrability

### `vertices-sources-and-the-green-correspondence` — Vertices Sources and the Green Correspondence (9 item(s))

- `def-green-exceptional-intersection-families` · definition — Green exceptional intersection families
- `lem-green-exceptional-family-containment-and-fusion` · lemma — Green exceptional family containment and fusion
- `lem-green-vertex-retention-and-inducing-lift` · lemma — Green vertex retention and inducing lift
- `lem-green-mackey-intersections-force-proper-vertices` · lemma — Green mackey intersections force proper vertices
- `lem-green-restriction-has-one-distinguished-summand` · lemma — Green restriction has one distinguished summand
- `lem-green-induction-has-one-distinguished-summand` · lemma — Green induction has one distinguished summand
- `lem-green-distinguished-summands-are-mutually-inverse` · lemma — Green distinguished summands are mutually inverse
- `thm-green-correspondence-with-exceptional-families` · theorem — Green correspondence with exceptional families
- `cor-green-correspondence-for-modules-of-vertex-exactly-p` · corollary — Green correspondence for modules of vertex exactly p

### `vertices-sources-and-the-green-correspondence-examples` — Vertices Sources and the Green Correspondence — Examples (3 item(s))

- `ex-green-restriction-summand-with-the-same-vertex` · example — Green restriction summand with the same vertex
- `ex-green-correspondence-for-a-trivial-intersection-subgroup` · example — Green correspondence for a trivial intersection subgroup
- `ex-green-correspondence-identity-boundaries` · example — Green correspondence identity boundaries

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-20`

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

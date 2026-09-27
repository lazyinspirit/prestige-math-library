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
group work, `research/frontier-35-ten-categories-alpha-groups.json` is the assignment: it permits at
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

run: frontier-35-ten-categories
role: alpha-group-read
label: f
covers: f

# Step 6 whole-group reading — group **f**, run `frontier-35-ten-categories`

You are the group Alpha for batches **12**, **14**: 4 A/B pair(s), 8 page(s), 84 item(s).

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
| 12 | `the-ip-equals-pspace-theorem` | A | computability-theory | 643 | `arithmetization-and-the-sum-check-protocol`, `space-complexity-savitch-and-tqbf`, `chebyshev-bounds-and-mertens-theorems` |
| 12 | `the-ip-equals-pspace-theorem-examples` | B | computability-theory | 644 | `the-ip-equals-pspace-theorem` |
| 12 | `gap-amplification-and-assignment-testing` | A | computability-theory | 647 | `expander-graphs-and-constraint-graphs`, `the-cook-levin-theorem`, `randomized-complexity-and-amplification`, `algebraic-extensions-degree-and-finite-fields`, `pi-the-equivalent-characterizations`, `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws`, `arithmetization-and-the-sum-check-protocol` |
| 12 | `gap-amplification-and-assignment-testing-examples` | B | computability-theory | 648 | `gap-amplification-and-assignment-testing` |
| 14 | `graded-bimodules-and-tensor-functors` | A | homological-algebra | 717 | `tensor-products-of-modules`, `free-modules-and-exact-sequences`, `abelian-categories`, `subobject-lattices-generators-and-the-grothendieck-axioms`, `rees-modules-artin-rees-and-hilbert-samuel-theory`, `tor-flatness-and-global-dimension` |
| 14 | `graded-bimodules-and-tensor-functors-examples` | B | homological-algebra | 718 | `graded-bimodules-and-tensor-functors` |
| 14 | `homological-gaussian-elimination` | A | homological-algebra | 728.1 | `chain-homotopy-and-the-homotopy-category` |
| 14 | `homological-gaussian-elimination-examples` | B | homological-algebra | 728.2 | `homological-gaussian-elimination` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-ip-equals-pspace-theorem` — The IP = PSPACE Theorem (20 item(s))

- `def-qbf-arithmetization-operators` · definition — Field arithmetization of QBF quantifiers
- `lem-quantifier-polynomials-agree-on-booleans` · lemma — Quantifier polynomials agree with QBF semantics on Boolean assignments
- `def-multilinearization-operator` · definition — Multilinearization in one variable
- `lem-multilinearization-preserves-boolean-values` · lemma — Multilinearization preserves Boolean values and bounds individual degree
- `lem-ordered-arithmetization-evaluates-to-the-truth-value` · lemma — The multilinearized ordered arithmetization evaluates to the quantified Boolean truth value
- `lem-efficient-prime-field-for-a-polynomial-soundness-budget` · lemma — A polynomial-size prime field meets the soundness budget
- `def-shamir-protocol-for-tqbf` · definition — Shamir interactive protocol for TQBF
- `lem-honest-prover-maintains-the-claim-invariant` · lemma — Honest prover maintains the field-value claim
- `lem-each-round-has-polynomial-communication` · lemma — Explicit communication, round, and evaluation bounds
- `lem-shamir-protocol-has-perfect-completeness` · lemma — Shamir protocol has perfect completeness
- `lem-first-false-claim-survives-with-root-bound-probability` · lemma — A false field claim survives one round with bounded probability
- `lem-total-soundness-follows-by-union-bound` · lemma — Total TQBF soundness by the first repaired claim
- `lem-shamir-qbf-verifier-runs-in-polynomial-time` · lemma — Shamir verifier runs in polynomial time
- `thm-tqbf-has-a-polynomial-round-interactive-proof` · theorem — TQBF has a polynomial-round interactive proof
- `thm-pspace-is-contained-in-ip` · theorem — PSPACE is contained in IP
- `thm-ip-equals-pspace` · theorem — IP equals PSPACE
- `cor-ip-is-closed-under-complement` · corollary — IP is closed under complement
- `thm-ip-can-be-given-perfect-completeness` · theorem — IP admits perfect completeness
- `fs-ip-equals-pspace-needs-no-degree-reduction` · false-statement — IP = PSPACE needs no degree reduction in this arithmetization
- `fs-the-verifier-trusts-the-final-field-value` · false-statement — The verifier can trust the final field value

### `the-ip-equals-pspace-theorem-examples` — The IP = PSPACE Theorem: Examples and Counterexamples (4 item(s))

- `ex-two-quantifier-qbf-arithmetization-transcript` · example — A two-quantifier field transcript
- `ex-multilinearization-preserves-boolean-values` · example — A concrete multilinearization calculation
- `ex-ip-can-be-given-perfect-completeness` · example — Perfect completeness through a TQBF reduction
- `cex-ip-equals-pspace-needs-no-degree-reduction` · counterexample — Exponential degree without multilinearization

### `gap-amplification-and-assignment-testing` — Gap Amplification and Assignment Testing (31 item(s))

- `def-gap-preserving-csp-reduction` · definition — Complete uniform gap-preserving CSP reductions
- `lem-complete-linear-blowup-reductions-compose` · lemma — Complete linear-blowup reductions compose
- `def-degree-reduction-by-expander-clouds` · definition — Degree reduction by expander incidence clouds
- `lem-cloud-consistency-forces-near-constant-labels` · lemma — Cloud violations control distance to plurality labels
- `thm-degree-reduction-preserves-unsatisfaction` · theorem — Degree reduction preserves unsatisfaction quantitatively
- `def-constraint-graph-powering` · definition — Constraint graph powering with local-view labels
- `lem-canonical-local-view-lift-preserves-perfect-satisfiability` · lemma — Canonical local views preserve perfect satisfiability
- `def-plurality-decoding-of-powered-local-views` · definition — Plurality decoding of powered local views
- `lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws` · lemma — Nearby lazy-walk lengths have close endpoint laws
- `lem-plurality-consistency-along-middle-walk-positions` · lemma — Plurality opinions agree with local views in middle positions
- `lem-expander-walk-violated-edge-collision-bound` · lemma — Violating-edge positions have controlled collisions
- `lem-overlap-controlled-union-lower-bound` · lemma — Overlap control gives a union lower bound
- `lem-powering-preserves-perfect-satisfiability` · lemma — Powering preserves perfect satisfiability
- `lem-powering-amplifies-small-gaps` · lemma — Powering amplifies a small unsatisfaction gap
- `thm-gap-amplification-step` · theorem — A complete uniform graph gap-amplification step
- `def-explicit-constant-rate-constant-distance-code` · definition — Explicit binary codes of constant rate and distance
- `def-reed-solomon-outer-code-and-binary-linear-inner-code` · definition — Reed–Solomon outer code and binary linear inner code
- `lem-reed-solomon-outer-code-has-constant-rate-and-distance` · lemma — Reed–Solomon outer code has constant rate and distance
- `lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation` · lemma — A random inner linear code has fewer than one bad word in expectation
- `lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time` · lemma — Conditional expectation constructs the inner code deterministically
- `lem-concatenated-code-multiplies-rate-and-distance` · lemma — Concatenation multiplies rate and relative distance
- `thm-explicit-code-construction-and-distance` · theorem — A polynomial-time explicit constant-rate constant-distance code
- `def-assignment-tester-and-rejection-ratio` · definition — Assignment tester and rejection ratio
- `def-hadamard-linearity-constraint-system` · definition — Hadamard linearity constraints
- `thm-linearity-test-rejects-proportionally-to-distance` · theorem — BLR rejection is proportional to distance from linearity
- `def-quadratic-consistency-test` · definition — Quadratic tensor consistency test
- `lem-quadratic-test-soundness` · lemma — Quadratic tensor test rejects an inconsistent tensor
- `lem-circuit-satisfaction-is-linear-quadratic-consistency` · lemma — Circuit satisfiability becomes linear-quadratic consistency
- `lem-exponential-base-assignment-tester-from-quadratic-oracles` · lemma — An exponential-size constant-query base assignment tester
- `lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester` · lemma — Gate constraints are a weak assignment tester
- `fs-repeating-constraints-amplifies-the-gap` · false-statement — Repeating constraints amplifies the gap

### `gap-amplification-and-assignment-testing-examples` — Gap Amplification and Assignment Testing: Examples and Counterexamples (3 item(s))

- `ex-degree-reduction-preserves-unsatisfaction` · example — A cloud rounding calculation
- `cex-repeating-constraints-amplifies-the-gap` · counterexample — Duplicating constraints does not change UNSAT
- `ex-plurality-decoding-of-powered-local-views` · example — Numerical local-view plurality decoding

### `graded-bimodules-and-tensor-functors` — Graded Bimodules and Tensor Functors (9 item(s))

- `def-graded-ring-module-bimodule-and-internal-shift` · definition — Associative graded algebras, bimodules, and internal shifts
- `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise` · lemma — Graded modules with degree-zero maps form an abelian category
- `def-graded-balanced-tensor-product-and-homogeneous-hom` · definition — Graded balanced tensor product and homogeneous Hom
- `lem-graded-balanced-tensor-and-shift-isomorphisms` · lemma — Graded associativity, units, and internal-shift tensor isomorphisms
- `def-finitely-generated-graded-projective-module` · definition — Finite graded projective modules
- `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules` · theorem — Finite graded projectives are finite shifted-free summands
- `thm-bimodule-tensor-exactness-and-projective-preservation` · theorem — Bimodule tensor exactness and preservation of finite projectives have separate hypotheses
- `thm-graded-bimodule-tensor-hom-adjunction` · theorem — Associative and graded bimodule tensor–Hom adjunction
- `prop-restriction-and-extension-of-scalars-on-graded-module-categories` · proposition — Restriction and extension along a graded algebra map

### `graded-bimodules-and-tensor-functors-examples` — Graded Bimodules and Tensor Functors — Examples (3 item(s))

- `ex-internal-shift-versus-a-change-of-degree` · example — An internal shift reverses the published commutative twist parameter
- `ex-right-flat-bimodule-with-nonprojective-output` · example — A right-flat tensor bimodule can have nonprojective output
- `ex-left-projective-bimodule-with-nonexact-tensor` · example — A left-projective tensor bimodule need not be right-flat

### `homological-gaussian-elimination` — Homological Gaussian Elimination (9 item(s))

- `def-complex-homotopy-and-contractibility-in-an-additive-category` · definition — Complexes, homotopies and contractibility in an additive category
- `def-invertible-differential-block-and-schur-complement-reduction` · definition — An invertible cochain differential block and its candidate reduction
- `lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block` · lemma — Triangular basis changes diagonalize an invertible differential block
- `thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex` · theorem — Gaussian elimination splits a contractible two-term complex
- `prop-homological-gaussian-elimination-gives-a-strong-deformation-retract` · proposition — Explicit strong deformation retract from Gaussian cancellation
- `cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology` · corollary — Gaussian cancellation preserves homotopy type and abelian-category homology
- `thm-finite-iterated-homological-gaussian-elimination` · theorem — Finite iteration of current invertible-block cancellations
- `prop-additive-functors-preserve-chosen-homological-gaussian-cancellations` · proposition — Additive functors preserve chosen Gaussian cancellations
- `prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits` · proposition — Transferred maps are functorial up to homotopy, with strict naturality limits

### `homological-gaussian-elimination-examples` — Homological Gaussian Elimination — Examples (5 item(s))

- `ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign` · example — A unit pivot forces the minus Schur sign
- `ex-neighbouring-differentials-after-a-gaussian-basis-change` · example — Neighboring differentials transform with the pivot basis changes
- `ex-two-finite-cancellation-orders-and-their-composite-retracts` · example — Two adjacent noncomposable Gaussian pivots in either finite order
- `cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled` · counterexample — A nonunit differential entry cannot be cancelled
- `cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps` · counterexample — Gaussian transfer is not strictly functorial on arbitrary cochain maps

## Your seams

Another group's pages depend on yours:

- `graded-quiver-algebras-and-derived-tensor-functors` (group c) requires your `graded-bimodules-and-tensor-functors`
- `type-a-soergel-bimodules-and-hecke-categorification` (group c) requires your `graded-bimodules-and-tensor-functors`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 — group reading digest, `frontier-35-ten-categories`

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

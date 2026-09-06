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
group work, `research/frontier-31a-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
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

run: frontier-31a
role: alpha-adjudicate
label: step8-d
covers: 21, 22

# Step 8 adjudication — group **d**, run `frontier-31a`

You are the group Alpha for batches **21**, **22**: 3 A/B pair(s), 6 page(s), 66 item(s), 31 open rejection(s) over 31 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-31a-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/frontier-31a-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 21 | `the-arithmetical-hierarchy-and-posts-theorem` | A | computability-theory | 613 | `acceptable-numberings-smn-and-the-recursion-theorem` |
| 21 | `the-arithmetical-hierarchy-and-posts-theorem-examples` | B | computability-theory | 614 | `the-arithmetical-hierarchy-and-posts-theorem` |
| 21 | `time-and-space-hierarchy-theorems` | A | computability-theory | 627 | `space-complexity-savitch-and-tqbf`, `diagonalization-and-the-halting-problem` |
| 21 | `time-and-space-hierarchy-theorems-examples` | B | computability-theory | 628 | `time-and-space-hierarchy-theorems` |
| 22 | `logarithmic-space-nl-and-reachability` | A | computability-theory | 629 | `time-and-space-hierarchy-theorems` |
| 22 | `logarithmic-space-nl-and-reachability-examples` | B | computability-theory | 630 | `logarithmic-space-nl-and-reachability` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-arithmetical-hierarchy-and-posts-theorem` — The Arithmetical Hierarchy and Post's Theorem (18 item(s))

- `def-bounded-arithmetic-formula` · definition — Bounded arithmetic formulas
- `def-sigma-n-pi-n-and-delta-n-sets` · definition — The classes Sigma_n^0, Pi_n^0, and Delta_n^0
- `lem-bounded-quantifiers-preserve-primitive-recursiveness` · lemma — Bounded quantifiers preserve primitive recursiveness
- `thm-sigma-one-sets-are-exactly-ce-sets` · theorem — Sigma_1^0 sets are exactly the computably enumerable sets
- `cor-delta-one-sets-are-exactly-decidable` · corollary — Delta_1^0 sets are exactly the decidable sets
- `lem-prenex-normalization-preserves-level` · lemma — Prenex normalization preserves the arithmetical level
- `def-arithmetical-level-completeness` · definition — Completeness at an arithmetical level
- `thm-halting-is-sigma-one-complete` · theorem — The halting set is Sigma_1^0-complete
- `thm-totality-is-pi-two-complete` · theorem — The totality set is Pi_2^0-complete
- `def-relative-computability-and-enumerability` · definition — Relative computability and relative enumerability
- `lem-oracle-computation-has-a-finite-query-witness` · lemma — An oracle computation has a finite query witness
- `thm-posts-theorem` · theorem — Post's theorem
- `lem-diagonal-set-at-each-level` · lemma — A diagonal set at each arithmetical level
- `thm-arithmetical-hierarchy-is-strict` · theorem — The arithmetical hierarchy is strict
- `def-limit-computable-function` · definition — Limit-computable functions
- `thm-shoenfield-limit-lemma` · theorem — Shoenfield's limit lemma
- `fs-sigma-n-and-pi-n-are-disjoint` · false-statement — False: Sigma_n^0 and Pi_n^0 are disjoint
- `fs-limit-computable-has-a-known-stabilization-stage` · false-statement — False: a limit-computable function has a known stabilization stage

### `the-arithmetical-hierarchy-and-posts-theorem-examples` — The Arithmetical Hierarchy and Post's Theorem: Examples and Counterexamples (3 item(s))

- `ex-sigma-one-sets-are-exactly-ce-sets` · example — Reading a c.e. definition as a Sigma_1^0 formula
- `ex-shoenfield-limit-lemma` · example — A limit approximation computed from the halting oracle
- `cex-sigma-n-and-pi-n-are-disjoint` · counterexample — A set lying in both Sigma_n^0 and Pi_n^0

### `time-and-space-hierarchy-theorems` — Time and Space Hierarchy Theorems (20 item(s))

- `def-efficient-universal-simulation-with-clock` · definition — An efficient universal simulation with a clock
- `lem-effective-enumeration-of-clocked-machines` · lemma — Effective enumeration of clocked machines
- `lem-time-diagonal-language-respects-its-budget` · lemma — The time-diagonal language respects its budget
- `thm-deterministic-time-hierarchy` · theorem — The deterministic time hierarchy theorem
- `cor-p-is-properly-contained-in-exp` · corollary — P is properly contained in EXP
- `thm-nondeterministic-time-hierarchy` · theorem — The nondeterministic time hierarchy theorem
- `lem-space-bounded-universal-simulation` · lemma — Space-bounded universal simulation
- `lem-space-diagonal-machine-halts` · lemma — The space-diagonal machine halts
- `thm-deterministic-space-hierarchy` · theorem — The deterministic space hierarchy theorem
- `def-read-only-input-workspace-classes` · definition — Read-only-input work-space classes and constructibility
- `lem-read-only-workspace-universal-simulation` · lemma — Universal simulation preserves read-only work space up to constants
- `lem-read-only-workspace-diagonal-machine-halts` · lemma — The read-only-workspace diagonal machine halts
- `thm-read-only-workspace-space-hierarchy` · theorem — The read-only-workspace space hierarchy theorem
- `lem-read-only-workspace-simulates-in-all-tapes-space` · lemma — Read-only work space becomes all-tapes space after charging input
- `cor-l-is-properly-contained-in-pspace` · corollary — L is properly contained in PSPACE
- `def-language-padding` · definition — Language padding
- `lem-padding-transfers-time-bounds` · lemma — Padding transfers time bounds
- `thm-gap-and-union-theorems-for-complexity-bounds` · theorem — Gap and union theorems for abstract complexity bounds
- `prop-hierarchy-theorems-do-not-separate-p-from-np` · proposition — Hierarchy theorems do not separate P from NP
- `fs-unrestricted-diagonalization-respects-any-bound` · false-statement — False: unrestricted diagonalization respects any resource bound

### `time-and-space-hierarchy-theorems-examples` — Time and Space Hierarchy Theorems: Examples and Counterexamples (3 item(s))

- `ex-time-diagonal-language-respects-its-budget` · example — Budgeting a time-diagonal language
- `ex-hierarchy-theorems-do-not-separate-p-from-np` · example — Why a hierarchy separation is not a P versus NP separation
- `cex-unrestricted-diagonalization-respects-any-bound` · counterexample — Overhead breaks an unrestricted diagonalization claim

### `logarithmic-space-nl-and-reachability` — Logarithmic Space, NL, and Reachability (19 item(s))

- `def-read-only-input-logspace-machine` · definition — A read-only-input logarithmic-space machine
- `def-l-and-nl` · definition — The classes L and NL
- `lem-logspace-machines-have-polynomially-many-configurations` · lemma — Logspace machines have polynomially many configurations
- `def-logspace-many-one-reduction` · definition — Logspace many-one reduction
- `lem-logspace-reductions-compose` · lemma — Logspace many-one reductions compose
- `def-directed-st-connectivity` · definition — Directed s-t connectivity
- `thm-directed-st-connectivity-is-nl-complete` · theorem — Directed s-t connectivity is NL-complete
- `thm-read-only-input-savitch-simulation` · theorem — Savitch simulation into read-only-input deterministic work space
- `thm-nl-is-contained-in-dspace-log-squared-n` · theorem — NL is contained in read-only-input DWORKSPACE(log-squared n)
- `def-inductive-reachable-vertex-count` · definition — Inductive counts of reachable vertices
- `lem-reachability-count-is-verifiable-in-nl` · lemma — A reachable-vertex count is verifiable in NL
- `lem-nonreachability-has-an-inductive-counting-certificate` · lemma — Nonreachability has an inductive counting certificate
- `thm-immerman-szelepcsenyi-nl-equals-conl` · theorem — Immerman-Szelepcsényi theorem: NL equals coNL
- `cor-nspace-is-closed-under-complement-above-logspace` · corollary — Read-only-input nondeterministic work space is closed under complement above logarithmic space
- `def-logspace-uniform-circuit-family` · definition — A logspace-uniform Boolean circuit family
- `def-p-complete-under-logspace-reductions` · definition — P-completeness under logspace reductions
- `lem-polynomial-time-computations-have-logspace-uniform-circuits` · lemma — Polynomial-time computations have logspace-uniform circuit families
- `thm-circuit-value-is-p-complete` · theorem — Circuit Value is P-complete
- `fs-nl-equals-conl-follows-by-state-swapping` · false-statement — NL equals coNL follows by swapping accepting and rejecting states

### `logarithmic-space-nl-and-reachability-examples` — Logarithmic Space, NL, and Reachability: Examples and Counterexamples (3 item(s))

- `ex-logspace-reductions-compose` · example — Composing two logspace reductions through a virtual tape
- `ex-circuit-value-is-p-complete` · example — A small computation tableau compiled to Circuit Value
- `cex-nl-equals-conl-follows-by-state-swapping` · counterexample — A nondeterministic branch tree where state swapping is not complementing

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

2 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-b2ea65ee34516cd9fc3478bb · `lem-prenex-normalization-preserves-level`** (from group d, would-be-fatal) — The statement says that “finite Boolean combinations” of formulas from one class remain prenexable in that same Σ_n^0 or Π_n^0 class, but Boolean combinations ordinarily include negation. Negating a Σ₁^0 formula for a nondecidable c.e. set produces a Π₁^0 formula that need not be Σ₁^0. The proof only establishes closure under conjunction and disjunction. The claim needs a positive-Boolean-combination restriction or a changed conclusion.
- **s8a-0bf94c696b55731353150df2 · `def-efficient-universal-simulation-with-clock`** (from group d, would-be-fatal) — The definition gives the fixed simulator space bound as O(S+log b), although it says U_b first decodes the self-delimiting pair ⟨M,x⟩ and rejects malformed encodings. Under the page’s all-tapes convention, decoding/retaining an encoded input of total length n generally costs an O(n) term; the later lemma correctly states O(n+S). As written the definition omits that term and is stronger than the later simulation interface supports.

Append one owning-group disposition per warning to `research/frontier-31a-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-nl-equals-conl-follows-by-state-swapping` | `logarithmic-space-nl-and-reachability-examples` | gpt-5.6-terra | `50628fe3f09eab8a24fc283266c8bf890eb1c238297f71a6e50ed1a7cac44b7a` |
| `def-arithmetical-level-completeness` | `the-arithmetical-hierarchy-and-posts-theorem` | gpt-5.6-terra | `9f985d5179335e8e86c59341f1369301c364acc3176340e78948b3fb67427c9a` |
| `def-bounded-arithmetic-formula` | `the-arithmetical-hierarchy-and-posts-theorem` | gpt-5.6-terra | `75f3a059e82726740a0834cfeef969827623cdd080c9f352018bc929fe7f7a09` |
| `def-efficient-universal-simulation-with-clock` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `53b9eea45a03974a00e95987c7e3a3b1fba76e2d26bc294a8e4f64a06db71c8a` |
| `def-language-padding` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `34d4b932aabe7bfad9bb14fedb44c9f867a6f77a78ec0095652e9047e26b1e7d` |
| `def-logspace-uniform-circuit-family` | `logarithmic-space-nl-and-reachability` | gpt-5.6-terra | `009514257908034bddff794c32ac77349f9a06530eaf0ce1ef3355d0cf5a30ff` |
| `def-read-only-input-workspace-classes` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `738aafe61c9a7a2a634dfdd343f53caf202de3ee4786f6d8fd5bf1c3c5e98765` |
| `ex-circuit-value-is-p-complete` | `logarithmic-space-nl-and-reachability-examples` | gpt-5.6-terra | `fcc349c15075f0810f20523f6fcc7ed9bd9813a96302482dd2d349bfc2313cf0` |
| `ex-logspace-reductions-compose` | `logarithmic-space-nl-and-reachability-examples` | gpt-5.6-terra | `da5e1b0d3ef8fba665db4e9f41e1c6d8ee31b9e3c69ddeb26aab021362c1cf5e` |
| `ex-time-diagonal-language-respects-its-budget` | `time-and-space-hierarchy-theorems-examples` | gpt-5.6-terra | `53ab9e09aba7095c1b7c40eddecb0e891973a4a802fd525279f700ee918436bf` |
| `fs-unrestricted-diagonalization-respects-any-bound` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `10fa854da7c9b9a9893838ceae29d4c977581b4e432094285156d4f4ea69bf64` |
| `lem-effective-enumeration-of-clocked-machines` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `fe69d15e0d0f522808dc0a6f2feb7387e5cbccb0749f3dc94d1da23d6439d0b2` |
| `lem-padding-transfers-time-bounds` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `77a8132a412c89846f7b6b0f836ea961dfbff2b59d9a96b173ee49495c8a7dd8` |
| `lem-polynomial-time-computations-have-logspace-uniform-circuits` | `logarithmic-space-nl-and-reachability` | gpt-5.6-terra | `45046e4fae4681a7fe919d06ffd142ae1b4ff1e71e323eea9a5e0db3fd9cf734` |
| `lem-prenex-normalization-preserves-level` | `the-arithmetical-hierarchy-and-posts-theorem` | gpt-5.6-terra | `dbe99d93aec3c5159a6df0f96e28c257336c5838d1c09c1f7b63339d768ae43f` |
| `lem-read-only-workspace-diagonal-machine-halts` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `dfb3db41af481a124bebaf99a8bcf06bbb13288cfdf5b8aa6dc6e600e9bd9c3d` |
| `lem-read-only-workspace-simulates-in-all-tapes-space` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `5011bbf65b8b9c9ade360bd39d5814abaf3383ed813c2a51f409602fb5ceae28` |
| `lem-read-only-workspace-universal-simulation` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `70ac8b7d6aafa0165b137f23646f33e3e4a4a492ffdcd80a6fb649d10d890863` |
| `lem-space-bounded-universal-simulation` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `1e507fac9d3e2caafd84ac1423cb1d71de8ca6fdd1667f56edf6835a063da68f` |
| `lem-space-diagonal-machine-halts` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `e1606be29e27e396c3bd4e02e1364c8bc4645bde5d7affef6aa88af95c7d7b3f` |
| `lem-time-diagonal-language-respects-its-budget` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `608e58b395d425dfeb521e17b22f4f168cc9bc17aeb62191d164916303f2dcc3` |
| `prop-hierarchy-theorems-do-not-separate-p-from-np` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `8a9882f9584e22829e4a170788292a8e7e4299d9e2f267d223a757659c0ad99b` |
| `thm-deterministic-time-hierarchy` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `42b7bd3fbfb89bf28413c97a166f5753634caddba2de9f3ff973df8fc456ebdd` |
| `thm-gap-and-union-theorems-for-complexity-bounds` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `ec57b65424c79e75a6867d8933d58f56e8e6d20b9548abf01fdf122096c78abd` |
| `thm-halting-is-sigma-one-complete` | `the-arithmetical-hierarchy-and-posts-theorem` | gpt-5.6-terra | `e231f51f6ee13eb1768eccc7522c7a891904ed7d6164d5206270925db69ddbd5` |
| `thm-immerman-szelepcsenyi-nl-equals-conl` | `logarithmic-space-nl-and-reachability` | gpt-5.6-terra | `c4035c96ca6ebd4441608fd4a85bc93d5d56ea7c27fd093dd2ab17aafa5df54e` |
| `thm-nondeterministic-time-hierarchy` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `7fdb9f8dd4605ab30cfd05e71b9d4f25891337624e85a7e73e0c43897e437727` |
| `thm-read-only-input-savitch-simulation` | `logarithmic-space-nl-and-reachability` | gpt-5.6-terra | `d5632dab228f095aaa8209249107361ac642bda41ee6213517339b5725b23f07` |
| `thm-read-only-workspace-space-hierarchy` | `time-and-space-hierarchy-theorems` | gpt-5.6-terra | `56436743d501a12df55442cb3bbefe043c6c8337e43440f3ea89188819f8ab75` |
| `thm-shoenfield-limit-lemma` | `the-arithmetical-hierarchy-and-posts-theorem` | gpt-5.6-terra | `0dc7050000241dec48b9958454f11f388c04a762e945e7a3ae02e2ebd2f30466` |
| `thm-totality-is-pi-two-complete` | `the-arithmetical-hierarchy-and-posts-theorem` | gpt-5.6-terra | `b00fc62da0606999c1e401d723d1edf96d0c9ad4142d21f551820c921cb429f8` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-31a`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-31a-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-31a-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-31a-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-31a-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-31a-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


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

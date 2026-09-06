# Step 8 adjudication — group **d**, run `frontier-31a`

You are the group Alpha for batches **21**, **22**: 3 A/B pair(s), 6 page(s), 66 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-31a-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-31a`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.

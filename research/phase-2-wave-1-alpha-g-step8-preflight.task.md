# Step 8 adjudication — group **g**, run `phase-2-wave-1`

You are the group Alpha for batches **9**, **13**: 3 A/B pair(s), 6 page(s), 31 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/phase-2-wave-1-alpha-g-step8-context.json` is what a group Alpha for this group wrote during step 7,
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
in `research/phase-2-wave-1-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 9 | `quantitative-induced-density-and-the-loglog-step` | A | combinatorics | 408.1 | `induced-subgraphs-and-hereditary-graph-classes`, `regular-pairs-and-induced-counting`, `sparse-restricted-subgraphs-and-rodl-nikiforov`, `blockades-combs-and-pattern-graphs`, `the-logarithm-and-general-powers`, `finite-counting-and-binomial-coefficients` |
| 9 | `quantitative-induced-density-and-the-loglog-step-examples` | B | combinatorics | 408.2 | `quantitative-induced-density-and-the-loglog-step` |
| 13 | `finite-automata-transition-and-determinisation-interfaces` | A | computability-theory | 584.2 | `deterministic-finite-automata-and-regular-languages` |
| 13 | `finite-automata-transition-and-determinisation-interfaces-examples` | B | computability-theory | 584.4 | `finite-automata-transition-and-determinisation-interfaces` |
| 13 | `turing-machine-configuration-boundary-interface` | A | computability-theory | 596.2 | `formal-languages-encodings-and-decision-problems` |
| 13 | `turing-machine-configuration-boundary-interface-examples` | B | computability-theory | 596.4 | `turing-machine-configuration-boundary-interface` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `quantitative-induced-density-and-the-loglog-step` — Quantitative Induced Density and the Log-Log Step (18 item(s))

- `def-induced-copy-density-and-homogeneous-restriction-parameter` · definition — Induced copy density and homogeneous restriction parameter
- `def-qid-restricted-blockade-with-empty-blocks` · definition — Qid restricted blockade with empty blocks
- `def-labelled-blowup-and-good-induced-copy` · definition — Labelled blowup and good induced copy
- `lem-good-copy-extension-count` · lemma — Good copy extension count
- `lem-few-induced-copies-exclude-a-fixed-labelled-blowup` · lemma — Few induced copies exclude a fixed labelled blowup
- `lem-qid-bipartite-density-trimming` · lemma — Qid bipartite density trimming
- `lem-qid-fixed-size-density-selection` · lemma — Qid fixed size density selection
- `lem-local-special-copy-trichotomy` · lemma — Local special copy trichotomy
- `lem-qid-maximal-blowup-trichotomy` · lemma — Qid maximal blowup trichotomy
- `lem-special-copy-trichotomy-produces-a-restricted-blockade` · lemma — Special copy trichotomy produces a restricted blockade
- `def-subreciprocal-function-and-ell-divisibility` · definition — Subreciprocal function and ell divisibility
- `lem-subreciprocal-functions-close-under-the-density-recursion` · lemma — Admissible parameters for the density recursion
- `def-qid-finite-density-recursion-profile` · definition — Qid finite density recursion profile
- `lem-qid-logarithmic-and-constant-divisibility` · lemma — Qid logarithmic and constant divisibility
- `lem-ell-divisibility-amplifies-through-a-blockade` · lemma — Ell divisibility amplifies through a blockade
- `thm-quantitative-density-theorem-for-ell-divisive-graphs` · theorem — Quantitative density theorem for ell divisive graphs
- `cor-fox-sudakov-quantitative-induced-density-bound` · corollary — Fox sudakov quantitative induced density bound
- `thm-loglog-quantitative-induced-density-bound` · theorem — Loglog quantitative induced density bound

### `quantitative-induced-density-and-the-loglog-step-examples` — Quantitative Induced Density and the Log-Log Step: Examples (4 item(s))

- `ex-a-labelled-blowup-and-its-good-copies` · example — A labelled blowup and its good copies
- `ex-checking-the-subreciprocal-condition-for-the-quadratic-log-bound` · example — Checking the subreciprocal condition for the quadratic log bound
- `ex-checking-the-subreciprocal-condition-for-the-loglog-bound` · example — Checking the subreciprocal condition for the loglog bound
- `ex-comparing-the-two-quantitative-density-scales` · example — Comparing the two quantitative density scales

### `finite-automata-transition-and-determinisation-interfaces` — Finite-Automata Transition and Determinisation Interfaces (3 item(s))

- `def-epsilon-nfa-word-transition` · definition — Epsilon-NFAs, finite epsilon closure, and extended word transition
- `thm-subset-construction-reachability-invariant` · theorem — Subset construction and its exact reachability invariant
- `prop-deterministic-automata-are-special-nondeterministic-automata` · proposition — A DFA embeds as an epsilon-free NFA

### `finite-automata-transition-and-determinisation-interfaces-examples` — Finite-Automata Transition and Determinisation Interfaces: Examples (3 item(s))

- `ex-epsilon-closure-and-word-transition-on-a-three-state-nfa` · example — Epsilon closure and word transitions on three states
- `ex-subset-construction-for-an-epsilon-nfa` · example — A complete determinisation table for a three-state epsilon-NFA
- `cex-omitting-epsilon-closure-breaks-determinisation` · counterexample — Dropping epsilon closure changes the accepted language

### `turing-machine-configuration-boundary-interface` — Turing-Machine Configuration Boundary Interface (1 item(s))

- `def-turing-machine-initial-and-halting-configuration-interface` · definition — Initial tapes and machine-relative halting configurations

### `turing-machine-configuration-boundary-interface-examples` — Turing-Machine Configuration Boundary Interface: Examples (2 item(s))

- `ex-initial-configuration-on-empty-input` · example — The empty-input initial configuration
- `ex-accepting-and-rejecting-configurations-are-machine-relative` · example — The same triple can accept for one machine and reject for another

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

None. No Step-7 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-wave-1-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `phase-2-wave-1`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-8 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-8 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.

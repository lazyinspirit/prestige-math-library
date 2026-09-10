# Step 7 adjudication — group **f**, run `phase-2-nine-step-25`

You are the group Alpha for batches **12**, **13**: 2 A/B pair(s), 4 page(s), 21 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-nine-step-25-alpha-f-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-nine-step-25-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 12 | `one-tape-simulation-normal-forms` | A | computability-theory | 598.2 | `turing-machine-configuration-boundary-interface`, `turing-machines-configurations-and-computation` |
| 12 | `one-tape-simulation-normal-forms-examples` | B | computability-theory | 598.4 | `one-tape-simulation-normal-forms` |
| 13 | `boone-machine-simulation-and-fixed-presentation-undecidability` | A | group-theory | 610.1 | `diagonalization-and-the-halting-problem`, `turing-machines-configurations-and-computation`, `turing-machine-configuration-boundary-interface`, `decision-problems-for-finitely-presented-groups`, `free-groups-and-presentations`, `free-products-and-amalgamation`, `hnn-extensions-and-brittons-lemma`, `relations-functions-and-quotients` |
| 13 | `boone-machine-simulation-and-fixed-presentation-undecidability-examples` | B | group-theory | 610.2 | `boone-machine-simulation-and-fixed-presentation-undecidability` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `one-tape-simulation-normal-forms` — One-Tape Simulation Normal Forms (3 item(s))

- `def-stay-put-one-tape-machine-and-run-interface` · definition — Stay-put one-tape machines and their runs
- `lem-stay-put-right-left-macro-simulation` · lemma — The right-left macro simulates one stay-put step
- `thm-stay-put-elimination-with-explicit-simulation-interface` · theorem — Stay-put elimination with an explicit simulation interface

### `one-tape-simulation-normal-forms-examples` — One-Tape Simulation Normal Forms: Examples (2 item(s))

- `ex-eliminating-a-stay-put-transition` · example — Eliminating a stay-put transition at the left boundary
- `cex-deleting-stay-put-moves-does-not-preserve-computation` · counterexample — Deleting stay-put instructions need not preserve computation

### `boone-machine-simulation-and-fixed-presentation-undecidability` — Boone Machine Simulation and Fixed-Presentation Undecidability (13 item(s))

- `lem-normalized-fixed-halting-machine-for-boone-simulation` · lemma — Normalized fixed halting machine for boone simulation
- `def-boone-machine-semigroup-and-augmented-configurations` · definition — Boone machine semigroup and augmented configurations
- `lem-boone-semigroup-histories-detect-halting` · lemma — Boone semigroup histories detect halting
- `thm-fixed-finite-semigroup-has-undecidable-terminal-equality` · theorem — Fixed finite semigroup has undecidable terminal equality
- `def-boone-group-presentation-and-special-word` · definition — Boone group presentation and special word
- `lem-boone-base-groups-and-associated-free-bases` · lemma — Boone base groups and associated free bases
- `lem-boone-hnn-tower-and-auxiliary-subgroups` · lemma — Boone hnn tower and auxiliary subgroups
- `lem-boone-positive-history-pushing` · lemma — Boone positive history pushing
- `lem-boone-commutator-extracts-an-auxiliary-history` · lemma — Boone commutator extracts an auxiliary history
- `lem-boone-reduced-auxiliary-words-have-no-rule-pinches` · lemma — Boone reduced auxiliary words have no rule pinches
- `lem-boone-positive-history-reconstruction` · lemma — Boone positive history reconstruction
- `thm-boone-special-word-equivalence` · theorem — Boone special word equivalence
- `thm-novikov-boone-undecidability-of-the-word-problem` · theorem — Novikov boone undecidability of the word problem

### `boone-machine-simulation-and-fixed-presentation-undecidability-examples` — Boone Machine Simulation and Fixed-Presentation Undecidability — Examples (3 item(s))

- `ex-boone-sharp-is-not-word-inversion` · example — Boone sharp is not word inversion
- `ex-boone-halting-cleanup-through-an-empty-right-tape` · example — Boone halting cleanup through an empty right tape
- `ex-fixed-boone-undecidability-implies-uniform-undecidability` · example — Fixed boone undecidability implies uniform undecidability

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

1 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-783bc07a263a663e712d549d · `lem-normalized-fixed-halting-machine-for-boone-simulation`** (from group f, gap-a-reader-closes) — The claim calls T a deterministic machine on a two-sided tape with exactly one stopping state, while its cited local machine interface is right-infinite, clamped at zero, and has two designated halting states. The proof gives a workable transition-table construction, but does not formally define the altered one-stop/two-sided machine class or explicitly prove that its finite-description interface is the one subsequently required by the semigroup construction.

Append one owning-group disposition per warning to `research/phase-2-nine-step-25-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-nine-step-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — targeted repair-integrity review, `phase-2-nine-step-25`

The generated repair envelope is authoritative. It supplies unresolved
diagnostics, exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Inspect only the named finding and the item/dependency text needed to resolve it.
Do not repeat whole-group reading, settled adjudication, or upheld boundary
reviews. Cited suppliers are context, not additional repair targets. Original
reports are retained in `full_evidence`; open only relevant sections if needed.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-7 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-7 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `7-rejudge`; a
frozen-cutover dispatch uses the Step-7 close task instead.

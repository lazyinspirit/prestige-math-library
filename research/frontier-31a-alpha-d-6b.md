# Frontier-31a Alpha d Step 6b

Run: `frontier-31a`

Group: `d`

Owned batches: `21`, `22`

Date: Saturday, September 5, 2026 (Australia/Sydney)

## Scope and evidence

I read both exact scope files, the reader reports and findings JSON, the
refuter reports, every current routed carrier, the cited dependency statements,
and the batch-22 retry history. The queue contains 28 touched-item obligations
(6 in batch 21 and 22 in batch 22), no page obligations, and two fatal findings
on `cex-unrestricted-diagonalization-respects-any-bound` (one reader and one
refuter obligation).

The batch-22 pre-reader snapshot was taken while the successful recovery author
was still completing the batch after earlier attempts had correctly stopped on
the missing batch-21 workspace dependency. The recovery record, not the older
blocked attempt by itself, explains why all 22 batch-22 carriers are routed as
touched. I checked each completed current item rather than treating that retry
report as a verdict. The reader's six later changes are independently identified
in `research/frontier-31a-reader-22.md`.

Primary-source checks used the complete relevant sections already named in the
coverage records: Arora--Barak Chapter 3, especially Theorems 3.2, 3.3, 3.18
and Corollary 3.19, together with Exercise 1(b) after Section 2.7 for the
linear-time nondeterministic universal simulation; Hartmanis--Hopcroft Theorems
7 and 16 for the gap/union constructions; and the Harvard Lecture 5
inductive-counting treatment. Direct dependency statements were checked on
current disk, including the concrete self-delimiting machine code and the
all-tapes/read-only-input model boundary.

## Mathematical adjudication and repairs

The reader and refuter findings on
`cex-unrestricted-diagonalization-respects-any-bound` are confirmed fatal. The
old step inferred a worst-case `Theta(n log n)` lower bound from a dependency
that states only an `O(n log n)` upper bound. I replaced it with a direct
one-step witness: the fixed simulator must completely decode the multi-cell
self-delimiting code before simulating the machine's one transition, so the
claimed one-step simulator budget already fails at `n=1`. The concrete coding
dependency, manifest row, proof contract, and one-boundary record now match
that argument.

The touched deterministic-space theorem still had a fatal constant-factor gap
after the reader's correct all-tapes input-cost repair: simulating candidates
under a literal `f` cap does not cover all machines using `O(f)` space. The
current proof diagonalizes on padded inputs `x=<M,1^k>` and uses `f=o(g)` plus
`n=O(f)` to absorb every candidate constant into a reserved `g` cap. Its direct
universal-simulation dependency, manifest row, and contract were synchronized.

The nondeterministic-time proof now uses the source's candidate-dependent
linear-overhead nondeterministic universal simulation and states the lazy unary
intervals, the two separate endpoint budget requirements, the copied interior
decisions, and the full equality-chain contradiction. This closes the
reader-identified defect without claiming that an exponential branch
inspection fits at the same input length or trying to absorb a logarithmic
simulation factor under the stated hypothesis.

The other batch-21 reader repairs stand: Post's theorem has the correct
`Pi_{n+1}` matrix and finite yes/no query transcript; the gap/union theorem has
its source hypotheses; all-tapes simulation charges the coded input; and the
false unrestricted-diagonalization item no longer asserts an unsupported
Theta bound.

All four mathematical batch-22 reader repairs stand: virtual-input inverse
closure runs the `B` decider, reachable-count certification assumes the true
count, the dependent nonreachability induction uses that conditional verifier,
and the general Immerman--Szelepcsényi clause accounts for `2^{O(s)}`
configurations with `O(s)`-bit live storage. The two renderer repairs also
stand. No additional batch-22 item defect was confirmed.

I corrected stale proof-contract boundary records for the actual
Sigma-one/c.e., Delta-one/decidable, Post, and circuit-simulation
biconditionals. The boundary detector's two remaining empty-family candidates
are false positives on reread: the union family is indexed by every natural
number, and the circuit family is indexed by every `n>=0`; neither theorem has
an empty indexing family.

## Decisions and ledger

`research/frontier-31a-alpha-d-6b-decisions.json` contains exactly one decision
for every routed obligation, with current carrier hashes stamped by
`step6-scope.mjs`:

- 18 `accepted_repair` touched decisions;
- 10 `amended_repair` touched decisions; and
- 2 `confirmed_fatal` finding decisions.

No change was reverted and no finding was left unresolved. Thirty-one closed
rows were appended through `tools/defect-ledger.mjs`: one row per routed repair,
plus a second row on the deterministic-space touched obligation for the
independent constant-factor defect. The reader and refuter findings have
separate rows because their routed locations are distinct. The append
atomically refreshed `research/DEFECT-LEDGER.md`; the run's current rows
validate with zero errors.

## Risk review

I ran `tools/risk-report.mjs` first without `--require-reviewed`, then reread
every reported HIGH/CRITICAL proof and its reader/refuter/citation evidence.
Specific complete reviews are now recorded for all routed risks:

- batch 21: 7 HIGH items;
- batch 22: 4 HIGH items and 1 CRITICAL item.

The final `--require-reviewed` runs pass both contracts with zero errors.

## Focused checks

- Reflow on the three directly edited items: canonical after the first pass.
- Focused precheck: `3 checked, 0 failing`.
- Rendercheck on the three edited items: clean.
- Manifest dependency checks: batch 21 `44 item(s), 0 error(s)`; batch 22
  `22 item(s), 0 error(s)`.
- Strict proof contracts: batch 21 `36/36`, batch 22 `15/15`, both with zero
  errors and warnings.
- Citation fidelity: all 2 batch-21 and 26 batch-22 exact quotes found; no
  widening candidate.
- Boundary audit: only the two reviewed empty-family detector false positives
  described above remain; no mathematical boundary defect remains.
- A trailing-whitespace scan of every artifact changed by this dispatch: clean.
- Batch-filtered adjudication checks find no owned decision, carrier-hash,
  verdict, or ledger error. Each invocation also reports the same two
  out-of-scope batch-14 publication-handoff errors
  (`published-claim-extra` and `published-repair-extra` for
  `lem-sheaf-condition-check-on-basis` / `reader:14:1`). The global check
  confirms that other unfinished groups have additional missing/stale work.
  Those artifacts are outside group d and were not edited.

## Blockers

None in batches 21 or 22. Global Step-6 closure remains blocked on other
groups' unfinished decisions and the batch-14 publication handoff; this group
does not own those records or the stage transition.

## Gate repair cycle 1 — `step6-routing-adjudicate`

The live gate was reproduced on September 6, 2026. I reread the two named
batch-21 and nine named batch-22 carriers against
`research/frontier-31a-reader-{21,22}.md`, the Arora--Barak interfaces cited
there, their declared dependencies, and current contracts. Their item and
manifest hashes exactly match the frozen post-reader values; only later 6b
contract reconciliation changed the live carrier. The all-tapes simulation
cost, clock qualification, read-only work-space conventions, conditional true
reachability count, existential branch semantics, empty-input reduction case,
configuration count, Circuit Value compilation, and Savitch specialization
remain correct.

All eleven touched decisions are retagged from `accepted_repair` to
`amended_repair`; eleven nonfatal `route:"gate"` decisions and matching rows
were added through `research/frontier-31a-alpha-d-6b-gate-ledger-rows.json`,
and current hashes were restamped. Batch-scoped commands name no group-d
decision defect (their only diagnostics are the pre-existing batch-14
published-content entries, which disappear when the full ownership scope is
loaded). The exact full primary gate reports `910 item(s) routed, 374
adjudication obligation(s), 0 error(s)`. No group-d blocker remains.

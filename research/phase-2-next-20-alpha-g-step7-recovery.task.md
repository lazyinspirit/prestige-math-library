# Step 7 adjudication — group **g**, run `phase-2-next-20`

You are the group Alpha for batches **12**: 1 A/B pair(s), 2 page(s), 22 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-20-alpha-g-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-20-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 12 | `effective-numberings-reductions-resources-and-randomness` | A | computability-theory | 612.2 | `one-tape-simulation-normal-forms`, `robust-machine-models-and-universal-computation`, `diagonalization-and-the-halting-problem`, `finite-probability-spaces-and-random-variables`, `algebraic-extensions-degree-and-finite-fields`, `linear-algebra-methods-in-combinatorics` |
| 12 | `effective-numberings-reductions-resources-and-randomness-examples` | B | computability-theory | 612.4 | `effective-numberings-reductions-resources-and-randomness` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `effective-numberings-reductions-resources-and-randomness` — Effective Numberings, Reductions, Resources, and Randomness (19 item(s))

- `def-uniform-asymptotic-time-space-comparison` · definition — Uniform asymptotic time space comparison
- `def-machine-time-and-space-constructibility` · definition — Machine time and space constructibility
- `thm-clocked-universal-simulation-with-time-and-space-bounds` · theorem — Clocked universal simulation with time and space bounds
- `def-primitive-recursive-functions-by-initial-functions-and-schemes` · definition — Primitive recursive functions by initial functions and schemes
- `lem-fixed-coding-primitive-recursive-arithmetic-and-sequences` · lemma — Fixed coding primitive recursive arithmetic and sequences
- `def-kleene-computation-predicate-and-output-map` · definition — Kleene computation predicate and output map
- `lem-fixed-machine-history-predicate-is-primitive-recursive` · lemma — Fixed machine history predicate is primitive recursive
- `thm-kleene-normal-form-for-the-fixed-machine-coding` · theorem — Kleene normal form for the fixed machine coding
- `def-computable-many-one-reducibility-interface` · definition — Computable many one reducibility interface
- `def-oracle-turing-reducibility-interface` · definition — Oracle turing reducibility interface
- `def-acceptable-numbering-with-universal-evaluation` · definition — Acceptable numbering with universal evaluation
- `thm-smn-for-the-fixed-acceptable-numbering` · theorem — Smn for the fixed acceptable numbering
- `thm-kleene-fixed-point-theorem-for-program-indices` · theorem — Kleene fixed point theorem for program indices
- `def-polynomial-time-verifier-and-reduction-interface` · definition — Polynomial time verifier and reduction interface
- `def-probabilistic-polynomial-time-machine-interface` · definition — Probabilistic polynomial time machine interface
- `def-rp-corp-zpp-bpp-and-pp-classes` · definition — Rp corp zpp bpp and pp classes
- `def-pairwise-independent-hash-family-interface` · definition — Pairwise independent hash family interface
- `lem-chernoff-bound-for-independent-bernoulli-trials` · lemma — Chernoff bound for independent bernoulli trials
- `thm-schwartz-zippel-over-finite-fields` · theorem — Schwartz zippel over finite fields

### `effective-numberings-reductions-resources-and-randomness-examples` — Effective Numberings, Reductions, Resources, and Randomness: Examples (3 item(s))

- `ex-smn-specializes-a-two-argument-index` · example — Smn specializes a two argument index
- `ex-pairwise-independent-affine-hashing-over-a-prime-field` · example — Pairwise independent affine hashing over a prime field
- `ex-schwartz-zippel-for-a-bivariate-polynomial` · example — Schwartz zippel for a bivariate polynomial

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

7 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-33e59de43b3f81641c38e9a5 · `thm-clocked-universal-simulation-with-time-and-space-bounds`** (from group g, gap-a-reader-closes) — Step 3.1 describes each virtual tape's buffers as already holding the input cells 1,2,... and then blanks, while step 8.1 says to initialise only the centres and to materialise each level lazily from an archive, calling an unallocated zone's records 'untouched initial half-full lists'. The invariant 'ignoring holes and concatenating the zones gives the exact two stacks' is therefore asserted for zones whose record contents are deferred, and a reader must reconcile the two descriptions and check that the archive pointer sits exactly at the next untouched cell when a level is first reached (including when another virtual tape forces the allocation first).
- **s8a-a68edca5f96efbfe4c338bcc · `thm-clocked-universal-simulation-with-time-and-space-bounds`** (from group g, gap-a-reader-closes) — The time count in steps 7.1 and 9.1 charges each level-i event O_M(2^i) and uses 'at most floor(b/2^i) level-i events' plus O_M(b) table/centre work and O(b log(b+2)) clock scans. This also needs the interpreter's head travel to be charged: after a level-j redistribution all lower right zones are half-full, so the least nonempty right zone is zone 0 and a level-j event can be followed immediately by a level-0 event, forcing a sweep back over the allocated prefix. The sum is still correct if each sweep is charged to one of the two adjacent events (the head is left inside the prefix of the level just operated on) and the k fixed tapes are absorbed into the O_M constant, but that charging is nowhere stated; step 6.2's O_M(2^i) covers only the redistribution scans of the prefix.
- **s8a-b5bdce28a808fdc40e4c311e · `thm-clocked-universal-simulation-with-time-and-space-bounds`** (from group g, gap-a-reader-closes) — Step 4.1 gives explicit formulas for the redistribution but asserts 'Order and complementary occupancy are preserved; every lower zone ends half-full' without checking the record order across the split of the 1 + 2*sum_{j<i} h_j = 2h_i - 1 records into the lower zones and level i; step 6.2 likewise asserts that markers yield all half-capacities 'without per-record unbounded arithmetic'. I verified the formulas for i = 0,1 and reconstructed the general split, but the text leaves the order-preservation check to the reader.
- **s8a-b09eb45028a39827db669be9 · `def-rp-corp-zpp-bpp-and-pp-classes`** (from group g, gap-a-reader-closes) — Step 2.1 applies Markov with K = 2p(n) to conclude q_{2p(n)} <= ET/(2p(n)) <= 1/2, and step 2.2 groups 'the first KP(n) survival terms'; both divide by the polynomial bound, so they need p(n) > 0 (and P(n) > 0) on every input length. The item never states that the 'fixed positive integer polynomial' is positive-valued; the companion def-probabilistic-polynomial-time-machine-interface only notes that p(n) = 0 is incompatible with an all-branch bound from a nonhalting start. The intended reading (ET >= q_0 = 1 forces p(n) >= 1) should be recorded, and the empty-input (n = 0) boundary checked under it.
- **s8a-a7391f38c04f81bfadd17537 · `lem-fixed-machine-history-predicate-is-primitive-recursive`** (from group g, presentation) — Step 4.1 justifies the output scan by 'The implicit next cell is blank, so this is exactly the maximal bit prefix.' If the first coordinate of the tape list outside {1,2} is a letter >= 3 that the program wrote, that cell is not blank; the rule 'find the first coordinate not in {1,2}, using the length if no such coordinate occurs, then Horner-accumulate' still computes the maximal {1,2}-segment, so the algorithm is correct, but the stated reason is not.
- **s8a-3442729f7ced19b3452cc7db · `def-pairwise-independent-hash-family-interface`** (from group g, presentation) — The marginal clause reads 'each h_k(x) is uniform on R'; a single seed gives a single value, so uniformity is a property of the seed distribution for each fixed x, i.e. |{k: h_k(x)=u}|/|K| = 1/|R| for every u in R. The count form makes the intent recoverable, but the sentence as written attributes uniformity to a value rather than to a distribution.
- **s8a-4e43a0b076ba80a9993597b9 · `def-machine-time-and-space-constructibility`** (from group g, presentation) — Declared source backing is still open on disk: this item's reference line says 'complete source reading pending'; def-computable-many-one-reducibility-interface calls its Patey locator 'design locator, independently unread'; def-oracle-turing-reducibility-interface says 'full text pending'; def-pairwise-independent-hash-family-interface says 'complete locator/reading pending'; and thm-smn-for-the-fixed-acceptable-numbering cites a recovery edition distinct from the edition named in the coverage record. The statements are ai-altered with local proofs, so this is a source-backing obligation rather than a gap in the written mathematics, but it remains an open obligation for the owning group.

Append one owning-group disposition per warning to `research/phase-2-next-20-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-20-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-20`

Read `research/phase-2-next-20-judge-closure.json`,
`research/phase-2-next-20-judge.jsonl`,
`research/phase-2-next-20-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-20-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-20-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-20-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.

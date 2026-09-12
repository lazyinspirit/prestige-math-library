# Step 7 adjudication — group **f**, run `phase-2-next-17`

You are the group Alpha for batches **10**: 2 A/B pair(s), 4 page(s), 21 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-next-17-alpha-f-step7-context.json` is what a group Alpha for this group wrote during step 6,
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
in `research/phase-2-next-17-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 10 | `sat-tableaux-and-quantified-space-completeness` | A | computability-theory | 620.2 | `effective-numberings-reductions-resources-and-randomness`, `resource-bounds-and-machine-invariance`, `turing-machines-configurations-and-computation` |
| 10 | `sat-tableaux-and-quantified-space-completeness-examples` | B | computability-theory | 620.4 | `sat-tableaux-and-quantified-space-completeness` |
| 10 | `nondeterministic-recursive-padding-and-time-separation` | A | computability-theory | 626.2 | `effective-numberings-reductions-resources-and-randomness`, `resource-bounds-and-machine-invariance`, `robust-machine-models-and-universal-computation` |
| 10 | `nondeterministic-recursive-padding-and-time-separation-examples` | B | computability-theory | 626.4 | `nondeterministic-recursive-padding-and-time-separation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sat-tableaux-and-quantified-space-completeness` — SAT Tableaux and Quantified-Space Completeness (9 item(s))

- `def-boolean-formulas-cnf-and-satisfiability-interface` · definition — Boolean formulas, CNF, and satisfiability
- `def-bounded-turing-computation-tableau-interface` · definition — Bounded Turing-computation tableaux
- `lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations` · lemma — The tableau formula characterizes accepting computations
- `lem-tableau-to-cnf-map-has-polynomial-size-and-time` · lemma — Tableau formulas have polynomial-size polynomial-time CNF encodings
- `thm-cook-levin-sat-completeness-interface` · theorem — Cook-Levin: SAT is NP-complete
- `thm-three-sat-completeness-interface` · theorem — 3SAT is NP-complete
- `def-polynomial-space-and-nondeterministic-polynomial-space` · definition — Polynomial space and nondeterministic polynomial space
- `lem-space-bounded-machine-configuration-count` · lemma — A space-bounded machine has exponentially many configurations
- `thm-tqbf-pspace-completeness-interface` · theorem — TQBF is PSPACE-complete

### `sat-tableaux-and-quantified-space-completeness-examples` — SAT Tableaux and Quantified-Space Completeness: Examples (3 item(s))

- `ex-a-two-step-computation-tableau-and-its-local-clauses` · example — A two-step computation tableau and its local clauses
- `ex-tseitin-conversion-preserves-satisfiability` · example — A Tseitin conversion preserves satisfiability
- `ex-qbf-reachability-recursion-space-accounting` · example — Space accounting for the QBF reachability recursion

### `nondeterministic-recursive-padding-and-time-separation` — Nondeterministic Recursive Padding and Time Separation (7 item(s))

- `def-nondeterministic-acceptance-time-and-exact-clock` · definition — Nondeterministic acceptance time and exact clocks
- `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time` · lemma — Linear acceptance-time simulation on two tapes
- `lem-prefix-program-codes-admit-linear-nondeterministic-universal-simulation` · lemma — Prefix program codes admit linear nondeterministic universal simulation
- `lem-time-controlled-self-reference-for-nondeterministic-machines` · lemma — Time-controlled self-reference for nondeterministic machines
- `lem-clock-cutoffs-and-unions-preserve-nondeterministic-time-bounds` · lemma — Clocks, cutoffs, and finite unions preserve nondeterministic time bounds
- `lem-no-recursive-bound-covers-all-recursive-unary-languages` · lemma — No recursive bound covers all recursive unary languages
- `thm-nondeterministic-recursive-padding-separation` · theorem — Nondeterministic recursive-padding separation

### `nondeterministic-recursive-padding-and-time-separation-examples` — Nondeterministic Recursive Padding and Time Separation: Examples (2 item(s))

- `ex-nondeterministic-polynomial-logarithmic-time-separation` · example — A nondeterministic polynomial/logarithmic time separation
- `ex-shortest-acceptance-and-clocked-all-branch-halting` · example — Shortest acceptance versus clocked all-branch halting

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

8 warning(s) a Step-6 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-83f5426cd6a158a8675b84ec · `def-bounded-turing-computation-tableau-interface`** (from group f, gap-a-reader-closes) — The local rule is given only in prose and the clause family is specified as 'for each forbidden tuple (a,b,c,d)', but the definition never states that the forbidden tuples are exactly the complement of the allowed relation R_j, nor that the boundary clause 'omit exterior literals and enumerate only the fixed exterior symbol' ranges over exactly the windows whose absent neighbour is the fixed marker. Both directions of lem-tableau-formula-is-satisfiable-exactly-for-accepting-computations (step 1.1's 'Every local tuple is allowed' and step 1.2's 'Any different new symbol would make the forbidden-tuple clause for these actual four symbols false') need that exhaustive reading; it is recoverable only from 'This defines a finite allowed relation R_j(a,b,c,d)'.
- **s8a-80c32eedf4d306b6c0e99be3 · `def-bounded-turing-computation-tableau-interface`** (from group f, presentation) — $p(n)$ is reused for the post-normalization certificate length: 'certificates of one fixed length $p(n)$' together with 'If its original certificates have variable guarded length, first use the length-field construction' means $p$ is the length-field word of def-polynomial-time-verifier-and-reduction-interface (length 2p_orig(n)+1, not the original guard). The identity $\ell=2n+1+p(n)$ and every polynomial bound downstream depend on that reading, which is left implicit.
- **s8a-0ae1cdf99fa5b3031fa343d7 · `thm-nondeterministic-recursive-padding-separation`** (from group f, gap-a-reader-closes) — Step 4.1's 'possible by F7' claim that $2B_0A(N+1)\le T(N)$ for all $N\ge N_0$ does not follow from $a(n+1)=o(T(n))$ alone; it also needs $n=o(T(n))$, which follows only by combining $a\ge n$ with the shift ($a(n+1)\ge n+1$). The two-term estimate $A(N+1)=K(a(N+1)+N+2)=o(T(N))$ is nowhere written out, and $T(n)\ge n$ is the only lower hypothesis on $T$.
- **s8a-c59c69ba3ea16eec8217c789 · `thm-nondeterministic-recursive-padding-separation`** (from group f, presentation) — The two downward inductions silently switch on H's two modes: the base range $k\ge r(m)$ uses step 2.1's first estimate, while every descent step uses step 3.2, which is stated only under the hypothesis $k<r(m)$. The text says 'descend through $k=r(m)-1,\ldots,0$' but never restates that the descent step is exactly the $k<r(m)$ case of H (D's bounded test versus the unbounded extension guess); a reader must verify the case split is respected.
- **s8a-3faec548b058b9ded939219d · `lem-time-controlled-self-reference-for-nondeterministic-machines`** (from group f, gap-a-reader-closes) — Step 1.1 defines f(d)'s machine as writing the literal d on tape two and then 'executes the table described by d from its start state, with that nonblank second tape', but never states that this means running M_d from its start state on the configuration (x, d) - which is what Q's 'expects x on tape one and a valid d on tape two' requires - nor that a fixed interpreter gives one constant per simulated step. Step 5.1 likewise writes $\tau_{H_e}(x)\le A_e(|x|+1)+\tau_A(ex)$, i.e. cost one per simulated step of A, which holds only on the literal-composition reading ('directly runs A').
- **s8a-464a573605db9ea88b8d8c50 · `thm-tqbf-pspace-completeness-interface`** (from group f, gap-a-reader-closes) — Step 1.1 claims TQBF in PSPACE via 'at most $N$ frames and a size-$O(N^2)$ parsed representation' and matrix evaluation in $O(N^2)$ cells, but gives no layout for the claimed parsed representation and only asserts 'the same child workspace' is reused. Under the all-tape visited-cell convention of def-polynomial-space-and-nondeterministic-polynomial-space a reader must verify the second evaluation of a child literally reuses the first's cells (and that the matrix evaluation is polynomial), since any per-call copy of the residual formula would be exponential.
- **s8a-57c60367e74f604c57e664fe · `lem-space-bounded-machine-configuration-count`** (from group f, presentation) — The statement's first bound carries a $\log(n+2)$ term the proof never uses: the code length produced in step 3.1 is $O_M(S)$ for $S\ge k$, and the case $S<k$ is disposed of as vacuous ('the reachable set is empty'), so the injective fixed-length claim in the $S<k$ case is only the empty map. A reader must also accept that no plane of the canonical-prefix code (step 2.1) depends on the history rather than the configuration.
- **s8a-1459e31e875d538f9fec5b5c · `lem-nondeterministic-two-tape-simulation-with-linear-acceptance-time`** (from group f, presentation) — Step 3.1 maintains 'a track marking the furthest initialized or visited cell' and sweeps 'from zero through this frontier' inside a two-tape machine whose tape alphabet is fixed by M; the per-step cost of this multi-track bookkeeping and of the erase/rewind pass is charged to the same linear budget without an explicit statement that tracks are a constant factor rather than extra tapes (the definition only supplies the stay-put excursion macro). The 'It lies within max(|x|,t)+1' claim likewise needs the frontier-track invariant spelled out.

Append one owning-group disposition per warning to `research/phase-2-next-17-step7-alert-decisions.jsonl`.
A Step-6 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-7 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-next-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — exact closure recovery, `phase-2-next-17`

Read `research/phase-2-next-17-judge-closure.json`,
`research/phase-2-next-17-judge.jsonl`,
`research/phase-2-next-17-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/phase-2-next-17-step7-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/phase-2-next-17-step7-cross-group.jsonl`, never repair that item.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Do not use a descriptive
defect-ledger subclass in that field.

Write `research/phase-2-next-17-alpha-step7-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.

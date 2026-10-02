# Step 3a scope review — pair `stationary-markov-chains-and-ergodic-limits`

- Run: `frontier-37-owner-30` (stage `3a-scope`), dispatch label
  `step3a-pair-stationary-markov-chains-and-ergodic-limits-af020ee1bcfea5ef`
- Role: alpha scope reviewer (not owner, not item author)
- A page: `stationary-markov-chains-and-ergodic-limits` (batch 1, order
  288.129, category `probability`, 22 items: 5 definitions, 4 lemmas, 10
  theorems, 2 corollaries, 1 remark)
- B page: `stationary-markov-chains-and-ergodic-limits-examples` (batch 1,
  order 288.13, `requires` only the A page, 10 items: 6 examples, 4
  counterexamples)
- Decision: **`sufficient`**, recorded with the prescribed
  `record-scope` command.
- Date: 2026-09-30.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, item, design, plan
or engine artifact was edited; the only writes are this report and the scope
receipt.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-probability-track.md` PT-17, lines
1817–1872 (A page 1819; `Requires` 1821–1823; source backing 1825–1827; the 18
designed A items 1829–1848; hard-proof and well-definedness plan 1850–1859;
B page 1861–1872). Summary row line 515 and the §3 denial line 707 ("mixing
time, cutoff, spectral-gap, and conductance theory ... PT-17 stops at the
fundamental irreducible/aperiodic convergence and ergodic theorems needed for
graduate probability") fix the boundary. `research/plan-spec.json` agrees on
both page ids, orders 288.129/288.13, category, companion pairing and all nine
A prerequisites; both plan rows carry empty item arrays, so the batch manifest
is the inventory of record.

Intended subject: invariant laws for probability kernels and countable
transition matrices; the finite-state existence theorem by Cesàro averages in
the simplex; positive versus null recurrence; the return-cycle occupation
measure and its pointwise minimality; positive recurrence iff a stationary
probability; Kac's formula for states and for positive-mass sets; uniqueness
of the stationary law; reversibility, detailed balance and time reversal;
total variation and the countable half-ℓ1 formula; eventual positivity of
aperiodic returns; convergence to stationarity in total variation under
aperiodicity; Cesàro convergence without aperiodicity; the L¹ ergodic theorem
for chains; the stationary-process Birkhoff limit with its exact
invariant-σ-algebra, and shift ergodicity of stationary irreducible chains;
and the remark that aperiodicity separates ordinary-time convergence from
ergodic averages. The B page witnesses these with a two-state chain, a finite
birth–death chain, the graph random walk, a doubly stochastic matrix,
empirical frequencies, the periodic Cesàro boundary, the null-recurrent walk
on ℤ, a non-ergodic stationary chain, an invariant-but-not-reversible law, and
the loss of total-variation convergence without aperiodicity.

Role and consumers. Within this run the pair is a dependency leaf: a scan of
all batch manifests finds exactly one in-run consumer, its own B page, and
`research/frontier-37-owner-30-batch-1.cross-batch-dependencies.json` is `[]`.
The unified ledger
(`research/frontier-37-owner-30-cross-batch-dependencies.json`) has 400 edges
and none names either page. All nine declared prerequisite pages are
published and earlier in the reading order — `strong-laws-of-large-numbers`,
`conditional-expectation`,
`conditional-distributions-and-regular-conditional-probability`,
`discrete-time-martingales`, `martingale-inequalities-and-convergence`,
`stopping-times-and-optional-stopping`, `markov-kernels-and-markov-chains`,
`recurrence-transience-and-hitting-times-for-markov-chains`, and MT-23
`the-ergodic-theorems-of-von-neumann-and-birkhoff` — and the supplier items I
spot-checked (`thm-discrete-strong-markov-property`,
`cor-canonical-markov-chain-on-path-space`,
`thm-renewal-decomposition-at-successive-return-times`,
`thm-recurrence-and-transience-are-class-properties`,
`lem-period-is-constant-on-a-communicating-class`,
`thm-birkhoff-ergodic-theorem`) are published on disk. A recursive scan of
`items/` and `library/*/*.md` finds zero references to any of the 32 new ids,
so the pair consumes its predecessors and nothing consumes it yet. The
run-level Step-1 drift review records `no-drift` for this pair, with the
renewal/coupling proof as an authoring obligation.

## 2. Design-to-manifest mapping

I extracted the 18 designed A ids and the 10 designed B ids from PT-17 and
diffed them against `research/frontier-37-owner-30-batch-1.pages.json`. The A
manifest is exactly the 18 designed ids plus four local prerequisites, in
design order; the B manifest is exactly the 10 designed ids, with no renaming,
loss or addition. Kinds match the design. Dependency levels are 0–5 on A and
1–5 on B, with every prerequisite-flavoured item below its consumers.

The four A additions (batch notes, "Scope and plan reconciliation" and
"Mathematical dependency audit"), each required by a designed proof and
unavailable as a published supplier:

| added item | role | consumed by |
| --- | --- | --- |
| `lem-return-cycle-occupation-measure-and-minimality` | constructs the return-cycle occupation measure, proves minimality against π/π(b); this is the set-up the design assigns to item 5's converse | `thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains`, `thm-kac-return-time-formula-for-a-state` |
| `thm-kac-return-time-formula-for-a-positive-mass-set` | retains the general positive-mass-set form of LPW Lemma 21.12 instead of reducing the harvested result to singletons | harvested result itself (no local consumer) |
| `lem-aperiodic-return-times-are-eventually-positive` | Durrett Lemma 5.6.5 arithmetic that makes the product chain irreducible | `thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains` |
| `def-stationary-process-and-canonical-shift` | strict stationarity and the canonical path shift that the Birkhoff item is stated for | `thm-stationary-process-birkhoff-ergodic-limit`, B `cex-a-stationary-chain-need-not-be-ergodic` |

Statement qualifications recorded by Step 1 and consistent with the design
text (not scope reductions): the reversed kernel is defined only on positive-π
states with arbitrary null rows; the set Kac identity defines T_A^+ explicitly
and sums a nonnegative tail; the Birkhoff limit keeps the invariant-σ-algebra
conditional expectation until ergodicity is separately proved. The plan's §7
rows 33–34 (lines 2262–2263) are exactly these two qualifications.

## 3. Source coverage

`research/frontier-37-owner-30-batch-1.coverage.json` records one A-page entry
with three independent primary treatments and 53 dispositions: 27 `included`,
12 `inline`, 3 `already-published`, 11 `out-of-scope`, plus a `canonical`
block of 7 plan-designed rows (simplex existence, stationarity of the shifted
chain, canonical shift definition, Birkhoff limit, shift ergodicity, half-ℓ1
formula, aperiodicity boundary). Sources:

- Durrett, *Probability: Theory and Examples*, 5th ed. — §5.5 (printed
  pp. 299–307), §5.6 (pp. 310–314) and §6.2 (pp. 335–337).
- Levin–Peres–Wilmer, *Markov Chains and Mixing Times*, 2nd ed. — §1.4,
  §21.3 (printed pp. 295–299) and Appendix C.1.
- Aldous–Chewi, Berkeley lecture notes — Lectures 13–15 (countable
  product-chain convergence and the L¹ ergodic theorem).

I re-ran `node tools/source-fetch-check.mjs --coverage <file>`: 3/3
fetch-verified, 0 documented drops. I re-ran
`node tools/coverage-checklist.mjs --require-destination <file>`: 1 page, 53
harvested results, 0 errors, 0 warnings. I then checked the harvest against
the fetched PDFs themselves: the Durrett 5th-edition contents place §5.5 at
printed p. 299, §5.6 at p. 310, §5.7 at p. 317, §6.1 at p. 331, §6.2 at
p. 335 and §6.3 at p. 339, matching the locators; the named §5.5–5.6 results
and LPW §21.3 headings (Examples 21.10, 21.17–21.18, Proposition 21.11, Lemma
21.12, Theorem 21.13, Lemma 21.14, Proposition 21.15, Theorem 21.16) exist at
those numbers and support the rows as written. Every one of the 22 A items
cites at least one of the three treatments; the 11 out-of-scope rows give
distinct specific reasons (Kolmogorov cycle criterion, renewal-chain and
M/G/1 models, infinite birth–death normalization, entropy uniqueness proof,
reflected-walk and general ℤᵈ model families, TV contraction, TV limit
stationarity). The plan also names Varadhan §§6.1, 6.3 and LPW §§1.5–1.6,
4.1–4.3 as backing read (plan line 2796); those treatments were not harvested
and no item cites them, so no included result rests on unverified reading —
the Aldous lectures carry the countable ergodic-theorem and product-chain
arguments instead. The B page has no separate coverage entry; that satisfies
the coverage contract (A pages only), four literature-derived B items carry
references, and the six `ai-generated` B examples/counterexamples need no
source (they must set `generation.role` at authoring).

## 4. Dependency and interface checks

- 32/32 Step-1 `ready` receipts, 0 `escalated` (reverified 2026-09-30).
- Re-run today: `coverage-checklist --require-destination` 0/0;
  `manifest-deps` 32 items, 0 errors; `content-policy --manifest-only` 32
  items, 0 errors, 0 warnings; `item-dependency-levels check --run
  frontier-37-owner-30` exit 0 (778 items, 60 pages, maximum level 31);
  `source-fetch-check` 3/3.
- No item depends on a B item, the A `requires` array contains no B page, the
  B page requires only its A companion, and no published item or page links a
  new id (recursive scan, 0 hits). The reading-order invariants hold.
- AC: plan §8 (lines 2310–2311) records the finite stationary-law route as ZF
  and the countable results as ZF after the chain/path law is given. Twelve A
  items plus one B counterexample declare `def-axiom-of-choice`, all of them
  the contracts consuming published AC-qualified interfaces (canonical chain
  law, conditional expectation, strong Markov, Lévy upward convergence); the
  matrix, simplex, half-ℓ1 and eventual-positivity arguments remain
  choice-free. Step-1 notes already record this as a Step-3 contract item.
- The run-level Step-1 blocker (`…-step1-blockers.json`) names unit 29
  (Hörmander pair), not this pair; the unified ledger shows 30/30 batches
  reviewed and zero orphaned reviews.

## 5. Observations for the owner (no decision change)

1. **Durrett §5.7 versus the approved inventory.** The plan's §11.2 harvest
   row (line 2509) writes "5.5 *Stationary Measures*; 5.6 *Asymptotic
   Behavior*; 5.7 *Periodicity, Tail σ-field* — included PT-17, with tail
   comparison inline PT-2/PT-17". The approved PT-17 inventory does not
   itemize §5.7's named results, and this pair's coverage record declares a
   Durrett range of §5.5–§5.6 plus §6.2 only. I read §5.7 in the fetched PDF
   (printed pp. 317–321): Lemma 5.7.1 (cyclic decomposition of a periodic
   recurrent irreducible chain), Theorem 5.7.2 (the periodic-case limit
   p^{md+r}(x,y) → d·π(y)), Theorem 5.7.3 (Orey: the tail σ-field is
   σ({X₀ ∈ S_r})), plus the tail/harmonic correspondence and model examples.
   The pair's periodicity content is the published PT-16 period vocabulary
   plus the aperiodic/Cesàro/boundary triple (A items 16–18) and B item 10;
   its tail content is PT-2's published `def-tail-sigma-algebra-of-a-sequence`
   and `thm-kolmogorov-zero-one-law`, together with the invariant-σ-algebra
   statement of `cor-stationary-irreducible-markov-shift-is-ergodic`. For a
   one-sided shift invariant events are tail events, but the pair does not
   state Orey's stronger identification of the tail σ-field, nor the
   periodic-case subsequential limit. If the owner wants either as a result on
   this page, that is an enrichment decision beyond the approved inventory;
   nothing in the pair claims them, and the design's boundary remark item 18
   is the declared substitute.
2. **Coverage-record completeness inside the declared Durrett range.** Named
   instance headings Examples 5.5.1–5.5.3 (random walk, asymmetric simple
   walk, Ehrenfest), 5.5.14 (M/G/1) and 5.6.3 (triangle and square) carry no
   disposition row. I read them; they are model instances that §3 and the
   existing out-of-scope rows already exclude, and no planned item or
   dependency rests on them. The omission-gate contract expects a disposition
   per named heading, so a future coverage refresh could add them; this is a
   record-completeness note, not a scope gap.
3. **No merger is proposed.** The adjacent probability pairs are
   prerequisites (PT-16 above) and downstream consumers (PT-18 and later
   Brownian pairs) rather than overlapping subjects; merging would damage the
   reading order and duplicate the published supplier chain.

## 6. Scope judgement

`sufficient`. The planned definitions, results and examples cover the intended
subject: the inventory is exactly PT-17's 18 designed A items plus four local
prerequisites that designed proofs need and the published library cannot
supply, and exactly PT-17's 10 B items; every A item is backed by at least one
of three fetch-verified treatments whose locators and named headings I
checked against the source PDFs; the coverage checklist, manifest-dependency,
content-policy and dependency-level checks all pass on the current files; all
nine published prerequisite pages and their supplier items exist and precede
the pair; the pair is a dependency leaf with no cross-batch edge, no owner
deferral and no pending owner decision; and the declared §3 denials are
consistent with the harvested out-of-scope rows. The §5 observations need no
action for this decision and are recorded rather than presumed resolved.

## 7. Evidence index

- Design: `research/plan-probability-track.md` PT-17 lines 1817–1872 (A page
  1819, requires 1821–1823, source backing 1825–1827, items 1829–1848, hard
  plan 1850–1859, B page 1861–1872); summary line 515; denial line 707;
  well-definedness rows 2262–2263; choice rows 2310–2311; harvest rows 2509,
  2512, 2549–2550, 2615–2620, 2625, 2629, 2796.
- Plan: `research/plan-spec.json` orders 288.129/288.13 (items empty,
  unspliced) and the nine prerequisite pages.
- Batch inputs: `research/frontier-37-owner-30-batch-1.pages.json`,
  `…-batch-1.coverage.json`, `…-batch-1.notes.md`,
  `…-batch-1.cross-batch-dependencies.json` (`[]`).
- Step-1 status: 32 `research/frontier-37-owner-30-step1-<id>.json` receipts
  (all `ready`), `research/frontier-37-owner-30-alpha-step1-drift.md`
  (`no-drift` for this page), `research/frontier-37-owner-30-scope-ledger.json`
  (both pages, batch 1), `…-step1-blockers.json` (unit 29 only);
  `research/frontier-37-owner-30-owner-authoring-direction.md` absent;
  `research/frontier-37-owner-30-cross-batch-dependencies.json` (0 edges for
  this page).
- Sources: Durrett PTE5 `https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf`
  (contents and §5.5–§5.7 read), LPW 2nd ed.
  `https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf` (contents and §21.3
  headings read), Aldous–Chewi
  `https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf` (row evidence
  only, not re-fetched in this review).
- Checks run in this review: design-vs-manifest id diff (A 18+4, B 10 exact);
  kind/provenance/dependency-level inspection; published-page and
  published-item existence for all nine prerequisites; recursive id-collision
  and consumer scans; `source-fetch-check`; `coverage-checklist
  --require-destination`; `manifest-deps`; `content-policy --manifest-only`;
  `item-dependency-levels check --run frontier-37-owner-30`.

## 8. Not done (out of role)

No item approval or refutation, no proof-level verification of the 32 items,
no owner record, no ledger write, and no scaffold, manifest, coverage, prose,
plan or engine edit. Step 3b and Step 5 own proof correctness and item
evidence.

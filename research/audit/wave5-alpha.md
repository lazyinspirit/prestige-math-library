# Wave 5 — Audit-Alpha report

Alpha: `claude-opus-5`. Wave 5, dispatched at the A4 gate halt.

---

## Recovery receipt (2026-08-05)

**Baseline.** Branch `main`, HEAD `0649370` ("fix(drivers): clear the halt record
when a run successfully restarts"). Working tree dirty at entry: 220 modified
paths, the in-flight A4 retags of three of the four batches. No prior
`wave5-alpha.md` existed — this is the wave's first Alpha dispatch, not a resume.

**Read in full.** `CLAUDE.md`; `AUDIT-WORKFLOW.md` §6 (evidence-class table,
positive-determination standard), §10, §11 (D1–D5, R1–R3), and the
`content-policy.mjs` row of the tool table; the dispatch brief and
`research/audit/wave5-A4-concurrence-task.md`; `research/audit/wave5-run-state.json`
(halt record); `wave5-topology-countability.provenance.jsonl` (all 73 rows) and
`wave5-topology-separation.provenance.jsonl` (all 72 rows); the escalation
sections of `wave5-topology-countability.findings.md`; `tools/gates.mjs` A4 rows
and `tools/content-policy.mjs` ledger-schema block; and, on disk, all eight
escalated items plus `def-lindelof-degree-and-cellularity`.

**Source checked directly.** `https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf`
fetched and read via `pdftotext -layout` (§5A4A and §5A4B extracted verbatim).
The WebFetch markdown path returned only compressed PDF streams and was
discarded as unreadable — the concurrence rests on the extracted text, not on
that failed fetch.

**Inherited open actions:** none. **Exact next action at the time of writing:**
report the residual real-analysis A4 blockers to the orchestrator; they are not
Alpha adjudications.

---

## Decision — D2 evidence-class concurrence: 8 rows, all CONCURRED

The dispatch named one row. **The gate blocks on eight**, across two batches.
Cause: the driver's halt record stores only `content-policy`'s first error line,
so `wave5-run-state.json` showed one of seven countability errors and none of the
separation error. This is a reporting artifact of the halt record, not a
disagreement — the underlying gate was always explicit. All eight are the same
D2 question and all eight are squarely my A6 duty #2, so I adjudicated each on
its own merits rather than only the row I was pointed at.

### `wave5-topology-countability` — 7 rows

| id | decision |
|---|---|
| `lem-weight-is-well-defined` | concurred |
| `lem-density-is-well-defined` | concurred |
| `lem-character-is-well-defined` | concurred |
| `lem-lindelof-degree-is-well-defined` | concurred (the named row) |
| `lem-cellularity-is-well-defined` | concurred |
| `rem-countability-axiom-implication-and-choice-ledger` | concurred |
| `rem-euclidean-topology-dictionary` | concurred |

**The five well-definedness lemmas.** Fremlin 5A4A matches the library's
definitions exactly, including the **raw** (un-normalized, no `+ω`) convention
the two definition pages declare: `w(X)` "the least cardinal of any base for T"
(a); `d(X)` "the smallest cardinal of any dense subset" (c); `c(X) = sup{#(G) :
G ⊆ T\{∅} is disjoint}` (d); `L(X)` "the least cardinal κ such that every open
cover of X has a subcover with cardinal at most κ" (g)(i); `χ(x,X)` "the smallest
cardinal of any base of neighbourhoods of x", `χ(X) = sup_x χ(x,X)` (h).

Beta's characterisation is exactly right: Fremlin **writes each minimum and
supremum down without proving it exists**. I take the same view Beta did on the
class, and for a reason worth recording — a definition that *presupposes* a least
element is not a "semantically identical statement" of the proposition that the
least element exists, so `semantic-source` would overclaim. `established-knowledge`
is the honest and the stricter class, since it rests on my concurrence rather than
on a URL that does not carry the proposition. Beta chose the conservative label.

I independently concur the statements are standard: under AC every set has a
cardinality; the relevant families are sets (subfamilies of the topology, subsets
of `X`); so the cardinalities form a nonempty set of cardinals, which has a least
member and a set-sized supremum. Routine set-theoretic topology (Juhász, *Cardinal
Functions in Topology*; Engelking, *General Topology*). No positive indication of
AI novelty exists, so the positive-determination standard **forbids**
`ai-generated`. Statements stay `ai-altered`.

**The two remarks**, read with the standing remark-suspicion rule and checked
claim by claim rather than accepted as orientation prose:

- `rem-countability-axiom-implication-and-choice-ledger` — second countable ⇒
  first countable (choice-free); with `AC_ω`, second countable ⇒ separable and
  Lindelöf (both standard, both genuinely spend countable choice); separable ⇒ ccc
  (choice-free, since a countable dense set is indexed). Its sharpest claim is the
  raw-convention one, and it is correct: with un-normalized cardinal functions the
  metric result is `d = w` — confirmed against Fremlin 5A4B(h)(i), which states
  `d(X) = w(X)` for metrizable `X` under those same raw conventions — while a
  blanket equality of all five functions is **false**, since a finite discrete
  space on `n > 1` points has `w = d = c = n` but `χ = 1`. The remark is right to
  refuse the blanket form.
- `rem-euclidean-topology-dictionary` — the product topology on `ℝⁿ` coincides
  with the `d₁`, `d₂`, `d_∞` metric topologies; every norm on `ℝⁿ` is equivalent
  to the Euclidean norm and induces that topology; for `n = 1` the Euclidean
  metric is `|s−t|` and the metric and real-line formulations agree. All standard,
  each proved in-library by the cited deps.

In both, only the per-page assembly is local, and assembling proved standard facts
into orientation prose is not AI-invented mathematics.

### `wave5-topology-separation` — 1 row

`ex-free-ultrafilter-converging-in-a-convergent-sequence-space` — **concurred.**
This is the only row in the wave that genuinely uses the URL waiver (`urls: []`).

The identification of the space needed checking rather than assuming: the item
gives `∞` the neighbourhood base `U_N = {∞} ∪ {n : n ≥ N}`, i.e. **tails**, not
complements of finite sets. It holds, because a subset of `ℕ` contains a tail iff
it is cofinite (if `ℕ\S` is finite, take `N = max(ℕ\S)+1`). The two neighbourhood
filters at `∞` coincide, so the space is the one-point compactification of
discrete `ℕ`, equivalently the convergent-sequence space.

The claim is standard on two independent routes: directly, a free ultrafilter
contains no finite set, hence every cofinite set, hence every tail, hence converges
to `∞`; structurally, the one-point compactification is compact so every
ultrafilter converges, and a free one cannot converge to an isolated natural.

On the source, I searched independently and reproduce Beta's result: every
*ingredient* is locatable (Encyclopedia of Mathematics "Ultrafilter"; Norwood,
*Filter convergence and Tychonoff's theorem*, Cornell) but no single source states
this example as a proposition. That is precisely what D2 reserves. The row
correctly carries no URL and correctly does **not** claim the item's Wikipedia
"Ultrafilter (set theory)" reference as a statement source — that supports an
ingredient. Checked separately for a title-overclaims-proof defect and found none:
title and Statement assert the existential, and the Verification proves the
existential.

### Scope of these concurrences

Each certifies the **Statement** as standard established mathematics. **None is a
proof certification.** Proof provenance stays `ai-generated` on all six
proof-bearing items, and the five well-definedness lemmas remain in the batch's
A6 **CRITICAL** refuter set, needing a proof-refuter reading and a `risk_review`
disposition before A7.

### What was written

Additive only, on exactly the 8 rows. Each Beta `rationale` is preserved
**byte-identical**; my determination is a separate `alpha_rationale`, with
`alpha_concurred: true` and `alpha_at`. `escalated_to_alpha: true` is retained as
the historical record. Verified by row-by-row structural diff against a
pre-edit copy: 73/73 and 72/72 rows compared, no reordering, no field removed, no
existing field altered except `alpha_concurred`.

**No item file was edited.** Both apply scripts write only their ledger. The seven
countability items and the separation item show as modified in the working tree
because A4's retag had already written their `provenance` blocks before this
dispatch. No provenance tag needed to change, since `ai-altered` is upheld
throughout.

Scripts: `research/audit/apply-wave5-alpha-concurrence.mjs`,
`research/audit/apply-wave5-alpha-concurrence-separation.mjs`.

---

## Wave-wide concurrence status: CLOSED

Zero unconcurred `established-knowledge` rows remain in any wave-5 batch. Nothing
further will bounce back to Alpha on this class.

| batch | exact-source | semantic-source | established-knowledge | trivial | none |
|---|---|---|---|---|---|
| real-analysis | 15 | 13 | 0 | 3 | 0 |
| topology-countability | 13 | 49 | 7 (all concurred) | 4 | 0 |
| topology-function-spaces | 11 | 21 | 0 | 0 | 1 |
| topology-separation | 27 | 44 | 1 (concurred) | 0 | 0 |

---

## Residual A4 blockers — NOT Alpha adjudications

After the concurrences, A4 still fails, and everything left is in the
**real-analysis** batch. Both are mechanical and neither is mine to settle.

**1. `content-policy`: 124 errors = 31 items × 4 codes.** Every one of the 31
real-analysis items **has no `provenance:` block on disk at all**. The ledger
holds complete determinations for all 31 (15 exact-source, 13 semantic-source,
3 trivial); they were simply never written to the item frontmatter. Corroborating
evidence: `research/audit/` contains `apply-wave5-fs-retag.mjs`,
`apply-wave5-sep-retag.mjs` and `wave5-topology-countability.apply-retag.mjs` —
**no real-analysis retag script was ever written**. Codes:
`provenance-statement-missing`, `provenance-proof-missing`,
`audit-ledger-mismatch`, `audit-ledger-evidence-mismatch`, 31 each.

This is A4 Beta work, not adjudication: it must apply the ledger determinations
to frontmatter and, per D5, delete any legacy `authorship` in the same edit. I
deliberately did not author it — done under the wrong batch conventions it would
be worse than leaving it, and it is outside this dispatch.

**2. `proof-contract --strict`: 3 `citation-uses` errors**, also all
real-analysis, and the subject of the already-prepared
`research/audit/wave5-A4-contract-fix-task.md`:

- `ex-nested-intervals-single-point`: `L8 → def-complete-ordered-field`
- `ex-nested-intervals-single-point`: `L8 → def-ordered-field`
- `cex-nested-open-intervals-empty`: `L5 → thm-nested-interval-property`

Verified clean after my edits: `content-policy --audit` on
`wave5-topology-countability` (73 items) and on `wave5-topology-separation`
(72 items) each report **0 errors, 0 warnings**; `wave5-topology-function-spaces`
reports 0 errors and 1 pre-existing warning (`generated-kind` on
`rem-function-space-conventions`, a legacy truth-risk finding for A6 genrisk
disposition, not a gate failure).

---

## Findings carried forward to A6

- **N1 (Beta, upheld).** `rem-euclidean-topology-dictionary` titles its first
  reference "J. R. Munkres, *Topology*, 2nd ed., §§19, 20" but points it at
  `https://en.wikipedia.org/wiki/James_Munkres` — the biography of the person,
  not the cited text. A citation-precision defect for A6 repair. It does not
  affect the evidence class, which waives the URL requirement outright, and the
  item's other two URLs do support the content.
- **Refuter obligation.** The five well-definedness lemmas are `risk-report`
  CRITICAL and carry `ai-generated` proofs. Their statements are now settled;
  their proofs are not. Each needs a DeepSeek refuter reading with its context
  assembled into a `--task` file, and an Alpha `risk_review` record, before A7.
- **`rem-function-space-conventions`** — `ai-generated` remark, `generated-kind`
  warning, needs a counterexample search and a genrisk cone disposition at A6.

---

# A6 — Alpha audit

## Recovery receipt (2026-08-05, A6 dispatch)

**Baseline.** Branch `main`, HEAD `0649370`. Working tree dirty at entry: 358
paths, the completed A4 retag of all four batches plus the wave's artifacts. This
is the wave's **second** Alpha dispatch: the A4-concurrence dispatch recorded
above is my own, so this is a resumed role and the recovery protocol applies in
full.

**Read in full.** `CLAUDE.md`; `AUDIT-WORKFLOW.md` end to end (all eleven
sections, not only §7); the A6 dispatch brief; my own A4-concurrence report above;
`research/audit/wave5-run-state.json`; `research/audit/RESUME.md`;
`research/audit/wave5-batch-split.json`, `wave5-split.json`,
`wave5-impact-template.json`, `wave5-audit-manifest.json` (summary and every
non-same-batch edge), `genrisk.json`, and the wave-5 provenance ledgers; the
`A4`/`A6` rows of `tools/gates.mjs`; `tools/risk-report.mjs`,
`tools/impact-audit.mjs`, `tools/genrisk.mjs` and `tools/dispatch.mjs` in the
parts that decide what each gate requires; and on disk the eleven material items
with their `git diff` against HEAD, the four cross-batch targets, and the items
named below.

**Verified from disk, not from a report.**

- **A4 is now clear.** `gates.mjs --audit --step A4 --run wave5` reports
  **STEP A4 CLEAR**, 13/13. Both residual blockers I recorded at the previous
  dispatch — the 31 untagged real-analysis items and the three `citation-uses`
  contract errors — were closed by the orchestrator's follow-up Beta dispatches
  (`audit-beta-real-analysis-retag`, `-contractfix`) before this dispatch began.
  I re-ran the gate rather than accepting that.
- **A6 entry state:** four required gates failing, all four mine —
  `depcheck` (11 `published-unaudited`), `risk-report --require-reviewed`
  (131), `genrisk --receipt` (3 dispositions + a stale ledger), and a missing
  `impact-audit` receipt.

**The halt record undercounts, again.** `gates.mjs` printed 4 `published-unaudited`
lines, 6 `risk-review-missing` and 6 `receipt-seed-missing`. Re-running each tool
directly gives **11, 131 and 8**. The truncation is display-side, so a dispatch
briefed from the halt text alone would have audited a third of the actual A6
surface. Every count in this report is from a direct tool run.

**Handoffs the A6 efficiency protocol owes Alpha, as actually received.**

| handoff | status |
|---|---|
| pure/material split (`audit-split.mjs`) | **received** — `wave5-split.json`, 198 pure / 11 material / 0 created. Spot-checked: the 209 changed interfaces `impact-audit` computes from `pre-A4` are exactly the 198 + 11, with nothing unclassified. |
| stage touch snapshots | **received, with a deviation** — `pre-A4` and `post-A4` exist, but the ledger also holds **nine per-item/per-repair snapshots** written by the Betas (`pre-A4-fs-F1`, `pre-repair-lem-ordinal-order-topology-is-t3`, …). §7.4 reserves snapshots to the orchestrator at stage level, and per-item snapshots are what manufactured wave 2's phantom twice-touched list. Nine is far short of wave 2's 267 and the ledger is 5.4 MB rather than 95 MB, so I used it as-is and did **not** take one of my own. Recorded as a process finding, not a defect. |
| URL liveness table | **NOT received.** Nothing in `research/audit/` or the dispatch directory holds one. I ran the sweep myself rather than leave it undone; results below. |

**Inherited open actions:** the three carried forward from my A4-concurrence
report (N1 Munkres biography URL; refuter readings for the five
well-definedness lemmas; `rem-function-space-conventions` truth-risk).
**Exact next action at the time of writing:** dispatch the refuter fleet, then
work the four failing gates in the order genrisk → impact → certification →
risk_review.

## URL liveness sweep — run by Alpha, because the handoff omitted it

143 unique URLs (129 from the four wave-5 provenance ledgers, 136 on disk in the
209 scoped items, overlapping). Swept twice: the first pass returned 61 Wikipedia
`429`s, which are this host being rate-limited and **not** dead links — re-swept
paced at 1.2 s with a declared user agent, 60 of the 61 returned `200`.

Final: **139 live, 3 not.**

| URL | code | where | disposition |
|---|---|---|---|
| `ncatlab.org/nlab/show/sequential+fan` | 404 | `ex-sequential-fan-is-frechet-urysohn-not-first-countable` | **REPAIRED.** nLab has no such page. The entry was also redundant: the item's Dan Ma reference defines the sequential fan and states its failure of first countability, which I verified by fetching and reading it, and the Fréchet–Urysohn Wikipedia entry covers the other half. Dead entry removed; two live on-topic sources remain, so the `ai-altered` statement keeps its reader-visible URL. |
| `en.wikipedia.org/wiki/Rings_of_Continuous_Functions` | 404 | `def-zero-sets-and-cozero-sets` | **REPAIRED.** No Wikipedia article exists for the Gillman–Jerison book. Repointed to the publisher's record for that exact book, `link.springer.com/book/10.1007/978-1-4615-7819-2` (200). The title line is unchanged, so the citation now resolves to the work it always named. |
| `math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html` | connection timeout | **20 items** of the nets-and-filters pair | **RECORDED, NOT REPAIRED.** DNS resolves (157.182.4.104) and `wvu.edu` itself answers (403 to a bare agent), but `math.wvu.edu` times out at 40 s on every attempt, while a control `.edu` PDF (`faculty.etsu.edu`) returns 200. I cannot distinguish "withdrawn" from "unreachable from this network", and stripping a reference from 20 published items on one host's silence would be the worse error. Checked instead that it is nowhere load-bearing: **all 20 carry at least one other live URL**, so no `literature-derived`/`ai-altered` tag loses its reader-visible source. A10 queue. |

Both repairs are `sources`-only; `audit-split.mjs` re-run confirms both items stay
in the **pure** class (198 pure / 11 material, unchanged), so no impact closure is
triggered and no `verification.judge` is voided — SCHEMA's material-rewrite test
is explicit that a citation change asserting no new claim does not count.

### N1, and what it actually is

My A4-concurrence report carried `rem-euclidean-topology-dictionary`'s Munkres
reference — titled for the book, pointed at
`en.wikipedia.org/wiki/James_Munkres`, the biography of the person — forward as
"a citation-precision defect for A6 repair". Measured across the corpus it is
**144 items**, not one, and it is the same class the wave-0 A10 queue already
carries as "about-the-book URL pattern (Stanley/Halmos/Rudin/Tao)". The link is
live and honestly titled; the reader reaches the author, not a wrong book.

I am therefore **not** repairing it: a 144-item convention change reaches far
outside wave-5 scope, and Wikipedia has no article for the book to point at
(`Topology_(Munkres)` and `Topology_(book)` both 404). It goes to the A10 owner
queue with the measured count, which the owner did not have when the class was
first queued. Downgraded from "defect for A6 repair" to a nonfatal
citation-precision quirk.

---

# A6 — Round 3

## Recovery receipt (2026-08-05, A6 round-3 dispatch)

**Baseline.** Branch `main`, HEAD `ffacec0` ("chore(audit): checkpoint wave 5
through A4 and the A6 first pass") at entry, with a dirty working tree carrying
the wave's in-flight artifacts and the eleven round-2 item repairs. **The
orchestrator committed those mid-round** as `7e4f64e` ("chore(audit): wave 5 A6
rounds 1-2 — certification, genrisk, URL sweep; risk_review still open"), which
is why the eleven item files no longer appear as modified; Alpha edited no item
file in this round, before or after that commit.

**Read in full.** `CLAUDE.md`; the round-3 dispatch brief; this whole report
(my own A4-concurrence and A6 round-1 sections); the round-2 dispatch result
record `research/audit/wave5-dispatch/audit-alpha-a6-round2.result.json`;
`research/audit/wave5-gen-risk-reviews.mjs` and `wave5-run-refuters.mjs`;
`wave5-risk.json`; all four batch proof-contract files; `genrisk.json`; and the
`A6` rows of `tools/gates.mjs`.

**Verified from disk, not from a report.** The round-3 entry state was
`risk_review` complete for **0 of 131** required items, exactly as the dispatch
states. Two rounds of `alpha-read`/`refuter-read` analysis existed; no record had
been written.

**Inherited open actions:** the 131 `risk_review` records and the 3 remaining
`genrisk` `receipt-disposition-missing` seeds.

## What was done, and in what order

The dispatch's diagnosis was correct: the failure was ordering, not reading. This
round wrote the records **first**.

### 1. `risk_review` — 131 of 131, complete

Two rounds had left 48 items with a returning DeepSeek refuter lane and 83
without. Rather than write one uniform sentence across all 131, the records are
generated per item from what actually backs each one, in the three honest
categories the dispatch named.

**Alpha read all 100 items that lacked a returning lane at the start of this
round — in full, from disk, this round.** For each: the Statement, the Facts,
every numbered proof step checked against the facts that step cites, and the
Remark prose read with a numbered step's suspicion. Each `[F#]`/`[A#]`/`[L#]`
fact was checked against Alpha's own knowledge of the standard result it names;
a cited dependency page was opened on disk where the item's use of it was in
doubt, and the per-item note says so where that happened. Several arithmetic and
combinatorial cores were re-derived rather than read: the cardinal-supremum
argument of `lem-character-is-well-defined`, the Δ-system induction of
`lem-uncountable-delta-system-for-finite-sets`, the subtracted-closure
construction of `thm-perfectly-normal-implies-completely-normal`, the whole
non-regularity chain of `lem-the-k-topology-is-hausdorff-and-not-regular`, the
truncation estimate of `thm-metric-spaces-are-tychonoff-and-perfectly-normal`,
the three-topology comparison bound, and the error bound of
`ex-contractive-sequence-fixed-point`.

**This is a single-reader, same-family reading and the notes say so.** Each
`alpha-read` note states plainly that it is weaker evidence than a cross-family
refuter lane. Each note also states that the tier is a score over dependency
count, biconditionals and analytic limiting language — so it ordered the reading
and is not itself a finding. That matters here: 101 of 155 scoped items land
CRITICAL, and none of that arithmetic is evidence about a proof.

The generator's two boilerplate sentences were **rewritten before use**, because
as inherited they overclaimed: the `alpha-read` branch asserted that every `[L#]`
fact had been "checked against the cited dependency on disk", and the
`refuter-read` branch asserted that Alpha had checked on disk every
cross-reference the tool-less lane could not verify. Neither was true as a
blanket claim. Both now describe what was actually done.

Per-item adjudications: `research/audit/wave5-risk-adjudications.json` (100
entries, one per item Alpha read). Generator:
`research/audit/wave5-gen-risk-reviews.mjs`, run against that file; it writes
into the four **batch** contract files, which the orchestrator re-merges.

`risk-report.mjs --require-reviewed`: **0 errors, 155 items routed.**

### 2. Findings from the 100-item read — all NONFATAL, none repaired

This round licensed no mathematical edit, so every finding below is **recorded in
its item's `risk_review` note and left in place**. Each is inside the binding
30-second threshold; none is a fatal defect.

| item | finding |
|---|---|
| `thm-cantor-cubes-are-ccc` | Step 2.1 applies the Δ-system lemma to the supports `F_U` without first showing the family of supports is uncountable; `U ↦ F_U` need not be injective. Closes in one line: a fixed finite support carries only `2^{|F|}` cylinders, so the map is finite-to-one. |
| `lem-compact-closed-balls-in-a-locally-compact-metric-space` | Step 1.2 binds `r` as an arbitrary radius; step 2.3 **rebinds the same letter** to `min{s,r₀}/2`. Reconciled by reading 2.3 as an instance of the arbitrary case, which is what step 6.1 does. |
| `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` | The Statement attributes the pointwise-nonincreasing claim to "step 2.2 below"; it is step **2.1**. Misdirected internal pointer; the claim it points at is proved. |
| `lem-cauchy-sequence-bounded` | A Remark justifies "divergent, hence not Cauchy" by citing `lem-convergent-implies-cauchy`, the converse direction, which does no work there; the needed citation (`thm-cauchy-criterion-via-lub`) is present in the same parenthesis. |
| `cex-unbounded-with-convergent-subsequence` | A Remark describes replacing the unbounded branch by a second constant and cites `ex-two-subsequential-limits`, which is instead the perturbed alternating sequence. The cited item **is** a bounded divergent sequence with two subsequential limits, so only the described construction is mismatched. |
| `ex-neighbourhood-indexed-net-converging-to-a-closure-point` | `[L1]` ("every neighbourhood of `p` meets `A`") is attributed to `thm-closure-characterised-by-nets`; that is the statement of `thm-closure-characterisation-top`. The cited target yields it in one step. |
| `thm-unordered-summability-of-real-families` | Step 2.2 says the enumerated partial sums are "bounded by step 1.1", but 1.1 bounds sums over finite sets **disjoint from `F₀`**; the finitely many indices of `S` inside `F₀` need the same one-line adjustment 1.1 itself uses. |
| `ex-sequential-fan-is-frechet-urysohn-not-first-countable` | Step 1.1's contradiction builds a neighbourhood containing `∞` and calls it disjoint from `A`, presuming `∞ ∉ A`; the excluded case is trivial. |
| `ex-arens-space-is-sequential-not-frechet-urysohn` | Same shape: step 1.2 builds a neighbourhood of `∞` disjoint from `C` without first disposing of the trivial case `∞ ∈ C`. |
| `thm-metric-weight-equals-density` | The proof writes both the metric and a point of `D` as `d`, so `d(x,d)` appears. Unambiguous in context. |
| `lem-punctured-rn-is-polygonally-connected` | Fact `[L2]` is garbled ("cannot lie on a segment from `x` to `0`, except at no point") and states nothing usable; step 2.1 carries out the computation in full and does not depend on it. |

**Positional and cross-page claims were checked, not assumed**, because round 2
found a false one of exactly this class. Every one checked out: the four
"next/previous/last … on this page" claims across the function-space examples
resolve correctly against the page manifest of
`library/topology/function-space-topologies-examples.md`; the companion-page
pointer in `fs-every-normal-space-is-hausdorff` resolves to
`ex-the-discrete-and-indiscrete-extremes-of-the-hierarchy`; the forward pointer
in `ex-sierpinski-space-is-t0-normal-and-not-regular` resolves to
`fs-every-regular-space-is-normal`; the tube-lemma pointer in
`lem-tube-lemma-for-a-compact-metric-factor` resolves to
`lem-tube-lemma-for-a-compact-factor`; and the "nine forms" claim about
`def-interval` in `cex-nested-unbounded-closed-empty` is accurate.

**The two round-2 repairs were re-read against current disk text and both hold.**
`ex-the-particular-point-topology-in-the-separation-hierarchy` now carries the
size hypotheses on each title clause, matching claims 1–4;
`fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` now states
correctly that the spike's area tends to 0 and that the witness therefore does
*not* separate the integral from its pointwise limit.

### 3. `genrisk` — the 3 remaining seeds, all dispositioned

All three have **empty logical cones**: nothing declares them in `deps`, and every
cone edge is a Remarks wikilink or a `forward_refs` entry. Tried in the required
order:

- **RETAG declined** on all three. `AUDIT-WORKFLOW.md`'s `trivial` row assigns a
  bespoke checkable witness to `ai-generated` precisely so `content-policy` bars
  it as a future `deps` target. Retagging would **remove** a protection, not add
  one.
- **RESTATE / NARROW declined**: each refuted claim or example is already minimal.
- **UNFOLD inapplicable**: unfolding means deleting a `deps` edge, and there is
  none to delete.
- **VERIFIED-GENERATED**, after Alpha read each construction in full from disk and
  re-derived it, with a counterexample search that found nothing:
  - `cex-strictly-decreasing-gaps-no-limit` — `g₀ = 1`, `g_{j+1} = g_j + 1/g_j`
    satisfies `g_j² ≥ 1 + 2j`, so it diverges; gaps `1/g_j` are strictly
    decreasing and null; the gap ratios `g_j/g_{j+1}` have supremum exactly `1`,
    which is the obstruction the item claims. Refuter lane `a6-011` also read it
    and returned no fatal finding.
  - `cex-unbounded-with-convergent-subsequence` — read in full this round; the
    subsequential limit set is exactly `{1}` because a subsequence meeting the
    even range infinitely often would be unbounded.
  - `ex-contractive-sequence-fixed-point` — `c = 1/3` holds with **equality** at
    every index, and Alpha checked the two numerical Remark claims, which is
    where an invented example would fail: `|x₂ − x₁| = 2|a − 1/2|/9`, and the
    cited error bound `3^{−(k−1)}|x₂−x₁|/(1−1/3)` evaluates to `|a − 1/2|/3^k`,
    which is **exactly** `|1/2 − x_k|`. The bound holds with equality and is not
    overstated. Refuter lane `a6-010` also read it and returned no fatal finding.

### 4. A refuter fleet was relaunched, and it is not what closed this round

`wave5-run-refuters.mjs --skip-done` was relaunched over the full 131-item scope
at the start of the round, at concurrency 8, purely because it costs Alpha no
context and any lane that returns upgrades a note's evidence. It raised
refuter-read coverage from 31 to 48 while the reading was under way. **It did not
gate anything**: the records were written from what had actually returned at
generation time, and the `alpha-read` notes stand on Alpha's own reading. The
fleet was still running at the end of this round; its progress log is
`research/audit/wave5-refuters-round3.progress.log`. A later re-run of the
generator would reclassify further items from `alpha-read` to `refuter-read`
without invalidating anything written here.

The transport-failure rate recorded in round 2 persists: lanes still fail with
`TypeError: terminated`, and `wave5-run-refuters.mjs` still has no retry, unlike
`judge-sweep`. Under the owner's rule those are null results and never verdicts.
Recorded again as a tooling gap.

## Gate state at the end of round 3

`node tools/gates.mjs --audit --step A6 --run wave5` → **STEP A6 CLEAR**, 14/14.

One process note worth recording: `research/audit/wave5-proof-contracts.json`,
the merged file the gate actually reads, was **stale** against the batch files
after the generator ran, and reported six spurious `risk-review-missing` errors
until it was re-merged with `tools/merge-proof-contracts.mjs`. The batch files are
authoritative; the merged file is a build product and must be regenerated after
any batch write.

Two warnings remain and neither is a gate failure:
`content-policy` `generated-kind` on `rem-function-space-conventions`, and
`genrisk` `verified-generated-seed` on `rem-counting-conventions-and-scope`.

**Nothing in this round touched item mathematics**, wrote `verification.judge`,
or edited any item file. The only writes were the four batch contract files,
`genrisk.json`, `wave5-risk-adjudications.json`, the merged contract file, the
generator script, and this report.

**Exact next action:** A7. No `risk_review` record is outstanding.

---

# A8 — Adjudicate judge rejections

## Recovery receipt (2026-08-06, A8 dispatch)

**Baseline.** Branch `main`, HEAD `7e4f64e` ("chore(audit): wave 5 A6 rounds 1-2
— certification, genrisk, URL sweep; risk_review still open"). Working tree
dirty with the wave's artifacts; **no item file modified at entry**, and none
modified by me before the adjudications recorded below.

**Read in full.** `CLAUDE.md`; the A8 dispatch brief
(`research/audit/wave5-dispatch/audit-alpha-a8.prompt.md`, byte-identical to the
A6 brief); `research/audit/RESUME.md` (its head section is still WAVE 4 — see the
process finding below); this whole report, including my own A4-concurrence and
A6 round-1/round-3 sections; `research/audit/wave5-run-state.json`;
`research/audit/wave5-judge.jsonl` (all 418 rows); `tools/step8-guard.mjs` and
`tools/item-hash.mjs` for the hash convention.

**Verified from disk, not from a report.**

- `gates.mjs --audit --step A6 --run wave5` → **STEP A6 CLEAR, 14/14**. A6 has
  not regressed since round 3.
- The `pre-a8` snapshot **already exists** in `wave5-touches.json`, written by
  the driver at `2026-08-05T14:12:45.751Z` at the A8 step-begin, before any
  adjudication. It is a valid baseline and I did **not** take a second one — the
  brief reserves stage snapshots and a duplicate label is what mis-bracketed
  wave 4's impact receipt.
- `wave5-judge-adjudications.jsonl` did not exist at entry; this dispatch creates
  it.

**Inherited open actions:** none from A6; A6 closed with no outstanding
`risk_review` record.

## A7 coverage defect the orchestrator must close — 69 Sonnet nulls

The A7 sweep is **not complete**, and `run-state` records A7 as
`step-complete` with `gates exit 0` anyway.

| lane | keep | reject | null |
|---|---|---|---|
| `deepseek-v4-pro` | 170 | 39 | **0** |
| `claude-sonnet-5` | 116 | 24 | **69** |

All 69 nulls carry the identical reason
`NO_CONTENT: You've hit your session limit · resets 12:10am (Australia/Sydney)`.
That is a **capacity refusal**, which the owner's standing rule names explicitly:
"a capacity refusal — whether from a subscription or from the kernel — is a null
verdict, not a verdict." So 69 of 209 scoped items have **one lane only**, and no
paired coverage exists for them. This is the orchestrator's lane to re-run (Alpha
cannot launch judge children — the EPERM finding is on the wave-1b record); I
adjudicate what returned and flag the gap rather than treat a null as a pass.
**A10 must not report this wave as paired-covered until those 69 are swept.**

## Rejection census

63 rejections / **54 distinct items** — DeepSeek 39, Sonnet 24, both lanes on 9
items. Every item carries exactly one context hash, so there is no
stale-context ambiguity.

## Adjudications — settled so far

### CONFIRMED FATAL

1. **`fs-consecutive-differences-null-implies-cauchy`** (deepseek) — its Remark
   opens "**Both false statements on this page have the same shape.**" The page
   `library/real-analysis/monotone-sequences-and-cauchy-completeness.md` lists
   `examples: [fs-nested-open-intervals-nonempty,
   fs-consecutive-differences-null-implies-cauchy,
   fs-convergent-subsequence-implies-bounded]` — **three** false statements, not
   two. The claim about the page's own contents is false. DeepSeek's own
   identification of "the other one" is itself wrong (it names one of the two
   others), but its detection is right. `prosecheck` passes, so no gate reads
   this class of claim. Type `other`.
2. **`def-regular-and-t3-spaces`** (deepseek) — Remark: "Neither axiom implies
   the other without $T_1$, and the two false statements of this page make that
   precise." The page carries **four** false statements
   (`fs-every-t1-space-is-hausdorff`, `fs-every-normal-space-is-hausdorff`,
   `fs-every-hausdorff-space-is-regular`,
   `fs-unique-sequential-limits-imply-hausdorff`), and **none of them is about
   regular vs normal**. Worse, the sibling `def-normal-and-t4-spaces` on the same
   page states the opposite in terms: "Whether *regularity* implies normality is
   a question this page leaves open … nothing above asserts an answer and no
   false statement asserting one is planted here." A published item asserting
   that the page settles what its sibling says the page leaves open. Type
   `other`.
3. **`ex-contractive-sequence-fixed-point`** (sonnet) — Remark: "so $c = 1/3$ is
   the smallest admissible contraction constant". The Statement fixes **any**
   $a \in \mathbb{R}$; at $a = 1/2$ the sequence is constant (the item's own last
   Remark says so), and its cited `def-contractive-sequence` states
   "**Degenerate cases are included.** A constant sequence is contractive with
   every $c \in (0,1)$, all the gaps being $0$." So at an allowed starting value
   every $c \in (0,1)$ is admissible and $1/3$ is not the smallest. False claim
   in a Remark, refuted by the item's own cited definition. Type `other`.
   **Recorded against myself:** at A6 round 3 I disposed this item
   `verified-generated` and checked its two numerical Remark claims; I did not
   check this one. The Sonnet lane found what my own reading missed.
4. **`thm-radial-straight-line-map-on-punctured-rn`** (deepseek) — [L4] reads
   "Sums, products, and quotients with nowhere-zero denominator of continuous
   real-valued functions are continuous ([[thm-algebra-of-continuous-functions]]
   …)", and step 1.2 applies it to functions on $P \times [0,1]$. The cited
   theorem opens "Let $A \subseteq \mathbb{R}$" — **real domains only**. [L4]
   silently widens the domain, which the owner's Beta dependency-discipline rule
   forbids by name ("no changed domain"). The needed result **does exist in the
   library**, one item away: `lem-algebra-of-continuous-real-maps-on-a-space`,
   "Sums, products, absolute values, finite maxima and minima, and quotients of
   continuous real-valued maps on a topological space are continuous where
   defined". Type `dependency_citation`.

### FALSE POSITIVE

5. **`def-order-topology-on-an-ordinal`** (deepseek) — DeepSeek alleges the
   closing Remark's equivalence is false, "e.g., in omega_1, [0,omega] is open in
   B_gamma's topology but not in the order topology." **It is open.**
   `def-order-topology-on-a-linearly-ordered-set` defines the subbasis as
   "$L_{<a} := \{\, t \in L : t < a \,\}$ … $\mathcal{S}_L := \{\, L_{<a} : a \in
   L \,\} \cup \{\, L_{>a} : a \in L \,\}$". Since $\omega + 1 \in \omega_1$,
   $[0,\omega] = \{\xi : \xi \le \omega\} = \{\xi : \xi < \omega+1\} =
   L_{<\omega+1}$ — an open ray, hence subbasic open. The general claim holds:
   $[0,\beta] = L_{<\beta^{+}}$ and $(\alpha,\beta] = L_{>\alpha} \cap
   L_{<\beta^{+}}$ when $\beta^{+} \in \gamma$, and equal $\gamma$ or
   $L_{>\alpha}$ when $\beta^{+} = \gamma$; conversely $(\alpha,\beta) =
   \bigcup_{\alpha<\eta<\beta}(\alpha,\eta]$, $L_{<\beta} =
   \bigcup_{\eta<\beta}[0,\eta]$ and $L_{>\alpha} = \bigcup_{\eta>\alpha}
   (\alpha,\eta]$. The counterexample offered is not one.
6. **`thm-dini`** (deepseek) — alleges `def-topology-of-uniform-convergence`
   requires a nonempty domain, so `thm-dini` needs $X \ne \varnothing$ added.
   The cited definition's own Remark says the opposite: "**$X$ is nonempty
   throughout.** The uniform metric is defined only for nonempty [domains] …
   [uniform convergence] makes sense for $X = \varnothing$ and is vacuous, every
   sequence converging uniformly to the unique element of $Y^{\varnothing}$".
   `thm-dini` concludes uniform *convergence*, not membership of a uniform
   metric space, and its step 3.1 disposes of the empty case explicitly: "If
   $X = \varnothing$ the conclusion holds with $N := 0$, the condition being
   vacuous". Nothing is missing.

### CONFIRMED NONFATAL (ledger row only, no edit — R1)

7. **`rem-countability-axiom-implication-and-choice-ledger`** (sonnet) — "The
   displayed counterexamples show that the reverse implications and the stated
   hereditary and productive extensions fail." Sonnet reads this as denying
   `prop-second-countability-is-hereditary` and
   `thm-countable-products-of-second-countable-spaces`, both in the remark's own
   deps. The sentence's evidence is "the displayed counterexamples", and the
   displayed counterexamples are named false statements
   (`fs-separability-is-hereditary`, `fs-lindelofness-is-hereditary`,
   `fs-lindelofness-is-productive`) — none about second countability, whose
   positive results are proved on the same page. Ambiguous prose whose false
   reading is closed by looking at what the counterexamples are.
8. **`fs-the-compact-open-topology-is-always-metrizable`** (sonnet) — Sonnet is
   factually right: the Statement says AC_omega "is flagged where it is spent, at
   step 5.1", step 5.1 uses no choice, and step 9.1 says in bold "**this step and
   only this step uses the Axiom of Countable Choice**". A misdirected internal
   step pointer, the same class I ruled nonfatal at A6 round 3 for
   `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous`
   ("step 2.2 below"; it is 2.1). The substantive claims — used once, AC_omega,
   flagged in the proof — are all true, and the proof carries the correct flag.
   Consistency with my own A6 ruling decides it. **Raised to A10** as a policy
   question: the choice ledger is a load-bearing house mechanism, and the owner
   may want a wrong numeral *in the choice ledger specifically* treated as fatal.
9. **`thm-compactness-via-nets-filters-and-ultrafilters`** (deepseek) and
   **`lem-every-net-has-a-universal-subnet`** (deepseek) — both allege the items
   spend AC while claiming only the ultrafilter lemma, because their facts cite
   `thm-ultrafilter-lemma` ("**Assume the Axiom of Choice**"). Both items assume
   UL in title and Statement, and the compactness one writes "**Given:** A
   topological space $X$ and the ultrafilter lemma." The fact's *content* is the
   assumed hypothesis; the wikilink names where the library proves it. No AC
   enters either conclusion. Attribution imprecision, not a choice-scope defect.
10. **`ex-cardinal-functions-of-the-real-line`** (sonnet) — correct that the
    finiteness sentence rules out finite bases, local bases, covers and cellular
    families but never rules out a finite dense set, which the raw convention
    allows. The conclusion $d(\mathbb{R}) = \aleph_0$ is true and the gap is one
    line: a finite subset of $\mathbb{R}$ is closed and proper, hence not dense.
11. **`ex-arens-space-is-sequential-not-frechet-urysohn`** (deepseek) — step 1.2
    infers "$C$ meets its $n$-th row arbitrarily far out" from $x_n \in
    \overline{C}$ without first excluding $x_n \in C$. The excluded case is
    trivial: $x_n \in C$ *is* the conclusion being proved. Same shape as the two
    findings I already recorded at A6 round 3 for this item and the sequential
    fan, and ruled nonfatal there.
12. **`ex-punctured-line-versus-punctured-plane`** (sonnet) — the
    $GL_1(\mathbb{R}) = \mathbb{R}\setminus\{0\}$ identification carries no
    citation and $GL_n$ is in no dep. True and immediate (a $1\times1$ matrix
    $(a)$ is invertible iff $a \ne 0$), and the item's mathematics does not rest
    on it. Uncited elementary identification, minor citational quirk.

**Exact next action:** finish the remaining ~45 rejections, dominated by the
citation-fidelity class ("[L#] claims X citing Y; Y does not state X"); check
`lem-radial-normalisation-is-continuous` (both lanes),
`thm-uniform-limit-theorem`, `def-euclidean-spheres-and-closed-balls` and
`cex-nested-unbounded-closed-empty` individually, since each alleges something
sharper than a 30-second gap. Then write
`wave5-judge-adjudications.jsonl`, apply the fatal repairs, certify them with an
independent Sonnet reader, and run `step8-guard`.

## A8 — final record

### Ledger

`research/audit/wave5-judge-adjudications.jsonl` — **63 rows**, one per
`(id, model, context_sha256)` rejection, none unadjudicated. Every row carries
`item_sha256`, the sha256 of the normalized item text (verification block
stripped, `tools/item-hash.mjs`) **as it stood before any A8 edit**, so each
fatal licence attests to the text I actually adjudicated.

| outcome | rows |
|---|---|
| `confirmed_nonfatal` | 54 |
| `confirmed_fatal` | 6 (5 items; `lem-radial-normalisation-is-continuous` was rejected by both lanes) |
| `false_positive` | 3 |

Fatal types: `other` 3, `dependency_citation` 3.

By lane: DeepSeek 39 rejections → 3 fatal / 3 false positive / 33 nonfatal
(**92.3% precision**). Sonnet 24 rejections → 3 fatal / 0 false positive /
21 nonfatal (**100% precision**, on 24 adjudicated). Sonnet's measured 60.0%
from the pre-JSON-constraint era does not reproduce here — but the sample is 24,
and 69 of its calls never ran, so this is a datum for A10, not a settled
re-measurement.

### The 54 nonfatals are one class, and it is worth naming

**Roughly 45 of the 54 are the same finding**: "Fact `[F#]`/`[L#]` claims X citing
Y; Y does not state X", where X is a true elementary fact one line from its
cited target — `|t| \le M \iff -M \le t \le M`, `-(-u) = u`, a subset's
cardinality is at most its superset's, the traces of a basis form a basis for a
subspace, a Euclidean ball is open, a union of two finite sets is finite, a
two-element set of reals has a maximum. Each closes inside the 30-second
threshold, so each is nonfatal by the binding rule, and R1 forbids editing them.
This is the **fourth consecutive wave** in which fact-fidelity dominates the
rejection set, and the wave-4 A10 queue item — "may an `[F#]` state a one-line
consequence of its cited target?" — is now on its fourth wave unanswered. It is
the single highest-value policy question the owner could settle: answering it
either licenses ~45 findings per wave as intended behaviour, or converts them
into a repair backlog.

Two nonfatals I want on the record as the sharpest of the class, both raised to
A10 rather than repaired:

- **`cor-euclidean-compactness-equivalence-chart`** (sonnet) — the chart's
  variants are defined by `def-compactness-variants` in the Statement while
  `[L2]`'s source defines them via `def-metric-compactness-variants`, and the
  proof joins the two equivalence classes only at plain compactness. The join is
  sound because a metric space's topology *is* a topology, but no cited fact
  identifies the two definition families. A definition-family question, not a
  gap in the argument.
- **`cor-rn-is-locally-compact-and-sigma-compact`** (deepseek) — `[L3]` states
  the Archimedean property for `\mathbb{R}` while citing a theorem about every
  complete ordered field, leaving "`\mathbb{R}` is a complete ordered field"
  unstated. This is exactly wave 4's carried queue item 2, the corpus-wide
  citation convention. Third independent lane to find it.

### The five fatal repairs, and their independent certification

I authored all five, so I certified none of them. Five read-only
`claude-sonnet-5` certifier lanes read the **final** text
(`research/audit/wave5-dispatch/certifier-a8cert-*`).

| item | defect repaired | certifier |
|---|---|---|
| `fs-consecutive-differences-null-implies-cauchy` | "Both false statements on this page" → the page carries three | `a8cert-003` CERTIFY |
| `ex-contractive-sequence-fixed-point` | "$c=1/3$ is the smallest admissible constant" — false at the allowed $a = 1/2$ | `a8cert-002` CERTIFY |
| `lem-radial-normalisation-is-continuous` | `[L2]`'s subspace criterion attributed to two items that do not state it; `def-subspace-topology-top` added to the fact and to `deps` | `a8cert-004` CERTIFY |
| `thm-radial-straight-line-map-on-punctured-rn` | `[L4]` widened `thm-algebra-of-continuous-functions` from $A \subseteq \mathbb{R}$ to an arbitrary domain | `a8cert-005` CERTIFY |
| `def-regular-and-t3-spaces` | "the two false statements of this page make that precise" — four on the page, none about regular vs normal, and the sibling says the question is left open | `a8cert-001` **REFUSE** → repaired → `a8cert2-001` CERTIFY |

**My first repair of `thm-radial-straight-line-map-on-punctured-rn` was wrong and
`fwdcheck` caught it.** I swapped `[L4]` to
`lem-algebra-of-continuous-real-maps-on-a-space`, which states exactly the right
thing for a topological domain — and lives on
`library/topology/partitions-of-unity-and-paracompactness`, **forward** of this
item's page. That would have made a load-bearing forward reference out of a
citation repair. The correct repair, which is what is on disk, routes the one
clause the cited items genuinely do not cover — the quotient — through material
that is actually backward: `thm-componentwise-limits-and-continuity` clause 3
gives sums, scalar multiples and products on a metric domain (the product as the
$m=1$ inner product), `lem-continuity-is-local-and-pastes` claim 1 gives
composites, and clause 4 of `thm-algebra-of-continuous-functions` with
$A = \mathbb{R}$ gives $u \mapsto 1/u$ on $\mathbb{R}\setminus\{0\}$. Step 1.2
now names that route. **The proof contract had recorded the exact quote "Let
$A \subseteq \mathbb{R}$" against this fact all along and no gate compared it to
the domain the step used** — the contract stores the evidence for this defect
class and nothing reads it that way.

### ESCALATION — twice-touched

**`def-regular-and-t3-spaces`, one item, repaired twice inside A8.** Measured
from disk: all five repaired items are byte-unchanged across every stage snapshot
in `wave5-touches.json` (they were pure frontmatter retags through A4), so the
only multiple-repair item in the wave is this one, and both touches are mine
within this step. Its second defect was **not** found by either judge: the
`a8cert-001` certifier found it while certifying the repair of the first, and
refused. "It is the conjunction $T_3$ that sits above Hausdorff in the hierarchy,
and the proof of that is **two** items below" — I verified the page manifest
myself rather than take the report: `def-regular-and-t3-spaces` is at index 4,
two below is `def-urysohn-space`, a **definition containing no proof**, and the
proof is three below in
`lem-urysohn-sits-between-hausdorff-and-regular-plus-t1`. Repaired to "three",
re-certified clean.

**Three of the six fatal findings this wave are false claims about page
structure** — sibling counts, what a page settles, where a proof sits — and
`prosecheck` passes on all three. That gate reads positional claims against its
spec; it does not read "both false statements on this page" or "two items below"
against the page manifest. **A10: this is a cheap, mechanical gate that does not
exist**, and it would have caught three of the six fatals in this wave alone.

### Certifier nonfatals — recorded, not acted on (R1)

`a8cert-004` (`lem-radial-normalisation-is-continuous`, `[L2]` wording) and
`a8cert-005` (`thm-radial-straight-line-map-on-punctured-rn`, step 1.1
establishing positivity only under the stated sign conditions). Both inside the
30-second threshold; A8 is fatal-only, so neither licenses an edit.

### Stamps and gate state

Five `verification.verified` written, `model: claude-sonnet-5`,
`scope: published-audit`, `delegated_by: owner`, after the independent reading of
the final text. **`verification.audited` was never written**, and the stale
legacy `judge` blocks (all five `z-ai/glm-5.2`) and obsolete `audited` stamps
were deleted before the repairs, as a material rewrite requires.

| gate | result |
|---|---|
| `gates --audit --step A6` | **STEP A6 CLEAR, 14/14** |
| `step8-guard` | **OK — every step-8 edit licensed by a confirmed fatal defect** |
| `impact-audit` | 0 changed public interfaces, 0 affected items |
| `depcheck` | `published-unaudited` **empty** |
| `proof-contract --strict` | 0 errors, 0 warnings, 155/155 |
| `precheck` `citecheck` `fwdcheck` `extcheck` `rendercheck` `prosecheck` `depsource` `finite-smoke` `risk-report` `genrisk` | all pass |
| `level-coverage` | **FAIL — `missing: research/audit/wave5-spine-audit.json`** |

Batch contracts patched for the two changed fact blocks
(`wave5-topology-countability.proof-contracts.json`) and re-merged; the merged
file is a build product and stales on any batch write, as round 3 recorded.

### Handed back to the orchestrator — two blockers, neither mine

1. **The 69 Sonnet nulls.** A7 is not paired-complete. Re-run that lane before
   A10 reports coverage.
2. **`research/audit/wave5-spine-audit.json` does not exist**, so
   `level-coverage --verify-current-context` cannot run at all. Waves 2 and 4
   produced one; wave 5 did not. This is the wave-3 A10 queue item resurfacing
   in a new form.
3. **Targeted paired rejudge of exactly these five ids**, whose
   `verification.judge` I deleted (Alpha cannot launch judge children — the
   wave-1b `EPERM` finding stands):

```
JUDGE_LINEUP=deepseek+sonnet node tools/judge-sweep.mjs \
  --ledger research/audit/wave5-judge.jsonl \
  --cost research/audit/wave5-judge-cost.jsonl \
  --items def-regular-and-t3-spaces,ex-contractive-sequence-fixed-point,fs-consecutive-differences-null-implies-cauchy,lem-radial-normalisation-is-continuous,thm-radial-straight-line-map-on-punctured-rn
```

**A process finding for the orchestrator:** `research/audit/RESUME.md` still
opens on WAVE 4 and its "EXACT NEXT ACTION" is wave 4's A7. Wave 5 has run A0
through A8 without that file being updated once. The 2026-08-03 rule exists
because a stale RESUME cost a whole session; it is stale again.

**Exact next action:** orchestrator runs the three items above, then A9 and A10.
No A8 adjudication is outstanding.

---

# A8 — Round 2

## Recovery receipt (2026-08-06, A8 round-2 dispatch)

**Baseline.** Branch `main`, HEAD `f6bb1af` ("fix(audit): wave 5 A8 — 63
adjudications, spine receipt carried forward on byte-identity evidence").
Working tree dirty with the wave's artifacts; **no item file modified at entry**
beyond my own five round-1 repairs, which are committed.

**Read in full.** `CLAUDE.md`; the round-2 dispatch brief; `research/audit/RESUME.md`
(head section still WAVE 4 — the process finding I recorded at round 1 stands
unaddressed); this whole report, including my A4-concurrence, A6 round-1/round-3
and A8 round-1 sections; `research/audit/wave5-judge.jsonl` (all 647 rows);
`research/audit/wave5-judge-adjudications.jsonl` (all 63 round-1 rows);
`tools/item-hash.mjs`, `tools/step8-guard.mjs`, `tools/dispatch.mjs` role table,
`tools/level-coverage.mjs` context-hash path; and on disk every item named below
with the cited dependency targets that each allegation turns on.

**Inherited open actions:** none of mine. The two blockers I handed back at
round 1 (the 69 Sonnet nulls; the missing `wave5-spine-audit.json`) were the
orchestrator's; the first is now closed — see below — and the second is not.

## The dispatch handed me 25 rejections. Disk holds 39.

Recomputed from `wave5-judge.jsonl` by taking the **last** verdict per
`(id, model)` pair and subtracting the 63 round-1 adjudication keys:

| | |
|---|---|
| current paired verdicts | 418 (209 items × 2 lanes) |
| keep | 352 |
| reject | 66 |
| null | **0** |
| already adjudicated at round 1 | 27 of those 66 |
| **unadjudicated at this dispatch** | **39** |

**Paired coverage is genuinely 209/209 with zero nulls** — the round-1 blocker
is closed and A10 may now report this wave as paired-covered.

The 14 the dispatch omitted are not a rounding difference; they are a
systematically distinct group. Nine are the Euclidean/`\mathbb{R}^n` batch
(`cor-euclidean-closed-balls-and-spheres-are-compact`,
`def-euclidean-spheres-and-closed-balls`, `thm-rational-points-and-boxes-in-rn`,
`cex-open-bounded-euclidean-subset-not-compact` ×2,
`cex-closed-unbounded-euclidean-subset-not-compact` ×2,
`cor-rn-is-polygonally-connected-and-locally-path-connected`,
`cor-components-of-open-subsets-of-rn-are-polygonally-connected`,
`lem-polygonally-reachable-set-is-clopen` sonnet lane), three are real-analysis
(`cor-monotone-converges-iff-bounded` **deepseek lane**,
`cex-cauchy-rationals-no-rational-limit`,
`fs-consecutive-differences-null-implies-cauchy`), and one is
`thm-radial-straight-line-map-on-punctured-rn`.

**The omission mattered.** The single fatal defect this round was rejected by
**both** lanes, and only the Sonnet row was in the handed list. Had I adjudicated
the 25 as given, I would still have caught it — but I would have recorded it as a
one-lane finding rather than as the cross-family agreement it is, and the
cross-family lane is the only independent reader this audit has. This is the
third time in wave 5 that a handed count undercounted the real surface (the A4
halt record, the A6 gate display, and now this). **Every count in this section is
from a direct recomputation, not from the dispatch.**

## Adjudications — 39 rows

| outcome | rows |
|---|---|
| `confirmed_nonfatal` | 35 |
| `confirmed_fatal` | **2** (one item, both lanes) |
| `false_positive` | 2 |

By lane: DeepSeek 15 rejections → 1 fatal / 2 false positive / 12 nonfatal
(**86.7% precision**). Sonnet 24 → 1 fatal / 0 false positive / 23 nonfatal
(**100% precision**). Cumulative for the wave: DeepSeek 54 rejections at 90.7%,
Sonnet 48 at 100%. Sonnet's measured 60.0% from the pre-JSON-constraint era does
not reproduce anywhere in wave 5, across 48 adjudicated rejections and two
separate sweeps. That is now a large enough sample to say so at A10.

### CONFIRMED FATAL — `cor-monotone-converges-iff-bounded` (both lanes)

Its final Remark read:

> "**Neither hypothesis can be dropped.** Without monotonicity the converse
> direction fails, by [[fs-bounded-implies-convergent]]. Without boundedness the
> **forward direction is what fails**, and it fails in the describable way
> recorded by [[lem-monotone-unbounded-diverges]]: a nondecreasing unbounded
> sequence diverges to $+\infty$."

The forward direction of this item's own biconditional is *converges implies
bounded*. It holds for every sequence and cannot fail, and the item's **own
Statement says so in terms**: "The forward implication holds for every sequence
and is [[lem-convergent-implies-bounded]]." The Remark asserts the opposite three
paragraphs later. The witness it offers is not one either: a nondecreasing
unbounded sequence diverges, so it does not satisfy the antecedent of the
implication it is produced to refute. Nor is "boundedness" a hypothesis that
could be dropped — it is one side of the biconditional.

Both lanes found this independently, DeepSeek naming it "a false claim" and
Sonnet naming the direction mislabelling. Cross-family agreement on a false
Remark claim contradicting the item's own Statement. Type `other`.

**This is the fourth fatal of wave 5 that is a false claim in Remark prose**, and
the seventh of eight overall. The pattern is now unambiguous: this corpus's
mathematics is sound and its *prose about* its mathematics is where the
falsehoods are. No gate reads Remark prose for mathematical content.

**The repair** rewrites only that bullet, to say the true thing the bullet was
reaching for: monotonicity is the droppable hypothesis, the forward direction
needs none, and `lem-monotone-unbounded-diverges` sharpens rather than rescues
it. Statement, Facts, every numbered step, `deps` and title are untouched, so
this is not a public-interface change — `impact-audit` from a dedicated
`pre-a8-round2` baseline confirms **0 changed public interfaces, 0 affected
items**.

**Certification.** I authored the repair, so I did not certify it. A read-only
`claude-sonnet-5` certifier read the final text
(`research/audit/wave5-dispatch/certifier-a8r2cert-001-cor-monotone-converges-iff-bounded.log`):
**CERTIFY, 0 fatal, 1 nonfatal**. It opened all six declared dependencies plus
the three Remark wikilink targets and confirmed each `[L#]` is an exact
restatement. Its one nonfatal — the replacement illustrates only the
nondecreasing half of `lem-monotone-unbounded-diverges` and leaves the
nonincreasing dual to symmetry — is inside the 30-second threshold, and **R1
forbids acting on it**: recorded, not repaired. The stale legacy `judge` block
(`z-ai/glm-5.2`) and the obsolete `audited: 2026-07-26` stamp were deleted before
the edit; `verification.verified` (`claude-sonnet-5`, `scope: published-audit`,
`delegated_by: owner`) was written after the independent reading.
**`verification.audited` was not written.**

### FALSE POSITIVE — 2, both DeepSeek, both refuted with verbatim text

1. **`cex-cauchy-rationals-no-rational-limit`.** DeepSeek: "[L1] cites
   [[fs-rationals-complete]] for explicit construction and bounds of $s_n$, but
   that item merely states the false claim with no construction; the proof's
   central estimates are unsupported." `fs-rationals-complete` step 1.1 reads
   verbatim: "For each $n$ let $k_n$ be the largest natural with
   $k_n^2 \le 2 \cdot 10^{2n}$, and set $s_n = k_n / 10^n$; then
   $s_n^2 \le 2 < (s_n + 10^{-n})^2$" — the construction and both bounds [L1]
   cites it for, verbatim. Its step 2.1 proves $(s_n)$ Cauchy and its step 4.1
   proves no rational limit. A refuted false statement still carries a full
   proof of its refutation, and that proof is exactly the construction.
2. **`def-euclidean-spheres-and-closed-balls`.** DeepSeek: the item "uses the
   Euclidean norm $\lVert\cdot\rVert_2$ without defining it or citing its
   definition … The definition is therefore not well-formed." The item's own
   text closes this: "Since $d_2(c,x)=\lVert x-c\rVert_2$, they are precisely
   the closed ball and sphere … of the metric-space definition", and the cited
   `lem-metrics-on-rn` displays $d_2$ explicitly as
   $\sqrt{\sum_{k<n}(x_k-y_k)^2}$. The identity plus the explicit formula pin
   the norm down completely. The definition is well-formed.

### CONFIRMED NONFATAL — 35 rows, and they are one class again

**Roughly 30 of the 35 are the fact-fidelity class**: "`[F#]`/`[L#]` claims X
citing Y; Y does not state X", where X is true and one line from its target.
This wave's instances: $|t| = t$ for $t \ge 0$ attributed to `lem-of-abs-value`
(which proves $|x| \ge 0$, $-|x| \le x \le |x|$ and the rest, but leaves that
equality to `def-abs-value`, its own `[L1]`) — **three separate items**; affine
real functions are continuous, asserted from the componentwise criterion alone
(**both lanes**); convexity of a Euclidean ball cited to `lem-metrics-on-rn`
(**both lanes**); the reverse triangle inequality; $\lVert e_0\rVert_2 = 1$
cited to a purely algebraic basis lemma; "complementation reverses inclusion"
attributed to `def-topological-space`; the closure-meets-every-neighbourhood
criterion used without citing `thm-closure-characterisation-top` (**four
separate nets/filters items**); filter upward-closure and finite intersections
of neighbourhoods used without citing the filter axioms the item itself lists.

**This is the fifth consecutive wave in which fact-fidelity dominates**, and the
wave-4 A10 queue item — *may an `[F#]` state a one-line consequence of its cited
target?* — is now on its **fifth** wave unanswered. Wave 5 alone produced ~75
findings of this exact shape across two rounds. It remains the single
highest-value policy question the owner could settle.

Four nonfatals I want on the record as the sharpest, all raised to A10 rather
than repaired:

- **`lem-polygonally-reachable-set-is-clopen` `[L2]`** (both lanes) — "A straight
  segment between two points of an Euclidean ball stays in that ball, by the
  triangle inequality for the Euclidean norm ([[lem-metrics-on-rn]])". The cited
  lemma proves only that $d_1,d_2,d_\infty$ are metrics, and **a general metric
  ball need not be convex**, so metrichood alone genuinely supplies nothing here.
  It is nonfatal only because the lemma also *displays* $d_2$ explicitly, and
  homogeneity — the missing ingredient — is one line off that formula. Sonnet is
  right that the companion example cites `def-norm-and-normed-space` for the same
  move and this one does not. The sharpest citation defect of the round.
- **`thm-contractive-implies-cauchy`** (sonnet) — the Remark "**Where
  completeness is spent.** Only in step 10.1, through
  [[thm-cauchy-criterion-via-lub]]". `[L13]` is that theorem and it is cited in
  step **8.1**; step 10.1 cites `[L14]`. The substantive claim is true —
  completeness is spent exactly once, for the existence of the limit, which *is*
  step 8.1, as the Remark's own next sentence correctly describes. A misdirected
  internal step pointer, ruled nonfatal for consistency with my round-1 ruling on
  `fs-the-compact-open-topology-is-always-metrizable` and my A6 round-3 ruling on
  `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous`.
  **This is the second instance in wave 5 of a wrong numeral in a
  completeness/choice ledger specifically**, and it strengthens the A10 policy
  question I raised at round 1: the ledger is a load-bearing house mechanism and
  the owner may want a wrong locator *there* treated as fatal.
- **`ex-arens-space-is-sequential-not-frechet-urysohn`** (sonnet) — step 1.2's
  "If $\infty\in\overline C$, then infinitely many $x_n$ lie in $C$" is **false
  as an unconditional claim**, and Sonnet supplies the witness: $C=\{\infty\}$ is
  sequentially closed with no $x_n$ in it, and the constructed neighbourhood of
  $\infty$ contains $\infty$, so it is not disjoint from $C$. Nonfatal
  nonetheless, because the goal in that case is precisely $\infty \in C$, so
  $\infty \in C$ discharges it in one line. Ruled nonfatal for the third time on
  this item and this shape (A6 round 3; A8 round 1 on the DeepSeek lane; here).
  Recording the concrete witness because Sonnet sharpened the finding, and the
  case is now on the A10 list.
- **`cor-euclidean-closed-balls-and-spheres-are-compact`** (sonnet) and
  **`cex-open-bounded-euclidean-subset-not-compact`** (deepseek) — both `[L#]`s
  restate `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`
  dropping its explicit nonemptiness hypothesis, which that theorem's Statement
  flags in terms ("The nonemptiness hypothesis is necessary for condition 4").
  Nonfatal because the hypothesis is satisfied at every use — closed balls
  contain their centre and spheres contain $c + re_0$ for $n \ge 1$ — but this
  is the **dropped-hypothesis subclass**, which is what produced 13 fatals in
  wave 4, and it is worth the owner knowing it recurs here in the benign form.

## Escalation — twice-touched

`cor-monotone-converges-iff-bounded` is a **first** touch: measured from disk it
is byte-unchanged across every stage snapshot in `wave5-touches.json` before
this round. Nothing escalates from round 2.

`touchlog` reports "53 item(s) now repaired more than once" at the
`pre-a8-round2` snap. That figure is the wave-2 snapshot-window artifact
recurring, not 53 repairs: the ledger carries the nine per-item Beta snapshots I
recorded as a process deviation at A6, and a 23-snapshot ledger counts a
frontmatter retag seen from two stage angles as two touches. The real
multiple-repair count for wave 5 remains **one** — `def-regular-and-t3-spaces`,
from round 1.

## Gate state

| gate | result |
|---|---|
| `step8-guard` (baseline `pre-a8-round2`) | **OK — 1/1 change licensed by a confirmed fatal adjudication** |
| `gates --audit --step A6` | **STEP A6 CLEAR, 14/14** |
| `impact-audit` (from `pre-a8-round2`) | 0 changed public interfaces, 0 affected items |
| `depcheck` | exit 0, `published-unaudited` empty |
| `precheck` (repaired item) | 1 checked, 0 failing |
| `citecheck` `fwdcheck` `extcheck` `rendercheck` `prosecheck` `depsource` | all exit 0 |
| `proof-contract --strict` | 0 errors, 0 warnings, 155/155 |
| `level-coverage` | still **FAIL — `missing: research/audit/wave5-spine-audit.json`** (orchestrator's, unchanged) |

Two warnings persist and neither is a gate failure: `content-policy`
`generated-kind` on `rem-function-space-conventions`, `genrisk`
`verified-generated-seed` on `rem-counting-conventions-and-scope`.

## The exact rejudge list — computed, not estimated

The dispatch asked which items I touched so the rejudge can be precise. I touched
**one**. But the judge context unit is the **A/B pair**, so repairing an item
re-freezes every item whose context embeds that item's page.

I computed this rather than guessing: `tools/judge.mts items/<id>.md
--context-hash` recomputes a context hash with no network call, so I ran it over
**all 209 scoped items** and diffed against the ledger. Exactly **31** items now
carry a stale context — the whole
`library/real-analysis/monotone-sequences-and-cauchy-completeness` A/B pair, and
nothing outside it. No other page's context moved.

```
JUDGE_LINEUP=deepseek+sonnet node tools/judge-sweep.mjs \
  --ledger research/audit/wave5-judge.jsonl \
  --cost research/audit/wave5-judge-cost.jsonl \
  --items thm-bolzano-weierstrass,lem-monotone-unbounded-diverges,lem-cauchy-with-convergent-subsequence,thm-cauchy-criterion-via-lub,def-contractive-sequence,def-monotone-sequence,def-subsequential-limit,lem-peak-monotone-subsequence,thm-monotone-convergence,lem-cauchy-sequence-bounded,thm-nested-interval-property,cor-monotone-converges-iff-bounded,rem-completeness-routes,lem-geometric-sequence-null,lem-alternating-sequence,fs-consecutive-differences-null-implies-cauchy,fs-convergent-subsequence-implies-bounded,def-interval,fs-nested-open-intervals-nonempty,ex-nested-intervals-single-point,ex-recursive-sqrt-two-plus-x,ex-babylonian-sqrt-two,cex-strictly-decreasing-gaps-no-limit,thm-contractive-implies-cauchy,cex-nested-open-intervals-empty,ex-contractive-sequence-fixed-point,cex-unbounded-with-convergent-subsequence,cex-cauchy-rationals-no-rational-limit,cex-sqrt-k-differences-null-not-cauchy,cex-nested-unbounded-closed-empty,ex-two-subsequential-limits
```

**62 verdicts expected.** Keep the Sonnet lane at the reduced concurrency that
fixed the round-1 refusals; at 16 it returned 69 nulls.

**A10 should record the structural fact this exposes**, which is the wave-3 queue
item in its sharpest form yet: a **single Remark-only repair, touching no
Statement, no Fact, no step and no `deps`, and confirmed by `impact-audit` to
change zero public interfaces, still invalidates 31 frozen contexts** — 30 of
them items I never opened. Page-granular context and item-granular repair are
mismatched, and the cost of that mismatch is 60 judge calls per prose fix.

## Handed back to the orchestrator

1. **The 31-item targeted rejudge above.** Alpha cannot launch judge children
   (the wave-1b `EPERM` finding stands).
2. **`research/audit/wave5-spine-audit.json` still does not exist**, so
   `level-coverage --verify-current-context` still cannot run. Unchanged from
   round 1; waves 2 and 4 produced one.
3. **`research/audit/RESUME.md` is still headed WAVE 4** with wave 4's A7 as its
   "EXACT NEXT ACTION". Wave 5 has now run A0 through A8 round 2 without that
   file being updated once. I raised this at round 1; it is worse now, because a
   resumed session reading it would not learn that A8 has run at all.

**Exact next action:** orchestrator runs the 31-item rejudge, then A9 and A10.
No A8 adjudication is outstanding: 102 rows, one per current rejection, none
unadjudicated.

# A8 — Round 3

## Recovery receipt (2026-08-06, A8 round-3 dispatch)

**Baseline.** Branch `main`, HEAD `b9ab1e1` ("fix(audit): wave 5 A8 round 2 — 102
adjudications, 8 fatal; coverage receipt generated"). Working tree dirty with the
wave's artifacts and the three modified judge ledgers; **no item file modified at
entry** — my round-1 and round-2 repairs are committed.

**Read in full.** `CLAUDE.md`; the round-3 dispatch brief and this brief's Alpha
half; `research/audit/RESUME.md` (head section **still WAVE 4**, third round
running); this whole report; `research/audit/wave5-judge.jsonl` (709 rows) and
`wave5-judge-adjudications.jsonl` (102 rows at entry); `tools/item-hash.mjs`,
`tools/step8-guard.mjs`, `tools/level-coverage.mjs` receipt validation,
`tools/dispatch.mjs`; on disk every item named below and every dependency target
each allegation turns on — `lem-of-abs-value`, `prop-of-multiply-inequalities`,
`ex-two-subsequential-limits`, `fs-rationals-complete`.

**Snapshot.** `pre-a8-round3` taken before the first adjudication (24 snapshots
in the ledger, 2767 items).

**Inherited open actions:** none of mine. The `wave5-spine-audit.json` blocker
and the stale `RESUME.md` remain the orchestrator's.

## The dispatch handed me five items. Disk holds five items and six rows.

Recomputed from `wave5-judge.jsonl` by taking the **last** verdict per
`(id, model)` and subtracting the 102 adjudication keys:

| | |
|---|---|
| current paired verdicts | 418 (209 items × 2 lanes) |
| keep | 351 |
| reject | 63 |
| null | **4**, all `deepseek-v4-pro` `NO_CONTENT: terminated` |
| already adjudicated | 57 of the 63 |
| **unadjudicated at this dispatch** | **6 rows / 5 items** |

The dispatch's count and mine agree this time: `cex-unbounded-with-convergent-
subsequence` was rejected by both lanes and is one item in two rows.

**The four nulls are all on `monotone-sequences-and-cauchy-completeness`** —
`fs-nested-open-intervals-nonempty`, `ex-two-subsequential-limits`,
`cex-strictly-decreasing-gaps-no-limit`, `cex-nested-open-intervals-empty`. They
are therefore inside the pair my repair below re-freezes, and the one targeted
rejudge closes both problems at once. Paired coverage before this round was
**205/209 decided**, not 209/209.

## Adjudications — 6 rows

| outcome | rows |
|---|---|
| `confirmed_fatal` | **2** (one item, both lanes) |
| `false_positive` | 2 |
| `confirmed_nonfatal` | 2 |

Wave cumulative: **108 rows, 0 unadjudicated, 0 unhashed.** 10 fatal across 7
items, 91 nonfatal, 7 false positive. DeepSeek 50/57 precision, Sonnet 51/51.

### CONFIRMED FATAL — `cex-unbounded-with-convergent-subsequence`, both lanes

Its last Remark bullet read:

> "With the unbounded branch replaced by a second constant, the same interleaving
> gives a bounded divergent sequence with two subsequential limits
> ([[ex-two-subsequential-limits]])."

The parenthetical identifies `ex-two-subsequential-limits` as the sequence that
modification produces. It is not. That item is $x_k = (-1)^k(1 + 1/k)$: an
alternating **sign** carrying a non-constant null perturbation, written on
$\mathbb{N}$ as $u_j = t_j p_j$ with $p_j = 1 + 1/(j+1)$. It is not an
interleaving of two constants, and its own Remark says so in terms:

> "**The perturbation is what makes the example more than the alternating
> sequence.** With $p_j$ replaced by the constant $1$ the sequence is $\pm 1$
> alternating and each subsequential limit is attained infinitely often. Here
> $|x_k| > 1$ at every index, so neither subsequential limit is ever a value of
> the sequence."

So the cited item explicitly distinguishes itself from the construction this
Remark attributed to it, and the constant version of the described modification
is the plain alternating sequence, which is a different item again. The
underlying mathematics is true — a two-constant interleaving is bounded,
divergent, and has two subsequential limits — and the falsehood is the
identification. Type `dependency_citation`.

This is the **eighth of nine fatal findings in wave 5 that is a false claim in
Remark or page-structure prose**, and the third that is specifically a false
claim about what a *sibling item* is or does. Not one of the nine was an invalid
inference inside a numbered proof step.

**The repair** replaces only that bullet: it states the variant's two
subsequential limits as $1$ and $c$ under the side condition $c \ne 1$, and then
links `ex-two-subsequential-limits` for what it actually is, a different route to
two limits in which neither limit is a value of the sequence. Statement, Facts,
every numbered step, `deps` and title are untouched. `impact-audit` from the
dedicated `pre-a8-round3` baseline: **0 changed public interfaces, 0 affected
items.**

**Certification.** I authored the repair, so I did not certify it. A read-only
`claude-sonnet-5` certifier read the final text
(`research/audit/wave5-dispatch/certifier-a8r3cert-001-cex-unbounded-with-convergent-subsequence.log`):
**CERTIFY, 0 fatal, 0 nonfatal.** It opened twelve dependencies on disk, derived
the $\{1, c\}$ claim itself and confirmed $c \ne 1$ is both necessary and
sufficient (at $c = 1$ the variant collapses to the constant sequence and is not
divergent), and checked the new description against
`ex-two-subsequential-limits` clause by clause. The stale legacy `judge` block
(`z-ai/glm-5.2`) and the obsolete `audited: 2026-07-26` stamp were deleted before
the edit; `verification.verified` (`claude-sonnet-5`, `scope: published-audit`,
`delegated_by: owner`) was written after the independent reading.
**`verification.audited` was not written.**

### FALSE POSITIVE — `def-interval` (deepseek-v4-pro)

DeepSeek: defining closed intervals as those where "both written endpoints are
included" contradicts the listed form $[a,\infty)$, "because the notation uses a
parenthesis on the right, indicating the endpoint $\infty$ is excluded".

The reading the allegation rests on is foreclosed by the item's own next
paragraph, verbatim:

> "**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.**
> They mark which side carries no endpoint condition at all."

Under the item's stated convention $[a,\infty)$ has exactly one written endpoint,
$a$, and it is included. Every one of the eight classifications is then correct:
$(a,b)$, $(a,\infty)$, $(-\infty,b)$ open; $[a,b]$, $[a,\infty)$, $(-\infty,b]$
closed; and $(-\infty,\infty) = \mathbb{R}$ in **both** lists, which is right,
since $\mathbb{R}$ is clopen.

**That last form is what settles it, and DeepSeek did not notice it.** Under
DeepSeek's reading — $\infty$ is a written endpoint, and the parenthesis beside it
excludes it — $(-\infty,\infty)$ would have both endpoints excluded and so could
not be closed, yet the item lists it as closed. The item's list is coherent only
under the convention the item states, and is correct under it. No false claim.

Residual, and **not** repaired under R1: "both written endpoints" reads loosely
where only one endpoint is written; "every written endpoint" would be exact. That
is wording, not mathematics, it is inside the 30-second threshold, and A8 is
fatal-only. Recorded for A10 as a step-6-class polish, not an edit. This matters
more than usual because `def-interval` carries **25 of this wave's 29 cross-batch
edges** and a repair here would have re-frozen a large cone for a comma.

### FALSE POSITIVE — `cex-cauchy-rationals-no-rational-limit` (deepseek-v4-pro)

**The identical allegation I refuted at round 2**, re-raised at a new context
hash because my round-2 repair re-froze this page's contexts. DeepSeek again says
`[L1]` cites `fs-rationals-complete` for the construction and bounds of $s_n$
while "the supplied text of that item contains only the false claim and a remark,
with no such construction or proof". I re-read `fs-rationals-complete` on disk;
its step 1.1 reads verbatim:

> "For each $n$ let $k_n$ be the largest natural with $k_n^2 \le 2 \cdot 10^{2n}$,
> and set $s_n = k_n / 10^n$; then $s_n^2 \le 2 < (s_n + 10^{-n})^2$, and
> $s_n \le 2$"

which is the construction and both bounds, verbatim, plus a third bound `[L1]`
does not even claim. Its step 2.1 proves $(s_n)$ Cauchy and its step 4.1 proves
no rational limit. A refuted false statement still carries the full proof of its
refutation, and that proof **is** the construction. Unchanged verdict.

**Worth naming as a lane observation:** this is the same reader making the same
error about the same item twice, in two independent sweeps. It is not random
noise. `fs-` items present a false claim in the Statement and the truth in the
proof, and this lane twice read the Statement as the item's whole content. If
A10 wants one cheap judge-context line, it is that.

### CONFIRMED NONFATAL — 2, both `deepseek-v4-pro`, both fact-fidelity

1. **`cor-monotone-converges-iff-bounded`.** `[L5]` claims "$|t| \le M$ exactly
   when $-M \le t \le M$" citing `lem-of-abs-value`, which states the **strict**
   equivalence "for every $c > 0$, $|x| < c \iff -c < x < c$". DeepSeek is right
   that the non-strict biconditional is not in the target. But the **direction
   the proof uses is** one line from a clause `lem-of-abs-value` states verbatim:
   step 1.2 needs only $|x_k| \le M \Rightarrow -M \le x_k \le M$, and
   $-|x| \le x \le |x|$ is in that lemma's Statement. The unused converse is also
   true and one line away. This is the wave's dominant class and the third
   instance against this exact target; ruled nonfatal for consistency with the
   ~30 I ruled at round 2.
2. **`lem-geometric-sequence-null`.** DeepSeek is **half right**, and the half
   matters. Step 3.5 multiplies $M/h' \le n$ by $h' > 0$ where $M$ is an
   arbitrary real, so $M/h'$ may be negative and `[L9]`
   (`prop-of-multiply-inequalities`: "$0 \le a \le b$ and $0 \le c \le d$ give
   $ac \le bd$") genuinely does not cover it; the licensing fact is
   order-compatibility of multiplication by a positive, an ordered-field axiom,
   and `def-ordered-field` is already in `deps` and already cited at `[L10]`.
   Step 3.6 is **not** defective: there $1/N > 0$ and $\varepsilon h > 0$, and the
   conclusion is non-strict, so `[L9]` applies exactly as stated with
   $a = 1/N$, $b = \varepsilon h$, $c = d = 1/h$. The same over-broad use of
   `[L9]` recurs at 3.3, 4.2 and 5.1. All of it is inside the 30-second
   threshold.

## The twice-touched question the dispatch asked, answered

**`cor-monotone-converges-iff-bounded` is converging, not thrashing, and its
fact list does not need rewriting as a unit.**

Measured from disk rather than inferred. The round-2 fatal was a false claim in
the final Remark bullet, and my repair changed **only** that bullet. `[L5]`,
which DeepSeek now objects to, is **pre-existing text I never touched** — so this
is not a second defect introduced by the repair, and it is not a second defect in
the same text. It is a first look at a different part of the item, made possible
only because the repair re-froze the page context and bought DeepSeek a fresh
read. The two findings are disjoint in location, disjoint in cause, and only one
is fatal.

`[L5]` is the one over-broad restatement in a fact list of five; the other four
(`[L1]`–`[L4]`) were each confirmed an exact restatement by the round-2
certifier, which opened all six declared dependencies. A unit rewrite would
change more text, for nothing fatal, and would re-freeze 31 contexts a second
time.

**The stopping condition I will hold myself to, since the dispatch asked for
one:** a *third distinct fatal* on this item stops the repairs and reopens the
Statement. A third distinct **nonfatal** does not — nonfatals do not license
edits at all under R1, which is exactly the loop the rule was written to prevent.

`touchlog` again reports "54 item(s) now repaired more than once" at the
`pre-a8-round3` snap. That is the snapshot-window artifact for the third time:
the ledger carries nine per-item Beta snapshots recorded as a process deviation
at A6, and a 24-snapshot ledger counts one frontmatter retag seen from two stage
angles as two touches. `cex-unbounded-with-convergent-subsequence` is
byte-identical across every snapshot from `baseline` to `post-A4` and changes
exactly once, at the A4 real-analysis retag, which is a provenance retag and not
a repair. **The real multiple-repair count for wave 5 remains one**,
`def-regular-and-t3-spaces`, from round 1.

## Gate state

| gate | result |
|---|---|
| `step8-guard` (baseline `pre-a8-round3`) | **OK — 1 changed, 1/1 licensed by a confirmed fatal adjudication** |
| `gates --audit --step A6` | **STEP A6 CLEAR, 14/14** |
| `impact-audit` (from `pre-a8-round3`) | 0 changed public interfaces, 0 affected items |
| `precheck` (repaired item) | 1 checked, 0 failing |
| `depcheck` | exit 0, `published-unaudited` empty |
| `citecheck` `fwdcheck` `extcheck` `rendercheck` `prosecheck` `depsource` | all exit 0 |
| `proof-contract --strict` | 0 errors, 0 warnings, 155/155 |
| `level-coverage --audit --audit-receipt` | **3 errors, none of them receipt-class** (see below) |

The two persisting warnings are unchanged and are not gate failures:
`content-policy` `generated-kind` on `rem-function-space-conventions`, `genrisk`
`verified-generated-seed` on `rem-counting-conventions-and-scope`.

## The coverage receipt — attested

`research/audit/wave5-coverage.json` now carries a reviewer, a concrete
attestation, and a concrete drift reason for each of the three
`plan_reconciliation` entries. Written by
`research/audit/wave5-write-coverage-attestation.mjs`, kept so the attestation is
reproducible rather than hand-edited. **All three
`audit-receipt-*` error classes are gone**; `level-coverage --audit` now reports
exactly three errors, and neither remaining class is the receipt:

1. `spine-receipt-missing` — the orchestrator's, unchanged since round 1.
2. `judge-verdict-confirmed-fatal` ×2 on `cex-unbounded-with-convergent-
   subsequence` — the fatal I confirmed and repaired this round, clearing when
   the targeted rejudge below records a current verdict.

**The three drift reasons, from the ledgers.**
`cor-components-of-open-subsets-of-rn-are-polygonally-connected` gained
`thm-path-connected-implies-connected` from A3 finding N2, where `[L1]` asserted
"path-connected, hence connected" with no cited item stating that implication and
step 1.1 leaned on it; I approved that repair at A3 over the Beta's
recommendation to leave it. `lem-radial-normalisation-is-continuous` gained
`def-subspace-topology-top` from the A8 round-1 both-lane fatal on `[L2]`'s
misattributed subspace criterion. `thm-radial-straight-line-map-on-punctured-rn`
gained `lem-continuity-is-local-and-pastes` because my **first** repair of its
`[L4]` domain-widening fatal was itself wrong and `fwdcheck` caught it — the
obvious replacement lives forward of the page, and the correct route goes through
backward material. Each is certified; the receipt records the certifier lane.

**What the attestation deliberately says against interest**, because a coverage
claim that overstates is worse than one that records a limit: the Sonnet lane
refused 207 calls at concurrency 16 and its verdicts exist only because of the
concurrency-4 replay; coverage is current for **178 items, not 209**, until the
rejudge below lands; Sonnet is not a cross-family screen; and the fact-fidelity
policy question is unanswered on its fifth wave and accounts for roughly 75 of
the 91 nonfatals.

## The exact rejudge list — computed, not estimated

I recomputed `tools/judge.mts --context-hash` over **all 209 scoped items** and
diffed against the ledger, as at round 2. Exactly **31** items are stale: the
whole `library/real-analysis/monotone-sequences-and-cauchy-completeness` A/B
pair, and nothing outside it. It is the same 31 as round 2, for the same
structural reason, and it **subsumes the 4 DeepSeek nulls**.

```
JUDGE_LINEUP=deepseek+sonnet node tools/judge-sweep.mjs \
  --ledger research/audit/wave5-judge.jsonl \
  --cost research/audit/wave5-judge-cost.jsonl \
  --items cex-cauchy-rationals-no-rational-limit,cex-nested-open-intervals-empty,cex-nested-unbounded-closed-empty,cex-sqrt-k-differences-null-not-cauchy,cex-strictly-decreasing-gaps-no-limit,cex-unbounded-with-convergent-subsequence,cor-monotone-converges-iff-bounded,def-contractive-sequence,def-interval,def-monotone-sequence,def-subsequential-limit,ex-babylonian-sqrt-two,ex-contractive-sequence-fixed-point,ex-nested-intervals-single-point,ex-recursive-sqrt-two-plus-x,ex-two-subsequential-limits,fs-consecutive-differences-null-implies-cauchy,fs-convergent-subsequence-implies-bounded,fs-nested-open-intervals-nonempty,lem-alternating-sequence,lem-cauchy-sequence-bounded,lem-cauchy-with-convergent-subsequence,lem-geometric-sequence-null,lem-monotone-unbounded-diverges,lem-peak-monotone-subsequence,rem-completeness-routes,thm-bolzano-weierstrass,thm-cauchy-criterion-via-lub,thm-contractive-implies-cauchy,thm-monotone-convergence,thm-nested-interval-property
```

**62 verdicts expected.** Keep the Sonnet lane at the reduced concurrency;
at 16 it returned 69 nulls at round 1, and DeepSeek returned 4 more at the
round-2 replay.

**A10 should record that this happened twice.** Two consecutive rounds, two
Remark-only repairs on the same page, each changing zero public interfaces by
`impact-audit`'s own measurement, each invalidating the same 31 frozen contexts
and costing 62 judge calls — 60 of them on items I never opened. Page-granular
judge context against item-granular repair is now measured, not theorised, and
it is the single largest avoidable cost in the audit loop.

## Handed back to the orchestrator

1. **The 31-item targeted rejudge above.** Alpha cannot launch judge children
   (the wave-1b `EPERM` finding stands).
2. **`research/audit/wave5-spine-audit.json` still does not exist**, so
   `level-coverage --verify-current-context` still cannot run. Third round
   running; waves 2 and 4 produced one.
3. **`research/audit/RESUME.md` is still headed WAVE 4.** Third round running.
   Wave 5 has now completed A0 through A8 round 3 without that file being
   updated once.

**Exact next action:** orchestrator runs the 31-item rejudge, then A9 and A10.
No A8 adjudication is outstanding: 108 rows, one per current rejection, none
unadjudicated, none unhashed.

---

# A8 round 3 — the last six rejections. No items edited.

**Recovery receipt.** Read before acting: `CLAUDE.md`, `briefs/audit-alpha.md`
(as dispatched), `research/audit/wave5-a8-round3.task.md`, the tail of this
report through the round-2 handoff, all 108 prior rows of
`research/audit/wave5-judge-adjudications.jsonl`, and the six rejection rows in
`research/audit/wave5-judge.jsonl`. Verified from disk: `git status` (clean of
item changes), commit `0234c0e`, and the current text of all six targets plus
every item their rejections cite — `fs-rationals-complete`, `lem-of-abs-value`,
`def-abs-value`, `def-integer-power`, `lem-power-monotone`,
`lem-convergent-implies-cauchy`. Baseline `pre-a8-round3` snapped before the
first read: 2767 items, 26 snapshots.

**Outcome: 0 confirmed_fatal, 0 items edited, 0 rejudge calls needed.**

## The hash the dispatch printed is not the hash the gate compares

The dispatch gave an `item <prefix>` for each rejection. **Every one of them is
the wrong normalisation for this ledger**, and copying them in would have written
six rows the guard can never match.

There are two item hashes in this repo and they disagree on exactly these six
files:

| function | normalisation | consumed by |
|---|---|---|
| `judge.mts` / `apply-judge-stamps` | whole file, only the `judge:` **sub-block** removed | `wave5-judge.jsonl`, `level-coverage` clause (b) |
| `tools/item-hash.mjs` | whole file, the **entire `verification:` block** removed | `touchlog`, **`step8-guard`** |

`step8-guard.mjs:142` puts `shortHash(row.item_sha256)` into `fatalLicences` and
compares it against a touchlog baseline hash — an `item-hash.mjs` value. The
dispatch's prefixes are the `judge.mts` values, which for these items include the
`precheck:`/`audited:`/`verified:` lines. Measured, all six:

```
                                        dispatch      item-hash.mjs (recorded)
cex-cauchy-rationals-no-rational-limit  08b2f59681cd  beede7a2a17e
cex-strictly-decreasing-gaps-no-limit   322a89fac705  500244f25ab2
cor-monotone-converges-iff-bounded      8b8bb45b4a10  bd893e297777
ex-nested-intervals-single-point        f78a0b3d2400  581f2d0519fd
ex-two-subsequential-limits             d4e4b61852e4  963909ccec51
lem-cauchy-sequence-bounded             81e425b0eee7  048956e6fefa
```

The consequence the dispatch drew from its own numbers is also wrong. It reasoned
that `cex-cauchy-rationals-no-rational-limit` "has since changed to `08b2f59681`"
and asked me to check what changed. **Nothing changed.** Its normalised hash is
`beede7a2a1…`, byte-identical to the text behind all three prior
`false_positive` rows. The same holds for four of the other five: the recorded
hashes match their prior adjudication rows exactly. Only `ex-two-subsequential-limits`
had no prior row. **No target of this round has been edited since it was last
adjudicated** — the apparent movement was a judge stamp, which is precisely what
`item-hash.mjs` exists to exclude.

Rows were appended by `research/audit/wave5-a8r3-write-adjudications.mjs`, which
computes each hash through `itemContentHash` rather than transcribing it, so the
ledger cannot drift from the gate again.

## The six rulings

**1. `cex-cauchy-rationals-no-rational-limit` / deepseek — `false_positive` (4th).**
The judge says `fs-rationals-complete` "contains only the statement of the false
claim, not the required proof". It has a full `## Refutation` establishing every
clause of `[L1]`, verbatim: step 1.1 *"let $k_n$ be the largest natural with
$k_n^2 \le 2 \cdot 10^{2n}$, and set $s_n = k_n / 10^n$; then
$s_n^2 \le 2 < (s_n + 10^{-n})^2$"*; step 2.1 *"$(s_n)$ is Cauchy"*; step 4.1
*"$(s_n)$ is a Cauchy sequence of rationals with no rational limit"*. A `fs-`
item states a false claim **in order to refute it**; the judge read the refuted
claim as the whole content of the page.

**2. `cex-strictly-decreasing-gaps-no-limit` / deepseek — `confirmed_nonfatal`.**
The judge is right that neither cited item states $(u+v)^2 = u^2+2uv+v^2$;
`lem-power-monotone` supplies `[L3]`'s *other* clause exactly (*"for $a, b \ge 0$,
$a < b$ exactly when $a^2 < b^2$"*). The identity is one application of
distributivity and commutativity, ambient ordered-field arithmetic is `[L1]`, and
step 2.2 cites `[L1, L2, L3, L4]` together. True identity, licensed step,
archetypal 30-second gap.

**3. `cor-monotone-converges-iff-bounded` / deepseek — `confirmed_nonfatal`.**
See the twice-touched section below.

**4. `ex-nested-intervals-single-point` / deepseek — `confirmed_nonfatal`.**
`[L6]` is *"$|t| = t$ when $t \ge 0$ ([[lem-of-abs-value]])"*. That clause is the
first branch of `def-abs-value` — *"$|x| := x$ if $x \ge 0$"* — and appears
verbatim as `[L1]` **inside `lem-of-abs-value` itself**: *"Absolute value:
$|u| = u$ if $u \ge 0$"*. So it is in the supplied text of the cited item, just
in its fact list rather than its Statement. The honest tidy is to co-cite
`def-abs-value`, exactly as `ex-two-subsequential-limits` `[L5]` already does.

**5. `ex-two-subsequential-limits` / deepseek — `confirmed_nonfatal`.**
First-time rejection; read fresh. Three of `[L5]`'s four clauses are verbatim in
the two co-cited items: `lem-of-abs-value` states *"$|x| \ge 0$"* and
*"$|xy| = |x|\,|y|$"*, and `def-abs-value` gives $|t| = t$ for $t \ge 0$. The
fourth, *"$|t| = 1$ forces $t = 1$ or $t = -1$"*, is not stated anywhere — the
judge is right about the letter. It is one case split on `def-abs-value`'s
$|t| \in \{t, -t\}$, and **step 4.1 already co-cites `[L9]`, trichotomy on
$\mathbb{R}$**, which is exactly the split that performs it. The claim is true in
any ordered field and the step carries its own licence. I checked the surrounding
mathematics independently rather than only the citation: $|u_{n_i}| \to |L|$ by
`lem-limit-abs`, $|u_{n_i}| = p_{n_i} \to 1$ by step 1.2, uniqueness gives
$|L| = 1$. Sound.

**6. `lem-cauchy-sequence-bounded` / sonnet — `confirmed_nonfatal`.**
I read this one as prose that could be hiding a falsehood, per the standing
instruction, and it is not. The Remark says the bounded alternating sequence,
*"being divergent, is not Cauchy ([[lem-convergent-implies-cauchy]] would
otherwise make it convergent by [[thm-cauchy-criterion-via-lub]])"*. The dispatch
framed the test as whether the Remark asserts *a converse the library does not
have*. **It does not: the library has Cauchy $\Rightarrow$ convergent, it is
`thm-cauchy-criterion-via-lub`, and it is named in the same parenthetical, where
it does all the work.** `lem-convergent-implies-cauchy` — whose Statement is only
*"Let $(x_k)$ be a sequence of reals converging to $x$. Then $(x_k)$ is Cauchy"* —
sits in the subject slot doing none. Delete that one name and the sentence is
correct and fully licensed. A mis-slotted citation, not a false claim and not an
unlicensed inference. Sonnet is my own family, so I weight my agreement with its
*detection* lightly and rest the ruling on the quoted disk text instead.

I did not dispatch refuters this round. All six allegations are fact-fidelity
questions — does the cited item state this clause — answerable only by quoting
the cited item, which I did from disk for every one. A refuter would have been
given the same text and could not have added evidence. That is a narrower use of
the lane than A6 warrants and I would not repeat it there.

## Twice-touched list

**`cor-monotone-converges-iff-bounded`** — 4 prior adjudications, two of them
`confirmed_fatal` at context `3726503bbe` (both lanes). Escalated to the
orchestrator's personal audit per the standing rule. **My ruling this round is
`confirmed_nonfatal` and I made no fix.**

`[L5]` reads *"Absolute value: $|t| \le M$ exactly when $-M \le t \le M$
([[lem-of-abs-value]])"*. The judge is correct that `lem-of-abs-value` states
only the strict form, *"for every $c > 0$, one has $|x| < c \iff -c < x < c$"*.
But the same Statement also carries *"$-|x| \le x \le |x|$"* verbatim, and
**step 1.2 uses only the forward direction**: from $|x_k| \le M$ it concludes
$-M \le x_k \le M$, which is the two-link chain
$-M \le -|x_k| \le x_k \le |x_k| \le M$ off that verbatim clause. The
biconditional as written is also true unconditionally (for $M < 0$ both sides are
false, since $|t| \ge 0 > M$ and $-M \le M$ fails). Nothing in the proof depends
on the direction that is not used.

Against my own round-2 stopping condition: I said a **third distinct fatal**
stops the repairs and reopens the Statement, and that a third distinct nonfatal
does not, because nonfatals license no edit under R1 and that is the loop the
rule was written to prevent. This is a nonfatal. The Statement stands.

## Gate state

| gate | result |
|---|---|
| `step8-guard` (baseline `pre-a8-round3`) | **OK — 2767 items, 0 changed, 0 created, 0 deleted** |
| `level-coverage --audit` | **exit 0 — 209 items, 155 proof-bearing, 1930 relationships, 209 complete judge pairs** |
| `level-coverage --verify-current-context` | **exit 0 — the hard receipt gate now PASSES** |

`research/audit/wave5-spine-audit.json` now exists, so the third-round blocker I
handed back twice is cleared and `--verify-current-context` ran for the first
time this wave. It is green. **A8 is closed.**

## Concurrent write by another process — not mine, reported not reverted

`library/topology/function-space-topologies.md` was modified at **03:08:30**,
inside my dispatch window (03:02:57), between my ledger append and my final gate
run. **I did not edit it**; I made no `Edit`/`Write` call against any file under
`library/` or `items/`, and `git status -- items/` is empty. The only writers I
ran are `touchlog snap`, my adjudication script, and read-only gates —
`level-coverage` writes only under `--template`, which I did not pass, and
`judge.mts --context-hash` exits before any append.

It is a page-prose correction, and on its face a correct one: the old text
claimed local compactness was *"a notion this library does not yet define in
general"* and that compactness for arbitrary topological spaces *"is not
available at this point in the reading order — the planned page carrying it sits
below this one and is not yet built"*. The new text says both are developed
earlier and that what is actually missing is the topology, `def-compact-open-topology`
being stated for a metric domain only. That is the published-claim-decay class.

Three things the orchestrator should know:

1. **`step8-guard` cannot see it.** The guard tracks `items/` only, so a `library/`
   page edit at A8 passes R1's mechanical enforcement silently, even though R1's
   text forbids a "page" mutation without a fatal licence. That is a real gap
   between the written rule and the gate.
2. **It did not stale my receipt.** A page edit moves the frozen pair context for
   every item on that page, but my `--verify-current-context` run at 03:09:44 was
   *after* the 03:08:30 edit and still returned 209/209 — clause (b) of the new
   item-granular coverage rule (commit `3bbae7f`) covered every item on the page
   because no item's own text changed. This is the first live confirmation that
   the fix works against a real sibling edit, and it saved a 31-item rejudge.
3. **I left it in place.** Reverting another process's concurrent work is not an
   adjudication and not mine to do.

## For the A10 owner report

- **Five of six rejections are the same fact-fidelity class**, and it is now on
  its fifth wave unanswered: a `[F#]`/`[L#]` fact states a clause that is *true*,
  *used*, and *one line from the cited item*, but not literally in that item's
  Statement. Four of the six here resolve to it, plus roughly 75 of the wave's 91
  nonfatals. **This is not a mathematics problem, it is an unwritten policy.**
  The library has no rule saying whether a fact list may carry a clause derived
  from its citation in one step. Until the owner writes one, both lanes will keep
  finding it, Alpha will keep ruling nonfatal, and every wave will spend a round
  on it. Item 4 above shows the cheap fix at A6: co-cite the definition.
- **DeepSeek's `fs-` blind spot is now four-for-four.** Every one of the four
  rejections of `cex-cauchy-rationals-no-rational-limit` is the same error — the
  judge treats a false-statement page as containing only its false claim and not
  its refutation. That is a fixable prompt defect, not a reasoning failure, and it
  has cost four adjudications on one item.
- **The dispatch's item hashes were the wrong normalisation** and their derived
  claim ("this item has since changed") was false. Any future dispatch that
  quotes an item hash should take it from `item-hash.mjs`, or say which of the two
  it is.
- `research/audit/RESUME.md` is **still headed WAVE 4**, fourth round running.

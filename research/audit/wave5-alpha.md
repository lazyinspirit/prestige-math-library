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

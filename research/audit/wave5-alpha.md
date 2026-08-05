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

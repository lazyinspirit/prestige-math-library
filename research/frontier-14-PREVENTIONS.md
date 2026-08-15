# frontier-14 — preventions carried from past build cycles

Owner instruction, 2026-08-16: *"Learn from all mistakes made from past build
cycles and take proactive steps to avoid repetition."*

Every row below is a defect that actually reached disk or actually cost hours.
A prevention is only listed as **mechanical** if a tool fails on it. Anything
that lives in a brief is marked **brief** and is weaker by construction — a brief
is advice an agent may misread; a gate is not.

## A. Defects that reached published or near-published text

### A1. The inflated `[F#]` restatement — the largest fatal class

`frontier-13` step 8: ten of twenty-five confirmed-fatal rows. Shape is always
identical — the `[F#]`/`[L#]` restatement claims more than the cited item's
Statement says, and a numbered step leans on the inflated version.
`thm-carmichael-function-formula` used `lcm` over a finite list while `def-lcm`
says "Two arguments only" in as many words.

- **brief** — every Beta and reader brief carries: *quote the cited clause
  exactly when practical, else the smallest faithful shortening; a clause's
  opening words are not a citation.*
- **mechanical, new** — `tools/citation-fidelity.mjs` (built for this run):
  for every `[F#]`/`[L#]`/`[A#]` fact, fetch the cited item's Statement from disk
  and flag quantifier/arity/domain widening — a cited two-argument definition
  restated over a finite family, a cited `n ≥ 1` restated without the bound, a
  cited "for some" restated as "for all". Reports candidates for a human read,
  never a verdict. **Grep counts mislead** (memory): it reports *candidates and
  their locations*, never a total that reads as a finding count.

### A2. The false or overstrong title

`ex-bounded-order-graph-classes-are-erdos-hajnal` asserted the property of a
class that need not be hereditary; `lem-typical-degrees-in-a-regular-pair` was
off by a factor of two **and had already propagated into a consumer**. The
paired judges cannot catch this class: they read Statements, and a false title
is invisible to them.

- **brief** — step-6 readers are told explicitly that the title is in scope and
  that a title asserting more than the proof gives is fatal.
- **process** — Alpha's step-6 checklist reads title and Statement together
  against the proof, as a distinct pass, not as a side effect of reading proofs.

### A3. Boundary rows that are template boilerplate

The one I most want not to repeat. `frontier-13`: **2,169 of 3,144** contract
`boundaries` rows were `not_applicable`, the most-repeated text recurring **124
times** with only the id substituted — and **two of those false rows each
concealed a fatal defect** (`h = 0` dividing by zero in the counting lemma; the
`n = 0` counterexample in the symmetric-polynomial corollary).
`proof-contract --strict` checks the eight dispositions are *present*. It has
never checked one is *true*, and `regen-contract-entries.mjs` re-emits them
verbatim after a repair.

- **mechanical, new** — `tools/boundary-audit.mjs` (built for this run). Two
  independent detectors:
  1. **template reuse** — cluster `not_applicable` rationales by normalised text
     across the whole run; any cluster over a threshold is reported with its
     members. A rationale reused 124 times is not a disposition.
  2. **contradicted disposition** — a row claiming an axis is `not_applicable`
     while the item's own text exhibits the trigger: a division by a bound
     parameter with `zero` marked inapplicable, an "if and only if" with
     `both_directions` inapplicable, an indexed family with `empty` or `one`
     inapplicable.
  Runs at step 5 and again at step 6. Findings route to the owning Beta as
  ordinary step-6 work, before the text freezes.

### A4. Deferrals that name no destination

52 of 68 `frontier-13` deferrals were prose only — indistinguishable from a
silent drop, which is precisely what the coverage harvest exists to prevent.

- **mechanical** — every `deferred` / `out-of-scope` disposition must name a
  licensing page id. Checked at step 2 with the coverage gate, not at step 6
  where acting on it costs a rewrite.

### A5. Declines resting on a false claim

Two `frontier-13` scope denials were overturned at step 9 because the stated
reason was factually wrong — one claimed a page was outside the closure when
`def-quaternions` is published *inside* it; one claimed no floor definition
exists when `lem-integer-part` is published and in closure. Four items were
built as a result, at step 9, at the worst possible moment.

- **mechanical** — every decline that names a missing dependency has that
  dependency's absence checked against disk **at step 2**, when acting on it
  still costs a scaffold entry.

### A6. Proof-step display orphaning

A step ending in a standalone display followed by a citation line gets scrambled
by precheck's stratification. It caused a fatal defect and then **reproduced it
in the repair**.

- **brief** — authors keep the citation inside the step's prose, never on its
  own line after a display. Called out in the author brief with the exact shape.

## B. Process failures that cost time rather than correctness

### B1. Pausing at a stage boundary

Violated three times in `frontier-13` (steps 5, 8, 9) *after* being told
explicitly, and twice before that at a cost of 4h14m. This is my single most
repeated failure and it is not an information problem — it is substitution.

- **mechanical** — `tools/run-supervisor.mjs` holds the stage table and fires
  the next dispatch; the `supervisor` agent (Sonnet 5, cap 2,
  `briefs/supervisor.md`) judges only whether a stage is finished. Built at the
  end of `frontier-13` and **never exercised**. It is launched at step 1 of this
  run, which is the point of building it.
- **process** — `research/STANDING-INSTRUCTIONS.md` is re-read before every
  dispatch or edit.

### B2. Routing findings from an agent's closing summary

Eleven Alpha findings were dropped by writing fix briefs from `result.json`
*tails* instead of the full report files — and renumbering finding ids made the
losses look like completions. Two were real mathematics.

- **process** — fix scope is built from the report file on disk, ids preserved
  verbatim, and the count in equals the count out. Never from a chat summary.

### B3. Gates that pass vacuously

`finite-smoke` reported "0 errors, 0 checks" for most of `frontier-13` — green
while checking nothing. `proof-contract --strict` passed single-step input maps.
`impact-audit` took its baseline *after* authoring, so its diff was empty by
construction.

- **mechanical, new** — `tools/gate-liveness.mjs` (built for this run): a gate
  reporting zero checks over a non-empty scope is an **error**, not a pass. Run
  after every gate sweep.
- **mechanical** — the `impact-audit` touch snapshot is taken at **step 4,
  before authoring**, and the stage table refuses to advance past step 4 without
  it.

### B4. Claiming a source was read when only its HTTP status was checked

"Re-anchor onto Treil Ch. 4" was relayed having verified only HTTP 200. Chapter
4 contains zero occurrences of the four key terms; 18 of 22 rows found no
replacement and 9 items were left sourceless.

- **brief** — a locator is verified by **extracting the text and matching the
  claim**, not by fetching the URL. WebFetch cannot read PDFs; the brief gives
  the venv + pypdf recipe.
- **mechanical** — `url-sweep.mjs --recover --fail-on-dead` gates steps 2 and 6
  for *liveness*; it does not and cannot check *content*, so the brief carries
  that half and Alpha checks harvest faithfulness at step 6.

### B5. Dead source replaced instead of recovered

Kim's UCL notes 404'd while carrying 47 of 114 harvested rows. The document was
archived only under its **pre-move host** (`www.ucl.ac.uk/~ucahmki/`), so
querying the citation's own hostname read as "never archived".

- **mechanical** — `url-sweep.mjs --recover` walks host variants against the
  Wayback index before anything is re-sourced. Re-sourcing costs a re-harvest
  and rewrites every backed item's provenance; it is the last resort.

### B6. Phantom liveness checks

A `pgrep` pattern matched the monitor's own shell, reading as three duplicate
agents on one batch — 50 minutes lost and an agent that was never launched.
Separately, seven refuter dispatches produced prompts and no results while a
report tabled all eleven as dispatched, leaving 74 dispositions silently
unwritten.

- **mechanical** — liveness filters on `comm ~ /node/`; `run-supervisor.mjs`
  counts only `ok:true` results. Zero children means queued at a lane cap, not
  stuck.

### B7. Reporting rates instead of outcomes

41% and 31% judge rejection rates yielded 2.7% confirmed fatal. A rate reads as
a quality signal and is not one.

- **process** — every check-in reports confirmed outcomes and what changed on
  disk. Rejection counts appear only next to their adjudicated dispositions.

## C. What is new code in this run

| tool | replaces | gates at |
|---|---|---|
| `tools/boundary-audit.mjs` | nothing — the gap A3 describes | 5, 6 |
| `tools/citation-fidelity.mjs` | a hand-read sample of A1 | 5, 6 |
| `tools/gate-liveness.mjs` | trusting a green gate | after every sweep |

`alpha-finding-lists-become-fix-scope` (memory) is the reason all three exist: a
hand-read sample of a defect class ships as if it were the whole class, so once
a class has appeared twice it gets a detector. A1 and A3 have each appeared
twice.

# Alpha — step-0 prerequisite-drift review

You are the run's first audit node. One question, per A page in scope: does a
track design require a prerequisite that the spec's declared `requires`
closure lacks? A track design (`research/plan-*.md`) states what a page needs;
`research/plan-spec.json` declares it. When they disagree, the scaffold gets
built against the design and step 4 fails with `undeclared-prereq` — after the
citations are written. Caught here it is a one-line spec edit.

Your task file names the run, the evidence file, and the report path. The
evidence gives, per page: the declared `requires`, its full transitive
closure, every design line mentioning the page, and every plan page id
appearing near those lines that is not in the closure. That last list is a
READING LIST, noisy by design — not a finding list. Real drift is often stated
in prose that never writes a `requires` line at all, so read the design
section, not just the evidence.

## What to do with a finding

- **The design names a prerequisite outside the closure, with a LOWER
  `order`:** the edge is backward and legal. Apply it yourself — edit that
  page's `requires` in `research/plan-spec.json`, run
  `node tools/validate-plan.mjs research/plan-spec.json`, and record the exact
  edit in your report. Do not apply an edge validate-plan rejects.
- **The design names a prerequisite with a HIGHER order:** close it by moving
  the pages in reading order — you have that authority (owner, 2026-08-24).
  Edit `order` in `research/plan-spec.json` so the edge points backward, run
  `node tools/validate-plan.mjs research/plan-spec.json`, and record
  `drift-reordered`. Move whichever side disturbs less: usually the citing pair
  up, not the whole prerequisite track down. The gate re-reads the CURRENT
  orders, so a reorder that does not actually close the edge still fails.
- **The design names a prerequisite that is NOT IN THE SPEC AT ALL:** mint it
  (owner, 2026-08-24). Add the A page and its `-examples` companion to
  `plan-spec.json` — id, order, kind, category, title, companion, `requires` —
  placed so every edge stays backward, and record `drift-minted`. This run then
  BUILDS that page: `tools/drift-apply.mjs` turns your verdict into a batch
  manifest, and a Beta scaffolds it like any other pair. Mint the page the
  design actually names, at the scope the design gives it; do not invent a
  larger one to be safe.
- **More than THREE pages need minting:** stop minting. That many missing
  prerequisites means the run is aimed above its own foundations, and the
  owner's ruling is to build the foundations instead: drop the original pairs
  and record `drift-rescoped`, naming the dependency pairs to build in their
  place, **at most 14 pairs total**. The run rebuilds its manifests around your
  list. This is cheap here and nowhere else — you run before any Beta starts,
  so a rescope costs one Alpha pass and no authored work.
- **The design and closure agree:** say what you read, so the verdict is
  checkable.

`drift-blocked` still exists and still stops the run, but it is now a LAST
RESORT rather than the routine answer to an ordering question. Reordering,
minting and rescoping are yours. Use it only when none of the three reaches the
problem, and say which you tried.

## Report contract — the gate parses this

Write the report to the path your task file names. One section per A page:

    ### <a-page-id>
    ...what you read: doc, section, and the design's stated prerequisites...
    VERDICT: no-drift
    VERDICT: drift-applied — added <page-id> (order N)[, ...]
    VERDICT: drift-minted — <page-id> (order N)[, ...]
    VERDICT: drift-reordered — <page-id> (order OLD -> NEW)[, ...]
    VERDICT: drift-rescoped — build <page-id> (order N)[, ...] instead
    VERDICT: drift-blocked — <the exact edge, and which of the three you tried>

(Write the actual numeric order for N; the dispatcher reserves the
angle-bracketed single letters n and k as identity placeholders and refuses
any prompt containing one.)

Exactly one VERDICT line per section. `tools/drift-review-check.mjs` fails the
stage on a missing section, a malformed verdict, or any `drift-blocked`.

## Bounds

- You edit `research/plan-spec.json` — `requires` arrays, `order` values, and
  new page entries when you mint — and you write your report. **Nothing else.**
  No item files, no library pages, no manifests, no scope ledger: the manifests
  and the ledger are `tools/drift-apply.mjs`'s, driven by your VERDICT lines. An
  Alpha that writes manifests is an Alpha driving a stage transition, which the
  owner's 2026-08-16 rule forbids.
- Minting adds a PLANNED page, never a published one. You are writing a
  plan-spec entry so a Beta can scaffold it; you are not authoring mathematics
  here.
- Every spec edit must leave `node tools/validate-plan.mjs
  research/plan-spec.json` exiting 0. Do not apply an edit it rejects.
- No permission prompts of any kind, including inside an `&&` chain. If an
  operation cannot proceed without new authority, record it in the report and
  stop.


---

# This dispatch

run: frontier-19
role: alpha
label: drift-review
covers: drift
output: research/frontier-19-alpha-step0-drift.md

## Step-0 prerequisite drift review — run `frontier-19`

A track design states what a page needs; `plan-spec.json` declares it. When
they disagree the scaffold is built against the design and step 4 fails with
`undeclared-prereq` — after the citation has been written. Caught here it is a
one-line spec edit.

This is a reading task and it is given to you rather than to a regex because
three mechanical versions each failed differently. Real drift is usually in
prose that never writes a `requires` line: on frontier-14 the topology design
called a metric-only restriction "forced, not stylistic" *because the
compactness page was unbuilt* — and it had since published. On frontier-15,
step 0 found a design (§II.8 of the algebra track) that had re-routed a whole
proof through pages the spec never declared. No parser reaches either.

**Evidence assembled for you:** `research/frontier-19-drift-evidence.json`

Per page it gives the declared `requires`, the full transitive spec closure,
every design-document line mentioning the page, and every plan page id
appearing near those lines that is NOT already in the closure. The last list is
raw and noisy on purpose — it is a reading list, not a finding list. Read the
design section it points into, not just the evidence.

### What to do with a finding

- **Backward edge** (the missing prerequisite has a LOWER `order`): apply it
  yourself — edit that page's `requires` in `research/plan-spec.json`, run
  `node tools/validate-plan.mjs research/plan-spec.json`, record the exact edit.
- **Higher-order target:** close it by REORDERING (owner, 2026-08-24). Edit
  `order` so the edge points backward, revalidate, record `drift-reordered`.
- **Target not in the spec at all:** MINT it (owner, 2026-08-24). Add the A page
  and its `-examples` companion to `plan-spec.json`, placed so every edge stays
  backward, and record `drift-minted`. This run then builds that pair.
- **More than three pages need minting:** the run is aimed above its own
  foundations. Drop the originals and record `drift-rescoped`, naming the
  dependency pairs to build instead — at most 14 pairs total.

You run BEFORE any Beta, so all three cost one Alpha pass and no authored work.

### Report contract — the gate parses this

Write `research/frontier-19-alpha-step0-drift.md`, one section per A page:

    ### <a-page-id>
    ...what you read: doc, section, the design's stated prerequisites...
    VERDICT: no-drift
    VERDICT: drift-applied — added <page-id> (order N)[, ...]
    VERDICT: drift-minted — <page-id> (order N)[, ...]
    VERDICT: drift-reordered — <page-id> (order OLD -> NEW)[, ...]
    VERDICT: drift-rescoped — build <page-id> (order N)[, ...] instead
    VERDICT: drift-blocked — <the exact edge, and which of the three you tried>

Exactly one VERDICT line per section. `tools/drift-review-check.mjs` fails the
stage on a missing section, a malformed verdict, or any drift-blocked.
`drift-blocked` is now a LAST RESORT, not the routine answer to an ordering
question: reordering, minting and rescoping are yours.

Edit `plan-spec.json` and write the report. NOT manifests, NOT the scope ledger —
`tools/drift-apply.mjs` derives those from your verdicts.

**No permission prompts of any kind**, including inside an `&&` chain.

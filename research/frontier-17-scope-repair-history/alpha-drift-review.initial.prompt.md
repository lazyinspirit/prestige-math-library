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
- **The design names a prerequisite with a HIGHER order, or one not in the
  spec:** that is a reading-order change, and it is the owner's alone. Record
  it as blocked and DO NOT edit anything. The gate turns your blocked verdict
  into a stopped run, which is the point.
- **The design and closure agree:** say what you read, so the verdict is
  checkable.

## Report contract — the gate parses this

Write the report to the path your task file names. One section per A page:

    ### <a-page-id>
    ...what you read: doc, section, and the design's stated prerequisites...
    VERDICT: no-drift
    VERDICT: drift-applied — added <page-id> (order N)[, ...]
    VERDICT: drift-blocked — <the exact edge and why it is not addable>

(Write the actual numeric order for N; the dispatcher reserves the
angle-bracketed single letters n and k as identity placeholders and refuses
any prompt containing one.)

Exactly one VERDICT line per section. `tools/drift-review-check.mjs` fails the
stage on a missing section, a malformed verdict, or any `drift-blocked`.

## Bounds

- You edit `research/plan-spec.json` `requires` arrays and write your report.
  Nothing else — no items, no pages, no manifests, no reordering, no id
  changes.
- No permission prompts of any kind, including inside an `&&` chain. If an
  operation cannot proceed without new authority, record it in the report and
  stop.


---

# This dispatch

run: frontier-17
role: alpha
label: drift-review
covers: drift

## Step-0 prerequisite drift review — run `frontier-17`

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

**Evidence assembled for you:** `research/frontier-17-drift-evidence.json`

Per page it gives the declared `requires`, the full transitive spec closure,
every design-document line mentioning the page, and every plan page id
appearing near those lines that is NOT already in the closure. The last list is
raw and noisy on purpose — it is a reading list, not a finding list. Read the
design section it points into, not just the evidence.

### What to do with a finding

- **Backward edge** (the missing prerequisite has a LOWER `order`): apply it
  yourself — edit that page's `requires` in `research/plan-spec.json`, run
  `node tools/validate-plan.mjs research/plan-spec.json`, record the exact edit.
- **Higher-order or out-of-spec target:** a reading-order change, owner-only.
  Record it as blocked; edit nothing.

### Report contract — the gate parses this

Write `research/frontier-17-alpha-step0-drift.md`, one section per A page:

    ### <a-page-id>
    ...what you read: doc, section, the design's stated prerequisites...
    VERDICT: no-drift
    VERDICT: drift-applied — added <page-id> (order N)[, ...]
    VERDICT: drift-blocked — <the exact edge and why it is not addable>

Exactly one VERDICT line per section. `tools/drift-review-check.mjs` fails the
stage on a missing section, a malformed verdict, or any drift-blocked — a
blocked edge stops the run for the owner, which is the point.

**No permission prompts of any kind**, including inside an `&&` chain.

# Alpha prerequisite-drift review

The task names the run, evidence, and report. Review each A page it assigns
against the design and the current `research/plan-spec.json`: decide whether
the design needs a prerequisite absent from that page's declared closure.
Treat candidate names in the evidence as a reading list, not findings; read the
design passage itself.

For every assigned A page, write exactly one task-format `VERDICT:` line in its
own `### <page-id>` report section. The report must use one of the task's
canonical verdicts: `no-drift`, `drift-applied`, `drift-minted`,
`drift-reordered`, `drift-rescoped`, or `drift-blocked`. Include the required
page ids and orders exactly as the task specifies. The gate verifies the report
against the current spec, not against an assertion in prose.

Apply a genuine backward prerequisite by editing `requires` and validating the
spec. Resolve a forward prerequisite by changing order so the resulting edge is
backward. When the prerequisite is absent from the spec, add the required A
page and its companion with a buildable order, then use `drift-minted`. If more
than three pages must be minted, rescope to the prerequisite pairs instead;
the replacement set may contain at most 14 pairs. `drift-blocked` stops the
run, so use it only when no authorised resolution exists.

Your writable scope is `research/plan-spec.json` and the task-named drift
report. Do not write manifests, covers, scope ledgers, task files, or content:
`tools/drift-apply.mjs` materialises minted and rescoped verdicts. Run

```sh
node tools/validate-plan.mjs research/plan-spec.json
```

after every spec edit. Do not request permissions.


---

# This dispatch

run: frontier-21
role: alpha
label: drift-review
covers: drift
output: research/frontier-21-alpha-step0-drift.md

## Step-0 prerequisite drift review — run `frontier-21`

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

**Evidence assembled for you:** `research/frontier-21-drift-evidence.json`

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

Write `research/frontier-21-alpha-step0-drift.md`, one section per A page:

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

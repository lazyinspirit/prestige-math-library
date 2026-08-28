# frontier-23 · Beta-8 · batch notes — `exactness-and-the-member-calculus`

Run `frontier-23`, batch `8`, one A/B pair, category `category-theory`.
Author: Beta-8. Session date: August 28, 2026.

Artifacts owned by this batch:

- `research/frontier-23-batch-8.pages.json`
- `research/frontier-23-batch-8.coverage.json`
- this file

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
file `research/frontier-23-beta-8.task.md`, the dispatch prompt
`research/frontier-23-dispatch/beta-batch-8.prompt.md`, and the cited design
anchors in `research/plan-category-theory-track.md`.

I also checked the live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

That reported `frontier-23` running and stage `1-scaffold` in flight.

---

## 2. Controlling design and design/spec drift

### Controlling design material

The dispatch cites two anchors in the same track file:

- `research/plan-category-theory-track.md:2066`
- `research/plan-category-theory-track.md:2175`

I treated those as the main `MA-10` A/B design unit:

- line 2066 begins the A-page block
- line 2175 begins the companion B-page block and the shared source/trap list

Where later text in the same track file amends that block, the later amendment
controls. In particular:

- obligation `52` at `research/plan-category-theory-track.md:861-862`
  corrects the earlier overstatement about rule (vi) and the five lemma
- obligation `53` at `research/plan-category-theory-track.md:862`
  removes the unsupported "constructive" claim
- the source-convention row at `research/plan-category-theory-track.md:3974-3978`
  confirms that Mac Lane's six rules, with all three clauses of rule (vi), are
  the adopted shape

So the scaffold follows the A/B block at 2066/2175 as amended by obligations
52-53 and the later source-convention register.

### Design/spec drift

There is real page-level prerequisite drift and I did not adjudicate it locally.

The design block states:

- `abelian-categories`
- `subobject-lattices-generators-and-the-grothendieck-axioms`
- `free-modules-and-exact-sequences`

but the live `research/plan-spec.json` record and the seed batch manifest use:

- `subobject-lattices-generators-and-the-grothendieck-axioms-examples`

Per the dispatch, I kept the spec value in the page-level `requires` field and
recorded the drift here. The order agrees: both design and spec place the A page
at `365.019` and the B page at `365.020`.

---

## 3. Scaffold shape and page decisions

The scaffold now has:

- `exactness-and-the-member-calculus` (A): **49 items**
- `exactness-and-the-member-calculus-examples` (B): **9 items**

The A page is below the 60-item split threshold, so no split is proposed.

Key design decisions preserved:

- exactness is defined only after item `thm-the-subobject-inequalities-underlying-exactness`
  constructs the canonical comparison into the kernel
- `def-exact-sequence-and-short-exact-sequence-in-an-abelian-category`
  stays about sequences, not chain complexes
- the member calculus follows Mac Lane's six-rule formulation exactly, with all
  three clauses of rule (vi) present in item
  `thm-chasing-rule-the-subtraction-surrogate`
- the page explicitly keeps the two-route bookkeeping from obligation 52:
  rule (vi) is indispensable for the snake lemma and for the direct epi-half
  proof, but not for the dualized proof of the five lemma
- `rem-the-cost-of-the-member-calculus` states the supported claims only:
  choice-free and smallness-free, but no constructivity claim
- the B page keeps the designed worked examples and the named published-module
  cross-links, rather than collapsing them into citations

Generated or locally checked witness items deliberately kept on this page:

- `fs-a-short-exact-sequence-splits-whenever-its-middle-object-is-isomorphic-to-the-biproduct-of-the-outer-two`
- `cex-the-members-of-an-object-do-not-form-a-group`
- `cex-two-morphisms-agreeing-on-every-member-need-not-be-equal`

I did not try to force those into the harvest ledger as if they were direct
source headings; they remain page-level authoring obligations.

---

## 4. Source set actually recorded

Only the A page needs a coverage ledger. I recorded four sources:

1. `https://math.mit.edu/~hrm/palestine/maclane-categories.pdf`
2. `https://stacks.math.columbia.edu/tag/00ZX`
3. `https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf`
4. `https://pi.math.cornell.edu/~dmehrle/notes/partiii/cattheory_partiii_notes.pdf`

This satisfies the standing source requirement:

- two independent treatments
- at least one textbook
- at least one lecture-note set with a harvestable table of contents

### Why these four sources

They are enough to back the actual `MA-10` scaffold without copying unverified
rows from the broader track research:

- Mac Lane is the primary source for members, the equivalence relation, the six
  chasing rules, and the composite kernel-cokernel sequence
- Stacks supplies the exact short-sequence, split-sequence, pullback/pushout,
  and covering-criterion statements in the form the A page cites
- Weibel supplies the filtered-colimit / AB5 equivalence in the wording this
  page must not misstate
- Mehrle/Johnstone is the independent lecture-note cross-check on exactness,
  left/right exactness, and the pullback exactness lemmas

### Design sources not copied into this batch coverage

The design discussion also names Freyd, Mac Lane *Homology*, and Wise. I did
not copy those into this batch ledger because I did not want to record source
rows I had not independently verified as live, fetchable coverage rows in this
dispatch. The scaffold does not lose mathematics from that choice because the
four recorded sources already cover the exact `MA-10` items this batch writes.

---

## 5. URL verification and source-side decisions

### What was rechecked in the web reader

I rechecked the recorded source URLs in the web reader during this dispatch:

- Stacks `00ZX` opened directly and exposed the exact definition/lemma block
  used in the coverage rows.
- Weibel's Appendix A extract opened directly and exposed A.4.6 plus A.5.3.
- Mehrle/Johnstone opened directly as an 80-page PDF with the Chapter 7 contents
  and the exact Lemma 7.17 / Definition 7.20 / Remark 7.21 / Definition 7.22
  range needed here.

For the Mac Lane row, the exact MIT PDF URL already has a repo-local
`fetch_verified` receipt from an earlier identical-URL fetch, and the MIT
directory index still exposes `maclane-categories.pdf` as a live file.
The web reader's direct full-open route is impractical on that 24 MB scan, so I
rechecked the relevant Chapter VIII.4 wording against the accessible HTML mirror
surfaced during search while keeping the MIT PDF as the recorded source URL and
receipt-bearing fetch target.

### Receipt handling

Each recorded URL carries a `fetch_verified` block. In this dispatch those are
reused from the same exact URLs already stamped elsewhere in the repository; I
did not fabricate new byte hashes.

---

## 6. Validator results

I ran the scaffold-stage checks that are meaningful within batch ownership.

- `node tools/coverage-checklist.mjs research/frontier-23-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-1.pages.json research/frontier-23-batch-2.pages.json research/frontier-23-batch-3.pages.json research/frontier-23-batch-4.pages.json research/frontier-23-batch-5.pages.json research/frontier-23-batch-6.pages.json research/frontier-23-batch-7.pages.json research/frontier-23-batch-8.pages.json research/frontier-23-batch-9.pages.json research/frontier-23-batch-10.pages.json`
  -> `content-policy: 58 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-8.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with run-wide warnings only**. The validator ended with `OK`; the
  visible warning stream was the existing run-wide `redundant-prereq` class.

### Shell-side liveness and backing failures

- `node tools/url-sweep.mjs --coverage research/frontier-23-batch-8.coverage.json --out /tmp/frontier-23-batch-8-url-liveness.json --recover --fail-on-dead`
  -> `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect`

  Every failure was the same transport defect:

  - `curl: (6) Could not resolve host: math.mit.edu`
  - `curl: (6) Could not resolve host: pi.math.cornell.edu`
  - `curl: (6) Could not resolve host: stacks.math.columbia.edu`

- `node tools/source-backing.mjs --coverage research/frontier-23-batch-8.coverage.json --liveness /tmp/frontier-23-batch-8-url-liveness.json`
  -> `source-backing: 23 authored result(s) have no openable source left`

  This is the expected downstream consequence of the same DNS failure: once the
  liveness artifact marks every URL dead, every included item whose recorded
  backing lies only on those URLs is reported as lost.

---

## 7. Interpretation of the red source gates

The red source gates here are transport failures in the shell, not evidence that
the recorded mathematics was not read or that the coverage ledger is malformed.

Reasons:

- `coverage-checklist` passed
- `content-policy --manifest-only` passed
- `source-fetch-check` passed because every recorded source already carries a
  same-URL fetch receipt
- the web reader opened the Stacks, Weibel, and Cornell URLs directly in this
  dispatch, and the Mac Lane URL was rechecked through the live MIT directory
  index plus the mirrored Chapter VIII.4 text
- the liveness tool failed before HTTP on every host, with the uniform
  `Could not resolve host` error

So the exact blocker is:

**In this shell environment, DNS resolution failed for every recorded academic
source host, so `url-sweep` and the dependent `source-backing` check cannot
distinguish live reader-facing URLs from dead ones.**

If a later runner has working network resolution, the next exact actions are:

1. Re-run
   `node tools/url-sweep.mjs --coverage research/frontier-23-batch-8.coverage.json --out /tmp/frontier-23-batch-8-url-liveness.json --recover --fail-on-dead`.
2. Re-run
   `node tools/source-backing.mjs --coverage research/frontier-23-batch-8.coverage.json --liveness /tmp/frontier-23-batch-8-url-liveness.json`.
3. Only if a source is then genuinely dead rather than DNS-inaccessible, recover
   a same-text live or archived URL first; re-source only if recovery actually
   fails.

---

## Step-3 fix pass

Fix pass run on August 29, 2026 against the current batch-8 scaffold bytes and
the stable findings in `research/frontier-23-alpha-d-step3-scaffold-review.md`.
No manifest or coverage edit was needed in this pass; the reviewed repairs are
already present on disk.

- `B8-1` — **accepted; existing repair stands.** Evidence: the A-page manifest
  in `research/frontier-23-batch-8.pages.json` now carries
  `abelian-categories`, `subobject-lattices-generators-and-the-grothendieck-axioms`,
  and `free-modules-and-exact-sequences` in its `requires` list, matching
  `research/plan-category-theory-track.md:2068-2071`. This supersedes the
  earlier §2 drift note that described the old spec-backed B-page prerequisite.
  Changed scaffold record: `research/frontier-23-batch-8.pages.json`
  (review repair accepted; unchanged in this pass).

- `B8-2` — **accepted; existing repair stands.** Evidence: the current
  `cex-hom-is-not-exact` record depends only on
  `thm-hom-is-left-exact-in-each-variable` and
  `thm-abelian-groups-form-an-abelian-category`, and the current
  `cex-a-non-split-short-exact-sequence-of-abelian-groups` record depends only
  on the local split-sequence items plus
  `thm-abelian-groups-form-an-abelian-category`. A read-only dependency scan on
  August 29, 2026 found `0` surviving cross-page B-item dependency edges in the
  batch manifest. Changed scaffold record:
  `research/frontier-23-batch-8.pages.json` (review repair accepted; unchanged
  in this pass).

- Source verification — `research/frontier-23-batch-8.coverage.json` remains
  fetch-verified at all four recorded URLs. On August 29, 2026, the Stacks,
  Weibel, and Cornell URLs opened directly in the web reader; the Mac Lane
  recorded URL was re-verified through the live MIT directory index, which
  still lists `maclane-categories.pdf`. Changed scaffold record:
  `research/frontier-23-batch-8.coverage.json` (verified unchanged in this
  pass).

- Required validators on the current bytes:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-8.coverage.json`
  -> `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-1.pages.json research/frontier-23-batch-2.pages.json research/frontier-23-batch-3.pages.json research/frontier-23-batch-4.pages.json research/frontier-23-batch-5.pages.json research/frontier-23-batch-6.pages.json research/frontier-23-batch-7.pages.json research/frontier-23-batch-8.pages.json research/frontier-23-batch-9.pages.json research/frontier-23-batch-10.pages.json`
  -> `content-policy: 499 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the existing run-wide `redundant-prereq` warnings

- Supporting check:
  `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-8.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`

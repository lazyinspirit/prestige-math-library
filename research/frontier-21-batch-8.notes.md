# frontier-21 · Beta-8 · batch notes — `the-argument-principle-and-rouche` and `domains-of-holomorphy-and-pseudoconvexity`

## 1. Scope, control files, and owned artifacts

This batch owns two A/B pairs:

- `the-argument-principle-and-rouche` / `the-argument-principle-and-rouche-examples`
- `domains-of-holomorphy-and-pseudoconvexity` / `domains-of-holomorphy-and-pseudoconvexity-examples`

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
`research/frontier-21-beta-8.task.md`, the live batch manifest
`research/frontier-21-batch-8.pages.json`, and the controlling design anchors in
`research/plan-complex-analysis-track.md`:

- CA-10 at lines near `1612`
- SC-4 at lines near `3455`

I also checked the active run status with:

```bash
cd tools/autopilot
node --import tsx bin/autopilot.mts status --repo ../..
```

That confirmed `frontier-21` is live, stage `1-drift` is complete, and stage
`1-scaffold` is currently in flight for all ten batches.

Artifacts written by this dispatch:

- `research/frontier-21-batch-8.pages.json`
- `research/frontier-21-batch-8.coverage.json`
- this file

I did not edit plan structure, workflow state, published library content, or
another batch artifact.

## 2. Design/spec and run-level conflicts

### CA-10

For `the-argument-principle-and-rouche`, the design and the live spec agree in
substance:

- design requires CA-9
- spec requires `the-residue-theorem`

Those are the same page interface, so I treated this as `no-drift`.

### SC-4

For `domains-of-holomorphy-and-pseudoconvexity`, there are **two distinct
conflicts**. I did not adjudicate the page-level design/spec mismatch inside
the batch, but I did apply the item-level step-0 rescope for the unsupported
plane-domain contrast.

1. Design vs. spec:
   - the design `requires` line names `SC-2, SC-1, CA-14, CA-18, CA-19, convexity`
   - the live spec and batch manifest require only
     `the-hartogs-phenomena`, `holomorphic-functions-of-several-variables`,
     `subharmonic-functions-and-the-dirichlet-problem`, and `convexity`

2. The completed drift review already records this page as run-level problematic:
   - `research/frontier-21-alpha-step0-drift.md` marks
     `domains-of-holomorphy-and-pseudoconvexity` as
     `VERDICT: drift-rescoped`
   - the reason recorded there is exactly the missing one-variable supplier pair
     for the plane-domain contrast item: the design explicitly spends CA-18/CA-19
     for boundary-singular holomorphic functions on plane domains, but those pages
     are lower-order, unpublished, and not in the live spec closure

The batch task tells me not to adjudicate design/spec conflicts locally and to
carry on with the spec. I therefore kept the SC-4 page itself in the manifest,
but I applied the step-0 rescope inside the batch scaffold:

- removed `cor-plane-domains-are-domains-of-holomorphy` from the A-page manifest
- deferred Lebl's `Exercise 2.6.2` to
  `mittag-leffler-and-runges-theorem`, with the notes naming the coupled
  `infinite-products-and-weierstrass-factorisation` supplier page as part of
  the same one-variable repair route

So the batch now follows the live spec without pretending the missing CA-18 /
CA-19 supplier pair is locally available.

## 3. Scaffold shape

### `the-argument-principle-and-rouche`

The A page has **16 items**, matching the design inventory exactly. The B page
has **11 items**. No split is needed.

The A page follows the design route:

- logarithmic derivative and weighted zero/pole counts
- residue calculation for local order
- argument principle in cycle form
- image-winding-number interpretation
- preimage counting and weighted form
- classical Rouché
- local zero persistence
- Hurwitz zero-free and injective-limit consequences
- open-mapping and local-degree agreement remarks
- the contour inverse formula

The B page keeps the designed worked uses and failure modes:

- polynomial zero counts by Rouché
- one transcendental zero-count example
- one winding-number image example
- one Hurwitz persistence example
- one inverse-formula example
- three companion counterexamples / false statements

### `domains-of-holomorphy-and-pseudoconvexity`

The A page has **27 items** after applying the step-0 drift rescope. The B page
has **10 items**. No split is needed.

The A page keeps the design's three-cluster shape:

- holomorphic hulls, boundary-radius, Cartan-Thullen, and convex domains
- plurisubharmonicity, Levi form, stability, envelope, and maximum principle
- Hartogs pseudoconvexity, continuity principle, and the smooth Levi/Hartogs equivalence

The one-variable plane-domain contrast no longer sits on SC-4. Step 0 already
rescoped that item to the later Weierstrass / Mittag-Leffler supplier pair, so
the batch manifest now keeps only the part of SC-4 that the current run can
honestly close.

## 4. Source choices and harvest decisions

### CA-10 source set

I used two independent treatments:

1. Russell W. Howell and John H. Mathews, open textbook HTML section
   `https://complexanalysis.org/web/sec_argument-rouche.html`
2. Jiří Lebl, *Guide to Cultivating Complex Analysis*,
   `https://www.jirka.org/ca/ca.pdf`

This differs from the design's Ahlfors / Stein-Shakarchi / Howell trio.
Reason: in this workspace I could fetch and read Howell and Lebl directly as
full open texts with harvestable tables of contents and stable section anchors,
while the commercial Ahlfors and Stein-Shakarchi texts were not available here
in the same harvestable form. I therefore kept the design's mathematical route
but reharvested an accessible replacement secondary treatment rather than
pretending to have read inaccessible text.

Two CA-10 source-shape notes matter:

- the weighted argument principle and the inverse contour formula are present in
  the scaffold because they are honest short derivatives of the argument
  principle plus the residue/Cauchy machinery already in closure
- the two open sources directly back the parent theorems, even when they do not
  name those two exact extensions as standalone theorem headings

### SC-4 source set

I used two independent several-variables lecture-note sets:

1. Jiří Lebl, *Tasty Bits of Several Complex Variables*,
   `https://www.jirka.org/scv/scv.pdf`
2. Harold P. Boas, *Lecture Notes on Several Complex Variables*,
   `https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf`

This partially overlaps the design's Lebl / Boas / CIMAT trio. I did not add a
CIMAT source row because Lebl and Boas already satisfy the standing two-source
requirement with harvestable contents, and I preferred to keep the coverage file
to sources I actually opened and read in full rather than padding the harvest
with a third citation.

Two SC-4 harvest decisions are important:

- Lebl's one-variable `Exercise 2.6.2` is now explicitly marked `deferred` to
  `mittag-leffler-and-runges-theorem`, because step 0 already moved the
  plane-domain contrast onto the later one-variable supplier pair
- Boas's `Applications of the d-bar problem` and `Solution of the d-bar equation
  on smooth pseudoconvex domains` are explicitly marked `out-of-scope` here,
  because the design says those belong to SC-6 and that SC-4 must stop before
  the hard Levi-problem direction

## 5. Dependency rationale and proof-strategy notes

### CA-10

- `thm-argument-principle-as-image-winding-number` is kept separate from the
  cycle-count theorem because the design explicitly warns that the contour
  substitution / image-winding reading is not just a definitional restatement.
- `thm-hurwitz-zero-free-limit` is kept after the local zero-continuity theorem.
  The zero-free statement is a clean corollary once multiplicity persistence is
  available, and this keeps the logic honest.
- `thm-hurwitz-injective-limit` is stated in the exact form the design says a
  later several-variable page consumes: injective or constant.
- `rem-open-mapping-theorem-via-argument-principle` is a remark only. The
  earlier published page already proves open mapping by local normal form, and
  the design explicitly forbids turning this later proof into the canonical one.

### SC-4

- I kept `thm-continuity-principle-for-domains-of-holomorphy` as its own item,
  exactly as the design requests. It is load-bearing for the Hartogs
  pseudoconvexity theorem and should not be hidden inside another proof.
- `thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains` is stated only for
  `C^2` boundaries, with no converse Levi-problem overreach.
- `thm-cartan-thullen-theorem` is scaffolded with the countable exhaustion /
  boundary blow-up strategy, and the notes intentionally do not pretend the
  Baire-space argument lives in the domain itself.

## 6. Known limits before validation

- The SC-4 design/spec prerequisite mismatch remains a run-level note, but the
  batch no longer carries the unsupported plane-domain corollary locally.
- No live source row currently backs the full SC-6 material, by design.
- The batch has not yet been through `coverage-checklist`, `content-policy`,
  `validate-plan`, `source-fetch-check`, or `url-sweep`; the next section will
  record exact outputs.

## 7. Validator results on Thursday, August 27, 2026

I ran the batch-local and scaffold-level checks required by the beta brief.

- `node tools/coverage-checklist.mjs research/frontier-21-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 44 harvested result(s), 0 error(s), 1 warning(s)`
  with
  `coverage-low-yield [the-argument-principle-and-rouche]: ... 8/21 harvested results scaffolded; confirm the declines with Alpha`

- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-1.pages.json research/frontier-21-batch-2.pages.json research/frontier-21-batch-3.pages.json research/frontier-21-batch-4.pages.json research/frontier-21-batch-5.pages.json research/frontier-21-batch-6.pages.json research/frontier-21-batch-7.pages.json research/frontier-21-batch-8.pages.json research/frontier-21-batch-9.pages.json research/frontier-21-batch-10.pages.json`
  -> `content-policy: 365 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with warnings only**. The tool ended with `OK`. The visible warnings
  were the run-wide `redundant-prereq` class; there was no batch-8-specific
  unresolved-id, cycle, or B-page dependency failure.

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-8.coverage.json --stamp`
  -> failed on all 4 source rows with DNS-resolution errors:
  `EAI_AGAIN` for `complexanalysis.org`, `www.jirka.org`, and
  `haroldpboas.gitlab.io`

- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-8.coverage.json --out /tmp/frontier-21-batch-8-url-liveness.json --recover --fail-on-dead`
  -> `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect`
  with `curl: (6) Could not resolve host` for the same four hosts

## 8. Interpretation of the source-gate failures

These failures are **transport failures in the sandbox**, not evidence that the
harvested texts were misread or mathematically dead:

- the same URLs were fetched and read through the web tool during this dispatch
- the omission gate (`coverage-checklist`) passed
- the manifest/graph gates (`content-policy`, `validate-plan`) passed
- both failing source tools stopped at DNS resolution before any content-level
  dispute about the harvested documents

So the precise blocker is:

**This workspace could not resolve the source hosts on Thursday, August 27,
2026, so no local fetch stamps or liveness receipts could be minted even though
the documents were read through the web tool.**

If DNS resolution clears, the next local actions are exactly:

1. `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-8.coverage.json --stamp`
2. `node tools/url-sweep.mjs --coverage research/frontier-21-batch-8.coverage.json --out /tmp/frontier-21-batch-8-url-liveness.json --recover --fail-on-dead`

## 9. Reharvest-1-b8 on Thursday, August 27, 2026

I read `research/frontier-21-reharvest-plan.json` for this dispatch and found
that it assigns **no `work[]` row at all** to
`research/frontier-21-batch-8.coverage.json`. So batch 8 has no orphaned
result to replace in this repair wave.

That means there is no batch-8 dead-source/replacement pair to apply here:

- dead source: none assigned to batch 8 by the run plan
- replacement/search: none required, because no batch-8 result lost its last
  backing in `research/frontier-21-url-liveness.json`
- affected result: none
- changed claim constraint: none

I still re-verified the four reader-facing source URLs for the batch on
Thursday, August 27, 2026. The exact cited URLs remain the right same-document
citations, so no alternate live URL, archive snapshot, or `original_url`
provenance repair was needed:

- `https://complexanalysis.org/web/sec_argument-rouche.html` opened directly at
  Section 8.7, including Theorems 8.7.2, 8.7.9, and 8.7.11.
- `https://www.jirka.org/ca/ca.pdf` opened directly as the full PDF and still
  carries Chapter 5.4, `Counting zeros and poles`, including Theorem 5.4.6,
  Corollary 5.4.9, and Exercise 5.4.14.
- `https://www.jirka.org/scv/scv.pdf` opened directly as the full PDF and still
  carries Chapter 2, especially the pseudoconvexity and holomorphic-convexity
  material around Theorem 2.5.8 and the Cartan-Thullen discussion.
- `https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf` opened directly
  as the full PDF and still carries §§3.2.3-3.3.3.

Validator reruns for this dispatch:

- `node tools/coverage-checklist.mjs research/frontier-21-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 44 harvested result(s), 0 error(s), 1 warning(s)`
  with the existing low-yield warning on
  `the-argument-principle-and-rouche`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-8.coverage.json --stamp`
  -> `source-fetch-check: 2/4 source(s) fetch-verified (0 newly stamped), 2 FAILED`
  with `EAI_AGAIN` on the two Lebl URLs.
- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-8.coverage.json --out /tmp/frontier-21-batch-8-url-liveness.reharvest-1-b8.json --recover --fail-on-dead`
  -> `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect`
  with `curl: (6) Could not resolve host` for all four hosts in this sandbox.
- `node tools/source-backing.mjs --coverage research/frontier-21-batch-8.coverage.json --liveness research/frontier-21-url-liveness.json`
  -> `source-backing: 19 authored result(s) across 1 file(s), every one still backed by an openable source`

Interpretation: this dispatch was a verified **no-change reharvest**. The run's
actual liveness ledger still records all four batch-8 URLs as openable, the
reharvest plan assigns batch 8 no orphaned result, and the local stamp/sweep
failures are transport failures from this sandbox rather than evidence of a dead
mathematical source. I therefore left
`research/frontier-21-batch-8.coverage.json` unchanged and only appended this
durable record.

## 11. Source transport recovery on Thursday, August 27, 2026

After both automatic repair rounds, the Step-1 fetch gate remained blocked on
the two canonical `jirka.org` PDF URLs. Direct local fetches timed out, while
the author's official GitHub Pages mirrors returned HTTP 200 with the complete
PDFs:

- `https://jirilebl.github.io/ca/ca.pdf` (2,058,822 bytes), replacing
  `https://www.jirka.org/ca/ca.pdf`;
- `https://jirilebl.github.io/scv/scv.pdf` (1,652,309 bytes), replacing
  `https://www.jirka.org/scv/scv.pdf`.

The coverage rows retain the canonical addresses as `original_url`. The title,
locator, contents rows, and mathematical claim constraints are unchanged: these
are alternate official URLs for the same two Jiří Lebl texts.

## Step-3 fix pass

- `C8-1`
  disposition: applied
  evidence: `research/frontier-21-alpha-c-step3-scaffold-review.md` identifies the SC-4 plane-domain corollary as still spending out-of-run CA-18 / CA-19 suppliers, and `research/frontier-21-alpha-step0-drift.md` already authorizes the repair as `drift-rescoped — build infinite-products-and-weierstrass-factorisation (order 337), mittag-leffler-and-runges-theorem (order 339) instead`.
  changed scaffold record: removed `cor-plane-domains-are-domains-of-holomorphy` from `research/frontier-21-batch-8.pages.json`; changed Lebl `Exercise 2.6.2.` in `research/frontier-21-batch-8.coverage.json` from `included` to `deferred` with destination `mittag-leffler-and-runges-theorem` and an explicit reason naming the coupled Weierstrass supplier page; updated the SC-4 scaffold notes in this file to reflect the applied rescope.

Post-fix validator receipts on Thursday, August 27, 2026:

- `node tools/coverage-checklist.mjs research/frontier-21-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 44 harvested result(s), 0 error(s), 1 warning(s)`
  with the unchanged Alpha-confirmed warning
  `coverage-low-yield [the-argument-principle-and-rouche]`.
- `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-1.pages.json research/frontier-21-batch-2.pages.json research/frontier-21-batch-3.pages.json research/frontier-21-batch-4.pages.json research/frontier-21-batch-5.pages.json research/frontier-21-batch-6.pages.json research/frontier-21-batch-7.pages.json research/frontier-21-batch-8.pages.json research/frontier-21-batch-9.pages.json research/frontier-21-batch-10.pages.json`
  -> `content-policy: 432 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories and no batch-8-specific unresolved ids, dependency cycles, or B-page dependency failures.

## Step-5 authoring

Authoring date: Thursday, August 27, 2026.

Authored or materially repaired ids in this recovery pass:

- CA-10 repairs: `thm-argument-principle-as-image-winding-number`, `thm-weighted-argument-principle`, `rem-fundamental-theorem-of-algebra-via-rouche`, `thm-continuity-of-zeros-locally-uniform-convergence`, `ex-the-inverse-contour-formula-recovers-a-local-inverse-value`.
- SC-4 A page ids: `def-holomorphically-convex-hull-and-domain`, `lem-basic-properties-of-the-holomorphic-hull`, `def-polydisc-boundary-radius`, `lem-cauchy-estimates-propagate-to-holomorphic-hulls`, `thm-cartan-thullen-boundary-radius-theorem`, `thm-cartan-thullen-theorem`, `lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point`, `thm-convex-domains-are-holomorphically-convex`, `cor-convex-domains-are-domains-of-holomorphy`, `def-plurisubharmonic-function`, `lem-affine-line-independence-in-the-definition-of-plurisubharmonicity`, `def-levi-form-and-strict-plurisubharmonicity`, `thm-c-two-levi-criterion-for-plurisubharmonicity`, `thm-decreasing-limits-of-plurisubharmonic-functions`, `thm-holomorphic-pullback-of-plurisubharmonic-functions`, `thm-stability-operations-for-plurisubharmonic-functions`, `thm-upper-envelope-theorem-for-plurisubharmonic-functions`, `thm-maximum-principle-for-plurisubharmonic-functions`, `cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic`, `def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity`, `thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity`, `def-levi-pseudoconvex-domain`, `lem-levi-pseudoconvexity-is-independent-of-defining-function`, `def-continuous-family-of-analytic-discs`, `thm-continuity-principle-for-domains-of-holomorphy`, `thm-domains-of-holomorphy-are-hartogs-pseudoconvex`, `thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains`.
- SC-4 B page ids: `ex-the-bidisc-is-holomorphically-convex`, `ex-the-ball-is-levi-pseudoconvex`, `ex-a-convex-domain-is-a-domain-of-holomorphy`, `ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc`, `ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc`, `ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space`, `cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex`, `cex-a-domain-of-holomorphy-need-not-be-convex`, `fs-every-domain-in-c-n-is-a-domain-of-holomorphy`, `fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy`.
- Page files: `library/complex-analysis/domains-of-holomorphy-and-pseudoconvexity.md`, `library/complex-analysis/domains-of-holomorphy-and-pseudoconvexity-examples.md`.
- Batch contract artifact: `research/frontier-21-batch-8.proof-contracts.json`.

Provenance rationale actually used:

- The CA-10 theorem and remark statements remain `literature-derived` from the Howell/Lebl source pair already recorded in the coverage ledger; the repaired proofs stay truthful to the on-disk mathematics and do not retain any stale `verification.judge` record.
- The SC-4 A-page definitions, lemmas, theorems, and corollaries are tagged `literature-derived` for the statement layer from the Lebl/Boas source pair harvested in `research/frontier-21-batch-8.coverage.json`; the proofs are `ai-altered`, because they are source-guided but written against the library's existing dependencies and current schema.
- The SC-4 examples, counterexamples, and false statements are tagged `ai-altered` rather than `ai-generated`, so no batch-8 dependency target carries `provenance.statement: ai-generated`.
- The batch proof-contract file was created only after all 52 proof-bearing batch items existed on disk, and its `citations` / `derivations` rows were regenerated from the final on-disk proofs with `tools/regen-contract-entries.mjs`.

Narrowed or dropped claims during this authoring pass:

- No new batch-8 claim was narrowed or dropped in this recovery pass.
- The standing Step-0 rescope remains in force and unchanged: `cor-plane-domains-are-domains-of-holomorphy` stays out of SC-4, with Lebl `Exercise 2.6.2.` deferred in the coverage ledger to `mittag-leffler-and-runges-theorem`.

Checks I actually ran on Thursday, August 27, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts ...` on all 52 proof-bearing batch-8 items
  -> initial run surfaced 7 canonical phase-order repairs on newly authored SC-4 items.
  -> after adopting those exact repairs, final run: `52 checked, 0 failing — all clean`.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-cauchy-estimates-propagate-to-holomorphic-hulls.md items/thm-continuity-of-zeros-locally-uniform-convergence.md`
  -> post-contract-fix rerun: `2 checked, 0 failing`.
- `node tools/content-policy.mjs research/frontier-21-batch-8.pages.json`
  -> `content-policy: 64 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the standing repository-wide `redundant-prereq` advisories.
- `node tools/rendercheck.mjs ...`
  -> `OK — 68 file(s)` for the four batch page files plus all 64 batch item files.
- `node tools/proof-contract.mjs research/frontier-21-batch-8.proof-contracts.json --strict`
  -> initial run found 2 issues: one stale unused citation row on `thm-continuity-of-zeros-locally-uniform-convergence`, and one undeclared dependency on `def-holomorphically-convex-hull-and-domain` in `lem-cauchy-estimates-propagate-to-holomorphic-hulls`.
  -> after patching those current-byte issues and regenerating the two touched contract entries, final run: `proof-contract: 0 error(s), 0 warning(s), 52/52 item(s) checked`.

Blockers:

- None remain on the required Step-5 authoring checks for batch `8`.

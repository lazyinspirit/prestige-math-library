# Batch 7 authoring notes — statistical inverse experiments and white noise

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Role: beta · Batch: 7 · Pages: statistical-inverse-experiments-and-white-noise / statistical-inverse-experiments-and-white-noise-examples

## Run and plan state

The native status command reports the run as active in 1-scaffold: 0/109 scaffold results are collected and nothing is in flight. No runtime state or gate was changed.

The current research/plan-spec.json pair entries agree with the assignment on page IDs, titles, category inverse-problems, order 3010/3011, and page requirements. Their items arrays are still empty, so they do not conflict with the IP-07 design inventory. The controlling design in research/plan-inverse-problems-track.md specifies the two A items authored here and three B leaves. No claim or page metadata conflict required an owner plan change.

The design cites “reader 2's MAP testing model, pp. 2–3” without a title or source ID in the current assignment evidence. The matching full-text source used here is Kretschmann–Werner, Maximum a posteriori testing in statistical inverse problems, §1.1. This is recorded as an evidence source, not as an authenticated identity for the unspecified “reader 2” label.

## Inventory, dependencies, and levels

The item inventory and dependency levels were entered into the batch manifest before the item carriers were written. The batch scheduling row is level 0 with no in-run prerequisite batches; the dependency-level input digest is 69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce.

| Item | Home | Level | Logical suppliers |
|---|---|---:|---|
| def-ip-isonormal-white-noise-experiment | A | 0 | def-statistical-experiment; def-hilbert-space; def-random-element-and-real-random-variable; def-l-p-space-as-a-quotient-by-null-functions; def-independent-random-elements; lem-law-of-a-random-element-is-a-probability-measure |
| thm-ip-white-noise-spectral-sequence-representation | A | 1 | def-ip-isonormal-white-noise-experiment; def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis; thm-cauchy-schwarz-in-an-inner-product-space; def-negative-sobolev-space-for-white-noise; lem-white-noise-is-borel-gaussian-on-negative-sobolev-space; def-countable-choice |
| ex-ip-white-noise-direct-functionals | B | 1 | def-ip-isonormal-white-noise-experiment |
| ex-ip-white-noise-coefficient-sequence | B | 2 | def-ip-isonormal-white-noise-experiment; thm-ip-white-noise-spectral-sequence-representation |
| ex-ip-white-noise-finite-truncation-tail | B | 2 | def-ip-isonormal-white-noise-experiment; thm-ip-white-noise-spectral-sequence-representation |

The page requirements statistical-experiments-models-and-identifiability and weak-nonparametric-bernstein-von-mises are published pages outside this run. Their relevant current page inventories and supplier bodies were inspected. def-statistical-experiment defines a measurable sample space and parameter-indexed laws without requiring a measurable parameter structure or common probability space. def-negative-sobolev-space-for-white-noise gives the logarithmic coefficient norm and continuous L2 embedding. lem-white-noise-is-borel-gaussian-on-negative-sobolev-space requires countable choice and delta>1/2 for its Borel H(delta) realization, and states that white noise is not L2-valued in infinite dimension. No prerequisite item or proof body was missing.

The sequence-coordinate and mean-square reconstruction argument is choice-free once the isonormal process and complete basis are supplied. Countable choice is declared and used only in the optional H(delta) Borel-carrier clause through the cited white-noise lemma; no full axiom of choice is imported.

research/inverse-problems-knot-theory-all-109-2026-10-19-batch-7.cross-batch-dependencies.json records each published page/item edge, its current source hash, and the exact interface examined. These records document supplier inspection only; they are not acceptance or approval.

## Source reading and locator notes

The A page has independent treatments in the full Kretschmann–Werner paper and the Giné–Nickl book; Castillo–Nickl and Ding–Mathé provide further independent model context. Full-text URLs, locators, supported item IDs, dispositions, and reading evidence are in research/inverse-problems-knot-theory-all-109-2026-10-19-batch-7.coverage.json.

- Kretschmann–Werner, Maximum a posteriori testing in statistical inverse problems, §1.1, PDF pp. 1–2: https://arxiv.org/pdf/2402.00686. The full paper's indexed-functional formulation and path-space caveat support the model interface.
- Giné–Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §1.2.2, equations (1.6)–(1.8), PDF pp. 21–22; isonormal construction, PDF pp. 483–484: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf. This book gives the functional model, basis coordinates, and sequence sample-space qualification.
- Castillo–Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, §1.2, Definition 2 and equations (7)–(8), printed pp. 2004–2006, and §3 coordinate model: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf.
- Ding–Mathé, Minimax rates for statistical inverse problems under general source conditions, §1, equations (1)–(3), PDF pp. 11–12: https://arxiv.org/pdf/1707.01706. Its model assumes a compact linear operator and the sequence equivalence includes an orthogonality-to-kernel condition; neither is imported into the local representation theorem.

The IP-07 design says “Ding–Mathé §2,” but the cited paper's §2 begins the proof of its minimax theorem. Its statistical inverse model and SVD sequence equations are in §1, equations (1)–(3). The batch uses that exact model locator and retains the design's intended source; the minimax theorem is not used as a proof supplier.

## Scoped checks and readiness

Source full-text inspection is recorded above. `node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-7.coverage.json --stamp` stamped all 4/4 sources; the subsequent check-only invocation verified 4/4 fetch stamps and resolved 4/4 entries with no documented drops.

Final scoped checks after the theorem's coordinate diagram was added:

- `node tools/proof-layout.mjs` on the five assigned items: 5 items, 12 proof steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts` on the five assigned items: four proof-bearing items passed; the definition was correctly reported not applicable; 0 failures.
- `node tools/rendercheck.mjs` on all five items and both A/B pages: 7 files, 0 errors, 0 warnings. The diagram is outside the proof section; the proof remains independent of it.
- `node tools/content-policy.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-7.pages.json --json`: scope 5, 0 errors, 0 warnings.
- Focused `node tools/depcheck.mjs --items-file /tmp/inverse-run-batch-7-items.json --json`: five item checks, two page checks, 927 dependency-closure items and 168 dependency-closure pages, 0 errors, 0 warnings.
- Recomputed dependency levels directly from the completed batch manifest: definition 0, theorem 1, direct-functional example 1, coefficient-sequence example 2, finite-truncation example 2; 0 level or cycle errors.
- Strict proof-contract validation on all five assigned items: `ok: true`, 0 errors, 0 warnings. The prior statement-first audit passed for all five items, and both A/B page bodies are empty; the final edit did not change any statement or page.

Each item has a hash-bound Step 1 `ready` record with `owner: false`, examined dependencies, and evidence: `def-ip-isonormal-white-noise-experiment` (`f4acf413b22d67d0c6ea2b2b33b48a120c8fe984c0a178bb8c57124f40ab1e8a`); `thm-ip-white-noise-spectral-sequence-representation` (`45377793e2fad70fbd77d911bdb36ba052e8f670c11f503e6c3a6a6553df34b0`); `ex-ip-white-noise-direct-functionals` (`895f23e7caef8260d02935da1b550a3d3a61822e705134aa0a2548867714cc7f`); `ex-ip-white-noise-coefficient-sequence` (`e1d22a2710afbf2f544ebe54154b52e3f64f213323e724486d1b054749cbf05d`); and `ex-ip-white-noise-finite-truncation-tail` (`cf9babc3848155bc21b7f24bf4410230f94fd5a2ebc21ab100bedfdb19a73c92`). The dependent example records were refreshed after the theorem's final content hash changed. These are author readiness records, not independent approval.

The run-level `proof-contract-coverage` check could not close: it reported `proof-contract-coverage-input: Empty or invalid frontier page inventory minimax-testing-and-detection-rates`. That is another batch's empty manifest, outside this assignment. Batch 7's own strict contract check passed; no other pair's files were changed. The engine's `page_layout: compact-v1` update remains a native workflow transition; these authored A/B pages contain frontmatter only and no summaries.

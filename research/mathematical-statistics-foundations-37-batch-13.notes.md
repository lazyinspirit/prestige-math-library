# Batch 13 — Step 1 authoring record

Run: `mathematical-statistics-foundations-37`  
Role: beta  
Pair: `asymptotic-convergence-consistency-and-identification`  
Scheduling input: `4ac773619bf67b0bf9f2906a3e1587567c1ec3367e8bd46a1c3215d9e984e95e`

## Instruction and design resolution

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated batch task, `briefs/beta-scaffold.md`, the owner authoring direction, both cited plan locations, `research/plan-spec.json`, the assigned source dossier and the live run state. The owner direction makes `research/plan-mathematical-statistics-track.md` controlling for this pair. Its MSF-12 row at the plan's consistency/limiting-distributions table specifies the A-page scope, exact local proof obligations, and B examples. `research/plan-statistical-models-experiments-track.md` is a downstream interface that mentions only the reusable stochastic-order/vector-Slutsky supplier contract; it does not replace the broader MSF-12 consistency, asymptotic-distribution, nonidentifiability, and IID-mean claims. This is a scope difference, resolved by following the controlling MSF plan and retaining the downstream interface as an application boundary.

The two `plan-spec.json` rows agree with the assigned A/B IDs, category, companion relationship, reading order 1868/1869, titles, and page-level prerequisites. Their `items: []` arrays are the pre-authoring projection, so they do not override the controlling plan's item inventory. The page-level prerequisite `convex-and-semicontinuous-functions-on-rn` remains because the controlling plan requires it; no item-level proof in this pair uses a convexity or semicontinuity result.

The Foundations-03 dossier adds `ex-tightness-times-smallness-and-root-n-rate` to the B page. It is present in the final manifest and page. The run-local owner serialization resolution says the inherited batch-13 carrier work received formatting corrections only and identifies the missing `ex-nonidentifiable-targets-preclude-consistency` as native authoring scope. That B example is now authored. No cycle, cross-batch item change, capacity issue, or unresolved mathematical gap was found. The A page has 8 items and the B page 4, below the 100-item cap.

## Inventory, dependencies, and levels

The complete direct `deps` arrays are in `research/mathematical-statistics-foundations-37-batch-13.pages.json` and exactly match the item frontmatter. Levels are computed over all in-run suppliers, including prerequisite batch 1; out-of-run prerequisites do not raise the level. Suppliers are ordered before consumers on each page.

| Item | Level | Earlier in-run suppliers |
|---|---:|---|
| `def-asymptotic-distribution` | 0 | — |
| `def-op-and-little-op-stochastic-bounds` | 0 | — |
| `thm-vector-stochastic-order-calculus` | 1 | `def-op-and-little-op-stochastic-bounds` |
| `thm-vector-slutsky` | 2 | `thm-vector-stochastic-order-calculus` |
| `def-estimator-sequence-in-iid-experiments` | 3 | Batch 1 experiment, model, and estimand definitions |
| `def-consistency-in-probability` | 4 | `def-estimator-sequence-in-iid-experiments` |
| `thm-iid-sample-mean-consistency` | 5 | `def-consistency-in-probability`; batch 1 experiment, model, and estimand definitions |
| `thm-nonidentifiability-precludes-simultaneous-consistency` | 5 | `def-consistency-in-probability`; batch 1 experiment, model, estimand, observational-equivalence, and identifiability definitions |
| `ex-degenerate-asymptotic-distribution-with-rare-outliers` | 1 | `def-asymptotic-distribution` |
| `ex-tightness-times-smallness-and-root-n-rate` | 2 | `thm-vector-stochastic-order-calculus` |
| `ex-bernoulli-sample-mean-consistency` | 6 | `thm-iid-sample-mean-consistency`, `def-consistency-in-probability`; batch 1 experiment, model, and estimand definitions |
| `ex-nonidentifiable-targets-preclude-consistency` | 6 | `thm-nonidentifiability-precludes-simultaneous-consistency`; batch 1 experiment, model, estimand, observational-equivalence, and identifiability definitions |

The batch-13 cross-batch input file records 19 verified item edges plus the verified page edge to batch 1. The reviewed batch-1 suppliers were read in full at the relevant statement/proof, including the experiment, parametric-model, estimand, observational-equivalence, and identifiability definitions. No AC dependency is present. All 12 proof contracts declare `axioms_used: []`; the arguments use no choice principle.

## Proof and source decisions

- Stochastic-order calculus proves finite-dimensional tightness from closed-set Portmanteau and continuity from above, then proves the sum and bilinear rules directly from tail definitions and union bounds. Euclidean-ball, topology, and closed-set prerequisites are explicit.
- Vector Slutsky is proved with bounded-continuous test functions, tightness, uniform continuity on a compact set, and the continuous-mapping theorem. The scalar Slutsky item is only real-valued and is not used as a vector theorem.
- The IID sample-mean theorem states the finite first absolute moment hypothesis and applies the inspected Khinchin weak law. The change-of-variables step identifying the law integral with the model mean is explicit; measurability and finite-product sampling interfaces are declared.
- Nonidentifiability yields one equal-law pair with distinct targets. Equality of all finite product laws is proved on measurable rectangles and extended by the sigma-finite uniqueness supplier. Disjoint closed target balls then contradict simultaneous consistency. The contradiction strategy and its opener/discharge tags are explicit.
- The rare-outlier example proves convergence in probability and weak convergence to the point mass while computing each expectation. The tightness-times-smallness example verifies all finite-space probability axioms and the exact root-(n) identity. The Bernoulli example derives its Chebyshev bound, handles (p=0,1), and gives a finite (n=2,p=1/2) check. The redundant Bernoulli parameterization checks equal sampling laws and distinct target values at the selected pair.

Each A and B page has six full-text sources and the coverage file lists every source locator, supported item/result, and disposition. Independent treatments include:

- Bartlett, *Theoretical Statistics*, Stat 210B Lectures 15–16: [Lecture 15](https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/15notes.pdf), §§1–3, pp. 1–3, estimator context; [Lecture 16](https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf), §§9–11, pp. 9–11, stochastic-order/Slutsky route and the tightness-times-smallness example.
- Duchi, *Theory of Statistics*, Stats 300B Lectures 2–3: [Lecture 2](https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-02.pdf), Theorem 1 part 2, printed p. 1, vector Slutsky; [Lecture 3](https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-03.pdf), Definition 0.1, printed p. 4, equality-of-laws context for identifiability. The live PDFs' title pages identify Winter 2018. The Foundations-03 dossier's `/2018/` Stanford routes were browser-inaccessible during this authoring pass; the `/2021/` routes supplied complete lecture PDFs. For Lectures 2 and 3, downloaded byte lengths and SHA-256 prefixes match the dossier's cached full-text acquisitions, so these are the same source bytes, not substitute mathematical claims. No source was dropped.
- Varadhan, *Probability Theory*, Ch. 3 §3.2, Theorem 3.3, pp. 56–57, and Durrett, *Probability: Theory and Examples*, 5th ed., Ch. 2 §2.2, Theorem 2.2.14, p. 65: independent textbook proofs of the finite-first-moment IID weak law.

The source dossier's retrieval history was reused; no failed native full-text fetch remained for these 12 recorded source entries. `source-fetch-check --stamp` previously verified the 12 coverage entries, and the final check-mode run again reported 12/12 fetch-verified. There were no unresolved source drops or owner escalations, so no `source_resolution` failure record was added. The source-catalog provenance above records the known Stanford route change without inventing a search query or failed-response timestamp.

## Checks and readiness

Final scoped checks after proof and dependency-header edits:

- `precheck.mts` on 8 proof-bearing items: 8 checked, 0 failures.
- `proof-layout.mjs` on the explicitly changed proof-bearing items: 8 items, 31 steps, 0 defects.
- `proof-contract.mjs --strict`: 12 items, 0 errors, 0 warnings; all proof/verification steps, fact uses, and boundary references map to the final proofs.
- `coverage-checklist --require-destination`: 2 pages, 12 harvested results, 0 errors, 0 warnings.
- `source-fetch-check` check mode: 12/12 source entries fetch-verified; 0 documented drops.
- `content-policy`: 12 assigned items, 0 errors, 0 warnings. `manifest-deps`: 12 items, 0 missing dependency arrays.
- Focused `depcheck`: assigned items and pages passed; 664-item/135-page prerequisite closure, no dependency/page-cycle errors or warnings. Scoped dependency-level graph over batches 1 and 13: 21 items, all 12 assigned carriers match manifest dependencies/levels, no cycle or level error. Batch-13 levels are the table above.
- `rendercheck` on the 12 assigned items and two pages: 14 files, 0 errors, 0 warnings.
- The full-run `item-dependency-levels.mjs check --run mathematical-statistics-foundations-37` remains blocked by 60 unrelated later A/B manifests with empty scaffold inventories. The assigned batch-1+13 graph passes; those other manifests were left untouched.

The 12 Step-1 readiness records are recorded as `ready` with their exact manifest dependencies and the examined supplier evidence. These records document authoring completeness only; they are not independent mathematical approval.

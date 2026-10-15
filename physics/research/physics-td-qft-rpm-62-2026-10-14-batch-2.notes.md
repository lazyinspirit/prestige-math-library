# Batch 2 notes — Entropy Foundation

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: beta, batch 2  
Owned pair: `td-entropy-foundation` / `td-entropy-foundation-examples`

## Scope, plan comparison, and placement

The binding owner direction was read before authoring. The live plan and `plan-spec.json` agree on A/B page IDs, orders 265/266, title, thermodynamics category, physics library, and the A-page prerequisite `td-thermodynamic-framework`. The plan's empty item array is its pre-authoring state; it is not a content conflict. The A page contains the six reserved items plus the locally required `def-td-isolated-compound-feasible-set`; the B page contains three examples. Counts are 7/20 reserved A items and 3/10 reserved B items, both under the hard 100-item cap. The additional definition is local to A and supplies the feasible-set interface used by the maximum postulate and both examples.

The pair is batch dependency level 1, requiring batch 1. A fresh current-manifest recomputation gives the same level and `requires: [1]`. Recomputed item levels are:

| Item | Level |
| --- | ---: |
| `def-td-reversible-process` | 4 |
| `def-td-thermal-contact-constraints` | 4 |
| `post-td-concave-fundamental-entropy` | 4 |
| `def-td-isolated-compound-feasible-set` | 5 |
| `post-td-entropy-maximum` | 6 |
| `post-td-macroscopic-second-law` | 5 |
| `post-td-zeroth-law` | 5 |
| `ex-td-irreversible-adiabatic-compression` | 5 |
| `ex-td-noncompact-entropy-supremum-not-attained` | 7 |
| `ex-td-local-entropy-maximum-below-global` | 7 |

There is no conflict between the current design and plan metadata. One source-locator ambiguity is recorded below.

## Prerequisites and interface review

All direct mathematical and physical suppliers were inspected at their current statement and, where proof-bearing, their relevant proof. The current batch-1 framework carriers are drafts, not independent approvals. The consumers use the actual interfaces: dimensionless SI state coordinates with dimensioned `U_c,V_c,n_c` maps; typed process records and `Q`/`W_on` signs; the isolated-compound boundary and declared feasible subsets; bulk composition with dimensioned totals; and the adopted first-law balance. The current statements cover every recorded use, including the new examples' admitted separated pairs and fixed total-energy partitions. The exact cross-batch item edges and evidence are in `batch-2.cross-batch-dependencies.json`; four new rows record each example's dependence on `def-td-equilibrium-state-domain` and `post-td-bulk-additivity`.

The imported mathematical prerequisites were read and left unchanged. In particular, the noncompactness argument uses the Archimedean theorem, the finite-list maximum lemma, and the Euclidean norm definition and norm/metric theorem; it proves the open-cover claim directly and does not assume a compactness or attainment theorem. Both entropy examples specify positive one-species coordinate domains, units, admitted pairs, an isolated outer boundary, fixed totals, smooth concave entropies, and their tagged-copy constitutive laws. They are conditional model calculations, not experimental evidence.

I also inspected `owner-escalations/td8-tagged-homogeneity/repair-proposal-round-1.md` and its `observed-round-1.json`. That file explicitly describes an unapplied proposal, not an owner decision or approval. It documents that the general tagged relation does not identify distinct material tags and therefore does not imply same-tag homogeneity. These two examples do not make that inference: they explicitly assign the same linear law to each distinct scaled tag as part of each toy model and verify the tagged relation by substitution. They do not require the proposed `post-td-common-bulk-constitutive-law` carrier, and no owner escalation or cross-batch edit was added for this pair.

## Source reading, harvest, and recovery history

Three independent full-text treatments were inspected for the A-page scope, including a monograph and complete lecture notes:

- Lieb and Yngvason, *The Physics and Mathematics of the Second Law of Thermodynamics*, [arXiv v2 PDF](https://arxiv.org/pdf/cond-mat/9708200v2): full text, including Introduction §I.A on postulated versus derived entropy, §II.F/Theorem 2.8 and its hypotheses/proof, and §IV.A/T3 on thermal-contact equivalence.
- David Tong, *Statistical Physics*, [author-hosted complete Chapter 4 PDF](https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf) and its author-hosted Chapter 4 HTML: §§4.1, 4.3, 4.3.1–4.3.4, and relevant §4.4 passages.
- Daniel Arovas, *Lecture Notes on Thermodynamics and Statistical Mechanics*, [complete 607-page lecture-note PDF](https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf): §§2.2, 2.5–2.6, and 2.9, including contact, reversible/second-law qualifications, ideal-gas entropy, and constrained entropy maxima.

The coverage file records every harvested heading/result, its item support and disposition; all 22 harvested results are disposed. The original Tong full-notes PDF URL `https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf` failed its initial fetch verification and five recovery retries because `mutool` could not verify its compressed page tree. The official course page and alternatives were searched; the author-hosted full Chapter 4 PDF and HTML were inspected and the 27-page PDF stamped. The old URL is recorded as a certain drop in `source_resolution`; no claim or item was dropped. Final `source-fetch-check` reports 3/4 active sources fetch-verified and 4/4 resolved, with the one documented drop.

The baseline prose scaffold locates Lieb–Yngvason §II.F at pp. 33–35; the inspected reader ledger lists the concavity subsection at pp. 30–32 and the v2 contents place §II.F at printed p. 30. These may point to different passages inside §II.F. Coverage therefore identifies §II.F, Theorem 2.8, and its full proof rather than relying on the ambiguous page range.

## Validation and readiness

Final scoped results:

- `proof-layout.mjs`: 10 assigned items, 8 proof steps, 0 defects. The application renderer's `@/` alias was enabled for this check by a temporary loader under `/private/tmp`; no shared tooling or app files were changed.
- Physics precheck: 10 files, 7 proof-bearing/nonproof items checked, 0 failures; three definitions were not applicable.
- `rendercheck`: 12 changed item/page files, 0 errors and 0 warnings.
- Manifest-only authored policy and full content policy: 10 items each, 0 errors and 0 warnings.
- `coverage-checklist`: 22 harvested results, 0 errors and 0 warnings.
- Strict proof-contract validation: all 10 scoped item contracts, 0 errors and 0 warnings.
- Focused `depcheck`: 10 assigned items and their prerequisite closures, 0 errors and 0 warnings. Focused `fwdcheck`: 0 open forward references and 0 errors; 10 inherited later-material markers remain. Focused `extcheck`: 10 assigned items, 0 errors and 0 warnings.
- Current item-level recomputation matches all ten levels above with no errors naming this batch. The latest current-manifest full-run item-level recomputation reports 80 issues elsewhere, including empty scaffold inventories, batch 42 string-valued item entries, and unrelated level-label mismatches; none name this batch.

`batch-dependency-levels.mjs check --run` previously reported the stored whole-run graph as stale. Its latest recomputation now aborts with `Duplicate item undefined` on the malformed batch-42 item rows described below. The last successful full recomputation placed batch 2 at level 1; its current `requires: [1]` page edge and direct batch-1 item edges are unchanged. The shared graph is left untouched for the owner's drained join and should be recomputed after batch 42 is repaired. `proof-contract-coverage` cannot close the full run because `td-cycles-and-low-temperature` still has an empty frontier inventory.

All ten items have `ready` Step-1 decision records with `owner: false`, direct dependencies, current hashes, page placement, levels, and the scoped evidence above. The live full-run Step-1 loader is currently blocked by another batch's malformed `research/physics-td-qft-rpm-62-2026-10-14-batch-42.pages.json`: its `qft-mf03` and `qft-mf03-examples` item arrays contain bare ID strings, so the loader raises `Duplicate item undefined` before checking any record. The two example records were refreshed by the mandated CLI against an isolated snapshot containing the unchanged current batch-1 and batch-2 manifests and all current item files; their per-item hash checks pass there. No batch-42 files were edited. The full-run Step-1 check must be rerun after that manifest is repaired; this is separate from the ten assigned inputs and their readiness.

These records document initial authoring and input availability only. They are not independent proof approval or a run-wide closeout.

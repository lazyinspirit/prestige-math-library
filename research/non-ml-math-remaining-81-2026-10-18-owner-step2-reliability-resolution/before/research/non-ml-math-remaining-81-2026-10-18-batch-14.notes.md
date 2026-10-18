# Batch 14 authoring notes — finite-blocklength bounds and reliability

Run `non-ml-math-remaining-81-2026-10-18`, beta batch 14. The assigned pair is `finite-blocklength-and-reliability` and its examples page. Only its draft carriers, pages and batch evidence were edited.

## Controlling scope and design reconciliation

No pair-specific design section was found. IT09 in `research/plan-information-theory-track.md` controls. It limits the theorem page to finite unconstrained DMCs with no feedback or cost claim; defines one-shot DT and meta-converse bounds; and limits normal approximation to fixed $0<\epsilon<1/2$ and $V_{\min}>0$. The proof route uses output-support/KKT variance identities, the finite KL/Pinsker and affine-slice gap, a uniform type converse, Berry–Esseen and quantile inversion. Average and maximal error remain distinct, with explicit expurgation costs. No exact general low-rate reliability formula, zero-dispersion case, $\epsilon\ge1/2$ case, or cost/feedback result is asserted. No design conflict remains to record.

The added local scaffolding is `def-it-one-letter-gallager-exponent-functions`, `lem-it-gallager-input-maxima-attained`, and `lem-it-dmc-mutual-information-concave-in-input`. The maxima lemma proves compactness, continuity at zero powers, strict positivity of the logarithm arguments, and attainment before the aggregate exponent definition uses maxima. The mutual-information concavity lemma supplies the constant-composition Fano bound in the sphere-packing proof.

## Inventory and ordering

The A page has 21 items and the B page has 3 examples/counterexamples, below the 100-item page cap. The batch-14 manifest and A-page frontmatter list A items in computed item-level order. The assigned levels are 0, 3, 4, 5, 6, 7, 8 and 9; all 24 assigned item labels match a scoped recomputation over the 54 current-run items in their transitive dependency closure, with no cycle.

The dispatch assigns batch dependency level 5 with prerequisite batch 13. The shared `batch-dependency-levels.json` snapshot records input hash `5b660437ff2af54b535a540c160e388767c35cc9176ba0f032f335e8f61d5bfe`; the dispatch supplied scheduling input `7a9fa4f6679cc609bc74726b2966968d37d329c88f8f50bc6aa0a413dcaa3`. They differ. The batch artifact lists batch 14 as level 5 requiring batch 13. The authored item graph also has 87 direct edges to batches 4, 7 and 12 (16, 12 and 59 edges); those are upstream of batch 13 through the declared information-theory track. No shared scheduling artifact was changed.

## Prerequisite evidence

- The required cost/Gaussian/feedback A/B pair is present as a draft. Its A page and batch-13 manifest list 25 A items and 4 B examples. Current `step1Decision` hash checks report all 29 records ready. I inspected the actual page statement and inventory, not every cost-pair proof. The IT09 claims here do not consume cost, Gaussian-capacity or feedback conclusions. The upstream records document author readiness and are not independent mathematical approval or publication.
- The required concentration page is published and contains eight items. Their statements and proofs were inspected. They supply tail/concentration results, not Berry–Esseen; the finite-array Berry–Esseen theorem is proved locally and then used in the normal-approximation argument.
- The 87 direct cross-batch item edges name exact supplier IDs and quote actual supplier sections in `batch-14.cross-batch-dependencies.json`. The 18 run-owned direct suppliers have current ready records; 31 published legacy dependencies have no run-specific Step 1 record. Their actual definitions/statements and relevant proofs were inspected for the hypotheses used here. The edge evidence records interface consistency, not independent acceptance.

## Sources

The coverage file records all source locators, supported items, dispositions and fetch stamps. The A page uses eight full-text sources, including two independent book/paper treatments (Polyanskiy–Wu and Polyanskiy–Poor–Verdú), plus full lecture notes; the B page uses three sources. The complete relevant arguments were read in the full texts: MIT 6.441 Lectures 11–12; the cited PPV and Hayashi sections; Vershynin Part II §§6–11; the P/W chapters listed in coverage; Gray Chapter 2 §2.5 and the complete Pinsker Lemma 5.2.8 proof; and Bertsekas Lecture 6, pp. 32–33. All 11 coverage entries were fetch-verified.

One exploratory scanned PDF, retained at `/tmp/pml-gallager-notes5.pdf`, yielded no extractable text. It was not added as a source and supports no claim. Readable MIT 6.441 Lecture 11 and Lecture 12 full texts were already available and fully read, so the source search stopped after those alternatives succeeded. No cited source was dropped; no `source_resolution` drop record is applicable.

## Checks and remaining run-level blockers

- Scoped precheck: 24 files, 20 proof-bearing items, 0 failures.
- `node tools/proof-layout.mjs` on all 24 changed items: 24 items, 93 steps, 0 defects.
- `rendercheck`: 26 item/page files, all frontmatter and math parsed, 0 defects.
- `content-policy` on the batch manifest: 24 items, 0 errors and 0 warnings.
- Scoped `depcheck` on the 24 IDs: 0 errors, 0 warnings; the transitive cycle scan covered 994 items and 441 pages.
- `proof-contract.mjs --strict`: all 24 entries checked, 0 errors and 0 warnings. Citation fidelity checked 149 exact excerpts with no missing quotes or widening candidates.
- `source-fetch-check`: 11/11 fetched and stamped.
- `step1-decisions record`: 24 assigned items are `ready` and hash-valid; 23 records were written and the previously present record was preserved. A filtered check found no open rows on either assigned page.
- The repository-wide item-level check reports 69 errors on other work: the empty `relay-and-interference-channel-bounds-examples` inventory, 15 stale recorded levels in batch-12 DMC items, and 39 items in other batches without valid level labels. None of the 24 batch-14 item IDs appears in those errors; the scoped closure calculation above matches all assigned labels.
- `proof-contract-coverage` is blocked by the same empty relay/examples inventory. `batch-dependency-levels check` is blocked by six malformed frontmatters in batch 19: `lem-finite-joint-iid-strong-typicality`, `lem-finite-conditional-codebook-covering`, `lem-finite-conditional-typicality-packing`, `lem-finite-conditional-channel-mutual-information-concave-input-law`, `thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap`, and `lem-real-gaussian-multiple-access-random-coding-region`. Their `sources.references` titles use an unquoted colon. They are outside this assignment and were not edited.
- The full-run Step 1 check reports 1,572 items with 1,278 ready and remains open on 295 unrelated item/page rows. It reports no open row for either batch-14 page.
- The active autopilot status remains `running`, with stage 1-scaffold showing 78/81 and no in-flight writer; it still lists batch 14, 19 and 78 as uncovered and reports its stored plan-parser error. This status has not consumed the batch-14 handoff. No control or transition command was issued and no `.autopilot` file was edited directly.

These completion records establish author readiness and mechanical checks only; they are not independent review or owner approval.

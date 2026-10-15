# Batch 55 authoring notes — BY arbitrary dependence and BH PRDS

Run: `statistical-models-experiments-62` · batch: `55` · role: beta · pair: `fdr-control-under-dependence` / `fdr-control-under-dependence-examples`.

## Inventory and dependency order

The batch-55 manifest contains seven A-page items and two B-page items. The batch scheduling level is 2, with prerequisite batches 52 and 54; the supplied scheduling input hash is `f44a63775dd68759c41c2fbc1304c8cc5f627d9d0d84ffaf1aa0227b5b330879`. The item dependency levels count suppliers anywhere in this run. Published dependencies do not raise an item level.

| Level | Items |
|---:|---|
| 0 | `alg-benjamini-yekutieli-step-up-procedure`; `lem-unit-interval-is-standard-borel`; `lem-step-up-leave-one-out-rejection-partition` |
| 1 | `def-prds-on-true-null-coordinates`; `thm-by-fdr-control-under-arbitrary-dependence` |
| 2 | `lem-bh-prds-null-contribution-bound`; `cex-pairwise-positive-correlation-does-not-imply-prds` |
| 3 | `thm-bh-fdr-control-under-prds` |
| 4 | `ex-by-bh-threshold-comparison-under-independent-null-pvalues` |

Suppliers precede consumers: the choice-free unit-interval standard-Borel lemma and generic leave-one-coordinate partition are level 0; the PRDS definition and BY control are level 1; the single-null PRDS bound and covariance counterexample are level 2; total PRDS control is level 3; the worked threshold comparison is level 4. The PRDS definition depends on the local interval lemma; the higher labels reflect this additional in-run edge. The item inventory, direct dependencies, labels, and cross-batch interfaces are recorded in `statistical-models-experiments-62-batch-55.pages.json` and `statistical-models-experiments-62-batch-55.cross-batch-dependencies.json`.

## Plan and design reconciliation

The current SME-55 section of `research/plan-statistical-models-experiments-track.md` and the A/B rows at orders 2026–2027 in `research/plan-spec.json` agree on page IDs, titles, order, category, and declared prerequisites. No plan/plan-spec conflict was found. The plan says “increasing measurable” sets; the PRDS definition explicitly takes the Borel sigma-algebra on `[0,1]^m`, which is the relevant measurable structure on this standard-Borel target.

The plan's mathematical scope is preserved: BY controls FDR for marginally valid p-values under arbitrary dependence; ordinary BH has the separate PRDS-on-true-nulls guarantee; positive pairwise covariance is insufficient; and there is no blanket PRDS guarantee for two-sided Gaussian tests. The B page first gives the covariance/PRDS counterexample and then the independent discrete threshold comparison, matching its listed item order.

A direct marginal-cutoff shortcut in the earlier proof sketch needs correction. With `t=q/(mH_m)`, substituting only `P(p_i<=kt)<=kt` into the rejection-count weighted sum yields `sum_k (1/k)(kt)=mt=q/H_m`, not the required `q/m` for one null. Also, for a discrete superuniform p-value an individual interval `((j-1)t,jt]` may have mass greater than `t`. The authored BY proof instead uses the generic rejection partition, bounds each interval contribution by its probability divided by its index, and applies finite CDF summation by parts to obtain `tH_m=q/m`. This proves the unchanged theorem for discrete as well as continuous superuniform null p-values, without any dependence premise. The theorem Remarks and cross-batch reconciliation record this exact issue and replacement argument; the shared plan was not edited.

The source's PRDS folding route is expanded locally rather than cited in place of a proof: the leave-one-coordinate sets are proved to partition the remaining space, their cumulative unions are increasing Borel sets, conditional probabilities are expressed by an RCD kernel, and averages over nested lower tails are compared before the finite induction. The proof contract maps every numbered step and exact linked excerpt.

## Supplier inspection and unresolved interfaces

The actual SME-52 item `def-null-valid-p-value-and-fwer-fdr` is present in its batch manifest; its body and definition were inspected, and its current Step 1 record says `ready`. It supplies the fixed finite family, true-null index set, validity convention, and FDP/FWER/FDR definitions used here. This records authoring-interface availability only; it does not claim publication or independent approval.

The actual SME-54 `alg-benjamini-hochberg-step-up-procedure` body was inspected; its current Step 1 record says `ready`. The complete `thm-benjamini-hochberg-independent-fdr` body/proof was also inspected, and its current owner readiness record was observed. Its mutual-independence and exact-uniformity hypotheses are not premises of the PRDS theorem. The local PRDS proof uses the actual BH algorithm and the separately proved conditional-monotonicity lemma. No SME-52 or SME-54 item supplier ID remains unavailable at this handoff; both source batches remain draft pipeline material unless/ until published.

The current published MSF-08 `def-p-value` and `thm-p-value-superuniformity` bodies were read, including the complete superuniformity proof. The RCD interfaces inspected were `def-conditional-law-given-a-random-element`, `lem-finite-products-of-standard-borel-spaces-are-standard-borel`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, and `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`; the theorem/factorization proofs and the finite-product proof were read in full. The new `lem-unit-interval-is-standard-borel` proves the exact value-space premise locally: the inherited absolute-value metric is complete and separable, the endpoint cases establish closedness and density, and the subspace trace theorem identifies the Borel structure. Its metric, order, completeness, rational-density/countability, trace, Polish, and standard-Borel supplier statements were inspected, with the real-completeness, rational-density/countability, subspace-trace, ordered-field, and interval-neighborhood proofs read in full. This lemma and the finite-product theorem are choice-free; AC is separately used for regular-conditional-law existence in the PRDS definition. The BY theorem and generic finite partition proof are choice-free. The PRDS single-null and total-FDR theorems declare AC only through the standard-Borel conditional-law interface. The finite counterexample and discrete example construct or force finite conditional probabilities directly; their exact proof steps do not add a choice selection. The example declares the AC interface only when applying the general PRDS theorem.

The source crosswalk is in `statistical-models-experiments-62-batch-55.cross-batch-dependencies.json`. It records the exact required pages and supplier IDs, which item claims use each supplier, the SME-54 non-use boundary, and the AC branch.

## Source reading and dispositions

The A-page source coverage is `statistical-models-experiments-62-batch-55.coverage.json`.

- Benjamini–Yekutieli (2001), the primary paper: inspected the PRDS definition/distinctions, the complete Theorem 1.2/Section 4 proof, and the complete Theorem 1.3/Section 5 harmonic argument, plus the two-sided and pairwise-comparison caveats. The fetch checker could not retrieve the author-uploaded ResearchGate copy (HTTP 403 on the initial request and all five retries); the legacy Project Euclid endpoint had already returned an 81–83 character HTML wrapper on its initial request and five retries, reused from batch 54. DOI/title/university/author-hosted alternative searches are recorded. A found MIT PDF endpoint returned 404; the metadata-only Scinovex page redirects to Project Euclid. The source-resolution record drops those failed endpoints only. Every result they supported has a complete local proof or an explicit local procedure definition and dependency list.
- Katsevich, STAT 9610 full 146-page lecture notes: fetched and inspected Chapter 6.3.2, PDF pp. 136–139, including the complete BY derivation and PRDS theorem context. Its interval-mass argument is cited only within its exact-uniform scope; the local BY proof supplies the discrete-superuniform extension.
- Benjamini, full 75-slide Louvain lecture: fetched and inspected the step-up correction, PRDS definition/proof sketch, and the two-sided/pairwise caveat. The slide sketch is a route cross-check, not a replacement for the expanded local PRDS proof.
- Marker, full 105-page *Descriptive Set Theory* course notes: inspected §1 Definition 1.1 and the example listing `[0,1]` as Polish (PDF p. 2), and §2 Definition 2.2 for Borel and standard-Borel spaces (PDF p. 14). The new interval lemma supplies the complete local verification; Marker is an independent full-lecture cross-check.

The primary paper's fetch failure is not represented as a verified fetch. The coverage keeps its URL, attempts, searches, dispositions, and per-item alternative arguments/dependencies. The Katsevich and Marker lecture-note PDFs and the Louvain slide deck have actual fetch stamps. No source drop waives mathematical coverage.

## Scoped checks and readiness

The final scoped run after all item, page, manifest, contract and coverage edits produced:

| Check | Result |
|---|---|
| `manifest-deps` | Pass: all 9 manifest items have explicit dependency arrays. |
| Scoped `item-dependency-levels` over batch 52/54/55 | Pass: no cycles or label mismatches; batch-55 levels are 0, 0, 0, 1, 1, 2, 2, 3, 4 as listed above. |
| `content-policy` | Pass: 9 items, 0 errors or warnings. |
| Focused `depcheck --items-file` | Pass: 552-item dependency closure and 291 prerequisite pages, 0 errors or warnings. |
| Focused `fwdcheck --items-file` | Pass: 0 open/closed forward references and 0 errors or warnings. Six scoped items inherit a forward-dependent classification from their prerequisite closure; no undeclared forward reference is open. |
| Focused `extcheck --items-file` | Pass: 9 items, 0 unresolved suppliers and 0 errors or warnings. |
| `proof-contract --strict` | Pass: all 7 proof-bearing items, 0 errors or warnings. Contracts include exact source excerpts, every numbered step, inputs, boundary worksheets, and AC uses. |
| `precheck` | Pass: all 7 proof-bearing items. Their frontmatter records `verification.precheck: pass`; definitions/algorithm are not applicable. |
| `proof-layout` | Pass: 9 changed item files, 26 numbered proof steps, 0 defects. |
| `rendercheck` | Pass: 11 item/page carriers; all math parses and all frontmatter parses. |
| `source-fetch-check --stamp`, then check mode | Pass with a documented drop: 3/4 URLs fetch-verified and 4/4 source records resolved. BY01's ResearchGate/Project Euclid endpoints remain a documented drop; Katsevich, Louvain and Marker have fetch stamps. |
| `coverage-checklist --require-destination` | 1 A page, 14 harvested results, 0 errors, 1 low-yield warning: 5/14 results scaffolded as standalone items. The remaining results have explicit inline dispositions and reasons; Alpha should review that coverage warning. |
| Page/manifest/frontmatter synchronization and cap | Pass: all 9 item records match their files, A/B inventories match the two pages, and page sizes are 7 and 2 (cap 100). |
| Cross-batch dependency-input consistency | Pass: all 9 recorded item levels match the current batch-55 manifest and all in-batch edges are present. The dispatch scheduling hash and batch level 2 are preserved. |

The proof contracts leave `finite_checks` empty because no registered finite-smoke check applies. The finite covariance, CDF, product-law, and threshold calculations are proved directly in the counterexample and example steps; no check result is invented.

All nine Step 1 records are `ready` and their hashes revalidate against the current item/dependency bytes. They are authoring-readiness records only; they do not constitute independent mathematical approval. The corrected BY route is called out for owner reconciliation in the cross-batch evidence.

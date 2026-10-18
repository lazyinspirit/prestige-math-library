# Batch 25 authoring notes — stable special-function recurrences and certified evaluation

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: beta  
Pair: `stable-special-function-recurrences-and-certified-evaluation` / `stable-special-function-recurrences-and-certified-evaluation-examples`  
Date: 2026-10-17

## Inventory and dependency order

The batch contains 41 A-page items and 6 B-page examples (47 total). The manifest dependencies were synchronized from each item's final frontmatter and recomputed as an in-run DAG. All labels match; maximum item dependency level is 8. Suppliers precede consumers within each A/B page. The pair has no prerequisite batch: the current batch-level row is level 0 with `requires: []`, so `batch-25.cross-batch-dependencies.json` is empty.

The A page retains the required context pages `composite-quadrature-rules`, `gaussian-quadrature`, and `the-gamma-function`. The current repaired PC-SFUN audit also requires VAL-INTERVAL, so the manifest includes `outward-rounded-interval-and-ball-arithmetic`. All four pages are published. The actual item-level interval interfaces inspected are `def-outward-rounded-interval-and-ball-operations`, `thm-outward-rounded-operations-are-isotone-and-dag-sound`, `thm-real-elementary-range-enclosures`, and `thm-complex-elementary-range-enclosures`, together with the directed-dyadic format and range-reduction items. Composite midpoint error bounds are proved locally; the Gaussian-quadrature page is required context and supplies no hidden premise to these evaluators.

There are 39 distinct out-of-run item suppliers in the final direct dependency set. Their current statements and proof routes were inspected, and the scoped dependency check resolves their transitive dependency closure with no missing items or cycles. The authoring uses no Choice principle. Branch domains, interval statuses, scaling, finite caps, and the no-terminal-index-convergence limitation are stated explicitly. The corrected Airy value `Bi(0)=1/(3^{1/6} Gamma(2/3))` agrees with DLMF §9.2, equation 9.2.5.

## Plan reconciliation

The repaired PC-SFUN contract in `plan-numerical-linear-track.md` and its linked `linear-audit.md` control over stale `plan-spec.json` wording:

- The stale `plan-spec.json` row says not to reauthor Gamma/Bessel definitions. The current PC-SFUN contract explicitly requires the integer-order J/I series interface and its locally proved recurrence, integral, and tail results. The new `def-integer-order-bessel-series` supplies that absent library interface; Euler's Gamma definition is reused, and the log-Gamma items define only the required continued branch.
- The stale row requests minimal/dominant asymptotic separation and inhomogeneous roundoff amplification. The repaired contract requires a finite two-solution Miller decomposition with a Casoratian-derived terminal-contamination identity and explicitly forbids claiming convergence as the terminal index grows. The algorithm uses outward interval propagation for arithmetic and returns inconclusive when its finite certificate does not close; no unsupported roundoff or terminal-limit claim is made.
- `plan-spec.json` lists only quadrature and Gamma page requirements. The repaired audit adds the VAL-INTERVAL supplier edge; the added interval page requirement is retained in the A-page manifest.
- The stale source locator names Temme's SIAM book with DOI `10.1002/9781118833050`. The SIAM DOI is `10.1137/1.9780898717822`. The book's full text was not retrieved. The failed publisher/CWI lookup history and successful alternative are recorded in `batch-25.coverage.json`; no book reading is claimed.

## Local mathematical repair and conventions

The published `thm-gamma-meromorphic-continuation` proof's step 2.1 identifies local formulas from agreement on the positive half-plane without stating the continuation argument. The assigned A page now supplies the needed check in `lem-gamma-functional-equation-meromorphic-extension`: it constructs the meromorphic formulas on nested half-planes and proves their overlap equality directly from the right-half-plane Gamma functional equation, then derives the functional equation away from the poles. This repairs the exact interface consumed by the shifted log-Gamma branch without changing the published item.

The finite Miller result is an exact identity for each admissible finite terminal index. Normalization and denominator intervals must exclude zero. Increasing the terminal index is not an error guarantee. Relative certification is reported only when the returned enclosure excludes zero. The scaled modified-Bessel output is `e^{-x} I_n(x)` for real `x >= 0`.

## Sources and retrieval

The coverage record has 24 full-text sources and 141 harvested results with dispositions: 23 exact DLMF section pages from the NIST Handbook of Mathematical Functions, plus the complete 101-page CWI author deposit of N. M. Temme's Acta Numerica survey. The Temme reading covers §2 (series expansions, printed pp. 3–14), §3 (numerical quadrature, pp. 15–43), §4 (recurrence relations, pp. 44–57, including Miller's algorithm), and §5 (uniform asymptotic expansions, pp. 58–77). The DLMF handbook and the Temme survey are independent treatments. New finite tail, midpoint, branch, and interval-enclosure claims are proved locally.

The stale book DOI did not resolve to a full book. Earlier publisher chapter retrievals returned cache-miss/403 responses and the alternate UJ mirror returned DNS/502. The CWI record's “Free Full Text” link redirected to SIAM and the reader rejected the redirect; direct CWI candidate URLs were inaccessible. Searches located and the author inspected the complete Temme Acta Numerica article instead. The NIST Handbook/DLMF sections and the full survey cover the mathematical scope, so no source is dropped from the final coverage and there are no documented drops. `source-fetch-check --stamp` verified all 24 final coverage URLs.

## Checks

- Batch-scoped dependency calculation: pass, 47 items, maximum level 8, all manifest labels match.
- `depcheck.mjs --items-file /tmp/numerical-analysis-remaining-71-batch25-items.json --quiet`: pass; selected items and their prerequisite cycle closure resolve.
- `precheck.mts` on the 47 assigned items: pass, 39 proof-bearing items checked, 0 failures; 8 definitions are not applicable.
- `proof-layout.mjs` on the 47 assigned items: pass, 113 steps, 0 defects.
- `rendercheck.mjs` on the 47 items and both assigned pages: pass, 49 files, 0 errors, 0 warnings.
- `proof-contract.mjs --strict`: pass, 47/47 entries, 0 errors, 0 warnings; 179 exact supplier citations, 113 mapped steps, and 32 recorded finite checks.
- `coverage-checklist.mjs`: pass, 1 A page, 141 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --stamp`, followed by check mode: pass, 24/24 full texts fetched and stamped, 0 drops.
- `content-policy.mjs` on the batch manifest: pass, 47 scoped items, 0 errors, 0 warnings.
- Full-run `item-dependency-levels.mjs check` still reports out-of-batch construction work: 59 empty page inventories and 13 stale item labels, with no cycles. The 13 stale labels are `alg-incremental-planar-delaunay-edge-flips`, `alg-incremental-three-dimensional-regular-cavity-repair`, `alg-randomized-history-dag-point-location`, `thm-incremental-planar-delaunay-correctness-and-termination`, `thm-three-dimensional-lower-hull-coverage-empty-sphere-and-termination`, `thm-randomized-history-dag-expected-location-cost`, `thm-three-dimensional-delaunay-output-size-quadratic`, `ex-cocircular-four-site-lexicographic-tie`, `ex-collinear-sites-lower-dimensional-output`, `ex-scattered-linear-interpolation-over-delaunay-cell`, `thm-gaussian-coulomb-hermite-recurrences-and-integral-formulas`, `ex-same-center-s-orbital-integrals`, and `ex-godunov-fv-captures-stationary-burgers-shock`. None belongs to batch 25.
- Full-run `batch-dependency-levels.mjs check` cannot parse the out-of-batch source item `items/lem-ewald-gaussian-poisson-periodization.md:20`: the double-quoted locator contains an invalid `\pi` YAML escape. It was not edited. The shared run-level scheduling record remains with the owner for recomputation after that input is repaired; its batch-25 row currently declares level 0 and no prerequisite batches.
- Readiness records: all 47 assigned items are recorded `ready`. The full-workspace CLI initially failed before item lookup with `Duplicate item undefined`: the run snapshot reads 14 string item IDs on batch 56 page `supg-and-residual-based-stabilized-finite-elements` as item objects. To complete batch 25 without editing that other batch, the official `step1-decisions.mjs record` command generated the remaining 11 records from a temporary snapshot containing every run batch except batch 56. Batch 25 has no prerequisite batches; an existing record's SHA-256 matched in the temporary snapshot, and the exact `step1Decision` hash check validated all 47 delivered records against that snapshot. The full-workspace readiness command remains blocked by batch 56's inventory shape.

Recorded readiness files document Step 1 completion only and do not represent independent mathematical approval.

## Owner-requested spherical continuation — current authoring

The historical inventory and check counts above describe the original batch-25 authoring, before the owner continuation. The current manifest has 46 A-page items and 6 B-page examples (52 total), below the 100-item A-page cap. It rehomes the same two existing symbolic IDs from batch 55 and adds exactly three new spherical-evaluation items. The batch-level dependency artifact still gives batch 25 level 0 with no prerequisite batches; the cross-batch dependency input remains empty. Current item levels are: radial-solution lemma 1, evaluation contract 1, evaluator algorithm 2, and soundness theorem 3. The other batch-25 item levels are unchanged.

The current owner direction supersedes the older PC-SFUN scope and `plan-spec.json` wording that omitted spherical evaluation. I retained the current manifest's additional `outward-rounded-interval-and-ball-arithmetic` page requirement; `plan-spec.json`'s corresponding PC-SFUN row still lists only quadrature and Gamma context. This is the existing VAL-INTERVAL repair, not a new logical batch edge. No other pair or shared plan was changed.

The moved radial lemma's current proof adds the actual real-parameter derivative, termwise power-series, compact-uniform-convergence, ratio-test, trigonometric, factorial, and zero-derivative suppliers. The proof keeps the original Statement and makes the lower derivative recurrence calculation, the factorial-series origin expansion, the finite-form asymptotic induction, and the Wronskian constant explicit. The item dependency list and its level reflect those suppliers.

The finite exponential-product cancellation in the enclosure theorem is proved directly by a factorial-denominator recurrence in phase 1.2. The research proposal also listed `lem-binomial-theorem-over-complex-numbers`; its current published proof, step 2.1, only instructs the reader to split and reindex finite sums and does not display that algebra. The authored theorem therefore does not depend on that item: it derives the exact special coefficient cancellation locally and records its full arithmetic. No published item was edited, and the theorem's current dependency list matches its actual proof.

For current source reading, I inspected NIST DLMF §§10.49(i), 10.51(i), and the spherical-function warning in §10.74(i). The DLMF gives terminating coefficient formulas and derivative recurrences; §10.74 warns of severe cancellation when the argument is not large relative to the squared order. I also opened the complete University of Toronto 2019–20 lecture-notes PDF and read §6.4, printed pp. 157–158. Its operator formula and (h_l^{(1)}=j_l+i n_l), with (n_0=-\cos(x)/x), confirm the outgoing base sign (h_0^{(1)}=-i e^{ix}/x). These sources support symbolic conventions; every new interval, Taylor-tail, cap, soundness, and convergence claim is proved in the local items. Original Capel and Kreuzer evidence remains attributed to batch 55.

One attempted alternative, the Berkeley 221B Bessel-notes PDF, returned an internal error in the browser reader. I searched for alternatives, found the full Toronto lecture notes above, inspected their relevant section successfully, and stopped source recovery there. The failed candidate is not a cited or required source; no listed source was dropped.

The theorem adds the published supplier `lem-geometric-sequence-null` to justify the exact limit $2^{-q}\to0$ used for the positive represented-point interface and outward-rounding widths. This is an external dependency, so the theorem remains at level 3. The proof also explicitly applies the real zero-derivative theorem to the real and imaginary parts of the complex Wronskian.

The represented-point contract expressly admits non-dyadic scattering arguments, including $kR$ and $\sqrt{k^2+V_0}R$, if callers propagate exact parameter enclosures with positivity and termination proofs. The current batch-55 radial-scattering theorem and square-well example were read as context and left untouched; their same-reviewer interval-composition follow-through remains outside batch 25 ownership. No exact scattering domain was narrowed.

## Current continuation checks and readiness

- `content-policy.mjs` on the current batch manifest: pass, 52 items, 0 errors, 0 warnings.
- `depcheck.mjs --items-file /tmp/numerical-analysis-remaining-71-batch25-items.json --quiet`: pass for all 52 selected items and their prerequisite cycle closure.
- `item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17`: pass, 1,421 items across 142 pages, maximum level 12. Current batch-25 item levels are unchanged: moved radial lemma 1, evaluation contract 1, evaluator algorithm 2, soundness theorem 3.
- `precheck.mts` on both proof-bearing changed carriers: pass, 2 checked, 0 failures. The 39 original proof-bearing batch-25 carriers were unchanged from the prior passing check.
- `proof-layout.mjs` on the four explicitly changed spherical items: pass, 14 steps, 0 defects.
- `rendercheck.mjs` on the four changed items and both A/B pages: pass, 6 files, 0 errors or warnings.
- `proof-contract.mjs --strict` on the current full batch contract: pass, 52 items, 0 errors or warnings. The four spherical item entries have exact supplier excerpts, matching fact-use maps, completed derivations, boundary cases, and applicable hand-checked finite calculations.
- `coverage-checklist.mjs`: pass, 1 A page, 162 harvested results, 0 errors or warnings. `source-fetch-check.mjs --stamp` and check mode: pass, 29/29 sources fetch-verified, 0 documented drops. `source-backing.mjs --require-verified`: pass, all 52 authored results remain backed.
- Five current Step-1 readiness records (`def-spherical-bessel-and-hankel-functions`, the radial lemma, evaluation contract, evaluator algorithm, and enclosure theorem) were written without `--owner`; the focused current-snapshot hash check confirms all five are closed. Readiness is author completion only and not independent approval.
- The run-wide readiness check before those five records were refreshed reported 1,268 of 1,421 items ready and open work elsewhere in the run. This batch's five records are now closed; the run-wide ledger is not claimed closed.
- `batch-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` reports the shared artifact is stale and requests recomputation. The current batch-25 dependency record still says level 0 with no prerequisite batches, and `batch-25.cross-batch-dependencies.json` remains `[]`. The owner owns shared run-level recomputation, so no shared dependency artifact was edited.

The A page now has 46 items, below its 100-item cap. All original batch-25 functions and six examples remain; the B page and batch-55 consumer files were not edited.

The exact downstream interface checks remain with the designated batch-55 reviewer after batch-25 drain. For `thm-volume-scattering-radial-partial-wave-boundary-problem`, verify the positive exterior argument $kR$ and first-derivative matching columns under the original $k,R>0$ hypotheses; its exact mode-reduction statement has no represented-number restriction. For `ex-radial-square-well-exact-partial-wave-matching`, verify the interval constructions for $kR$ and $\kappa R$ where $\kappa=\sqrt{k^2+V_0}$, from terminating positive parameter interfaces for $k,R,V_0>0$, including rational square-root bracketing, positivity, and termination. Keep the exact example's full domain and its existing $|D|\ge k>0$ denominator argument, and do not assert relative accuracy for a zero coefficient $B$. The proposed batch-55 integration proof was inspected as context; current batch-55 carriers, contracts, and readiness were not edited or certified here.

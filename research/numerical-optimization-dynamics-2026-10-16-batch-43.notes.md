# Batch 43 authoring notes — Clenshaw–Curtis and extrapolation quadrature

## Scope and controlling design

The assigned pair is `clenshaw-curtis-and-extrapolation-quadrature` and its B page, at orders 2370–2371. The current batch manifest assigns level 3 and prerequisite batches 4, 15, 19, and 20. The batch-dependency artifact's `input_sha256` is `199643678bed0f69c9cc3ffee610ee3a7afd6ba5ff86098716a90efdd782be58`; the assignment text separately supplies scheduling input `bbea1572b1a46f2c515fbb6183725e9fa01ec577ff3078beaea99ec975e8b229`. Those hashes differ. The actual batch-43 row in the checked dependency artifact still states level 3 with prerequisite batches 4, 15, 19, and 20. Shared scheduling inputs were not edited.

The current plan and `plan-spec.json` control the pair. The incorporated QUAD-EXTRAP prose in `linear-audit.md` has one mathematical discrepancy: it states the near-best error as $(1+\Lambda_n^L)E_n$ on $[-1,1]$ although the rule is $Q(f)=\int_{-1}^1 I_n^Lf$. Directly,
$$|\int_{-1}^1(f-I_n^Lf)|\le 2\|f-I_n^Lf\|_\infty\le2(1+\Lambda_n^L)E_n.$$
For $[a,b]$, affine normalization multiplies this bound by $d=(b-a)/2$, giving the plan-compatible $(b-a)(1+\Lambda_n^L)E_n$. The A theorem and page use that corrected factor and explain the source of the missing factor 2.

The dependency design also requires the composite-quadrature page. Its composite-trapezoid definition and error theorem are already published and are the actual direct item dependencies used here. No draft item from batch 20 is a logical premise. The page-level requirement remains as assigned and is recorded as context in the cross-batch evidence.

## Inventory and item dependency levels

Exact direct `deps` are in `numerical-optimization-dynamics-2026-10-16-batch-43.pages.json` and match item frontmatter. Levels were recalculated over all items in the current run; only dependencies whose item IDs occur in a run manifest raise a level.

| Level | Items |
|---:|---|
| 0 | `alg-na-romberg-trapezoid-table`; `def-na-bernoulli-polynomials`; `def-na-clenshaw-curtis-dct-i`; `def-na-closed-newton-cotes-eight-panel-rule`; `def-na-peano-kernel`; `lem-na-chebyshev-degree-bound-from-recurrence`; `lem-na-chebyshev-recurrence-angle-identity` |
| 1 | `lem-na-bernoulli-polynomial-identities`; `lem-na-chebyshev-integral-moments`; `lem-na-clenshaw-curtis-dct-i-orthogonality`; `thm-na-peano-kernel-remainder-and-bound` |
| 2 | `thm-na-euler-maclaurin-composite-trapezoid-remainder` |
| 3 | `cor-na-composite-trapezoid-even-power-expansion` |
| 4 | `lem-na-closed-newton-cotes-eight-panel-weights-and-exactness`; `thm-na-romberg-even-power-cancellation` |
| 5 | `thm-na-clenshaw-curtis-interpolation-coefficients`; `cor-na-closed-newton-cotes-eight-panel-peano-bound`; `ex-na-square-root-endpoint-breaks-romberg-order` |
| 6 | `def-na-clenshaw-curtis-quadrature`; `ex-na-eight-panel-newton-cotes-negative-weight-amplification` |
| 7 | `thm-na-clenshaw-curtis-exactness-and-near-best-error`; `ex-na-clenshaw-curtis-integrates-quadratics` |
| 15 | `alg-na-computed-clenshaw-curtis-via-fast-dft` |

The A page has 20 items and the B page has 3 examples, below the 100-item cap. The `dependency_level` labels are the required `1 + max(in-run supplier level)` (or zero when there is no in-run item supplier). The B square-root example uses only the first Romberg column; it does not claim a high-column order without the finite even-power hypothesis.

## Cross-batch suppliers and reconciliation

The actual source bodies and proof text were inspected for every used in-run supplier. Batch 4 supplies the cardinal-polynomial definition, cardinal basis degree/value lemma, and unique-interpolant theorem. The eight-panel rule uses the strictly increasing rational nodes $-1+j/4$; the Clenshaw–Curtis theorem reverses the decreasing cosine node list before applying uniqueness. Batch 19 supplies the best-error/interpolant definitions, the reproduction/operator-norm lemma, and the near-best interpolation estimate. Their actual definitions use the same Chebyshev–Lobatto convention, and the consumers preserve the $n=0$ case. Batch 15's computed DFT algorithm returns an approximate vector or a failure status under its explicit unnormalised convention. The computed Clenshaw–Curtis procedure maps the real DFT entries into DCT-I coefficients and propagates status; it claims no new rounding or stability bound.

The supplier bodies were available at handoff; no supplier ID or required hypothesis is omitted. These checks concern the stated interfaces only and do not claim acceptance of another pair's draft or independent approval. The exact cross-pair item edges, affected claims, excerpts, and page-level requirements are in `numerical-optimization-dynamics-2026-10-16-batch-43.cross-batch-dependencies.json`.

## Mathematical routes and caveats

- DCT-I reconstruction follows from the explicitly proved weighted cosine orthogonality. Chebyshev moments follow from $x=\cos\theta$ and a finite sine-product calculation. Integrating the reconstructed interpolant gives Clenshaw–Curtis exactness and the error bound above.
- The Bernoulli polynomials are locally defined by a coefficient recursion. Their derivative, zero-mean, endpoint, reflection, odd-index, and boundedness facts are proved locally. Cellwise integration by parts yields the finite Euler–Maclaurin identity with its retained remainder; taking one extra correction term yields a uniform even-power expansion. A separate induction proves Romberg cancellation only under that expansion.
- The Peano kernel uses truncated powers. Taylor's integral remainder and Fubini prove the representation for orders $r\ge2$; order $r=1$ is handled separately because its kernel has finitely many jumps. The nine-node closed Newton–Cotes weights are exact rational integrals of the Lagrange cardinal polynomials. Symmetry extends degree-eight exactness to degree nine. The negative-weight example computes the sharp $\ell^\infty$ sample-error operator norm, separately from deterministic Peano error.
- The computed even-extension DFT procedure is finite and status-propagating. It has no standalone floating-point accuracy guarantee beyond its supplier.
- No choice axiom is used. All index inductions and sums are finite.

## Source reading and disposition

The A page has two independent full-text treatments, including a textbook, plus a complete reference-work treatment:

1. L. Ridgway Scott, *Numerical Analysis*, 2nd ed., complete 363-page PDF, <https://www.math.utah.edu/~feldman/teaching_files/F18/natwo.pdf>. Read §§13.1.1–13.4.1, printed pp. 217–236: interpolatory/Newton–Cotes formulas; Taylor integral remainder and Peano kernels; Bernoulli polynomials and finite Euler–Maclaurin; Chebyshev extrema and Clenshaw–Curtis.
2. Lloyd N. Trefethen, “Is Gauss Quadrature Better than Clenshaw–Curtis?”, complete 21-page SIAM Review paper hosted at <https://courses.grainger.illinois.edu/cs591mh/fa2012/trefethen/Clenshaw-Curtis.pdf>. Read §2, printed pp. 69–70, for the Lobatto nodes, transform and quadrature; and §5 for the FFT implementation and cost discussion. The latter is not used as a floating-point stability theorem.
3. NIST Digital Library of Mathematical Functions, full HTML sections <https://dlmf.nist.gov/3.5> and <https://dlmf.nist.gov/24.2>. Inspected §3.5(iii) equations 3.5.9–3.5.12 (finite trapezoid expansion and Romberg recurrence), §3.5(iv) equation 3.5.15 and its closed interpolatory-rule discussion, and §24.2(i) equations 24.2.1–24.2.5 (Bernoulli numbers and polynomials).

`numerical-optimization-dynamics-2026-10-16-batch-43.coverage.json` maps the harvested results to supported items, dispositions, and fetch stamps. Scott, the full Trefethen paper, and the two DLMF pages stamp successfully (7 of 9 coverage entries); the other two entries are documented drops of the unavailable Duke lecture URL, not missing mathematical coverage. The 2019 Duke lecture PDF URL returned HTTP 404 on six attempts. Search found a complete updated 19-page 2020 version by the same author, which was read through the web document reader, but its direct URL also returned HTTP 404 on six attempts. Both URL histories, searches, and item-by-item alternative arguments/dependencies are recorded in `source_resolution` in the coverage file. The claims remain proved locally and are supported by Scott, Trefethen, and the official DLMF sections.

The original Oxford-hosted Trefethen PDF timed out on six recorded attempts. Search found a directly retrievable 21-page copy of the same published SIAM Review paper; its full text and relevant sections were inspected and the replacement URL was stamped. The guessed AMS chapter URL returned HTTP 403; an HBZ candidate resolved only to a two-page contents document. Neither candidate is cited or represented as a harvested source.

## Reconciliation and run state

The required status command recomputed the run at 2026-10-16 01:06:25 UTC: it remains `running` at `1-scaffold`, with 46/107 batches covered and nothing in flight. The owner-held blocker now reads “repair every rejected item, refresh all certifications invalidated by the repair, then retry the gate” and points to `research/numerical-optimization-dynamics-2026-10-16-step1-blockers.json`. The displayed missing coverage includes batches 41–45, 48, 51, 53 and additional batches; artifacts are missing for 40, 46, and 54. Batch 43's item readiness records do not create a native author-result receipt or advance engine state. The runtime, shared state, and verdicts remain untouched.

Batch 20's pair-level page requirement is preserved, but no item from that batch is a proof premise: the needed composite trapezoid definition and error bound are published canonical items. This distinction is explicit in the item manifest and cross-batch evidence.

## Final scoped checks and readiness

Final checks:

- `node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 43`: pass. Precheck, rendercheck, item content policy, and strict proof-contract checks all exited 0.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-43.proof-contracts.json --strict`: 0 errors, 0 warnings, 23/23 contracts checked.
- `node tools/proof-layout.mjs` on all 23 changed item paths: 23 items, 54 proof steps, 0 defects.
- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-43.pages.json`: 23 items, 0 normalized, 0 errors. Batch 43's dependency levels recalculate with no batch-local errors. The full run-level check reports 84 empty scaffold inventories in other pairs and no other dependency-level errors.
- `source-fetch-check --stamp` resolved 9/9 coverage entries: 7 full-text fetch stamps and 2 documented Duke-source drops. A final check-mode run passed with the same counts.
- The batch-specific cross-batch input records all 16 expected page/item edges with no missing or extra rows. An exact-string check against the current supplier bodies confirms all 12 item-edge excerpts. The run-wide ledger collector and `step1-decisions check --run` could not complete because they encounter malformed YAML in two unrelated batch-51 source lists (`items/alg-certified-adaptive-simpson.md` and `items/thm-certified-adaptive-simpson-enclosure.md`); the batch-43 input itself parses and matches its assigned edges.
- All 23 batch items have `ready` Step-1 records with direct dependency IDs and evidence. A targeted hash check confirmed 23/23 records are current. These records mean authoring completeness only and are not independent approval.

No tests were run. The global run remains owner-held and incomplete outside this batch.

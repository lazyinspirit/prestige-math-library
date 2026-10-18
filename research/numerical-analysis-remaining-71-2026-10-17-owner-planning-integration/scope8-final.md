# Batch8 final-review NUFFT error-radius repair

Disposition: the actual type1 computed-FFT error omission is repaired in the algorithm and its theorem proof. The theorem Statement is byte-verbatim, and its F7 retains the strong exact-deconvolution containment claim with a complete justification. All old/current consumers have been checked by this same owner. The existing published interval/range suppliers discharge the approved interval interface; root owns the page/manifest scope reconciliation and all metadata, levels, hashes, readiness and native gates.

## Authority and actual source reading

Read CLAUDE.md fully and the current Step2 owner direction, including its explicit LIN-NUFFT approval to reuse the published outward-rounded interval page. Read the complete actual batch8 review0, repair1 and final review1 JSON. Read all14 current assigned carriers and both actual pages in full before editing; the original repair1 specification changes are present. Fully read the actual published FFT algorithm and complete FFT error proof, operationwise model, dyadic format, interval/rectangle definitions, outward-operation definitions and DAG-soundness proof, elementary-range algorithm and real-range theorem, and pi/Fourier bridge. No new external-publication reading, published supplier mutation or independent certification of those suppliers is claimed.

Before the first edit, copied all14 items and both pages, 16 exact full preimages, to `scope8-before/` preserving paths. Changed only `alg-nufft-certified-gaussian-gridding-type1-type2`, `thm-nufft-gaussian-gridding-error-and-type2-adjoint`, and the A-page explanatory prose. No source outside batch8 was written. The original12 other carriers and B page are unchanged. No metadata/level/status/verification, manifest, contract, readiness or native report/control was edited.

## Confirmed defect and actual repair

The type1 FFT routine returns a computed point vector. Its twiddle certificates license a *separate normwise error theorem*; outward scaling/division of that point does not by itself include the error relative to the exact unitary transform. The prior type1 r_k therefore lacked a genuine error term despite F7 claiming that enclosure. Type2 already explicitly enlarges its grid output by E_f+rho V and does not have this omission.

The repaired type1 procedure keeps its existing output center z_k, the lower-left corner of the computed FFT scaling/deconvolution rectangle. Call a certified radius about this center containing that rectangle b_k. Separately compute an outward finite upper bound

R_FFT >= rho U / (sqrt(P) d_min^-),

where U is the actual certified norm bound of the **dyadic center grid sent to the FFT**, not a source coefficient norm or an exact uncomputed spread norm. rho is formed from the same model's valid u and the verified upper bound on every returned twiddle certificate. Integer powers are finite products; all radius arithmetic is outward, and the normalization square root uses the original fixed format/index J. A normalization denominator enclosure must be strictly positive before division. Any nonfinite radius node or final upward-sum overflow rejects the candidate with its existing inconclusive/range status.

Return r_k=ru(b_k+R_FFT). Thus r_k encloses the original rectangle **and** the exact normalized/deconvolved FFT of the dyadic grid. The existing B_round=max r_k+E_eval/(sqrt(P)d_min^-) is retained. E_eval is the separate uncertainty from the exact truncated spread g to the dyadic grid u, so the FFT term and spread-center term are not conflated or double counted.

No extra input oracle is needed to enclose the abstract valid unit-roundoff bound: the already verified u<=1/16 provides the explicit [0,1/16] fallback constant enclosure if the selected model supplies no tighter certified enclosure. Tighter known model bounds may be used. This is ordinary conservative interval evaluation; if its result is too wide or nonfinite, the original requested-tolerance/range failure branches apply. No successful-run claim is made merely from a computed FFT return.

## Complete transfer proof and preserved supplier conditions

The actual published FFT theorem requires successful no-range-failure operation, representable input coordinates in the same selected model, u<=1/16, and every used twiddle certificate <=epsilon_tw<=1/4. The existing algorithm checks all these conditions for each call, including zero twiddle-bound controls and the original finite phase/precision/recursion controls. Computed output coordinates are model-representable, so successive grid axes remain admissible.

The theorem's existing axis calculation is valid: stack the linewise bounds over an axis to obtain error <=rho_r times its computed input norm. Exact axis transforms are unitary. Iterating the triangle recurrence yields

||x_d-U_Pu||2 <= U sum_r rho_r product_(s<r)(1+rho_s) = rho U.

For each retained slot kappa(k), its coordinate discrepancy is bounded by that norm. Exact multiplication by P^(-1/2) and division by d_k therefore give discrepancy <=rho U/(sqrt(P)d_k)<=rho U/(sqrt(P)d_min^-). The computed scaling/division rectangle encloses the exact scaling/division of the *computed* FFT point, with distance <=b_k from z_k. The complex triangle inequality then gives distance <=b_k+R_FFT<=r_k to the exact deconvolution of u. This argument is now explicit in theorem2.1, with its complex triangle premise cited. F7 now records the actual b_k+R_FFT construction and retains its original strong containment conclusion; it was not weakened to evade the missing term.

Parseval and the injective signed-slot restriction independently transfer ||g-u||2<=E_eval to a deconvolved max error <=E_eval/(sqrt(P)d_min). Adding this to max r_k gives the existing B_round. The analytic alias and finite-spread constants are untouched. The pi bridge matches the range evaluator's constant with the canonical Fourier constant. Type2 keeps its exact conjugate-transpose factorization, independent inverse FFT bound E_f+rho V and sound window intervals. No new complex normalization, sqrt2 loss, algorithmic scope restriction or type3 cost assertion is introduced.

## Same-owner old/current consumers

Actual dependency traversal gives precisely four items including the algorithm itself; there are no outside textual item references to this closure. Exact inventory and theorem Statement equality are recorded in `scope8-current-consumers.json`. The same current closure was present in the saved originals; no removed-edge consumer was discarded.

- Algorithm: the Definition now constructs the missing radius, with the same exact dyadic inputs, kernel normalizations, candidate order, fixed interval precision/series index, phase controls, signed slots and failure/termination statuses. New radius nodes have finite loops and explicit nonfinite/denominator guards.
- Error theorem: fully read and repaired F7/2.1 as above. Its complete original Statement, analytic constants, type1/type2 error bounds, empty-source conventions and work guarantee remain byte-verbatim. New radius work uses O(sum q_r+|K|) scalar operations and fits inside the existing FFT/deconvolution count.
- Clustered-source example: fully read actual Statement, facts and proof. Its dyadic successful-run subfamily still receives the same absolute bound epsilon_ana·2+B_round, now with the corrected returned radius. Its exact arbitrary-real-delta family and lack of relative-error inference remain sound. No source edit needed.
- Small-multiplier example: fully read actual carrier and controls. It rejects at the positive multiplier lower-bound check or an earlier range failure, before any FFT radius is used. Its conclusion is unchanged; no edit needed.

The MRI example was also read in full. It uses only the unchanged finite type3 definition, not this type1/type2 algorithm, and makes no fast complexity or reconstruction claim. All Gaussian analytic supplier proofs were read; their tails, aliases, real normalized kernels and complex finite sums remain untouched. No item outside this four-item consumer closure uses the changed algorithm or theorem. The actual page search shows no outside library page reference to the NUFFT page; its companion uses the same accurate example descriptions.

The A-page prose now identifies both published supplier pages and explicitly explains the separately propagated type1 computed FFT term. Its `requires` metadata was left untouched for root's coordinated manifest/plan integration. The B page remains unchanged.

## Exact existing published page placements and direct item dependencies

The following already-declared direct algorithm dependencies are all on **`outward-rounded-interval-and-ball-arithmetic`**, at `library/numerical-linear-algebra-and-approximation/outward-rounded-interval-and-ball-arithmetic.md`:

- def-dyadic-floating-point-format-and-directed-rounding
- def-intervals-rectangles-and-complex-balls
- def-outward-rounded-interval-and-ball-operations
- thm-outward-rounded-operations-are-isotone-and-dag-sound
- alg-certified-elementary-range-evaluation
- thm-real-elementary-range-enclosures

The error theorem directly declares the last DAG-soundness and real-range suppliers as well. The finite-array norm Definition directly declares the interval/rectangle Definition, and the small-multiplier example directly declares the dyadic format. Thus this is an actual consumed published page interface, not a merely contextual bibliography.

The following algorithm dependencies are on **`computed-fast-transforms-and-convolution`**, at `library/numerical-linear-algebra-and-approximation/computed-fast-transforms-and-convolution.md`:

- alg-na-computed-unitary-radix-two-fft
- thm-na-computed-unitary-radix-two-fft-error-bound
- thm-na-interval-pi-matches-canonical-fourier-pi

The selected operationwise arithmetic Definition is placed on **`finite-precision-direct-factorizations`**, at `library/numerical-linear-algebra-and-approximation/finite-precision-direct-factorizations.md`; its exact ID is `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, already directly declared by the algorithm. Root should preserve that actual prerequisite context alongside the interval page and computed-transform page. No new direct item dependency or pair was invented by this repair.

Root's current direction explicitly approves the existing interval page as discharging the older VAL-INTERVAL→LIN-NUFFT design edge, without duplicating an already published pair. Root still owns the manifest/page/plan join. One existing published range algorithm retains `verification.precheck: pending`; its actual mathematical source was read, that observation was reported to root, and no readiness or mechanical acceptance is claimed here.

## Final verification and handoff

After the last canonical source edit, ran exactly the required layout check on the two changed item paths. Result: `proof-layout: 2 items, 8 steps, 0 defects`, exit0. Direct raw section comparison confirms the original theorem Statement is unchanged. No tests, full validators, gates, hashes, native-report/control edits, commits or publication were performed.

All source writes for this owner are drained. No remaining mathematical gap is identified in the repaired radius/consumer chain. Root may now bind current inputs and perform its ordinary prerequisite-scope, metadata/contracts/readiness and native workflow steps. This report is owner repair/consumer evidence, not an additional native review or gate verdict.

# Batch 17 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`. Dispatch group: `batch-17`; scope-file assignment group remains `u`. Covers batch 17 only. This report records independent local review and checks, not judgment, stamping, certification, publication or engine transition.

## Decisions and repairs

Exactly four obligations were owed and decided in the task-named decisions JSON:

- `touched:17:lem-tdmath-conditional-log-density-convergence`: `reviewed_no_defect`, `change_kind: metadata`, `defect_ids: []`. Retained the reader's ordinary YAML reference quoting. The mathematical argument is sound. Corrected the mechanical prose range “steps 2.1–1.3” to “steps 2.1–3.1” and synchronized the derivation and boundary records. This is source/record normalization, not closure of a reader or refuter finding.
- `touched:17:thm-tdmath-local-tame-entropy-compactness`: `amended_repair`, confidence 1. Retained the reader's mathematical repair: first establish local cube entropy bounds for the stationary laws extended from `K_stat`; apply the bounded count-tail variational tests to every such law; establish finite intensity; only then apply the specific-entropy supplier. Amended the stale contract input mapping for step 5.1, which actually uses F1, and completed the risk review. Closed defect `tdqftrpm62-b17-compactness-intensity-domain`.
- `touched:17:thm-tdmath-spatial-mean-information`: `amended_repair`, confidence 1. Retained the reader's Poisson-mixture witness for the previously unsupported nonconstant-limit clause. Amended its two short inference gaps as described below, synchronized exact citations, step inputs and supplier/dependency metadata, and completed the risk review. Closed reader-repair defect `tdqftrpm62-b17-nonconstant-limit-witness`.
- `refuter:17:1`: `confirmed_nonfatal`, confidence 1, route `flagged`. The observed Proof 7.1 names Chebyshev and a derivative/minimum argument without exact relevant facts or local derivations. Both transitions are valid elementary deductions once written, so the finding does not refute the theorem. Closed defect `tdqftrpm62-b17-mixture-inference-licensing`.

For the refuter repair, F8 now cites the exact published statement of `thm-logarithm-derivative-and-integral`: for positive x, log x equals the oriented integral of 1/t from 1 to x. Thus x−1−log x is the oriented integral of 1−1/t and is strictly positive for x≠1, on both sides of 1. Applying this at x=1/z gives c_z=z(1/z−1−log(1/z))>0. For K with Poisson mean θ=λV, the factorial series gives E[K(K−1)]=θ² and E[(K−θ)²]=θ. Integrating ε²V² 1_{|K−θ|>εV}≤(K−θ)² gives Q_λ(|K/V−λ|>ε)≤λ/(ε²V), which tends to zero. No Chebyshev supplier is silently assumed. The existing log-sum-exp bound and mixture domination then identify the separate Q_1 and Q_z limits and prove nonconstancy.

All item Statements/Definitions, physical scope and empirical qualifications are unchanged. Proof provenance was already `ai-altered` where substantive repair occurred and remains appropriate. No prior judge stamp exists on the edited carriers. The new F8 dependency and mathematical-premise role are transcribed into the owning manifest; its published page home `the-logarithm-and-general-powers` is recorded in the A-page requirements and the owning cross-batch input. Inventories, item IDs and dependency levels are preserved. No downstream interface propagation is triggered by these proof/source/record changes.

## Exact historical comparison

Before Alpha edits, all three current raw item hashes matched the immutable post-reader snapshots. Exact pre-reader bytes were then recovered and authenticated, not inferred merely from the reader's conclusions:

| Carrier | Pre-reader raw SHA256 | Post-reader raw SHA256 |
|---|---|---|
| conditional log density | 325a1047bc5e3e90bda0b9be05b4d546f83a8e323ea8075e2030585247af0371 | 1532d29be228da34940abd4833b7735cc90d1641d0328f907f2206fdfe2d9b92 |
| local-tame compactness | d6cb9d4f72c5441b0b9344134821be0adbf0b97a450bf52637182ef29b048792 | 71df150cc883b99ccda0b3739f9b6de816e7e91d9c86a56023fca702c4ebe68d |
| spatial mean information | 7ceb5b8839c9f7630e0d52dd37f1a70a492953baa3b6190c17c2febb3279c83f | fad22e64a173f92fcadb44d66f6576510cb5686d36227cf0b40711db92cfffe2 |

Conditional preimage: reverse only the six reference title/url/locator quote replacements (ordinary double quotes become literal backslash-escaped quotes). Its hash equals the pre snapshot; the proof and statement are otherwise byte-identical.

Compactness preimage: restore the exact original derivation claims for steps 4.1, 5.1 and 7.1 from `research/physics-td-qft-rpm-62-2026-10-14-owner-native-step2-round2-integration-proposal/executions/2026-10-14T14-55-36-027Z/research__physics-td-qft-rpm-62-2026-10-14-batch-17.proof-contracts.json.before`, decode doubled mathematical backslashes, and use the original recorded input lists as trailing tags. The reconstructed raw hash equals the pre snapshot. The original premature application of the finite-intensity entropy theorem and closure-family tail ambiguity were independently confirmed from these bytes.

Spatial preimage: remove reader-added F6/F7 and step 7.1 and restore QED at step 6.1, retaining the two final newlines. The reconstructed hash equals the pre snapshot. This confirms the original missing witness and the reader's actual addition. The frozen refuter observation fingerprint `cb3c2d78af596662dbea676f86575eaafa7aad86c86c42aad65abdcfb0d77c27` remains in the unchanged scope. It refers to the pre-Alpha carrier, not the repaired current proof.

## Ordered mathematical and risk review

Read the dispatched order and scope first, then the reader report/findings, refuter report, actual carriers, contracts, and every distinct direct mathematical supplier interface. Imported suppliers were read-only; the new reciprocal-integral supplier's short proof was also read. Detailed complete `risk_review` records for all ten HIGH/CRITICAL carriers are in the owning contract. The ordered review checked:

1. `lem-tdmath-counts-generate-configuration-sigma`: both inclusions, parameterized count sums via pi-lambda, finite sorted-coordinate recovery, coordinate ties, empty configuration and dyadic endpoints. No arbitrary selection is concealed by the deterministic prefix/rank construction.
2. `def-tdmath-poisson-configuration-reference`: d≥1, λ>0, half-open cell partition via integer part, Borel padded/sorted codes, collision-null finite products, n=0 empty product, standard-Borel presentations and AC Kolmogorov extension. Bounded count generators justify measurability of translations.
3. `lem-tdmath-relative-entropy-variational-and-chain-rules`: finite negative part, singular-law tests, clipped log-density variational approximation including infinite entropy, restriction pullbacks, conditional-density exceptional fibers, finite product chain rule and additional-conditioning test inclusion. No infinity subtraction is used.
4. `thm-tdmath-poisson-reference-count-properties`: zero-volume Poisson categories, multinomial cell splitting, independent finite cell sums, full restriction independence by pi-lambda, arbitrary overlapping-count vectors under translation, extended intensity by increasing truncation, and exponential moments for every real parameter.
5. `thm-tdmath-specific-entropy-density`: disjoint superadditivity, integer-cube tiling and supremum, infinite supremum case, real-side-length squeeze, and bounded restrictions in translated containing cubes.
6. `lem-tdmath-conditional-log-density-convergence`: conditional increments increase to γ by lexicographic cube interiors; density martingales on P_past⊗Q_C are uniformly integrable by entropy tails. Cylinder identification, Fatou and variational restriction give the full density and entropy γ. Absolute continuity transfers probability convergence; negative-log tails ≤t e^(−t), positive-part expectation convergence and truncation give L1. Tower/contraction and a contradicting sequence prove directed convergence.
7. `thm-tdmath-local-tame-entropy-compactness`: local weak compactness by AC Dunford–Pettis; positivity, normalization and entropy are weakly closed. UL product compactness and closed nested/real-translation conditions yield stationary extensions. Count tails establish intensity before use of I. Uniform tame truncation yields a compact image, and Eberlein–Šmulian with UL/DC/HB plus countable diagonal extraction gives sequential compactness. c=0 is included.
8. `ex-tdmath-poisson-intensity-information-density`: identical conditional positions and independent cell likelihoods, expected count zm^d, exact finite-cube entropy and z=1 baseline; z>0 retained.
9. `ex-tdmath-unit-poisson-reference-information-zero`: stationary unit intensity meets the supplier's domain; equal restricted laws give h=1 and zero entropy and normalized log density. No zero-volume division is asserted.
10. `thm-tdmath-spatial-mean-information`: conditional factorization and uniform boundary control; commuting coordinate Cesàro projections, L1 truncation and invariant mean; real-shift intersection cubes prove full-group invariance rather than assuming integer and real ergodicity coincide. Rational sublevels make the limit constant only under the stated full-group ergodicity. The repaired mixture witness retains stationarity, finite intensity and finite entropy and distinguishes probability convergence from pointwise or empirical certainty.

These are mathematical laws and deductions on defined configuration spaces. No measurements, apparatus assumptions, statistical significance, empirical inference or physical model acceptance are introduced.

## Source evidence

- [Nguyen–Zessin, Ergodic Theorems for Spatial Processes](https://link.springer.com/content/pdf/10.1007/BF01886869.pdf): retrieved actual full PDF; read Theorem 6.6 and complete proof, printed pp.149–150, and assumptions (6.15)–(6.18), Theorem 6.26 and complete proof, printed pp.150–152. Checked filtering, finite entropy, independent increments, stationarity/covariance and invariant L1 conclusion. Their entropy sign is opposite to the local positive KL convention; the local conditional/cube proofs establish that conversion.
- [Georgii–Zessin, Large Deviations and the Maximum Entropy Principle for Marked Point Random Fields](https://link.springer.com/content/pdf/10.1007/BF01192132.pdf): the current LMU URL was unavailable through the browser tool, but the actual Springer full PDF was retrieved. Read §2.1 configuration/count discussion and local/tame definition (printed pp.180–181), §2.3, Remark 2.5 and Proposition 2.6 (p.184), and §5.1 with Lemma 5.2 and complete Proposition 2.6 proof (pp.196–198). Unmarked specialization uses the singleton mark space and weight 1. The local construction, compactness and sequential argument supply complete mathematical details rather than assuming the source's cited lattice proof. The count lemma's existing narrow page locator points to pp.181–182; the actual count-sigma discussion is on p.180 within its correctly named §2.1. This locator precision is reported for owner disposition; the independently proved count statement does not depend on a missing source theorem.
- Georgii's `Dresden.pdf` chapter remains explicitly a finite-state/lattice comparison. It was not newly retrieved in this Alpha session and no proof conclusion rests on it. The reader's chapter-reading claim is retained as reported evidence, not represented as Alpha reading.
- `items/thm-logarithm-derivative-and-integral.md`: actual published Statement and proof read. It supplies the oriented reciprocal integral for every positive x via inverse differentiation, FTC and zero-derivative constancy. Its pinned import record was checked against `research/math-imports.json`; the original/imported bytes were not edited.

## Local checks and disposition

- Initial and final scoped proof precheck: 3/3 changed/routed carriers pass.
- Final rendered `proof-layout`: 3 items, 23 steps, zero defects. Ran the required explicit batched command against the actual renderer with `NODE_OPTIONS='--import /private/tmp/physics-layout-alias-register.mjs'`. This temporary resolver supplies the web checkout's existing `@/` aliases; no repository tools or application files were altered. It resolves the reader's reported layout-loader blocker. A Node deprecation warning does not affect the zero-exit result.
- Rendercheck: all 3 scoped carriers pass real KaTeX math and renderer YAML parsing.
- Strict proof-contract: 11/11 contracts checked, zero errors and warnings. Initial stale reader mappings/quotes were corrected after the mathematical review; the first repair script selected an inner fact bracket instead of trailing tags, producing mechanical diagnostics, and was corrected to parse the final bracket group. No mechanical diagnostic became a mathematical defect row.
- Risk-report was run first without `--require-reviewed`, then with it after all ten required specific Alpha reviews: zero errors, 11 contracts routed.
- Content policy: 13 manifest items, zero errors and warnings.
- Scoped depcheck selected all 13 manifest IDs and their actual prerequisite closure: passed item/page checks and cycle checks.
- Three closed defect rows appended through the native locked append tool at `caught_at_stage: 3a-adjudicate`; generated defect view refreshed by that tool. The refuter decision maps to exactly one row.
- Owning cross-batch input updated only for the new exact published supplier home; frontier dependency ledger refreshed and deduplicated.

No substantive mathematical blocker remains in the four routed decisions, and no defective published supplier was found. The existing **open** page-prerequisite record from `td-math-spatial-measure-and-information` to `td-math-ensembles-and-limits` is retained with its historical evidence, for owner resolution; this dispatch does not certify its unrelated historical/transitive page closure. No proposed withdrawal, published repair, new page or outside consumer edit was made. The count-source narrow locator issue above is an owner alert outside the touched/finding obligations, not a claimed repaired or escalated substantial prerequisite.

The engine still owns current decision hashes, gates and stage transitions. None were run or stamped by this worker.

# Batch 27 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-27`.

Completed: exactly three touched decisions and fifteen required independent risk reviews; no page, reader or refuter findings are owed. Review followed the generated dependency order. Only batch 27 content/evidence is writable; published suppliers remain read-only.

## Completed ordered reviews

- Level 0, `lem-l-smoothness-descent-inequality`: independently verified the finite MVT partition, telescoping and sum induction, reciprocal limiting bound, L=0 and d=0 branches, and exact current cited supplier statements. No infinite choice is used. Risk review complete.
- Level 1, `lem-proper-closed-convex-function-affine-minorant`: reviewed the full current proof and projection/compactness prerequisites. The relative-interior simplex, unique projection sequence, unit-normal subsequence, closed horizontal direction space and c<0 argument establish the global affine bound, including singleton domain and n=0. Reader changes expand routine derivations; verdict `reviewed_no_defect`, `change_kind: audit_enrichment`, no defect IDs. Risk review complete.

Exact preimages were found by matching raw SHA-256 to the immutable pre snapshot, not inferred from the reader narrative. For the minorant and algorithm they are under `research/numerical-optimization-dynamics-2026-10-16-owner-step2-b10-b27-metadata-20261016T082956813507Z/before-proposal/items/`. For soft thresholding the preimage is `research/numerical-optimization-dynamics-2026-10-16-owner-boundary-integration-intake/generations/20261016T114106891879Z/current-sources/lem-prox-l1-is-soft-thresholding.md`. All three current raw carriers match their post-reader snapshot. Minorant pre/post hashes are `aef9d276fe6f6aa6628c84385ea96178c2d7beda62c3197757138155dbc33296` / `1d0e68af7755ff5a1232149d0470f7dd7a6158d4131079a224574d4e85f5b787`. Its Statement and dependencies are identical.


- Level 2, `lem-prox-indicator-is-euclidean-projection`: verified epi=C×[0,∞), convexity endpoints, n=0 and positive-scale distance minimization. Risk complete. Source metadata alert: Parikh–Boyd §2.4.2 is not the relevant locator; use §1.2, pp.125–126, eq.(1.3). The same locator occurs in the unrouted indicator definition. Owner should normalize those metadata records; mathematical content is sound.
- Level 2, `thm-proximal-operator-existence-resolvent-firm-nonexpansive`: compact real-valued sublevel minimization, strict midpoint uniqueness, both resolvent implications and summed-subgradient firm nonexpansiveness independently verified; all compactness suppliers invoked only for n≥1. No defect. Risk complete.


- Level 3, `lem-prox-l1-is-soft-thresholding`: accept the reader coordinate-domain repair with confidence 1. The exact old formula requests v_n outside domain n={0,…,n−1}; n=1 already demonstrates the typing defect. Current formula/facts/proof consistently use k<n. Verified closed proper convex penalty, all scalar branches including ±tλ, and finite separability. Both actual direct consumers were read: `ex-two-pixel-total-variation-proximal-map` uses the explicit scalar/R¹ identification and effective threshold (t/2)(2λ)=tλ; `ex-nonorthogonal-lasso-proximal-gradient-step` applies the map coordinatewise at threshold 1/15. Neither needs a repair. Closed defect: `nod-b27-soft-threshold-coordinate-domain`. Risk complete.
- Level 3, `lem-proximal-three-point-inequality`: resolvent substitution and norm identity give the asserted inequality, with +∞ competitors automatic. No convexity of f is assumed or used. Risk complete.


- Level 4, `alg-proximal-gradient-and-fista`: exact preimage diff changes only `verification.precheck: pending` to `n/a`. Definition has finite N≥1, explicit exact proximal calls, t₁=1 and y₁=x₀, positive recurrence denominator and fixed-period restart with a final shorter block. Current suppliers justify every call; f+g is proper closed convex. No correctness/rate assertion is hidden as procedure proof. Verdict `reviewed_no_defect`, `change_kind: metadata`, no defect IDs.
- Level 4, `lem-proximal-gradient-one-step-estimate`: independently checked finite-domain subtraction and both quadratic identities from the three-point model, smooth upper bound and convex-gradient lower bound. No defect. Risk complete.
- Level 4, `thm-projected-gradient-fixed-point-kkt-certificate`: verified both fixed-point/outward-normal directions, n=0, empty systems and the one-way KKT sufficiency implication. Read batch-6 supplier proofs in full; no multiplier converse or constraint qualification is assumed. Risk complete.
- Level 4, `ex-two-pixel-total-variation-proximal-map`: independently verified the mean/difference bijection, quadratic factor 2, scalar parameter t/2 and threshold tλ, including fused boundary cases. Risk complete.


- Level 5, `lem-fista-energy-estimate-sequence`: verified all t/u/z identities and convex-combination weighting, quadratic energy cancellation and separate k=1 branch. Arbitrary x₀ outside dom g is allowed without forming 0·∞. Risk complete.
- Level 5, `ex-projected-gradient-on-nonnegative-orthant`: verified Lipschitz constant 1≤L=2, projection of (−1,0), outward sign and nonnegative KKT multipliers (2,0), including the inactive multiplier zero. Risk complete.


- Level 6, `lem-inexact-proximal-gradient-one-step-estimate`: independently verified certificate typing, finite x⁺ objective, +∞ comparison branch and cancellation giving one −η. The exact residual-in-epsilon-subgradient certificate is stronger than an unchecked proximal objective gap; the algorithm explicitly returns inconclusive if no certificate is supplied. Risk complete.


- Level 7, `lem-inexact-fista-energy-estimate`: independently checked the weighted +2tₖ²ηₖ/L term, vector norm cancellation, previous coefficient identity and base case. Risk complete.
- Level 7, `thm-inexact-proximal-gradient-summable-error-bound`: telescoping gives the gap-sum bound and minimum≤average gives the stated best-iterate rate. Nonnegative gaps with bounded partial sums tend to zero; no last-iterate rate follows or is claimed. Risk complete.
- Level 7, `thm-strong-convex-proximal-gradient-and-restarted-fista-rates`: independently proved the strengthened subgradient support, quadratic growth, residual bound 2L‖d‖ and their contraction factor q. The local FISTA rate then gives block factor 4L/(μ(m+1)²)≤1/2. Arbitrary positive composite μ (including μ>L), zero initial gap and singleton-domain cases remain valid. Schmidt Proposition 3's smooth-part curvature assumption is not silently transferred: the local proof handles curvature of F. Risk complete.

Synchronized the two stale exact soft-thresholding Statement quotations in the TV and Lasso proof contracts (F2/F3). Their actual authored uses remain sound, so their items and Statements are unchanged. All current manifest dependency lists agree with item frontmatter.


## Sources and checked limits

- [Parikh–Boyd, Proximal Algorithms](https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf): §1.1 (p.124) gives the closed proper convex epigraph convention and positive-parameter proximal objective; §1.2 (pp.125–126), eq.(1.3), gives indicator projection; §2.3 (p.131) states firm nonexpansiveness; §3.2 (pp.137–138), eq.(3.4), gives the resolvent; §4.2 (pp.148–150), eqs.(4.6)–(4.8), gives the step and quadratic majorization; §6.5.2 (p.188), eq.(6.9), gives coordinate soft thresholding. The source's convenient subdifferentiability assumption in its resolvent proof is unnecessary for the independently checked local directional proof.
- [Beck–Teboulle, FISTA, institutional full-text copy](https://www.ceremade.dauphine.fr/~carlier/FISTA): read §2.2 assumptions, Lemmas 2.1–2.3 and proof (pp.189–190), Remark 2.1 (constraints), the algorithm in §§3–4, Lemma 4.1 and its complete proof (pp.194–195), and Theorem 4.4 including its base case (pp.195–196). These match the local fixed-step model and energy/rate formulas. The paper initially assumes finite continuous g; the local epigraph/existence proof and finite/+∞ branches establish its stated extended-real scope independently. The originally cited author PDF returned an internal web error; this full-text copy was successfully read.
- [Schmidt–Le Roux–Bach](https://arxiv.org/pdf/1109.2415): §3 (pp.3–4) and Appendix Lemma 2 with its proof and following discussion (pp.12–13) distinguish a proximal objective-gap tolerance from the stronger residual-in-epsilon-subgradient certificate (zero extra perturbation). The batch uses the latter explicitly. The source's strongly convex analysis assumes smooth-part curvature; the current local composite-curvature proof was checked directly rather than inferred from it.

Exact local supplier statements were read for the routed carriers; the full projection, projection-VI, Bolzano–Weierstrass, compact-tail/least-index compactness, continuous-sum, local FISTA rate and batch-6 convex-KKT arguments were inspected where used. Source books listed as supplementary references were not claimed as independently read. No published mathematical defect was found; no published item or published ledger was edited.

## Changes and consumer disposition

The three item carriers remain byte-identical to their reader-post snapshots. Alpha changed no item, Statement, Definition, page, manifest inventory, dependency edge, provenance or judge record. The owned proof-contract file now contains all fifteen specific independent risk reviews and the two corrected soft-thresholding quotation mirrors. Refreshed the two KKT item-use records in the existing batch cross-batch input; retained its page record and all three records. Added the owned-consumer summary to `briefs/tasks/frontier-dependency-ledger.md`, preserving IDs and all proposed withdrawals. Appended one closed fatal typing-defect row (`nod-b27-soft-threshold-coordinate-domain`, caught at `3a-adjudicate`, confidence 1) through the serialized defect-ledger tool and regenerated its view.

The only outstanding owner observation is bibliographic: `def-indicator-function-of-closed-convex-set` and `lem-prox-indicator-is-euclidean-projection` name Parikh–Boyd §2.4.2; the actual indicator/projection passage is §1.2, pp.125–126, eq.(1.3). These carriers owe no touched decision here, and the observation is routed in this report and the frontier ledger rather than represented as a closed mathematical repair. The independent local arguments are sound. No substantial unmet mathematical prerequisite, published defect or required outside consumer repair was found.

## Local checks

All commands ran from the repository root and exited 0:

- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-27.proof-contracts.json`: 22 contracts routed; fifteen HIGH/CRITICAL items identified.
- Same command with `--require-reviewed`: 0 errors; all fifteen reviews record `status: complete`, reviewer `alpha-batch-27`, and item-specific proof, supplier and boundary evidence.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-27.proof-contracts.json --strict`: 22/22 checked, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/alg-proximal-gradient-and-fista.md items/lem-proper-closed-convex-function-affine-minorant.md items/lem-prox-l1-is-soft-thresholding.md --json`: two proof items passed; algorithm not applicable; 0 failures.
- `node tools/rendercheck.mjs` on those same three explicit paths with `--json`: 3 checked, 0 errors, 0 warnings.
- Final single batched `node tools/proof-layout.mjs items/alg-proximal-gradient-and-fista.md items/lem-proper-closed-convex-function-affine-minorant.md items/lem-prox-l1-is-soft-thresholding.md`: 3 items, 9 steps, 0 defects. No item edits or formatter followed it.
- Local evidence assertions: exactly the three owed decisions; fifteen independent reviews; all three raw item hashes equal immutable post-reader hashes; all exact contract citation quotations current; one closed defect row. The earlier preimage hash comparison bound all three actual pre-reader carriers.

This report and `research/numerical-optimization-dynamics-2026-10-16-alpha-batch-27-3a-decisions.json` are the requested outputs. No judge, certification, decision-hash stamp, agent dispatch, run transition, publication or commit was performed. The engine owns stamping and the gate battery.

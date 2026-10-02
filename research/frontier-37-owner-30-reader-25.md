# Step 5a reader report — batch 25

Run: `frontier-37-owner-30`  
Role: reader  
Run status checked from `.autopilot/frontier-37-owner-30`: Step 5a is active; this batch is in scope.

## Opened inventory

Assigned pages, opened in manifest order:

- `library/complex-analysis/harmonic-hardy-classes-and-fatou-boundary-limits.md` (A)
- `library/complex-analysis/harmonic-hardy-classes-and-fatou-boundary-limits-examples.md` (B)

All 14 assigned item files were opened and checked in manifest order:

- A page: `def-poisson-integral-of-finite-boundary-measure`, `def-harmonic-hardy-class-disc`, `thm-poisson-extension-lp-contraction-and-norm-limit`, `thm-harmonic-hardy-one-measure-representation`, `thm-harmonic-hardy-representation-p-greater-one`, `def-circle-maximal-function-and-nontangential-region`, `lem-circle-maximal-weak-one-one`, `thm-poisson-nontangential-maximal-bound`, `thm-fatou-nontangential-boundary-theorem-harmonic`, `cor-bounded-harmonic-functions-have-nontangential-limits`, `thm-harnack-convergence-positive-harmonic-functions`.
- B page: `ex-poisson-extension-of-an-indicator-arc`, `ex-poisson-boundary-atom-in-h-one`, `cex-radial-boundary-limit-does-not-force-tangential-limit`.

I also opened the nine required prerequisite pages named by the A-page manifest: `harmonic-functions-and-the-poisson-integral`, `complex-lp-spaces-and-test-function-conventions`, `the-duality-of-lp-and-lq`, `density-separability-and-convolution-in-lp`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `banach-alaoglu-goldstine-and-krein-milman`, `reflexivity-and-eberlein-smulian`, and `green-functions-harmonic-measure-and-conformal-invariance`. For the 86 unique external item dependencies declared by the assigned items, I opened the current definition or theorem-statement clauses needed to check each citation's hypotheses and conclusion. These covered the Poisson kernel and torus normalization; harmonic representation; total variation, regularity, and integration; Lp density, duality, and reflexivity; weak-star compactness and Riesz representation; maximal estimates; and the elementary trigonometric and measure facts used in the computations.

## Repairs and evidence

1. **`def-circle-maximal-function-and-nontangential-region`** — corrected the claim that the circle maximal function takes values at most `|μ|(T)`. The denominator is `m(I_h)=2h`, so the averages can be unbounded as `h↓0`: for `μ=δ_ζ`, the average centered at `ζ` is `1/(2h)`. The definition now states the correct extended range `[0,+∞]` and notes that the supremum may be infinite.

2. **`thm-poisson-nontangential-maximal-bound`** — corrected the copied finite-range clause in Fact [L1]. Reworked proof step 2.1 to handle `M_T μ(ζ)=+∞` as the automatic case, and to let `ε↓0` only when the maximal value is finite. The radial estimate and the cone comparison retain their stated domains and constant. The repair is consistent with Axler–Bourdon–Ramey, *Harmonic Function Theory*, 2nd ed., Chapter 6, Theorem 6.31, printed pp. 132–133 (PDF pp. 137–138): the maximal function is extended-valued and bounds the radial Poisson maximal function. The same source gives the finite-measure weak `(1,1)` estimate in Theorem 6.37 in the Fatou section, printed pp. 130–135 (PDF pp. 135–140).

3. **`ex-poisson-extension-of-an-indicator-arc`** — corrected three proof claims. The complement of the open arc is a closed arc (with positive measure and nonempty interior), not an open arc. The endpoint computation no longer treats an interval of length greater than one as a single period: for `2h≤1/2` it uses the complement within a fundamental period; for `1/2<2h<1` it splits off the full period and bounds the extra intervals by the Poisson tail estimate. In the assembly I removed the unsupported pointwise-jump claim about the almost-everywhere equivalence class; the specified representative `1_I` has the two-sided jump. The Poisson-kernel mass and tail hypotheses are in the opened current dependency `lem-poisson-kernel-properties-on-the-disc`.

4. **`cex-radial-boundary-limit-does-not-force-tangential-limit`** — corrected the `m<n` arc-separation inequality. The proof now uses `t_m≥2t_n`, hence `t_m−3t_n/2≥t_m/4>w_m` because `w_m=t_m^3≤t_m/64`. Replaced the undefined notation `N_∞(f)` with the L-infinity norm. The first precheck requested the canonical phase stratification; after the local `adopt-repair.mjs` command skipped, I applied the exact numbering and reference changes shown in the precheck output, then reran reflow and precheck successfully.

For the four changed items, the corresponding entries in `research/frontier-37-owner-30-batch-25.proof-contracts.json` were updated. None of the four item files contained a `verification.judge` record to remove.

## Validation

| Item | Reflow | Final precheck |
|---|---|---|
| `def-circle-maximal-function-and-nontangential-region` | unchanged, exit 0 | 0 checked, 0 failing (definition) |
| `thm-poisson-nontangential-maximal-bound` | unchanged, exit 0 | PASS direct; 1 checked, 0 failing |
| `ex-poisson-extension-of-an-indicator-arc` | unchanged, exit 0 | PASS direct; 1 checked, 0 failing |
| `cex-radial-boundary-limit-does-not-force-tangential-limit` | unchanged after canonical step numbering, exit 0 | PASS direct; 1 checked, 0 failing |

The authoritative source passages consulted were Axler–Bourdon–Ramey, *Harmonic Function Theory*, 2nd ed., Chapter 6, Theorems 6.13 (printed pp. 117–121/PDF pp. 122–126), 6.31 (printed pp. 132–133/PDF pp. 137–138), 6.37 (printed pp. 130–135/PDF pp. 135–140), and 6.39 (printed pp. 135–136/PDF pp. 140–141), at <https://www.axler.net/HFT.pdf>; and Herbert Koch, *Notes for Harmonic and Real Analysis*, §3.1.2 equation (3.3) (printed p. 35), Theorem 3.4 (p. 36), Lemma 3.7 and Theorem 3.8 (pp. 36–37), at <https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf>. I read the relevant arguments, not just the theorem labels.

## Uneditable defects

None found.

## Page verdicts

- **A page — no remaining prose defect.** Its summaries of the maximal estimates, measure and Lp representations, nontangential Fatou limits, bounded harmonic functions, and positive harmonic families agree with the reviewed items after the repairs above.
- **B page — no remaining prose defect.** Its endpoint and tangential-limit summaries agree with the reviewed examples after repair.

## Blocker and coverage limitation

No blocker. I independently checked the current mathematics in every assigned item and page, and checked current cited definition/statement clauses for the 86 direct external dependencies. I did not independently re-prove the proofs of those published dependency items; the central Poisson, maximal, Hardy-representation, positivity, and Fatou arguments were also compared with the cited source passages listed above.

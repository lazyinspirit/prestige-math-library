# Step 3a reader report — batch 1

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Verdict: no defects found; no edits made.

## Opened inventory

- Assignment and instructions: `research/numerical-analysis-remaining-71-2026-10-17-batch-1.pages.json`, `briefs/reader.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, and `WORKFLOW.md`.
- Batch proof contract: `research/numerical-analysis-remaining-71-2026-10-17-batch-1.proof-contracts.json`.
- Assigned items, reviewed in dependency order after their supplier: `items/op-optimal-star-discrepancy-order-dimension-at-least-three.md` and `items/ex-one-point-star-discrepancy-center.md`.
- Local supplier item: published `items/def-star-discrepancy-and-digital-net.md`.
- Assigned pages: `library/numerical-linear-algebra-and-approximation/optimal-star-discrepancy-order-in-dimension-at-least-three.md` (A-page) and `library/numerical-linear-algebra-and-approximation/optimal-star-discrepancy-order-in-dimension-at-least-three-examples.md` (B-page).
- Required page prerequisite: published `library/bayesian-computational-statistics/quasi-monte-carlo-discrepancy-and-rules.md`.
- Sources opened: Art B. Owen, *Practical quasi-Monte Carlo integration*, printed pp. 18–19 and Theorem 15.7 on printed p. 27, [author-hosted PDF](https://artowen.su.domains/mc/practicalqmc.pdf); Josef Dick, *Optimal Polynomial Tractability Exponents for the Inverse Star Discrepancy*, arXiv:2607.23571v3, Theorems 1.1–1.2 and Remark 1.4, [PDF](https://arxiv.org/pdf/2607.23571v3); Ekene Ezeunala, Agastya Vibhuti Jha, and Haotian Jiang, *Quasi-Monte Carlo Beyond Hardy-Krause II: (1 + ε)n Samples Suffice*, §1.3, PDF pp. 6–7, [arXiv:2609.10921](https://arxiv.org/pdf/2609.10921).

## Review and evidence

- `def-star-discrepancy-and-digital-net`: its definition uses the stated normalized discrepancy over half-open anchored boxes with endpoints in `[0,1]^d`; repeated points are counted by multiplicity. These are the conventions used by both assigned items. The required published page’s summary correctly describes the same convention.
- `op-optimal-star-discrepancy-order-dimension-at-least-three`: the formulation fixes `d ≥ 3` before `n → ∞`, takes the infimum over ordered configurations with repetitions counted, and defines the conjectural two-sided order with constants depending on `d`. Its nonemptiness and boundedness observations are valid; it does not assert attainment. Owen, printed pp. 18–19, says the best possible rate is unknown and records the Roth baseline and the conjectural exponent. Theorem 15.7, printed p. 27, gives the Hammersley point-set upper order `O_d(n^-1(log n)^(d-1))` (equation (15.16)). Dick’s Remark 1.4 supplies the fixed-d upper construction while distinguishing it from the paper’s uniform growing-dimension tractability theorem. As a current independent status check, Ezeunala–Jha–Jiang §1.3 states that the optimal star-discrepancy bound for point sets and sequences remains unknown for `d ≥ 3`, and describes the known lower bound as Roth’s bound with small improvements. This supports the item’s bounded open-status wording and its explicit caveat that Roth’s rate is not the strongest known lower bound.
- `ex-one-point-star-discrepancy-center`: the proof handles the strict half-open membership condition at `u_j = 1/2`; if any endpoint is at most `1/2`, the count is zero and the volume is at most `1/2`; if all endpoints exceed `1/2`, the count is one and the discrepancy is below `1 - 2^-d`. The displayed endpoint sequence lies in `[0,1]^d` and tends to that upper bound, so the supremum is exactly `1 - 2^-d` even though it is not attained. The dimension-two and dimension-three substitutions are correct. The proof contract’s fact quote matches the published supplier.
- A-page verdict: pass. Its summary presents the fixed-d question as open, preserves the repeated-point convention, and describes the companion page as contextual.
- B-page verdict: pass. Its summary accurately distinguishes the planar order, the classical lower-bound baseline, the fixed-d point-set upper construction, and the different growing-dimension scope of Dick’s result.

## Edits, remaining defects, and blocker

- Edits: none. No confirmed defect required repair; no changed-item formatter, reflow, or precheck was therefore needed.
- Uneditable defects: none.
- Blocker: none. The live autopilot status showed the run in `3a-read`, with no dispatch running and reader artifacts still outstanding when checked.

## Coverage limitation

The source-status check is bounded to the sources listed above and the relevant cited passages; it does not claim an exhaustive search proving that no resolution exists.

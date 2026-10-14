# Step 3a reader report — batch 23

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Date: 2026-10-14

## Scope and instructions

Read `CLAUDE.md`, `README.md`, `briefs/reader.md`, the batch-23 page manifest,
the batch-23 notes, coverage ledger, cross-batch dependency record, and proof
contracts. The autopilot status was `running`, with batch 23 awaiting its Step
3a reader result. The contract and authoring records were treated as evidence,
not verdicts.

The manifest assigns A page `local-asymptotic-normality-contiguity-and-efficiency`
and B page `local-asymptotic-normality-contiguity-and-efficiency-examples`.
Both assigned pages and all 20 assigned item carriers were opened. The four
required prerequisite pages were also opened:

- `likelihood-asymptotics-wald-score-and-likelihood-ratio`
- `minimax-lower-bounds-and-information-theoretic-methods`
- `central-limit-theorems`
- `inner-product-spaces-and-orthogonality`

## Assigned item inventory

Items were reviewed in dependency-level order, suppliers before consumers.

- Level 0: `def-contiguous-sequences-of-measures`;
  `lem-boundary-of-convex-set-is-lebesgue-null`.
- Level 1: `def-lan-experiment`;
  `thm-brunn-minkowski-for-compact-convex-sets`;
  `thm-mean-one-likelihood-ratio-limit-implies-contiguity`.
- Level 2: `def-regular-estimator-under-local-alternatives`;
  `lem-compact-uniform-lan-posterior-approximation`;
  `lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss`;
  `thm-le-cam-third-lemma`;
  `cex-noncontiguous-binary-sequences`.
- Level 3: `lem-bowl-shaped-loss-has-centered-lipschitz-minorants`;
  `lem-qmd-score-centered-and-finite-information`;
  `thm-convolution-bound-for-regular-estimators`.
- Level 4: `lem-qmd-singular-and-zero-overlap-masses`.
- Level 5: `lem-finite-prior-lan-bayes-envelope-convergence`;
  `lem-finite-priors-approximate-gaussian-shift-bayes-risk`;
  `lem-qmd-normalized-product-likelihood-expansion`.
- Level 6: `thm-local-asymptotic-minimax-bound`;
  `thm-qmd-implies-lan-for-iid`.
- Level 7: `ex-gaussian-shift-lan-and-regular-sample-mean`.

## Dependency and source review

The current-run suppliers used by assigned proofs were opened and their exact
interfaces checked: `def-qmd-path` (batch 22), `def-likelihood-density` (batch
4), `def-loss-function-and-risk` and `def-bayes-and-minimax-risk` (batch 3),
and `thm-vector-slutsky` (batch 13). The current QMD definition supplies its
density family through `def-measure-with-density`; the authoring note about an
omitted `def-likelihood-density` edge does not identify a missing prerequisite
for that definition. The assigned QMD consumers that require the selected
likelihood-density interface declare it directly.

The published supplier statements cited in the item contracts were opened for
the proof interfaces used here. They include the contiguity and convergence
definitions; total variation; Gaussian laws and characteristic functions;
Tonelli, dominated and monotone convergence; the kernel and Bayes-risk
interfaces; Prokhorov tightness and Cramér–Wold; the Lebesgue change-of-variable,
translation, boundary, and Brunn–Minkowski results; and the measure and
finite-dimensional norm facts used in the QMD and convex-geometry arguments.
The batch proof contracts' cited suppliers, numbered-step maps, and applicable
boundary worksheets were checked against the current item text.

Authoritative source checks for the delicate statistical claims:

- Bartlett, *Theoretical Statistics*, Lecture 21, PDF pp. 19–24, was opened.
  Those pages contain Le Cam's third-lemma statement, its Gaussian corollary,
  and proof; they do not contain the convolution representation cited by the
  convolution item.
- Duchi, *A few notes on contiguity, asymptotics, and local asymptotic
  normality*, was opened in full. Its §1.5 gives the QMD definition and
  score-centering result (PDF pp. 7–8); its QMD iid-LAN calculation is Example
  4 (PDF p. 10). The local minimax statement and proof are in §4.1 (PDF pp.
  17–18). Section 4 does not state the cited convolution result.
- van der Vaart, *Semiparametric Statistics*, Theorem 4.12 and its proof,
  printed pp. 44–45 (PDF pp. 43–44), state the convolution representation.
  The assigned convolution item does not list this source. The local
  asymptotic minimax comparison was also checked against Theorem 4.14 and its
  proof, printed pp. 46–48.

The QMD-to-LAN proof in the assigned item was checked directly: the
absolutely-continuous restriction is normalized, the likelihood expansion
uses the resulting density, and the product total-variation error is bounded
by the probability of at least one singular coordinate. No full
Radon–Nikodym derivative for a possibly singular local alternative is
asserted.

## Page verdicts

- **A page — `local-asymptotic-normality-contiguity-and-efficiency`:** its
  summary matches the item statements and proof scope, including the pointwise
  LAN minimax route and the separate compact-uniform posterior hypothesis.
  The mathematics reviewed is supported. Two nonfatal citation issues in
  assigned items are listed below.
- **B page — `local-asymptotic-normality-contiguity-and-efficiency-examples`:**
  its summary matches both assigned examples. The rare-event probabilities,
  likelihood-ratio values and weak limit are correct; the Gaussian location
  QMD, exact LAN ratio, and regular sample-mean calculation are correct.
  No defect found.

## Defects not editable in this reader assignment

1. `lem-boundary-of-convex-set-is-lebesgue-null`, Proof step 2.1: the
   contraction `x_0+t(K_r-x_0)` is affine, while cited fact F3 gives the
   determinant scaling rule for linear maps. The measure calculation also
   needs translation invariance (F6), which is stated earlier in the facts
   but omitted from the step's justification tags and calculation. Applying
   F3 to `t I` and then translating by `(1-t)x_0` closes this immediately;
   the claim is correct. This is a nonfatal citation omission.
2. `thm-convolution-bound-for-regular-estimators`, frontmatter
   `sources.references` entries 1–2: Bartlett Lecture 21, PDF pp. 19–22,
   supports the cited third-lemma input, and Duchi §4 is local minimax
   material; neither gives the convolution representation claimed by this
   item. The item contains a complete local proof, which appears sound. Add
   the exact convolution source, such as van der Vaart Theorem 4.12, printed
   pp. 44–45. This is a nonfatal citation defect.

## Edits and blockers

No item or page edits were made; this is a read-only reader assignment. No
item formatter or validation commands were run. No blocker remains for this
review result.

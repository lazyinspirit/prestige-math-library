# Reader 20 — batch 20

Run: `physics-em-sr-40-2026-10-08`. Independent Step 5a reader review. The manifest, author notes, cross-batch ledger and proof contracts were treated as evidence; their prior decisions were not adopted as verdicts.

## Opened inventory and scope

Read the required parent/workspace instructions, README, SCHEMA, WORKFLOW, physics content model (including statistical evidence), reader brief, exact batch manifest, batch notes, current batch contracts, cross-batch dependency rows, relevant import-ledger entries, and applicable owner direction. No rendered reader evidence bundle was found under the current research/state paths searched; actual carriers were used.

Assigned pages, both opened completely:

- `library/classical-electromagnetism-mathematics/em-experiment-analysis-prerequisites.md` (A).
- `library/classical-electromagnetism-mathematics/em-experiment-analysis-prerequisites-examples.md` (B; read-only prose).

Assigned draft items, both opened completely, theorem before example:

- `items/thm-em-uncertainty-analysis.md`.
- `items/ex-em-experiment-analysis-prerequisites-hypothesis-boundaries.md`.

Direct suppliers opened for definitions, exact statements, hypotheses and arguments: all 33 distinct suppliers in the two inventories. The sole in-run supplier is `items/lem-em-bounded-error-model-comparison.md` (batch 16, draft), whose complete argument was checked, including its mean-value and continuity targets. The other 32 direct suppliers are these pinned published imports:

- `def-abs-value`, `lem-of-abs-value`, `def-norm-and-normed-space`, `def-injection-surjection-bijection`, `lem-standard-basis-of-f-n`, `thm-of-square-roots`, `def-euclidean-inner-product`, `def-metric-continuity`.
- `def-interval`, `def-neighbourhood-r`, `def-open-and-closed-in-r`, `def-limit-point-r`, `def-function-limit`, `def-continuity-real`, `lem-real-and-metric-notions-agree`.
- `def-vector-valued-functions-limits-and-continuity`, `def-directional-and-partial-derivatives`, `def-ck-and-multi-index-notation-in-several-variables`, `def-jacobian-matrix-and-gradient`, `def-total-derivative-in-euclidean-space`.
- `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-componentwise-limits-and-continuity`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `def-ck-euclidean-maps-and-diffeomorphisms`, `def-derivative`.
- `thm-algebra-of-continuous-functions`, `thm-algebra-of-derivatives`, `thm-chain-rule-for-total-derivatives`, `lem-derivative-of-a-power`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `thm-gradient-represents-directional-derivatives-and-steepest-ascent`, `thm-metric-continuity-characterisations`.

Additional published targets opened: `lem-of-triangle-inequality`, `cor-differentiable-implies-continuous`, `cor-mean-value-theorem`, `def-vector-valued-derivative-and-integral`. All supplier IDs above name `items/<id>.md`. Definitions and the direct supplier material were read before the owned theorem; additional supplier citations were followed when checking their arguments. This is a focused supplier-use review, not a recursive whole-library audit. All 36 opened published snapshots were checked against their `research/math-imports.json` raw SHA-256 values and matched.

## Independent deductions checked

The theorem is a deterministic mathematical result, not a statistical uncertainty estimator. Its data are stipulated simultaneous inequalities. The open interval contains zero and a second point; its order-convexity permits the closed segments needed by the bounded-error lemma. The affine map has derivative $h\mapsto hu$. The $C^1$ hypothesis supplies all first partial derivatives continuously on the open domain, hence total differentiability. The chain rule gives $g'(\theta)=\langle\nabla F(\theta_0+\theta u),u\rangle\ge m>0$ for $g=F\circ\gamma$; the composite partial derivatives and their finite linear combination are continuous. Thus the exact bounded-error lemma applies at scalar centre zero. Norm homogeneity gives $\|\theta u\|_2=|\theta|$. No probability, measured precision or choice principle is introduced.

The example's compatible set for $F(\theta)=m\theta$, $m>0$, $\hat y=s=0$ is precisely $[-\delta/m,\delta/m]$. Both endpoints attain the bound; they coalesce at zero when $\delta=0$. For the alternative zero function every real parameter is compatible with the same bounds. Consequently no finite parameter bound follows without a positive response lower bound. These claims and titles are sound; both items keep mathematical classification and purely mathematical prerequisites.

## Repairs and their evidence

1. **Theorem, Facts F9:** made the identification $\mathbb R\cong\mathbb R^1$ explicit using $t\mapsto(t)$, the function on $\{0\}$ with value $t$. This supplies the convention used by ordinary/total derivatives and the notation $e_0=1$. Evidence: `def-vector-valued-functions-limits-and-continuity`, final dimension-one Remarks paragraph, plus the standard-basis and Euclidean-norm definitions already opened. Added the matching F9 contract citation. No theorem Statement was changed.
2. **Theorem, Proof 4.1 tags:** added `step 2.1`, the explicit affine component identity used to show the quotient is identically $u$. The contract already listed this input; the repaired tags now match the written argument.
3. **Theorem, second Remarks bullet:** replaced the false description that unit length enters “only” the final length identity. Steps 1.3 and 1.4 both use it for exact distance identities. Also named the actual bounded-error lemma consistently.
4. **Theorem contract, biconditional boundaries:** corrected the claim that F11 was the only equivalence used. Step 2.2 actually uses both directions of the choice-free continuity/open-preimage equivalence, and step 8.1 uses the metric/real dictionary. Retained the correct observation that F11 reverse is unnecessary because the constant vector quotient is checked directly. Updated the dimension-one boundary evidence and synchronized derivation claim text with current steps.
5. **Example, introductory convention:** explicitly identified reals with single-coordinate vectors and verified preservation of distances. This removes the implicit set/type identification in $U=\mathbb R$, $u=1$ and $\nabla F=m$. Its mathematical family and conclusions are unchanged; the example is a B-leaf with no logical consumers.
6. **Example, Verification 1.1:** the old proof inferred $C^1$ from continuity of the derivative without explicitly establishing continuity of the function, although F10's exact definition requires both. Added the immediate epsilon estimate $|F(x)-F(c)|=m|x-c|<\varepsilon$ for $|x-c|<\varepsilon/m$, and the zero-difference verification for the constant derivative. Added `def-continuity-real` as a direct mathematical dependency/role, expanded F10, and added its exact contract citation. This closes a short nonfatal omission without assuming background.
7. **Example, source title:** corrected the locator “section 4.1.2 (linearity and the derivative of the identity)” to section 4.1.1, Example 4.1.3 and Proposition 4.1.7. The retrieved Lebl text places affine derivatives and linearity there; section 4.1.2 is Chain rule. The published mathematical supplier citations and proof remain intact.
8. **Both contracts:** replaced clipped derivation claim excerpts with complete current step claims. Both assigned items already had no `verification.judge` record, so there was no stale record to remove. No judge, audit, publication or self-certification stamp was added.

## External evidence actually retrieved

- [G. L. Luke, Multivariable Calculus notes](https://people.maths.ox.ac.uk/~tillmann/background-multvar.pdf), section 3, Theorem 2, PDF pages 9–10: read the complete two-remainder chain-rule proof on open finite-dimensional domains. Also read Theorem 3 and its coordinate-telescoping proof on PDF pages 10–11. These support the exact calculus hypotheses used here; they do not supply any statistical claim.
- [J. Lebl, The derivative](https://www.jirka.org/ra/html/sec_der.html), section 4.1.1, Example 4.1.3, Proposition 4.1.6 with proof, and Proposition 4.1.7 with proof: checked affine derivatives, differentiability implying continuity, and linearity. This also verifies the corrected source locator.
- [J. Lebl, Mean value theorem](https://www.jirka.org/ra/html/sec_mvt.html), section 4.2.2 Rolle proof and section 4.2.3 Theorem 4.2.4 with complete proof: checked closed-interval continuity, interior differentiability and the resulting intermediate-point equality. This matches the opened local MVT supplier and the draft bounded-error argument.

The retrieval covers these sections and arguments only. Historical PDF-version/page stamps in author notes were not independently re-created, and no whole-book reading is claimed.

## Uneditable defects and required closures

The accompanying findings JSON records the following existing subject IDs only.

- **`em-experiment-analysis-prerequisites-examples`, lines 10–12, first summary paragraph — missing hypothesis, fatal page-summary defect.** It calls the prediction unit-slope but claims attainment of $\delta/m$ without specializing $m=1$. For $F(\theta)=\theta$, $\delta=1$, $\hat y=s=0$, and the admissible lower bound $m=1/2$, the compatible endpoints are $\pm1$, whereas $\delta/m=2$ is not attained. The item uses slope $m>0$. The prose owner should replace “unit slope” by “slope $m>0$”, or explicitly specialize to slope and lower bound both one. This is a claim-level mismatch, not an omitted proof step; B prose is outside reader edit scope.
- **`thm-total-derivative-computes-directional-and-partial-derivatives`, Proof 1.1–2.1, lines 43–45 — unlicensed inference, nonfatal missing zero-direction branch.** The normalization divides by $\|tv\|_2$ for every $v$, although it is unavailable for $v=0$. The exact missing proof is the constant-zero difference quotient, giving $D_0f(a)=0=Df(a)0$; retain the existing argument for nonzero directions. The claim is true, and the omitted branch closes immediately. The assigned consumer uses only nonzero directions $u$ and $1$, so its actual applications are sound. Imported original/snapshot are read-only.
- **`thm-gradient-represents-directional-derivatives-and-steepest-ascent`, Statement and Proof 2.1, lines 29 and 45 — unlicensed inference, nonfatal omitted equality converse.** The proof establishes attainment in the normalized-gradient direction, but does not show it is the only attaining unit vector. Write $w=\nabla f/\|\nabla f\|_2$; equality gives $\langle w,v\rangle=1$, hence $\|v-w\|_2^2=2-2=0$, forcing $v=w$. The opened inner-product/norm supplier supplies the identities and separation. The assigned consumer uses only the proved gradient-pairing identity, not the extremizer characterization. Imported content is read-only.

The final step of the opened continuity corollary explicitly cites its correct earlier step 4.1 in the prose; the additional trailing tag for step 3.1 is not treated as a missing justification. No defective in-run dependency was found. No proposed withdrawal is needed, and no uneditable finding names a reader-changed carrier.

## Page verdicts and handoff

- **A `em-experiment-analysis-prerequisites`: sound conditional result after the recorded repairs.** Page summary is consistent and was not edited. Published supplier omissions require owner routing, but do not obstruct the particular nonzero-excluded directional and gradient-identity applications used here. This is the reader's assessment, not an acceptance stamp.
- **B `em-experiment-analysis-prerequisites-examples`: item sound after the recorded repairs; prose repair required.** The summary's unit-slope wording remains a claim-level blocker for page handoff until its authorized prose owner repairs it.

Validation actually run, every command exit zero:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/thm-em-uncertainty-analysis.md`: unchanged after repair.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/thm-em-uncertainty-analysis.md`: PASS, one checked, zero failing.
- The corresponding reflow and precheck commands for `items/ex-em-experiment-analysis-prerequisites-hypothesis-boundaries.md`: unchanged/PASS, including rerun after the source-locator correction.
- Final post-edit batched `node tools/physics-support/proof-layout.mjs items/thm-em-uncertainty-analysis.md items/ex-em-experiment-analysis-prerequisites-hypothesis-boundaries.md`: two items, 18 steps, zero defects. An earlier layout run preceded discovery/correction of the citation locator; the stated final run follows the last item edit.
- `node tools/physics-support/rendercheck.mjs` with exactly the two assigned item paths and two assigned page paths: four files, no YAML, KaTeX or delimiter defects.
- SHA-256 comparison for all 36 opened published supplier snapshots against the import ledger: all match.
- Parsed the findings JSON, checked its field sets and existing subject paths, verified dependency-role coverage for both owned carriers, and matched every current batch-contract citation quote against its declared source section after whitespace normalization: all checks passed.

No unrelated frontier gate or whole-corpus validator was run. Review did not cover downstream empirical-testing items or independently audit every transitive imported prerequisite. Source-reading claims are limited to the passages listed above. Changes are limited to the two assigned drafts, their batch proof contracts and this reader's requested outputs. Next action: Step 5b lead routes the three uneditable subjects, especially the B-page prose correction; ordinary independent review/judgment gates remain owed.

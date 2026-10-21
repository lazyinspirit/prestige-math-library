# Batch 5 Step 3a adjudication

Run: inverse-problems-knot-theory-all-109-2026-10-19. Group: batch-5.

Exactly two routed obligations: refuter:5:2 and refuter:5:1. No reader repairs: all pre/post reader fingerprints agree. No touched, page, reader or foreign gate decisions owed.

## Completed level 2 review

`def-ip-noise-level-free-parameter-rule`: refuter:5:2 confirmed_fatal, citation misattribution. Corrected metadata “Ferdi Asherry” and reference label “Asherry” to Ferdia Sherry/Sherry. The finding paraphrases “Ferdia Asherry”; the actual current metadata said “Ferdi Asherry”. Both misidentify the author. Independently read https://ferdiasherry.com/LectureNotes2024.pdf title page and §3.2.3 (PDF pp. 1, 34), and https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf Definition 4.4 (PDF p. 34). Read the full definition and actual supplier `def-ip-compact-linear-inverse-model`: fixed K and reconstruction family, positive parameter for all z including zero, no exact datum or noise-bound input. No mathematical clause or consumer interface changed. No diagram. Repair confidence 1. Closed ledger row: `ipkt109-b5-3a-sherry-refuter-2`. Focused checks passed (details below).

Dependency-order review and closure are complete; details follow.

## Completed level 3 theorem review

`thm-ip-bakushinskii-veto`: complete risk review recorded in the owning contract. Steps 1.1–2.1 give exact recovery on D(K†) and then epsilon-radius continuity using the per-datum error limit, without a uniform-in-y assumption. Reviewed all four dependencies and the Moore–Penrose construction proof. Clason Theorem 4.8 and complete proof/discussion, PDF pp. 37–38, and Sherry Theorem 3.12 and complete proof, PDF p. 34, agree. The statement is a conditional contradiction under its discontinuity hypothesis, which is sound. Zero noise belongs to all positive balls; no assumption on continuity of individual reconstruction maps is needed. Found and corrected the identical author misattribution in this owned risk-review carrier (additional local defect, no extra routed decision). No mathematical interface changed; no diagram. Repair confidence 1.

## Completed level 3 counterexample review

`cex-ip-noise-underestimation-truncated-svd`: refuter:5:1 confirmed_fatal for the author misattribution; metadata/reference label repaired to Ferdia Sherry/Sherry. Repair confidence 1. All four steps and all 14 dependencies reviewed. Finite-coordinate ranges supply ordered bases, ||K-K_N||≤1/(N+1), real ell² is Banach, and Countable Choice meets the compact norm-limit supplier. The inverse domain and weighted-coordinate formula follow from the range and its zero orthogonal complement. Fixed-alpha truncations are bounded and converge pointwise on the inverse domain; the empty truncation for alpha>1 is valid. At zero, z_j=e_j/j has norm 1/j, cutoff j² includes coordinate j, and reconstruction e_j has error one for every j≥1. Alpha is positive at zero and nonzero data. Complete risk review recorded. Manifest source metadata synchronized for all three citation corrections. No mathematical interface or provenance classification changed; no diagram.

Closed counterexample ledger row: `ipkt109-b5-3a-sherry-refuter-1`. The separately discovered theorem citation defect is closed as `ipkt109-b5-3a-sherry-risk-theorem`; it adds no invented routed obligation.

## Completed level 7 review

`ex-ip-stable-restricted-class-bakushinskii`: both steps and all eight direct suppliers checked, including the actual source-ball theorem proof, SVD proof, Moore–Penrose construction and relevant source-ball, multiplier, minimum-norm and interpolation prerequisites. The hypothesis rho>0 and infinite rank gives positive singular values tending to zero. Kv_j tends to zero but its pseudoinverse is the unit vector v_j. The nu=1 bound is sqrt(rho delta), including delta=0; x_j=rho s_j v_j, from w_j=rho v_j, attains it at rho s_j². Source elements lie in the kernel orthogonal complement, making the centered modulus definition applicable. Countable Choice is retained; neither finite/zero-rank cases nor universal reconstruction convergence are asserted. Clason Theorems 4.11–4.12, PDF p. 40, checked against the local supplier's stronger explicit zero/finite-rank qualifications. Complete risk review recorded; no defect or diagram.

## Evidence binding and edit boundaries

Before reflow, reversing only the author substitutions reproduced the original raw item SHA256 values in both reader snapshots: definition `4bb96c0bf1d53c73be19261d7ddca112eab6da682e6deb1843c1494112c2aa79`, counterexample `37ebe1922516c317ee0ccaf5c58564a64b19cbbfaa6c58dee80907a1a05c08b1`, theorem `c8695c3db135eacc15cbeff5146dbde64481575a0a0a75eb8bc4d9f5e571b601`. These are raw snapshot fingerprints, not claims that the separately recorded refuter observed hashes have that encoding. No missing historical preimage resolution is needed for these unchanged reader carriers. The findings' author wording has the small discrepancy described above, but the source misattribution is independently established in the actual bytes.

The only substantive edits correct the three author citations in item metadata/reference labels and the corresponding manifest source metadata. Reflow joined existing wrapped prose in the theorem and counterexample; numbered arguments and mathematics remain unchanged. Provenance classifications, dependencies, definitions/statements, status, contracts' mathematical derivations and page files are preserved. The contract receives the three specific current risk reviews. No material proof rewrite or judge record removal was necessary. The frontier dependency ledger records owned consumer dispositions; no supplier interface changed, so no propagation repair was needed. No published content was edited, and no new published mathematical defect or outside-batch repair need was identified. No diagram occurs in the reviewed carriers and these arguments require no added diagram.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-5.proof-contracts.json`: all five items routed, three CRITICAL, zero errors.
- `node tools/tsx-run.mjs tools/reflow.mts items/def-ip-noise-level-free-parameter-rule.md items/thm-ip-bakushinskii-veto.md items/cex-ip-noise-underestimation-truncated-svd.md`: definition unchanged; theorem/counterexample reflowed.
- After final item edits and reflow, ran once: `node tools/proof-layout.mjs items/def-ip-noise-level-free-parameter-rule.md items/thm-ip-bakushinskii-veto.md items/cex-ip-noise-underestimation-truncated-svd.md`: three items, six steps, zero defects.
- `node tools/tsx-run.mjs tools/precheck.mts` on those three explicit paths with `--json`: two proofs passed, zero failures; definition not applicable.
- `node tools/rendercheck.mjs` on the same three paths: all three passed.
- Final owning-contract risk report with `--require-reviewed`: all three CRITICAL risk reviews complete, five items routed, zero errors.
- `node tools/defect-ledger.mjs append --file /tmp/ipkt109-b5-ledger-rows.json`: three validated closed rows appended under serialized append/render; generated ledger refreshed.

Live status was recomputed from `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19`; batch 5 adjudication was still missing and no worker was in flight. Git HEAD was `ace06e03bc`. Existing unrelated workspace changes were left intact. No stage transition, gate battery, judgment, stamping, certification, publication, dispatch or commit was performed.

Both required routed decisions are `confirmed_fatal` with one closed defect row each and repair confidence 1. There are no unresolved mathematical obligations, risk reviews or owner blockers in this dispatch. The engine owns current hash stamps and subsequent gates.

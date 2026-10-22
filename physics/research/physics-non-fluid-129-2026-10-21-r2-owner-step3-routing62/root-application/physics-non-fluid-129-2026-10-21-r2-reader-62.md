# Step 3a reader report — batch 62

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader

## Opened inventory

Assigned pages:

- library/quantum-field-theory-mathematics/qftx-bv-brst.md (A)
- library/quantum-field-theory-mathematics/qftx-bv-brst-examples.md (B)

Assigned items:

- def-qftx-abelian-local-brst
- lem-qftx-brst-nilpotence-doublets
- def-qftx-brst-relative-local-cohomology
- prop-qftx-anomaly-obstruction
- ex-qftx-doublet-removal

Relevant supplier context opened:

- Published page qft-mg01 and item def-qft-qed-gauge-data; the relevant matrix convention in def-qft-dirac-projections; root mathematics definitions def-axiom-of-choice and def-countable-choice.
- Draft page qftx-causal-renormalization, item def-qftx-local-time-ordered-system, and current in-run theorem thm-qftx-scalar-eg-induction (batch 60).
- Relevant scaling context for that theorem: lem-qftx-finite-graph-scaling-degree, thm-qft-finite-scaling-degree-extension, and lem-qft-test-frechet-uniform-scaling-order.
- Out-of-scope direct consumer def-qftx-chiral-anomaly-interface (batch 63), checked because it uses the repaired proposition. Its raw SHA-256 when checked was 0e67b76725bbe6a1f5ab260eb0e8f43121aae25828a002e3168d7cf6e84e3ce2.

## Mathematical review and edits

1. def-qftx-abelian-local-brst: the algebra is over C-infinity(M; C), but the derivation was specified only on field generators and their jets. Its action on the coefficient ring was not stated. Added s f = 0 for every smooth coefficient and identified s as coefficient-linear. This makes the derivation unique on the stated algebra and supplies the coefficient case used by the nilpotence and local-form definitions.

2. prop-qftx-anomaly-obstruction: changed the counterterm criterion to quantify existence of an admissible b_4. The original sentence could assert that a particular arbitrary b_4 cancels exactly when the cohomology class vanishes. Steps 4.1–6.1 prove the existential criterion: a zero class supplies a primitive, and any primitive that cancels implies a zero class.

3. Updated the two batch-62 proof-contract citations that quote the full def-qftx-abelian-local-brst Definition (the contracts for lem-qftx-brst-nilpotence-doublets and ex-qftx-doublet-removal). Verified both quotations match the revised Definition. No changed item contained a verification.judge record to remove.

4. lem-qftx-brst-nilpotence-doublets: with the coefficient action explicit, s is nilpotent on every generator and coefficient. The finite polynomial decomposition, homotopy identity, and induced cohomology isomorphism follow from the stated doublet hypotheses. The diagram u^j → v^j → 0 matches the maps and is not used as proof.

5. def-qftx-brst-relative-local-cohomology: ghost numbers, form degrees, quotient and the sign convention for s on forms are compatible. The total derivative preserves compact support; the stated identities follow from commuting total derivatives and the coefficient differential.

6. ex-qftx-doublet-removal: s(B^2)=0, s(bar-c B)=B^2, and h(B^2)/2=bar-c B. The example’s limited claim and diagram are sound.

The proposition proof is a conditional formal-algebra argument. Nilpotence of W_hbar gives the leading cocycle; the relative quotient gives the consistency condition and both directions of the existential counterterm criterion. It does not establish a quantum action principle. The assigned items make no empirical or physical claim.

## Source checks

- Barnich, Brandt and Henneaux, Local BRST cohomology in gauge theories, arXiv:hep-th/0002245, section 2.7, equations (2.48)–(2.50), pages 18–19: the antighost/auxiliary pair, independence of other transformations, number operator and contracting homotopy; positive doublet degree is exact. The local proof supplies the finite-polynomial argument explicitly.
- Dragon and Brandt, BRST Symmetry and Cohomology, arXiv:1205.3293, section 3.1, equations (3.1)–(3.14): nilpotent cohomology and the polynomial homotopy argument. For anomaly context, section 2.4, equations (2.62)–(2.66), states nilpotence gives consistency and identifies local anomaly classes modulo BRST and total-derivative counterterms.
- Barnich–Brandt–Henneaux section 2.3, equation (2.23), and section 12.3; Dragon–Brandt section 2.4, equations (2.62)–(2.66); and Schmid, Local cohomology in gauge theories, BRST transformations and anomalies, section 3, support the cited Wess–Zumino/local-cohomology context. The assigned proposition’s abstract implication is proved locally and is not imported from those model-specific discussions.
- Fredenhagen and Rejzner, arXiv:1208.1428, section 7, Theorem 7.2 and equations (81)–(89): the inspected theorem gives exact-degree extensions for punctured distributions of finite real scaling degree and the section describes graph induction. It does not supply the separate scaling-degree-minus-infinity uniform estimate in the current in-run theorem; see the finding below.

## Uneditable findings

1. thm-qftx-scalar-eg-induction, batch 60, Proof step 5.1: for the delta_Gamma = -infinity branch, it asserts a uniform annular Baire estimate for every omega < d, attributing it to the graph supplier. The opened lem-qftx-finite-graph-scaling-degree establishes finite upper scaling bounds but no such Baire estimate. The published thm-qft-finite-scaling-degree-extension and its uniform-scaling lemma require finite real scaling degree. A proof of the minus-infinity estimate or an exact supplier is needed. The immutable batch-60 pre-reader item hash and current raw item hash both equal 85c7e015b264f16fc3c04a5154eef9b83eab0a5ed8fd0ea9e4d171acb8e962bf. The assigned consumer is prop-qftx-anomaly-obstruction.

2. def-qftx-chiral-anomaly-interface, batch 63, Definition paragraph on the local BRST obstruction: the sentence beginning “Under these hypotheses, that proposition states that shifting X by” says a shift by a given b_4 cancels exactly when the class vanishes. The proposition’s corrected criterion is existential; vanishing supplies a suitable primitive, not cancellation by every admissible b_4. This downstream statement needs the existential quantifier or a criterion for the particular b_4. It was outside batch 62 and was not edited.

## Page verdicts

- qftx-bv-brst (A): page carrier, item placement and empty summary are consistent with the batch design. In-scope algebraic repairs are complete. Not fully cleared: its proposition has the unresolved batch-60 scalar-induction dependency finding above.
- qftx-bv-brst-examples (B): placement and empty summary are consistent; the assigned example and diagram are correct after the coefficient-action clarification. Cleared within reviewed scope.

## Validation and blocker

- reflow.mts and precheck.mts completed with exit code 0 for each changed item. The proposition precheck reported PASS; the definition had no proof steps to check.
- proof-layout.mjs items/def-qftx-abelian-local-brst.md items/prop-qftx-anomaly-obstruction.md completed: 2 items, 6 steps, 0 defects.
- No execution blocker. The A-page dependency issue and the batch-63 downstream statement remain for owner routing.

## Coverage note

All assigned pages and items and relevant direct supplier statements were opened. I reviewed the current scalar-induction theorem and the dependencies needed to identify its delta_Gamma = -infinity gap, but did not independently re-prove its full transitive microlocal, covariance and normalization argument. The theorem was opened before its local time-ordering definition supplier; that supplier and the relevant graph/scaling dependencies were then inspected. No whole-chain acceptance is claimed.


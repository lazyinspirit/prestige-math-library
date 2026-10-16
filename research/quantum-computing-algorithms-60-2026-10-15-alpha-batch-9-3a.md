# Batch 9 Step 3a adjudication

Scope: batch 9 only; group `batch-9`. Reader findings are empty; the pre/post snapshot rows are identical. No reader repairs or page obligations are owed.

## lem-qc-finite-isometry-unitary-extension

Reviewed steps 1.1–3.1 and exact F1–F6 suppliers. h,k,e>=1 make padding registers admissible; both ambient dimensions equal hke; first-linear polarization has the correct signs; equal orthogonal-complement dimensions give a bijective isometry, including empty complements. Only finitely many basis choices; no AC. No defect.

## lem-qc-local-gate-wire-embedding

Reviewed steps 1.1–3.1 and F1–F6 suppliers. Distinct ordered wires and sorted complement give a basis bijection; tensor adjoint/composition prove U tensor I unitary; conjugation and spanning prove the asserted action and uniqueness. r=n gives the empty complement tensor C; n=0 is excluded by r>=1. No AC or gate synthesis claim. No defect.

## def-qc-circuit-denotational-semantics

Reviewed Definition and steps 1.1–2.1 against circuit syntax, embedding, disjoint-support coefficient proof and unitary-group statement. Rightmost layer acts first; adjacent swaps of commuting factors preserve layer action. Empty layers/circuits and zero wires give identity on the one-dimensional empty register. No defect.

## lem-qc-instrument-output-space-is-nonzero

Reviewed steps 1.1–2.1 and instrument, dimension, coordinate, matrix and trace definitions. Nonzero H gives tr(I_H)=dim H>0; K=0 would force every output trace to zero, contradicting the instrument identity on I_H. Finite basis choice only. No defect.

## thm-qc-instrument-kraus-normalization

Reviewed both steps, instrument trace identity for every operator, Kraus definition, trace linearity, rectangular trace cyclicity and matrix-unit nondegenerate trace pairing. Taking A=M and B=XM dagger gives the typed trace equality; cyclicity then permits the nondegenerate pairing. Empty branch lists and zero maps are allowed; the total cannot vanish. Refuter:9:2 is false positive: F3 actually cites thm-trace-of-ab-equals-trace-of-ba, whose Statement explicitly covers rectangular sizes and zero dimensions. Current raw bytes equal both frozen reader snapshots. No repair.


## lem-qc-coherent-record-isometry

Reviewed steps 1.1–4.1 and every F1–F13 source. CP-to-Kraus implication is applicable to finite-dimensional spaces; nonzero output lemma makes padding extension admissible. Pad finitely many lists to r>=1 even for zero branches; normalization gives V dagger V=I with first-linear pairing. Observed projections fix a; partial trace contracts j=k and returns the complete branch for all X. Hidden indices remain unobserved. No AC or synthesis assertion. No defect.

## thm-qc-instrument-induces-povm

Reviewed steps 1.1–5.1 and exact F1–F9 statements, Kraus/Choi proof, positive-family and POVM definitions. Each sum of M dagger M is self-adjoint with nonnegative quadratic form; total normalization gives a POVM. Rectangular cyclicity gives the all-operator trace identity, and nondegenerate trace pairing proves uniqueness independently of Kraus representation. Empty Kraus families may be padded by zero; outcome set is nonempty. Refuter:9:1 is false positive: F8 actually cites existing thm-trace-of-ab-equals-trace-of-ba, whose rectangular Statement and finite-double-sum proof justify the use. Current raw source equals both frozen reader snapshots. No repair.


## def-qc-classical-control-and-measurement-circuit

Reviewed Definition and steps 1.1–3.1 against instrument normalization/induced POVM and controlled-access definitions. Observed nonnegative weights normalize; only positive branches are divided. A finite rooted history tree stores observed a, never hidden j. Orthogonal label blocks make B linear, norm-preserving and invertible via block adjoints; control and dilation access remain explicitly required. Zero outcomes and n=0 cause no division or missing block. No defect.

## def-qc-measurement-branch-output-law

Reviewed Definition and steps 1.1–2.1 against instrument, normalization, induced POVM and outcome-law suppliers. Trace weights sum to one, equal induced POVM weights, and normalization occurs only for p_a>0. Zero-probability branches are bottom, not density operators; hidden Kraus indices do not enlarge the outcome set. No defect.

## thm-qc-circuit-inverse-reversal

Reviewed steps 1.1–3.1 against chronological semantics, embedding uniqueness, adjoint algebra, inverse access and resource definition. Reversing both layer chronology and each gate list gives the adjoint product; local inverse embedding is the inverse full-register action on the same ordered wires. Legality/access are explicit hypotheses, occurrence count preserved, costs separate. Empty circuits and empty layers give identity. No defect.

## thm-qc-deferred-measurement

Reviewed steps 1.1–4.1 and all F1–F13 suppliers. Nonzero K and positive record dimensions satisfy the finite-extension lemma; WJ=V tensor b0 extends to every reference. Block expansion gives the amplified Kraus formula on arbitrary operators, not merely product states. Label projection keeps a, hidden partial trace enforces j=k, unit padding contributes trace one, and retained labels have exactly the stated rank-one factor. R=0 gives the unique zero operator; zero weights are not divided. Finite sums/choices only; explicit dilation/control access caveat avoids synthesis and efficiency assertions. No defect.


## thm-qc-terminal-measurement-circuit-equivalence

Reviewed all five steps and exact F1–F5 suppliers. Induct on finite tree height with invariant for every input operator and finite reference; base is empty history. One-stage deferral preserves each label-resolved branch; child operations controlled on orthogonal retained histories cannot mix histories. Inactive finite branches can be padded with identity operations and finite workspace; old hidden environments can remain untouched until terminal trace. Linearity permits unnormalized Y_a and retaining old records in the reference. Equal leaf branches give equal joint terminal-effect probabilities. Zero branches are not normalized; no same-alphabet or cost assertion. No defect.

## ex-qc-deferred-measurement-one-bit

Reviewed Given matrices, six proof steps, F1–F8 and deferred theorem. With basis 00,01,10,11, H on wire 0 gives (00+10)/sqrt(2); diagonal P0/P1 give probabilities 1/2 each. Conditional rays are 00 and 10; X on target changes only the latter to 11. Granted C(X) instead gives (00+11)/sqrt(2), so terminal probabilities are 1/2 on 00,11 and zero on 01,10. Both control branches checked; no hidden index or inferred controlled-access cost. No defect.


## Routed decisions and evidence

- `refuter:9:2`: `false_positive`, closed row `qc60-b9-refuter-2-trace-citation-false-positive`. False positive at F3: the frozen and current carrier cites [[thm-trace-of-ab-equals-trace-of-ba]], not the shortened ID alleged by the refuter. The existing published supplier's Statement explicitly covers A in M_(m x n) and B in M_(n x m), including zero dimensions; its steps 1.1–3.1 prove equality by exchanging finite double sums. The typed substitution A=M_(a,j), B=X M_(a,j)^dagger justifies the branch trace equality, and square cyclicity plus lem-qc-trace-pairing-nondegenerate justifies uniqueness/normalization. Raw item SHA256 7c5756b00049e2f72dc49d215d9884cf601faca054307e34f2b846110ef36268 agrees with both immutable reader snapshots. No content edit or repaired historical delta is involved.

- `refuter:9:1`: `false_positive`, closed row `qc60-b9-refuter-1-trace-citation-false-positive`. False positive at F8: the frozen and current carrier cites [[thm-trace-of-ab-equals-trace-of-ba]], not the shortened ID alleged by the refuter. The existing published supplier's Statement explicitly covers A in M_(m x n) and B in M_(n x m), including zero dimensions; its steps 1.1–3.1 prove equality by exchanging finite double sums. The typed substitution A=M_(a,j), B=X M_(a,j)^dagger justifies the branch trace equality, and square cyclicity plus lem-qc-trace-pairing-nondegenerate justifies uniqueness/normalization. Raw item SHA256 6c1a8aa466cc828e45c9af40293dee44cf72e95a1059efb2ab6aa9ec91453ce8 agrees with both immutable reader snapshots. No content edit or repaired historical delta is involved.

## Sources, changes, and dependency dispositions

The current item Statement/Definition and complete argument were reviewed against each cited local supplier's exact Statement/Definition. Locators are the F-labels and proof steps recorded above and the owning contract's `citations` rows. In particular, the published rectangular trace supplier was read through its complete three-step finite-sum proof. No external source search was needed for these finite-dimensional arguments; no claim is made to have fetched the cited books.

No item or page was edited. All 16 current item raw hashes equal the immutable pre/post reader snapshots, whose item/contract/manifest rows were identical before this adjudication. The refuter observed hashes are carrier fingerprints, not raw item digests. The two findings are rejected against unchanged observed source, rather than disposed of using a later repair. No historical uncertainty or owner resolution is needed.

Changes are the 13 specific `risk_review` records in the batch-9 contract, this report and the task-named decisions file, two closed false-positive ledger rows and the generated ledger view, and current-use evidence for 57 owned item dependency records. The dependency-ledger refresh merged and deduplicated the run inputs. Existing historical evidence and page-only records were preserved. No Statement/Definition changed, so no consumer propagation repair was triggered. No defective published item, proposed withdrawal, outside-scope mathematical defect or escalation was found.

## Local checks and handoff

- `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-9.proof-contracts.json`: exit 0; 13 HIGH/CRITICAL items identified before review.
- The same command with `--require-reviewed`: exit 0, zero errors, all 13 required reviews complete.
- `node tools/defect-ledger.mjs append --file /tmp/qc60-batch9-false-positive-rows.json`: exit 0; two rows appended under the tool's serialization lock and generated view refreshed. These record rejected allegations, not confirmed content defects.
- `node tools/frontier-dependency-ledger.mjs refresh --run quantum-computing-algorithms-60-2026-10-15`: exit 0, refreshed and deduplicated.
- Focused consistency assertions: exactly the two owed obligations, one matching closed false-positive row each, group `batch-9`, 13 complete risk reviews, and all 16 source hashes unchanged. All risk-contract citation files and named source sections exist.

No changed item paths exist, so reflow, item precheck and proof-layout are inapplicable. No judge, stamp, self-certification or gate battery was run. There are no local blockers; the engine owns decision sealing and subsequent gates.

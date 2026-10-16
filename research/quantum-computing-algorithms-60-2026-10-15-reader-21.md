# Step 3a reader report — batch 21

Run: `quantum-computing-algorithms-60-2026-10-15`  
Reader: `reader-21`  
Scope: batch `21`

## Status and blocker

The autopilot status was `running`, in stage `3a-read`. The run reports an existing scaffold blocker: the prerequisite graph rejects construction scheduling item `def-qc-effective-unitary-matrix-input` in batch 12. This blocker is outside batch 21. I found no batch-21 blocker.

## Opened pages and assigned items

Opened both assigned pages:

- A page: `library/quantum-computing/noise-fault-tolerance-concatenation-and-thresholds.md`.
- B page: `library/quantum-computing/noise-fault-tolerance-concatenation-and-thresholds-examples.md`.

Opened all 26 A-page items and the B-page example. The item review followed dependency order:

- Levels 0–1: `def-qc-local-stochastic-fault-set-law`; `lem-qc-local-stochastic-fault-witness-bound`.
- Levels 7–9: `def-qc-code-deviation-and-spread`; `def-qc-finite-channel-location-schedule`; `def-qc-noise-channel-model`; `lem-qc-noise-channel-model-composes-with-circuit-semantics`; `lem-qc-scalar-phase-completes-clifford-t-universality`.
- Levels 10–11: `def-qc-fault-location-path-and-rectangle`; `lem-qc-t1-truncated-exrec-witness-reduction`; `lem-qc-disjoint-fault-location-events-are-independent`; `thm-qc-t1-extended-rectangle-threshold`.
- Level 18: `lem-qc-concatenated-steane-distance-and-transversal-cliffords`; `lem-qc-planar-mw-recovery-failure-yields-half-error-path`.
- Level 19: `lem-qc-encoded-error-instrument-and-cptp-distinction`; `lem-qc-four-round-verified-shor-correction`; `thm-qc-planar-surface-code-iid-z-memory-bound`.
- Level 20: `def-qc-ft-gadget-and-proper-code-contract`; `lem-qc-verified-steane-magic-state-and-injection`.
- Level 21: `def-qc-level-r-good-and-bad-rectangles`; `def-qc-local-stochastic-noise-model`; `lem-qc-verified-steane-initialization-and-readout`.
- Level 22: `lem-qc-recursive-bad-rectangle-probability`; `lem-qc-sparse-fault-path-implies-code-deviation`; `thm-qc-explicit-proper-code-and-universal-gadgets`.
- Level 23: `thm-qc-local-stochastic-concatenated-threshold`; `thm-qc-proper-code-concatenated-threshold`.
- B-page example: `ex-qc-surface-memory-bound-hypotheses`.

I also opened the current batch-21 proof contracts and coverage record, and the direct mathematical suppliers needed to check the assigned arguments: `def-finite-cardinality`, `def-finite-probability-space-and-event`, `def-independent-families-of-event-classes`, `thm-finite-union-bound`, `def-operator-norm`, `lem-operator-norm-is-a-norm`, `def-qc-local-operator-support-and-weight`, `def-qc-exact-recovery-of-a-quantum-code`, `def-qc-quantum-channel`, `thm-qc-channels-compose-and-tensor`, `def-qc-one-qubit-gate-alphabet-and-rotations`, `lem-qc-clifford-t-projective-density`, `lem-qc-irrational-rotation-dense-on-circle`, `lem-qc-pauli-vector-multiplication`, `lem-qc-two-axis-su2-generation`, `def-qc-pauli-matrices`, `thm-qc-pauli-algebra`, `def-qc-stabilizer-distance`, `thm-qc-stabilizer-projector-and-dimension`, `thm-qc-stabilizer-distance-detection-and-correction`, `thm-qc-css-encoding-dimension-and-commutation`, `def-qc-cnot-and-control-target-order`, `def-qc-stabilizer-syndrome-and-logical-operators`, `def-qc-square-planar-surface-code`, `thm-qc-square-planar-surface-code-distance-and-path-count`, `def-qc-classical-control-and-measurement-circuit`, `def-qc-circuit-denotational-semantics`, `thm-qc-knill-laflamme-explicit-recovery`, `thm-qc-css-syndrome-correction`, `alg-qc-stabilizer-encoder-by-symplectic-elimination`, `thm-qc-stabilizer-encoder-terminates-with-quadratic-gate-count`, `lem-qc-cnot-pauli-action`, `lem-qc-hadamard-pauli-action`, `lem-qc-phase-gate-pauli-action`, `def-qc-trace-distance`, `thm-qc-trace-distance-range-and-equality`, and `thm-qc-measurement-variation-at-most-trace-distance`.

## Source check

For the distance-three overlap argument, I opened the primary AGP paper, [*Quantum Accuracy Threshold for Concatenated Distance-3 Codes*](https://arxiv.org/pdf/quant-ph/0504218), and read §5.2.1–§5.2.2 (PDF pp. 14–17). The relevant passage defines the nested truncation boundary and completes amputated ECs with ideal ECs (§5.2.1, pp. 14–15); it then retains syndrome registers in the decoder, factors a good rectangle into ideal data action and syndrome-only action, and models a bad rectangle as a faulty logical operation (§5.2.2, pp. 15–17). The assigned lemma supplies its own port, boundary, and witness proof under explicit local gadget conditions; I used AGP as source context, not as a substitute for those local arguments.

## Edits and evidence

- `lem-qc-verified-steane-magic-state-and-injection.md`: added the current proof step 8.1 expanding each branch of an arbitrary destructive one-qubit factory measurement into computational-basis readout terms. The terms differ only at the faulty coordinate; with the admitted input error they decode to the same logical branch, while fault-memory coefficients remain on the memory factor. Renumbered later steps and references. Updated its batch-21 and aggregate proof-contract derivations, citation uses, and single-fault boundary evidence. The noise definition permits arbitrary CPTP maps at measurement locations and treats measurement/reset replacements as channels on their declared registers; the old wording that a measurement fault “contributes at most one changed physical readout bit” did not justify that generality.
- `lem-qc-verified-steane-initialization-and-readout.md`: added the current proof step 3.1 with the corresponding Kraus-row expansion for an arbitrary destructive data readout. It establishes that all coherent terms share the same logical measurement bra and encoded output. Renumbered later steps and references. Updated its batch-21 and aggregate proof-contract derivations, citation uses, and single-fault boundary evidence.
- Neither changed item had a `verification.judge` record to remove. Existing hash-bound boundary-review entries in the proof contract were retained as historical evidence; they remain bound to their recorded pre-repair item bytes.

Validation after the final edits:

- `tools/reflow.mts`: both changed items reported unchanged.
- `tools/precheck.mts --json`: each changed item passed, with 1 checked and 0 failed.
- `node tools/proof-layout.mjs items/lem-qc-verified-steane-magic-state-and-injection.md items/lem-qc-verified-steane-initialization-and-readout.md`: 2 items, 20 steps, 0 defects.

## Page verdicts

- `noise-fault-tolerance-concatenation-and-thresholds` (A): the page objective and summaries preserve the items’ hypotheses and distinctions. In particular, it separates the conditional gadget threshold, the correlated local-stochastic branch, and the ideal-syndrome planar memory bound; it does not extend the memory estimate to a faulty-gate threshold. Verdict: acceptable as draft page prose.
- `noise-fault-tolerance-concatenation-and-thresholds-examples` (B): the summary confines the example to the ideal-syndrome memory theorem. The stated $d=5$, $\epsilon=1/144$ geometric sum evaluates to $\frac38(1-2^{-46})<\frac38$. Verdict: acceptable as draft page prose.

## Unedited defects and remaining issues

No confirmed defect remains in an uneditable assigned or dependency item. No withdrawal is proposed. The only blocker observed is the run-level batch-12 scaffold blocker recorded above.

## Coverage note

All assigned batch-21 pages and items were opened. I inspected the direct mathematical suppliers used for the batch claims, but did not independently re-fetch every source listed in the batch coverage record or re-audit every supplier’s transitive dependency closure. The AGP §5.2 passages above were checked directly; no unresolved mathematical uncertainty remains in the reviewed batch-21 claims.

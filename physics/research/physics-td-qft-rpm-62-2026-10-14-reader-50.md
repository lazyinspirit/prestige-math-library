# Step 3a reader report — batch 50

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Date: 2026-10-15

## Scope and opened inventory

The current run status showed Step 3a reading in progress, batch 50 without a reader artifact, and no active writer. I reviewed the batch manifest, reader brief, and batch-50 proof contracts as navigation and review evidence, not as verdicts.

### Pages

- `qft-mg02` — `library/quantum-field-theory-mathematics/qft-mg02.md` (A page, draft). The summary accurately describes the fixed finite-graph scope and discloses the conditional batch-37 Fock/CAR inputs.
- `qft-mg02-examples` — `library/quantum-field-theory-mathematics/qft-mg02-examples.md` (B page, draft). The summary accurately describes its state witness, charge-sector counterexample, and selection example, including their conditional scope.

### Assigned items, in dependency order

- Level 2: `lem-qft-finite-mode-occupation-basis`.
- Level 3: `def-qft-compact-lattice-gauge-data`.
- Level 4: `lem-qft-lattice-gauss-projection`; `lem-qft-lattice-hamiltonian-selfadjoint`.
- Level 5: `lem-qft-lattice-physical-evolution`; `lem-qft-lattice-local-gauss-flux`; `ex-qft-qed-nonempty-gauss`.
- Level 6: `lem-qft-lattice-ward-identities`; `lem-qft-qed-gauss-localization`; `cex-qft-qed-compact-charge-sector`.
- Level 7: `lem-qft-lattice-ward-contact`; `ex-qft-qed-ward-selection`.

I checked each current item carrier, including its title, metadata, statement or definition, facts, proof/construction, witnesses, computations, references, and relevant proof-contract rows.

### Mathematical suppliers opened

- Current-run batch-37 drafts: `def-qft-fock-and-test-spaces` and `lem-qft-fock-ccr-car`. Their actual Fock-space and CAR interfaces match the finite-dimensional matter space used in batch 50. Both remain drafts without current Step-1 readiness evidence; batch-50 claims that use them remain conditional, as stated in the carriers.
- Choice: `def-axiom-of-choice` and `def-countable-choice`.
- Tensor and antisymmetric-sector results: `lem-nrqm-composites-hilbert-tensor-construction`, `lem-nrqm-composites-bounded-tensor-maps`, and `lem-nrqm-composites-permutation-sector-projections`.
- Fourier and dynamics: `thm-fourier-basis-and-parseval-on-the-n-torus` and `thm-stone-one-parameter-unitary-groups`.
- Operator terminology used by the CAR construction: `def-unbounded-linear-operator-domain-and-graph`, `def-densely-defined-closed-and-closable-operator`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-orthogonality-and-orthogonal-complement`, and `lem-orthogonal-complement-is-closed`.

## Review findings and edit

The finite-mode occupation basis, rotor/Fock basis construction, electric shifts, Gauss multipliers, normalized gauge projection, nonempty fixed-background sector, Hamiltonian self-adjointness argument, unitary evolution, regional flux identity, selection rules, time-ordering contact calculation, conditional continuum argument, and all three examples/counterexamples are mathematically sound under their stated hypotheses. I found no false physical or empirical claim; these items make conditional mathematical claims and do not report measurements.

I repaired one unsupported operator assertion in `def-qft-compact-lattice-gauge-data`. The Definition gave the maximal coefficient domain for each (E_e), then asserted without proof that (E_e) is self-adjoint with spectrum ℚ. I added a coefficient-space adjoint-domain calculation and the bounded diagonal resolvent for each (z\notin\mathbb Z), preserving and establishing the original claim. The batch-50 proof contract now records steps 1.1 and 2.1. The item had no `verification.judge` record to remove.

Checks on the changed item:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-qft-compact-lattice-gauge-data.md` — completed.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-qft-compact-lattice-gauge-data.md` — PASS, one item checked.
- The proof contract parses as JSON and includes the two new derivations.
- The required `node tools/physics-support/proof-layout.mjs items/def-qft-compact-lattice-gauge-data.md` invocation failed before layout checks: the spawned renderer could not resolve `@/components` from `web/components/library/ItemBody.tsx` (`ERR_MODULE_NOT_FOUND`). This is a tooling/runtime blocker; I did not modify the renderer.

No other confirmed defects remain in this assigned batch or its inspected suppliers. No B-page prose or out-of-scope carrier was edited.

## Source and coverage limitations

I opened the full arXiv HTML for Emonts and Zohar, especially §§2.1–2.4; it supports the cited background on compact link variables, integer electric labels, Gauss generators, fermionic matter, and gauge-invariant Hamiltonian terms. The Kogut PDF URL timed out in the direct open attempt. The APS record confirms the article identity and bibliographic locator, but the full article text was access restricted, so I did not independently verify the cited §VI.C pages in this pass. I found no evidence that the citation is inaccurate, and none of the batch's mathematical proofs relies on it as a proof source.

## Page verdicts

- `qft-mg02`: **pass with the recorded definition repair**. The page summary is accurate, and all nine listed mathematical items are supported under their declared hypotheses. The conditional draft-supplier status is accurately disclosed.
- `qft-mg02-examples`: **pass**. All three examples/counterexamples follow from the cited assigned lemmas and preserve the finite-regulator scope. The page summary is accurate.

## Blocker

The proof-layout renderer did not complete because its spawned Node process could not resolve the web workspace's `@/components` alias. The command was attempted once as required; layout acceptance remains unverified until that runtime path is available.

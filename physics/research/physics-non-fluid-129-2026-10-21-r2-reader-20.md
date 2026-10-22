# Step 3a reader report — batch 20

## Inventory reviewed

Assigned pages: `emg-fx05` and `emg-fx05-examples`.

Assigned items, reviewed by their logical dependency order:

1. `def-emg-fx-linearized-electrovac`
2. `lem-emg-fx-linearized-hodge`
3. `prop-emg-fx-gauge-linearized-solutions`
4. `lem-emg-fx-local-linear-wave-control`
5. `ex-emg-fx-stationary-charge-mode`

The relevant direct supplier items opened for the claims were `def-countable-choice`, `def-emg-electrovacuum-cauchy-system`, `def-emg-xs-geometric-electrovac`, `def-emg-xs-rn-data`, `lem-emg-lorentz-hodge-calculus`, `def-gr-harmonic-gauge-and-reduced-equations`, `def-gr-periodic-torus-and-sobolev-spaces`, `lem-emg-fieldstrength-positive-symmetric-reduction`, `lem-gr-contracted-commutator-identity`, `lem-gr-reduced-einstein-principal-part`, `thm-gr-second-bianchi-and-divergence-free-einstein`, `def-exterior-derivative-by-the-invariant-vector-field-formula`, `def-gr-curvature-tensor-and-derived-tensors`, `def-gr-metric-selected-connection`, `def-pullback-of-a-differential-form`, `thm-local-coordinate-formula-for-the-exterior-derivative`, `prop-coordinate-formula-for-the-lie-bracket`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `thm-emg-xs-rn-verification`, and `thm-emg-xs-kn-verification`. I checked the assigned pages’ required page IDs as placement context; the assigned pages have empty bodies under the current compact page layout.

Run evidence reviewed as context, not as a verdict: the batch-20 manifest, proof contracts, cross-batch dependency record, coverage record, batch notes, and the batch-20 Step-2 review/repair reports. The current item text was judged independently.

## Mathematical review and page verdicts

**`emg-fx05` — accepted after the repair recorded below.** The definition distinguishes the geometric-normalized two-form from the SI field convention, defines the residuals on an open fixed domain, and correctly limits the Reissner–Nordström/Kerr–Newman modes to the verified Λ=0 sector. The Hodge-variation formula follows by differentiating the inverse metric and volume density. Pullback naturality in the proposition is proved from the local tensor, connection, Hodge, and exterior-derivative definitions; the proposition does not claim a classification of the linearized kernel. The finite-slab estimate is conditional on the displayed smooth symmetric matrices and positive time matrix. The Maxwell and harmonic subsidiary arguments are separate from that estimate and make no existence, decay, or nonlinear-stability claim.

The proposition’s TikZCD square has the correct pullback direction, residual maps, and zero residuals on the bottom row. Its proof is independent of the diagram. No additional diagram is required by the assigned exposition.

**`emg-fx05-examples` — accepted.** The parameter interval is common to the fixed exterior, (f_\lambda>1/2) on the stated domain, and differentiation gives the displayed smooth nonzero electric perturbation. With the stated outward orientation, the Hodge calculation gives (q_e(S_r)=q(\lambda)), hence the variation is (\ell_*>0). This is a mathematical counterexample to unqualified componentwise decay, not an empirical claim.

The two page carriers have the correct assigned placements and companion relation. Their empty bodies contain no summary claims requiring repair.

## Repair made

In `items/lem-emg-fx-local-linear-wave-control.md`, Fact F5 had attributed the identity relating (d(\star_g\mathcal F)) to (\nabla_a\mathcal F^{ab}) to `lem-emg-lorentz-hodge-calculus`, whose Statement does not contain that identity. Fact F5 now cites the Hodge component formula from that supplier, and proof step 2.1 derives the divergence identity locally from the volume-tensor formula, the Levi-Civita connection, and the alternating-tensor contraction. This closes the missing inference without relying on an unexposed intermediate result from another proof.

In the same item’s proof step 1.3, I added the one-line trace consequence (S=4\Lambda), hence (\mathscr E=0), before the later Bianchi argument uses the vanishing background residual. I adopted the precheck’s canonical phase numbering by moving the divergence derivation to step 2.1, shifting the energy commutator estimate to step 2.2, and updating all affected references. The item had no `verification.judge` record to remove. I updated the affected proof contract’s F4/F5 excerpts and step 1.3, 2.1, 2.2, 3.1, and 5.1 records.

Checks after the final edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-emg-fx-local-linear-wave-control.md` — reflowed.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-emg-fx-local-linear-wave-control.md` — PASS, 1 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/lem-emg-fx-local-linear-wave-control.md` — 1 item, 8 steps, 0 defects.

## Uneditable contract findings

The assigned item arguments are supported by the actual supplier texts, but four contracts for unedited items retain supplier excerpts that stop before the specific definition or identity they purport to document. Those contract entries are outside the authorized item/page write scope, so they remain in the findings JSON for owner routing:

- `def-emg-fx-linearized-electrovac`: the `supplier_excerpts` for `def-countable-choice`, `def-emg-electrovacuum-cauchy-system`, and `lem-emg-lorentz-hodge-calculus` quote only the opening lines; they omit respectively the AC\(_\omega\) formulation, the SI electromagnetic-field convention, and the Hodge characterization/component formula relevant to the consumer use.
- `lem-emg-fx-linearized-hodge`: contract citation F1 quotes the opening of the Hodge supplier Statement, before the Hodge characterization and component formula used by steps 1.1 and 2.1.
- `prop-emg-fx-gauge-linearized-solutions`: contract citations F2 and F3 for `def-pullback-of-a-differential-form`, `def-gr-curvature-tensor-and-derived-tensors`, and `prop-coordinate-formula-for-the-lie-bracket` stop before the displayed pullback, curvature, and Lie-bracket formulas used by proof step 1.1.
- `ex-emg-fx-stationary-charge-mode`: contract citation F3 quotes the oriented-sphere setup from `def-emg-xs-geometric-electrovac` but omits the electric-flux definition used in Verification 3.1.

These are nonfatal contract-trace defects: the exact formulas are present in the opened supplier carriers, and I found no remaining mathematical gap in the assigned item arguments.

## Source checks and coverage limits

I consulted the cited source passages at [Carroll, *Lecture Notes on General Relativity*, Chapter 1 equations (1.87)–(1.88), Chapter 6 equations (6.10)–(6.14), and Chapter 7 equations (7.110)–(7.112)](https://arxiv.org/pdf/gr-qc/9712019v1), [Giorgi, *The linear stability of Reissner–Nordström spacetime for small charge*, Sections 6.1–6.2](https://arxiv.org/pdf/1904.04926), and [Friedrich and Rendall, *The Cauchy Problem for the Einstein Equations*, Section 3.1](https://arxiv.org/pdf/gr-qc/0002074). The local proofs, not the cited stability results, establish the assigned conclusions. Giorgi’s small-charge asymptotic-decay theorem is not used as a supplier for the finite-slab estimate.

I reviewed all five assigned items and both assigned pages, and the direct mathematical suppliers needed for their arguments. I did not re-audit the full 1,774-item transitive prerequisite closure or re-certify the published suppliers. No assigned page defect or remaining item-level proof defect was found; no blocker remains.

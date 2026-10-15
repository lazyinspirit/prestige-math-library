# Batch 38 notes — Scalar future mass-shell measure and test restriction

Run physics-td-qft-rpm-62-2026-10-14, role **beta**, batch **38**, pair
qft-mf02 (A, order 515) and qft-mf02-examples (B, order 516), category
quantum-field-theory-mathematics, library mathematics. The binding
owner-authoring direction was read before writing. All mathematics is
conditional on its stated conventions and supplier interfaces; no empirical
observation or measurement claim is made.

## Inventory and dependency levels

The A page contains seven items, in supplier-first order:

- def-qft-scalar-mass-shell — level 0.
- lem-qft-mass-shell-measure-invariant — level 1.
- lem-qft-mass-shell-test-range-dense — level 1.
- lem-qft-fock-unitary-lift — level 1.
- lem-qft-smeared-free-scalar — level 3.
- lem-qft-scalar-causal-commutator — level 4.
- lem-qft-scalar-local-weyl-algebra — level 5.

The B page contains ex-qftmath-spacelike-vacuum-correlation — level 6.
The additional local A-page results are the Jacobian proof of shell-measure
invariance, density of shell test restrictions, and the general unitary Fock
lift. They close prerequisites needed by the reserved claims; the full
conditional proofs are written before any consumer uses them. Eight items
across the pair are below the 100-item page cap.

Levels use the current batch-37 manifest's actual item levels: the Fock/test
definition is level 0, CCR level 1, and Segal and second-quantized spectrum
lemmas level 2. Published mathematical suppliers are outside this run and do
not raise item levels. The shell definition has no in-run item supplier and
is level 0; each later item is one plus the maximum level of its in-run item
suppliers. The page/batch level remains 1 because batch 38 depends on batch
37. Batch-level evidence is
in research/physics-td-qft-rpm-62-2026-10-14-batch-dependency-levels.json.
The exact page and item edges are recorded in the adjacent cross-batch ledger.

## Plan conflicts and scope decisions

The track design's original QFT-MF02 reservation says requires QFT-MF01,
while its declared-earlier-prerequisites text and current
research/plan-spec.json both require qft-mf01 and sr-spacetime-primitives.
The current plan controls, so both page carriers and the batch manifest retain
both requirements. The mathematical argument uses only SR definitions about
the affine Minkowski form, time orientation, future cone, causal
classification and inertial charts; it does not depend on the SR page's
physical postulates or SI-unit item.

The design reserves the mass-shell definition, smeared free scalar, causal
commutator, local Weyl algebra, and one B example. Three local A-page
prerequisites were added because the reserved proofs otherwise lack a local
measure-invariance proof, a dense test range/separability proof for the Segal
supplier, and a general Fock unitary lift. No reserved claim was removed or
weakened.

## Supplier-interface comparison

Batch 37 remains in flight. Its current manifest is present, the relevant
item carriers and complete current draft proofs were inspected, and each
consumer records the exact interface used. Those QFT-MF01 carriers are
drafts, not accepted results; the qft-mf01 library page is not yet present.
Accordingly, dependent items are conditional and escalated, and all direct
cross-batch rows remain open.

The actual lem-qft-segal-weyl-domain normalizes
phi_0(h)=(a†(h)+a(h))/sqrt(2) and gives
W(h)W(k)=exp(-i Im<h,k>_2/2)W(h+k). Stale FF2 wording used an unscaled
field. The scalar construction now explicitly uses
Phi_mu(f)=sqrt(2) Phi_Segal(K_mu f) for real tests and
W_mu(f)=W_Segal(sqrt(2)K_mu f); the resulting scalar Weyl phase is
exp(-i Im<K_mu f,K_mu g>_2). The actual QFT-MF01
lem-qft-second-quantized-spectrum interface is also matched: the translation
multiplier is (omega_mu(k),-k), giving phase
omega_mu x^0-k dot x. The QFT-MF01 Poincare helper drafts are not in the
batch-37 page manifest and are not dependencies here; the needed action is
defined and proved locally.

The SR library uses (-+++), while some QFT references and the inspected
QFT-MF01 Poincare draft use the opposite metric signature. Both have the
same Lorentz group. The shell phase is stated directly as
p circ x=omega x^0-k dot x=-eta_{-+++}(p,x), so covariance and signs are
checked against this explicit formula.

## Sources and qualifications

The A page has two independent full-text QFT treatments: Tong's complete
author-hosted lecture notes and Srednicki's complete author-hosted book draft
(explicitly identified as a prepublication draft). Fewster–Rejzner's complete
arXiv article supplies an independent algebraic treatment of causal
propagation and Weyl algebras. Dyatlov's complete MIT 18.155 notes supply the
Schwartz Fourier results. Coverage records exact locators, supported items,
dispositions and fetch evidence. Tong and Srednicki use differing sign and
normalization conventions; the local arguments retain the conventions above
and rederive the required formulas.

The mass parameter mu is an inverse-length parameter only; no physical
rest-mass identification is made. The shell apex is omitted when mu=0 and
its measure is shown locally integrable. Fields are Schwartz-smeared
operators on the finite-particle domain, not point fields. The B example is a
strictly positive mathematical vacuum pairing for two chosen tests, not
evidence of a measurement or signaling effect.

## Readiness and blockers

The three items with complete local/published prerequisites are recorded
ready: the shell definition, measure-invariance lemma, and dense-range
lemma. The Fock lift is escalated because its QFT-MF01 Fock definition is a
draft supplier. The smeared field, causal commutator, local Weyl algebra, and
B example are escalated because they depend directly or transitively on
in-flight QFT-MF01 draft carriers. Their complete conditional arguments and
contracts are still authored.

The latest autopilot status recomputation also reports a run-level blocker
unrelated to this pair: duplicate mapping keys in an item dependency-role
YAML (thm-clairaut-schwarz-mixed-partials and
lem-gr-connection-conditions-in-chart-components both repeat
mathematical-premise in items/lem-rpm-einbein-variation-and-equivalence.md).
That unassigned file and the engine state were left untouched. This does not
change the batch's own item graph; the full run status needs the owner-side
YAML repair before live recomputation is available.

## Required checks

Source full-text fetch stamping, proof-layout, proof-contract validation,
manifest/coverage checks, item- and batch-level dependency checks, and final
Step 1 decision records are recorded after the final content pass. Readiness
records describe authoring completeness only; they are not independent
mathematical approval.

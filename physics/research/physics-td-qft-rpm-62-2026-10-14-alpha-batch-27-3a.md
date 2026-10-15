# Batch 27 Step-3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`; group: `batch-27`. Work is limited to batch 27; producer batches 22/24 are read-only. No judgments, stamps or engine transitions are performed.

## Completed item reviews

### `lem-rpm-bmt-transport-algebra`

Checked all four steps against metric compatibility, observer projection and the exact local Picard theorem. The displayed component derivative defines the C2/C1 domain. Linear coefficients are continuous on compact chart segments; exponential bounds and finite chart patching extend the solution. Skew signs yield 1-a-b; arbitrary electric data and a nonzero cross product identify b and a only when alpha is nonzero. Orthogonal initial data are essential for norm constancy. Countable Choice is inherited, not used in coefficient algebra.

### `lem-rpm-body-spin-size-bound`

Checked steps 1.1–3.1 and all ten exact supplier statements. The compact support and pointwise |j|<=e/c bound dominate the cross product by ell e/c. Componentwise integrability and the unit-vector scalarization justify the vector integral inequality. The zero-spin branch is separate, E0>0 licenses division, and no quantum or point-source conclusion follows.

### `lem-rpm-charge-multipole-remainder`

Checked steps 1.1–2.1 against compactness, chain rule, FTC and scalar integral suppliers. Continuous Hessian coefficients on the nonempty compact ball give a finite bilinear norm. The segment remains in the ball, H prime gives the factor one half, signed rho requires its L1 norm, and vector integration is componentwise. A zero extension of rho b from its domain is implicit in the integral; no derivative of the remainder is asserted.

### `lem-rpm-flat-centroid-shift`

Checked steps 1.1–3.1 against exact affine-frame, observer and cross-product suppliers. The affine displacement z-o makes J well typed; p.n=-Mc gamma never vanishes. Contraction yields the stated shift sign and S prime n=0. The inverse velocity construction fills the open disk only for nonzero spin; zero spin gives {0} and the timelike boundary is excluded.

### `lem-rpm-ssc-momentum-identity`

Confirmed refuter:27:2: the smooth-only derivative supplier did not cover C2/C1 data. Added a component definition for arbitrary tensor slots and proved chart independence, contraction rules and metric compatibility in step 1.1. Differentiating S n=0 gives -c gamma p+(En/c)U+T n+S Dn=0; future pairing makes gamma positive without assuming p timelike. The torque sign and powers of c check. Direct consumers are TD closure and hidden momentum, both inside batch 27; neither needs a conclusion change. Repair confidence: 1.

### `lem-rpm-td-local-closure`

Confirmed refuter:27:3 and reused the now-defined finite-regularity derivative from the SSC supplier. Independently checked all five steps: K=mu²Id+S f as a linear map in U; normalization fixes the positive coefficient. Off-constraint contraction gives DC=p(f.C)/mu², a homogeneous linear equation, hence initial C=0 persists. Curvature skewness gives U.f=0 and the identity then p.f=0; spin contraction vanishes. K invertibility and future-timelike W define an open smooth ODE domain; no global continuation or universal invertibility is claimed. S=0 gives geodesic motion. Only the in-batch TD invariants consumer directly uses this interface. Repair confidence: 1.


### `def-rpm-body-moments`

Checked the affine time reparametrization, compact slab support, SI factors 1/c, antisymmetric displacement integrals, local spacelike volume density and transported fibres against the exact normal-neighborhood, geodesic, parallel-transport and finite-box balance statements. No slice independence or derivation of MPD is claimed. The new support and density definitions repair genuine domain ambiguities without adding conservation. The body-model supplier has an external worldline-label finding, reviewed separately below.

### `post-rpm-mpd-truncation`

Source formulation and physical scope reviewed, not treated as a proof. Curvature signs agree with local GR convention; both covariant component derivatives cover C2/C1 data. Multipole force and torque maps specify their base fibres, domain, smoothness and units. J has kg m4 s-2, yielding force and torque dimensions as displayed. Additional moments need constitutive evolution; closure, convergence and arbitrary-body derivation are expressly excluded. The unselected SSC leaves general pole-dipole dynamics underdetermined until an explicit branch is chosen.

### `pthm-rpm-spherical-charge-size-bound`

Checked exact Coulomb shell-energy supplier and monotone convergence against steps 1.1–2.1. Delta_n decreases to ell, R_n increases to infinity, and their closed shells exhaust r>ell; nonnegative energy permits the limit. q=0 is harmless. Positive M,c,ell,epsilon0 license division. The exact support radius and nonnegative remaining energy are explicit assumptions, not consequences of spherical symmetry, and measured SI epsilon0 is a symbolic parameter with inherited empirical qualifications.

### `pthm-rpm-bmt-constraints`

All three local steps and alpha=0 degeneracy check against the BMT algebra. Coefficient signs and orthogonal-norm conservation follow exactly. BLOCKED: post-rpm-bmt-dipole-model lacks a C2/C1 along-curve derivative, and the charged-action-equivalence chain lacks a defined C2 acceleration (reader:27:1; refuter:27:4–6). Local supplier lem-rpm-bmt-transport-algebra defines its own derivative, but cannot repair the outside physical postulate or its action prerequisite. Owning batch 24 must supply the definition and review its consumers; no risk closure is claimed.

### `pthm-rpm-hidden-momentum`

Checked four proof steps against the repaired SSC lemma and the adopted MPD model, which defines the C2/C1 derivative. All fields satisfy the supplier hypotheses. Pirani gives gamma=1, En=mc² and Dn=a/c, hence p=mU+Sa/c². Parallel-observer proportionality has positive coefficient because future pairings are negative. TD removes only the derivative of mu term through S p=0 and retains S Dp. No implicit p=mU or spin-closure theorem is used.

### `pthm-rpm-rest-spin-and-size-bound`

Checked all five steps, uniform-field solution sign, qG=0, zero spin, inverse disk parameterization and Lorentz isometry of the complete rest hypersurface. The polarization and body-spin branches are independent; the latter uses an explicit density-to-spin identification. The local calculations are valid, but the BMT/action prerequisites have the unresolved finite-regularity definitions identified in reader:27:1 and refuter:27:4–6. Preserve this risk hold until producer batch 24 repairs its current carriers.

### `pthm-rpm-td-invariants`

Checked both proof steps against the repaired TD closure and observer projection. The adopted equations meet its open-domain assumptions. Positive-definite rest-space Gram–Schmidt yields S a0=0 under TD and S²/2=sum of spatial squares, so zero initial norm forces zero tensor. This avoids the invalid inference that an arbitrary Lorentz tensor of zero norm vanishes. Constant positive mu then gives p=mu U/c and DU=0. No global extension is claimed.

### `ex-rpm-fixed-versus-scaled-charge`

The fixed q nonzero and finite M branch has a strictly positive radius bound. Substitution of q=lambda q0, M=lambda M0 and ell=lambda ell0 cancels the positive lambda exactly. It is a necessary-condition comparison, not a body construction or a measured result.

### `ex-rpm-bmt-fw-and-g-two`

Checked all three steps: metric symmetry gives alpha kappa=g(a,s); orthogonality removes the second Fermi–Walker term. G=1 cancels the U term, giving a shared generator rather than equality of s and U. q=0 causes no division. The defining BMT postulate still lacks its along-curve derivative and remains an outside batch-24 prerequisite hold; the local algebra is sound.

### `ex-rpm-rest-spin-and-size-bound`

Checked the uniform-field sine/cosine sign by differentiation, including zero polarization and qG=0. Independent body data supply Sstar>0, integrability, support and energy-current bound, so the strict disk claim and its converse apply. No identification of s0 with Sstar is inferred. The polarization branch inherits the unresolved batch-24 BMT postulate derivative definition; the body branch is sound.

### `ex-rpm-spinless-td`

Checked both verification steps against the repaired TD theorem and local admissibility. Zero initial spin remains zero by the positive spatial tensor norm argument; hence f=0 and Dp=0. Constant positive mu gives U=cp/mu, DU=0 and M=mu/c. This is a conditional local branch, not a completeness or material-body derivation.

## Dependency review correction

The initial action-variation concern above was provisional and is superseded by the deeper supplier inspection: `lem-gr-first-variation-of-proper-time` Facts L2 supplies the component derivative on the C2 data of its Statement; proof steps 2.1–4.1 apply the component calculation. Thus refuter:27:4 and refuter:27:6 are false positives. The smooth-only scope of the generic derivative definition does not erase this explicit local formula. No published defect is confirmed and no published content is edited. The BMT postulate lacks this supply path and still needs its own along-curve definition.

## Routed dispositions

| Obligation | Subject | Verdict |
|---|---|---|
| touched:27:def-rpm-body-moments | `def-rpm-body-moments` | accepted_repair |
| touched:27:ex-rpm-bmt-fw-and-g-two | `ex-rpm-bmt-fw-and-g-two` | escalated |
| touched:27:ex-rpm-fixed-versus-scaled-charge | `ex-rpm-fixed-versus-scaled-charge` | reviewed_no_defect |
| touched:27:ex-rpm-rest-spin-and-size-bound | `ex-rpm-rest-spin-and-size-bound` | escalated |
| touched:27:ex-rpm-spinless-td | `ex-rpm-spinless-td` | reviewed_no_defect |
| touched:27:lem-rpm-bmt-transport-algebra | `lem-rpm-bmt-transport-algebra` | accepted_repair |
| touched:27:lem-rpm-charge-multipole-remainder | `lem-rpm-charge-multipole-remainder` | accepted_repair |
| touched:27:lem-rpm-flat-centroid-shift | `lem-rpm-flat-centroid-shift` | accepted_repair |
| touched:27:lem-rpm-ssc-momentum-identity | `lem-rpm-ssc-momentum-identity` | amended_repair |
| touched:27:lem-rpm-td-local-closure | `lem-rpm-td-local-closure` | reviewed_no_defect |
| touched:27:post-rpm-mpd-truncation | `post-rpm-mpd-truncation` | accepted_repair |
| touched:27:pthm-rpm-bmt-constraints | `pthm-rpm-bmt-constraints` | escalated |
| touched:27:pthm-rpm-hidden-momentum | `pthm-rpm-hidden-momentum` | reviewed_no_defect |
| touched:27:pthm-rpm-rest-spin-and-size-bound | `pthm-rpm-rest-spin-and-size-bound` | escalated |
| touched:27:pthm-rpm-spherical-charge-size-bound | `pthm-rpm-spherical-charge-size-bound` | accepted_repair |
| touched:27:pthm-rpm-td-invariants | `pthm-rpm-td-invariants` | reviewed_no_defect |
| page:27:rpm-spin-finite-size | `rpm-spin-finite-size` | reviewed_no_defect |
| reader:27:1 | `post-rpm-bmt-dipole-model` | escalated |
| reader:27:2 | `def-rpm-spacetime-observer-and-worldline` | escalated |
| reader:27:3 | `post-rpm-external-charge-action` | confirmed_nonfatal |
| reader:27:4 | `lem-rpm-charge-gauge-boundary` | confirmed_nonfatal |
| reader:27:5 | `lem-rpm-curved-charge-action-variation` | confirmed_nonfatal |
| reader:27:6 | `pthm-rpm-external-charge-action-equivalence` | confirmed_nonfatal |
| refuter:27:1 | `def-rpm-spacetime-observer-and-worldline` | escalated |
| refuter:27:2 | `lem-rpm-ssc-momentum-identity` | confirmed_fatal |
| refuter:27:3 | `lem-rpm-td-local-closure` | confirmed_fatal |
| refuter:27:4 | `lem-rpm-curved-charge-action-variation` | false_positive |
| refuter:27:5 | `post-rpm-bmt-dipole-model` | escalated |
| refuter:27:6 | `pthm-rpm-external-charge-action-equivalence` | false_positive |

## External supplier evidence

Confirmed nonfatal false regularity label in current batch 22: C2 does not imply smooth. On a small flat interval, (ct, epsilon |t|^(5/2),0,0) is future timelike and C2 but not C3. The exact GR definition admits Ck curves and distinguishes k=infinity. The body-moment consumer uses C2 data and never needs the false smooth-subclass assertion. Producer correction is outside batch 27. Owner must have batch 22 correct the label and review actual consumers; no risk closure of that outside finding is claimed.

The current batch-24 post-rpm-bmt-dipole-model admits a C1 spin section along a C2 curve but supplies no along-curve derivative. The smooth ambient tensor derivative theorem does not define this operation. Local algebra cannot amend the outside physical postulate. Consulted its current carrier, contract, manifest, def-rpm-charge-spin-model and thm-gr-nondegenerate-levi-civita-and-tensor-derivative; owner must route a component/pullback derivative definition to batch 24 and review direct consumers. Risk review remains open.

The allegation misses an explicit earlier component formula: lem-gr-first-variation-of-proper-time, Facts L2, states D_t V^a=partial_t V^a+Gamma^a_bc gamma_dot^b V^c for the C2 curve in its Given/Statement. Its proof steps 2.1–4.1 compute with that formula at C2/C1 regularity. thm-gr-compact-metric-and-timelike-curve-variation(f) imports that exact result, and lem-rpm-curved-charge-action-variation F3 imports it. Thus acceleration has a defined component meaning in this chain despite the narrower generic smooth-curve definition. Direct calculation gives dot U+Gamma UU, and chart transformation follows by the ordinary chain rule. No edits are necessary.

Current gauge-boundary proof: mixed partial symmetry gives d(d chi)=0; chart chain rule and FTC give q[chi(z(b))-chi(z(a))]; fixed endpoints make this constant under variations, and pi shifts by q d chi. Current external action is an adopted local fixed-endpoint timelike variational principle. The curved variation proof uses a finite chart subdivision, retains and cancels scalar boundary terms at internal cuts, and constructs a compactly supported coordinate variation with a uniformly timelike perturbation. Its continuous residual pairs positively with a bump on a nondegenerate interval, proving necessity; zero residual proves sufficiency. The equivalence theorem proves substitution by FTC and maps variation families bijectively under positive C2 parameter changes. All are finite, local and conditional, with no singular self-field evaluation. Their source locators are currently correct.

The external decisions retain producer_batch, consumer_id, original dependency_path, producer_carrier_at_split, immutable producer_pre_snapshot, observed-source binding and observation_basis copied from the frozen scope. No routing/snapshot/report was edited. Four reader citations remain historical_delta_unknown; the current source is not alleged to contain the old locator.

## Sources actually consulted

- [Costa and Natário](https://arxiv.org/html/1410.6443v2), sections 2–3, equations (10)–(16): centroid and MPD context. Local proofs were independently checked with their SI/sign assumptions.
- [Original BMT paper](https://www.ihes.fr/~vergne/LouisMichel/publications/PhysRevLett.2.435.pdf), both pages, equations (3), (5)–(7): flat homogeneous-field scope. Its conventions differ; no curved extension is derived from it.
- [PSI lecture](https://www.psi.ch/en/media/48911/download), p.7: curved TBMT and Fermi–Walker formula with separate EDM term.
- [University of Virginia lecture](https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_71_g-2.html), BMT coefficient section: contextual comparison of the two-term ansatz.
- [Poisson–Pound–Vega](https://arxiv.org/pdf/1102.0529v3), contents and section 18.1, printed pp.96–97, equations (18.3)–(18.7): corrected citation and singular-self-field caveat. No old item preimage was recovered.

## Snapshot comparison and scope

The pre/post snapshots record ten changed item byte hashes; the other six touched obligations are contract changes. At review, current item bytes matched post everywhere except the two locally repaired derivative carriers. Their original snapshots remain unchanged. The reader report supplies the repair history; this review does not claim to have recovered missing raw pre-reader carriers. No original/imported mathematics or outside batch carrier was edited, no new item/page was added, and no published defect was confirmed. All local item prerequisites are mathematical for mathematical results; physical results preserve adopted assumptions and contain no reported measurements.

## Consumer review

Repository item-reference search for every changed supplier found only batch-27 carriers plus `rem-rpm-self-force-status` in batch 30. Independently opened that remark: its first paragraph, F1 and step 1.1 use only smooth finite-body moment definitions and their lack of an asserted point limit, slice independence or self-force law. These uses still match the current definition, so no outside repair is required. Local SSC consumers are `lem-rpm-td-local-closure` and `pthm-rpm-hidden-momentum`; the TD closure feeds `pthm-rpm-td-invariants`. Their actual hypotheses, derivative meanings and conclusions were reviewed; only exact contract quotations needed refresh. Every in-batch BMT, centroid and size consumer was reviewed above, including zero and endpoint branches. No necessary consumer Statement/Definition rewrite remains.

## Local validation and blockers

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/lem-rpm-ssc-momentum-identity.md items/lem-rpm-td-local-closure.md`: exit 0, 2 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs items/lem-rpm-ssc-momentum-identity.md items/lem-rpm-td-local-closure.md`: exit 0, both files parse and render mathematics.
- `node tools/tsx-run.mjs tools/physics-support/reflow.mts items/lem-rpm-ssc-momentum-identity.md items/lem-rpm-td-local-closure.md`: exit 0, both unchanged.
- `node tools/physics-support/proof-layout.mjs items/lem-rpm-ssc-momentum-identity.md items/lem-rpm-td-local-closure.md`, rerun after final reflow: exit 1 before row checks, ERR_MODULE_NOT_FOUND for `@/components` imported by the external application `web/components/library/ItemBody.tsx`. No proof-layout pass is claimed. This mechanical failure is not a mathematical defect row and the outside renderer was not edited.
- `node tools/physics-support/proof-contract.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-27.proof-contracts.json --strict`: initial check found four metadata errors in two existing citation rows; after replacing the BMT metric-compatibility excerpt by exact current source text and removing the stale F4 citation for the locally stated symmetry fact, exit 0, 0 errors/warnings, 16/16 checked.
- `node tools/physics-support/risk-report.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-27.proof-contracts.json`: exit 0. Every HIGH/CRITICAL carrier received a specific current review.
- Same risk-report command with `--require-reviewed`: exit 1 with exactly four open reviews (`pthm-rpm-bmt-constraints`, `pthm-rpm-rest-spin-and-size-bound`, `ex-rpm-bmt-fw-and-g-two`, `ex-rpm-rest-spin-and-size-bound`). Their BMT-postulate prerequisite remains unresolved in batch 24; risk was deliberately not closed.
- `node tools/physics-support/defect-ledger.mjs append --file /tmp/physics-batch27-ledger-rows.json --no-render`: exit 0, 19 rows appended, including two open outside findings and closed local/historical/false-positive dispositions. `validate --run physics-td-qft-rpm-62-2026-10-14`: exit 0, 174 run rows checked, 0 errors.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-td-qft-rpm-62-2026-10-14`: exit 0. Owned edge records retain the BMT hold and exact finite-regularity dispositions.
- Direct JSON coverage comparison: exactly 29/29 routed obligations, no duplicates.

Owner action: batch 24 must define the along-curve spin derivative on its actual C2/C1 model domain and review its direct consumers; batch 22 must correct the nonfatal smooth-subclass label without silently strengthening the worldline class. The engine must resolve those escalations and the renderer dependency failure before closure. No escalation has been cleared by this review; no judge, stamp, self-certification or stage transition was performed.

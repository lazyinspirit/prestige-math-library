# Batch 38 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`. Group: `batch-38`.

Scope: seven touched obligations, no page or reader/refuter findings. All ten current item raw hashes match the post-reader snapshot; three unchanged items also match the pre-reader snapshot. Initial risk-report passed and routed all ten items (HIGH or CRITICAL).

## Dependency-order review

### def-qft-scalar-mass-shell (level 0)

Checked Definition and all eight direct prerequisite statements: AC_omega; affine Minkowski quadruple and future oriented inertial chart; Lorentz inertia (-+++), nonzero causal classes, future cone; Schwartz seminorms and Fourier automorphism. F_+ is the stated time reflection/rescaling, and its inverse has (2pi)^-4. For mu=0 the apex is excluded and r^-1 is locally integrable in dimension three. mu is a mathematical inverse-length parameter, not measured mass; no empirical premise. Tong section 2.4.1 equation 2.134 and Srednicki chapter 3 equations 3.15-3.19 support normalization; restriction integrability and continuity are supplied below. No defect found; unchanged current raw bytes equal both snapshots.

Checkpoint: definition risk review complete; next is the unitary lift and its tensor/Fock prerequisites. No decision is owed for this unchanged definition.

### lem-qft-fock-unitary-lift (level 1)

Checked all three proof steps and four direct suppliers. Tensor product inner products give isometry on finite sums, inverse tensor powers give surjectivity, and permutation averaging preserves symmetric sectors. Zeroth sector is C and maps vacuum identically; H=0 and n=1 remain valid. Creation intertwining is symmetrized insertion, contraction intertwining follows from <Uh,Uv>_2=<h,v>_2 and bounded fixed-sector maps. Telescoping product estimate, density and the common unitary norm bound prove orbit continuity on each sector and then the direct sum for arbitrary topological parameter space G. AC_omega is explicit, with no stronger selection. Tong section 2.4 is only multiparticle context; general lift and continuity are locally proved. Accept reader topology/locator clarifications and layout; no mathematical defect confirmed.

Verdict: `accepted_repair`; confidence 1. Checkpoint complete; next review is shell-measure invariance.

### lem-qft-mass-shell-measure-invariant (level 1)

Checked three proof steps and seven direct suppliers. Chart domain is R^3 for mu>0 and punctured R^3 for mu=0, both open. Lorentz maps and inverses preserve the future shell. Expanding [u,DF] gives u^0-u_spatial dot k/omega=-eta(u,F)/omega; determinant +1 yields det J=omega(k prime)/omega(k)>0. Thus the AC_omega C^1 change-of-variables theorem applies to nonnegative Borel functions, including infinite integrals, and applying the computation to Lambda inverse matches the written pullback. Radial density r^-1 near the omitted massless apex is locally integrable; annuli or balls give sigma-finiteness without an apex atom. Tong 2.134-2.136 and Srednicki 3.15-3.19 normalization checked; Jacobian proof is local. Accept explicit inverse-map clarification and layout; no mathematical defect confirmed.

Verdict: `accepted_repair`; confidence 1. Checkpoint complete; next is test-range density.

### lem-qft-mass-shell-test-range-dense (level 1)

Checked all three steps and all seven direct suppliers. q_2 shell bound is integrable for every mu>=0: radial orders r, r^2 and r^-3 establish range membership. Rational-box supplier has real rational coefficients; local real/imaginary approximation and explicit Cantor pairing correctly establish complex L2 separability. Multiplication by sqrt(w_mu), with positive finite weight off the null apex, is a surjective isometry on equivalence classes. Annuli increase to full measure; subtracting monotone interior integrals from finite total gives tails tending to zero. Weight bounds on each annulus permit C_c^infinity approximation from the exact complex open-set density supplier. G=psi(q)rho(q0-omega(q)) extends smoothly by zero across the massless apex since psi vanishes near it, and has compact support; Fourier automorphism provides exact shell restriction. Melrose Theorem 9.1, printed p.58, checked. Reader additions explicitly close immediate integrability, complex typing and tail-limit details; no false current claim or substantial prerequisite gap found.

Verdict: `accepted_repair`; confidence 1. Reader improvements are accepted as nonfatal proof-detail completion, not as a routed finding.

### lem-qft-mass-shell-test-restriction-continuity (level 1)

Checked both proof steps and all five direct suppliers. Fourier automorphism and coordinate reflection/rescaling make q_2 a continuous seminorm (bounded by finitely many coordinate-weighted seminorms). The shell norm is bounded by q_2 times a finite radial integral, including r behavior at the massless apex and r^-3 at infinity. This establishes a continuous linear map into H_mu without distributional point evaluation. Derivative identity from the exact negative-sign 2pi Fourier supplier becomes -p0^2+|p|^2+mu^2, vanishing identically on the positive shell. AC_omega and inverse-length coordinates are retained. Tong free Fourier modes and shell-normalization clauses agree; no measured input or physical mass identification. Unchanged carrier equals both snapshots; no defect found.

Risk review complete; no touched obligation. Next: Poincare action at level 2.

### lem-qft-scalar-poincare-action (level 2)

Checked all four steps and eleven direct suppliers. The matrix subspace/product topology is metrizable and locally compact; proper future-preserving Lorentz inverse and determinant one meet all change-of-variables hypotheses. Repeated affine chain rule preserves each Schwartz seminorm. Invariant shell measure preserves null classes; inverse action gives surjectivity; Lorentz phase identity gives the semidirect group law. The complex Fourier change of variables follows from four nonnegative parts and absolute Schwartz integrability. For compactly supported chart h, images under a compact parameter neighborhood form a compact shell subset; for mu=0 it stays away from the apex since inverse Lorentz matrices are uniformly bounded. The finite-measure majorant therefore justifies dominated convergence along sequences, which suffices in this metrizable group; density and norm-one action extend continuity to all H_mu. No empirical premise; AC_omega retained. Tong/Srednicki support normalization only, and full Hilbert-space representation proof is local. Accept reader topology and complex-integral explanations and layout; no mathematical defect confirmed.

Verdict: `accepted_repair`; confidence 1. Existing smeared-field consumer uses exactly this group and covariance formula; no strengthening of its hypotheses is required. Next: smeared scalar, level 3.

### lem-qft-smeared-free-scalar (level 3)

Checked six complete proof paragraphs and all fifteen direct prerequisite statements; independently read current CCR, Segal-Weyl and second-quantized-spectrum proofs. H_mu separability supplies the CCR/Segal hypothesis; sigma-finiteness and finite measurable (omega,-k) supply spectrum hypotheses. Conjugate-linear annihilation after f conjugation gives complex-linear fields on invariant D_fin. Real fields have sqrt(2) Segal normalization, Weyl phase -Im<Kf,Kg> and Gaussian exp(-||Kf||^2/2). Vacuum covariance is <K conjugate(f),Kg>_2; positivity uses first test conjugate(f), not arbitrary complex diagonal. CCR commutation yields ordered Wick recursion with finite products defined on D_fin. Fixed-sector sqrt(N) bounds and continuous restriction prove all matrix coefficients tempered; restricted adjoint identities make the vacuum polynomial state positive. The injective frequency restriction for eight-variable tests preserves Schwartz decay; radial integrability establishes genuine tempered bi/relative distributions without point operators. Fock covariance follows from real affine test pullbacks and unitary lift; sector generator sums have E>=|P| including zero vacuum. AC_omega, (-+++) phase and no empirical/model-truth assertion retained. No defect found. Batch-37 suppliers are draft context, not certified by this review.

Risk review complete; unchanged carrier owes no touched decision. Next: causal commutator, level 4.

### lem-qft-scalar-causal-commutator (level 4)

Checked four proof steps and all eleven direct suppliers. Joint spacetime pairing is bounded by a finite Schwartz-seminorm sum using |sin(omega t)/omega|<=|t|; spatial/time integrals of the stated majorants are finite, so temperedness is genuine including mu=0. Fourier inversion gives initial data (0,delta_0) and KG evolution. Mollification produces a smooth Schwartz solution; exterior energy differentiation has the correct outward-moving-boundary sign and gives -(ut+ur)^2, tangential gradient and mu^2 terms. Zero initial exterior energy forces vanishing; at mu=0 constant exterior values vanish by Schwartz decay. Time reversal and R=2epsilon establish causal support after compact-test mollifier convergence. Compact difference test h(z)=integral f(z+y)g(y) gives legitimate double smearing; decaying shell transforms justify CCR comparison. The phase difference has sign -i Delta. Pairwise spacelike support ensures h is supported in the spacelike complement; zero tests and either time direction are included. Tong 2.163-2.167 and Fewster-Rejzner 4.2 support the formal kernel/locality conventions; full energy and distributional argument is local. Accept paragraph/layout changes; no mathematical defect confirmed.

Verdict: `accepted_repair`; confidence 1. Next: local Weyl algebra, level 5.

### lem-qft-scalar-local-weyl-algebra (level 5)

Checked both proof paragraphs, all six direct suppliers and Fewster-Rejzner section 4.2 kernel/Weyl/local-net clauses. The Weyl generator is the closed Segal field Phi_Segal(sqrt(2)K_mu f), not the operator restricted to D_fin: even f=0 gives a zero generator on all Fock space whereas the displayed field has domain D_fin. Amended Statement to identify the self-adjoint closure and its finite-particle restriction; step 1.1 now explicitly applies the exact Segal generator supplier (new F4). Isotony follows from compact-test inclusion and norm closure. Pairwise spacelike hypotheses, CCR and causal support give Im<Kf,Kg>=0; Weyl relations then give commuting bounded generators. Inverses/adjoints, finite products and norm limits preserve cross-commutation. Empty regions generate C I and zero tests give I, so boundaries remain valid. AC_omega, sqrt(2) normalization and mathematical-only scope retained. Direct item/reference consumers: the owned correlation example uses only bounded Weyl commutation; outside pthm-qft-scalar-free-properties F9/step 1.4 and pthm-qft-free-observable-domain-limits F8/step 1.3 use only unchanged isotony/locality. Outside consumers already distinguish closures and finite-particle fields where needed; no consumer repair required and propagation stops. Reflow unchanged; precheck, rendercheck and scoped strict proof-contract passed.

Verdict: `amended_repair`; confidence 1. Confirmed exact-domain defect `physics-td-qft-rpm-62-2026-10-14-3a-batch-38-weyl-generator-domain` repaired. Original raw carrier is authenticated by post-reader snapshot hash `b04991edb67df210694725035270bc39ad27299cb59247c7f97fd0f2241f7170`. The original Statement equated the generator with the finite-particle field; the corrected Statement equates it with that field's closure. Manifest Statement, derivation, F4 citation and owned example's supplier quotation synchronized. No stale judge stamp was present. Page qft-mf02 lists the item and describes local bounded-algebra locality only; no page change needed.

Checkpoint: local Weyl risk and decision complete. Next: massless vacuum-correlation example at level 6.

### ex-qftmath-spacelike-vacuum-correlation (level 6)

Checked all three verification paragraphs and nine direct supplier statements. Bumps are nonnegative and nonzero with support product uniformly spacelike (D-r1-r2>2delta); positive integrals follow from continuity and nonzero values. Angular integration of e^(-epsilon|k|) d^3k/((2pi)^3 2|k|) gives 1/(4pi^2(r^2+(epsilon+i tau)^2)), with the displayed factors correct. Uniform separation bounds the denominator away from zero for epsilon down to zero. Regulated spacetime/shell exchange is absolutely integrable by compact-test L1 norms and the damped shell measure; unregulated smeared covariance converges by Hilbert Cauchy-Schwarz and dominated convergence. The limiting positive kernel has the explicit positive lower bound (integral f)(integral g)/(4pi^2(D+r1+r2)^2). Zero one-point values and bounded Weyl commutation use the exact field/locality suppliers; the amended generator domain is unused. Tong 2.165 gives two-point shell integral; Srednicki 3.15-3.19 gives normalization, not the old chapter-4 two-point locator. The massless positivity computation is local mathematics with no observation, signaling or measurement inference. Accept source-locator and proof-layout edits; no mathematical defect confirmed.

Verdict: `accepted_repair`; confidence 1. All seven routed decisions and all ten risk reviews are now authored. Next: final scoped checks and handoff.

## Final dispositions and current evidence

- `lem-qft-fock-unitary-lift`: `accepted_repair`, repair confidence 1.
- `lem-qft-mass-shell-measure-invariant`: `accepted_repair`, repair confidence 1.
- `lem-qft-mass-shell-test-range-dense`: `amended_repair`, repair confidence 1.
- `lem-qft-scalar-poincare-action`: `accepted_repair`, repair confidence 1.
- `lem-qft-scalar-causal-commutator`: `accepted_repair`, repair confidence 1.
- `lem-qft-scalar-local-weyl-algebra`: `amended_repair`, repair confidence 1.
- `ex-qftmath-spacelike-vacuum-correlation`: `accepted_repair`, repair confidence 1.

The density verdict is amended solely for the final display-layout correction described above; its argument and Statement remain unchanged. Eight stale supplier quotations were refreshed to independently inspected current Statement/Definition text, and the two F3 citation-use mappings in density step 1.1 were added. These contract normalizations do not close any reader/refuter finding; none was routed. The closed generator-domain ledger row is the only newly confirmed mathematical defect. There are no defective published suppliers identified, no proposed withdrawals and no unresolved mathematical escalation in the owned carriers.

All source/prerequisite claims were checked against current carriers, not readiness stamps. The initial current raw item hashes equaled the post-reader snapshot in all ten cases, and the seven touched hashes differed from their pre-reader hashes. The untouched three equaled both snapshots. Snapshot hashes and the reader report establish the recorded changes; no absent historical preimage is claimed to have been reconstructed. Current item hashes after local repair:

- `def-qft-scalar-mass-shell`: `0cee9c4781f5812d871090d246e856462713dc75078217810178d9386b64b7c2`.
- `lem-qft-mass-shell-measure-invariant`: `6dfbe247d6972e5766e609aca3ed2b2e68e0d13bec263e662afd060bf3655524`.
- `lem-qft-mass-shell-test-range-dense`: `8ceb8038295bbfc14dfc6a627047dcb73cc44c39af1e44d3d22cfbf9b55483c6`.
- `lem-qft-mass-shell-test-restriction-continuity`: `919a1636856b2b4f8744a19ddff7cc6b19b43734abd8a59d21cf357636585d91`.
- `lem-qft-fock-unitary-lift`: `47816e9c47e77fb41e0f2415c09c174565a00af8f2a8582ebaa115910494e37e`.
- `lem-qft-scalar-poincare-action`: `42a7276c95bb82622b2819c98ed5f5f6237790de7c0acbedac880826cb75ae29`.
- `lem-qft-smeared-free-scalar`: `559405501eca6d48df63632c332c9e8e8909d4aa3eb99843e2e6d5c15b91b9f6`.
- `lem-qft-scalar-causal-commutator`: `1aca220cb1c3828d5a256d75e922c5957f58767727d28876bd81b083f086b4de`.
- `lem-qft-scalar-local-weyl-algebra`: `653f91248f06af726af8512c881ee07e3a2de407221b89e528825cff70450482`.
- `ex-qftmath-spacelike-vacuum-correlation`: `6eaaa6073a7761ba267284af570d5a5a6c015a695dfd308f30713bf88cbc4ba7`.

## Sources and supplier status

- [Tong, chapter 2](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html): sections 2.2–2.4, 2.4.1 equations 2.133–2.141, 2.6.1 equations 2.160–2.164 and 2.7 equations 2.165–2.167. Checked normalization, mode, formal causal-kernel and two-point conventions; the rigorous domain, continuity, energy and regulator arguments are proved locally.
- [Srednicki, author draft](https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf): chapter 3 equations 3.15–3.19, PDF page 39 (index 38), positive-energy measure; chapter 4 equations 4.11–4.15 concern local commutation rather than the former two-point locator.
- [Melrose, official MIT section 9](https://ocw.mit.edu/courses/18-155-differential-analysis-fall-2004/fa60b20e070ee676b70cdf8a373e6197_section9.pdf): Theorem 9.1 and proof, printed page 58, Fourier isomorphism/inverse.
- [Fewster–Rejzner v2](https://arxiv.org/pdf/1904.04051v2): section 4.2, PDF index 14–17, causal kernel, smeared algebra relations and local Weyl algebra. This source uses the advanced-minus-retarded convention; our displayed commutator sign was checked directly from the shell phases. No abstract norm differentiability is inferred: the generator statement concerns the explicit regular Fock representation.

Read all direct supplier carriers used by the ten owned items. Imported mathematics and published SR/tensor/analysis suppliers remain read-only. `research/math-imports.json` confirms the edited local Weyl item is not an import. Current QFT-MF01 Fock definitions, CCR, Segal-Weyl and second-quantized-spectrum statements/proofs were independently inspected for their actual uses; they remain draft and this review grants no engine acceptance. The two affected local-Weyl cross-batch rows now record the exact CCR and Segal generator uses, while preserving their existing open readiness dispositions and historical evidence. No new prerequisite edge was added.

## Local checks and owner handoff

- `node tools/tsx-run.mjs tools/physics-support/reflow.mts items/lem-qft-scalar-local-weyl-algebra.md` and the corresponding command for `items/lem-qft-mass-shell-test-range-dense.md`: exit 0, unchanged.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts` with the ten explicit batch item paths: exit 0, nine proof-bearing items checked, zero failing (definition has no proof-format obligation).
- `node tools/physics-support/rendercheck.mjs` with those same ten paths: final exit 0, all ten YAML/math carriers passed. The initial one multiline-display failure was repaired.
- `node tools/physics-support/proof-contract.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-38.proof-contracts.json --strict`: final exit 0, 10/10 checked, zero errors/warnings. Initial stale quotations/use mappings were normalized.
- `node tools/physics-support/risk-report.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-38.proof-contracts.json`: initial exit 0, all ten HIGH/CRITICAL routed. The final `--require-reviewed` result is recorded below.
- `node tools/physics-support/defect-ledger.mjs append --file /tmp/physics-batch-38-defect.json`: exit 0, one fixed row appended under stage `3a-adjudicate`; generated ledger view refreshed.
- Exact decision coverage independently checked: seven owed obligations, seven unique decisions; all ten risk reviews complete.

Two mechanical checks remain blocked. The final mandated command `node tools/physics-support/proof-layout.mjs items/lem-qft-mass-shell-test-range-dense.md items/lem-qft-scalar-local-weyl-algebra.md` was run after all item edits/reflow and exited 1 because the app renderer cannot resolve package `@/components` imported by `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`. Blue-chip renderer validation is therefore unverified; ordinary precheck and KaTeX/YAML rendering passes do not replace it. An earlier single-item attempt had the same loader failure before the density edit. No outside app code was modified.

The required `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-td-qft-rpm-62-2026-10-14` exited 1 on invalid YAML escape `\m` in `items/ex-qft-one-mode-interacting-model.md:21` (the tool reports line 20 within frontmatter). Current manifests assign that item to batch 64, outside this dispatch. Owner action: route the YAML scalar correction to batch 64, then refresh the unified dependency ledger. The owned batch-38 input is updated; no unified-ledger success is claimed. This is a mechanical outside-scope alert, not an added decision or defect-ledger row.

No judge, stamp, certification, dispatch, transition or gate battery was initiated. Engine-owned current hashes and final gates remain pending.

Final risk-report with `--require-reviewed`: exit 0, zero errors, all ten HIGH/CRITICAL reviews complete. Handoff artifacts are the report and `research/physics-td-qft-rpm-62-2026-10-14-alpha-batch-38-3a-decisions.json`.

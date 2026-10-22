# Batch 41 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-41`; assigned batch: 41. The scope file retains its original assignment group `r`.

## Disposition

Completed all 20 routed obligations: 14 confirmed_nonfatal decisions for seven distinct short gaps, and six confirmed_fatal decisions for three distinct formulation defects. Reader/refuter duplicates share one closed defect-ledger row per defect: ten rows total, owned at `3a-adjudicate`, each with repair confidence 1. There are no touched or page obligations. No escalation, proposed withdrawal, published defect, or outside consumer repair is pending from this review.

Initial current raw SHA-256 values matched all ten item hashes in both the pre-reader and post-reader snapshots; those snapshots and inventories are identical. The reader made no carrier repair. The original scope findings and their observed fingerprints are preserved. Current defects were independently reproduced from the current carriers; no finding was dismissed because a source had changed. This report does not manufacture historical preimages or engine hash stamps.

## Findings and repairs

### Finding 1: `prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle`

`reader:41:1` and `refuter:41:1`: **confirmed_nonfatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-1`. Repair confidence: 1.

Frame-bundle Proof 1.1 now obtains an oriented chart from any chart: the orientation-ray sign is locally constant, and reversing one coordinate corrects a negative sign. Shrinking then fixes the tetrad determinant sign, and reversing E1 makes it positive without changing E0. This is nonfatal local exposition; the exact orientation-ray definition and local-tetrad existence theorem suffice, without extra choice.

### Finding 2: `prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle`

`reader:41:2` and `refuter:41:2`: **confirmed_nonfatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-2`. Repair confidence: 1.

Frame-bundle Proof 1.2 now explicitly uses that an invertible Lorentz map is a homeomorphism of the timelike set and maps components onto components; Ae0 future then gives preservation of the future component. The Lorentz tetrad-change supplier and the cone clauses in the Lorentzian-objects supplier establish the inputs. Freeness and transitivity follow by the unique matrix u inverse v. Nonfatal omission, Statement unchanged.

### Finding 3: `prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle`

`reader:41:3` and `refuter:41:3`: **confirmed_nonfatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-3`. Repair confidence: 1.

Frame-bundle Proof 2.1 now first defines set bijections Psi_E; 3.1 proves overlap smoothness using only base fields e and E prime, then defines the topology and atlas. Only after this construction is total-space smoothness used. Step 4.1 verifies Hausdorffness and second countability, selecting neighborhood-section pairs via AC_omega. The former premature smoothness assertion was a nonfatal ordering gap, not a failure of local triviality. Checked the topological frame supplier, smooth-principal definition and embedded six-dimensional Lorentz group proof in def-rpm-h-poincare-charge-space 1.1-2.1.

### Finding 4: `lem-gr-fx-sl2c-connected`

`reader:41:4` and `refuter:41:4`: **confirmed_nonfatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-4`. Repair confidence: 1.

SL(2,C) Proof 1.1 gives r>0 and QR with det Q=det R=1. Step 2.1 constructs sphere paths including antipodes explicitly. Step 3.1 now writes r^(±t)=exp(±t log r), proving entrywise continuity, with endpoints I,R and determinant one. This is a short nonfatal continuity omission, not a counterexample to connectedness; Statement and dependencies are unchanged. Checked determinant suppliers and Oblak §2.3.1, PDF p.24 (local column QR convention).

### Finding 5: `lem-gr-fx-so-plus-connected`

`reader:41:5` and `refuter:41:5`: **confirmed_nonfatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-5`. Repair confidence: 1.

SO+(1,3) Proof 1.1 now states continuity of sqrt(1+t²|u|²), positivity of the denominator, and the component-mapping property of invertible Lorentz homeomorphisms. Direct block multiplication gives eta preservation; determinant continuity from t=0 gives +1. Both missing observations are elementary nonfatal steps, with u=0 and t=0,1 valid. Lorentz-map and timelike-cone supplier statements were checked; Statement is unchanged.

### Finding 6: `lem-gr-fx-so-plus-connected`

`reader:41:6` and `refuter:41:6`: **confirmed_nonfatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-6`. Repair confidence: 1.

SO+(1,3) Proof 3.1 now proves modulus one using the complex Euclidean norm, hence the nonreal-pair product one and existence of a +1 eigenvalue when det R3=1. The path is explicitly C D(s theta) C^T in the original coordinates. Steps 2.1,4.1,5.1 correctly give boost-rotation decomposition, concatenation and both inclusions for the identity component. These omitted finite-dimensional observations are nonfatal; no new claim or AC use is introduced.

### Finding 7: `def-gr-fx-lorentz-spin-lift`

`reader:41:7` and `refuter:41:7`: **confirmed_nonfatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-7`. Repair confidence: 1.

Spin-lift Definition now defines the horizontal lift as the inverse of d pi on the supplied horizontal complement. Right invariance gives XH(ua)=dRa XH(u), and differentiating equivariance gives df(ua) XH(ua)=sigma(a)^(-1) df(u) XH(u); the quotient relation makes the derivative independent of u. Smoothness and the section Leibniz rule are also stated and derived by the product rule. This closes the nonfatal well-definedness omission using the exact principal-connection and associated-bundle suppliers.

### Finding 8: `def-gr-fx-lorentz-spin-lift`

`reader:41:8` and `refuter:41:8`: **confirmed_fatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-8`. Repair confidence: 1.

Spin-lift Definition now specifies V=C² and sigma(a)v=av on column vectors, verifies smoothness and the homomorphism property, and defines the rank-two spinor bundle and its sections using this action. Previously the arbitrary representation clause did not identify the claimed spinor representation, a fatal definition omission under the explicit-definition rule. Arbitrary representations remain available as associated vector bundles. The repaired interface preserves all supplied-bundle and connection conditions; no Dirac/gamma compatibility or existence is inferred. Provenance is now ai-altered with existing literature sources.

### Finding 9: `ex-gr-fx13-2`

`reader:41:9` and `refuter:41:9`: **confirmed_fatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-9`. Repair confidence: 1.

Example 2 now defines delta and SO(4) before using them and states the precise universal codomain obstruction: for every set S and map q:S→SO(4), B(r) is not in its image. This implies the former comparison with any Euclidean spin covering without naming an undefined Spin(4) or map. The calculation c²+s²>1 for nonzero real r proves the obstruction and the actual Lorentzian matrix lift remains explicit. Undefined comparison data were a fatal formulation defect; no substantive claim has been weakened, no new supplier is needed, and no item/reference consumers exist beyond its placement page.

### Finding 10: `ex-gr-fx13-2`

`reader:41:10` and `refuter:41:10`: **confirmed_fatal**. Closed row: `physics-non-fluid-129-2026-10-21-r2-3a-batch-41-finding-10`. Repair confidence: 1.

Example 2 Statement now supplies M=R4, standard coordinates, eta metric, N=partial0, orientation, Cartesian tetrad E_I=partial_I and coframe e^I=dx^I, with smooth affine connections on all TM. These are precisely the missing domain and hypotheses used in Verification 3.1. The zero coefficients are eta-skew with de=0; the torsion/Levi-Civita supplier gives existence and uniqueness on this explicit manifold, and constant B(r) leaves zero coefficients after frame change. The original missing geometric data were fatal; the full conclusion is retained with its proper domain.

## Risk and independent proof review

Review followed the generated item order: local connection definition, SL connectedness, SO connectedness, oriented frame bundle, double cover, torsion equivalence, spin definition, then examples. Each HIGH/CRITICAL item received its specific Alpha review before moving higher. The initial and final risk-report commands both succeeded; final run used `--require-reviewed`.

- `def-gr-fx-tetrad-spin-connection`: Checked full Definition and all 15 supplier statements. On nonempty U, E is a smooth future tetrad and its dual fixes all index types. Differentiating E prime = E Lambda inverse gives omega prime = Lambda omega Lambda inverse - dLambda Lambda inverse; metric compatibility is exactly eta-skewness. Matrix-wedge order matches curvature structure equation, and second Bianchi is for arbitrary bundle connections. AC_omega is inherited solely from tangent/tetrad conventions. No global tetrad, spin structure or global gauge extension is asserted. Carroll equations (3.125)-(3.143), PDF pp.97-101, checked directly; no empirical claims or diagrams.

- `prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle`: Read entire proof and its ten declared supplier interfaces. Repairs 1-3 close orientation-chart existence, cone preservation and atlas ordering. The unique relative matrix is eta-isometric, det +1 and future-preserving. Smooth overlaps are obtained solely from base coframes before constructing the total space. Hausdorff separation uses base or product charts; AC_omega selects countably many section-neighborhood pairs indexed by the usable base elements, giving second countability. Empty M gives the empty bundle, with all statements vacuous; no global section or spin existence is inferred. Carroll local tetrads (3.114)-(3.126) checked; the global bundle conclusion is proved locally here. No diagrams or empirical premises.

- `prop-gr-fx-spin-double-cover`: Read all five proof steps and eleven supplier interfaces. Hermitian coordinates give -det X=eta(x,x); polynomial conjugation is a homomorphism, with image in the identity component by the repaired SL path lemma and SO component lemma. Source manifold charts a nonzero are rational and translated over the group. Trace-zero tangent directions are realized by the displayed curve near zero. Kernel of the differential is scalar with trace zero, so equal real dimensions six give an isomorphism. Apply the cited C1 inverse-function theorem in six-dimensional charts; its Dg=(Df composed with g)^(-1) formula bootstraps the inverse to C-infinity, using smooth matrix inversion. The open image is closed by cosets, hence all of the connected target. Group kernel is precisely ±I. Shrink U and take V=rho(U); disjoint U,-U are exactly the two sheets, and translations cover the target. Nonempty identity, repeated/zero tangent inputs and both kernel inclusions checked. AC_omega retained from smooth conventions, no full choice. Read Oblak §§2.3.1-2.3.3 PDF pp.24-27; local Pauli convention differs from his tau1 sign, so checked local formulas directly. No global spin-existence assertion or empirical claim.

- `prop-gr-fx-torsion-free-tetrad-equivalence`: Read complete proof and all five supplier statements. Evaluation on X,Y gives T^I=e^I(tangent torsion), proving both implications because e is a basis of covectors. Eta-skewness proves metric compatibility explicitly, and the nondegenerate Levi-Civita supplier on U gives existence and uniqueness (AC_omega inherited). For alpha=dLambda Lambda inverse, graded differentiation gives d alpha=alpha wedge alpha; expanding d omega prime and its square cancels every mixed term, giving F prime=Lambda F Lambda inverse. The coframe product similarly gives T prime=Lambda T. Zero torsion/curvature and constant Lambda valid; empty U has the unique empty connection, so no exception is needed. Carroll (3.131)-(3.143), PDF pp.98-101, read directly, with Tong §3.4.2 as source context. No empirical premises or diagrams; no change needed.

- `def-gr-fx-lorentz-spin-lift`: Reviewed complete Definition, all nine prerequisite statements, and the single TikZCD square. Pi-plus composed with lambda equals tilde-pi on both diagram paths; arrows and labels are correct. The principal SL(2,C) bundle, equivariant fiberwise two-sheeted map, global H-plus and lifted horizontal complement are supplied data. Quotient operations and smooth local transitions follow from the right-principal associated-bundle convention, with transition direction j to i for sj=si aij. The defining rank-two action is now explicit; representative independence and Leibniz are proved in the Definition. No hidden existence or uniqueness, no identification of C² with arbitrary Clifford modules. Zero-dimensional V is allowed in the general associated-bundle clause; empty base has empty data. AC_omega retained and no extra choice made. Oblak §2.3 and Carroll local-frame equations support group/connection conventions. Consumer search found only the Clifford proposition and the two owned examples, plus placement pages; no outside consumer requires repair.

- `ex-gr-fx13-1`: Reviewed Statement and Verification 1.1-3.1 against all six suppliers. On R4, theta=x1 is smooth with dtheta=dx1 nonzero. The spatial rotation preserves eta, determinant and future direction; differentiating gives dLambda Lambda inverse=J dtheta, so omega prime=-J dtheta is nonzero. Cartesian torsion and curvature vanish and their proved transformation laws preserve zero; eta-skewness identifies the Levi-Civita connection in the rotated frame. Direct Pauli conjugations with diag(exp(-i theta/2),exp(i theta/2)) give exactly the two signed columns of the displayed rotation. Thus the lift is of the local Lorentz map, not an asserted global spin structure. At theta=0 the rotation is identity but dtheta remains nonzero, which is consistent with nonzero connection coefficients. AC_omega is explicit in Given and inherited suppliers; no empirical quantities are present. The clarified spinor action/derivative definition changes none of F4/F5 actual uses. Oblak §2.3.3 PDF p.27 checked for source convention context; local signs checked directly rather than copied. No diagrams or repair needed.

- `ex-gr-fx13-2`: Read all three verification steps against all six exact supplier interfaces. Statement now defines Minkowski data, smooth connection domain, delta and SO(4) before use. The c,s block preserves eta with determinant one and c>|s|; a Lorentz homeomorphism maps the component containing e0 onto the future component. For r nonzero, c²+s²=1+2s²>1, hence B(r) cannot lie in the image of any SO(4)-valued map; for r=0 the obstruction disappears exactly as excluded. A=cosh(r/2)I+sinh(r/2)sigma1 has determinant one and conjugates I,sigma1 by the boost while fixing sigma2,sigma3, matching rho. Cartesian zero connection is eta-skew and torsion-free; the proved equivalence gives the unique Levi-Civita connection on R4. Constant boost gives omega prime=0. Clifford use is only the independently verified local algebraic identity, with no asserted representation compatibility. Empty comparison S makes the universal obstruction vacuous; no extra AC beyond inherited AC_omega. Oblak §§2.3.2-2.3.3 PDF pp.25-27 and Tong §4.5.6 checked with signature/basis conventions distinguished. No empirical claim or diagram. No consumer requires repair.

The remaining consumer `prop-gr-fx-lorentz-clifford-compatibility` was read completely. Its Clifford relation gives `[gammaI gammaJ,gammaK]=2(etaJK gammaI-etaIK gammaJ)` including repeated indices; contracting eta-skew omega yields `[Gamma,gammaK]=-omegaK_J gammaJ`. Expanding the product derivative proves the stated local compatibility for every supplied constant module of size n. It uses the spin definition only for interface context and explicitly disclaims compatibility with an arbitrary supplied group representation. The repaired defining C² action neither changes nor supplies its Clifford hypotheses.

## Suppliers, sources, diagrams, and physical scope

Reviewed the actual Statement/Definition of every declared supplier used in this batch, including the smooth Lorentzian/tetrad data and local existence theorem, tetrad-change lemma, countable-choice axiom, determinant definitions/multiplicativity, Lorentz-map/causal lemma and two-cone theorem, orientation definitions, topological frame and principal/associated-bundle definitions, associated-bundle local-triviality proposition, smooth principal/gauge/connection definitions, scalar/vector-valued form and exterior-derivative interfaces, curvature/Bianchi statements, nondegenerate Levi-Civita theorem, Lorentz algebra statement, Lie-group definition and Euclidean inverse-function theorem. In `def-rpm-h-poincare-charge-space`, read the actual regular-level-set argument and six-dimensional matrix-group construction in Proof 1.1–2.1; readiness metadata alone was not used as proof. Imported mathematical suppliers were kept read-only; no mathematics-original or published item was edited.

External source inspection was limited to the following relevant passages, not full books or unrelated results:

- Carroll, *Lecture Notes on General Relativity*, [Chapter 3](https://arxiv.org/pdf/gr-qc/9712019), equations (3.115)–(3.144), printed pp.89–94 / PDF pp.96–101. Read directly from `research/physics-non-fluid-129-2026-10-21-r2-batch-41-sources/raw/carroll-gr-1997.pdf` using PyMuPDF after `pdftotext` proved unavailable. Checked frame/coframe conventions, inhomogeneous connection change, torsion/curvature structure equations and metric compatibility.
- Tong, *General Relativity*, [§3.4.2](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html), browser lines 1133–1243, and [§4.5.6](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html), lines 1252–1308. Checked connection/torsion conventions and the coefficient in the local gamma-matrix derivative. These passages concern local formulas and do not certify a global spin structure.
- Oblak, *From the Lorentz Group to the Celestial Sphere*, [§§2.3.1–2.3.3](https://arxiv.org/pdf/1508.00920), PDF pp.24–27. Read complete relevant sections from `research/physics-non-fluid-129-2026-10-21-r2-batch-41-sources/raw/oblak-lorentz-sphere-1508.00920.pdf`; checked connectedness, Hermitian action, kernel/image and explicit lifts. The source uses tau1=-sigma1, while the batch uses +sigma1. Local matrices were independently multiplied, including rotation signs; source formulas were not silently transplanted.

The one TikZCD diagram, in `def-gr-fx-lorentz-spin-lift`, has the correct objects, downward bundle projections, top lambda map and bottom identity. Both paths express the supplied equation pi-plus composed with lambda = tilde-pi. No diagram repair or addition is needed; proofs are independent of the square.

All ten items are mathematical constructions. No observation, measured input, uncertainty estimate, physical postulate, or assertion that a model describes nature is used. Spin structures and connection lifts remain supplied data, with no global existence theorem inferred.

## Consumers and artifact maintenance

Search of `items/` and `library/` found the only direct item/reference consumers of the changed spin Definition: `prop-gr-fx-lorentz-clifford-compatibility`, `ex-gr-fx13-1`, `ex-gr-fx13-2`. Their actual uses were read: local algebra only, local map lift/extra-global-data qualification, and Lorentzian target-group convention, respectively. All uses remain valid; no consumer's Statement needs repair. The only other references are the two owning placement pages. The changed example `ex-gr-fx13-2` has no item consumer; its placement page needs no change. No propagation outside batch 41 is needed.

The two changed public interfaces are synchronized in the batch pages manifest. Exact changed supplier quotations and authored step text/inputs are synchronized in the batch contract. The spin Definition provenance is `ai-altered` with its existing source URLs; proof provenance is still `not-applicable`. No changed item had a judge record to invalidate. All stable IDs, page inventories, scope, and historical snapshots remain present. The owning cross-batch dependency artifact is `[]`: no new in-run supplier edge was introduced. The frontier-dependency ledger records these owned consumers.

## Local validation

All commands were run from the physics workspace. These are focused local checks, not engine certification:

- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-41.proof-contracts.json --strict`: exit 0, 10/10 checked, zero errors/warnings.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-41.proof-contracts.json` and final `--require-reviewed`: exit 0, all seven HIGH/CRITICAL reviews complete.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with the five changed item paths: exit 0, four proof-bearing items checked, zero failures; definition has no phase proof.
- `node tools/physics-support/rendercheck.mjs` with the same five paths: exit 0, all math parses under real KaTeX and all YAML under the renderer parser.
- After every final item edit, one batched `node tools/physics-support/proof-layout.mjs` on `items/lem-gr-fx-sl2c-connected.md`, `items/lem-gr-fx-so-plus-connected.md`, `items/prop-gr-fx-oriented-time-oriented-orthonormal-frame-bundle.md`, `items/def-gr-fx-lorentz-spin-lift.md`, `items/ex-gr-fx13-2.md`: exit 0, five items, 16 steps, zero defects. No item changed afterward.
- `node tools/physics-support/defect-ledger.mjs validate --run physics-non-fluid-129-2026-10-21-r2 --ledger /tmp/physics-b41-ledger.jsonl`: exit 0, ten owned rows checked, zero errors. This validates the extracted owned rows only, not other owners' ledger entries.
- Exact set comparison confirms 20 decisions for 20 routed obligations, with no extra or duplicate obligations.

`node tools/physics-support/content-policy.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-41.pages.json`: exit 0, ten scoped items, zero errors/warnings. No gate battery, judge cycle, stamp, publication, or commit was initiated. Engine-owned stamping and acceptance remain pending.

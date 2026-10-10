# Batch 28 Step 5a adjudication

Run: `physics-em-sr-40-2026-10-08`. Group: `batch-28`; scope assignment group remains `b`. No judgment, stamp, publication, or engine transition is performed.

## Completed item reviews

### lem-em-ideal-cylindrical-sheet-field

`touched:28:lem-em-ideal-cylindrical-sheet-field`: accepted_repair; repair_confidence 1. Independently read Statement, F1–F11 and all six proof steps. Tonelli applies to the Borel cylinder with finite x1 sections under AComega; completeness permits arbitrary finite surface values. Four injective quarter-cylinder charts, cap normals and surface-null seams meet the piecewise divergence theorem. Compact support removes caps, div(varphi e3)=partial3 varphi gives zero, and div(psi cross e3)=(curl psi)3 gives +e_phi surface measure. Checked a>0, zero/empty tests, null-set representatives and both jump components; no physics premise or distribution product. Reader corrections accepted; supplementary bibliographic locators have not yet been independently checked.

Pre/post canonical item hashes: `3dfba72a76f9d33989bc21b86b714bd766718b432ce55b0f796d1b5579438959` / `85febeb34c1b69f0988f67fb6eabc07e0b00a7ca2c50a60a77ec7365bce05a24`. Reader report identifies the erroneous coordinate-permutation argument; current proof replaces it without narrowing the statement. Exact cited definitions and theorem statements were read from items/.

All later routed obligations and final local checks are completed below.

### lem-em-ideal-line-current-field

Read all eleven steps and exact direct supplier interfaces. Axis nullity follows by Tonelli; the compactly restricted rho^-1 majorant is integrable by the 2D polar formula. Annular charts and outward inner normal -e_rho give +psi3/epsilon, hence curl=+2pi e3 delta_Z; divergence boundary terms vanish. Uniform continuity justifies the shrinking-cylinder limit; finite L1 linearity handles the signed factorization. Checked r>0, arbitrary height, zero tests and reversal. Confirmed fatal refuter orientation defect: gamma(t)=(cos t,-sin t,0) gives -2pi. Statement now specifies one increasing-t traversal gamma_r,h=(r cos t,r sin t,h), precisely the path proved in 1.3. The only item consumer is the owned wire example, queued for its routed repair; page prose makes no orientation claim. No stronger choice or distribution products.

Verdicts: touched amended_repair; flagged:28:1 confirmed_fatal, closed row `physics-em-sr-40-2026-10-08-5a-batch-28-line-orientation`; repair_confidence 1. Pre/post hashes 712e6be39a7deaf3dcffcbc9649e3a5e29cfb4cfd57801cc64a784e66c5d150a / fcafeffb58c4541567270a2ef5782a4ea5a2ee09ef49b7456b79894615fd2b46. Actual current Statement corrected and owned contract/manifest synchronized.

### lem-em-newtonian-kernel-curl-identity

accepted_repair; repair_confidence 1. Read all four steps and direct supplier interfaces, including the complete smooth Newtonian upgrade proof. For compact smooth real f, convolution differentiates onto f under a fixed local integrable kernel bound and upgrades Poisson distributionally to pointwise. Shell integration by parts has inner boundary O(epsilon); |x-y|^-1 and |x-y|^-2 majorants are integrable in dimension 3. The y derivative of Phi is +(xj-yj)/(4pi |x-y|^3), so the curl contraction gives +f cross (x-y). Divergence follows by finite linearity; no conservation hypothesis is required. Tested f=0 and x inside support, outer support gap and epsilon endpoints. Reader added inherited AComega cost already assumed, with no mathematical interface narrowing. Direct physical consumers use the same formulas under AComega.

Pre/post hashes c850451e0db2fc29a8af0395249a8c283000359809abd98fdc421c9b74ed17e6 / 2c99c7cc844b77b96d00f293c4e1f50d371febb359c80b49f5613e3dc065c967.

### def-em-steady-current-regime

accepted_repair; repair_confidence 1. Read Definition(a)–(d), well-definedness remarks and all nineteen direct supplier interfaces. Time-independence removes Maxwell time derivatives; continuity gives div J=0 distributionally, pointwise only with the stated J C1 hypothesis. Compact support inside open Omega makes zero extension smooth. Loop/line/sheet functionals have finite compact-support order-zero bounds; c4 is a predicate, and physical adoption occurs separately. Checked signed/zero I,K, a,L>0, rotation equivariance and translation maps, transverse compact supremum and far-field versus transverse decay. Units s,L,a in m, I in A, K in A/m and B in T are explicit. Reader clarifications preserve the compact class and impose the intended exact ideal symmetries. Direct external consumers transformer-idealization, inductor-energy, circuit-approximation and inductance-reciprocity use unchanged clause(b); no repair is necessary. Owned ideal consumers will be checked in order. No empirical assertion or singular-source multiplication.

Pre/post hashes b40dce7e43cf71f5f14edb2a85464e356fff2d202c836777698a85c13caeaf38 / 9aa50dc7f63426323df25448dc4f456b99e71e61080e9aa66f9def095333d90a.

### def-em-magnetic-moment

Both Definition clauses and well-definedness proof read. Continuous compact-volume integrands are integrated over a nondegenerate bounding rectangle, rather than potentially non-Jordan support; a common rectangular subdivision establishes independence. The closed C2 unit-speed loop has finite periodic Riemann integrand gamma cross gamma-prime; for radius a>0 it is a e3 and yields I pi a^2 e3. Checked I=0, J=0, signs under orientation/current reversal and A m^2 units. No far-field theorem or spin identification is asserted. Reader removed a reversed-cross-product formula from a supplementary bibliographic locator without changing Definition; classify metadata, not a new proof repair. Tong printed pp.54–57, equations 3.19–3.24, independently read in cached primary full text and agree with the moment convention.

touched verdict: reviewed_no_defect, change_kind metadata; no public Definition change. Pre/post item hashes 42d7bf0ae2f6fbf345030e48cd3e584b844b5f00caea6d4592c39ecfbc569697 / 7bf428f11c3a8042245084fb6280e5021ae9f4580251ea20a17eed95fa455157.

### post-em-ideal-magnetostatic-models

Read entire nonproof carrier and four direct prerequisite interfaces. The postulate explicitly adds physical adoption of loop/line/noncompact-sheet source functionals and c4 admissibility, with E=rho=0, rather than inferring singular models from L1/compact-sheet postulates. AComega, inertial chart, positive SI constants, off-source regularity, symmetry and decay are carried. No uniqueness, force product, self-energy or measurement is asserted. Independent Tong printed pp.41–46 reading verifies neutral steady currents and wire/surface/solenoid context; thin-loop source context is checked with the later pp.51 passage before closeout. Source formulation is a precise local model choice, not a verbatim theorem or empirical proof.

Risk-only item; no touched or finding decision is owed.

### pthm-em-magnetostatic-vector-potential

reviewed_no_defect, audit_enrichment. Read all five proof steps and exact C2 curl identities. Smooth compact zero extension satisfies the smooth Newtonian supplier; -Delta A=mu0 J and derivative transfer hold everywhere. Finite linearity gives div A=mu0 N(div J)=0, hence curl curl A=mu0 J and div curl A=0. E=rho=0 completes the time-independent Maxwell system on all R3 and restricts to Omega; any additional electrostatic pair must itself satisfy its declared equations. Checked J=0, support points, SI A in T m and B in T, no uniqueness or singular/noncompact extrapolation. Reader changed contract quotation only (item pre/post hashes equal f1766861ad8005c00c132a72d67208fb0a4c0308b529f0031983f2e5311d98ab); audit enrichment, no defect or proof edit. Tong pp.49–51 equations 3.12–3.15 independently read; formal source steps are justified by the local suppliers.

The ideal-model postulate source review is also complete through the independently read Tong p.51 thin-wire passage.

### pthm-em-biot-savart

amended_repair; repair_confidence 1. Read all four Biot-Savart steps and independently all sixteen thin-current supplier steps, its producer batch-16 contract citations/derivations and manifest. Smooth leg uses the everywhere kernel-curl identity, including source points. Loop leg uses compact mollified real tangent currents, positive-distance derivative bounds, global L1 representative, curl=mu0 j and div=0 proved through the vector potential, not off-curve convergence alone. Fixed the actual domain mismatch: arbitrary loops in R3 need not lie in earlier Omega, so the thin-loop construction now explicitly takes the all-space laboratory Omega=R3 without narrowing curves. For I=0 the zero extension is smooth everywhere; empty K is vacuous, and L>0/distance gap exclude singular denominator in convergence. Decay and SI types agree. Reader physical_scope correction accepted: smooth support values are valid; ideal-loop point values remain excluded. Both direct consumers are owned and checked later in order. Tong pp.49–52 matches field cross-product order; no measured inputs.

Closed defect `physics-em-sr-40-2026-10-08-5a-batch-28-biot-domain`. Pre/post item hashes 39bac8149c0895e67e5b2a08ad526dbd25551d02b994cc4ad5565459a4c11a67 / d0f325e792afe401a4aa0247dfb36ca477c267492a7c2bb9501b5ad753564483.

### reader:28:1 — historical thin-current supplier

confirmed_fatal, closed row `physics-em-sr-40-2026-10-08-5a-batch-28-thin-real-identity`. Historical F12 without a real-vector restriction is false: u=(1,i,0), v=(1,-i,0) give u cross v=(0,0,-2i), usual squared norm 4, but 2*2-(u dot v)^2=0. The cited Gram theorem assumes real vectors. Current F12 explicitly restricts the identity to real u,v; all current/kernel estimates use real gamma-prime and x-gamma. Full current proof independently checked: periodic FTC establishes current conservation, finite parameter Tonelli bounds Phi and its derivative, first-derivative excision O(delta), translated Poisson and commuting derivatives give global curl/div, null-curve finite ball cover permits arbitrary finite assignments, and distance-gap homogeneity estimates give every-derivative convergence. No unresolved current producer defect was found. Producer manifest and contract reviewed independently; their presence alone was not acceptance evidence.

The owner’s present batch-28 dispatch explicitly authorizes historical adjudication of this unbound finding after independent current proof review. The durable reader report, routed producer pre-snapshot and split carrier identify the subject and correction, but no exact original observed bytes exist; this confirms the reported false historical identity without reconstructing or certifying the unknown historical delta. Original historical bytes remain unknown; no prior escalation has been silently cleared. Full exact route and immutable producer pre-snapshot are retained in the decisions file. Supplier remains outside write scope.

### pthm-em-magnetic-dipole-field

Risk-only review complete. Read all three consumer steps and all six magnetic-remainder steps, together with the full Coulomb-remainder argument and exact comparison, divergence-integral, cross-product, FTC and Cauchy-Schwarz suppliers. Compact divergence fields y_i J and y_i y_j J are L1 with L1 divergences, yielding int J=0 and antisymmetric M. Checked Mx=m cross x. Scalar Taylor remainder bound 16 gives vector bound 48; differentiated explicit Hessian remainder has third-derivative norm <=24 |w|^-4 and gives B error O(mu0 a^2 ||J||1/r^4), without differentiating an unspecified O term. At r=2a, separation remains >=r/2; J=0 and m=0 retained. Riemann/Lebesgue moment comparison applies on nondegenerate rectangles. Leading curl is [3n(m dot n)-m]/r^3. Uniform absolute constants are independent of J,a,n. This untouched item owes only risk review. Direct expansion is in Tong pp.54–57; subsequently read pp.60–62 also contain moment manipulations and the dipole field (3.30), so the supplier’s motivational pp.60–63 locator is not a confirmed defect.

### ex-em-infinite-wire-and-solenoid

touched amended_repair; flagged:28:2 confirmed_fatal; repair_confidence 1; closed row `physics-em-sr-40-2026-10-08-5a-batch-28-wire-orientation`. Read all seven verification steps and all direct suppliers. Wire field is mu0 I/(2pi) times the line lemma; sheet is mu0 K times the cylinder lemma. Distributional curl signs and zero divergences transfer by linearity, jump e_rho cross (-mu0 K e3)=+mu0 K e_phi. Translation invariance, vector rotation equivariance and transverse decays match c4; rho=a is source, no smoothness across it. I=0/K=0 extend as the globally zero field, signed currents and a,r>0 are retained. Confirmed fatal orientation finding with clockwise unit circle and I=1 giving -mu0. Example(a), F1 and step2.1 now specify the once-traversed increasing-t gamma_r,h of the repaired supplier. No uniqueness/finite-energy/self-force or empirical claim. Sole item consumer wire-force-coupling uses the off-axis field value, independent of circulation; it is reviewed below. Tong pp.42–46 independently read and consistent.

Pre/post item hashes equal 818b5e2d323a3595ec7108244f22b815f7ee9239a6f62b70232a20a6973cccb3; routed touch was previously contract enrichment. The orientation correction now changes the current Example, and its contract/manifest were synchronized.

### pthm-em-magnetic-loop-force-torque

reviewed_no_defect, audit_enrichment. Read all eight proof steps, every cited supplier interface and Tong pp.57–62. Direct neutral-wire coupling W is explicitly adopted, not derived from the smooth continuum law. Closed-curve FTC gives int gamma-prime=0, antisymmetric M and torque m cross B. Endpoint divergence is I(delta_start-delta_end), retaining feed/return. The force contraction gives partial_i(m dot B)-m_i div B; no curl B=0 is needed, unlike the textbook intermediate route. Ball containment and Taylor hypotheses give the two stated remainders; coordinate derivative maxima 9C1 and 27C2 suffice on a compact convex ball. No division by I: zero current and multiply traversed/self-intersecting closed curves are handled. Open segments use only part(a). SI force/torque types follow I dgamma cross B. Smooth sufficient condition uses only the unchanged smooth leg of Biot-Savart, so its all-space loop clarification has no effect. Item pre/post hash equal 2aca91a4b9ebb859ccec77b0d2fa35c71eb68e8b6add7b6587f298c7eb200b36; reader contract changes accurately refreshed continuum-source citations, classified audit enrichment. No defect found.

### ex-em-circular-loop-axis-field

reviewed_no_defect, audit_enrichment. Read all four steps and all direct supplier interfaces. Circle a>0 has L=2pi a, unit speed, embedded periodic extension and positive parameter orientation. At every z in R, the axis distance sqrt(a^2+z^2)>=a excludes singular support. Numerator is (z cos t,z sin t,a); s=a t substitution is increasing C1, denominator constant and both transverse period integrals vanish. This yields mu0 I a^2/[2(a^2+z^2)^(3/2)] e3, center value mu0 I/(2a)e3 and moment I pi a^2e3. Checked z=0, either sign z,I, I=0 and a>0. Finite integral computation is choice-free; global loop adoption and supplier identities carry AComega. Biot-Savart all-space loop clarification applies directly and requires no consumer change. Reader refreshed contract quotation only (item pre/post hash equal d9545c348205e6cf662540b927148e876081458782751fcd8b967797d2ee4242), classified audit enrichment. Tong pp.49–56 supports integral/loop context; exact axis calculation is supplied locally.

### ex-em-wire-force-coupling

reviewed_no_defect, audit_enrichment. Read all three steps and seven direct supplier interfaces. At wire2=(d,0,z), d>0, e_phi=e2 and external B1=mu0 I1/(2pi d)e2 is smooth on a neighborhood of every compact segment. The W coupling on [-S,S], S>0, is the force theorem on [0,2S] via parameter shift x3=s-S; it gives constant force times length 2S. Dividing by positive 2S yields -mu0 I1 I2/(2pi d)e1 in N/m. Checked positive/negative product, either current zero and independence of S; no division by current. The segment is explicitly fed/closed and retains endpoint current divergence, with self-fields and total infinite-wire force excluded. Its only use of the repaired wire example is the unchanged off-axis field formula, so circulation orientation correction needs no consumer edit. Reader changed contract citations only (item pre/post hash equal faa90f3d5b337ba6e6495637ec1a0a73179a50d31b93c6fbd8ff7051712774ff), classified audit enrichment. Tong p.58 equation3.25 independently read and matches sign and amplitude.

## Reader correction ledger and historical limits

- Closed `physics-em-sr-40-2026-10-08-5a-batch-28-cylinder-coordinate` for `lem-em-ideal-cylindrical-sheet-field`: Reader reported the original nullity argument replaced (x1,x2,x3) by (h(x1,x3),x1,x3), though h was solving for x2; that coordinate equality is false in general. Independently checked current finite-section Tonelli nullity and complete measure/piecewise-boundary proof.
- Closed `physics-em-sr-40-2026-10-08-5a-batch-28-line-majorant` for `lem-em-ideal-line-current-field`: Reader reported a global majorant |f_tilde|<=u, although u vanishes outside its containing cylinder while f_tilde need not. Current step2.1 correctly restricts the estimate to 1_K |f_tilde|, independently checked with polar integration. Other reader repairs correct exact product/L1 interfaces.
- Closed `physics-em-sr-40-2026-10-08-5a-batch-28-smooth-scope` for `pthm-em-biot-savart`: Reader reported that the earlier physical_scope excluded all source-point assertions although the smooth-current Statement asserted the integral everywhere. Current scope explicitly includes smooth support points and excludes ideal-loop pointwise source values; independent singular-kernel bounds justify the smooth assertion.

Pre/post snapshots bind hashes rather than original item text. The reader report supplies the recorded before/after claims; current repairs were independently checked. No exact historical preimage retrieval or unknown-byte reconstruction is claimed. The unbound producer finding retains its stronger explicit historical_delta_unknown record and owner disposition. No published mathematical defect was confirmed and no import/published/root supplier was edited. All thirteen owned manifest interfaces and dependency metadata were synchronized to current reviewed carriers.

## Sources, consumer impacts and limits

The primary source passages independently read were the cached full-text Tong Electromagnetism extracts at `research/first-principles-2026-10-03/classical-electromagnetism/reader-tong/pages/049.txt` through `060.txt` (printed pp.41–52), and `062.txt` through `070.txt` (printed pp.54–62), from the accompanying 236-page primary PDF. Source URL: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf. Relevant statements and arguments: orientation before (3.4), wire (3.5), jump (3.6), solenoid (3.7), vector potential/Poisson (3.12)–(3.14), volume/line Biot–Savart (3.15)–(3.16), dipole (3.19)–(3.24), parallel-wire force (3.25), and dipole force (3.28). The local proofs supply singular-kernel, distributional and remainder arguments beyond the source's formal calculations. No source quotation or whole-book reading is invented. `pdftotext` was unavailable; the actual relevant cached text was read instead. Supplementary Griffiths, Chew and Landau–Lifshitz full-text locator fidelity was not independently checked in this dispatch. Those existing author claims are not this adjudicator's source-reading claims. No empirical observation, measured numerical input, sampling model or statistical inference occurs here: all field/force conclusions remain conditional model deductions with positive SI parameters.

All direct item/reference consumers of the repaired line lemma, Biot–Savart theorem and wire example are within batch28. The wire example carries the new positive circle traversal; its wire-force consumer uses the unchanged off-axis field. The circle example uses the thin-loop all-space branch, and the force theorem uses only the unchanged compact smooth branch; both are sound without edits. The earlier reader change to the steady-current Definition was also checked against its four external direct consumers: transformer-idealization, inductor-energy, circuit-approximation and inductance-reciprocity use unchanged compact-current clause(b). No affected external content needs surgical repair. The engine/Step5b lead still owns computed cross-group dispositions; no impact window or gate closure is claimed here. No page carrier obligation was routed, no page prose was edited, no proposed withdrawal was removed, and no defective published supplier was confirmed. Consequently the published-supplier ledger was not edited. Batch28 frontier dependency records were maintained and refreshed with the prescribed tool.

## Final local checks and handoff

- Risk routing before review: 13 HIGH/CRITICAL items, 0 tool errors. Every item was reviewed in generated dependency order and its risk_review completed before moving higher.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/lem-em-ideal-line-current-field.md items/pthm-em-biot-savart.md items/ex-em-infinite-wire-and-solenoid.md`: exit0; all three unchanged.
- The same three explicit paths with `precheck.mts`: exit0, 3 checked, 0 failing.
- The same three explicit paths with `rendercheck.mjs`: exit0, renderer YAML and actual KaTeX parse passed.
- Required final batched `node tools/physics-support/proof-layout.mjs items/lem-em-ideal-line-current-field.md items/pthm-em-biot-savart.md items/ex-em-infinite-wire-and-solenoid.md`: exit0, **3 items, 22 steps, 0 defects**. No item edits occurred after this check.
- `node tools/physics-support/risk-report.mjs research/physics-em-sr-40-2026-10-08-batch-28.proof-contracts.json --require-reviewed`: exit0, all13 required reviews complete, 0 errors.
- Local obligation/ledger consistency: exactly14 obligations (11 touched, 2 flagged, 1 reader), no duplicate or missing decisions; each reader/flagged entry references exactly one closed 5a-adjudicate row. Every owned contract derivation claim agrees with the current proof after normalization, and all16 producer thin-current contract derivations also agree with its independently read proof.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-em-sr-40-2026-10-08`: exit0, refreshed and deduplicated.

Current canonical guard hashes, recorded as reading currency rather than stamps:

| Carrier | SHA-256 |
|---|---|
| lem-em-ideal-line-current-field | d96fb05c88ce6f7b47cb5dfd5ac9c7576a29ba3333c033cde3be42751e8ac583 |
| pthm-em-biot-savart | 20d87c101039d13de071d7a01682ad45a7fddb9db9d910c74058cb4c374cd870 |
| ex-em-infinite-wire-and-solenoid | 7065f66e2787c479eeb6e753b4d08fc781805338097505c269f6f9199e010bd9 |
| lem-em-thin-current-limit (read-only producer) | 36e6c2b51e19d39728c1d172f72cd0bc0cad5a62a853329e7088378692ee227e |

The immutable producer pre-snapshot raw hash independently matches `ba8deee7ef84ba14757c4c3f7293abf576959a92515167878b623a928652e932`; exact routed producer and consumer identities, dependency path, split fingerprint and pre-snapshot remain in the historical decision. Current producer full-file fingerprints:

- `research/physics-em-sr-40-2026-10-08-batch-16.proof-contracts.json`: `1e0325a4be3c9919e2798d95814eac434f972c2569f518b6257a067bb5ac7ec0`.
- `research/physics-em-sr-40-2026-10-08-batch-16.pages.json`: `dcc5f2a19c7ae3bb9eff66b79a6b3dc454262464239b55abfeaf294eac41d707`.

No unresolved mathematical prerequisite or current repair remains. The historical observed-byte limitation and supplementary source coverage limits above remain explicit. These are local checks, not independent judge/audit certification; the engine owns stamps and the gate battery.

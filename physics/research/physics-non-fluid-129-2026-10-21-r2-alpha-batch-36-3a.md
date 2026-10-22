# Batch 36 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`. Group: `batch-36` (the scope file retains original group `q`). Scope: batch 36 only. Four routed obligations decided; seven HIGH/CRITICAL reviews complete. No open mathematical blocker, outside consumer repair, withdrawal or defective published supplier identified.

## Decisions and repairs

| Obligation | Verdict | Disposition |
|---|---|---|
| touched:36:lem-gr-fx-schwarzschild-gaussian-beam-concentration | amended_repair | Retain reader's explicit coordinate/angular calculations; clarify F1's local time alias. |
| refuter:36:1 | confirmed_nonfatal | F1 now distinguishes length coordinate t=x^0 from supplier physical time x^0/c. |
| touched:36:prop-gr-fx-schwarzschild-test-energy | accepted_repair | Corrected title matches the finite-region balance, whose outer flux remains signed. |
| touched:36:ex-gr-fx08-1 | accepted_repair | Added smooth real extension hypothesis matches the modal-flux supplier. |

Every completed repair has `repair_confidence: 1`. The decisions JSON contains exactly these four entries. Four closed rows were appended to `research/defect-ledger.jsonl`, with suffixes `flux-title`, `smooth-extension`, `coordinate-derivations`, and `time-coordinate` under prefix `physics-non-fluid-129-2026-10-21-r2-3a-batch-36-`. The coordinate-calculation omission is polish: the earlier formulas are correct and admit immediate local verification. The refuter decision refers to exactly the time-coordinate row; it is not dismissed because the current text has been repaired.

The only new item edit made in this adjudication is the concentration lemma's F1 clarification and its successful precheck status. Its Statement remains unchanged. The proof consistently differentiates the length coordinate x^0, so no factor of c is inserted and c=1 is not assumed. The two reader changes in steps 1.1 and 2.1 are sound: the tortoise map is a smooth increasing bijection, the angular normalization and bilinear zero integrals are correct, and the traced Christoffel calculation gives the stated nonnegative radial potential.

The owning manifest now records the corrected Schwarzschild title and the current Kerr Example, including its smooth-extension premise. The reader's updated derivations are retained; the owning proof contract records all seven specific Alpha risk reviews. No item had a judge record requiring invalidation. No IDs, dependencies, page placement, scope qualifications or mathematical content contract were withdrawn.

## Ordered mathematical and risk review

The following items were completed in the dispatched order before proceeding to a higher dependency level. Each numbered proof/verification step was checked, including the reader/refuter evidence and exact load-bearing direct supplier statements. The review does not claim a fresh audit of the full transitive supplier library.

**`lem-gr-fx-scalar-dominant-energy`.** Checked steps 1.1–3.1 and the exact scalar tensor, observer projection, causal classification and Cauchy–Schwarz suppliers. The orthogonal decomposition gives ell=b-a n; future X=alpha n+Y has alpha>=|Y|. The lower bound alpha(|a|-|b|)^2/2 includes null vectors and vanishing derivatives. X=0 is only an extra algebraic case, not a redefinition of causal. Countable Choice is retained solely through the smooth conventions. No empirical or coupled-matter claim; no diagram or outstanding finding.

**`prop-gr-fx-wave-multiplier-identity`.** Checked all four steps against the scalar Definition and the metric-selected connection, Killing Definition and on-shell identities suppliers. Metric compatibility and torsion-free scalar Hessian symmetry cancel the mixed terms; symmetry of Q supplies the half Lie derivative. The identity is local, so no orientation or integration assumption is needed. Zero field, zero multiplier and Killing/on-shell specialization hold. Countable Choice is explicit; this asserts neither decay nor empirical validity. No diagram or outstanding finding.

**`lem-gr-fx-schwarzschild-gaussian-beam-concentration`.** Independently checked all steps 1.1–6.1, reader coordinate additions, all five supplier interfaces and the refuter time-convention finding. Local t explicitly means x^0 (length), not supplier physical x^0/c. Verified r_x=f, scalar reduction W_l>=0, angular real-field factor 1/2, global versus annular energy distinction, deterministic Picard construction and finite propagation, V0 curvature -2 Omega^4, Gaussian Riccati signs, O_H(sqrt(h)) residual, positive normalization Omega sqrt(pi), and energy error O_H(h). Fixed H permits frequency depending on H; no infinite-time or angular-neighborhood assertion. Cutoff stays strictly outside horizon; zero data are not divided by; endpoints included. Only Countable Choice inherited, no wave-existence theorem or general Gaussian-beam theorem silently assumed. No diagrams. Refuter convention ambiguity repaired without Statement change.

**`prop-gr-fx-schwarzschild-test-energy`.** Checked all six steps and exact eleven direct supplier interfaces, including advanced extension, causal positivity and finite-chain flux clause (c). Determinant gives vol=r^2 dv wedge dr wedge sphere area. On inner horizon j^r=-Q_vv=-(T psi)^2 and contraction contributes -j^r dv wedge area with outward orientation, so horizon flux is positive. Future-adapted spacelike faces have -g(j,n)=Q(n,T); signed outer flux remains unrestricted. Stokes yields E2+FH+Fout=E1. Static-slice density degeneracy does not assert decay or redshift. Zero scalar and horizon limit checked; no infinite-boundary limit used. Countable Choice explicit; no diagram. Reader title repair accurately removes an overstrong positivity implication without changing Statement.

**`ex-gr-fx08-2`.** Checked three Verification steps against the exact no-loss estimate Definition, current locally proved concentration lemma, dominant-energy lemma and published photon-sphere clause (d). The geodesic supplier has affine domain R and x^0 strictly increasing through R. With epsilon=1/2, for every finite H there is a possibly different unit-energy real wave whose annular energy is at least 1/2 throughout [0,H]. Nonnegativity bounds the improper integral below by H/2 even if infinite; choose H>max(0,2C) for any finite proposed constant. No interchange of limits or one wave concentrated forever is claimed. Horizon excluded by delta<s/2; Countable Choice inherited via F4/A1. No empirical or gravitational stability inference, diagram or open defect.

**`lem-gr-fx-kerr-horizon-modal-flux`.** Checked all five proof steps, exact eight supplier interfaces and the current horizon-generator proof, including its global ingoing extension, signature and compatible future orientation. Null-normal chi is orthogonal to tangent T; hence Q(chi,T)=(chi psi)(T psi), independent of normal derivatives of the assumed smooth extension. Tu=-i omega u integrates to A exp(-i omega tau); averaging sin^2 over a complete stationary period yields omega(omega-m Omega_H)|A|^2/2. Nodes give zero; threshold omega=m Omega_H also gives zero, and either sign of a is allowed. Finite-segment smooth dependence makes the admissible set open; a null pair yields a positive transverse two-plane, enabling a compact spacelike disk. Boundary nonzero values persist into its interior, so nonzero trace implies positive finite area integral. Empty admissible sets cause no existence claim. AC_omega retained, no global wave or scattering theorem inferred. Supplier stationary-limit diagram gives 8/5 at axes, 2 at equator for |a|/M=4/5, with correct labels; no owned diagrams.

**`ex-gr-fx08-1`.** Checked all three Verification steps against current mode Definition and modal-flux lemma, including smooth real scalar extension and full-period domain requirements. m has the sign of Omega_H and omega=m Omega_H/2>0; shifted frequency is -m Omega_H/2 and coefficient is -(m Omega_H)^2/8. Node equality and strictly negative nonzero cut integral follow from the lemma, with finite positive area measure. Reader added the extension premise to Example/A2, exactly matching the supplier; no wave equation or global existence inferred. Either sign of nonzero a allowed; m=0 and omega=0 excluded by the positive product. Direct/reference consumer search finds only the companion page placement, which requires no prose repair. Countable Choice explicit; no diagram, empirical assertion or outstanding issue.

## Supplier and consumer evidence

Read the complete current carriers and the exact relevant Statement/Definition sections of:

- Scalar/pointwise identities: `def-countable-choice`, `def-gr-fx-scalar-wave-stress`, `def-causal-classification-of-lorentz-vectors`, `def-gr-observer-and-rest-space`, `lem-gr-observer-projection-decomposition`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `def-gr-killing-field`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, and `thm-gr-killing-and-on-shell-matter-identities`.
- Schwarzschild claims: `def-gr-schwarzschild-exterior-model`, `def-gr-fx-nondegenerate-local-energy-estimate`, `lem-smooth-bump-between-concentric-euclidean-balls`, `def-gr-metric-volume-form-and-current-flux`, `thm-gr-density-divergence-and-finite-chain-flux`, `lem-gr-schwarzschild-metric-properties`, `lem-gr-schwarzschild-extension-chart`, and `lem-gr-schwarzschild-circular-orbits-and-photon-sphere`. The last supplier's clause (d) and proof 3.1 were checked for the actual orbit use.
- Kerr claims: `def-gr-fx-kerr-exterior`, `def-gr-fx-kerr-horizon-mode`, `prop-gr-fx-kerr-horizon-generator`, `def-integral-curve-of-a-vector-field`, `thm-unique-maximal-integral-curve-through-each-point`, and `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`. The horizon-generator's complete proof and stationary-limit diagram were also checked.

The Kerr example's changed public premise has no item consumer: a targeted search of `items/` and `library/` found only its own carrier and companion examples-page placement. That frontmatter-only page requires no repair. The concentration correction is confined to Facts; the title correction changes no Statement. No further interface hop is required. The owned cross-batch records remain unchanged, and `briefs/tasks/frontier-dependency-ledger.md` records the scoped consumer review. This does not certify batch 35's producer inventory. Published and imported content remains read-only; no published-ledger entry is warranted.

All claims are mathematical conditional test-field results. They contain no measurements, sampling claims or statistical inference, and do not imply that an adopted model describes nature. In particular no scalar conclusion is promoted to gravitational, coupled-matter, scattering or nonlinear stability.

## Sources actually consulted

- [Dafermos–Rodnianski, Lectures on black holes and linear waves](https://arxiv.org/pdf/0811.0354), §3.2.2, equations (8)–(9), and §§5.2.1–5.2.3, equations (56)–(62): scalar current conservation/positivity and Kerr horizon generators/frequency discussion. The local proofs supply the exact identities used here; the broad frequency discussion is not substituted for the explicit local modal calculation.
- [Reall, Black Holes, 15 March 2024](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf), §§7.3–7.4, equations (7.5)–(7.9), and §9.1: regular Kerr coordinates and null generator. These references supply geometric context; §9.1 is about Killing horizons/surface gravity, not a proof of the scalar stress identity.
- [Sbierski, arXiv:1311.2477v2](https://arxiv.org/pdf/1311.2477), Theorem 2.1, equations (2.2)–(2.3), and §3.1.1: checked the finite-time localization statement, its global-hyperbolicity and energy-control hypotheses, and photon-sphere application. The local concentration proof uses its own separated radial construction, not this theorem as an unchecked external premise.
- [Marzuola–Metcalfe–Tataru–Tohaneanu, arXiv:0802.3942](https://arxiv.org/pdf/0802.3942), §1, equation (1.6) and following normalized tortoise coordinate: checked the exterior metric, dr*/dr=f^-1, normalization at 3M and advanced coordinate extension, with s=2M.

These are bounded source-section readings, not whole-book or whole-paper proof audits. PDF indexes and printed pagination differ; section and equation numbers identify the inspected content.

## Historical comparison

Read the immutable pre/post hash inventories, reader report/findings, refuter report and scope. The current Kerr example and Schwarzschild proposition initially matched their post-reader raw fingerprints exactly. The concentration carrier before this adjudication's F1 edit also reproduces its post-reader fingerprint (with its original pending precheck field). The reader findings array is empty; its report records the three repairs.

Exact pre-reader raw-byte matches were found for the concentration lemma in `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/lem-gr-fx-schwarzschild-gaussian-beam-concentration.md` and for the Kerr example in `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-gr34-orientation/released-join/consumer-current/items/ex-gr-fx08-1.md`. Their complete diffs confirm the two coordinate expansions and added extension hypothesis, respectively, apart from reflow and the new F1 clarification.

For the title-only decision, the original title is independently present in the earlier batch manifest and archived carrier, and the reader report identifies the correction. The exact proposition pre-reader raw preimage was not recovered: the older baseline also predates separate orientation/Remarks changes. No exact whole-file historical diff or review of those older baseline changes is asserted. The decision accepts the documented title correction after complete current-proof review; it does not invent historical source bytes. The frozen refuter fingerprint is retained in the scope; both recovered pre-reader and current F1 have the reported convention collision before the present repair.

## Local checks and handoff

- Initial `risk-report.mjs` on the owning contract: seven routed HIGH/CRITICAL items, zero errors.
- `reflow.mts` on the concentration lemma: unchanged.
- Explicit `precheck.mts` on the three changed carriers: three checked, zero failing.
- Explicit `rendercheck.mjs` on those carriers: three files, all YAML and math parse.
- Final `risk-report.mjs` on the owning contract with `--require-reviewed`: seven reviewed items, zero errors.
- Final combined `proof-layout.mjs` on the concentration lemma, Schwarzschild proposition and Kerr example: three items, nineteen steps, zero defects.
- Local JSON/manifest assertions: exactly four unique owed decisions, matching the scope; synchronized title/Example entries equal current carriers.

No judge, stamp, agent dispatch, acceptance certification or engine gate battery was run. Engine-owned current hash stamping and gates remain for the handoff. No unresolved mathematical or consumer obligation remains in this dispatched batch; the historical raw-byte reading limit above is retained explicitly.

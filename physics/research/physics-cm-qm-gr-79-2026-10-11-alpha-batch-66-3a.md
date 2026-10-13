# Batch 66 Step 3a adjudication

Run: physics-cm-qm-gr-79-2026-10-11. Group: batch-66. Role: alpha.

Scope: two touched definitions, reader:66:1 (published tensor-bundle supplier), and sixteen required HIGH/CRITICAL risk reviews. No page or refuter finding decisions are owed. Published and imported suppliers remain read-only.

## Review checkpoint

Read the mandatory workspace rules, task/order, scope, reader report/findings and refuter artifact. Initial risk-report succeeds and routes sixteen required reviews (eighteen total contracts including two moderate). Definitions and level-3 projection proof inspected. Projection proof explicitly constructs three independent projected spatial vectors; it never assumes a generic orthonormal time basis equals n. Zero, equality, unique splitting and positivity cases check.

Reader normalization g(n,n)=-1 is sound; corrected lowering T_ab=g_ac T^c_b and raising S^a_b=g^ac S_cb are sound. Additional current defect found in adapted-chart Definition (c): constancy on local curve segments does not imply equal spatial labels after a maximal curve leaves and re-enters the chart. Repair to connected parameter intervals is pending; all actual direct consumer uses are being checked before closure. Published supplier Step 2.1 currently retains reversed factors; independent source check and ledger disposition pending.

## Levels 3–4 completed

- `lem-gr-observer-projection-decomposition`: Checked every step and exact L1-L7 statements: h is idempotent, kernel Rn, image n-perp; expansion proves pairing identity. In a generic future orthonormal basis n0>0, Cauchy-Schwarz gives g(v,v)>=|v_sp|^2/(n0)^2 on n-perp, equality only v=0. Projected f1,f2,f3 are independent using the zero time component and span by pairing with n. Unique decomposition includes zero. Finite pointwise basis selection adds no choice to inherited AC_omega.
- `cor-gr-adapted-chart-existence`: Checked flow-box nonzero-field hypotheses on restricted open U and relabelling of four coordinates. Curve components solve dot u0=1 and dot ui=0 on each connected parameter interval lying in the chart. Amended supplier Definition (c) now states exactly this local-segment convention; neither flow completeness nor labels across re-entry are asserted. No proof repair is needed.
- `lem-gr-contraction-of-smooth-tensor-fields`: Checked basis-independent contraction supplier, coordinate duality and finite-sum smoothness. r,s>=1 ensure contracted slots exist; r=s=1 produces the type (0,0) scalar trace; finite within-variance permutations handle all other slot pairs. Zero fields and scalar output obey the same formula. Published tensor-bundle Step 2.1 remains an external hold on section equivalence, while this coordinate-family argument independently establishes contraction smoothness.
- `lem-gr-observer-pairing-with-future-causal-vectors`: Checked L1-L6, both time-orientation implications and equality case. Nonzero future causal w has w0>0 and gamma>=w0(n0-|n_sp|)>0; the null boundary is included and zero explicitly excluded. Positive rest-space norm gives gamma>=1 for unit future w; equality forces h(w)=0 and future normalization then w=n. Past case uses -w; no zero division or converse gap.
- `lem-gr-tensor-component-transformation-law`: Checked exact tangent-change, dual-coordinate, coordinate-derivation and smooth-algebra suppliers. Multilinearity gives upper J=D(y o x^-1) and lower J^-1=D(x o y^-1) factors. Empty slot products for r=s=0 yield scalar law; vector and covector cases agree. Covering-atlas argument proves both smoothness directions locally on y(U intersect V). Published bundle supplier reverses these factors; its correctness is not inferred from this local lemma.
- `prop-gr-rest-space-integrability-criterion`: Checked smoothness of alpha_a=sum_b g_ab n^b, alpha(n)=-1, local nonzero alpha0 neighborhood and independent spanning fields Xi=alpha0 partial_i-alpha_i partial_0. Thus rank three is established before Frobenius is needed. Exact codimension-one criterion applies to a nowhere-zero smooth one-form; both iff directions and local Frobenius coordinate slices follow. No global foliation product or adapted-time/orthogonality identification is claimed.

Definition (c) repaired to constancy on connected components of the preimage of the chart domain; normalization display changed to schema-valid dollars. Direct uses examined: congruence/observer-curve consumers use clauses (a)–(b), which retain their content; adapted-coordinate consumers use local ODE constancy and do not use re-entry labels. Tensor lowering/raising consumers use the same correct musical contractions. No outside consumer repair required; exact IDs and locators will be listed at handoff.

## Level 5 completed

- `lem-gr-tetrad-change-of-basis-is-lorentz`: Read every step and L1-L6 suppliers. Unique E-basis coordinates yield Lambda; pairing gives Lambda^T eta Lambda=eta, determinant gives invertibility and +/-1. Future component in E coordinates gives Lambda00>0, without assuming spatial orientation or determinant +1. Dual F coframe uses Lambda^-1 while covariant slots use Lambda, distinct from the chart-Jacobian convention. Empty slots are harmless and no global field choice is used.
- `thm-gr-local-lorentz-tetrad-existence`: Read every step and L1-L12 exact statements. Corrected step 5.1: g(Bi,F0)=G0i/sqrt(-G00), not G0i; cancellation now uses the normalized pairing twice. All successive radicands equal one at p and remain positive on finite shrunk open neighborhoods. Smooth inverse-square-root construction satisfies injectivity/nonzero derivative on positive reals. Gram eta implies pointwise independence and F0 future sign is retained. Only inherited AC_omega; no global tetrad or observer-adapted tetrad is claimed.
- `thm-gr-observer-relative-velocity-decomposition`: Read all seven steps and the exact projection/pairing hypotheses. gamma>0 prevents division by zero, positivity gives gamma>=1 with equality u=n. Norm bound remains strict at zero velocity and all finite gamma. Pairing and projection prove uniqueness even for initially unrestricted lambda. Converse pairs lambda>=1 and v in rest space with the norm relation give future unit u and both maps inverse. c>0 and all endpoint cases are explicit; no physical measurement is inferred.
- `ex-gr-boosted-constant-tetrad-field`: Read every verification step and frame/congruence/component definitions. All Gram pairings and inverse chart check. Repaired proof 5.1 at beta=0: n=gamma partial_u0 equals partial_u0 exactly then, and differs for beta nonzero. The original Example only claims need not equal, so its interface is unchanged. Negative beta and either open endpoint -1,1 cause no gap (endpoints excluded); constant coefficient smoothness and future -gamma<0 hold.
- `ex-gr-mixed-tensor-transformation-and-contraction`: Read all four verification steps and local tensor/transform/contraction suppliers. The shear has explicit inverse and J T J^-1 gives four +/-1 entries and T23=y1-y0, all others zero; trace is zero in each chart. Coordinate-defined family has smooth entries, and local transformation proves all-chart smoothness. Published bundle/section equivalence remains an external owner hold, not a claim this example repairs it. No physical or empirical premise.
- `ex-gr-shearing-congruence-tetrad-and-adapted-chart`: Read all six verification steps, smooth-function, inverse-regular-map, bracket and frame suppliers. W open and 1-Omega^2>3/4 keep normalization smooth; direct Gram identity gives tetrad and future -gamma<0. Spatial invariants follow from dot x1=0; chart has explicit smooth inverse with image the same x1 strip. Bracket -gamma_prime partial0-(gamma Omega)_prime partial2 is nonzero where x1!=0, as claimed; at x1=0 the second coefficient is still -lambda. Chart-field equals n at that locus but is not the same field globally. No integral-curve completeness assumption.

Two proof-only corrections preserve the public Statements/Example; updated corresponding derivation claims, provenance and repair confidence. Neither has a judge record. They were risk-only carriers in the original routing; no additional decision obligation is invented. Engine must include their changed hashes in its closeout coverage.

## Levels 6–7 completed

- `lem-gr-observer-energy-momentum-identities`: Checked all seven steps and energy/projection/pairing/velocity definitions, with c>0. Repaired partial mass notation: E,q exist for every P but m(P) only when g(P,P)<=0; master identity still includes spacelike P. Corrected L3 to future unit timelike, since z=-n would give gamma=-1. Proof only applies this bound to the explicitly future u=P/(mc). Zero yields E=q=m=0; future null has positive energy and positive root; massive P ensures m>0 before division. Exact direct consumers use future timelike P and remain valid. No physical units or observations inferred.
- `rem-gr-chart-tetrad-congruence-and-observer-distinctions`: Read every assertion against the actual definitions and projection, flow-box, local tetrad, Lorentz-change and Frobenius results. Adapted curves mean local segments in chart, as repaired in Definition (c); coordinate-field need not equal n is existential and includes the zero-boost equality. Integrable rest spaces are a separate iff alpha wedge d alpha=0, with no global product conclusion. This is nonproof expository mathematical content and asserts no measurement. Published tensor-bundle dependency hold remains explicit.
- `cex-gr-shearing-congruence-rest-spaces-not-integrable`: Read all four steps and exact shear/Frobenius/exterior/wedge suppliers. Recomputed alpha=gamma(-dx0+Omega dx2), d alpha=gamma_prime dx0 wedge dx1+(gamma_prime Omega+gamma lambda) dx1 wedge dx2. Wedge signs give alpha wedge d alpha=-gamma^2 lambda dx0 wedge dx1 wedge dx2, nowhere zero including x1=0 because lambda>0. Thus no open integral rest-space hypersurface exists. Adapted chart is independent of this obstruction. Coordinate differentials are a basis, so the displayed three-form is nonzero; strip endpoints excluded.
- `ex-gr-observer-energy-of-a-boosted-test-body`: Read all three verification steps and boost/energy/mass suppliers. m,c positive give P=mcu future timelike and mass(P)=sqrt(m^2 c^2)/c=m; energy mc^2 gamma>0, momentum mc gamma beta E1. gamma^2(1-beta^2)=1 proves mass shell directly. beta=0 yields E=mc^2 and zero momentum; negative beta changes momentum sign only; +/-1 excluded. Corrected energy lemma mass domain satisfied strictly; this is mathematical kinematics and reports no observation.

Mass-domain consumer review: owned `ex-gr-observer-energy-of-a-boosted-test-body` [L3]/Verification 1.1–3.1 has P=mcu future timelike. Outside `lem-gr-observer-relative-velocity-expansions` [L1]/Statement and `ex-gr-observer-velocity-expansion-numeric-check` [L2] explicitly assume future timelike P with positive mass. A-page energy paragraph describes timelike mass shell and null specialization. All uses remain valid; no necessary outside repair or second-hop review.

## Concrete re-entry counterexample

The unrepaired Definition (c) is false as an equivalence, not merely ambiguous. Take M=(R/Z) x R^3 with local angular coordinate t, global spatial coordinates x,y,z, metric -dt^2+dx^2+dy^2+dz^2, N=partial_t, beta=1/4 and gamma=(1-beta^2)^(-1/2). The smooth field n=gamma(partial_t+beta partial_x) is future unit timelike. In the angular chart t in (-1/4,1/4), spatial x,y,z in (-1,1), set u=(t/gamma,x-beta t,y,z). This is a smooth invertible chart and n=partial_u0, so all restricted integral-curve segments have constant spatial labels. The maximal curve through (t,x,y,z)=(0,0,0,0) returns after flow time 1/gamma at (0,beta,0,0), still inside the chart; u1 is then beta instead of zero. Thus the original quantified equality across every return fails. The repaired component-wise interval condition is exactly the one proved by the corollary and used by the examples. No new item or page was added.

## Published supplier hold and historical binding

`reader:66:1` is escalated. The proof defect is confirmed; the theorem conclusion is not refuted. With J=D(y o x^-1), dy=J dx and partial_y=J^-1 partial_x imply one J per upper tensor index and one J^-1 per lower index. Scaling y0=2x0 gives an elementary witness. The actual published vector-bundle chart supplier defines transition as Phi_y o Phi_x^-1; the cocycle theorem requires a supplied countable cover. The published tensor proof must establish the actual transition maps with those hypotheses. Our coordinate-family arguments are independently sound, but do not repair that external proof or certify the section equivalence in the tensor Definition (b).

Retrieved and read [Lee, Introduction to Smooth Manifolds, equations (11.4)–(11.7), printed pp. 275–276 (PDF pp. 292–293)](https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf). The coordinate vector and covector component rules support the above direction after solving for the new coordinates; basis changes and component changes must be distinguished. The published supplier and its five exact dependency statements were inspected. No claim of reading every other bibliography entry is made; the remaining local proofs were checked against their exact item suppliers and explicit algebra.

The current imported raw hash is `7e1258dd86981791c0f74ff163085cabd7ec9831aafc04af419ffcc9a14eb6b1`, equal to its pinned `research/math-imports.json` record. SHA-256 of the canonical one-field carrier {item_sha256: raw} is `ac341e6c19c0d1cbabfafa2b0ea4e4b2e540dfd0641d5d892336499c882e0161`, exactly the scope observed binding; the verification-excluded hash is `f2837d99369de07dd3f07e70cbfdcddbbea346ac0f5897c9e3f4c6d8104cd2ad`, exactly the scope pre binding. No missing historical bytes or unbound observation is inferred. The original defect still occurs in the current bytes.

The published ledger and its deduplicated index were merged after exclusive creation of `research/.published-consumer-ledger.lock`; only that lock was released. The published defect row stays OPEN. The exception to closed finding dispositions is the mandated escalation rule: no closed repaired-fatal row or completed external repair is fabricated. The owner must supply a sound mathematics repair and consumer dispositions and resolve immutable-import reconciliation or an adequate alternative supplier before this hold can close.

## Consumer coverage and scope

The two definition preimages are durable Git HEAD carriers matching both pre-reader raw hashes. Tensor definition currently exactly matches reader post bytes; observer definition additionally has the interval correction and schema-valid display delimiters. Seven confirmed local defects have closed fixed rows and repair_confidence 1; the external published defect is open. There are exactly three original owed decisions. The three additionally repaired risk-only items are reported for engine hash/coverage reconciliation; no extra obligation or stamp is invented.

All 52 distinct direct dependencies were opened at their relevant Definition/Statement scope, including the inherited AC_omega and mathematical-only classifications. The 23 assigned items and both page summaries were inspected as argument/consumer context, with every required high-risk proof reviewed explicitly. No assertion of a transitive full-corpus audit is made. No page change was necessary: page wording invokes local charts, standard contractions, timelike mass shell and null specialization. No physical observations, measured precision or statistical certainty are asserted by these mathematical carriers.

The direct and reference consumer uses of both changed definitions are listed below. Clause (a)/(b) congruence properties and tensor component smoothness remain intact; local adapted-chart uses never require labels across re-entry. Existing upper/lower contractions are already correctly typed. Metadata-only dependencies were checked against their actual congruence or tensor formulas. No outside necessary repair was identified; hence no additional consumer escalation or second hop is required. This finding is limited to effects of the repaired interfaces, not whole-item acceptance of outside consumers.

Supplier `def-gr-observer-congruence-and-adapted-charts`:

- `items/cex-gr-conservation-does-not-imply-nonnegative-measured-energy-density.md`:14,18,60 — explicit body reference; relevant use preserved.
- `items/cex-gr-measured-energy-density-depends-on-the-observer.md`:14,20,49 — explicit body reference; relevant use preserved.
- `items/cor-gr-adapted-chart-existence.md`:13,15,34,47 — explicit body reference; relevant use preserved.
- `items/def-gr-congruence-acceleration-and-expansion.md`:12,14,46 — explicit body reference; relevant use preserved.
- `items/def-gr-dust-reduction-variables-and-gauge.md`:13,24,71 — explicit body reference; relevant use preserved.
- `items/def-gr-geodesic-congruence-and-kinematics.md`:12,14,48 — explicit body reference; relevant use preserved.
- `items/def-gr-killing-energy-charge.md`:12,24,65 — explicit body reference; relevant use preserved.
- `items/def-gr-local-frame-and-tetrad-fields.md`:12,14,69 — explicit body reference; relevant use preserved.
- `items/def-gr-measured-energy-density-flux-and-stress.md`:12,19,42 — explicit body reference; relevant use preserved.
- `items/def-gr-observation-and-analysis-architecture.md`:12,22,76 — explicit body reference; relevant use preserved.
- `items/def-gr-observer-energy-momentum-current.md`:12,18,46,116 — explicit body reference; relevant use preserved.
- `items/ex-gr-boost-congruence-energy-balance-in-flat-space.md`:13,31,102 — explicit body reference; relevant use preserved.
- `items/ex-gr-boosted-constant-tetrad-field.md`:13,16,55 — explicit body reference; relevant use preserved.
- `items/ex-gr-killing-energy-charge-of-a-static-dust.md`:42,65,134 — explicit body reference; relevant use preserved.
- `items/ex-gr-perfect-fluid-energy-equation-from-the-local-balance.md`:13,27 — declared dependency/placement context; relevant use preserved.
- `items/ex-gr-radial-focusing-in-flat-minkowski.md`:13,20,92 — explicit body reference; relevant use preserved.
- `items/ex-gr-schwarzschild-static-clock-ratio-explicit.md`:13,18,40,76 — explicit body reference; relevant use preserved.
- `items/ex-gr-shearing-congruence-tetrad-and-adapted-chart.md`:13,15,61 — explicit body reference; relevant use preserved.
- `items/ex-gr-translating-dust-measured-energy-and-balance.md`:13,28,92 — explicit body reference; relevant use preserved.
- `items/lem-gr-congruence-acceleration-and-expansion-properties.md`:13,17,58,86,88,100,115 — explicit body reference; relevant use preserved.
- `items/lem-gr-dominating-cone-bounds.md`:13,17,78 — explicit body reference; relevant use preserved.
- `items/lem-gr-energy-momentum-current-divergence.md`:13,25 — declared dependency/placement context; relevant use preserved.
- `items/lem-gr-flrw-comoving-congruence-expansion.md`:13,25,55,81 — explicit body reference; relevant use preserved.
- `items/lem-gr-killing-congruence-kinematics-and-energy-current.md`:13,20,103,133 — explicit body reference; relevant use preserved.
- `items/lem-gr-kinematic-decomposition-identities.md`:13,16,62 — explicit body reference; relevant use preserved.
- `items/lem-gr-observer-energy-momentum-decomposition.md`:13,20,87 — explicit body reference; relevant use preserved.
- `items/lem-gr-schwarzschild-static-congruence-and-clock-rates.md`:13,22,60,102,108 — explicit body reference; relevant use preserved.
- `items/prop-gr-rest-space-integrability-criterion.md`:13,15,45,72 — explicit body reference; relevant use preserved.
- `items/pthm-gr-local-energy-balance.md`:14,38,153 — explicit body reference; relevant use preserved.
- `items/pthm-gr-schwarzschild-circular-orbit-predictions.md`:23,45,164 — explicit body reference; relevant use preserved.
- `items/pthm-gr-schwarzschild-stationary-redshift.md`:13,24 — declared dependency/placement context; relevant use preserved.
- `items/pthm-gr-schwarzschild-vacuum-model.md`:13,31,143 — explicit body reference; relevant use preserved.
- `items/pthm-gr-tidal-comparison.md`:14,33,66 — explicit body reference; relevant use preserved.
- `items/rem-gr-chart-tetrad-congruence-and-observer-distinctions.md`:12,19,46 — explicit body reference; relevant use preserved.
- `items/rem-gr-local-and-global-energy-scope-and-deferrals.md`:12,19,108 — explicit body reference; relevant use preserved.
- `items/rem-gr-normal-coordinates-and-local-inertial-frames-scope.md`:12,18,63 — explicit body reference; relevant use preserved.
- `items/thm-gr-timelike-raychaudhuri-and-local-focusing.md`:13,19,74 — explicit body reference; relevant use preserved.
- `library/general-relativity/gr-tensors-and-observers.md`:14,71 — explicit body reference; relevant use preserved.

Supplier `def-gr-tensor-fields-and-components`:

- `items/cex-gr-symmetries-do-not-imply-bianchi.md`:13,16,45 — explicit body reference; relevant use preserved.
- `items/cex-gr-vanishing-tidal-operator-for-one-observer.md`:13,16,45 — explicit body reference; relevant use preserved.
- `items/def-gr-congruence-acceleration-and-expansion.md`:12,19 — declared dependency/placement context; relevant use preserved.
- `items/def-gr-curvature-tensor-and-derived-tensors.md`:12,19 — declared dependency/placement context; relevant use preserved.
- `items/def-gr-dust-electric-magnetic-weyl-variables-and-schouten.md`:13,17 — declared dependency/placement context; relevant use preserved.
- `items/def-gr-dust-reduction-variables-and-gauge.md`:13,20 — declared dependency/placement context; relevant use preserved.
- `items/def-gr-harmonic-gauge-and-reduced-equations.md`:13,19,56 — explicit body reference; relevant use preserved.
- `items/def-gr-hilbert-stress-energy-tensor.md`:12,19,75 — explicit body reference; relevant use preserved.
- `items/def-gr-jacobi-field-and-conjugate-instant.md`:12,22 — declared dependency/placement context; relevant use preserved.
- `items/def-gr-killing-energy-charge.md`:12,26 — declared dependency/placement context; relevant use preserved.
- `items/def-gr-observer-energy-momentum-current.md`:12,20,58,74 — explicit body reference; relevant use preserved.
- `items/def-gr-plane-wave-perturbation.md`:12,18 — declared dependency/placement context; relevant use preserved.
- `items/def-gr-wave-screen-and-tt-projection.md`:12,18 — declared dependency/placement context; relevant use preserved.
- `items/ex-gr-boost-congruence-energy-balance-in-flat-space.md`:13,30 — declared dependency/placement context; relevant use preserved.
- `items/ex-gr-killing-energy-charge-of-a-static-dust.md`:37,60 — declared dependency/placement context; relevant use preserved.
- `items/ex-gr-mixed-tensor-transformation-and-contraction.md`:13,15,58 — explicit body reference; relevant use preserved.
- `items/lem-gr-algebraic-curvature-vanishing-criterion.md`:13,20,41,57,59 — explicit body reference; relevant use preserved.
- `items/lem-gr-compact-variation-coefficient-vanishing.md`:13,17,56,65,67 — explicit body reference; relevant use preserved.
- `items/lem-gr-contraction-of-smooth-tensor-fields.md`:13,15,35,61 — explicit body reference; relevant use preserved.
- `items/lem-gr-dust-initial-data-and-tilted-initialization.md`:23,40 — declared dependency/placement context; relevant use preserved.
- `items/lem-gr-dust-weyl-reconstruction-from-electric-magnetic.md`:13,18,53 — explicit body reference; relevant use preserved.
- `items/lem-gr-energy-momentum-current-divergence.md`:13,24,81 — explicit body reference; relevant use preserved.
- `items/lem-gr-flrw-christoffel-symbols.md`:13,25 — declared dependency/placement context; relevant use preserved.
- `items/lem-gr-flrw-comoving-congruence-expansion.md`:13,28 — declared dependency/placement context; relevant use preserved.
- `items/lem-gr-hilbert-tensor-uniqueness.md`:13,22,56 — explicit body reference; relevant use preserved.
- `items/lem-gr-killing-congruence-kinematics-and-energy-current.md`:13,29,101 — explicit body reference; relevant use preserved.
- `items/lem-gr-null-phase-coordinate.md`:13,24,80 — explicit body reference; relevant use preserved.
- `items/lem-gr-observer-energy-momentum-decomposition.md`:13,23,85,91 — explicit body reference; relevant use preserved.
- `items/lem-gr-reduced-einstein-principal-part.md`:13,19,67 — explicit body reference; relevant use preserved.
- `items/lem-gr-schwarzschild-christoffel-symbols.md`:13,24,85 — explicit body reference; relevant use preserved.
- `items/lem-gr-schwarzschild-curvature-and-kretschmann-scalar.md`:13,27,105,107 — explicit body reference; relevant use preserved.
- `items/lem-gr-schwarzschild-ricci-and-einstein-tensors.md`:13,26 — declared dependency/placement context; relevant use preserved.
- `items/lem-gr-tensor-component-transformation-law.md`:13,15,42,59 — explicit body reference; relevant use preserved.
- `items/lem-gr-tetrad-change-of-basis-is-lorentz.md`:13,15,66 — explicit body reference; relevant use preserved.
- `items/lem-gr-tt-screen-projector.md`:13,28,96 — explicit body reference; relevant use preserved.
- `items/lem-gr-warped-spherical-christoffel-and-ricci.md`:13,21,126 — explicit body reference; relevant use preserved.
- `items/pthm-gr-einstein-consistency-and-energy-conditions.md`:14,35,125 — explicit body reference; relevant use preserved.
- `items/rem-gr-chart-tetrad-congruence-and-observer-distinctions.md`:12,14,77 — explicit body reference; relevant use preserved.
- `items/thm-gr-compact-metric-and-timelike-curve-variation.md`:13,24,64,132 — explicit body reference; relevant use preserved.
- `items/thm-gr-constraint-equations-in-normal-frame.md`:13,24,69 — explicit body reference; relevant use preserved.
- `items/thm-gr-curvature-algebraic-symmetries.md`:13,22,67 — explicit body reference; relevant use preserved.
- `items/thm-gr-curvature-tensoriality-and-coordinate-formula.md`:13,28,99 — explicit body reference; relevant use preserved.
- `items/thm-gr-killing-and-on-shell-matter-identities.md`:13,23 — declared dependency/placement context; relevant use preserved.
- `items/thm-gr-nondegenerate-levi-civita-and-tensor-derivative.md`:13,31,86,113,145 — explicit body reference; relevant use preserved.
- `items/thm-gr-second-bianchi-and-divergence-free-einstein.md`:13,23,77 — explicit body reference; relevant use preserved.
- `library/general-relativity/gr-tensors-and-observers.md`:12,36 — explicit body reference; relevant use preserved.

## Validation and handoff

All checks below were local focused checks, not a gate battery or proof acceptance stamp:

- Reflow on the five changed item paths: four unchanged; boost verification reflowed.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` on those five paths: 3 proof-bearing items checked, 0 failing; two definitions not proof targets.
- `node tools/physics-support/rendercheck.mjs` on those five paths: exit 0, all five YAML blocks and real KaTeX expressions parse.
- Final single batched `node tools/physics-support/proof-layout.mjs` on those five paths: 5 items, 21 steps, 0 defects.
- Initial risk report: exit 0, eighteen contracts routed, sixteen HIGH/CRITICAL. Current `--require-reviewed` report: exit 0, all sixteen specific required reviews complete. Local risk completion does not clear the separate published dependency hold.

Owning manifest interfaces and provenance, repaired derivation claims, affected citation quotes, risk reviews, defect ledger, frontier ledger and decision file are updated. Stable IDs, inventories and page pairs remain present. No judge records were present on the repaired items; no judging, stamping, dispatching, publication, engine scheduling or gate cycle was performed.

Handoff blocker: `reader:66:1`, published tensor-bundle transition proof. Mathematics-owner resolution required. Engine also owns reconciliation of the three risk-only edited carriers (`ex-gr-boosted-constant-tetrad-field`, `thm-gr-local-lorentz-tetrad-existence`, `lem-gr-observer-energy-momentum-identities`) into current hash/coverage obligations. Local repair work is complete; global batch closure is not claimed.

Final artifact consistency check: all three exact routed obligations occur once; decision defect IDs resolve to the matching subjects, local rows are fixed and the escalated published row is open. Sixteen risk records are complete. Pinned published raw hash remains unchanged and the owned lock is absent. Focused `git diff --check` exits 0.

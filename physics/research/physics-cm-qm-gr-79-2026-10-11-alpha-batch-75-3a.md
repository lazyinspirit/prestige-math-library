# Batch 75 Step 3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`; group: `batch-75`. Draft local review; no judge or acceptance stamp.

## Dependency-order checkpoint

- Level 2, `lem-gr-quotient-by-isometric-free-proper-action`: Read all five proof steps and all eight direct supplier definitions/statements. Free proper smooth Lie-group quotient gives Hausdorff second-countable quotient and dimension difference; discreteness gives equal dimension, submersion then invertible differential. Metric and invariant timelike field are representative-independent by q∘γ=q and isometry. Local inverse sections give smoothness and uniqueness. No global representative choice is made; inherited AC_omega is retained through smooth-vector-field definition. Empty manifold is vacuous; zero vector cannot serve as time orientation. No causal conclusion is asserted.

Next: resolve the causal-curve Definition and routed regularity findings, then continue the generated order.

## Levels 3–5

Definition `def-gr-causal-curves-and-reachability`: reader:75:1 and refuter:75:1 are escalated. The exact missing condition is: for each t∈I there are δ>0 and a smooth chart (U,x), with γ(I∩(t−δ,t+δ))⊂U and each coordinate absolutely continuous on every compact subinterval of this relative neighborhood. The existing conditional test never guarantees such neighborhoods. No core Definition correction is closed without outside-batch consumer disposition. Additional fatal interface defect in (c): J⁻(S) is written as {p:∃q∈S,p∈J⁺(q)}, which equals J⁺(S); it must instead use q∈J⁺(p). For p=(0,0), q=(1,0), the current flat-model diamond is an unbounded common future, contradicting compactness. This is retained for owner resolution rather than silently changing the meaning used by batches 77–79.

Sources actually opened: Minguzzi, https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609, §2.3 printed p.28 (local chartwise AC), Definition 2.16 and Lemma 2.17 printed pp.33–34 (continuous causal curves, endpoint convergence, complete auxiliary metric), Definition 1.22 printed p.19 (temporal condition). These support intended corrected conventions; they do not prove current malformed interfaces.

- `lem-gr-causal-curve-calculus` (open): Read all six steps and all direct definitions/statements. Missing supplier: a local chart neighborhood of every parameter, including included endpoints, on which coordinates are absolutely continuous. Definition (a) only tests intervals already lying in a chart, so step 2.1 cannot assert a finite cover or continuity. Local closure would require that chart-neighborhood condition and a compact-cover subdivision argument; the proof is sound conditional on that correction. Also (b) states smooth maps into M only, whereas temporal lemma L4 needs a scalar target; target-general smooth-composition statement is needed. AC_omega/DC requirements of FTC were checked. Escalated: owner must resolve public Definition correction and outside-batch consumers before closure.

- `lem-gr-flat-inertial-cone-criterion-and-sums` (complete): Read all seven steps and all ten supplier definitions/statements. Orthonormal coordinates and future ∂0 select the positive-time cone. Squaring produces all timelike/null/causal iff directions; zero is excluded in (a), included only in closure sets. Future sums have positive time coordinate, so cannot cancel to zero; triangle inequality gives weak/strict cone inequalities. Closed-cone versions allow zero and follow from same inequality. No empirical premise or additional choice.

- `lem-gr-temporal-functions-and-time-functions` (open): Read all four steps and all fourteen direct suppliers. Past-timelike gradient normalized with a minus sign is a future unit observer; pairing proves du(v)>0. FTC and nonnegative-integral-zero criterion justify strict monotonicity on each nondegenerate compact interval once scalar smooth composition is established. Current curve calculus lacks local chart-neighborhood regularity and states composition only for target M. Missing valid scalar-composition supplier blocks (b)-(c). Owner must resolve regularity and scalar target, with outside consumer review; source Minguzzi §2.3 p.28 and Definition 1.22 p.19 uses the usual local AC curve class.

## Levels 9–10

- `lem-gr-kinematic-decomposition-identities` (complete): Read five steps and all eight direct suppliers plus observer-projection-decomposition Statement (3), which establishes the positive three-dimensional rest space named by the observer definition. Unit normalization and geodesicity respectively annihilate the two B slots. h contraction is 4−1=3; shear is trace-free and vorticity antisymmetric. Matrix trace expansion gives the minus sign for vorticity, while both squared norms are sums of squares. Zero shear/vorticity iff all matrix entries zero; no positive-definite claim about full Lorentz metric. Rest-space positivity is available through the exact definition discharge; no causal-curve regularity needed.

- `lem-gr-maximal-geodesics-and-extension` (open): Read all nine steps and all twenty-five supplier definitions/statements. Normalized geodesic equations Y′=U, U′=−(I−U⊗U)Γ(U,U), r′=−ra are correct; unit sphere is invariant. Finite normalized length bounds speed above/below and reconstructs an affine extension; infinite length plus bounded U′ contradicts point convergence by the averaging estimate (including C=0). Clause (b) is sound. In (a), endpoint convergence does give a single chart on a tail, but retained earlier curve may lack continuity and patch regularity under the malformed Definition. In (c)-(d), concatenation at arbitrary endpoints relies on that missing continuity. Owner must supply corrected local chart-neighborhood Definition and consumer dispositions; leave review open.

- `lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form` (complete): Read all seven steps and all nineteen supplier statements/definitions. Slice f gives nonzero metric-dual normal; intersection of tangent space with orthogonal complement is zero, hence direct sum with one normal line. Timelike N excludes nonnegative normal square. Sign selection, normalization, local smoothness, tangential extension independence, symmetry from torsion-free bracket and shape operator were checked. Fixed the false intermediate sign sentence in step 3.1: sign(t g(ξ,N)) is the product of signs, not sign(t). The existing unique-normal conclusion and public interface are unchanged. Pairing −g(∇VW,n) is independent of tangent-field choices, although full ∇VW need not be. No curve-calculus supplier is used.

- `lem-gr-constraint-projections` (complete): Read all four steps and nine direct suppliers. Under the displayed tensor-equation hypothesis, evaluation at n,n uses g(n,n)=−1; evaluation at n,V uses g(n,V)=0, giving G(n,V)=−κj(V). Smooth local normal extension and smooth T give smooth scalar ρ and covector j. κ=0 and Λ=0 introduce no division; empty hypersurface is vacuous. This is mathematics conditional on a tensor equality, with no claim of empirical field-law truth or converse existence.

- `lem-gr-flat-time-monotonicity-and-lipschitz-graphs` (complete): Read all four steps and fifteen direct suppliers. The global inertial chart contains every curve image, so even the current weak Definition forces AC on every compact interval here; general chart-cover gap is not needed. Future cone gives t′≥|z′| and t′>0 a.e.; scalar FTC and integral triangle inequality give strict increase and 1-Lipschitz graph. Finite time supremum gives spatial Cauchy limit in R3, contradicting no-limit inextendibility. Both ends give surjection by continuity; null line saturates inequality. Gradient −∂0 has past sign; AC_omega/DC retained. No use of erroneous J⁻ formula.

## Levels 11–12

- `lem-gr-constant-component-chart-flatness` (complete): Read three steps and all nine direct suppliers. Zero coordinate connection is torsion-free and metric-compatible for a constant nondegenerate metric; uniqueness identifies it with the restricted Levi–Civita connection. Curvature formula vanishes identically and coordinate paths solve y″=0 on any interval lying in chart. Point-normal vanishing at one point does not suffice. Disconnected coordinate domains allow different locally constant components; the converse remark should be read locally/on each component.

- `thm-gr-minkowski-cauchy-and-global-hyperbolicity` (open): Read six steps and all eleven direct suppliers. Cone reachability and Cauchy levels use global coordinates and flat-curve FTC; strong causality follows by small chronological double cones. However step 2.1 replaces the actual J⁻(q)=J⁺(q) with {r:q−r in future cone}. Under the current Definition, choose p=(0,0), q=(1,0); their diamond contains (t,0) for every t≥1, so is unbounded and noncompact. Missing supplier: correctly directed causal-past definition, with outside consumer disposition. Also AC_omega/DC used by flat-curve supplier are not explicit in this theorem Statement. No current global-hyperbolicity acceptance.

- `lem-gr-contracted-commutator-identity` (complete): Read all three steps and eight direct suppliers. Normal-chart Γ(p)=0 retains partial Γ terms when differentiating A; commuting partials leaves the correctly ordered R^a_dbc. Contracting output with first derivative slot gives Ric_db=Ric_bd, and Leibniz expansion produces the negative Ricci term. Full covariant derivative acts on both A slots; no confusion with iterated directional derivatives. Smoothness and torsion-freedom are available, no causal-curve regularity used.

- `thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set` (complete): Read all five steps and all seventeen original direct supplier statements; repairs reduce dependencies to exact actual uses. Free/proper discrete time translations, invariant metric and time field give local flat quotient. Periodic smooth line has norm −1 and distinct phases, hence no limit at either infinite end. Corrected step 3.1 selection to nL>|Δz|−Δt; old bound fails for Δt<0 (e.g. Δt=−100, Δz=0, n=0). No-Cauchy proof now directly uses one periodic inextendible curve: any required visit repeats after L. Removed general acausality and Minkowski GH theorem suppliers; straight timelike paths use cone lemma directly. L>0 essential; no representative family or infinite choice needed. Public Statement unchanged.

- `thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice` (open): Read all nine steps and twenty direct suppliers. Global restricted chart forces genuine local AC even under weak Definition. Vertical y(s)=(s,z0) has Γ=0, is maximal on (0,1) and has no point limit in slab at s=1. Lipschitz spatial graph plus completeness forces time range (0,1) for inextendible future curves, giving Cauchy slice. But step 3.3 reverses the current causal-past formula. For p=q=(1/2,0), the actual diamond contains r_n=(1−1/n,0), n≥3; its only ambient limit is absent boundary (1,0), so no subsequence converges in slab and it is noncompact. Owner must correct causal past and review external consumers before closure. No curvature blow-up or singularity conclusion is warranted.

- `cex-gr-achronal-set-need-not-be-acausal` (complete): Read all three steps and seven direct supplier definitions/statements. Two points (0,0,0,0) and (1,1,0,0) have future null displacement; straight null path proves causal relation, strict timelike displacement criterion excludes chronological relation both directions. Only reachability clause (a) of Minkowski theorem is used; erroneous causal-past/diamond clauses are not used. Finite two-point set, zero velocity excluded, equality 1=1 checked. Reader QED repair is accepted as formatting, current counterexample sound with inherited choice assumptions of integral reachability.

- `cex-gr-spacelike-hypersurface-need-not-be-cauchy` (open): Read all three steps and seven direct suppliers. Unit spatial ball in t=0 is an embedded spacelike fragment; line (s,z0), |z0|=2, misses it. Fixed step 1.2 invalid converse use of flat lemma: no-limit inextendibility follows directly from unbounded time coordinate, not from converse of lemma (c). Core counterexample remains blocked: ambient global hyperbolicity L1 is false under current J⁻ definition. Owner must resolve causal-past supplier and consumers. QED formatting is retained; cannot accept full current carrier.

- `ex-gr-minkowski-level-sets-and-causal-double-cones` (open): Read all six steps and thirteen direct suppliers. Induced spatial metric δ, normal ∂0, temporal gradient −∂0, open double cone using correctly defined I⁻, and domain-of-dependence argument are coherent. Clause (iv)/step 2.2 assert r∈J⁻(Te0) iff T−t_r≥|z_r|, opposite to current supplier Definition; actual set is common future and noncompact. Owner must correct J⁻ interface and outside consumer uses. AC_omega/DC inherited from flat-curve calculus need explicit carriage. Reader final-tag formatting retained; full current carrier remains open.

## Levels 13–14

- `thm-gr-timelike-raychaudhuri-and-local-focusing` (complete): Read all three steps and thirteen supplier statements/definitions. With V=Z=n the operational commutator gives −tr(B²)−Ric(n,n); decomposition gives −θ²/3−σ²+ω²−Ric. For y=−θ and ω=0, Ric(n,n)≥0, y′≥y²/3≥0, so y stays positive from y0>0; integrating (1/y)′≤−1/3 on compact subintervals forces the finite affine bound. Endpoint of smooth congruence need not be spacetime/geodesic singularity; continuation claim retains sign and smoothness hypotheses. No energy condition, measured input or causal-past definition used.

- `cex-gr-flat-cylinder-has-a-closed-timelike-curve` (complete): Read all three steps and six suppliers. Corrected cylinder theorem now establishes all used clauses from local quotient geometry and periodic smooth curves. ∂0 descends with norm −1 and future pairing −1; values at 0 and L agree, while at 0<s<L they differ. Flatness and chronology failure refute the stated universal claim without empirical content. No-Cauchy consequence follows from current direct periodic-visit proof. Reader moved final QED after tags; no mathematical change needed in this carrier.

- `ex-gr-flat-slab-vertical-line-proper-time` (open): Read three steps, eight supplier statements, and exact contextual SI and ideal-clock clauses. Constant tangent gives length s2−s1 and mathematical proper time (s2−s1)/c; metres divided by m/s gives seconds only under the explicitly conditional unit/clock reading. Maximal domain (0,1) and absent endpoint establish incompleteness. Clause (iv) and final step inherit false global-hyperbolicity conclusion from current reversed J⁻ formula, so owner supplier/consumer resolution is required. No measurements are asserted. Reader QED repair retained.

- `ex-gr-radial-focusing-in-flat-minkowski` (complete): Read all five steps and thirteen direct suppliers. Derivative of ρ is y_b/ρ; derivative of W gives −(δ^a_b+W^aW_b)/ρ and W·∂W=0. Explicit flow satisfies W(γ(s))=γ′(s), ρ=ρ(p)−s, B=−h/ρ, θ=−3/ρ and zero shear/vorticity. Reciprocal focusing equality holds before endpoint. Two distinct unit future vectors (1,0,0,0), (√2,1,0,0) approach e along their rays and give different limits of W, excluding continuous field extension; individual maximal geodesics continue in flat R4. Corrected overstrong every-geodesic-domain claim to every maximal geodesic; arbitrary geodesic restrictions have smaller domains. Only reference consumer is examples-page summary, whose every-geodesic-extends wording remains sound; no consumer repair required. Replaced unnecessary hyperbolic-function witness with explicit algebraic vectors; public physical scope unchanged.

`rem-gr-causal-and-initial-value-scope`: amended reader status repair to retain the regularity hold, add the reversed causal-past hold, and separate the unaffected explicit geometric computations. Read all sixteen direct suppliers, including the three adopted physical postulates. No experiment, apparatus, sample, calibrated quantity or statistical claim is introduced. Scope/status changes have no item consumer; the A-page summary is maintained consistently.

Page obligation and refuter:75:4: confirmed fatal overstatement of all fifteen carriers as proved; amended opening to count result carriers and explicitly retain unresolved claims. Updated causal-extension and flat-model paragraphs to avoid claiming current global hyperbolicity. The B-page was read as consumer context; its unconditional compact-diamond/global-hyperbolicity and all-six-complete summary needs owner disposition because it has no routed page edit obligation.

## Owner dispositions required

The core causal Definition is left unchanged. Missing local chart-neighborhood regularity, scalar smooth-composition supplier, and correctly directed causal-past relation must be resolved together with consumer uses before closure. Proposed local corrections are specified above. No owner resolution has arrived; this report does not clear those holds.

Current direct item/reference consumers outside batch 75 (owner batch, exact ID; identified by current carrier reference, not purportedly audited):

- Batch 77: `cex-gr-flat-slab-coordinate-time-flow-incomplete`.
- Batch 77: `def-gr-future-and-past-sets`.
- Batch 77: `ex-gr-flat-cone-bump-explicit`.
- Batch 77: `ex-gr-flat-slab-explicit-splitting`.
- Batch 77: `ex-gr-null-legs-corner-push-up`.
- Batch 77: `lem-gr-achronal-boundaries-lipschitz-graphs`.
- Batch 77: `lem-gr-basic-limit-curve`.
- Batch 77: `lem-gr-cauchy-set-topology-and-graph`.
- Batch 77: `lem-gr-causal-curve-conventions`.
- Batch 77: `lem-gr-causal-curve-initial-cone-step`.
- Batch 77: `lem-gr-chronological-volume-continuity`.
- Batch 77: `lem-gr-chronology-openness`.
- Batch 77: `lem-gr-compact-future-cone-intersections`.
- Batch 77: `lem-gr-convex-normal-causality`.
- Batch 77: `lem-gr-dominating-cone-bounds`.
- Batch 77: `lem-gr-globally-hyperbolic-causal-structure`.
- Batch 77: `lem-gr-local-cauchy-neighborhood`.
- Batch 77: `lem-gr-locally-finite-shell-sum`.
- Batch 77: `lem-gr-normal-neighborhood-length-monotonicity`.
- Batch 77: `lem-gr-null-position-vector-forces-null-velocity`.
- Batch 77: `lem-gr-push-up-rule`.
- Batch 77: `lem-gr-strong-causality-compact-length-bound`.
- Batch 77: `lem-gr-strong-causality-escape-sequence`.
- Batch 77: `thm-gr-auxiliary-complete-riemannian-metric`.
- Batch 77: `thm-gr-cauchy-surface-implies-globally-hyperbolic`.
- Batch 77: `thm-gr-length-upper-semicontinuity`.
- Batch 77: `thm-gr-limit-curve-two-endpoints`.
- Batch 77: `thm-gr-normal-neighborhood-causal-cone`.
- Batch 77: `thm-gr-smooth-cauchy-temporal-splitting`.
- Batch 77: `thm-gr-volume-time-function`.
- Batch 79: `def-gr-development-and-data-fixing-isometry`.
- Batch 79: `ex-gr-flat-restart-level-set`.
- Batch 79: `ex-gr-minkowski-maximal-development`.
- Batch 79: `ex-gr-translated-minkowski-common-development`.
- Batch 79: `lem-gr-boundary-null-geodesic-segment`.
- Batch 79: `lem-gr-compact-past-above-cauchy-set`.
- Batch 79: `lem-gr-corresponding-boundary-structure`.
- Batch 79: `lem-gr-corresponding-set-smooth-extension`.
- Batch 79: `lem-gr-data-fixing-immersion-is-embedding`.
- Batch 79: `lem-gr-development-pair-gluing`.
- Batch 79: `lem-gr-development-quotient-dense-set`.
- Batch 79: `lem-gr-exposed-boundary-point`.
- Batch 79: `lem-gr-intersection-of-developments`.
- Batch 79: `lem-gr-isometric-immersion-rigidity`.
- Batch 79: `lem-gr-maximal-common-development`.
- Batch 79: `lem-gr-no-corresponding-boundary-points`.
- Batch 79: `lem-gr-partial-cauchy-development`.
- Batch 79: `lem-gr-portion-inextendibility`.
- Batch 79: `lem-gr-spacelike-restart-hypersurface`.
- Batch 79: `lem-gr-subdevelopment-convexity`.
- Batch 79: `lem-gr-time-separation-maximizers`.
- Batch 79: `lem-gr-universal-development`.
- Batch 79: `thm-gr-smooth-maximal-globally-hyperbolic-development`.

These are owner-routed consumer assessments; presence and existing stamps do not certify that the interfaces or consumer proofs are corrected. The published mathematical suppliers opened showed no identified defect; no published ledger mutation was needed. Imports in research/math-imports.json were treated as immutable. The B/examples-page summary is a separate outside-page obligation; report its false unconditional completeness/global-hyperbolicity descriptions to its owner.

## Immutable snapshot comparison

Snapshot hashes are raw item bytes; no snapshot was regenerated or stamped. The reader report records six QED/tag moves and the status-note changes. The current carriers were independently reviewed above.

| Carrier | Pre-reader versus post-reader | Current versus post-reader |
|---|---|---|
| `def-gr-causal-curves-and-reachability` | same | same |
| `lem-gr-causal-curve-calculus` | same | same |
| `def-gr-causal-conditions-and-global-hyperbolicity` | same | same |
| `lem-gr-temporal-functions-and-time-functions` | same | same |
| `def-gr-spacelike-hypersurfaces-and-cauchy-sets` | same | same |
| `def-gr-spacelike-initial-data-and-constraints` | same | same |
| `lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form` | same | locally amended |
| `lem-gr-constraint-projections` | same | same |
| `def-gr-geodesic-congruence-and-kinematics` | same | same |
| `lem-gr-kinematic-decomposition-identities` | same | same |
| `lem-gr-contracted-commutator-identity` | same | same |
| `thm-gr-timelike-raychaudhuri-and-local-focusing` | same | same |
| `lem-gr-maximal-geodesics-and-extension` | same | same |
| `lem-gr-constant-component-chart-flatness` | same | locally amended |
| `def-gr-flat-minkowski-model-and-inertial-charts` | same | same |
| `lem-gr-flat-inertial-cone-criterion-and-sums` | same | same |
| `lem-gr-flat-time-monotonicity-and-lipschitz-graphs` | same | locally amended |
| `thm-gr-minkowski-cauchy-and-global-hyperbolicity` | same | same |
| `lem-gr-quotient-by-isometric-free-proper-action` | same | same |
| `thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set` | same | locally amended |
| `thm-gr-flat-slab-incomplete-geodesic-and-cauchy-slice` | same | same |
| `rem-gr-causal-and-initial-value-scope` | changed | locally amended |
| `ex-gr-minkowski-level-sets-and-causal-double-cones` | changed | same |
| `ex-gr-flat-slab-vertical-line-proper-time` | changed | same |
| `ex-gr-radial-focusing-in-flat-minkowski` | changed | locally amended |
| `cex-gr-flat-cylinder-has-a-closed-timelike-curve` | changed | locally amended |
| `cex-gr-spacelike-hypersurface-need-not-be-cauchy` | changed | locally amended |
| `cex-gr-achronal-set-need-not-be-acausal` | changed | same |

The causal Definition, causal calculus and temporal-function carriers still match both item snapshots. Their regularity findings therefore concern the retained current bytes, not hypothetical repaired bytes. Changes to contracts are this adjudication’s risk/citation/derivation records; the engine owns subsequent hash seals. The current A-page differs from the post-reader page because the overstatement/status summaries and the new mathematical prerequisite page were repaired.

## Closed local defect dispositions

- `physics-cm-qm-gr-79-2026-10-11-3a-batch-75-normal-sign` — `lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form`, nonfatal, Proof 3.1: The sign of t g(ξ,N) is the product of the signs, not sign(t). Replaced the false intermediate sentence; the existing unique future-unit-normal conclusion is unchanged. Repair confidence: 1.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-75-lebesgue-vector-bound` — `lem-gr-flat-time-monotonicity-and-lipschitz-graphs`, fatal, Fact L4 and Proof 2.1: The cited vector norm-integral theorem assumes Darboux/Riemann integrability and does not apply to an arbitrary AC derivative in L1. Supplied the full componentwise Lebesgue projection argument using exact L1 linearity, integrability, order and a.e.-equality suppliers; public Statement unchanged. Repair confidence: 1.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-75-locally-constant-converse` — `lem-gr-constant-component-chart-flatness`, nonfatal, Remarks, Converse: Vanishing derivatives imply constant components only on each connected component of a possibly disconnected chart domain. Changed the converse to locally constant, with the connected-component qualification. Main Statement and proof unchanged. Repair confidence: 1.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-75-cylinder-lift-sign` — `thm-gr-flat-cylinder-closed-timelike-and-no-cauchy-set`, fatal, Proof 3.1: Old choice nL>Δt+|Δz| permits a past displacement for Δt=−100, Δz=0, n=0. Corrected to nL>|Δz|−Δt, which gives Δt+nL>|Δz|. Independently completed no-Cauchy proof by repeated visits of one smooth periodic inextendible curve, removing unmet general acausality and unused Minkowski theorem suppliers; public Statement unchanged. Repair confidence: 1.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-75-geodesic-maximal-domain` — `ex-gr-radial-focusing-in-flat-minkowski`, fatal, Example (v), Verification 4.1: A geodesic may be restricted to any proper interval, so not every geodesic has domain R. Corrected to every maximal geodesic. The only reference consumer, the examples-page summary, says every geodesic extends, which remains valid. Verified γ′=W∘γ explicitly and used two elementary distinct unit future vectors for nonextension. Repair confidence: 1.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-75-inextendibility-converse` — `cex-gr-spacelike-hypersurface-need-not-be-cauchy`, nonfatal, Counterexample 1.2: The quoted flat-curve lemma states inextendibility implies unbounded time range, not its converse. Replaced the reverse citation by the direct no-point-limit proof from continuous time coordinate t(s)=s. This defect is repaired; the separate ambient global-hyperbolicity hold remains open. Repair confidence: 1.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-75-page-proof-status` — `gr-causal-and-initial-value-boundaries`, fatal, Opening summary: The page described all fifteen result carriers as proved despite retained missing regularity suppliers. Replaced the proof assertion by an inventory count and explicit causal regularity/past-definition holds; updated affected summary paragraphs without purporting to repair core interfaces. Repair confidence: 1.

The newly discovered scoped proof defects are referenced by their item-specific contract risk dispositions above, even where the original dispatch owes no standalone JSON obligation. No extra obligations or gate decisions were invented. The page-only audit-enrichment decision does not close the separately decided flagged false-status finding. No ledger row was created for QED placement or phase renumbering.

## Local checks and handoff

- Initial risk-report: exit 0, 21 HIGH/CRITICAL items routed. Every item has a specific risk record; 13 are complete and 8 are deliberately open for the named unmet prerequisites.
- Final reflow: eleven explicit item paths, all unchanged.
- Final precheck: exit 0, 10 proof-bearing items checked, 0 failing; nonproof remark not counted by this check. Earlier cylinder renumbering suggestion was adopted before the final check; it created no defect-ledger row.
- Final proof-layout after all item edits/formatter: exit 0, 11 items, 42 steps, 0 defects.
- Focused rendercheck: exit 0, 12 files (eleven items plus A-page), all frontmatter and mathematics parsed.
- Required final risk-report --require-reviewed: exit 1 with exactly eight open-risk errors: causal calculus, temporal functions, maximal geodesics/causal extension, Minkowski Cauchy/GH, slab Cauchy/GH, Minkowski double-cone example, slab proper-time example, and spacelike-not-Cauchy counterexample. These are retained holds, not concealed check successes.
- Frontier dependency ledger refresh: exit 0, refreshed and deduplicated after the exact dependency changes. Imported mathematics and published content remain read-only.

The decisions file contains exactly 15 owed obligations. No judges, stamps, gate battery, engine transitions, publication or external messages were initiated. Missing owner resolution of the core interfaces and out-of-scope consumers prevents batch closure. Deeper transitive supplier proofs were not exhaustively audited; this review read the scoped proofs and exact direct supplier interfaces, with primary-source sections identified above.

Final artifact consistency check: exactly 15 unique owed decision IDs with matching routes and nonempty evidence; 13 complete and 8 open risk records; edited carrier dependencies, roles, provenance and dependency levels agree with the batch manifest. The cylinder’s proof-only dependency reduction gives item level 11 and its example level 12; stable IDs and page inventories are preserved. These are local consistency checks, not engine acceptance.

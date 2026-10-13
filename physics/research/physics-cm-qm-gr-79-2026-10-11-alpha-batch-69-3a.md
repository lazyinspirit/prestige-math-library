# Batch 69 Step 3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`; group: `batch-69`; role: alpha.

Review is in the generated dependency order. No agents, judges, stamps or production gates are invoked. Imported mathematics and published content remain read-only.

## Completed current-content checks

### def-gr-metric-volume-form-and-current-flux (level 2)

Reader/refuter finding 1 is confirmed nonfatal. A constant simplex has rank zero; the old predicate applied nondegeneracy defined only for three-planes. The Definition now requires a rank-three velocity span and a nondegenerate restriction. Rank-deficient and degenerate induced-metric faces retain the general three-form flux but have no adapted unit normal. The simplex integration supplier explicitly allows degenerate maps and proves their pullback zero when rank is too small. Consumer checks are recorded below; this finding has a closed defect row and both required decisions.

### lem-gr-lorentzian-perturbations-remain-lorentzian (level 2)

Read all five steps. On the spatial three-plane the perturbation is bounded by 3/8 of the Euclidean squared norm; the time direction stays negative. Completing the square gives one negative and three positive directions. Congruence is a linear homeomorphism, and finitely many relatively compact chart balls make the radius uniform on the support. The continuous negative function g(N,N) has a strictly negative maximum on a nonempty compact support; shrinking the radius preserves the time orientation. Empty support gives h=0. No added arbitrary-index choice is used.

### lem-gr-metric-volume-form-patching-and-face-normal (level 3)

Read the entire argument: determinant congruence and positive oriented Jacobian give overlap equality; the metric map and finite-dimensional basis extension give dim H-perp=1. Nondegeneracy gives the direct sum H plus H-perp. The normal is normalized and its sign fixed by orientation; determinant comparison gives sqrt(abs(det Q)). The hypotheses already require a basis of a three-dimensional nondegenerate H. The earlier coordinate block computation uses the normal specified in the Statement; its existence is established subsequently without depending on that block computation.

## Sources and limits

Opened Carroll, https://arxiv.org/pdf/gr-qc/9712019, equations (2.44)–(2.48), (4.68)–(4.72), and the arbitrary-test-field sentence at (5.37)–(5.38). The PDF's actual page indices differ from several carrier bibliography descriptions; exact equation numbers are the durable locators. The live Tong PDF retrieval failed; no full-text Tong review is claimed. Carroll supports the reviewed formulas; unavailable archive copies are not claimed retrieved.

## Dispositions

The 11 owed obligations have decisions: six confirmed-fatal findings, two confirmed-nonfatal findings, two accepted reader repairs and one amended reader repair. Each finding references its exact closed defect row. All 23 routed risk reviews are complete.

Rank finding 1 now has a closed defect row and both reader/refuter decisions. Direct consumers of the altered predicate use a velocity basis and adapted normal; remaining direct uses concern unchanged volume or general form flux. No necessary consumer interface repair or propagation hop was identified. Normal existence is also correctly located at lemma clause (c), rather than (b).

The Hilbert family definition requires joint smoothness of chart components in (s,p); its consumer checks and decisions are recorded below.

### Hilbert family and level-4/5 reviews

Reader/refuter finding 2 is confirmed fatal: g_s=g+|s|h obeys separate smoothness and compact support but has no derivative at zero. Joint chart smoothness repairs the Definition; inverse matrices are jointly smooth by adjugate/determinant, so the parameter derivative is a smooth tensor with fixed compact support. All direct Hilbert consumers are in batch 69: uniqueness uses a linear family; scalar variation uses the defined smooth families; action equivalence uses smooth metric variations; Killing pullbacks are jointly smooth; the scope remark is formulation only. No changed consumer interface is needed. The uniqueness proof now explicitly intersects the stability and domain-admission radii.

The coefficient lemma had dimension-mismatched integration citations. Its L4 now defines integration by a continuous zero extension on a containing four-dimensional rectangle, proves positivity by a lower Darboux sum, and uses the published rectangle suppliers. Its conclusion is unchanged, so there is no interface propagation. All four coefficient and uniqueness steps were checked.

### lem-gr-metric-divergence-and-density-formula

Read all four steps and exact determinant/connection suppliers. det g<0, so differentiating sqrt(-det g) gives w/2 times g inverse contracted with partial g; dummy-index exchange cancels the two connection terms. Product rule yields w inverse partial(w J). Corrected L2 mistyped metric contraction of upper J derivative to J^a_;a=g^{ab}J_a;b; Statement and actual calculation were correct. No orientation assumption is required.

### prop-gr-dust-and-perfect-fluid-conservation-equations

Checked all five steps and both iff directions. Differentiating unit normalization kills u dot nabla u and n dot a. Dust necessity divides by rho>0; zero density is outside its model. Fluid contraction and projection recover the full covector with no division by epsilon+p, so epsilon+p=0 is covered. Corrected the remark naming the direction in which rho is divided. No equation of state or empirical deduction is used.

### thm-gr-density-divergence-and-finite-chain-flux

Checked all five steps. Exterior derivative contributes two signs (-1)^a giving partial_a(wJ^a); Stokes is applied to a smooth three-form and a finite four-chain, with signed boundary and additive integrals. Empty/zero chains are linearity cases. Charge equality requires zero side flux. The face formula decomposes J along a unique adapted normal and kills the tangent term by alternation, with epsilon retained for both spacelike and timelike faces. Rank three is now explicit in the supplier; null and rank-deficient faces retain form flux.

### cex-gr-energy-conditions-do-not-imply-conservation

Checked all three steps: |v1|<|v0| for timelike v and |x1|<1 imply T(v,v)>0, whereas divergence component b=0 is exactly 1. Corrected a strict intermediate inequality that failed at x1=0; the bound now uses >= before (3-2|x1|)(v0)^2> (v0)^2>0. Tensor is prescribed and is not claimed to solve flat Einstein equations. No measurements or empirical certainty enter.

### post-gr-classical-gravitational-action

Checked all six clauses as adopted assumptions, not a proof. EH density uses c^3/(16 pi G_N), S-2 Lambda and oriented volume; scalar matter uses dimensionless phi, V in m^-2 and K in J/m. Compact differences avoid a divergent total action. Repaired scope and clause (iii): only the supplied scalar action adopts the variational presentation; prescribed dust/fluid sectors are comparison descriptions of the separate direct equation and never use nonexistent matter actions. Clause (iv) now identifies the precise jointly smooth metric families. All direct consumers use an eligible action model, the conditional action-equation theorem, or the alternative direct equation; no necessary outside interface repair was found.

### post-gr-einstein-field-law

Read all four clauses and exact spacetime, matter, curvature, stress tensor and SI suppliers. Equation is adopted on the open matter domain U, with Lambda constant and kappa=8 pi G_N/c^4>0; kappa T and curvature have m^-2 components in length frames. Scalar and prescribed dust/fluid models remain direct-equation options; the optional action alternative inherits the repaired supplied-action scope. Bianchi conservation is a later deduction, not a second postulate or empirical observation. No existence, uniqueness, distributional sources, boundaries or nature claim is asserted.

Action-interface direct-consumer checks: owned action-equation theorem requires a Hilbert tensor; owned consistency theorem assumes either eligible action or direct equation; owned scope remark distinguishes Hilbert and prescribed tensors. Outside: pthm-gr-linearized-field-equations uses the action theorem only for equation-form solutions; pthm-gr-local-energy-balance uses either presentation and explicitly adopts equations directly for prescribed tensors; def-gr-killing-energy-charge cites either field law as a possible conservation source; rem-gr-no-universal-global-energy and rem-gr-local-and-global-energy-scope-and-deferrals do not posit a dust/fluid action. Those uses survive the corrected scope without a changed consumer interface, so no propagation hop or outside repair is required.

### thm-gr-killing-and-on-shell-matter-identities

Checked all seven steps and exact Lie derivative, tensor derivative, pairing, compact Stokes, coefficient and flow suppliers. Corrected step 1.1 expansion: g_bc partial_a xi^c cannot be replaced by partial_a xi_b before accounting for derivatives of g. Clauses (a)-(c) then give Killing iff symmetrized derivative zero, constant affine-geodesic pairing (including constant curves), and a divergence-free current for symmetric conserved T. Clause (d) now quantifies H1-H4 over every compactly supported smooth xi, defines configuration pullback maps on X, and states simultaneous invariance on the diagonal G(s,s). Inverse variation is -(nabla^a xi^b+nabla^b xi^a); compact support permits integration by parts and all chart bump tests force the divergence to vanish. AC_omega is inherited from complete flows; no arbitrary choice is added. Direct outside consumers use only unchanged clauses (a)-(c), not the repaired action criterion.

Reader/refuter finding 3 is confirmed fatal. On the flat four-torus with V=0, phi=sin(t), xi=0, H1–H4 hold for that single field but divergence is K sin(t)cos(t) dt and is nonzero on an open set. The current repaired claim excludes this case unless all test directions satisfy the hypotheses. The strengthened universal test requirement preserves the conservation conclusion. H4 is also corrected to actual simultaneous (diagonal) invariance, the only identity used in step 1.2, and the generic configuration pullback maps are explicit.

Consumer checks: def-gr-killing-field uses (a); ex-gr-killing-current-for-a-static-dust-in-flat-space and the energy-current/congruence/charge consumers use (c); Schwarzschild orbit, geodesic and redshift consumers use (b); lem-gr-warped-base-vacuum-reduction uses (a); boost and static-dust examples use (a)-(c). The energy scope remarks make no single-test on-shell deduction. These direct uses retain their existing hypotheses and conclusions; no necessary consumer interface edit was identified, so no additional propagation hop is triggered.

### cex-gr-divergence-free-does-not-force-zero-flux

Read all four steps. J=partial_1 has zero coordinate divergence. Velocities partial_0,partial_2,partial_3 have Gram diag(-1,1,1): this is a timelike face, with spacelike adapted normal -partial_1 and positively oriented ambient tuple. The pullback three-form has scalar coefficient -1; its integral is -1/6, nonzero. Reader title repair is sound; amended the separate incorrect phrase “1-form coefficient” to “scalar coefficient”. Finite simplex volume computation uses iterated polynomial integration on the simplex; orientation reversal changes sign only.

### ex-gr-dust-conservation-in-flat-space

All three steps checked: u=partial_0 is future unit timelike; stationary positive rho gives both dust equations and conservation. For rho=1+x0, only x0>-1 is a dust domain, continuity fails with derivative 1 and lowering the free index gives -delta^0_b. Corrected “homogeneous” in the remark because stationary rho may vary spatially. It is a prescribed model computation, without a flat Einstein solution or empirical assertion.

### ex-gr-flux-balance-for-a-divergence-free-current

Read all three steps: J=x1 partial_2 has divergence zero and insertion sign (-1)^2 gives x1 dx0 wedge dx1 wedge dx3; its exterior derivative repeats dx1 and vanishes. For coordinate velocity bases, adapted normals +/-partial_2 give +/-x1 while +/-partial_0 and +/-partial_1 give zero. At x1=0 the density is zero; elsewhere it is nonzero. Reader title/notation repair correctly distinguishes pointwise face-flux density from an unexhibited integrated side-chain flux; the remark preserves the actual finite-chain balance theorem. No empirical assertion.

### ex-gr-metric-volume-density-and-flux-in-flat-coordinates

Checked all four steps: w=1 and Gamma=0; x1 partial_1 has divergence 1 and current form -x1 dx0 wedge dx2 wedge dx3 whose derivative is vol_g. Affine parameter orientations yield normals -partial_1 and +partial_1 and fluxes -1/6,+1/6 for constant J0=partial_1. Both face Gram determinants are -1 and rank three, so the repaired non-null predicate is satisfied. No arbitrary or unbounded-region integration.

### ex-gr-killing-current-for-a-static-dust-in-flat-space

All four steps checked. Constant translation field has lowered component xi0=-1 and is Killing; positive stationary rho satisfies dust conservation. J^a=T^{ab}xi_b=-rho u has zero divergence. The current form is -rho dx1 wedge dx2 wedge dx3, so corresponding finite spatial chains under time translation have equal flux; no finiteness is asserted for entire unbounded slices. The SI reading is rest-energy density, with U=cu and rho_m=rho/c^2, not rest-mass current.

### thm-gr-compact-metric-and-timelike-curve-variation

Checked all seven steps: inverse derivative, tensorial Christoffel variation in point-normal coordinates, Palatini contraction and the exact sign of the density divergence give the EH coefficient G+Lambda g. Repaired (a): scaled families are asserted on (-1,1), not an arbitrary unbounded I; an arbitrary q is realized on its own sufficiently small stability interval. Replaced dimension-mismatched integration references by four-dimensional rectangle integrability/Fubini and a local uniform-difference-quotient argument from MVT and uniform continuity. Fixed compact support kills coordinate boundary integrals. Clause (f) applies the exact C2 endpoint-fixing future-timelike length lemma with a<b and c,m>0; both stationarity/geodesic directions hold. All direct consumers (scalar variation and action equivalence) are owned and need only a small parameter interval, so no outside consumer repair is required.

The former “all hypotheses above” in (a) included an arbitrary I: on I=R a nonzero linear perturbation need not stay Lorentzian. The proof already used (-1,1); the Statement now specifies it. The consumer need for every test direction is explicitly discharged by restricting the unscaled family to a smaller interval.

### prop-gr-scalar-field-stress-energy-conservation

Checked the complete scalar proof and both directions of stationarity. Repaired steps 1.1 and 2.2 to retain the baseline-subtracted compact top-form differences; the former un-subtracted integrals could diverge on noncompact M. L4 now uses fixed finite chart cutoffs, four-dimensional rectangle integrability and uniform difference quotients, avoiding a mismatched one-dimensional/Darboux citation or an undeclared Lebesgue measure. At the fixed base pair the compact-difference functional has a precise domain admitting every compact metric direction; its metric variation represents T with the exact -1/(2c) factor. Integration by parts is compact Stokes. Torsion freedom cancels the mixed gradient terms in divergence. The converse only holds where dphi is nonzero, or everywhere if that set is dense; a constant field with Vprime(a) nonzero verifies the caveat. K,c>0, fixed common compact support and joint smoothness are retained.

### pthm-gr-adopted-action-and-einstein-equations

Checked all five steps and actual local/global variation suppliers: fixed finite compact chart cutoffs split the first variation h, including their derivative terms, and the local EH derivative is linear in metric jets. Uniform parameter difference quotients pass through each compact chart integral. The matter coefficient -1/(2c) and EH coefficient c^3/(16 pi G_N) combine to kappa=8 pi G_N/c^4. Every chart test q is realizable on a small interval; coefficient vanishing proves the forward equation, while an identically zero coefficient proves stationarity for every family. The repaired action supplier restricts adoption to supplied scalar action; prescribed dust/fluid sectors use the separate direct law. No boundary variation, solution existence or empirical premises.

### pthm-gr-einstein-consistency-and-energy-conditions

Read all eight steps. Constant Lambda and kappa>0 give conservation and the four-dimensional trace -S+4Lambda; variable Lambda gives kappa div T=dLambda, including disconnected locally constant branches. Corrected the overstrong any-metric nonconservation corollary: divergence is relative to the proposed metric. Rest-frame quadratic endpoint tests give WEC, NEC and SEC in both directions; closed future cone including zero gives DEC iff epsilon>=|p|, also at epsilon=p=0. Defined the dual covectors e^A rather than misusing coordinate dx^A in a pointwise frame. Replaced absence-of-postulate nonimplication with a complete local metric calculation for g=-dt^2+exp(2(t/L)^2) dx squared: epsilon=3H^2/kappa, p=-(2Hprime+3H^2)/kappa solve the direct field/fluid equations but at t=0 epsilon=0,p<0 violate all four conditions. This preserves the strongest nonimplication claim while allowing particular matter models to derive positivity.

The fixed-metric conservation conclusion and all rest-frame equivalences are unchanged. Direct consumer uses of the corrected nonconservation corollary were checked as recorded below; no outside carrier is edited.

### ex-gr-null-gradient-scalar-field-conservation

Checked all three steps and all zero/critical cases. For smooth f(x0+x1), dphi=(fprime,fprime,0,0); its dual has squared norm zero and is null only if fprime is nonzero. Second derivatives cancel in the flat wave operator, so V=0 gives the scalar equation, T=K dphi tensor dphi and div T=0. Positivity is K times a square, with kernel a hyperplane only at nonzero dphi, otherwise the entire tangent space. Constant f and isolated critical points are covered. Current hash matches post-reader hash; the reader repairs the overstrong null classification without changing the calculation.

### rem-gr-einstein-matter-scope-and-conventions

Read all six scope/status paragraphs and their actual formulation suppliers. Exactly one field-law presentation is adopted; the repaired action branch uses the supplied scalar action, while prescribed dust/fluid tuples use the direct equation. Curvature, tensor and SI readings give kappa T in m^-2. Clarified that optional energy conditions can also follow from a particular matter model, while no universal implication follows from the field equation. Smooth and oriented action/flux limitations, absent empirical premises and deferred solution/existence/global claims remain explicit. This note supplies no proof.

### ex-gr-perfect-fluid-energy-conditions

Read all three steps and exact rest-frame equivalences. Substitution gives all four conditions for positive dust/radiation; positive effective fluid p=-epsilon gives WEC/NEC/DEC and fails SEC; negative effective fluid fails WEC/DEC but satisfies NEC/SEC. Thus WEC and SEC are incomparable by explicit witnesses. Kappa>0 gives epsilon=Lambda/kappa and p=-Lambda/kappa; the comparison is pointwise and asserts no solution or nature claim. Equality cases and zero causal current are covered by the earlier definitions; DEC=>WEC=>NEC and SEC=>NEC are actually proved in the energy-condition definition.

The consistency theorem’s direct outside consumers use unchanged fixed-metric conservation (pthm-gr-flrw-field-equations-reduction and pthm-gr-local-energy-balance), or unchanged flat-vacuum clause (d) and fixed-metric zero-tensor conservation (pthm-gr-minkowski-vacuum-model and pthm-gr-schwarzschild-vacuum-model). No consumer uses the withdrawn assertion that a divergence computed for one metric excludes every alternative metric. All owned energy-condition examples use unchanged clause (f). The formulation remarks now expressly allow matter-model deductions. No outside repair or further Statement/Definition propagation hop is necessary.

Additional source check: Carroll equations (8.12)–(8.20) and (8.33)–(8.36) agree with the locally computed flat spatial metric Ricci/fluid formulas (with k=0 and restored kappa). The local proof uses the coordinate-curvature supplier, not a later cosmology page. An attempted symbolic smoke calculation could not run because SymPy is not installed; no symbolic-test pass is claimed.

## Final validation scope

Explicit item paths for final layout/precheck/rendercheck: `items/def-gr-metric-volume-form-and-current-flux.md`, `items/def-gr-hilbert-stress-energy-tensor.md`, `items/lem-gr-compact-variation-coefficient-vanishing.md`, `items/lem-gr-hilbert-tensor-uniqueness.md`, `items/lem-gr-metric-divergence-and-density-formula.md`, `items/prop-gr-dust-and-perfect-fluid-conservation-equations.md`, `items/cex-gr-energy-conditions-do-not-imply-conservation.md`, `items/post-gr-classical-gravitational-action.md`, `items/thm-gr-killing-and-on-shell-matter-identities.md`, `items/cex-gr-divergence-free-does-not-force-zero-flux.md`, `items/ex-gr-dust-conservation-in-flat-space.md`, `items/thm-gr-compact-metric-and-timelike-curve-variation.md`, `items/prop-gr-scalar-field-stress-energy-conservation.md`, `items/pthm-gr-einstein-consistency-and-energy-conditions.md`, `items/rem-gr-einstein-matter-scope-and-conventions.md`, `items/ex-gr-metric-volume-density-and-flux-in-flat-coordinates.md`, `items/ex-gr-flux-balance-for-a-divergence-free-current.md`, `items/ex-gr-null-gradient-scalar-field-conservation.md`.

The manifest titles/interfaces/dependencies and contract derivations now match the final carriers; independent risk and boundary records are retained. Consumer-owned frontier rows record the exact determinant and curvature uses. Source originals/imports remain unchanged. No item carried a judge record requiring invalidation in the repaired carriers.

## Checks and handoff

Reflow ran on the explicit 18-item selection; only the metric-divergence remark wrapping changed. Initial precheck requested a mechanical phase reordering in the compact-variation proof; it was applied with every affected step reference and worksheet updated. The final precheck passed (15 applicable carriers, 0 failing; two pure definitions and one remark have no proof precheck). Rendering passed for all 18 carriers. The batched proof-layout check reported 18 items, 63 steps, 0 defects. A final check after the compact-variation fact explicitly bounded |s|<1 is recorded next. Frontier refresh succeeded. No judge or engine gate was run and no hashes were stamped.

No unresolved local mathematical prerequisite or affected outside consumer repair was found. No defective published supplier was identified, so the published-consumer ledger and its lock were untouched. Reall and Tong archive retrieval failures remain source-access limitations; the checked Carroll equation locators and explicit local deductions are recorded above. Final routing, decision hashing and the gate battery belong to the engine.

Final checks after the last item edit: reflow was unchanged for all 18 items; precheck passed with 18 selected files, 15 applicable checks and 0 failures; rendercheck passed for all 18; proof-layout reported 18 items, 63 steps, 0 defects; risk-report --require-reviewed returned 23 reviewed items and no errors. The 11/11 exact-obligation coverage and closed-ledger references were checked. Frontier refresh succeeded after the final consumer-input corrections.

### Owning page consumer maintenance

The final reference-consumer search in library/ found only the owning A page for the changed suppliers. Necessary surgical corrections were made in `library/general-relativity/gr-einstein-and-matter.md`: the displayed side-flux-only balance is explicitly restricted to divergence-free currents, and variational adoption/equivalence explicitly uses the supplied scalar action and its Hilbert tensor, with prescribed dust/fluid using the direct presentation. In `library/general-relativity/gr-einstein-and-matter-examples.md`, the reader-repaired examples are summarized as pointwise face-flux density and a metric-dual gradient that is null only where nonzero. These page consumer repairs stay in batch 69; neither page had an original routed page-only obligation, so no extra decision was invented. Both pages passed rendercheck (2 files, exit 0). No new page or pair was added.

One final local fact clarification in `items/lem-gr-metric-volume-form-patching-and-face-normal.md`: Final fact check: swapping a timelike and spacelike basis member moves the negative entry, so the previous unqualified swap claim was overstrong. Facts L4 now exchanges two spacelike basis members, retaining the negative entry in slot zero and reversing orientation. The Statement and all proof conclusions are unchanged. This adds the nineteenth item to the final batched format checks.

Final superseding validation after the orientation-fact clarification: reflow unchanged for all 19 items; precheck 19 selected, 16 applicable, 0 failing; rendercheck 19 files passed; proof-layout 19 items, 73 steps, 0 defects; risk-report --require-reviewed 23 items, no errors. The two owning page renderchecks also passed. No further carrier edits followed these checks.

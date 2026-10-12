# GR79 selected-model and orientation interface recovery — research only

These proposals are prepared against the exact archived bytes in `observed/`, bound by `bindings.json`. Production items, manifests, readiness, imports, engine state and gates were not edited. Native79 was reported actively writing when this task began. This is focused local repair evidence, not whole-batch acceptance, an independent audit, or gate authorization. The original cycle-1/two-repair cap remains unchanged. Parent integration requires actual writer drain and fresh guards, including the union of old/current/alias consumer graphs. The current text cone here cannot replace that union.

## Confirmed orientation defect and correction

`def-gr-development-and-data-fixing-isometry` Definition (b)2 equates arbitrary orientation fields, even though the supplier `def-gr-smooth-lorentzian-objects` Definition (c) permits any smooth timelike field selecting the same cone. Take vacuum Minkowski spacetime with Lambda=0, the same flat t=0 slice, h Euclidean, K=0, and the same empty matter data. Use N=partial_t in one development and N'=2 partial_t in the other. Both satisfy the current development definition. Every isometry has g'(dphi N,dphi N)=-1, whereas g'(N',N')=-4. Thus no isometry between these developments can satisfy the current (b)2, even locally; the local uniqueness supplier asserts only preservation of future orientation.

Replace (b)2 by g'(dphi N,N')<0 at each point. Metric preservation makes dphi N timelike, and the inequality selects the target future component. Linear isometry then maps the entire future causal cone onto its target counterpart. This is invariant under every replacement of N by a field in the same cone, including positive rescaling.

The relevant normal argument survives: a data-fixing isometry sends slice tangent vectors by dj' composed with dj inverse, sends an orthogonal unit normal to an orthogonal unit normal, and the cone condition selects the future one. Therefore it sends n to n', giving equal full initial differentials for two maps. Geodesic rigidity and causal arguments require this cone condition, not equality of N and N'.

## Concrete proposed carriers

`proposed/def-gr-development-and-data-fixing-isometry.md` replaces Data and (b)2, updates dependent terms to complete data d, adds exact branch suppliers and the abstract initial Lorentz bundle, and states invariance under changing the representative orientation field.

`proposed/lem-gr-data-fixing-immersion-is-embedding.md` changes its Statement to cone preservation and expressly includes phi*psi'=psi. The latter hypothesis was absent in the observed Statement although its conclusion claimed an embedding preserving matter fields. The injection argument itself is unaffected: metric nondegeneracy gives an invertible differential, image timelike geodesics have a common maximal target extension, the target Cauchy surface gives equal crossing parameters, and slice injectivity plus geodesic uniqueness gives equal source points. Its misreference to rigidity step 1.2 is replaced by the existing nondegeneracy fact. The necessary renderer tag corrections use explicit L4/L5 facts.

`proposed/lem-gr-maximal-common-development.md` changes step 2.1 from dpsi*(N)=N' to the local cone inequality and explicitly carries local matter matching. Its [L3] is changed from the obsolete reference to local-geometric-development clauses (b)-(c) to the branch-specific whole-surface uniqueness statements. A smaller common isometry collar is restricted to its intrinsic Cauchy neighborhood, ensuring that the common subdevelopment really has the entire initial slice Cauchy. Countable and Dependent Choice are declared because the invoked current local suppliers require them; these assumptions do not get reset or silently refunded later.

## Updated definitive data class

The proposed Data class keeps exactly the approved vacuum, scalar, strict interior barotropic fluid and tilted nonnegative geodesic-dust branches.

Vacuum has empty matter data. Scalar fixes its smooth potential and positive normalization and specifies both scalar value and normal derivative. Strict fluid fixes one smooth EOS on an open interval with epsilon+P(epsilon)>0 and 0<P'(epsilon)<1 and specifies density plus arbitrary smooth subluminal tilt. For dust use energy coefficient epsilon>=0, specify the future unit velocity through all empty regions, and separately require its geodesic and continuity equations there. The mass-normalized local theorem uses rho=epsilon/c^2 for fixed c>0. Zero-density velocity is part of the complete data and every comparison must match it.

The abstract bundle R nu direct-sum T Sigma with metric -ab+h(X,Y) specifies initial velocities before a spacetime exists. Its normal generator is distinct from the arbitrary ambient orientation field N. Constraints use the initial stress on this bundle. Identical stress projections alone never mean identical matter data.

Vacuum/scalar/strict-fluid use current45's fixed covariant coefficient family, complete compatible initialization, reduced matter recovery and conservation before Einstein recovery. The independent dust flow/frame theorem supplies the nonnegative tilted branch, including common-gauge uniqueness. Neither stress conservation nor the generic positive-sound-speed fluid theorem provides dust uniqueness through vacuum. The new definition therefore preserves dust scope while avoiding a false assertion that this branch meets the harmonic-only hypotheses.

On a smooth spacelike restart surface the same model remains fixed; take the restrictions of all complete fields and scalar normal derivative, and use its future unit normal to obtain the bundle velocity. The equations imply its Gauss-Codazzi constraints. Fluid values remain in the specified strict open interval, dust remains nonnegative with its specified velocity, and scalar potential/normalization remain fixed. Invoke the appropriate branch's actual local uniqueness theorem on these data. If a later MGHD or restart carrier merely cites the harmonic generic theorem for dust, its proof must receive this exact branch split; no pressure-zero limit is a substitute. Such final carriers were absent at this observation and are parent-owned when authored.

## Focused current-consumer dispositions

| Current cone subject | Consequence of these two interface corrections |
| --- | --- |
| def-gr-common-subdevelopment-and-corresponding-boundary | Its development embeddings inherit the corrected cone/complete-model definition; no explicit orientation-field equality occurs. |
| lem-gr-isometric-immersion-rigidity | [L5] already uses preservation of the future unit normal. The cone-to-normal argument above justifies it; no focused edit required. |
| lem-gr-data-fixing-immersion-is-embedding | Statement and missing matter-match condition repaired in proposed copy. |
| lem-gr-maximal-common-development | Explicit orientation equality and generic local supplier repaired in proposed copy. |
| lem-gr-subdevelopment-convexity | Uses Cauchy and causal properties and N as a cone representative; no dependence on the stronger equality found. |
| lem-gr-compact-past-above-cauchy-set | Focused scan found no generic matter reduction or stronger orientation equality. |
| lem-gr-corresponding-boundary-structure | Focused scan found no generic matter reduction or stronger orientation equality. |
| lem-gr-corresponding-set-smooth-extension | Uses local matter pullback matching; cone weakening does not justify or change its distinct boundary-extension proof. Parent's existing boundary repair remains required. |
| lem-gr-exposed-boundary-point | Focused scan found no generic matter reduction or stronger orientation equality. |
| lem-gr-boundary-null-geodesic-segment | Focused scan found no generic matter reduction or stronger orientation equality. |
| lem-gr-spacelike-restart-hypersurface | Its geometric construction is unaffected by these interfaces; subsequent model uniqueness must use complete restart data and branch split above. Distinct geometric findings are outside this task. |
| lem-gr-time-separation-maximizers | Indirect current text consumer; depends on geometry and cone selection, with no generic matter or stronger equality occurrence. |
| lem-gr-geodesic-extension-from-compact-length | Indirect current text consumer; no generic matter or stronger equality occurrence. |

These dispositions are limited to the orientation/model corrections. No claim is made that these carriers have sound unrelated proofs. `bindings.json` lists all copied current carriers and context with raw SHA-256; `currency.json` reports their currency at handoff. Inspections of unchanged cone carriers were scoped to their model/orientation uses, not complete audits. No authoritative external full text was newly retrieved in this task.

## Actual validation

The first research-copy proof-layout run found three pre-existing invalid direct-item justification tags in the immersion lemma. Explicit local facts repaired those tags. The final command `node tools/physics-support/proof-layout.mjs` on the three explicit `proposed/` carrier paths exited 0 with `proof-layout: 3 items, 12 steps, 0 defects`. This is renderer/proof-layout evidence only, not mathematical acceptance or a native gate attempt. Existing verification fields in copied carriers are inherited historical context and confer no new stamp.

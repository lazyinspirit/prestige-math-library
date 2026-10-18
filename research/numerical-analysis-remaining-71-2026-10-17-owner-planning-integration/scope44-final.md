# Batch 44: completed finite-volume compactness and nonlinear scheme closure

Run: numerical-analysis-remaining-71-2026-10-17. Input: complete native `scope-review/batch-44/review-0.json`, complete original 12 carriers and both pages, controlling PE13 design in `research/plan-numerical-spatial-track.md`, current owner directions, and actual PE12 suppliers. This records owner source work, not native acceptance, independent review, recertification or gate coverage.

## Before-images and source ownership

Exact original 12 item and two page bytes were copied before mutation into `scope44-before/items/` and `scope44-before/library/numerical-pdes-and-spatial-discretization/`. No source outside batch44 was edited. Root approved five concrete new typed interfaces and their same-A-page placement, with all original 12 retained. Root owns new-item origins, levels, manifests, contracts, provenance integration, hashes, readiness and native controls.

Actual existing mutations:

- `def-tpfa-harmonic-face-scheme`: binds the previously undefined symbol by `d_F:=|x_L-x_K|=d_{K,F}+d_{L,F}`. All formulas and hypotheses otherwise unchanged.
- `lem-mimetic-fv-parabolic-limit-identification`: extends the domain from bounded open C1 to bounded open, which current PE12 compact embedding, weak-gradient, Minty and trace suppliers actually support. This preserves the old theorem and admits the polyhedral domains of the actual scheme. Original L-infinity-H hypothesis is retained. A3 and Remarks explain that its available bound is sufficient rather than needed by the separately broadened PE12 trace theorem, as coordinated with root/current PE12 owner.
- A page: places the five additions and replaces the outstanding scheme-closure description with the actual proved geometric, time, data and exponent interface. Original TPFA/mimetic results, examples and caveats remain.

New items, in supplier order:

1. `def-fv-regular-simplicial-companion-family`.
2. `lem-fv-conforming-companion-and-test-recovery`.
3. `thm-tpfa-discrete-rellich-and-physical-gradient-closure`.
4. `lem-hybrid-mimetic-backward-euler-energy-and-compactness`.
5. `thm-hybrid-mimetic-parabolic-weak-flux-limit`.

Final batch inventory is 17 items (13 A, 4 B). No new pair is needed. Original companion page and all four examples remain unchanged.

## Confirmed defects and completed proof obligations

The native report correctly identified that path-certified Poincare and a smooth-solution energy estimate did not prove the promised discrete Rellich/weak-gradient closure; the conditional parabolic lemma did not establish any actual scheme's reconstruction, compactness, residual or energy premises. The TPFA notation omission was also genuine.

There were two additional actual interface issues: the TPFA Definition's face-copy gradient is a bookkeeping space rather than a physical field, and the old conditional lemma's C1 boundary excluded the polyhedral domains used by the scheme in dimensions at least two. The new physical reconstruction and the domain broadening resolve them without deleting any old result.

The smallest missing analytic premises are now proved locally under finite checkable mesh conditions: uniformly shape-regular matching fan simplices; bounded subdivision counts and face-connected vertex stars including their boundary anchor. These are geometric/combinatorial hypotheses, not the desired compactness conclusions. Uniform cubical refinements with fixed barycentric face subdivisions meet them in every dimension; skew/nonorthogonal cells are allowed. Existing general mesh definitions and local methods are not restricted to these convergence families.

The companion proof supplies all norm and approximation estimates rather than citing an unverified HMM framework. Vertex-star telescoping controls differences of neighboring cell values through shared face values; barycentric coordinate gradients yield the conforming companion and its Lp error. Its L2 error is h^theta with theta=1-d max(1/p-1/2,0)>0 exactly when p>max(1,2d/(d+2)). The zero-boundary proof uses cutoff zero for distance at most 1/k, one for distance at least 2/k, followed by mollification inside the domain. Scaled reference-simplex trace/Poincare inequalities prove stability of cell/face mean tests. The smooth residual consistency clause explicitly requires centroid cell points, exactly as in the hybrid Definition; arbitrary-point TPFA companion estimates are retained. Face summation by parts proves the O(h) weak-gradient defect.

For TPFA the added face values minimize the unweighted half-cell jump energy, so the original harmonic energy bounds the companion norm. Continuous Rellich gives strong L2 state compactness and H10 limits. Physical diamonds are the unions of two incident cell-face pyramids. Their volumes give the dimension factor d in the physical normal-gradient reconstruction, whose divergence pairing converges to the true distributional gradient. The separate face-copy energy reconstruction is neither renamed nor incorrectly identified with this physical field.

For the nonlinear hybrid method, stabilization coefficients have uniform positive lower and finite upper bounds. The strict Sobolev exponent branch is kept, with arbitrary time partitions satisfying only maximum step tending to zero, strong L2 initialization, and the original Caratheodory p-growth/coercive/monotone flux assumptions. Finite-step existence is proved by the actual outward-pointing Brouwer supplier and dominated continuity of cell-average fluxes. Testing by the current state gives uniform L-infinity-L2, accumulated gradient/residual p-energy and temporal jump bounds. Testing by exact cell/face means of V functions gives the genuine cell-state affine time derivative bound in Lp'(V*); no L2-projector or unproved conforming-state derivative estimate is assumed.

A finite-dimensional projection argument proves strong compactness of the computed cell states using the companion error and the actual derivative pairings. It does not apply the conforming PE12 discrete Aubin–Lions theorem to nonconforming states. Rellich plus an explicitly proved Ehrling estimate also gives strong Lp(Q), needed for the source-energy limit. Weak-gradient defects identify the computed G_K fields. Smooth mean tests and discrete summation by parts give the vanishing residual, including the exact time derivative and initial term. Weak endpoint convergence and the PE12 energy chain rule provide the energy limsup, and PE12 Minty then identifies the weak limit of the actual constitutive flux a(x,G_KU).

After identification, monotonicity against the fixed limiting gradient supplies the reverse energy inequality. The exact discrete identity then proves convergence of flux energy, vanishing stabilization dissipation, vanishing temporal jumps and strong final-time L2 convergence. An explicit physical pyramid reconstruction has exactly every computed numerical face flux as its signed normal component; its difference from the cell-average constitutive flux tends strongly to zero by the stabilization dissipation, so it has the same weak physical-flux limit. Mere monotonicity is not claimed to give strong computed gradients.

Finally, only after this independent computed-scheme proof, conforming post-limit recovery w_h=u supplies the old conditional lemma's A2 hypotheses. The recovery flux is a(x,grad u), and its residual is just the strong cell-state error paired with the smooth time derivative. These recovery functions are explicitly distinguished from the computed companion gradients and both actual computed flux reconstructions. This observation is not used in place of the scheme convergence theorem.

## Actual supplier reading and source evidence

Read complete actual carriers of PE12's evolution triple, monotone flux, strict subcritical W01p-to-L2 embedding, space-time gradient weak compactness, discrete Aubin–Lions, outward Brouwer zero, Minty identification and evolution energy chain rule. Read the complete canonical reference-simplex trace/Gauss–Green and Poincare–Wirtinger carriers, arbitrary-bounded-open W01p-to-Lp Rellich, Lp reflexivity and reflexive sequential compactness. AC covers the actual choice costs. PE12 remains owned by its original owner; no PE12 source was edited here.

Retrieved the complete 38-page Droniou 2014 PDF from https://arxiv.org/pdf/1407.1567 and extracted its text with PyMuPDF. Inspected section 1.2's energy/Rellich/weak-limit route and sections 4–4.1's HMM gradient, residual, coercivity and convergence discussion. No claim to have read all 38 pages or the other cited books is made. The reference supports the established method context; every newly required estimate and nonlinear passage is proved in the new item carriers, with no research-packet or external-proof fallback.

## Same-owner consumer dispositions

- `thm-tpfa-green-coercivity-maximum-principle`: unchanged positive harmonic transmissibilities, outward cancellation, volume-weighted self-adjointness, boundary-anchor argument and minimum principle remain correct after d_F is bound.
- `thm-path-certified-fv-discrete-poincare`: finite path constant and its exact weighted telescoping estimate are unchanged. New geometric companion estimates complement this result rather than falsely declaring its arbitrary path constant uniform.
- `thm-tpfa-flux-energy-convergence-smooth-interface`: its normal Taylor, harmonic interface trace, transmissibility-dual defect and energy arguments use exactly the now-defined d_F, with no hypothesis or conclusion change.
- `def-fv-admissible-cell-face-mesh`: original general definition retained; additional convergence geometry belongs to its new typed family item.
- `def-hybrid-mimetic-fv-scheme`: original centroid points, shared face degrees, cell-average nonlinear flux, residual scaling, initialization/time term and all Caratheodory bounds are consumed verbatim. No operator or exponent change was made.
- `prop-hybrid-mimetic-scheme-coercive-conservative-affine-exact`: all local linear/nonlinear coercivity, monotonicity, affine cancellation and flux identities are retained and agree with the new numerical-flux reconstruction.
- `lem-mimetic-fv-parabolic-limit-identification`: its proof uses bounded-open PE12 interfaces throughout; the stronger domain version preserves all original assumptions and conditional conclusions. Its A2 is actually supplied by the new bridge's clearly marked post-limit recovery; it is not silently assumed for computed companions.
- Four original examples: their actual coordinates, shared harmonic flux, nonorthogonal false transverse flux, one-dimensional interface resistances and skew anisotropic affine residual/flux calculations are unaffected. No newly claimed convergence property is inferred from a finite example.
- Both A/B pages: read in full. Updated A now describes actual closure; B's four numerical descriptions need no change.
- Actual outside direct/nonlogical consumers read in full: `def-phase-field-discrete-realizations` and `def-fv-tpfa-no-flux-diffusion-specialization`. Both use unchanged interior TPFA conductances and explicitly omit Dirichlet boundary penalties. Defining d_F changes neither operator. The phase-field remark mentions the conditional parabolic lemma only to explain that its zero-boundary spaces are not the Neumann branch; bounded-open domain broadening changes no such boundary-condition distinction. No outside edit is required. Downstream no-flux methods inherit unchanged conductances; no interface-triggered mathematical change reaches them.
- Original PE12 owner retains its independently assigned final affected-consumer pass over these completed batch44 uses following its own broader supplier repair. This report supplies no substitute native review for that work.

All three native findings have concrete source resolutions. No mathematical prerequisite remains identified in the repaired PE13 closure. Root metadata/native acceptance and every ordinary gate remain due.

## Final explicit formatting check

After the final item edits ran:

`node tools/proof-layout.mjs items/def-tpfa-harmonic-face-scheme.md items/lem-mimetic-fv-parabolic-limit-identification.md items/def-fv-regular-simplicial-companion-family.md items/lem-fv-conforming-companion-and-test-recovery.md items/thm-tpfa-discrete-rellich-and-physical-gradient-closure.md items/lem-hybrid-mimetic-backward-euler-energy-and-compactness.md items/thm-hybrid-mimetic-parabolic-weak-flux-limit.md`

Exit 0: `proof-layout: 7 items, 33 steps, 0 defects`.

No tests, full validators, gates, native report/control edits, publication or commits were performed.

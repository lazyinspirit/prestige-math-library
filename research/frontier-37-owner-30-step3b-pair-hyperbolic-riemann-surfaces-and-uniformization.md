# Step 3b report — hyperbolic Riemann surfaces and uniformization (batch 28)

Run: `frontier-37-owner-30`; role alpha-high; A page
`hyperbolic-riemann-surfaces-and-uniformization`, B page
`hyperbolic-riemann-surfaces-and-uniformization-examples`; batch file
`research/frontier-37-owner-30-batch-28.pages.json`; contracts
`research/frontier-37-owner-30-batch-28.proof-contracts.json`.

This file is the running checkpoint required by the dispatch. It is updated
after every authored item; the final sections (gates, escalations, handoff)
are completed when the batch is finished.

## Checkpoints (authored items, in dispatch order)

### 1. `lem-biholomorphic-invariance-of-plane-subharmonicity` (new local supplier, level 0)
- Claim: subharmonicity on a plane domain is invariant under biholomorphic
  change of coordinate (both directions).
- Source: Boas, Math 618 §7.2 (hash-stamped, text in `/tmp/f37/boas618.txt`).
- Local supplier created by this dispatch because the A page needs the
  chartwise subharmonicity transfer; registered in manifest, coverage and
  contracts.
- Checks: precheck pass; proof-contract strict pass.

### 2. `lem-holomorphic-structure-lifts-to-covering-surface` (level 0)
- Claim: a covering surface of a Riemann surface carries a unique complex
  structure making the projection holomorphic, and all deck transformations
  are biholomorphic.
- ACL: Countable Choice used for a countable chart base and path/point
  choices (Lindelof property of the surface).
- Checks: precheck pass; strict contract pass.

### 3. `def-harmonic-and-subharmonic-riemann-surface-functions` (level 1)
- Definition (no contract entry): chartwise harmonic/subharmonic functions,
  independence of atlas (via the published conformal-invariance and the new
  biholomorphic-invariance lemmas), chartwise Laplacian convention
  `Delta = d_x^2 + d_y^2` (zero set chart-independent), and harmonic
  conjugates with the convention `u + iv` holomorphic.
- Checks: precheck n/a; rendercheck pass.

### 4. `def-properly-discontinuous-group-action` (new local supplier, level 0)
- Definition: free and properly discontinuous actions, finitely many
  translates meeting a compact set, rank-two lattices, discreteness.
- Used by the lattice lemma and by the covering-type/quotient items.
- Checks: precheck n/a; rendercheck pass.

### 5. `lem-cocompact-free-affine-plane-action-is-a-lattice` (level 1)
- Claim: a free properly discontinuous affine action of a group on the plane
  with compact quotient has a rank-two translation lattice.
- Route: affine part is a homomorphism to GL_2(R) with finite image
  (discreteness + compact quotient); pass to a finite-index translation
  subgroup; choose a shortest nonzero vector, project the rest to the
  perpendicular line, get a discrete cyclic group and the rank-two lattice
  `Z v + Z w`; the quotient is `R^2/Lambda`, a torus of genus 1.
- AC: used only through the published genus definition; flagged in the
  contract's `nonempty-choice` boundary.
- Checks: precheck pass; strict contract pass.

### 6. `lem-three-simply-connected-models-are-inequivalent` (level 0)
- Claim: the sphere, plane and disc are simply connected Riemann surfaces and
  no two are biholomorphic.
- Route: explicit charts and convexity for `C`, `D`; functoriality plus
  `S^2` simple connectivity for the sphere; compactness of the sphere against
  the explicit non-compact covers for `C`, `D`; Liouville for `C` vs `D`.
- Choice-free.
- Checks: precheck pass; strict contract pass.

### 7. `ex-hyperbolic-disc-and-half-plane-geodesics` (B page, level 0)
- Claim (promised): the Cayley map turns `2|dz|/(1-|z|^2)` into
  `|dw|/Im w`; the radial disc segment attains `d_D(0,r) = 2 artanh r` and the
  vertical half-plane segment attains `d_H(i,iy) = |log y|`; geodesics are
  arcs of Euclidean circles or lines meeting the boundary orthogonally.
- Route: `C` biholomorphism and pullback computation; distance values from
  the published Poincare formula and the artanh-log identity; equality
  analysis for the radial minimiser (`rho` nondecreasing and `gamma' = lambda
  gamma`); isometry transport by `phi_z`; explicit circle equation for
  `phi_a(R-hat)` (centre `-A`, radius with `|A|^2 - rho^2 = 1`) and the
  rotation reduction `phi_z(ev) = e phi_{z e-bar}(v)`; half-plane side by an
  explicit inequality for `Im gamma`, an explicit automorphism built from
  `C` and a rotation, and the parametrisation of `M(iR)` for real Mobius
  coefficients (vertical line or circle with centre on `R`).
- Sources: Lyubich Ch. 1 §§2.4, 5 (metric and distance conventions);
  McMullen Ch. 16 (hyperbolic geometry); the explicit arguments are
  computed in the item.
- Checks: precheck pass; rendercheck pass; strict contract pass.

### 8. `ex-three-uniformization-models-are-distinct` (B page, level 1)
- Claim (promised): compactness separates the sphere from plane and disc;
  Liouville forbids `C -> D`; topological type does not determine the
  complex structure.
- Witnesses: explicit open covers of `C` and `D` without finite subcovers;
  explicit homeomorphism `z/(1+|z|)` of `C` onto `D`.
- Checks: precheck pass; rendercheck pass; strict contract pass.

### 9. `def-canonical-green-kernel-riemann-surface` (level 2)
- Definition: centred charts; Perron family `F_p` of nonnegative subharmonic
  functions on `X minus p`, compactly supported, with at most a unit log pole
  (`limsup(v + log|z|) < infinity`); chart independence of the pole clause;
  envelope `g_X(q,p)`; canonical kernel when finite; Greenian surface.
- Well-definedness written out: nonemptiness via the explicit chart candidate
  `v_0 = -log|z|` on a centred chart, zero elsewhere (continuous, harmonic
  where positive, hence subharmonic); dropping nonnegativity does not change
  the envelope (positive part of a candidate is a candidate); finite maxima
  of candidates are candidates.
- Step 3a observation 2 resolved here: the normalization is stated (unit
  logarithmic coefficient, corrector `h` harmonic at `p`) and the interface
  with the published CA-HM-1 kernel `def-green-function-plane-domain` is
  proved by the flux computation `int_{|z|=r} d_nu g = 2 pi` (normal pointing
  toward `p`), matching `-Delta g = 2 pi delta_a`; the surface items never
  identify the surface kernel with a plane-domain kernel. Marshall's Comment 3
  (continuous candidates) recorded inline.
- The forward pointer to `lem-green-envelope-dichotomy-and-logarithmic-pole`
  (level 3) is a same-page link in Remarks, not a dependency; the dichotomy
  lemma lists this definition as its dependency.
- Checks: rendercheck pass; depcheck no new warnings (one pending
  link-unresolved for the not-yet-authored dichotomy lemma, cleared when that
  item is authored); manifest deps updated.

## Conventions carried into the remaining items

- Green normalisation: the surface kernel is the Perron envelope of a unit
  logarithmic pole `g + log|z|` harmonic; this must be reconciled with the
  published CA-HM-1 convention `-Delta g = 2 pi delta_a` at
  `def-canonical-green-kernel-riemann-surface` and its first consumers
  (step 3a observation 2).
- Annulus wording: the B-page annulus/punctured-disc item must make precise
  that the contrast is finite annulus modulus versus the puncture's
  cusp/infinite end (step 3a observation 5).
- `Fuchsian` stays defined inline as a torsion-free discrete subgroup of
  `Aut(D)` (step 3a observation 4).
- Plan-§M id/inventory deviation is owner-visible; not repaired here.

## Open obligations

- Levels 2–11 of the dispatch order remain to be authored and checkpointed.
- After authoring: refresh the scope decision, record item decisions, run the
  batch gates, and complete the handoff sections of this report.

---

# Resume (dispatch fc4c21228af08aa2)

State at resume: items authored on disk were the nine checkpointed above plus
`lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces` (written 22:06,
after the last checkpoint and not covered by the report). The owner
`proceed` receipt `d6e1f43f...` (12:22:48Z) covers the current 28-item scope;
`step3-decisions.mjs check --phase scope` is closed for the pair.

## Owner-directed repairs (binding obligations from
`research/frontier-37-owner-30-owner-authoring-direction.md`)

### R1. `lem-biholomorphic-invariance-of-plane-subharmonicity` — maximum-set openness
- Defect confirmed: step 3.1 concluded "Z contains a neighbourhood of z_0"
  from one application of the mean-value chain at the single maximiser, and
  finished with "impossible because w <= 0 on the nonempty set dV" without an
  upper-semicontinuity argument at the boundary.
- Repair: step 2.1 now runs the chain at *every* point z with w(z)=M for every
  radius with D(z,rho) contained in V; step 3.1 proves Z closed (u.s.c.), then
  open by applying 2.1 to each z in Z with radius t=|y-z| for every y in
  D(z,rho), then clopen in the connected V, and finishes at a boundary point
  b of the nonempty boundary by u.s.c. (w(b) >= M > 0 against w <= 0).
- Checks: precheck PASS; rendercheck OK; proof-contract strict OK after claims
  of steps 2.1/3.1/4.1 were refreshed.

### R2. `lem-cocompact-free-affine-plane-action-is-a-lattice` — step 9.1 coefficients
- Defect confirmed: the real-linear-independence argument projected tv+sw=0
  and wrote tP(w)=th, i.e. it used the wrong coefficient.
- Repair: projecting gives sP(w)=sh != 0, so s=0, then tv=0 gives t=0.
- Recorded also that the statement is a group of **biholomorphisms** of C
  (affine holomorphic maps), so freeness forces a=1 in step 2.1; the lemma is
  never applied to arbitrary real affine actions, for which compact
  Klein-bottle quotients would refute the translation conclusion.
- Checks: precheck PASS; rendercheck OK; proof-contract strict OK after the
  step 9.1 claim refresh.

## New checkpoints

### 10. `lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces` (level 2)
- Statement audited: part 1 (conjugate on a simply connected surface) and
  part 2 (log poles, single-valuedness of exp(-(u+iv)), order m_j).
- Proof route completed on disk by the previous attempt: chartwise local
  conjugates; a path-integral period functional; homotopy invariance by a
  finite grid; the covering argument giving pi_1(X minus P) = normal closure
  of the meridian classes; period -2pi m_j on each meridian; hence periods in
  2pi Z; F = exp(-(u+iv)) single valued, holomorphic, nonvanishing, and
  meromorphic at the punctures with order m_j.
- Local defects found while auditing and repaired here:
  1. step 4.1 (canonical 1.2) proved X minus P connected by a path argument
     whose two "contradictions" were not valid; replaced by the open-partition
     argument A* = A u {p_j : E_j minus p_j in A}, B* likewise.
  2. step 4.5 (canonical 5.3) reverse inclusion said the projection of
     lambda-bar * beta * lambda "equals a"; replaced by the explicit transport
     computation p_*[gamma] = a.
  3. A stale bare reference [1.6] in canonical step 9.1 was re-pointed to
     [step 5.1], and the missing `proof_strategy: direct` was added.
  4. The precheck's canonical step renumbering (flat n.1 numbering) was
     adopted; contract entries were generated against the canonical numbers.
- Manifest row deps synced to the item's 42 deps; depcheck reports no error
  for this item (all suppliers published; the only pair error left is the
  expected forward link to the not-yet-authored level-3 dichotomy lemma).
- Checks: precheck PASS (canonical form), rendercheck OK, proof-contract
  strict OK (0 errors, 0 warnings), manifest-deps OK.
- AC: none. The proof makes only finitely many arbitrary choices (finite
  partitions and finitely many punctures/discs); no def-countable-choice or
  def-axiom-of-choice is declared and none is used.

### 11. `lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces` (level 2)
- Statement audited: under Countable Choice, a noncompact Riemann surface has
  a regular exhaustion by connected relatively compact smooth-bordered domains
  `D_1 subset D_2 subset ...` with `closure(D_n) subset D_{n+1}` and
  `X = union D_n`; every connected relatively compact smooth-bordered domain
  with continuous boundary datum has a unique continuous-harmonic extension.
- Route: holomorphic atlas is smooth; proper exhaustion plus Morse-Sard
  regular levels `c_n`; `D_n` = interior of the component of `{h <= c_n}`
  containing `x_0`; local half-space normal form gives submanifold boundary;
  Perron envelope `H`; chartwise Poisson modification plus Harnack proves
  `h_* = H` harmonic (steps up to 24.1); exterior-cone peaks (steps 25.1-28.1)
  give the two-sided boundary limit; uniqueness by the maximum principle.
- AC: `def-countable-choice` used exactly twice, in the exhaustion supplier
  and in selecting one regular value per unit interval; recorded in the
  contract's `nonempty-choice` boundary.
- Checks: precheck PASS (canonical renumbering adopted; 33 steps); rendercheck
  OK; strict proof-contract OK (0 errors, 0 warnings, after deduplicating one
  duplicate fact-citation row); manifest-deps OK (deps synced to 38).
- Decision recorded: `accept`, confidence 1, sha256
  `df7ee646097cb22b484a1b4c9d17cf325cdd1e48fcea5188366b331388592221`.

### 12. `lem-surface-green-identity-on-smooth-bordered-domain` (level 2, baseline ID)
- Claim: part 1 — second Green identity
  `int_{Omega'}(u,Dv - v,Du) dA = int_{dOmega'}(u,dn v - v,dn u) ds`
  on a compact bordered domain `Omega'` of a Riemann surface, with `C^2`
  chart expressions and both integrands chart-independent; part 2 — punctured
  form: for pairwise disjoint closed coordinate discs `D_1,...,D_m` inside a
  bordered `Omega` with `u=v=0` on `dOmega` and `u,v` harmonic on the
  punctured domain, the total inner-circle flux vanishes.
- Route (16 canonical steps 1.1, 2.1-2.2, 3.1-3.2, 4.1-4.3, 5.1, 6.1, 7.1,
  8.1, 9.1-9.2, 10.1, 11.1): conformal invariance of `Delta`, the area form
  and the conormal/arclength pairing (steps 2.1, 3.1); half-slice charts plus
  a finite half-rectangle/ball chart cover of `Omega'` (1.1, 2.2, 3.2);
  finite smooth partition of unity subordinate to it (4.3); the plane second
  Green identity [F3] applied on each chart piece (6.1); boundary-support
  cancellation (7.1); reassembly over the partition (8.1-10.1); punctured
  case by vanishing volume integrand and boundary cancellation (11.1).
- AC: Countable Choice enters only through the published plane identity
  supplier `cor-second-green-identity-on-a-bounded-c-one-domain`; recorded in
  the contract's `nonempty-choice` boundary. All other selections are from
  finite families (`lem-finite-choice` / compactness).
- Deps: 22, synced to the manifest row (`syncdeps.py` then
  `manifest-deps.mjs`: 0 errors). `depcheck` shows no error for this item; the
  single remaining pair error is the expected forward link from
  `def-canonical-green-kernel-riemann-surface` to the not-yet-authored level-3
  `lem-green-envelope-dichotomy-and-logarithmic-pole`.
- Checks: precheck PASS (canonical step numbers adopted via
  `precheck-fix2.mjs`, contract rebuilt); rendercheck OK; strict proof-contract
  0 errors / 0 warnings (11 facts, 16 steps, 22 citation rows; spec
  `/tmp/f37/spec-green.json`).
- Note: a `## Source notes` heading was inserted before the Marshall paragraph.
  Boundary evidence in the contract references the renumbered steps (2.2, 3.2,
  4.1, 4.2, 6.1, 9.2); if the steps are ever renumbered again, re-verify those
  references.
- Decision recorded: `accept`, confidence 1 (tool sha256
  `b32ef235d72a37a5029a1f3934d411f37f532bbfc65c36daebfa24651bcc1263`).

### 13. `lem-weak-harmonic-limits-on-riemann-surfaces` (level 2)
- Claim: (1) a locally uniformly bounded sequence of real harmonic functions on
  a Riemann surface has a subsequence converging uniformly on every compact
  set, with harmonic pointwise limit; (2) chartwise distributional limits of
  harmonic functions are represented by smooth harmonic functions (Weyl).
- Route (23 canonical steps; the precheck's canonical numbering interleaves the
  part-2 steps 1.5, 2.2, 3.2 with part 1): Poisson representation plus
  differentiation under the integral sign gives the explicit radial bound
  `C(R,r) = 2r/(R-r)^2 + 2(R+r)^2/(R-r)^3` (step 1.4) and hence oscillation
  neighbourhoods (step 4.1); finite oscillating covers of a compact set, an
  enumeration of centres, nested Bolzano-Weierstrass subsequences and a
  diagonal (steps 5.1-9.1) give uniform convergence on each exhaustion set
  (steps 10.1-12.1); continuity and harmonicity of the limit follow from the
  oscillation estimate and the spherical mean value property plus
  `cor-local-mean-value-property-is-enough` (steps 13.1-14.1). Part 2:
  `Delta T_{v_n} = T_{Delta v_n} = 0` via the weak-derivative identity, so
  `Delta T = 0` and Weyl represents `T = T_h` (steps 2.2, 3.2, 15.1).
- AC: exactly `def-countable-choice`: the compact exhaustion, the countably
  many selections of centres and nested subsequences (steps 6.1, 7.1), and the
  AC_w suppliers [F6], [F8], [F10], [F11]. No full AC, no DC. Recorded in the
  contract's `nonempty-choice` boundary.
- Deps: 25, synced to the manifest row (`syncdeps.py`, `manifest-deps.mjs`:
  0 errors). `depcheck`: no error for this item.
- Checks: precheck PASS (canonical form adopted via `precheck-fix2.mjs`);
  rendercheck OK; strict proof-contract 0 errors / 0 warnings (16 facts,
  23 steps, 24 citation rows; spec `/tmp/f37/spec-weak.json`).
- Decision recorded: `accept`, confidence 1 (tool sha256
  `2a409ac6495ccf21d9f33d6027e2d41513035edc5dbc1a612150050ecc81db72`).

### 14. `lem-green-envelope-dichotomy-and-logarithmic-pole` (level 3)
- Claim: under Countable Choice the canonical Perron envelope `g` on
  `X minus {p}` is either `+infinity` everywhere or finite, harmonic and
  strictly positive everywhere; in the finite case `g + log|z|` extends
  harmonically across `p`, and `g` is least among positive harmonic unit-pole
  functions.
- Route (23 canonical steps): punctured surface connected by an open-partition
  argument (1.1); chart discs avoiding the pole (1.2); surface Poisson
  modification stays in `F_p` (1.3) and is monotone (2.1); boundary maximum
  principle for subharmonic functions on a bounded plane domain (1.4);
  maximizing sequence and finite maxima (1.5, the only use of AC_w); the
  comparison function `v + (1+eps)log|z|` (1.6); chart independence of the
  competitor condition (1.7); the upper bound at the pole via the boundary
  maximum principle (2.3) and the sandwich `0 <= g + log|z| <= sup_{dU} g`
  (3.2); monotone harmonic balayage `P_n = P_D u_n` (3.1) and the Harnack
  dichotomy: `g = +infinity` on `D` or `P_n -> H` harmonic with `H = g` on
  `D` (4.1, 4.2, 5.1, 6.1); global dichotomy by the clopen partition
  `{g = infinity} / {g < infinity}` (7.1); positivity by the nonnegative
  harmonic interior-zero lemma (8.1); removable singularity of `g + log|z|`
  (8.2); leastness from `W = v - (1+eps)H` with the interior maximum
  principle and connectedness of `X minus {p}` (8.3, 9.1, 10.1).
- AC: exactly `def-countable-choice`, used once in step 1.5 to select the
  maximizing sequence; all other selections are finite and the charts come
  from the fixed atlas. Recorded in the contract's `nonempty-choice` boundary.
- Deps: 22, synced to the manifest row (`syncdeps.py`; `manifest-deps.mjs`:
  0 errors). Scaffold deps `lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces`
  and `thm-harnack-inequality-on-a-disc` are **not used**: the completed route
  uses `thm-harnack-convergence-principle-for-plane-harmonic-functions`,
  `def-poisson-modification-...`, `thm-poisson-modification-...`,
  `lem-gluing-lemma-...`, `lem-locality-of-subharmonicity`,
  `thm-harmonic-majorant-characterization-...` and
  `cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes`
  (level deviations reported for Step 4). The source record was extended with
  the Favre cross-check for the Perron/Harnack route.
- Checks: precheck PASS (canonical form adopted via `precheck-fix2.mjs`);
  rendercheck OK; strict proof-contract 0 errors / 0 warnings (21 facts,
  23 steps, 22 citation rows; spec `/tmp/f37/spec-l3-green-dichotomy.json`);
  depcheck reports no error or warning for this item, and the previously
  pending forward link from `def-canonical-green-kernel-riemann-surface` is
  now resolved.
- Decision: `accept` intended (confidence 1) but **blocked**: the pair scope
  decision is owner-held and stale after the local addition of
  `lem-locality-of-subharmonicity`, so `record-item` refuses until the owner
  records a fresh `proceed` for the current 29-item scope
  (`step3-decisions.mjs check --phase scope` message: "owner proceed; apply
  amendments and record proceed for current scope"). Escalated in the final
  report.

## Remaining open obligations

- Levels 2 items are now all authored and checkpointed (regular exhaustion,
  surface Green identity, weak harmonic limits).
- Levels 3-11 items not yet written (see dispatch order): Green dichotomy
  (level 3); punctured Green existence and Green symmetry (level 4); dipole
  Green and Greenian uniformization (level 5); non-Greenian case (level 6);
  uniformization theorem (level 7); covering-type definition (level 8);
  classification corollary and Poincare metric (level 9); compact genus and
  deck isometries (level 10); and the three B-page examples (level 11).
- Ordinary item receipts are outstanding for these baseline IDs already
  written: `lem-holomorphic-structure-lifts-to-covering-surface`,
  `lem-three-simply-connected-models-are-inequivalent`,
  `ex-hyperbolic-disc-and-half-plane-geodesics`,
  `def-harmonic-and-subharmonic-riemann-surface-functions`,
  `lem-cocompact-free-affine-plane-action-is-a-lattice`,
  `ex-three-uniformization-models-are-distinct`,
  `def-canonical-green-kernel-riemann-surface`,
  `lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces` (levels 0-2);
  receipts for newly authored items are recorded as they are completed.
- After authoring: refresh the scope decision if dependencies changed, and run
  the batch gates (explicit-path precheck, rendercheck, content-policy, strict
  proof-contract, item-dependency-levels, validate-plan).

# Resume (dispatch continuation, alpha-high)

State at this resume: the 15 items checkpointed above are on disk and passing;
the seven batch gates and the two pages were deferred, and levels 4-11 of the
dispatch order (14 items) were un-authored. This continuation authors them in
dispatch order and checkpoints each of them below.

### 15. `lem-green-kernel-exists-after-removing-a-chart-disc` (level 4)
- Claim: with $\overline U$ a closed coordinate disc in the connected surface
  $X$ and $X\setminus\overline U\ne\varnothing$, the exterior
  $Y=X\setminus\overline U$ is connected and admits a finite canonical Green
  kernel at every pole.
- Route: $\overline U$ compact in the Hausdorff surface, hence closed and $Y$
  open; $Y$ connected by the circle-separation argument (the boundary circle of
  the removed disc is compact and connected, so one side contains it and the
  other side is then clopen); centred chart disc $U_1$ around the pole, radius
  $r$; Marshall's inequalities (5) and (6): the modified function
  $v+(1+\varepsilon)\log|z|$ is subharmonic on the disc with value $-\infty$
  at the pole, and the Dirichlet solution $\omega$ on
  $V=D_N\setminus(\overline U\cup\overline{rU_1})$ (compact case: no
  exhaustion; noncompact case: regular exhaustion, $\mathrm{AC}_\omega$) gives
  $1-\omega\ge\delta>0$ on $\partial U_1$ by the strong maximum principle;
  the combination gives $\delta\max_{\partial(rU_1)}v\le\log(1/r)$ and hence
  one finite value of the envelope, so the dichotomy produces the kernel.
- Checks: precheck PASS; rendercheck OK; strict proof-contract 0 errors
  (15 facts, 14 steps, 23 citation rows). Manifest deps synced (21).
- Decision recorded: `accept`, confidence 1, sha256
  `03d04d23234fed8fe924e4f86de3b4f8314e4d2a660cff7865b2187e15e69fad`.

### 16. `lem-green-kernel-symmetry-on-riemann-surfaces` (level 4)
- Claim: finite canonical kernels at two distinct poles satisfy
  $g_X(p,q)=g_X(q,p)$; on a regular exhaustion the finite-domain zero-boundary
  kernels (Perron envelopes of the exhaustion domains) increase to the
  canonical kernel.
- Route: a compact surface admits no finite canonical kernel, by the second
  Green identity on $X\setminus D_s$ with $u=g$, $v=1$ (the flux
  $\int_{\partial D_s}\partial_\nu g\,ds\to2\pi$ against the identity's
  $0$); a regular exhaustion $\Omega_n$ with $p,q\in\Omega_1$; the
  zero-boundary kernel on each $\Omega_n$ exists through the same Dirichlet
  barrier argument as in checkpoint 15 with $\Omega_n$ in place of $X$;
  monotonicity by extension by zero (locality of subharmonicity); the
  exhaustion kernels are dominated by $g_X$ and their supremum is $g_X$ at
  every point; symmetry on $\Omega_n$ from the punctured Green identity
  (part 2 of `lem-surface-green-identity-on-smooth-bordered-domain`) with the
  residue computation $\mp2\pi g_{\Omega_n}(p,q)$, $\pm2\pi g_{\Omega_n}(q,p)$;
  pass to the limit.
- Checks: precheck PASS (canonical renumbering adopted via
  `precheck-fix2.mts`); rendercheck OK; strict proof-contract 0 errors
  (17 facts, 11 steps, 24 citation rows). Manifest deps synced (24).
- Decision recorded: `accept`, confidence 1, sha256
  `072bdc8f0197ac9abf61f23d9145dd173ef5b927c9926e741f356a2bbcf6a47d`.

### 17. `lem-dipole-green-function-on-riemann-surface` (level 5)
- Claim: on a connected Riemann surface $X$ and distinct $p,q$, there is a
  harmonic $G:X\setminus\{p,q\}\to\mathbb R$ with unit log poles of opposite
  signs at $p,q$ and $G$ bounded off two pole discs.
- Route: exterior surfaces $Y_t=X\setminus\overline{tU_0}$ (disc removal
  supplier) with symmetric Green kernels $g_t$; Marshall estimates (18)/(19) on
  the pole circle; the difference $G_t=g_t(\cdot,p_1)-g_t(\cdot,p_2)$ has a
  uniform bound $C$ off the pole discs (Harnack chain on a connected compact
  set, one-sided maximum principle); a diagonal limit along $t_n\downarrow0$
  (weak harmonic limits under $\mathrm{AC}_\omega$); the log poles and the
  removable singularities at $p_0,p_1,p_2$ give the final $G$.
- Defect found and repaired while authoring: declared facts [F8]
  (`lem-locality-of-subharmonicity`) and [F14]
  (`thm-plane-harmonic-functions-are-smooth-and-real-analytic`) were not cited
  by any step; the two fact paragraphs and their manifest deps were removed.
- Checks: precheck PASS (after removal), rendercheck OK, strict proof-contract
  0 errors (14 facts, 13 steps, 23 citation rows); deps synced.
- Decision recorded: `accept`, confidence 1, sha256
  `a565892cd48373ffdf0cda2d98c66fb4de4db97b8dbc6fb9050291c771639fa8`.

### 18. `lem-green-function-uniformizes-simply-connected-surface` (level 5)
- Claim: a simply connected Riemann surface admitting a finite canonical Green
  kernel at some point is biholomorphic to the unit disc.
- Route (Marshall Thm 4, Case 1): $g_0=g_X(\cdot,p_0)$; the monodromy supplier
  turns the harmonic conjugate of $g_0$ into a holomorphic $\phi$ with
  $|\phi|=e^{-g_0}$, a simple zero at $p_0$ and no other zeros;
  $\phi_1=(\phi-\phi(p_1))/(1-\overline{\phi(p_1)}\phi)$ for $p_1\ne p_0$;
  Marshall's inequality $g_X(\cdot,p_1)\le-\log|\phi_1|$ is proved by applying
  the chartwise strong maximum principle to $\max(u_\varepsilon,0)$ (locality
  of subharmonicity, compactness of the support); every pole has a finite
  kernel; symmetry of the kernels gives $h(p_0)=0$ for
  $h=g_X(\cdot,p_1)+\log|\phi_1|$, and $h\equiv0$ on the connected
  $X\setminus Z_1$; $Z_1=\{p_1\}$ then gives injectivity of $\phi$; the image is
  a simply connected proper complex domain and the Riemann mapping theorem
  (full AC) finishes.
- New local argument written into the item (no new ID): the proof that a
  connected surface minus a closed locally finite set is connected (separation
  argument using the punctured-ball lemma).
- Checks: precheck PASS (canonical layering adopted via `precheck-fix2.mts`),
  rendercheck OK, strict proof-contract 0 errors (17 facts, 14 steps, 42
  citations); deps synced (40).
- Decision recorded: `accept`, confidence 1.

### 19. `lem-nongreen-simply-connected-surface-is-plane-or-sphere` (level 6)
- Claim: a simply connected Riemann surface with an infinite canonical Green
  envelope is biholomorphic to `C` if noncompact and to the Riemann sphere if
  compact (Marshall, uniformization Case 2).
- Route, all written out in the item: (i) a claim that every bounded
  holomorphic `h : X -> C` is constant, proved by the maximum principle on
  `max(v + (1+eps) log|B circ h|, 0)` with `B(w) = (w - h(p0))/(2M)`: the
  positive part is subharmonic with compact support, so `v(q) <=
  -(1+eps) log|B(h(q))|` for every `v` in the Perron family, and letting
  `eps -> 0` makes the envelope finite at a point `q` outside the zero set of
  `B circ h`, contradicting the hypothesis; (ii) the dipole supplier and the
  monodromy supplier produce a meromorphic `F` with a simple zero at `p1`, a
  simple pole at `p2` and no other zeros or poles, with `|F| = e^{-G}`;
  (iii) for arbitrary `r` outside the two poles the same construction gives
  `F_r` with `|F_r| = e^{-G_r}`, and `H = (F - F(r))/F_r` is holomorphic on
  all of `X` (pole cancellation at `p2`, simple zero of `F_r` at `r`) and
  bounded (dipole bounds off the pole discs plus compactness on the four
  closed discs), hence constant by (i) and nonzero by evaluation at `p1`;
  (iv) `F - F(r) = c F_r` then gives `F^{-1}(F(r)) = {r}` for every
  `r`, hence injectivity of `F`; (v) `F` is a local biholomorphism
  (`cor-injective-holomorphic-derivative-nonzero` in charts; reciprocal chart
  `1/F` at the pole) and a biholomorphism onto its open image; (vi) if the
  image omitted two sphere points `a, b`, a Mobius `T` with `T(a) = infinity`
  gives a proper plane domain `T(F(X))` missing `T(b)`, whose loops are null
  (homeomorphism to `X`), so the Riemann mapping theorem would produce a
  nonconstant bounded holomorphic function on `X`, contradicting (i);
  (vii) the two cases `X` compact / noncompact then give the sphere or the
  plane.
- Local supplier use: none added; the item consumes
  `lem-dipole-green-function-on-riemann-surface` (level 5, authored and
  accepted earlier in this dispatch) and
  `lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces` (level 2) as
  finished in-run suppliers, and it verifies their exact hypotheses (distinct
  poles, simply connected ambient surface, integer exponents `1`, `-1`) in
  its steps, so no escalation is needed for the actual uses.
- AC: the statement assumes AC; the proof uses it exactly through Countable
  Choice for the dipole supplier and through the Riemann mapping theorem,
  recorded in step 13.1 and in the contract's `nonempty-choice` boundary.
- Checks: precheck PASS (canonical layering adopted via
  `/tmp/f37/precheck-fix2.mts`); rendercheck OK; strict proof-contract 0
  errors (17 facts, 21 steps, 46 citation rows); deps synced (45).
- Decision recorded: `accept`, confidence 1, sha256 `11a3942c9e5d6aaf...`.
- Note for Steps 5-8: Marshall's PDF text renders the Riemann sphere as
  `C*` in the Case 2 endgame; the item treats the target as the sphere
  `C-hat`, which is what the surrounding text (simple pole at `p2`, omitted
  points, the sphere/plane alternative) demands.

### 20. `thm-uniformization-simply-connected-riemann-surfaces` (level 7)
- Claim: every simply connected Riemann surface is biholomorphic to exactly
  one of the sphere, the plane and the disc.
- Route: fix `p0`; the dichotomy of
  `lem-green-envelope-dichotomy-and-logarithmic-pole` splits into the finite
  case (level-5 `lem-green-function-uniformizes-simply-connected-surface`
  gives a biholomorphism onto `D`) and the infinite case (level-6
  `lem-nongreen-simply-connected-surface-is-plane-or-sphere` gives `C` when
  noncompact and the sphere when compact); `exactly one` is the composition
  argument using the pairwise inequivalence of the three models
  (`lem-three-simply-connected-models-are-inequivalent`).
- Both branch suppliers are in-run items authored and accepted earlier in
  this dispatch, so the earlier "consumer with unfinished supplier" flag is
  resolved by their actual authoring; the item verifies the exact hypotheses
  it needs (simply connected, finite kernel at `p0`; infinite envelope at
  `p0`, compactness) in steps 2.1 and 2.2.
- AC: stated in the claim; used exactly through Countable Choice for the
  dichotomy and through the AC hypotheses of the two branch lemmas.
- Checks: precheck PASS (canonical layering adopted via
  `/tmp/f37/precheck-fix2.mts`); rendercheck OK; strict proof-contract 0
  errors (7 facts, 6 steps, 9 citation rows); deps synced (9).
- Decision recorded: `accept`, confidence 1, sha256 `051d55cff1b2039b...`.

### 21. `def-universal-covering-type-riemann-surface` (level 8, definition)
- Claim: a connected Riemann surface is spherical, parabolic or hyperbolic
  according as its holomorphic universal cover is the sphere, the plane or the
  disc, and exactly one label occurs.
- Well-definedness written out in the item: Riemann surfaces are locally
  compact and locally path connected (manifold property), connected hence path
  connected, and semilocally simply connected (chart discs are convex, hence
  simply connected), so the topological universal cover exists
  (`thm-universal-cover-existence`); the covering-structure lemma gives the
  unique complex structure making the projection holomorphic; uniformization
  presents the simply connected cover as exactly one model; two universal
  covers are uniquely isomorphic over the base and the isomorphism is
  biholomorphic for the lifted structures, so the label is cover-independent;
  pairwise model inequivalence gives mutual exclusivity.
- Remark records the terminology warning (this "parabolic" is the
  universal-cover label, not the potential-theoretic Green/parabolic
  vocabulary; no implication between the two is asserted) and the choice
  accounting (Countable Choice for the lifted structure, full AC through
  uniformization).
- Checks: precheck n/a (definition, skipped); rendercheck OK; depcheck no
  warnings for this item; deps synced (16).
- Decision recorded: `accept`, confidence 1, sha256 `de225c7711b684ae...`.

### 22. `cor-universal-cover-classification-riemann-surfaces` (level 9)
- Claim: under AC, every connected Riemann surface `X` is biholomorphic to
  the quotient of exactly one of the sphere, plane and disc by a group of
  holomorphic automorphisms acting freely and properly discontinuously.
- Route: the holomorphic universal cover `p:X~->X`
  (`lem-holomorphic-structure-lifts-to-covering-surface` plus the type
  definition), its deck group free by the rigidity proposition and simply
  transitive on fibres via the deck-group/fundamental-group theorem; free
  proper discontinuity proved directly from compactness and the finitely many
  sheets over `p(K)`; the model `M` and `phi:X~->M` come from uniformization;
  `G=phi Deck(p) phi^{-1}` acts freely and properly discontinuously on `M`, so
  the general lemma (free proper actions have covering quotients, proved
  locally in step 2.3) makes `q:M->M/G` a covering; the induced map
  `pbar:M/G->X` is well defined, continuous, bijective and open, hence a
  homeomorphism, and the complex structure of `X` transports along it so that
  `pbar` is biholomorphic and `q` holomorphic. Uniqueness: any presentation
  `N/H` makes `N` a simply connected cover of `X`, so uniqueness of universal
  covers over `X` gives a homeomorphism `N->X~` over `X`; it is biholomorphic
  because both projections are holomorphic coverings, hence local
  biholomorphisms, and local inverses compose to a holomorphic map (same for
  the inverse); then `N` is biholomorphic to `X~` and to `M`, so pairwise
  inequivalence of the models forces `N=M`.
- Repair found while authoring: `[F9]` originally rested on a clause that
  needed only the definition of biholomorphism; it was re-worded to the
  correct hypothesis (a locally injective holomorphic map on a complex domain
  is biholomorphic onto its open image) and its citation moved from step 7.1
  to step 8.1, where local biholomorphy of covering maps is genuinely used.
- AC: hypothesis of the claim; used exactly through Countable Choice for the
  lifted holomorphic structure and through uniformization; all other
  selections are finite.
- Checks: precheck PASS (canonical layering adopted via
  `/tmp/f37/precheck-fix2.mts`, after merging the split heading of the
  well-definedness step and deleting a forward prose reference to `step 6.1`
  in the general quotient lemma); rendercheck OK; strict proof-contract 0
  errors (12 facts, 15 steps, 26 citations); deps synced (26);
  item-dependency-levels shows no error for this item (27 pre-existing
  errors remain outside batch 28).
- Decision recorded: `accept`, confidence 1, sha256 `7145ebad61d6145f...`.

### 23. `def-poincare-metric-hyperbolic-riemann-surface` (level 9, definition)
- Claim: on a surface with disc universal cover, the Poincaré length element is
  the local pushforward of `2|dz|/(1-|z|^2)` along the holomorphic universal
  covering, independent of the local inverse and of the uniformization.
- Content: uniformization `psi:X~->D` of the holomorphic universal cover
  `p:X~->X`; on a connected evenly covered `V` with inverse sheet `s`, set
  `ds_X|_V=(psi o s)^* ds_D`, reading in a holomorphic chart `z` as
  `2|F'|/(1-|F|^2)|dz|` with `F=psi o s o z^{-1}`.
- Well-definedness written out: (1) chart changes are the conformal-metric
  transformation rule (chain rule); (2) two inverse sheets over `V` differ near
  each point by a deck transformation — deck-group transitivity on fibres from
  `thm-deck-group-of-a-universal-cover-is-the-fundamental-group`, then the
  unique section over a connected neighbourhood — and the disc automorphism
  `psi o h o psi^{-1}` preserves the length element by the identity
  `2|h'|/(1-|h|^2)=2/(1-|z|^2)` established in the proof of
  `thm-poincare-distance-formula-and-disc-automorphism-invariance`; (3) a
  different uniformization differs by an element of `Aut(D)` and a different
  universal cover by the unique biholomorphism over `X` from the type
  definition, both leaving the local expressions unchanged. The later
  deck-isometry theorem is deliberately not used.
- Poincaré length and distance are defined for piecewise `C^1` curves, with
  finiteness (compact image, continuous positive density) and the metric axioms
  (triangle inequality by concatenation; positivity near a chart disc).
- Local scaffold repair: four dependencies added to the scaffold list as
  local repairs — `def-riemann-surface-and-holomorphic-atlas`,
  `def-biholomorphic-map`, `def-covering-map-and-evenly-covered-neighbourhoods`
  and `def-piecewise-c-one-curve-on-a-manifold`; deps synced (10). Coverage
  file repair: a stale alternative-dependency row for
  `lem-green-function-uniformizes-simply-connected-surface` named
  `thm-strong-maximum-principle-for-harmonic-functions`, which that item never
  declares and whose proof does not use; replaced by the declared
  `thm-maximum-principle-for-plane-subharmonic-functions`, clearing the only
  coverage error (now 0 errors, 39 results).
- Checks: precheck n/a (definition); rendercheck OK after joining four
  multiline displays; depcheck clean for this item;
  item-dependency-levels shows no error for this item; coverage-checklist 0
  errors.
- Decision recorded: `accept`, confidence 1, sha256 `8cc9835fa06a962a...`.

## Open obligations (updated)
- Authored and checkpointed through level 11 except the last item:
  remaining is the level 11 B-page `ex-genus-two-cocompact-fuchsian-quotient`
  (`ex-complex-torus-parabolic-deck-lattice` is checkpointed in 27).
- Library pages not yet written; batch gates and receipts for the 15 earlier
  authored items outstanding (they are recorded once the dependency levels
  freeze).
- Unrelated frontier debt observed while running
  `item-dependency-levels check`: 27 errors outside batch 28, all in the
  Riemann-Roch/curves pair now under construction (`thm-full-riemann-roch-divisor`,
  `thm-riemann-hurwitz-complete`, `cor-rr-exact-high-degree-formula`,
  `ex-residue-pairing-one-cocycle` and 23 more). Reported, not touched.

### 24. `cor-compact-genus-determines-uniformization-type` (level 10)
- Claim: under AC, a compact Riemann surface of genus `0` has spherical
  type, genus `1` parabolic type, and genus `>=2` hyperbolic type.
- Route: sphere model — every deck element is a Mobius map, nonidentity
  Mobius maps have a fixed point, freeness forces `G={e}` and `X` is
  biholomorphic to the sphere, so `g=0`; plane model — the cocompact lattice
  lemma makes `G` a rank-two lattice and `C/G` a genus-one torus, so `g=1`;
  disc model — Cayley conjugation to `H`, nonidentity real Mobius maps have
  fixed points in `R u {infinity}` only, normal forms give the hyperbolic
  (dilation) and parabolic (translation) centralizers, both isomorphic to
  `(R,+)`, proper discontinuity forces the parameter subgroup to be discrete,
  hence trivial or cyclic; `g=0` would give `G` trivial (contradiction with
  `D` non-compact via the sequence `1-1/n`) and `g=1` would give
  `G = Z^2`, not cyclic; elimination over the three mutually exclusive
  models concludes each case.
- Repair while authoring: trailing tag `[F8, steps 3.3, 3.4]` was not
  canonical; on adopting the canonical layered numbering the reference
  became `[F8, step 4.1, step 4.2]` (via `/tmp/f37/precheck-fix2.mts`).
- AC: used only through `thm-topological-classification-compact-riemann-surfaces`,
  `cor-universal-cover-classification-riemann-surfaces` and the lattice
  lemma; every other selection is a single Möbius conjugating map or one
  generator from the discrete-subgroup lemma.
- Checks: precheck PASS; rendercheck OK; strict proof-contract 0 errors (10
  facts, 10 steps, 20 citations); deps synced (21); coverage 0 errors.
- Decision recorded: `accept`, confidence 1, sha256
  `f4081def0683dcc3...` (receipt sha256 `fb434a4e2dc888b4...`).

### 25. `thm-deck-transformations-are-hyperbolic-isometries` (level 10)
- Claim (under AC): for a disc uniformization `(p,psi)` of a hyperbolic
  Riemann surface, every deck transformation `h` is biholomorphic, its
  conjugate `gamma_h = psi h psi^{-1}` is a disc automorphism with
  `gamma_h^*(ds_D) = ds_D`, `h` preserves the pulled-back metric
  `ds_X~ = psi^*ds_D = p^*ds_X`, its lengths and its distance; `p` is a local
  isometry; and for lifts `z,w` of `x,y`,
  `d_X(x,y) = inf_{h in G} d_X~(z, h w)`, i.e. the quotient metric of
  `X~/G` is the surface Poincare metric.
- Route: `gamma_h` is a rotated Blaschke factor (classification), and direct
  differentiation gives `2|gamma'|/(1-|gamma|^2) = 2/(1-|z|^2)`, hence
  `gamma^*(ds_D) = ds_D` and deck invariance of the pulled-back metric by
  pullback functoriality; `d_X~(z,w) = d_D(psi z, psi w)` since `psi` is a
  bijection carrying curves to curves, giving length and distance invariance
  from the published disc-automorphism invariance; `p^*(ds_X) = ds_X~` is
  checked on each sheet, so lengths of curves equal those of their
  projections; lifts of piecewise `C^1` curves are piecewise `C^1` because
  sheet inverses are holomorphic (injective-holomorphic corollary) and path
  lifting applies; deck transitivity on fibres (deck-group theorem plus path
  lifting in the simply connected total space) plus `epsilon`-arguments in
  both directions give the quotient formula, which is independent of the
  chosen lifts by distance invariance.
- Repair while authoring: none beyond adopting the canonical layered
  numbering via `/tmp/f37/precheck-fix2.mts`.
- Checks: precheck PASS; rendercheck OK; strict proof-contract 0 errors (14
  facts, 14 steps, 14 citations); deps declared from the item's own links
  (15) and synced to the manifest.
- Decision recorded: `accept`, confidence 1, sha256
  `c0acb812fe82f38d...` (receipt sha256 `7dd2d78c9d0aa819...`).

### 26. `ex-annulus-and-punctured-disc-hyperbolic-covers` (B page, level 11)
- Claim: `exp` maps the strip `S_r={log r<Re w<0}` onto the annulus
  `A_r={r<|z|<1}` and the half-plane `H_-={Re w<0}` onto `D*`; both are
  covering maps with deck group `{w->w+2pi ik}`, infinite cyclic and
  generated by translation by `2pi i`; both covering domains are biholomorphic
  to `D`, hence the maps are universal covers and both surfaces are
  hyperbolic.
- Route: `|exp w| = e^{Re w}` gives the preimages and injectivity on discs of
  radius `<pi` comes from `ker exp = 2pi i Z`; a small disc around a lifted
  point has preimage exactly the disjoint union of its `2pi i Z` translates
  inside the strip/half-plane (open mapping theorem for openness), which is
  the evenly covered condition; deck maps satisfy `h(w)-w in 2pi i Z`,
  continuous on the connected strip, hence are the constant translations
  `tau_k`, and conversely each `tau_k` is a deck map. The strip is
  biholomorphic to `H` via `w -> exp(i pi (w-log r)/L)` (explicit inverse from
  the principal logarithm), `H_-` via `w -> -iw`, and `H -> D` by the Cayley
  map of the sibling example; the standard structures make `exp` holomorphic,
  so by uniqueness of the lifted structure these are the holomorphic universal
  covers and the type is disc.
- Step3a wording obligation (finding 5) resolved: the modulus note now states
  the referent precisely (`(-log r)/(2pi)` modulus of the finite annulus versus
  the puncture's cusp end) and explicitly says the example does not prove
  non-biholomorphism.
- Local repair while authoring: the canonical layering initially placed the
  deck-group steps before the covering-map steps; the deck steps now cite the
  covering steps (5.2, 6.1) explicitly so the canonical order is logically
  sound.
- Checks: precheck PASS; rendercheck OK; strict proof-contract 0 errors (23
  facts, 17 steps, 23 citations); deps synced (23), including the same-B-page
  sibling `ex-hyperbolic-disc-and-half-plane-geodesics` (legal under the
  b-leaf rule).
- Decision recorded: `accept`, confidence 1, item sha256
  `95e472352b25b153...` (receipt sha256 `236300759547f5e2...`).

### 27. `ex-complex-torus-parabolic-deck-lattice` (B page, level 11)
- Claim: for a rank-two lattice
  $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subset\mathbb C$, the quotient
  map $q:\mathbb C\to\mathbb C/\Lambda$ is a covering with simply connected
  total space, hence a universal covering, and
  $\operatorname{Deck}(q)=\{z\mapsto z+\lambda:\lambda\in\Lambda\}\cong\Lambda\cong\mathbb Z^2$;
  $\mathbb C/\Lambda$ is the compact complex torus of the lattice, $q$ is
  holomorphic for its structure, and the surface has genus $1$ and parabolic
  universal-covering type.
- Route: the real-linear isomorphism $T_0(s,t)=s\omega_1+t\omega_2$ has a
  bounded inverse, giving $K>0$ and $c=1/K$ with
  $|\lambda|\ge c\max(|m|,|n|)$ for $\lambda=m\omega_1+n\omega_2$; small
  $c/4$-balls have no translate meeting them, so the translation action is a
  covering-space action, and the orbit-map theorem makes $q$ a covering with
  deck group the translations (universal, as $\mathbb C$ is convex hence simply
  connected); deck group $\cong\mathbb Z^2$; $q$ is open; $c/3$-discs give
  charts $\varphi_z$ whose transitions are locally constant lattice shifts
  (continuity plus $c$-separation), hence translations, hence holomorphic;
  Hausdorff by the positive distance from $z-z'\notin\Lambda$ to the discrete
  lattice; the map $g(s,t)=q(s\omega_1+t\omega_2)$ on the square respects the
  side pairings, descends to a continuous bijection $Y\to\mathbb C/\Lambda$
  from the one-handle schema realization, and is a homeomorphism because $Y$
  is compact and the quotient is Hausdorff; this yields compactness,
  connectedness and second countability, and with the published one-handle
  schema $Y\cong T^2$ gives $T\cong T^2=\#_1T^2$, so the genus is $1$; the
  compact genus-$1$ corollary gives parabolic type. AC is used only through the
  genus definition and that corollary.
- Scaffold audit: hypotheses, sources and route checked at author level. The
  scaffold's requirement "uses no earlier B-page example" is respected:
  `ex-complex-torus-holomorphic-atlas` is homed on another B page and is not
  cited or consumed; its chart/genus computation is redone inline. The one
  published example used, `ex-torus-polygonal-schema`, is homed on the A page
  `classification-of-compact-connected-surfaces` (not a B page), and depcheck
  reports no b-leaf or cycle error for this item.
- Repair while authoring: the scaffold listed
  `rem-complex-plane-euclidean-dictionary` as a supplier, but that remark has
  no heading-level body section, so the proof-contract builder cannot quote it;
  its content (metric dictionary $\mathbb C=\mathbb R^2$) is carried instead by
  `thm-complex-numbers-are-the-real-coordinate-plane` together with
  `def-complex-metric-convergence-and-continuity`. The scaffold's
  `cor-universal-cover-classification-riemann-surfaces`,
  `prop-deck-transformations-are-determined-by-one-point-and-act-freely` and
  `lem-three-simply-connected-models-are-inequivalent` are not load-bearing for
  the final route (deck group from the orbit-map theorem, type from the
  compact-genus corollary) and were dropped; deps now match the 34 fact links
  exactly.
- Checks: precheck PASS; rendercheck OK; strict proof-contract 0 errors
  (15 facts, 14 steps, 34 citations); depcheck reports no error for this item
  (the remaining repo-wide errors are pre-existing B-page/page-cycle debt in
  the curves pair); `item-dependency-levels check` reports no error for this
  item (all remaining errors are outside batch 28); coverage checklist 1 page,
  39 harvested results, 0 errors.
- Decision recorded: `accept`, confidence 1, item sha256
  `1cd3e9a805f9566f...` (receipt sha256 `06fec9b667a94c70...`); deps synced to
  the manifest (34).

### 28. `ex-genus-two-cocompact-fuchsian-quotient` (B page, level 11, last item)
- Claim: for distinct `a_1,...,a_6` and `P(x)=prod(x-a_j)`, the affine curve
  `X_0={y^2=P(x)}` completed at infinity by two points is a compact connected
  Riemann surface; the projection `pi` to the Riemann sphere is proper
  holomorphic of degree two, branched exactly at the six `a_j` (each of index
  two, `infinity` unramified); hence `X` has genus `2` and hyperbolic
  universal-covering type; the transported covering `Psi=p o psi^{-1}` of the
  disc has deck group `Gamma = psi Deck(p) psi^{-1} <= Aut(D)`, which is
  torsion-free, discrete in the compact-open topology, acts freely and properly
  discontinuously, and `D/Gamma` is homeomorphic to `X`: `X` is a cocompact
  Fuchsian quotient.
- Route: two local sheets of `y^2=P(x)` from the holomorphic implicit function
  theorem away from `y=0`, local parameter at the branch points; charts at
  infinity via `t=1/x`, `v=y/x^3` and a local holomorphic square root of
  `Q(t)`; explicit paths showing `C minus {a_j}` is path connected, so the
  punctured affine curve is a connected two-sheeted cover of it; the completion
  is Hausdorff, second countable, compact (closed and bounded model) and
  connected (the points at infinity are limits of the dense sheets); the local
  normal form at `y=0` and at `(t,v)=(0,+-1)` gives the six branch points and
  the unramified value `infinity`; properness of `pi` from compactness of `X`;
  Riemann-Hurwitz `2g-2 = 2(-2) + 6` gives `g=2`; the compact-genus corollary
  gives hyperbolic type; the deck group is transported to `Aut(D)`, and
  freeness/finite local action/discreteness/torsion-freeness are read off the
  disc-automorphism classification and the compact-open topology; the quotient
  map `D -> D/Gamma` is identified with `Psi` to conclude `D/Gamma` is
  homeomorphic to the compact `X`.
- Scaffold audit: hypotheses, sources and route checked at author level before
  writing. Sources: Looijenga ch. 1 sec. 2 and ch. 4 sec. 2-3 (double covers,
  ramification, hyperelliptic genus count), McMullen chs. 2-3 and 6 (same
  count), Lyubich ch. 1 sec. 2.4-5 (surfaces as disc quotients), Marshall
  pp. 1-15. No examples-page item and no Gauss-Bonnet input is consumed; the
  Axiom of Choice is declared in `[A1]` and used only through the genus and
  universal-cover interfaces `[F13]`, `[F14]`; every selection in the
  construction is explicit or finite.
- Repair while authoring: the first draft failed the explicit-path precheck
  with `untagged-steps` because its proof steps were multi-line paragraphs;
  after `tools/reflow.mts` the step bodies were regenerated through the
  application's own canonical `proposedPrecheck` relabeller, producing 17
  steps `1.1-11.1` and 42 fact links, and the stale conclusion sentence
  "Steps 3.1 to 3.1" was corrected to "Steps 3.1 to 4.1".
- Checks: precheck PASS (`direct`); rendercheck OK; strict proof-contract
  0 errors/0 warnings (23 facts, 17 steps, 42 citations, 6 boundaries checked
  and 2 not-applicable with item-specific reasons); deps synced to the
  manifest (42); depcheck reports no batch-28 error for this item;
  `item-dependency-levels check --run frontier-37-owner-30` reports no batch-28
  error.
- Decision recorded: `accept`, confidence 1, 42 examined dependencies, receipt
  sha256 `f479de086e6006f3...`, item-file sha256 `acb8c776c5c81786...`
  (receipt refreshed after the local Green-identity repair below; the item text
  was unchanged by that refresh).

### 29. Local repair: `lem-surface-green-identity-on-smooth-bordered-domain` (level 2)
- Concrete defect found while closing the batch (`depcheck` code
  `b-leaf-content`): the item depended on
  `ex-the-closed-ball-and-its-sphere-boundary`, which is homed only on a
  B/examples page, and whose content is only the model case `B^n`; the
  statement's part-2 convention `Omega' = int Omega'` was also false as
  written, since a compact embedded surface with `Omega' = int Omega'` has
  empty boundary and never matches the later use of a nonempty boundary
  `dOmega` of the punctured domain.
- Repair: part 2 now assumes `Omega' = closure(int Omega')` (a genuine region,
  boundary described), step 1.1 builds the half-slice charts of each closed
  coordinate disc explicitly from the Euclidean inverse function theorem and
  the smooth structure generated by the holomorphic atlas, so `D_j` and
  `closure(Omega_K)` are embedded submanifolds with boundary and
  `dOmega_K = dOmega ⊔ dD_1 ⊔ ... ⊔ dD_m`; `[F7]` now cites only A-page
  suppliers (`def-smooth-manifold`,
  `thm-euclidean-inverse-function-theorem`, plus the embedded-submanifold and
  half-slice-chart items already used by `[F6]`); step 11.1 applies part 1 to
  the compact bordered domain constructed in step 1.1. The frontmatter
  drops the B-page example and registers the two new suppliers; the manifest
  row was re-synced (23 deps) and the item's proof-contract entry rebuilt
  (25 citations).
- Checks after repair: precheck PASS; rendercheck OK; strict proof-contract
  0 errors/0 warnings; depcheck no longer reports this item (the b-leaf error
  is cleared); no new `item-dependency-levels` error for batch 28.
- Hash-chain refresh: because the item hash is the transitive input closure,
  the repair invalidated the receipts of all 13 in-batch consumers, and a
  later batch-local manifest sync (below) invalidated 8 more. Every affected
  receipt was re-recorded as `accept`, confidence 1, with the examined
  dependency IDs, after re-checking that the consumer texts were unchanged
  and that the contract quotes taken from this item's statement still match
  the repaired statement (strict proof-contract check: 0 errors).
  `node tools/tsx-run.mjs /tmp/f37/checkbatch.mts` then reported all 29
  batch-28 items `closed:true, hash:true`.

### 30. Batch-local manifest sync (dependency rows only)
- `lem-holomorphic-structure-lifts-to-covering-surface` (23 deps) and
  `lem-cocompact-free-affine-plane-action-is-a-lattice` (11 deps) had manifest
  `deps` rows lagging behind their authored frontmatter. Both rows were
  re-synced from the item files; every added supplier is an out-of-run
  published library item, so the in-run dependency levels are unchanged
  (`item-dependency-levels check` still reports 0 batch-28 errors) and the
  pair's scope hash is unaffected (it does not read `deps`). The two receipts
  and the 8 transitively affected consumers were re-recorded after the sync.

### 31. A/B library pages
- `library/complex-analysis/hyperbolic-riemann-surfaces-and-uniformization.md`
  (A page, 24 items) and `...-examples.md` (B page, 5 examples) are written in
  exact manifest order with intro prose and `status: draft`; a scripted check
  confirms the page item lists equal the manifest order, and
  `validate-plan.mjs research/plan-spec.json` is OK.

## Batch gates actually run (frontier-37-owner-30, batch 28)

| Gate | Command | Result |
| --- | --- | --- |
| explicit-path precheck | `node tools/tsx-run.mjs tools/precheck.mts <each item>` (24 non-definition items) | PASS 24/24 |
| rendering | `node tools/rendercheck.mjs <items + pages>` (31 files) | OK |
| content policy (items) | `node tools/content-policy.mjs research/frontier-37-owner-30-batch-28.pages.json` | 29 items, 0 errors, 0 warnings |
| strict proof contracts | `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-28.proof-contracts.json --strict` | 0 errors, 0 warnings, 24/24 |
| coverage | `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-28.coverage.json` | 1 page, 39 harvested results, 0 errors |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | 0 batch-28 errors (66 repo-wide errors at final check, all in other groups' curves/Riemann-Roch pairs) |
| dependency check | `node tools/depcheck.mjs --json` | 0 batch-28 errors; repo-wide debt at the final 17:06Z check was 12 errors (9 `b-leaf-content`, 2 `published-unaudited`, 1 `page-cycle`), all outside this pair, down from 24 during the same session as other groups repaired their own debt |
| author check | `node tools/tsx-run.mjs tools/author-check.mts frontier-37-owner-30 28` | `ok: true`, fingerprint `1f7840f116e1bdd0...`, all four sub-gates pass |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | OK (warnings only, unrelated planned pages) |
| decision receipts | `node tools/tsx-run.mjs /tmp/f37/checkbatch.mts` | 29/29 `closed:true`, `hash:true` |
| scope/final step-3 check | `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase scope/final` | this pair is not in the work list (current); other pages listed belong to other groups |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | refreshed; batch-28 edge reviewed `verified`, no orphaned batch-28 row |

## Completed IDs (all 29, manifest order within each page)

- A page `hyperbolic-riemann-surfaces-and-uniformization` (24):
  `def-properly-discontinuous-group-action`,
  `lem-holomorphic-structure-lifts-to-covering-surface`,
  `lem-biholomorphic-invariance-of-plane-subharmonicity`,
  `def-harmonic-and-subharmonic-riemann-surface-functions`,
  `lem-locality-of-subharmonicity`,
  `lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces`,
  `lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces`,
  `def-canonical-green-kernel-riemann-surface`,
  `lem-green-envelope-dichotomy-and-logarithmic-pole`,
  `lem-green-kernel-exists-after-removing-a-chart-disc`,
  `lem-surface-green-identity-on-smooth-bordered-domain`,
  `lem-green-kernel-symmetry-on-riemann-surfaces`,
  `lem-weak-harmonic-limits-on-riemann-surfaces`,
  `lem-green-function-uniformizes-simply-connected-surface`,
  `lem-dipole-green-function-on-riemann-surface`,
  `lem-nongreen-simply-connected-surface-is-plane-or-sphere`,
  `lem-three-simply-connected-models-are-inequivalent`,
  `thm-uniformization-simply-connected-riemann-surfaces`,
  `def-universal-covering-type-riemann-surface`,
  `cor-universal-cover-classification-riemann-surfaces`,
  `def-poincare-metric-hyperbolic-riemann-surface`,
  `thm-deck-transformations-are-hyperbolic-isometries`,
  `lem-cocompact-free-affine-plane-action-is-a-lattice`,
  `cor-compact-genus-determines-uniformization-type`.
- B page `hyperbolic-riemann-surfaces-and-uniformization-examples` (5):
  `ex-hyperbolic-disc-and-half-plane-geodesics`,
  `ex-three-uniformization-models-are-distinct`,
  `ex-annulus-and-punctured-disc-hyperbolic-covers`,
  `ex-complex-torus-parabolic-deck-lattice`,
  `ex-genus-two-cocompact-fuchsian-quotient`.
- Item decisions: all 29 recorded `accept`, confidence 1, with the examined
  dependency IDs and a concrete evidence reason; 16 receipts were refreshed
  during this session for the two dependency-input changes (the Green-identity
  repair and the manifest dep-row sync); no `--owner` receipt, judge or audit
  stamp was used anywhere.

## Local suppliers added by this dispatch

- Two IDs are recorded by this report's checkpoints (checkpoints 1 and 4) as
  new local suppliers created by this dispatch, i.e. as the class the dispatch
  calls genuinely new item IDs: `lem-biholomorphic-invariance-of-plane-subharmonicity`
  (proof-bearing A-page supplier for the chartwise surface definitions) and
  `def-properly-discontinuous-group-action` (definitional A-page supplier for
  the lattice lemma and the Fuchsian-quotient items).
- `def-harmonic-and-subharmonic-riemann-surface-functions`,
  `def-canonical-green-kernel-riemann-surface`,
  `def-universal-covering-type-riemann-surface`,
  `def-poincare-metric-hyperbolic-riemann-surface` and the remaining
  proof-bearing A-page items received their item files during this dispatch's
  authoring passes (checkpoints 3, 9, 21, 23 and the item checkpoints above);
  each carries an ordinary current `accept` receipt.
- The engine's immutable pre-author baseline remains the authority for the
  new-ID exception; this report asserts that exception only for the two IDs
  its own checkpoints identify as added suppliers.
- All 29 IDs are registered in the batch manifest, proof contracts (definitions
  excepted by the gate), coverage input and the A/B pages.

## Cross-batch dependency (ledger row, batch 28 input)

- The unified ledger finds exactly one declared cross-batch edge for batch 28:
  consumer `cor-compact-genus-determines-uniformization-type` (batch 28,
  level 10) depends on supplier
  `lem-discrete-subgroups-of-real-vector-spaces-are-lattices` (batch 3).
  This is a genuine in-run cross-batch dependency and is now recorded in
  `research/frontier-37-owner-30-batch-28.cross-batch-dependencies.json` with
  status `verified`.
- Verification: the consumer's `[F8]` is used in step 5.1 with `V = R`
  (dimension 1): after identifying the centralizer of a parabolic/hyperbolic
  disc automorphism with `(R,+)` and deriving discreteness of the image
  subgroup from proper discontinuity, it concludes that group is trivial or
  infinite cyclic. The supplier states exactly the equivalence
  `(a) discrete <=> (c) Gamma = Zv_1 + ... + Zv_r`, `r <= dim_R V`, and proves
  the cycle in steps 2.1, 1.3-6.1 and 7.1; the norm-topology hypotheses match
  `R` with its usual topology. The supplier file was read in full (statement,
  facts, proof), its precheck is PASS, and its batch-3 receipt is current
  (`repaired`, confidence 1, hash verified). No missing-file or open-supplier
  flag is needed, and the consumer's `accept` decision stands.
- `node tools/frontier-dependency-ledger.mjs refresh --run
  frontier-37-owner-30` was run after the row was written; the edge now shows
  the `verified` review, and no batch-28 row is orphaned or missing.

## Published concerns reported to the owner

- None inside this pair: no published library item is depended on with a
  wrong hypothesis as far as authoring reached, and no published item was
  edited.
- Two defects were found and repaired locally, both inside the pair's own
  draft items: the false `Omega' = int Omega'` convention in
  `lem-surface-green-identity-on-smooth-bordered-domain` (see checkpoint 29;
  confidence high: the old convention is satisfied only by boundaryless
  domains, contradicting step 11.1) and the B-page-only citation of
  `ex-the-closed-ball-and-its-sphere-boundary` in the same item (confirmed by
  `depcheck` `b-leaf-content`, now cleared).
- Repo-wide debt observed at handoff, not touched (final check
  2026-09-30T17:06Z): 9 `b-leaf-content` errors (curves, Fourier,
  representation and other pairs under construction), 2
  `published-unaudited` items
  (`thm-ramified-primes-and-the-number-field-discriminant`,
  `cor-ring-of-integers-is-a-dedekind-domain`) and 1 `page-cycle`
  (`riemannian-comparison-theorems` pair); the repo-wide counts move while
  other groups author, but none of these rows involves batch 28.

Final batch state (2026-09-30T17:05Z): 29/29 item receipts `closed:true`,
`hash:true`; author-check `ok: true`; this pair is absent from the
`check --phase scope` and `check --phase final` work lists. Handoff: complete
for all 29 assigned items, both pages and all required Step-3 gates, with no
open obligation or escalation.

## Open obligations / escalations

- None outstanding for this pair: every one of the 29 items is authored,
  checkpointed, contract-covered (or definition-exempt), passing the batch
  gates, and carrying a current `accept` receipt. There is no unfinished
  in-run supplier, no deferred consumer and no owner-held escalation for
  batch 28.
- The only cross-batch edge declared by this batch (the batch-3 lattice
  lemma consumed by `cor-compact-genus-determines-uniformization-type`,
  step 5.1) has been verified and recorded in the batch-28 input of
  `research/frontier-37-owner-30-cross-batch-dependencies.json`; the ledger
  was refreshed afterwards, so no ledger obligation remains here.
- Step 4 serial reconciliation: no plan/prose amendment is requested beyond
  what the owner already holds (the checkpoint-3 "conventions carried"
  items are resolved above: the Green normalisation is stated item-by-item,
  the annulus wording repair is in item 26, and `Fuchsian` is defined inline
  in item 28).

# Step 3a reader report — batch 67

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader  
Scope: batch 67 only

## Review basis and inventory

I read the required workspace instructions (../CLAUDE.md, local CLAUDE.md,
README.md, SCHEMA.md, WORKFLOW.md, and ../PHYSICS-CONTENT-MODEL.md) and
briefs/reader.md. I opened the assigned manifest, the batch notes, the
cross-batch dependency record, the proof contracts, and both assigned page
files. The optional
research/physics-cm-qm-gr-79-2026-10-11-batch-67.evidence.json path named
during the initial lookup does not exist; the assigned manifest and batch
records supplied the page/item inventory.

**Page A — gr-connections-and-free-fall:**
library/general-relativity/gr-connections-and-free-fall.md.

Assigned items opened (manifest order; the applicable suppliers were checked
before final verdicts):

1. def-gr-timelike-worldline-and-proper-time
2. lem-gr-proper-time-reparametrization-and-four-velocity
3. thm-gr-nondegenerate-levi-civita-and-tensor-derivative
4. lem-gr-parallel-transport-and-geodesic-speed
5. thm-gr-local-geodesics-and-exponential-map
6. thm-gr-point-normal-and-exponential-coordinate-charts
7. lem-gr-first-variation-of-proper-time
8. thm-gr-lorentz-gauss-lemma-and-normal-maximum
9. post-gr-ideal-clocks-and-free-fall
10. pthm-gr-free-fall-worldline-is-determined-by-initial-data
11. rem-gr-normal-coordinates-and-local-inertial-frames-scope

**Page B — gr-connections-and-free-fall-examples:**
library/general-relativity/gr-connections-and-free-fall-examples.md.

Assigned items opened:

1. ex-gr-flat-space-geodesics-and-proper-time
2. ex-gr-levi-civita-connection-of-a-conformal-metric
3. ex-gr-nonaffine-geodesic-parametrization
4. cex-gr-geodesics-do-not-determine-the-connection
5. ex-gr-radial-timelike-maximum-in-flat-space
6. cex-gr-point-normal-chart-does-not-make-second-derivatives-vanish

I opened the 13 direct current-run suppliers owned by batches 65 and 66:
def-gr-inverse-metric-and-musical-isomorphisms,
lem-gr-inverse-metric-is-smooth, def-gr-metric-selected-connection,
lem-gr-connection-conditions-in-chart-components,
def-gr-tensor-fields-and-components,
lem-gr-contraction-of-smooth-tensor-fields,
def-gr-observer-and-rest-space,
lem-gr-observer-pairing-with-future-causal-vectors,
def-gr-observer-congruence-and-adapted-charts,
def-gr-si-unit-and-coordinate-conventions,
def-gr-smooth-covariant-two-tensor-field,
def-gr-smooth-lorentzian-objects, and
post-gr-spacetime-and-classical-domain. I also checked the exact statement
hypotheses needed from the ODE, Lorentz-cone, observer, connection, and
integration suppliers cited by the reviewed proofs, including the compact
rectangle differentiation theorem, Heine–Borel for closed intervals, and the
Lebesgue-number lemma.

## Edits and evidence

- **lem-gr-first-variation-of-proper-time, Facts & Assumptions [L4] and
  dependencies.** The old fact invoked the published Lebesgue differentiation
  under the integral sign theorem for a length functional whose integration
  convention is Darboux/Riemann. I replaced it with the published
  compact-rectangle differentiation theorem, whose exact hypotheses are
  continuity of the integrand and its parameter derivative on a compact
  rectangle and differentiability in the interior parameter; it concludes
  differentiation under the Riemann integral. Those hypotheses follow from
  the stated C2 variation and smooth metric. The obsolete Lebesgue dependency
  was replaced by
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle.

- **thm-gr-local-geodesics-and-exponential-map, Proof 5.1 and dependencies.**
  The previous finite-flow argument used time radii but did not show that its
  partition was subordinate to the local-flow neighborhoods along the compact
  state path. I made the finite-cover argument explicit: Heine–Borel gives
  compactness of the parameter interval, and the Lebesgue-number lemma gives a
  partition mesh for which every subinterval lies in one selected
  flow-neighborhood preimage and is shorter than that neighborhood's time
  radius. Finite composition and shrinking the initial-data neighborhood at
  each node then give the required smooth dependence and openness. I added
  thm-heine-borel-rn and thm-lebesgue-number-lemma to deps and
  dependency_roles.

- **thm-gr-lorentz-gauss-lemma-and-normal-maximum, Proofs 3.1 and 5.1.**
  Step 3.1 previously used the future direction of the limiting radial tangent
  without establishing it from the initial tangent. It now uses constant
  timelike speed along each radial geodesic and continuity of the two timelike
  components, then takes the future-causal limit at the boundary. Step 5.1
  now derives (v/R)'=0 from v'=(s/R)v and R'=s, including the continuity
  argument across corners; it also justifies the one-sided limit
  v'(t)→alpha'(0) from the C1 endpoint regularity of the first curve piece and
  d(exp_p^{-1})_p=id.

No verification.judge record was present on the three edited items.
Their proof-contract citations and derivations were regenerated in
research/physics-cm-qm-gr-79-2026-10-11-batch-67.proof-contracts.json.

## Checks

- Reflow: all three changed item files reported unchanged.
- Precheck: all three changed items passed.
- Proof-contract strict check: 3/3 changed items checked; 0 errors and
  0 warnings.
- Final proof-layout run: 3 items, 27 steps, 0 defects.

## Unedited defects

None confirmed in assigned items, assigned page prose, or the direct
current-run suppliers reviewed.

## Page verdicts

- **gr-connections-and-free-fall — PASS.** The page accurately separates its
  mathematical constructions, adopted physical assumptions, conditional
  free-fall deduction, and scope note. The repaired variational and radial
  maximum arguments support the page summary.
- **gr-connections-and-free-fall-examples — PASS.** The six mathematical
  examples and counterexamples agree with their stated models and proofs; the
  page makes no empirical claims.

## Blocker and coverage limit

No mathematical blocker remains in the reviewed batch. The reader-repaired
items now declare additional published-mathematics dependencies in their
frontmatter; the assigned manifest remains the dispatch snapshot and was not
edited in this reader pass. The routing/owner stage should reconcile its
dependency evidence if its mechanical gate requires a synchronized manifest.

I did not inspect the full proof text of every item in the large recursive
mathematics supplier closure. I checked exact statements and hypotheses of the
suppliers used in the reviewed arguments, but this report is not a whole-closure
audit. I independently opened Carroll's Lecture Notes on General Relativity
at https://arxiv.org/pdf/gr-qc/9712019, Chapter 3 equations (3.46)–(3.48),
(3.51)–(3.56), (3.58), and (3.60)–(3.62), printed pp. 69–73 (PDF pp. 76–80).
Carroll explicitly limits the proper-time maximum statement to the local
setting (printed p. 72; PDF p. 79), matching this item's exponential-domain
scope; the complete conditional proof is local in the assigned item. The
archived Reall and Tong PDF URLs were not retrievable through the browser in
this session, so I make no new source-fidelity claim about those copies.

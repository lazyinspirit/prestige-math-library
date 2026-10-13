# Reader report — batch 69

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: Step 3a reader  
Batch: `69`

## Scope and opened inventory

Read the workspace instructions `../CLAUDE.md`, `CLAUDE.md`, `README.md`,
`SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, and
`briefs/reader.md`. Read the batch-69 manifest and the complete proof-contract
index. The manifest assigns these two draft pages:

- A page `gr-einstein-and-matter` — 21 items.
- B page `gr-einstein-and-matter-examples` — 8 items.

Opened both page files and all 29 listed item carriers. The A-page inventory is:

`def-gr-metric-volume-form-and-current-flux`,
`lem-gr-metric-volume-form-patching-and-face-normal`,
`lem-gr-metric-divergence-and-density-formula`,
`thm-gr-density-divergence-and-finite-chain-flux`,
`lem-gr-lorentzian-perturbations-remain-lorentzian`,
`lem-gr-compact-variation-coefficient-vanishing`,
`def-gr-hilbert-stress-energy-tensor`,
`lem-gr-hilbert-tensor-uniqueness`,
`thm-gr-compact-metric-and-timelike-curve-variation`,
`def-gr-killing-field`,
`thm-gr-killing-and-on-shell-matter-identities`,
`def-gr-scalar-field-matter-model`,
`prop-gr-scalar-field-stress-energy-conservation`,
`def-gr-dust-matter-model`,
`def-gr-perfect-fluid-matter-model`,
`prop-gr-dust-and-perfect-fluid-conservation-equations`,
`post-gr-classical-gravitational-action`,
`post-gr-einstein-field-law`,
`pthm-gr-adopted-action-and-einstein-equations`,
`pthm-gr-einstein-consistency-and-energy-conditions`, and
`rem-gr-einstein-matter-scope-and-conventions`.

The B-page inventory is:

`ex-gr-metric-volume-density-and-flux-in-flat-coordinates`,
`ex-gr-flux-balance-for-a-divergence-free-current`,
`ex-gr-dust-conservation-in-flat-space`,
`ex-gr-null-gradient-scalar-field-conservation`,
`ex-gr-killing-current-for-a-static-dust-in-flat-space`,
`cex-gr-energy-conditions-do-not-imply-conservation`,
`cex-gr-divergence-free-does-not-force-zero-flux`, and
`ex-gr-perfect-fluid-energy-conditions`.

Opened dependency statements needed for the computations reviewed here,
including the Lorentzian and orientation definitions, differential-form and
simplex integration conventions, Lorentz orthogonality and orthonormal-basis
items, metric-selected connection and tensor-derivative statements, Christoffel
component identities, determinant derivative/multiplicativity, Stokes for
smooth singular chains, curvature and contracted Bianchi identities,
point-normal charts, the timelike-length variation lemma, stress-energy and
energy-condition definitions, SI conventions, and the matter-content
postulate. These supplied the exact hypotheses used in the checked arguments.

## Repairs

1. In `ex-gr-null-gradient-scalar-field-conservation`, the title and clause 1
   now say the metric dual of `dφ` is null where `dφ ≠ 0` and is the zero vector
   where `dφ = 0`. The original construction permits critical points (including
   constant `f`), and the library's causal definition requires a null vector to
   be nonzero. The local calculation already establishes zero squared norm at
   every point. Updated that item's proof-contract step and zero-boundary
   evidence; the item had no stale judge record.

2. In `cex-gr-divergence-free-does-not-force-zero-flux`, changed the title from
   “spacelike” to “timelike”. Its simplex tangent Gram matrix is
   `diag(-1,1,1)`, so the induced metric is Lorentzian, not positive definite.
   This was a title-only repair; the counterexample computation is unchanged.

3. In `ex-gr-flux-balance-for-a-divergence-free-current`, changed the title to
   claim nonzero face-flux density and corrected `d_2` to `∂_2`. The proof
   computes density `±x¹` on faces normal to `±∂₂`, but it did not exhibit an
   integrated nonzero side-chain flux. The remark now distinguishes pointwise
   density from integrated chain flux. The proof contract's derivations remain
   unchanged because the computation was not altered.

For all three changed items, reflow completed with “unchanged”; precheck passed
for each; the final batched proof-layout check reported `3 items, 10 steps,
0 defects`. No changed item contained a stale `verification.judge` record.

## Unedited findings

1. `def-gr-metric-volume-form-and-current-flux`, Definition (c), the sentence
   beginning “A smooth singular 3-simplex σ is non-null at a parameter point”.
   The item defines nondegeneracy for a 3-dimensional subspace, then applies
   that predicate to the span of three velocities without explicitly requiring
   rank 3. The cited smooth-singular-simplex definition permits degenerate
   parametrizations. State that the velocity span must have dimension 3 and be
   nondegenerate before calling the simplex non-null. I left the Definition
   unchanged because a Definition edit reaches 123 current logical consumers;
   those consumers were not all audited in this batch.

2. `def-gr-hilbert-stress-energy-tensor`, Definition (a), paragraph beginning
   “A smooth metric family at g”. It requires each fixed `g_s` to be smooth but
   gives no smooth dependence on `s` (or existence of a smooth tensor-field
   derivative). It then defines `q^{ab}` by differentiating and asserts that
   this is a smooth tensor field. Require joint smoothness of `(s,p) ↦ g_s(p)`
   in local coordinates, or explicitly require the derivative to exist as a
   smooth tensor field. I left the Definition unchanged because it reaches 95
   current logical consumers, which were not all audited in this batch.

3. `thm-gr-killing-and-on-shell-matter-identities`, Statement (d), hypotheses
   (H1)–(H4), and Proof step 4.1. The Statement assumes those hypotheses for
   one compactly supported vector field `ξ`; step 4.1 varies `ξ` over every
   chart-supported test field to infer `∇^aT_{ab}=0`. For `ξ=0`, (H1)–(H4) can
   hold while supplying no test information about `T`. Require (H1)–(H4) for
   every compactly supported smooth `ξ` (with the corresponding flow), or
   weaken the conclusion to the integral identity for the chosen `ξ`. I left
   the Statement unchanged because it reaches 38 current logical consumers,
   which were not all audited in this batch.

4. `post-gr-classical-gravitational-action`, Postulate (iii)–(iv). Clauses
   (iii) and the following paragraph say the dust and perfect-fluid sectors
   have no supplied matter action and prescribe `T` directly; clause (iv)
   nevertheless states stationarity of a total action for the action
   presentation, then redirects those same sectors to the direct equation.
   This conflicts with the postulate's action-presentation classification and
   its exactly-one-presentation rule. Restrict the action presentation to
   sectors with a supplied Hilbert action (here the scalar field), or supply and
   justify matter actions for the other sectors; keep dust/perfect-fluid models
   under the direct-equation presentation. I left the postulate unchanged
   because it reaches 30 current logical consumers, which were not all audited
   in this batch.

These four findings are in the batch findings JSON for owner routing. Their
consumer counts are current `deps`/`justified_by` logical-closure counts only;
they do not represent a full audit of narrative uses, aliases, or every
out-of-batch consumer.

## Page verdicts

- `gr-einstein-and-matter` (A page): **requires repair**. No separate page-prose
  defect was confirmed; the four unedited definition/theorem/postulate defects
  above prevent acceptance of its current content.
- `gr-einstein-and-matter-examples` (B page): **no unresolved carrier defect
  found after local repairs**. The three title/claim mismatches listed above
  were repaired. The B-page prose itself was not edited. This verdict has the
  dependency-closure limitation stated below.

## Coverage limit and blocker

No process blocker occurred. The four remaining findings change shared public
interfaces. I did not inspect all out-of-batch consumers in their logical
closures, so I did not make those interface edits or claim downstream review.
The counts above come from the current item `deps`/`justified_by` graph only.

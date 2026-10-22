# Batch 24 notes — Connection sectors, holonomy and presymplectic boundaries

Run: physics-non-fluid-129-2026-10-21-r2  
Role: beta  
Owned pages: emg-fx09 and emg-fx09-examples  
Assigned A/B page count: 1 pair

## Plan and design comparison

The complete emg-fx09 design section and the corresponding plan-spec rows agree
on both page IDs, titles, category, mathematics-library placement, order 745/746,
companion relation, four A-page prerequisites, the four planned A interfaces,
and the B-page flat-circle example. No plan-spec/page-design conflict was found.
The A page has four items and the B page one example, both below the 100-item cap.
Both page carriers are frontmatter-only, as required by the current
statement-first workflow.

The design writes the positive phase $e^{2\pi i\theta}$ as holonomy. The
already-inspected local bundle convention is $\omega=\eta+a$ with horizontal
lift equation $d\psi+a=0$, so principal horizontal-lift holonomy is
$e^{-2\pi i\theta}$. The B example records both: $e^{2\pi i\theta}$ is the
inverse Wilson-loop convention, and the principal holonomy is its inverse.
Both are trivial exactly for integer $\theta$. This sign reconciliation retains
the design's positive Wilson phase and the actual supplier's principal
connection convention.

The normalized circle connection has components in $\mathrm m^{-1}$, while the
physical potential uses $\kappa_0$ webers. The fixed-background current is
defined on these normalized variations and includes the $\kappa_0^2$ scaling
only when physical-potential variations are used. No conversion identifying
$\kappa_0d\alpha$ with the geometric-normalized field $\mathcal F$ in the
coupled Einstein–Maxwell equations is supplied or asserted. The current also
does not include metric variations or claim to be the full coupled
Einstein–Maxwell covariant phase-space current. A later physical identification
would require an explicit normalization and action-conversion input.

## Inventory, dependencies, and levels

The planned inventory is preserved exactly:

| Item | Home | Direct item dependencies | In-run level |
| --- | --- | --- | ---: |
| prop-emg-fx-affine-connection-sector | A | def-countable-choice; def-emg-local-potentials-and-circle-data; lem-emg-circle-connection-gluing; prop-gauge-transformations-act-on-principal-connections; thm-the-exterior-derivative-commutes-with-pullback; lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes; lem-emg-lorentz-hodge-calculus | 0 |
| def-emg-fx-maxwell-presymplectic-current | A | def-countable-choice; prop-emg-fx-affine-connection-sector; def-emg-local-potentials-and-circle-data; def-emg-fx-linearized-electrovac; lem-emg-fx-linearized-hodge; lem-emg-lorentz-hodge-calculus | 2 |
| lem-emg-fx-symplectic-current-boundary | A | def-countable-choice; def-emg-fx-maxwell-presymplectic-current; lem-emg-lorentz-hodge-calculus; thm-stokes-theorem-for-smooth-singular-chains | 3 |
| prop-emg-fx-finite-coisotropic-pairing | A | def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces; prop-symplectic-reduction-of-a-coisotropic-vector-subspace | 0 |
| ex-emg-fx-flat-holonomy-circle | B | def-countable-choice; prop-emg-fx-affine-connection-sector; def-emg-local-potentials-and-circle-data; lem-emg-sphere-flux-holonomy; def-gauge-group-of-a-smooth-principal-bundle; prop-gauge-transformations-act-on-principal-connections; thm-kernel-and-fibres-of-complex-exponential; lem-emg-lorentz-hodge-calculus | 1 |

The recomputed item levels use only in-run suppliers; all other dependencies
remain external context. The scoped graph containing batches 20 and 24 has no
cycles or level errors. Batch 24 remains at run level 1 with batch 20 as its
only in-run predecessor.

The stored shared file
research/physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json
still has the pre-authoring input hash
e9464e11acecf8f1a8bda27ba93ac324cf04cd85b6d1fd546ef373621e7cc91b.
Recomputation from all current manifests gives
8f36fd9ad37ef5ebae6f37d4e2ab29b540b0c846ed36beba8891bfc26066923c at the
first check, and after the final scoped prerequisite additions gives
e674c37ab2a60d724ab788a09da1a06c94b3cb626f9e9c4ca3614f6061cb1c88. In both
recomputations the batch-24 row is exactly
{"batch":"24","dependency_level":1,"requires":["20"]}. The read-only
batch-dependency-levels check therefore reports the stored input hash stale.
That shared run-level schedule is owner-maintained and was left untouched; the
owner needs to write its current hash at the drained construction join.

## Supplier inspection and readiness

- emg-mg02 is an existing published local page. The exact normalized circle-data
  definition and complete connection-gluing and flat-holonomy proofs were read.
- emg-fx05 is the current batch-20 draft page. Its geometric linearized
  electrovac definition and the complete linearized-Hodge proof were read at
  their current statements and conventions. The Hodge supplier specializes at
  $h=0$ to $\delta(\star\mathcal F)=\star f$; its equation
  $d\,\delta(\star\mathcal F)=0$ is a linearized-equation hypothesis, not a
  consequence of the variation formula. The current Step 1 records for
  def-emg-fx-linearized-electrovac and lem-emg-fx-linearized-hodge are both
  ready. The latter remains draft with precheck pending; its inspected proof and
  current authoring-readiness record establish the actual interface used here,
  not independent acceptance.
- The imported gauge page is published and read at the principal-connection,
  gauge-group, and pushforward-action statements and proofs. The action is
  pushforward of horizontal distributions; in the chosen local form convention
  this gives $a\mapsto a-\lambda(h)$.
- The imported symplectic page is published. Its coisotropic-subspace
  definition and complete finite-dimensional quotient proof were read. The
  new proposition applies that result only to finite-dimensional mode spaces.
- $\mathrm{AC}_\omega$ is stated and cited because the imported principal
  connection/gauge-action convention requires it. No full Axiom of Choice or
  countable selection is used in the local overlap, Hodge-current, Stokes, or
  holonomy calculations.

No in-batch prerequisite is missing, and no other pair's supplier was authored.
The connection-normalized fixed-background current is a mathematical
definition with an explicit scope boundary; it does not claim a missing
SI-to-geometric conversion. No owner escalation is needed for the assigned
items.

## Source harvest

Full-text reading and per-result dispositions are recorded in
physics-non-fluid-129-2026-10-21-r2-batch-24-sources/source-reading.md and
physics-non-fluid-129-2026-10-21-r2-batch-24.coverage.json. The A page has six
independent treatments, including Tong and Compère–Fiorucci full lecture notes;
the B page has Tong and Morrison as independent connection treatments. All
eight page/source records are full-text fetch-verified. Raw hashes match the
current source-fetch stamps. There were no failed retrievals, recovery retries,
drops, or unresolved source-resolution records. The quantum Dirac phase
condition, gravitational surface charges, asymptotic falloff theorems, and
Lagrangian-subspace reduction are marked out of scope with reasons.

## Cross-batch edges

research/physics-non-fluid-129-2026-10-21-r2-batch-24.cross-batch-dependencies.json
contains exactly two verified current-run edges: page emg-fx09 to page
emg-fx05, and item def-emg-fx-maxwell-presymplectic-current to item
lem-emg-fx-linearized-hodge. The checks record inspected interfaces and current
Step 1 readiness only; they do not certify independent proof acceptance.

## Scoped checks and readiness

- Source fetch: 8/8 records verified; 0 drops.
- Coverage checklist: 2 pages, 18 harvested source results, 0 errors, 0 warnings.
- Proof contracts: 5/5 item entries checked in strict mode, 0 errors, 0 warnings.
- Scoped dependency check for batches 20 and 24: item levels 0, 1, 2, and 3
  match each manifest; 0 cycles and 0 errors.
- The full-run item dependency check also reported empty scaffold inventories
  in unrelated in-progress pages. Those records are outside batch 24; the
  scoped batches 20 and 24 graph above is complete and passes.
- Batch 24 full-graph recomputation: level 1, requires batch 20. The stored
  run-level schedule hash is stale as recorded above.
- Content policy: 5 scoped items, 0 errors, 0 warnings.
- Dependency check: focused scope covers 1,546 prerequisite items and 326
  prerequisite pages, with 0 errors and 0 warnings.
- Render check: 5 item files and 2 page files, 0 errors and 0 warnings.
- Precheck: 4 proof-bearing items checked and passed; the definition is not
  applicable to phase-format proof checks.
- Explicit proof-layout: 5 changed items, 14 numbered steps, 0 defects.
- The five final item readiness records are current and ready with
  owner=false. They certify authoring readiness and current prerequisites only,
  not independent review or proof approval.

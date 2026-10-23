# Step 3a reader report — batch 20

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Batch: `20`

## Opened inventory

Assigned pages:

- `library/fluid-dynamics/fd-ps01.md`
- `library/fluid-dynamics/fd-ps01-examples.md`

Page prerequisites opened:

- `library/fluid-dynamics/fd-f03.md`
- `library/fluid-dynamics-mathematics/fd-s03.md` (the canonical current path for page `fd-s03`)

Assigned items, reviewed after their suppliers:

- `items/pthm-fd-local-periodic-incompressible-model-evolution.md`
- `items/pthm-fd-local-polytropic-model-evolution.md`
- `items/pthm-fd-two-dimensional-viscous-model-globality.md`
- `items/ex-fd-homogeneous-polytropic-model.md`

Direct and relevant transitive supplier items opened:

- `items/def-countable-choice.md`
- `items/post-fd-continuum-balances.md`
- `items/post-fd-newtonian-fourier.md`
- `items/def-fd-incompressible-newtonian-model.md`
- `items/def-fd-barotropic-euler-model.md`
- `items/def-fd-quantity-and-frame-conventions.md`
- `items/def-fd-smooth-motion.md`
- `items/def-fd-polytropic-symmetric-variables.md`
- `items/def-fd-periodic-fourier-sobolev-spaces.md`
- `items/def-fd-periodic-leray-pressure-maps.md`
- `items/lem-fd-transport-and-density.md`
- `items/lem-fd-c1-domain-jordan-integrals.md`
- `items/lem-fd-isotropic-linear-classification.md`
- `items/lem-fd-periodic-fourier-embedding-products.md`
- `items/lem-fd-periodic-tame-transport-commutator.md`
- `items/lem-fd-given-smooth-solutions-difference-energy.md`
- `items/lem-fd-2d-fourier-log-velocity-bound.md`
- `items/lem-fd-2d-transport-commutator-l1-bound.md`
- `items/lem-fd-polynomial-ode-continuation.md`
- `items/thm-fd-smooth-periodic-incompressible-ivp.md`
- `items/thm-fd-periodic-pressure-recovery.md`
- `items/thm-fd-smooth-polytropic-euler-ivp.md`
- `items/thm-fd-polytropic-energy.md`
- `items/thm-fd-global-two-dimensional-periodic-navier-stokes.md`
- `items/thm-fd-smooth-vorticity-identities.md`
- `items/thm-fd-smooth-sobolev-continuation.md`
- `items/thm-fourier-basis-and-parseval-on-the-n-torus.md`
- `items/thm-picard-lindelof-local-existence-and-uniqueness.md`
- `items/thm-bolzano-weierstrass.md`
- `items/thm-euclidean-space-complete.md`
- `items/thm-euclidean-inverse-function-theorem.md`
- `items/thm-euclidean-heine-borel-pseudocompactness-and-extreme-values.md`

Also checked the assigned manifest, its four proof-contract rows, and the
relevant supplier path/hash entries in `research/math-imports.json`. No
rendered batch-20 reader evidence bundle was present among the current run's
top-level research files.

## Review findings and item verdicts

- `pthm-fd-local-periodic-incompressible-model-evolution` — pass. The 3D
  constitutive reduction, transverse lifts, nondimensional scaling, and use of
  the uniform-viscosity local existence and pressure suppliers support the
  stated interval and pressure gauge. The conclusion remains conditional on
  the adopted mechanical model and makes no empirical-validity claim.
- `pthm-fd-local-polytropic-model-evolution` — pass. The positive-density
  local theorem applies to the stated data; the pressure and specific-energy
  closures, reduced lifts, and physical mean-energy scaling are consistent.
  The item distinguishes adopted closures from molecular or empirical claims.
- `pthm-fd-two-dimensional-viscous-model-globality` — pass. The positive
  viscosity hypothesis matches the 2D periodic theorem. The proof preserves
  its two-dimensional/transverse-invariant scope and makes no 3D-general or
  inviscid regularity claim.
- `ex-fd-homogeneous-polytropic-model` — pass. Direct substitution verifies
  mass and momentum equations, and the local uniqueness result identifies the
  local branch. The displayed energy density has the stated pressure units.

No assigned item contains a TikZ/tikzcd diagram. Statements and definitions
in the four assigned items are uninterrupted by hyperlinks. The proof-contract
derivations and boundary/finite-check records match the current step structure.
No assigned item or page was edited.

## Page verdicts

- `fd-ps01` — pass. The frontmatter inventory and prerequisite pages are
  consistent with the local periodic model scope. Its body is empty, as
  required; no summary was authored or restored.
- `fd-ps01-examples` — pass. The example is a dependency of the assigned A-page
  polytropic result. Its body is empty, as required; no summary was authored or
  restored.

## Uneditable findings

Three imported, published mathematical suppliers have hyperlinks inside their
complete `## Statement` sections, contrary to the mandatory uninterrupted-
statement rule. The exact locations and assigned consumers are in the returned
findings JSON. These items are read-only from this physics batch; no supplier
or consumer repair was made.

## Edits, checks, and blocker

No source item or page was edited. Therefore no item reflow, precheck, or
proof-layout command was due. The report and findings JSON are the only files
written for this task. No blocker prevents this batch review from completing.

## Coverage note

All assigned pages and items, their direct item dependencies, and the
mathematical theorem suppliers used in the assigned proofs were inspected.
This was not a full independent audit of every foundational dependency below
the imported published results or every external source cited by the physical
postulate suppliers. The MIT Sonin PDF was not accessible through the browser
retrieval tool. The physical conclusions were reviewed as conditional
deductions from the exact local postulate formulations; no broader source-
fidelity verdict is claimed.

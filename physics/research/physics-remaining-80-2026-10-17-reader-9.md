# Step 3a independent reader report — batch 9

Run: `physics-remaining-80-2026-10-17`  
Role: reader  
Scope: batch `9` only

## Opened inventory

Assigned pages:

- `emg-pcp02` — A page.
- `emg-pcp02-examples` — B/examples page.

Required page context:

- `emg-cp03` — mathematics prerequisite page.
- `emg-g04` — Einstein–Maxwell prerequisite page.

Assigned items, read in supplier order:

- `post-emg-strict-charged-fluid-model`.
- `pthm-emg-local-charged-fluid-model`.
- `ex-emg-adopted-linear-eos-model`.

I also inspected the batch-9 manifest, its current proof-contract rows, author notes, and source-coverage ledger. Dependency text opened for the postulate, theorem, and example included `def-emg-strict-charged-barotropic-system`, `def-emg-geometry-units`, `post-emg-einstein-maxwell-equations`, `thm-emg-local-charged-barotropic-development`, `def-countable-choice`, `def-dependent-choice`, `def-gr-harmonic-gauge-and-reduced-equations`, `def-gr-periodic-torus-and-sobolev-spaces`, `thm-gr-constraint-equations-in-normal-frame`, `lem-emg-observer-field-decomposition`, `lem-emg-charged-fluid-current-conservation`, `lem-emg-charged-fluid-positive-symmetric-reduction`, `lem-emg-fieldstrength-positive-symmetric-reduction`, `lem-emg-classical-maxwell-stress-identity`, `lem-emg-maxwell-stress-conservation`, `lem-emg-lorentz-hodge-calculus`, `lem-gr-reduced-einstein-principal-part`, `lem-gr-einstein-residual-and-subsidiary-identity`, `thm-gr-local-symmetric-hyperbolic-well-posedness`, `lem-gr-periodic-sobolev-embedding`, `thm-gr-local-geometric-development`, `thm-gr-density-divergence-and-finite-chain-flux`, `thm-picard-lindelof-local-existence-and-uniqueness`, `def-riemannian-divergence`, `prop-coordinate-formula-for-riemannian-divergence`, `def-natural-logarithm`, `thm-logarithm-derivative-and-integral`, and `thm-natural-logarithm-laws`.

## Review and edits

No item or page prose was edited. The postulate explicitly adopts smooth strict-interior fields, the EOS normalization, current and stress maps, force balance, charge advection, units, and exclusions; it does not claim empirical validation. The local development theorem carries the stated smooth and torus-Sobolev hypotheses, reconstructs all six initial field-strength components, states all four Einstein/Maxwell constraints, and makes its conclusion conditional on the named mathematical development theorem and the adopted physical postulates. The example's power-law EOS and enthalpy calculations, torus construction, stress projections, Hamiltonian and momentum constraints, Maxwell constraints, compact admissibility interval, and conditional local-development application check out under their stated hypotheses.

The relevant sign conventions agree across the inspected suppliers: $F_{0i}=-e_i$, $F_{ij}=\varepsilon_{ijk}b_k$, and $K(X,Y)=g(\nabla_X\mathfrak n,Y)$. The Maxwell source sign yields $\nabla^aT^{\rm EM}_{ab}=-F_{bc}j^c$, which cancels the adopted fluid force term. The charged-fluid current conservation calculation uses the EOS integral and advected $Z$; the Maxwell residual propagation uses the stated Gauss constraints. The Einstein gauge-recovery argument uses the displayed reduced-equation identity and stress conservation. I found no confirmed mathematical defect in the assigned items.

One uneditable wording concern remains on `emg-pcp02-examples`: its Scope first sentence says “evaluates its positive EOS density and enthalpy coordinate.” This can be read as claiming that the enthalpy coordinate is positive. The assigned example defines $r(\epsilon)=\frac{\sqrt w}{1+w}\log(\epsilon/\epsilon_*)$, so $r(\epsilon_*)=0$. If “positive” is intended to modify only the EOS density, the page summary should be made unambiguous. This is recorded as a nonfatal page finding; B-page prose was outside the permitted edit scope.

Page verdicts:

- `emg-pcp02`: the postulate and local theorem match the page summary's adopted-model and conditional-development scope; no page defect found.
- `emg-pcp02-examples`: the example is sound as a conditional construction; the Scope wording above is ambiguous and should be clarified.

## Limitations and blocker

No blocker prevented this scoped review. I did not independently fetch the cited literature PDFs during this pass; I used the current authored equations and proofs for the mathematical checks and did not reject any citation for source inadequacy. I did not re-audit the complete transitive foundations beneath every mathematical supplier in the local-development proof; the report records the supplier material actually opened and does not claim a whole-closure audit. No validators or proof-layout tools were run because no proof-bearing item was changed.

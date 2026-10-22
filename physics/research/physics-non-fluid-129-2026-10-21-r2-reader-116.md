# Step 3a reader report — batch 116

Run: physics-non-fluid-129-2026-10-21-r2

Role: reader. Scope: batch 116.

## Opened inventory

I read the workspace and physics instructions (../CLAUDE.md, CLAUDE.md,
README.md, SCHEMA.md, WORKFLOW.md, and ../PHYSICS-CONTENT-MODEL.md),
briefs/reader.md, and the current batch manifest, notes, coverage record,
cross-batch dependency record, and proof contracts.

Assigned pages:

- library/thermodynamics-and-general-relativity/tgrx-hydrostatic-functional.md
- library/thermodynamics-and-general-relativity/tgrx-hydrostatic-functional-examples.md

Assigned items, read in dependency order:

- items/def-tgrx-static-hydrostatic-data.md
- items/post-tgrx-hydrostatic-effective-model.md
- items/pthm-tgrx-hydrostatic-variation.md
- items/ex-tgrx-entropy-does-not-close-hydrodynamics.md

Mathematical and physical suppliers opened for the assigned claims:

- items/def-smooth-manifold.md
- items/def-topological-manifold-without-boundary.md
- items/def-cartesian-product.md
- items/def-gr-smooth-lorentzian-objects.md
- items/def-gr-killing-field.md
- items/prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure.md
- items/def-riemannian-metric-and-riemannian-manifold.md
- items/def-riemannian-volume-density.md
- items/lem-the-riemannian-volume-density-is-coordinate-independent.md
- items/def-tgr-framework-units.md
- items/def-tgrx-thermal-vorticity.md (current batch-115 draft)
- items/def-tgr-stationary-thermal-carriers.md
- items/post-tgr-local-material-thermodynamics.md
- items/post-tgr-first-order-dissipation.md
- items/def-countable-choice.md
- items/def-integral-of-a-compactly-supported-smooth-density.md
- items/thm-density-integration-is-defined-without-an-orientation.md
- items/prop-riemannian-volume-is-the-radon-measure-of-the-riemannian-density.md
- items/thm-density-measure-integration-agrees-with-smooth-density-integration.md
- items/thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure.md
- items/thm-heine-borel-rn.md
- items/thm-finite-products-of-compact-spaces.md
- items/thm-compactness-under-continuous-maps.md
- items/thm-heine-cantor-metric.md
- items/cor-mean-value-theorem.md
- items/thm-chain-rule-for-total-derivatives.md

Page prerequisite context opened:

- library/thermodynamics-and-general-relativity-mathematics/tgrx-thermal-geometry.md
- library/thermodynamics-and-general-relativity/tgr-c02.md
- library/thermodynamics-and-general-relativity/tgr-i01.md
- ../library/differential-geometry/riemannian-metrics-length-distance-and-volume.md

I also checked the relevant import records in research/math-imports.json.

## Source review

I opened the cited PDFs and inspected the passages used by the items:

- Banerjee et al., [Constraints on Fluid Dynamics from Equilibrium Partition
  Functions](https://arxiv.org/pdf/1203.3544), §1.1 eqs. (1.3)–(1.5) and the
  charged zero-derivative expression in eq. (1.11), §2.3.1 eqs. (2.17),
  (2.22)–(2.24), and the relevant zero-derivative discussion in §2.5. The paper
  supplies the stationary redshifted profile and pressure-functional context;
  its charge derivative is not used in place of the local second-derivative
  proof. The local items state their own SI and gauge conventions and do not
  assert a microscopic trace.
- Kovtun, [Lectures on Hydrodynamic Fluctuations in Relativistic
  Theories](https://arxiv.org/pdf/1205.5040), §1.3 for derivative counting,
  the microscopic length scale, and the first-order bulk-pressure term; §2.6
  for its model-specific microscopic time scale; and §3.2 for the stated
  higher-order fluctuation limitation. The local postulate treats the scales
  as application inputs and asserts no universal convergence or error bound.

This was targeted reading of relevant passages, not an independent rereading
of every page of either paper.

## Item review, edits, and evidence

- items/def-tgrx-static-hydrostatic-data.md: the Lorentzian product metric,
  lapse, Killing field, units, profiles, and smooth positive density are
  locally defined and their well-definedness argument is sound. I repaired
  the integration prerequisite: the old carrier used finite total volume and
  density integration without declaring the associated Borel volume measure
  or how scalar integrands are integrated against it. I added the published
  Riemannian volume-measure and density-measure integration suppliers, made
  ACω explicit, and stated that ∫ f dV_h denotes integration against vol_h.
  The public Definition text was unchanged. The changed proof contract records
  the new suppliers and the exact assumption.
- items/post-tgrx-hydrostatic-effective-model.md: no remaining defect found.
  It is an adopted order-zero effective functional; its pressure input is not
  silently identified with the material energy function, and the scale
  qualifications do not claim convergence, a microscopic trace, or an
  empirical equation of state.
- items/pthm-tgrx-hydrostatic-variation.md: the displayed derivatives and
  nonnegativity conclusion follow under the stated C² and pointwise convexity
  assumptions. I repaired missing mathematical prerequisites in the proof:
  compactness of the parameter/profile domain, compact-image bounds, uniform
  continuity, the mean value and chain rules, the measure integral's
  linearity/order property, and its countable-choice assumption. The proof
  now applies uniform difference-quotient convergence on the compact profile
  image and integrates it against the finite Borel volume measure. I made the
  positive k_B calibration an explicit assumption (A3). The public Statement
  was unchanged. The proof contract now records the added suppliers and
  revised derivations.
- items/ex-tgrx-entropy-does-not-close-hydrodynamics.md: no remaining defect
  found. Its algebraic comparison is conditional on the shared pressure
  identification and a common admissible input with θ ≠ 0; it does not
  assert a solution of the balance equations or report an experiment.

No stale verification.judge record existed on either repaired draft item.

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| tgrx-hydrostatic-functional | Pass | Draft physics A page; its three assigned items and page prerequisites match the inspected current page. It is intentionally frontmatter-only. |
| tgrx-hydrostatic-functional-examples | Pass | Draft physics companion page; its example item and A-page prerequisite match the inspected current page. It is intentionally frontmatter-only. |

There are no TikZ or tikzcd diagrams in the assigned page or item carriers.
The reviewed material makes no empirical observation or statistical
inference.

## Uneditable defect

def-cartesian-product is a published imported mathematical dependency of
def-tgrx-static-hydrostatic-data; its raw imported bytes match the root
mathematical original (SHA-256
bd08d3fe005379fb601046deadbe74db9d691cf2b83803c5478705d7832537eb).
Definition lines 39–43 contain the malformed sequence “Let A and B be sets.
By / If … then … every ordered pair …, so / The Axiom Schema of Separation …
applied inside that set produces the”. The standalone “By” and the broken
“so The Axiom Schema …” transition leave the explanatory paragraph ill-formed.
The following comprehension and membership criterion still make the intended
Cartesian product understandable, so the impact on the assigned consumer is
nonfatal. This is published mathematical content and was not edited.

## Validation and blocker

For the two changed items:

- Reflow: unchanged.
- Precheck: 2 checked, 0 failing.
- Strict proof-contract check: 4/4 batch items checked, 0 errors, 0 warnings.
- Final proof-layout check: 2 items, 6 steps, 0 defects.

The batch pages manifest remains the dispatch-time snapshot and does not yet
mirror the added external mathematics dependencies in the repaired item
frontmatter. I left that run metadata untouched under the reader's carrier
write scope; the owner/workflow should reconcile it if the next dependency
consistency gate requires a manifest mirror update. No new in-run dependency
edge was added. The published def-cartesian-product defect remains for owner
disposition.

## Coverage limits

I reviewed every assigned page and item, the relevant direct suppliers, and
the mathematical results needed for the repairs. I did not independently
re-audit every lower-level dependency in every published mathematical
supplier's full closure. I inspected only the relevant passages of the cited
papers, as identified above.

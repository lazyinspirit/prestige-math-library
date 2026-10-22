# Step 3a reader report — batch 93

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `93`

## Opened inventory

Assigned pages:

- `library/classical-statistical-mechanics/csm-frontier-kinetic-scaling.md` (A page)
- `library/classical-statistical-mechanics/csm-frontier-kinetic-scaling-examples.md` (B page)

Assigned items, read in dependency order:

- `items/def-csm-frontier-two-velocity-scaling.md`
- `items/def-csm-frontier-boltzmann-grad-scaling.md`
- `items/lem-csm-frontier-two-velocity-contraction.md`
- `items/thm-csm-frontier-two-velocity-heat-limit.md`
- `items/ex-csm-frontier-distinct-scaling-limits.md`

Page prerequisites opened:

- `library/classical-statistical-mechanics/csm-collision-transport.md`
- `library/classical-statistical-mechanics/csm-mean-field-hierarchy.md`
- `library/classical-statistical-mechanics/csm-frontier-probability-interfaces.md`

Mathematical item suppliers opened to check the scoped definitions and proofs:

- `items/def-l-p-space-as-a-quotient-by-null-functions.md`
- `items/thm-fourier-basis-and-parseval-on-the-n-torus.md`
- `items/def-countable-choice.md`
- `items/thm-ftc-second-part.md`
- `items/lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval.md`
- `items/lem-exponential-series-of-a-bounded-operator.md`
- `items/thm-euclidean-space-complete.md`
- `items/thm-cauchy-schwarz-and-the-euclidean-norm.md`
- `items/def-euclidean-inner-product.md`
- `items/def-operator-norm.md`
- `items/def-csm-dk-periodic-mean-field-model.md`
- `items/def-csm-dk-hamiltonian-flow-measure.md`

The batch manifest and its proof-contract file were also inspected. No TikZ or
TikZ-cd diagrams occur in the assigned items or pages.

## Review and repairs

- In `def-csm-frontier-two-velocity-scaling`, the displayed squared (L^2)
  quantity was introduced for every integrable function, although an (L^1)
  function need not have an integrable square. I restricted the domain to
  periodic measurable functions with finite squared integral. The assigned
  contraction lemma, heat-limit theorem, and comparison example were reviewed
  against this definition; their uses are square-integrable or smooth. I updated
  the definition interface in the batch proof contract.

- In `lem-csm-frontier-two-velocity-contraction`, the statement used
  (F^\epsilon,G^\epsilon) without defining the solution-pair notation or its
  norm. I defined both explicitly. The existence argument also initially
  derived mode equations from Fourier coefficients of a solution before
  constructing that solution. I replaced this circular order with mode ODEs
  initialized directly from the data, justified vector-IVP uniqueness by
  embedding vectors into the cited matrix IVP, and explicitly constructed and
  verified the Fourier-series candidate. The integration-by-parts decay and
  uniform convergence argument is now stated at the point of use. The proof
  contract's step 1.1 derivation was updated. The item has no stale
  `verification.judge` record.

- In `ex-csm-frontier-distinct-scaling-limits`, the heat-limit claim omitted the
  supplier theorem's nonnegativity, well-prepared initial data, positive
  parameters, and `AC_ω` premise. I stated these conditions and changed the
  final scope sentence to say that the comparison makes no cross-family
  implication claim. I updated its step 2.1 proof-contract derivation. Its
  conservation and collision calculations are otherwise valid under the stated
  model definitions and admissible-trajectory conditions.

- In the assigned A page, I qualified the summary by `AC_ω` and the heat-limit
  data hypotheses. The B page is outside the prose write scope; its unresolved
  summary concern is recorded below and in the findings JSON.

## Source checks

- Thomas Hillen and Amanda Swan, [*The Diffusion Limit of Transport Equations
  in Biology*](https://www.math.ualberta.ca/~thillen/paper/HillenSwan12withStyle.pdf),
  §2.1, equations (8)–(13), gives the Goldstein–Kac equations, density/flux
  identities, and telegraph equation; §2.2 gives periodic boundary conditions.
  Equations (8)–(9) distinguish the per-direction rate convention from the
  total direction-change rate. Sections 4.1–4.2 and equations (21)–(25) give a
  formal scaling/Hilbert-expansion argument; the source labels this a formal
  diffusion limit. The local heat-limit proof does not rely on that formal
  argument.
- Thomas Hillen and Hans G. Othmer, [*The Diffusion Limit of Transport
  Equations Derived from Velocity-Jump Processes*](https://www-users.cse.umn.edu/~othmer/papers/hill1.pdf),
  §1, equations (1.2)–(1.4), states the two-velocity equations and density/flux
  system. Its diffusion limit discussion is formal there; §4, Theorem 4.1,
  proves a different expansion estimate under (T1)–(T4), with its own domain,
  regularity, and initial-time conditions. The batch's exact periodic result
  is supplied by its local proof, not imported from that theorem.
- Isabelle Gallagher, Laure Saint-Raymond, and Benjamin Texier, [*From Newton
  to Boltzmann: Hard Spheres and Short-Range Potentials*](https://arxiv.org/pdf/1208.5753),
  Chapter 1, equations (1.0.1)–(1.0.2), gives free flight and elastic reflection
  and notes that global dynamics is not immediate. Its Boltzmann–Grad
  convention uses (N\varepsilon^{d-1}=1); the assigned definition uses a
  general fixed positive dimensionless constant and correctly makes no
  convergence claim.
- The Codling–Plank–Benhamou PMC page
  (https://pmc.ncbi.nlm.nih.gov/articles/PMC2504494/) triggered access
  protection. PubMed/PMC search metadata confirmed the article title and
  abstract, but I could not read cited §§2.7–2.8. No scoped proof depends on
  that source; this retrieval limit remains a coverage limitation.

## Uneditable finding

The B-page summary at `csm-frontier-kinetic-scaling-examples`, paragraph 2,
sentence 3, says “the three limit theorems.” The page's example dependency
closure contains a heat-limit theorem and model/scaling definitions; its
mean-field prerequisite page states mean-field limit results, while the
collision-transport prerequisite page explicitly disclaims a hard-sphere
Boltzmann–Grad derivation and general hydrodynamic limit. The assigned
hard-sphere scaling definition also disclaims convergence to Boltzmann. The
summary does not identify a third theorem or state its hypotheses. This may be
an imprecise reference to external results, but it is not established by the
page's declared suppliers. The B-page prose is not editable in this assignment;
the finding asks the owner to name the exact third result and its conditions or
revise the phrase to describe three prescriptions.

## Page verdicts

- `csm-frontier-kinetic-scaling`: pass after the A-page summary qualification
  edit. The scaling definitions and local well-posedness, positivity,
  conservation, contraction, and heat-limit proofs are sound under their
  stated mathematical hypotheses.
- `csm-frontier-kinetic-scaling-examples`: item proof passes after the
  hypothesis and scope repairs. The B-page summary concern above remains
  unresolved and is routed for owner disposition.

## Validation and blocker

- `reflow.mts` reported unchanged for all three changed items.
- `precheck.mts` passed for the contraction lemma and comparison example; the
  changed definition had zero proof steps to check and no failures.
- The required final `proof-layout.mjs` run on all three changed item paths
  reported 3 items, 11 steps, 0 defects.
- No stale judge records were present on the changed items. No blocker remains
  within the assigned item/A-page write scope.

Coverage limitation: direct mathematical suppliers and the exact claims used
from them were reviewed; this was not a full re-audit of their transitive
published mathematical dependency closures. The Codling article's cited
sections could not be read because of source access protection.

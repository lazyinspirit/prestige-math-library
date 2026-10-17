# Step 3a reader report — batch 55

Run: `physics-remaining-80-2026-10-17`  
Batch: `55`  
Role: read-only reader

## Inventory opened

Assigned pages:

- `library/thermodynamics-and-general-relativity-mathematics/tgr-mc02.md` (A page)
- `library/thermodynamics-and-general-relativity-mathematics/tgr-mc02-examples.md` (B page)

Assigned items, read in dependency order:

- `items/lem-tgr-perfect-fluid-projection.md`
- `items/lem-tgr-carter-circulation.md`
- `items/lem-tgr-dissipative-entropy-identity.md`
- `items/lem-tgr-first-order-model-limits.md`
- `items/ex-tgrmath-null-landau-obstruction.md`

Relevant dependency carriers opened:

- `items/def-tgr-local-fluid-state.md` (current-run batch 53)
- `items/lem-tgr-local-gibbs-euler.md` (current-run batch 53)
- `items/lem-tgr-fluid-frame-projection.md` (current-run batch 53)
- `items/def-gr-smooth-lorentzian-objects.md`
- `items/thm-gr-nondegenerate-levi-civita-and-tensor-derivative.md`
- `items/def-countable-choice.md`
- `items/lem-tdmath-local-contraction-flow.md`
- `items/lem-tdmath-variational-flow-and-commutation.md`
- `items/def-heat-kernel.md`
- `items/lem-heat-kernel-normalisation-scaling-and-derivatives.md`
- `items/thm-heat-cauchy-solution-for-bounded-continuous-data.md`

I inspected the batch-55 proof-contract records for all five assigned items and the assigned-consumer rows of `research/physics-remaining-80-2026-10-17-batch-55.cross-batch-dependencies.json`. Contracts and workflow statuses were treated as evidence rather than mathematical verdicts.

## Mathematical and source review

- `lem-tgr-perfect-fluid-projection`: The divergence expansion, energy and spatial projections, converse reconstruction from orthogonal and parallel projections, and the particle/entropy identities follow from the stated connection, state, Gibbs, and balance hypotheses. The entropy conclusions remain conditional on both balances and the stated positive state variables.
- `lem-tgr-carter-circulation`: The thermodynamic differential and Euler projection yield the stated one-form identity after using `D sigma_p = 0`. The local-flow and line-integral differentiation argument gives the stated circulation derivative; conservation is restricted to the stated spatially constant entropy condition.
- `lem-tgr-dissipative-entropy-identity`: The energy projection and particle balance produce the intermediate entropy divergence, and the heat and diffusion divergence terms cancel with the stated signs. The result is an identity for the supplied fields and does not establish a constitutive law or an evolution solution.
- `lem-tgr-first-order-model-limits`: The four constitutive substitutions give nonnegative rest-space quadratic terms. In the supported fixed-rest branch, the component balances reduce to the heat equation, and the positive Gaussian convolution has the stated initial trace, state-interval bound, and noncompact support for every positive time. The homogeneous linearization yields the stated growing mode with positive rate. These are conditional deductions from the displayed equations, not empirical claims about nature.
- `ex-tgrmath-null-landau-obstruction`: For every future unit timelike candidate, the contraction with the chosen null vector is nonzero; the zero-flux decomposition would equate a nonzero null vector with a timelike vector. The contradiction is valid for the explicit tensor.

I consulted the relevant cited passages of Éric Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, arXiv:gr-qc/0603009v1: §4.3, §§5.2–5.4, §§6.1–6.3, and §7.5 (https://arxiv.org/pdf/gr-qc/0603009). They support the recorded perfect-fluid, thermodynamic, and restricted circulation context. I also consulted the relevant passages of Paul Romatschke, *Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy*, arXiv:0906.4787v2, §3 and §§4–4.1 (https://arxiv.org/pdf/0906.4787); the recorded use is appropriately limited to frame/constitutive context, including its conformal zero-charge scope. The assigned proofs supply the local calculations themselves. These are mathematical items with no reported observations or statistical inference.

## Edits and uneditable defects

No item or page prose was edited. This is a read-only reader assignment. I found no confirmed or suspected mathematical defect requiring routing, so the findings array is empty.

## Page verdicts

- `tgr-mc02`: No defect found in the page summary or its four assigned conditional mathematical claims. The current-run batch-53 state and Gibbs suppliers remain draft prerequisites, so these consumer conclusions are conditional on those supplier interfaces and their workflow readiness.
- `tgr-mc02-examples`: No defect found in the example-page summary or its assigned null-tensor example. Its frame-decomposition prerequisite remains conditional on the current batch-53 draft supplier.

## Blocker / limitation

The batch-55 cross-batch dependency file still has `open` rows for the current-run batch-53 suppliers `def-tgr-local-fluid-state`, `lem-tgr-local-gibbs-euler`, and `lem-tgr-fluid-frame-projection`, and for consumers inheriting those edges. Its evidence cites stale Step-1 readiness hashes. I inspected the current supplier statements and relevant proofs, but this reader report does not resolve or recertify those readiness records. No separate mathematical gap remained in the assigned claims as conditional statements.

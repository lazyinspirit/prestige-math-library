# Batch 3 — Nonlinear equations and Newton methods

## Inventory and dependency levels

The current plan-spec and batch-3 scaffold both began with empty `items` arrays. The assigned A/B pair has ten A-page items and one B-page example; the finished inventory and each direct item dependency are in `numerical-optimization-dynamics-2026-10-16-batch-3.pages.json`. Recomputed in-run item levels are 0 for fixed-point iteration, Newton correction, forward-difference Jacobian, and the vector Newton remainder lemma; 1 for finite-difference error, exact Newton, and damped Newton; 2 for finite-difference Newton, the local Newton theorem, and damped accepted-merit theorem; and 3 for the B-page example. Batch 3 itself remains level 0 with no in-run batch prerequisites, as declared by the batch dependency-level input. `batch-3.cross-batch-dependencies.json` is explicitly empty.

## Controlling design and conflicts

The controlling contract is current `research/plan-numerical-optimization-track.md`, pair NA-09 at L47, together with its incorporated `contract-na-09` in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md` and the owner-accepted E2 repair. This is the assigned category plan, and the owner direction says the accepted repair controls current category plans and exact interfaces. The owner acceptance repairs planning only; it accepts no local proof or source reading.

The complete earlier section at `research/plan-numerical-analysis-track.md` L130 is preserved for its fixed-point, damped, finite-difference, and four example promises. Its ordinary Newton hypothesis says $F\in C^3$ with an invertible Jacobian in a neighborhood. The current controlling NA-09 contract instead states $F\in C^2$, a simple root, a Lipschitz-Jacobian ball, and a uniform inverse-Jacobian bound. The authored theorem proves this current, quantitatively explicit contract; it does not add a $C^3$ assumption. It derives the uniform inverse bound from the actual published frozen-inverse lemma and proves the updated-Jacobian recurrence independently. This resolves the conflict in favor of the current plan while retaining the older examples and no-global-start warning.

The current plan-spec entry preserves the same A/B identities, category, five page-level navigation requirements, and incremental general-vector-root/finite-difference/local-quadratic scope; it supplies no item inventory, so no item-level conflict was present. The page-level `picard-lindelof-and-first-order-odes` requirement is not a logical supplier for any authored claim: no shooting residual is asserted. A future shooting application must verify its exact ODE interface locally.

## Supplier interface audit

- Read the actual statements and proofs of `thm-banach-fixed-point` and `cor-banach-error-estimates`; the example uses them only for a complete metric space and a contraction, not for Newton convergence.
- Read `lem-newton-contraction-near-an-invertible-derivative` in full. It proves a contraction for $T_y(x)=x+B(y-F(x))$ with fixed $B=DF(a)^{-1}$ and separately gives local invertibility and a uniform inverse bound for $DF(x)$. The local Newton theorem uses only the latter clause. The frozen-versus-updated example computes the distinct maps and claims no frozen-map convergence.
- Read `alg-damped-newton` and `thm-newton-local-quadratic-convergence-under-lipschitz-hessian` in full. They concern scalar objective Newton with a positive-definite Hessian, positive decrement tolerance, and a pre-update stop. They are not copied to arbitrary vector roots. The A-page summary directs $F=\nabla f$ to the canonical method only on that branch.
- Read `thm-multivariable-taylor-formula-with-lagrange-remainder` in full. The finite-difference proof applies it separately to each scalar output along a one-dimensional coordinate path and permits distinct remainder points $\theta_{ij}$; it does not assume one common vector remainder point.
- Read the vector-valued FTC, vector integral norm, integral linearity/monotonicity, chain rule, continuous-integrability, and Newton–Leibniz supplier statements and proofs used by the local remainder lemma. Their hypotheses cover the componentwise continuous derivative along the segment, the norm estimate, and $\int_0^1(1-t)dt=1/2$.
- All actual published items directly used are present and published. No in-run prerequisite pair is owned by another batch, and no supplier remains unresolved.

## Source reading and retrieval history

Two independent treatments were read for the A page: the complete relevant sections of Hairer–Wanner, Chapter VI (§VI.1 and §VI.3), and the complete versioned FNC Chapter 4.5.2 page. URLs, locators, harvested items, and dispositions are in `numerical-optimization-dynamics-2026-10-16-batch-3.coverage.json`; full-text fetch stamps are written there by `source-fetch-check --stamp`.

The assigned FNC GitHub tree and three pinned raw-file browser routes returned internal errors. Three web searches found the official full-text versioned FNC page; its complete relevant content was opened and read. The pinned GitHub files are recorded as unretrieved, not as read. The selected FNC page and Hairer PDF still provide two independent treatments. The source history remains in the coverage file; no source is marked dropped and no unread source passage is used as a proof supplier.

## Mathematical limits

The exact Newton theorem claims only local convergence for the updated Jacobian. It proves the quadratic correction estimate and an invariant ball explicitly; it makes no arbitrary-start, global, damped-rate, finite-difference-rate, floating-point, or discretization-accuracy claim. The finite-difference result bounds the Jacobian approximation under stated segment and second-partial bounds but does not transfer the exact Newton rate. The damped theorem proves only strict merit decrease for an accepted trial; finite backtrack exhaustion remains an explicit status.

## Scoped validation and handoff

The 11-item manifest/carrier comparison passed: page membership, direct `deps`, and `dependency_level` agree, and the batch-local dependency graph has levels 0:4, 1:3, 2:3, and 3:1 with no cycle or label errors. `manifest-deps` checked all 11 entries. Focused `depcheck`, `fwdcheck`, `extcheck`, and `citecheck` passed; authored-item `content-policy` reported 11 items with no errors or warnings. The coverage checklist found one A page and 10 harvested results with no errors or warnings, and `source-fetch-check` verified both full-text stamps.

The five proof-bearing items passed strict proof-contract validation (5/5, no warnings), phase precheck (5 checked, none failing), and explicit `proof-layout` (5 items, 19 steps, no defects). `rendercheck` passed all 11 item files and both pages using the renderer's KaTeX and YAML parser. Readiness records are `ready` for all 11 items and bind their declared dependencies.

Run-wide closure remains with the owner because other pairs are still being authored. The full item-level checker reports empty inventories in other pair manifests (for example, `computed-fast-transforms-and-convolution`); the focused batch-3 graph check passes. Full-run proof-contract coverage stopped at the missing frontier carrier `thm-reaction-counts-have-compensators-brackets-and-isometry`, which is outside this pair. The run-wide batch-dependency checker could not read another pair's current supplier carrier: YAML parsing failed at its unquoted `locator` value (`§§8.1–8.2`, line 16, column 16). No shared scheduling receipt or other pair file was edited; the owner should reconcile those run-wide inputs and recompute the aggregate dependency-level receipt after all manifests are stable. A first content-policy/extcheck scan also overlapped a supplier-file replacement and failed to read `thm-density-scaled-chemical-langevin-model-error.md`; sequential scoped reruns passed.

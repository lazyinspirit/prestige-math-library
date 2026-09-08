# Step 6a independent reader report — batch 10

Date: 2026-09-08  
Reader: `reader-10`  
Disposition: no repair and no uneditable finding.

## Opened scope

I read the live batch manifest
`research/phase-2-wave-1-batch-10.pages.json`, all four live page files, all
44 assigned item files, and all 44 entries in
`research/phase-2-wave-1-batch-10.proof-contracts.json`. The assigned page
and item inventory was:

- A `analytic-majorants-and-the-cauchy-kovalevskaya-theorem`: 15 items,
  from `def-real-analytic-germ-in-several-variables` through
  `rem-cauchy-kovalevskaya-is-an-analytic-not-smooth-well-posedness-theorem`.
- B `analytic-majorants-and-the-cauchy-kovalevskaya-theorem-examples`: 7
  items, from `ex-majorising-a-two-variable-analytic-germ-by-a-geometric-series`
  through `cex-analytic-elliptic-cauchy-solutions-lack-smooth-continuous-dependence`.
- A `euclidean-surface-measure-divergence-and-green-identities`: 16 items,
  from `def-bounded-c-one-domain-boundary-charts-and-outward-normal` through
  `rem-euclidean-divergence-versus-classical-and-manifold-stokes`.
- B `euclidean-surface-measure-divergence-and-green-identities-examples`: 6
  items, from `ex-surface-density-and-outward-normal-on-a-graph` through
  `ex-punctured-domains-and-truncated-cones-with-explicit-faces`.

I also opened the current statements/interfaces of the 56 direct external
dependencies. This included the analytic-series, inverse-function,
characteristic-symbol, elementary-calculus, measure-theory, Radon-uniqueness,
Fubini/FTC, Gram/determinant, cutoff-cover, divergence, and polar-coordinate
suppliers named in the item front matter. I checked the dependency statements
against each load-bearing use rather than treating a contract citation as proof.

For source verification I independently opened the current source PDFs at the
claimed ranges: Gantumur, *Math 580 Lecture Notes 2*, §§1--5 (especially the
majorant/ODE and CK passages); Ageno, *Analysis of PDE*, §§2.3--2.4.1;
Hunter, §§1.10--1.12 and §2.5; and Oh, §3.9. The local proofs correctly retain
the stronger qualifications where those sources only state an outline or a
broader theorem.

## Mathematical review

The analytic page correctly separates formal normal recursion from convergence.
The coefficient conventions, positive majorant construction, quadratic
Goursat branch, first-order jet reduction, selected implicit branch, and
normal-data compatibility preserve their hypotheses. The heat and
characteristic counterexamples have the correct symbol directions and boundary
cases; the Hadamard sequence really tends to zero in every fixed compact
smooth-data seminorm while its positive-time values diverge.

The surface page uses Borel—not completed-measurable—change of variables. Its
proof establishes the compact-support Riemann/Lebesgue bridge, compact-finite
Radon pullback measures, equality through continuous compactly supported test
functions, and monotone simple approximation. The graph-flux, finite
partition, null-edge cutoff, and finite-face limiting arguments preserve the
finite-presentation and continuous-interior-derivative assumptions. The
examples have the stated normals, signs, sphere scaling, cap/side cancellation,
and conical-tip estimates, including the $d=1$ two-ray case.

## Per-page verdicts

| Page | Verdict |
| --- | --- |
| `analytic-majorants-and-the-cauchy-kovalevskaya-theorem` (A) | Pass: title, summary, item order, statements, proofs, contracts, and hypothesis boundaries are sound. |
| `analytic-majorants-and-the-cauchy-kovalevskaya-theorem-examples` (B) | Pass: each example/counterexample is correctly scoped and calculated. |
| `euclidean-surface-measure-divergence-and-green-identities` (A) | Pass: definitions, Borel substitution route, finite-face theorem, and Green consequences are sound under their declared conventions. |
| `euclidean-surface-measure-divergence-and-green-identities-examples` (B) | Pass: all witnesses and boundary/orientation computations are sound. |

## Edits, checks, and blockers

No assigned item or A-page prose was edited. Consequently there is no changed
item requiring reflow or a stale `verification.judge` removal.

Focused current-file checks:

- `node tools/tsx-run.mjs tools/precheck.mts` on all 44 item paths: 36
  proof-bearing items checked, all passed.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-10.proof-contracts.json --strict`:
  44/44 items, zero errors and warnings.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-10.pages.json`:
  44 scoped items, zero errors and warnings.

`tools/reflow.mjs` is not present in this checkout, but no content item changed,
so no item reflow obligation was triggered. This is a tooling observation, not
a mathematical or batch blocker.

There are no confirmed uneditable defects and no remaining batch-10 blocker.

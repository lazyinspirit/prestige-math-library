# Step 3a reader report — batch 23

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: `reader-23`  
Review date: 2026-10-23

## Opened inventory

Assigned pages:

- `fd-w03` — `library/fluid-dynamics-mathematics/fd-w03.md`, draft mathematics page. It lists the eight assigned A-items and requires `cm-math-continuum` and `distributions-test-functions-and-differentiation`.
- `fd-w03-examples` — `library/fluid-dynamics-mathematics/fd-w03-examples.md`, draft mathematics page. It lists four assigned examples/counterexamples and requires `fd-w03`.

Both page bodies are empty and their inventories, page IDs, category, library classification, and companion relation match the batch manifest. The read-only prerequisite pages inspected were `library/non-relativistic-classical-mechanics-mathematics/cm-math-continuum.md` and the root mathematics page `../library/functional-analysis/distributions-test-functions-and-differentiation.md`.

Assigned items, in declared dependency-level order:

| Level | Items |
|---:|---|
| 0 | `lem-fd-locally-integrable-functions-define-distributions` |
| 1 | `def-fd-conservation-system` |
| 2 | `def-fd-piecewise-traces`, `def-fd-lax-pattern`, `prop-fd-viscous-entropy-passage` |
| 3 | `thm-fd-rankine-hugoniot`, `cex-fd-shock-point-values` |
| 4 | `prop-fd-entropy-jump` |
| 5 | `thm-fd-convex-scalar-riemann` |
| 6 | `ex-fd-burgers-shock`, `ex-fd-burgers-fan`, `cex-fd-expansion-shock` |

I opened all 12 assigned item carriers. Direct off-batch item suppliers opened for the assigned arguments were `def-regular-distribution-from-a-locally-integrable-function`, `lem-test-function-lf-topology-universal-property`, `def-distributional-derivative`, `thm-chain-rule-for-total-derivatives`, `def-countable-choice`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `def-integral-of-a-nonnegative-simple-function`, `def-nonnegative-lebesgue-integral`, `def-integrable-real-and-complex-functions-and-their-integrals`, `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null`, `cor-mean-value-theorem`, `thm-ftc-second-part`, and `thm-cm-burgers-riemann-shock-and-rarefaction`. I also opened the fixed-support test-function topology inputs and the scalar conservation-law and divergence-theorem suppliers used by the published Burgers theorem. The required cross-batch dependency file is empty. No assigned item contains a TikZ or tikzcd diagram.

## Mathematical review

- The locally integrable distribution lemma follows from the regular-functional estimate on each fixed support and the LF universal property. The fixed-support topology includes the zeroth supremum seminorm used in the estimate.
- The conservation-system definition specifies the state and flux spaces, local integrability, distributional sign convention, initial test trace, entropy-pair compatibility, and entropy-inequality sign. The piecewise-trace definition limits traces to the stated local (C^1) extensions; it does not assert traces for arbitrary weak fields.
- The Rankine–Hugoniot calculation uses an invertible normal-coordinate map of determinant one, the stated linear change-of-variables result and Fubini, then one-dimensional integration by parts. Its residual sign is [F] projected against the normal minus (s[U]). Continuity of the traces justifies the pointwise interface criterion. The entropy residual has the corresponding coefficient [q] projected against the normal minus (s[\eta]); the nonpositive sign agrees with the defined entropy convention.
- The Lax item is a definition and does not claim existence or uniqueness. The scalar Riemann proof establishes the inverse-fan regularity under (F''>0), the initial trace by local (L^1) estimates, and the convex and Kružkov entropy signs for the exact profiles. The Burgers examples specialize these results; the expansion-shock residual is ((b-a)^3/12>0), while the centered fan gives a distinct entropy-admissible profile. The point-value counterexample correctly uses nullity of the spacetime interface to preserve distributions and uses the piecewise definition to preserve side traces.
- The viscous-limit proposition is conditional and does not assert existence or compactness of a viscous family. Its chain-rule identity gives the nonpositive diffusion remainder, and strong local convergence passes the tested inequality to the limit.

The cited contextual sources were checked at the relevant sections: Dafermos, *Hyperbolic Conservation Laws in Continuum Physics*, Ch. III §§3.1–3.2, Ch. IV §§4.3–4.6, and Ch. VIII §8.3 ([PDF](https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf)); Evans, *Entropy and Partial Differential Equations*, Ch. V §§2–3 ([PDF](https://math.berkeley.edu/~evans/entropy.and.PDE.pdf)); and Gwiazda, Michálek, and Świerczewska-Gwiazda, §1 ([arXiv PDF](https://arxiv.org/pdf/1706.10154)). These sources support the conventions and context; the local profiles and estimates are checked from the authored arguments. No empirical or physical conclusion is asserted by this mathematics batch.

## Repairs and validation

1. `prop-fd-viscous-entropy-passage`: the original proof used a common bound on (u_0^\epsilon) and (u_0) to pass \(\eta(u_0^\epsilon)\) to the limit, but the statement only bounded the fields almost everywhere on the open spacetime domain. I made the scalar domains explicit and defined the strong (L^1_{\mathrm{loc}}) convergence used in the statement. In proof step 3.1, continuity up to (t=0) now derives \(|u_0^\epsilon|\leq M\); strong initial convergence gives the same bound for (u_0), using a countable compact exhaustion of (\Omega). I updated the corresponding derivation, finite check, and endpoint record in `research/fluid-dynamics-all-47-2026-10-23-batch-23.proof-contracts.json`. No current item consumer of this proposition was found. The item had no `verification.judge` record to remove.

2. `thm-fd-convex-scalar-riemann`: moved the definition of (C_c^\infty([0,T)\times\mathbb R)) before its first use in the Statement. The mathematical claim and proof are unchanged. The item had no `verification.judge` record to remove.

Reflow reported both edited items unchanged. Precheck passed for both items. The final combined proof-layout check reported 2 items, 14 numbered steps, and 0 defects. The updated batch proof-contract JSON parsed successfully; all nine proof-bearing assigned items have contract step maps covering their current numbered steps exactly once.

## Uneditable findings

Eleven read-only published dependencies have hyperlinks embedded inside their complete Definition or Statement sections, contrary to the uninterrupted-statement rule. They are recorded in the findings JSON with their assigned consumers: `def-regular-distribution-from-a-locally-integrable-function`, `def-test-function-space-d-of-an-open-set`, `def-test-function-topology`, and `def-fixed-support-test-function-frechet-space` via `lem-fd-locally-integrable-functions-define-distributions`; `def-distributional-derivative` via `def-fd-conservation-system`; `thm-linear-change-of-variables-for-lebesgue-measure` via `thm-fd-rankine-hugoniot`; `thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null` via `cex-fd-shock-point-values`; and `def-cm-scalar-conservation-law-weak-and-entropy-solution`, `def-bounded-piecewise-c-one-euclidean-domain`, `def-surface-integral-on-a-compact-c-one-hypersurface`, and `thm-cm-burgers-riemann-shock-and-rarefaction` via `ex-fd-burgers-shock`. Their meanings were not changed or treated as mathematically insufficient on account of these presentation defects.

## Page verdicts and blocker

- `fd-w03`: pass. The A-page is frontmatter-only with the declared eight-item inventory and required pages.
- `fd-w03-examples`: pass. The B-page is frontmatter-only with the declared four examples/counterexamples and correct A-page prerequisite.
- No batch-local mathematical blocker remains. The published-supplier presentation findings remain outside this batch's write scope.

## Coverage limitation

The dependency graph reachable from the 12 assigned items contains 952 item carriers. I read all assigned carriers and their direct off-batch suppliers, plus selected transitive inputs needed to check the distribution and published Burgers arguments; I did not read every deeper item in that transitive closure. Also, the first three assigned carriers were opened during inventory before their direct suppliers; I read the relevant suppliers before completing the mathematical checks, but do not claim a strictly supplier-first file-opening sequence for that initial inventory. I did not locate a separate rendered evidence bundle among the scoped batch artifacts. No finding above relies on an item I did not open.

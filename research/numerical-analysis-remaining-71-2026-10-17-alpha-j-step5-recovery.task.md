# Step 5 adjudication — group **j**, run `numerical-analysis-remaining-71-2026-10-17`

You are the group Alpha for batches 28, 29, 30: 3 A/B pair(s), 6 page(s), 52 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **28**: `research/numerical-analysis-remaining-71-2026-10-17-batch-28-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **29**: `research/numerical-analysis-remaining-71-2026-10-17-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/numerical-analysis-remaining-71-2026-10-17-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/numerical-analysis-remaining-71-2026-10-17-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 28 | `conservative-finite-volume-weak-limits` | A | numerical-pdes-and-spatial-discretization | 2610 | `scalar-conservation-laws-and-entropy-solutions` |
| 28 | `conservative-finite-volume-weak-limits-examples` | B | numerical-pdes-and-spatial-discretization | 2611 | `conservative-finite-volume-weak-limits` |
| 29 | `monotone-finite-volume-entropy-convergence` | A | numerical-pdes-and-spatial-discretization | 2612 | `conservative-finite-volume-weak-limits` |
| 29 | `monotone-finite-volume-entropy-convergence-examples` | B | numerical-pdes-and-spatial-discretization | 2613 | `monotone-finite-volume-entropy-convergence` |
| 30 | `riemann-solvers-for-hyperbolic-systems` | A | numerical-pdes-and-spatial-discretization | 2614 | `nonlinear-equations-and-newton-methods`, `periodic-orbit-shooting-collocation-and-floquet-error` |
| 30 | `riemann-solvers-for-hyperbolic-systems-examples` | B | numerical-pdes-and-spatial-discretization | 2615 | `riemann-solvers-for-hyperbolic-systems` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `conservative-finite-volume-weak-limits` — Conservative finite-volume weak limits (8 item(s))

- `def-locally-bounded-distributional-weak-solution` · definition — Locally bounded distributional weak solutions of scalar laws
- `def-conservative-finite-volume-scheme` · definition — Conservative two-point finite-volume schemes for scalar laws
- `def-finite-volume-space-time-reconstruction` · definition — Piecewise-constant finite-volume state and face-flux reconstructions
- `def-godunov-flux-for-burgers` · definition — Godunov numerical flux for Burgers' equation
- `lem-godunov-flux-for-burgers-is-continuous-and-consistent` · lemma — The Burgers Godunov flux is continuous and consistent
- `lem-finite-volume-discrete-summation-by-parts` · lemma — Discrete weak identity for a conservative finite-volume update
- `lem-conservative-fv-face-fluxes-converge-in-l1loc` · lemma — Strong local convergence of consistent finite-volume face fluxes
- `thm-conservative-finite-volume-weak-limit` · theorem — Conservative finite-volume strong-limit theorem

### `conservative-finite-volume-weak-limits-examples` — Conservative finite-volume weak limits — Examples (3 item(s))

- `ex-godunov-fv-captures-burgers-shock-speed` · example — Godunov finite volumes preserve the Burgers shock speed
- `ex-bounded-fv-reconstructions-need-not-be-strongly-compact` · example — Uniformly bounded cell reconstructions need not have a strong local limit
- `cex-conservative-fv-weak-limit-need-not-be-entropic` · counterexample — A conservative consistent finite-volume weak limit need not be entropic

### `monotone-finite-volume-entropy-convergence` — Monotone finite-volume entropy convergence (7 item(s))

- `def-bounded-bv-data-on-line` · definition — Bounded BV data on the real line
- `def-monotone-finite-volume-entropy-scheme` · definition — Monotone finite-volume scheme and invariant-interval CFL
- `def-piecewise-linear-fv-time-interpolant` · definition — Piecewise-linear time interpolant of a finite-volume scheme
- `lem-monotone-fv-update-preserves-range-and-tvd` · lemma — Invariant range, TVD and time increments for a monotone finite-volume update
- `lem-monotone-fv-discrete-kruzhkov-inequality` · lemma — Discrete Kruzhkov inequality for a monotone finite-volume scheme
- `lem-monotone-fv-local-compactness-and-trace` · lemma — Local compactness and initial trace for BV finite-volume states
- `thm-monotone-finite-volume-entropy-convergence` · theorem — Strong entropy convergence of monotone finite-volume schemes

### `monotone-finite-volume-entropy-convergence-examples` — Monotone finite-volume entropy convergence — Examples (4 item(s))

- `cex-nonmonotone-fv-scheme-selects-expansion-shock` · counterexample — A consistent nonmonotone flux selects a nonentropy expansion shock
- `ex-godunov-fv-monotone-under-cfl` · example — Burgers Godunov flux under the invariant-interval CFL bound
- `ex-lax-friedrichs-fv-monotone-under-cfl` · example — Lax–Friedrichs flux under the invariant-interval CFL bound
- `ex-godunov-fv-captures-stationary-burgers-shock` · example — Godunov scheme captures a stationary Burgers entropy shock

### `riemann-solvers-for-hyperbolic-systems` — Riemann solvers for hyperbolic systems (25 item(s))

- `def-hyperbolic-system-and-characteristic-families` · definition — Strictly hyperbolic conservation systems and characteristic families
- `def-rankine-hugoniot-and-lax-shocks` · definition — Rankine–Hugoniot jumps and Lax shocks
- `lem-smooth-simple-characteristic-eigenpairs` · lemma — Smooth local eigenpairs for a simple characteristic spectrum
- `def-ideal-gas-euler-state-and-pressure` · definition — Admissible states and pressure for one-dimensional ideal-gas Euler
- `def-roe-linearization-and-flux` · definition — Roe linearization and Roe numerical flux
- `def-hll-two-wave-flux` · definition — HLL two-wave approximate flux
- `def-scalar-convex-entropy-admissibility` · definition — Convex entropy admissibility for a scalar conservation law
- `def-local-rarefaction-curve` · definition — Local characteristic rarefaction curve
- `lem-rankine-hugoniot-jump-is-a-weak-solution` · lemma — A moving jump is a weak solution exactly under Rankine–Hugoniot
- `lem-local-characteristic-shock-curve` · lemma — Local shock curve by an augmented Rankine–Hugoniot equation
- `thm-one-dimensional-ideal-gas-euler-eigenstructure` · theorem — Eigenstructure of the admissible ideal-gas Euler system
- `def-euler-star-pressure-response` · definition — Ideal-gas rarefaction and shock pressure response
- `thm-roe-flux-is-consistent-and-conservative` · theorem — The Roe flux is consistent and conservative
- `thm-hll-flux-is-consistent-and-conservative` · theorem — The HLL flux follows from the conservative two-wave model
- `lem-euler-acoustic-wave-pressure-response` · lemma — Ideal-gas acoustic wave curves have the stated pressure response
- `lem-local-rarefaction-fan` · lemma — A local genuinely nonlinear curve generates a centered rarefaction fan
- `lem-linearly-degenerate-characteristic-contact` · lemma — A linearly-degenerate characteristic curve is a contact wave
- `thm-euler-star-pressure-root-and-vacuum-criterion` · theorem — The ideal-gas star-pressure root exists uniquely exactly below vacuum threshold
- `def-mixed-characteristic-wave-curve` · definition — Mixed local wave curve for a genuinely nonlinear or linearly degenerate family
- `alg-safeguarded-euler-star-pressure-solver` · algorithm — Finite-budget safeguarded Newton–bisection for Euler star pressure
- `lem-mixed-wave-curves-are-c1` · lemma — Mixed shock–rarefaction wave curves are continuously differentiable
- `lem-euler-pressure-solver-bracket-and-termination` · lemma — The safeguarded Euler pressure solver preserves its root bracket and terminates
- `thm-local-small-data-riemann-solver` · theorem — Local small-data Riemann solver near a strictly hyperbolic state
- `def-godunov-flux-from-a-local-riemann-solver` · definition — Godunov flux from the local Riemann solution
- `thm-godunov-flux-is-consistent-and-conservative` · theorem — The local Godunov flux is consistent and conservative

### `riemann-solvers-for-hyperbolic-systems-examples` — Riemann solvers for hyperbolic systems — Examples (5 item(s))

- `cex-roe-jump-property-does-not-imply-entropy-admissibility` · counterexample — A Roe jump property does not imply entropy admissibility
- `ex-ideal-gas-contact-discontinuity` · example — A contact discontinuity with equal velocity and pressure
- `ex-euler-vacuum-threshold-boundary` · example — Euler vacuum detection at and above the pressure-root threshold
- `ex-sod-tube-pressure-root` · example — Sod tube: a unique star-pressure root between the initial pressures
- `ex-acoustic-system-local-riemann-solution` · example — An acoustic system resolved into two characteristic waves

## Your seams

Another group's pages depend on yours:

- `high-resolution-tvd-eno-and-weno-methods` (group k) requires your `monotone-finite-volume-entropy-convergence`
- `high-resolution-tvd-eno-and-weno-methods` (group k) requires your `riemann-solvers-for-hyperbolic-systems`
- `finite-volume-diffusion-and-mimetic-fluxes` (group o) requires your `conservative-finite-volume-weak-limits`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/numerical-analysis-remaining-71-2026-10-17-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `numerical-analysis-remaining-71-2026-10-17`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

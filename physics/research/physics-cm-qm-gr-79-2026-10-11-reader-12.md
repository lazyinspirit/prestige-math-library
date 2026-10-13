# Step 3a reader report — batch 12

Run: physics-cm-qm-gr-79-2026-10-11  
Role: reader  
Date: 2026-10-13

## Opened inventory

Pages:

- A page: library/non-relativistic-classical-mechanics-mathematics/cm-math-verification.md
- B page: library/non-relativistic-classical-mechanics-mathematics/cm-math-verification-examples.md

Assigned items, read in dependency order:

- A page: def-cm-second-variation-of-the-action; lem-cm-second-variation-formula; prop-cm-oscillator-second-variation-signs; prop-cm-oscillator-boundary-value-nonuniqueness; def-cm-inertia-tensor-about-a-point; lem-cm-inertia-tensor-about-a-point-is-finite; thm-cm-parallel-axis-theorem; prop-cm-two-mass-spring-modes; prop-cm-pendulum-small-angle-linearization-bound; rem-cm-verification-scope-and-limits.
- B page: ex-cm-oscillator-saddle-second-variation-checks; ex-cm-oscillator-boundary-value-nonuniqueness-check; ex-cm-parallel-axis-two-point-masses; ex-cm-two-mass-modes-numerical-check; ex-cm-pendulum-linearization-error-check.

Dependency context opened included the in-run suppliers def-cm-time-dependent-lagrangian-and-action, lem-cm-first-variation-formula, thm-cm-stationarity-iff-euler-lagrange, def-cm-oscillator-model-and-phase-system, thm-cm-homogeneous-oscillator-solution-classification, prop-cm-oscillator-degenerate-and-repulsive-cases, thm-cm-finite-time-linearization-error-bound, cor-cm-variation-of-constants-for-linear-systems, def-cm-mass-distribution-and-inertia-matrix, and lem-cm-mass-moments-are-finite. I also checked the exact statements of the published calculus, trigonometric, Taylor-remainder, measure, matrix, norm, and ODE prerequisites used in the arguments.

I checked the batch manifest, page summaries, current item bodies, and the batch proof-contract inventory. Contracts and author notes were treated as evidence only. All fifteen assigned items and both assigned pages were opened. I did not re-audit every transitive proof of every published mathematical supplier.

## Review and repairs

The assigned mathematical arguments check out:

- The second-variation definition and Hessian integral formula use the fixed-endpoint family on the stated compact interval. The mixed terms are combined using equality of continuous mixed partials. The oscillator values, exact action identity, and both-sign conclusion follow from the displayed integrals and the Archimedean property.
- The oscillator Dirichlet solution family and initial-value comparison follow from the two-constant solution form and the stated zero set of sine. The action calculation in the B example is exact.
- The inertia tensor is finite under the stated bounded-support, finite-measure, and choice hypotheses. The parallel-axis expansion has the correct mass factor and its linear terms vanish by centredness. The two-point example agrees with both direct evaluation and the theorem.
- The two-mass eigenrelations and mode solutions are correct for the stated parameter ranges, including the zero-frequency affine mode. The concrete example checks the matrix products and derivatives correctly.
- The pendulum proposition verifies the cubic remainder, global Lipschitz constant, operator norm, and finite-time smallness condition before applying the linearization estimate. Its claim remains conditional and finite-time; no empirical assertion is made.

The second-variation source references support the fixed-endpoint first-variation context, not the local Hessian formula; the assigned lemma proves that formula locally and does not attribute it to Tong or Cline. Tong’s Section 2.1 note that stationary action need not be a minimum agrees with the cited printed page 12. Likharev’s Chapter 4, Section 4.2, equation (4.28), gives the cited centred parallel-axis identity. Sources: [Tong, Classical Dynamics, Section 2.1](https://davidtong.org/teaching/classical-dynamics/dynhtml/S2) and [Likharev, Essential Graduate Physics: Classical Mechanics](https://essentialgraduatephysics.org/Files/CM%20merged.pdf). The web tool could not open the cited Cline PDF in this session; no claim in the reviewed proofs depends on Cline as its mathematical proof.

No assigned item or A-page prose required repair. No item bytes were changed, so proof contracts, judge records, precheck, reflow, and proof-layout were not changed or rerun.

## Defects not editable in this assignment

1. B-page summary, opening paragraph: the final sentence says every number in the examples is an exact rational, polynomial, or explicit exponential expression. The examples use exact constants such as √2, √7, π, and multiples of π. The sentence does not define a variable or coefficient ring that would make the listed expression classes include these constants. The examples are exact, but the summary’s stated classification is incomplete. The B page is outside the prose-repair permission. Finding recorded for page cm-math-verification-examples as a nonfatal false claim.

2. In-run supplier def-cm-oscillator-model-and-phase-system, batch 7: its Definition permits any interval I with nonempty interior, but calls I × ℝ² an open set and its Regularity remark says the Picard–Lindelöf hypotheses hold at every point of that domain. For example, I = [0,1] is allowed but I × ℝ² is not open; the cited first-order ODE definition and Picard–Lindelöf theorem require an open domain. A continuous forcing defined only on [0,1] also need not extend continuously past an endpoint. This generic domain claim does not alter the assigned constant-coefficient computations when their equation is taken on ℝ. Finding recorded against the direct assigned consumer prop-cm-oscillator-boundary-value-nonuniqueness; nonfatal.

3. In-run supplier thm-cm-homogeneous-oscillator-solution-classification, batch 7: the Statement refers to the oscillator model and quantifies over solution intervals J ⊂ ℝ, but does not identify the model interval I or require J ⊆ I. The model definition makes I part of the data and defines solutions on subintervals of I. State I = ℝ for the global constant-coefficient model, or retain the condition J ⊆ I. The displayed solution families are correct once the domain is fixed. Finding recorded against the direct assigned consumer prop-cm-oscillator-boundary-value-nonuniqueness as a nonfatal missing-hypothesis concern.

4. In-run supplier prop-cm-oscillator-degenerate-and-repulsive-cases, batch 7: its Statement has the same domain omission: it cites the oscillator model, then quantifies over solution intervals J ⊂ ℝ without specifying I or requiring J ⊆ I. State the global model interval or the subinterval condition. The formulas remain correct once the domain is fixed. Finding recorded against the direct assigned consumer prop-cm-two-mass-spring-modes as a nonfatal missing-hypothesis concern.

## Page verdicts

- cm-math-verification (A): pass. Its summary matches the reviewed mathematical claims and carries the scope limits accurately.
- cm-math-verification-examples (B): fail on the summary’s incomplete classification of the exact constants; the five example computations themselves check out.

## Blocker

None. The four findings above are outside this reader’s edit scope and are routed in the findings JSON.

## Coverage note

All assigned pages and items were opened and reviewed. I checked the in-run suppliers directly used by the assigned claims and statement-level content for the mathematical facts needed for the computations, but did not independently reconstruct every transitive proof in the published mathematical dependency closure. No physical or empirical claim occurs in this batch, so the statistical-evidence guidance is not load-bearing here.

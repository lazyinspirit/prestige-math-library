# Step 3a reader report — batch 1

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader (`reader-1`)  
Scope: batch `1`

## Inventory opened

Pages:

- `td-phases-and-limits` (`library/thermodynamics/td-phases-and-limits.md`)
- `td-phases-and-limits-examples` (`library/thermodynamics/td-phases-and-limits-examples.md`)

Assigned items, read by current manifest dependency level:

- Level 0: `def-td-thermodynamic-limit-contract`, `pthm-td-fixed-tp-reaction-potential-minimum`, `def-td-phase-and-coexistence-domain`, `ex-td-reaction-boundary-example`, `cex-td-noncompact-phase-mixture-no-attained-maximum`.
- Level 1: `pthm-td-intensive-coexistence-conditions`, `pthm-td-reaction-boundary-equilibrium`, `pthm-td-compact-continuous-phase-mixture`, `ex-td-finite-two-state-partition-smooth`, `ex-td-vdw-positive-slope`, `ex-td-phase-fraction-lever-rule`, `ex-td-phase-rule-single-component`, `ex-td-reactive-phase-rule-three-component`.
- Level 2: `pthm-td-clapeyron-local`, `pthm-td-regular-gibbs-phase-rule`, `ex-td-compact-continuous-phase-mixture`.
- Level 3: `rem-td-nonsmooth-phase-scope`, `ex-td-clapeyron-linear-branches`, `cex-td-clapeyron-zero-volume-jump`.

The current manifest and item frontmatter agree on all 19 dependency levels. Every assigned item and both page carriers currently have `status: published`. The pages are frontmatter-only, with no prose body. The earlier batch notes describe page-summary text and dependency-level mismatches that are absent from the current carriers; I treated those notes as historical evidence, not as current defects.

## Dependency and source review

I opened the directly used thermodynamics definitions and postulates, including the state-domain, process, isolated-compound, SI, thermal-contact, entropy, first-law, second-law, stable-equilibrium, intensive-variable, response-function, and Legendre-potential suppliers. I also opened the local energy representation, potential differential, Euler/Gibbs-Duhem, coexistence-condition and fixed-temperature/fixed-pressure suppliers. The main conditional deductions and constructed examples are supported by their stated assumptions; the reaction-boundary result keeps its extra zero-amount model separate from the positive-mole state chart.

For the mathematical calculations I opened the directly used natural-number, finite-sum, canonical-model, measure, probability, integration, compactness, rank-nullity, chain-rule, implicit-function, Euler-homogeneity, partial-Legendre, calculus, and real-analytic suppliers. The finite two-state calculation is a model prediction and asserts no limiting singularity. The noncompact-mixture counterexample and compact-mixture theorem have their measure and attainment hypotheses stated explicitly. The phase-rule examples assert only the equation-set ranks they calculate. No item reports experimental observations or uses statistical inference.

I checked relevant excerpts from the cited sources, not the complete works: Tong, *Statistical Physics*, §4.2 (first-law conventions), selected portions of §§4.3–4.4 (second-law and potential discussions), §§5.1.1–5.1.2 (phase equilibrium and Clapeyron relation), and §5.4.3 (finite partition functions and thermodynamic-limit context); Likharev, *Essential Graduate Physics: Statistical Mechanics*, §4.1 and selected portions of §4.2; the BIPM SI Brochure, 9th edition, version 4.01, the SI definitions of the kelvin and mole; and selected passages of Lieb–Yngvason, *The Physics and Mathematics of the Second Law of Thermodynamics*, §§II.A, II.F, III.A, and IV.A. These sources provide thermodynamic context and model conventions; the assigned theorems' conclusions remain conditional deductions from their local stated premises. I did not use the references as evidence that any model describes nature.

Four published prerequisite carriers contain stale descriptions of another supplier's draft status. The target `thm-tdmath-local-implicit-rank` is currently published with a proof, and `def-tdmath-measure-integral` is currently published. Those status comments do not invalidate the mathematical results used by the assigned consumers, but their source/proof-status descriptions are inaccurate. They are listed in the findings file for owner routing.

## Edits and unresolved defects

No item or page was edited. All assigned source carriers are published, and the reader role does not authorize edits to published content. The four uneditable source-status defects are:

1. `pthm-td-local-energy-representation`, Facts & Assumptions `[L1]` and Proof 1.1, calls `thm-tdmath-local-implicit-rank` a draft supplier. The current supplier is published with its proof. Assigned consumer: `def-td-phase-and-coexistence-domain`.
2. `pthm-td-potential-differentials`, Facts & Assumptions `[F1]` and Remarks, calls the local-rank supplier a batch-4 draft. The current supplier is published with its proof. Assigned consumer: `pthm-td-clapeyron-local`.
3. `pthm-td-euler-and-gibbs-duhem`, Facts & Assumptions `[F3]`, calls the local-rank graph interface draft. The current supplier is published with its proof. Assigned consumer: `pthm-td-clapeyron-local`.
4. `lem-tdmath-measure-integral-agrees-with-root-lebesgue-integral`, Facts & Assumptions `[F1]`, calls `def-tdmath-measure-integral` a batch-11 draft. The current definition is published. Assigned consumer: `pthm-td-compact-continuous-phase-mixture`.

No TikZ or `tikzcd` diagrams occur in the assigned carriers. The arguments do not require additional diagrams for their mathematical exposition.

## Page verdicts

- `td-phases-and-limits`: pass for current page inventory and body state. Its nine assigned item IDs match the manifest; there is no prose body to review.
- `td-phases-and-limits-examples`: pass for current page inventory and body state. Its ten assigned example IDs match the manifest; there is no prose body to review.

## Coverage limits and blocker

I reviewed all 19 assigned item carriers, both pages, and the direct prerequisites needed to check their stated arguments. I did not independently re-audit every transitive mathematical proof in the larger prerequisite closure, and my source retrieval was limited to the sections/passages listed above. No empirical evidence was claimed or needed. There is no blocker to completing this review; owner maintenance is needed for the four published prerequisite comments because they are outside this batch's write scope.

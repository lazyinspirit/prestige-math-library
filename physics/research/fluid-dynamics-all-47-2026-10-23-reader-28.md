# Step 3a reader report — batch 28

Run: fluid-dynamics-all-47-2026-10-23  
Role: reader (reader-28)  
Batch: 28

## Opened inventory

Assigned pages:

- library/fluid-dynamics-mathematics/fd-n02.md
- library/fluid-dynamics-mathematics/fd-n02-examples.md

Assigned items, in the page manifest:

- def-fd-mini-fluid-interface
- prop-fd-mini-observation-error
- prop-fd-mini-accumulated-pressure-observation
- rem-fd-mini-weak-velocity-scope
- ex-fd-mini-pressure-time-test

Read the current batch manifest, proof contracts, and empty cross-batch dependency list. Read the direct mathematical suppliers needed to interpret the assigned definitions and arguments: def-na-stokes-zero-mean-pressure-and-velocity-spaces, def-na-evolutionary-skew-convective-form, def-na-mini-element-p1-bubble-p1-spaces, def-na-discrete-weak-and-exact-divergence-free-spaces, def-na-mini-navier-stokes-backward-euler-scheme, def-countable-choice, def-axiom-of-choice, thm-na-mini-be-smooth-velocity-error, thm-na-mini-be-smooth-integrated-pressure-error, thm-na-mini-navier-stokes-be-subsequential-limit, def-na-solenoidal-energy-weak-ns-velocity, and def-na-evolutionary-incompressible-ns-weak-solution. Also opened the supporting geometry and well-definedness items def-matching-affine-simplicial-meshes, lem-shape-regular-affine-simplex-scaling, thm-zero-boundary-piecewise-polynomials-in-w10p, and lem-na-evolutionary-skew-convective-form-bound.

Opened the page prerequisites countability-and-uncountability, relations-functions-and-quotients, energy-stable-incompressible-navier-stokes-discretization, and mixed-finite-elements-and-stokes-stability. The run import receipt identifies the cited mathematical suppliers as imported, read-only mathematics. The current batch cross-batch-dependencies file is empty.

For the finite-element context citations, checked Guermond, Chapter 54, §54.2, Lemma 54.5 and Remark 54.6 ([PDF](https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf)); and Boffi–Brezzi–Fortin, §§8.4.2 and 8.6.1 ([PDF](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf)). These support MINI stability and stationary Stokes approximation context. The assigned evolutionary observation estimates are instead supplied by the exact local mathematical theorems listed above; the item source notes do not attribute those estimates to the finite-element references.

## Item review

- def-fd-mini-fluid-interface — the definition specifies the domain, dimension, mesh, time partition, spaces, discrete weak-divergence kernel, forms, exact and discrete data, initialization, sensors, and pressure observations. The stated hypotheses and dependency roles agree with its mathematical suppliers. It asserts neither solver existence nor an error rate.
- prop-fd-mini-observation-error — the supplied velocity theorem has the stated smoothness, projected initialization, and time-step hypotheses, and controls the weighted sum of nodal velocity errors in the exact norm used here. The observation identity, dual norm inequality, and weighted Cauchy–Schwarz argument prove the stated bound with no missing factor of T.
- prop-fd-mini-accumulated-pressure-observation — the supplied pressure-primitive theorem has the same H, K, constants, initialization, and time-step assumptions. Its nodal primitive estimate and integrated time-test estimate yield the two pairings by Cauchy–Schwarz. The proof does not assert an instantaneous pressure rate.
- rem-fd-mini-weak-velocity-scope — the cited subsequential-limit theorem proves a solenoidal velocity limit and energy inequality, and explicitly does not supply pressure regularity. The remark correctly distinguishes this omission from a claim that pressure does not exist and states the stronger hypotheses of the separate smooth pressure result.
- ex-fd-mini-pressure-time-test — direct integration gives $\xi\in Q$ and $\|\xi\|_Q=1/\sqrt{12}$; nonconstancy of the compactly supported smooth test makes the normalization denominator positive and gives $\|\eta'\|_1=1$. The proposition then yields both stated bounds. The only defect found was the diagram’s equally spaced time-axis nodes, which could suggest equal time steps although the statement permits arbitrary positive steps. The repair is recorded below.

The proof-contract derivations for the four proof-bearing items agree with the current claims and supplier statements. No defect required changing a proof derivation or its contract. No assigned item had a stale verification.judge record.

## Edit and validation

Edited items/ex-fd-mini-pressure-time-test.md in the assigned in-flight batch. Clarified that horizontal spacing in the TikZ timeline is schematic and does not encode time-step sizes; retained the diagram’s cumulative-pressure increments and its other layout qualification. This repairs the diagram without changing its mathematical claim, proof, or dependencies.

Validation after the edit:

- node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/ex-fd-mini-pressure-time-test.md — exit 0; unchanged.
- node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/ex-fd-mini-pressure-time-test.md — pass; 1 checked, 0 failing.
- node tools/physics-support/proof-layout.mjs items/ex-fd-mini-pressure-time-test.md — 1 item, 3 steps, 0 defects.

## Page verdicts

- fd-n02 — pass. The draft mathematics A page is frontmatter-only, keeps the assigned inventory, has compact layout metadata, and lists its prerequisite pages.
- fd-n02-examples — pass. The draft mathematics companion page is frontmatter-only, keeps the example in its examples inventory, and requires fd-n02 and the countability page.

## Unedited defects and blockers

No unedited item or page defect remains. No blocker was encountered. The findings array is empty.

## Coverage note

I opened all assigned carriers and the direct suppliers used to judge their claims. The consumer item bodies were first loaded before the two published smooth-error theorem files; I compared them with those exact supplier statements and proofs before reaching the verdict and did not re-open the carriers. I did not independently re-audit every transitive prerequisite beneath the published mathematical theorem suppliers; I relied on their current published status and exact supplier statements for those further results.

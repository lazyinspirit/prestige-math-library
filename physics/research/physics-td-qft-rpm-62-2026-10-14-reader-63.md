# Reader report — batch 63

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: Step 3a reader  
Batch: `63`

## Opened inventory

Assigned pages: `qft-ir05`, `qft-ir05-examples`. The page prerequisite `qft-ir04` was also opened to check the reading-order edge and its summary.

Assigned items, reviewed in dependency order:

- `def-qft-quartic-graph-power-counting`
- `prop-qft-quartic-superficial-degree`
- `prop-qft-scalar-engineering-dilation`
- `ex-qft-four-point-one-loop-log-degree`

Graph-definition dependencies opened: `def-multigraph-and-digraph-degrees-and-connectivity`, `def-multigraph-loop-and-digraph`, `def-finite-cardinality`, `def-finite-simple-graph`, and `def-connected-graph-and-connected-component`.

The example's QFT-IR04 dependency chain was checked at the exact statements and relevant proofs: `prop-qft-four-dimensional-log-scale-anomaly`, `def-qft-distribution-scaling-degree`, `lem-qft-test-frechet-uniform-scaling-order`, `thm-qft-finite-scaling-degree-extension`, and `prop-qft-local-counterterm-jet-classification`. Their direct prerequisites opened for the uses in those proofs were `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `def-distribution`, `def-support-of-a-distribution`, `def-test-function-space-d-of-an-open-set`, `def-test-function-topology`, `def-fixed-support-test-function-frechet-space`, `lem-fixed-support-test-function-spaces-are-complete`, `def-dirac-delta-and-its-derivatives`, `def-distributional-derivative`, `def-regular-distribution-from-a-locally-integrable-function`, `thm-locally-integrable-functions-embed-in-distributions`, `def-polar-surface-measure-on-the-unit-sphere`, `thm-polar-coordinates-formula-for-lebesgue-measure`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-gaussian-integral`, `lem-test-function-cutoffs-and-euclidean-localization`, `thm-multivariable-taylor-formula-with-lagrange-remainder`, `thm-test-function-operations-are-continuous`, `thm-distributions-supported-at-one-point`, and `thm-baire-category-for-complete-metric-spaces`.

## Item and page review

- `def-qft-quartic-graph-power-counting`: pass. The vertex slots are bijectively assigned to internal edge ends and external half-edges; loops use two distinct slots; connectedness and the assigned Euclidean degrees are explicit. The definition correctly limits the result to formal graph bookkeeping.
- `prop-qft-quartic-superficial-degree`: pass. The incidence identity follows from the slot bijection, the finite connected graph admits a spanning tree with `V-1` edges, and the algebra gives both the general-`D` expression and `4-E` at `D=4`. No actual integral conclusion is inferred.
- `prop-qft-scalar-engineering-dilation`: pass after repair described below. Its compact-support integrals and change of variables are correct under the explicit formal degree convention.
- `ex-qft-four-point-one-loop-log-degree`: pass as a conditional mathematical example. The two-vertex graph has (V=2), (I=2), (E=4), (L=1), hence zero superficial degree. The separate distribution calculation is explicitly conditional on the current draft QFT-IR04 proposition and its AC hypothesis; neither calculation is identified with an integrated graph amplitude or an actual convergence result.
- Page `qft-ir05`: pass after the scalar-dimension repair. Its item list and summary match the mathematical scope and limitations.
- Page `qft-ir05-examples`: pass. Its summary accurately keeps the graph count separate from the conditional distribution identity and makes no convergence or physical-amplitude claim.

## Repairs and checks

In `items/prop-qft-scalar-engineering-dilation.md`, I made the mass-degree convention explicit in the Statement before using “engineering dimensions”: the coordinate, derivative, measure, product, and dimensionless-action-term degrees are stated, and both displayed functionals are assigned degree zero. I also defined the real compactly supported smooth-function notation locally and made the proof's monomial-degree step cite the explicit `S_r` normalization. This closes the unstated inference that the two functionals are dimensionless. The convention agrees with Srednicki, *Quantum Field Theory*, §12, equations (12.5)–(12.11), printed pp. 104–105: in `hbar=c=1` units the action is dimensionless, `[x^mu]=-1`, `[partial^mu]=1`, `[d^Dx]=-D`, and the scalar and coupling dimensions follow from the kinetic and interaction terms.

I aligned the `qft-ir05` A-page summary with that explicit convention and refreshed the scalar item's proof-contract Statement excerpt and raw hash (`33d45c5b0b6d72b2f900361dd566f165f7ee2d695b1ae137c3ffe8386b2cadb7`). The item has no `verification.judge` record, so there was no stale judge stamp to remove.

For the edit, reflow reported the item unchanged and precheck passed (1 item, 0 failures). The first proof-layout invocation could not resolve the app's `@/` alias; rerunning with the existing temporary resolver under `/private/tmp` passed: 1 item, 4 steps, 0 defects.

## Uneditable findings

1. `prop-qft-four-dimensional-log-scale-anomaly`, Proof 2.2: the Statement uses χ in the complex-valued test-function space, but the proof applies polar coordinates to the positive and negative parts of a complex-valued cutoff difference. Decomposing into real and imaginary parts (or restricting the cutoff to be real-valued) closes this short gap. The supplier is a draft in another batch, so it was not edited.
2. `thm-baire-category-for-complete-metric-spaces`, Proof 2.1: after DC constructs a sequence of nested balls, the proof chooses one center from each ball. That simultaneous choice from a countable family requires ACω, which is not stated in the theorem's dependencies or established in that proof. The existing theorem `thm-choice-implies-dependent-implies-countable-choice` supplies DC ⇒ ACω, so adding and applying that result (or choosing centers in the DC recursion) closes the omission. The supplier is published and was not edited.

The exact finding records, including severity and dependency routing, are in `research/physics-td-qft-rpm-62-2026-10-14-reader-findings-63.json`.

## Source and evidence notes

Srednicki, [*Quantum Field Theory* draft](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf), §18, equations (18.2)–(18.8), printed pp. 129–132, supports the loop-measure/internal-propagator power assignment and the quartic graph count; §18 also explicitly cautions that superficial degree alone does not decide actual convergence. QFT.org, [“One-Loop Divergences and Power Counting”](https://qft.org/courses/qft-i/39-one-loop-divergences-and-power-counting/), sections “Superficial degree of divergence,” “Engineering dimensions and operator classification,” and “Example: superficial divergence in φ⁴ theory,” gives the same bookkeeping and caveats. These sources support the conventions; the assigned graph identities and dilation formulas are proved locally.

Brunetti and Fredenhagen, [“Microlocal Analysis and Interacting Quantum Field Theories: Renormalization on Physical Backgrounds”](https://arxiv.org/pdf/math-ph/9903028), arXiv:math-ph/9903028v1, §5.2, Theorems 5.2–5.3 (PDF pp. 23–24), state the general finite-scaling-degree extension result and the finite extension freedom. The exact coefficient in the four-dimensional cutoff scale-change identity is independently derived in the QFT-IR04 item; it is not attributed to that general theorem.

No assigned item makes an empirical or statistical claim. Published measure/distribution suppliers were used at their exact stated hypotheses; I did not independently re-prove every transitive prerequisite of those already published suppliers. There is no remaining task blocker.

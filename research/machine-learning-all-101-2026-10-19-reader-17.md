# Step 3a reader report — batch 17

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `17`

## Opened inventory

Assigned pages:

- `library/machine-learning/ml02-cart.md`
- `library/machine-learning/ml02-cart-examples.md`

Assigned items, reviewed in dependency order:

- `items/def-empirical-decision-tree.md`
- `items/thm-node-mean-minimizes-squared-error.md`
- `items/def-cost-complexity-pruning.md`
- `items/alg-cart-greedy-split.md`
- `items/alg-weakest-link-pruning.md`
- `items/thm-cart-greedy-split-is-best-listed-split-and-terminates.md`
- `items/thm-weakest-link-pruning-terminates.md`
- `items/ex-cart-subtrees-same-fit-different-penalties.md`
- `items/ex-cart-one-dimensional-threshold-tree.md`

Published dependency context opened for the mean theorem and its proof-used suppliers:

- `items/def-inner-product-space.md`
- `items/def-linear-map.md`
- `items/prop-standard-coordinate-inner-products.md`
- `items/def-adjoint-of-a-linear-map-between-inner-product-spaces.md`
- `items/def-orthogonal-projection.md`
- `items/prop-pythagorean-parallelogram-and-polarisation-identities.md`
- `items/thm-orthogonal-projection-is-the-unique-nearest-point.md`
- `items/def-orthogonal-complement.md`
- `items/prop-adjoint-algebra.md`
- `items/cor-double-orthogonal-complement-and-dimension.md`
- `items/thm-adjoint-kernel-and-range-orthogonality.md`
- `items/thm-least-squares-solutions-and-normal-equation.md`

I also reviewed the batch manifest, the current proof-contract entries for all nine items, the batch notes and coverage metadata as evidence, and the current run status. Author decisions and earlier checks were not used as verdicts.

## Review findings

No confirmed mathematical, statement, definition, algorithm, proof, computation, citation, diagram, formatting, or page-inventory defect was found in the assigned scope. The assigned claims preserve their hypotheses and scope; the proofs trace to the stated facts, earlier steps, and elementary calculations.

- `def-empirical-decision-tree`: the finite nonempty sample and label-set conditions make the stated leaf means, class frequencies, tie rule, and impurities defined. The path comparisons determine a unique branch for every feature vector.
- `thm-node-mean-minimizes-squared-error`: the constant-vector map is linear, the coordinate inner products satisfy the least-squares supplier's hypotheses, the displayed adjoint is correct, and the normal equation has the unique solution `c = \bar y_I` for `N >= 1`. The final square expansion gives the stated minimum value.
- `def-cost-complexity-pruning`: the subtree loss, leaf penalty, and weakest-link denominator are defined for the stated finite trees and current nonterminal nodes. The text does not claim global penalty optimality or a test-risk guarantee.
- `alg-cart-greedy-split`: midpoint candidates produce nonempty children, the score and deterministic tie order are specified, and the recursion and depth stopping rule determine the output.
- `alg-weakest-link-pruning`: the procedure uses current subtree quantities, gives a tie rule, and stops at the root leaf; it does not make an unsupported optimality claim.
- `thm-cart-greedy-split-is-best-listed-split-and-terminates`: every nonempty coordinate-threshold partition is represented by an adjacent-value gap midpoint. The finite minimum and tie rule justify the selected score, while nonempty children and the depth cap justify termination.
- `thm-weakest-link-pruning-terminates`: every current quotient has positive denominator, the finite candidate set has a minimum, and each collapse reduces the leaf count. The argument establishes the `L_0 - 1` bound and root termination.
- `ex-cart-subtrees-same-fit-different-penalties`: the leaf fits, costs `2` and `3`, and weakest-link values `0` and `1/3` follow from the displayed sample. The diagram's predicates and left/right branches match the text.
- `ex-cart-one-dimensional-threshold-tree`: the three child-loss scores are `2/3`, `0`, and `2/3`; the middle split is uniquely best, its leaves have means `0` and `1`, and the depth cap stops the procedure. The diagram matches the calculated tree.

## Source checks

- Hastie, Tibshirani, and Friedman, *The Elements of Statistical Learning*, second edition, corrected 12th printing, §9.2.1–9.2.3, printed pp. 305–310. I opened the full text linked from the authors' [book page](https://hastie.su.domains/ElemStatLearn/main.html). Printed pp. 305–306 describe recursive binary partitions and branch conventions; p. 307 gives the regression leaf mean and greedy split objective in equations (9.10)–(9.14); p. 308 gives the subtree criterion and weakest-link sequence in (9.15)–(9.16); pp. 309–310 give majority-class prediction and the classification impurities in (9.17). These locations support the authored source locators. The local proofs supply the finite midpoint representation, termination bounds, and example arithmetic.
- MIT OpenCourseWare, 15.097, Lecture 8, official [decision-trees PDF](https://ocw.mit.edu/courses/15-097-prediction-machine-learning-and-statistics-spring-2012/f5678de0e329ce097fc6ec6182ebaea2_MIT15_097S12_lec08.pdf). Slides 13 and 16 give cost-plus-leaf-count pruning criteria; slide 15 gives the regression leaf-mean calculation and greedy split objective. The cited source locations match those uses.

## Edits and uneditable defects

- Edits: none. No confirmed defect required repair, so no item, proof contract, or verification metadata changed. The post-repair reflow, precheck, and proof-layout commands were therefore not applicable.
- Defects that could not be edited: none identified.

## Page verdicts

- `ml02-cart`: pass. The draft A page contains frontmatter only, retains `page_layout: compact-v1`, and its item list and prerequisite match the assigned inventory. There is no summary body.
- `ml02-cart-examples`: pass. The draft B page contains frontmatter only, retains `page_layout: compact-v1`, and its examples and prerequisite match the assigned inventory. There is no summary body.

## Blocker and coverage boundary

No reader-side blocker was found. The full transitive published dependency closure was not independently re-audited; review covered the assigned items, their direct suppliers, and the supporting theorem statements and arguments used by the least-squares dependency. No defect in that reviewed dependency context was confirmed.

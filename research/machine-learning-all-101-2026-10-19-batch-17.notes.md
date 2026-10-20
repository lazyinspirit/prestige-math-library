# Batch 17 — CART trees and pruning

Run `machine-learning-all-101-2026-10-19`; owner scope `ml02-cart` / `ml02-cart-examples` only.

## Plan comparison and scope

No run-level owner-authoring-direction file was present, so the current track plan and its plan-spec entry governed this pair.

- Read the complete ML-16 design in `research/plan-machine-learning-track.md` and the matching `plan-spec.json` rows 2717–2718. No conflict: both specify the same finite labeled sample, axis-aligned binary splits, nonempty children, deterministic ties, regression and classification impurities, finite candidate greedy splits, fixed-tree cost-complexity pruning, cross-validation as selection only, two examples, and the same five proposed IDs.
- Added `thm-cart-greedy-split-is-best-listed-split-and-terminates` and `thm-weakest-link-pruning-terminates`: the design's proof route requires these algorithmic properties, while the schema requires algorithm properties to be separate proved items. They prove only finite candidate minimization and termination; they assert no global tree or pruning optimality.
- No Cat1 generalization result is consumed. No choice axiom is used.

## Inventory, dependencies, and levels

The assigned A/B manifest now records every item and direct logical supplier before item carriers were authored. External published suppliers do not raise an in-run item level. Batch 17 remains scheduling level 0 with no in-run prerequisite batch; the page requirement `inner-product-spaces-and-orthogonality` is published external context. The batch-17 cross-batch input is empty because this pair consumes no in-run batch; it does not record outgoing page dependencies declared by later consumers.

| Item | Home | In-run dependencies | Level | Claim / convention |
|---|---|---|---:|---|
| `def-empirical-decision-tree` | A | none | 0 | finite sample, nonempty leaves, deterministic class and split order |
| `thm-node-mean-minimizes-squared-error` | A | `def-empirical-decision-tree` | 1 | unique mean minimizer for a nonempty regression leaf |
| `def-cost-complexity-pruning` | A | `def-empirical-decision-tree` | 1 | `R(T)+alpha|T|`, weakest-link quotient defined on nonterminal nodes |
| `alg-cart-greedy-split` | A | `def-empirical-decision-tree`, `thm-node-mean-minimizes-squared-error` | 2 | finite midpoint candidate list, smallest child-weighted loss, depth cap |
| `alg-weakest-link-pruning` | A | `def-empirical-decision-tree`, `def-cost-complexity-pruning` | 2 | collapse a minimum-`g` internal node, fixed path tie order |
| `ex-cart-subtrees-same-fit-different-penalties` | B | tree and cost definitions, weakest-link algorithm | 3 | exact three-point example with RSS 0 and distinct leaf penalties |
| `thm-cart-greedy-split-is-best-listed-split-and-terminates` | A | tree definition, mean theorem, greedy algorithm | 3 | local candidate optimum only; finite recursion |
| `thm-weakest-link-pruning-terminates` | A | tree and cost definitions, pruning algorithm | 3 | at most `|leaves(T0)|-1` collapses |
| `ex-cart-one-dimensional-threshold-tree` | B | tree definition, greedy algorithm, finite-candidate theorem | 4 | four-point threshold example with unique zero-loss split |

## Downstream page consumers (read-only)

The current manifests declare `ml02-random-forests` in batch 18 and `ml02-boosting` in batch 19 as page consumers of `ml02-cart`; the batch-level schedule lists both batches at level 1 with `requires: [17]`. Their page manifests still have empty item inventories, so no actual consuming item dependencies or proofs can yet be quoted or verified. Read-only frontier-dependency-ledger collection found both declared page edges and no consumer review rows yet; those reviews belong in batches 18 and 19, and the batch-17 cross-batch input remains empty because it consumes no in-run batch.

The current plan gives drafting interfaces:

- ML-17 names `alg-bagged-random-forest`, the infinite-vote limit, the strength/correlation bound, and the unbiased-randomized-tree regression-risk bound; CART is an optional base learner under the design's fixed-training-data/randomization hypotheses. This A page supplies finite sample tree structure, deterministic split behavior, and explicitly makes no universal learning guarantee.
- ML-18 names `alg-gradient-boosting` as the consumer when regression trees are chosen as base learners. Its required input is a finite regression sample of real pseudo-responses; the downstream design separately requires nonempty leaves and attained leaf line minimizers. The CART page supplies only the tree fit, with no claim that it is an exact unrestricted gradient step.

These are plan interfaces, not actual consumer bodies or acceptance. The batch-18 and batch-19 authors must verify the finished supplier excerpts and record their own cross-batch reviews. No other batch files were edited.

`thm-node-mean-minimizes-squared-error` also declares external item dependencies `thm-least-squares-solutions-and-normal-equation`, `prop-standard-coordinate-inner-products`, and `def-adjoint-of-a-linear-map-between-inner-product-spaces`. There are no in-run suppliers beyond the level-0 tree definition.

## Supplier inspection

- `library/linear-algebra/inner-product-spaces-and-orthogonality.md` is published and lists the required coordinate-inner-product, adjoint, and least-squares items.
- Read the full statement and proof of `thm-least-squares-solutions-and-normal-equation`: it applies to finite-dimensional inner-product spaces, gives existence and the normal-equation characterization, and describes all minimizers as one minimizer plus `ker T`. Its direct proof suppliers `thm-orthogonal-projection-is-the-unique-nearest-point`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, and `thm-adjoint-kernel-and-range-orthogonality` were also read. The real map `T(c)=c(1,...,1)` on a nonempty leaf is injective; the local squared-expansion proof independently gives the exact minimum and uniqueness. The declared transitive dependency metadata has 280 items and does not include `def-axiom-of-choice`; the local argument itself is choice-free.
- Read `prop-standard-coordinate-inner-products`; its real formula is the ordinary dot product on `R^N`, matching the finite sample vector convention. Read the full inner-product page frontmatter and its convention paragraph. No supplier body is claimed ready from the plan alone.

## Sources read and dispositions

1. Hastie, Tibshirani, Friedman, *The Elements of Statistical Learning*, second edition, corrected 12th printing. The complete §9.2 was fetched and inspected (printed pp. 305–316; PDF pages 324–335). It supports the finite recursive tree definition, leaf mean and loss, classification impurity, greedy split objective, cost-complexity criterion, and weakest-link description. ESL explicitly refers elsewhere for the result that the weakest-link sequence contains an alpha-minimizing subtree; that theorem is not imported. Local proofs supply mean uniqueness, finite-candidate coverage, and pruning termination.
   - Retrieval history: the author's book page `https://hastie.su.domains/ElemStatLearn/main.html` linked `https://hastie.su.domains/ElemStatLearn/printings/ESLII_print12_toc.pdf.download.html`, which meta-refreshes to the public Google Drive file. The guessed `...ESLII_print12.pdf`, direct `..._toc.pdf`, and old `web.stanford.edu` PDF route returned 404; after searching alternatives, the author-linked Drive URL fetched the identical full 12th-printing text (13,399,454 bytes, 764 pages). The full source URL and locators are in the batch coverage file.
2. MIT OpenCourseWare, 15.097, Lecture 8, *Decision trees*, full 17-page lecture PDF. Read the relevant complete CART slides 13–16: class Gini and cost-complexity context, the regression leaf-mean derivation, greedy split objective, and cost-complexity penalty. It independently corroborates the finite training-loss conventions; it does not state the weakest-link quotient or prove global pruning optimality.
3. Each source contents row is marked `included` only for the items it actually supports. The B examples are generated finite witnesses and are verified locally; they are not represented as harvested source results. `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-17.coverage.json --stamp` passed: 2/2 sources full-text fetch-verified, 0 documented drops.

## Per-item progress and validation

All nine carriers are authored at the levels declared in the batch-17 manifest. Their statements are uninterrupted; both A/B pages are frontmatter-only, with no summary body and no page_layout flag (the engine sets compact-v1 mechanically). The proof contract contains exact supplier excerpts, every current proof step, boundary dispositions, and no inapplicable finite-smoke registry checks.

- def-empirical-decision-tree — A, level 0. Defines finite samples, nonempty axis-aligned binary splits, regression leaf means and impurities, deterministic classification ties, and misclassification/Gini/entropy criteria. Sources: ESL §9.2.1–9.2.3, printed pp. 305–310; MIT OCW Lecture 8, slides 14–15. Dependencies: none. Scoped checks pass.
- thm-node-mean-minimizes-squared-error — A, level 1. Proves the unique mean minimizer for every nonempty finite regression leaf, using the published finite-dimensional least-squares normal equation and an independent square expansion. Sources: ESL equations (9.10)–(9.14), printed p. 307; MIT OCW Lecture 8, slide 15. Dependencies: def-empirical-decision-tree; external prop-standard-coordinate-inner-products, def-adjoint-of-a-linear-map-between-inner-product-spaces, and thm-least-squares-solutions-and-normal-equation. Precheck passes.
- def-cost-complexity-pruning — A, level 1. Defines subtree empirical loss, terminal-node count, C_alpha(T)=R(T)+alpha|T|, and g(t) for current nonterminal nodes. Sources: ESL §9.2.2–9.2.3, printed pp. 308–310; MIT OCW Lecture 8, slides 13 and 16. Dependency: def-empirical-decision-tree. No global alpha-optimality or test-risk claim is made.
- alg-cart-greedy-split — A, level 2. Defines midpoint candidates between adjacent distinct feature values, child-weighted loss, deterministic lexicographic ties, and a maximum-depth stopping rule. Sources: ESL §9.2.2–9.2.3, printed pp. 307–310; MIT OCW Lecture 8, slides 14–15. Dependencies: def-empirical-decision-tree and thm-node-mean-minimizes-squared-error.
- alg-weakest-link-pruning — A, level 2. Defines successive minimum-g(t) collapses with fixed path-order ties through the root leaf. Source: ESL §9.2.2, printed p. 308. Dependencies: def-empirical-decision-tree and def-cost-complexity-pruning. No global pruning optimality claim is made.
- thm-cart-greedy-split-is-best-listed-split-and-terminates — A, level 3. Proves midpoint candidates represent every nonempty coordinate-threshold partition, the finite child scores have a deterministic minimum, and bounded-depth recursion terminates. Sources: ESL §9.2.2–9.2.3, printed pp. 307–310; MIT OCW Lecture 8, slides 14–15. Dependencies: def-empirical-decision-tree, thm-node-mean-minimizes-squared-error, and alg-cart-greedy-split. Precheck passes; scope is nodewise candidate optimality only.
- thm-weakest-link-pruning-terminates — A, level 3. Proves every quotient is defined, a minimum exists whenever more than one leaf remains, and each collapse reduces leaf count; the bound is L0-1. Source: ESL §9.2.2, printed p. 308. Dependencies: def-empirical-decision-tree, def-cost-complexity-pruning, and alg-weakest-link-pruning. Precheck passes; no global optimality is asserted.
- ex-cart-subtrees-same-fit-different-penalties — B, level 3. The sample (0,0),(1,0),(2,1) gives two trees with RSS 0, two versus three leaves, costs 2 versus 3 at alpha=1, and initial weakest-link values 0 versus 1/3. Generated finite example; all calculations are verified locally. Dependencies: def-empirical-decision-tree, def-cost-complexity-pruning, and alg-weakest-link-pruning. TikZ trees are explained; verification does not rely on the diagrams. Precheck passes.
- ex-cart-one-dimensional-threshold-tree — B, level 4. The sample (0,0),(1,0),(2,1),(3,1) gives candidate scores 2/3, 0, 2/3 and the unique split x1<=1.5, with leaf means 0 and 1. Generated finite example; all calculations are verified locally. Dependencies: def-empirical-decision-tree, alg-cart-greedy-split, and thm-cart-greedy-split-is-best-listed-split-and-terminates. TikZ tree is explained; verification does not rely on the diagram. Precheck passes.

## Final scoped checks

- source-fetch-check --stamp and check: pass, 2/2 full-text sources verified, 0 drops.
- proof-contract.mjs --strict for the nine-item batch scope: pass, all 9 contracts checked, no errors or warnings.
- proof-contract-coverage on an isolated current batch-17 snapshot in /tmp/prestige-ml17-check: pass, 9 items, all 5 proof-bearing carriers covered.
- precheck: pass, all five proof-bearing items.
- proof-layout: pass, 9 changed items, 15 numbered steps, 0 defects.
- rendercheck: pass, all nine items and both pages; real KaTeX and renderer YAML parsing succeeded.
- content-policy on the batch-17 manifest: pass, 9 items, 0 errors and 0 warnings.
- depcheck with an explicit nine-item selector: pass, 9 selected items and 2 selected pages, 0 errors or warnings; its dependency closure checks covered 296 items and 39 pages.
- Scoped item-dependency-level calculation: pass, all nine batch-17 items match levels 0,1,1,2,2,3,3,3,4 with no cycle or label errors.
- No finite-smoke registry check applies to these elementary claims; the finite examples' exact arithmetic is included in their local verification arguments.

## Owner handoff and unresolved records

The assignment's dependency-level sidecar records batch 17 at level 0 with requires=[], input hash 424a2623b4a02ffac30bca34f1e893445df04b9a3a30237f39748f9397b2e4a0. The changed batch manifest makes that input hash stale. A read-only whole-run recomputation is blocked by an out-of-scope unfinished manifest: research/machine-learning-all-101-2026-10-19-batch-26.pages.json, page ml02-causal-pc, currently lists 15 bare item IDs rather than item-contract objects. The required read-only command node tools/batch-dependency-levels.mjs check --run machine-learning-all-101-2026-10-19 fails before hash comparison with “Duplicate item undefined”; construction-scheduling recomputation also fails because items/lem-pc-fisher-transform-uniform-concentration.md is not yet present. Batch 26 is still in its construction state: its page manifest lists 15 string IDs while at least one assigned carrier is not yet materialized. This is an unfinished cross-pair construction input, not a mathematical supplier defect. No batch-26 manifest or carrier was edited. The batch-17 scoped item-level calculation is clean and confirms no in-run batch supplier; the owner/native engine should refresh the run-level scheduling artifact after the remaining manifest inputs are materialized.

Readiness records remain the only incomplete batch deliverable. The required command node tools/step1-decisions.mjs record --run machine-learning-all-101-2026-10-19 --item def-empirical-decision-tree --decision ready --dependencies '[]' --reason 'No logical suppliers; A-page placement, uninterrupted definition, source coverage, and scoped policy/render/dependency checks are complete.' failed before writing a record with “Duplicate item undefined” from the same batch-26 string inventory. The strict frontier snapshot therefore cannot write a decision for any of these nine items yet. No readiness files were fabricated and no --owner override was used. When the remaining batch manifests and carriers are materialized and the strict frontier snapshot loads, record current Step 1 decisions for all nine items. There is no unresolved mathematical supplier or proof gap within batch 17.

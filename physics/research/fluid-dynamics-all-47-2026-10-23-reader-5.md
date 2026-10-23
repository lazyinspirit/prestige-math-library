# Step 3a reader report — batch 5

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Batch: `5`

## Opened inventory

Pages opened:

- `library/fluid-dynamics-mathematics/fd-x01.md` (A page).
- `library/fluid-dynamics-mathematics/fd-x01-examples.md` (B page).

Assigned items reviewed in dependency order:

1. `def-fd-x00`
2. `def-fd-real-trigonometric-functions`
3. `lem-fd-x02-vector-triple-product`
4. `lem-fd-x03-tanh-error-bounds`
5. `thm-fd-x01`
6. `lem-fd-real-trigonometric-derivatives`
7. `thm-fd-x02`
8. `thm-fd-x03`
9. `ex-fd-x01-formal-verification`
10. `ex-fd-x02-application`
11. `ex-fd-x03-application`

The current batch manifest, batch notes, cross-batch dependency rows, coverage record, and proof contracts were treated as routing/evidence context and checked against the current pages and item sources. Both page bodies are empty as required; item inventories and page homes match the manifest. No TikZ or tikzcd diagrams occur in the assigned items, and no missing diagram is needed for these arguments.

Published mathematical supplier statements needed for the batch claims were opened, including:

- `def-divergence-and-curl-of-a-c1-vector-field`, `def-laplacian-of-a-c2-function`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, `def-scalar-and-vector-line-integrals-along-piecewise-c1-paths`, and `def-oriented-unit-normal-and-flux-of-a-surface-patch`;
- `def-complex-exponential`, `lem-complex-exponential-series-converges-everywhere`, `def-complex-trigonometric-and-hyperbolic-functions`, `def-complex-conjugate-real-imaginary-part-and-modulus`, and `thm-complex-trigonometric-hyperbolic-dictionary`;
- `def-cross-product-in-r3`, `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`, `thm-chain-rule`, `thm-derivative-of-exponential`, `thm-of-square-roots`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `lem-cross-product-is-bilinear-alternating-and-orthogonal`, `thm-cross-product-norm-is-the-two-vector-gram-determinant`, and `lem-standard-basis-of-f-n`;
- `def-hyperbolic-functions`, `thm-hyperbolic-identities-and-derivatives`, `thm-exponential-addition-formula`, `cor-exponential-reciprocal-and-positivity`, `cor-mean-value-theorem`, `cor-complex-trigonometric-and-hyperbolic-derivatives`, and `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`.

## Review and repair

The coordinate proof of the vector triple-product identity is valid for all vectors, including degenerate cases. The tanh inequalities follow from the stated derivative identities, the mean value theorem, and the exponential formula. The nondimensionalization proof uses invertible positive scalings and derives both transformed systems correctly. The real-trigonometric derivative proof follows from the supplied complex derivative and real differentiability statements. The acoustic and rotating modes satisfy their stated pointwise systems, including the zero-amplitude and signed-frequency cases. The finite-depth mode satisfies the interior and boundary equations, and all three relative-error bounds follow from the tanh lemma. The three examples' numerical substitutions and units are consistent. Proof-contract derivations and boundary records agree with the current proof steps; no proof-step or diagram repair was required.

One definition completeness defect was confirmed in assigned item `def-fd-x00`: the rotating system used `q` without stating its map or the spatial regularity needed for `\nabla q`; “steady field” and “exterior domain” were used without precise definitions, and the cross product and `I_3` were not defined at first use. The Definition now states the domains and regularity of `p`, `\rho`, and `q`, gives the right-handed cross-product formula and defines `I_3`, defines a steady velocity field and its streamline, specifies the exterior-domain condition needed for the directional limit, and spells out the scalar/vector limit norms. It also states explicitly that the barotropic pressure is prescribed as a function of density alone. The displayed fluid systems are unchanged.

The affected batch-5 proof-contract source excerpts for `def-fd-x00` were updated (six citations in `research/fluid-dynamics-all-47-2026-10-23-batch-5.proof-contracts.json`). The `def-fd-x00` contract has no proof derivations to regenerate, and the item had no `verification.judge` record to remove. Direct and indirect consumer uses were checked against the clarified interface. The three assigned direct theorem consumers are `thm-fd-x01`, `thm-fd-x02`, and `thm-fd-x03`; the explicit rotating field in `thm-fd-x02` is smooth and meets the new `q` condition. The current run manifests give 24 direct consumers and 34 indirect descendants (58 total) across batches 5–7, 12–14, 39–40, and 46–47. Their model equations and result interfaces remain unchanged, and the declared field classes satisfy the clarified definitions; no out-of-batch source repair is required.

Two nonfatal prose defects were found in read-only published dependencies. In `def-jacobian-matrix-and-gradient`, the parenthetical in the Definition gives a standard basis of `F^n` although the displayed gradient for a scalar function on `U \subseteq R^m` lies in `R^m`; the gradient formula itself is explicit. In `def-euclidean-inner-product`, lines 39–43 contain merged, ungrammatical fragments in the explanatory identification of `R^n` with a function space, but the inner-product and norm formulas are explicit. Both are reported in the findings JSON, with `def-fd-x00` named as the assigned consumer. Imported published suppliers were not edited.

## Checks

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-fd-x00.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-fd-x00.md` — `0 checked, 0 failing — all clean` (the definition has no proof steps).
- `node tools/physics-support/proof-layout.mjs items/def-fd-x00.md` — `1 items, 0 steps, 0 defects`.

## Page verdicts and blockers

- `fd-x01`: pass after the `def-fd-x00` repair. The A-page has only YAML frontmatter, and its eight assigned items are placed correctly.
- `fd-x01-examples`: pass. The B-page has only YAML frontmatter, and its three examples are placed correctly.
- No blocker remains for batch 5. The two published-dependency prose defects remain for owner disposition because their sources are read-only.

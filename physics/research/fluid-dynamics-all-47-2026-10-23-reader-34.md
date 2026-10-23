# Reader 34 report

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: independent reader  
Batch: `34`

## Opened inventory

Assigned pages:

- `library/fluid-dynamics-mathematics/fd-st03.md`
- `library/fluid-dynamics-mathematics/fd-st03-examples.md`

Assigned items, reviewed in dependency order:

1. `items/lem-fd-profile-affine-coordinate-isometry.md`
2. `items/def-fd-fluid-profile-bootstrap-interface.md`
3. `items/prop-fd-profile-functional-bootstrap.md`
4. `items/ex-fd-constant-profile-bootstrap.md`

I also opened the direct mathematical suppliers used by those claims, including the quotient definition and change-of-variables theorem; the causal-shift definition, block-resampling algorithm and its overlapping-block procedure; the choice principles; the Bochner measurability and integrability items; the moving-block bootstrap theorem and exact conditional covariance lemma; the weighted-block covariance and conditional independent-block lemmas; the independent-tail rate lemma; the Hilbert-valued sample-mean CLT; conditional weak convergence and weak convergence of Borel laws; Riesz representation; the countable orthonormal-basis result; and the Hilbert–Schmidt definition, basis-independence theorem and ideal estimate. These were checked as mathematical inputs, not accepted on the strength of batch notes or contracts.

The assigned item inventory and dependency levels match the authored carriers: lemma (0), interface definition (1), conditional bootstrap proposition (2), and constant-profile example (3). The two page carriers are draft mathematics pages with the corresponding A-page items and B-page example. Both have `page_layout: compact-v1` and empty Markdown bodies. The batch cross-dependency file records the two published page prerequisites for `fd-st03` as verified scoped interface checks.

## Mathematical review

### `lem-fd-profile-affine-coordinate-isometry`

The affine maps between `(0,1)` and `(a,a+ell)` are `C^1` diffeomorphisms when `ell>0`. The proof applies the change-of-variables formula to null-set indicators to establish representative independence, then to squared representatives to establish the norm identity. It proves the reverse map is well-defined and isometric and checks both compositions directly. The exact change-of-variables supplier carries the stated Countable Choice hypothesis. I found no missing prerequisite or defect.

The cited Ohio State lecture notes state the change-of-variables theorem at Theorem 137, p. 50. The locally published supplier used by the item gives the needed nonnegative-measurable version under Countable Choice and supplies its own proof.

### `def-fd-fluid-profile-bootstrap-interface`

The definition fixes the real `L^2` profile space, its inner product, probability spaces and iid innovation law, measurable causal filter, Bochner mean, replacement family and summability condition. It defines uniform overlapping block starts, within-block order, exact-length truncation, the conditional center, and bounded real-linear profile functionals. The cited moving-block algorithm specifies the draw count and admissible block lengths. The remark's affine profile normalization and units agree with the isometry lemma. The definition does not claim asymptotic validity or empirical precision. Its definition and remark references follow the complete prose sections. I found no defect.

### `prop-fd-profile-functional-bootstrap`

The statement's hypotheses match the interface and the moving-block theorem: AC, centered causal `L^2`-`m`-approximability, the block regime `b_n -> infinity` and `b_n/sqrt(n) -> 0`, and centering by the actual conditional expectation. The proof applies the continuous mapping argument to bounded continuous test functions for the pushforward by `L`, then uses Riesz representation and the Hilbert–Schmidt ideal inequality to obtain the stated variance bound. The zero-variance case is included. The dependencies distinguish the sampling-law CLT from the conditional bootstrap CLT and carry the same covariance operator `Gamma`.

I checked the cited source statements. Pilavakis, Paparoditis and Sapatinas, Theorem 2.1, pp. 4–5 of the PDF, assumes the mean-zero `L^2`-`m`-approximable process and `b^{-1} + b n^{-1/2} = o(1)`, and states conditional weak convergence and Hilbert–Schmidt covariance consistency. The paper makes an exact-divisibility simplification in its exposition; the local published theorem used here separately proves the arbitrary-`n` final-partial-block extension and derives its `m delta_m -> 0` rate from the stated summability convention. Horváth, Kokoszka and Reeder, Theorem 1, printed pp. 105–106, supplies the sample-mean Gaussian limit under the matching summability, zero-mean and second-moment assumptions. The assigned proof uses these as distinct conditional and sampling-law inputs. I found no defect.

### `ex-fd-constant-profile-bootstrap`

The constant-function embedding is an isometry and preserves the independent-tail replacement errors. The verification establishes strong measurability using a countable dense sequence, derives Bochner integrability from the scalar second moment, and identifies the Bochner mean with the embedded scalar mean using scalar simple approximations. The integral functional is well-defined on almost-everywhere classes, bounded with norm one, and returns each scalar observation. The example is a symbolic mathematical construction, not a report of measured data. I found no defect.

## Page verdicts

- `fd-st03`: **pass**. Draft mathematics classification and item inventory agree with the manifest; prerequisites are declared; the body is empty.
- `fd-st03-examples`: **pass**. Draft mathematics classification and example inventory agree with the manifest; the companion prerequisite is declared; the body is empty.

## Edits, remaining defects, and blockers

- Edits: none. No confirmed in-scope defect was found.
- Uneditable defects: none identified.
- Blocker: none.
- No item changed, so item reflow, precheck and proof-layout commands were not applicable.

## Coverage limit

I checked each assigned item's direct mathematical interfaces and the central supporting bootstrap and Hilbert-space proofs needed for their uses. I did not re-audit every theorem in the full transitive dependency closure of the published mathematics library. The primary-source checks were limited to the cited theorem statements and locators recorded above; the local published proofs were the arguments reviewed for the assigned deductions.

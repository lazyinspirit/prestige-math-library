# Batch 60 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2` · role: beta · batch: 60.

## Plan and design comparison

`plan-spec.json` and the complete assigned design agree on the A/B page IDs, titles, order (817/818), category (`quantum-field-theory-mathematics`), library (`mathematics`), and page prerequisites. The A page requires `qftx-microlocal-products`, `qft-ir04`, `qft-ir05`, and `qftx-analytic-prerequisites`; B requires the A page and `qft-ir04`. The preauthoring plan has empty item inventories. The detailed design names three A items and one B item; three local A prerequisites were added to define the finite-jet input class, prove its microcausality, and state the graph-scaling interface before its consumers. The resulting A page has six items, B has one, and both remain below the 100-item cap.

The design’s short interface prose names translation covariance, while its complete proof route requires global Lorentz-covariant scalar normalization and the finite Lorentz cocycle correction. The local contract and theorem preserve both translation and proper-orthochronous Lorentz covariance, hence Poincare covariance. The free scalar two-point data and the time-ordered contraction are explicitly conditional hypotheses; this batch does not claim to construct them. The scope excludes convergence, an adiabatic limit, positivity of formal coefficients, gauge/Ward identities, and empirical claims.

No shared plan, `plan-spec.json`, published item, engine state, or verdict was changed.

## Authored inventory and item levels

Levels were recomputed over the 21-item dependency closure of batches 58–60; the scoped DAG is acyclic and all stored item levels for these suppliers match.

| Item | Level | In-batch suppliers |
|---|---:|---|
| `def-qftx-off-shell-local-polynomial-functionals` | 3 | Batch-58 distribution and Hadamard definitions |
| `lem-qftx-local-polynomial-functionals-are-microcausal` | 4 | The off-shell definition; batch-58 wavefront, Hadamard, and microcausal definitions |
| `def-qftx-local-time-ordered-system` | 6 | The local definition and lemma above; batch-58 wavefront product, Hadamard, microcausal, and star-product carriers |
| `lem-qftx-finite-graph-scaling-degree` | 7 | The time-ordered contract and batch-58 wavefront-product theorem |
| `thm-qftx-scalar-eg-induction` | 8 | The local definitions, graph-scaling lemma, batch-58 microlocal products, and batch-59 Lorentz cocycle lemma |
| `prop-qftx-finite-renormalization-composition` | 9 | The theorem and local contract; point-extension classification and test-product density |
| `ex-qftx-two-vertex-log` | 9 | The theorem and the published Euclidean logarithmic anomaly |

All seven items have mathematical domain/library and `physical_scope: null`. The three added A prerequisites are marked `inventory_expansion_required: true` in the manifest. The two pages and all item statements match the authored carriers.

## Mathematical gap and owner escalation

The finite-graph argument needs the product-scaling bound (PB): a wavefront-transversal product of finite-degree factors has finite scaling degree at most the sum of the factor degrees. The current local `thm-qftx-wavefront-product` establishes product/pullback existence and wavefront bounds; its actual interface does not establish PB from the ordinary scaling-degree assumptions on the fixed kernel. Uniform finite-order bounds alone do not close that directional scaling argument.

Both full treatments were inspected. Fredenhagen–Rejzner’s §7 gives the scalar graph expansion and recursive extension route. Brunetti–Fredenhagen’s Lemma 6.6 (§6.2, printed pp. 28–29) gives the product estimate using **microlocal scaling degree**, and §7, equations (54)–(56), applies that directional estimate to graph terms. These are not the ordinary-scaling PB required by the current free-kernel contract. The local graph lemma states its argument completely conditional on PB; the induction theorem, composition proposition, and B example state and preserve the same condition. The current status is not presented as an unconditional existence proof.

Proposed A-page placement to resolve this gap: add a precise local definition of microlocal/directional scaling degree and a product theorem for it before the graph lemma, then prove the stated free kernel has the required directional bound; alternatively, prove PB directly for the fixed Minkowski Feynman kernel from its explicit Fourier representation, including finite-jet derivatives and all resolved partial diagonals. The gap affects the planned all-data graph estimate and unconditional induction claim. It is not a retrieval failure; all sources fetched successfully, so no `source_resolution` retrieval-failure record is applicable.

The local time-ordering definition treats (W,H_F) as hypotheses and explicitly makes no free-data existence claim. This keeps the theorem’s conditional scope visible. The Euclidean B example uses the exact published Euclidean scale-anomaly item and does not identify it with a Lorentzian boundary-value product or measured probability.

## Full-text sources and harvested results

The coverage ledger contains the per-source URL, locator, read extent, supported item, limitations, disposition, searches, and fetch stamps for all 14 harvested results. The A page uses two independent full-text treatments, including full lecture notes:

| Page | Source and locator | Supported items and disposition |
|---|---|---|
| A | [Fredenhagen–Rejzner, *Perturbative algebraic quantum field theory*](https://arxiv.org/html/1208.1428), full lecture notes; §§4–7, especially §7 equations (79)–(89), and Appendix A | `def-qftx-off-shell-local-polynomial-functionals`, `lem-qftx-local-polynomial-functionals-are-microcausal`, `def-qftx-local-time-ordered-system`, `lem-qftx-finite-graph-scaling-degree`, `thm-qftx-scalar-eg-induction`, and `prop-qftx-finite-renormalization-composition` — `included`; graph-product limitations are stated explicitly |
| A | [Brunetti–Fredenhagen, *Microlocal analysis and interacting quantum field theories*](https://arxiv.org/pdf/math-ph/9903028), full 38-page paper; §§2.1, 3.1–3.2, 4, 5.1–5.2, 6.2 and 7 | Same six A items — `included`; Lemma 6.6’s microlocal-scaling scope and the paper’s deferral of finite-renormalization composition are recorded as limitations |
| B | Fredenhagen–Rejzner, §7 graph expansion and extension discussion | `ex-qftx-two-vertex-log` — `included` for graph context; the exact Euclidean coefficient comes from the published anomaly carrier |
| B | Brunetti–Fredenhagen, §§5.1–5.2 and §7, scaling degree and point extensions | `ex-qftx-two-vertex-log` — `included` for scaling/locality context; the exact Euclidean coefficient comes from the published anomaly carrier |

`source-fetch-check --stamp` fetched and stamped all four page/source records: 4/4 verified, no failed retrievals and no dropped sources. No source was represented as read beyond its recorded relevant sections.

## Cross-batch dependencies

`batch-60.cross-batch-dependencies.json` is a JSON array with 19 direct rows: two page edges and 17 item edges. Every row is `verified` after matching the actual cited carrier interface and current hash-bound readiness; no independent proof approval is implied. The page edges are A → `qftx-microlocal-products` (batch 58) and A → `qftx-analytic-prerequisites` (batch 59). Item edges cover the actual batch-58 wavefront/distribution/microcausal/star-product suppliers and the batch-59 Lorentz cocycle supplier. B → A and the `qft-ir04`/`qft-ir05` prerequisites are same-batch or out-of-run and therefore are not represented as in-run cross-batch rows. The read-only frontier collector reports 19 batch-60 consumer edges, zero unreviewed edges, zero open edges, and no orphaned reviews.

Before using these batch-58/59 suppliers, `loadStep1Record` plus `step1Decision` reported current hash-bound `ready` records for `def-qftx-distributions-on-smooth-manifolds`, `def-qftx-wavefront-hadamard`, `def-qftx-local-wavefront-set`, `def-qftx-polynomial-microcausal-functionals`, `thm-qftx-wavefront-product`, `lem-qftx-microcausal-star-product`, and `lem-qftx-finite-lorentz-cocycle-splitting`. Their exact statements and relevant proof hypotheses were inspected. Draft status or a pending precheck alone was not treated as a missing prerequisite.

The run scheduling recomputation still gives batches 58 and 59 level 0 and batch 60 level 1 with prerequisites 58 and 59. The stored rows agree, but the engine-owned input hash is stale: stored `87f02b8f2c85207d12969697d0b5a25a5bd30a3c04ad5a4ca961d619a372ab0d`; current recomputation `133106aec6407fa4799c7681c4b248301f4fef1dde0998b100d73079105ad5f0`. The shared scheduling file was left untouched for the owner to refresh after the authoring wave drains.

## Scoped checks and readiness

Final scoped checks after the last content edits:

- `content-policy`: 7 items, 0 errors, 0 warnings.
- `depcheck`: 7 selected items and 2 pages; dependency/page-cycle checks passed over the 1,263-item, 328-page closure; 0 errors, 0 warnings.
- `item-dependency-levels`: 21 items across batches 58–60, 0 errors; batch-60 levels as listed above.
- `precheck`: 5 proof-bearing items, 5 pass, 0 failed.
- `proof-contract --strict`: 5/5 proof-bearing items, 43 exact supplier citations, 25 numbered-step derivations, 10 finite checks, 0 errors, 0 warnings.
- `proof-layout`: 7 changed items, 25 steps, 0 defects.
- `rendercheck`: all 7 items and 2 pages, 0 errors, 0 warnings.
- Coverage checklist: 2 pages, 14 harvested results, 0 errors, 0 warnings.
- Source-fetch check: 4/4 source records fetch-verified; 0 documented drops.

The off-shell definition, local microcausality lemma, and time-ordered-system definition are recorded `ready` with current dependency hashes. The graph-scaling lemma, scalar induction theorem, finite-renormalization proposition, and B example are recorded `escalated` because PB has no current proof carrier and the planned unconditional graph-scaling result remains unresolved. The local time-ordering definition was clarified to set degree zero for every constant functional and to define the zero-contraction term as pointwise multiplication; its `ready` record was refreshed. The downstream escalations were not overwritten because the PB blocker is unchanged. Each consuming item and both pages are fully authored; the escalations preserve the exact conditional arguments and name the missing input. These authoring records are not independent approval.

## Owner repair of the original authoring escalation

The original authoring observations above are retained as history. The current carriers no longer assume PB. The owner added `lem-qftx-transverse-center-scaling-bound`, proving the positive ordinary-scaling bound for factors already transverse at the scaling center. Its proof includes the fixed-support Baire estimate, dyadic shell upgrade to a uniformly tempered scaled family, Fourier cone splitting, uniform regular-cone seminorm bounds and dominated-convergence product estimate. The graph lemma applies this at the full diagonal: lower-block translation invariance forces zero total block momentum, while cross-block Wightman edges contribute a pointed future sum. A finite homogeneous angular causal partition preserves the resulting scaling bounds.

Actual consumer checking exposed a second established prerequisite: independence from integration-by-parts presentations of finite-jet local functionals. The new `lem-qftx-balanced-local-functional-representatives` proves the total/relative derivative polynomial decomposition, uniqueness and support of balanced representatives, and derivative-compatible extension. The induction now constructs on those representatives, glues before extending, and checks output microcausality explicitly. The local-functional microcausality lemma's proof was also corrected to retain derivatives of diagonal deltas rather than claiming all variation derivatives can be transferred to a smooth coefficient.

Two necessary public-interface corrections are explicit. First, the scalar free-data relation now requires covector tangency to the connecting null line, with both endpoint orders and the diagonal case; its unsigned form supports both future Wightman and past Feynman branches. Second, exact scaling-degree preservation of every differentiated cancellation is incompatible with integration-by-parts independence. The new B-page counterexample constructs the massless free datum for the corrected tangent relation and computes $Ph_F=-i\delta_0$, although the punctured differentiated coefficient is zero. The final contract therefore retains exact-degree analytic extensions for independent balanced coefficients where proved and uses engineering upper bounds for total-derivative descendants and final normalizations. It does not claim the two original false requirements were achieved. All finite jets, admissible intended free data, causal factorization, covariance, field independence, formal unitarity, finite-order existence and finite local ambiguity are retained.

For already supplied time-ordered systems, the finite-renormalization comparison was strengthened: only Countable Choice from the actual contraction contract remains. The residual recursion is deterministic and its point-supported jet classification and product-test density suppliers hold in ZF; no new arbitrary graph-extension choices are made. The proposition's in-run dependency level is now 7. The original AC-bearing existence theorem remains separate and retains its AC hypothesis.

Personally inspected additional full-text source: Duetsch–Fredenhagen, https://arxiv.org/pdf/hep-th/0403213, actual 76-page PDF; the complete relevant Section 3.2 passage on printed pp. 23–25, equations (3.3)–(3.4), Proposition 2 and the derivative-compatible extension discussion were read. No reading of unrelated sections is claimed. The earlier author source-retrieval and reading history remains as originally attributed. The owner personally read Brunetti–Fredenhagen Sections 6.1–7 and the adjacent point-extension discussion; its omitted directional/free-kernel and extension-stability proofs were not imported as logical premises.

Current owned frontier: 10 items on the same two pages; 8 proof-bearing items. After the final source edits, the actual focused checks passed: precheck 8/8, strict contracts 8/8, proof-layout 39 steps with zero defects, render 12 carriers with zero errors/warnings, content policy 10 items with zero errors/warnings, focused dependency checks with zero errors/warnings, coverage 2 pages/18 harvested entries with zero errors/warnings, and 6/6 source records fetch-verified. Dependency levels on batch60 and its exact in-run supplier batches58/59 passed for 24 items on 6 pages. These are scoped mechanical checks and author/owner scientific repair evidence, not independent acceptance, a native gate, or a readiness disposition.

The same owner traced the actual current manifest closure to five additional items in batches62 and65: the anomaly obstruction (62), and the scaling-cocycle definition, cocycle law, truncated ODE and Landau example (65). Their actual supplier uses were read while their native writers remained live. No outside source was edited; final guarded consumer review and any stale prose/citation/level repairs await writer drain and Root release. Evidence, preimages, exact source/interface hashes and current checks are under `research/physics-non-fluid-129-2026-10-21-r2-owner-qft-graph-scaling/`. Existing readiness rows remain untouched for Root's current-content recording.

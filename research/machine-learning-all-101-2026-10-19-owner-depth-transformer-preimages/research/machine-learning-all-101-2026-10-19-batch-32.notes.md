# Batch 32 — ReLU approximation rates, depth separation, and linear regions

Run: `machine-learning-all-101-2026-10-19`. Batch 32 owns the A/B pair `relu-approximation-rates-and-depth-expressivity`. All carriers remain draft. Only this pair’s items, pages, and evidence were edited.

## Run state and dispatch inputs

The dispatch assigns batch dependency level 1, prerequisite batch 31, with scheduling input SHA-256 `f15570ff2489332bcce7d7fd0ff6244b0d2bfbca93064daf1ca6390b4d84bd77`. The current `batch-dependency-levels.json` embeds input SHA-256 `4c693476eaf104b5816a7b6ddafcf6f499863f314d6b6c8ab7c9cce2209a13a`; it still assigns batch 32 level 1 requiring batch 31, but the hash differs. The shared scheduling artifact was not edited.

At the latest active-run status read, autopilot remained `running` at `1-scaffold`, 40/101 pairs covered, with nothing in flight. The run-wide owner repair and recertification blocker remains. The earlier missing Fourier prerequisite no longer appears in the latest status.

The ordinary full-run Step-1 snapshot now loads. It reports 701 items, 306 ready, 493 work rows, 98 empty scaffold inventories, and `closed: false`. For batch 32, all 21 records are current: 19 `ready`, 2 `escalated`, zero missing, and zero stale-ready records. These author records are not independent approval or publication.

## Plan and design reconciliation

The complete ML-31 design at `research/plan-machine-learning-track.md` lines 316–318 and the controlling plan-spec entry (order 2758) agree on scope, conventions, warnings, examples, and proof route. No design-versus-plan-spec conflict was found. The controlling scope remains separate target-independent and target-dependent Yarotsky rates; selection-conditional approximation lower bounds; Telgarsky’s parameterized gate claim; Serra’s rank-sensitive upper and region lower bounds; and examples distinguishing depth, regions, approximation, and learning.

A mathematical conflict remains inside the planned Telgarsky claim: as stated for every positive integer `(t, alpha, beta)`, it is false. At `k=d=t=alpha=1` and `beta=N=2^22`, a single polynomial gate computes `B_N(h^5)`. The constant predicate `q_1=1` with condition `q_1>=0` is always true and has degree zero; the polynomial piece has degree at most `N`. The gate cap is `2^(1/N)<2`, so one node is allowed. On `[0,1]`, `h^5` is 32-Lipschitz, and the proved Bernstein bound gives uniform error at most `1/128`, hence L1 error below `1/64`. The full original claim is preserved and the theorem item is escalated; the A-page counterexample and B-page worked counterexample give the complete refutation.

Yarotsky Proposition 3’s printed product scale is mis-sized for the square inputs divided by `2M`: the square difference equals `xy/(2M^2)` before scaling. The local helper uses coefficient `2M^2`, three square errors, and `delta=epsilon/(6M^2)`, giving error `epsilon` and preserving exact zeros on the coordinate axes. This is documented in the item and source coverage.

The plan’s note about DeVore–Hanin–Petrova as partial context was not treated as proof evidence. Batch 32 instead read DeVore, Howard, and Micchelli’s distinct 1989 paper in full for its continuous-width and Sobolev bump arguments.

## Inventory, dependencies, levels, and decisions

Levels are recomputed from direct item edges over the live in-run manifests: zero without an in-run supplier; otherwise one plus the maximum supplier level. The direct dependencies below match item frontmatter and the batch manifest.

| Level | Item | Direct dependencies | Claim/convention and Step-1 disposition |
|---:|---|---|---|
| 0 | `lem-sobolev-taylor-grid-approximation` | `def-sobolev-space-wkp-and-its-norm`; `thm-w-one-infinity-functions-have-lipschitz-representatives`; `thm-local-smooth-approximation-in-wkp`; `def-axiom-of-choice`; `def-countable-choice`; `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`; `lem-mollification-commutes-with-weak-derivatives-in-the-interior` | Taylor approximation on a tensor grid for the real unit ball of `W^{n,∞}((0,1)^d)`, with continuous representatives and error `C(d,n)N^{-n}`. The finite-p smoothing supplier is used with `p=1`; the item explicitly converts bounded derivatives on the finite cube to `W^{n−1,1}` and derives uniform convergence from Lipschitz bounds. **ready** |
| 0 | `lem-hyperplane-arrangement-region-count` | none | Full-dimensional cells of an affine hyperplane arrangement in dimension `d`, including rank-zero and lower-dimensional edge cases; general position gives the binomial sum. **ready** |
| 0 | `lem-bernstein-polynomial-lipschitz-error` | none | Uniform Bernstein error `L/(2√N)` from the Bernoulli expectation representation, independence, variance, and Cauchy–Schwarz. **ready** |
| 1 | `def-relu-network` | `def-feedforward-neural-network` | ReLU specialization of the finite feedforward DAG: hidden ReLU units, affine outputs, and depth counted through input and output layers. Uses only batch 31’s actual network definition. **ready** |
| 2 | `def-relu-linear-region` | `def-relu-network` | Connected full-dimensional regions of fixed ReLU activation patterns under the stated region convention. **ready** |
| 2 | `lem-univariate-relu-affine-interval-count` | `def-relu-network` | At most `∏(n_l+1)` affine intervals for scalar-input ReLU networks of widths `n_l`. **ready** |
| 2 | `lem-relu-tent-iterate-depth` | `def-relu-network` | The ReLU tent iterate has `2^q` affine dyadic intervals, slope magnitude `2^q`, and the stated depth/size convention. **ready** |
| 2 | `lem-relu-folding-block` | `def-relu-network` | A standard adjacent-layer width-`n` block, `n≥3`, makes `n+1` full folds; composition multiplies interval counts. Includes the TikZ graph for `n=3`; algebraic hinge identities prove the claim. **ready** |
| 2 | `thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation` | `def-relu-network`; `def-sobolev-space-wkp-and-its-norm`; `def-axiom-of-choice`; `thm-w-one-infinity-functions-have-lipschitz-representatives`; `def-countable-choice`; `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` | Target-dependent depth-six ReLU approximation on the one-dimensional `W^{1,∞}` unit ball at size `O(1/[ε log(1/ε)])`; AC and its Countable Choice consequence are explicit. The selector, tent gate, transition strips, and endpoint error are proved. **ready** |
| 3 | `lem-relu-square-approximation` | `lem-relu-tent-iterate-depth` | ReLU square approximation with exact value zero at zero and logarithmic dependence on accuracy. **ready** |
| 3 | `lem-relu-rank-sensitive-region-recursion` | `def-relu-network`; `def-relu-linear-region`; `lem-hyperplane-arrangement-region-count` | Rank-sensitive recurrence for subsequent ReLU layers, including zero affine-image dimension. **ready** |
| 3 | `thm-telgarsky-depth-separation-l1` | `def-relu-network`; `lem-relu-tent-iterate-depth`; `lem-bernstein-polynomial-lipschitz-error` | Preserves Telgarsky’s complete all-parameter statement and supplies its direct contradiction. Its false source/plan claim needs owner reconciliation. **escalated** |
| 3 | `thm-yarotsky-approximation-lower-bounds` | `def-relu-network`; `lem-univariate-relu-affine-interval-count`; `def-sobolev-space-wkp-and-its-norm`; `thm-w-one-infinity-functions-have-lipschitz-representatives`; `def-axiom-of-choice`; `thm-sobolev-continuous-nonlinear-width-lower-bound`; `thm-borsuk-ulam-general`; `thm-borsuk-ulam-in-dimension-two`; `thm-warren-polynomial-sign-pattern-bound`; `lem-relu-network-vc-dimension-bound`; `def-countable-choice`; `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` | Retains all three planned clauses. The fixed-depth curvature lower bound is proved locally. Clauses (i)–(ii) are retained but not complete; the four absent proposed suppliers and their required hypotheses are detailed below. **escalated** |
| 4 | `lem-relu-bounded-product-approximation` | `lem-relu-square-approximation` | Corrected polarization formula on `[-M,M]^2`, error `ε`, exact zero on either axis, and logarithmic network size. **ready** |
| 4 | `thm-relu-linear-region-upper-bound` | `def-relu-linear-region`; `lem-relu-rank-sensitive-region-recursion`; `lem-hyperplane-arrangement-region-count` | Serra rank-sensitive sum for standard adjacent-layer networks; one-hidden-layer general-position attainment. **ready** |
| 4 | `cex-telgarsky-small-k-large-degree-gate` | `thm-telgarsky-depth-separation-l1`; `lem-bernstein-polynomial-lipschitz-error`; `lem-relu-tent-iterate-depth` | Self-contained high-degree polynomial-gate counterexample. It uses the complete source claim as the target to refute, not as a theorem premise. **ready** |
| 5 | `thm-yarotsky-fixed-architecture-sobolev-approximation-rate` | `def-relu-network`; `def-axiom-of-choice`; `lem-relu-bounded-product-approximation`; `lem-sobolev-taylor-grid-approximation`; `def-countable-choice`; `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration` | Target-independent depth `O(log(1/ε))` and size `O(ε^{-d/n}log(1/ε))` on the stated Sobolev ball. **ready** |
| 5 | `thm-relu-linear-region-lower-bounds` | `def-relu-linear-region`; `lem-relu-folding-block`; `lem-hyperplane-arrangement-region-count`; `thm-relu-linear-region-upper-bound` | Exact one-dimensional product for widths at least 3 and Serra’s multidimensional fold/arrangement lower bound for widths at least `3n_0`. **ready** |
| 5 | `ex-relu-tent-map-depth-vs-width` | `lem-relu-tent-iterate-depth`; `thm-relu-linear-region-upper-bound` | Shows exponential interval growth under depth and the corresponding width comparison within the stated region-count convention. **ready** |
| 5 | `ex-linear-regions-do-not-guarantee-learning` | `def-relu-network`; `lem-hyperplane-arrangement-region-count`; `thm-relu-linear-region-upper-bound` | A capacity/region count does not itself give approximation risk, training success, or generalization. **ready** |
| 6 | `ex-target-specific-vs-target-independent-approximation` | `thm-yarotsky-fixed-architecture-sobolev-approximation-rate`; `thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation`; `def-sobolev-space-wkp-and-its-norm` | Same target `f(x)=x²/2` lies in both scopes; compares the two asymptotic upper bounds only. **ready** |

Both pages contain YAML frontmatter only. A/B inventories match the manifest; both page bodies are empty. No page summary or `page_layout` field was authored.

## Supplier audit and unresolved theory

The required batch 31 page `feedforward-networks-and-universal-approximation` is present as a draft. Its actual `def-feedforward-neural-network` statement fixes finite DAG evaluation, hidden activations, identity output activations in layered MLPs, and the full finite graph convention. The current full-run Step-1 record is ready, non-owner, SHA-256 `333e7598d0a71b9c11221ce27d1949f9fe678ca9f399d687da2d7322431d3904`. Batch 32 uses only this definition, not the universal-approximation theorem.

The Sobolev supplier audit checked the actual definitions and proof hypotheses: the `W^{k,∞}` maximum norm; the real-valued `W^{1,∞}` Lipschitz representative on open bounded convex sets under AC; the local smoothing theorem’s `1≤p<∞` restriction; the commutation identity for interior mollifications; and the full proof that AC supplies Countable Choice. The Taylor-grid argument chooses `p=1`, and all AC/CC dependencies are declared. The Borsuk–Ulam statement presently available in the library is only `S²→R²`; its scope was read, and it does not cover arbitrary `S^W→R^W`.

The four unavailable lower-bound suppliers remain open:

- `thm-sobolev-continuous-nonlinear-width-lower-bound`: clause (i) needs the full continuous parameter-selection lower bound on the `W^{n,∞}` unit ball for all `d,n≥1`, with the stated uniform metric and selector/decoder hypotheses.
- `thm-borsuk-ulam-general`: the width argument needs Borsuk–Ulam for every `W≥1`, maps `S^W→R^W`.
- `thm-warren-polynomial-sign-pattern-bound`: clauses (ii) need the complete sign-pattern bound for `m` real polynomials of degree at most `D` in `W` real parameter variables, including its parameter range and zero-sign convention.
- `lem-relu-network-vc-dimension-bound`: clauses (ii) need complete ReLU VC bounds `VC≤CW²` and `VC≤CL²W log W` under explicit architecture, depth, bias, and parameter-count conventions, followed by the local metric-entropy/shattering reduction.

These exact unresolved IDs and direct edges are in the dependency inputs and cross-batch records. No dependent claim was omitted or weakened.

## Sources and reading evidence

Two independent full-text treatments were used on the A page, plus the primary papers and the Serra supplement. Full locators, harvested results, dispositions, and retrieval records are in the coverage JSON.

- Yarotsky, *Error bounds for approximations with deep ReLU networks*, complete paper; §2, Propositions 2–3, Theorems 1–6 and full proofs, especially §§3.1–3.3, 4.1–4.2, 4.4: <https://arxiv.org/pdf/1610.01145>.
- Sullivan, *Deep Learning Theory*, complete relevant §§2.1, 5.1–5.3, 17.3. The notes’ §5.3 is a sketch for the general Sobolev rate and §17.3 cites but omits Warren’s proof; neither is treated as a complete proof: <https://mjt.cs.illinois.edu/dlt/index.html>.
- DeVore, Howard, and Micchelli, “Optimal nonlinear approximation,” complete 10-page paper; Theorem 3.1 proof and Theorem 4.2 Sobolev bump-space argument, printed pp. 472–477: <https://gwern.net/doc/cs/algorithm/1989-devore.pdf>.
- Telgarsky, “Benefits of Depth in Neural Networks,” complete paper; Theorem 1.1, semi-algebraic gate definition, and complete §3.4 proof: <https://proceedings.mlr.press/v49/telgarsky16.pdf>.
- Serra, Tjandraatmadja, and Ramalingam, “Bounding and Counting Linear Regions of Deep Neural Networks,” complete paper; Lemma 5, Theorem 1, Theorems 7–8 and region definitions: <https://proceedings.mlr.press/v80/serra18b/serra18b.pdf>.
- Serra et al., official supplement, all ten pages inspected, including Appendices C–E: <https://proceedings.mlr.press/v80/serra18b/serra18b-supp.pdf>.
- Lorentz, *Bernstein Polynomials*, was not read. Its direct archive PDF endpoint returned HTTP 503 on the initial attempt and all five recovery retries for both coverage entries. Alternate-source searches are preserved. The complete local Bernstein proof and its counterexample application are recorded under `source_resolution.alternatives`; the already fetched Sullivan §5.1 provides an independent treatment. Both source entries are documented drops, not source-reading claims.

`source-fetch-check --stamp` reports 10/12 entries fetch-verified, 0 newly stamped, and 12/12 resolved with the two documented Lorentz drops.

## Contracts and scoped validation

Final scoped results after the last carrier edits:

- Precheck: 21 files, 19 proof-bearing items passed, 2 definitions not applicable, 0 failed.
- Proof layout: 21 items, 49 steps, 0 defects.
- Proof contracts, strict: 21/21; 49 actual steps and 39 fact/supplier citations; 0 errors and 0 warnings.
- Citation fidelity: 39 citations checked; 0 missing quotations and 0 widening candidates.
- Statement-first: 21 items, 0 defects; the A/B page bodies are empty.
- Rendercheck: 23 files passed, including both pages and the TikZ-bearing fold item.
- Content policy: 21 items, 0 errors and 0 warnings.
- Coverage checklist: 2 pages, 43 harvested results, 0 errors and 0 warnings.
- Focused depcheck: dependency closure 1,210 items and 250 pages; the only four errors are the four absent suppliers listed above on `thm-yarotsky-approximation-lower-bounds`. No other scoped dependency error or warning.
- Whole-run item dependency check reports 98 unrelated empty scaffold inventories and no Batch 32 item-level mismatch. The independently recomputed Batch 32 levels are listed above and match item frontmatter and manifest.
- Batch-level dependency check reports the shared schedule artifact stale because its input hash differs from the dispatch hash; its stored level for batch 32 remains 1 with prerequisite batch 31. Shared scheduling metadata was left untouched.

## Handoff

Batch 32’s 21 draft carriers, two frontmatter-only pages, dependency manifest, 28 direct cross-batch/page dependency rows, dependency inputs, source coverage/resolution, proof contracts, and 21 Step-1 records are complete. The author-side Step-1 snapshot has 19 ready items and 2 escalations: the incomplete approximation lower-bound clauses and the refuted all-parameter Telgarsky claim. The run itself remains held on owner repair/recertification and many unrelated unfinished manifests. No published content, another batch’s files, shared plans, verdicts, or engine state were changed.

# Step 3a reader report — batch 55

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: `55`

## Opened inventory

### Assigned pages

- `qftx-spectral-networks` — draft A page; frontmatter only, `page_layout: compact-v1`, one item, and prerequisites `qftx-physical-hall-bps-wall-crossing` and `qftx-defects-and-topological-operators`.
- `qftx-spectral-networks-examples` — draft B page; frontmatter only, `page_layout: compact-v1`, one example, and prerequisite `qftx-spectral-networks`.

Both page bodies are empty. The inventories, page classifications, companion relationship, and status agree with the batch manifest. Neither page needs a summary.

### Assigned items

- `def-qftx-spectral-network-data` — read with its direct suppliers and the relevant published trace and spectral-theory chain.
- `ex-qftx-t3-finite-web-index` — read after its assigned definition; checked the full verification, facts, citations, remarks, and TikZ diagram.

### Item dependencies and related context opened

- Direct item suppliers: `def-aqft-topological-defect` (draft, batch 36), `def-countable-choice`, `def-trace-class-operator`, `def-trace-of-a-trace-class-operator`, and `thm-trace-is-absolutely-convergent-and-basis-independent` (published mathematical imports).
- Relevant trace/countable-choice chain: `def-choice-function`, `def-absolute-value-and-singular-values-of-a-compact-operator`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-singular-value-decomposition-for-compact-operators`, `lem-positive-square-root-of-a-compact-positive-operator`, `lem-nuclear-series-characterizes-trace-norm`, `thm-norm-limit-of-compact-operators-is-compact`, and `thm-complete-and-totally-bounded-implies-compact`.
- Page prerequisite context: `qftx-defects-and-topological-operators`, `qftx-physical-hall-bps-wall-crossing`, `qftx-defect-fusion-mathematics`, `qftx-susy-algebra-and-multiplets`, `qftx-bps-indices`, `qftx-susy-moduli-and-dualities`, `qftx-hall-bps-wall-crossing`, `countability-and-uncountability`, and `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`.
- The relevant entries in `research/math-imports.json` were checked. The current `items/def-trace-class-operator.md` bytes match its pinned SHA-256 `b3a8ca3ab9dc51e63e689e8e75d5e96b01d7e8b785327ff828d08b9aaa8bd48d`.

### External source sections opened

- Kidwai and Tahar, [*Spectral Networks, Finite Webs, and the T3 Cubic Differential*](https://arxiv.org/html/2610.23752v1), arXiv version 1 dated 16 October 2026: §2.1's cubic flat structure and trajectories; §2.2's network and double-wall definitions; §2.3's finite-web and canonical-lift rules and Lemma 2.7; §3.1's rational-slope lemmas and Corollary 3.8; the main network conclusion and Appendix A phase comparison. The source distinguishes its geometric network from supplied soliton data.
- Gaiotto, Moore, and Neitzke, [*Spectral Networks*](https://arxiv.org/pdf/1204.4824): §2 class-S curve and defect setup; §§3.1–3.3 BPS, soliton, and framed-index conventions; §3.5 sign ambiguity; §§4–5 network construction and source limitations.
- Kineider, Kydonakis, Rogozinnikov, Tatitscheff, and Thomas, [*Spectral Networks: Bridging Higher-Rank Teichmüller Theory and BPS States*](https://arxiv.org/pdf/2412.03588v3), Chapter 22: Eq. 22.7 second-helicity trace; Eq. 22.12 unrefined framed trace and its sign/lift qualifications; §§22.1.1–22.1.3 finite webs; §22.3.1 defect, soliton, and framed-charge conventions.

## Review findings and edits

### Repaired in assigned items

- In `def-qftx-spectral-network-data`, the original sentence called the finite-eigenspace basis selection the *exact* use of countable choice in the imported trace suppliers. The inspected dependency chain has additional explicit uses. The revised definition identifies the spectral theorem's countable-union and basis-selection uses, the SVD's basis selections, and the positive-square-root compactness route through the norm-limit and complete-plus-totally-bounded theorems. It keeps `ACω` as a mathematical premise and does not assign it physical status. Evidence: the proof of `thm-spectral-theorem-for-compact-self-adjoint-operators` uses `thm-countable-union-of-countable` and selects finite-dimensional eigenspace bases; the SVD has the corresponding basis selection; the positive-square-root proof invokes norm-limit compactness; the norm-limit proof invokes complete-plus-totally-bounded compactness, whose step 3.1 chooses one listed finite net for each `n`.
- The same definition now states the complete insertion conditions supplied by `def-aqft-topological-defect`: a surface-defect support is a closed embedded two-manifold without boundary, with model-supplied insertion data. The interface arrangement is described as one stratified defect network with two half-plane strata and a shared line stratum carrying model-supplied junction/interface data; the two open half-planes are not treated as separate closed insertions. The supersymmetry count and phase convention follow GMN §3.3.
- The refined framed trace now has a model-specified admissible parameter set `Y_T`, a functional-calculus convention for `(-y)^J`, and the trace-class condition for each allowed `y`. The unrefined specialization is stated only when `1` is in that set. The sign discussion now distinguishes the unrefined sign ambiguity from the additional `y`-dependent change under a shift of the refined spin generator. Evidence: GMN Eq. (3.7), footnote 12, and §3.5; LNM Chapter 22 Eq. (22.12) and its sign/lift discussion.
- In `ex-qftx-t3-finite-web-index`, the framed-index convention and Fact [A2] now restrict `y` to the model-supplied set and carry through its power convention. The example still computes no physical index.
- Updated the batch-55 proof contract: its countable-choice boundary now records the explicit mathematical premise and supplier uses; citation excerpts for the example now match the exact supplier statements they support.

The `def-qftx-spectral-network-data` repair was consumer-checked against its only current item consumer, `ex-qftx-t3-finite-web-index`; the consumer changes above preserve its uses. No dependency edges, page inventories, or imported mathematical bytes were changed. Neither changed item contained a stale `verification.judge` record to remove.

### T3 calculation and diagram review

The explicit curve, period coordinate, branch-point coordinates, slope `(2,1)`, Eisenstein determinant `3`, one-edge finite-web length conversion, and period of `p - τ(p)` agree with the displayed calculations. The direct source proof of the ramified rational-slope case supports the branch-to-branch saddle connections; the item's own cellular and integral arguments establish the stated explicit geometric cycle without identifying it with the source's canonical lift. For the title's claim, source Lemma 2.7 separately states and proves that canonical lifts of finite webs have nonzero period for cubic differentials with at most simple zeros; the T3 differential has no zeros. The decimal values were checked from `β = Γ(1/3)^2/Γ(2/3)`: `β ≈ 5.2999162509`, `c ≈ 9.1797242223`, and `c/π ≈ 2.9219969724`. These are calculated geometric approximations, not measurements or physical masses.

The TikZ diagram uses the stated unit-lattice coordinates: `A=(0,0)`, `B=(2+ω)/3`, and `C=(1+2ω)/3`; the segment is the indicated lift `p`. Its explanation correctly says the drawn lengths are not the `|λ_geom|` lengths. No diagram repair was needed, and the proof does not rely on the diagram.

## Page verdicts

- `qftx-spectral-networks`: **pass**. Frontmatter-only, inventory and prerequisites consistent, compact layout retained; its assigned definition is repaired as described.
- `qftx-spectral-networks-examples`: **pass**. Frontmatter-only, example inventory and prerequisite consistent, compact layout retained; the assigned example proof and diagram check out.

## Remaining defects and blocker

No confirmed defect remained in an uneditable assigned or read-only dependency. No workflow blocker was found. Page-level prerequisite files were checked for identities, inventories, status, and ordering context; mathematical items within those pages were not treated as logical suppliers unless they occurred in the assigned item's actual item-dependency chain.

## Checks and coverage limit

- Reflow: both changed items reported unchanged; after the final definition wording refinement, `def-qftx-spectral-network-data` reflow again reported unchanged.
- Precheck: both changed items returned clean; after the final definition wording refinement, `def-qftx-spectral-network-data` precheck again returned clean. The source verification field remains `pending`; no judge or acceptance stamp was added.
- Final proof layout: `node tools/physics-support/proof-layout.mjs items/def-qftx-spectral-network-data.md items/ex-qftx-t3-finite-web-index.md` reported `2 items, 8 steps, 0 defects`.

The review checked the complete assigned items and the transitive trace/SVD/countable-choice arguments needed for the disputed choice-accounting statement. It did not independently re-audit every foundational item in the wider mathematical import closure below those published suppliers; no blanket certification of that wider closure is claimed. The mathematical imports and other batches remain read-only.

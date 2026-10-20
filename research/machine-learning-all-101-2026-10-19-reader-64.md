# Step 3a reader report — batch 64

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Label: `reader-64`

## Opened inventory

Assigned pages reviewed:

- `normalizing-flows-and-exact-density-models` — `library/machine-learning/normalizing-flows-and-exact-density-models.md`
- `normalizing-flows-and-exact-density-models-examples` — `library/machine-learning/normalizing-flows-and-exact-density-models-examples.md`

All five assigned items were read in supplier-before-consumer order:

1. `def-normalizing-flow`
2. `thm-change-of-variables-density-for-diffeomorphic-flow`
3. `thm-triangular-flow-universal-density-representation`
4. `ex-affine-coupling-triangular-jacobian`
5. `ex-singular-data-support-limitation`

The 19 direct published item suppliers used in these claims were opened: `def-c-one-map-and-local-inverse`, `def-measure-with-density`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `def-countable-choice`, `def-jacobian-determinant-of-a-c-one-map`, `def-jacobian-matrix-and-gradient`, `def-determinant-of-a-square-matrix`, `cor-determinant-is-a-polynomial-in-the-matrix-entries`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-borel-sets-are-lebesgue-measurable`, `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets`, `thm-chain-rule-for-total-derivatives`, `thm-determinant-multiplicative`, `thm-determinant-of-a-triangular-matrix`, `thm-euclidean-inverse-function-theorem`, `thm-lebesgue-measure-of-a-box-of-every-kind`, `thm-continuous-preimages-of-borel-sets-are-borel`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, and `cor-integral-over-a-null-set-vanishes`.

The three page-level prerequisite pages were also opened: `fubini-and-change-of-variables`, `matrix-differentiation-and-first-order-spectral-perturbation`, and `product-measures-and-the-fubini-tonelli-theorems`. The run's batch-64 manifest, dependency-inputs, cross-batch-dependencies, proof contracts, source coverage, author notes, and dependency-order task were consulted as evidence. Live status was recomputed from `.autopilot/machine-learning-all-101-2026-10-19`; `git log --oneline -12` was checked.

I read the cited [Papamakarios et al. survey](https://arxiv.org/pdf/1912.02762v1) at §2.1 (equations 2–6, PDF pp. 2–3), §2.2 (equations 7–11, PDF pp. 3–4), §3.1.1 (PDF pp. 13–14), and §§5.4–5.5 (PDF pp. 34–36), and [Sheldon’s complete seven-page lecture note](https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf), including slides 9–18 on change of variables and flows and slides 21–24 on triangular Jacobians and Real-NVP. The survey’s §2.2 uses a nonzero Jacobian and the inverse function theorem as a brief global-invertibility argument; the assigned theorem does not rely on that step and supplies its own recursive global inverse proof.

## Review and repair

Confirmed defect repaired (`missing-hypothesis`), at `def-normalizing-flow`, `## Definition`, the sentence defining `\(\mu_X\)`: it assigned the pushforward value `\(\mu_X(B)=\mu_U(T^{-1}(B))\)` for every Borel `B` without stating the Countable Choice condition or supplying the measurability prerequisites. Here `\(\mu_U\)` is defined only on Lebesgue-measurable sets. The current published suppliers make the gap explicit: the Borel-to-Lebesgue theorem assumes Countable Choice, and the C¹-diffeomorphism measurability lemma then sends such measurable sets to measurable sets under the inverse map. Without those prerequisites the displayed value need not belong to the stated domain of `\(\mu_U\)` in this library’s dependency system.

I repaired the Definition by making Countable Choice explicit for the model-measure construction, explaining why `\(T^{-1}(B)\)` is Lebesgue measurable, and adding `def-countable-choice`, `thm-borel-sets-are-lebesgue-measurable`, and `lem-c-one-diffeomorphisms-map-lebesgue-measurable-sets-to-lebesgue-measurable-sets` to `deps` and `Definition references`. The base-density clause and the definition of the flow map remain unchanged. The four assigned consumers already assume Countable Choice; their statements and arguments therefore remain valid. I updated their `def-normalizing-flow` proof-contract excerpts, and changed the definition’s `nonempty-choice` contract evidence. `def-normalizing-flow` had no `verification.judge` record to remove.

Other mathematical review:

- The inverse-Jacobian density formula checks out: the inverse change-of-variables supplier is applied to `T^{-1}` and the indicator of `T^{-1}(B)`, and the measurability argument establishes a density version. The forward and inverse log-Jacobian sums follow from the chain rule, determinant multiplicativity, and nonvanishing derivatives of the diffeomorphism stages.
- The triangular construction checks out under its strong stated hypotheses. The CDF map has lower-triangular derivative with diagonal entries `q_i>0` and determinant `p`; recursively solving each strictly increasing bijective slice gives a unique global inverse. The inverse function theorem then makes that global inverse C¹, and the density theorem maps the unit-cube density to `p`.
- The affine coupling example has the stated inverse and Jacobian determinant `1`, so its transformed density is `p_U(x,y-x)` as a version.
- The singular-support example defines a Borel image measure with mass one on `[0,1]×{0}`. That segment is a Lebesgue-null degenerate box, so every flow output with a Lebesgue density assigns it mass zero; the nonrepresentability conclusion follows.
- No TikZ/tikzcd or other diagrams occur in the assigned items, and none is needed for these arguments. Proofs are independent of diagrams.
- Assigned statements/definitions/examples are uninterrupted by hyperlinks; their links are in the required immediately following reference sections. Both page bodies are empty and no page summary was authored.

No other defect remained in the assigned items or pages. No item consumer text or page prose required repair.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/def-normalizing-flow.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-normalizing-flow.md` — 0 checked, 0 failing (a definition has no phase proof).
- The four updated contract excerpts were checked against the current Definition text; the contract JSON parses.
- `node tools/proof-layout.mjs items/def-normalizing-flow.md` — 1 item, 0 steps, 0 defects.

## Page verdicts

- `normalizing-flows-and-exact-density-models` — **pass**. Draft status and inventory match the batch manifest; its three listed items are the reviewed definition and two theorems, `examples` is empty, `page_layout: compact-v1` is present, and the body is empty.
- `normalizing-flows-and-exact-density-models-examples` — **pass**. Draft status and inventory match the batch manifest; its two listed examples are the reviewed items, `items` is empty, `page_layout: compact-v1` is present, and the body is empty.

## Blockers and coverage limits

There is no remaining mathematical blocker specific to batch 64. The latest live run status, recomputed at `2026-10-19T12:25:41.986Z`, is `PAUSED`, has no workers in flight, and still lists batch 64 as missing from `3a-read`; this report and its findings file have been written but the status has not yet credited them. The status retains unrelated `3a-split` failures for batch 51 and `3a-collect` failures for batch 36. Separately, `batch-64.dependency-inputs.json` records `scheduling_hash_conflict: true`: dispatch input `2775ee7b7522a8bc07497ecc17f4260d336375989323c6e6a673e070ba573ea4` differs from dependency-artifact input `9deb0750cbd2ef918a48bd9b088ce55ee5adc9cbdbd0b870f6dba6c157e5e655`. Both records give batch 64 level 0 with no prerequisite batches; I did not edit owner-controlled scheduling artifacts.

I checked every assigned item, page, direct logical supplier, and cited source passage needed for these claims. I did not independently re-audit every remote transitive proof below the published suppliers.

# Step 3a reader report — batch 19

Run: `numerical-analysis-remaining-71-2026-10-17`  
Scope: batch `19` (`fast-multipole-expansions-and-error` and its examples page)

## Opened inventory

Assigned pages:

- `fast-multipole-expansions-and-error` — `library/numerical-linear-algebra-and-approximation/fast-multipole-expansions-and-error.md`
- `fast-multipole-expansions-and-error-examples` — `library/numerical-linear-algebra-and-approximation/fast-multipole-expansions-and-error-examples.md`

Assigned items, reviewed in dependency order:

- `def-finite-planar-quadtree-fmm-pair-lists`
- `def-three-dimensional-spherical-harmonic-space`
- `alg-planar-laplace-fmm-fixed-order`
- `lem-planar-fmm-pair-lists-partition-off-diagonal-pairs`
- `lem-three-dimensional-laplace-spherical-harmonic-addition-theorem`
- `lem-planar-fmm-multipole-local-translation-identities`
- `thm-planar-fmm-operation-count-under-linear-list-assumptions`
- `alg-three-dimensional-laplace-cluster-expansion`
- `thm-planar-fmm-global-potential-force-error`
- `thm-three-dimensional-laplace-expansion-error-and-work`
- `ex-fmm-clustered-points-require-depth-sensitive-work`
- `ex-fmm-two-separated-charge-clusters`
- `ex-fmm-near-far-potential-and-force-error`

The A-page's page-level prerequisites were also opened for context: `hierarchical-low-rank-matrices-and-error-propagation` and `computed-fast-transforms-and-convolution`. Their constituent items were not needed to verify an assigned claim. The batch-19 proof contract was opened for the three repaired items. The run manifests were checked for consumers of the repaired theorem statements.

## Review and edits

- `thm-planar-fmm-operation-count-under-linear-list-assumptions`: the original unit-cost model counted arithmetic, copies, and cell-pair inspections, but its algorithm also evaluates `L_CD(δ)` for each far pair and uses the fixed logarithm value `L_ji` for each direct near pair. I added one evaluation of a prescribed logarithm branch to the operation model and counted those evaluations in proof steps 1.2 and 1.3. The existing `K(p+1)^2` and `J` terms absorb these costs. The statement now describes the resulting bound as total counted work. Its proof contract was updated, including the F3 statement quote used by the clustered-tree example.
- A-page `fast-multipole-expansions-and-error`: updated the work summary to name arithmetic, prescribed logarithm evaluations, and list processing, matching the theorem's cost model.
- `thm-three-dimensional-laplace-expansion-error-and-work`: in proof step 3.1, `r^{-1}(a/r)^{p+1}/(1-a/r)` equals `a^{p+1}/(r^{p+1}(r-a))`; the previous denominator had `r^p`. Corrected the identity. The denominator is nondecreasing for `r>a`, so the monotonicity argument and stated region bound follow. Updated the proof contract's step 3.1 derivation.
- `ex-fmm-clustered-points-require-depth-sensitive-work`: proof step 2.1 attributed the linear-size condition to F2, the algorithm. Changed the argument to use F2 for path visits and F3 for the theorem's uniform node-count hypothesis. Updated the proof contract's step 2.1 derivation.

No edited item had a `verification.judge` record to remove. No defect remains unedited.

### Mathematical source checks

- NIST DLMF §14.30(iii), Eq. 14.30.9, states the spherical-harmonic addition theorem with factor `4π/(2ℓ+1)`; swapping the two sphere arguments gives the convention in the assigned lemma. DLMF §14.7(iv), Eq. 14.7.19, gives the Legendre generating function for `-1<t<1` and `|r|<1`. The assigned proof handles the endpoint cases `t=±1` as well. [DLMF §14.30.9](https://dlmf.nist.gov/14.30.E9), [DLMF §14.7.19](https://dlmf.nist.gov/14.7.E19).
- O'Neil, *Integral Equations and Fast Algorithms*, §4.1, Eqs. (4.6)–(4.8), gives the 3D Laplace multipole expansion and the geometric truncation tail `Σ_j |q_j|/(r-r_B)·(r_B/r)^{p+1}`. This agrees with the assigned bound after setting `r_B=a`. [Course notes PDF](https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf).
- Greengard and Rokhlin, *A Fast Algorithm for Particle Simulations*, §2, Lemma 2.2 and Theorem 2.1, and §2.1, Lemmas 2.3–2.5, cover the logarithmic multipole series and translation identities used as background. Their complexity table on p. 339 is for their stated tree/list setup. [Paper PDF](https://web.stanford.edu/class/cme324/classics/greengard-rokhlin.pdf).
- Demmel, CS267 Lecture 25, “Complexity of the Fast Multipole Method,” derives linear work from bounded work per node and a node count proportional to the particle count. The assigned theorem makes the relevant tree and list count hypotheses explicit. [Lecture notes](https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html).

## Page verdicts

- `fast-multipole-expansions-and-error` (A): pass after the cost-summary edit. Its planar claims track the assigned decomposition, error bounds, and explicit work assumptions; its 3D summary stays limited to a single cluster.
- `fast-multipole-expansions-and-error-examples` (B): pass; no edits. The cluster-depth example, separated-cluster calculation, and near/far calculation are consistent with their stated constructions and bounds.

## Validation and remaining scope

- Reflow: all three changed items reported unchanged.
- Precheck: all three changed items passed.
- Strict proof-contract check: 3/3 edited items checked, 0 errors, 0 warnings.
- Final proof-layout check: 3 items, 11 steps, 0 defects.
- The current run manifest lists three batch-57 consumers of the 3D expansion theorem. Its Statement was unchanged, so no consumer statement/definition maintenance was triggered; those out-of-batch carriers were not opened.
- Uneditable defects: none. Blocker: none.

Coverage note: the assigned 13 items and both assigned pages were reviewed, along with the two page-level prerequisite summaries. No unresolved mathematical uncertainty remains. The constituent items of those prerequisite pages and the out-of-batch batch-57 consumers were not audited as part of this assignment.

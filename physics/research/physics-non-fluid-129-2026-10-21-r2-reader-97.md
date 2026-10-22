# Reader report — batch 97

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: Step 3a reader  
Scope: batch `97`

## Opened inventory

### Pages

| Page | Current carrier | Review |
|---|---|---|
| `csm-frontier-planar-critical-point` (A) | `library/classical-statistical-mechanics/csm-frontier-planar-critical-point.md` | Draft page; its 18-item inventory agrees with the current batch manifest. The body is empty, as required for the current frontmatter-only page layout. It retains its four declared page prerequisites. No page defect found. |
| `csm-frontier-planar-critical-point-examples` (B) | `library/classical-statistical-mechanics/csm-frontier-planar-critical-point-examples.md` | Draft companion; its one example agrees with the manifest, and its sole page prerequisite is the A page. The body is empty, as required by the current layout. No page defect found. |

I also opened the four page-level prerequisite carriers: `csm-frontier-fk-loop-algebra`, `csm-frontier-quantitative-dlr`, `graphs-walks-and-connectivity`, and `plane-graphs-euler-and-the-five-colour-theorem`. The A-page's loop-algebra and quantitative-DLR requirements are retained as page relationships; the reviewed proofs do not use their loop-transfer or high-temperature uniqueness conclusions. The two mathematical pages provide graph and planar-topology context.

### Item prerequisites opened

I opened the exact current carriers for the direct prerequisites used by the batch: `def-csm-frontier-finite-potts-fk` and `thm-csm-frontier-edwards-sokal` (current-run draft suppliers in batch 90); `def-multigraph-loop-and-digraph`, `def-plane-graph-face-and-boundary`, `def-plane-dual-multigraph`, `cor-euler-formula-for-disconnected-plane-graphs`, `lem-plane-edge-face-incidence`, and `thm-polygonal-jordan-curve` (published mathematical suppliers); `lem-csm-lattice-product-and-measure-compactness` and `def-countable-choice`; and `def-tdmath-measure-integral`, `thm-tdmath-monotone-convergence`, and `lem-tdmath-fatou`. I checked the relevant statements and proofs at the uses below. No prerequisite defect affecting an assigned consumer was found.

### Assigned items

All 19 items in the batch manifest were opened. The following is the dependency-ordered review inventory; “no defect found” is a reader disposition, not a judge or acceptance stamp.

| Item | Review |
|---|---|
| `lem-csm-frontier-grid-crossings-intersect` | Loop erasure, separation by the polygonal Jordan curve, and the conclusion that grid-edge intersections are shared vertices are justified. No defect found. |
| `lem-csm-frontier-finite-box-cube-max-fiber-influence` | The finite-box integration rules, two-point inequality, tensorized noise contraction, dyadic approximation, endpoint-fiber bound, and final influence estimate were checked. The proof supplies the finite-box influence input locally; no BKKKL theorem is silently assumed. No defect found. |
| `def-csm-frontier-fk-real-boundaries` | Finite multigraph data, boundary quotient, component count, real-$q$ FK weights, positive normalizer, and the finite integer-$Q$ Potts/FK normalization relation are explicit and consistent with the opened suppliers. No defect found. |
| `def-csm-frontier-fk-infinite-volume-states` | The finite boxes, extensions outside the box, cylinder convergence, free/wired boundary partitions, percolation event, and critical-threshold convention are stated. Critical free/wired equality is expressly excluded from the definition. No defect found. |
| `lem-csm-frontier-fk-fkg-spatial-markov` | The component-count lattice inequality covers quotient loops and parallel labels; the conditional law and edge probability formula follow from the weights; the finite association induction and coupled heat-bath comparison establish the stated order. No defect found. |
| `lem-csm-frontier-fk-planar-duality` | The dual component/face count follows by deleting edges and Euler's formula, including bridges and disconnected spanning subgraphs. The weight ratio uses the stated free exterior-face convention and is configuration-independent. No defect found. |
| `lem-csm-frontier-fk-free-wired-limits` | Boundary comparison gives the two monotone families; finite inclusion-exclusion gives atom limits; consistency and the Countable Choice extension hypothesis are recorded. No defect found. |
| `lem-csm-frontier-fk-torus-cellular-duality` | The labelled primal/dual isomorphism, thin-quotient incidences, homology dimensions, complementary component identity, likelihood ratio, and event bounds were checked. No defect found. |
| `lem-csm-frontier-fk-cylinder-pressure-comparison` | The free pressure limit, convexity argument, countable exceptional set, free/wired comparison, and numerical one-arm limit are separated from countably additive measure extension. The derivative squeeze uses the stated edge-orbit counts and order. No defect found. |
| `lem-csm-frontier-fk-mixed-reflection-gluing` | I traced the finite searches and their query sets, the crosscut/tree construction retaining separate terminal classes, the finite mixed-boundary dual count, and the conditional comparison on unqueried labels. The auxiliary disk is not assumed to embed in the torus; the actual retained labels are checked in the stated wider rectangle. No defect found. |
| `thm-csm-frontier-fk-torus-rsw` | The torus coordinate map, self-dual crossing estimate input, bounded-size tiling for arbitrary aspect ratio, and separate target-rectangle embedding condition are consistent. No defect found. |
| `lem-csm-frontier-fk-influence-threshold` | The increasing sequential encoding has the finite FK law as its pushforward; the reordered conditional couplings compare endpoint sections with conditional influences. The finite-box influence result is applied with the stated $|E|\ge2$ hypothesis. No defect found. |
| `lem-csm-frontier-fk-wired-annuli-and-numerical-threshold` | The finite differential/Hamming inequalities, exterior-measurable outer-circuit selection, wired supercritical annulus chain, free/wired dual-parameter comparison, and disjoint dual-circuit Hamming lower bound were checked. Limits are numerical cylinder limits where claimed; no critical-parameter value is asserted. No defect found. |
| `lem-csm-frontier-fk-independent-cluster-animal-envelope` | The displacement-list count, dyadic tail summability, deterministic large-animal constant, and envelope transfer are justified under the stated probability-space and moment assumptions. No independent envelope variables are presumed. No defect found. |
| `lem-csm-frontier-fk-subcritical-exponential-decay` | Countable Choice is carried for measure extension and kernel selection. The cluster exploration coupling, animal-envelope estimate, Hamming-distance growth, and transfer to arbitrary cylinder-limit states retain the stated hypotheses. No defect found. |
| `lem-csm-frontier-fk-crossing-amplification` | The free/wired Borel-law percolation statements follow by comparison at distinct parameters; the subcritical decay input yields vanishing percolation and the threshold infima. No critical-measure uniqueness is asserted. No defect found. |
| `thm-csm-frontier-fk-square-critical-point` | Each threshold and subcritical conclusion follows from the crossing-amplification supplier with Countable Choice stated. The statement does not claim behavior at criticality. No defect found. |
| `thm-csm-frontier-potts-square-critical-temperature` | The pinned finite joint law has `Q^(k_xi(A)-1)` admissible spin assignments; its constant factor cancels. The numerical limit and parameter conversion establish the stated inverse temperature. No defect found. |
| `ex-csm-frontier-ising-coupling-conversion` | The indicator identity gives the constant energy shift and the factor-of-two coupling conversion; finite probabilities and critical infima are preserved. Its external source locator was corrected as recorded below. |

## Edit and validation

I corrected two inaccurate Beffara–Duminil-Copin source locators:

- In `thm-csm-frontier-potts-square-critical-temperature`, the old locator pointed to Theorem 3 as support for all integer Q >= 2. The retrieved article states Theorem 3 only for q > 2. The revised locator points to Theorem 1 (q > 1, including Q = 2) and the introduction's q = 2 Ising discussion, and records Theorem 3's actual restriction.
- In `ex-csm-frontier-ising-coupling-conversion`, the old locator called Theorem 3 a q = 2 result. The revised locator points to the introduction's q = 2 Ising discussion and notes that Theorem 3 assumes q > 2.

Evidence: the submitted article's introduction identifies q = 2 with the Ising case and says its critical value was already known; its Theorem 3 is explicitly for integer q > 2. Its Theorems 1 and 2 assume q > 1. Source: Beffara and Duminil-Copin, [submitted article](https://archive-ouverte.unige.ch/unige:11981), pp. 1–3 (PDF pp. 2–3). These source-scope limits do not leave a proof gap in the current batch: the assigned local FK and Potts arguments cover the q = 2 case directly and state q >= 1 only with their complete local proof chain.

No proof contract needed a mathematical-step change: the two edited items' source locators are not premises in their contract derivations, and their proof-step maps remain unchanged. Neither item had a `verification.judge` record to remove. Reflow reported both items unchanged; precheck passed for both; the final batched proof-layout check reported 2 items, 5 steps, 0 defects.

No TikZ or tikzcd diagrams occur in the 19 assigned items or the two assigned pages.

## Defects not edited

None identified in the assigned items, assigned pages, or direct prerequisite statements needed for the reviewed claims. The two citation defects above were repaired in assigned in-flight items and therefore are not unedited findings.

## Page verdicts and blocker

- `csm-frontier-planar-critical-point`: no page defect found; draft inventory and prerequisites match the manifest, with no summary prose in the current frontmatter-only layout.
- `csm-frontier-planar-critical-point-examples`: no page defect found; companion relation and example inventory match the manifest.

There is no mathematical blocker to this reader review. The current batch notes separately record stale Step-1 readiness hashes for several carriers after later edits and say an owner refresh remains required; that owner-controlled workflow hold is not repaired or adjudicated here.

## Coverage note

The complete assigned page/item inventory and the direct item suppliers used in the proofs were opened. All 17 proof-bearing contract step inventories match their current item step numbers. I independently checked the cited Beffara–Duminil-Copin theorem scope and the exact q = 2 locator correction; I did not independently reread every proof section of that external article. The assigned local proofs were reviewed directly, and this report does not treat the earlier source-reading record or author dispositions as verdicts.

# Step 7 adjudication — group d

Run: `phase-2-next-20`  
Owned batch: 6  
Pages: `quantitative-hyperbolic-geometry-toolkit`, `quantitative-hyperbolic-geometry-toolkit-examples`

## Rejections

### `cex-properness-is-needed-for-the-compact-boundary-package`

- Tuple: `gpt-5.6-terra`, context `62dac0407b679514713b1660449c7fcab9af7d6adcaca6b0bd1bfebe39db0335`.
- Pre-edit guard: `b1474e4e57741dc1f7329d479e9dfcbe9415f4a93a41714b7fed944ec104c594`.
- Outcome: `false_positive`.
- Evidence: the objection assumes zero-based sequence indexing, but `def-hg-toolkit-gromov-sequences-and-boundary-product` explicitly fixes positive-integer indices. Therefore `x_n=(j,n)` has `n>=1`, is always a point of the declared space, and has joint products `min(n,m)` on branch `j`. No repair or rejudge target.

### `lem-boundary-products-are-independent-of-representative-and-basepoint`

- Tuple: `gpt-5.6-terra`, context `14bc1a68254440de1c0bf822eb7af148ef4f2da8228c706be6fc3529119ea7ea`.
- Pre-edit guard: `c498db5b2add8aba96a66a1f280686466d2f324f88e3499ba730b5ccb3ad22a3`.
- Outcome: `confirmed_fatal` (`other`; false or overstrong title).
- Evidence: the former title asserted literal independence, while the statement and proof establish only additive control—`2kappa` across representatives and `d(o,o')` across basepoints—and independence of the induced topology.
- Repair: changed only the title to “Boundary products have controlled representative and basepoint dependence.” The statement, proof, dependencies, and item id are unchanged.
- Post-edit guard: `1f5f1f9a118d4724d5da58950c1df710238a1cf705e351fef65b8fe56eb254ea`.
- Defect ledger: `p2-next20-step7-d-boundary-product-title`.
- Focused checks: scoped precheck passed; strict batch-6 proof-contract check passed with zero warnings; scoped rendercheck passed. Rejudge target: this item.

### `lem-loxodromic-elements-have-north-south-boundary-dynamics`

- Tuple: `gpt-5.6-terra`, context `6db3fde9d31428c5c65b1b06dc822c82743fc87c57448ec272e9e05fc9bf8674`.
- Pre-edit guard: `fcd7898929dd5ba4ad8f6450ffc945a7f2a57a97347c65810f8bb9708ffaa98b`.
- Outcome: `confirmed_fatal` (`dependency_citation`).
- Evidence: F1's exposed Definition supplies positive `tau`, an integer `s>=1`, and `C>=0` with `a_n>=n tau` and the two signed orbit-product bounds. The former proof instead attributed internal constants `L,K,D` and a subchain estimate to F1; those details occur only inside the supplier's verification and exceed the cited interface.
- Repair: replaced Step 1.1 with a direct invocation of the supplier's stated `tau,s,C` bounds. These are exactly the assertions consumed by Steps 3.1–6.1. Synchronized the owned proof-contract derivation and removed the obsolete F3 use at Step 1.1.
- Post-edit guard: `e714b96216faf1f95978b740e06da34bac4f91ea1e7bacee489f973d35d1ed7d`.
- Defect ledger: `p2-next20-step7-d-north-south-citation`.
- Focused checks: scoped precheck passed; strict batch-6 proof-contract check passed with zero warnings after the contract synchronization; scoped rendercheck passed. Rejudge target: this item.

### `lem-short-loop-relators-give-a-finite-dehn-presentation`

- Tuple: `gpt-5.6-terra`, context `cf389ec58c6b22e1b112e7f2f12e707265e0a3dd5399a030b923d07d003de81e`.
- Pre-edit guard: `a2039f73f22c8c948a80ea765e888c206e03776abed06b0ecb9a35f5b76c8d3d`.
- Outcome: `false_positive`.
- Evidence: the cited supplier defines `|g|_S` as `min L_S(g)`, where membership of `n` in `L_S(g)` means exactly that an `n`-letter spelling exists, and proves the minimum exists. Hence word length is attained and Step 2.1 may choose a shortest spelling `v`. No repair or rejudge target.

### `thm-quantitative-hyperbolic-geometry-toolkit`

- Tuple: `gpt-5.6-terra`, context `9dbc0dc4c492c5239194181879ce5cd8c9070ac6f3da257864d576bbd5d1bdb7`.
- Pre-edit guard: `95e5df477e9ed57f6605cf90979fca5ca5c8fd64b70ce242855396f836ff9d79`.
- Outcome: `confirmed_fatal` (`logic`; missing hypothesis).
- Evidence: the first two assertions of Clause 2 lacked an ambient hypothesis, while their F2 supplier requires a geodesic `delta`-slim space in both the positive-`delta` and zero-`delta` branches. As written, the conjunction therefore asserted them in arbitrary spaces.
- Repair: prefixed Clause 2 with the common geodesic `delta`-slim hypothesis and changed the Morse sentence's repeated phrase to “such a space.” Constants, conclusions, proof, dependencies, and AC scope are unchanged.
- Post-edit guard: `b43bb0db7d05e904acdbfb95c0e8d3758c25763113ea17d9b04c36edfb441613`.
- Defect ledger: `p2-next20-step7-d-toolkit-clause2-hypothesis`.
- Focused checks: scoped precheck passed; strict batch-6 proof-contract check passed with zero warnings; scoped rendercheck passed. Rejudge target: this item.

## Sources consulted

- `items/def-hg-toolkit-gromov-sequences-and-boundary-product.md`, Definition: positive-integer indexing, joint Gromov divergence, and the boundary-product convention.
- `items/lem-boundary-products-are-independent-of-representative-and-basepoint.md`, Statement and proof steps 1.1–7.1: exact representative/basepoint bounds and topological independence.
- `items/lem-geodesic-triangles-in-trees-are-tripods.md`, Statement and proof: the tree and zero-slimness supplier used by the counterexample.
- `items/def-hg-toolkit-loxodromics-and-independent-poles.md`, Definition and verification Steps 1.1–8.1: the exact public `tau,s,C` conclusion and the internal orbit-chain construction distinguished in the north–south adjudication.
- `items/lem-quasi-isometries-extend-to-boundary-homeomorphisms.md` and `items/lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison.md`: opened to verify that neither is used by the direct north–south proof and that no compactness or general boundary-extension hypothesis is hidden in the repaired citation.
- `items/lem-short-loop-relators-give-a-finite-dehn-presentation.md`, `items/lem-word-length-is-well-defined-and-satisfies-the-length-laws.md`, and `items/def-word-length-with-respect-to-a-generating-set.md`: the consumer's use of a shortest spelling and the supplier's minimum/attainment proof.
- `items/def-hg-toolkit-hyperbolic-group-and-stable-length.md`, `items/def-group-presentation.md`, and `items/lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh.md`: opened while checking the relator proof's standing Cayley convention, presentation quotient, and local-geodesic chain; no related defect was found.
- `items/thm-quantitative-hyperbolic-geometry-toolkit.md` and `items/lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics.md`: Clause 2 and its exact geodesic/slimness hypotheses and constants.
- `items/lem-slim-triangles-imply-the-gromov-product-inequality.md`, `items/lem-the-gromov-product-inequality-implies-the-four-point-condition.md`, and `items/lem-the-four-point-condition-implies-slim-triangles.md`: opened to distinguish Clause 1's metric hypotheses from Clause 2's local-geodesic hypotheses.

No web source was needed for these decisions: each objection is resolved by exact local definitions and displayed inequalities. All five judge rejections are dispositioned below, followed by all six Step-6 warning decisions.

## Step-6 reader-warning dispositions

### `s8a-644c9cff8fb49bc30a6e86ac` — `def-hg-toolkit-gromov-sequences-and-boundary-product`

- Outcome: `nonfatal`.
- The quotient is expressly conditional: “Once the equivalence relation has been proved,” with sequence-indexed expressions retained until then. The immediately following lemma proves equivalence and well-definedness. Omitting that lemma from `justified_by` is a declaration gap a reader closes immediately; no false boundary object is asserted unconditionally. No edit.

### `s8a-22d938ba168a232c474694e2` — `lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics`

- Outcome: `not_defect`.
- The warning identifies the wrong set: `x_n` lies in `H_{n-1}`, so Step 2.1 needs its distance to the entry bisector. With the supplier's ordered triple `(x_{n-2},x_{n-1},x_n)`, the displayed `dist(x_2,D(x_1,x_2))>=3delta/2` applies to the opposite halfspace containing that bisector. The required terminal margin follows because the bisector is a subset of that halfspace. No edit.

### `s8a-290a5c3080d8fe4bd3d635f0` — `lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics`

- Outcome: `not_defect`.
- Step 3.1 proves `i(j)->infinity`; the infinite occurrence class in Step 4.1 is unbounded. It therefore contains `j_2` beyond both `j_1` and the threshold after which `i(j)>i(j_1)`. The suggested equal-index torsion argument is unnecessary. No edit.

### `s8a-7360e0e2ff983661bd499a2d` — `thm-morse-stability-with-explicit-parameter-dependence`

- Outcome: `nonfatal`.
- The Archimedean choice of `n` for positive `h_0` and the order passage from bounds valid for every `rho>kappa` to the infimum at `kappa` are correct elementary real-order arguments. They should have been included among the locally enumerated facts, but a competent reader closes both immediately. No edit.

### `s8a-68de9ac1335feec2a9bdf477` — `lem-hg-toolkit-exponential-projection-contraction`

- Outcome: `nonfatal`.
- The specialized estimate is uniquely determined by the displayed general formula and the instruction to omit `2K+8rho` and set `K=0` in the exponent and threshold. Steps 4.1–5.1 prove that exact specialization. Repeating the formula would be presentation polish only. No edit.

### `s8a-3bf8b5b46c07f244c33bd543` — `quantitative-hyperbolic-geometry-toolkit-examples`

- Outcome: `nonfatal`.
- “Open” is stale authoring-state prose, but the substantive statement is correct: the five examples neither claim nor depend on the Morse-stability or loxodromic-dynamics conclusions. The page remains draft; this affects no example claim or dependency. No edit.

The warning dispositions required no content repair, no defect-ledger row, and no rejudge target. No cross-group alert arose: all examined suppliers are published or owned by group d, matching the rendered seam map.

## Checks and handoff

- Group-d evidence audit: exactly one adjudication row exists for each of the five assigned rejection tuples; exactly one owning-group decision exists for each of the six Step-6 warning ids; and exactly one defect-ledger row exists for each of the three confirmed-fatals.
- Current post-repair guards are `1f5f1f9a118d4724d5da58950c1df710238a1cf705e351fef65b8fe56eb254ea`, `e714b96216faf1f95978b740e06da34bac4f91ea1e7bacee489f973d35d1ed7d`, and `b43bb0db7d05e904acdbfb95c0e8d3758c25763113ea17d9b04c36edfb441613`, matching the report entries above.
- The final Step-7 guard run passed: all 34 then-current repository item changes were licensed by exact fatal/repair evidence; group d accounts for the three repaired items listed above.
- The final run-wide defect-ledger check was executed and was blocked only by another group's missing row for `lem-martingale-differences-are-orthogonal-in-l2`; all three group-d fatal rows were present and valid.
- The final run-wide Step-7 scope check was executed and reported 28 unresolved Step-6 warning dispositions, none belonging to group d. All six group-d warning decisions are present exactly once.
- Rejudge targets for the engine are exactly `lem-boundary-products-are-independent-of-representative-and-basepoint`, `lem-loxodromic-elements-have-north-south-boundary-dynamics`, and `thm-quantitative-hyperbolic-geometry-toolkit`. The two false positives require no rejudge. No judge or final adjudicator was run here.
- No dependency edge, page order, item id, or scope membership changed, so group d made no frontier-ledger update. Step 8's lead retains the required unified-ledger refresh.

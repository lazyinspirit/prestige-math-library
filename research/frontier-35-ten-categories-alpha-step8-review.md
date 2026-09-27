# Step 8 scope-denial delta review — `frontier-35-ten-categories`

## Review boundary

The Step-5 closure records `status: closed` at `2026-09-26T19:16:46.514Z`; the run status records `7-freeze` complete. I reviewed the 16 rows with `prior_decision: null` in the 144-row Step-8 scope delta. I checked their current coverage rows, order-647/648 and order-759/760 page files, batch manifests, `research/plan-spec.json`, the five-item run deferred-items register, and the cited primary sources. The optional `research/frontier-35-ten-categories-step8-mathematical-review.task.md` is absent, so this dispatch changed no mathematical item and has no supervising-repair obligation.

The delta's 16 `context_sha256` values differ from the values recomputed from the current plan by `tools/scope-decisions.mjs`; their `row_sha256` values match. The reviewed decisions below are bound to the **current** context hashes. The frozen delta remains unchanged as the record of which rows required Step-8 review.

## Unified frontier dependency ledger

I refreshed `research/frontier-35-ten-categories-cross-batch-dependencies.json` before the scope review. It had 16 reviewed batches, 49 edges, no unreviewed batch, no orphaned review, and no open row. Two batch-16 rows were incorrectly marked `removed`: the manifest still declares `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise` as a dependency of `lem-bounded-finite-projective-model-for-khovanov-seidel-modules` and `lem-simple-khovanov-seidel-modules-have-explicit-finite-projective-resolutions`.

I changed those two reviews in `research/frontier-35-ten-categories-batch-16.cross-batch-dependencies.json` to `verified` and refreshed the unified ledger. The current supplier Statement gives the abelian and degreewise kernel/cokernel facts for `GrMod_0(A)`. The current `def-graded-khovanov-seidel-module-category-and-projectives` cites that supplier as `[L6]` and proves the finitely generated subcategory is abelian in steps 1.2, 2.1 and 3.1 using Noetherianity. Both consumers use that local definition; their own item frontmatter no longer declares the supplier directly. The manifest edges remain conservative and adequate through the local definition, so `removed` was not a truthful status while those declarations persisted. The refreshed ledger now has 49 `verified` reviews and no `open` or `removed` review, missing batch, orphan or unreviewed declared edge. Its other 47 reviewed edges were carried; a ledger note alone is not a proof certificate.

## Pending scope decisions

All 16 pending rows **stand**. No declined result was added, no destination was changed, and no reading order, page, item, manifest, coverage, contract, risk, splice or impact content was changed by this review. The exact current-hash decisions and row-specific evidence are in `research/frontier-35-ten-categories-alpha-c-scope-decisions.json` and `research/frontier-35-ten-categories-alpha-f-scope-decisions.json`.

### Group c, batch 17: eight rows stand

The order-759 A page fixes the finite type-A realization over `Q` and ends with diagrammatic/bimodule equivalence and the split-`K_0` Hecke isomorphism. Its order-760 B companion has four rank-one, rank-two and quadratic examples. The current plan places the existing Hochschild/link-homology A page later at order 765, with Rouquier and Hochschild prerequisites; no B-page proof uses it forward. The two cross-batch prerequisites of the order-759 A page remain earlier: graded bimodules at order 717 and Garside normal forms at order 741.

| Delta ID prefix | Declined result | Source and current-file check |
|---|---|---|
| `0da7c1e2edb4` | General Hodge-theoretic positivity | [Elias–Williamson, *Soergel Calculus*, §3, Conjecture 3.16](https://arxiv.org/pdf/1309.0865) distinguishes positivity from categorification; the A page expressly does not use that conjecture. |
| `32e382c91b72` | Positive-characteristic material | [Libedinsky, *Gentle Introduction I*, §5.1](https://arxiv.org/pdf/1702.00039) notes different positive-characteristic projectors; the A realization is over `Q`. |
| `5185f8748087` | Diagrammatic higher-rank relations | [Elias–Williamson, Definition 5.2](https://arxiv.org/pdf/1309.0865) includes three-color relations. The existing earlier A page defines and verifies them; B contains only its four small examples. Its A-page destination stands. |
| `7bbd7a07b3d0` | General Coxeter classification | [Soergel, Theorem 1.10](https://arxiv.org/pdf/math/0403496) has general Coxeter hypotheses; the current A results retain finite `S_n` over `Q`. |
| `7ef1ba777cb2` | Category-O projectives | [Libedinsky, §7, Corollary 7.1](https://arxiv.org/pdf/0707.3603) applies the Hom result to `O_0` projectives; no such application appears in the A inventory or proofs. |
| `b1c409888b8d` | Further light-leaves computations | [Libedinsky, §§5–6](https://arxiv.org/pdf/1702.00039) develops general light leaves; the A page already has the general basis results and B is limited to four small examples. |
| `e4620c787cdb` | Foams and braid cobordisms | [Elias–Khovanov, Introduction](https://arxiv.org/pdf/0902.4700) points to these applications; the A page neither constructs nor uses them. |
| `e8b1af61a641` | Hochschild link-homology construction | [Khovanov, Introduction](https://arxiv.org/pdf/math/0510265) uses Hochschild homology and Rouquier complexes; the existing order-765 planned page, rather than the current B examples, is the recorded destination. |

### Group f, batch 12: eight rows stand with `owner-decision` destinations

[Dinur, §5 Definition 5.1 and Lemma 1.8](https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf) use a constant-relative-distance code to obtain a constant graph-composition factor. Section 9, Theorem 9.1 and Lemma 9.2, uses direct raw-input comparisons and invokes [Dinur–Reingold, Theorem 3.7](https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/pcptesters.pdf) for the separate input-preserving composition interface; Corollary 9.3 then iterates a fixed-parameter doubling map with constant size multiplier. Dinur's statements are not refuted by the local deferral.

The preserved local composition draft uses a unit-vector encoding of an alphabet of size `s`, whose relative distance is `2/s`, and treats a raw input bit as a one-coordinate block while other blocks grow with `s`. These do not give the claimed uniform relative-distance factor. Its proximity proof then has a factor proportional to `1/s_t` while the powered alphabet `s_t` grows much faster than `sqrt(t)`; enumerating its walk patterns is exponential in the variable `t`. The current order-647 A page has 31 items, proves the exponential base and inverse-linear weak testers, and explicitly defers the composition/amplification chain. The order-648 B page has three entries and expressly defers the tester-size example. All five affected item IDs remain in `research/frontier-35-ten-categories-deferred-items.json`, outside the current item/page inventory.

| Delta ID prefix | Source result and disposition |
|---|---|
| `31730af2a896` | §5 Definition 5.1 composition: local constant-distance and raw-input interface missing; stands, destination `owner-decision`. |
| `bb7bc5029592` | §5 Lemma 1.8 proof: its constant factor does not follow from the local `2/s` code; stands, destination `owner-decision`. |
| `e3d846be74a8` | §1.3/§5 Lemma 1.8 tester composition: the additional Dinur–Reingold input-preserving theorem is not locally supplied; stands, destination `owner-decision`. |
| `ae67c0606970` | §9 Lemma 9.2: its two-case intermediate soundness is source-valid, but local constant-loss composition into the final tester is missing; stands, destination `owner-decision`. |
| `579f67bc7945` | §9 Theorem 9.1: current local factor and variable-`t` walk-list cost do not prove fixed-`t` doubling; stands, destination `owner-decision`. |
| `b8c7bde07493` | §9 Corollary 9.3: the current page has no proved local Theorem-9.1 amplifier; stands, destination `owner-decision`. |
| `c0a97f6c4151` | §9 Corollary 9.3 iteration: its `O(log n)` rounds need the missing fixed-`t` doubling map; stands, destination `owner-decision`. |
| `68ae15a51c29` | §9 Corollary 9.3 worked constants: the order-648 example remains deferred with that same premise; stands, destination `owner-decision`. |

## Run defect ledger and checks

I filtered the 317 rows for this run in `research/defect-ledger.jsonl` by disposition: 315 are `fixed`, one is `nonfatal-recorded`, one is `false-positive`, and **none has `disposition: open`**. There was no row to close or defer, so I made no append and did not rerender the generated defect-ledger view.

- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories --require-reviewed` succeeded after the two input corrections.
- `node tools/scope-decisions.mjs refresh --run frontier-35-ten-categories --all` reported zero pending decisions in every group, including fallback `all`.
- `node tools/scope-decisions.mjs check --run frontier-35-ten-categories` reported 144 current declines and zero errors.

These are focused ledger and scope checks. The engine owns the subsequent Step-8 render, certification and gate battery; this report does not assert that those gates have run.

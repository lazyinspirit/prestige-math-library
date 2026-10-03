# Batch 30 Step-1 scaffold notes — Étale Covers and the Étale Fundamental Group

Run `frontier-38-owner-30`, role beta, batch 30, cover `30`. Pair: A
`etale-covers-and-the-etale-fundamental-group` (order 911, `algebraic-geometry`)
and B `etale-covers-and-the-etale-fundamental-group-examples` (order 912).
Snapshot: 2026-10-03 01:33 Australia/Sydney (2026-10-02 15:33 UTC). I read
`CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task
(`research/frontier-38-owner-30-beta-30.task.md`), the binding owner direction
`research/frontier-38-owner-30-owner-authoring-direction.md`, the controlling
plan `research/plan-spec.json`, the AG-ET-1 design section in
`research/plan-algebraic-geometry-expansion-track.md` (page row at line 49,
prose contract in the breadth-roadmap row at line 268), the existing batch and
local-packet evidence, and all 26 scoped item files. The live `.autopilot/`
state, not any `*RESUME.md`, identified the run as step `1-scaffold`. I wrote
only the assigned manifest, coverage, notes, Step-1 readiness records and the
consumer-batch dependency input. No published content, shared plan, engine
state or verdict was edited.

## Design and controlling plan

- Every element agrees between the design and `plan-spec.json`: A/B ids,
  orders 911/912, category, titles, companion pointers, `requires`
  (`affine-schemes-and-the-structure-sheaf`,
  `fibre-products-base-change-and-scheme-theoretic-fibres`,
  `flat-smooth-and-etale-morphisms`), and the three commissioned A targets
  (`def-etale-fundamental-group-and-fibre-functor`,
  `thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets`,
  `thm-specialization-of-etale-pi1-under-geometric-hypotheses`) plus the two B
  targets (`ex-etale-covers-of-gm`,
  `cex-fundamental-group-depends-on-base-field`). No design-versus-plan
  conflict was found on scope, conventions or the proof route.
- The binding owner direction required "close every missing finite-étale
  descent/fundamental-group ... prerequisite locally" for 911/912. The local
  packet therefore carries 24 A items rather than the three named targets: the
  five local support items for trait, geometric-field invariance and basepoint
  interface, and the descent, lifting, purity, projective-cech and
  modification suppliers they consume. This is authorized local closure within
  the selected pair, not a scope change; A has 24 items and B has 2, both well
  below the hard 100-item cap.
- Classification strength: the commissioned design text names locally
  Noetherian/finite-type hypotheses; the packet's classification theorem is
  proved for arbitrary connected schemes and explicitly includes those cases.
  This is a strengthening that preserves every commissioned hypothesis; the
  specialization consumer retains locally Noetherian base, smoothness,
  properness, geometrically connected nonempty fibres, the geometric
  basepoints, the generalizing-to-special direction and the inner-conjugacy
  caveat. Recorded here as the only scope nuance, with no mathematical
  loss.
- Source-treatment nuance recorded by the local packet and retained: Milne,
  *Lectures on Étale Cohomology* §3 supplies the B-page examples and the
  base-field dependence statement, but is not counted as the second full proof
  treatment of the classification; SGA 1 Exposé V and the Stacks Project
  *Fundamental Groups of Schemes* are the two full treatments.
- No reference to AG-873, AG-877 or any unselected pair occurs in the batch
  inventory or in the transitive closure of its proof dependencies.

## Inventory and dependency labels

`research/frontier-38-owner-30-batch-30.pages.json` mirrors the registered
`plan-spec.json` item contracts and adds `dependency_level` to every item.
Levels were computed from the item files' exact `deps` (identical to the plan
contracts) over in-run suppliers only, and range 0–9:

| level | items |
|---:|---|
| 0 | `lem-finite-etale-algebra-module-presentation-and-rank`, `lem-faithfully-flat-effective-descent-of-modules-and-algebras`, `lem-punctured-hartogs-and-flat-base-change-for-finite-projectives`, `lem-projective-cech-finiteness-and-serre-vanishing-for-etale-lifting`, `lem-projective-modification-of-proper-integral-dvr-scheme`, `lem-etale-specialization-trait-through-a-specialization` |
| 1 | `thm-effective-fpqc-descent-of-finite-etale-covers`, `def-etale-fundamental-group-and-fibre-functor`, `lem-finite-etale-separability-and-hochschild-contraction`, `lem-formal-full-faithfulness-on-regular-punctured-spectrum`, `lem-discriminant-detects-etaleness-of-finite-free-algebra` |
| 2 | `lem-finite-etale-galois-refinements-and-quotients`, `thm-finite-etale-algebras-invariant-under-nilpotent-thickening` |
| 3 | `thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets`, `lem-complete-local-finite-etale-algebra-lifting`, `thm-projective-flat-dvr-finite-etale-cover-lifting` |
| 4 | `thm-purity-for-finite-covers-of-regular-local-rings`, `lem-tame-dvr-inertia-and-abhyankar-ramification-killing`, `ex-etale-covers-of-gm`, `cex-fundamental-group-depends-on-base-field` |
| 5 | `thm-purity-of-branch-locus-for-finite-normal-covers` |
| 6 | `thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence` |
| 7 | `lem-smooth-proper-complete-dvr-geometric-generic-connectedness`, `lem-etale-specialization-proper-geometric-finite-etale-invariance` |
| 8 | `lem-etale-specialization-geometric-basepoint-interface` |
| 9 | `thm-specialization-of-etale-pi1-under-geometric-hypotheses` |

Dependency audit (evidence read from the actual statements, Facts blocks and
proof steps, not from page membership):

- All 26 item files exist as complete drafts; every direct `deps` target
  resolves on disk. The 23 distinct same-batch suppliers and 86 distinct
  out-of-batch suppliers classified as: 86 published, 0 draft, 0 missing.
- Transitively the batch closure reaches 2,289 items. The closure contains no
  missing id, no `proved_here: false` recorded result, no node homed on another
  in-run pair's page, no unpublished out-of-batch node, and no path to
  `deferred-set-theory-beyond-choice`. No missing, circular, forward or
  inadequate edge was found; the five A items with level 0 have no in-run
  dependency, and the B items depend only on A-page items.
- Hypotheses and directions were checked at the uses: finite presentation/module
  rank and criterion; fpqc effectiveness; Galois refinements; profinite
  classification with AC's compactness use; nilpotent and complete-local
  lifting; punctured Hartogs and formal full faithfulness; trace-discriminant
  étaleness; regular-local purity and branch-locus purity; projective-Čech
  lifting and proper nonprojective complete-DVR lifting; geometric generic
  connectedness; trait existence; smooth proper geometric-field invariance;
  the basepoint interface; tame inertia; and the specialization theorem's
  generalizing-to-special direction, characteristic-zero isomorphism and
  prime-to-`p` statement. AC is declared in every proof item; the étale
  finite-module suppliers used in choice-free form are not given AC-dependent
  claims beyond those declared.
- In-run dependency levels were re-checked after the last manifest edit; a
  cycle would have been escalated and none exists.
- Consumer-batch dependency input:
  `research/frontier-38-owner-30-batch-30.cross-batch-dependencies.json` is
  `[]`. Reason: the pair's page `requires` are all published out-of-run pages,
  and no item's direct or transitive dependency is homed on another in-run
  batch (checked against the thirty-pair scope and the current manifests).
  `frontier-dependency-ledger.mjs refresh` records batch 30 as reviewed with no
  edges, and no orphaned review.

### Raw item SHA-256 at this revision

| Item | SHA-256 |
|---|---|
| `lem-finite-etale-algebra-module-presentation-and-rank` | `98e223310e297a027d22784d7d90dd870a24dbd4450ef64864a2438f7325a6b3` |
| `lem-faithfully-flat-effective-descent-of-modules-and-algebras` | `965fa991ccc1999ced5aabf102a4b0857ad7986d3f80a9618dd5020a097ac26e` |
| `thm-effective-fpqc-descent-of-finite-etale-covers` | `1288a8d84867b8567a2993ef21e28ceedb3f66c75c9a198b9432f2bd080f66b1` |
| `def-etale-fundamental-group-and-fibre-functor` | `123e178d7dd52cb7b3723dc314868554281d394ec13d72789c0646a462bc438e` |
| `lem-finite-etale-galois-refinements-and-quotients` | `977f61081954909a198b70ef39dadc85ab4735d65152c1deb2e26a32a02f5cb7` |
| `thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets` | `8a11d67febfd86811fadbe72c032b606f7d46863f8368e3459f71ac668cb65e9` |
| `lem-finite-etale-separability-and-hochschild-contraction` | `c04a79ec8c5bff0a7903e1dd59b957497582ed823785347d8009ed6a10bd1a6e` |
| `thm-finite-etale-algebras-invariant-under-nilpotent-thickening` | `e4d8d1d0596e196858e0b30e782b30a40f4b94275477149d77394fd9dd8c214f` |
| `lem-complete-local-finite-etale-algebra-lifting` | `544d73ed972d672edde40402f9f14c1761563b7364e88c9fa4313c9cfbc67d11` |
| `lem-punctured-hartogs-and-flat-base-change-for-finite-projectives` | `803ff1080090f267999108b803c3601ce1d8d4227f32ee82a6cc9dd4f492ddb5` |
| `lem-formal-full-faithfulness-on-regular-punctured-spectrum` | `d9613e173b0c07c65352cf57b0554dd73a6d983b0d0727f558f1d87844f74422` |
| `lem-discriminant-detects-etaleness-of-finite-free-algebra` | `188387e320804783e618c2a7b4e9c6807aee538c3d277c3e649569766e221117` |
| `thm-purity-for-finite-covers-of-regular-local-rings` | `429ea97c96ffef355e5ecacc6df1ba304c1b6d013e454250effb6c5f9919b2b5` |
| `thm-purity-of-branch-locus-for-finite-normal-covers` | `04031df3a35a13d8604ea289a6595ad1c01ba75ca3c6eadd0826fc500a312d0f` |
| `lem-projective-cech-finiteness-and-serre-vanishing-for-etale-lifting` | `ccb6dcc66f0961db622f36516b608b62ce67dcc86576afe97ca7ba091c5abdcb` |
| `thm-projective-flat-dvr-finite-etale-cover-lifting` | `3971244cf51f8fd71baaab4eb8d5d5c6b2ae0b5d80362fedab17e1c522c2bc9a` |
| `lem-projective-modification-of-proper-integral-dvr-scheme` | `56a27a347ef5b10fc5e67172bdd1e685ea5488bb5cd1931c6d0786faf530e226` |
| `thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence` | `73eb49a69729c85973be532b3748734ba7227a7ca698f607d003e9316c08d67a` |
| `lem-smooth-proper-complete-dvr-geometric-generic-connectedness` | `9aaca49a95bb1c9ca1b0dc0f972888ea8f2b6ba8cdf7159e55f76426e8b50fd1` |
| `lem-etale-specialization-trait-through-a-specialization` | `73f6a95c28b2374a61f581e392e4a495a9215709da555f2a9e59e3ab70d7b842` |
| `lem-etale-specialization-proper-geometric-finite-etale-invariance` | `c279ea42a4ff8fa53c6f4aeb9ba78959aa48cf2740cf29c1b152870a98312526` |
| `lem-etale-specialization-geometric-basepoint-interface` | `8d858a6d2b526c70a683bc5ee748cb7236cf230f76a68d3d9315ffe7f94a7f58` |
| `lem-tame-dvr-inertia-and-abhyankar-ramification-killing` | `f958659d40a1f71a2c79e8fae7f105fe59fe5a0a966cfb3f97198f2a95c01c98` |
| `thm-specialization-of-etale-pi1-under-geometric-hypotheses` | `07d6462b6c32ec49ce1ab7c388052e006c83b5af69a0d05148edf39ab4d567cd` |
| `ex-etale-covers-of-gm` | `4b40be95816b7ce3ea11ac5284a47969cc846e31db55de675ba61014fd7ec15e` |
| `cex-fundamental-group-depends-on-base-field` | `990ea9a7ec6e9d68971e66000f5f957ee0e61d3cd739b0e4bc764565e3390118` |

## Sources

`source-fetch-check --stamp` fetched and stamped all ten coverage source
entries in one pass (10/10, no failures, so no recovery budget was consumed in
this dispatch). Actual stamps:

Honest attribution: the complete full-text reading of SGA 1, SGA 2, EGA III,
the four Stacks chapters and Milne, with the exact locators reproduced in the
coverage file, was performed and recorded by the local prerequisite authors
(`research/frontier-38-owner-30-local-prereq-911.md` and
`research/frontier-38-owner-30-local-prereq-911-trait-reduction.md`). In this
dispatch I verified that the stamped bytes and page counts match those
records, that every URL is live and returns complete full text, and I read
every scoped item's Statement, Facts and proof strategy plus the complete
proofs of the structural items on which the rest depend. I did not personally
re-read the complete volumes in this dispatch, and I do not claim to have.

| Source | Kind | Pages | Bytes | sha256_16 |
|---|---|---:|---:|---|
| SGA 1, arXiv `math/0206203` | monograph | 343 | 2,566,756 | `8e64218d356456c5` |
| SGA 2, arXiv `math/0511279` | monograph | 216 | 1,576,954 | `41ad02c57321a8d2` |
| Stacks *Fundamental Groups of Schemes* `pione.pdf` | reference-work | 82 | 805,949 | `387b3fcf66962a7f` |
| EGA III, Numdam `PMIHES_1961__11__5_0.pdf` | paper | 164 | 19,942,549 | `3ed59fe81da07f1a` |
| Stacks `descent.pdf` | reference-work | 93 | 862,754 | `28e718bac216bb7c` |
| Stacks `etale.pdf` | reference-work | 31 | 465,458 | `cfe0581a0bfe3852` |
| Stacks `coherent.pdf` | reference-work | 80 | 816,589 | `b4980a08a8cce98f` |
| Stacks `algebraization.pdf` | reference-work | 94 | 862,584 | `480dfd12ac8a3710` |
| Milne, *Lectures on Étale Cohomology* | lecture-notes | 202 | 1,514,442 | `ac4f122f371d38a4` |

`url-sweep --recover --fail-on-dead` reports 9/9 live URLs, 0 failed, 0
suspect. The coverage file has exact locators and item dispositions for both
pages: 2 pages, 45 harvested rows, 0 errors, 0 warnings under
`coverage-checklist --require-destination`. No source was dropped, so no
`source_resolution` record is needed and no source-count waiver is claimed.
Every harvested heading read over the recorded ranges has a disposition:
included with an item id, inline with the absorbing item, or out-of-scope with
a specific reason (the general henselian approximation argument, the general
proper coherent existence/double-adic route, the wider SGA 2
complete-intersection conclusion, and the SGA 1 proper-homotopy argument, none
of which this packet imports).

## Checks actually run (snapshot above)

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json`
  — exit 0: 36 item(s), 0 missing, 0 errors (26 are batch 30; batch 23 was
  populated concurrently by its own worker).
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-*.pages.json`
  — exit 0: 36 scoped item(s), 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-30.pages.json`
  (item mode on the scoped files) — exit 0: 26 scoped item(s), 0 errors,
  0 warnings (provenance and source accountability valid).
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-30.coverage.json --require-destination`
  — exit 0: 2 page(s), 45 harvested result(s), 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-30.coverage.json`
  — exit 0: 10/10 source(s) fetch-verified, 10/10 resolved.
- `node tools/url-sweep.mjs --coverage research/frontier-38-owner-30-batch-30.coverage.json --out /tmp/url-liveness-30.json --recover --fail-on-dead`
  — exit 0: 9/9 live, 0 failed.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` — not
  closed at this snapshot because sibling batches are still being scaffolded;
  no batch-30 row is open or stale (all 26 records current). The reported work
  rows are 56 empty-inventory pages and (concurrently) batch-23 records still
  being written by that batch's own worker.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` —
  exit 1 at this snapshot because 28 sibling manifests are still empty
  (56 empty-page errors). It reports **no batch-30 label mismatch**; re-run
  after those suppliers are scaffolded. Level labels were recomputed
  immediately before recording, and no in-run edge of any batch-30 item
  touches another batch's item, so later sibling scaffolding cannot change
  them unless a supplier file itself changes.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0. Advisory
  `redundant-prereq` warnings for the page's three direct `requires` are
  pre-existing plan metadata (each is also reached through the other), not a
  batch fault and not editable here.
- `node tools/extcheck.mjs` — exit 0 (OK); its listed recorded-unproved
  consumers are unrelated published items and none lies in this batch's
  closure.
- `node tools/fwdcheck.mjs` — exit 1 with 2 errors, both outside this batch:
  `items/def-multiplicative-type-coordinate-hopf-algebra.md` and
  `items/lem-multiplicative-type-affineness-by-field-descent.md` link
  `[[def-group-scheme-over-a-field]]` without a declared `forward_refs` entry
  (batch 25 / pair 887, whose page expects the supplier from pair 871). This
  is an unresolved whole-run finding for that pair's owner; it does not touch
  batch 30 and was not repaired here.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  — exit 0: refreshed and deduplicated. Batch 30 is recorded as reviewed with
  an empty input; five page-level edges among other batches (10→11, 22→24,
  22→25, 2→26, 2→27) remain unreviewed and belong to those consumer batches.

## Published defects and escalations

No defective published prerequisite was found: every actual publisher used by
the batch's proof route was read in its used direction (or, for the local
packet's long tail, its statement and use were checked at the consumer), and
none required a repair note. Unrelated published recorded-unproved warnings
reported by `extcheck` are outside this pair's closure and do not block these
suppliers. There is no new prerequisite pair, no required page split and no
cross-batch change to escalate. The pair is ready for Step 3 authoring review;
the 26 `ready` records are readiness for authoring, not mathematical approval,
and Step 3/5 review plus engine certification remain owed.

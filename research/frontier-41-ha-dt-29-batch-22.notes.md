# Frontier-41-ha-dt-29 — Beta batch 22 scaffold notes

Pair: `reeb-stability-and-global-foliation-constructions` (A, order 575) /
`reeb-stability-and-global-foliation-constructions-examples` (B, order 576),
category `differential-topology`, design block DT-30.

Owned outputs written: `research/frontier-41-ha-dt-29-batch-22.pages.json`
(48 items: 43 A + 5 B), `research/frontier-41-ha-dt-29-batch-22.coverage.json`,
the 48 current batch-22 readiness records `research/frontier-41-ha-dt-29-step1-<item>.json`
(all `ready`; the target is owner-authored, and all 12 added suppliers have receipts), the consumer input
`research/frontier-41-ha-dt-29-batch-22.cross-batch-dependencies.json`, and this
note. No published content, shared plan, engine state or verdict was edited.

## 1. Design and plan reconciliation

- Read before construction: `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the
  dispatch, the full DT-30 design block
  `research/plan-differential-topology-track.md` L1497–L1537, the DT-30 rows of
  §8 (source matrix, L1680), §9.5 (foliation harvest), §12.4 (exact `requires`
  array, L2255), §12.5 (binding repairs, L2327), §12.8 (source status), the
  owner authoring direction `research/frontier-41-ha-dt-29-owner-authoring-direction.md`,
  and `research/plan-spec.json`.
- `research/frontier-41-ha-dt-29-owner-authoring-direction.md` has **no clause
  specific to DT-30**; its DT clauses concern DT-19 and the §12 orientation
  leaves. It was read before any item was constructed and constrains this pair
  only through the normal rules.
- Design vs `plan-spec.json`: the page ids, orders 575/576, category, companion
  and the six-element `requires` array agree exactly with the design's §12.4
  canonical array. **No design/plan conflict was found.** Two conflicts *within*
  the design (its §1 list vs §12.5 binding repairs) were resolved in favour of
  §12.5, which is binding:
  - item 7 `thm-global-reeb-stability-...` is stated for a **closed** connected
    ambient manifold (the boundary/interval form is explicitly *not* asserted);
  - item 10 `prop-mapping-torus-...` says the suspension/base direction is
    transverse to the fibres and its first-return map is the monodromy.
- The design's §8/§11.4 source-depth warning for DT-30 is preserved verbatim in
  §3 below: the general local finite-holonomy Reeb theorem has only MMF as an
  independently inspected full treatment (dropped, see §3); the codimension-one
  and sphere-leaf specialisations have two (Calegari, Mrowka) plus the
  MMF-derived Leiden corroboration.

## 2. What was built (48 items: 43 A + 5 B)

All 15 design A items and all 5 design B items were kept with their design ids,
kinds and proof roles. Twenty-eight A-page support items were added **before** their
consumers because the design list alone does not close:

| added item | why it is needed |
| --- | --- |
| `def-transversely-oriented-codimension-one-foliation` | the co-orientation hypothesis of the global theorem had no carrier on this page (MMF Def. 23.1 / Mrowka Def. 23.1) |
| `def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary` | the Reeb solid torus and the gluing proposition are stated for foliations tangent to the boundary |
| `def-stable-leaf-of-a-foliation` | the design's §2 names "stable leaf" in the theorem conclusion without a definition |
| `lem-germs-of-orientation-preserving-diffeomorphisms-of-the-line-at-zero-are-torsion-free` | closes the step "finite π₁ ∧ co-orientation ⇒ trivial holonomy" (torsion-freeness of one-dimensional germs) |
| `lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group` | the normal model needs `Deck(Lhat/L) ≅ Hol(L)` and the deck action as a covering-space action |
| `lem-transverse-holonomy-transport-is-well-defined-and-equivariant` | builds the model map `Phi` and its invariance under the diagonal action; the design only alludes to it |
| `lem-the-normal-model-map-is-a-foliated-local-diffeomorphism` | first half of the local theorem (descended map, leaf preservation, invertible differential) |
| `lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood` | second half of the local theorem (injectivity on a small model; saturated image) |
| `lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented` | the actual hypothesis used by the global theorem (finite π₁ ⇒ trivial holonomy in codimension one) |
| `lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal` | Calegari Lemma 4.24, the geometric input of the Novikov closedness argument |
| `def-countable-choice-principle-for-foliation-pair` and `lem-countable-choice-sequence-and-product-formulations-are-equivalent` | defines the exact ACω principle used by the foliation items and proves equivalence of its sequence and nonempty-product formulations |
| `lem-axiom-of-choice-implies-countable-choice` | derives the pair-local countable-choice principle from full AC for the finite-CW/handle suppliers |
| `lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex` | the finite-CW/handle input of the limit argument, assembled from published DT-2/DT-5 items (this replaces the earlier bare citation of Milnor's book theorem) |
| `lem-rational-homology-of-a-closed-smooth-manifold-is-finite-dimensional` | `dim_Q H_2(M;Q) < ∞`, so the span of the sequence of leaf classes is generated by finitely many of them |
| `lem-oriented-intersection-detects-nonvanishing-rational-homology` | co-oriented intersections make a leaf meeting a closed transversal homologically essential |
| `lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle` | the leaf space of the global theorem is a compact connected one-manifold |
| `lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space` | completes the global theorem with the fibre-bundle-over-`S^1` description |
| `lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism` | the Reeb foliation of `S^3` is built by gluing two solid tori along their boundary |
| `def-c1-regular-codimension-one-foliation-and-transverse-orientation` and `lem-c1-foliated-atlas-preserves-plaque-equivalence-and-transverse-orientation` | defines the exact C¹ atlas/coorientation inputs and verifies that plaques and transverse orientation are invariant under chart changes |
| `def-c1-germ-of-a-local-diffeomorphism-at-a-point` and `lem-c1-germs-of-local-diffeomorphisms-form-a-group` | supplies the C¹ germ group and proves composition, inversion and orientation-preserving subgroup claims |
| `thm-thurston-stability-for-c1-interval-germ-groups-are-locally-indicable` | locally expands Calegari’s compressed derivative/displacement proof at exactly C¹ regularity |
| `lem-c1-holonomy-is-a-well-defined-representation-into-transverse-germs` | constructs the representation from C¹ plaque transports and proves chart/homotopy independence |
| `lem-compact-c1-foliation-leaf-is-an-embedded-hypersurface` | proves the compact-to-embedded implication locally using the C¹ immersion charts, compact-to-Hausdorff embedding, and C¹ inverse function theorem |
| `lem-compact-c1-leaf-has-finitely-generated-fundamental-group` | uses an explicit local C¹ defining function, finite-chart C¹ mollification and a transverse smooth flow to compare with a smooth compact hypersurface, then applies the local finite-CW theorem |
| `lem-trivial-c1-holonomy-gives-a-saturated-product-neighbourhood` | constructs the product directly from C¹ chart transports, compactness and trivial holonomy; no finite-π₁ assumption |

Dependency levels (computed by the same algorithm as
`tools/item-dependency-levels.mjs`, in-run deps only, recomputed after the final
edit): A page
`0,1,0,0,0,1,2,7,5,8,8,9,10,11,12,13,13,1,1,2,3,1,14,15,1,14,16,2,2,1,3,0,1,0,1,2,2,1,3,3,4,17,14`;
B page `13,9,17,12,14`. Maximum level 17. No cycle. No B item is a dependency
target.

Notable interface choices recorded for Step 3:

- **Deck-action convention.** The model map `Phi` of
  `lem-transverse-holonomy-transport-is-well-defined-and-equivariant` is
  invariant under the *diagonal* action `h·(yhat,t) = (h·yhat, h·t)` (deck action
  on `Lhat`, holonomy action on the transversal), which is exactly what
  descends to `(Lhat x D)/H`. This requires the left deck convention
  `h·yhat := tau_{h^{-1}}(yhat)`; with the opposite convention the formula
  acquires an inverse on the holonomy factor. The item states the invariance and
  the convention, so authors must not flip it.
- **AC profile.** Every proof item states its choice hypothesis. The finite-holonomy
  local stability block uses the pair-local `AC_omega` definition only; the
  cohomological Thurston item uses full AC through finite-CW type and the
  published universal-coefficient theorem. The full-AC-to-`AC_omega` implication
  for handle suppliers is proved locally.
  The global limit argument is
  **AC-full**, consumed through
  `lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex`
  (which consumes the published `cor-every-compact-smooth-manifold-admits-an-excellent-morse-function`,
  stated under the axiom of choice),
  `lem-subgroups-of-free-abelian-groups-are-free` (stated under the axiom of
  choice) and `thm-topological-manifolds-are-metrizable-and-paracompact`; the
  affected statements and the `lem-compact-leaf-control-...` strategy say so
  explicitly. The purely covering-theoretic items stay choice-free.
- **Global theorem scope.** The closed/connected form only; the boundary/interval
  form is named as a separate statement and not asserted (design §12.5).
- **The mapping torus proposition** classifies *bundle structures* over `S^1`
  (trivial iff `f` is isotopic to the identity) and deliberately makes no claim
  that a non-isotopic `f` forces `M` to be non-diffeomorphic to `L x S^1`, which
  is not true in the generality stated and was not provable from the item's
  inputs.
- **Möbius band example.** The quotient uses the **free** involution
  `(u,v) -> (u + 1/2, -v)`. The naive reflection `(u,v) -> (-u,-v)` was not used:
  it has the two fixed points `(0,0)` and `(1/2,0)`, so its quotient is not the
  Möbius band and is not even a manifold.
- **The repaired theorem is a leaf.** No other item depends on
  `thm-reeb-thurston-stability-for-codimension-one-leaves`; the earlier sketch of
  `rem-transverse-orientability-...` that cited it was rewritten (its content is
  purely the Mrowka Remark 7 example).

## 3. Source ledger

Independently fetch-verified treatments read for the A page (all newly stamped
by `source-fetch-check --stamp` in this dispatch):

| key | treatment | URL | exact locators read |
| --- | --- | --- | --- |
| CC | Danny Calegari, *Foliations and the Geometry of 3-Manifolds* (monograph) | https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf | §4.2, printed pp. 140–143, incl. Thm 4.5 with complete proof; §4.3, Example 4.7, printed p. 144; Lemma 4.24, printed p. 155; §2.16.2, Thm 2.119 with complete proof, printed pp. 106–107 (PDF pp. 115–116) |
| MIT | Tomasz Mrowka, MIT 18.965 *Differential Topology* (lecture notes) | https://math.mit.edu/~mrowka/math965lectnote.pdf | §§20–23, PDF pp. 52–56 (Def. 23.1, Thm 23.2, Lemmas 23.3–23.4, Remark 7) |
| LEI | Leiden NCG seminar, *Noncommutative Geometry of Foliations* (2023 notes, MMF-derived corroboration — **not** counted as an independent second treatment) | https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf | §1.3.6 p. 10; §2.1 pp. 11–14; §2.2 pp. 14–15 (Def. 2.5, Exx. 2.7–2.10, Thm 2.13, Thms 2.19–2.20) |
| DHF | del Hoyo–Fernandes, *On deformations of compact foliations* | https://publish.illinois.edu/ruiloja/files/2023/07/compactfoliations.pdf | §§1–2, PDF pp. 1–3 (local Reeb stability, linearization model) |
| SAN | F. Santos, *On the existence of stable compact leaves...* | https://arxiv.org/pdf/1204.0095 | §§1–2, article pp. 1–4 (tubular/retracting form; stability ⇔ finite holonomy) |
| GAB | D. Gabai, *Commentary on Foliations* (Collected Works of Thurston I) | https://web.math.princeton.edu/facultypapers/Gabai/Commentary-Thurston-Foliations.pdf | Theorem 0.8(a),(b) and Remark 0.9, PDF pp. 2–3 |
| MIL-T | John Milnor, *Topology from the Differentiable Viewpoint* | https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf | Appendix, classification of 1-manifolds |
| MIL-M | John Milnor, *Morse Theory*, Annals of Mathematics Studies 51 | https://www.maths.ed.ac.uk/~v1ranick/papers/milnmors.pdf | §3, Thm 3.5, printed pp. 17–21; §6, existence of Morse functions, printed pp. 28–35 |

MMF (Moerdijk–Mrčun, *Introduction to Foliations and Lie Groupoids*, Cambridge
2003) is the design's first-named treatment for §§2.3, 2.5–2.6 and **could not be
retrieved as full text in either this or the batch-21 dispatch**. The drop record
carries the initial failure plus five recovery retries and the searches (genuine
attempts reused from batch 21, not restarted); the seven results the design
attributes to MMF §§2.3 and 2.5 are covered by explicit alternative arguments
resting on CC, MIT, LEI, DHF and SAN. MMF §2.6 and Thurston's 1974 article also
remain unavailable, but they no longer block the proof: the full author-hosted
Calegari text contains Theorem 2.119 and its complete interval-germ proof.

**C¹ Thurston proof closure (readiness refreshed after final audit).**
The global Reeb support theorem now states the full AC hypothesis explicitly because its finite-CW and rational-homology closedness chain uses full AC. A lower-choice version was not adopted: it would require rebuilding that chain beyond this pair. The target statement matches DT-30 item 13: a compact leaf with $H^1(L;\mathbb R)=0$ in a transversely oriented C¹ codimension-one foliation has a saturated neighbourhood whose leaves are diffeomorphic to the leaf. The scaffold also proves the local strengthening needed for its route: the holonomy is trivial and the neighbourhood is a C¹ product. The global fibration and the C⁰ counterexample remain outside this local item; Gabai’s Remark 0.9 concerns the stronger global conclusion.

The local prerequisites now include C¹ foliation/coorientation and germ definitions with separate well-definedness lemmas, a compact-C¹-leaf embedding lemma, a C¹ holonomy representation, the C¹ interval-germ local-indicability theorem, a compact-C¹-leaf finite-generation lemma, a direct C¹ trivial-holonomy product lemma, a pair-local definition and justification of ACω, and a proof that full AC supplies the countable-choice input needed by the finite-CW carrier. Calegari §2.16.2, Theorem 2.119, was full-text-checked at printed pp. 106–107 (PDF pp. 115–116). His compressed estimates are expanded locally: derivative branch and displacement branch each end in an explicit quotient to $\mathbb Z$; the displacement branch uses a finite generator vector, a convergent subsequence, fixed-word estimates including inverse letters, and relation descent. These estimates use only continuity of first derivatives, so the group theorem applies at C¹ regularity.

The compact-leaf embedding lemma proves the C¹ compact-to-embedded step from the intrinsic leaf charts, compact-to-Hausdorff embedding and C¹ inverse function theorem. The finite-generation lemma then constructs a signed C¹ defining function from a finite cooriented chart cover, smooths it in C¹ by finite-chart mollification with uniform control of both function and derivative, and uses a transverse smooth flow to identify a nearby smooth regular zero set with the original leaf. The existing smooth finite-CW lemma then yields finite generation of $\pi_1(L)$. The separate product proof transports a common transverse interval over a finite chart cover; trivial holonomy makes the transport independent of the path, and compactness plus the C¹ inverse function theorem gives an injective saturated product neighbourhood. It does not assume finite $\pi_1$.

The original Thurston and MMF retrieval records remain documented drops, not proof evidence. The full Calegari proof and local C¹ suppliers close the theorem’s route. After the final dependency and source audit, the target receipt was refreshed to `ready` against all 15 current direct dependencies; its owner-held decision has hash `0fed4cf9e02b5e6f3d81e8a3434a3a57e3f70bceec6e36cd6392ef58cb44ea2b`.

Coverage harvest: 108 results disposed (17 on the A page and 8 on the B page
land in scaffolded items; the remainder are declined with written reasons, mostly
the neighbouring DT-31 taut-foliation material, the variational Morse chapters,
and the Lie-groupoid sections of the Leiden notes). The `coverage-low-yield`
warnings (17/68 and 8/40) reflect that focused disposition, not unread source
text.

## 4. Dependency accounting and checks actually run

All commands from the repo root. Results as observed:

| check | result |
| --- | --- |
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-22.pages.json` | `48 item(s), 0 normalized, 0 error(s)` |
| `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json` | `649 scoped item(s), 0 error(s), 0 warning(s)` |
| `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | no dependency-level mismatch in populated batches; run-wide errors are empty scaffold inventories in other batches |
| citation/dep audit (script over the manifest: every `[[id]]` in statement/strategy vs `deps`; unresolvable deps; same-page ordering) | `0 findings`: no missing in-batch or batch-21 dependency, no published citation outside `deps`, no unresolvable dep, no intra-order violation |
| local `undeclared-prereq` audit (in-run dep targets vs the `requires` closure) | every in-run target is either within batch 22 or supplied by batch 21; the cross-batch suppliers from `foliation-holonomy-and-the-holonomy-groupoid` are in the declared `requires` closure, and all other deps are published items on disk |
| Dependency-level changes from the pair-local ACω carrier | six batch-22 labels were recomputed: `lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal` 0→1; `lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex` 1→2; `lem-rational-homology-of-a-closed-smooth-manifold-is-finite-dimensional` 2→3; `lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle` 0→1; `lem-gluing-manifolds-with-boundary-along-a-boundary-diffeomorphism` 0→1; `lem-compact-c1-leaf-has-finitely-generated-fundamental-group` 2→3. No populated item in another batch changed level or depends on the pair-specific ACω IDs. |
| Focused Step-1 item audit (`loadStep3` + `checkStep1`, filtered to batch 22) | 48 items, 48 current `ready` receipts, 0 batch-22 work items. Forty-three stale or missing receipts were refreshed; five already-current receipts were preserved. The whole run remains open on other batches. |
| `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-22.coverage.json` | `2 page(s), 108 harvested result(s), 0 error(s), 2 warning(s)`; the warnings are the two `coverage-low-yield` notes |
| `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-22.coverage.json` | `11/13 source(s) fetch-verified (0 newly stamped)`, `13/13 resolved (2 documented drops)` |
| `node tools/url-sweep.mjs --coverage research/frontier-41-ha-dt-29-batch-22.coverage.json --out /tmp/frontier-41-ha-dt-29-batch-22-url-sweep-final.json --recover` | `8/8 live; 0 failed; 0 recoverable`; the two unavailable primary sources are documented drops |
| `node tools/source-backing.mjs --coverage research/frontier-41-ha-dt-29-batch-22.coverage.json --liveness /tmp/frontier-41-ha-dt-29-batch-22-url-sweep-final.json --reharvest-plan /tmp/frontier-41-ha-dt-29-batch-22-reharvest-plan.json` | `24 authored result(s)` all backed by an openable source or documented alternative argument |
| `node tools/extcheck.mjs --quiet` | exit 0 (its recorded-not-proved findings are outside this batch) |
| `node tools/fwdcheck.mjs --quiet` | exit 0 — every forward reference in the authored corpus is declared and closed (batch-22 items are scaffolds, not on disk) |
| `node tools/depcheck.mjs --quiet` | exit 1 — pre-existing repo-wide `published-unaudited` findings on other tracks' published items (no verification flag); none concerns a batch-22 item or a supplier read here |
| `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; batch 22 is not yet spliced, so the relevant local check is the `undeclared-prereq` audit above |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` | refreshed after three obsolete smooth-C¹ edges were removed; 37 item edges for batch 22 against batch 21, all with verified review rows; 0 orphaned reviews; 1 incoming supplier-side page edge |

## 5. Readiness records

Batch 22 now has 48 current receipts, all `ready`. The 43 stale or missing records were refreshed from the final manifest and exact dependency lists; five unchanged ready records were already current and were preserved. The target is an owner-authored `ready` record with all 15 direct dependencies and the current hash recorded above. Each of the 12 added local suppliers also has a current `ready` receipt. The focused check finds no batch-22 work item; the run-wide check remains open on other batches.

## 6. Escalations and residual uncertainty (honest)

1. **Thurston stability: local proof route closed; owner receipt is ready.** §3 records the C¹ item statement, full-text source and proof gaps closed in the interval-germ argument, plus the C¹ holonomy/product, embedded-leaf and finite-generation suppliers. The final dependency and source checks pass, and the owner-authored receipt reflects the current 15-dependency proof route.
2. **Coverage low-yield warnings.** 17/68 and 8/40: the pair is a focused
   stability pair, and most declined headings belong to adjacent pages (taut
   foliations and dead ends → DT-31; variational Morse theory; Lie-groupoid
   sections → DT-29). Each decline carries a specific written reason in the
   coverage file.
3. **MMF unavailability.** Accepted drop; the design's MMF locators remain
   recorded as history. The one-treatment source-depth warning of design §8/§11.4
   is preserved, not silently repaired.
4. **Design deviations recorded.** (i) Twenty-eight support items added (table in §2);
   (ii) item 13 retains the design-mandated C¹ foliation scope, with the local product strengthening and C¹ prerequisites scaffolded here; (iii) the global
   theorem is stated in the §12.5 closed form; (iv) the mapping torus clause was
   made a bundle-level claim (§2).
5. **Published defects.** No defect was found in the published suppliers this
   batch consumes; their statements and the interfaces used were read (Frobenius
   page, boundary/collar page, covering/fundamental-group pages, oriented
   intersection page, the DT-1/DT-2/DT-5 Morse items,
   `thm-cellular-homology-computes-singular-homology`,
   `thm-topological-manifolds-are-metrizable-and-paracompact`,
   `lem-subgroups-of-free-abelian-groups-are-free`,
   `cor-fundamental-group-of-two-dimensional-torus`). Two axiom-strength
   disclosures rather than defects: the published excellent-Morse existence
   corollary and the published free-abelian-subgroup lemma are stated under the
   full axiom of choice, so the global limit argument is AC-full (see §2). The
   §12.7 deferred repairs to the published DT pages remain the owner's; nothing
   here depends on a repaired item.
6. **Conventions to watch in Step 3.** (a) the deck-action convention and the
   diagonal-action invariance of the transport lemma (§2); (b) the
   Hausdorff-metric subsequence and the "leaves meeting a closed transversal form
   an open saturated set" steps spelled out in
   `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness`;
   (c) the bundle-level reading of `prop-mapping-torus-...`'s last clause;
   (d) the free involution used in the Möbius example; (e) the local Thurston proof
   must retain the fixed-word displacement estimates and explicit projection to $\mathbb Z$.


## ACω dependency-contract audit (2026-10-05)

Use the supplier-first audit at `research/frontier-41-ha-dt-29-ac-omega-contract-audit.md`. Batch 22 has 14 affected item contract(s): cex-a-compact-leaf-with-infinite-fundamental-group-can-still-have-trivial-holonomy, cex-a-reeb-component-has-a-compact-boundary-leaf-with-infinite-holonomy-behaviour, def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary, def-transversely-oriented-codimension-one-foliation, ex-a-fibration-over-the-circle-as-a-global-stable-foliation, ex-finite-holonomy-mobius-normal-model, ex-product-foliation-near-a-compact-trivial-holonomy-leaf, lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle, lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal, lem-finite-holonomy-acts-on-a-small-transverse-disk, lem-oriented-intersection-detects-nonvanishing-rational-homology, prop-gluing-two-reeb-components-gives-a-foliation-of-s-three, rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group, rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form. The audit records the exact smooth-distribution/coorientation/holonomy use, the axiom supplier, downstream propagation, and omitted atlas-only or pure-planar nodes. Coverage dependency projections and affected cross-batch rows were synchronized; receipts, gates and autopilot state were not refreshed.
## Owner-local readiness repair (2026-10-05)

A boundary-tangent codimension-q foliation restricts to leaf dimension n−q in the (n−1)-dimensional boundary, hence boundary codimension q−1. The half-space strategy now uses R^(n−q)×∂H^q. The direct Reeb-solid-torus, gluing and batch23 Reeb-component consumers already use the q=1 boundary as one whole leaf and therefore retain their conclusions.

Transverse holonomy transport Φ(yhat,t) lies in the leaf through t, not the central leaf through p(yhat). The normal-model and local-Reeb conclusions now correctly say nearby leaves are finitely covered by the holonomy cover Lhat; their projection to L remains a finite covering. The original assertion that L itself finitely covers every nearby leaf was false in general. The deck-group construction now prepends based loops to path-class representatives rather than attempting to lift a loop based at x from an arbitrary point over y. Arbitrary holonomy acts by germs; a common neighborhood action is claimed only when realized, with the finite-group realization supplied by the next lemma. Finite representatives are first restricted so every group-law equality and composition domain is compatible. The torsion-free germ argument now permits either side of zero and restricts all first n iterates before using monotonicity.

For the mapping-torus action k·(x,t)=(fᵏ(x),t+k), positive-time return is f⁻¹: [x,1]=[f⁻¹(x),0]. The bundle classification and triviality criterion are retained; the batch23 positive taut example uses a gluing-compatible fibre path and does not require a fixed point. These are supplier-interface repairs and construction readiness, not independent proof certification.

### Exact current Step-1 receipt refresh inventory

30 current receipts were recorded through `tools/step1-decisions.mjs record` in supplier-first order. Existing hash-current rows were preserved. This records construction readiness, not independent proof certification.

- `def-transversely-oriented-codimension-one-foliation` — `ready`; `owner: false`.
- `def-foliation-tangent-to-the-boundary-of-a-manifold-with-boundary` — `ready`; `owner: false`.
- `lem-germs-of-orientation-preserving-diffeomorphisms-of-the-line-at-zero-are-torsion-free` — `ready`; `owner: false`.
- `lem-deck-group-of-the-holonomy-cover-is-the-holonomy-group` — `ready`; `owner: false`.
- `lem-finite-holonomy-acts-on-a-small-transverse-disk` — `ready`; `owner: false`.
- `def-finite-holonomy-normal-model` — `ready`; `owner: false`.
- `lem-transverse-holonomy-transport-is-well-defined-and-equivariant` — `ready`; `owner: false`.
- `lem-the-normal-model-map-is-a-foliated-local-diffeomorphism` — `ready`; `owner: false`.
- `lem-the-normal-model-map-restricts-to-a-diffeomorphism-onto-a-saturated-neighbourhood` — `ready`; `owner: false`.
- `thm-local-reeb-stability` — `ready`; `owner: false`.
- `cor-trivial-holonomy-gives-a-product-foliated-neighbourhood` — `ready`; `owner: false`.
- `cor-finite-fundamental-group-is-a-sufficient-not-necessary-reeb-stability-hypothesis` — `ready`; `owner: false`.
- `lem-a-compact-codimension-one-leaf-with-finite-fundamental-group-has-trivial-holonomy-when-transversely-oriented` — `ready`; `owner: false`.
- `lem-a-non-closed-leaf-of-a-codimension-one-foliation-meets-a-closed-transversal` — `ready`; `owner: false`.
- `lem-oriented-intersection-detects-nonvanishing-rational-homology` — `ready`; `owner: false`.
- `lem-compact-stable-leaves-form-an-open-saturated-set` — `ready`; `owner: false`.
- `lem-compact-leaf-control-and-compact-ambientness-give-the-required-closedness` — `ready`; `owner: false`.
- `lem-a-compact-connected-one-dimensional-manifold-without-boundary-is-a-circle` — `ready`; `owner: false`.
- `lem-a-compact-holonomy-free-codimension-one-foliation-is-a-fiber-bundle-over-its-leaf-space` — `ready`; `owner: false`.
- `thm-global-reeb-stability-for-transversely-oriented-codimension-one-foliations` — `ready`; `owner: false`.
- `prop-mapping-torus-foliations-realize-global-reeb-stable-examples` — `ready`; `owner: false`.
- `prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf` — `ready`; `owner: false`.
- `prop-gluing-two-reeb-components-gives-a-foliation-of-s-three` — `ready`; `owner: false`.
- `rem-transverse-orientability-is-load-bearing-in-the-global-codimension-one-form` — `ready`; `owner: false`.
- `rem-compact-leaf-does-not-mean-finite-holonomy-or-finite-fundamental-group` — `ready`; `owner: false`.
- `ex-product-foliation-near-a-compact-trivial-holonomy-leaf` — `ready`; `owner: false`.
- `ex-finite-holonomy-mobius-normal-model` — `ready`; `owner: false`.
- `ex-a-fibration-over-the-circle-as-a-global-stable-foliation` — `ready`; `owner: false`.
- `cex-a-reeb-component-has-a-compact-boundary-leaf-with-infinite-holonomy-behaviour` — `ready`; `owner: false`.
- `cex-a-compact-leaf-with-infinite-fundamental-group-can-still-have-trivial-holonomy` — `ready`; `owner: false`.

## Root local stability correction during final Step1 closure

Root discovered and personally repaired two scaffold defects while checking the C2/ACω spherical adapter needed by batch23. The old closedness strategy inferred that a connected saturated Hausdorff limit was one leaf; that inference is false and is removed. The direct replacement excludes a noncompact limit leaf by finite rational-homology independence, then uses finite holonomy generators and compact transverse intersections to identify nearby compact leaves as one-sheeted graphs. No hyperspace single-leaf inference remains. The ordinary global theorem retains its actual full-AC/smooth scope; batch23 builds its separate C2/ACω spherical adapter locally and does not consume this stronger-scope theorem.

The intersection carrier now states its actual arbitrary-dimensional codimension-one pairing with consistently induced orientations. Its homology proof uses a finite relative smooth-chain pullback and cancellation of oriented one-dimensional boundaries. It does not confuse homotopy invariance with homology invariance or perturb prescribed boundary intersections away. Closedness uses H_(dim M−1), and an orientation double cover handles nonorientable ambient manifolds. The compact-reference graph argument is written inline, so no forward dependency on batch23 is added. Changes are to scaffold strategies/contracts, with supported evidence synchronization due at the final stable-content pass. No authored item Markdown or controller was edited.

## Constructive author completion — 2026-10-06

The interrupted process's seven missing outputs were finished in one bounded pass; original48 plus its existing local group-image lemma are registered (49 total). The current full report is `research/frontier-41-ha-dt-29-step3b-pair-reeb-stability-and-global-foliation-constructions.md`; current commands/outputs/hashes are `research/frontier-41-ha-dt-29-batch-22.author-completion-checks.json`. The finite-homology/one-sheeted graph route preserves the full smooth/full-AC global theorem. Root adjudicated the false arbitrary-open-neighborhood localization clause with the explicit R×S¹ first-integral counterexample; the valid global existence claim remains. Actual monodromy, finite π1 versus trivial holonomy, finite singular-chain intersection and compact-to-Hausdorff embedding defects were corrected. No Step1/Step3 decisions, dispatch results, engine controls, publication/audit stamps or unrelated batch items were written.

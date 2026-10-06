# Frontier 41 (HA + DT) — batch 20 Step 1 notes

**Owner:** beta, batch 20. **Pair:** `characteristic-class-obstructions-to-immersions-and-embeddings` /
`characteristic-class-obstructions-to-immersions-and-embeddings-examples` at orders 571/572,
differential topology (DT-28). This file records scaffold decisions and evidence, not Step-3
mathematical approval. All 23 items are recorded `ready`; nothing is recorded `escalated`.

## Scope, plan and design

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`, the batch task
`research/frontier-41-ha-dt-29-beta-20.task.md`, the design at
`research/plan-differential-topology-track.md` §DT-28 (line 1417), the binding repairs in §10
(choice ledger), §11.3–§11.4 and §12 (especially §12.4 exact `requires` arrays, §12.5 DT-28
repair, §12.1 the four orientation leaves), `research/plan-spec.json` orders 571/572, the
batch-2/11/17/18/19 artifacts as format and evidence models, and the published statements (not
only the titles) of every supplier consumed. The owner direction's DT clauses are respected: no
planned supplier is treated as published, all coefficient/dimension/regularity qualifications
are printed, and every discovered source or route problem is recorded below.

The A page carries 19 items: the 14 design rows (§12.5 replaces row 7 and constrains row 8),
one local prerequisite lemma for the embedding case of the normal identity, the choice-free generic
pullback lemma for a trivial bundle, its separate `AC_ω` tangent-bundle specialization, one local
lemma computing the tangent bundle of `RP^m`, and one local algebra lemma for the truncated
polynomial inverse. The B page carries the 4 design rows.

## Conflicts and sharpenings, all resolved in favour of the binding plan text

1. **Design "Requires" prose vs the exact plan array (recorded conflict).** The DT-28 design text
   names `obstruction-theory-postnikov-towers-and-classifying-spaces` and DT-25–DT-27. The exact
   §12.4 plan array retains DT-25 (`formal-immersions-and-the-smale-hirsch-theorem`) but omits the
   classifying-spaces page and DT-26/DT-27. Per the dispatch, the plan array controls. This batch
   consumes DT-25's normal-bundle, regular-homotopy-definition and Smale–Hirsch existence items;
   it does not consume sphere eversion, regular-homotopy classification, or classifying-space
   machinery.
2. **§12.5 mandatory replacement (implemented).** Design row 7 is replaced by
   `lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class`, stated
   for `p(TM)p(ν)=1` in `H^*(M;Q)`; row 8
   (`cor-high-normal-pontryagin-classes-obstruct-oriented-immersions`) uses the same rational
   coefficient ring. The integral Whitney-product caveat of AT-20
   (`thm-pontryagin-whitney-product-away-from-two`) is retained verbatim in both items; no
   integral identity is asserted. Because the AT Whitney-product item assumes a path-connected
   base, both items are stated for a closed **connected** `M`; the disjoint-union case is handled
   componentwise (recorded in the item strategies).
3. **Euler/normal-class clause (proof scope sharpened).** The implemented proposition states the
   local DT-12 identities for a closed oriented embedded half-dimensional $A^m\subseteq X^{2m}$:
   $A\cdot A=\langle e(\nu_A),[A]\rangle$ and the Euler class is represented by the zero locus
   of a transverse section. It retains the even-versus-odd-rank comparison, the mod-two clause, and
   the immersion normal-section/zero-count statement. For an immersion, regular-homotopy invariance
   is proved from the vertical derivative over $M\times I$: its image is a smooth subbundle, the
   quotient is an oriented rank-$m$ bundle, and the endpoint Euler classes are equal by naturality
   and homotopy invariance of singular cohomology. No signed double-point formula is asserted or
   imported. The separate Skopenkov identification of a double-point cycle with the normal
   Stiefel–Whitney class remains deferred; see the coverage dispositions below.
4. **Design B item 4 witness substituted (recorded conflict).** The design asks for "nontrivial
   knots with trivial normal bundle". Every provable non-isotopy witness for circle embeddings in
   `R^3` uses knot invariants (knot group/Alexander-type invariants) that belong to the
   braid/knot track (frontier-40) and are outside this run's closure; batch 19 made the same
   substitution for its analogous counterexample. Batch 20 implements
   `cex-vanishing-stable-characteristic-classes-does-not-make-two-embeddings-isotopic` with the
   standard versus reflected embedding of `S^2` in `R^3`: both normal line bundles are trivial
   (oriented hypersurfaces), so all stable characteristic classes agree. Isotopy extension gives an
   ambient endpoint; compactness preserves the bounded complementary component, and the induced
   boundary-orientation contradiction proves they are not isotopic. The
   design's scope ("vanishing classes do not imply isotopy") is preserved; the `S^1` knot witness
   is reported to the owner as a cross-track prerequisite rather than claimed here.
5. **Design item 10 made exact.** "Use its highest nonzero term" is implemented as the exact top
   degree `d(m) = max{i ≤ m : i ∧ m = 0}` of `(1+a)^{-(m+1)}`, with the family `m = 2^p`
   (`d = m−1`, so `RP^{2^p}` does not immerse in `R^{2^{p+1}−2}`) and the `RP^9`/`RP^4`
   illustrations on the B page. This agrees with Milnor–Stasheff Theorem 4.8 and with Cohen's
   Corollary 10 example. Massey's theorem and the immersion conjecture (Cohen Theorems 11–12) are
   **not** included: the design's inventory stops at the projective-space computation, and the
   conjecture needs the full immersion-dimension machinery; disposition `out-of-scope` in the
   coverage file.
6. **Source-range extension (recorded).** The plan's DT-28 source row lists Milnor–Stasheff
   Chs. 11, 14–15 for application formulas. The `RP^m` computation actually consumed lives in
   Ch. 4 §4.4–4.8 (Lemma 4.4, Theorems 4.5 and 4.8, Corollary 4.6, the immersion paragraph) and
   the single-generator computation in §11 (Corollary 11.15); both were read in full from the
   complete text and are recorded in the coverage locators. This is a range extension of a
   registered source, not a new source.
7. **Cohen book access point dead; recovered.** The plan's registered access point
   `https://math.stanford.edu/~ralph/bookR3.pdf` is HTTP 404 (236-byte error page). Recovery on the
   next attempt used the author's complete `bookR4.pdf` (5,961,518 bytes, 568 pages) already
   genuinely fetched by earlier batches of this run; §7.2 at printed pp. 226–232 (PDF pp. 238–244)
   was inspected. The attempt history is preserved in the coverage `recovery_attempts`. The source harvest records the strong Whitney embedding/immersion dimension theorem as out of scope; the local normal-inverse existence argument uses only the published finite-dimensional Euclidean embedding theorem.
8. **Skopenkov access point.** The plan registers the arXiv `/abs/` landing page; the full text was
   read at `/pdf/math/0604045` (838,568 bytes, 70 pages), article §§1–2 pp. 1–13, with the
   "Whitney obstruction" subsection on pp. 11–12 read in full.

## Construction-time mathematical content and the closure checks

Dependency levels: the manifest carries the recomputed labels for all 23 items (A page levels
0–13; B page 4–14). The level-12/13 items are the two that consume DT-25's Smale–Hirsch weak
homotopy equivalence (batch 17, level 11) and the level-13 proposition that consumes it; that
edge is recorded in the cross-batch ledger. No cycle exists and no label was set by hand.

Verified dependency interfaces (statements and proofs read, not just titles):

- **Normal inverse setup.** `def-stable-normal-inverse-of-the-tangent-bundle` is the inverse-bundle
  formulation (Cohen's `k`-dimensional inverse) and is explicitly distinguished from the
  published stable normal bundle `def-stable-normal-bundle-of-a-compact-smooth-manifold`; the
  converse classification is not asserted. The embedding lemma
  `lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity` consumes the published
  metric/tubular normal-bundle identification with its inherited `AC_ω`, and supplies existence
  for every closed `M` by the published Whitney embedding theorem. The immersion lemma
  `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle`
  consumes batch 17's `def-normal-bundle-of-a-formal-immersion` and
  `lem-formal-immersion-gives-the-tangent-normal-bundle-identity` plus the `AC_ω` tangent-bundle
  specialization of the choice-free product-pullback lemma
  (`cor-pullback-of-the-tangent-bundle-of-euclidean-space-is-trivial`).
- **Smale–Hirsch sufficiency.** `prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension`
  builds the constant-map formal immersion from the rank-`k` inverse and applies batch 17's
  `thm-smale-hirsch-immersion-theorem` only through its `π_0` bijection. The statement claims
  existence only; it deliberately does **not** claim that the produced immersion's normal bundle
  is the supplied `ν` (that refinement needs the formal-homotopy normal-bundle comparison and the
  full `π_0` classification, which the page does not build). Together with the immersion lemma it
  gives the existence equivalence "immersion into `R^{m+k}` ⇔ rank-`k` stable normal inverse" for
  closed `M`, `k ≥ 1`, which is the completeness statement the design asks for.
- **Stiefel–Whitney inverse.** `lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class`
  uses only the AT isomorphism-invariance, Whitney product and trivial-summand clause; the
  admissible-base hypotheses of the AT items are discharged by the published
  `lem-second-countable-smooth-manifolds-have-cw-homotopy-type`. Rank vanishing is the AT
  definitional convention `w_i = 0` for `i > rank` (checked in
  `def-stiefel-whitney-classes-from-the-projective-bundle-relation`), so the corollary
  `cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions` is immediate.
- **Pontryagin inverse.** `lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class`
  is stated over `Q` because the AT Whitney product holds only modulo 2-torsion integrally; the
  rational rank-vanishing `p_i = 0` for `2i > rank` is the published AT item, and the corollary
  uses it. Orientability is not needed (checked; the design's "oriented" label is conservative and
  the statement notes this). The `CP^2` illustration in the strategy uses `p̄_1(CP^2) = −3a^2 ≠ 0`
  and is the standard classical case where the rational test beats the mod-two test.
- **Euler-class/self-intersection.** As recorded in conflict 3, the proposition states DT-12's two
  theorems for an embedded half-dimensional `A`, with the even-rank integral clause and the mod-two
  clause; the immersion reading is restricted to the zero-locus/section statement. The published
  `prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion` is what makes the parity
  discussion correct.
- **Projective-space computation.** `lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space`
  reproduces Milnor–Stasheff Lemma 4.4/Theorem 4.5 locally (graph charts of lines,
  `T=R L^*⊗L^⊥`, metric splitting, `L^*≅L`), and
  `lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring` proves the
  inverse identity `(1+t)^{-(m+1)} = Σ_{i∧m=0} t^i` by the Frobenius product identity. Division
  by the monic polynomial `t^{m+1}` justifies the unique remainder basis, and the weak-composition
  expansion proves the binomial coefficient description inline. The unrelated projective-space
  cohomology example dependency has been removed; the algebra proof is choice-free.
- **Parallelizable case.** The proposition uses the trivialization to build the rank-`k` inverse
  and the Smale–Hirsch existence proposition; the B-page torus example consumes the published
  left-invariant framing theorem. The item explicitly denies embeddability and dimension
  consequences.

Choice accounting (plan §10), after the proof audit: the definition of a stable normal inverse is
choice-free as a definition; its explicitly stated existence clause for every closed manifold is
under `AC_ω` and cites `def-countable-choice`. The four `AC_ω`-only item statements are
`cor-pullback-of-the-tangent-bundle-of-euclidean-space-is-trivial`,
`lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity`,
`lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle`,
and
`prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension`;
each has a direct `def-countable-choice` dependency. The generic product-pullback lemma and the
truncated-polynomial lemma are choice-free. All 16 statements consuming full-AC characteristic
class, Thom, projective-bundle, or related suppliers say `Assume AC` and depend on
`def-axiom-of-choice`. Where a full-AC consumer directly uses an `AC_ω` supplier, it also cites
`thm-choice-implies-dependent-implies-countable-choice`; this keeps the stronger AC statement
while proving the needed implication locally. No item consumes a Recorded (not-proved-here) result;
the only `external_refs` target is batch 19's Haefliger–Weber boundary remark, which is mentioned
and not used.

## Published-source gaps and scope

No defect was found in a published item consumed by this batch. The audit did not consume
Skopenkov's double-point-cycle/Poincaré-dual identification: the source states the equivalence but
points to other works for the bridge, and this batch does not prove cyclehood, homotopy independence,
or the Stiefel–Whitney identification. Those rows are explicitly `deferred` in the coverage files.
The local immersion result is only the Euler zero-count and its regular-homotopy invariance. The
B-page knot witness remains substituted by the locally proved S² orientation witness.

## Focused checks for the current 23-item carrier (2026-10-05)

- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-20.pages.json`
  → `manifest-deps: 23 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json`
  → `content-policy: 771 scoped item(s), 0 error(s), 0 warning(s)` across the current run manifests.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-20.coverage.json --require-destination`
  → `2 page(s), 79 harvested result(s), 0 error(s), 2 warning(s)`. Both warnings are the advisory
  low-yield rows (13/43 and 11/36 included); the remaining source claims have explicit dispositions.
- `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` reports only two errors:
  batch 24's A/B empty scaffold inventories. An independent calculation over the current manifests
  gives batch20 A levels 0–13 and B levels 4–14, with zero batch20 label mismatches.
- `node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-20.coverage.json`
  → all 7 sources fetch-verified and resolved. A fresh temporary URL sweep reports 4/4 live and no
  failed citations; source backing reports 13 authored results, all still backed by an openable
  source or documented alternative argument.
- The refreshed unified cross-batch ledger has 568 edges, all batch inputs reviewed, and zero orphan
  reviews. It records the bounded-component S² witness's isotopy-extension edge and the Euler
  proposition's regular-homotopy and formal-normal-bundle edges.
- The focused Step-1 check used one `loadStep3` snapshot and `step1Decision` for every batch20 item:
  23/23 decisions are current and ready, with no owner-held batch20 record. This is a batch-local
  result; it does not claim that full-run Step 1 is closed. No full-run Step-1 count is reported here.

No controller, full-run gate, or item-mode authoring gate was run in this batch20-only pass.

## Unresolved findings and owner notes

1. The page-level edge to `characteristic-numbers-and-cobordism-obstructions` currently has **no
   item-level use** in this batch (all class computations use the AT construction pages directly).
   It is retained because §12.4 fixes the array exactly; Step 3 should not invent a consumption to
   justify it. Recorded in the cross-batch ledger for owner reconciliation.
2. The two design-prose dependencies dropped by the plan array
   (`obstruction-theory-postnikov-towers-and-classifying-spaces`, DT-26) remain dropped unless the
   owner amends the plan; no item needs them.
3. Skopenkov's double-point-cycle/Poincaré-dual identification remains deferred: the source asserts
   the equivalence but cites other works, while this batch does not prove cyclehood,
   homotopy-independence, or identification with the normal Stiefel–Whitney class. Coverage marks
   both the cycle-dimension and characteristic-class identification rows `deferred` with the
   missing bridge stated explicitly.
4. The `S^1` knot witness requested by design B item 4 is a cross-track prerequisite owned by the
   braid/knot work; the substituted `S^2` witness proves non-isotopy by preservation of the bounded complementary component and the boundary-orientation contradiction.
5. Source-range extension to Milnor–Stasheff Ch. 4 is recorded; Step 5 readers should treat Ch. 4
   pp. 43–48 as part of the read range for this pair.

## Earlier post-check correction (2026-10-05)

The companion-page item `ex-the-normal-line-of-an-oriented-hypersurface-is-trivial` originally cited the
published *definition* `def-induced-orientation-on-a-hypersurface-from-a-coorientation` for the claim that the
orientations of the ambient space and of an oriented hypersurface determine the normal orientation. That
definition goes in the opposite direction (coorientation to induced orientation). The item now cites the
published two-of-three proposition `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold`
together with the bundle-metric and frame-criterion items. Its dependency level was recomputed from 3 to 4
because the normal-class definition now depends on the ACω embedding lemma; its readiness record was
refreshed. The current item and dependency-level checks are recorded above; the earlier phrase “whole Step-1 battery” referred to a batch-local validation pass, not
full-run Step-1 closure. The current pass checks all 23 batch20 decisions and reports no run-wide readiness
count.


Root consumer reconciliation (2026-10-05): the batch19 collision-image/branch-pair definition correction does not alter the no-triple push-off statement. The branch-pair/image bijection and projected collision notation are now explicit in the push-off proof. Normal addition is injective only locally over each sufficiently small source chart; finite such charts give uniform near-diagonal control even though the immersion has double points. Regenerated this item's exact proof-contract citations/derivations after the correction. Precheck1/1 and proof-layout5steps/0defects pass; these are local checks, not independent audits. Final certificate awaits all writer drainage.

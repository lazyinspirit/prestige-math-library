# Step 3a scope review — pair `characteristic-class-obstructions-to-immersions-and-embeddings`

- Run `frontier-41-ha-dt-29`, batch 20 (the batch file serves sibling pairs; only this pair is touched here).
- A page `characteristic-class-obstructions-to-immersions-and-embeddings` (order 571), B page
  `characteristic-class-obstructions-to-immersions-and-embeddings-examples` (order 572), category
  differential-topology, design §DT-28.
- Pair inventory: 23 items — 19 A + 4 B; all 23 step-1 readiness records `ready`. The manifest
  `requires` array is the §12.4 binding array verbatim.
- Decision recorded with `tools/step3-decisions.mjs record-scope` for the A page (review-of-record,
  covering the pair): **`insufficient`**. No scaffold, item, coverage, or owner record was edited.

## Inputs read

- `research/frontier-41-ha-dt-29-batch-20.pages.json`, `.coverage.json`, `.notes.md`; plan §7 line 57,
  §DT-28 (L1417–L1454), §9.4 rows H133–H136 (L1843–L1847), §10 (L1919–L1945), §12.1, §12.4 (L2244),
  §12.5 DT-28 (L2317–L2321) of `research/plan-differential-topology-track.md`; `research/plan-spec.json`
  orders 571/572; batch-20 cross-batch ledger; `research/frontier-41-ha-dt-29-scope-ledger.json`;
  drift evidence entries for the two pages; owner-authoring-direction (no pair-local clause; its DT
  clauses are respected by the batch); published statements of the consumed suppliers (spot-read,
  not only titles).
- Independent source reads this session, on hash-matched complete texts:
  - Milnor–Stasheff, *Characteristic Classes* (`/tmp/f41-milnor-stasheff.pdf`, 13,204,109 bytes,
    sha256_16 `e5a712237dd7959a` = run `fetch_verified`): §4 printed pp. 43–48 (Lemma 4.4, Thm 4.5,
    Cor. 4.6, immersion paragraph, Thm 4.8) and §11 printed pp. 119–121 (Thm 11.3, definition of the
    dual class, Cor. 11.4, and the projective-space non-embedding example).
  - Skopenkov, *Embedding and knotting of manifolds in Euclidean spaces* (arXiv:math/0604045; fetched
    838,568 bytes, sha256_16 `fe605cb3d28213fc` = run `fetch_verified`): article p. 7 and the
    “Whitney obstruction” subsection on article pp. 11–12, read in full.
  - Cohen’s immersion notes and book were not re-fetched; their registered locators are used only where
    the batch coverage records a full-text read (uncertainty stated at Finding 4).

## Design vs scaffold (scope, not proof)

All 14 A design rows are present, and so are all 4 B rows:

| §DT-28 design row | Scaffold |
|---|---|
| 1 stable normal inverse definition | `def-stable-normal-inverse-of-the-tangent-bundle` |
| 2 immersion normal identity | `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle` |
| 3 embedding normal identity | `lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity` |
| 4 Smale–Hirsch rank-reduction sufficiency | `prop-smale-hirsch-makes-rank-reduction-sufficient-for-euclidean-immersion-in-positive-codimension` |
| 5 SW inverse of the tangent class | `lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class` |
| 6 high normal SW classes obstruct immersions | `cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions` |
| 7 Pontryagin inverse (§12.5 replacement) | `lem-normal-pontryagin-class-is-the-rational-inverse-of-the-tangent-pontryagin-class` (over Q, 2-torsion caveat printed) |
| 8 high normal Pontryagin classes | `cor-high-normal-pontryagin-classes-obstruct-oriented-immersions` (same coefficient qualification) |
| 9 Euler class controls self-intersection | `prop-euler-class-of-an-oriented-even-rank-normal-bundle-controls-self-intersection` |
| 10 projective-space non-immersion theorem | `thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction` |
| 11 parallelizable case | `prop-parallelizable-manifolds-have-no-stable-characteristic-class-obstruction-to-euclidean-immersion` |
| 12 embedding obstructions include immersion tests | `cor-embedding-obstructions-include-all-immersion-normal-class-obstructions` |
| 13 vanishing is only necessary | `rem-characteristic-class-vanishing-is-only-necessary-for-embedding` |
| 14 construction is cited, not rebuilt | `rem-characteristic-class-construction-is-cited-not-rebuilt` |
| B1–B4 | the four B items, with the documented B4 witness substitution (S² reflection for the cross-track knot witness) |

The five added support items (`lem-pullback-of-a-trivial-…`, `cor-pullback-of-the-tangent-bundle-…`,
`def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold`,
`lem-the-inverse-of-one-plus-the-generator-…`, `lem-stiefel-whitney-classes-of-the-tangent-bundle-of-real-projective-space`)
are the design’s own “Hard-proof closure” made local (choice-free pullback, the AC_ω specialization,
the normal-class definition, and the two computational lemmas). No design row is dropped; the
`requires` array and the §12.5 rational-Pontryagin repair are implemented exactly. The narrowing
recorded at Finding 2 is the one exception to “role preserved”.

## Source coverage

79 harvested rows with explicit dispositions. Every `included` row is realized by the named item, and
every `deferred` row names an in-run page that really carries the result (DT-25 batch 17, DT-26, DT-27
batch 19). The declines are genuine for the Massey/immersion-conjecture, eversion, cobordism,
Haefliger-classification, BO(k)-lifting, and integral-Whitney rows. Three declines are not adequate:

1. **MS §11 Theorem 11.3 and Corollary 11.4 are marked `out-of-scope`** (reason: “normal-bundle duality
   results … consumed through the published AT Whitney-product interface and DT-12’s zero-locus
   duality”). Read in the source, Thm 11.3 is the embedding statement — the composite
   H^k(A,A−M) → H^k(A) → H^k(M) maps the fundamental class u′ to the top Stiefel–Whitney class
   w_k(ν^k) of the normal bundle — and Cor. 11.4 is its corollary: if M^n is smoothly embedded as a
   closed subset of R^{n+k}, then w_k(ν^k) = 0, and e(ν^k) = 0 in the oriented case; the example on
   printed p. 121 is that P^n for n = 2^r cannot be smoothly embedded in R^{2n−1}. The stated reason
   addresses the immersion-side duality only and does not dispose of this content. The scaffold’s own
   MS locator in fact cites “§11, printed pp. 119–136 (Theorem 11.3, …)”, so the pair’s evidence
   bundle is internally inconsistent about this theorem.
2. **Cohen book Proposition 7.4 is marked `inline` to
   `rem-characteristic-class-vanishing-is-only-necessary-for-embedding`**, but that item’s statement
   and strategy do not state “RP^{2^k} embeds in R^{2^{k+1}} but not in R^{2^{k+1}−1}”. The mapping
   overstates what the item records.
3. **Skopenkov’s mod-2 Whitney obstruction is `deferred` with destination `owner-decision`** — the
   source’s central claim of the subsection the design harvests as “included” (§9.4 row H135, L1847):
   w̄_{m−n}(N) := [Σ(f)] ∈ H_{2n−m}(N;Z₂) is a cycle, independent of the general-position map f, and
   “if N embeds into R^m, then w̄_i(N) = 0 for i ≥ m−n” (article pp. 11–12; attributed there to
   Whitney 1935). The batch’s deferral reason is honest about the missing bridge (the identification
   with the algebraic normal classes is cited to [MS74]; the source does sketch cyclehood and
   homotopy independence), but the row is not realized by any item.

## Prerequisites

- The eight `requires` pages: `intersection-pairings-self-intersection-and-euler-classes` (batch 2, 531),
  `thom-spaces-normal-data-and-collapse-maps` (published, order 547), `characteristic-numbers-and-cobordism-obstructions`
  (batch 11), `formal-immersions-and-the-smale-hirsch-theorem` (batch 17, 565),
  `isotopy-extension-and-embedding-theory-beyond-whitney` (batch 19, 569), and the three published AT pages
  (`stiefel-whitney-and-euler-classes-by-universal-constructions`, `chern-and-pontryagin-classes-by-splitting-and-complexification`,
  `topological-vector-bundles-and-grassmannian-classification`). All exist and are in reading order.
- Dependency resolution over the 23 items: 50 in-run citations, all homed on A pages earlier in reading
  order (531, 565, 569, and the pair itself); 65 published-file citations, all `status: published`;
  0 unresolved ids; no forward-order dependency and no citation to a B page (§12.1 leaf invariant kept).
  Spot-verified that the DT-25 and DT-27 suppliers named in the strategies exist in those manifests.
- **No unmet prerequisite for the scaffold as written** (confirmed, not merely uncertain).
- For the recommended enrichment (Finding 1) the supplies already exist: published DT-16
  `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual`, `def-thom-class-and-thom-isomorphism-interface`,
  `def-pontryagin-thom-collapse-of-an-embedded-submanifold`, and published AT
  `thm-mod-two-euler-class-is-the-top-stiefel-whitney-class`, `def-euler-class-by-zero-section-pullback-of-the-thom-class`.
  The only step I did not audit item-by-item is the sphere-cohomology input H^k(S^{n+k}) = 0 (0 < k < n+k);
  that is recorded as uncertainty, not as a confirmed gap. For the double-point identification (Finding 2) the
  prerequisite theorem is absent from both the published library and every current scaffold (confirmed).

## Checks actually run (this review)

- `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-20.pages.json` → 23 items, 0 normalized, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-20.coverage.json --require-destination` →
  2 pages, 79 harvested results, 0 errors, 2 warnings (the advisory low-yield rows 13/43 and 11/36, which
  ask Alpha to confirm the declines; this report confirms them except for Findings 1 and 2).
- `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope` → this pair awaited a
  scope review; no prior receipt existed for it.
- Independent hash-checked PDF reads listed under Inputs (MS pp. 43–48, 119–121; Skopenkov p. 7, pp. 11–12),
  plus bounded searches for the top-class embedding statement. `items/` (23,441 files): no hit for
  “embedded as a closed subset”; the three hits for “does not embed / cannot be embedded” are unrelated
  group- and foliation-theoretic uses (`def-markov-property-…`, `prop-embedded-leaves-…`,
  `thm-orbit-map-…`). Current run: no item in any of the 30 manifests states the statement (searched the
  item inventories for the phrase patterns and for `embed`+`obstruct`/`vanish` item ids).

## Findings

**Finding 1 — confirmed omission (scope). The pair contains no embedding-specific characteristic-class
obstruction.** The scaffold states only the transferred rank test (w̄_i ≠ 0 for i > k obstructs immersion,
hence embedding); the published library states no obstruction test of this kind at all (searches above).
The classical embedding test — for a closed
M^m smoothly embedded in R^{m+k}, the *top* normal class vanishes, w̄_k(M) = 0, with e(ν^k) = 0 when ν is
oriented — is absent everywhere. It is not implied by the transfer test, and it is exactly what separates
embedding from immersion by characteristic classes: with it the pair can state that RP^{2^r} (n = 2^r)
does not embed in R^{2^{r+1}−1} (MS printed p. 121; Skopenkov article p. 7; Cohen book Prop. 7.4) although
it immerses there (Whitney’s immersion theorem, MS p. 47, currently recorded `not-supplied` in the library).
The page’s summary promise (plan L57, “explicit nonimmersion/nonembedding tests”) is therefore only half
delivered: the embedding “tests” are the immersion tests transferred. The pair’s own remark even tells the
reader that the rank-vanishings are the necessary conditions, without the top-class clause.

**Finding 2 — the design role of “linking characteristic and double-point obstructions” is not
delivered.** Design row 9’s stated purpose is to link characteristic and double-point obstructions
(“use DT-12 to identify zero-locus/self-intersection”), and §9.4 H135 records Skopenkov §2 “The Whitney
obstruction” as `included` against items 9, 12, 13. The implemented proposition instead states only the
DT-12 Euler/self-intersection identities and explicitly says “No equality between this Euler number and a
signed double-point count is asserted here”; the coverage record defers the source’s identification to
`owner-decision`. Skopenkov’s obstruction is the mod-2 form of Finding 1’s theorem (his “w̄_i(N) = 0 for
i ≥ m−n” includes the top class i = m−n), so the two findings can be resolved by one coherent addition:
the top-class embedding obstruction plus its double-point interpretation.

**Finding 3 — flagged statement defect (authoring repair, not the scope basis).**
`ex-normal-class-calculation-for-real-projective-space` states
w̄(RP⁹) = (1+a)⁻¹⁰ = Σ_{i∈S₉} a^i = 1+a+a²+a³+a⁴+a⁵+a⁶ “because i ∧ 9 = 0 for exactly 0 ≤ i ≤ 6”.
This is false: 9 = 1001₂, so i ∧ 9 = 0 exactly for i ∈ {0,2,4,6}; 1 ∧ 9 = 3 ∧ 9 = 5 ∧ 9 = 1 ≠ 0, and
8 ∧ 9 = 8 ≠ 0. The correct expansion is 1 + a² + a⁴ + a⁶, consistent with the A-page lemma
`lem-the-inverse-of-one-plus-the-generator-…` and with MS’s P⁹ estimate (k ≥ 6; checked independently:
w(TRP⁹) = (1+a)¹⁰ = 1 + a² + a⁸, whose inverse is 1 + a² + a⁴ + a⁶). The stated conclusion (top term a⁶,
no immersion in R¹⁴) remains correct, and the RP⁴ clause is correct. Statement-level; not edited here.

**Finding 4 — record accuracy and uncertainty.** The MS and Cohen-book dispositions above were decided on
locator summaries; I re-read only the MS and Skopenkov passages directly (hash-verified). I did not re-fetch
`bookR4.pdf`; the Prop. 7.4 locator (“§7.2, printed pp. 226–232”) is taken from the batch’s verified fetch
record. Two identical step-3a task files exist for this pair
(`…-9e9e2f1006c21178` and `…-f67f162fb4e01e08`) plus an `attempt-1` prompt for this label; no scope receipt
existed when this review ran, and the owner may wish to confirm no duplicate review writes a second receipt.

## Decision

`insufficient`. The scaffold matches the approved design row-for-row and its prerequisites resolve, but the
planned definitions, results, and examples do not adequately cover the intended subject “characteristic-class
obstructions to immersions **and embeddings**”: the pair has no embedding-specific characteristic-class test,
while both registered sources state one. Recommended owner action — **enrich this pair (no merger)**:

1. add an A-page corollary: for a closed smooth M^m smoothly embedded in R^{m+k} (as a closed subset),
   w̄_k(M) = 0, and e(ν^k) = 0 if the normal bundle is oriented — proof through the published DT-16
   collapse/dual-class proposition, the top class as the zero-section pullback of the Thom class (mod 2 and
   integral published items), and H^k(S^{m+k}) = 0 via the one-point compactification; state the equivalent
   Whitney-duality form w̄_k(M) = w_k(ν) = 0 for the rank-k normal bundle;
2. extend `cor-embedding-obstructions-include-all-immersion-normal-class-obstructions` and/or
   `rem-characteristic-class-vanishing-is-only-necessary-for-embedding` so the embedding necessary conditions
   include the top-class clause (and the oriented Euler clause);
3. add the B example RP^{2^r} ↛ R^{2^{r+1}−1} (MS p. 121); state the immersion contrast only if the owner
   authorizes the currently `not-supplied` Whitney R^{2n−1} immersion theorem or a Smale–Hirsch rank-(n−1)
   inverse computation;
4. decide the Skopenkov double-point/Whitney-obstruction row (Finding 2): either add the identification with a
   complete argument or record an explicit owner deferral, and correct the MS §11 and Cohen Prop. 7.4 coverage
   dispositions to match what the items state;
5. repair the RP⁹ expansion (Finding 3) at authoring.

This also makes the currently unused DT-16 page edge load-bearing. Until the owner records a decision
(enrichment `proceed`, or an explicit deferral), this pair is stopped here.

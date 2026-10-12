# Step 3a scope review — pair `equivariant-borel-moore-correspondence-convolution-and-constructible-ext` / `…-examples`

- Run: `frontier-44-special-representation-examples-28`; role alpha; label
  `step3a-pair-equivariant-borel-moore-correspondence-convolution-and-constructible-ext-64074a912f2a7068`.
- Pair: A `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`
  (order 1821, 5 items) / B `…-examples` (order 1826, 2 items), batch 44, category
  `special-topics-in-representation-theory`.
- **Decision: `sufficient`** — scope only; this is not item approval, proof
  certification or an owner record.

## Inputs read

- Manifests: `…-batch-44.pages.json` (both pages, all 7 statements and strategies),
  `…-batch-44.cross-batch-dependencies.json` (19 `verified` rows: 2 page edges +
  17 item edges), `…-batch-44.notes.md`, `…-batch-44.coverage.json`,
  `…-scope-ledger.json` (pair home, baseline commit `069e4514…`).
- Plan/design: `research/plan-spec.json` for both pages (same ids, kinds, orders,
  `requires`), the pair's section of `research/plan-klr-foundation-prerequisites.md`
  L1185–1250, the five carrier drafts under
  `research/frontier-44-special-representation-examples-28-klr-foundation-convolution-drafts/items/`
  (read in full), and the frozen contract
  `…-klr-foundation-convolution-inventory-proofcontracts.json` (A claims, B contracts,
  checks, collision check).
- Owner decisions: `…-owner-authoring-direction.md` — "Build all 24 currently unbuilt
  A/B pairs…" and "Owner same-frontier prerequisite extension — 2026-10-09", which
  lists this pair among the 21 appended prerequisite pairs and requires readings of
  actual supplier statements and necessary intermediate lemmas. No owner or review
  scope receipt exists for this page yet (`step3-decisions check --phase scope`
  reports it outstanding; only 24 of 50 pairs carry scope receipts).
- Drift/Step-1: `…-alpha-step1-drift.md` L346–348: this pair is
  "VERDICT: no-drift (order 1821; declared closure complete; no change)"; all 7 pair
  items have current `…-step1-<item>.json` readiness records.
- Supplier/consumer interfaces: current statements of the in-run suppliers
  (`thm-analytic-sheaf-six-operations-…`, `thm-constructible-six-functors-…`,
  `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`,
  `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`,
  `thm-constructible-sheaves-admit-finite-stratified-triangulations-…`), the batch-47
  consumers, and the published items used
  (`thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle` including its
  "numerable complex bundle over a path-connected CW complex" hypothesis,
  `lem-flag-variety-of-a-vector-space`,
  `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`,
  `cor-a-cw-complex-with-no-cells-in-adjacent-dimensions-has-zero-cellular-boundary`).

## Design vs inventory — full match

The design's "Suppliers" and "Examples" sections name exactly five A contracts and two
B contracts; the plan-spec, the frozen proofcontracts and the batch-44 manifest carry
the same seven ids, kinds and orders.

| design contract (L1185–1250) | scaffolded item |
|---|---|
| L1191–1199 diagonal Thom/exchange on arbitrary supports, iterated diagonals, zero-section Euler clause | `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports` |
| L1201–1207 definition: normalized $\omega_X^G\|_X=\omega_X$, stable Borel value $+2b$, source-first product $h_*\Delta^!(a\boxtimes b)$ with $2d_j$ drop, corner degree | `def-equivariant-borel-moore-homology-and-correspondence-convolution` |
| L1209–1219 $\Phi^r_{ij}:\operatorname{Ext}^r(L_i,L_j)\to H^{\mathrm{BM},G}_{d_i+d_j-r}(Z_{ij})$, all corners/all integers, degreewise finite only | `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product` |
| L1221–1229 $\Phi(\beta[r]\circ\alpha)=\Phi(\alpha)*\Phi(\beta)$, $\operatorname{id}\mapsto[\Delta]$, unital graded algebra, opposite composition | `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution` |
| L1231–1237 flag-incidence spaces: smooth associated bundle, projective $\pi_\nu$, proper middle forgetting, oriented calculus without fiber-product smoothness/transversality, Euler-to-top-Chern | `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus` |
| L1239–1243 unequal-dimension point/$\mathbb P^1$ Ext–BM degree example | `ex-unequal-dimensional-proper-pushforwards-have-the-summed-dimension-ext-bm-shift` |
| L1245–1249 point/$\mathbb P^1$ source-first convolution and opposite-composition check | `ex-a-point-and-projective-line-check-source-first-convolution-and-opposite-composition` |

Design warnings are preserved in the manifest statements: no transversality of
supports; the exchange map is a morphism, not an asserted isomorphism; the normalized
dualizing object (never the quotient-stack shift); source-first/opposite-composition
conventions; $d_i+d_j-r$ with degreewise finiteness only (no semismallness, purity or
decomposition input); arbitrary finite loopless quiver with multiedges and both arrow
directions; the separate zero-section Euler-to-top-Chern clause. Manifest additions
beyond the design's declared inputs are the documented enrichments only: AC
declarations, the equivariant category definition (well-definedness), the batch-37
finite-triangulation supplier for the flag lemma's CW hypothesis, and the published
cellular/Schubert items for the two B examples. No planned claim was dropped, weakened
or replaced; the two B items match both B proofcontracts claim-for-claim.

## Prerequisite closure — no unmet prerequisites

- Direct declarations: 27 distinct ids resolve — 7 pair items; 5 in-run supplier items
  (`thm-analytic-sheaf-six-operations…` and the four batch-41 items) on strictly earlier
  pages (orders 1813 / 1818 < 1821 < 1826; batch-37 triangulation item is level 12 on
  order 1809); 3 in-run page targets (the two `requires` pages 40/41 and the B→A
  companion edge); 9 published items; 3 published requirement pages
  (`chern-and-pontryagin-classes-by-splitting-and-complexification`,
  `relations-functions-and-quotients`, `unipotent-solvable-groups-and-borel-fixed-points`,
  each present under `library/`). **0 ids resolve only to plan-spec and 0 are absent
  from both the published library and the current scaffold.**
- Full transitive closure of the 7 items: 3143 distinct ids — 3017 resolve to published
  item files and 126 resolve to the current run scaffold; again 0 plan-only, 0 missing.
- Tool re-runs (2026-10-10): `manifest-deps` → 7 items, 0 errors;
  `item-dependency-levels check --run` → 858 items across 100 pages, no finding;
  `drift-review-check --run` → 50 pages reviewed, no blocked edges;
  `validate-plan --run` → "no item-level cycles, forward references, B-page
  dependencies, or unresolved ids among the 100 page(s)"; only pre-existing
  `redundant-prereq` advisories for this page's `requires` (analytic-derived and
  relations-functions are reached transitively) — plan-level, no scope change.
- Interface spot-checks against supplier statements confirm the consumed clauses exist:
  three adjunctions, proper/extraordinary base change, projection formula, support
  localization, dualizing transitivity and trace; the equivariant normalization
  $\omega_X^G\|_X=\omega_X$, $\omega_X^G=k_X[2d]$; stabilization/degreewise finiteness;
  finite triangulation models; published Euler=top-Chern on CW bases. Two residual
  interface points are recorded below as Step-3 notes, not as absent prerequisites.

## Intended role in the library

The pair is one of the 21 same-frontier prerequisite pairs appended by the owner for
the KLR chain; its role is the convolution/Ext interface, with the KLR comparison
explicitly deferred. Checked consumers: batch 47
`signed-quiver-flag-convolution-and-klr-ext-realization` (order 1829) names this A page
in `requires` and consumes **all five A items** (Thom lemma, definition, Ext/BM
theorem, product theorem, flag lemma) in four of its items; its contracts use exactly
this pair's conventions (source-first multiplication, Ext degree $n$ ↔ BM degree
$d_\eta+d_\nu-n$, oriented calculus, algebra identification). No other batch consumes
any of the five A items, and no batch at all consumes either B item, consistent with
the owner's "no load-bearing suppliers for other pages on B pages" rule. The B page
requires only the A page. The VV §2–4 KLR material is covered as an explicit `deferred`
row to batch 47, and item 5's strategy states it supplies the calculus, not the signed
crossing formulas.

## Source coverage

- 6 source rows over 5 distinct URLs: Ginzburg `math/9802004` (§1, §2, §5.1),
  Varagnolo–Vasserot `0901.3992` (§1.1–1.10), Varshavsky `math/0505564` (§§0.2–0.4,
  1.1 with the complete 1.1.6(b) proof), Hatcher's *Algebraic Topology* (B examples),
  and the Chriss–Ginzburg monograph **dropped** with a full `source_resolution`
  (attempts, searches, confidence, alternatives).
- Re-run results: `coverage-checklist --require-destination` → 2 pages, 26 harvested
  results, 0 errors, 0 warnings; `source-fetch-check` → 5/6 fetch-verified, 6/6
  resolved (1 documented drop); `url-sweep --recover --fail-on-dead` → 4/4 live, 5
  citation decisions (1 documented drop); `source-backing` → 5 authored results, every
  one backed by an openable source or a documented alternative argument.
- Honest limitation: the [CG, Theorem 8.6.7] text was not read; Ginzburg §5.1 and VV
  Lemma 1.8(b) import it, so the product-compatibility clause rests on the local
  reconstruction (typed triple diagram, mate exchange, orientation comparison,
  Beck–Chevalley unit identity). This is a recorded, quantified source-level
  uncertainty for Step 3 review; it removes no planned item and is not scope loss (the
  design lists the theorem regardless, and the coverage records the drop with its
  alternative).

## Step-3 review notes (no scope action; not proof findings here)

1. **CW bookkeeping in item 5.** The published Euler=top-Chern theorem assumes a
   numerable complex bundle over a path-connected CW base; the scaffold declares the
   batch-37 finite-triangulation theorem for CW models, and the batch notes record the
   exact per-approximation application as a Step-3 authoring obligation. All
   prerequisite claims exist in the scaffold; this is proof-review surface.
2. **Positivity normalization in item 1.** The quoted "smooth orientation normalized by
   the positive compactly supported generator on a complex coordinate ball" is not
   spelled out in the two direct supplier statements; the nearest explicit scaffold
   statements are batch-40's `thm-verdier-duality-on-oriented-stratified-complex-varieties`
   ("the complex orientation normalizes $\omega_X\simeq k_X[2d]$") and the equivariant
   normalization in the batch-41 six-functor theorem. The prerequisite is present in
   the closure (hence not an unmet prerequisite); Step 3b should confirm the lemma
   quotes the right supplier for the positivity normalization.
3. **Definition/product-theorem edge.** The definition's `justified_by` points to the
   later product theorem while that theorem `deps` on the definition; plan validation
   reports no cycle or forward reference, so this is the intended well-definedness
   back-reference, with the agreement clause discharged in Step 3b.
4. **Metadata.** The B titles differ from the plan-spec machine titles (documented in
   the batch notes for owner reconciliation); no claim, kind or inventory changed.
5. **Design-document duplicate.** The design's next pair entry mistakenly cross-lists
   B item 2; the canonical plan and the batch keep its home in this pair (already
   recorded in the step-1 drift review). No scope loss.

## Uncertainty

- Scope only: statements and strategies were read at scope level; no proof is
  certified here. I did not re-derive the Ext/BM chain, the mate comparisons or the
  flag-incidence geometry; supplier proofs remain owed to Steps 3–5. The residual
  mathematical uncertainties I can name are the two Step-3 notes above (CW-type
  application; the CG-reconstruction review).
- No potentially defective published item was found among the cited published deps;
  the spot-read items match their uses at statement level.

## Decision

`sufficient` for `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`:
the planned definitions, results and examples match the controlling design
item-for-item, every design warning survives in the scaffold, all direct and transitive
prerequisites resolve (0 plan-only, 0 missing), sources are fetch-verified and backed
with one fully documented drop and a declared alternative, and the pair's intended role
for the batch-47 KLR realization is satisfied by its five A items with no additional
scope requested. Recorded with `tools/step3-decisions.mjs record-scope`.

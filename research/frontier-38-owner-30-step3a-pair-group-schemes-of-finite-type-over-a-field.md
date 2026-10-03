# Step 3a scope review — `group-schemes-of-finite-type-over-a-field` (A871 / B872)

- Run: `frontier-38-owner-30` (batch 22, orders 871/872, category scheme-theory)
- Pairs reviewed: A `group-schemes-of-finite-type-over-a-field` + B
  `group-schemes-of-finite-type-over-a-field-examples`
- Decision: **sufficient** (recorded by `tools/step3-decisions.mjs record-scope`;
  no unmet prerequisite found; flags below are non-blocking bookkeeping)
- Scope only: item proofs, hypotheses and source wording were not audited here.

## 1. Manifest vs prose design

The AG-GS-1 design row (`research/plan-algebraic-geometry-expansion-track.md:200`,
plan-spec page 871/872) commissions exactly five items. The live batch-22
manifest (`research/frontier-38-owner-30-batch-22.pages.json`) and the five
scaffold item files carry exactly those items, in registered order, with no
local additions:

| item | kind | design-row claim | live statement check |
|---|---|---|---|
| `def-group-scheme-over-a-field` | definition | group object in finite-type $k$-schemes, nonreduced allowed | matches; adds explicit functorial law on $G(R)$ for all $k$-algebras |
| `def-morphism-and-closed-subgroup-scheme` | definition | morphisms and (closed) subgroup schemes | matches |
| `lem-closed-subgroup-scheme-valued-point-criterion` | lemma | identity/multiplication/inverse factorization criterion | matches; all $k$-algebra-valued points, no reducedness/smoothness/algebraic-closedness |
| `ex-additive-multiplicative-and-general-linear-group-schemes` | example | group-object computations for $\mathbf G_a,\mathbf G_m,\mathrm{GL}_n$ | matches |
| `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme` | counterexample | $\operatorname{char}k=p>0$; distinguish $\alpha_p,\mu_p$ from $k$-points | matches for algebraically closed $k$ |

Kind mix (A: 2 definitions + 1 lemma; B: 1 example + 1 counterexample), page
titles, order, companion pointers and `design_row: AG-GS-1` are consistent
between manifest, plan-spec and item frontmatter. A-page `requires`
(`affine-schemes-and-the-structure-sheaf`,
`schemes-subschemes-and-morphisms-locally-of-finite-type`,
`fibre-products-base-change-and-scheme-theoretic-fibres`) are three published,
git-tracked pages; B requires only the in-run A page, which is permitted. No
edge to an unselected pair (873/877) is present.

## 2. Source coverage (independently checked against the fetched full texts)

Both pages record Milne, *Algebraic Groups* (2022) and the complete Stacks
*Groupoid Schemes* chapter, with fetch stamps. I re-read the cited loci from the
receipt-hash files:

- Milne `iAG2022.pdf`, SHA-256 `f2ddd8fa…d21f40`, 659 pp. Printed pp. 6–8
  (PDF 17–19) = Definitions 1.1–1.3 and numbered paragraphs 1.4 (functors of
  points) and 1.5 (all-algebra subgroup criterion). Printed pp. 39–41/44
  (PDF 50–52/55) = 2.1 $\mathbf G_a$, 2.2 $\mathbf G_m$, 2.3 constant groups,
  2.4 $\mu_n$, 2.5 $\alpha_{p^m}$, 2.8 $\mathrm{GL}_n$, 2.14 finite/infinitesimal
  groups. Verified verbatim: 2.5 states $k[T]/(T^{p^m})\cong k[U]/(U^{p^m}-1)$
  and that $\alpha_{p^m}$ and $\mu_{p^m}$ “are isomorphic as schemes (but not as
  algebraic groups)” — the exact assertion of the B counterexample; 2.8 gives
  the localized determinant coordinate ring and comultiplication.
- Stacks `groupoids.pdf`, SHA-256 `4506a392…e7a30f`; re-fetched 2026-10-03 and
  byte-identical to the coverage receipt. Printed pp. 4–6 = Definition 4.1
  [022S], Lemma 4.2 (base change, out-of-scope), Definition 4.3 [047D],
  Lemma 4.4 [0G8L] (T-valued factorization criterion), Definition 4.5 [047E]
  (out-of-scope), Examples 5.1–5.4 [022U/040M/022V/022W] for
  $\mathbf G_m,\mu_n,\mathbf G_a,\mathrm{GL}_n$.

Coverage dispositions dispose every named source row (21 harvested rows):
included/inline rows all carry a destination item; 2.3 constant groups,
Stacks 4.2 base change and 4.5 smooth/flat/separated are marked out-of-scope
with reasons that match the commissioned five-item inventory. No promised
source content is missing from the pair.

## 3. Prerequisites, role and consumers

- Dependency closure: all 10 direct deps of the five items are published
  (git-tracked) items; an independent recursive walk over item frontmatter
  reaches 402 nodes with 0 missing files, and the only draft nodes are the five
  pair items themselves (no unbuilt supplier, no cross-pair draft).
- Step-1 readiness records exist for all five items (`ready`, owner:false,
  local author evidence).
- Consumers: page 885 requires A871 at page level; page 887 requires A871 and
  two 887 items (`def-multiplicative-type-coordinate-hopf-algebra`,
  `lem-multiplicative-type-affineness-by-field-descent`) declare
  `def-group-scheme-over-a-field`; both cross-batch reviews are `verified`.
  887's field-descent item carries its own base-change/global-sections tools
  (`lem-fpqc-cover-submersive`, `thm-affine-fibre-product-tensor-ring`, …), so
  it does not require an unbuilt A871 supplier. No published item cites any of
  the five ids (git grep over tracked `items/`, `library/` is empty).
- **Unmet prerequisites: none found.** The five items' direct suppliers are all
  published; nothing needed by this pair is absent from the published library
  or the current scaffold.

## 4. Considered omissions (judged non-blocking)

These could be read into “group schemes of finite type over a field” but are
outside the commissioned AG-GS-1 inventory, carry explicit coverage reasons,
and are used by no selected consumer:

- base change of group schemes (Stacks 4.2; proof omitted in Stacks) — later
  pairs supply their own base-change lemmas (e.g. 885's
  `lem-nonaffine-global-sections-flat-field-base-change`);
- constant finite group schemes (Milne 2.3) — B intentionally covers
  $\mathbf G_a,\mathbf G_m,\mathrm{GL}_n$ and the two infinitesimal groups;
- general (Milne 1.3) and open (Stacks 4.3(2)) subgroup notions — the item
  defines closed subgroup schemes only; no selected consumer uses open or
  non-closed subgroups;
- identity component/separatedness of finite-type groups — not commissioned;
  885 proves what it needs locally.

Adding any of these would be enrichment of an already-complete design row, not
repair of a gap; owner direction limits additions to necessary ones.

## 5. Non-blocking flags for the owner / Step-4 splice

1. **Page-edge drift.** plan-spec B page `requires` =
   [`group-schemes-of-finite-type-over-a-field`,
   `determinants-of-matrices-over-a-commutative-ring`]; live batch-22 manifest
   B `requires` = [A page] only. B item deps still use
   `thm-determinant-multiplicative`, `thm-ring-matrix-arithmetic-laws` (home
   `determinants-of-matrices-over-a-commutative-ring`) and
   `cor-inverse-matrix-by-adjugate` (home `the-determinant-of-a-linear-operator`,
   which is in neither `requires` list, nor transitive through the A page).
   All three suppliers are published; reconciliation is metadata only.
2. **Plan source-locator drift.** The AG-GS-1 plan row cites Snowden, *Lecture 5*
   as the counterexample's independent construction and “Milne §2.14, p. 44” as
   the comparison. The comparison statement is Milne 2.5, p. 40 (2.14 merely
   defines finiteness); the batch coverage/manifest already use the accurate
   locator, and Snowden was not retrievable this run (403/404 per batch-22
   notes). Because the counterexample assertion is stated verbatim in the
   verified Milne full text, coverage stands under the owner's
   single-verified-treatment rule; only the plan prose needs reconciliation.
3. **Coverage fine print.** Milne 1.3 and Stacks 4.3 are disposed “included”
   although only the closed-subgroup half of each is defined by the item. Not a
   scope loss for this pair (see §4); noting it so the disposition is not read
   as a promise of open subgroups.

## 6. Uncertainty

No unresolved scope uncertainty. Residual uncertainty is confined to (i) the
unre-verified Snowden locator (superseded by the verified Milne statement) and
(ii) proof-level questions, which are outside this scope review.

## 7. Next action

Scope recorded `sufficient` for A871 (receipt
`research/frontier-38-owner-30-step3a-review-group-schemes-of-finite-type-over-a-field.json`).
Owner/parent: reconcile flags 1–2 during plan-spec/page-edge synchronization and
Step-4 splice; no enrichment, merger or scope action required.

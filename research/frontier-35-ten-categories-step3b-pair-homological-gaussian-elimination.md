# Step 3b dispatch report — pair `homological-gaussian-elimination`

- Run: `frontier-35-ten-categories`; role `alpha-high`; label
  `step3b-pair-homological-gaussian-elimination-543ec8ba2c18289e`.
- Covers: A page 728.1 `homological-gaussian-elimination` (9 items, order 728.1) and
  B page 728.2 `homological-gaussian-elimination-examples` (5 items). Batch 14.
- The sibling pair `graded-bimodules-and-tensor-functors` (717/718) shares batch 14;
  its 12 contract entries, its group-`f` scope rows and its ledger input were
  preserved untouched in every batch-14 write.

## Completed items (all fully authored, contract-backed, decisions recorded)

A page, prerequisite order: `def-complex-homotopy-and-contractibility-in-an-additive-category`,
`def-invertible-differential-block-and-schur-complement-reduction`,
`lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block`,
`thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex`,
`prop-homological-gaussian-elimination-gives-a-strong-deformation-retract`,
`cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology`,
`thm-finite-iterated-homological-gaussian-elimination`,
`prop-additive-functors-preserve-chosen-homological-gaussian-cancellations`,
`prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits`.

B page: `ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign`,
`ex-neighbouring-differentials-after-a-gaussian-basis-change`,
`ex-two-finite-cancellation-orders-and-their-composite-retracts`,
`cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled`,
`cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps`.

Pages created: `library/homological-algebra/homological-gaussian-elimination.md`,
`library/homological-algebra/homological-gaussian-elimination-examples.md`. Every one
of the 14 manifest statements is realised, including the qualification clauses
(no equality of `X` with `X̄` before splitting off `K`; no homology comparison under a
non-exact additive functor; no infinite iteration, termination or size-decrease claim;
no choice-free or confluent transfer).

## Mathematics actually proved (summary)

Cochain convention; only additive structure except the abelian clause of the
corollary. Block `d^n=[[a,b],[c,φ]]:A⊕U→B⊕V`, `L=[[1,−bφ^{-1}],[0,1]]`,
`R=[[1,0],[−φ^{-1}c,1]]`, `Ld^nR=diag(a−bφ^{-1}c,φ)`; `R^{-1}(p;q)=(p;0)`,
`(r s)L^{-1}=(r 0)`, `q=−φ^{-1}cp`, `rbφ^{-1}=−s`, `d̄p=0`, `r d̄=0`; the chain
isomorphism `T:X→X̄⊕K` and `K` contractible via `φ^{-1}`; explicit retract data with
`pι=1`, `1−ιp=dh+hd`, `ph=hι=h²=0`; homotopy-category inversion and the explicit
`H_n(w)=0` argument on cycles (no element chase); finite iteration with the
composition formula `p=p₂p₁`, `ι=ι₁ι₂`, `h=h₁+ι₁h₂p₁`, aggregate
`diag(φ₁,…,φ_k)` pivots and a non-equality witness for different orders; preservation
by additive functors (exactness-free) and transfer of maps/homotopies with the
explicit defect homotopy. **AC:** no choice principle is used or declared — every
constructed map is a displayed formula in given data (the only "choices" are the
explicit cancellation orders of item 7, whose effect is measured in clause 4).
**No** Recorded result is consumed, no new pair is added, no promised result is
dropped, and no published item or page was edited.

## Scaffold audit and local repairs

- All 14 items were audited in prerequisite order against the manifest statement,
  the design section HA-24, and the sources read in full. Structural hypotheses,
  quantifiers, well-definedness (`T`, `φ^{-1}`, `d̄`, transfer), and the degenerate
  instances (`U=V=0`, `A=B=0`, empty correction, length-one sequences) were checked
  individually; each proof's arithmetic was recomputed by hand.
- Two cited-but-undeclared dependencies were added: item 5 now declares
  `def-complex-homotopy-and-contractibility-in-an-additive-category`, and item 6
  declares `thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex`.
- Item 5's `[L3]` fact, which no proof step cited (and whose text stated more than the
  proof used), was rewritten to the degreewise-composite and remaining-degree
  conventions actually needed and is now cited at steps 2.4, 2.5, 2.6 and 3.1.
- Locator refinement: the Bar-Natan reference in items 7 and 10–13 was narrowed from
  "printed pp. 5-6" to the verified "printed p. 5 (PDF p. 5)".
- No other scaffold repair was needed: no item required a new local definition or
  lemma, and no promised claim had to be weakened.

## Dependencies

- Intra-pair prerequisites are exactly the earlier items (order recorded above); all
  external dependencies are **published** items (checked item-by-item: nothing outside
  this pair is draft). The page requirement `chain-homotopy-and-the-homotopy-category`
  is published.
- Verified that the published suppliers used by the corollary
  (`thm-a-chain-map-induces-a-well-defined-map-on-homology`,
  `thm-homology-is-an-additive-functor`,
  `lem-the-boundary-subobject-factors-through-the-cycle-subobject`,
  `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries`,
  `def-homology-object-of-a-chain-complex`, `cor-equalizers-are-monic-and-coequalizers-are-epic`)
  prove their statements with categorical (non-element) arguments, and that
  `thm-an-additive-functor-preserves-finite-biproducts` explicitly covers the empty
  biproduct and the zero object and `prop-an-additive-functor-preserves-zero-morphisms`
  covers zero morphisms; both are used by item 8.
- The corollary deliberately does **not** depend on the repaired published
  `thm-chain-homotopic-maps-induce-the-same-map-on-homology`; it proves the
  homotopy-invariance statement it needs directly.
- Consumer input: `research/frontier-35-ten-categories-batch-14.cross-batch-dependencies.json`
  is `[]` (valid: every page requirement of this pair is published).
  `frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories
  --require-reviewed` passes; the unified ledger's only batch-14 edges are the
  sibling pair's 17, none involving this pair.

## Source locators verified by full-text read

- CMW, *Fixing the Functoriality of Khovanov Homology*, Appendix A.1: PDF pp. 64–65
  (1-indexed; 0-based extractor indices 63–64), printed pp. 1562–1563; Lemma A.1 at
  printed p. 1562 (the `A → B⊕C → D⊕E → F` complex and the stripped complex),
  Lemma A.2 at printed p. 1563 (double elimination with `ψ, φ`); Appendix A.2 not used.
- Bar-Natan, *Fast Khovanov Homology Computations*: §4 Lemma 4.2 (Gaussian elimination)
  and §5 "The algorithm" both on printed p. 5 = PDF p. 5; §6 begins printed p. 6.
- Weibel ch. 1: §1.1 printed pp. 2–3, §1.2 opening printed p. 5, §1.4 printed
  pp. 17–18 — matching the coverage row.

**Coverage locator corrections for Step 4 serial reconciliation** (I did not edit the
shared coverage file): (i) the CMW row's "PDF pp.63–64" is one page early under
1-indexed PDF numbering; the verified locator is PDF pp. 64–65. (ii) the Bar-Natan row
"§5 first algorithm paragraph, PDF p.4 / printed p.6" should read printed p. 5 /
PDF p. 5; §5 lies entirely on printed p. 5.

## Checks actually run (results)

- `precheck` explicit paths: 12 proof-bearing items PASS, 2 definitions `n/a`.
- `rendercheck`: OK on the 14 items + 2 pages.
- `content-policy` (item mode, batch manifest): 26 scoped items, 0 errors, 0 warnings.
- `proof-contract --strict` on `research/frontier-35-ten-categories-batch-14.proof-contracts.json`:
  0 errors, 0 warnings, 26/26 (my 14 entries added, scope extended to 26, batch `pages`
  extended to both pairs; sibling entries byte-preserved apart from formatting).
- `boundary-audit --fail-on-contradicted --fail-on-template`: 208 rows, 83
  `not_applicable` with item-specific reasons, no contradicted disposition, no template
  cluster. `citation-fidelity`: 109 citations, no missing quote, no widening candidate.
- `finite-smoke`: 0 errors, 0 obligations. `risk-report`: 0 errors, 26 items routed.
- `validate-plan research/plan-spec.json`: 0 errors; my pages appear as `0 items`
  shells (see pre-splice mismatch below).
- `coverage-checklist --require-destination`: 2 pages, 31 rows, 0 errors.
- `source-fetch-check`: 8/8 fetch-verified. `source-backing`: 11 authored results, all
  backed. `manifest-deps`: 26 items, 0 errors.
- `author-check.mts frontier-35-ten-categories 14`: `ok: true`, all four sub-checks
  exit 0 (precheck, rendercheck, content-policy-items, proof-contract).
- Repo-wide `depcheck`/`fwdcheck`/`extcheck`/`prosecheck`/`depsource`/`pathcheck`:
  0 findings name any of the 14 items or either page; their failures are pre-existing
  debt elsewhere (the `brauer-…` page cycle, `def-sine-and-cosine-by-power-series`
  justification type, one undeclared forward reference in
  `thm-surjective-iff-transpose-is-bounded-below`, `extcheck`'s published remarks).

## Decisions

- Item decisions: all 14 recorded `accept`, confidence 1, with the examined dependency
  IDs equal to each item's declared `deps`; the five locator-repaired items were
  re-recorded after the edit. No escalation was opened, and none was overwritten.
- Scope decisions: `refresh --run frontier-35-ten-categories --group f`, then `stands`
  recorded with row-specific evidence for this page's two declines — Bar-Natan Lemma 4.1
  (delooping in the cobordism category) and the CMW simple-homotopy-type remark — both
  out of scope because the pair neither cites nor needs them (evidence rows name the
  items and steps). The other 11 group-`f` rows were left `pending` for their owners;
  no owner ruling was invented. `step3-decisions check --phase final` lists none of the
  14 ids among its work rows; `scope-decisions check` reports no error naming this page.

## Local suppliers added

None. No new pair was added, no extra item was minted, and every prerequisite used is
either an earlier item of this pair or a published item.

## Published concerns reported (exact IDs)

1. `thm-chain-homotopic-maps-induce-the-same-map-on-homology` (published) — previously
   proved its arbitrary-abelian-category statement by an element chase. Status:
   repaired in the working tree as A-R (2026-09-24) by a bounded categorical proof
   (cycle kernel, boundary image, homology cokernel), statement unchanged, old judge
   stamp removed; the ledger entry exists at
   `research/published-consumer-supplier-ledger.md` line ~14 with index row ~32971.
   My pair does not depend on it. Confidence: high (repair inspected; ledger row
   present). Required action: none beyond the serial reconciler's existing record.
2. No other potentially defective published item was found among this pair's
   suppliers; the element-chase defect class did not recur in
   `thm-a-chain-map-induces-a-well-defined-map-on-homology`,
   `thm-homology-is-an-additive-functor`, `lem-the-boundary-subobject-…`,
   `lem-a-chain-map-carries-cycles-…`, `def-homology-object-…`,
   `thm-an-additive-functor-preserves-finite-biproducts`,
   `prop-an-additive-functor-preserves-zero-morphisms` or
   `thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication`
   (read; audited stamps present). Confidence: medium-high (statement-level reading,
   not a full re-audit). Note: the last of these was used heavily by items 3, 4, 7, 8;
   no discrepancy between its statement and its use was found.
3. Coverage locator corrections listed above (CMW PDF page; Bar-Natan §5 page).

## Open obligations and pre-splice mismatches

1. **Pre-splice plan mismatch (for Step 4):** `research/plan-spec.json` orders
   728.1/728.2 carry empty item arrays while the controlling batch manifest lists all
   14 items; consequently `content-policy --manifest-only` reports
   `batch-item-already-exists` for all 26 batch-14 ids. This is the expected pre-splice
   state and must be resolved by the Step-4 splice, not by editing the plan shell here.
2. Planned page order 757 `categorical-braid-actions-and-decategorification` requires
   `homological-gaussian-elimination` in `plan-spec.json` — a future consumer; its items
   must be checked against these final statements when that pair is built.
3. `risk-report` routed 4 items of this pair CRITICAL (corollary, finite iteration,
   additive functors, transfer) and 5 HIGH (splitting theorem, deformation retract,
   two-by-two example, two-order example, nonunit counterexample) to Step-5a review.
   These are routing signals, not defect findings.
4. Step 3 still requires independent mathematical review; the item decisions, scope
   decisions and checks recorded here do not confer publication approval, and the
   serial reconciler owns the published ledger (not edited here) and any shared
   plan/prose amendment.
5. No escalation was raised, none was overridden, and no owner-held decision was
   touched. The only owner-held obligations in this run (the deferred batch-8
   Serre/flag pair and the deferred batch-13 Easton item) are outside this pair and
   were not modified.

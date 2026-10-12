# Step 3a scope review — `signed-quiver-flag-convolution-and-klr-ext-realization` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 47 · 2026-10-10
- A page: `signed-quiver-flag-convolution-and-klr-ext-realization` (order 1829, category
  `representation-theory`, 4 items)
- B page: `signed-quiver-flag-convolution-and-klr-ext-realization-examples` (order 1832, 2 items)
- Scope decision: **sufficient** — recorded with `tools/step3-decisions.mjs record-scope`
  (review receipt `research/frontier-44-special-representation-examples-28-step3a-review-signed-quiver-flag-convolution-and-klr-ext-realization.json`,
  reviewed scope hash `9f42c66261837019d7588060243a673391741e61c0ef318dc7eed7326540de0d`).
  Manifest bytes reviewed: `research/…-batch-47.pages.json` sha256
  `c032c43fc29a9af1d881e74012d5eb4546f9226f03c29d5fa7ebf87da2449807`; coverage bytes
  `research/…-batch-47.coverage.json` sha256
  `c458b2e6d7250343e6c11e3c857f8ac1e444cb260295f42f3245fbbe1f093ec8`.

Scope only: this review decides whether the planned definitions, results and examples
adequately cover the intended subject. It is not item or proof approval, edits no scaffold,
item, plan row, coverage row or owner record, and it is written for the owner.

## 1. Prose design vs scaffold, and intended role

Prose design: `research/plan-klr-foundation-prerequisites.md` §“Signed Quiver Flag Convolution
And Klr Ext Realization” **L1349–1401** (the generated batch task's pointer L1212 is stale and
lies in the preceding section; correctly recorded in `…-batch-47.notes.md`). The design lists
exactly four A suppliers and two B examples; the owner direction
`…-owner-authoring-direction.md` §“Final KLR algebraic interfaces … — 2026-10-09” binds this
pair as the signed Ext half of the held “semisimple quiver-flag Ext realization”, explicitly
without narrowing to finite ADE or simple edges.

Design ↔ manifest, clause by clause (contract bodies in
`…-klr-foundation-realization-contracts.md` compared against the four A statements):

- `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators`: fixes a finite
  loopless quiver with arbitrary multiplicities and both arrow directions, β, char-0 $k$;
  defines $E,G,F_\nu,X_\nu,\pi_\nu,L_\nu=\pi_{\nu!}k[d_\nu]$, $d_\nu=\sum_i\beta_i(\beta_i-1)/2+\sum_{a>b}h_{\nu_a\nu_b}$,
  $Z_{\eta,\nu}=X_\eta\times_EX_\nu$ with source-first coordinates, the opposite-composition
  product $a*b=b[n]\circ a$, the BM/Ext degree dictionary $d_\eta+d_\nu-n$, the idempotents,
  dots, the relative-position class $C_{s_r\nu,\nu}$ and the explicit generator
  normalizations σ/τ, the intrinsic signed presentation $S_\Gamma(\beta)$ with every relation
  (word idempotents, commuting dots, square with $Q_{ij}=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$,
  far commutation, distinct-color slides, equal-color mixed $+1/−1$, the braid correction) and
  the grading $\deg\tau_re_\nu=-a_{\nu_r\nu_{r+1}}$. All contract clauses are present; the
  well-definedness paragraph routes the smooth-bundle/properness input to the batch-44 lemma
  and the polynomial model and relation realization to the two following theorems
  (`justified_by`), i.e. no cyclic dependencies were added.
- `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis`: the same
  statement as the contract — faithful action on $\bigoplus_\nu H_G^\bullet(X_\nu)[d_\nu]$,
  the $k$-basis $x_1^{c_1}\cdots x_m^{c_m}\tau_we_\nu$ for one reduced expression per $w$, free
  over the first-coordinate polynomial corners, dots and crossings generate, and the explicit
  caveat that only relative-position incidence strata are paved (no arbitrary stable-flag
  fiber paving).
- `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations`: contract plus the
  explicit operator formulas — equal color $(f-s_rf)/(x_r-x_{r+1})$, distinct color
  $(x_r-x_{r+1})^{h_{ij}}s_r$ into the swapped word, degrees $0,2,-a_{\nu_r\nu_{r+1}}$, and
  the graded homomorphism conclusion.
- `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes`: unique
  graded algebra isomorphism $S_\Gamma(\beta)\to\operatorname{Ext}_G^\bullet(\bigoplus_\nu\pi_{\nu!}k[d_\nu],\bigoplus_\nu\pi_{\nu!}k[d_\nu])$
  with the shifted product, the degree dictionary, and the explicit “no semisimplicity,
  purity, decomposition or finiteness hypothesis” clause.
- B examples: `ex-signed-two-direction-multiedge-quiver-flag-crossing` ($h_{ij}=2$, $h_{ji}=1$,
  ν=(i,j,i): native braid correction computed and shown nonzero) and
  `ex-equal-color-quiver-flag-correspondence-is-nilhecke` (one-vertex rank-2 case: divided
  difference, τ²=0, mixed relations, nil-Hecke). Both B items depend only on A items; the B
  page's `requires` is the A page alone; the A↔B companion pointers are consistent.

Documented scaffold-side additions, all inside the declared `requires` closure and all within
the owner's “include the necessary intermediate lemmas with their actual homes” direction
(recorded in `…-batch-47.notes.md` and the cross-batch file): item 1 adds
`def-equivariant-constructible-derived-category-…` (batch 41), `lem-smooth-flag-incidence-…`
(batch 44) and the published `lem-flag-variety-of-a-vector-space`; item 2 adds
`thm-constructible-six-functors-…` (batch 41); item 3 adds the published
`prop-first-chern-class-of-tensor-dual-and-conjugate-lines`; both examples add
`def-axiom-of-choice`. Plan-spec still stores the original three/machine-title records
(`research/plan-spec.json` rows 1829/1832); the batch notes request owner/Step-4
reconciliation of those plan rows. This is metadata hygiene, not a scope conflict: ids, kinds,
counts, orders and claims are unchanged.

Design restrictions retained, not narrowed: no semisimplicity/purity/Decomposition-Theorem
input is used or asserted (that half is homed in batch 49 `quiver-full-flag-projective-semisimplicity`,
as the owner direction and the 2026-10-10 planning notes state); the σ/τ signs are declared
generator normalizations, not BM orientation changes; the intrinsic presentation is internal
and does not replace the generic KLR definition; the complex orbit/row-echelon argument is
internal and the F_q relative-position theorem is explicitly rejected as a supplier.

Intended role: this A page is the run's signed KLR Ext-realization supplier. Its only consumer
in the run is batch-10 `klr-algebras-induction-and-quantum-serre-categorification`
(order 1836): `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`
declares `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes` as a
dependency, and that page requires our A page plus the batch-49 semisimplicity page (owner
`…-klr-foundation-plan-integration.json` records exactly that two-supplier `requires_add`).
The two B examples are leaves: no run page or published item consumes either; a full manifest
scan and a scan of `items/*.md` found no other consumer and no published mention of the six
ids. The six ids do not collide with existing `items/` files; the page is not yet authored.

## 2. Source coverage

Coverage file `research/…-batch-47.coverage.json`: A page 4 source records (Varagnolo–Vasserot
`0901.3992`, Rouquier `1112.3619`, Rouquier `0812.5023`, Ginzburg `math/9802004`); B page 4
source records (the same VV/Rouquier-2-Lie/Ginzburg plus Hatcher); 36 harvested content rows
per page (72 total), dispositions 21 inline / 11 included / 4 out-of-scope per page.
`coverage-checklist --require-destination`: 0 errors, 2 `coverage-low-yield` advisories
(11/36 scaffolded on each page).

I re-fetched all five distinct documents myself and every byte size and sha256-16 stamp
reproduced exactly: VV `0901.3992` `2062768e9a3bfb77`, 309,988 B; Rouquier `1112.3619`
`cde68dca920e26c5`, 598,190 B; Rouquier `0812.5023` `645032786278b9fb`, 764,656 B; Ginzburg
`math/9802004` `21bd3b692868e16b`, 545,506 B; Hatcher AT `bebb3032bf9021b9`, 8,121,741 B.
Load-bearing loci read in the fetched texts (not merely re-read from the ledger):

- VV §1.1–1.3 (loopless quivers, $h_{ij}$, $i\cdot j=-h_{ij}-h_{ji}$, graded flags
  $F_y$, x-stable incidence $\tilde F_y$, proper equivariant $\pi_y$, tautological quotient
  lines, $d_y$), §1.6–1.10 (canonical module, faithful convolution algebra
  $Z_V=H^{GV}_*(Z_V,k)$, grading shifts $\delta Z_{i,i'}=Z_{i,i'}[d_i-d_{i'}]$), §2.5–2.9
  (stratification $Z^x$, closures $Z^{\le x}$, convolution inclusions), §2.10–2.21
  (localization/Euler data, fixed-point formulas, faithfulness proof), §2.22–2.25 (σ/κ action
  formulas and grading), §2.26–2.27 (free $F_V$-module PBW, cell proof left to the reader),
  §2.28 (nil-Hecke example), §3.1–3.3(c) (faithful polynomial representation, grading, the
  presentation with $Q_{i,l}(u,v)=(-1)^{h_i(l)}(u-v)^{a_i(l)}$, $a_i(l)=h_i(l)+h_{s_l(i)}(l)$,
  the mixed signs $−1/+1$, the reversed braid correction, and τ acting as $(-1)^{h_i(l)}\sigma$),
  §3.4–3.6 (PBW and the unique graded isomorphism $R_V\cong\delta Z_V$).
- Rouquier `1112.3619` §3.2.2–3.2.3 (presentation $R_Q$, $Q_{ij}=P_{ij}P_{ji}$, PBW Theorem 3.7,
  faithful polynomial realization Proposition 3.8), §5.3.5–5.3.6 (flag stacks, orbit
  decomposition), §5.4.3–5.4.4 (Hecke generators as Gysin classes, free graded $H^\bullet(BG)$
  corners), §5.4.5–5.4.7 (geometric $\tau^2$: $\tau_{ts}\tau_{st}=(-1)^{d_{st}}(x_sL_t-L_sx_t)^{d_{st}+d_{ts}}$,
  $\tau_{ss}^2=0$; geometric $\tau^3$ including the three-color patterns; conclusion of the
  equivalence).
- Rouquier `0812.5023` §3.2.1 (definition of $H_n(Q)$, Theorem 3.7 PBW criterion) and
  §3.2.2 (Proposition 3.12 faithful polynomial representation); Ginzburg `math/9802004`
  Proposition 5.1 exists as cited (algebra isomorphism $H_\bullet(Z)\cong$ convolution algebra).

Convention audit (the pair's riskiest point, and the reason the examples exist): VV's
$Q_{ij}(u,v)=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$ with $Q_{ii}=0$ and the grading
$\deg\sigma=\deg\tau=-a_{ij}$ are exactly the library's; VV/Rouquier's mixed relations are
$−1$ at $k=l$ and $+1$ at $k=l+1$, and their braid correction is the negative of the library's,
which is exactly what the declared dictionary $\tau_{\text{library}}=-\tau_{VV}$ requires
($\tau^2=Q$ unchanged; mixed signs and the triple-difference both flip; $S_\Gamma(\beta)$ is
the isomorphic sign-specialized presentation). The batch notes' Finding 1 records this and
forbids silently substituting VV's/Rouquier's τ relations; I confirm the sources and the
specialization agree.

The 2 low-yield advisories are appropriate: this is a deliberately compact pair (4+2 items)
that consumes its foundational suppliers (batches 40/41/44 and published topology) rather
than rebuilding them, so most harvested rows are absorbed inline into the six statements or
are homed elsewhere. Every out-of-scope decline carries a reason and a real destination:
VV §4 (canonical bases/categorification) → batch 10; Rouquier §4/§5.5 and `0812.5023` §4
(2-Kac-Moody 2-categories, cyclotomic/affine 2-representations) → the KLR 2-category consumers;
Ginzburg §3–4/§6–12 (Decomposition Theorem, Weyl/Springer) → not consumed here; Hatcher
§4.2–4.3 → not consumed.

Independent scope-level mathematics spot checks by me (exact rational arithmetic, written for
this review, not copied from the batch notes):

- `ex-signed-two-direction-multiedge-quiver-flag-crossing`: for the displayed operators
  $A=\tau_2\tau_1\tau_2e_\nu$ and $B=\tau_1\tau_2\tau_1e_\nu$ on $(h_{ij},h_{ji})=(2,1)$,
  ν=(i,j,i), I verified $A-B=$ multiplication by
  $-\bigl[(x_1-x_2)^2+(x_1-x_2)(x_3-x_2)+(x_3-x_2)^2\bigr]$ on 400 random polynomials and on
  every monomial of degree ≤3. The example's displayed correction (the $Q$-difference
  divided by $x_3-x_1$) is exactly this polynomial, nonzero.
- Dimension/normalization bookkeeping recomputed from the definition: $d_{(i,j,i)}=4$,
  $d_{(j,i,i)}=5$, $d_{(i,i,j)}=3$ (so $d_{s_1\nu}-d_\nu=1$, $d_{s_2\nu}-d_\nu=-1$), and the
  normalization exponents $d_{s_r\nu}-\dim_{\mathbb C}C_{s_r\nu,\nu}=2,1$ for r=1,2 match the
  example and the contract; the equal-color divided difference satisfies
  $\tau^2=0$, $\tau x_1-x_2\tau=1$, $\tau x_2-x_1\tau=-1$.
- Grading homogeneity for the standard example: $\deg\tau_2\tau_1\tau_2e_\nu=3+(-2)+3=4=$
  degree of the correction, consistent with the definition's homogeneity claim.

Advisories only (no scope change): the coverage row for the nil-Hecke example cites VV
§2.28(a)–(b) but the scaffolded item realizes only (a) (the empty-arrow many-color case (b)
is not carried by any item); the multiedge example's row cites VV §2.7 “inline”, which is a
different quiver (j→i, ν=i+2j) used only illustratively. Neither affects the designed subject.

## 3. Prerequisite audit (unmet prerequisites)

Method: parsed all `deps`, `justified_by` and `forward_refs` of the six items from the current
manifest; classified every id against `items/*.md`, all 100 current run manifest pages and
`research/plan-spec.json`; expanded the A-page `requires` closure over both run pages and
published library pages.

- 17 distinct direct dependencies: 7 published items
  (`def-axiom-of-choice`, `lem-flag-variety-of-a-vector-space`,
  `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`,
  `thm-leray-hirsch-module-isomorphism`,
  `lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator`,
  `thm-schubert-cells-give-the-stable-grassmannian-cw-structure`,
  `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`), 10 in-run scaffold
  items (the four own-page items plus five batch-44 items
  `def-equivariant-borel-moore-homology-and-correspondence-convolution`,
  `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus`,
  `lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports`,
  `thm-proper-pushforward-ext-is-equivariant-borel-moore-homology-of-the-fiber-product`,
  `thm-verdier-duality-identification-intertwines-yoneda-product-and-convolution`, and two
  batch-41 items `def-equivariant-constructible-derived-category-for-complex-algebraic-varieties`,
  `thm-constructible-six-functors-proper-base-change-and-verdier-duality`). **0 unresolved.**
  No `forward_refs` are declared. The 12 cross-batch declaration rows in
  `…-batch-47.cross-batch-dependencies.json` are all `verified` with exact consumed clauses.
- Interface spot checks on the load-bearing suppliers (statements read, not their proofs):
  the batch-44 Borel–Moore definition (char-0 $k$, normalized dualizing object, corner degree
  $d_i+d_j-p$, opposite-composition product, no transversality), the batch-44 smooth-flag
  calculus (vector-bundle/projective/properness and oriented operations in every corner), the
  batch-44 Ext/BM pair (cornerwise isomorphism and product compatibility, no semismallness),
  the batch-41 ambient category (char-0 $k$, product of GL groups, bounded constructible,
  Ext = Hom with shift) and support-localization theorem — all match the consuming clauses.
  Published items were checked for existence, `status: published` and the used interfaces
  (Leray–Hirsch over an arbitrary commutative ring; the tautological Euler lemma over
  ℤ/𝔽_p; the first-Chern identities for Hom lines; the top-Chern = Euler orientation).
- Page-level `requires`: 5 entries; four are published library pages and the fifth
  (`equivariant-borel-moore-correspondence-convolution-and-constructible-ext`) is the
  scaffolded batch-44 page. The full closure is 50 pages: 9 scaffolded in-run pages
  (batches 29, 30, 32, 36, 37, 40, 41, 44 and this pair) and 41 published library pages;
  **0 missing closure members**, no closure member empty, and no deferral record in this run
  names any closure member (no `deferred-*` record exists for this run, matching the batch
  notes' check).

**No unmet prerequisite found**: nothing consumed by this pair is absent from both the
published library and the current scaffold. Two residual, non-blocking observations, stated
to separate confirmed facts from uncertainty:

1. Item 1's well-definedness sentence attributes “the displayed dimension formula is
   $\dim_{\mathbb C}X_\nu$” to the batch-44 smooth-flag lemma, whose scaffolded statement
   defines $d_\nu:=\dim_{\mathbb C}X_\nu$ but does not display the
   $\sum_i\beta_i(\beta_i-1)/2+\sum_{a>b}h_{\nu_a\nu_b}$ formula. This is not a missing
   prerequisite: the formula is an elementary rank computation on the stability bundle
   (spelled out in the derivation's first section and in item 1's Step 1), owned by the Step-3b
   author. Interface note for Step 3b, no owner action requested.
2. The char-0 $k$ freeness of the tautological-Euler/Leray–Hirsch input is a recorded proof
   route, not a new item: the published Leray–Hirsch theorem is coefficient-arbitrary, the
   published Euler lemma is ℤ/𝔽_p, and the extension through the projective-bundle tower and
   the free cellular model is home-work for Step 3b/5a (batch notes Finding 2 already flags
   that item 2 must be escalated rather than weakened if the route fails). I did not re-derive
   that extension; it does not affect scope.

## 4. Consumer-interface spot checks (scope view)

- Batch-10 `thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis`
  consumes exactly `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes`.
  That theorem supplies the signed presentation, the shifted product and the degree dictionary
  the global-basis route needs; it deliberately does not supply semisimplicity of
  $\pi_{\nu!}k[d_\nu]$, which the owner routes through batch-49
  `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero` (a co-required page
  of batch 10, not a dependency of this pair). No overlap gap and no double-homing: the two
  suppliers are complementary and both are required by the consumer.
- The B page is a leaf and no consumer expects anything from it; nothing in the run consumes
  the examples, so the pair's minimal B scope cannot starve a consumer.

## 5. Checks run (actual results)

| Check | Result |
|---|---|
| `node tools/coverage-checklist.mjs research/…-batch-47.coverage.json --require-destination` | 2 pages, 72 harvested rows, 0 errors, 2 `coverage-low-yield` advisories (explained in §2) |
| `node tools/source-fetch-check.mjs --coverage research/…-batch-47.coverage.json` | 8/8 fetch-verified, 8/8 resolved, 0 documented drops |
| Independent re-download + sha256/size of all 5 distinct sources | 5/5 stamps reproduced byte-identically |
| `node tools/manifest-deps.mjs research/…-batch-*.pages.json` | 858 items, 0 normalized, 0 errors |
| `node tools/item-dependency-levels.mjs check --run …` | 858 items / 100 pages, no errors; this pair 23/24/25/26 (A) and 26/26 (B), matching the manifest labels |
| `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` | 858 scoped items, 0 errors, 0 warnings (a per-batch invocation alone reports false `batch-dependency-missing` cross-batch errors; the all-batch scope is the correct one) |
| `node tools/validate-plan.mjs research/plan-spec.json` | run-wide FAIL with 13 `[resolve]` errors, **all** on `balanced-triples-and-global-crystal-bases` (another pair, in flight); no `resolve` error on this pair. Our page contributes only the documented plan-level `redundant-prereq` advisories for its `requires` list |
| `node tools/step3-decisions.mjs check --run … --phase scope` (before recording) | our pair listed `current scope review required` (no receipt existed); 50 pairs / 15 open scope pages run-wide |

No scaffold, item, plan, coverage or owner file was edited by this review; only this report
and the scope receipt below are written.

## 6. Advisories (no scope change, no action requested at Step 3a)

1. Coverage-row locator nits: VV §2.28(b) cited but not realized by the nil-Hecke example;
   VV §2.7 cited inline for a different quiver. Row tidying for the owner/Step 3b, if desired.
2. Dimension-formula attribution in item 1's well-definedness (§3 note 1).
3. Char-0 freeness route for the published CW-stated inputs (§3 note 2; already in the batch
   notes as Finding 2).
4. `plan-spec.json` still stores the original deps and machine titles for the six items; the
   manifest is authoritative and the deltas are the documented additions inside the requires
   closure. Owner/Step-4 reconciliation, no scope effect.
5. Run-wide `validate-plan` currently fails on another pair; recorded for visibility only.

## 7. Decision and next action

- `sufficient` for `signed-quiver-flag-convolution-and-klr-ext-realization`: the planned
  definitions, results and examples cover the intended subject (signed quiver-flag
  convolution, faithful PBW, KLR relations, Ext realization, with the multiedge-braid and
  nil-Hecke examples), the design's four contracts and two examples are realized without
  narrowing, source coverage is complete and re-verified, and no unmet prerequisite exists.
  No enrichment, merger or scaffold edit is indicated.
- Recorded via `node tools/step3-decisions.mjs record-scope --run
  frontier-44-special-representation-examples-28 --page
  signed-quiver-flag-convolution-and-klr-ext-realization --decision sufficient`, reason
  naming this report.
- Next action: Step 3b authors the 4 A items and 2 B examples in dependency order once the
  Step-3a stage drains. Any change to a statement, title or inventory changes the scope hash
  `9f42c662…` and requires a fresh scope decision before item bookkeeping can use it.

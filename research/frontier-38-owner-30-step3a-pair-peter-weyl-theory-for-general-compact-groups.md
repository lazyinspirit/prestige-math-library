# Step 3a scope review — pair `peter-weyl-theory-for-general-compact-groups`

- Run `frontier-38-owner-30` (stage `3a-scope`), dispatch label
  `step3a-pair-peter-weyl-theory-for-general-compact-groups-1e28860125ffcb0e`
  (an earlier identical dispatch `-5696d29082e211f4` left no artifact).
- Role: alpha (scope reviewer only — not owner, not item author).
- A page `peter-weyl-theory-for-general-compact-groups` (batch 11, order
  510.073, 17 items: 4 definitions, 7 lemmas, 4 theorems, 2 corollaries).
- B page `peter-weyl-theory-for-general-compact-groups-examples` (order
  510.074, 7 items: 3 lemmas, 3 examples, 1 counterexample). Companion
  pointers agree A↔B; the B page requires only its A page.
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-38-owner-30
  --page peter-weyl-theory-for-general-compact-groups --decision sufficient`.
- Date 2026-10-03. This report decides scope only: no item approval, no proof
  judgement, no owner record and no edit to any scaffold, manifest, coverage,
  plan, library or item file. No owner scope receipt exists for this pair.

## 1. Intended subject and role in the library

Controlling prose design: RG-22 in
`research/plan-representation-theory-groups-track.md` L1643–1701 (index row
L53 "matrix coefficients, density, regular representation, compact-group
dual"; source row L2338; harvest crosswalk L2473–2477; binding page-dependency
row L2729). Registry: `research/plan-spec.json` rows 510.073/510.074 (empty
item inventories, `requires` and companions identical to the manifest). Run
scope: `frontier-38-owner-30-scope-ledger.json` (pair present, batch 11);
binding owner direction `frontier-38-owner-30-owner-authoring-direction.md`
(local-prerequisite construction clause). Step-1 drift verdict for this pair:
**drift-applied** — the reviewer added the existing lower-order in-run page
`character-groups-and-elementary-lca-duals` (order 510.06501, batch 10) as a
page-level reading prerequisite for the circle companion, and recorded that
matrix-coefficient separation is a local spectral-convolution argument with no
global countability of the dual asserted
(`research/frontier-38-owner-30-alpha-step1-drift.md`, section
`### peter-weyl-theory-for-general-compact-groups`).

Intended subject: the Peter–Weyl theorem for every compact Hausdorff group —
the representative-function algebra and its uniform density, the normalised
irreducible matrix-coefficient orthonormal basis of L²(K), the regular
representation as the Hilbert sum of d_π copies of each irreducible with the
commuting right action, discrete Hilbert decomposition of arbitrary strongly
continuous unitary representations, Parseval/Fourier inversion and countable
isotypic support of a single vector — plus four examples/counterexamples on
the B page (profinite groups, arbitrary products of finite groups, the circle
as the Fourier-series model, and the failure of the direct-sum statement for
the regular representation of R). No maximal-torus, Weyl-integration or Lie
structure is used; the published compact-Lie page
`compact-lie-groups-maximal-tori-and-peter-weyl-theory` is a comparison seam
only (plan L144, L2229).

Role in the library: supplier to its own B page and to the planned page
`group-c-star-algebras-and-the-fell-unitary-dual` (order 510.079, whose design
uses RG-22 for discreteness of the compact dual); the circle example consumes
three in-run batch-10 items through the drift edge. No planned page consumes
the B page (leaf). All four cross-batch edges are reviewed in
`frontier-38-owner-30-cross-batch-dependencies.json` (batch 11 in
`reviewed_batches`, no unreviewed batch remains).

## 2. Design-to-manifest mapping

All 11 designed A item ids and all 4 designed B item ids are present, in
design order, with the designed claims and kinds; nothing was dropped,
renamed to a different claim or weakened. Nine further ids are local
prerequisites authorized by the owner direction's local-construction clause,
each stated before its consumers and each with an explicit `deps` array:

| # | local A item | role |
|---|---|---|
| A1 | `def-unitary-dual-of-a-compact-group` | names $\widehat K$ as a set (finite-dimensionality supplier) |
| A3 | `lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations` | products/conjugates make $R(K)$ an algebra |
| A5 | `lem-compact-convolution-operators-commute-with-right-translations` | commutation/adjoint for the spectral argument |
| A11 | `def-hilbert-direct-sum-of-unitary-representations` | the direct-sum notion used by the decomposition theorems |
| A12 | `lem-l1-action-of-a-unitary-representation` | $L^1$ action used by the existence lemma and Parseval |
| A13 | `lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation` | design's hard existence step made explicit |

B local items: `lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients`,
`lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct`,
`lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero`.
(A6/A7, `lem-finite-rank-spectral-pieces-of-compact-convolution` and
`lem-compact-group-matrix-coefficients-separate-points`, are themselves design
rows, so the net-new A ids are six; the batch notes' phrase "7 on A" appears
to be a bookkeeping miscount — cosmetic only, no scope effect.)

Orders, companions, kinds, categories and both `requires` lists match
plan-spec and the scope ledger. Page sizes 17 and 7 are far below the
100-item ceiling. The design's hard proof plan (RG-21 convolution → spectral
pieces → separation → complex Stone–Weierstrass → orthogonality + density →
$L^2$ completeness → isotypic projections for the arbitrary representation)
is realized structurally by the manifest's `dependency_level` ordering
(levels 0–6).

## 3. Source coverage

`frontier-38-owner-30-batch-11.coverage.json` carries 6 fetch-stamped source
entries over 4 distinct URLs (A: Kowalski, Vogan, Tao; B: Kowalski, Vogan,
Teleman), each with byte count, page/text count, SHA-256 prefix and a
`reading_verification` paragraph. All **37 harvested rows** (28 A, 9 B) have
an explicit disposition: 17 `included`, 5 `already-published`, 5 `inline`,
8 `deferred` to named live planned pages (`induced-unitary-representations-of-locally-compact-groups`
510.075, `direct-integral-decomposition-and-type-i-groups` 510.081,
`group-c-star-algebras-and-the-fell-unitary-dual` 510.079,
`character-groups-and-elementary-lca-duals` 510.06501), 2 `out-of-scope`
with written reasons. The A-page low-yield advisory (11/28 scaffolded) is
confirmed and justified: the declines are the character/dual/C\*-algebraic
and direct-integral developments deliberately assigned elsewhere, and the
Kowalski Lemma 5.4.3 decline is sound because the pair's separation route
(the spectral/convolution argument of Tao Notes 3, Theorem 7, with
Exercise 5.4.6(1)) does not consume it — I re-read that route in the fetched
Tao text and it needs only the published compact self-adjoint spectral
theorem, not continuity of finite-dimensional subrepresentations.

Independent re-verification performed by this review (2026-10-03), not taken
on trust from the scaffold:

- Kowalski PDF re-downloaded: 1,838,207 bytes, sha256-16
  `f63d9c26ec965b9c` — exact match to the fetch stamp. Extracted text
  re-read: Theorem 5.4.1 (Peter–Weyl), Corollary 5.4.2, Lemma 5.4.3,
  Lemma 5.4.7, Theorem 5.5.1 (character theory) and Lemma 5.5.2 all present
  with the claimed numbering and statements.
- Vogan PDF re-downloaded: 148,075 bytes, sha256-16 `1b4481509b22f146` —
  exact match. Definition 2.3, Theorems 2.6/2.13, Corollary 2.16, Proposition
  2.17 and the profinite/$\mathrm{GL}(n,\mathbb Z_p)$ opening discussion
  present as cited.
- Teleman PDF re-downloaded: 508,871 bytes, sha256-16 `8fe090c881f42922` —
  exact match. §19.4–19.5, §19.7 (Peter–Weyl), §19.13–19.14 and Lemma 22.6
  present as cited.
- Tao HTML re-fetched: live WordPress page, body differs slightly from the
  stamp (729,194 vs 730,017 bytes, dynamic page furniture) but the extracted
  text still contains Theorem 6, Theorem 7 (baby Peter–Weyl) with its proof,
  and Exercises 17/22/24 — content check passed; the byte/hash stamp on a
  live HTML page is expected to drift.

Source uncertainty, disclosed and preserved: the design's third treatment
(Colojoară–Gheondea, Chapter 3, pp. 65–90) was not recovered; the batch notes
record this rather than claiming it as read, and the two-treatment rule is met
by Kowalski + Vogan alone. This is a Step-3/5 source-coverage caveat, not a
scope gap.

## 4. Prerequisite examination (unmet-prerequisite check)

A full recursive closure of the 24 manifest items' `deps` (through run
manifests and the YAML front matter of published item files) reaches **1,723
nodes: 24 items of this pair, 6 items of batch 10, and 1,693 published item
files**. Every published node has `status: published`; no node is
`proved_here: false`; there is no missing target and no planned-only
(unscaffolded) supplier. The six in-run nodes are the circle example's three
declared suppliers (`lem-unit-circle-is-a-compact-metrizable-topological-group`,
`def-pontryagin-dual-and-compact-open-topology`,
`thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`)
plus their three batch-10 prerequisites; their rows in
`frontier-38-owner-30-batch-11.cross-batch-dependencies.json` are `verified`
at statement level with author-stage text verification expressly owed. This is
a recorded in-run obligation, not an unmet prerequisite: the suppliers are
present in the current scaffold.

Page-level `requires`: seven published `library/` pages (Haar existence,
modular function/$L^1$, GNS, complete reducibility, complex
Stone–Weierstrass, both compact-operator pages) are nonempty published pages,
and one (`character-groups-and-elementary-lca-duals`, batch 10, 13+4 items)
is in-run scaffolded with closed Step-1 records. Step-1 readiness records:
24/24 present, every one `decision: ready`.

Load-bearing published interfaces were opened at statement level, including
`lem-compact-convolution-operators-are-hilbert-schmidt` (kernel
$f(xy^{-1})$, HS norm $\|f\|_2$, no claim on arbitrary irreducibles),
`thm-schur-orthogonality-for-compact-groups` (same
$\langle\pi(k)v,w\rangle$ convention and $1/d$ constant assumed by the
$\sqrt{d_\pi}$ coefficient normalisation), the compact self-adjoint spectral
theorem and eigenbasis corollary, the isotypic projections, the Parseval
equivalences, the Stone–Weierstrass theorem, the torus
orthonormality/completeness items, and `lem-no-small-subgroups-in-a-lie-group`
whose statement ("every finite-dimensional Lie group has an open identity
neighbourhood containing no subgroup other than $\{e\}$") is exactly the
hypothesis the profinite-group factorisation strategy invokes. **No confirmed
unmet prerequisite was found; no material residual uncertainty about
prerequisites remains, apart from the in-run author-stage verification owed
on the three batch-10 suppliers.**

## 5. Uncertainty and observations for the owner (not scope findings)

1. **Character theory is deliberately not built.** Kowalski Theorem 5.5.1(1)
   (characters form an orthonormal basis of $L^2$ of the conjugacy classes)
   is dispositioned `inline` with the explicit support "the class-function
   basis is not built here", and no planned page is named as its destination.
   The design (RG-22 item tables and the index line) does not commission it,
   and compact-group/compact-Lie character theory is otherwise owned by the
   finite-group character page and the compact-Lie Weyl-integration page, so
   this is not a scope finding for the pair as designed. If the owner wants
   the compact-group character corollary in the library, the cheap route is
   a one-corollary enrichment on this A page (trace of the coefficient
   expansion / Schur orthogonality on class functions); recording a named
   destination page is the alternative.
2. **Example coverage is non-Lie but never connected non-Lie.** The B page's
   compact examples are profinite (totally disconnected), products of finite
   groups and the circle; a connected non-Lie compact group (e.g. a solenoid
   $\varprojlim \mathbb T$) would strengthen the "general compact group"
   demonstration. Not commissioned by the design; optional enrichment only.
3. **Unrecovered third treatment** (Colojoară–Gheondea Ch. 3) — recorded
   above and in the batch notes; re-verify dispositions if a full text
   becomes available, but the pair does not depend on it.
4. **In-run suppliers owed at author time** — the three batch-10 items behind
   the circle example must have their authored text verified in Step 3/5, as
   the cross-batch rows already state.
5. **Conventions to keep synchronised in Step 3b**: the
   $\sqrt{d_\pi}$ coefficient normalisation, the sesquilinearity of
   $c_{v,w}$, and the left/right dual-factor bookkeeping in the regular
   representation item (batch notes items 4–5).
6. **Bookkeeping nit**: the batch notes' "7 on A" local-prerequisite count;
   the actual net-new A ids number six (A6/A7 are design rows).

## 6. Checks run

| Check | Result |
|---|---|
| `coverage-checklist.mjs` on batch-11 coverage | exit 0: 2 pages, 37 rows, 0 errors, 1 low-yield warning (confirmed above) |
| `manifest-deps.mjs` on batch-11 manifest | exit 0: 24 items, 0 errors |
| `item-dependency-levels.mjs check --run frontier-38-owner-30` | exit 0: 804 items across 60 pages, maximum level 16 |
| `manifest-integrity.mjs --run frontier-38-owner-30` | exit 0: 60/60 pages owed present, no scope drift |
| Step-1 readiness records for all 24 items | 24/24 present, all `decision: ready` |
| Recursive dependency closure (this review) | 1,723 nodes; 0 missing, 0 planned-only, 0 non-published, 0 `proved_here: false` |
| Source re-download vs fetch stamps | 3/3 PDFs byte- and sha256-16-exact; Tao HTML content-checked (live-page byte drift expected) |
| Key locators re-read in fetched full texts | Kowalski Thms 5.4.1/5.5.1, Cor 5.4.2, Lemmas 5.4.3/5.4.7/5.5.2; Vogan Def 2.3, Thms 2.6/2.13, Cor 2.16, Prop 2.17, pp. 1–2; Teleman §19.4–19.14, Lemma 22.6 |
| Design-to-manifest id diff (RG-22 tables) | 15/15 designed ids present, 9 local additions, 0 drops |
| `step3-decisions.mjs check --run frontier-38-owner-30 --phase scope` | pair listed as awaiting review before this decision; no owner receipt for this page |

## 7. Scope decision

The planned definitions, results and examples adequately cover the intended
subject of RG-22: the representative-function algebra and uniform density,
the $L^2$ orthonormal coefficient basis, the regular representation with
multiplicities and the commuting right action, discrete Hilbert decomposition
of arbitrary unitary representations, Parseval/inversion and countable
isotypic support, with four examples/counterexamples on the B page. All 15
designed ids are present with their claims, the nine local additions are
authorized prerequisites in dependency order, source coverage is complete and
independently re-verified, all page-level and item-level prerequisites are
published or scaffolded in-run, and no promised claim is missing or weakened.
Decision: **`sufficient`** for
`peter-weyl-theory-for-general-compact-groups`. No enrichment or pair merger
is required; no owner `proceed` record is needed for the current scope. The
observations in §5 are for the owner's information only.

## Appendix — inventory bound to this decision

A page (17, manifest order):
`def-unitary-dual-of-a-compact-group` (definition),
`def-representative-function-on-a-compact-group` (definition),
`lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations` (lemma),
`lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra` (lemma),
`lem-compact-convolution-operators-commute-with-right-translations` (lemma),
`lem-finite-rank-spectral-pieces-of-compact-convolution` (lemma),
`lem-compact-group-matrix-coefficients-separate-points` (lemma),
`thm-uniform-peter-weyl-density` (theorem),
`def-normalized-irreducible-matrix-coefficient-basis` (definition),
`thm-l2-peter-weyl-orthonormal-basis` (theorem),
`def-hilbert-direct-sum-of-unitary-representations` (definition),
`lem-l1-action-of-a-unitary-representation` (lemma),
`lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation` (lemma),
`thm-regular-representation-peter-weyl-decomposition` (theorem),
`thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely` (theorem),
`cor-parseval-and-fourier-inversion-for-compact-groups` (corollary),
`cor-each-vector-in-a-compact-representation-has-countable-isotypic-support` (corollary).

B page (7, manifest order):
`lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients` (lemma),
`ex-peter-weyl-for-a-profinite-group` (example),
`lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct` (lemma),
`ex-peter-weyl-for-an-infinite-product-of-finite-groups` (example),
`ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` (example),
`lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero` (lemma),
`cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations` (counterexample).

The scope receipt
`research/frontier-38-owner-30-step3a-review-peter-weyl-theory-for-general-compact-groups.json`
is hash-bound to the current manifest pages. Next action: Step 3b may author
this pair under this scope; the owner should read §5 before or during
authoring.

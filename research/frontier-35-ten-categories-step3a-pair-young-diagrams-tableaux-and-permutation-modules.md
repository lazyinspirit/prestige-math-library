# Step 3a scope review — pair `young-diagrams-tableaux-and-permutation-modules`

- Run: `frontier-35-ten-categories` (stage `3a-scope`), dispatch label
  `step3a-pair-young-diagrams-tableaux-and-permutation-modules-3e501b2a53fb2e57`
- Role: alpha (scope reviewer only — not owner, not item author)
- A page: `young-diagrams-tableaux-and-permutation-modules` (batch 11, order
  510.045; 12 items: 7 definitions, 5 lemmas)
- B page: `young-diagrams-tableaux-and-permutation-modules-examples` (batch 11,
  order 510.046; 4 examples)
- Decision: **`sufficient`** — recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories
  --page young-diagrams-tableaux-and-permutation-modules --decision sufficient`.
- Date: 2026-09-24.

This report decides scope only. It is not an item approval, not a proof
judgement, and not an owner record. No scaffold, manifest, coverage or library
file was edited.

## 1. Intended subject and role in the library

The controlling prose design is RG-8 in
`research/plan-representation-theory-groups-track.md` lines 548–588 (summary
row line 39: "partitions, tabloids, dominance, Young permutation modules"),
with the plan registry in `research/plan-spec.json` (empty item inventories for
both pages), the run scope in
`research/frontier-35-ten-categories-scope-ledger.json`, and the constructed
scaffold in `research/frontier-35-ten-categories-batch-11.pages.json` with
coverage in `research/frontier-35-ten-categories-batch-11.coverage.json`.

Intended subject: the combinatorial setup of the symmetric-group block —
partitions, English Young diagrams and conjugation, tableaux and standard
tableaux, removable nodes, dominance order, the row/column incidence
(Basic Combinatorial) lemma, row and column stabilizers, Young subgroups,
tabloids, the Young permutation module $M^\lambda$ with
$M^\lambda\cong\operatorname{Ind}_{S_\lambda}^{S_n}1$, and semistandard
tableaux / Kostka numbers. The design deliberately stops before Specht
modules, irreducibility, branching and the hook formula (those are RG-9, RG-10,
RG-11).

Role in the library: supplier for the later symmetric-group pages that the plan
declares on this A page — `specht-modules-and-the-irreducibles-of-the-symmetric-group`
(510.047), `the-branching-rule-and-the-young-graph` (510.049),
`the-hook-length-formula-and-rsk-correspondence` (510.051) and
`principal-series-representations-of-gl-n-over-a-finite-field` (510.055) — all
of which need exactly this page's outputs (tabloids, $R_t$/$C_t$,
dominance/BCL, removable nodes, semistandard/Kostka).

Consumer checks. The only in-run consumer of either page is the B companion
(page-level `requires` scan of all 17 current batch manifests). No item in any
other batch depends on any of this pair's 16 item ids, and batch 11's
`cross-batch-dependencies.json` is `[]`. No published page or item references
either page id or any pair item id (`grep` over `library/` and `items/`), and no
published item supplies an overlapping claim. No owner deferral
(`frontier-35-ten-categories-owner-authoring-direction.md`,
`-deferred-items.json`, `-deferred-pairs.json`,
`-step1-owner-resolution.md`) touches this pair. The Step-1 drift review
recorded `no-drift` for this A page
(`research/frontier-35-ten-categories-alpha-step1-drift.md`).

## 2. Design-to-manifest mapping

All 12 designed A item ids and all 4 designed B item ids are present, with the
designed kinds and roles; orders, companion pointers and both `requires` lists
match the plan and the scope ledger. The A page requires
`group-actions-and-cayleys-theorem` and
`induced-representations-and-frobenius-reciprocity` (both published pages); the
B page requires the A page.

| # | item (kind) | design row | mapping note |
|---|---|---|---|
| 1 | `def-partition-young-diagram-and-conjugate-partition` (def) | RG-8 A1 | adds the $S_0=\{1\}$ boundary convention asked for by the design's boundary plan |
| 2 | `def-young-tableau-standard-tableau-and-shape` (def) | RG-8 A2 | empty-tableau case included |
| 3 | `def-removable-and-addable-nodes-of-a-partition` (def) | RG-8 A3 | keeps node ≠ row endpoint explicit |
| 4 | `lem-largest-entry-of-a-standard-tableau-is-removable` (lemma) | RG-8 A4 | proof provenance down-tagged to `ai-altered` (honest scaffold rewording) |
| 5 | `def-dominance-order-on-partitions` (def) | RG-8 A5 | padded prefix sums; warns against identifying with lexicographic order |
| 6 | `lem-conjugation-reverses-dominance` (lemma) | RG-8 A6 | — |
| 7 | `def-row-and-column-stabilizers-of-a-tableau` (def) | RG-8 A10 | **moved ahead of item 8** (BCL's equality clause uses $R_s$, $C_t$); documented in the batch notes |
| 8 | `lem-basic-combinatorial-lemma-for-tableaux` (lemma) | RG-8 A7 | statement carries both the dominance and the equality clause of Chan Lemma 2.14 / Craven Lemma 1.21 |
| 9 | `def-young-subgroup-tabloid-and-permutation-module` (def) | RG-8 A8 | splits the design's "define … and $M^\lambda\cong\mathbb C[S_n/S_\lambda]$" into the definition plus item 10 |
| 10 | `lem-young-permutation-module-is-induced-from-the-trivial-character` (lemma) | RG-8 A9 | proof strategy: coset $\leftrightarrow$ tabloid bijection, then the published coset theorem |
| 11 | `lem-tableau-stabilizers-transform-by-conjugation` (lemma) | RG-8 A11 | — |
| 12 | `def-semistandard-tableau-and-kostka-number` (def) | RG-8 A12 | adds $K_{\varnothing,\varnothing}=1$ |
| B1 | `ex-partitions-and-dominance-through-size-five` (example) | RG-8 B1 | **corrected**: dominance is total for $n\le 5$; the scaffold gives the chains plus the true first incomparable pair $(4,1,1)$/$(3,3)$ at $n=6$ |
| B2 | `ex-removable-nodes-and-row-endpoints` (example) | RG-8 B2 | — |
| B3 | `ex-young-permutation-modules-for-row-and-column-partitions` (example) | RG-8 B3 | includes the $n=0$ collapse |
| B4 | `ex-semistandard-tableaux-and-small-kostka-numbers` (example) | RG-8 B4 | — |

No designed item is dropped, renamed to a different claim, or weakened, and no
item beyond the design list was added. Item order respects every `deps` list,
and the design's boundary instructions are honoured: empty shapes, $S_0$, no
irreducibility and no hook-formula assertion.

## 3. Source coverage

`research/frontier-35-ten-categories-batch-11.coverage.json` gives the A page
two independent full treatments, item-level dispositions and exact locators. I
re-fetched both PDFs myself and reproduced the recorded stamps exactly:

- Charlotte Chan, *Representation Theory of Symmetric Groups* — 303,971 bytes,
  sha256 prefix `8a3cac907770c66d`, 40 pages. I read printed pp. 7–13:
  Definitions 2.1, 2.3, 2.6 (with Remark 2.7), Lemma 2.8, Definitions 2.10 and
  2.12, Remark 2.13, Lemma 2.14 with its full proof, then Chapter 3 through
  Lemma 3.4, Definition 3.5, Proposition 3.6, Example 3.7 and the opening
  Specht construction. The scaffold's statements agree with the source text,
  including the left action on tableaux/tabloids and the coset-tabloid
  identification.
- David Craven, *Groups, Geometries and Representation Theory* — 369,993
  bytes, sha256 prefix `b2b190e9a1928b17`, 42 pages. I read §1.4 (printed
  p. 7: Definition 1.10, largest-entry removability and the deletion
  recursion), §§1.6–1.7 (pp. 13–16: tabloids, Young subgroups, stabilizers,
  Lemma 1.16, Definitions 1.18–1.19, Lemma 1.20, the Dominance Lemma 1.21 and
  the explicit size-six incomparability), and §2.4 (pp. 28–29: semistandard
  tableaux, types, Lemma 2.15, Young's rule statement).

Dispositions check out for what the items rely on: every harvested Chan/Craven
result behind an item is marked included or inline; the deferred rows point to
valid in-plan destinations (Chan's polytabloid/Specht construction →
`specht-modules-and-the-irreducibles-of-the-symmetric-group`; Craven's Young
rule → `the-branching-rule-and-the-young-graph`); the single out-of-scope row
(Chan Lemma 3.2, the Hom-orbit basis between permutation modules) is a later
intertwiner/Young-rule device, not part of defining $M^\lambda$ or its small
examples. `coverage-checklist` rerun on this file: 2 pages, 71 harvested
results, 0 errors, 0 warnings.

Mathematics spot-checks (scope-level sanity, not proof judgement): dominance is
indeed a chain for every $n\le 5$ and $(4,1,1)$/$(3,3)$ is the first
incomparable pair (prefix-sum check, matching Craven p. 16); the four small
Kostka values in B4 are correct; $M^{(n)}$ and $M^{(1^n)}$ are the trivial and
regular modules including $n=0$; the removable/addable-node example is correct
for $(3,3,1)$, $(3,2,1)$ and the empty shape.

## 4. Mechanical checks rerun 2026-09-24

| Check | Result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-11.pages.json` | 40 items, 0 normalized, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-35-ten-categories-batch-11.pages.json` | 40 scoped items, 0 errors, 0 warnings |
| `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-11.coverage.json` | 2 pages, 71 results, 0 errors, 0 warnings |
| Dependency resolution of the 16 pair items | every `deps` entry resolves to an earlier in-pair item or to an existing published `items/*.md`; no missing id, no cycle, no B→A inversion |
| Published suppliers actually used | `def-symmetric-group`, `def-trivial-regular-and-permutation-representations`, `def-induced-r-linear-g-module-by-h-covariant-functions`, `thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets`: all `status: published`; I read the coset theorem in full — its left-coset, left-action orientation matches the tabloid construction |
| Published consumers / duplicates | none; no item id of this pair exists in `items/` or is referenced in `library/` |

## 5. Uncertainty and considered-and-declined additions

Recorded honestly for the owner; none of these made the scope inadequate.

1. **Chan Prop 3.6 and Example 3.7(c)(d) are inside the declared read range
   but have no coverage row and no item.** Chan proves (printed p. 12) that
   $M^\lambda$ is cyclic, generated by any tabloid, with
   $\dim_F M^\lambda=n!/\lambda_1!\cdots\lambda_k!$, and gives the examples
   $M^{(n-1,1)}$ = natural permutation module and $M^{(n-k,k)}\cong
   \mathbb C[\Omega_k]$ on $k$-subsets; the B page keeps only the two extreme
   cases. I checked every planned consumer (RG-9/10/11/13 item lists in
   `plan-representation-theory-groups-track.md`): none needs $\dim M^\lambda$
   as a statement, and it is derivable from item 10 plus the published
   cardinality of $S_k$ and Lagrange/coset-counting facts. Enrichment
   candidate, not an insufficiency of the designed subject.
2. **Craven Lemma 2.15 is dispositioned `inline`.** Its general statements
   (existence of a semistandard tableau of shape $\lambda$ and type $\mu$
   forces $\lambda\unrhd\mu$; $K_{\lambda\lambda}=1$) are only exhibited by
   instances in B4; no item on any planned page states them. The natural home
   is RG-10's `lem-semistandard-homomorphisms-are-independent-and-dominance-triangular`,
   and the module-theoretic dominance direction used here is supplied instead
   by item 8. Worth an owner glance at RG-10 scope time; not a gap of this
   pair.
3. **General Young subgroups are not itemized.** Chan Def 2.6/Remark 2.7(a)
   define a Young subgroup as any conjugate of $S_\lambda$; item 9 defines only
   the standard block subgroup, which is all the coset identification and the
   $R_t$/$C_t$ defs need.
4. **Published overlap.** The published combinatorics item
   `def-ferrers-young-diagram-conjugate-partition-and-durfee-square` (page
   `integer-partitions-and-the-twelvefold-way`, order 201) already owns
   Ferrers/Young diagrams, conjugation, self-conjugacy and the Durfee square,
   with the same English convention and the same formula
   $\lambda'_j=\#\{i:\lambda_i\ge j\}$; item 1 restates the conventions locally
   and no plan edge connects the pages. The design explicitly wants local
   conventions ("fixes all combinatorial indexing conventions"), so this is a
   deliberate restatement; the owner may later consider a non-load-bearing
   orientation link, but it is not a scope defect.
5. **Metadata nuance.** The per-item Craven locators in the manifest read
   "§§1.4 and 1.6–1.8", while the coverage read §1.6–1.7; Craven §1.8 (the
   tabloid ordering) is used by RG-9's standard-polytabloid-basis item, not
   here. No claim of this pair depends on §1.8.

Unresolved uncertainty: I verified the two cited full texts at the cited
sections, not the entire 40- and 42-page notes; no other source bears on this
pair. I found no defect requiring report under the published-defect rule.

## 6. Decision

Scope decision for the A page (and hence the pair): **`sufficient`** — the
planned definitions, results and examples cover the intended subject, match the
RG-8 prose design item-for-item, instantiate the corrected size-six
incomparability, are backed by two verified independent full treatments, and
leave no planned consumer unsupplied. Receipt:
`research/frontier-35-ten-categories-step3a-review-young-diagrams-tableaux-and-permutation-modules.json`.

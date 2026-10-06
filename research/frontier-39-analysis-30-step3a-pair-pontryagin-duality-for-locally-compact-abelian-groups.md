# Step 3a scope review — pair `pontryagin-duality-for-locally-compact-abelian-groups`

- Run: `frontier-39-analysis-30` (stage `3a-scope`), dispatch label
  `step3a-pair-pontryagin-duality-for-locally-compact-abelian-groups-5fcf1aa6a848672c`
- Role: alpha scope reviewer (not owner, not item author)
- A page: `pontryagin-duality-for-locally-compact-abelian-groups` (batch 27,
  order 510.06505, category `fourier-analysis`, 20 items: 1 definition,
  11 lemmas, 6 theorems, 2 corollaries; in-run dependency levels 0-22)
- B page: `pontryagin-duality-for-locally-compact-abelian-groups-examples`
  (batch 27, order 510.06506, `requires` only the A page; 3 items: 2 examples,
  1 counterexample; levels 18-21)
- Decision: **`sufficient`**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30
  --page pontryagin-duality-for-locally-compact-abelian-groups --decision sufficient`
  (receipt `research/frontier-39-analysis-30-step3a-review-pontryagin-duality-for-locally-compact-abelian-groups.json`)
- Date: 2026-10-05.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, coverage, item,
plan or engine artifact was edited; the only writes are this report and the
scope receipt. The separate `bochner-inversion-and-plancherel-on-lca-groups`
pair (batch 26, this pair's FR-16 supplier) is still awaiting its own scope
review; this review therefore keeps its cross-batch edges open (section 4)
and does not pre-empt that review.

## 1. Intended subject and role in the library

Controlling prose design: `research/plan-fourier-analysis-track.md` FR-17,
lines 1279-1328 — A/B page ids at 1281-1282, `Requires` and sources at
1283-1289, the 16-row A inventory at 1293-1308, the 3 B leaves at 1314-1316,
and the hard proof/boundary obligations at 1318-1328. Supporting plan
records: the track summary row 47 ("range density, full Plancherel, transform
localization, Pontryagin biduality, and exactness"), the placement/requires
row 78 (`FR-15 A, FR-16 A, uniform-spaces, subspaces-products-and-quotients`),
the per-pair source row 329, and the canonical-coverage rows 41-45/62 with
the audit factorisation row at plan line 1561 (which names
`ex-annihilator-of-a-closed-subgroup-of-euclidean-space`,
`ex-bidual-map-on-the-circle-and-the-integers` and
`lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` as already-counted
factorisations — all three are present in the scaffold). `plan-spec.json`
pages 596/597 carry the same orders, titles, companions, categories and
`requires` arrays as the manifest, with empty planned item lists, so the
batch-27 manifest is the inventory of record.

Intended subject: full Pontryagin duality for Hausdorff locally compact
abelian groups — the topology interface supplied by FR-15, completion of LCA
Plancherel (range density from the FR-16 isometry, then unitarity), transform
localisation (the compactly supported nonnegative bump), separation of points
and injectivity of evaluation, the biduality theorem, compact/discrete
exchange, the Fourier-series and discrete special cases, exactness
(character extension, dual of a quotient = annihilator, dual of a closed
subgroup = dual quotient, double-annihilator closure), structural transport
(finite products, closed subgroups, quotients, contravariant involution) and
the principal structure theorem; the B page carries the annihilator
computation in Euclidean space, the concrete bidual maps on
$\mathbb Z/\mathbb T$ and the counterexample showing that the compact-open
topology is not removable.

Role in the library: this is the abstract duality interface of the Fourier
track. Downstream page consumers are
`finite-fourier-analysis-and-the-fast-fourier-transform` (FR-18, batch 28)
and `poisson-summation-sampling-and-lattice-duality` (FR-19, batch 29); both
edges are page-level only and recorded `open` in the ledger with evidence
that neither consumer declares an item-level dependency on any batch-27 item
(the FR-19 record states explicitly that a later reader wanting a biduality
derivation would be proposing a scope change, not a repair). No other page of
this run's 60 references this pair, no published item or page does either,
and no B-page item is a `deps` target anywhere. The two downstream-facing
corollaries (rows 9 and 16) are page-interface items whose item-level
consumers simply do not exist yet.

Owner decisions read and honoured: `research/frontier-39-analysis-30-step1-owner-resolution.md`
items 6 (bump via inverse $L^2$ transforms; range density from FR-16 isometry
+ Fourier-Stieltjes uniqueness; full Plancherel; then biduality), 7 (Haar
supplier id; the edge is now removed from the current bump proof), 9 (LCA
hypotheses and dependency corrections), 13 (readiness refreshes), 14 (owner
approved the in-page proof-order change; no pair or page scope changed) and
17 (the three HR 9.8 structure rows explicitly assume AC+DC as a conservative
basis, with the Ross quotation provenance and no minimality claim), plus the
current-state record in `research/frontier-39-analysis-30-batch-27.notes.md`
(including its conflict notes 6 and 7, carried as findings F2 and F3 below).

## 2. Design-to-manifest mapping

All 16 designed A rows are present in the manifest with the designed ids,
kinds and content; no design row was dropped, weakened or split:

| design row (plan line) | designed item | manifest statement |
|---|---|---|
| 1 (1293) | `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` | present; adds the homeomorphism-onto-image consequence |
| 2 (1294) | `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` | present |
| 3 (1295) | `thm-plancherel-theorem-for-lca-groups` | present (unitary, compatible dual Haar normalisation) |
| 4 (1296) | `lem-positive-compactly-supported-transform-bump-on-the-dual` | present (Ko 13.2 form) |
| 5 (1297) | `lem-continuous-characters-separate-points-of-an-lca-group` | present (plus injectivity of evaluation) |
| 6 (1298) | `thm-pontryagin-biduality` | present |
| 7 (1299) | `thm-principal-structure-theorem-for-lca-groups` | present (AC+DC, open subgroup $\mathbb R^n\times W$) |
| 8 (1300) | `thm-compact-discrete-duality-for-lca-groups` | present (both directions) |
| 9 (1301) | `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases` | present |
| 10 (1302) | `lem-character-extension-from-a-closed-subgroup-of-an-lca-group` | present |
| 11 (1303) | `def-annihilator-of-a-subgroup` | present; adds kernel/closedness/closure conventions |
| 12 (1304) | `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` | present |
| 13 (1305) | `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` | present (open continuous surjection) |
| 14 (1306) | `lem-annihilator-reverses-inclusion-and-double-annihilator-closes` | present ($(H^\perp)^\perp=\overline H$) |
| 15 (1307) | `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients` | present |
| 16 (1308) | `cor-pontryagin-duality-is-a-contravariant-involution` | present (functor + naturality) |

All three designed B leaves are present with their designed ids and kinds
(plan lines 1314-1316): the Euclidean annihilator example, the
$\mathbb Z/\mathbb T$ bidual example and the discrete-topology
counterexample (statement provenance `ai-generated` with
`generation.role: counterexample`, matching the batch-27 reconciliation of
that one leaf).

Four local support items complete the pair (none is a design row; each is a
recorded scaffold addition):

| added item | role | consumed by |
|---|---|---|
| `lem-local-compact-subgroups-of-hausdorff-groups-are-closed` | closes the image step in biduality and the dense+closed step in the extension lemma | `thm-pontryagin-biduality`, `lem-character-extension-from-a-closed-subgroup-of-an-lca-group` |
| `lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index` | Ko 14.13 content for the HR 9.8 structure route | `thm-principal-structure-theorem-for-lca-groups` |
| `lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean` | Ko 14.14 content via HR 9.8 | `thm-principal-structure-theorem-for-lca-groups` |
| `lem-compact-open-subgroups-in-totally-disconnected-lca-groups` | Ko 14.9-14.10 content, originally support for the Ko route | **none** (see finding F4) |

Hard obligations preserved (plan lines 1318-1328), with the evidence item by
item:

- **Hausdorff LCA, abelian, no noncommutative claim.** Every A statement is
  for locally compact Hausdorff abelian groups; the only general statement is
  the support lemma `lem-local-compact-subgroups-of-hausdorff-groups-are-closed`
  (Hausdorff topological groups), which is used only to close closed-image
  and dense+closed arguments. No Peter-Weyl or noncommutative statement
  appears anywhere in the pair.
- **Annihilators of closed subgroups or explicit closure.** The definition
  records $H^\perp=\ker(\gamma\mapsto\gamma|_H)$, closedness for closed $H$,
  the convention $(H)^\perp=(\overline H)^\perp$, and the bidual-side
  $L^\perp$; the annihilator lemma states $(H^\perp)^\perp=\overline H$; the
  exactness rows use closed $H$ throughout.
- **Acyclic, biduality-free density step.** Dependency levels:
  range density 14, Plancherel 15, bump 16, biduality 17; the range-density
  proof uses the FR-16 isometry, the translation identity,
  Fourier-Stieltjes uniqueness and $C_c$ density, and its strategy says
  "This proof does not use biduality"; the bump uses full Plancherel on
  inverse $L^2$ transforms and is proved before biduality; the biduality
  strategy uses the bump and Fourier-Stieltjes uniqueness and does not
  assume a double-dual identification before onto. `item-dependency-levels`
  reports 899 items, maximum level 22, no batch-27 finding.
- **Choice ledger consistent (up to F2).** Fourteen rows state AC+DC and
  carry both `def-axiom-of-choice` and `def-dependent-choice` in `deps`:
  eleven of the twelve FR-17 rows in the batch notes' AC+DC ledger plus the
  three HR 9.8 structure rows. The twelfth FR-17 row, the involution
  corollary, states AC+DC in its header while carrying the assumption
  through its two AC+DC suppliers (matching how the current library
  declares inherited choice in many corollaries). Three rows
  (quotient-dual, compact/discrete, B3) assume AC only and carry
  `def-axiom-of-choice`; the three choice-free rows (the closed-subgroup
  support lemma, the annihilator definition, the totally-disconnected
  support lemma) declare no choice and carry none in `deps`. The two B
  examples are the exception, carried as F2.

## 3. Source coverage

Seven source rows over four works back the pair: Loomis (both pages), Korner
(both pages), Einsiedler-Ward (both pages) and Ross (A page). I re-downloaded
all four full texts and matched the recorded fetch stamps byte for byte and
hash for hash:

| source | bytes / sha256-16 / pages (recorded = re-verified) | locators I re-read |
|---|---|---|
| Loomis, *Introduction to Abstract Harmonic Analysis* | 8 691 521 / `05a32c7db1e616af` / 198 | §35B Thm, §35C (printed p. 139); §35D, §35E, §35F (p. 140); §37C (p. 150); §37D (pp. 150-151); §38B (p. 154) |
| Korner, *Topological Groups* (Internet Archive snapshot) | 227 927 / `5697a7d11ed62968` / 30 | Lemma 13.1, Lemma 13.2, Theorem 13.3, Lemma 13.4 (p. 26); Definition 14.1, Lemma 14.2, Theorem 14.3, Lemma 14.4 (p. 27); Theorem 14.6, Lemmas 14.7-14.11 (p. 28); Lemmas 14.12-14.14, Theorem 15.1 (p. 29) |
| Einsiedler-Ward, *Ergodic Theory ...* Appendix C | 1 024 475 / `c8e8b3e47226ca27` / 171 | Theorem C.11, C.12, C.13 (p. 437) |
| Ross, "Closed subgroups of compactly generated LCA groups ..." | 167 640 / `e694d06600f02919` / 7 | Theorem 3 proof, p. 3, quoting and attributing Hewitt-Ross Theorem 9.8 |

What the re-reading confirms for the load-bearing rows:

- Korner 13.1/13.2/13.3 state exactly the neighbourhood-basis lemma, the
  bump lemma ($f\in L^1$, $\widehat f\ge0$, $\widehat f(\gamma)>0$,
  $\widehat f=0$ off $K$) and Pontryagin biduality (statement-only in the
  source, as the coverage records); Korner 14.1-14.3 and 14.6 state the
  annihilator/quotient/extension material and the principal structure theorem.
- Loomis 35B gives the quotient-dual = annihilator identification with the
  quotient topology explicit; 35D/35E give $\widehat{\mathbb Z}\cong\mathbb T$
  and $\widehat{\mathbb T}\cong\mathbb Z$ (used in F1 below); 37C is the
  inverse-transform $j$-construction that backs the scaffold's bump strategy;
  37D is the transform-algebra proof the owner replaced; 38B states the
  compact normalisation "measure of each point is 1" used by the
  Fourier-series corollary.
- Einsiedler-Ward C.13 states $G/H$ LCA, the annihilator $\widehat{G/H}\cong H^\perp$,
  $\widehat G/H^\perp\cong\widehat H$ and $H^{\perp\perp}\cong H$.
- Ross p. 3 quotes HR 9.8 as $\mathbb R^c\times\mathbb Z^d\times E$ with $E$
  compact; the primary Hewitt-Ross proof remains inaccessible and is not
  claimed read anywhere in the scaffold, matching owner resolution 17.

Coverage dispositions (carded by `coverage-checklist`, 0 errors,
0 warnings): the A page has 27 harvested rows (3 `already-published`,
18 `included`, 1 `inline` — the Lo §37C construction now realised as the
local bump lemma, 2 `deferred`, 3 `out-of-scope`); the B page has 24 rows
(3 `already-published`, 15 `included`, 1 `inline`, 2 `deferred`,
3 `out-of-scope`), 51 rows in total. The two deferrals carry destinations
that exist in this run: Lo §36A-B to `bochner-inversion-and-plancherel-on-lca-groups`
(batch 26, scaffolded) and Lo §37E (Poisson summation) to
`poisson-summation-sampling-and-lattice-duality` (batch 29, scaffolded). The
out-of-scope rows (Lo §37A-B Wiener-Tauberian; Ko Lemma 13.4; Ko Theorem 15.1
/ the HR-route remark) have result-specific reasons and match the plan's
"deliberately not decomposed" table. The B examples rest on the same
published FR-15 dual computations and the Loomis §35D-35E material; B3 is an
assembled counterexample, carried as `ai-generated` with
`generation.role: counterexample` and not claimed as a source statement.
`source-fetch-check` (check mode, offline) reports 7/7 source rows
fetch-verified with 0 documented drops.

## 4. Dependency, prerequisite and consumer checks

Page-level `requires` (manifest = plan-spec): `character-groups-and-elementary-lca-duals`
(published page on disk: `library/fourier-analysis/character-groups-and-elementary-lca-duals.md`),
`bochner-inversion-and-plancherel-on-lca-groups` (batch-26 in-run scaffold),
`uniform-spaces` and `subspaces-products-and-quotients` (both published
pages on disk). All are earlier in reading order; the FR-16 page is the only
in-run supplier.

Item-level dependencies: the 23 items declare 101 distinct dependency ids,
all resolving — 72 published item files, 29 in-run scaffold rows (14 in
batch 26, 15 in this pair) and 0 unresolved. Every `[[...]]` item link in
every statement and strategy resolves to a published item or an in-run
scaffold row (the single nominal exception is a page link in the B2 example
to the published FR-15 page). The whole-run and batch checks re-run for this
review:

```
manifest-deps (batch 27):        23 item(s), 0 normalized, 0 error(s)
manifest-deps (whole run):       899 item(s), 0 normalized, 0 error(s)
content-policy --manifest-only:  899 scoped item(s), 0 error(s), 0 warning(s)
coverage-checklist --require-destination: 2 page(s), 51 harvested, 0 error(s), 0 warning(s)
item-dependency-levels check:    899 item(s) across 60 page(s), max level 22, no batch-27 finding
manifest-integrity:              60 page(s) owed, 60 in the manifests, no scope drift
validate-plan:                   exit 0, no cycle, forward reference, unresolved id or cap violation
source-fetch-check:              7/7 source rows fetch-verified (0 documented drops)
step1-decisions check:           closed, 899/899 items with current ready records
```

The unified ledger lists batch 27 in `reviewed_batches` with 31 consumer
edges (1 page edge to FR-16 plus 30 item edges over 14 distinct batch-26
suppliers), all `open` because every batch-26 supplier is scaffold-only;
`orphaned_reviews` is empty. I read the batch-26 statements of the
load-bearing suppliers and they carry the clauses the consumers need:
`thm-lca-plancherel-isometric-extension` (isometry on $L^1\cap L^2$ with
unique extension, surjectivity explicitly not asserted),
`thm-lca-fourier-inversion-for-integrable-transform`,
`lem-fourier-stieltjes-transforms-determine-finite-radon-measures`,
`thm-bochner-theorem-for-lca-groups`,
`thm-compatible-dual-haar-normalisation`,
`lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution`
(all four identities for $L^1$ functions),
`lem-lca-parseval-pairing-on-the-integrable-core`,
`lem-lca-positive-convolution-squares-form-an-inversion-core`,
`thm-riemann-lebesgue-lemma-on-lca-groups` and
`def-fourier-transform-on-an-lca-group` (conjugate-phase convention). I also
read the published load-bearing suppliers
`lem-dual-homomorphisms-are-continuous-and-functorial` (b),
`lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two`,
`thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation`
and `lem-hamel-basis-exists`.

Consumers: batch 28 (`finite-fourier-analysis-and-the-fast-fourier-transform`)
and batch 29 (`poisson-summation-sampling-and-lattice-duality`) declare this
A page in `requires`; both ledger rows are `open` and explicitly record that
no item-level dependency on a batch-27 item exists yet (FR-18 uses the
published FR-15 finite-cyclic example; FR-19 uses the explicit dual lattice
`A^{-T}\mathbb Z^n`). No unpublished in-run item outside this pair consumes a
batch-27 item, and the B page is a leaf.

Unmet prerequisites: **none confirmed.** Four near-misses, reported for
honesty rather than as blockers:

- The bump proof's identity $\widehat f(\omega)=\langle u,\omega v\rangle$
  for $f=u\overline v\in L^1$ is definitional under the repository's
  conjugate-phase convention (both sides are $\int u\overline{v}\,\overline{\omega}$),
  so the FR-16 convolution/translation item's $L^1$ scope is sufficient and
  no missing $L^2$ product-convolution lemma is consumed.
- Two strategies (biduality; range density) use "finite regular complex
  measures are closed in total-variation norm" with an inline 2-epsilon
  compact/open approximation sketch. No library item states this; it is
  elementary and fully specified, so Step 3b should prove it inline or
  factor a short local lemma. Not an absent prerequisite.
- The evaluation map $\Phi$ is first written down in
  `thm-pontryagin-biduality` while four earlier-level items link to it.
  SCHEMA treats same-page links as ordinary links, so no `forward_refs`
  obligation arises; Step 3b may nonetheless introduce $\Phi$ at first use,
  or the owner may add a definition row (advisory only).
- The FR-16 pair's scope review is not recorded yet
  (`step3-decisions --phase scope` reports "current scope review required"),
  so all 31 cross-batch edges remain open by construction. If that review
  amends a supplier statement, batch-27 consumer evidence must be refreshed.
  This is uncertainty, not a gap.

## 5. Findings for the owner

None of these changes the scope verdict; F1 and F4 would change the scope
hash if amended, which is exactly why they are recorded here.

- **F1 (confirmed, scaffold statement defect).**
  `ex-annihilator-of-a-closed-subgroup-of-euclidean-space` clause (1) states
  that for the subgroup $H=\mathbb Z^k\times\{0\}^{n-k}\le\mathbb R^n$ the
  annihilator is $\mathbb R^k\times\mathbb Z^{n-k}$. This is wrong: the
  condition $\xi\cdot h\in\mathbb Z$ for all $h\in H$ forces
  $\xi_i\in\mathbb Z$ for $i\le k$ and leaves the last $n-k$ coordinates
  free, so $H^\perp=\mathbb Z^k\times\mathbb R^{n-k}$. At $n=k=1$ the
  stated formula gives $H^\perp=\mathbb R$ (every character trivial on
  $\mathbb Z$), whereas Loomis §35D (printed p. 140, read in this review)
  gives exactly $H^\perp=\mathbb Z$; equivalently the pair's own
  quotient-dual theorem would give $\widehat H\cong\mathbb Z$. The clause's
  conclusion "the annihilator of a lattice is a lattice" is likewise false
  for this degenerate $H$ (its annihilator is not discrete); the full-rank
  case is correctly covered in clause (3)
  ($H=A\mathbb Z^n\Rightarrow H^\perp=A^{-T}\mathbb Z^n$), and clause (2)
  becomes consistent once the blocks are swapped. Recommended owner action:
  amend clause (1) to $H^\perp=\mathbb Z^k\times\mathbb R^{n-k}$ and
  restate the lattice sentence for the full-rank case; because item
  statements enter the scope hash, the amendment requires a refreshed scope
  record after the edit, and Step 3b then authors the corrected statement.
- **F2 (confirmed contract inconsistency; already recorded).** Batch notes
  conflict 6: the two B examples have no choice header while their `deps`
  include choice-assuming rows
  (`ex-annihilator-of-a-closed-subgroup-of-euclidean-space`:
  `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` AC+DC,
  `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` AC;
  `ex-bidual-map-on-the-circle-and-the-integers`:
  `thm-pontryagin-biduality` AC+DC). Step 3b must either give the direct
  choice-free computations on $\mathbb R^n$ and $\mathbb Z/\mathbb T$ or
  add an explicit inherited-AC header and re-record the choice ledger.
  Either resolution is sound; the choice-free branch must not be destroyed.
- **F3 (recorded duplication; owner reconciliation only).** Batch notes
  conflict 7: `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator`
  re-presents the published
  `lem-dual-homomorphisms-are-continuous-and-functorial` part (b) at this
  page's stable id, minting no new proof. Design row 12 commissions exactly
  this statement; keep it as the page interface alias or re-home/merge it if
  the owner prefers one canonical id. No consumer depends on the batch row
  yet.
- **F4 (confirmed, unused local support).** The local addition
  `lem-compact-open-subgroups-in-totally-disconnected-lca-groups` (Ko
  14.9-14.10 content) has no consumer in the run: the owner's post-scaffold
  correction (owner resolution item 9) removed it from the principal
  structure theorem, whose HR 9.8 route composes the other two structure
  lemmas. It is not a design row. Keeping it is mathematically sound (a
  complete choice-free local result), but it is inventory nothing uses.
  Recommended owner action: keep and record it as an explicit support item,
  or drop it together with the F1 amendment (either way the scope hash
  changes and the scope record must be refreshed afterwards).

## 6. Honest limits

This is a scope review, not proof verification. I read every A- and B-page
statement and strategy, the full FR-17 design section, the coverage rows,
the owner decisions and the batch-27 notes; I re-read the cited source
locators listed in section 3 and both cross-checked the two derivation
identities that carry the owner-approved reordering (the bump overlap
identity and the range-density translation/orthogonality step). I did not
re-derive the item proofs, and the primary Hewitt-Ross proof was not
accessible (only the quoted statement in Ross p. 3 was read; the pair makes
no minimality claim about its AC+DC basis). Finding F1 rests on the
definitional pairing together with Loomis §35D and is checkable directly at
$n=k=1$; it should be confirmed by the owner or Step 3b before amendment.
The FR-16 sibling pair's scope disposition is pending and could invalidate
the cross-batch evidence if its statements change.

## 7. Decision and recording

Scope is **`sufficient`**: the pair's planned definitions, results and
examples cover the intended subject as designed (all 16 FR-17 A rows and 3 B
leaves, unweakened, with the design's hypotheses and hard obligations
preserved and the four local supports disclosed), the source coverage is
fetch-verified at byte/hash level and faithful at the locators I re-read,
all declared prerequisites resolve in the published library or in earlier
in-run batches with no confirmed unmet prerequisite, and the only
outstanding matters are the owner/Step-3b findings F1-F4 above, which
require no change to this pair's *scope* (F1 and F4 would require a
refreshed scope record if amended).

```
node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30 \
  --page pontryagin-duality-for-locally-compact-abelian-groups \
  --decision sufficient \
  --reason "<scope evidence; F1/F2 carrying findings; report path>"
```

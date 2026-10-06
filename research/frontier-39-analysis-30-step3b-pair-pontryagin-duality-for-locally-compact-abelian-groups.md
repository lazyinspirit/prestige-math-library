# Step 3b — pair `pontryagin-duality-for-locally-compact-abelian-groups`

Run `frontier-39-analysis-30`, role `alpha-high`, batch 27. A page
`pontryagin-duality-for-locally-compact-abelian-groups` (order 510.06505, 21
items) and B page `pontryagin-duality-for-locally-compact-abelian-groups-examples`
(order 510.06506, 3 items). Owned and authored by this dispatch only; sibling
pairs and other batch files are preserved untouched.

**Status: authored, checked, decisions recorded.** All 24 item files, both
pages, the batch manifest, the coverage file, the proof contracts and the
cross-batch dependency input are written and pass the gates listed below. 8
items are recorded `accept` and were re-audited and re-recorded against the
current inputs after the manifest and proof revisions; 16 items are recorded
`escalate` because they consume the unfinished in-run batch-26 pair
`bochner-inversion-and-plancherel-on-lca-groups` (exact rows in the final
section). No owner record was overwritten and no judge/audit stamp was added.

## Owned IDs (authoring order, per dispatch, with the added prerequisite)

- Level 0: `def-annihilator-of-a-subgroup`,
  `lem-compact-open-subgroups-in-totally-disconnected-lca-groups`,
  `lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean`,
  `lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index`,
  `lem-local-compact-subgroups-of-hausdorff-groups-are-closed`.
- Level 0 (added in this dispatch, prerequisite repair):
  `lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca`.
- Level 1: `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator`,
  `thm-principal-structure-theorem-for-lca-groups`.
- Level 10: `lem-continuous-characters-separate-points-of-an-lca-group`.
- Level 14: `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group`,
  `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual`.
- Level 15: `thm-plancherel-theorem-for-lca-groups`.
- Level 16: `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases`,
  `lem-positive-compactly-supported-transform-bump-on-the-dual`.
- Level 17: `thm-pontryagin-biduality`.
- Level 18: `lem-annihilator-reverses-inclusion-and-double-annihilator-closes`,
  `thm-compact-discrete-duality-for-lca-groups`,
  `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality` (B),
  `ex-bidual-map-on-the-circle-and-the-integers` (B).
- Level 19: `lem-character-extension-from-a-closed-subgroup-of-an-lca-group`.
- Level 20: `thm-dual-of-a-closed-subgroup-is-the-dual-quotient`.
- Level 21: `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients`,
  `ex-annihilator-of-a-closed-subgroup-of-euclidean-space` (B).
- Level 22: `cor-pontryagin-duality-is-a-contravariant-involution`.

## Entry obligations (historical record; outcomes below)

1. All 23 scaffold item files absent at entry — written; 23 authored plus the
   added prerequisite = 24.
2. Both page files absent — written.
3. Proof contracts absent — created (24 items, 324 citations, 192 boundary
   rows).
4. Item decisions absent — recorded after authoring (8 `accept`, 16
   `escalate`).
5. **Unfinished in-run suppliers.** At entry the FR-16 pair
   `bochner-inversion-and-plancherel-on-lca-groups` (batch 26) had only
   `def-fourier-transform-on-an-lca-group` and
   `def-positive-definite-function-on-an-abelian-group` on disk. By handoff 7
   of its items are on disk and 7 items plus the page are still absent; every
   affected consumer was authored regardless and the exact
   supplier/consumer/step rows are listed in the final section.
6. Carried findings from Step 3a: F1 (Euclidean annihilator statement defect —
   repaired here, scope record refreshed), F2 (B-example choice basis —
   resolved here), F3 (duplicated published interface — preserved as the
   design commissions it), F4 (unused totally-disconnected support lemma —
   preserved and fully authored, with its missing compact-open-basis
   argument supplied inline from published topology).

## Checkpoints (one per item, in dependency order)

Every item passed `precheck` (23 proof items; the definition has no proof
section), `proof-layout` (24 items, 105 steps, 0 defects), `rendercheck`,
`prosecheck`, `boundary-audit` and `citation-fidelity`; only gaps that remain
open are named. Source locators are the first reference of each item's
frontmatter; all carry the Loomis scan (Chapter III §10 or Chapter VII) plus
Koerner §13–14 and/or E&W Appendix C, with the Ross article where the
principal structure theorem is used.

1. `def-annihilator-of-a-subgroup` (L0, accept). Claim/conventions: additive
   abelian topological group $G$ with compact-open dual; $H^\perp=\{\gamma\in
   \widehat G:\gamma(h)=1\ \forall h\in H\}$, shown closed, with $G$ itself
   giving the trivial annihilator. Sources: Loomis VII §34–35 pp. 134–140;
   Koerner §14 pp. 26–29; E&W C.3 Thm C.13. Deps: published dual/topology
   items only. Gap: none.
2. `lem-local-compact-subgroups-of-hausdorff-groups-are-closed` (L0, accept).
   Claim: a subgroup locally compact in the subspace topology of a Hausdorff
   topological group is closed; no choice principle. Sources: Loomis III §10
   pp. 45–47; Koerner §3 pp. 7–8. Deps: published topology. Gap: none.
3. `lem-compact-open-subgroups-in-totally-disconnected-lca-groups` (L0,
   accept). Claim: in a totally disconnected LCA group every neighbourhood of
   $0$ contains a compact open subgroup; plus the compact-open-set refinement
   clause (i). Sources: Koerner §14 Lemmas 14.9–14.10 pp. 28–29; Loomis VII
   §34. Deps: published topology/dimension items. Gap: none (F4 of Step 3a is
   discharged by the authored item).
4. `lem-lca-group-has-an-open-compactly-generated-subgroup-with-no-open-subgroup-of-infinite-index`
   (L0, accept). Claim (AC+DC): every LCA group contains an open compactly
   generated subgroup with no open subgroup of infinite index. Sources: Ross
   Theorem 3 proof p. 3 (quoted classification); Loomis VII §34; Koerner §14.
   Deps: published. Gap: none. Note: the Hewitt–Ross 9.8 route is cited as a
   classification via the Ross article; the primary volume was not read and no
   minimality claim is made.
5. `lem-compactly-generated-lca-group-with-no-open-subgroup-of-infinite-index-splits-as-compact-times-euclidean`
   (L0, accept). Claim (AC+DC): such $H$ is $\mathbb R^n\oplus W$ with $W$
   compact; the Euclidean factor is not claimed unique beyond the citation.
   Sources: Ross Theorem 3 proof p. 3; Loomis VII §34; Koerner §14. Deps:
   published. Gap: none.
6. `lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca` (L0, accept;
   added prerequisite). Claim: $G/H$ for $G$ LCA and $H\le G$ closed is LCA
   Hausdorff abelian in the quotient topology; no choice principle. Sources:
   Loomis III §10 pp. 45–47; Koerner §3 pp. 7–9; E&W C.1. Deps: published
   quotient/topology items. Gap: none. Registered in manifest (level 0), page
   (third entry of the page items list, before its consumers), coverage (E&W
   C.1 row) and contracts.
7. `thm-pontryagin-dual-of-an-lca-quotient-is-the-annihilator` (L1, accept).
   Claim (AC): pullback along $q:G\to G/H$ is an isomorphism of topological
   groups $\widehat{G/H}\to H^\perp$. Sources: Loomis §35B p. 139; Koerner
   §14 pp. 27–28; E&W C.3 Thm C.13. Deps: the published dual-homomorphism
   functoriality lemma (whose part (b) proves the quotient structure
   internally). Gap: none.
8. `thm-principal-structure-theorem-for-lca-groups` (L1, accept). Claim
   (AC+DC): every LCA group contains an open subgroup isomorphic to
   $\mathbb R^n\times W$, $W$ compact. Sources: Koerner Thm 14.6 and Lemmas
   14.7–14.14; Loomis VII §34; Ross p. 3. Deps: published plus the two
   level-0 structure lemmas above. Gap: none.
9. `lem-continuous-characters-separate-points-of-an-lca-group` (L10,
   escalate). Claim (AC+DC): for $x\ne0$ some $\gamma\in\widehat G$ has
   $\gamma(x)\ne1$. Sources: Loomis §§36A–36C pp. 141–146; Koerner §13 p. 26;
   E&W C.3. Proof route: Urysohn cutoff, convolution square
   $h=g*\widetilde g$ positive definite with $h(x)=0$, then Bochner produces
   $\mu$ and $\mu(\widehat G)=h(0)>0$ contradicts $\gamma(x)\equiv1$. Gap:
   step 5.1 consumes `thm-bochner-theorem-for-lca-groups` (batch 26, still
   missing); escalate.
10. `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group`
    (L14, escalate). Claim (AC+DC): the sets $N_{x_1}(K,\epsilon)$ are open and
    form a neighbourhood basis at $x_1$; $\Phi$ is a homeomorphism onto its
    image. Sources: Loomis §37C pp. 150–151; Koerner Lemma 13.1 p. 26; E&W
    C.2–C.3. Gap: steps 1.2 and 2.1 consume the still-missing batch-26
    suppliers `lem-lca-parseval-pairing-on-the-integrable-core`,
    `thm-lca-fourier-inversion-for-integrable-transform` and
    `thm-compatible-dual-haar-normalisation`; plus declaration-only edges to
    four further missing batch-26 items. Escalate.
11. `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` (L14, escalate).
    Claim (AC+DC): the isometric extension $\mathcal F$ has dense range.
    Sources: Loomis §§36A–36D pp. 141–148; Koerner Thm 13.3 p. 26; E&W C.3.
    Gap: step 5.1 consumes `thm-lca-plancherel-isometric-extension`, step 2.1
    consumes `lem-fourier-stieltjes-transforms-determine-finite-radon-measures`
    and step 3.1 consumes `thm-riemann-lebesgue-lemma-on-lca-groups` (all
    missing batch-26 items). Escalate.
12. `thm-plancherel-theorem-for-lca-groups` (L15, escalate). Claim (AC+DC):
    the transform extends uniquely to a unitary $L^2(G)\to L^2(\widehat G)$.
    Sources: Loomis §§36D–37A pp. 146–149; Koerner Thm 13.3; E&W C.3. Gap:
    step 1.1 consumes `thm-lca-plancherel-isometric-extension` (missing).
    Escalate.
13. `cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases`
    (L16, escalate). Claim (AC+DC): the compact case reads Plancherel as the
    Fourier-series identity with point masses $1$; the discrete case requires
    $m_G$ to be the counting measure (clause (2) repaired here for the
    reciprocal dual scale). Sources: Loomis §§38A–38B pp. 154–155; Koerner
    Thm 13.3. Gap: transitive through `thm-plancherel-theorem-for-lca-groups`.
    Escalate.
14. `lem-positive-compactly-supported-transform-bump-on-the-dual` (L16,
    escalate). Claim (AC+DC): around each $\gamma_0\in\widehat G$ and compact
    neighbourhood $K$ there is $f\in L^1(G)$ with $\widehat f\ge0$,
    $\widehat f(\gamma_0)>0$, $\widehat f=0$ off $K$. Sources: Loomis §37C
    pp. 150–151; Koerner Lemma 13.2 p. 26; E&W C.3. Route: Plancherel-based
    construction (indicators in $L^2(\widehat G)$ and unitarity), so it sits
    after Plancherel and before biduality. Gap: its closure contains the
    missing `thm-lca-plancherel-isometric-extension`; its declared dep on
    `thm-riemann-lebesgue-lemma-on-lca-groups` is declaration-only (no body
    use). Escalate.
15. `thm-pontryagin-biduality` (L17, escalate). Claim (AC+DC):
    $\Phi(x)(\gamma)=\gamma(x)$ is an isomorphism of topological groups.
    Sources: Loomis §§37C–37D pp. 150–152; Koerner Thm 13.3; E&W C.3 Thm
    C.12. Route: bump plus Fourier–Stieltjes uniqueness, no circularity. Gap:
    step 5.1 consumes `lem-fourier-stieltjes-transforms-determine-finite-radon-measures`
    (missing). Escalate.
16. `lem-annihilator-reverses-inclusion-and-double-annihilator-closes` (L18,
    escalate). Claim (AC+DC): $K^\perp\le H^\perp$ for $H\le K$ and
    $(H^\perp)^\perp=\overline H$. Sources: Loomis §35D p. 140; Koerner §14;
    E&W C.3. Gap: steps 1.3, 4.1 consume `thm-pontryagin-biduality`
    (escalated). Escalate.
17. `thm-compact-discrete-duality-for-lca-groups` (L18, escalate). Claim
    (AC only): $G$ compact iff $\widehat G$ discrete and $G$ discrete iff
    $\widehat G$ compact; AC enters exactly through the published
    Tychonoff-based implication quoted. Sources: Loomis §35E pp. 140–141;
    Koerner §13. Gap: step 2.1 consumes `thm-pontryagin-biduality`. Escalate.
18. `cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality`
    (B, L18, escalate). Claim: with the discrete topology on the algebraic
    character group $X=\operatorname{Hom}(\mathbb Z,\mathbb T)$ the evaluation
    map $\mathbb Z\to\operatorname{Hom}_{cts}(X,\mathbb T)$ is an isomorphism;
    the counterexample records that the compact-open topology is part of the
    duality statement. Sources: Loomis §§35D–35E p. 140; Koerner §13; E&W C.3.
    Gap: step 4.1 consumes `thm-pontryagin-biduality`. Escalate.
19. `ex-bidual-map-on-the-circle-and-the-integers` (B, L18, escalate). Claim
    (AC+DC declared): under $\widehat{\mathbb Z}\cong\mathbb T$ and
    $\widehat{\mathbb T}\cong\mathbb Z$, both bidual maps are the identity.
    Sources: Loomis §§35D–35E p. 140; E&W C.3. Both dual classifications are
    computed internally from published items. Gap: continuity clause of step
    2.1 consumes `thm-pontryagin-biduality`. Escalate.
20. `lem-character-extension-from-a-closed-subgroup-of-an-lca-group` (L19,
    escalate). Claim (AC+DC): restriction $\widehat G\to\widehat H$ is
    surjective for closed $H$. Sources: Loomis §35D p. 140; Koerner Thm 14.3;
    E&W C.3. Gap: steps 3.1, 4.1, 5.1 consume `thm-pontryagin-biduality` and
    `lem-annihilator-reverses-inclusion-and-double-annihilator-closes`.
    Escalate.
21. `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` (L20, escalate).
    Claim (AC+DC): restriction is an open continuous surjection with kernel
    $H^\perp$, inducing $\widehat G/H^\perp\cong\widehat H$. Sources: Loomis
    §35D p. 140; Koerner Thm 14.3; E&W C.3 Thm C.13. Gap: steps 2.1, 3.1
    consume the extension lemma and biduality. Escalate.
22. `lem-biduality-is-stable-under-products-closed-subgroups-and-quotients`
    (L21, escalate). Claim (AC+DC): the bidual maps commute with finite
    products, closed subgroups and quotients. Sources: Loomis §§35A–35D
    pp. 138–140; Koerner §14; E&W C.3. Gap: steps 2.1, 2.2 consume biduality
    and the annihilator exactness rows. Escalate.
23. `ex-annihilator-of-a-closed-subgroup-of-euclidean-space` (B, L21,
    escalate). Claim (choice-free computations; AC rows context-only): clause
    (1) repaired here — for $H=\mathbb Z^k\times\{0\}^{n-k}$ the annihilator
    is $\mathbb Z^k\times\mathbb R^{n-k}$ (not a lattice unless $k=n$), while
    $(\mathbb R^k\times\{0\}^{n-k})^\perp=\{0\}^k\times\mathbb R^{n-k}$;
    clause (2) the quotient characters; clause (3) $H=A\mathbb Z^n$ gives
    $A^{-T}\mathbb Z^n$. Sources: Loomis §35D p. 140; E&W C.1–C.3. Gap: its
    transitive closure includes
    `thm-dual-of-a-closed-subgroup-is-the-dual-quotient` and biduality; the
    two A-page theorems are context for clause (2). Escalate.
24. `cor-pontryagin-duality-is-a-contravariant-involution` (L22, escalate).
    Claim (AC+DC): $\varphi\mapsto\widehat\varphi$ is contravariantly
    functorial and involutive under biduality. Sources: Loomis §§35A–35D
    pp. 138–140; Koerner §14; E&W C.3. Gap: step 2.1 consumes biduality and
    the stability lemma. Escalate.

## Added prerequisite item

`lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca` (choice-free,
level 0) supplies the quotient-LCA prerequisite declared by the level-18/19/20
quotient and annihilator calculus items
(`lem-annihilator-reverses-inclusion-and-double-annihilator-closes`,
`lem-character-extension-from-a-closed-subgroup-of-an-lca-group`,
`thm-dual-of-a-closed-subgroup-is-the-dual-quotient`) and absent from both the
published library and the scaffold. It is registered in the manifest with its true level,
placed at page position 3 before its consumers, recorded in the coverage file
under the E&W C.1 row, and included in the proof contracts. `validate-plan`,
`manifest-deps` and `item-dependency-levels` accept it.

## Checks actually run (final gates)

- `node tools/proof-layout.mjs` on all 24 changed item paths — 24 items, 105
  steps, 0 defects (the single batched formatting run after final edits).
- `node tools/tsx-run.mjs tools/precheck.mts` on the 23 proof items — 23
  checked, 0 failing.
- `node tools/rendercheck.mjs` on 24 items + both pages — 26 files OK.
- `node tools/prosecheck.mjs` on 26 files — 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-27.proof-contracts.json --json`
  — 24 contracts, 324 citations; the only errors are 9
  `citation-source-missing` rows for the 7 still-missing batch-26 suppliers,
  carried as open obligations below.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template`
  — no template reuse, no contradicted dispositions.
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote` — every
  recorded quote appears in its cited item; 7 referenced items not on disk are
  skipped (not passed), matching the open obligations.
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-27.pages.json`
  — 24 items, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-27.coverage.json --require-destination`
  — 2 pages, 53 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-27.pages.json`
  — 24 scoped items, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — no finding for any of the 24 batch-27 IDs (the run-level output carried
  other batches' unrelated findings).
- `node tools/validate-plan.mjs research/plan-spec.json` — OK: acyclic page
  order, no item-level cycles, forward references, B-page dependencies or
  unresolved ids for pages with item lists.
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase final`
  — all 24 `step3b-review-<id>.json` receipts present; the 8 `accept` receipts
  are fresh (closed at item level) after the current re-audit, and the 16
  `escalate` receipts are reported as owner work ("changed inputs require a
  current owner decision") until the batch-26 suppliers land. No owner action
  or owner record was touched by this dispatch.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — refreshed; the batch-27 input has 33 rows (18 `verified`, 15 `open`), all
  33 declared cross-batch edges carry a review row, 0 orphaned reviews.

## Published concerns and Step 4 amendments

- **F1 (repaired):** `ex-annihilator-of-a-closed-subgroup-of-euclidean-space`
  clause (1) previously asserted a lattice annihilator for
  $\mathbb Z^k\times\{0\}^{n-k}$; corrected to
  $\mathbb Z^k\times\mathbb R^{n-k}$ with the lattice claim confined to the
  full-rank case $k=n$. Scope receipt refreshed (`sufficient`).
- **F2 (resolved):** the B-example choice ledger — `ex-bidual-map-...`
  declares AC+DC and proves its dual classifications internally;
  `ex-annihilator-...` is a choice-free computation with the AC rows
  context-only.
- **F3 (preserved):** the duplicated published interface
  (`thm-dual-of-an-lca-group-is-locally-compact-abelian` vs the scaffold's
  local rows) is kept as designed; no merge was performed.
- **F4 (authored):** the previously unused totally-disconnected support lemma
  is fully authored and its missing compact-open-basis argument supplied from
  published topology.
- **Clause repair:** `cor-fourier-series-...` clause (2) now requires $m_G$ to
  be the counting measure, recording the reciprocal dual scale.
- **Plan mismatch:** none for this pair; `validate-plan` is clean and no
  pre-splice plan amendment is needed for batch 27.

## Open obligations at handoff (unfinished batch-26 suppliers)

All consumers are authored and locally checked; each decision is `escalate`
until the named supplier lands and the listed use is reconciled. Suppliers
already on disk were reconciled at statement level and their ledger rows are
`verified`; the rows below are the still-absent ones.

| Supplier (batch 26) | Consumer (batch 27) | Consuming step |
| --- | --- | --- |
| `thm-bochner-theorem-for-lca-groups` | `lem-continuous-characters-separate-points-of-an-lca-group` | 5.1 |
| `lem-lca-parseval-pairing-on-the-integrable-core` | `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` | 1.2, 2.1 |
| `thm-lca-fourier-inversion-for-integrable-transform` | `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` | 1.2, 2.1 |
| `thm-compatible-dual-haar-normalisation` | `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` | 1.2, 2.1 |
| `thm-lca-plancherel-isometric-extension` | `thm-plancherel-theorem-for-lca-groups` | 1.1 |
| `thm-lca-plancherel-isometric-extension` | `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` | 5.1 |
| `lem-fourier-stieltjes-transforms-determine-finite-radon-measures` | `thm-pontryagin-biduality` | 5.1 |
| `lem-fourier-stieltjes-transforms-determine-finite-radon-measures` | `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` | 2.1 |
| `thm-riemann-lebesgue-lemma-on-lca-groups` | `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` | 3.1 |
| `bochner-inversion-and-plancherel-on-lca-groups` (page) | `pontryagin-duality-for-locally-compact-abelian-groups` (page `requires`) | FR-17 row set |
| `thm-bochner-theorem-for-lca-groups`, `lem-fourier-stieltjes-transforms-determine-finite-radon-measures`, `thm-lca-plancherel-isometric-extension`, `thm-riemann-lebesgue-lemma-on-lca-groups` | `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group` (four declaration-only edges) | declared in deps; no body use |
| `thm-riemann-lebesgue-lemma-on-lca-groups` | `lem-positive-compactly-supported-transform-bump-on-the-dual` | declared in deps; no body use |

Transitive escalations: the items whose proofs consume
`thm-pontryagin-biduality` (directly or through the annihilator/extension
chain) remain escalated until the supplier rows above clear. These are
`lem-annihilator-reverses-inclusion-and-double-annihilator-closes`,
`thm-compact-discrete-duality-for-lca-groups`,
`cex-the-algebraic-character-group-without-compact-open-topology-is-not-pontryagin-duality`,
`ex-bidual-map-on-the-circle-and-the-integers`,
`lem-character-extension-from-a-closed-subgroup-of-an-lca-group`,
`thm-dual-of-a-closed-subgroup-is-the-dual-quotient`,
`lem-biduality-is-stable-under-products-closed-subgroups-and-quotients`,
`ex-annihilator-of-a-closed-subgroup-of-euclidean-space`,
`cor-pontryagin-duality-is-a-contravariant-involution`,
`cor-fourier-series-and-discrete-transforms-are-lca-plancherel-special-cases`
and `lem-positive-compactly-supported-transform-bump-on-the-dual`. Only the
owner resolves escalations; no escalation was marked complete.

## Handoff

- Completed IDs: all 24 (23 scaffold items + the added prerequisite), both
  pages, manifest, coverage, proof contracts and cross-batch input.
- Checks run: the list in "Checks actually run" above, including the single
  batched `proof-layout` run after the final edits.
- Added suppliers: `lem-quotient-of-an-lca-group-by-a-closed-subgroup-is-lca`.
- Published concerns: F1 repaired; F2 resolved; F3 preserved; F4 authored;
  Plancherel-special-case clause (2) normalisation repaired.
- Open obligations: the supplier/consumer/step table above; all affected
  decisions are `escalate` and no supplier was marked complete.

## Post-handoff owner reconciliation — Riemann–Lebesgue dependencies (2026-10-05)

This audit supersedes the Riemann–Lebesgue entries in the historical handoff
table above. The current supplier item assumes AC+DC, matching these consumers.

- `lem-lca-transform-range-is-dense-in-ltwo-of-the-dual` retains the direct
  dependency. Its fact F6 cites the supplier, and proof step 3.1 uses
  continuity of the Fourier transform to make its nonvanishing set open. The
  batch-27 cross-batch review is `verified` for that exact use.
- `lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group`
  no longer declares the supplier in its manifest or item frontmatter. Its
  proof obtains integrability from Plancherel/Parseval, uses Fourier inversion
  and continuity of the compactly supported transform, then applies Haar outer
  regularity. It does not use the Riemann–Lebesgue conclusion. Its review is
  `removed` as a surplus declaration.
- `lem-positive-compactly-supported-transform-bump-on-the-dual` no longer
  declares the supplier in its manifest or item frontmatter. Its proof obtains
  the transform formula directly from the Plancherel unitary and modulation;
  positivity and support follow from the overlap formula. Its review is
  `removed` as a surplus declaration.

Neither removed consumer's proof contract had a Riemann–Lebesgue citation or
step derivation, so the batch-27 proof-contract file needed no change. This
reconciliation did not alter owner receipts or run any gates.

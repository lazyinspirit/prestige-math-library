# Step 3a scope review — Arakawa–Suzuki functors and higher-level Schur–Weyl duality

- Run: `frontier-44-special-representation-examples-28`, role `alpha`, label
  `step3a-pair-arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-e0f76e464c9a5964`, batch 17.
- Pair: A `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality` (order 1790, 26 items) /
  B `arakawa-suzuki-functors-and-higher-level-schur-weyl-duality-examples` (order 1791, 5 items).
- Review type: scope only; no proof approval, no scaffold edit, no owner record.
- **Decision: `sufficient`**, recorded with `tools/step3-decisions.mjs record-scope` (non-owner
  review) at the current pair scope hash. Receipt:
  `research/frontier-44-special-representation-examples-28-step3a-review-arakawa-suzuki-functors-and-higher-level-schur-weyl-duality.json`.
  One non-blocking judge call is flagged in §3 and §7; it does not make the planned scope
  inadequate.

## 1. Inputs read

- Manifests/coverage: `research/frontier-44-special-representation-examples-28-batch-17.pages.json`
  (both pages, all 31 items: ids, kinds, titles, statements, strategies, `deps`, provenance,
  per-item source locators), `…-batch-17.coverage.json`, `…-batch-17.cross-batch-dependencies.json`,
  `…-batch-17.notes.md` (current ROUND2 directions + preserved native history).
- Plan/design/owner: `research/plan-spec.json` rows 1790/1791 (page identity fields match the
  manifest; both `items` arrays empty, so the design document governs item scope);
  `research/plan-kazhdan-lusztig-track.md` KL-7 (lines 254–311, 26-row A table + B instruction,
  lines 386–392 B inventory, lines 430–511 source/consumer and hard-gate sections);
  `research/kazhdan-lusztig-planning/pages.json` + `proposed-items.json` (20 native A + 5 native B
  rows for KL-7); `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
  (exact scope / completion / Category-O order decisions); owner batch-17 records
  (`…-owner-category-o-batch17-root-final-approval.json`, `…-review.json`, `…-registrar-pass.json`,
  the eight local proof notes).
- Readiness/consumers: the 31 Step-1 records under `…-step1-*.json` (all `ready`; readiness is not
  scope approval); `…-batch-18.pages.json` (KL-8 consumer pair); the `…-alpha-step1-drift.md` row
  for this page (verdict `drift-reordered`, owner-attributed, 1552/1553 → 1790/1791);
  published pages `library/abstract-algebra/tensor-products-of-modules.md` and
  `library/homological-algebra/graded-bimodules-and-tensor-functors.md`.
- Independent source re-verification: re-downloaded `https://arxiv.org/pdf/q-alg/9710037`
  (`/tmp/as.pdf`, 208,387 B, sha256 `14dc1798dcaefab0…`) and `https://arxiv.org/pdf/math/0605217`
  (`/tmp/bkhl.pdf`, 651,568 B, sha256 `30c44793414f4b10…`) — both match the coverage fetch stamps
  byte-for-byte; read AS abstract/§1.2/§2.1–2.2 (Prop. 2.1.1, Lemma 2.2.1, Thm. 2.2.2) and BKHL
  Introduction (Theorems A and B, the Whittaker/Morita/Kazhdan–Lusztig-consequence paragraph).

## 2. Design ∶ scaffold mapping (scope only)

**A page — complete.** All 26 rows of the current KL-7 design table are scaffolded with **exact
matching ids and kinds** (11 definitions, 4 lemmas, 11 theorems), in design order; no design row
was dropped, renamed or re-kinded, and no extra claim was added. The 26 rows are 24 native ids
(the 20-row frozen planning inventory plus the four scaffold-time local suppliers
`def-shifted-yangian-…`, `thm-ordered-monomial-pbw-basis-…`, `thm-vust-double-centralizer-…`,
`def-hecke-induction-and-restriction-functors-…`) and exactly two owner-authorized ROUND2
additions marked `native:false` in the root approval
(`lem-type-a-nilpotent-orbit-closures-…`, `lem-nilpotent-orbit-equivariant-tensor-covariants-…`).
Design boundary clauses survive in the statements: raw tensor centralizers for every
complex origin vs. Morita/central-corner only for admissible origins (`c_i−c_j∈Z ⇒ c_i=c_j`);
stable range `q_l≥d` vs. the genuine central-block corner outside it; `T` as a prinjective
detector, not a full O generator; the Schur left adjoint right-exact and recovering `add(T)` only;
loop filtration with `gr W(λ)=U(g^e)` kept distinct from the Kazhdan filtration; AS
`y_j=x_j−z_M/N+(N−1)/2` and the BKHL `H_d` presentation both recorded; the shifted `T=FDE` series
kept to its actual coefficient indices with the source's mirrored E/F erratum noted; all
Grothendieck claims ungraded at parameter one. The pair consumes only the classical `q=1`
structures; the KLR/quantum interfaces of the owner direction are not imported (batch notes).

**B page — complete.** All 5 design rows are present with matching ids and kinds (4 examples +
1 counterexample) and realize the design's B instruction ("universal two-factor relation check,
correctly numbered level-two polynomial, failure of arbitrary tensor double centralizer, one-column
`e=0` Vust dimensions, genuine level-one central corner outside stable range"). B is a dependency
leaf: its items depend only on this A page and published items.

Plan rows 1790/1791 agree with the manifest on id, title, order, kind, category, companion and all
three `requires`; the drift verdict for this page is an attributed owner reorder, not a content
change.

## 3. Source coverage assessment

- **A page**: 12 sources — BKHL arXiv:math/0605217 (50 pp.), BKAR arXiv:0901.0057 (44 pp.),
  BK3 arXiv:math/0508003 (109 pp.), AS arXiv:q-alg/9710037 (16 pp.), CR arXiv:math/0407205 (45 pp.),
  GG arXiv:math/0105225 (10 pp.), BGK arXiv:0801.1337 (38 pp.), Moreau notes (42 pp.),
  Kraft–Procesi GDZ scan (23 pp.), BK arXiv:math/0407012 (49 pp.), BK arXiv:math/0407011 (28 pp.),
  Bernstein–Gelfand numdam (42 pp.) — 40 harvested rows: 39 `included`, 1 `out-of-scope`
  (Moreau Parts 1–3, with a written reason); 21 distinct A items are targets of coverage rows, and
  the remaining 5 (`def-a-type-a-nilpotent-pyramid-…`, `def-the-type-a-finite-w-algebra-…`,
  `thm-the-whittaker-functor-is-exact-…`, `def-the-higher-level-schur-weyl-…`,
  `thm-higher-level-schur-weyl-double-centralizer`) each carry their own item-level source
  references with locators (BKHL/BK3/BGK/CR/AS), so no item is unreferenced.
- **B page**: 5 source entries (4 unique URLs), 8 rows, all `included`, all 5 B items targeted.
- **Fetch verification**: `source-fetch-check` re-run resolves 17/17 with 0 documented drops; the
  AS and BKHL bodies I re-downloaded hash-match the stamped bytes, and the load-bearing statements
  (AS Prop. 2.1.1/Thm. 2.2.2/Lemma 2.2.1; BKHL Theorems A/B and the `Hom_g(P⊗V^{⊗d},−) ≅
  Hom_{W_d}(V^{⊗d},−)∘V` link) are the results the scaffold's items state. I did not independently
  re-read the German Kraft–Procesi scan; the owner's recovered-OCR reading and the two local
  normality/covariant suppliers are recorded in the run's owner evidence and are relied on here as
  recorded (see §5).
- **Judge call (non-blocking).** The AS coverage row "Introduction, Sections 2.1–2.2 and 3.1–3.2:
  exact functors `F_λ`, transformation of Verma modules to standard modules and the classical
  duality at `λ=0`" is mapped as `included` to `def-arakawa-suzuki-casimir-operators-on-tensor-functors`;
  that item states the tensor-space Casimir action `x_j`,`y_j` and place permutations (the §2.2
  input AS Theorem 2.2.2 needs), not the functor `F_λ(X)=H⁰(n⁻,X⊗V_n^{⊗ℓ})_λ`, its exactness
  (AS Prop. 2.1.1) or the simple-image theorem (AS §3). The design table, the hard-gate checklist
  and the frozen planning inventory never planned an `F_λ`-theorem item, and no consumer requires
  one (BKHL uses only [AS, §2.2]); the page role is "degenerate affine Hecke action and double
  centralizer" (plan line 36). I therefore do **not** record an omission, but flag that the row's
  wording is broader than the planned statements: the owner may narrow it during Step 4 or, if the
  title's "functors" is meant literally, authorize one enrichment item (AS Prop. 2.1.1 +
  Thm. 2.2.2(ii) + §3.3 nonvanishing).

## 4. Role in the library and consumers

- **Prerequisites.** `requires` = KL-6 `parabolic-category-o-and-fock-space-bases` (batch 16,
  order 1788, 22 items; in the current scaffold, ordered before 1790, its consumed supplier items
  all present), plus published pages `tensor-products-of-modules` (`abstract-algebra`) and
  `graded-bimodules-and-tensor-functors` (`homological-algebra`; `status: published`, nonempty
  inventories).
- **Cross-batch edges.** The batch-17 cross-batch file carries 24 item + 1 page rows, which match
  the manifest's in-run dependency edges **exactly** (no undeclared and no missing edge), all
  `open` for ordinary supplier-before-consumer authoring: 16 distinct in-run supplier items across
  batches 13 (3), 15 (3), 16 (10).
- **Consumers (batch 18, KL-8).** Only the `the-degenerate-ariki-categorification-theorem` pair
  consumes this pair: the page edge plus 10 distinct items of this pair in 31 consumer edges
  (24 on the KL-8 A page and 7 on its B examples page). I checked each consumer clause (full
  cyclotomic tower with arbitrary-dimensional spectral projectors and the
  proper central cut; exact biadjoint residue functors with duality and level-zero convention;
  endomorphism isomorphism; SW double centralizer/Morita; Schur images with `Std` simple labels;
  translation intertwining; finite-W and cyclotomic double centralizers; Whittaker exactness on the
  required projectives) — every interface is supplied by a scaffolded item of this pair. Nothing
  published depends on the pair, no other run's scaffold references its ids, and no item anywhere
  in the run depends on any B-page item (0 findings).

## 5. Unmet prerequisites

- **Confirmed gaps: none.** All 31 items' declared dependencies resolve: 71 distinct external ids
  = 55 published on-disk items + 16 current-run scaffold items (batches 13/15/16), 0 missing, 0
  pointing at a B-page item or an out-of-order id (`validate-plan` OK). An initial sweep flagged
  five ids (`thm-category-o-has-enough-projectives`, `def-grothendieck-group-and-character-of-category-o`,
  `thm-serre-normality-criterion`, `lem-serre-r-zero-s-one-characterises-reducedness`,
  `lem-normal-domain-implies-s-two`); every one is a published `items/*.md` file whose frontmatter
  quotes the id, so the flag was a scan artifact, now resolved. This distinction is recorded so the
  five are not misread as gaps.
- **Non-blocking advisories** (already recorded in the notes for the Step-4 reconciler): the A page
  requires `graded-bimodules-and-tensor-functors` directly although KL-6 already reaches it, and
  KL-8 reaches `grothendieck-groups-and-graded-cartan-pairings` through this A page. Both are
  plan/design-declared `requires` sets and were deliberately preserved; they are not scope defects.
- **Historical uncertainty (proof-level, not scope-level).** The original Vust source-reading
  escalation ([KP, §6] image-only scan) was retired after the recovered OCR reading and the two
  non-native local supplier items (normality, covariant extension/polarization) were added and
  owner-reviewed; the local reconstruction is scaffold-strategy evidence, not an independent
  authored-item audit. If that strategy fails in Step 3b/Step 5, a within-pair supplier would be
  required — recorded as residual uncertainty, not a present omission.

## 6. Checks run (actual results)

| Check | Result |
|---|---|
| `node tools/coverage-checklist.mjs …-batch-17.coverage.json --require-destination` | 2 pages, 48 harvested rows, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage …-batch-17.coverage.json` | 17/17 fetch-verified, 17/17 resolved, 0 documented drops |
| `node tools/frontier-item-gate.mjs --run … --tool validate-plan` | OK — acyclic declared order; no item cycles, forward references, B-page dependencies or unresolved ids among the 100 pages with item lists (only unrelated `redundant-prereq` advisories) |
| `node tools/step1-decisions.mjs check --run …` | 858 items, 858 ready, closed, 0 open rows (the former Vust escalation is resolved) |
| `node tools/item-dependency-levels.mjs check --run …` | 858 items checked, 0 errors, maximum level 47 |
| Independent Python resolution sweep (this review) | 31 pair items; 71 external deps = 55 published + 16 in-run + 0 missing; 24 item + 1 page cross-batch rows match the manifest exactly; reverse consumers only batch 18; 0 run-wide deps on B-page items |
| AS/BKHL PDF re-download | bytes and sha256 digests match the coverage stamps (`14dc1798dcaefab0…`, `30c44793414f4b10…`) |

## 7. Boundaries and uncertainty

- Scope review only: I did not verify proof correctness, the local proof notes' mathematics, or
  item readiness registrations; Step 3b/5 own those. The eight local proof notes and the ROUND2
  owner review are relied on as recorded evidence, not as independent audits.
- The AS `F_λ` judge call (§3) is the only place where the coverage record is broader than the
  planned statements; it is flagged for the owner, not decided by this review.
- If the owner acts on the open KL-3 `insufficient` decision in a way that edits the three batch-13
  items this pair consumes (`prop-base-change-freeness-…`, `thm-duflo-joseph-…`,
  `def-projective-functors-on-a-regular-integral-category-o-block`), Step 3b should re-check those
  interfaces; this pair's own scope hash is unaffected by supplier-page edits.
- Recording this `sufficient` receipt closes the pair's scope review only while the pair scope hash
  stays current; if the owner applies an amendment (merge or enrichment) the review must be
  re-recorded against the resulting scope, and only the owner decides to proceed, merge or enrich.

Verdict: the planned definitions, results and examples cover the intended subject of KL-7
adequately; decision `sufficient`.

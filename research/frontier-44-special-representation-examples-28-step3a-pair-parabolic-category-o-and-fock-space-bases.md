# Step 3a scope dispatch report — `parabolic-category-o-and-fock-space-bases`

- Run: `frontier-44-special-representation-examples-28` (stage 3a-scope, paused)
- Pair: A `parabolic-category-o-and-fock-space-bases` (order 1788) / B `parabolic-category-o-and-fock-space-bases-examples` (order 1789), batch 16
- Role: alpha scope review (review-only; no scaffold, item, library or owner record edited)
- Decision recorded: **sufficient**
- Scope fingerprint: `scopeHash = 0195297eb48df28724e7b9516e046f84a70462fb34902464a0cec321a4ca2aa5` over `research/frontier-44-special-representation-examples-28-batch-16.pages.json` (sha256_16 `d5e0642c2c5707db`; coverage sha256_16 `1ee6f415bbd9f2b4`)

## Inputs read

- Manifests/scaffold: `research/frontier-44-special-representation-examples-28-batch-16.pages.json` (26 items: 22 A + 4 B), `.pages.json` for batches 5–8, 13, 15, 17, 18 (direct suppliers/consumers), `research/plan-spec.json` (pages 1788/1789: orders, requires and `kind` match the batch manifests; both plan item arrays empty).
- Prose design: `research/plan-kazhdan-lusztig-track.md` KL-6 section (L195–233); `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md` §“Final parabolic Category O and higher-level Fock direction” (2026-10-08); `…-owner-category-o-batch16-KL6-replacement.md`.
- Coverage: `…-batch-16.coverage.json`; source verification stamps therein (14/14 entries verified, resolved; 5 new stamps); batch notes `…-batch-16.notes.md`; cross-batch ledger `…-batch-16.cross-batch-dependencies.json` (75 rows, 73 for this pair, all `open` pre-authoring).
- Owner decisions: `…-owner-category-o-batch16-initial-findings.json`, `…-review.json`, `…-readiness-pass.json`, `…-root-post-pass-semantic.json`, `…-rule22-impact.md`, `research/frontier-44-special-representation-examples-28-scope-ledger.json`.
- Source spot-check: cached complete text `/tmp/bk0901.txt` / `/tmp/bk0901.pdf` (sha256_16 `31f6e1bc33cd9d42`, identical to the coverage fetch stamp), read at the introduction summary, §2.6 and Theorem 3.1 with Lemmas 3.2–3.3.

## Scope vs prose design (KL-6)

The KL-6 design calls for the type-A parabolic category-O / higher-level Fock-space dictionary: Fock module + monomial, dual-canonical (L), canonical (T) and quasi-canonical (P) bases; parabolic category-O blocks with generalized standards, simples, projectives, costandards, tiltings; parabolic Kazhdan–Lusztig transition matrix; residue translation functors with crystal/head-socle action; K0 ≅ integral Fock module; QG global-basis comparison; Ringel duality via the opposite parabolic; the three-basis theorem; and the pairing lemma, plus a four-item B companion.

Verified item-by-item against the design’s 22 proposed A entries: all 22 native IDs are retained, in dependency order, and each statement matches its design row’s exact content (conventions source `s` vs library `t=s^{-1}`, full coordinate torus, semi-infinite ground tails, ordinary vs form-adjoint bars, half-sum ρ convention, shortest-RIGHT entry stabilizer K vs column Levi J, opposite/reverse-column tilting coefficients, Serre-quotient finite-ideal Ringel transport). The four design-mandated local suppliers are present: `lem-the-parabolic-semi-regular-duality-and-reverse-column-label-map`, `lem-residue-casimir-operators-give-local-affine-hecke-actions`, `lem-the-local-affine-hecke-socle-argument-for-residue-translations`, `lem-type-a-tableau-central-summands-are-single-linkage-blocks`. The B companion retains exactly the four native IDs and matches the design’s role list (full four-basis computation at `I={0}`; residue flag operators and heads/socles; genuine two-label lower-ideal/opposite-Serre-quotient Ringel dictionary; canonical ≠ quasi-canonical counterexample). Orders, category, companions and the four `requires` are unchanged from the plan (owner review `scope.metadata_native_bytewise_semantics_unchanged: true`, `future17_18_edges: false`); native 22 decisions (19 ready / 3 escalated) remain historical and were not relied on.

## Source coverage

- A page: 11 sources, 67 content entries — 52 included, 4 inline, 11 out-of-scope, each with a stated reason. Out-of-scope items are exactly the material the design assigns elsewhere: degenerate cyclotomic Hecke / level-𝑙 Schur–Weyl duality and Schur functors/Young modules (KL-7), multipartition dictionary (§2.7, not used), quantized coordinate algebra (§6), large Example 28, Mazorchuk categorification/Koszul chapters, Lie-superalgebra examples (super duality not imported), Andersen–Stroppel full-longest twisting (§§1–2, 5–7; replaced by the outside-nilradical parabolic semiregular transport).
- B page: 3 sources, 10 entries — 9 included, 1 out-of-scope (Brundan Example 28, with reason). All 14 fetch-verified stamps present.
- Independent spot-check: BK 0901.0057 Theorem 3.1 reads `[L(A)]=L_A`, `[P(A)]=P_A`, `[T(A)]=T_A` with quasi-canonical ↔ indecomposable projectives and canonical ↔ tilting modules, plus Lemmas 3.2–3.3 (`P(A)` prinjective iff A ∈ Std; `P(A) ≅ T(A^↑)`). This confirms the page’s central scope (items 15/17/20 and B item 2) matches the literature model act.
- No source or topic needed by the planned items was found out-of-scope without a matching design disposition.

## Dependency resolution and unmet prerequisites

All 26 subjects’ declared deps were classified (no truncated search used as absence evidence):

- 20 unique deps are inside the pair; 54 unique deps resolve to published `items/*.md` (all re-checked `status: published`), e.g. `thm-weyl-character-formula`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-bgg-reciprocity`, `prop-restricted-duality-is-an-exact-involution-on-category-o`, Grothendieck-group pairing items, CM/Koszul commutative-algebra suppliers; the remaining deps resolve into the current run scaffold.
- Scaffold suppliers: batch 15 KL-5 (`def-standard-parabolic-and-levi-subalgebras-from-simple-roots`, `def-parabolic-category-o-for-a-standard-parabolic`, `thm-parabolic-category-o-is-a-highest-weight-category` with BGG reciprocity/restricted duality/Ext¹, `thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials` spherical formula, `thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials` antispherical formula, parabolic KL basis items); batch 13 KL-3 (coinvariant Gorenstein/regular representation); batches 5–8 QG (`thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules` restricted to the admissible finite-product cases used, lower/upper global bases, duality/crystal compatibility, Kashiwara lattices/operators, tensor-crystal rule). Batch 8 requires batches 5–7, so the page-level `balanced-triples-and-global-crystal-bases` requirement has a closed scaffold chain.
- Page-level requires: KL-5 (batch 15 scaffold), balanced-triples (batch 8 scaffold), `grothendieck-groups-and-graded-cartan-pairings` (published), `young-diagrams-tableaux-and-permutation-modules` (published).
- Consumers: batch 17 (KL-7, requires this A page) and batch 18 (KL-8) consume exactly KL-6 IDs; every consumed ID is present in the current scaffold (e.g. KL-7 uses `def-integral-parabolic-category-o-block…`, `thm-standard-tableau-monomials…`, `thm-the-parabolic-o-grothendieck-group…`, `thm-simples-projectives-and-tiltings-map…`, `thm-indecomposable-tiltings…`; KL-8 additionally uses `lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings`, Ringel items and `lem-the-parabolic-semi-regular-duality…`).

**Confirmed unmet prerequisites: none.** Every declared dependency resolves to the pair, another current-run scaffold page, or a published library item; the owner review records `missing_results: []` and 0-error checks (manifest-deps 26/26; supplier-closure 342/0/0; coverage 2 pages/77 headings/0 errors; source-fetch 14/14; dependency levels max 30, no cycles). **Uncertainty (not a gap):** the strongest structural suppliers (KL-5 batch 15, KL-3 batch 13, QG batches 5–8) are scaffold-only and not yet authored; I verified their current statements match the consuming hypotheses at interface level (e.g. KL-5’s BGG/duality clause, and the quasi-R supplier’s explicit finite-product admissible cases), but authored-item review of those suppliers remains downstream. No recommendation to add scaffold items, merge pages, or enrich arises from this review.

## Owner decisions

Owner repair history is current and applies to exactly this 26-subject inventory: the batch-16 notes, local proof record (§§1–10), owner review, guarded readiness pass (26/26 registered after the pass) and root post-pass checks all bind this pair; the scope ledger lists both pages (batch 16) and no prior scope receipt for this A page exists. Owner authority over proceed/merge/enrich is untouched, and this report makes no readiness or item-level decision.

## Decision and reason

- A page `parabolic-category-o-and-fock-space-bases`: **sufficient** — planned definitions, results and examples cover the intended subject (all 22 KL-6 design entries plus the four native B examples at 1788/1789, requires unchanged), source coverage is complete and fetch-verified with design-aligned dispositions, and no prerequisite is absent from the published library plus current scaffold.
- Next action: proceed with Step 3b authoring for this pair under the recorded owner direction; no merge or enrichment is requested. If the pair’s statements/inventory later change, the scope receipt must be re-earned (`scopeHash` changes).

Report path: `research/frontier-44-special-representation-examples-28-step3a-pair-parabolic-category-o-and-fock-space-bases.md`.

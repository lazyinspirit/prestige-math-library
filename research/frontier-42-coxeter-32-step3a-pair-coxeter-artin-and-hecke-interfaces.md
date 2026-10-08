# Step 3a scope review — pair `coxeter-artin-and-hecke-interfaces`

Run `frontier-42-coxeter-32` · role alpha · pair label
`step3a-pair-coxeter-artin-and-hecke-interfaces-8d9d294283f7a0e5` · design label CG-11.

- A page: `coxeter-artin-and-hecke-interfaces` (order 1744, batch 14, kind A).
- B page: `coxeter-artin-and-hecke-interfaces-examples` (order 1745, batch 14, kind B).
- Decision: **insufficient** (scope only). The pair is adequate in every respect
  checked except one confirmed omitted planned result: the CG-11 A2 contract's
  type-A identification of the constructed Artin group with the already published
  braid category, whose enabling topological presentation theorem is already
  published. Exact omission, evidence and proposed owner action: §5. Everything
  else passes: §§1–4. Receipt:
  `research/frontier-42-coxeter-32-step3a-review-coxeter-artin-and-hecke-interfaces.json`.
- This review decides scope only; it is not an item approval, proof review or
  owner record, and no scaffold, manifest, coverage, batch or owner file was edited.

## Inputs read (exact paths)

- Manifest and batch inputs: `research/frontier-42-coxeter-32-batch-14.pages.json`,
  `.coverage.json`, `.notes.md`, `.cross-batch-dependencies.json`.
- Prose design: `library/coxeter-groups/coxeter-artin-and-hecke-interfaces.md`
  and `...-examples.md` (both `status: draft`); `research/plan-coxeter-groups-track.md`
  §CG-11 at L292–305 (Requires L294, header prose L296, contracts L300–303,
  B companion L305); `research/plan-spec.json` orders 1744/1745; `research/coxeter-scaffold/inventory.json`
  CG-11 (`research/coxeter-scaffold/algebraic-source-report.md` § "Artin and Hecke/KL interface",
  printed lines 62–66, and the classical/combinatorial/geometric reports as cited per item);
  `research/coxeter-scaffold/independent-audit.md` (zero remaining design objections) and `.json`.
- Run authority and records: `research/frontier-42-coxeter-32-owner-scope.json`,
  `research/frontier-42-coxeter-32-owner-authoring-direction.md`,
  `research/frontier-42-coxeter-32-scope-ledger.json` (both pages present, batch 14/27/21 rows),
  `research/frontier-42-coxeter-32-run-record.md` (CG-05/CG-08 page-prerequisite question
  `owner-held` at L93/L105/L150; Step 1/2/3a transitions), drift review
  `research/frontier-42-coxeter-32-alpha-step1-drift.md` §`coxeter-artin-and-hecke-interfaces`
  (VERDICT no-drift), the eight `research/frontier-42-coxeter-32-step1-<item>.json` records,
  and `node tools/step1-decisions.mjs check` (302/302 `ready`, closed).
- Supplier statements read in the current manifests: batch 2 (`def-hh-coxeter-matrix-word-group-and-length`,
  `thm-hh-matsumoto-reduced-word-theorem` (1), `thm-hh-parabolic-minimal-representatives-and-length-additivity` (4));
  batch 3 (`def-hh-universal-coxeter-hecke-parameters-and-presentation`,
  `lem-hh-reduced-word-independence-and-length-multiplication`,
  `thm-hh-generic-coxeter-hecke-standard-basis` (2)(4),
  `lem-hh-hecke-anti-involution-bar-and-normalization` (4));
  batch 4 (`def-cg-real-coxeter-form-and-reflection`, `lem-cg-reflection-form-invariance-and-rank-two-orders`,
  `def-cg-canonical-reflection-homomorphism`, `lem-cg-reflection-representation-descends-and-root-norms`);
  batch 7 (`thm-cg-root-length-criterion-and-faithfulness` (3)); plus the sibling scope receipts for the
  two in-run supplier pairs HH-11 and HH-12 (both `sufficient`).
- Published cross-home items checked for the type-A clause: `library/braid-groups/`
  (`def-braid-group-by-the-artin-presentation`, `def-positive-braid-monoid`,
  `thm-the-artin-presentation-is-complete-for-geometric-braids`,
  `cor-all-four-classical-braid-models-realize-the-artin-presentation`,
  `braids-as-fundamental-groups-of-configuration-spaces`,
  `artin-presentation-completeness-and-braid-combing`, all `status: published`).
- Sources re-fetched today (2026-10-07, `/tmp/b14check/`) and inspected directly:
  Davis (note 11.6, printed pp. 228–229 / PDF pp. 244–245), Lusztig, McCammond,
  Elias–Williamson (Soergel calculus and Hodge theory), Boyd.

## 1. Prose design versus delivered scaffold (A page)

The four design contracts are present id-for-id, in order, with the plan's
kinds and levels 1/2/5/10. Three are complete; A2 is complete except for one
clause (finding §5).

| Design contract (plan L300–303; inventory CG-11) | Delivered item | Coverage |
|---|---|---|
| `def-cg-artin-monoid-and-group-presentations` — words modulo the braid congruence with descending multiplication; group by free-group relator quotient without s²=1; monoid-to-group map by the universal property; no injectivity/Ore/K(π,1) | same id, definition | complete: (1) words, (2) braid pairs, (3) smallest-congruence quotient A⁺, (4) A=F(S)/N, (5) γ:A⁺→A, (6) conventions (m=∞ contributes nothing; explicit abstentions incl. no topology) |
| `lem-cg-artin-presentation-universal-properties-and-coxeter-surjection` — both quotient universal properties; surjectivity A→W by s↦s; quotienting by squares recovers W; **for type A identify the already published braid category as an application only after its independent topological presentation theorem is available** | same id, lemma | universal properties/surjection/square-quotient complete: (1) monoid UP, (2) group UP + presented-group identity, (3) π surjective with π∘γ=π⁺, (4) D=normal closure of the squares, A/D≅W, ker π=D, (5) scope. **The type-A identification clause is omitted**: (5) states "The type-A comparison with the braid groups is likewise not part of this lemma"; see §5 |
| `thm-cg-reduced-positive-section-and-length-additive-products` — Matsumoto independence of b_w; b_w↦w; injective set-section; b_ub_v=b_uv iff ℓ additive; failure as a general group homomorphism; no monoid embedding needed | same id, theorem | complete: (1) independence + b_1 + π⁺(b_w)=w, (2) b is an injective set-section, (3) L:A⁺→(ℕ,+,0) and deg:A→ℤ, (4) iff-criterion, (5) rank-one failure and non-homomorphy of γ∘b, (6) scope |
| `lem-cg-hecke-and-lie-seam-contract-compatibility` — exact interface: HH-11 exchange/Matsumoto + HH-12 coefficient-compatible basis; finite roots/coroots adapt to published Lie root suppliers; KL bar construction needs the actual basis/involution/normalization conversion; distinguish faithful canonical representation from any needed reflection-faithful realization (affine degeneracy); interface checks, not duplicated theorems | same id, lemma | complete at interface level: (1) Θ:A⁺→H, Θ(b_w)=T_w, basis and base-change compatibility, (2) four normalization conversions + recorded KL conversion (canonical basis not constructed), (3) conditional root-length matching dictionary for supplied data, (4) reflection-faithfulness boundary + rank-one degeneracy instance on B4, (5) no KL/Soergel constructions. The Lie adaptor itself is deferred to the run's CG-16 home — see §6.1 |

Nothing beyond local proof closure was added (4 A items against the design's 4).

## 2. B companion versus design

The companion prose (plan L305 and native prose) names four tasks; all four are
delivered, in order, and the page is a genuine leaf.

| Design B task | B item | Coverage |
|---|---|---|
| type-A Artin-to-Sₙ map and a reduced positive lift | `ex-cg-type-a-artin-projection-and-positive-lifts` | complete at presentation level (π_n:G_n→Sₙ by σ_i↦(i i+1); b_w well defined, injective, π⁺(b_w)=w; two reduced expressions of w₀ via the braid move); clause (4) explicitly abstains from any braid-development identification (the §5 omission) |
| concatenating reduced lifts need not be a homomorphism when length decreases | `cex-cg-artin-positive-lift-is-not-a-homomorphism` | complete (rank-one b_sb_s=[ss]≠[ε]=b_1, detected by L and deg; general S) |
| quadratic Hecke conventions S=qT, Q=q² | `ex-cg-quadratic-hecke-normalizations-s-equals-q-t` | complete (four normalizations, bases, rank-two check with single parameter, KL conversion recorded) |
| where degeneracy obstructs a claimed Soergel realization | `cex-cg-faithful-canonical-realization-need-not-be-reflection-faithful` | complete (rank-two m=∞: rad(B)=ℝ(e_s+e_t), all reflections share one fixed hyperplane, infinitely many reflections, no bijection) |

B-leaf verified: no item of any of the 32 run manifests depends on any B item and
no page's `requires` names the B page; the B page requires only the A page.

## 3. Source coverage

`batch-14.coverage.json` covers the A page with six independent fetch-verified
sources and 36 harvested rows: 17 `included`, 8 `inline`, 10 `out-of-scope`
(each with a reason) and 1 `deferred` to `affine-coxeter-diagrams-and-semidefinite-classification`
(batch 27, present in this run; its subject is exactly the deferred affine
Weyl-group identification, so the deferral is live). The B page has no coverage
entry; 22 of the 32 batch coverage files are A-page-only, the run's established
convention.

I re-fetched all six URLs today and every byte size and sha256-16 matches the
recorded stamp exactly: Davis 4,220,570 / `ccefbb950fdcfce9`; Lusztig 1,096,504 /
`6329366ceac9317c`; McCammond 2,921,046 / `ebeac9664085558a`; Soergel calculus
827,058 / `e610a4fa938a7cc9`; Hodge theory 440,331 / `01039f543cdd06f1`; Boyd
1,093,651 / `32d53ca3f9c0fc6a`.

Direct source check relevant to §5: Davis note 11.6 (printed pp. 228–229; PDF
pp. 244–245 of the fetched manuscript) defines A(W,S) by the alternating-word
relations, gives the epimorphism A(W,S)→W, and states verbatim "When W is the
symmetric group on n letters, A(W,S) is the braid group on n strands." The
coverage locator calls this "Section 11.6"; strictly the chapter's §11.6 is
"The Bestvina–Brady examples" and the Artin text is note 11.6 on printed
pp. 228–229 — content and pages right, label loose (§6.1).

## 4. Prerequisite availability (unmet-prerequisite check)

- Direct dependency audit over the 8 items: 97 edges (96 `deps` + 1 `justified_by`),
  **0 unresolved**, 0 edges to an id that is neither published nor scaffolded:
  **52** to published items (every one `status: published`) and **45** in-run edges
  (batch 2: 12, batch 3: 8, batch 4: 8, batch 7: 2, within batch 14: 15).
- Page-requires closure of the A page: 86 pages — **7** in-run scaffolds
  (`tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`,
  `generic-coxeter-hecke-algebras-and-the-standard-basis`, `real-forms-and-reflection-geometry`,
  `canonical-roots-signs-and-faithful-reflections`, `parabolic-subgroups-and-double-coset-geometry`,
  and the page itself) plus **79** published pages; a first pass flagged four
  foundations/real-analysis pages only because of a category-path guess, and all four are
  `status: published` at their real paths.
- The exact used clauses were read in the current supplier statements and are stated there:
  Coxeter presentation/universal property/length; Matsumoto braid connectivity; the type-A
  clause ℓ=inv in `thm-hh-parabolic-minimal-representatives-and-length-additivity` (4);
  Hecke presentation (Q)/(B), T_w, the standard
  basis and base change, and the multiplicative normalization (S_s−Q_s)(S_s+1)=0; the
  Coxeter form B(e_s,e_t)=−cos(π/m), the reflection formula and fixed hyperplane ker B(−,a),
  ρ and Φ, root unit norms, and the faithfulness clause (3).
- **Confirmed unmet prerequisites: none.** No required claim is absent from both the
  published library and the current scaffold. Residual uncertainty (honest limit): the
  suppliers are scaffolded, not proved — their proofs are Step-3b work; this check is at the
  current statement/manifest level. The two in-run supplier pairs
  (HH-11 `coxeter-presentations-exchange-and-reduced-word-theorems` and HH-12
  `generic-coxeter-hecke-algebras-and-the-standard-basis`) already hold `sufficient` scope receipts.

## 5. Confirmed omission (basis of the decision)

The CG-11 A2 contract (plan L301, repeated verbatim in the CG-11 inventory contract and in the
native prose paragraph for `lem-cg-artin-presentation-universal-properties-and-coxeter-surjection`)
requires: *"For type A identify the already published braid category as an application only after
its independent topological presentation theorem is available."* Evidence:

1. The delivered A2 excludes it: clause (5) states "The type-A comparison with the braid groups
   is likewise not part of this lemma" (no type-A content anywhere else in A2's statement or
   strategy). The delivered B1 excludes it too: clause (4) states "no identification with any
   other braid-group development is claimed here". No other item of the pair states it.
2. The design's enabling condition is satisfied: the topological presentation theorem is
   already published in its own home — `thm-the-artin-presentation-is-complete-for-geometric-braids`
   and `cor-all-four-classical-braid-models-realize-the-artin-presentation` (with
   `def-braid-group-by-the-artin-presentation`, `def-positive-braid-monoid`), all `status: published`.
3. The source harvest includes the identification: Davis note 11.6 states the type-A case
   verbatim (re-read today in the fetched PDF); the coverage rows "Section 11.6: the type-A case,
   where A(W,S) is the braid group on n strands" and Boyd's "Example 4.1.3: the braid monoid
   B⁺_n" are marked `included` under B1, but B1 does not state the identification, so the
   coverage disposition over-claims relative to the delivered text.
4. The batch itself records the deviation as an open owner question (`batch-14.notes.md`
   conflict 1): "Exact placement for an owner decision: add `garside-structure-normal-forms-and-the-center`
   (and, if the topological completeness theorem is wanted, `braids-as-fundamental-groups-of-configuration-spaces` /
   `artin-presentation-completeness-and-braid-combing`) to the A page's `requires`; then the A/B
   inventories … can cite them." No canonical file was changed and no owner decision exists.
5. No live home in this run performs the identification: no run page requires the A page except
   its own B companion, and the run contains no braid pair; the published braid items identify
   the braid group with *their* Artin presentation, not with this run's constructed A(S,m).
6. The drift review for this page (`no-drift`, "No prerequisite gap") does not address this
   clause; Step-1 readiness records are current but readiness is not a scope judgment.

This is an omitted planned result, not a missing prerequisite: the supplier is published and
available, while the design's condition on its use is met, so the omission turns on the page's
declared `requires` (an owner scope decision), not on absent mathematics.

**Proposed owner action.** Either

(a) **enrich**: add the braid home pages to the A page's `requires`
(`garside-structure-normal-forms-and-the-center`, and for the topological completeness theorem
`braids-as-fundamental-groups-of-configuration-spaces` + `artin-presentation-completeness-and-braid-combing`),
restore the type-A identification as an application clause (A2 and/or B1) citing
`thm-the-artin-presentation-is-complete-for-geometric-braids` /
`cor-all-four-classical-braid-models-realize-the-artin-presentation`, and correct the two
over-claiming coverage rows; then record `proceed` for the resulting scope (the scope hash
changes, so a re-review or the owner record must follow); **or**
(b) record `proceed` on the current scope explicitly accepting the documented abstention, and
correct the Davis/Boyd coverage rows from `included` to a recorded deferral naming this finding.

Per the dispatch, this review does not choose between (a) and (b).

## 6. Non-blocking notes

1. **Lie adaptor deferral is live and properly homed.** A4(3) proves the normalization dictionary
   only conditionally on supplied data, and the genuine crystallographic adaptor belongs to
   `crystallographic-root-lattices-and-weyl-group-interfaces` (batch 21), whose own plan contract
   (plan §CG-16) is exactly "reuse the published root-system/base and Weyl-group results only after
   checking finiteness, spanning, reducedness and integrality". The affine source row is deferred to
   a live destination (§3). Bookkeeping slip: conflict 2 of the batch notes says both deferral
   destinations are "recorded in the coverage file", but only the affine destination is; the
   crystallographic destination exists in the run and in the notes.
2. **KL conversion is quoted, not established here** (A4(2), B3), exactly as the design allows;
   the canonical basis and positivity remain in their designated homes. HH-12's scope review
   confirmed the coefficient-compatible basis/bar clauses CG-11 consumes are delivered by that pair.
3. **Locator label.** The Davis coverage locator says "Section 11.6"; the Artin-group content is
   note 11.6 on the stated printed pages (the chapter's §11.6 is the Bestvina–Brady section).
   Content, pages and item mapping are correct; the label is loose.
4. **No published defect found at scope level** in the published items this pair consumes
   (free-group/quotient vocabulary, symmetric-group and inversion items, bilinear-form and
   linear-map vocabulary, and the braid items inspected for §5); none was altered or repaired.
5. This review assessed scope only; proof correctness is out of role and not asserted.

## 7. Checks actually run

| Check | Command | Actual result |
|---|---|---|
| manifest deps (batch 14) | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-14.pages.json` | exit 0; 8 item(s), 0 normalized, 0 error(s) |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-14.coverage.json --require-destination` | exit 0; 1 page, 36 harvested result(s), 0 error(s), 0 warning(s) |
| fetch stamps (gate) | `node tools/source-fetch-check.mjs --coverage research/frontier-42-coxeter-32-batch-14.coverage.json` | exit 0; 6/6 fetch-verified; 6/6 resolved |
| source liveness/identity | `curl` of all 6 URLs into `/tmp/b14check/` + `sha256sum` | all 6 sizes and sha256-16 match the recorded stamps byte-for-byte |
| direct source read | PyMuPDF extraction, Davis PDF pp. 244–245 | note 11.6 contains the Artin presentation, the epimorphism and the type-A braid identification (quoted in §5) |
| dependency resolution | ad-hoc scan over all 32 `batch-*.pages.json` + `items/*.md` front matter | 97 edges; 52 published (all `status: published`), 45 in-run (b2 12, b3 8, b4 8, b7 2, b14 15); 0 unresolved |
| requires closure | ad-hoc scan of `plan-spec.json` | 86 pages: 7 in-run, 79 published, 0 missing |
| B-leaf | ad-hoc scan of all manifests + `plan-spec` requires | 0 consumers of the 4 B items; no page requires the B page |
| wikilinks vs deps | ad-hoc extraction of every `[[…]]` in the 8 statements/strategies | 0 unresolved, 0 links outside `deps`/`justified_by`/same-page ids |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 0; 302 item(s), 64 page(s), maximum level 31; no batch-14 line |
| Step-1 readiness | `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | 302/302 ready; closed; no work entry |
| Step-3a scope state | `node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope` | this pair listed "current scope review required" before this review |

## 8. Decision

**`coxeter-artin-and-hecke-interfaces`: insufficient.** Scope is otherwise adequate — all four
CG-11 A contracts and all four promised B tasks are scaffolded, the six sources are re-verified
live and byte-identical, all 97 dependency edges and the 86-page requires closure resolve into the
published library and the current scaffold, and no prerequisite is absent from both — but the
CG-11 A2 contract's type-A identification of the constructed Artin group with the already
published braid category, whose enabling topological presentation theorem is already published,
is omitted from the pair (A2(5) and B1(4) explicitly abstain) and two coverage rows claim it as
included. The owner must decide whether to enrich (add the braid pages to `requires` and restore
the identification; §5(a)) or to proceed on the current scope with the abstention explicitly
accepted and the coverage rows corrected (§5(b)). The remainder of the scope review found no
other omission, no merger ground and no unmet prerequisite.

## Recording

Decision `insufficient` recorded with
`node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32
--page coxeter-artin-and-hecke-interfaces --decision insufficient` at scope hash
`a02d9184861bfa3ad676f07570dcc6fed7f992dd54c79bcd3cf3f8aa5aa43419`
(2026-10-07T07:35:26Z); the reason names this report and the finding above. Receipt:
`research/frontier-42-coxeter-32-step3a-review-coxeter-artin-and-hecke-interfaces.json`.
`node tools/step3-decisions.mjs check --run frontier-42-coxeter-32 --phase scope` now reports the
pair as owner-held: "insufficient scope; owner must proceed, merge or enrich". No scaffold,
manifest, coverage, item, owner or other-pair artifact was edited; only this report and the
review receipt were written.

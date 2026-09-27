# Step 3b — pair `sheaf-cohomology-cech-cohomology-and-comparison`

Run `frontier-35-ten-categories`; role `alpha-high`; batch 7; label
`step3b-pair-sheaf-cohomology-cech-cohomology-and-comparison-1714058f8f4b00f7`.

- A page `sheaf-cohomology-cech-cohomology-and-comparison` (plan order 366.081, 67 items) —
  `library/scheme-theory/sheaf-cohomology-cech-cohomology-and-comparison.md`.
- B page `sheaf-cohomology-cech-cohomology-and-comparison-examples` (plan order 366.082, 11 items) —
  `library/scheme-theory/sheaf-cohomology-cech-cohomology-and-comparison-examples.md`.
- Output manifest `research/frontier-35-ten-categories-batch-7.pages.json` (this pair is the whole of batch 7).
- Scope receipt: `record-scope` decision `sufficient`, confidence 1, sha256 `05e7fcbce9ee956e9e7a0a0081d095d3aa8b941304608241f2f275f7a5936ac2`
  (refreshed after the owner's final manifest correction). Final phase: 0 of this pair's items in `step3-decisions check --phase final` work rows.
- File history: the superseded earlier attempt is
  `...-38a45c9ca9807615.md`; this file is the dispatch report, its attempt-level checkpoint is
  `...-1714058f8f4b00f7.md`.

## 1. Status

**78/78 items authored and fully written** (67 A + 11 B). The owner repair pass
refreshed the scope and every stale item decision after correcting the mathematical
claims listed in §9. Current item decisions are 78/78 closed and 0 stale; the 21
auditor-created A suppliers have current owner recertification rows and are all
bound in the Step-3 auditor-created V2 provenance certificate. The dispatch-time
decision counts and checks below are historical; §7 records the final owner pass.

The pair's deliverable is complete and internally closed: every promised result
of the scaffold is supplied, every consumer of a repaired supplier was re-pointed
and re-recorded, and all local additions are registered in the manifest, the
library page, the batch coverage file and the proof contracts.

## 2. Scaffold audit (what was read, what was found)

Read before authoring: `CLAUDE.md`, `SCHEMA.md`, the design sections for the
scheme-theory track (`research/plan-algebraic-geometry-track.md` AV-21 and its
correction), the batch-7 Step-1 notes, the Step-1 audit, the 3a scope review
`research/frontier-35-ten-categories-step3a-review-sheaf-cohomology-cech-cohomology-and-comparison.json`,
the Step-1 drift record, the sibling manifests/pages this pair depends on and
the published pages `presheaves-sheaves-stalks-and-sheafification`,
`sheaf-operations-exactness-ringed-spaces-and-module-pullback`,
`projective-and-injective-resolutions`, `derived-functors`, `derived-categories`,
`dimension-constructible-images-and-dimensions-of-fibres` and
`schemes-subschemes-and-morphisms-locally-of-finite-type`.
Sources were read in full (bounded chunks) from the fetched bodies cached in
`/tmp/frontier35-stacks-cohomology.txt` and `/tmp/frontier35-sheaves.txt`, plus the
per-item sources whose fetch stamps and section locators are recorded in
`research/frontier-35-ten-categories-batch-7.coverage.json` (§5 re-verifies them).

Findings and repairs (all recorded before the consuming items were accepted):

1. **Four `depcheck b-leaf-content` defects** — authored dependencies reaching
   items that live only on another pair's B/examples page. Repaired without
   consuming that content:
   - A38 `lem-subsheaf-generated-by-sections` was minted, and
     A40 `lem-finite-filtration-of-generated-subsheaves-of-the-constant-integer-sheaf`
     and A44 `lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions` had
     their dependency, their clause-1 wikilink and fact `[F2]` re-pointed from
     `ex-sheaf-locally-constant-functions` to it (quotes re-verified against its
     `Statement`).
   - B1 `cex-global-sections-epimorphism-fails-lift` dropped its dependency on the
     published B-only `cex-global-sections-not-right-exact` and now reproves the
     failure inside itself (`SES`/`Arcs`/`Sec`/`Witness`/`NoLift`/`Class`); an
     orientation-only `## Remarks` link to the published counterexample remains,
     which is not a dependency.
   - B7 `def-projective-line-two-affine-cover-and-twisting-sheaf` dropped
     `ex-basic-open-affine-line`; its boundary row now cites
     `thm-sections-basic-open-affine-scheme` and `def-affine-open-subscheme`.
2. **Two `fwdcheck cited-not-in-deps` warnings** fixed by declaring the cited
   item: `def-global-sections-functor-sheaves` added to
   A14 `thm-godement-resolution-flasque`; `def-sheaf-on-topological-space` added
   to A28 `lem-two-open-cover-cech-complex`.
3. **One broken wikilink**: A45 `lem-constant-sheaf-on-irreducible-space-is-flasque`
   pointed at the planned-nowhere `def-irreducible-topological-space`; re-pointed
   to the published `def-irreducible-topological-space-and-subset` (the planned
   replacement item was withdrawn — the definition already exists in the library).
4. **`boundary-audit` contradicted dispositions (this session, 4 rows)**: two
   lexical firings on `lem-flasque-kernel-lifts-quotient-sections` (the string
   `iff` occurs only inside the wikilink `[[cor-ac-iff-zorn]]` in the Axiom-of-Choice
   usage note) and two on `def-irreducible-component-of-a-topological-space`
   (the phrase "exactly when" occurs in the closing orientation paragraph, whose
   forward direction is clause 4 of `lem-irreducible-components-of-a-topological-space`,
   proved in its `[step 2.2]`, and whose reverse direction is the definition).
   The four rows' reasons were made precise and each now carries
   `reviewed: {upheld: true, by, reason}`; `boundary-audit` reports 0 contradicted
   and 4 upheld on batch 7 (and on the merged dry run our only contributions to
   the repo-wide 36 candidates are these 4 upheld rows).
5. **Coverage-source bookkeeping**: the new supplier's source row
   (`The Stacks Project, Sheaves on Spaces`) needed; it is stamped:
   `source-fetch-check` reports 5/5 fetch-verified with the coverage file, and
   `url-sweep` reports 5/5 live for this batch.
6. **Scaffold strategy strings are work to do, not proof text.** Every item
   below was derived; where a strategy was defective it was repaired and the
   receipt records the repair (e.g. A34 was restated honestly over compact-open
   bases, A42/A43 were split so that the constant-sheaf identification does not
   consume another pair's B example, A58 was built with the canonical flat cover
   of A55 to stay choice-explicit).

No pair was added; no promised result was dropped; no Recorded result was
consumed; no published content was edited.

**Structural audit against the immutable pre-author baseline**
(`research/frontier-35-ten-categories-step3-auditor-baseline.json`, 639 items):
batch 7 held 57 items (46 A + 11 B) before authoring; all 57 are still in the
final manifest, unchanged in id, and the 21 additions are all on the A page
(67 A + 11 B = 78). No id was renamed, and no scaffold row was dropped to make
a local supplier fit.

## 3. Local suppliers added (all authored, registered, contracted)

The pre-author baseline (`research/frontier-35-ten-categories-step3-auditor-baseline.json`)
holds 639 scaffold items; the pair's final inventory is 78 items, of which **21
were created during this dispatch** (minted at the manifest position of their
first consumer, each before that consumer and fully authored, so they fall under
the owner's auditor-created class and need no Step 3 self-review):

| # | id | position in manifest order (1-based) | role |
|---|----|----------------|------|
| 1 | `lem-comparison-map-from-an-exact-complex-into-an-injective-resolution` | A7 | supplies the comparison map used by A5/A6/A26 |
| 2 | `lem-noetherian-subspaces-and-compact-opens` | A34 | opens of a Noetherian space, compactness |
| 3 | `lem-sections-on-compact-opens-commute-with-filtered-colimits` | A35 | filtered colimits over compact opens |
| 4 | `lem-filtered-colimits-of-abelian-groups-are-exact` | A36 | exactness of filtered colimits in Ab |
| 5 | `lem-subsheaf-generated-by-sections` | A38 | generator subsheaf for A40/A41 |
| 6 | `lem-locally-constant-functions-form-a-sheaf` | A39 | sheaf of locally constant functions + stalk bijection (Stacks 006V/006W/007B) |
| 7 | `lem-irreducibility-criteria-and-open-subspaces` | A43 | irreducibility criteria (Stacks Topology 004V) |
| 8 | `lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions` | A44 | identification of ℤ_X with locally constant functions |
| 9 | `def-irreducible-component-of-a-topological-space` | A46 | definition used by A47/A48/A51 |
| 10 | `lem-irreducible-components-of-a-topological-space` | A47 | existence/basic properties (Zorn; AC declared) |
| 11 | `lem-noetherian-space-has-finitely-many-irreducible-components` | A48 | finiteness input for A51 |
| 12 | `lem-extension-by-zero-short-exact-sequence` | A49 | exact sequence used by A42 |
| 13 | `lem-sheaf-supported-on-a-closed-subset-is-a-pushforward` | A50 | support/pushforward identification |
| 14 | `def-tensor-product-of-abelian-sheaves` | A52 | sheaf tensor and total complex |
| 15 | `lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product` | A53 | stalks, right exactness, unitors |
| 16 | `def-flat-abelian-sheaf` | A54 | flatness for abelian sheaves |
| 17 | `lem-flatness-criteria-and-flat-covers-for-abelian-sheaves` | A55 | canonical flat cover (choice-free) |
| 18 | `def-k-flat-complex-of-abelian-sheaves` | A56 | K-flatness in the bounded-above setting |
| 19 | `lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms` | A57 | K-flat ⇒ preserves quasi-isomorphisms |
| 20 | `lem-morphisms-from-the-constant-sheaf-are-global-sections` | A60 | Hom(ℤ_X,−) = Γ(X,−) for A61 |
| 21 | `lem-koszul-structure-of-the-abelian-sheaf-tensor-product` | A62 | associator/symmetry/unitors for A63/A65 |

## 4. Item log (claim and decision, in prerequisite order)

Every row below is authored, checked and recorded `accept`/confidence 1
(`reviewed` receipts are in `research/frontier-35-ten-categories-step3b-review-<id>.json`;
exact per-citation locators and step-level uses are in
`research/frontier-35-ten-categories-batch-7.proof-contracts.json`).

**A page — foundations (A1–A8).** A1 Γ(X,−) as a left-exact additive functor on
Ab(X), restriction-induced naturality (Stacks Cohomology §20.2). A2 Ab(X) is a
Grothendieck category (generators via extension by zero of ℤ_U; AB5 by stalks).
A3 enough injectives + functorial injective embeddings (Stacks Injectives 01DF).
A4 sheaf cohomology as right derived global sections relative to a supplied
injective-resolution datum; AC declared, exact use named (injective
embeddings). A5 H⁰ = Γ. A6 long exact sequence. A7 comparison/lifting lemma for
an exact complex into an injective resolution (supplier). A8 functoriality in the
sheaf and in the space.

**A page — flasque and Godement (A9–A15).** A9 Γ-acyclic sheaves. A10 flasque
sheaves. A11 injective ⇒ flasque. A12 flasque kernel ⇒ surjectivity on sections
(Zorn; AC declared, single use in step 3.1 named). A13 flasque ⇒ acyclic
(Stacks 20.12.3). A14 Godement resolution (definition). A15 its terms are flasque
and compute cohomology (Stacks 20.30.1), via A13.

**A page — Čech machinery (A16–A28).** A16 ordered Čech cochain complex of a
cover (Stacks 20.9.1; Gao–Zhang 6.1.1–6.1.4). A17 δ²=0. A18 fixed-cover Čech
cohomology (Gao–Zhang 6.1.2). A19 Čech H⁰ = Γ(U,−) (Stacks 20.9.2). A20 ordered
vs alternating complexes agree. A21 refinement maps. A22 refinement independence
on cohomology (prism homotopy). A23 refinement-colimit Čech cohomology. A24
acyclic covers. A25 acyclic rows/columns of the Čech–Godement double complex
(supplier). A26 canonical map fixed-cover Čech → sheaf cohomology (Stacks
20.11.2). A27 Leray acyclic-cover comparison (Stacks 20.11.6). A28 two-open
cover Čech complex.

**A page — Mayer–Vietoris and dimension (A29–A33).** A29 Mayer–Vietoris
(Stacks 20.8.2). A30 finite disjoint unions. A31 one-point space. A32
cohomological dimension relative to a sheaf class. A33 cofinal-basis Čech
vanishing ⇒ derived acyclicity (Stacks 11.9; supplier chain).

**A page — Noetherian inputs (A34–A42).** A34 subspaces of a Noetherian space and
its compact opens (restated honestly: the scaffold's strategy was not a proof).
A35 sections over compact opens commute with filtered colimits. A36 filtered
colimits of abelian groups are exact. A37 the pair's Noetherian filtered-colimit
theorem (Stacks 19.1). A38 subsheaf generated by a family of sections (supplier).
A39 locally constant functions form a sheaf (§5 locator). A40 finite filtration
of a generated subsheaf of ℤ_X (Stacks 20.3). A41 extension-by-zero generators
detect vanishing (Stacks 20.4). A42 closed-immersion pushforward preserves
cohomology (Stacks 20.1), proved self-containedly with a direct-image injective
resolution and the `i^{-1}` adjunction.

**A page — irreducibility and vanishing (A43–A51).** A43 irreducibility criteria
and open subspaces (Stacks Topology 004V; supplier). A44 ℤ_X is the sheaf of
locally constant functions (Stacks Sheaves 006W/0081; supplier). A45 constant
sheaf on an irreducible space is flasque (Stacks 20.2). A46 irreducible
components (definition). A47 existence and basic properties (Zorn; AC declared,
single use in `[step 1.2]` named; supplier). A48 Noetherian spaces have finitely
many irreducible components. A49 extension-by-zero short exact sequence. A50
support on a closed subset ⇒ pushforward. A51 **Grothendieck vanishing on a
Noetherian space** (Stacks 20.20.7), the pair's main theorem, assembled from
A33–A50.

**A page — flat/derived tensor and cup product (A52–A65).** A52 tensor product of
abelian sheaves and its total complex (Stacks §26; supplier). A53 stalks,
coproducts and right exactness (Stacks §26, Modules 17.2; supplier). A54 flat
abelian sheaves (definition; supplier). A55 flatness criteria and canonical flat
covers, choice-free construction (Stacks §26, Modules 17.2/17.7; supplier).
A56 K-flat complexes in the bounded-above setting (definition; supplier).
A57 K-flat complexes preserve quasi-isomorphisms (Stacks §26; supplier).
A58 flat resolutions of abelian sheaves (Stacks Derived Categories 13.15.4, tag
05T7; canonical flat cover at each stage instead of an arbitrary class member,
so no hidden choice). A59 derived tensor product on D⁻(Ab(X)) (Stacks §26).
A60 Hom(ℤ_X,−) = Γ(X,−) (Stacks §31/0FKU; supplier). A61 cohomology classes as
derived morphisms Z_X[−p] → F (Stacks 20.11.1, §31/0FKU). A62
associator/symmetry/unitors of the sheaf tensor (supplier). A63 Koszul coherence
of the derived tensor (Stacks §§26, 31). A64 cup product (Stacks 28.7, 31.1 with
footnote 3, §26). A65 cup-product laws: graded associativity, commutativity with
the Koszul sign, naturality, unit.

**A page — remarks (A66–A67).** A66 fixed-cover Čech can miss derived
cohomology without acyclicity (Stacks 20.9.3/0G6S, 20.11.6/01ET). A67 the
Čech-to-cohomology spectral sequence belongs to homological algebra, not to this
pair (Stacks 20.11.5/01ES, 20.11.6/01ET) — declared as a boundary of scope, not
a consumed result.

**B page (B1–B11), a leaf of the A page.** B1 a global section of C → Q on S¹
with no lift, and its nonzero connecting class in H¹(S¹,ℤ_X) (Vakil Exercise
2.6.F; AC declared, exact use named). B2 the two-arc cover: C⁰=ℤ², C¹=ℤ²,
δ⁰(a,b)=(b−a,b−a), H⁰=ℤ, H¹=ℤ²/Δ≅ℤ, Hᵖ=0 for p≥2 (Gao–Zhang 6.1.4).
B3 the one-member cover: H¹ of the cover is 0 while H¹(S¹,ℤ_X)≠0, and the cover
is shown non-acyclic (Leray hypothesis fails). B4 skyscraper sheaf is acyclic.
B5 the sheaf of all functions is flasque. B6 a constant sheaf on ℝ need not be
flasque. B7 construction of P¹_k from two affines with the twisting sheaf
O(n), frames e_∞=t^n e_0 (Gao–Zhang Ch. 5–6). B8 the resulting two-affine
Mayer–Vietoris sequence. B9 the three-open sign computation δ¹δ⁰=0 in degree 0
and H²=F(U₀₁₂)/im δ¹. B10 the empty space with the empty cover: all Čech groups
vanish, Γ(X,−)=0 on Ab(∅), H^q=0 for q≥0 (AC declared, exact use named).
B11 refinement functions are not canonical on cochains — two refinement
functions give different cochain maps but the same cohomology map.

## 5. Checks run by the author dispatch (historical; superseded by §9)

| check | command | result |
|---|---|---|
| precheck (explicit paths, all 78 item files) | `node tools/tsx-run.mjs tools/precheck.mts items/<each of the 78 items>.md` | **59 checked, 0 failing — all clean** (definitions/remarks carry no phase body) |
| rendering | `node tools/tsx-run.mjs tools/rendercheck.mjs items/*.md library/.../…-and-comparison{,-examples}.md` | **OK — 80 files** (no link-in-math, balanced delimiters, KaTeX and YAML parse) |
| strict proof contracts | `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-7.proof-contracts.json --strict` | **0 errors, 0 warnings, 78/78 items** |
| merged dry run | `node tools/merge-proof-contracts.mjs --level frontier-35 /tmp/merged-dry.json <15 batch files>` then `--strict` | merge OK (593 items); the 97 repo-wide errors mention **none** of our 78 ids |
| content policy (items) | `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-7.pages.json` | **78 scoped items, 0 errors, 0 warnings** |
| content policy (whole run) | `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-*.pages.json` | 682 items, 35 errors repo-wide (**none ours**): 34 `scope-item-missing` in unfinished pairs, 1 `ai-generated-statement-dependency` elsewhere |
| coverage | `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-7.coverage.json [--require-destination]` | **1 page, 56 harvested results, 0 errors, 0 warnings** |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK — but see §6.1 (our two plan rows still carry no item list) |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-*.pages.json` | **682 items, 0 errors** |
| scope | `node tools/manifest-integrity.mjs --run frontier-35-ten-categories` | 52 pages owed, 52 present, **no scope drift** |
| scope receipts | `node tools/step3-decisions.mjs check --run … --phase scope` | **closed: true** (26 pairs, 682 items) |
| item receipts | `node tools/step3-decisions.mjs check --run … --phase final` + per-item stale scan | 605/682 accepted repo-wide; **0 of our 78 in work rows**; our stale receipts: 0 |
| boundary rows | `node tools/boundary-audit.mjs research/…-batch-7.proof-contracts.json --fail-on-contradicted --fail-on-template --json` | exit 0 — 624 rows, 0 template clusters, **0 contradicted**, 4 upheld |
| risk report | `node tools/risk-report.mjs research/…-batch-7.proof-contracts.json` | 0 errors, 78 items routed |
| citation fidelity | `node tools/citation-fidelity.mjs research/…-batch-7.proof-contracts.json --fail-on-missing-quote` | no widening candidates (over the whole run: exit 1, none ours) |
| finite smoke | `node tools/finite-smoke.mjs research/…-batch-7.proof-contracts.json` | 0 errors, 0/78 items carry obligations (repo-wide merged: 0 errors) |
| dependency resolution | `node tools/depsource.mjs` | 82968 published, 0 planned-earlier, 1 draft-page (not ours), 0 unresolved |
| repository deps | `node tools/depcheck.mjs --json` | repo-wide 352 errors / 262 warns — **0 involving our ids** |
| forward refs | `node tools/fwdcheck.mjs --json` | repo-wide 53 errors; **20 ours**, all one known plan-order artifact (§6.3) |
| source fetchability | `node tools/source-fetch-check.mjs --coverage research/…-batch-7.coverage.json` | **5/5 fetch-verified** (the Sheaves on Spaces row was newly stamped today) |
| citation liveness | `node tools/url-sweep.mjs --coverage research/…-batch-7.coverage.json --out /tmp/urlsweep7.json` | **5/5 live, 0 failed**, 5 citation decisions, 0 documented drops |
| external not-proved | `node tools/extcheck.mjs` | OK (one unrelated published note on `thm-urysohn-lemma`) |
| prose | `node tools/prosecheck.mjs` | OK — no positional claim contradicts the spec |
| pathway | `node tools/pathcheck.mjs` | 0 errors (30 structural warnings in other groups) |
| cross-batch input | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories` | refreshed; 16/16 batch inputs reviewed; **no batch-7 edges**; `batch-7.cross-batch-dependencies.json` = `[]` |
| in-run cross-pair scan | script over the 52 in-run pages | **0 cross-pair dependencies from this pair's 78 items** (the only in-run edge is B → A inside the pair) |

## 6. Published concerns and open obligations (owner report)

### 6.1 Pre-splice plan mismatch (Step 4 must splice)
`research/plan-spec.json` rows `366.081`/`366.082` carry `items: []` while the
manifest holds 67/11. `node tools/splice-plan.mjs --run frontier-35-ten-categories --verify`
lists this pair (and every other in-flight pair) as "manifest 67 vs plan 0 item(s)".
This is the expected pre-splice state; the Step 4 splice owns it. No other
plan mismatch for this pair was found. **Reported, not repaired here.**

### 6.2 Stale-receipt class (repo-wide)
At this dispatch's start the run-wide stale-receipt class numbered about 108
(the earlier session's count); this pair's are now 0 — re-verified today by
`itemDecision` over all 78 items and by the final-phase check. The class remains
for `type-a-soergel-bimodules-and-hecke-categorification`, Garside and geometric
braids (and some B pages); it closes in the repo-wide `alpha-receipts` recovery,
not here.

### 6.3 `fwdcheck` false positive (20 of our items) — a plan-order artefact
`thm-choice-implies-dependent-implies-countable-choice` is a **published**,
authored theorem whose home page `weak-choice-principles-and-sierpinskis-theorem`
carries plan order 665, later than order 366.081. Our items that legitimately use
Axiom of Choice ⇒ Dependent Choice must have it in `deps` (declaring
`forward_refs` would be wrong: `fwdcheck` has `forward-in-deps` for exactly that,
and the target is a premise, not a forward pointer). The 20 `forward-undeclared`
errors for this pair are therefore a plan-order topology artefact shared with 2
items in other pairs. **Do not "fix" by editing our items**; the owner/Step 4
should decide whether that page's order precedes 366.081.

### 6.4 Published debt noticed while reading (not ours to edit)
- **AC premise without a direct `def-axiom-of-choice` edge.** Seven published
  items on `projective-and-injective-resolutions` name the Axiom of Choice in
  their own statement but carry no direct `def-axiom-of-choice` dependency:
  `cor-every-module-admits-a-projective-resolution`,
  `cor-every-module-admits-an-injective-resolution`,
  `lem-extension-from-subobjects-of-a-generator-detects-injectivity`,
  `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps`,
  `lem-a-sufficiently-long-generator-extension-iteration-is-injective`,
  `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings`,
  `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution`.
  Verified 2026-09-24: each reaches `def-axiom-of-choice` transitively, so the
  assumption is propagated; this is statement-level metadata debt, not a missing
  proof supplier. Our items that consume A3/A2 declare AC directly.
- **Six `depcheck b-leaf-content` errors in other pairs** (e.g.
  `fs-the-cartan-matrix-equals-the-decomposition-matrix` →
  `ex-decomposition-matrix-of-s-three-in-characteristic-two`), nine
  `published-unchecked` remarks, three `justification-backward`, one
  `page-cycle` (brauer characters) and one `depsource` `draft-page` row
  (`rem-the-p-equals-infinity-case-is-recorded-not-proved-here` →
  `rem-dual-of-l-infinity`) — all outside this pair.
- **Earlier handoff claim not reproduced**: "9 published B-only items with no
  library page home (`link-unresolved`)". As of this session `depcheck` reports
  **0 `link-unresolved`**; the three items named in that note
  (`cex-global-sections-not-right-exact`, `ex-basic-open-affine-line`,
  `ex-sheaf-locally-constant-functions`) are listed on published pages. Recorded
  as *not reproducible*, not as a defect.
- **`thm-urysohn-lemma`** is published and rests directly on material not proved
  in the library (extcheck note) — unrelated to this pair, listed for the
  reconciler.

### 6.5 Suspicion about a scaffold note (resolved in the authored text)
The B1 scaffold note described "the constant-presheaf variant" of H¹(S¹,ℤ). As
literally written a constant-**presheaf** H¹ claim is false (the constant
presheaf is not a sheaf and its Čech/section behaviour differs), so the note was
not copied. The authored B1 defines ℤ as the **sheaf** of locally constant
integer-valued functions (citing `lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions`)
and proves the honest claim: the connecting class is nonzero, hence
H¹(S¹,ℤ_X) ≠ 0. Reported as a *suspicion about the scaffold note*, now
immaterial; confidence high, evidence in the item's `Statement refuted` and
`Remarks`.

### 6.6 Bookkeeping notes for Step 4
- The manifest statement of A44 (`lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions`)
  now cites the in-pair A supplier `lem-locally-constant-functions-form-a-sheaf`;
  its dependency edge and authored statement agree, so Step 4 can splice this
  carrier without inheriting the superseded B-example link.
- The manifest statement of `lem-koszul-coherence-for-derived-sheaf-tensor`
  (index 62) is coarser than the authored `Statement` (derived tensor
  associativity/unit/Koszul coherence in `D^-` with the precise hypotheses). It
  is an elaboration, not a weakening; no promise is dropped.
- Three of this pair's early items — A1 `def-global-sections-functor-sheaves`,
  A2 `lem-abelian-sheaves-form-a-grothendieck-category` and
  A3 `thm-abelian-sheaves-have-enough-injectives` — carry 15:36-local write
  times from a concurrent writer (the published
  `thm-chain-homotopic-maps-induce-the-same-map-on-homology` was rewritten at
  16:10). Their current bytes were re-read, quotes re-verified by the strict
  contract check and the affected receipts re-recorded; because sibling writes
  continue, re-running this battery at the stage gate is cheap and recommended.

## 7. Open obligations (all owner-held or Step-4-held)

1. Splice `366.081`/`366.082` item lists at Step 4 (§6.1).
2. Decide the plan order of `weak-choice-principles-and-sierpinskis-theorem`
   relative to 366.081 or formally accept the 20 `forward-undeclared` findings as
   a known artefact (§6.3).
3. Repo-wide stale-receipt recovery for the remaining pairs (§6.2).
4. Published metadata debt on `projective-and-injective-resolutions` and the
   other items in §6.4 — serial reconciler's ledger.
5. Re-run the stage battery after sibling pairs stop writing (§6.6).

No obligation of *this* pair is unresolved: all 78 items are fully authored,
contracted, checked and recorded, and no escalation or owner hold is outstanding.

## 8. Handoff

Completed IDs: the 67 A-page items and 11 B-page items listed in §4 (manifest
order). Local suppliers added: the 21 rows in §3. The author-dispatch checks
are recorded in §5; the owner-pass repairs and current-byte checks are in §9.
Published concerns and run-wide obligations outside this pair are in §§6–7.

## 9. Owner mathematical repair and current-byte closure (2026-09-24)

The owner pass reread the eleven B items and the affected A proof interfaces
against the current source-backed statements. The concrete corrections were:

- A40's finite filtration uses the **positive** gcd of active nonzero
  generators. At level (n>0), (E_n) is the union of the gcd-(n) opens and
  (V_n=E_n\cap W_{<n}); the constant section (n) on (E_n) gives the
  stalkwise exact sequence
  (0\to j_{V_n!}\mathbb Z\to j_{E_n!}\mathbb Z\to F_n/F_{n-1}\to0).
  This resolves both the (0,2) overlap and a compact-open boundary without
  treating membership in an arbitrary compact open as locally constant.
- A55's canonical flat-cover component is the section glued from (g\cdot s)
  on (V\cap U) and zero on (V\setminus\operatorname{Supp}(g)). A58 uses
  that specific (G(Q)\to Q) cover at every descending degree and the
  fibre-product map ((d_C,-e)); A59 uses the same map, proves homotopy
  invariance before roof descent, and computes (H^0) by right exactness.
  The manifest statement and strategy for these items now agree with the proof.
- A23 indexes global Čech cohomology by a set of distinct-open covers closed
  under repeated intersection refinement. Other corrected A interfaces include
  the augmented Čech column's (H^{-1}/H^0) bookkeeping, full shifted Hom
  complex, one-way inverse-image exactness, extension-by-zero image, compact-open
  colimit presentation, and the cited cochain-complex long exact sequence.
- A63 now gives typed naturality squares for the associator comparisons
  (\Theta,\Xi), extends naturality through roofs by inverting only
  quasi-isomorphism denominators, and transports the strict pentagon, triangle
  and hexagon to the derived maps. A65 records the counterexample
  (\mathbb Z/2\otimes^{\mathbf L}\mathbb Z/2\not\cong
  \mathbb Z/2\otimes\mathbb Z/2), inverts the comparison only for the
  K-flat shifted units, and uses A63's comparison square for arbitrary
  coefficient sheaves. The degree-zero cup and unit maps are typed.
- B5 no longer equates all functions with locally constant functions on a
  connected open; B11 distinguishes two chosen refinement functions; B7 now
  proves its localization chart is a **scheme** isomorphism on the distinguished
  basis before gluing. Its non-load-bearing comparison link in B1's Remarks
  remains in place.

The manifest's A40 and A58 strategies were also aligned with their repaired
proofs. The new locally constant-function A supplier appears in the manifest,
contract, A page and current scope receipt; neither published B example is a
load-bearing dependency. The Step-3 auditor-created V2 certificate now carries
all **21** added A suppliers, each with a current hash-bound owner marker.
The current A/B scope is `sufficient` at hash
`05e7fcbce9ee956e9e7a0a0081d095d3aa8b941304608241f2f275f7a5936ac2`;
all **78** item decisions are current, with **0** batch-7 work rows in the
final Step-3 check.

Checks on the final batch-7 item and manifest bytes: precheck **59 checked,
0 failing**; rendercheck **80 files OK**; strict proof contracts **78/78,
0 errors, 0 warnings**; manifest-deps **78 items, 0 errors**; content-policy
**78 items, 0 errors, 0 warnings**; coverage **56 results, 0 errors,
0 warnings**; citation fidelity **675 citations, no missing quote or widening
candidate**; boundary audit **624 rows, 0 contradicted, 0 template clusters**;
finite smoke **0 errors**; source fetch **5/5**; manifest integrity **52/52
pages, no scope drift**. Repository depcheck found **0 errors and 0 warnings
involving this pair's IDs**. The whole-run final Step-3 check still had **43
work rows outside batch 7** at this pass, and the partial V2 certifier had
two pending diagonal additions outside batch 7. These are run-wide work, not
mathematical obligations of this pair.

This is a bounded mathematical reread of the repaired chains and their direct
consumers, backed by the cited Stacks sections and the checked local proof
interfaces. The structural gates above validate format, dependency closure,
quotes and receipts; they are not substitutes for that mathematical read.

# Step 3a scope review — `normal-moore-spaces-pmea-and-consistency-strength`

- Run: `phase-2-remaining-27` (role alpha, label
  `step3a-pair-normal-moore-spaces-pmea-and-consistency-strength-c01e032f39778c7a`)
- Pair: A `normal-moore-spaces-pmea-and-consistency-strength` (order 709, 26 items)
  + B `...-examples` (order 710, 3 items), batch 14, category `foundations`
- Design: `research/plan-set-theory-completion-track.md` §SET-28 (L860–L873);
  retirement target `rem-normal-moore-space-conjecture` per
  `research/phase-2-expansion-recorded-audit.md` L52
- Binding owner direction: `research/phase-2-remaining-27-owner-authoring-direction.md`
  ("Choice, inner models, and set-theoretic topology" / SET-28 paragraph)
- **Decision: `sufficient`** (recorded in
  `research/phase-2-remaining-27-step3a-review-normal-moore-spaces-pmea-and-consistency-strength.json`).
  No omitted topic, result or example of the intended subject was found; no owner
  merger or enrichment is required. Observations in §4 are authoring/ledger
  items, not scope gaps.

This is the first 3a decision for the pair in this run. An earlier dispatch of
the same pair (`...-d8d1d14bf10f71f8.task.md`) produced no report and no receipt,
and no owner scope record exists for it.

## 1. Scope inventory and design mapping

The plan names thirteen clauses for SET-28; every one maps to a planned item,
in prerequisite order:

| plan clause | manifest item(s) |
|---|---|
| Moore developments and normal Moore spaces | `def-moore-spaces-and-developments`, `def-normalized-families-and-collectionwise-normality` |
| collectionwise normality/metrizability bridge | `lem-metrizable-spaces-are-collectionwise-normal`, `thm-moore-spaces-are-subparacompact`, `lem-collectionwise-normal-moore-spaces-are-screenable`, `thm-normal-screenable-moore-spaces-are-metrizable`, `thm-collectionwise-normal-moore-spaces-are-metrizable` |
| CH construction of a normal nonmetrizable Moore space | `thm-ch-normal-nonmetrizable-moore-space` |
| `V=L` consequence | `cor-v-equals-l-refutes-normal-moore-space-conjecture` |
| MA+not-CH counterexamples via Q-sets | `def-q-sets-and-heath-moore-space-interface`, `lem-ma-produces-an-uncountable-q-set`, `thm-bing-q-set-moore-space-is-normal-and-nonmetrizable`, `thm-ma-not-ch-normal-nonmetrizable-moore-space` |
| product measure extension axiom | `def-product-measure-extension-axioms-pmea-and-pmea-sigma` |
| PMEA implies the normal Moore conjecture | `lem-pmea-three-quarter-separation-estimate`, `thm-pmea-normal-low-character-spaces-are-collectionwise-normal`, `thm-pmea-implies-normal-moore-space-conjecture` |
| forcing PMEA from a strongly compact cardinal | `thm-strongly-compact-relative-consistency-normal-moore` (composes the published proof-bearing interface `thm-lc-strong-compactness-product-measure-extension-interface` with the local PMEA→NMSC theorem) |
| covering-lemma/core-model interface | `def-fleissner-hyp-covering-interface`, `thm-dodd-jensen-covering-supplies-fleissner-hyp-data`, `thm-no-inner-model-measurable-implies-fleissner-hyp` |
| NMSC implies an inner model with a measurable cardinal | `thm-fleissner-hyp-normal-nonmetrizable-moore-space`, `thm-normal-moore-implies-inner-model-measurable` |
| upper and lower relative-consistency statements | `thm-strongly-compact-relative-consistency-normal-moore`, `thm-formal-nmsc-consistency-lower-bound`, `thm-normal-moore-consistency-strength-sandwich` |
| modern `omega_1`-strongly-compact refinement as a sourced remark | `rem-omega-one-strongly-compact-normal-moore-refinement` |
| `fs-nmsc-is-a-zfc-theorem` | B `fs-zfc-proves-normal-moore-space-conjecture` |

Recorded-remark clauses (`items/rem-normal-moore-space-conjecture.md`):
(a) fails under CH ✓, fails in `L` ✓, fails under MA+not-CH ✓;
(b) holds under PMEA ✓, already under PMEA-σ ✓, PMEA consistent from a strongly
compact cardinal ✓; (c) NMSC ⇒ inner model with a measurable cardinal ✓ and the
corresponding formal `Con` lower bound ✓; conditional discipline ✓ (all
consistency claims keep their antecedents). The title's "not decided by ZFC" is
supported by the B nonprovability statement (Con(ZFC) → Con(ZFC+CH) → ¬NMSC) and
by the upper-bound consistency implication on the A page.

The B page keeps the design's SET-27–29 witness for this pair, "Moore
development" (`ex-development-stars-form-a-countable-local-base`), plus the
PMEA three-quarter event computation and one failure-mode statement.

## 2. Source coverage — independently re-checked this session

The coverage harvest has 8 source rows; 2 rows are out-of-scope with concrete
reasons (Burke's later collectionwise-Hausdorff material; Fremlin's earlier
random-real-valued-measurable chapters), and one (Nyikos, Proc. AMS 78 (1980)
429–435) is a documented `source_resolution: dropped` with six recorded attempts
and two complete independent alternatives. I re-read the load-bearing primary
passages rather than relying on the recorded reading evidence:

- Fleissner, *Trans. AMS* 273 (1982) 365–373 (`kuscholarworks.ku.edu` content
  hash `88062b98…`, 9 pp.): printed pp. 365–367 read directly — HYP clauses
  (1a)–(3b), Lemma 1's separating maps `m_β`, the statement "CH is also a special
  case of HYP: κ=ω, κ_n=n, E={δ∈ω₁: δ limit}", Figure 1 (PMEA → Nyikos → NMSC;
  strongly compact → generic extension → PMEA; Jensen–Dodd → inner model), and
  the closing construction pages (Bing Examples G/H reductions, character
  discussion). I separately checked clause (3b) at κ=ω, the one place the CH
  instance could fail: for β<ω₁ of countable cofinality a club of successors
  exists (e.g. {ω·(2n+1)+1} in ω²), so E∩β is non-stationary in β; for successor
  β the unique club avoids E; so the instance is sound.
- Fleissner, *PNAS* 79 (1982) 1371–1372 (PMC345971) — abstract confirms the CH
  construction, the shared HYP consequence, and the statement that consistency
  of NMSC requires consistency of measurable cardinals.
- C. Good, *Large cardinals and small Dowker spaces* (author-hosted PDF):
  Definitions 3–6, Theorem 7 (Dodd–Jensen covering under "no inner model with a
  measurable"), Lemma 8 (singular strong-limit κ of cofinality ω, 2^κ=κ⁺, □_κ),
  Lemmas 11–12 and Definition 4 (non-reflecting stationary E ⊆ W = {α<κ⁺:
  cf(α)=ω}); Good also records "every stationary subset of ω₁ is non-reflecting".
- Bagaria–da Silva, *Topology Appl.* 323 (2023) 108276: Definitions 2.1–2.3,
  Theorem 2.4 (Nyikos: PMEA separates normalized families when χ(x,X)<c),
  Definition 2.6 (PMEA-σ), Theorem 2.7 (PMEA-σ ⇒ first-countable normal spaces
  are collectionwise normal ⇒ NMSC), Theorem 2.5 (Con(ω₁-strongly compact) ⇒
  Con(NMSC)) and the stated open converse, plus the remark that this upper bound
  is strictly weaker than strong compactness.
- Fremlin, *Real-valued-measurable cardinals* §§8A–8G, printed pp. 69–71:
  8A/8B PMEA definition, 8C Kunen's Con(strongly compact) → Con(PMEA), 8E the
  three-quarter separation lemma, 8F (normal + χ(x,X)<c ⇒ collectionwise
  normal, attributed to Junnila), 8G (PMEA ⇒ normal Moore spaces metrizable,
  Nyikos), and Remark (b) on p. 71, the κ-additive weakening that Bagaria–da
  Silva formalise as PMEA-σ.
- Bing, *Canad. J. Math.* 3 (1951) 175–186: read printed pp. 176–183 — the
  screenability definitions, Theorem 3 (regular + perfectly screenable ⇔
  metrizable, with the displayed metric), Theorems 6–8 (strong/perfect
  screenability and normal screenable Moore metrizability), Theorems 9–10
  (Theorem 9's well-ordering of the cover, then collectionwise normal Moore ⇒
  metrizable), and Example E (the separable normal Moore space over a Q-set).
- `lem-metrizable-spaces-are-collectionwise-normal`: GMU Math 631 notes,
  Theorem 65 with the distance-neighbourhood proof.
- Moore subparacompactness (Burke Theorem 2.4): corroborated independently of
  the Burke scan by Hodel, *Pacific J. Math.* 38 (1971) 641–651 (definition of
  subparacompact; Borges' developable ⇒ wΔ; Hodel Cor. 2.6 Moore ⇔
  semi-stratifiable for regular wΔ-spaces; Creede semi-stratifiable ⇒
  subparacompact).

Residual source uncertainty, stated honestly: the Burke lecture-note scan
(`dmitripavlov.org/scans/ttu15.pdf`, 152 pp., 8.4 MB) is image-only, and this
session has no OCR or image-reading capability, so I could not re-read its
printed page locators. Its load-bearing claims are all covered by the primary
sources read above (Bing Thms 9–10; Fremlin 8E–8G; Fleissner §1 for MA+not-CH
Q-sets, citing Tall; Hodel/Creede for subparacompactness), so no coverage change
follows; only its page-level locators remain unverified here. The run-27 drift
review independently recorded full reading of the same scan
(`phase-2-remaining-27-alpha-step1-drift.md` L107–L111, verdict `no-drift`).

Side observation: the accessible same-author survey Nyikos, *Topology Proc.* 3
(1978) 473–493 (`topology.nipissingu.ca/tp/reprints/v03/tp03211.pdf`, §2,
printed pp. 476–478) contains the PMEA ⇒ first-countable-normal ⇒ collectionwise
normal argument and Theorem 1 (Bing). This is an additional authoritative
backing for the dropped Nyikos row; the two recorded alternatives (Fremlin
8D–8G, Burke pp. 9–11) already make the drop valid, so this is informational
only.

## 3. Dependency, interface and mechanical checks

- Transitive dependency closure of all 29 pair items (run manifests + plan +
  published item frontmatter): 1172 distinct nodes, **0 unresolved ids**, no
  item carrying `proved_here: false`, and **no item of
  `deferred-set-theory-beyond-choice`** anywhere in the closure. The
  Foundations bootstrapping boundary (CLAUDE.md rule 10) holds.
- 20 direct external dependencies, all published: `def-axiom-of-choice`,
  `def-complete-measure-space`, `def-discrete-family-and-sigma-bases`,
  `def-first-countable-top`, `def-martins-axiom`, `def-metric-topology`,
  `def-metrizable-space`, `def-normal-and-t4-spaces`, `def-open-cover-r`,
  `def-product-measure-on-sigma-finite-spaces`, `def-regular-and-t3-spaces`,
  `lem-discrete-families-are-locally-finite`, `lem-distance-to-set-is-lipschitz`,
  `lem-locally-finite-unions-and-closures`, `rem-continuum-hypothesis`,
  `thm-finite-fragment-relative-consistency-transfer`,
  `thm-formal-consistency-of-zfc-plus-gch-from-zf`,
  `thm-formal-relative-consistency-from-verified-proof-reduction`,
  `thm-generalized-continuum-hypothesis-in-l`,
  `thm-lc-strong-compactness-product-measure-extension-interface`.
  Page `requires` (orders 697, 703, 707, published product-measure page) all
  precede order 709; the single cross-batch edge (consumer batch 14 ←
  `shelahs-baire-property-model-and-inner-model-lower-bounds`, batch 15) is
  recorded `verified`.
- Consumers: the only in-run page that requires this pair is its own B page, so
  no downstream in-run interface waits on it.
- Read-only mechanical checks, batch 14: `manifest-deps` 73 items / 0 errors;
  `content-policy --manifest-only` 73 scoped items / 0 errors / 0 warnings;
  `coverage-checklist` 2 pages, 71 harvested rows / 0 errors / 0 warnings;
  `validate-plan research/plan-spec.json` exit 0 (acyclic, no item cycles,
  forward references, B-page dependencies or unresolved ids). All 29 items have
  a Step-1 `ready` record; all 29 ids are new (no collision with `items/`);
  every item carries statement, deps, provenance, sources, proof plan and axiom
  base.

## 4. Observations for the owner and Step-3b (non-blocking; scope unchanged)

1. **Published A-P clause debt in the load-bearing closure** (canonical-ledger
   candidates, exact evidence recorded):
   - `def-product-measure-on-sigma-finite-spaces` — A-P: "Its two defining
     section integrals use the affected iterated-section theorem"
     (`research/phase-2-frontier-22-published-product-section-measure-audit.md`
     L37, hash `ed724f7e…`). The PMEA definition item needs the usual fair-coin
     product measure on `{0,1}^λ`; the author should define it through finite
     cylinders / Kolmogorov extension rather than lean on that section-integral
     clause. Candidate published supplier:
     `cor-arbitrary-product-measure-for-standard-borel-probability-spaces`
     (page `infinite-product-measures-and-kolmogorov-extension`), which is not
     in this pair's `requires` or item deps.
   - `def-metric-topology` — A-P: unqualified "neighbourhood" wording
     (`research/phase-2-frontier-22-published-confirmed-handoff-reconciliation.md`
     L15/L73, hash `069190e1…`); the metric topology itself is sound and
     `lem-metrizable-spaces-are-collectionwise-normal` uses only balls and the
     distance function, not the affected wording.
2. **Dependency completeness inside the pair.** `thm-ch-normal-nonmetrizable-moore-space`'s
   proof plan instantiates HYP at κ=ω and reuses Fleissner's conditions (4)–(18)
   and Ramsey thinning, but its declared deps omit
   `def-fleissner-hyp-covering-interface` (and the general HYP construction
   item). Step 3b should either declare the reused κ=ω instance or restate the
   needed clauses locally; this is a local repair, not a scope change.
3. **AC declarations (rule 11).** Nine items declare `def-axiom-of-choice`
   directly. `thm-ch-normal-nonmetrizable-moore-space` (ZFC+CH),
   `cor-v-equals-l-refutes-normal-moore-space-conjecture` (ZFC+V=L) and
   `fs-zfc-proves-normal-moore-space-conjecture` (metatheoretic, Con(ZFC)-based)
   have ZFC bases with enumeration/recursion or formal-proof steps and no direct
   `def-axiom-of-choice` edge; Step 3b should identify the exact use and declare
   the dependency where AC is genuinely used (`thm-fleissner-hyp-…` already
   reaches it through the HYP interface).
4. **B-page depth.** Three items is the minimum in this run (others 4–14), but
   the design's SET-28 witness is present and the page is not a second theory
   page. Optional enrichment only, if the owner wants more B depth: the κ=ω HYP
   instance as a worked computation; a concrete non-collectionwise-normal
   witness (e.g. Bing Example G); a second false statement. None is required
   for the scope to be adequate.

## 5. Uncertainty

The only unverified item above is the Burke scan's page-level locators (image
PDF, no OCR available to this session); its mathematical content is
independently corroborated. Nothing else is unresolved at scope level, and no
planned result, definition or example of the intended subject was found
missing.

## 6. Decision and receipt

`sufficient` — the 26 A items and 3 B items cover every SET-28 clause and every
clause of `rem-normal-moore-space-conjecture`; sources are complete,
fetch-verified by the scaffolder and re-checked here at the load-bearing
passages; the dependency closure resolves, respects the Foundations boundary,
and passes all manifest/coverage/plan gates. Receipt written with
`tools/step3-decisions.mjs record-scope --run phase-2-remaining-27 --page
normal-moore-spaces-pmea-and-consistency-strength --decision sufficient`.

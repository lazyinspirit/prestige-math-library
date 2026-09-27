# Step 3a scope review — type-a-soergel-bimodules-and-hecke-categorification

- Run: `frontier-35-ten-categories` (batch 17), role alpha, label
  `step3a-pair-type-a-soergel-bimodules-and-hecke-categorification-8ff73f31a6448a49`.
- A page: `type-a-soergel-bimodules-and-hecke-categorification` (order 759,
  category `braid-groups`, 32 planned items).
- B page: `type-a-soergel-bimodules-and-hecke-categorification-examples` (order
  760, 4 planned items); companion pointers A↔B are consistent, and every B
  item depends only on A-page items.
- Decision: **sufficient**, recorded with `tools/step3-decisions.mjs
  record-scope` (non-owner review) at the current pair content hash. Receipt:
  `research/frontier-35-ten-categories-step3a-review-type-a-soergel-bimodules-and-hecke-categorification.json`;
  re-verify with `node tools/step3-decisions.mjs check --run
  frontier-35-ten-categories --phase scope`.
- Scope only: this review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item, plan row, coverage row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-35-ten-categories-batch-17.pages.json` | Current A inventory (32 items) and B inventory (4 items) with every statement, strategy, `deps`, provenance and source locator; page `requires`; companion pairing |
| `research/frontier-35-ten-categories-batch-17.coverage.json` | Five A-page + three B-page source records with locators, dispositions, deferral destinations and fetch stamps |
| `research/frontier-35-ten-categories-batch-17.notes.md` | Step-1 construction record: the ten original escalations and their owner resolution (local Matsumoto, local Hecke presentation + standard basis, local split-$K_0$, corrected character route) |
| `research/frontier-35-ten-categories-batch-17.cross-batch-dependencies.json` | The one in-run page edge and one in-run item edge into batch 14 (`graded-bimodules-and-tensor-functors`), both `verified` with the shift-dictionary evidence |
| `research/plan-braid-groups-track.md` lines 54 and 745–810 | Controlling prose design: BG-16 role, `requires`, the 32 A rows and 4 B rows with their intended proof routes and locators; BG-17 forward pointer |
| `research/plan-kazhdan-lusztig-track.md` §0 and KL-2 rows (lines 1–20, 74–102) | Ownership boundary: BG-16 owns generators, light/double leaves, Hom freeness and the split-$K_0$ Hecke isomorphism; KL-1 owns the bar-invariant KL basis; KL-2 owns the real scalar extension, Hodge theory and Soergel's character theorem |
| `research/plan-spec.json` rows 759/760 | Page identity/order/kind/category/companion/`requires`; empty item lists (the manifest is authoritative for item order) |
| `research/frontier-35-ten-categories-drift-evidence.json` (this page) and `…-alpha-step1-drift.md` | Drift record: 6 declared `requires` and 154-page closure at drift time; the later owner repair replaced the two unbuilt RG-13/HA-19 suppliers with published ones |
| `research/frontier-35-ten-categories-owner-authoring-direction.md`, `…-deferred-items.json`, `…-deferred-pairs.json`, `…-scope-ledger.json` | Owner direction defers one batch-8 pair and one batch-13 item only; this pair is active, owed by batch 17 and not deferred |
| `research/published-consumer-supplier-ledger.md` | The ledger's only `soergel` mention is the planned KL-2 page (`soergel-intersection-forms-and-hodge-theory`, zero items); neither page of this pair is recorded there, and neither exists in `items/` |
| Published supplier pages/items named below, plus independent PDF downloads `/tmp/libedinsky-gentle.pdf`, `/tmp/f35-*` and the cached `scratchpad/source-cache/braid-groups/*.pdf` | Prerequisite availability and section-level source re-check at the stamped bytes |

## Inventory against the prose design

All 32 designed A rows and all 4 designed B rows are present with the design
kinds; no designed row was dropped, renamed or re-kinded, and no extra claim was
added. The only deviation from the plan table is that the manifest places
`lem-type-a-soergel-frobenius-biadjunction` (position 13) before
`lem-type-a-character-recursion-under-simple-soergel-tensoring` (position 14),
the reverse of the plan order. The two lemmas are mutually independent (each
depends only on the rank-one definition/rank-two freeness and on the
filtration/Hecke items respectively), so the swap has no dependency effect; the
manifest is authoritative for item order and `validate-plan` reports the
in-order graph acyclic.

The pair covers the intended arc of the subject: realization and Demazure
operators; the local Hecke presentation with its standard/triangular bases and
the type-A Matsumoto step; the rank-one bimodule $B_s$, Bott–Samelson bimodules
and $\mathrm{SBim}_n$; graph/standard bimodules with $\Delta/\nabla$ support
filtrations and their intrinsic multiplicities; Frobenius biadjunction, the
special and general Hom formula; rank-one and rank-two decompositions; the
diagrammatic category with its complete type-A relations and the functor to
bimodules; double-leaf and light-leaf bases; classification of indecomposables;
the diagrammatic character isomorphism; the equivalence
$\mathrm{Kar}(\mathcal D)\simeq \mathrm{SBim}_n$; and the split-$K_0$ Hecke
categorification. The B page adds the rank-one computation, the rank-two matrix
check, the Hecke quadratic relation and the braid-non-isomorphism
counterexample.

Ownership boundaries are preserved, not violated: the bar-invariant
Kazhdan–Lusztig basis and bar involution stay with KL-1, Hodge theory and
Soergel's character theorem with KL-2, Rouquier complexes and the categorical
braid action with BG-17, the generic finite-field Hecke theory with RG-13 and
the general Grothendieck/Cartan theory with HA-19. These are exactly the
coverage's written out-of-scope rows (Hodge/positivity, general Coxeter
classification, link-cobordism/foam applications, modular conjectures, category
O), and the page's own statements keep the local constructions local (small
skeletons for split $K_0$, no HA-19 Cartan claim; no RG-13 finite-field claim).
The page reaches only a "triangular basis indexed by permutations", which is
what its consumers need and what its sources prove without the KL-basis
machinery.

## Source coverage assessment

Gates: `coverage-checklist … --require-destination` reports 2 pages, 36
harvested results, 0 errors, 0 warnings; `source-fetch-check` reports 8/8
fetch-verified and 8/8 resolved. I re-downloaded all six distinct PDFs and every
stamp reproduced exactly: EW `1309.0865` `e610a4fa938a7cc9`, 827,058 B, 83 pp.;
Soergel `math/0403496` `e17c5ae977040192`, 291,666 B, 29 pp.; Elias–Khovanov
`0902.4700` `228732489e11791f`, 757,440 B, 65 pp.; Libedinsky `1702.00039`
`b47ca7d1cf7b44be`, 3,587,244 B, 47 pp.; Libedinsky `0707.3603`
`3dc8561387a09d50`, 300,243 B, 22 pp.; Khovanov `math/0510265`
`548a0eece08bd967`, 190,287 B, 19 pp.

Load-bearing sections read:

- EW §2.1–2.2 (printed pp. 13–15): $T_s^2=(v^{-2}-1)T_s+v^{-2}$, $H_s:=vT_s$,
  the bar-invariant generator $\underline H_s=H_s+v=v(T_s+1)$ and the
  triangular KL basis. The manifest's `H_i=v(T_i+1)` is exactly
  $\underline H_s$, and $H_i^2=(v+v^{-1})H_i$ follows directly — the def/lemma
  pair is in the standard normalization, not a private one.
- EW §3.4–3.5 (pp. 24–29): $B_s=R\otimes_{R^s}R(1)$; (3.6)
  $B_s\otimes B_s\cong B_s(1)\oplus B_s(-1)$; Theorem 3.14 (unique summand
  $B_w$) and Theorem 3.15 ($\varepsilon:\mathbb H\to[\mathrm{SBim}]$,
  $H_s\mapsto[B_s]$, with `ch` inverse and the graded Hom rank given by the
  standard pairing). The page's final theorem is the inverse (character)
  direction with $[B_i]\mapsto v(T_i+1)$ — the same isomorphism.
- EW §6.6–6.7 and §7: the cited labels exist and match the coverage's
  descriptions (Cor 6.8 light leaves; Thm 6.11 double-leaf basis of diagrammatic
  Hom; Cor 6.13 freeness; Lemma 6.24 Krull–Schmidt of $\mathrm{Kar}(\mathcal D)$;
  Thm 6.25 indecomposables; Cor 6.26–6.27 diagrammatic character; Thm 6.28
  equivalence; §7 "Double leaves span").
- Libedinsky `1702.00039` §4 in full (PDF pp. 20–28): §4.1 defines
  $B_s=R\otimes_{R^s}R(1)$ and $B_{srs}=R\otimes_{R^{s,r}}R(3)$; §4.3 proves
  $B_sB_rB_s\cong B_{srs}\oplus B_s$; Proposition 4.5/Theorem 4.6 give
  $[\mathcal B(S_3)]\cong H(S_3)$, $\langle B_w\rangle\mapsto b_w$. This is
  exactly the manifest's `def-the-rank-two-longest-…`,
  `thm-rank-two-…-decompositions` and the categorification theorem in the
  $S_3$ instance.
- Soergel `math/0403496`: Proposition 5.7 (p. 13), Proposition 5.9,
  Theorem 5.15 (the $\Delta$-flagged/$\nabla$-flagged Hom formula) and Satz 6.6
  with Lemma 6.13 ($\Gamma_yB\cong(\Gamma_{\le y}B)p_y$,
  $\Gamma_{\ge y}B\cong(\Gamma^yB)p_y$, extended to $\mathrm{add}\,\mathcal B$)
  — the exact locators the four Soergel-backed items cite.
- Elias–Khovanov `0902.4700` §3.4 (PDF pp. 28–33): the complete generator list
  and local relations for the type-A diagram category, including the 6-valent
  adjacent vertices and the three-colour $A_3$-type Zamolodchikov relation;
  Definition 3.9 and Claim 3.10 give the functor to bimodules with explicit
  generator images and verify they are bimodule maps. This backs
  `def-type-a-diagrammatic-…` and `lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules`.

Because the B page's counterexample is the one item whose *claim* a scope
review can cheaply falsify, I checked it independently rather than only its
source: $[\mathcal B(S_3)]\to H$ has $[B_s]\mapsto b_s=\underline H_s$ with
$b_s^2=(v+v^{-1})b_s$, and the KL basis has $b_sb_rb_s=b_{srs}+b_s$ (Libedinsky
§4.3 and the Hecke relations), so $b_sb_rb_s\neq b_rb_sb_r$; equivalently, in
the standard generators $v(T_s+1)$ the two triple products differ by
$v(T_s-T_r)\neq0$, while the common longest summand cancels. Since
$K_0^{\mathrm{split}}$ has the indecomposables as a $\mathbb Z[v^{\pm1}]$-basis,
$B_sB_rB_s\not\cong B_rB_sB_r$. The counterexample's premise is sound; the A
B-page pair is consistent.

Non-blocking bookkeeping observation: 11 items are not individually named in a
coverage row `item` field — A-page
`def-type-a-soergel-bimodule-for-a-simple-reflection`,
`lem-type-a-soergel-generators-are-finite-free-on-both-sides`,
`def-bott-samelson-bimodule-of-a-word`, `def-the-type-a-soergel-category`,
`def-type-a-standard-graph-bimodules-support-filtrations-and-character`,
`lem-type-a-support-filtration-multiplicities-are-intrinsic`,
`lem-type-a-soergel-frobenius-biadjunction`, `thm-the-type-a-soergel-hom-formula`,
`lem-distant-soergel-generators-commute`, `def-the-rank-two-longest-type-a-soergel-bimodule`,
and B-page `ex-hecke-quadratic-relation-from-the-soergel-square`. The covering
source regions are harvested (EW §§3.2–3.5, Soergel §§5–6, Libedinsky §4) and
every one of the 11 carries item-level section locators in the manifest, so the
omission gate passes and no claim is unsourced; only the row-to-item mapping is
incomplete. I do not treat this as a scope insufficiency. If the owner wants it
tidy, extending those coverage rows' `item` fields is coverage-file enrichment
(no new item, no scaffold change), for the 3b author or owner.

## Role in the library

- Prerequisites: six declared `requires` pages are `status: published`
  (`tensor-products-of-modules`, `symmetric-polynomials`,
  `braided-and-symmetric-monoidal-categories`,
  `permutation-statistics-inversions-and-eulerian-numbers`,
  `finite-weyl-invariants-bruhat-and-kostant-harmonics`,
  `preadditive-and-additive-categories-and-biproducts`); the seventh,
  `graded-bimodules-and-tensor-functors`, is in-run batch 14 at order 717 and its
  edge is recorded `verified` with the shift dictionary
  $M\{r\}_d=M_{d-r}=M(-r)_d$ checked against the consuming definition.
- Own dependencies: all 36 items' dependency ids resolve; every external id is a
  `status: published` item (`def-additive-category`,
  `def-bruhat-order-on-the-symmetric-group`, `def-multivariate-polynomial-ring-by-iteration`,
  `def-tensor-product-of-modules-by-generators-and-relations`,
  `def-the-idempotent-completion-of-a-preadditive-category`,
  `lem-finite-weyl-strong-exchange-and-deletion`,
  `thm-the-symmetric-group-has-the-coxeter-presentation`); the only in-run item
  edge is `def-graded-ring-module-bimodule-and-internal-shift`. No id collides
  with an existing `items/` file, none points at a B page or the Set-Theory
  catalogue, and `validate-plan` reports no forward reference or undeclared
  prerequisite.
- Consumers: the B page in-run; the planned `rouquier-complexes-and-categorical-braid-relations`
  (BG-17), which needs exactly $B_i$, two-sided finite freeness, the rank-one
  square, the rank-two decompositions and distant commutation; and the planned
  `soergel-intersection-forms-and-hodge-theory` (KL-2), which needs the standard
  type-A realization, graded Hom freeness, Krull–Schmidt/indecomposable labels,
  intrinsic support multiplicities and the multiplicative $\Delta/\nabla$
  characters. Every one of those interfaces is scaffolded on this page, and the
  KL track's §0 explicitly leaves precisely this material to BG-16.
- Deferrals: this pair is absent from the deferred-pairs and deferred-items
  records and from the Phase-3 published-defect ledger; no published item
  currently depends on either page (neither exists in `items/`). The only
  coverage deferrals are the A-page's diagrammatic higher-rank rows (destination:
  this same A page) and the B-page's link-homology/Hochschild rows (destination:
  the planned `hochschild-homology-and-triply-graded-link-homology`), which the
  destination check resolves.

## Checks run (actual results)

| Check | Result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-17.coverage.json --require-destination` | Pass — 2 pages, 36 harvested results, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage research/frontier-35-ten-categories-batch-17.coverage.json` | Pass — 8/8 fetch-verified, 8/8 resolved |
| Independent sha256/size/page re-verification of all 6 distinct PDFs | 6/6 stamps reproduced exactly |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK — acyclic declared order, no item cycles, forward references, B-page dependencies or unresolved ids (pre-existing `redundant-prereq` warnings concern other pages) |
| Dependency-resolution scan over the pair's 36 items | 0 missing; 8 published external suppliers; 1 in-run item edge + 1 page edge recorded `verified` |
| `node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase scope` (before recording) | This pair the only reported unclosed scope item |

## Uncertainty and what this review does not decide

- Scope only. Statement-level correctness and every proof route remain for the
  Step-3b author and Step 5 — in particular the double-leaves spanning argument
  (EW §7), Krull–Schmidt for $\mathrm{Kar}(\mathcal D)$ at $k=\mathbb Q$, the
  intrinsic-multiplicity lemma, the special Hom formula and the
  reflection-localization top-layer lemma, and the $n\le1$ trivial-category edge
  case. I verified the cited source statements and locators exist and say what
  the design says, not that the planned local proofs close.
- I re-read the load-bearing sections listed above; I did not re-audit every
  harvested row of EW §5 or §7, of Elias–Khovanov §5, or the German §6 end to
  end, and the structural coverage gate cannot certify harvest faithfulness.
- Published suppliers were checked for existence, status and the exact
  interfaces used here; their own proofs were not re-audited.
- The coverage-row naming observation and the two-lemma order swap above are
  recorded for the owner; neither is treated as a scope insufficiency, and I
  made no edit to fix either.
- Legitimacy of the two coverage deferrals rests on their destination pages
  remaining planned; if the owner later defers the Hochschild/link-homology
  destination, the B-page link-homology material needs re-homing (owner-level,
  not a defect of this pair).

Verdict: the planned definitions, results and examples cover the intended
subject of BG-16 adequately; decision `sufficient`.

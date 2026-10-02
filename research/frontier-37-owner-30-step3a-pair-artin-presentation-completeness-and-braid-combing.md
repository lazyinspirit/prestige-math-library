# Step 3a scope review — artin-presentation-completeness-and-braid-combing

- Run `frontier-37-owner-30`, batch 22, role alpha, label
  `step3a-pair-artin-presentation-completeness-and-braid-combing-4de31166cda70952`,
  covers `artin-presentation-completeness-and-braid-combing`.
- A page `artin-presentation-completeness-and-braid-combing` (order 739,
  category `braid-groups`, 8 items). B page
  `artin-presentation-completeness-and-braid-combing-examples` (order 740,
  3 items). Companion pointers agree A↔B; the B page requires only its A
  page and is a dependency leaf (no consumer anywhere in `plan-spec.json`).
- Decision: **sufficient**. Scope only — no item approval, no owner record,
  and no edit to any scaffold, manifest, coverage, plan or page.

## Evidence read

- `research/frontier-37-owner-30-batch-22.pages.json` (8 A + 3 B items with
  statements, explicit `deps`, `dependency_level` 0–6, proof strategies),
  `research/frontier-37-owner-30-batch-22.coverage.json` (one page entry
  keyed to the A page, four sources, 29 harvested rows),
  `research/frontier-37-owner-30-batch-22.notes.md`, and
  `research/frontier-37-owner-30-batch-22.cross-batch-dependencies.json`
  (10 review rows, all `open`).
- Prose design: `research/plan-braid-groups-track.md` BG-6, heading L375,
  page id L377, `Requires` L378–380, A table L382–391 (the eight designed
  ids), Examples section L393–401 (the three designed ids); track role
  table L44 ("noncircular completeness proof after the pure-braid tower");
  BG-1 seam L211–216 ("Injectivity is not inferred here; BG-6 proves it by
  an independent braid-combing kernel argument"); graph narrative L963–967.
- Plan contract: `research/plan-spec.json` rows 739/740 (empty item arrays,
  fixed `requires`); consumers of the A page: the B page, plus planned
  `the-artin-action-on-a-free-group` (order 743) and
  `oriented-links-braid-closures-and-markov-equivalence` (order 749, whose
  `def-markov-conjugation-and-stabilization-moves` deps on
  `cor-all-four-classical-braid-models-realize-the-artin-presentation`,
  design L590). No consumer requires the B page.
- Run records: `research/frontier-37-owner-30-scope-ledger.json` (pair at
  batch 22), `research/frontier-37-owner-30-alpha-step1-drift.md` L110–116
  (verdict `no-drift`, "the explicit conjugation identities still require
  checking"), `research/frontier-37-owner-30-drift-evidence.json` row 21
  (declared requires = the manifest triple), and all eleven
  `research/frontier-37-owner-30-step1-<item>.json` readiness records
  (11/11 present, every `decision: ready`). No owner decision exists for
  this pair: `research/frontier-37-owner-30-owner-authoring-direction.md`
  is absent and no Step-3a owner or review receipt exists.
- Published suppliers re-read in `items/`:
  `def-braid-group-by-the-artin-presentation` (n≥2 Artin presentation),
  `prop-the-artin-presentation-surjects-onto-geometric-braids` (surjectivity
  only, audited 2026-09-27),
  `thm-geometric-and-configuration-braid-models-are-canonically-isomorphic`,
  `prop-geometric-endpoint-permutation-equals-covering-monodromy`,
  `def-axiom-of-choice`, `thm-choice-implies-dependent-implies-countable-choice`.
  In-run suppliers exist as batch-21 items (12 A) and batch-20 items
  (`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`).
- Source re-verification at review time (2026-09-30): all four coverage URLs
  re-downloaded; byte counts and sha256_16 match the coverage fetch stamps
  exactly — González-Meneses 474454 B `8fef987df3601d1e` (45 pp.), Fox–Neuwirth
  Notre-Dame mirror 620379 B `8aa4194410d5e746` (9 pp.), Farb–Margalit v5.0
  3609750 B `46c4cc848134ba38` (509 pp.), Birman–Brendle survey 809077 B
  `22f52d9961a3f0fc` (91 pp.). I read GM §2.1 printed pp. 11–13 (PDF 12–14)
  and §3.1 printed pp. 19–22 (PDF 20–23) completely in the re-downloaded
  copy; FN §7–§8 printed pp. 122–126 in the mirror; FM §9.1.3 p. 256,
  §9.2 pp. 258–259 and §9.3 p. 261 in the re-downloaded draft.

## Scope against the prose design

- All 11 designed ids are present in the manifest — 8 A and 3 B, in design
  order, with the designed kinds; no additions, no drops. Every manifest
  statement implements its design row: A1 α/x words (GM's multiplication
  convention fixed, α_n=1, both displayed forms of x_i); A2 prefix insertion
  with the last-point positions j_k and j_0=j_m=n; A3 the six cases with the
  slide identity (3.2) and the index bounds k≤n−2; A4 the conjugation table
  in both orientations; A5 collection to W≡W_1W_2; A6 split-sequence
  uniqueness and the free-kernel basis under AC; A7 the induction with the
  n=1 base case and the explicit refusal to assume injectivity anywhere;
  A8 the four-model corollary tracking σ_i through the published
  configuration isomorphism and the batch-20 mapping-class scaffold.
- A6's clause (i) is the design's own L389 instruction ("Identify the x_i
  with the free kernel generators in PB_n≅F_{n−1}⋊PB_{n−1}"); the concrete
  conjugating identity to the standard generators A_{in} is a checked
  free-cancellation translation recorded in the batch notes, inside the
  designed route.
- `requires` agrees across the design (L378–380), `plan-spec.json` row 739,
  the manifest and the drift evidence: the three prerequisite pages, one
  published (BG-1) and two in-run scaffolds (batch 20/21).
- The non-circularity seam is preserved: the published BG-1 proposition
  supplies only the surjection φ, and A7's strategy records that no
  injectivity of any Artin presentation is assumed; the completeness route
  runs through the pure-braid tower, exactly as design L44/L211–216
  requires.
- Deliberate boundary, not omission: the second proof by cell complexes
  (GM §3.2, FN §§2–7 machinery) is recorded out-of-scope with a reason; the
  GFN §8 corollaries and GM's torsion-freeness are deferred to destinations
  that exist (batch-21 page; the published Garside page, which contains
  `thm-braid-groups-are-torsion-free-by-the-garside-lattice`). No part of
  GM §3.1 or of §2.1 that the proof uses is dropped from the scaffold.

## Source coverage

29 harvested rows: 8 `included`, 5 `inline`, 4 `already-published`,
5 `deferred` (3 to `pure-braids-fadell-neuwirth-and-asphericity`, 2 to
`garside-structure-normal-forms-and-the-center`), 7 `out-of-scope` with
specific reasons. `coverage-checklist --require-destination` reports 0
errors and only the low-yield warning (8/29), which my reading of GM §3.1
confirms is truthful: the proposition and its entire proof are harvested
row by row (presentation statement; α/x words; position bookkeeping;
prefix insertion; cases (1)–(6) including (3.2); the two conjugation
computations and the induced inverse table; collection; final split
paragraph with ι(F_{n−1}) freely generated by x_1,…,x_{n−1}), while the
remaining rows are the §1/§2 material owned by published or earlier pages.
FM §9.3's display a_{i,j}=(σ_{j−1}⋯σ_{i+1})σ_i²(σ_{j−1}⋯σ_{i+1})^{−1} is
the same word as the library's descending A_ij, so the B2 identification is
source-backed.

Independent plausibility check of the B items (review-only evidence, not an
item approval): the twelve-letter word of `ex-combing-a-four-strand-braid-word`
is trivial by the two braid relations, its tracked position sequence
4,3,2,2,3,4,4,4,4,4,4,4,4 and the twelve six-case reductions check out by
hand, and collecting with σ_2x_2^{−1}≡x_2^{−1}x_3^{−1}x_2σ_2 and
σ_2x_3^{−1}≡x_2^{−1}σ_2 reproduces the displayed W_1 (freely trivial) and
W_2 (trivial in B_3 by one three-strand relation). The n=3 identities
x_2=σ_2²=A_{23} and x_1=σ_2^{−1}σ_1²σ_2=A_{23}^{−1}A_{13}A_{23} hold by free
cancellation in the library's generator convention.

## Role in the library

- The pair closes the BG-1 surjectivity seam: it makes the Artin presentation
  a genuine presentation of the geometric braid group and, through A8,
  identifies it with the configuration and boundary-fixed mapping-class
  models. That is exactly what the planned consumers need — BG-8
  (`the-artin-action-on-a-free-group`, order 743) and BG-11 (order 749,
  including the Markov-stabilization definition that deps on the A8
  corollary).
- No duplicate exists: no published item proves presentation completeness,
  the published Garside page proves torsion-freeness/word problem for the
  presented group by the lattice route and has no forward reference to this
  pair, and the published BG-1 examples explicitly avoid assuming
  completeness.
- In-run dependencies: exactly 10 open cross-batch edges (recorded in
  batch-22's review file, `unreviewed_batches` empty) — 9 into batch-21
  (the free-kernel sequence, its splitting, the standard generators and
  their free-basis property) and 1 page-level edge into the batch-20
  mapping-class pair. These are supplier-side Step-3 review obligations,
  not scope gaps of this pair: this pair's route consumes precisely what
  those supplier designs promise, and their statements are already
  scaffolded and ready.

## Uncertainty and observations for the owner (not scope findings)

1. A6 clause (iii) invokes the standard inclusion s:B_{n−1}→B_n and purity
   preservation; no supplier states a stabilization lemma, so the authored
   proof must spell it out from the geometric definitions (batch-notes
   flag (a)). Proof-level obligation, not a scope omission.
2. A6's strategy mixes the conjugating words W_i with their free-group
   images (flag (b)), and the θ left-inverse free-basis argument should be
   re-read at item review (flag (c)); both are Step 3b obligations.
3. The 10 open cross-batch edges above must be closed by the supplier-side
   reviews before the pair's items can be certified; the scope decision
   here does not certify them.
4. The low-yield coverage warning is expected and truthfully explained.
5. Not judged here: proof correctness, statement-level source fidelity, AC
   bookkeeping, dependency minimality, or any item-level verdict — those
   are Step 3b/Step 5 obligations.

## Checks run

| Check | Actual result |
| --- | --- |
| `coverage-checklist --require-destination` on batch-22 coverage | exit 0: 1 page, 29 rows, 0 errors, 1 low-yield warning (explained above) |
| Design-to-manifest id diff (BG-6, L382–391 + L397–401) | 11/11 designed ids present, 0 missing, 0 extra |
| `requires` cross-check (design L378–380 / plan-spec 739 / manifest / drift evidence row 21) | identical three-page set |
| Four source URLs re-downloaded; bytes and sha256_16 vs fetch stamps | 4/4 exact match |
| Key locators re-read in full texts (GM §2.1, §3.1; FN §7–8; FM §9.1.3, §9.2, §9.3) | all present as claimed |
| Step-1 readiness records for the 11 items | 11/11 present, all `decision: ready` |
| `step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` | pair listed as `current scope review required`; decision recorded below |

## Scope decision

**sufficient** for `artin-presentation-completeness-and-braid-combing` at the
current pair scope hash: the 8 A and 3 B items realize the BG-6 prose design
item-for-item, the primary combing source is covered sentence by sentence
and all four sources are byte-verified, the deferrals and exclusions have
existing, owned destinations, and the page's library interfaces (published
BG-1 surjection, batch-20/21 scaffolds, published AC items) are present. No
enrichment or pair merger is needed, and no owner `proceed` is required for
this scope.

Scope receipt: `research/frontier-37-owner-30-step3a-review-artin-presentation-completeness-and-braid-combing.json`.
Next action: Step 3b may author this pair under this scope once the
supplier-side reviews close the recorded edges; the owner should read
observations 1–3 before or during authoring.

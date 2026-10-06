# Step 3a scope review — `lie-algebra-cohomology-and-kostants-nilradical-theorem`

- Run `frontier-39-analysis-30`; role alpha; label
  `step3a-pair-lie-algebra-cohomology-and-kostants-nilradical-theorem-21fa43822f15f449`.
- Pair: A `lie-algebra-cohomology-and-kostants-nilradical-theorem`
  (order 510.021) / B `lie-algebra-cohomology-and-kostants-nilradical-theorem-examples`
  (order 510.022), batch 25, category `lie-theory`. A has 13 scaffolded items,
  B has 5.
- Decision: **sufficient**. All 13 A items and all 5 B items of the RL-11
  design are present with the design's IDs; source coverage matches the
  scaffolded results and was re-verified; the full transitive prerequisite
  closure resolves with 0 missing ids, entirely inside the declared `requires`
  closure; the two recorded deferrals land on real in-run pages. No omission,
  no merger, no enrichment is required. One prerequisite-sourcing monitoring
  point (A8, below) stays with the owner/Step 3b; no unmet prerequisite was
  found, in the sense of a claim absent from both the published library and the
  scaffold.
- No prior scope receipt existed for this page (no owner and no reviewer row in
  `research/frontier-39-analysis-30-step3a-*`). No scaffold, item, page,
  coverage or owner record was edited by this review.

## Design comparison (A and B, item-for-item)

Controlling design: §RL-11 of `research/plan-representation-theory-lie-track.md`
(printed lines 1195–1262: A-page role paragraph, the reconciled proof
architecture, and the A/B tables). Drift: `drift-applied —
compact-lie-groups-maximal-tori-and-peter-weyl-theory` for this pair
(`research/frontier-39-analysis-30-alpha-step1-drift.md` L342–372), resolved by
owner resolution 3 (`research/frontier-39-analysis-30-step1-owner-resolution.md`
§3). No run-local owner authoring direction file exists (checked).

A page — all 13 designed rows minted with the design's ids: `prop-lie-algebra-cohomology-is-derived-invariants`,
`prop-h-zero-is-the-invariant-subspace`, `prop-a-normalizer-acts-on-lie-algebra-cohomology`,
`lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra`,
`thm-casselman-osborne-nilradical-cohomology-constraint`,
`def-inversion-set-of-a-weyl-group-element`,
`lem-extremal-weight-cochain-for-a-weyl-element-is-closed`,
`lem-kostant-laplacian-is-scalar-on-weight-components`,
`lem-each-kostant-extremal-harmonic-space-is-one-dimensional`,
`thm-kostant-nilradical-cohomology-theorem`,
`cor-kostant-cohomology-in-degrees-zero-and-top`,
`cor-kostant-euler-character-recovers-the-weyl-numerator`,
`prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class`.
The design's proof architecture is visible in the statements: the Casselman–Osborne
route (A4–A5) is retained as the independent central-character constraint, the
harmonic route (A7–A9) carries the theorem, the equality case is stated inside
A7 and its harmonic normalization inside A8, and no spectral sequence is built
(A13 compares formal characters after clearing the Verma denominator). No item
was added beyond the design inventory; A2 is the design-mandated restatement of
the published DG-29 `prop-zero-th-lie-algebra-cohomology-is-invariants` and
declares it. The owner's post-scaffold repairs are in the current statements
(A13: no cross-category K0 equality; A11: numerator sum computed from the
cohomology decomposition, BGG identity used only for the naming comparison).

B page — all five designed leaves present: `ex-kostant-n-cohomology-for-sl2`,
`ex-kostant-n-cohomology-for-the-trivial-sl3-module`,
`ex-degree-one-kostant-classes-correspond-to-simple-reflections`,
`cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical`,
`cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight`
(the last is the design's `ai-generated` row with `generation.role:
counterexample`). No A item depends on any B item, no B item is a dependency
target anywhere in the run, and the justifications match the design's "for"
column (sl2 signs/top degree; first rank-two check; degree-one ↔ simple
reflections; Whitehead hypothesis test; ρ-shift audit).

## Source coverage

- `research/frontier-39-analysis-30-batch-25.coverage.json`, re-checked
  2026-10-05: `coverage-checklist --require-destination` → 2 page(s), 46
  harvested results, 0 error(s), 0 warning(s); `source-fetch-check` → 6/6
  source records fetch-verified and 6/6 resolved; `source-backing` → 15
  authored `included` results, all backed; `url-sweep` → 4/4 live, 0 failed,
  0 documented drops. Every row carries an explicit disposition
  (included 33, deferred 4, out-of-scope 5, already-published 2, inline 2).
- I re-fetched all four documents on 2026-10-05; every byte count and
  `sha256_16` is identical to its `fetch_verified` stamp: OWTU thesis
  712251 B / `7669ac314cd77c57`; Woit 213855 B / `e24b37cbdeacf83b`;
  Etingof 4247073 B / `ffb09776bafa3fa5`; Goodman–Wallach 243925 B /
  `74d32b4976e46d2e`.
- Load-bearing results re-read in the fetched PDFs, at the coverage file's own
  locators: OWTU §3.2.2 `H^p(g,V)≅Ext^p_{U(g)}(C,V)` (printed p.68) and
  Props 3.2.7/3.2.10/3.2.11 (pp.69, 71); OWTU Theorem 3.3.1 (Casselman–Osborne,
  p.72) with its injective dimension-shifting proof; OWTU Theorem 3.4.1
  (Kostant, p.73) with `Φ⁺(w)={α>0: w⁻¹α<0}`, Lemmas 3.4.3–3.4.5 (pp.73–75)
  and Remarks 3.4.6(i)–(ii) (pp.76–77); Woit Theorem 1 and the four-approaches
  discussion (p.4) plus the derived-functor/Koszul description (p.2);
  Goodman–Wallach Lemma E.2.8 (Kostant's equality case, printed pp.24–25),
  Theorem E.2.9/Corollary E.2.10 (pp.26–27) and §E.2.6 Euler character
  (pp.27–28); Etingof §48.1 CE complex with coefficients and Prop 48.1
  (printed p.261 of the PDF). Every scaffolded result has a source home.
- The three source slips recorded at scaffold are real and were not copied:
  OWTU Lemma 3.4.4 prints "equality if and only if S = Φ⁺" (its own proof gives
  S = Φ⁺(w)); OWTU Remark 3.4.6(ii) prints `ω ∈ B^p` (the generator is a
  nonzero cocycle); Woit p.4 indexes by `wλ` while printing `wβ_j<0` (the
  consistent condition is `w⁻¹α<0`, as the scaffold uses).
- The one mismatch between sources and the scaffold is deliberate and disclosed:
  no read source proves the *cochain-level* Chevalley–Eilenberg Laplacian
  identity of A8. OWTU proves Kostant by cochain weight multiplicity plus
  Casselman–Osborne, and Goodman–Wallach proves a Casimir identity *on
  cohomology* (E.45 via Cor E.2.2). The A8 row's `sources` say exactly this
  ("Goodman–Wallach Lemma E.2.8 for equality; Woit p.4 for approach only"), and
  the missing local anticommutator computation is the Step-1-recorded authoring
  obligation (owner resolution 3). This is a proof obligation, not a scope
  omission: the item and its normalization were authorized, and Step 3b must
  write out the CAR normal ordering and root-string trace terms.

## Prerequisites and intended role

- Transitive closure of the 18 items: 2979 ids — 2961 published items on disk
  (all frontmatter `status: published`) and the 18 pair items themselves;
  **0 missing**. No supplier is an in-run draft, so no cross-batch dependency
  exists (batch-25 cross-batch file `[]`; the registry shows 0 edges touching
  batch 25).
- The A-page `requires` entries resolve to closure items: `harish-chandra-isomorphism-casimir-and-central-characters`
  (41 closure items), `the-bgg-resolution` (29), `semisimple-lie-algebras-cohomology-and-levi-theory`
  (33), `derived-functors` (24), `ext-and-balanced-resolutions` (17),
  `compact-lie-groups-maximal-tori-and-peter-weyl-theory` (23) all supply
  closure items. `spectral-sequences` and `double-complexes-exact-couples-and-convergence`
  supply none (see O1).
- Page-edge rule: I spliced the two manifest pages into a copy of
  `research/plan-spec.json` in `/tmp` and ran `validate-plan.mjs` against it.
  Exit 0; no `undeclared-prereq`, no cycles, no forward references, no B-leaf
  violation, no unresolved id for this pair. The only diagnostics for this page
  are 8 `redundant-prereq` WARNs (rule 17) on its declared `requires` list.
- Intended role confirmed from the planned library: the only page that depends
  on this A page is its B companion. Its own consumers are terminal in-run
  applications that live on other pages: OWTU §3.5.1 (Borel–Weil–Bott from
  Kostant) is deferred to `borel-weil-and-borel-weil-bott` (batch 23, which has
  `thm-borel-weil-bott`), and §3.5.2 (Weyl character formula) to
  `weyl-character-and-multiplicity-formulas` (batch 21, which has
  `thm-weyl-character-formula` and `lem-bgg-euler-character-gives-the-weyl-numerator`).
  RL-11 itself recovers only the numerator identity, matching the drift ruling.
- Unmet prerequisites: **none** under the dispatch's definition (absent from
  both published library and scaffold). The one candidate I examined is
  recorded next as a monitoring point, not a gap.

## Monitoring point (A8 compact-real-form sourcing; owner action if the citation route changes)

- Consuming item: `lem-kostant-laplacian-is-scalar-on-weight-components` (A8)
  begins "Choose a compact real form of $\mathfrak g$ with conjugation $\tau$"
  and cites `thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems`,
  `thm-compact-connected-lie-groups-are-classified-by-root-data` and
  `thm-lie-second-fundamental-theorem` (plus 507's unitarizability theorem).
- Required claim and hypotheses: for a finite-dimensional complex semisimple
  $\mathfrak g$, there is a real form $\mathfrak k_0$ with
  $\mathfrak k_0\otimes_{\mathbb R}\mathbb C\cong\mathfrak g$ whose Killing
  form is negative definite, together with the conjugation
  $\sigma(e_\alpha)=-f_\alpha$ normalizing root triples.
- Evidence: the closure contains **no** item stating this outright — the
  direct published statement is `thm-existence-of-a-compact-real-form`
  ("Every finite-dimensional complex semisimple Lie algebra has a compact real
  form: a real form $\mathfrak k_0$ whose Killing form $B|_{\mathfrak k_0\times\mathfrak k_0}$
  is negative definite"), which is homed on `real-forms-and-real-semisimple-lie-algebras`
  (order 509), and that page is **not** in this A page's declared `requires`
  closure (verified by closure walk: the item is not reachable). However, the
  ingredients *are* in closure: 507 realizes every reduced crystallographic
  root system by a compact connected semisimple group and supplies the root
  normalization $\sigma(e_\alpha)=-f_\alpha$
  (`thm-analytic-and-root-system-weyl-groups-agree`); DG-31 supplies
  `thm-isomorphism-theorem-for-complex-semisimple-lie-algebras`; DG-29
  supplies the integration theorem. So the construction is derivable inside
  the declared closure, and the scaffold does not depend on any unpublished or
  non-existent claim.
- Honest split: *confirmed* is that no closure item states compact-real-form
  existence; *uncertain* is which route Step 3b will take. If the author wants
  the published 509 statement directly, the owner must add
  `real-forms-and-real-semisimple-lie-algebras` to the A page's `requires`
  (a scope/plan change, owner decision); otherwise the author must prove
  existence locally, adding admissible deps already in closure
  (`thm-isomorphism-theorem-for-complex-semisimple-lie-algebras`,
  `thm-analytic-and-root-system-weyl-groups-agree`). I recommend the local
  route so the owner-approved `requires` list stays unchanged. No scaffold
  edit was made.

## Observations (no scope action)

- O1. The design's phrase "HA supplies derived-functor and spectral-sequence
  language" is only partly realized: the items consume the published Ext,
  balanced-resolution and injective-resolution machinery, but none invokes
  spectral sequences or double complexes — A13
  explicitly asserts no spectral sequence. The two unused page requirements
  are design reading-order declarations and raise only rule-17 WARNs.
- O2. `prop-h-zero-is-the-invariant-subspace` duplicates published DG-29
  `prop-zero-th-lie-algebra-cohomology-is-invariants` by design; it declares
  the published item and restates it in this page's convention. Recorded in
  the batch notes; not a defect and not scope loss.
- O3. The B rows `ex-kostant-n-cohomology-for-sl2` and
  `cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight`
  subscript the degree-one generator $v_{s\cdot\lambda}$ while using its
  weight $s\lambda=-m\omega$ in the displayed arithmetic; A7's convention is
  $v_{w\lambda}\in V_{w\lambda}$. The cex row glosses the notation ("the
  extremal vector $v_{s\cdot\lambda}$ ... (i.e. the weight $w\lambda=-m\omega$)"),
  so the content is unambiguous; Step 3b should align the subscripts.
- O4. The maximal mathematical risk in the pair is not scope but the A8
  cochain identity, for which no source reading exists (see Source coverage).
  It is a known, owner-authorized authoring obligation with a fixed target
  identity and normalization, so it does not affect the scope decision.

## Method

Read directly: `CLAUDE.md`; the RL-11 design and reconciliation block in
`research/plan-representation-theory-lie-track.md`; the batch-25 manifest,
coverage and notes; the plan-spec entries for this page and its `requires`;
the scope ledger; the step1 drift section for this pair; owner resolution 3;
the 18 item readiness records; and the published supplier statements cited
above (statements for the 507, 509, DG-29, DG-31 and RL-6 items). Ran:
`coverage-checklist --require-destination`, `source-fetch-check`,
`source-backing`, `url-sweep`, `manifest-deps`, `content-policy
--manifest-only`, `item-dependency-levels check`, a transitive dependency
closure walk with the repository loader, a page-edge check by splicing the
manifest into a copy of `plan-spec.json` and running `validate-plan.mjs`, and a
full source re-fetch with byte/sha256_16 comparison using `PyMuPDF` text
extraction for the locators above. Report: this file. Receipt:
`node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30
--page lie-algebra-cohomology-and-kostants-nilradical-theorem --decision
sufficient`.

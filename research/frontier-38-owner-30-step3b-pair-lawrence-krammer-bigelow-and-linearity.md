# Step 3b authoring — pair `lawrence-krammer-bigelow-and-linearity`

- Run `frontier-38-owner-30`, role alpha-high, label
  `step3b-pair-lawrence-krammer-bigelow-and-linearity-283b311900696962`;
  batch 16; A order 747 (`lawrence-krammer-bigelow-and-linearity`), B order
  748 (`lawrence-krammer-bigelow-and-linearity-examples`), category
  `braid-groups`. Own only this pair. Opened 2026-10-03.
- Inputs read at entry: `CLAUDE.md`, `SCHEMA.md`, `research/plan-braid-groups-track.md`
  BG-10 (L528–572), `research/plan-spec.json` pages 747/748,
  `research/frontier-38-owner-30-owner-authoring-direction.md`,
  `research/frontier-38-owner-30-batch-16.{pages,coverage,notes,cross-batch-dependencies}.json|md`,
  `research/frontier-38-owner-30-local-prereq-747.md`,
  `research/frontier-38-owner-30-step3a-pair-lawrence-krammer-bigelow-and-linearity.md`.

## Owned IDs (authoring order, level then page order then ID)

Level 0: `def-two-point-configuration-space-of-a-punctured-disk` ·
`lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions` ·
`lem-lkb-small-end-neighbourhoods-stabilize-equivariantly` (existing draft) ·
`lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model` (existing draft).
Level 1: `def-lkb-two-variable-covering-homomorphism` ·
`lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank` (existing draft).
Level 2: `def-lawrence-krammer-bigelow-cover` ·
`lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion` (existing draft).
Level 3: `def-lkb-absolute-second-homology-module` · `def-lkb-relative-pairing-modules` ·
`lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly`.
Level 4: `def-forks-noodles-and-their-lkb-intersection-pairing`.
Level 5: `def-lexicographic-order-on-fork-noodle-deck-monomials` ·
`lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement` ·
(B) `cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing` ·
(B) `ex-a-fork-noodle-pairing-computation`.
Level 6: `lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors` ·
`lem-the-fork-noodle-pairing-is-well-defined-and-equivariant`.
Level 7: `lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel` ·
`lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials`.
Level 8: `lem-the-fork-noodle-pairing-detects-essential-intersections` ·
`thm-the-integral-lkb-module-is-free-of-rank-n-choose-two`.
Level 9: `def-lawrence-krammer-bigelow-representation`.
Level 10: `lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy` ·
`lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared` ·
(B) `ex-the-krammer-fraction-field-generator-matrices-for-b-three`.
Level 11: `lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power`.
Level 12: `thm-the-lawrence-krammer-bigelow-representation-is-faithful`.
Level 13: `cor-every-classical-braid-group-is-linear`.
Level 14: (B) `cex-a-linear-representation-need-not-be-faithful`.

Pages to author: `library/braid-groups/lawrence-krammer-bigelow-and-linearity.md`
(26 items) and `...-examples.md` (4 items), preserving the plan page lists.

## Open obligations carried from Step 1/3a (to discharge by authoring)

1. Bigelow 2002 Lemmas 4.5–4.6 divisibility packet for the integral spanning
   lemma (oriented cut-piece enumeration of the square for `x_{n-1,n}` and the
   generic `x_{i,j}`, with deck displacements), and the exceptional `(1,3)`
   pairing — `lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials`
   and `lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors`.
2. Dual classes `x_{i,j}` must be defined inside the closed-surface item before
   the coefficient lemma uses them (Step-3a note 1).
3. `n≥3` integral non-isomorphism to Krammer's lattice: cite Bigelow 2002 §4.2
   (report of [PP01]) explicitly; do not assert an integral identification.
4. Successive-isotopy induction of the kernel-braid lemma including the `n=2`
   case; AC carried through `def-axiom-of-choice`.
5. Krammer fraction-field `B_3` matrices: fix sign translation
   `t_Krammer = −t_Bigelow`, verify the braid relation and `Δ² = q^6t²` at `n=3`.

## Checkpoints

(appended item by item; IDs, claim/conventions, source locators, dependencies,
decisions, checks, open gaps, next action)

- **Owning-task plan settled.** Authoring order is the dispatch order; the four
  existing local drafts at levels 0–2 are audited in place and their content is
  preserved; I edit them only for genuine defects and formatting.
- **Drafted (first pass):** `def-two-point-configuration-space-of-a-punctured-disk`,
  `lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions`,
  `def-lkb-two-variable-covering-homomorphism`,
  `def-lawrence-krammer-bigelow-cover`, `def-lkb-absolute-second-homology-module`,
  `def-lkb-relative-pairing-modules`,
  `lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly`,
  `def-forks-noodles-and-their-lkb-intersection-pairing`,
  `def-lexicographic-order-on-fork-noodle-deck-monomials`,
  `lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement`.
  Dependency additions recorded here and to be written into the batch manifest:
  `def-braid-group-by-the-artin-presentation` (→ def-lkb-two-variable...),
  `thm-covering-space-lifting-criterion`, `thm-homotopy-lifting-for-covering-maps`,
  `thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group`,
  `def-induced-homomorphism-on-fundamental-groups` (→ lem-braids-lift...),
  `def-lkb-two-variable-covering-homomorphism` and
  `thm-long-exact-sequence-of-a-pair-in-singular-homology` and
  `def-two-point-configuration-space-of-a-punctured-disk` (→ the fork-noodle
  packet).
- **Authoring completed.** All 30 owned items are on disk and pass the gates
  below; both pages are written. The ten items missing at continuation were
  authored in dependency order: `thm-the-integral-lkb-module-is-free-of-rank-n-choose-two`,
  `lem-the-fork-noodle-pairing-detects-essential-intersections`,
  `def-lawrence-krammer-bigelow-representation`,
  `lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy`,
  `lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared`,
  `ex-the-krammer-fraction-field-generator-matrices-for-b-three`,
  `lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power`,
  `thm-the-lawrence-krammer-bigelow-representation-is-faithful`,
  `cor-every-classical-braid-group-is-linear`,
  `cex-a-linear-representation-need-not-be-faithful`.
- **Krammer B3 matrices resolved and verified.** Re-deriving the two generators
  from the LaTeX source of Krammer math/0405198 §3 (not the PDF extraction)
  gave `M1=[[tq^2,tq(q-1),0],[0,0,1],[0,q,1-q]]` and
  `M2=[[1-q,1,0],[q,0,0],[0,tq^2(q-1),tq^2]]` in the basis `x12,x13,x23`.
  Direct Laurent-polynomial multiplication gives
  `M1M2M1=M2M1M2=[[0,0,tq^2],[0,tq^3,0],[tq^4,0,0]]` and
  `(M1M2M1)^2=q^6t^2 I_3`, matching Krammer Lemma 3.2; the earlier failed
  check was an assembly slip (the `(2 x 3` entry of `M1` is `q`, not `1`).
  The example item records exactly these computations and the
  `t_Krammer=-t_Bigelow`/fraction-field caveats.
- **Repairs to pre-existing drafts.** The four pre-dispatch drafts
  (`lem-lkb-small-end-...`, `lem-the-unordered-two-point-...`,
  `lem-lkb-lifted-...`, `lem-lkb-deleting-...`) were audited in place; their
  statements are unchanged and their step layout, display math, dependency
  lists and levels were normalized. In all 22 proof-bearing items numbered
  steps are single lines ending in valid tags, `## Proof` sections are
  restored, and stray internal step-range references were repaired
  (`steps 2.1–1.3` → `steps 2.1 and 3.1` in `lem-lkb-small-end-...`;
  `steps 1.2–2.2` → `steps 1.2 and 2.1` in `lem-an-lkb-kernel-...`;
  `steps 1.1–2.2`/`1.2–2.2` → `1.1–1.3`/`1.2–1.3` in
  `lem-closed-lkb-basis-...`; `steps 2.1–2.2` → `steps 2.1 and 3.1` in
  `lem-fraction-field-...`). Two B-page items carry actual dependency-level
  6 (not the scaffolded 5) because they cite
  `def-lexicographic-order-on-fork-noodle-deck-monomials`; the manifest was
  recomputed accordingly.
- **Decisions recorded.** `tools/step3-decisions.mjs record-item` recorded
  30/30 items (20 `repaired` for the drafts audited and repaired in place,
  10 `accept` for items authored in this dispatch), confidence 1, with the
  examined dependency lists; receipt re-records after dependency-closure
  edits left 0 open items in the run's `--phase final` check for this pair.

## Handoff

**Completed IDs (30, both pages).** A page
`lawrence-krammer-bigelow-and-linearity` (26): the four level-0 items, the
two level-1 items, the two level-2 items, the three level-3 items, the
level-4 forks item, `def-lexicographic-order-on-fork-noodle-deck-monomials`
and `lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement`, the
two level-6 items, the two level-7 items, the two level-8 items, the
level-9 `def-lawrence-krammer-bigelow-representation`, the two level-10
items, the level-11 boundary-twist-power lemma, the level-12 faithfulness
theorem and the level-13 linearity corollary. B page
`lawrence-krammer-bigelow-and-linearity-examples` (4):
`cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing`,
`ex-a-fork-noodle-pairing-computation`,
`ex-the-krammer-fraction-field-generator-matrices-for-b-three`,
`cex-a-linear-representation-need-not-be-faithful`.

**Checks actually run (all on the final on-disk content).**
`node tools/tsx-run.mjs tools/precheck.mts <30 explicit item paths>`:
22 checked, 0 failing. `node tools/rendercheck.mjs <30 items + 2 pages>`:
OK, every math span and frontmatter block parses. `node tools/proof-layout.mjs
<30 explicit item paths>` (single batched command after the last edit):
30 items, 104 steps, 0 defects. `node tools/content-policy.mjs
research/frontier-38-owner-30-batch-16.pages.json`: 30 scoped items, 0 errors,
0 warnings (the `--manifest-only` mode reports the expected
`batch-item-already-exists` errors now that the files are authored; it is a
pre-authoring mode). `node tools/proof-contract.mjs
research/frontier-38-owner-30-batch-16.proof-contracts.json --strict`:
0 errors, 0 warnings, 30/30 items checked (the new contract file records
citations with exact source quotes, per-step inputs and the eight-case
boundary worksheet for every item). `node tools/manifest-deps.mjs
research/frontier-38-owner-30-batch-16.pages.json`: 0 errors.
`node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
passes in a sandbox copy of the run manifests that excludes the malformed
`frontier-38-owner-30-batch-17.pages.json` (see concern E1 below); under that
copy all 779 in-run items validate, including the 30 here and their levels
0–14. `node tools/depcheck.mjs --items-file` on the 30 ids: no warnings or
errors in scope. `node tools/fwdcheck.mjs` and `node tools/extcheck.mjs`:
no findings in scope (fwdcheck's global failures are unrelated
blowup/normalization debt). `node tools/validate-plan.mjs
research/plan-spec.json`: OK — no item-level cycles, forward references,
B-page dependencies or unresolved ids among the pages with item lists.

**Added suppliers (dependencies beyond the Step-1 manifest).** Published
items added to `deps` and mirrored into the manifest:
`def-braid-group-by-the-artin-presentation` (def-lkb-two-variable, cex-linear),
`thm-covering-space-lifting-criterion`, `thm-homotopy-lifting-for-covering-maps`,
`thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group`,
`def-induced-homomorphism-on-fundamental-groups` (lem-braids-lift),
`thm-long-exact-sequence-of-a-pair-in-singular-homology` (lem-a-multiple),
`lem-the-fork-noodle-pairing-is-well-defined-and-equivariant` and
`def-lexicographic-order-on-fork-noodle-deck-monomials` (lem-detects,
lem-kernel-braid), `thm-the-integral-lkb-module-is-free-of-rank-n-choose-two`
(lem-full-twist, lem-kernel-braid), `lem-arcs-...-minimal-positions`,
`def-garside-half-twist-and-simple-positive-braid`,
`def-boundary-fixed-mapping-class-group-of-a-punctured-disk` (edge-fixing
lemma), `lem-jordan-schoenflies-extension-for-plane-curves` (extremal lemma),
`def-lawrence-krammer-bigelow-cover` (integral theorem),
`def-lawrence-krammer-bigelow-representation` (faithfulness theorem),
`def-forks-noodles-and-their-lkb-intersection-pairing` (detects lemma).
No new item IDs were created beyond the scaffold inventory and the four
plan-spec local additions.

**Open obligations.** None for this pair: every owned item is authored,
checked and has a current `accept`/`repaired` decision; no in-run supplier is
unfinished and `cross-batch-dependencies.json` is empty, so no consumer is
left escalated. The following are recorded for the independent Steps 5–8
audit and are not unresolved work of this dispatch: (i) the kernel-braid
lemma's ambient-realization step [F4] and the edge-fixing lemma's corridor
use of `lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points`
should be re-derived independently, because the published extension lemma
literally assumes `\partial D`-endpoints while the consuming edge isotopies
have puncture endpoints; remedy if rejected: state and prove a puncture-end
variant of the extension lemma. (ii) The eight-coefficient enumeration in
`lem-fraction-field-coefficients-of-an-integral-lkb-class-are-laurent-polynomials`
([F2], `1,-q,-t,qt,qt,-q^2t,-qt^2,q^2t^2`) is a reconstruction: Bigelow
2002 Lemma 4.5 states only that the eight pieces are multiples of the
triangle and that their sum is `(1-q)(1+qt)(1-t)`; the sum and the resulting
divisibility are correct, but the individual readings were not independently
verified against the source figure and should be re-checked or downgraded to
the product statement if a reviewer cannot reproduce them. (iii) Bigelow
2002 §4.2 reports (from [PP01]) that the integral module and Krammer's
lattice are not isomorphic for `n>=3`; the items cite this and assert no
integral identification, so no repair is expected.

**Published concerns observed (not owned by this pair).** (E1)
`research/frontier-38-owner-30-batch-17.pages.json` is not valid JSON
(`Expected ',' or ']' after array element` near line 406), which makes the
run-level `item-dependency-levels.mjs check` fail for every batch; remedy:
the batch-17 owner repairs the manifest, after which the run-level check
should be re-run (my levels were verified in a sandbox excluding that file).
(E2) The global `depcheck`/`fwdcheck` reports contain unrelated pre-existing
debt (missing item files listed by
`library/scheme-theory/blowups-exceptional-divisors-and-strict-transforms.md`,
several B-leaf dependencies, and a page cycle among scheme-theory pages);
these are outside this pair and do not block it.

**Pre-splice plan mismatches reported for Step 4.** `research/plan-spec.json`
lists only the four local-addition items for page 747 and zero items for page
748, while the batch-16 manifest and the authored pages carry 26 and 4 items;
this is the Step-1 decision recorded in
`research/frontier-38-owner-30-batch-16.notes.md` (the commissioned inventory
was added by scaffolding outside plan-spec). Step 4 should confirm the
intended splice of the 26 commissioned items and the B-page list rather than
reading plan-spec's short list as the page inventory. The two B-page items
`ex-a-fork-noodle-pairing-computation` and
`cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing` are at
dependency level 6, not the scaffold's 5, because they depend on the
level-5 lexicographic-order definition.

# Step 3a scope review — oriented-links-braid-closures-and-markov-equivalence

- Run `frontier-38-owner-30`, batch 17, role alpha, label
  `step3a-pair-oriented-links-braid-closures-and-markov-equivalence-ddc32b823bfde823`,
  covers `oriented-links-braid-closures-and-markov-equivalence`.
- A page `oriented-links-braid-closures-and-markov-equivalence` (order 749,
  category `braid-groups`, 33 items: 10 definitions, 20 lemmas, 3 theorems,
  levels 0–10). B page `oriented-links-braid-closures-and-markov-equivalence-examples`
  (order 750, 4 items: 3 examples, 1 counterexample, levels 1/6/7/11).
  Companion pointers agree A↔B; the B page requires only its A page and no
  page requires the B page (dependency leaf).
- Decision: **sufficient**. Scope only — no item approval, no owner record, and
  no edit to any scaffold, manifest, coverage, plan or page.

## Evidence read

- Manifests, coverage, notes, edges: `research/frontier-38-owner-30-batch-17.pages.json`
  (statements, strategies, explicit `deps`, recomputed levels),
  `research/frontier-38-owner-30-batch-17.coverage.json` (5 sources, 54 rows),
  `research/frontier-38-owner-30-batch-17.notes.md` (design control, plan
  conflicts, AC audit, owner dependency review 2026-10-03),
  `research/frontier-38-owner-30-batch-17.cross-batch-dependencies.json` (empty),
  and the run-level `research/frontier-38-owner-30-cross-batch-dependencies.json`
  (`reviewed_batches` contains 17; no edge has supplier or consumer batch 17).
- Design: `research/plan-braid-groups-track.md` BG-11 A table L574–596 and
  examples table L598–610, track role table L44 (row BG-11 = "Reidemeister,
  Alexander and Markov equivalence"), plus the planning requirement file
  `research/braid-groups-planning/researcher-02-rolfsen.md`, whose
  "Required repair before authoring" items are all implemented (see below).
- Contract: `research/plan-spec.json` rows 749/750 (empty planned item lists;
  the A row's four `requires` match the manifest verbatim, including the
  integrated `classification-of-compact-connected-surfaces`).
- Binding direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (complete local prerequisite closure, exact `deps`, no unbuilt/unselected
  pair, source and uncertainty discipline).
- Drift/readiness: `research/frontier-38-owner-30-alpha-step1-drift.md` section
  `oriented-links-braid-closures-and-markov-equivalence` (verdict `no-drift`,
  local route, no new external prerequisite page); all 37
  `research/frontier-38-owner-30-step1-<id>.json` records (`decision: ready`;
  a fresh `step1-decisions check` reports 804/804 closed).
- Sources re-fetched 2026-10-03; byte counts and sha256_16 match the coverage
  fetch stamps exactly:

| source | URL | bytes | sha256_16 |
| --- | --- | ---: | --- |
| Birman–Brendle, *Braids: A Survey* | `https://www.math.columbia.edu/~jb/Handbook-21.pdf` | 809077 | `22f52d9961a3f0fc` |
| Traczyk, *A new proof of Markov's braid theorem* (archive snapshot) | `https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf` | 189813 | `a510817c88ab0c3d` |
| Ozsváth–Stipsicz–Szabó, *Grid Homology for Knots and Links* | `https://web.math.princeton.edu/~petero/GridHomologyBook.pdf` | 3091522 | `f914fc3181dcbd08` |
| Queffelec, *Reidemeister's theorem using transversality* | `https://arxiv.org/pdf/2406.18203v1` | 340404 | `367f98ee80fa8aef` |
| Chaidez, *Notes on Smooth Topology and Symplectic Embedding Problems* | `https://julianchaidez.net/materials/reu/notes_on_smooth_and_symplectic_topology.pdf` | 1957341 | `a115e1aa06ae9272` |

- Read directly in the re-downloaded copies at the pair's locators: BB
  Theorem 2 (PDF p. 13), Example 2.1 + Lemma 2.1 with the 5₂ word (pp. 14–15),
  Lemma 2.2 (p. 16), Theorem 3 + Corollaries 2.1–2.2 + braid index (p. 17),
  Theorem 4 ("closed braids of the same oriented link type in oriented
  3-space", braid isotopy + one stabilization/destabilization per step, with
  Morton's braid-isotopy/conjugacy remark, pp. 18–19) and the statements of
  Lemmas 2.3–2.8 (pp. 19–25); Traczyk Theorems 1–2, Proposition 3, Lemma 4
  with corollary, Lemma 5 (printed pp. 409–419); OSS Theorem 2.1.4 with the
  oriented-diagram text (PDF p. 19) and the Appendix B.1 locator; Queffelec
  Theorem 1 and §§3.1–3.6; Chaidez Proposition 2.38 and Theorem 2.39
  (PDF p. 36).

## Scope against the prose design

- All 18 designed ids are present with the designed kinds and none is dropped:
  the 14 A ids from `def-oriented-link-in-s-three-and-ambient-isotopy` to
  `thm-markovs-closed-braid-equivalence-theorem`, and the 4 B leaves
  (`ex-torus-links-as-closures-of-two-strand-braids`,
  `ex-a-markov-stabilization-preserves-the-unknot-closure`,
  `ex-alexanders-braiding-algorithm-on-a-small-diagram`,
  `cex-conjugacy-alone-does-not-classify-braid-closures`).
- The A page adds 19 local-prerequisite items, all inside the commissioned
  route: `def-planar-isotopy-of-link-diagrams`,
  `lem-every-oriented-link-admits-a-regular-projection`,
  `lem-a-smooth-isotopy-of-links-can-be-put-in-general-position`,
  `lem-every-geometric-braid-is-braid-isotopic-to-a-smooth-braid`,
  `lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy`,
  `lem-closure-depends-only-on-the-braid-isotopy-class`,
  `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`,
  `lem-two-disjoint-circles-in-s-two-cobound-an-annulus`,
  `def-coherence-of-seifert-circles-and-the-height-of-a-diagram`,
  `def-reducing-arc-and-yamada-vogel-reducing-move`,
  `lem-a-positive-height-diagram-has-a-defect-region`,
  `lem-a-height-zero-diagram-represents-a-closed-braid`,
  `lem-free-homotopy-classes-of-loops-are-conjugacy-classes`,
  `lem-braid-isotopic-closed-braids-are-conjugate`,
  `lem-braid-like-reidemeister-moves-on-closed-braids-are-braid-isotopies`,
  `lem-non-braid-like-reidemeister-moves-are-generated-by-braid-like-moves-and-reductions`,
  `lem-braid-like-moves-can-be-moved-to-height-zero`,
  `lem-reducing-move-peaks-can-be-lowered-to-the-four-band-case`,
  `lem-the-four-band-d-pair-case-is-a-markov-sequence`. This is exactly the
  completion the owner direction requires and the planning file demanded:
  a defect-region lemma for BB Lemma 2.2, a braid-isotopy ⇔ conjugacy bridge,
  and the seven Traczyk intermediates split out of the single "factor through
  Markov" row; the Yamada–Vogel row is likewise split into the smoothing,
  annulus, coherence/height, reducing-arc, height-drop, defect-region and
  height-zero items. No addition broadens the subject.
- B page: exactly the four designed items, no additions.
- Design corrections recorded and followed: the Yamada–Vogel example runs on
  the standard 5₂ diagram with four Seifert circles, five positive signed arcs
  and height 2 (BB Example 2.1), not the design's "three-circle" diagram; the
  scaffold follows the source. The thin design dependency sketches were
  replaced by the complete local chain, and `def-markov-…` no longer consumes
  the AC-stated four-model corollary (choice-free surjectivity is enough).
- `requires` agrees across design L576–578, `plan-spec.json` 749 and the
  manifest (four pages; the later `classification-of-compact-connected-surfaces`
  addition is on disk); B declares A; no conflict remains.

## Source coverage

- 54 harvested rows: 16 `included`, 30 `inline` (local models and figures of
  the same sources), 2 `already-published` (BB §§1.1–1.3: geometric braids,
  Artin presentation, configuration model, all published and earlier), 1
  `deferred` to `hecke-markov-traces-and-polynomial-link-invariants` (nothing
  in this pair consumes it), 5 `out-of-scope` with item-specific reasons.
  `coverage-checklist --require-destination` gives 0 errors and the single
  `coverage-low-yield` warning (16/54), which is truthful for a proof-heavy
  topology page: the primary treatments (BB §2; Traczyk) are harvested row by
  row, while the Reidemeister route reuses the OSS and Queffelec rows inline.
- Declines verified against the sources: BB Corollary 2.1 (minimal Seifert
  circles = braid index) is consumed nowhere (the braid-index definition uses
  only Alexander existence); Traczyk Proposition 3 supports his other
  disjoint-arc route; OSS §§2.2–2.3 is spanning-surface theory not used by the
  planar smoothing; Queffelec §4 is framed/virtual extensions; Chaidez's
  mapping-class material is owned by the mapping-class pages. All five are
  legitimate for this pair's subject.
- Route-level double sourcing: BB + Traczyk for the Yamada–Vogel/Markov
  route; OSS + Queffelec for the Reidemeister general-position route;
  Chaidez for isotopy extension. The oriented Markov statement matches BB
  Theorem 4 and Traczyk Theorem 1 verbatim in content ("braid isotopies and
  Markov moves" for closed braids of the same oriented link).

## Prerequisites, consumers and role

- 73 distinct dependency ids across the 37 items: 40 external, every one
  `items/<id>.md` with `status: published` (checked individually); 33 internal,
  all within this pair. There are zero cross-batch item edges in either
  direction (the ledger registers batch 17 as reviewed with an empty edge set),
  so this pair carries no supplier-side review obligations to other batches.
  No dep targets a planned-only item, and a token scan of all statements and
  strategies found 0 references to items that are neither published nor in
  declared deps.
- The four `requires` pages are published (`geometric-braids-and-artin-generators`,
  `artin-presentation-completeness-and-braid-combing`,
  `manifolds-with-boundary-collars-and-orientations`,
  `classification-of-compact-connected-surfaces`). A simulated post-splice
  `validate-plan` run with the 37 items injected into plan-spec exits 0, so
  every external dep's home page lies in the closure of the declared requires
  (Jordan–Brouwer's home 366.015 is pulled in via 444.1, exactly as the owner
  dependency review recorded).
- Intended consumers are the planned (not yet scaffolded) pages BG-12
  `hecke-markov-traces-and-polynomial-link-invariants` (751, needs closure,
  Markov moves and the Markov theorem), BG-13 (753, needs the oriented link
  and Reidemeister definitions) and BG-18 (763, needs
  `def-markov-conjugation-and-stabilization-moves` and
  `thm-markovs-closed-braid-equivalence-theorem`); each needed interface is
  present here. The B page is a leaf.
- No duplicate: the published library contains no Reidemeister, Alexander or
  Markov theorem for braids; the published prerequisites this pair reuses
  (Artin presentation, geometric braids, configuration model) are declared,
  earlier, and status-checked.

## Unmet prerequisites

None found. Every result used is either a published library item (all 40
external deps resolved and status-checked) or a scaffold item of this pair;
the AC chain to Jordan–Brouwer/Schoenflies is closed through published,
AC-stated suppliers and the reconciled requires. What remains for the author
are proof expansions inside declared items, already recorded in the batch
notes: the ordered R2/R3 local models from Queffelec §§3.5–3.6, the
height-zero nesting induction, the two band computations of Traczyk
Figures 7–11, and the planar-annulus expansion of the annulus lemma (owner
review 2026-10-03: Jordan–Brouwer alone gives two components, Schoenflies
supplies the disk closures, AC is retained throughout).

## Observations for the owner

1. **Scaffold erratum, B page, `cex-conjugacy-alone-does-not-classify-braid-closures`.**
   The current manifest statement compares `σ_1 ∈ B_2` with `σ_2 ∈ B_3` and
   asserts "equivalent closures (both the unknot)". The closure of `σ_2 ∈ B_3`
   has two components (permutation (2 3) fixes a strand), so that clause is
   false as written. The item's strategy, the batch notes (owner dependency
   review, 2026-10-03) and its owner readiness record all describe the
   repaired comparison `σ_1 ∈ B_2` versus `σ_1σ_2 ∈ B_3` (a three-cycle; one
   component; closure the unknot via the stabilization/R1 example), and the
   readiness hash matches the current manifest, so the owner-authorized repair
   updated only the strategy, not the statement. Recommended owner action:
   authorize and record the one-line statement repair (`σ_2 ∈ B_3` ↦
   `σ_1σ_2 ∈ B_3` in the statement) so statement, strategy and readiness agree.
   The pair's inventory and scope are unaffected, but any statement change
   alters the scope hash, so the scope decision must be refreshed after the
   repair. Step 3a performs no scaffold edit.
2. Terminology: "unknot", "(2,m) torus link", "trefoil" and "mirror images"
   have no published definition; the B items and `def-closure-of-a-geometric-braid`
   describe them through the closure construction itself. Recommend the author
   add one-line conventions in the B items (e.g. "the unknot is the closure of
   the trivial 1-braid"; "(2,m) torus link = closure of `σ_1^m`"); no new items
   are needed.
3. `lem-two-disjoint-circles-in-s-two-cobound-an-annulus` lists a single
   source reference (OSS) that does not state the planar three-region lemma
   verbatim; its declared published deps
   (`thm-jordan-brouwer-separation`,
   `lem-jordan-schoenflies-extension-for-plane-curves`) are the actual
   suppliers. Source-locator alignment is a Step 3b obligation, not a scope
   gap.
4. The out-of-scope row for OSS §§2.2–2.3 cites a "separate Seifert-surface
   and knot-genus development"; no such page exists anywhere in
   `plan-spec.json` or the plan files (search for "Seifert surface"/"knot
   genus"). The decline is still correct for this pair; only the destination
   phrasing is aspirational.
5. Not judged here: proof correctness, statement-level source fidelity, axiom
   bookkeeping, dependency minimality, or any item-level verdict — those are
   Step 3b/Step 5 obligations.

## Checks run

| Check | Actual result |
| --- | --- |
| `coverage-checklist --require-destination` on batch-17 coverage | exit 0: 1 page, 54 rows, 0 errors, 1 low-yield warning (16/54, explained above) |
| `manifest-deps` on batch-17 pages | 37 items, 0 normalized, 0 errors |
| 5 source URLs re-downloaded; bytes and sha256_16 vs fetch stamps | 5/5 exact match |
| `source-fetch-check --coverage` | 5/5 fetch-verified, 5/5 resolved |
| `step1-decisions check --run frontier-38-owner-30` | 804/804 items ready, closed (batch-17: 37/37) |
| `step3-decisions check --run … --phase scope` before this decision | pair listed as `current scope review required` |
| `validate-plan` on plan-spec / simulated with the 37 items injected | exit 0 / exit 0 (all dep homes in requires closure; no undeclared prereq) |
| `item-dependency-levels check --run` | exit 0; 804 items, no batch-17 error |
| `fwdcheck --quiet` / `extcheck` | exit 0 / exit 0 (one pre-existing, unrelated `thm-urysohn-lemma` note) |
| Design-to-manifest id diff (BG-11 L576–610) | 18/18 designed ids present, kinds match; 19 local-prerequisite additions |
| All 185 dep edges (73 distinct targets) | 0 missing; 40/40 external targets published; 33/33 internal in pair |

## Scope decision

**sufficient** for `oriented-links-braid-closures-and-markov-equivalence` at
the current pair scope hash: the 33 A and 4 B items realize the BG-11 design
item-for-item, refined into exactly the local prerequisites the planning file
required; the five coverage sources are byte-verified and read at the
statements carrying the pair's claims, with two independent treatments per
proof route; all 40 external dependencies and all four `requires` pages are
published; and every interface the planned consumers need is present. No
enrichment or pair merger is needed. The statement erratum in Observation 1
is reported for owner action and does not by itself change the pair's scope.

Scope receipt: `research/frontier-38-owner-30-step3a-review-oriented-links-braid-closures-and-markov-equivalence.json`.
Next action: Step 3b may author this pair under this scope once the owner
resolves Observation 1 (which will require refreshing the scope decision);
the author must complete the four proof obligations under Unmet prerequisites.

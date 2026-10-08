# Step 3a scope review — A/B pair `coxeter-presentations-exchange-and-reduced-word-theorems`

Run: `frontier-42-coxeter-32` · role: alpha · batch 2 · design label HH-11 · orders 1708/1709
A page: `coxeter-presentations-exchange-and-reduced-word-theorems` · B page: `coxeter-presentations-exchange-and-reduced-word-theorems-examples`

**Decision: `sufficient`** — scope only. No item approval, no owner record, no scaffold edit.

## Inputs read

- Manifests/evidence: `research/frontier-42-coxeter-32-batch-2.pages.json` (both pages, all 11
  items: statements, strategies, deps, sources), `...-batch-2.coverage.json`, `...-batch-2.notes.md`,
  `...-batch-2.cross-batch-dependencies.json`, and the merged `...-cross-batch-dependencies.json`
  (235 rows touching this pair, every one reviewed).
- Design: `research/plan-hopf-hecke-algebras-track.md` §HH-11 (L321–341);
  `research/hopf-hecke-scaffold/inventory.json` (HH-11 items, contracts, justifiers); the HH-11
  sentences of `research/hopf-hecke-scaffold/independent-audit.md` and
  `research/hopf-hecke-scaffold/hecke-source-report.md`.
- Plan/owner: `research/plan-spec.json` pages 1708/1709; `...-owner-scope.json`;
  `...-owner-authoring-direction.md` (HH-11 clause: exchange/signed-action faithfulness/Matsumoto,
  no premature reflection faithfulness); `...-scope-ledger.json` (batch-2 row);
  `...-alpha-step1-drift.md` (no-drift for this pair); the beta scaffold notes.
- Library role/prose: `library/coxeter-groups/coxeter-presentations-exchange-and-reduced-word-theorems{,-examples}.md`
  (draft prose targets); the four published `requires` pages; published supplier items under `items/`.
- Sources (full text; local copies byte-identical to the coverage stamps — 4 220 570 B / 600 pp.,
  1 096 504 B / 141 pp., 4 320 702 B / 370 pp.): Davis, *The Geometry and Topology of Coxeter
  Groups* <https://people.math.osu.edu/davis.12/davisbook.pdf> (stamp `ccefbb950fdcfce9`); Lusztig,
  *Hecke Algebras with Unequal Parameters* <https://arxiv.org/pdf/math/0208154> (stamp
  `6329366ceac9317c`); Björner–Brenti, *Combinatorics of Coxeter Groups*
  <https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf>
  (stamp `ad1e7d9260127bb2`). The load-bearing results were located independently in the local
  full texts (locators in “Source coverage”).

## Scope reconciliation (design ↔ plan-spec ↔ manifest ↔ prose)

- Identity, order, category, companion pointers and `requires` in `plan-spec.json` and the batch
  manifest equal plan §HH-11 verbatim (five page prerequisites; B additionally requires A). No
  scope drift; step-1 drift verdict for this page was no-drift.
- A manifest carries exactly the six design contracts with identical ids and kinds:
  A1 `def-hh-coxeter-matrix-word-group-and-length` — Coxeter matrix, presented group via free-group
  words/relator normal closure/quotient, universal property, reduced words, ℓ, standard parabolics,
  with explicit conventions that no finiteness/faithfulness/completeness is asserted and A4/A6 as
  the recorded justifiers;
  A2 `def-hh-geometric-coxeter-representation-and-roots` — one common characteristic-zero splitting
  field, primitive 2m-th roots, σ_s on the simple-root basis, root set as the orbit, no positivity
  or faithfulness (justifier A3);
  A3 `lem-hh-dihedral-root-recurrence-and-root-sign` — σ_s²=1; rank-two block with trace c²−2 and
  determinant 1; exact order m including m=2 and m=∞; the representation of W, distinct generators
  and exact dihedral orders; the signed right action on {±1}×T; prefix-reflection deletion and the
  expression-independent sign-change set Φ(w); ambient reducedness of alternating dihedral words;
  A4 `thm-hh-coxeter-exchange-deletion-and-faithfulness` — sign character/parity, exchange both
  sides, two-letter deletion/Tits reduction, faithfulness of the signed action;
  A5 `thm-hh-matsumoto-reduced-word-theorem` — braid connectivity, reduced ⟺ M-reduced,
  S∩⟨s,t⟩={s,t} and dihedral alternating reducedness;
  A6 `thm-hh-parabolic-minimal-representatives-and-length-additivity` — support, intrinsic parabolic
  presentation W_J*≅W_J with ℓ_J=ℓ and W_J∩S=J, unique minimal one-sided coset representatives with
  descent characterisation and length additivity, type-A identification ℓ=inv.
- B manifest carries exactly the five examples promised by the design’s Examples paragraph:
  rank-one reduced words; finite dihedral reduced words and lengths (order 2m, min(2k,2(m−k)),
  longest element and its braid move); exchange plus a failed wrong-pair deletion on a nonreduced
  word in I₂(3); the type-A S₃ length table; minimal representatives of S₂ in S₃. Each is a
  computation from the A items; B is a dependency leaf — no item in any of the 32 batch manifests
  depends on a B item (verified mechanically).
- Deliberate exclusions are recorded per coverage row with reasons and in-run destinations
  (Davis Lemma 4.2.2 reflection-wall formalism; Lusztig 1.10 folding; 1.11 bilinear form/tameness;
  Lusztig 9.8/9.11–9.16 longest elements, double cosets, Hecke refinements; BB Cor 2.4.6 iterated
  parabolic normal form; Davis §3.5/§6.1–6.12 deferred to
  `finite-coxeter-diagrams-and-complete-classification`, batch 13 of this run, present). No
  reviewed consumer row asks this pair for any of these: the 235 review rows cite only clauses that
  are present (sampled; the “half-space”, “normal form” and “wall” occurrences in those rows are
  consumer-owned geometry built on the length/reduced-word clauses, not requests for excluded
  results).
- The A/B prose scaffolds state the pair’s role (“does not assume the exchange or reduced-word
  theorem”, reflection geometry supplies expression-independent word control) and the B page’s
  leaf role; both pages correctly carry empty item lists pending Step 3b authoring/splice.

## Source coverage

- `...-batch-2.coverage.json`: three primary treatments (monograph/monograph/textbook), 36 harvested
  headings — 24 `included`, 5 `inline`, 6 `out-of-scope`, 1 `deferred` — every declining row with a
  written reason and the deferred row with an in-run destination. Fetch stamps verified for all
  three PDFs (bytes/pages/hash in the file and in the batch notes).
  `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-2.coverage.json
  --require-destination` → 1 page, 36 results, **0 errors, 0 warnings** (run by me).
- Independent spot reading of the load-bearing results in the local full texts (all found, with the
  manifest’s clauses matching): Lusztig Prop. 1.5 (p12, signed action U_s(ε,t)), Prop. 1.6 (p12,
  expression-independent prefix-reflection set), Prop. 1.7 (p13, exchange), Thm 1.9 with the (A)/
  (A′_p)/dihedral induction (pp13–14, Matsumoto–Tits), Lemma 9.7 (p40, unique minimal coset
  element, descent characterisation, additivity); Davis Lemma 3.2.6 (pp47–48, two-letter deletion),
  Lemma 3.3.5 (p55, φ_s action and sign count), Thm 3.2.16 (p52, (D)/(E)/(F) equivalence),
  Thm 3.4.2 (pp59–60, M-reduced/braid connectivity), Prop. 4.1.1 (p60, support); Björner–Brenti
  Thm 1.5.1 (p28, Coxeter ⟺ exchange ⟺ deletion), Prop. 1.5.2 (p30, ℓ_A=inv), Prop. 1.5.4 (p31,
  (S_n,S) is type A), Prop. 2.4.4 (p49, unique factorisation and length additivity).
- The A5 strategy is a compressed but faithful rendering of Lusztig’s Theorem 1.9 proof (the
  (A)/(A′_p) induction and the final q=m dihedral case, with S∩⟨s,t⟩={s,t} supplied by A5(3));
  unfolding it belongs to Step 3b.
- The B page has no row in the coverage file. The engine’s omission gate requires coverage rows for
  A pages only, the five examples are A-derived calculations, and each carries its own
  `sources.references` in the manifest, so no obligation is unmet; a B row would merely match the
  format of sibling batches 21–32.

## Prerequisites and role

- All 11 items’ declared deps resolve: 67 distinct ids — **59 published** items (every one
  `status: published`) plus **8 in-run** ids, all inside this same pair (six A items and the two B
  examples used as B-page suppliers). Zero ids are absent from both the published library and the
  current scaffold; zero later-batch dependencies.
- Every published dep’s home page lies inside the transitive closure of the pair pages’ declared
  `requires` (57 pages, computed over `plan-spec.json`), and every `[[…]]` wikilink in the 11
  statements/strategies resolves to an in-run or published id on a page inside that closure
  (checked mechanically: 0 unresolved, 0 outside). This is the post-splice undeclared-prereq
  discipline the run enforces.
- Page `requires`: `symmetric-groups-and-the-sign-homomorphism`, `splitting-fields`,
  `finite-fields-and-cyclotomic-extensions`, `group-homomorphisms-and-the-isomorphism-theorems` are
  published pages on disk; `tensor-coherence-and-algebraic-descent` is the in-run batch-1 draft.
  The one ledger row is `open` and is a reading-order prerequisite only — no item of this pair uses
  a batch-1 item (the single inventory-proposed edge, `lem-hh-finite-matrix-and-module-preliminaries`
  → A2, was dropped because A3’s route is the explicit 2×2 characteristic-polynomial computation);
  batch 1’s authoring is scheduled work of this run, not a gap.
- Role: the pair is the reduced-word foundation of the whole run — 235 cross-batch dependency edges
  (229 item-level, 6 page-level) to **25 consumer batches**, all reviewed by their owning batches
  with 0 unreviewed; sibling coverage files explicitly defer Coxeter presentation/sign/length,
  rank-two order, ambient reducedness, signed action + faithfulness, exchange, deletion/support and
  parabolic decomposition *into* this pair (batches 3, 4, 7, 27), and each such deferral lands on an
  existing planned clause. HH-12/13/15 consume A5/A6 exactly as designed.

## Findings

1. **Sufficient scope.** The planned definitions, results and examples cover the intended subject
   item-for-item against plan §HH-11 and the inventory; conventions, hypotheses and abstentions are
   explicit; source coverage is complete and independently spot-checked; the pair is a clean
   supplier with a leaf companion. No omitted topic or result and no merger/enrichment is required.
2. **No unmet prerequisite absent from both the published library and the current scaffold.** The
   only open prerequisite row is the in-run page-level edge to batch 1, recorded and explained.
3. Advisories (non-blocking; no scaffold edits made by this review):
   a. **“Coxeter system” used without a definition.** The term is used by name in A6(2) and by at
      least five sibling definitions (batches 13, 18, 20, 22, 25) and one published item
      (`items/def-diagonal-torus-characters-and-weyl-action.md` L81), all citing A1 as the notion’s
      home, but no item anywhere states the definition of the pair (W,S). The mathematical content
      is present (presented group, generating set, length, parabolics; S injects into W is A4(4)),
      so this is a naming gap, not a missing result. Recommended scaffold addition before/at 3b:
      one sentence in A1, e.g. “the pair (W,S) is the *Coxeter system* presented by (S,m)”, with no
      change to any claim or dependency. Confirmed gap; small; owner may judge it below the
      enrichment threshold — my classification (non-blocking) is a judgement call, flagged as such.
   b. **ℓ-inversion used implicitly.** A6(3) asserts “w↦w^{-1} preserves lengths” and A4(2)’s
      right-handed exchange is proved from the inverse; a consumer row (batch 23,
      `def-cg-left-right-weak-order-and-descents`) reads ℓ(w)=ℓ(w^{-1}) as a clause of A6. The fact
      is a two-line consequence of A1 (reversing a reduced word), but it is not itself stated.
      Recommend Step 3b add it as an explicit intermediate step in A4/A6.
   c. Plan locator stale: plan §HH-11 cites “Lusztig Theorem 1.9 pp.4–5”; in the stamped revised
      edition the theorem and its proof are printed pp.13–14 (PDF pp.13–14). The manifest coverage
      locator (printed pp.10–19 for §§1.1–1.11) is correct. No edit made.
   d. Two B examples cite published in-closure items in proof uses that are not in their `deps`
      (B1: `def-free-group`, `thm-reduced-words-form-the-free-group`, `def-normal-closure`,
      `def-quotient-group`; B2: `def-group-power`, `def-order-in-a-group`). Recommend Step 3b
      declare them or inline the one-line computations; no missing supplier either way.
   e. Carried from the batch-2 notes (already recorded there): 7 `redundant-prereq` advisories on
      the owner-approved `requires`; the two out-of-closure published items that state the type-A
      identification (`thm-the-symmetric-group-has-the-coxeter-presentation`,
      `lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts`) are reproduced
      locally instead of cited; the batch-1 page prerequisite row stays open.
4. Honest uncertainty: item proofs do not exist yet, so this is a scope assessment only. The
   Matsumoto route (A5) is the pair’s `high-risk` proof obligation and its strategy is terse; I
   verified that its structure matches the source’s induction but did not verify a completed proof
   (none exists). No scope-level shortfall identified; the named advisories are the only findings.

## Decision and next action

- Recorded via `node tools/step3-decisions.mjs record-scope --run frontier-42-coxeter-32
  --page coxeter-presentations-exchange-and-reduced-word-theorems --decision sufficient`.
- Next action: Step 3b authors the 6 A items and 5 B examples; batches 3/4/7/10/12–14/16–32 consume
  this pair and are unaffected at scope level. If the owner chooses to apply advisory (a) or (b)
  to the scaffold, the scope hash changes and this decision must be re-recorded after the edit.

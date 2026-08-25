# Frontier 18, batch 9 — Beta-9 scaffold notes and step-3 report

Pair: `ends-coends-and-weighted-limits` (A, order 365.009) and
`ends-coends-and-weighted-limits-examples` (B, order 365.01), category
`category-theory`.

**Controlling design.** `research/plan-category-theory-track.md` §MA-5, lines
1438–1516. The dispatch named two design locations, L1438 and L1494; both are
inside that one section (its heading and its `fs-` list), so there is no
track-versus-amendment conflict to adjudicate. No other document in `research/`
carries a design for this page.

**Design versus spec.** §MA-5 states `requires` `limits-and-colimits` and
`universal-properties-and-the-yoneda-lemma`; `plan-spec.json` declares
`monadicity-and-becks-theorem-examples`. These do not conflict: stage 1's drift
unit already read §MA-5 and recorded VERDICT `no-drift`, because both design
prerequisites lie in the closure of the declared one
(`research/frontier-18-alpha-step0-drift.md`, "ends-coends-and-weighted-limits").
The scaffold is built against the spec.

## Continuity checkpoint

- **Substage:** steps 1 and 2 complete, and the step-3 fix pass against group
  Alpha `d`'s report is complete (§12). Manifest, coverage and proof contracts
  all written.
- **Owned artifacts:** `research/frontier-18-batch-9.pages.json` (50 A items,
  9 B items), `research/frontier-18-batch-9.coverage.json` (4 fetch-verified
  sources, 154 harvested rows), `research/frontier-18-batch-9.proof-contracts.json`
  (49 contracts), this file.
- **Exact next action:** none pending; the batch is ready for step 4 and for my
  return as its step-5 author.

## 1. Per-page item list

### `ends-coends-and-weighted-limits` (A, order 365.009) — 50 items

The numbering below is the step-2 numbering, kept stable: the corollary group
Alpha `d` inserted at step 3 (finding B9-2) sits at its true page position as
**36a** rather than renumbering 37–49, because roughly thirty references
elsewhere in this file cite items by that number. Page position is the array
order in `pages.json`, never this list's labels.

1. `def-dinatural-transformation` — definition
2. `prop-a-natural-transformation-composed-with-a-dinatural-transformation-is-dinatural` — proposition
3. `thm-dinatural-transformations-do-not-compose-in-general` — theorem
4. `def-wedge-and-cowedge` — definition
5. `def-end-and-coend` — definition · LANDMARK
6. `thm-ends-and-coends-are-unique-up-to-unique-isomorphism` — theorem
7. `thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends` — theorem
8. `def-twisted-arrow-category` — definition
9. `thm-the-twisted-arrow-category-is-the-category-of-elements-of-the-hom-bifunctor` — theorem
10. `thm-an-end-is-a-limit-over-the-twisted-arrow-category` — theorem · LANDMARK
11. `prop-the-end-of-a-functor-mute-in-its-first-variable-is-the-limit-of-that-functor` — proposition
12. `cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete` — corollary
13. `thm-an-end-is-an-equalizer-between-two-products` — theorem · LANDMARK
14. `thm-a-set-valued-coend-is-a-quotient-of-a-coproduct-by-the-dinaturality-relation` — theorem
15. `thm-a-module-valued-coend-is-a-quotient-of-a-direct-sum-by-the-dinaturality-submodule` — theorem
16. `thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends` — theorem
17. `cor-a-right-adjoint-preserves-ends-and-a-left-adjoint-preserves-coends` — corollary
18. `cor-the-hom-functor-turns-a-coend-into-an-end-and-preserves-ends` — corollary
19. `def-parametrised-end-and-parametrised-coend` — definition
20. `thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters` — theorem
21. `thm-a-family-natural-in-the-parameter-factors-through-the-parametrised-end` — theorem
22. `lem-a-wedge-on-a-product-index-category-is-dinatural-in-each-variable-separately` — lemma
23. `thm-fubini-for-ends` — theorem · LANDMARK
24. `cor-ends-commute-with-ends` — corollary
25. `thm-the-set-of-natural-transformations-is-an-end` — theorem · LANDMARK
26. `cor-the-end-of-the-hom-functor-is-the-monoid-of-natural-endomorphisms-of-the-identity` — corollary
27. `thm-the-end-form-of-the-yoneda-lemma` — theorem
28. `thm-the-ninja-yoneda-lemma-in-coend-form` — theorem · LANDMARK
29. `def-functor-tensor-product` — definition
30. `def-set-weighted-limit-and-weighted-colimit` — definition · LANDMARK
31. `thm-a-weighted-limit-is-unique-up-to-unique-isomorphism` — theorem
32. `prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight` — proposition
33. `def-power-and-copower-by-a-set` — definition
34. `thm-a-power-is-a-product-of-copies-and-a-copower-is-a-coproduct-of-copies` — theorem
35. `thm-a-weighted-limit-is-an-end` — theorem
36. `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements` — theorem
36a. `cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target` — corollary *(inserted by group Alpha `d` at step 3, finding B9-2)*
37. `cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements` — corollary
38. `thm-the-constant-singleton-weight-recovers-an-ordinary-limit` — theorem
39. `thm-weighted-limits-over-a-representable-weight-are-evaluation` — theorem
40. `thm-representable-functors-carry-weighted-limits-to-weighted-limits` — theorem
41. `thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor` — theorem
42. `rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits` — remark
43. `rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows` — remark
44. `fs-dinatural-transformations-compose` — false statement
45. `fs-every-end-exists` — false statement
46. `fs-a-coend-is-a-colimit-over-the-twisted-arrow-category-under-this-pages-convention` — false statement
47. `fs-every-functor-preserves-ends` — false statement
48. `fs-a-weighted-limit-is-the-ordinary-limit-of-the-same-diagram` — false statement
49. `fs-yonedas-original-notation-agrees-with-the-modern-one` — false statement

By kind: 8 definitions, 3 propositions, 1 lemma, 23 theorems, 7 corollaries,
2 remarks, 6 false statements. Recount from the list above; it is not a summary.
The step-2 version of this line read "20 theorems, 5 corollaries" and summed to
45 against a 49-item list; it was wrong when written and is corrected here.

### `ends-coends-and-weighted-limits-examples` (B, order 365.01) — 9 items

1. `ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram`
2. `ex-the-evaluation-family-is-dinatural`
3. `ex-the-twisted-arrow-category-of-the-walking-arrow`
4. `ex-the-tensor-product-of-a-right-and-a-left-monoid-set-as-a-coend`
5. `ex-the-coend-of-a-hom-functor`
6. `ex-fubini-verified-on-a-two-object-index`
7. `ex-a-weighted-limit-computing-a-kernel-pair`
8. `ex-copowers-and-powers-in-set`
9. `ex-a-module-valued-coend-computed-as-a-quotient-of-a-direct-sum`

## 2. Per-pair richness report

Both passes were performed on the single A/B pair of this batch, and both found
work to do.

**Decomposition pass.** Long proofs broken into focused lemmas:

- **Fubini** (item 23) is the page's longest argument. Two named steps were
  lifted out of it and proved separately: item 22, the lemma that a wedge on a
  product index category is exactly a family dinatural in each variable
  separately, and item 21, that a family into a parametrised end is natural in
  the parameter exactly when its composite with the counit is. Item 20 supplies
  the parametrised functor structure both need. Fubini then spends three named
  inputs instead of rebuilding them, and item 24 falls out.
- **The twisted-arrow route** (item 10) is preceded by item 9, the identification
  of `Tw(C)` with the published category of elements of the hom-bifunctor. That
  is the seam item: without it the page silently re-mints a published
  construction.
- **The coend computations** are split by target: item 13 gives the general
  equalizer/coequalizer form, item 14 evaluates it in **Set** and item 15 in
  **R-Mod**. The module case is proved from the direct-sum and quotient
  universal properties rather than through `thm-rmod-is-complete-and-cocomplete`,
  which asserts existence without exhibiting the coequalizer.
- **Preservation** is split into item 16 (the hypothesis at the exact strength
  the proof uses: preservation of `Tw(C)`-limits), item 17 (adjoints) and item 18
  (hom-functors), so that no blanket "continuous functors preserve all ends"
  claim is ever made.
- **The weighted-limit half** is split into the defining representation (30), its
  uniqueness (31), its Set-valued reading (32), powers/copowers (33–34), the end
  formula (35) and the category-of-elements formula (36).

**Corollary pass.** Added beyond the design's list, each with a short honest
proof and explicit dependencies:

- item 2 — the positive composition rule the design asked to sit beside item 3.
- item 7 — functoriality of the end in the integrand; the input item 20 needs.
- item 11 — the mute-variable proposition, which is what says ends *generalise*
  limits rather than sitting beside them.
- item 26 — the end of the hom-functor is the commutative monoid of natural
  endomorphisms of the identity, via the published Eckmann–Hilton theorem.
- item 27 — the end form of the Yoneda lemma, which item 28 then uses.
- item 32, 34, 37, 40 — the Set-valued reading of a weighted limit; a power is
  the published product of a constant family; a Set-valued colimit is the
  component set of its category of elements; representables carry weighted limits
  to weighted limits.
- item 41 — the loop-closing theorem that a set-valued coend is a hom-weighted
  colimit, tying the two descriptions of a coend together.
- item 36a — the weighted half of the existence corollary, added by group Alpha
  `d` at step 3 (B9-2). The ends half is item 12; without 36a the weighted half
  of the page proves three formulas for an object it never says exists. Its
  proof is the smallness count for the category of elements plus item 36 and the
  completeness hypothesis, and it states sufficiency without necessity.
- two extra `fs-` items beyond the design's four: item 47 (every functor
  preserves ends) and item 48 (a weighted limit is the ordinary limit of the same
  diagram). Both refute a genuinely tempting claim with a finite witness.

**No second-proof item was added.** The library has no published item on ends,
coends, twisted arrow categories, weighted limits, powers or copowers, so there
is nothing here to reprove by a different route. Grep evidence in §5.

**Ceiling.** The A page carries **50** items against the hard ceiling of 60
after the step-3 insertion, so no split is proposed. The design's trap 4 says that if the page threatens the
ceiling the cut is between items 1–29 (ends) and 30–41 (weighted limits); that
cut is still available and would fall exactly at item 30 if step-3 Alpha adds
enough to cross 60. Nothing was pruned to stay under it.

## 3. Findings — one recommendation each, most severe first

**F1. The B page drops the design's `cex-a-dinatural-family-whose-composite-is-not-dinatural`. Approve the drop, or direct me to restore it.**
The design's B-page list names that counterexample. This scaffold does not carry
it. What happened: the non-composition witness became a full constructive
*theorem* on the A page (item 3), and item 44 restates that witness in full so
the false statement stands alone. A third full statement of the same three
functors on the walking arrow would be padding, which the scaffold-richness rule
forbids. The design's *decision* — that the fact be shown by a concrete
counterexample rather than asserted — is honoured; only its placement differs.
**If declined:** restoring the `cex-` costs one B item (10 total, still far under
the ceiling) and one contract, and I would give it the job of verifying the
functor squares of the witness in full rather than repeating the hexagon failure.
I do not think that earns its place, but it is a placement call and it is the
design's to make, not mine.

**F2. The design's primary source, Mac Lane CWM Ch IX, is not in the ledger; Richter replaced it. Approve.**
§MA-5 names Mac Lane Ch IX as **Primary**, read verbatim from a non-open copy,
and says so. The URL-discipline rule (owner, 2026-08-17) requires every recorded
URL to be fetch-verified full text in this dispatch, so a non-open source cannot
back a coverage row. The four backing sources are therefore Loregian, **Richter**,
Kelly and Riehl *CHT*, all four fetch-verified. Richter §§4.4–4.6 covers exactly
the Mac Lane material the design wanted (dinaturals, wedges, ends, coends, the
twisted arrow projection, Fubini, the integral notation), and Richter Prop. 4.6.3
is what the design itself cites for Fubini. **If declined:** the page loses its
second independent treatment of the ends half and fails
`coverage-checklist`'s two-treatment rule, since Kelly is enriched and Riehl
*CHT* covers only the weighted half.

**F3. My own step-2 harvest under-enumerated Loregian §1.1 and Kelly Ch 3, and I repaired both. Approve the repair.**
The first pass excluded Loregian's chapter-1 Exercises from the read range and
stopped Kelly at §3.7. That excluded **Exercise 1.2**, which states *both*
dinatural-composition facts (the negative one and the composition-with-a-natural
rule) and even gives the pasting hint this scaffold's strategy already used, and
**Exercise 1.7**, which states independently that the end of a functor on the
walking arrow is a pullback — the exact computation B item 3 performs. It also
excluded **Kelly §3.9 "The inadequacy of conical limits"**, which is the source
the design names for item 42. I read all three ranges in this dispatch, extended
the two locators, and added 21 rows with dispositions. Three items that had no
harvest row now have one, and item 42's source claim is now inside the declared
range. **If declined:** items 2, 3 and 42 would carry a provenance label with no
row behind it, which is precisely what Alpha checks for faithfulness at step 6.

**F4. Item 12 declared an unused dependency on `def-cardinality-of-a-small-category-and-kappa-small-diagram`. Removed; approve.**
The smallness of `Tw(C)` is a plain set-sized count — its objects are the
morphisms of `C` and its morphisms a subclass of a product of two morphism sets.
The cardinality definition assumes the Axiom of Choice, so declaring it dragged
a choice principle into a corollary that does not use one.
`def-small-locally-small-and-large-category` alone is what the proof cites.
**If declined:** the item cites an edge its proof never uses, which is the
inflated-dependency defect the citation-fidelity rule names.

**F5. Item 15 planned to form "the submodule generated by" a set without declaring the item that defines it. Fixed; approve.**
`def-submodule` defines a submodule but not the submodule *generated by* a
subset; that is
`def-generated-cyclic-finitely-generated-and-free-modules` (published,
`literature-derived`), now declared. This is the "a dep gate cannot see deps
nobody declared" class: `depsource` reported clean while the proof planned to
build a generated submodule out of nothing. **If declined:** the step-5 proof
either cites an item it does not declare or re-mints the generated submodule
inline.

**F6. Item 28 planned to conclude through a covariant "representables detect isomorphism", which the library does not publish. Fixed; approve.**
The published corollary is
`cor-representable-presheaves-detect-isomorphism-of-objects` and it reads
`a ≅ b ⟺ C(-,a) ≅ C(-,b)` — **contravariant**. The co-Yoneda chain produces a
bijection natural in a test *set*, i.e. an isomorphism of **covariant**
representables. I added `def-opposite-category` to the deps and wrote into the
strategy that the published corollary is to be applied in `Set^op` in a numbered
step, and must not be cited as though it read `C(a,-) ≅ C(b,-)`.
**If declined:** the page's landmark co-Yoneda theorem rests on a variance slip
of exactly the kind the citation-fidelity rule forbids.

**F7. Three titles asserted more than the planned proof gives. Tightened; approve.**
The judge reads Statements and cannot see a false title, so this is the fatal
class the step-6 brief names.
- item 25: "The set of natural transformations between two functors is an end…"
  → "**For a small source category**, the set of natural transformations is an
  end…". The theorem needs `C` small and `D` locally small, and the library
  already publishes `fs-yoneda-lemma-requires-a-small-category`.
- item 23: "Fubini: an end over a product index category **agrees with** either
  iterated end" → "…**and the two iterated ends exist together and agree**". The
  old title asserted existence; the theorem proves that the three objects exist
  together.
- item 41: "**A coend** is a colimit weighted by the hom-bifunctor" → "**A
  set-valued coend**…". The planned proof is for set-valued integrands and
  records the copower generalisation as a Remark without proving it.
**If declined:** three Statements ship claiming more than their proofs deliver.

**F8. Item 22's lemma must not be generalised beyond wedges. Recorded in the strategy; approve.**
Separate dinaturality in each variable gives joint dinaturality **for wedges**,
whose source is a constant functor; the backward direction spends that constancy.
The same statement for dinatural transformations between two varying functors is
not what is proved, and item 3 on this same page is standing evidence that
dinaturality is fragile under exactly this kind of extension. I wrote the
restriction into the strategy so my step-5 self cannot widen it while writing.
**If declined:** Fubini's load-bearing lemma is stated at a strength its proof
does not reach.

**F9. Eight harvested results are declined to `owner-decision`. Approve, or name homes.**
They are: Loregian Remark 1.2.9 and Prop 1.2.10 and Riehl Remark 7.2.10 (the
subdivision-category presentation — a *third* index category computing an object
this page already characterises by two descriptions it proves agree); Loregian
Example 1.4.4 (dinatural families as an end — a profunctor companion the library
has not planned); Kelly Lemma 3.5.2 and Examples 3.5.3 (the *mixed* interchange
morphism between a colimit of limits and a limit of colimits, which belongs with
filtered-colimit technology); Kelly §3.4's closing remarks on conservative and
faithful functors; Riehl Construction 7.1.9 (presheaves as discrete right
fibrations). I checked `plan-spec.json` for a filtered-colimit page and for a
Grothendieck-construction or categorical-fibration page and there is neither —
`subobject-lattices-generators-and-the-grothendieck-axioms` is the AB axioms and
`fibrations-fiber-bundles-and-homotopy-exact-sequences` is topology. **If
declined:** name the destination page and I will repoint the rows.

## 4. Forward references

**None.** `depsource` reports `planned-later: 0` and `unresolved: 0` for both
pages. The enriched material — enriched weights, tensors, cotensors, the failure
of constant enriched functors — is deferred to `enriched-categories` (order
365.033) and is never *used* here: item 42 is a remark that announces the later
issue without invoking enrichment, and its three source rows are Kelly §3.9
statements about the comparison map, not definitions this page needs.

## 5. New ids proposed

All 58 ids are new. Evidence:

```
node -e "... for each id: fs.existsSync('items/'+id+'.md') || plan-spec.json contains '\"'+id+'\"' ..."
  -> ids: 58 clashes: 0
grep -rn "def-dinatural|def-end-and-coend|twisted-arrow|weighted-limit|copower" items/*.md -l
  -> (no output)
```

No published item mentions dinaturality, ends, coends, twisted arrow categories,
weighted limits or copowers under any id, so there is nothing to reuse or alias
and no second-route duplicate to declare.

## 6. Cross-batch dependencies

**This batch needs nothing from any other batch of `frontier-18`**, and no other
batch needs anything from it. Every one of the 58 external dependencies resolves
to a **published** item on disk (58 distinct ids, all `status: published`); the
B page's remaining 21 edges are `planned-earlier` into the A page of this same
batch. `depsource` on the spliced spec reports `draft-page: 0`, `homeless: 0`,
`planned-later: 0`, `unresolved: 0` for both pages.

The one thing worth flagging to the lead Alpha: the design routes the enriched
generalisation to `enriched-categories` (365.033) and the Kan-extension
consumers to `kan-extensions-density-and-the-free-cocompletion` (365.011). Six
deferral rows point at those two pages. If either is scaffolded in a later run
against a different item list, those deferrals become stale, but neither is in
`frontier-18` scope.

## 7. Confidence statement

**Verified, by running the tool or reading the file:**

- `validate-plan.mjs` on a scratch splice of this manifest into a copy of
  `plan-spec.json`: exits 0, no new error or warning against the unspliced
  baseline (the `redundant-prereq` advisories are pre-existing and belong to
  `categories-functors-and-natural-transformations`).
- `depsource.mjs` on the same splice: `published 28541`, `planned-earlier 21`,
  `planned-later 0`, `homeless 0`, `unresolved 0`; neither of my pages appears
  in any problem section.
- `content-policy.mjs --manifest-only`: 58 scoped items, 0 errors, 0 warnings.
- `coverage-checklist.mjs --require-destination`: 154 rows, 0 errors, 0 warnings.
- `source-fetch-check.mjs`: 4/4 fetch-verified.
- `url-sweep.mjs --recover --fail-on-dead`: 4/4 live, 0 recoverable, 0 suspect.
- I opened **all 58** external dependencies on disk and checked `status:
  published` and `provenance.statement` on each. Result: 0 missing, 0 unpublished,
  **0 `ai-generated`**, **0 legacy-unclassified**. 49 are `literature-derived`
  and 9 are `ai-altered`.
- I read the full Statement or Definition of the load-bearing ones and checked
  each planned citation against it. Every quote in the proof-contract file that
  cites a published item is an **exact substring** of that item's
  Statement/Definition section on disk; I checked all 295 citations
  mechanically and fixed the two that missed.
- I recomputed the mathematics of the four finite witnesses by hand rather than
  trusting the strategy text: the twisted arrow category of the walking arrow is
  a cospan and its two counts are 1 against 2 (item 46); the four-element
  diamond collapsed onto the two-chain sends the meet ⊥ to 0 while the meet of
  the images is 1 (item 47); the kernel-pair weight gives 4 against the ordinary
  limit's 2 (item 48); a finite representing object for a countable product of
  two-element sets would need uncountably many elements (item 45). Loregian
  Exercise 1.7 independently confirms the walking-arrow pullback.

**NOT verified, and where the risk sits:**

- **`validate-plan` and `depsource` against the real spliced spec.** I cannot
  splice; step 4 does. I ran both against a scratch copy, and I expect the engine
  to reproduce them exactly, but a claim that a gate would pass is not a gate
  passing.
- **`proof-contract`, `finite-smoke` and `risk-report`.** All three read item
  text from disk, and no item exists yet, so all three necessarily report
  `item-missing` at step 2 — I ran them and they do. My contract file is a plan;
  its citations become checkable at step 5. `finite-smoke` correctly identifies
  the single item carrying obligations.
- **Faithfulness of the harvest beyond the ranges I re-read in this dispatch.**
  I re-read Loregian §1.1 and its chapter Exercises and Kelly §3.9 directly from
  the PDFs and reconciled them. I did **not** re-derive the Richter or Riehl
  *CHT* enumerations in this dispatch; those rows stand on the earlier read of
  the same fetch-verified bodies. Alpha checks faithfulness at step 6 and this is
  where I would look first.
- **Richter and Riehl chapter-end exercises.** Both locators are section-scoped,
  so material in chapter-end exercise blocks outside those sections is outside
  the declared range. Given what Loregian's exercises turned out to contain, this
  is a real residual risk and I am naming it rather than leaving it implicit.
- **The proofs themselves.** These are strategies, not proofs. Item 22's backward
  direction, item 23's bijection of wedge categories, and item 41's variance on
  the product index category are the three I would expect a refuter to press
  hardest.

## 8. Web research ledger and dependency-closure statement

All four URLs were fetched in this dispatch and carry a `fetch_verified` stamp;
all four re-answer live under `url-sweep --recover --fail-on-dead`.

| source | kind | rows | supports |
|---|---|---|---|
| Loregian, *(Co)end Calculus*, arXiv:1501.02503v7 — `https://arxiv.org/pdf/1501.02503` | monograph | 55 | dinaturality, wedges, co/ends, the twisted arrow category, co/ends as co/limits, preservation, Fubini, Nat as an end, the ninja Yoneda lemma, the notation history, and the chapter-1 exercises |
| Richter, *From Categories to Homotopy Theory* (author-hosted draft) — `https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf` | textbook | 19 | the second independent treatment of the ends half: dinaturals, ends, coends, the twisted arrow projection, Fubini (Prop. 4.6.3), the integral notation, and the module-valued coend |
| Kelly, *Basic Concepts of Enriched Category Theory*, TAC Reprints 10 — `https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf` | monograph | 49 | the equalizer formula (2.2), parametrised ends (2.5)–(2.6), Fubini (2.7)–(2.9), indexed limits (3.1)–(3.6), the conical comparison (3.24)–(3.35), tensors and cotensors (3.42)–(3.44), and §3.9 |
| Riehl, *Categorical Homotopy Theory* — `https://emilyriehl.github.io/files/cathtpy.pdf` | textbook | 31 | the weighted half: Def. 7.1.1/7.2.1, the end and coend formulas (7.1.3), the category-of-elements formula (7.1.8)/(7.2.4), evaluation at a representable weight (Ex. 7.1.4), the kernel-pair comparison (Ex. 7.1.16), the coend as a hom-weighted colimit (Ex. 7.2.9) |

Two independent full treatments back each half of the page: Loregian and Richter
for ends and coends, Kelly and Riehl *CHT* for weighted limits. No encyclopedia
or wiki source is used at all, for backing or for tiebreaking.

**Convention disagreements found and how each is settled.**

1. **The integral signs.** Loregian Notation 1.1.13 and Richter Notation 4.6.1
   both write the subscripted integral for the end and the superscripted for the
   coend; Richter Remark 4.6.2 records that **Lurie uses the opposite**, and
   Loregian Remark 1.1.14 records that **Yoneda's 1960 paper reverses them too**.
   The page adopts the modern convention, states it in item 43, and makes the
   historical reversal an `fs-` item (49) rather than a footnote.
2. **Which category the coend indexes.** Under item 8's fixed twisted-arrow
   convention the coend is the colimit over `Tw(C)^op` of the integrand with
   **domain and codomain swapped**. Loregian reverses the name of the twisted
   arrow category, so the wrong version is a live trap; item 46 refutes it and is
   stated only *with* the convention qualifier, never bare.
3. **"Continuous".** Loregian Theorem 1.2.7 says every co/continuous functor
   preserves the co/ends that exist. In this library `continuous` means
   preservation of **small** limits, and `Tw(C)` is small only when `C` is. Item
   16 therefore states the hypothesis as preservation of `Tw(C)`-limits and adds
   the small-`C` corollary separately, rather than repeating the source's
   unqualified phrasing.
4. **Weight variance.** Kelly writes indexed limits with the indexing type
   `F : K → V`; Riehl *CHT* writes weighted limits with `W : J → Set` for limits
   and `W : J^op → Set` for colimits. The page follows Riehl's variance
   throughout, because it is the one that reads correctly against the published
   presheaf convention.
5. **Powers versus cotensors.** Kelly §3.7 calls them tensor and cotensor
   products; item 33 mints them as **power** and **copower**, the Set-enriched
   names, and item 34 records the agreement with the published product of a
   constant family in the dictionary style the seams rule asks for. The enriched
   names are deferred to `enriched-categories`.

**Dependency-closure statement.** Every proposed published dependency was opened
from disk in this dispatch and checked for `status: published` and component
provenance. Every load-bearing dependency of every item is either an earlier item
inside this A/B pair or a published item on a page at a strictly smaller order.
There are **no exceptions**, no external fallback (`proved_here: false`) item,
and no `external_refs` mention anywhere in the batch. No dependency has
`provenance.statement: ai-generated`, and none is legacy-unclassified, so the
`established-from-knowledge` / `source-checked` confidence route required for
unclassified targets does not arise for any item in this batch.

Nine dependencies carry `provenance.statement: ai-altered` and so are eligible
but not auto-trusted: `def-category`, `def-equivalence-relation`,
`def-finite-cardinality`, `def-functor-category`,
`def-presheaf-representable-functor-and-representation`, `def-semigroup-and-monoid`,
`def-the-set-of-functions-from-one-set-to-another`, `def-yoneda-embedding` and
`prop-size-of-functor-categories`. I read each one's Definition or Statement in
full. All nine state the standard notion with the standard conventions; the only
one carrying a real hypothesis this page leans on is
`prop-size-of-functor-categories` ("If `C` is small and `D` is locally small,
then `[C,D]` is locally small"), which item 25 cites, and its statement is the
textbook one. Confidence route for all nine: **established-from-knowledge**.

## 9. Component provenance plan, with rationale

Values are `provenance.statement` / `provenance.proof`. Every
`literature-derived` or `ai-altered` component gets the source URL named in its
row in `sources.references` at step 5.

**Definitions (proof: `not-applicable` throughout).**

| item | statement | rationale |
|---|---|---|
| 1 `def-dinatural-transformation` | literature-derived | Loregian Def. 1.1.1 and Richter Def. 4.4.1, same hexagon. |
| 4 `def-wedge-and-cowedge` | literature-derived | Loregian Def. 1.1.4 and Remark 1.1.5, including the wedge categories. |
| 5 `def-end-and-coend` | literature-derived | Loregian Def. 1.1.6, Richter Defs. 4.4.4/4.4.6; terminal wedge and initial cowedge verbatim. |
| 8 `def-twisted-arrow-category` | literature-derived | Loregian Def. 1.2.2, Richter Defs. 4.5.1–4.5.2, with the projection's variance fixed as the design instructs. |
| 19 `def-parametrised-end-and-parametrised-coend` | literature-derived | Kelly §2.1, the setup of (2.5)–(2.6), both of which are harvested. The definition has no heading of its own in the source; that is why it carries no `included` row. |
| 29 `def-functor-tensor-product` | ai-altered | Richter Example 4.4.7 gives the construction for modules; this transposes it to a presheaf against a covariant Set-valued functor, with the variance written into the definition. |
| 30 `def-set-weighted-limit-and-weighted-colimit` | literature-derived | Riehl *CHT* Defs. 7.1.1 and 7.2.1, and Kelly (3.1)–(3.6). |
| 33 `def-power-and-copower-by-a-set` | literature-derived | Kelly (3.42)/(3.44) and §3.7's Set specialisation; Loregian Def. 2.2.3. |

**Theorems, propositions, lemmas and corollaries.** Statements are
`literature-derived` where a harvested heading states the same proposition, and
`ai-altered` where the claim is a source result materially reformulated,
recombined or split. **None is `ai-generated`; SCHEMA §3 prohibits a generated
theorem, proposition, definition, lemma, false statement or remark in batch
scope, and every one of them except 36a is a `deps` target.** 36a is a `deps`
target of nothing — it is a terminal existence corollary — but it is
`ai-altered` and not `ai-generated` all the same, so nothing rests on that.

- `literature-derived` statement: 3 (Loregian ch.1 intro and Exercise 1.2),
  7 (Loregian Remark 1.1.7, Kelly (2.4)), 9 (Riehl, the twisted arrow category
  as the Grothendieck construction), 10 (Loregian Remark 1.2.3, Richter Prop.
  4.5.3), 11 (Loregian Remark 1.2.5), 12 (the existence clause of Richter Prop.
  4.5.3, split off as its own corollary), 13 (Loregian Remark 1.2.4, Kelly (2.2),
  Riehl (7.1.6)), 15 (Richter Example 4.4.7), 16 (Loregian Thm. 1.2.7, restated
  at the exact hypothesis strength — see convention note 3), 18 (Loregian Cor.
  1.2.8, Kelly (2.3)), 20 (Kelly (2.5)), 21 (Kelly (2.6)), 23 (Loregian Thm.
  1.3.1, Richter Prop. 4.6.3, Kelly (2.8)), 24 (Kelly (2.9)), 25 (Loregian Thm.
  1.4.1, Richter Ex. 4.4.5), 26 (Loregian Remark 1.4.3), 28 (Loregian Prop.
  2.2.1), 32 (Kelly (3.7)), 34 (Kelly §3.7, Loregian Ex. 2.2.4), 35 (Riehl
  (7.1.3)), 36 (Kelly (3.33)/(3.34), Riehl (7.1.8)/(7.2.4)), 37 (Kelly (3.35)),
  38 (Kelly (3.26)), 39 (Kelly (3.10), Riehl Ex. 7.1.4), 40 (Kelly (3.8)),
  41 (Riehl Ex. 7.2.9).
- `ai-altered` statement: 2 (Loregian Exercise 1.2's composition rule, written
  out as a proposition with both sides), 6 (the published terminal/initial
  uniqueness specialised to the wedge categories of item 4), 14 (the coequalizer
  presentation of item 13 evaluated through the published Set-colimit
  construction), 17 (Loregian Thm. 1.2.7 combined with the published adjoint
  preservation theorems), 22 (the separate-dinaturality step extracted from the
  source's own Fubini proof, stated as its own lemma — this is the permitted
  "replace a would-be generated decomposition lemma with an AI-altered one"),
  27 (item 25 specialised at a representable and composed with the published
  Yoneda bijection), 31 (representability uniqueness applied to Kelly (3.1)–(3.2)),
  **36a** (Kelly (3.33)/(3.34) and Riehl (7.1.8)/(7.2.4) — that is item 36 —
  combined with the published definition of completeness, in exactly the way
  Richter Prop. 4.5.3's existence clause is combined for the ends half at item 12;
  the smallness count is carried out here. Like item 19 it has no heading of its
  own in any source, which is why it carries no `included` coverage row).
- Proof provenance: `ai-altered` where the route follows the source's, and
  `ai-generated` where the route is chosen here against the source's. The four
  deliberate departures are **23** (universal-property route, *not* Loregian's
  copower-and-adjoint route, which needs copowers the statement does not assume —
  see the Loregian Exercise 1.14 deferral), **13** (direct from the wedge
  property, *not* by instantiating the published products-and-equalizers
  construction, whose indexing differs), **15** (direct from the direct-sum and
  quotient universal properties, *not* through `thm-rmod-is-complete-and-cocomplete`),
  and **36** (an identity of data, *not* Kelly's density route). All four are
  `ai-generated` proofs. 36a's proof is `ai-altered`: it is the route item 12's
  proof already takes for ends — a smallness count, the comparison theorem, then
  the completeness hypothesis — transposed to the weighted side.

**Remarks (proof: `not-applicable`).** 42 `literature-derived` — Kelly §3.9,
three harvested rows: the comparison map (3.56), its failure already for `V = Ab`,
and the non-existence of a constant V-functor. 43 `literature-derived` —
Loregian Notation 1.1.13 and Remark 1.1.16, Richter Notation 4.6.1 and Remark
4.6.2.

**False statements.** Statement = the false claim; proof = the refutation.
All six take `statement: ai-altered` — each is the negated form of a hypothesis
or caveat that a harvested source states — and `proof: ai-generated` where the
witness is built here.

| item | the sourced thing it negates | proof |
|---|---|---|
| 44 | Loregian ch.1 intro and Exercise 1.2 | ai-generated (item 3's witness restated) |
| 45 | the smallness-and-completeness hypotheses of Richter Prop. 4.5.3 | ai-generated (finite-sets witness) |
| 46 | the variance in Loregian Remark 1.2.3 | ai-generated (walking-arrow computation) |
| 47 | the co/continuity hypothesis of Loregian Thm. 1.2.7 | ai-generated (two finite poset witnesses) |
| 48 | Riehl Ex. 7.1.16, the canonical comparison from the ordinary limit | ai-generated (kernel-pair count) |
| 49 | Loregian Remark 1.1.14 | literature-derived (documentary, from that remark) |

**Examples (B page).** Nothing depends on any B item — the B page is a leaf and
`depsource` confirms all 21 of its edges point backwards into the A page — so a
generated example here is non-load-bearing and legal under SCHEMA §3.

- `ai-altered` statement: 2 (Loregian Remark 1.1.3, Richter Examples 4.4.3),
  3 (Loregian Exercise 1.7), 4 (Richter Example 4.4.7, transposed from modules
  to monoid sets), 9 (Richter Example 4.4.7, worked).
- `ai-generated` statement with `generation.role: example`: 1 (Loregian Exercise
  1.10 is the same idea but the diagram and the element lists are built here),
  5, 6, 8. Each has a checkable finite witness and is a `deps` target of nothing.
- `ai-altered` statement: 7 (Riehl Ex. 7.1.2/7.1.16).
- Proof provenance for all nine: `ai-generated`. They are hand computations.

**AI-generated-statement truth-risk obligations, carried to step 5.** The
truth-risk flag is an AI-generated Statement or construction, so it attaches to
the four generated B-page examples (1, 5, 6, 8) and to the constructions inside
the five session-built `fs-` refutations. Before authoring or repairing any of
them I search for a counterexample rather than assuming the witness works. I have
already recomputed all four `fs-` witnesses by hand (§7) and Loregian Exercise
1.7 independently confirms B item 3's pullback; **B items 1, 5, 6 and 8 have not
been computed end to end** and are the ones I owe an explicit check on. Item 5's
one-object clause is the sharpest: the quotient of a **monoid** by the relation
generated by `gf ∼ fg` is *not* in general a set of conjugacy classes, and the
scaffold already says the general case is stated as the quotient by that relation
and only the **group** case is named as conjugacy classes.

## 10. Amendments to the prose scaffold

`research/plan-category-theory-track.md` §MA-5. These are for the lead Alpha to
apply; I did not touch the file.

**A1 — §MA-5 "### Sources", the Mac Lane bullet.**

- Exact old text:
  `- **Mac Lane, *CWM* Ch IX** §§IX.4–IX.8 (printed pp. 218–232) — ends, coends, ends with parameters, Fubini. **Primary.** Read verbatim.`
- Exact new text:
  `- **Mac Lane, *CWM* Ch IX** §§IX.4–IX.8 (printed pp. 218–232) — ends, coends, ends with parameters, Fubini. Design source, read verbatim from a non-open copy; it is NOT a coverage-ledger source, because the URL-discipline rule (owner, 2026-08-17) admits only a source whose full text was fetched in the authoring dispatch. **Richter, *From Categories to Homotopy Theory* §§4.4–4.6 carries this material and is the fetch-verified primary in its place.**`

**A2 — §MA-5 "### A-page items, in dependency order", item 10.**

- Exact old text:
  `10. \`thm-the-set-of-natural-transformations-is-an-end\` — thm. For **small** $\mathcal C$ and locally small $\mathcal D$, $\operatorname{Nat}(F,G)\cong\int_c\mathcal D(Fc,Gc)$ (Mac Lane §IX.5 (2)). LANDMARK`
- Exact new text: same, with `LANDMARK` followed by
  ` — and the smallness hypothesis belongs in the TITLE, not only the Statement, because the judge reads titles and a title true only for small $\mathcal C$ is a published falsehood next to the library's own \`fs-yoneda-lemma-requires-a-small-category\`.`

**A3 — §MA-5 "### Traps", after trap 4.** Add:
`5. **The design's four \`fs-\` items are a floor, not a ceiling.** Two more are scaffolded: that every functor preserves ends (refuted by two finite poset witnesses, which are exactly the two poset checks in the \`finite-smoke\` registry), and that a weighted limit is the ordinary limit of the same diagram (refuted by the kernel-pair weight, counting 4 against 2).`

**A4 — §MA-5, "### B page".** Record that
`cex-a-dinatural-family-whose-composite-is-not-dinatural` was folded into A item
3 as a constructive theorem and restated in `fs-dinatural-transformations-compose`,
pending the step-3 decision on finding F1. Do not apply this amendment if F1 is
declined.

## 11. Authoring notes with no scaffold anchor, for my step-5 self

- **The contract file is the obligation map.** 49 contracts, 307 citations, 183
  numbered steps, after the step-3 fix pass (§12). Every citation naming a **published** item carries a quote that
  is already an exact substring of that item's Statement or Definition on disk —
  verified mechanically in this dispatch. Do not paraphrase those quotes while
  authoring; `proof-contract --strict` compares them against disk.
- **Quotes I owe from my OWN items.** Citations whose `source` is an item on this
  page carry a *planned* quote that must appear in that item's final Statement or
  Definition. The ones to write deliberately: `def-end-and-coend` must contain
  "an end is a terminal wedge and a coend an initial cowedge";
  `def-wedge-and-cowedge` both "a dinatural transformation from a constant functor
  to $T$" and "a dinatural transformation from $T$ to a constant functor";
  `def-twisted-arrow-category` both "objects are the morphisms of $\mathcal C$"
  and "a morphism $f\to g$ is a pair $(a,b)$ with $bfa=g$";
  `def-dinatural-transformation` the word "hexagon";
  `def-set-weighted-limit-and-weighted-colimit` "represents the functor sending an
  object to the set of natural transformations from the weight";
  `def-power-and-copower-by-a-set` "the weighted limit of the one-object diagram at
  the constant weight $S$"; `def-parametrised-end-and-parametrised-coend` "an end
  taken in the two dinatural variables with the remaining variables held fixed";
  `def-functor-tensor-product` "the coend of the product of a presheaf and a
  covariant set-valued functor"; and
  `rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows`
  "the subscripted integral denotes the end and the superscripted integral the
  coend". **Added at step 3:**
  `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements` must contain
  BOTH "a weighted limit is an ordinary limit over the category of elements of
  the weight" and "a weighted colimit an ordinary colimit over it", because item
  36a cites the two clauses as separate facts [L1] and [L2].
- **Notation.** Use `lim` and `colim`, never the arrow form (owner, 2026-07-27).
  No applied `\iota(n)`; bare `\iota` does not occur in this batch anyway.
  No wikilink inside `$…$` — the renderer rewrites `[[id]]` before KaTeX runs and
  the block dies silently with every gate green.
- **Prose rules.** No count in prose: do not write how many items this page
  carries. No positional claim not derived from the spec: name
  `enriched-categories` and `kan-extensions-density-and-the-free-cocompletion` by
  id, never "a later page". Scope denials are scoped to this page's declared
  prerequisites, never to "the library": the enriched material is "not available
  at this point in the reading order", not "not developed here".
- **Landmarks.** Items 5, 10, 13, 23, 25, 28 and 30 are the flowchart nodes. Do
  not trim them.
- **The two-paragraph summary contract.** Paragraph 1 names the definitions and
  results this page uses from `monadicity-and-becks-theorem-examples`'s closure —
  limits and colimits, cones, the Yoneda lemma, the category of elements, the
  functor category and its size proposition. Paragraph 2 names what is developed
  here and its progression: dinaturality → wedges → ends and coends → the two
  computational descriptions → Fubini → Nat as an end and co-Yoneda → weighted
  limits → the comparison theorems. Each under 150 words, no counts, no survey
  claims about other pages. The B page gets no authored summary body.
- **Seams already discharged, do not re-mint.** Item 9 identifies `Tw(C)` with the
  published category of elements. Item 11 identifies an end of a mute functor with
  the published limit. Item 34 identifies a power with the published product of a
  constant family. Item 38 identifies the constant-singleton weighted limit with
  the published ordinary limit. Each of these is a *comparison*, and each must
  cite the published definition rather than restating it.

## 12. Step-3 fix pass

Group Alpha `d` reviewed this batch:
`research/frontier-18-alpha-d-step3-scaffold-review.md`, verdict **sufficient**
for `ends-coends-and-weighted-limits`. Its findings for this batch are B9-1
through B9-6, and D-1 is a doc bug it raised against `SCHEMA.md`. Ids are
Alpha's; nothing is renumbered. Alpha applied B9-1 and B9-2 to
`frontier-18-batch-9.pages.json` itself under the 2026-08-16 step-3 repair
licence and states that it edited no other file of mine, so the manifest half of
both was already on disk when this pass started and the contract, provenance and
item-list half was not. That half is what this pass wrote.

**B9-1** — `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements`
delivered only the limit clause where Riehl (7.1.8) *and* (7.2.4) both name it.
**applied.**

- Verified Alpha's manifest repair from disk first. The title now carries both
  clauses, the strategy proves the colimit clause as a separate numbered part,
  and `def-small-locally-small-and-large-category` is in `deps`.
- The proof contract still described the colimit clause as step 4.1, "the dual
  statement … is written out in the same way" — a one-line hand-wave under a
  title that now asserts it. Replaced by three real steps: **4.1** matches the
  two kinds of data (a cocone under $F\pi$ against a natural transformation
  $W\Rightarrow\mathcal M(F-,m)$, the substitution being $x=W(f)(y)$), **4.2**
  transports the universal property to give $W\star F$ as the colimit, and
  **5.1** is the smallness count for $\int W$, moved out of 3.1's tail because
  item 36a spends exactly it. Five facts added for the dual half — the cocone
  equation, the colimit universal property, the presheaf clause of
  `def-category-of-elements`, the contravariant hom-assignment, and the
  smallness definition — and F1, F2 and F7 gained the steps that now use them.
  Every one of the five quotes was checked as an exact substring of the cited
  published item's Definition in this dispatch.
- **A convention finding for step 5, do not "fix" it into an $\mathrm{op}$.**
  Kelly (3.34) reads "an indexed colimit is the conical colimit over the
  **opposite** category of elements", and the page's own text will not say
  "opposite". Both are right. `def-category-of-elements` defines $\int P$ for a
  presheaf $P$ directly, with a morphism $(c,x)\to(d,y)$ given by $f:c\to d$
  satisfying $x=P(f)(y)$, so its projection to $\mathcal J$ is already covariant
  and $W\star F$ is the colimit over $\int W$ itself. Kelly forms the category of
  elements of the weight viewed as a covariant functor on $\mathcal J^{\mathrm{op}}$,
  which is that same category read backwards. Cite the published definition and
  the agreement will hold; insert an $\mathrm{op}$ to match Kelly's phrase
  literally and the variance is wrong.

**B9-2** — the weighted half had no existence corollary. **applied.**

- `cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target`
  is on the A page at position 37 (§1 lists it as **36a**; see the note there on
  why 37–49 are not renumbered). It was in no other artifact of mine.
- Contract row written, modelled on item 12's, which is the same statement for
  ends: seven facts, four numbered steps — the smallness count for $\int W$
  carried out inline, the limit clause, the colimit clause, and a fourth step
  that states sufficiency without necessity, which is design trap 1 and is why
  `Completeness and cocompleteness do not assert the existence of limits or
  colimits of large diagrams` is cited as a fact rather than left to the reader.
  All eight boundary rows are dispositioned; none is a templated
  `not_applicable`. `finite_smoke` is empty, as item 12's is: an existence claim
  over an arbitrary complete target has no bounded countermodel to search.
- Checked the mathematics rather than taking the repair on trust. The count is
  that $\operatorname{Ob}(\int W)$ is a disjoint union of sets indexed by a set
  and a morphism of $\int W$ is determined by its domain, its codomain and the
  underlying morphism of $\mathcal J$, so no choice is used; the presheaf case
  counts identically.
- **Hypothesis the Statement must carry:** $\mathcal M$ locally small. The page's
  definition of a weighted limit is a representation of a $\mathbf{Set}$-valued
  functor $m\mapsto[\mathcal J,\mathbf{Set}](W,\mathcal M(m,F-))$, so local
  smallness is standing on the whole weighted half; an existence statement that
  omits it claims more than its route gives. Written into the contract's step 2.1
  and 3.1.
- Provenance: statement `ai-altered`, proof `ai-altered`, recorded in §9 with the
  reason. It is a `deps` target of nothing, so it is non-load-bearing either way,
  and §9's blanket "every one of these is a `deps` target" is corrected to name
  the exception.
- No coverage row was added or changed. No source heading states this corollary
  — it is Kelly (3.33)/(3.34) plus the definition of completeness — and
  `contents` is the source's own headings, not the page's items. Item 19 carries
  the same situation and the same note.

**B9-3** — Loregian Exercise 1.13 sent to `owner-decision`. **already correct;
no edit.** Alpha accepted the decline, left my coverage row and its reason
standing deliberately, and routed the forward half to
`kan-extensions-density-and-the-free-cocompletion` for step 9. That routing is
Alpha's paragraph and step 9's decision, not a coverage-file edit: `destination`
must resolve to a page that will own the result, and no page owns it today.

**B9-4** — the design's `cex-a-dinatural-family-whose-composite-is-not-dinatural`
dropped. **already correct; drop approved**, on the evidence that the witness is
promoted to `thm-dinatural-transformations-do-not-compose-in-general` and
restated in `fs-dinatural-transformations-compose`. No edit.

**B9-5** — Richter replacing Mac Lane as the fetch-verifiable primary.
**already correct; approved.** The prose-scaffold amendment A1 in §10 stays as
written for the lead Alpha to apply.

**B9-6** — my own step-2 repairs F3–F8 verified by Alpha, including the F6
citation-fidelity finding (the published corollary is contravariant, so the
co-Yoneda chain must apply it in $\mathbf{Set}^{\mathrm{op}}$ in a numbered
step). **already correct; no edit.**

**D-1** — `SCHEMA.md` §6 still states a 100-item review ceiling where
`validate-plan.mjs` and `CLAUDE.md` say 60. Not mine to fix: my write scope is
this batch's three files. Recorded here so it is not lost if the review file is
not read again.

**Self-found while reconciling the item list.** §1's by-kind tally read "20
theorems, 5 corollaries" and summed to 45 against its own 49-item list. It was
wrong when written at step 2, before any Alpha repair, and is corrected to the
tally the list and `pages.json` both give: 8 definitions, 3 propositions, 1
lemma, 23 theorems, 7 corollaries, 2 remarks, 6 false statements, 50 items. A
count in a notes file is the same defect class as a count in prose; nobody
recounts a count.

**Checks run in this pass, from the repo root.** A gate a Beta ran is evidence,
never a stage transition; the engine runs the authoritative ones.

```
node tools/coverage-checklist.mjs research/frontier-18-batch-9.coverage.json
  -> 1 page(s), 154 harvested result(s), 0 error(s), 0 warning(s)
node tools/coverage-checklist.mjs --require-destination research/frontier-18-batch-9.coverage.json
  -> 1 page(s), 154 harvested result(s), 0 error(s), 0 warning(s)
node tools/content-policy.mjs --manifest-only research/frontier-18-batch-*.pages.json
  -> 786 scoped item(s), 0 error(s), 0 warning(s)      [all ten live batches]
node tools/validate-plan.mjs research/plan-spec.json
  -> OK; acyclic and consistent over the 348 pages that carry item lists
node tools/splice-plan.mjs --run frontier-18 --batch 9 --dry-run
  -> 2 page(s) spliced, 0 already correct, 59 item(s)
node tools/prosecheck.mjs research/frontier-18-batch-9.notes.md --warnings
  -> 0 error(s), 26 warning(s); OK, no positional claim contradicts the spec
```

`validate-plan` was run against the unspliced `plan-spec.json`, which is what the
brief names: this batch's 50 + 9 items are not in the spec until stage `4-splice`
writes them, so that run does not yet see them. The splice dry-run is the check
that they go in cleanly, and its 59 items are the 50 + 9 above.
`proof-contract --strict` cannot run at step 3 — it reads `items/*.md`, and
nothing is authored — so the contract additions were checked two other ways
instead: every quote citing a **published** item was verified as an exact
normalised substring of that item's Definition on disk in this dispatch, and a
structural pass over all 49 contracts confirmed that every fact's `uses` names a
real step, every step input names a real fact or earlier step, every declared
fact is some step's input, and all eight boundary rows are present with evidence
or a reason.

## Continuity checkpoint — step 5 authoring, part 1

- **Substage:** step 5, authoring. A-page items 1–28 written and prechecked
  clean (`def-dinatural-transformation` through
  `thm-the-ninja-yoneda-lemma-in-coend-form`). Items 29–50 and the nine B-page
  items are not yet written. The page files, the contract sync and the
  coverage re-check are all still outstanding.
- **Owned artifacts:** `items/<the 58 ids>.md`,
  `library/category-theory/ends-coends-and-weighted-limits.md` and its
  `-examples` companion (not yet created), plus my three research files.
- **Gates run so far:** `precheck.mts` on each authored item, individually,
  all PASS. Nothing else has been run yet.
- **Decisions taken while authoring, to carry into the report:**
  1. `thm-the-twisted-arrow-category-is-the-category-of-elements-of-the-hom-bifunctor`
     asserts an **isomorphism of categories** commuting with the two
     projections, not an equality. The step-2 contract said "equal, not merely
     isomorphic"; under this library's morphism-tagging convention
     ([[def-category]]) a morphism is a triple and an object of the category of
     elements is a pair of a pair, so equality is not available and was not
     claimed.
  2. The step-2 contract had the **variance backwards** in the generating
     relation of items 14 and 15: it wrote $T(f,1_{c'})$ and $T(1_c,f)$, whose
     sources are the diagonal values, where the generator is indexed by
     $x\in T(c',c)$ and the two legs are $T(f,1_c)$ and $T(1_{c'},f)$. Authored
     with the correct legs; the contract rows are corrected to match.
  3. `thm-a-family-natural-in-the-parameter-factors-through-the-parametrised-end`
     gained a second, **dinatural** clause, and its title changed accordingly.
     Fubini spends that clause; the naturality clause alone does not cover a
     wedge in the parameter.
  4. `thm-the-ninja-yoneda-lemma-in-coend-form` is proved **directly from the
     initial-cowedge universal property** rather than by the scaffold's chain
     of bijections. The direct proof needs only local smallness and drops six
     scaffold dependencies. Reported in full at step 5's ledger.
- **Exact next action:** author `def-functor-tensor-product` (A item 29) and
  continue in page order.

## Step-5 authoring

Completed authoring for both pages on August 24, 2026. All 59 manifest items
are on disk, both page files exist, and the batch proof-contract file has been
resynchronised to the final prose after reflow and precheck.

### Per-item list

#### `ends-coends-and-weighted-limits`

- `def-dinatural-transformation` — precheck `n/a`
- `prop-a-natural-transformation-composed-with-a-dinatural-transformation-is-dinatural` — precheck `pass`
- `thm-dinatural-transformations-do-not-compose-in-general` — precheck `pass`
- `def-wedge-and-cowedge` — precheck `n/a`
- `def-end-and-coend` — precheck `n/a`
- `thm-ends-and-coends-are-unique-up-to-unique-isomorphism` — precheck `pass`
- `thm-a-natural-transformation-induces-a-morphism-of-ends-and-of-coends` — precheck `pass`
- `def-twisted-arrow-category` — precheck `n/a`
- `thm-the-twisted-arrow-category-is-the-category-of-elements-of-the-hom-bifunctor` — precheck `pass`
- `thm-an-end-is-a-limit-over-the-twisted-arrow-category` — precheck `pass`
- `prop-the-end-of-a-functor-mute-in-its-first-variable-is-the-limit-of-that-functor` — precheck `pass`
- `cor-ends-and-coends-exist-when-the-index-category-is-small-and-the-target-is-complete-or-cocomplete` — precheck `pass`
- `thm-an-end-is-an-equalizer-between-two-products` — precheck `pass`
- `thm-a-set-valued-coend-is-a-quotient-of-a-coproduct-by-the-dinaturality-relation` — precheck `pass`
- `thm-a-module-valued-coend-is-a-quotient-of-a-direct-sum-by-the-dinaturality-submodule` — precheck `pass`
- `thm-a-continuous-functor-preserves-ends-and-a-cocontinuous-functor-preserves-coends` — precheck `pass`
- `cor-a-right-adjoint-preserves-ends-and-a-left-adjoint-preserves-coends` — precheck `pass`
- `cor-the-hom-functor-turns-a-coend-into-an-end-and-preserves-ends` — precheck `pass`
- `def-parametrised-end-and-parametrised-coend` — precheck `n/a`
- `thm-a-chosen-family-of-ends-assembles-into-a-functor-of-the-parameters` — precheck `pass`
- `thm-a-family-natural-in-the-parameter-factors-through-the-parametrised-end` — precheck `pass`
- `lem-a-wedge-on-a-product-index-category-is-dinatural-in-each-variable-separately` — precheck `pass`
- `thm-fubini-for-ends` — precheck `pass`
- `cor-ends-commute-with-ends` — precheck `pass`
- `thm-the-set-of-natural-transformations-is-an-end` — precheck `pass`
- `cor-the-end-of-the-hom-functor-is-the-monoid-of-natural-endomorphisms-of-the-identity` — precheck `pass`
- `thm-the-end-form-of-the-yoneda-lemma` — precheck `pass`
- `thm-the-ninja-yoneda-lemma-in-coend-form` — precheck `pass`
- `def-functor-tensor-product` — precheck `n/a`
- `def-set-weighted-limit-and-weighted-colimit` — precheck `n/a`
- `thm-a-weighted-limit-is-unique-up-to-unique-isomorphism` — precheck `pass`
- `prop-a-weighted-limit-in-set-is-the-set-of-natural-transformations-from-the-weight` — precheck `pass`
- `def-power-and-copower-by-a-set` — precheck `n/a`
- `thm-a-power-is-a-product-of-copies-and-a-copower-is-a-coproduct-of-copies` — precheck `pass`
- `thm-a-weighted-limit-is-an-end` — precheck `pass`
- `thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements` — precheck `pass`
- `cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target` — precheck `pass`
- `cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements` — precheck `pass`
- `thm-the-constant-singleton-weight-recovers-an-ordinary-limit` — precheck `pass`
- `thm-weighted-limits-over-a-representable-weight-are-evaluation` — precheck `pass`
- `thm-representable-functors-carry-weighted-limits-to-weighted-limits` — precheck `pass`
- `thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor` — precheck `pass`
- `rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits` — precheck `n/a`
- `rem-orientation-and-notation-conventions-for-ends-coends-and-twisted-arrows` — precheck `n/a`
- `fs-dinatural-transformations-compose` — precheck `pass`
- `fs-every-end-exists` — precheck `pass`
- `fs-a-coend-is-a-colimit-over-the-twisted-arrow-category-under-this-pages-convention` — precheck `pass`
- `fs-every-functor-preserves-ends` — precheck `pass`
- `fs-a-weighted-limit-is-the-ordinary-limit-of-the-same-diagram` — precheck `pass`
- `fs-yonedas-original-notation-agrees-with-the-modern-one` — precheck `pass`

#### `ends-coends-and-weighted-limits-examples`

- `ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram` — precheck `pass`
- `ex-the-evaluation-family-is-dinatural` — precheck `pass`
- `ex-the-twisted-arrow-category-of-the-walking-arrow` — precheck `pass`
- `ex-the-tensor-product-of-a-right-and-a-left-monoid-set-as-a-coend` — precheck `pass`
- `ex-the-coend-of-a-hom-functor` — precheck `pass`
- `ex-fubini-verified-on-a-two-object-index` — precheck `pass`
- `ex-a-weighted-limit-computing-a-kernel-pair` — precheck `pass`
- `ex-copowers-and-powers-in-set` — precheck `pass`
- `ex-a-module-valued-coend-computed-as-a-quotient-of-a-direct-sum` — precheck `pass`

### Ledger

- `ex-copowers-and-powers-in-set` — missing scaffold item file added. `provenance.statement/proof = ai-generated/ai-generated`. Counterexample search checked the empty, singleton, and degenerate set cases; no counterexample found, and the universal-property formulas match the finite witness counts.
- `ex-a-module-valued-coend-computed-as-a-quotient-of-a-direct-sum` — missing scaffold item file added. `provenance.statement/proof = ai-altered/ai-generated`. Source-backed by Richter Example 4.4.7 and specialised to an explicit walking-arrow $\mathbb Z$-module computation with quotient $(\mathbb Z\oplus\mathbb Z)/\langle(2,-3)\rangle\cong\mathbb Z$.
- `library/category-theory/ends-coends-and-weighted-limits.md` — page file created from the final manifest. The authored summary was written last from the items on disk, and the six `fs-` items were placed in the page `examples:` list rather than the `items:` list, matching the published house page format.
- `library/category-theory/ends-coends-and-weighted-limits-examples.md` — companion B-page file created with all nine examples and no authored summary body.
- `thm-the-twisted-arrow-category-is-the-category-of-elements-of-the-hom-bifunctor` — statement authored as an isomorphism of categories commuting with the projections, not literal equality, because the two constructions have different native object/morphism presentations even when canonically identified.
- `thm-a-set-valued-coend-is-a-quotient-of-a-coproduct-by-the-dinaturality-relation` and `thm-a-module-valued-coend-is-a-quotient-of-a-direct-sum-by-the-dinaturality-submodule` — the generating relation was authored with the correct off-diagonal orientation $x\in T(c',c)$ and the two legs $T(f,1_c)$ and $T(1_{c'},f)$, matching the final theorem statements and the worked examples.
- `thm-a-family-natural-in-the-parameter-factors-through-the-parametrised-end` — authored with both the natural and the dinatural clauses, because the Fubini route spends both and the naturality-only scaffold wording was too weak.
- `thm-the-ninja-yoneda-lemma-in-coend-form` — proof written directly from the initial-cowedge universal property rather than through the scaffold's longer bijection chain; the final dependency list and contract reflect that shorter route.
- `ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram` — notation repaired from `F0`, `G0`, `F1`, `G1` to `F(0)`, `G(0)`, `F(1)`, `G(1)` so proof-contract tokenisation matches the intended mathematics.
- Component provenance values and rationales for the whole batch remain recorded in §9. No new AI-generated theorem, proposition, lemma, definition, remark, or false statement was introduced in this pass.

### Gates

- `node tools/tsx-run.mjs tools/reflow.mts <batch-9 items>` — pass.
- `node tools/tsx-run.mjs tools/precheck.mts <batch-9 items>` — pass; 49 proof-bearing items checked, 0 failing.
- `node tools/proof-contract.mjs research/frontier-18-batch-9.proof-contracts.json --strict` — pass; 49/49 contract items checked.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass.
- `node tools/content-policy.mjs research/frontier-18-batch-9.pages.json` — pass; 59 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-18-batch-9.coverage.json` — pass.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-18-batch-9.coverage.json` — pass.
- `node tools/prosecheck.mjs library/category-theory/ends-coends-and-weighted-limits.md library/category-theory/ends-coends-and-weighted-limits-examples.md research/frontier-18-batch-9.notes.md --warnings` — 0 errors, 33 warnings; every warning is a count-in-prose warning in these notes, and the two page files were clean.
- `node tools/depcheck.mjs` — failed outside batch 9 on unrelated existing repository issues, including unresolved links, page-item mismatches, and cited-not-in-deps rows elsewhere in the tree.
- `node tools/fwdcheck.mjs` — failed outside batch 9 on unrelated undeclared forward references and one unrelated unresolved `[[a,b]]` link.
- `node tools/extcheck.mjs` — pass, with inherited warnings only.
- `node tools/citecheck.mjs` — no batch-9 warnings; repo-wide heuristic warnings remain elsewhere.

### Escalations

- No batch-9 mathematical blocker remains.
- Shared-tree blocker for a fully green repo sweep: `depcheck` and `fwdcheck` are red on unrelated existing items and pages outside this batch. I did not edit outside batch 9 to clear those failures.

### Confidence

High on batch 9's authored scope. All 59 manifest items are on disk, both page files exist, the batch precheck/content-policy/proof-contract/coverage gates are clean, and the A/B page prose is clean under prosecheck.

What I did not verify: the unrelated repo-wide `depcheck` and `fwdcheck` failures, and every non-batch warning emitted elsewhere by `citecheck` and `extcheck`. The AI-generated examples were checked by explicit finite computations rather than by external sourcing.

## Continuity checkpoint — step 5 authoring, complete

- **Substage:** step 5 complete for batch 9; ready for step 6 audit.
- **Owned artifacts:** all 59 `items/<id>.md` files in the batch, `library/category-theory/ends-coends-and-weighted-limits.md`, `library/category-theory/ends-coends-and-weighted-limits-examples.md`, and the three batch research files.
- **Completed gates:** batch reflow, batch precheck, batch proof-contract strict, `validate-plan`, batch `content-policy`, batch `coverage-checklist` with `--require-destination`, page `prosecheck`, and repo `extcheck`. Repo `depcheck` and `fwdcheck` were run and are red outside this batch; repo `citecheck` was run and gives only non-batch heuristic warnings.
- **Open mathematical constraints:** none known inside batch 9 beyond the existing step-6 audit obligation to read the final prose independently.
- **Exact next action:** hand off to step 6 audit with this note section and the current disk state.

# frontier-11 step-6 reader-4 findings — batch 5

Date: 2026-08-12  
Reader: reader-4  
Scope: `universal-properties-and-the-yoneda-lemma` (order 361) and its examples page, 35 items total

## Outcome

I read every Statement/Example/Remark, every proof or verification step, every
Facts & Assumptions entry, and every cited dependency in the assigned batch. I
also read the two page files, the batch-5 notes and proof contracts, Alpha's
step-3 and recheck rulings, D9, and the actual order-359 pages (60 A-items and
25 B-items).

The mathematics of the Yoneda bijection, both naturality variables, the
contravariant form, full faithfulness, universal elements, categories of
elements, and comma-category characterisations is sound. I found and repaired
citation, source-locator, provenance, internal step-reference, and notation
defects. **No Statement, title, hypothesis, or mathematical claim was changed.**

## Named checks

- **Naturality in both variables: pass.**
  `thm-yoneda-lemma-is-natural-in-both-variables` is a separate theorem from
  `lem-yoneda-evaluation-bijection`. Steps 1.1--1.2 prove naturality in the
  represented object by precomposition with
  `\mathcal C(h,-)`, and step 1.3 proves naturality in the target functor by
  componentwise vertical composition with `\eta`. Neither obligation is folded
  into the bare bijection.

- **D9 size clause: pass.**
  `rem-size-of-natural-transformation-collections` says that local smallness
  alone does not make an arbitrary object-indexed natural-transformation
  collection set-coded; it forms an actual functor category only for a small
  source, distinguishes the representable-source case where Yoneda gives a
  bijection with the set `F(a)`, and explicitly declines to assert a global
  proper-class counterexample.

- **Order 359 non-restatement: pass.** I inspected the published 60-item A-page
  and 25-item examples page on disk. Batch 5 cites their category, functor,
  natural-transformation, opposite/product/functor-category, size,
  full-faithful/embedding, and comma-category infrastructure; it does not
  restate those results. Its new content begins with the hom-functor and
  representability layer.

- **Iota convention: pass.** No prohibited canonical embedding applied to a
  natural number occurs. The inclusions in the universal-property examples are
  ordinary named structure maps (`i_A`, `i_B`, and `j`).

## Fatal defects repaired

“Fatal” follows the reader brief: an inaccurate source/dependency/step citation
is fatal even when the intended correction is short.

### A-page items

1. **`thm-universal-elements-and-universal-factorisations` — inaccurate source
   locator.** The disk frontmatter cited “Leinster, Lemma 4.1.27”; 4.1.27 is an
   exercise about isomorphic representables, not the unique-factorisation
   characterisation. I changed it to Leinster Corollaries 4.3.2 and 4.3.3,
   which state the presheaf and covariant forms respectively. Effect: source
   precision only.

2. **`thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism`
   — inaccurate source locators.** The old “Riehl, Proposition 2.3.9” is not a
   proposition: `(2.3.9)` is the tensor-product representation display.
   Leinster Corollary 4.3.10 proves isomorphism of representing objects but not
   the stated compatibility uniqueness. I replaced them with Riehl Corollary
   2.3.2 and Campbell Corollary 1.2.1, both of which give the unique compatible
   isomorphism. Effect: source precision only.

3. **`def-category-of-elements` — incomplete variance citation.** Its Riehl
   source named only Definition 2.4.1, the covariant construction, while the
   item defines both covariant and contravariant categories of elements. I
   changed the locator to Definitions 2.4.1 and 2.4.2. Effect: both displayed
   variance conventions are now sourced.

4. **`thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements`
   — false source numbering.** “Riehl, Lemma 2.4.4” and “Leinster, Lemma
   4.1.27” are not the cited theorem. The exact Riehl result is Proposition
   2.4.8. I retained that exact source and removed the false Leinster locator.
   Effect: source precision only.

5. **`def-universal-arrow-to-and-from-a-functor` — false source numbering.**
   Riehl `(2.3.5)` is an equation, not a definition, and Leinster Definition
   4.1.17 defines contravariant representability rather than universal arrows.
   I replaced both by Riehl Sections 4.2 and 4.7, where universal arrows and
   the generic comma-category formulation are developed. Effect: source
   precision only.

6. **`thm-universal-arrows-are-initial-or-terminal-in-comma-categories` — weak
   and partly inaccurate source attribution.** Leinster Section 4.1 does not
   state the comma-category characterisation. I replaced the pair by Riehl
   Proposition 2.4.8 and Theorem 4.2.7(v)--(vi), the category-of-elements and
   initial/terminal comma-object statements used by the proof. Effect: source
   precision only.

### Examples-page items

7. **`ex-set-products-as-representing-objects` — wrong literature locator and
   overclaimed dependency fact.** Leinster Example 4.1.5 concerns the
   underlying-set functors on `Top` and `Grp`, not Cartesian products. I
   changed the source to Campbell Example 1.1 and Definition 2.1. Fact F4 also
   attributed function extensionality to `def-function`, whose disk text does
   not state it; I added and cited
   `lem-two-functions-are-equal-exactly-when-they-agree-at-every-point`.
   Effect: the same pointwise inverse proof now has an exact dependency.

8. **`ex-set-coproducts-as-representing-objects` — wrong source locator and
   self-referential step citation.** Leinster Example 5.1.14 is about kernels
   as equalizers, not disjoint sums. Because this item remains `ai-generated`
   with a self-contained proof, I corrected the contextual source to Leinster
   Section 3.1 (sums of sets). Step 3.1 said “Steps 2.1--3.1”; I changed it to
   “Steps 2.1--2.3”. Effect: no circular internal citation.

9. **`ex-function-sets-as-exponential-representing-objects` — wrong source,
   overclaimed dependency fact, and self-reference.** The cited Leinster
   Example 6.3.9 is not the displayed currying representation. I replaced it
   with Riehl Example 2.1.6(iv). Fact F5 now cites the exact function
   extensionality lemma as well as `def-function`. Step 3.1 changed “steps 2.1
   and 3.1” to “steps 2.1 and 2.2”. Effect: exact source and noncircular proof
   closure.

10. **`ex-free-group-universal-property-as-a-representation` — irrelevant
    source and inaccurate step citation.** Spivak Section 3.4.1 is about
    orders, not free groups. I replaced the source list with Leinster Examples
    1.2.4(a) and 2.1.3(b). Step 3.1 claimed that steps 1.1 and 1.2 establish
    representation, but naturality is step 2.1; I changed the prose to steps
    1.1 and 2.1, matching its existing proof tags. Effect: exact evidence for
    the representation; the separate cyclicity calculation remains step 1.2.

11. **`ex-polynomial-ring-represents-the-underlying-set-functor-on-rings` —
    false/malformed unit calculation.** Step 1.2 read
    `$(1,1_R)r^0=1_R$`, which is an ordered-pair expression rather than ring
    multiplication. I changed it to `$(1\cdot1_R)r^0=1_R$`. Effect: the unit
    preservation calculation is a valid ring identity.

12. **`ex-the-one-point-space-represents-the-underlying-set-functor-on-top`
    — inaccurate dependency citation and provenance.** Fact F2 attributed the
    inverse-image-of-opens characterisation to `def-continuous-map-top`, whose
    disk definition gives pointwise continuity only. I added
    `thm-continuity-characterisations-top` and cited clause (b). Fact F5 now
    cites the exact function-extensionality lemma. Riehl Example 2.1.6(ii)
    states this example directly, so I changed statement provenance from
    `ai-generated` to `literature-derived`, removed the now-inapplicable
    `generation` block, and sharpened the source locator to `(ii)`. Effect: the
    proof and metadata now match their actual sources; the claim is unchanged.

13. **`ex-representable-presheaf-on-a-poset` — wrong source locators.**
    Leinster Example 1.2.7 concerns functors between one-object monoid
    categories, and Definition 4.1.3 is covariant representability. I changed
    the locator to Example 1.1.8(e) (preorders as categories) and Definitions
    4.1.16--4.1.17 (contravariant hom-functors and representability). Effect:
    the locally computed principal-down-set example remains `ai-generated`,
    with accurate background sources.

14. **`ex-two-singletons-are-canonically-isomorphic-representing-objects` —
    false source numbering and overclaimed dependency fact.** The old Riehl
    “Proposition 2.3.9” is the same nonexistent proposition described above. I
    changed it to Riehl Example 2.1.5(i) and Corollary 2.3.2. Fact F3 now cites
    the exact function-extensionality lemma. Effect: both singleton
    representations and their unique compatible isomorphism are sourced.

## Nonfatal defects repaired

1. **`lem-yoneda-evaluation-bijection`: unused dependency/fact.** F4 cited the
   definition of representability but was not used in the construction or the
   sethood conclusion. I removed F4, its dependency, and the spurious step-3.1
   tag. Effect: no dependency inflation.

2. **`ex-set-coproducts-as-representing-objects`: implicit extensionality and
   ambiguous notation.** Step 2.2 inferred equality of functions pointwise
   without an explicit license and wrote `$[\Phi_X(q)]=q$`. I added F5 from
   the published extensionality lemma and wrote the actual copairing
   `$[q\circ i_A,q\circ i_B]=q$`. Effect: the inverse calculation is explicit.

3. **`ex-free-monoid-universal-property-as-a-representation`: malformed
   naturality notation.** Step 4.1 wrote `r\widehat f` and
   `\widehat{,U(r)f,}`. I changed them to `r\circ\widehat f` and
   `\widehat{U(r)\circ f}`. Effect: no mathematical change.

4. **`ex-free-group-universal-property-as-a-representation`: malformed hat
   notation.** Step 2.1 now writes `\widehat{U(r)\circ f}` instead of
   `\widehat{,U(r)\circ f,}`. Effect: no mathematical change.

5. **`ex-yoneda-embedding-of-the-walking-arrow-category`: omitted proof tag.**
   Step 2.2 uses the unique empty function stated in F3 but omitted F3 from its
   tags. I added it. Effect: the move is explicitly licensed.

## Full item-by-item coverage

| Item | Finding |
|---|---|
| `def-hom-functors-and-hom-bifunctor` | Read completely; no defect found. |
| `thm-hom-assignments-are-functors` | Read every step and dependency; no defect found. |
| `thm-hom-assignment-is-a-bifunctor` | Read every step and dependency; no defect found. |
| `def-generalized-element-and-shape` | Read completely; no defect found. |
| `def-presheaf-representable-functor-and-representation` | Read completely; no defect found. |
| `prop-initial-and-terminal-objects-as-representations` | Read every step and dependency; no defect found. |
| `thm-initial-and-terminal-objects-are-unique-up-to-unique-isomorphism` | Read every step and dependency; no defect found. |
| `lem-yoneda-evaluation-bijection` | Nonfatal unused dependency/fact repaired; proof and sethood claim otherwise sound. |
| `thm-yoneda-lemma-is-natural-in-both-variables` | Read every step and dependency; both independent naturality obligations are proved; no defect found. |
| `cor-contravariant-yoneda-lemma` | Read every step and dependency; variance and naturality are correct; no defect found. |
| `rem-size-of-natural-transformation-collections` | Read completely; D9 wording is correct; no defect found. |
| `def-yoneda-embedding` | Read completely; no defect found. |
| `thm-yoneda-embedding-is-fully-faithful` | Read every step and dependency; no defect found. |
| `cor-representable-presheaves-detect-isomorphism-of-objects` | Read every step and dependency; no defect found. |
| `def-universal-element` | Read completely; no defect found. |
| `thm-universal-elements-and-universal-factorisations` | Fatal source locator repaired; proof sound. |
| `thm-representing-objects-are-unique-up-to-unique-compatible-isomorphism` | Fatal source locators repaired; proof sound. |
| `def-category-of-elements` | Fatal incomplete source locator repaired; both variance conventions are correct. |
| `thm-universal-elements-are-initial-or-terminal-in-the-category-of-elements` | Fatal source locators repaired; proof sound. |
| `def-universal-arrow-to-and-from-a-functor` | Fatal source locators repaired; both directions are correct. |
| `thm-universal-arrows-are-initial-or-terminal-in-comma-categories` | Fatal source attribution repaired; comma equations and proof are correct. |
| `ex-set-products-as-representing-objects` | Fatal source/dependency citations repaired; construction and naturality are correct. |
| `ex-set-coproducts-as-representing-objects` | Fatal source/internal citation and nonfatal extensionality notation repaired; proof sound. |
| `ex-function-sets-as-exponential-representing-objects` | Fatal source/dependency/internal citations repaired; currying proof sound. |
| `ex-free-monoid-universal-property-as-a-representation` | Nonfatal notation repaired; construction, uniqueness, naturality, and empty-alphabet case are sound. |
| `ex-free-group-universal-property-as-a-representation` | Fatal source/internal citation and nonfatal notation repaired; representation and singleton cyclicity claims are sound. |
| `ex-polynomial-ring-represents-the-underlying-set-functor-on-rings` | Fatal malformed unit identity repaired; the noncommutative-target evaluation proof is sound. |
| `ex-the-one-point-space-represents-the-underlying-set-functor-on-top` | Fatal dependency/provenance defects repaired; proof including the empty target is sound. |
| `ex-representable-presheaf-on-a-poset` | Fatal source locators repaired; object and restriction-map computation is sound. |
| `cex-the-doubling-functor-on-set-is-not-representable` | Read every step and dependency; singleton test is sound; no defect found. |
| `ex-two-singletons-are-canonically-isomorphic-representing-objects` | Fatal source/dependency citations repaired; compatible isomorphism proof sound. |
| `ex-yoneda-embedding-of-the-walking-arrow-category` | Nonfatal omitted tag repaired; all hom-set, restriction, and natural-transformation tables are correct. |
| `ex-yoneda-lemma-for-a-monoid-action` | Read every step and dependency; left-action convention and equivariance formula are correct; no defect found. |
| `fs-yoneda-lemma-requires-a-small-category` | Read every step and dependency; `Set` is a valid large locally small refutation; no defect found. |
| `fs-nonisomorphic-objects-can-have-isomorphic-representable-presheaves` | Read every step and dependency; refutation by full faithfulness is sound; no defect found. |

The A-page has exactly its 21 assigned items and two summary paragraphs. The
examples page has exactly its 14 assigned items and no stray body prose. I
found no page-manifest or page-summary defect and made no library-page edit.

## Validation

- `precheck` on every changed proof-bearing item: **15 checked, 0 failing**.
  The two changed definitions correctly remain `verification.precheck: n/a`.
- `content-policy.mjs research/frontier-11-batch-5.pages.json`: **35 scoped
  items, 0 errors, 0 warnings**.
- `fwdcheck.mjs`: pass, 0 open forward references.
- `extcheck.mjs`: pass; only standing corpus warnings, none in this batch.
- `citecheck.mjs`: pass; 26 heuristic corpus warnings, none in this batch.
- `rendercheck.mjs`: pass for all 3,945 files.
- `prosecheck.mjs`: 0 errors.
- `depsource.mjs`: pass, 0 unresolved dependencies.
- I did not run `tools/gates.mjs`, as required.

`depcheck.mjs` was also run individually. Its assigned-batch dependency graph
has no missing or unresolved edge, but the global command exits nonzero on the
four already-approved published/unaudited complex-number items involved in the
protected plan-spec/order-54 page split. I did not touch those items or
`library/real-analysis/the-complex-exponential-and-eulers-formula.md`.

## Unchanged issue and blocker

The corrected items make
`research/frontier-11-batch-5.proof-contracts.json` stale. The dispatch
explicitly forbids editing any `research/frontier-11-batch-*` artifact, so I
did not reconcile it. A strict contract run now reports 11 errors, all
accounted for by these repairs:

- the contract still requires removed `lem-yoneda-evaluation-bijection` fact
  F4 and its step-3.1 input;
- it lacks exact citation contracts for the new function-extensionality facts
  in the product, coproduct, exponential, one-point-space, and two-singleton
  examples;
- it lacks the new continuity-characterisation citation in the one-point-space
  example; and
- it lacks the new F5 input at coproduct step 2.2 and F3 input at walking-arrow
  step 2.2.

Alpha or the orchestrator must update that artifact before the strict contract
gate can pass. This is the only blocker. There is no item-level mathematical
defect I believe remains wrong, no claim-changing repair awaiting
adjudication, and no permission or sandbox blocker.

## Source evidence consulted

The locator corrections above were checked against the official PDFs rather
than inferred from the batch author's notes:

- [Emily Riehl, *Category Theory in Context*](https://emilyriehl.github.io/files/context.pdf)
- [Tom Leinster, *Basic Category Theory*](https://arxiv.org/pdf/1612.09375.pdf)
- [Justin Campbell, Harvard Math 55b supplemental notes](https://people.math.harvard.edu/~campbell/tutnotes1.pdf)
- [David Spivak, *Category Theory for Scientists*](https://ocw.mit.edu/courses/18-s996-category-theory-for-scientists-spring-2013/9cf51d1394fc107baa6764d553dd0bb6_MIT18_S996S13_textbook.pdf)

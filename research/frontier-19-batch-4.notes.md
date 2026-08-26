# frontier-19 · Beta-4 · batch notes — `localisation-of-modules-and-support` (steps 1–2)

Run `frontier-19`, batch `4`, one A/B pair, category `commutative-algebra`.
Author: Beta-4.
Design anchors read first: `research/plan-commutative-algebra-track.md` CA-2 at
lines 297-361, then the later `CA-2 additions` block at lines 3128-3195.

Artifacts owned by this batch:

- `research/frontier-19-batch-4.pages.json`
- `research/frontier-19-batch-4.coverage.json`
- `research/frontier-19-batch-4.proof-contracts.json`
- this file

Nothing else in the repository was written by this dispatch.

---

## 1. Per-page item list

### A page `localisation-of-modules-and-support` — order 111.003 — 35 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-localisation-of-a-module` | definition | Localisation of a module at a multiplicative subset |
| 2 | `lem-localised-module-fraction-equivalence-is-an-equivalence-relation` | lemma | The module-fraction relation is an equivalence relation |
| 3 | `lem-localised-module-addition-independent-of-representatives` | lemma | Addition of localised module fractions is independent of representatives |
| 4 | `lem-localised-module-scalar-action-independent-of-representatives` | lemma | The localised scalar action is independent of representatives |
| 5 | `thm-universal-property-localisation-of-a-module` | theorem | Universal property of localisation for modules |
| 6 | `thm-localisation-of-modules-is-tensor-product` | theorem | Localisation of modules is extension of scalars |
| 7 | `thm-localisation-of-modules-commutes-with-quotients-and-sums` | theorem | Localisation commutes with quotient modules and arbitrary direct sums |
| 8 | `lem-zero-in-a-localised-module` | lemma | A localised module fraction is zero exactly when one denominator kills its numerator |
| 9 | `lem-localisation-preserves-injectivity` | lemma | Injective module maps remain injective after localisation |
| 10 | `lem-localisation-preserves-surjectivity` | lemma | Surjective module maps remain surjective after localisation |
| 11 | `thm-localisation-of-modules-is-exact` | theorem | Localisation of modules is exact |
| 12 | `cor-localisation-commutes-with-kernels-images-and-cokernels` | corollary | Localisation commutes with kernels images and cokernels |
| 13 | `cor-localisation-commutes-with-finite-intersections-of-submodules` | corollary | Localisation commutes with finite intersections of submodules |
| 14 | `lem-localisation-of-hom-natural-map` | lemma | There is a natural localisation map on Hom |
| 15 | `lem-localised-hom-finite-free-case` | lemma | The localised Hom map is an isomorphism for finite free sources |
| 16 | `lem-localised-hom-finite-presentation-kernel-step` | lemma | A finite presentation reduces localised Hom to the finite free case |
| 17 | `thm-localisation-of-hom-for-finitely-presented-modules` | theorem | Localisation of Hom for finite and finitely presented modules |
| 18 | `thm-local-criterion-for-zero-modules-and-maps` | theorem | Local criteria for zero modules and for injective, surjective, and bijective maps |
| 19 | `thm-local-criterion-for-exactness-of-modules` | theorem | A sequence of modules is exact exactly when all prime localisations are exact |
| 20 | `def-support-of-a-module` | definition | Support of a module |
| 21 | `lem-support-membership-by-annihilator` | lemma | A prime lies in the support exactly when some element has annihilator inside it |
| 22 | `lem-support-of-a-cyclic-module-is-its-vanishing-set` | lemma | The support of a cyclic quotient is its vanishing set |
| 23 | `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports` | lemma | A finite module has the union of its generator-cyclic supports |
| 24 | `thm-support-and-annihilator-of-a-finite-module` | theorem | For a finite module, support is the set of primes containing the annihilator |
| 25 | `thm-support-in-a-short-exact-sequence` | theorem | Support in a short exact sequence is the union of the outer supports |
| 26 | `thm-support-of-a-tensor-product-of-finite-modules` | theorem | Support of a tensor product of finite modules is the intersection of the supports |
| 27 | `thm-support-of-arbitrary-direct-sums` | theorem | Support of an arbitrary direct sum is the union of the supports |
| 28 | `thm-support-under-localisation` | theorem | Support under localisation is restriction to primes disjoint from the denominator set |
| 29 | `def-jacobson-radical-of-a-ring` | definition | The Jacobson radical of a ring |
| 30 | `thm-jacobson-radical-unit-characterisation` | theorem | An element lies in the Jacobson radical exactly when one minus any multiple is a unit |
| 31 | `lem-determinant-trick-for-nakayama` | lemma | Determinant trick for Nakayama |
| 32 | `thm-nakayama-lemma` | theorem | Nakayama's lemma |
| 33 | `cor-nakayama-generators-modulo-an-ideal` | corollary | Generators modulo an ideal in the Jacobson radical lift to generators |
| 34 | `cor-minimal-generators-over-a-local-ring` | corollary | Minimal generators over a local ring are exactly residue-field bases |
| 35 | `cor-finite-module-locally-zero-near-a-prime` | corollary | A finite module that vanishes at a prime vanishes on some principal neighbourhood of that prime |

### B page `localisation-of-modules-and-support-examples` — order 111.004 — 10 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-localising-an-abelian-group-at-a-prime` | example | Localising cyclic abelian groups and Q/Z at a prime |
| 2 | `ex-localisation-kills-exactly-s-torsion` | example | Localising Z/12Z kills exactly the torsion seen by the denominator set |
| 3 | `ex-support-of-a-cyclic-module` | example | The support of Z/12Z is the pair of primes (2) and (3) |
| 4 | `ex-support-of-an-infinite-direct-sum` | example | The support of the direct sum over all primes of Z/pZ is the set of all nonzero prime ideals of Z |
| 5 | `ex-nakayama-jacobson-hypothesis-is-essential` | example | Over Z, the ideal (2) acts surjectively on Z/3Z but does not kill it |
| 6 | `ex-nakayama-finite-generation-is-essential` | example | The p-primary quotient Q/Z_(p) over Z_(p) shows finite generation is essential in Nakayama |
| 7 | `ex-minimal-generators-local-ring` | example | The ideal (x,y) in k[x,y]_(x,y) has two minimal generators |
| 8 | `ex-local-test-for-an-isomorphism` | example | The Chinese-remainder map Z/6Z -> Z/2Z direct-sum Z/3Z is an isomorphism by local tests |
| 9 | `ex-localised-hom-needs-finite-presentation` | example | Localised Hom can fail without finite presentation of the source |
| 10 | `ex-localisation-does-not-commute-with-products` | example | Localisation need not commute with infinite products |

Both counts are recountable from the tables above. The A page remains well below
the 60-item ceiling, so no split is proposed.

Landmarks for step 5 on the A page: items 1, 5, 6, 11, 18, 20, 24, 28, 29, 30,
32 and 34. Everything on the B page is non-landmark.

---

## 2. Per-pair richness report

Both required passes were run on this single A/B pair, and both changed the
scaffold materially.

**Proof-decomposition pass.**

- The module-localisation construction at CA-2 line 308 was too coarse as written.
  The later `CA-2 additions` block correctly isolates the three genuine
  well-definedness obligations: the fraction relation, addition, and scalar
  action. I adopted all three as separate lemmas before the universal property.
- The original single Hom-localisation theorem is now split into
  `lem-localisation-of-hom-natural-map`,
  `lem-localised-hom-finite-free-case`, and
  `lem-localised-hom-finite-presentation-kernel-step`, because the natural-map
  construction, the finite-free calculation, and the kernel diagram are
  mathematically different checks and are reused differently.
- The support/annihilator theorem is split through the cyclic and finite-generator
  support lemmas, so the later finite-module theorem reduces to one cyclic
  calculation plus one finite-union argument instead of a single opaque proof.
- Nakayama is split through
  `thm-jacobson-radical-unit-characterisation` and
  `lem-determinant-trick-for-nakayama`, so the Jacobson-radical input and the
  adjugate calculation are separately auditable.

No microlemma was added for routine algebra. The tensor comparison theorem and
the local exactness theorem stay as single landmarks because their proof shapes
are already short once the surrounding infrastructure has been separated out.

**Corollary pass.**

- Added `cor-localisation-commutes-with-kernels-images-and-cokernels` and
  `cor-localisation-commutes-with-finite-intersections-of-submodules` as the two
  immediate structural consequences a reader actually reuses after exactness.
- Added `thm-support-of-arbitrary-direct-sums` because otherwise the page would
  say nothing about the direct-sum/product seam even though the localisation
  machinery now supports that theorem cheaply.
- Added `cor-finite-module-locally-zero-near-a-prime` because Altman 13.35 and
  Milne 5.13 both make it the natural local consequence of support closure.
- Declined the later-additions corollaries
  `cor-finite-module-cyclic-near-a-prime` and
  `cor-finite-module-generated-by-r-elements-near-a-prime`. They are real
  literature results, but nothing in this page or its immediate successor CA-3
  consumes them, and they would enlarge the step-5 workload without closing a
  dependency or seam defect here.

The B page also changed under this pass: the design's generic
`ex-module-localisation-map-not-injective` is replaced by the more focused
`ex-localisation-kills-exactly-s-torsion`, because the ring-level witness
`cex-localisation-map-can-kill-a-nonzero-element` is already published and the
new example tests the module zero-fraction criterion instead of duplicating the
ring page.

---

## 3. Findings for the step-3 Alpha

Each is one recommendation, highest severity first.

### Finding 1 — adopt the later CA-2 decomposition, but keep the spec page id

**What is wrong.** The headline CA-2 table at lines 297-338 is mathematically
accurate but too coarse for step-5 authoring: it leaves the module-fraction
well-definedness, the Hom-localisation reduction, and the determinant step in
Nakayama as monoliths. The same design file later corrects this in the
`CA-2 additions` block at lines 3128-3195, but that block uses the slug
`localisation-of-modules-support-and-nakayama` while `plan-spec.json` keeps the
actual page id `localisation-of-modules-and-support`.

**What I propose.** Approve the hybrid I wrote:

- keep the spec page ids and orders;
- keep the original landmark theorems and companion-example remit;
- splice in the later addendum's decomposition lemmas where they sharpen the
  proof obligations.

**If declined.** Step 5 inherits exactly the kind of monolithic proofs the owner
asked Betas to prevent, and the richer later design pass stays inert.

### Finding 2 — record, do not locally adjudicate, the prerequisite drift

**What is wrong.** The CA-2 design says this page requires CA-1,
`the-field-of-fractions-and-localisation`, the published module pages,
`tensor-products-of-modules`, and the determinant trick originally planned on
`chain-conditions-and-semisimple-modules`. `plan-spec.json` at order 111.003
declares only `noetherian-rings-and-hilbert-basis-examples`.

**What I propose.** Record the drift and carry on with the spec exactly as the
brief instructs. The load-bearing dependencies I actually chose are all already
published on disk and earlier than order 111.003, so the page is not blocked.

**If declined.** The step-0 drift unit loses a real spec-vs-design mismatch, and
the batch report stops being the place where Alpha can see why the closure on
disk is larger than the single declared `requires` edge.

### Finding 3 — build the determinant trick locally instead of depending on a later page

**What is wrong.** The line-301 design sentence still speaks as if Nakayama needs
the determinant trick from `chain-conditions-and-semisimple-modules`. That page
is earlier in order, but the specific local lemma needed here is cheaper than
the page-scale route that sentence implies.

**What I propose.** Keep `lem-determinant-trick-for-nakayama` on this page and
prove it from the already published `thm-adjugate-identity-over-a-commutative-ring`.
This matches the later CA-2 additions block and removes an unnecessary external
proof dependency from the page narrative.

**If declined.** Nakayama's proof on this page points outward for a short linear
algebra calculation it can already support internally, which weakens the page's
self-contained proof spine.

### Finding 4 — keep the direct-sum support theorem and its infinite example

**What is wrong.** The line-297 design says nothing about arbitrary direct sums of
modules, even though the same page already proves localisation commutes with
direct sums and later support results use localisation as their test mechanism.
That silence leaves the direct-sum/product seam open again.

**What I propose.** Keep `thm-support-of-arbitrary-direct-sums` and the worked
example `ex-support-of-an-infinite-direct-sum`.

**If declined.** The support section omits its nearest natural infinite-family
consequence, and the reader learns nothing on this page about the direct-sum
versus product boundary that the B page can exhibit cheaply.

### Finding 5 — prefer the torsion example to the generic noninjectivity example

**What is wrong.** The design's `ex-module-localisation-map-not-injective` would
land too close to the already published ring-level counterexample
`cex-localisation-map-can-kill-a-nonzero-element`.

**What I propose.** Use `ex-localisation-kills-exactly-s-torsion` instead. It is
still a module-level noninjectivity witness, but it tests the zero-fraction
criterion directly and scales to two denominator sets on the same module.

**If declined.** The companion page duplicates published ring-level material more
closely and misses the sharper module-localisation seam.

---

## 4. Forward references

None kept.

---

## 5. New ids and duplicate-id check

I confirmed that every planned id above is absent from both `items/` and
`research/plan-spec.json` with this exact sweep:

```bash
rg -n 'def-localisation-of-a-module|lem-localised-module-fraction-equivalence-is-an-equivalence-relation|lem-localised-module-addition-independent-of-representatives|lem-localised-module-scalar-action-independent-of-representatives|thm-universal-property-localisation-of-a-module|thm-localisation-of-modules-is-tensor-product|thm-localisation-of-modules-commutes-with-quotients-and-sums|lem-zero-in-a-localised-module|lem-localisation-preserves-injectivity|lem-localisation-preserves-surjectivity|thm-localisation-of-modules-is-exact|cor-localisation-commutes-with-kernels-images-and-cokernels|cor-localisation-commutes-with-finite-intersections-of-submodules|lem-localisation-of-hom-natural-map|lem-localised-hom-finite-free-case|lem-localised-hom-finite-presentation-kernel-step|thm-localisation-of-hom-for-finitely-presented-modules|thm-local-criterion-for-zero-modules-and-maps|thm-local-criterion-for-exactness-of-modules|def-support-of-a-module|lem-support-membership-by-annihilator|lem-support-of-a-cyclic-module-is-its-vanishing-set|lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports|thm-support-and-annihilator-of-a-finite-module|thm-support-in-a-short-exact-sequence|thm-support-of-a-tensor-product-of-finite-modules|thm-support-of-arbitrary-direct-sums|thm-support-under-localisation|def-jacobson-radical-of-a-ring|thm-jacobson-radical-unit-characterisation|lem-determinant-trick-for-nakayama|thm-nakayama-lemma|cor-nakayama-generators-modulo-an-ideal|cor-minimal-generators-over-a-local-ring|cor-finite-module-locally-zero-near-a-prime|ex-localising-an-abelian-group-at-a-prime|ex-localisation-kills-exactly-s-torsion|ex-support-of-a-cyclic-module|ex-support-of-an-infinite-direct-sum|ex-nakayama-jacobson-hypothesis-is-essential|ex-nakayama-finite-generation-is-essential|ex-minimal-generators-local-ring|ex-local-test-for-an-isomorphism|ex-localised-hom-needs-finite-presentation|ex-localisation-does-not-commute-with-products' items research/plan-spec.json
```

It returned no matches.

---

## 6. Cross-batch dependencies

None. Every load-bearing dependency I kept is already published on disk and on a
strictly earlier page than order 111.003.

The page does depend materially on already published work from:

- `the-field-of-fractions-and-localisation`
- `modules-and-module-homomorphisms`
- `free-modules-and-exact-sequences`
- `tensor-products-of-modules`
- `chain-conditions-and-semisimple-modules`

That is the real closure behind Finding 2, but none of those dependencies needs
another `frontier-19` batch to finish first.

---

## 7. Confidence and explicit non-verifications

High confidence on the page ordering, dependency closure, and source-backed
mathematical shape. I opened every load-bearing published dependency from disk
before using it, and I kept no forward references.

I did **not** verify the full worked witnesses for these B-page items yet; they
are source-backed or checkable, but their explicit step-5 calculations still need
to be written:

- `ex-localised-hom-needs-finite-presentation`
- `ex-localisation-does-not-commute-with-products`
- `ex-nakayama-finite-generation-is-essential`

I also did **not** obtain fetch stamps for the harvested source URLs from this
sandbox. The exact attempted command and the exact blocker are recorded in §10.

---

## 8. Web research ledger and dependency-closure statement

### Exact URLs consulted

- `AK` — `https://web.mit.edu/18.705/www/13Ed.pdf`
- `Milne` — `https://www.jmilne.org/math/xnotes/CA.pdf`
- `Stacks-Loc` — `https://stacks.math.columbia.edu/tag/00CM`
- `Stacks-Local` — `https://stacks.math.columbia.edu/tag/00HN`
- `Stacks-Supp` — `https://stacks.math.columbia.edu/tag/080S`
- `Stacks-Jac` — `https://stacks.math.columbia.edu/tag/0AMD`
- `Stacks-Nak` — `https://stacks.math.columbia.edu/tag/00DV`
- `Pal` — `https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf`

### What each source supports

- `AK` supports the module-localisation construction, the tensor comparison, exactness,
  Hom localisation, support of finite modules, support in short exact sequences,
  tensor support, support under localisation, the local vanishing corollary, the
  local exactness criterion, and the local-generator criterion.
- `Milne` independently supports the universal property of module localisation,
  exactness of localisation, the local zero/map/exactness criteria, the
  principal-neighbourhood vanishing corollary, and the generator-lifting form of
  Nakayama.
- `Stacks-Loc` confirms the adopted universal-property phrasing in terms of
  `S^{-1}R`-modules, the iterated-localisation formulas, and the exact quotient
  comparison at the ring level.
- `Stacks-Local` confirms the prime/maximal equivalence for zero, exactness,
  injectivity, surjectivity, and bijectivity after localisation.
- `Stacks-Supp` confirms the support definition, the empty-support criterion, the
  annihilator/support equality for finite modules, base-change behaviour of
  support, and support in short exact sequences.
- `Stacks-Jac` confirms the Jacobson-radical unit criterion.
- `Stacks-Nak` confirms the determinant-style proof of Nakayama and the
  generator-lifting corollaries.
- `Pal` was used only to source-check the already published adjugate-identity
  dependency before using it in `lem-determinant-trick-for-nakayama`.

### Convention disagreements found

- `Stacks-Jac` writes the Jacobson radical as `rad(R)`. The page should keep the
  library's established wording “Jacobson radical” and the notation `J(R)` while
  noting the source convention in frontmatter citations only if needed.
- Altman/Milne/Stacks phrase the module universal property as “maps into modules
  on which S acts invertibly” while the planned page states it as a property of
  `S^{-1}R`-modules. These are equivalent by `Stacks-Loc` 10.9.5, and I kept the
  `S^{-1}R`-module phrasing because it matches the published ring-localisation
  page and later tensor comparison.
- `Stacks-Supp` treats support as a subset of `Spec R`; before CA-3 this page
  must say explicitly that `Spec R` is being read only as the set of prime ideals
  already available in the reading order.
- The zero-ring boundary is not always stated uniformly. The page should keep the
  published `def-local-ring` convention that a local ring is nonzero, and it
  should state the empty-intersection convention `J(0) = 0` explicitly in
  `def-jacobson-radical-of-a-ring`.

### Dependency-closure statement

Every proposed published dependency was opened from disk. Every load-bearing
dependency is either earlier on this A page or already published on an earlier
page. No exception.

None of those load-bearing dependencies has `provenance.statement: ai-generated`,
and none is legacy-unclassified. Two eligible `ai-altered` published statements
were source-checked before I relied on them:

- `prop-localisation-zero-equality-and-kernel-criteria` against `Stacks-Loc`
- `thm-adjugate-identity-over-a-commutative-ring` against `Pal`

I treated `prop-elementary-tensor-formulas-descend-exactly-when-balanced` as
`established-from-knowledge`: it is the direct reformulation of the tensor
universal property with matching conventions, and its exact claim creates no
convention doubt here.

---

## 9. Expected provenance plan for step 5

### URL key

- `AK` = `https://web.mit.edu/18.705/www/13Ed.pdf`
- `Milne` = `https://www.jmilne.org/math/xnotes/CA.pdf`
- `Stacks-Loc` = `https://stacks.math.columbia.edu/tag/00CM`
- `Stacks-Local` = `https://stacks.math.columbia.edu/tag/00HN`
- `Stacks-Supp` = `https://stacks.math.columbia.edu/tag/080S`
- `Stacks-Jac` = `https://stacks.math.columbia.edu/tag/0AMD`
- `Stacks-Nak` = `https://stacks.math.columbia.edu/tag/00DV`
- `Pal` = `https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf`

### A-page items

- `def-localisation-of-a-module`, `def-support-of-a-module`,
  `def-jacobson-radical-of-a-ring`:
  `provenance.statement = literature-derived`, `provenance.proof = not-applicable`.
  Rationale: direct definitions from `AK`, cross-checked against Stacks.
  Step-5 `sources.references` URLs: `AK`, plus the relevant Stacks tag when the
  body uses the Stacks convention explicitly.

- `lem-localised-module-fraction-equivalence-is-an-equivalence-relation`,
  `lem-localised-module-addition-independent-of-representatives`,
  `lem-localised-module-scalar-action-independent-of-representatives`,
  `lem-zero-in-a-localised-module`,
  `lem-localisation-preserves-injectivity`,
  `lem-localisation-preserves-surjectivity`,
  `cor-localisation-commutes-with-kernels-images-and-cokernels`,
  `cor-localisation-commutes-with-finite-intersections-of-submodules`,
  `lem-localisation-of-hom-natural-map`,
  `lem-localised-hom-finite-free-case`,
  `lem-localised-hom-finite-presentation-kernel-step`,
  `lem-support-membership-by-annihilator`,
  `lem-support-of-a-cyclic-module-is-its-vanishing-set`,
  `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports`,
  `lem-determinant-trick-for-nakayama`,
  `cor-nakayama-generators-modulo-an-ideal`:
  `provenance.statement = literature-derived`, `provenance.proof = ai-altered`.
  Rationale: all are standard sourced decompositions of arguments present in
  `AK`, `Milne`, or `Stacks-*`, but the library-facing proof shape is more
  explicit than any one source's terse presentation. Step-5 URLs:
  `AK`, `Milne`, `Stacks-Loc`, `Stacks-Supp`, `Stacks-Nak`, and `Pal` exactly as
  each item's notes/strategy require.

- `thm-universal-property-localisation-of-a-module`,
  `thm-localisation-of-modules-is-tensor-product`,
  `thm-localisation-of-modules-commutes-with-quotients-and-sums`,
  `thm-localisation-of-modules-is-exact`,
  `thm-localisation-of-hom-for-finitely-presented-modules`,
  `thm-local-criterion-for-zero-modules-and-maps`,
  `thm-local-criterion-for-exactness-of-modules`,
  `thm-support-and-annihilator-of-a-finite-module`,
  `thm-support-in-a-short-exact-sequence`,
  `thm-support-of-a-tensor-product-of-finite-modules`,
  `thm-support-under-localisation`,
  `thm-jacobson-radical-unit-characterisation`,
  `thm-nakayama-lemma`,
  `cor-minimal-generators-over-a-local-ring`,
  `cor-finite-module-locally-zero-near-a-prime`:
  `provenance.statement = literature-derived`, `provenance.proof = ai-altered`.
  Rationale: each has a direct named source statement, but the library proof must
  cite earlier published items and spell out boundaries the sources leave terse.
  Step-5 URLs: `AK`, `Milne`, and the relevant `Stacks-*` page for the exact
  convention used.

- `thm-support-of-arbitrary-direct-sums`:
  `provenance.statement = ai-altered`, `provenance.proof = ai-altered`.
  Rationale: the statement is standard and source-backed, but in this scaffold it
  is assembled as the explicit theorem-level consequence of `AK`'s tensor/direct
  sum machinery together with the support/local-zero criteria from `Stacks-Supp`
  and `Stacks-Local`, rather than copied from one harvested heading. Step-5 URLs:
  `AK`, `Stacks-Supp`, `Stacks-Local`.
  This is **not** an `ai-generated` theorem: it is a literature-based reformulation
  of sourced consequences already present in the consulted material.

### B-page items

- `ex-localising-an-abelian-group-at-a-prime`,
  `ex-localised-hom-needs-finite-presentation`,
  `ex-localisation-does-not-commute-with-products`:
  `provenance.statement = literature-derived`, `provenance.proof = ai-altered`.
  Rationale: each example type is explicitly in the consulted source, but the
  page will use a worked presentation adapted to the library's earlier notation.
  Step-5 URLs: `AK`, `Milne`.

- `ex-nakayama-jacobson-hypothesis-is-essential`,
  `ex-minimal-generators-local-ring`:
  `provenance.statement = literature-derived`, `provenance.proof = literature-derived`.
  Rationale: both are standard worked witnesses explicitly named in the design's
  source notes. Step-5 URLs: `AK`, `Stacks-Nak`.

- `ex-nakayama-finite-generation-is-essential`:
  `provenance.statement = ai-altered`, `provenance.proof = ai-altered`.
  Rationale: the source exercise only demands some non-finitely-generated
  counterexample; this scaffold fixes the concrete witness `Q/Z_(p)` over
  `Z_(p)` because the library already has the fraction-field and localisation
  infrastructure for it. Step-5 URLs: `Milne`, `Stacks-Nak`.

- `ex-localisation-kills-exactly-s-torsion`,
  `ex-support-of-a-cyclic-module`,
  `ex-support-of-an-infinite-direct-sum`,
  `ex-local-test-for-an-isomorphism`:
  `provenance.statement = ai-generated`, `provenance.proof = ai-altered`.
  Generation role for all four: `example`.
  Rationale: each is a checkable witness built to display a sourced theorem
  cleanly inside this library's existing notation rather than copied from one
  published worked example.
  Truth-risk / witness obligations for Step 5:
  - `ex-localisation-kills-exactly-s-torsion`: compute both chosen denominator
    sets on each residue class of `Z/12Z`.
  - `ex-support-of-a-cyclic-module`: verify the exact prime set for `(12)`.
  - `ex-support-of-an-infinite-direct-sum`: verify localisation at a fixed prime
    kills every nonmatching summand and preserves the matching one.
  - `ex-local-test-for-an-isomorphism`: verify the Chinese-remainder map becomes
    the displayed local identity at 2 and at 3 and vanishes nowhere else.

No `ai-generated` item above is a legal `deps` target.

---

## 10. Gates run from the repo root

- `node tools/coverage-checklist.mjs research/frontier-19-batch-4.coverage.json`
  Result: **pass** — no errors, no warnings.

- `node tools/content-policy.mjs research/frontier-19-batch-4.pages.json --manifest-only`
  Result: **pass** — `45 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-4.coverage.json --stamp`
  Result: **blocked by sandbox DNS**, not by a bad harvested URL.
  Exact output:

  ```text
  ERROR fetch-check-dead: localisation-of-modules-and-support: https://web.mit.edu/18.705/www/13Ed.pdf — EAI_AGAIN
  ERROR fetch-check-dead: localisation-of-modules-and-support: https://www.jmilne.org/math/xnotes/CA.pdf — EAI_AGAIN
  source-fetch-check: 0/2 source(s) fetch-verified (0 newly stamped), 2 FAILED
  ```

- `node tools/prosecheck.mjs research/frontier-19-batch-4.pages.json research/frontier-19-batch-4.notes.md --warnings`
  Result: **pass with warnings** — 0 errors, 2 `count-in-prose` warnings, both
  on the recountable `35 items` / `10 items` headers the brief itself requires.

`proof-contract.mjs` is intentionally deferred: before step 5 there are no
`items/*.md` in scope, so the validator would correctly report only
`item-missing` against the still-unauthored content.

---

## 11. Continuity checkpoint

- **Current substage:** Step 1-2 scaffold and dependency closure complete; batch
  artifacts written except for any later prosecheck-driven note cleanup.
- **Owned artifact paths:** `research/frontier-19-batch-4.pages.json`,
  `research/frontier-19-batch-4.coverage.json`,
  `research/frontier-19-batch-4.proof-contracts.json`, this file.
- **Completed checks:** duplicate-id sweep against `items/` and
  `research/plan-spec.json`; manual dependency opening on all load-bearing
  published deps; `coverage-checklist`; `content-policy --manifest-only`.
- **Open mathematical constraints:** step 5 must write full explicit witnesses for
  `ex-localised-hom-needs-finite-presentation`,
  `ex-localisation-does-not-commute-with-products`, and the four checkable
  `ai-generated` examples listed in §9.
- **Open dependency / tooling constraints:** `source-fetch-check` cannot stamp
  from this sandbox because DNS resolution for external hosts returns
  `EAI_AGAIN`. The harvested URLs themselves were readable through the web tool.
- **Exact next action:** run `prosecheck` on the four batch artifacts; if it is
  clean, stop. On return at step 5, author the A page in manifest order, replace
  every placeholder `quote` field in `research/frontier-19-batch-4.proof-contracts.json`
  with exact cited clauses from the authored dependencies, then rerun
  `source-fetch-check` from whatever runner the engine gives that still has
  networked DNS.

## Step-3 fix pass

Group Alpha `b`'s step-3 review file
`research/frontier-19-alpha-b-step3-scaffold-review.md` marks
`localisation-of-modules-and-support` as `sufficient` with `findings: none`.
No finding ids were issued for batch `4`, so no scaffold edits were applied to
`research/frontier-19-batch-4.pages.json`,
`research/frontier-19-batch-4.coverage.json`, or
`research/frontier-19-batch-4.proof-contracts.json`.

Re-run checks on the unchanged batch artifacts:

- `node tools/coverage-checklist.mjs research/frontier-19-batch-4.coverage.json`
  — pass.
- `node tools/content-policy.mjs --manifest-only research/frontier-19-batch-*.pages.json`
  — pass.
- `node tools/validate-plan.mjs research/plan-spec.json`
  — pass; the validator reported repository-wide redundant-prerequisite notes
  outside this batch, but no plan-order or unresolved-dependency failure for the
  current scaffold state.

## Continuity checkpoint

- **Current substage:** Step-5 authoring in progress. The localisation construction, tensor comparison, quotient/direct-sum behavior, zero criterion, injective/surjective preservation, exactness, and the kernel/image/cokernel corollary are drafted on disk.
- **Owned artifact paths:** `research/frontier-19-batch-4.pages.json`, `research/frontier-19-batch-4.coverage.json`, `research/frontier-19-batch-4.proof-contracts.json`, this file, and the newly created draft items under `items/` for the first twelve CA-2 ids.
- **Completed gates:** On Tuesday, August 25, 2026, `tools/reflow.mts` and `tools/precheck.mts` both passed for the first proof cluster:
  `lem-localised-module-fraction-equivalence-is-an-equivalence-relation`,
  `lem-localised-module-addition-independent-of-representatives`,
  `lem-localised-module-scalar-action-independent-of-representatives`,
  `thm-universal-property-localisation-of-a-module`,
  `thm-localisation-of-modules-is-tensor-product`,
  `thm-localisation-of-modules-commutes-with-quotients-and-sums`,
  `lem-zero-in-a-localised-module`,
  `lem-localisation-preserves-injectivity`,
  `lem-localisation-preserves-surjectivity`,
  `thm-localisation-of-modules-is-exact`,
  `cor-localisation-commutes-with-kernels-images-and-cokernels`.
- **Frozen-text state:** No page files, support/Nakayama items, examples, proof-contract quotes, or verification blocks are authored yet. The current first-cluster text is only draft authoring output and has not been synced into `research/frontier-19-batch-4.proof-contracts.json`.
- **Open mathematical constraints:** The remaining A-page items 13-35 still need authoring, with the hardest pending seams being the Hom-localisation finite-presentation reduction, the prime/maximal local criteria, support of tensor products over local rings via Nakayama, and the Jacobson/Nakayama example boundaries. The B-page witnesses `ex-localised-hom-needs-finite-presentation`, `ex-localisation-does-not-commute-with-products`, and `ex-nakayama-finite-generation-is-essential` still need explicit worked constructions.
- **Exact next action:** Open the published support, Jacobson-radical, local-ring, residue-field, and tensor-dimension dependencies; author A-page items 13-35 next, then draft the ten B-page examples, then update the proof contracts, coverage/note reports, page files, and verification fields before the final gate run.

## Step-5 authoring

### Items authored and exact precheck record

- `def-localisation-of-a-module` — `verification.precheck: n/a`
- `lem-localised-module-fraction-equivalence-is-an-equivalence-relation` — `pass`
- `lem-localised-module-addition-independent-of-representatives` — `pass`
- `lem-localised-module-scalar-action-independent-of-representatives` — `pass`
- `thm-universal-property-localisation-of-a-module` — `pass`
- `thm-localisation-of-modules-is-tensor-product` — `pass`
- `thm-localisation-of-modules-commutes-with-quotients-and-sums` — `pass`
- `lem-zero-in-a-localised-module` — `pass`
- `lem-localisation-preserves-injectivity` — `pass`
- `lem-localisation-preserves-surjectivity` — `pass`
- `thm-localisation-of-modules-is-exact` — `pass`
- `cor-localisation-commutes-with-kernels-images-and-cokernels` — `pass`
- `cor-localisation-commutes-with-finite-intersections-of-submodules` — `pass`
- `lem-localisation-of-hom-natural-map` — `pass`
- `lem-localised-hom-finite-free-case` — `pass`
- `lem-localised-hom-finite-presentation-kernel-step` — `pass`
- `thm-localisation-of-hom-for-finitely-presented-modules` — `pass`
- `thm-local-criterion-for-zero-modules-and-maps` — `pass`
- `thm-local-criterion-for-exactness-of-modules` — `pass`
- `def-support-of-a-module` — `verification.precheck: n/a`
- `lem-support-membership-by-annihilator` — `pass`
- `lem-support-of-a-cyclic-module-is-its-vanishing-set` — `pass`
- `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports` — `pass`
- `thm-support-and-annihilator-of-a-finite-module` — `pass`
- `thm-support-in-a-short-exact-sequence` — `pass`
- `thm-support-of-a-tensor-product-of-finite-modules` — `pass`
- `thm-support-of-arbitrary-direct-sums` — `pass`
- `thm-support-under-localisation` — `pass`
- `def-jacobson-radical-of-a-ring` — `verification.precheck: n/a`
- `thm-jacobson-radical-unit-characterisation` — `pass`
- `lem-determinant-trick-for-nakayama` — `pass`
- `thm-nakayama-lemma` — `pass`
- `cor-nakayama-generators-modulo-an-ideal` — `pass`
- `cor-minimal-generators-over-a-local-ring` — `pass`
- `cor-finite-module-locally-zero-near-a-prime` — `pass`
- `ex-localising-an-abelian-group-at-a-prime` — `pass`
- `ex-localisation-kills-exactly-s-torsion` — `pass`
- `ex-support-of-a-cyclic-module` — `pass`
- `ex-support-of-an-infinite-direct-sum` — `pass`
- `ex-nakayama-jacobson-hypothesis-is-essential` — `pass`
- `ex-nakayama-finite-generation-is-essential` — `pass`
- `ex-minimal-generators-local-ring` — `pass`
- `ex-local-test-for-an-isomorphism` — `pass`
- `ex-localised-hom-needs-finite-presentation` — `pass`
- `ex-localisation-does-not-commute-with-products` — `pass`

### Page files authored

- `library/commutative-algebra/localisation-of-modules-and-support.md`
- `library/commutative-algebra/localisation-of-modules-and-support-examples.md`

### No title or scope drops

- No scaffolded item id was dropped.
- No item title was narrowed relative to the scaffold.
- No forward reference was introduced.
- The examples remain on the B page only; the A page `examples:` list was corrected back to `[]` to match the published house format.

### Dependency ledger against the scaffold

- `lem-localised-module-scalar-action-independent-of-representatives`: replaced the ring-law dependency with the exact ring-localisation definition actually used, because the proof only needs the ring-fraction equality criterion.
- `thm-localisation-of-modules-is-tensor-product`: added `thm-localisation-equivalence-and-ring-laws`, because the proof uses the unit fractions `1/s` explicitly.
- `thm-localisation-of-modules-commutes-with-quotients-and-sums`: replaced the quotient-ring tensor corollary with `thm-right-exactness-of-tensor-products` and `def-quotient-module`, because the actual quotient-module proof is a right-exactness argument, not a ring-quotient calculation.
- `lem-localisation-preserves-injectivity`: replaced the injectivity theorem with the homomorphism definition item, because the proof uses $f(um)=u f(m)$ plus the given injectivity, not the kernel theorem.
- `thm-localisation-of-modules-is-exact`: added `def-exact-and-short-exact-sequences-of-modules`, because the written statement and proof are for short exact sequences.
- `lem-localised-hom-finite-free-case`: replaced the scaffold's quotient/sum dependency with the exact finite-free and zero-criterion inputs actually used in the written proof.
- `lem-localised-hom-finite-presentation-kernel-step`: dropped `lem-localised-hom-finite-free-case` from the direct dependency list of the written reduction lemma because the lemma records the kernel comparison abstractly; the finite free case is consumed one step later in the theorem.
- `thm-localisation-of-hom-for-finitely-presented-modules`: added the finite-presentation definition and the zero/Hom-module inputs used in the injective half of the theorem.
- `thm-local-criterion-for-zero-modules-and-maps`: replaced the iterated-localisation and prime-correspondence route with the exact annihilator/maximal-ideal/zero-fraction route used on disk, and added `cor-maximal-ideals-are-prime`.
- `thm-local-criterion-for-exactness-of-modules`: replaced the scaffold's localisation-exactness route with the actual homology-quotient route using localisation of kernels, images, and quotients.
- `lem-support-membership-by-annihilator`: added `def-localisation-at-a-prime-ideal`, because the proof uses the denominator set $R \setminus \mathfrak p$ explicitly.
- `lem-support-of-a-cyclic-module-is-its-vanishing-set`: replaced the ideal-correspondence dependency with `thm-localisation-at-a-prime-is-local`, because the written proof uses the local-ring maximal ideal and unit criterion directly.
- `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports`: replaced the quotient/sum localisation route with the actual annihilator-based generator argument written on disk.
- `thm-support-of-arbitrary-direct-sums`: dropped the local-zero criterion dependency because the proof is the direct localisation-of-sums argument only.
- `thm-support-under-localisation`: dropped `thm-localisation-of-modules-is-tensor-product`, because the written proof uses only prime correspondence and iterated localisation.
- `thm-jacobson-radical-unit-characterisation`: added `def-prime-and-maximal-ideals`, because maximality of $\mathfrak m+(x)$ is used explicitly.
- `cor-minimal-generators-over-a-local-ring`: dropped `cor-residue-field-of-a-localisation-at-a-prime`, because the written proof uses only the abstract local-ring residue field from `def-local-ring`.
- `thm-support-of-a-tensor-product-of-finite-modules`: removed the forward same-page dependency on `thm-nakayama-lemma` and replaced it with the earlier published exactness and adjugate inputs, because `research/frontier-19-alpha-step4.md` had already flagged the original same-page-later dependency as an intra-order defect and the final proof now discharges the local nonvanishing inline.
- `ex-localising-an-abelian-group-at-a-prime`: added `lem-zero-in-a-localised-module`, because the $\mathbb Q/\mathbb Z$ p-primary calculation uses the module zero criterion explicitly.
- `ex-support-of-an-infinite-direct-sum`: replaced the ai-generated cyclic-support example dependency with the sourced cyclic-support lemma, so the example no longer relies load-bearingly on an `ai-generated` statement.
- `ex-localised-hom-needs-finite-presentation`: replaced the scaffold's finite-presentation definition route with the actual direct-sum/localisation route written on disk.

### Provenance and source/edit history

- `statement: literature-derived`, `proof: not-applicable`
  `def-localisation-of-a-module`, `def-support-of-a-module`, `def-jacobson-radical-of-a-ring`
  Source/edit history: direct sourced definitions from Altman-Kleiman and Stacks; only library-local notation and the zero-ring/Jacobson empty-intersection convention are made explicit.

- `statement: literature-derived`, `proof: literature-derived`
  `lem-localisation-preserves-surjectivity`, `lem-localisation-of-hom-natural-map`, `lem-support-of-a-cyclic-module-is-its-vanishing-set`, `thm-support-in-a-short-exact-sequence`, `thm-nakayama-lemma`, `cor-nakayama-generators-modulo-an-ideal`, `cor-finite-module-locally-zero-near-a-prime`, `ex-nakayama-jacobson-hypothesis-is-essential`, `ex-minimal-generators-local-ring`
  Source/edit history: standard sourced claims whose final proofs follow the same short argument shape as the cited treatments, with only house-style step stratification and exact dependency quoting changed.

- `statement: literature-derived`, `proof: ai-altered`
  `lem-localised-module-fraction-equivalence-is-an-equivalence-relation`, `lem-localised-module-addition-independent-of-representatives`, `lem-localised-module-scalar-action-independent-of-representatives`, `thm-universal-property-localisation-of-a-module`, `thm-localisation-of-modules-is-tensor-product`, `thm-localisation-of-modules-commutes-with-quotients-and-sums`, `lem-zero-in-a-localised-module`, `lem-localisation-preserves-injectivity`, `thm-localisation-of-modules-is-exact`, `cor-localisation-commutes-with-kernels-images-and-cokernels`, `cor-localisation-commutes-with-finite-intersections-of-submodules`, `lem-localised-hom-finite-presentation-kernel-step`, `thm-localisation-of-hom-for-finitely-presented-modules`, `thm-local-criterion-for-zero-modules-and-maps`, `thm-local-criterion-for-exactness-of-modules`, `lem-support-membership-by-annihilator`, `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports`, `thm-support-and-annihilator-of-a-finite-module`, `thm-support-of-a-tensor-product-of-finite-modules`, `thm-support-under-localisation`, `thm-jacobson-radical-unit-characterisation`, `lem-determinant-trick-for-nakayama`, `cor-minimal-generators-over-a-local-ring`, `ex-localising-an-abelian-group-at-a-prime`, `ex-localisation-does-not-commute-with-products`
  Source/edit history: all are source-backed module-localisation/support/Nakayama statements or standard example types, but the final proofs were materially rewritten to route through published library dependencies, to make boundary cases explicit, or to remove the step-4 intra-order defect on tensor support.

- `statement: ai-altered`, `proof: ai-altered`
  `thm-support-of-arbitrary-direct-sums`, `ex-nakayama-finite-generation-is-essential`
  Source/edit history: both are source-backed mathematical consequences or witness choices, but the library wording and the chosen concrete witness are locally adapted rather than copied from one named source heading.

- `statement: ai-generated`, `proof: ai-altered`
  `ex-localisation-kills-exactly-s-torsion`, `ex-support-of-a-cyclic-module`, `ex-support-of-an-infinite-direct-sum`, `ex-local-test-for-an-isomorphism`
  Source/edit history: each is a checkable witness authored locally to display a sourced theorem cleanly inside the existing library notation. Counterexample/witness search outcome on August 25, 2026: all four were checked directly from the written arithmetic or localisation calculations on disk, and no conflicting witness was found.

### Step-5 contract and gate state

- Scoped proof-text gate: `tools/precheck.mts` pass on all 42 proof-bearing items in this batch.
- `proof-contract --strict`: `0 error(s), 1 warning(s)` on `research/frontier-19-batch-4.proof-contracts.json`.
  Warning: `shotgun-bracket` on `thm-local-criterion-for-zero-modules-and-maps`; the contract is still strict-clean.
- `coverage-checklist`: pass on `research/frontier-19-batch-4.coverage.json`.
- `content-policy`: pass on `research/frontier-19-batch-4.pages.json`.
- `validate-plan`: pass on `research/plan-spec.json`; output still contains repository-wide redundant-prerequisite notes outside this batch.
- `prosecheck`: `0 error(s), 4 warning(s)` on the two page files plus this notes file.
  All four warnings are the existing recountable `35 items` / `10 items` prose in the historical scaffold notes above, not in the authored page prose.
- `depcheck`, `fwdcheck`, `extcheck`, `citecheck`: run from the repo root on August 25, 2026.
  Result: no batch-4-local matches were found when filtering the outputs for this page or its items, but `depcheck` and `fwdcheck` still fail on unrelated existing repository issues and `citecheck` still emits unrelated heuristic warnings elsewhere in the corpus.

### Escalations and blockers

- No owned item remains unauthored.
- No scaffolded claim was dropped or narrowed.
- No published dependency repair was required inside batch scope.
- Step-6 should note one repository-global blocker outside this batch: the unscoped `depcheck` / `fwdcheck` stage is red on pre-existing unrelated items and page cycles elsewhere in the repository, so a whole-repo green receipt cannot be attributed to this batch alone.

### Honest confidence statement

- Confidence on the authored mathematics is moderate to high. The full batch text, page files, and batch contract are now on disk, all 42 proof-bearing items passed scoped precheck, and the strict proof-contract pass is clean apart from one non-fatal warning.
- I did not run `rendercheck.mjs`, `finite-smoke.mjs`, `risk-report.mjs`, `boundary-audit.mjs`, or `citation-fidelity.mjs` for this batch.
- I also did not re-run `source-fetch-check.mjs --stamp` from this sandbox after authoring; the step-1/2 DNS blocker recorded above still stands here.

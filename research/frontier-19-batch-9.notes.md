# Frontier 19, batch 9 — Beta-9 scaffold notes and step-3 report

Pair: `kan-extensions-density-and-the-free-cocompletion` (A, order 365.011)
and `kan-extensions-density-and-the-free-cocompletion-examples` (B, order
365.012), category `category-theory`.

**Controlling design.** `research/plan-category-theory-track.md` §MA-6,
lines 1518-1572. The dispatch named two locations, L1516 and L1558; both are
inside that one section, so there is no track-versus-amendment conflict in the
design text itself. I also opened the later source-harvest summaries at
`research/plan-category-theory-track.md` lines 3318-3455 and treated those as
harvest aids, not as a second controlling design.

**Design versus spec.** §MA-6 lists
`ends-coends-and-weighted-limits`, `adjunctions-units-and-counits`,
`universal-properties-and-the-yoneda-lemma`, and
`monads-comonads-and-their-algebras` as prerequisites in prose.
`research/plan-spec.json` declares only
`ends-coends-and-weighted-limits-examples`. Per the brief, I did not choose
between them inside the batch: the scaffold is built against the spec's single
`requires` edge, and the drift is recorded here for Alpha.

## Continuity checkpoint

- **Substage:** step-2 scaffold, coverage harvest, and dependency closure are
  complete; proof contracts are the next action.
- **Owned artifacts:** `research/frontier-19-batch-9.pages.json`,
  `research/frontier-19-batch-9.coverage.json`, this file, and
  `research/frontier-19-batch-9.proof-contracts.json` once written.
- **Completed checks:** mandatory repo/docs read; published dependency audit on
  disk; pages manifest parsed; coverage manifest parsed; `coverage-checklist`
  passes structurally.
- **Open constraints:** `source-fetch-check --stamp` is currently blocked by
  runtime DNS resolution failures (`EAI_AGAIN`) on every source URL, so no
  `fetch_verified` stamps have been written yet despite live web reads through
  the browser tool.
- **Exact next action:** retry `source-fetch-check`, then run the remaining
  local warning-level checks and fix only real artifact defects.

## 1. Per-page item list

### `kan-extensions-density-and-the-free-cocompletion` (A, order 365.011) — 29 items

1. `def-left-and-right-kan-extension` — definition
2. `rem-the-left-right-naming-clash` — remark
3. `thm-kan-extensions-are-unique-up-to-unique-isomorphism` — theorem
4. `def-global-kan-extension` — definition
5. `thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran` — theorem
6. `thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions` — theorem
7. `def-pointwise-kan-extension-by-the-comma-category-formula` — definition
8. `thm-existence-of-pointwise-kan-extensions` — theorem
9. `def-pointwise-kan-extension-by-preservation-by-representables` — definition
10. `thm-the-two-notions-of-pointwise-agree` — theorem
11. `def-absolute-kan-extension` — definition
12. `thm-left-adjoints-preserve-left-kan-extensions` — theorem
13. `thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise` — theorem
14. `thm-kan-extensions-as-coends` — theorem
15. `thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category` — theorem
16. `thm-an-adjunction-is-an-absolute-kan-extension` — theorem
17. `thm-evaluation-is-the-limit-over-the-coslice-category` — theorem
18. `thm-evaluation-is-the-colimit-over-the-slice-category` — theorem
19. `thm-density-for-a-small-category` — theorem
20. `thm-density-as-a-self-kan-extension-for-a-small-category` — theorem
21. `def-dense-subcategory` — definition
22. `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion` — theorem
23. `def-codensity-monad` — definition
24. `thm-the-codensity-construction-satisfies-the-monad-laws` — theorem
25. `thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad` — theorem
26. `fs-every-kan-extension-is-pointwise` — false statement
27. `fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor` — false statement
28. `fs-the-free-cocompletion-theorem-holds-for-a-large-source-category` — false statement
29. `fs-the-yoneda-embedding-preserves-colimits` — false statement

### `kan-extensions-density-and-the-free-cocompletion-examples` (B, order 365.012) — 7 items

1. `ex-left-kan-extension-along-a-full-subcategory-inclusion`
2. `ex-a-kan-extension-computing-a-free-functor`
3. `ex-induction-and-coinduction-of-group-representations`
4. `ex-the-orbit-category-kan-extension`
5. `ex-density-computed-for-a-presheaf-on-a-two-object-category`
6. `cex-a-kan-extension-that-is-not-pointwise`
7. `ex-lan-along-the-inclusion-of-the-rationals-in-the-reals`

## 2. Per-pair richness report

Both passes were performed on this single A/B pair.

**Proof-decomposition pass.** Work found, and it materially changes the shape
of the page.

- The design's item 6 said "left-Kan colimit formula" in its id and title while
  also promising the right-Kan dual in prose. That is not just a wording issue:
  the codensity half later needs the right-Kan limit formula as a named
  dependency. I repaired this by broadening item 6 itself to the genuinely
  two-sided theorem
  `thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions`,
  then making item 7 the explicit pointwise definition that cites both halves.
- The density/free-cocompletion cluster is kept as four separate items, 19-22,
  not one monolith. Item 19 is the density theorem, item 20 the Yoneda self-Kan
  form, item 21 the dense-subcategory definition, and item 22 the free
  cocompletion theorem with the chosen-colimit/data-supplied clause carried in
  the Statement.
- The codensity end is likewise kept in the design's decomposed form:
  definition 23, monad-laws theorem 24, and the finite-sets/ultrafilter
  identification 25. I did **not** compress 24 into 23, because the object
  formula `Ran_G G` is not a monad until the unit and multiplication are shown
  to satisfy the axioms.

**Corollary pass.** Run, and it found no honest extra corollary worth keeping.

- I considered adding a finite-set corollary after item 25, but the concrete
  "on finite sets the ultrafilter monad is the identity" phenomenon is already
  present on disk as `ex-the-ultrafilter-monad-on-a-finite-set`, and that item
  is `ai-generated` at the statement level and therefore unusable as a
  load-bearing dependency. Re-authoring the same fact here as a theorem would be
  padding, not enrichment.
- I also considered a separate "right adjoints preserve right Kan extensions"
  corollary dual to item 12. The page's later proofs do not need a standalone
  id for that dual, and adding it would turn a routine formal dual into an item
  the page does not otherwise use.

**Ceiling.** The A page stays well below the hard ceiling of 60, so no split is
proposed.

## 3. Findings — one recommendation each, most severe first

**F1. Approve the repair to design item 6: it must be a genuinely two-sided Kan-formula theorem.**
The old scaffold named only the left-Kan colimit formula but then relied on
"dually for Ran" in prose. That leaves the codensity half without a truthfully
named theorem to cite. I repaired this by broadening the item itself to
`thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions`.
**If declined:** item 23 or 25 will either cite a left-only theorem for a right
Kan computation or silently rebuild the missing right-hand formula inline, which
is exactly the undeclared-dependency defect the brief warns about.

**F2. Decline design item 25 as a page item; keep its content only as scaffold metadata.**
`rem-the-fully-faithful-pointwise-extension-item-merges-at-authoring` is not
reader-facing mathematics. It is an internal note that item 13 already carries
the mathematical statement. A published page-level remark about "merging at authoring"
would violate the library's prose rules by surveying the authoring process
instead of saying mathematics. **If declined:** the A page will ship a meta
remark whose only content is how the scaffold was edited.

**F3. Approve current-edition locator corrections in the prose scaffold.**
The current fetchable CTIC PDF is the 2nd edition, and its numbering differs
from the design's shorthand at several points: the fully faithful corollary is
6.2.16, not 6.2.14; the codensity definition is 6.5.12, not 6.5.10; the finite
sets example is 6.5.14, not 6.5.12; and the rational-exponential example is
6.2.10, not 6.2.8. **If declined:** the step-5 source ledger will carry stale
locators for live source URLs.

**F4. Approve the explicit `FinOrd`/small-skeleton route in item 25.**
The theorem must use an explicit small skeleton of finite sets, not the large
full category `FinSet`, and it must not lean on the published
`ex-the-ultrafilter-monad-on-a-finite-set` because that item's
`provenance.statement` is `ai-generated`. I therefore planned item 25 against
the explicit full subcategory of `Set` on the standard finite ordinals
`[n]={0,...,n-1}` and against Leinster's codensity proof. **If declined:** the
page either violates the source-smallness rule or takes an illegal
`ai-generated` dependency.

**F5. Approve the spec's single `requires` edge for the batch artifact, but record the drift.**
The design prose names four prerequisite pages while the spec names only
`ends-coends-and-weighted-limits-examples`. Per the dispatch, I did not settle
that dispute inside the batch. The manifest keeps the spec edge and the notes
record the drift. **If declined:** the batch will be built against a
self-chosen prerequisite plan rather than the spec or Alpha's drift stage.

## 4. Forward references

None. I kept no forward reference in the scaffold.

## 5. New ids proposed

I ran this no-match grep against both `items/` and `research/plan-spec.json`:

```sh
rg -n 'def-left-and-right-kan-extension|rem-the-left-right-naming-clash|thm-kan-extensions-are-unique-up-to-unique-isomorphism|def-global-kan-extension|thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran|thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions|def-pointwise-kan-extension-by-the-comma-category-formula|thm-existence-of-pointwise-kan-extensions|def-pointwise-kan-extension-by-preservation-by-representables|thm-the-two-notions-of-pointwise-agree|def-absolute-kan-extension|thm-left-adjoints-preserve-left-kan-extensions|thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise|thm-kan-extensions-as-coends|thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category|thm-an-adjunction-is-an-absolute-kan-extension|thm-evaluation-is-the-limit-over-the-coslice-category|thm-evaluation-is-the-colimit-over-the-slice-category|thm-density-for-a-small-category|thm-density-as-a-self-kan-extension-for-a-small-category|def-dense-subcategory|thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion|def-codensity-monad|thm-the-codensity-construction-satisfies-the-monad-laws|thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad|fs-every-kan-extension-is-pointwise|fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor|fs-the-free-cocompletion-theorem-holds-for-a-large-source-category|fs-the-yoneda-embedding-preserves-colimits|ex-left-kan-extension-along-a-full-subcategory-inclusion|ex-a-kan-extension-computing-a-free-functor|ex-induction-and-coinduction-of-group-representations|ex-the-orbit-category-kan-extension|ex-density-computed-for-a-presheaf-on-a-two-object-category|cex-a-kan-extension-that-is-not-pointwise|ex-lan-along-the-inclusion-of-the-rationals-in-the-reals' items research/plan-spec.json
```

Result: no matches.

## 6. Cross-batch dependencies

- **Outgoing.** `preadditive-and-additive-categories-and-biproducts`
  (order 365.013) directly requires
  `kan-extensions-density-and-the-free-cocompletion-examples` in
  `research/plan-spec.json`, so the later additive-category batch depends on
  this page pair being present.
- **Incoming.** None from other `frontier-19` batches are needed for this
  scaffold. Every load-bearing dependency I selected is already published.

## 7. Confidence statement

High confidence on item ordering, dependency legality, and the main mathematical
shape of the page. The major open risk is not mathematical but infrastructural:
I could not complete the mandated `fetch_verified` stamps because
`node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-9.coverage.json --stamp`
failed on **every** source URL with DNS error `EAI_AGAIN` on August 25, 2026.

I did **not** run `validate-plan.mjs research/plan-spec.json` or `depsource.mjs`
because step 4 has not spliced this batch into the spec yet, so any claim about
those gates would be non-authoritative. I also did not author item files, so
the proof-contract file below is a planned obligation map, not a validated
post-authoring contract.

## 8. Web research ledger and dependency-closure statement

**Web sources read and targeted.**

- `https://emilyriehl.github.io/files/context.pdf` — primary textbook treatment
  for local/global Kan extensions, pointwise Kan extensions, density, free
  cocompletion, and the codensity definition/example.
- `https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf` — second full
  treatment for Kan extensions, preservation, density, and the dense-subcategory
  definition; also the source of the printed-converse defect in Prop. 4.7.3.
- `https://math.mit.edu/~hrm/palestine/maclane-categories.pdf` — targeted full
  PDF for the Chapter X naming warning, pointwise Kan extensions, density, and
  "all concepts are Kan extensions". The browser tool did not expose the PDF
  body directly, but the chapter structure is consistent with the indexed search
  results and the track document's own source notes.
- `https://raw.githubusercontent.com/ToposInstitute/CT-corpus/main/LeinsterBCT.pdf`
  — targeted full CC-licensed text for density, Warning 6.2.14, and Exercise
  6.2.25's pointwise/global presheaf form.
- `https://arxiv.org/pdf/1501.02503` — Loregian's co/end treatment, used here
  for Kan extensions by co/ends.
- `https://arxiv.org/pdf/1209.3606` — Leinster's codensity/ultrafilter paper,
  used for items 23-25.

**Convention disagreements found.**

1. **Left/right naming.** Mac Lane's Chapter X warning records the reversed
   naming convention. The page fixes the modern orientation in item 2.
2. **Pointwise by representables.** Riehl's first edition omitted the locally
   small hypotheses in Theorem 6.3.7; the second edition repairs them. Item 10
   carries the repaired statement.
3. **Density size level.** Riehl's density theorem has a locally-small large
   form, but this library's house foundation only admits the small-source form
   as a legitimate functor-category statement. Items 19-22 therefore state the
   small version deliberately.
4. **Large finite-set category versus small skeleton.** The literature theorem
   is usually phrased for `FinSet -> Set`. This page phrases item 25 on an
   explicit small skeleton instead, because the library does not silently move
   to a large source category when a small one is available.

**Dependency-closure statement.** Every proposed published dependency was opened
from disk and checked for `status: published`. Every load-bearing dependency is
either an earlier item inside this pair or a published item on a strictly earlier
page. There is no external fallback item and no forward reference.

One published nearby item was consciously **not** used as a dependency:
`ex-the-ultrafilter-monad-on-a-finite-set`, because its
`provenance.statement` is `ai-generated` and the batch rules forbid it as a
load-bearing target.

## 9. Component provenance plan, with rationale

Values are `provenance.statement / provenance.proof`.

| item | S / P | rationale |
|---|---|---|
| 1 `def-left-and-right-kan-extension` | literature-derived / not-applicable | Riehl 6.1.1, Richter 4.1-4.2, Mac Lane X.3. |
| 2 `rem-the-left-right-naming-clash` | literature-derived / not-applicable | Mac Lane Chapter X warning. |
| 3 `thm-kan-extensions-are-unique-up-to-unique-isomorphism` | literature-derived / ai-altered | Source exercise/result; local proof will be the direct universal-property factorization. |
| 4 `def-global-kan-extension` | ai-altered / not-applicable | Standard notion adapted to the house small-source and supplied-family rules. |
| 5 `thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran` | ai-altered / ai-altered | Riehl 6.1.6 plus the owner's explicit supplied-family/no-choice requirement. |
| 6 `thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions` | literature-derived / ai-altered | The source theorem is standard; the authored proof will state both left and right sides in a single item. |
| 7 `def-pointwise-kan-extension-by-the-comma-category-formula` | literature-derived / not-applicable | Riehl 6.2.6, with the identity-leg clause kept explicit. |
| 8 `thm-existence-of-pointwise-kan-extensions` | ai-altered / ai-altered | Riehl 6.2.9, restated in the owner's objectwise-existence/data-supplied-global split. |
| 9 `def-pointwise-kan-extension-by-preservation-by-representables` | literature-derived / not-applicable | Riehl 6.3.5-6.3.6. |
| 10 `thm-the-two-notions-of-pointwise-agree` | literature-derived / ai-altered | Riehl 6.3.7 with the corrected size hypotheses explicit. |
| 11 `def-absolute-kan-extension` | literature-derived / not-applicable | Standard definition from the Kan-extension literature. |
| 12 `thm-left-adjoints-preserve-left-kan-extensions` | literature-derived / ai-altered | Riehl 6.3.2; local proof will use the unit/counit form. |
| 13 `thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise` | literature-derived / ai-altered | Riehl 6.2.16; local proof uses the identity object in the slice/coslice. |
| 14 `thm-kan-extensions-as-coends` | literature-derived / ai-altered | Mac Lane X.4 and Loregian §2.3; local proof routes through the already-published weighted formulas. |
| 15 `thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category` | literature-derived / ai-altered | Mac Lane X.7 and Riehl 6.5.1; local proof is the direct specialization of item 6. |
| 16 `thm-an-adjunction-is-an-absolute-kan-extension` | literature-derived / ai-altered | Riehl 6.5.2, with the preservation converse kept exact. |
| 17 `thm-evaluation-is-the-limit-over-the-coslice-category` | literature-derived / ai-altered | Riehl 6.5.4; local proof is the item-6 identity specialization. |
| 18 `thm-evaluation-is-the-colimit-over-the-slice-category` | literature-derived / ai-altered | Riehl 6.5.6; same remark. |
| 19 `thm-density-for-a-small-category` | literature-derived / ai-altered | Riehl 6.5.9 and Leinster 6.2.17, with the library's small-source restriction explicit. |
| 20 `thm-density-as-a-self-kan-extension-for-a-small-category` | literature-derived / ai-altered | Riehl 6.5.10; local proof will be phrased through item 19 and item 7. |
| 21 `def-dense-subcategory` | literature-derived / not-applicable | Richter 5.4.1 and the standard pointwise-Lan equivalence. |
| 22 `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion` | ai-altered / ai-altered | Riehl 6.5.11, adapted to the chosen-colimit/data-supplied house rule. |
| 23 `def-codensity-monad` | literature-derived / not-applicable | Riehl 6.5.12 and Leinster §2/§5. |
| 24 `thm-the-codensity-construction-satisfies-the-monad-laws` | literature-derived / ai-generated | Source-backed statement, but the full proof is a local universal-property derivation from the exercise-level source hint. |
| 25 `thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad` | ai-altered / ai-altered | Leinster 3.5/3.8 and Riehl 6.5.14, adapted from the large `FinSet` phrasing to the explicit small skeleton. |
| 26 `fs-every-kan-extension-is-pointwise` | literature-derived / ai-altered | Riehl's nonpointwise witness. |
| 27 `fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor` | literature-derived / ai-altered | Same witness as item 26 against the positive theorem 13. |
| 28 `fs-the-free-cocompletion-theorem-holds-for-a-large-source-category` | ai-altered / ai-altered | Literature-backed theorem altered by the house size policy into a reader-facing sharp denial. |
| 29 `fs-the-yoneda-embedding-preserves-colimits` | literature-derived / ai-altered | Leinster Warning 6.2.14 plus the explicit initial-object witness. |
| 30 `ex-left-kan-extension-along-a-full-subcategory-inclusion` | ai-generated / ai-generated | Checkable finite poset witness; non-load-bearing. |
| 31 `ex-a-kan-extension-computing-a-free-functor` | ai-altered / ai-altered | Built from item 22 and the published free-group adjunction. |
| 32 `ex-induction-and-coinduction-of-group-representations` | literature-derived / ai-altered | Riehl 6.2.11. |
| 33 `ex-the-orbit-category-kan-extension` | literature-derived / ai-altered | Riehl 6.2.14. |
| 34 `ex-density-computed-for-a-presheaf-on-a-two-object-category` | ai-generated / ai-generated | Checkable explicit category-of-elements witness; non-load-bearing. |
| 35 `cex-a-kan-extension-that-is-not-pointwise` | literature-derived / ai-altered | Riehl 6.2.17, worked in full. |
| 36 `ex-lan-along-the-inclusion-of-the-rationals-in-the-reals` | literature-derived / ai-altered | Riehl 6.2.10. |

**AI-generated-statement truth-risk obligations.**

- `ex-left-kan-extension-along-a-full-subcategory-inclusion` — check the comma
  categories and the pointwise values by hand after authoring; no external claim
  is being trusted.
- `ex-density-computed-for-a-presheaf-on-a-two-object-category` — check the
  category of elements and the colimit cocone explicitly after authoring.

## 10. Amendments to the prose scaffold

**A1 — broaden item 6 so the title matches the theorem the page later needs.**

File: `research/plan-category-theory-track.md`, §MA-6 "### A-page items, in dependency order".

Exact old text:

> 6. `thm-the-comma-category-colimit-formula-computes-a-left-kan-extension` — thm. For each fixed $d$, a colimit cone on $(K\downarrow d)\to\mathcal C\to\mathcal E$ has the objectwise left-Kan universal property. **Given a family of chosen such cones for all $d$**, their forced arrow maps assemble into $\operatorname{Lan}_KF$, and the unit is extracted from the legs at identities (Riehl Thm. 6.2.1). Dually for $\operatorname{Ran}$. Objectwise existence and data-supplied assembly are distinct clauses under SE-D3. LANDMARK.

Exact new text:

> 6. `thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions` — thm. For each fixed $d$, a colimit cone on $(K\downarrow d)\to\mathcal C\to\mathcal E$ has the objectwise left-Kan universal property, and a limit cone on $(d\downarrow K)\to\mathcal C\to\mathcal E$ has the objectwise right-Kan universal property. **Given families of chosen such cones for all $d$**, their forced arrow maps assemble into $\operatorname{Lan}_KF$ and $\operatorname{Ran}_KF$, and the unit or counit is extracted from the legs at identities (Riehl Thm. 6.2.1). Objectwise existence and data-supplied assembly are distinct clauses under SE-D3. LANDMARK.

## Continuity checkpoint

- **Substage:** step-5 authoring has started; interface definitions and page shells are being written before the proof-bearing items.
- **Owned artifact paths:** `items/def-left-and-right-kan-extension.md`, `items/rem-the-left-right-naming-clash.md`, `items/def-global-kan-extension.md`, `items/def-pointwise-kan-extension-by-the-comma-category-formula.md`, `items/def-pointwise-kan-extension-by-preservation-by-representables.md`, `items/def-absolute-kan-extension.md`, `items/def-dense-subcategory.md`, `items/def-codensity-monad.md`, `library/category-theory/kan-extensions-density-and-the-free-cocompletion.md`, `library/category-theory/kan-extensions-density-and-the-free-cocompletion-examples.md`, and `research/frontier-19-batch-9.proof-contracts.json`.
- **Completed gates:** read stack complete; scaffold and Alpha step-3/recheck findings verified on disk; no step-5 authoring gate has been run yet.
- **Frozen-text state:** B9-1 is binding in authored prose, so item 6 stays genuinely two-sided; B9-2 remains out of scope and will not be reintroduced in page prose.
- **Open mathematical constraints:** the page must keep local/global Kan extensions distinct; item 10 must carry the locally small hypotheses on both $\mathcal D$ and $\mathcal E$; definition 23 needs `justified_by` to theorem 24; item 25 may be deferred if the ultrafilter identification cannot be proved honestly from published interfaces.
- **Exact next action:** finish the non-proof-bearing items and page shells, then draft the proof-bearing A-page theorems in manifest order.

## Step-5 authoring

All 36 planned item files were authored, both page files were created, and
`research/frontier-19-batch-9.proof-contracts.json` was regenerated from the
final on-disk Facts and proof steps with `tools/regen-contract-entries.mjs`.
No planned item was dropped or merged at authoring.

### Per-item list

```text
def-left-and-right-kan-extension | n/a
rem-the-left-right-naming-clash | n/a
thm-kan-extensions-are-unique-up-to-unique-isomorphism | pass
def-global-kan-extension | n/a
thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran | pass
thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions | pass
def-pointwise-kan-extension-by-the-comma-category-formula | n/a
thm-existence-of-pointwise-kan-extensions | pass
def-pointwise-kan-extension-by-preservation-by-representables | n/a
thm-the-two-notions-of-pointwise-agree | pass
def-absolute-kan-extension | n/a
thm-left-adjoints-preserve-left-kan-extensions | pass
thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise | pass
thm-kan-extensions-as-coends | pass
thm-limits-and-colimits-are-kan-extensions-along-the-functor-to-the-terminal-category | pass
thm-an-adjunction-is-an-absolute-kan-extension | pass
thm-evaluation-is-the-limit-over-the-coslice-category | pass
thm-evaluation-is-the-colimit-over-the-slice-category | pass
thm-density-for-a-small-category | pass
thm-density-as-a-self-kan-extension-for-a-small-category | pass
def-dense-subcategory | n/a
thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion | pass
def-codensity-monad | n/a
thm-the-codensity-construction-satisfies-the-monad-laws | pass
thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad | pass
fs-every-kan-extension-is-pointwise | pass
fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor | pass
fs-the-free-cocompletion-theorem-holds-for-a-large-source-category | pass
fs-the-yoneda-embedding-preserves-colimits | pass
ex-left-kan-extension-along-a-full-subcategory-inclusion | pass
ex-a-kan-extension-computing-a-free-functor | pass
ex-induction-and-coinduction-of-group-representations | pass
ex-the-orbit-category-kan-extension | pass
ex-density-computed-for-a-presheaf-on-a-two-object-category | pass
cex-a-kan-extension-that-is-not-pointwise | pass
ex-lan-along-the-inclusion-of-the-rationals-in-the-reals | pass
```

### Provenance

The authored component provenances match the scaffold plan recorded in §9 of
these notes. No component provenance label changed during authoring.

- `def-left-and-right-kan-extension`, `rem-the-left-right-naming-clash`,
  `def-pointwise-kan-extension-by-the-comma-category-formula`,
  `def-pointwise-kan-extension-by-preservation-by-representables`,
  `def-absolute-kan-extension`, `def-dense-subcategory`,
  `def-codensity-monad`: statement `literature-derived`, proof
  `not-applicable`, except `def-global-kan-extension` which remains statement
  `ai-altered` because it bakes in the house small-source and supplied-family
  rule.
- The main theorem spine remains literature-backed in statement, with local
  proofs `ai-altered`, except `thm-the-codensity-construction-satisfies-the-monad-laws`,
  whose statement is literature-derived and whose proof remains
  `ai-generated` exactly as planned: the monad-law proof on disk is a local
  universal-property derivation rather than a sourced proof text.
- The two local witness examples
  `ex-left-kan-extension-along-a-full-subcategory-inclusion` and
  `ex-density-computed-for-a-presheaf-on-a-two-object-category` remain
  `ai-generated / ai-generated`; both were rechecked directly from their
  explicit finite constructions after authoring, and no counterexample to the
  claimed witness behavior was found.
- All other examples, counterexamples, and false statements retain the planned
  literature-derived or ai-altered statements with ai-altered proofs, as
  logged in §9.

### Ledger

- `thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran`:
  dropped `def-comma-slice-and-coslice-categories` from `deps`; the final proof
  uses the assembly theorems directly and never cites comma-category data on its
  own.
- `thm-the-two-notions-of-pointwise-agree`: replaced scaffold deps
  `cor-contravariant-yoneda-lemma` and `def-comma-slice-and-coslice-categories`
  with `thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions`;
  the authored proof routes through the published comma-category theorem rather
  than restating the cone identification by hand.
- `thm-left-adjoints-preserve-left-kan-extensions`: replaced the scaffold's
  unit/counit dependency with `def-adjunct-and-transposition-under-an-adjunction`;
  the final proof uses explicit adjunct formulas and never cites the bare
  adjunction definition separately.
- `thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise`:
  dropped `thm-the-two-notions-of-pointwise-agree` and added
  `def-limit-and-colimit-of-a-diagram`; the final proof is the direct
  terminal/initial-object argument and does not use the representable criterion.
- `thm-kan-extensions-as-coends`: replaced the scaffold's hom-weighted coend
  route with the weighted-limit/weighted-colimit route actually written on the
  page, so `deps` now cite `thm-a-weighted-limit-is-an-end` and
  `def-set-weighted-limit-and-weighted-colimit` rather than
  `thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor` and
  `thm-weighted-limits-over-a-representable-weight-are-evaluation`.
- `thm-an-adjunction-is-an-absolute-kan-extension`: dropped the scaffold
  dependency on `thm-left-adjoints-preserve-left-kan-extensions`; the authored
  proof establishes absoluteness directly from the same explicit factorization
  formulas as the Kan-extension claim.
- `thm-density-for-a-small-category`: dropped `thm-evaluation-is-the-colimit-over-the-slice-category`;
  the final proof is the direct category-of-elements/Yoneda cocone
  identification.
- `def-dense-subcategory`: title narrowed from the scaffold's
  `"Dense functor and dense subcategory"` to `"Dense subcategory"` because the
  body defines the fully faithful inclusion notion only.
- `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion`:
  replaced the scaffold's adjunction-hom-set and comma-formula dependencies with
  the actual density-theorem route on disk:
  `thm-density-for-a-small-category`,
  `cor-contravariant-yoneda-lemma`, and
  `thm-adjoints-are-unique-up-to-unique-natural-isomorphism`.
- `thm-the-codensity-construction-satisfies-the-monad-laws`: title regularized
  from `"axioms"` to `"laws"` to match `def-monad` and the authored proof.
- `thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad`:
  added the actual existence and ultrafilter-support deps used on disk
  (`thm-existence-of-pointwise-kan-extensions`, `thm-set-has-all-small-limits`,
  `def-filter`, `lem-ultrafilter-prime`) and removed the illegal B-page
  dependency on `ex-ultrafilter-selects-a-cell-of-a-finite-partition`.
- `fs-*` items: titles were made explicit reader-facing denials by prefixing
  `FALSE:` and sharpening the scope language. The mathematical content matches
  the scaffolded witness plan.
- `ex-*` items on the B page: titles were narrowed to match the actual explicit
  witnesses authored on disk, e.g. the free-functor example now names the
  free-group computation and the density example names the discrete two-object
  source.

### Gates

- Batch-local passes:
  - `node tools/tsx-run.mjs tools/reflow.mts ...batch items...`
  - `node tools/tsx-run.mjs tools/precheck.mts ...batch items...`
  - `node tools/proof-contract.mjs research/frontier-19-batch-9.proof-contracts.json --strict`
  - `node tools/validate-plan.mjs research/plan-spec.json`
  - `node tools/content-policy.mjs research/frontier-19-batch-9.pages.json`
  - `node tools/coverage-checklist.mjs research/frontier-19-batch-9.coverage.json`
  - `node tools/prosecheck.mjs library/category-theory/kan-extensions-density-and-the-free-cocompletion.md library/category-theory/kan-extensions-density-and-the-free-cocompletion-examples.md --warnings`
- Repo-wide checks not green, but the surviving failures are inherited:
  - `node tools/depcheck.mjs` still fails on unrelated existing issues, notably
    an unresolved library wikilink in
    `def-polynomial-rodl-property-for-a-finite-family`, unrelated B-leaf
    dependencies in other areas, a backward `justified_by` in
    `def-order-of-a-finite-projective-plane`, and three unrelated page cycles.
    After the theorem-25 repair, batch-9 ids do not appear in the error rows.
  - `node tools/fwdcheck.mjs` still fails on the inherited unplanned library
    link in `def-polynomial-rodl-property-for-a-finite-family`; batch-9 ids do
    not appear in that failure.
  - `node tools/extcheck.mjs` passes structurally, with only inherited
    warnings about published not-proved-here material elsewhere in the library.
  - `node tools/citecheck.mjs` reports heuristic warnings elsewhere in the
    corpus; none name batch-9 items.

### Escalations

- No published-dependency repair was opened.
- No scaffold item was dropped or rescaled out of scope at authoring.
- No boundary in §2 required owner escalation or a permission prompt.

### Confidence

Medium. The batch-local gates that actually read the authored text are clean,
including the strict proof-contract pass regenerated from disk, and the item
set is complete. What I did not verify is any independent Step-6/Step-7 tier:
no reader audit, Alpha audit, or judge has run on this text yet. The heaviest
local risk remains theorem 25: it is internally checked, sourced, and no longer
depends on a B-page witness, but the identification of coherent finite choice
operators with ultrafilters is still the most citation-sensitive proof on the
page and should receive extra scrutiny at Step 6.

**A2 — rename item 7 so it truthfully points at the two-sided formula.**

File: `research/plan-category-theory-track.md`, same section.

Exact old text:

> 7. `def-pointwise-kan-extension-by-the-colimit-formula` — def. Riehl Def 6.2.6, **including the clause about $\eta_c$ being the leg at $\mathrm{id}_{Kc}$** — the clause most restatements drop. §7 #25.

Exact new text:

> 7. `def-pointwise-kan-extension-by-the-comma-category-formula` — def. Riehl Def 6.2.6, **including the clause about $\eta_c$ being the leg at $\mathrm{id}_{Kc}$ and dually $\varepsilon_c$ the projection at $\mathrm{id}_{Kc}$** — the clauses most restatements drop. §7 #25.

**A3 — delete the authoring-metadata remark from the page item list.**

File: `research/plan-category-theory-track.md`, same section.

Exact old text:

> 25. `rem-the-fully-faithful-pointwise-extension-item-merges-at-authoring` — rem. The proposed Statement “a pointwise Kan extension along a fully faithful inclusion has invertible unit” is exactly item 13/Riehl Cor. 6.2.14, so no duplicate theorem id is authored. This record preserves the source-heading disposition and directs B-page examples to item 13.

Exact new text:

> [delete this line; keep the merge decision only in the batch notes]

**A4 — update stale Riehl locators to the current fetchable edition.**

File: `research/plan-category-theory-track.md`, same section.

Exact old text:

> 13. `thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise` — thm. The unit/counit is then an isomorphism (Riehl Cor 6.2.14). LANDMARK.

Exact new text:

> 13. `thm-a-kan-extension-along-a-fully-faithful-functor-genuinely-extends-when-it-is-pointwise` — thm. The unit/counit is then an isomorphism (Riehl Cor 6.2.16). LANDMARK.

**A5 — update the codensity locators and the rational-exponential example locator.**

File: `research/plan-category-theory-track.md`, same section.

Exact old text:

> 23. `def-codensity-monad` — def. $T:=\operatorname{Ran}_G G$ together with the canonical unit and multiplication induced by the Kan universal property (Riehl Def 6.5.10).

> 24. `thm-the-codensity-monad-of-a-small-skeleton-of-finite-sets-is-the-ultrafilter-monad` — thm. Use a **small skeleton** $\mathbf{FinSet}_{\mathrm{sk}}\hookrightarrow\mathbf{Set}$, not the large full category of all finite sets. Riehl Ex 6.5.12 names the result but sends the proof to Leinster's codensity-monad treatment; that source, not the exercise alone, backs the proof.

> `... ex-lan-along-the-inclusion-of-the-rationals-in-the-reals` (Riehl Ex 6.2.8).

Exact new text:

> 23. `def-codensity-monad` — def. $T:=\operatorname{Ran}_G G$ together with the canonical unit and multiplication induced by the Kan universal property (Riehl Def 6.5.12).

> 24. `thm-the-codensity-monad-of-a-small-skeleton-of-finite-sets-is-the-ultrafilter-monad` — thm. Use a **small skeleton** $\mathbf{FinSet}_{\mathrm{sk}}\hookrightarrow\mathbf{Set}$, not the large full category of all finite sets. Riehl Ex 6.5.14 names the result but sends the proof to Leinster's codensity-monad treatment; that source, not the exercise alone, backs the proof.

> `... ex-lan-along-the-inclusion-of-the-rationals-in-the-reals` (Riehl Ex 6.2.10).

## 11. Authoring notes with no scaffold anchor, for my step-5 self

- Write every diagrammatically presented statement algebraically as arrows and
  equalities of composites. This page will otherwise be unjudgeable.
- Item 10 must carry the locally-small hypotheses on **both** D and E. Do not
  silently weaken to a first-edition memory of Riehl 6.3.7.
- Item 16 must keep the preservation clause in the converse. Richter 4.7.3(2) is
  the printed defect to avoid, not a theorem to cite as-is.
- Item 19 and item 20 are intentionally at different size levels. Item 19 is
  the small-source density theorem in the house foundation; item 20 is the Yoneda
  self-Kan form in the small presheaf category. Say this cleanly in the summary.
- Item 22 must keep the "given chosen pointwise colimit/coend objects and
  universal cones" clause in the Statement. Do not let a step-5 prose cleanup
  silently reintroduce class-sized choice.
- Item 25 must use an explicit small skeleton such as the full subcategory of
  `Set` on the standard finite ordinals `[n]`. Do not cite
  `ex-the-ultrafilter-monad-on-a-finite-set` as a dependency; it is
  `ai-generated` at the statement level.
- Item 29 is reader-facing only if it is proved by a concrete witness, not by a
  vague slogan that Yoneda is "not cocontinuous". Use the initial-object witness
  named in Finding F4.
- Retry `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-9.coverage.json --stamp`
  before reporting the batch closed. On August 25, 2026 it failed across all
  six sources with runtime DNS error `EAI_AGAIN`, so the coverage artifact is
  structurally complete but not yet stamp-complete.

## Step-3 fix pass

- `B9-1` — already correct. Evidence: item 6 in
  `research/frontier-19-batch-9.pages.json` is already
  `thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions`,
  item 7 cites that same two-sided theorem, and the same id is used in both
  `research/frontier-19-batch-9.coverage.json` and
  `research/frontier-19-batch-9.proof-contracts.json`. No scaffold change was
  needed.
- `B9-2` — already correct. Evidence:
  `research/frontier-19-batch-9.coverage.json` already records Riehl
  `6.4 Derived functors as Kan extensions` as `out-of-scope`, and it also
  records Leinster `§4 integration and §§7-8 double duals and ultraproducts`
  as `out-of-scope`, each with a page-specific subject-boundary reason. No
  decline reclassification was needed.

Checks rerun on August 25, 2026:

- `node tools/coverage-checklist.mjs research/frontier-19-batch-9.coverage.json`
  — pass.
- `node tools/content-policy.mjs --manifest-only research/frontier-19-batch-*.pages.json`
  — pass.
- `node tools/validate-plan.mjs research/plan-spec.json`
  — pass overall; it still reports unrelated repo-wide `redundant-prereq`
  notices, but no batch-9-specific failure.

Current state correction: `fetch_verified` stamps are present in
`research/frontier-19-batch-9.coverage.json`, so the earlier DNS-blocker note
above is historical only and no longer describes the current artifact state.

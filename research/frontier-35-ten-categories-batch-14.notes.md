# Frontier 35, Step 1, beta batch 14

## Scope and plan comparison

The assigned pairs are `graded-bimodules-and-tensor-functors` (A, order 717) with its examples page (B, 718), and `homological-gaussian-elimination` (A, 728.1) with its examples page (B, 728.2). The binding owner-authoring-direction file was absent when construction began. I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task, the current plan and batch evidence, and the full HA-18 and HA-24 design sections.

The four page identities, orders, categories, companions and `requires` lists in `research/plan-spec.json` agree with the two design sections; **there is no design-versus-current-plan conflict**. The plan has empty item lists at this scaffold stage. Two proposed design proof routes needed correction after checking their actual published suppliers:

- HA-18.8 names `thm-hom-tensor-adjunction-for-modules`, but that published theorem assumes a *commutative* ring and cannot establish the associative bimodule claim. Item `thm-graded-bimodule-tensor-hom-adjunction` proves currying locally from `thm-universal-property-of-module-tensor-products` and `thm-bimodule-actions-induced-on-tensor-products`. HA-18.9 likewise defines associative restriction and extension directly because published `def-restriction-and-extension-of-scalars` assumes commutative rings.
- HA-24.6 proposes the published homotopy-equivalence theorem as a proof supplier. Its chain-homotopy invariance dependency has the proof gap recorded below. Item `cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology` instead uses the explicit retract and a categorical cycles-to-boundaries factorization, together with the published homology construction and functoriality. The claim and its abelian-only homology qualification are unchanged.

## Constructed inventory and readiness

Each of the following 26 items was appended once in prerequisite order; its `ready` decision was recorded before construction proceeded to the next item. All 26 records are current, have explicit examined dependency IDs matching their manifest `deps`, and are non-owner decisions. No escalation was overwritten and no published item was edited.

| Page | Item IDs, in construction order |
|---|---|
| Graded A | `def-graded-ring-module-bimodule-and-internal-shift`; `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise`; `def-graded-balanced-tensor-product-and-homogeneous-hom`; `lem-graded-balanced-tensor-and-shift-isomorphisms`; `def-finitely-generated-graded-projective-module`; `thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`; `thm-bimodule-tensor-exactness-and-projective-preservation`; `thm-graded-bimodule-tensor-hom-adjunction`; `prop-restriction-and-extension-of-scalars-on-graded-module-categories` |
| Graded B | `ex-internal-shift-versus-a-change-of-degree`; `ex-right-flat-bimodule-with-nonprojective-output`; `ex-left-projective-bimodule-with-nonexact-tensor` |
| Gaussian A | `def-complex-homotopy-and-contractibility-in-an-additive-category`; `def-invertible-differential-block-and-schur-complement-reduction`; `lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block`; `thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex`; `prop-homological-gaussian-elimination-gives-a-strong-deformation-retract`; `cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology`; `thm-finite-iterated-homological-gaussian-elimination`; `prop-additive-functors-preserve-chosen-homological-gaussian-cancellations`; `prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits` |
| Gaussian B | `ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign`; `ex-neighbouring-differentials-after-a-gaussian-basis-change`; `ex-two-finite-cancellation-orders-and-their-composite-retracts`; `cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled`; `cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps` |

No new pair or page split is needed. The consumer-batch cross-batch input is `[]`: the B pages require their own A pages, and all other page requirements are already published. I refreshed the unified frontier ledger from that owned input. A planned supplier was never treated as published.

## Proof and dependency audit

A read-only traversal of actual item `deps` found 26 local items and 312 distinct published items in their transitive closure, with no missing dependency, nonpublished dependency, cycle or local forward dependency. Each of the seven external A-page prerequisites is published; the B-page prerequisites are the local A pages. This is a structural check, not a claim that 312 published proofs were re-reviewed. I read the statements and proofs that carry the new arguments, including the tensor universal property and balanced associativity/unit maps, bimodule actions, the free-module universal property, first isomorphism theorem, projective lifting and summands, flatness by handedness, additive biproduct-matrix composition, additive complexes, chain homotopy, and homology construction/functoriality.

The 26 assigned IDs are pairwise distinct and none collides with an existing `items/` file.

- **Graded conventions and well-definedness.** The new internal shift is `M{r}_d=M_{d-r}`, equal to the published commutative twist `M(-r)`, and introduces no differential or Koszul sign. Tensor balance is homogeneous, so total degree descends to the quotient. The `HOM` used by the adjunction is the direct sum of finite-support homogeneous maps, distinguished from all ungraded maps. The associative Hom action `(a·f)(m)=f(ma)` and both currying directions are checked locally. Exactness uses the *right* A-flatness of the B–A bimodule; output projectivity uses its *left* B-projectivity. The dual-number examples show these conditions are independent.
- **Finite projectives and choice.** A finite ordinary generating family decomposes into finitely many homogeneous generators; these give a finite shifted-free epimorphism. Lifting finitely many basis vectors through an epi is finite choice and requires no AC. A graded projective splits this epi, while a finite shifted-free module and its retract satisfy the graded lifting property. No assertion about arbitrary-index free modules or arbitrary projective resolutions is needed. The scaffold is choice-free, declares no AC dependency, and does not mix incompatible axiom branches.
- **Gaussian reduction and well-definedness.** Biproduct matrix composition gives `LdR=diag(a-bφ⁻¹c,φ)` for the stated triangular isomorphisms. The equations `cp+φq=0` and `rb+sφ=0` from the two original square-zero composites give transformed neighbors `[p;0]` and `[r,0]`; the reduced complex therefore squares to zero even at its neighboring degrees. The explicit cochain isomorphism splits a contractible two-term summand. The displayed `p,i,h` satisfy `pi=1`, `1-ip=dh+hd`, and `ph=hi=h²=0`. These computations need only an additive category; homology objects are asserted only for an abelian category. Iteration checks each pivot in the **current** reduced complex and remains finite. Transfer uses the sign-correct identity `(gf)bar−gbar fbar=d(p_Zgh_Yfi_X)+(p_Zgh_Yfi_X)d`; strict naturality is not asserted for arbitrary maps.
- **Axiom boundary.** No batch-14 item or page requirement reaches `deferred-set-theory-beyond-choice`; no Foundations item is constructed here. The source's bounded-projective and derived-category assertions were deferred, not silently imported into the unbounded additive-category Gaussian theorem.

### Published proof defect for the canonical ledger

`thm-chain-homotopic-maps-induce-the-same-map-on-homology` is **published** and states invariance for arbitrary abelian-category chain complexes. Its Proof step 1.1 begins with an element `z∈Z_n(C)` and evaluates `f_n(z)`, `g_n(z)`, and `s_n(z)`. An arbitrary abelian category need not present these objects as sets with elements. The file supplies no generalized-element/Yoneda or embedding argument, so the written proof does not establish the stated generality. This is a proof defect, not a counterexample to the mathematical theorem. Published `thm-a-chain-homotopy-equivalence-is-a-quasi-isomorphism` directly depends on it and is a downstream repair candidate.

Planned repair suppliers, all **published**, are `def-homology-object-of-a-chain-complex`, `lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries`, `thm-a-chain-map-induces-a-well-defined-map-on-homology`, and `def-kernels-and-cokernels-as-equalizers-and-coequalizers`. A repair should restrict the homotopy identity along the categorical cycle kernel, factor its `dh` term through the boundary image, then use the homology cokernel to show the induced difference is zero; no element of an arbitrary object is selected. The batch-14 corollary implements that argument locally and has no dependency path through either defective published proof. This note is the handoff for the canonical published-defect ledger; this worker did not edit that ledger or the published files.

## Full-text source evidence

`research/frontier-35-ten-categories-batch-14.coverage.json` records 31 individually disposed harvested results, each included/inline with an item, deferred to a valid planned page, or excluded with a specific reason. All eight original URLs yielded full text on the initial retrieval, were inspected at the relevant arguments, and carry genuine `source-fetch-check --stamp` evidence; no source was dropped or assigned an invented recovery history. Each A page has independent treatments including a monograph or textbook.

| A page | Full-text source and inspected locator | Main support |
|---|---|---|
| Graded | [Kleshchev, survey](https://arxiv.org/pdf/0909.4844), §2.2 printed pp.6–7 | Graded category, shifts, homogeneous `HOM`; Cartan pairing deferred to HA-19. |
| Graded | [Khovanov–Seidel](https://arxiv.org/pdf/math/0006056), §§2a–2c PDF pp.8–10 | Graded bimodule tensor functor; special functor relations and bounded complex constructions deferred to the planned graded-quiver/derived page. Its exactness assertion is for its specific algebra; the general theorem is proved from separate hypotheses. |
| Graded | [Stacks 00JL](https://stacks.math.columbia.edu/tag/00JL), §10.56 opening through Lemma 10.56.1 | Commutative nonnegative grading and twist dictionary; the positive-grading Nakayama lemma is out of scope. |
| Graded | [Stacks 00CV](https://stacks.math.columbia.edu/tag/00CV), §10.12 Lemmas 5–8, Remark 11 and Example 12 | Balanced associativity, units, currying pattern and tensor nonexactness; associative sidedness is proved locally. |
| Graded | [Weibel, chapter 3](https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf), §3.2 printed pp.68–69 | Left/right flatness and its separation from projectivity; localization theorem excluded. |
| Gaussian | [Bar-Natan](https://www.math.utoronto.ca/~drorbn/papers/FastKh/FastKh.pdf), §4 Lemma 4.2 and proof, §5 opening | Invertible block cancellation, splitting and finite iteration. |
| Gaussian | [Clark–Morrison–Walker](https://msp.org/gt/2009/13-3/gt-v13-n3-p08-p.pdf), Appendix A.1 Lemmas A.1–A.2, printed pp.1562–1563 | Explicit retract maps and the particular double-pivot configuration. PDF pages 64–65 were also rendered to check diagrams and signs. The design's reference to Appendix A.2 for Lemma A.2 is a locator error; the lemma is in A.1. |
| Gaussian | [Weibel, chapter 1](https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf), §§1.1, 1.2, 1.4, printed pp.2–5, 17–18 | Cochain/chain reindexing, homotopy convention and compatibility of homotopy with composition. |

## Checks and remaining findings

| Check | Actual result |
|---|---|
| `coverage-checklist --require-destination` | Pass; 2 A pages, 31 harvested results, 0 errors/warnings. |
| `source-fetch-check` and `url-sweep --fail-on-dead` | Pass; 8/8 verified full-text sources and 8/8 live URLs. |
| `source-backing --require-verified` | Pass; 11 authored results backed by an openable source or documented argument. |
| Whole-run `manifest-deps` | Pass at the final check; 369 manifest items, 0 errors. Other batches were being written concurrently. |
| Manifest-only `content-policy` on batch 14 | Pass; 26 items, 0 errors/warnings. |
| Whole-run manifest-only `content-policy` | Fails at the final check on two batch-12 dependencies on absent `thm-cook-levin-theorem`; no batch-14 item appears. An earlier whole-run check, before those concurrent batch-12 entries appeared, passed on 177 items. |
| `validate-plan` and run `manifest-integrity` | Pass; 54 pages owed and 54 manifested, no scope drift. |
| `step1-decisions check` | Whole run open at the final check: 369 items, 325 ready, 62 work entries elsewhere; **0 batch-14 work entries**. |
| `extcheck` | Fails on 12 pre-existing published-file metadata/proof-policy errors; no batch-14 item appears. |

The whole-run policy errors occur in `research/frontier-35-ten-categories-batch-12.pages.json`: `lem-circuit-satisfaction-is-linear-quadratic-consistency` and `lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester` both declare `thm-cook-levin-theorem`, which is neither in their batch nor on disk at that check. The batch-12 owner must reconcile those prerequisites; this worker cannot edit that manifest or select its supplier placement.

The `extcheck` errors are `fs-every-subexponential-growth-group-has-polynomial-growth` (three errors: kind, Proof section, precheck); `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem`, `rem-dominated-convergence-theorem`, `rem-hahn-banach-hamel-basis-open`, `rem-martins-axiom`, `rem-nonamenable-groups-without-nonabelian-free-subgroups`, `rem-sierpinski-ultrafilter-not-measurable`, `rem-suslin-line-non-ccc-square-unverified`, and `rem-vitali-non-measurable-set` (each precheck); and `thm-onan-scott-classification-of-finite-primitive-groups` (kind). They are outside this dispatch's edit authority. Step 3 still requires independent mathematical review; these readiness records do not confer publication approval.

## Step 3b — pair `graded-bimodules-and-tensor-functors` (alpha-high, batch 14)

Owned: A page 717 `graded-bimodules-and-tensor-functors` (9 items) and B page 718
`graded-bimodules-and-tensor-functors-examples` (3 items). The sibling pair
`homological-gaussian-elimination` (728/728.2) shares this batch and its 14 rows
were preserved untouched in every batch-14 write.

**Authored items (all draft, origin pipeline, `pipeline_run: frontier-35-ten-categories`).**
A page, in prerequisite order: `def-graded-ring-module-bimodule-and-internal-shift`,
`lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise`,
`def-graded-balanced-tensor-product-and-homogeneous-hom`,
`lem-graded-balanced-tensor-and-shift-isomorphisms`,
`def-finitely-generated-graded-projective-module`,
`thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`,
`thm-bimodule-tensor-exactness-and-projective-preservation`,
`thm-graded-bimodule-tensor-hom-adjunction`,
`prop-restriction-and-extension-of-scalars-on-graded-module-categories`.
B page: `ex-internal-shift-versus-a-change-of-degree`,
`ex-right-flat-bimodule-with-nonprojective-output`,
`ex-left-projective-bimodule-with-nonexact-tensor`. Pages
`library/homological-algebra/graded-bimodules-and-tensor-functors.md` and
`…-examples.md` created. No item was dropped, renamed or added as a new pair.

**Exact conventions fixed by the pair.** Ground ring `k` commutative, degree zero;
unital associative `Z`-graded `k`-algebras with `1 in A_0`; graded
left/right/bimodules with `k`-central commuting actions; degree-zero maps only.
Internal shift `M{r}_d=M_{d-r}`, so `M{r}=M(-r)` in the published nonnegative
commutative twist `M(a)_d=M_{d+a}` (sign reversed; the example page separates the
two directions explicitly). Tensor grading is total internal degree on homogeneous
elementary tensors, `M⊗_A N = ⊕_d (F_d+H)/H`; no super/Koszul sign anywhere.
`HOM_A(P,Q)=⊕_d Hom_{A,d}(P,Q)` is the finite-sum homogeneous Hom with
`(a·f)(m)=f(ma)`, properly contained in the ungraded Hom in general (witness in
the definition's Remark). Finite graded projective = graded projective (lifting
against degree-zero epimorphisms) plus generation by finitely many homogeneous
elements; the empty family is the zero module. The pair is choice-free and
declares no AC dependency; only finitely many lifts are ever selected.

**Source locators used.** Kleshchev, *Representation Theory of Symmetric Groups
and Related Hecke Algebras*, §2.2 printed pp.6-7 (`arxiv.org/pdf/0909.4844`);
Khovanov–Seidel, *Quivers, Floer Cohomology, and Braid Group Actions*, §§2a-2c
author pp.8-10 (`arxiv.org/pdf/math/0006056`); Stacks Project 00JL (§10.56) and
00CV (§10.12 Lemmas 5-8, Remark 11, Example 12); Weibel ch.3 §3.2 printed pp.68-69.
All eight harvested URLs are `source-fetch-check` fetch-verified; the two deferred
rows on the A page name batch 16's `graded-quiver-algebras-and-derived-tensor-functors`
(items `def-two-sided-projective-khovanov-seidel-bimodule-functors`,
`thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations`,
`def-bounded-projective-homotopy-category-for-a-m`,
`lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m`) and planned
order 719 `grothendieck-groups-and-graded-cartan-pairings`; the other two declined
rows (graded Nakayama, localization flatness) are genuinely unused by this pair.

**Local scaffold repairs made during authoring.** (i) `thm-graded-bimodule-tensor-hom-adjunction`
step 4.2 referenced "steps 1.1 to 1.3", corrected to "steps 1.1 to 3.1".
(ii) `ex-internal-shift-versus-a-change-of-degree` replaced a vague "unless x is a
unit" with the explicit separating witness `A(2)_0=kx^2 ≠ 0` vs `A(-2)_0=A_{-2}=0`.
(iii) `def-finitely-generated-graded-projective-module` states the empty-family
case and the equivalence with ordinary finite generation explicitly, and
cross-references the consuming theorem. (iv) dependencies
`def-graded-ring-module-bimodule-and-internal-shift` added to
`lem-graded-balanced-tensor-and-shift-isomorphisms` and to
`thm-finite-graded-projectives-are-summands-of-finite-graded-free-modules`.
(v) Display-math render repairs: four `$$…$$` blocks joined to one source line and
the nested `$` inside `\text{ $A$-linear}` removed by defining
`Hom_A^{ungr}(P,Q)` in the same definition (the mathematics is unchanged).

**Item decisions.** All 12 recorded with `tools/step3-decisions.mjs record-item
--decision accept --confidence 1`, examined dependency IDs equal to each item's
declared `deps`, after the complete item, page, manifest, coverage and
proof-contract were written. `step3-decisions check --phase final` reports zero
outstanding entries for this pair (run total 237 accepted). No escalation was
opened and none was overwritten.

**Scope declines.** Refreshed group `f` (`tools/scope-decisions.mjs refresh --run
frontier-35-ten-categories --group f`) and recorded `stands` with row-specific
evidence for this page's five coverage declines; the other eleven group-`f` rows
(batch 12 and the sibling Gaussian pair) were left `pending` for their owners —
no owner ruling was invented. `scope-decisions check` no longer lists any
`graded-bimodules-and-tensor-functors` row.

**Checks actually run (this dispatch).** `precheck` explicit paths: 9 proof-bearing
items PASS, 3 definitions `n/a`. `rendercheck` on the 12 items + 2 pages: OK.
`content-policy` item mode on the batch manifest: 0 errors for this pair (14
`scope-item-missing` errors are the sibling's not-yet-written items).
`proof-contract --strict` on `research/frontier-35-ten-categories-batch-14.proof-contracts.json`:
0 errors/0 warnings, 12/12. `finite-smoke`: 0 errors. `risk-report`: 0 errors,
12 routed. `boundary-audit --fail-on-contradicted --fail-on-template`: 0
contradicted, 0 template clusters. `manifest-deps` (17 manifests): 657 items,
0 errors. `coverage-checklist --require-destination`: 2 pages, 31 rows, 0
errors. `source-fetch-check`: 8/8 verified. `source-backing`: 11 authored results
all backed. `validate-plan`: 4 errors, all on another batch's page
`homogeneous-resultants-and-projective-intersection-length` (undeclared requires
`linear-algebra-methods-in-combinatorics`,
`fibre-products-base-change-and-scheme-theoretic-fibres`,
`the-fundamental-theorem-of-algebra`); none for this pair. `depcheck`,
`fwdcheck`, `extcheck`, `prosecheck`, `depsource`, `pathcheck` run repo-wide: no
finding mentions any batch-14 item; their failures are pre-existing debt
elsewhere (e.g. the `brauer-characters…` page cycle, 333 `published-unaudited`
rows). `author-check.mts frontier-35-ten-categories 14` writes
`research/frontier-35-ten-categories-author-check-14.json` with `ok:false`
because the batch manifest still lists the sibling's 14 absent items; precheck
inside it PASSes all 9 of this pair's proof-bearing items and proof-contract is
`ok:true`. `frontier-dependency-ledger refresh --require-reviewed`: passes; 17
edges are supplied by batch 14 to batches 16/17 and 0 are consumed by batch 14
(the owned consumer input is `[]`, and the empty input is valid because every
page requirement of this pair is published).

**Open obligations / handoff.** (1) The sibling Gaussian author must finish its 14
items and their ledger rows; the batch-14 author-check cannot turn green before
that. (2) Batch-16/17 owners may now re-verify their 16 `open` consumer rows to
this pair's supplier items — supplier side authored and locally checked here.
(3) The published proof defect in
`thm-chain-homotopic-maps-induce-the-same-map-on-homology` (element chase in an
arbitrary abelian category) is reported unchanged for the canonical ledger; it
does not touch this pair, whose `prop-restriction-and-extension-…` and examples
use only the published tensor/free-module machinery. (4) Step 4 must splice the
12 item rows into `research/plan-spec.json` for orders 717/718; until then
`content-policy --manifest-only` reports `batch-item-already-exists` for all 12
authored ids, which is the expected pre-splice state.

## Step 3b — pair `homological-gaussian-elimination` (alpha-high, batch 14)

Owned: A page 728.1 `homological-gaussian-elimination` (9 items) and B page 728.2
`homological-gaussian-elimination-examples` (5 items). The sibling pair
`graded-bimodules-and-tensor-functors` (717/718) shares this batch; its 12 contract
entries, its scope-decision rows and its ledger input were preserved untouched in
every batch-14 write.

**Authored items** (all `status: draft`, `origin: pipeline`,
`pipeline_run: frontier-35-ten-categories`), in prerequisite order:
`def-complex-homotopy-and-contractibility-in-an-additive-category`,
`def-invertible-differential-block-and-schur-complement-reduction`,
`lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block`,
`thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex`,
`prop-homological-gaussian-elimination-gives-a-strong-deformation-retract`,
`cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology`,
`thm-finite-iterated-homological-gaussian-elimination`,
`prop-additive-functors-preserve-chosen-homological-gaussian-cancellations`,
`prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits`;
B page `ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign`,
`ex-neighbouring-differentials-after-a-gaussian-basis-change`,
`ex-two-finite-cancellation-orders-and-their-composite-retracts`,
`cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled`,
`cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps`.
Pages created: `library/homological-algebra/homological-gaussian-elimination.md`
and `…-examples.md`. No item was dropped, renamed, or added as a new pair; all 14
manifest statements are realised, including the qualification clauses (item 4
clause 4, item 6 clause 3, item 7 clause 4, item 9 clause 4).

**Exact conventions fixed by the pair.** Cochain indexing throughout
(`d^n:C^n→C^{n+1}`, `d^{n+1}d^n=0`); the block
`d^n=[[a,b],[c,φ]]:A⊕U→B⊕V` with pivot `φ` and Schur complement `a−bφ^{-1}c`;
`L=[[1,−bφ^{-1}],[0,1]]`, `R=[[1,0],[−φ^{-1}c,1]]`,
`Ld^nR=diag(a−bφ^{-1}c,φ)`; `R^{-1}(p;q)=(p;0)`, `(r s)L^{-1}=(r 0)`,
`q=−φ^{-1}cp`, `rbφ^{-1}=−s`; retract data `p^n=(1 0)`, `p^{n+1}=(1 −bφ^{-1})`,
`ι^n=(1;−φ^{-1}c)`, `ι^{n+1}=(1;0)`, `h^{n+1}=[[0,0],[0,φ^{-1}]]` with
`pι=1`, `1−ιp=dh+hd`, `ph=hι=h²=0`; transfer `f̄=p_Yfι_X` and
`(gf)‾−ḡf̄=dk+kd` with `k=p_Zgh_Yfι_X`. Only additive structure is used in items
1–9 except the abelian clause of item 6; no axiom of choice is declared or used
(every construction is a displayed formula in given data), and no infinite
iteration, termination or size-decrease claim is made (item 7 clause 4).

**Source locators re-verified by full-text read (this dispatch).**
- CMW, *Fixing the Functoriality of Khovanov Homology*, Appendix A.1: PDF pp. 64–65
  (1-indexed; the extractor reports 0-based page indices 63–64), printed
  pp. 1562–1563. Lemma A.1 on printed p. 1562, Lemma A.2 on printed p. 1563;
  Appendix A.2 is not used.
- Bar-Natan, *Fast Khovanov Homology Computations*: §4 Lemma 4.2 and §5 both on
  printed/PDF p. 5; §6 begins on printed p. 6. Five items' reference titles were
  narrowed from "printed pp. 5-6" to "printed p. 5 (PDF p. 5)".
- Weibel, *An Introduction to Homological Algebra*, ch. 1: §1.1 printed pp. 2–3,
  §1.2 opening printed p. 5, §1.4 printed pp. 17–18 (as in the coverage row).

**Per-item checkpoints** (claim · declared deps · decision · checks).
1. `def-complex-homotopy-and-contractibility-in-an-additive-category` — cochain
   complexes, maps, homotopies, contractibility, degreewise biproducts and the
   reindexing dictionary to `def-chain-homotopy`/`def-contractible-complex`; all
   four deps published; `accept` confidence 1; precheck n/a, rendercheck OK,
   citation links all declared.
2. `def-invertible-differential-block-and-schur-complement-reduction` — block
   decomposition, invertible pivot, candidate reduction `(p, a−bφ^{-1}c, r)` and the
   explicit non-assertion of square-zero; deps items 1 + published
   `thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication`;
   `accept` 1; precheck n/a, rendercheck OK.
3. `lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block`
   — clauses 1–5 including the two boundary composites in step 3.1; deps items 1, 2 +
   published matrix-multiplication theorem; `accept` 1; precheck PASS, contract
   3 citations/11 derivations.
4. `thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex`
   — the chain isomorphism `T` (`R^{-1}`, `L`), `K` contractible via `φ^{-1}`, the
   transported homotopy equivalence and clause 4's qualification; deps items 1–3;
   `accept` 1; precheck PASS (steps 1.1–5.1 checked by hand).
5. `prop-homological-gaussian-elimination-gives-a-strong-deformation-retract` —
   displayed `p, ι, h` with all five identities; deps items 3, 4 + item 1 (added this
   dispatch); `accept` 1; precheck PASS. Repair: unused `[L3]` rewritten to the
   degreewise-composite/remaining-degree conventions actually used and cited at
   steps 2.4–2.6 and 3.1; the missing `def-complex-…` dep declaration added.
6. `cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology` —
   clause 1 homotopy-category inverse, clause 2 the explicit `w_nk_n=k_nβ_ne_ns_nk_n`
   argument giving `H_n(w)=0` (no element chase, and the defective published
   element-chase theorem is deliberately not a dep), clause 3 qualification; 14 deps,
   all published except items 5 and 4 (added `thm-…-splits-off-…` this dispatch);
   `accept` 1; precheck PASS.
7. `thm-finite-iterated-homological-gaussian-elimination` — composition formula,
   aggregate `diag(φ_1,…,φ_k)` pivots, induction and the non-canonicality witness
   `k→k→k→k`; deps items 2–5 + published matrix-multiplication theorem; `accept` 1;
   precheck PASS.
8. `prop-additive-functors-preserve-chosen-homological-gaussian-cancellations` —
   image complexes/pivots/reduction/retract data, `F(K)` contractible, scope clause;
   deps items 2–4, 5 and published `def-additive-functor`,
   `thm-an-additive-functor-preserves-finite-biproducts` (checked: it covers the empty
   biproduct and the zero object) and `prop-an-additive-functor-preserves-zero-morphisms`;
   `accept` 1; precheck PASS.
9. `prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits` —
   well-defined transfer, strict identity transfer, `(gf)‾−ḡf̄=dk+kd`, the
   split-off failure witness, strict naturality criterion and the no-canonicality
   clause; deps items 4, 5 + published homotopy-category items; `accept` 1;
   precheck PASS.
10. `ex-a-two-by-two-unit-pivot-fixes-the-minus-schur-sign` — `Q²→Q²` with
    `[[1,1],[1,1]]`, minus sign gives kernel/cokernel `Q`, plus sign gives
    multiplication by 2 and vanishing homology; deps items 2, 3, 6 + published
    `def-homology-object-of-a-chain-complex`; `accept` 1; precheck PASS.
11. `ex-neighbouring-differentials-after-a-gaussian-basis-change` — explicit `L,R`
    and neighbours `(1;0)`, `(1,0)` with reduced segment `k→1→k→0→k→1→k`; deps
    items 2, 3; `accept` 1; precheck PASS.
12. `ex-two-finite-cancellation-orders-and-their-composite-retracts` — CMW Lemma A.2
    shape, both orders leaving `A→C→D_2→F→H`, and the explicit `Q`-instance with
    reduced arrows `0`, `−3`; deps items 2, 3, 5, 7; `accept` 1; precheck PASS.
13. `cex-a-nonunit-differential-entry-cannot-be-gaussian-cancelled` —
    `0→Z→2→Z→0` has `H≅Z/2`, no inverse of 2, not contractible; deps items 1, 2, 4 +
    published cycle/boundary/homology items; `accept` 1; precheck PASS.
14. `cex-gaussian-reduction-is-not-strictly-natural-for-arbitrary-chain-maps` —
    `f̄=ḡ=0` but `(gf)‾=1_Y≠0` on `X=Y⊕K`, discrepancy null-homotopic; deps items 1, 9;
    `accept` 1; precheck PASS.

**Local scaffold repairs made during this dispatch.** (i) Two missing dependency
declarations added where a cited fact was not in `deps`: item 5 now declares
`def-complex-homotopy-and-contractibility-in-an-additive-category` and item 6 declares
`thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex`.
(ii) Item 5's `[L3]` fact, previously not cited by any step, was rewritten to the
degreewise-composite and remaining-degree conventions actually used and is cited at
steps 2.4, 2.5, 2.6 and 3.1. (iii) Locator refinement of the Bar-Natan reference in
items 7 and 10–13 from "printed pp. 5-6" to the verified "printed p. 5 (PDF p. 5)".
(iv) Verified claims against sources by full-text read (CMW Appendix A.1 Lemmas
A.1–A.2, Bar-Natan §4–§5, Weibel §1.1–§1.4); no other scaffold change was needed.

**Item decisions.** All 14 recorded with `tools/step3-decisions.mjs record-item
--decision accept --confidence 1`, dependencies equal to each item's declared `deps`
(the five locator-repaired items re-recorded after the edit). `step3-decisions check
--phase final` lists none of the 14 ids in its 412 work rows (253 accepted run-wide).

**Scope declines.** `scope-decisions.mjs refresh --run frontier-35-ten-categories
--group f` then recorded `stands` with row-specific evidence for this page's two
declines: Bar-Natan Lemma 4.1 (delooping in the cobordism category) out-of-scope, and
the CMW simple-homotopy-type remark out-of-scope; both evidence rows name the items and
steps that show the pair needs neither. The other 11 group-`f` rows (batch 12 and the
sibling Gaussian pair owners' rows) were left `pending`; no owner ruling was invented
and the `scope-decisions check` output contains no error naming this page.

**Checks actually run (this dispatch).** `precheck` explicit paths: 12 proof-bearing
items PASS, 2 definitions n/a. `rendercheck` on the 14 items + 2 pages: OK.
`content-policy` item mode on the batch manifest: 26 scoped items, 0 errors;
`--manifest-only` still reports `batch-item-already-exists` for all 26 authored ids
(expected pre-splice). `proof-contract --strict` on
`research/frontier-35-ten-categories-batch-14.proof-contracts.json`: 0 errors,
0 warnings, 26/26 (14 new entries + 12 preserved sibling entries).
`boundary-audit --fail-on-contradicted --fail-on-template`: 208 rows, none
contradicted, no template cluster. `citation-fidelity`: 109 citations, no missing
quote, no widening candidate. `finite-smoke`: 0 errors. `risk-report`: 0 errors,
26 routed. `validate-plan research/plan-spec.json`: 0 errors (my pages appear as
"0 items" shells; the batch manifest is controlling until Step 4 splices).
`coverage-checklist --require-destination`: 2 pages, 31 rows, 0 errors.
`source-fetch-check`: 8/8 fetch-verified. `source-backing`: 11 authored results all
backed. `manifest-deps`: 26 items, 0 errors. `author-check.mts
frontier-35-ten-categories 14`: `ok: true` (precheck, rendercheck,
content-policy-items, proof-contract all exit 0). `depcheck`/`fwdcheck`/`extcheck`/
`prosecheck`/`depsource`/`pathcheck` run repo-wide: no finding names any of the 14
items (their failures are pre-existing debt elsewhere: the `brauer-…` page cycle,
`def-sine-and-cosine-by-power-series` justification, one forward reference in
`thm-surjective-iff-transpose-is-bounded-below`). `frontier-dependency-ledger
refresh --require-reviewed`: passes; batch-14's consumer input is `[]` (every page
requirement is published) and the 17 edges supplied by batch 14 are the sibling
pair's; none of them involves this pair.

**Published concerns reported (no published file was edited).** (1)
`thm-chain-homotopic-maps-induce-the-same-map-on-homology` is repaired in the
working tree (A-R, 2026-09-24, ledger line ~14 and index row): the element chase was
replaced by the cycle-kernel/boundary-image/homology-cokernel argument; statement
unchanged, judge stamp removed. The corollary of this pair deliberately does not
depend on it. (2) Coverage locator corrections for Step 4 serial reconciliation:
the CMW row's PDF pages are 64–65 (the row says 63–64, one page early under 1-indexed
PDF numbering), and the Bar-Natan §5 row should read "printed p. 5 / PDF p. 5", not
"PDF p.4 / printed p.6" (verified: §5 "The algorithm" lies on printed p. 5 = PDF
p. 5, and §6 begins printed p. 6). (3) Verified that the published suppliers used
here (`thm-a-chain-map-induces-a-well-defined-map-on-homology`,
`thm-homology-is-an-additive-functor`, `lem-the-boundary-subobject-factors-through-the-cycle-subobject`,
`lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries`,
`def-homology-object-of-a-chain-complex`,
`thm-an-additive-functor-preserves-finite-biproducts`,
`prop-an-additive-functor-preserves-zero-morphisms`,
`thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication`) are
audited and use categorical (non-element) arguments in their own proofs, so the
element-chase defect class does not recur in this pair's supplier chain.

**Open obligations / handoff.** (1) Step 4 must splice the 14 item rows into
`research/plan-spec.json` for orders 728.1/728.2; until then `content-policy
--manifest-only` reports `batch-item-already-exists` for all 26 batch-14 ids, which is
the expected pre-splice state. (2) Planned page order 757
`categorical-braid-actions-and-decategorification` requires this page — a future
consumer whose items should be checked against these statements when built. (3)
`risk-report` routed 4 items of this pair CRITICAL
(`cor-…-preserves-homotopy-type-and-homology`, `thm-finite-iterated-…`,
`prop-additive-functors-…`, `prop-transfer-…`) and 5 HIGH
(`thm-…-splits-off-…`, `prop-…-strong-deformation-retract`, `ex-a-two-by-two-…`,
`ex-two-finite-cancellation-orders-…`, `cex-a-nonunit-…`) for Step-5a review; these
are routing signals, not defect findings. (4) Step 3 still requires independent
mathematical review; these records do not confer publication approval.

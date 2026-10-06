# Batch 26 — Morita Bicategories and Projective Generators

## Scope and design reconciliation

Owned pages: A `morita-bicategories-and-projective-generators` (order 921) and B
`morita-bicategories-and-projective-generators-examples` (order 922). I read `AGENTS.md`,
`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated batch task, the owner authoring
direction `research/frontier-41-ha-dt-29-owner-authoring-direction.md` (binding: this pair is
one of the 29 approved HA/DT pairs; HA-25–HA-29 statements and complete local proof
contracts are bound to `research/plan-homological-algebra-track.md` and
`research/eilenberg-watts-expansion/proposed-items.json`, and must pass normal authoring and
proof review), the drift review `research/frontier-41-ha-dt-29-alpha-step1-drift.md`
(`VERDICT: no-drift` for this page, with the reconstruction's "supplied small projective
generators and specified equivalence data, not arbitrary class-wide inverse choices"
explicitly preserved), and the design text:

- HA-25–HA-29 conventions, `research/plan-homological-algebra-track.md:5405-5483`
  (left-module handedness, size/choice conventions, no commutativity, canonical
  presentations, supplied equivalence data);
- HA-26 full local proofs P5–P7, `plan-homological-algebra-track.md:5580-5749`;
- HA-26 B2 witnesses, `plan-homological-algebra-track.md:6164-6181`;
- source-reading and local-closure table, `plan-homological-algebra-track.md:6234-6277`;
- binding item inventories, `plan-homological-algebra-track.md:6309` (A page) and `:6326`
  (B page), with `research/eilenberg-watts-expansion/proposed-items.json`.

The two task-listed design locations are **not** competing texts: L6309 is the A-page heading
of the binding inventory table and L6326 is the B-page heading of the same table. The
controlling design text is the HA-26 section around them — P5 (bicategory, pseudofunctor and
biequivalence axioms with the coherence check), P6 (projective-generator reconstruction,
copower presentation and smallness identification) and P7 (dual basis, invertible bimodules,
center), together with B2 — read against the HA-25–HA-29 conventions. I preserved its scope
(arbitrary unital rings, left modules, non-strict bicategory with coherence checked
explicitly, explicit inverse construction using supplied copowers and cokernels, progenerator
identification, Morita equivalence as invertibility of a bimodule, center invariance), its
handedness ($A\to B$ is a $(B,A)$-bimodule, $T_M=M\otimes_A-$), its "no commutativity, no
choice" convention, and its proof route (coherence before the pseudofunctor, canonical
presentation before comparing functors, split finite cover for the dual basis, no five-lemma
or abstract enhancement shortcuts).

`research/plan-spec.json` agrees with the design and the task on page IDs, orders, category,
companion and `requires`; its empty item arrays are the pre-splice planning state, not a
conflict. There is **no design–plan conflict for page data**. The dependency conflicts found
are inside the design text and are recorded below under "Dependency and proof audit".

The manifest has 16 A items and 3 B items: all 12 design A claims and all 3 B examples of the
binding inventory, plus four local A-page suppliers required for a complete local closure
(`def-center-of-a-ring`, `lem-endomorphism-ring-of-an-object-in-a-preadditive-category`,
`lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful`,
`lem-equivalences-preserve-progenerators`). No pair, claim or proof stage was dropped; the A
page is far below the 100-item cap, so no page split is needed. The B page requires only its A
companion, and no B item is a supplier of anything else.

## Dependency and proof audit

All 19 items carry explicit `deps` arrays and `dependency_level` labels recomputed from the
graph (maximum level 8; five items at level 0). Every external dependency is a published item
on one of the declared `requires` pages or on published category-theory, module-theory and
abelian-category pages reachable from them; I resolved each home and checked it is a published
A-page item, not a B-page or unproved item. There is no cycle and no unresolved target.

In-run suppliers are the four items of the batch-25 A page used here
(`def-additive-cocontinuous-module-functor`,
`lem-additive-cocontinuous-module-functors-form-a-category`,
`thm-eilenberg-watts-for-arbitrary-unital-rings`,
`thm-natural-transformations-of-tensor-functors-are-bimodule-maps`,
`cor-eilenberg-watts-is-an-equivalence-of-hom-categories`,
`lem-canonical-free-presentation-controls-eilenberg-watts-comparison`,
`lem-tensor-hom-adjunction-for-bimodules`), read in the completed
batch-25 manifest. `research/frontier-41-ha-dt-29-batch-26.cross-batch-dependencies.json`
records 13 verified consumer edges to batch 25, and the refreshed unified ledger lists batch
26 as reviewed with no orphaned rows; the ledger also shows the page-level consumer edges from
batches 27 and 29 to this A page, which belong to those consumer batches' inputs.

Key findings:

1. **A commutative-only published supplier named by the design.** The design's P7 lists
   `thm-hom-tensor-adjunction-for-modules` for the dual-basis step. That published theorem
   begins "Let $R$ be a commutative ring" and its right-hand side is the internal Hom of
   `def-internal-hom-module-over-a-commutative-ring`; it cannot supply
   $\operatorname{Hom}_B(P,B)\otimes_BY\cong\operatorname{Hom}_B(P,Y)$ for an arbitrary
   unital $B$ and a $(B,A)$-bimodule $P$. The published item is correct in its stated scope;
   the defect is the design's dependency choice. The local supplier
   `lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism` proves the needed
   isomorphism directly from a finite dual basis and the arbitrary-ring tensor universal
   property, with the left $A$-action and naturality checked; it mirrors Johnson–Yau §6.3
   (Lemmas 6.3.2/6.3.4 and Example 6.3.6) in the opposite handedness.
2. **Missing general prerequisites for P6.** The design asserts that $\operatorname{End}_{\mathcal C}(P)$
   is a ring and that $H=\mathcal C(P,-)$ is exact, coproduct-preserving, faithful, and
   detects zero objects. No published item supplies these for a general cocomplete abelian
   category, so two local lemmas were added
   (`lem-endomorphism-ring-of-an-object-in-a-preadditive-category`,
   `lem-generator-hom-functor-is-exact-coproduct-preserving-and-faithful`), proved from
   `def-preadditive-category`, `thm-projective-object-characterisations`,
   `thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree`,
   `cor-hom-functors-on-a-preadditive-category-are-left-exact` and the cokernel of $0\to Z$.
3. **P6's "canonical presentation of P3" is an in-run item.** The copower construction is
   built on `lem-canonical-free-presentation-controls-eilenberg-watts-comparison` (batch 25),
   whose canonical presentation has an explicitly non-monic first map. The construction lemma
   records this edge and uses only that presentation, the copower universal property, and
   uniqueness of representing objects; the first map of the presentation of a general module
   need not be monic and is not claimed to be.
4. **Definition well-definedness.** `def-small-projective-generator-and-progenerator` is
   justified by `lem-small-projective-modules-are-exactly-finitely-generated-projective-modules`
   (f.g. projective $\Leftrightarrow$ projective and coproduct-preserving; progenerator
   identification; the regular module as the basic example), and
   `def-morita-bicategory-of-rings-and-bimodules` is justified by
   `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence`; each justified
   target has the definition in its own `deps`, so the `justified_by` edges do not create
   dependency cycles. The definition of bimodule maps is local to the Morita-bicategory
   definition because no published item defines them.
5. **Equivalence-invariance of small projective generators.** P7 uses "equivalences preserve
   projectivity, coproducts, and the separating property" without a supplier; the added lemma
   `lem-equivalences-preserve-progenerators` proves both directions using the adjoint
   equivalence, the splitting characterisation of projectivity, the adjunction bijection and
   colimit preservation.
6. **Center invariance has no statement in the design's four sources.** FSS and EGNO record
   Morita-invariance of finiteness and the finite reconstruction, but not
   $Z(A)\cong Z(B)$. The corollary is stated with the classical invariance recorded in the
   nLab entry and proved by the design's P4 computation
   ($\operatorname{Nat}(1_{A\text{-}\mathrm{Mod}},1_{A\text{-}\mathrm{Mod}})\cong
   \operatorname{End}_{A\text{-}A}(A)\cong Z(A)$ plus conjugation by an adjoint
   equivalence); the tiny local definition `def-center-of-a-ring` gives the notation a
   home. Both the statement and the proof carry the nLab URL, and the nLab row is recorded
   as a secondary source alongside the three primary treatments.
7. **Handedness adaptation of the bicategorical sources.** Johnson–Yau define
   $\mathrm{Bimod}(R,S)$ with $(R,S)$-bimodules and composition $M\otimes_SN$ (right modules
   in their duality section), while this expansion fixes left modules and the mirror
   convention $A\to B$ a $(B,A)$-bimodule with composition $N\otimes_BM$. The mirror
   reindexing is recorded in the definition's proof strategy and in the coverage rows; every
   formula in the manifest is stated in the expansion's convention. Johnson–Yau define
   biequivalence by internal equivalences and prove the local characterization used here
   (Theorem 7.4.1); the definition item states which formulation it adopts and why.

**Axiom of choice.** Only `cex-a-projective-generator-need-not-be-small` uses AC: the
statement declares the assumption, its `deps` include `def-axiom-of-choice`, and the exact use
is the projectivity of the infinite free module $k^{(\mathbb N)}$ via
`thm-free-modules-are-projective-with-choice-boundary`. The counterexample is
`ai-generated` with `generation.role: counterexample` and is not a dependency target. The
reconstruction theorem, the Morita theorem, the dual-basis lemma, the coherence and
pseudofunctor lemmas and the center corollary are choice-free; the finite matrix witnesses use
no choice. No item in this batch reaches `deferred-set-theory-beyond-choice` through any
proof or prerequisite path, and no Recorded result is consumed.

## Sources and reading

The owned coverage file `research/frontier-41-ha-dt-29-batch-26.coverage.json` records 40
harvested rows over five A-page sources plus two example-page sources, each with an explicit
locator and disposition: 17 `included`, 9 `inline`, 9 `deferred` with a resolvable
destination, and 5 `out-of-scope` with a specific reason. Full text was fetched and stamped by
`tools/source-fetch-check.mjs --stamp` (7/7 resolved, no drops):

1. N. Johnson and D. Yau, *2-Dimensional Categories*, <https://arxiv.org/pdf/2002.06055>,
   476 PDF pages. Read Definition 2.1.3 with the unity and pentagon axioms (printed pp.25–27),
   Example 2.1.26 (Bimod, printed pp.32–33), Definition 4.1.2 and Explanation 4.1.5
   (pseudofunctors, printed pp.103–105), Definition 6.2.8 and Explanation 6.2.9
   (biequivalence, printed pp.182–183), §6.3 Lemmas 6.3.2, 6.3.4 and Example 6.3.6 (dual
   basis and duality for modules, printed pp.185–187), and Theorem 7.4.1 (Whitehead
   characterization, printed pp.215–216). This is the pair's book-level treatment of the
   bicategorical material and of the dual-basis step.
2. W. Crawley-Boevey, *Noncommutative Algebra* (Bielefeld lecture notes),
   <https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf>,
   88 PDF pages. Read §1.4 (centre $Z(R)$, printed p.3) and the whole of §3.12 Morita
   Equivalence (printed pp.67–69): the definitions (cocomplete abelian category; finitely
   generated $=$ $\operatorname{Hom}(P,-)$ preserves coproducts; generator; $R$ is a
   projective generator), the reconstruction theorem $A\simeq R\text{-Mod}$ iff $A$ is
   cocomplete with a f.g. projective generator $P$ and $R\cong\operatorname{End}(P)^{\mathrm{op}}$
   with its full proof, the Morita theorem (i)–(iii), and Examples (i)–(ii) (matrix rings and
   idempotents). This is the pair's full lecture-note treatment of the Morita theory and the
   route of P6/P7.
3. P. Etingof, S. Gelaki, D. Nikshych, V. Ostrik, *Tensor Categories* (author final
   version), <https://math.mit.edu/~etingof/egnobookfinal.pdf>, 362 PDF pages. Read §1.8
   printed pp.9–11 (Definitions 1.8.5–1.8.6; the paragraph on $A=\operatorname{End}(P)^{\mathrm{op}}$,
   $F=\operatorname{Hom}_{\mathcal C}(P,-)$; projectivity $\Rightarrow$ exactness and
   generator $\Rightarrow$ faithfulness; Proposition 1.8.10; Corollary 1.8.11; Propositions
   1.8.15 and 1.8.17). This is the second independent monograph treatment, in the
   finite-dimensional case; its finite-category results are deferred to the HA-27/HA-28
   pages and recorded as such.
4. nLab, *Morita equivalence*, <https://ncatlab.org/nlab/show/Morita+equivalence>, full text
   (12,517 extracted characters) read. Used only for the classical Morita theorem as an
   independent secondary statement and for the classical center-invariance sentence; the
   wiki row is secondary, and the page's primary backing is items 1–3.
5. J. Fuchs, G. Schaumann, C. Schweigert, *Eilenberg–Watts calculus for finite categories and
   a bimodule Radford $S^4$ theorem*, <https://arxiv.org/pdf/1612.04561v3>, 41 PDF pages.
   Read the introduction and formulas (1.1)–(1.4) (printed pp.1–3). Its classical
   arbitrary-ring statement is absorbed inline into the Morita theorem's route; the finite
   Deligne-product, end/coend, Nakayama and Radford results are deferred with explicit
   destinations (`finite-abelian-categories-and-eilenberg-watts`,
   `deligne-products-and-categorical-eilenberg-watts`).

The B-page entry uses Crawley-Boevey §3.12 Examples (i)–(ii) and the nLab center statement;
the design-authored counterexample of a projective generator that is not small is recorded as
a `canonical`-style row with the counterexample item. No source in the coverage file is dropped,
so no `source_resolution` record is created. No argument in this batch is taken from a source
that was not fetched and stamped; the design's own scoped checker review is preserved in
`research/eilenberg-watts-expansion/review.md`.

## Checks at scaffold completion

| Check | Actual result |
|---|---|
| `coverage-checklist.mjs --require-destination` on the owned coverage file | pass: 2 pages, 40 harvested rows, 17 included / 9 inline / 9 deferred / 5 out-of-scope, 0 errors, 0 warnings |
| `source-fetch-check.mjs --coverage ... --stamp` | pass: 7/7 sources full-text stamped (476/88/362-page PDFs and a 41-page PDF, plus a 12,517-character HTML page); check mode re-run: 7/7 resolved, 0 drops |
| `manifest-deps.mjs` whole run (all current batch manifests) | pass: 167 items, 0 missing, 0 errors |
| `content-policy.mjs --manifest-only` whole run | pass: 167 scoped items, 0 errors, 0 warnings |
| Whole-run `dependencyLevels` label validation | 19 batch-26 items, 0 errors, maximum level 8; no cycle and no label error names a batch-26 item |
| `item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | exit 1: 44 errors, all `empty scaffold inventory` for the 22 batches (out of 29) that had not yet scaffolded items when the check ran; zero label or cycle errors involve batch 26 |
| `validate-plan.mjs research/plan-spec.json` | exit 0: page order acyclic and consistent, no item-level cycles, forward references, B-page dependencies or unresolved ids among the 1420 pages that carry item lists; 4617 advisory `redundant-prereq` warnings plan-wide (pre-existing shared-plan reachability notes, none an error), of which two concern this A page's own `requires` declaration (it names `subobject-lattices-generators-and-the-grothendieck-axioms` directly and also reaches that page through the two other prerequisites) |
| `extcheck.mjs --quiet` | exit 0: 40 pre-existing `unproved-on-published` warnings elsewhere in the library; no batch-26 path uses a Recorded item |
| `fwdcheck.mjs --quiet` | exit 0: no forward references from this batch |
| `depcheck.mjs` | exit 1 on the pre-existing published corpus (1170 findings: 833 `published-unaudited`, 150 `cited-not-in-deps`, 141 `multi-home`, 43 `published-local-repair`, 2 `published-unchecked`, 1 `orphan`); zero findings mention this batch or its items |
| Step-1 decision currency (`step1-decisions.mjs check`) | 167 items recorded run-wide, all `ready`; 44 open work rows, every one an empty scaffold inventory of another batch; all 19 batch-26 records current and closed |
| `frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` | exit 0: batch 26 reviewed with 13 verified consumer edges to batch 25, no orphaned reviews; the ledger additionally lists the page-level consumer edges from batches 27 and 29 to this A page |

One derived whole-run artifact was refreshed by the ledger tool
(`research/frontier-41-ha-dt-29-cross-batch-dependencies.json`); no published content, shared
plan, engine state or verdict was edited, and no other run's namespace was touched.

These readiness records and mechanical checks establish a complete scaffold route with
adequate, examined prerequisites. They are not an authored proof or an independent
mathematical approval: Step 3 must author every item against the final consumers, and Steps
5–8 own audit and adjudication.

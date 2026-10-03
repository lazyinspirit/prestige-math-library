# Batch 23 Step 1 scaffold — Classical Complex Algebraic Actions and Affine Embeddings

Scope: the single A/B pair `classical-complex-algebraic-actions-and-affine-embeddings`
(A, order 879) / `classical-complex-algebraic-actions-and-affine-embeddings-examples`
(B, order 880), category `algebraic-geometry`. No other pair was touched. Read
`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the binding
`research/frontier-38-owner-30-owner-authoring-direction.md`, the AG-ACT-2 design
section (L209 of `research/plan-algebraic-geometry-expansion-track.md`), the current
`research/plan-spec.json`, `research/frontier-38-owner-30-local-prereq-879.md`, and the
ten item files. The owner direction was read before any construction and controls.

## Scope and plan reconciliation

- The owner direction's 879/880 bullet requires local proofs of the affine
  action/coaction, the locally finite coordinate-ring representation, the torus grading
  dictionary, and the equivariant finite-dimensional closed embedding, with 873 not a
  dependency and Choice/Nullstellensatz carried where actually used. The scaffold
  realizes exactly that and imports no AG-GS-2/873 or AG-ACT-1/877 item.
- Design versus plan: the design row names four A items
  (`def-rational-action-on-affine-variety`,
  `thm-coordinate-ring-of-affine-action-is-locally-finite`,
  `lem-torus-rational-modules-and-gradings`,
  `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`)
  and two B items (`ex-torus-weights-and-affine-action`,
  `cex-abstract-group-action-is-not-algebraic-action`). `plan-spec.json` retains all
  six unchanged and adds the owner-mandated local closure:
  `lem-classical-affine-algebraic-set-product-coordinate-ring`,
  `prop-affine-algebraic-actions-coordinate-ring-coaction`,
  `lem-complex-affine-group-comodule-local-finiteness`, and the B example
  `ex-additive-translation-equivariant-parabola-embedding`. This is an expansion
  required by the binding direction (and already reflected in the design's own
  remark that Frontier-38 local proofs cover those steps), not a conflict; the plan
  controls and was followed. No claim was weakened or removed.
- Requires: the design's "published AG-P2 classical affine interface and AV-5" are
  exactly `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`
  and `dimension-constructible-images-and-dimensions-of-fibres`; both pages are
  published, and the plan-spec `requires` arrays were copied verbatim into the
  manifest. No requires drift. No page-level edge to 873 or 877 exists.
- The manifest pair carries the ten item files already placed by the local
  prerequisite packet; this batch recorded their readiness and did not re-mint them.

## Manifest, dependency levels, and mathematical audit

Manifest `research/frontier-38-owner-30-batch-23.pages.json`: A879 has seven items and
B880 three; every item has an explicit `deps` array copied from its item frontmatter,
and `dependency_level` computed as one plus the maximum level of in-run deps:

| Level | Item |
|---:|---|
| 0 | `lem-classical-affine-algebraic-set-product-coordinate-ring` |
| 1 | `def-rational-action-on-affine-variety` |
| 2 | `prop-affine-algebraic-actions-coordinate-ring-coaction` |
| 2 | `lem-complex-affine-group-comodule-local-finiteness` |
| 3 | `thm-coordinate-ring-of-affine-action-is-locally-finite` |
| 3 | `lem-torus-rational-modules-and-gradings` |
| 4 | `thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module` |
| 5 | `ex-torus-weights-and-affine-action` |
| 4 | `cex-abstract-group-action-is-not-algebraic-action` |
| 5 | `ex-additive-translation-equivariant-parabola-embedding` |

A focused run of the tool's own `dependencyLevels` on the batch manifest reports
`0 errors` with exactly these labels. The required whole-run
`node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` is nonzero at
this writing solely because sibling batches still being scaffolded have empty
inventories (42 errors at the final re-run, every one `empty scaffold inventory`); no
error names a batch-23 item. No cycle, forward edge, or missing in-run supplier exists.

- **Product ring (level 0).** Surjectivity splits ambient polynomials into sums of
  separate-variable products; injectivity writes a kernel element with independent
  second-factor coefficients and evaluates on $X$, where the published
  polynomial-function identification forces every coefficient to vanish. Empty
  factors and the three-factor iteration are checked. Uses only finite expressions and
  finite-dimensional elimination, so it is choice-free. Published suppliers examined:
  `def-classical-affine-coordinate-ring` (coordinates generate; $k[\varnothing]=0$) and
  `thm-classical-polynomial-functions-equal-coordinate-ring` (evaluation isomorphism,
  empty set included).
- **Action definition (level 1).** Fixes complex affine algebraic groups with
  $\Delta,\varepsilon,S$, algebraic actions, equivariant morphisms, rational modules,
  the inverse-pullback function action and its right-comodule form, and distinguishes
  the opposite direct-action pullback. Well-definedness of $\Delta,\varepsilon,S$
  rests on the level-0 product lemma; Hopf identities are checked by evaluation.
  No AC is used in the definition.
- **Coaction dictionary (level 2).** Pullback gives $\delta$ with the two coaction
  identities; the published algebra-morphism antiequivalence
  (`thm-classical-affine-morphisms-coordinate-ring-antiequivalence`, whose statement
  explicitly allows empty sets/zero algebras and assumes AC) reconstructs actions and
  converts the identities back. Inversion converts $\delta$ to the equivalent
  right-comodule algebra. AC is declared and used only through that supplier; no basis
  is selected.
- **Comodule local finiteness (level 2).** Coassociativity plus a quotient map forces
  $c(v_i)\in W_v\otimes H$ because $\ker(q\otimes\operatorname{id})=W_v\otimes H$ over
  a field, proved with finite tensor independence instead of the infinite bases used by
  Gille 6.3.1 and Milne 4.7; matrix and inverse-matrix entries exhibit a morphism to
  $GL(W)$. Choice-free.
- **Coordinate-ring local finiteness (level 3).** Applies the comodule lemma to the
  right-comodule algebra of the action; multiplicativity and unit preservation follow
  from $\delta$ being an algebra map. AC inherited from the coaction dictionary only.
- **Torus grading dictionary (level 3).** Unique Laurent coefficients give orthogonal
  projectors and a direct sum with finite support; conversely a grading defines a
  coaction, and rational-module coactions glue because Laurent polynomials are
  determined by evaluations. Algebra law $A_mA_n\subseteq A_{m+n}$, $1\in A_0$;
  realization of a reduced finite-type graded algebra goes through the published
  Nullstellensatz dictionary, which is where AC is used. Intertwining maps are exactly
  degree-preserving; function weights are the negatives of point weights.
- **Equivariant embedding (level 4).** Finitely many generators (from the coordinate
  definition) are put in one finite-dimensional rational submodule; the dual action is
  algebraic by transpose-inverse; the radical-kernel quotient is identified with
  $V(I)$ by the published Nullstellensatz and the inverse morphism comes from the
  antiequivalence; evaluation is explicitly equivariant. Empty $X$ is the unit ideal.
  AC confined to the two published suppliers, as declared.
- **B items (levels 5, 4, 5).** The torus example computes the weight decomposition
  and the identity dual-plane embedding; the counterexample uses the conjugate
  translation action of $(\mathbb C,+)$, whose individual translations are polynomial
  but whose joint map is not a morphism and whose stable $\operatorname{span}(1,z)$ has
  nonregular matrix coefficient $-\bar g$; the parabola example computes the
  $(\mathbb{C},+)$ dual action and the closed image $a=1,c=b^2$. Each B statement is
  `ai-generated` with the matching `generation.role`; no B item is a dependency target
  and none supplies an A item.
- **Axiom strength.** Exactly the items whose proofs pass through the published
  Nullstellensatz/antiequivalence route declare `def-axiom-of-choice`; the product
  lemma, the action definition, and the comodule lemma make only finite selections.
  A transitive walk of the ten items' `deps`/`justified_by`/`forward_refs` reached 306
  item files, all of which resolve; no Recorded result and no path to
  `deferred-set-theory-beyond-choice` appears.

## Source record

Three independent full treatments were re-fetched with `source-fetch-check --stamp`
(all first-attempt succeeds, no recovery drop needed), and the relevant complete
arguments were read at the stated locators:

- Michel Brion, *Introduction to actions of algebraic groups* (2010), Definition 1.4,
  Lemma 1.5, Definitions 1.6/1.8, Example 1.7 and the complete proof of Proposition 1.9,
  printed pp. 3–4: 678378 bytes, 23 pages, sha256 prefix `1abc97e4b6ff41d6`.
- Philippe Gille, *Introduction to reductive group schemes over rings*, Proposition
  6.0.5 (pp. 25–27, including both comodule diagrams), Proposition 6.2.1 (pp. 30–31,
  full faithfulness and essential surjectivity) and Theorem 6.3.1 (p. 32): 805924
  bytes, 113 pages, sha256 prefix `4af2da88fd58a7da`.
- J. S. Milne, *Algebraic Groups* (2022), Remark 4.1 (pp. 83–84), Proposition 4.7 and
  Corollary 4.8 (p. 86), Theorem 12.12 and Remark 12.13 (p. 235): 4838013 bytes, 659
  pages, sha256 prefix `f2ddd8fa4d263085`.

The coverage harvest has 16 source-anchored results: 12 `included`, 2 `inline`
(Milne 4.8 into the comodule lemma; Milne 12.12 into the torus lemma), and 2
`out-of-scope` with specific reasons (Brion's non-rational left-translation action on
all of $C(G)$; Gille's faithful finite-dimensional representation 6.3.2, which is a
different claim from embedding the acted-on variety). The stamped hashes match the
retrieval evidence recorded in `research/frontier-38-owner-30-local-prereq-879.md`.

Notation repair: the embedding theorem and the torus example used an applied
`\iota` for the evaluation map, which the reader-facing notation policy bans
mechanically (`content-policy` item mode). The map was renamed to `\mathrm{ev}` with no
mathematical change; rendercheck, precheck and proof-layout were rerun on the changed
files. Because those bytes are part of the readiness hash, the affected records were
re-recorded (`thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module`,
`ex-torus-weights-and-affine-action`,
`ex-additive-translation-equivariant-parabola-embedding`).

## Check results at this snapshot

- `coverage-checklist --require-destination` on the batch: **1 page, 16 harvested
  results, 0 errors, 0 warnings**.
- Whole-run `coverage-checklist --require-destination` over the coverage files that
  exist (batches 14, 23, 30): **4 pages, 82 harvested results, 0 errors, 1 warning**
  (batch 14 low-yield, 6/21; its owner's finding, not this pair's). The stage gate
  still fails only for the 26 batch coverage files that do not exist yet.
- `manifest-deps` over all current manifests: **201 items, 0 errors** (final re-run;
  the count grows as sibling batches are scaffolded).
- `content-policy --manifest-only` over all current manifests: **201 scoped items,
  0 errors, 0 warnings**. Item mode over the same scope (my ten plus the other filled
  batches at the time): **0 errors**, after the notation repair.
- `validate-plan.mjs research/plan-spec.json`: exit 0 (it still notes planned pages
  elsewhere with empty item lists, which the later splice owns).
- Readiness: `step1-decisions.mjs check` reports all ten batch-23 items current
  `ready` with examined dependency IDs and evidence in their records; at the snapshot
  the run had 36 of 82 loaded items ready, the 46 pending records all belonging to
  batches 14 and 29 that were still being scaffolded.
- `depsource`: exit 0, 0 unresolved. `prosecheck`: OK. `extcheck`: OK (published
  recorded-material warnings only, none in this pair). `depcheck` and `fwdcheck` are
  currently red only on the two in-flight 887/888 prereq items named below.
- Sources: `source-fetch-check` check mode **3/3 fetch-verified**; `url-sweep`
  **3/3 live, 0 blocking**; `source-backing` **every authored result backed**.
- Cross-batch ledger: the batch-23 consumer input is
  `research/frontier-38-owner-30-batch-23.cross-batch-dependencies.json` = `[]`
  (the batch declares no edge to another in-run batch, and no sibling batch declares
  an edge to it at this snapshot). `frontier-dependency-ledger.mjs refresh` succeeded;
  `--require-reviewed` is currently nonzero because other batches have not supplied
  inputs/reviews for their five declared edges.
- Item format/rendering: precheck passes on all nine proof-bearing files (the
  definition is not proof-bearing), rendercheck passes on all ten files, and
  `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs <10 paths>`
  returns `10 items, 21 steps, 0 defects` (the default app-dir invocation still
  fails on the missing sibling TSX transform, as recorded by the local packet; the
  read-only app view uses the unchanged checkout through symlinks).

## Unresolved findings outside batch 23

- `items/def-multiplicative-type-coordinate-hopf-algebra.md` and
  `items/lem-multiplicative-type-affineness-by-field-descent.md` (887/888 local
  prereqs, not in this batch and not in any manifest yet) depend on
  `def-group-scheme-over-a-field`, which is planned on the unscaffolded page
  `group-schemes-of-finite-type-over-a-field` (871, batch 22). `depcheck` and
  `fwdcheck` stay red on those four findings until batches 22/28 resolve them. They
  are not in any batch-23 proof path.
- The whole-run `item-dependency-levels`, `step1-decisions`, ledger `--require-reviewed`,
  coverage and repo-wide gates remain red only for sibling batches still being
  scaffolded (empty inventories, missing coverage files, missing readiness records).
  None of those findings names a batch-23 item.

## Step discipline

Wrote only this batch's manifest, coverage, notes, cross-batch input, the ten
`research/frontier-38-owner-30-step1-<id>.json` readiness records, the two
notation-repaired draft item files of this pair, and ran the documented mechanical
ledger refresh. No page file, `plan-spec.json`, scope ledger, engine state, published
item, or verdict was edited. Owner/operator reconciliation and the full engine gate
follow; a `ready` record here is not independent mathematical approval. Step 3 review
remains owed.

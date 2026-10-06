# Batch 7 notes — `yang-baxter-operators-and-quantum-braid-representations`

Run: `frontier-40-geometry-braids-rep-27`. Pair: `yang-baxter-operators-and-quantum-braid-representations`
(A, order 753, `braid-groups`) / `yang-baxter-operators-and-quantum-braid-representations-examples`
(B, order 754). Manifest: `research/frontier-40-geometry-braids-rep-27-batch-7.pages.json`
(18 A items, 7 B items, 25 total). Coverage:
`research/frontier-40-geometry-braids-rep-27-batch-7.coverage.json`. Cross-batch input:
`research/frontier-40-geometry-braids-rep-27-batch-7.cross-batch-dependencies.json` = `[]`.

## Owner direction and design control

`research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` was read first. It fixes
the 27-pair scope, authorizes lower-order dependencies on other selected pairs of this
exact run, and requires suppliers to be scaffolded before consumers. This pair (order 753)
has **no in-run dependencies**: every declared dependency of every item is a published item
on disk or a local item of this batch. The direction therefore changes nothing here; no
conflict with it arises.

Design locations read: `research/plan-braid-groups-track.md` **L640** = the heading and
inventory table of `BG-13 — Yang–Baxter Operators and Quantum Braid Representations` (the A
page, L640–L664) and **L666** = the heading of `BG-13 — … — Examples` (the B page,
L666–L678). **L640 controls the A inventory and L666 the B inventory**; they are two
sections of the same binding design, not competing sources. The complete BG-13 section,
its `Requires` list, its conventions (strict-model display, associators restored by
coherence, Turaev's curly-arrow convention, the fixed positive-curl diagram convention for
the Markov scalar, the warning that the unnormalized ribbon trace is only a *framed* link
invariant) and its proof routes were preserved.

## Design versus plan

`research/plan-spec.json` carries page records `753`/`754` with the same `title`, `kind`,
`category`, `companion` and `requires` chain as the design, and with **no item lists**
(`"items": []`). The plan therefore fixes the page order, the category and the page-level
prerequisite chain, and delegates the item inventory to the design. The A-page `requires`
chain `braided-and-symmetric-monoidal-categories`, `duality-and-rigidity-in-monoidal-categories`,
`tensor-and-fusion-categories`, `modules-and-module-homomorphisms`,
`oriented-links-braid-closures-and-markov-equivalence` agrees verbatim between plan and
design. **No design/plan conflict was found; none is recorded.** The stage-1 drift review
(`research/frontier-40-geometry-braids-rep-27-alpha-step1-drift.md`) also returned `no-drift`
for every A page of the run, this page included.

## Inventory

A page — 18 items (15 design ids + 3 authorised local prerequisites), all with explicit
`deps` and computed `dependency_level`:

1. `def-yang-baxter-operator-on-an-object` (0) — strict-model definition, invertible R.
2. `def-the-framed-oriented-tangle-category` (0) — slab category of framed oriented tangles.
3. `def-absolutely-simple-object` (0) — **added**: `End(X)=k·id_X`, needed to state the twist eigenvalue.
4. `def-exponent-sum-and-writhe-of-a-braid` (0) — **added**: the homomorphism `w: B_n→Z`.
5. `def-local-yang-baxter-operators-on-tensor-powers` (1) — `R_i = 1^{⊗(i-1)}⊗R⊗1^{⊗(n-i-1)}`, bracket-corrected.
6. `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation` (1) — Turaev 3.1.1/3.2/3.3.
7. `lem-local-yang-baxter-operators-satisfy-the-artin-relations` (2).
8. `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor` (2) — Turaev I.2.5.
9. `thm-a-yang-baxter-operator-gives-braid-group-representations` (3).
10. `cor-an-object-of-a-braided-category-carries-canonical-braid-actions` (4).
11. `prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group` (4).
12. `def-braided-monoidal-functor-induced-intertwiner` (5).
13. `def-ribbon-evaluation-of-an-x-colored-closed-braid` (5).
14. `lem-ribbon-trace-equals-the-framed-closure-evaluation` (6) — **added**: the design's promised "prove the trace formula is the closed-ribbon evaluation", split out as an honest lemma.
15. `thm-braided-functors-intertwine-canonical-braid-actions` (6).
16. `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` (7).
17. `lem-scalar-twist-controls-the-two-markov-stabilizations` (7).
18. `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` (8).

B page — 7 design ids, all examples/counterexamples, levels 1–9:
`cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group` (1),
`ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces` (4),
`ex-a-noninvolutive-one-dimensional-yang-baxter-operator` (5),
`ex-the-flip-operator-gives-the-permutation-representation` (5),
`cex-a-braiding-alone-does-not-define-a-link-trace` (6),
`cex-unnormalized-ribbon-trace-is-not-unframed-markov-invariant` (8),
`ex-writhe-normalization-cancels-a-ribbon-kink` (9).

### Why the three added ids are prerequisites, not padding

* `def-absolutely-simple-object`: the design's stabilisation lemma assumes "`X` is absolutely
  simple" with the audit's parenthetical `(End(X)=k)`, and **the library had no definition of
  the term**. Without a local definition the hypothesis has no referent; with `End(X)=k·id_X`
  the twist `θ_X ∈ Aut(X)` is a scalar `λ id_X` with `λ ∈ k^×`, which is exactly the datum the
  two Markov scalars use. `End(X)` is a `k`-algebra by the published `k`-linear definition.
* `def-exponent-sum-and-writhe-of-a-braid`: `thm-writhe-normalized-…` uses `w(β)` and
  `w(ιβσ_n^{±1}) = w(β)±1`, and **no published item defines the exponent-sum homomorphism**
  (the published counterexample `cex-exponent-sum-is-not-a-complete-braid-normal-form` only
  uses it locally in its own proof). The local definition proves well-definedness by von Dyck
  and the relator check.
* `lem-ribbon-trace-equals-the-framed-closure-evaluation`: the design's
  `def-ribbon-evaluation-…` row instructs "Prove from the generator assignment that this trace
  formula is exactly the evaluation of the fully closed framed ribbon", and the stabilisation
  lemma depends on that identification. A definition cannot carry an unproved identification,
  so the identification is scaffolded as a lemma (Turaev Corollaries 2.7.1–2.7.2) and both
  consumers depend on it.

All three are local to the A page (a statement used by a later A item), carry explicit `deps`,
introduce no forward, cross-page or B-page dependency, and leave both pages far below the
100-item cap. No selected pair or planned supplier was altered.

### Dependency defects found in the design and repaired in the scaffold

The design's dep lists were verified against the actual published statements and proofs, not
against page membership. Four genuinely needed published suppliers were **missing** from
design dep lists and were added:

* `prop-an-involutive-…` also needs `lem-local-yang-baxter-operators-satisfy-the-artin-relations`
  (the Coxeter relator check) — added.
* `lem-ribbon-trace-equals-…` needs `def-the-categorical-trace-of-a-morphism-into-the-double-dual`
  (typing of `Tr_L`) — added.
* `lem-scalar-twist-controls-…` needs `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`
  (the value `F(φ_X)=θ_X` of the curl) — added.
* `ex-a-noninvolutive-…` needs `prop-an-involutive-…` for its "does not factor through `S_n`"
  assertion; `cex-a-braiding-alone-…` needs
  `cor-an-object-of-a-braided-category-carries-canonical-braid-actions` for the contrast that
  braid *actions* do exist from a braiding alone — both added.

One design dep was **substituted** because it names the wrong strictification:
`def-local-yang-baxter-operators-on-tensor-powers` is a definition for an arbitrary monoidal
category, but the design listed the *braided* strictification theorem
(`thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`),
which presupposes a braiding. The local operators and their bracket correction need only
Mac Lane strictification and Mac Lane coherence, so the deps are
`thm-mac-lane-strictification` and `thm-mac-lane-coherence-in-the-canonical-map-form`. The
braided strictification item remains used where the category really is braided/ribbon
(`thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`).

Conversely, several design dep lists were **tightened**: `cor-an-object-of-a-braided-category-carries-canonical-braid-actions`
needs `thm-braided-coherence-via-underlying-braids` (the design's own route is "use braided
coherence to identify the word action independently of parenthesization"), and
`def-braided-monoidal-functor-induced-intertwiner` / `thm-braided-functors-intertwine-…` need
the same published coherence theorem to remove bracket choices, plus `thm-von-dyck` for the
word induction in the latter. These additions and the substitution are recorded here as
dependency repairs, not scope changes.

## Convention hazards preserved from the design and the researcher-03 audit

* EGNO's checked categorical operator is the **braiding** `c_{X,X}`; a quantum-Hopf `R`
  convention needs a flip before it becomes this operator. The page never identifies the
  quantum Yang–Baxter equation `R12R13R23=R23R13R12` with the Artin-form equation without
  that conversion (EGNO §8.3 is disposed `out-of-scope` for this reason).
* Strictification permits suppressing associators, but transport maps must be restored when
  returning to the original category. Every local operator and every functor item states its
  strict-model convention and names the coherence tool (`thm-braided-coherence-via-underlying-braids`,
  `thm-mac-lane-strictification`, `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`).
* The categorical trace is typed on a morphism to a double dual: in the ribbon setting the
  pivotal comparison is `j_X = u_Xθ_X`, never a bare braiding or bare rigidity. This is why
  the B-page counterexample `cex-a-braiding-alone-does-not-define-a-link-trace` exists.
* The **plus/minus scalar is diagram-convention sensitive**. The stabilisation lemma states
  the convention explicitly (positive stabilization ↦ positive curl `φ_X` with `F(φ_X)=θ_X`,
  Turaev §1–2 and relation (3.2.h)) and warns that the opposite drawing convention exchanges
  `λ` and `λ^{-1}`; the authored proof must include the local kink diagram. The design's
  relative-order phrasing `θ_{X⊗Y}=c_{Y,X}c_{X,Y}(θ_X⊗θ_Y)` is used in the same reading as
  the published `def-twist-and-ribbon-structure`.
* The unnormalized ribbon trace is an invariant of **framed** colored links only; ordinary
  Markov stabilization inserts a curl. This is stated in
  `thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links` and again in the writhe
  theorem, with the AC use localised to Markov's theorem.

## Axiom-of-choice discipline

* `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation` states
  `Assume AC_ω` and declares `def-countable-choice`; the countable-choice cost is the
  general-position/transversality input inherited from the published oriented Reidemeister
  theorem. It is used exactly there.
* `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant` states `Assume the Axiom
  of Choice` and declares `def-axiom-of-choice`; AC is used **only** through the published
  `thm-markovs-closed-braid-equivalence-theorem`. The categorical calculation itself is
  choice-free and is stated that way.
* `ex-writhe-normalization-cancels-a-ribbon-kink` consumes that theorem and therefore also
  states AC and declares `def-axiom-of-choice`.
* Every other item of the batch is choice-free: strictification, coherence, von Dyck,
  Drinfeld/twist, ribbon evaluation and the stabilization lemma use no choice principle.
  No item reaches `deferred-set-theory-beyond-choice` through any path.

## Published prerequisites examined (statements and proofs read)

All of the following are `status: published` and were read at their statements and, where the
proof contains the used clause, at their proofs:

`def-braided-monoidal-category`, `def-braiding`,
`thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`,
`thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`,
`thm-mac-lane-strictification`, `thm-mac-lane-coherence-in-the-canonical-map-form`,
`thm-braided-coherence-via-underlying-braids`,
`thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator` (via the
published coherence item), `def-braided-monoidal-functor`,
`def-lax-strong-and-strict-monoidal-functor`,
`def-braid-group-by-the-artin-presentation`, `thm-von-dyck`,
`thm-the-symmetric-group-has-the-coxeter-presentation`,
`thm-the-braid-group-surjects-onto-the-symmetric-group`,
`def-oriented-link-in-s-three-and-ambient-isotopy`, `def-oriented-reidemeister-moves`,
`thm-oriented-reidemeister-equivalence-theorem`, `def-closure-of-a-geometric-braid`,
`def-markov-conjugation-and-stabilization-moves`, `thm-markovs-closed-braid-equivalence-theorem`,
`def-rigid-object-and-rigid-monoidal-category`, `def-left-dual-and-right-dual-object`,
`def-the-dual-of-a-morphism`, `def-twist-and-ribbon-structure`,
`thm-a-braided-rigid-category-has-a-drinfeld-morphism`,
`def-the-categorical-trace-of-a-morphism-into-the-double-dual`,
`thm-basic-properties-of-the-categorical-trace`, `fs-a-braiding-suffices-to-define-a-trace`,
`def-k-linear-category-and-k-linear-functor`, `def-simple-object`,
`def-tensor-and-multitensor-category`, `def-axiom-of-choice`, `def-countable-choice`.

Checks performed on the actual statements: (i) the published strict Yang–Baxter theorem is
proved for **strict** categories only, so the design's "associators restored by coherence"
route is required and is scaffolded through the strictification and coherence items; (ii) the
published Markov theorem assumes **full AC** and carries `def-axiom-of-choice`, so its
consumers here carry AC; (iii) `def-twist-and-ribbon-structure` uses exactly the EGNO
convention `θ_{X⊗Y}=(θ_X⊗θ_Y)c_{Y,X}c_{X,Y}` and dual compatibility, matching the twist
relation checked in the evaluation-functor item; (iv) the published trace item supplies
cyclicity only in the double-dual form `Tr_L(ac)=Tr_L(c^{∨∨}a)`, which is the form used in
the conjugation-invariance step; (v) `fs-a-braiding-suffices-to-define-a-trace` is homed on an
A page's examples list, not on a `-examples` page, so using it as a dependency does not
violate the B-leaf rule (verified against `tools/depcheck.mjs`'s `b-leaf-content` check).

## Sources

Two complete, independently authored treatments back the pair; both were downloaded in full,
text-extracted and read over the cited ranges by this scaffolder, and both carry
`fetch_verified` stamps written by `tools/source-fetch-check.mjs --stamp`:

1. **EGNO** — P. Etingof, S. Gelaki, D. Nikshych, V. Ostrik, *Tensor Categories*, AMS
   Mathematical Surveys and Monographs 205 (author's final version),
   `https://math.mit.edu/~etingof/egnobookfinal.pdf` (362 pages; 3067397 bytes; sha256_16
   `a40d076197b666d8`). Read: §8.1 (printed pp. 194–197), §8.2 (pp. 197–198), §8.9
   (pp. 213–215), §8.10 (pp. 216–218), with §4.7 (pp. 73–75) and §2.10 (pp. 40–42). Supports the
   operator/functor/coherence items and the Drinfeld–twist trace typing.
2. **Turaev** — V. G. Turaev, *Quantum Invariants of Knots and 3-Manifolds*, de Gruyter
   Studies in Mathematics 18 (1994), scanned copy at
   `https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf` (605 pages; 3080993 bytes;
   sha256_16 `fbea62977467a9d5`). Read: Chapter I §1.5–§1.6 (printed pp. 21–26), §2.3–§2.7
   (pp. 36–44), §3.1–§3.5 (pp. 49–53), §4.1–§4.9 (pp. 53–70). Supports the framed tangle
   category, the generator-and-relation presentation, Theorem I.2.5, the closure/trace
   corollaries and the twist/curl calculus.

Only these two sources are cited by the pair's items; each page entry in the coverage file
lists both with per-result dispositions (53 harvested results in total, 0 unresolved). Every
harvested result has a disposition: `included` (scaffolded item), `inline` (absorbed into a
named item's proof), `already-published` (named published item) or `out-of-scope` (with a
specific reason: quantum-Hopf §8.3, configuration-space Remark 8.2.6, annulus surgery §2.8,
exercises §2.9, coupon relations Lemma 3.4/§4.9, surgery Chapter XII).

## Checks actually run (results)

* `node tools/manifest-deps.mjs research/…-batch-7.pages.json` — 25 item(s), 0 error(s).
* `node tools/content-policy.mjs research/…-batch-7.pages.json --manifest-only` — 25 scoped
  item(s), 0 error(s), 0 warning(s) (no B-leaf target, no forward dependency, no id minted
  twice, no plan-home collision).
* `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` —
  no batch-7 error; the only remaining errors are `empty scaffold inventory` for the other
  26 batches still being written by their own Betas. A direct dependency-level pass over the
  batch reports `items 25, errors 0` and the levels listed above.
* `node tools/validate-plan.mjs research/plan-spec.json` — OK: declared page order acyclic
  and consistent; no item-level cycles, forward references, B-page dependencies or unresolved
  ids among the pages with item lists (this batch's page is among them after this manifest).
* `node tools/coverage-checklist.mjs research/…-batch-7.coverage.json --require-destination` —
  2 page(s), 53 harvested result(s), 0 error(s), 0 warning(s).
* `node tools/extcheck.mjs` — exit 0; every recorded-not-proved statement is a cited remark
  with no proof and every consequence is marked (one pre-existing warning about
  `items/thm-urysohn-lemma.md`, outside this batch's scope).
* `node tools/url-sweep.mjs --coverage research/…-batch-7.coverage.json --out <tmp> --recover
  --fail-on-dead` — exit 0: 2/2 citation URL(s) live, 0 failed, 0 blocking.
* `node tools/source-fetch-check.mjs --coverage research/…-batch-7.coverage.json --stamp` —
  4/4 source entries fetch-verified (EGNO and Turaev on both pages), 4/4 resolved, 0 drops.
* `node tools/source-backing.mjs --coverage research/…-batch-7.coverage.json --liveness <tmp>`
  — 19 authored result(s), every one still backed by an openable source.

No check was reported as a pass before it was run, and no result was edited after the fact.

## Readiness records

All 25 items are recorded `ready` with
`node tools/step1-decisions.mjs record --run frontier-40-geometry-braids-rep-27 --item ID
--decision ready --dependencies <the item's declared deps> --reason <strategy + examined
dependency ids + evidence>`. A `step1-decisions check` pass over the batch reports all 25
closed and none owner-held; no escalation record was written and `--owner` was never used.

## Escalations and residual risk (for the Step-3 author and Step-3 review)

No scope, placement or supplier escalation is required: every prerequisite is already
published or local to this page, and the A page is far below the 100-item cap. Two
proof-route caveats are recorded for authoring, both already flagged in the manifest
strategies:

1. `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation` is the
   heavy item of the page. Its completeness half needs the framed/tangle-level version of the
   ambient-isotopy classification, obtained from the published oriented Reidemeister theorem
   by closing the tangle along its boundary (or by repeating the slab general-position
   argument). The author must include the framed curl move (not unframed R1) and keep AC_ω
   localised to the general-position input.
2. In `lem-scalar-twist-controls-the-two-markov-stabilizations` the sign of the two scalars is
   convention-dependent; the authored proof must print the local kink diagram that fixes
   which stabilization closes to `φ_X` and which to `φ_X^{-1}`, and must not state both
   factors before that diagram is fixed.

No published item used by this page was found to be mathematically defective; no published
consumer debt was identified. Owner/operator reconciliation and the full engine gate follow
construction; a worker exit and these readiness records are not independent mathematical
approval.

## Addendum — final statement fixes and re-records

After the first readiness pass the manifest statements were re-read against the sources and
against the published supplier statements; seven wording repairs were made to the manifest
(no id, deps edge or dependency level of a proof changed except the `def-local-yang-baxter-operators-on-tensor-powers`
dependency substitution recorded above):

* `def-the-framed-oriented-tangle-category`: the slab, its faces and the boundary conditions
  are now stated exactly (bottom/top faces, disjointness from the side faces, fixed order on
  the horizontal coordinate).
* `lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation`: removed a
  stray colour phrase (the framed oriented tangle category is uncoloured; the colour is
  supplied by the evaluation functor).
* `thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`: the crossing
  generator is now written $\mathrm{cross}^{\pm1}$, so the object $X$ is no longer used as a
  generator name.
* `def-absolutely-simple-object`: the semisimple-field example now says *locally finite*, which
  is what makes $\operatorname{End}(X)$ finite-dimensional over $k$.
* `def-exponent-sum-and-writhe-of-a-braid`: the closing sentence no longer claims invariance
  under stabilization (the exponent sum shifts by $\pm1$ there); it states conjugation
  invariance and the shift separately.
* `def-ribbon-evaluation-of-an-x-colored-closed-braid`: the value $t_n(\beta)$ is described as
  an element of $\operatorname{End}(\mathbf 1)$ (a scalar when $\operatorname{End}(\mathbf 1)=k$),
  and the closure identification is pointed at the closure-comparison lemma explicitly.
* `lem-ribbon-trace-equals-the-framed-closure-evaluation` / `thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`:
  the stabilization statements now name the standard inclusion $\iota_n$.

Because the readiness records hash the transitive dependency closure, the edits reopened 23 of
the 25 records; all 23 were re-recorded `ready` against the current manifest, and a fresh
`step1-decisions check` pass reports no open batch-7 item. The unchanged records
(`def-yang-baxter-operator-on-an-object`,
`cex-a-solution-of-yang-baxter-without-invertibility-does-not-represent-the-braid-group`) were
left intact. All checks listed above were re-run after the last manifest edit with unchanged
results: `manifest-deps` 25/0, `content-policy --manifest-only` 25/0/0, batch-7
`item-dependency-levels` 25 items/0 errors, `coverage-checklist --require-destination` 2 pages
53 results 0/0, `source-fetch-check` 4/4 verified, `source-backing` 19/19 backed,
`url-sweep --fail-on-dead` 2/2 live, `extcheck` exit 0, `manifest-integrity` no scope drift,
`validate-plan` OK.

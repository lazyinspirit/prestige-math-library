# Step 3a scope review — Yang–Baxter operators and quantum braid representations

- Run: `frontier-40-geometry-braids-rep-27` (batch 7), role alpha, label
  `step3a-pair-yang-baxter-operators-and-quantum-braid-representations-60dfca1de804013d`.
- A page: `yang-baxter-operators-and-quantum-braid-representations` (order 753,
  category `braid-groups`, 18 planned items: 7 definitions, 3 lemmas, 6 theorems,
  1 corollary, 1 proposition).
- B page: `yang-baxter-operators-and-quantum-braid-representations-examples`
  (order 754, 7 planned items: 4 examples, 3 counterexamples). Companion
  pointers agree in both manifest pages and in `research/plan-spec.json` rows
  753/754.
- Decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-40-geometry-braids-rep-27
  --page yang-baxter-operators-and-quantum-braid-representations --decision sufficient`.
  Receipt: `research/frontier-40-geometry-braids-rep-27-step3a-review-yang-baxter-operators-and-quantum-braid-representations.json`
  (non-owner review, bound to the current pair scope hash).
- Scope only. This review decides whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval; it
  edits no scaffold, item, plan, coverage or owner record. Two item- and
  coverage-level concerns found while reading are reported in §5–§6 for the
  3b author and the later refuter; neither changes the scope judgment.

## 1. Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-40-geometry-braids-rep-27-batch-7.pages.json` | Current A inventory (18 items) and B inventory (7 items): every title, statement, proof strategy, `deps`, `dependency_level`; page `requires`; companion pairing |
| `research/frontier-40-geometry-braids-rep-27-batch-7.coverage.json` | Both pages' source records (EGNO, Turaev), 53 harvested results with per-result dispositions, locators and fetch stamps |
| `research/frontier-40-geometry-braids-rep-27-batch-7.notes.md` | Step-1 construction record: design comparison, the 3 local additions, the dependency repair/substitution, convention and AC discipline, checks run |
| `research/frontier-40-geometry-braids-rep-27-batch-7.cross-batch-dependencies.json` (`[]`) | No in-run edge into or out of this pair |
| `research/plan-braid-groups-track.md` L640–L664 (A design), L666–L678 (B design), L51 (role line), L970 (graph seam) | Controlling prose design: item rows, content routes, source locators, page role and boundary |
| `research/plan-spec.json` rows 753/754 | Page identity/order/kind/category/companion/`requires`; empty `items` arrays, so the manifest controls the inventory |
| `research/frontier-40-geometry-braids-rep-27-alpha-step1-drift.md` BG-13 entry | Drift verdict `no-drift`; the framing/twist caveats recorded for authoring |
| `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`, `…-step1-blockers.json` | No owner direction, deferral or blocker names this pair (the only step-1 blocker is unit 23) |
| `research/frontier-40-geometry-braids-rep-27-step1-<item>.json` (25 files) | All 25 items recorded `ready`, none owner-held |
| Published suppliers in `items/` (see §4) and their `library/` homes | Dependency availability, publication status, and statement-level adequacy of the consumed clauses |

## 2. Inventory against the prose design

All 15 designed A rows (L650–L664) are present, in design order, with the design
kinds and subjects: `def-yang-baxter-operator-on-an-object`,
`def-local-yang-baxter-operators-on-tensor-powers`,
`lem-local-yang-baxter-operators-satisfy-the-artin-relations`,
`thm-a-yang-baxter-operator-gives-braid-group-representations`,
`cor-an-object-of-a-braided-category-carries-canonical-braid-actions`,
`prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group`,
`def-braided-monoidal-functor-induced-intertwiner`,
`thm-braided-functors-intertwine-canonical-braid-actions`,
`def-the-framed-oriented-tangle-category`,
`lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation`,
`thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor`,
`def-ribbon-evaluation-of-an-x-colored-closed-braid`,
`thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links`,
`lem-scalar-twist-controls-the-two-markov-stabilizations`,
`thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant`.
All 7 designed B rows (L672–L678) are present, in design order: the flip /
permutation representation, the diagonal graded-space operator, the
non-involutive one-dimensional character, the non-invertible zero solution,
the writhe-normalization kink cancellation, the braiding-alone trace
counterexample, and the unnormalized-trace / Markov counterexample.

The 3 manifest items beyond the design are local prerequisites of designed
claims, each placed before its consumers and each named in the batch notes:

- `def-absolutely-simple-object` — the stabilisation lemma needs
  `End(X)=k·id_X` to make `θ_X=λ id_X` with `λ∈k^×`; I verified by grep that
  no published item defines "absolutely simple" (`grep -rln "absolutely simple"
  items/` is empty).
- `def-exponent-sum-and-writhe-of-a-braid` — the writhe theorem uses `w(β)`
  and `w(ιβσ_n^{±1})=w(β)±1`; the published exponent-sum usages
  (`cex-exponent-sum-is-not-a-complete-braid-normal-form`,
  `cex-a-linear-representation-need-not-be-faithful`) are local proof devices,
  not a definition of the homomorphism.
- `lem-ribbon-trace-equals-the-framed-closure-evaluation` — the design's
  `def-ribbon-evaluation-…` row instructs "prove the trace formula is the
  closed-ribbon evaluation"; a definition cannot carry that identification, so
  it is scaffolded as a lemma and both consumers depend on it.

Design boundary clauses are preserved, not weakened: the framed / unframed
separation (ordinary Markov stabilization inserts a curl and is excluded from
the framed theorem), the strict-model display with associators restored by
coherence, the scalar-twist hypotheses on the unframed descendant, and the
AC uses localised to `thm-markovs-closed-braid-equivalence-theorem`.
EGNO §8.3 (quasitriangular Hopf form of the quantum Yang–Baxter equation),
EGNO §8.2 Remark 8.2.6 (configuration-space model), Turaev §2.8–§2.9 and the
coupon relations Lemma 3.4/§4.9 are recorded `out-of-scope` with specific
reasons in the coverage file; none is promised by the design table.

Role in the library: the plan's graph seam (L970) says "BG-13 joins only the
published categorical foundations to BG-11". The manifest `requires` chain
matches the design verbatim
(`braided-and-symmetric-monoidal-categories`,
`duality-and-rigidity-in-monoidal-categories`,
`tensor-and-fusion-categories`, `modules-and-module-homomorphisms`,
`oriented-links-braid-closures-and-markov-equivalence`), and the B page requires
only the A page. No other planned page in `plan-spec.json` or in any other
batch of this run depends on an item of this pair (checked over all 27 batch
manifests): the pair is a leaf whose role is exactly the categorical-to-link
bridge the design states.

## 3. Dependency and prerequisite check

All 44 distinct `deps` ids of the 25 items resolve: every one is either a
`status: published` item on disk or a local item of batch 7. No dependency is
missing, forward, cross-page into an unfinished pair, or answered by another
run. The five `requires` pages all exist as published library pages
(`library/category-theory/…` ×3, `library/abstract-algebra/modules-and-module-homomorphisms.md`,
`library/braid-groups/oriented-links-braid-closures-and-markov-equivalence.md`).

I spot-checked the consumed clauses of the load-bearing published suppliers
against their statements, not just their ids:

* `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`
  is indeed stated for **strict** categories only, so the strictification /
  coherence route scaffolded for `def-local-yang-baxter-operators-…` is
  required; the substitution of Mac Lane strictification + coherence for the
  design's braided strictification theorem is sound (the local operators need
  no braiding) and is recorded in the batch notes.
* `thm-a-braided-rigid-category-has-a-drinfeld-morphism` supplies `u_X` and the
  comparison `d_{X,Y}` with its double-braiding defect, which is exactly what
  `def-ribbon-evaluation-…` uses to make `j_X=u_Xθ_X` the pivotal comparison.
* `def-the-categorical-trace-of-a-morphism-into-the-double-dual` types `Tr_L`
  on a morphism `X→X^{∨∨}` and explicitly says a bare endomorphism is not yet
  an input; the ribbon trace `Tr_L(j_{X^{⊗n}}ρ_n(β))` is well typed.
* `def-markov-conjugation-and-stabilization-moves` defines the standard
  inclusion `ι_n` and the stabilizations `ιβσ_n^{±1}` used by
  `lem-scalar-twist-controls-…` and `thm-writhe-normalized-…`.
* `thm-markovs-closed-braid-equivalence-theorem` states `Assume the Axiom of
  Choice` and declares it; the AC-carrying consumers (`thm-writhe-normalized-…`
  and the B example) declare it too, and every other item of the pair is
  choice-free.
* `fs-a-braiding-suffices-to-define-a-trace` (consumed by the B
  counterexample) is published and homed on the A page
  `duality-and-rigidity-in-monoidal-categories`, so the B-leaf rule is
  respected.

**Unmet prerequisites: none found.** Each apparent absence is answered inside
the scaffold (the three helper items above), so there is no prerequisite to
flag that is missing from both the published library and the current scaffold,
and no recommended scaffold addition for the owner on that ground. Two
non-prerequisite caveats are reported in §5–§6.

## 4. Source coverage assessment

`coverage-checklist --require-destination` reports 2 pages, 53 harvested
results, 0 errors, 0 warnings; every harvested result has a disposition
(`included`, `inline`, `already-published`, or `out-of-scope` with a written
reason). Both pages use the same two independently authored full texts, whose
stamps the gate re-checks without network: EGNO (3067397 bytes, sha256_16
`a40d076197b666d8`) and Turaev (3080993 bytes, sha256_16 `fbea62977467a9d5`);
`source-fetch-check --coverage …` returns 4/4 fetch-verified, 4/4 resolved,
0 documented drops. The mathematics of the pair is standard and covered by
these ranges (braiding/YBE, braided coherence, symmetric specialization,
Drinfeld morphism and trace, twist/ribbon axioms, framed tangle category,
generator–relation presentation, Theorem I.2.5, closure = trace).

One non-blocking **records discrepancy** is flagged for the beta/owner (it is
not a scope omission and no harvested result was dropped): several item source
locators lie outside the ranges the coverage file declares as "read in full":

* `def-absolutely-simple-object` cites EGNO §1.5 and §1.8 (printed p. 9 ff.);
  the A-page EGNO locator lists only §8.1, §8.2, §8.9, §8.10, §4.7, §2.10.
* `def-exponent-sum-and-writhe-of-a-braid` cites Turaev Chapter I §1.2 and §1.5
  (printed pp. 12–22); the A-page Turaev locator begins at §1.5.
* `def-the-framed-oriented-tangle-category` cites Turaev §2.2 (printed
  pp. 34–36); the A-page locator begins at §2.3.
* `def-local-yang-baxter-operators-on-tensor-powers` cites Turaev §1.2
  ("strictification", printed p. 20); not in the declared ranges.
* `lem-scalar-twist-controls-the-two-markov-stabilizations` cites Turaev
  Figures 2.3 and 2.6 at printed pp. 34–38; the declared range begins at §2.3.
* (B page) `ex-a-diagonal-yang-baxter-operator-on-graded-vector-spaces` cites
  EGNO §8.4, while the B-page EGNO locator lists §8.1–§8.2 and §8.10 (the B
  coverage's own contents line for this result also names §8.4).

Recommended action: the next writer of these records should extend the declared
ranges (or re-point the citations) so each item locator sits inside the
certified reading, and verify the one passage that may also be a wrong section
number (`def-local-yang-baxter-operators-…`'s "§1.2 strictification", since the
design's strictification route was deliberately re-based on Mac Lane
coherence). This is a coverage-record repair; it changes no statement and no
scope.

## 5. Flagged item-level concern (statement, not scope)

`prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group`
states the converse as: "if `ρ_n` factors through `π_n` for some `n≥2`, then
`R²=1_{X⊗X}`", and its strategy derives `R²=1` from
`1^{⊗(i-1)}⊗R²⊗1^{⊗(n-i-1)}=1` by a final "hence". In an arbitrary monoidal
category that final step is not a formal consequence: `(R²⊗1_Y)=1` need not
imply `R²=1`, precisely because `−⊗Y` need not be injective on morphisms.
My own (not source-verified) reading of this: in the free strict monoidal
category on one object `X` with an invertible `R:X⊗X→X⊗X`, imposing the
Yang–Baxter relation together with `R²⊗1_X=1` and `1_X⊗R²=1` constrains only
`Hom(X^{⊗3},X^{⊗3})` (a context through a 3-ary hole returns to a 2-ary equation
only trivially), so `ρ_3` factors through `S_3` while `R²≠1_{X⊗X}`; I did not
complete a formal verification of that quotient construction, and I found no
published formulation of the converse to compare against. In the pair's actual
models (Vect with `X≠0`, ribbon categories with simple `X`) the step is fine.
Rectification options that preserve the promised scope: state the converse for
`n=2` (or for all `n`), or add the needed nondegeneracy hypothesis
(`f⊗1_Y=1 ⇒ f=1` for the relevant `Y`, e.g. via a faithful tensoring or a
nonzero-object/concrete-category assumption).

This is reported for the 3b author and the later refuter. It does not affect
the scope judgment in §7; if the statement is repaired, the scope hash changes
and the owner re-records, as the tooling intends.

Two further authoring caveats carried from the design, both already stated in
the scaffold and in the batch notes, are not gaps: the blackboard-framing
convention inside `def-the-framed-oriented-tangle-category` must be fixed
explicitly (no published item defines a framing of a link or band; the pair's
own definition is the introduction point), and
`lem-scalar-twist-controls-…` must print the local curl diagram that fixes
which stabilization closes to `φ_X` with `F_X(φ_X)=θ_X` before stating the two
scalars.

## 6. Checks actually run

* `node tools/manifest-deps.mjs research/…-batch-7.pages.json` — 25 items,
  0 errors.
* `node tools/content-policy.mjs research/…-batch-7.pages.json --manifest-only`
  — 25 scoped items, 0 errors, 0 warnings (no B-leaf target, no forward or
  cross-batch dependency).
* `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  — 892 items over 54 pages, exit 0 (batch 7 clean).
* `node tools/coverage-checklist.mjs research/…-batch-7.coverage.json --require-destination`
  — 2 pages, 53 harvested results, 0 errors, 0 warnings.
* `node tools/source-fetch-check.mjs --coverage research/…-batch-7.coverage.json`
  — 4/4 source(s) fetch-verified, 4/4 resolved, 0 drops.
* Dependency resolution and page-home scan of all 44 deps against `items/`
  (status `published`) and all 27 batch manifests — 0 dangling, 0 foreign-batch
  consumers.
* `node tools/depcheck.mjs` repo-wide — no hard error mentions this pair; the
  command exits non-zero on pre-existing repo-wide warnings unrelated to this
  batch (335 warnings, mostly `multi-home` and `published-unaudited`), which I
  did not treat as evidence about this pair.
* Grep checks: no published definition of "absolutely simple"; the consumed
  false statement is published and A-page-homed; `def-closure-of-a-geometric-braid`
  carries the fixed framing used by the closure conventions.

## 7. Decision

**Sufficient.** The planned definitions, results and examples cover the
intended subject of BG-13 (categorical Yang–Baxter operators and the braid
group representations and ribbon link evaluations they induce), the A/B split
matches the design row-for-row, the three local additions are genuine
prerequisites of designed claims, every dependency resolves to published or
local scaffold content, and the two sources are verified full texts with all
53 harvested results dispositioned. No pair merger is indicated and no
enrichment is required for scope. The §5 statement concern and the §4 coverage
record discrepancy are left to the owner's ordinary 3b/refuter and records
repair paths; they do not change the scope decision.

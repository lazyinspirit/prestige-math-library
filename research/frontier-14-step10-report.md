# frontier-14 — Step 10 fatal-error report

**This is the owner pause.** Nothing in this run is `status: published`. All 340
items and 18 pages are `status: draft`, `origin: session`. Flipping status is the
publish action and is yours alone.

**Read the readiness section before anything else.** Unlike `frontier-13`, this
level is **not** in a publishable state today. Three specific things are open:
one is mathematics (two proofs), one is a receipt with unread mathematics inside
it (16 unadjudicated judge rejections), and one is mechanical.

## What was built

| | |
|---|---|
| pairs | **9** A/B pairs across complex analysis, topology, linear algebra, number theory, category theory |
| items | **340** — 255 on A pages, 85 on B companions (338 authored at step 5, 2 added at step 9) |
| pages | 18, all `draft` |
| judge calls | **896** across both lanes, **0 nulls** |
| items judged | **340** — every item in the level, both lanes |

| batch | A page | order | items (A + B) |
|---|---|---|---|
| 1 | `complex-power-series-and-analytic-functions` | 305 | 29 + 11 |
| 1 | `contour-integration` | 307 | 21 + 12 |
| 2 | `ascoli-arzela` | 285 | 19 + 5 |
| 3 | `complete-metrizability-and-baire` | 277 | 40 + 6 |
| 3 | `covering-spaces-and-lifting` | 293 | 32 + 8 |
| 4 | `triangularisation-and-jordan-canonical-form` | 90 | 36 + 17 |
| 5 | `quadratic-residues-and-the-legendre-symbol` | 57.003 | 16 + 9 |
| 6 | `reflective-subcategories-and-the-adjoint-functor-theorems` | 365.003 | 44 + 9 |
| 7 | `stone-weierstrass-general` | 287 | 18 + 8 |

Step 0 planned six batches. Batch 7 exists because group Alpha **a** found at
step 3 that batch 2 had re-minted local complex scalars instead of citing the
library's published ℂ; the orchestrator approved rebuilding the pair against
`field-extensions-and-the-complex-numbers` (D5, commit `137c5f33`), the pair was
held out of the step-4 splice, rebuilt, re-checked by group Alpha **c**, and
spliced separately. The hold record is `research/frontier-14-splice-BLOCKER.md`
and is resolved.

---

## Publish readiness — three open items

### 1. Two fatal defects are confirmed and deliberately **not repaired**

Both need a proof **rewrite**, not a minimal correction, and step 8 is fatal-only
— improvising a replacement proof under a frozen verdict is authoring, which the
stage forbids. The lead Alpha declared them as blockers rather than half-fixing
them. I re-read both on disk and confirm they stand.

- **`thm-cech-complete-spaces-are-baire`** — step 2.1 asks for a nonempty
  *ambient* open set sitting inside dense open subsets of `X`, which are only
  relatively open. Countermodel: `K = [0,1]`, `X` its irrational subspace, every
  dense open set equal to `X`; then `X` is a proper dense `G_δ` with empty ambient
  interior. The theorem is **true**; the nested-open-set construction has to be
  redone inside the compactification, using ambient opens that *meet* `X`.
- **`thm-simple-continued-fractions-parametrise-the-irrationals`** — step 3.1
  never proves the tail identity `x = (p_n x_{n+1} + p_{n-1})/(q_n x_{n+1} + q_{n-1})`,
  which is what puts the original irrational in every prefix interval; step 4.1
  asserts both continuity directions in one sentence with no cylinder/preimage
  comparison. These are the substantive inverse and homeomorphism arguments, and
  on disk both steps are still one-line gestures.

Both are on `complete-metrizability-and-baire`. Neither is a false statement;
both are unproved statements.

### 2. The step-7 judge receipt was never closed

Step 8 repaired 23 items and named exactly those 23 as the rejudge set. **The
rejudge was never run as a stage.** The autopilot re-entered `7-judge` after step
8 and the sweep produced 220 more verdict rows — but overwhelmingly on the wrong
items: pair-mates whose *pair context* hash moved when the 23 were repaired,
rather than the 23 themselves.

I recomputed each repaired item's hash under the judges' own normalization and
matched it against every ledger row, rather than trusting the timestamps:

| post-repair lane coverage of the 23 | count |
|---|---|
| **neither lane** has judged the current text | **19** |
| exactly one lane has | 3 (`def-cyclic-subspace-vector-and-vector-annihilator`, `prop-meagre-subsets-form-a-sigma-ideal`, `rem-why-completeness-alone-is-not-enough-for-an-adjoint` — each a single pass) |
| both lanes have | 1 (`thm-circle-integrals-of-integer-monomials`) |

So the concurrent sweep happened to re-read four of the repaired items and
completed a pair for exactly one. `level-coverage` flags the other 22.

`level-coverage.mjs --verify-current-context` therefore fails, correctly, on:

| error class | count | what it is |
|---|---|---|
| `judge-coverage-missing` | 22 | the step-8 repairs, unjudged since repair |
| `judge-adjudication-missing` | 16 | *current* rejections with no exact-hash Alpha outcome, over 13 items, **all on batch 4** (`triangularisation-and-jordan-canonical-form`) — checked against the manifest, not assumed |
| `judge-verdict-confirmed-fatal` | 2 | the two blockers above |
| `audit-receipt-*` | 62 | `frontier-14-audit-coverage.json` is the empty template step 8 generated; reviewer, attestation and 57 reconciliation reasons are unfilled |
| `spine-receipt-invalid` | 1 | the spine receipt lapsed when step-8/step-9 content changed |
| | **103** | total, and the gate exits 1 |

A visible consequence: **only 2 of the run's 340 items carry a
`verification.judge` stamp on disk** — the two the lead Alpha built at step 9.
`apply-judge-stamps` run today would stamp **74** and skip 266 (47
`lane-rejected`, 219 `no-current-verdict`). The renderer's "K also independently
AI-judged" caption would read 2 of 340.

### 3. `proof-contract --strict` is red — 26 errors, and the cause is instructive

Step 8 hit exactly this and fixed it by running `regen-contract-entries.mjs`
against the **merged** contract `research/frontier-14-proof-contracts.json`. Step
9 then re-ran `merge-proof-contracts.mjs` to fold in batch 7, which rebuilt the
merged file from the seven **batch** contracts — which were never regenerated.
The stale quotes came straight back.

I verified this rather than inferring it: the merged file's `F1` quote for
`thm-cech-complete-spaces-are-baire` is byte-identical to batch 3's, and does not
occur in the current `def-cech-complete-space` (which now carries "under the
ultrafilter lemma and Dependent Choice" from the F10 repair).

- **22 `citation-quote-mismatch`** — consumers quoting the pre-repair text of
  nine step-8-repaired items.
- **2 `citation-use-unmapped` + 2 `step-entry-input-omitted`** — the F15 and F2
  repairs added a citation use (`F3` at step 1.1 of
  `thm-orbit-map-of-a-covering-space-action-is-a-covering`; `F4` at step 3.1 of
  `thm-deck-group-of-a-universal-cover-is-the-fundamental-group`) without the
  contract's input map following.

`citation-fidelity` independently reports 7 `QUOTE NOT FOUND`, same cause.
**Remedy: regenerate the affected entries in the seven `-batch-<i>.proof-contracts.json`
files, then re-merge.** No item text moves, so `step8-guard` is unaffected.

---

## Fatal defects, by defect type

Evidence: the three group-Alpha step-6b reports, the lead Alpha's 6c report,
`research/frontier-14-judge-adjudications.jsonl` (40 `confirmed_fatal` rows over
27 distinct items), and the step-8 and step-9 Alpha reports.

**Roughly 130 confirmed fatal defects were found and repaired across steps 6, 6c,
8 and 9; two remain open.** Step 6 accounts for ~102 of them, which is the shape
the process wants — found where a repair is free, before the text freezes.

### Incorrect or inflated dependency citation — the dominant class, again

The same shape as `frontier-13`: the `[F#]`/`[L#]` restatement claims more (or
occasionally less) than the cited item's Statement, and a numbered step leans on
the difference.

**Step 6, batch 1 (complex analysis).** All repaired by restating the cited
clause exactly and adding the inline derivation the step actually needs.

| item | defect |
|---|---|
| `ex-lacunary-factorial-exponent-power-series` | `[L3]` claimed strict increase of `n!` from a definition whose four proved clauses do not include monotonicity |
| `thm-riemann-stieltjes-and-parametric-contour-integrals-agree` | `[L1]` dropped the cited theorem's Riemann-integrability hypothesis |
| `cor-contour-integral-of-a-constant-is-an-endpoint-increment` | "a continuous primitive" — vacuous, since every primitive is holomorphic; the theorem needs a continuous **integrand** |
| `thm-path-independence-and-complex-primitive-criterion` | same defect |
| `thm-circle-integrals-of-integer-monomials` | `[L4]` attributed `exp(2πik)=1` for every integer `k` to a corollary stating the Cartesian form and `e^{iπ}+1=0` |
| `ex-exponential-contour-integral-by-riemann-sum-and-parametrization` | same |
| `ex-polynomial-contour-integral-along-a-line-segment` | `[L2]` dropped the continuity hypothesis entirely |
| `cor-complex-power-series-sums-have-derivatives-of-all-orders` | `[L2]` upgraded a one-derivative theorem to "every successive formal derivative" |
| `cor-complex-power-series-coefficient-formula` | `[L2]` attributed `0^m = 0` to a definition giving only `z^0=1`, `z^{n+1}=z^n z` |
| `thm-complex-trigonometric-and-hyperbolic-power-series` | `[L1]` claimed the exponential definition states **absolute** convergence; it states the series and defers convergence |
| `ex-real-rational-function-with-finite-taylor-radius` | `[L2]` dropped the differentiability hypothesis of `thm-algebra-of-derivatives`, leaving the induction without a base |

**Step 6, batch 2.** `cex-boundedness-does-not-replace-pointwise-relative-compactness`
— `[L3]` attributed "the discrete distance is a metric" to `def-metric-space`,
which defines what a metric is and proves nothing about that construction.
Restated as (M1)–(M3) with step 1.1 verifying each.

**Step 6, batch 3 — two sub-classes.**

- *Truncated citation* (a fact verbatim-quoting a definition's opening and
  stopping before its operative clause): reader-3 flagged ~15 by hand; group a
  built `tools/truncated-citation.mjs` rather than shipping the sample as the
  class, found **42 candidates over 183 items** including two no reader raised
  (one in batch 1: `lem-complex-power-series-reexpansion-double-series`), and
  **repaired 41**. Findings R3-1, R3-2, R3-3, R3-7, R3-8, R3-9, R3-14, R3-18,
  R3-24, R3-25, R3-26, R3-32, R3-33, R3-37, R3-39, R3-40. The 16 residual
  candidates in the 20–40% band were adjudicated `false_positive` with a stated
  calibration.
- *Missing bridge* — a step using a published result neither cited nor derived.
  All five existed on disk and were added as facts and deps:
  `thm-frolik-internal-characterisation-of-cech-completeness` (R3-20),
  `thm-metrizable-cech-complete-spaces-are-completely-metrizable` (R3-22),
  `cor-locally-compact-hausdorff-spaces-are-cech-complete` (R3-24),
  `thm-cech-complete-spaces-are-baire` (R3-25),
  `thm-covering-space-lifting-criterion` (R3-38).

**Step 6, batch 3 (refuters).** `ex-baire-sequence-space-and-the-irrationals`
(`[F1]` gave only that *some* homeomorphism exists while the steps use the
continued-fraction parametrisation); `fs-every-metrizable-space-is-cech-complete`
(`[F1]` quoted the verbatim Statement of an `fs-` item, i.e. **the claim being
refuted**, and step 1.1 used its negation — swept run-wide, sole instance);
`ex-real-line-mod-integer-translations-is-a-covering` (`[F4]` was `def-integers`,
the construction from pairs of naturals, supplying no copy of ℤ inside ℝ);
`ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings` (no cited
fact gave the division algorithm).

**Step 6, batch 4.** `prop-quotient-vector-space-operations-and-projection`,
`prop-induced-quotient-operator-is-well-defined`,
`thm-quotient-vector-space-universal-property` — all three inflated the same
coset-equality biconditional out of a definition that defines only `v+W` and the
two operations. Repaired **at source**: the criterion is now proved in the first
item and stated in its Statement, and the two consumers restate it exactly.
`thm-power-ranks-determine-nilpotent-jordan-blocks` — `[L2]` called the
kernel/rank sequences "eventually stabilising" where the lemma gives stabilisation
*conditional* on an equality; the step now establishes the hypothesis first.
`prop-generalised-eigenspaces-and-algebraic-multiplicity` — two rows: a clause
attributed to a corollary that does not state it (re-cited to
`thm-primary-decomposition-for-an-endomorphism`), and a dropped nonzero-space
hypothesis that made the fact false at `m=0`.

**Step 6, batch 5.** `cex-squaring-on-units-is-not-a-homomorphism-nonabelian-warning`
— `[L4]` said `(gh)^n = g^n h^n` "**requires**" commutation. The cited lemma
states the *sufficiency*. Necessity is an invented converse and is false at `n=0`
and `n=1`. Restated with the source's own failure note.

**Step 6, batch 6 — fourteen items, one shape.** In each the fact line appends a
true conclusion the cited Statement does not contain, and a step uses it.
`thm-the-counit-of-a-reflection-is-an-isomorphism`,
`thm-an-object-lies-in-a-reflective-subcategory-…-invertible`,
`thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections`
(`def-preorder` cited for the partial-order axioms, though it says a preorder
need not be antisymmetric),
`thm-a-separating-set-is-equivalently-a-jointly-faithful-family-of-representables`,
`thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-…`,
`thm-general-adjoint-functor-theorem-objectwise-form`,
`thm-a-complete-locally-small-…-all-subobject-intersections-…`,
`cor-a-complete-locally-small-category-with-a-small-coseparating-set-and-saft-intersections-is-cocomplete`,
`cor-a-continuous-functor-to-set-…-is-representable`,
`thm-freyd-representability-theorem`,
`thm-the-solution-set-for-the-underlying-set-functor-on-groups`,
`thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups`,
`fs-a-continuous-functor-on-a-complete-category-has-a-left-adjoint`,
`ex-torsion-free-reflection-computed`. Each repaired by quoting the source and
citing the published item that actually carries the appended clause.

**Step 6, batch 7.**
`cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense` — `[L3]`
claimed a metric definition on ℂ says something about uniform convergence in
`C(X,ℂ)`; the fact was **deleted** rather than propped up with a different
citation, and the step now closes on `[L1]`, which already concludes "uniformly
dense" verbatim. `ex-two-point-duplication-algebra-and-its-quotient` — `[L3]`
turned the ambient-cover form of Heine–Borel into subspace compactness; the
published `lem-compactness-of-a-subspace-is-ambient` supplies the equivalence.
`ex-trigonometric-polynomials-are-dense-on-the-circle` — the mirror defect, a
fact line **narrower** than the step citing it (`[L5]` omitted the triangle
inequality the step invokes); found by the group Alpha, not by a reader.

**Step 8 (post-freeze, judge-found).**
`thm-circle-integrals-of-integer-monomials` — `[L3]` printed "the complex
exponential … **is additive under sums**", which is false; the cited theorem
states `exp(z+w) = exp z exp w`. `thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space`
— `[F1]` says "finite tree" where the source says explicitly that `T` is infinite.
`ex-baire-sequence-space-and-the-irrationals` — `[F2]` identifies a code cylinder
with a real interval; the source refuses that identification in terms.

**Step 9 (the lead Alpha's own two new items, caught by Terra).**
`cor-differentiable-approximants-with-a-vanishing-derivative-at-a-point` —
`[L2]` shortened `lem-derivative-of-a-power` to bare differentiability while step
5.1 used the derivative **value**; restated with clause 4's formula.
`cor-vanishing-moments-force-a-continuous-function-to-vanish` — step 3.1 asserted
`(f−p)f` integrable "as a product of the integrable `f−p` and `f`" without ever
establishing that `f−p` is integrable; derived in the step. Both rejudged by both
lanes and passing.

### False or overstrong statement, title or definition

The class the judges structurally cannot see: they read Statements, and a false
title is invisible to them.

| item | defect | disposition |
|---|---|---|
| `thm-special-adjoint-functor-theorem-objectwise-form` | **the false Statement of this run.** Branch 2 did not require `U` to preserve small limits, yet step 2.1 concluded the comma category is complete via a fact creating only limits `U` preserves. Counterexample recomputed and stands: `A=C=Set`, `U` constant at `2`, `C=1`; `(1↓U)` is two disjoint copies of `Set` with no initial object | **narrowed, not patched** — preservation of all small limits is now a hypothesis of both branches, the Statement says branch 2 is not a weakening, and the counterexample is recorded |
| `rem-choice-ledger-for-the-adjoint-functor-theorems` | repeated the same false theorem-level claim in a Remark | rewritten |
| `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object` | see *invalid inference* — a landmark three scoped items rest on | proof replaced with Freyd's argument |
| `def-cyclic-subspace-vector-and-vector-annihilator` | (6b) asserted a unique monic generator with no finite-dimensionality — on `V=⊕F e_n` with the shift, `Ann_T(v)=(0)` and no generator exists; then (step 8) the repaired text asserted finite dimensionality is *required*, which is also false (`T=0` gives generator `x` on an infinite-dimensional space) | both repaired; the necessity claim now says what is true and carries both witnesses |
| `prop-vector-annihilator-is-well-defined` | title scoped uniqueness wrongly — `T=J_2(0)` has three distinct annihilators dividing `μ_T` | title corrected |
| `cor-nilpotent-similarity-classified-by-power-ranks` | Statement compared rank sequences across fields while the Given silently added "over the same field"; zero endomorphisms over `F₂` and `F₃` have equal rank data and no isomorphism at all | common field and `F`-linear conjugation stated; cross-field counterexample recorded |
| `def-stolz-approach-region-at-one` | the definition never required convergence to 1 — `z_n = 0` sits in `S_1` at every index while converging to 0 | convergence clause added; propagated to the Abel-limit items |
| `lem-finite-refining-small-diameter-covers-of-compact-metric-spaces` | **Statement was unsatisfiable** — a *finite* levelled tree in which every node has a finite nonempty child set is infinite by induction. `thm-cantor-space-surjects-…` was built on it | repaired to a finitely branching tree with every level finite and nonempty, the tree explicitly infinite; the cover construction written out |
| `lem-simple-continued-fraction-convergents-and-cylinders` | `p_n,q_n` never defined, recurrence with no initial values, and a code cylinder in `ℕ^ℕ` called an interval of reals; then (step 8) `a_n ≥ 1` did not say `a_n ∈ ℤ`, while the Statement asserted the endpoints are ratios of integers (`a_1=√2` refutes it) | initial values stated, codes and reals separated by name, diameter computed exactly; integrality added at step 8 |
| `thm-universal-cover-uniqueness-and-dominating-property` | promised a unique **covering map** to every connected covering; the lifting criterion gives a unique continuous **lift** and no step supplied surjectivity or even covering | **narrowed** to a unique based continuous map over the base, saying plainly the classical form is not established here; sole consumer updated; retagged `ai-altered` |
| `thm-sheets-equal-fundamental-group-index` | title and Statement said "left cosets" while step 3.1 produces `H[α]` and the notation `H\π₁` already meant right | all three now say right cosets |
| `thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta` | step 2.1 required small diameter only in the complete metric, so nothing forced ambient convergence | both conditions imposed, with why neither may be dropped |
| `thm-fundamental-theorem-for-complex-line-integrals` | title and page summary said "a continuous primitive", asserting the theorem for every function admitting a primitive | title and `library/complex-analysis/contour-integration.md` reworded |
| `cor-compact-subsets-of-cx-for-a-proper-metric-target` | title omitted the nonempty compact metric domain, Choice, **and** the topology; translated tents on ℝ are closed and not compact | all three now in the title |
| `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` | same counterexample refutes the unqualified title | domain and Choice added |
| `cor-ascoli-arzela-for-compact-metric-domains` | "compact metric domains" includes the empty one, where the uniform metric is undefined | "nonempty" added |
| `thm-saft-yields-the-stone-cech-adjunction` | title asserted the reflection unconditionally; the Statement is conditional on a supplied family | title names the family |
| `thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces` | Statement claimed reflectivity from UL + DC alone while step 1.1 used the conditional adjunction over a proper class of spaces | family explicit in Statement, Given and title |
| `cor-gaft-recovers-the-free-group-and-abelianisation-adjoints` | (6b) the Given imported "the standard complete locally small categories and continuous functors" with nothing establishing them; (refuter) the repair then claimed the abelian branch needs no completeness while citing a theorem that requires it; (step 8) the title still said GAFT recovers **both** while the Statement says the second branch does not use GAFT | built out with three published facts, re-cited to the comma-initial criterion, and the title now names both routes |
| `cor-a-continuous-functor-to-set-…-is-representable` | title promised representability from the SAFT hypotheses alone | title names the supplied universal arrows |
| `lem-real-part-of-a-self-adjoint-complex-function-algebra` | title dropped "point-separating"; on a two-point discrete space the complex constants are a self-adjoint algebra whose real part does not separate | title corrected |
| `thm-lattice-stone-weierstrass` | asserted density "for the topology of uniform convergence" with `X = ∅` admitted, where the library declines to define that topology | Statement now leads with the pointwise condition, meaningful for every `X`, and names the nonempty restriction |
| `ex-distance-function-lattice-is-dense-on-a-compact-metric-space` | inherits the above; and (step 8) the title claimed density for the lattice generated by the distance functions alone, which on a one-point space is `{0}` | both repaired; title now names the constants, matching its own Statement |
| `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients` | claimed an **isometric** isomorphism where the uniform metric is undefined (`X=∅`); and the A-page summary dropped "unital", which `A={0}` refutes | isometry scoped to nonempty `X`, surjectivity rewritten pointwise; `library/topology/stone-weierstrass-general.md` corrected |
| `def-self-adjoint-complex-function-algebra` | equipped `C(X,ℂ)` with a metric on the **plane** — ill-typed, and the only place the batch gave `C(X,ℂ)` any metric structure | definition rewritten; same paragraph added to `def-unital-separating-real-function-algebra-general` |
| `def-well-powered-and-co-well-powered-category`, `def-subobject-and-quotient-object`, `thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections`, `cex-a-category-that-is-not-well-powered` | under the library's own published class convention a subobject is a proper class, so "the collection of subobjects is a set" is not a well-formed condition and `def-partial-order` ("Let `P` be a set") cannot apply | **representative-set formulation adopted** at 6c — what the sources use and what every downstream consumer already spends; six items, mathematics unchanged |
| `cex-a-complete-category-whose-coseparating-sets-are-never-small` | objects were ordinal-indexed families, which under ZFC are not sets, so strictly no category had been defined | set-encoded via the support condition the item already had; steps rewritten against the codes |
| `def-simple-continued-fraction-coding` | the bracket `[a_0;…,a_n]` is never defined, yet is load-bearing downstream | defined |
| `lem-maps-of-compactifications-preserve-remainders` | Statement writes `f|_X`, `K∖X`, `L∖X` without naming either embedding | embeddings named |
| `prop-topological-sums-of-cech-complete-spaces` | the one-point compactification of an already-compact sum is not a compactification | repaired |
| `ex-real-line-mod-integer-translations-is-a-covering` | closed intervals of length `< 1` are not evenly covered | repaired |
| `thm-nilpotent-endomorphism-characterisations` | asserted all four readings hold "in their empty forms" on the zero space; condition 2 (`μ_N = x^r`, `1 ≤ r ≤ n`) has no such `r` at `n = 0` | Statement now says which conditions hold, that condition 2 fails, and why the equivalence is for `n > 0` |

### Missing hypothesis or choice scope

**The systematic class of this run, and both lanes plus the refuters converged on
it independently across two pages.** Eleven of step 8's 25 fatal items are one
defect: a Statement declaring one choice principle while a Fact block restates a
dependency whose own Statement carries a stronger one.

- Step 8 — `def-cech-complete-space` (every-compactification equivalence without
  UL+DC), `thm-frolik-internal-characterisation-of-cech-completeness` (UL vs
  UL+DC), `thm-metrizable-cech-complete-spaces-are-completely-metrizable` (UL vs
  UL+DC+CC), `thm-polish-spaces-as-g-delta-subspaces-of-the-hilbert-cube` (CC vs
  DC and full AC), `fs-every-metrizable-space-is-cech-complete` (UL+AC),
  `cor-locally-compact-hausdorff-spaces-are-cech-complete` (unconditional while
  `[F4]` opens "Assume the Axiom of Dependent Choice"),
  `prop-meagre-subsets-form-a-sigma-ideal` (countable union of meagre sets uses
  Countable Choice, none assumed),
  `rem-why-completeness-alone-is-not-enough-for-an-adjoint` (two AC-dependent
  conclusions without AC). All repaired by stating the principle the proof spends.
- Step 8 — `def-covering-space-action` required only `gU ∩ U = ∅`, citing
  `def-group-action`, which is an action **on a set**, so `gU` need not even be
  open and the orbit-map theorem loses everything it needs. Now "acts by
  homeomorphisms", which is also what Hatcher §1.3 carries.
- Step 6, batch 3 — **20 items** had the choice hypothesis missing from title or
  Statement against a settled library convention (~40 published items carry it in
  the title). 23 titles and 12 Statements repaired: R3-1, R3-2, R3-4, R3-5,
  R3-10, R3-11, R3-12, R3-13, R3-14, R3-17, R3-18, R3-19, R3-21, R3-22, R3-23,
  R3-26, R3-27, R3-28, R3-29, R3-31. Two worth naming: R3-10 assumed `AC_ω` while
  its Alexandrov fact assumes **DC**, which `def-dependent-choice` expressly
  records `AC_ω` does not cover; R3-27 said countable choice suffices while its
  fact is the **full-AC** Tychonoff theorem.
- Step 6, batch 2 —
  `thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain`
  really did make an unstated use of Choice (one admissible pair per `f` in an
  arbitrary compact family). **Rewritten choice-free** by forming the set of all
  admissible triples and letting compactness make the only finite selection, so
  the Statement stays choice-free.
- Step 6, batch 4 — `prop-generalised-eigenspaces-and-algebraic-multiplicity`, a
  dropped nonzero-space hypothesis, false at `m = 0`.

Two reader findings alleging unstated Choice were **downgraded and refuted with
reasons**: in `thm-fundamental-theorem-for-complex-line-integrals` the admissible
radii form a downward-closed set so `r_p := ½ sup S_p` is definable, and in
`thm-path-independence-and-complex-primitive-criterion` the proof was reordered
so `F(z)` is defined as a unique common value rather than selected.

### Invalid inference

| item | defect | disposition |
|---|---|---|
| `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object` | step 3.1 concluded `p_S r = p_S` from "both are cones", but the limit property gives a unique mediator *per cone*, and `r` is a cone endomorphism only after that equality — circular. Witness: in `Set`, `1_X` and any non-identity `r: X→X` are both cone legs from apex `X`. This is the backbone of objectwise GAFT and Freyd representability, so `r = 1_L`, invertibility of the equalizer and uniqueness of maps out of `L` were all unproved | proof replaced with Freyd's joint-equalizer argument, which the item's own sources (Leinster A.1, Riehl 4.7.5) use; the "no class-indexed choice" claim survives |
| `thm-deck-group-of-a-universal-cover-is-the-fundamental-group` | title, Statement and step 3.1 asserted the isomorphism needs the inverse-path convention. With the library's own traversal-order product — which `[F2]` declares makes monodromy a **right** action — the direct assignment is already a homomorphism and the reversal produces an **anti**homomorphism | the direct assignment named as the isomorphism; step 3.1 replaced by the equivariance argument |
| `thm-orbit-map-of-a-covering-space-action-is-a-covering` | openness of the orbit image unlicensed, downstream of the `def-covering-space-action` defect, plus an empty-space boundary failure. Witness: `E = ℝ_usual ⊔ ℝ_discrete` with `C_2` swapping copies satisfies the old definition, and no sheet maps homeomorphically onto an interval | repaired once its own fatal row licensed it |
| `ex-contour-integral-of-conjugation-depends-on-the-path` | **a concrete arithmetic falsehood in a numbered step** — both segment values stated as `−2i`; the true values are `3/2 − 2i` and `−3/2 − 2i`. They sum to the correct `−4i`, which is why the conclusion survived | both written out and the sum shown |
| `thm-cech-complete-spaces-are-baire` | step 2.1's construction is impossible as written | **NOT REPAIRED — blocker** |
| `thm-simple-continued-fractions-parametrise-the-irrationals` | the tail identity and both continuity directions are never proved | **NOT REPAIRED — blocker** |

### Invalid witness and false boundary dispositions

`frontier-13`'s worst finding — a false `boundaries` row concealing a fatal
defect — recurred, and was caught three times.

- **Group c: three `empty` rows marked `checked`, and each hid one of that
  batch's fatal findings.** `thm-lattice-stone-weierstrass`'s row credited a step
  that runs only after nonemptiness is assumed; `ex-distance-function-lattice-…`
  called a conclusion "immediate" that had no meaning on the empty domain;
  `thm-closed-real-function-algebras-…` recorded the bijection and passed over the
  isometry. `boundary-audit` reported no reuse and no contradiction for all three —
  the rows were individually written and individually wrong.
- **Group a: 27 boundary rows rewritten.** Refuters found nine false `one` rows by
  hand; rather than ship the sample as the class, group a wrote a focused detector
  and found **18**, then repaired 19 plus 8 more found earlier.
- **Group b: false witnesses in contract rows** for
  `ex-quotient-of-f-three-by-a-line-and-canonical-projection` (a `W` and
  representatives the item does not use),
  `ex-an-invariant-flag-producing-upper-triangular-form` (parameters absent from
  the item), `fs-jordan-canonical-form-is-a-unique-matrix` (both blocks said to
  have eigenvalue 0 where the item uses `J_2(0) ⊕ J_1(1)`),
  `thm-simultaneous-triangularisation-of-commuting-operators` (empty and `dim V = 1`
  attributed to step 1.1, which covers only `dim V = 0`),
  `ex-power-residues-modulo-seventeen` (`iff` rows `not_applicable` on an "exactly
  when" criterion spent in both directions). All rewritten against the real text.

### Two citation corruptions found only by reading the run as a whole

Batch 3 cites by pasting the cited item's entire Statement — 143 fact lines over
400 characters, against 3 in batch 6 and 0 elsewhere. That is the maximally
faithful end of the rule, but a paste is a transcription. Diffing every fact line
over 200 characters against its source (395 lines) found two where a **`>` was
stripped by the paste pipeline**, taking a mathematical relation with it:

- `thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta` `[F4]` read
  "Then `$r 0$`" for "Then `$r > 0$`";
- `thm-hilbert-cube-universal-for-separable-metrizable-spaces` `[F4]` read
  "so `$1 + d(x,y) 0$` and is invertible".

Adjudicated `confirmed_nonfatal` (a reader reconstructs `> 0` instantly) and
repaired at step 6 anyway, because step 8 would not permit it. **No gate can see
this**: `citation-fidelity` compares the contract's recorded quote against the
*source*, which is intact; the damage is in the item's own fact line, which the
contract does not store. No reader, refuter or group Alpha caught either. A
run-wide re-scan for the shape now returns 0.

---

## Fatal defects, by location

| location | items |
|---|---|
| **Title only** (Statement correct) | `thm-fundamental-theorem-for-complex-line-integrals`, `cor-compact-subsets-of-cx-for-a-proper-metric-target`, `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets`, `cor-ascoli-arzela-for-compact-metric-domains`, `prop-vector-annihilator-is-well-defined`, `thm-saft-yields-the-stone-cech-adjunction`, `cor-a-continuous-functor-to-set-…-is-representable`, `lem-real-part-of-a-self-adjoint-complex-function-algebra`, `cor-gaft-recovers-the-free-group-and-abelianisation-adjoints`, `ex-distance-function-lattice-is-dense-on-a-compact-metric-space`, `lem-gauss-half-system-permutation` (nonfatal, repaired at step 6), plus 23 titles in the batch-3 choice class |
| **Statement / Definition** | `thm-special-adjoint-functor-theorem-objectwise-form`, `lem-finite-refining-small-diameter-covers-of-compact-metric-spaces`, `lem-simple-continued-fraction-convergents-and-cylinders`, `thm-universal-cover-uniqueness-and-dominating-property`, `thm-sheets-equal-fundamental-group-index`, `thm-nilpotent-endomorphism-characterisations`, `cor-nilpotent-similarity-classified-by-power-ranks`, `def-cyclic-subspace-vector-and-vector-annihilator`, `def-stolz-approach-region-at-one`, `def-covering-space-action`, `def-cech-complete-space`, `def-simple-continued-fraction-coding`, `def-self-adjoint-complex-function-algebra`, `def-well-powered-and-co-well-powered-category`, `def-subobject-and-quotient-object`, `thm-lattice-stone-weierstrass`, `thm-closed-real-function-algebras-are-function-spaces-on-their-quotients`, `lem-maps-of-compactifications-preserve-remainders`, `cex-a-category-that-is-not-well-powered`, `cex-a-complete-category-whose-coseparating-sets-are-never-small`, `thm-compact-hausdorff-spaces-are-reflective-in-topological-spaces`, plus 12 Statements in the batch-3 choice class |
| **Proof / verification steps** | `thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object`, `thm-deck-group-of-a-universal-cover-is-the-fundamental-group`, `thm-orbit-map-of-a-covering-space-action-is-a-covering`, `ex-contour-integral-of-conjugation-depends-on-the-path`, `thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta`, `thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain`, `thm-power-ranks-determine-nilpotent-jordan-blocks`, `ex-real-line-mod-integer-translations-is-a-covering`, `prop-topological-sums-of-cech-complete-spaces`, `cex-disc-algebra-is-not-dense-without-self-adjointness`, `thm-cech-complete-spaces-are-baire` **(open)**, `thm-simple-continued-fractions-parametrise-the-irrationals` **(open)** |
| **Facts blocks (`[F#]`/`[L#]`)** | the whole inflated-citation class above — ~45 items across all seven batches, plus the two `>`-stripped batch-3 fact lines |
| **Remark** | `rem-choice-ledger-for-the-adjoint-functor-theorems` (repeated the false SAFT branch claim), `rem-why-completeness-alone-is-not-enough-for-an-adjoint` (two AC-dependent conclusions without AC) |
| **Page prose / summary** | `library/topology/stone-weierstrass-general.md` (dropped "unital", refuted by `A={0}`), `library/complex-analysis/contour-integration.md` ("continuous primitive"), `library/topology/ascoli-arzela.md` (the run's only summary breaking the page-summary contract — canned bold labels and page-description content in paragraph 1; rewritten to 77 and 95 words) |
| **Contract boundary rows** | 27 rows in batches 1–3, 6 rows in batches 4–6, 3 rows in batch 7 — three of which each concealed a fatal finding |

---

## Items repaired more than once — the twice-touched escalation

`touchlog audit` reports **131 items** with refutations + repairs > 1. That number
is inflated by the scheduler defect described below — a repair on one item forced
the sweep to re-judge every pair-mate, so "refuted 2x, repaired 0x" describes
resample noise, not a suspect proof. Reading only the items with **two or more
actual repairs**:

| item | rounds | my reading |
|---|---|---|
| `thm-invariance-of-complex-line-integrals-under-increasing-reparametrization` | refuted 4×, repaired 2× | **converged.** A `,qquad` typo, then a step-8 citation repair. Both cosmetic-to-local; the mathematics never moved. |
| `thm-circle-integrals-of-integer-monomials` | refuted 3×, repaired 2× | **converged.** The same `exp` citation twice from two angles — R1-11 fixed the widened quantifier, F8 fixed a false "additive under sums" sentence in the neighbouring fact. The proof's own use was correct throughout. |
| `cor-gaft-recovers-the-free-group-and-abelianisation-adjoints` | refuted 2×, repaired 2× | **worth your eye.** Three distinct defects in sequence: an unsupported Given (R6-24), then the repair itself claimed the abelian branch needs no completeness while citing a theorem requiring it (refuter), then the title still overstated what the Statement gives (step 8 F6). Each smaller than the last, which reads as convergence — but two of the three were introduced by repairs. |
| `def-cyclic-subspace-vector-and-vector-annihilator` | refuted 2×, repaired 2× | **worth your eye.** A missing finite-dimensionality hypothesis at 6b, then the repair asserted that hypothesis is *necessary*, which both lanes independently refuted with the same `T=0` counterexample. The current text carries both witnesses and is right, but the item has been wrong in two opposite directions. |
| `cor-locally-compact-hausdorff-spaces-are-cech-complete` | refuted 2×, repaired 2× | **converged** — a truncated citation at 6b, then the DC scope at step 8. Different defects, both closed. |
| `ex-baire-sequence-space-and-the-irrationals` | refuted 2×, repaired 2× | **converged** — a too-weak `[F1]` at 6b, then an `[F2]` identification the source refuses at step 8. |
| `ex-real-line-mod-integer-translations-is-a-covering` | refuted 2×, repaired 2× | **converged** — `def-integers` supplying no ℤ inside ℝ, then intervals of length `< 1` not evenly covered. |
| `fs-every-metrizable-space-is-cech-complete` | refuted 2×, repaired 2× | **converged** — the `fs-`-statement-as-fact defect, then a UL+AC scope. |
| `thm-cech-complete-spaces-are-baire` | refuted 2×, repaired 1× | **suspect, and open.** A missing bridge at 6b, then the ambient-open defect that is still unrepaired. |
| `thm-simple-continued-fractions-parametrise-the-irrationals` | refuted 3×, repaired 2× | **suspect, and open.** An over-correction at 6b that the group Alpha itself withdrew, a rewritten step 2.1, and step 3.1/4.1 still unproved. |

The two suspect ones are exactly the two blockers.

---

## Findings about the machinery, not the mathematics

These outlive the run.

1. **A contract regeneration written to the merged artifact does not survive the
   next merge.** Step 8 regenerated stale quotes in
   `frontier-14-proof-contracts.json`; step 9's `merge-proof-contracts` rebuilt it
   from the seven batch files and restored every stale quote. `proof-contract
   --strict` is red today for that reason alone. **Regenerate the batch file, then
   merge** — or teach `regen-contract-entries.mjs` to refuse a merged target.

2. **Step 7 and step 8 ran concurrently, and the scheduler manufactured resample
   noise.** The autopilot entered `8-adjudicate` while `judge-sweep` was still
   re-dispatching (attempt 37). Because every step-8 repair moves the frozen
   **pair** context hash, each repair re-armed the sweep on every sibling: the
   ledger grew 676 → 773 during adjudication, 26 of 29 fresh rejections were on
   items the stage never touched, and **8 flipped pass → reject on byte-identical
   text from the same lane that had passed them.** That is the pathology the
   owner's 2026-08-06 item-granular rule exists to prevent, reappearing at the
   *scheduler* level. `7-judge` must be closed before `8-adjudicate` is dispatched;
   as it stands the stage cannot terminate.

3. **The rejudge stage is not owned by anyone.** Step 8 named a 23-id rejudge set;
   no stage consumed it, and `apply-judge-stamps` was never run with `--apply`.
   The result is a level whose reader-facing judge coverage is 2 of 340. The
   stage table needs a `7b-rejudge` that reads the step-8 rejudge set and does not
   clear until `level-coverage --verify-current-context` is green.

4. **A brief that asks a read-only role to write a file is guaranteed data loss.**
   `dispatch.mjs` sets `--sandbox read-only` for `refuter` and `certifier`. Group
   a's first refuter brief told them to write reports; all eight correctly
   recorded a blocker instead of prompting, and the findings had to be recovered
   from dispatch logs. One refuter emitted nothing recoverable and was
   redispatched. Separately, group a's first refuter briefs rendered their scope
   lists as `[object Object]` (manifest `items` are objects, not id strings) and
   eight refuters ran ~30 minutes against an unusable scope.

5. **A reader task file with a wrong output path silently destroyed a report.**
   `frontier-14-reader-7.task.md` told reader 7 to write
   `research/frontier-14-reader-1.md`; it did, over reader 1's committed report.
   Reader 7's twelve findings — four of them fatal — existed **only in the
   dispatch transcript** and were recovered from it verbatim by group Alpha c. Had
   that Alpha adjudicated from the file on disk, it would have adjudicated batch 1
   and reported batch 7 as clean. This is `route-findings-from-the-report` with a
   new mechanism: the file was on disk and was the *wrong* file.

6. **Backgrounding a launcher kills its dispatches.** Group b's first launch of
   seven refuters produced prompt files and no results — the launcher ran as a
   backgrounded shell task and the refuters died with its process group; `nohup`
   did not save them. Caught by checking liveness rather than tabling seven agents
   as dispatched.

7. **`finite-smoke` contributes nothing to this level and should not be counted as
   a passed gate.** One `finite_smoke` row exists in all 291 proof-bearing items
   (batch 5's `thm-count-of-quadratic-residues-modulo-prime`, which does run live
   over 1010 instances). I re-counted the merged contract: **1 of 291.** Per
   batch at 6c: `0/65, 0/22, 0/71, 0/46, 1/23, 0/43, 0/19`.
   This is not negligence — the registry is graphs, posets, cyclic subgroups,
   binomial congruences, Vieta, linear recurrences and matrix rings mod `n`, and
   a contract may reference but not define a check. All three group Alphas and the
   lead reached this independently. **Extending the registry is an owner decision.**

8. **`citation-fidelity` did not detect a single instance of the class it was
   built for.** It reported 0 widening candidates over 407 citations in batches
   4–6 while 15 genuine inflated restatements were independently confirmed in that
   same text. It is a *quote-integrity* checker plus two narrow syntactic
   heuristics; the shape that actually occurs — *the fact line appends a true
   conclusion the cited Statement does not contain* — is not one of its detectors.
   A green result from it is evidence about quotes, not about inflation.

9. **`boundary-audit`'s template detector is defeated by this run's template.**
   Its `normalise` strips the item **id** and case before clustering, but the
   boilerplate embeds the item **title**, so every row is textually unique and no
   cluster forms. It reported "no reuse" while **240 of batch 6's 248
   `not_applicable` rows are one template** (72% of that batch's boundary rows are
   `not_applicable`, against 37% in batch 4). One-line fix: strip the title in
   `normalise` alongside the id and case. The 240 rows are flagged, not rewritten.

10. **`gate-liveness` lies by omission without `--checklists`.** The 6c task file
    omits the flag, and the gate then reports `coverage-checklist — skipped,
    inputs not present` while all seven coverage files sit on disk. Passing the
    paths turns it live at 563 harvested results. The task-file command should
    carry it.

11. **A dead-source gate whose remedy is destructive produced a false positive.**
    `url-sweep` reported Shapiro's Arzelà notes dead: they answer 200 to plain
    curl but fail HEAD with an HTTP/2 framing error, and a transport failure
    carrying a status short-circuited the fallback chain. The prescribed remedy is
    recover-then-replace, so this would have swapped a working citation for a 2016
    archive snapshot and rewritten the provenance of every item it backs. Fixed in
    `tools/url-sweep.mjs` (`984c37c4`).

12. **`research/frontier-13-spine-audit.json` is an unfilled template** — reviewer
    empty, all 60 attestations still `pending`. That run carries no spine receipt
    of its own. This run's receipt does not depend on it (it carries forward from
    `frontier-12` and `zfc` at unchanged content hashes), but the gap is real and
    predates this run.

13. **The 6c brief's "Run facts" table describes a different run entirely** —
    symmetric polynomials, tensor products, Erdős–Hajnal, and `frontier-13`'s
    named challenges. The group Alphas' own dispatches were correct so nothing
    downstream was misled, but a future session reading that brief for context
    would be.

---

## Verification state

Every gate below was re-run by me at step 10 against the current disk state.

```
precheck                3940 checked, 0 failing        depcheck      exit 0
fwdcheck                exit 0                          extcheck      exit 0
rendercheck             exit 0                          prosecheck    OK
citecheck               heuristic warnings only         validate-plan exit 0
content-policy          340 scoped, 0 errors            manifest-integrity 18/18, no drift
coverage-checklist      9 pages, 563 harvested, 0 err   url-sweep     31/31 live, 0 recoverable
boundary-audit          no template reuse, 0 contradicted
risk-report --require-reviewed   0 errors, 291 routed
gate-liveness           finite-smoke 1 · proof-contract 291 · coverage 563 · precheck 3940
step8-guard             23 changed, 23/23 licensed by a confirmed_fatal — OK
impact-audit            exit 0 — 338 changed interfaces, 280 affected, all inside the run

proof-contract --strict          FAIL exit 1 — 26 errors (22 stale quotes, 4 unmapped uses)
citation-fidelity --fail-on-missing-quote
                                 FAIL exit 1 — 7 QUOTE NOT FOUND (same cause);
                                 0 widening candidates over 1104 citations / 291 items
spine-audit --receipt            FAIL — receipt-scope: scope no longer matches the current set
level-coverage --verify-current-context   FAIL exit 1 — 103 errors, itemised in §"Publish readiness"
finite-smoke                     1 check — INAPPLICABLE to this level, not a pass
```

**Judge outcomes, not rates.** 896 calls, 0 nulls, every one of the 340 items
read by both lanes.

| | DeepSeek V4 Pro | GPT 5.6 Terra |
|---|---|---|
| calls | 422 | 474 |
| passes / rejections | 297 / 125 | 311 / 163 |
| rejections adjudicated | 116 (9 open) | 143 (18 open) |
| `confirmed_fatal` | **15** (3 logic, 2 dependency-citation, 10 other) | **25** (5 logic, 4 dependency-citation, 16 other) |
| `confirmed_nonfatal` | 95 | 115 |
| `false_positive` | 6 | 3 |

Latest-attempt agreement over the 340 items: **both pass 190, both reject 75,
DeepSeek-only 30, Terra-only 45, incomplete or null 0.**

Terra found more real defects here (25 vs 15 confirmed fatal), and step 9 recorded
a case that cuts the same way: DeepSeek passed both of the lead Alpha's new
corollaries including two genuine dependency-citation defects that Terra caught.
On this run the cross-family screen was not the one that bit. Weigh that against
the standing note that Terra shares the GPT family with the audit Alpha.

---

## Caveats — everything I could not verify, or verified thinly

1. **`level-coverage --verify-current-context` does not pass.** Stated in full in
   §"Publish readiness". This is the level's hard receipt gate and it is red.
2. **`proof-contract --strict` and `citation-fidelity` are red** on stale quotes.
   Mechanical to fix, but they are red *now*, and I did not fix them because step
   10 is the report and the fix touches artifacts you are about to read.
3. **The spine receipt has lapsed.** It was valid at 6c (60/60 at unchanged
   `content_sha256`, 59 carried from `frontier-12`, 1 from `zfc`, plus a full
   personal read of `lem-of-q-embeds` newly in the top-100 cone). Step-8 and
   step-9 content changes moved the high-blast-radius set, so it must be
   regenerated and re-attested before publish.
4. **`finite-smoke` is a green gate testing essentially nothing on this level** —
   one check across 291 proof-bearing items. Report it as inapplicable.
5. **`citation-fidelity` and `boundary-audit` each demonstrably missed the class
   they exist for** (machinery findings 8 and 9). Both were green on text where
   humans and refuters confirmed real defects. Do not read either green result as
   assurance.
6. **Batch 6's 240 templated boundary rows are flagged, not rewritten.** No gate
   fails on them and no *further* contradicted row was confirmed, but they are
   boilerplate rather than dispositions — and this run's evidence is that a false
   boundary row hides a fatal defect three times out of three when someone looks.
7. **Harvest faithfulness was verified by text extraction, but not exhaustively.**
   Group a extracted Marker and Hatcher; group b found and corrected **four
   off-by-one Riehl/Leinster locators, each excluding the very result it names**;
   group c extracted all three of its sources and corrected a misattributed title
   (the "Berkeley Math 205B Notes" are Xu's notes from Mazzeo's Stanford course).
   **Group b's Mac Lane range (batch 6, PDF pp. 140–143, a Wayback scan) was never
   text-extracted** and is recorded as unverified rather than passed. The lead
   Alpha re-ran liveness and structure at 6c but re-extracted no PDF.
8. **The step-9 sweep checked declines against disk, not against sources.** D65
   rests on "Erdman poses this as an open-ended exercise"; Erdman was not reopened
   for that clause. Its second ground — a compact-domain hypothesis mismatch — is
   checkable from the scaffold and holds.
9. **`impact-audit`'s receipt is one stage stale.** `research/frontier-14-impact.json`
   records 314 changed interfaces and 260 dispositions from 6c; the gate today
   reports 338 and 280, the difference being batch 7 and the two step-9 items. The
   *conclusion* is unaffected and I verified it independently: `git status` over
   `items/` shows **zero modified files carrying `status: published`**, and the
   four touched `library/` files are all drafts. **Unlike `frontier-13`, the
   baseline here was taken correctly** — at step 4, over 4,646 items, before any
   authoring.
10. **Judge rejections are unadjudicated at two different counts, and both are
    real.** `judge-compare` reports **27 rejection candidates never adjudicated**
    (9 DeepSeek, 18 Terra) across the whole ledger; `level-coverage` reports the
    stricter figure that matters for publish — **16 *current* rejections over 13
    items with no exact-hash Alpha outcome, all on
    `triangularisation-and-jordan-canonical-form`.** They arrived from the
    post-step-8 resample wave after the adjudicating Alpha had finished. They are
    not known to be nonfatal; they are unread.
11. **`covering-spaces-and-lifting` (32 items) may have no completed independent
    refuter pass.** Its first refuter hit the read-only write block and emitted
    nothing recoverable; the redispatch was still running when 6c was written and
    I found no report for it. That page has reader coverage, group a's own read,
    the lead's 6c sweeps and both judge lanes — but its `risk_review` records carry
    a `REFUTER COVERAGE INCOMPLETE` marker honestly, and 43 of group b's 86 risk
    reviews likewise record that the refuter reading was still outstanding rather
    than claiming a clearance.
12. **I did not re-verify the group Alphas' 6b adjudications**, and neither did
    the lead at 6c. 153 findings were adjudicated from disk by three Alphas; both
    of us took their verdicts and closed only what they referred up.
13. **`prosecheck`, `depcheck` and `citecheck` emit heuristic warnings** that are
    not failures and that nobody triaged item by item this run.

## Things the run did *not* need, which are worth knowing

- **Zero published items were modified.** The obvious-published-dependency
  delegation was considered exactly once — the title of
  `cor-functor-categories-inherit-completeness-and-cocompleteness` omits the
  Choice hypothesis its own Statement carries — and **declined**, because nothing
  in the library now cites it and because Riehl states the result *without* the
  hypothesis, making it a question about the library's proof route rather than an
  unambiguous falsehood. Recorded in
  `research/frontier-14-published-dependency-repairs.md` with a recommendation.
- **Zero `proved_here: false` fallbacks, zero `forward_refs`, zero
  `external_refs`.** The level is fully self-contained.
- **Zero cross-batch citations**, structurally forced. The one place a Beta needed
  such an edge — `ascoli-arzela` needing general-domain equicontinuity where the
  published foundation is metric-domain — it **built the machinery**
  (`def-compact-open-topology-for-topological-domains`,
  `def-equicontinuity-on-a-topological-domain-…`, plus two bridge propositions
  proving they agree with the published metric notions) rather than stretching a
  citation. That is the exact defect class that was `frontier-13`'s largest fatal
  group, avoided by design.
- **All 340 published dependency targets carry component provenance** (174
  `ai-altered`, 166 `literature-derived`, 0 `ai-generated`, 0 unclassified). 25
  in-run items carry an `ai-generated` Statement; **all 25 are `example` or
  `counterexample`, and no item's `deps` names any of them.**
- **Step 9 overturned three scope declines**, all resting on the same false step
  — "this result is developed on other pages" used as if it meant "not available
  here", when those pages are in this page's `requires` closure. Two were built
  (`cor-vanishing-moments-force-a-continuous-function-to-vanish`,
  `cor-differentiable-approximants-with-a-vanishing-derivative-at-a-point`); the
  third is an owner decision. **This is the `frontier-13` A5 class recurring**,
  and the step-2 mechanical check for it was never built —
  `coverage-checklist.mjs` contains no `license_page` logic at all, so 32 of 66
  declines carry no destination field and nothing noticed.
- **Four owner decisions on scope**, none of which I can take: arbitrary products
  of Čech-complete spaces (no planned page); the nerve and `Cat` as a reflective
  subcategory of simplicial sets (simplicial *sets* are not in the plan at all);
  compact generation and `k`-spaces (five Munkres headings deferred to a
  *published* page for a topic the library has never developed); and separability
  of `C([a,b])`, whose natural home is published.

---

## What I recommend you read personally

1. **The two blockers**, `thm-cech-complete-spaces-are-baire` and
   `thm-simple-continued-fractions-parametrise-the-irrationals`. Both are on
   `complete-metrizability-and-baire`, both are true theorems with unproved
   proofs, and both need an authoring pass, not a step-8 correction. Nothing else
   in the level is blocked on mathematics.
2. **`thm-special-adjoint-functor-theorem-objectwise-form`** — the one outright
   false Statement of the run, with a verified counterexample, repaired by
   narrowing. Five consumers were checked item by item and become correct
   automatically. It is worth confirming you agree with the narrowing rather than
   the alternative repair.
3. **`cor-gaft-recovers-the-free-group-and-abelianisation-adjoints`** and
   **`def-cyclic-subspace-vector-and-vector-annihilator`** — the two items where
   repairs introduced the next defect. Both are correct now; both have been wrong
   twice.
4. **The 6c foundational repair** — the representative-set formulation of
   subobjects and well-poweredness, across six items. It is the only place this
   run changed a *convention* rather than a statement, and it followed the sources
   rather than inventing one, but it is the kind of decision you may want to own.
5. **Two `not_applicable` boundary rows of your choosing.** `frontier-13`'s report
   asked the same question; this run answered it three times over, each time
   finding a false row concealing a fatal defect.

## What has to happen before this level can publish

In order, and none of it is an owner decision except the first line of item 1:

1. Repair the two blockers (a step-6-class authoring pass on two proofs), or drop
   them — **dropping a drafted result is your call, not mine**.
2. Regenerate the stale contract entries in the seven
   `research/frontier-14-batch-<i>.proof-contracts.json` files, re-merge, and
   re-run `proof-contract --strict` and `citation-fidelity`.
3. Adjudicate the 27 open judge rejections on batch 4.
4. Run the paired sweep on the step-8 rejudge set (23 ids) plus whatever items
   items 1–3 change, and adjudicate any new rejection.
5. Regenerate and attest the spine receipt.
6. Complete `research/frontier-14-audit-coverage.json` — reviewer, attestation,
   and the 57 plan-reconciliation reasons.
7. `level-coverage --verify-current-context` green, then
   `apply-judge-stamps --apply`, then the owner audit sets
   `verification.audited` and `status: published`.

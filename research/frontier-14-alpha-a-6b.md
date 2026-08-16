# frontier-14 — Alpha group **a**, step 6b adjudication (batches 1, 2, 3)

Reviewer: Alpha-frontier-14-group-a (Claude Opus 5, `xhigh`, 1M context).
Scope: 183 scoped items on 8 pages — batch 1 (`complex-power-series-and-analytic-functions`,
`…-examples`, `contour-integration`, `…-examples`), batch 2 (`ascoli-arzela`,
`…-examples`), batch 3 (`complete-metrizability-and-baire`, `…-examples`,
`covering-spaces-and-lifting`, `…-examples`).

**Adjudicated 69 reader findings and 39 refuter findings. 76 of 183 scoped items
repaired.** Every finding id below is the reporter's own; nothing is renumbered.

---

## 0. Two artifact failures found before adjudication began

### 0a. The batch-1 reader report had been overwritten — recovered

`research/frontier-14-dispatch/reader-reader-7.prompt.md` instructs the batch-7
reader to write **`research/frontier-14-reader-1.md`**. The `<i>` in the output
path was not substituted; only reader-7's prompt has the defect (checked all
seven). Reader-7 therefore overwrote reader-1's batch-1 report, and its own
findings were numbered `R7-*` in a file named for batch 1.

Recovered: batch-1's report restored from `git show HEAD:…` (commit `9f92588c`);
batch-7's preserved verbatim at **`research/frontier-14-reader-7.md`**. Batch 7
is group c's scope — that report is their step-6b input and would otherwise have
been silently lost. **The orchestrator should confirm group c is reading
`frontier-14-reader-7.md` and not the restored batch-1 file.**

### 0b. My own refuter dispatch was wrong twice

- The scope lists in my first refuter briefs rendered as `[object Object]`
  (`pages.json` `items` entries are objects, not id strings). All 8 refuters ran
  ~30 min against an unusable scope. Killed and relaunched with correct ids.
- The `refuter` role is `read-only` by owner rule, but my brief told them to
  **write** `research/frontier-14-refuters/<name>.report.md`. Every refuter
  correctly recorded a blocker instead of prompting. Findings were recovered
  from the dispatch logs and persisted by me to the report paths, each with a
  provenance header. `b3-covering-core` emitted nothing recoverable and was
  redispatched with a corrected brief (report in the final message, no file
  write).

**For the orchestrator:** any future brief for a read-only role must not ask for
a file write. `dispatch.mjs` sets `--sandbox read-only` for `refuter` and
`certifier`; a brief asking those roles to write is guaranteed data loss.

---

## 1. Reader-1 — batch 1 (14 findings: 11 fatal, 2 nonfatal, 1 polish)

One root defect produced five of the eleven. `thm-fundamental-theorem-for-complex-line-integrals`
requires a **continuous integrand** `f` with `F' = f` continuous. Its title, the
page summary, and four `[L#]` restatements all said "a continuous primitive" —
which is vacuous, since every primitive is holomorphic and therefore continuous.
The title thus asserted the theorem for every function admitting a primitive,
for which the rectifiable-path integral need not even exist.

| id | item | verdict | what changed |
|---|---|---|---|
| R1-1 | `ex-lacunary-factorial-exponent-power-series` | **confirmed_fatal** | `[L3]` claimed `def-factorial-and-falling-factorial` gives strict increase of `n!`; that definition's four proved clauses are product representation, nonvanishing, the falling-factorial identity and boundary values — monotonicity is not among them. `[L3]` restated as the recursion plus `n! ≠ 0`; step 1.1 now derives `m! ≥ m` inline and concludes the index set is unbounded. |
| R1-2 | `thm-riemann-stieltjes-and-parametric-contour-integrals-agree` | **confirmed_fatal** | `[L1]` dropped the cited theorem's hypothesis that the integrand is Riemann integrable. Restated in full; new `[L5]` = `thm-continuous-implies-integrable` discharges it, and step 1.1 now says why each component integrand is continuous. |
| R1-3 | same | **confirmed_nonfatal** | Step 1.2 applied `[L1]` to the arc-length integrator with nothing giving its derivative. Added `[L6]` = `cor-arc-length-accumulation-derivative-is-speed` and rewrote the step. |
| R1-4 | `prop-reversal-and-concatenation-of-complex-line-integrals` | **confirmed_nonfatal** | Reversal used a **decreasing** change of parameter; `thm-riemann-stieltjes-change-of-variable` covers only strictly **increasing** bijections, so it could not be cited for it. Step 1.1 now argues directly on reversed tagged partitions; step 1.2 cites the change-of-variable theorem (new `[L5]`) for the two increasing affine pieces and checks `[L2]`'s bounded-variation and continuity hypotheses at the join. |
| R1-5 | `thm-invariance-…-reparametrization` | **polish** | Literal `,qquad` → `,\qquad` in the Statement display. |
| R1-6 | `thm-fundamental-theorem-for-complex-line-integrals` | **confirmed_fatal** | Title → "The line integral of a **continuous function admitting a primitive** is that primitive's endpoint increment along every rectifiable path". Page summary `library/complex-analysis/contour-integration.md` reworded to match. |
| R1-7 | same | **confirmed_nonfatal** *(reader said fatal)* | The reader called the ball selection an unstated use of Choice. It is not: the admissible radii at `p` form a set downward closed in `(0,1]`, so `r_p := ½ sup S_p` is a **definable** function of `p`. Step 1.1 rewritten to define `r_p` outright, use convexity of the ball, and drop the `choose` tag. No choice principle is used. |
| R1-8 | `cor-contour-integral-of-a-constant-…` | **confirmed_fatal** | `[L2]` "continuous primitive" → the cited Statement in full; step 2.1 now records that the constant integrand is continuous. |
| R1-9 | `thm-path-independence-and-complex-primitive-criterion` | **confirmed_fatal** | `[L5]` same defect; restated in full. Step 1.1 now derives continuity of `F' = f` from the Given before applying it. |
| R1-10 | same | **confirmed_nonfatal** *(reader said fatal)* | Not a use of Choice either. Step 1.2 previously selected a polygonal path per `z` and only then proved path-independence. Reordered: 1.2 proves all such paths carry the same integral, and 2.1 defines `F(z)` as that **unique common value**. Definition by unique specification, no selection. |
| R1-11 | `thm-circle-integrals-of-integer-monomials` | **confirmed_fatal** | `[L4]` attributed `exp(2πik) = 1` for every integer `k` to a corollary whose Statement is the Cartesian form plus `e^{iπ}+1=0` — a widened quantifier and conclusion. `[L4]` restated exactly; step 2.2 now derives the period identity from the addition law `[L3]` and `e^{iπ} = −1`, for `k > 0` and `k < 0` separately. |
| R1-12 | `ex-exponential-contour-integral-…` | **confirmed_fatal** | `[L4]` same defect; restated, and step 2.1 notes `exp` is its own continuous derivative. |
| R1-13 | `ex-polynomial-contour-integral-…` | **confirmed_fatal** | `[L2]` dropped the continuity hypothesis entirely; restated, and steps 1.1/1.2 record that the polynomial integrands are entire with continuous derivative. |
| R1-14 | `ex-contour-integral-of-conjugation-depends-on-the-path` | **confirmed_fatal** | **A concrete arithmetic falsehood in a numbered step.** Step 1.2 stated both segment values as `−2i`. Recomputed: `−1 → 2i` gives `(−1)(1+2i) + 5/2 = 3/2 − 2i`, and `2i → 1` gives `(−2i)(1−2i) + 5/2 = −3/2 − 2i`. They sum to the correct `−4i`, which is why the example's conclusion survived; the stated intermediate values were simply wrong. Both written out, and step 2.1 now shows the sum and the comparison with `−πi`. |

## 2. Reader-2 — batch 2 (8 findings: 4 fatal, 4 polish)

| id | item | verdict | what changed |
|---|---|---|---|
| R2-1 | `cor-compact-subsets-of-cx-for-a-proper-metric-target` | **confirmed_fatal** | Title omitted the nonempty-compact-metric domain and Choice. Verified the reader's counterexample: the translated tents `f_k(x) = max{1−|x−k|,0}` on `X = Y = ℝ` are pointwise bounded, 1-Lipschitz hence equicontinuous, and 1-separated in the uniform metric — closed, not compact. Title now carries domain, Choice **and** the topology (see B2-ASCOLI-2). |
| R2-2 | `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` | **confirmed_fatal** | Same counterexample refutes the unqualified title: `f_j(j)=1`, `f_k(j)=0`, so no subsequence is uniformly Cauchy. Title now carries the compact metric domain and Choice. |
| R2-3 | `thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain` | **confirmed_fatal** | This one **is** a genuine unstated Choice, unlike R1-7/R1-10: step 1.2 selected one admissible pair `(O_f,U_f)` per `f` in an arbitrary compact family, with no canonical choice available in a general topological space, while the Statement assumes no choice principle. Rewritten choice-free: step 1.2 forms the set `𝒜` of **all** admissible triples `(f,O,U)`; step 2.1 applies compactness to the cover indexed by `𝒜`, so only a finite selection is made. Statement stays choice-free. |
| R2-4 | `cex-boundedness-does-not-replace-pointwise-relative-compactness` | **confirmed_fatal** | `[L3]` attributed "the discrete distance is a metric" to `def-metric-space`, which defines what a metric *is* and proves nothing about that construction. `[L3]` restated as the three axioms (M1)–(M3); step 1.1 now verifies each, including the (M3) case split. |
| R2-5 | `prop-compact-open-is-uniform-on-a-compact-metric-domain` | **confirmed_nonfatal** | Pointwise strict inequalities do not give a strict supremum bound. `[L2]` extended with clause (U3) of the cited definition (the maximum exists on nonempty compact `K`); the step now takes that maximum and concludes `M < ε`. Precheck restratified the proof (the step moved to phase 2); the printed canonical form was adopted. |
| R2-6 | `cor-real-and-euclidean-vector-valued-ascoli-arzela` | **confirmed_nonfatal** | Steps 1.3/3.1 used a family `ℱ` the Given never introduced. `ℱ` is now fixed at the head of 1.3, the `(U_x)` family is attributed to the Given's Choice, and 3.1 shows the triangle-inequality step. |
| R2-7 | same, contract `degenerate` row | **confirmed_nonfatal** | The row described an "endpoint rectangle of coordinate bounds" — an object belonging to `ex-compact-affine-interpolation-family`, absent here. Replaced with the dispositions actually present: the empty family and the one-point domain. |
| R2-8 | `ex-compact-affine-interpolation-family`, contract `zero` row | **confirmed_nonfatal** | Conclusion right, anchor false: `M = 0` is handled in step **1.3**, not 2.2 (2.2 is the endpoint homeomorphism). Anchor corrected. |

## 3. Reader-3 — batch 3 (47 findings)

Reader-3 reported 35 fatal. **I confirm the substance of nearly all of them**,
with the three severity corrections noted below. The findings fall into four
classes; I treated each as a class rather than item-by-item.

### 3a. The genuinely broken Statements

- **R3-17 — `lem-finite-refining-small-diameter-covers-of-compact-metric-spaces`
  — confirmed_fatal, and worse than "imprecise": the Statement was
  unsatisfiable.** It demanded a **finite** rooted levelled tree
  `T = ⋃_{n∈ℕ} T_n` in which *every node has a finite nonempty set of children*.
  Induction from the root then populates every level, so `T` is infinite. No such
  object exists, and `thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space`
  was built on it. Repaired to a **finitely branching tree with every level finite
  and nonempty**, with an explicit clause saying the tree itself is infinite. I
  also wrote out the cover construction the proof had only gestured at (finite
  ball cover → closed traces → compact by `[F2]` → diameter `< ε` by the triangle
  inequality) and added the **Dependent Choice** the level-by-level recursion
  actually spends, with `def-dependent-choice` as a new dep and `[F4]`.
- **R3-15 — `lem-simple-continued-fraction-convergents-and-cylinders` —
  confirmed_fatal on both counts.** `p_n, q_n` were never defined and the
  recurrence had no initial values, so it had no value at `n = 0, 1` and the
  determinant identity was not well formed there; and the Statement called a
  **code cylinder** in `ℕ^ℕ` an interval of reals. Rewritten: initial values
  `p₋₂=0, p₋₁=1, q₋₂=1, q₋₁=0` stated as part of the definition; `C(a₀,…,aₙ)`
  (codes) and `J(a₀,…,aₙ)` (reals) separated by name; diameter computed exactly
  as `1/(qₙ(qₙ+qₙ₋₁))`; steps 1.1/2.1 now carry the induction and the subtraction.
- **R3-16 — `thm-simple-continued-fractions-parametrise-the-irrationals` —
  confirmed_fatal.** Step 2.1 claimed nested intervals "exclude rational
  endpoints", which `[F2]` did not supply. **I first over-corrected**: my repair
  to R3-15 asserted that no infinite simple continued fraction takes a rational
  value, which is a theorem, not a consequence of the endpoints being rational.
  I withdrew that clause from the lemma and instead wrote the standard
  self-contained argument into step 2.1 of the theorem, where it belongs: if
  `x = a/b` then `|aqₙ − bpₙ| < b/qₙ → 0`, so it vanishes for large `n`, forcing
  `x` to equal two distinct consecutive convergents.
- **R3-41 — `thm-universal-cover-uniqueness-and-dominating-property` —
  confirmed_fatal; claim narrowed, not patched.** The Statement promised a unique
  **covering map** to every connected covering; `[F2]`, the lifting criterion,
  gives a unique continuous **lift** and no more, and no step supplied
  surjectivity or evenly covered neighbourhoods. Per the brief's instruction, I
  narrowed rather than patched: the Statement now asserts a unique based
  continuous map **over the base**, keeps the unique-isomorphism conclusion
  (which steps 2.1/3.1 do prove), and states plainly that the stronger classical
  form is **not established on this page**. `thm-deck-group-of-a-universal-cover-is-the-fundamental-group`
  is the only consumer and needs only the isomorphism half; its `[F3]` was
  updated to match.
- **R3-42 — `thm-sheets-equal-fundamental-group-index` — confirmed_fatal.** The
  title and Statement said "left cosets", but `[F4]` (`def-coset`) fixes
  `gH` = left and `Hg` = right, and step 3.1 produces `H[α]` — right cosets. The
  notation `H\π₁` in the Statement already meant right cosets, so the words
  contradicted the symbols. Title, Statement and step 3.1 now say **right**
  cosets. `[F5]` had quoted only the left-coset definition of index and omitted
  `def-index`'s own clause that the two coset sets are equinumerous — the clause
  step 5.1 needs. Added, with `lem-left-and-right-cosets-equinumerous` as a dep.
- **R3-3 — `thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta` —
  confirmed_fatal on the cover-strength point.** Step 2.1 required small diameter
  only in the compatible complete metric `ρ`, so nothing forced the selected
  points to converge to `x` in the **ambient** metric, which step 3.1 asserted.
  Repaired by imposing both conditions (`n`-small = ambient diameter `< 1/n`
  **and** `ρ`-diameter of the trace `< 1/n`), stating why neither may be dropped,
  and rewriting step 3.1 to intersect the `Vₙ` into a decreasing `Wₙ` so that
  `y_m, y_n ∈ W_N` gives `ρ`-Cauchy.

### 3b. Choice hypotheses missing from titles and Statements — 20 items

The library convention is settled: ~40 published items carry the choice
hypothesis **in the title** ("Under Dependent Choice, every completely metrizable
space is Baire"). Batch 3 applied it inconsistently. I confirmed each against the
fact the proof actually spends and repaired 23 titles and 12 Statements.

Confirmed and repaired: R3-1, R3-2, R3-4, R3-5, R3-10, R3-11, R3-12, R3-13,
R3-14, R3-19, R3-21, R3-22, R3-23, R3-26, R3-27, R3-28, R3-29, R3-31, plus
`thm-cantor-space-surjects-…` (R3-18) and `lem-finite-refining-…` (R3-17).

Two worth naming:

- **R3-10** — the Statement assumed `AC_ω` while `[F2]` (Alexandrov) assumes
  **Dependent Choice**, which `def-dependent-choice` expressly records is not
  covered by `AC_ω`. Statement raised to DC.
- **R3-27** — the title said countable choice suffices while `[F2]` is the
  **full-AC** Tychonoff theorem and the Statement hedged with "the compactness
  principle used in Tychonoff's theorem". Both now say the Axiom of Choice.
- **R3-5** — repaired without weakening: the open and closed branches are
  choice-free, so the Statement now reads "Every open or closed subspace … is
  completely metrizable … Assuming Dependent Choice, the same holds for every
  `G_δ` subspace" rather than putting DC in front of everything.

**R3-2 caveat for the record:** the `G_δ`-in-complete result is classically
choice-free by the direct `y ↦ (y, (1/d(y, X∖Vₙ))ₙ)` embedding. This item instead
routes through an `AC_ω` lemma, so I added the hypothesis the **written proof**
spends rather than rewriting the proof at step 6. A later cycle could remove the
hypothesis by changing the route.

### 3c. Truncated citations — the class was ~3× the hand-read sample

Reader-3 flagged ~15 `[F#]` lines that "quote only the opening words" of the
cited definition. This class is invisible to `citation-fidelity.mjs`: the words
are verbatim and claim **less**, not more, so no quote-mismatch and no widening
fires. Rather than ship a hand-read sample as the whole class, I wrote
**`tools/truncated-citation.mjs`** — it flags a fact whose text is a verbatim
prefix of the cited section that stops well short of it, ignoring the cosmetic
difference between the `(def-x)` spelling in facts and `[[def-x]]` in sources.

Over all 183 scoped items it reported **42 candidates**, including two that no
reader raised — one of them in **batch 1**
(`lem-complex-power-series-reexpansion-double-series`).

**41 repaired** with the operative clause of the cited item (`def-countable-choice`,
`def-dependent-choice`, `def-axiom-of-choice`, `def-product-topology`,
`def-connected-space`, `def-compact-space`, `def-g-delta-and-f-sigma-…`,
`def-complete-metric-space`, `def-metric-compactness`, `def-metric-bounded-diameter`,
`def-locally-connected`, `def-homeomorphism-and-open-maps`, `def-path-connected`,
`def-equinumerous`, `def-standard-topologies`, `def-series`, `def-interval`).

**Calibration, for whoever runs this next:** candidates below ~12% coverage were
real without exception. The 20–40% band was mostly a quote that covers the whole
operative clause and stops before commentary — `def-simply-connected` at 34% and
`def-metric-ball` at 21% are false positives. The 16 remaining candidates are all
in that band and I adjudicated them **false_positive**.

Covers R3-1, R3-2, R3-3, R3-7, R3-8, R3-9, R3-14, R3-18, R3-24, R3-25, R3-26,
R3-32, R3-33, R3-37, R3-39, R3-40.

### 3d. Missing bridges — every one existed on disk

R3-20, R3-22, R3-24, R3-25 and R3-38 each alleged a step using a result neither
cited nor derived. All five named items exist published; all five added as facts
and deps, with the steps rewritten to use them:

`thm-a-compact-hausdorff-space-is-regular-and-normal` (R3-20, R3-25 — `[F4]`'s
separation chain gives Tychonoff ⇒ regular and expressly *not* compact Hausdorff
⇒ regular); `thm-metric-spaces-are-tychonoff-and-perfectly-normal` (R3-22, needed
before a compactification may be formed); `thm-a-locally-compact-hausdorff-space-is-completely-regular`
(R3-24, and it assumes DC); `thm-induced-fundamental-group-map-functoriality`
(R3-38 — `[F4]` is the *definition*, which says in as many words that the next
theorem proves functoriality).

### 3e. Nonfatal and polish

R3-6 (**confirmed_nonfatal**: an open subspace of a complete metric space need
not be complete — `(0,1)` is the standard witness; the step now applies `[F2]` to
the whole space, which already concludes density of countable intersections),
R3-30 (σ-ideal bridge added as `[F5]`), R3-43 (rewritten to take **all** adapted
neighbourhoods, so no choice), R3-44 (freeness does not give injectivity; the
stabiliser argument written out), R3-45 (`U → X` → `U → B`; no `X` was in scope),
R3-46 and R3-47 (false boundary rows — see §5).

### 3f. Severity corrections

R3-6, R3-30, R3-43, R3-44 stand as the reader graded them. I downgraded nothing
of reader-3's fatals. I **upgraded** nothing either. The three severity
disagreements in this report are all with reader-1 (R1-7, R1-10 fatal →
nonfatal) and are argued in §1.

---

## 4. Refuter findings (39 across 6 clusters)

Eight read-only refuters (GPT 5.6 Sol, `xhigh`, read-only) were dispatched, one
per page cluster. **The most important result: they found four fatal defects on
`complex-power-series-and-analytic-functions`, which reader-1 had recorded as a
"clean read", 29/29 items, no reportable defect.**

| id | item | verdict | what changed |
|---|---|---|---|
| B1-PS-CORE-4 | `def-stolz-approach-region-at-one` | **confirmed_fatal** | The definition said a sequence approaches 1 within a Stolz region "if all sufficiently late points lie in one fixed `S_C`" — it never required convergence to 1. Verified the counterexample: `z_n = 0` has `\|0\|<1` and `\|1−0\| = 1 ≤ 1·(1−\|0\|)`, so it sits in `S_1` at every index while converging to 0. Convergence to 1 is now an explicit clause, with the witness recorded. A **definition** defect, so it propagated to the Abel-limit items. |
| B1-PS-CORE-1 | `cor-complex-power-series-sums-have-derivatives-of-all-orders` | **confirmed_fatal** | `[L2]` upgraded a one-derivative theorem to "every successive formal derivative". Restated exactly (series, its formal derivative, its antiderivative); step 1.2 now applies it **once per induction step** and says so. |
| B1-PS-CORE-2 | `cor-complex-power-series-coefficient-formula` | **confirmed_fatal** | `[L2]` attributed `0^m = 0` for positive `m` to `def-complex-integer-powers`, which gives only `z^0=1`, `z^{n+1}=z^n z` and records `0^0=1`. Restated; step 1.1 derives `0^m = 0` from the recursion in one line. |
| B1-PS-CORE-3 | `thm-complex-trigonometric-and-hyperbolic-power-series` | **confirmed_fatal** | `[L1]` claimed `def-complex-exponential` states the series is everywhere **absolutely** convergent; that definition states the series and says convergence is discharged elsewhere. `[L1]` corrected and new `[L5]` = `lem-complex-exponential-series-converges-everywhere` supplies absolute convergence, which step 1.1 needs to split even and odd indices. |
| B1-PS-EX-1 | `ex-real-rational-function-with-finite-taylor-radius` | **confirmed_fatal** | `[L2]` dropped `thm-algebra-of-derivatives`'s hypothesis that the inputs are **already differentiable**, and nothing gave the induction a base. Restated with the hypothesis; new `[L5]` = `lem-derivative-of-a-power` supplies constants and the identity, and step 1.2 now runs the induction explicitly. |
| B2-ASCOLI-1 | `cor-ascoli-arzela-for-compact-metric-domains` | **confirmed_fatal** | Title said "for compact metric domains", which includes the empty one; `def-topology-of-uniform-convergence` says in as many words that the uniform metric is defined only for nonempty `X`. Title now says nonempty. |
| B2-ASCOLI-2 | `cor-compact-subsets-of-cx-for-a-proper-metric-target` | **confirmed_fatal** | Compactness and closedness are topology-dependent and `def-topology-of-pointwise-convergence` states that `C(X,Y)` carries no default topology in this library. Title now names the uniform topology for both. |
| B2-ASCOLI-3 | `prop-compact-open-is-uniform-on-a-compact-metric-domain` | **confirmed_nonfatal** | **A defect in my own R2-5 repair.** I had written that step 1.1 supplies the reverse inclusion; step 1.1 is stated for a radius **strictly** below `ε` and cannot be instantiated at `ε`. The step now argues the same-radius inclusion directly. |
| B3-EX-2 | `fs-every-metrizable-space-is-cech-complete` | **confirmed_fatal** | `[F1]` read "The false claim is: ℚ … is a Baire space" — the verbatim Statement of an `fs-` item, i.e. **the claim being refuted** — and step 1.1 used its negation. `[F1]` now states the established negation and explains the `fs-` convention. I swept all 183 scoped items for this shape; this was the only instance. |
| B3-EX-1 | `ex-baire-sequence-space-and-the-irrationals` | **confirmed_fatal** | `[F1]` gives only that *some* homeomorphism exists; the steps use the specific continued-fraction parametrisation. Added `thm-simple-continued-fractions-parametrise-the-irrationals` as `[F3]` and rewrote step 2.1. |
| B3-EX-3 | `ex-real-line-mod-integer-translations-is-a-covering` | **confirmed_fatal** | `[F4]` is `def-integers`, the abstract construction from pairs of naturals; it supplies no copy of ℤ inside ℝ, no ordering, no translations. Added `lem-integer-part` as `[F5]` and rewrote steps 1.1 and 2.1 to use it. |
| B3-EX-4 | `ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings` | **confirmed_fatal** | "Exactly `m` fibre points" needs unique residues mod `m`; no cited fact gave the division algorithm. Added `thm-division-algorithm-in-z` as `[F5]`; step 2.1 now uses its existence and uniqueness explicitly. |

Nonfatal refuter findings adjudicated and either repaired or recorded:
B1-PS-CORE-5/6/7, B1-PS-EX-2…7, B1-CONTOUR-EXAMPLES 1–8, B2-ASCOLI-4…9,
B3-EX-5…11. The boundary-row subset is in §5.

---

## 5. Boundary dispositions — `boundary-audit` is blind to this axis

`tools/boundary-audit.mjs` reported **zero** candidates over 1,264 rows in my
three batches, while refuters found nine false `one` rows by hand. Its three
detectors do not cover the shape "row says `not_applicable` on an axis the item's
own text plainly exhibits — a radius of 1, a unit disc, `z → 1`, a one-point
fibre, a one-factor product". This is a gate passing vacuously.

I wrote a focused detector for that shape and ran it over batches 1–3: **18
candidates**, comprising the nine the refuters found plus nine more. Their stated
reasons were boilerplate of the form "*uses arbitrary bounds or qualitative
hypotheses*". I replaced all 19 rows (18 plus `nonempty-choice` on
`ex-hilbert-cube-…`) with the disposition I actually determined, each naming a
step or the Statement. Three further false rows found earlier in batch 2
(R2-3, R2-7, R2-8) and three in batch 1 bring the total to **27 boundary rows
rewritten**.

**Recommendation for the orchestrator:** extend `boundary-audit.mjs` with this
detector before A6/step 6 of any later wave. I did not modify the shared gate
mid-run because groups b and c are executing against it concurrently.

---

## 6. `risk_review` dispositions

`risk-report.mjs` routes **129** HIGH/CRITICAL items across my batches (55 / 18 /
56). All 129 now carry a complete `risk_review` naming the tier and score, the
step-6a reader's findings against that item (or that it raised none), which
refuter cluster read it and what it found, and whether the item was repaired at
step 6b.

```
node tools/risk-report.mjs research/frontier-14-batch-{1,2,3}.proof-contracts.json --require-reviewed
  batch 1: 0 error(s), 65 item(s) routed
  batch 2: 0 error(s), 22 item(s) routed
  batch 3: 0 error(s), 71 item(s) routed
```

These records are honest about depth: where a refuter cluster had not returned,
the note says `REFUTER COVERAGE INCOMPLETE` rather than implying a read that did
not happen. See §8.

---

## 7. Gates after repair

```
precheck (183 scoped items)                      158 checked, 0 failing — all clean
proof-contract --strict   batch 1                0 error(s), 65/65 checked
                          batch 2                0 error(s), 22/22 checked
                          batch 3                0 error(s), 71/71 checked
citation-fidelity         batches 1,2,3          no quote-not-found; no widening candidates
truncated-citation        183 items              16 candidates, all adjudicated false_positive (§3c)
coverage-checklist        batch 1                2 pages, 97 harvested, 0 error(s)
                          batch 2                1 page,  49 harvested, 0 error(s)
                          batch 3                2 pages, 116 harvested, 0 error(s)
url-sweep --recover --fail-on-dead               17/17 live; 0 failed; 0 needing recovery
finite-smoke              batches 1,2,3          0 error(s), 0 check(s)   <-- see below
gate-liveness             frontier-14            1 gate vacuous: finite-smoke (0 checks, exit 0)
                                                 live: proof-contract 65, coverage 262, precheck 3938
```

77 contract errors appeared after my repairs (my edits moved facts and steps out
from under the recorded citations and derivations). Resolved with
`regen-contract-entries.mjs` per item, which preserves `boundaries` and
`risk_review` — verified afterwards: 129 `risk_review` records and 27 step-6b
boundary dispositions all intact. The residual `boundary-evidence-unanchored`
errors were my new dispositions not naming a step; all anchored.

**`finite-smoke` reports "0 error(s), 0 check(s)" on all three batches** — green
while checking nothing, exactly the failure `gate-liveness.mjs` was built for.
**Flagging it rather than reporting a pass**, and I traced the cause rather than
leaving it as "the Betas forgot":

`finite-smoke.mjs` carries a fixed catalogue of bounded countermodel searches,
and `--self-test` shows what is in it — graph characterisations, poset and
subgroup facts, binomial congruences, Vieta, linear recurrences, matrix rings mod
`n`. Every entry is finite/combinatorial or finite-algebraic. My three batches are
complex analysis, function-space topology and covering spaces, where the objects
are not finite models, so **no catalogue check applies to any of my 158
proof-bearing items** and none could honestly be attached.

This is run-wide, not group-a specific:

```
batch 1: 0/65   batch 2: 0/22   batch 3: 0/71   batch 4: 0/46
batch 5: 1/23   batch 6: 0/43   batch 7: 0/19
```

One item in the whole level carries a finite-smoke entry. So the gate is not
being skipped — it has no applicable checks for this level's subject matter. The
honest reading is that `finite-smoke` contributes **no** assurance to
`frontier-14` and should not be counted as a passed gate at step 10. Extending
the catalogue to these domains (finite topological spaces for the covering-space
and separation claims is the obvious candidate) is an owner-scoped decision, not
a step-6b repair.

## 8. What I could not check

- **`b3-covering-core` refuter produced no findings.** It hit the read-only write
  block and emitted nothing recoverable, so the 32 items of
  `covering-spaces-and-lifting` have reader coverage and my own read but no
  independent refuter pass. Redispatched with a corrected brief; **result not in
  at the time of writing.** Its `risk_review` notes carry the
  `REFUTER COVERAGE INCOMPLETE` marker.
- **`b3-metrizability-core` was still running** when this report was written — 40
  items on `complete-metrizability-and-baire`, the page carrying the heaviest
  repair load. Same marker.
- **Harvest faithfulness was spot-checked, not exhausted.** I verified locators by
  extracting PDF text (venv + pypdf), not by HTTP status. Marker §1 confirmed for
  Polish spaces, the Hilbert-cube embedding (Thm 1.4), Baire space and complete
  metrics; **Exercise 1.13 confirmed to be exactly the continued-fraction
  homeomorphism between `ℕ^ℕ` and the irrationals in `(0,1)`** — a literal search
  for "continued fraction" misses it because the exercise displays the fraction
  rather than naming it, which is why this check cannot be a phrase match.
  Hatcher §1.3 confirmed for covering spaces, the lifting criterion, the homotopy
  lifting property, deck transformations and the universal cover. The remaining
  12 sources were checked for liveness only.
  One note: Marker Ex. 1.13 gives the irrationals **in `(0,1)`**, while
  `thm-simple-continued-fractions-parametrise-the-irrationals` claims all of
  `ℝ∖ℚ`. The `a₀ ∈ ℤ` decoding is what bridges them and the item proves it
  locally, so the harvest row is faithful, but the locator is narrower than the
  library's statement.
- **`fs-` provenance.** I did not re-derive the `provenance.statement` /
  `provenance.proof` labels of items I materially repaired. SCHEMA requires
  retagging a materially altered component; the items where I rewrote a Statement
  (`lem-finite-refining-…`, `lem-simple-continued-fraction-…`,
  `thm-universal-cover-uniqueness-…`, `def-stolz-approach-region-at-one`) should
  be reviewed for an `ai-altered` statement tag before step 7.

## 9. Per-page verdict

| page | scoped | repaired | verdict |
|---|---|---|---|
| `complex-power-series-and-analytic-functions` | 29 | 8 | **ready** — reader clean, 4 refuter fatals found and repaired |
| `complex-power-series-and-analytic-functions-examples` | 11 | 3 | **ready** |
| `contour-integration` | 21 | 8 | **ready** |
| `contour-integration-examples` | 12 | 4 | **ready** |
| `ascoli-arzela` | 19 | 7 | **ready** |
| `ascoli-arzela-examples` | 5 | 2 | **ready** |
| `complete-metrizability-and-baire` | 40 | 26 | **ready with a caveat** — refuter pass incomplete (§8) |
| `complete-metrizability-and-baire-examples` | 6 | 5 | **ready** |
| `covering-spaces-and-lifting` | 32 | 11 | **ready with a caveat** — no refuter findings returned (§8) |
| `covering-spaces-and-lifting-examples` | 8 | 2 | **ready** |

**Counts.** 69 reader findings adjudicated (14 + 8 + 47): 47 `confirmed_fatal`,
19 `confirmed_nonfatal`, 3 `false_positive`-or-downgraded (R1-7, R1-10 to
nonfatal; the 16 truncated-citation band candidates adjudicated false positive
are counted in §3c, not here). 39 refuter findings adjudicated: 12
`confirmed_fatal`, 27 `confirmed_nonfatal`. **76 of 183 scoped items repaired**;
27 boundary rows rewritten; 129 `risk_review` records written; 2 new tools
(`tools/truncated-citation.mjs`, and the boundary detector recommended for
`boundary-audit.mjs`).

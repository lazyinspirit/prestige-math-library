# frontier-11 — Step 10 rundown, for the owner

Run `frontier-11`. Owner instruction, 2026-08-11: **build the next set of
non-topology A/B pairs**, orchestrate steps 0 → 10, stop at the owner pause.

**Nothing here is published.** Every page is `status: draft`. Flipping status is
yours.

---

## 1. What was built

**Nine A/B pairs, 240 items across 18 pages, from 466 harvested source headings.**

| order | pair | A+B |
|---|---|---|
| 54 | `field-extensions-and-the-complex-numbers` | 21+7 |
| 64 | `conjugacy-and-simplicity-in-the-symmetric-groups` | 18+8 |
| 84 | `the-determinant-of-a-linear-operator` | 20+8 |
| 178.1 | `the-integral-logarithm-and-its-characterisations` | 19+5 |
| 181 | `arc-length-and-rectifiable-curves` | 15+8 |
| 193 | `formal-power-series` | 22+9 |
| 219 | `extremal-graph-theory` | 20+9 |
| 239 | `the-fundamental-theorems-of-calculus` | 10+6 |
| 361 | `universal-properties-and-the-yoneda-lemma` | 21+14 |

For scale: the run that triggered the current richness apparatus averaged about
four items per page. This one averages just over thirteen.

**Topology was excluded per your scope.** Orders 277, 285, 287 and 293 remain on
the frontier for a later build.

## 2. The standing scope obligation is discharged — pending your audit

**`the-integral-logarithm-and-its-characterisations` (178.1/178.2) closes all
three RA-27b gaps**, verified independently by a reader who did not author it:

1. **Integral-first construction.** `L(x) := ∫₁ˣ dt/t` developed with **no
   reference to `exp` in any proof** — derivative and normalisation, monotonicity,
   the product law by differentiating `x ↦ L(xy) − L(x)`, unboundedness,
   bijectivity, then `E := L⁻¹`. The identification is a **single** citation of
   `thm-exponential-ivp-uniqueness`, exactly the "one citation is the whole
   bridge" structure your design specified.
2. **Functional-equation characterisation**, continuous and differentiable forms,
   plus the one-parameter-family corollary.
3. **Equivalence theorem and roadmap remark** — the logarithm's analogue of
   `thm-exponential-definition-equivalence`.

It also carries `cor-e-is-the-unique-unit-hyperbolic-area`, the integral-first
definition of *e*.

**Strike the obligation from `LEVELS.md` §Step 0.5 in the same commit that
publishes this pair** — that is what the rule requires.

## 3. Every fatal mathematical error, by defect type and location

Grouped as `CLAUDE.md` step 10 requires. **Concision must not omit a fatal
defect**, so this section is exhaustive at the stage level.

### 3.1 Invalid inference / logic

| item | location | found by | disposition |
|---|---|---|---|
| `thm-arc-length-is-invariant-under-monotone-reparametrization` | proof | DeepSeek | repaired; now passes both lanes |
| `thm-extremal-graph-supersaturation` | proof | DeepSeek, then Terra on the repair | repaired twice; now passes both lanes |
| `thm-formal-composition-laws` | **Statement — a FALSE associativity theorem** | Alpha refuter | repaired at step 6 |
| `thm-alternating-conjugacy-class-splitting-criterion` | Statement — **false for `n ≤ 1`** | Alpha refuter | hypothesis added, step 6 |
| `lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle` | proof branch structure | readers + both judges | adjudicated nonfatal; branch labels, not a false claim |

### 3.2 False or overstrong definition/theorem

| item | location | found by | disposition |
|---|---|---|---|
| `def-path-polygonal-length-and-rectifiability-in-rn` | **Definition — claimed a *unique* path on the degenerate interval `[a,a]`; there are infinitely many** | Terra | repaired; now passes both lanes |
| `ex-sparse-spikes-ftc-conclusion-at-a-discontinuity` | Example — set `f(0)=1` and claimed `F′(0) ≠ f(0)`, **contradicting its own title and purpose** | reader 1 | rebuilt to spike only at `2⁻ⁿ`; now proves the FTC conclusion *can* hold at a discontinuity |
| `thm-operator-determinant-is-basis-independent` | Statement — asserted a determinant of a `0×0` matrix, but the published matrix determinant is defined only for `n ≥ 1` | reader 3 | narrowed to positive dimension; Alpha confirmed |
| `ex-doubling-integers-has-nonunit-determinant` | **title** — "only over ℚ" is false; `[2]` is invertible over ℝ and ℤ/3ℤ | reader 3 | retitled; Alpha confirmed |

### 3.3 Incorrect dependency citation

| item | location | found by | disposition |
|---|---|---|---|
| `thm-rectifiable-iff-coordinate-functions-have-bounded-variation` | Statement — indexed ℝⁿ coordinates `1..n` where **this library indexes `0..n−1`** | both lanes | repaired; a residual Terra objection was adjudicated nonfatal |
| `thm-extremal-graph-supersaturation` | proof — step cited only step 1.1 and `given` | Terra | repaired |
| 6 rows across `extremal` and `formal-series` | Facts blocks | Alpha refuters | repaired at step 6 |
| ~15 in the determinant pair, 6 in the logarithm pair, several in Yoneda | contract quotes truncated before the clause they support | refuters + reader 5 | repaired in the artifact-only round |

### 3.4 Missing hypothesis

Recurring across the judge sweep — an IVT restated without `a ≤ b`, integrability
conditions dropped from cited theorems, positive-dimension hypotheses not
retained. **All adjudicated: 110 `confirmed_nonfatal`, 6 `false_positive`.** Under
R1 none licensed an edit, and none was edited.

### 3.5 Stage totals

- **Step 6a, five independent readers:** 73 items repaired; reader 1 nine fatal,
  reader 3 fatal in 12 items, reader 5 fatal in 15 of 20.
- **Step 6b, Alpha + 8 read-only refuters:** 2 false claims found that all five
  readers had missed.
- **Steps 8 and 8b:** 122 adjudications — **6 `confirmed_fatal` rows over 4
  distinct items**, 110 nonfatal, 6 false positive.

## 4. Judge comparison — the two models disagreed a lot

| lane | keep | reject |
|---|---|---|
| GPT 5.6 Terra | 150 | 89 (37%) |
| DeepSeek V4 Pro | 208 | 31 (13%) |

478 verdicts over 239 items in the main sweep, **zero nulls** — no capacity
refusal was ever mistaken for a verdict. 140 items took a clean paired pass on
the first sweep; 21 were rejected by both lanes; 78 split.

**Terra rejects at nearly 3× DeepSeek's rate.** Both of the false claims that only
Alpha's refuters caught were missed by both judges, and one fatal
(`thm-extremal-graph-supersaturation`) was caught by DeepSeek first and then by
Terra on the repair. Neither lane dominates; the pairing is doing real work.

## 5. Deviations and decisions you should see

- **D12 — you approved rewriting four published items.** The ℂ construction moved
  from the plane ℝ² to the stem field ℝ[x]/(x²+1). I first described this to you
  as a citation-neutral relocation; **that was wrong**, Alpha proved it, and you
  re-decided on the corrected premise. A pure relocation was impossible: the
  published conjugation lemma took the triangle inequality from order-167 p-norm
  machinery that order 54 cannot legally cite. It now derives it from Lagrange's
  identity with inputs at order ≤ 9.
- **D8 — a deviation from the letter of your RA-27b design.** It asks the B page
  to cite `ex-alternating-harmonic-series-sums-to-log-two`, but that id lives on a
  B page and B pages may not be formal dependencies. The A-page theorem is cited
  instead and the specialisation proved inline.
- **D13 — `depcheck --pending-audit-ok` used from step 5 to step 10.** Measured,
  not assumed: unsuppressed, depcheck errors were exactly 4 `published-unaudited`
  on exactly the four re-homed items. The window closes when you audit them.
- **D17 — an orchestrator miss.** I never took the `after-authoring` touchlog
  snapshot, so the step-6 `impact-audit` gate cannot run as written. Substitute
  measurement: among pre-existing items **exactly 4 changed public surface** — the
  D1 items — and nothing else.
- **D10 — for your decision, not this run's work.** The library **uses a
  field-of-fractions construction it never built**: no such page exists in
  `plan-spec.json` and no item defines it, yet published
  `cex-ordered-field-not-archimedean` and `ex-rational-function-field-order` both
  open "Given: … the field of fractions of ℝ[t]". Natural home is orders 46–50,
  all published and closed.

## 6. Three gates reported green while verifying nothing

The most important finding of this run is about the apparatus, not the content.

1. **`finite-smoke` — 0 checks executed.** Only four checks are registered, all
   graph-theoretic; none models this level's algebra, analysis or category theory.
   It passed a 240-item level having verified nothing. Batch 1's fourteen proposed
   enumerations are preserved verbatim in the contracts' `degenerate` dispositions.
2. **`proof-contract --strict` — 206/206, over an unsound record.** It verifies a
   quote exists in the named section, **not that the quote supports the fact**. Under
   that green light sat 181 + 174 rows whose "evidence" was an instruction ("Step
   1.1 *must* isolate…"), 137 quotes truncated before their clause, and `iff` rows
   marked `not_applicable` on genuine biconditionals. Alpha found it; an
   artifact-only round fixed it; Alpha then verified **exhaustively** — 870/870
   citation rows verbatim, 0 fabricated, 0 of 650 boundary rows naming a
   nonexistent step.
3. **`rendercheck` was silently skipping** until `katex` and `yaml` were installed
   at the start of this run. It then immediately caught `|z|\ge0,qquad` — a missing
   backslash that would have published the literal letters "qquad" into a proof.

**And a fourth hole the receipt gate caught at the very end:**
`cex-the-koch-curve-is-not-rectifiable`, built by a reader at step 6 to discharge
D16, was never spliced into `plan-spec.json`. The judge sweep resolves items
through the spec, so **it was judged by neither lane** and would have shipped
unjudged. Only `level-coverage --verify-current-context` reported it. It has been
spliced and judged.

## 7. Twice-touched

`touchlog` reports **4 items repaired more than once**. `thm-extremal-graph-
supersaturation` was repaired at step 8 and again at step 8b. The escalation is
advisory and is recorded here rather than actioned.

## 8. Gate state at the pause

Green: `precheck`, `fwdcheck`, `extcheck`, `rendercheck`, `prosecheck`,
`citecheck`, `depsource`, `validate-plan`, `proof-contract --strict` (206/206),
`finite-smoke`, `risk-report --require-reviewed` (on Alpha's 150 `risk_review`
records), `content-policy` (240 scoped, 0 errors), `audit-manifest`,
`coverage-checklist` (9 pages, 0 errors), `spine-audit` (60/60 read, 0 defects),
`step8-guard` (4/4 then 1/1 licensed).

Not green, both recorded deviations: `depcheck` (D13 window) and `impact-audit`
(D17 missing baseline).

## 9. What is yours to do

1. **Audit and publish** — flip `status: published` on the nine pairs, and set
   `verification.audited` on the four rewritten ℂ items, which closes D13.
2. **In the same publish commit**, remove the four ℂ ids from
   `library/real-analysis/the-complex-exponential-and-eulers-formula.md`. Until
   then plan-spec homes them on order 54 while disk homes them on 189 — the
   receipted split state. **Alpha's D15 warning matters here: the `[rehome]` line
   disappearing from `validate-plan` is not proof the move landed**, because
   `homePageOf` keeps the first hit walking `library/` and `abstract-algebra`
   sorts before `real-analysis`. The only proof is order 189's page file no longer
   listing them.
3. **Strike the RA-27b obligation** from `LEVELS.md` in that same commit.
4. **Decide on D10** — the unbuilt field of fractions that two published items
   already assume.
5. **Nothing is pushed.** GitHub is backup only and remains your call.

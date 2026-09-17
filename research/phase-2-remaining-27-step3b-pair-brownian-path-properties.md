# Step 3b — scaffold audit and authoring: `brownian-path-properties`

- Run `phase-2-remaining-27`, role alpha-high, label
  `step3b-pair-brownian-path-properties-4cf68cb9d48ea946`, batch 7.
- Owned pair: A `brownian-path-properties` (order 288.135, 20 items) and
  B `brownian-path-properties-examples` (order 288.136, 8 items).
- The other pair in the shared batch file,
  `brownian-motion-markov-properties-and-hitting-times`, is owned by a sibling
  dispatch and was authored separately; its 29 manifest rows and 29 proof
  contracts were preserved untouched (only the shared file's whitespace was
  renormalised), and the sibling's `def-brownian-motion-started-at-x` supplier
  is consumed as-is.
- Status: **all 28 items authored and closed; all batch checks green; no open
  obligation for this pair.** No new items were added (the three local helpers
  were already scaffolded in Step 1), no pair was added, no published content
  was edited.

## 1. Read and decide

Sources of authority read before authoring: `CLAUDE.md`, `SCHEMA.md`,
`research/phase-2-remaining-27-owner-authoring-direction.md` (general
complete-local-proof rule; no PT-20-specific amendment),
`research/phase-2-remaining-27-step3a-pair-brownian-path-properties.md` and its
`sufficient` receipt, `research/plan-probability-track.md` §0A.3 (L271),
§5 PT-20 (L1995–2050), §6 seam (L2211–2212), §7 obligations 38–39
(L2267–2268), §8 choice ledger (L2313), `research/plan-spec.json` pages
562–563, the batch-7 Step-1 notes, the batch-7 coverage, and the sibling
pair's authored items and pages.

Load-bearing sources (batch-7 coverage rows, fetch-verified 2026-09-14):
Durrett PTE5 (`aeac36cbf5e44c53`): Thm 7.1.6, §7.4.1 zero set (perfect and
null), Example 7.4.3/(7.4.7) last-zero law, Thm 8.5.1 with tail bounds
(8.5.2)/(8.5.3); Lawler (`484521433950aad8`): §2.8 definition, ⟨B⟩ = t,
Thms 2.8.1–2.8.2; Yoshida (`45c08837d249a937`): §6.3 subcritical Hölder,
§6.4 Prop 6.4.1 (the proved α>1/2 statement), Lemmas 6.8.1–6.8.3 and
Prop 6.8.4; Sousi (`e10e5ca4bdb1ee68`): Thm 6.39, whose full proof
(τ_q stopping-time architecture) was read on printed p. 71.

## 2. Scaffold audit, decisions and repairs actually made

1. **Hölder scaffold strategy replaced.** The scaffold's "intersection over
   n of p_C^n" route was written out as a direct two-level estimate (a
   one-half bound on a rational interval forces all n uniform-mesh increments
   below C√h, probability p_C^n with p_C<1); no Borel–Cantelli and no
   uncountable union. Yoshida locator corrected to §6.4 Prop 6.4.1
   (3a observation 1); Durrett remark-after-7.1.6 (observation 2) recorded in
   the counterexample's source line.
2. **p-variation convention supplied inline** (3a observation 3): the B
   example defines V_p(x;[a,b]) as a supremum over partitions and keeps the
   supremal two-variation distinct from the dyadic quadratic sums.
3. **Zero-set perfectness** follows Sousi: τ_q = first zero after a rational
   q, with {τ_q ≤ t} given an explicit countable description (so τ_q is a
   stopping time), recurrence giving τ_q < ∞ a.s., and the immediate-return
   input proved from Blumenthal's 0–1 law plus the atomless symmetric law of
   B_{1/(2n)}; no symmetry theorem about the process was assumed.
4. **LIL**: geometric blocks with the maximum law and the two-sided Mills
   bounds for the upper half, independent blocks with γ = 1/√β at the critical
   exponent for the lower half, and −B exhibited as a standard Brownian motion
   through the published covariance characterisation (not assumed).
5. **Resolvent lemma repaired during authoring.** The first version used
   `cor-ftc-integral-function-differentiable-almost-everywhere`, whose
   hypothesis is Riemann integrability of the integrand; the indicator of an
   open set is not Riemann integrable in general. The Duhamel identity is now
   derived from `thm-open-subsets-of-r-structure` (countable disjoint union of
   order components) together with the absolutely continuous FTC package and
   the Lipschitz-composition argument. This is the only post-authoring repair;
   its consumer `thm-brownian-positive-occupation-proportion-has-the-arcsine-law`
   was re-audited (its body did not change) and both receipts were refreshed.
6. **Other items** were authored from the derived arguments, not from strategy
   text: nowhere differentiability with the explicit DEK constants; direct
   total-variation proof deliberately avoiding the published
   bounded-variation-differentiability item; dyadic and uniform quadratic
   variation via the second/fourth Gaussian moments and Kolmogorov's maximal
   inequality; zero-set nullity by Tonelli; uncountability by the perfect-set
   theorem with a rational point outside Z; last-zero arcsine law by
   conditioning at u, the maximum law and a planar Gaussian angle
   computation; occupation arcsine law by transform matching and
   Stone–Weierstrass uniqueness.
7. **No prerequisite was missing** and no escalation was required: all
   suppliers exist either as published items or as batch-7 sibling items, and
   every published supplier's exact statement was read before use.

## 3. Registrations

- `items/<id>.md`: 28 files created (20 A + 8 B), each with Statement/Given,
  Facts & Assumptions with exact citations, and a complete proof,
  verification or witness; `rem-` and the two definitions carry no proof body.
- `library/probability/brownian-path-properties.md` (20 items) and
  `library/probability/brownian-path-properties-examples.md` (8 examples).
- `research/phase-2-remaining-27-batch-7.pages.json`: my 28 rows' `deps` synced
  to the suppliers actually used; sibling rows preserved.
- `research/phase-2-remaining-27-batch-7.coverage.json`: seven new `contents`
  rows (infinite total variation, uniform quadratic variation, p-variation
  threshold, critical-boundary failure, LIL square-root consequence, zero-set
  contrast) and the corrected Yoshida locator for the one-half item.
- `research/phase-2-remaining-27-batch-7.proof-contracts.json`: 28 new v1
  contracts (scope now 57) with exact section quotes, per-step inputs and the
  eight-case boundary worksheet.
- `research/phase-2-remaining-27-step3b-review-<id>.json`: 28 non-owner
  `repaired` receipts, confidence 1, examined dependency arrays, current hashes.
- `research/phase-2-remaining-27-batch-7.cross-batch-dependencies.json` remains
  `[]` (correct: no cross-batch supplier of this pair), and
  `tools/frontier-dependency-ledger.mjs refresh` was run after the last edit.

## 4. Checks actually run (final state)

| Check | Result |
|---|---|
| `tools/tsx-run.mjs tools/precheck.mts <28 item paths>` | 25 checked, 0 failing (2 definitions and 1 remark have no proof body) |
| `node tools/rendercheck.mjs <28 items + 2 pages>` | OK — 30 files, no defects |
| `node tools/content-policy.mjs research/phase-2-remaining-27-batch-7.pages.json` | 57 scoped items, 0 errors, 0 warnings |
| `node tools/proof-contract.mjs …batch-7.proof-contracts.json --strict` | 0 errors, 2 warnings (both on sibling items), 57/57 checked |
| `node tools/manifest-deps.mjs …batch-7.pages.json` | 57 items, 0 missing, 0 errors |
| `node tools/coverage-checklist.mjs …batch-7.coverage.json` | 2 pages, 45 harvested results, 0 errors |
| `node tools/source-backing.mjs --coverage … --liveness …--require-verified` | 40 authored results, every one backed |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK — acyclic, no forward or B-page edges among the 1138 pages with item lists |
| `node tools/pathcheck.mjs` | 0 errors (31 pre-existing warnings, none on this pair) |
| `node tools/depcheck.mjs --quiet` | my 28 items clean; the three run-wide errors are in other groups' in-flight drafts |
| `node tools/step3-decisions.mjs check --phase final` | pair scope closed; all 28 owned items closed |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed; batch-7 input stays `[]` |

## 5. Published-item concerns (for the owner; ledger not edited here)

1. **`thm-bv-functions-are-differentiable-almost-everywhere`** (published):
   states Countable Choice but its direct dependency list omits
   `def-countable-choice` (recorded in the batch-7 Step-1 notes as pre-existing
   metadata debt). Confidence: high, metadata only. This pair does not consume
   it; the total-variation proof is direct. Recommended repair: add the missing
   dependency in Phase 3 metadata. Suspicion versus defect: confirmed metadata
   gap, no mathematical defect claimed.
2. **`cor-ftc-integral-function-differentiable-almost-everywhere`** (published):
   its hypothesis is Riemann integrability of the integrand; no defect, but the
   hypothesis is easy to overstep (the first draft of the resolvent lemma did),
   so it is recorded as a usage caveat for other authors.
3. **Sibling draft observation (not edited):**
   `cex-strong-markov-fails-at-a-nonstopping-random-time` on the batch-7 sibling
   B page is flagged by `depcheck` with `cited-not-in-deps` for
   `lem-brownian-transition-semigroup-property`. That file belongs to the
   sibling pair; the owner should route the one-line declaration fix.

No published item used by this pair was found mathematically defective.

## 6. Open obligations and Step-4 notes

- **Step 4 splice:** `research/plan-spec.json` still carries empty item lists for
  orders 288.135/288.136; the 20 + 8 items are listed in the batch-7 manifest
  rows and in the two page files, with `def-quadratic-variation-along-a-partition-sequence`
  before its consumers and the three local lemmas before theirs.
- **Run-wide, not this pair:** 481 planned pages still have empty item lists,
  and the depcheck/fwdcheck errors listed above belong to other groups'
  in-flight drafts.
- **No owner-held escalation for this pair.** No unresolved mathematical
  uncertainty remains in the 28 items; the only uncertainty recorded during
  authoring (the Riemann-integrability hypothesis above) was resolved locally
  by re-proving the step from the open-set structure theorem.

## 7. Limits of this work

Item-level proofs, choice accounting and dependency adequacy were established
by my own reading and computation, checked mechanically by precheck,
rendercheck, the strict proof-contract gate, content-policy, depcheck and the
batch gates; they have **not** been independently reviewed (that is Step 5).
I read the exact statements of every published supplier used and the complete
relevant source passages for the load-bearing results; I did not re-verify the
internal proofs of published items, and the sibling pair's proofs were read at
statement level with a structural skim of the two items this pair consumes most
(strong Markov, future-path Markov).

# Step 3a reader report — batch 28

Run: `statistical-models-experiments-62`  
Role: reader  
Scope: batch `28`

## Opened inventory

Assigned pages, both opened:

- `library/statistical-models-and-experiments/event-time-censoring-and-truncation.md` (A page, draft)
- `library/statistical-models-and-experiments/event-time-censoring-and-truncation-examples.md` (B page, draft)

Assigned items, reviewed supplier-first:

1. `items/def-event-time-observation-schemes.md`
2. `items/thm-likelihood-contributions-under-censoring-and-delayed-entry.md`
3. `items/cex-informative-censoring-does-not-identify-event-law.md`
4. `items/ex-event-time-observation-likelihoods-and-delayed-entry.md`

Direct dependencies opened to check the definitions and proof facts used by the assigned items:

- Probability kernels and conditional laws: `def-standard-borel-space`, `def-measure-kernel-and-probability-kernel`, `def-conditional-law-given-a-random-element`, `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets`, `lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable`, `def-conditional-independence-given-a-sigma-algebra`, `def-axiom-of-choice`, and `def-countable-choice`.
- Experiments and likelihoods: `def-statistical-experiment`, `def-parametric-statistical-model`, `def-scientific-statistical-model-contract`, `def-dominated-statistical-experiment`, `def-likelihood-density`, and `def-law-or-distribution-of-a-random-element`.
- Countability, product measures, and distribution functions: `thm-rationals-countable`, `thm-product-of-countable`, `thm-seven-generators-of-the-borel-sigma-algebra-on-r`, `thm-dynkin-pi-lambda`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `def-distribution-function-of-a-borel-measure-on-r`, `thm-lebesgue-stieltjes-correspondence-with-distribution-functions`, and `thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures`.
- Also consulted, but did not rely on, `lem-finite-products-of-standard-borel-spaces-are-standard-borel` while checking the pair-target prerequisite.
- Consulted the RCD supplier's transitive real-completeness prerequisite, `thm-reals-cauchy-complete`, to check the coordinatewise completeness argument in the repair.

## Review and repairs

- `def-event-time-observation-schemes`: the observation maps, endpoint conventions, and distinction between censoring after sampling and truncation before inclusion are coherent. The independence clauses are explicitly model assumptions. No edit was needed.
- `thm-likelihood-contributions-under-censoring-and-delayed-entry`: the right-censoring branch densities follow from the conditional product law, the interval and atom formulas preserve the stated endpoint conventions, and the delayed-entry ratios are correct under the stated parameter-distinct entry model and positivity condition. I repaired three proof/statement gaps:
  1. Replaced “on the support” in the delayed-entry positivity condition with positivity almost everywhere under each parameter pair's pre-selection law. The conditioning formula only needs an almost-surely positive denominator; the original phrase did not specify a topology or an essential-support convention. The proof contract's endpoint boundary now records the clarified condition.
  2. Expanded proof step 1.1 to establish that `[0,∞)` and `[0,∞)^2` are standard Borel before invoking the RCD supplier for `(T,C)`. The completeness argument is coordinatewise, and separability follows from the rational-ray generators and countability facts already in the theorem's dependencies.
  3. Added step 1.5 proving joint measurability of the event and censoring tails by rational dyadic threshold approximations and continuity of probability measures. Steps 3.1–3.2 now use that result to justify the displayed branch densities as jointly measurable functions. The proof contract records the new step and its uses.
- `cex-informative-censoring-does-not-identify-event-law`: both finite models yield the same two-point observed law while their event laws differ; the separate uniform truncation calculation is correct. No edit was needed.
- `ex-event-time-observation-likelihoods-and-delayed-entry`: the exponential distribution, censoring branches, interval/current-status factors, delayed-entry normalization, and strict right-truncation normalization are computed correctly. No edit was needed.

No stale `verification.judge` record was present on the repaired theorem. Its existing `verification.precheck` was retained.

## Source checks

- Qiqing Yu, *Survival Analysis*, `https://people.math.binghamton.edu/qyu/ftp/surv5.pdf`: §1.2.2 states the right-censoring observation as the minimum and event indicator under independence; §1.3 gives the current-status setup; §2.1 defines the survival function as `P(X>t)` and distinguishes `P(X≥t)`. These passages support the conventions used here.
- Lu Tian, *STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions*, `https://web.stanford.edu/~lutian/coursepdf/unit2.pdf`: §2.1 (PDF pp. 1–3) gives the exact/right-censored likelihood factors under fixed or independent censoring; §2.2 (PDF pp. 4–5) gives the exponential specialization.
- Jeff Lin, *Chapter 2: Survival Function, Censoring and Truncation*, `https://web.ntpu.edu.tw/~stou/class/tku/07EN02SurvBasicPPT.pdf`: slides 83–85 cover left truncation/delayed entry, slides 86–91 cover right truncation and examples, slide 95 lists event, interval, and truncation factors, and slides 100–101 give the left- and right-truncation likelihood forms. The slide 101 right-truncation convention is `T≤R`; the theorem's strict `T<R` version is proved from `F(R^-)`, and the cited continuous-density specialization agrees.

## Page verdicts

- `event-time-censoring-and-truncation`: **Pass.** Its summary accurately describes the observation schemes, assumption status, endpoint care, conditional scope, and limits on empirical conclusions.
- `event-time-censoring-and-truncation-examples`: **Pass.** Its summary matches the finite informative-censoring counterexample and the exponential and uniform calculations.

## Uneditable defects and blocker

No confirmed defect remained outside the authorized edit scope. No proposed withdrawal is indicated. No blocker.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-likelihood-contributions-under-censoring-and-delayed-entry.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-likelihood-contributions-under-censoring-and-delayed-entry.md` — pass; 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/thm-likelihood-contributions-under-censoring-and-delayed-entry.md` — 1 item, 11 steps, 0 defects.

## Coverage limitation

The review covered batch 28 and the direct dependency claims and proof passages needed for its statements, plus the real-completeness statement used by the RCD supplier. It did not re-audit the complete transitive dependency closures behind those suppliers.

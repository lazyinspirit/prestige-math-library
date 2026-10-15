# Step 3a reader report — batch 13

Run: `bayesian-computational-statistics-62`  
Role: reader  
Batch: `13`

## Opened inventory

Assigned pages read in full:

- A page `parametric-bernstein-von-mises-and-misspecification`
- B page `parametric-bernstein-von-mises-and-misspecification-examples`

All nine assigned item files were read in full. In the A frontier, the dependency order was the local empirical-process lemma and general LAN-to-BvM theorem, then the QMD corollary and misspecified iid likelihood-expansion theorem, then the misspecified BvM corollary and approximate-MLE theorem. The three B examples were read with their external suppliers.

- `lem-local-lipschitz-class-empirical-process-bound`
- `thm-lan-implies-total-variation-bvm`
- `cor-qmd-ac-component-lan-to-bvm`
- `thm-misspecified-iid-lan-under-kv-smoothness`
- `cor-misspecified-iid-bvm-under-kv-regularity`
- `thm-misspecified-mle-sandwich-expansion`
- `ex-regular-normal-model-bvm`
- `ex-normal-working-model-misspecified-coverage`
- `ex-boundary-normal-mean-truncated-posterior`

The supporting published item statements and proof passages needed for these uses were opened, including the iid and independence definitions, finite-product measure theorem, dominated-experiment and likelihood-density definitions, multivariate-normal law and density, stochastic-order definitions, QMD path and its score/singular-mass/normalized-proxy suppliers, fixed-sequence QMD-to-LAN theorem and LAN definition, multivariate and scalar iid CLTs, Slutsky and stochastic-order results, total-variation definition, Portmanteau theorem, and standard-normal density normalization. The page-level prerequisite pages `misspecified-posterior-consistency`, `local-asymptotic-normality-contiguity-and-efficiency`, and `mixed-effects-and-longitudinal-models` were also opened. The BCS consistency page is a contextual page prerequisite; its theorem is not in any assigned item's `deps`/`justified_by` closure.

## Review and edits

The arguments support their stated hypotheses. In particular, the QMD corollary keeps compact-uniform proxy LAN as an additional premise and separately transfers it to the actual likelihood; the fixed-sequence QMD-to-LAN supplier does not provide that uniform premise. The misspecified BvM corollary passes the score sum `S_n` to the general BvM theorem, yielding center `V^{-1}S_n`, and retains the parameter-rate contraction assumption. The MLE theorem separately assumes consistency and approximate maximization. The example calculations and the boundary total-variation witness are correct.

The cited Kleijn–van der Vaart paper was independently checked at the relevant full-text locations: §2.1, LAN condition and Theorem 2.1 (printed pp. 357–359); §2.2, Lemma 2.1 and proof (pp. 360–361), Lemma 2.2 (pp. 361–362), and Example 2.1 (p. 362). [Full paper PDF](https://pure.uva.nl/ws/files/1850322/114737_376240.pdf). Its misspecified “stochastic LAN” convention uses a bounded-in-probability centering vector in the compact likelihood expansion and does not require that vector's covariance to equal the curvature matrix. That convention matches the cited misspecified theorem here; its downstream BvM consumer uses the displayed score-sum expansion directly. No title or claim change was warranted.

I made concise proof repairs in five assigned items to state probability-tail steps explicitly:

- `thm-lan-implies-total-variation-bvm`, step 1.3: derived the centered Gaussian tail limit from countable additivity by writing the decreasing tails as tails of a convergent series.
- `thm-misspecified-iid-lan-under-kv-smoothness`, step 4.1: added the pointwise square-indicator bound that gives boundedness in probability from the score-sum second moment.
- `thm-misspecified-mle-sandwich-expansion`, step 2.1: derived the probability bound for each dyadic shell from `a 1_{Z≥a} ≤ Z` before applying the empirical-process expectation bound.
- `ex-regular-normal-model-bvm`, step 1.1: stated the square-indicator bound used for the central sequence's second-moment tail.
- `ex-normal-working-model-misspecified-coverage`, steps 1.1 and 1.2: stated the corresponding square-indicator bounds for the scaled sample mean and consistency.

The five affected proof-contract derivations were synchronized. I also corrected the `zero` boundary note for `thm-misspecified-iid-lan-under-kv-smoothness`, which referred to nonexistent step 2.2 (the item has step 2.1). No changed item had a `verification.judge` record to remove.

Validation after the edits:

- Reflow: all five commands exited 0 and reported `unchanged`.
- Precheck: all five items passed, with zero failures.
- Final `node tools/proof-layout.mjs` batch: 5 items, 24 steps, 0 defects.

## Page verdicts

- **A page — pass.** Its summary accurately distinguishes the conditional compact-uniform LAN/BvM route, the QMD route's separate compact-uniform premise, the explicit posterior-rate condition, and the separate MLE assumptions. The third listed page prerequisite houses the Gaussian-density supplier used by the page's BvM results.
- **B page — pass.** The regular normal example computes the exact normal posterior and vanishing total-variation error; the misspecified normal example gives the stated coverage formula; the boundary example computes the truncated posterior and a total-variation lower bound that stays at least `1/2` with limiting probability `1/2`.

## Findings and blocker

No confirmed mathematical defect remains in an uneditable assigned item or page. The contextual BCS consistency page remains draft; it is not in any assigned item's dependency closure, so it is not reported as an item-level dependency finding. On the final status recheck, autopilot still listed batch 13 as missing Step 3a reader coverage/artifacts even though both required report paths existed on disk; no in-flight dispatch was visible. This is an operational handoff note, not a mathematical blocker, and I did not modify autopilot state.

Coverage limitation: I reviewed the dependency statements and the proof portions actually needed to verify the assigned claims, plus the cited full-text section above. I did not re-audit every transitive proof of all already-published foundational suppliers or every item placed on the contextual prerequisite pages.

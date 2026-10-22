# Step 3a reader report — batch 94

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `94`

## Opened inventory

Assigned pages:

- `csm-frontier-fluctuation-theorems` — A page; requires `csm-stochastic-response` and `csm-frontier-large-deviation-ensembles`.
- `csm-frontier-fluctuation-theorems-examples` — B page; requires the A page.

Assigned items, in the manifest dependency-level order:

- Level 0: `def-csm-frontier-finite-rate-process`.
- Level 1: `lem-csm-frontier-finite-jump-path-density`.
- Level 2: `thm-csm-frontier-finite-rate-forward-equation`, `lem-csm-frontier-finite-rate-jump-count-expectation`, `lem-csm-frontier-finite-jump-feynman-kac`.
- Level 3: `def-csm-frontier-stationary-path-entropy`, `thm-csm-frontier-finite-jarzynski`.
- Level 4: `thm-csm-frontier-finite-path-fluctuation`.
- Level 5: `ex-csm-frontier-biased-ring-entropy`.

All nine item bodies and the two assigned page carriers were opened. I also opened the two required page carriers. The published `csm-stochastic-response` page was inspected at the page-interface level. The draft `csm-frontier-large-deviation-ensembles` page and its requirement were inspected; its large-deviation results are not used in any assigned proof.

The 26 direct external mathematical item suppliers were opened for their relevant Definition/Statement and current proof-status metadata: `def-probability-measure`, `def-random-element-and-real-random-variable`, `def-countable-choice`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `thm-lebesgue-measure-is-a-complete-measure`, `def-oriented-integral`, `thm-ftc-first-part`, `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-of-archimedean`, `thm-monotone-convergence-for-the-integral`, `def-natural-logarithm`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-logarithm-derivative-and-integral`, `cor-mean-value-theorem`, `def-nonnegative-lebesgue-integral`, `thm-continuous-preimages-of-borel-sets-are-borel`, `thm-linear-change-of-variables-for-lebesgue-measure`, `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`, `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-exponential-addition-formula`, `thm-linearity-of-the-integral`, and `thm-natural-logarithm-laws`. These suppliers are marked `published`; their stated hypotheses used by the batch arguments include Countable Choice for the Lebesgue construction, completeness, finite-measure/product-integral conditions, and the stated differentiability and integrability hypotheses.

## Review findings and repairs

### `def-csm-frontier-stationary-path-entropy`

The original Definition said every jump logarithm was defined because of symmetric support. Symmetric support gives a positive reverse rate when the forward rate is positive; it does not make either rate positive on a transition with both rates zero. Such a finite path has zero density, but the original text assigned a value only to paths with infinitely many jumps, so the statistic was not total on the null set of finite paths containing a zero-rate transition.

I repaired the Definition by using the path-density lemma to state that, almost surely, there are finitely many jumps and each jump uses a positive-rate edge. The statistic is now defined by the displayed sum on that full-measure set and assigned value zero on its null complement. The lemma's path density vanishes for each finite state sequence containing a zero-rate transition; there are countably many finite state sequences. Nonexplosion excludes infinite-jump paths almost surely. Thus every logarithm is real on the set where the sum is evaluated.

I reviewed the assigned consumer `thm-csm-frontier-finite-path-fluctuation`. Its density ratio is used only on path strata with positive density; a stratum containing a zero-rate transition has zero forward and reverse density under symmetric support. The new null-set convention leaves the path law and the finite-time measure identities unchanged, and it makes the time-reversal statement on the null complement consistent. I also reviewed `ex-csm-frontier-biased-ring-entropy`, the other current consumer found in the assigned scope. Its pathwise formula was clarified to hold almost surely.

### `ex-csm-frontier-biased-ring-entropy`

The displayed formula for `S_T` depends on all jumps being clockwise or counterclockwise. The rate specification assigns zero to every other edge, so that condition holds almost surely under the stated jump law. I added “almost surely” to the Example and its proof, and explicitly cited the rate definition and path-entropy definition for this restriction. The stationary law, jump-count means, entropy mean, detailed-balance characterization, and finite-time fluctuation identity are correct under the stated assumptions.

Updated `research/physics-non-fluid-129-2026-10-21-r2-batch-94.proof-contracts.json` for the revised definition interface, null-set boundary, and the ring example's Step 1.2 derivation/citation inputs. Neither repaired item had a `verification.judge` record, so there was no stale judge stamp to remove. No dependencies or page interfaces changed.

No other confirmed defect requiring owner disposition was found.

## Source checks

The local arguments supply the batch's mathematical deductions. Source consultation was used to check context and citation scope, not as a replacement for those arguments:

- Udo Seifert, *Stochastic thermodynamics: From principles to the cost of precision* (2017), [arXiv:1707.03759](https://arxiv.org/pdf/1707.03759): §4.1, PDF p. 6, gives finite-jump trajectory weights including the no-jump case; §4.2, PDF p. 6, compares a trajectory with its time reversal; §5.1, PDF p. 8, treats the asymmetric random walk and its forward/backward jump-count means. The ring example is calculated locally; the source's walk is not the finite ring.
- Udo Seifert, *Stochastic thermodynamics, fluctuation theorems, and molecular machines* (2012), [arXiv:1205.4176](https://arxiv.org/pdf/1205.4176): §4.3, PDF p. 13, gives integral fluctuation relations from the master relation; §6.1.1, PDF p. 18, states the discrete-state master equation. These are contextual sources; the finite-state proofs here are local.
- Joel L. Lebowitz and Herbert Spohn, *A Gallavotti–Cohen Type Symmetry in the Large Deviation Functional for Stochastic Dynamics* (1999), [arXiv:cond-mat/9811220](https://arxiv.org/pdf/cond-mat/9811220): §§2.1–2.2, PDF pp. 3–7, treat finite-state stationary jump paths, the action functional and time reversal. Their scaled-cumulant/large-deviation symmetry is a long-time result, not the batch's finite-time theorem; the item states this distinction.
- Christopher Jarzynski, *Equilibrium free-energy differences from nonequilibrium measurements: A master-equation approach* (1997), [Phys. Rev. E 56, 5018](https://journals.aps.org/pre/pdf/10.1103/PhysRevE.56.5018): §§I–II, PDF pp. 1–7, state Markov and detailed-balance assumptions and derive the weighted master-equation work identity. The batch proves its finite-state specialization from its local Feynman–Kac lemma.
- Gavin E. Crooks, *Entropy production fluctuation theorem and the nonequilibrium work relation for free energy differences* (1999), [Phys. Rev. E 60, 2721](https://journals.aps.org/pre/pdf/10.1103/PhysRevE.60.2721): §§II–III, PDF pp. 2–3, give the stochastic microscopic-reversibility relation and the work relation under the paper's stated equilibrium setup.
- Hugo Touchette, *The large deviation approach to statistical mechanics* (2009), [arXiv:0804.0327](https://arxiv.org/pdf/0804.0327): Example VI.10, printed pp. 71–72 / PDF pp. 71–72, treats a discrete-time ergodic Markov chain and its asymptotic fluctuation symmetry. The item uses this only as long-time context.

## Validation after repair

- Reflow: `def-csm-frontier-stationary-path-entropy` and `ex-csm-frontier-biased-ring-entropy` both reported unchanged.
- Precheck: the definition had 0 proof steps to check; the example passed with 1 proof-bearing item checked and 0 failures.
- Final proof-layout command on the two changed items: `2 items, 5 steps, 0 defects`.

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `csm-frontier-fluctuation-theorems` | Pass after repair | Draft A-page inventory and requirements match the assigned eight items. All eight item claims and proofs were reviewed. The finite-time fluctuation theorem is derived locally and does not rely on the required large-deviation page for proof. |
| `csm-frontier-fluctuation-theorems-examples` | Pass after repair | Draft B-page inventory matches its assigned example, which now states the path formula almost surely. The companion-page dependency is the assigned A page. |

No TikZ or tikzcd diagrams occur in the assigned pages or item bodies. No mathematical blocker remains.

## Coverage limitation

The first navigation pass opened the local finite-rate definition before its external mathematical suppliers; I inspected the supplier statements/status before making the final mathematical assessments. Therefore I do not claim a strictly supplier-first initial opening order. Required pages outside batch 94 were inspected at page-interface level where they did not supply an assigned proof. No other page items or unrelated batch contents were reviewed.

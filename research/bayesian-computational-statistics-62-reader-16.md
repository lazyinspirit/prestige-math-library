# Step 3a reader report — batch 16

Run: `bayesian-computational-statistics-62`  
Batch: `16`  
Date: 2026-10-15

## Scope and run state

The active autopilot status showed the run in Step 3a read, with no worker in flight. I reviewed the live batch-16 manifest, its two pages, all 16 assigned items, and the current suppliers needed for their arguments. Manifest contracts and earlier run notes were treated as evidence only.

## Opened assigned pages and items

**A page:** [gaussian-process-posterior-contraction](../library/bayesian-computational-statistics/gaussian-process-posterior-contraction.md). Its 10 assigned items were read in the manifest’s supplier-first item order:

- `lem-tight-borel-gaussian-law-has-separable-support`
- `lem-binary-regression-l2-controls-local-likelihood-distances`
- `lem-fixed-design-gaussian-regression-controls-local-likelihood-distances`
- `lem-gaussian-linear-and-quadratic-statistic-tail`
- `lem-independent-observation-posterior-denominator-lower-bound`
- `lem-independent-posterior-splitting-from-tests-and-sieve-tail`
- `lem-nondegenerate-gaussian-small-ball-controls-log-radius`
- `lem-log-gaussian-density-supnorm-controls-local-likelihood-distances`
- `lem-fixed-design-gaussian-regression-exponential-tests`
- `thm-gaussian-process-posterior-contraction`

The summary accurately distinguishes the three sampling models, the universal fixed-design logarithmic floor, and the two qualified sharper-rate cases.

**B page:** [gaussian-process-posterior-contraction-examples](../library/bayesian-computational-statistics/gaussian-process-posterior-contraction-examples.md). All six assigned examples were reviewed:

- `ex-degenerate-gp-phi-does-not-bound-unknown-scale-local-mass`
- `ex-l2-small-log-density-far-in-hellinger`
- `cex-degenerate-gaussian-scale-prior-can-break-arbitrary-concentration-rate`
- `ex-log-gaussian-uniform-density-posterior`
- `ex-binary-regression-logistic-intercept-gp`
- `ex-fixed-design-gaussian-constant-process-and-unknown-scale`

The examples and companion-page summary match their calculations and the theorem’s current qualifications. The scale-mass example correctly distinguishes a failed denominator check from posterior failure; the spiky-prior counterexample establishes the unrestricted sharp-rate failure.

## Supplier inventory and source checks

I opened the Batch-11 `iid-posterior-contraction` page and its current Hellinger definition, denominator lemma, bounded-variance tail lemma, Hellinger-to-TV/L1 lemma, and sieve-testing lemma. Their current statements and proofs support the IID branches and use the stated density and metric conventions.

I opened the Batch-15 `gaussian-process-support-and-concentration` page and the current Gaussian carrier, countable norming, covariance/RKHS well-definedness, Fernique, Cameron–Martin, RKHS compactness, support, concentration-function, finite-dimensional expansion, Banach expansion, and sieve-bound items. In particular, the live `thm-finite-dimensional-gaussian-isoperimetric-expansion` has a complete local proof. The historical Batch-16 author note describing it as unfinished is stale; it was not used as a verdict.

I also opened the published Gaussian even-moment supplier and the exact definition/statement interfaces used from the standard-normal and normal-law, directional KL, relative Hahn–Banach, dominated experiment, likelihood-density, measure-with-density, probability, independence, moment, logarithm/exponential, differentiation, integration, Tonelli, Jensen, variance, Chebyshev, Markov, and related cited items. The current Batch-15 support proof’s use of AC-derived Hahn–Banach was checked against the published dominated-extension proof and dual-norming statement; it remains distinct from Batch-16’s explicit relative Hahn–Banach premise.

Authoritative source checks:

- van der Vaart and van Zanten, [“Rates of contraction of posterior distributions based on Gaussian process priors”](https://arxiv.org/pdf/0806.3024), §§3.1–3.3: Theorems 3.1–3.3 and Lemmas 3.1–3.2. Theorem 3.3 gives only a fixed-design proof sketch; the assigned local likelihood, denominator, and testing arguments supply the details needed here.
- Kleijn, van der Vaart, and van Zanten, [*Lectures on Nonparametric Bayesian Statistics*](https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf), Chapter 12.1, Theorem 12.1 and its proof, and Lemma 12.2 (PDF pp. 79–82): the concentration sieve bounds and normalized log-density comparisons.
- Chafaï and Lehec, [*Logarithmic Sobolev Inequalities Essentials*](https://djalil.chafai.net/docs/M2/chafai-lehec-m2-lsie-lecture-notes.pdf), Chapter 4, Theorem 4.6 and its semigroup-interpolation proof (PDF pp. 47–50): the finite-dimensional Gaussian functional isoperimetric inequality used in the Batch-15 expansion chain. The local proof also supplies the finite-ball and inner-measure passage.
- Borell, [“The Brunn–Minkowski inequality in Gauss space”](https://dornsife.usc.edu/sergey-lototsky/wp-content/uploads/sites/211/2023/06/Borell-Subspace-original.pdf), §3, Theorem 3.1 and its two-step proof (printed pp. 208–210): Gaussian enlargement in finite-dimensional and Banach Gaussian settings.

## Repairs and validation

- In `lem-fixed-design-gaussian-regression-exponential-tests`, step 3.1 now defines the selected finite set of mean-score centers and sets its maximum test to zero when that set is empty. Step 2.1 guarantees a selected center for every mean-separated alternative; the residual-energy tests cover the remaining alternatives. I updated the matching step-3.1 proof-contract derivation. No stale `verification.judge` record was present. Reflow reported unchanged; precheck passed; the final proof-layout run reported 2 changed items in the batch, 6 steps, 0 defects.
- In `lem-independent-posterior-splitting-from-tests-and-sieve-tail`, steps 1.1 and 2.1 now make explicit that Tonelli and the normalized density family give $E_{0,n}D_n\le1$, hence denominator finiteness almost surely, and that zero-evidence fibers can be assigned any posterior-mass value because they lie in the denominator lower-tail event. I updated both matching proof-contract derivations. No stale `verification.judge` record was present. Reflow reported unchanged; precheck passed; it was included in the same final proof-layout run.

No page prose was changed.

## Defects not edited

None. No assigned page or item has an outstanding mathematical defect or proposed withdrawal.

## Page verdicts

- `gaussian-process-posterior-contraction`: no remaining defect; the three branch statements and proof routes are supported after the two proof repairs above.
- `gaussian-process-posterior-contraction-examples`: no defect; all six calculations and the distinction between the proof-gap example and the posterior counterexample are correct.

## Blocker

None.

## Coverage note

The assigned carriers and the current Batch-11/15 supplier bodies needed for the arguments were reviewed; published foundational dependencies were checked at the exact cited definition/statement interfaces rather than independently re-proved through their full dependency closures. One sequencing limitation: I read `lem-log-gaussian-density-supnorm-controls-local-likelihood-distances` before discovering that its Hellinger-definition supplier belongs to Batch 11; I then opened that current supplier and checked it before the final assessment. No dependency remained unreviewed at handoff.

# Step 5a reader report — batch `8`, run `phase-2-remaining-27`

Reader label: `reader-8` (covers 8). Scope: the four pages of
`research/phase-2-remaining-27-batch-8.pages.json` and all 56 items listed
there, plus the direct dependencies opened to verify specific claims.

Run state at the time of reading (`.autopilot/phase-2-remaining-27/state.json`):
stage `5a-read`; all 56 assigned items are in-flight pre-publication drafts, so
repair authority covers in-flight items of this batch and the two A-page prose
carriers. The pages and items were last written at 2026-09-17 19:53–19:54 and
were stable throughout this read.

## Opened inventory

### Pages (all four opened in full)

- A `library/probability/the-ito-integral-with-respect-to-brownian-motion.md` (19 items)
- B `library/probability/the-ito-integral-with-respect-to-brownian-motion-examples.md` (8 items)
- A `library/probability/itos-formula-and-brownian-martingales.md` (21 items)
- B `library/probability/itos-formula-and-brownian-martingales-examples.md` (8 items)

### Items (all 56 opened and read end to end)

Page 1 A: `def-continuous-time-adapted-process-and-martingale`,
`def-progressively-measurable-and-predictable-process`,
`lem-adapted-continuous-processes-are-progressively-measurable`,
`def-elementary-predictable-brownian-integrand`,
`def-ito-integral-of-an-elementary-predictable-process`,
`lem-elementary-ito-integral-is-independent-of-the-step-representation`,
`thm-ito-isometry-for-elementary-integrands`, `lem-cross-ito-isometry`,
`thm-density-of-elementary-predictable-processes-in-predictable-l2`,
`def-ito-integral-for-square-integrable-predictable-processes`,
`lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative`,
`thm-ito-isometry-and-linearity-in-predictable-l2`,
`thm-ito-integral-process-has-a-continuous-martingale-version`,
`thm-doob-maximal-bound-for-the-ito-integral`,
`def-locally-square-integrable-predictable-brownian-integrand`,
`thm-localized-ito-integral`, `thm-stopping-an-ito-integral`,
`thm-quadratic-variation-of-an-ito-integral`,
`cor-deterministic-ito-integrals-are-gaussian`.

Page 1 B: `ex-integral-of-a-deterministic-step-function-against-brownian-motion`,
`ex-integral-of-the-indicator-of-a-stopping-interval`,
`ex-covariance-of-two-deterministic-ito-integrals`,
`ex-integral-of-brownian-motion-against-itself-preview`,
`ex-time-changed-quadratic-variation-of-an-ito-integral`,
`cex-a-nonadapted-step-integrand-breaks-the-ito-isometry`,
`cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral`,
`cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands`.

Page 2 A: `def-continuous-brownian-ito-process`,
`def-quadratic-covariation-of-brownian-ito-processes`,
`thm-quadratic-covariation-of-brownian-ito-processes`,
`thm-integration-by-parts-for-brownian-ito-processes`,
`thm-ito-formula-one-dimensional`,
`thm-multidimensional-ito-formula-for-brownian-driven-processes`,
`cor-brownian-square-martingale`, `cor-exponential-brownian-martingale`,
`thm-space-time-harmonic-functions-yield-brownian-local-martingales`,
`cor-heat-semigroup-martingale`,
`lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t`,
`thm-levy-characterization-of-brownian-motion`,
`cor-vector-levy-characterization`, `def-brownian-generator`,
`thm-dynkin-formula-for-bounded-brownian-stopping`,
`rem-ito-versus-stratonovich-boundary`,
`rem-general-semimartingale-calculus-is-outside-this-block`,
`lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two`,
`thm-brownian-filtration-martingale-representation`,
`cor-square-integrable-brownian-terminal-variables-have-ito-representations`,
`cor-brownian-filtration-local-martingales-have-continuous-versions`.

Page 2 B: `ex-ito-formula-for-brownian-powers`,
`ex-logarithm-of-geometric-brownian-motion`,
`ex-exponential-martingale-and-a-brownian-tail-bound`,
`ex-harmonic-functions-of-planar-brownian-motion`,
`ex-expected-exit-time-from-an-interval-via-ito-formula`,
`ex-brownian-hitting-probability-from-an-exponential-martingale`,
`cex-the-ordinary-chain-rule-fails-for-brownian-motion`,
`cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability`.

### Dependencies opened to verify specific uses

`def-continuous-time-filtration-and-all-pairs-martingale`,
`def-continuous-time-stopping-time`,
`def-quadratic-variation-along-a-partition-sequence`,
`def-law-modification-and-indistinguishability-of-processes`,
`def-natural-and-usual-augmented-brownian-filtrations`,
`def-brownian-motion`, `def-d-dimensional-brownian-motion`,
`def-brownian-motion-started-at-x`, `def-multivariate-normal-law`,
`def-uniformly-integrable-family`, `thm-doob-lp-maximal-inequality`,
`thm-optional-sampling-for-bounded-stopping-times`,
`thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes`,
`thm-two-sided-exit-probability-for-brownian-motion`,
`thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity`,
`thm-blumenthal-zero-one-law`,
`cor-brownian-paths-have-infinite-total-variation-on-every-interval`,
`cor-riemann-stieltjes-existence-bv-continuous`, plus the batch-internal
carriers named in the contracts (items 1–21 of page 2 A) whose statements the
later items consume.

## Repairs made (all in-flight items of this batch)

1. `items/ex-integral-of-brownian-motion-against-itself-preview.md`,
   statement. It read "the integral is not centered and has mean $0$,
   variance …", a self-contradiction, since $(B_t^2-t)/2$ has mean $0$ by
   $EB_t^2=t$. Repaired to "the integral has mean $0$ and variance
   $E(B_t^2-t)^2/4=t^2/2$". Evidence: the item's own step 3.1 computes
   $E(B_t^2-t)^2/4=t^2/2$ and the supplier
   `cor-brownian-square-martingale` gives $E(B_t^2-t)=0$.

2. `items/ex-ito-formula-for-brownian-powers.md`, step 3.1. It listed
   $\partial_xf=3x^2$ for $f(t,x)=x^3-3tx$; the correct partial derivative is
   $\partial_xf=3x^2-3t$. With the listed value the displayed conclusion
   $B_t^3-3tB_t=3\int_0^t(B_s^2-s)\,dB_s$ (which is the true identity, checked
   directly and by the variance $6t^3=9E\int_0^t(B_s^2-s)^2ds$) does not follow;
   with the corrected derivative the drift $-3x+3x=0$ and the stochastic
   coefficient $3(x^2-t)$ give exactly that identity. Repaired.

3. `items/def-quadratic-covariation-of-brownian-ito-processes.md`, clause 4. It
   asserted
   $\sum_k|A_{s_k}-A_{s_{k-1}}|=\int_0^T|a_s|\,ds$ "exactly" for a pathwise
   absolutely continuous $A_t=\int_0^ta_s\,ds$. The equality fails for
   sign-changing $a$ (e.g. $a=\cos$ on $[0,2\pi]$ with the partition
   $\{0,2\pi\}$: left side $0$, right side $4$); the bound actually used is the
   triangle inequality $\le$. Repaired to the inequality; the displayed
   estimate of clause 4 is unchanged and remains valid.

4. `items/thm-quadratic-covariation-of-brownian-ito-processes.md`, fact [F9]
   and step 1.1, same false equality as (3). Repaired to
   $\sum_j|A_{s_{j+1}}-A_{s_j}|\le\int_0^T|a_s|\,ds$ in both places; the
   displayed cross-sum bound of step 1.1 and the conclusion $[A,Y]=0$ are
   unchanged.

5. `items/thm-localized-ito-integral.md`, step 2.1. It called
   $\sigma_m=2^{-m}\lceil2^m\sigma\rceil$ a "finite-valued stopping time" and
   applied step 1.1 to it. For an unbounded $\sigma$ the dyadic ceiling is not
   finite-valued, and step 1.1 (which needs a partition containing all values of
   the stopping time) does not apply. Repaired by taking the dyadic ceiling of
   the bounded stopping time $\sigma\wedge m$: it is finite-valued,
   $\sigma_m\ge\sigma\wedge m$ and $\sigma_m\to\sigma$; step 3.1's limit
   argument (path continuity, the maximal bound [F2], the isometry [F4]) is
   unchanged and now applies as written.

6. `items/thm-stopping-an-ito-integral.md`, step 2.1 and the closing sentence
   of step 4.1. Step 2.1 defined the localizing sequence
   $\rho_k:=\tau\wedge\tau_k$ and claimed $\rho_k\uparrow\infty$ almost surely,
   which is false when $\tau$ is finite (then $\rho_k\uparrow\tau$); the
   characterization [F3] = clause 3 of `thm-localized-ito-integral` requires
   $\rho_k\uparrow\infty$, so it could not be applied to that sequence. Repaired
   by using the canonical times $\rho_k:=\tau_k$ of $H$: they are nondecreasing
   with $\rho_k\uparrow\infty$, and step 1.2 plus the a.e. integrand identity of
   step 2.1 show
   $N^{\tau_k}=(H\cdot B)^{\tau\wedge\tau_k}=\int_0^tG1_{(0,\tau_k]}dB$, with
   $E\int_0^tG_s^21_{(0,\tau_k]}ds\le EA_{t\wedge\tau_k}\le k$. The phrase
   "the localizing sequence $(\tau\wedge\tau_n)$ is canonical" in step 4.1 and
   the stale boundary text are updated to $(\tau_n)$.

7. `items/cor-brownian-filtration-local-martingales-have-continuous-versions.md`,
   frontmatter source URL. The citation pointed at
   `https://diamhomes.ewi.tudelft.nl/~andervaart/books/stochint.pdf`, a
   misspelling of the van der Vaart path used by the other 29 van der Vaart
   citations in this batch (and by 75 items elsewhere in `items/`); the target
   of the citation is otherwise the right one (Theorem 6.6). Repaired to
   `~avandervaart`. No mathematical text changed.

### Contract and validation bookkeeping

- Proof contracts updated in
  `research/phase-2-remaining-27-batch-8.proof-contracts.json` for the changed
  mathematics: derivation `thm-localized-ito-integral` 2.1,
  `thm-stopping-an-ito-integral` 2.1,
  `thm-quadratic-covariation-of-brownian-ito-processes` 1.1, and the
  `zero`/`nonempty-choice` boundary evidence of
  `thm-stopping-an-ito-integral`. (`ex-ito-formula-for-brownian-powers` d3.1
  and `thm-stopping-an-ito-integral` 4.1 are truncated before the changed
  clauses and were left as they stand.)
- No changed item carried a `verification.judge` record, so none had to be
  removed; none of the seven is stamped or certified here.
- `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` for the six changed
  mathematical items and the URL-only item: all "unchanged" (already
  single-physical-line steps).
- `node tools/tsx-run.mjs tools/precheck.mts` on the seven changed items:
  `6 checked, 0 failing — all clean` (the definition carries no phase body).
- Baseline before repair, all 56 items:
  `45 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-8.proof-contracts.json --strict --items <the six changed items>`:
  `0 error(s), 0 warning(s), 6/6 item(s) checked`; the seventh item was checked
  separately (`1/1`, 0 errors, 0 warnings).

## Defects found that were not edited (routed as findings)

1. `thm-brownian-filtration-martingale-representation`, step 4.1. The step
   claims $Z^*$ "as an a.s. class lies in $L^2(\mathcal F^0_T)$ because
   $\mathcal F^0_{T+}\subseteq\mathcal F^0_T$". The inclusion is backwards:
   $\mathcal F^0_T\subseteq\mathcal F^0_{T+}=\bigcap_{u>T}\mathcal F^0_u$, and
   the item's own dependency
   `def-natural-and-usual-augmented-brownian-filtrations` keeps the raw,
   right-limit, completed and augmented families distinct (clause (d), with
   $\mathcal F^0_{0+}\ne\mathcal F^0_0$ in the canonical realization). What the
   completion step needs is the standard fact that the usual augmentation is
   contained in the $P$-completion of the raw time-$T$ sigma-algebra: for
   $A\in\mathcal F_T$ one has $1_A=E[1_A\mid\mathcal F^0_u]$ a.s. for every
   $u>T$ (completion of $\overline{\mathcal F}^0_u$), downward convergence gives
   $1_A=E[1_A\mid\mathcal F^0_{T+}]$ a.s., and Blumenthal's zero-one law applied
   to the Brownian motion restarted at the deterministic time $T$ gives
   $\mathcal F^0_{T+}\subseteq\sigma(\mathcal F^0_T\cup\mathcal N)$ modulo null
   sets; hence every $L^2(\mathcal F_T)$ variable is a.s. equal to the
   $\mathcal F^0_T$-measurable $E[Z\mid\mathcal F^0_T]$, and step 3.1's
   vanishing then gives $Z=0$. Neither the downward convergence step nor the
   restarted Blumenthal step is proved or cited in the item, so as written the
   final conclusion does not follow. The theorem itself is the standard
   representation theorem and is true; the edit is a proof completion requiring
   a new local lemma, which is why it is routed rather than patched here.
   Severity: fatal — the false inclusion is load-bearing, and as written the
   item does not establish the L² clause of its own theorem (the statement
   itself is true, and the completion is feasible using the published
   `thm-reverse-martingale-convergence` together with the restarted Markov and
   Blumenthal steps).

2. `thm-ito-integral-process-has-a-continuous-martingale-version`, step 3.1.
   The step writes $E\sum_n2^na_n^2=\sum_n2^nEa_n^2$ "by monotone convergence
   for the nonnegative series" but cites `[F7, step 2.1]`; the item's fact [F7]
   is the pair "$E|X_n-X|\le\|X_n-X\|_2$ and conditional expectations are
   $L^1$-contractive", while the monotone convergence statement used is [F4]
   ("if $0\le Z_n\uparrow Z$ … then $EZ_n\uparrow EZ$"). The step is sound once
   [F4] is cited; the citation is misattributed. Severity: nonfatal
   (citation-inaccurate).

## Minor observations (checked, judged not defects)

- `thm-density-of-elementary-predictable-processes-in-predictable-l2` [F1] and
  step 1.2 say "the constant process 1 is elementary" and "on the partition
  $0<s<u<T$". Both are shorthand inside a statement whose objects are
  $(\mathrm dt\otimes P)$-classes: the class of the constant $1$ equals that of
  the elementary process $1_{(0,T]}$, and the partition meant is $0<s<u<T$
  extended by the block $(u,T]$. The conclusions are unaffected; no edit made.
- `thm-space-time-harmonic-functions-yield-brownian-local-martingales` clause 2
  states predictability of $\nabla f(\cdot,B)1_{[0,\tau_U)}$ in one clause;
  the standard justification is to define the process as $0$ outside
  $\{s<\tau_U\}$ and note it is the pointwise limit of
  $\nabla f(\cdot,B)1_{[0,\tau_U\wedge\cdot-1/j]}$-type truncations on compact
  horizons. A competent reader closes it at once; the clause's claim is true.
- The four page summaries match the current item content and carry no
  mathematical claim beyond the items they cite.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `the-ito-integral-with-respect-to-brownian-motion` | pass after repairs 5 and 6 (the false finite-valued claim and the misapplied localizing sequence) |
| `the-ito-integral-with-respect-to-brownian-motion-examples` | pass after repair 1; the other seven examples were verified against their cited items |
| `itos-formula-and-brownian-martingales` | pass after repairs 3, 4 and 7, except that the page's closing representation theorem carries a routed fatal proof gap (step 4.1) plus a routed nonfatal citation defect (Doob-version step 3.1) |
| `itos-formula-and-brownian-martingales-examples` | pass after repair 2; the other seven examples were verified against their cited items |

## Blocker

None for this batch. The two routed findings need a local lemma (downward
martingale convergence plus the restarted Blumenthal argument) and a one-token
citation correction respectively; both are inside this batch's carriers and are
handed to the 5b lead because they were left unedited. No item was deleted, no
withdrawal is proposed, and no claim was dropped.

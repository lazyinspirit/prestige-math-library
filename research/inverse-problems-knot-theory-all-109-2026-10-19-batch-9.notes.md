# Batch 9 authoring notes

Run: inverse-problems-knot-theory-all-109-2026-10-19  
Pair: minimax-estimation-over-inverse-source-classes  
Batch level: 3; prerequisite batches: 3 and 8.  
Scheduling input: e2300623247459dd86c58b73b17d0dd60bcefa693cf3d5d05338741842172f7a.

## Inventory and dependency levels

The controlling IP-09 section in research/plan-inverse-problems-track.md
assigns A items thm-ip-general-source-minimax-comparison and
cor-ip-mild-and-severe-estimation-rates; the B leaves are Sobolev, analytic,
and power-source classes. The IP-09 page records in research/plan-spec.json
agree with the plan on page IDs, titles, order, category, companions, and
required pages. Their items: [] entries are unpopulated scaffold inventories,
not a competing item list. The current A/B requires fields are preserved.

The authored inventory, in item dependency order, is:

- Level 3: lem-ip-univariate-gaussian-projection-minimax-comparison.
- Level 5: lem-ip-power-source-class-as-statistical-ellipsoid and
  thm-ip-general-source-minimax-comparison.
- Level 6: cor-ip-mild-and-severe-estimation-rates.
- Level 7: ex-ip-sobolev-minimax-rates, ex-ip-analytic-minimax-rates, and
  ex-ip-power-source-minimax-rates.

The scalar lemma's in-run supplier is the batch-8 Gaussian sequence model
(level 2). The power-source identification uses batch-3
def-ip-power-source-set (level 4) and batch-8 model/ellipsoid suppliers
(levels 2–3). The general comparison uses the batch-8 exact-risk theorem
(level 4) and the scalar lemma (level 3). The corollary follows the comparison;
the B examples follow the corollary. This yields the declared batch level 3
from batches 3 and 8. Item-level recomputation and the scoped validator results
are recorded below after the final pass.

## Mathematical decisions and proof route

- The model is the real, positive-noise Gaussian sequence inverse experiment
  with Z_j = theta_j + epsilon s_j^-1 xi_j, independent standard-normal
  coordinates, s_j > 0 nonincreasing to zero, and the weighted ell^2 ellipsoid
  with positive nondecreasing a_j. The theorem assumes epsilon > 0 and Q >= 0;
  it does not add a_j -> infinity.
- lem-ip-univariate-gaussian-projection-minimax-comparison computes the Bayes
  risk of an equal endpoint prior clipped to the noise scale. The analytic
  inequality cosh(x) <= exp(x^2/2) yields I(1) >= 1/sqrt(2), hence the clipped
  prior risk is at least min(r^2,tau^2)/sqrt(2e). The proof includes the full
  posterior and integration calculation and the r=0 boundary.
- thm-ip-general-source-minimax-comparison first maximizes
  J(r)=sum_j min(r_j, epsilon^2 s_j^-2) under
  sum_j a_j^2 r_j <= Q^2. Since the variance thresholds tend to infinity,
  the maximum reduces to finite support. An exchange argument makes the
  saturated set an initial segment. A one-sided directional argument bounds
  the corresponding cutoff risk by twice this maximum. A finite product of
  the clipped coordinate priors lies inside the ellipsoid. Its exact
  likelihood ratio is checked on finite-coordinate cylinders and extended
  to the product Borel sigma-algebra by the published pi-system uniqueness
  lemma; no Gaussian KL, Fano, or Le Cam conclusion is assumed. The
  squared-risk comparison is R_cut^2 <= 2 sqrt(2e) R_*^2; the elementary
  series estimate e < 11/4 gives 2 sqrt(2e) < (2.2)^2, proving the planned
  constant.
- The published two-point Le Cam and Assouad bounds on the required minimax
  page were read. Their generic TV constants do not directly establish the
  requested factor 2.2, so the proof uses the sharper local Bayes calculation.
  The page requirement remains in the A-page manifest.
- lem-ip-power-source-class-as-statistical-ellipsoid proves both directions
  of the coefficient identification: theta_j=s_j^nu w_j, and conversely
  w_j=s_j^-nu theta_j. It uses the actual minimum-norm basis and the
  |K|/(K^*K)^(1/2) convention of the suppliers.
- The rate corollary derives all four polynomial/exponential combinations by
  balancing Q^2/a_(D+1)^2 and epsilon^2 sum_(j<=D)s_j^-2, with matching lower
  bounds for cutoffs below and above explicit thresholds. The examples
  specialize to p=kappa=1. The rates are up to constants, not Pinsker
  sharp-constant results.
- Ding–Mathé call polynomial singular-value decay moderately ill-posed and
  exponential decay severely ill-posed at the operator level. The authored
  statements index cases by singular-value and axis asymptotics, preserving
  the distinction from statistical minimax-rate terminology.
- Table 1 in Ding–Mathé prints the analytic-axis/polynomial-spectrum cutoff
  level as (2 kappa)^-1 log(1/sigma). If sigma is the noise standard
  deviation in equation (1), this displayed cutoff does not balance the
  theorem's bias and variance terms: the order balance is
  kappa^-1(log(1/epsilon) - (p+1/2)log log(1/epsilon)). The table's
  stated minimax rate is consistent with the local balance and is what the
  corollary proves; no conclusion relies on the printed cutoff constant.

## Supplier audit

I inspected actual supplier bodies and complete supplier proofs before use.
The current batch-3 def-ip-power-source-set statement fixes the power ball
X_{nu,rho}(K)={|K|^nu w: ||w||<=rho} and uses the S=K^*K convention;
lem-ip-index-source-elements-are-minimum-norm proves the N(K)^perp property
under Countable Choice. The published compact SVD theorem supplies
|K|v_j=s_jv_j and a complete right singular basis.

The batch-8 def-ip-gaussian-sequence-inverse-model,
def-ip-statistical-ellipsoid-class, and alg-ip-svd-truncated-estimator were
read in full. I also read the complete proof of
thm-ip-truncated-estimator-exact-risk; it handles D=0, Q=0, and the
one-coordinate tail attainer, and distinguishes expected sequence risk from
deterministic bounded-noise error. Its Countable Choice assumption is carried
to the consumer; no additional choice is used in the new lower bound or rate
balances.

No assigned supplier is missing. No cross-batch supplier is edited and no
supplier approval or acceptance is claimed.

## Source record

The A-page source harvest is
research/inverse-problems-knot-theory-all-109-2026-10-19-batch-9.coverage.json.
Both declared full-text sources were inspected and passed
node tools/source-fetch-check.mjs --coverage
research/inverse-problems-knot-theory-all-109-2026-10-19-batch-9.coverage.json
--stamp (2/2 verified; 2 newly stamped).

- Ding and Mathé, “Minimax rates for statistical inverse problems under
  general source conditions,” https://arxiv.org/pdf/1707.01706v2, complete
  7-page paper. Read §1, equations (3)–(9); the full §2 proof; Definition 2;
  and §3/Table 1. It supports the model, minimax comparison route, general
  source-set relation, and four rate regimes. It assumes positive noise.
- Johnstone, Gaussian estimation: Sequence and wavelet models, 2011 draft,
  https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf, complete 446-page
  manuscript. Read §2.3, equations (2.26)–(2.30), §4.3 equation (4.15),
  §4.5 Lemma 4.15 and Proposition 4.16, and §4.6 Theorem 4.17 proof. It
  supports the complete two-point Bayes calculation, Bayes-risk lower bound,
  product-prior additivity, and scalar projection-risk comparison.

Retrieval history: a Berkeley-hosted D. L. Donoho, R. C. Liu, and B.
MacGibbon report URL returned an empty body. Searching alternatives found
their Stanford-hosted 22-page paper PDF, but its text layer was unreadable;
I did not use it as proof evidence. The accessible full Johnstone manuscript
and complete Ding–Mathé article supplied the needed treatments, so no
retrieval obligation remains and no source is marked dropped or escalated.

## Per-item handoff ledger

### lem-ip-univariate-gaussian-projection-minimax-comparison — level 3; ready

**Exact claim and conventions:**

Let $r\ge0$ and $\tau>0$. In the one-dimensional Gaussian location experiment with parameter $\theta\in[-r,r]$, action space $\mathbb R$, observation density
$$p_{\theta,\tau}(y)=\frac{1}{\tau\sqrt{2\pi}}\exp\!\left(-\frac{(y-\theta)^2}{2\tau^2}\right)$$
with respect to Lebesgue measure, and squared-error loss, let $M(r,\tau)$ be the minimax expected risk over all measurable deterministic or randomized estimators. Put $b=\min\{r,\tau\}$ and take the prior assigning mass $1/2$ to each of $-b$ and $b$. The better of the estimators $y\mapsto0$ and $y\mapsto y$ has worst-case risk $T(r,\tau)=\min\{r^2,\tau^2\}$, and this prior has Bayes risk at least $T(r,\tau)/\sqrt{2e}$, so $M(r,\tau)\ge T(r,\tau)/\sqrt{2e}$.

**Direct dependencies:** `def-ip-gaussian-sequence-inverse-model`, `def-statistical-experiment`, `def-measurable-space`, `def-borel-sigma-algebra`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-bayes-and-minimax-risk`, `def-loss-function-and-risk`, `def-randomized-procedure-as-a-markov-kernel`, `thm-gaussian-integral`, `thm-substitution`, `def-hyperbolic-functions`, `thm-hyperbolic-identities-and-derivatives`, `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-algebra-of-derivatives`, `cor-mean-value-theorem`.

**Sources and locators:**

- [Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2011 draft, §2.3, equations (2.26)–(2.30), and §4.6, Theorem 4.17 proof, printed pp. 29–30 and 111–113](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)
- [Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, §2, equations (12)–(13), PDF pp. 3–4](https://arxiv.org/pdf/1707.01706v2)

**Readiness evidence:** [[research/inverse-problems-knot-theory-all-109-2026-10-19-step1-lem-ip-univariate-gaussian-projection-minimax-comparison.json]] records `ready` and binds the item plus the 17 examined direct dependencies. The A/B placement, complete proof contract, and source coverage are present. Precheck, proof-layout, strict contract, rendercheck, content-policy, manifest-deps, focused depcheck, and the 18-item scoped dependency closure pass. No item-specific supplier or source obligation remains.

### lem-ip-power-source-class-as-statistical-ellipsoid — level 5; ready

**Exact claim and conventions:**

Assume Countable Choice and let $K:X\to Y$ be a compact operator of infinite rank between real Hilbert spaces, with positive singular values $s_1\ge s_2\ge\cdots\downarrow0$. For every $\nu,\rho>0$, the coefficient sequences of the minimum-norm power source ball
$$X_{\nu,\rho}(K)=\{|K|^\nu w:w\in X,\ \|w\|_X\le\rho\}$$
are exactly
$$\left\{\theta\in\ell^2(\mathbb N,\mathbb R):\sum_{j\ge1}s_j^{-2\nu}\theta_j^2\le\rho^2\right\}.$$
Thus its ellipsoid weights are $a_j=s_j^{-\nu}$, a positive nondecreasing sequence.

**Direct dependencies:** `def-ip-gaussian-sequence-inverse-model`, `def-ip-statistical-ellipsoid-class`, `def-ip-power-source-set`, `lem-ip-index-source-elements-are-minimum-norm`, `def-compact-spectral-filter-and-qualification`, `thm-singular-value-decomposition-for-compact-operators`, `def-countable-choice`, `def-real-power`, `thm-real-power-laws`, `thm-real-power-continuity-and-derivatives`, `cor-mean-value-theorem`.

**Sources and locators:**

- [Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, Definition 2, equations (5)–(6), PDF p. 2](https://arxiv.org/pdf/1707.01706v2)

**Readiness evidence:** [[research/inverse-problems-knot-theory-all-109-2026-10-19-step1-lem-ip-power-source-class-as-statistical-ellipsoid.json]] records `ready` and binds the item plus the 11 examined direct dependencies. The A/B placement, complete proof contract, and source coverage are present. Precheck, proof-layout, strict contract, rendercheck, content-policy, manifest-deps, focused depcheck, and the 18-item scoped dependency closure pass. No item-specific supplier or source obligation remains.

### thm-ip-general-source-minimax-comparison — level 5; ready

**Exact claim and conventions:**

Assume Countable Choice. Fix $\epsilon>0$, $Q\ge0$, a nonincreasing sequence $s_j>0$ with $s_j\to0$, and a nondecreasing sequence $a_j>0$. Observe $Z_j=\theta_j+\epsilon s_j^{-1}\xi_j$ for $j\ge1$, where the $\xi_j$ are independent standard normal variables, and let the unknown parameter range over
$$\Theta_a(Q)=\left\{\theta\in\ell^2(\mathbb N,\mathbb R):\sum_{j\ge1}a_j^2\theta_j^2\le Q^2\right\}.$$
Let $R_*(\epsilon)$ be the square root of the minimax expected squared $\ell^2$ error over all measurable deterministic or randomized estimators from the product Borel data space to $\ell^2$, and put
$$R_{\rm cut}(\epsilon)=\left[\inf_{D\in\mathbb N_0}\left\{\frac{Q^2}{a_{D+1}^2}+\epsilon^2\sum_{j=1}^{D}s_j^{-2}\right\}\right]^{1/2},\qquad\mathbb N_0=\{0,1,2,\ldots\}.$$
Then $R_*(\epsilon)\le R_{\rm cut}(\epsilon)\le2.2R_*(\epsilon)$.

**Direct dependencies:** `def-ip-gaussian-sequence-inverse-model`, `def-ip-statistical-ellipsoid-class`, `alg-ip-svd-truncated-estimator`, `thm-ip-truncated-estimator-exact-risk`, `lem-ip-univariate-gaussian-projection-minimax-comparison`, `def-bayes-and-minimax-risk`, `def-loss-function-and-risk`, `def-randomized-procedure-as-a-markov-kernel`, `def-countable-choice`, `def-real-exponential-function-and-e`, `def-factorial-and-falling-factorial`, `thm-geometric-series`, `lem-finite-measure-uniqueness-on-a-pi-system`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `thm-continuous-preimages-of-borel-sets-are-borel`.

**Sources and locators:**

- [Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, §1, equations (3)–(9), and the complete proof in §2, PDF pp. 1–5](https://arxiv.org/pdf/1707.01706v2)
- [Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2011 draft, §§4.3–4.6, printed pp. 104–113](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

**Readiness evidence:** [[research/inverse-problems-knot-theory-all-109-2026-10-19-step1-thm-ip-general-source-minimax-comparison.json]] records `ready` and binds the item plus the 15 examined direct dependencies. The A/B placement, complete proof contract, and source coverage are present. Precheck, proof-layout, strict contract, rendercheck, content-policy, manifest-deps, focused depcheck, and the 18-item scoped dependency closure pass. No item-specific supplier or source obligation remains.

### cor-ip-mild-and-severe-estimation-rates — level 6; ready

**Exact claim and conventions:**

Assume Countable Choice, $Q>0$, and $p,\kappa>0$. As $\epsilon\downarrow0$, the minimax RMS error over $\Theta_a(Q)$ has the following order-sharp rates: if $s_j\asymp j^{-p}$ and $a_j\asymp j^\kappa$, then $R_*(\epsilon)\asymp\epsilon^{\kappa/(\kappa+p+1/2)}$; if $s_j\asymp e^{-pj}$ and $a_j\asymp j^\kappa$, then $R_*(\epsilon)\asymp[\log(1/\epsilon)]^{-\kappa}$; if $s_j\asymp j^{-p}$ and $a_j\asymp e^{\kappa j}$, then $R_*(\epsilon)\asymp\epsilon[\log(1/\epsilon)]^{p+1/2}$; and if $s_j\asymp e^{-pj}$ and $a_j\asymp e^{\kappa j}$, then $R_*(\epsilon)\asymp\epsilon^{\kappa/(p+\kappa)}$. Here $u_j\asymp v_j$ as $j\to\infty$ or $f(\epsilon)\asymp g(\epsilon)$ as $\epsilon\downarrow0$ means the ratio is bounded above and below by positive constants on the indicated tail; the constants may depend on $Q,p,\kappa$ and the axis comparison constants.

**Direct dependencies:** `def-ip-gaussian-sequence-inverse-model`, `def-ip-statistical-ellipsoid-class`, `thm-ip-truncated-estimator-exact-risk`, `thm-ip-general-source-minimax-comparison`, `def-countable-choice`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `def-real-exponential-function-and-e`, `def-real-power`, `thm-real-power-laws`, `thm-real-power-continuity-and-derivatives`, `cor-mean-value-theorem`, `thm-geometric-series`, `thm-exponential-beats-every-polynomial`, `thm-exponential-is-strictly-increasing`.

**Sources and locators:**

- [Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, §3 and Table 1, PDF pp. 5–6](https://arxiv.org/pdf/1707.01706v2)
- [Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, 2011 draft, §4.5, Proposition 4.16, and §4.6, Theorem 4.17 proof, printed pp. 109–113](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

**Readiness evidence:** [[research/inverse-problems-knot-theory-all-109-2026-10-19-step1-cor-ip-mild-and-severe-estimation-rates.json]] records `ready` and binds the item plus the 15 examined direct dependencies. The A/B placement, complete proof contract, and source coverage are present. Precheck, proof-layout, strict contract, rendercheck, content-policy, manifest-deps, focused depcheck, and the 18-item scoped dependency closure pass. No item-specific supplier or source obligation remains.

### ex-ip-sobolev-minimax-rates — level 7; ready

**Exact claim and conventions:**

Assume Countable Choice, take $Q>0$ and Sobolev-type weights $a_j\asymp j$ in the Gaussian sequence inverse model. If the singular values satisfy $s_j\asymp j^{-1}$, the minimax RMS error is of order $\epsilon^{2/5}$ as $\epsilon\downarrow0$; if instead $s_j\asymp e^{-j}$, it is of order $[\log(1/\epsilon)]^{-1}$. The comparison constants may depend on the fixed ellipsoid and axis constants.

**Direct dependencies:** `cor-ip-mild-and-severe-estimation-rates`, `def-ip-gaussian-sequence-inverse-model`, `def-ip-statistical-ellipsoid-class`, `def-countable-choice`.

**Sources and locators:**

- [Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, §3 and Table 1, PDF pp. 5–6](https://arxiv.org/pdf/1707.01706v2)

**Readiness evidence:** [[research/inverse-problems-knot-theory-all-109-2026-10-19-step1-ex-ip-sobolev-minimax-rates.json]] records `ready` and binds the item plus the 4 examined direct dependencies. The A/B placement, complete proof contract, and source coverage are present. Precheck, proof-layout, strict contract, rendercheck, content-policy, manifest-deps, focused depcheck, and the 18-item scoped dependency closure pass. No item-specific supplier or source obligation remains.

### ex-ip-analytic-minimax-rates — level 7; ready

**Exact claim and conventions:**

Assume Countable Choice, take $Q>0$ and analytic-type weights $a_j\asymp e^j$ in the Gaussian sequence inverse model. If the singular values satisfy $s_j\asymp j^{-1}$, the minimax RMS error is of order $\epsilon[\log(1/\epsilon)]^{3/2}$ as $\epsilon\downarrow0$; if instead $s_j\asymp e^{-j}$, it is of order $\epsilon^{1/2}$. The comparison constants may depend on the fixed ellipsoid and axis constants.

**Direct dependencies:** `cor-ip-mild-and-severe-estimation-rates`, `def-ip-gaussian-sequence-inverse-model`, `def-ip-statistical-ellipsoid-class`, `def-countable-choice`.

**Sources and locators:**

- [Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, §3 and Table 1, PDF pp. 5–6](https://arxiv.org/pdf/1707.01706v2)

**Readiness evidence:** [[research/inverse-problems-knot-theory-all-109-2026-10-19-step1-ex-ip-analytic-minimax-rates.json]] records `ready` and binds the item plus the 4 examined direct dependencies. The A/B placement, complete proof contract, and source coverage are present. Precheck, proof-layout, strict contract, rendercheck, content-policy, manifest-deps, focused depcheck, and the 18-item scoped dependency closure pass. No item-specific supplier or source obligation remains.

### ex-ip-power-source-minimax-rates — level 7; ready

**Exact claim and conventions:**

Assume Countable Choice. Let $X$ and $Y$ be real Hilbert spaces, let $K:X\to Y$ be a compact operator of infinite rank, and write $s_1\ge s_2\ge\cdots>0$, $s_j\to0$, for its positive singular values. Set $Q=\rho>0$ and $\nu=1$. Over the minimum-norm power source ball $X_{1,\rho}(K)$ in the Gaussian sequence inverse model associated with this singular system, if $s_j\asymp j^{-1}$ then the minimax RMS error is of order $\epsilon^{2/5}$; if $s_j\asymp e^{-j}$ then it is of order $\epsilon^{1/2}$ as $\epsilon\downarrow0$. The constants may depend on $\rho$ and the fixed singular-value comparison constants.

**Direct dependencies:** `cor-ip-mild-and-severe-estimation-rates`, `lem-ip-power-source-class-as-statistical-ellipsoid`, `def-ip-power-source-set`, `def-ip-gaussian-sequence-inverse-model`, `def-countable-choice`.

**Sources and locators:**

- [Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, Definition 2 and §3, Table 1, PDF pp. 2 and 5–6](https://arxiv.org/pdf/1707.01706v2)

**Readiness evidence:** [[research/inverse-problems-knot-theory-all-109-2026-10-19-step1-ex-ip-power-source-minimax-rates.json]] records `ready` and binds the item plus the 5 examined direct dependencies. The A/B placement, complete proof contract, and source coverage are present. Precheck, proof-layout, strict contract, rendercheck, content-policy, manifest-deps, focused depcheck, and the 18-item scoped dependency closure pass. No item-specific supplier or source obligation remains.

## Final validation results

- Source retrieval: `source-fetch-check --stamp` verified 2/2 sources; the final repeat added 0 stamps. The coverage checklist reports 1 A page, 9 harvested results, and 0 errors or warnings.
- Proof contracts: strict check passes 7/7 items, 69 exact supplier citations, and 40 numbered proof-step mappings; 0 errors and 0 warnings. Every item has all eight standard boundary dispositions.
- `precheck`: 7/7 pass; `verification.precheck: pass` is recorded in all seven proof-bearing carriers.
- `proof-layout`: 7 items, 40 steps, 0 defects.
- `rendercheck`: all 7 items and both page carriers pass YAML/KaTeX checks; A/B pages contain frontmatter only and no body summary.
- `content-policy`: 7 scoped items, 0 errors and 0 warnings. `manifest-deps`: 7 items, 0 normalized and 0 errors.
- Focused `depcheck`: all 7 selected items and both pages pass; their transitive dependency closure contains 1,340 items with 0 errors and 0 warnings.
- Scoped item dependency recomputation over the 18-item in-run closure passes: target levels 3, 5, 5, 6, 7, 7, 7, with no closure errors or mismatches.

## Whole-run reconciliation blockers

The batch-9 scope is internally dependency-consistent. Whole-run `item-dependency-levels check` reports 162 out-of-scope errors: 122 empty scaffold inventories and 40 dependency-level mismatches. The current whole-run `batch-dependency-levels check` stops while parsing the batch-40 carrier `items/lem-ip-gaussian-beam-null-bicharacteristic.md`: `proof_strategy` appears twice in frontmatter (lines 17 and 28), and the YAML parser reports a duplicate key at line 27, column 1. This carrier is outside batch 9 and was not edited.

A previous checkpoint named a different later parse failure; the current check stops earlier at the batch-40 duplicate. The 18-item scoped result above is the applicable dependency-level evidence for this pair. No unresolved mathematical supplier or local proof obligation remains. The next action is owner reconciliation of the run-wide scaffolds and independent review; these author readiness records do not constitute acceptance or publication.

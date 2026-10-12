# Foundations scaffold audit: durable progress

Scope: `research/plan-mathematical-statistics-track.md` and this `foundations/`
directory only. This file records checked work, not mathematical publication.
The current plan has 37 proposed A/B pairs (MSF-01–MSF-37); every proposed
result remains prose-design content. The count/order was reconciled against the
current plan rows and the frozen before-snapshot, not against a RESUME file.

## Repository context checked

Read the complete `CLAUDE.md`, `README.md` (29 lines), `SCHEMA.md` (232 lines),
the complete current Category 1 scaffold, and all six assigned Category 1 source
dossiers under `research/statistics-scaffolds-2026-10-11/foundations/`.
The repository instructions require hypotheses/assumptions to be carried,
local arguments rather than citation-only proof routes, and explicit source
limits. The initial audit did not run gates or modify library items; the focused final follow-up runs only the scoped renderer on the plan file and still does not modify library items.

## Confirmed supplier and interface findings

The live supplier map names 84 distinct prerequisite item IDs. The separate
textual reference census counts 85 published IDs because it also finds
`thm-sauer-shelah`, which MSF-19 explicitly excludes as an entropy supplier
(only finite traces are in scope). The prior durable record reports direct
statement/proof-body reads for the mapped items; this audit rechecked the exact
map and verified all 84 mapped files are present with `status: published`. The
full item clauses and their caveats remain in the scaffold's “Live library
inspection” table and individual pair rows. In particular:

* The AC, ACω and DC clauses are distinct. The RN theorem, RCD existence,
  conditional-expectation construction, multivariate CLT, Fourier uniqueness,
  and related suppliers carry AC; Doob–Dynkin/countable determining-class
  arguments may carry ACω. Consumers must retain the assumption used.
* `thm-conditional-density-formula` applies to a jointly product-dominated law
  with jointly measurable density and a probability filler on exceptional
  fibers. It does not apply to a singular graph law such as `(X,T(X))`.
  RCD/change-of-measure is the sound route for factorization through a
  statistic.
* Existing weak-convergence suppliers are scoped: the Slutsky item is scalar;
  random-element weak convergence is metric-space-valued; CMT requires a
  measurable map whose discontinuity set has zero limit probability.
* The existing conditional Hoeffding lemma supplies bounded centered
  martingale differences with finite measurable endpoints and a deterministic
  range-width bound, including the conditional MGF estimate for all real
  parameters. Independent bounded-sum Hoeffding follows by natural-filtration
  iteration. It does not silently cover unbounded/sub-Gaussian variables.
* Total-variation is `sup_A |P(A)-Q(A)|` (no half factor). The Hilbert/Riesz,
  projection, finite-dimensional spectral, Sobolev representative, Taylor,
  and least-squares suppliers were checked at item-body level; their exact
  spaces and finite-dimensional/smoothness limits are recorded in the relevant
  pair audit.

## New/clarified shared interfaces

* **MSF-01:** preserve arbitrary indexed statistical experiments. Add optional
  `def-parameter-measurable-statistical-model-as-markov-kernel` for a measurable
  parameter space and a probability kernel `K(θ,·)`, separately from model
  indexing. Category 3 BCS-01 has agreed to consume this contract for its
  prior-predictive joint law; it retains the parameter/kernel measurability
  clause locally and uses MSF-01 only for indexed-experiment semantics.
* **MSF-19:** distinguish (i) one-sided Rademacher complexity
  `m^{-1} Eσ sup_h Σσ_i h(z_i)`, with the Mohri et al. coordinatewise
  contraction constant `L` for arbitrary `L`-Lipschitz coordinate maps, and
  (ii) the different two-sided absolute-sup contraction with factor `2` and
  zero-at-zero/centering convention. The factor `2` in independent-copy
  symmetrization is separate. Category 4 selected the Mohri nonabsolute
  convention for ML-04 and will consume the one-sided statement; it was told
  not to conflate this with the absolute-value factor-2 result.
* **MSF-36 (new):** add a Hilbert-valued sample-mean CLT supplier for Category 3
  BCS-50, not a partial-sum-process invariance principle. State weak convergence
  in separable `H=L²([0,1])`, the stationary Bernoulli-shift and exact
  L²-m-approximability assumptions, centered mean, covariance kernel/trace
  condition and local proof route. The BCS bootstrap retains its stronger
  rate premise independently.
* **MSF-37 (new):** exchangeability and finite-sample split/full conformal
  prediction contracts. Category 4 ML-64 accepted the proposed stable IDs and
  exact split quantile convention below. The guarantee is marginal over
  calibration/test examples, conditional only on the independent training
  sample, and does not imply covariate-conditional coverage or shift validity.
* **BCS-52:** Category 3 will carry the two-sample U-statistic, Hájek projection,
  and permutation-CLT prerequisites locally. Root and Category 3 agreed a
  general MSF U-statistic module is unnecessary for this scoped theorem.

## Authoritative source anchors actually consulted

* Horváth–Kokoszka–Reeder (2013), author-hosted full paper,
  [PDF](https://www.stat.colostate.edu/~piotr/horvathKokoszkaReeder2013.pdf):
  read §1.1 and Theorem 1 (printed pp. 2–3), and Appendix A.1 proof (printed
  pp. 14–15; PDF text lines 708–977). The theorem concerns convergence of
  normalized Hilbert-valued sums in `L²[0,1]`; “functional” describes curve-valued
  observations, not convergence of a time-indexed process in `D([0,1];H)`.
  The proof truncates to finite dependence, uses finite-rank KL projections
  and finite-dimensional m-dependent CLTs, controls covariance/kernel limits,
  and obtains an H-valued Gaussian limit. Its finite-dimensional m-dependent
  CLT is cited rather than derived, so an earlier local lemma/proof obligation
  is required. Appendix A.1's first approximation is specifically the
  double-limit mean-square estimate in (A.1), using the summable
  m-approximation errors; its second is the KL tail estimate for each fixed
  dependence range. A direct finite-dimensional proof route has now been
  checked: for a scalar Cramér–Wold projection of a centered stationary
  m-dependent sequence with finite variance, first truncate at a fixed level
  K; retain independent blocks of length `floor(n^(1/4))` separated by m
  discarded observations; apply the existing independent-array
  Lindeberg–Feller theorem to bounded block sums, whose maximum is
  `O(K n^(1/4))=o(sqrt(n))`; the discarded-gap normalized variance tends to
  zero; then let K increase, using
  `E|n^{-1/2} Σ(Y_t-Y_t^K)|² ≤ (2m+1)E|Y_0-Y_0^K|²`. Cramér–Wold/characteristic
  functions give the vector result. This is a concrete lemma/proof design, not
  an already authored proof. The H-K-R theorem states that the kernel sums
  converge in `L²([0,1]²)`; the trace-class covariance property must be
  established in the local transfer/Gaussian-construction proof rather than
  attributed to a sentence in its theorem statement.
* Pilavakis–Paparoditis–Sapatinas (2019), arXiv author manuscript,
  [PDF](https://export.arxiv.org/pdf/1711.01070): verified Assumption 1,
  Theorems 2.1–2.2, §2.1 and the main-paper proof route. Bootstrap requires the
  additional `m (E||X_t-X_{t,m}||²)^{1/2}→0` rate and integer block lengths with
  `b^{-1}+b n^{-1/2}=o(1)`. Tapered block bootstrap additionally uses Assumption
  2; its proof is in an unavailable supplement. Do not present that proof as
  inspected or completed.
* Lei et al. (2018), [Distribution-Free Predictive Inference for
  Regression](https://www.stat.cmu.edu/~ryantibs/papers/conformal.pdf): read
  §§2.1–2.2 (printed pp. 6–9), Theorems 2.1–2.2 and Appendix A.1 proof
  references. Exchangeable score ranks are superuniform with conservative
  ties; the split-conformal order statistic uses `k=ceil((m+1)(1-α))`, with
  sentinel `+∞` when `k=m+1`. The source distinguishes marginal from
  conditional coverage and discusses limits to conditional guarantees.
* Mohri–Rostamizadeh–Talwalkar (2018), [Foundations of Machine Learning, 2nd
  ed.](https://avanti1980.github.io/course-ml/book/Foundations%20of%20Machine%20Learning%202ed%20-%20Mehryar%20Mohri%2C%20Afshin%20Rostamizadeh%2C%20and%20Ameet%20Talwalkar.pdf): read Definition 3.1 and Theorem 3.3 (PDF pp. 30–33) plus Lemma 5.7 and its proof (PDF pp. 93–94, extracted lines 6069–6223). Definition 3.1 is nonabsolute; Lemma 5.7 is a one-sided constant-`L` contraction theorem. The separate Pollard absolute-sup statement has factor 2.
* Chung–Romano (2011), Stanford Technical Report 2011-09, §3.2 Theorems 3.1–3.2 and Appendix A.1 Lemmas A.1–A.2 are reported by Category 3 after its direct source review. Their pair-specific assumptions and local-proof duties are retained in Category 3; no general supplier is added here.

## Confirmed defects from the original 35-pair source snapshot

These source-backed findings were carried into the 37-pair version. Repairs below
are scaffold edits and proof designs, not completed library proofs:

* MSF-01's indexed-family model does not imply parameter measurability; a
  separate measurable-kernel interface is needed by Bayesian consumers.
* MSF-04 must define a full likelihood ratio only when `P₁≪P₀`; otherwise
  describe the absolutely continuous component and separate singular mass.
* MSF-05's arbitrary-family minimal-sufficiency/factorization language exceeds
  what the sources prove. Keep countable-model ratio-vector scope; use
  common-reference RCD/change-of-measure for sufficiency, and do not apply the
  product-density conditional-formula item to a graph law. The broader
  factorization result remains an explicit local proof obligation unless
  repaired to a fully supported contract.
* MSF-24's second-order KDE remainder is not supplied by the inspected generic
  Taylor theorem, which requires one additional derivative; add a local
  second-order Peano expansion.
* MSF-32's multivariate trimmed-mean `smallest dyadic scale` rule is not total:
  identical data can make its nested set nonempty at every integer scale, with
  no least integer. The scale domain, all-scale intersection and fallback
  must be defined; measurable selection and quantile-level restrictions need
  explicit treatment. The geometric-median minimum-norm selection also needs
  existence/measurability justification.
* MSF-36 adds a local finite-dependent vector-CLT prerequisite. The H-K-R proof
  cites that input and no current library item supplies it; do not count source
  citation alone as a completed proof.

The full audit is now recorded in `pair-audit.json`; see the completion update below.


## Audit completion update — 2026-10-12

- Audited all 37 current plan rows in dependency/source order and wrote one
  machine-readable row per pair to `research/statistics-ml-scaffold-audit-2026-10-12/foundations/pair-audit.json`.
  It records the exact citation ranges copied from each plan source cell, the
  library prerequisite pages, pair prerequisites, findings, downstream
  interfaces and concrete remaining proof designs. `status` is `complete` for
  the *prose audit* only; every row says no library proof has been authored or
  certified.
- Preserved the existing repairs in MSF-01, MSF-04, MSF-05, MSF-19, MSF-35,
  MSF-36 and MSF-37. The optional MSF-01 Markov-kernel bridge remains separate
  from arbitrary indexed-experiment semantics and is the BCS-01 prior-predictive
  interface. MSF-19 retains Mohri's one-sided factor-$L$ contraction separately
  from the absolute-sup factor-$2L$ theorem. MSF-36 is still the Hilbert-valued
  sample-mean CLT (not a partial-sum-process FCLT); MSF-37 is marginal conformal
  validity under exchangeability, not conditional-on-covariate coverage. Its optional randomized split-set procedure is explicitly the same rank-p-value inversion and uses one independent uniform shared across candidate labels for joint measurability.
- Repaired MSF-16's QMD-to-LAN contract after checking the domination issue:
  the local likelihood ratio is for the normalized AC component on the
  base-law support. A future proof must show QMD makes singular and zero-overlap
  mass $o(1/n)$ per observation, hence an $o(1)$ product remainder in total
  variation. No full RN derivative is presumed without AC.
- Added the local second-order Peano expansion for MSF-24. Newey (2007),
  *Nonparametric and Semiparametric Estimation*, PDF p. 3, Proposition 1, uses
  the second derivative evaluated along the segment and DCT under a bounded
  continuous Hessian. The scaffold now gives the actual remainder envelope and
  states exact global MISE hypotheses: $f\in W^{2,2}$, $K\in L^1\cap L^2$,
  unit mass, zero first moments and finite absolute second moment. Its global
  squared-bias route is the $L^2$ translation remainder; it does not borrow the
  library Taylor theorem's stronger derivative assumption.
- Repaired MSF-22 to match Rigollet–Hütter, *High-Dimensional Statistics*,
  Chapter 2 §2.4, Theorem 2.14 and proof (printed pp. 56–57; physical PDF
  pp. 63–64): the cited BIC high-probability theorem assumes
  $\|\theta^*\|_0\ge1$. The plan records the proof's additive
  $\log(1/\delta)$ term and does not assert a zero RHS for the zero vector.
- Tightened MSF-25's design-density and kernel conditions and separated the
  population NW smoothing bias from empirical estimator bias. The finite-sample
  second-order expectation expansion now carries $nh^3\to\infty$ so the random
  denominator/moment-matrix correction can be proved $o(h^2)$; $nh\to\infty$
  remains for variance and nonsingular local moments.
- Refined MSF-17's local-cone likelihood-ratio statement to require closed
  convex cones, a uniform local quadratic likelihood expansion, tight local
  maximizers and the Fisher-information metric.
- Made the MSF-30 endpoint $\epsilon=1$ modulus convention explicit.
- Repaired MSF-32's totality, measurability and split-corruption contract.
  The robust multivariate source is Lugosi–Mendelson (2020 preprint v2),
  full paper, Theorem 2 and estimator/proof, PDF pp. 14–23; its algorithm on
  p. 16 sets $\epsilon=\max(10\eta,2560\log(2/\delta)/N)$, uses the second
  half for projected quantiles and the first for winsorized means, and assumes
  at most $2\eta N$ replacements *total across both halves*. The source's
  theorem advertises $\eta\in[0,1)$ although the displayed quantile construction
  requires $\epsilon\le1$; the plan limits this procedure to $\eta\le1/10$ and
  $N\ge2560\log(2/\delta)$. It explicitly leaves $1/10<\eta<1/2$ for a
  different procedure/proof and records the point-mass indistinguishability
  obstruction at $\eta\ge1/2$. The source assumes an absolutely continuous
  law for its proof presentation; its atom extension remains a local tie-proof
  obligation. For the scale selector, $K_j=\bigcap_{i\ge j}\Gamma(2^i)$ is
  used: choose the least $j$ when it exists, use the nested all-scale compact
  intersection if every $j$ works, and fall back to the first-half mean when
  no $j$ works. Compact convex intersections have unique minimum-norm points;
  countable dense directions and rational-point tests give the measurable
  construction. The source good event guarantees a nonempty tail, so the
  fallback does not alter the cited high-probability bound. These arguments
  are a future proof design, not completed proofs.
- Re-read the uncertain primary ranges directly in the cached full texts:
  Newey PDF pp. 3–5; Rigollet–Hütter Chapter 2 §2.4/Theorem 2.14 and proof;
  Lugosi–Mendelson Theorem 2, its multivariate estimator and §4 proof;
  H-K-R Theorem 1/Appendix A.1; and Lei et al. §§2.1–2.2/Theorems 2.1–2.2.
  The complete six source manifests and their prior full-reading records remain
  hash-bound at the top of `pair-audit.json`; unavailable/unread supplements
  are not credited as proof sources.
- No items or pages, canonical-plan integration, workflow transition,
  publication, commit or gate attempt was made. No tests or validators were
  run. The only content edits were the authorized prose scaffold and this
  foundations evidence directory.

### Final interface precision follow-up — 2026-10-12

- MSF-32 now lists `functional-analysis/hilbert-space-geometry-and-riesz-representation` as a prerequisite and names the published `thm-projection-onto-a-nonempty-closed-convex-set` item. The objective minimizer exists in the finite span of the block means by the Pythagorean projection identity and finite-dimensional coercivity; this avoids an unstated reflexivity or weak-compactness premise. The local `lem-measurable-minimum-norm-geometric-median-selection` proof design uses Tikhonov regularization, Borel countable dense-set infima and near-minimizers, then finite-dimensional convergence to the unique minimum-norm minimizer. This remains a future library proof, not completed formal/library work.
- MSF-36 defines the $m=0$ approximation as an independent copy with every innovation replaced. Its $L^2$ error is finite under the second-moment premise, so the nuclear-covariance estimate for lag $j=1$ is justified while the summability assumption remains over $m\ge1$.
- The then-current `pair-audit.json` bound the plan at SHA-256 `39249babfa40734bcb8d6a0df1c973a75ea1531e1181db101f4db699e53e9ea6`; the later supplier refresh is recorded below.
\n\n### Bochner and trace-class supplier refinement — 2026-10-12\n\n- Added the published Banach-valued integration page (30 items) and compact self-adjoint/Hilbert-Schmidt/trace-class page (21 items) to the MSF-32 and MSF-36 prerequisite sets and live supplier table. The nine newly mapped item IDs are listed in pair-audit.json; all nine files are published. The supplier inventory is now 93 distinct map IDs. The plan-only textual index is 94 published IDs, with thm-sauer-shelah still the single deliberately excluded map reference.\n- MSF-32 defines the mean as a Bochner expectation and the covariance as an S1(H)-valued Bochner expectation. A Borel map into separable H is strongly measurable by finite-valued nearest-point approximations from a fixed dense sequence; finite second moment supplies integrable norm. The rank-one trace-norm identity, Bochner norm inequality, bounded trace functional and rank-one trace formula give the covariance trace identity. The Bochner criterion is choice-free; the trace-class, trace and Hilbert projection clauses preserve Countable Choice.\n- MSF-36 interprets each operator-valued covariance term as an S1(H)-valued Bochner integral. Strong measurability follows from the same dense-sequence construction and the continuous rank-one map; Cauchy-Schwarz makes its trace norm integrable. The Bochner norm inequality and Countable-Choice Banach completeness of S1(H) justify the nuclear series, including the m=0 lag-one term. These remain scaffold proof designs, not authored library proofs.\n- The focused renderer was run only on research/plan-mathematical-statistics-track.md. Final plan SHA-256: 27060a3fbe3d124aff0470c3780c7b5d1fadeed64d8eb5bad14ce8306632e67e.\n
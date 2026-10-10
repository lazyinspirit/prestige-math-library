# Foundations-06 source-reader dossier

Status: source review complete; proposed scaffold only. No library item, canonical plan, workflow, or settings file was authored or changed.

## Scope and boundaries

This dossier covers robust and high-dimensional statistical foundations: gross-error and Huber contamination, influence and breakdown, heavy-tailed and adversarially contaminated means, sparse regression and covariance estimation, minimax rates, exact finite-group randomization tests, and general time-uniform sequential inference.

All proposed suppliers belong to Category 1 foundations. No Category 1 result may consume a Category 2–4 supplier. The proposed randomization and sequential results do not rely on treatment-effect models, A/B-test protocols, bandits, machine-learning algorithms, adaptive decision rules, or simulation evidence. A future Category 2 model may consume adequate published Category 1 suppliers after the cross-role interfaces are reconciled.

Three contamination models are kept distinct:

1. Local gross-error paths use distributions \(F_{\epsilon,H}=(1-\epsilon)F+\epsilon H\) to define an infinitesimal influence function and local bias.
2. Huber contamination uses an i.i.d. law \(P_{\epsilon,\theta,Q}=(1-\epsilon)P_\theta+\epsilon Q\), with arbitrary \(Q\).
3. Adversarial sample replacement starts with i.i.d. clean observations and permits an adversary to replace at most \(\eta N\) observed sample points.

The rates proved under one model do not transfer to either of the others without a separate argument. Heavy-tail moment assumptions and arbitrary contamination are also separate: the heavy-tailed covariance theorem below does not establish a covariance rate under simultaneous Huber contamination.

“Full” means that every PDF page in the focused chapter or paper was extracted and read, including its proof sections and appendices when supplied. The MIT notes are a longer source for which only complete selected chapters and the listed collateral pages were read. Exact PDF and extracted-text hashes are in [sources.json](sources.json); the extraction manifest is in the exclusive cache at [acquisition-manifest.json](../../../../scratchpad/statistics-scaffolds-2026-10-11/sources/foundations-06/acquisition-manifest.json). Hashes are over the exact on-disk bytes, including retained page markers and control characters. The manifest’s initial extracted-text hashes and some line counts did not match the current files; all were recomputed from the current bytes, while the PDF hashes were checked and no source text was rewritten.

## Source register and actual reading

The cache contains 13 full PDFs and 13 complete page-by-page PyMuPDF extractions, totaling 483 PDF pages. Twelve PDFs (352 pages) are complete focused texts and were read in full. Rigollet’s 131-page MIT notes were extracted in full, but only the selected complete chapters and the specified collateral pages were read. LF-delimited line numbers below are actual newline-based line numbers; form-feed/control characters are retained in the extraction and do not count as LF line breaks.

| Source | Actual pages and LF lines read | Anchors and coverage |
|---|---|---|
| P. B. Stark, *Statistics 240 Lecture Notes, Part 8: Resampling Methods* (Berkeley; revised 23 April 2008) | PDF pp.1–22; lines 1–1254; full chapter | Bootstrap, jackknife, and finite-group randomization discussion. Exact randomization tests and invariance are in §1.3, PDF pp.10–11. The bootstrap discussion is approximate inference and is not a supplier for exact test validity. |
| P. B. Stark, *Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics* (Berkeley; 23 November 2010) | PDF pp.1–42; lines 1–2041; full chapter | Gross-error neighborhoods and breakdown §§1.1–1.2, pp.1–12; influence, sensitivity and M-estimators §1.3–1.4, pp.13–24; scale and regression examples thereafter. This is explicitly marked **ROUGH DRAFT**. |
| E. Ronchetti, *Introduction to Robust Statistics* (Princeton-hosted lecture; author identifies University of Geneva; undated) | PDF pp.1–41; lines 1–880; full slide deck | Sensitivity curve and IF pp.9–21; finite-sample replacement breakdown pp.22–23; M-estimator formulas pp.24–30; robust inference pp.31–39. Definitions cross-check Stark; slides do not prove their asymptotic expansions. |
| G. Lugosi and S. Mendelson, *Sub-Gaussian Estimators of the Mean of a Random Vector* (arXiv:1702.00482v1) | PDF pp.1–12; lines 1–864; full paper | Tournament estimator/Theorem 1 p.5; geometric tournament Theorem 2 and proof §3, pp.5–11; computational remarks pp.11–12. Finite covariance, dimension-adaptive sub-Gaussian deviation. |
| S. Minsker, *Geometric Median and Robust Estimation in Banach Spaces* (arXiv v6; Bernoulli 21(4), 2015) | PDF pp.1–29; lines 1–1728; full paper | Confidence amplification Theorem 3.1 and proof, pp.5–6; finite-second-moment Hilbert mean Corollary 4.1 and proof, p.8; complete applications and appendices. |
| S. Minsker, *Uniform Bounds for Robust Mean Estimators* (arXiv:1812.03523v4) | PDF pp.1–21; lines 1–2957; full paper | Uniform estimator Theorem 2.1 p.4; adversarial-contamination Theorem 3.1 p.7; vector-mean Corollary 3.1 p.8; proof sections and lower-bound Lemma 5.4, pp.10–20. |
| G. Lugosi and S. Mendelson, *Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean* (arXiv:1907.11391v2) | PDF pp.1–24; lines 1–1625; full paper | Univariate Theorem 1 and proof §2.1, pp.9–13; multivariate slab estimator/Theorem 2 and proof §4, pp.14–23. Finite covariance and adversarial sample replacement. |
| T. T. Cai and H. H. Zhou, *Optimal Rates of Convergence for Sparse Covariance Matrix Estimation* (Annals of Statistics 40(5), 2012; arXiv:1302.3030v1) | PDF pp.1–33; lines 1–2462; full article | Weak-\(\ell_q\) class and minimax spectral risk Theorem 1, pp.3–4; specialized lower bound Theorem 2, p.6; thresholding upper bound §4; full proofs §7, pp.23–33. |
| T. T. Cai and H. H. Zhou, *Supplement to “Optimal Rates of Convergence for Sparse Covariance Matrix Estimation”* | PDF pp.1–6; lines 1–1327; full supplement | Entire supplement, including proofs of Lemma 8(ii), Lemma 10 and Lemma 11 used by the article’s lower-bound proof. Downloaded from the author-linked Yale host after a self-signed/mismatched HTTPS certificate; this did not bypass access controls. |
| S. Minsker and X. Wei, *Estimation of the Covariance Structure of Heavy-Tailed Distributions* (arXiv:1708.00502v3) | PDF pp.1–21; lines 1–2684; full paper | Truncated covariance estimator, Lemma 2.1/Theorem 2.1 pp.3–5; intrinsic-rank Corollary 2.2 p.6; soft-thresholded low-rank result Theorem 3.1 p.7; all proof sections and supplement. |
| M. Chen, C. Gao and Z. Ren, *Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model* (arXiv:1506.00691v4; Annals of Statistics 46(5), 2018) | PDF pp.1–53; lines 1–6150; full article plus supplement | Huber model and matrix depth §§1–3, pp.1–12; general contamination modulus Theorem 5.1 p.16; proofs §7 and included supplement, pp.23–53. |
| S. R. Howard, A. Ramdas, J. McAuliffe and J. Sekhon, *Time-Uniform, Nonparametric, Nonasymptotic Confidence Sequences* (arXiv:1810.08240v9; Annals of Statistics 49(2), 2021) | PDF pp.1–48; lines 1–4188; full article and appendices | Confidence-sequence/sub-\(\psi\) definitions §§1–2, pp.1–7; stitched Theorem 1 p.8; mixture Lemma 2 pp.9–10; discrete-mixture/inverted-stitching Theorems 2–3 p.11; empirical-Bernstein Theorem 4 pp.13–14; full proof appendices, pp.25–38; stopping-time/p-value duality Lemma 3 p.19. |
| P. Rigollet, *18.S997: High-Dimensional Statistics, Lecture Notes* (MIT OCW, Spring 2015 version dated 14 July 2015) | Focused complete chapters: pp.21–39, 40–66, 88–107, 108–127; LF lines 979–2591, 2592–5303, 7647–9393, 9394–11312. Also complete collateral context pp.84–87, lines 7210–7646; PDF p.1 and lines 1–25 inspected for metadata. | Ch.1 sub-Gaussian variables; Ch.2 fixed-design sparse regression, BIC/Lasso and restricted eigenvalues; Ch.4 matrix norms, dense covariance concentration and sparse PCA; Ch.5 minimax testing, KL/TV/Pinsker/Fano and sparse Gaussian-sequence rates. The rest of this 131-page document is not claimed as read. |
Complete bibliographic metadata, URLs, editions, extraction page counts, exact PDF SHA256 values, exact extracted-text SHA256 values, control-character counts, actual reading ranges, and source-specific caveats are in [sources.json](sources.json).

## Source-backed mathematical findings and limits

### Influence, local robustness, and breakdown

Ronchetti pp.15–17 defines the influence function along the point-mass contamination path and derives gross-error sensitivity as its supremum; pp.22–23 defines replacement breakdown through arbitrary replacement of sample points. Stark §§1.2–1.3 gives contamination neighborhoods, breakdown, influence, sensitivity, local shift and rejection-point concepts, and pp.17–21 computes location/M-estimator examples. Neither lecture is a proof-complete theorem source: Ronchetti’s slides omit regularity and remainder hypotheses, while Stark is a rough draft and its displayed Gâteaux derivative does not specify the direction. The dossier therefore proposes direct proofs for the mean, median, and regular M-functional, rather than importing those informal formulas as established library results.

A mathematically safe influence-function item should define \(T\) on a class of probability laws and require the directional derivative along \(F_\epsilon=(1-\epsilon)F+\epsilon\delta_x\) to exist. For an M-location functional solving \(E_F\psi(X-T(F))=0\), if \(\psi\) is differentiable near the solution, differentiation may be interchanged with integration, the root is locally unique, and \(E_F\psi'(X-T(F))\ne0\), then
\[
\mathrm{IF}(x;T,F)=\frac{\psi(x-T(F))}{E_F\psi'(X-T(F))}.
\]
Bounded \(\psi\) then gives bounded IF under the same nonzero-denominator condition. A local maximum-bias expansion requires a *uniform* first-order remainder over the contamination distributions \(H\); pointwise Gateaux differentiability alone does not prove that expansion. Bounded IF and positive finite-sample breakdown are different properties and must not be substituted for each other.

The direct worked cases are suitable for the B page: the mean functional has \(\mathrm{IF}(x)=x-\mu\) and unbounded gross-error sensitivity on \(\mathbb R\), while one arbitrary replacement makes the finite-sample arithmetic mean unbounded (breakdown \(1/n\)). At a median \(m\) with a continuous density \(f(m)>0\), the quantile equation gives \(\mathrm{IF}(x)=(1/2-\mathbf1\{x\le m\})/f(m)\), bounded in \(x\); the conventional sample median has replacement breakdown \(\lfloor(n+1)/2\rfloor/n\). The proof must fix the finite-sample convention as the *minimum* replacement count making the supremum displacement infinite. Ronchetti’s slide convention matches this; Stark’s definition instead displays the largest safe replacement count, which differs by one at the threshold.

### Heavy-tailed means and sample replacement

Minsker’s geometric-median theorem assumes independent base estimators, each failing with probability at most \(p<\alpha<1/2\); the geometric median is within \(C_\alpha\epsilon\) except with probability \(e^{-k\psi(\alpha;p)}\) (Theorem 3.1, pp.5–6). Its mean corollary assumes i.i.d. data in a separable Hilbert space, \(E\|X-\mu\|^2=\operatorname{tr}\Sigma<\infty\), chooses \(k=\lfloor\log(1/\delta)/\psi(7/18;0.1)\rfloor+1\), requires \(k\le n/2\), and obtains
\[
P\!\left(\|\hat\mu-\mu\|\ge 11\sqrt{\operatorname{tr}(\Sigma)\log(1.4/\delta)/n}\right)\le\delta
\]
(Corollary 4.1, p.8). Its proof route is Chebyshev on each block mean, a binomial majority tail, and the geometric-median lemma. For contaminated blocks, Remark 3.1 requires their proportion below the permitted outlier fraction.

Lugosi–Mendelson’s Theorem 1 (p.5) assumes i.i.d. vectors with finite covariance and gives error
\[
2\max\!\left(400\sqrt{\operatorname{tr}(\Sigma)/N},\,
240\sqrt{\lambda_{\max}(\Sigma)\log(2/\delta)/N}\right)
\]
at probability \(1-\delta\), using a multivariate median/tournament construction. The proof is a uniform comparison over directions, with a packing/duality argument and concentration of the block comparisons. However, its stated “for all \(N\)” theorem must be restricted in a scaffold: the construction sets \(k=\lceil360\log(2/\delta)\rceil\) and partitions into nonempty equal blocks. No such partition exists when \(k>N\), and the equal-block notation also requires a valid integer block construction. Either state the result only in its defined block range (and use a proved remainder convention) or use Minsker’s corollary; do not assert an unproved small-sample extension.

Lugosi–Mendelson’s trimmed-mean Theorem 1 (p.9) explicitly assumes \(\delta\ge e^{-N/4}\); its univariate error depends on the tail-trimming functional \(E(4\epsilon,X)\) plus \(2\sigma_X\sqrt{\log(4/\delta)/N}\). Here \(\epsilon\) is the paper’s trimming parameter; it is not the Huber mixture fraction by notation alone. Its high-probability tail clause and proof are in §2.1. The multivariate Theorem 2 (p.14) assumes finite covariance and at most \(\eta N\) adversarial replacements, and proves
\[
\|\hat\mu-\mu\|\le c\left(\sqrt{\operatorname{tr}(\Sigma)/N}
+\sqrt{\lambda_{\max}(\Sigma)\log(1/\delta)/N}
+\sqrt{\lambda_{\max}(\Sigma)\eta}\right)
\]
with probability \(1-\delta\). The lower bound is based on an adversary clipping/altering tails; the estimator is a slab intersection built from directional trimmed means and is not computationally feasible in its naive high-dimensional implementation. Minsker’s 2019 paper is a full secondary treatment, but its uniform Theorem 3.1 retains empirical-process and outlier-block hypotheses; the vector corollary is not a hypothesis-free substitute.

### Sparsity, covariance and minimax rates

Rigollet’s fixed-design Theorem 2.18 (MIT notes, Ch.2, PDF pp.62–64) assumes sub-Gaussian noise, \(s\)-sparse \(\theta^\ast\), and an incoherence condition implying a restricted-eigenvalue lower bound on the cone \(\|\theta_{S^c}\|_1\le3\|\theta_S\|_1\). With the penalty exactly as specified in equation (2.16), it bounds prediction error by order \(s\sigma^2\log(2d/\delta)/n\) and coefficient \(\ell_1\) error by order \(s\sigma\sqrt{\log(2d/\delta)/n}\). Lemma 2.17 proves the required cone inequality from incoherence. The result is not justified from sparsity alone: omitting the design condition invalidates the fast rate.

Rigollet Theorem 4.6 (Ch.4, p.98–100) gives dense sample second-moment/covariance concentration for i.i.d. sub-Gaussian vectors:
\[
\|\hat\Sigma-\Sigma\|_{\mathrm{op}}
\lesssim \|\Sigma\|_{\mathrm{op}}\left[
\sqrt{\frac{d+\log(1/\delta)}n}\ \vee\
\frac{d+\log(1/\delta)}n\right].
\]
The displayed premise is \(E[XX^\top]=\Sigma\) and \(X\) is sub-Gaussian with proxy \(\|\Sigma\|_{\mathrm{op}}\); for this to be a covariance matrix rather than an uncentered second moment, impose \(EX=0\) or recenter and prove the extra step. The proof is a finite-net reduction plus Bernstein concentration.

Cai–Zhou define a weak-\(\ell_q\) sparse covariance class for \(0\le q<1\): every off-diagonal column lies in the weak-\(\ell_q\) ball of radius \(c_{n,p}\). Their observation model is i.i.d. and sub-Gaussian in the stated directional-tail sense \(P(|v^\top(X-EX)|>t)\le e^{-t^2/(2\tau)}\) for every \(t>0\) and unit \(v\), with covariance \(\Sigma\in G_q(c_{n,p})\). If \(p\ge n^\beta\), \(\beta>1\), and \(c_{n,p}\le M n^{(1-q)/2}(\log p)^{-(3-q)/2}\), their Theorem 1 proves the minimax squared spectral-norm risk
\[
c_{n,p}^{\,2}\left(\frac{\log p}{n}\right)^{1-q}+\frac{\log p}{n}.
\]
Thresholding supplies the upper bound. The lower bound uses a specially constructed finite family and two-directional Le Cam/Assouad-style testing with mixture total-variation affinities; the six-page supplement supplies several deferred technical proofs. This is not a heavy-tail or contamination theorem.

Minsker–Wei’s heavy-tail covariance estimator uses matrix truncation, a median-of-means mean pilot, and an adaptive Lepski choice. Its finite-sample Theorem 2.1 assumes finite matrix variance
\[
\sigma_0^2=\left\|E\!\left[\|X-\mu\|^2(X-\mu)(X-\mu)^\top\right]\right\|,
\quad d=\sigma_0^2/\|\Sigma_0\|^2,
\]
and \(m\ge C d\beta\). Under the paper’s stated preliminary scale bracket, the adaptive estimator satisfies \(\|\hat\Sigma^\ast-\Sigma_0\|_{\rm op}\le18\sigma_0\sqrt{\beta/m}\) with its displayed probability (PDF pp.4–5; Corollary 2.2 relates the intrinsic dimension to effective rank under a bounded-kurtosis condition). This requires a fourth-order moment control and says nothing about arbitrary contamination.

Chen–Gao–Ren’s Huber model is \((1-\epsilon)N(0,\Sigma)+\epsilon Q\), with arbitrary \(Q\). Their matrix-depth estimator is defined as a deepest positive-semidefinite matrix \(\hat\Gamma\), scaled by \(\beta\), where \(\Phi(\sqrt\beta)=3/4\). For the bounded-spectrum class \(F(M)\), Theorems 3.1–3.2 prove squared operator risk \((p/n)\vee\epsilon^2\); the upper result requires \(\epsilon<1/5\), \(\delta\in(0,1/2)\), and \(C_1(p+\log(1/\delta))/n<1\). The structured sparse class \(F_s(M)\) in Theorems 3.6–3.7 is a block of at most \(s\) mutually correlated variables, with rate \(s\log(ep/s)/n\vee\epsilon^2\); it is not Cai–Zhou’s weak-\(\ell_q\) row-sparsity class. The paper proves a general contamination modulus lower bound in Theorem 5.1. High-dimensional computation of the depth optimizer is explicitly challenging; simulations and low-dimensional algorithms are not proof suppliers.

Rigollet Ch.5 (PDF pp.108–127) gives complete two-point, total-variation, KL/Pinsker, Fano and sparse Varshamov–Gilbert arguments; Corollary 5.15 proves the Gaussian sequence minimax squared risk \(\sigma^2 k\log(ed/k)/n\). Chen–Gao–Ren Theorem 5.1 separately proves the Huber-contamination modulus principle using \(\omega(\epsilon,\Theta)=\sup\{L(\theta_1,\theta_2):\mathrm{TV}(P_{\theta_1},P_{\theta_2})\le\epsilon/(1-\epsilon)\}\). The current library defines total variation as a supremum over events with no factor \(1/2\), but has no published testing-error identity, KL/Pinsker/Fano item, risk/minimax definition, or contamination-modulus theorem. The convention must be retained in any reusable proof.

### Exact randomization and time-uniform inference

Stark Part 8 §1.3 describes a finite transformation group under a null distribution invariant under that group and says the transformed values in the orbit are equally likely. The reusable theorem should narrow this to a finite sample space with a finite group action and an invariant null law; conditional on an orbit, distinct orbit points are equiprobable. The nonrandomized tail-rank p-value is super-uniform; randomization within ties gives exact uniformity. Proof is the equal-mass orbit calculation. The published library has no exact randomization/permutation-test item. Bootstrap resampling is not an exactness argument.

Howard et al. define a confidence sequence by simultaneous coverage \(P(\forall t:\theta_t\in C_t)\ge1-\alpha\), and a sub-\(\psi\) process through an exponential process dominated by a supermartingale (Definition 1, PDF p.5). Their Lemma 2 (pp.9–10) mixes these supermartingales; Ville’s inequality yields crossing probability \(\alpha\). The stitched Theorem 1 (p.8) assumes a sub-gamma process, \(c\ge0\), \(\eta>1\), \(m>0\), and an increasing spending function \(h\) with \(\sum_{k\ge0}1/h(k)\le1\); it constructs an explicit \(S_\alpha(V_t\vee m)\) boundary. The complete proof in Appendix A.1 (pp.25–27) is geometric peeling and a union bound over epochs. Lemma 2’s proof requires product measurability. The bounded-observation empirical-Bernstein Theorem 4 (pp.13–14) assumes \(X_t\in[a,b]\) and any predictable \([a,b]\)-valued predictor \(\widehat X_t\), and bounds the time-uniform error by a sub-exponential boundary evaluated at \(\sum_{i\le t}(X_i-\widehat X_i)^2\). Its proof is in Appendix A.8 (pp.35–36).

The current library supplies filtrations, adapted integrable processes, martingale/supermartingale signs, martingale differences, stopping times, bounded optional sampling and finite-horizon Doob/Azuma results. It has no Ville inequality, e-process, or confidence-sequence definition. Ville can be proved from the existing bounded optional-sampling theorem: stop at the first crossing before \(N\), use nonnegativity and the supermartingale expectation inequality, then let \(N\uparrow\infty\). Do not try to apply Doob’s L1 maximal theorem directly to a supermartingale; its existing statement is for a nonnegative submartingale.

## Existing published suppliers checked

Existing library bodies were read, not inferred from titles or old prose. These are adequate reusable suppliers for the clauses stated, subject to their explicit limits.

| Existing published page/item | Exact reusable clause | Limit / noncoverage |
|---|---|---|
| Probability spaces, random variables and expectation page: **def-probability-measure**, **def-random-element-and-real-random-variable**, **def-law-or-distribution-of-a-random-element**, **def-expectation-of-a-nonnegative-or-integrable-random-variable** | Probability laws, measurable observations and expectation/integration on general probability spaces. | No statistical model, estimator, sampling law, risk, or contamination definition. |
| Same page: **def-moments-variance-and-covariance**, **lem-variance-and-covariance-identities-for-random-variables**, **thm-covariance-bilinearity-and-symmetry** | General \(L^p\) moments, mean, variance/covariance for square-integrable variables, algebraic covariance identities and finite linear combinations. | Does not establish concentration, sparse covariance rates, or robust covariance estimators. |
| Same page: **cor-markov-inequality-for-random-variables**, **cor-chebyshev-inequality-for-random-variables**, **cor-holder-inequality-for-random-variables**, **cor-cauchy-schwarz-for-random-variables**, **cor-second-moment-positive-probability-bound** | General probability-space Markov/Chebyshev/Hölder/Cauchy–Schwarz and a nonnegative second-moment lower bound. | Prefer these general items to finite-probability-space versions. The second-moment lower bound is only the \(P(X>0)\) statement, not a general concentration inequality. |
| **def-total-variation-distance-for-probability-laws** | \(\sup_A|\mu(A)-\nu(A)|\). | Convention has no \(1/2\) in the supremum and supplies neither the testing-error identity nor Pinsker/KL/Fano. |
| Matrix norms page: **def-induced-matrix-p-norm**, **thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized**, **def-frobenius-matrix-norm**, **thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison** | Operator/Frobenius norms, spectral/SVD formulas, unitary invariance, and \(\|A\|_F\le\sqrt{\operatorname{rank}A}\|A\|_{\rm op}\). | No covariance concentration or eigenspace perturbation theorem. The existing compact-operator Weyl product inequality is not Davis–Kahan. |
| Discrete-time martingales page: **def-filtration-and-filtered-probability-space**, **def-adapted-and-integrable-stochastic-process**, **def-martingale-submartingale-and-supermartingale**, **def-martingale-difference-sequence**, **thm-martingales-and-martingale-differences-correspond** | Filtration/adaptedness/integrability, martingale signs and difference-sequence interface. | No Ville/e-process/confidence-sequence result. |
| Stopping-times and optional-stopping page: **def-discrete-stopping-time**, **def-sigma-algebra-at-a-stopping-time**, **thm-optional-sampling-for-bounded-stopping-times** | Literal stopping-time event condition, stopping-time sigma-algebra, and conditional optional sampling when both times are deterministically bounded. | Bounded optional sampling alone is finite-horizon; Ville’s infinite-horizon statement still needs a monotone limit. The limit is straightforward and should be shown. |
| Martingale inequalities and convergence page: **thm-doob-l1-maximal-inequality**, **lem-conditional-hoeffding-bound-for-bounded-martingale-differences**, **thm-azuma-hoeffding-inequality** | Doob’s finite-horizon L1 maximal inequality for nonnegative submartingales; conditional Hoeffding with predictable endpoints; finite-horizon Azuma–Hoeffding. | No time-uniform confidence boundary. Doob’s item is not directly a nonnegative-supermartingale crossing bound. |
| Positive square root and covariance matrices remark: **rem-positive-square-root-and-covariance-matrices** | Finite-dimensional positive covariance matrices have the standard square root, under its stated AC/interface assumptions. | Orientation only; it proves no probability or statistical rate. |

### Missing published prerequisites

Searches of actual item paths and the above bodies found no adequate published item for: statistical estimators/risk/minimax risk; total-variation testing identity, KL/Pinsker/Fano; generic sub-Gaussian vector model and covariance concentration; robust statistical functionals, influence, finite-sample replacement breakdown, or Huber contamination; heavy-tailed mean/covariance algorithms; restricted-eigenvalue/Lasso bounds; sparse covariance classes/rates; matrix-depth covariance estimation; finite-group randomization-test validity; Ville/e-process/confidence sequences.

These are proposed suppliers, not existing published results. A general statistical-model/estimator/risk clause should be reconciled with the Foundations-01 interface; the generic concentration and sub-Gaussian vector clauses should be reconciled with Foundations-04; ordinary influence-functional material should be reconciled with Foundations-05. If those dossiers supply exact adequate clauses, reuse them instead of duplicating. Until then, no hidden dependency on a planned title is assumed. In particular, the library currently has no published sub-Gaussian random-vector definition, so all sub-Gaussian assumptions must be defined and supplied by a Category 1 concentration interface before the proposed sparse-regression and covariance-rate theorems can be consumed.

## Proposed dependency-ordered A/B scaffold

Each A page is a reusable Category 1 theory supplier. Each B page contains worked examples/counterexamples and is **not** a cross-page supplier. Every estimator/algorithm below is a definition item; its risk/concentration statement is a separate theorem item with its own proof. Pair IDs are stable proposals, not authored pages or passed gates.

### Pair 0 — statistical risk and minimax foundations (earliest placement; merge with Foundations-01/04 if covered there)

- **A page:** **statistical-risk-and-minimax-foundations**.
- **B page:** **statistical-risk-minimax-examples**.
- **A item proposals:** **def-statistical-model-estimator-loss-and-risk**; **def-minimax-risk**; **thm-two-point-minimax-lower-bound-from-total-variation**; **thm-fano-packing-lower-bound**; **def-contamination-modulus-of-continuity**; **thm-contamination-modulus-minimax-lower-bound**.
- **Purpose/dependencies:** Define an experiment \(\{P_\theta\}\), measurable estimators, loss and risk \(E_\theta L(\hat\theta,\theta)\), minimax risk, and probability-based lower-risk conventions. Reuse **def-probability-measure**, **def-random-element-and-real-random-variable**, **def-expectation-of-a-nonnegative-or-integrable-random-variable**, and **def-total-variation-distance-for-probability-laws**. State the TV convention before proving testing bounds. Place the generic experiment/risk interfaces earlier in Category 1; this pair must not depend on Categories 2–4.
- **Result/proof route:** The two-point theorem reduces an estimator to a nearest-hypothesis test and proves the lower bound through the testing error \(1-\mathrm{TV}(P_0,P_1)\); Fano uses pairwise KL and a separated finite packing. The contamination-modulus theorem assumes a clean-model minimax lower bound \(M(0)\) and proves a contaminated lower bound of order \(M(0)\vee\omega(\epsilon,\Theta)\). Proof anchors: Rigollet Ch.5 §§5.1–5.5, PDF pp.109–127; Chen–Gao–Ren §5, Theorem 5.1, PDF p.16 and proof in §7/supplement.
- **B examples:** Gaussian location two-point bound; sparse Gaussian-sequence Fano rate \(\sigma^2 k\log(ed/k)/n\); contamination modulus for Gaussian location. The examples are checks, not theorem dependencies.

### Pair 1 — robust functionals, influence and breakdown

- **A page:** **robust-functionals-influence-and-breakdown**.
- **B page:** **robust-location-influence-and-breakdown-examples**.
- **A item proposals:** **def-statistical-functional-and-gross-error-neighborhood**; **def-influence-function-and-gross-error-sensitivity**; **def-finite-sample-replacement-breakdown-point**; **thm-m-estimator-influence-function-under-regularity**.
- **Purpose/dependencies:** Define local gross-error paths separately from Huber mixture neighborhoods and sample replacement. Define breakdown as the *minimum* replacement count for which the maximum displacement is unbounded. Use general probability-law/expectation suppliers and Pair 0 only when discussing risk. No result may infer breakdown from bounded IF.
- **Result/proof route:** Under the implicit-function and differentiation-under-integral hypotheses stated above, differentiate \(E_{F_\epsilon}\psi(X-T(F_\epsilon))=0\) to obtain the IF formula. Prove the mean/median examples directly. A contamination-bias upper expansion needs a uniform remainder over \(H\); do not state equality \(\operatorname{bias}\sim\epsilon\gamma^\ast\) from pointwise differentiability alone.
- **Sources:** Ronchetti pp.15–24 and Stark §§1.2–1.4, pp.10–24. Both provide concepts; Stark is rough, Ronchetti is slides without full proof. The theorem proofs belong in the proposed A supplier.
- **B examples:** Arithmetic mean (unbounded IF, \(1/n\) breakdown), median at a positive continuous density (bounded IF and \(\lfloor(n+1)/2\rfloor/n\) breakdown), and a Huber score with bounded \(\psi\). Prove each example on B, but do not make B an upstream supplier.

### Pair 2 — finite-variance robust means and sample replacement

- **A page:** **finite-variance-robust-mean-estimators**.
- **B page:** **robust-mean-outlier-and-tail-examples**.
- **A item proposals:** **def-geometric-median-of-means-estimator**; **thm-geometric-median-of-means-concentration**; **def-multivariate-trimmed-mean-estimator**; **thm-trimmed-mean-bound-under-adversarial-replacement**.
- **Purpose/dependencies:** Separate the geometric-median combination algorithm from its majority-good-block theorem. State finite second moment and block-count conditions. Define sample replacement separately from \(P_{\epsilon,\theta,Q}\). Use general Markov/Chebyshev/Cauchy–Schwarz and, for majority tails, a proved Bernoulli concentration result from Category 1. Reconcile the sub-Gaussian input with the Foundations-04 supplier before importing it.
- **Result/proof route:** Prove Minsker’s block mean result by Chebyshev on each block; independence gives a binomial count of bad blocks; a Chernoff/Azuma tail and the geometric-median lemma finish. Prove the trimmed bounds only in the source’s stated ranges, including \(\delta\ge e^{-N/4}\) for univariate Theorem 1. Multivariate replacement rate has separate \(\sqrt{\lambda_{\max}\eta}\) term and finite-covariance premise.
- **Sources:** Minsker Theorem 3.1/Corollary 4.1, pp.5–8; Lugosi–Mendelson trimmed Theorems 1–2, pp.9–23; supporting alternatives: Lugosi–Mendelson tournament Theorem 1, p.5, with the small-block limitation; Minsker uniform bound Theorem 3.1/Corollary 3.1, pp.7–8, retaining its empirical-process assumptions.
- **B examples:** One-dimensional median-of-means, a single arbitrarily corrupted block, and the comparison between \(\eta\) and \(\sqrt{\eta}\) contamination terms under stronger tail assumptions. No algorithmic efficiency claim is inferred from these examples.

### Pair 3 — sparse fixed-design regression

- **A page:** **sparse-fixed-design-regression**.
- **B page:** **sparse-regression-design-examples**.
- **A item proposals:** **def-subgaussian-fixed-design-regression-model**; **def-restricted-eigenvalue-condition**; **def-lasso-estimator**; **thm-lasso-prediction-and-l1-error-under-restricted-eigenvalue**.
- **Purpose/dependencies:** State fixed design, noise scale, support size, cone, and restricted-eigenvalue inequality before defining the Lasso result. Reuse existing matrix operator/Frobenius suppliers and the exact Category 1 sub-Gaussian definition/concentration theorem once Foundations-04 provides them.
- **Result/proof route:** Rigollet Lemma 2.17 derives a cone lower bound from incoherence. Theorem 2.18 uses the Lasso basic inequality, a high-probability score bound, cone condition, and RE inequality to give prediction error \(O(s\sigma^2\log(d/\delta)/n)\) and \(\ell_1\) error \(O(s\sigma\sqrt{\log(d/\delta)/n})\), with the source’s exact penalty (2.16), \(n\ge2\), and its stated incoherence premise. Do not claim the fast rate from sparsity alone.
- **Sources:** Rigollet Ch.2, PDF pp.40–64, especially Lemma 2.17 and Theorem 2.18, pp.61–64.
- **B examples:** Orthogonal design, a design satisfying the source incoherence premise, and a collinear design where the required RE condition fails. The last example blocks an invalid rate claim.

### Pair 4 — weak-\(\ell_q\) sparse covariance rates

- **A page:** **weak-lq-sparse-covariance-estimation**.
- **B page:** **sparse-covariance-rate-examples**.
- **A item proposals:** **def-weak-lq-sparse-covariance-class**; **def-entrywise-threshold-covariance-estimator**; **thm-thresholded-covariance-upper-bound**; **thm-sparse-covariance-minimax-lower-bound**.
- **Purpose/dependencies:** Reuse matrix operator norm, spectral/Frobenius comparison, the Category 1 sub-Gaussian-vector model, and Pair 0 minimax risk. Make the parameter class and \(p,n,q,c_{n,p}\) range explicit.
- **Result/proof route:** State Cai–Zhou’s theorem with \(0\le q<1\), \(p\ge n^\beta\) for fixed \(\beta>1\), \(c_{n,p}\le M n^{(1-q)/2}(\log p)^{-(3-q)/2}\), and squared spectral risk \(c_{n,p}^2(\log p/n)^{1-q}+\log p/n\). Define thresholding first; prove its entrywise deviation and operator-norm upper bound separately. The lower bound uses a finite structured family, mixture TV affinity, and a two-directional Le Cam/Assouad argument; cite the supplement for its deferred lemmas.
- **Sources:** Cai–Zhou Theorems 1–2, §§2–4 and §7, PDF pp.3–6, 23–33; entire six-page supplement.
- **B examples:** \(q=0\) row-sparsity rate, a weak-\(\ell_q\) example for \(q>0\), and a parameter value outside the stated growth range showing why the theorem cannot be extrapolated.

### Pair 5 — heavy-tailed and Huber-contaminated covariance estimation

- **A page:** **robust-covariance-estimation-under-heavy-tails-and-huber-contamination**.
- **B page:** **covariance-robustness-model-comparisons**.
- **A item proposals:** **def-huber-contamination-covariance-model**; **def-matrix-depth-covariance-estimator**; **thm-huber-covariance-minimax-risk**; **def-matrix-truncated-heavy-tailed-covariance-estimator**; **thm-heavy-tailed-covariance-intrinsic-rank-bound**.
- **Purpose/dependencies:** Keep the two models as separate subtopics on the A page: Huber contamination with arbitrary \(Q\), versus clean i.i.d. heavy tails with finite matrix variance. Reuse Pair 0 and the existing matrix norm/covariance facts; the depth and truncation estimators are algorithm definitions, not theorem clauses.
- **Result/proof route:** For Huber depth, state \(\epsilon<1/5\), bounded spectrum, \(\delta<1/2\), and \(C_1(p+\log(1/\delta))/n<1\); prove upper and lower bounds of squared operator order \((p/n)\vee\epsilon^2\). The sparse-depth result uses Chen–Gao–Ren’s block-sparse \(F_s(M)\) and \(s\log(ep/s)/n\vee\epsilon^2\), not the weak-\(\ell_q\) class. For Minsker–Wei, prove the adaptive truncation result only under finite matrix variance, \(m\ge C d\beta\), and the preliminary scale bracket, preserving its probability factor and \(18\sigma_0\sqrt{\beta/m}\) bound.
- **Sources:** Chen–Gao–Ren Theorems 3.1–3.7 and 5.1, PDF pp.8–11, 16 and proofs/supplement pp.23–53; Minsker–Wei Lemma 2.1, Theorem 2.1 and Corollary 2.2, pp.4–6, proofs in §4 and §5.
- **B examples:** Compare dense \(p/n\vee\epsilon^2\), block-sparse \(s\log(ep/s)/n\vee\epsilon^2\), and heavy-tail \(\sigma_0\sqrt{\beta/m}\). Label them as distinct premises. No result for “heavy tail plus arbitrary contamination” is available in the read sources.

### Pair 6 — exact finite-group randomization tests

- **A page:** **finite-group-randomization-inference**.
- **B page:** **finite-group-randomization-test-examples**.
- **A item proposals:** **def-finite-group-randomization-test**; **def-randomized-orbit-rank-pvalue**; **thm-randomization-test-validity-under-orbit-invariance**.
- **Purpose/dependencies:** Define a finite sample space, a finite group action, a statistic, and the conditional orbit law. Restrict the theorem to an invariant null so orbit points are conditionally equiprobable.
- **Result/proof route:** Under nonrandomized ties, the orbit-tail p-value is super-uniform; with an independent \(U\sim\mathrm{Unif}(0,1)\) randomized within the tie block, it is conditionally uniform. Prove by ordering the finite orbit statistic values and summing equal orbit masses. Do not infer exactness from bootstrap calibration or from invariance without the stated conditional orbit distribution.
- **Sources:** Stark Part 8 §1.3, PDF pp.10–11. There is no second full treatment in the inspected library; the proposed theorem is elementary enough to prove directly.
- **B examples:** Sign-flip and permutation orbits with ties; a non-invariant null as a counterexample. Examples do not become suppliers.

### Pair 7 — Ville bounds, e-processes and confidence sequences

- **A page:** **sequential-supermartingales-and-confidence-sequences**.
- **B page:** **time-uniform-mean-confidence-sequence-examples**.
- **A item proposals:** **thm-ville-inequality-for-nonnegative-supermartingales**; **def-test-supermartingale-and-e-process**; **def-confidence-sequence**; **thm-e-process-inversion-validity**; **def-subpsi-mixture-boundary**; **thm-stitched-subgamma-boundary**.
- **Purpose/dependencies:** Reuse **def-filtration-and-filtered-probability-space**, **def-adapted-and-integrable-stochastic-process**, **def-martingale-submartingale-and-supermartingale**, **def-discrete-stopping-time**, and **thm-optional-sampling-for-bounded-stopping-times**. Define the nonnegative test supermartingale and the time-uniform coverage event before explicit mixture/stitching boundaries.
- **Result/proof route:** Prove Ville by the bounded first-crossing stop \(\tau\wedge N\), supermartingale optional sampling, nonnegativity, and \(N\uparrow\infty\). Invert the crossing event to obtain coverage. For mixtures, require product measurability, use conditional Fubini to retain a supermartingale, then Ville. If using Howard’s stitched bound, state its sub-gamma \(c,\eta,m,h\) conditions and prove the geometric peeling/union-bound construction.
- **Sources:** Howard et al. Definition 1, Lemma 2 and Theorem 1, PDF pp.5, 8–10, with proofs Appendix A.1/A.3, pp.25–31; empirical-Bernstein Theorem 4, pp.13–14 and proof pp.35–36. Existing optional-sampling clause supplies the finite-horizon route.
- **B examples:** I.i.d. bounded-mean and sub-Gaussian-mean confidence sequences, with a pointwise interval shown only as a counterexample to optional stopping. Do not import bandits, A/B tests, potential-outcome models, adaptive experiments, or machine-learning predictors as prerequisites.

## Topic-to-pair and source coverage matrix

| Assigned topic | Proposed pair(s) | Read source coverage | Remaining proof/interface work |
|---|---|---|---|
| Contamination neighborhoods and local bias | Pair 1; Pair 5 for covariance | Stark Ch.9 pp.10–18; Ronchetti pp.15–23; Chen–Gao–Ren model and modulus | Prove uniform remainder where claiming max-bias expansion; distinguish local mixture, Huber mixture and sample replacement. |
| Influence functions and gross-error sensitivity | Pair 1 | Stark pp.13–18; Ronchetti pp.9–21 | State path derivative/regularity and prove M-estimator formula; source slides are not proof suppliers. |
| Breakdown | Pair 1 | Stark §§1.2, 1.4; Ronchetti pp.22–23; Chen discussion §6.3 | Fix minimum-unbounded-replacement convention and prove mean/median examples; do not infer breakdown from bounded IF. |
| Robust means, heavy tails, sample replacement | Pair 2 | Minsker 2013 Cor.4.1; Lugosi–Mendelson 2017 Thm.1; trimmed-mean Thms.1–2; Minsker 2019 Thm.3.1/Cor.3.1 | Preserve finite-moment, block, contamination and confidence ranges. Do not use the all-\(N\) LM 2017 statement where its block estimator is undefined. |
| Sparsity and high-dimensional regression | Pair 3 | Rigollet Ch.2 Lemma 2.17/Theorem 2.18 | Supply a reusable Category 1 sub-Gaussian-vector/noise interface; keep RE condition explicit. |
| Sparse covariance and minimax rate | Pair 4 | Cai–Zhou Thm.1–2, §7 and supplement | Supply the generic risk/minimax and sub-Gaussian interfaces; retain Cai–Zhou’s class and dimension range. |
| Covariance under heavy tails | Pair 5 | Minsker–Wei Lemma 2.1/Thm.2.1/Cor.2.2, full proofs | State finite matrix variance and adaptive scale bracket; no arbitrary-contamination guarantee. |
| Covariance under Huber contamination | Pair 5 | Chen–Gao–Ren Thms.3.1–3.7/5.1, full included proofs | Keep the unstructured and block-sparse covariance classes distinct; no polynomial-time claim. |
| Generic minimax rates and lower bounds | Pair 0; supports Pairs 4–5 | Rigollet Ch.5; Cai–Zhou §2; Chen–Gao–Ren §5 | Add risk/minimax, testing-TV, KL/Pinsker/Fano and contamination-modulus suppliers or merge with adequate Foundations-01/04 items. |
| Exact randomized inference | Pair 6 | Stark Part 8 §1.3 | Prove finite-orbit validity and randomized tie handling; no exactness from bootstrap. |
| General sequential inference | Pair 7 | Howard et al. full paper/proofs; existing martingale and optional sampling pages | Add Ville/e-process/CS suppliers; matrix corollaries require the cited earlier matrix-mgf condition if included. |

## Cross-role interfaces, exclusions and unresolved gaps

- **Earlier Category 1 interfaces:** Statistical model/estimator/risk definitions should be reconciled with Foundations-01. Generic sub-Gaussian variables/vectors, Bernstein/Hoeffding and matrix concentration should be reconciled with Foundations-04. General influence-functional language may overlap Foundations-05; merge rather than duplicate if its actual supplier body includes the robust contamination-path derivative and needed hypotheses. Current published library clauses do not supply these missing items.
- **Category wall:** Every proposed A item is Category 1. No B example is a cross-page supplier. No Category 1 item consumes a Category 2–4 model, Bayesian/computational-statistics result, or machine-learning result. The robust-mean and confidence-sequence papers mention ML, A/B testing, potential outcomes, or bandits, but those applications are excluded from the proposed dependency graph.
- **Conjectural and empirical content:** No simulation result, computational feasibility assertion, or conjectural extension is a theorem dependency. Algorithms are definitions; proved risk properties remain separate theorem items. Chen–Gao–Ren depth optimization and the trimmed slab estimator have no high-dimensional polynomial-time guarantee in these sources.
- **No unproved fallback:** If an assumption or missing theorem is not supplied, the corresponding rate is not stated. In particular, no extension of Cai–Zhou to Huber contamination, Minsker–Wei to arbitrary outliers, or any robust-mean rate to an undefined block regime is assumed.
- **Independent treatments:** Robust mean concentration has several full independent treatments (Minsker geometric median, Lugosi–Mendelson tournament, and trimmed mean). General influence/breakdown has two independent presentations, but neither is proof-complete; direct library proofs are needed. Sparse covariance minimax has one full primary article plus its supplement; MIT’s general covariance/sparse-PCA chapter is supporting context, not an independent proof of Cai–Zhou’s weak-\(\ell_q\) theorem. Heavy-tail covariance and Huber covariance are supported by one full paper each under different models. Exact finite-group randomization has one complete lecture section and should be proved directly. Sequential confidence sequences have one complete full-paper treatment; Ville itself can be proved from the existing bounded optional-sampling item.
- **Scope boundary:** This dossier proposes covariance estimation but not PCA eigenspace perturbation, because no adequate Davis–Kahan supplier was found in the checked library bodies. The read MIT and Chen papers contain PCA applications, but they are not necessary suppliers for the assigned covariance results.
- **Extraction quality:** PyMuPDF output is page-complete and page-marked. Some PDFs retain form-feed, carriage-return, or NUL control characters in equations; exact counts and hashes are recorded in sources.json. The PDF is the authority where a glyph mapping is imperfect.

## Status

Source acquisition, extraction, focused reading, supplier-body inspection, topic coverage, proof-route audit, and proposed dependency-ordered A/B scaffold are complete. This dossier is a source-backed proposal, not a statement that any proposed item or gate has been authored or verified.

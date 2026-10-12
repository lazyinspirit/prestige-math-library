# Category 4 audit progress

Scope: `research/plan-machine-learning-track.md` and evidence files under this
`learning/` directory only. The source dossiers in
`research/statistics-advanced-scaffolds-2026-10-11/learning-01` through
`learning-06` are inputs. No items, pages, canonical plans, workflow state,
engine controls, or files outside the assigned scope have been edited.

## Completed batch: ML-01–ML-11

The integrated pair designs now state their measurable risk and selector
premises, exact finite-class and Rademacher constants, delete-one stability
convention, source-faithful compression/PAC-Bayes contracts, surrogate regret
condition, nonvacuous VC lower-bound ranges, domain-discrepancy factors,
Gaussian and Bernoulli robust-learning ranges, and KMR fairness model. Repairs
are inline in `research/plan-machine-learning-track.md`. ML-08 now contains a
local affinity/TV proof design for the source’s omitted Bernoulli testing
exercise, plus the exact coordinate-count, Jensen, tail, and constant
calculations; the source gap remains identified and the scaffold is not treated
as a proved library item. Pair-by-pair source/supplier evidence is in
`pair-audit-batch-01-11.json`.

## Completed batch: ML-12–ML-15

The linear-model scope now gives Wainwright’s exact signed-support recovery
threshold constants and sequence/tuning assumptions. Linear classification
states the Gaussian covariance, logistic information, separation, and
perceptron margin contracts. RKHS/SVM definitions include the representer
projection argument, unpenalized-bias primal/dual conventions, KKT/Slater
obligations, and no solver convergence overclaim. GP regression now matches
Cat3’s finite posterior/predictive law for nonzero means, PSD prior/noise,
positive-definite observed covariance, and potentially singular conditional
covariance; the KRR penalty/noise normalization is explicit. Pair-level
findings, exact supplier clauses/status, source ranges and hashes, and future
proof-author obligations are in `pair-audit-batch-12-15.json`.

## Completed batch: ML-16–ML-19

The CART design now separates local split/pruning algorithms from global tree
optimality. Random-forest contracts carry the no-tie condition needed to pass
from vote convergence to risk convergence, exact source raw-margin strength and
weighted-correlation definitions, and separate regression assumptions. The
AdaBoost half-log coefficient/normalizer convention is reconciled with ESL’s
full-log update convention, with perfect rounds handled without infinite
coefficients; gradient tree boosting uses its source’s exact leafwise line
search. K-means now specifies empty-cluster and tie behavior for finite
termination, and Gaussian-mixture EM has explicit SPD-density, affine-span,
support/integrability, and KL/log-likelihood monotonicity conditions. The local
low-variance limit fills ESL Exercise 13.1 without attributing a proof to the
textbook. Pair findings, exact published suppliers, source ranges and hashes,
and item-author proof obligations are in `pair-audit-batch-16-19.json`.

## Completed batch: ML-20–ML-23

The spectral-clustering design now distinguishes weighted Laplacians from the
published unweighted simple-graph suppliers, handles zero-degree vertices, and
states the exact RatioCut/Ncut trace relaxations with a local multi-vector
minimization obligation. PCA, MDS, ISOMAP and LLE now have finite-matrix
contracts, including Euclidean-distance requirements, graph connectedness and
LLE nullspace/weight selection. The factor model now states standardized factors;
ICA’s cited identifiability theorem and NMF’s textbook-exercise MM proof remain
open local obligations. LMNN now gives the exact fixed-target hinge SDP and a
finite projected-gradient procedure without a solver-convergence claim. Pair
findings, exact supplier clauses/status, source ranges/hashes, and proof
gaps are in `pair-audit-batch-20-23.json`.

## Completed batch: ML-24–ML-29

ML-24 now separates Markov properties from clique factorization, restricts Gaussian
precision claims to observed SPD covariance, fixes the graphical-lasso penalty
convention/KKT conditions, and retains local proof gaps for the Gaussian iff and
any Hammersley–Clifford equivalence. ML-25 consumes SME-20’s exact SCM,
d-separation, global-Markov, and faithfulness contracts while owning skeleton,
Markov-equivalence, CPDAG and Meek proof designs. The source’s internally
inconsistent R4 line is recorded; background-free Meek R1–R3 closure is used.
ML-26 now states Peters et al.’s Condition 19, restricted-ANM quantifiers and
population-only RESIT assumptions. ML-27 includes exact mechanism sensitivity,
exponential utility, and basic/advanced composition clauses; ML-28 distinguishes
finite-class private ERM from event-level online privacy and gives the source’s
private regret contract. ML-29 distinguishes weighted client objectives, equal-client
SCAFFOLD, and local-SGD finite sums; it corrects the SCAFFOLD global step to
η_g=√S and preserves theorem-specific assumptions, steps and outputs. Pair-level
source hashes, exact supplier status/contracts, ranges and future proof obligations
are in pair-audit-batch-24-29.json.

A scoped cross-interface repair has also added BCS-22’s exact finite-normalizer,
absolute-continuity and log-integrability hypotheses to ML-59. The full ML-59 pair
audit remains outstanding.

## Completed batch: ML-30–ML-36

ML-30 now matches Leshno et al.’s activation class and separates compact-uniform
from finite-measure Lp density; the ridge/polarization step absent from that source
is explicitly local. ML-31 keeps Yarotsky, Telgarsky and Serra results under their
separate architecture/selection regimes and gives Serra’s exact high-width region
lower-bound product. ML-32 states the group-correlation sum for infinite discrete
p4/p4m groups only under finite-support or absolute-convergence conditions and
removes an unrelated graph supplier. ML-33 states both 1-WL/GNN directions under
countable features and bounded multiset size. ML-34 separates the direct D input
from S4’s zero-initial-state convolution kernel, states bilinear invertibility and
the exact arithmetic and finite-precision Cauchy costs. ML-35 keeps fixed-length
Yun universality distinct from Hahn’s fixed-parameter asymptotic hard/soft limits,
including the bounded-embedding and language-distribution contracts. ML-36 now
states Kovachki’s exact spaces/activation classes, AP and smooth-kernel proof routes,
Shin’s sampling/regularizer/PDE assumptions, and precise local variable-coefficient
elliptic/parabolic existence, stability, and energy proof obligations; existing
Schauder and heat maximum-principle results are not treated as matching suppliers.
Pair-level source hashes/ranges, published supplier contracts/statuses, and open
proof obligations are in `pair-audit-batch-30-36.json`. ML-59 received only the
separately recorded BCS-22 interface repair; its full source audit is outstanding.

## Completed batch: ML-37–ML-50

The gradient-method and learned-model pairs now distinguish local smoothness
descent from stochastic-oracle results, record exact random-iterate weighting,
separate heavy-ball from Nesterov, preserve the Adam/AMSGrad schedule conditions,
and carry the symmetry/independence needed by ReLU initialization recurrences.
The Du et al. finite-width theorems now include their actual network scalings,
width orders, and step sizes, with Gaussian Gram-persistence lemmas still open as
local proof/import obligations. Implicit-bias claims separate least squares,
separable linear losses, and the source’s Clarke differential-inclusion result;
the ReLU nonsmooth flow is not replaced by a pointwise classical derivative.
The spectral-margin and stability claims keep their source-specific metrics and
step regimes. Arora et al.’s compression proof has a factor-two gap between
coordinate score error and the stated margin loss; the local theorem is repaired
to use the $2\epsilon$ margin loss (or $\epsilon/2$ coordinate error) and an
explicit Hoeffding/union-bound confidence term. Source evidence, exact published
supplier clauses/statuses, source ranges, and remaining proof obligations are in
`pair-audit-batch-37-50.json`.

## Completed independent prerequisite batch: P-WGF-01/02 and P-RMT-01/02

All twelve independent prerequisite designs now have pair-level audits. The
Wasserstein rows use the exact Santambrogio continuity-equation/action-speed
statement and Chizat–Bach localized-flow assumptions, while leaving the AGS
proof imports explicit. The random-matrix rows distinguish the MP weak law from
upper and lower-positive edge limits. The complete Yin–Bai–Krishnaiah largest
edge proof was read; the Bai–Yin smallest-edge source is recorded at its exact
finite-fourth contract, but its PDF proof endpoint was inaccessible. A complete
MP proof remains an author/import obligation. Bai–Miao–Pan’s adapted
directional-resolvent proof and the rejected future-dependent Rubio–Mestre
martingale route are cross-linked with the local estimate corrections.
Per-pair source hashes/ranges, supplier contracts/statuses, and remaining proof
obligations are in
`pair-audit-prerequisites-wgf-rmt-09-12.json`.

The weak-order P-NUM-SDE-02 checkpoint also now states the conservative explicit
moment exponent $p\ge2q+8$ for polynomial backward-solution derivative growth,
fixed $T$, and uniform exact/Euler moments. It no longer says only “enough
moments.”

## Completed batch: ML-51–ML-55

ML-51–ML-55 are audited in `pair-audit-batch-51-55.json`. The contrastive
representation statement retains Arora et al.’s latent-class sampling law and
collision bounds; MAE remains an empirical mask-and-reconstruction recipe; the
VAE ELBO and score-matching identities now carry their exact integrability and
boundary hypotheses; and GAN optimal-discriminator algebra is separated from
finite neural training. ML-54 uses compact cutoffs for multivariate integration
by parts, since pointwise boundary decay alone does not establish vanishing
integrated flux. The batch records exact source ranges, supplier status and
remaining author obligations.

## Completed batch: ML-56–ML-60

ML-56–ML-60 are audited in `pair-audit-batch-56-60.json`. ML-56 reuses the
independent finite and compact KR interfaces rather than duplicating W1/KR
items. ML-57 states the global diffeomorphism and positive conditional-CDF
conditions for exact-density flows. ML-58 replaces Chen et al.’s abbreviated
Lipschitz-only Jacobian argument with a stronger local smooth-flow proof route.
ML-59 carries BCS-03’s PSD/observed-SPD Gaussian conditioning interface and
BCS-22’s finite-integrability ELBO contract. ML-60 preserves Anderson’s bounded
initial-state theorem and consumes the separately scoped unbounded-start
density-kernel route from P-SDE-02; positive-time truncation alone is not treated
as satisfying the bounded-start premise. The reverse terminal law remains the
actual $P_T$, with Gaussian-prior substitution stated as an additional matching
or approximation assumption.

## Focused independent prerequisite followup: P-SDE-02

P-SDE-02 now also owns a separate unbounded-start reversal contract based on
positive smooth transition/marginal densities, Bayes-reversed kernels, the
reversed generator on compactly supported tests, and a localized reverse
martingale problem with nonexplosion and Brownian reconstruction under uniform
ellipticity. This is a local proof design, not a source-verified theorem; each
step remains an author obligation. The earlier P-SDE-02 section hash and batch
are preserved; exact before/after hashes and the audited Anderson source range
are recorded in `pair-audit-prerequisite-p-sde-02-followup.json`.

The P-NUM-SDE-02 weak-order local proof design also has a focused correction:
the fourth-order Gaussian Taylor remainder is now $O(h^2)(1+\|x\|^{q+4})$,
not $O(h^2)(1+\|x\|^q)$. Its explicit $p\ge2q+8$ moment condition is retained;
the original numerical batch and section hashes remain in force, with the
correction recorded in `pair-audit-prerequisite-p-num-sde-02-followup.json`.

## Completed batch: ML-61–ML-64

ML-61–ML-64 are audited in `pair-audit-batch-61-64.json`. Flow matching now
carries the source’s Leibniz/Fubini/boundedness conditions and a local
quadratic-cost proof for its Gaussian conditional OT map. CLIP’s symmetric
contrastive objective uses a positive logit scale, and the overlap claim is
limited to the main paper’s inspected analysis. The foundation-model report is
treated as conceptual framing; Kaplan’s measured exponents and compute frontier
are explicit empirical fits, with the source caveats and tested WebText2 scope.
ML-64 consumes MSF-37’s exact split-conformal rank, sentinel and
training-conditional marginal-coverage interface. Calibration and benchmark
claims remain separate from conformal coverage, and neither is extended to
conditional or shifted guarantees.

## Completed batch: ML-65–ML-68

The online protocol rows now distinguish feedback, oblivious/non-anticipating/
reactive adversaries, static/dynamic/interval regret, and stochastic
pseudo-regret. Hedge and OGD carry Hazan's exact squared-loss and projected
regret bounds with the precise published suppliers; the subgradient extension
and Countable Choice premise for projections are explicit. OMD carries
Theorem 5.6's exact $\eta/4$ coefficient, while AdaGrad remains algorithm-only
because its optimizer proof is an exercise and the source's diagonal notation
needs a local derivation. ETC/UCB retain expected-regret scope and fixed
reward-table prefixes; their unbounded sub-Gaussian concentration proof is a
local MGF/product-measure obligation rather than a bounded-variable
Hoeffding/Azuma import. Pair findings, full-text source hashes/ranges, exact
supplier clauses/statuses, and future proof obligations are recorded in
`pair-audit-batch-65-68.json`.

## Focused independent prerequisite followup: P-RMT-02 source locator

The P-RMT-02 row now labels Rubio–Mestre's accepted-manuscript pp. 3–4 and
7–8 separately from the physical cached HAL PDF pp. 5–6 and 9–10; the exact
cached-PDF SHA-256 is bound in
`pair-audit-prerequisite-p-rmt-02-page-numbering-followup.json`. This is a
provenance clarification only; the rejected future-dependent Lemma 4 proof
route and all prior mathematical findings remain unchanged.

## Completed batch: ML-69–ML-72

ML-69–ML-72 are audited in pair-audit-batch-69-72.json. Exp3 and Exp4 retain
their expected-regret statements for oblivious rewards and their unbounded
importance estimates are not treated as bounded Hedge losses. LinUCB carries
the exact self-normalized confidence/regret formulas and source-specific
feature, MGF, parameter, reward-range, and action-max hypotheses; the local
Gaussian-mixture and determinant calculations remain author obligations.
Finite-MDP Bellman maps use the published Banach fixed-point interface with
contraction constant exactly gamma. The batch preserves full source hashes,
ranges, exact suppliers and proof gaps.

## Completed batch: ML-73–ML-76

ML-73–ML-76 are audited in pair-audit-batch-73-76.json. Tabular Q-learning
now has explicit finite-discounted-model, bounded-reward, infinite-visitation,
per-pair Robbins–Monro and martingale-noise premises; Monte Carlo exploring-
starts convergence remains an open source proof. PAC-MDP counts pathwise bad
decision steps, retains the source's adaptive-sampling proof gap, and records
the leading R-MAX/Delayed-Q orders. UCRL2 carries the exact $34DS\sqrt{AT\log(T/\delta)}$
upper bound and $0.015\sqrt{DSAT}$ lower bound with their theorem restrictions.
Policy-gradient and baseline identities retain terminating-episode,
differentiation and integrability conditions; no nonlinear actor–critic
convergence is inferred.

## Completed batch: ML-77–ML-80

ML-77–ML-80 are audited in pair-audit-batch-77-80.json. Baird's counterexample
is labeled in the source's expected-update convention, and the indistinguishable
MRP example is kept distinct from ML-79's unseen-action MDP impossibility.
Dyna-Q's deterministic table model and RTDP's restricted stochastic-optimal-
path theorem are explicit. A new finite-horizon simulation bound is a local
fixed-policy design with uniform reward/TV errors over the union of reachable
pairs; it does not cover model-selected policies under distribution shift.
Offline OPE consumes exact Radon–Nikodym/chain-rule interfaces under support
and integrability premises. POMDP belief updating carries its positive
normalizer and finite-horizon alpha-vector/witness limits.

## Completed batch: ML-81–ML-83

ML-81–ML-83 are audited in pair-audit-batch-81-83.json. DAgger separates its
infinite-sample no-regret/task-cost reduction from the finite-sample Azuma
statement and includes the one-step cost-to-go and expert-mixing conditions.
CPO records Achiam et al.'s average-divergence theorem exactly while retaining
the unavailable supplement proof and local TV/KL obligation. The empirical-
Bernstein sequence uses predictable bounded forecasts and the observed
squared forecast-error clock, centers at the average conditional mean, and
states the source's two-sided $1-2\alpha$ guarantee. Proposed earlier-category
interfaces are explicitly marked unpublished: MSF-34 is Category 1, while
SME-58/60 are Category 2. No Category 4 result is made an earlier-category
supplier.

## Final validation and evidence binding

The final machine-learning plan hash is
de4dd13424fd25ddec4bf14ec47251dafb343d553691ad6b3a56e87feb368185.
The four terminal batches cover ML-69–ML-83. ML-83’s later category-label
correction is bound by pair-audit-ml-83-category-source-classification-followup.json;
the other 14 terminal pair-section hashes match the final plan. Their evidence-file hashes are:

- pair-audit-batch-69-72.json: 5bc1a17f0d02d7495986c63969f40dd1b54f8630a562c8e1d769c300fc64f8ff
- pair-audit-batch-73-76.json: 11ddd2068f5a4244707d742e203ed745d3214da352c68231a587022c4edd8fa6
- pair-audit-batch-77-80.json: 68ebd729b7499b5434508c9d4be7412f18a3ef70a2a10d5ac1e9058537c8e57b
- pair-audit-batch-81-83.json: 5553f4fb39c9d71cc03d7466f2d18356a93291e325b918e9b74983af0c586777
- pair-audit-ml-83-category-source-classification-followup.json: 4a9f56cffccb6e0c4fba60daa166c231584fdf29579bc0519ab4ff4df4743b11
- final-coverage-manifest.json: fac51db193f0d782bf7488411cf5f793c9076f5d7a533c8d61391ee9471ea9cc
- rendercheck-final.json: b712a656426c1ef19623aef171a594be2672d60786f6e966499062b5f7008717

The coverage manifest binds the current section hashes for all 83 ML and 12
independent prerequisite pairs to the base batches and focused followups.
JSON parsing, pair coverage, and section-hash verification pass. Scoped
rendercheck reports zero errors and zero warnings. The pair JSON files retain
the exact source ranges, supplier contracts/statuses, and future proof
obligations. These are prose designs, not library items or completed future
proofs.

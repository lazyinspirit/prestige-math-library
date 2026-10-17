---
id: thm-csm-dk-compact-iid-propagation-of-chaos
kind: theorem
title: Compact iid empirical convergence and propagation of chaos
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 6
deps:
  - def-csm-dk-periodic-mean-field-model
  - def-csm-dk-phase-space-wasserstein-one
  - thm-csm-dk-finite-n-complete-flow
  - thm-csm-dk-dobrushin-and-particle-limit
  - def-identically-distributed-and-iid-random-variables
  - thm-ionescu-tulcea-construction-of-a-markov-chain
  - def-axiom-of-choice
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-csm-dk-periodic-mean-field-model: mathematical-premise
  def-csm-dk-phase-space-wasserstein-one: mathematical-premise
  thm-csm-dk-finite-n-complete-flow: mathematical-premise
  thm-csm-dk-dobrushin-and-particle-limit: mathematical-premise
  def-identically-distributed-and-iid-random-variables: mathematical-premise
  thm-ionescu-tulcea-construction-of-a-markov-chain: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: François Golse, The Mean-Field Limit for the Dynamics of Large Particle Systems, Journées Équations aux dérivées partielles short course (2003)
      url: https://www.cmls.polytechnique.fr/perso/golse/M2/Jedp03I.pdf
      locator: 'Appendix I.B, printed pp. 19-22: empirical laws and fixed-marginal propagation for chaotic sequences; the compact-support estimate here is derived locally.'
    - title: Pierre-Emmanuel Jabin and Zhenfu Wang, Mean Field Limit and Propagation of Chaos for Vlasov Systems with Bounded Forces (2015)
      url: https://arxiv.org/pdf/1511.03769
      locator: '§§1.3-1.4 and 2.1-2.2, printed pp. 7-16 and 19-28: their entropy and combinatorial estimates have different hypotheses and are not used here.'
---

## Statement

Let $K\subset Z=\mathbb T^d\times\mathbb R^d$ be compact and let
$\mu_0\in\mathcal P_1(Z)$ be supported in $K$. Take an iid sequence
$(Z_i(0))_{i\ge1}$ with common law $\mu_0$ (iid means a common law and mutual
independence as in [[def-identically-distributed-and-iid-random-variables]]).
Its existence for each $\mu_0$ follows from the countable-kernel construction
[[thm-ionescu-tulcea-construction-of-a-markov-chain]] under the Axiom of Choice.
Evolve the first $N$ coordinates by the finite-N flow from
[[thm-csm-dk-finite-n-complete-flow]], write
$\mu_N(s)=N^{-1}\sum_{i=1}^N\delta_{Z_i(s)}$, and let $\mu_s$ be the global
characteristic evolution from $\mu_0$. For $C=1+2A$, every finite $T>0$ and
$N\ge1$ satisfy

$$\mathbb E\sup_{|s|\le T}\mathcal W_1(\mu_N(s),\mu_s) \le e^{CT}\,\mathbb E\mathcal W_1(\mu_N(0),\mu_0) \le e^{CT}\left(\delta+\frac{D_K}{2}\sqrt{\frac{M_\delta}{N}}\right),$$

where for each $0<\delta\le1$ one may choose a finite Borel partition of
$K$ into $M_\delta\le C_K\delta^{-2d}$ cells of diameter at most $\delta$,
$D_K=\operatorname{diam}_{d_Z}(K)$, and $C_K$ depends only on $K$ and $d$.
Consequently the expected phase-space Wasserstein error tends to zero; choosing
$\delta=N^{-1/(2d+2)}$ gives a bound of order $N^{-1/(2d+2)}$ with a constant
depending on $K,d,T,A$. Almost surely,
$\sup_{|s|\le T}\mathcal W_1(\mu_N(s),\mu_s)\to0$.

For each fixed $k\ge1$ and every bounded Lipschitz $\Psi:Z^k\to\mathbb R$
with the sum metric $d_{Z^k}(z,z')=\sum_{j=1}^k d_Z(z_j,z'_j)$, the law
$f_N^{(k)}(s)$ of the first $k$ particles obeys,
for $N\ge k$ and $|s|\le T$,

$$\left|\int\Psi\,df_N^{(k)}(s)-\int\Psi\,d\mu_s^{\otimes k}\right| \le 2\|\Psi\|_\infty\frac{k(k-1)}{2N} +k\operatorname{Lip}(\Psi)e^{CT}\mathbb E\mathcal W_1(\mu_N(0),\mu_0).$$

Thus every fixed marginal converges to the product law uniformly on bounded
time intervals in bounded-Lipschitz tests, where bounded-Lipschitz means
$\|\Psi\|_\infty<\infty$ and
$\operatorname{Lip}(\Psi)=\sup_{z\ne z'}|\Psi(z)-\Psi(z')|/d_{Z^k}(z,z')<\infty$.
This conclusion is specific to the
compact iid preparation and the smooth $N^{-1}$ mean-field model.

## Facts & Assumptions

**Given:** A compactly supported probability $\mu_0$, an iid sequence with
that law, the finite-N dynamics, and the characteristic evolution.

[F1] [[def-identically-distributed-and-iid-random-variables]]: iid random
elements have a common marginal law and are mutually independent.

[F2] [[thm-ionescu-tulcea-construction-of-a-markov-chain]] and
[[def-axiom-of-choice]]: under full Axiom of Choice, a sequence with any fixed
probability law exists as the chain generated by constant transition kernels;
the theorem's construction uses Choice.

[F3] [[def-csm-dk-periodic-mean-field-model]] and
[[def-csm-dk-phase-space-wasserstein-one]]: $Z$ has dimension $2d$,
$d_Z=d_{\mathbb T^d}+|v-w|$, and $\mathcal W_1$ is the coupling-cost infimum.

[F4] [[thm-csm-dk-finite-n-complete-flow]]: the finite-N flow is complete and
commutes with particle permutations.

[F5] [[thm-csm-dk-dobrushin-and-particle-limit]]: for any first-moment
empirical initial law, the empirical particle evolution is exact and its
$\mathcal W_1$ distance from the characteristic solution is bounded by
$e^{(1+2A)|s|}$ times the initial distance.

[F6] [[def-product-measure-on-sigma-finite-spaces]],
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] and
[[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: finite product laws
and couplings exist, and nonnegative product integrals may be evaluated by
iterated integration.

[F7] [[cor-cauchy-schwarz-inequality-for-l-two]]: for a probability law,
$\mathbb E|Y|\le(\mathbb E|Y|^2)^{1/2}$ whenever the second moment is finite.

## Proof

1.1 For a finite Borel partition $\mathcal P=\{C_1,\ldots,C_M\}$ of $K$ with cell diameters at most $\delta$, put $p_j=\mu_0(C_j)$ and $P_{N,j}=N^{-1}\sum_{i=1}^N\mathbf1_{C_j}(Z_i(0))$. A coupling matches the common mass $\min(p_j,P_{N,j})$ inside each cell at cost at most $\delta$; the leftover mass is $r=\tfrac12\sum_j|P_{N,j}-p_j|$ and can be coupled across $K$ at cost at most $D_Kr$. Product measures in [F6] construct these within-cell and residual couplings (if $r=0$, no residual coupling is needed). Hence $\mathcal W_1(\mu_N(0),\mu_0)\le\delta+(D_K/2)\sum_j|P_{N,j}-p_j|$. Independence [F1] gives $\mathbb E|P_{N,j}-p_j|^2=p_j(1-p_j)/N$, so [F7] gives $\mathbb E|P_{N,j}-p_j|\le\sqrt{p_j/N}$; therefore the sum of expected discrepancies is at most $\sqrt{M/N}$. Partition a bounded velocity box containing $K$ and the position torus into rectangular cells of side at most a fixed multiple of $\delta$; intersect with $K$ and disjointize the cover. There are at most $C_K\delta^{-2d}$ cells, each with $d_Z$-diameter at most $\delta$. This proves the expected initial bound in the Statement. [F1, F3, F6, F7, given, construct, algebra]

1.2 For each $\mu_0$, take every coordinate space to be $(Z,\mathcal B(Z))$ and set every history-dependent kernel to $K_n(z_0,\ldots,z_n,A)=\mu_0(A)$. For each fixed $A$ this is constant, hence measurable, and it is a probability measure in $A$. The Ionescu--Tulcea theorem [F2], under full Choice, supplies a probability on the countable product whose finite-prefix laws are the iterated products of $\mu_0$. Reindexing coordinates from 0 to 1 gives the sequence in the Statement; its common marginals and product finite-prefix laws make its coordinates mutually independent and identically distributed by [F1]. [F1, F2, given, construct]

2.1 For a centered Bernoulli variable $Y=\mathbf1_{C_j}(Z_i)-p_j$, $\mathbb EY^2=p_j(1-p_j)$ and $\mathbb EY^4\le p_j$. Expanding the fourth power of the sum of independent centered variables leaves only terms with four equal indices or two equal pairs, so $\mathbb E|P_{N,j}-p_j|^4 =N^{-4}\left(N\mathbb EY^4+3N(N-1)(\mathbb EY^2)^2\right)\le4N^{-2}.$ For every rational $\varepsilon>0$, the elementary bound $\mathbb P(|P_{N,j}-p_j|>\varepsilon)\le \varepsilon^{-4}\mathbb E|P_{N,j}-p_j|^4$ makes $\sum_N\mathbb P(|P_{N,j}-p_j|>\varepsilon)<\infty$. By countable subadditivity, the probability of such deviations occurring for some $N\ge n$ is bounded by the tail of that convergent series, which tends to zero; hence for this rational $\varepsilon$ the deviations occur only finitely often almost surely. Intersect over rational $\varepsilon>0$, over the finitely many cells of each of a countable sequence of partitions with mesh $\delta_\ell\downarrow0$. The coupling bound in step 1.1 then gives $\limsup_N\mathcal W_1(\mu_N(0),\mu_0)\le\delta_\ell$ for every $\ell$, so the initial Wasserstein distance tends to zero almost surely. [F1, step 1.1, given, algebra]

3.1 Step 1.1 and $M_\delta\le C_K\delta^{-2d}$ give $\mathbb E\mathcal W_1(\mu_N(0),\mu_0)\le \delta+(D_K\sqrt{C_K}/2)\delta^{-d}N^{-1/2}$. Taking $\delta=N^{-1/(2d+2)}$ bounds both terms by constants times that power of $N$. Step 2.1 gives almost-sure convergence. Applying the stability bound [F5] at every $|s|\le T$ yields the supremum bound with factor $e^{CT}$, both in expectation and almost surely. [F5, step 1.1, step 2.1, algebra]

4.1 The joint law of the finite particle vector is permutation invariant by [F4] and iid symmetry [F1]. Given the finite-particle configuration at time $s$, draw $k$ indices independently and uniformly from $\{1,\ldots,N\}$. The resulting tuple has conditional law $\mu_N(s)^{\otimes k}$. The chance of an index collision is at most $\binom{k}{2}/N$ by a union bound. After averaging over the exchangeable particle vector, conditioning the index sampling on no collision makes the tuple's law equal to that of the first $k$ particles. Thus the expectation of $\Psi$ under the true $k$-law and under $\mu_N(s)^{\otimes k}$ differs by at most $2\|\Psi\|_\infty\binom{k}{2}/N$. For any coupling $\pi$ of $\mu_N(s)$ and $\mu_s$, its $k$-fold product from [F6] couples their product laws, and the sum-metric Lipschitz bound gives a test-integral difference at most $k\operatorname{Lip}(\Psi)\int d_Z\,d\pi$. Taking the infimum over $\pi$, then expectation, and using [F5] gives the second term in the displayed bound. The estimate tends to zero uniformly for $|s|\le T$, establishing fixed-$k$ propagation of chaos in the stated test class. [F1, F4, F5, F6, step 3.1, algebra] ∎

## Remarks
The expected rate is intentionally a simple finite-partition bound, not an
optimal Wasserstein rate. Almost-sure convergence is obtained from fourth
moments and a direct tail-union argument; no strong-law claim is needed.
The theorem assumes an iid sequence exists, while the cited Ionescu--Tulcea
construction records how one can obtain it under its full Choice hypothesis.


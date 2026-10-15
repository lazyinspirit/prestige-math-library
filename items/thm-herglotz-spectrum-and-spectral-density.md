---
id: thm-herglotz-spectrum-and-spectral-density
kind: theorem
title: "Herglotz spectral measure and the summable-covariance density"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-time-series-spectral-measure-and-periodogram
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
  - def-positive-definite-function-on-an-abelian-group
  - thm-bochner-theorem-for-lca-groups
  - thm-discrete-integers-have-circle-dual
  - def-integers
  - def-standard-topologies
  - def-topological-space
  - def-topological-group
  - def-locally-compact-space
  - def-radon-measure-on-an-lch-space
  - def-borel-sigma-algebra
  - def-homeomorphism-and-open-maps
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - lem-rat-embeds-dense
  - def-subspace-topology-top
  - def-topology-of-pointwise-convergence
  - def-product-topology
  - cor-second-countable-lch-locally-finite-borel-measures-are-regular
  - thm-choice-implies-dependent-implies-countable-choice
  - def-countable-choice
  - lem-angular-fourier-orthogonality
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-uniform-limit-continuous-complex-functions
  - def-axiom-of-choice
  - def-dependent-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Theorem 4.2 and Corollary 4.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 3.1"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Section 2.3"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let
$X=(X_t)_{t\in\mathbb Z}$ be a real weakly stationary process with mean
$\mu$ and autocovariance $\gamma(h)=\operatorname{Cov}(X_{t+h},X_t)$. Then
there is a unique finite positive Radon measure $F$ on $\mathbb T$ such that
$$\gamma(h)=\int_{\mathbb T}e^{ih\lambda}\,F(d\lambda)\qquad(h\in\mathbb Z),$$
and $F(\mathbb T)=\gamma(0)$. This is the spectral measure in
[[def-time-series-spectral-measure-and-periodogram]].

If, in addition, $\sum_{h\in\mathbb Z}|\gamma(h)|<\infty$, then $F$ is
absolutely continuous with respect to angular Lebesgue measure $d\lambda$ and
has the continuous nonnegative density
$$f(\lambda)=\frac1{2\pi}\sum_{h\in\mathbb Z}\gamma(h)e^{-ih\lambda},\qquad\lambda\in\mathbb T.$$
No mixing, central limit theorem, raw-periodogram consistency, or interval
coverage follows from these conclusions.

## Facts & Assumptions

**Given:** The Axiom of Choice, Dependent Choice, and a real weakly stationary process $X=(X_t)_{t\in\mathbb Z}$ with mean $\mu$ and autocovariance $\gamma(h)=\operatorname{Cov}(X_{t+h},X_t)$. For the density conclusion also assume $\sum_{h\in\mathbb Z}|\gamma(h)|<\infty$.

[F1] [[def-strict-and-weak-stationarity-for-time-series]]: every $X_t$ has finite second moment, $\mathbb E[X_t]=\mu$ is constant, and $\operatorname{Cov}(X_{t+h},X_t)$ is independent of $t$.

[F2] [[def-autocovariance-and-sample-autocovariance]]: the autocovariance function is $\gamma(h)=\operatorname{Cov}(X_{t+h},X_t)$ for $h\in\mathbb Z$.

[F3] [[def-positive-definite-function-on-an-abelian-group]]: a function $\phi:G\to\mathbb C$ is positive definite when every finite quadratic form $\sum_{j,k}c_j\overline{c_k}\phi(x_j-x_k)$ is a nonnegative real number.

[F4] [[thm-bochner-theorem-for-lca-groups]]: assuming AC and DC, a continuous positive-definite function on a locally compact Hausdorff abelian group $G$ has a unique finite positive Radon representing measure on $\widehat G$, with total mass $\phi(0)$ and representation $\phi(x)=\int_{\widehat G}\chi(x)\,dF(\chi)$.

[F5] [[thm-discrete-integers-have-circle-dual]]: for discrete additive $\mathbb Z$, the dual characters are $\chi_\lambda(h)=e^{ih\lambda}$ under $\lambda\mapsto e^{i\lambda}$.

[F6] [[def-radon-measure-on-an-lch-space]]: a Radon Borel measure is finite on compact sets, outer regular on Borel sets, and inner regular on open sets.

[F7] [[def-borel-sigma-algebra]] and [[def-homeomorphism-and-open-maps]]: a homeomorphism and its inverse carry Borel sets to Borel sets, since they carry open sets to open sets.

[F8] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]] and [[thm-monotone-convergence-for-the-integral]]: nonnegative Borel functions are increasing limits of simple functions, and their integrals pass to that limit.

[F9] [[def-integrable-real-and-complex-functions-and-their-integrals]] and [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: bounded real or complex Borel functions are integrable against a finite measure, and complex integrals are defined from the real and imaginary parts.

[F10] [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[def-subspace-topology-top]], [[lem-rat-embeds-dense]], [[cor-second-countable-lch-locally-finite-borel-measures-are-regular]], [[thm-choice-implies-dependent-implies-countable-choice]], and [[def-countable-choice]]: the circle is compact, Hausdorff, and second countable (intersections with rational open rectangles in $\mathbb C$ give a countable base, using density of the rationals); AC [A1] implies countable choice. Since $d\lambda$ is a finite Borel measure by [[def-time-series-spectral-measure-and-periodogram]], the regularity corollary makes it Radon.

[F11] [[lem-angular-fourier-orthogonality]]: for each integer $k$, $\int_{\mathbb T}e^{ik\lambda}\,d\lambda=2\pi$ if $k=0$ and is $0$ otherwise.

[F12] [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]: for nonnegative measurable $f$, the set function $B\mapsto\int_Bf\,d\lambda$ is a measure.

[F13] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: integrals of integrable real functions are linear; together with [F9] this justifies integrating the real and imaginary parts separately.

[F14] [[thm-uniform-limit-continuous-complex-functions]]: a uniform limit of continuous complex functions is continuous.

[F15] [[def-topology-of-pointwise-convergence]] and [[def-product-topology]]: each evaluation map $\chi\mapsto\chi(h)$ is the restriction of a continuous product projection, hence is Borel measurable on $\widehat{\mathbb Z}$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; this is assumed in the Bochner theorem [F4].

[A2] [[def-dependent-choice]]: dependent choice is assumed in the Bochner theorem [F4].

## Proof



**Proof technique:** Apply Bochner's theorem to the covariance sequence, then construct and identify the density directly by absolutely convergent Fourier series.

1.1 For any finite integers $h_1,\ldots,h_m$ and complex numbers $c_1,\ldots,c_m$, finite second moments make $\sum_jc_j(X_{h_j}-\mu)$ square-integrable. Expanding its squared modulus and using stationarity gives $\sum_{j,k=1}^m c_j\overline{c_k}\gamma(h_j-h_k) =\mathbb E\left|\sum_{j=1}^m c_j(X_{h_j}-\mu)\right|^2\ge0.$ Thus $\gamma$ is positive definite on the additive group $\mathbb Z$ by [F1]–[F3]. [F1, F2, F3, given, algebra]

1.2 Now assume absolute summability and define $f(\lambda)=(2\pi)^{-1}\sum_{h\in\mathbb Z}\gamma(h)e^{-ih\lambda}$. For every $N$, the tail is bounded uniformly in $\lambda$ by $(2\pi)^{-1}\sum_{|h|>N}|\gamma(h)|$, which tends to zero; finite partial sums are continuous, so the series converges uniformly to a continuous function $f$ by [F14]. [F14, given, algebra]

1.3 For each $N\ge0$, set $f_N(\lambda):=\frac1{2\pi}\sum_{|h|\le N}\left(1-\frac{|h|}{N+1}\right)\gamma(h)e^{-ih\lambda}.$ Using $c_j=e^{-ij\lambda}$ in [F3] for $j=0,\ldots,N$ and grouping pairs by $h=j-k$ gives $f_N(\lambda)=\frac1{2\pi(N+1)}\sum_{j,k=0}^Ne^{-i(j-k)\lambda}\gamma(j-k)\ge0.$ Moreover, $2\pi|f_N(\lambda)-f(\lambda)| \le\sum_{|h|>N}|\gamma(h)| +\sum_{|h|\le N}\frac{|h|}{N+1}|\gamma(h)|,$ and the right side tends to zero: first make the absolutely summable tail small, then let $N\to\infty$ on the remaining finite sum. Thus $f_N\to f$ uniformly, so $f$ is real and nonnegative. [F3, given, algebra]

2.1 Give $\mathbb Z$ the discrete topology. Every singleton is compact and open, distinct integers have disjoint open singleton neighborhoods, and maps from a discrete space are continuous; hence $\mathbb Z$ is a locally compact Hausdorff abelian topological group and $\gamma$ is continuous. By [F4] and step 1.1, there is a unique finite positive Radon measure $M$ on $\widehat{\mathbb Z}$ with $\gamma(h)=\int_{\widehat{\mathbb Z}}\chi(h)\,M(d\chi),\qquad M(\widehat{\mathbb Z})=\gamma(0).$ Use the homeomorphism $\Psi:\mathbb T\to\widehat{\mathbb Z}$ from [F5] and define $F(B):=M(\Psi(B))$ for Borel $B\subseteq\mathbb T$. Images of Borel sets are Borel by [F7], so this is a finite positive Borel measure. It is finite on compact sets because $\Psi$ maps compact sets to compact sets. For Borel $E\subseteq\mathbb T$, outer regularity of $M$ gives an open $V\supseteq\Psi(E)$ with $M(V)<M(\Psi(E))+\varepsilon$; then $U=\Psi^{-1}(V)$ is open, contains $E$, and $F(U)=M(V)$. For open $O\subseteq\mathbb T$, inner regularity gives compact $C\subseteq\Psi(O)$ with $M(C)>M(\Psi(O))-\varepsilon$; then $K=\Psi^{-1}(C)$ is compact in $O$ and $F(K)=M(C)$. Thus $F$ is Radon by [F6]. For any nonnegative Borel $q$ on $\widehat{\mathbb Z}$, $\int_{\mathbb T}q(\Psi(z))\,F(dz)=\int_{\widehat{\mathbb Z}}q(\chi)\,M(d\chi).$ Indeed the identity holds for indicators by the definition of $F$, hence for nonnegative simple functions by finite addition, and for nonnegative Borel functions by increasing simple approximation and monotone convergence [F8]. It also holds for bounded complex Borel $q$ by applying that argument to its positive and negative real and imaginary parts; these are integrable by [F9] because both measures are finite. Taking $q(\chi)=\chi(h)$ and using [F5] proves $\gamma(h)=\int_{\mathbb T}e^{ih\lambda}F(d\lambda)$. Also $F(\mathbb T)=M(\widehat{\mathbb Z})=\gamma(0)$. If another finite positive Radon measure $G$ on $\mathbb T$ represents $\gamma$, let $\widetilde G(E):=G(\Psi^{-1}(E))$ for Borel $E\subseteq\widehat{\mathbb Z}$. It is finite on compact sets because $\Psi^{-1}$ maps compact sets to compact sets. For Borel $E$, outer regularity of $G$ gives open $U\supseteq\Psi^{-1}(E)$ with $G(U)<G(\Psi^{-1}(E))+\varepsilon$; then $\Psi(U)$ is open, contains $E$, and $\widetilde G(\Psi(U))=G(U)$. For open $V\subseteq\widehat{\mathbb Z}$, inner regularity gives compact $K\subseteq\Psi^{-1}(V)$ with $G(K)>G(\Psi^{-1}(V))-\varepsilon$; then $\Psi(K)$ is compact in $V$ and $\widetilde G(\Psi(K))=G(K)$. Thus $\widetilde G$ is Radon by [F6] and [F7]. The same indicator/simple/monotone argument gives $\int_{\widehat{\mathbb Z}}q(\chi)\,\widetilde G(d\chi)=\int_{\mathbb T}q(\Psi(z))\,G(dz)$ for bounded Borel $q$. Taking $q(\chi)=\chi(h)$ shows $\widetilde G$ represents $\gamma$; uniqueness in [F4] gives $\widetilde G=M$. Hence $G(B)=\widetilde G(\Psi(B))=M(\Psi(B))=F(B)$ for every Borel $B\subseteq\mathbb T$. The integrands $\chi\mapsto\chi(h)$ are Borel by [F15], so the representing integrals are defined. [F4, F5, F6, F7, F8, F9, F15, A1, A2, step 1.1, given]

3.1 Put $s_N(\lambda):=(2\pi)^{-1}\sum_{|k|\le N}\gamma(k)e^{-ik\lambda}$. Absolute summability gives $\|s_N-f\|_\infty\to0$. For $N\ge|h|$, the finite sum and [F11] give $\int_{\mathbb T}e^{ih\lambda}s_N(\lambda)\,d\lambda =\frac1{2\pi}\sum_{|k|\le N}\gamma(k)\int_{\mathbb T}e^{i(h-k)\lambda}\,d\lambda =\gamma(h).$ If $q_N=e^{ih\lambda}(f-s_N)$ and $\tau_N=\|f-s_N\|_\infty$, then $|\operatorname{Re}q_N|,|\operatorname{Im}q_N|\le\tau_N$. By [F9], [F13], and $d\lambda(\mathbb T)=2\pi$, the integrals of the real and imaginary parts each lie between $-2\pi\tau_N$ and $2\pi\tau_N$: subtracting either part from the constant $\tau_N$ or adding it to that constant gives a nonnegative function, so monotonicity and linearity apply. The complex integral is the real-part integral plus $i$ times the imaginary-part integral [F9], hence its modulus is at most the sum of the two absolute values, $4\pi\tau_N$. This tends to zero. Hence $\int_{\mathbb T}e^{ih\lambda}f(\lambda)\,d\lambda=\gamma(h).$ By [F12], $\nu(B):=\int_Bf\,d\lambda$ is a measure; it is finite and positive since $0\le f\le\|f\|_\infty$ and $d\lambda(\mathbb T)=2\pi$. It is Radon: for a Borel $E$, outer regularity of $d\lambda$ [F10] gives open $U\supseteq E$ with $d\lambda(U\\setminus E)<\varepsilon/(\|f\|_\infty+1)$, hence $\nu(U\\setminus E)<\varepsilon$. Countable additivity [F12] then yields $\nu(U)<\nu(E)+\varepsilon$. For open $O$, inner regularity gives compact $K\subseteq O$ with $d\lambda(O\\setminus K)<\varepsilon/(\|f\|_\infty+1)$, hence $\nu(O\\setminus K)<\varepsilon$ and $\nu(O)<\nu(K)+\varepsilon$ by [F12]. These are the regularity clauses in [F6]. Thus $\nu$ is a finite positive Radon measure representing $\gamma$, and uniqueness in [F4] gives $F=f\,d\lambda$, with the stated density. [F1, F4, F6, F9, F10, F11, F12, F13, A1, A2, given, step 1.2, step 1.3, step 2.1, algebra] ∎

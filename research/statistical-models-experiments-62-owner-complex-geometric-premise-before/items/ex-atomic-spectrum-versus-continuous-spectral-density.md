---
id: ex-atomic-spectrum-versus-continuous-spectral-density
kind: example
title: "An atomic sinusoid and an AR(1) process have different spectra"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-time-series-spectral-measure-and-periodogram
  - thm-herglotz-spectrum-and-spectral-density
  - thm-periodogram-fejer-expectation-and-smoothing-bias
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
  - def-variance-and-covariance
  - def-identically-distributed-and-iid-random-variables
  - thm-expectation-of-products-of-independent-random-variables
  - thm-riesz-fischer-completeness-of-l-p
  - thm-monotone-convergence-for-the-integral
  - cor-cauchy-schwarz-for-random-variables
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-of-square-roots
  - thm-sine-and-cosine-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-geometric-series
  - ex-complex-geometric-power-series
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-complex-conjugation-and-modulus-laws
  - thm-discrete-integers-have-circle-dual
  - lem-compact-open-topology-on-a-discrete-domain-is-pointwise
  - def-topology-of-pointwise-convergence
  - def-product-topology
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-borel-sigma-algebra
  - def-measure
  - def-radon-measure-on-an-lch-space
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - def-nonnegative-lebesgue-integral
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - def-integrable-real-and-complex-functions-and-their-integrals
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - cor-integral-over-a-null-set-vanishes
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Theorem 4.2, Corollary 4.2, and Example 4.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Sections 3.1–3.2"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
verification:
  precheck: pass
---

## Example

Use the finite uniform space $\Omega=\{-1,1\}^2$ for the sinusoid model, and
use the probability space carrying $(\varepsilon_t)_{t\in\mathbb Z}$ for the
AR(1) model. Both models have exact expected-periodogram formulas but different
types of spectral measure. The first has two atoms and no spectral density. The second is an AR(1) process
whose one-sided innovation series is shown below to converge almost surely and
in $L^2$; this is its causal representation using only current and past
innovations, and it has a continuous spectral density. No raw-periodogram limit
distribution is asserted.

## Facts & Assumptions

**Given:** A parameter $v>0$, a frequency $\lambda_s\in(0,\pi)$, a
two-sided IID sequence $(\varepsilon_t)_{t\in\mathbb Z}$ of centered real
random variables with variance $\sigma^2\ge0$, a parameter
$\rho\in(-1,1)$, the Axiom of Choice, and Dependent Choice.

[F1] [[def-finite-probability-space-and-event]]: on a finite outcome set,
uniform weights $1/|\Omega|$ define a probability space and event
probabilities by finite sums.

[F2] [[def-expectation-on-a-finite-probability-space]]: expectation on a
finite probability space is the finite weighted sum.

[F3] [[def-variance-and-covariance]]: variance and covariance are expectations
of centered squares and products.

[F4] [[def-identically-distributed-and-iid-random-variables]]: IID means
mutual independence and a common marginal law.

[F5] [[thm-expectation-of-products-of-independent-random-variables]]: for a
finite independent family of integrable real variables, the expectation of
their product is the product of their expectations.

[F6] [[thm-riesz-fischer-completeness-of-l-p]]: assuming the Axiom of Choice,
$L^2$ of a measure space is complete.

[F7] [[cor-cauchy-schwarz-for-random-variables]]: if $Y,Z\in L^2$, then
$\mathbb E[|YZ|]\le\|Y\|_2\|Z\|_2$.

[F8] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation
is linear on integrable real or complex random variables, and
$|\mathbb E[Y]|\le\mathbb E[|Y|]$.

[F9] [[def-moments-variance-and-covariance]]: the variance of a
square-integrable real variable is the expectation of its centered square.

[F10] [[def-strict-and-weak-stationarity-for-time-series]] and
[[def-autocovariance-and-sample-autocovariance]]: weak stationarity means
finite second moments, a constant mean, and
$\gamma(h)=\operatorname{Cov}(X_{t+h},X_t)$ independent of $t$.

[F11] [[def-time-series-spectral-measure-and-periodogram]]: a spectral
measure represents the autocovariance by
$\gamma(h)=\int_{\mathbb T}e^{ih\lambda}F(d\lambda)$.

[F12] [[thm-herglotz-spectrum-and-spectral-density]]: under AC and DC, an
absolutely summable autocovariance has spectral density
$f(\lambda)=(2\pi)^{-1}\sum_h\gamma(h)e^{-ih\lambda}$.

[F13] [[thm-periodogram-fejer-expectation-and-smoothing-bias]]: given a
spectral measure $F$, the known-mean periodogram satisfies
$\mathbb E[I_n(\lambda)]=\int\Phi_n(\lambda-\theta)F(d\theta)$.

[F14] [[thm-monotone-convergence-for-the-integral]]: the integral of an
increasing limit of nonnegative measurable functions is the limit of their
integrals.

[F15] [[thm-of-square-roots]]: $v>0$ has a positive square root with
$(\sqrt v)^2=v$.

[F16] [[thm-sine-and-cosine-addition-formulas]] and
[[cor-trigonometric-parity-and-pythagorean-identity]]: the sine and cosine
addition formulas hold, $\sin(-x)=-\sin x$, and $\cos(-x)=\cos x$.

[F17] [[thm-geometric-series]] and [[ex-complex-geometric-power-series]]:
for $|r|<1$, $\sum_{j\ge0}r^j=(1-r)^{-1}$ for real $r$, and for complex
$z$ with $|z|<1$, $\sum_{j\ge0}z^j=(1-z)^{-1}$.

[F18] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]
and [[lem-complex-conjugation-and-modulus-laws]]: $e^{ix}=\cos x+i\sin x$,
$|e^{ix}|=1$, and complex modulus is multiplicative and satisfies the
triangle inequality.

[F19] [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]:
sequential limits, limsups and convergence sets of measurable real functions
are measurable.

[F20] [[def-dirac-measure]] and
[[prop-dirac-measure-is-a-probability-measure]]: each Dirac set function on
the Borel sigma-algebra is a probability measure.

[F21] [[lem-unit-circle-is-a-compact-metrizable-topological-group]] and
[[def-radon-measure-on-an-lch-space]]: $\mathbb T$ is compact Hausdorff, and
a finite Borel measure is Radon when it is finite on compact sets, outer
regular on Borel sets, and inner regular on open sets.

[F22] [[thm-sine-and-cosine-parametrize-the-unit-circle]],
[[thm-sine-cosine-zero-sets-and-fundamental-period]], and
[[thm-lebesgue-measure-of-a-box-of-every-kind]] and [F18]: the half-open interval
$[-\pi,\pi)$ has at most one angular representative of each circle point,
and a singleton in $\mathbb R$ has Lebesgue measure zero under Countable
Choice. Thus $d\lambda(\{z\})=0$ for each $z\in\mathbb T$ by the definition
in [F11].

[F23] [[cor-integral-over-a-null-set-vanishes]]: a nonnegative measurable
function integrates to zero over a measurable null set.

[F24] [[def-nonnegative-lebesgue-integral]],
[[def-integral-of-a-nonnegative-simple-function]],
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], and
[[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]:
nonnegative measurable functions have increasing simple approximations, and
the integral of a nonnegative simple function is its finite weighted sum.

[F25] [[def-integrable-real-and-complex-functions-and-their-integrals]] and
[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: a bounded
complex Borel function is integrable against a finite measure; the
nonnegative integral is monotone.

[F26] [[thm-discrete-integers-have-circle-dual]],
[[lem-compact-open-topology-on-a-discrete-domain-is-pointwise]],
[[def-topology-of-pointwise-convergence]], [[def-product-topology]], and
[[thm-continuous-preimages-of-borel-sets-are-borel]]: in the angular
coordinate, $\lambda\mapsto e^{ih\lambda}$ is a continuous evaluation
coordinate of the dual character and hence is Borel measurable.

[F27] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a
nonnegative measurable function with integral zero vanishes almost surely on
a probability space.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice
function; it supplies the hypothesis used in [F6] and [F12].

[A2] [[def-dependent-choice]]: dependent choice supplies the second hypothesis
used in [F12].

[A3] [[thm-choice-implies-dependent-implies-countable-choice]]: the assumed
Axiom of Choice supplies Countable Choice for the angular Lebesgue measure
convention in [F11] and the singleton calculation in [F22].

## Verification



**Given:** The finite sinusoid construction and the IID innovations and
parameters above; AC and DC.

1.1 On $\Omega=\{-1,1\}^2$ with weight $1/4$ at each outcome, let $A(a,b)=\sqrt v\,a$, $B(a,b)=\sqrt v\,b$, and define the sinusoid model $X_t^{(s)}=A\cos(t\lambda_s)+B\sin(t\lambda_s)$. Direct finite sums and [F15] give $\mathbb E[A]=\mathbb E[B]=\mathbb E[AB]=0$ and $\mathbb E[A^2]=\mathbb E[B^2]=v$. Thus $\mathbb E[X_t^{(s)}]=0$, and [F16] gives $\gamma_s(h)=\mathbb E[X_{t+h}^{(s)}X_t^{(s)}]=v\cos(h\lambda_s)$, independent of $t$; this model is weakly stationary by [F1]–[F3], [F10]. [F1, F2, F3, F10, F15, F16, given, algebra]

1.2 Let $S_{t,N}:=\sum_{j=0}^N\rho^j\varepsilon_{t-j}$. For $M>N$, independence and centering make all cross terms vanish, so $\|S_{t,M}-S_{t,N}\|_2^2 =\sigma^2\sum_{j=N+1}^M\rho^{2j}\longrightarrow0$ by convergence of the real geometric series [F17]. Thus $(S_{t,N})_N$ is Cauchy in $L^2$ for every $t$. [F4, F5, F7, F9, F17, given, algebra]

2.1 Put $a=\lambda_s$, $b=-\lambda_s$, and $F_s=(v/2)(\delta_a+\delta_b)$. By [F20] this is a finite positive Borel measure. It satisfies the Radon regularity clauses [F21]: for a Borel $E\subseteq\mathbb T$, the open set $U=\mathbb T\setminus\{x\in\{a,b\}:x\notin E\}$ contains $E$ and has $F_s(U)=F_s(E)$; for an open $O\subseteq\mathbb T$, the finite set $K=O\cap\{a,b\}$ is compact and has $F_s(K)=F_s(O)$; finiteness on compact sets follows from $F_s(\mathbb T)=v$. For a nonnegative simple $q=\sum_jc_j\mathbf 1_{E_j}$ with pairwise disjoint measurable $E_j$, its integral is $\int q\,dF_s=\sum_jc_j(v/2)(\mathbf 1_{a\in E_j}+\mathbf 1_{b\in E_j})=(v/2)(q(a)+q(b))$ by [F20] and [F24]. Increasing simple approximation [F24] and monotone convergence [F14] extend this formula to nonnegative measurable $q$, and decomposition into positive and negative real and imaginary parts extends it to bounded complex Borel $q$, which is integrable because $F_s$ is finite by [F25]. By [F26] the character $\lambda\mapsto e^{ih\lambda}$ is Borel, and its modulus is one by [F18], so it is integrable. The evaluation formula now gives $\int_{\mathbb T}e^{ih\lambda}F_s(d\lambda)=\frac v2(e^{ih\lambda_s}+e^{-ih\lambda_s})=v\cos(h\lambda_s)=\gamma_s(h)$. Thus $F_s$ is a spectral measure. Its two atoms are distinct because $0<\lambda_s<\pi$, and each has mass $v/2>0$. By [F22]–[F23], any density relative to $d\lambda$ assigns zero mass to $\{a\}$, whereas $F_s(\{a\})=v/2$; hence $F_s$ has no spectral density. [A3, F11, F14, F20, F21, F22, F23, F24, F25, F26, step 1.1, F18, algebra]

2.2 By [F6] and AC, for each $t$ the Cauchy sequence $S_{t,N}$ has an $L^2$ limit class represented by a real random variable $X_t^{(\rho)}$. Cauchy–Schwarz [F7] gives $\mathbb E|\varepsilon_0|\le\sqrt{\mathbb E\varepsilon_0^2}=\sqrt{\sigma^2}$. Monotone convergence [F14] and the real geometric series [F17] therefore give $\mathbb E[\sum_{j=0}^{\infty}|\rho|^j|\varepsilon_{t-j}|]=\sum_{j=0}^{\infty}|\rho|^j\mathbb E|\varepsilon_0|\le\sqrt{\sigma^2}/(1-|\rho|)<\infty$. Let $A_{t,N}:=\sum_{j=0}^N|\rho|^j|\varepsilon_{t-j}|$ and $A_t:=\lim_NA_{t,N}$. For each $M>0$, $M\mathbf1_{\{A_t=\infty\}}\le A_t$, so monotonicity [F25] gives $M\mathbb P(A_t=\infty)\le\mathbb E A_t<\infty$; letting $M$ increase shows the absolute series is finite almost surely. Each $A_{t,N}$ and $S_{t,N}$ is measurable with respect to $\mathcal F_t:=\sigma(\varepsilon_s:s\le t)$, so [F19] makes $A_t$, $C_t:=\{A_t<\infty\}$, and $\limsup_NS_{t,N}$ measurable. On $C_t$ the absolute convergence implies $S_{t,N}$ has a finite limit. Define $Y_t$ to be $\limsup_NS_{t,N}$ on $C_t$ and $0$ off $C_t$; it is $\mathcal F_t$-measurable and equals the signed series with value $0$ on the null divergence set. Its absolute tail satisfies $\mathbb E|Y_t-S_{t,N}|\le\sqrt{\sigma^2}|\rho|^{N+1}/(1-|\rho|)\to0$. Since $S_{t,N}\to X_t^{(\rho)}$ in $L^2$, [F7] applied with the constant $1$ gives $\mathbb E|S_{t,N}-X_t^{(\rho)}|\to0$, and hence $\mathbb E|Y_t-X_t^{(\rho)}|\le\mathbb E|Y_t-S_{t,N}|+\mathbb E|S_{t,N}-X_t^{(\rho)}|\to0$. Hence $\mathbb E|Y_t-X_t^{(\rho)}|=0$, and [F27] implies $Y_t=X_t^{(\rho)}$ almost surely. Choose the causal version $X_t^{(\rho)}:=Y_t$. For $N\ge1$, $S_{t,N}=\varepsilon_t+\rho S_{t-1,N-1}$, and $\|\rho(S_{t-1,N-1}-X_{t-1}^{(\rho)})\|_2=|\rho|\|S_{t-1,N-1}-X_{t-1}^{(\rho)}\|_2\to0$, so uniqueness of $L^2$ limits gives $X_t^{(\rho)}=\varepsilon_t+\rho X_{t-1}^{(\rho)}$ in $L^2$. Finite partial sums have mean zero by [F8], and $|\mathbb E X_t^{(\rho)}|\le\|X_t^{(\rho)}-S_{t,N}\|_2\to0$ by [F7]; hence $\mathbb E X_t^{(\rho)}=0$. [A1, A3, F6, F7, F8, F14, F17, F19, F25, F27, step 1.2, given]

3.1 Finite second moments make every $\varepsilon_t$ integrable by [F7], and its variance is as specified in [F9]. For $h\ge0$, the only nonzero terms in $\mathbb E[S_{t+h,N}S_{t,N}]$ pair the identical innovation indices; by [F4]–[F5], for $N\ge h$ this expectation equals $\sigma^2\sum_{k=0}^{N-h}\rho^{h+2k} \longrightarrow\frac{\sigma^2\rho^h}{1-\rho^2}$ by [F17]. For the passage to the limit, Cauchy–Schwarz [F7] gives $|\mathbb E[S_{a,N}S_{b,N}]-\mathbb E[X_a^{(\rho)}X_b^{(\rho)}]| \le\|S_{a,N}-X_a^{(\rho)}\|_2\|S_{b,N}\|_2 +\|X_a^{(\rho)}\|_2\|S_{b,N}-X_b^{(\rho)}\|_2\to0,$ because $\|S_{b,N}\|_2\le\|X_b^{(\rho)}\|_2+\|S_{b,N}-X_b^{(\rho)}\|_2$ is bounded by the $L^2$ convergence. Covariance symmetry for these mean-zero variables follows from commutativity of real products, so the formula for $h\ge0$ gives $\gamma_\rho(h)=\sigma^2\rho^{|h|}/(1-\rho^2)$ for every integer $h$, with $\rho^0:=1$. It is independent of $t$, so $X^{(\rho)}$ is weakly stationary by [F9]. [F4, F5, F7, F9, F10, F17, step 2.2, algebra]

4.1 Since $|\rho|<1$, the autocovariance is absolutely summable. Applying [F12] and summing the two complex geometric series by [F17], then using [F18], yields $f_\rho(\lambda)=\frac{\sigma^2}{2\pi(1-\rho^2)} \left(1+\sum_{h=1}^\infty\rho^h(e^{-ih\lambda}+e^{ih\lambda})\right) =\frac{\sigma^2}{2\pi(1-2\rho\cos\lambda+\rho^2)} =\frac{\sigma^2}{2\pi|1-\rho e^{-i\lambda}|^2}.$ The denominator is at least $(1-|\rho|)^2>0$, so this is a continuous nonnegative density. [F12, F17, F18, step 3.1, A1, A2, algebra]

5.1 Applying [F13] to the two spectral representations gives $\mathbb E[I_n^{(s)}(\lambda)] =\frac v2\{\Phi_n(\lambda-\lambda_s)+\Phi_n(\lambda+\lambda_s)\},\qquad \mathbb E[I_n^{(\rho)}(\lambda)] =\int_{\mathbb T}\Phi_n(\lambda-\theta)f_\rho(\theta)\,d\theta.$ The first expectation is a sum of two shifted kernels because the spectrum is atomic; the second averages a continuous density. These are exact finite-sample bias formulas and make no distributional or coverage claim. [F13, step 2.1, step 4.1, algebra] ∎

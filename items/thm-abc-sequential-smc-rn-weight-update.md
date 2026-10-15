---
id: thm-abc-sequential-smc-rn-weight-update
kind: theorem
title: Sequential ABC Radon–Nikodym weights target each tolerance law
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-abc-sequential-smc
  - alg-multinomial-and-residual-offspring-resampling
  - def-abc-augmented-tolerance-target
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels
  - lem-prior-and-model-kernel-define-joint-law
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-integration-against-a-radon-nikodym-derivative
  - thm-measurability-of-integration-against-a-kernel
  - thm-monotone-convergence-for-the-integral
  - thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts
proof_strategy: direct
axiom_use: "Assume AC through the jointly measurable kernel Radon–Nikodym result to obtain finite-valued population-parameter derivative versions almost surely. The multinomial offspring-count and conditional empirical-mean calculations are finite and choice-free."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §5.2 and Appendix, Algorithm 4"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Benjamin M. Turner and Thomas Van Zandt, A tutorial on approximate Bayesian computation, §3.2"
      url: https://www.stat.cmu.edu/~brian/rm/764-2016/week02/bad%20and%20good/papers/turner-vanzandt-2012-tutorial-on-ABC.pdf
---

## Statement

Assume the setup of [[alg-abc-sequential-smc]] and put
$$\gamma_t(d\theta,dy)=\Pi(d\theta)K(\theta,dy)\mathbf1_{A_{\epsilon_t}}(y), \qquad \pi_t=\gamma_t/Z_{\epsilon_t}=\widetilde\Pi_{\epsilon_t}.$$
For a measure $\mu$, write $\mu(f)=\int f\,d\mu$ for bounded nonnegative
measurable $f$. For every bounded nonnegative product-measurable
$f:\Theta\times\mathsf Y\to[0,\infty)$, let
$X_0^j=(\Theta_0^j,Y_0^j)$, $1\le j\le N$, be the initial $N$ independent
prior-simulator draws with law $H$ and weights
$a_0^j=\mathbf1_{A_{\epsilon_0}}(Y_0^j)$ satisfy
$$\mathbb E\!\left[\frac1N\sum_{j=1}^Na_0^jf(X_0^j)\right]=\gamma_0(f).$$
For each $1\le t\le T$ reached with positive probability, let
$Z_{t-1}=((\Theta_{t-1}^i,Y_{t-1}^i)_{i=1}^N,(W_{t-1}^i)_{i=1}^N)$ be the
previous population and let $\lambda_{t-1}$ be its law conditional on reaching
stage $t$. Use the standard-Borel population space and probability kernel
$\phi_t^N(z,\cdot)$ from [[alg-abc-sequential-smc]], and assume
$\Pi\ll\phi_t^N(z,\cdot)$ for $\lambda_{t-1}$-almost every $z$. The kernel
Radon–Nikodym lemma
[[lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels]]
then supplies a product-measurable derivative; use the finite-valued version
specified in [[alg-abc-sequential-smc]] after changing infinite values to zero.
Write this version as
$r_t^N(z,\theta)=d\Pi/d\phi_t^N(z,\cdot)(\theta)$ for almost every $z$.
Put $a_t^j=\mathbf1_{A_{\epsilon_t}}(Y_t^j)r_t^N(Z_{t-1},\Theta_t^j)$ for
the candidates produced by multinomial ancestor resampling, perturbation, and
simulation. For every bounded nonnegative product-measurable
$f:\Theta\times\mathsf Y\to[0,\infty)$,
$$\mathbb E\!\left[\frac1N\sum_{j=1}^Na_t^jf(\Theta_t^j,Y_t^j)\,\middle|\,\text{previous population}\right] =\gamma_t(f)\quad\text{almost surely on reaching stage }t.$$
In particular, the average weight is conditionally unbiased for
$Z_{\epsilon_t}$. If candidates with positive total weight are resampled by
the multinomial or residual scheme from normalized weights, then for every
bounded measurable $f$ their conditional empirical mean equals the weighted
candidate empirical mean in expectation. No unbiasedness is asserted for the
self-normalized finite-$N$ estimate, and a finite sample may have zero total
weight or fail to represent positive target mass.

## Facts & Assumptions

**Given:** AC, a prior $\Pi$, simulator probability kernel $K$, tolerance event
$A_{\epsilon_t}$, a previous weighted population, mixture $\phi_t^N$,
$\Pi\ll\phi_t^N$, and $Z_{\epsilon_t}>0$.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has
a choice function.

[F1] [[def-abc-augmented-tolerance-target]]: the unnormalized augmented target
is $\gamma_t=\Pi(d\theta)K(\theta,dy)\mathbf1_{A_{\epsilon_t}}(y)$ with
normalizer $Z_{\epsilon_t}>0$ and normalized target
$\pi_t=\gamma_t/Z_{\epsilon_t}$.

[F2] [[alg-abc-sequential-smc]]: the initial draws use $H$ with indicator
weights; later stages use multinomial ancestor-resampling, perturbation,
simulation, the tolerance indicator, and a product-measurable prior-to-mixture
derivative evaluated at the previous population and candidate parameter. Its
stage-specific support condition holds almost surely under the population law.

[F3] [[lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels]]:
for probability kernels $M,R$ on standard-Borel spaces, if
$M(z,\cdot)\ll R(z,\cdot)$ for $\lambda$-almost every $z$, there is a
product-measurable density that represents $dM(z,\cdot)/dR(z,\cdot)$ for
almost every $z$.

[F4] For this joint density $h$, the section identity at $B=\Theta$ gives
$\int h(z,\theta)\,\phi_t^N(z,d\theta)=1$ for almost every $z$. Thus the
set where $h(z,\cdot)=+\infty$ is $\phi_t^N(z,\cdot)$-null there, and setting
$h$ to zero on its product-measurable infinite-value set gives a finite-valued
product-measurable density version.

[F5] [[thm-integration-against-a-radon-nikodym-derivative]]: if
$r=d\Pi/d\phi$, then $\Pi(B)=\int_Br\,d\phi$ for every measurable $B$; finite
simple-function integration follows by finite addition.

[F6] [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]
and [[thm-monotone-convergence-for-the-integral]]: every nonnegative
measurable function is an increasing limit of simple functions, and
integrals pass to that limit.

[F7] [[alg-multinomial-and-residual-offspring-resampling]]: the resampling
procedure returns a length-$N$ ancestor list encoded by its offspring counts.

[F8] [[thm-multinomial-and-residual-resampling-have-unbiased-offspring-counts]]:
conditional on input weights, each offspring count has expectation $N$ times
its normalized input weight.

[F9] [[lem-prior-and-model-kernel-define-joint-law]]: the prior and simulator
kernel define a probability measure on $\Theta\times\mathsf Y$ and integrate
nonnegative product-measurable functions by iterated integration.

[F10] [[thm-measurability-of-integration-against-a-kernel]]: integrating a
nonnegative product-measurable function against a probability kernel gives a
measurable section integral.

[F11] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]:
finite sums, scalar multiples, and products of measurable functions with
measurable indicators remain measurable.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Each initial draw $X_0^j$ has law $H$ and weight $a_0^j=\mathbf1_{A_{\epsilon_0}}(Y_0^j)$, so definition of $\gamma_0$ gives $\mathbb E[a_0^jf(X_0^j)]=\int f\mathbf1_{A_{\epsilon_0}}\,dH=\gamma_0(f)$; linearity of the finite average proves the identity. [F1, given, algebra]

1.2 Fix $t$ with positive probability of reaching stage $t$, and let $\lambda_{t-1}$ be the conditional law of the previous population. By [F3], the constant kernel $z\mapsto\Pi$ and the proposal-mixture kernel $\phi_t^N$ have a product-measurable density $h(z,\theta)$; by [F4], its finite version $r_t^N(z,\theta)$ is a derivative for $\lambda_{t-1}$-almost every $z$. By [F10], $g_f(\theta)=\int_{\mathsf Y}\mathbf1_{A_{\epsilon_t}}(y)f(\theta,y)K(\theta,dy)$ is measurable and bounded. Choose simple functions $s_n\uparrow g_f$ by [F6]; each $s_n$ is a finite sum of measurable indicators, so $s_n(\theta)r_t^N(z,\theta)$ is measurable by [F11]. For almost every $z$, applying the setwise RN identity [F5] to the level sets of $s_n$ gives $\int s_n(\theta)r_t^N(z,\theta)\,\phi_t^N(z,d\theta)=\int s_n\,d\Pi.$ Since $r_t^N$ is finite and nonnegative, [F6] and monotone convergence give $\int g_f(\theta)r_t^N(z,\theta)\,\phi_t^N(z,d\theta)=\int g_f\,d\Pi.$ The right side is $\int f\mathbf1_{A_{\epsilon_t}}\,dH=\gamma_t(f)$ by the iterated-integral formula [F9] and target definition [F1]. Thus the one-candidate conditional proposal expectation equals $\gamma_t(f)$ for $\lambda_{t-1}$-almost every previous population. [A1, F1, F3, F4, F5, F6, F9, F10, F11, given]

2.1 Given parent $i$, each child has law $Q_t(\theta_{t-1}^i,d\theta)K(\theta,dy)$; the multinomial expected count is $NW_{t-1}^i$ by [F8]. Conditional on the previous population $z$, summing contributions over parents and dividing by $N$ gives the one-candidate expectation under $\phi_t^N(z,d\theta)K(\theta,dy)$ with weight $\mathbf1_{A_{\epsilon_t}}(y)r_t^N(z,\theta)$. Step 1.2 makes this $\gamma_t(f)$ for $\lambda_{t-1}$-almost every $z$, proving the conditional identity. [F2, F8, step 1.2, algebra]

3.1 For candidate weights $a_j=\mathbf1_{A_{\epsilon_t}}(y_j)r_t^N(Z_{t-1},\theta_j)$ with $\sum_ja_j>0$, [F8] gives conditional offspring-count means $Na_j/\sum_ka_k$; hence for bounded measurable $f$, $\mathbb E[\frac1N\sum_jC_jf(\theta_t^j,y_t^j)\mid(\theta_t^i,y_t^i,a_i)_{i=1}^N]=\sum_ja_jf(\theta_t^j,y_t^j)/\sum_ka_k$, the weighted empirical mean. If the total weight is zero, [F2] reports degeneracy and makes no normalized-target claim. [F2, F7, F8, algebra] ∎

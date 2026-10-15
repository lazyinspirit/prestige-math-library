---
id: alg-abc-sequential-smc
kind: algorithm
title: Sequential ABC importance-resampling with tolerance populations
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-multinomial-and-residual-offspring-resampling
  - def-abc-augmented-tolerance-target
  - def-axiom-of-choice
  - def-measure-kernel-and-probability-kernel
  - def-standard-borel-space
  - lem-finite-products-of-standard-borel-spaces-are-standard-borel
  - lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - thm-measurability-of-integration-against-a-kernel
justified_by:
  - thm-abc-sequential-smc-rn-weight-update
axiom_use: "AC is used through the jointly measurable kernel Radon–Nikodym result to choose finite-valued nonnegative population-parameter derivative versions. Ancestor resampling and the remaining finite procedure use only finite probability laws."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §5.2 and Appendix, Algorithm 4"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Benjamin M. Turner and Thomas Van Zandt, A tutorial on approximate Bayesian computation, §3.2"
      url: https://www.stat.cmu.edu/~brian/rm/764-2016/week02/bad%20and%20good/papers/turner-vanzandt-2012-tutorial-on-ABC.pdf
    - title: "Osvaldo A. Martin, Ravin Kumar, and Junpeng Lao, Bayesian Modeling and Computation in Python, Chapter 8"
      url: https://bayesiancomputationbook.com/markdown/chp_08.html
---

## Definition

Fix a finite horizon $T\ge0$, $N\ge1$, a positive nonincreasing tolerance
schedule $\epsilon_0\ge\epsilon_1\ge\cdots\ge\epsilon_T>0$, and assume
$Z_{\epsilon_t}>0$ for every $t$. Let
$\widetilde\Pi_{\epsilon_t}$ be the normalized augmented target from
[[def-abc-augmented-tolerance-target]]. The parameter proposal at stage $t$
is a probability kernel $Q_t(\theta,d\theta')$ on $\Theta$.

For each $t\ge1$, write the previous weighted population as
$$Z_{t-1}=((\theta_{t-1}^i,y_{t-1}^i)_{i=1}^N,(W_{t-1}^i)_{i=1}^N)$$
in the standard-Borel space
$$E_N=(\Theta\times\mathsf Y)^N\times[0,1]^N,$$
which is standard Borel by [[lem-finite-products-of-standard-borel-spaces-are-standard-borel]].
Let $\lambda_{t-1}$ be the law of $Z_{t-1}$ conditional on the algorithm
reaching stage $t$, when that event has positive probability. For
$z=((\theta_i,y_i)_{i=1}^N,(w_i)_{i=1}^N)\in E_N$, define the probability
kernel $\phi_t^N$ by
$$\phi_t^N(z,B)=\begin{cases}
\sum_{i=1}^Nw_iQ_t(\theta_i,B),&\sum_iw_i=1,\\[2pt]
\frac1N\sum_{i=1}^NQ_t(\theta_i,B),&\sum_iw_i\ne1.
\end{cases}$$
It is a probability kernel by [[def-measure-kernel-and-probability-kernel]] and
the finite-sum and measurable-product closure in
[[prop-closure-properties-of-measurable-functions-used-by-the-integral]].
The second branch only extends the kernel to ambient states outside the
algorithm; every actual previous population has normalized weights and uses
the proposal mixture in the first branch. Require
$\Pi\ll\phi_t^N(z,\cdot)$ for $\lambda_{t-1}$-almost every $z$ at every
stage that is reached with positive probability. Apply
[[lem-jointly-measurable-radon-nikodym-derivatives-for-probability-kernels]]
to the constant kernel $z\mapsto\Pi$ and the kernel $\phi_t^N$ to obtain a
product-measurable derivative on $E_N\times\Theta$. Set its value to zero
where it is infinite; since its integral is one for $\lambda_{t-1}$-almost
every $z$, this gives a finite-valued product-measurable version
$r_t^N(z,\theta)=d\Pi/d\phi_t^N(z,\cdot)(\theta)$ for almost every
previous population.

At stage $0$, draw $(\theta_i,y_i)$ independently from the prior-simulator
law $H$, and set $a_0^i=\mathbf1_{A_{\epsilon_0}}(y_i)$. If
$\sum_i a_0^i=0$, stop and report finite-particle degeneracy; otherwise
normalize these weights to obtain $W_0^i$ and report the weighted empirical
measure
$$\widehat\Pi_0^N=\sum_{i=1}^NW_0^i\delta_{(\theta_i,y_i)}.$$

For each $t=1,\ldots,T$, form the proposal mixture
$$\phi_t^N(\cdot)=\sum_{i=1}^N W_{t-1}^iQ_t(\theta_{t-1}^i,\cdot).$$
Draw $N$ ancestor indices from the previous weights using the multinomial
branch of [[alg-multinomial-and-residual-offspring-resampling]]. Conditional
on those ancestors, independently draw one perturbed parameter from its
$Q_t$ kernel and one datum from $K$ for each child. For a candidate
$(\theta_t^j,y_t^j)$ set
$$a_t^j=\mathbf1_{A_{\epsilon_t}}(y_t^j)r_t^N(Z_{t-1},\theta_t^j).$$
If $\sum_j a_t^j=0$, stop and report finite-particle degeneracy; do not report
a normalized target estimate. If the sum is positive, set
$W_t^j=a_t^j/\sum_k a_t^k$ and report the weighted empirical measure
$\widehat\Pi_t^N=\sum_jW_t^j\delta_{(\theta_t^j,y_t^j)}$.

If a stage degenerates, return that status and no normalized estimate for the
stage or any later target. If every stage through $T$ succeeds, return
$\widehat\Pi_T^N$; in particular, when $T=0$ the returned estimate is
$\widehat\Pi_0^N$.

The mixture support condition is stage-specific and must hold almost surely
under the law of the actual previous population. The algorithm makes no
finite-$N$ accuracy, mixing, or posterior-recovery claim.

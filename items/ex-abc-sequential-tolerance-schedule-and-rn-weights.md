---
id: ex-abc-sequential-tolerance-schedule-and-rn-weights
kind: example
title: A finite ABC-SMC tolerance schedule and its mixture weights
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - alg-abc-sequential-smc
  - def-abc-augmented-tolerance-target
  - thm-abc-sequential-smc-rn-weight-update
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §5.2 and Appendix, Algorithm 4"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Benjamin M. Turner and Thomas Van Zandt, A tutorial on approximate Bayesian computation, §3.2"
      url: https://www.stat.cmu.edu/~brian/rm/764-2016/week02/bad%20and%20good/papers/turner-vanzandt-2012-tutorial-on-ABC.pdf
---

## Example

Let $\Theta=\{0,1\}$ have the uniform prior and
$\mathsf Y=\{0,1,2\}$. The simulator has
$K(0,\{0\})=K(0,\{1\})=\tfrac12$ and $K(0,\{2\})=0$, while
$K(1,\{0\})=\tfrac14$, $K(1,\{1\})=\tfrac12$, and
$K(1,\{2\})=\tfrac14$. Take $S(0)=S(1)=0$, $S(2)=1$, and $s_0=0$.
Let $\epsilon_0=\tfrac32$ and $\epsilon_1=\tfrac12$. At stage $0$ every
simulated datum meets the tolerance. Condition on the possible stage-0
population $(\theta_1,\theta_2)=(0,0)$ with weights
$(\tfrac12,\tfrac12)$. At stage $1$ use a perturbation kernel with
$Q_1(0,\{0\})=\tfrac{99}{100}$ and
$Q_1(0,\{1\})=\tfrac{1}{100}$, and set the same row from $\theta=1$ so
$Q_1$ is fully specified.

## Verification

**Given:** The model, tolerances, previous weighted population, and
perturbation kernel specified in the Example.

[F1] [[def-abc-augmented-tolerance-target]]: the tolerance target has
unnormalized measure $\Pi(d\theta)K(\theta,dy)\mathbf1_{A_\epsilon}(y)$ and
normalizer $Z_\epsilon$.

[F2] [[alg-abc-sequential-smc]]: the proposal mixture is the weighted mixture
of perturbation kernels, and the incremental weight is the tolerance
indicator times $d\Pi/d\phi_t^N$.

[F3] [[thm-abc-sequential-smc-rn-weight-update]]: under the mixture support
condition, the conditional expected unnormalized weighted proposal law is
$\gamma_t(d\theta,dy)=\Pi(d\theta)K(\theta,dy)\mathbf1_{A_{\epsilon_t}}(y)$,
whose total mass is $Z_{\epsilon_t}$. Dividing this measure by
$Z_{\epsilon_t}$ gives the current normalized tolerance target; this does
not assert unbiasedness of a self-normalized finite-particle estimate.

1.1 At $\epsilon_0=3/2$, all simulated summaries are accepted, so $Z_{\epsilon_0}=1$; at $\epsilon_1=1/2$, acceptance probabilities are $1$ and $3/4$ at the two parameter values, giving $Z_{\epsilon_1}=7/8$ and target parameter masses $(4/7,3/7)$. [F1, given, algebra]

1.2 For the previous population $(0,0)$, $\phi_1^N(\{0\})=99/100$ and $\phi_1^N(\{1\})=1/100$, so it dominates the uniform prior and the RN ratios are $r_1^N(0)=(1/2)/(99/100)=50/99$ and $r_1^N(1)=(1/2)/(1/100)=50$. [F2, given, algebra]

2.1 A proposal matches tolerance with probability $(99/100)\cdot1+(1/100)\cdot(3/4)=399/400$; its expected weight contributions at $\theta=0,1$ are $(99/100)(1)(50/99)=1/2$ and $(1/100)(3/4)(50)=3/8$, totaling $7/8$. Their ratio is $(4/7,3/7)$, the population target marginal by [F3]; these are normalized expected unnormalized weights, not a realized self-normalized finite-particle estimate. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎

---
id: ex-abc-positive-tolerance-stationary-law
kind: example
title: A positive-tolerance ABC-MH stationary law can differ from the exact-data posterior
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - alg-abc-metropolis-hastings
  - alg-metropolis-hastings-kernel
  - def-abc-augmented-tolerance-target
  - lem-abc-augmented-target-has-tolerance-posterior-marginal
  - thm-abc-metropolis-hastings-invariance
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §5"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Benjamin M. Turner and Thomas Van Zandt, A tutorial on approximate Bayesian computation, §3.1"
      url: https://www.stat.cmu.edu/~brian/rm/764-2016/week02/bad%20and%20good/papers/turner-vanzandt-2012-tutorial-on-ABC.pdf
---

## Example

Let $\Theta=\{0,1\}$ have the uniform prior and let
$\mathsf Y=\{0,1,2\}$. The simulator probabilities are
$$K(0,\{0\})=\tfrac12,\quad K(0,\{1\})=\tfrac12,\quad K(0,\{2\})=0,$$
$$K(1,\{0\})=\tfrac14,\quad K(1,\{1\})=\tfrac12,\quad K(1,\{2\})=\tfrac14.$$
Take summary $S(0)=S(1)=0$, $S(2)=1$, observed summary $s_0=0$, distance
$|s-s_0|$, and positive tolerance $\epsilon=\tfrac12$. Thus the accepted
data set is $\{0,1\}$. Use the independence simulator proposal
$Q((\theta,y),\cdot)=H(\cdot)$, where $H=\Pi K$ is the prior-simulator law.

## Verification

**Given:** The finite prior, simulator, summary, tolerance, and independence
proposal specified in the Example.

[F1] [[def-abc-augmented-tolerance-target]]: the augmented target is
$\widetilde\Pi_\epsilon(C)=Z_\epsilon^{-1}\int_C
\mathbf1_{A_\epsilon}(y)\,H(d\theta,dy)$ when $Z_\epsilon>0$.

[F2] [[lem-abc-augmented-target-has-tolerance-posterior-marginal]]: the
parameter marginal of the augmented target is the tolerance-conditioned ABC
law.

[F3] [[alg-abc-metropolis-hastings]]: ABC-MH applies the general
Metropolis–Hastings accepted-flow construction to this target and the
simulator-based proposal, keeping rejected proposals as self-transitions.

[F4] [[thm-abc-metropolis-hastings-invariance]]: the resulting kernel is
reversible with respect to and leaves invariant this fixed-tolerance target.

[F5] [[alg-metropolis-hastings-kernel]]: the general accepted-flow procedure
uses the common part of the forward and transposed proposal flows and retains
rejected proposals as self-transitions.

1.1 The accepted prior-simulator masses are $H(0,0)=1/4$, $H(0,1)=1/4$, $H(1,0)=1/8$, and $H(1,1)=1/4$, while $(1,2)$ has mass $1/8$ outside the tolerance; hence $Z_\epsilon=7/8$. [F1, given, algebra]

2.1 Dividing those four accepted masses by $7/8$ gives augmented masses $(2/7,2/7,1/7,2/7)$ and, by [F2], parameter marginal $(4/7,3/7)$. [F1, F2, step 1.1, algebra]

3.1 Given exact data $Y=0$, the prior-weighted likelihood masses are $1/4$ at $\theta=0$ and $1/8$ at $\theta=1$, so the exact posterior is $(2/3,1/3)$, different from $(4/7,3/7)$ because the tolerance summary merges $Y=0$ with $Y=1$. [F2, step 2.1, algebra]

4.1 For accepted current and proposed states, the forward flow is $\widetilde\Pi_\epsilon(dx)H(dy)=\tfrac87H(dx)H(dy)$, symmetric under swap, so [F5] accepts; for proposal $(1,2)$ the transposed flow is zero and the proposal is rejected. Thus $P(x,B)=H(B\cap A_\epsilon)+\tfrac18\mathbf1_B(x)=\tfrac78\widetilde\Pi_\epsilon(B)+\tfrac18\mathbf1_B(x)$ for accepted $x$, and integration gives $\widetilde\Pi_\epsilon P(B)=\widetilde\Pi_\epsilon(B)$, verifying stationarity consistently with [F4]. [F1, F3, F4, F5, step 1.1, step 2.1, algebra] ∎

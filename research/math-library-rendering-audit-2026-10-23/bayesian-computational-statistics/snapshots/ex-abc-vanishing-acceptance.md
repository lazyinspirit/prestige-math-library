---
id: ex-abc-vanishing-acceptance
kind: example
title: ABC acceptance probability vanishes with the tolerance
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-abc-metropolis-hastings
  - alg-metropolis-hastings-kernel
  - def-abc-augmented-tolerance-target
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation, §§4–5"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Benjamin M. Turner and Thomas Van Zandt, A tutorial on approximate Bayesian computation, §3.1"
      url: https://www.stat.cmu.edu/~brian/rm/764-2016/week02/bad%20and%20good/papers/turner-vanzandt-2012-tutorial-on-ABC.pdf
---

## Example

Let the parameter space be the singleton $\{\ast\}$ with its unit prior and
let the simulator return $Y\sim\operatorname{Uniform}[0,1]$, independently of
the parameter. Use the independence proposal $Q=H$, meaning that each proposal
draws the singleton parameter and a fresh uniform datum. Take $S(y)=y$,
observation $s_0=\tfrac12$, and absolute distance. For
$0\le\epsilon\le\tfrac12$, the tolerance event is
$[\tfrac12-\epsilon,\tfrac12+\epsilon]$; for $\epsilon>\tfrac12$ it
contains the full simulator support $[0,1]$. For positive tolerance use the
explicit Metropolis–Hastings density representatives constructed below;
acceptance at individual starting states can depend on this choice.

## Verification

**Given:** A uniform simulator on $[0,1]$, the stated summary and observation,
and a tolerance $\epsilon\ge0$.

[F1] [[def-abc-augmented-tolerance-target]]: the prior-predictive
tolerance-event probability is $Z_\epsilon$, and the indicator target is
defined only when $Z_\epsilon>0$.

[F2] [[alg-abc-metropolis-hastings]]: a proposed augmented state is simulated
and retained only according to the fixed-tolerance Metropolis–Hastings
accepted-flow rule.

[F3] [[alg-metropolis-hastings-kernel]]: the generic procedure accepts with
the density of the common symmetric part of the forward and transposed
proposal flows relative to the forward flow and otherwise makes a
self-transition. The procedure chooses measurable representatives
$f=d\mu/d(\mu+\mu^{\mathsf T})$ and
$g=d\mu^{\mathsf T}/d(\mu+\mu^{\mathsf T})$ with $f+g=1$ everywhere,
and uses $\alpha=\min\{1,g/f\}$ when $f>0$ and $\alpha=1$ when $f=0$.

1.1 For $0\le\epsilon\le\tfrac12$, the tolerance interval has length $2\epsilon$, so the singleton prior gives $Z_\epsilon=2\epsilon$; for $\epsilon>\tfrac12$ it covers all of $[0,1]$, so $Z_\epsilon=1$. [F1, given, algebra]

2.1 Fix $\epsilon>0$ and write $h(x)$ for the tolerance indicator of the datum in the augmented state $x$. Relative to $H(dx)H(dy)$, the forward and transposed flows have densities $h(x)/Z_\epsilon$ and $h(y)/Z_\epsilon$. Choose $f(x,y)=h(x)/(h(x)+h(y))$ and $g(x,y)=h(y)/(h(x)+h(y))$ when $h(x)+h(y)>0$, and $f=g=1/2$ otherwise. These are measurable, sum to one everywhere, and multiplying them by the density $(h(x)+h(y))/Z_\epsilon$ of $\mu+\mu^{\mathsf T}$ recovers the two flow densities; hence they are valid representatives for [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 At every admissible current state $x$, $h(x)=1$, so these representatives give $f(x,y)>0$, $g(x,y)/f(x,y)=h(y)$ and thus $\alpha(x,y)=h(y)$. Consequently the acceptance probability is $\int h(y)H(dy)=Z_\epsilon$, equal to $2\epsilon\to0$ for $0<\epsilon\le\tfrac12$ and to $1$ for $\epsilon>\tfrac12$. At $\epsilon=0$, $Z_0=0$ and [F1] assigns no target. The pointwise acceptance calculation uses the specified representatives, rather than arbitrary modifications on flow-null sets. [F1, F2, F3, step 1.1, step 2.1, algebra] ∎

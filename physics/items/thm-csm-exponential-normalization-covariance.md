---
id: thm-csm-exponential-normalization-covariance
kind: theorem
title: "Dominated exponential normalization and covariance"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-statistical-state-observable
  - def-measure-with-density
  - thm-integration-against-a-density
  - thm-dominated-convergence
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - cor-exponential-reciprocal-and-positivity
  - thm-chain-rule-for-total-derivatives
  - cor-mean-value-theorem
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
dependency_roles:
  def-csm-statistical-state-observable: mathematical-premise
  def-measure-with-density: mathematical-premise
  thm-integration-against-a-density: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.3"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §§4.4 and 4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

Let $(\Omega,\mathcal F,m)$ be a sigma-finite measure space, let $w\ge0$ be
measurable with $m(\{w>0\})>0$, let $r\ge1$ and let
$X=(X_1,\ldots,X_r):\Omega\to\mathbb R^r$ be measurable and finite, and let
$\Theta\subseteq\mathbb R^r$ be open. For
each compact $K\subset\Theta$, assume an integrable $G_K$ satisfies
$$w(x)e^{\theta\cdot X(x)}\left(1+\sum_a|X_a(x)|^2\right)\le G_K(x)\quad(\theta\in K).$$
Then $Z(\theta)=\int w e^{\theta\cdot X}\,dm$ is finite, strictly positive
and $C^2$, and the probability density $\rho_\theta=Z(\theta)^{-1}we^{\theta\cdot X}$
defines $dP_\theta=\rho_\theta\,dm$ as in [[def-measure-with-density]].
For any integrable real $A$, write $\langle A\rangle_\theta:=\int A\,dP_\theta$;
for square-integrable real $A,B$, define
$\operatorname{Cov}_\theta(A,B):=\int(A-\langle A\rangle_\theta)(B-\langle B\rangle_\theta)\,dP_\theta$.
These extend the phase-space conventions of
[[def-csm-statistical-state-observable]] to the present measure space.
Then
$$\partial_a\log Z=\langle X_a\rangle_\theta,\qquad \partial_a\partial_b\log Z=\operatorname{Cov}_\theta(X_a,X_b).$$
In particular, the Hessian of $\log Z$ is positive semidefinite.

## Facts & Assumptions

**Given:** The measurable model above and one common integrable envelope on
each compact parameter neighborhood.

[A1] For every compact $K\subset\Theta$, the stated $G_K$ is integrable and
dominates the zeroth, first and second exponential moments.

[F1] Dominated convergence passes pointwise limits through an integral when
the functions have a common integrable majorant
([[thm-dominated-convergence]]).

[F2] The real exponential is differentiable with derivative itself; the chain
rule and mean-value theorem apply to its parameterized composition
([[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]],
[[thm-chain-rule-for-total-derivatives]], [[cor-mean-value-theorem]]).

[F3] The exponential is positive, and the natural logarithm is defined on
positive values with derivative $1/x$
([[cor-exponential-reciprocal-and-positivity]], [[def-natural-logarithm]],
[[thm-logarithm-derivative-and-integral]]).

[F4] The measure with density is defined on an arbitrary measure space
([[def-measure-with-density]]). Integration against it equals integration
of the density-weighted nonnegative function
([[thm-integration-against-a-density]]); applying this to positive and
negative parts gives the same identity for integrable real functions.
Expectations and covariances here have the explicit integral definitions
in the Statement, agreeing with [[def-csm-statistical-state-observable]]
when the reference is a phase-reference space.

## Proof

**Given:** [A1] and the integration, exponential and state interfaces [F1]–[F4].

1.1 For each fixed $\theta\in\Theta$, choose a compact neighborhood $K$ of $\theta$. The bound in [A1] implies $\int we^{\theta\cdot X}dm<\infty$. On $\{w>0\}$ the integrand is strictly positive by [F3]; since this set is the countable union of the sets $\{we^{\theta\cdot X}\ge1/k\}$, at least one has positive measure. Hence $Z(\theta)>0$ as well as finite. [A1, F3, algebra]

2.1 For coordinate $a$, choose a compact neighborhood $K$ of $\theta$ containing every $\theta+se_a$ with $|s|\le\epsilon$. The mean-value theorem and chain rule [F2] bound the difference quotient by $w|X_a|\sup_{|s|\le\epsilon}e^{(\theta+se_a)\cdot X}$. Since $|X_a|\le1+\sum_c|X_c|^2$, [A1] bounds this entire supremum pointwise by the single integrable $G_K$. Thus [F1] gives $\partial_aZ=\int wX_ae^{\theta\cdot X}dm$. Applying the same argument to the first derivative, with $|X_aX_b|\le(|X_a|^2+|X_b|^2)/2$, gives $\partial_b\partial_aZ=\int wX_aX_be^{\theta\cdot X}dm$. The same local envelopes and [F1] give continuity of these derivatives, hence $Z\in C^2$. [A1, F1, F2, step 1.1, algebra]

3.1 By [F3], dividing the first-derivative formula by $Z>0$ gives $\partial_a\log Z=\langle X_a\rangle_\theta$. Differentiating once more yields $$\partial_b\partial_a\log Z=\frac{\int X_aX_bwe^{\theta\cdot X}dm}{Z} -\frac{\int X_awe^{\theta\cdot X}dm\int X_bwe^{\theta\cdot X}dm}{Z^2} =\langle X_aX_b\rangle-\langle X_a\rangle\langle X_b\rangle.$$ The envelope makes $\int X_a^2\,dP_\theta$ finite; $|X_a|\le1+X_a^2$ and $2|X_aX_b|\le X_a^2+X_b^2$ give finite means and mixed moments. Expanding the centered product in the Statement's covariance definition, and using $P_\theta(\Omega)=1$, identifies the displayed difference with that covariance. For $v\in\mathbb R^r$ its quadratic form is $\langle(v\cdot(X-\langle X\rangle))^2\rangle\ge0$, proving positive semidefiniteness. [F3, F4, step 2.1, algebra] ∎


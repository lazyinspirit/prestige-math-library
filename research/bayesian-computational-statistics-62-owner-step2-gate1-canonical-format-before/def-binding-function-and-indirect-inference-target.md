---
id: def-binding-function-and-indirect-inference-target
kind: definition
title: "Binding function and indirect-inference target"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-statistic-and-estimator
  - def-law-or-distribution-of-a-random-element
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-parametric-statistical-model
  - def-identifiability-of-an-estimand
  - thm-identifiability-iff-constant-on-equivalence-classes
  - def-metric-space
  - def-metric-compactness
  - def-metric-continuity
justified_by:
  - thm-indirect-inference-target-exists-with-lexicographic-tie-break
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Christian Gouriéroux, Alain Monfort, and Eric Renault, Indirect Inference, Journal of Applied Econometrics 8, Supplement, S85–S118 (1993)"
      url: "https://www.stat.cmu.edu/~cshalizi/462/readings/Indirect%20Inference%20%28Gourieroux%2C%20Monfort%20and%20Renault%29.pdf"
    - title: "Thomas J. Sargent and John Stachurski, Intermediate Quantitative Economics with Python, Chapter 38: Which Moments to Match?"
      url: "https://python.quantecon.org/gallant_tauchen.html"
    - title: "Christopher C. Drovandi et al., Approximating the Likelihood in Approximate Bayesian Computation, Handbook of Approximate Bayesian Computation (2020)"
      url: "https://arxiv.org/pdf/1803.06645"
---

## Definition

Let $\mathsf E=((\mathcal X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$ be a statistical experiment and let $S:\mathcal X\to\mathbb R^d$ be a statistic, meaning a measurable map to its declared target as in [[def-statistic-and-estimator]], with finite second moment under each $P_\theta$. Expectations are integrated against the law as in [[def-law-or-distribution-of-a-random-element]] and [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], and covariance uses the centered second moment as in [[def-moments-variance-and-covariance]]. The **moment binding function** for this page is
$$
b:\Theta\to\mathbb R^d,\qquad b(\theta):=\mathbb E_\theta[S].
$$
The name refers here to the mean of the declared summary vector; classical indirect inference also uses bindings defined by auxiliary-model estimators, which are a different interface.

The summary-law map is itself a parametric model in the sense of [[def-parametric-statistical-model]]:
$$
Q:\Theta\to\mathcal P(\mathbb R^d),\qquad Q_\theta(B):=P_\theta(\{x:S(x)\in B\})
$$
for each Borel set $B\subseteq\mathbb R^d$. It records the full law of the summary, whereas $b$ records only its mean.

For the finite-dimensional minimum-distance target, assume $p\ge1$, a nonempty compact parameter set $\Theta\subseteq\mathbb R^p$ with its Euclidean subspace metric ([[def-metric-compactness]] [[def-metric-space]]), a binding map $b$ continuous from this metric to the Euclidean metric on $\mathbb R^d$ ([[def-metric-continuity]]), and a fixed summary vector $s\in\mathbb R^d$ (either the observed summary or a specified deterministic probability limit). Define
$$
q_s(\theta):=\|b(\theta)-s\|_2^2.
$$
Here $\|\cdot\|_2$ is the Euclidean norm. Require $q_s:\Theta\to\mathbb R$ to be continuous as part of this target’s admissible input contract. Its minimizer set is
$$M_s:=\operatorname*{arg\,min}_{\theta\in\Theta}q_s(\theta)=\{\theta\in\Theta:q_s(\theta)=\inf_{\eta\in\Theta}q_s(\eta)\}. $$
The **indirect-inference target** $\theta^{\mathrm{II}}(s)$ is the lexicographically least member of $M_s$: among all minimizers, minimize the first coordinate; among those, minimize the second; continue through coordinate $p$. The target is well-defined under exactly the stated compactness and continuity contract by [[thm-indirect-inference-target-exists-with-lexicographic-tie-break]].

For moment-based parameter recovery, the model’s identification contract must be declared for $b$ and the proposed limiting summary must be matched to a parameter, $s=b(\theta_0)$, for some $\theta_0\in\Theta$. If the method instead compares the full summary laws, its identification contract must be declared for the map $\theta\mapsto Q_\theta$. By [[def-identifiability-of-an-estimand]] and [[thm-identifiability-iff-constant-on-equivalence-classes]], injectivity of the relevant law map is exactly identifiability of the parameter from that experiment. These are assumptions on the inference problem, not conclusions of this definition.

No consistency theorem for an estimated minimizer follows from this target definition. Such a theorem needs additional hypotheses controlling sampling, simulation error, separation of the population target and the optimizer; the plan does not assert those hypotheses here.

## Remarks

The BCS-20 prerequisite page introduces numerical optimization procedures. Their iterates are computational outputs; this target remains the exact argmin with the tie rule specified above. No convergence of a numerical optimization routine to this target is claimed.

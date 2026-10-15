---
id: cex-positive-abc-tolerance-changes-posterior-target
kind: counterexample
title: "Positive ABC tolerance changes an identity-summary target"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-approximate-bayesian-computation
  - def-borel-sigma-algebra
  - def-complete-metric-space
  - def-exact-inferential-target-and-approximation-chain
  - def-measure-kernel-and-probability-kernel
  - def-metric-space
  - def-polish-space
  - def-probability-measure
  - def-separable-space
  - def-standard-borel-space
  - def-statistic-and-estimator
  - def-total-variation-distance-for-probability-laws
  - thm-abc-rejection-target-is-tolerance-conditioned-posterior
justified_by: []
proof_strategy: direct
axiom_use: "None. All probabilities and tolerance-ball events are finite and explicit; the rejection statement assumes an IID proposal-simulator sequence as stated in its supplier."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references:
    - title: "Jarno Lintusaari et al., Fundamentals and Recent Developments in Approximate Bayesian Computation (2017)"
      url: "https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf"
      locator: "Complete 47-page article, §§2–5, PDF pp. 10–23; closed tolerance events and conditional ABC target."
    - title: "Paul Fearnhead and Dennis Prangle, Constructing Summary Statistics for Approximate Bayesian Computation: Semi-automatic ABC (2012)"
      url: "https://arxiv.org/pdf/1004.1112"
      locator: "Complete 44-page paper, §§1–4, PDF pp. 1–18 and 35–38; summary and tolerance effects."
---

## Statement refuted

With the identity summary and positive prior-predictive acceptance probability, the tolerance $\epsilon=3/5$ gives an ABC target whose mass at $\theta=1$ is $9/17$, while the exact posterior mass is $4/5$; the total-variation distance is exactly $23/85$.

## Facts & Assumptions

**Given:** Let $\Theta=\{0,1\}$ have equal prior mass, let $\mathsf Y=\{0,\tfrac12,1\}$, and define
$$\begin{array}{c|rrr}y&0&\tfrac12&1 \\ P_0(y)&1/5&3/5&1/5 \\ P_1(y)&1/10&1/10&4/5\end{array}$$
Give $\Theta$ and $\mathsf Y$ their discrete sigma-algebras, take $S(y)=y$ into $\mathbb R$, observe $y=1$, and set $\epsilon=3/5$.

[F1] The ABC target is the prior-simulator law conditioned on the closed ball event when its prior-predictive probability is positive. [[def-approximate-bayesian-computation]]

[F2] If the proposal-simulator pairs are IID and acceptance probability is positive, ABC rejection terminates almost surely and its accepted parameter has exactly the tolerance-conditioned target. [[thm-abc-rejection-target-is-tolerance-conditioned-posterior]]

[F3] A finite discrete space with its discrete metric is complete and separable, and its Borel sigma-algebra is its power set; a function from this finite measurable space into $(\mathbb R,\mathcal B(\mathbb R))$ is measurable because every preimage is a subset of the finite source. [[def-metric-space]] [[def-complete-metric-space]] [[def-separable-space]] [[def-polish-space]] [[def-standard-borel-space]] [[def-borel-sigma-algebra]]

[F4] Exact fixed-data posterior probabilities are obtained by normalizing likelihood times prior when evidence is finite and positive. [[def-exact-inferential-target-and-approximation-chain]]

[F5] Total variation is the supremum over measurable events. [[def-total-variation-distance-for-probability-laws]]

[F6] A probability kernel assigns a probability measure at each parameter, and its probabilities of measurable events are measurable functions of the parameter. [[def-measure-kernel-and-probability-kernel]]

## Counterexample

**Given:** The table, equal prior, identity summary, observation, and positive tolerance in Facts & Assumptions.

1.1 Each row sums to one and has nonnegative entries, so it defines a probability measure at each parameter. Every event probability is measurable in the finite parameter space, hence the table defines a probability kernel by [F6]. Under the discrete metric a Cauchy sequence is eventually constant (take tail distances below $1/2$); each finite set is separable and all of its subsets are open. Hence both are standard Borel. The summary map $S$ is measurable to the real Borel sigma-algebra because every preimage is a subset of the finite measurable data space, by [F3]. [F3, F6, given, algebra]

1.2 At observation $1$, the likelihoods are $1/5$ and $4/5$, so the exact posterior mass at $\theta=1$ is $(4/5)/(1/5+4/5)=4/5$ by [F4]. The closed $\epsilon$-ball around $1$ is $\{1/2,1\}$. Its conditional probabilities are $P_0(B)=3/5+1/5=4/5$ and $P_1(B)=1/10+4/5=9/10$. Therefore the prior-predictive acceptance probability is $\frac12(4/5+9/10)=17/20>0$. [F1, F4, given, algebra]

2.1 Conditioning the prior-simulator law on this ball gives ABC mass at $\theta=1$ equal to $\frac{(1/2)(9/10)}{17/20}=9/17$ by [F1]. The exact and ABC posterior masses differ by $|4/5-9/17|=23/85$. [F1, step 1.2, algebra]

3.1 The measurable events in $\Theta=\{0,1\}$ are $\varnothing$, $\{0\}$, $\{1\}$, and $\Theta$. The exact and ABC probabilities agree on $\varnothing$ and $\Theta$; on $\{1\}$ their difference has absolute value $|4/5-9/17|=23/85$, and on $\{0\}$ it has the same absolute value because both are probability measures. Thus [F5] gives total-variation distance exactly $23/85$. If the proposal-simulator pairs $(\Theta_j,Y_j)$ are IID under the prior-kernel joint law, [F2] identifies this ABC target as the accepted-parameter law; the finite calculations make no additional convergence or efficiency claim. [F2, F5, step 2.1, algebra] ∎


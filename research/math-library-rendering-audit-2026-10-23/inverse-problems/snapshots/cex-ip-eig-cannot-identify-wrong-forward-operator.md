---
id: cex-ip-eig-cannot-identify-wrong-forward-operator
kind: counterexample
title: Expected information gain under a wrong operator does not identify the operator-parameter pair
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-design-indexed-inverse-experiment
  - def-ip-expected-information-gain
  - thm-ip-eig-is-joint-relative-entropy
  - def-kullback-leibler-divergence
  - thm-kullback-leibler-is-nonnegative
  - def-axiom-of-choice
  - thm-natural-logarithm-laws
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: AC is inherited from the library EIG/KL convention.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "David J. C. MacKay, Information-Based Objective Functions for Active Data Selection, Neural Computation 4(4) (1992), 590–604"
      url: "https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf"
      locator: "§6.1 and Conclusion: information utility is evaluated under the assumed model and can answer the wrong question when that model is incorrect."
    - title: "Kathryn Chaloner and Isabella Verdinelli, Bayesian Experimental Design: A Review, Statistical Science 10(3) (1995), 273–304"
      url: "https://www.stat.cmu.edu/tr/tr599/tr599.ps"
      locator: "§1.2 and §2.2: the design objective averages information under the specified prior-predictive model."
---

## Statement refuted

The following implication is false: in every finite dominated inverse experiment, if expected information gain for a parameter is positive under a fixed nominal forward operator, then an unknown truth-operator pair is identifiable from the observation law, where identifiable means that distinct pairs induce distinct conditional observation laws.

## Statement references

[MacKay, §6.1 and Conclusion, model-correctness caveat](https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf)

[Chaloner and Verdinelli, §§1.2 and 2.2](https://www.stat.cmu.edu/tr/tr599/tr599.ps)

## Example

Take one scalar observation $Y=a\theta+\epsilon$ on $\mathsf Y=\{1,2,3\}$ with counting measure and independent noise $\epsilon$ uniform on $\{0,1\}$. In the actual model the unknown pair $H=(\theta,a)$ is uniform on $\{(1,1),(2,\frac12)\}$. In the nominal model the operator is fixed at $a=1$ and $\theta$ is uniform on $\{1,2\}$. Under the actual model both pairs give the same law, uniform on $\{1,2\}$; under the nominal model the expected information gain for $\theta$ is $\frac12\log 2>0$.

## Example references

[[def-ip-design-indexed-inverse-experiment|A finite parameter space, counting observation measure, proper prior, and dominated likelihood define an indexed experiment.]]

[[def-ip-expected-information-gain|EIG averages posterior-to-prior KL over the prior-predictive law.]]

[MacKay, §6.1, misspecified-model example](https://gwern.net/doc/reinforcement-learning/exploration/active-learning/1992-mackay.pdf)

## Facts & Assumptions

**Given:** AC; the finite actual and nominal experiments in the Counterexample; the parameter priors and the counting measure on $\mathsf Y$.

[A1] AC is inherited from the library KL convention. [[def-axiom-of-choice]]

[F1] Expected information gain equals $D(P_{\theta,Y}\|P_\theta\otimes P_Y)$ for the specified dominated experiment. [[thm-ip-eig-is-joint-relative-entropy]]

[F2] The expected information gain is the prior-predictive integral of posterior-to-prior KL divergence. [[def-ip-expected-information-gain]]

[F3] KL divergence is nonnegative and vanishes exactly when the two probability measures agree. [[thm-kullback-leibler-is-nonnegative]]

[F4] The natural logarithm is strictly increasing and $\log1=0$. [[thm-natural-logarithm-laws]]

[F5] On a finite probability space, $D(P\|Q)=\sum_xP(\{x\})\log(P(\{x\})/Q(\{x\}))$, with zero-mass terms equal to zero. [[def-kullback-leibler-divergence]]

## Verification

**Given:** The finite models in the Counterexample.

1.1 In the actual model, $a\theta=1$ for both possible pairs. Hence $P(Y\in\{1,2\}\mid H=(1,1))=P(Y\in\{1,2\}\mid H=(2,\frac12))=1$, and both conditional laws assign probability $\frac12$ to each of $1$ and $2$. Thus $H$ and $Y$ are independent, so [F1] and [F3] give actual-pair EIG $D(P_{H,Y}\|P_H\otimes P_Y)=0$. The two distinct pairs have identical observation laws and are not identifiable. [A1, F1, F3, given, algebra]

1.2 In the nominal model, $\theta=1$ gives $Y\in\{1,2\}$ equiprobably and $\theta=2$ gives $Y\in\{2,3\}$ equiprobably. Therefore the predictive probabilities are $P(Y=1)=\frac14$, $P(Y=2)=\frac12$, and $P(Y=3)=\frac14$. [given, algebra]

2.1 The joint probabilities are $P(\theta=1,Y=1)=\frac14$, $P(\theta=1,Y=2)=\frac14$, $P(\theta=2,Y=2)=\frac14$, and $P(\theta=2,Y=3)=\frac14$. Dividing by the marginals in step 1.2 gives posterior $\delta_1$ at $Y=1$, the original uniform prior at $Y=2$, and $\delta_2$ at $Y=3$. By [F5], the corresponding KL values are $\log2$, $0$, and $\log2$. Thus [F2] gives nominal EIG $\frac14\log2+\frac12\cdot0+\frac14\log2=\frac12\log2>0$ by [F4]. [A1, F2, F4, F5, step 1.2, algebra]

3.1 By [F1] and [F3] as applied in step 1.1, the actual-pair EIG is zero although the pairs are distinct and observationally identical; by step 2.1 the nominal fixed-operator EIG is positive. Thus the claimed implication fails. [F1, F3, step 1.1, step 2.1, algebra] ∎


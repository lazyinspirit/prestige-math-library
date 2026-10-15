---
id: cex-pairwise-positive-correlation-does-not-imply-prds
kind: counterexample
title: "Positive covariance does not imply PRDS"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-statistical-experiment
  - def-prds-on-true-null-coordinates
  - def-conditional-law-given-a-random-element
  - def-null-valid-p-value-and-fwer-fdr
  - def-p-value
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

Positive pairwise covariance of valid p-values is sufficient for their joint law to be PRDS on the true-null coordinates.

## Facts & Assumptions

**Given:** A finite statistical experiment, two p-value statistics, and both null hypotheses true at its only parameter value.

[F1] [[def-statistical-experiment]]: an experiment is a measurable sample space, a parameter-label set, and a probability law for each parameter.

[F2] [[def-p-value]]: a p-value statistic is a measurable map from the sample space into $[0,1]$.

[F3] [[def-null-valid-p-value-and-fwer-fdr]]: a p-value is valid for a null when $P(p_i\le u)\le u$ for every $u\in[0,1]$ under each parameter in that null.

[F4] [[def-prds-on-true-null-coordinates]]: PRDS requires conditional probabilities of every coordinatewise increasing Borel set to have a nondecreasing version on the support of each true-null coordinate.

[F5] [[def-conditional-law-given-a-random-element]]: a conditional-law kernel satisfies $\int_A K(x,D)\,P_{P_1}(dx)=P(P_1\in A,\ P\in D)$ for Borel $A,D$.

[A1] Let $\Omega=\{\omega_1,\omega_2,\omega_3,\omega_4\}$ with its power-set sigma-algebra, let $\Theta=\{\theta_0\}$, and assign probabilities $1/10,1/5,2/5,3/10$ to the four states. Set both null hypotheses equal to $\Theta$ and define the p-values by the following state table:

| State | Probability under $\theta_0$ | $p_1$ | $p_2$ |
|---|---:|---:|---:|
| $\omega_1$ | $1/10$ | $1/5$ | $1/5$ |
| $\omega_2$ | $1/5$ | $3/5$ | $4/5$ |
| $\omega_3$ | $2/5$ | $4/5$ | $3/5$ |
| $\omega_4$ | $3/10$ | $1$ | $1$ |

[A2] The PRDS statement uses the standard-Borel conditional-law interface stated under the Axiom of Choice ([[def-axiom-of-choice]]); the finite positive-mass conditional probabilities below are forced for every version.

## Counterexample

1.1 The four probabilities in [A1] sum to one, so they define the sampling law of a one-parameter experiment [F1]. Since the sample space is finite with its power-set sigma-algebra, each table coordinate is a measurable $[0,1]$-valued map and hence a p-value statistic by [F2]. The marginal masses of $p_1$ at $1/5,3/5,4/5,1$ are $1/10,1/5,2/5,3/10$, giving cumulative probabilities $1/10,3/10,7/10,1$. Those are at most their corresponding support values. Between consecutive support values the cumulative probability stays fixed at the preceding value, and below $1/5$ it is zero; thus $P_{\theta_0}(p_1\le u)\le u$ for every $u\in[0,1]$. For $p_2$, the masses at $1/5,3/5,4/5,1$ are $1/10,2/5,1/5,3/10$, giving cumulative probabilities $1/10,1/2,7/10,1$, again at most the support values and hence at most every intervening $u$. Both p-values are valid by [F3]. [F1, F2, F3, A1, algebra]

1.2 Direct summation in [A1] gives $E[p_1]=19/25$, $E[p_2]=18/25$, and $E[p_1p_2]=74/125$, hence $\operatorname{Cov}(p_1,p_2)=74/125-(19/25)(18/25)=28/625>0$. Both marginal laws are nonconstant, so both variances are positive and the Pearson correlation is positive as well. [A1, algebra]

2.1 The support of $p_1$ is $\{1/5,3/5,4/5,1\}$, with positive mass at every point. Let $D=\{(x,y)\in[0,1]^2:y\ge4/5\}$, a coordinatewise increasing Borel set. At each support point $x$, [F5] with conditioning event $A=\{x\}$ forces $K(x,D)=P(p_1=x,(p_1,p_2)\in D)/P(p_1=x)$ for every conditional-law version. The table makes these conditional probabilities at $x=1/5,3/5,4/5,1$ equal to $0,1,0,1$, respectively. Every version therefore decreases from $1$ at $3/5$ to $0$ at $4/5$, violating the monotonicity in [F4] because $3/5<4/5$. By steps 1.1 and 1.2, these are valid p-values with positive covariance; thus the law is not PRDS on the true-null set and refutes the statement. It makes no BH FDR claim for this law. [F4, F5, A1, A2, step 1.1, step 1.2, algebra] ∎

## Remarks

The counterexample concerns the dependence premise only. Positive pairwise covariance does not verify the PRDS condition required by the ordinary BH theorem.

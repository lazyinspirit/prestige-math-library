---
id: ex-nonunique-binding-function-target
kind: example
title: "A non-injective binding map cannot recover a sign"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-binding-function-and-indirect-inference-target
  - thm-indirect-inference-target-exists-with-lexicographic-tie-break
  - def-statistic-and-estimator
  - def-law-or-distribution-of-a-random-element
  - def-identifiability-of-an-estimand
  - thm-identifiability-iff-constant-on-equivalence-classes
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Christian Gouriéroux, Alain Monfort, and Eric Renault, Indirect Inference, Journal of Applied Econometrics 8, Supplement, S85–S118 (1993)"
      url: "https://www.stat.cmu.edu/~cshalizi/462/readings/Indirect%20Inference%20%28Gourieroux%2C%20Monfort%20and%20Renault%29.pdf"
    - title: "Thomas J. Sargent and John Stachurski, Intermediate Quantitative Economics with Python, Chapter 38: Which Moments to Match?"
      url: "https://python.quantecon.org/gallant_tauchen.html"
---

## Example

Let $\Theta=\{-1,1\}$, $\mathcal X=\{-1,1\}$ with its full sigma-algebra, and let $P_\theta$ be the point mass at $Y=\theta$. Take the statistic $S(y)=y^2$.

## Facts & Assumptions

**Given:** The finite experiment, statistic and moment-binding target above.

[F1] The binding function is $b(\theta)=\mathbb E_\theta[S]$, and the target minimizes $\|b(\theta)-s\|_2^2$ with the declared lexicographic tie-break. [[def-binding-function-and-indirect-inference-target]]

[F2] The compact-domain minimum and its lexicographic selector exist under the definition’s stated continuity hypotheses. [[thm-indirect-inference-target-exists-with-lexicographic-tie-break]]

[F3] The parameter identity is identifiable exactly when distinct parameter labels give distinct sampling laws. [[def-identifiability-of-an-estimand]]

[F4] In a parametric model, identifiability is equivalent to constancy on observational-equivalence classes; for the identity target this is injectivity of the model map. [[thm-identifiability-iff-constant-on-equivalence-classes]]

[F5] The summary law assigns to each Borel set $B$ the probability $P_\theta(S^{-1}(B))$. [[def-law-or-distribution-of-a-random-element]]

## Verification

1.1 Under either point-mass law, $S(Y)=Y^2=1$ surely. Thus $b(-1)=b(1)=1$. [F1, given, algebra]

1.2 The original laws differ: $P_{-1}(\{-1\})=1$ but $P_1(\{-1\})=0$. Therefore the parameter identity is identifiable in the original experiment. [F3, F4, given, algebra]

2.1 For the observed summary $s=1$, $q_1$ is the constant continuous function zero on the finite compact set $\Theta$, so $M_1=\{-1,1\}$. The target’s lexicographic rule selects $-1$. [F1, F2, step 1.1, algebra]

3.1 By the pushforward-law definition [F5], both summary laws assign probability one to $\{1\}$, so the summary-law map is not injective and the parameter identity is not identifiable from this summary. The moment target therefore does not recover the sign, even though the raw experiment distinguishes it. [F4, F5, step 1.1, algebra] ∎

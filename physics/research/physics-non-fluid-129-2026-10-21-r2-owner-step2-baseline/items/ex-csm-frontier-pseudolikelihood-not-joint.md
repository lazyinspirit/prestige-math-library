---
id: ex-csm-frontier-pseudolikelihood-not-joint
kind: example
title: Two-spin pseudo-likelihood is not the exact joint posterior input
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-pseudolikelihood
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
dependency_roles:
  def-csm-frontier-pseudolikelihood: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Julian Besag, Statistical Analysis of Non-Lattice Data, The Statistician 24(3) (1975), 179–195"
      url: "https://www2.stat.duke.edu/~scs/Courses/Stat376/Papers/GibbsFieldEst/BesagPseudoLik1975.pdf"
      locator: "§3.3, printed p. 190, equation (3.2): the product of site-conditional probabilities is not the true sample likelihood except for independent variables; the two-spin posterior calculation below is local."
verification:
  precheck: pass
---

## Example

Take $\Lambda=\{1,2\}$, $S=\{-1,+1\}$, and any fixed exterior boundary; the sole interaction set $\{1,2\}$ has no exterior sites, so its energy is independent of that boundary. Use parameter space $\Theta=\{0,1\}$ with its full power-set sigma-algebra, prior mass $1/2$ at each parameter, and the single potential $\Phi_{\{1,2\}}((\sigma_1,\sigma_2);J)=-J\sigma_1\sigma_2$. Use the real exponential $\exp$, put $e:=\exp(1)$, and define $\cosh J:=(\exp(J)+\exp(-J))/2$. For the hypothetical observation $(+1,+1)$, the exact joint likelihood is $\exp(J)/(4\cosh J)$, whereas the product of the two one-site Gibbs conditional probabilities is $[\exp(J)/(2\cosh J)]^2$. By pseudo-posterior I mean the probability vector obtained by multiplying this product by the prior weights and normalizing over $J\in\{0,1\}$. The exact and pseudo-posterior distributions are different.

## Example references

[[def-csm-frontier-pseudolikelihood]]

[[def-real-exponential-function-and-e]]

[[thm-exponential-is-strictly-increasing]]

[[cor-exponential-reciprocal-and-positivity]]

## Facts & Assumptions

**Given:** The two-spin finite-volume Gibbs model, the equal prior on $J\in\{0,1\}$, and the fixed hypothetical observation $(+1,+1)$.

[A1] The observation is a mathematical example and is not reported experimental data.

[F1] [[def-csm-frontier-pseudolikelihood]]: pseudo-likelihood is the product of the exact one-site conditional probabilities for the fixed interaction neighborhood and boundary.

[F2] [[def-real-exponential-function-and-e]]: $\exp(x)=\sum_{n=0}^{\infty}x^n/n!$ and $e=\exp(1)$; evaluating the series at zero leaves its constant term, so $\exp(0)=1$.

[F3] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing on $\mathbb R$, so $e=\exp(1)>\exp(0)=1$.

[F4] [[cor-exponential-reciprocal-and-positivity]]: $\exp(x)>0$ and $\exp(-x)=1/\exp(x)$ for every real $x$.

## Verification

**Given:** The data and two-parameter prior in the Example.

1.1 The four unnormalized Gibbs weights are $\exp(J),\exp(-J),\exp(-J),\exp(J)$, so the partition function is $Z_J=2\exp(J)+2\exp(-J)=4\cosh J$. Therefore the joint likelihood of $(+1,+1)$ is $\exp(J)/(4\cosh J)$. [A1, F1, F2, algebra]

2.1 Given either other spin is $+1$, the conditional probability for the remaining spin to be $+1$ is $\exp(J)/(\exp(J)+\exp(-J))=\exp(J)/(2\cosh J)$. Thus the pseudo-likelihood is the product $[\exp(J)/(2\cosh J)]^2$. [F1, F2, step 1.1, algebra]

3.1 The exact likelihood ratio for $J=1$ against $J=0$ is $r=e/\cosh 1$, while the pseudo-likelihood ratio is $r^2$. By [F3] and [F4], $e>1$ and $e^{-1}=1/e<1$, so $\cosh1=(e+e^{-1})/2<e$. Hence $r>1$ and $r\ne r^2$. Under the equal prior, posterior odds equal likelihood ratios, so the exact and pseudo posterior probabilities differ. The pseudo-likelihood product therefore cannot be substituted as the joint likelihood for this model. [A1, F1, F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 Put $c=\cosh1$. For each equal-spin configuration, both site conditionals are $e/(2c)$; for each opposite-spin configuration, both are $\exp(-1)/(2c)=1/(2ec)$ by [F1], [F2], and [F4]. Summing the four products gives
$$\sum_{\sigma\in S^\Lambda}PL_1(\sigma)=\frac{e^2+(1/e)^2}{2c^2}=2\frac{(e+1/e)^2-2}{(e+1/e)^2}=2-\frac1{c^2}.$$
By [F3] and [F4], $e>1$ and $e^{-1}=1/e$, so $c-1=(e-1)^2/(2e)>0$; hence the sum is greater than one. Thus the pseudo-likelihood is not a probability mass function on the configuration space, whereas the joint Gibbs likelihood is. [F1, F2, F3, F4, step 1.1, step 2.1, algebra] ∎

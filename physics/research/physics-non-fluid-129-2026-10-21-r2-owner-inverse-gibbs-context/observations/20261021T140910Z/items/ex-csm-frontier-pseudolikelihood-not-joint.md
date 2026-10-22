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
dependency_roles:
  def-csm-frontier-pseudolikelihood: mathematical-premise
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
  precheck: pending
---

## Example

Take $\Lambda=\{1,2\}$, $S=\{-1,+1\}$, empty boundary, and the single interaction set $\{1,2\}$ with potential $\Phi_{\{1,2\}}((\sigma_1,\sigma_2);J)=-J\sigma_1\sigma_2$ for $J\in\{0,1\}$. Give the two parameter values equal prior mass and define $\cosh J:=(e^J+e^{-J})/2$. For the hypothetical observation $(+1,+1)$, the exact joint likelihood is $e^J/(4\cosh J)$, whereas the product of the two one-site Gibbs conditional probabilities is $[e^J/(2\cosh J)]^2$. By pseudo-posterior I mean the probability vector obtained by multiplying this product by the equal prior weights and normalizing over $J\in\{0,1\}$. The exact and pseudo-posterior distributions are different.

## Example references

[[def-csm-frontier-pseudolikelihood]]

## Facts & Assumptions

**Given:** The two-spin finite-volume Gibbs model, the equal prior on $J\in\{0,1\}$, and the fixed hypothetical observation $(+1,+1)$.

[A1] The observation is a mathematical example and is not reported experimental data.

[F1] [[def-csm-frontier-pseudolikelihood]]: pseudo-likelihood is the product of the exact one-site conditional probabilities for the fixed interaction neighborhood and boundary.

## Verification

**Given:** The data and two-parameter prior in the Example.

1.1 The four unnormalized Gibbs weights are $e^J,e^{-J},e^{-J},e^J$, so the partition function is $Z_J=2e^J+2e^{-J}=4\cosh J$. Therefore the joint likelihood of $(+1,+1)$ is $e^J/(4\cosh J)$. [A1, F1, algebra]

2.1 Given either other spin is $+1$, the conditional probability for the remaining spin to be $+1$ is $e^J/(e^J+e^{-J})=e^J/(2\cosh J)$. Thus the pseudo-likelihood is the product $[e^J/(2\cosh J)]^2$. [F1, step 1.1, algebra]

3.1 The exact likelihood ratio for $J=1$ against $J=0$ is $r=e/\cosh 1$, while the pseudo-likelihood ratio is $r^2$. Since $\cosh1=(e+e^{-1})/2<e$, we have $r>1$ and $r\ne r^2$. Under the equal prior, posterior odds equal likelihood ratios, so the exact and pseudo posterior probabilities differ. The pseudo-likelihood product therefore cannot be substituted as the joint likelihood for this model. [A1, F1, step 1.1, step 2.1, algebra]

4.1 Summing the pseudo-likelihood over all four configurations gives
$2\left(e^{2J}+e^{-2J}\right)/(4\cosh^2J)=\cosh(2J)/\cosh^2J=2-1/\cosh^2J>1$
for $J=1$. Hence the pseudo-likelihood is not a probability mass function on the configuration space, whereas the joint Gibbs likelihood is. [F1, step 1.1, step 2.1, step 3.1, algebra] ∎

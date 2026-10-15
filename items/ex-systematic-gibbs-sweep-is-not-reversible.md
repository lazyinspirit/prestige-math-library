---
id: ex-systematic-gibbs-sweep-is-not-reversible
kind: example
title: A systematic Gaussian Gibbs sweep need not be reversible
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - ex-bivariate-normal-gibbs-full-conditionals
  - thm-systematic-gibbs-sweep-preserves-target
  - def-gibbs-reversibility-for-a-markov-kernel
  - def-moments-variance-and-covariance
  - def-axiom-of-choice
  - def-composition-of-probability-kernels
  - lem-prior-and-model-kernel-define-joint-law
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - def-multivariate-normal-law
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "AC is inherited from the bivariate-normal conditional-density example and its Gaussian-law convention; the iterated-kernel covariance calculation adds no choice."
---

## Example

Assume AC and take $\rho=\tfrac12$ in [[ex-bivariate-normal-gibbs-full-conditionals]]. Initialize $(X_0,Y_0)\sim\pi=N_2(0,\Sigma_\rho)$ and use the systematic order $X$ then $Y$. The resulting full-sweep kernel preserves $\pi$ but is not reversible with respect to it.

## Facts & Assumptions

**Given:** AC, the bivariate normal target, and the systematic update order in the Example.

[A1] AC is inherited from the cited normal conditional-density convention. [[def-axiom-of-choice]].

[F1] The full conditionals are $X\mid Y=y\sim N(\rho y,1-\rho^2)$ and $Y\mid X=x\sim N(\rho x,1-\rho^2)$ for every conditioning value. [[ex-bivariate-normal-gibbs-full-conditionals]].

[F2] A systematic full sweep of exact Gibbs updates leaves $\pi$ invariant. [[thm-systematic-gibbs-sweep-preserves-target]].

[F3] Reversibility means symmetry of the two-time transition flow on every measurable rectangle. [[def-gibbs-reversibility-for-a-markov-kernel]].

[F4] For square-integrable real random variables, covariance is $\operatorname{Cov}(U,V)=\mathbb E[(U-\mathbb EU)(V-\mathbb EV)]$ and is bilinear when the terms are integrable. [[def-moments-variance-and-covariance]].

[F5] A target probability and transition kernel define the joint law of one transition with the corresponding iterated-integral identity. [[lem-prior-and-model-kernel-define-joint-law]].

[F6] A systematic scan in the order $P_1$ then $P_2$ has chronological kernel composition $P_1P_2$. [[def-composition-of-probability-kernels]].

[F7] Finite measures agreeing on the generating rectangles agree on the product sigma-algebra. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]].

[F8] A multivariate normal law has the specified mean vector and covariance matrix. [[def-multivariate-normal-law]].
## Verification

**Given:** The hypotheses in the Example and facts [A1], [F1]–[F7].

1.1 The conditional means in [F1], integrated in the order [F6] under the joint law [F5], give $\mathbb E X_1=\rho\mathbb E Y_0=0$ and $\mathbb E Y_1=\rho\mathbb E X_1=0$. By [F8], the initial target has $\mathbb E Y_0^2=1$ and $\mathbb E[X_0Y_0]=\rho$. The first conditional variance in [F1] gives $\mathbb E[X_1^2\mid Y_0]=\rho^2Y_0^2+1-\rho^2$, so $\mathbb E X_1^2=1$. The invariant full-sweep law [F2] gives $(X_1,Y_1)\sim\pi$, hence $\mathbb E Y_1^2=1$. Thus all four coordinates are square-integrable, and their cross-products are integrable by $2|ab|\le a^2+b^2$. [A1, F1, F2, F5, F6, F8, given, algebra]

2.1 The means in step 1.1 are zero, so [F4] makes each cross-covariance equal to its product expectation. Using the kernel order [F6], the first conditional mean in [F1], and [F8], $\operatorname{Cov}(Y_0,X_1)=\int\pi(dx_0,dy_0)y_0\int x_1K_1(y_0,dx_1)=\rho\mathbb E Y_0^2=\rho$. For the other cross term, the second conditional mean followed by the first gives $\operatorname{Cov}(X_0,Y_1)=\int\pi(dx_0,dy_0)x_0\int K_1(y_0,dx_1)\int y_1K_2(x_1,dy_1)=\rho^2\mathbb E[X_0Y_0]=\rho^3$. The integrability established in step 1.1 justifies these signed iterated integrals. [F1, F4, F5, F6, F8, step 1.1, algebra]

3.1 If the full-sweep kernel were reversible, [F3] would give equality of its two-time law and the state-swapped measure on every rectangle. Both are finite measures, so [F7] gives equality on the product sigma-algebra. The integrable function $((x_0,y_0),(x_1,y_1))\mapsto y_0x_1$ would then have the same integral as its state-swapped version $x_0y_1$, forcing $\operatorname{Cov}(Y_0,X_1)=\operatorname{Cov}(X_0,Y_1)$ because all four coordinates are centered. But [F8] and step 2.1 give these covariances as $\rho$ and $\rho^3$, which differ for $\rho=\tfrac12$. Hence the full-sweep kernel is not reversible, although [F2] proves it preserves $\pi$. [F2, F3, F4, F7, F8, step 1.1, step 2.1, algebra] ∎


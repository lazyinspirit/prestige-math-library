---
id: ex-bivariate-normal-gibbs-full-conditionals
kind: example
title: Full conditionals for a bivariate normal target
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - alg-gibbs-block-update
  - def-gibbs-full-conditional-kernel
  - cor-bivariate-normal-full-conditional-kernels
  - def-axiom-of-choice
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
axiom_use: "AC is inherited from the exact bivariate-normal density supplier and its normal-law construction; the conditional square completion itself adds no choice."
---

## Example

Assume AC. Let $-1<\rho<1$ and let $\pi=N_2(0,\Sigma_\rho)$ on $\mathbb R^2$, where
$$\Sigma_\rho=\begin{pmatrix}1&\rho\\\rho&1\end{pmatrix}.$$
Writing the state as $(X,Y)$, its proper full conditionals are
$$X\mid Y=y\sim N(\rho y,1-\rho^2),\qquad Y\mid X=x\sim N(\rho x,1-\rho^2) \quad (x,y\in\mathbb R).$$
The variances are positive for every allowed $\rho$, so each conditional is a pointwise probability kernel on the whole conditioning space. A systematic scan that updates $X$ and then $Y$ can be run by the two corresponding updates of [[alg-gibbs-block-update]].

## Facts & Assumptions

**Given:** AC, $-1<\rho<1$, and the target law in the Example.

[F1] For a nondegenerate bivariate normal target, both pointwise proper full conditionals are normal with the displayed conditional means and variances. [[cor-bivariate-normal-full-conditional-kernels]].

[A1] AC is the stated premise of the bivariate-normal conditional-density supplier and its normal-law convention. [[def-axiom-of-choice]].

[F2] A Gibbs block update keeps the retained coordinate and samples the updated coordinate from its supplied full conditional kernel. [[alg-gibbs-block-update]].

## Verification
**Given:** The hypotheses in the Example and facts [A1], [F1], [F2].

1.1 Apply [F1] with $m_X=m_Y=0$, $\sigma_X=\sigma_Y=1$, and $r=\rho$. This gives $X\mid Y=y\sim N(\rho y,1-\rho^2)$ for every $y$. Applying the same supplier with the coordinates exchanged gives $Y\mid X=x\sim N(\rho x,1-\rho^2)$ for every $x$. Since $1-\rho^2>0$, both laws are nondegenerate normal probabilities, and the supplier gives their normalized densities as everywhere conditional kernels. [A1, F1, given]

2.1 With these two kernels, [F2] updates $X$ by drawing from the first conditional while holding $Y$ fixed, and then updates $Y$ from the second conditional at the new $X$ value. Both are exact block updates for the stated target, with no support or zero-normalizer exception because the conditional variances are strictly positive. [F1, F2, given] ∎

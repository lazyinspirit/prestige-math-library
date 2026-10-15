---
id: lem-independent-posterior-splitting-from-tests-and-sieve-tail
kind: lemma
title: "Tests and a sieve tail imply posterior contraction from a denominator bound"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-likelihood-density
  - def-measure-with-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - cor-markov-inequality-for-random-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Convergence rates of posterior distributions for noniid observations, §2, Theorems 1 and 3"
      url: "https://arxiv.org/pdf/0708.0491"
    - title: "Bas J. K. Kleijn, Aad W. van der Vaart and Harry van Zanten, Lectures on Nonparametric Bayesian Statistics, Chapter 9"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/NPBayes-LecNotes-2015.pdf"
---

## Statement

For each $n$, let $P_{\theta,n}$ and $P_{0,n}$ have jointly measurable densities $p_{\theta,n}$ and $p_{0,n}$ relative to a common sigma-finite measure, and let $\Pi$ be a prior. Let $\Theta_n$ be a measurable sieve, let
$$A_n=\{\theta:d_n(\theta,\theta_0)>r_n\},$$
and let $D_n=\int p_{\theta,n}(Y)/p_{0,n}(Y)\,\Pi(d\theta)$ be the likelihood-ratio denominator on the $P_{0,n}$-full set where $p_{0,n}(Y)>0$. Suppose $\epsilon_n>0$, $n\epsilon_n^2\to\infty$, and constants $A<B$, $T>A$ satisfy
$$P_{0,n}\{D_n<e^{-An\epsilon_n^2}\}\to0,\qquad \Pi(\Theta_n^c)\le e^{-Bn\epsilon_n^2},$$
and there are measurable tests $\phi_n$ with
$$P_{0,n}(\phi_n=1)\le e^{-Tn\epsilon_n^2},\qquad \sup_{\theta\in A_n\cap\Theta_n}P_{\theta,n}(\phi_n=0)\le e^{-Tn\epsilon_n^2}.$$
Then the posterior mass of $A_n$ tends to zero in $P_{0,n}$-probability.

## Facts & Assumptions

**Given:** The displayed dominated model, measurable sieve and tested alternative, denominator lower bound, sieve-tail bound, and test errors.

[F1] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative likelihood-ratio integrands may be integrated in either order.

[F2] [[cor-markov-inequality-for-random-variables]]: for nonnegative $X$ and $u>0$, $P(X>u)\le EX/u$.

## Proof




1.1 Define $N_n=\int_{A_n\cap\Theta_n}\frac{p_{\theta,n}(Y)}{p_{0,n}(Y)}\,\Pi(d\theta),\qquad T_n=\int_{A_n\cap\Theta_n^c}\frac{p_{\theta,n}(Y)}{p_{0,n}(Y)}\,\Pi(d\theta).$ By change of density on $\{p_{0,n}>0\}$ and Tonelli [F1], $E_{0,n}[(1-\phi_n)N_n]\le\int_{A_n\cap\Theta_n}P_{\theta,n}(\phi_n=0)\Pi(d\theta)\le e^{-Tn\epsilon_n^2}.$ For every $\theta$, $E_{0,n}[p_{\theta,n}(Y)/p_{0,n}(Y)]=\int_{\{p_{0,n}>0\}}p_{\theta,n}\le1$, so Tonelli also gives $E_{0,n}T_n\le\Pi(\Theta_n^c)\le e^{-Bn\epsilon_n^2}$. [F1, given, algebra]

2.1 Fix $\delta>0$. On the event $D_n\ge e^{-An\epsilon_n^2}$ and $\phi_n=0$, posterior mass $\Pi(A_n\mid Y)>\delta$ implies $N_n+T_n>\delta e^{-An\epsilon_n^2}$. The union bound and Markov [F2] therefore give $P_{0,n}\{\Pi(A_n\mid Y)>\delta\}\le P_{0,n}\{D_n<e^{-An\epsilon_n^2}\}+e^{-Tn\epsilon_n^2}+\delta^{-1}\!\left(e^{-(T-A)n\epsilon_n^2}+e^{-(B-A)n\epsilon_n^2}\right).$ Every term tends to zero because $T>A$, $B>A$ and $n\epsilon_n^2\to\infty$. Since this holds for every $\delta>0$, posterior mass on $A_n$ converges to zero in probability. [F2, step 1.1, given, algebra] ∎


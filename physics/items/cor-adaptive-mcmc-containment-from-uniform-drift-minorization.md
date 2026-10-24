---
id: cor-adaptive-mcmc-containment-from-uniform-drift-minorization
kind: corollary
title: Common drift and minorization give containment under diminishing adaptation, strong aperiodicity, and a finite initial V-moment
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-adaptive-mcmc-containment
  - def-diminishing-adaptation
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-small-set-minorization-and-drift
  - cor-markov-inequality-for-random-variables
  - lem-adaptive-mcmc-uniform-drift-minorization-bound
  - thm-monotone-convergence-for-the-integral
  - thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, Coupling and Ergodicity of Adaptive MCMC"
      url: "https://www.probability.ca/jeff/ftpdir/adapt.pdf"
      locator: "§7, Proposition 17 and Theorem 18 with proof, pp. 15–16."
    - title: "Gersende Fort, Adaptive MCMC: theory and methods, Warwick lecture notes"
      url: "https://www.math.univ-toulouse.fr/~gfort/Slides/Warwick09.pdf"
      locator: "PDF slide 24, uniform-in-parameter ergodicity and drift/minorization route to containment; slides 31–33, an application."
---

## Statement

Assume the adaptive MCMC setup and diminishing adaptation of
[[def-diminishing-adaptation]]. Suppose the common target, set $C$, drift
function $V$, and constants satisfy the hypotheses of
[[lem-adaptive-mcmc-uniform-drift-minorization-bound]], including the
strong-aperiodicity condition $\nu_\gamma(C)=1$ for every $\gamma$. If
$\mathbb E[V(X_0)]<\infty$, then containment holds for the initial law of
$(X_0,\Gamma_0)$, and the marginal laws converge to $\pi$ in total variation.

## Facts & Assumptions

**Given:** The adaptive transition rule, diminishing adaptation, common invariant target, shared geometric drift/minorization hypotheses, and finite initial $V$-moment.

[F1] [[def-diminishing-adaptation]]: conditional on the history, $X_{n+1}$ has law $P_{\Gamma_n}(X_n,\cdot)$ and $D_n\to0$ in probability.

[F2] [[def-adaptive-mcmc-containment]]: containment is boundedness in probability of $M_\epsilon(X_n,\Gamma_n)$ uniformly over $n$.

[F3] [[def-small-set-minorization-and-drift]]: the pointwise common drift inequality is $P_\gamma V\le\lambda V+b1_C$.

[F4] [[lem-adaptive-mcmc-uniform-drift-minorization-bound]]: there are common $M<\infty$ and $0<\rho<1$ with $\lVert P_\gamma^m(x,\cdot)-\pi\rVert_{\rm TV}\le MV(x)\rho^m$.

[F5] [[thm-adaptive-mcmc-converges-under-uniform-ergodicity-or-containment]]: diminishing adaptation and containment imply marginal convergence in total variation.

[F6] [[thm-monotone-convergence-for-the-integral]]: expectations of $V\wedge r$ increase to the expectation of nonnegative $V$.

[F7] [[cor-markov-inequality-for-random-variables]]: for nonnegative $Z$ and $R>0$, $\mathbb P(Z>R)\le\mathbb E Z/R$.

## Proof

**Given:** The hypotheses and facts [F1]–[F5].

1.1 For each $r$, the conditional transition rule [F1] and the drift inequality [F3] give $\mathbb E[(V\wedge r)(X_{n+1})\mid\mathcal F_n]\le\lambda V(X_n)+b$. Take expectations and let $r\to\infty$ by [F6]; assuming $\mathbb E V(X_n)<\infty$, this gives $\mathbb E V(X_{n+1})\le\lambda\mathbb E V(X_n)+b$. Starting from the finite initial moment and iterating yields $\sup_{n\ge0}\mathbb E V(X_n)\le \mathbb E V(X_0)+\frac{b}{1-\lambda}=:K<\infty.$ [F1, F3, F6, given, algebra]

2.1 Fix $\epsilon,\delta>0$. Choose $R\ge K/\delta$ and then an integer $N\ge1$ such that $MR\rho^N\le\epsilon$. Markov's inequality [F7] and the moment bound in step 1.1 give $\mathbb P(V(X_n)>R)\le\delta$ for every $n$. On the complementary event [F4] gives $\lVert P_{\Gamma_n}^{N}(X_n,\cdot)-\pi\rVert_{\rm TV}\le\epsilon$, so $M_\epsilon(X_n,\Gamma_n)\le N$. This proves containment as defined in [F2]. [F2, F4, F7, step 1.1, given]

3.1 Diminishing adaptation is [F1], and containment is step 2.1. The containment branch of [F5] therefore gives $\lVert\mathcal L(X_n)-\pi\rVert_{\rm TV}\to0$. [F1, F5, step 2.1] ∎

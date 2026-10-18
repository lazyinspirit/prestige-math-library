---
id: lem-gaussian-squared-norm-tail
kind: lemma
title: Squared-norm concentration for real and normalized complex Gaussians
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 2
deps:
  [
    def-standard-real-and-normalized-complex-gaussian-matrix-law,
    lem-gaussian-matrix-law-normalization-and-second-moments,
    def-countable-choice,
    thm-linear-change-of-variables-for-lebesgue-measure,
    cor-markov-inequality-for-random-variables,
    thm-logarithm-derivative-and-integral,
    thm-finite-union-bound
  ]
justified_by: []
axiom_use: "Countable Choice, through the finite-dimensional Lebesgue
  probability laws in
  def-standard-real-and-normalized-complex-gaussian-matrix-law, is used to
  define and integrate the finite Gaussian product law. No unrestricted Axiom of
  Choice is used."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra,
        §2.1, Theorem 4 and §2.2, Lemma 18"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §3.1"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $m\ge1$, and let $g_1,\ldots,g_m$ be independent standard real
Gaussian scalars or independent normalized complex Gaussian scalars, with
$\mathbb E|g_j|^2=1$. For $0<t<1$,
$$
\Pr\left\{\left|\frac1m\sum_{j=1}^m|g_j|^2-1\right|\ge t\right\}\le2e^{-mt^2/8}.
$$

## Facts & Assumptions

**Given:** Countable Choice for the finite Gaussian law, and a finite family of independent standard Gaussian scalars in one of the two declared fields and a parameter $0<t<1$.

[F1] A standard real Gaussian scalar has density $(2\pi)^{-1/2}e^{-x^2/2}$; a normalized complex one has density $\pi^{-1}e^{-|z|^2}$ and mean squared modulus one ([[def-standard-real-and-normalized-complex-gaussian-matrix-law]]). The real and complex densities each have total mass one, zero mean and second moment one under exactly the stated Countable Choice; finite products have unit mass and independent coordinates by [[lem-gaussian-matrix-law-normalization-and-second-moments]].

[F2] Countable Choice, written $\mathrm{AC}_\omega$, is used in the repository's construction of the finite-dimensional Lebesgue probability measures for these densities ([[def-countable-choice]]).

[F3] Under Countable Choice, invertible real linear maps scale Lebesgue measure by the absolute determinant ([[thm-linear-change-of-variables-for-lebesgue-measure]]). The corresponding nonnegative-integral identity follows first for indicators, then simple functions and their defining suprema.

[F4] For a nonnegative measurable random variable $X$ and $a>0$, $\Pr\{X\ge a\}\le\mathbb EX/a$ ([[cor-markov-inequality-for-random-variables]]).

[F5] $\log x=\int_1^x du/u$ for $x>0$ ([[thm-logarithm-derivative-and-integral]]).

[F6] The probability of a finite union of events is at most the sum of their probabilities ([[thm-finite-union-bound]]).

[A1] We use only Countable Choice for those finite Gaussian integrals; no unrestricted Axiom of Choice is assumed.

## Proof

**Given:** The hypotheses in the Statement.

1.1 For real $Z$ and $\theta<1/2$, put $c=1-2\theta>0$. By [F3], the substitution $u=\sqrt c\,x$ gives $\mathbb Ee^{\theta Z^2}=c^{-1/2}(2\pi)^{-1/2}\int_{\mathbb R}e^{-u^2/2}\,du=c^{-1/2}$. The prefactored integral is one since [F1] is a probability density. For normalized complex $G$ and $\theta<1$, put $d=1-\theta>0$. On $\mathbb C\simeq\mathbb R^2$, the map $u=\sqrt d\,z$ has real determinant $d$, so [F3] gives $\mathbb Ee^{\theta|G|^2}=d^{-1}\pi^{-1}\int_{\mathbb R^2}e^{-|u|^2}\,du=d^{-1}$. Again the prefactored integral is one by the normalized density [F1]. These identities include the finite integrability ranges needed below. [F1, F2, F3, A1, algebra]

2.1 For the real case, [F4] applied to $X=e^{\lambda\sum_j g_j^2}$ at the positive threshold $a=e^{\lambda m(1+t)}$, with $\lambda=t/(2(1+t))$, and independence together with the first formula of step 1.1 give $\Pr\{m^{-1}\sum_jg_j^2\ge1+t\}\le\exp[-\tfrac m2(t-\log(1+t))]$. For the complex case use $X=e^{\lambda\sum_j|g_j|^2}$, the same threshold, $\lambda=t/(1+t)$, and the second formula to obtain the stronger bound $\exp[-m(t-\log(1+t))]$. Both positive parameters lie in the finite mgf ranges of step 1.1. By [F5], $t-\log(1+t)=\int_0^t u/(1+u)\,du\ge t^2/4$, so both upper tails are at most $e^{-mt^2/8}$. [F1, F4, F5, step 1.1, algebra]

2.2 For the real lower tail, apply [F4] to $X=e^{-\lambda\sum_j g_j^2}$ at threshold $a=e^{-\lambda m(1-t)}>0$ with $\lambda=t/(2(1-t))$; for the complex lower tail use $X=e^{-\lambda\sum_j|g_j|^2}$, the same threshold, and $\lambda=t/(1-t)$. The event $X\ge a$ is precisely the lower-tail event because the exponential is decreasing in the squared norm sum. The mgf arguments $-\lambda$ lie in the finite ranges of step 1.1, and independence again factors the expectations. Step 1.1 gives respective bounds $\exp[-\tfrac m2(-t-\log(1-t))]$ and $\exp[-m(-t-\log(1-t))]$. By [F5], $-t-\log(1-t)=\int_0^t u/(1-u)\,du\ge t^2/2$, so each is at most $e^{-mt^2/8}$. [F1, F4, F5, step 1.1, algebra]

3.1 The event in the Statement is the union of the upper and lower tail events bounded in steps 2.1 and 2.2. The finite union bound [F6] therefore gives the claimed sum bound. [step 2.1, step 2.2, F6, algebra] ∎

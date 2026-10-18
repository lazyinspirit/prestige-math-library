---
id: lem-gaussian-squared-norm-tail
kind: lemma
title: Squared-norm concentration for real and normalized complex Gaussians
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: sketched-least-squares-and-subspace-embeddings
dependency_level: 1
deps:
  - def-standard-real-and-normalized-complex-gaussian-matrix-law
  - def-countable-choice
justified_by: []
axiom_use: "Countable Choice, through the finite-dimensional Lebesgue probability laws in def-standard-real-and-normalized-complex-gaussian-matrix-law, is used to define and integrate the finite Gaussian product law. No unrestricted Axiom of Choice is used."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David P. Woodruff, Sketching as a Tool for Numerical Linear Algebra, §2.1, Theorem 4 and §2.2, Lemma 18"
      url: "https://arxiv.org/pdf/1411.4357"
    - title: "Michael W. Mahoney, Randomized Algorithms for Matrices and Data, §3.1"
      url: "https://www.math.ucdavis.edu/~strohmer/courses/270/RandLA.pdf"
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

[F1] A standard real Gaussian scalar has density $(2\pi)^{-1/2}e^{-x^2/2}$; a normalized complex one has density $\pi^{-1}e^{-|z|^2}$ and mean squared modulus one ([[def-standard-real-and-normalized-complex-gaussian-matrix-law]]).

[F2] Countable Choice, written $\mathrm{AC}_\omega$, is used in the repository's construction of the finite-dimensional Lebesgue probability measures for these densities ([[def-countable-choice]]).

[A1] We use only Countable Choice for those finite Gaussian integrals; no unrestricted Axiom of Choice is assumed.

## Proof

**Given:** The hypotheses in the Statement.

1.1 For a standard real $Z$ and $\theta<1/2$, scaling the Gaussian integral in [F1] gives $\mathbb E e^{\theta Z^2}=(1-2\theta)^{-1/2}$. For a normalized complex $G$ and $\theta<1$, polar coordinates in its density give $\mathbb E e^{\theta|G|^2}=\int_0^\infty e^{-(1-\theta)r^2}2r\,dr=(1-\theta)^{-1}$. These formulas include the finite integrability ranges needed below. [F1, F2, A1, algebra]

2.1 For the real case, Markov's inequality applied to $e^{\lambda\sum_j g_j^2}$, with $\lambda=t/(2(1+t))$, and the first formula of step 1.1 give $\Pr\{m^{-1}\sum_jg_j^2\ge1+t\}\le\exp[-\tfrac m2(t-\log(1+t))]$. For the complex case use $\lambda=t/(1+t)$ and the second formula to obtain the stronger bound $\exp[-m(t-\log(1+t))]$. Since $t-\log(1+t)=\int_0^t u/(1+u)\,du\ge t^2/4$, both upper tails are at most $e^{-mt^2/8}$. [F1, step 1.1, algebra]

2.2 For the real lower tail, apply Markov's inequality to $e^{-\lambda\sum_j g_j^2}$ with $\lambda=t/(2(1-t))$; for the complex lower tail use $\lambda=t/(1-t)$. Step 1.1 gives respective bounds $\exp[-\tfrac m2(-t-\log(1-t))]$ and $\exp[-m(-t-\log(1-t))]$. Because $-t-\log(1-t)=\int_0^t u/(1-u)\,du\ge t^2/2$, each is at most $e^{-mt^2/8}$. [F1, step 1.1, algebra]

3.1 The event in the Statement is the union of the upper and lower tail events bounded in steps 2.1 and 2.2. Finite subadditivity of probability therefore gives the claimed sum bound. [step 2.1, step 2.2, algebra] ∎

---
id: lem-finite-martingale-difference-sum-variance
kind: lemma
title: Second moment bound for a finite martingale-difference sum
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-euclidean-inner-product
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sai Praneeth Karimireddy et al., SCAFFOLD, Appendix B, Lemma 4"
      url: https://cs.nyu.edu/~mohri/pub/scaffold.pdf
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let
$\mathcal F_0\subseteq\mathcal F_1\subseteq\cdots\subseteq\mathcal F_m$
be a finite filtration and let $Z_j\in L^2(\Omega;\mathbb R^d)$ be
$\mathcal F_j$-measurable for $1\le j\le m$, where $m\ge1$. For each
$0\le\ell<d$, define
$M_j^\ell=\mathbb E[Z_j^\ell\mid\mathcal F_{j-1}]$ by scalar conditional
expectation and put $M_j=(M_j^\ell)_{0\le\ell<d}$ and $\xi_j=Z_j-M_j$. Assume
$\xi_j\in L^2(\Omega;\mathbb R^d)$. If
$$ \mathbb E[\|\xi_j\|_2^2\mid\mathcal F_{j-1}]\le v_j \quad\text{almost surely}, $$
where each $v_j\ge0$ is integrable and $\mathcal F_{j-1}$-measurable, then
$$ \mathbb E\left\|\sum_{j=1}^m Z_j\right\|_2^2 \le2\mathbb E\left\|\sum_{j=1}^m M_j\right\|_2^2 +2\sum_{j=1}^m\mathbb E[v_j]. $$

## Statement references

[Karimireddy et al., SCAFFOLD, Appendix B, Lemma 4](https://cs.nyu.edu/~mohri/pub/scaffold.pdf)

## Facts & Assumptions
**Given:** The filtered random vectors and conditional variance bounds in the Statement.

[F1] [[def-filtration-and-filtered-probability-space]]: each $Z_j$ is $\mathcal F_j$-measurable and $M_j=\mathbb E[Z_j\mid\mathcal F_{j-1}]$.

[F2] [[def-conditional-expectation-as-an-ae-class]] and [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectations exist under the stated axiom branch and are linear.

[F3] [[thm-taking-out-what-is-known]]: for a scalar integrable variable and a finite measurable factor whose products are integrable, taking the factor out of conditional expectation is valid; apply this coordinatewise to Euclidean inner products.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[cor-expectation-linearity-monotonicity-and-modulus-bound]], and [[def-euclidean-inner-product]]: expectations are linear on integrable variables and squared Euclidean norms expand into inner products.

[A1] $\mathbb E[\xi_j\mid\mathcal F_{j-1}]=0$ and the conditional second moment bound in the Statement holds for every $j$.

[A2] Assume the Axiom of Choice. It is used only to invoke the published conditional-expectation-as-an-a.e.-class interface in [F2].

## Proof

1.1 For each coordinate $0\le\ell<d$, $Z_j^\ell\in L^2$ implies $Z_j^\ell\in L^1$ on the probability space, since $2|z|\le z^2+1$ and the space has total mass one. Thus the scalar supplier [F2] defines $M_j^\ell=\mathbb E[Z_j^\ell\mid\mathcal F_{j-1}]$. This gives the coordinatewise vector $M_j$. The assumption $\xi_j\in L^2$ and the identity $M_j=Z_j-\xi_j$ imply $M_j\in L^2$. By scalar linearity and the fact that an integrable measurable variable is its own conditional expectation, each coordinate satisfies $\mathbb E[\xi_j^\ell\mid\mathcal F_{j-1}]=0$. Integrating the scalar conditional second-moment bound and using [F2] gives $$ \mathbb E\|\xi_j\|_2^2\le\mathbb E[v_j]. $$ Thus the vector conditional means, errors and second moments used below are well-defined in the stated finite-dimensional $L^2$ spaces. [F1, F2, A1, A2, given, algebra]

2.1 If $i<j$, then [given] $\xi_i$ is $\mathcal F_{j-1}$-measurable. For each coordinate $\ell$, both $\xi_i^\ell$ and $\xi_j^\ell$ are in $L^2$; the pointwise inequality $2|ab|\le a^2+b^2$ makes their product integrable. Apply [F3] coordinatewise and use step 1.1 to obtain $$ \mathbb E\langle\xi_i,\xi_j\rangle =\sum_{\ell<d}\mathbb E[\xi_i^\ell\xi_j^\ell] =\sum_{\ell<d}\mathbb E\left[\xi_i^\ell \mathbb E[\xi_j^\ell\mid\mathcal F_{j-1}]\right]=0. $$ Expanding the finite squared norm and using the integrated conditional variance bound from step 1.1 gives $$ \mathbb E\left\|\sum_{j=1}^m\xi_j\right\|_2^2 =\sum_{j=1}^m\mathbb E\|\xi_j\|_2^2 \le\sum_{j=1}^m\mathbb E[v_j]. $$ [F1, F2, F3, F4, step 1.1, given, algebra]

3.1 Since $Z_j=M_j+\xi_j$, apply $\|u+v\|_2^2\le2\|u\|_2^2+2\|v\|_2^2$ to the sums $u=\sum_jM_j$ and $v=\sum_j\xi_j$. Take expectations and substitute step 2.1. This proves the Statement. [F4, step 2.1, given, algebra] ∎

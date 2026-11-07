---
id: ex-holomorphic-eigenform-mass-pairing-with-a-maass-form
kind: example
title: "A Maass-Test Matrix Coefficient Tends to Zero"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - def-holomorphic-eigenform-hyperbolic-mass-measure
  - thm-holowinsky-soundararajan-mass-equidistribution
  - def-weight-zero-maass-form-on-gamma0n
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "Theorem 1(i), printed p. 3, and the Maass test-function interpretation at printed pp. 2–3."
---

## Example

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $(k_j)_{j\ge1}$ be even integers with $k_j\ge4$ and $k_j\to\infty$, let $f_j(z)=\sum_{n\ge1}a_{f_j}(n)e^{2\pi inz}$ be any nonzero full-level holomorphic Hecke cusp form of weight $k_j$ with $a_{f_j}(1)=1$ and $T_nf_j=a_{f_j}(n)f_j$ for every $n\ge1$, and let $\phi$ be a fixed Petersson-norm-one level-one weight-zero Hecke–Maass cusp eigenfunction. Then for every $\epsilon>0$,
$$\left|\int_X\phi\,d\mu_{f_j}\right|\ll_{\phi,\epsilon}(\log k_j)^{-1/30+\epsilon},$$
where $X=\mathrm{PSL}_2(\mathbb Z)\backslash\mathbb H$ and $\mu_{f_j}$ is the Petersson-normalized hyperbolic mass probability measure.

## Example references

[[def-holomorphic-eigenform-hyperbolic-mass-measure]]

[[def-weight-zero-maass-form-on-gamma0n]]

[[thm-holowinsky-soundararajan-mass-equidistribution]]

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, Theorem 1(i)](https://arxiv.org/pdf/0809.1636v1)

## Facts & Assumptions

**Given:** AC, DC and Countable Choice; a sequence $(k_j,f_j)$ as in the Example; and a fixed unit-norm level-one weight-zero Hecke–Maass cusp eigenfunction $\phi$.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: For every nonempty set $X$, every relation $R$ entire on $X$, and every $a\in X$, there is a function $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin R x_{n+1}$ for every $n\in\mathbb N$.

[A3] [[def-countable-choice]]: For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n\in\mathbb N$.

[F1] [[def-holomorphic-eigenform-hyperbolic-mass-measure]]: $\int_X\phi\,d\mu_{f_j}=\langle\phi F_{f_j,k_j},F_{f_j,k_j}\rangle_X$ for $F_{f_j,k_j}=y^{k_j/2}f_j/\langle f_j,f_j\rangle_{1,k_j}^{1/2}$.

[F2] [[def-weight-zero-maass-form-on-gamma0n]]: A weight-zero Maass cusp form is smooth, square-integrable, a Laplace eigenfunction, and has zero constant Fourier term at the cusp; the Example additionally assumes it is a Hecke eigenfunction with norm one.

[L1] [[thm-holowinsky-soundararajan-mass-equidistribution]]: For every fixed Petersson-norm-one level-one Hecke–Maass cusp eigenfunction $\phi$ and every $\epsilon>0$, $|\int_X\phi\,d\mu_{f_j}|\ll_{\phi,\epsilon}(\log k_j)^{-1/30+\epsilon}$.

## Verification

1.1 By [F1], the mass integral in the Example is exactly the matrix coefficient against $F_{f_j,k_j}$, with the given Petersson normalization. [F1, F2, given, algebra]

2.1 Apply the fixed Maass-test estimate [L1] to the given $\phi$ and sequence $(k_j,f_j)$. It is the claimed bound, and it tends to zero for any fixed $0<\epsilon<1/30$. The axioms AC, DC and Countable Choice are hypotheses inherited through [L1]. [A1, A2, A3, L1, step 1.1, given, algebra] ∎

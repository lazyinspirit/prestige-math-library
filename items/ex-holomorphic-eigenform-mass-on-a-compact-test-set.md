---
id: ex-holomorphic-eigenform-mass-on-a-compact-test-set
kind: example
title: "Mass Tested Against a Compactly Supported Function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - def-holomorphic-eigenform-hyperbolic-mass-measure
  - thm-holowinsky-soundararajan-mass-equidistribution
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
      locator: "Introduction, equation (1.1), printed p. 3: the smooth bounded test-function formulation."
---

## Example

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $(k_j)_{j\ge1}$ be even integers with $k_j\ge4$ and $k_j\to\infty$, let $f_j(z)=\sum_{n\ge1}a_{f_j}(n)e^{2\pi inz}$ be any nonzero full-level holomorphic Hecke cusp form of weight $k_j$ with $a_{f_j}(1)=1$ and $T_nf_j=a_{f_j}(n)f_j$ for every $n\ge1$, and let $h\in C_c^\infty(X)$ be a fixed smooth complex-valued function with compact support on $X=\mathrm{PSL}_2(\mathbb Z)\backslash\mathbb H$. Then $\int_X h\,d\mu_{f_j}\to (3/\pi)\int_Xh\,dA$, where $\mu_{f_j}$ is the Petersson-normalized hyperbolic mass measure and $dA=dx\,dy/y^2$.

## Example references

[[def-holomorphic-eigenform-hyperbolic-mass-measure]]

[[thm-holowinsky-soundararajan-mass-equidistribution]]

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, Introduction and Theorem 1](https://arxiv.org/pdf/0809.1636v1)

## Facts & Assumptions

**Given:** AC, DC and Countable Choice; a sequence $(k_j,f_j)$ as in the Example; and a fixed $h\in C_c^\infty(X)$.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: For every nonempty set $X$, every relation $R$ entire on $X$, and every $a\in X$, there is a function $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin R x_{n+1}$ for every $n\in\mathbb N$.

[A3] [[def-countable-choice]]: For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n\in\mathbb N$.

[F1] [[def-holomorphic-eigenform-hyperbolic-mass-measure]]: $\mu_{f_j}$ is the probability measure $|f_j(z)|^2y^{k_j}dA/\langle f_j,f_j\rangle_{1,k_j}$.

[L1] [[thm-holowinsky-soundararajan-mass-equidistribution]]: For every fixed smooth bounded $h$ on $X$, $\int_X h\,d\mu_{f_j}\to (3/\pi)\int_X h\,dA$ as $k_j\to\infty$.

## Verification

1.1 Since $h$ is smooth and compactly supported, it is a smooth bounded function on $X$. The measure and integration convention are those in [F1]. [F1, given, algebra]

2.1 Apply the smooth-bounded-test conclusion [L1] to this fixed $h$ and the given sequence $(k_j,f_j)$. This gives the stated limit. The three choice axioms are hypotheses inherited through [L1]. [A1, A2, A3, L1, step 1.1, given] ∎

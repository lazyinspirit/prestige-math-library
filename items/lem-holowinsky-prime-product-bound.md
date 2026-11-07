---
id: lem-holowinsky-prime-product-bound
kind: lemma
title: "Holowinsky's Prime-Product Bound from the Symmetric-Square Value"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - def-petersson-inner-product-on-congruence-forms
  - def-holowinsky-soundararajan-sieve-parameters
  - thm-hecke-adjoint-and-commuting-relations-congruence-forms
  - thm-symmetric-square-l-function-analytic-properties-and-zero-free-region
  - lem-reciprocal-prime-sum-from-mertens-first-theorem
  - thm-logarithm-derivative-and-integral
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "§2, Lemma 3, printed p. 9: bound for M_k(f) in terms of L(1,sym^2 f)."
    - title: "J. S. Milne, Modular Functions and Modular Forms, version 1.31"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Corollary 5.20, printed pp. 73–75: the prime-square Hecke recurrence."
---

## Statement

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $k\ge4$ be even and let $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$ be a nonzero full-level holomorphic Hecke cusp form with $a_f(1)=1$ and $T_nf=a_f(n)f$ for every $n\ge1$. Put $\lambda_f(n)=a_f(n)n^{-(k-1)/2}$ and
$$M_k(f)=\frac{1}{(\log k)^2L(1,\operatorname{sym}^2 f)}\prod_{p\le k}\left(1+\frac{2|\lambda_f(p)|}{p}\right).$$
Then, with an absolute implied constant,
$$M_k(f)\ll (\log k)^{1/6}(\log\log k)^{9/2}L(1,\operatorname{sym}^2 f)^{1/2}.$$

## Statement references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[def-petersson-inner-product-on-congruence-forms]]

[[def-holowinsky-soundararajan-sieve-parameters]]

[[thm-hecke-adjoint-and-commuting-relations-congruence-forms]]

[[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]

[[lem-reciprocal-prime-sum-from-mertens-first-theorem]]

[[thm-logarithm-derivative-and-integral]]

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, §2, Lemma 3](https://arxiv.org/pdf/0809.1636v1)

## Facts & Assumptions

**Given:** AC, DC and Countable Choice; an even integer $k\ge4$; and a normalized full-level holomorphic Hecke cusp eigenform $f$.

[A1] [[def-axiom-of-choice]]: Every family of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: For every nonempty set $X$, every relation $R$ entire on $X$, and every $a\in X$, there is a function $x:\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin R x_{n+1}$ for every $n\in\mathbb N$.

[A3] [[def-countable-choice]]: For every family $(X_n)_{n\in\mathbb N}$ of nonempty sets indexed by $\mathbb N$ there is a function $f$ with domain $\mathbb N$ such that $f(n)\in X_n$ for every $n\in\mathbb N$.

[F1] [[def-normalized-full-level-holomorphic-hecke-eigenform]]: $a_f(1)=1$ and $T_nf=a_f(n)f$ for every $n\ge1$.

[F2] [[thm-hecke-adjoint-and-commuting-relations-congruence-forms]]: at level one with trivial character, $T_p$ is self-adjoint and $T_p^2=T_{p^2}+p^{k-1}T_1$.

[F3] [[def-petersson-inner-product-on-congruence-forms]]: the Petersson inner product on cusp forms is positive definite.

[F4] [[lem-reciprocal-prime-sum-from-mertens-first-theorem]]: for every real $x\ge3$, $\sum_{p\le x}p^{-1}=\log\log x+O(1)$.

[F5] [[thm-logarithm-derivative-and-integral]]: for every $x>0$, $\log'(x)=1/x$.

[F6] [[def-holowinsky-soundararajan-sieve-parameters]]: $M_k(f)=((\log k)^2L(1,\operatorname{sym}^2f))^{-1}\prod_{p\le k}(1+2|\lambda_f(p)|/p)$.

[L1] [[thm-symmetric-square-l-function-analytic-properties-and-zero-free-region]]: $L(1,\operatorname{sym}^2 f)>0$ and $L(1,\operatorname{sym}^2 f)\gg (\log\log k)^{-3}\exp\!\left(\sum_{p\le k}\frac{\lambda_f(p^2)}p\right)$.

## Proof

1.1 Since $f$ is a nonzero eigenvector of the self-adjoint operator $T_p$ on the positive-definite Petersson space, [F1]–[F3] imply that $\lambda_f(p)$ is real. The prime-square Hecke relation in [F2], divided by $p^{k-1}$, gives $\lambda_f(p^2)=\lambda_f(p)^2-1$. For every real $x$, $\frac32(|x|-\frac23)^2\ge0$, so $2|x|\le\frac23+\frac32x^2$. Applying this with $x=\lambda_f(p)$ and summing over $p\le k$ yields $2\sum_{p\le k}|\lambda_f(p)|/p\le\frac{13}{6}\sum_{p\le k}1/p+\frac32\sum_{p\le k}\lambda_f(p^2)/p$. For $t\ge0$, the function $t-\log(1+t)$ vanishes at zero and has derivative $t/(1+t)\ge0$ by [F5], so $\log(1+t)\le t$. Applying this to the finite product defined by [F6] gives $M_k(f)\le(\log k)^{-2}L(1,\operatorname{sym}^2f)^{-1}\exp(\frac{13}{6}\sum_{p\le k}1/p+\frac32\sum_{p\le k}\lambda_f(p^2)/p)$. [F1, F2, F3, F5, F6, given, algebra]

2.1 By [F4], $\exp(\frac{13}{6}\sum_{p\le k}p^{-1})\ll(\log k)^{13/6}$. By [L1], $\exp(\frac32\sum_{p\le k}\lambda_f(p^2)/p)\ll(\log\log k)^{9/2}L(1,\operatorname{sym}^2f)^{3/2}$. Substitution into the bound from step 1.1 and cancellation of one factor of $L(1,\operatorname{sym}^2 f)$ proves the asserted estimate. [A1, A2, A3, F4, L1, step 1.1, algebra] ∎

## Proof status

The calculation is complete conditional on [L1]. AC, DC and Countable Choice enter only through the symmetric-square input [L1]; the two-step algebra itself is choice free. The cited symmetric-square lower bound is not a proved local supplier in the current run; this item is therefore not ready.

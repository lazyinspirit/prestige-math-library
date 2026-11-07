---
id: thm-symmetric-square-l-function-analytic-properties-and-zero-free-region
kind: theorem
title: "Analytic Properties and Zero-Free Region for the Symmetric-Square L-Function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - thm-gelbart-jacquet-symmetric-square-automorphy
  - thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation
  - thm-cogdell-global-same-rank-rankin-selberg-analytic-continuation-and-functional-equation
  - thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms
  - thm-hecke-adjoint-and-commuting-relations-congruence-forms
  - def-euler-gamma-function
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "R. Holowinsky and K. Soundararajan, Mass Equidistribution for Hecke Eigenforms"
      url: "https://arxiv.org/pdf/0809.1636v1"
      locator: "§2, printed pp. 6–9: Euler product, completed functional equation, zero-free region and lower bounds at 1."
    - title: "K. Soundararajan, Weak Subconvexity for Central Values of L-Functions"
      url: "https://arxiv.org/pdf/0809.1635v1"
      locator: "§1, Example 1, printed pp. 4–5: analytic conductor and weak subconvex bound for the symmetric-square L-function."
    - title: "S. Gelbart and H. Jacquet, A Relation between Automorphic Representations of GL(2) and GL(3)"
      url: "https://www.math.columbia.edu/~hj/Forms%20on%20GL%282%29%20and%20GL%283%29.pdf"
      locator: "§9, Theorem 9.3 and proof, printed pp. 534–541."
---

## Statement

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $k\ge4$ be even and let $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$ be a nonzero full-level holomorphic Hecke cusp form with $a_f(1)=1$ and $T_nf=a_f(n)f$ for every $n\ge1$. Put $\lambda_f(n)=a_f(n)n^{-(k-1)/2}$. For each prime $p$, let $\alpha_p,\beta_p$ be the roots of $X^2-\lambda_f(p)X+1$, and define, for $\operatorname{Re}s>1$,
$$
L(s,\operatorname{sym}^2 f)=\prod_p\frac{1}{(1-\alpha_p^2p^{-s})(1-p^{-s})(1-\beta_p^2p^{-s})}.
$$
The roots satisfy $|\alpha_p|=|\beta_p|=1$, and the product converges absolutely in this half-plane. The function continues to an entire function, and its completion
$$
\Lambda(s,\operatorname{sym}^2 f)=\Gamma_{\mathbb R}(s+1)\Gamma_{\mathbb R}(s+k-1)\Gamma_{\mathbb R}(s+k)L(s,\operatorname{sym}^2 f),
\qquad
\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2),
$$
satisfies $\Lambda(s,\operatorname{sym}^2 f)=\Lambda(1-s,\operatorname{sym}^2 f)$. There are absolute constants $c,c_1,c_2>0$ such that the region
$$
\operatorname{Re}s\ge1-\frac{c}{\log(k(1+|\operatorname{Im}s|))}
$$
contains no zeros of $L(s,\operatorname{sym}^2 f)$, and
$$
L(1,\operatorname{sym}^2 f)\ge\frac{c_1}{\log k},
\qquad
L(1,\operatorname{sym}^2 f)\ge
c_2(\log\log k)^{-3}\exp\!\left(\sum_{p\le k}\frac{\lambda_f(p^2)}p\right),
$$
where $\lambda_f(p^2)=\lambda_f(p)^2-1$.

## Statement references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[thm-gelbart-jacquet-symmetric-square-automorphy]]

[[thm-cogdell-global-adjacent-rank-analytic-continuation-and-functional-equation]]

[[thm-cogdell-global-same-rank-rankin-selberg-analytic-continuation-and-functional-equation]]

[[thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms]]

[[thm-hecke-adjoint-and-commuting-relations-congruence-forms]]

[Holowinsky–Soundararajan, *Mass Equidistribution for Hecke Eigenforms*, §2](https://arxiv.org/pdf/0809.1636v1)

[Soundararajan, *Weak Subconvexity for Central Values of L-Functions*, Example 1](https://arxiv.org/pdf/0809.1635v1)

[Gelbart–Jacquet, *A Relation between Automorphic Representations of GL(2) and GL(3)*, §9](https://www.math.columbia.edu/~hj/Forms%20on%20GL%282%29%20and%20GL%283%29.pdf)

## Proof status

No local proof is supplied. Shimura’s continuation and functional equation, the same-rank Rankin–Selberg input for the zero-free region, the Hoffstein–Lockhart exclusion of the possible exceptional real zero, and the Goldfeld–Hoffstein–Lieman lower bound remain proof obligations. The cited lower-bound argument is stated for Maass forms and the source says that its holomorphic application follows after minor modifications; that adaptation is not proved here. Its direct Deligne supplier is present but conditional on unresolved cohomological inputs.

---
id: cor-horizontal-pieri-rule
kind: corollary
title: The horizontal Pieri rule
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - thm-littlewood-richardson-tensor-product-rule
  - def-littlewood-richardson-tableau-and-coefficient
  - def-schur-module-and-schur-polynomial-character
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-symmetric-and-exterior-powers-over-an-arbitrary-field
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-partition-young-diagram-and-conjugate-partition
  - def-semistandard-tableau-and-kostka-number
  - prop-semistandard-tableaux-expand-schur-characters
  - def-stable-schur-function-by-bialternants
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. R. Stembridge, A Concise Proof of the Littlewood--Richardson Rule, Electronic Journal of Combinatorics 9 (2002), #N5, 4 pp."
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf"
      locator: "Printed pp. 1--3 (the LR rule and its lattice-word formulation; the Pieri case is the specialization to the one-row content)."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§27.2 Example 27.2, printed p. 146 (symmetric powers), and §29.1, printed p. 155 (their characters are complete symmetric polynomials); the horizontal Pieri argument is supplied locally from the LR theorem."
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 9 §9.2.4 Corollary 9.2.4, printed pp. 411--412 (Pieri's rule for the tensor product with a symmetric power); §9.3.5, printed pp. 418--421."
---

## Statement

Assume the Axiom of Choice. Let $V=\mathbb C^r$, $r\ge1$, let $\lambda$ be a
partition with $\ell(\lambda)\le r$ and let $d\ge0$. Then
$$S_\lambda(V)\otimes\operatorname{Sym}^d(V)\cong\bigoplus_\nu S_\nu(V),$$
the sum over those partitions $\nu$ of $|\lambda|+d$ with $\ell(\nu)\le r$ and
$[\lambda]\subseteq[\nu]$ for which the skew diagram $\nu/\lambda$ is a
horizontal strip (at most one box in each column,
[[def-skew-diagram-and-semistandard-skew-tableau]]), each summand occurring
with multiplicity one; equivalently
$$s_\lambda h_d=\sum_{\nu/\lambda\text{ horizontal}}s_\nu$$
in the rank-$r$ Schur basis, where
$\operatorname{Sym}^d(V)$ is the $d$-th symmetric power
([[def-symmetric-and-exterior-powers-over-an-arbitrary-field]]).

## Facts & Assumptions

**Given:** AC, $V=\mathbb C^r$, a partition $\lambda$ with $\ell(\lambda)\le r$ and an integer $d\ge0$.

[F1] For $d>0$, the one-row Specht module $S^{(d)}$ is trivial: its tabloid module has one basis element and all column stabilizers are trivial. Thus $S_{(d)}(V)\cong(V^{\otimes d})^{S_d}$. This is isomorphic to the quotient symmetric power of [[def-symmetric-and-exterior-powers-over-an-arbitrary-field]]: the averaging operator $P=d!^{-1}\sum_{\sigma\in S_d}\sigma$ annihilates every coinvariance relation and induces the inverse to the quotient map restricted to invariants, because $q(Pt)=q(t)$ and $P$ fixes invariant tensors. These maps commute with $\operatorname{GL}(V)$ ([[def-schur-module-and-schur-polynomial-character]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]). For $d=0$, use the empty partition in place of $(d)$; its Schur module, $V^{\otimes0}$ and $\operatorname{Sym}^0V$ are all $\mathbb C$.

[F2] Littlewood--Richardson rule: for partitions $\lambda,\mu$ with $\ell(\lambda),\ell(\mu)\le r$, $S_\lambda(V)\otimes S_\mu(V)\cong\bigoplus_{\nu:\,\ell(\nu)\le r}S_\nu(V)^{\oplus c^\nu_{\lambda\mu}}$, with $c^\nu_{\lambda\mu}$ the number of LR tableaux of shape $\nu/\lambda$ and content $\mu$, and $c^\nu_{\lambda\mu}=0$ unless $\lambda\subseteq\nu$ and $|\nu|=|\lambda|+|\mu|$ ([[thm-littlewood-richardson-tensor-product-rule]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F3] A semistandard skew tableau of shape $\nu/\lambda$ and content $(d)$ has all its entries equal to $1$; weak increase along rows is automatic, and strict increase down columns forces every column of $\nu/\lambda$ to contain at most one box, so such a tableau exists if and only if $\nu/\lambda$ is a horizontal strip, and then it is unique; its reading word is the constant word $1\,1\cdots1$, a lattice word ([[def-skew-diagram-and-semistandard-skew-tableau]], [[def-semistandard-tableau-and-kostka-number]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F4] The complete symmetric polynomial $h_d=\sum_{1\le i_1\le\cdots\le i_d\le r}x_{i_1}\cdots x_{i_d}$ equals $s_{(d)}$ by the one-row tableau expansion (and $h_0=s_\varnothing=1$), and the Schur polynomials $s_\nu$, $\ell(\nu)\le r$, are linearly independent: after multiplying a finite relation by $a_{\delta_r}$, the coefficient of the strictly decreasing exponent vector $\nu+\delta_r$ is exactly that relation’s coefficient of $s_\nu$ ([[prop-semistandard-tableaux-expand-schur-characters]], [[def-stable-schur-function-by-bialternants]], [[thm-littlewood-richardson-tensor-product-rule]]).

## Proof

1.1 Apply the Littlewood--Richardson rule [F2] with $\mu=(d)$ for $d>0$ and $\mu=\varnothing$ for $d=0$, and use $S_{(d)}(V)=\operatorname{Sym}^d(V)$ from [F1]: $$S_\lambda(V)\otimes\operatorname{Sym}^d(V)\cong\bigoplus_{\nu:\,\ell(\nu)\le r}S_\nu(V)^{\oplus c^\nu_{\lambda,(d)}}.$$ [F1, F2, given, algebra]

2.1 For $d=0$, the unique empty tableau gives the single summand $\nu=\lambda$. For $d>0$, the coefficient $c^\nu_{\lambda,(d)}$ counts LR tableaux of shape $\nu/\lambda$ and content $(d)$; by [F3] this number is $1$ when $\nu/\lambda$ is a horizontal strip and $0$ otherwise, and it vanishes unless $\lambda\subseteq\nu$ and $|\nu|=|\lambda|+d$ by [F2]. Substituting into step 1.1 gives the direct-sum decomposition, the sum being over precisely those horizontal strips. [F2, F3, step 1.1, algebra]

3.1 Taking characters in step 2.1 and using $\operatorname{ch}S_\nu(V)=s_\nu(x_1,\dots,x_r)$ and $\operatorname{ch}\operatorname{Sym}^d(V)=h_d$ [F4] gives $s_\lambda h_d=\sum_{\nu/\lambda\text{ horizontal}}s_\nu$ in the rank-$r$ Schur basis; the two displayed statements are equivalent by the linear independence of the Schur characters [F4]. [F1, F4, step 1.1, step 2.1, algebra] ∎

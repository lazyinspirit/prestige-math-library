---
id: prop-littlewood-richardson-coefficients-stabilize-with-rank
kind: proposition
title: Littlewood--Richardson coefficients stabilise with rank
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
  - def-stable-schur-function-by-bialternants
  - def-partition-young-diagram-and-conjugate-partition
  - def-semistandard-tableau-and-kostka-number
  - def-skew-diagram-and-semistandard-skew-tableau
  - lem-highest-weight-modules-have-weights-below-the-top-weight
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. R. Stembridge, A Concise Proof of the Littlewood--Richardson Rule, Electronic Journal of Combinatorics 9 (2002), #N5, 4 pp."
      url: "https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf"
      locator: "Printed pp. 2--3: the LR rule is stated for a fixed number $n$ of variables with the admissible/lattice tableaux of shapes with at most $n$ rows, and the bi-alternant corollary divides by $a_\\rho$; the stability of the coefficients is the statement that the tableau count does not involve $n$."
    - title: "T. Seynnaeve, Representation Theory (lecture notes, Bern)"
      url: "https://timseynnaeve.github.io/misc/Rep_Theory_Notes.pdf"
      locator: "Ch. 9 Remarks 9.4--9.6, printed pp. 51--52 (a partition with more rows than $\\dim V$ cannot occur as a polynomial highest weight); Ch. 11 Theorems 11.6--11.8, printed pp. 54--56."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§27.3--27.4, printed pp. 145--150 (polynomial representations of $GL_n$ and the row bound on highest weights)."
---

## Statement

Assume the Axiom of Choice. Let $\lambda,\mu$ be partitions, padding their row-length coordinates by zeros when needed, and let
$c^\nu_{\lambda\mu}$ be the Littlewood--Richardson coefficients of
[[def-littlewood-richardson-tableau-and-coefficient]].

(i) If $c^\nu_{\lambda\mu}\ne0$, then $\lambda\subseteq\nu$ and
$|\nu|=|\lambda|+|\mu|$; in particular $\nu_1\le\lambda_1+\mu_1$ and
$\ell(\nu)\le\ell(\lambda)+\ell(\mu)$.

(ii) For every $r\ge\max(1,\ell(\lambda),\ell(\mu))$ the tensor product over
$V=\mathbb C^r$ decomposes as
$$S_\lambda(V)\otimes S_\mu(V)\cong\bigoplus_{\nu:\,\ell(\nu)\le r}S_\nu(V)^{\oplus c^\nu_{\lambda\mu}},$$
with the same coefficients $c^\nu_{\lambda\mu}$ for every such $r$; if
$r\ge\ell(\lambda)+\ell(\mu)$ no coefficient visible at a larger rank is lost,
and for every such $r$ one has
$s_\lambda(x_1,\dots,x_r)s_\mu(x_1,\dots,x_r)=\sum_{\nu:\ell(\nu)\le r}c^\nu_{\lambda\mu}s_\nu(x_1,\dots,x_r)$
with $s_\nu(x_1,\dots,x_r)=0$ for $\ell(\nu)>r$
([[def-stable-schur-function-by-bialternants]]).

## Facts & Assumptions

**Given:** AC, partitions $\lambda,\mu$, and the LR coefficients defined as counts of LR tableaux of skew shapes $\nu/\lambda$ and content $\mu$ ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F1] The LR coefficient counts semistandard skew tableaux of shape $\nu/\lambda$ with content $\mu$ whose reading word is a lattice word; such a tableau exists only when $[\lambda]\subseteq[\nu]$ and has exactly $|\nu|-|\lambda|=|\mu|$ boxes, and its entries lie in $\{1,\dots,\ell(\mu)\}$ because the letter $j$ occurs $\mu_j=0$ times for $j>\ell(\mu)$ ([[def-littlewood-richardson-tableau-and-coefficient]], [[def-semistandard-tableau-and-kostka-number]], [[def-skew-diagram-and-semistandard-skew-tableau]]).

[F2] Column $1$ contains a box in every row $j>\ell(\lambda)$ for which $\nu_j>0$. A column of a skew diagram has its boxes in consecutive rows, and strict increase down that column gives distinct letters ([[def-skew-diagram-and-semistandard-skew-tableau]], [[def-semistandard-tableau-and-kostka-number]]).

[F3] Littlewood--Richardson tensor rule: for $r\ge\max(1,\ell(\lambda),\ell(\mu))$, $S_\lambda(V)\otimes S_\mu(V)\cong\bigoplus_{\ell(\nu)\le r}S_\nu(V)^{\oplus c^\nu_{\lambda\mu}}$ for $V=\mathbb C^r$, and the character identity $s_\lambda s_\mu=\sum_{\ell(\nu)\le r}c^\nu_{\lambda\mu}s_\nu$ holds with $s_\nu(x_1,\dots,x_r)=0$ for $\ell(\nu)>r$ ([[thm-littlewood-richardson-tensor-product-rule]], [[def-schur-module-and-schur-polynomial-character]], [[def-stable-schur-function-by-bialternants]]).

## Proof

1.1 Suppose $c^\nu_{\lambda\mu}\ne0$ and let $U$ be an LR tableau of shape $\nu/\lambda$ and content $\mu$. The containment $[\lambda]\subseteq[\nu]$ and the size identity $|\nu|=|\lambda|+|\mu|$ are part of [F1]. For the first row, read from right to left: the reading word of $U$ begins with the entries $b_1\ge b_2\ge\cdots\ge b_k$ of the first row (weak increase becomes weak decrease read right to left), where $k=\nu_1-\lambda_1$ is the number of boxes of the first row of the skew diagram. If $k>0$, the lattice condition at the first letter forces $b_1=1$: otherwise that prefix has one $b_1$ and no $b_1-1$. Hence $b_j=1$ for every $j$; if $k=0$, the desired inequality holds immediately, so all first-row entries equal $1$ and $k\le\mu_1$ because $U$ contains only $\mu_1$ copies of $1$. Hence $\nu_1-\lambda_1\le\mu_1$, i.e. $\nu_1\le\lambda_1+\mu_1$. [F1, given, algebra]

1.2 Row bound. Suppose $\nu$ has a box in row $i>\ell(\lambda)+\ell(\mu)$. Since $i>\ell(\lambda)$, we have $\lambda_j=0$ for every $j>\ell(\lambda)$; since row $i$ occurs in the partition $\nu$, we also have $\nu_j\ge1$ for every $j\le i$. Thus each row $j=\ell(\lambda)+1,\dots,i$ contributes a box in column $1$ to $\nu/\lambda$, giving at least $i-\ell(\lambda)$ boxes in that column. Strict increase down the column makes their entries distinct, and all entries lie in $\{1,\dots,\ell(\mu)\}$ because the tableau has content $\mu$ [F1]; hence $i-\ell(\lambda)\le\ell(\mu)$, contradicting $i>\ell(\lambda)+\ell(\mu)$. Therefore $\ell(\nu)\le\ell(\lambda)+\ell(\mu)$. [F1, F2, given, algebra]

2.1 Part (ii) for the tensor product is exactly [F3], applied at each rank $r\ge\max(1,\ell(\lambda),\ell(\mu))$; the coefficients appearing are the rank-independent tableau counts $c^\nu_{\lambda\mu}$ of [[def-littlewood-richardson-tableau-and-coefficient]], so they are the same for every such $r$. If $r\ge\ell(\lambda)+\ell(\mu)$, then every $\nu$ with $c^\nu_{\lambda\mu}\ne0$ satisfies $\ell(\nu)\le r$ by step 1.2, so no coefficient disappears when the rank is lowered to $r$ from a larger rank; equivalently no coefficient visible at a larger rank is lost. [F1, F3, step 1.1, step 1.2, algebra]

3.1 The character identity is the character form of the decomposition in [F3], with the convention $s_\nu(x_1,\dots,x_r)=0$ for $\ell(\nu)>r$; it holds for every $r\ge\max(1,\ell(\lambda),\ell(\mu))$ by [F3]; once $r\ge\ell(\lambda)+\ell(\mu)$, the set of partitions with nonzero coefficients and those coefficients are independent of $r$ by step 2.1. The Schur polynomials themselves are evaluated in the rank-dependent variables $x_1,\dots,x_r$. [F3, step 2.1, algebra] ∎

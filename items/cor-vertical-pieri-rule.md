---
id: cor-vertical-pieri-rule
kind: corollary
title: The vertical Pieri rule
status: draft
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
  - cor-the-kth-exterior-power-vanishes-above-dimension
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
      locator: "Printed pp. 1--3 (the LR rule; the column-content specialization is the vertical Pieri case)."
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 9 §9.2.4 Corollary 9.2.4, printed pp. 411--412 (the transposed Pieri rule for tensor products with exterior powers); §9.3.5, printed pp. 418--421 (LR rule as tensor product rule)."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§30.2 Example 30.8(2), printed p. 161 (tensoring a Schur module with an exterior power by adding boxes in different rows)."
---

## Statement

Assume the Axiom of Choice. Let $V=\mathbb C^r$, $r\ge1$, let $\lambda$ be a
partition with $\ell(\lambda)\le r$ and let $d\ge0$. Then
$$S_\lambda(V)\otimes\Lambda^d(V)\cong\bigoplus_\nu S_\nu(V),$$
the sum over those partitions $\nu$ of $|\lambda|+d$ with $\ell(\nu)\le r$ and
$[\lambda]\subseteq[\nu]$ for which the skew diagram $\nu/\lambda$ is a
vertical strip (at most one box in each row,
[[def-skew-diagram-and-semistandard-skew-tableau]]), each summand occurring
with multiplicity one; equivalently
$$s_\lambda e_d=\sum_{\nu/\lambda\text{ vertical}}s_\nu$$
in the rank-$r$ Schur basis, where $\Lambda^d(V)$ is the $d$-th exterior
power ([[def-symmetric-and-exterior-powers-over-an-arbitrary-field]]).

## Facts & Assumptions

**Given:** AC, $V=\mathbb C^r$ with basis $e_1,\dots,e_r$, a partition $\lambda$ with $\ell(\lambda)\le r$, and an integer $d\ge0$.

[F1] The one-column Specht module $S^{(1^d)}$ is the sign representation: its column stabilizer is all of $S_d$, and the signed sum of its distinct tabloids spans a line on which every permutation acts by its sign. Therefore $S_{(1^d)}(V)$ is the subspace of alternating tensors. It is isomorphic to the quotient exterior power in [[def-symmetric-and-exterior-powers-over-an-arbitrary-field]] via $v_1\wedge\cdots\wedge v_d\mapsto d!^{-1}\sum_{\sigma\in S_d}\operatorname{sgn}(\sigma)\sigma(v_1\otimes\cdots\otimes v_d)$. The displayed multilinear map vanishes when two inputs agree (pair permutations by their transposition), so it factors through the quotient. Conversely the quotient of this signed average is the original wedge, since a transposition changes a wedge's sign by expanding a repeated input $u+v$; the signed average fixes every alternating tensor. These are inverse equivariant maps ([[def-schur-module-and-schur-polynomial-character]], [[def-column-antisymmetrizer-polytabloid-and-specht-module]]). For $d=0$, $(1^0)$ means $\varnothing$ and both spaces are $\mathbb C$; for $d>r$ both spaces vanish ([[cor-the-kth-exterior-power-vanishes-above-dimension]]).

[F2] Littlewood--Richardson rule: for partitions $\lambda,\mu$ with $\ell(\lambda),\ell(\mu)\le r$, $S_\lambda(V)\otimes S_\mu(V)\cong\bigoplus_{\nu:\,\ell(\nu)\le r}S_\nu(V)^{\oplus c^\nu_{\lambda\mu}}$, where $c^\nu_{\lambda\mu}$ is the number of LR tableaux of shape $\nu/\lambda$ and content $\mu$, vanishing unless $\lambda\subseteq\nu$ and $|\nu|=|\lambda|+|\mu|$ ([[thm-littlewood-richardson-tensor-product-rule]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F3] Let $U$ be a semistandard skew tableau of shape $\nu/\lambda$ and content $(1^d)$, i.e. with entries $1,2,\dots,d$ each occurring once. Its reading word $w(U)$ is a permutation of $1,\dots,d$; it is a lattice word exactly when $w(U)=1\,2\cdots d$, because the first letter of a lattice word of content $(1^d)$ must be $1$, and inductively the $k$-th letter must be $k$. If $\nu/\lambda$ contains two boxes in the same row, at columns $c<c'$, then the right cell is read before the left cell in the reading order, while semistandardness gives the strictly smaller entry on the left, so in the reading word the larger entry $T(i,c')$ precedes the smaller entry $T(i,c)$ and the word is not $1\,2\cdots d$. Hence an LR tableau of content $(1^d)$ exists only if $\nu/\lambda$ is a vertical strip; conversely, if $\nu/\lambda$ is a vertical strip, filling the boxes with $1,2,\dots,d$ in the order in which they are read (equivalently, from top row to bottom row, since each row has at most one box) makes every column strictly increasing downward and gives the reading word $1\,2\cdots d$, so the filling is the unique LR tableau of shape $\nu/\lambda$ and content $(1^d)$ ([[def-skew-diagram-and-semistandard-skew-tableau]], [[def-semistandard-tableau-and-kostka-number]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F4] The elementary symmetric polynomial $e_d=\sum_{1\le i_1<\cdots<i_d\le r}x_{i_1}\cdots x_{i_d}$ equals $s_{(1^d)}$ by the one-column tableau expansion; $e_0=1$ and $e_d=0$ for $d>r$. It is the character of $\Lambda^dV$, and the Schur characters $s_\nu$, $\ell(\nu)\le r$, are linearly independent ([[prop-semistandard-tableaux-expand-schur-characters]], [[def-stable-schur-function-by-bialternants]], [[thm-littlewood-richardson-tensor-product-rule]]).

## Proof

1.1 If $d>r$, the tensor product is zero by [F1], and the proposed sum is empty because a vertical strip inside at most $r$ rows has at most $r$ boxes. For $0\le d\le r$, apply the Littlewood--Richardson rule [F2] with $\mu=(1^d)$ and use $S_{(1^d)}(V)=\Lambda^dV$ from [F1]: $$S_\lambda(V)\otimes\Lambda^d(V)\cong\bigoplus_{\nu:\,\ell(\nu)\le r}S_\nu(V)^{\oplus c^\nu_{\lambda,(1^d)}}.$$ [F1, F2, given, algebra]

2.1 By [F3] the coefficient $c^\nu_{\lambda,(1^d)}$ is $1$ when $\nu/\lambda$ is a vertical strip and $0$ otherwise, and it vanishes unless $\lambda\subseteq\nu$ and $|\nu|=|\lambda|+d$ by [F2]. Substituting into step 1.1 gives the decomposition, summed over precisely the vertical strips; for $d>r$ the left-hand side is zero by [F1], and indeed a vertical strip $\nu/\lambda$ of size $d$ inside the rank-$r$ page has $\ell(\nu)\le r<d$, which is impossible with $|\nu/\lambda|=d$ boxes at most one per row. [F1, F2, F3, step 1.1, algebra]

3.1 Taking characters in step 2.1 and using $\operatorname{ch}S_\nu(V)=s_\nu$ and $\operatorname{ch}\Lambda^dV=e_d$ [F4] gives $s_\lambda e_d=\sum_{\nu/\lambda\text{ vertical}}s_\nu$ in the rank-$r$ Schur basis, the two statements being equivalent by the linear independence of the Schur characters [F4]. [F1, F4, step 1.1, step 2.1, algebra] ∎

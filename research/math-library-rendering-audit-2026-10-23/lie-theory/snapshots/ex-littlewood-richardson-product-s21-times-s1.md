---
id: ex-littlewood-richardson-product-s21-times-s1
kind: example
title: The product s(2,1)s(1) by Pieri
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps:
  - def-axiom-of-choice
  - thm-littlewood-richardson-tensor-product-rule
  - cor-horizontal-pieri-rule
  - def-schur-module-and-schur-polynomial-character
  - def-littlewood-richardson-tableau-and-coefficient
  - def-stable-schur-function-by-bialternants
  - prop-semistandard-tableaux-expand-schur-characters
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-partition-young-diagram-and-conjugate-partition
proof_strategy: direct
provenance:
  statement: ai-altered
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
      locator: "Printed pp. 1--3 (LR rule and lattice words; the content $(1)$ case is the Pieri specialization)."
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §5"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "§I.5 Examples, printed pp. 74--76 (Pieri rule $s_\\lambda h_d=\\sum s_\\nu$ over horizontal strips)."
---

## Example

Assume the Axiom of Choice. Let $r\ge2$, $V=\mathbb C^r$, and let
$s_\nu(x_1,\dots,x_r)$ denote the rank-$r$ Schur polynomial, with
$s_\nu(x_1,\dots,x_r)=0$ for $\ell(\nu)>r$
([[def-stable-schur-function-by-bialternants]],
[[prop-semistandard-tableaux-expand-schur-characters]]). Then
$$s_{(2,1)}(x_1,\dots,x_r)\,s_{(1)}(x_1,\dots,x_r)=s_{(3,1)}(x_1,\dots,x_r)+s_{(2,2)}(x_1,\dots,x_r)+s_{(2,1,1)}(x_1,\dots,x_r),$$
where the last term is read as $0$ when $r=2$; correspondingly, in the
notation of [[def-schur-module-and-schur-polynomial-character]],
$$S_{(2,1)}(V)\otimes V\cong S_{(3,1)}(V)\oplus S_{(2,2)}(V)\oplus S_{(2,1,1)}(V)$$
with LR coefficient one for each listed shape; when $r=2$ the final Schur
module is zero, so only the first two are nonzero summands
([[thm-littlewood-richardson-tensor-product-rule]],
[[cor-horizontal-pieri-rule]]). The three partitions $\nu$ are exactly the
partitions of $4$ with $[(2,1)]\subseteq[\nu]$ for which the skew diagram
$\nu/(2,1)$ is a horizontal strip, namely the three legal ways of adding one
box to the diagram of $(2,1)$
([[def-skew-diagram-and-semistandard-skew-tableau]]). The rank bound is
visible in the dimensions: for $r=3$ the identity reads $15+6+3=24=8\cdot3$,
and for $r=2$ the shape $(2,1,1)$ has more rows than variables and drops out,
leaving $3+1=4=2\cdot2$.

## Facts & Assumptions

**Given:** AC, an integer $r\ge2$ and the rank-$r$ Schur polynomials.

[F1] Horizontal Pieri: for $\ell(\lambda)\le r$ and $d\ge0$, the nonzero Schur summands in $S_\lambda(V)\otimes\operatorname{Sym}^d(V)$ are exactly those indexed by horizontal strips $\nu/\lambda$ with $\ell(\nu)\le r$, each with multiplicity one; the character identity is $s_\lambda h_d=\sum_{\nu/\lambda\text{ horizontal}}s_\nu$, where terms with $\ell(\nu)>r$ are zero. Here $S_{(1)}(V)=V$ and $h_1=s_{(1)}=x_1+\cdots+x_r$ ([[cor-horizontal-pieri-rule]], [[def-schur-module-and-schur-polynomial-character]]).

[F2] A skew diagram $\nu/(2,1)$ for a partition $\nu$ of $4$ is a horizontal strip of size one exactly when $\nu$ is obtained by adding one box to $[(2,1)]$, and additions are legal exactly at the ends of rows, giving the three partitions $(3,1)$, $(2,2)$, $(2,1,1)$ ([[def-skew-diagram-and-semistandard-skew-tableau]], [[def-partition-young-diagram-and-conjugate-partition]]).

[F3] For a three-row partition $(a,b,c)$, padded by zeros, deleting all entries $3$ from a semistandard tableau leaves a two-row shape $(p,q)$ with $a\ge p\ge b\ge q\ge c$: equal entries $3$ cannot share a column. Conversely these inequalities make the removed boxes a horizontal strip, so any tableau of shape $(p,q)$ on $\{1,2\}$ extends uniquely by filling the removed boxes with $3$. Its $q$ columns of height two are forced to be $1$ above $2$, and the remaining $p-q$ first-row boxes contain a weakly increasing string of $1$'s followed by $2$'s, with $p-q+1$ choices. Thus $s_{(a,b,c)}(1,1,1)=\sum_{p=b}^a\sum_{q=c}^b(p-q+1)=(a-b+1)(b-c+1)(a-c+2)/2$. At rank two the same column argument gives $s_{(a,b)}(1,1)=a-b+1$. Hence the rank-two values for $(3,1),(2,2),(2,1)$ are $3,1,2$, and the rank-three values for $(3,1),(2,2),(2,1,1),(2,1),(1)$ are $15,6,3,8,3$. The shape $(2,1,1)$ vanishes at rank two ([[prop-semistandard-tableaux-expand-schur-characters]], [[def-stable-schur-function-by-bialternants]]).

## Verification

1.1 Apply [F1] with $\lambda=(2,1)$ and $d=1$, using $S_{(1)}(V)=V$ and $h_1=s_{(1)}$: the summands are the partitions $\nu$ of $4$ with $[(2,1)]\subseteq[\nu]$ whose complement is a horizontal strip of one box. [F1, given, algebra]

2.1 By [F2] those partitions are exactly $(3,1)$, $(2,2)$ and $(2,1,1)$, and the LR coefficient for each is one. The character identity of the Statement includes all three terms, with $s_{(2,1,1)}=0$ at rank $2$; the module decomposition has only the nonzero Schur summands, so the final term is omitted there by [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 Dimension check at $r=3$: using the values of [F3], $8\cdot3=24=15+6+3$; dimension check at $r=2$: $2\cdot2=4=3+1$. Both identities match the displayed decomposition. [F3, step 2.1, algebra] ∎

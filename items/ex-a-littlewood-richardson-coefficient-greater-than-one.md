---
id: ex-a-littlewood-richardson-coefficient-greater-than-one
kind: example
title: A Littlewood--Richardson coefficient greater than one
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-littlewood-richardson-tableau-and-coefficient
  - thm-littlewood-richardson-tensor-product-rule
  - def-schur-module-and-schur-polynomial-character
  - def-stable-schur-function-by-bialternants
  - prop-semistandard-tableaux-expand-schur-characters
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-semistandard-tableau-and-kostka-number
  - def-partition-young-diagram-and-conjugate-partition
proof_strategy: direct
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
      locator: "Printed pp. 1--3 (LR tableaux and the lattice-word criterion; the example is the smallest case in which the enumeration has two tableaux)."
    - title: "R. Goodman and N. R. Wallach, Symmetry, Representations, and Invariants, Graduate Texts in Mathematics 255, Springer 2009"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/goodwallx.pdf"
      locator: "Ch. 9 §9.3.5, printed p. 421 (the $GL(n,\\mathbb C)$-example with $\\mu=[2,1]$, $\\nu=[1,1]$ and multiplicity-free summands) and the worked LR counts pp. 419--421."
---

## Example

Assume the Axiom of Choice. For partitions $\lambda,\mu,\nu$, let
$c^\nu_{\lambda\mu}$ be the Littlewood--Richardson coefficient of
[[def-littlewood-richardson-tableau-and-coefficient]], the number of LR
tableaux of shape $\nu/\lambda$ and content $\mu$; by
[[thm-littlewood-richardson-tensor-product-rule]] it is the multiplicity of
$S_\nu(V)$ in $S_\lambda(V)\otimes S_\mu(V)$ for $V=\mathbb C^r$ when
$\ell(\lambda),\ell(\mu),\ell(\nu)\le r$; if $\ell(\nu)>r$, the coefficient
remains the same LR tableau count but $S_\nu(V)=0$
([[def-schur-module-and-schur-polynomial-character]]). Then
$$c^{(3,2,1)}_{(2,1),(2,1)}=2.$$
Explicitly, the skew diagram $(3,2,1)/(2,1)$ consists of one box in each of
the three rows, at $(1,3)$, $(2,2)$ and $(3,1)$ in English row-column
coordinates ([[def-partition-young-diagram-and-conjugate-partition]]), so the
semistandard skew tableaux of content $(2,1)$ are simply the three words of
content $(2,1)$; their reading words, taken right to left in each row starting
with the top row, are $1,1,2$; $1,2,1$; and $2,1,1$, and the first two are
lattice words while $2,1,1$ fails at its first letter. The corresponding
expansion in Schur functions is
$$s_{(2,1)}^{2}=s_{(4,2)}+s_{(4,1,1)}+s_{(3,3)}+2s_{(3,2,1)}+s_{(3,1,1,1)}+s_{(2,2,2)}+s_{(2,2,1,1)},$$
which at rank $3$ gives $8^2=27+10+10+2\cdot8+1$, the two shapes with four
rows contributing $0$
([[def-stable-schur-function-by-bialternants]],
[[prop-semistandard-tableaux-expand-schur-characters]]).

## Facts & Assumptions

**Given:** AC, the partitions $\lambda=\mu=(2,1)$ and $\nu=(3,2,1)$, and the skew diagram $\nu/\lambda$.

[F1] A semistandard skew tableau of shape $\nu/\lambda$ weakly increases along rows and strictly increases down columns, and has content $\mu$ when each letter $i$ occurs $\mu_i$ times; its reading word reads the rows from right to left starting with the top row, and it is an LR tableau exactly when that word is a lattice word ([[def-skew-diagram-and-semistandard-skew-tableau]], [[def-semistandard-tableau-and-kostka-number]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F2] The LR coefficient is the tableau count of [[def-littlewood-richardson-tableau-and-coefficient]]; it is the multiplicity of $S_\nu(V)$ in $S_\lambda(V)\otimes S_\mu(V)$ when $\ell(\nu)\le r$, while $S_\nu(V)=0$ when $\ell(\nu)>r$. At rank $r$, the character of $S_\eta(V)$ is $s_\eta(x_1,\dots,x_r)$ ([[thm-littlewood-richardson-tensor-product-rule]], [[def-schur-module-and-schur-polynomial-character]], [[prop-semistandard-tableaux-expand-schur-characters]]).

[F3] For a three-row partition $(a,b,c)$, padded by zeros, deleting all entries $3$ from a semistandard tableau leaves a two-row shape $(p,q)$ with $a\ge p\ge b\ge q\ge c$: equal entries $3$ cannot share a column. Conversely these inequalities make the removed boxes a horizontal strip, so any tableau of shape $(p,q)$ on $\{1,2\}$ extends uniquely by filling the removed boxes with $3$. Its $q$ columns of height two are forced to be $1$ above $2$, and the remaining $p-q$ first-row boxes contain a weakly increasing string of $1$'s followed by $2$'s, with $p-q+1$ choices. Thus $s_{(a,b,c)}(1,1,1)=\sum_{p=b}^a\sum_{q=c}^b(p-q+1)=(a-b+1)(b-c+1)(a-c+2)/2$. At rank two the same column argument gives $s_{(a,b)}(1,1)=a-b+1$. This gives the rank-three values $27,10,10,8,1,8$ for $(4,2),(4,1,1),(3,3),(3,2,1),(2,2,2),(2,1)$ respectively; the two four-row shapes give zero. The unique tableau of shape $(2,2,2)$ has two columns, both $1,2,3$ ([[prop-semistandard-tableaux-expand-schur-characters]], [[def-stable-schur-function-by-bialternants]]).

## Verification

1.1 The boxes of $(3,2,1)/(2,1)$ are $(1,3)$ in the first row, $(2,2)$ in the second and $(3,1)$ in the third: each row of the diagram contains exactly one box, and no two boxes share a column. Hence a filling of these three boxes is semistandard if and only if it is a word of content $(2,1)$, with no further condition, so there are exactly three semistandard tableaux, obtained by choosing the box that carries $2$. [F1, given, algebra]

2.1 The reading word of a filling with the box $(i,j)$ read in the order $(1,3),(2,2),(3,1)$ is the displayed triple of letters; the three possibilities are $1,1,2$, $1,2,1$ and $2,1,1$. A word is a lattice word when each prefix contains at least as many $1$'s as $2$'s; this holds for $1,1,2$ and $1,2,1$ but fails for $2,1,1$, whose first prefix has one $2$ and no $1$. Hence exactly two of the three semistandard tableaux are LR tableaux, and $c^{(3,2,1)}_{(2,1),(2,1)}=2$. [F1, step 1.1, algebra]

3.1 Rank and the full expansion. For $r\ge3$, [F2] and step 2.1 identify the coefficient $2$ with the multiplicity of $S_{(3,2,1)}(V)$; at rank $2$ this Schur module is zero, although the LR coefficient remains $2$. To check the displayed stable expansion, apply the Littlewood--Richardson rule at rank $6$, so every partition of $6$ is within the rank bound. The only partitions of $6$ containing $(2,1)$ are $(5,1),(4,2),(4,1,1),(3,3),(3,2,1),(3,1,1,1),(2,2,2),(2,2,1,1),(2,1,1,1,1)$. Their LR reading-word counts for content $(2,1)$ are respectively $0,1,1,1,2,1,1,1,0$: the nonzero words are $112$ for $(4,2),(4,1,1),(3,1,1,1),(2,2,1,1)$, $121$ for $(3,3),(2,2,2)$, and both $112,121$ for $(3,2,1)$. For $(5,1)$ the top row forces reading word $211$, which is not lattice; for $(2,1,1,1,1)$ the first column has three boxes but the content supplies only two distinct letters, so no semistandard filling exists. The remaining partitions $(6)$ and $(1,1,1,1,1,1)$ do not contain $(2,1)$, so their coefficients vanish by definition. These counts give the stated expansion, with the two four-row terms vanishing at rank $3$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Rank-$3$ consistency. Evaluating the expanded identity at $x_1=x_2=x_3=1$ and using [F3] gives $$s_{(2,1)}(1,1,1)^2=8^2=64=27+10+10+2\cdot8+1,$$ the terms of the two four-row shapes $(3,1,1,1)$ and $(2,2,1,1)$ vanishing because no semistandard tableau with entries in $\{1,2,3\}$ can have four rows. This checks the expansion numerically. [F2, F3, step 3.1, algebra] ∎

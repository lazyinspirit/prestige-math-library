---
id: cor-all-abelian-groups-of-order-n-cyclic-iff-n-squarefree
kind: corollary
title: "Every abelian group of order n is cyclic if and only if n is squarefree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-squarefree-positive-integer, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form, thm-primary-decomposition-of-a-finite-abelian-group, thm-chinese-remainder-theorem, thm-order-of-element-in-direct-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Statement

For a positive integer $n$, every abelian group of order $n$ is cyclic if and only if $n$ is squarefree.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] A positive integer $n$ is **squarefree** if no square of a prime divides $n$. Equivalently, every exponent in its canonical prime factorisation is $0$ or $1$. The integer $1$ is squarefree by the empty factorisation. ([[def-squarefree-positive-integer]]).

[L2] Every finite abelian group is isomorphic to a finite direct product of cyclic groups of prime-power order. The multiset of their orders is uniquely determined by the group, up to permutation of the factors. ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]).

[L3] If $G$ is finite abelian and $|G|=\prod_{i<r}p_i^{a_i}$ is its prime factorisation, then the subgroups $G(p_i)$ form an internal direct product of $G$. Thus $$G\cong\prod_{i<r}G(p_i).$$ For the trivial group, this is the empty product. ([[thm-primary-decomposition-of-a-finite-abelian-group]]).

[L4] Let $n_0,\ldots,n_{r-1}$ be a finite pairwise-coprime list of positive integers and let $N:=\prod_{i<r}n_i$. The map $$\Phi:\mathbb Z/N\longrightarrow\prod_{i<r}\mathbb Z/n_i,\qquad[x]_N\longmapsto([x]_{n_i})_{i<r},$$ is a bijection. It preserves addition, multiplication, $[0]$, and $[1]$ componentwise. For the empty list, $N=1$ and both sides have one element. ([[thm-chinese-remainder-theorem]]).

[L5] Let $\iota:\mathbb N\to\mathbb Z$ be the canonical embedding. If $g\in G$ and $h\in H$ have finite orders $m,n\ge1$, then in the external direct product $$\operatorname{ord}(g,h)=\operatorname{lcm}(m,n).$$ ([[thm-order-of-element-in-direct-product]]).

## Proof

**Proof technique:** direct.

1.1 If $n$ is squarefree, each primary component of an abelian group of order $n$ has prime order and is cyclic. The Chinese remainder theorem combines the cyclic factors of pairwise coprime orders into a cyclic group of order $n$. [given, L1, L2, L3, L4, L5]

2.1 If $p^2\mid n$, write $n=p^a m$ with $a\ge2$ and $(p,m)=1$. The abelian group $C_p\times C_p\times C_{p^{a-2}}\times C_m$, omitting trivial factors, has order $n$ but exponent strictly below $n$, so it is not cyclic. [step 1.1]

3.1 For $n=1$ the sole group is trivial and cyclic, agreeing with squarefreeness of $1$. [step 2.1] ∎

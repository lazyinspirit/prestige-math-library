---
id: lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle
kind: lemma
title: 'Every nontrivial normal subgroup of $A_n$ contains a $3$-cycle for $n\ge5$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-normal-subgroup, thm-disjoint-cycle-decomposition, lem-conjugating-a-cycle-relabels-its-entries, def-permutation-support-disjoint-cycles-and-cycle-type, cor-sign-from-disjoint-cycle-structure]
justified_by: []
aliases: []
landmark: true
proof_strategy: extremal
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Simplicity of $A_n$"
      url: "https://judsonbooks.org/aata-files/aata-html/normal-section-simplicity-of-an.html"
pipeline_run: frontier-11
---

## Statement

For $n\ge5$, every nontrivial normal subgroup $N\trianglelefteq A_n$ contains
a $3$-cycle.

## Facts & Assumptions

**Given:** $n\ge5$ and a nontrivial normal subgroup $N\trianglelefteq A_n$.

[F1] Normality makes $N$ closed under conjugation by elements of $A_n$ ([[def-normal-subgroup]]).

[F2] Every permutation has a disjoint-cycle decomposition, whose moved points form its support ([[thm-disjoint-cycle-decomposition]], [[def-permutation-support-disjoint-cycles-and-cycle-type]]).

[F3] Conjugating a cycle relabels its entries ([[lem-conjugating-a-cycle-relabels-its-entries]]).

[F4] A $k$-cycle has sign $(-1)^{k-1}$, and $\operatorname{sgn}(\sigma)=(-1)^{n-c(\sigma)}$ when fixed points are included as $1$-cycles ([[cor-sign-from-disjoint-cycle-structure]]).

## Proof

**Proof technique:** extremal.

1.1 Choose $1\ne\sigma\in N$ having as many fixed points as possible; this is possible because $A_n$ is finite. [choose]

1.2 For any $3$-cycle $\tau$, the commutator $h=\tau\sigma\tau^{-1}\sigma^{-1}$ lies in $N$ by [F1]. Its support is contained in $\operatorname{supp}(\tau)\cup \sigma(\operatorname{supp}(\tau))$. [F1, F2, F3, algebra]

1.3 If $\sigma$ itself is a $3$-cycle, there is nothing to prove. Suppose instead that $\sigma$ has a $3$-cycle $(a_1\,a_2\,a_3)$ and also moves a point $b$ outside it. The remaining disjoint cycles form a nonidentity even permutation, so [F4] shows that they move at least three points; hence $\sigma$ moves at least six points. [F2, F4, algebra]

1.4 It remains that every nontrivial cycle of $\sigma$ is a transposition. Because $\sigma\in A_n$, [F4] makes their number $r$ even, so $r\ge2$. [F2, F4]

2.1 If $\sigma$ has a cycle $(a_1\,a_2\,a_3\,a_4\,\ldots)$ of length at least $4$, take $\tau=(a_1\,a_2\,a_3)$. Direct use of [F3] gives $h=(a_1\,a_2\,a_4)$, a $3$-cycle in $N$. [F3, step 1.2, algebra]

2.2 Put $\tau=(a_1\,a_2\,b)$. Its support is not preserved by $\sigma$, so $h\ne1$; step 1.2 shows that $h$ moves at most the five points $a_1,a_2,a_3,b,\sigma(b)$. Thus $h$ fixes more points than $\sigma$, contradicting step 1.1. [F2, F3, step 1.1, step 1.2, step 1.3]

2.3 If $r\ge3$, write two factors as $(a\,b)(c\,d)$ and take $\tau=(a\,b\,c)$. Calculation gives $h=(a\,c)(b\,d)$, which is nonidentity and moves four points, fewer than the at least six moved by $\sigma$; this again contradicts step 1.1. [step 1.1, step 1.2, step 1.4, algebra]

2.4 If $r=2$, write $\sigma=(a\,b)(c\,d)$. Since $n\ge5$, choose a fixed point $e$ and take $\tau=(a\,b\,e)$. Calculation gives $h=(a\,e\,b)$, a $3$-cycle in $N$. [step 1.2, step 1.4, choose, algebra]

3.1 The exhaustive cycle cases in [F2] show that either $\sigma$ itself, step 2.1, or step 2.4 supplies a $3$-cycle, while steps 2.2 and 2.3 exclude every other case. Therefore $N$ contains a $3$-cycle. [F2, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4] ∎

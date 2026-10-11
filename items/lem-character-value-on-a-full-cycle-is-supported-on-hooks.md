---
id: lem-character-value-on-a-full-cycle-is-supported-on-hooks
kind: lemma
title: "The value of an irreducible character on a full cycle is supported on hooks"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [thm-determinantal-form-of-a-specht-character,
       def-induced-character-of-a-complex-representation,
       def-outer-induction-product-for-symmetric-group-characters,
       def-partition-young-diagram-and-conjugate-partition,
       def-finite-symmetric-group-and-permutation-notation,
       def-virtual-character-and-character-ring-of-a-finite-group,
       def-young-subgroup-tabloid-and-permutation-module,
       lem-young-permutation-module-is-induced-from-the-trivial-character,
       def-trivial-regular-and-permutation-representations,
       cor-sign-from-disjoint-cycle-structure,
       def-column-antisymmetrizer-polytabloid-and-specht-module,
       lem-characteristic-of-a-young-permutation-character-is-complete,
       thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism,
       thm-character-of-a-permutation-representation-counts-fixed-points]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§21.4, printed pp. 80–81, Theorem 21.4 with its column-orthogonality/normalisation proof: the full-cycle value (−1)^{n−x} exactly on the hooks λ=(x,1^{n−x})"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995 (complete author-hosted scan, 486 pp.)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §7, (7.4)–(7.6), printed pp. 113–114: the determinantal construction of χ^λ and its identification as the irreducible character of S_n, evaluated here"
---

## Statement

Let $n\ge1$ and let $\rho\in S_n$ be a cycle of length $n$ (for $n=1$, the identity on the sole point)
([[def-finite-symmetric-group-and-permutation-notation]]). Then for every
partition $\lambda\vdash n$, taking $\lambda_2=0$ for a one-row partition, with $\chi^\lambda$ the character of the complex
Specht module $S^\lambda$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]],
[[def-virtual-character-and-character-ring-of-a-finite-group]]),

$$\chi^\lambda(\rho)=\begin{cases}(-1)^{n-x},& \lambda=(x,1^{n-x})\text{ for some }1\le x\le n,\\ 0,&\text{otherwise},\end{cases}$$

where $(x,1^{n-x})$ denotes the hook partition of $n$ with first part $x$. In
particular $\chi^{(n)}(\rho)=1$ and $\chi^{(1^n)}(\rho)=(-1)^{n-1}$, and
$\chi^\lambda(\rho)=0$ whenever $[\lambda]$ contains a $2\times2$ block of
nodes, equivalently whenever $\lambda_2\ge2$; in the hook case
$\lambda=(x,1^{n-x})$ the numbers of rows and columns are $n-x+1$ and $x$. No
choice principle is used.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a cycle $\rho\in S_n$ of length $n$, and a partition $\lambda=(\lambda_1\ge\cdots\ge\lambda_k>0)$ of $n$ with $k$ parts.

[F1] Determinantal form: $\chi^\lambda=\det([\lambda_i-i+j])=\sum_{w}\operatorname{sgn}(w)\,[\lambda_1-1+w(1)]\circ[\lambda_2-2+w(2)]\circ\cdots\circ[\lambda_k-k+w(k)]$ in $R(S_n)$, the sum running over bijections $w$ of $\{1,\dots,k\}$, where $[m]\in R(S_m)$ is the trivial character for $m\ge0$ and $[m]:=0$ for $m<0$, and $\circ$ is the outer induction product ([[thm-determinantal-form-of-a-specht-character]], [[def-outer-induction-product-for-symmetric-group-characters]]).

[F2] For $m_1,\dots,m_k\ge0$ the product $[m_1]\circ\cdots\circ[m_k]$ is the character of the permutation module on tabloids of shape $\mu$, where $\mu$ is the partition obtained by discarding the zero entries and reordering. Indeed the characteristic isomorphism sends this product to $\prod_i h_{m_i}=h_\mu$ (step 1.1 of [[thm-determinantal-form-of-a-specht-character]] and [[thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism]]); the tabloid character has the same characteristic by [[lem-characteristic-of-a-young-permutation-character-is-complete]], so injectivity identifies them. Negative entries give the zero character, and zero entries give unit factors. The value of a permutation character is the number of fixed points ([[thm-character-of-a-permutation-representation-counts-fixed-points]]).

[F3] The character $\chi^\lambda$, like every element of $R(S_n)$, is a complex-valued class function on $S_n$, and evaluation at $\rho$ is linear on $R(S_n)$ ([[def-virtual-character-and-character-ring-of-a-finite-group]]).

[F4] A cycle of length $k$ has sign $(-1)^{k-1}$ ([[cor-sign-from-disjoint-cycle-structure]]).

## Proof

**Proof technique:** direct.

1.1 For integers $m_1,\dots,m_k$ with $\sum_im_i=n$, the value of $[m_1]\circ\cdots\circ[m_k]$ at the $n$-cycle $\rho$ is $1$ if exactly one $m_i$ equals $n$ and all other $m_i$ equal $0$, and is $0$ otherwise. Indeed, if some $m_i$ is negative the product is $0$; otherwise it is the character of the permutation module on tabloids of shape $\mu$, the partition of the positive entries, and its value at $\rho$ counts the tabloids fixed by $\rho$. A tabloid is an ordered tuple of nonempty blocks of sizes $\mu_1,\mu_2,\dots$ and it is fixed exactly when $\rho$ preserves each block as a set; a subset of $\{1,\dots,n\}$ is invariant under the $n$-cycle $\rho$ only if it is empty or all of $\{1,\dots,n\}$. So a fixed tabloid has a single nonempty block, i.e. $\mu=(n)$ and the counted value is $1$; if $\mu\ne(n)$ the count is $0$. Since the positive entries of $(m_1,\dots,m_k)$ form the partition in question, the value is $1$ precisely when the multiset $\{m_1,\dots,m_k\}$ is $\{n,0,\dots,0\}$. [F2, given]

2.1 By [F1] and the linearity of evaluation [F3], $\chi^\lambda(\rho)=\sum_w\operatorname{sgn}(w)\,[\lambda_1-1+w(1)]\circ\cdots\circ[\lambda_k-k+w(k)](\rho)$, and by step 1.1 the sum extends only over the bijections $w$ for which the multiset $\{\lambda_i-i+w(i)\}_{i=1}^k$ equals $\{n,0,\dots,0\}$. For such a $w$, let $i_0$ be the unique index with $\lambda_{i_0}-i_0+w(i_0)=n$; then for every $j\ne i_0$ one has $\lambda_j-j+w(j)=0$, that is $w(j)=j-\lambda_j$, and therefore $\lambda_j\le j-1$ for every $j\ne i_0$. [step 1.1, F1, F3, algebra]

3.1 We solve the condition of step 2.1. If $\lambda_2\ge2$, no bijection $w$ satisfies it: for $i_0=1$ the index $j=2$ would violate $\lambda_j\le j-1$; for $i_0=2$ the index $j=1$ would require $\lambda_1\le0$; and for $i_0\ge3$ the index $j=2$ would violate $\lambda_2\le1$. Hence a surviving term exists only if $\lambda_2\le1$, i.e. only for hooks $\lambda=(x,1^{n-x})$, where $k=n-x+1$. Conversely for a hook: for $j\ge2$ one has $j-\lambda_j=j-1\in\{1,\dots,k-1\}$, these values are pairwise distinct, and for $j=1$ the equation $m_1=n$ reads $w(1)=n-x+1=k$; so there is exactly one admissible $w$, namely $w(1)=k$ and $w(j)=j-1$ for $j\ge2$, a $k$-cycle; it indeed satisfies $\lambda_1-1+w(1)=x-1+k=n$ and $\lambda_j-j+w(j)=1-j+j-1=0$ for $j\ge2$. Its sign is $(-1)^{k-1}=(-1)^{n-x}$ by [F4], so $\chi^\lambda(\rho)=(-1)^{n-x}$ for $\lambda=(x,1^{n-x})$, and $\chi^\lambda(\rho)=0$ whenever $\lambda_2\ge2$. The formula for $x=n$ gives $\chi^{(n)}(\rho)=1$, that for $x=1$ gives $\chi^{(1^n)}(\rho)=(-1)^{n-1}$, and a hook $(x,1^{n-x})$ has $n-x+1$ rows and $x$ columns; a partition with $\lambda_2\ge2$ is exactly one containing a $2\times2$ block, and it has at least two rows and its second row has at least two nodes. [step 2.1, F1, F4, algebra] ∎

## Remarks

- **Consistency with the two extreme rows.** For $x=n$ the hook is the single row $(n)$ and the value is $1$, as it must be for the trivial character; for $x=1$ it is the single column $(1^n)$ and the value is $(-1)^{n-1}$, the sign of an $n$-cycle, as it must be for the sign character.

- **What fails for non-hooks.** The value vanishes precisely when $\lambda$ contains a $2\times2$ block, equivalently when $\lambda_2\ge2$; a hook with $x\ge2$ and $n-x\ge1$ such as $(2,1)$ has several rows and columns and still has a nonzero value, so the vanishing criterion is the $2\times2$ block and not the plain row-and-column count. This is the sign fact behind the Murnaghan–Nakayama rule: the first hook removal in [[thm-murnaghan-nakayama-character-rule]] carries the sign $(-1)^{\operatorname{ht}}$.

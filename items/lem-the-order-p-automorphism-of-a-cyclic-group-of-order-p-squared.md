---
id: lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared
kind: lemma
title: "Raising to the power $1+p$ is an automorphism of order $p$ of a cyclic group of order $p^2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-automorphisms-of-a-finite-cyclic-group, thm-integers-modulo-n-basic-algebra, def-order-in-a-group, thm-classification-of-cyclic-groups, def-prime, def-group-isomorphism-and-automorphism, def-group-power]
aliases: []
landmark: false
proof_strategy: induction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Definition 3.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime. In $\mathbb Z/p^2$ the class of $1+p$ is a unit of
multiplicative order $p$, and $(1+p)^{k}=1+kp$ for every $k\in\mathbb N$.
Consequently, if $A$ is a cyclic group of order $p^2$, the map $x\mapsto x^{1+p}$
is an automorphism of $A$ of order $p$
([[def-group-isomorphism-and-automorphism]]).

## Facts & Assumptions

**Given:** A prime $p$, the ring $\mathbb Z/p^2$, and a cyclic group $A$ of order $p^2$.

[F1] For every $n\in\mathbb N$, $(\mathbb Z/n,+,[0]_n)$ is an abelian group, $(\mathbb Z/n,\cdot,[1]_n)$ is a commutative monoid, and multiplication distributes over addition on both sides ([[thm-integers-modulo-n-basic-algebra]]).

[F2] $\operatorname{ord}(g):=\min\{k\in\mathbb N:k\ge1\text{ and }g^{k}=e\}$ when that set is nonempty ([[def-order-in-a-group]]).

[F3] $p$ is prime when $p>1$ and its only positive divisors are $1$ and $p$ ([[def-prime]]).

[L1] $\operatorname{Aut}(C_n)\cong(\mathbb Z/n)^\times$, and if $C_n=\langle g\rangle$ the unit class $[a]$ corresponds to the automorphism $g\mapsto g^{a}$ ([[thm-automorphisms-of-a-finite-cyclic-group]]).

[L2] A cyclic group with a generator of finite order $n$ is isomorphic to $(\mathbb Z/n,+)$ ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** induction.

1.1 At $k=0$ the claim reads $(1+p)^{0}=1=1+0\cdot p$ in $\mathbb Z/p^2$. [F1, base]

1.2 Assume $(1+p)^{k}=1+kp$ in $\mathbb Z/p^2$ for a given $k\in\mathbb N$. [ih]

1.3 In $\mathbb Z/p^2$ the class of $p^2$ is zero, so $kp=0$ holds exactly when $p^2$ divides $kp$, that is exactly when $p$ divides $k$. [F1, F3, algebra]

1.4 An automorphism of a cyclic group of order $p^2$ is $x\mapsto x^{a}$ for a unit class $[a]$ of $\mathbb Z/p^2$, and this correspondence is an isomorphism of groups, so it preserves orders. [L1, L2]

2.1 Then $(1+p)^{k+1}=(1+kp)(1+p)=1+(k+1)p+kp^{2}=1+(k+1)p$, the last equality because $p^{2}=0$ in $\mathbb Z/p^2$. [F1, step 1.2, algebra]

3.1 Hence $(1+p)^{k}=1+kp$ for every $k\in\mathbb N$; by step 1.3 this equals $1$ exactly when $p$ divides $k$, so the least positive such $k$ is $p$ and the class of $1+p$ is a unit of order $p$. Under the correspondence of step 1.4 it is the automorphism $x\mapsto x^{1+p}$, which therefore has order $p$. [F2, step 1.3, step 1.4, step 2.1, discharge-induction] ∎

## Remarks

The computation holds at $p=2$ as well: there $1+p=3$ and $3^{2}=9=1$ in $\mathbb Z/4$, so the automorphism $x\mapsto x^{3}=x^{-1}$ of a cyclic group of order four is inversion and has order two.

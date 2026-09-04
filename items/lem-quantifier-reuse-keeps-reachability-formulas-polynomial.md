---
id: lem-quantifier-reuse-keeps-reachability-formulas-polynomial
kind: lemma
title: "Quantifier reuse keeps the reachability formulas polynomial in size"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-reachable-configuration-formula]
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Fix the configuration length $m$ and assume that the one-step predicate
$\operatorname{Next}(U,V)$ from [[def-reachable-configuration-formula]] has
size $O(m)$. Then there is a constant $c>0$ such that the formula
$\Theta_i(U,V)$ has size at most $cm(i+1)$ for every $i\in\mathbb N$. In
particular, if $m$ itself is polynomial in the input length and $i=O(m)$, then
$\Theta_i$ has polynomial size.

## Facts & Assumptions

**Given:** the recursive formulas $\Theta_i(U,V)$ for a fixed bit-length $m$, with $\operatorname{Next}(U,V)$ of size $O(m)$.

[L1] By definition, $\Theta_0(U,V)=\operatorname{Eq}_m(U,V)\vee \operatorname{Next}(U,V)$, where both summands have size $O(m)$, while $\Theta_i$ for $i\ge 1$ adds one midpoint block, one selector bit, two comparison blocks, and a single recursive copy of $\Theta_{i-1}$ ([[def-reachable-configuration-formula]]).

## Proof

**Proof technique:** induction.

1.1 By [L1], the base formula $\Theta_0(U,V)$ has size $O(m)$. [L1, base]

1.2 For $i\ge 1$, [L1] shows that $\Theta_i$ contains exactly one copy of $\Theta_{i-1}$ plus only $O(m)$ new symbols coming from the variables $W,b,Y,Z$, the two equality tests, and the Boolean guards for $b=0$ and $b=1$. So if $s_i$ denotes the size of $\Theta_i$, then $s_i\le s_{i-1}+c m$ for some constant $c$. [L1, ih, algebra]

2.1 Starting from the $O(m)$ base bound in step 1.1 and iterating the recurrence from step 1.2 gives $s_i\le cm(i+1)$ for a suitable constant $c$. If $m$ is polynomial in the input length and $i=O(m)$, this bound is polynomial. [step 1.1, step 1.2, discharge-induction] ∎

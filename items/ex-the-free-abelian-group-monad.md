---
id: ex-the-free-abelian-group-monad
kind: example
title: "The free-abelian-group monad sends a set to its finite formal integer combinations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-the-free-module-monad-and-its-algebras-are-modules, thm-int-comm-ring, def-left-and-right-modules, def-group, def-free-module-on-a-set-and-standard-basis, def-free-abelian-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Example 5.1.4(iii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

Specialising the free-module monad to $R=\mathbb Z$ gives the free-abelian-group monad

$$T(X)=\mathbb Z^{(X)},$$

the set of finitely supported integer combinations of elements of $X$. Its algebras are abelian groups.

## Facts & Assumptions

**Given:** The ring of integers $\mathbb Z$.

[L1] The integers form a commutative unital ring ([[thm-int-comm-ring]]).

[L2] The free module on $X$ consists of finitely supported formal linear combinations of its standard basis ([[def-free-module-on-a-set-and-standard-basis]]).

[L3] For a unital ring, algebras of the free-module monad are left modules ([[thm-the-free-module-monad-and-its-algebras-are-modules]]).

[L4] The free abelian group on $X$ has the same finite formal integer-combination description ([[def-free-abelian-group]]).

## Verification

**Proof technique:** direct.

1.1 By [L1]–[L4], the free-$\mathbb Z$-module on $X$ is $\mathbb Z^{(X)}$. For a function $u:X\to A$ into an abelian group, the unique extension sends $\sum_x n_x[x]$ to $\sum_x n_xu(x)$, so this is also exactly the universal property of the free abelian group on $X$. [L1, L2, L3, L4]

2.1 Its unit is $x\mapsto1[x]$. Its multiplication flattens $\sum_i n_i[\sum_j m_{ij}[x_{ij}]]$ to $\sum_{i,j}n_im_{ij}[x_{ij}]$. [L2, L3, step 1.1]

3.1 Every $\mathbb Z$-module is an abelian group under addition. Conversely, on an abelian group define $n\cdot x$ by repeated addition for positive $n$, by $0$ for $n=0$, and by negatives for negative $n$; the abelian-group laws give the module laws, and group homomorphisms are exactly the resulting $\mathbb Z$-linear maps. Hence the algebras are precisely abelian groups. [L1, L3, step 1.1, step 2.1] ∎

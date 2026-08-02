---
id: ex-ideals-as-submodules-of-the-regular-module
kind: example
title: "Left ideals are exactly the submodules of the regular left module $_RR$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-modules, def-submodule,
       def-left-right-and-two-sided-ideal, def-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Example

Let $R$ be a ring. On its additive group define the left scalar action
$r\cdot x:=rx$, using multiplication in $R$. This makes $R$ the **regular left
module**, written $_RR$. A subset $I\subseteq R$ is a submodule of $_RR$ if and
only if $I$ is a left ideal of $R$.

## Facts & Assumptions

**Given:** A ring $R$ and its underlying additive group.

[L1] A left module is an abelian group with a unital scalar action satisfying
the two distributive laws and associativity of scalar multiplication
([[def-left-and-right-modules]]).

[L2] A subset is a submodule exactly when it is an additive subgroup and is
closed under multiplication by every scalar ([[def-submodule]]).

[L3] A left ideal is an additive subgroup $I$ such that $ri\in I$ for all
$r\in R$ and $i\in I$ ([[def-left-right-and-two-sided-ideal]]).

[L4] In a ring, addition is an abelian-group operation, multiplication is
associative and unital, and multiplication distributes over addition on both
sides ([[def-ring]]).

## Proof

**Proof technique:** direct.

1.1 The additive group of $R$ is abelian. For $r,s,x,y\in R$, the ring laws give $r(x+y)=rx+ry$, $(r+s)x=rx+sx$, $(rs)x=r(sx)$, and $1_Rx=x$. Thus $r\cdot x:=rx$ makes $R$ a left $R$-module. [L1, L4, given]

2.1 If $I$ is a left ideal, then it is an additive subgroup and $ri\in I$ for all $r\in R$, $i\in I$. Hence it is a submodule of $_RR$. [step 1.1, L2, L3]

2.2 Conversely, if $I$ is a submodule of $_RR$, then it is an additive subgroup and is closed under the scalar action, which here says exactly that $ri\in I$ for all $r\in R$, $i\in I$. Hence $I$ is a left ideal. [step 1.1, L2, L3]

3.1 Steps 2.1 and 2.2 prove the claimed equivalence. [step 2.1, step 2.2] ∎

## Remarks

- With the right regular module $R_R$, the same argument identifies its
  submodules with the right ideals. Two-sided ideals are precisely the subsets
  that are submodules in both regular-module structures.

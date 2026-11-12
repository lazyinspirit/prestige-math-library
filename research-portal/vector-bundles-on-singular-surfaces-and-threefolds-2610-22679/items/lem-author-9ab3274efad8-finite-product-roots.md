---
id: lem-author-9ab3274efad8-finite-product-roots
kind: lemma
title: Roots in a finite product of groups
status: published
domain: mathematics
deps:
  - math:def-group
  - math:thm-induction-principle
dependency_roles:
  math:def-group: mathematical-premise
  math:thm-induction-principle: mathematical-premise
formulation_deps:
  - math:def-group
argument_deps:
  - math:def-group
  - math:thm-induction-principle
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement
Let $A_1,\ldots,A_r$ be finitely many abelian groups, with $r\geq 0$, and let $n$ be a positive integer. If multiplication by $n$ is surjective on each $A_i$, then it is surjective on their product $P$. The empty product is the zero group.

Here $P$ consists of the tuples $(a_i)_{1\leq i\leq r}$ with $a_i\in A_i$. Its addition is $(a_i)+(b_i)=(a_i+b_i)$, its zero is $(0_{A_i})$, and its inverse operation is $-(a_i)=(-a_i)$. For $r=0$ there is exactly one tuple, the empty tuple. For an element $a$ of any of these groups, $na$ denotes the sum of $n$ copies of $a$. Surjectivity means that every target element has a preimage.

## Statement references

[[math:def-group]]

## Facts & Assumptions

[F1] An abelian group has an associative and commutative operation, an identity, and inverses; we use additive notation ([[math:def-group]]).

[F2] Mathematical induction in property form: a property that holds at $0$ and passes from each natural number to its successor holds for all natural numbers ([[math:thm-induction-principle]]). To start at $1$, apply this to the property at $m+1$ for $m\geq 0$.

**Given:** The abelian groups $A_1,\ldots,A_r$, the positive integer $n$, and surjectivity of multiplication by $n$ on every $A_i$.

**Goal:** Prove that multiplication by $n$ is surjective on the product $P$ defined above, including when $r=0$.

## Proof

1.1 The coordinatewise operation is closed on $P$. For tuples $a,b,c$, the equality $(a_i+b_i)+c_i=a_i+(b_i+c_i)$ in each $A_i$ gives associativity; likewise $a_i+b_i=b_i+a_i$ gives commutativity. The equalities $a_i+0_{A_i}=a_i=0_{A_i}+a_i$ and $a_i+(-a_i)=0_{A_i}=(-a_i)+a_i$ give the specified identity and inverses. Thus $P$ is an abelian group. These checks also hold for the single empty tuple when $r=0$. Induction on the number of summands, using [F2] starting at $1$, gives $n(x_i)=(nx_i)$: one summand is immediate, and adding $(x_i)$ adds $x_i$ in every coordinate. [F1, F2, given, algebra]

2.1 Given a target tuple $(a_i)\in P$, choose its preimages successively: for $j=1,\ldots,r$, extend the already chosen finite tuple by an $x_j\in A_j$ satisfying $nx_j=a_j$, which exists by the given surjectivity on $A_j$. Starting with the empty tuple, finite induction using [F2] yields $(x_i)\in P$; this is finite choice and requires no Axiom of Choice. If $r=0$, take the unique empty tuple. The coordinate formula from step 1.1 gives $n(x_i)=(nx_i)=(a_i)$, including the empty case. Hence every product element has a preimage, as required. [F1, F2, given, choose, step 1.1, algebra] ∎

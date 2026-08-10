---
id: thm-finite-abelian-groups-decompose-into-indecomposable-subgroups
kind: theorem
title: "Every nontrivial finite abelian group is an internal direct product of indecomposable subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-indecomposable-finite-abelian-group, thm-strong-induction, thm-internal-direct-product-recognition, thm-lagrange]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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

Every nontrivial finite abelian group is an internal direct product of finitely many indecomposable subgroups.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] A nontrivial finite abelian group is **indecomposable** if it is not an internal direct product of two nontrivial subgroups in the sense of def-internal-direct-product-of-subgroups. It is **decomposable** if such a product exists. The trivial group is assigned neither label. ([[def-indecomposable-finite-abelian-group]]).

[L2] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.) ([[thm-strong-induction]]).

[L3] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L4] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** induction.

1.1 For strong induction on $|G|$, the order-one case is vacuous because the only group of that order is trivial. [base, given, L1, L2, L3, L4]

2.1 Fix a nontrivial $G$ and assume the result for every nontrivial finite abelian group of smaller order. If $G$ is indecomposable, the one-factor product is the required decomposition. [ih, step 1.1]

3.1 If $G$ is decomposable, write $G=B\oplus C$ with $B$ and $C$ nontrivial. Lagrange gives $|B|,|C|<|G|$, so the induction hypothesis decomposes each into indecomposable factors. [step 2.1]

4.1 Unique factorisation in $B\oplus C$ and in the two inductive products combines to unique factorisation by all the smaller factors; internal-product recognition completes the induction. [step 3.1, discharge-induction] ∎

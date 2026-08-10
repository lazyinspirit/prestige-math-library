---
id: ex-complements-of-a-maximal-cyclic-subgroup-need-not-be-unique
kind: example
title: "Complements of a maximal cyclic subgroup in C_p times C_p need not be unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group, def-internal-direct-product-of-subgroups, thm-internal-direct-product-recognition, prop-integers-modulo-n-as-a-quotient-group]
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
## Example

In $C_p\times C_p$, fix $A=C_p\times\{0\}$. For every $t\in C_p$, the subgroup $$B_t=\{(tx,x):x\in C_p\}$$ is a complement of $A$, and distinct $t$ give distinct complements.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Let $G$ be a finite abelian $p$-group and let $a\in G$ have maximal element order. Then there is a subgroup $H\le G$ such that $$G=\langle a\rangle\oplus H.$$ ([[thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group]]).

[L2] Let $G$ be a group and let $N_0,\ldots,N_{r-1}$ be normal subgroups, where $r\in\mathbb N$. They form an **internal direct product** when they generate $G$ and, for each $i<r$, $$N_i\cap\langle N_j:j<r,\ j\ne i\rangle=\{e\}.$$ The empty family is an internal direct product of the trivial group. For two subgroups of an abelian group this says $G=HK$ and $H\cap K=\{e\}$; in additive notation one writes $G=H\oplus K$. Normal subgroups and generated subgroups are those of def-normal-subgroup and def-generated-subgroup, and the comparison product is def-external-direct-product-of-groups. ([[def-internal-direct-product-of-subgroups]]).

[L3] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L4] For every $n\in\mathbb N$, view $n$ as its canonical nonnegative integer and put $n\mathbb Z:=\{nk:k\in\mathbb Z\}$. Then the left cosets of $n\mathbb Z$ in $(\mathbb Z,+)$ are exactly the congruence classes modulo $n$, and coset addition is the published addition of congruence classes. Thus $$(\mathbb Z,+)/n\mathbb Z=(\mathbb Z/n,+)$$ as the same group on the same underlying set. This includes $n=0$ and $n=1$. ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Verification

**Proof technique:** direct.

1.1 Each $B_t$ is an order-$p$ subgroup, and $A\cap B_t=\{(0,0)\}$ because $(tx,x)\in A$ forces $x=0$. [given, L1, L2, L3, L4]

2.1 For $(u,v)\in C_p^2$, one has $(u,v)=(u-tv,0)+(tv,v)$ with the summands in $A$ and $B_t$, so $A+B_t=G$. [step 1.1]

3.1 Internal-product recognition gives $G=A\oplus B_t$. Since $(t,1)\in B_t$ distinguishes the slope, the complement promised by the splitting theorem need not be unique. [step 2.1] ∎

---
id: cor-order-and-exponent-from-invariant-factors
kind: corollary
title: "Invariant factors determine the order and exponent of a finite abelian group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, def-exponent-of-a-finite-group, prop-order-of-finite-direct-product, thm-order-of-element-in-direct-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
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

If $G\cong C_{n_1}\times\cdots\times C_{n_r}$ with $1<n_1\mid\cdots\mid n_r$, then $|G|=n_1\cdots n_r$ and $\exp(G)=n_r$. For the empty list, $|G|=\exp(G)=1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] For every finite abelian group $G$ there is a unique list $$1<n_1\mid\cdots\mid n_r$$ such that $G\cong C_{n_1}\times\cdots\times C_{n_r}$. Moreover $|G|=n_1\cdots n_r$. The trivial group corresponds to the empty list and empty product. ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

[L2] For a finite group $G$, its **exponent** is $$\exp(G)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in G\}.$$ The set is nonempty by cor-g-to-the-group-order-is-identity, and thm-well-ordering-principle gives its least member; powers use def-group-power. Thus the definition is well-defined. For the trivial group $\exp(G)=1$. ([[def-exponent-of-a-finite-group]]).

[L3] If $G$ and $H$ are finite groups, then their external direct product is finite and has order $|G\times H|=|G|\,|H|$. ([[prop-order-of-finite-direct-product]]).

[L4] Let $\iota:\mathbb N\to\mathbb Z$ be the canonical embedding. If $g\in G$ and $h\in H$ have finite orders $m,n\ge1$, then in the external direct product $$\operatorname{ord}(g,h)=\operatorname{lcm}(m,n).$$ ([[thm-order-of-element-in-direct-product]]).

## Proof

**Proof technique:** direct.

1.1 The finite-product order formula gives $|G|=\prod_i n_i$, including the empty product. [given, L1, L2, L3, L4]

2.1 The order of an element of the product is the least common multiple of its component orders. Because $n_i\mid n_r$, every element order divides $n_r$, while an element generating the last factor has order $n_r$. [step 1.1]

3.1 The least common annihilating exponent is therefore $n_r$ when the list is nonempty, and is $1$ for the trivial group. [step 2.1] ∎

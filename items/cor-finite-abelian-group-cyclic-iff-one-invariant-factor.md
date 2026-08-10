---
id: cor-finite-abelian-group-cyclic-iff-one-invariant-factor
kind: corollary
title: "A nontrivial finite abelian group is cyclic if and only if it has one invariant factor"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form, cor-order-and-exponent-from-invariant-factors, thm-classification-of-cyclic-groups]
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
## Statement

A nontrivial finite abelian group is cyclic if and only if its invariant-factor list has exactly one entry.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] For every finite abelian group $G$ there is a unique list $$1<n_1\mid\cdots\mid n_r$$ such that $G\cong C_{n_1}\times\cdots\times C_{n_r}$. Moreover $|G|=n_1\cdots n_r$. The trivial group corresponds to the empty list and empty product. ([[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

[L2] If $G\cong C_{n_1}\times\cdots\times C_{n_r}$ with $1<n_1\mid\cdots\mid n_r$, then $|G|=n_1\cdots n_r$ and $\exp(G)=n_r$. For the empty list, $|G|=\exp(G)=1$. ([[cor-order-and-exponent-from-invariant-factors]]).

[L3] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: - if $g$ has infinite order, $G\cong(\mathbb Z,+)$; - if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$. ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** direct.

1.1 A one-entry invariant-factor decomposition is an isomorphism with one cyclic group, so $G$ is cyclic. [given, L1, L2, L3]

2.1 Conversely a nontrivial finite cyclic group is isomorphic to $C_{|G|}$, giving the one-entry list; uniqueness of invariant factors rules out any different list. [step 1.1] ∎

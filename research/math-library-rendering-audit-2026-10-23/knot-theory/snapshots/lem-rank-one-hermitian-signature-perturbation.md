---
id: lem-rank-one-hermitian-signature-perturbation
kind: lemma
title: A rank-one Hermitian perturbation changes signature by at most two
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, Exercise 2.3.2(a), printed pp. 21–22"
---

## Statement

Let $A$ and $B$ be Hermitian forms on the same finite-dimensional complex vector space, and suppose that the linear map representing $A-B$ has rank at most one. Then $|\operatorname{sign}(A)-\operatorname{sign}(B)|\le 2$, where the signature is the number of positive eigenvalues minus the number of negative eigenvalues, with multiplicity and with zero eigenvalues omitted.

## Statement references

[Signature and codimension-one restriction](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** Hermitian forms $A$ and $B$ on the same finite-dimensional complex vector space, with $\operatorname{rank}(A-B)\le 1$.

[F1] For a Hermitian form $Q$, its positive index $n_+(Q)$ is the largest dimension of a subspace on which $Q(v,v)>0$ for every nonzero $v$; its negative index $n_-(Q)$ is defined using $Q(v,v)<0$. Its signature is $n_+(Q)-n_-(Q)$.

## Proof

1.1 Let $W=\ker(A-B)$. Rank-nullity and the rank hypothesis give $\operatorname{codim}W\le1$. If $P$ is a positive subspace for $A$ of dimension $n_+(A)$, then $\dim(P\cap W)\ge n_+(A)-1$. On $P\cap W$ the forms agree, so this intersection is positive for $B$. Thus $n_+(B)\ge n_+(A)-1$. Interchanging $A$ and $B$ proves $|n_+(A)-n_+(B)|\le1$. [given, F1, algebra]

2.1 Apply the same argument to $-A$ and $-B$ to obtain $|n_-(A)-n_-(B)|\le1$. Therefore $|\operatorname{sign}(A)-\operatorname{sign}(B)|\le |n_+(A)-n_+(B)|+|n_-(A)-n_-(B)|\le2$. [F1, step 1.1, algebra] ∎


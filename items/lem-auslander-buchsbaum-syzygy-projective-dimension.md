---
id: "lem-auslander-buchsbaum-syzygy-projective-dimension"
kind: "lemma"
title: "auslander buchsbaum syzygy projective dimension"
deps: ["def-projective-dimension-of-an-object", "thm-schanuel-lemma-in-an-abelian-category", "thm-finitely-generated-modules-over-noetherian-rings-are-noetherian", "def-noetherian-module"]
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Theorem 12.31 proof, Case 3, p.122"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Let $0\to K\to F_0\to M\to0$ be the initial minimal presentation of a nonzero finite module over a nonzero Noetherian local ring. If $0<n=\operatorname{pd}M<\infty$, then $K\ne0$ and $\operatorname{pd}K=n-1$.

## Facts & Assumptions

**Given:** The initial minimal presentation in the Statement, with $F_0$ finite free and $0<n=\operatorname{pd}_R M<\infty$.

[F1] Finite projective dimension $n$ supplies a projective resolution of length $n$ ([[def-projective-dimension-of-an-object]]).

[F2] For two projective presentations of the same module, their kernels satisfy $K\oplus P'\cong K'\oplus P$ ([[thm-schanuel-lemma-in-an-abelian-category]]).

[F3] Finite modules over a Noetherian ring are Noetherian, so their submodules are finitely generated ([[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]], [[def-noetherian-module]]).

## Proof

1.1 If $K=0$, the given presentation identifies $M$ with the free module $F_0$, contradicting $n>0$. Thus $K\ne0$. Fix a length-$n$ projective resolution of $M$ supplied by [F1]. Starting with the given $F_0\to M$, form its first $n$ projective presentations by taking finite free surjections onto the successive kernels. Each kernel is finite by [F3]. Only finitely many choices are made, so no axiom of choice is needed. Write $K_n$ for the final kernel; when $n=1$ it is $K$. [F1, F3, given, choose, algebra]

2.1 Compare these $n$ presentations with the fixed length-$n$ resolution using [F2]. At the first stage the two kernels become isomorphic after adding the other presentation's projective term. Present these stabilized kernels at the next stage by adding identity presentations on those projective summands, and apply [F2] again. Induction through the finite $n$ stages gives $K_n\oplus A\cong P_n\oplus B$, where $P_n$ is the terminal projective of the length-$n$ resolution and $A,B$ are finite direct sums of its projective terms and the constructed finite free terms. Hence $K_n$ is a direct summand of a projective module and is projective. Truncating the constructed sequence therefore gives a length-$(n-1)$ projective resolution of $K$. Thus $\operatorname{pd}_R K\le n-1$. [F2, step 1.1, algebra]

3.1 If $n\ge2$ and $\operatorname{pd}_R K\le n-2$, splicing such a shorter resolution with $0\to K\to F_0\to M\to0$ gives a resolution of $M$ of length at most $n-1$, contradicting [F1] and $\operatorname{pd}_R M=n$. For $n=1$, step 2.1 already makes $K$ projective, so its projective dimension is zero. In every case $K\ne0$ and $\operatorname{pd}_R K=n-1$. [F1, step 1.1, step 2.1, algebra] ∎

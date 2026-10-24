---
id: cex-isomorphic-inclusion-need-not-be-elementary
kind: counterexample
title: "Isomorphism does not make an inclusion elementary"
status: published
origin: pipeline
deps: [def-elementary-set-structure-embedding, thm-set-structure-satisfaction-recursion, lem-nat-nonzero-is-successor, lem-nat-order-add-compatible, lem-nat-trichotomy]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Example 7, printed p.16; shift and failed formula computed."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

The structures $\mathcal M=(\omega,<)$ and $\mathcal A=(\omega\setminus\{0\},<)$ in the language with one binary relation symbol are isomorphic, but the inclusion $A\hookrightarrow M$ is not elementary.

## Facts & Assumptions

**Given:** Work in ZF with the usual strict order of the natural numbers, beginning at zero.

[F1] An elementary embedding preserves and reflects every formula on tuples; a relational substructure has a nonempty subset as carrier and restricted relations. ([[def-elementary-set-structure-embedding]])

[F2] Existential satisfaction means that an element of the structure's carrier satisfies the matrix. ([[thm-set-structure-satisfaction-recursion]])

[F3] Every nonzero natural is a successor. ([[lem-nat-nonzero-is-successor]])

[F4] For natural m,n,k, m<n iff m+k<n+k, and m<=n iff m+k<=n+k. ([[lem-nat-order-add-compatible]])

[F5] Exactly one of m<n, m=n, n<m holds for natural m,n. ([[lem-nat-trichotomy]])

## Proof

1.1 The positive tail is nonempty since $1\in A$, and restricting $<$ to $A^2$ makes it a substructure: there are no constant or function symbols requiring further closure. Define $f:\omega\to A$ by $f(n)=n+1$. Each positive natural is uniquely a successor, so $g:A\to\omega$ defined by $g(n+1)=n$ satisfies $g(f(n))=n$ and $f(g(m))=m$. Also $n<k$ iff $n+1<k+1$: adding one preserves strict natural-number order, and if $n\ge k$ then $n+1\ge k+1$. Hence $f$ is a bijection preserving and reflecting the sole relation and is an isomorphism. In particular $f(0)=1$; it is different from inclusion. [F1, F3, F4, F5]

2.1 At the parameter $1\in A$, the formula $\exists y(y<x)$ holds in $\mathcal M$ because $0<1$. It fails in $\mathcal A$: every $y\in A$ is a positive natural, so $1\le y$ and $y<1$ is false. Thus inclusion fails to preserve and reflect this formula's truth and is not elementary, despite the isomorphism constructed in step 1.1. [F1, F2, step 1.1] ∎

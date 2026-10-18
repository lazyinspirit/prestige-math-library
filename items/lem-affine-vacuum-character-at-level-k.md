---
id: lem-affine-vacuum-character-at-level-k
kind: lemma
title: The affine vacuum character exists at every complex level
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-untwisted-affine-central-extension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §3.1
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
---

## Statement

Let $\mathfrak g$ be finite-dimensional complex simple, let $\overline{L\mathfrak g}$ be the central extension of [[def-untwisted-affine-central-extension]], write $K=c$ for its central basis vector, and let $k\in\mathbb C$. The subspace $\mathfrak p=\mathfrak g[t]\oplus\mathbb CK$ is a Lie subalgebra, and the assignment $\mathfrak g[t]\ni x\otimes t^n\mapsto0$, $K\mapsto k$ defines a one-dimensional representation $\mathbb C_k$ of $\mathfrak p$.

## Facts & Assumptions

**Given:** The finite-dimensional complex simple Lie algebra, its normalized form, the loop central extension, and $k\in\mathbb C$.

[F1] [[def-untwisted-affine-central-extension]]: $[x_m,y_n]=[x,y]_{m+n}+m\delta_{m,-n}B(x,y)K$, and $K$ is central.

## Proof

1.1 For $m,n\ge0$, the loop term $[x,y]_{m+n}$ belongs to $\mathfrak g[t]$. The central term in [F1] can be nonzero only if $m+n=0$, which for nonnegative $m,n$ forces $m=n=0$ and hence its coefficient $m$ is zero. Thus $\mathfrak g[t]$ is closed under brackets in the central extension, and $K$ commutes with it. Bilinearity extends this to all finite sums in $\mathfrak p$. [F1, algebra]

2.1 The proposed scalar action sends every bracket in $\mathfrak g[t]$ to zero, agrees with the zero bracket between $K$ and $\mathfrak g[t]$, and sends $[K,K]=0$ to zero. Hence it is a Lie-algebra representation on the one-dimensional space $\mathbb C_k$; the scalar $k$ is unrestricted. [step 1.1, F1, algebra] ∎

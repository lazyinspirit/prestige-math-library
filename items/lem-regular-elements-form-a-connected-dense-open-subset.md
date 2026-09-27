---
id: lem-regular-elements-form-a-connected-dense-open-subset
kind: lemma
title: "Regular elements form a connected dense open subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Statement

In a complex semisimple Lie algebra $\mathfrak g$, the set of regular elements is a connected dense Zariski-open subset of $\mathfrak g$.

## Facts & Assumptions

**Given:** A complex semisimple Lie algebra $\mathfrak g$ of dimension $n$ and rank $r$.

## Proof

**Proof technique:** direct.

1.1 By [[def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra]], $r$ is the minimum of the dimensions of the centralizers of elements of $\mathfrak g$. These dimensions belong to the finite set $\{0,\ldots,n\}$, and $\mathfrak g$ is nonempty, so the minimum is attained. Thus at least one regular element exists. [given, algebra]

2.1 In a fixed basis, the matrix entries of $\operatorname{ad}_x$ depend linearly on $x$. Rank-nullity gives $\dim C_{\mathfrak g}(x)=n-\operatorname{rank}(\operatorname{ad}_x)$. Hence regularity is the condition that the rank equals its attained maximum $n-r$. For $n-r>0$, the nonregular locus is the common zero set of the $(n-r)\times(n-r)$ minors. If $n-r=0$, every element is regular. In either case the regular locus is a nonempty Zariski-open set. A nonzero minor at a regular point remains nonzero on a Euclidean neighborhood; a polynomial vanishing on the regular locus therefore vanishes identically. Thus the regular locus is Zariski dense. [step 1.1, algebra]

3.1 Let $x,y$ be regular. On the complex affine line through them, choose a maximal minor nonzero at $x$ (when $n-r=0$, the whole space is regular). Its restriction is a nonzero one-variable polynomial, so the nonregular points on that line form a finite set. A complex line with finitely many points removed is path connected, giving a path of regular elements from $x$ to $y$. The zero-dimensional case is a singleton. Thus the regular locus is connected. [step 2.1, algebra] ∎

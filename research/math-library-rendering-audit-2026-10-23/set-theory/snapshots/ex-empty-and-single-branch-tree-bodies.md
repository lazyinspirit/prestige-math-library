---
id: ex-empty-and-single-branch-tree-bodies
kind: example
title: "Empty and single-branch tree codes"
status: published
origin: pipeline
deps: ["def-trees-and-bodies-on-discrete-alphabets"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Application of Lemma 1.14(ii)"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Example

In ZF, the empty tree has empty body. For each $x\in\mathbb N^{\mathbb N}$ the prefix tree $T_x=\{x\upharpoonright n:n\in\mathbb N\}$ has body $\{x\}$. In particular, for $z(n)=0$, the tree $\{\varnothing,(0),(0,0),\ldots\}$ has body exactly the constant-zero sequence. These bodies are closed in the cylinder topology.

## Facts & Assumptions

[F1] A branch has every finite prefix in its tree, including the empty prefix; see [[def-trees-and-bodies-on-discrete-alphabets]].

## Verification

**Given:** $x\in\mathbb N^{\mathbb N}$, $T_x$ as above, and the empty tree.

1.1 Every putative branch of $\varnothing$ would have to satisfy $y\upharpoonright0=\varnothing\in\varnothing$, which is false. Hence $[\varnothing]=\varnothing$, a closed set. [F1]

1.2 Restricting $x\upharpoonright n$ to $m\leq n$ gives $x\upharpoonright m\in T_x$, so $T_x$ is a tree. The point $x$ lies in its body. If $y\in[T_x]$, its prefix of length $k+1$ equals the unique member $x\upharpoonright(k+1)$ of $T_x$ of that length. Consequently $y(k)=x(k)$ for every $k$, giving $[T_x]=\{x\}$. [F1, given]

2.1 For $z(n)=0$, step 1.2 gives $y(k)=0$ at every coordinate, the claimed concrete calculation. If $y\ne x$, choose one differing coordinate $k$; its cylinder of length $k+1$ excludes $x$. Thus the complement of $\{x\}$ is open, establishing the closedness assertion. QED. [step 1.2]

---
id: fs-blockade-order-never-matters-for-x-sparsity
kind: false-statement
title: "FALSE: reversing the order of the blocks never changes $x$-sparsity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-anticomplete-pure-and-x-sparse-blockades]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, §2"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Statement

**False claim:** the order of the blocks is irrelevant for the property of being
$x$-sparse.

## Facts & Assumptions

**Given:** Two blocks $X=\{u\}$ and $Y=\{y_1,y_2\}$ with the single edge $uy_1$ and with $c=\tfrac12$ as the sparsity parameter.

[L1] An ordered blockade $(B_1,B_2)$ is $c$-sparse exactly when the later block $B_2$ is $c$-sparse to the earlier block $B_1$ ([[def-complete-anticomplete-pure-and-x-sparse-blockades]]).

## Proof

**Proof technique:** direct.

1.1 The one-vertex block $X$ is $c$-sparse to $Y$, because $u$ has one neighbor in $Y$ and $1\leq c|Y|=\tfrac12\cdot2=1$. By [L1], the ordered blockade $(Y,X)$ is therefore $c$-sparse. [given, L1, algebra]

1.2 The block $Y$ is not $c$-sparse to $X$, because the vertex $y_1$ has one neighbor in $X$ but $1>c|X|=\tfrac12$. By [L1], the reversed blockade $(X,Y)$ is therefore not $c$-sparse. [given, L1, algebra]

2.1 Therefore reversing the order can change $x$-sparsity, so the claim is false. [step 1.1, step 1.2] ∎

---
id: cex-weak-sparsity-does-not-imply-directional-sparsity
kind: counterexample
title: "Weak sparsity of a pair does not force directional sparsity"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-directional-and-weak-sparsity-between-vertex-sets]
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

## Statement refuted

**Refuted claim:** if a pair $(X,Y)$ is weakly $c$-sparse, then $X$ is
$c$-sparse to $Y$.

## Facts & Assumptions

**Given:** $X=\{x_1,x_2\}$, $Y=\{y_1,y_2\}$, $c=\tfrac12$, and the edges
$x_1y_1,x_1y_2$ only.

## Counterexample

**Proof technique:** direct.

1.1 The ordered cross-edge count is $e(X,Y)=2$, so $e(X,Y)=2\leq \tfrac12|X||Y|=\tfrac12\cdot2\cdot2=2$. Thus $(X,Y)$ is weakly $\tfrac12$-sparse. [given, algebra]

1.2 But $x_1$ has two neighbors in $Y$, and $2>\tfrac12|Y|=\tfrac12\cdot2=1$. So $X$ is not $\tfrac12$-sparse to $Y$. [given, algebra]

2.1 Therefore weak sparsity does not imply directional sparsity. [step 1.1, step 1.2] ∎

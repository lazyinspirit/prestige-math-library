---
id: ex-translated-tent-functions-converge-in-the-compact-open-topology
kind: example
title: 'Translated tent functions on $\mathbb R$ converge to zero in the compact-open topology'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-compact-open-topology-for-topological-domains, prop-general-compact-open-topology-agrees-with-the-metric-definition, thm-compact-open-equals-compact-convergence, thm-heine-borel-rn, thm-of-archimedean, def-topology-of-uniform-convergence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "The Ascoli–Arzelà Theorem, BBT"
      url: "https://assets.pubpub.org/6d1dqgg9/51597355090422.pdf"
pipeline_run: null
---

## Example

For $k\in\mathbb N$, define

$$f_k(x):=\max\{1-|x-k|,0\}\qquad(x\in\mathbb R).$$

Then each $f_k$ is continuous and $1$-Lipschitz, and $f_k\to0$ in the compact-open topology on $C(\mathbb R,\mathbb R)$, but the sequence does not converge uniformly on $\mathbb R$.

## Facts & Assumptions

**Given:** The translated tent functions $(f_k)$ on the real line.

[L1] The general and published metric-domain compact-open topologies agree ([[prop-general-compact-open-topology-agrees-with-the-metric-definition]]).

[L2] For metric domain and target, compact-open convergence is compact convergence ([[thm-compact-open-equals-compact-convergence]]).

[L3] Every compact subset of $\mathbb R$ is bounded ([[thm-heine-borel-rn]]).

[L4] The Archimedean property provides a natural number larger than any prescribed real ([[thm-of-archimedean]]).

[L5] Uniform convergence requires one tail index to work at every point of the domain ([[def-topology-of-uniform-convergence]]).

[L6] General compact-open subbasic conditions test images of compact sets ([[def-compact-open-topology-for-topological-domains]]).

## Verification

**Proof technique:** direct.

1.1 The map $x\mapsto1-|x-k|$ is $1$-Lipschitz, and taking the maximum with $0$ preserves that bound. Hence every $f_k$ is continuous and $1$-Lipschitz. [algebra]

1.2 Let $K\subseteq\mathbb R$ be compact. If $K=\varnothing$, convergence on $K$ is vacuous. Otherwise [L3] gives $R>0$ with $|x|\leq R$ for $x\in K$, and [L4] gives $N\in\mathbb N$ with $N>R+1$. [L3, L4]

2.1 If $k\geq N$ and $x\in K$, then $|x-k|\geq k-|x|>1$, so $f_k(x)=0$. Thus the sequence is eventually identically zero on every compact $K$, and therefore converges to zero uniformly on each compact set. [step 1.2]

3.1 By [L1], [L2], and [L6], step 2.1 is convergence in the general compact-open topology. [L1, L2, L6, step 2.1]

4.1 Yet $f_k(k)=1$ for every $k$, so no tail has $|f_k(x)|<1/2$ for every $x\in\mathbb R$. By [L5], convergence is not uniform on the whole real line. [L5] ∎

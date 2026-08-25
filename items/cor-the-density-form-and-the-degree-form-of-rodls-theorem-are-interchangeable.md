---
id: cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable
kind: corollary
title: "The edge-density form of Rödl's theorem implies the maximum-degree form, with $\\epsilon$ and $\\delta$ each shrunk by a constant factor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-rodl-in-the-edge-density-form, lem-a-weakly-sparse-set-has-a-large-sparse-subset, lem-restrictedness-is-complement-invariant, cor-rodl-every-h-free-graph-has-a-linear-restricted-set, def-c-sparse-and-c-restricted-vertex-set, def-edge-density-between-vertex-sets, lem-a-sparse-set-has-small-self-density]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, A. Scott, P. Seymour, and S. Spirkl, Strengthening Rödl's theorem, Theorems 1.1 and 1.2"
      url: "https://arxiv.org/pdf/2105.07370"
pipeline_run: null
---

## Statement

Assume the edge-density form of Rödl's theorem holds at parameter $\epsilon/4$
with constant $\delta_0$. Then the maximum-degree form holds at parameter
$\epsilon$ with constant $\delta_0/2$.

## Facts & Assumptions

**Given:** A graph $H$, a real $\epsilon\in(0,\tfrac12)$, and the edge-density form of Rödl's theorem at parameter $\epsilon/4$ with constant $\delta_0$.

[L1] The edge-density form supplies, in every nonempty $H$-free graph $G$, a set $X$ of size at least $\delta_0|V(G)|$ with $d_G(X,X)\le\epsilon/4$ or $d_G(X,X)\ge1-\epsilon/4$ ([[cor-rodl-in-the-edge-density-form]]).

[L2] If $d_G(X,X)\le c$, then some subset $X'\subseteq X$ with $|X'|\ge|X|/2$ is $4c$-sparse ([[lem-a-weakly-sparse-set-has-a-large-sparse-subset]]).

[L3] A set is $c$-dense in $G$ exactly when it is $c$-sparse in $\overline G$ ([[lem-restrictedness-is-complement-invariant]]).

## Proof

**Proof technique:** direct.

1.1 Let $G$ be a nonempty $H$-free graph. By [L1], choose $X\subseteq V(G)$ with $|X|\ge\delta_0|V(G)|$ and either $d_G(X,X)\le\epsilon/4$ or $d_G(X,X)\ge1-\epsilon/4$. [L1, choose]

2.1 In the sparse branch, [L2] applied with $c=\epsilon/4$ gives a subset $X'\subseteq X$ with $|X'|\ge|X|/2$ that is $\epsilon$-sparse, hence $\epsilon$-restricted. [step 1.1, L2]

2.2 In the dense branch, the diagonal convention gives $d_{\overline G}(X,X)=1-1/|X|-d_G(X,X)\le\epsilon/4$; applying [L2] to $\overline G$ yields a subset $X'\subseteq X$ with $|X'|\ge|X|/2$ that is $\epsilon$-sparse in $\overline G$, and [L3] turns this into $\epsilon$-dense, hence $\epsilon$-restricted, in $G$. [step 1.1, L2, L3, algebra]

3.1 In either branch $|X'|\ge(\delta_0/2)|V(G)|$, so the maximum-degree form holds with constant $\delta_0/2$. [step 2.1, step 2.2] ∎

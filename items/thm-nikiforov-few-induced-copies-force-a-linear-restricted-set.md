---
id: thm-nikiforov-few-induced-copies-force-a-linear-restricted-set
kind: theorem
title: "Nikiforov: for every $H$ and every $\\epsilon\\in(0,\\tfrac12)$ there is $\\delta>0$ such that every graph $G$ with $\\operatorname{ind}_H(G)<(\\delta|V(G)|)^{|V(H)|}$ has an $\\epsilon$-restricted vertex set of size at least $\\delta|V(G)|$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-sparse-and-c-restricted-vertex-set, thm-large-self-regular-subset, lem-regularity-is-monotone-in-the-parameter, lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies, lem-trimming-a-self-regular-set-of-low-density, lem-trimming-a-self-regular-set-of-high-density, lem-sparsity-is-monotone-in-the-parameter, def-induced-copy-number, def-epsilon-regular-pair, def-edge-density-between-vertex-sets, def-real-power, thm-real-power-agrees-with-rational-exponent]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Huang, Q. Ju, and X. Zhou, Erdős-Hajnal beyond the five-vertex path, Theorem 1.2"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Fix a graph $H$ with $h=|V(H)|$ and a real $\epsilon\in(0,\tfrac12)$. Then
there exists $\delta>0$ such that every nonempty finite simple graph $G$ with

$$ \operatorname{ind}_H(G)<(\delta|V(G)|)^h $$

has an $\epsilon$-restricted vertex set of size at least $\delta|V(G)|$.

## Facts & Assumptions

**Given:** A graph $H$ with $h$ vertices and a real $\epsilon\in(0,\tfrac12)$.

[L1] For each $0<\gamma<1$, the self-regular-subset theorem gives a constant $\delta_1(\gamma)>0$ such that every nonempty graph on $n$ vertices has a subset $W$ with $|W|\ge\delta_1(\gamma)n$ and $(W,W)$ $\gamma$-regular ([[thm-large-self-regular-subset]], [[def-epsilon-regular-pair]]).

[L2] The induced counting constants include $N=N(H,\eta)$, and if $0<\gamma\le\gamma(H,\eta)$, $|W|\ge N$, $(W,W)$ is $\gamma$-regular, and its self-density lies between $\eta$ and $1-\eta$, then $\operatorname{ind}_H(G)\ge c(H,\eta)|W|^h$ ([[lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies]]).

[L3] A low-density $\gamma$-regular set has a large sparse subset, and a high-density one has a large dense subset, with the explicit parameters supplied by [[lem-trimming-a-self-regular-set-of-low-density]] and [[lem-trimming-a-self-regular-set-of-high-density]].

[L4] Every nonempty set of at most two vertices is $0$-restricted, hence $\epsilon$-restricted ([[lem-sparsity-is-monotone-in-the-parameter]]).

## Proof

**Proof technique:** direct.

1.1 Set $\eta:=\epsilon/4$ and choose $\gamma>0$ so small that $\gamma\le\epsilon/8$ and $\gamma\le\gamma(H,\eta)$ from [L2]. Then $(\eta+\gamma)/(1-\gamma)\le\epsilon$, and the dense trimming parameter from [L3] is also at most $\epsilon$, because $\eta=\epsilon/4$, $\gamma\le\epsilon/8$, and $\epsilon<1/2$. [L2, L3, algebra]

2.1 If $h=0$, the induced-copy hypothesis is never satisfied: both sides of its displayed inequality are $1$. Thus suppose $h\ge1$. Let $\delta_1:=\delta_1(\gamma)$ be the constant of [L1], let $c:=c(H,\eta)$ and $N:=N(H,\eta)$ be the constants of [L2], put $N':=\max\{N,1\}$, and set $$\delta:=\min\{\delta_1c^{1/h},\ (1-\gamma)\delta_1,\ \delta_1/N',\ 1\}.$$ Then $\delta>0$ and depends only on $H$ and $\epsilon$. [step 1.1, L1, L2, choose]

3.1 Now let $G$ be a nonempty graph on $n$ vertices with $\operatorname{ind}_H(G)<(\delta n)^h$. If $n<N'/\delta_1$, then any singleton $X$ is $0$-restricted by [L4] and satisfies $|X|=1>\delta n$, because $\delta\le\delta_1/N'$. Hence suppose $n\ge N'/\delta_1$. By [L1] choose $W\subseteq V(G)$ with $|W|\ge\delta_1n\ge N'\ge N$ such that $(W,W)$ is $\gamma$-regular. [step 2.1, L1, L4, choose, algebra]

4.1 If $\eta\le d_G(W,W)\le1-\eta$, then [L2] gives $\operatorname{ind}_H(G)\ge c|W|^h\ge c\delta_1^hn^h\ge(\delta n)^h$, contrary to the hypothesis on $G$. Therefore either $d_G(W,W)<\eta$ or $d_G(W,W)>1-\eta$. [step 1.1, step 2.1, step 3.1, L2, algebra]

5.1 In the first case, the low-density trimming lemma in [L3] yields a subset $W'\subseteq W$ with $|W'|>(1-\gamma)|W|\ge\delta n$ that is $\epsilon$-sparse by step 1.1. In the second case, the high-density trimming lemma in [L3] yields a subset $W'\subseteq W$ with the same size bound that is $\epsilon$-dense. In either case $W'$ is $\epsilon$-restricted. [step 1.1, step 2.1, step 3.1, step 4.1, L3]

6.1 Step 3.1 handles small $n$, and steps 4.1 and 5.1 handle all remaining cases, so every graph satisfying the induced-copy bound has an $\epsilon$-restricted set of size at least $\delta|V(G)|$. [step 3.1, step 4.1, step 5.1] ∎

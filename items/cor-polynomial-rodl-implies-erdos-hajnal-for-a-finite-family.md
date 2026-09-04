---
id: cor-polynomial-rodl-implies-erdos-hajnal-for-a-finite-family
kind: corollary
title: "The polynomial Rödl property implies the Erdős–Hajnal property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polynomial-rodl-property-for-a-finite-family, def-erdos-hajnal-property-and-constant, def-homogeneous-set-and-homogeneous-number, def-h-free-and-family-free-graph, def-real-power, thm-real-power-laws, lem-sparsity-depends-only-on-the-induced-subgraph, lem-restrictedness-is-complement-invariant, lem-complement-swaps-cliques-and-stable-sets, lem-greedy-colouring-bound, thm-clique-independence-chromatic-bounds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "M. Bucić, J. Fox, and H. T. Pham, Equivalence between Erdős-Hajnal and polynomial Rödl and Nikiforov conjectures, Theorem 4"
      url: "https://arxiv.org/html/2403.08303v1"
    - title: "T. H. Nguyen, Notes on Recent Work on the Erdős–Hajnal Conjecture, §1"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

Every finite family of graphs with the polynomial Rödl property has the
Erdős–Hajnal property. More precisely, if $d\ge1$ witnesses the polynomial Rödl
property of $\mathcal F$, then

$$ \frac{1}{2d+2} $$

is an Erdős–Hajnal constant for the class of $\mathcal F$-free graphs.

## Facts & Assumptions

**Given:** A finite family $\mathcal F$ of graphs and an exponent $d\ge1$ witnessing its polynomial Rödl property.

[L1] For every $\epsilon\in(0,\tfrac12)$ and every nonempty $\mathcal F$-free graph $G$, there is an $\epsilon$-restricted vertex set $X\subseteq V(G)$ with $|X|\ge\epsilon^d|V(G)|$ ([[def-polynomial-rodl-property-for-a-finite-family]], [[def-h-free-and-family-free-graph]]).

[L2] An exponent $c>0$ is an Erdős–Hajnal constant exactly when every nonempty $\mathcal F$-free graph $G$ satisfies $\operatorname{hom}(G)\ge|V(G)|^c$ ([[def-erdos-hajnal-property-and-constant]], [[def-homogeneous-set-and-homogeneous-number]]).

[L3] If $X$ is $\epsilon$-sparse, then every vertex of $G[X]$ has degree at most $\epsilon|X|$ ([[lem-sparsity-depends-only-on-the-induced-subgraph]]).

[L4] A nonnull graph satisfies $\chi(H)\le\Delta(H)+1$, and every graph satisfies $|V(H)|\le\chi(H)\alpha(H)$ ([[lem-greedy-colouring-bound]], [[thm-clique-independence-chromatic-bounds]]).

[L5] A set is $\epsilon$-dense in $G$ exactly when it is $\epsilon$-sparse in $\overline G$, and stable sets in $\overline G$ are cliques in $G$ ([[lem-restrictedness-is-complement-invariant]], [[lem-complement-swaps-cliques-and-stable-sets]]).

[L6] For positive bases, $a^{r+s}=a^ra^s$ ([[thm-real-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 Put $c:=1/(2d+2)$, and let $G$ be a nonempty $\mathcal F$-free graph on $n$ vertices. We show that $\operatorname{hom}(G)\ge n^c$. [L2]

2.1 If $n=1$, then $\operatorname{hom}(G)=1=n^c$. If $2\le n<2^{1/c}$, then any two vertices of $G$ are adjacent or nonadjacent, so $\operatorname{hom}(G)\ge2>n^c$. It therefore remains only to treat the case $n\ge2^{1/c}=2^{2d+2}$. [step 1.1, L2, algebra]

2.2 Assume now that $n\ge2^{2d+2}$ and set $\epsilon:=n^{-1/(d+1)}=n^{-2c}$. Then $\epsilon\in(0,\tfrac12)$. By [L1], choose an $\epsilon$-restricted vertex set $X\subseteq V(G)$ with $|X|\ge\epsilon^dn=n^{1-d/(d+1)}=n^{1/(d+1)}=n^{2c}$. [step 1.1, L1, L6, choose]

3.1 Suppose first that $X$ is $\epsilon$-sparse. By [L3], the induced graph $G[X]$ has maximum degree at most $\epsilon|X|$, so [L4] gives $\chi(G[X])\le\epsilon|X|+1\le2\epsilon|X|$ because $\epsilon|X|\ge\epsilon n^{2c}=1$. Applying the second inequality of [L4] to $G[X]$ yields $|X|\le\chi(G[X])\alpha(G[X])\le2\epsilon|X|\alpha(G[X])$, so $\alpha(G[X])\ge1/(2\epsilon)=n^{2c}/2\ge n^c$, the last inequality using $n^c\ge2$ from step 2.1. Hence $\operatorname{hom}(G)\ge n^c$. [step 2.1, step 2.2, L3, L4, algebra]

4.1 Suppose instead that $X$ is $\epsilon$-dense. Then [L5] makes $X$ $\epsilon$-sparse in $\overline G$, so the same calculation as in step 3.1 applied to $\overline G[X]$ yields a stable set of size at least $n^c$ in $\overline G[X]$. By [L5], that stable set is a clique of size at least $n^c$ in $G[X]$, and again $\operatorname{hom}(G)\ge n^c$. [step 2.1, step 2.2, step 3.1, L5]

5.1 Step 2.1 handles $n<2^{1/c}$, and steps 3.1 and 4.1 handle the large-$n$ case. Thus every nonempty $\mathcal F$-free graph $G$ satisfies $\operatorname{hom}(G)\ge|V(G)|^c$, so [L2] shows that $c=1/(2d+2)$ is an Erdős–Hajnal constant. [step 2.1, step 3.1, step 4.1, L2] ∎

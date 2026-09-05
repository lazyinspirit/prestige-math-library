---
id: ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set
kind: example
title: "A large epsilon-restricted induced subgraph gives a polynomial clique or stable set"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property, def-c-sparse-and-c-restricted-vertex-set, lem-greedy-colouring-bound, thm-clique-independence-chromatic-bounds, lem-restrictedness-is-complement-invariant, lem-complement-swaps-cliques-and-stable-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Lemma 3.5"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Example

Let $\epsilon:=\tfrac14$ and let $S$ be an $\epsilon$-restricted induced
subgraph on $16$ vertices. Take an ambient graph order $|G|:=2^{84}$, so that
$|G|^{1/42}=4$.

## Facts & Assumptions

**Given:** The data in the Example.

[L1] An $\epsilon$-restricted set is $\epsilon$-sparse in one of $G$ and
$\overline G$, and complementation swaps cliques with stable sets
([[def-c-sparse-and-c-restricted-vertex-set]],
[[lem-restrictedness-is-complement-invariant]],
[[lem-complement-swaps-cliques-and-stable-sets]]).

[L2] For a nonempty $\epsilon$-sparse graph $H$,
$$
\chi(H)\le \epsilon|H|+1,\qquad |H|\le \chi(H)\alpha(H)
$$
([[lem-greedy-colouring-bound]], [[thm-clique-independence-chromatic-bounds]]).

## Verification

**Proof technique:** direct.


1.1 By [L1], after taking complements if necessary we may assume that $S$ is $\epsilon$-sparse. [L1]


2.1 Applying [L2] to the $16$-vertex graph $G[S]$ gives $$ \alpha(G[S])\ge \frac{16}{\epsilon\cdot 16+1} = \frac{16}{5}>3. $$ Since $\alpha(G[S])$ is an integer, $\alpha(G[S])\ge 4$. [step 1.1, L2, algebra]


3.1 Because $|G|=2^{84}$, one has $|G|^{1/42}=2^2=4$. Therefore the stable set from step 2.1 already has the same size as the final polynomial bound used in the A-page reduction. If the sparse side had arisen in the complement instead, [L1] would turn the same calculation into a clique of size $4$ in the original graph. [step 2.1, L1, algebra] ∎

---
id: lem-a-complete-or-weakly-sparse-blockade-can-be-thinned-to-equal-subblocks-with-directional-sparsity
kind: lemma
title: "A complete-or-weakly-sparse blockade can be thinned to equal subblocks with directional sparsity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-blockade-length-and-width, def-directional-and-weak-sparsity-between-vertex-sets, def-edges-between-sets-and-pure-mixed-pairs, thm-linearity-of-expectation, thm-finite-union-bound]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdos-Hajnal beyond the five-vertex path, Lemma 2.6"
      url: "https://arxiv.org/html/2606.06258v2"
    - title: "Tung Nguyen, Alex Scott, and Paul Seymour, Induced subgraph density. VII. The five-vertex path, Claim 7.1.1"
      url: "https://arxiv.org/html/2312.15333v2"
pipeline_run: null
---

## Statement

Let $a\ge 0$, let $\epsilon\in(0,\tfrac14]$, and let

$$ \mathcal A=(A_1,\ldots,A_\ell) $$

be a blockade in a graph $G$ with $\ell=\lceil\epsilon^{-1}\rceil$ and width
at least $m>0$. Assume that every distinct pair $(A_i,A_j)$ is either complete
or weakly $\epsilon^a$-sparse. Then there is a subblockade

$$ \mathcal D=(D_1,\ldots,D_\ell) $$

such that:

1. $D_i\subseteq A_i$ and $|D_i|=\lceil\epsilon\lceil m\rceil\rceil$ for every
   $i\in[\ell]$;
2. if $(A_i,A_j)$ is complete, then $(D_i,D_j)$ is complete; and
3. if $(A_i,A_j)$ is weakly $\epsilon^a$-sparse, then $D_i$ is
   $\epsilon^{a-5}$-sparse to $D_j$ and $D_j$ is $\epsilon^{a-5}$-sparse to
   $D_i$.

## Facts & Assumptions

**Given:** The blockade $\mathcal A=(A_1,\ldots,A_\ell)$ with $\ell=\lceil\epsilon^{-1}\rceil$, width at least $m$, and the complete or weakly $\epsilon^a$-sparse hypothesis on each distinct pair of blocks.

[L1] A weakly $c$-sparse ordered pair $(X,Y)$ satisfies $$ e_G(X,Y)\le c|X||Y| $$ by definition ([[def-directional-and-weak-sparsity-between-vertex-sets]]).

[L2] A complete pair stays complete after passing to subsets ([[def-edges-between-sets-and-pure-mixed-pairs]]).

[L3] Expectation is linear for finite families of random variables, without an
independence hypothesis ([[thm-linearity-of-expectation]]).

[L4] The probability of a finite union of events is at most the sum of their
probabilities ([[thm-finite-union-bound]]).

## Proof

**Proof technique:** use finite averaging to choose equal ambient blocks with
controlled edge counts, then delete vertices that are too heavy against the
chosen ambient blocks.

1.1 Put $n:=\lceil m\rceil$ and $s:=\lceil\epsilon n\rceil$. Since every $|A_i|$ is an integer at least $m$, one has $n\le |A_i|$. Choose independently and uniformly an $n$-element subset $X_i\subseteq A_i$ for each $i$. For a weakly $\epsilon^a$-sparse pair $(A_i,A_j)$, finite double counting and [L3] give $$\mathbb E\,e_G(X_i,X_j)=e_G(A_i,A_j)\frac{n^2}{|A_i||A_j|}\le\epsilon^a n^2.$$ Consequently the probability that $e_G(X_i,X_j)>\epsilon^{a-2}n^2$ is less than $\epsilon^2$: on that event the nonnegative edge count already exceeds the threshold, so its expectation is greater than the threshold times the event probability. There are at most $\binom{\ell}{2}$ relevant pairs, and $$\binom{\ell}{2}\epsilon^2<\frac{1+\epsilon}{2}<1$$ because $\ell=\lceil\epsilon^{-1}\rceil<\epsilon^{-1}+1$. By [L4], some simultaneous choice of the $X_i$ therefore satisfies $$e_G(X_i,X_j)\le\epsilon^{a-2}n^2$$ for every weakly sparse pair. Complete pairs remain complete by [L2]. Fix such a choice. [given, L1, L2, L3, L4, choose, algebra]

2.1 We choose $D_1,\ldots,D_\ell$ successively, always requiring $D_i\subseteq X_i$ and $|D_i|=s$. Suppose that $D_1,\ldots,D_{i-1}$ have already been chosen. For each $p\ne i$ with $(A_p,A_i)$ weakly $\epsilon^a$-sparse, let $C_p\subseteq X_i$ consist of the vertices having more than $\epsilon^{a-4}n$ neighbours in $D_p$ when $p<i$, or more than $\epsilon^{a-4}n$ neighbours in $X_p$ when $p>i$. In either case step 1.1 gives $$e_G(X_i,D_p)\le e_G(X_i,X_p)\le\epsilon^{a-2}n^2,$$ so $|C_p|<\epsilon^2n$. Since $\ell-1<\epsilon^{-1}$, the union of the forbidden sets has fewer than $\epsilon n$ vertices and therefore at most $s-1$ vertices. Thus at least $n-s+1\ge s$ vertices survive: indeed $s\le\lceil n/4\rceil$ and $2\lceil n/4\rceil\le n+1$. Choose $D_i$ to be any $s$ survivors. [step 1.1, L1, choose, algebra]

3.1 Let $(A_i,A_j)$ be weakly $\epsilon^a$-sparse, and assume $i<j$. When $D_i$ was chosen, the index $j$ was still future, so every vertex of $D_i$ has at most $\epsilon^{a-4}n$ neighbours in $X_j$, hence at most that many in $D_j$. When $D_j$ was chosen, every vertex of $D_j$ was required to have at most $\epsilon^{a-4}n$ neighbours in $D_i$. Since $s\ge\epsilon n$, $$\epsilon^{a-4}n\le\epsilon^{a-5}s.$$ Therefore $D_i$ is $\epsilon^{a-5}$-sparse to $D_j$ and $D_j$ is $\epsilon^{a-5}$-sparse to $D_i$. [step 2.1, algebra]

4.1 If $(A_i,A_j)$ is complete, then $(D_i,D_j)$ is complete by [L2] because $D_i\subseteq A_i$ and $D_j\subseteq A_j$. Together with step 3.1, this proves that $\mathcal D=(D_1,\ldots,D_\ell)$ has all the required properties. ∎

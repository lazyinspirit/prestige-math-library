---
id: lem-leaf-extension-copy-or-blockade
kind: lemma
title: "A sparse host has many leaf extensions, few smaller copies, or a long sparse blockade"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-leaf-extension-copy-or-sparse-pair, def-blockade-length-and-width, def-complete-anticomplete-pure-and-x-sparse-blockades]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Nguyen, Scott and Seymour, Induced subgraph density IV, Lemma 5.2"
      url: "https://arxiv.org/pdf/2307.06455"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $H$ be a finite graph on $h\ge3$ vertices with leaf $v$, and put
$H'=H-v$. Let $a\ge2$ and $0<x\le y\le4^{-h}$. Suppose a finite graph
$G$ on $n\ge1$ vertices has maximum degree at most $y^2n$. Then at least
one of the following holds:

1. $\operatorname{ind}_H(G)>x^{2a+2h}n^h$;
2. some $S\subseteq V(G)$ has $|S|\ge y^2n$ and
   $\operatorname{ind}_{H'}(G[S])\le y^{a-2}|S|^{h-1}$;
3. $G$ has an $x$-sparse blockade of length at least $y^{-1}$ and width
   at least $y^{a+1}n$.

## Facts & Assumptions

**Given:** The data in the statement.

[L1] With parameters $x\le y\le(2h)^{-1}$, the preceding leaf-extension lemma gives many $H$-embeddings, a set with few $H'$-embeddings, or a sparse pair with first side of size at least $y^a$ times the host order and second side of size at least $(1-hy)$ times that order ([[lem-leaf-extension-copy-or-sparse-pair]]). The bound $4^{-h}\le(2h)^{-1}$ holds for $h\ge3$.

## Proof

**Proof technique:** maximal sparse blockade.

1.1 Suppose all three outcomes fail. If $y^2n\le1$, a singleton gives outcome 2 since $|H'|\ge2$. If $y^{a+1}n\le1\le y^2n$, a greedy stable-set algorithm gives at least $n/(1+y^2n)\ge(2y^2)^{-1}\ge y^{-1}$ stable vertices: each selected vertex removes itself and at most $y^2n$ neighbors. Taking those vertices as singleton blocks gives outcome 3. Consequently $y^{a+1}n>1$. [given, algebra]

2.1 Among sequences $(B_0,\ldots,B_k)$ of disjoint nonempty sets with $B_i$ $x$-sparse to every earlier block, $|B_i|\ge y^{a+1}n$ for $i<k$, and $|B_k|\ge(1-hy)^k n$, choose one with maximum $k$. Such a sequence exists with $k=0$ and $B_0=V(G)$; finiteness bounds $k$. Since outcome 3 fails, $k<y^{-1}$. For $0\le t\le1/2$, $1-t\ge4^{-t}$ (for example, $\log(1-t)+t\log4$ is concave and nonnegative at both endpoints). As $hy\le1/2$, this gives $$|B_k|\ge(1-hy)^kn\ge4^{-hyk}n>4^{-h}n\ge yn\ge xn.\tag{1}$$ [step 1.1, algebra]

3.1 The graph $G[B_k]$ has maximum degree at most $y^2n\le y|B_k|$ by (1). Failure of outcome 1 and (1) give $$\operatorname{ind}_H(G[B_k])\le\operatorname{ind}_H(G) \le x^{2a+2h}n^h\le x^{2a+h}|B_k|^h.$$ Because $|B_k|>yn\ge y^2n$, failure of outcome 2 gives $\operatorname{ind}_{H'}(G[B_k])>y^{a-2}|B_k|^{h-1}$. Thus [L1] applied to $G[B_k]$ supplies disjoint $A,B\subseteq B_k$ such that $|A|\ge y^a|B_k|\ge y^{a+1}n$, $|B|\ge(1-hy)|B_k|\ge(1-hy)^{k+1}n$, and $B$ is $x$-sparse to $A$. [step 2.1, L1]

4.1 Replace the old final block $B_k$ by $A,B$. Since every vertex of $B_k$ was $x$-sparse to each earlier block, the same is true of its subsets $A$ and $B$; the new last pair is sparse by step 3.1. The new sequence satisfies all the size conditions of step 2.1 with index $k+1$, contradicting maximality. Therefore at least one stated outcome holds. [step 2.1, step 3.1] ∎

---
id: lem-no-large-epsilon-sparse-subgraph-bounds-k-stable-sets
kind: lemma
title: "Without a large $\\epsilon$-sparse induced subgraph, the number of $k$-vertex stable sets is bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-c-sparse-and-c-restricted-vertex-set, lem-sparsity-depends-only-on-the-induced-subgraph, def-clique-stable-set-and-numbers, def-binomial-coefficient, thm-pascals-rule]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Bucić, J. Fox, and H. T. Pham, Equivalence between Erdős-Hajnal and polynomial Rödl and Nikiforov conjectures, Lemma 12"
      url: "https://arxiv.org/html/2403.08303v1"
    - title: "T. H. Nguyen, Notes on Recent Work on the Erdős–Hajnal Conjecture, Lemma 1.5"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

Let $\epsilon\in(0,1]$, let $0\le\ell\le k$ be integers, and let $u,n$ be
positive integers with

$$ (1-\epsilon)^\ell n\le u. $$

Let $G$ be a finite graph on $n$ vertices such that every subset
$S\subseteq V(G)$ with $|S|\ge u$ induces a graph $G[S]$ of maximum degree at
least $\epsilon|S|-1$. Then $G$ has at most

$$ \binom{n}{\ell}\binom{u}{k-\ell} $$

stable sets of size $k$.

In particular, the same bound holds whenever $G$ has no $\epsilon$-sparse
induced subgraph on $u$ or more vertices.

## Facts & Assumptions

**Given:** A real $\epsilon\in(0,1]$, integers $0\le\ell\le k$, positive integers $u,n$ with $(1-\epsilon)^\ell n\le u$, and an $n$-vertex graph $G$ satisfying the maximum-degree hypothesis in the Statement.

[L1] Stable sets are vertex sets with no adjacent pair ([[def-clique-stable-set-and-numbers]]).

[L2] Binomial coefficients count subsets, and Pascal's rule is $\binom{n}{\ell-1}+\binom{n}{\ell}=\binom{n+1}{\ell}$ ([[def-binomial-coefficient]], [[thm-pascals-rule]]).

[L3] If a vertex set $S$ induces a graph whose maximum degree is less than $\epsilon|S|$, then $S$ is $\epsilon$-sparse; equivalently, the failure of $\epsilon$-sparsity forces some vertex degree to exceed $\epsilon|S|$ ([[def-c-sparse-and-c-restricted-vertex-set]], [[lem-sparsity-depends-only-on-the-induced-subgraph]]).

## Proof

**Proof technique:** induction.

1.1 [base] If $\ell=0$, then the hypothesis $(1-\epsilon)^\ell n\le u$ reads $n\le u$. Every stable $k$-set is a $k$-element subset of the $n$-vertex set, so there are at most $\binom{n}{k}\le\binom{u}{k}=\binom{n}{0}\binom{u}{k}$ of them by [L2]. [L2]

1.2 [ih] Assume $\ell\ge1$ and that the claim holds for every admissible parameter tuple with smaller value of $\ell+n$. [base]

1.3 If $u\ge n$, then every stable $k$-set is a $k$-element subset of the $n$-vertex set, so there are at most $\binom{n}{k}\le\binom{n}{\ell}\binom{n-\ell}{k-\ell}\le\binom{n}{\ell}\binom{u}{k-\ell}$ of them by [L2]. Thus the claim is immediate in this case. We may therefore assume $u<n$. Take $v\in V(G)$ of maximum degree. Applying the hypothesis to $S=V(G)$ gives $\deg_G(v)\ge\epsilon n-1$. Let $U:=V(G)\setminus(\{v\}\cup N_G(v))$, so $|U|\le(1-\epsilon)n$. [L2, given, choose, algebra]

2.1 Stable $k$-sets containing $v$ correspond exactly to stable $(k-1)$-sets of $G[U]$. Since $(1-\epsilon)^{\ell-1}|U|\le(1-\epsilon)^\ell n\le u$, the induction hypothesis applied to $G[U]$ with parameters $(\ell-1,k-1)$ shows that there are at most $\binom{|U|}{\ell-1}\binom{u}{k-\ell}\le\binom{n-1}{\ell-1}\binom{u}{k-\ell}$ such stable sets. [step 1.2, step 1.3, L2]

2.2 Stable $k$-sets avoiding $v$ are stable $k$-sets of $G-v$. Any subset of $V(G-v)$ with at least $u$ vertices is also a subset of $V(G)$, so it still satisfies the maximum-degree hypothesis. The induction hypothesis applied to $G-v$ with parameters $(\ell,k)$ therefore bounds their number by $\binom{n-1}{\ell}\binom{u}{k-\ell}$. [step 1.2, step 1.3]

3.1 Adding the bounds from steps 2.1 and 2.2 and using Pascal's rule from [L2] gives at most $\bigl(\binom{n-1}{\ell-1}+\binom{n-1}{\ell}\bigr)\binom{u}{k-\ell}=\binom{n}{\ell}\binom{u}{k-\ell}$ stable $k$-sets in $G$, in the sense of [L1]. If $G$ has no $\epsilon$-sparse induced subgraph on $u$ or more vertices, then [L3] shows that every such induced subgraph has a vertex of degree exceeding $\epsilon|S|$, hence in particular at least $\epsilon|S|-1$, so the same bound applies in that situation as well. [step 2.1, step 2.2, L1, L2, L3, discharge-induction] ∎

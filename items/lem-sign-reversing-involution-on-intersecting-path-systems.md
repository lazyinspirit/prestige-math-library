---
id: lem-sign-reversing-involution-on-intersecting-path-systems
kind: lemma
title: "Tail-swapping is a sign-reversing involution on the intersecting systems"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-path-system-and-non-intersecting-path-system, def-finite-symmetric-group-and-permutation-notation, thm-sign-is-a-homomorphism, def-inversions-inversion-number-and-sign, thm-transpositions-generate-the-symmetric-group, def-monotone-lattice-path, lem-a-transposition-reverses-inversion-sign]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.13'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Statement

Fix start points $(A_i)_{i<r}$ and end points $(E_i)_{i<r}$, and let
$\mathcal{I}(A,E)$ be the set of pairs $(\pi,\mathbf{P})$ such that
$\pi\in S_r$ and $\mathbf{P}$ is an intersecting $\pi$-system
([[def-path-system-and-non-intersecting-path-system]]).

There is an involution

$$\tau:\mathcal{I}(A,E)\longrightarrow\mathcal{I}(A,E)$$

with the following property: if

$$\tau(\pi,\mathbf{P})=(\pi',\mathbf{P}'),$$

then

$$\operatorname{sgn}(\pi')=-\operatorname{sgn}(\pi).$$

## Facts & Assumptions

**Given:** start points $(A_i)_{i<r}$, end points $(E_i)_{i<r}$, and a pair $(\pi,\mathbf{P})\in\mathcal{I}(A,E)$ with $\mathbf{P}=(P_i)_{i<r}$.

[F1] A $\pi$-system is an $r$-tuple of monotone paths $P_i:A_i\to E_{\pi(i)}$, and it is intersecting when some pair of paths shares a lattice point ([[def-path-system-and-non-intersecting-path-system]]).

[L1] Composing a permutation with a transposition reverses its sign, so in particular $\operatorname{sgn}(\pi\circ(i\,j))=-\operatorname{sgn}(\pi)$ for $i<j<r$ ([[lem-a-transposition-reverses-inversion-sign]], [[def-inversions-inversion-number-and-sign]]).

## Proof

**Proof technique:** constructive.

1.1 The set of lattice vertices lying on at least two paths of $\mathbf P$ is finite and nonempty. Choose its lexicographically least vertex $x$, and then choose the lexicographically least pair of indices $i<j<r$ such that both $P_i$ and $P_j$ pass through $x$. [F1, choose]

1.2 Write $P_i=\alpha_i\beta_i$ and $P_j=\alpha_j\beta_j$, where $\alpha_i$ and $\alpha_j$ end at $x$ and $\beta_i$ and $\beta_j$ start at $x$. Define a new $r$-tuple $\mathbf{P}'$ by replacing $P_i$ with $\alpha_i\beta_j$, replacing $P_j$ with $\alpha_j\beta_i$, and leaving every other path unchanged; and put $\pi':=\pi\circ(i\,j)$. [construct]

2.1 The new tuple $\mathbf{P}'$ is a $\pi'$-system: the swapped paths are still monotone because each is a concatenation of monotone segments meeting at the same lattice point $x$, and their endpoints are $A_i\to E_{\pi(j)}$ and $A_j\to E_{\pi(i)}$ respectively, while every other endpoint is unchanged. [F1, step 1.2]

2.2 Since $\pi'=\pi\circ(i\,j)$ and $(i\,j)$ is a transposition, [L1] gives $\operatorname{sgn}(\pi')=-\operatorname{sgn}(\pi)$. [L1, step 1.2]

3.1 The same choices $x,i,j$ are recovered from $(\pi',\mathbf P')$. At every lattice vertex, swapping the two tails preserves the number of paths passing through that vertex: it only exchanges the labels $i$ and $j$ after $x$. Thus the set of vertices lying on at least two paths, and hence its lexicographically least member $x$, is unchanged. The paths with indices $i$ and $j$ still both pass through $x$, and the set of indices of paths passing through $x$ is unchanged, so the least pair there is again $i,j$. Applying the construction again swaps the same tails back. [step 1.1, step 1.2, step 2.1]

4.1 Steps 2.1 and 3.1 show that the construction defines a map $\tau$ from $\mathcal{I}(A,E)$ to itself and that $\tau(\tau(\pi,\mathbf{P}))=(\pi,\mathbf{P})$ for every $(\pi,\mathbf{P})$; step 2.2 gives the sign change. So $\tau$ is the required sign-reversing involution. [step 2.1, step 3.1, step 2.2, discharge-construct] ∎

## Remarks

- The only real work is canonicity. A tail-swap at an arbitrary intersection would still reverse the sign, but it would not define an involution. The least indices and the first meeting point are what make the construction well defined.

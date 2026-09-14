---
id: ex-the-perfect-tree-splitting-of-a-new-real-name
kind: example
title: Perfect-tree splitting of a new-real name
status: draft
origin: pipeline
deps: [lem-solovay-perfect-tree-of-mutually-generic-name-interpretations, thm-forcing-theorem, lem-forcing-monotonicity-density-and-decision]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
---

## Example

Display the first three levels of the perfect-tree construction for a name $\dot\tau$ forced new.

## Facts & Assumptions

**Given:** $N,Q,p,\dot\tau$ satisfy the hypotheses of F1. Enumerate the dense subsets of $Q$ in $N$ as $(D_n)$ and those of $Q^2$ in $N$ as $(E_n)$; replace each by its downward closure, so all are dense open in the stronger-condition order.

[F1] [[lem-solovay-perfect-tree-of-mutually-generic-name-interpretations]]: fixes the new-name hypotheses and asserts the resulting perfect tree of mutually generic, continuously varying interpretations.

[F2] [[thm-forcing-theorem]] and [[lem-forcing-monotonicity-density-and-decision]]: the forcing predicate is definable in $N$, stronger conditions preserve decisions, and conditions deciding any fixed bit are dense; finite iteration decides any prescribed finite prefix.

## Verification

1.1 Below every $q\le p$ there are two conditions forcing incompatible finite prefixes of $\dot\tau$. Otherwise all prefixes forceable below some $q$ would be compatible. For every $k$, finite iteration of F2 would then give a unique $u_k\in2^k$ forceable below $q$. Definability of forcing forms $(u_k)_{k<\omega}$ in $N$, and $q$ forces $\dot\tau=\bigcup_k u_k\in N$, contradicting the newness hypothesis in F1. [F1, F2]

2.1 Put $p_\varnothing\le p$ in $D_0$. Use step 1.1 to choose two extensions forcing incompatible prefixes. Successively refine the two ordered pairs into $E_0$; openness preserves the first requirement while the reverse ordered pair is handled. Call the resulting conditions $p_0,p_1$, and strengthen them to decide incompatible prefixes $u_0,u_1$ of length at least $1$. [F2, step 1.1]

3.1 Below each of $p_0,p_1$, apply step 1.1 to choose two successors. Prefix decisions inherited from the parents separate successors from different parents, and the new splits separate siblings. Successively refine the four nodes through $D_0,D_1$ and all $12$ ordered pairs through $E_0,E_1$, then use F2 to decide extensions $u_{ij}$ of length at least $2$. There are only finitely many requirements, and downward closure preserves every earlier one. [F2, step 1.1, step 2.1]

4.1 Repeat at level three with eight nodes: meet $D_0,D_1,D_2$ at every node, meet $E_0,E_1,E_2$ for all $8\cdot7=56$ ordered pairs of distinct nodes, and decide pairwise incompatible prefixes $u_{ijk}$ of length at least $3$. [F2, step 1.1, step 3.1]

5.1 Thus agreement of branches through level $m$ forces agreement of their interpreted reals through the already decided length-$m$ prefix, while their first split forces distinct interpretations. The continuity modulus is: input agreement through level $m$ implies output agreement through $m$ digits. Continuing the same finite procedure meets every enumerated dense set and realizes the endpoint asserted by F1. [F1, step 2.1, step 3.1, step 4.1] ∎

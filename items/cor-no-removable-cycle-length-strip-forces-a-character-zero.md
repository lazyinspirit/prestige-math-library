---
id: cor-no-removable-cycle-length-strip-forces-a-character-zero
kind: corollary
title: "A missing removable strip of the cycle length forces a zero character value"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [thm-murnaghan-nakayama-character-rule,
       lem-hooks-correspond-to-removable-border-strips,
       def-removable-border-strip-and-height,
       def-hook-arm-leg-and-hook-length,
       def-permutation-support-disjoint-cycles-and-cycle-type,
       def-finite-symmetric-group-and-permutation-notation,
       def-column-antisymmetrizer-polytabloid-and-specht-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978 (complete author-hosted scan, 161 pp.)"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§21.1–21.2, printed pp. 79–80: the Murnaghan–Nakayama rule with the empty sum read as zero, and Example 21.2(ii) where a missing hook length forces vanishing on the classes containing such a cycle"
    - title: "William Woods, Representation theory of the symmetric groups (Cambridge Part III essay, 33 pp.)"
      url: "https://billywoods.net/part_iii_essay.pdf"
      locator: "§4.3, printed pp. 24–29: hooks, skew hooks and Theorem 4.3.1, with the forced vanishing on classes whose cycle length is not a hook length"
---

## Statement

Let $\lambda\vdash n$ and let $\rho\in S_n$ be a permutation containing a cycle
of length $1\le r\le n$ (equivalently, $c_r(\rho)>0$ in the cycle-count
notation of [[def-permutation-support-disjoint-cycles-and-cycle-type]], with
fixed points counted as cycles of length $1$). If $\lambda$ has no removable border strip of size $r$
([[def-removable-border-strip-and-height]]), then
$$\chi^\lambda(\rho)=0.$$
By the hook/rim-hook correspondence this is equivalent to: if no hook length of
$\lambda$ equals $r$ ([[def-hook-arm-leg-and-hook-length]]), then
$\chi^\lambda(\rho)=0$
([[lem-hooks-correspond-to-removable-border-strips]]).

## Facts & Assumptions

**Given:** A partition $\lambda\vdash n$, an integer $r\ge1$, and a permutation $\rho\in S_n$ containing a cycle of length $r$, with $\chi^\lambda$ the character of the complex Specht module $S^\lambda$ ([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F1] Murnaghan–Nakayama rule: for a cyclic permutation $c$ on a specified $r$-point set $D$ and a permutation $\sigma\in S_n$ fixing $D$ pointwise, $\chi^\lambda(\sigma c)=\sum_{\lambda/\nu}(-1)^{\operatorname{ht}(\lambda/\nu)}\chi^\nu(\sigma)$, summed over the removable border strips of $\lambda$ of size $r$, the empty sum being $0$ ([[thm-murnaghan-nakayama-character-rule]]).

[F2] Hook/rim-hook correspondence: for every node $x\in[\lambda]$ the rim hook $\xi(x)$ is a removable border strip of $\lambda$ of size the hook length $h(x)$, and every removable border strip of $\lambda$ is $\xi(x)$ for exactly one node $x$; hence the sizes of the removable border strips of $\lambda$ are exactly the hook lengths of $\lambda$ ([[lem-hooks-correspond-to-removable-border-strips]], [[def-hook-arm-leg-and-hook-length]], [[def-removable-border-strip-and-height]]).

[F3] Cycle decomposition: the disjoint cycles of $\rho$ have pairwise disjoint supports, so selecting a cycle on $r$ points (including a specified fixed point when $r=1$) leaves a permutation $\sigma$ fixing those points. For $1\le r\le n$, the cycle-count entry $c_r(\rho)$ is the number of $r$-element orbits, so such a cycle exists exactly when $c_r(\rho)>0$ ([[def-permutation-support-disjoint-cycles-and-cycle-type]], [[def-finite-symmetric-group-and-permutation-notation]]).

## Proof

**Proof technique:** direct.

1.1 Select a cycle of length $r$, with its set $D$ of $r$ points; for $r=1$ select a fixed point and put $c=1$, otherwise let $c$ be its cyclic permutation. Put $\sigma:=\rho c^{-1}$, the product of the remaining disjoint cycles. Then $\rho=\sigma c$, and $\sigma$ fixes $D$ pointwise, because the supports of the cycles of $\rho$ are pairwise disjoint. [given, F3, algebra]

1.2 By the hook/rim-hook correspondence [F2], the removable border strips of $\lambda$ are exactly the rim hooks $\xi(x)$ indexed by the nodes of $[\lambda]$, and the size of $\xi(x)$ is the hook length $h(x)$. Therefore $\lambda$ has a removable border strip of size $r$ if and only if some hook length of $\lambda$ equals $r$, so the two hypotheses of the statement are equivalent. [F2, algebra]

2.1 Apply the Murnaghan–Nakayama rule [F1] to the specified cycle $(D,c)$ and the compatible permutation $\sigma$ of step 1.1: $\chi^\lambda(\rho)=\chi^\lambda(\sigma c)=\sum_{\lambda/\nu}(-1)^{\operatorname{ht}(\lambda/\nu)}\chi^\nu(\sigma)$, the sum running over the removable border strips $\lambda/\nu$ of size $r$. By hypothesis $\lambda$ has no such strip, so the index set is empty and the empty sum is $0$; thus $\chi^\lambda(\rho)=0$. By the equivalence of step 1.2 the same conclusion holds under the hook-length hypothesis. [step 1.1, step 1.2, F1, given, algebra] ∎

## Remarks

- **Emptiness is the only mechanism used.** No cancellation takes place: the value is zero because every term of the recursion is absent. A permutation of $S_n$ cannot contain a cycle of length $r>n$. Within $1\le r\le n$, the criterion applies whenever $r$ lies in a gap of the hook-length multiset, as for $\lambda=(2,2,1,1)$ and $r=3$, whose hook lengths $5,4,2,2,1,1$ avoid $3$.

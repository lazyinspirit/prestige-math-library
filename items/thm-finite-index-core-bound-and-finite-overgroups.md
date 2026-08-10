---
id: thm-finite-index-core-bound-and-finite-overgroups
kind: theorem
title: 'If $[G:H]=n<\infty$, then $\operatorname{Core}_G(H)\trianglelefteq G$, $[G:\operatorname{Core}_G(H)]\mid n!$, and only finitely many subgroups contain $H$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-left-coset-action-and-its-kernel, lem-core-is-largest-normal-subgroup-contained, thm-first-isomorphism-theorem-groups, def-symmetric-group, lem-symmetric-group-is-a-group, thm-number-of-bijections-of-a-finite-set, def-factorial-and-falling-factorial, thm-lagrange, def-index, def-finite-cardinality, def-quotient-group, prop-canonical-quotient-map, cor-cardinality-of-the-power-set, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Group Actions, Theorem 6.8"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

Let $H\le G$ have finite index $[G:H]=n$, and put
$N=\operatorname{Core}_G(H)$. Then $N\mathrel{\trianglelefteq}G$, the index
$[G:N]$ divides $n!$, and there are only finitely many subgroups $K$ with
$H\le K\le G$.

## Facts & Assumptions

**Given:** A group $G$, a subgroup $H\le G$ of finite index $n$, and $N:=\operatorname{Core}_G(H)$.

[L1] The action on $G/H$ gives a homomorphism $\rho:G\to\operatorname{Sym}(G/H)$ whose kernel is $N$ ([[thm-left-coset-action-and-its-kernel]]).

[L2] The core $N$ is normal in $G$, lies in $H$, and contains every normal subgroup of $G$ lying in $H$ ([[lem-core-is-largest-normal-subgroup-contained]]).

[L3] First isomorphism gives $G/\ker\rho\cong\operatorname{im}\rho$ ([[thm-first-isomorphism-theorem-groups]]).

[L4] The symmetric group of a set is its group of bijections ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]).

[L5] A set with $n$ elements has exactly $n!$ bijections to itself ([[thm-number-of-bijections-of-a-finite-set]], [[def-factorial-and-falling-factorial]]).

[L6] The order of a subgroup of a finite group divides the order of the group ([[thm-lagrange]]).

[L7] The canonical projection $\pi:G\to G/N$ is a surjective homomorphism ([[prop-canonical-quotient-map]], [[def-quotient-group]]).

[L8] The power set of a finite set is finite ([[cor-cardinality-of-the-power-set]]).

[L9] Every subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[L10] For a finite-index subgroup, the index is the cardinality of its coset set ([[def-index]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the coset action has kernel $N\mathrel{\trianglelefteq}G$ with $N\le H$, and its image is a subgroup of $\operatorname{Sym}(G/H)$. [L1, L2, L4]

2.1 By [L3], $G/N\cong\operatorname{im}\rho$. The set $G/H$ has $n$ elements by [L10], so [L5] gives $|\operatorname{Sym}(G/H)|=n!$; [L6] therefore gives $|G/N|=|\operatorname{im}\rho|\mid n!$, that is, $[G:N]\mid n!$ by [L10]. [step 1.1, L3, L4, L5, L6, L10]

3.1 Every subgroup $K$ containing $H$ also contains $N$ by [L2]. If $\pi(x)\in\pi[K]$, then $\pi(x)=\pi(k)$ for some $k\in K$, so $k^{-1}x\in N\le K$ and hence $x\in K$; thus $K=\pi^{-1}[\pi[K]]$. Therefore $K\mapsto\pi[K]$ injects the set of such overgroups into the power set of the now known finite set $G/N$, which is finite by [L8] and [L9]. [step 2.1, L2, L7, L8, L9]

4.1 Thus the core is normal and finite-index, its index divides $n!$, and the collection of subgroups containing $H$ is finite. [step 1.1, step 2.1, step 3.1] ∎

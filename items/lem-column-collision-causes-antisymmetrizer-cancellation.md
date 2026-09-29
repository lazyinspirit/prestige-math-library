---
id: lem-column-collision-causes-antisymmetrizer-cancellation
kind: lemma
title: Column collision cancels antisymmetrization
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-column-antisymmetrizer-polytabloid-and-specht-module, def-row-and-column-stabilizers-of-a-tableau, def-young-subgroup-tabloid-and-permutation-module, thm-sign-is-a-homomorphism, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Theorem 4.1(a) proof, printed p. 15"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Section 2.1, printed pp. 19-20"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $t$ have shape $\lambda$ and let $\{s\}$ be a $\mu$-tabloid of the same
$n$. If two entries $a,b$ lie in one row of $s$ and in one column of $t$, then
$$\kappa_t\cdot\{s\}=0.$$

## Facts & Assumptions

**Given:** An integer $n\ge0$, partitions $\lambda,\mu\vdash n$, a
$\lambda$-tableau $t$, a $\mu$-tabloid $\{s\}$, and distinct labels $a,b$
lying in one row of $s$ and one column of $t$.

[F1] The row stabilizer preserves each row set, and the column stabilizer
preserves each column set ([[def-row-and-column-stabilizers-of-a-tableau]]).

[F2] A tabloid records row sets, so the order of entries within each row is
forgotten ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F3] The column antisymmetrizer is
$\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F4] The sign function is a group homomorphism
([[thm-sign-is-a-homomorphism]]).

[F5] Sign is defined by
$\operatorname{sgn}(\sigma)=(-1)^{\operatorname{inv}(\sigma)}$
([[def-inversions-inversion-number-and-sign]]).

[F6] The library's $1,\dots,n$ sign convention is transported by the
canonical relabelling from the finite-ordinal convention
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

## Proof

**Proof technique:** direct.

1.1 Put $\tau=(a\,b)$. Since $a,b$ are in the same column of $t$, $\tau$ preserves every column set and lies in $C_t$ by [F1]. Since they are in the same row of $s$, it preserves every row set of $s$; therefore $\tau\cdot\{s\}=\{s\}$ by [F1,F2]. [given, F1, F2, construct]

1.2 The labels $a,b$ are distinct, so $n\ge2$. The canonical relabelling in [F6] preserves order and inversion number. If $a<b$, the one-line permutation for $\tau=(a\,b)$ has one inversion from $(a,b)$ and two inversions for each intermediate label, so its inversion number is $1+2(b-a-1)=2(b-a)-1$, which is odd. Thus $\operatorname{sgn}(\tau)=-1$ by [F5]. Order permutations by one-line notation and take the least element in each right coset $g\langle\tau\rangle$ of $C_t$. These canonical representatives partition $C_t$ into pairs $g,g\tau$, whence $\kappa_t=\sum_g(\operatorname{sgn}(g)g+\operatorname{sgn}(g\tau)g\tau)=\sum_g\operatorname{sgn}(g)g(1-\tau)$ by [F3,F4]. The least representative is uniquely defined in each finite coset, so no choice principle is used. [given, F3, F4, F5, F6, construct, algebra]

2.1 Applying the last expression to $\{s\}$, every term is zero because $(1-\tau)\cdot\{s\}=\{s\}-\{s\}=0$ by step 1.1. Thus $\kappa_t\cdot\{s\}=0$, as claimed. [step 1.1, step 1.2, algebra] ∎

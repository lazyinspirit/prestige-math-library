---
id: lem-corson-rational-metric-not-metacompact
kind: lemma
title: "Corson's rational metric space is not metacompact"
status: published
origin: pipeline
deps: [def-corson-ordered-rational-permutation-model, def-paracompact-space, def-metacompact-space, def-cover-refinement-and-local-finiteness, def-metric-space, def-metric-ball, def-metric-topology, def-permutation-support-system-and-normal-filter]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "§§2-3, pp. 2-4"
verification:
  audited: 2026-09-22
---

## Statement

In Corson's permutation model of
[[def-corson-ordered-rational-permutation-model]], the rational Urysohn metric
space has an open cover with no point-finite refinement; in particular it is not
metacompact ([[def-metacompact-space]], [[def-paracompact-space]],
[[def-cover-refinement-and-local-finiteness]]).

## Facts & Assumptions

**Given:** The atom space $U_{\mathbb{Q}}^{<}$ in its model, the open cover
$\mathcal U=\{B(c,1/2):c\in A\}$, and a supposed point-finite open refining
cover.

[F1] The model is a ZFA model in which every set has a finite support; an element of the model has a finite support $E \subseteq A$ fixed by the automorphisms used below ([[def-corson-ordered-rational-permutation-model]], [[def-permutation-support-system-and-normal-filter]]).

[F2] $U_{\mathbb{Q}}^{<}$ is universal and ultrahomogeneous for finite ordered rational metric spaces: every finite such space embeds in it, and every finite partial isometry preserving the order extends to an automorphism of the whole space. [given, source]

[L1] Every member of a refinement of $\mathcal U$ has diameter at most $1$: if $V\subseteq B(c,1/2)$ and $x,y\in V$, then $d(x,y)<1$ by the triangle inequality. The radius-$1/2$ balls form an open cover ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-space]]).

[L2] If $V$ is open and $a\in V$, then some positive-radius metric ball about $a$ is contained in $V$; shrinking the radius to $1/m$ for a sufficiently large integer $m\geq1$ preserves the inclusion ([[def-metric-topology]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $\mathcal U$ has a point-finite open refining cover $\mathcal V$. Since $\mathcal V$ is a set of the model, fix a finite support $E\subseteq A$ of $\mathcal V$ by [F1]. Enlarge $E$ by one atom if necessary, so that $E$ is nonempty, without destroying the support property. Let $D$ be the diameter of $E$. [assume-contra, L1, F1]

2.1 By universality in [F2], choose $a\in A\setminus E$ such that $e<a$ and $d(a,e)=D+4$ for every $e\in E$. Fix an arbitrary integer $n\geq 1$. Since $\mathcal V$ covers $A$, choose $V\in\mathcal V$ with $a\in V$; by [L2], choose an integer $m\geq1$ with $B(a,1/m)\subseteq V$, and put $K:=nm$. [step 1.1, F2, L2]

3.1 Extend $E\cup\{a\}$, using [F2], by points $a_0<\cdots<a_{3K}=a$ such that $d(a_i,e)=D+4$ for $e\in E$ and $d(a_i,a_j)=|i-j|/K$ for $0\leq i,j\leq3K$. These prescriptions form a finite ordered rational metric space: the old-to-new distances are constant and exceed the diameter of both $E$ and the new chain. Ultrahomogeneity then extends the partial isometry fixing $E$ and sending $a_i$ to $a_{i+1}$ for $0\leq i<3K$ to an automorphism $\varphi$. Since $E$ supports $\mathcal V$, every $\varphi^j(V)$ belongs to $\mathcal V$. [step 2.1, F2, F1]

4.1 The points $a_{3K-n+1},\ldots,a_{3K}$ lie in $B(a,1/m)\subseteq V$, because their distances from $a=a_{3K}$ are all strictly less than $n/K=1/m$. Hence $a\in\varphi^j(V)$ for every $0\leq j<n$. [step 2.1, step 3.1]

5.1 By [L1], $V$ has diameter at most $1$. Consequently, if $a_i\in V$, then $i\geq2K$. Let $L$ be the least index with $a_L\in V$. Step 4.1 gives $2K\leq L\leq3K-n+1$. For $0\leq j<n$, one has $a_{L+j}\in\varphi^j(V)$. Moreover, if $K\leq i<L+j$, then $a_i\notin\varphi^j(V)$: otherwise $a_{i-j}=\varphi^{-j}(a_i)$ would lie in $V$, while $0\leq i-j<L$, contradicting the minimality of $L$. [L1, step 3.1, step 4.1]

6.1 The members $\varphi^j(V)$ for $0\leq j<n$ are pairwise distinct. Indeed, for $j<j'<n$, the point $a_{L+j}$ belongs to $\varphi^j(V)$, whereas step 5.1, applied with $i=L+j<L+j'$, shows that it does not belong to $\varphi^{j'}(V)$. Thus, for every $n\geq1$, the map $j\mapsto\varphi^j(V)$ injects $n$ into $\{W\in\mathcal V:a\in W\}$. The set on the right is therefore not finite, contradicting point-finiteness at $a$. Hence $\mathcal U$ has no point-finite open refining cover, so the space is not metacompact and, a fortiori, not paracompact. [step 4.1, step 5.1, discharge-contradiction] ∎

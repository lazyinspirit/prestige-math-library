---
id: lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed
kind: lemma
title: "A vector field along an embedded submanifold extends to a neighbourhood and globally when the submanifold is closed"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-vector-field-as-a-tangent-bundle-section, def-embedded-submanifold-and-slice-chart, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $S\hookrightarrow M$ be a smooth embedded submanifold, and let $Y$ be a
smooth vector field along $S$, meaning that $Y(p)\in T_pM$ for each $p\in S$
and $Y$ depends smoothly on $p$ in slice charts. Then:

1. there is an open neighbourhood $U$ of $S$ in $M$ and a smooth vector field
   $\widetilde Y$ on $U$ with $\widetilde Y|_S=Y$;
2. if $S$ is closed in $M$, then there is a global smooth vector field
   $\widehat Y$ on $M$ with $\widehat Y|_S=Y$.

## Facts & Assumptions

**Given:** An embedded submanifold $S\hookrightarrow M$ and a smooth vector field $Y$ along $S$.

[L1] Embedded submanifolds admit slice charts ([[def-embedded-submanifold-and-slice-chart]]).

[L2] Smooth partitions of unity subordinate to open covers exist on smooth manifolds ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[L3] For a closed set inside an open set, there is a smooth cutoff that equals $1$ on the closed set and has support in the open set ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

[L4] A closed embedded submanifold has a tubular neighbourhood ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every point of $S$ has a slice chart $(U_\alpha,x_\alpha)$ in which $S\cap U_\alpha$ is given by $x_\alpha^{k+1}=\cdots=x_\alpha^n=0$. On that slice, $Y$ has smooth coordinate components, so extending those coefficient functions constantly in the normal coordinates defines a smooth vector field $\widetilde Y_\alpha$ on $U_\alpha$. [L1, given]

2.1 The open sets $U_\alpha$ cover $S$. Choose a smaller open neighbourhood $U\subseteq \bigcup_\alpha U_\alpha$ of $S$, and by [L2] choose a partition of unity $(\rho_\alpha)$ on $U$ subordinate to $(U_\alpha\cap U)$. Then $\widetilde Y:=\sum_\alpha \rho_\alpha \widetilde Y_\alpha$ is a smooth vector field on $U$, and on $S$ the coefficients sum to those of $Y$, so $\widetilde Y|_S=Y$. [L2, step 1.1]

3.1 Assume now that $S$ is closed. By [L4], $S$ has an open tubular neighbourhood $V$, and step 2.1 gives a smooth extension $\widetilde Y$ on some neighbourhood $U$ of $S$. Replace $U$ by $U\cap V$, which is still an open neighbourhood of $S$. [L4, step 2.1]

4.1 Because $S$ is closed in the open set $U$, [L3] gives a smooth function $\chi:M\to\mathbb R$ with $\chi=1$ on $S$ and $\operatorname{supp}\chi\subseteq U$. Define $\widehat Y:=\chi\,\widetilde Y$ on $U$ and $\widehat Y:=0$ on $M\setminus \operatorname{supp}\chi$. This is a smooth global vector field and restricts to $Y$ on $S$. [L3, step 3.1, construct]

5.1 Therefore every smooth vector field along an embedded submanifold extends to a neighbourhood, and to all of $M$ when the submanifold is closed. [step 2.1, step 4.1] ∎

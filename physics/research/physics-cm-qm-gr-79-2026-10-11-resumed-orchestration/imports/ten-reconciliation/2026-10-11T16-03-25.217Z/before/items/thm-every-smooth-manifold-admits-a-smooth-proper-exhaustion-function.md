---
id: thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function
kind: theorem
title: "Every smooth manifold admits a smooth proper exhaustion function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, def-smooth-manifold, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-closed-subspace-of-a-compact-space-is-compact, lem-compactness-of-a-subspace-is-ambient, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, prop-smooth-maps-are-continuous, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-09
    scope: "Owner-authorized countable-choice and neighbourhood-local-finiteness exhaustion repair; local checks only, no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Proposition 2.28, p.46"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Every smooth manifold $M$ admits a smooth nonnegative function $h:M\to[0,\infty)$ whose closed sublevel sets are compact. In particular $h$ is proper: the inverse image of each compact subset of $[0,\infty)$ is compact.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and countable choice.

[A1] Countable choice selects from countably many nonempty sets ([[def-countable-choice]]).

[F1] A smooth manifold is Hausdorff and second countable. Small balls in smooth charts have compact closures ([[def-smooth-manifold]], [[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]).

[L1] Compact subsets of Hausdorff spaces are closed; closed subsets and finite unions of compact subsets are compact; compact subsets have finite subcovers from ambient indexed open covers ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[lem-compactness-of-a-subspace-is-ambient]]).

[L2] For a compact set $K$ in an open set $V$, there is a smooth $\chi:M\to[0,1]$ equal to one near $K$ and supported in $V$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[L3] A locally finite family of smooth functions has a smooth sum, and smooth maps are continuous ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]], [[prop-smooth-maps-are-continuous]]).

[L4] Constants and differences of smooth functions are smooth, by the coordinate derivative rules ([[thm-algebra-of-derivatives]], [[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 If $M=\varnothing$, the empty function has all the stated properties. Otherwise form the set of all relatively compact smooth coordinate-ball tuples, including their chart data. Their balls cover $M$ by [F1]. Fix a countable basis. For each nonempty basis member contained in an eligible ball, [A1] selects one such tuple. The selected balls cover $M$, since every point lies in a basis member contained in an eligible ball. Enumerate them as $(B_n)_{n\ge1}$, repeating one if the nonempty selected family is finite. This uses countably many choices, not a choice at every point. [A1, F1, given, construct]

2.1 Put $H_r=\bigcup_{n\le r}\overline{B_n}$. By [L1], these are compact and closed, and their interiors form an increasing open cover of $M$. Set $r_1=1$ and recursively let $r_{m+1}$ be the least integer greater than $r_m$ satisfying $H_{r_m}\subseteq\operatorname{int}H_{r_{m+1}}$. Compactness gives such an integer by taking a finite subcover of $H_{r_m}$ from the increasing interiors. For $K_m=H_{r_m}$, one has $$K_m\subseteq\operatorname{int}K_{m+1},\qquad M=\bigcup_{m\ge1}\operatorname{int}K_m.$$ The recursion is by least integers and needs no dependent choice. [L1, step 1.1, construct]

3.1 For each $n\ge1$, the set of smooth cutoffs $\chi_n:M\to[0,1]$ equal to one near $K_n$ and supported in $\operatorname{int}K_{n+1}$ is nonempty by [L2]. Use [A1] to choose one cutoff for each $n$. Put $g_n=1-\chi_n$, a smooth nonnegative function by [L4]. [A1, L2, L4, step 2.1, choose]

4.1 The support family $(\operatorname{supp}g_n)$ is locally finite, not merely pointwise finite. Indeed, for $x\in\operatorname{int}K_t$ and every $n\ge t$, one has $\operatorname{int}K_t\subseteq K_n$, so $\chi_n=1$ on that whole open set. Thus $g_n$ vanishes there and its support misses $\operatorname{int}K_t$. This neighbourhood meets at most the supports with $n<t$. Hence $$h=\sum_{n\ge1}g_n$$ is smooth, continuous and nonnegative by [L3]. [L3, step 2.1, step 3.1]

5.1 Let $c\ge0$ and choose an integer $N>c$. If $x\notin K_{N+1}$, then for each $1\le n\le N$ the support of $\chi_n$ is contained in $K_{n+1}\subseteq K_{N+1}$, so $\chi_n(x)=0$ and $g_n(x)=1$. Consequently $h(x)\ge N>c$. Thus $$\{x:h(x)\le c\}\subseteq K_{N+1}.$$ This sublevel set is closed by continuity of $h$, hence compact by [L1]. For $c<0$ it is empty and therefore compact. [L1, step 2.1, step 3.1, step 4.1, algebra]

6.1 Finally let $C\subseteq[0,\infty)$ be compact. It is closed by [L1], and the increasing open cover $([0,n))_{n\ge1}$ of $[0,\infty)$ gives an integer $N$ with $C\subseteq[0,N]$ by a finite subcover. Therefore $h^{-1}(C)$ is a closed subset of the compact sublevel set $\{h\le N\}$, hence compact by [L1]. Together with the empty case, this proves properness and the stated exhaustion properties. [L1, step 1.1, step 4.1, step 5.1] ∎

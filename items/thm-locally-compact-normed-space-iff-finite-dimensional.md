---
id: thm-locally-compact-normed-space-iff-finite-dimensional
kind: theorem
title: "A normed space is locally compact if and only if it is finite-dimensional"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-coordinate-map-for-a-finite-dimensional-normed-space, lem-riesz-lemma,
       def-locally-compact-space, def-metric-topology,
       thm-compact-implies-complete-and-totally-bounded,
       cor-rn-is-locally-compact-and-sigma-compact,
       thm-complex-numbers-are-the-real-coordinate-plane,
       cor-finite-dimensional-subspaces-are-closed]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$, equipped
with its norm topology. Then the following are equivalent.

1. $X$ is locally compact ([[def-locally-compact-space]]).
2. $X$ admits an ordered basis of finite length.

This is the page's precise reading of "finite-dimensional".

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb K\in\{\mathbb R,\mathbb C\}$.

[L1] A chosen ordered basis yields a topological isomorphism with a coordinate
space ([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[L2] Riesz's lemma: for every proper closed normed subspace $M\subsetneq X$ and
$0<\alpha<1$ there is a unit vector at distance $>\alpha$ from $M$
([[lem-riesz-lemma]]).

[L3] Compact metric spaces are totally bounded
([[thm-compact-implies-complete-and-totally-bounded]]).

[L4] $\mathbb R^n$ is locally compact for $n\ge1$
([[cor-rn-is-locally-compact-and-sigma-compact]]).

[L5] $\mathbb C$ is the real coordinate plane
([[thm-complex-numbers-are-the-real-coordinate-plane]]).

[L6] In a metric space, local compactness at a point is equivalent to the
existence of an open ball around that point contained in a compact subset
([[def-locally-compact-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ admits an ordered basis of length $n$. If $\mathbb K=\mathbb R$, the coordinate space $\mathbb R^n$ is locally compact by [L4] when $n\ge1$, and $\mathbb R^0=\{0\}$ is compact, hence locally compact. If $\mathbb K=\mathbb C$, then $\mathbb C^n$ identifies with $\mathbb R^{2n}$ by [L5], so the same conclusion holds there. By [L1], $X$ is homeomorphic to that coordinate space, hence locally compact. [L1, L4, L5]

1.2 Assume now that $X$ is locally compact. By [L6], applied to the norm metric, $0$ has a compact neighbourhood $K$ containing some open ball $B(0,r)$ with $r>0$. The closed ball $$\overline B\left(0,\frac r2\right):=\left\{x\in X:\|x\|\le \frac r2\right\}$$ is a closed subset of $K$ and is therefore compact. [L6, choose]

1.3 For the successor step, let $M_m:=\operatorname{span}\{x_0,\dots,x_m\}$. The finite list $x_0,\dots,x_m$ generates $M_m$, so by deleting dependent terms if necessary one gets an ordered basis of finite length for $M_m$. Thus $M_m\subsetneq X$ by the contradiction hypothesis, and [[cor-finite-dimensional-subspaces-are-closed]] makes $M_m$ closed. Applying [L2] with $\alpha=1/2$ yields a unit vector $x_{m+1}$ with $\operatorname{dist}(x_{m+1},M_m)>1/2$. In particular $\|x_{m+1}-x_j\|>1/2$ for every $j\le m$. [L2, [[cor-finite-dimensional-subspaces-are-closed]], choose]

2.1 Suppose for contradiction that $X$ admits no ordered basis of finite length. We recursively build, for each $m\ge0$, unit vectors $x_0,\dots,x_m\in X$ such that $$\|x_j-x_k\|>\frac12 \qquad (j\ne k).$$ For $m=0$ choose any nonzero $x_0$ and normalize it. [step 1.2, assume-contra, choose]

3.1 Every $x_j$ lies in the closed ball $\overline B(0,r/2)$ after rescaling by $r/2$: namely $y_j:=(r/2)x_j$ satisfies $\|y_j\|=r/2$, so $y_j$ lies in that compact set. Also $$\|y_j-y_k\|=\frac r2\|x_j-x_k\|>\frac r4 \qquad (j\ne k).$$ [step 2.1, step 1.3, algebra]

4.1 By [L3], the compact metric space $\overline B(0,r/2)$ is totally bounded. Taking $\varepsilon=r/8$, it admits a finite $\varepsilon$-net. But one $\varepsilon$-ball can contain at most one of the points $y_j$, since distinct ones are more than $r/4=2\varepsilon$ apart. Therefore a finite $\varepsilon$-net cannot cover arbitrarily large finite sets $\{y_0,\dots,y_m\}$, contradiction. [L3, step 3.1, assume-contra]

5.1 The contradiction in step 4.1 shows that $X$ must admit an ordered basis of finite length. Together with step 1.1, this proves the equivalence. [step 1.1, step 4.1, discharge-contradiction] ∎

## Remarks

- The reverse implication uses only one finite recursion at a time. No choice
  principle is needed.

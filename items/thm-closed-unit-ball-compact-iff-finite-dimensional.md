---
id: thm-closed-unit-ball-compact-iff-finite-dimensional
kind: theorem
title: "The closed unit ball is compact if and only if the normed space is finite-dimensional"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-coordinate-map-for-a-finite-dimensional-normed-space, lem-riesz-lemma,
       cor-finite-dimensional-subspaces-are-closed, def-metric-compactness,
       thm-compact-implies-complete-and-totally-bounded, thm-heine-borel-rn,
       thm-complex-numbers-are-the-real-coordinate-plane]
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
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Paul Howard and Eleftherios Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice"
      url: "https://commons.emich.edu/fac_sch2017/127/"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a normed space over $\mathbb K\in\{\mathbb R,\mathbb C\}$ and write

$$\overline B_X:=\{x\in X:\|x\|\le1\}.$$

Then the following are equivalent.

1. $\overline B_X$ is compact in the norm metric ([[def-metric-compactness]]).
2. $X$ admits an ordered basis of finite length.

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb K\in\{\mathbb R,\mathbb C\}$ and
its closed unit ball $\overline B_X$.

[L1] A chosen ordered basis yields a topological isomorphism with a coordinate
space ([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[L2] Riesz's lemma gives a unit vector at distance $>\alpha$ from every proper
closed subspace ([[lem-riesz-lemma]]).

[L3] Finite-dimensional normed subspaces are closed
([[cor-finite-dimensional-subspaces-are-closed]]).

[L4] Compact metric spaces are totally bounded
([[thm-compact-implies-complete-and-totally-bounded]]).

[L5] Closed and bounded subsets of $\mathbb R^m$ are compact for $m\ge1$
([[thm-heine-borel-rn]]).

[L6] $\mathbb C$ is the real coordinate plane
([[thm-complex-numbers-are-the-real-coordinate-plane]]).

## Proof

**Proof technique:** direct.

1.1 Assume $X$ admits an ordered basis of length $n$, and let $T:\mathbb K^n\to X$ be the coordinate isomorphism from [L1]. Then $T^{-1}[\overline B_X]$ is closed in $\mathbb K^n$, because $T$ is continuous, and bounded in the coordinate $\ell^1$ norm, because $T^{-1}$ is bounded. [L1]

1.2 Assume conversely that $\overline B_X$ is compact. Then [L4] makes it totally bounded. Suppose for contradiction that $X$ admits no ordered basis of finite length. [L4, assume-contra]

1.3 Let $F\subseteq \overline B_X$ be a finite $1/2$-net, and put $M:=\operatorname{span}(F)$. The finite set $F$ generates $M$, so by deleting dependent terms one gets an ordered basis of finite length for $M$; thus [L3] makes $M$ closed. Since $X$ is not finitely generated, $M\subsetneq X$. [L3, choose]

2.1 In the real case $\mathbb K=\mathbb R$, if $n=0$ then $\overline B_X=\{0\}$ is compact. If $n\ge1$, step 1.1 and [L5] show that $T^{-1}[\overline B_X]$ is compact in $\mathbb R^n$, hence $\overline B_X$ is compact as its homeomorphic image. [step 1.1, L5]

2.2 In the complex case $\mathbb K=\mathbb C$, [L6] identifies $\mathbb C^n$ with $\mathbb R^{2n}$. Under that identification the coordinate $\ell^1$ norm is equivalent to a real norm on $\mathbb R^{2n}$, so the bounded closed set $T^{-1}[\overline B_X]$ is also closed and bounded in Euclidean space. If $n=0$ it is a singleton; if $n\ge1$, [L5] makes it compact in $\mathbb R^{2n}$, hence compact in $\mathbb C^n$ and therefore in $X$. [step 1.1, L5, L6]

2.3 Applying [L2] with $\alpha=1/2$ gives a unit vector $x\in X$ with $\operatorname{dist}(x,M)>1/2$. Since $F$ is a $1/2$-net in the unit ball and $x\in\overline B_X$, some $y\in F$ satisfies $\|x-y\|<1/2$. But $y\in M$, which contradicts $\operatorname{dist}(x,M)>1/2$. [L2, step 1.3, assume-contra]

3.1 Therefore $X$ must admit an ordered basis of finite length. Together with steps 2.1 and 2.2, this proves the equivalence. [step 2.1, step 2.2, step 2.3, discharge-contradiction] ∎

## Remarks

- The reverse implication is choice free: compactness gives one finite net, and
  one application of Riesz's lemma is enough.

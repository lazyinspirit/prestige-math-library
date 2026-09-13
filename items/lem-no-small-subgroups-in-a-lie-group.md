---
id: lem-no-small-subgroups-in-a-lie-group
kind: lemma
title: No small subgroups in a Lie group
status: published
origin: pipeline
deps: [def-differential-of-a-smooth-map]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Lie-group multiplication and exponential-chart discussion in Chapter 20, especially Proposition 20.8, printed pages 519–521
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Every finite-dimensional Lie group $G$ has an open identity neighborhood
$U$ containing no subgroup other than $\{e\}$.

## Facts & Assumptions

**Given:** A finite-dimensional Lie group $G$ with identity $e$.

[F1] A smooth map in charts is differentiable, and its differential is the
linear first-order part. [[def-differential-of-a-smooth-map]].

## Proof

**Proof technique:** a local expansion of the squaring map.

1.1 Choose a smooth chart $\varphi:W\to\varphi(W)\subseteq\mathbb R^n$ with $\varphi(e)=0$. On a smaller neighborhood of $0$, the coordinate form of the squaring map is $s(v)=\varphi(\varphi^{-1}(v)^2)$. The differential of multiplication at $(e,e)$ sends $(X,Y)$ to $X+Y$: its restrictions to the two coordinate axes are the identity because $ge=g$ and $eh=h$, and the differential is linear. Therefore $ds_0(X)=2X$. [given, F1, algebra]

2.1 Fix a Euclidean norm. Differentiability at $0$ gives $r>0$ such that $B_r(0)\subseteq\varphi(W)$, the coordinate squaring map is defined there, and $$\lVert s(v)-2v\rVert\le\tfrac12\lVert v\rVert$$ whenever $\lVert v\rVert<r$. Hence $\lVert s(v)\rVert\ge\tfrac32\lVert v\rVert$ throughout that ball. [F1, step 1.1]

3.1 Put $U=\varphi^{-1}(B_r(0))$. Suppose a subgroup $K\subseteq U$ contains $h\ne e$, and write $v_j=\varphi(h^{2^j})$. Because every power belongs to $K\subseteq U$, all $v_j$ lie in $B_r(0)$, while $v_{j+1}=s(v_j)$. Step 2.1 gives $$\lVert v_j\rVert\ge(3/2)^j\lVert v_0\rVert.$$ Since $h\ne e$, $\lVert v_0\rVert>0$, so the right side eventually exceeds $r$, contradicting $v_j\in B_r(0)$. [step 2.1, algebra]

4.1 Thus every subgroup contained in $U$ is $\{e\}$. In dimension zero, the same argument reduces to the open singleton identity chart. No choice principle is used: only one chart, one norm, and one radius are fixed. [step 1.1, step 2.1, step 3.1] ∎

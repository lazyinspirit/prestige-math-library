---
id: "lem-tree-cones-give-uniform-two-side-control"
kind: "lemma"
title: "Tree cones force uniform control of sides with a common endpoint"
status: "draft"
origin: "pipeline"
deps: ["def-rescaled-ultralimit-and-asymptotic-cone", "lem-geodesic-segments-have-isometric-ultralimits", "lem-triangle-extrema-and-real-tree-tripod-rules", "def-geodesic-rays-and-lines", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §11.20 Lemma 11.168(a), PDF p.443"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Assume AC and fix a free ultrafilter $\omega$. Let $X$ be geodesic and suppose $\operatorname{Cone}_\omega(X,e,\lambda)$ is a real tree for every basepoint sequence and every positive ordinary-null scale sequence. There exists $M>0$ such that, for every $x,y,z$ and all choices of the two segments,

$$d(y,z)>1\quad\Longrightarrow\quad d_H([x,y],[x,z])\le M d(y,z).$$

## Facts & Assumptions

**Given:** A geodesic X with the stated all-basepoint/all-scale tree-cone hypothesis for fixed free omega; AC.

[F1] Every represented point on a sequence of sides belongs to its parameterized interval, ray or line limit. ([[lem-geodesic-segments-have-isometric-ultralimits]]).

[F2] Finite side distances attain extrema; in a tree finite-Hausdorff rays of common origin and finite-Hausdorff lines coincide. ([[lem-triangle-extrema-and-real-tree-tripod-rules]]).

[F3] AC permits selection of countably many violating triangles and nearest points. ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 If no such $M$ exists, for each $n\ge1$ select two sides with $q_n=d(y_n,z_n)>1$ and $D_n=d_H([x_n,y_n],[x_n,z_n])>nq_n$. Extrema exist on the finite sides. Exchange the endpoint names when necessary and select $a_n\in[x_n,y_n]$ attaining $d(a_n,[x_n,z_n])=D_n$. Select a nearest point $b_n$ on the other side. AC supplies these countable choices. [F2, F3]

2.1 Base at $a_n$ and scale by $1/D_n$. Since $D_n>n$, the scales tend to zero ordinarily, so the cone is a real tree. Both sides meet its bounded basepoint neighbourhood, at $a_n$ and $b_n$. Each point on either side has a point on the other within $D_n$. For any bounded represented sequence, such nearest points are bounded by the triangle inequality. Thus their limit images $S,T$ satisfy $d_H(S,T)\le1$ and $d(a,T)=1$, where $a=[a_n]$: every represented point of $T$ has distance at least one from $a$, and $[b_n]$ attains one. [step 1.1, F1, F2, F3]

3.1 The rescaled distances of $y_n,z_n$ from $a_n$ differ by at most $q_n/D_n<1/n$. They therefore are both finite in the extended ultralimit or both infinite; in the finite case their classes are equal. The common endpoint $x_n$ likewise either has finite rescaled distance or escapes. Finite values can be made uniformly bounded by replacing coordinates off a large set; endpoint distance limits classify the side domains by [F1]. [step 1.1, step 2.1, F1]

4.1 If both ends are finite, $S,T$ are segments with the same two endpoints and coincide by tree uniqueness. If precisely one end is finite, $S,T$ are rays with the same finite endpoint and finite Hausdorff distance, so coincide. If both ends escape, they are lines at finite Hausdorff distance, so again coincide. These cases exhaust the endpoint limits, and every case contradicts $a\in S$ and $d(a,T)=1$. Hence the asserted finite $M$ exists; enlarging it if necessary makes it positive. [step 2.1, step 3.1, F1, F2] ∎

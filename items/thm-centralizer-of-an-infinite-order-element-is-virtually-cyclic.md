---
id: thm-centralizer-of-an-infinite-order-element-is-virtually-cyclic
kind: theorem
title: "The centralizer of an infinite-order element in a hyperbolic group is virtually cyclic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-centralizer-of-a-subgroup, lem-centralizers-and-normalizers-are-subgroups, thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.5.2"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Let $G$ be a hyperbolic group and let $g \in G$ have infinite order. Then its
centralizer

$$
C_G(g)=\{h \in G : hg=gh\}
$$

contains a cyclic subgroup of finite index.

## Facts & Assumptions

**Given:** A hyperbolic group $G$ and an infinite-order element $g \in G$.

[A1] There is $L\ge0$ such that every geodesic segment from $1$ to $g^n$
lies in the $L$-neighborhood of the powers of $g$.

[A2] A geodesic quadrilateral in a $\delta$-hyperbolic Cayley graph is
$2\delta$-thin, and every metric ball in a locally finite Cayley graph is
finite.

[L1] Infinite-order elements are undistorted
([[thm-infinite-order-elements-of-hyperbolic-groups-are-undistorted]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [A1], the powers of $g$ form a quasi-axis: geodesics joining distant powers stay uniformly close to the power orbit. [L1, A1]

2.1 Let $s\in C_G(g)$ and choose $m$ so large that the two long sides of the quadrilateral with vertices $1,g^m,sg^m,s$ have points outside the $2\delta$-neighborhoods of its short sides. By [A2], some point on $[1,g^m]$ is within $2\delta$ of $[s,sg^m]$. Using [A1] on both long sides gives integers $i,j$ with $d(g^i,sg^j)\le2L+2\delta$. Since $s$ commutes with $g$, this says that the coset $\langle g\rangle s$ has a representative of word length at most $2L+2\delta$. [A1, A2, step 1.1, choose, algebra]

3.1 The ball of radius $2L+2\delta$ is finite by [A2], so step 2.1 leaves only finitely many cosets of $\langle g\rangle$ in $C_G(g)$. Hence $\langle g\rangle$ has finite index in $C_G(g)$, and the centralizer is virtually cyclic. [A2, step 2.1] ∎

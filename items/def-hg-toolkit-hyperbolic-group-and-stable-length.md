---
id: "def-hg-toolkit-hyperbolic-group-and-stable-length"
kind: "definition"
title: "Hg toolkit hyperbolic group and stable length"
deps: ["def-hg-toolkit-slim-triangles-products-and-four-point-constants", "def-word-metric", "def-finitely-generated-group", "lem-group-power-laws", "lem-word-length-is-well-defined-and-satisfies-the-length-laws", "def-complete-ordered-field"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Hamann §5.1 definitions and Proposition 5.2.5"
      url: "https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Definition

Fix a group $G$ with a specified finite generating set $S$, in the sense of [[def-finitely-generated-group]], and the word metric of [[def-word-metric]]. Use the unit-edge geometric Cayley realization: take vertices $G$ and unoriented labelled edges from $g$ to $gs$ for the generators, identifying an edge with its reversal. Parallel edges and loops, if present, are retained. Its path metric restricts to the word metric on vertices.

The **standing hyperbolic-group hypothesis** is that this specified geodesic realization has $\delta$-slim triangles, for some specified $\delta\ge0$, in the sense of [[def-hg-toolkit-slim-triangles-products-and-four-point-constants]]. Independence of generating set is not assumed here. A group is **elementary** if it is finite or virtually cyclic; virtually cyclic means it has a cyclic subgroup with finitely many left cosets.

For $g\in G$, its **stable translation length** in this generating set is
$$ \tau_S(g)=\lim_{n\to\infty}\frac{|g^n|_S}{n}=\inf_{k\ge1}\frac{|g^k|_S}{k}. $$
The following argument proves existence, without hyperbolicity or AC.

## Facts & Assumptions

**Given:** $G,S,g$ as above; all lengths below are with respect to $S$.

[F1] Powers satisfy $g^{m+n}=g^m g^n$ by [[lem-group-power-laws]].

[F2] Word length is finite, subadditive, invariant under inversion and vanishes at the identity by [[lem-word-length-is-well-defined-and-satisfies-the-length-laws]].

[F3] Every nonempty bounded-below set of real numbers has an infimum by [[def-complete-ordered-field]].

## Proof

1.1 For completeness, the realization is geodesic as asserted in the definition. For two interior-edge points, any finite edge route either stays on their common edge, when there is one, or first reaches one of the at most two endpoints of the first edge and finally leaves one of the endpoints of the last edge. Between those vertices its length is at least their word distance. Conversely each of these at most four endpoint routes is attained by a shortest word, with the specified initial and final partial edges. Include the direct same-edge interval as another candidate. The minimum of this finite list is attained and positive for distinct points; it defines the path metric. Concatenation gives the triangle inequality. A minimizing route, parametrized by length, is isometric, since a shorter route between two of its points would shorten it. At vertices the same argument gives exactly word distance. Loops are covered by the two ends of their interval before identification; coincident endpoints cause no problem. [F2, given]

1.2 Put $a_n=|g^n|$ and $a_0=0$. Then $0\le a_{n+m}\le a_n+a_m$, so the nonempty set $\{a_k/k:k\ge1\}$ is bounded below by zero. Its infimum $t$ exists and satisfies $0\le t\le a_1$. [F1, F2, F3]

2.1 Fix $\eta>0$. By the defining property of the infimum there is a positive integer $k$ such that $a_k/k<t+\eta/2$. For each $n\ge1$ write $n=qk+r$, $0\le r<k$. Repeated subadditivity gives $a_n\le q a_k+a_r$. With $C=\max_{0\le r<k}a_r$, it follows that $t\le a_n/n\le a_k/k+C/n$. Here $q/n\le1/k$ and $a_k\ge0$ justify the last inequality. [step 1.2, algebra]

3.1 For all sufficiently large $n$, $C/n<\eta/2$, giving $t\le a_n/n<t+\eta$. The requisite large integers exist in a real complete ordered field: if the natural numbers had a finite supremum $u$, some natural $m>u-1$ would give $m+1>u$, a contradiction. Thus $a_n/n\to t$. This also treats $C=0$ and $k=1$ directly. If $g=e$, every $a_n$ and $t$ is zero; if $g$ has finite order $m$, $a_m=0$ gives $t=0$. Only one witness $k$ for a given tolerance and finitely many endpoint routes were used, so no AC is needed. [step 2.1, F3, F2, algebra] ∎

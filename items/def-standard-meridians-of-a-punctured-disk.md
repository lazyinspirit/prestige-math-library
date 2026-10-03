---
id: def-standard-meridians-of-a-punctured-disk
kind: definition
title: "Standard meridians of a punctured disk"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 0
deps: [def-boundary-fixed-mapping-class-group-of-a-punctured-disk, def-based-loops-and-fundamental-group, def-path-connected, def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 8-10 (Figure 3 and the loops x_1,...,x_n)"
      url: "https://arxiv.org/pdf/1010.0321"
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, printed pp. 111-114 (the generators t_1,...,t_n of the free group of the punctured disk)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
---

## Definition

Let $n\in\mathbb N$, let $D^2=\{z\in\mathbb C:|z|\le1\}$ and
$Q_n=(q_1,\dots,q_n)$ be the closed unit disk and the base configuration of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], so that
$q_1<\dots<q_n$ are distinct points of the real axis of
$\operatorname{int}D^2$. Fix the boundary basepoint
$$d:=(0,1)\in\partial D^2 .$$
For $1\le i\le n$ let $s_i\colon[0,1]\to D^2$ be the **straight stem**
$$s_i(t):=(1-t)\,d+t\,q_i ,$$
the straight segment from $d$ to $q_i$, and choose a round circle $C_i$ in
$D^2\setminus Q_n$ centred at $q_i$, of radius $0<\varepsilon_i<d(q_i,\partial D^2)$
so small that the closed disks $B_i$ bounded by the circles are pairwise disjoint, that each circle meets only its own stem, and that it meets $s_i$ exactly once, at
$p_i:=s_i(1-\varepsilon_i/L_i)$ where $L_i:=|d-q_i|$, and meets no other stem
$s_j$ with $j\ne i$. Write $c_i\colon[0,1]\to D^2\setminus Q_n$ for $C_i$
traversed once **positively** (counterclockwise), from $p_i$ back to $p_i$.
The **standard meridian loops** are the loops based at $d$
$$x_i:=s_i\,c_i\,s_i^{-1},\qquad 1\le i\le n,$$
read as $s_i$ from $d$ to $p_i$, then $c_i$, then $s_i$ from $p_i$ back to $d$
([[def-based-loops-and-fundamental-group]]). Further, $\partial$ denotes the
**positively oriented boundary loop**
$$\partial(t):=d\,e^{2\pi i t},\qquad t\in[0,1],$$
of $D^2$ based at $d$: it traverses $\partial D^2$ once counterclockwise,
starting and ending at $d$.

**Existence and independence of the choices.** The straight segments $s_i$
leave $d$ in pairwise distinct directions (the points $q_1,\dots,q_n$ are
distinct and lie strictly below $d$) and meet one another only at $d$; the
segments $s_i$ meet the real axis only at their endpoints $q_i$. An explicit choice-free family is given by
$$\varepsilon_i=\frac14\min\left(\{1-|q_i|\}\cup\left\{|q_i-q_j|,\frac{|q_i-q_j|}{\sqrt{1+q_j^2}}:j\ne i\right\}\right).$$
The finite set inside the minimum is nonempty and contains only positive
numbers. The distance from $q_i$ to the line through $d,q_j$ is
$|q_i-q_j|/\sqrt{1+q_j^2}$, so $B_i$ misses every other stem. Also
$\varepsilon_i+\varepsilon_j\le|q_i-q_j|/2<|q_i-q_j|$, proving disjointness
of the **closed** disks, and $\varepsilon_i<1-|q_i|$ keeps each disk inside
$D^2$. The radius is less than $|d-q_i|$, giving exactly the displayed contact
with its own stem. For $n=1$ the minimum has only its boundary-margin entry;
for $n=0$ the family is empty. Any family satisfying these conditions may be
fixed; this formula witnesses its existence without any choice axiom.

The class $[x_i]\in\pi_1(D^2\setminus Q_n,d)$ is independent of
all admissible radii, including the old broader convention requiring only
avoidance of the other stems. Such a circle encloses no $q_j$ with $j\ne i$:
otherwise the other stem from $d$, which lies outside the circle, to $q_j$
would cross it (or have $q_j$ on it). Thus the larger disk of any two admissible
concentric circles still contains no other puncture. Interpolate their radii
and their tether contact points radially; this is a based lasso homotopy in
$D^2\setminus Q_n$ ([[def-homotopy-relative-and-path-homotopy]]).
It does not require the intermediate circle to be disjoint from the other
circles, so the class argument does not circularly assume the newly explicit
representative convention. Fix once and
for all one such family of circles; every statement on this page uses that
fixed family.

**Frozen conventions of the page.** The stems and the basepoint transport are
fixed once and for all by the choices above; the stems are indexed so that the
positively oriented boundary loop $\partial$, as seen from $d$, meets the
directions of the stems in the order $s_1,s_2,\dots,s_n$. Products of braid
automorphisms use ordinary function composition: the leftmost factor is the
outermost map, so the rightmost factor acts first. No relation of the braid presentation and no choice principle
is used in this definition.

## Remarks

- The index convention is a property of the *labelling* of the punctures: the
  directions of the stems from $d$ occur in the same cyclic order as the
  punctures on the real axis, so that tracing the counterclockwise boundary
  from $d$ meets the angular positions of $s_1,\dots,s_n$ in increasing index
  order.
- The loops $x_1,\dots,x_n$ are the loops denoted $x_1,\dots,x_n$ in Figure 3
  of [[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]'s source
  (Gonzalez-Meneses, section 1.6) and correspond to Artin's generators
  $t_1,\dots,t_n$ of the free group of the punctured disk.

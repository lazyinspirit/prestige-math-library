---
id: lem-angular-map-rectification-on-a-given-product-tube
kind: lemma
title: Angular map rectification on a given product tube
status: draft
origin: session
deps: []
proof_strategy: direct
---

## Statement

Let $M$ be a topological manifold, let $S$ be a connected closed surface in $M$, and suppose an open neighborhood of $S$ is already supplied with a homeomorphism $j:S\times\{z\in\mathbb C:|z|<1\}\longrightarrow N$ carrying $S\times\{0\}$ onto $S$. Write $a(j(s,z))=z/|z|$ on $N\setminus S$. Let $g:M\setminus S\to S^1$ be continuous. Suppose that the map $g/a$ has winding number zero on every loop in $N\setminus S$. Then $g$ is homotopic, through maps fixed on $M\setminus N$, to a continuous map $g'$ which equals $a$ on $j(S\times\{0<|z|\le1/3\})$ and equals $g$ outside $j(S\times\{|z|<2/3\})$.

## Facts & Assumptions

**Given:** The product neighborhood $j$, the two circle-valued maps $a,g$, and the stated zero-winding condition. The neighborhood is an explicit hypothesis; its existence for a locally flat surface is not proved by this lemma.

## Proof

1.1 Put $Y=N\setminus S$ and $q=g/a:Y\to S^1$. The space $Y$ is connected and locally path connected. Fix a basepoint and a real lift of its $q$-value under $p(t)=e^{2\pi i t}$. For any path from the basepoint to $y$, lift its $q$-image by successive inverse branches of $p$ on arcs and take the terminal real value. Two choices of path differ by a loop; their terminal values differ by that loop's winding number, which is zero by hypothesis. Thus this construction defines a single-valued function $h:Y\to\mathbb R$ with $e^{2\pi i h}=q$. In a small connected neighborhood of any $y$, the construction differs from one inverse branch by a fixed integer, so $h$ is continuous. [given, construct]

2.1 Choose a continuous function $\chi:[0,1)\to[0,1]$ equal to $1$ on $[0,1/3]$ and to $0$ on $[2/3,1)$. For $0\le t\le1$, define $g_t(j(s,z))=g(j(s,z))e^{-2\pi i t\chi(|z|)h(j(s,z))}$ on $Y$, and define $g_t=g$ off $N$. The formulas agree on the outer open subannulus where $\chi=0$; their modification is supported in the compact subset $j(S\times\{|z|\le2/3\})$ of $N$. They therefore give a continuous homotopy on $(M\setminus S)\times[0,1]$. At $t=1$ and $|z|\le1/3$, the exponential factor is $q^{-1}$ and hence $g_1=a$. The outer fixed-region conclusions follow directly from $\chi=0$. No continuity across $S$ is asserted or needed. [step 1.1, given, construct] ∎

## Remarks

This is an off-canonical conditional donor. It proves a genuine relative adjustment once a product tube and the exact loop condition have been supplied. It neither obtains that tube from local-flatness charts nor proves topological transversality on the compact exterior. It supplies no proof or acceptance of the full locally flat Seifert-hypersurface target.

In particular, the zero-winding condition includes horizontal loops in $S$, not just fiber meridians. Degree one on each fiber meridian alone is insufficient: multiplying $a$ by any nontrivial map $S\to S^1$ preserves all meridian degrees and violates that condition.

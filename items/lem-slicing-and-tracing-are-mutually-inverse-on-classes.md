---
id: lem-slicing-and-tracing-are-mutually-inverse-on-classes
kind: lemma
title: "Tracing and slicing are inverse on relative classes"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [lem-a-configuration-loop-traces-a-geometric-braid,
       lem-path-homotopy-traces-braid-isotopy,
       lem-a-geometric-braid-slices-to-a-configuration-loop,
       def-braid-isotopy-relative-top-and-bottom,
       def-based-loops-and-fundamental-group,
       def-homotopy-relative-and-path-homotopy,
       def-motion-of-an-unordered-point-configuration,
       def-geometric-braid-with-setwise-endpoints,
       def-product-topology,
       def-ordered-configuration-space,
       def-unordered-configuration-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, §§1.1–1.3, printed pp. 3–6"
      url: https://arxiv.org/pdf/1010.0321
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, §1.1, author manuscript pp. 3–5"
      url: https://www.math.columbia.edu/~jb/Handbook-21.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Fix $n\in\mathbb N$ and the geometric base tuple $Q$. Tracing based interior
configuration loops and slicing geometric braids induce mutually inverse
bijections between based path-homotopy classes in
$C_n(\operatorname{int}D^2)$ at $[Q]$ and geometric braid-isotopy classes of
braids based at $Q$.

## Facts & Assumptions

**Given:** $n\in\mathbb N$, the fixed tuple $Q$, an interior based configuration
loop $\alpha$ at $[Q]$, and a geometric braid $\beta=(z_1,\ldots,z_n)$ based
at $Q$.

[L1] Every interior based configuration loop at $[Q]$ has a unique ordered lift starting at $Q$; its coordinate graphs form a geometric braid whose unordered slice at every height is the original loop ([[lem-a-configuration-loop-traces-a-geometric-braid]]).

[L2] If two based interior configuration loops are path-homotopic relative to their endpoints, their traced braids are braid-isotopic relative to the top and bottom endpoints ([[lem-path-homotopy-traces-braid-isotopy]]).

[L3] The slice of a geometric braid $\beta=(z_1,\ldots,z_n)$ is $S(\beta)(t)=[(z_1(t),\ldots,z_n(t))]$ ([[lem-a-geometric-braid-slices-to-a-configuration-loop]]).

[L4] In a braid isotopy, every coordinate map $Z_j(s,t)$ is jointly continuous in the isotopy parameter $s$ and height $t$ ([[def-braid-isotopy-relative-top-and-bottom]]).

[L5] A based loop class is taken modulo path homotopy relative to the endpoints ([[def-based-loops-and-fundamental-group]]).

[L6] A path homotopy is a jointly continuous map on the product square that fixes both endpoints throughout; its first coordinate is the path parameter and its second is the homotopy parameter ([[def-homotopy-relative-and-path-homotopy]]).

[L7] Continuity into a product with the product topology is equivalent to continuity of every coordinate map ([[def-product-topology]]).

[L8] The ordered configuration space $F_n(X)$ is the subspace of $X^n$ consisting of tuples with pairwise distinct coordinates ([[def-ordered-configuration-space]]).

[L9] The unordered configuration space consists of the coordinate-permutation orbits of ordered configurations ([[def-unordered-configuration-space]]).

[L10] The fixed identification $(x,y)\mapsto x+iy$ sends the real open disk $D^\circ$ to $\operatorname{int}D^2$ ([[def-motion-of-an-unordered-point-configuration]]).

[L11] A geometric braid is a tuple of continuous motions in $D^\circ$ that are pairwise distinct at every height, start at $Q$, and have terminal point set $Q$ ([[def-geometric-braid-with-setwise-endpoints]]).

[L12] Every $s$-slice of a braid isotopy is a geometric braid based at $Q$, with bottom tuple $Q$ and top endpoint set $Q$ ([[def-braid-isotopy-relative-top-and-bottom]]).

[L13] The boundary slices of a braid isotopy are its two endpoint braids ([[def-braid-isotopy-relative-top-and-bottom]]).

[L14] For $n=0$, $F_0(X)$ and $C_0(X)$ are one-point spaces; for $n=1$, $F_1(X)$ and $C_1(X)$ are canonically homeomorphic to $X$ ([[def-ordered-configuration-space]], [[def-unordered-configuration-space]]).

[L15] The canonical projection $p_n:F_n(X)\to C_n(X)$ is continuous ([[def-unordered-configuration-space]]).

The trace uses the unique lift from the specified $Q$; the slice uses the given labelled coordinate tuple. No arbitrary ordering or choice is used.

## Proof

**Proof technique:** direct.

1.1 *Trace is well-defined on path classes.* Define $T([\alpha])$ to be the braid-isotopy class of the braid traced by the unique lift of $\alpha$ from $Q$, which exists by [L1]. If $\alpha$ and $\alpha'$ represent the same based path-homotopy class by [L5, L6], then [L2] makes their traced braids braid-isotopic. Thus $T$ is independent of the representative. [L1, L2, L5, L6]

1.2 *Slice is well-defined on braid-isotopy classes.* Suppose $Z$ is a braid isotopy from $\beta$ to $\beta'$. Apply the real-complex identification [L10] to its coordinates. By joint continuity in [L4] and the product criterion [L7], the tuple map $$z:I_s\times I_t\to(\operatorname{int}D^2)^n,\qquad z(s,t)=(Z_1(s,t),\ldots,Z_n(s,t))$$ is continuous. Each slice is collision-free by [L11, L12], so its image lies in $F_n(\operatorname{int}D^2)$; the subspace topology [L8] makes the restricted map continuous. Composing with the continuous orbit projection [L15] gives $$H(s,t):=p_n(z(s,t))\in C_n(\operatorname{int}D^2).$$ The fixed bottom tuple gives $H(s,0)=[Q]$ for every $s$, and the setwise top condition gives $H(s,1)=[Q]$ for every $s$, by [L12] and the orbit description [L9]. At $s=0$ and $s=1$, $H$ is respectively the slice of $\beta$ and of $\beta'$ by [L3, L13]. The switch $(t,u)\mapsto(u,t)$ is continuous by the product-topology criterion [L7], so $K(t,u):=H(u,t)$ is jointly continuous and is a path homotopy relative to its endpoints by [L6]. Therefore the slice classes agree, and slicing descends to braid-isotopy classes. [L3, L4, L6, L7, L8, L9, L10, L11, L12, L13, L15]

1.3 *Slice after trace is the original loop.* For any $[\alpha]$, the trace lemma says that the unordered slice of the traced braid equals $\alpha(t)$ at every $t$ [L1]. Thus $S(T([\alpha]))=[\alpha]$ in the based path-homotopy class set. [L1]

1.4 *Trace after slice is the original braid.* By [L11], the ordered coordinate path $t\mapsto(z_1(t),\ldots,z_n(t))$ is a continuous path in $F_n(\operatorname{int}D^2)$ starting at $Q$, using [L7, L8, L10]. Its projection is $S(\beta)$ by [L3]. It is therefore an ordered lift of $S(\beta)$ from $Q$; uniqueness in [L1] makes the traced braid exactly $\beta$, so $T(S([\beta]))=[\beta]$ as a braid-isotopy class. [L1, L3, L7, L8, L10, L11]

2.1 The two well-defined assignments satisfy both inverse identities by steps 1.3 and 1.4. Consequently tracing and slicing induce mutually inverse bijections on the stated classes. For $n=0$ both configuration spaces and class sets are singletons; for $n=1$ the configuration spaces identify with the disk and there are no collision conditions, so the same constructions apply [L14]. [step 1.1, step 1.2, step 1.3, step 1.4, L14] ∎

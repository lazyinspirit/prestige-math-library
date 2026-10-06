---
id: prop-morse-cancellation-criterion-via-a-unique-connecting-orbit
kind: proposition
title: "Morse cancellation criterion via a unique connecting orbit"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps: [def-morse-function-adapted-to-a-cobordism, lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods, def-morse-trajectory-from-p-to-q, def-downward-gradient-like-vector-field, lem-local-morse-sublevel-pair-is-a-handle-pair, thm-regular-interval-diffeomorphism, thm-fundamental-theorem-on-flows, def-countable-choice, thm-handle-cancellation]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow; scanned edition with text layer)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "Theorem 5.4 with Hypothesis 5.5 and Theorem 5.6 (Lemmas 5.7-5.9), §5, printed pp. 48-66; single transverse intersection gives a product cobordism"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Theorem 5.4.3, §5.4, printed pp. 146-147 (cancellation in the geometric setting)"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(W;M_0,M_1)$ be a compact collared triad with adapted excellent Morse function $f$ and adapted field $X$, and let $a<b$ be regular values such that the closed slab $K=f^{-1}[a,b]$ is compact and contains exactly two critical points $p,q$, of indices $k$ and $k+1$, with $a<f(p)<f(q)<b$ and $0\le k\le n-1$. Let $v\in(f(p),f(q))$ be regular, let $B_p\subset f^{-1}(v)$ be the stable sphere of $p$ and $A_q\subset f^{-1}(v)$ the unstable sphere of $q$ of dimensions $n-k-1$ and $k$. If $A_q$ meets $B_p$ transversely in exactly one point, then $K$ is diffeomorphic to $L_a\times[a,b]$ relative to $L_a=f^{-1}(a)$; equivalently the two critical points, and the $k$- and $(k+1)$-handles of the induced presentation, cancel, and the slab is a product. The hypothesis says exactly that there is a single transverse connecting orbit from $q$ to $p$ there is no intermediate critical point in the slab. Here $L_a$ denotes a level, rather than a sublevel.

## Facts & Assumptions

**Given:** A compact collared triad $(W;M_0,M_1)$ with adapted excellent Morse function $f$ and adapted field $X$, regular values $a<b$ with compact slab $K=f^{-1}[a,b]$ containing exactly the critical points $p,q$ of indices $k$ and $k+1$, regular $v\in(f(p),f(q))$, and the spheres $B_p$ (stable sphere of $p$) and $A_q$ (unstable sphere of $q$) in $f^{-1}(v)$ meeting transversely in exactly one point.

[F1] [[def-morse-function-adapted-to-a-cobordism]] and [[def-downward-gradient-like-vector-field]]: adapted means $f^{-1}(0)=M_0$, $f^{-1}(1)=M_1$, critical points interior and nondegenerate, no critical point in a fixed collar; the field is downward gradient-like with $df(X)<0$ off the critical set and $X=(2u,-2v)$ in Morse charts.

[F2] [[lem-spheres-of-adjacent-critical-levels-have-product-neighbourhoods]]: assume $\mathrm{AC}_\omega$; for consecutive critical levels the crossing sets of the trajectories through the local unstable disk of $q$ and the local stable disk of $p$ are compact embedded spheres $A_q,B_p$ in the regular level $f^{-1}(v)$, with product neighbourhoods, and a trajectory from $q$ to $p$ crosses $f^{-1}(v)$ exactly once, at a point of $A_q\cap B_p$, every such point lying on such a trajectory.

[F3] [[def-morse-trajectory-from-p-to-q]] fixes the direction of the limiting orbit in the gradient case. Here the trajectories are those of the given downward gradient-like field $X$; the crossing correspondence in [F2] supplies their limits and identifies them up to time translation. No assertion that $X$ equals a particular metric gradient is required.

[F4] [[thm-fundamental-theorem-on-flows]] and [[thm-regular-interval-diffeomorphism]]: integral curves of a smooth field form a smooth local flow, unique through each point; if a closed band $f^{-1}([a,b])$ is compact and critical-point-free, its normalized flow is a level-preserving diffeomorphism $M_a\times[a,b]\to K$.

[F5] [[lem-local-morse-sublevel-pair-is-a-handle-pair]]: in a small Morse chart of index $k$ the change across the critical value is a rounded index-$k$ handle, with the core $v=0$ and a compact product piece attached along $S^{k-1}\times D^{n-k}$.

[F6] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used through the adapted-field and band suppliers.

[F7] [[thm-handle-cancellation]]: under $\mathrm{AC}_\omega$, a consecutive index-$k$, index-$(k+1)$ pair with one transverse attaching-belt intersection can be deleted relative to the incoming boundary.

## Proof

**Proof technique:** direct.

1.1 The compact slab is a cobordism from $L_a=f^{-1}(a)$ to $L_b=f^{-1}(b)$. By [F4] its regular portions are collars; applying [F5] at $p$ and $q$ gives a presentation starting with $L_a\times[a,v_0]$ and attaching a $k$-handle followed by a $(k+1)$-handle. Their outgoing belt sphere and upper attaching sphere, transported to the regular level $v$, are exactly $B_p$ and $A_q$: their local disk factors are the stable and unstable factors in the Morse model, and the intervening regular flow carries those factors and their framings. [F1, F2, F4, F5, F6, given]

2.1 By [F2], points of $A_q\cap B_p$ correspond to the connecting trajectories from $q$ to $p$, modulo time translation. The single transverse point therefore is exactly the geometric cancellation hypothesis for the two handles in step 1.1. No hypothesis of simple connectivity, high dimension or a Whitney trick is needed. [F2, F3, step 1.1, given]

3.1 Apply [F7] to that pair. Deleting it leaves the initial collar and the regular collars above it, whose parameters combine to give $L_a\times[a,b]$; the comparison is relative to $L_a$. Thus it is the slab $K$, rather than the upper sublevel $M_b$, which is a product cobordism. This is a diffeomorphism assertion, not an assertion that the original $f$ has ceased to have critical points. [F4, F7, step 1.1, step 2.1] ∎

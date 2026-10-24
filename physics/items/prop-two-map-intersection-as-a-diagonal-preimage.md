---
id: prop-two-map-intersection-as-a-diagonal-preimage
kind: proposition
title: "Two-map intersection as a diagonal preimage"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, def-local-oriented-intersection-sign, def-oriented-intersection-number, thm-intersection-number-under-factor-interchange, lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign, def-product-orientation, thm-transverse-fibre-product-theorem, prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item prop-two-map-intersection-as-a-diagonal-preimage; evidence research/frontier-38-owner-30-reader-12.md, research/frontier-38-owner-30-reader-findings-12.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  precheck: pass
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed pp. 113–114 (diagonal reformulation, the linear-algebra Lemma, and the Proposition $I(f,g)=(-1)^{\\dim Z}I(f\\times g,\\Delta)$)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lecture 15, p. 48 (the sign $[P]\\cdot[Q]=(-1)^m[P\\times Q]\\cdot[\\Delta_M]$)"
---

## Statement

Let $f:X^x\to M^n$ and $g:Z^z\to M^n$ be smooth maps from compact oriented manifolds with $x+z=n$, into an oriented boundaryless manifold $M$, and let $\Delta_M\subset M\times M$ be the diagonal oriented so that $M\to\Delta_M$, $y\mapsto(y,y)$, is orientation preserving, $M\times M$ carrying the product orientation. Then $f$ and $g$ are transverse if and only if $f\times g:X\times Z\to M\times M$ is transverse to $\Delta_M$; the sets $\{(a,b):f(a)=g(b)\}$ and $(f\times g)^{-1}(\Delta_M)$ coincide. When these equivalent transversality conditions hold, $$I(f,g)=(-1)^{z}\,I(f\times g,\Delta_M),$$ where $I(f\times g,\Delta_M)$ is the oriented intersection number of the map $f\times g$ with the closed oriented submanifold $\Delta_M$ in the sense of [[def-oriented-intersection-number]]. Reading the same computation with the factors exchanged, and using [[thm-intersection-number-under-factor-interchange]], gives $I(f,g)=(-1)^{x}I(i_\Delta,f\times g)$, where $i_\Delta:\Delta_M\hookrightarrow M\times M$ is the inclusion. Here the last expression denotes the finite transverse local-sign sum; this sum is meaningful even when $\Delta_M$ is noncompact.

## Facts & Assumptions

**Given:** Smooth maps $f:X^x\to M^n$, $g:Z^z\to M^n$ from compact oriented manifolds with $x+z=n$, the diagonal $\Delta_M$ oriented from $M$, and the product orientation of $M\times M$.

[F1] When $f,g$ are transverse, the fibre product $X\times_MZ=\{(a,b):f(a)=g(b)\}$ is an embedded $0$-dimensional submanifold of $X\times Z$ whose tangent space at $(a,b)$ is the kernel of $(df_a,-dg_b)$ ([[def-transverse-complementary-dimensional-intersection-set]], [[thm-transverse-fibre-product-theorem]]), and $I(f,g)$ is the sum of the local signs over this finite set ([[def-local-oriented-intersection-sign]], [[def-oriented-intersection-number]]).

[F2] The diagonal is the image of the graph of the identity, an embedded submanifold of $M\times M$; its tangent space at $(y,y)$ is $\{(v,v):v\in T_yM\}$ ([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]]).

[F3] At a coincidence point, transversality of $f$ and $g$ is the equality $df_a(T_aX)+dg_b(T_bZ)=T_yM$; for complementary dimensions the sum is direct, and the linear-algebra criterion identifies it with transversality of $f\times g$ to the diagonal: $U\times W\oplus\Delta=T_yM\times T_yM$ ([[def-local-oriented-intersection-sign]], [[def-transverse-complementary-dimensional-intersection-set]]).

[F4] The product orientation lists the factors in the written order, and swapping two complementary ordered blocks changes the orientation comparison by the swap sign $(-1)^{kl}$ ([[def-product-orientation]], [[lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign]]).

[F5] Map--map intersection numbers obey the factor-interchange sign $I(g,f)=(-1)^{xz}I(f,g)$ ([[thm-intersection-number-under-factor-interchange]]).

## Proof

**Proof technique:** direct; compare the two local signs by a block transposition.

1.1 The identity $(f\times g)^{-1}(\Delta_M)=\{(a,b):f(a)=g(b)\}=X\times_MZ$ is immediate from the definitions. At $(a,b)$ with $y=f(a)=g(b)$, put $U:=df_a(T_aX)$ and $W:=dg_b(T_bZ)$; the differential of $f\times g$ has image $U\times W$, and [F2] gives $T_{(y,y)}\Delta_M=\Delta_{T_yM}$. Then $d(f\times g)_{(a,b)}$ is transverse to $\Delta_M$ exactly when $U\times W+\Delta_{T_yM}=T_yM\times T_yM$, the quotient map $(v,w)\mapsto v-w$ has kernel $\Delta_{T_yM}$ and sends $U\times W$ onto $U+W$, so this is equivalent to $U+W=T_yM$, that is, to transversality of $f$ and $g$ at $(a,b)$. [F1, F2, F3, given, algebra]

2.1 Assume the equivalent transversality conditions hold. At a coincidence write $A=df_a$ and $B=dg_b$ in supplied oriented determinant frames, and $C=[A\ B]$. The local sign of $(f,g)$ is $\operatorname{sgn}\det C$. For $(f\times g,\Delta_M)$ the ordered derivative matrix in the ambient product frame has block columns $(A,0)$, $(0,B)$, $(I,I)$. Subtracting its top row block from the bottom and moving the final $n$ diagonal columns to the front gives the sign factor $(-1)^{n^2}=(-1)^n$ and bottom block $[-A\ B]$, of determinant $(-1)^x\det C$. Thus the original determinant has sign $(-1)^{n+x}\operatorname{sgn}\det C=(-1)^z\operatorname{sgn}\det C$. The determinant-ray calculation includes zero-dimensional source factors: their point signs multiply both comparisons equally, while the diagonal carries the ambient ray. [F3, F4, step 1.1, algebra]

3.1 Summing 2.1 over the finite coincidence set gives $I(f,g)=(-1)^zI(f\times g,\Delta_M)$: the two sums are over the same finite index set, and $(-1)^z$ is a common factor. Exchanging the roles of the two maps and using the factor-interchange sign of [F5] gives $I(f,g)=(-1)^{x}I(i_\Delta,f\times g)$: the map--submanifold number $I(f\times g,\Delta_M)$ equals the map--map number $I(f\times g,i_\Delta)$ because the differential of the inclusion is the inclusion of $T\Delta_M$, and the same pointwise block-swap calculation as [F5], of dimensions $n,n$, gives $I(i_\Delta,f\times g)=(-1)^{n\cdot n}I(f\times g,i_\Delta)=(-1)^nI(f\times g,\Delta_M)$. This finite transverse sum is defined even if the diagonal is noncompact, since its coincidence set is exactly the finite preimage in the compact $X\times Z$ with $n=x+z$. [F1, F4, F5, step 2.1, algebra] ∎

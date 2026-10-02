---
id: thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group
kind: theorem
title: "Alexander contraction of the boundary-fixed disk homeomorphism group"
status: published
origin: pipeline
landmark: true
deps: [def-homotopy-relative-and-path-homotopy,
       prop-compact-open-is-uniform-on-a-compact-metric-domain,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, version 5.0 author draft, Lemma 2.1 and section 2.2.1, printed pp. 50-51"
      url: "https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.4, printed pp. 6-7"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Let $D^2=\{x\in\mathbb R^2:\lVert x\rVert_2\le1\}$ be the closed unit disc and
let $\operatorname{Homeo}^+(D^2,\partial D^2)$ be the group of its homeomorphisms
fixing $\partial D^2$ pointwise, with the compact-open topology
([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]). Then
$\operatorname{Homeo}^+(D^2,\partial D^2)$ is contractible.

## Facts & Assumptions

**Given:** The closed unit disc $D^2$, the group $\operatorname{Homeo}^+(D^2,\partial D^2)$ with the compact-open topology, and a homeomorphism $h\in\operatorname{Homeo}^+(D^2,\partial D^2)$.

[L1] A homeomorphism is a continuous bijection with continuous inverse ([[def-homeomorphism-and-open-maps]]).

[L2] On $C(X,Y)$ with $X$ a nonempty compact metric space and $Y$ a metric space the compact-open topology equals the topology of uniform convergence ([[prop-compact-open-is-uniform-on-a-compact-metric-domain]]).

[L3] $\operatorname{Homeo}^+(D^2,\partial D^2)$ is the set of homeomorphisms of $D^2$ with $f|_{\partial D^2}=\operatorname{id}$, it carries the subspace topology of the compact-open topology, which is the topology of uniform convergence, and composition is continuous ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

[L4] A homotopy from $f$ to $g$ is a continuous $H:X\times I\to Y$ with $H(-,0)=f$ and $H(-,1)=g$ ([[def-homotopy-relative-and-path-homotopy]]).

## Proof
**Proof technique:** direct.

1.1 *The Alexander deformation is a family of boundary-fixed homeomorphisms.* For $s\in(0,1]$ and $h\in\operatorname{Homeo}^+(D^2,\partial D^2)$ define $$H_s(h)(x):=\begin{cases}s\,h(x/s),&\lVert x\rVert_2\le s,\\ x,&\lVert x\rVert_2\ge s,\end{cases}\qquad H_0(h):=\operatorname{id}_{D^2}.$$ The two formulas agree when $\lVert x\rVert_2=s$, because then $x/s\in\partial D^2$ and $h$ fixes $\partial D^2$ pointwise, so $s\,h(x/s)=s(x/s)=x$; hence $H_s(h)$ is well defined and continuous. It maps $D^2$ into $D^2$ (both branches land in the closed unit ball) and it fixes $\partial D^2$ pointwise. Its inverse is $H_s(h^{-1})$: for $\lVert y\rVert_2\le s$ one has $\lVert s\,h^{-1}(y/s)\rVert_2\le s$ and $H_s(h)(s\,h^{-1}(y/s))=s\,h(h^{-1}(y/s))=y$, while for $\lVert y\rVert_2\ge s$ both maps fix $y$. Thus $H_s(h)$ is a continuous bijection of the compact disc with the inverse just displayed, hence a homeomorphism by [L1] that fixes the boundary pointwise, and $H_1(h)=h$ while $H_0(h)=\operatorname{id}$. [L1, L3]

2.1 *Continuity in the homeomorphism for fixed time.* For $s\in[0,1]$ and $h,h'\in\operatorname{Homeo}^+(D^2,\partial D^2)$ every $x$ satisfies $\lVert H_s(h)(x)-H_s(h')(x)\rVert_2\le d(h,h')$, where $d$ is the uniform distance: for $\lVert x\rVert_2\ge s$ both values equal $x$, and for $\lVert x\rVert_2\le s$ the difference is $s\lVert h(x/s)-h'(x/s)\rVert_2\le d(h,h')$ (the case $s=0$ is the constant map). By [L2] the uniform distance metrizes the compact-open topology on the group, so $h\mapsto H_s(h)$ is continuous for each fixed $s$. [L2, L3, step 1.1]

3.1 *Joint continuity of the deformation.* Fix $h_0$. The evaluation map $(s,x)\mapsto H_s(h_0)(x)$ is continuous on $[0,1]\times D^2$: for $s>0$ the two formulas are continuous and agree at $\lVert x\rVert_2=s$, while at $s=0$ the estimate $\lVert H_s(h_0)(x)-x\rVert_2\le2s$ gives continuity. Since $[0,1]\times D^2$ is compact, this map is uniformly continuous, so $d(H_s(h_0),H_{s_0}(h_0))\to0$ as $s\to s_0$. By step 2.1, $$d(H_s(h),H_{s_0}(h_0))\le d(H_s(h),H_s(h_0))+d(H_s(h_0),H_{s_0}(h_0))\le d(h,h_0)+d(H_s(h_0),H_{s_0}(h_0)),$$ which tends to zero as $(s,h)\to(s_0,h_0)$. Thus $(s,h)\mapsto H_s(h)$ is continuous for the uniform topology, hence for the compact-open topology by [L2]. [L2, L3, step 1.1, step 2.1]

4.1 *The contraction.* Define $F(t,h):=H_{1-t}(h)$ for $(t,h)\in[0,1]\times\operatorname{Homeo}^+(D^2,\partial D^2)$. By step 3.1 the map $F$ is continuous into the compact-open topology, and by step 1.1 each $F(t,-)$ has values in the group; moreover $F(0,h)=H_1(h)=h$ and $F(1,h)=H_0(h)=\operatorname{id}$, so by [L4] the map $F$ is a homotopy from the identity map of $\operatorname{Homeo}^+(D^2,\partial D^2)$ to the constant map at the identity element, that is, the group is contractible. [L4, step 1.1, step 3.1] ∎

## Remarks

- The deformation is the classical Alexander trick: at time $s$ the image of $h$ is squashed into the disc of radius $s$ and continued by the identity outside.
- At radius $r$ the deformation differs from the identity by at most $2s$, so the deformation is continuous at $s=0$ uniformly in $h$; this uniform estimate, not merely continuity at fixed $h$, is what the compact-open topology detects.

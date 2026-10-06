---
id: lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map
kind: lemma
title: "The collapse of a regular preimage is homotopic to the original map"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 5
deps:
  - prop-transverse-preimage-carries-a-pulled-back-normal-structure
  - thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic
  - lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps
  - lem-regular-value-choice-does-not-change-the-framed-cobordism-class
  - def-the-standard-smooth-step-function
  - def-framing-of-a-normal-bundle
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - def-framed-regular-preimage-of-a-map-to-a-sphere
  - lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - lem-smooth-maps-paste-over-an-open-cover
  - thm-chain-rule-for-differentials-of-smooth-maps
  - def-homotopy-relative-and-path-homotopy
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Lemma 4 and the proof of Theorem B, printed pp.48-50"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lemma 3.12 and its proof (3.13), printed pp.27-28"
    - title: "John Milnor and James Munkres, Differential Topology (Prentice-Hall, 1974)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/difftop.pdf"
      locator: "Theorem 3.16, injectivity argument, printed pp.27-28"
---

## Statement

Assume $\mathrm{AC}_\omega$, let $X$ be closed and smooth and let $k\ge1$. If $f:X\to S^k$ is smooth, $y$ is regular and $b$ is a positive basis at $y$, then the Pontryagin–Thom map of $(f^{-1}(y),f_*b)$ is smoothly homotopic to $f$.

When $y=y_0$ and $b=b_0$ are the fixed centre and basis of [[def-pontryagin-thom-map-of-a-framed-submanifold]], the homotopy has the following local form. There are a compact tube $U$ and a smooth $f_1$ equal to $f$ outside $U$ and to the normalized collapse $g$ near $N=f^{-1}(y_0)$; $f\simeq f_1$ is supported in $U$, and $f_1\simeq g$ is constant near $N$. This local assertion requires the displayed target normalization.

More generally, if $f$ is continuous and smooth on a neighbourhood of $f^{-1}(y)$, with surjective derivative there, the same collapse-class conclusion holds under continuous homotopy.

## Facts & Assumptions

**Given:** $f,y,b$ as in the statement, with $N=f^{-1}(y)$ and $\varphi=f_*b$.

[F1] The normalized collapse $g$ has centre fibre $N$ and exactly the framing $\varphi$; in framing coordinates $u$ its target coordinate is $u$ near zero ([[def-pontryagin-thom-map-of-a-framed-submanifold]], [[lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold]]).

[F2] Compatible tubes exist and a framing supplies product fibre coordinates ([[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[def-framing-of-a-normal-bundle]]). The differential defining the preimage framing is [[def-framed-regular-preimage-of-a-map-to-a-sphere]]; the local-smooth transverse-preimage version, including closedness of the fibre, is [[prop-transverse-preimage-carries-a-pulled-back-normal-structure]].

[F3] Smooth maps paste over an open cover ([[lem-smooth-maps-paste-over-an-open-cover]]). Smooth cutoffs and endpoint-flat time reparametrizations are supplied by [[def-the-standard-smooth-step-function]].

[F4] Positive bases give framed-cobordant preimages for $k\ge1$ ([[lem-regular-value-choice-does-not-change-the-framed-cobordism-class]]); framed cobordisms give homotopic collapses ([[lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps]]). Continuously homotopic smooth maps are smoothly homotopic under countable choice ([[thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic]]).

## Proof

1.1 First suppose $y=y_0$, $b=b_0$. Shrink a framed tube so both maps lie in the centre coordinate chart there; use $u=\varphi_s(v)$ as the fibre coordinate. In these coordinates $F(s,0)=G(s,0)=0$ and $D_uF(s,0)=D_uG(s,0)=I$, with $G(s,u)=u$ on a sufficiently small tube by [F1]. A finite cover of compact $N$ bounds the second fibre derivatives of $F$; integrating the derivative along each fibre segment gives $|F(s,u)-u|\le C|u|^2$ uniformly. Choose $c>0$ small enough that $C c<1/2$, the estimates hold for $|u|\le c$, and $G(s,u)=u$ there. Thus for $0<|u|\le c$, $F(s,u)\cdot u\ge |u|^2-C|u|^3>0$ and $G(s,u)\cdot u=|u|^2>0$. This uses framing coordinates, not a false positivity inference about an arbitrary invertible matrix. [F1, F2, given, algebra]

2.1 Let $\lambda(|u|^2)$ be a smooth cutoff equal to one for $|u|\le c/2$ and zero for $|u|\ge c$. In the target centre chart put $F_t=(1-t\lambda)F+t\lambda G$ and use $f$ elsewhere. On the support both vectors have positive dot product with $u$ when $u\ne0$, so no extra centre preimage is created. The family equals $f$ on a neighbourhood of the tube boundary, hence pastes smoothly. Its final map $f_1$ agrees with $g$ on $V=\{|u|<c/2\}$ and with $f$ outside a compact tube $U$. [F3, step 1.1, construct]

3.1 On $X\setminus N$, both $f_1$ and $g$ avoid $y_0$. In stereographic coordinates $h:S^k\setminus\{y_0\}\to\mathbb R^k$ interpolate $h(f_1)$ linearly to $h(g)$. On $V$ use the constant family $f_1=g$. These formulas agree on $V\setminus N$, so they paste to a smooth homotopy constant near $N$. Endpoint-flat reparametrization makes its concatenation with step 2.1 smooth. If $N=\varnothing$, take $U=V=\varnothing$ and simply interpolate the two maps in the chart avoiding $y_0$. [F3, step 2.1, construct]

4.1 For general $y,b$, choose a rotation $R$ joined smoothly to the identity with $R(y)=y_0$; the usual plane rotation handles nonantipodal points, the identity handles equality, and a $\pi$ rotation handles antipodes. Put $f'=R f$. Its fibre at $y_0$ is $N$, and the pushed basis $dR_y b$ induces exactly $\varphi$. By [F4], changing that positive basis to $b_0$ gives a framed cobordism from $(N,\varphi)$ to the framed preimage $(N,\varphi')$ of $(f',y_0,b_0)$. Their collapses are homotopic. Steps 1.1–3.1 compare $f'$ to the collapse of $(N,\varphi')$, while the rotation path compares $f$ to $f'$. The concatenation proves the claimed homotopy; [F4] makes it smooth. [F4, step 1.1, step 2.1, step 3.1, construct]

5.1 If $f$ is only continuous away from its regular fibre, the local deformation of steps 1.1–2.1 is still smooth on a small tube and continuous elsewhere, and the chart interpolation of step 3.1 is continuous. For step 4.1, basis independence is the explicit framed cylinder using a path of positive bases, which requires only the local differential on the fibre. The same constructions therefore give a continuous homotopy to the collapse. The regular fibre is compact because it is closed in $X$. All choice is inherited from the stated suppliers. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1] ∎

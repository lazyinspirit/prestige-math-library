---
id: lem-ip-pestov-identity-for-geodesic-data
kind: lemma
title: "Pestov identity for geodesic data on a simple surface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-simple-surface-and-geodesic-xray-transform
  - lem-ip-surface-geodesic-flow-index-form-and-transport
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gabriel P. Paternain, Mikko Salo, and Gunther Uhlmann, Geometric inverse problems, with emphasis on two dimensions"
      url: "https://sites.math.washington.edu/~gunther/publications/GIP2D_driver%20%2814%29.pdf"
      locator: "Chapter 3, §3.7, printed pp. 96–100; Chapter 4, §4.3, Proposition 4.3.2, printed p. 117 (PDF p. 133)."
    - title: "Joonas Ilmavirta, Geometry of geodesics, full lecture notes"
      url: "https://users.jyu.fi/~jojapeil/opetus/mats4120k26/mats4120-v2.pdf"
      locator: "Chapter 13, §13.3, Proposition 13.2, printed/PDF p. 91; the proposition assumes compact interior support, while the proof here treats zero boundary trace."
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, author-hosted lecture notes"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.4.2, Proposition 2.15, printed/PDF p. 17; the proposition assumes compact interior support, while the proof here treats zero boundary trace."
proof_strategy: direct
---

## Statement

Let $(M,g)$ be a compact, connected, nonempty, oriented smooth Riemannian surface with smooth strictly convex boundary, no conjugate points, and nontrapping geodesic flow. Set $SM=\{(x,v):x\in M,\ g_x(v,v)=1\}$ and let $\varphi_t$ be the unit-speed geodesic flow until boundary exit. For $w\in C^\infty(SM,\mathbb R)$ define $Xw=\left.\frac{d}{dt}\right|_{0}w(\varphi_t(x,v))$. Define $Vw(x,v)=\left.\frac{d}{d\theta}\right|_{0}w(x,\cos\theta\,v+\sin\theta\,v^\perp)$, where $v^\perp$ is the positive $90$-degree rotation of $v$, and set $X^\perp=[X,V]$. For a positive orthonormal frame $e_1,e_2$, let $K(x)=g(R(e_1,e_2)e_2,e_1)$, where $R(A,B)C=\nabla_A\nabla_BC-\nabla_B\nabla_AC-\nabla_{[A,B]}C$; this value is independent of the frame. Let $d\Sigma=dV_g(x)\,dS_x(v)$ be the Liouville measure and define $(a,b)=\int_{SM}ab\,d\Sigma$ and $\|a\|^2=(a,a)$. For every real-valued $u\in C^\infty(SM)$ with $u=0$ on $\partial SM$,
$$
\|VXu\|^2=\|XVu\|^2-(KVu,Vu)+\|Xu\|^2.
$$

## Statement references

[[def-ip-simple-surface-and-geodesic-xray-transform|Definition of a simple surface and its boundary conventions]]

[[lem-ip-surface-geodesic-flow-index-form-and-transport|Surface geodesic-flow commutators and integration by parts]]

## Facts & Assumptions

**Given:** A compact, connected, nonempty, oriented simple Riemannian surface with smooth boundary and a real-valued smooth function $u$ on $SM$ that vanishes on $\partial SM$.

[F1] [[def-ip-simple-surface-and-geodesic-xray-transform]]: a simple surface is compact, connected, and nonempty, has smooth strictly convex boundary, has no conjugate points, and is nontrapping; $SM$ consists of unit tangent vectors based in $M$.

[F2] [[lem-ip-surface-geodesic-flow-index-form-and-transport]]: $[X,V]=X^\perp$, $[V,X^\perp]=X$, and $[X,X^\perp]=-KV$.

[F3] [[lem-ip-surface-geodesic-flow-index-form-and-transport]]: $V$ is tangent to $\partial SM$; integration by parts holds for $X$ and $X^\perp$ when the product of the factors vanishes on the boundary, and it holds for $V$ for all smooth factors.

## Proof

1.1 Since $V$ rotates the vector within its fixed fibre, it is tangent to $\partial SM$. The restriction of $u$ to $\partial SM$ is zero, so its derivative along every tangent vector there is zero; hence $Vu=0$ on $\partial SM$. In particular, the boundary products $(Vu)(X^\perp u)$ and $(Vu)(Xu)$ vanish, as needed for the $X$ and $X^\perp$ integration-by-parts formulas in [F3]. [F1, F3, given]

2.1 Put $P=XVu$ and $Q=X^\perp u$. From $[X,V]=XV-VX=X^\perp$ we have $VXu=P-Q$, and therefore $\|VXu\|^2=\|P\|^2-2(P,Q)+\|Q\|^2$. [F2, step 1.1, algebra]

3.1 Integrating $X$ by parts with boundary factor $(Vu)(X^\perp u)=0$, then using $XX^\perp=X^\perp X-KV$, gives $(P,Q)=-(Vu,XX^\perp u)=-(Vu,X^\perp Xu)+(KVu,Vu)$. Integrating $X^\perp$ by parts with boundary factor $(Vu)(Xu)=0$ turns the first term into $(X^\perp Vu,Xu)$. [F2, F3, step 1.1, step 2.1, algebra]

4.1 The commutator $[V,X^\perp]=X$ implies $X^\perp Vu=VX^\perp u-Xu$. Thus $(X^\perp Vu,Xu)=(VX^\perp u,Xu)-\|Xu\|^2=-(X^\perp u,VXu)-\|Xu\|^2$, where the last equality is integration by parts for $V$, whose vector field is tangent to $\partial SM$. As $VXu=P-Q$, this gives $(P,Q)=-(Q,P-Q)-\|Xu\|^2+(KVu,Vu)=-(P,Q)+\|Q\|^2-\|Xu\|^2+(KVu,Vu)$. Solving gives $2(P,Q)=\|Q\|^2-\|Xu\|^2+(KVu,Vu)$. [F2, F3, step 3.1, algebra]

5.1 Substitute this value in step 2.1 and cancel $\|Q\|^2$. The result is $\|VXu\|^2=\|P\|^2+\|Xu\|^2-(KVu,Vu)=\|XVu\|^2-(KVu,Vu)+\|Xu\|^2$, which is the asserted identity. [step 2.1, step 4.1, algebra] ∎




## Source locator

The source comparisons and item-specific dispositions are recorded in `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-38.coverage.json` and the batch notes.

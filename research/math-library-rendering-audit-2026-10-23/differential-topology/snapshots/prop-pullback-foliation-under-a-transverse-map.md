---
id: prop-pullback-foliation-under-a-transverse-map
kind: proposition
title: "The pullback foliation under a transverse map"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
  - def-map-transverse-to-a-regular-foliation
  - def-smooth-distribution-on-a-manifold
  - thm-regular-foliations-and-integrable-distributions-correspond
  - thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
  - prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution
  - def-integrable-distribution
  - def-involutive-distribution
  - prop-integrable-distributions-are-involutive
  - prop-related-vector-fields-have-related-lie-brackets
  - def-pullback-vector-bundle-as-a-fibre-product
  - thm-the-pullback-fibre-product-is-a-smooth-vector-bundle
  - def-quotient-vector-bundle-by-a-subbundle
  - thm-a-vector-bundle-quotient-by-a-subbundle-is-a-smooth-vector-bundle
  - prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles
  - def-integral-manifold-of-a-distribution
  - def-regular-foliation-atlas
  - def-leaf-of-a-regular-foliation
  - def-countable-choice
  - cor-local-normal-form-for-submersions
  - thm-transverse-fibre-product-theorem
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $F$
be a regular foliation of a smooth manifold $M$ of codimension $q$, let $N$ be a
smooth manifold and let $f:N\to M$ be a smooth map transverse to $F$
([[def-map-transverse-to-a-regular-foliation]]). Put
$D^*_x:=(df_x)^{-1}\bigl(D_{f(x)}\bigr)$, where $D=TF$. Then $D^*$ is a smooth
rank-$(\dim N-q)$ distribution on $N$, it is integrable, and the associated
regular foliation $f^*F$ has as its leaves the connected components of the
preimages $f^{-1}(L)$ of the leaves $L$ of $F$, **with their intrinsic
pullback manifold topology**: identify $f^{-1}(L)$ with
$N\times_M L=\{(z,\ell):f(z)=j_L(\ell)\}$, where $j_L:L\to M$ uses the
intrinsic leaf structure. The components here need not be the components in
the subspace topology inherited from $N$. Each leaf of $f^*F$ is mapped
by $f$ into a leaf of $F$.

## Facts & Assumptions

**Given:** A regular foliation $F$ of $M$ of codimension $q$ with tangent distribution $D=TF$, a smooth manifold $N$, a smooth map $f:N\to M$ transverse to $F$, and the family $D^*_x=(df_x)^{-1}(D_{f(x)})$.

[F1] Transversality means $df_x(T_xN)+D_{f(x)}=T_{f(x)}M$ for every $x\in N$, and $D$ is a smooth rank-$(\dim M-q)$ subbundle of $TM$ ([[def-map-transverse-to-a-regular-foliation]], [[def-smooth-distribution-on-a-manifold]], [[thm-regular-foliations-and-integrable-distributions-correspond]]).

[F2] A regular foliation has an atlas of foliation charts $\varphi=(x,y):U\to\mathbb R^{k}\times\mathbb R^q$ with $D|_U=\ker dy$; the connected components of the level sets of $y$ are the plaques, and the leaves are the maximal connected integral manifolds of $D$ ([[def-regular-foliation-atlas]], [[def-leaf-of-a-regular-foliation]], [[thm-regular-foliations-and-integrable-distributions-correspond]]).

[F3] A smooth vector bundle map over the identity whose fibre rank is constant equal to $k$ has kernel and image that are smooth subbundles of rank $\dim E-k$ and $k$ ([[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]).

[F4] A rank-$k$ smooth distribution is integrable when through every point there passes an integral manifold of dimension $k$, an integral manifold being a connected injectively immersed submanifold on which $di$ identifies the tangent space with the distribution ([[def-integrable-distribution]], [[def-integral-manifold-of-a-distribution]]).

[F5] For an integrable distribution the $\sim$-class $L_p$ of a point carries a unique smooth structure making the inclusion a connected injective immersion and an integral manifold; and any connected integral manifold through $p$ maps uniquely into $L_p$ ([[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]).

[F6] If $P$ is a connected manifold and $G:P\to M$ is smooth with $dG(TP)\subseteq D$ and $G(P)$ meeting a leaf $L$ of $F$, then $G(P)\subseteq L$; the leaves are maximal connected integral manifolds ([[prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution]]).

[F7] A submersion is locally a coordinate projection ([[cor-local-normal-form-for-submersions]]). Transverse maps have a smooth embedded fibre product in the product of their domains ([[thm-transverse-fibre-product-theorem]]).

## Proof

**Proof technique:** direct.

1.1 **$D^*$ is a smooth subbundle.** Let $U$ be a foliation chart of $F$ with transverse coordinates $y:U\to\mathbb R^q$, so $D|_U=\ker dy$ by [F2], and put $V:=f^{-1}(U)$, an open subset of $N$. Then $g:=y\circ f:V\to\mathbb R^q$ is a submersion: for $x\in V$, $dg_x=dy_{f(x)}\circ df_x$ annihilates $\ker df_x$ and maps $df_x(T_xN)$ onto $dy_{f(x)}(T_{f(x)}M)=T_{y(f(x))}\mathbb R^q$, the last surjectivity because $df_x(T_xN)+D_{f(x)}=T_{f(x)}M$ and $dy$ kills $D$. Hence $\ker dg_x=(df_x)^{-1}(\ker dy_{f(x)})=D^*_x$ for every $x\in V$. Thus $D^*$ is locally the kernel of a constant-rank bundle map $TN|_V\to V\times\mathbb R^q$, and by [F3] it is a smooth subbundle of rank $\dim N-q$ on $V$. The local descriptions agree on overlaps, since all of them compute the same family of subspaces $D^*_x$; hence $D^*$ is a smooth distribution of rank $\dim N-q$ on all of $N$. [F1, F2, F3, construct]

2.1 **Local integral manifolds.** In step 1.1, $g=y\circ f$ is a submersion. By [F7], locally it is a coordinate projection, so a small connected piece of $g^{-1}(g(x))$ is an embedded submanifold of dimension $\dim N-q$ with tangent space $\ker dg=D^*$. Thus $D^*$ has an integral manifold through every point. [F4, F7, step 1.1]

3.1 **Intrinsic leaf preimages.** Let $j_L:L\to M$ be the intrinsic integral immersion of a leaf. By [F1], $f$ and $j_L$ are transverse, so [F7] makes $P_L=N\times_M L$ an embedded manifold in $N\times L$. Projection $P_L\to N$ is injective because $j_L$ is. In a plaque neighborhood of $\ell\in L$, its local image is a level set of $y\circ f$, so step 2.1 shows that this projection is an immersion with tangent image $D^*$. This gives the stated intrinsic topology on the set $f^{-1}(L)$. Each connected component of $P_L$ is therefore a connected integral manifold of $D^*$. Other plaques of $L$ in the same ambient chart are different intrinsic neighborhoods; no single transverse value $c_L$ is assigned to all of $L\cap U$. [F1, F2, F4, F5, F7, step 2.1, construct]

3.2 **Global integrability.** By [F4] and step 2.1, $D^*$ is integrable, and [F2] and [[thm-regular-foliations-and-integrable-distributions-correspond]] associate to it a regular foliation $f^*F$ whose leaves are the maximal connected integral manifolds of $D^*$; by [F5] the leaf through a point is the $\sim_{D^*}$-class of that point. [F4, F5, step 2.1]

4.1 **Every leaf of $f^*F$ lies in a preimage of a leaf of $F$.** Let $L'$ be a leaf of $f^*F$, with inclusion $i:L'\to N$. For $u\in L'$, $d(f\circ i)_u(T_uL')=df_u(D^*_u)\subseteq D_{f(u)}$. Since $L'$ is connected, [F6] applied to the smooth map $f\circ i$ shows that $f(L')$ lies in a single leaf $L$ of $F$. Hence $L'\subseteq f^{-1}(L)$. [F6, step 3.2]

5.1 **The leaves are exactly the intrinsic components.** Let $C$ be a connected component of $P_L$ and let $x$ be in its image in $N$. By step 3.1 and [F5], this image lies in the pullback leaf $L'$ through $x$. Conversely, step 4.1 and the smooth factorization in [F6] give a smooth map $L'\to L$ lifting $f|_{L'}$. Its graph defines a continuous map $L'\to P_L$; its image is connected and meets $C$, hence lies in $C$. Thus $L'$ is exactly the image of $C$. Every point of $P_L$ belongs to such a component, proving the leaf description and the final mapping assertion. [F5, F6, step 3.1, step 3.2, step 4.1] ∎

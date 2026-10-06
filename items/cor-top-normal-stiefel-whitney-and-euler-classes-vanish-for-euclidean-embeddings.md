---
id: cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings
kind: corollary
title: "Top normal classes vanish for Euclidean embeddings"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["lem-positive-intermediate-cohomology-of-a-one-point-compactified-euclidean-space-vanishes", "def-pontryagin-thom-collapse-of-an-embedded-submanifold", "def-thom-class-and-thom-isomorphism-interface", "def-euler-class-by-zero-section-pullback-of-the-thom-class", "thm-mod-two-euler-class-is-the-top-stiefel-whitney-class", "lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class", "lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity", "lem-second-countable-smooth-manifolds-have-cw-homotopy-type", "prop-singular-cohomology-is-contravariantly-functorial", "def-axiom-of-choice", "def-stiefel-whitney-classes-from-the-projective-bundle-relation"]
justified_by: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "§11, Theorem 11.3, Corollary 11.4 and projective-space example, printed pp.119–121"
---

## Statement

Assume AC. Let $j:M^m\hookrightarrow\mathbb R^{m+k}$ be a smooth embedding of a closed smooth manifold, with $m\ge1$ and $k\ge1$, and let $\nu_j$ be its rank-$k$ normal bundle. Then $$\bar w_k(TM)=w_k(\nu_j)=0\quad\text{in }H^k(M;\mathbb F_2).$$ If $\nu_j$ is integrally oriented, then also $$e(\nu_j)=0\quad\text{in }H^k(M;\mathbb Z).$$ Together with rank vanishing, $\bar w_i(TM)=0$ for every $i\ge k$. Thus a nonzero top normal class obstructs embedding in codimension $k$, even though rank alone permits that class for an immersion.

## Facts & Assumptions

**Given:** A smooth embedding $j:M^m\hookrightarrow\mathbb R^{m+k}$ of a closed smooth manifold with $m\ge1$, $k\ge1$, its normal bundle $\nu_j$ of rank $k$, and AC ([[def-axiom-of-choice]]).

[F1] Under $\mathrm{AC}_\omega$ (hence under AC) the embedding gives a rank-$k$ stable normal inverse $(\nu_j,\varphi)$ of $M$, where $\nu_j=j^*T\mathbb R^{m+k}/dj(TM)$ is the normal quotient ([[lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity]]); if $\nu_j$ is integrally oriented it is an oriented rank-$k$ bundle in the sense of the Thom interface.

[F2] Let $\Phi$ be a compatible tubular chart for $\nu_j$ with a metric $h$ and radius $\rho$ (existing under countable choice, hence under AC); its collapse is a based continuous map $c:(\mathbb R^{m+k})^+\to\operatorname{Th}_h(\nu_j)$ sending the tube to the disk-sphere quotient model and every other point to the basepoint. The zero section $s:M\to D(\nu_j)$ followed by the quotient map $q:D(\nu_j)\to\operatorname{Th}_h(\nu_j)$ is the based zero section $z=q\circ s$, and on $M$ the collapse satisfies $c\circ j=z$ ([[def-pontryagin-thom-collapse-of-an-embedded-submanifold]]).

[F3] For either coefficient ring $R=\mathbb F_2$ or $R=\mathbb Z$ with a supplied integral orientation, the normalized Thom class $u\in H^k(D(\nu_j),S(\nu_j);R)$ corresponds under the quotient identification to a class $u\in H^k(\operatorname{Th}_h(\nu_j);R)$ of positive degree, and the quotient-map pullback $q^*(u)$ is the relative-to-absolute image of the relative Thom class; hence $z^*(u)=s^*q^*(u)=e(\nu_j)$, the Euler class of [[def-euler-class-by-zero-section-pullback-of-the-thom-class]], which by [[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]] equals $w_k(\nu_j)$ for $R=\mathbb F_2$, while for $R=\mathbb Z$ it is the oriented Euler class ([[def-thom-class-and-thom-isomorphism-interface]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]], [[thm-mod-two-euler-class-is-the-top-stiefel-whitney-class]]).

[F4] Since $m\ge1$ and $k\ge1$, one has $0<k<N$ for $N=m+k$, so the one-point compactification has $H^k((\mathbb R^N)^+;R)=0$ for $R=\mathbb Z$ and $R=\mathbb F_2$ ([[lem-positive-intermediate-cohomology-of-a-one-point-compactified-euclidean-space-vanishes]]). Cohomology is contravariantly functorial, so $f^*(0)=0$ and $(c\circ j)^*=j^*c^*$ ([[prop-singular-cohomology-is-contravariantly-functorial]]).

[F5] A closed smooth manifold is a paracompact Hausdorff CGWH space of CW homotopy type over which every smooth bundle, in particular $\nu_j$, is numerable ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]); this places $M$ and $\nu_j$ in the scope of the Thom interface and of the mod-two Euler class theorem.

[F6] For the stable normal inverse $(\nu_j,\varphi)$ one has $w(\nu_j)=w(TM)^{-1}$, so $w_k(\nu_j)=\bar w_k(TM)$; also $w_i(\nu_j)=0$ for $i>k$ because $\nu_j$ has rank $k$ ([[lem-normal-stiefel-whitney-class-is-the-multiplicative-inverse-of-the-tangent-class]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

## Proof

1.1 Let $u$ denote the normalized Thom class of $\nu_j$ in degree $k$, in the relative model, and also its image in $H^k(\operatorname{Th}_h(\nu_j);R)$ under the quotient identification of [F3]; the degree $k$ is positive and the Thom space is based, so the reduced and ordinary descriptions agree in this degree. Pulling back along the collapse gives $c^*u\in H^k((\mathbb R^{m+k})^+;R)$, which is zero by [F4] since $0<k<m+k$; the interface and the mod-two Euler theorem apply to $\nu_j$ because the closed manifold is a suitable base by [F5]. [F1, F2, F3, F4, F5]

2.1 By [F2] the collapse satisfies $c\circ j=z$; functoriality [F4] gives $$z^*u=(c\circ j)^*u=j^*c^*u=j^*0=0\qquad\text{in }H^k(M;R).$$ The composite $z=q\circ s$ is the zero section followed by the quotient map, so by [F3] $z^*u=s^*q^*u=e(\nu_j)$. Hence $e(\nu_j)=0$ in $H^k(M;R)$ for the chosen coefficient ring: for $R=\mathbb Z$ this is the oriented Euler class, and for $R=\mathbb F_2$ the mod-two Euler class. [F2, F3, F4, step 1.1]

3.1 For $R=\mathbb F_2$, the published identification $e_2(\nu_j)=w_k(\nu_j)$ of [F3] gives $w_k(\nu_j)=0$ in $H^k(M;\mathbb F_2)$, and by [F1] and [F6] this class equals $\bar w_k(TM)$. For $R=\mathbb Z$ with $\nu_j$ integrally oriented, step 2.1 gives the oriented Euler vanishing $e(\nu_j)=0$. [F1, F3, F6, step 2.1]

4.1 Finally, for every $i>k$ the rank convention gives $w_i(\nu_j)=0$ because $\operatorname{rank}\nu_j=k$, so by [F6] $\bar w_i(TM)=w_i(\nu_j)=0$ for all $i>k$; together with the degree-$k$ vanishing of step 3.1 this gives $\bar w_i(TM)=0$ for every $i\ge k$. In particular a nonzero top normal class in degree $k$ is an obstruction to embedding in codimension exactly $k$, in contrast with the rank test, which only sees the classes of degree $>k$ for immersions. The argument uses AC through the Thom interface and the embedding normal-bundle lemma; orientation is needed only for the integral Euler clause, and no Poincaré duality or ambient fundamental class is used. [F3, F6, step 3.1] ∎

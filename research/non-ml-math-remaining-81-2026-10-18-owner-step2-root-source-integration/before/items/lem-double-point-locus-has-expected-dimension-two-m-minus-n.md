---
id: lem-double-point-locus-has-expected-dimension-two-m-minus-n
kind: lemma
title: The double point locus has the expected dimension $2m-n$
status: published
origin: session
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-self-transverse-immersion-and-double-point-locus
- thm-transverse-preimage-theorem
- def-a-smooth-map-transverse-to-an-embedded-submanifold
- def-embedded-submanifold-and-slice-chart
- def-differential-of-a-smooth-map
- cor-negative-expected-dimension-generic-intersections-are-empty
- def-countable-choice
- lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold
- thm-chain-rule-for-differentials-of-smooth-maps
- prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space
- cor-every-immersion-is-locally-an-embedding
- prop-smooth-maps-are-continuous
- def-transverse-smooth-maps
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University
      Press 2016; full text retrieved from the Internet Archive Wayback Machine snapshot of the ETH Zürich course
      copy), Chapter 6 §§6.2–6.4, printed pp. 169–192 (Theorem 6.2.1; Propositions 6.3.1 and 6.3.3; Theorems 6.3.2,
      6.3.4, 6.3.6, 6.4.5, 6.4.8 and 6.4.9; Lemma 6.3.5)
    url: https://web.archive.org/web/20241113132819/https://people.math.ethz.ch/~dkosanovic/24-FS/Wall-Differential-Topology.pdf
  - title: Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045), §1,
      article pp. 2–5 (self-intersection set; ambient versus non-ambient isotopy) and §2, article pp. 6–14 (Theorems
      2.1–2.3 and 2.8; the modulo 2 and integral Whitney obstruction; the Whitney invariant); §3 and §5 used only
      for the recorded knotting boundary
    url: https://arxiv.org/pdf/math/0604045
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $f:M^m\to X^n$ be a self-transverse immersion, with double point locus $\Delta_2(f)$, double point set $\Sigma(f)$ and swap involution $\tau(x,y)=(y,x)$ as in [[def-self-transverse-immersion-and-double-point-locus]]. Then:

1. $\Delta_2(f)$ is a closed embedded submanifold of the open submanifold $M\times M\setminus\Delta_M$ of $M\times M$, and if $2m-n\ge0$ it has pure dimension $2m-n$;
2. if $2m-n<0$, then $\Delta_2(f)=\varnothing$ and $\Sigma(f)=\varnothing$;
3. the swap involution restricts to a smooth free involution of $\Delta_2(f)$; the map
$$q:\Delta_2(f)\longrightarrow X,\qquad q(x,y):=f(x)=f(y),$$
is a smooth immersion with image $\Sigma(f)$ and satisfies $q\circ\tau=q$, and every point of $\Delta_2(f)$ has a neighbourhood on which $q$ is an embedding; $q$ induces a surjection from the orbit set $\Delta_2(f)/\tau$ onto $\Sigma(f)$ sending an orbit to its common image, and this surjection is a bijection exactly when no point of $X$ is the image of more than two points of $M$; in that case $\Sigma(f)$ is the quotient of $\Delta_2(f)$ by the free involution and $q$ is two-to-one onto its image.

No finiteness of $\Delta_2(f)$ is asserted.

## Facts & Assumptions

**Given:** Countable choice, a self-transverse immersion $f:M^m\to X^n$, and the notation of [[def-self-transverse-immersion-and-double-point-locus]].

[F1] $\Delta_2(f)=\{(x,y)\in M\times M\setminus\Delta_M:f(x)=f(y)\}$ and $\Sigma(f)=f(\operatorname{pr}_1\Delta_2(f))$; self-transversality means that $f\times f$ is transverse to $\Delta_X$ on $M\times M\setminus\Delta_M$, i.e. $df_x(T_xM)+df_y(T_yM)=T_rX$ at every double point $r=f(x)=f(y)$ ([[def-self-transverse-immersion-and-double-point-locus]]).

[L1] If $F:P\to N$ is smooth and transverse to an embedded submanifold $Z\subseteq N$ of codimension $c$, then $F^{-1}(Z)$ is an embedded submanifold of $P$ of codimension $c$, and $T_pF^{-1}(Z)=\{v\in T_pP:dF_p(v)\in T_{F(p)}Z\}$ ([[thm-transverse-preimage-theorem]]).

[L2] Transversality of a smooth map $F$ to an embedded submanifold $Z$ is the condition $dF_p(T_pP)+T_{F(p)}Z=T_{F(p)}N$ for all $p\in F^{-1}(Z)$ ([[def-a-smooth-map-transverse-to-an-embedded-submanifold]]); for the inclusion $\iota:Z\hookrightarrow N$ this is exactly the transversality of the maps $F$ and $\iota$ in the sense of [[def-transverse-smooth-maps]].

[L3] $\Delta_X$ is a closed embedded submanifold of $X\times X$ of dimension $n=\dim X$, and $\Delta_M$ is a closed embedded submanifold of $M\times M$ of dimension $m$ ([[lem-the-diagonal-of-a-smooth-manifold-is-a-closed-embedded-submanifold]]).

[L4] If smooth maps $F:U^x\to W^w$ and $G:Z^z\to W^w$ are transverse and $x+z<w$, then the fibre product $U\times_WZ$ is empty; in particular transverse embedded submanifolds of dimensions $a,b$ in a manifold of dimension $w>a+b$ do not meet ([[cor-negative-expected-dimension-generic-intersections-are-empty]]).

[L5] An embedded $k$-submanifold has $k\in\mathbb N$ with $0\le k\le\dim M$ and carries the subspace topology ([[def-embedded-submanifold-and-slice-chart]]).

[L6] The differential satisfies $d(G\circ F)_p=dG_{F(p)}\circ dF_p$ ([[thm-chain-rule-for-differentials-of-smooth-maps]]), and $dF_p$ is a linear map $T_pP\to T_{F(p)}N$ ([[def-differential-of-a-smooth-map]]).

[L7] A map out of an embedded submanifold is smooth if and only if it agrees locally with the restriction of a smooth ambient map ([[prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space]]).

[L8] Every immersion is locally an embedding: at each point some neighbourhood is carried homeomorphically onto an embedded submanifold ([[cor-every-immersion-is-locally-an-embedding]]).

[L9] Smooth maps are continuous ([[prop-smooth-maps-are-continuous]]).

[A1] Countable choice is the hypothesis carried by the transversality machinery used here; the arguments of this proof select nothing further ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The map $f\times f$ is smooth on the open submanifold $M\times M\setminus\Delta_M$ and transverse to $\Delta_X$ there by [F1]; by [L3] the diagonal $\Delta_X$ is an embedded submanifold of $X\times X$ of codimension $2n-n=n$. Applying [L1] to the restriction of $f\times f$ to $M\times M\setminus\Delta_M$ yields that $\Delta_2(f)$ is an embedded submanifold of $M\times M\setminus\Delta_M$ of codimension $n$, that is, of pure dimension $2m-n$ when $2m-n\ge0$, and in particular $\Delta_2(f)$ carries the subspace topology by [L5]. [L1, L3, L5, F1, A1]

1.2 The tangent space description at a point $(x,y)\in\Delta_2(f)$ with $r=f(x)=f(y)$: by [L1], a tangent vector lies in $T_{(x,y)}\Delta_2(f)$ exactly when its image under $d(f\times f)_{(x,y)}$ lies in $T_{(r,r)}\Delta_X$. By [L6] applied to the components $\pi_1\circ(f\times f)=f\circ\pi_1$ and $\pi_2\circ(f\times f)=f\circ\pi_2$, this image is $(df_x(v),df_y(w))$ for a tangent vector $(v,w)\in T_xM\oplus T_yM$, while $T_{(r,r)}\Delta_X=\{(u,u):u\in T_rX\}$; hence $$T_{(x,y)}\Delta_2(f)=\{(v,w)\in T_xM\oplus T_yM:df_x(v)=df_y(w)\}.$$ [L1, L6, F1]

1.3 The set $\Delta_2(f)$ is closed in $M\times M\setminus\Delta_M$: it is the preimage under the continuous map $f\times f$ of the closed set $\Delta_X$ by [L3] and [L9]. [L3, L9, F1]

2.1 Suppose $2m-n<0$, that is $2m+n<2n$. The map $f\times f$, restricted to $M\times M\setminus\Delta_M$, and the inclusion $\Delta_X\hookrightarrow X\times X$ are transverse by [F1] and [L2], with source dimensions $2m$ and $n$ and target dimension $2n$; by [L4] their fibre product is empty. The fibre product projects bijectively onto the set of pairs $(u,\delta)$ with $f\times f(u)=\delta$ and $\delta\in\Delta_X$, which is exactly $\Delta_2(f)$, so $\Delta_2(f)=\varnothing$ and hence $\Sigma(f)=f(\operatorname{pr}_1\Delta_2(f))=\varnothing$. [L2, L4, F1, step 1.1]

2.2 The swap $\tau(x,y)=(y,x)$ is a diffeomorphism of $M\times M$ (an involution, smooth with smooth inverse), and it preserves $M\times M\setminus\Delta_M$ and the condition $f(x)=f(y)$; hence it restricts to a smooth involution of the embedded submanifold $\Delta_2(f)$ that is free, since $\tau(x,y)=(x,y)$ would force $x=y$, which is excluded on $M\times M\setminus\Delta_M$. [L7, F1, step 1.1]

2.3 The map $q(x,y)=f(x)=f(y)$ is smooth on $\Delta_2(f)$: it is the restriction of the smooth ambient map $M\times M\setminus\Delta_M\to X$, $(x,y)\mapsto f(x)$, so the criterion of [L7] applies. Its differential is injective at every point: by [L6], $dq_{(x,y)}(v,w)=df_x(v)$ for $(v,w)\in T_{(x,y)}\Delta_2(f)$; if $dq_{(x,y)}(v,w)=0$ then $df_y(w)=df_x(v)=0$ by the description of step 1.2, so $w=0$ and then $v=0$ because $df_x$ and $df_y$ are injective. Hence $q$ is an immersion, and by [L8] every point of $\Delta_2(f)$ has a neighbourhood on which $q$ is an embedding onto an embedded submanifold of $X$. [L6, L7, L8, F1, step 1.2]

3.1 By definition of $\Sigma(f)$ as $f(\operatorname{pr}_1\Delta_2(f))$ the image of $q$ is $\Sigma(f)$, and $q\circ\tau=q$ because $\tau$ only exchanges the two coordinates, which have equal images. [F1, step 2.3]

4.1 The fibres of $q$ are unions of $\tau$-orbits: $q(x,y)=r$ if and only if $x$ and $y$ are two distinct points of the preimage $f^{-1}(r)$, so $q^{-1}(r)$ is in bijection with the ordered pairs of distinct points of $f^{-1}(r)$, on which $\tau$ acts by exchanging the two entries. Consequently $q$ induces a well-defined surjection $\Delta_2(f)/\tau\to\Sigma(f)$ sending the orbit of $(x,y)$ to $f(x)$, and this map is injective exactly when every fibre $f^{-1}(r)$ with $r\in\Sigma(f)$ consists of exactly two points, that is, exactly when no point of $X$ is the image of more than two points of $M$. [F1, step 3.1]

5.1 The claims are steps 1.1 and 1.3 for clause 1, step 2.1 for clause 2, and steps 2.2, 2.3, 3.1 and 4.1 for clause 3. No finiteness of $\Delta_2(f)$ was used or asserted. [step 1.1, step 1.3, step 2.1, step 2.2, step 2.3, step 3.1, step 4.1] ∎

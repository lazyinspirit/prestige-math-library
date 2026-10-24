---
id: ex-complex-torus-holomorphic-atlas
kind: example
title: The complex torus as a Riemann surface
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-riemann-surface-and-holomorphic-atlas
  - def-quotient-topology
  - def-initial-and-final-topology
  - thm-complex-numbers-are-the-real-coordinate-plane
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-compactness-under-continuous-maps
  - thm-continuous-image-of-a-connected-space
  - thm-heine-borel-rn
  - ex-discrete-metric-compact-iff-finite
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-topological-manifold-without-boundary
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007)"
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 1 §2, Example 1.7(ii) and Example 1.9(ii), printed p. 10: for a lattice L in C the quotient C/L has holomorphic translation transitions, and is a Riemann surface called a complex torus."
    - title: "Curtis T. McMullen, Riemann Surfaces, Math 213b course notes (2026)"
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 1–2, examples of Riemann surfaces; used as an independent cross-check of the quotient charts."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Let $\omega_1,\omega_2\in\mathbb C$ be $\mathbb R$-linearly independent, so that
$\operatorname{Im}(\omega_2/\omega_1)\ne0$, and let
$\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2$. Then $\mathbb C/\Lambda$, the
quotient of $\mathbb C$ by the translation action of $\Lambda$, is a compact
Riemann surface: the quotient map is open, the small discs on which it is
injective provide the charts, and all transition functions of those charts have
the form $z\mapsto z+\lambda$ with $\lambda\in\Lambda$.

## Facts & Assumptions

**Given:** $\mathbb R$-linearly independent $\omega_1,\omega_2\in\mathbb C$ and the lattice $\Lambda=\mathbb Z\omega_1+\mathbb Z\omega_2\subseteq\mathbb C$; the quotient map $q:\mathbb C\to\mathbb C/\Lambda$ with the quotient topology.

[F1] A Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas: charts are homeomorphisms onto open subsets of $\mathbb C$ and compatible charts have holomorphic transitions in both directions ([[def-riemann-surface-and-holomorphic-atlas]]).

[F2] For a surjection $q$ the quotient topology is $\{V:q^{-1}(V)\ \text{open}\}$, so $q$ is continuous; hence $q^{-1}(q(W))=\bigcup_{\lambda\in\Lambda}(W+\lambda)$ is open for every open $W$, and therefore $q(W)$ is open ([[def-quotient-topology]], [[def-initial-and-final-topology]]).

[F3] The bijection $\Phi(a+bi)=(a,b)$ identifies $\mathbb C$ with $\mathbb R^2$, so $\mathbb C$ is read as $\mathbb R^2$; every linear map $\mathbb R^m\to\mathbb R^n$ is bounded: there is $K\ge0$ with $\lVert Lh\rVert\le K\lVert h\rVert$ for all $h$ ([[thm-complex-numbers-are-the-real-coordinate-plane]], [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[F4] Continuous images of compact sets and of connected sets are compact and connected, respectively ([[thm-compactness-under-continuous-maps]], [[thm-continuous-image-of-a-connected-space]]).

[F5] In $\mathbb R^2$ the square $[0,1]^2$ is compact, and a closed subset of a Hausdorff space is closed with respect to any compact ambient set that contains it ([[thm-heine-borel-rn]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

[F6] A discrete compact metric space is finite ([[ex-discrete-metric-compact-iff-finite]]).

[F7] $\mathbb C=\mathbb R^2$ and its open subsets are topological $2$-manifolds, hence Hausdorff and second countable ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]], [[def-topological-manifold-without-boundary]]).

## Verification

**Proof technique:** direct.

1.1 (A gap constant exists.) The map $T(s,t)=s\omega_1+t\omega_2$ is an $\mathbb R$-linear isomorphism $\mathbb R^2\to\mathbb C$, because $\omega_1,\omega_2$ are $\mathbb R$-linearly independent, and $\Lambda=T(\mathbb Z^2)$; applying [F3] to the inverse of $T$ gives $c>0$ with $|T(s,t)|\ge c\max(|s|,|t|)$, hence $|\lambda|\ge c$ for every nonzero $\lambda\in\Lambda$. [F3, given]

1.2 ($q$ is continuous and open.) The quotient topology makes $q$ continuous, and for open $W\subseteq\mathbb C$ the preimage $q^{-1}(q(W))=\bigcup_{\lambda\in\Lambda}(W+\lambda)$ is open as a union of translates of an open set, so $q(W)$ is open by the definition of the quotient topology. [F2]

2.1 (Lattice points in a disc are finite.) If $\lambda\ne\lambda'$ are in $\Lambda$ then $|\lambda-\lambda'|\ge c>0$ by step 1.1, so $\Lambda$ is discrete: each $\{\lambda\}$ is open in $\Lambda$; for every $R>0$ the set $\Lambda\cap\overline{D(0,R)}$ is closed and bounded in $\mathbb C=\mathbb R^2$, hence compact by [F5] and discrete as a subspace, hence finite by [F6]. [F5, F6, step 1.1]

2.2 (Connectedness.) The space $\mathbb C$ is convex, hence connected, and $q$ is continuous and surjective, so $\mathbb C/\Lambda=q(\mathbb C)$ is connected by [F4]. [F4, step 1.2]

2.3 (Compactness.) The map $F(s,t)=q(T(s,t))$ is continuous on the compact square $[0,1]^2$, so its image is compact by [F4] and [F5]; every $z\in\mathbb C$ equals $T(s,t)$ for some $(s,t)\in\mathbb R^2$, and subtracting the integer parts of $s$ and $t$ exhibits $z$ as an element of $T([0,1]^2)+\Lambda$, so $F([0,1]^2)=\mathbb C/\Lambda$; hence $\mathbb C/\Lambda$ is compact. [F4, F5, step 1.1, step 1.2]

2.4 (Small discs give charts.) Fix any $z\in\mathbb C$ and put $W=D(z,c/4)$; if $q(w)=q(w')$ for $w,w'\in W$ then $w-w'\in\Lambda$ and $|w-w'|<c/2<c$, so $w=w'$ by step 1.1; thus $q$ restricted to $W$ is an injective continuous open map onto the open set $q(W)$ of $\mathbb C/\Lambda$, and its inverse $\varphi=q|_W^{-1}$ is a homeomorphism $q(W)\to W\subseteq\mathbb C$, that is, a chart; the sets $q(D(z,c/4))$ over $z\in\mathbb C$ cover $\mathbb C/\Lambda$. [step 1.1, step 1.2]

2.5 (Second countability.) Let $\mathcal B$ be a countable base of $\mathbb C$; the family $\{q(B):B\in\mathcal B\}$ is countable and consists of open sets by step 1.2, and it is a base of $\mathbb C/\Lambda$: given $[z]\in V$ with $V$ open, the set $q^{-1}(V)$ is an open neighbourhood of $z$, so some $B\in\mathcal B$ satisfies $z\in B\subseteq q^{-1}(V)$, whence $[z]\in q(B)\subseteq V$. [F7, step 1.2]

3.1 (Hausdorffness.) Let $[z]\ne[z']$, so $z-z'\notin\Lambda$; the distance $d=\inf\{|z-z'-\lambda|:\lambda\in\Lambda\}$ is positive, because otherwise points of $\Lambda$ would accumulate at $z-z'$ inside some disc $\overline{D(0,R)}$ containing $z-z'$ and infinitely many distinct lattice points, contradicting the finiteness in step 2.1; with $r=d/3$, the open sets $q(D(z,r))$ and $q(D(z',r))$ of step 1.2 are disjoint, since $u-v\in\Lambda$ for $u\in D(z,r)$, $v\in D(z',r)$ would give $|z-z'-(u-v)|<2d/3<d$. [step 1.2, step 2.1, given]

3.2 (Transition functions are translations.) Let $\varphi=q|_W^{-1}$ and $\varphi'=q|_{W'}^{-1}$ be two charts as in step 2.4; on the overlap of their images, $\varphi'(\varphi^{-1}(w))=w+\lambda(w)$ with $\lambda(w)=\varphi'(q(w))-w\in\Lambda$, and $w\mapsto\lambda(w)$ is continuous because both $\varphi^{-1}$ and $q$ are; since distinct lattice points are at distance at least $c$ by step 1.1, $\lambda$ is locally constant, so near each point the transition is $w\mapsto w+\lambda$ for a fixed $\lambda\in\Lambda$, which is holomorphic. [step 1.1, step 2.4]

4.1 (Conclusion.) The quotient $\mathbb C/\Lambda$ is nonempty, connected by step 2.2, compact by step 2.3, Hausdorff by step 3.1 and second countable by step 2.5, and the charts of step 2.4 have the holomorphic transition functions $w\mapsto w+\lambda$ of step 3.2, so they form a holomorphic atlas; by [F1], $\mathbb C/\Lambda$ is a compact Riemann surface. [F1, step 2.2, step 2.3, step 2.4, step 2.5, step 3.1, step 3.2] ∎

## Remarks

For the lattices $\Lambda$ used here no nonconstant holomorphic function on
$\mathbb C$ descends to $\mathbb C/\Lambda$; meromorphic functions are supplied
later by the Weierstrass $\wp$ function on a different page. The proof above is
choice free: the only selections are single points and single basic open sets in
proofs of inclusions, and no countable family of choices is made. The examples
$\mathbb C$, the unit disc and the annulus of
[[ex-basic-riemann-surface-atlases]] are noncompact, while the torus is compact,
and the sphere is both compact and simply connected.

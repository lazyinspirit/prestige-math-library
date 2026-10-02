---
id: lem-three-simply-connected-models-are-inequivalent
kind: lemma
title: "The sphere, plane and disc are pairwise biholomorphically distinct"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - thm-liouville-bounded-entire-function
  - def-riemann-sphere-holomorphic-charts
  - def-simply-connected
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-convex-subsets-have-trivial-fundamental-group
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - thm-induced-fundamental-group-map-functoriality
  - def-compact-space
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - thm-compactness-under-continuous-maps
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-riemann-surface-and-holomorphic-atlas
  - def-biholomorphic-map
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  scraped: []
  references:
    - title: "Donald E. Marshall, The Uniformization Theorem"
      url: "https://sites.math.washington.edu/~marshall/math_536/uniformizationII.pdf"
      locator: "PDF pp. 1-15, especially Lemmas 1-5, Theorem 4, Corollary 6, and the non-Green proof"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 1 §§2.4 and 5, printed pp. 64-68 and 115-118, Theorems 5.1-5.6"
---

## Statement

The Riemann sphere $\widehat{\mathbb C}$, the complex plane $\mathbb C$ and the
unit disc $\mathbb D$ are simply connected Riemann surfaces, and no two of them
are biholomorphic.

## Facts & Assumptions
**Given:** The three spaces $\widehat{\mathbb C}$, $\mathbb C$ and $\mathbb D$ with their usual topologies; $\mathbb D=\{z\in\mathbb C:|z|<1\}$.

[F1] A Riemann surface is a nonempty connected Hausdorff second-countable space with a holomorphic atlas; a plane domain is a nonempty connected open subset of $\mathbb C$ ([[def-riemann-surface-and-holomorphic-atlas]]).

[F2] The Riemann sphere carries the charts $\phi_0$ on $\widehat{\mathbb C}\setminus\{\infty\}$ and $\phi_\infty$ on $\widehat{\mathbb C}\setminus\{0\}$ with holomorphic transition maps, the standard holomorphic charts of the Riemann sphere ([[def-riemann-sphere-holomorphic-charts]]).

[F3] Stereographic projection $\Sigma:\widehat{\mathbb C}\to S^2$ is a homeomorphism onto the unit sphere $S^2\subseteq\mathbb R^3$ ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]).

[F4] For every $n\ge2$ the unit sphere $S^n\subseteq\mathbb R^{n+1}$ is simply connected ([[thm-higher-dimensional-spheres-are-simply-connected]]).

[F5] A space is simply connected when it is nonempty, path-connected, and $\pi_1(X,x_0)$ has exactly one element for every basepoint ([[def-simply-connected]]).

[F6] For a pointed continuous map $f:(X,x_0)\to(Y,y_0)$ the induced map $f_*([\alpha])=[f\circ\alpha]$ is a well-defined homomorphism, with $\operatorname{id}_*=\operatorname{id}$ and $(g\circ f)_*=g_*\circ f_*$ ([[thm-induced-fundamental-group-map-functoriality]]).

[F7] Every nonempty convex subset $C\subseteq\mathbb R^n$ with its Euclidean subspace topology is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[F8] Every bounded entire function is constant: if $f:\mathbb C\to\mathbb C$ is holomorphic and $|f(z)|\le M$ for all $z$ and some real $M\ge0$, then $f$ is constant ([[thm-liouville-bounded-entire-function]]).

[F9] A space is compact when every open cover has a finite subcover ([[def-compact-space]]).

[F10] For $n\ge1$ the Euclidean closed balls and spheres in $\mathbb R^n$ are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F11] Continuous images of compact sets are compact ([[thm-compactness-under-continuous-maps]]).

[F12] A map of Riemann surfaces is holomorphic when every chart expression is holomorphic; a holomorphic map of Riemann surfaces is continuous ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]). We call a bijective holomorphic map of Riemann surfaces whose inverse is holomorphic a **biholomorphism**, so a biholomorphism is in particular a homeomorphism.

[F13] For complex domains $U,V\subseteq\mathbb C$, a biholomorphism $f:U\to V$ is by definition bijective, holomorphic, with holomorphic inverse ([[def-biholomorphic-map]]).



**Proof technique:** direct.

## Proof

1.1 The plane $\mathbb C$ and the disc $\mathbb D$ are plane domains, and each carries the one-chart atlas given by the identity map with trivial transition; hence $\mathbb C$ and $\mathbb D$ are Riemann surfaces. Both are convex subsets of $\mathbb R^2=\mathbb C$: for $\mathbb D$ and $z,w\in\mathbb D$, $t\in[0,1]$, one has $|(1-t)z+tw|\le(1-t)|z|+t|w|<1$, and the case of $\mathbb C$ is immediate. [F1, algebra]

1.2 The sphere $\widehat{\mathbb C}$ is a Riemann surface: its standard charts have holomorphic transition maps [F2], and $\Sigma$ is a homeomorphism onto $S^2$ [F3], so $\widehat{\mathbb C}$ is Hausdorff and second countable (as a metrizable space) and nonempty; moreover $S^2$ is path-connected because it is simply connected [F4, F5], and a continuous image of a path-connected space is path-connected, so $\widehat{\mathbb C}$ is connected. [F2, F3, F4, F5, algebra]

1.3 Neither $\mathbb C$ nor $\mathbb D$ is compact. The discs $D(0,n)$, $n\ge1$, cover $\mathbb C$, but any finitely many of them lie in $D(0,N)$ with $N$ the largest index and omit points of large modulus, so they do not cover $\mathbb C$. Likewise the discs $D(0,1-1/n)$, $n\ge2$, cover $\mathbb D$, but any finitely many lie in $D(0,1-1/N)$ with $N$ the largest index and omit points of modulus between $1-1/N$ and $1$. By the definition of compactness, neither space is compact. [F9, algebra]

2.1 The plane and the disc are simply connected, being nonempty convex subsets of $\mathbb R^2$ with their Euclidean topology. [F7, step 1.1]

2.2 The sphere $\widehat{\mathbb C}$ is simply connected. Since $S^2$ is simply connected for $n=2$ [F4], every loop in $S^2$ based at a given point represents the identity class [F5]. Let $x\in\widehat{\mathbb C}$ and let $\alpha$ be a loop at $x$; then $\Sigma\circ\alpha$ is a loop at $\Sigma(x)$ in $S^2$, so $[\Sigma\circ\alpha]$ is the identity of $\pi_1(S^2,\Sigma(x))$, while by functoriality [F6] the homomorphism $\Sigma_*:\pi_1(\widehat{\mathbb C},x)\to\pi_1(S^2,\Sigma(x))$ has inverse $(\Sigma^{-1})_*$, because $(\Sigma^{-1}\circ\Sigma)_*=\operatorname{id}_*=\operatorname{id}$. Hence $[\alpha]=(\Sigma^{-1})_*([\Sigma\circ\alpha])$ is the identity, so $\pi_1(\widehat{\mathbb C},x)$ is trivial for every $x$; combined with the nonemptiness and path-connectedness from step 1.2, the sphere is simply connected. [F3, F4, F5, F6, step 1.2]

2.3 The sphere $\widehat{\mathbb C}$ is compact: $\Sigma^{-1}:S^2\to\widehat{\mathbb C}$ is continuous [F3], and $S^2$ is compact, being a Euclidean sphere [F10]; a continuous image of a compact set is compact [F11]. [F3, F10, F11, step 1.2]

2.4 The plane is not biholomorphic to the disc: if $f:\mathbb C\to\mathbb D$ were a biholomorphism of complex domains, then $f$ is holomorphic and bijective [F13], and regarded as a map into $\mathbb C$ it is entire with $|f(z)|<1$ for all $z$; by Liouville's theorem [F8] $f$ would be constant, and a constant map is not bijective, a contradiction. [F8, F13, step 1.1]

3.1 The sphere is not biholomorphic to the plane: if $f:\widehat{\mathbb C}\to\mathbb C$ were a biholomorphism, it would be a continuous bijection [F12], and then $\mathbb C=f(\widehat{\mathbb C})$ would be a continuous image of the compact space $\widehat{\mathbb C}$, hence compact [F11], contradicting step 1.3. [F11, F12, step 2.3, step 1.3]

3.2 The sphere is not biholomorphic to the disc: the same argument with $\mathbb D$ in place of $\mathbb C$ shows that a biholomorphism $\widehat{\mathbb C}\to\mathbb D$ would make the noncompact space $\mathbb D$ a continuous image of the compact sphere. [F11, F12, step 2.3, step 1.3]

4.1 Steps 1.2, 2.1 and 2.2 show that $\widehat{\mathbb C}$, $\mathbb C$ and $\mathbb D$ are simply connected Riemann surfaces, and steps 3.1, 3.2 and 2.4 show that no two of them are biholomorphic. No choice principle is used: the only compactness arguments use the explicit countable covers displayed in step 1.3, and the rigidity argument is Liouville's theorem. [step 1.2, step 2.1, step 2.2, step 3.1, step 3.2, step 2.4] ∎

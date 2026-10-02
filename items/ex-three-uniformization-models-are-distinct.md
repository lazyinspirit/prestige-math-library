---
id: ex-three-uniformization-models-are-distinct
kind: example
title: "Compactness and Liouville distinguish the three models"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
landmark: false
deps:
  - lem-three-simply-connected-models-are-inequivalent
  - thm-liouville-bounded-entire-function
  - def-compact-space
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - thm-compactness-under-continuous-maps
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-biholomorphic-map
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
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

## Example

Let $\widehat{\mathbb C}$ be the Riemann sphere, $\mathbb C$ the complex
plane and $\mathbb D=\{z:|z|<1\}$ the unit disc, each with its usual topology
and complex structure. The three models are pairwise non-biholomorphic, and
the two available reasons are independent of one another:

1. $\widehat{\mathbb C}$ is compact while $\mathbb C$ and $\mathbb D$ are
   not, so no homeomorphism, and hence no biholomorphism, can join the sphere
   to either of the other two.
2. A biholomorphism $\mathbb C\to\mathbb D$ would be a bounded entire
   function that is not constant, which Liouville's theorem forbids.

The second obstruction is genuinely complex-analytic: $\mathbb C$ and
$\mathbb D$ are homeomorphic (both are homeomorphic to $\mathbb R^2$), so
topological type alone does not determine complex structure.

## Facts & Assumptions
**Given:** The Riemann sphere, the complex plane and the unit disc with their usual topologies and complex structures. Here a biholomorphism between Riemann surfaces means a bijective holomorphic map with holomorphic inverse, with holomorphicity understood chartwise as in [F7].

[F1] The sphere, the plane and the disc are simply connected Riemann surfaces, and no two of them are biholomorphic ([[lem-three-simply-connected-models-are-inequivalent]]).

[F2] Every bounded entire function is constant: if $f:\mathbb C\to\mathbb C$ is holomorphic and $|f(z)|\le M$ for all $z$ and some real $M\ge0$, then $f$ is constant ([[thm-liouville-bounded-entire-function]]).

[F3] A space is compact when every open cover of it has a finite subcover ([[def-compact-space]]).

[F4] For $n\ge1$ the Euclidean closed balls and spheres in $\mathbb R^n$ are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F5] Continuous images of compact sets are compact: for a continuous $f:X\to Y$ and compact $K\subseteq X$ the image $f[K]$ is a compact subset of $Y$ ([[thm-compactness-under-continuous-maps]]).

[F6] Stereographic projection $\Sigma:\widehat{\mathbb C}\to S^2$ is a homeomorphism onto the unit sphere ([[thm-stereographic-projection-riemann-sphere-homeomorphism]]).

[F7] A holomorphic map of Riemann surfaces is continuous ([[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]]).

[F8] For complex domains, a map is biholomorphic when it is bijective, holomorphic, and has holomorphic inverse ([[def-biholomorphic-map]]).

**Proof technique:** direct: exhibit the explicit open covers that fail to have finite subcovers, and the explicit bounded nonconstant entire function that Liouville's theorem excludes.

## Verification

1.1 The sphere $\widehat{\mathbb C}$ is compact: $\Sigma$ is a homeomorphism onto $S^2$ [F6], the sphere $S^2\subseteq\mathbb R^3$ is compact [F4], and $\Sigma^{-1}$ is continuous, so $\widehat{\mathbb C}=\Sigma^{-1}(S^2)$ is a continuous image of a compact set [F5]. [F4, F5, F6]

1.2 Neither $\mathbb C$ nor $\mathbb D$ is compact. The open discs $D(0,n)$, $n\ge1$, cover $\mathbb C$; any finitely many of them are contained in $D(0,N)$ for $N$ the largest index occurring, which omits every point of modulus greater than $N$, so no finite subfamily covers $\mathbb C$. Likewise the open discs $D(0,1-1/n)$, $n\ge2$, cover $\mathbb D$; any finitely many are contained in $D(0,1-1/N)$ for $N$ the largest index occurring, which omits the points of modulus between $1-1/N$ and $1$, so no finite subfamily covers $\mathbb D$. By the definition of compactness neither space is compact. [F3, algebra]

1.3 The plane is not biholomorphic to the disc: if $f:\mathbb C\to\mathbb D$ were a biholomorphism, then by [F8] $f$ is holomorphic and bijective, and regarding it as a map into $\mathbb C$ it is entire with $|f(z)|<1$ for every $z$; by [F2] such an $f$ must be constant, and a constant map is not injective, hence not bijective, a contradiction. So no biholomorphism $\mathbb C\to\mathbb D$ exists. [F2, F8, algebra]

2.1 Suppose there were a biholomorphism $f:\widehat{\mathbb C}\to\mathbb C$; by the given meaning of biholomorphism and [F7], both it and its inverse are continuous, so it is a homeomorphism and is surjective onto $\mathbb C$. Since $\widehat{\mathbb C}$ is compact by step 1.1, its continuous image $\mathbb C$ would be compact [F5], contradicting step 1.2. The same argument with $\mathbb D$ in place of $\mathbb C$ excludes a biholomorphism $\widehat{\mathbb C}\to\mathbb D$. So compactness separates the sphere from the plane and the disc. [F3, F5, F7, given, step 1.1, step 1.2]

3.1 The obstruction in step 1.3 is not topological. The map $\Phi(z):=z/(1+|z|)$ is a continuous bijection of $\mathbb C$ onto $\mathbb D$, because $|\Phi(z)|=|z|/(1+|z|)<1$ with equality approached but never attained, and its inverse is $\Phi^{-1}(w)=w/(1-|w|)$, also continuous; so $\mathbb C$ and $\mathbb D$ are homeomorphic. Nevertheless step 1.3 shows they are not biholomorphic, while [F1] independently records the pairwise non-bihomorphism of all three models. Hence the two distinctions exhibited above — compactness for the sphere, Liouville for the plane versus the disc — are the classical witnesses for the inequivalence of the three simply connected models. Every cover and every map used is given by an explicit formula, so no choice principle is used. [F1, step 1.1, step 1.2, step 2.1, step 1.3, algebra] ∎

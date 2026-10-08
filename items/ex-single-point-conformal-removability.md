---
id: ex-single-point-conformal-removability
kind: example
title: "A single point is conformally removable"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-conformal-removable-compact-set
  - def-homeomorphism-and-open-maps
  - def-mobius-transformation
  - thm-mobius-transformations-biholomorphic-sphere
  - thm-removable-singularity-characterizations
  - def-isolated-singularity-types
  - def-riemann-sphere-holomorphic-charts
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-complex-domain
  - cor-injective-holomorphic-derivative-nonzero
  - def-biholomorphic-map
  - thm-biholomorphic-self-maps-riemann-sphere-are-mobius
  - def-hausdorff-measure
  - def-chordal-metric-riemann-sphere
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §16.1, printed p. 215: Definition 16.1 and the statement that isolated points are classically conformally removable; this is context, while the proof below uses the removable-singularity supplier."
    - title: "Malik Younsi, On removable sets for holomorphic functions, EMS Surveys in Mathematical Sciences 2 (2015), 219–254"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S25/Younsi_Removability_Survey.pdf"
      locator: "§2.1, printed p. 222 / PDF p. 2: one point and every finite set are removable for bounded holomorphic functions by Riemann's theorem; this is a related scalar-valued class, not the CH-removability proof used here."
dependency_level: 13
---

## Statement

Every finite subset $P\subseteq\widehat{\mathbb C}$ is globally conformally removable: if a homeomorphism $F:\widehat{\mathbb C}\to\widehat{\mathbb C}$ is conformal on $\widehat{\mathbb C}\setminus P$, then $F$ is a Möbius transformation. In particular, every singleton $\{p\}$ is conformally removable. Moreover, $\mathcal H^1_\chi(P)=0$, so finite sets illustrate the zero-length case.

## Facts & Assumptions

**Given:** A finite set $P\subseteq\widehat{\mathbb C}$ and a homeomorphism $F:\widehat{\mathbb C}\to\widehat{\mathbb C}$ conformal off $P$.

[F1] A compact set is globally conformally removable exactly when every sphere homeomorphism conformal on its complement is Möbius. ([[def-conformal-removable-compact-set]])

[F2] Every Möbius transformation is a biholomorphism of the Riemann sphere. ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]])

[F3] A function holomorphic on a punctured disc extends holomorphically across its centre if it is bounded on some punctured neighborhood; the extension value is the finite limit. ([[thm-removable-singularity-characterizations]], [[def-isolated-singularity-types]])

[F4] Holomorphy on the sphere is defined in its standard finite and reciprocal charts, and holomorphy of a map between Riemann surfaces is chartwise. ([[def-riemann-sphere-holomorphic-charts]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]])

[F5] An injective holomorphic map on a complex domain is biholomorphic onto its open image. ([[cor-injective-holomorphic-derivative-nonzero]], [[def-complex-domain]], [[def-biholomorphic-map]])

[F6] Every biholomorphic self-map of the sphere is Möbius. ([[thm-biholomorphic-self-maps-riemann-sphere-are-mobius]])

[F7] Hausdorff measure is defined by small-diameter covers and is monotone under inclusion; the chordal metric is a metric on the sphere. ([[def-hausdorff-measure]], [[def-chordal-metric-riemann-sphere]])

## Proof

**Proof technique:** direct, by removing the isolated singularities in local sphere charts.

1.1 If $P=\varnothing$, $F$ is already holomorphic on the whole sphere. Otherwise fix an arbitrary $p\in P$, put $q=F(p)$, and choose Möbius maps $A,B$ by $A(z)=z-p$ when $p\in\mathbb C$, $A(z)=1/z$ when $p=\infty$, and $B(w)=w-q$ when $q\in\mathbb C$, $B(w)=1/w$ when $q=\infty$; then $G:=B\circ F\circ A^{-1}$ is a sphere homeomorphism, holomorphic off the finite set $A(P)$, with $G(0)=0$. [F2, given, choose, cases]

2.1 By continuity of $G$ at $0$ and $G(0)=0$, choose $r>0$ so that $\{|z|<r\}\cap A(P)=\{0\}$ and on $|z|<r$ the map $G$ takes values in the finite target chart and $|G(z)|<1$. Thus the scalar chart expression $g(z)=G(z)$ is holomorphic on $0<|z|<r$, bounded there, and has limit $0$ at the puncture. [F2, F4, step 1.1, given, choose]

3.1 Apply [F3] to extend $g$ holomorphically across $0$ with value $0=G(0)$. The extension agrees with the original map by continuity, so $G$ is holomorphic at $0$ as a sphere map. Since $A$ and $B$ are biholomorphic, $F=B^{-1}\circ G\circ A$ is holomorphic at the arbitrary point $p$. [F2, F3, F4, step 1.1, step 2.1]

4.1 Repeating the pointwise argument for every $p\in P$ shows that $F$ is holomorphic on the whole sphere. In any source and target charts, a sufficiently small connected chart neighborhood gives an injective holomorphic map; [F5] makes its local inverse holomorphic. These local inverses are the chart expressions of the global inverse homeomorphism, so $F$ is biholomorphic. [F4, F5, given, step 3.1]

5.1 By [F6], $F$ is Möbius; [F1] therefore says that the finite compact set $P$ is globally conformally removable. This includes the singleton case, and the empty-set case from step 1.1. [F1, F6, step 1.1, step 4.1]

6.1 If $P=\varnothing$, its Hausdorff measure is zero by the empty cover. If $P$ has $n\ge1$ points, then for every $\delta,\varepsilon>0$ cover each point by a chordal ball of radius $r<\min(\delta/3,\varepsilon/(3n))$; each ball has diameter at most $2r<\delta$ and the sum of the $n$ diameters is less than $\varepsilon$. By [F7] and the definition of $\mathcal H^1$, $\mathcal H^1_\chi(P)=0$. [F7, given, algebra] ∎

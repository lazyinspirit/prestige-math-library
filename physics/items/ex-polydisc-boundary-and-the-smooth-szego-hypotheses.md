---
id: ex-polydisc-boundary-and-the-smooth-szego-hypotheses
kind: example
title: The polydisc boundary is not a smooth hypersurface, so the Szegő definition does not apply
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
proof_strategy: direct
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-bounded-c-one-domain-boundary-charts-and-outward-normal
  - def-countable-choice
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - def-szego-kernel-smooth-bounded-domain
  - def-total-derivative-in-euclidean-space
  - rem-complex-euclidean-space-dictionary
  - thm-complex-exponential-addition-and-real-extension
  - thm-complex-exponential-is-entire-with-derivative-itself
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §1.1, printed pp. 16–17 (PDF pp. 15–16): the polydisc Cauchy formula and distinguished boundary; §5.3, printed pp. 165–166 (PDF pp. 164–165): the Hardy boundary space and Szegő construction are introduced for bounded domains with smooth boundary, and the text explicitly omits details. The C¹ obstruction here is proved locally.
---

## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and let $m\ge2$. The topological boundary $\partial\mathbb D^m$ is not a $C^1$ hypersurface. Hence the bounded-$C^1$-domain hypothesis in [[def-szego-kernel-smooth-bounded-domain]] fails, so that definition does not supply a surface-measure Hardy space or a Szegő kernel for $\mathbb D^m$. The distinguished torus $\mathbb T^m$ is a proper subset of $\partial\mathbb D^m$: $(1,0,1,\ldots,1)$ is a boundary point but is not in $\mathbb T^m$.

## Facts & Assumptions

[A1] The only choice principle is $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through the bounded-$C^1$-domain, surface-integration and Szegő-definition interfaces; no full Axiom of Choice is used.

[F1] With zero-based coordinates, $\mathbb D^m=\{z\in\mathbb C^m:|z_j|<1\text{ for every }j<m\}$ and its closure is $\{z:|z_j|\le1\text{ for every }j<m\}$. Its topological boundary is the points in this closure with at least one coordinate of modulus one, while its distinguished torus is $\mathbb T^m:=\{z:|z_j|=1\text{ for every }j<m\}$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F2] A $C^1$ boundary chart is locally, after a rigid coordinate change, a graph of a $C^1$ real function over an open subset of $\mathbb R^{2m-1}$; the graph tangent at a point has dimension $2m-1$ ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[def-total-derivative-in-euclidean-space]]).

[F3] Under the real coordinate dictionary, $\mathbb C^m$ is $\mathbb R^{2m}$ and the vectors $e_0,ie_0,\ldots,e_{m-1},ie_{m-1}$ form a real basis ([[rem-complex-euclidean-space-dictionary]]).

[F4] For real $t$, $|e^{it}|=1$ and $\frac{d}{dt}e^{it}=ie^{it}$; the derivative follows from the complex exponential derivative and its addition law ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]]).

[F5] The library's Szegő definition takes a bounded connected open set with $C^1$ boundary and its surface measure as input; that measure is defined on a compact embedded $C^1$ hypersurface ([[def-szego-kernel-smooth-bounded-domain]], [[def-surface-integral-on-a-compact-c-one-hypersurface]]).

## Verification

**Proof technique:** direct, using boundary curves and the tangent space of a $C^1$ graph.

**Given:** $\mathrm{AC}_\omega$, $m\ge2$, the unit polydisc and the definitions of a $C^1$ boundary and Szegő regularity.

1.1 Let $p=(1,\ldots,1)$. For each $j<m$, the circle curve $\gamma_j(t)=(1,\ldots,e^{it},\ldots,1)$ lies in $\partial\mathbb D^m$ and has velocity $ie_j$ at $t=0$ by [F1, F4]. For each $j<m$, the one-sided radial curve $\delta_j(t)=(1,\ldots,1-t,\ldots,1)$, $0\le t<1$, also lies in $\partial\mathbb D^m$: for $t>0$ its $j$th coordinate has modulus below one, while another coordinate remains of modulus one since $m\ge2$. Its right velocity at $0$ is $-e_j$. The $2m$ velocities $ie_j,-e_j$ form a real basis by [F3]. [F1, F3, F4, given]

1.2 Let $q_0=1$, $q_1=0$, and $q_j=1$ for $2\le j<m$. All coordinate moduli are at most one and $|q_0|=1$, so $q\in\partial\mathbb D^m$ by [F1]. Since $|q_1|=0$, not every coordinate has modulus one, so $q\notin\mathbb T^m$ by [F1]. The torus is contained in $\partial\mathbb D^m$ by [F1], so it is a proper subset. [F1, given]

2.1 Suppose $\partial\mathbb D^m$ had a $C^1$ boundary chart at $p$. After a rigid coordinate change it would locally be a graph $x_{2m}=h(y)$ with $h$ of class $C^1$, whose tangent space at $p$ has dimension $2m-1$ by [F2]. By continuity, each curve from step 1.1 remains in this chart neighborhood for sufficiently small parameter. Write a curve in the chart as $(y(t),x_{2m}(t))$ with $y(t)=y_0+tv+o(t)$; differentiability of $h$ gives $x_{2m}(t)=h(y_0)+tDh(y_0)v+o(t)$. Thus each velocity lies in the graph tangent space $\{(v,Dh(y_0)v):v\in\mathbb R^{2m-1}\}$. The $2m$ independent velocities from step 1.1 cannot all lie in this $(2m-1)$-dimensional space; rigid coordinate changes preserve independence. Therefore $\partial\mathbb D^m$ is not a $C^1$ hypersurface. [F2, step 1.1, given]

3.1 By [F5], the library's Szegő definition requires a bounded connected open set with $C^1$ boundary and its surface measure on the associated compact $C^1$ hypersurface. Step 2.1 proves that $\mathbb D^m$ fails the boundary hypothesis. Hence this definition does not apply to the polydisc, and the distinguished-torus construction in step 1.2 uses a different boundary set. [A1, F5, step 2.1, step 1.2, given] ∎

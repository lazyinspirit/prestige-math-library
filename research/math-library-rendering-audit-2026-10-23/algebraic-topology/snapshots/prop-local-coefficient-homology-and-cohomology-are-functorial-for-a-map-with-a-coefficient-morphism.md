---
id: prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism
kind: proposition
title: Functoriality with coefficient morphisms
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-homology-and-cohomology-with-local-coefficients, def-local-system-of-r-modules-and-its-pullback]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §4, pp.105–109
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Let $f:(X,A)\to(Y,B)$ be a map of pairs.

1. A coefficient morphism $\eta:\mathcal L\to f^*\mathcal K$ induces
   $$f_*:H_n(X,A;\mathcal L)\longrightarrow H_n(Y,B;\mathcal K).$$
2. A coefficient morphism $\theta:f^*\mathcal K\to\mathcal L$ induces
   $$f^*:H^n(Y,B;\mathcal K)\longrightarrow H^n(X,A;\mathcal L).$$

At a fixed space, both theories are covariant in coefficient morphisms. These maps preserve identities and composition. If $H:f_0\simeq f_1$ is a homotopy of pair maps, transport along $t\mapsto H(x,t)$ gives $\tau_H:f_0^*\mathcal K\to f_1^*\mathcal K$; the homology maps agree when $\eta_1=\tau_H\eta_0$, and the cohomology maps agree when $\theta_0=\theta_1\tau_H$.

## Facts & Assumptions

**Given:** The map, local systems, and correctly directed coefficient morphism in the relevant clause.

[F1] [[def-homology-and-cohomology-with-local-coefficients]] uses intrinsic local chains with coefficients at the first vertex and intrinsic local cochains with values at the first vertex.

[F2] [[def-local-system-of-r-modules-and-its-pullback]] gives pullback transports and the naturality equation for coefficient morphisms.

## Proof

**Proof technique:** direct.

1.1 Define $(f,\eta)_\#(m\sigma)=\eta_{\sigma(e_0)}(m)(f\sigma)$. On the exceptional zeroth face, [F2] says $\eta_{\sigma(e_1)}T^\mathcal L_{\sigma[0,1]}=T^\mathcal K_{f\sigma[0,1]}\eta_{\sigma(e_0)}$; all other faces use the same first vertex. Hence this is a chain map and carries the subcomplex on $A$ into that on $B$, so [F1] gives the asserted $f_*$. [F1, F2]

1.2 For a cochain $\varphi$ on $Y$, define $((f,\theta)^\#\varphi)(\sigma)=\theta_{\sigma(e_0)}(\varphi(f\sigma))$. The same naturality square, inverted on the exceptional face, makes this commute with coboundary. It preserves the relative kernel because $f(A)\subseteq B$, and hence induces the asserted $f^*$. Taking $f=1_X$ proves covariance in a coefficient morphism for both theories. [F1, F2]

2.1 Substitution in the two displayed chain-level formulas proves the identity laws. For composable maps $X\xrightarrow fY\xrightarrow gZ$, the homology coefficient morphism is $\mathcal L\to f^*\mathcal K\to f^*g^*\mathcal N=(gf)^*\mathcal N$, and the cohomology coefficient morphism is the reverse composite; componentwise substitution proves the composition laws without a basepoint or lift choice. [F2, step 1.1, step 1.2]

2.2 For a homotopy $H$, define $(\tau_H)_x=T^\mathcal K_{t\mapsto H(x,t)}$. A path square $(s,t)\mapsto H(\gamma(s),t)$ shows by its two boundary routes that these components satisfy the naturality equation, so $\tau_H$ is a coefficient isomorphism. Triangulate each prism $\Delta^n\times I$ as in the ordinary prism operator and transport the coefficient from its initial first vertex along the corresponding prism edge. The usual oriented-prism cancellation is unchanged; the only new comparisons are transports along the two boundary routes of a triangular face, and those are equal because the face supplies an endpoint-fixed homotopy. Thus the resulting $P_H$ satisfies $(f_1,\eta_1)_\#-(f_0,\eta_0)_\#=\partial P_H+P_H\partial$ when $\eta_1=\tau_H\eta_0$. [F1, F2, step 1.1]

3.1 Precomposing a local cochain with the prism operator and applying the coefficient map in the reverse direction gives a cochain homotopy $(f_1,\theta_1)^\#-(f_0,\theta_0)^\#=P_H^*\delta+\delta P_H^*$ when $\theta_0=\theta_1\tau_H$. Chain- or cochain-homotopic maps induce equal maps on (co)homology by applying the identity to cycles/cocycles and observing that the difference is a boundary/coboundary. This proves the homotopy clauses. Empty pairs, zero systems, degree zero, degenerate simplices, and constant homotopies obey the same formulas, and no AC is used. [step 1.2, step 2.2] ∎

---
id: def-gts-symplectic-and-almost-complex-curve-data
kind: definition
title: Symplectic and almost-complex curve data
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-symplectic-form-and-symplectic-manifold
  - def-compatible-complex-structure-on-a-symplectic-vector-space
  - thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure
dependency_roles:
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-compatible-complex-structure-on-a-symplectic-vector-space: mathematical-premise
  thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure: mathematical-premise
axiom_use: "Existence of a compatible almost-complex structure is conditional on AC_omega through the cited theorem; the definitions themselves use no choice principle."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry, version 3.2
      url: https://arxiv.org/pdf/1011.1690v2
      locator: §2.1, Definition 2.8, printed p. 28; §2.2, compatible and tame almost-complex structures, printed pp. 31–32
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

A symplectic manifold is a smooth manifold $M$ with a smooth two-form $\omega$ that is closed and pointwise nondegenerate: $d\omega=0$, and $\omega_p^\flat:T_pM\to T_p^*M$, $v\mapsto\omega_p(v,\cdot)$, is an isomorphism at each $p$. Write $\dim M=2n$.

An almost-complex structure on $M$ is a smooth bundle endomorphism $J:TM\to TM$ with $J^2=-\operatorname{id}_{TM}$. It is $\omega$-tame if $\omega_p(v,J_pv)>0$ for every $p$ and every nonzero $v\in T_pM$. It is $\omega$-compatible if $g_J(v,w)=\omega(v,Jw)$ is a symmetric positive-definite inner product, as in the referenced definition. Compatibility implies $\omega_p(J_pv,J_pw)=\omega_p(v,w)$. For compatible $J$, $g_J$ is a smooth Riemannian metric. For tame $J$, define the smooth symmetric form $g_J^{\mathrm{sym}}(v,w)=\frac12(\omega(v,Jw)+\omega(w,Jv))$.

A smooth Riemann surface $(\Sigma,j)$ is a smooth real two-manifold without boundary equipped with a holomorphic coordinate atlas: each chart $\varphi_\alpha:U_\alpha\to V_\alpha\subset\mathbb C$ is a smooth coordinate chart, each transition $\varphi_\alpha\circ\varphi_\beta^{-1}$ is holomorphic on its domain, and $j$ is the tensor field given in these coordinates by $d\varphi_\alpha^{-1}\circ i\circ d\varphi_\alpha$. Thus “integrable” means precisely that $j$ arises from such an atlas. Its orientation is the one for which $(v,jv)$ is positive. For a smooth map $u:\Sigma\to M$, say $u$ is $J$-holomorphic when $du\circ j=J\circ du$.

For such a map define its symplectic area by $E_\omega(u)=\int_\Sigma u^*\omega$ whenever the integral exists, and call it finite-area when this value is finite. This definition concerns smooth domains; nodal disk domains are defined separately.

A compatible almost-complex structure exists on every symplectic manifold under the source theorem's hypothesis $\mathrm{AC}_\omega$, the axiom of countable choice. No integrability of $J$ is asserted.

## Definition references

[[def-symplectic-form-and-symplectic-manifold]]

[[def-compatible-complex-structure-on-a-symplectic-vector-space]]

[[thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure]]

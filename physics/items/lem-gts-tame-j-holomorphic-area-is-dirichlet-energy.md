---
id: lem-gts-tame-j-holomorphic-area-is-dirichlet-energy
kind: lemma
title: Tame J-holomorphic area equals metric Dirichlet energy
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-gts-symplectic-and-almost-complex-curve-data
dependency_roles:
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Chris Wendl, Lectures on Holomorphic Curves in Symplectic and Contact Geometry, version 3.2
      url: https://arxiv.org/pdf/1011.1690v2
      locator: §2.2, equation (2.6), Definition 2.18 and Proposition 2.19, printed pp. 32–33
verification:
  precheck: pass
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
proof_strategy: direct
---

## Statement

Let $(M,\omega,J)$ be the tame almost-complex data of [[def-gts-symplectic-and-almost-complex-curve-data]], and let $(\Sigma,j)$ be a Riemann surface. A smooth Riemannian metric $h$ on $\Sigma$ is $j$-compatible when $h(j\xi,j\eta)=h(\xi,\eta)$ for all tangent vectors $\xi,\eta$. Assume that $h$ is $j$-compatible. Set $g_J^{\mathrm{sym}}(v,w)=\tfrac12(\omega(v,Jw)+\omega(w,Jv))$, which is positive definite because $J$ is tame. At $z\in\Sigma$, define the Hilbert--Schmidt norm of $du_z:(T_z\Sigma,h_z)\to(T_{u(z)}M,g_J^{\mathrm{sym}})$ by
$$|du_z|^2_{g_J^{\mathrm{sym}},h}=\sum_{a=1}^2g_J^{\mathrm{sym}}(du_z(e_a),du_z(e_a)),$$
where $(e_1,e_2)$ is any $h_z$-orthonormal basis; this sum is independent of that basis. Let $d\operatorname{vol}_h$ be the area measure induced by $h$. If $u:\Sigma\to M$ is a smooth $J$-holomorphic map with finite symplectic area $E_\omega(u)$, then its Dirichlet energy
$$E_D(u)=\frac12\int_\Sigma |du|^2_{g_J^{\mathrm{sym}},h}\,d\operatorname{vol}_h$$
equals the symplectic area $E_\omega(u)=\int_\Sigma u^*\omega$, and both are nonnegative. If $J$ is compatible, $g_J^{\mathrm{sym}}(v,w)=\omega(v,Jw)$. For tame but noncompatible $J$, the symmetrized form is the metric; the unsymmetrized form $\omega(\cdot,J\cdot)$ is not assumed symmetric.

## Statement references

[[def-gts-symplectic-and-almost-complex-curve-data]]

## Facts & Assumptions

**Given:** The symplectic form, tame almost-complex structure, domain, map, and metrics in the statement.

[F1] [[def-gts-symplectic-and-almost-complex-curve-data]]: $J^2=-I$, $du\circ j=J\circ du$, tameness means $\omega(v,Jv)>0$ for $v\ne0$, and $g_J^{\mathrm{sym}}(v,w)=\frac12(\omega(v,Jw)+\omega(w,Jv))$; $\omega$ is a skew-symmetric two-form.

## Proof

1.1 At any point, $g_J^{\mathrm{sym}}$ is smooth and symmetric by its definition, and $g_J^{\mathrm{sym}}(v,v)=\omega(v,Jv)>0$ for every nonzero $v$ by tameness. Thus it is a Riemannian metric. Choose a unit vector $e$ at the point. Since $h$ is $j$-compatible, $h(je,je)=h(e,e)=1$ and $h(e,je)=h(je,j^2e)=-h(je,e)$, so $h(e,je)=0$. Thus $(e,je)$ is a positively oriented $h$-orthonormal basis of $T\Sigma$. Put $v=du(e)$. The Cauchy–Riemann equation gives $du(je)=Jv$. Using $J^2=-I$ and skew-symmetry of $\omega$ gives $g_J^{\mathrm{sym}}(v,Jv)=0$ and $g_J^{\mathrm{sym}}(Jv,Jv)=g_J^{\mathrm{sym}}(v,v)=\omega(v,Jv)$. [given, F1, algebra]

2.1 The area density in this basis is $(u^*\omega)(e,je)=\omega(v,Jv)$, while the Dirichlet density is $\frac12(|du(e)|^2+|du(je)|^2)=g_J^{\mathrm{sym}}(v,v)$. Thus the densities agree pointwise, including at points where $du=0$; integrating gives $E_D(u)=E_\omega(u)$. Tameness makes this common density nonnegative, and the finite-area hypothesis makes both integrals finite. [given, F1, step 1.1, algebra]

3.1 If $J$ is compatible, $\omega(\cdot,J\cdot)$ is symmetric by definition, so its symmetrization is itself. For a merely tame $J$, only $g_J^{\mathrm{sym}}$ is used as the metric; no Riemannian metric is inferred from the unsymmetrized form. [F1, step 1.1] ∎

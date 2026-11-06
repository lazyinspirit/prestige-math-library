---
id: def-gts-marked-m-polarized-k3-and-admissible-vector
kind: definition
title: Marked M-polarized K3 data and m-admissible vector
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-gts-compact-calabiyau-manifold-conventions
dependency_roles:
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Mark Gross and P. M. H. Wilson, Mirror Symmetry via 3-tori for a Class of Calabi-Yau Threefolds
      url: https://arxiv.org/pdf/alg-geom/9608004v3
      locator: §1, K3 lattice, M-polarized period domain, and definition of m-admissibility
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

Use the algebraic K3 convention: a K3 surface is a smooth connected compact complex surface that is simply connected and has trivial canonical line bundle. The K3 lattice $L$ is the even unimodular lattice of signature $(3,19)$, with its integral symmetric bilinear form. A marking is an isometry $\phi:H^2(S;\mathbb Z)\to L$.

Here a sublattice is primitive if its quotient in $L$ is torsion-free, and $\operatorname{Pic}(S)\subset H^2(S;\mathbb Z)$ is the image of the first Chern class of holomorphic line bundles. An M-polarized marked K3 datum consists of a primitive sublattice $M\subset L$ of signature $(1,t)$, a marked K3 surface $(S,\phi)$ with $\phi^{-1}(M)\subseteq\operatorname{Pic}(S)$, and its orthogonal complement $T=M^\perp\subset L$. The corresponding period domain is
$$D_M=\{[\Omega]\in\mathbb P(T\otimes_{\mathbb Z}\mathbb C):(\Omega,\Omega)=0,\;(\Omega,\overline\Omega)>0\}.$$

For this source, a Kähler class is a real cohomology class represented by a smooth closed positive real $(1,1)$-form; the intersection pairing is the K3 lattice pairing transported by $\phi$. The root-hyperplane locus is $\Delta_M=\{[\Omega]\in D_M:\text{ some }0\ne\alpha\in T\text{ has }(\alpha,\Omega)=0\}$.

For a positive integer $m$, an isotropic vector $E\in T$ is m-admissible if there is an isotropic $E'\in T$ with $(E,E')=m$, and no $\alpha\in T$ satisfies either $0<(\alpha,E)<m$ or $0<(\alpha,E')<m$. The vector is isotropic when $(E,E)=0$. In this basis the rank-two lattice $U(m)$ has Gram matrix $\left(\begin{smallmatrix}0&m\\m&0\end{smallmatrix}\right)$; the source sets $\check M=(\mathbb ZE)^\perp_T/\mathbb ZE$ and obtains $T\cong U(m)\oplus\check M$. “General period and Kähler class” below means $[\Omega]\in D_M\setminus\Delta_M$ and a Kähler class $\omega\in M\otimes\mathbb R$ with $\omega^\perp\cap M=0$. These are the exact lattice/genericity conventions used in Gross–Wilson §1; this definition asserts no elliptic fibration or special-Lagrangian fibration.

## Definition references

[[def-gts-compact-calabiyau-manifold-conventions]]

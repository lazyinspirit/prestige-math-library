---
id: def-gts-freedlott-odd-differential-k-groups-by-suspension
kind: definition
title: Odd Freed–Lott differential K-groups by suspension
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 7
deps:
- def-gts-freedlott-differential-k-cycle
- thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory
- cor-complex-k-theory-of-spheres
- def-integration-along-the-unit-interval-for-a-differential-form
justified_by: []
dependency_roles:
  def-gts-freedlott-differential-k-cycle: mathematical-premise
  thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory: mathematical-premise
  cor-complex-k-theory-of-spheres: mathematical-premise
  def-integration-along-the-unit-interval-for-a-differential-form: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Daniel S. Freed and John Lott, An Index Theorem in Differential K-Theory
    url: https://arxiv.org/pdf/0907.3508v2
    locator: §§2.1 and 9.1, geometric generators and circle construction. The explicit
      parameter-first transgressions, unitary-path relation, reduced suspension and
      CS-corrected inverse holonomy below repair the untransgressed presentation;
      they are derived in the linked family-index proof.
---
## Statement

Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold and $R=\mathbb R[u,u^{-1}]$, $|u|=2$. A degree $-1$ generator is $(G,h,\nabla,U,\phi)$, with $G$ a finite-rank complex Hermitian bundle, $\nabla$ a unitary connection, $U$ a smooth unitary automorphism, and $\phi\in\Omega^{-2}(M;R)/\operatorname{im}d$. Isometric connection-and-automorphism preserving isomorphisms identify generators. All parameter integrals are parameter first: $K_s(a+ds\wedge b)=\int b\,ds$, so $dK_s+K_sd=\mathrm{ev}_1-\mathrm{ev}_0$. Set

$$\omega(\nabla,U)=K_t\,R_u\operatorname{tr}\exp[-u^{-1}(d_t+(1-f(t))\nabla+f(t)U\nabla U^{-1})^2],\qquad R_u(u)=2\pi i\,u,$$

where $f$ increases from $0$ to $1$ and is constant near the endpoints. The integral is unchanged if $f(t)=t$. Form the free abelian group on these generators and impose the following three transgressed relations.

For a Hermitian exact sequence $0\to G_1\to G_2\to G_3\to0$ with commuting unitary automorphisms, identify the middle bundle with the orthogonal direct sum and interpolate its split connection to $\nabla^2$. Write $\operatorname{CS}_{\mathrm{seq}}=K_s\omega(\nabla_s,U_2)$, using the actual connection on $I_s\times M$. Then

$$[G_2,\nabla^2,U_2,\phi_1+\phi_3-\operatorname{CS}_{\mathrm{seq}}]=[G_1,\nabla^1,U_1,\phi_1]+[G_3,\nabla^3,U_3,\phi_3].$$

Connections are unitary; the sequence maps need not be parallel. For two automorphisms of the same bundle put $W_\theta=\operatorname{diag}(U_1,1)R_\theta\operatorname{diag}(U_2,1)R_\theta^{-1}$, where $R_\theta$ is the real unitary rotation from $0$ to $\pi/2$, and put $\operatorname{CS}_{\mathrm{prod}}=-K_\theta\omega(d_\theta+\nabla\oplus\nabla,W_\theta)$. Impose

$$[G,\nabla,U_1U_2,-\operatorname{CS}_{\mathrm{prod}}]=[G,\nabla,U_1,0]+[G,\nabla,U_2,0].$$

For every smooth unitary path $U_s$ at fixed $\nabla$, put $T(U_s)=K_s\omega(d_s+\nabla,U_s)$ and impose

$$[G,\nabla,U_1,\phi-T(U_s)]=[G,\nabla,U_0,\phi].$$

The actual path integrals specify the transgressions modulo exact forms; merely giving their exterior derivatives would not specify these relations. They satisfy $dT=\omega(U_1)-\omega(U_0)$, $d\operatorname{CS}_{\mathrm{prod}}=\omega(U_1U_2)-\omega(U_1)-\omega(U_2)$ and the corresponding exact-sequence difference formula. The curvature is $R([G,\nabla,U,\phi])=\omega(\nabla,U)+d\phi$. For $r=-1+2k$ multiply the curvature, correction and transgression forms by $u^k$; thus correction forms have degree $r-1$ and curvature degree $r$.

## Statement references

[[def-gts-freedlott-differential-k-cycle]]

[[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]

[[def-integration-along-the-unit-interval-for-a-differential-form]]

## Definition

The group $\widehat K^{-1}_{\mathrm{FL}}(M)$ is this quotient; odd degrees use the specified periodic shift. The following formulas fix the suspension convention used by the family-index item. They are geometric cycle constructions, not an assertion of equivalence with the Hopkins–Singer model.

For an even cycle $y=(E,\nabla,\Phi)$ on $S^1_t\times M$, let $G=E|_{t=0}$, $H$ be positive parallel holonomy, and $U=H^{-1}$. Parallel transport presents $E$ with gluing $(0,v)\sim(1,Uv)$. On this presentation put $\nabla_{\mathrm{lin}}=d_t+(1-f)\nabla^G+fU\nabla^GU^{-1}$, and $\tau=\operatorname{CS}_{\mathrm{even}}(\nabla_{\mathrm{orig}},\nabla_{\mathrm{lin}})$, the path integral from the linear connection to the original one, so $d\tau=\operatorname{ch}(\nabla_{\mathrm{orig}})-\operatorname{ch}(\nabla_{\mathrm{lin}})$. Define

$$D(y)=[G,\nabla^G,H^{-1},-K_t(\Phi+\tau)].$$

For $x=[G,\nabla,U,\phi]$ let $E_U$ have this linear mapping-torus connection and write

$$\Omega_U=\operatorname{ch}(E_U)-\operatorname{pr}_M^*\operatorname{ch}(G)=\alpha(t)+dt\wedge\beta(t),\qquad\kappa_U(t)=\int_0^t\left(\beta(s)-K_t\Omega_U\right)ds.$$

This is periodic, and $d\kappa_U=\Omega_U-dt\wedge\omega(\nabla,U)$. The reduced suspension from odd degree $-1$ to even degree $0$ is

$$S_{\mathrm{odd}}(x)=[E_U,\nabla_{\mathrm{lin}},-\kappa_U-dt\wedge\phi]-[\operatorname{pr}_MG,\operatorname{pr}_M\nabla,0].$$

The even-to-odd degree-$+1$ suspension is $S_{\mathrm{even}}[E,\nabla,\Phi]=[\operatorname{pr}_ME,\operatorname{pr}_M\nabla,e^{2\pi it}1,-dt\wedge\Phi]$, with the specified periodic shift. These maps obey $R(Dy)=K_tR(y)$, $R(Sx)=dt\wedge R(x)$ and $DS_{\mathrm{odd}}x=x$. Using $t_2$ for $S_{\mathrm{even}}$ and the outer circle $t_1$ for $S_{\mathrm{odd}}$, the reduced double suspension is $u(P-1)\otimes x$, where $P$ is the Poincare line with connection $d-2\pi it_1dt_2$ and correction $dt_1\wedge dt_2\wedge\Phi$. Its auxiliary index circle is bounding; its vertical orientation is $dt_2$ followed by the original odd-dimensional fiber orientation. These conventions specify the odd family-index construction, including its flat part.

## Remarks

The path $U_s=e^{2\pi is}$ over a point has transgression $u^{-1}$ and identifies integral correction shifts. The path relation, inverse holonomy and exact CS term are essential: the untransgressed two-relation presentation retains a spurious real correction at a point, and bare holonomy fails to commute with curvature. The constant bundle subtraction in the suspension is essential before circle index. A nonbounding auxiliary circle could retain a flat half-index; it is not used here. This does not change the separate nonbounding mapping-torus convention in the anomaly-line proposition. The actual transgression and well-definedness calculations are supplied in the family-index proof; this definition independently assumes no analytic index identity.

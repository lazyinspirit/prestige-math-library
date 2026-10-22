---
id: lem-singular-earring-instanton-homology-of-the-unknot-is-integrally-rank-one
kind: lemma
title: Singular earring instanton homology of the unknot is integrally rank one
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-instanton-knot-homology-and-canonical-class
  - def-singular-instanton-knot-and-sutured-closure-data
  - lem-instanton-knot-complex-asd-analytic-foundations
  - lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts
  - lem-earring-holonomy-perturbations-regularize-all-trajectory-indices
  - lem-earring-gauge-components-force-index-energy-monotonicity
  - thm-isotopy-extension
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
      locator: complete Proposition4.1 and proof, PDF55; actual twisted holonomy and Hessian computations supplied below
---

## Statement

Assume full AC. For the smooth based unknot $U\subset S^3$, the integral singular earring instanton group is isomorphic to $\mathbb Z$, and its rationalization has dimension one. There are regular choices with one critical generator and zero differential. Its generator is specified only up to the usual orientation sign; no distinguished sign-independent canonical class or sutured-excision identification is asserted.

## Statement references

[[def-instanton-knot-homology-and-canonical-class]]

[Kronheimer–Mrowka, Proposition4.1](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

## Facts & Assumptions

[F1] Actual earring singular models, the fixed-determinant exterior lift and central determinant-one stabilizers are supplied by [[lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts]].

[F2] The integral complex and independence of regular choices are the precise analytic interface of [[lem-instanton-knot-complex-asd-analytic-foundations]]. Its all-index perturbations may preserve every critical jet, and its actual loop indices are divisible by four. [[lem-earring-holonomy-perturbations-regularize-all-trajectory-indices]] [[lem-earring-gauge-components-force-index-energy-monotonicity]]

[F3] A compact circle isotopy in the boundaryless $S^3\setminus U$ extends to an ambient isotopy supported away from $U$ by [[thm-isotopy-extension]]. Full AC is inherited through [F1]–[F2]. [[def-axiom-of-choice]]

## Proof

**Given:** The based unknot and its actual small meridional earring and relative arc class. The argument uses the declared analytic interface [F2], whose separate proof is not a surgery or KHI theorem.

1.1 **An explicit product exterior.** Write $S^3=\{(z_1,z_2)\in\mathbb C^2:|z_1|^2+|z_2|^2=1\}$ and take $U=\{z_2=0\}$. At $(1,0)$ its small normal meridian is $L_r=\{(\cos r,\sin r e^{i\theta})\}$ for a small $r>0$. Increasing $r$ to $\pi/2$ is a smooth isotopy of embedded circles disjoint from $U$; [F3] extends it while fixing $U$. The resulting earring is the other coordinate circle. Away from the two coordinate circles the map $(\theta_1,\theta_2,s)\mapsto(\cos s e^{i\theta_1},\sin s e^{i\theta_2})$, $0<s<\pi/2$, is an actual diffeomorphism. Removing small invariant coordinate tubes therefore gives $T^2\times[s_0,s_1]$. Its two meridians are the two circle coordinates. The relative arc has one endpoint on each boundary torus, so its dual $w_2$ evaluates one on a product torus, just as in [F1]. [F1, F3, given, construct, algebra]

2.1 **The twisted flat holonomies and the allowed gauge quotient.** A flat $SO(3)$ bundle on this exterior is described by its commuting meridian holonomies. On a flat product-torus square the obstruction to lifting its four edge identifications is the commutator of their $SU(2)$ lifts, so $w_2=1$ means $ab=-ba$. Both meridians have the prescribed half-turn adjoint holonomy. Their lifts are unit imaginary quaternions, and $ab+ba=-2\langle a,b\rangle$ makes their axes perpendicular. Conjugation is transitive on ordered perpendicular unit axes, so take $(a,b)=(i,j)$. Conversely the flat bundle formed from $\mathbb R^2\times[s_0,s_1]\times SO(3)$ with deck fiber maps $\operatorname{Ad}i,\operatorname{Ad}j$ realizes this data. Its two ends extend as the flat local earring models of [F1], so it gives a global singular flat connection. One must also check the determinant-one quotient, rather than silently using all $SO(3)$ gauges. The obstruction of an $SO(3)$ gauge to a determinant-one lift is its sign class on the two fundamental loops, in $H^1(T^2;\mathbb Z/2)$. The parallel adjoint gauges with values $\operatorname{Ad}i$ and $\operatorname{Ad}j$ have obstruction classes $(0,1)$ and $(1,0)$, respectively: their lifts commute with their own meridian lift and anticommute with the other. They span all four obstruction classes. Composing any full gauge comparison with such a parallel stabilizer kills its lifting obstruction. The resulting determinant-one comparison extends smoothly through each branch core by its first-order parallel gauge equation and the fixed isotropy model. Thus there is precisely one critical orbit for the actual determinant-one gauge group, not four artificial lift orbits. [F1, step 1.1, construct, algebra]

3.1 **Its actual Hessian is nondegenerate.** The adjoint local system decomposes on the product torus into the three real axes. Its two monodromy signs on these axes are $(1,-1)$, $(-1,1)$ and $(-1,-1)$. For a one-dimensional character $(u,v)$ the cellular torus complex is $\mathbb R\xleftarrow{\partial_1}\mathbb R^2\xleftarrow{\partial_2}\mathbb R$, with $\partial_1(x,y)=(u-1)x+(v-1)y$ and $\partial_2(z)=((1-v)z,(u-1)z)$. If $u-1\ne0$, the first map is onto, the second is injective, and its image is the kernel of the first by solving for $x$ in terms of $y$. If $v-1\ne0$, interchange the coordinates. This complex computes the flat first deformation classes directly: integrate a covariantly closed one-form on the simply connected rectangle to a primitive; its two edge period constants are $(x,y)$, equality around the square is $(1-v)x+(u-1)y=0$, and changing its initial primitive adds $((u-1)c,(v-1)c)$. This cochain complex is exact in degree one by solving with either nonzero coefficient, just as for the displayed chain complex. Integrating first in the product-interval direction reduces the exterior to that rectangle calculation. All three characters are therefore acyclic, in particular $H^1(T^2\times[s_0,s_1];\operatorname{ad})=0$. Any invariant infinitesimal flat deformation on the full orbifold is exact on this exterior. Its primitive extends through the branch cores: on the lifted normal disk its covariant derivative is the smooth deformation, so radial integration and the metric connection bound give a unique continuous limit; the same equation then bootstraps it smoothly, and equivariance passes to the limit. Thus the full invariant first deformation space is zero. Its zero space also vanishes by [F1]'s central stabilizer result. The compact selfadjoint gauge-fixed critical Hessian consequently has no kernel and is invertible. This proves nondegeneracy, rather than inferring it from the uniqueness of the critical orbit. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 **The rank-one complex and its differential.** Apply [F2]'s small all-index trajectory perturbation, keeping this unique critical point and its Hessian fixed. The complex has one rank-one integral orientation module. Every relative trajectory now starts and ends at that same critical point, so its relative class is a quotient loop and its index belongs to $4\mathbb Z$ by [F2]. There are no index-one trajectories. Thus its integral differential is zero. The chosen-data homology is $\mathbb Z$, and the independence theorem of [F2] identifies the group for any other regular choices. Tensoring this free group with $\mathbb Q$ gives dimension one. Changing its orientation basis reverses its generator; nothing in this computation singles out one sign. No claim about the held sutured closure or its point/surface eigenspaces was used. [F1, F2, step 2.1, step 3.1, algebra] ∎

## Source notes

The entire Proposition4.1 and its proof on PDF55 of the authenticated124-page primary were read. The local proof fills in the actual product exterior, the projective commutator, the determinant-one gauge-orbit check and the adjoint cochain complex. This source is a computation against the separately declared singular analytic interface; it does not claim an independently accepted status for that interface or supply KHI excision.

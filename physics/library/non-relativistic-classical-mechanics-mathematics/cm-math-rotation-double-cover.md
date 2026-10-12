---
page: cm-math-rotation-double-cover
title: Rotation Double Cover
status: draft
items:
  - def-cm-quaternion-rotation-map-and-cover
  - lem-cm-quaternion-product-rule-and-conjugation-formula
  - lem-cm-body-angular-velocity-of-a-rotation-path
  - lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity
  - prop-cm-quaternion-angular-velocity-reconstruction
  - thm-cm-quaternion-lift-exists-and-is-unique
  - rem-cm-quaternion-lift-scope-and-sign
examples: []
requires:
  - cm-math-dynamics
  - lie-subgroups-actions-and-homogeneous-spaces
  - cm-math-geometry
  - cm-math-balances
---

The quaternion parametrization of the rotation group and the differential
equation that lifts a rotation path to the unit quaternions, all of it
mathematics: the page prepares the double cover and the angular-velocity
reconstruction used by the rigid-body items, and proves nothing physical.

[[def-cm-quaternion-rotation-map-and-cover]] fixes the objects: the imaginary
quaternions with the identification $\varphi:\mathbb R^3\to\operatorname{Im}\mathbb H$,
the unit sphere $S^3$, the conjugation map $\rho(q)(x)=qxq^{-1}$, and the notion
of a quaternion lift of a rotation path. The covering statement itself — that
$q\mapsto\rho(q)$ is a surjective two-sheeted covering homomorphism
$S^3\to SO(3)$ with kernel $\{1,-1\}$ — is supplied by the published item
[[ex-su-two-to-so-three-as-a-covering-homomorphism]] under its stated countable
choice hypothesis, and is cited, not reproved.
[[lem-cm-quaternion-product-rule-and-conjugation-formula]] records the algebra
used everywhere afterwards: the product rule for quaternion and matrix curves,
the multiplicativity $N(pq)=N(p)N(q)$, the anti-automorphism $\overline{pq}=\bar q\bar p$,
the identity $\operatorname{Re}(p\bar q)=\langle p,q\rangle_2$, and the
conjugation formula $q\,\varphi(v)\,\bar q=\varphi((a^2-\|u\|^2)v+2\langle u,v\rangle u+2a(u\times v))$
with its axis-angle form. [[lem-cm-body-angular-velocity-of-a-rotation-path]]
defines the body angular velocity of a $C^1$ rotation path as the unique
$\omega$ with $R^{\mathsf T}R'z=\omega\times z$, proves that $R^{\mathsf T}R'$ is
skew and that $R'=R\,\Omega_\omega$.

The lift equation is the subject of the remaining items.
[[lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity]] shows that for
continuous $\omega$ every solution of $q'=\tfrac12q\,\varphi(\omega(t))$ keeps
$N(q)$ constant, that a solution starting in $S^3$ produces a rotation path
$R=\rho\circ q$ with $R'=R\,\Omega_\omega$, and that the initial value problem
has a unique solution on the whole interval; the proof uses the compact
continuation theorem of [[cm-math-balances]]. 
[[prop-cm-quaternion-angular-velocity-reconstruction]] is the converse
computation: from a $C^1$ curve $q:I\to S^3$ one reads the body angular velocity
of $\rho\circ q$ as $\omega=2\varphi^{-1}(q^{-1}q')$, with $\varphi^{-1}$ applied
to the imaginary quaternion $q^{-1}q'$.
[[thm-cm-quaternion-lift-exists-and-is-unique]] assembles the two directions:
every $C^1$ rotation path has exactly two $C^1$ lifts, $q$ and $-q$, and the
lift with prescribed initial value is the unique solution of the lift equation.
[[rem-cm-quaternion-lift-scope-and-sign]] records the scope: the sign ambiguity
is global, a closed full turn need not have a closed lift, and no physical spin
or relativistic interpretation is claimed. All items carry `domain: mathematics`
and depend only on mathematical suppliers; the external ones are published
canonical root items, and the in-run suppliers are the geometry and balances
pages of this collection, read before the required [[cm-math-dynamics]] page. The companion page
[[cm-math-rotation-double-cover-examples]] verifies the constant-rate lift, a
time-varying fixed-axis rate, a non-axis-constant reconstruction computation,
explicit two-to-one preimages, and the closed-loop obstruction in finite form.

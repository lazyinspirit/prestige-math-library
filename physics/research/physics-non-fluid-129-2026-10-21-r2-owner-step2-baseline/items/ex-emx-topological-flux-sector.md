---
id: ex-emx-topological-flux-sector
kind: example
title: Excluded interior flux is not a global source law
status: draft
origin: session
domain: physics
library: physics
dependency_level: 3
deps:
  - def-emx-excitation-form
  - pthm-emx-exterior-maxwell
  - thm-emx-local-potential-homotopy
  - lem-emx-unit-sphere-radial-flux
  - prop-integration-of-top-forms-by-finite-parametrizations
  - def-smooth-singular-chain-and-cochain-complexes
  - def-standard-orientation-of-the-affine-simplex
  - def-integral-of-a-form-over-a-smooth-singular-simplex
  - def-divergence-and-curl-of-a-c1-vector-field
  - thm-local-coordinate-formula-for-the-exterior-derivative
  - thm-real-power-continuity-and-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-clairaut-schwarz-mixed-partials
  - thm-heine-borel-rn
  - thm-poincare-lemma-for-differential-forms-on-star-shaped-domains
  - thm-stokes-theorem-for-smooth-singular-chains
dependency_roles:
  def-emx-excitation-form: formulation-prerequisite
  pthm-emx-exterior-maxwell: physical-result
  thm-emx-local-potential-homotopy: mathematical-premise
  lem-emx-unit-sphere-radial-flux: mathematical-premise
  prop-integration-of-top-forms-by-finite-parametrizations: mathematical-premise
  def-smooth-singular-chain-and-cochain-complexes: mathematical-premise
  def-standard-orientation-of-the-affine-simplex: mathematical-premise
  def-integral-of-a-form-over-a-smooth-singular-simplex: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-poincare-lemma-for-differential-forms-on-star-shaped-domains: mathematical-premise
  thm-stokes-theorem-for-smooth-singular-chains: mathematical-premise
physical_scope: An ideal source-free vacuum Maxwell field on the punctured spatial region R^3 minus the origin with a specified nonzero flux parameter. The example gives no full-space magnetic-charge law, no empirical observation, and no smooth source-free extension through the excluded point.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Friedrich W. Hehl, Yakov Itin, and Yuri N. Obukhov, Recent developments in premetric classical electrodynamics, arXiv:physics/0610221v1
      url: https://arxiv.org/pdf/physics/0610221
      locator: Section 4, PDF pp. 4–6, equations (9)–(11), magnetic flux as a 2-form integral, dF = 0, and the distinct magnetic-source extension; the source's magnetic-source theory is not adopted here.
    - title: Niklas Beisert, Elektrodynamik, ETH Zurich 2024 FS lecture script
      url: https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf
      locator: Section 8.5, printed p. 8.7 (PDF p. 92), magnetic monopoles and the topological potential discussion; cited for the distinction between an excluded-domain field and a full-space magnetic-charge law, not for empirical claims.
proof_strategy: direct
---

## Example

Let $I$ be a nonempty open time interval and $\Omega=\mathbb R^3\setminus\{0\}$ in the fixed SI laboratory chart. Fix a nonzero flux parameter $\Phi$ with units Wb and a length $a=1\,\mathrm m$. Put $r=(x_1^2+x_2^2+x_3^2)^{1/2}$ and define the smooth static fields $E=0$ and $B=(\Phi/(4\pi))(x_1,x_2,x_3)/r^3$ on $I\times\Omega$. Set $P=M=0$ and total charge and current densities $\rho=0$ and $J=0$ there. Let $T$ be the tetrahedron with vertices $a(1,1,1)$, $a(1,-1,-1)$, $a(-1,1,-1)$, and $a(-1,-1,1)$. For each outward-oriented face choose its affine smooth singular 2-simplex $\sigma_j$ and let $q_a(p)=a p/\|p\|$; set $z=\sum_j q_a\circ\sigma_j$. Then $z$ is a finite outward-oriented smooth singular 2-cycle on the sphere of radius $a$. For each $t\in I$, write $z_t$ for its image in the time slice under $x\mapsto(t,x)$. The exterior field satisfies the source-free vacuum Maxwell equations and has cycle flux $\Phi_z(t)=\int_{z_t}F=\Phi$, so its field-strength 2-form has no global potential on $I\times\Omega$. This exterior flux does not imply a magnetic charge in the full-space Maxwell model: any smooth full-space divergence-free extension agreeing on the sphere of radius $a$ would have zero flux there, a contradiction.

## Example references

[[def-emx-excitation-form]]

[[pthm-emx-exterior-maxwell]]

[[lem-emx-unit-sphere-radial-flux]]

[[thm-emx-local-potential-homotopy]]

## Facts & Assumptions

**Given:** The nonzero Wb parameter, punctured region, static fields, zero material and source fields, tetrahedron, face simplices, radial map, and cycle in the Example.

[A1] The physical setup is restricted to $\Omega=\mathbb R^3\setminus\{0\}$; no value or source is asserted at the excluded origin.

[F1] [[def-emx-excitation-form]] defines $F=\mathcal B-dt\wedge\mathcal E$, the free-current form from $\rho_f,J_f$, and cycle flux by pullback Riemann integrals on finite smooth singular cycles.

[F2] [[pthm-emx-exterior-maxwell]] identifies dF = 0 and dG = J with the macroscopic Maxwell equations and gives the vacuum closure when P = M = 0.

[F3] [[def-smooth-singular-chain-and-cochain-complexes]] defines finite smooth singular chains and signed boundaries. [[def-standard-orientation-of-the-affine-simplex]] fixes the outward face signs, and [[def-integral-of-a-form-over-a-smooth-singular-simplex]] fixes the pullback integral for smooth forms.

[F4] [[thm-local-coordinate-formula-for-the-exterior-derivative]] gives the component formula for smooth forms. [[def-divergence-and-curl-of-a-c1-vector-field]] fixes $\operatorname{div}B=\sum_i\partial_iB_i$ and $\operatorname{curl}B$ by the usual positively oriented component formula.

[F5] [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule-for-total-derivatives]], and [[thm-algebra-of-derivatives]] justify differentiating $x_i r^{-3}$ on $r>0$.

[F6] [[thm-clairaut-schwarz-mixed-partials]] says that the second coordinate derivatives of the smooth scalar $r^{-1}$ commute.

[F7] [[lem-emx-unit-sphere-radial-flux]] defines the outward area form $\omega_u(v,w)=u\cdot(v\times w)$ on $S^2$ and computes $\int_{S^2}\omega=4\pi$. [[thm-heine-borel-rn]] gives compactness of $S^2$.

[F8] [[prop-integration-of-top-forms-by-finite-parametrizations]] identifies the integral over a compact oriented surface with the sum over finitely many orientation-preserving patches with disjoint interiors and closures covering it.

[F9] [[thm-emx-local-potential-homotopy]] says a smooth closed 2-form with nonzero period on a finite smooth singular 2-cycle has no global smooth 1-form potential.

[F10] [[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]] says every smooth closed positive-degree form on a star-shaped open Euclidean domain is exact. [[thm-stokes-theorem-for-smooth-singular-chains]] gives integral_z dA = integral_partial-z A.

## Verification

**Given:** The setup and cycle in the Example, with Phi nonzero.

1.1 Put $C=\Phi/(4\pi)$. On $r>0$, $F=C\beta$ is the smooth static magnetic 2-form, where $\beta=(x_1dx^2\wedge dx^3+x_2dx^3\wedge dx^1+x_3dx^1\wedge dx^2)/r^3$. By [F4], $d\beta=(\sum_i\partial_i(x_ir^{-3}))vol_3$. By [F5], $\partial_i(x_ir^{-3})=r^{-3}-3x_i^2r^{-5}$, so their sum is $3r^{-3}-3r^2r^{-5}=0$. Also, $B=-C\nabla(r^{-1})$, so $\operatorname{curl}B=0$ by [F6]. With $E=0$, $P=M=0$, and $\rho=J=0$, all four adopted vacuum Maxwell equations hold on $\Omega$; [F2] therefore gives $dF=0$ and $dG=0$ there. [A1, F2, F4, F5, F6, given, algebra]

1.2 The origin is the barycenter of the four tetrahedron vertices, hence lies strictly inside $T$, and each face lies in a plane $n\cdot p=h$ with outward unit normal $n$ and $h>0$. Each face avoids the origin, so $q_a$ is smooth on a neighborhood of it. Convexity and $0$ in the interior imply each ray from $0$ meets the boundary of $T$ once; therefore $q_a$ maps the four face interiors bijectively onto disjoint open patches of the radius-$a$ sphere whose closures cover that sphere. For face tangent vectors $v,w$ in the outward orientation, put $u=p/\|p\|$. Then $D(q_a)_p(v)=(a/\|p\|)(v-(u\cdot v)u)$ and $u\cdot(D(q_a)_p(v)\times D(q_a)_p(w))=(a^2/\|p\|^3)p\cdot(v\times w)>0$, because $p$ has positive normal component $h n$. Thus each face map preserves orientation. The signed edges of the four outward tetrahedron faces cancel in pairs; $q_a$ agrees on shared edges, so [F3] gives $\partial z=0$. [A1, F3, given, algebra]

2.1 The scaling map $\psi_a:S^2\to S_a^2$, $\psi_a(u)=au$, satisfies $\psi_a^*(\beta|_{S_a^2})=\omega$, since the numerator and denominator in $\beta$ both scale by $a^3$. The four patches of step 1.2 satisfy the hypotheses of [F8], and the compact oriented surface integral is the one evaluated in [F7]. Hence $\int_z\beta=\int_{S_a^2}\beta=\int_{S^2}\omega=4\pi$, so the cycle flux of $F$ is $\Phi_z(t)=C\int_z\beta=\Phi$ for every $t$. [F1, F7, F8, step 1.2, given, algebra]

3.1 The embedded cycle $z_t$ is a finite smooth singular 2-cycle in $I\times\Omega$. Its inclusion pullback of $F$ is $C\beta$, which is smooth and closed on $\Omega$ by step 1.1 and has nonzero period $\Phi$ by step 2.1. Therefore $F$ is a smooth closed 2-form on $I\times\Omega$ with nonzero period on $z_t$. Applying [F9] shows that no globally defined smooth 1-form $A$ on $I\times\Omega$ satisfies $dA=F$. [F1, F3, F9, step 1.1, step 2.1]

4.1 Suppose a smooth full-space magnetic field extended $B$ and remained divergence-free on $\mathbb R^3$. Its spatial 2-form $\widetilde\beta=\widetilde B_1dx^2\wedge dx^3+\widetilde B_2dx^3\wedge dx^1+\widetilde B_3dx^1\wedge dx^2$ would be smooth and closed by [F4], and would agree with $C\beta$ on $S_a^2$. Since $\mathbb R^3$ is star-shaped, [F10] gives $\widetilde\beta=dA$ for a global smooth 1-form $A$. Stokes and $\partial z=0$ from step 1.2 then give $\int_z\widetilde\beta=\int_{\partial z}A=0$, while step 2.1 gives $\int_z\widetilde\beta=4\pi C=\Phi\ne0$. This contradiction excludes a smooth divergence-free full-space extension; it does not turn the exterior field into a magnetic-charge source law. [A1, F4, F10, step 1.2, step 2.1] ∎

---
id: ex-nrqmx-spin-half-monopole
kind: example
domain: mathematics
library: mathematics
title: Spin-half curvature and a solid angle
status: published
origin: pipeline
dependency_level: 5
deps:
  - def-countable-choice
  - def-axiom-of-choice
  - thm-heine-borel-rn
  - thm-lebesgue-number-lemma
  - lem-nrqmx-c1-stokes-compact-surface
  - thm-nrqmx-berry-projector-curvature
  - thm-nrqmx-rank-one-chern-holonomy
  - lem-nrqmx-spin-half-solid-angle-period
dependency_roles:
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-lebesgue-number-lemma: mathematical-premise
  lem-nrqmx-c1-stokes-compact-surface: mathematical-premise
  thm-nrqmx-berry-projector-curvature: mathematical-premise
  thm-nrqmx-rank-one-chern-holonomy: mathematical-premise
  lem-nrqmx-spin-half-solid-angle-period: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Applications of Quantum Mechanics, University of Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/aqm/aqm.pdf
    - title: J. E. Avron, R. Seiler, and L. G. Yaffe, Adiabatic Theorems and Applications to the Quantum Hall Effect
      url: https://phsites.technion.ac.il/avron/wp-content/uploads/sites/3/2013/05/commun_math_phys_110_33-49_1987.pdf
---

## Example

Assume full AC. Give $S^2$ its unit-sphere metric and outward orientation. Let
$$\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad \sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix},\qquad \sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$
and for $n=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$ set $P_+=(I+n\cdot\sigma)/2$. The positive eigenline has northern unit frame
$$u_N(\theta,\phi)=\begin{pmatrix}\cos(\theta/2)\\ e^{i\phi}\sin(\theta/2)\end{pmatrix},\qquad 0\leq\theta<\pi.$$
In this frame $A_N=u_N^*du_N=i(1-\cos\theta)d\phi/2$, and the curvature is $F=i\sin\theta\,d\theta\wedge d\phi/2$. The positive eigenline has Chern number $-1$. Let $\omega_{S^2}$ be the outward-oriented area form, which in spherical coordinates is $\sin\theta\,d\theta\wedge d\phi$. For any piecewise $C^2$ closed loop with a $C^2$ oriented disk filling $S$, its oriented solid angle is $\Omega=\int_S\omega_{S^2}$ modulo $4\pi$. Its holonomy is $\exp(-i\Omega/2)$; in particular a latitude at polar angle $\theta$ has $\Omega=2\pi(1-\cos\theta)$.

## Example references

[[thm-nrqmx-berry-projector-curvature]]

[[thm-nrqmx-rank-one-chern-holonomy]]

[[lem-nrqmx-c1-stokes-compact-surface]]

[[lem-nrqmx-spin-half-solid-angle-period]]

## Facts & Assumptions

**Given:** Full AC, the oriented unit sphere, the displayed Pauli matrices, and the projector family $P_+$.

[A1] Full AC is [[def-axiom-of-choice]]; it entails Countable Choice [[def-countable-choice]].

[F1] [[thm-nrqmx-berry-projector-curvature]]: for a $C^2$ orthogonal projector, the projected connection has curvature $P(dP\wedge dP)P$ and a local orthonormal frame $u$ has connection form $u^*du$.

[F2] [[thm-nrqmx-rank-one-chern-holonomy]]: the rank-one Chern number is the curvature integral with factor $i/(2\pi)$, and local parallel transport has factors $\exp(-\int A)$ with inverse frame-transition scalars at patch changes.

[F3] [[lem-nrqmx-c1-stokes-compact-surface]]: for a $C^1$ one-form on a compact oriented surface region with finitely many piecewise-$C^2$ boundary arcs and corners, Stokes holds with the outward-normal-first orientation.

[F4] [[lem-nrqmx-spin-half-solid-angle-period]]: two $C^2$ disk fillings of the same loop have solid-angle integrals differing by an element of $4\pi\mathbb Z$.

[F5] [[thm-heine-borel-rn]] and [[thm-lebesgue-number-lemma]]: the standard closed parameter disk is compact metric and every open cover of it has a positive Lebesgue number.

## Verification

1.1 Matrix multiplication gives $(n\cdot\sigma)^*=(n\cdot\sigma)$ and $(n\cdot\sigma)^2=I$, while $\operatorname{tr}(n\cdot\sigma)=0$. Hence $P_+^*=P_+^2=P_+$ and $\operatorname{tr}P_+=1$, so it is a rank-one orthogonal projection. Direct multiplication gives $(n\cdot\sigma)u_N=u_N$ and $u_N^*u_N=1$, so $u_N$ is a normalized local frame of its positive eigenline. [given, A1, algebra]

2.1 Differentiating the displayed spinor gives $u_N^*du_N=i\sin^2(\theta/2)\,d\phi=i(1-\cos\theta)d\phi/2$. Taking the exterior derivative yields $dA_N=i\sin\theta\,d\theta\wedge d\phi/2$, which is the curvature in this frame by [F1]. Both the projector curvature and the spherical area form are global smooth two-forms, so their equality on the northern chart gives $F=(i/2)\omega_{S^2}$ globally. [given, F1, step 1.1, algebra]

3.1 Integrating the area form gives $\int_{S^2}\sin\theta\,d\theta\,d\phi=4\pi$, hence $\frac{i}{2\pi}\int_{S^2}F=\frac{i}{2\pi}\frac{i}{2}(4\pi)=-1$. By [F2] this is the integral first Chern number with the stated anti-Hermitian connection convention. [given, F1, F2, step 2.1, algebra]

4.1 A southern frame is $u_S=(e^{-i\phi}\cos(\theta/2),\sin(\theta/2))^T=e^{-i\phi}u_N$; it is regular at the south pole and together with $u_N$ covers $S^2$. Along the equator the transition is $g(\phi)=e^{-i\phi}$, so $(2\pi i)^{-1}\int_0^{2\pi}g^{-1}dg=-1$. The two-hemisphere clutching clause in [F2] therefore gives Chern number $-1$, matching the direct curvature integral in step 3.1 and fixing the orientation sign. Pull these frames back to the standard closed parameter disk filling $S$. Their inverse images form an open cover of the disk; by [F5] it has a Lebesgue number $\delta>0$. Choose $N$ with $\sqrt2/N<\delta$, set $h=1/N$, and intersect the disk with the closed axis-aligned squares $[i h,(i+1)h]\times[j h,(j+1)h]$. Retain only intersections $C_{ij}$ with nonempty interior. There are finitely many; their interiors are disjoint and their closures cover the disk, since every disk point is a limit of interior points off the grid lines and a subsequence lies in one of finitely many retained cells. Each cell has diameter at most $\sqrt2h<\delta$, so it lies in one frame patch. Each is a compact convex region whose boundary, after zero-length pieces are discarded, is a finite union of regular straight or circular arcs meeting at finitely many corners; the C1 Stokes item [F3] applies. On a cell $C_{ij}$, its frame connection $A_{ij}$ is $C^1$ because the filling is $C^2$, and [F3] gives $\int_{\partial C_{ij}}A_{ij}=\int_{C_{ij}}F$. Since one frame covers the cell, its boundary holonomy is $\exp(-\int_{\partial C_{ij}}A_{ij})=\exp(-\int_{C_{ij}}F)$. Choose a unit vector at each vertex of this finite cell decomposition and write each oriented edge transport as its unit-modulus scalar in those endpoint vectors. In the product of the cell-boundary holonomies every internal edge occurs once in each direction, so its scalar and inverse cancel; only the outer boundary loop remains. Thus $\operatorname{Hol}(C)=\exp(-\int_SF)=\exp(-i\Omega/2)$. If a second filling is chosen, [F4] says its solid angle differs by $4\pi k$ for some integer $k$, so this exponential is independent of the filling. For a latitude circle the north-cap integral is $\Omega=\int_0^{2\pi}\int_0^\theta\sin u\,du\,d\phi=2\pi(1-\cos\theta)$. [given, F1, F2, F3, F4, F5, step 2.1, step 3.1, algebra] ∎


---
id: thm-qftx-critical-vortex-global-energy-minimum
kind: theorem
title: Global energy minima for critical Abelian Higgs vortices
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
- def-qftx-critical-abelian-higgs-divisor-data
- thm-qftx-taubes-arbitrary-divisor-plane-vortex
- def-axiom-of-choice
- thm-general-stokes-theorem
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-monotone-convergence-for-the-integral
- cor-cauchy-schwarz-inequality-for-l-two
dependency_roles:
  def-qftx-critical-abelian-higgs-divisor-data: mathematical-premise
  thm-qftx-taubes-arbitrary-divisor-plane-vortex: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
dependency_level: 3
axiom_base: ZF + full Axiom of Choice; the proof uses it for a countable sequence of radii after the finite-energy coarea argument. No physical premise.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: 'David Tong, TASI Lectures on Solitons, Lecture 3: Vortices'
    url: https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf
    locator: '§3.2, printed pp. 72–73, equations (3.8)–(3.10): Bogomolny square completion, first-order equations and tension lower bound.'
  - title: Shouxin Chen and Yisong Yang, Existence of Multiple Vortices in Supersymmetric Gauge Field Theory
    url: https://arxiv.org/pdf/1203.3071
    locator: '§§2 and 7, PDF pp. 4–5 and 19–20: BPS normalization, flux and tension. The scalar N=1 normalization is mapped explicitly in batch coverage.'
---

## Statement

Assume the Axiom of Choice. Fix $e>0$ and $\xi>0$ and use the critical Abelian-Higgs energy and boundary-sector convention in which $D_A=d-iA$, $B=dA$, $q$ tends in modulus to $\sqrt\xi$, and its exterior phase has winding $n\in\mathbb Z$. For every smooth finite-energy field pair $(A,q)$ in that sector,
$$E(A,q)\ge 2\pi\xi|n|.$$
For $n\ge0$, the exact identity is
$$E(A,q)=\int_{\mathbb R^2}\left(|(D_{A,1}+iD_{A,2})q|^2+\frac{(B-e^2(\xi-|q|^2))^2}{2e^2}\right)dx_1dx_2+2\pi\xi n;$$
for $n\le0$, replace $D_{A,1}+iD_{A,2}$ by $D_{A,1}-iD_{A,2}$ and $B-e^2(\xi-|q|^2)$ by $B+e^2(\xi-|q|^2)$, with topological term $-2\pi\xi n$. The boundary-current term in the disk identity vanishes along a radius sequence derived from the finite-energy hypotheses. The fields reconstructed for any fixed divisor by the arbitrary-divisor plane theorem attain equality, are absolute transverse energy minima in their winding sector, have zero first variation under smooth compactly supported variations, and have nonnegative second variation in those directions. This does not assert uniqueness of minimizing fields across distinct divisors of the same degree.

## Statement references

[Critical square completion and tension bound (Tong, §3.2)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[Independent BPS flux and tension treatment (Chen–Yang, §§2 and 7)](https://arxiv.org/pdf/1203.3071)

## Facts & Assumptions

**Given:** The Axiom of Choice; $e,\xi>0$; a smooth finite-energy pair $(A,q)$ in the boundary sector of winding $n$ from [[def-qftx-critical-abelian-higgs-divisor-data]].

[A1] Full AC includes Countable Choice and is the declared mathematical base. It is used only to select radii from a countable sequence of nonempty good-radius sets after the coarea integrability argument. ([[def-axiom-of-choice]])

[F1] [[def-qftx-critical-abelian-higgs-divisor-data]]: $E=\int(B^2/(2e^2)+|D_Aq|^2+e^2(|q|^2-\xi)^2/2)$, $D_A=d-iA$, and on a large circle $q=|q|e^{i(n\theta+\phi)}$ with single-valued periodic $\phi$; $\xi>0$ and $|q|\to\sqrt\xi$.

[F2] [[thm-qftx-taubes-arbitrary-divisor-plane-vortex]]: for each effective finite divisor of degree $|n|$, the reconstructed smooth critical fields satisfy the corresponding first-order equations, have finite energy, and have flux $2\pi n$ with sign set by the orientation.

[F3] [[thm-general-stokes-theorem]]: on the oriented disk with outward-normal-first boundary orientation, the integral of $dA$ equals the boundary integral of $A$, and the integral of $dj$ equals the boundary integral of the one-form $j$.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: integrable nonnegative energy densities on the polar-coordinate product can be integrated by radial slices; the section integrals are measurable and their total integral equals the plane integral.

[F5] [[thm-monotone-convergence-for-the-integral]]: the integrals of an increasing sequence of nonnegative measurable functions converge to the integral of their pointwise limit.


[F6] For square-integrable scalar functions on a circle with arc-length measure, $\int|fg|\le\|f\|_2\|g\|_2$. [[cor-cauchy-schwarz-inequality-for-l-two]]

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 Define the real current one-form $j=j_1dx_1+j_2dx_2$ by $j_i=\operatorname{Im}(\overline qD_{A,i}q)$. Expanding the squares and using $[D_{A,1},D_{A,2}]q=-iBq$ gives
$$|D_Aq|^2=|(D_{A,1}+iD_{A,2})q|^2+\partial_1j_2-\partial_2j_1+B|q|^2.$$
Also, direct expansion gives
$$\frac{B^2}{2e^2}+\frac{e^2}{2}(\xi-|q|^2)^2=\frac{(B-e^2(\xi-|q|^2))^2}{2e^2}+B(\xi-|q|^2).$$
Adding these identities yields the positive-winding disk identity with boundary term $\int_{D_R}(\partial_1j_2-\partial_2j_1)$. Repeating the expansion with $D_{A,1}-iD_{A,2}$ and $B+e^2(\xi-|q|^2)$ gives the negative-winding identity with the opposite signs. [F1, algebra]

1.2 For almost every $r$ larger than the nonzero-field radius, let $Q(r)=\int_{\partial D_r}(|q|^2-\xi)^2ds$ and $K(r)=\int_{\partial D_r}|D_{A,\tau}q|^2ds$, where $D_{A,\tau}$ is the covariant derivative in the unit tangent direction. The potential and kinetic terms of the finite energy, with polar coordinates and [F4], imply $Q,K\in L^1([R_0,\infty))$. For each integer $m\ge1$, the set $S_m=\{r\ge R_0:Q(r)>1/m\}$ has finite measure. Its complement has divergent $\int dr/r$, since removing a finite-measure set from a half-line cannot make the logarithmic integral finite. If $rK(r)\ge1/m$ for every sufficiently large $r\notin S_m$, then $\int K(r)dr\ge m^{-1}\int_{[R,\infty)\setminus S_m}dr/r=\infty$, contradiction. Thus there is an unbounded set of radii with $Q(r)\le1/m$ and $rK(r)<1/m$. By [A1] select an increasing sequence $r_m\to\infty$ from these sets. Along it, [F6] gives $\int_{\partial D_{r_m}}|q|^2ds\le2\pi\xi r_m+\sqrt{2\pi r_mQ(r_m)}=O(r_m)$, and
$$\left|\int_{\partial D_{r_m}}j\right|\le\left(\int_{\partial D_{r_m}}|q|^2ds\right)^{1/2}K(r_m)^{1/2}\longrightarrow0.$$
[A1, F1, F4, F6, algebra]

2.1 For sufficiently large $r$, $|q|\ge\sqrt\xi/2$. On $\partial D_r$, $j=|q|^2(d(n\theta+\phi)-A)$, so $\int_{\partial D_r}A=2\pi n-\int_{\partial D_r}j/|q|^2$ because $\phi$ is single-valued and periodic. Along the sequence from step 1.2,
$$\left|\int_{\partial D_{r_m}}\frac{j}{|q|^2}\right|\le\frac{2}{\sqrt\xi}(2\pi r_mK(r_m))^{1/2}\longrightarrow0.$$
By [F3], $\int_{D_{r_m}}B\to2\pi n$. [F1, F3, F6, step 1.2, algebra]

3.1 Integrate the positive-winding disk identity from step 1.1 over $D_{r_m}$ and use [F3] on the current term. The two square integrals are nonnegative, while the boundary-current integral tends to zero by step 1.2 and the flux integral tends to $2\pi n$ by step 2.1. By [F5], the integrals of the nonnegative energy and square densities over the increasing disks converge to their plane integrals, so taking the limit gives the positive-sign exact identity and hence $E(A,q)\ge2\pi\xi n$ for $n\ge0$. For $n\le0$, apply the positive-sign identity from step 1.1 to $(\overline q,-A)$, whose winding is $-n\ge0$; its energy is unchanged and its curvature changes sign. The resulting identity is exactly the negative-sign identity for $(A,q)$ and gives $E(A,q)\ge-2\pi\xi n$. Thus the bound is $E(A,q)\ge2\pi\xi|n|$, and both identities hold when $n=0$ as well. [F3, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 For each fixed divisor, [F2] supplies a smooth pair satisfying the relevant first-order equations. Its square terms in step 1.1 vanish identically; the sequence estimates of steps 1.2–2.1 apply because [F2] gives finite energy and the same boundary sector. Hence its energy is exactly $2\pi\xi|n|$. The lower bound of step 3.1 applies to every admissible same-winding configuration, so this pair is an absolute transverse energy minimum, without radial or unit-winding assumptions. [F2, step 1.1, step 1.2, step 2.1, step 3.1]

5.1 Let $(a,\eta)$ be a smooth compactly supported variation of a minimizing pair, and set $A_t=A+ta$, $q_t=q+t\eta$; for any field expression $F$, define $\delta F:=\left.\frac{d}{dt}\right|_{t=0}F(A_t,q_t)$. For sufficiently small $t$, the fields remain in the same boundary sector; outside the compact support they equal the original fields. Thus the boundary-current limit in the disk identity is unchanged and the flux is unchanged by Stokes applied to $d a$. The energy along this variation is the constant $2\pi\xi|n|$ plus the squared $L^2$ norms of the two first-order residuals in step 1.1. Both residuals vanish at $t=0$; differentiating the squared norms gives $E'(0)=0$ and
$$E''(0)=2\int_{\mathbb R^2}\left(|\delta(D_{A,1}\pm iD_{A,2})q|^2+\frac{|\delta(B\mp e^2(\xi-|q|^2))|^2}{2e^2}\right)dx_1dx_2\ge0,$$
with the upper signs for $n\ge0$ and lower signs for $n\le0$ (either choice when $n=0$). Therefore the first variation vanishes and no smooth compactly supported same-sector perturbation lowers the energy. Distinct divisors give distinct possible minimizing fields, so no cross-divisor uniqueness follows. [F1, F2, F3, step 1.1, step 4.1, algebra] ∎
## Proof references

[Bogomolny energy identity and tension bound (Tong, §3.2)](https://www.damtp.cam.ac.uk/user/tong/tasi/vortex.pdf)

[BPS flux and tension conventions (Chen–Yang, §§2 and 7)](https://arxiv.org/pdf/1203.3071)

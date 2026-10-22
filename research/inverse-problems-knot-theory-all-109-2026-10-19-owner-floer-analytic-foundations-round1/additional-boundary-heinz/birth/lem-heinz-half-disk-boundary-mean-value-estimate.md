---
id: lem-heinz-half-disk-boundary-mean-value-estimate
kind: lemma
title: "A half-disk small-energy estimate with a nonlinear normal derivative bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-classical-subharmonic-mean-value-inequalities]
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dusa McDuff and Dietmar Salamon, J-holomorphic Curves and Symplectic Topology, mean value inequalities"
      url: "https://bookstore.ams.org/coll-52"
---

## Statement

Assume Countable Choice. Let $e\ge0$ be $C^2$ on a neighborhood, relative to the closed upper half-plane, of the closed half-disk $\overline B_r^+=\{(s,t):s^2+t^2\le r^2,\ t\ge0\}$, where $r>0$. Suppose in its interior and on its flat boundary, respectively,
$$\Delta e\ge-Ae^2-Be,\qquad \partial_\nu e=-e_t\le ce^{3/2}+de,$$
where $A,B,c,d\ge0$. Put $H=\max\{16A,4096c^2,1\}$. If
$$Br^2\le\frac14,\qquad dr\le\frac1{16},\qquad E:=\int_{B_r^+}e<\frac{\pi}{8H},$$
then
$$e(0,0)\le\frac{16}{\pi r^2}E.$$
No condition on the normal derivative at the curved edge is required. This is a scalar estimate with the flat-boundary measure term retained; deriving the differential inequalities for a map is a separate obligation.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, the nonnegative density, half-disk, constants, and differential inequalities in the statement.

[F1] Classical $C^2$ functions with nonnegative Laplacian satisfy the ball mean-value inequality, by [[lem-classical-subharmonic-mean-value-inequalities]].

## Proof

1.1 Reflect the density evenly, $\widehat e(s,t)=e(s,|t|)$, on the full disk. It is continuous and piecewise $C^2$. Distributional integration by parts in the upper and lower half-planes gives $$\Delta\widehat e=(\Delta e)^{\mathrm{even}}+2e_t(s,0+)\,\delta_{\{t=0\}},$$ where $\delta_{\{t=0\}}$ denotes integration along the flat line. Indeed the jump of the first $t$ derivative is $e_t(s,0+)-(-e_t(s,0+))=2e_t(s,0+)$. Thus the atom is bounded below by $-2(c e(s,0)^{3/2}+de(s,0))\delta_{\{t=0\}}$. Its sign is not discarded. The reflected integral is $\int_{B_r}\widehat e=2E$. [given, construct, algebra]

2.1 We shall use [F1] also for continuous distributionally subharmonic functions. Here is the needed extension. On any relatively compact disk convolve the continuous function with a nonnegative smooth unit-integral bump supported in a radius-$\varepsilon$ disk. Such bumps are obtained by normalizing $\exp(-1/(1-|x|^2))$ on the unit disk and scaling. Positivity of the distributional Laplacian gives nonnegative ordinary Laplacian after convolution, since its value is the distribution evaluated on a translated nonnegative bump. Apply [F1] on disks whose closed $\varepsilon$ neighborhood remains in the domain. Uniform continuity on compact subsets makes the convolutions converge uniformly to the original continuous function, so their mean-value inequalities pass to the limit. This proves the stated extension without assuming that a reflected function is $C^2$. [F1, construct]

3.1 If $e(0,0)=0$, the conclusion follows from $E\ge0$. Otherwise maximize $(r-|z|)^2\widehat e(z)$ on the full closed disk, and let $z_0=(s_0,t_0)$ be a point of positive maximum. Put $M=\widehat e(z_0)>0$ and $\ell=(r-|z_0|)/2$. Maximality gives $\widehat e\le4M$ on $\overline B_\ell(z_0)$ and $r^2 e(0,0)\le4\ell^2M$. On this smaller disk the bulk Laplacian is at least $-K$, with $K=16AM^2+4BM$, and its line atom is at least $-2L\delta_{\{t=0\}}$, with $L=8cM^{3/2}+4dM$. Consequently $$F(z)=\widehat e(z)+K|z-z_0|^2/4+L|t|$$ is distributionally subharmonic there, since $\Delta|t|=2\delta_{\{t=0\}}$. [step 1.1, given, construct, algebra]

4.1 Apply step 2.1 to $F$ on a radius $0<\rho\le\ell$ about $z_0$; the endpoint radius follows by continuity if needed. The average of $|z-z_0|^2$ is $\rho^2/2$, and $\bigl||t|-|t_0|\bigr|\le\rho$ there. Hence $$M\le\frac1{\pi\rho^2}\int_{B_\rho(z_0)}\widehat e+M(2AM+B/2)\rho^2+M(8c\sqrt M+4d)\rho.$$ Choose $$\rho=\min\left\{\ell,\ \frac1{4\sqrt{AM}},\ \frac1{64c\sqrt M}\right\},$$ interpreting a term with zero denominator as $+\infty$. The two nonlinear error terms are at most $M/8$ each. The remaining terms satisfy $MB\rho^2/2\le MBr^2/8\le M/32$ and $4Md\rho\le2Mdr\le M/8$, because $\ell\le r/2$. Their sum is $13M/32<M/2$. Thus $$\int_{B_\rho(z_0)}\widehat e\ge\frac\pi2M\rho^2.$$ [step 2.1, step 3.1, given, construct, algebra]

5.1 If $\rho<\ell$, one of the nonlinear terms determines the minimum, so $M\rho^2$ equals $1/(16A)$ or $1/(4096c^2)$, or their common minimum when both are present. In all cases $M\rho^2\ge1/H$. Step 4.1 would give $2E\ge\pi/(2H)$, contradicting $E<\pi/(8H)$. Therefore $\rho=\ell$. Step 4.1 then gives $M\ell^2\le4E/\pi$, and the center comparison in step 3.1 proves $e(0,0)\le16E/(\pi r^2)$. If both nonlinear coefficients vanish, the minimum defining $\rho$ is already $\ell$; the same argument applies. The proof never uses a normal derivative at the curved edge, where the maximizing weight vanishes. [step 3.1, step 4.1, given, cases, algebra] ∎

---
id: ex-critical-entry-submersion-disk-and-contact-end
kind: example
title: An entire zero-winding critical entry disk
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: differential-geometry
dependency_level: 2
deps:
  - def-stopped-four-dimensional-lefschetz-and-brane-data
  - lem-stopped-entry-submersion-disk-whole-completion
dependency_roles:
  def-stopped-four-dimensional-lefschetz-and-brane-data: mathematical-premise
  lem-stopped-entry-submersion-disk-whole-completion: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Paul Seidel, Lectures on Categorical Dynamics and Symplectic Topology
      url: https://math.mit.edu/~seidel/texts/937-lecture-notes.pdf
      locator: Lecture 6, Liouville and exact conical conventions; all displayed disk calculations are direct.
    - title: Ganatra, Pardon, and Shende, Sectorial descent for wrapped Fukaya categories
      url: https://arxiv.org/pdf/1809.03427v2
      locator: §3.3, linking disks at a stop; this example computes its own complete contact end.
verification:
  precheck: pending
---

## Statement

In the critical chart with $\lambda_H=2p\cdot dq+q\cdot dp$, let
$$g(r)=\exp\!\left(-\frac12\int_0^r\frac{\chi(t)}t\,dt\right),\quad f(p)=p_1g(|p|),$$
where $\chi=0$ on $[0,1]$ and $\chi=1$ on $[2,\infty)$. Verify the exact disk, its unique backward entry hit, and its full zero-winding contact end, and state what these facts do not identify.

## Statement references

[[def-stopped-four-dimensional-lefschetz-and-brane-data]]

[[lem-stopped-entry-submersion-disk-whole-completion]]

## Facts & Assumptions

**Given:** The critical chart, the smooth $[0,1]$-valued cutoff $\chi$ fixed in [F2] with the displayed profile, and $\delta>0$ sufficiently small that $\delta\|\nabla f\|_\infty<1$. Put $e(\theta)=(\cos\theta,\sin\theta)$, $J(a,b)=(-b,a)$, and $Y_-=\{|p|^2-|q|^2=-1\}$.

[F1] [[def-stopped-four-dimensional-lefschetz-and-brane-data]] fixes $\lambda_H=2p\cdot dq+q\cdot dp$ and the Liouville field $Z=2p\partial_p-q\partial_q$.

[F2] [[lem-stopped-entry-submersion-disk-whole-completion]] supplies the entire disk/contact formulas and the global statement that they are not a boundary-attachment movie.


## Proof

1.1 Set $r=|p|$. Differentiating the integral gives $rg'=-\chi g/2$, and therefore
$$\partial_{p_1}f=g(r)\left(1-\frac{\chi(r)}2\frac{p_1^2}{r^2}\right)\ge g(r)/2>0.$$
At $p=0$, $g=1$ and $\partial_{p_1}f=1$. Thus $\nabla f\ne0$. The graph $D_\delta=\{q=\delta\nabla f(p)\}$ is embedded and proper by its identity $p$-projection. Its pullback of $\omega_H=\sum dp_i\wedge dq_i$ vanishes by Hessian symmetry, and
$$\lambda_H|_{D_\delta}=d\bigl[\delta(2p\cdot\nabla f-f)\bigr].$$
On $r\ge2$, $g=Cr^{-1/2}$, so $f$ is homogeneous of degree $1/2$; Euler's identity makes the displayed primitive zero there. [F1, given, construct, algebra]

2.1 Write $p=re(\theta)$ on the tail. Direct differentiation gives
$$q=\delta r^{-1/2}w(\theta),\qquad w(\theta)=C\left(e_1-\frac12\cos\theta\,e(\theta)\right).$$
Its first component is $C(1-\tfrac12\cos^2\theta)\ge C/2$, so $w\ne0$ and $Q=\arg w$ remains in one open half-circle. Its winding is zero. Backward Liouville flow is $(p(\tau),q(\tau))=(e^{-2\tau}p,e^\tau q)$. The defining function $\phi=|p|^2-|q|^2$ satisfies $\dot\phi=-4|p|^2-2|q|^2<0$ because $q\ne0$, and tends to $-\infty$. Initially $\phi>-1$ by the bound on $\delta\|\nabla f\|_\infty$. Hence it crosses $-1$ exactly once, at finite time, and transversely. [F1, step 1.1, given, algebra]

3.1 At the hit write the $p$-radius as $a$. Then $|q|=\delta a^{-1/2}|w|$ and $Y_-$ gives $a^2-\delta^2|w|^2/a=-1$, equivalently $a^3+a=\delta^2|w|^2$. The left side increases strictly from zero to infinity, so there is one positive solution. In the contact chart $q=Rv(Q)$, $p=sv(Q)+\eta Jv(Q)$, $R^2=1+s^2+\eta^2$, $z=sR^2$, $y=\eta R^2$, substitution in $\lambda_H$ gives $(dz+y\,dQ)/R$. Substituting the hit coordinates yields
$$Q=\arg w,\qquad z=\delta^2|w|\,e\cdot w,\qquad y=\delta^2|w|\,e\cdot Jw.$$
Writing $\varphi=\arg w$, the polar angle of $(z,y)$ is $\theta-\varphi(\theta)$, not $\theta$. Direct differentiation gives $\varphi'=(3\sin^2\theta-1)/(1+3\sin^2\theta)$, so $(\theta-\varphi)'=2/(1+3\sin^2\theta)>0$, and this angle increases by $2\pi$ over one period. Thus the complete end is an embedded radial graph, while its attaching-circle coordinate $Q$ has winding zero. [F1, F2, step 2.1, construct, algebra]

4.1 These calculations determine the disk, its primitive, and its entire entry end. They do not specify old or clocked endpoint branes, collars relating those endpoints, or their primitive constants on other ends. An embedded boundary movie would have to supply those additional data and maps. Consequently the computation proves the stated disk and entry-end claims, while making no boundary-attachment identification. This conclusion uses only the explicit input and computed disk, not a boundary-attachment theorem. [F1, F2, given, step 3.1] ∎

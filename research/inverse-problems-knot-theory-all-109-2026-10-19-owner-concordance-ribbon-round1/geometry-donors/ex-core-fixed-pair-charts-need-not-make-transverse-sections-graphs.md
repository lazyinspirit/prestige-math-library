---
id: ex-core-fixed-pair-charts-need-not-make-transverse-sections-graphs
kind: example
title: A core-fixed pair chart can make transverse sections nongraphs
status: draft
origin: session
deps:
  - thm-intermediate-value
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Write $\mathbb R^4=\mathbb R_x\times\mathbb R_t\times\mathbb R^2_z$, put $A=\{z=0\}$ and $C=\{x=0,z=0\}$, and let $P=\{t=0\}$. There is a compactly supported ambient isotopy $H_u$ from the identity, preserving $A$ and fixing $C$ pointwise, such that $H_1(P)$ is locally flat but is not a graph over the $(x,z)$ coordinates in any neighborhood of the origin. In particular, pair charts that straighten the core need not make a specified transverse collar section a graph in their longitudinal coordinate.

## Facts & Assumptions

**Given:** The explicit Euclidean model. This is a diagnostic example, not a counterexample to the existence of a suitable pair-adapted tube.

[F1] A continuous real-valued function on a closed interval takes each value between its endpoint values. [[thm-intermediate-value]]

## Verification

1.1 In the $(x,t)$ plane use polar coordinates $x=r\cos\theta$, $t=r\sin\theta$. Choose continuous cutoffs $\beta,\gamma:[0,\infty)\to[0,1]$, equal to one on $[0,1/4]$ and zero on $[1/2,\infty)$. For $r>0$ put $a(r,z)=\beta(r)\gamma(|z|)(\pi/4+(\pi/8)\sin(1/r))$. For any $0\le a\le3\pi/8$ define an increasing circle homeomorphism $\phi_a$ as follows: it is the identity on the left semicircle $[\pi/2,3\pi/2]$; on $[-\pi/2,0]$ it is affine from $-\pi/2$ to $a$; and on $[0,\pi/2]$ it is affine from $a$ to $\pi/2$. The two right-hand slopes are positive, at least $1/4$. Both $\phi_a$ and its piecewise-affine inverse depend continuously on $a$ and their circle argument. [given, construct]

2.1 For $r>0$ define $H_u(r,\theta,z)=(r,\phi_{u a(r,z)}(\theta),z)$ and at $r=0$ fix the point $(0,0,z)$. This is continuous, including at $r=0$, because the planar radius stays $r$. Its inverse uses $\phi_{u a(r,z)}^{-1}$, since $r$ and $z$ are unchanged; it is jointly continuous for the same reason. Thus $H_u$ is an ambient isotopy from the identity. It fixes the two vertical planar rays, hence fixes $C$ pointwise, and preserves $A$ because $z$ is unchanged. It is the identity outside the compact cylinder $\{r\le1/2,|z|\le1/2\}$. The image of $P$ is locally flat because it is the image of a standard hyperplane under a homeomorphism. [step 1.1, construct]

3.1 On the positive $x$ axis with $z=0$ and $0<r<1/4$, the image has coordinates $X(r)=r\cos a(r,0)$ and $T(r)=r\sin a(r,0)$. Here $a(r,0)=\pi/4+(\pi/8)\sin(1/r)$ and $X'(r)=\cos a(r,0)+(\pi/(8r))\sin a(r,0)\cos(1/r)$. At $r_n=(2\pi n)^{-1}$ the derivative is positive. At $s_n=((2n+1)\pi)^{-1}$ it is negative for sufficiently large $n$. Both sequences approach zero, so $X$ is not monotone on any interval $(0,\epsilon)$. A continuous injective real-valued function on an interval is strictly monotone, by [F1]: for $p<q<r$, injectivity and [F1] force the value at $q$ to lie strictly between the other two values, and this betweenness property fixes the same orientation on every triple. Thus the projection $\pi(x,t,z)=(x,z)$ is noninjective on points of $H_1(P)$ arbitrarily close to the origin. It cannot represent that hypersurface as a graph there. Restricting $P$ to any small centered closed three-ball gives the same nongraph phenomenon for a compact locally flat transverse three-disk. [F1, step 1.1, step 2.1, construct, algebra] ∎

## Remarks

The chart is even joined to the identity by a compactly supported isotopy preserving both the surface and the core. Nevertheless graph truncation fails in the indicated coordinates. The example does not rule out a separate normalization isotopy; it shows that such an isotopy needs an argument.

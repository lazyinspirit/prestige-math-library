---
page: punctured-disks-mapping-classes-and-point-pushing-examples
title: "Punctured Disks, Mapping Classes, and Point Pushing — Examples"
status: draft
requires: [punctured-disks-mapping-classes-and-point-pushing]
items: []
examples: [ex-a-half-twist-as-a-punctured-disk-homeomorphism,
           ex-point-pushing-one-puncture-around-another,
           cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group,
           cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group]
---

These four entries make the companion page's abstractions concrete: two
explicit computations with the same base configuration on the disk, and two
counterexamples delimiting the boundary and puncture conventions in the
definitions.

The first example builds the standard positive half twist as an actual
homeomorphism of the disk. For adjacent punctures $q_i,q_{i+1}$ with midpoint
$m_i$, an angular half rotation on the smaller disk about $m_i$ containing the
two points, tapered smoothly to the identity across the outer collar of the
support disk $U_i$ and run over time $t\mapsto\pi t$ scaled to the unit
interval, is a boundary-fixed orientation-preserving homeomorphism; its two
marked points trace anticlockwise semicircles exchanging $q_i$ and $q_{i+1}$,
the resulting point motion is braid-isotopic to the published diamond half
twist, and under the braid–mapping-class identification of the companion page
the class is $[H_i]=\Psi([\sigma_i])$, the standard positive generator. The
computation is choice-free apart from the identification it consumes, and it
uses the explicit formulas for $\sigma_i$ so that the sign convention is the
published one.

The second example computes a point push. With $n=2$, $h=\frac1{12}$,
$q_1=-\frac1{12}$, $q_2=\frac1{12}$, the clockwise loop
$\gamma(t)=q_1+2h\,u(t)$ with $u(t)=\cos2\pi t-i\sin2\pi t$ is a based loop of
the once-punctured disk $Y_2=\operatorname{int}D^2\setminus\{q_1\}$ at $q_2$,
and its ordered lift is homotoped rel endpoints to the clockwise rigid
rotation loop $[u(t)q_1,u(t)q_2]$ by an explicit linear interpolation of the
two coordinates. A second explicit interpolation, together with a sign
analysis of second coordinates, identifies the inverse square of the raw
slice of $\sigma_1$ with that rigid rotation loop, so that the inverse-endpoint
boundary map sends it to $\Psi([\sigma_1]^2)=[H_1]^2$: clockwise pushing
produces the *positive* pure two-strand full twist, the square of the standard
half twist, and pushing counterclockwise produces its inverse. No injectivity
of $\operatorname{Push}_2$ is used or asserted.

The two counterexamples isolate the conventions that are easy to misread. The
clockwise rigid $2\pi$ rotation gives a nontrivial loop of unordered two-point
configurations: the invariant $u(\{x,y\})=((x-y)/|x-y|)^2$ sends it to a loop
of degree $-2$. A boundary-fixed lift of this loop has an inverse endpoint
$f$ representing the positive full twist, while an isotopy that preserves the
boundary only *setwise* joins $f$ to the identity. Thus its boundary-fixed
mapping class becomes trivial when that boundary condition is relaxed. And
setwise preservation of $Q_n$ does not define the pure subgroup:
the supported positive half twist preserves the marked set but exchanges
$q_i$ and $q_{i+1}$, and no isotopy through setwise-preserving homeomorphisms
can change that discrete permutation, so it is a nonpure class for $n\ge2$.
Both counterexamples consume the companion page's identification and therefore
state the Axiom of Choice where they invoke it.

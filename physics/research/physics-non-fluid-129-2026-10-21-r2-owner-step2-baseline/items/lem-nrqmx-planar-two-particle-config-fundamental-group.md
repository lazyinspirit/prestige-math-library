---
id: lem-nrqmx-planar-two-particle-config-fundamental-group
kind: lemma
domain: mathematics
library: mathematics
title: "The planar two-point configuration space retracts to the quotient circle"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
deps:
  - def-nrqmx-planar-two-particle-configuration-space
  - def-based-loops-and-fundamental-group
  - thm-induced-fundamental-group-map-functoriality
  - thm-fundamental-group-of-the-circle
  - def-circle-as-real-line-mod-integers
  - thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
  - thm-quotient-universal-property
dependency_roles:
  def-nrqmx-planar-two-particle-configuration-space: mathematical-premise
  def-based-loops-and-fundamental-group: mathematical-premise
  thm-induced-fundamental-group-map-functoriality: mathematical-premise
  thm-fundamental-group-of-the-circle: mathematical-premise
  def-circle-as-real-line-mod-integers: mathematical-premise
  thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle: mathematical-premise
  thm-quotient-universal-property: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation, §II.A.1"
      url: "https://arxiv.org/pdf/0707.1889"
---

## Statement

Let $q_0:=\{(1,0),(-1,0)\}\in C_2(\mathbb R^2)$. There is a pointed
homeomorphism
$$\bigl(C_2(\mathbb R^2),q_0\bigr)\cong \bigl(\mathbb R^2\times(0,\infty)\times\mathbb R/\mathbb Z, (0,1,[0])\bigr),$$
and
$$\pi_1(C_2(\mathbb R^2),q_0)\cong(\mathbb Z,+).$$
Under the isomorphism specified in the proof, the counterclockwise exchange
loop
$$\gamma(t):=\{(\cos\pi t,\sin\pi t),(-\cos\pi t,-\sin\pi t)\},\qquad 0\leq t\leq1,$$
is a positive generator. The loop in which the relative direction makes one
full counterclockwise turn is $[\gamma]^2$, so it represents twice the
generator.

## Statement references

[[def-nrqmx-planar-two-particle-configuration-space]]

[[thm-fundamental-group-of-the-circle]]

## Facts & Assumptions

**Given:** The quotient-topology space $C_2(\mathbb R^2)$ of
[[def-nrqmx-planar-two-particle-configuration-space]] and basepoint $q_0$.

[F1] [[def-nrqmx-planar-two-particle-configuration-space]]: ordered pairs of
distinct points have the subspace topology from Euclidean $\mathbb R^4$;
unordered pairs are their transposition quotient with quotient topology.

[F2] [[def-based-loops-and-fundamental-group]]: $\pi_1(X,x_0)$ consists of
based loops modulo endpoint-fixed path homotopy, with concatenation traversing
the first loop and then the second.

[F3] [[thm-induced-fundamental-group-map-functoriality]]: pointed continuous
maps induce homomorphisms on $\pi_1$; their induced maps respect composition,
and based-homotopic pointed maps induce the same homomorphism.

[F4] [[thm-fundamental-group-of-the-circle]]: for the quotient circle
$\mathbb R/\mathbb Z$ based at $[0]$, $\pi_1(\mathbb R/\mathbb Z,[0])\cong\mathbb Z$,
with inverse $n\mapsto[\omega_n]$, where $\omega_n(t)=[nt]$.

[F5] [[def-circle-as-real-line-mod-integers]],
[[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]: the map
$[t]\mapsto(\cos 2\pi t,\sin 2\pi t)$ is a homeomorphism from
$\mathbb R/\mathbb Z$ to the Euclidean unit circle.

[F6] [[thm-quotient-universal-property]]: a continuous map constant on the
fibres of a quotient map factors uniquely as a continuous map out of the
quotient.

## Proof

1.1 For an ordered pair put $c=(x+y)/2$ and $z=(x-y)/2$. This is an
invertible linear coordinate change, with inverse $(c,z)\mapsto(c+z,c-z)$;
the collision-free condition is $z\ne0$. In polar coordinates write
$z=ru$ with $r=\|z\|>0$ and $u\in S^1$. These formulas and their inverses
are continuous, so they give a homeomorphism
$F_2(\mathbb R^2)\cong\mathbb R^2\times(0,\infty)\times S^1$. Transposition
fixes $c,r$ and sends $u$ to $-u$. If $A:=S^1/(u\sim-u)$ has quotient
topology, the map $(c,r,u)\mapsto(c,r,[u])$ is an open quotient map: the
circle quotient is open because the saturation of an open set is its union
with its antipodal image, and products of open rectangles show the same for
the product map. Its fibers are exactly the transposition orbits. Thus it
induces a homeomorphism
$$C_2(\mathbb R^2)\cong X:=\mathbb R^2\times(0,\infty)\times A.$$
[F1, construct, algebra]

2.1 Let $\eta:\mathbb R/\mathbb Z\to S^1$ be the homeomorphism
$\eta([t])=(\cos2\pi t,\sin2\pi t)$ from [F5]. The antipodal map on $S^1$
corresponds under $\eta$ to $[t]\mapsto[t+1/2]$. The continuous map
$D_2:\mathbb R/\mathbb Z\to\mathbb R/\mathbb Z$, $D_2([t]):=[2t]$,
is well-defined and continuous by [F6] applied to $t\mapsto[2t]$ on
$\mathbb R$; its fibres are exactly the pairs $[t],[t+1/2]$. Hence
$\psi:A\to\mathbb R/\mathbb Z$, $\psi([\eta([t])]):=[2t]$, is well-defined
and continuous by the quotient topology. Its inverse is
$[s]\mapsto[\eta([s/2])]$; changing $s$ by an integer changes $s/2$ by a
half-integer, which is the same class in $A$. This inverse is continuous by
[F6] applied to the continuous map $s\mapsto[\eta([s/2])]$ on $\mathbb R$;
the two formulas compose to the identity, so $\psi$ is a homeomorphism.
Under the homeomorphism of step 1.1, $q_0$ is
$(0,1,[(1,0)])$, which $\psi$ sends to $[0]$. [F1, F5, F6, construct, step 1.1]

3.1 On $X$ define $r(c,\rho,a):=\psi(a)$ and
$i([t]):=(0,1,\psi^{-1}([t]))$. These maps are continuous, preserve the
specified basepoints, and $r\circ i$ is the identity. The maps
$$H_s(c,\rho,a):=((1-s)c,(1-s)\rho+s,a),\qquad 0\leq s\leq1,$$
are a continuous based homotopy from $\operatorname{id}_X$ to $i\circ r$:
the radius is positive since $(1-s)\rho+s>0$, and the basepoint
$(0,1,[(1,0)])$ is fixed for every $s$. [step 1.1, step 2.1, construct,
algebra]

4.1 By [F3], $(r\circ i)_*=r_*i_*=\operatorname{id}$ and the based homotopy
in step 3.1 gives $(i\circ r)_*=i_*r_*=\operatorname{id}$ on the based-loop
classes of [F2]. Thus $r_*$ and $i_*$ are inverse isomorphisms. The pointed
homeomorphism of step 1.1 transports this isomorphism back to
$C_2(\mathbb R^2)$; applying [F4] gives
$\pi_1(C_2(\mathbb R^2),q_0)\cong\mathbb Z$. [F2, F3, F4, step 1.1, step 3.1]

5.1 In the coordinates of step 1.1, $\gamma$ keeps $c=0$ and $r=1$ and has
$u(t)=(\cos\pi t,\sin\pi t)$. Its image under $r$ is $[t]=\omega_1(t)$,
which is the positive generator by [F4]. Replacing $\pi t$ by $2\pi t$
describes a full turn of the relative direction; its image is $[2t]=\omega_2(t)$,
so its class is twice $[\gamma]$. This identifies exchange and winding
orientation without using a diagram. [F4, step 1.1, step 4.1, algebra] ∎

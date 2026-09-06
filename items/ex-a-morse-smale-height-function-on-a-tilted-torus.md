---
id: ex-a-morse-smale-height-function-on-a-tilted-torus
kind: example
title: "A Morse--Smale height function on a tilted torus"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morse-smale-pair, prop-parametrized-morse-trajectory-space-is-a-manifold, lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories]
proof_strategy: direct
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, §2.2.d"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
    - title: "Nancy Eagles, Morse Homology, §1.1, torus example"
      url: "https://math.berkeley.edu/~nm.eagles/notes/Morse_Homology_Notes-NME.pdf"
---

## Example

Start with $E(u,v)=((2+\cos v)\cos u,\sin v,(2+\cos v)\sin u)$, with angles modulo $2\pi$. Rotate this embedded torus so that its new vertical coordinate is
$$ f(u,v)=\frac{(2+\cos v)\sin u+\varepsilon\sin v}{\sqrt{1+\varepsilon^2}},\qquad 0<\varepsilon<1/2. $$
For the induced metric $g=(2+\cos v)^2du^2+dv^2$, the pair $(f,g)$ is Morse--Smale. It has one maximum, one minimum, and two saddles. Its maximum-to-minimum trajectory space modulo time is one-dimensional, whereas spaces with index drop one are zero-dimensional.

## Facts & Assumptions

**Given:** The rotated embedded torus, $f,g$, and $\varepsilon$ above. Write $A=2+\cos v$, $S=\sqrt{1+\varepsilon^2}$, and $\phi=\arctan\varepsilon$.

[F1] The metric Morse--Smale condition is transversality of all backward-/forward-limit manifolds for the complete negative gradient ([[def-morse-smale-pair]]).

[F2] A transverse stable--unstable intersection has dimension equal to the index drop ([[prop-parametrized-morse-trajectory-space-is-a-manifold]]).

[F3] A regular intermediate level represents each time-translation class exactly once ([[lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories]]).

## Verification

**Proof technique:** direct.

1.1 The negative-gradient equations are $\dot u=-\cos u/(SA)$ and $\dot v=(\sin v\sin u-\varepsilon\cos v)/S$. The field is complete on this compact torus. Critical points require $u=\pi/2$ or $3\pi/2$. For $u=\pi/2$ they have $v=\phi,\pi+\phi$; for $u=3\pi/2$ they have $v=2\pi-\phi,\pi-\phi$. The mixed Hessian entry is zero, the $uu$ entry is $-A\sin u/S$, and the $vv$ entry is $-(\cos v\sin u+\varepsilon\sin v)/S$, which equals $\pm1$ at these points. Thus all four are nondegenerate: a maximum, an upper saddle $a=(\pi/2,\pi+\phi)$, a minimum, and a lower saddle $b=(3\pi/2,\pi-\phi)$, respectively. Their saddle values are $(2-S)/S$ and $-(2-S)/S$. [given, algebra]

2.1 The closed strip $\pi\leq v\leq2\pi$ is forward invariant: on its lower boundary $\dot v=\varepsilon/S>0$, and on its upper boundary $\dot v=-\varepsilon/S<0$. Since $a$ lies in its interior, every orbit with backward limit $a$ stays in this strip, and cannot have forward limit $b$, which is outside it. The reverse connection is excluded by strict decrease of $f$. Thus there are no connections between the distinct saddles. [step 1.1, algebra]

3.1 On a surface all other nonempty intersections are automatically transverse: an unstable manifold of a maximum or stable manifold of a minimum is open; the remaining extremal stable/unstable manifolds are singletons and meet only their own complementary open manifold. At each saddle its stable and unstable tangent lines at that saddle are the complementary negative-gradient eigenspaces. A nonconstant orbit cannot have identical endpoints because $f$ strictly decreases. Together with step 2.1 these observations cover every pair and prove $(f,g)$ Morse--Smale. [F1, step 1.1, step 2.1]

4.1 A connecting trajectory has $df(X)<0$, so its regular-level slice is a transverse hypersurface in the parametrized intersection. By [F2] and [F3] the space modulo time has dimension $\lambda(p)-\lambda(q)-1$. This is zero for index drop one and one for the maximum-to-minimum pair. In particular, the latter slice is not a finite set: the open basins of the maximum and minimum overlap, since their complements are the finitely many saddle separatrices and critical points. [F2, F3, step 3.1, algebra] ∎

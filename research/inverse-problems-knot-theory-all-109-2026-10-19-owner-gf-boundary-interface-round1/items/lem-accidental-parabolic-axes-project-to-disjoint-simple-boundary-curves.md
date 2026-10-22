---
id: lem-accidental-parabolic-axes-project-to-disjoint-simple-boundary-curves
kind: lemma
title: Accidental parabolic axes project to disjoint simple boundary curves
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-jordan-schoenflies-extension-for-plane-curves
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - lem-local-thin-components-of-torsion-free-kleinian-quotients
justified_by: []
proof_strategy: direct
axiom_use: AC is inherited from Jordan separation and the discrete-group suppliers. The compactification of each axis, intersection obstruction and primitive-axis quotient are explicit.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Section3.1, printed434–436, boundary curves homotopic to the paring and the absence of accidental parabolics. The simple-representative argument is supplied locally below; this source passage is context, not an imported proof.
---

## Statement

Assume AC. Let $H\le\mathrm{PSL}_2(\mathbb C)$ be discrete and torsion-free, preserve a domain $D$ on which it acts freely and properly discontinuously, and let $\phi:\mathbb D\to D$ be a supplied conformal equivalence. Write $H_0=\phi^{-1}H\phi$ and $X=D/H$. An accidental parabolic means an element of $H$ that is parabolic on the sphere but whose element of $H_0$ is hyperbolic on the disk.

For every accidental parabolic, the primitive root of its disk element projects its hyperbolic axis to an embedded closed geodesic of $X$. The given element is a nonzero power of that simple closed-curve class. The distinct primitive geodesics so obtained are pairwise disjoint.

If in addition $X$ is finite conformal type with its complete finite-area disk metric, so that uniformizing parabolics are precisely the nonzero puncture powers, the following exact simple-curve condition excludes ALL accidental parabolics: every simple closed curve whose ambient monodromy is parabolic is freely homotopic inside $X$ to a puncture power. This condition is a hypothesis here; neither its transfer from a three-dimensional marking nor geometric finiteness of $H$ or a quasidisk boundary is asserted.

## Facts & Assumptions

**Given:** The actual group action, invariant domain and conformal uniformizer. For the last implication the stated finite-type metric and puncture classification are supplied.

[F1] A sphere Jordan curve separates the sphere into two domains. A second Jordan curve cannot meet it in just one transverse point: after deleting that intersection the second curve is connected and lies in the complement, while its two local branches lie on different sides. This is the Jordan separation consequence of the full extension theorem [[lem-jordan-schoenflies-extension-for-plane-curves]].

[F2] Disk automorphisms are Möbius by [[thm-disc-automorphisms-are-rotated-blaschke-factors]]. In a discrete torsion-free disk group the nonidentity nonparabolic elements are hyperbolic: moving fixed points to zero and infinity gives positive real dilations. Their axes are the unique geodesics joining those fixed points. Two distinct such geodesics meet at most once, and an intersection is transverse.

[F3] The full stabilizer of a parabolic fixed point in a discrete torsion-free Möbius group consists of translations after that point is moved to infinity. Hence it is abelian. A nontrivial root of a parabolic is parabolic with the same fixed point. The stabilizer of a hyperbolic axis in a discrete torsion-free orientation-preserving disk group is infinite cyclic: endpoint-preserving elements are translations along the axis, discreteness makes their signed lengths a discrete subgroup of the real line, and an endpoint swap would be an order-two elliptic. These normal forms and elementary-group restrictions are in [[lem-local-thin-components-of-torsion-free-kleinian-quotients]].

[A1] Full choice is [[def-axiom-of-choice]].

## Proof

1.1 Conjugation through $\phi$ is faithful, and its disk Möbius image is discrete and torsion-free. For discreteness, convergence of distinct conjugated maps to the identity at three interior points would imply convergence of their images in $H$ at the corresponding three points of $D$; the explicit fractional-linear triple formula would then contradict discreteness of $H$. The disk action is by orientation-preserving hyperbolic isometries. By [F3] the stabilizer of the axis of an accidental disk element has a primitive generator $a_0$, and that disk element is $a_0^m$ for some nonzero integer $m$. Its image $a$ is parabolic with the same fixed point as the original element, since $a^m$ is parabolic. It therefore suffices to analyze axes of these primitive generators. [F2, F3, given, construct, algebra]

2.1 Let $L$ be such an axis and $p$ the fixed point of $a$. Normalize $p=\infty$ and $a(z)=z+\ell$ with $\ell\ne0$. Parametrize $L$ by signed length so that $a_0$ adds its positive translation length $t_0$, reversing its generator if necessary. The image under $\phi$ of one compact axis segment of length $t_0$ is a bounded compact arc in $\mathbb C$: infinity is not in $D$, since the action is free there. Its translates by $n\ell$, $n\in\mathbb Z$, exhaust $\phi(L)$, by equivariance. They tend uniformly to infinity as $n\to+\infty$ and $n\to-\infty$. Thus $\phi|_L$ extends continuously to the one-point compactification $L\cup\{\infty_L\}$ by sending its added point to $p$. It is injective, since $\phi$ is injective and $p\notin D$. A continuous injection from a compact circle into the Hausdorff sphere is a homeomorphism onto its image. Consequently $J_L=\phi(L)\cup\{p\}$ is a Jordan curve. No extension of $\phi$ to the entire disk boundary was used. [F2, F3, step 1.1, construct, algebra]

3.1 Consider any two axes $L_1,L_2$ of accidental disk elements, with sphere fixed points $p_1,p_2$. If $p_1=p_2$, their images commute by [F3], hence their disk elements commute. A commuting hyperbolic disk map preserves each fixed point of the other, so their axes coincide. If $p_1\ne p_2$ and the axes intersect, their distinct geodesics have exactly one transverse intersection by [F2]. The Jordan curves $J_{L_1}$ and $J_{L_2}$ from step2.1 then have exactly that one intersection: their finite arcs lie in $D$, their added points lie outside $D$ and are distinct, and $\phi$ is injective and conformal. This contradicts [F1]. Hence two such axes either coincide or are disjoint. This includes every translate $h_0L_1$, since its element is conjugate to an accidental parabolic and its sphere fixed point is $h p_1$. [F1, F2, F3, step 2.1, construct, contradiction]

4.1 The projection of $L$ to $X$ factors through the compact circle $L/\langle a_0\rangle$. If two points on $L$ have the same projection, some $h_0\in H_0$ maps one to the other, so $L$ and $h_0L$ meet. By step3.1 they coincide. By the primitive axis-stabilizer description [F3], $h_0\in\langle a_0\rangle$. The induced map from that circle to $X$ is therefore injective, hence is an embedding because $X$ is Hausdorff. It is locally a geodesic under the quotient metric. The original class is its $m$th power as in step1.1. If two of these embedded geodesics intersect, lift the intersection and their arcs to the disk; step3.1 forces their axes to coincide, so they are the same primitive geodesic. Distinct ones are disjoint. [F2, F3, step 1.1, step 3.1, construct, algebra]

5.1 Under the final supplied puncture classification, suppose an accidental parabolic exists. Step4.1 gives a simple closed geodesic with primitive disk element $a_0$ hyperbolic and ambient image $a$ parabolic. The asserted simple-curve condition makes that class freely homotopic inside $X$ to a puncture power. Such powers are parabolic in $H_0$ by the supplied classification; conjugacy and nonzero powers preserve the parabolic type. This contradicts the hyperbolic type of $a_0$. Therefore no accidental parabolic exists. The argument applies the simple-curve condition to an actual embedded representative, rather than silently interpreting that condition as applying to arbitrary nonsimple words. [given, step 1.1, step 4.1, contradiction] ∎

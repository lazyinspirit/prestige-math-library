---
id: def-complex-projective-bundle-and-tautological-complex-line
kind: definition
title: Complex projective bundle and tautological complex line
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-topological-vector-bundle, thm-vector-bundles-glued-from-transition-cocycles, def-euler-class-by-zero-section-pullback-of-the-thom-class, lem-complex-orientation-of-underlying-real-bundles, def-stiefel-space-grassmannian-and-tautological-bundle, def-projective-space-points, def-axiom-of-choice]
axiom_strength: "ZF + AC; inherited from the bundle and Thom suppliers."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Projective bundles and the class x, printed pp.77-82"
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lectures 34-35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Projective-bundle construction and fiber generator, printed pp.123-132"
---

## Definition

Assume AC. Let $E\to B$ be a numerable complex vector bundle of rank $n\geq1$
over a CW complex $B$, with zero section $0_B$ and total space $E$. Its
**projective bundle** is the quotient
$$P(E):=(E\setminus 0_B(B))/\mathbb C^\times,$$
where $\lambda\in\mathbb C^\times$ acts fiberwise by $v\mapsto\lambda v$; write
$[\ell]$ for the class of a nonzero vector. The projection
$p:P(E)\to B$, $p([v])=\pi(v)$, is well defined because scaling preserves the
base point.

$P(E)$ is a fiber bundle over $B$ with fiber $\mathbb{CP}^{n-1}$: over a
complex linear chart $U\times\mathbb C^n$ of $E$ the quotient is
$U\times\mathbb{CP}^{n-1}$, and the transition maps of $E$ induce the
homeomorphisms $\mathbb{CP}^{n-1}\to\mathbb{CP}^{n-1}$ given by projectivized
complex-linear isomorphisms, so
[[thm-vector-bundles-glued-from-transition-cocycles]] applies to the
projectivized cocycle. Under the identification
$\mathbb{CP}^{n-1}=\operatorname{Gr}_1(\mathbb C^n)$ supplied by
[[def-stiefel-space-grassmannian-and-tautological-bundle]] and
[[def-projective-space-points]], a point of the fiber over $b\in B$ is a
complex line $\ell\subseteq E_b$.

The **tautological complex line** $\gamma_E\subseteq p^*E$ is the subbundle
whose fiber over $\ell\subseteq E_b$ is $\ell$ itself, with the complex
structure induced from $E$; its transition functions are the projectivized
linear maps restricted to the selected line, so it is a complex line bundle
over $P(E)$.

The underlying real bundle $(\gamma_E)_{\mathbb R}$ carries the complex
orientation of [[lem-complex-orientation-of-underlying-real-bundles]]; it is
numerable, so its Euler class in the sense of
[[def-euler-class-by-zero-section-pullback-of-the-thom-class]] is defined. We
put
$$x=x_E:=e\bigl((\gamma_E)_{\mathbb R}\bigr)\in H^2(P(E);\mathbb Z).$$
Defining $x$ by the Euler class of the tautological line avoids any circular use
of Chern classes, which are introduced only afterwards on this page. For the
zero bundle of rank $0$ we set $P(0_B):=\varnothing$, and $x$ is not defined
there; for a line bundle $L$ the map $P(L)\to B$ is a homeomorphism over $B$
and $\gamma_L$ corresponds to $L$ under it.

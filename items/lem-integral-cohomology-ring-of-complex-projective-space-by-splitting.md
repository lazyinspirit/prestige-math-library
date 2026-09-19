---
id: lem-integral-cohomology-ring-of-complex-projective-space-by-splitting
kind: lemma
title: Integral cohomology ring of complex projective space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complex-projective-bundle-and-tautological-complex-line, def-stiefel-space-grassmannian-and-tautological-bundle, thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle, thm-naturality-orientation-sign-and-whitney-product-for-euler-classes, cor-homology-of-spheres, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, def-singular-cohomology-with-coefficients, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the Gysin and coefficient suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "The Gysin computation of the ring of CP^n, printed pp.77-82"
---

## Statement

Assume AC. For every $N\geq0$ identify
$\mathbb{CP}^N=\operatorname{Gr}_1(\mathbb C^{N+1})$, the space of complex
lines in $\mathbb C^{N+1}$, and let $\gamma$ be the tautological complex line
with $x=e(\gamma_{\mathbb R})\in H^2(\mathbb{CP}^N;\mathbb Z)$ its Euler class
in the complex orientation. Then, as a graded ring,
$$H^*(\mathbb{CP}^N;\mathbb Z)=\mathbb Z[x]/(x^{N+1}),$$
the class $x$ generating each even degree and the odd groups vanishing; for
$0\leq m\leq N$ the standard inclusion
$\mathbb{CP}^m\hookrightarrow\mathbb{CP}^N$, induced by
$\mathbb C^{m+1}\subseteq\mathbb C^{N+1}$, pulls $x$ back to $x$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the Gysin and coefficient suppliers ([[def-axiom-of-choice]]).

[F1] For an algebraically closed field $k$ one has $\mathbf P^n_k=(k^{n+1}\setminus\{0\})/k^\times$ with classes $[a_0:\cdots:a_n]$; for $k=\mathbb C$ this is the space of complex lines in $\mathbb C^{n+1}$ with its standard topology.

[F2] $\operatorname{Gr}_1(\mathbb C^{N+1})$ is the space of complex lines with the quotient topology, its tautological bundle is $\gamma$, and the standard inclusions $\mathbb C^{m+1}\subseteq\mathbb C^{N+1}$ induce compatible inclusions of Grassmannians with compatible tautological bundles ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F3] The projective bundle and its tautological line: $P(E)$ is the quotient of the nonzero vectors by fiberwise scaling, its tautological line has fiber the represented line, and $x=e((\gamma_E)_{\mathbb R})$ in the complex orientation, the class being natural under pullback ([[def-complex-projective-bundle-and-tautological-complex-line]], [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F4] The unit sphere bundle of a rank-two oriented real bundle: for the complex line $\gamma$ the sphere bundle $S(\gamma_{\mathbb R})$ consists of the pairs $(\ell,v)$ with $\ell\in\mathbb{CP}^N$ and $v\in\ell$ of unit length, so the map $(\ell,v)\mapsto v$ is a homeomorphism onto the unit sphere $S^{2N+1}\subseteq\mathbb C^{N+1}$ ([[def-complex-projective-bundle-and-tautological-complex-line]]).

[F5] For an $R$-oriented numerable rank-2 bundle there is a natural Gysin long exact sequence $\cdots\to H^{i-2}(B)\xrightarrow{\ \smile e}H^i(B)\xrightarrow{p^*}H^i(S(\xi))\xrightarrow{\partial}H^{i-1}(B)\xrightarrow{\ \smile e}H^{i+1}(B)\to\cdots$ ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[F6] The homology of spheres is $H_0(S^m;\mathbb Z)=\mathbb Z=H_m(S^m;\mathbb Z)$ for $m\geq1$ and zero otherwise, with supplied positive generators ([[cor-homology-of-spheres]]).

[F7] For a free chain complex over the PID $\mathbb Z$ and coefficient group $G$, the universal-coefficient sequence is $0\to\operatorname{Ext}^1(H_{n-1},G)\to H^n\to\operatorname{Hom}(H_n,G)\to0$; also $H^0$ of a path-connected space is $\mathbb Z$ ([[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]], [[def-singular-cohomology-with-coefficients]]).

## Proof

**Proof technique:** direct.

**Given:** AC, $N\geq0$, and the identification $\mathbb{CP}^N=\operatorname{Gr}_1(\mathbb C^{N+1})$.

1.1 Identification: by [F1] and [F2] the projective space of $\mathbb C^{N+1}$ is the space of complex lines with the tautological bundle $\gamma$, and by [F3] the projective bundle of the trivial rank-$(N+1)$ bundle over a point is the same space with the same tautological line; hence $x=e(\gamma_{\mathbb R})$ is the page's class for $\mathbb{CP}^N$. [F1, F2, F3]

1.2 The sphere bundle: by [F4] the pair $(\ell,v)$ with $v$ a unit vector in the line $\ell$ determines $v$ and is determined by it, so $S(\gamma_{\mathbb R})\cong S^{2N+1}$; by [F6] and [F7] its integral cohomology is $\mathbb Z$ in degrees $0$ and $2N+1$ and vanishes in all other positive degrees. [F4, F6, F7]

2.1 The Gysin sequence [F5] of the rank-two oriented bundle $\gamma_{\mathbb R}$ over $\mathbb{CP}^N$ reads $\cdots\to H^{i-2}(\mathbb{CP}^N)\xrightarrow{\smile x}H^i(\mathbb{CP}^N)\xrightarrow{p^*}H^i(S^{2N+1})\xrightarrow{\partial}H^{i-1}(\mathbb{CP}^N)\to\cdots$. Using step 1.2 and exactness, ascending induction on $i$ gives: $H^0=\mathbb Z$, $H^1=0$, and for $2\leq i\leq 2N$ the map $\smile x:H^{i-2}(\mathbb{CP}^N)\to H^i(\mathbb{CP}^N)$ is an isomorphism; at $i=2N+1$ and $i=2N+2$ the same exactness gives $H^{2N+1}=H^{2N+2}=0$ because $H^{2N+2}(\mathbb{CP}^N)$ vanishes by the same induction. Hence $H^{2k}(\mathbb{CP}^N;\mathbb Z)=\mathbb Z\cdot x^k$ for $0\leq k\leq N$ and all odd groups vanish. [F5, step 1.2, algebra]

2.2 Inclusion compatibility: the inclusion $\mathbb C^{m+1}\subseteq\mathbb C^{N+1}$ carries the tautological line of $\mathbb{CP}^m$ to the restriction of the tautological line of $\mathbb{CP}^N$ by [F2], so naturality of the Euler class [F3] gives $x_m=\iota^*x_N$. [F2, F3, step 1.1]

3.1 Ring structure: by step 2.1 the group $H^{2k}$ is the infinite cyclic group generated by $x^k$, and the product satisfies $x^a\cdot x^b=x^{a+b}$; since every element is a sum of multiples of the $x^k$, the graded ring is $\mathbb Z[x]/(x^{N+1})$. With step 2.2 this is the assertion. [step 2.1, step 2.2]

4.1 Boundary cases. For $N=0$ the projective space is a point, $x=0$ and the ring is $\mathbb Z[x]/(x)=\mathbb Z$, as required; the sphere $S^1$ has the stated cohomology by step 1.2. For $N=1$ the computation gives $H^*(S^2)=\mathbb Z[x]/(x^2)$, the standard result. The coefficient ring $\mathbb Z$ is nonzero and the Gysin sequence is used only in degrees $\leq 2N+2$, all of which lie in the range controlled by step 1.2. AC enters only through [A1]. [A1, F5, step 1.2, step 2.1] ∎

## Source notes

Hatcher, section 3.1, printed pp. 77-82, obtains the ring of $\mathbb{CP}^N$ from the Gysin sequence of the circle bundle $S^{2N+1}\to\mathbb{CP}^N$; the proof above follows that route, using the sphere cohomology from the universal-coefficient theorem and avoiding any dependence on the projective bundle theorem or on an examples-page computation.

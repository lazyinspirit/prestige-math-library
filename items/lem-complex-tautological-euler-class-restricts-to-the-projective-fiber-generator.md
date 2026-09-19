---
id: lem-complex-tautological-euler-class-restricts-to-the-projective-fiber-generator
kind: lemma
title: The complex tautological Euler class restricts to the projective-fiber generator
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complex-projective-bundle-and-tautological-complex-line, lem-complex-orientation-of-underlying-real-bundles, thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle, thm-stable-stiefel-space-is-contractible, def-oriented-grassmannian-and-tautological-oriented-bundle, def-stiefel-space-grassmannian-and-tautological-bundle, lem-integral-cohomology-ring-of-complex-projective-space-by-splitting, lem-cohomology-ring-of-infinite-complex-projective-space, thm-naturality-orientation-sign-and-whitney-product-for-euler-classes, def-schubert-cells-in-real-and-complex-grassmannians, thm-schubert-cells-give-the-stable-grassmannian-cw-structure, thm-cellular-cochains-compute-cohomology-with-local-coefficients, def-singular-cohomology-with-coefficients, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the oriented bundle classification and the Euler-class supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Projective-bundle generator and splitting principle, printed pp.77-82"
    - title: "Miller, MIT 18.906 Algebraic Topology II, Lectures 34-35"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Universal oriented two-plane and projective fiber generator, printed pp.123-132"
---

## Statement

Assume AC. Let $E\to B$ be a numerable complex rank-$n$ bundle over a CW
complex with $n\geq1$, let $P(E)$ be its projective bundle with tautological
line $\gamma_E$, and let $x=x_E=e((\gamma_E)_{\mathbb R})\in H^2(P(E);\mathbb Z)$
be the class of
[[def-complex-projective-bundle-and-tautological-complex-line]]. For every
$b\in B$ let $j_b:\mathbb{CP}^{n-1}=P(E_b)\hookrightarrow P(E)$ be the fiber
inclusion.

For $n\geq2$, $j_b^*x$ is a generator of $H^2(\mathbb{CP}^{n-1};\mathbb Z)\cong
\mathbb Z$, namely $\pm x_{\mathrm{taut}}$ for the class
$x_{\mathrm{taut}}=e(\gamma_{\mathbb R})$ of the tautological line over
$\mathbb{CP}^{n-1}$ normalized in
[[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]];
consequently
$1,j_b^*x,\dots,(j_b^*x)^{n-1}$ is a $\mathbb Z$-basis of
$H^*(\mathbb{CP}^{n-1};\mathbb Z)$, and the coefficient reductions of these
classes are an $\mathbb F_p$-basis of $H^*(\mathbb{CP}^{n-1};\mathbb F_p)$ for
every prime $p$. For $n=1$ the fiber is a point, the basis is just $1$, and
$j_b^*x=0$.

The sign relating $j_b^*x$ to $u$ is a single global sign, fixed once and for all
by the complex orientation of [[lem-complex-orientation-of-underlying-real-bundles]];
no statement below depends on which sign it is.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited by the oriented bundle classification and the Thom/Euler suppliers ([[def-axiom-of-choice]]).

[F1] The tautological line $\gamma_E$ is the subbundle of $p^*E$ with fiber the represented line, and $x=e((\gamma_E)_{\mathbb R})$ under the complex orientation ([[def-complex-projective-bundle-and-tautological-complex-line]]).

[F2] For an $R$-oriented numerable rank-$m$ bundle there is a natural Gysin long exact sequence $\cdots\to H^{k-m}(B;R)\xrightarrow{\ \smile e}H^k(B;R)\xrightarrow{p^*}H^k(S(\xi);R)\xrightarrow{\partial_G}H^{k-m+1}(B;R)\to\cdots$ ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[F3] An oriented real two-plane carries the positive quarter-turn complex structure, and sending it to the complex line it defines identifies the oriented Grassmannian $\operatorname{Gr}_2^+(\mathbb R^\infty)$ with $\operatorname{Gr}_1(\mathbb C^\infty)=\mathbb{CP}^\infty$, carrying the tautological oriented two-plane $\gamma_2^+$ to the tautological complex line $\gamma_{\mathbb C}$ regarded as an oriented real two-plane ([[def-oriented-grassmannian-and-tautological-oriented-bundle]], [[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F4] The stable Stiefel space $V_n(\mathbb F^\infty)$ is contractible for $\mathbb F=\mathbb R$ or $\mathbb C$ and all $n\geq0$ ([[thm-stable-stiefel-space-is-contractible]]).

[F5] The tautological line over $\operatorname{Gr}_1(\mathbb C^m)=\mathbb{CP}^{m-1}$ is the restriction of the universal tautological line over $\operatorname{Gr}_1(\mathbb C^\infty)=\mathbb{CP}^\infty$ along the standard finite-stage inclusion ([[def-stiefel-space-grassmannian-and-tautological-bundle]]).

[F6] $H^*(\mathbb{CP}^m;\mathbb Z)=\mathbb Z[x]/(x^{m+1})$ with $x=e(\gamma_{\mathbb R})$ the class of the tautological line, and the standard inclusions pull $x$ back to $x$ ([[lem-integral-cohomology-ring-of-complex-projective-space-by-splitting]]).

[F7] $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$ with $u=e(\gamma_{\mathbb R})$ of degree two generating each even group ([[lem-cohomology-ring-of-infinite-complex-projective-space]]).

[F8] The Euler class of an $R$-oriented numerable bundle is natural under orientation-preserving pullback and depends only on the oriented isomorphism class ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F9] The Schubert CW structure on $\mathbb{CP}^{n-1}$ has one cell in each even degree $0,2,\dots,2n-2$ and no odd cells, and cellular cochains with any constant coefficient group compute singular cohomology; coefficient reduction is induced cellwise ([[def-schubert-cells-in-real-and-complex-grassmannians]], [[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]], [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[F10] For a path-connected space $X$ the degree-zero singular cohomology $H^0(X;\mathbb Z)$ is $\mathbb Z$ ([[def-singular-cohomology-with-coefficients]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a numerable complex rank-$n$ bundle $E\to B$ with $n\geq1$, a point $b\in B$, and the notation of the statement.

1.1 The unit sphere bundle of the tautological complex line $\gamma_{\mathbb C}$ over $\mathbb{CP}^\infty$ is $S^\infty$: a point of the sphere bundle is a pair $(\ell,v)$ with $\ell\in\mathbb{CP}^\infty$ and $v\in\ell$ of unit length, and the map $(\ell,v)\mapsto v$ is a homeomorphism onto the unit sphere of $\mathbb C^\infty$ because a nonzero vector determines its complex line. By [F3] the sphere bundle of $\gamma_2^+$ is the same space, and by [F4] with $n=1$ it is contractible, so its cohomology vanishes in positive degrees. [F3, F4, algebra]

2.1 Generators from Gysin. Apply the Gysin sequence [F2] to $\gamma_2^+$ over $B\operatorname{SO}(2)$ in low degrees, using the identification of [F3] and $H^2(S^\infty;\mathbb Z)=0$ from step 1.1: exactness at $H^0$ gives $\ker(\smile e)=0$ because $H^{-1}(S^\infty;\mathbb Z)=0$, and exactness at $H^2$ gives $\operatorname{im}(\smile e)=\ker(p^*)=H^2(B\operatorname{SO}(2);\mathbb Z)$ because $H^2(S^\infty;\mathbb Z)=0$. Hence $\smile e:H^0(B\operatorname{SO}(2);\mathbb Z)\to H^2(B\operatorname{SO}(2);\mathbb Z)$ is an isomorphism; since $B\operatorname{SO}(2)\cong\mathbb{CP}^\infty$ is path connected, [F10] makes the source $\mathbb Z$, so $e(\gamma_2^+)$ is a generator of $H^2\cong\mathbb Z$. [F2, F3, F10, step 1.1]

2.2 Restricting to the fiber. The inclusion $j_b$ of the fiber over $b$ classifies the tautological line over $\mathbb{CP}^{n-1}$: its pullback is the sub-line bundle of $P(E_b)\times E_b$ with fiber the represented line, which by [F5] is the pullback of $\gamma_{\mathbb C}$ along the standard inclusion $c:\mathbb{CP}^{n-1}\hookrightarrow\mathbb{CP}^\infty$ (for $n=1$ the fiber is a point and the assertion is empty). Naturality of the Euler class [F8] therefore gives $j_b^*x=e((j_b^*\gamma_E)_{\mathbb R})=c^*e(\gamma_2^+)$, the orientation being the pulled-back complex orientation of [F1]. [F1, F5, F8, step 1.1]

3.1 Generators of the fiber ring. By step 2.1 the class $e(\gamma_2^+)$ generates $H^2(\mathbb{CP}^\infty;\mathbb Z)\cong\mathbb Z$, and by [F7] it is the generator $u$ of the polynomial ring $H^*(\mathbb{CP}^\infty;\mathbb Z)=\mathbb Z[u]$; by [F5] the tautological line over $\mathbb{CP}^{n-1}$ is the restriction of the universal one, and by [F6] the standard inclusion $c$ pulls $x$ back to $x$, so $c^*u$ is the generator $x$ of $H^2(\mathbb{CP}^{n-1};\mathbb Z)$ for $n-1\geq1$. Therefore $j_b^*x=c^*e(\gamma_2^+)=\pm x\neq0$ is a generator. [F5, F6, F7, step 2.1, step 2.2]

4.1 Bases. By [F6] the ring $H^*(\mathbb{CP}^{n-1};\mathbb Z)$ is $\mathbb Z[x]/(x^n)$ with $x$ a generator of the degree-two part; since $j_b^*x=\pm x$ by step 3.1, the classes $1,j_b^*x,\dots,(j_b^*x)^{n-1}$ are the standard $\mathbb Z$-basis up to the fixed signs. [F6, step 3.1]

5.1 Coefficient reductions. By [F9], the cellular cochain complexes with $\mathbb Z$ and $\mathbb F_p$ coefficients have one copy of the coefficient group in each even degree and zero in odd degrees, hence zero differentials. The coefficient-reduction cochain map reduces each integral cell coordinate modulo $p$. Since the classes of step 4.1 are generators in their respective integral degrees, their reductions are the nonzero coordinate generators in the corresponding one-dimensional $\mathbb F_p$ groups. Thus those reductions form an $\mathbb F_p$-basis of $H^*(\mathbb{CP}^{n-1};\mathbb F_p)$. [F9, step 4.1]

6.1 Boundary cases. For $n=1$ the fiber is a single point, so $H^2(\mathbb{CP}^0;\mathbb Z)=0$ by [F6] with $m=0$, the restriction $j_b^*x$ lies in degree two of a point and is $0$, and the asserted basis is just $1$; step 2.2 is vacuous. The empty-base case contributes no fiber, and the zero-bundle convention of [F1] has empty projective bundle and no class $x$. The sign of step 3.1 is fixed by the complex orientation and is not used in steps 4.1 and 5.1, which only use generation. AC is used exactly as inherited by [A1] in the classification and Euler-class supplies. [A1, F1, F6, step 2.2, step 3.1] ∎

## Source notes

The argument follows Hatcher, *Vector Bundles & K-Theory* section 3.1, printed pp. 77-82 (the projective bundle $P(E)$, its fiber $\mathbb{CP}^{n-1}$, and the powers of the canonical class as a Leray-Hirsch basis), with the universal oriented two-plane $B\operatorname{SO}(2)\cong\mathbb{CP}^\infty$ and the Gysin computation of $e(\gamma_2^+)$ as in Miller's Lectures 34-35. In the published normalization the generator $u=e(\gamma_{\mathbb R})$ of the projective ring is the Euler class of the tautological line, equivalently $c_1(\gamma)=-c_1(\gamma^*)$; with the complex orientation fixed in [F3] the relation $j_b^*x=\pm u$ is the single global sign recorded in the Statement, and no step of the proof depends on its value.

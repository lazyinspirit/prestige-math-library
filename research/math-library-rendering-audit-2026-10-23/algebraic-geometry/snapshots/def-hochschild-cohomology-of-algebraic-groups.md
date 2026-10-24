---
id: def-hochschild-cohomology-of-algebraic-groups
kind: definition
title: Hochschild cohomology of algebraic groups and the classification of Hochschild extensions
dependency_level: 3
deps:
  - def-crossed-homomorphism-and-hochschild-extension
  - def-group-scheme-over-a-field
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - def-tensor-product-of-modules-by-generators-and-relations
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Sections 15(b)-(c), Propositions 15.9-15.10, printed pp. 304-309
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Sections 16(b)-(c), printed pp. 270-274; Proposition 16.10, printed p. 274
---
## Definition

Let $k$ be a field, let $G$ be an algebraic group over $k$ ([[def-group-scheme-over-a-field]]) and let $M$ be a $G$-module: a commutative group functor on $k$-algebras equipped with a left action of $G$ by group homomorphisms. A typical example is a rational representation of an affine $G$ viewed as a group functor ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]).

For $n\ge0$ put
$$C^n(G,M)=\operatorname{Nat}(G^n,M)=\{\text{natural transformations of set-valued functors }G^n\to M\},$$
the group of $n$-cochains, with pointwise addition. Here each cochain is a family of maps on algebra-valued points compatible with every base change, rather than an arbitrary function on one point set; for represented functors these are morphisms of schemes by Yoneda. With the convention $G^0=\operatorname{Spec}k$ so that $C^0(G,M)=M(k)$. The **coboundary** $\partial^n:C^n(G,M)\to C^{n+1}(G,M)$ is
$$(\partial^nf)(g_1,\dots,g_{n+1})=g_1\cdot f(g_2,\dots,g_{n+1})+\sum_{i=1}^{n}(-1)^if(g_1,\dots,g_ig_{i+1},\dots,g_{n+1})+(-1)^{n+1}f(g_1,\dots,g_n),$$
evaluated functorially on $k$-algebras; one checks $\partial^{n+1}\partial^n=0$ by the usual alternating-sum cancellation, using functoriality of the $G$-action on $M$. The **Hochschild cohomology** of $G$ with coefficients in $M$ is
$$H^n(G,M)=\ker\partial^n/\operatorname{im}\partial^{n-1},\qquad \operatorname{im}\partial^{-1}:=0,$$
so in particular $H^0(G,M)=M(k)^G$ is the group of $G$-invariant $k$-points, and $C^\bullet(G,M)$ is a complex of abelian groups.

An exact sequence of $G$-modules $0\to M'\to M\to M''\to0$ gives a long exact sequence when its induced cochain maps $C^n(G,M)\to C^n(G,M'')$ are surjective in every degree (for example when $M\to M''$ has a section as a map of set-valued functors). Then the induced complexes form a short exact sequence, and the usual connecting-map construction gives
$$\dots\to H^n(G,M')\to H^n(G,M)\to H^n(G,M'')\xrightarrow{\delta}H^{n+1}(G,M')\to\dots$$

For rational modules $V$, this surjectivity always holds for an exact sequence of representations: any $k$-linear splitting of the coefficient vector spaces is a natural map of their additive functors, and applying it to a cochain gives a lift (equivariance of that splitting is not required). If $G$ is affine with coordinate ring $A$, Yoneda gives $C^n(G,V^{\mathrm a})=V\otimes_kA^{\otimes n}$, so degreewise exactness also follows directly from tensoring vector spaces over a field. These rational cochains commute with filtered unions of coefficient submodules, because each tensor is a finite sum. The rational-module statements on this page use this case.

For the second cohomology group the following classification holds ([[def-crossed-homomorphism-and-hochschild-extension]] for the terminology). Let $E(G,M)$ be the set of equivalence classes of Hochschild extensions $0\to M\to E\to G\to1$ inducing the given action of $G$ on $M$, two extensions being equivalent when they are isomorphic over $G$ by a map restricting to the identity on $M$. Then there is a canonical bijection
$$E(G,M)\ \longrightarrow\ H^2(G,M)$$
sending the class of an extension with a section $s:G\to E$ to the class of the $2$-cocycle
$$f(g_1,g_2)=s(g_1)s(g_2)s(g_1g_2)^{-1}\in M,$$
i.e. the unique element with $s(g_1)s(g_2)=f(g_1,g_2)s(g_1g_2)$; the class of $f$ is independent of the choice of section, and a $2$-cocycle conversely determines an extension with the given action. This is Milne's Proposition 15.10; the definitions and the functoriality statements used here are the formal parts of Sections 15(b)-(c) of the cited source.

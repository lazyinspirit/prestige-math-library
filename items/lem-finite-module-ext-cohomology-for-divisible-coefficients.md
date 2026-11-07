---
id: lem-finite-module-ext-cohomology-for-divisible-coefficients
kind: lemma
title: Finite-module Ext as cohomology for divisible coefficients
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-discrete-profinite-modules-injective-ext-and-cochain-comparison
  - thm-module-categories-have-enough-injectives
  - thm-injective-modules-over-a-pid-are-exactly-divisible
  - thm-higher-yoneda-ext-agrees-with-derived-ext
  - prop-yoneda-product-is-composition-in-the-derived-category
proof_strategy: direct
axiom_use: AC and DC are explicit for ordinary injectives, continuous coinduced resolutions and Yoneda comparisons.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I §0.8, printed p.11. The coinduced-injective proof and actual evaluation normalization are supplied below.
verification: {}
---

## Statement

Assume AC and DC. Let $G$ be profinite, $M$ a finite discrete continuous $G$-module killed by $n\ge1$, and $C$ a discrete continuous $G$-module such that multiplication by $n$ on $C$ is surjective. For every $r\ge0$ there is a natural isomorphism
$$\operatorname{Ext}^r_G(M,C)\cong H^r_{\rm cts}(G,\operatorname{Hom}_{\mathbb Z}(M,C)),$$
with the natural conjugation action on the Hom group. Under this isomorphism the actual Yoneda composition/evaluation pairing is the continuous-cochain cup/evaluation pairing. Full divisibility of $C$ is not required; no finite-torsion Tor vanishing is asserted.

## Facts & Assumptions

**Given:** The profinite group, finite module, specified divisibility and explicit AC/DC in the Statement.

[A1] AC and DC are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Discrete continuous modules have enough injectives, their injective Ext has natural comparison maps, and continuous cohomology is derived invariants. [[lem-discrete-profinite-modules-injective-ext-and-cochain-comparison]]

[F2] Ordinary abelian groups embed in injective groups, and an abelian group is injective exactly when it is divisible. [[thm-module-categories-have-enough-injectives]] [[thm-injective-modules-over-a-pid-are-exactly-divisible]]

[F3] Yoneda Ext is the injective Ext and its product is the actual derived composition. [[thm-higher-yoneda-ext-agrees-with-derived-ext]] [[prop-yoneda-product-is-composition-in-the-derived-category]]

## Proof

**Proof technique:** use continuous coinduced injectives that are also injective as abelian groups and contract their Hom cochains.

1.1 For an injective abelian group $I$, put $J(I)=C_{\rm cts}(G,I)$ with $(gf)(h)=f(hg)$. Evaluation at one gives $\operatorname{Hom}_G(X,J(I))\cong\operatorname{Hom}_{\mathbb Z}(X,I)$, so $J(I)$ is injective in the discrete continuous category. Embed $C$ in such a $J(I)$ and repeat on successive cokernels, obtaining a continuous injective resolution $C\to J(I^\bullet)$ by [F1]–[F2]. Every underlying $J(I^q)$ is divisible: a function has finite image, and choosing finitely many roots in the divisible group $I^q$ lifts it continuously. Thus each is also an ordinary injective abelian group by [F2]. [A1, F1, F2, given, choose, construct, algebra]

2.1 A finite abelian group killed by $n$ is a finite direct sum of cyclic groups of orders dividing $n$. The standard length-one free resolution of a cyclic summand gives $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/d,C)=C/dC=0$, since $d\mid n$ and $nC=C$; all higher ordinary Ext vanish on that length-one resolution. Consequently applying $\operatorname{Hom}_{\mathbb Z}(M,-)$ to the underlying ordinary injective resolution in step 1.1 gives an exact resolution of $\operatorname{Hom}_{\mathbb Z}(M,C)$. [F2, step 1.1, given, algebra]

3.1 For finite $M$, the map $\operatorname{Hom}_{\mathbb Z}(M,J(I))\to J(\operatorname{Hom}_{\mathbb Z}(M,I))$ given by $\Phi(f)(h)(m)=f(h^{-1}m)(h)$ is an equivariant isomorphism; its inverse is $f(m)(h)=\Phi(f)(h)(hm)$. Finiteness of $M$ and compactness of $G$ make the functions continuous into discrete modules. Homogeneous cochains of such a coinduced module contract by inserting the identity, so these terms are continuous-cochain-acyclic. The two finite-total-degree filtrations of the continuous-cochain double complex of step 2.1 identify its invariants cohomology with $H^r(G,\operatorname{Hom}(M,C))$. The invariant Hom complex is exactly the actual injective Ext complex $\operatorname{Hom}_G(M,J(I^\bullet))$ by [F1]. Finally, [F3] identifies its Yoneda product with the usual cup/evaluation formula on the same double complex. The zero module and $n=1$ are included. [F1, F3, step 1.1, step 2.1, construct, algebra] ∎

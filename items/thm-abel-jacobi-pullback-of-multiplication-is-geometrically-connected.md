---
id: thm-abel-jacobi-pullback-of-multiplication-is-geometrically-connected
kind: theorem
title: "Abel–Jacobi pullbacks of prime-to-characteristic multiplication are geometrically connected"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-abel-jacobi-universal-property-for-pointed-curve, thm-multiplication-by-n-has-degree-n-to-2g, lem-finite-etale-galois-refinements-and-quotients, lem-nonaffine-fppf-descent-of-scheme-morphisms, def-axiom-of-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Étale Cohomology, Chapter III, §9, Proposition 9.1"
      url: "https://www.jmilne.org/math/Books/LEC.pdf"
      locator: "The current consumer identifies Proposition 9.1 as a route. The elementary quotient-and-universal-property proof below is independent of that proposition; the cited book passage was not inspected for this proof."
verification: {}
---

## Statement

Assume AC and DC. Let $C/k$ be a smooth proper geometrically connected curve of genus $g$, let $P\in C(k)$, let $J$ be its Jacobian and let $u:C\to J$ be the pointed Abel–Jacobi map. Let $n\ge1$ be invertible in $k$. Then the pullback
$$Y=C\times_{u,J,[n]}J\longrightarrow C$$
is finite étale of degree $n^{2g}$ and is geometrically connected. In particular, when $g\ge1$ and $n=2$ in characteristic zero, it has degree $2^{2g}>1$.

## Facts & Assumptions

**Given:** AC, DC, the pointed curve, its Jacobian and the integer $n$ in the Statement.

[F1] Multiplication by $n\ge2$ on a $g$-dimensional abelian variety is finite flat of degree $n^{2g}$ and is étale when $n$ is invertible in the field ([[thm-multiplication-by-n-has-degree-n-to-2g]]).

[F2] For a pointed smooth proper geometrically connected curve, every pointed morphism to an abelian variety factors uniquely through its Jacobian by a homomorphism ([[thm-abel-jacobi-universal-property-for-pointed-curve]]).

[F3] Finite étale covers split into connected components; connected Galois covers admit quotients by subgroups, and morphisms between finite étale covers are finite étale ([[lem-finite-etale-galois-refinements-and-quotients]]).

[F4] Morphisms compatible with the two projections of a faithfully flat, quasi-compact, locally finitely presented cover descend uniquely ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]]).

## Proof

**Proof technique:** a disconnected component would give a proper quotient isogeny through which the universal Abel–Jacobi map lifts.

1.1 If $n=1$, $Y=C$ and all assertions are immediate. Suppose $n\ge2$. By [F1], base change along $u$ makes $Y\to C$ finite étale of rank $n^{2g}$. To prove geometric connectedness, replace $k$ by an algebraic closure $K$; the Abel–Jacobi map, Jacobian and pullback base change to the corresponding pointed objects, and the listed facts apply over $K$. Thus assume $k$ algebraically closed. If $g=0$, $J$ is a connected zero-dimensional abelian variety and is a point, so $Y=C$; assume $g\ge1$ below. [F1, given, construct, algebra]

2.1 Put $G=J[n](k)$, a finite abelian group of order $n^{2g}$ by [F1]. Translations by $G$ act on $[n]:J\to J$. For any geometric point $a$ of the target, its fibre is nonempty and is a torsor under $G$: if $[n]x=[n]y$, then $x-y\in J[n]$, and conversely. Since $J$ is connected, $[n]:J\to J$ is a connected Galois cover with deck group $G$. Its pullback $Y\to C$ is a $G$-torsor, with fibre over $P$ canonically $G$ and distinguished point $0$. Let $Y_0$ be the connected component containing this point, and let $H\le G$ be its stabilizer. The action of $H$ on each fibre of $Y_0\to C$ is simply transitive: for two points in the same fibre the unique translation carrying one to the other takes $Y_0$ to a component meeting $Y_0$, hence fixes it. Every component maps onto $C$ by [F3]. Thus $Y_0\to C$ is a connected Galois cover with group $H$, and [F3] gives $Y_0/H\simeq C$. [F1, F3, given, step 1.1, construct, algebra]

3.1 By [F3], the quotient $q:J\to J'=J/H$ exists and factors $[n]$ as $J\xrightarrow qJ'\xrightarrow bJ$, where $b$ is finite étale of degree $|G/H|$. The quotient map $q$ is also finite étale, because it is a morphism of finite étale covers of $J$ in [F3]. Translation invariance makes $q\circ +:J\times J\to J'$ compatible with the two projections of the faithfully flat cover $q\times q:J\times J\to J'\times J'$. By [F4] it descends to addition on $J'$; inversion and identity descend similarly, and the group identities follow after the same faithfully flat pullback. Hence $J'$ is a commutative group scheme and $q,b$ are homomorphisms. It is smooth because the smooth surjective étale map $q$ has smooth source, proper because $b$ is finite and $J$ is proper, and geometrically connected because it is the image of connected $J$. Thus $J'$ is an abelian variety. The map $Y_0\to J$ followed by $q$ is $H$-invariant, so [F4] and $Y_0/H\simeq C$ give a pointed morphism $v:C\to J'$ satisfying $b\circ v=u$. [F3, F4, given, step 2.1, construct, algebra]

4.1 By [F2], $v$ factors uniquely as $v=h\circ u$ for a homomorphism $h:J\to J'$. Then $(b\circ h)\circ u=u$, and uniqueness in [F2], applied to $u:C\to J$, forces $b\circ h=\operatorname{id}_J$. A section of the separated morphism $b$ is a closed immersion. Its image has dimension $g$, equal to $\dim J'$ because $b$ is finite surjective. As $J'$ is smooth and connected it is integral, so the image is all of $J'$, and its defining ideal is zero because $J'$ is reduced. Thus $h$ and $b$ are isomorphisms. Hence $|G/H|=\deg b=1$, so $H=G$. The component $Y_0$ has the whole fibre over $P$, and every connected component of $Y$ meets that fibre by [F3]; therefore $Y=Y_0$ is connected. Returning to the algebraic closure gives geometric connectedness over the original $k$, and step 1.1 gives the degree. [F2, F3, given, step 1.1, step 2.1, step 3.1, construct, algebra] ∎

## Source-reading boundary

The proof is the explicit subgroup-quotient argument above. It imports neither the finite étale versus topological fundamental-group comparison nor Milne's cited proposition.

---
id: ex-changing-an-unstable-orientation-changes-two-basis-signs
kind: example
title: "Changing an unstable orientation changes two sets of basis signs"
status: draft
origin: pipeline
deps:
  - ex-morse-complex-of-the-circle
  - def-axiom-of-choice
  - def-integers
  - def-orientation-line-of-a-morse-critical-point
  - def-signed-morse-differential-over-the-integers
  - lem-unstable-orientations-induce-trajectory-moduli-orientations
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-integral-morse-differential-squares-to-zero
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.3, printed pp. 70-71 (how orientations of the stable/unstable manifolds enter the coefficients)"
    - title: "Alberto Abbondandolo and Pietro Majer, Lectures on the Morse Complex for Infinite-Dimensional Manifolds, complete PDF"
      url: "https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf"
      locator: "Sec. 2.8, printed pp. 69-70 (the coefficients depend on the orientation choices)"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., complete PDF"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Remark 2.5.3(a), printed pp. 65-66 (changing the chosen orientations changes $n$ by signs)"
dependency_level: 8
---

## Example

Assume AC. Fix a Morse--Smale pair on a closed manifold and orientations $or_s$ of all unstable manifolds, giving the signed differential $\partial$ of [[def-signed-morse-differential-over-the-integers]]. Flip the orientation of a single critical point $r$ (replace $or_r$ by its opposite) and keep all other orientations, obtaining $\partial'$. Then:
1. every coefficient $n(x,r)$ of the boundary of a basis element $x$ above $r$ changes sign, and every coefficient $n(r,y)$ in $\partial r$ changes sign;
2. all other coefficients are unchanged;
3. consequently $\partial'=T\partial T^{-1}$, where $T$ is the basis change $r\mapsto-r$ and $p\mapsto p$ for $p\ne r$; in particular $\partial'^2=0$ and the homology is unchanged.
On the circle example $r=p$ (the maximum) the two arcs change sign simultaneously, so $\partial p=0$ is again obtained.

## Facts & Assumptions

**Given:** A Morse--Smale pair on a closed manifold, orientations $or_s$ of all unstable manifolds, a critical point $r$, and the Axiom of Choice as carried by the cited finiteness and differential results.

[F1] An orientation of a critical point is a ray in the determinant line of its unstable manifold, and changing the ray to its opposite reverses the co-orientation it induces on the stable manifold ([[def-orientation-line-of-a-morse-critical-point]], [[lem-unstable-orientations-induce-trajectory-moduli-orientations]]).

[F2] The comparison sign $\epsilon(\gamma)$ is determined by comparing the orientation induced on the parametrized moduli space with the positive flow orientation; reversing $or_r$ reverses $\epsilon$ for exactly those trajectories whose oriented moduli spaces use $or_r$, namely the spaces $\mathcal M(r,y)$ with $\lambda(y)=\lambda(r)-1$ (where $or_r$ orients the source unstable manifold) and the spaces $\mathcal M(x,r)$ with $\lambda(x)=\lambda(r)+1$ (where $or_r$ co-orients the target stable manifold) ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]]).

[F3] The signed differential is $\partial p=\sum_{q}\bigl(\sum_{\gamma\in\mathcal M(p,q)}\epsilon(\gamma)\bigr)q$ over the integers, with finite sums ([[def-signed-morse-differential-over-the-integers]], [[def-integers]]).

[F4] The integral Morse differential squares to zero ([[thm-integral-morse-differential-squares-to-zero]]).

[F5] In the circle example the maximum $p$ has two outgoing trajectories $\gamma_1,\gamma_2$ with $\epsilon(\gamma_1)=-\epsilon(\gamma_2)$, so their contributions cancel ([[ex-morse-complex-of-the-circle]]).

## Verification

**Proof technique:** direct.

1.1 The normalized positive multiple of the round circle gradient in [F5] preserves the two arcs, and its flow directions are opposite relative to one orientation of the unstable interval. Thus their comparison signs are opposite and their signed sum is zero. [F2, F3, F5]

1.2 By [F2], reversing $or_r$ reverses the comparison sign of every trajectory in the two families $\mathcal M(x,r)$ with $\lambda(x)=\lambda(r)+1$ and $\mathcal M(r,y)$ with $\lambda(y)=\lambda(r)-1$, and of no other trajectory: every other moduli space is built from orientations of unstable manifolds different from $r$. Consequently the coefficient $n(x,r)$ of $r$ in $\partial x$ and the coefficient $n(r,y)$ of $y$ in $\partial r$ change sign, by [F3], while all other coefficients are unchanged. This proves claims (1) and (2). [F1, F2, F3]

2.1 Let $T$ be the linear automorphism of the integral chain groups sending the basis element $r$ to $-r$ and every other basis element to itself; it is invertible with $T^{-1}=T$. Compare $T\partial T^{-1}$ with $\partial'$ on basis elements. On $r$: $T\partial T^{-1}(r)=-T(\partial r)=-\partial r$, because $\partial r$ has no $r$-component (its terms are critical points of index one less than $\lambda(r)$) and $T$ fixes every other basis element, while $\partial r=T(\partial r)$ holds as $T$ also fixes $r$'s own absent component; by step 1.2, $\partial'r=-\partial r$. On a basis element $x$ with $\lambda(x)=\lambda(r)+1$: $T\partial(x)=T\bigl(\sum_yn(x,y)y\bigr)=\sum_{y\ne r}n(x,y)y-n(x,r)r$, which is $\partial'x$ by step 1.2. On every other basis element $x$: $\partial x$ has no $r$-component, so $T\partial(x)=\partial x=\partial'x$ by step 1.2 and claim (2). Hence the two linear maps agree on a basis. [F3, step 1.2, algebra]

3.1 Since $T$ is an invertible linear map, $\partial'^2=T\partial T^{-1}T\partial T^{-1}=T\partial^2T^{-1}$, so $\partial'^2=0$ by [F4] and $T$ restricts to an isomorphism of the homologies of $\partial$ and $\partial'$. This proves claim (3). [F4, step 2.1, algebra]

4.1 For the circle instance, take $r=p$, the maximum. The two arcs $\gamma_1,\gamma_2$ of $\mathcal M(p,q)$ both use $or_p$, so by step 1.2 both comparison signs flip and their sum remains zero by [F5]; hence the integral differential still vanishes and the homology is unchanged, in agreement with the general statement. [F5, step 1.2, step 3.1] ∎

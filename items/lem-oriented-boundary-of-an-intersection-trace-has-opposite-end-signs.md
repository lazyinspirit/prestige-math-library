---
id: lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs
kind: lemma
title: "Oriented boundary of an intersection trace has opposite end signs"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-boundary-of-a-compact-one-manifold-has-even-cardinality, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, def-local-oriented-intersection-sign, def-oriented-intersection-number, lem-preimage-orientation-agrees-with-the-local-intersection-sign, thm-transverse-preimage-for-manifolds-with-boundary, def-induced-boundary-orientation, prop-boundary-orientation-is-independent-of-the-outward-vector-field, prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary, def-product-orientation, def-smooth-family-of-maps-and-evaluation-map, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§5, printed pp. 28–29 (Lemma 1: on each arc of $F^{-1}(y)$ the two boundary signs are $-1$ and $+1$)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed p. 108 (the sum of orientation numbers on $\\partial F^{-1}(Z)$ is zero, and $I(\\partial F,Z)=I(f_1,Z)-I(f_0,Z)$)"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X$ be a compact oriented boundaryless $x$-manifold, $M$ an oriented boundaryless $n$-manifold, $Z\subseteq M$ a closed oriented $z$-submanifold with $x+z=n$, and $F:[0,1]\times X\to M$ a smooth family transverse to $Z$ (including on the boundary faces), with the same compact trace setup as the mod 2 homotopy-invariance theorem. Put $W:=F^{-1}(Z)$, oriented by the preimage convention of [[lem-preimage-orientation-agrees-with-the-local-intersection-sign]] from the product orientation of $[0,1]\times X$, whose boundary orientation is $\partial([0,1]\times X)=\{1\}\times X-\{0\}\times X$ (outward-normal-first). Then $W$ is a compact oriented $1$-manifold with boundary $F_0^{-1}(Z)\sqcup F_1^{-1}(Z)$, and with its outward-normal-first boundary orientation: a point $p\in F_0^{-1}(Z)\subseteq\{0\}\times X$ receives the sign opposite to its local oriented intersection sign for $F_0$, while $p\in F_1^{-1}(Z)$ receives the same sign as for $F_1$. Hence $$\sum_{p\in\partial W}\varepsilon_W(p)=I(F_1,Z)-I(F_0,Z),$$ where the right side uses [[def-oriented-intersection-number]].

## Facts & Assumptions

**Given:** Oriented $X,M,Z$ with $x+z=n$, a smooth family $F:[0,1]\times X\to M$ transverse to $Z$ and with $F|_{\partial([0,1]\times X)}$ transverse to $Z$, and the product orientation of $[0,1]\times X$.

[F1] The product orientation of the ordered sum lists the factors in the written order, and the oriented boundary of $[0,1]\times X$ is $\partial([0,1]\times X)=\{1\}\times X-\{0\}\times X$, the outward-normal-first rule being independent of the outward vector field ([[def-product-orientation]], [[prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary]], [[def-induced-boundary-orientation]], [[prop-boundary-orientation-is-independent-of-the-outward-vector-field]]).

[F2] $W=F^{-1}(Z)$ is a compact embedded submanifold with boundary of $[0,1]\times X$, neat, of dimension $1+(x+z-n)=1$, with $\partial W=W\cap\partial([0,1]\times X)=F_0^{-1}(Z)\sqcup F_1^{-1}(Z)$ and $T_pW=\{v:dF_p(v)\in T_{F(p)}Z\}$ ([[thm-transverse-preimage-for-manifolds-with-boundary]]).

[F3] The normal-first quotient ray on $Q=TM/TZ$ and kernel-first exact-sequence isomorphism $\det T([0,1]\times X)=\det TW\otimes\det Q$ determine the preimage orientation. This convention uses determinant elements, including signed scalars for a zero-dimensional quotient; in complementary dimensions the resulting point sign equals the local intersection sign ([[lem-preimage-orientation-agrees-with-the-local-intersection-sign]], [[def-local-oriented-intersection-sign]]).

[F4] $I(F_t,Z)$ is the sum of the local signs $\varepsilon_{F_t}(p)$ over the finite slice preimages ([[def-oriented-intersection-number]], [[def-local-oriented-intersection-sign]]).

[F5] The signed boundary sum of a compact oriented $1$-manifold vanishes ([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]), and its boundary has even cardinality ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]); both rest on the classification of compact $1$-manifolds, so this lemma inherits $\mathrm{AC}_\omega$ through them and adds no further choice ([[def-countable-choice]]).

## Proof

**Proof technique:** compute the orientation of the trace at a boundary point in a product basis.

1.1 By [F2], $W$ is a compact neat $1$-manifold with boundary the finite disjoint union of the slice preimages. Orient it by [F3]: for a positive quotient determinant $q$ and any lift $\ell$ to the ambient tangent, a nonzero kernel vector $\tau$ is positive exactly when $\tau\wedge\ell$ is in the ambient determinant ray. The normal-first quotient ray is the unique ray whose product with the tangent ray of $Z$ is the ambient ray of $M$. Thus this orientation is defined even when the quotient has dimension zero. [F1, F2, F3, given, construct]

2.1 At an end point $p=(t,x)$ let $Q=T_{F(p)}M/T_{F(p)}Z$ with the normal-first orientation. The map $dF_t:T_xX\to Q$ is an isomorphism, so $\tau=\partial_t+v\in T_pW$ exists uniquely with $dF(\tau)=0$ in $Q$. Its $t$-component is $1$. The shear replacing $\partial_t$ by $\tau$ preserves the product determinant, and the kernel-first orientation therefore assigns $\tau$ the sign $\varepsilon_{F_t}(p)$: in determinant elements $\tau\otimes dF_t(u)$ has the product ray exactly when the kernel ray has that sign. This argument includes $x=0$, where $u$ and the quotient orientation are signed scalars, rather than empty positive bases. The vector $\tau$ points outward at $t=1$ and inward at $t=0$. Thus the outward-normal-first point sign is $-\varepsilon_{F_0}(p)$ at the initial end and $+\varepsilon_{F_1}(p)$ at the terminal end. [F1, F3, F4, step 1.1, algebra]

3.1 Summing these point signs over the finite boundary gives $\sum_{p\in\partial W}\varepsilon_W(p)=I(F_1,Z)-I(F_0,Z)$ by [F4]. The left side vanishes by [F5]. The determinant comparison itself uses no choice; the boundary-count supplier uses the stated $\mathrm{AC}_\omega$. [F2, F4, F5, step 2.1, algebra] ∎

---
id: cex-normalization-is-not-a-blowup
kind: counterexample
title: "Normalization of a non-normal surface is not a point blowup"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-birational-morphism-schemes
  - def-embedding-dimension-and-regular-local-ring
  - def-finite-morphism-schemes
  - def-integral-closure-and-integrally-closed-domain
  - def-normal-surface-modification-and-normalized-point-blowup
  - lem-blowup-isomorphism-off-center
  - lem-polynomial-algebras-over-fields-are-integrally-closed
  - thm-affine-domain-dimension-transcendence-degree
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Resolution of Singular Algebraic Varieties (Clay Mathematics Proceedings 20, lecture series)"
      url: "https://www.claymath.org/library/proceedings/cmip20.pdf"
    - title: "The Stacks Project, Resolution of Surfaces, Lemma 54.3.1 (Blowing up a regular surface at a point)"
      url: "https://stacks.math.columbia.edu/tag/0AGQ"
    - title: "Olivier Debarre, Introduction to Mori Theory (M2 course notes, 2016 version)"
      url: "https://www.math.ens.psl.eu/~debarre/M2.pdf"
---

## Statement refuted

**False claim refuted:** a normalization of a singular surface is a finite composition of point blowups, or more generally a proper modification that is an isomorphism outside a finite set of points.

Let $k$ be any field of characteristic $\neq2$ and let
$$S=\operatorname{Spec}k[x,y,z]/(x^2-y^2z)\subseteq\mathbb A^3_k.$$
Write $A=k[x,y,z]/(x^2-y^2z)$ and $B=k[u,y]$, and let
$$\nu\colon\operatorname{Spec}B=\mathbb A^2_k\longrightarrow S,\qquad x\mapsto yu,\quad y\mapsto y,\quad z\mapsto u^2.$$
Then:

1. $S$ is an integral surface, its Jacobian singular locus is the whole $z$-axis $x=y=0$, and $S$ is not normal.
2. The map $\nu$ is the finite birational normalization of $S$ and is an isomorphism exactly over $\{y\neq0\}$. Over every geometric point of the $z$-axis with $z\neq0$, its fibre has two distinct points.
3. Consequently $\nu$ is not a point blowup, not a finite composition of point blowups of $S$, and not any proper modification of $S$ that is an isomorphism over the complement of a finite set of points: every point blowup is an isomorphism off its centre, whereas $\nu$ fails to be an isomorphism over infinitely many points of the $z$-axis.

The target is nonnormal, so this example records the failure of point-blowup factorization when the target regularity hypothesis is dropped. Normalization is a different operation from point blowups.

## Facts & Assumptions

**Given:** A field $k$ of characteristic not two, the ring $A=k[x,y,z]/(x^2-y^2z)$, the ring $B=k[u,y]$, and the displayed map $A\to B$.

[F1] [[def-normal-surface-modification-and-normalized-point-blowup]]: for an integral scheme, normalization is obtained on each affine open by taking the integral closure of its coordinate ring in the common function field and gluing these algebras.

[F2] [[def-integral-closure-and-integrally-closed-domain]]: the integral closure of a domain in an extension ring is the set of elements integral over it; a domain is integrally closed when this closure in its fraction field is the domain itself.

[F3] [[def-finite-morphism-schemes]]: an affine morphism is finite when its target ring makes the source ring a finite module.

[F4] [[def-birational-morphism-schemes]]: a dominant morphism of integral finite-type $k$-schemes inducing an isomorphism of function fields is birational.

[F5] [[lem-polynomial-algebras-over-fields-are-integrally-closed]]: the polynomial ring $k[u,y]$ is an integrally closed domain for every field $k$.

[F6] [[lem-blowup-isomorphism-off-center]]: a blowup is an isomorphism over the complement of the subscheme being blown up.

[F7] [[def-embedding-dimension-and-regular-local-ring]]: a Noetherian local ring is regular when its embedding dimension, $\dim_{\kappa(\mathfrak m)}\mathfrak m/\mathfrak m^2$, equals its Krull dimension.

[F8] [[thm-affine-domain-dimension-transcendence-degree]]: the dimension of a finite-type domain over a field equals the transcendence degree of its fraction field.

## Counterexample

1.1 The polynomial $x^2-y^2z$ is irreducible: over $k(y,z)$ it is a quadratic in $x$ and can factor only if $z$ is a square, which it is not because its valuation at the prime $(z)$ is one; Gauss's lemma then gives irreducibility over $k[y,z]$. Thus $A$ is a domain, and $k[y,z]$ embeds in it while $x$ is algebraic over $k(y,z)$, so its fraction field has transcendence degree two and $S$ is a surface by [F8]. The partial derivatives are $(2x,-2yz,-y^2)$, whose common zero locus on $S$ is exactly $x=y=0$. At the generic point $P=(x,y)$ of this axis, $z$ is invertible and $A_P\cong k(z)[x,y]_{(x,y)}/(x^2-zy^2)$. Before localization this is a one-dimensional affine domain by [F8]; the chain $(0)\subsetneq(x,y)$ shows the local ring has dimension one. Its maximal ideal has cotangent-space basis the classes of $x$ and $y$, since the relation is in $(x,y)^2$; hence it is not regular by [F7]. [F7, F8, given]

2.1 Let $\psi:A\to B$ be the displayed homomorphism. After inverting $y$, it is an isomorphism $A_y\cong k[y,y^{-1},u]=B_y$, with inverse $u=x/y$; since $A$ is a domain and $y\neq0$, $\psi$ is injective. Thus we identify $A=k[y,yu,u^2]\subseteq B$ and their fraction fields agree, so $\nu$ is birational by [F4]. The ring $B=A[u]$ is generated as an $A$-module by $1,u$, because $u^2=z\in A$, so $\nu$ is finite by [F3]. The element $u$ is integral over $A$ by $u^2-z=0$, but $u\notin A$: modulo $y$, the image of $A$ in $B/(y)=k[u]$ is $k[u^2]$, which does not contain $u$. Hence $A$ is not integrally closed and $S$ is not normal. Since $B$ is integrally closed by [F5], every element of the common fraction field integral over $A$ is also integral over $B$ and therefore lies in $B$; conversely every element of $B$ is integral over $A$. Thus $B$ is the integral closure of $A$, and [F1] identifies $\nu$ as the normalization. [F1, F2, F3, F4, F5, step 1.1]

3.1 The inverse $u=x/y$ proves that $\nu$ is an isomorphism over $D(y)$. For a geometric point on the $z$-axis with $z=z_0\neq0$, the fibre is given by $y=0$ and $u^2=z_0$; it has two distinct points because the geometric residue field has characteristic not two. At the origin $m=(x,y,z)$, the local ring $A_m$ is not integrally closed either: if $u=a/s$ with $a\in A$ and $s\in A\setminus m$, then $su=a$ in $B$. Reducing modulo $y$ gives $q(u^2)u=r(u^2)$ in $k[u]$, where $q(u^2)$ is the image of $s$ and has nonzero constant term, while $r(u^2)$ is the image of $a$. The left side is a nonzero polynomial containing only odd powers of $u$, and the right side contains only even powers, a contradiction. Thus the normalization is not an isomorphism over any neighbourhood of the origin. Together with the two-point fibres this shows that its isomorphism locus is exactly $D(y)$. [F1, F2, step 2.1]

4.1 By [F6], each point blowup is an isomorphism away from its centre. Therefore a finite composition of point blowups is an isomorphism over the complement of the finite set of images of its centres in $S$. Any proper modification that is an isomorphism outside a finite set has the same property. But [step 3.1] shows that $\nu$ is not an isomorphism over the complement of any finite set, since infinitely many points of the $z$-axis have fibres with two distinct geometric points. Hence it is not any of these point-blowup modifications. [F6, step 3.1] ∎

## Remarks

- Over a non-algebraically closed field, a point of the $z$-axis with $z_0$ a nonsquare may have one degree-two residue-field point in its fibre; after geometric base change it splits into two distinct points, which is enough to rule out an isomorphism.
- The normalization is finite and birational, so it is a modification; what fails is exactly the description of its exceptional behaviour as finite point blowups.

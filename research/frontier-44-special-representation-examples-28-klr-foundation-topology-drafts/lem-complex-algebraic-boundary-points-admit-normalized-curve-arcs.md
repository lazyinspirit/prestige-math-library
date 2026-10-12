---
id: lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs
kind: lemma
title: Complex algebraic boundary points admit normalized curve arcs
status: draft
origin: session
deps: [cor-noether-normalisation-module-finiteness, thm-finite-morphism-integral-closed, thm-lying-over, thm-krull-height-theorem, thm-dimension-formula-for-affine-domains, thm-affine-domain-dimension-transcendence-degree, lem-dimension-nonempty-open-subset, thm-normalization-reduced-curve-exists-finite, thm-regular-equals-smooth-over-perfect-field, thm-holomorphic-implicit-function-theorem, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: J. S. Milne, Algebraic Geometry, normalization and smooth complex curves
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
---

## Statement

Assume AC. Let $V$ be an irreducible complex algebraic variety of positive dimension, let $O\subseteq V$ be a nonempty Zariski open subset, and let $z\in V$. There is an irreducible algebraic curve $C\subseteq V$ through $z$ not contained in $V\setminus O$. There is also a holomorphic map $\gamma:\Delta\to V$ from a sufficiently small complex disk, with $\gamma(0)=z$ and $\gamma(s)\in O$ for all $s\ne0$. The arc can be obtained by analytically parametrizing a point over $z$ in the finite normalization of $C$.

## Facts & Assumptions

**Given:** AC, $V$, $O$, $z$ as in the statement.

[F1] On an affine chart, Noether normalization makes its domain coordinate ring finite over an injected polynomial ring ([[cor-noether-normalisation-module-finiteness]]); a finite morphism is closed, and lying over makes this normalization onto ([[thm-finite-morphism-integral-closed]], [[thm-lying-over]]).

[F2] For affine domains, dimension is transcendence degree and $\dim(A/\mathfrak p)=\dim A-\operatorname{ht}\mathfrak p$; a minimal prime over $r$ equations has height at most $r$ ([[thm-affine-domain-dimension-transcendence-degree]], [[thm-dimension-formula-for-affine-domains]], [[thm-krull-height-theorem]]).

[F3] Proper closed subsets of an irreducible variety have smaller dimension ([[lem-dimension-nonempty-open-subset]]).

[F4] A reduced algebraic curve has finite regular normalization; over $\mathbb C$ that normalization is smooth, and its analytic one-dimensional charts are holomorphic disks ([[thm-normalization-reduced-curve-exists-finite]], [[thm-regular-equals-smooth-over-perfect-field]], [[thm-holomorphic-implicit-function-theorem]]).

[A1] AC is inherited from these suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Take an affine open neighborhood $V_0$ of $z$. Its intersection with $O$ is nonempty since $V$ is irreducible, so $B=V_0\setminus O$ is proper closed. Put $d=\dim V_0=\dim V\ge1$. By [F1] there is a finite onto morphism $h:V_0\to\mathbb A^d$ given by an injected polynomial normalization. The image $h(B)$ is closed. For each irreducible component of $B$, its coordinate domain is integral and finite over the image of the normalization polynomial ring, so its fraction field is algebraic over the fraction field of that image; [F2] gives equality of their dimensions. Thus $\dim h(B)=\dim B<d$, and $h(B)$ is proper. [F1, F2, F3, A1, construct]

2.1 Choose a nonzero polynomial $P$ vanishing on $h(B)$, or take $P=1$ if $B$ is empty. Write $a=h(z)$. There is a vector $w\ne0$ such that the polynomial $P(a+tw)$ is not identically zero: in the finite Taylor expansion at $a$, take one nonzero homogeneous part and choose $w$ where it is nonzero. A nonzero polynomial on $\mathbb C^d$ cannot vanish everywhere, as induction in the variables and the finite-root bound in one variable show. Consequently the affine line $\ell=\{a+tw:t\in\mathbb C\}$ is not contained in $h(B)$. [step 1.1, algebra, choose]

3.1 The closed inverse image $h^{-1}(\ell)$ is cut out in $V_0$ by $d-1$ independent affine linear equations pulled back from $\mathbb A^d$. Every irreducible component has dimension at least one by [F2]: its defining prime is minimal over those equations and has height at most $d-1$. When $d=1$ there are zero equations and the inverse image is $V_0$ itself of dimension one. On the other hand, each component is finite over its image in the line, so [F2] bounds its dimension by one. Thus every component has dimension exactly one. Choose a component $C_0$ containing $z$. Its finite image is a closed one-dimensional irreducible subset of $\ell$, hence the whole line. Since $\ell$ is not contained in $h(B)$, $C_0$ is not contained in $B$. Its closure $C$ in $V$ is an irreducible curve through $z$ meeting $O$. [F1, F2, step 2.1, construct]

4.1 Normalize the reduced curve $C_0$. Its normalization is finite, regular and onto: on affine charts the coordinate extension is integral and injective and lying over applies. Choose a point $\tilde z$ over $z$. By [F4] it has a holomorphic disk chart, whose composite with normalization gives a holomorphic arc through $z$. The closed set $C_0\setminus O$ is proper in an irreducible curve and hence has dimension zero by [F3]; it is finite by Noetherian finite-component decomposition. Its preimage under a finite morphism is finite (on a closed-point fiber the coordinate algebra is finite-dimensional over $\mathbb C$). Shrink the chart so that the only point mapping outside $O$ is possibly its center. The composite then has the required punctured-disk property. [F1, F3, F4, A1, step 3.1] ∎

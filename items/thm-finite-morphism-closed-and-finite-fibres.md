---
id: thm-finite-morphism-closed-and-finite-fibres
kind: theorem
title: Finite morphisms are closed with finite fibres
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 1
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-finite-morphism-classical-affine-local, thm-going-up, thm-lying-over, thm-affine-algebraic-sets-coordinate-duality, lem-maximal-ideals-are-points-over-algebraically-closed-field, lem-principal-opens-form-affine-basis, def-classical-integral-affine-atlas-and-chartwise-morphism, def-artinian-ring, thm-artinian-ring-has-finitely-many-maximal-ideals, thm-affine-morphisms-coordinate-ring-anti-equivalence, def-axiom-of-choice, thm-affine-nullstellensatz-correspondence, cor-contraction-of-maximal-ideals-integral-extension, cor-module-finite-affine-map-quasi-finite, def-module-finite-affine-classical-map, def-quasi-finite-morphism-classical]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §c: Theorem 8.24, Proposition 8.28 and Lemma 8.29"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. A finite morphism $f:X\to Y$ of classical
varieties over an algebraically closed field is closed, and every fibre
$f^{-1}(y)$ is a finite set. The statement holds in every characteristic and
needs no flatness, separability, or normality hypothesis.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the finite morphism $f\colon X\to Y$ of classical varieties, a finite affine cover $Y=U_1\cup\cdots\cup U_n$ of principal opens with $f^{-1}(U_i)$ affine and $B_i=k[f^{-1}(U_i)]$ a finite module over $A_i=k[U_i]$, a closed subset $Z\subseteq X$, and a point $y\in Y$.

[F1] A morphism is finite exactly when some finite affine cover of the target by affine opens has affine finite-module preimages, and then the same holds over every affine open ([[def-finite-morphism-classical-affine-local]], [[lem-principal-opens-form-affine-basis]], [[def-classical-integral-affine-atlas-and-chartwise-morphism]]).

[F2] Pullback of functions identifies morphisms of affine varieties with $k$-algebra homomorphisms, and a finite algebra is integral ([[thm-affine-morphisms-coordinate-ring-anti-equivalence]], [[thm-affine-algebraic-sets-coordinate-duality]]).

[F3] Lying over: for an integral ring map $A\to B$ and a prime $\mathfrak p$ with $\ker\subseteq\mathfrak p$ there is a prime $\mathfrak q\subseteq B$ with $\mathfrak q\cap A=\mathfrak p$ ([[thm-lying-over]], [[thm-going-up]]). AC is used here.

[F4] If $A\subseteq B$ is an integral extension and $\mathfrak q\subseteq B$ is prime with contraction $\mathfrak q\cap A$, then $\mathfrak q$ is maximal exactly when $\mathfrak q\cap A$ is ([[cor-contraction-of-maximal-ideals-integral-extension]]).

[F5] For an affine algebraic set $X$ the closed subsets correspond bijectively to radical ideals of $k[X]$ by $Z\mapsto I(Z)$, $J\mapsto V(J)$, and the points correspond to maximal ideals ([[thm-affine-nullstellensatz-correspondence]], [[lem-maximal-ideals-are-points-over-algebraically-closed-field]]). AC is inherited from the Nullstellensatz route.

[F6] A module-finite morphism of affine classical algebraic sets is quasi-finite, that is, every closed-point fibre is a finite set ([[cor-module-finite-affine-map-quasi-finite]], [[def-module-finite-affine-classical-map]], [[def-quasi-finite-morphism-classical]]).

## Proof

1.1 First the affine case: let $Y$ have coordinate ring $A=k[Y]$, let $X$ have coordinate ring $B=k[X]$, let $A\to B$ be the pullback of $f$, and assume $B$ is a finite $A$-module; let $Z\subseteq X$ be closed with radical ideal $J=I(Z)\subseteq B$. Then $f(Z)=V(J\cap A)$, which is closed. Indeed, if $z\in Z$ and $g\in J\cap A$, then $f^*(g)=g\circ f\in J$ vanishes at $z$, so $g(f(z))=0$, giving $f(Z)\subseteq V(J\cap A)$. Conversely let $y\in V(J\cap A)$ and let $\mathfrak m=\mathfrak m_y\subseteq A$ be the corresponding maximal ideal, which contains $J\cap A$. The induced map $A/(J\cap A)\to B/J$ is integral, because a monic integrality equation for $b\in B$ over $A$ reduces modulo $J\cap A$ to a monic equation for the class of $b$; and $\bar{\mathfrak m}=\mathfrak m/(J\cap A)$ is maximal. By lying over [F3] there is a prime $\bar{\mathfrak q}\subseteq B/J$ contracting to $\bar{\mathfrak m}$, and $\bar{\mathfrak q}$ is maximal by [F4]; it is the image of a maximal ideal $\mathfrak q\subseteq B$ containing $J$. By [F5] the maximal ideal $\mathfrak q$ is $\mathfrak m_z$ for a point $z\in X$, and $J\subseteq\mathfrak q$ with $Z=V(J)$ gives $z\in Z$. Finally $\mathfrak q\cap A=\mathfrak m$, since both ideals contain $J\cap A$ and have the same image in $A/(J\cap A)$; as contraction along the pullback is precomposition, $\mathfrak q\cap A=\{g\in A:g\circ f\in\mathfrak m_z\}=\{g\in A:g(f(z))=0\}=\mathfrak m_{f(z)}$. Hence $\mathfrak m_{f(z)}=\mathfrak m_y$, so $f(z)=y$ by the bijectivity in [F5], and $y\in f(Z)$. [F3, F4, F5, algebra, given]

1.2 Finite fibres: let $y\in Y$ and choose an index $i$ with $y\in U_i$; then $f^{-1}(y)\subseteq f^{-1}(U_i)$, and the restriction $f_i\colon f^{-1}(U_i)\to U_i$ is a module-finite morphism of affine classical algebraic sets, because $B_i$ is a finite $A_i$-module by the choice of the cover [F1, F2]. By [F6] the map $f_i$ is quasi-finite, so its fibre $f_i^{-1}(y)=f^{-1}(y)$ is a finite set. [F1, F2, F6, given]

2.1 Now the general closedness statement. Let $Z\subseteq X$ be closed. A subset of $Y$ is closed exactly when its traces in the members of the open cover $U_1,\dots,U_n$ are closed, and $f(Z)\cap U_i=f_i\bigl(Z\cap f^{-1}(U_i)\bigr)$, where $Z\cap f^{-1}(U_i)$ is closed in the affine variety $f^{-1}(U_i)$. By step 1.1 applied to the affine map $f_i$, each $f(Z)\cap U_i$ is closed in $U_i$. Hence $f(Z)$ is closed in $Y$, so $f$ is closed. [F1, step 1.1, given]

3.1 Combining the two halves: every closed subset of $X$ has closed image by step 2.1, and every fibre of $f$ is finite by step 1.2. No characteristic, flatness, separability, or normality hypothesis entered either argument, and the only choice principle used is the Axiom of Choice through [F3] and [F5]. [F1, step 1.2, step 2.1] ∎

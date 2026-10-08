---
id: thm-projective-embedding-compact-riemann-surface
kind: theorem
title: "Projective embedding of a compact Riemann surface"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-line-bundle-associated-to-a-divisor
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - thm-riemann-roch-compact-riemann-surfaces
  - thm-serre-duality-compact-riemann-surfaces
  - thm-linear-system-map-to-projective-space-is-well-defined
  - def-complex-projective-space-and-holomorphic-charts
  - cor-holomorphic-functions-are-real-analytic-and-smooth
  - cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding
  - def-smooth-immersion-and-embedding-for-manifolds-with-boundary
aliases: []
landmark: false
verification:
  precheck: pass
sources:
  references: [{"title": "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan", "url": "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf", "locator": "§§17.19–17.22, printed pp. 142–145: global generation for degree at least 2g, the projective map with allowed poles, and embedding for degree at least 2g+1"}, {"title": "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)", "url": "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf", "locator": "Ch. 12, Theorems 12.2 and 12.6–12.8, printed pp. 104–107: the map from a base-point-free system, separating points and first jets, and embedding for degree at least 2g+1"}, {"title": "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)", "url": "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf", "locator": "Ch. 5 §1, Proposition 5.6 and Proposition 5.7, printed pp. 50–51: the projective map and point/tangent separation criterion"}]
---

## Statement

Assume full AC ([[def-axiom-of-choice]]). Let $X$ be a compact Riemann surface of genus $g$, let $D$ be any divisor with $\deg D\ge2g+1$, and put $E=\mathcal O_X(D)$ and $N=\ell(D)-1$. Then:

1. $\ell(D)=\deg D+1-g\ge g+2$, and the complete linear system of holomorphic sections $H^0(X,E)$ is base-point-free. For every $p\in X$,
$$\ell(D-[p])=\ell(D)-1.$$
2. For distinct $p,q\in X$,
$$\ell(D-[p]-[q])=\ell(D)-2.$$
There are sections $s,t$ with $s(p)=0$, $s(q)\ne0$, $t(q)=0$, $t(p)\ne0$; hence the complete-linear-system map $\varphi_D:X\to\mathbb P^N(\mathbb C)$ is injective.
3. For every $p\in X$,
$$\ell(D-2[p])=\ell(D)-2.$$
There is a section with a zero of order exactly one at $p$, and $\varphi_D$ is a holomorphic immersion.
4. The map $\varphi_D$ is a holomorphic embedding, with its basis-independent intrinsic target $\mathbb P(H^0(X,E)^*)$ and the usual projective-coordinate change for a different basis ([[thm-linear-system-map-to-projective-space-is-well-defined]]).

Values and vanishing orders here are those of holomorphic bundle sections. If $h\in L(D)$ represents a section, its local holomorphic coefficient is $h f_i$ in a divisor-bundle frame with $s_D=f_i e_i$; the meromorphic function $h$ itself may have an allowed pole at $p$.

## Facts & Assumptions

**Given:** Full AC, compact $X$ of genus $g$, and $\deg D\ge2g+1$.

[F1] Full AC is the premise inherited from the cohomology and duality suppliers ([[def-axiom-of-choice]]).

[F2] Riemann–Roch gives $\ell(A)-i(A)=\deg A+1-g$, $\ell(0)=1$, $i(0)=g$, and existence of a canonical divisor $K$; Serre duality gives $i(A)=\ell(K-A)$ ([[thm-riemann-roch-compact-riemann-surfaces]], [[thm-serre-duality-compact-riemann-surfaces]]).

[F3] Negative-degree divisors have zero $L$-space, and principal divisors have degree zero ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F4] $H^0(X,\mathcal O_X(A))\cong L(A)$ via $h\mapsto h s_A$, and $s_A=f_i e_i$ with $(s_A)=A$. A nonzero section has zero divisor $(h)+A$ ([[def-line-bundle-associated-to-a-divisor]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F5] Holomorphic sections have holomorphic coefficients in local holomorphic frames, and a nonzero coefficient factors by its finite zero order ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F6] A base-point-free finite-dimensional space of sections defines a canonical holomorphic map to the projectivization of its dual; in a local frame its coordinates are the section coefficients, and a basis change is a projective linear change ([[thm-linear-system-map-to-projective-space-is-well-defined]]).

[F7] Projective space has holomorphic affine charts and is a Hausdorff smooth manifold; holomorphic functions are smooth ([[def-complex-projective-space-and-holomorphic-charts]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[F8] A smooth immersion has injective differential, and an embedding is an immersion and a homeomorphism onto its image. An injective smooth immersion from a compact manifold to a Hausdorff manifold is an embedding ([[def-smooth-immersion-and-embedding-for-manifolds-with-boundary]], [[cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding]]).

## Proof

1.1 Choose a canonical divisor $K$ by [F2]. Duality at $0$ gives $\ell(K)=g$ and at $K$ gives $i(K)=\ell(0)=1$, so Riemann–Roch at $K$ yields $\deg K=2g-2$. For $A=D,D-[p],D-[p]-[q]$ or $D-2[p]$, the degree is at least $2g-1>2g-2$. Thus [F3] gives $\ell(K-A)=0$, and [F2] gives $\ell(A)=\deg A+1-g$. This proves every displayed dimension drop and $\ell(D)\ge g+2$. [F1, F2, F3, given, algebra]

2.1 By [F4], sections vanishing at $p$ correspond exactly to $L(D-[p])$: in a local frame their zero order is $\operatorname{ord}_p(h)+D(p)$. Step 1.1 makes this a proper codimension-one subspace, so some section is nonzero at each $p$. Hence $H^0(X,E)$ is base-point-free and [F6] supplies $\varphi_D$. At distinct $p,q$, the sections vanishing at both form $L(D-[p]-[q])$, a proper subspace of $L(D-[p])$ by step 1.1; choose a section vanishing at $p$ but not at $q$, and symmetrically one vanishing at $q$ but not at $p$. If $\varphi_D(p)=\varphi_D(q)$, their nonzero evaluation functionals would be proportional and have the same kernel, contrary to those sections. Thus $\varphi_D$ is injective. [F4, F5, F6, step 1.1, choose, algebra]

3.1 Fix $p$. By step 1.1 choose a section $s\in H^0(E(-[p]))\setminus H^0(E(-2[p]))$, and by step 2.1 choose $t\in H^0(E)$ with $t(p)\ne0$. In a local coordinate $z$ centred at $p$ and a holomorphic frame $e$, write $s=a(z)e$, $t=b(z)e$; [F4] and [F5] give $a(z)=z u(z)$ with $u(0)\ne0$ and $b(0)\ne0$. Since $s,t$ are independent, extend them to a basis of $H^0(E)$. In the target affine chart corresponding to $t$, a coordinate of $\varphi_D$ is $a/b$, whose derivative at $p$ is $u(0)/b(0)\ne0$. Basis changes are holomorphic projective automorphisms by [F6], so the differential is nonzero for every basis. It is a nonzero complex-linear map from a one-dimensional complex tangent space, hence injective as a real-linear map. Thus [F7] and [F8] make $\varphi_D$ a smooth and holomorphic immersion. This argument uses the regular coefficients $h f_i$, even when the representing meromorphic functions have poles. [F4, F5, F6, F7, F8, step 1.1, step 2.1, choose, algebra]

4.1 The map is injective by step 2.1 and immersive by step 3.1; $X$ is compact and projective space is Hausdorff by [F7]. Hence [F8] makes it a homeomorphism onto its image and a smooth embedding. Its local expressions are holomorphic by [F6], so it is the asserted holomorphic embedding. The intrinsic target and basis covariance are those in [F6]. [F6, F7, F8, step 2.1, step 3.1] ∎

---
id: lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface
kind: lemma
title: Every holomorphic line bundle on a compact Riemann surface has a meromorphic section
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 10
deps:
  - def-axiom-of-choice
  - cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional
  - def-bigraded-complex-differential-forms
  - def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface
  - def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface
  - def-riemann-surface-and-holomorphic-atlas
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - thm-choice-implies-dependent-implies-countable-choice
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces (GTM 81, Springer 1981), translated by Bruce Gilligan"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 3 §§29.15–29.18, printed pp. 225–226: meromorphic sections of vector bundles, existence of a global meromorphic section for every line bundle on a compact surface, and the divisor-line-bundle correspondence. The local proof here gives the vector-bundle construction explicitly using finite-dimensional Dolbeault cohomology."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 14, Theorem 14.2 and Corollaries 14.3–14.4, printed pp. 119–120: finite-dimensional line-bundle cohomology, a meromorphic section with a prescribed pole, and the conclusion that every line bundle is O(D). The proof here supplies its own analytic construction."
verification:
  precheck: pass
---

## Statement

Assume the full Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact connected Riemann surface, let $E\to X$ be a holomorphic line bundle, and let $p\in X$. Then there is a global meromorphic section $s$ of $E$ that is holomorphic on $X\setminus\{p\}$ and has a pole at $p$.

## Facts & Assumptions

**Given:** Full AC, the compact connected Riemann surface $X$, a holomorphic line bundle $E\to X$, and a point $p\in X$.

[F1] Full AC implies $\mathrm{AC}_\omega$; compatible Riemannian and Hermitian metrics on $X$ and $E$ therefore exist ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface]]).

[F2] The global degree-one Dolbeault group is $H^{0,1}(X,E):=\Omega^{0,1}(X,E)/\bar\partial_E\Omega^{0,0}(X,E)$; its zero class consists exactly of forms $\bar\partial_Eu$ for global smooth sections $u$ ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]], [[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).

[F3] The global degree-one Dolbeault group $H^{0,1}(X,E)$ is finite-dimensional for a compact Riemann surface and holomorphic line bundle ([[cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional]]).

[F4] In a holomorphic frame $e$, $\bar\partial_E(fe)=(\bar\partial f)e$, and $\bar\partial_Eu=0$ exactly when $u$ is holomorphic ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F5] A meromorphic section is given by meromorphic local coefficients satisfying the frame transition law ([[def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface]]).

[F6] A Riemann surface is nonempty and connected and is covered by holomorphic coordinate charts ([[def-riemann-surface-and-holomorphic-atlas]]).

[F7] If $K_0$ is compact and contained in an open set $U$ of a smooth manifold, there is a smooth cutoff supported in $U$ and equal to $1$ near $K_0$ ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F8] On a one-dimensional complex manifold, $(0,2)$-forms vanish ([[def-bigraded-complex-differential-forms]]).
## Proof

**Proof technique:** local principal parts and finite-dimensional Dolbeault cohomology.

1.1 By [F1], choose compatible metrics on $X$ and $E$ to apply [F3], and set $m=\dim_{\mathbb C}H^{0,1}(X,E)<\infty$. Choose a holomorphic coordinate disk $U$ about $p$ with $z(p)=0$ and a holomorphic frame $e$ for $E$ on $U$. Choose a smaller closed coordinate disk $K_0\subset U$ whose interior contains $p$, and by [F7] choose $\chi\in C^\infty_c(U)$ equal to $1$ near $K_0$; its support is compact because $X$ is compact. [F1, F3, F4, F6, F7, given]

2.1 For each $j=1,\ldots,m+1$, define $\sigma_j=\chi z^{-j}e$ on $U\setminus\{p\}$ and extend it by zero to $X\setminus\{p\}$. This is smooth away from $p$ because $\chi$ is supported inside $U$. Define $\theta_j=\bar\partial_E\sigma_j$ on $X\setminus\{p\}$. On a neighborhood of $p$ one has $\chi=1$, so $\sigma_j=z^{-j}e$ there and $\theta_j=0$; thus $\theta_j$ extends by zero to a global smooth $E$-valued $(0,1)$-form. Every such form is $\bar\partial_E$-closed because $(0,2)=0$ by [F8]. [F4, F6, F7, F8, step 1.1, given]

3.1 Define $T:\mathbb C^{m+1}\to H^{0,1}(X,E)$ by $T(c)=[\sum_{j=1}^{m+1}c_j\theta_j]$. This is complex-linear by [F2]. Choose a basis of its $m$-dimensional target; the equation $T(c)=0$ then has $m$ homogeneous linear equations in $m+1$ unknowns. Row reduction has at most $m$ pivots and leaves a free variable, so choose $c\ne0$ in the kernel, including when $m=0$. Put $\theta=\sum_jc_j\theta_j$; its Dolbeault class is zero. [F2, F3, step 1.1, step 2.1, algebra]

4.1 Since $[\theta]=0$, the quotient definition [F2] supplies a global smooth section $u$ of $E$ with $\bar\partial_Eu=\theta$. The only choice hypothesis is inherited through metric existence and finite-dimensional cohomology; the kernel calculation is finite. [F1, F2, F3, step 3.1]

5.1 On $X\setminus\{p\}$ set $s=\sum_jc_j\sigma_j-u$. Then $\bar\partial_Es=0$, so $s$ is holomorphic there by [F4]. Near $p$, where $\chi=1$, its coefficient in the frame $e$ is $\sum_jc_jz^{-j}-u_e(z)$. Since $\theta=0$ near $p$, [F4] makes $u_e$ holomorphic there; the nonzero Laurent polynomial $\sum_jc_jz^{-j}$ has a pole, so this coefficient has the same nonzero principal part. Thus $s$ extends meromorphically across $p$, has a pole there, is holomorphic elsewhere, and is not identically zero. [F4, F5, step 2.1, step 4.1, construct] ∎

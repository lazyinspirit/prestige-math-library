---
id: thm-whitney-graustein-classification-of-plane-circle-immersions
kind: theorem
title: "Whitney–Graustein classification of plane circle immersions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-regular-homotopy-preserves-the-formal-gauss-class, lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number, def-rotation-number-of-an-immersed-oriented-circle-in-the-plane, cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes, thm-smale-hirsch-immersion-theorem, def-regular-homotopy-of-immersions, def-space-of-immersions-and-space-of-formal-immersions, def-weak-homotopy-equivalence, def-homotopy-relative-and-path-homotopy, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hassler Whitney, On regular closed curves in the plane, Compositio Mathematica 4 (1937), pp. 276–284"
      url: https://www.numdam.org/item/CM_1937__4__276_0.pdf
      locator: "§1 Lemma 1 and Theorem 1 (rotation number and deformation), §2–§3 pp. 276–284"
    - title: "John Francis, The h-Principle, Lecture 10: Classifying immersions of spheres, after Smale (notes by A. Beaudry)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/10eversing.pdf
      locator: "PDF pp. 1–2; the $n=1$ case of the difference-class classification"
dependency_level: 13
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $f,g:S^1\to\mathbb R^2$ be oriented immersions of the circle (regular
closed curves). Then $f$ and $g$ are regularly homotopic through immersions if
and only if their rotation numbers agree, $\operatorname{rot}(f)=\operatorname{rot}(g)$.
Equivalently, the rotation number induces a bijection
$\pi_0\operatorname{Imm}(S^1,\mathbb R^2)\cong\mathbb Z$; every integer is
realised by a $k$-fold round circle for $k\ne0$, and by the Gerono
lemniscate for $k=0$. Reversing the domain negates the rotation number, so
the once-traversed round circle cannot be turned inside out in the plane
through immersions. A zero-rotation immersed circle is regularly homotopic
to its reversal.


## Facts & Assumptions

**Given:** Oriented immersions $f,g:S^1\to\mathbb R^2$ and their rotation numbers $\operatorname{rot}(f),\operatorname{rot}(g)\in\mathbb Z$.

[F1] A regular homotopy is a smooth family of immersions with prescribed ends; the rotation number is $\deg(\tau_f)$ for the normalised velocity, is invariant under regular reparametrisation and negates under reversal of the orientation of the domain. [[def-regular-homotopy-of-immersions]], [[def-rotation-number-of-an-immersed-oriented-circle-in-the-plane]]

[F2] A regular homotopy gives a continuous path of formal data in $\operatorname{FImm}$, so every homotopy invariant of formal data, in particular the winding invariant, is constant along it. [[lem-regular-homotopy-preserves-the-formal-gauss-class]]

[F3] For $S^1\subseteq\mathbb R^2$ the winding invariant classifies formal immersions: two formal immersions lie in the same path component of $\operatorname{FImm}(S^1,\mathbb R^2)$ exactly when their winding invariants agree, $\pi_0\Gamma\cong\mathbb Z$ by degree, and the winding invariant of the derivative of an immersion is its rotation number. [[lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number]]

[F4] The derivative map $D:\operatorname{Imm}(S^1,\mathbb R^2)\to\operatorname{FImm}(S^1,\mathbb R^2)$ is a weak homotopy equivalence ($1<2$), hence induces a bijection on path components; for compact sources path components of $\operatorname{Imm}$ are regular homotopy classes, and the bijection matches regular homotopy classes with homotopy classes of formal immersions. [[thm-smale-hirsch-immersion-theorem]], [[cor-regular-homotopy-classes-of-immersions-are-formal-homotopy-classes]], [[def-weak-homotopy-equivalence]]

[F5] Path components are the classes of the relation "joined by a path"; a continuous path stays in one path component. [[def-homotopy-relative-and-path-homotopy]], [[def-space-of-immersions-and-space-of-formal-immersions]]

## Proof

1.1 Necessity: let $H$ be a regular homotopy from $f$ to $g$. By [F2] the formal data $(H_t,dH_t)$ form a continuous path in $\operatorname{FImm}(S^1,\mathbb R^2)$, so the winding invariant is constant along it by [F5]; for the derivative of an immersion the winding invariant equals the rotation number by [F3]. Hence $\operatorname{rot}(f)=\operatorname{rot}(g)$, and two curves with different rotation numbers are not regularly homotopic. [F2, F3, F5]

2.1 Sufficiency: assume $\operatorname{rot}(f)=\operatorname{rot}(g)$. By [F3] the winding invariants of the derivatives $(f,df)$ and $(g,dg)$ are equal, so these formal immersions lie in the same path component of $\operatorname{FImm}(S^1,\mathbb R^2)$, i.e. are homotopic through formal immersions. The derivative map is a weak homotopy equivalence by [F4], hence a bijection on path components, so $f$ and $g$ lie in the same path component of $\operatorname{Imm}(S^1,\mathbb R^2)$; by [F4] path components of $\operatorname{Imm}$ for the compact source $S^1$ are exactly the regular homotopy classes, so $f$ and $g$ are regularly homotopic. [F3, F4, step 1.1]

3.1 Consequently rotation number gives a bijection $\pi_0\operatorname{Imm}(S^1,\mathbb R^2)\cong\mathbb Z$: necessity and sufficiency give well-definedness and injectivity. For $k\ne0$, $f_k(\theta)=(\cos k\theta,\sin k\theta)$ has velocity of norm $|k|$ and unit tangent $\operatorname{sgn}(k)(-\sin k\theta,\cos k\theta)$, a constant rotation of $e^{ik\theta}$, hence degree $k$. For $k=0$, take $\delta(\theta)=(\cos\theta,\sin2\theta)$. Its velocity is $p(\sin\theta)$, where $p(u)=(-u,2-4u^2)$ never vanishes for real $u$: if its first coordinate is zero its second is $2$. The homotopy $p((1-t)\sin\theta)$ contracts this velocity loop to $(0,2)$ through nonzero vectors, so its degree is zero. Thus every integer occurs. [F1, F3, step 1.1, step 2.1, construct]

4.1 Reversing the domain gives $\tau_{f\circ a}(\theta)=-\tau_f(-\theta)$ for $a(\theta)=-\theta$. The constant target rotation by $\pi$ preserves degree and domain reversal negates it, so the reverse of a curve of rotation number $k$ has rotation number $-k$. In particular the once-traversed round circle and its reverse have values $1$ and $-1$ and are not regularly homotopic. The zero class is nonempty by step 3.1; its representatives are regularly homotopic to their reversals by step 2.1. Countable choice is inherited from [F4]. [F1, F3, F4, step 2.1, step 3.1] ∎
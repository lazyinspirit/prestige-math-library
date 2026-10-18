---
id: lem-na-relative-curl-kernel-is-zero-boundary-gradients
kind: lemma
title: The relative curl kernel on a contractible Lipschitz polyhedron
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    lem-na-hcurl-curlfree-potential-contractible,
    lem-na-contractible-lipschitz-polyhedron-boundary-connected,
    lem-na-full-dirichlet-hcurl-regular-decomposition,
    lem-na-lipschitz-scalar-h1-h2-extension,
    lem-na-lipschitz-support-and-zero-boundary-closure,
    thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces,
    thm-zero-weak-gradient-implies-componentwise-constancy,
    thm-poincare-inequality-on-a-ball,
    def-axiom-of-choice,
    thm-sobolev-spaces-are-banach-spaces,
    thm-l-two-fourier-inversion,
    thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions,
    thm-dominated-convergence,
    cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn,
    lem-affine-pullback-weak-derivatives-and-scaling,
    thm-tonelli-and-fubini-for-completed-product-measures,
    thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ralf Hiptmair and Clemens Pechstein, Regular Decompositions of Vector
        Fields—Continuous, Discrete, and Structure-Preserving
      url: https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2019/2019-18.pdf
      locator: Section 2.2, equations (6)–(8), with the full Dirichlet and trivial
        topology specialization.
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume AC. Let $\Omega\subset\mathbb R^3$ be a nonempty bounded contractible Lipschitz polyhedron. Then
$$\{u\in H_0(\operatorname{curl};\Omega):\operatorname{curl}u=0\}=\nabla H_0^1(\Omega).$$
The gradient range is closed in $L^2(\Omega;\mathbb R^3)$, and $\|q\|_{H^1}\le C_\Omega\|\nabla q\|_2$ for $q\in H_0^1(\Omega)$. The boundary is connected as a consequence of these stated geometric hypotheses; it is not an extra assumption.

## Facts & Assumptions


**Given:** AC and $\Omega$.

[F1] [[lem-na-full-dirichlet-hcurl-regular-decomposition]] gives $u=z+\nabla q$ with $z\in H_0^1(\Omega;\mathbb R^3)$ and $q\in H_0^1(\Omega)$. [[lem-na-lipschitz-support-and-zero-boundary-closure]] gives the zero-curl inclusion of gradients and its continuous-zero-boundary criterion.

[F2] [[lem-na-hcurl-curlfree-potential-contractible]] supplies a weak $H^1$ primitive for a curl-free field, and [[lem-na-contractible-lipschitz-polyhedron-boundary-connected]] supplies connected boundary.

[F3] [[lem-na-lipschitz-scalar-h1-h2-extension]] supplies scalar $H^2$ extension. The whole-space Fourier characterization in [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]] applies, and [[thm-zero-weak-gradient-implies-componentwise-constancy]] applies also to the two-dimensional face interiors. [[thm-poincare-inequality-on-a-ball]] is available with the retained AC assumption.

[F4] [[thm-l-two-fourier-inversion]] gives positive-sign truncated inverse integrals converging in $L^2$ to the inverse Plancherel transform, under CC. [[thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]] gives a continuous integral transform of every complex $L^1$ function on $\mathbb R^n$, for every $n\ge1$. [[thm-dominated-convergence]] applies to the integrable Fourier tails. Use these at $n=3$ for $\widehat a\in L^1\cap L^2$; no $L^1$ hypothesis on $a$ is required. Smooth whole-space $H^2$ approximation is [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]] with $k=2,p=2,n=3$. These two approximation/inversion suppliers assume CC, which follows from AC.

[F5] [[thm-sobolev-spaces-are-banach-spaces]] with $k=1,p=2$ and open $\Omega\subset\mathbb R^3$ supplies completeness in step 4.1. Closure-defined $H_0^1$ is then a closed subspace of that Banach space. Bounded face-slab rotations use [[lem-affine-pullback-weak-derivatives-and-scaling]] at $d=3,r=1,2,p=2$; this is an affine theorem on arbitrary bounded open sets, not only simplices. The slab inequality is integrated with [[thm-tonelli-and-fubini-for-completed-product-measures]]. Completed-product integration is applied to Euclidean Lebesgue measure using [[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]], whose CC hypothesis follows from AC. All imported AC/CC hypotheses are covered by the stated AC.

## Proof


1.1 Let $u$ lie in the left-hand kernel and take $u=z+\nabla q$ from [F1]. Then $\operatorname{curl}z=0$. By [F2], $z=\nabla r$ for $r\in H^1(\Omega)$. Since each $z_j\in H^1$, its weak derivatives give all second derivatives of $r$, so $r\in H^2(\Omega)$. Extend $r$ by [F3] to $a\in H^2(\mathbb R^3)$. This has a continuous representative: Cauchy–Schwarz gives $\|\widehat a\|_1\le\|(1+|\xi|^2)\widehat a\|_2\|(1+|\xi|^2)^{-1}\|_2<\infty$ in dimension three, and its positive-sign inverse integral $g(x)$ is the reflection of the integral Fourier transform of $\widehat a$, hence continuous by [F4]. Its truncated integrals converge uniformly to $g$, since the error is bounded by the $L^1$ Fourier tail, which tends to zero by dominated convergence. They converge in $L^2$ to $a$ by [F4]. On every finite-measure ball the uniform convergence is also $L^2$ convergence, so uniqueness of the $L^2$ limit there shows $g=a$ almost everywhere. Smooth compactly supported approximants to $a$ converge in $H^2$ by [F4] and uniformly by the same Fourier bound applied to their differences; no unproved $L^1$ inversion assumption on $a$ is made. Consequently $r$ has a continuous representative on $\overline\Omega$. [F1, F2, F3, construct, algebra, F4]

2.1 On any compact patch of the interior of a planar boundary face there is an inward rectangular slab of fixed height $b>0$ inside $\Omega$. For a smooth function on this slab, the one-dimensional fundamental theorem in the normal direction and Cauchy–Schwarz give $\|f|_{s=0}\|_{L^2(\text{patch})}^2\le \frac{2}{b}\|f\|_{L^2(\text{slab})}^2+2b\|\partial_s f\|_{L^2(\text{slab})}^2.$ This defines a bounded $H^1$ face restriction by smooth approximation: the already proved Lipschitz extension [F3] on a bounded rectangular slab, followed by the whole-space density theorem [F4] at $k=1$, gives the required dense smooth restrictions. Since $z\in H_0^1(\Omega)$, approximating by compactly supported smooth vector fields shows that the restriction of $z$ to this patch is zero. Approximate $a$ from step 1.1 in $H^2$ by the smooth functions of [F4]; their gradients converge in $H^1$ on the slab and their values converge uniformly. Thus the restriction of $r$ is its continuous face value and the tangential derivatives of that restriction are the restrictions of the tangential components of $\nabla r=z$: integrate the smooth tangential derivative identity against a compactly supported smooth test on the face and pass to the limit using the slab estimate. These derivatives are zero. By [F3] in dimension two, the continuous boundary value of $r$ is constant on each connected planar face interior. One may split disconnected faces into their finitely many polygonal components. Continuity makes those constants extend to their closures. Since the boundary is connected by [F2] and these finitely many closed faces cover it, its continuous image under $r$ is a connected subset of a finite set of constants, hence one constant $c$. [F1, F2, F3, step 1.1, construct, algebra, F4]

3.1 Now $r-c\in H^1(\Omega)\cap C(\overline\Omega)$ vanishes on the boundary. By [F1] it lies in $H_0^1(\Omega)$. Thus $u=\nabla(q+r-c)$ belongs to the right-hand range. Its reverse inclusion follows directly from [F1], so the claimed relative kernel identity holds. This proves weak relative exactness using the actual boundary closure and continuum topology, rather than inferring it from mesh cohomology. [F1, step 2.1, algebra]

4.1 For the norm estimate, zero-extend $q\in H_0^1(\Omega)$ to $Q\in H^1(\mathbb R^3)$ by [F1], and fix a ball $B\supset\overline\Omega$ with $A=B\setminus\overline\Omega$ of positive measure. Ball Poincare in [F3] gives $\|Q-Q_B\|_{L^2(B)}\le C_B\|\nabla q\|_2$. Since $Q=0$ on $A$, $|Q_B||A|^{1/2}\le\|Q-Q_B\|_{L^2(B)}$. The triangle inequality therefore gives $\|q\|_2\le C_B(1+(|B|/|A|)^{1/2})\|\nabla q\|_2$, proving the asserted $H^1$ bound. If a sequence of gradients is Cauchy in $L^2$, this estimate makes its scalar representatives Cauchy in $H^1$. The space $H_0^1$ is closed by its definition as a closure, and complete as a closed subspace of $H^1$. Its limit's gradient is the given $L^2$ limit, so the gradient range is closed. [F1, F3, construct, algebra, F5] ∎

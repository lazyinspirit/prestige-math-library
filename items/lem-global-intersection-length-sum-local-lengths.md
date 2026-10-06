---
id: lem-global-intersection-length-sum-local-lengths
kind: lemma
title: Global intersection length is the sum of the local multiplicities
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-localisation-is-unique-up-to-unique-isomorphism, cor-no-common-component-projective-plane-intersection-is-zero-dimensional, def-algebraically-closed-field, def-axiom-of-choice, def-composition-series-and-length-of-a-module, def-local-intersection-multiplicity-plane-curves, def-plane-projective-curve, def-projective-scheme-from-a-homogeneous-quotient, def-residue-field-scheme-point, def-total-length-of-a-zero-dimensional-projective-scheme, lem-bezout-global-length-degree-product, lem-local-intersection-length-finite, lem-projective-standard-chart-prime-and-local-ring-correspondence, lem-zero-dimensional-projective-scheme-has-finite-local-charts, prop-algebraically-closed-splitting-and-finite-extension-criteria, thm-localisation-commutes-with-quotients, thm-projective-plane-complete-intersection-total-length, thm-universal-property-of-localisation]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Andreas Gathmann, Algebraic Geometry class notes (2002), Sections 6.1-6.2"
      url: "https://agag-gathmann.math.rptu.de/class/alggeom-2002/alggeom-2002.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C=V(F)$, $D=V(G)$ be plane projective curves over the algebraically closed field $k$ with no common component, and put $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$. For $p\in C\cap D$ let $x_p\in X$ be the corresponding point. Then $\mathcal O_{X,x_p}\cong\mathcal O_{\mathbf P^2,p}/(f_p,g_p)$ for local equations $f_p,g_p$ of $C$ and $D$ at $p$, and consequently

$$ \operatorname{len}_k(X)=\sum_{p\in C\cap D}I_p(C,D).$$

In particular the local multiplicities are all finite and only finitely many points contribute.

## Facts & Assumptions

**Given:** AC, plane curves $C=V(F)$, $D=V(G)$ over the algebraically closed field $k$ with no common component, and $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$ [[def-projective-scheme-from-a-homogeneous-quotient]].

[F1] $X$ is zero-dimensional with finitely many points, and $X$'s points correspond bijectively to the points of $C\cap D$: a point $x\in X$ lies in a standard chart $D_+(x_i)$, whose chart ring is $k[u,v]/(f_i,g_i)$ for the dehomogenised forms, and the maximal ideals of that chart ring are the evaluation ideals at the common zeros of $f_i,g_i$ [[cor-no-common-component-projective-plane-intersection-is-zero-dimensional]], [[lem-zero-dimensional-projective-scheme-has-finite-local-charts]], [[lem-projective-standard-chart-prime-and-local-ring-correspondence]], [[thm-projective-plane-complete-intersection-total-length]], [[def-residue-field-scheme-point]]. AC enters through these published suppliers.

[F2] The local ring of $X$ at a point $x_p$ corresponding to $p$ is $\mathcal O_{X,x_p}\cong\mathcal O_{\mathbf P^2,p}/(f_p,g_p)$: in a chart containing $p$ the chart ring is $k[u,v]/(f_i,g_i)$ and $\mathcal O_{X,x_p}$ is its localisation at the prime of $p$; localisation commutes with the quotient, and the localisation of $k[u,v]$ at $p$ modulo the dehomogenised equations is $\mathcal O_{\mathbf P^2,p}$ modulo the local ideal [[thm-projective-plane-complete-intersection-total-length]], [[thm-localisation-commutes-with-quotients]], [[cor-localisation-is-unique-up-to-unique-isomorphism]], [[thm-universal-property-of-localisation]].

[F3] The total length is the finite weighted sum $\operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$ [[def-total-length-of-a-zero-dimensional-projective-scheme]], and over the algebraically closed field every residue degree is one, $\kappa(x)=k$ [[prop-algebraically-closed-splitting-and-finite-extension-criteria]], [[def-algebraically-closed-field]].

[F4] Since $C,D$ have no common component, they share no local branch at any point, so each $I_p(C,D)$ is finite by the finiteness lemma [[lem-local-intersection-length-finite]]; the sum over the finite set $C\cap D$ is therefore a finite sum of finite numbers.

## Proof

1.1 Fix $p\in C\cap D$ and let $x_p$ be the corresponding point of $X$. By [F2] the local ring of $X$ at $x_p$ is $\mathcal O_{X,x_p}\cong\mathcal O_{\mathbf P^2,p}/(f_p,g_p)$, Write $O=\mathcal O_{\mathbf P^2,p}$ and $Q=O/(f_p,g_p)$. The $O$-submodules and $Q$-submodules of $Q$ are exactly the same subsets, because the $O$-action factors through the surjection $O\to Q$. Hence their composition series and lengths coincide; under the displayed isomorphism, $\ell_{\mathcal O_{X,x_p}}(\mathcal O_{X,x_p})=\ell_O(Q)=I_p(C,D)$. [F2, given]

2.1 Combining [F3] with step 1.1 and the point correspondence [F1], the total length is $$ \operatorname{len}_k(X)=\sum_{x\in X}\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})=\sum_{p\in C\cap D}I_p(C,D),$$ the finite sum over the intersection points; each summand is finite by [F4]. [step 1.1, F1, F3, F4] ∎ 
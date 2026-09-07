---
id: lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary
title: "Form calculus extends locally across a manifold boundary"
kind: lemma
status: draft
origin: pipeline
deps: ["cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary", "lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space", "thm-local-coordinate-formula-for-the-exterior-derivative", "thm-the-exterior-derivative-commutes-with-pullback", "thm-the-exterior-derivative-is-a-graded-derivation", "thm-cartans-magic-formula", "prop-the-exterior-derivative-does-not-enlarge-support"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lee Stokes proof pp.412–414 and published extension/calculus dependencies"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

Let $M$ and $N$ be smooth manifolds with boundary (possibly empty boundary), let $F:N\to M$ be any smooth map, and let $X$ be any smooth vector field on $M$. The coordinate exterior derivative, pullback naturality, support containment, and Cartan identity hold for every smooth form $\alpha\in\Omega^*(M)$. For homogeneous $\alpha\in\Omega^p(M)$ and $\beta\in\Omega^q(M)$, the graded Leibniz rule also holds:
$$d(F^*\alpha)=F^*(d\alpha),\quad d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^p\alpha\wedge d\beta,$$
$$\operatorname{supp}d\alpha\subseteq\operatorname{supp}\alpha,\qquad \mathcal L_X\alpha=d(\iota_X\alpha)+\iota_Xd\alpha.$$
For arbitrary smooth vector fields at boundary points, $\mathcal L_X$ is defined by local Euclidean extensions; a two-sided flow inside the manifold is not required.

## Facts & Assumptions

[F1] [[cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary]]: Every smooth function or tensor field on a manifold with boundary extends smoothly across each boundary point to some neighbourhood in its double; the extension is not canonical.

[F2] [[lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space]]: If two smooth Euclidean extensions agree on a relatively open subset of $\mathbb H^n$, then all of their derivatives agree at every point of that subset.

[F3] [[thm-local-coordinate-formula-for-the-exterior-derivative]]: Let $(U,x^1,\ldots,x^n)$ be a smooth chart on a smooth manifold and $\omega$ a smooth $k$-form on $U$, with $k\ge0$. Summing over increasing $k$-tuples $I$, and writing $dx^I=dx^{i_1}\wedge\cdots\wedge dx^{i_k}$, if $\omega=\sum_I\omega_I\,dx^I$, then $$d\omega=\sum_I d\omega_I\wedge dx^I.$$

[F4] [[thm-the-exterior-derivative-commutes-with-pullback]]: For every smooth map $F:M\to N$ and every form $\omega$ on $N$, $$d(F^*\omega)=F^*(d\omega).$$

[F5] [[thm-the-exterior-derivative-is-a-graded-derivation]]: Let $M$ be a smooth manifold. The exterior derivative is an $\mathbb R$-linear map $d:\Omega^*(M)\to\Omega^*(M)$ of degree one. For homogeneous smooth forms $\alpha\in\Omega^p(M)$ and $\beta\in\Omega^q(M)$, $$d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta.$$

[F6] [[thm-cartans-magic-formula]]: For every vector field $X$ and differential form $\omega$, $$\mathcal L_X\omega=d(\iota_X\omega)+\iota_X(d\omega).$$

[F7] [[prop-the-exterior-derivative-does-not-enlarge-support]]: For every form $\omega$, $\operatorname{supp}(d\omega)\subseteq\operatorname{supp}(\omega)$.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Extend the finitely many coordinate coefficients of forms and vector fields across a boundary point. Two extensions agreeing on the half-space have all derivatives equal there. Hence the coordinate formula for $d$, which uses only first derivatives, restricts independently of the extension. The same holds for the coordinate Lie derivative, whose coefficients involve first derivatives of the field and form. [F1, F2, F3]

2.1 For a smooth map between boundary charts, extend its coordinate components locally and extend the target form near the image point. Shrink the source neighborhood so the extended map lands in that target extension domain. The boundaryless pullback identity restricts to $dF^*\alpha=F^*d\alpha$, with independence assured by equality of derivatives. [F2, F4, step 1.1]

2.2 The graded Leibniz identity for extensions restricts to the asserted identity. At a point outside the support the form vanishes on a relative neighborhood; all its derivatives, including their one-sided limits at the face, vanish. Thus its derivative vanishes there and support cannot increase. [F2, F5, F7, step 1.1]

3.1 Apply Cartan’s formula on each extension neighborhood and restrict; equality of first derivatives gives the same result for any extensions. These local equalities agree on overlaps by the coordinate tensor laws. Degree zero, the zero form, and empty manifolds cause no exception, and the construction in dimension one uses exactly the same one-sided derivatives. [F2, F6, step 1.1] ∎

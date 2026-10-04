---
id: thm-normalization-universal-property
kind: theorem
title: Universal property of the normalization
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 4
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-normal-point-and-normal-variety, def-normalization-affine-variety, thm-normalization-glues-variety, lem-classical-integral-affine-charts-have-canonical-common-function-field, thm-classical-birational-equivalence-iff-function-fields-isomorphic, lem-classical-dominant-map-pulls-back-function-fields, thm-classical-affine-morphisms-coordinate-ring-antiequivalence, def-classical-integral-affine-atlas-and-chartwise-morphism, def-integral-closure-and-integrally-closed-domain, lem-classical-open-source-morphisms-equal-on-dense-open, lem-classical-morphisms-glue-on-open-cover, def-axiom-of-choice, def-dominant-morphism-and-rational-map, def-birational-equivalence-varieties, lem-classical-variety-noetherian-components]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §a-b: the universal property of the normalization"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "The Stacks Project, Lemma 29.55.5 (normalization and its universal property)"
      url: "https://stacks.math.columbia.edu/tag/035Q"
---

## Statement

Assume the Axiom of Choice. Let $X$ be an irreducible classical variety over an
algebraically closed field with normalization $\nu\colon X^{\nu}\to X$. If
$f\colon Y\to X$ is a dominant birational morphism from an irreducible normal variety $Y$,
then there is a unique morphism $g\colon Y\to X^{\nu}$ with $\nu\circ g=f$. In
the affine case the corresponding ring statement is: if
$A\subseteq B\subseteq\operatorname{Frac}(A)$ with $B$ integrally closed, then
the integral closure of $A$ lies in $B$.

## Facts & Assumptions

**Given:** AC, the algebraically closed field $k$, the irreducible variety $X$ with normalization $\nu\colon X^{\nu}\to X$, the irreducible normal variety $Y$, the dominant birational morphism $f\colon Y\to X$, and a finite affine cover of $X$ by affine charts $U_i$ with normalizations $U_i^{\nu}=\nu^{-1}(U_i)$ and coordinate rings $A_i\hookrightarrow B_i\subseteq k(X)$.

[F1] The normalization restricts over each affine chart to the affine normalization: $A_i\subseteq B_i\subseteq k(X)$ with $B_i$ the integral closure of $A_i$ in $k(X)$, and $k[U_i^{\nu}]=B_i$ ([[def-normalization-affine-variety]], [[thm-normalization-glues-variety]]).

[F2] All charts of $X$ share the function field $k(X)$, birational morphisms induce isomorphisms of function fields, and a dominant morphism pulls back function fields injectively ([[lem-classical-integral-affine-charts-have-canonical-common-function-field]], [[thm-classical-birational-equivalence-iff-function-fields-isomorphic]], [[lem-classical-dominant-map-pulls-back-function-fields]], [[def-dominant-morphism-and-rational-map]], [[def-birational-equivalence-varieties]]).

[F3] Normality of $Y$ means every local ring $\mathcal O_{Y,y}$ is an integrally closed domain, and an integrally closed domain contains every element of its fraction field integral over it ([[def-normal-point-and-normal-variety]], [[def-integral-closure-and-integrally-closed-domain]]).

[F4] For an affine target, morphisms correspond contravariantly to $k$-algebra homomorphisms; morphisms to an affine target glue over an open cover, and two morphisms agreeing on a dense open agree ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]], [[lem-classical-morphisms-glue-on-open-cover]], [[lem-classical-open-source-morphisms-equal-on-dense-open]], [[def-classical-integral-affine-atlas-and-chartwise-morphism]], [[lem-classical-variety-noetherian-components]]).

## Proof

1.1 The affine ring statement: let $A\subseteq B\subseteq\operatorname{Frac}(A)$ with $B$ integrally closed, and let $A'$ be the integral closure of $A$ in $\operatorname{Frac}(A)$. Every $a'\in A'$ is integral over $A\subseteq B$, hence integral over $B$, and lies in $\operatorname{Frac}(A)=\operatorname{Frac}(B)$; since $B$ is integrally closed, $a'\in B$. Thus $A'\subseteq B$, and the inclusion $A'\hookrightarrow B$ is a $k$-algebra map extending $A\hookrightarrow B$. [F3, given]

1.2 Local construction. Let $U_i$ be a chart of $X$ and put $Y_i=f^{-1}(U_i)$, an open subvariety of the irreducible normal variety $Y$, hence normal. Read the pullback of functions in the common function fields: $f$ birational gives $k(Y)=k(X)=k(U_i)$, and $f_i=f|_{Y_i}$ is dominant. For $b\in B_i\subseteq k(X)=k(Y)$ the element $b$ is integral over $A_i$; its pullback lies in $k(Y)$, and at every point $y\in Y_i$ the pullback of $A_i$ is contained in the local ring $\mathcal O_{Y,y}$ (pullback of functions regular at $f(y)$ is regular at $y$). The local ring $\mathcal O_{Y,y}$ is an integrally closed domain [F3], so $b\in\mathcal O_{Y,y}$ for every $y\in Y_i$; hence $b$ is a regular function on $Y_i$. The resulting $k$-algebra map $B_i\to\mathcal O_Y(Y_i)$ extending $A_i\to\mathcal O_Y(Y_i)$ defines, on each affine chart of $Y_i$, a morphism by the anti-equivalence [F4]; these morphisms agree by their pullback maps and glue by [F4] to a morphism $g_i\colon Y_i\to U_i^{\nu}$ with $\nu\circ g_i=f|_{Y_i}$. [F1, F2, F3, F4, given]

2.1 Gluing and uniqueness. On an overlap $Y_i\cap Y_j$, the morphisms $g_i$ and $g_j$ have the same pullback on the common function field $k(X)$, because both are determined by the identifications $k[U_i^{\nu}]=B_i\subseteq k(X)=k(Y)$; hence they agree on the dense open intersection by [F4], and they glue to a morphism $g\colon Y\to X^{\nu}$ over $X$ with $\nu\circ g=f$. If $g'$ is another such morphism, then $g$ and $g'$ have the same pullback on rational functions on $X^{\nu}$ (both equal the given identification $k(X^{\nu})=k(X)\to k(Y)$), so they agree on a dense open and hence everywhere by the equality lemma [F4]; this proves uniqueness. The affine statement of step 1.1 is the chartwise content of the construction, and the morphism $X^{\nu}\to X$ is the normalization by [F1]. [F1, F2, F4, step 1.1, step 1.2] ∎

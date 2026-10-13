---
id: def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces
kind: definition
title: Derived operations on analytic field sheaves
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps: [def-axiom-of-choice, def-c-soft-sheaf, def-compactly-supported-global-sections, def-derived-category-of-an-abelian-category, def-direct-image-sheaf, def-extension-by-zero-abelian-sheaf, def-flasque-sheaf, def-hausdorff-space, def-inverse-image-presheaf-and-sheaf, def-locally-compact-space, def-proper-continuous-map, def-sheaf-cohomology-derived-global-sections, def-sheaf-hom, def-sheaf-on-topological-space, def-sheaf-tensor-product, def-support-of-a-sheaf-section, lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions, lem-c-soft-field-sheaves-are-compact-support-acyclic, lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions, lem-proper-continuous-map-stability]
justified_by: [thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Louis Verdier, Dualité dans la cohomologie des espaces localement compacts, Séminaire N. Bourbaki 1964–1966, exposé 300, pp. 337–349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20): §12 flasque sheaves, §16 cohomology on Hausdorff quasi-compact spaces, §17 the base change map, §18 proper base change in topology, §21 cohomology with support in a closed subset, §54 projection formula"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Definition

Let $k$ be a field and let $X,Y$ be locally compact Hausdorff spaces
([[def-locally-compact-space]], [[def-hausdorff-space]]). Write
$\operatorname{Sh}_k(X)$ for the category of sheaves of $k$-vector spaces
([[def-sheaf-on-topological-space]], [[def-sheaf-cohomology-derived-global-sections]])
viewed as modules over the constant ring sheaf $k_X$, and form derived
categories in those sheaves ([[def-derived-category-of-an-abelian-category]]).
For a continuous map $f:X\to Y$, set $f^*=f^{-1}$
([[def-inverse-image-presheaf-and-sheaf]]) and define $f_!F$ on an open
$V\subseteq Y$ to consist of the sections of $F$ on $f^{-1}(V)$ whose closed
support ([[def-support-of-a-sheaf-section]],
[[def-compactly-supported-global-sections]]) maps properly to $V$, properness
being that of [[def-proper-continuous-map]] together with its stability lemma
[[lem-proper-continuous-map-stability]]. Under AC ([[def-axiom-of-choice]]),
$Rf_*$ and $Rf_!$ are computed on bounded-below $k$-linear injective
replacements. Tensor means the signed total tensor over $k$
([[def-sheaf-tensor-product]]) and internal derived Hom is the injective
construction of
[[lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions]]
([[def-sheaf-hom]]).

Suppose the uniform all-fibre-open cohomological dimension bound of
[[lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions]] holds,
and choose its finite resolution $k_X\to K$; for an open $U\subseteq X$ put
$K_U=j_{U!}j_U^*K$ ([[def-extension-by-zero-abelian-sheaf]],
[[def-c-soft-sheaf]]). For a bounded-below injective complex $I$ on $Y$,
define the exceptional inverse-image candidate to be the sheaf complex with
open sections $\operatorname{Hom}_Y^\bullet(f_!K_U,I)$.
[[thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]]
proves that this candidate is a sheaf complex and is independent of the chosen
resolution. Set $\omega_X=a_X^!k$ and $D_XA=R\mathcal Hom(A,\omega_X)$ when the
terminal map satisfies the same finite-dimensional hypotheses. Constructible
restriction is a separate geometric theorem; none of these definitions asserts
a generic six-functor axiom.

The prescriptions are those of Verdier's exposé: $f^*$ is the exact inverse
image, $f_!$ is the sheaf of sections whose closed support is proper over the
base — a presheaf by the local nature of properness, whose sheaf property for every sheaf is proved by the exceptional-adjoint theorem
recorded in `justified_by` — $Rf_*$ is derived from the direct image
[[def-direct-image-sheaf]] on bounded-below injective replacements, and the
terms of the chosen finite resolution are fibrewise $c$-soft, not
necessarily $c$-soft on $X$. Their acyclicity for $f_!$ follows from the
fibre formula in its well-definedness theorem; the restricted fibre sheaves
are compact-support acyclic by
[[lem-c-soft-field-sheaves-are-compact-support-acyclic]].
The ordinary-operations lemma also supplies the flasque acyclicity
([[def-flasque-sheaf]]) used to compare resolutions. AC supplies the injective replacements and finite fibrewise-soft
resolution; the proper-support sections, extension by zero and the
exceptional candidate itself are choice-free constructions. Cohomological
shifts obey $H^i(A[r])=H^{i+r}(A)$ in the convention of
[[def-derived-category-of-an-abelian-category]].

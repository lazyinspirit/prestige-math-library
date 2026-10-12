---
id: def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces
kind: definition
title: Derived operations on analytic field sheaves
status: draft
origin: pipeline
deps:
- lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions
- lem-c-soft-field-sheaves-are-compact-support-acyclic
- lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Verdier, Dualité dans la cohomologie des espaces localement compacts, exposé300
    url: https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf
  - title: Stacks Project, Cohomology of Sheaves §§16–18
    url: https://stacks.math.columbia.edu/download/cohomology.pdf
justified_by:
- thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint
verification:
  precheck: n/a
---

## Definition

Let $k$ be a field and $X,Y$ locally compact Hausdorff spaces. Write $\mathrm{Sh}_k(X)$ for sheaves of $k$-vector spaces, viewed as modules over the constant ring sheaf $k_X$, and form derived categories in all those sheaves. For a continuous $f:X\to Y$, set $f^*=f^{-1}$ and define $f_!F$ on an open $V\subset Y$ to consist of sections on $f^{-1}V$ whose closed support maps properly to $V$. Under AC, $Rf_*$ and $Rf_!$ are computed on bounded-below $k$-linear injective replacements. Tensor means signed total tensor over $k$, and internal derived Hom uses the injective construction of the ordinary-operations lemma.

Suppose the uniform all-fibre-open cohomological dimension bound of the bounded-soft-resolution lemma holds. Choose its finite resolution $k_X\to K$. For an open $U\subset X$ put $K_U=j_{U!}j_U^*K$. For a bounded-below injective $I$ on $Y$, define the exceptional inverse-image candidate by the sheaf complex with open sections $\operatorname{Hom}_Y^\bullet(f_!K_U,I)$. The adjoint theorem proves this candidate is a sheaf and is independent of the chosen resolution. Set $\omega_X=a_X^!k$ and $D_XA=R\mathcal Hom(A,\omega_X)$ when the terminal map has the same finite-dimensional hypotheses. Constructible restriction is a separate geometric theorem; none of these definitions asserts a generic six-functor axiom. AC is used for injective replacements. Cohomological shifts obey $H^i(A[r])=H^{i+r}(A)$.

---
id: def-adelic-metrized-line-bundle-over-function-curve
kind: definition
title: "Adelic metrized line bundles over a function curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-one-variable-function-field-dynamical-setting
  - def-invertible-sheaf
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: direct
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§§2.1–2.4, Definitions 2.1–2.5"
verification: {}
---

## Definition

Let $K=k(B)$ be a one-variable function field, let $X/K$ be a geometrically normal, geometrically integral projective variety, and let $L$ be an invertible sheaf on $X$. A **model** of $X$ is a projective flat scheme $\mathcal X\to B$ with generic fibre identified with $X$. A line bundle $\mathcal L$ on $\mathcal X$ inducing $L$ on the generic fibre gives a model metric on $L$ at each place $v$ of $K$, by completing the model at $v$ and using the model norm on the analytification over $K_v$. An **adelic metric** on $L$ is a family of continuous metrics on these analytifications, one for each place, which agrees with a model metric at all but finitely many places; limits are taken in the maximum of the local supremum norms. An adelic metrized line bundle is **nef** if it is a limit of model metrics induced by line bundles that have nonnegative degree on every integral curve of the global projective $k$-model, and is **integrable** if it is a difference of two nef adelic metrized line bundles. It is **flat** if, for every place $v$ of $K$, every projective curve $C/K_v$, and every $K_v$-morphism $g:C\to X_{K_v}$, the first-Chern measure $c_1(g^*\bar L_v)$ of the pulled-back continuous metric vanishes on the Berkovich analytification $C^{\mathrm{an}}$. Here $c_1$ is the signed Radon measure from local metric intersection theory: for model metrics its integrals are the corresponding model intersection numbers, and for integrable metrics it is obtained by uniform limits of model metrics. Isometry classes of integrable adelic metrized line bundles form the integrable adelic Picard group.

For integrable adelic metrized line bundles $\bar L_0,\ldots,\bar L_r$ and a projective $r$-dimensional subvariety $Y\subseteq X$ with rational sections whose common divisor supports avoid $Y$, use order-normalized local terms ($|\pi_v|_v=e^{-1}$ for a uniformizer) and write their global intersection for the sum over the places $v$ of $[k(v):k]$ times the local intersection numbers on the analytifications over $K_v$, whenever convergence, normalization and model independence are established. Here $k(v)$ is the residue field of the closed point $v$ of $B$; equivalently the degree weights may be absorbed into the normalized local terms. For a point $P$ over a finite extension $E/K$, its normalized height is $[E:K]^{-1}$ times the intersection of the metrized line bundle with the image of $\operatorname{Spec}E\to X$, when the product is well-defined; on the normalization of $B$ in $E$, the order-normalized local terms carry weights $[k(w):k]/[E:K]$. For arbitrary $k$, compatibility with finite extensions and descent, including inseparable ones, remains a local proof obligation, not a consequence of this notation. The height of an $r$-dimensional subvariety is its $(r+1)$-fold self-intersection divided by $(r+1)$ times its $r$-fold degree. Its first essential minimum is the supremum, over nonempty open subsets $U$, of the infimum of point heights on $U(\overline K)$.

## Definition references

[[def-one-variable-function-field-dynamical-setting]]

[[def-invertible-sheaf]]

[Carney, Definition 2.6](https://arxiv.org/pdf/1810.06342v2)

## Facts & Assumptions

**Given:** A one-variable function-field datum $K=k(B)$; a geometrically normal, geometrically integral projective $K$-variety $X$; and an invertible sheaf $L$ on $X$.

[F1] The base curve has one closed point for each place of $K$; model metrics are obtained by completing a model over the corresponding valuation ring. ([[def-one-variable-function-field-dynamical-setting]])

[F2] An invertible sheaf is a line bundle. When a line bundle on a specified projective flat model restricts to $L$ on the generic fibre, it is a model for $L$; existence after refinement is a separate model-extension obligation. ([[def-invertible-sheaf]])

## Verification

1.1 For a fixed model, completion at each closed point supplies the local model norm; the stated adelic condition requires only finitely many deviations from that common model family. Thus the family has the finiteness condition in the definition. [given, F1, F2, algebra]

2.1 Limits of nef model metrics are nef by definition, and a difference of two such limits is integrable. The displayed intersection sum fixes the notation for those local terms when convergence, residue-degree normalization, finite-extension compatibility and independence are available; no such existence or descent claim is part of this definition. [given, F1, algebra] ∎

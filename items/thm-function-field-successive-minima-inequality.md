---
id: thm-function-field-successive-minima-inequality
kind: theorem
title: "Successive-minima inequality for nef adelic heights"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-adelic-metrized-line-bundle-over-function-curve
  - thm-function-field-adelic-intersection-product-exists
  - lem-fixed-support-nef-localization-and-model-minima-in-zf
justified_by: []
proof_strategy: direct
axiom_use: The construction uses only finitely many witnesses per prescribed tolerance and does not assume countable choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§2.4, Proposition 2.13"
---

## Statement

Let $k$ be algebraically closed, let $K=k(B)$ for a smooth projective curve $B/k$, let $X/K$ be projective, let $Y\subseteq X$ be an irreducible subvariety, and let $\bar N$ be an integrable adelic metrized line bundle that is nef, whose underlying line bundle is ample on $Y$. Put $r=\dim Y$, define $h_{\bar N}(Y)=\bigl((\bar N|_Y)^{r+1}\cdot Y\bigr)/\bigl((r+1)((\bar N|_Y)^r\cdot Y)\bigr)$, and define $\lambda_1(Y,\bar N)=\sup_{U\subseteq Y\text{ nonempty open}}\inf_{P\in U(\overline K)}h_{\bar N}(P)$. Then
$$
\lambda_1(Y,\bar N)\ge h_{\bar N}(Y)\ge0.
$$
In particular, if a Zariski-dense subset of $Y(\overline K)$ has $\bar N$-height zero, then $h_{\bar N}(Y)=0$.

## Statement references

[[def-adelic-metrized-line-bundle-over-function-curve]]

## Facts & Assumptions

**Given:** A function curve $K/k$; a projective variety $X/K$; an irreducible subvariety $Y$; and a nef adelic metrized line bundle $\bar N$ ample on $Y$.

[F1] Nefness, adelic point heights, and subvariety intersection heights use the model-limit definitions. ([[def-adelic-metrized-line-bundle-over-function-curve]])

[F2] For every integral projective subvariety and every nef metric with ample underlying bundle, the model minima inequality passes through fixed-support localization without assuming a globally uniform point-height bound for varying exceptional sets. [[lem-fixed-support-nef-localization-and-model-minima-in-zf]]

## Proof

1.1 The hypothesis says the restriction of the nef metric to $Y$ is a uniform limit of restrictions of globally nef model metrics. On the closure of $Y$ in a common model, pullback preserves curve-nefness: every curve has either point image, giving degree zero, or a curve image with a positive finite mapping degree. Thus the restriction satisfies [F2] with its ample underlying bundle. Apply [F2] to obtain $\lambda_1(Y,\bar N)\ge h_{\bar N}(Y)\ge0$, with the displayed original normalization. [F1, F2, given, algebra]

2.1 If zero-height points are Zariski dense in $Y$, every nonempty open $U\subseteq Y$ contains such a point, so $\inf_{P\in U(\overline K)}h_{\bar N}(P)\le0$. Taking the supremum over $U$ gives $\lambda_1(Y,\bar N)\le0$. Step 1.1 gives $0\le h_{\bar N}(Y)\le\lambda_1(Y,\bar N)\le0$, hence the stated height vanishes. No dense sequence or countable choice is needed. [step 1.1, given, algebra] ∎

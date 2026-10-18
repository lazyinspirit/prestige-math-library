---
id: def-na-contravariant-piola-map
kind: definition
title: Contravariant Piola map
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part III Chapter 14: H(div) finite elements"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap14.pdf
      locator: "Complete chapter, §14.4, equations (14.8)–(14.12): contravariant Piola mapping and facet flux transformation."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1, equation (2.1.69) and Lemmas 2.1.6–2.1.7."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $\widehat K,K\subset\mathbb R^d$ be nondegenerate open simplices and let $F_K:\widehat K\to K$ be the orientation-preserving affine bijection $F_K(\widehat x)=A_K\widehat x+b_K$, where $J_K:=\det A_K>0$. For a measurable vector field $\widehat v$ on $\widehat K$, define its contravariant Piola push-forward by
$$
(\mathcal P_K\widehat v)(x):=J_K^{-1}A_K\widehat v(F_K^{-1}(x)),\qquad x\in K.
$$
The inverse pull-back is $\widehat v(\widehat x)=J_KA_K^{-1}v(F_K(\widehat x))$. Facet normals are oriented consistently with the chosen orientation of $F_K$; the associated oriented surface vector transforms by $n\,ds=J_KA_K^{-T}\widehat n\,d\widehat s$.

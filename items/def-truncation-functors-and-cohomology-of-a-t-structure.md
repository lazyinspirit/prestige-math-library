---
id: def-truncation-functors-and-cohomology-of-a-t-structure
kind: definition
title: "Truncation functors, t-cohomology, amplitude and bounded t-structures"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-canonical-t-structure-on-a-derived-category, def-triangulated-category]
justified_by: [lem-truncation-triangles-are-essentially-unique-and-functorial, lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "A. A. Beilinson, J. Bernstein and P. Deligne, «Faisceaux pervers», Astérisque 100 (1982), Société Mathématique de France (complete numdam PDF)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "§1.3.1–1.3.9, printed pp. 28–33; §5.4.10–5.4.13, printed pp. 143–147"
---

## Definition

Let $(\mathcal T^{\le0},\mathcal T^{\ge0})$ be a t-structure on a triangulated category $\mathcal T$ with translation $[1]$ ([[def-canonical-t-structure-on-a-derived-category]], [[def-triangulated-category]]), and set $\mathcal T^{\le n}:=\mathcal T^{\le0}[-n]$ and $\mathcal T^{\ge n}:=\mathcal T^{\ge0}[-n]$ for $n\in\mathbb Z$; thus $X\in\mathcal T^{\le n}$ exactly when $X[n]\in\mathcal T^{\le0}$, and $X\in\mathcal T^{\ge n}$ exactly when $X[n]\in\mathcal T^{\ge0}$.

For $X\in\mathcal T$ and $n\in\mathbb Z$, the t-structure axiom applied to the translate $X[n]$ and then shifted by $[-n]$ produces a distinguished triangle
$$\tau_{\le n}X\longrightarrow X\longrightarrow\tau_{\ge n+1}X\longrightarrow\tau_{\le n}X[1]$$
with $\tau_{\le n}X\in\mathcal T^{\le n}$ and $\tau_{\ge n+1}X\in\mathcal T^{\ge n+1}$; such a triangle is a **truncation triangle** of $X$ at $n$. Truncation triangles of the same $X$ at the same $n$ are canonically isomorphic over $X$, so the objects and maps occurring in them are determined up to a unique compatible isomorphism ([[lem-truncation-triangles-are-essentially-unique-and-functorial]]); one writes $\tau_{\le n}$ and $\tau_{\ge n}$ for the resulting **truncation functors**.

The **t-cohomology** of $X$ is
$$H^n_t(X):=(\tau_{\le n}\tau_{\ge n}X)[n],$$
an object of the heart $\mathcal C=\mathcal T^{\le0}\cap\mathcal T^{\ge0}$ ([[lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude]]). The **amplitude** of $X$ is the set of $n$ with $H^n_t(X)\not\cong0$; it is *contained in* an interval $[a,b]$ when $H^n_t(X)=0$ for every $n\notin[a,b]$. The t-structure is **bounded** when every object of $\mathcal T$ lies in $\mathcal T^{\le n}\cap\mathcal T^{\ge -n}$ for some integer $n$ depending on the object.

This item fixes notation and conventions only. Existence of the truncation triangle is the t-structure axiom itself, applied to $X[n]$ and shifted; the essential uniqueness of that triangle, the functoriality of the truncations and all algebraic properties of $\tau_{\le n}$, $\tau_{\ge n}$ and $H^n_t$ are proved in the two immediately following lemmas.

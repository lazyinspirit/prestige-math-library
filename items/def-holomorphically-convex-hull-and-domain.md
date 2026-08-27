---
id: def-holomorphically-convex-hull-and-domain
kind: definition
title: "Holomorphic hulls and holomorphic convexity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-holomorphic-function-in-several-complex-variables]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.6"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.3"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C^m$ be a domain and let $E\subseteq\Omega$. The
**holomorphic hull** of $E$ in $\Omega$ is

$$\widehat E_\Omega:=\{a\in\Omega: |f(a)|\le\sup_{z\in E}|f(z)|\text{ for every }f\in\mathcal O(\Omega)\},$$

where the supremum is taken in $[0,\infty]$.

If $K\Subset\Omega$ is compact, then $\Omega$ is **holomorphically convex** when
$\widehat K_\Omega\Subset\Omega$ for every such $K$.

## Remarks

The extended supremum is deliberate. For an arbitrary set $E$, some holomorphic
functions may be unbounded on $E$, and then the corresponding inequality in the
definition is automatic.

The empty-set case is harmless: the constant function $1$ shows
$\widehat\varnothing_\Omega=\varnothing$, because
$|1(a)|\le\sup_{\varnothing}|1|=0$ fails at every point.

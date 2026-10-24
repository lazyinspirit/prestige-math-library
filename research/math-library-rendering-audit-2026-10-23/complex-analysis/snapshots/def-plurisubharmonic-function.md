---
id: def-plurisubharmonic-function
kind: definition
title: "Plurisubharmonic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-standard-upper-semicontinuous-subharmonic-convention,
       def-plane-subharmonic-function]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.4"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.4"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C^m$ be a domain. A function
$u:\Omega\to[-\infty,\infty)$ is **plurisubharmonic** when:

1. $u$ is upper semicontinuous;
2. on no connected component of $\Omega$ is $u$ identically $-\infty$;
3. for every $a\in\Omega$ and every nonzero $v\in\mathbb C^m$, the function
   $$u_{a,v}(\lambda):=u(a+\lambda v)$$
   is subharmonic or identically $-\infty$ on each connected component of
   $$\{\lambda\in\mathbb C: a+\lambda v\in\Omega\}.$$

## Remarks

This is the standard upper-semicontinuous convention from
[[rem-standard-upper-semicontinuous-subharmonic-convention]], transported from
the plane definition [[def-plane-subharmonic-function]] to affine complex
lines.

The case $v=0$ is excluded because then the pullback is constant and carries no
information. A line restriction is allowed to be identically $-\infty$ even
though $u$ itself is excluded from being identically $-\infty$ on a component
of $\Omega$.

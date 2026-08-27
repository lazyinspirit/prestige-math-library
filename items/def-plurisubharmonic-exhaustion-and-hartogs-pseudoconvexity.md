---
id: def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity
kind: definition
title: "Plurisubharmonic exhaustions and Hartogs pseudoconvexity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-plurisubharmonic-function,
       def-polydisc-boundary-radius]
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
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.5"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.4"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C^m$ be a domain.

A function $u:\Omega\to\mathbb R$ is a **continuous plurisubharmonic
exhaustion** when $u$ is continuous, plurisubharmonic, and every sublevel set

$$\{z\in\Omega: u(z)\le c\}$$

is compact in $\Omega$ for every real number $c$.

The domain $\Omega$ is **Hartogs pseudoconvex** when the function

$$z\longmapsto -\log\delta_\Omega(z)$$

is plurisubharmonic on $\Omega$, where $\delta_\Omega$ is the equal-radius
polydisc boundary function of [[def-polydisc-boundary-radius]].

When $\Omega=\mathbb C^m$, one has $\delta_\Omega\equiv+\infty$; in this sole
case, the displayed boundary function is by convention the constant function
$0$. Thus the whole space is Hartogs pseudoconvex.

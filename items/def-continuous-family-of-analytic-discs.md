---
id: def-continuous-family-of-analytic-discs
kind: definition
title: "Continuous families of analytic discs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
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
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.5"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.4"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Definition

Write $\mathbb D=\{\lambda\in\mathbb C: |\lambda|<1\}$. A
**continuous family of analytic discs** in $\mathbb C^m$ is a map

$$\Phi:[0,1]\times\overline{\mathbb D}\to\mathbb C^m$$

that is continuous on the product and such that, for every $t\in[0,1]$, the
slice

$$\Phi_t(\lambda):=\Phi(t,\lambda)$$

is holomorphic on $\mathbb D$.

When a domain $\Omega\subseteq\mathbb C^m$ is under discussion, saying that the
family has **boundary in a compact set** $K\Subset\Omega$ means
$\Phi_t(\partial\mathbb D)\subseteq K$ for every $t$, and saying that the
initial disc is **compactly contained** in $\Omega$ means
$\Phi_0(\overline{\mathbb D})\Subset\Omega$.

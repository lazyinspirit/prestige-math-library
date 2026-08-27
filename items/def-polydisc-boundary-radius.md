---
id: def-polydisc-boundary-radius
kind: definition
title: "The equal-radius polydisc boundary function"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-balls-and-polydiscs-in-complex-euclidean-space, def-extended-reals]
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
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.3-3.2.4"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C^m$ be a domain and let $a\in\Omega$. The
**equal-radius polydisc boundary function** of $\Omega$ at $a$ is

$$\delta_\Omega(a):=\sup\{r>0:\Delta_r(a)\subseteq\Omega\}\in(0,+\infty],$$

where $\Delta_r(a)$ is the open polydisc of constant polyradius $r$ from
[[def-balls-and-polydiscs-in-complex-euclidean-space]].

For $E\subseteq\Omega$, define

$$\delta_\Omega(E):=\inf_{a\in E}\delta_\Omega(a).$$

The infimum is taken in the extended nonnegative reals, with
$\delta_\Omega(\varnothing):=+\infty$.

## Remarks

Because $\Omega$ is open, every point $a\in\Omega$ has some positive-radius
polydisc inside $\Omega$, so $\delta_\Omega(a)>0$.

The quantity $\delta_\Omega(a)$ is the distance from $a$ to the complement of
$\Omega$ measured in the sup norm on coordinates, written in the language of
equal-radius polydiscs because that is the form used by the several-variable
Cauchy estimates.

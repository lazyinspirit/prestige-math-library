---
id: lem-cauchy-estimates-propagate-to-holomorphic-hulls
kind: lemma
title: "Cauchy estimates propagate from a compact set to its hull"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphically-convex-hull-and-domain,
       lem-basic-properties-of-the-holomorphic-hull,
       def-polydisc-boundary-radius,
       thm-cauchy-estimates-on-a-polydisc]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.5"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, §3.2.3"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be a domain, let $\varnothing\ne K\Subset\Omega$
be compact, let $0<r<\delta_\Omega(K)$, and define

$$K_r:=\bigcup_{a\in K}\overline\Delta_r(a).$$

Then $K_r\Subset\Omega$. Moreover, for every holomorphic $f$ on $\Omega$ and
every multi-index $\alpha$,

$$\sup_{w\in\widehat K_\Omega} |\partial^\alpha f(w)|\le \alpha!\,r^{-(\alpha_1+\cdots+\alpha_m)}\sup_{z\in K_r}|f(z)|.$$

## Facts & Assumptions

**Given:** A nonempty compact set $K\Subset\Omega$, a number $0<r<\delta_\Omega(K)$, and $f\in\mathcal O(\Omega)$.

[L1] The hull $\widehat K_\Omega$ is characterized by the inequalities against holomorphic functions on $\Omega$ ([[def-holomorphically-convex-hull-and-domain]]).

[L2] If a holomorphic function is defined on a polydisc, then its mixed derivatives satisfy the several-variable Cauchy estimates there ([[thm-cauchy-estimates-on-a-polydisc]]).

[L3] The boundary-radius inequality $r<\delta_\Omega(K)$ means that $\Delta_r(a)\subseteq\Omega$ for every $a\in K$ ([[def-polydisc-boundary-radius]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], every closed polydisc $\overline\Delta_r(a)$ with $a\in K$ lies in $\Omega$. Since $K$ is compact, the union $K_r$ is bounded and closed in $\mathbb C^m$, hence compact, and it lies in $\Omega$. Thus $K_r\Subset\Omega$. [L3, given]

1.2 Fix $a\in K$. Because $\overline\Delta_r(a)\subseteq\Omega$, the function $f$ is holomorphic on $\Delta_r(a)$, so [L2] gives $$|\partial^\alpha f(a)|\le \alpha!\,r^{-(\alpha_1+\cdots+\alpha_m)}\sup_{z\in\overline\Delta_r(a)}|f(z)|\le \alpha!\,r^{-(\alpha_1+\cdots+\alpha_m)}\sup_{z\in K_r}|f(z)|.$$ Therefore the holomorphic function $\partial^\alpha f$ is bounded on $K$ by the displayed constant. [L2, given]

2.1 The function $\partial^\alpha f$ is holomorphic on $\Omega$, so [L1] propagates the step-1.2 bound from $K$ to $\widehat K_\Omega$. This is exactly the stated estimate. [L1, step 1.2] ∎

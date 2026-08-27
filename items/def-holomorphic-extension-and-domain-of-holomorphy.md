---
id: def-holomorphic-extension-and-domain-of-holomorphy
kind: definition
title: "Holomorphic extension and domains of holomorphy in several variables"
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
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §2.1"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Definition

Let $\Omega,\widetilde\Omega\subseteq\mathbb C^m$ be domains with
$\Omega\cap\widetilde\Omega\ne\varnothing$, and let
$f:\Omega\to\mathbb C$ be holomorphic
([[def-holomorphic-function-in-several-complex-variables]]).

A holomorphic function $\widetilde f:\widetilde\Omega\to\mathbb C$ is a
**holomorphic extension of $f$ to $\widetilde\Omega$** when there is a nonempty
open set $W\subseteq\Omega\cap\widetilde\Omega$ such that
$\widetilde f=f$ on $W$.

A domain $\Omega$ is a **domain of holomorphy** when there do not exist domains
$U_1,U_2\subseteq\mathbb C^m$ with

$$\varnothing\ne U_1\subseteq U_2\cap\Omega,\qquad U_2\not\subseteq\Omega,$$

such that **every** holomorphic $f\in\mathcal O(\Omega)$ admits a holomorphic
extension $F_f\in\mathcal O(U_2)$ satisfying $F_f=f$ on $U_1$.

## Remarks

**This page uses the simultaneous-extension convention.** To show that a domain
is not a domain of holomorphy it is enough to find one fixed overlap
$U_1\subseteq U_2\cap\Omega$ from which every holomorphic function on $\Omega$
extends to $U_2$. The continuation is part of the datum for each function, but
the witnessing pair $U_1,U_2$ is common.

**Agreement propagates only on a common connected domain.** If two holomorphic
functions are both defined on one connected domain and agree on a nonempty open
subset, the several-variable identity theorem forces agreement there. In the
definition above, however, $\Omega\cap\widetilde\Omega$ can be disconnected:
agreement on one component need not imply agreement on another. The witnessing
overlap $W$ is therefore part of the extension datum and cannot in general be
changed arbitrarily.

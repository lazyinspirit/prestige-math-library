---
id: def-plane-superharmonic-function
kind: definition
title: "Superharmonic functions on plane domains"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-plane-subharmonic-function]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Boris Khoruzhenko, Potential Theory lecture notes"
      url: "https://www.yumpu.com/en/document/view/12029492/potential-theory"
---

## Definition

Let $\Omega\subseteq\mathbb C$ be a complex domain. A function
$v:\Omega\to(-\infty,\infty]$ is **superharmonic** on $\Omega$ when $-v$ is
subharmonic on $\Omega$ in the sense of [[def-plane-subharmonic-function]].

## Remarks

Thus a superharmonic function is lower semicontinuous, may take the value
$+\infty$, and is excluded from being identically $+\infty$ on a connected
component.

---
id: def-runge-approximation-on-a-plane-domain
kind: definition
title: "Runge approximation on a plane domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-runge-polynomial-approximation]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Lemma 9.2.5 and Corollary 9.2.6"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "M. Weber, Complex Analysis, Theorem 4.4.6"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
pipeline_run: null
---

## Definition

Let $\Omega\subseteq\mathbb C$ be a plane domain, let
$P\subseteq\widehat{\mathbb C}\setminus\Omega$, and let $f:\Omega\to\mathbb C$
be holomorphic.

One says that **$f$ is Runge-approximable on $\Omega$ with poles in $P$** when
there is a sequence of rational functions $(r_n)$ such that every finite pole of
$r_n$ lies in $P\cap\mathbb C$, the only possible pole at infinity also lies in
$P$, and

$$r_n\to f\qquad\text{locally uniformly on }\Omega.$$

If $\widehat{\mathbb C}\setminus\Omega$ is connected and $P=\{\infty\}$, this is
simply **polynomial approximation on $\Omega$**.

## Remarks

The compact-set theorem supplies the local pieces of this definition. The next
theorem upgrades them to a single sequence on the whole domain by choosing an
exhaustion.

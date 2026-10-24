---
id: cor-injective-holomorphic-derivative-nonzero
kind: corollary
title: "An injective holomorphic map has no critical point and is biholomorphic onto its image"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-holomorphic-inverse-function-theorem, thm-open-mapping-theorem-holomorphic-functions, cor-complex-differentiability-implies-continuity, thm-continuous-image-of-a-connected-space, def-biholomorphic-map, def-injection-surjection-bijection]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Injective holomorphic maps are biholomorphic onto their images"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 5.6.3"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, §1.2"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

An injective holomorphic map on a complex domain has nowhere-zero derivative and is biholomorphic onto its open image.

Precisely, if $f:\Omega\to\mathbb C$ is holomorphic and injective on a complex domain, then $f'(a)\ne0$ for every $a\in\Omega$, the set $f[\Omega]$ is a complex domain, and $f:\Omega\to f[\Omega]$ is biholomorphic ([[def-biholomorphic-map]]).

## Facts & Assumptions

**Given:** A holomorphic injective map $f:\Omega\to\mathbb C$ on a complex domain. Injectivity and bijectivity have their set-theoretic meanings ([[def-injection-surjection-bijection]]).

[L1] If $f$ is nonconstant and holomorphic on a complex domain $\Omega$ and $a\in\Omega$, then $f'(a)\ne0$, $\deg_a f=1$, local injectivity at $a$, and biholomorphy between neighbourhoods of $a$ and $f(a)$ are equivalent ([[thm-holomorphic-inverse-function-theorem]]).

[L2] Every nonconstant holomorphic function on a complex domain is an open map ([[thm-open-mapping-theorem-holomorphic-functions]]).

[L3] A complex differentiable function is continuous at every point of complex differentiability ([[cor-complex-differentiability-implies-continuity]]).

[L4] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]], claim 1).

## Proof

**Proof technique:** direct.

1.1 The map $f$ is nonconstant because an open complex domain has distinct points and $f$ is injective. It is locally injective at every $a\in\Omega$, so [L1] gives $f'(a)\ne0$ and a holomorphic local inverse near $f(a)$. [L1, given]

1.2 By [L2], the image $f[\Omega]$ is open. By [L3], $f$ is continuous, so [L4] makes its image connected; it is therefore a complex domain. [L2, L3, L4, given]

2.1 The global set-theoretic inverse $f^{-1}:f[\Omega]\to\Omega$ agrees near every image point with the holomorphic local inverse from step 1.1. Hence $f^{-1}$ is holomorphic throughout the image. [step 1.1, step 1.2]

3.1 The map $f$ is bijective onto its image, and step 2.1 makes its inverse holomorphic; therefore it is biholomorphic onto the open image. [step 2.1] ∎

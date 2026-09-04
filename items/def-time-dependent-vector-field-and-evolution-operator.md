---
id: def-time-dependent-vector-field-and-evolution-operator
kind: definition
title: "Time-dependent vector fields and their evolution operators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-vector-field-as-a-tangent-bundle-section]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Marius Crainic, Rui Loja Fernandes, and Ioan Marcut, Lectures on Poisson Geometry"
      url: "https://webspace.science.uu.nl/~crain101/gsm217.pdf"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Definition

Assume $\mathrm{AC}_\omega$, so that $TM$ carries its canonical smooth
structure. Let $M$ be a smooth manifold, and let $I\subseteq\mathbb R$ be an
interval. A **time-dependent vector field** on $M$ over $I$ is a smooth map

$$ X:I\times M\to TM $$

such that $X(t,p)\in T_pM$ for every $(t,p)\in I\times M$. One often writes
$X_t(p):=X(t,p)$.

An **evolution operator** for $X$ is a family of maps

$$ \Psi_{t,s}:U_s\to U_t $$

defined for pairs $(t,s)$ in some time domain, such that for each $p\in U_s$ the
curve $r\mapsto \Psi_{r,s}(p)$ solves

$$ \frac{d}{dr}\Psi_{r,s}(p)=X_r(\Psi_{r,s}(p)), \qquad \Psi_{s,s}(p)=p. $$

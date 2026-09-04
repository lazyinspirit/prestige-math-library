---
id: ex-localisations-not-faithfully-flat
kind: example
title: "A proper localization is flat but need not be faithfully flat"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisations-are-flat, thm-faithfully-flat-ring-map-characterisations]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, §11"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Example

Assume the Axiom of Choice for the faithfully-flat characterization used below.

The localization map
$$ \mathbb Z\to \mathbb Z\!\left[\frac12\right] $$
is flat but not faithfully flat.

## Facts & Assumptions

**Given:** The Axiom of Choice and the localization map $\mathbb Z\to\mathbb Z[1/2]$.

[L1] Every localization is flat ([[thm-localisations-are-flat]]).

[L2] Faithful flatness is equivalent to preserving proper ideals under extension
([[thm-faithfully-flat-ring-map-characterisations]]).

## Verification

**Proof technique:** direct.


1.1 By [L1], $\mathbb Z[1/2]$ is flat over $\mathbb Z$. [L1, given]


1.2 The proper ideal $(2)\subset\mathbb Z$ becomes the unit ideal after localization, since $2$ is invertible in $\mathbb Z[1/2]$. Thus $(2)\mathbb Z[1/2]=\mathbb Z[1/2]$. By [L2], the map is not faithfully flat. [L2]


2.1 So a proper localization can be flat without being faithfully flat. [algebra] ∎

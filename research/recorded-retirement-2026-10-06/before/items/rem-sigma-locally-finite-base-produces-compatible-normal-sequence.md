---
id: rem-sigma-locally-finite-base-produces-compatible-normal-sequence
kind: remark
title: 'Under choice, a regular $T_1$ space with a $\sigma$-locally-finite basis has a compatible normal sequence'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
proved_here: false
deps: []
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  sources_checked:
    date: 2026-08-01
    scope: exact-statement-and-conventions
    by: Alpha Step-6 audit
external_dependency:
  source_url: "https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1395113"
  exact_statement: "Granath defines regular spaces to be Frechet ($T_1$) spaces with point--closed-set separation (Definitions 2.2.3 and 2.2.7). Under that convention--equivalently, for a regular $T_1$ space in this library--a sigma-locally-finite base admits the normal-cover/development construction used in the Bing-Nagata-Smirnov metrization route."
  local_proof_attempt: "The attempted family {W(B,x):x in B} need not be locally finite even when {B} is: for X=B=R and W(B,x)=(x-1,x+1), every point meets infinitely many shrinkings."
  necessity: "The source-backed metrization route is retained for its downstream comparison theorems, but its normal-cover construction cannot honestly be reconstructed from the in-scope shrinkings alone."
sources:
  scraped: []
  references:
    - title: "Umeå University, The Smirnov- and Bing–Nagata–Smirnov Metrization Theorems"
      url: "https://umu.diva-portal.org/smash/record.jsf?pid=diva2%3A1395113"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. A regular $T_1$ space with a $\sigma$-locally-finite basis has a compatible normal sequence of open covers.

**Source convention.** In Granath's source, regularity is defined only for a
Fréchet space, i.e. a $T_1$ space. The displayed library statement therefore
names $T_1$ separately rather than silently importing that convention.

**Not proved in this library.** This is a source-backed fallback rather than a
local proof. The discarded local route chose a shrinking $W(B,x)$ for every
point of every basis member and claimed that its families stayed locally finite.
That claim is false: with $X=B=\mathbb R$ and the one-member locally finite
family $\{B\}$, the allowed shrinkings $W(B,x)=(x-1,x+1)$ have infinite local
overlap at every point. The standard normal-cover construction needs additional
machinery beyond that failed pointwise shrinking.

**Why it remains visible.** The Nagata--Smirnov comparison below depends on
exactly this standard route. Its dependency marker therefore records that the
result is externally sourced rather than pretending that the invalid local
construction proves it.

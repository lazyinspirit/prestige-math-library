---
id: lem-a-morphism-has-a-comparison-extension-between-the-supplied-injective-resolutions
kind: lemma
title: "A morphism has a comparison extension between the supplied injective resolutions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-supplied-injective-resolution-datum, thm-injective-comparison-map-exists]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $I$ be a supplied injective resolution datum on a class $\mathcal D$ in an
abelian category. For every morphism $u:A\to B$ with $A,B\in\mathcal D$, there
exists a coaugmentation-preserving cochain map
$$\widetilde u^\bullet:I^\bullet(A)\to I^\bullet(B)$$
extending $u$.
## Facts & Assumptions

**Given:** A morphism $u:A\to B$ with $A,B\in\mathcal D$.

[L1] The datum $I$ supplies specific injective resolutions
$A\to I^\bullet(A)$ and $B\to I^\bullet(B)$
([[def-supplied-injective-resolution-datum]]).

[L2] Assuming Dependent Choice, injective comparison maps exist for morphisms
between chosen injective resolutions ([[thm-injective-comparison-map-exists]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the objects $A$ and $B$ come with chosen injective resolutions. [L1, given]

2.1 Apply [L2] to $u:A\to B$ and the resolutions from step 1.1. The resulting coaugmentation-preserving cochain map $\widetilde u^\bullet:I^\bullet(A)\to I^\bullet(B)$ is the required comparison extension. [L2, step 1.1, construct] ∎

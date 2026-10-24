---
id: lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology
kind: lemma
title: "Under the ultrafilter lemma, every ultrafilter algebra determines a compact Hausdorff topology"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology, lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit, thm-compactness-via-nets-filters-and-ultrafilters, def-hausdorff-space, def-ultrafilter-extension-principle]
aliases: []
landmark: true
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
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
pipeline_run: null
---

## Statement

Assume UL/BPI. For every ultrafilter algebra $\xi:\beta X\to X$, the topology induced by $\xi$ is compact and Hausdorff.

## Facts & Assumptions

**Given:** UL/BPI and an ultrafilter algebra $\xi:\beta X\to X$.

[L1] The open-set family induced by an ultrafilter algebra is a topology ([[lem-the-open-sets-induced-by-an-ultrafilter-algebra-form-a-topology]]).

[L2] Under UL/BPI, every ultrafilter has exactly one limit in the induced topology, namely its algebra value ([[lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit]]).

[L3] Under the ultrafilter lemma, a space is compact if and only if every ultrafilter on it converges ([[thm-compactness-via-nets-filters-and-ultrafilters]]).

[L4] The ultrafilter extension principle says that every filter on a set is contained in an ultrafilter on that set ([[def-ultrafilter-extension-principle]]).

## Proof

**Proof technique:** direct.

1.1 Equip $X$ with the topology supplied by [L1]. [L1]

1.2 By [L2], every ultrafilter on $X$ converges, and its limit is unique. [L2]

2.1 The equivalence in [L3] applied to step 1.2 proves that the induced topology is compact. [step 1.2, L3]

2.2 If distinct $x,y$ had no disjoint neighbourhoods, the union of their two neighbourhood filters would have the finite-intersection property. By [L4] it extends to an ultrafilter converging to both $x$ and $y$, contradicting uniqueness in step 1.2. Hence the topology is Hausdorff, with the empty and singleton cases vacuous. [step 1.2, L4, choose]

3.1 Steps 2.1 and 2.2 prove that the induced topology is compact Hausdorff. [step 2.1, step 2.2] ∎

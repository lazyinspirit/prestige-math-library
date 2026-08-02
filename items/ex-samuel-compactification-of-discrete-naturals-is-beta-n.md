---
id: ex-samuel-compactification-of-discrete-naturals-is-beta-n
kind: example
title: "Under dependent choice and the ultrafilter lemma, the Samuel compactification of the discrete natural numbers is beta N"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-samuel-completion-is-a-compactification, thm-samuel-compactification-universal-property, cor-samuel-compactification-is-unique, def-stone-cech-compactification, thm-stone-cech-evaluation-closure-universal-property, cor-separated-uniformizable-iff-tychonoff, lem-metric-uniformity-dictionary, def-metric-space, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Garrido and Meroño, The Samuel realcompactification"
      url: "https://arxiv.org/abs/1706.00279"
    - title: "Stacks Project, Stone-Cech compactification"
      url: "https://stacks.math.columbia.edu/tag/0908"
pipeline_run: null
---

## Example

Assume dependent choice and the ultrafilter lemma. Give $\mathbb N$ the metric $d(m,n)=0$ for $m=n$ and $d(m,n)=1$ otherwise. Its Samuel compactification is isomorphic over $\mathbb N$ to its Stone--Cech compactification $\beta\mathbb N$.

## Facts & Assumptions

**Given:** Dependent choice, the ultrafilter lemma, the set $\mathbb N$, and the displayed zero-one function $d$.

[L1] A metric must satisfy separation, symmetry, and the triangle inequality; its metric entourages are $E_\varepsilon=\{(x,y):d(x,y)<\varepsilon\}$, induce the metric topology, and form a separated uniformity ([[def-metric-space]], [[lem-metric-uniformity-dictionary]]).

[L2] Samuel compactifications extend precisely the uniformly continuous maps to compact Hausdorff targets, and Stone--Cech compactifications extend precisely the continuous maps to those targets ([[thm-samuel-compactification-universal-property]], [[def-stone-cech-compactification]]).

[L3] Under dependent choice, the separated metric uniformity makes the discrete topology on $\mathbb N$ Tychonoff; under the ultrafilter lemma its evaluation closure is a Stone--Cech compactification ([[lem-metric-uniformity-dictionary]], [[cor-separated-uniformizable-iff-tychonoff]], [[thm-stone-cech-evaluation-closure-universal-property]]).

[L4] Under dependent choice and the ultrafilter lemma, the Samuel completion of this separated metric uniformity is a Samuel compactification ([[thm-samuel-completion-is-a-compactification]]).

## Verification

**Proof technique:** direct.

1.1 The displayed $d$ satisfies the metric axioms: if $m\ne n$, then for every $r$ at least one of $m\ne r$ or $r\ne n$ holds, which proves the triangle inequality; symmetry and separation are immediate. [L1]

2.1 The entourage $E_{1/2}$ is the diagonal. Therefore every map from $\mathbb N$ to a uniform space is uniformly continuous, since every target entourage contains the diagonal; every map from the discrete topology is continuous. [L1, step 1.1]

3.1 The two extension properties in [L2] consequently quantify over the same maps from $\mathbb N$; using the Samuel compactification whose existence is given by [L4], they yield inverse maps between $S(\mathbb N)$ and $\beta\mathbb N$ fixing $\mathbb N$. [L2, L4, step 2.1]

4.1 The Stone--Cech object exists by [L3] and the Samuel compactification by [L4]; the two inverse maps give the asserted isomorphism over $\mathbb N$. [L3, L4, step 3.1] ∎

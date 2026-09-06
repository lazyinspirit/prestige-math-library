---
id: def-h-five-overlap-blockade-and-iterated-mixed-quotients
kind: definition
title: "The $H_5$-overlap blockade and its iterated mixed quotients"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-h-five-overlap-chain-relation-in-a-comb-block, def-quotient-blockade-by-mixed-block-reachability]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, proof of Lemma 6.4"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Definition

For a comb block $B_i$, suppose $X_i\ne\varnothing$ and let
$\mathcal L^1$ be the ordered blockade whose blocks are the $H_5$-overlap
classes in $X_i$, ordered by their least vertex in a fixed ordering of $B_i$.
Having defined $\mathcal L^s$, put
$$\mathcal L^{s+1}:=\mathcal L^s/\mathcal M_s,$$
where $\mathcal M_s$ is its mixed-block reachability relation. These are the
**iterated mixed quotients of the $H_5$-overlap blockade**.

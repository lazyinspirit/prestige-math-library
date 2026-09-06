---
id: prop-each-tor-construction-is-covariant-in-both-variables
title: "Each resolution-defined Tor construction is covariant in both variables"
kind: proposition
status: draft
origin: pipeline
deps: ["def-tor-by-resolving-the-left-module", "def-tor-by-resolving-the-right-module", "thm-projective-comparison-map-exists", "thm-projective-comparison-maps-are-unique-up-to-chain-homotopy"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The homology groups obtained by resolving either variable define covariant functors of the right module $N$ and the left module $M$.

## Proof

**Given:** module maps $u:N\to N^\prime$ and $v:M\to M^\prime$ and chosen projective resolutions.

1.1 A comparison map lifting $v$ is a chain map $P_\bullet\to P_\bullet^\prime$; tensoring with $N$ gives a chain map $N\otimes P_\bullet\to N\otimes P_\bullet^\prime$, while $u\otimes1$ handles the first variable. [given]

2.1 Chain-homotopic comparison maps induce the same map on homology, so the map of $\operatorname{Tor}$ does not depend on the chosen lift of $v$. [step 1.1, algebra]

3.1 Composition of comparison maps is chain-homotopic to a comparison map for the composite, hence identity and composition laws hold on homology; the right-resolved construction is identical with the variables interchanged. [step 2.1, algebra] ∎

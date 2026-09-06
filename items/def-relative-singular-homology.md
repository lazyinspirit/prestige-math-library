---
id: def-relative-singular-homology
kind: definition
title: "Relative singular homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-chain-complex-of-a-pair, lem-singular-boundary-descends-to-relative-chains]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Definition

The **relative singular homology group** of $(X,A)$ in degree $n$ is
$$H_n(X,A;G):=H_n(C_\bullet(X,A;G))=\ker\bar\partial_n/\operatorname{im}\bar\partial_{n+1}.$$
Equivalently, a relative cycle is an ordinary finite chain $c$ with
$\partial c\in C_{n-1}(A;G)$, modulo adding a chain in $A$ and an ordinary
boundary.

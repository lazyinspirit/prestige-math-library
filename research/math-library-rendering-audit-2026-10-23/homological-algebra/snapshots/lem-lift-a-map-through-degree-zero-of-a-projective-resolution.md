---
id: lem-lift-a-map-through-degree-zero-of-a-projective-resolution
kind: lemma
title: "Lifting a map through degree zero of a projective resolution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-augmentation-preserving-map-of-projective-resolutions, def-projective-object]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Statement

Let $u:A\to B$ be a morphism, let $P_\bullet\to A$ be a projective resolution, and let $Q_\bullet\to B$ be a projective resolution. Then there exists a morphism $f_0:P_0\to Q_0$ such that $$\varepsilon_Qf_0=u\varepsilon_P.$$
## Facts & Assumptions

**Given:** The morphism $u:A\to B$ and projective resolutions $P_\bullet\to A$, $Q_\bullet\to B$.

[L1] An augmentation-preserving comparison map is required to satisfy $$\varepsilon_Qf_0=u\varepsilon_P$$ at degree zero ([[def-augmentation-preserving-map-of-projective-resolutions]]).

[L2] Projective objects lift across epimorphisms ([[def-projective-object]]).
## Proof

**Proof technique:** direct.

1.1 The augmentation $\varepsilon_Q:Q_0\twoheadrightarrow B$ is epic, and $P_0$ is projective. Apply [L2] to the composite $u\varepsilon_P:P_0\to B$ to obtain a lift $f_0:P_0\to Q_0$ with $\varepsilon_Qf_0=u\varepsilon_P$. [L2, given, construct]

2.1 By [L1], the map $f_0$ of step 1.1 is exactly the required degree-zero part of an augmentation-preserving comparison map. [L1, step 1.1] ∎

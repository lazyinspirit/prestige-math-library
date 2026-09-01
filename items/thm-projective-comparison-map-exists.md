---
id: thm-projective-comparison-map-exists
kind: theorem
title: "Projective comparison maps exist"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-projective-resolution-in-an-abelian-category, def-augmentation-preserving-map-of-projective-resolutions, lem-extend-a-partial-comparison-map-by-one-degree, lem-lift-a-map-through-degree-zero-of-a-projective-resolution, def-dependent-choice]
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

Assume the Axiom of Dependent Choice.

Let $u:A\to B$ be a morphism, and let $P_\bullet\to A$ and $Q_\bullet\to B$ be projective resolutions. Then there exists an augmentation-preserving chain map $f_\bullet:P_\bullet\to Q_\bullet$ lifting $u$.
## Facts & Assumptions

**Given:** A morphism $u:A\to B$ and projective resolutions $P_\bullet\to A$, $Q_\bullet\to B$.

[L1] Degree zero can be lifted across the target augmentation ([[lem-lift-a-map-through-degree-zero-of-a-projective-resolution]]).

[L2] A partial comparison map extends one degree at a time ([[lem-extend-a-partial-comparison-map-by-one-degree]]).

[L3] The required notion is an augmentation-preserving chain map ([[def-augmentation-preserving-map-of-projective-resolutions]]).

[L4] Dependent choice licenses the countable successor-by-successor selection of compatible lifts ([[def-dependent-choice]]).
## Proof

**Proof technique:** direct.

1.1 By [L1], choose $f_0:P_0\to Q_0$ with $\varepsilon_Qf_0=u\varepsilon_P$. [L1, construct]

2.1 Starting from the degree-zero lift in step 1.1, every partial comparison map through degree $n$ extends to one through degree $n+1$ by [L2]. The successive choices depend on the previously chosen partial map, so [L4] produces maps $f_n$ in every degree. [L2, L4, step 1.1, choose]

3.1 The family $(f_n)$ is a chain map by construction, and step 1.1 gives the augmentation identity. Hence [L3] is satisfied, so $f_\bullet$ is a comparison map lifting $u$. [L3, step 1.1, step 2.1] ∎

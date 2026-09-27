---
id: prop-open-and-residual-subspaces-of-baire-spaces
kind: proposition
title: "Open subspaces and residual subspaces of Baire spaces are Baire"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-baire-space-equivalent-characterisations, prop-meagre-subsets-form-a-sigma-ideal, def-subspace-topology-top]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Every open subspace of a Baire space is Baire. Every residual subspace of a Baire space, with its subspace topology, is Baire.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For a topological space $X$, the following are equivalent: every countable intersection of dense open sets is dense; every countable union of closed sets with empty interior has empty interior; no nonempty open subset is meagre in $X$; and every residual subset meets every nonempty open set. The equivalence includes the empty space. ([[thm-baire-space-equivalent-characterisations]]).

[F2] For every topological space $X$, the meagre subsets of $X$ contain $\varnothing$, are closed under taking subsets, and are closed under countable unions. ([[prop-meagre-subsets-form-a-sigma-ideal]]).

[F3] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is $$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$ the family of **traces** on $S$ of the open sets of $X$. The pair $(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in $\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the ambient space needs emphasis. ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 For an open subspace, translate dense-open tests into the ambient open set. [given, F3, F1]

2.1 For a residual subspace, first note it is dense unless the ambient space is empty, show a relatively nowhere dense set is ambiently nowhere dense, and use the sigma-ideal and nonmeagre-open characterisation. [step 1.1, F1, F3, F2]

3.1 The preceding construction and implications establish the assertion. [step 2.1] ∎

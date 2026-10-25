---
id: prop-continuous-image-density-and-lindelof-degree
kind: proposition
title: "Under choice, a continuous surjection does not increase density or Lindelöf degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-weight-density-and-character, def-lindelof-degree-and-cellularity, def-continuous-map-top, thm-continuity-characterisations-top, lem-density-is-well-defined, lem-lindelof-degree-is-well-defined, def-axiom-of-choice]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---
## Statement
Assume the Axiom of Choice. If $f:X\to Y$ is continuous and onto, then
$d(Y)\le d(X)$ and $L(Y)\le L(X)$.
## Facts & Assumptions
**Given:** The Axiom of Choice and a continuous surjection $f:X\to Y$ ([[def-axiom-of-choice]]).

[L1] A continuous map has open preimages of open sets ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

[L2] The least dense-set cardinality $d(Z)$ and the least cardinal bounding subcovers $L(Z)$ exist for every topological space $Z$ ([[lem-density-is-well-defined]], [[lem-lindelof-degree-is-well-defined]]).
## Proof

**Proof technique:** direct.

1.1 If $D\subseteq X$ is dense, then $f[D]$ is dense in $Y$: a nonempty open $V\subseteq Y$ has nonempty open preimage by surjectivity and [L1], so that preimage meets $D$ and $V$ meets $f[D]$. [L1]

1.2 For an open cover $\mathcal U$ of $Y$, the family $\{f^{-1}[U]:U\in\mathcal U\}$ is an open cover of $X$; a subfamily indexed by at most $L(X)$ members covers $X$, and the corresponding members of $\mathcal U$ cover $Y$ by surjectivity. [L1, L2]

2.1 Taking $D$ with $|D|=d(X)$, step 1.1 gives a dense subset of $Y$ of cardinality at most $d(X)$; hence $d(Y)\le d(X)$ by [L2]. [step 1.1, L2]

3.1 Step 1.2 gives $L(Y)\le L(X)$ by [L2], and together with step 2.1 this proves both inequalities. [step 2.1, step 1.2, L2] ∎

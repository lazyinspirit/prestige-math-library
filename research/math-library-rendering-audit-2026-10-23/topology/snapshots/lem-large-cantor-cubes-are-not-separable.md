---
id: lem-large-cantor-cubes-are-not-separable
kind: lemma
title: "Under choice, if $|I|>2^{\\aleph_0}$, then the Cantor cube $2^I$ is not separable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, def-separable-space, def-cardinal-arithmetic, thm-cardinal-power-set-and-cantor, def-axiom-of-choice, lem-countable-iff-surjection-from-n]
aliases: []
proof_strategy: contradiction
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
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "Cantor cube (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_cube"
pipeline_run: null
---
## Statement
Assuming choice, $|I|>2^{\aleph_0}$ implies $2^I$ is not separable.
## Facts & Assumptions
**Given:** Choice, $|I|>2^{\aleph_0}$, and the product topology on $2^I$.

[L1] Every nonempty at most countable set is a surjective image of $\mathbb N$ ([[lem-countable-iff-surjection-from-n]]).

[L2] The binary sequences have cardinality $2^{\aleph_0}$ ([[def-cardinal-arithmetic]], [[thm-cardinal-power-set-and-cantor]]).

[F1] A condition on finitely many coordinates defines a basic open cylinder ([[def-product-topology]]).
## Proof

**Proof technique:** contradiction.

1.1 Suppose $D\subseteq2^I$ is at most countable and dense. It is nonempty because $2^I$ is nonempty, so choose a surjection $s:\mathbb N\to D$ by [L1]. For each $i\in I$ define its column $c_i\in2^{\mathbb N}$ by $c_i(n)=s(n)(i)$. [L1, assume-contra, construct]

2.1 By [L2] there are only $2^{\aleph_0}$ possible columns, whereas $|I|>2^{\aleph_0}$. Thus distinct $i,j\in I$ have $c_i=c_j$, which says $d(i)=d(j)$ for every $d\in D$ because $s$ is onto. [step 1.1, L2]

3.1 The cylinder $$\{x\in2^I:x(i)=0,\ x(j)=1\}$$ is nonempty and open by [F1], but step 2.1 makes it disjoint from $D$, contradicting density. Hence $2^I$ is not separable. [step 2.1, F1, discharge-contradiction] ∎

---
id: lem-samuel-uniformity-preserves-the-induced-topology-under-dependent-choice
kind: lemma
title: "Assuming dependent choice, the Samuel uniformity induces the original topology"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-samuel-uniformity, lem-samuel-function-pseudometrics-and-coarsening, lem-normal-sequences-of-entourages, lem-pseudometric-from-a-normal-entourage-sequence, thm-uniformity-induces-a-topology, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Wodzicki, Uniform Structure"
      url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"
pipeline_run: null
---

## Statement

**Assume dependent choice.** The topology induced by $\mathcal U_S$ equals the topology induced by $\mathcal U$.

## Facts & Assumptions

**Given:** Dependent choice, an original-open set $O\subseteq X$, and a point $x\in O$.

[L1] The Samuel uniformity is coarser than the original uniformity ([[lem-samuel-function-pseudometrics-and-coarsening]]).

[L2] Entourage balls form a neighbourhood base for the induced topology ([[thm-uniformity-induces-a-topology]]).

[L3] Under dependent choice, every entourage $U$ has a decreasing normal symmetric sequence with $E_1\subseteq U$ ([[lem-normal-sequences-of-entourages]], [[def-dependent-choice]]).

[L4] A normal sequence gives a uniformly continuous pseudometric $p$ with $\{p\le2^{-2}\}\subseteq E_1$ ([[lem-pseudometric-from-a-normal-entourage-sequence]]).

[L5] The ball of a Samuel coordinate is a Samuel entourage-ball ([[def-samuel-uniformity]]).

## Proof

**Proof technique:** constructive.

1.1 Since $\mathcal U_S\subseteq\mathcal U$, every Samuel-open set is original-open. [L1, L2]

1.2 Choose $U\in\mathcal U$ with $U[x]\subseteq O$, take the sequence of [L3], and take the pseudometric $p$ of [L4]; then $\{y:p(x,y)\le1/4\}\subseteq O$. [L2, L3, L4]

1.3 Put $f(y)=\min\{1,4p(x,y)\}$. The reverse triangle inequality for a pseudometric and the uniform continuity of $p$ make $f$ uniformly continuous, so $f\in\mathcal F_{\mathcal U}$ and $f(x)=0$. [L4, construct]

2.1 The Samuel neighbourhood $\{y:|f(y)-f(x)|<1\}$ lies in $\{y:p(x,y)<1/4\}\subseteq O$, so every original-open set is Samuel-open. [L5, step 1.2, step 1.3]

3.1 The two inclusions in steps 1.1 and 2.1 give equality of the topologies; for $X=\varnothing$ both are the empty topology. [step 1.1, step 2.1, discharge-construct] ∎

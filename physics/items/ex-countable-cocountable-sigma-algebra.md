---
id: ex-countable-cocountable-sigma-algebra
kind: example
title: "Assuming countable choice, the countable-cocountable family is a sigma-algebra"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sigma-algebra, def-countable, def-countable-choice, thm-countable-union-of-countable, lem-subset-of-countable]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Example 2.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Example

Assume $\mathrm{AC}_\omega$. For a set $X$, define

$$\mathcal C:=\{A\subseteq X:A\text{ is at most countable or }X\setminus A\text{ is at most countable}\}.$$

Then $\mathcal C$ is the **countable-cocountable sigma-algebra** on $X$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a set $X$.

[L1] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).

[L2] At most countable means finite or countably infinite ([[def-countable]]).

[L3] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L4] A sigma-algebra contains the empty set and is closed under complements and countable unions ([[def-sigma-algebra]]).

## Verification

**Proof technique:** direct.

1.1 The empty set is at most countable. Complementation exchanges the two alternatives in the definition of $\mathcal C$, so $\mathcal C$ contains $\varnothing$ and is complement-closed. [L2, algebra]

1.2 Let $(A_n)$ lie in $\mathcal C$. If every $A_n$ is at most countable, [L1] makes $\bigcup_nA_n$ at most countable. If some $A_j$ is cocountable, then $X\setminus\bigcup_nA_n\subseteq X\setminus A_j$ is at most countable by [L3]. In either case the union lies in $\mathcal C$. [L1, L2, L3]

2.1 Steps 1.1 and 1.2 verify all axioms in [L4], so $\mathcal C$ is a sigma-algebra on $X$. [step 1.1, step 1.2, L4] ∎

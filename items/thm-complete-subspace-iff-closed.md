---
id: thm-complete-subspace-iff-closed
kind: theorem
title: "A subspace of a complete metric space is complete iff it is closed, and a complete subspace of any metric space is closed"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-metric-space, def-isometry-and-metric-embedding,
       thm-metric-sequential-closure, def-metric-topology, def-cauchy-in-metric,
       lem-metric-limits-unique, lem-metric-convergent-implies-cauchy,
       def-metric-convergence, def-metric-interior-closure-boundary,
       def-metric-space, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "complete subspace $=$ closed"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$
carry the subspace metric $d_A$ ([[def-isometry-and-metric-embedding]]). Then:

1. If $(A,d_A)$ is complete ([[def-complete-metric-space]]), then $A$ is closed
   in $(X,d)$ ([[def-metric-topology]]). **No hypothesis on $X$ is needed.**
2. If $(X,d)$ is complete and $A$ is closed in $(X,d)$, then $(A,d_A)$ is
   complete.

Consequently, for a complete $(X,d)$ a subset $A \subseteq X$ is complete if and
only if it is closed.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and a subset $A \subseteq X$ with the subspace metric $d_A = d \restriction (A \times A)$.

[A1] Completeness of $(A,d_A)$: every $d_A$-Cauchy sequence in $A$ converges in $(A,d_A)$ to a point of $A$ ([[def-complete-metric-space]], [[def-cauchy-in-metric]]).

[A2] Completeness of $(X,d)$: every $d$-Cauchy sequence in $X$ converges in $(X,d)$ to a point of $X$ ([[def-complete-metric-space]]).

[L1] Distances inside $A$ are computed in $X$: $d_A(a,b) = d(a,b)$ for $a,b \in A$ ([[def-isometry-and-metric-embedding]]). Hence a sequence in $A$ is $d_A$-Cauchy exactly when it is $d$-Cauchy, and for $p \in A$ it converges to $p$ in $(A,d_A)$ exactly when it converges to $p$ in $(X,d)$ ([[def-cauchy-in-metric]], [[def-metric-convergence]]).

[L2] A point lies in $\overline{A}$ if and only if some sequence in $A$ converges to it in $(X,d)$; and a subset $F \subseteq X$ is closed if and only if every sequence in $F$ converging in $X$ has its limit in $F$ ([[thm-metric-sequential-closure]], [[def-metric-interior-closure-boundary]]). The first claim, in the direction that manufactures a sequence, spends the Axiom of Countable Choice ([[def-countable-choice]]).

[L3] A convergent sequence in a metric space is Cauchy ([[lem-metric-convergent-implies-cauchy]]).

[L4] Limits in a metric space are unique ([[lem-metric-limits-unique]]).

[L5] $A$ is closed in $(X,d)$ if and only if $\overline{A} = A$, and $A \subseteq \overline{A}$ always ([[thm-metric-sequential-closure]], [[def-metric-interior-closure-boundary]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 For claim 1, assume [A1] and let $x \in \overline{A}$; by [L2] there is a sequence $(a_k)$ with $a_k \in A$ for every $k$ and $a_k \to x$ in $(X,d)$. [A1, L2]

1.2 For claim 2, assume [A2], assume $A$ closed, and let $(a_k)$ be a $d_A$-Cauchy sequence in $A$; by [L1] it is $d$-Cauchy in $X$, so by [A2] it converges in $(X,d)$ to some $x \in X$. [A2, L1]

2.1 That sequence is $d$-Cauchy by [L3], hence $d_A$-Cauchy by [L1], since all its terms lie in $A$. [step 1.1, L1, L3]

2.2 The sequence lies in $A$ and converges in $X$, and $A$ is closed, so $x \in A$ by [L2]; by [L1] the sequence then converges to $x$ in $(A,d_A)$, and $x \in A$, so $(A,d_A)$ is complete. This is claim 2. [step 1.2, L1, L2]

3.1 By [A1] it therefore converges in $(A,d_A)$ to some $a \in A$, and by [L1] it converges to $a$ in $(X,d)$ as well. [step 2.1, A1, L1]

4.1 The sequence converges in $(X,d)$ both to $x$ and to $a$, so $x = a \in A$ by [L4]; as $x \in \overline{A}$ was arbitrary, $\overline{A} \subseteq A$, hence $\overline{A} = A$ and $A$ is closed. This is claim 1. [step 1.1, step 3.1, L4, L5]

5.1 Claims 1 and 2 hold, by steps 4.1 and 2.2; for a complete $(X,d)$ they combine into the stated equivalence. [step 4.1, step 2.2] ∎

## Remarks

- **Claim 1 needs nothing about $X$.** A complete subspace is closed in whatever ambient metric space it sits in, complete or not, because the argument only compares a limit that exists in $X$ with a limit that exists in $A$ and uses uniqueness. This is what makes completeness so useful as a hypothesis: it is inherited downward by closed subsets and it forces closedness upward.
- **Both directions are genuinely about the metric.** $A$ closed and $X$ complete are hypotheses about $(X,d)$; replacing $d$ by a topologically equivalent metric preserves closedness and can destroy completeness ([[fs-completeness-is-a-topological-property]]), so no reading of this theorem survives the passage to the bare topology.
- **Where choice enters.** Only in claim 1, and only through [[thm-metric-sequential-closure]], whose forward direction spends $\mathrm{AC}_\omega$ ([[def-countable-choice]]) to manufacture a sequence out of adherence. Claim 2 uses the choice-free direction of that theorem.
- **The standard application.** A closed interval, a closed ball, or any closed subset of $\mathbb{R}^n$ is a complete metric space, because $\mathbb{R}^n$ is ([[thm-euclidean-space-complete]]). Every appeal to Banach's fixed point theorem on a closed subset of $\mathbb{R}^n$ passes through this remark.

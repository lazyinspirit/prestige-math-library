---
id: thm-complete-subspace-iff-closed
kind: theorem
title: "Closed subspaces of complete metric spaces are complete; the converse under countable choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-metric-space, def-isometry-and-metric-embedding,
       thm-metric-sequential-closure, def-metric-topology, def-cauchy-in-metric,
       lem-metric-limits-unique, lem-metric-convergent-implies-cauchy,
       def-metric-convergence, def-metric-interior-closure-boundary,
       def-metric-space, def-countable-choice]
justified_by: []
aliases: []
landmark: true
short: "closed implies complete in ZF; converse under countable choice"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: locally-repaired
    date: 2026-09-10
    scope: owner-authorized-local-direction-specific-choice-contract-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Keremedis and Wajch, On densely complete metric spaces and extensions of uniformly continuous functions in ZF, arXiv:1901.08709v1, Theorem 4.1"
      url: "https://arxiv.org/html/1901.08709v1"
    - title: "Complete metric space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_metric_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]) and let $A \subseteq X$
carry the subspace metric $d_A$ ([[def-isometry-and-metric-embedding]]). Then:

1. **Under countable choice** $\mathrm{AC}_\omega$ ([[def-countable-choice]]),
   if $(A,d_A)$ is complete ([[def-complete-metric-space]]), then $A$ is closed
   in $(X,d)$ ([[def-metric-topology]]). No completeness hypothesis on $X$ is needed.
2. **In ZF, without a choice axiom**, if $(X,d)$ is complete and $A$ is closed
   in $(X,d)$, then $(A,d_A)$ is complete.

Consequently, under countable choice, a subspace of a complete metric space is
complete if and only if it is closed.

The following form of the first direction is also choice-free: a complete
subspace contains the ambient limit of every convergent sequence of its
points. Hence it is closed whenever every point of its ambient closure is
already known to be the limit of a sequence from that subspace. This last
condition is pointwise existence, not a chosen family of sequences.

## Facts & Assumptions

**Given:** A metric space $(X,d)$ and a subset $A \subseteq X$ with the subspace metric $d_A = d \restriction (A \times A)$.

[A1] Completeness of $(A,d_A)$: every $d_A$-Cauchy sequence in $A$ converges in $(A,d_A)$ to a point of $A$ ([[def-complete-metric-space]], [[def-cauchy-in-metric]]).

[A2] Completeness of $(X,d)$: every $d$-Cauchy sequence in $X$ converges in $(X,d)$ to a point of $X$ ([[def-complete-metric-space]]).

[L1] Distances inside $A$ are computed in $X$: $d_A(a,b) = d(a,b)$ for $a,b \in A$ ([[def-isometry-and-metric-embedding]]). Hence a sequence in $A$ is $d_A$-Cauchy exactly when it is $d$-Cauchy, and for $p \in A$ it converges to $p$ in $(A,d_A)$ exactly when it converges to $p$ in $(X,d)$ ([[def-cauchy-in-metric]], [[def-metric-convergence]]).

[L2] Under countable choice, each point of $\overline A$ is the limit of a sequence from $A$ ([[thm-metric-sequential-closure]], claim 1, sequence-manufacturing direction). In ZF, a closed set contains the limit of every ambient-convergent sequence of its points (the same theorem, proof step 2.2). We do not use the converse characterization of closed sets without its choice hypothesis.

[A3] Countable choice is assumed only for claim 1: a sequence of nonempty sets has a choice function ([[def-countable-choice]]).

[L3] A convergent sequence in a metric space is Cauchy ([[lem-metric-convergent-implies-cauchy]]).

[L4] Limits in a metric space are unique ([[lem-metric-limits-unique]]).

[L5] By the ball definition of closure, $A\subseteq\overline A$, and if $\overline A\subseteq A$ then every point outside $A$ has a ball disjoint from $A$, so $A$ is closed ([[def-metric-interior-closure-boundary]], [[def-metric-topology]]).

## Proof

**Proof technique:** direct.

1.1 First work without choice: assume [A1] and let $(a_k)$ be any sequence of points of $A$ which converges to $x\in X$. We will prove $x\in A$ for this already given sequence. [A1, given]

1.2 For claim 2, assume [A2], assume $A$ closed, and let $(a_k)$ be a $d_A$-Cauchy sequence in $A$; by [L1] it is $d$-Cauchy in $X$, so by [A2] it converges in $(X,d)$ to some $x \in X$. [A2, L1]

2.1 That sequence is $d$-Cauchy by [L3], hence $d_A$-Cauchy by [L1], since all its terms lie in $A$. [step 1.1, L1, L3]

2.2 The sequence lies in $A$ and converges in $X$, and $A$ is closed, so $x \in A$ by [L2]; by [L1] the sequence then converges to $x$ in $(A,d_A)$, and $x \in A$, so $(A,d_A)$ is complete. This is claim 2. [step 1.2, L1, L2]

3.1 By [A1] it therefore converges in $(A,d_A)$ to some $a \in A$, and by [L1] it converges to $a$ in $(X,d)$ as well. [step 2.1, A1, L1]

4.1 The sequence converges in $(X,d)$ both to $x$ and to $a$, so $x=a\in A$ by [L4]. Thus a complete subspace contains all ambient limits of sequences of its points, in ZF. In particular, if each $x\in\overline A$ is already known to admit such a sequence, applying this argument to one fixed $x$ at a time gives $\overline A\subseteq A$, and [L5] makes $A$ closed without choosing a family of sequences. [step 1.1, step 3.1, L4, L5]

5.1 Now assume [A3] as well as [A1], and fix $x\in\overline A$. The proof of [L2] applies [A3] to the nonempty sets $A\cap B(x,1/(k+1))$, producing a sequence from $A$ that converges to $x$. Step 4.1 gives $x\in A$, so [L5] gives closedness. This proves claim 1 under countable choice. Claim 2 was proved in step 2.2 without [A3]; combining these directions gives the stated equivalence under countable choice. If $A$ is empty, it is closed and has no Cauchy sequences, so all relevant conclusions hold vacuously as well. [A1, A3, L2, L5, step 4.1, step 2.2] ∎

## Remarks

- **Claim 1 does not need ambient completeness.** Under countable choice, it applies in any ambient metric space. The comparison of two limits is choice-free; producing an approximating sequence from arbitrary adherence is the step requiring the stated assumption.
- **Both directions are genuinely about the metric.** $A$ closed and $X$ complete are hypotheses about $(X,d)$; replacing $d$ by a topologically equivalent metric preserves closedness and can destroy completeness ([[fs-completeness-is-a-topological-property]]), so no reading of this theorem survives the passage to the bare topology.
- **Where choice enters.** Only in claim 1, and only through [[thm-metric-sequential-closure]], whose forward direction spends $\mathrm{AC}_\omega$ ([[def-countable-choice]]) to manufacture a sequence out of adherence. Claim 2 uses the choice-free direction of that theorem.
- **The standard application.** A closed interval, a closed ball, or any closed subset of $\mathbb{R}^n$ is a complete metric space, because $\mathbb{R}^n$ is ([[thm-euclidean-space-complete]]). Every appeal to Banach's fixed point theorem on a closed subset of $\mathbb{R}^n$ passes through this remark.

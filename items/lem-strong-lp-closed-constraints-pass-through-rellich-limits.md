---
id: lem-strong-lp-closed-constraints-pass-through-rellich-limits
kind: lemma
title: "Closed target constraints survive compact extraction"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-compactly-embedded-normed-spaces, def-l-p-space-as-a-quotient-by-null-functions, def-metric-topology, def-topological-space, thm-metric-closure-characterisation, def-countable-choice, def-dependent-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations, complete 242-page 2014 notes"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Sections 1.5 and 3.10, printed pp. 6-7 and 73-74; locally derived consequences are identified in the strategies."
---

## Statement

Assume Countable and Dependent Choice. Let $X$ be a normed space with compact
continuous inclusion $J:X\hookrightarrow L^p(\Omega)$, $1\le p<\infty$, and let
$C\subseteq L^p(\Omega)$ be closed in norm. Every bounded sequence
$u_j\in X$ with $Ju_j\in C$ admits a subsequence $Ju_{j_k}\to v$ in
$L^p(\Omega)$ with $v\in C$. In particular this applies to any of this page's
Rellich inclusions, with their stated domain, exponent and choice hypotheses.
This statement does not assert that $v$ belongs to $X$ or that $C$ is weakly
closed.

## Facts & Assumptions

**Given:** Countable and Dependent Choice, a normed space $X$ with compact continuous inclusion $J:X\hookrightarrow L^p(\Omega)$, a norm-closed set $C\subseteq L^p(\Omega)$, and a bounded sequence $(u_j)$ in $X$ with $Ju_j\in C$ for all $j$.

[F1] *The sequential form of a compact embedding.* Under Countable and Dependent Choice, a compact continuous inclusion $J$ sends every bounded sequence in $X$ to a sequence with a subsequence converging in $L^p(\Omega)$. ([[def-compactly-embedded-normed-spaces]])

[F2] *Closed sets contain sequential limits.* A closed subset of a metric space contains the limit of every convergent sequence of its points: otherwise the open complement contains a ball about the limit, contradicting eventual membership of the sequence in that ball. ([[def-metric-topology]], [[def-topological-space]], [[thm-metric-closure-characterisation]])

## Proof

**Proof technique:** extract a convergent subsequence by compactness and use closedness of the target constraint.

1.1 By [F1] the bounded sequence $(Ju_j)$ has a subsequence $(Ju_{j_k})$ converging in $L^p(\Omega)$ to some $v$. [F1, given]

2.1 Since $Ju_{j_k}\in C$ for every $k$ and $C$ is closed, [F2] gives $v\in C$; the statement makes no claim that $v$ lies in the image of $J$. Countable and Dependent Choice are used exactly through the compact-embedding interface [F1]. [F2, step 1.1, given] ∎ 
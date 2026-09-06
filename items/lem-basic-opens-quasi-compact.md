---
id: lem-basic-opens-quasi-compact
kind: lemma
title: "Every distinguished open of an affine spectrum is quasi-compact"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-spectrum-localization-open-immersion, thm-prime-spectrum-is-compact]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "The Stacks Project, Lemma 26.5.1"
      url: "https://stacks.math.columbia.edu/tag/01HR"
---
## Statement

Assume the Axiom of Choice. For every $f\in A$, the distinguished open
$D(f)\subseteq\operatorname{Spec}A$ is quasi-compact.

## Facts & Assumptions

**Given:** The Axiom of Choice, a commutative ring $A$, and $f\in A$.

[F1] $D(f)$ is homeomorphic to $\operatorname{Spec}(A_f)$
([[lem-spectrum-localization-open-immersion]]).

[F2] Assuming the Axiom of Choice, the prime spectrum of every commutative ring is compact
([[thm-prime-spectrum-is-compact]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $D(f)$ is homeomorphic to $\operatorname{Spec}(A_f)$. [F1]

1.2 The latter is compact by [F2], including when $A_f$ is the zero ring. [F2]

2.1 Compactness transfers across the homeomorphism. [step 1.1, step 1.2] ∎
 

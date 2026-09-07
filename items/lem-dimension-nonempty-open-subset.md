---
id: "lem-dimension-nonempty-open-subset"
kind: "lemma"
title: "Nonempty opens preserve irreducible dimension"
deps: ["thm-dimension-equals-transcendence-degree", "lem-general-variety-function-field-charts", "def-dimension-classical-variety"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §5j p.115"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Use identical function fields for open invariance; a chain in a proper irreducible closed subset extends by X, then use finite components."
---

## Statement

If $U$ is a nonempty open of an irreducible classical variety $X$, then $\dim U=\dim X$. Every proper closed subvariety $Z\subsetneq X$ has $\dim Z<\dim X$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If $X$ is an irreducible classical variety, then $\dim X=\operatorname{trdeg}_k k(X)<\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-equals-transcendence-degree]]).

[F2] For irreducible classical $X$, the fraction fields of all nonempty affine charts identify canonically; denote the resulting field by $k(X)$. A dominant morphism $f:X\to Y$ between irreducible classical varieties induces an injection $f^*:k(Y)\hookrightarrow k(X)$. Dominant means that the image is dense. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-general-variety-function-field-charts]]).

[F3] For a classical variety $X$, let $\dim X$ be its chain dimension. If $X_1,\ldots,X_m$ are its irreducible components and $x\in X$ is a closed point, define $\dim_xX=\max_{x\in X_i}\dim X_i$. The indexing family is nonempty. Say that $X$ has pure dimension $d$ if every irreducible component has dimension $d$; the condition on components is vacuous for the empty variety, whose dimension is nevertheless $-\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-dimension-classical-variety]]).

## Proof

1.1 The nonempty open $U$ is irreducible and has the same rational functions as $X$ by restriction. The function-field and transcendence-degree results imply $\dim U=\dim X=:n<\infty$. [F1, F2]

2.1 Every chain of nonempty irreducible closed subsets in proper closed $Z$ is also a chain in $X$, and adjoining $X$ increases its length by one. Thus its length is at most $n-1$, giving $\dim Z\le n-1<n$. If $Z=\varnothing$ its dimension is $-\infty$ instead, still strictly smaller. [F3, step 1.1] ∎

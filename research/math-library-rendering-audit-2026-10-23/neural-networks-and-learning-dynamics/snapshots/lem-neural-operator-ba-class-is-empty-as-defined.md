---
id: lem-neural-operator-ba-class-is-empty-as-defined
kind: lemma
title: "The printed diameter-bounded activation class is empty"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-neural-operator-activation-classes]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Kovachki et al., Neural Operator: Learning Maps Between Function Spaces With Applications to PDEs"
      url: "https://arxiv.org/pdf/2108.08481"
      locator: "Definition 7, PDF p.49; adjacent ReLU claim"
---

## Statement

For each $q\ge1$, the class $\mathrm{BA}_q$ in the displayed activation-class definition is empty.

## Statement references
[Kovachki et al., Definition 7: global bound indexed by $C\ge\operatorname{diam}_2(K)$](https://arxiv.org/pdf/2108.08481)

## Facts & Assumptions

**Given:** An integer $q\ge1$ and the definition of $\mathrm{BA}_q$.

[F1] Membership in $\mathrm{BA}_q$ requires, for every compact $K\subset\mathbb R^q$, every $\varepsilon>0$, and every $C\ge\operatorname{diam}_2(K)$, a network satisfying both the identity-approximation and global-bound inequalities ([[def-neural-operator-activation-classes]]).

## Proof

**Proof strategy:** direct.

1.1 Suppose $\sigma\in\mathrm{BA}_q$. Choose $x_0\in\mathbb R^q$ with $x_0\ne0$, set $K=\{x_0\}$, choose $C=0$, and choose $0<\varepsilon<|x_0|_2$. Since a singleton has diameter zero, these choices satisfy the quantifiers in [F1]. [given, F1, choose]

2.1 The required network would satisfy $|f(x)|_2\le0$ for every $x\in\mathbb R^q$, hence $f(x_0)=0$. It would also satisfy $|f(x_0)-x_0|_2\le\varepsilon$, which becomes $|x_0|_2\le\varepsilon$, contrary to the choice of $\varepsilon$. Therefore no $\sigma$ belongs to $\mathrm{BA}_q$. [given, step 1.1, F1, contradiction] ∎

## Remark

The source's immediately adjacent assertion that ReLU belongs to this class cannot follow from the printed definition: the contradiction above applies to every activation. The global-output-bound branch of the source's Theorem 11 is therefore vacuous as printed. A change from diameter to a bound involving the location of $K$ would be a different definition and requires owner reconciliation.

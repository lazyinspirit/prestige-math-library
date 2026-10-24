---
id: cex-quotient-stack-need-not-be-a-scheme
kind: counterexample
title: "A quotient stack need not be a scheme"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - ex-classifying-stack-of-a-finite-group
  - def-algebraic-stack-and-inertia
  - def-descent-data-and-stack-in-groupoids
  - def-scheme
  - def-quotient-sheaf-and-representable-quotient
  - def-presheaf-representable-functor-and-representation
  - lem-inertia-of-a-stack-in-setoids
  - def-category-fibred-in-groupoids
  - def-group-scheme-over-a-field
  - def-axiom-of-choice
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
    - title: "The Stacks Project, Chapter 65 (Algebraic Spaces), Section 65.14, and Chapter 94 (Algebraic Stacks)"
      url: "https://stacks.math.columbia.edu/download/algebraic.pdf"
      locator: "Definition 94.12.1 (tag 026N) and the standard comparison of quotient sheaves with quotient stacks for a nontrivial finite group"
---

## Statement refuted

False claim: every algebraic stack over a field that is presented as a quotient
of a scheme by a finite group action is equivalent to the stack of a scheme.

## Facts & Assumptions

**Given:** A field $k$, a nontrivial finite group $G$ (for instance $\mathbb Z/2$), its constant group scheme $G_k$ over $k$, the classifying stack $BG$ of right $G$-torsors, the trivial action of $G$ on $\operatorname{Spec}k$, and the inherited AC.

[F1] $BG$ is an algebraic stack over $k$ with presentation $\operatorname{Spec}k\to BG$ given by the trivial torsor, and the automorphism sheaf of the trivial torsor $G_T$ is $G_T$ by left multiplication ([[ex-classifying-stack-of-a-finite-group]]).

[F2] The stack in setoids $\mathcal S_X$ of a scheme $X$ has only trivial automorphism groups in its fibre categories, and the inertia projection of a stack whose fibres are setoids is an equivalence ([[lem-inertia-of-a-stack-in-setoids]], [[def-descent-data-and-stack-in-groupoids]]).

[F3] The fppf quotient sheaf of the trivial action of $G$ on $\operatorname{Spec}k$ is the representable sheaf $h_{\operatorname{Spec}k}$: the naive quotient presheaf takes every $T$ to the one-point quotient of $\operatorname{Mor}_k(T,\operatorname{Spec}k)$ (which is a one-point set for every $T$ over $k$), it is already an fppf sheaf, and it is represented by $\operatorname{Spec}k$; this is the field-level quotient-sheaf convention of [[def-quotient-sheaf-and-representable-quotient]] ([[def-presheaf-representable-functor-and-representation]]).



## Proof

1.1 $BG$ has nontrivial inertia. By [F1] the trivial torsor $G_k$ over $\operatorname{Spec}k$ has automorphism group $G(\operatorname{Spec}k)=G$ acting by left multiplication, and $G$ is nontrivial by hypothesis. Hence the fibre category of $BG$ over $\operatorname{Spec}k$ is not a setoid. [F1, given]

2.1 $BG$ is not the stack of a scheme. Suppose $BG$ were equivalent to $\mathcal S_X$ for some $k$-scheme $X$. Then by [F2] every fibre category of $BG$ would be a setoid, contradicting step 1.1. Hence no $k$-scheme $X$ has $BG\simeq\mathcal S_X$, even though $BG$ is an algebraic stack by [F1]. [F1, F2, step 1.1]

3.1 Separation of the sheaf and stack levels. For the trivial action of $G$ on $\operatorname{Spec}k$, the fppf quotient sheaf $(\operatorname{Spec}k)/G$ is the representable sheaf $h_{\operatorname{Spec}k}$ by [F3], so at the level of quotient sheaves the quotient is a scheme, namely $\operatorname{Spec}k$; at the level of quotient stacks the same data present the classifying stack $BG$, which is not a scheme by step 2.1. This witnesses that passing from quotient sheaves to quotient stacks genuinely enlarges the category, and the failed conclusion is exactly the identification $BG\simeq\mathcal S_X$ for some scheme $X$. The supplier definition [[def-quotient-sheaf-and-representable-quotient]] is now authored, and this field-level use is reconciled directly by [F3]: the quotient presheaf is terminal on the big fppf site and therefore already a sheaf. [F1, F3, step 2.1] ∎ 
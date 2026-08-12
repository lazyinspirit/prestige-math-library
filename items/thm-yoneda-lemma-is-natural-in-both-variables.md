---
id: thm-yoneda-lemma-is-natural-in-both-variables
kind: theorem
title: "The Yoneda bijection $\\operatorname{Nat}(\\mathcal C(a,-),F)\\cong F(a)$ is natural in both $a$ and $F$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-yoneda-evaluation-bijection,
       thm-hom-assignment-is-a-bifunctor, def-natural-transformation,
       def-vertical-composition-of-natural-transformations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Theorem 2.2.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Theorem 4.2.1"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Under the hypotheses of [[lem-yoneda-evaluation-bijection]], the bijections

$$E_{a,F}:\operatorname{Nat}(\mathcal C(a,-),F)\xrightarrow{\cong}F(a)$$

are natural in both variables. Explicitly:

1. if $h:a\to a'$ and $\alpha:\mathcal C(a,-)\Rightarrow F$, then
   $$E_{a',F}\bigl(\alpha\circ\mathcal C(h,-)\bigr)=F(h)\bigl(E_{a,F}(\alpha)\bigr);$$
2. if $\eta:F\Rightarrow G$, then
   $$E_{a,G}(\eta\circ\alpha)=\eta_a\bigl(E_{a,F}(\alpha)\bigr).$$

Here $\mathcal C(h,-):\mathcal C(a',-)\Rightarrow\mathcal C(a,-)$ is
precomposition by $h$. These equations make sense for every locally small
$\mathcal C$ and do not require a functor category with source $\mathcal C$.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$, objects $a,a'$, a morphism $h:a\to a'$, functors $F,G:\mathcal C\to\mathbf{Set}$, natural transformations $\alpha:\mathcal C(a,-)\Rightarrow F$ and $\eta:F\Rightarrow G$, and the category and functor laws.

[L1] Evaluation is the bijection $E_{a,F}(\alpha)=\alpha_a(1_a)$, with inverse $x\mapsto(f\mapsto F(f)(x))$ ([[lem-yoneda-evaluation-bijection]]).

[L2] The hom-assignment is a bifunctor, so $h:a\to a'$ induces the natural transformation $\mathcal C(h,-)$ with component $k\mapsto k\circ h$ ([[thm-hom-assignment-is-a-bifunctor]]).

[F1] Naturality of $\alpha$ says $F(h)\circ\alpha_a=\alpha_{a'}\circ\mathcal C(a,h)$ ([[def-natural-transformation]]).

[F2] Vertical composition is componentwise: $(\eta\circ\alpha)_a=\eta_a\circ\alpha_a$ ([[def-vertical-composition-of-natural-transformations]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the component of $\mathcal C(h,-)$ at $a'$ sends $1_{a'}$ to $1_{a'}\circ h=h$; hence $E_{a',F}(\alpha\circ\mathcal C(h,-))=\alpha_{a'}(h)$. [L1, L2]

1.2 Applying [F1] to $1_a$ gives $\alpha_{a'}(h)=F(h)(\alpha_a(1_a))=F(h)(E_{a,F}(\alpha))$, proving naturality in $a$. [L1, F1]

1.3 By componentwise composition, $E_{a,G}(\eta\circ\alpha)=(\eta\circ\alpha)_a(1_a)=\eta_a(\alpha_a(1_a))=\eta_a(E_{a,F}(\alpha))$, proving naturality in $F$. [L1, F2]

2.1 Steps 1.1--1.3 are the two required naturality squares, and their pointwise formulas use no functor category on a large source. [step 1.1, step 1.2, step 1.3] ∎

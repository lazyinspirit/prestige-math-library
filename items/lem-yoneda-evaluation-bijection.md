---
id: lem-yoneda-evaluation-bijection
kind: lemma
title: "Evaluation at the identity gives $\\operatorname{Nat}(\\mathcal C(a,-),F)\\cong F(a)$ and proves that the natural-transformation collection is a set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hom-functors-and-hom-bifunctor,
       thm-hom-assignments-are-functors,
       def-natural-transformation, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
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

Let $\mathcal C$ be a locally small category, let $a$ be an object, and let
$F:\mathcal C\to\mathbf{Set}$ be a functor. Evaluation at the identity defines
a bijection

$$E_{a,F}:\operatorname{Nat}(\mathcal C(a,-),F)\longrightarrow F(a),\qquad E_{a,F}(\alpha)=\alpha_a(1_a).$$

Its inverse sends $x\in F(a)$ to the natural transformation $\alpha^x$ whose
component at $c$ is

$$\alpha^x_c:\mathcal C(a,c)\longrightarrow F(c),\qquad \alpha^x_c(f)=F(f)(x).$$

The explicit parametrization by the set $F(a)$ proves that the
natural-transformation collection in the display is a set. The construction
makes no choice from a family of nonempty sets.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$, an object $a$, a functor $F:\mathcal C\to\mathbf{Set}$, and the identity, composition, and functor laws.

[F1] The assignment $\mathcal C(a,-)$ is the functor that sends $c$ to $\mathcal C(a,c)$ and $u:c\to d$ to postcomposition $f\mapsto u\circ f$ ([[def-hom-functors-and-hom-bifunctor]], [[thm-hom-assignments-are-functors]]).

[F2] A natural transformation $\alpha:H\Rightarrow F$ has components $\alpha_c:H(c)\to F(c)$ satisfying $F(u)\circ\alpha_c=\alpha_d\circ H(u)$ for every $u:c\to d$ ([[def-natural-transformation]]).

[F3] A function is bijective when it is injective and surjective, equivalently when it has a two-sided inverse ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** constructive.

1.1 For every natural transformation $\alpha:\mathcal C(a,-)\Rightarrow F$, the value $\alpha_a(1_a)$ lies in $F(a)$, so evaluation defines the displayed map $E_{a,F}$. [given, F1, F2, construct]

1.2 For $x\in F(a)$ and each object $c$, define $\alpha^x_c(f):=F(f)(x)$ for $f:a\to c$. [given, F1, construct]

2.1 If $u:c\to d$, then $F(u)(\alpha^x_c(f))=F(u)(F(f)(x))=F(u\circ f)(x)=\alpha^x_d(u\circ f)$; by [F1] and [F2], the family $\alpha^x$ is natural. [step 1.2, F1, F2]

2.2 Evaluation recovers $x$: $E_{a,F}(\alpha^x)=\alpha^x_a(1_a)=F(1_a)(x)=x$. [step 1.1, step 1.2]

2.3 If $\alpha:\mathcal C(a,-)\Rightarrow F$ and $f:a\to c$, naturality at $f$ gives $\alpha_c(f)=\alpha_c(f\circ1_a)=F(f)(\alpha_a(1_a))=\alpha^{E_{a,F}(\alpha)}_c(f)$. [step 1.1, step 1.2, F1, F2]

3.1 Steps 2.2 and 2.3 make $x\mapsto\alpha^x$ a two-sided inverse to $E_{a,F}$, so [F3] gives the claimed bijection; its range is indexed by the set $F(a)$, and every inverse value is given by a formula, so the asserted sethood and choice-freeness follow. [step 2.1, step 2.2, step 2.3, F3, discharge-construct] ∎

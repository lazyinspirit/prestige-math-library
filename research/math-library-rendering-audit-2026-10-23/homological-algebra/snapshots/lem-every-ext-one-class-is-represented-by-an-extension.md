---
id: lem-every-ext-one-class-is-represented-by-an-extension
kind: lemma
title: "Every Ext-one class is represented by an extension"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, def-class-of-an-extension-in-derived-ext-one, def-pullback-and-pushout-of-an-extension, thm-ext-dimension-shifting-in-the-first-variable]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice and the balanced-Ext hypotheses of
[[def-balanced-ext-bifunctor]]. Given a projective presentation
$0\to\Omega M\to P\to M\to0$, every element of
$\operatorname{Ext}^1(M,N)$ is the class of an extension of $M$ by $N$.

## Facts & Assumptions

**Given:** An object $N$, an object $M$ with the stated projective presentation, and $\xi\in\operatorname{Ext}^1(M,N)$.

## Proof

**Proof technique:** direct.

1.1 The low-degree dimension-shifting sequence from [[thm-ext-dimension-shifting-in-the-first-variable]] represents $\xi$ by a morphism $f:\Omega M\to N$, modulo morphisms extending across $P$. Push out $0\to\Omega M\to P\to M\to0$ along $f$, as defined in [[def-pullback-and-pushout-of-an-extension]]. [given, construct]

2.1 The resulting bottom row is an extension of $M$ by $N$. Naturality of its connecting homomorphism sends $1_M$ to the class represented by $f$, which is $\xi$ by the definition in [[def-class-of-an-extension-in-derived-ext-one]]. [step 1.1, algebra] ∎

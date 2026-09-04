---
id: lem-simple-root-hensel-lifts-idempotents
kind: lemma
title: "Simple-root lifting also lifts idempotents"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-factor-hensel-implies-simple-root-hensel]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a local ring whose simple residue roots lift
uniquely. Then every idempotent of the residue field $A/\mathfrak m$ lifts
uniquely to an idempotent of $A$.

## Facts & Assumptions

**Given:** A local ring $(A,\mathfrak m)$ in which every simple residue root of
a monic polynomial lifts uniquely.

[L1] In a Henselian local ring, factor lifting implies unique lifting of simple
residue roots ([[cor-factor-hensel-implies-simple-root-hensel]]).

## Proof

**Proof technique:** apply the simple-root criterion to $T^2-T$.

1.1 The residue ring $A/\mathfrak m$ is a field, so its only idempotents are $0$ and $1$. For $\overline e \in \{0,1\}$, the polynomial $p(T)=T^2-T$ satisfies $p(\overline e)=0$ and $$p'(\overline e)=2\overline e-1 \in \{-1,1\},$$ hence $\overline e$ is a simple residue root. [given, algebra]

2.1 By the assumed simple-root lifting property, there is a unique lift $e \in A$ of $\overline e$ with $p(e)=0$. The equation $p(e)=0$ is exactly $e^2=e$, so $e$ is idempotent. [step 1.1, given]

3.1 Therefore the simple-root form lifts residue idempotents uniquely. The role of [L1] is only to identify this as the same mechanism already proved for Henselian local rings. [L1, step 2.1] ∎

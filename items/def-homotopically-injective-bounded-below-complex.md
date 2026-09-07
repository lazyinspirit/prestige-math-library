---
id: "def-homotopically-injective-bounded-below-complex"
kind: "definition"
title: "Homotopically injective bounded below complex"
deps: ["def-homotopically-projective-bounded-above-complex"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://arxiv.org/pdf/1206.6632v1"
      title: "6.5.1 and 13.1 (K-injective definition); cochain convention"
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

A cochain complex $I$ is **homotopically injective**, or **K-injective**, if $\operatorname{Hom}_K(A,I[r])=0$ for every acyclic cochain complex $A$ and every integer $r$. Equivalently, $\underline{\operatorname{Hom}}(A,I)$ is acyclic. This uses the Hom complex and shifted Hom identification fixed in [[def-homotopically-projective-bounded-above-complex]]. A **bounded-below K-injective complex** additionally has $I^n=0$ for all sufficiently negative $n$. The K-injective property itself neither assumes boundedness nor means termwise injectivity.

---
id: fs-the-canonical-map-g-to-u-g-is-injective-by-the-definition-of-a-quotient
kind: false-statement
title: Injectivity is not part of the enveloping quotient definition
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-universal-enveloping-algebra, cor-the-canonical-map-from-a-lie-algebra-to-its-enveloping-algebra-is-injective]
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Corollary 13.3, printed p. 75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

The canonical map $\mathfrak g\to U(\mathfrak g)$ is injective merely by the
definition of $U(\mathfrak g)$ as a quotient.

## Facts & Assumptions

**Given:** The claim that quotient formation alone proves injectivity.

[L1] The definition makes the canonical map the composite $\mathfrak g\hookrightarrow T(\mathfrak g)\twoheadrightarrow T(\mathfrak g)/I$ ([[def-universal-enveloping-algebra]]).

[L2] Its injectivity is a PBW corollary ([[cor-the-canonical-map-from-a-lie-algebra-to-its-enveloping-algebra-is-injective]]).

## Refutation

**Proof technique:** direct dependency check.

1.1 From [L1] alone, the kernel of the composite is exactly $I\cap\mathfrak g$, with $\mathfrak g$ viewed in tensor degree one. A quotient definition supplies no assertion that this intersection is zero; for comparison, the quotient $T(V)/(V)$ kills its entire degree-one subspace. [L1, algebra]

2.1 PBW proves that the special enveloping ideal has $I\cap\mathfrak g=0$, yielding [L2]. Thus injectivity is true, but it is a theorem using PBW rather than a consequence built into the quotient definition, so the statement as phrased is false. [step 1.1, L2] ∎

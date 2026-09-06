---
id: cor-ring-of-integers-is-a-dedekind-domain
kind: corollary
title: "Rings of integers are Dedekind domains"
status: draft
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, def-ring-of-integers-of-a-number-field, def-dedekind-domain, cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Milne, Theorem 3.1"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

Assume the Axiom of Choice. The ring of integers of every number field is a
Dedekind domain.

## Facts & Assumptions

**Given:** The Axiom of Choice and a number field $K$.

[F1] Assuming Choice, the integral closure of a Dedekind domain in a finite separable extension is Dedekind ([[cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] with base ring $\mathbb Z$ and extension $K/\mathbb Q$. [F1, given]

2.1 Its integral closure is precisely $\mathcal O_K$, so it is Dedekind. [step 1.1] ∎

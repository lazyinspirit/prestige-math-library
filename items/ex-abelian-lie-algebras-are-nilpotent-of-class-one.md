---
id: ex-abelian-lie-algebras-are-nilpotent-of-class-one
kind: example
title: Abelian Lie algebras are nilpotent of class one
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-nilpotency-class-of-a-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, nilpotent Lie algebras"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§2.1, printed p. 11"
---

## Example

Every nonzero abelian Lie algebra is nilpotent of class one. The zero Lie
algebra has class zero under the library convention.

## Facts & Assumptions

**Given:** An abelian Lie algebra $\mathfrak a$ over a field $k$.

[L1] Nilpotency class is the least $c\geq0$ for which
$\gamma_{c+1}=0$, with the zero algebra assigned class zero
([[def-nilpotency-class-of-a-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Since $\mathfrak a$ is abelian, $\gamma_2(\mathfrak a)=[\mathfrak a,\mathfrak a]=0$. If $\mathfrak a\neq0$, then $\gamma_1(\mathfrak a)=\mathfrak a\neq0$, so the least vanishing index is $2$ and [L1] gives class one. [given, L1, algebra]

2.1 If $\mathfrak a=0$, already $\gamma_1(\mathfrak a)=0$, and the explicit convention in [L1] gives class zero rather than one. These are the only two cases, and the calculation uses no choice. [L1, step 1.1] ∎

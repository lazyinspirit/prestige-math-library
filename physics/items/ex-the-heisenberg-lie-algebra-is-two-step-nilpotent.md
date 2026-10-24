---
id: ex-the-heisenberg-lie-algebra-is-two-step-nilpotent
kind: example
title: The Heisenberg Lie algebra is two-step nilpotent
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-nilpotency-class-of-a-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Heisenberg example"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Example 1.4(c), printed p. 5"
---

## Example

Let $\mathfrak h_3(k)$ have basis $x,y,z$, with $[x,y]=z$ and $z$ central.
Then $\mathfrak h_3(k)$ is nilpotent of class two.

## Facts & Assumptions

**Given:** The displayed three-dimensional Lie algebra over a field $k$.

[L1] The nilpotency class is the least $c$ with $\gamma_{c+1}=0$ ([[def-nilpotency-class-of-a-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Bilinearity, alternation, and centrality of $z$ show that every bracket is a scalar multiple of $z$, and the bracket $[x,y]=z$ realizes every such multiple. Hence $\gamma_2(\mathfrak h_3)=[\mathfrak h_3,\mathfrak h_3]=kz\neq0$. [given, algebra]

2.1 Since $z$ is central, $\gamma_3(\mathfrak h_3)=[\mathfrak h_3,kz]=0$. Thus the lower central series is $\mathfrak h_3,kz,0$; its second term is nonzero and its third is zero, so [L1] gives nilpotency class exactly two. The computation works in every characteristic and uses no choice. [L1, step 1.1, algebra] ∎

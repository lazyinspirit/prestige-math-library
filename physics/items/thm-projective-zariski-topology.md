---
id: thm-projective-zariski-topology
kind: theorem
title: "projective zariski topology"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-algebraic-set]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Projective algebraic sets are the closed sets of the projective Zariski topology on $\mathbf P_k^n$. Its standard opens are $D_+(x_i)=\{[a]:a_i\ne0\}$.

## Proof

**Given:** Homogeneous ideals $I,J,J_\alpha\subseteq k[x_0,\ldots,x_n]$.

1.1 The empty and whole sets are $V_+((1))$ and $V_+((0))$. [given]

1.2 Direct evaluation gives $V_+(IJ)=V_+(I)\cup V_+(J)$. [given, algebra]

1.3 Direct evaluation gives $V_+(\sum_\alpha J_\alpha)=\bigcap_\alpha V_+(J_\alpha)$. [given, algebra]

2.1 These identities prove the closed-set axioms, and the complement of $V_+((x_i))$ is $D_+(x_i)$. [step 1.1, step 1.2, step 1.3] ∎

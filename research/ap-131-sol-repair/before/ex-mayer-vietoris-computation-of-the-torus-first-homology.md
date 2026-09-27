---
id: ex-mayer-vietoris-computation-of-the-torus-first-homology
kind: example
title: "Mayer–Vietoris computation of first homology of the torus"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-mayer-vietoris-sequence-in-singular-homology, cor-homology-of-spheres, prop-singular-homology-is-invariant-under-deformation-retracts]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Example

Cover $T^2=S^1\times S^1$ by two overlapping product cylinders $U,V$ whose
intersection is two cylinders. Then $H_1(T^2;G)\cong G\oplus G$.

## Facts & Assumptions

**Given:** The described cylinder cover, with $U,V\simeq S^1$ and $U\cap V\simeq S^1\sqcup S^1$.

## Verification

**Proof technique:** direct.

1.1 With the two overlap circles ordered, the degree-zero and degree-one Mayer--Vietoris maps are both $(a,b)\mapsto(a+b,-a-b)$ from $G^2$ to $G^2$: each overlap cylinder retracts onto the second circle factor, and the fixed difference sign supplies the minus sign in the second coordinate. Thus each map has kernel and cokernel isomorphic to $G$. [given, construct]

2.1 Exactness gives $0\to G\to H_1(T^2;G)\to G\to0$. This sequence splits: the first coordinate circle has connecting class $(g,-g)$ and hence gives a section of the right-hand $G$, while the second coordinate circle represents the left-hand cokernel generator. Therefore $H_1(T^2;G)\cong G\oplus G$. [step 1.1, algebra] ∎

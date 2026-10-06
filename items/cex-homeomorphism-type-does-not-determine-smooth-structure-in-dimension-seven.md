---
id: cex-homeomorphism-type-does-not-determine-smooth-structure-in-dimension-seven
kind: counterexample
title: "Homeomorphism type does not determine smooth structure in dimension seven"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
dependency_level: 21
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 399-405, the first examples of manifolds homeomorphic but not diffeomorphic to a sphere"
---

## Statement refuted

**False claim:** two closed smooth seven-manifolds that are homeomorphic have
diffeomorphic smooth structures; equivalently, the homeomorphism type of a
closed seven-manifold determines its smooth structure up to diffeomorphism.

## Counterexample

**Given:** The Axiom of Choice and countable choice, the standard sphere $S^7$
with its standard smooth structure, and the Milnor sphere bundle $M_{2,-1}$
with $(h,j)=(2,-1)$.

1.1 By [[thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven]] the manifold $M_{2,-1}$ is homeomorphic to $S^7$. [given]

2.1 The same theorem gives $\lambda(M_{2,-1})\equiv(2-(-1))^2-1=8\equiv1\pmod7$, while $\lambda(S^7)=0$ because the standard sphere bounds the disk $D^8$ with $q=\sigma=0$, and the invariant is negated by orientation reversal so its zero value is fixed by reversal. [step 1.1, given]

3.1 If the two closed smooth seven-manifolds were diffeomorphic with either orientation, the invariant of step 2.1 would agree, since an orientation-preserving diffeomorphism preserves $\lambda$ and an orientation-reversing one sends $\lambda(S^7)=0$ to $-\lambda(S^7)=0$; the values $1$ and $0$ differ modulo seven, so no such diffeomorphism exists. [step 2.1]

4.1 Therefore $S^7$ and $M_{2,-1}$ are homeomorphic closed smooth seven-manifolds with non-diffeomorphic smooth structures, which refutes the statement. [step 3.1] ∎

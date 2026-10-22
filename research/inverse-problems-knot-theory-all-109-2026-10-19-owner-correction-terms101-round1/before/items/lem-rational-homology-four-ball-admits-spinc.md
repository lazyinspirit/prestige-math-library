---
id: lem-rational-homology-four-ball-admits-spinc
kind: lemma
title: "A compact oriented rational homology four-ball admits a Spin-c structure"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
page: branched-cover-correction-terms-and-sliceness
deps:
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - def-axiom-of-choice
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
axiom_strength: "Assume AC for the compact-manifold and cohomology interfaces in the cited proof route."
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: n/a
sources:
  references:
    - title: "Danny Calegari, Notes on 4-Manifolds"
      url: "https://math.uchicago.edu/~dannyc/courses/4manifolds_2018/4_manifolds_notes.pdf"
      locator: "Section 3.2.1, Lemma 3.2 and proof, printed pp. 30–31; obstruction criterion and integral lift of w2"
    - title: "Peter Teichner and Elmar Vogt, All 4-Manifolds Have Spin-c Structures"
      url: "https://math.berkeley.edu/~teichner/Papers/spin.pdf"
      locator: "Proposition and proof, printed pp. 1–3; coefficient UCT argument and self-intersection parity"
---

## Statement

Assume AC. Let $B$ be a compact connected oriented smooth four-manifold with $H_*(B;\mathbb Q)\cong H_*(\mathrm{point};\mathbb Q)$. Then the oriented tangent frame bundle of $B$ admits a Spin$^c$ lift.

## Statement references

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin-c structures as lifts of the oriented frame bundle]]

[Calegari, *Notes on 4-Manifolds*, §3.2.1, Lemma 3.2](https://math.uchicago.edu/~dannyc/courses/4manifolds_2018/4_manifolds_notes.pdf)

[Teichner and Vogt, *All 4-Manifolds Have Spin-c Structures*](https://math.berkeley.edu/~teichner/Papers/spin.pdf)

## Proof status

Escalated: the source route is clear but the local proof has not been completed. It needs the precise Spin-c lifting obstruction criterion (a lift exists iff $w_2$ has an integral lift), the UCT coefficient diagram, and the self-intersection parity identity $w_2(x)=x\cdot x\pmod2$ for every integral degree-two class. A local derivation must also justify representing each such class by a closed embedded oriented surface in the compact four-manifold and the resulting normal-bundle computation. The item remains unproved; the proposed suppliers are an A-page lifting-criterion lemma and a degree-two surface-representative/self-intersection lemma placed before this item.

---
id: lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover
kind: lemma
title: Thom isomorphism extends over a finite numerable trivializing cover
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-thom-isomorphisms-glue-over-two-trivializing-opens]
proof_strategy: induction
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Mayer–Vietoris proof, printed pp.195–196"
---

## Statement

For an $R$-oriented metric bundle with a supplied finite numerable open
trivializing cover, the normalized local Thom classes glue uniquely, and cup
product with the resulting global class is a Thom isomorphism.  No choice
principle is required.

## Facts & Assumptions

**Given:** An $R$-oriented metric bundle and a supplied finite trivializing cover $(U_1,\ldots,U_m)$; the enumeration witnesses finiteness.

[F1] [[lem-thom-isomorphisms-glue-over-two-trivializing-opens]] glues two compatible normalized Thom isomorphisms and proves uniqueness.

## Proof

**Proof technique:** finite induction on the supplied cover.

1.1 The base case $m=0$ has empty base: the unique zero relative class is normalized and the map between zero cohomology groups is an isomorphism.  For $m=1$, the trivial-bundle case contained in [F1] supplies the normalized class and isomorphism. [F1, base]

1.2 Assume as induction hypothesis that the claim holds on $W_j=U_1\cup\cdots\cup U_j$ for some $1\leq j<m$.  It holds on $U_{j+1}$ because that restriction is trivial.  On $W_j\cap U_{j+1}$, the two restricted classes are both normalized for the same supplied orientation and are equal by the uniqueness clause of [F1]; their cup maps are isomorphisms by restriction to the trivializing open $U_{j+1}$. [F1, IH]

2.1 Apply [F1] to the two opens $W_j$ and $U_{j+1}$.  It gives a unique normalized Thom class and isomorphism on $W_{j+1}$.  Thus the induction hypothesis propagates, and after the finite final index it holds on $W_m=B$. [F1, step 1.2, discharge-induction]

3.1 The argument needs neither a shrink nor the numeration: openness and finite triviality suffice.  Any finite cover comes with some finite enumeration as part of the witness that it is finite, and fixing that one witness is not AC.  Repeated or empty members, empty intersections, $m=0,1$, rank zero, the zero ring, and the first and last induction endpoints are covered by [F1] and steps 1.1–2.1.  Uniqueness makes the output independent of the chosen enumeration. [F1, step 1.1, step 1.2, step 2.1, discharge-induction] ∎

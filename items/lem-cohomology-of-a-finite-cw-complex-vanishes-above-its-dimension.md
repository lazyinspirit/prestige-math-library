---
id: lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension
kind: lemma
title: Cohomology of a finite CW complex vanishes above its dimension
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cellular-cochains-compute-cohomology-with-local-coefficients, def-singular-cohomology-with-coefficients, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the cellular-cochain comparison."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Hatcher, Algebraic Topology, section 2.2"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "Cellular cohomology vanishes above the dimension, printed pp.139-141"
---

## Statement

Assume AC. Let $X$ be a nonempty finite CW complex of dimension $d$, and let
$R$ be a commutative ring. For every $n>d$ the singular cohomology vanishes:
$$H^n(X;R)=0.$$
More generally, for a CW pair $(X,A)$ with $X$ finite of dimension $d$ one has
$H^n(X,A;R)=0$ for every $n>d$.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the cellular-cochain comparison ([[def-axiom-of-choice]]).

[F1] For a CW pair and a local system the cellular cochain complex obtained from the skeletal filtration computes singular cohomology with local coefficients, naturally ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[F2] Taking the trivial local system with fiber $R$ recovers singular cohomology with coefficients in $R$ ([[def-singular-cohomology-with-coefficients]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a CW pair $(X,A)$ with $X$ finite of dimension $d$, and a commutative ring $R$.

1.1 By [F1] and [F2] the singular cohomology $H^*(X,A;R)$ is the cohomology of the cellular cochain complex $C^*_{\mathrm{cell}}(X,A;R)$ built from the relative cells of the skeletal filtration. [F1, F2]

1.2 A finite CW complex of dimension $d$ has $X^n=X^{n-1}=X$ for $n>d$. The degree-$n$ cellular cochain group from the skeletal filtration of [F1] is the relative cohomology of the consecutive skeleta $(X^n\cup A,X^{n-1}\cup A)$, which is therefore the zero group. Thus $C^n_{\mathrm{cell}}(X,A;R)=0$ for $n>d$. [F1, algebra]

2.1 A cochain complex whose groups vanish in all degrees above $d$ has cohomology zero above $d$, since a degree-$n$ cohomology class for $n>d$ is a class in a zero group; therefore $H^n(X,A;R)=0$ for $n>d$. [F1, step 1.1, step 1.2]

3.1 In the absolute case $A=\varnothing$ this gives $H^n(X;R)=0$ for $n>d$, which is the first assertion. [step 2.1]

4.1 Boundary cases. For $d=0$ the complex is a finite discrete set, all cochains vanish in positive degrees and the statement reads $H^n(X;R)=0$ for $n\geq1$, which holds because $X$ is a disjoint union of points. For the empty complex both sides vanish in every degree (the empty CW complex has dimension $-\infty$ by convention, and the statement is vacuous). Negative degrees are outside the assertion. The ring $R$ may be the zero ring, in which case all groups vanish; no division or flatness is used. AC is used only through [A1] in the cellular comparison. [A1, F1, step 2.1] ∎

## Source notes

Hatcher, *Algebraic Topology* section 2.2 (printed pp. 139-141), records that cellular cohomology vanishes above the dimension because the cellular cochain complex is concentrated in degrees at most the dimension. The lemma is stated for arbitrary coefficient rings, since the argument only uses freeness of the cellular chain groups.

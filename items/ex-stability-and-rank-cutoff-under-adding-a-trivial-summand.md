---
id: ex-stability-and-rank-cutoff-under-adding-a-trivial-summand
kind: example
title: Stability and rank cutoff under adding a trivial summand
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-naturality-normalization-and-whitney-sum-for-chern-classes, thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes, def-pontryagin-classes-by-complexification, def-chern-classes-from-the-projective-bundle-relation, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 3.1-3.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Stability of Chern and Pontryagin classes, printed pp.80-96"
---

## Example

Assume AC. Let $E$ be a numerable complex bundle of rank $m$ and $F$ a
numerable real bundle of rank $n$ over a path-connected CW base (or CW-type
base), and let $\varepsilon^r$ denote a trivial summand of the same kind. Then
$$c(E\oplus\varepsilon^r)=c(E),\qquad p(F\oplus\varepsilon^r)=p(F),$$
and the coefficient cutoffs hold: $c_i(E)=0$ for $i>m$ and $p_i(F)=0$ whenever
$2i>n$.

## Facts & Assumptions

**Given:** AC, a numerable complex bundle $E$ of rank $m$, a numerable real bundle $F$ of rank $n$, and trivial summands $\varepsilon^r$.

[A1] The Axiom of Choice is assumed, exactly as inherited from the characteristic-class suppliers ([[def-axiom-of-choice]]).

[F1] The trivial bundle has total Chern class $1$, Chern classes are multiplicative, and $c_i=0$ above the rank ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]], [[def-chern-classes-from-the-projective-bundle-relation]]).

[F2] Pontryagin classes are stable under adding trivial summands and vanish above the real rank: $p_i(E\oplus\varepsilon^r)=p_i(E)$ and $p_i(E)=0$ for $2i>\operatorname{rank}E$ ([[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]], [[def-pontryagin-classes-by-complexification]]).

[F3] Trivial bundles are direct sums of trivial lines and direct sums are compatible with pullback ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

## Verification

**Proof technique:** direct.

1.1 Chern stability: by [F1] and [F3], $c(\varepsilon^r)=1$ and multiplicativity gives $c(E\oplus\varepsilon^r)=c(E)c(\varepsilon^r)=c(E)$; the cutoff $c_i=0$ for $i>m$ is part of the definition. [F1, F3]

1.2 Pontryagin stability: by [F2] the classes $p_i$ are unchanged when a trivial summand is adjoined, and $p_i(F)=0$ whenever $2i>n$ by the defining cutoff. [F2]

2.1 Consistency of the two parities: in the complex case the total class is unchanged, so all components are unchanged; in the real case the total Pontryagin class as a finite sum $\sum_ip_i$ is unchanged because each $p_i$ is. [step 1.1, step 1.2]

3.1 Boundary cases. For $r=0$ both identities are trivial; for $E$ or $F$ trivial of rank zero, $c(0)=1$ and $p(0)=1$ by the conventions, so the identities read $c(\varepsilon^r)=1$ and $p(\varepsilon^r)=1$. The cutoffs at $i=m$ and $2i=n$ are included, not excluded. The coefficient ring $\mathbb Z$ is nonzero and the sums are finite. AC is used only through [A1]. [A1, F1, F2, step 2.1] ∎

## Source notes

Hatcher's sections 3.1-3.2 record both stability statements: adding a trivial summand does not change the total Chern class, nor the total Pontryagin class, and the coefficients vanish above the rank by construction.

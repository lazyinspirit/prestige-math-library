---
id: thm-mordell-weil-for-abelian-varieties-over-number-fields
kind: theorem
title: Mordell–Weil finite generation for abelian varieties over number fields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-number-field
  - def-abelian-variety-over-a-field
  - lem-graph-closed-separated-target
  - lem-very-ample-implies-ample
  - thm-abelian-variety-is-projective
  - thm-segre-line-bundle-external-tensor
  - thm-weak-mordell-weil-finite-generation
  - thm-canonical-height-is-quadratic-and-functorial
  - thm-canonical-height-northcott-property
  - lem-height-descent-from-finite-quotient-and-northcott
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§9.2.1, complete full Mordell–Weil proof by weak finiteness and canonical-height descent, pp. 84–87."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§8.4.4–8.4.5; the general Mordell–Weil theorem there is a sketch citing Serre, not a complete independent proof."
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K/\mathbb Q$ be a finite extension and let $A/K$ be a proper, smooth, geometrically connected group variety. Then the abelian group $A(K)$ of $K$-rational points is finitely generated.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-number-field|number field]]

[[def-abelian-variety-over-a-field|abelian variety]]

## Facts & Assumptions

**Given:** AC and DC; a number field $K$; and an abelian variety $A/K$.

[A1] AC and DC are the stated axioms ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Every abelian variety over a number field has finite quotient $A(K)/nA(K)$ for each $n\ge2$ ([[thm-weak-mordell-weil-finite-generation]]).

[F2] For a symmetric ample line bundle, the canonical height is a nonnegative quadratic form on $A(K)$ ([[thm-canonical-height-is-quadratic-and-functorial]]).

[F3] Every bounded sublevel set of that canonical height is finite ([[thm-canonical-height-northcott-property]]).

[F4] If an abelian group $G$ has finite $G/2G$ and a nonnegative quadratic form with finite sublevel sets, then $G$ is finitely generated; the proof uses only finite choice ([[lem-height-descent-from-finite-quotient-and-northcott]]).

[F5] Every abelian variety is projective under AC; the graph into a product with a separated projective space is a closed immersion; the Segre embedding pulls $\mathcal O(1)$ back to the tensor product of the two hyperplane bundles; and a very ample line bundle on a projective scheme is ample ([[thm-abelian-variety-is-projective]], [[lem-graph-closed-separated-target]], [[thm-segre-line-bundle-external-tensor]], [[lem-very-ample-implies-ample]]).

## Proof

**Proof technique:** choose a symmetric ample line bundle and apply the abstract height-descent lemma to $A(K)$.

1.1 By [F5], choose a very ample line bundle $H$ on $A$ and its closed immersion $i:A\hookrightarrow\mathbb P^N_K$. Set $L=H\otimes[-1]^*H$. The bundle $L$ is symmetric because inversion exchanges its two factors. The map $P\mapsto(i(P),i(-P))$ is a closed immersion: it is the graph of the morphism $i\circ[-1]\circ i^{-1}:i(A)\to\mathbb P^N$, followed by the closed immersion $i(A)\times\mathbb P^N\hookrightarrow\mathbb P^N\times\mathbb P^N$, using the graph clause of [F5]. Its composition with the Segre embedding is a closed immersion whose pulled-back $\mathcal O(1)$ is $H\otimes[-1]^*H$; hence $L$ is very ample and ample by [F5]. [A1, F5, given, construct]

2.1 Let $G=A(K)$ and $q(P)=\widehat h_L(P)$. By [F2], $q$ is nonnegative and is represented by the symmetric biadditive pairing $B_L$. By [F1] with $n=2$, $G/2G$ is finite, and by [F3] each set $\{P:q(P)\le T\}$ is finite. All hypotheses of [F4] therefore hold, so $G$ is finitely generated. AC and DC enter through the arithmetic and height suppliers [F1]–[F3]; the descent step [F4] uses no choice axiom. [A1, F1, F2, F3, F4, step 1.1] ∎

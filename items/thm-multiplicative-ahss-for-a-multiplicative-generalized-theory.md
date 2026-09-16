---
id: thm-multiplicative-ahss-for-a-multiplicative-generalized-theory
kind: theorem
title: Multiplicative AHSS for a multiplicative generalized theory
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-cohomological-atiyah-hirzebruch-spectral-sequence, lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II, Lecture 29, printed pp. 100–101"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 29, product structure, printed pp. 100–101"
---

## Statement

Let $\widetilde h$ be a reduced generalized cohomology theory with a specified
unital, associative, graded-commutative coherent external product compatible with
suspension and satisfying the two relative cofiber-boundary Leibniz identities.
Then for a finite CW complex $X$ the cohomological AHSS of
[[thm-cohomological-atiyah-hirzebruch-spectral-sequence]] is multiplicative:
every page is a bigraded ring with $E_1$ the cellular-cochain algebra, the
differentials are derivations of total degree one, the skeletal filtration is
multiplicative, $F^pF^q\subseteq F^{p+q}$, and
$$E_\infty\cong\operatorname{gr}_Fh^*(X)$$
as graded rings. A ring prespectrum is one source of such external-product data,
not a hypothesis imposed by the theorem: any data satisfying the displayed
properties qualify.

## Facts & Assumptions

[A1] The external product data assumed in the statement comprise the natural bilinear relative pairings, the unit, associativity, graded commutativity, suspension compatibility and the two Leibniz identities ([[lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss]]).

[A2] The finite-CW cohomological AHSS has the skeletal exact couple of [[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], and its stable page is the associated graded of the skeletal filtration.

[A3] The paired skeletal exact couple induces page products, makes each differential a derivation, renders the filtration multiplicative and identifies the stable product with the associated-graded product; homotopic cellular diagonals agree from the second page on ([[lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss]]).

## Proof

**Proof technique:** direct.

**Given:** A reduced generalized cohomology theory $\widetilde h$ with the external product data of [A1] and a finite CW complex $X$.

1.1 The assumed data satisfy exactly the hypotheses of the pairing lemma [A3]: the relative products are natural and bilinear, the unit, associativity and graded-commutativity hold, and the two relative boundary Leibniz identities are assumed. [A1, given]

1.2 The skeletal exact couple and its stable identification are those of [A2], so the pairing lemma applies to this couple. [A2, given]

2.1 Applying [A3] gives products on every page, the derivation identity $d_r(xy)=d_r(x)y+(-1)^{p+q}x\,d_r(y)$, the inclusion $F^pF^q\subseteq F^{p+q}$, the identification of $E_\infty$ with the associated graded and the independence of the product from the chosen cellular diagonal from $E_2$ onward. [A3, step 1.1, step 1.2]

3.1 step 2.1 is exactly the asserted multiplicative structure; no representability or ring-spectrum hypothesis is used, since only the listed product data enter. [step 2.1] ∎

## Source notes

Compare [Miller](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), Lecture 29, printed pp. 100–101, for the product structure on each page, the derivation property and the associated-graded ring statement in the ordinary-cohomology case.

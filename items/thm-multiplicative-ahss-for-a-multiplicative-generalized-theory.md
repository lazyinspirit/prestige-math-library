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
    - title: "Daniel Dugger, Multiplicative structures on homotopy spectral sequences II, §3.1 and Theorem 3.4, printed pp. 4–5"
      url: https://pages.uoregon.edu/ddugger/multb.pdf
      locator: "§3.1 pairing of filtering towers and Theorem 3.4 diagonal case, printed pp. 4–5"
---

## Statement

Let $\widetilde h$ be a reduced generalized cohomology theory with a specified
unital, associative, graded-commutative coherent external product compatible with
suspension and satisfying the two relative cofiber-boundary Leibniz identities.
Then for a finite CW complex $X$ and a cellular approximation $\Delta:X\to X\times X$
of the diagonal the cohomological AHSS of
[[thm-cohomological-atiyah-hirzebruch-spectral-sequence]] is multiplicative from
its second page on: the relative products of skeletal pairs and $\Delta$ pair the
skeletal exact couple with itself, that pairing is a Leibniz pairing for $d_1$ and
descends to $E_2$, and for every $r\ge2$ the page $E_r$ is a unital associative
graded-commutative bigraded ring on which $d_r$ is a derivation of total degree one,
$$d_r(xy)=d_r(x)\,y+(-1)^{p+q}x\,d_r(y)\qquad(x\in E_r^{p,q}),$$
with $E_{r+1}\cong H(E_r,d_r)$ an isomorphism of bigraded rings. The product on
$E_2$ corresponds to the graded cup product under the natural isomorphism
$E_2^{p,q}\cong H^p(X;h^q(*))$, so it is independent of the chosen cellular
approximation of the diagonal. The skeletal filtration is multiplicative,
$F^pF^q\subseteq F^{p+q}$, and
$$E_\infty\cong\operatorname{gr}_Fh^*(X)$$
as graded rings. The first page carries the pairing and its Leibniz rule but is not
a ring in general: [[lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss]]
records an admissible cellular approximation whose first-page pairing is not
associative. A ring prespectrum is one source of such external-product data, not a
hypothesis imposed by the theorem: any data satisfying the displayed properties
qualify.

## Facts & Assumptions

[A1] The external product data assumed in the statement comprise the natural bilinear relative pairings, the unit, associativity, graded commutativity, suspension compatibility and the two Leibniz identities ([[lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss]]).

[A2] The finite-CW cohomological AHSS has the skeletal exact couple of [[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], and its stable page is the associated graded of the skeletal filtration.

[A3] The skeletal exact couple paired with itself through $\Delta$ carries the typed first-page pairing of the pairing lemma, a Leibniz rule for $d_1$, the descent of the pairing to $E_2$; from $E_2$ on the page products make each page a unital associative graded-commutative bigraded ring on which the differential is a derivation, with $E_{r+1}\cong H(E_r,d_r)$ as rings; the product on $E_2$ is the graded cup product under $E_2^{p,q}\cong H^p(X;h^q(*))$, so homotopic cellular approximations of the diagonal agree from the second page on and the first page is not in general a ring; the filtration is multiplicative and the stable product is the associated-graded product ([[lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss]]).

## Proof

**Proof technique:** direct.

**Given:** A reduced generalized cohomology theory $\widetilde h$ with the external product data of [A1], a finite CW complex $X$, and a cellular approximation $\Delta$ of the diagonal.

1.1 The assumed data satisfy exactly the hypotheses of the pairing lemma [A3]: the relative products are natural and bilinear, the unit, associativity and graded-commutativity hold, the two relative boundary Leibniz identities are assumed, and $\Delta$ is a cellular approximation of the diagonal of the finite complex. [A1, given]

1.2 The skeletal exact couple, its first page, its second page and its stable identification are those of [A2], so the pairing lemma applies to this couple and to this diagonal approximation. [A2, given]

2.1 Applying [A3] gives the typed first-page pairing, its Leibniz rule for $d_1$ and its descent to $E_2$; from the second page on it gives the ring products, the derivation identity $d_r(xy)=d_r(x)y+(-1)^{p+q}x\,d_r(y)$ for $r\ge2$, the ring comparison $E_{r+1}\cong H(E_r,d_r)$ and the identification of the $E_2$ product with the graded cup product, hence its independence from the chosen cellular diagonal from $E_2$ onward; and it gives the inclusion $F^pF^q\subseteq F^{p+q}$ together with the identification of $E_\infty$ with the associated graded. [A3, step 1.1, step 1.2]

3.1 Step 2.1 is exactly the asserted multiplicative structure from the second page on, together with the first-page pairing and its Leibniz rule and the exclusion of a general first-page ring; no representability or ring-spectrum hypothesis is used, since only the listed product data and the pairing lemma's construction enter. [step 2.1] ∎

## Source notes

Compare [Miller](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), Lecture 29, printed pp. 100–101, for the product structure on each page from the second page on, the derivation property and the associated-graded ring statement in the ordinary-cohomology case; and [Dugger](https://pages.uoregon.edu/ddugger/multb.pdf), *Multiplicative structures on homotopy spectral sequences II*, §3.1 with Theorem 3.4, printed pp. 4–5, for the pairing of filtering towers and the identification of the second-page product with the graded cup product on which the independence from the diagonal approximation rests.

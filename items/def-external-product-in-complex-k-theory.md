---
id: def-external-product-in-complex-k-theory
kind: definition
title: External product in complex K-theory
status: draft
origin: pipeline
deps: [def-grothendieck-ring-structure-and-rank-map, prop-k-zero-is-contravariantly-functorial-and-homotopy-invariant, thm-reduced-k-theory-exact-sequence-of-a-cofibration, def-smash-product-of-based-spaces, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, §2.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "External product and reduced smash product, printed pp.41–42"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 §2"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "External KU products, printed pp.205–208"
---

## Definition

For compact Hausdorff spaces $X$ and $Y$, define the **external product** by

$$a\boxtimes b=\operatorname{pr}_X^*(a)\,\operatorname{pr}_Y^*(b)\in K^0(X\times Y).$$

Equivalently, $[E]\boxtimes[F]$ is represented by
$\operatorname{pr}_X^*E\otimes\operatorname{pr}_Y^*F$. Pullback,
distributivity, and the ring structure make this a choice-free bilinear map

$$K^0(X)\otimes K^0(Y)\longrightarrow K^0(X\times Y)$$

that satisfies
$(a\boxtimes b)(a'\boxtimes b')=aa'\boxtimes bb'$.

Assume AC for the reduced clause. If $X$ and $Y$ are based and well-pointed,
and $a\in\widetilde K^0(X)$ and $b\in\widetilde K^0(Y)$, then
$a\boxtimes b$ restricts to zero on $X\vee Y$. Exactness for

$$X\vee Y\longrightarrow X\times Y\longrightarrow X\wedge Y$$

therefore supplies a class in $\widetilde K^0(X\wedge Y)$ whose pullback is
$a\boxtimes b$. It is unique: restriction to the wedge is surjective because
the two projections extend any pair of reduced classes on its two summands,
and the same projection argument after one reduced suspension makes
$$\widetilde K^0(\Sigma(X\times Y))\longrightarrow \widetilde K^0(\Sigma(X\vee Y))$$
surjective. In the bi-infinite exact sequence this kills the connecting
homomorphism preceding quotient pullback, so quotient pullback is injective.
This unique class is also denoted $a\boxtimes b$ and is the
**reduced external product**.

---
id: lem-rt-handlebody-pairing-and-surgery-gluing
kind: lemma
title: "RT handlebody pairings and surgery gluing"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [lem-modular-gauss-sums-and-kirby-color, def-weighted-lagrangian-ribbon-bordism, lem-maslov-index-four-lagrangian-cocycle, lem-relative-three-bordism-surgery-presentation, def-rt-state-spaces, def-countable-choice, def-axiom-of-choice, def-fusion-and-multifusion-category, thm-basic-properties-of-the-categorical-trace, thm-in-a-spherical-category-the-left-and-right-traces-agree, lem-balancing-and-hopf-link-character-identity]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§5.1–5.7"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds, Chapters II–IV"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
---

## Statement

For the state spaces of [[def-rt-state-spaces]], the canonical composition pairing

$$\operatorname{Hom}(\mathbf1,X)\times\operatorname{Hom}(X,\mathbf1)\longrightarrow\mathbb C,\qquad (v,w)\longmapsto wv$$

is perfect for every object $X$. In the handle object $H=\bigoplus_i i\otimes i^*$, closing a fixed simple summand contributes $d_i d_{i^*}=d_i^2$, and summing one handle gives $\sum_i d_i^2=D^2$. A surgery-defined bordism map is obtained by pairing its capped surgery evaluation against every dual handlebody state. The pairing and these local $D,d_i$ factors are proved below. Independence from surgery presentation, cancellation of the paired boundary handlebodies, and coupon cancellation are also required for this construction but are not proved in this carrier.

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category, the handle object $H$, a finite-genus surface state space, and a compact parametrized bordism.

[F1] Every object of a finite semisimple category decomposes as a finite direct sum of simples; the unit is simple and each simple endomorphism algebra is $\mathbb C$ ([[def-fusion-and-multifusion-category]]).

[F2] The pivotal trace is additive, multiplicative on tensor products, and spherical, so $d_{i^*}=d_i$ ([[thm-basic-properties-of-the-categorical-trace]], [[thm-in-a-spherical-category-the-left-and-right-traces-agree]], [[lem-balancing-and-hopf-link-character-identity]]).

[F3] A surgery presentation and Kirby move list are required by [[lem-relative-three-bordism-surgery-presentation]], and the colored-link evaluation and normalization data are those of [[lem-modular-gauss-sums-and-kirby-color]].

[A1] The relative Kirby move proof and the coupon-cancellation calculation are incomplete in the cited draft suppliers; they cannot be used as established invariance results.

[A2] Full AC is required by the boundary and duality suppliers; $\mathrm{AC}_\omega$ is required by the framed-tangle evaluation supplier ([[def-axiom-of-choice]], [[def-countable-choice]]).

## Proof

**Given:** The data in the Statement.

1.1 By [F1], write $X\cong\mathbf1^{\oplus r}\oplus\bigoplus_{i\ne0}i^{\oplus r_i}$. Then $\operatorname{Hom}(\mathbf1,X)\cong\mathbb C^r$ and $\operatorname{Hom}(X,\mathbf1)\cong(\mathbb C^r)^*$; composition pairs the inclusion of each unit copy with its projection and pairs all other simple summands to zero. In these coordinates the pairing is $(z,w)\mapsto\sum_{\alpha=1}^r w_\alpha z_\alpha$, hence is nondegenerate in both variables. [F1, given, algebra]

1.2 The summand $i\otimes i^*$ in one handle closes to a pair of evaluation loops, one for $i$ and one for $i^*$. Their values are $\operatorname{tr}(1_i)=d_i$ and $\operatorname{tr}(1_{i^*})=d_{i^*}=d_i$ by [F2]. Therefore this summand contributes $d_i^2$, and summing the finite direct sum gives $D^2=\sum_i d_i^2$. For $g$ handles the same calculation is iterated $g$ times, with each fixed color tuple contributing $\prod_{r=1}^g d_{i_r}^2$ and the unrestricted sum equal to $D^{2g}$. [F2, given, algebra]

2.1 Given a closed-link evaluation functional on every capped bordism, [F1] makes the cap pairing perfect, so there is at most one state vector whose pairing with each dual handlebody state equals that functional. Existence and independence require that the normalized surgery evaluation be invariant under the relative Kirby moves, that the paired boundary 1/2-handle pairs cancel, and that each coupon and its dual contract to the identity resolution. The cited [[lem-relative-three-bordism-surgery-presentation]] explicitly leaves move completeness unproved, and [[lem-modular-gauss-sums-and-kirby-color]] leaves the coupon-bearing slide identity unproved. Consequently this step supplies a construction recipe but not a well-defined bordism map. [A1, A2, F1, F3, step 1.1, step 1.2]

## Unresolved proof obligation

Complete the local relative Kirby move and coupon-cancellation proof, including the normalization and Maslov signature change for each canceled handle pair. Until then the existence and presentation-independence of the surgery-defined maps remain escalated.

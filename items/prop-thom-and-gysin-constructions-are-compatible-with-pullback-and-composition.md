---
id: prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition
kind: proposition
title: Thom and Gysin constructions respect pullback and composition
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-naturality-and-uniqueness-of-thom-classes, thm-external-product-and-whitney-sum-formulas-for-thom-classes, def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section, thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle, prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "naturality and products, printed pp.195–196"
verification:
  precheck: pass
  repair: research/frontier-41-ha-dt-29-main-merge-published-evidence/prop-thom-and-gysin-constructions-are-compatible-with-pullback-and-composition.repair.json
---

## Statement

Assume AC, let $R$ be a commutative unital ring, and let all bundles be
$R$-oriented numerable bundles over CW complexes or paracompact Hausdorff
bases of CW type, as in the general Thom and Gysin theorems.
Orientation-preserving pullback squares commute with Thom
isomorphisms, Euler classes, zero-section Gysin maps, and the Gysin long exact
sequence. For composable oriented zero sections
$$B\xrightarrow{s_\xi}D(\xi)\xrightarrow{s_\eta}D(\eta),$$
where $\eta$ is an oriented bundle over $D(\xi)$, the composite has ordered
normal bundle $\xi\oplus s_\xi^*\eta$. If a compatible
orientation-preserving identification of an iterated tubular neighborhood pair
with the disk/sphere pair of this ordered sum is supplied, define the
composite Gysin map using that identification and Thom multiplication. Then
$$(s_\eta\circ s_\xi)_!=(s_\eta)_!\circ(s_\xi)_!$$
under the supplied iterated tubular/disk-pair identification. No canonical
such identification is asserted.

## Facts & Assumptions

**Given:** The ring, spaces, bundles, and orientations in the statement, together with orientation-preserving pullback data or the two composable zero sections.

[F1] [[thm-naturality-and-uniqueness-of-thom-classes]] gives naturality of normalized Thom classes.

[F2] [[thm-external-product-and-whitney-sum-formulas-for-thom-classes]] gives the ordered-sum Thom formula and its Koszul convention.

[F3] [[def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section]] defines each zero-section pushforward as Thom multiplication followed by the pair map. For the composite, the notation in the statement is defined only after the displayed compatible iterated pair identification is supplied.

[F4] [[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]] gives the natural exact ladder, while [[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]] identifies successive pullbacks.

[A1] [[def-axiom-of-choice]] is used only through [F1]–[F4].

## Proof

**Proof technique:** apply naturality and associate the two Thom multiplications.

1.1 In an orientation-preserving pullback square, [F1] identifies the pulled-back Thom class.  Pullback commutes with $\pi^*$, relative cup product and the relative-to-absolute pair map, so the Thom isomorphism and [F3]'s Gysin map commute.  Pulling back along the zero section gives Euler naturality, and [F4] supplies the resulting natural ladder of exact sequences. [F1, F3, F4]

1.2 For the composable zero sections, functoriality in [F4] identifies the restriction of the second normal bundle to $B$ as $s_\xi^*\eta$. The supplied iterated tubular identification orders the first normal directions as those of $\xi$ and the second as those of $s_\xi^*\eta$, hence identifies the composite normal bundle with $\xi\oplus s_\xi^*\eta$. [F3, F4]

2.1 Apply [F3] twice to $a\in H^*(B;R)$.  Under the iterated pair identification, the result is the relative-to-absolute image of $\pi^*a$ cupped first with $u_\xi$ and then with the pullback of $u_\eta$.  Associativity makes this cup product $\pi^*a\smile(u_\xi\smile u_{s_\xi^*\eta})$.  By [F1]–[F2], the parenthesized class is the Thom class of the ordered normal sum from step 1.2, so [F3] identifies the result with $(s_\eta\circ s_\xi)_!(a)$. [F1, F2, F3, step 1.2]

3.1 Empty bases and zero rings give unique zero maps.  A rank-zero section with supplied orientation unit $o$ has Thom class and Euler class $o$ and acts by multiplication by $o$, by [F3]; this is the identity for the standard unit orientation. If either rank is zero, the ordered-sum formula of [F2] multiplies the corresponding orientation units, exactly as does the composite in step 2.1; ranks one and point bases require no change.  Identity pullback squares, zero inputs, both orders of the normal sum, both stages of the composite, and every Gysin-sequence endpoint are covered by steps 1.1–2.1.  Reversing the order would introduce the Koszul sign from [F2], which is why the order is stated.  AC is used exactly through [A1]; the two-stage calculation is finite and makes no choices. [F1, F2, F3, F4, A1, step 1.1, step 1.2, step 2.1] ∎

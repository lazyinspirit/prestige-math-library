---
id: thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle
kind: theorem
title: Gysin long exact sequence of an oriented sphere bundle
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, prop-relative-cup-products-are-natural-and-compatible-with-connectors, def-serre-edge-homomorphisms-and-transgression, thm-cohomological-serre-spectral-sequence, thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles and K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Gysin sequence, printed pp.88–91"
    - title: "Miller, MIT 18.906 notes, Lectures 26 and 35"
      url: "https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "transgression and Euler/Gysin comparison, printed pp.89–92 and 129–132"
---

## Statement

Assume AC.  For an $R$-oriented rank-$n$ bundle $\xi$ in the scope of the
general Thom theorem, including $n=0$, there is a natural exact sequence
$$\cdots\to H^{k-n}(B;R)\xrightarrow{\smile e_{\rm Th}(\xi)}H^k(B;R)\xrightarrow{p^*}H^k(S(\xi);R)\xrightarrow{\partial_G}H^{k-n+1}(B;R)\xrightarrow{\smile e_{\rm Th}(\xi)}\cdots.$$
For $n\geq2$, with the preceding cohomological Serre convention, the Euler
class is the transgression $d_n$ of the normalized generator of
$H^{n-1}(S^{n-1};R)$.  Ranks zero and one are covered by the pair sequence,
but not by that path-connected-sphere Serre comparison.

## Facts & Assumptions

**Given:** AC, the oriented metric bundle, its disk projection $\pi$, sphere projection $p$, and normalized Thom class.

[F1] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] gives the natural sequence of $(D(\xi),S(\xi))$.

[F2] [[def-gysin-pushforward-for-an-oriented-vector-bundle-zero-section]] identifies relative groups by Thom and the relative-to-absolute map by cup with $e_{\rm Th}$ after radial retraction.

[F3] [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]] fixes the product and connector signs.

[F4] [[def-serre-edge-homomorphisms-and-transgression]] and [[thm-cohomological-serre-spectral-sequence]] define the cohomological transgression through filtered cochain extensions.

[F5] [[thm-gysin-sequence-from-a-sphere-fiber-serre-spectral-sequence]] gives the two-row Serre Gysin sequence for a path-connected cohomology sphere.

[A1] [[def-axiom-of-choice]] is used through [F2], [F4], and [F5].

## Proof

**Proof technique:** rewrite the disk/sphere pair sequence and compare its filtered cochain.

1.1 The pair sequence [F1] contains $H^k(D,S)\xrightarrow{j^*}H^k(D)\to H^k(S)\to H^{k+1}(D,S)$.  Radial retraction identifies $H^k(D)$ with $H^k(B)$, and the Thom isomorphism [F2] identifies $H^k(D,S)$ with $H^{k-n}(B)$.  Under these identifications the middle restriction is $p^*$ and [F2]–[F3] identify $j^*$ with $a\mapsto a\smile e_{\rm Th}(\xi)$. [F1, F2, F3]

1.2 Let $n\geq2$ and let $z$ be the normalized class of the sphere fiber.  In the filtered-cochain definition [F4], survival of $z$ to page $n$ means choosing extensions over successive base skeleta whose coboundaries vanish through filtration $n-1$; $d_nz$ is represented by the remaining base-degree-$n$ coboundary.  Perform the same extensions inside the disk bundle.  The fiber pair connector sends $z$ to the normalized disk-pair generator, so the resulting relative class is $u_\xi$.  Mapping it relative-to-absolute produces $j^*u_\xi$, and radial retraction produces $e_{\rm Th}(\xi)$.  Thus the very cochain that represents $d_nz$ represents $e_{\rm Th}(\xi)$, with the positive pair connector and ordered fiber generator fixing the sign. [F2, F3, F4]

2.1 Substitute the identifications of step 1.1 at every degree of [F1].  Define $\partial_G$ as the pair connector followed by the inverse Thom isomorphism.  Exactness and naturality are preserved by isomorphism, giving the displayed long exact sequence and its pullback-natural ladders. [F1, F2, F3, step 1.1]

3.1 The sphere fiber has dimension $n-1\geq1$, so [F5] applies with its symbol $n$ replaced by $n-1$.  Its only differential is precisely the $d_n$ of step 1.2, and its cup map is multiplication by that transgression.  Hence its Serre sequence agrees term-for-term with step 2.1 and the two Euler classes are equal. [F4, F5, step 2.1, step 1.2]

4.1 For $n=0$, $S(\xi)=\varnothing$, $e=1$, and the sequence alternates an identity with zero groups.  For $n=1$, the pair sequence remains valid (an oriented line is covered directly), while [F5] is inapplicable because $S^0$ is not path-connected.  Empty bases, the zero ring, zero/unit Euler classes, negative degrees, both pair-sequence endpoints, the connector sign and identity pullbacks are included in steps 1.1–3.1.  AC is used exactly through [A1]; rewriting the supplied pair sequence adds no choice.  No splitting or converse is asserted. [F1, F2, F3, F4, F5, A1, step 1.1, step 2.1, step 1.2, step 3.1] ∎

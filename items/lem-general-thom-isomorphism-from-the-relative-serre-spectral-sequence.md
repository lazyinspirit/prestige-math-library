---
id: lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence
kind: lemma
title: General Thom isomorphism from the relative Serre spectral sequence
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-cohomological-serre-spectral-sequence, thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence, def-r-oriented-vector-bundle-and-orientation-local-system, def-thom-class-by-fiberwise-normalization, lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring, prop-relative-cup-products-are-natural-and-compatible-with-connectors, thm-numerable-fiber-bundles-are-hurewicz-fibrations, thm-numerable-vector-bundles-admit-bundle-metrics, def-pullback-vector-bundle-and-pullback-section, prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism, thm-homotopy-invariance-of-vector-bundle-pullback, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Lectures 34–35"
      url: "https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "orientation and Proposition 35.2, printed pp.124–130"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Thom isomorphism and Serre proof, printed pp.194–196"
---

## Statement

Assume AC.  Let $\xi$ be an $R$-oriented rank-$n$ numerable vector bundle over
a CW complex, or over a paracompact Hausdorff base of CW type.  The relative
Serre spectral sequence of
$(D(\xi),S(\xi))\to B$ has
$$E_2^{p,q}=H^p\bigl(B;\mathcal H^q(D^n,S^{n-1};R)\bigr),$$
so orientation makes its single nonzero row $q=n$ equal to $H^p(B;R)$.
It collapses without extensions, and its edge is
$a\mapsto\pi^*a\smile u_\xi$ for the normalized Thom class.

## Facts & Assumptions

**Given:** AC and the numerable oriented bundle.

[F0] [[thm-numerable-vector-bundles-admit-bundle-metrics]] supplies a metric
under AC.

[F1] [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]] makes the disk
and sphere bundles fibrations to which the Serre skeletal construction applies.

[F2] [[thm-cohomological-serre-spectral-sequence]] gives the absolute
skeletal cochain construction, local-coefficient $E_2$ identification, and
strong convergence; [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]]
identifies its products.

[F3] [[lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring]] and
[[def-r-oriented-vector-bundle-and-orientation-local-system]] calculate the
relative fiber row and identify its monodromy with the orientation system.

[F4] [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]]
identifies the relative filtered product and its edge action.

[F5] [[def-thom-class-by-fiberwise-normalization]] defines normalization.

[F6] [[def-pullback-vector-bundle-and-pullback-section]],
[[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]], and
[[thm-homotopy-invariance-of-vector-bundle-pullback]] transport bundles and
their disk/sphere pairs along homotopy equivalences.

[A1] [[def-axiom-of-choice]] is used in [F2] and [F6].

## Proof

**Proof technique:** run the Serre construction on relative cochains.

1.1 Choose the metric from [F0].  Over a CW base, filter the relative cochain complex $C^*(D(\xi),S(\xi);R)$ by inverse images of the base skeleta.  In the cellwise calculation in [F2], quotient every disk-bundle chain group by its sphere-bundle subcomplex.  Subdivision and fibration lifting in [F1] preserve that subcomplex, so the identical exact-couple argument has fiber term $H^q(D^n,S^{n-1};R)$ and yields the displayed relative $E_2$ page with the same convergence bounds. [F0, F1, F2]

2.1 By [F3], those fiber groups vanish unless $q=n$, where they form the orientation local system.  The supplied orientation identifies that system with the constant system $R$.  Hence every differential has a zero source or target, $E_2=E_\infty$, and in total degree $k+n$ there is exactly one filtration quotient, $E_\infty^{k,n}=H^k(B;R)$.  Thus there is no additive extension to split. [F2, F3, step 1.1]

3.1 In total degree $n$, the unit section $1\in H^0(B;R)=E_2^{0,n}$ survives and, through convergence, defines a class $u\in H^n(D(\xi),S(\xi);R)$.  The cellwise edge restriction sends it to the chosen generator in every fiber, so [F5] makes it a normalized Thom class.  By [F2] and [F4], multiplication by this permanent edge class sends $a\in E_2^{k,0}(B)$ to $a\in E_2^{k,n}$ under the orientation identification.  Since both source and target have a single filtration quotient, the abutment edge is exactly $a\mapsto\pi^*a\smile u$ and is an isomorphism. [F2, F3, F4, F5, step 2.1]

4.1 Now let $B$ be paracompact Hausdorff of CW type and choose a homotopy equivalence $f:K\to B$ from a CW complex, part of the CW-type hypothesis.  Apply steps 1.1–3.1 to $f^*\xi$.  A homotopy inverse and [F6] identify the iterated pullbacks with the original bundle; the induced radial bundle maps are homotopy inverse maps of disk/sphere pairs.  Ordinary and relative homotopy invariance therefore identify the two Thom maps and transport the normalized class and isomorphism back to $B$. [F6, step 1.1, step 2.1, step 3.1]

5.1 For $n=0$ the only row is $q=0$, $u=1$, and the edge is the identity.  Empty bases are handled componentwise by zero groups; disconnected bases use the componentwise construction and AC already assumed in [A1] for the cohomological comparison.  The zero ring, a point base, the first and last filtration pieces, identity pullback, and both homotopy-equivalence composites are included.  AC is used exactly through [F0], [F2], and [F6]; the one-row collapse and relative cell quotient add no choice. [F0, F1, F2, F3, F4, F5, F6, A1, step 1.1, step 2.1, step 3.1, step 4.1] ∎

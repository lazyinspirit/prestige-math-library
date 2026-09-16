---
id: thm-thom-isomorphism-for-oriented-vector-bundles
kind: theorem
title: Thom isomorphism for oriented vector bundles
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence, lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover, thm-numerable-vector-bundles-admit-bundle-metrics, def-r-oriented-vector-bundle-and-orientation-local-system, lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring, def-homology-and-cohomology-with-local-coefficients, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, Proposition 35.2"
      url: "https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "printed pp.129–130"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196"
---

## Statement

Assume AC.  Every $R$-oriented rank-$n$ numerable vector bundle over a CW
complex, or over a paracompact Hausdorff base of CW type, has a unique
normalized Thom class $u_\xi$, and
$$a\longmapsto\pi^*a\smile u_\xi:H^k(B;R)\xrightarrow{\cong}H^{k+n}(D(\xi),S(\xi);R)$$
for every $k$.  Without a supplied orientation, the canonical twisted form is
$$H^k(B;\mathcal O_R(\xi))\xrightarrow{\cong}H^{k+n}(D(\xi),S(\xi);R).$$
The finite supplied-trivializing-cover theorem is a choice-free special case.

## Facts & Assumptions

**Given:** AC and a numerable rank-$n$ vector bundle over one of the stated bases; in the untwisted clause its $R$-orientation is supplied.

[F1] [[thm-numerable-vector-bundles-admit-bundle-metrics]] supplies the metric.

[F2] [[lem-general-thom-isomorphism-from-the-relative-serre-spectral-sequence]] gives the relative skeletal spectral sequence with $E_2^{p,q}=H^p(B;\mathcal H^q(D^n,S^{n-1};R))$, finite convergence, and the normalized cup-product edge in the oriented case.

[F3] [[lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring]] makes the fiber cohomology vanish off degree $n$, and [[def-r-oriented-vector-bundle-and-orientation-local-system]] identifies the degree-$n$ system as $\mathcal O_R(\xi)$ before any orientation is supplied. [[def-homology-and-cohomology-with-local-coefficients]] types its cohomology.

[F4] [[lem-thom-isomorphism-extends-over-a-finite-numerable-trivializing-cover]] gives the independent finite-cover special case.

[A1] [[def-axiom-of-choice]] is assumed for [F1]–[F3] as recorded in [F2].

## Proof

**Proof technique:** read both oriented and twisted forms from the one-row edge.

1.1 Choose the metric by [F1].  With the orientation supplied, [F2] gives a normalized class $u_\xi$ and identifies the only relative Serre row with $H^k(B;R)$.  Its edge is the displayed cup-product map and is an isomorphism in every degree. [F1, F2]

1.2 For the unoriented calculation, use the $E_2$ formula and finite convergence stated in [F2]. By [F3], every row is zero except $q=n$, and that row is exactly $\mathcal O_R(\xi)$ before any orientation is selected. Thus the sequence collapses with one filtration quotient and gives the canonical isomorphism $H^k(B;\mathcal O_R(\xi))\cong H^{k+n}(D(\xi),S(\xi);R)$. A global untwisted Thom class is neither chosen nor asserted in this clause. [F2, F3]

2.1 If $u$ and $u'$ are normalized, step 1.1 writes $u-u'=\pi^*a\smile u_\xi$ for a unique $a\in H^0(B;R)$.  Fiber restriction gives $a(b)o_b=0$ for every $b$; since $o_b$ is a free rank-one generator, $a(b)=0$.  Thus $a=0$ componentwise and $u=u'$. [F2, step 1.1]

3.1 Under a supplied finite trivializing cover, [F4] constructs the same unique normalized class and cup isomorphism by finite Mayer–Vietoris.  Uniqueness from step 2.1 identifies it with the Serre class, so this is genuinely a special case and not an additional hypothesis on the general theorem. [F4, step 1.1, step 2.1]

4.1 For $n=0$, $u=1$ and both maps are identities; on an empty base they are the unique maps of zero groups.  Point and disconnected bases, the zero ring, degree-zero/negative input, the only Serre row and both filtration endpoints are covered by [F2].  AC is used exactly through [F1], [F2], and the local-coefficient cohomology interface [F3]; the finite-cover proof [F4] uses none. [F1, F2, F3, F4, A1, step 1.1, step 1.2, step 2.1, step 3.1] ∎

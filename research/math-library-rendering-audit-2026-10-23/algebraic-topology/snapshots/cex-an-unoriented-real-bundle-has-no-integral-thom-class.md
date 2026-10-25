---
id: cex-an-unoriented-real-bundle-has-no-integral-thom-class
kind: counterexample
title: An unoriented real bundle has no integral Thom class
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-r-oriented-vector-bundle-and-orientation-local-system, def-thom-class-by-fiberwise-normalization, def-relative-singular-cochain-complex, thm-singular-chain-homotopy-formula, lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring, thm-thom-isomorphism-for-oriented-vector-bundles, def-axiom-of-choice]
proof_strategy: contradiction
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "orientations and Thom classes, printed pp.194–196"
---

## Statement refuted

Assume AC only for the positive mod-two comparison.  It is false that every
real vector bundle has an untwisted integral class restricting to a generator
on every fiber.  The Möbius line bundle $\mu\to S^1$ has no such integral
class because its orientation system has monodromy $-1$, although it does have
a normalized mod-two Thom class.

## Facts & Assumptions

**Given:** The Möbius model $\mu=([0,1]\times\mathbb R)/((0,v)\sim(1,-v))$, its induced disk/sphere pair, and integral or mod-two coefficients as specified.

[F1] [[def-r-oriented-vector-bundle-and-orientation-local-system]] defines the orientation system by transport on the top fiber disk-pair group and identifies sign monodromy as the integral obstruction.

[F2] [[def-thom-class-by-fiberwise-normalization]] types the restriction of a relative class to every fiber pair and requires a normalized class to restrict to the chosen generator.

[F3] [[def-relative-singular-cochain-complex]] gives relative cohomology from the quotient chain complex, and [[thm-singular-chain-homotopy-formula]] gives the prism identity used for a homotopy through maps of pairs.

[F4] [[lem-disk-pair-cohomology-over-an-arbitrary-commutative-ring]] identifies the interval-pair group with the coefficient ring via the ordered endpoint connector and records that reversing the ordered coordinate negates its generator.

[F5] [[thm-thom-isomorphism-for-oriented-vector-bundles]] supplies the normalized Thom class of an oriented numerable bundle over a CW complex under AC.

[A1] [[def-axiom-of-choice]] is used only through the positive existence clause of [F5].

## Counterexample

**Proof technique:** contradiction.

1.1 Suppose, toward a contradiction, that $u\in H^1(D(\mu),S(\mu);\mathbb Z)$ restricts to a generator on every fiber.  Pulling the disk/sphere pair back along the quotient parameter gives the product pair $P=([0,1]\times[-1,1],[0,1]\times\{-1,1\})$ and the quotient pair map $Q:P\to(D(\mu),S(\mu))$, $Q(t,v)=[t,v]$. [F2, assume-contra]

2.1 Write $j_t:([-1,1],\{-1,1\})\to P$ for inclusion at $t$.  The maps $j_0$ and $j_1$ are homotopic through maps of pairs.  The prism of [F3] preserves the boundary subcomplex, descends to relative chains, and after cochain precomposition shows $j_0^*Q^*u=j_1^*Q^*u$. [F3, step 1.1]

3.1 Put $g=j_0^*Q^*u$.  The clutching relation gives $Qj_1(v)=[1,v]=[0,-v]=Qj_0r(v)$, so step 2.1 says $g=r^*g$ for the reflection $r(v)=-v$.  Reflection swaps the endpoint class $(0,1)$ with $(1,0)=-(0,1)$ modulo diagonal constants, so the ordered connector calculation in [F4] gives $r^*g=-g$ in $H^1([-1,1],\{-1,1\};\mathbb Z)\cong\mathbb Z$.  Thus $2g=0$, impossible for the generator required in step 1.1.  Hence no integral fiberwise-generating class exists. [F1, F4, step 1.1, step 2.1, discharge-contradiction]

4.1 Reducing the same clutching action modulo two makes $-1=1$, so [F1] gives the canonical mod-two orientation.  The Möbius bundle is numerable over the CW complex $S^1$, and [F5] therefore supplies its normalized mod-two class.  Thus the example isolates the nontrivial integral orientation system rather than a failure of the disk-pair construction. [F1, F2, F4, F5, A1, step 3.1]

5.1 The circle base and interval fibers are nonempty and the coefficient rings are fixed and nonzero.  The rank-one fiber, zero vector, both interval endpoints, both base-loop endpoints, identity transport before clutching, sign reversal at clutching, degree-one generator, zero class and mod-two sign degeneration all occur in steps 1.1–4.1.  The integral nonexistence proof is finite and choice-free; AC is used only through [A1] for the positive mod-two existence statement.  No converse beyond this explicit witness is asserted. [F1, F2, F3, F4, F5, A1, step 1.1, step 2.1, step 3.1, step 4.1, discharge-contradiction] ∎

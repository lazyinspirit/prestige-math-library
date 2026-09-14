---
id: ex-mod-two-thom-class-of-the-mobius-line-bundle
kind: example
title: Mod-two Thom class of the Möbius line bundle
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-r-oriented-vector-bundle-and-orientation-local-system, thm-thom-isomorphism-for-oriented-vector-bundles, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "mod-two orientations and Thom classes, printed pp.194–196"
---

## Example

Assume AC for Thom existence.  The Möbius line bundle is not
$\mathbb Z$-oriented, but it is canonically $\mathbb F_2$-oriented.  It
therefore has a normalized mod-two Thom class and isomorphisms
$$H^k(S^1;\mathbb F_2)\cong H^{k+1}(D(\mu),S(\mu);\mathbb F_2).$$

## Facts & Assumptions

**Given:** The model
$\mu=([0,1]\times\mathbb R)/((0,t)\sim(1,-t))\to S^1$.

[F1] [[def-r-oriented-vector-bundle-and-orientation-local-system]] defines
orientation by the monodromy action on the top disk-pair cohomology and gives
the canonical mod-two orientation.

[F2] [[thm-thom-isomorphism-for-oriented-vector-bundles]] gives the normalized
class and degree shift under AC.

[A1] [[def-axiom-of-choice]] is used only through [F2].

## Verification

**Proof technique:** compute the clutching action on the interval pair.

1.1 The generator of $H^1([-1,1],\{-1,1\};\mathbb Z)$ is the pair connector of the endpoint class $(0,1)$ modulo diagonal constants.  The Möbius clutching map is reflection $t\mapsto-t$, which swaps the endpoint coordinates.  It sends $(0,1)$ to $(1,0)$, and $(1,0)=-(0,1)$ modulo the diagonal $(1,1)$.  Thus its integral orientation monodromy is $-1$. [F1]

2.1 A global integral generator would have to return to itself after the base loop, while step 1.1 returns its negative.  Since a generator of the free module $\mathbb Z$ is nonzero, this is impossible.  Modulo two, $-1=1$ and the same transition fixes the unique nonzero generator, giving the canonical $\mathbb F_2$ orientation of [F1]. [F1, step 1.1]

3.1 Apply [F2] with rank one and $R=\mathbb F_2$.  It produces a unique normalized degree-one Thom class and the displayed shift for every $k$.  The two fiber endpoints, the base-loop start/end, the zero vector, degree-zero unit and zero classes are explicit above.  The base and fibers are nonempty, and the coefficient rings are fixed, so empty and zero-ring cases are inapplicable.  The monodromy calculation is finite and choice-free; AC is used exactly through [A1] in [F2]. [F1, F2, A1, step 1.1, step 2.1] ∎

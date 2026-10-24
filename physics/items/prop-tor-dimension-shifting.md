---
id: prop-tor-dimension-shifting
title: "Tor admits dimension shifting in either variable"
kind: proposition
status: published
origin: pipeline
deps: ["thm-long-exact-tor-sequence-in-the-left-module-variable", "thm-long-exact-tor-sequence-in-the-right-module-variable", "prop-positive-tor-vanishes-when-the-resolved-variable-is-projective", "prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions", "def-dependent-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: gpt-6-astra
    verdict: certify
    date: 2026-09-09
    scope: owner-authorized-local-choice-contract-repair
    delegated_by: owner
---

## Statement

Assume Dependent Choice (DC) and supply the projective resolutions used to
compute Tor. If $0\to K\to P\to M\to0$ is exact in left $R$-modules
with $P$ projective, then for every right module $N$ and $i\ge1$ the
connecting map gives
$$\operatorname{Tor}_{i+1}^R(N,M)\cong\operatorname{Tor}_i^R(N,K).$$
Similarly, for $0\to L\to Q\to N\to0$ exact in right modules with
$Q$ projective and a left module $M$, the connecting map gives
$$\operatorname{Tor}_{i+1}^R(N,M)\cong\operatorname{Tor}_i^R(L,M)\qquad(i\ge1).$$
These isomorphisms are natural for maps of the respective short exact
sequences and of the other module; they do not assert the same formula at
$i=0$.

## Proof

**Given:** the first displayed short exact sequence, a right module $N$,
supplied projective resolutions and [[def-dependent-choice]].

1.1 Under DC, [[thm-long-exact-tor-sequence-in-the-left-module-variable]] gives the segment $\operatorname{Tor}_{i+1}(N,P)\to\operatorname{Tor}_{i+1}(N,M)\xrightarrow{\partial}\operatorname{Tor}_i(N,K)\to\operatorname{Tor}_i(N,P)$. [given]

2.1 Compute the projective variable using its length-zero resolution. The positive homology groups are zero by [[prop-positive-tor-vanishes-when-the-resolved-variable-is-projective]]. Under DC, [[prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions]] transports that computation to the resolutions in step 1.1. Both outside terms therefore vanish since $i\ge1$. [step 1.1, algebra]

3.1 Exactness makes $\partial$ injective and surjective. Naturality follows from the connecting-map naturality of the cited long exact sequence. For $0\to L\to Q\to N\to0$, use [[thm-long-exact-tor-sequence-in-the-right-module-variable]] and the length-zero resolution of the projective right module $Q$; its two outside positive Tor groups vanish by the same argument, proving the second formula and its naturality. [step 1.1, step 2.1, algebra] ∎

## Remarks

The length-zero computation and the inference that an exact segment
$0\to A\to B\to0$ gives an isomorphism are choice-free. DC is used here
for the quoted natural Tor sequences and their resolution comparisons.
If those sequences and coherent identifications are supplied explicitly,
the same dimension-shifting inference needs no additional choice axiom.

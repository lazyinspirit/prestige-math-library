---
id: cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes
title: "The Tor boundary is exactly the obstruction to left exactness after tensoring a fixed short exact sequence"
kind: corollary
status: published
origin: pipeline
deps: ["thm-long-exact-tor-sequence-in-the-left-module-variable", "def-dependent-choice"]
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

Assume Dependent Choice (DC), with projective resolutions supplied for the
Tor long exact sequence. For $0\to A\to B\to C\to0$ of left
$R$-modules and a right module $N$, the sequence
$0\to N\otimes_R A\to N\otimes_R B\to N\otimes_R C\to0$ is exact
exactly when the connecting homomorphism
$\partial:\operatorname{Tor}_1^R(N,C)\to N\otimes_R A$ is zero.
This is vanishing of the boundary map, not necessarily of its domain.

## Proof

**Given:** the displayed short exact sequence, $N$, supplied resolutions,
and [[def-dependent-choice]].

1.1 Apply the DC-qualified [[thm-long-exact-tor-sequence-in-the-left-module-variable]]. Its exact degree-zero tail is $\operatorname{Tor}_1^R(N,C)\xrightarrow\partial N\otimes_R A\to N\otimes_R B\to N\otimes_R C\to0$. [given]

2.1 By exactness of that tail, exactness already holds at $N\otimes_R B$ and $N\otimes_R C$, including surjectivity of the final tensor map. The kernel of $N\otimes_R A\to N\otimes_R B$ equals $\operatorname{im}\partial$. This uses the stated Tor LES tail, not an undeclared tensor theorem for a commutative ring. [step 1.1, algebra]

3.1 Thus injectivity of $N\otimes A\to N\otimes B$, and hence exactness of the whole tensor sequence, is equivalent to $\partial=0$. [step 2.1, algebra] ∎

## Remarks

For any explicitly supplied exact tail of the form in step 1.1, the
equivalence proved in steps 2.1–3.1 is choice-free. DC is invoked only to
obtain the quoted natural resolution-independent Tor boundary; it is not
asserted necessary for this elementary kernel-image implication.

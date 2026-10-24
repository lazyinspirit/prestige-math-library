---
id: ex-tor-symmetry-over-a-commutative-ring
title: "Tor symmetry over a commutative ring"
kind: example
status: published
origin: pipeline
deps: ["thm-tor-symmetry-over-a-commutative-ring", "thm-tor-of-two-cyclic-abelian-groups", "thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion", "def-axiom-of-choice", "def-dependent-choice", "thm-recursion"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: Codex
    verdict: locally-repaired
    date: 2026-09-10
    scope: "Owner-authorized Tor symmetry choice/data and missing cyclic-supplier repair; no independent judge"
    delegated_by: owner
---

## Example

Assume AC ([[def-axiom-of-choice]]). Over $R=\mathbb Z$,
$\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/4,\mathbb Z/6)\cong\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/6,\mathbb Z/4)\cong\mathbb Z/2$.
The first isomorphism is the natural balanced-Tor symmetry. The fixed-resolution
kernel calculations and tensor swap are choice-free; AC supplies the DC used
for resolution-independent comparison.

## Verification

**Given:** the commutative ring $\mathbb Z$, modules $\mathbb Z/4$ and $\mathbb Z/6$, and AC.

[L1] The explicit multiplication-by-$4$ and multiplication-by-$6$ resolutions and the cyclic kernel calculation are supplied by [[thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]]; under AC, [[thm-tor-of-two-cyclic-abelian-groups]] identifies both balanced groups with the cyclic group of gcd order.

[L2] With supplied resolutions and DC, Tor has the natural tensor-factor symmetry ([[thm-tor-symmetry-over-a-commutative-ring]], [[def-dependent-choice]]).

1.1 AC implies the DC required by [L2]: for an entire relation on a nonempty set, choose one successor at each point using AC and iterate that self-map from the prescribed start using [[thm-recursion]]. This gives the required dependent-choice sequence. The two cyclic modules have the explicit resolutions in [L1], so no unspecified resolution-existence theorem is used. [given, L1, construct]

2.1 By [L1], the first Tor group is the kernel of multiplication by $4$ on $\mathbb Z/6$, namely $\{0,3\}$, and the reversed group is the kernel of multiplication by $6$ on $\mathbb Z/4$, namely $\{0,2\}$. Each is cyclic of order two, in agreement with $\gcd(4,6)=2$. [L1, step 1.1, algebra]

3.1 Apply [L2] under step 1.1. Its termwise tensor swap and coherent comparison give an isomorphism between the two groups in step 2.1. An isomorphism between groups of order two must send the unique nonzero element to the unique nonzero element. Thus under the explicit kernel identifications it sends $[3]_6$ to $[2]_4$, so the concrete calculation agrees with the natural symmetry, not merely with equality of the two gcds. [L2, step 1.1, step 2.1, algebra] ∎

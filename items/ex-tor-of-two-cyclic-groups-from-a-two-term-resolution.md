---
id: ex-tor-of-two-cyclic-groups-from-a-two-term-resolution
title: "Tor of two cyclic groups from a two-term resolution"
kind: example
status: published
origin: pipeline
deps: ["thm-tor-of-two-cyclic-abelian-groups", "def-axiom-of-choice"]
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
    scope: "Owner-authorized inherited choice and explicit two-cyclic kernel repair; no independent judge"
    delegated_by: owner
---

## Example

Assume AC ([[def-axiom-of-choice]]) for balanced Tor. Then
$\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/12,\mathbb Z/18)\cong\mathbb Z/6$.
The fixed two-term resolution calculation is choice-free; AC is inherited
only for the balanced comparison in [[thm-tor-of-two-cyclic-abelian-groups]].

## Verification

**Given:** the two-term resolution $0\to\mathbb Z\xrightarrow{12}\mathbb Z\to\mathbb Z/12\to0$, and AC for balanced comparison.

[L1] The repaired two-cyclic theorem supplies the kernel identification, the explicit cyclic resolutions and the inherited AC comparison ([[thm-tor-of-two-cyclic-abelian-groups]]).

1.1 By [L1], tensoring with $\mathbb Z/18$ gives the degree-one kernel of multiplication by $12$ on $\mathbb Z/18$. The comparison with balanced Tor uses the stated AC hypothesis; no additional resolution-existence assertion is needed. [given, L1]

2.1 The congruence is equivalent to $3\mid2x$, hence to $3\mid x$, since $x=2(2x)-3x$. The kernel residues modulo $18$ are therefore $0,3,6,9,12,15$. [step 1.1, algebra]

3.1 The additive map $\mathbb Z/6\to\mathbb Z/18$, $[t]_6\mapsto[3t]_{18}$, is well defined because $3\cdot6=18$, has image the listed kernel, and is injective because $18\mid3t$ iff $6\mid t$. This proves the isomorphism and the choice-free kernel calculation. [step 1.1, step 2.1, algebra] ∎

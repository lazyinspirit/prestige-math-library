---
id: ex-tor-detects-n-torsion
title: "Tor detects n-torsion"
kind: example
status: published
origin: pipeline
deps: ["thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion", "def-axiom-of-choice"]
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
    scope: "Owner-authorized inherited choice and explicit finite-kernel repair; no independent judge"
    delegated_by: owner
---

## Example

Assume AC ([[def-axiom-of-choice]]) for balanced Tor. For $M=\mathbb Z/12$
and $n=8$, $\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/8,M)\cong\mathbb Z/4$.
The calculation from the explicit multiplication-by-$8$ resolution is
choice-free; AC is inherited only for comparison with arbitrary supplied
resolutions in [[thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]].

## Verification

**Given:** $M=\mathbb Z/12$, $n=8$, and AC for the balanced comparison clause.

[L1] The repaired cyclic-Tor theorem supplies the explicit two-term resolution, its multiplication kernel, and the balanced identification under AC ([[thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]]).

1.1 Apply [L1] to the explicit right resolution of $\mathbb Z/8$ and $M=\mathbb Z/12$. Its tensor homology is the kernel of multiplication by $8$; AC is used only for the comparison giving balanced Tor. A left resolution, if used, is also explicitly supplied by the same multiplication construction for $12$. [given, L1]

2.1 The kernel residues satisfy $12\mid8x$, equivalently $3\mid2x$. Since $x=2(2x)-3x$, this is equivalent to $3\mid x$. Modulo $12$ the solutions are exactly $0,3,6,9$. [step 1.1, algebra]

3.1 The map $\mathbb Z/4\to\mathbb Z/12$, $[t]_4\mapsto[3t]_{12}$, is a well-defined homomorphism, with image those four residues and kernel zero since $12\mid3t$ iff $4\mid t$. It identifies $\mathbb Z/4$ with the kernel in step 2.1, proving the claimed Tor calculation. The arithmetic uses no choice. [step 1.1, step 2.1, algebra] ∎

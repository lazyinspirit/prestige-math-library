---
id: thm-tor-of-two-cyclic-abelian-groups
title: "Tor one of two cyclic abelian groups is cyclic of gcd order"
kind: theorem
status: published
origin: pipeline
deps: ["thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion", "def-axiom-of-choice", "lem-linear-congruence-reduction-by-the-gcd", "thm-bezout-identity"]
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
    scope: "Owner-authorized cyclic-Tor choice propagation and explicit gcd-kernel isomorphism; no independent judge"
    delegated_by: owner
---

## Statement

Assume AC ([[def-axiom-of-choice]]). For positive integers $m,n$,
$$\operatorname{Tor}^{\mathbb Z}_1(\mathbb Z/m,\mathbb Z/n)\cong\mathbb Z/\gcd(m,n).$$
AC is inherited only by the balanced-Tor comparison in
[[thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]]. The two-term
resolution kernel calculation and the isomorphism below are choice-free.

## Facts & Assumptions

[L1] The preceding cyclic-Tor theorem identifies balanced Tor with the multiplication kernel under AC, and gives the fixed-resolution calculation without choice ([[thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion]]).

[L2] Dividing a linear congruence by the positive gcd gives an equivalent congruence with coprime coefficient and modulus ([[lem-linear-congruence-reduction-by-the-gcd]]).

[L3] Coprime integers admit an integer linear combination equal to one ([[thm-bezout-identity]]).

## Proof

**Given:** positive integers $m,n$ and AC for the balanced interpretation.

1.1 By [L1] with $M=\mathbb Z/n$, the balanced Tor group is canonically the kernel of multiplication by $m$ on $\mathbb Z/n$. Both cyclic modules have the explicit two-term projective resolutions supplied by [L1], so its supplied-resolution hypotheses are met. AC is used here through its comparison clause, not in the following arithmetic. [given, L1]

2.1 Put $g=\gcd(m,n)$, $m=ga$, $n=gb$, with $g,b>0$. By [L2], $\gcd(a,b)=1$ and $mx\equiv0\pmod n$ is equivalent to $b\mid ax$. By [L3] choose integers $u,v$ with $ua+vb=1$. If $b\mid ax$, then $x=uax+vbx$ is divisible by $b$; the converse is immediate. Hence the kernel in step 1.1 consists precisely of the multiples of $b$ modulo $n=gb$. [L2, L3, step 1.1, algebra]

3.1 The map $\mathbb Z/g\to\mathbb Z/n$, $[t]_g\mapsto[bt]_n$, is well defined and additive since $bg=n$. Its image is the kernel from step 2.1. It is injective because $gb\mid bt$ holds exactly when $g\mid t$, by cancellation of the nonzero integer $b$. Thus it is an isomorphism onto that kernel, including $g=1$ when both groups in this identification are trivial. Composing with step 1.1 proves the claim. [step 1.1, step 2.1, algebra] ∎

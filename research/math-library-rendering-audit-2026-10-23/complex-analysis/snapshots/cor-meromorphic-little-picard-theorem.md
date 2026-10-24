---
id: cor-meromorphic-little-picard-theorem
kind: corollary
title: "A nonconstant meromorphic function on the plane omits at most two sphere values"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-little-picard-theorem, thm-three-point-transitivity-mobius-transformations, thm-mobius-transformations-biholomorphic-sphere]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

A nonconstant meromorphic function on $\mathbb C$ omits at most two values of
$\widehat{\mathbb C}$.

## Facts & Assumptions

**Given:** A nonconstant meromorphic function $f:\mathbb C\to\widehat{\mathbb C}$.

[L1] A unique Möbius transformation carries any ordered triple of distinct sphere points to any other ([[thm-three-point-transitivity-mobius-transformations]]).

[L2] Möbius transformations are biholomorphic sphere self-maps ([[thm-mobius-transformations-biholomorphic-sphere]]).

[L3] A nonconstant entire function omits at most one finite value ([[thm-little-picard-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Assume toward a contradiction that $f$ omits three distinct sphere values. By [L1], choose a Möbius transformation $M$ sending them to $0$, $1$, and $\infty$. Then $g:=M\circ f$ is meromorphic by [L2], omits $0$, $1$, and $\infty$, and therefore is actually entire. [L1, L2, given, assume-contra, choose]

2.1 Fact [L3] makes an entire function omitting $0$ and $1$ constant, so $g$ is constant. Since $M$ is biholomorphic by [L2], $f=M^{-1}\circ g$ is constant as well, contradicting the hypothesis. [L2, L3, step 1.1, discharge-contradiction]

3.1 Therefore a nonconstant meromorphic function on the plane omits at most two sphere values. [step 2.1] ∎

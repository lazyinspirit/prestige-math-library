---
id: thm-little-picard-theorem
kind: theorem
title: "Little Picard theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-schottky-theorem, thm-liouville-bounded-entire-function]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, §6.2"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

A nonconstant entire function omits at most one finite complex value.

## Facts & Assumptions

**Given:** An entire function $f:\mathbb C\to\mathbb C$.

[L1] Schottky's theorem bounds a holomorphic map omitting $0$ and $1$ on every fixed smaller disc by a constant depending only on the center bound ([[thm-schottky-theorem]]).

[L2] A bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

## Proof

**Proof technique:** direct.

1.1 Assume toward a contradiction that $f$ omits two finite values. After an affine change of target, we may suppose those values are $0$ and $1$. For every $R>0$, apply [L1] with the fixed inner radius $1/2$ to the map $f_R(z):=f(Rz)$ on $\mathbb D$. Since $f_R(0)=f(0)$, the resulting bound is independent of $R$ and gives $|f(w)|\le C(|f(0)|,1/2)$ whenever $|w|\le R/2$. [L1, given, assume-contra, algebra]

2.1 Since $R$ in step 1.1 is arbitrary, those discs exhaust $\mathbb C$ while the same constant bounds all of them. Thus $f$ is bounded on $\mathbb C$. Fact [L2] then makes $f$ constant, contradicting the assumption. [L2, step 1.1, discharge-contradiction]

3.1 Therefore a nonconstant entire function omits at most one finite value. [step 2.1] ∎

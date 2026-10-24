---
id: ex-schottky-bound-for-a-map-with-center-value-one-half
kind: example
title: "Schottky's theorem applied to a disc map with center value 1/2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-schottky-theorem]
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
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, Theorem 11"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Example

For each $0<r<1$ there is a constant $C_r>0$ such that every holomorphic
$f:\mathbb D\to\mathbb C\setminus\{0,1\}$ with $f(0)=1/2$ satisfies

$$|f(z)|\le C_r\qquad(|z|\le r).$$

## Facts & Assumptions

**Given:** A radius $0<r<1$ and a holomorphic map $f:\mathbb D\to\mathbb C\setminus\{0,1\}$ with $f(0)=1/2$.

[L1] Schottky's theorem supplies a bound depending only on the center modulus and the target radius ([[thm-schottky-theorem]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L1] with $R=1/2$. This gives a constant $C(1/2,r)$ depending only on $r$. [L1, given]

2.1 The constant from step 1.1 works for the present function, so one may take $C_r:=C(1/2,r)$. [step 1.1] ∎

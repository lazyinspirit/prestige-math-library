---
id: ex-exp-one-over-z-shows-great-picard-is-sharp
kind: example
title: "The function e^(1/z) omits zero and takes every nonzero value infinitely often near the origin"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-complex-exponential-surjects-onto-the-punctured-plane, thm-kernel-and-fibres-of-complex-exponential, thm-great-picard-theorem, thm-isolated-singularity-trichotomy]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, §6.4"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Example

The function

$$f(z):=e^{1/z}$$

on $0<|z|<1$ omits $0$ and takes every nonzero value infinitely often near
$0$.

## Facts & Assumptions

**Given:** The punctured-disc function $f(z)=e^{1/z}$.

[L1] The exponential maps onto $\mathbb C\setminus\{0\}$ ([[thm-complex-exponential-surjects-onto-the-punctured-plane]]).

[L2] Its fibres are the translates $\log w+2\pi i k$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

## Verification

**Proof technique:** direct.

1.1 Since the exponential never vanishes, $f(z)$ never equals $0$ on the punctured disc. [L1, given]

1.2 Fix $w\ne0$. By [L1] and [L2], choose $\lambda\in\mathbb C$ with $e^\lambda=w$; then every number $\lambda+2\pi i k$ is another logarithm of $w$. For every integer $k$ with $\lambda+2\pi i k\ne0$, set $z_k:=1/(\lambda+2\pi i k)$. At most one integer is excluded, while all the remaining $z_k$ satisfy $f(z_k)=w$ and $z_k\to0$ as $|k|\to\infty$. Thus every nonzero value occurs infinitely often near $0$. [L1, L2, given, construct]

2.1 Therefore Great Picard is sharp: one finite exceptional value can occur, namely $0$. [step 1.1, step 1.2] ∎

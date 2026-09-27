---
id: ex-exp-one-over-z-shows-great-picard-is-sharp
kind: example
title: "The function e^(1/z) omits zero and takes every nonzero value infinitely often near the origin"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-complex-exponential-surjects-onto-the-punctured-plane, thm-kernel-and-fibres-of-complex-exponential, thm-great-picard-theorem, thm-isolated-singularity-trichotomy, thm-removable-singularity-characterizations, thm-pole-characterizations]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

[L3] A removable singularity is bounded near the centre, a pole has modulus
tending to infinity there, and every other isolated singularity is essential
([[thm-removable-singularity-characterizations]], [[thm-pole-characterizations]],
[[thm-isolated-singularity-trichotomy]]).

## Verification

**Proof technique:** direct.

1.1 Since the exponential never vanishes, $f(z)$ never equals $0$ on the punctured disc. [L1, given]

1.2 Fix $w\ne0$. By [L1] and [L2], choose $\lambda\in\mathbb C$ with $e^\lambda=w$; then every number $\lambda+2\pi i k$ is another logarithm of $w$. Since $|\lambda+2\pi i k|\to\infty$ as $|k|\to\infty$, for every sufficiently large $|k|$ it exceeds $1$. For those infinitely many indices set $z_k:=1/(\lambda+2\pi i k)$; then $0<|z_k|<1$, $f(z_k)=w$, and $z_k\to0$. Thus every nonzero value occurs infinitely often within the punctured-disc domain near $0$. [L1, L2, given, construct]

1.3 Along $z=1/n$, $f(z)=e^n\to\infty$, whereas along $z=-1/n$, $f(z)=e^{-n}\to0$. Both sequences eventually lie in the punctured disc, so $0$ is neither removable nor a pole, and hence is an essential singularity. [L3, given]

2.1 Therefore Great Picard is sharp: an essential singularity can omit one finite value, namely $0$. [step 1.1, step 1.2, step 1.3] ∎

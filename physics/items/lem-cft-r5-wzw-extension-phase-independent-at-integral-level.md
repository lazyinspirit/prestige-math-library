---
id: lem-cft-r5-wzw-extension-phase-independent-at-integral-level
kind: lemma
title: Extension phases with period 2πi are independent exactly at integral level
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps: []
dependency_roles: {}
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Lorenz Eberhardt, Wess-Zumino-Witten Models, YRISW PhD School in Vienna (2019)
      url: https://conf.itp.phys.ethz.ch/esi-school/Lecture_notes/WZW%20models.pdf
      locator: "§2.2, printed pp. 4–6: extension ambiguity and the integer-level condition for the Wess–Zumino phase."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $B$ be a nonempty set of boundary data. For each $b\in B$, let $E_b$ be a nonempty set of admissible extensions and let $\Gamma_b:E_b\to i\mathbb R$ be their imaginary-valued action term. Assume every extension difference is an integral period, meaning $\Gamma_b(e_1)-\Gamma_b(e_0)\in2\pi i\mathbb Z$ for every $b\in B$ and $e_0,e_1\in E_b$. Assume also that some pair $e_0,e_1\in E_b$ has difference $2\pi i$. For real $k$, define the unit circle $U(1):=\{u\in\mathbb C:|u|=1\}$ and the phase $W_{b,k}(e)=\exp(-k\Gamma_b(e))\in U(1)$. Then $W_{b,k}(e)$ is independent of the chosen extension for every $b$ if and only if $k\in\mathbb Z$.

## Facts & Assumptions

**Given:** The nonempty extension sets $E_b$, the imaginary-valued functions $\Gamma_b$, and a real coefficient $k$ as in the Statement.

[A1] For every boundary datum and every pair of its admissible extensions, the difference of the two $\Gamma_b$ values is in $2\pi i\mathbb Z$.

[A2] At least one admissible pair has $\Gamma_b(e_1)-\Gamma_b(e_0)=2\pi i$.

## Proof

1.1 Suppose $k\in\mathbb Z$. For any $b\in B$ and $e_0,e_1\in E_b$, [A1] gives an integer $n$ with $\Gamma_b(e_1)-\Gamma_b(e_0)=2\pi i n$. Therefore
$$\frac{W_{b,k}(e_1)}{W_{b,k}(e_0)}=\exp\!\bigl(-k(\Gamma_b(e_1)-\Gamma_b(e_0))\bigr)=\exp(-2\pi i k n)=1.$$
Thus the phase is independent of extension for every boundary datum. [given, A1, algebra]

2.1 Conversely, suppose the phase is independent of extension for every boundary datum. Choose the pair in [A2]. Equality of its phases gives $\exp(-2\pi i k)=1$. Since $k$ is real, this is equivalent to $\cos(2\pi k)=1$ and $\sin(2\pi k)=0$, hence to $k\in\mathbb Z$. [given, A2, algebra] ∎

## Remarks

This lemma proves the level criterion only from the stated period-group hypotheses. In a compact WZW model those period hypotheses are part of the chosen normalization of the Wess–Zumino datum; the lemma does not prove that such a datum exists for every Lie group.

---
id: ex-iib-self-dual-point-s-exchanges-f1-d1
kind: example
title: Iib Self Dual Point S Exchanges F1 And D1
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 8
domain: physics
library: physics
deps:
  - pthm-iib-pq-string-bps-tension-covariance
dependency_roles:
  pthm-iib-pq-string-bps-tension-covariance: physical-result
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
physical_scope: "A single exact algebraic check of the source-reported classical IIB (p,q)-string tension at the self-dual asymptotic modulus tau=i. It illustrates the F1/D1 charge exchange and unit phase only; it establishes no complete quantum S-duality."
sources:
  references:
    - title: "J. H. Schwarz, An SL(2,Z) Multiplet of Type IIB Superstrings, arXiv:hep-th/9508143v5"
      url: "https://arxiv.org/pdf/hep-th/9508143v5"
      locator: "§2, equations (8)–(21): the source charge basis, S-duality matrix action, and classical BPS tension formula."
    - title: "Angel M. Uranga, Introduction to String Theory, full lecture notes"
      url: "https://members.ift.uam-csic.es/auranga/Lect.pdf"
      locator: "§14.3.1, printed pp. 290–291: the F1/D1 exchange at the self-dual coupling, with full-theory S-duality identified as a proposal."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

In the ordered NS–NS/RR source basis, take the primitive F-string charge $Q=(1,0)^{\mathsf T}$ and the S generator $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\in\mathrm{SL}(2,\mathbb Z)$. At the self-dual asymptotic axiodilaton $\tau_\infty=i$ (equivalently $C_{0,\infty}=0$ and $\Phi_\infty=0$), the transformed charge is the D-string label $(0,1)^{\mathsf T}$ and the normalized central charge changes from $1$ to $-i$. Their classical Einstein-frame tensions both equal the positive reference tension $T_F$.

## Example references

[[pthm-iib-pq-string-bps-tension-covariance]]

[Schwarz, §2, equations (8)–(21)](https://arxiv.org/pdf/hep-th/9508143v5)

[Uranga, §14.3.1](https://members.ift.uam-csic.es/auranga/Lect.pdf)

## Facts & Assumptions

**Given:** $\tau_\infty=i$, $Q=(1,0)^{\mathsf T}$, $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, and the classical source-family scope of the preceding theorem.

[F1] [[pthm-iib-pq-string-bps-tension-covariance]]: for the stated classical source family, $\mathcal Z_{p,q}=(p-q\tau_\infty)/\sqrt{\operatorname{Im}\tau_\infty}$, $\mathcal Z_{p',q'}(\tau')=\frac{|c\tau_\infty+d|}{c\tau_\infty+d}\mathcal Z_{p,q}(\tau_\infty)$, and the Einstein-frame tension is $T_F|\mathcal Z_{p,q}|$.

[A1] The selected inputs are the primitive charge $(p,q)=(1,0)$, self-dual modulus $\tau_\infty=i$, and S matrix $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$; this is one classical point in the source's protected family.

## Verification

1.1 The determinant of $S$ is $1$, $S(1,0)^{\mathsf T}=(0,1)^{\mathsf T}$, and $-1/i=i$, so the transformed charge is primitive and $\tau'=i$. [given, A1, algebra]

2.1 Since $\operatorname{Im}i=1$, $\mathcal Z_{1,0}(i)=1$ and $\mathcal Z_{0,1}(i)=-i$. The phase factor is $|i|/i=-i$, whose modulus is one; therefore [F1] gives $T^{(E)}_{1,0}=T_F=T^{(E)}_{0,1}$. This exact one-point calculation does not prove full quantum equivalence. [given, F1, A1, step 1.1, algebra] ∎

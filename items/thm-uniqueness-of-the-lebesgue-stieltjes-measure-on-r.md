---
id: thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r
kind: theorem
title: "The interval data on $(a,b]$ determines the Borel measure uniquely"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-borel-measure-finite-on-compact-sets-on-r, thm-measure-uniqueness-on-a-sigma-finite-pi-system, thm-seven-generators-of-the-borel-sigma-algebra-on-r]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 1.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $\mu$ and $\nu$ be Borel measures on $\mathbb{R}$ finite on compact sets in
the sense of [[def-borel-measure-finite-on-compact-sets-on-r]]. If

$$\mu((a,b]) = \nu((a,b]) \qquad \text{for every } a < b,$$

then $\mu(E) = \nu(E)$ for every Borel set $E \subseteq \mathbb{R}$.

## Facts & Assumptions

**Given:** Two Borel measures $\mu,\nu$ on $\mathbb{R}$, each finite on compact sets, and agreement of $\mu$ and $\nu$ on every half-open interval $(a,b]$.

[L1] The family of half-open intervals $(a,b]$ with $a < b$ generates the Borel sigma-algebra on $\mathbb{R}$. ([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]])

[L2] Measures that agree on a generating pi-system and on an increasing finite-measure exhaustion from that pi-system agree on the whole sigma-algebra. ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]])

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal P=\{\varnothing\}\cup\{(a,b]:a<b\}$. The intersection of two nonempty members is either empty or $(\max\{a,c\},\min\{b,d\}]$ with its left endpoint strictly below its right endpoint. Intersections with $\varnothing$ are empty, so $\mathcal P$ is a pi-system. By [L1], adjoining $\varnothing$ does not change the generated sigma-algebra, and $\sigma(\mathcal P)=\mathcal B(\mathbb R)$. Both measures agree on $\mathcal P$, including $\varnothing$. [L1, given, algebra]

1.2 For each $n\in\mathbb N$, put $P_n=(-n-1,n]\in\mathcal P$. This increasing sequence covers $\mathbb R$. Since $P_n\subseteq[-n-1,n]$ and both measures are finite on compact sets, $\mu(P_n)=\nu(P_n)<\infty$ by the hypothesis. [given, algebra]

2.1 The generating pi-system from step 1.1 and the finite-measure exhaustion from step 1.2 meet [L2], which gives $\mu(E)=\nu(E)$ for every Borel $E\subseteq\mathbb R$. [step 1.1, step 1.2, L2] ∎

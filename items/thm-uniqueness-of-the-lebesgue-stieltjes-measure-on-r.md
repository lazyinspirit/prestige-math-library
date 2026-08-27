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
  audited: 2026-08-27
  precheck: pass
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

**Given:** Two Borel measures $\mu,\nu$ on $\mathbb{R}$, each finite on compact
sets, and agreement of $\mu$ and $\nu$ on every half-open interval $(a,b]$.

[L1] The family of half-open intervals $(a,b]$ with $a < b$ generates the Borel
sigma-algebra on $\mathbb{R}$.
([[thm-seven-generators-of-the-borel-sigma-algebra-on-r]])

[L2] Measures that agree on a generating pi-system and on an increasing
finite-measure exhaustion from that pi-system agree on the whole sigma-algebra.
([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]])

## Proof

**Proof technique:** direct.

1.1 Let [L1, algebra]

$$\mathcal{P} := \{\, (a,b] : a < b \,\}.$$

If $I_1 = (a,b]$ and $I_2 = (c,d]$ lie in $\mathcal{P}$, then
$I_1 \cap I_2$ is either empty or another half-open interval
$(\max\{a,c\},\min\{b,d\}]$, so $\mathcal{P}$ is a pi-system. By [L1],
$\sigma(\mathcal{P}) = \mathcal{B}(\mathbb{R})$. [L1, algebra]

1.2 For each $n \in \mathbb{N}$, put $P_n := (-n-1,n] \in \mathcal{P}$. The [given, algebra]
sequence $(P_n)$ is increasing and $\bigcup_n P_n = \mathbb{R}$. Because each
$P_n$ is contained in the compact interval $[-n-1,n]$, both $\mu(P_n)$ and
$\nu(P_n)$ are finite; and by the hypothesis they are equal. [given, algebra]

2.1 Step 1.1 provides the generating pi-system and step 1.2 provides the [step 1.1, step 1.2, L2]
increasing finite-measure exhaustion. Therefore [L2] applies and yields
$\mu = \nu$ on $\mathcal{B}(\mathbb{R})$. [step 1.1, step 1.2, L2] ∎

---
id: thm-levin-schnorr-characterization
kind: theorem
title: "Levin--Schnorr characterization of Martin-Löf randomness"
status: draft
origin: session
deps: [def-martin-lof-test-and-random-sequence, def-prefix-free-machine-and-prefix-complexity, thm-kraft-inequality, thm-invariance-for-prefix-complexity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Shen, §38"
      url: "https://arxiv.org/pdf/1504.04955"
---
## Statement
$X\in2^\omega$ is Martin-Löf random iff some constant $c$ satisfies $K(X\upharpoonright n)\ge n-c$ for every $n$.
## Facts & Assumptions

**Given:** $X\in2^\omega$ and fixed optimal prefix complexity.

## Proof

1.1 For $k\ge0$, let $$V_k=\bigcup\{[\sigma]:K(\sigma)<|\sigma|-k\}.$$ The sequence is uniformly effectively open: dovetail the fixed prefix machine and enumerate $\sigma$ at level $k$ when a description shorter than $|\sigma|-k$ appears. Choose one shortest program $p_\sigma$ for each such $\sigma$. These programs are distinct and belong to a prefix-free domain, so [[thm-kraft-inequality]] gives $$\mu(V_k)\le\sum_\sigma2^{-|\sigma|} \le 2^{-k}\sum_\sigma2^{-|p_\sigma|}\le2^{-k}.$$ Thus $(V_k)$ is a Martin-Löf test. If the deficiencies $n-K(X\upharpoonright n)$ are unbounded, then $X\in V_k$ for every $k$, so $X$ is not random. [given, construct]

1.2 Conversely, suppose $X$ fails a Martin-Löf test $(U_j)$. For each $k$, turn the enumeration of $U_{2k+2}$ into a computable disjoint cylinder cover: when a cylinder arrives, enumerate a finite prefix-free partition of the part not covered at earlier stages. For every resulting cylinder $[\sigma]$, issue the request $(\sigma,|\sigma|-k)$. Its length is nonnegative because one such cylinder already has measure at most $\mu(U_{2k+2})\le2^{-2k-2}$, and the total request weight is $$\sum_k 2^k\mu(U_{2k+2})\le\sum_k2^{-k-2}\le1.$$ The effective allocation clause of [[thm-kraft-inequality]] therefore gives a prefix-free machine $M$ with $K_M(\sigma)\le|\sigma|-k$ for every request. Prefix optimality [[thm-invariance-for-prefix-complexity]] supplies a constant $d$ with $K(\sigma)\le|\sigma|-k+d$. Since $X\in U_{2k+2}$, for every $k$ one of the covering strings $\sigma\prec X$ gives deficiency at least $k-d$. Hence the prefix deficiencies of $X$ are unbounded. [given, construct]

2.1 Step 1.1 says bounded deficiency is necessary for randomness, while step 1.2 says nonrandomness forces unbounded deficiency. Taking contrapositives under [[def-martin-lof-test-and-random-sequence]] proves the equivalence. [step 1.1, step 1.2] ∎

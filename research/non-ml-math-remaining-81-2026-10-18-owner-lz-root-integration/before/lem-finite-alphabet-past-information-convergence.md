---
id: lem-finite-alphabet-past-information-convergence
kind: lemma
title: "Convergence and integrable envelope for finite-past information"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-finite-alphabet-stationary-source
  - def-finite-block-information-and-entropy
  - def-past-information-density-finite-alphabet
  - lem-finite-block-entropy-chain-rule
  - thm-stationary-entropy-rate-limit
  - thm-monotone-class
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
---
## Statement

Proves p_k(a) converges almost surely for each symbol, g_k converges on realized paths, and sup_k g_k is integrable with an explicit exponential tail bound.

## Facts & Assumptions

**Given:** A stationary finite-alphabet source $X$ with alphabet $\mathcal A$, and the finite-past probabilities and information variables $p_k,g_k$ of [[def-past-information-density-finite-alphabet]].

[F1] [[def-finite-alphabet-stationary-source]]: the shift preserves the path law.

[F2] [[def-past-information-density-finite-alphabet]]: $p_k(a)=P(X_0=a\mid X_{-k}^{-1})$ on finite atoms and $g_k=-\log_2p_k(X_0)$ almost surely.

[F3] [[lem-finite-block-entropy-chain-rule]]: block entropy is the sum of successive conditional entropies.

[F4] [[thm-stationary-entropy-rate-limit]]: $H(X_0^{n-1})/n$ converges to the entropy rate $h$.

[F5] [[thm-monotone-class]]: finite-past cylinder identities extend to the sigma-algebra they generate.

## Proof

**Given:** The source and definitions [F1]–[F2].

1.1 For each $a\in\mathcal A$, $p_k(a)=E[1_{\{X_0=a\}}\mid\mathcal F_k]$ is a martingale in $k$ for $\mathcal F_k=\sigma(X_{-k},\ldots,X_{-1})$, because the finite-atom conditional averages satisfy the tower identity when the partition is refined. It is bounded between zero and one. [F2, given]

1.2 For rationals $0\le u<v\le1$, the usual buy-at-$u$, sell-at-$v$ strategy applied to this bounded martingale has expected gain zero; each completed upcrossing earns at least $v-u$, and an unfinished final holding loses at most one. Therefore the expected number of completed upcrossings by time $N$ is at most $(v-u)^{-1}$. Monotone convergence of the integer counts makes the total upcrossings finite almost surely. Intersect over the countably many rational pairs: each $p_k(a)$ then converges to some $p_\infty(a)\in[0,1]$. [F2, algebra]

1.3 The limit is positive at the realized symbol almost surely. Indeed, for each $a$, $p_\infty(a)=E[1_{\{X_0=a\}}\mid\sigma(\cup_k\mathcal F_k)]$ by testing the limit on finite-past cylinders and [F5]; hence $P(X_0=a,p_\infty(a)=0)=E[1_{\{p_\infty(a)=0\}}p_\infty(a)]=0$. Summing over finite $\mathcal A$ gives $g_k\to g_\infty:=-\log_2p_\infty(X_0)<\infty$ almost surely. [F2, F5, step 1.2, algebra]

1.4 For $t\ge0$, let $\tau$ be the first $k$ with $p_k(a)<2^{-t}$. On each event $\{\tau=k\}\in\mathcal F_k$, the tower identity gives
$$P(X_0=a,\tau=k)=E[1_{\{\tau=k\}}p_k(a)]\le2^{-t}P(\tau=k).$$
Summing $k$ and then $a$ proves $P(\sup_k g_k>t)\le |\mathcal A|2^{-t}$. Thus $G=\sup_k g_k$ is integrable, and dominated convergence gives $E g_k\to E g_\infty$. [F2, given, algebra]

1.5 By stationarity, [F3] gives $H_n=\sum_{k=0}^{n-1}E g_k$. Cesàro convergence and [F4] yield $E g_\infty=\lim_nH_n/n=h$. This also covers zero-probability transitions because they are never observed. [F1, F2, F3, F4, step 1.4, algebra] ∎

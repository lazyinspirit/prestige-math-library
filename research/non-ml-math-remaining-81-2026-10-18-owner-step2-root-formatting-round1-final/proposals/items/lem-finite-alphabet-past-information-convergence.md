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
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
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
[F6] [[thm-dominated-convergence]]: almost-sure convergence under an integrable envelope implies convergence of integrals.
[F7] [[thm-monotone-convergence-for-the-integral]]: integrals of increasing nonnegative functions converge to the integral of their pointwise limit.

## Proof

**Given:** The source and definitions and supplier claims [F1]–[F7].

1.1 Choose the null-set versions allowed by [F2] to be zero where $p_k(X_0)=0$, so each $g_k$ is nonnegative without changing any almost-sure claim. For each $a\in\mathcal A$, $p_k(a)=E[1_{\{X_0=a\}}\mid\mathcal F_k]$ is a martingale in $k$ for $\mathcal F_k=\sigma(X_{-k},\ldots,X_{-1})$, because the finite-atom conditional averages satisfy the tower identity when the partition is refined. It is bounded between zero and one. [F2, given]

2.1 For rationals $0\le u<v\le1$, the buy-at-$u$, sell-at-$v$ strategy applied to this bounded martingale has expected gain zero; each completed upcrossing earns at least $v-u$, and an unfinished final holding loses at most one. Therefore the expected number of completed upcrossings by time $N$ is at most $(v-u)^{-1}$. By [F7], the total upcrossing count has finite expectation and is finite almost surely. Intersect over the countably many rational pairs and the finite alphabet: each $p_k(a)$ then converges to some $p_\infty(a)\in[0,1]$. [F7, given, algebra, step 1.1]

3.1 For every finite-past cylinder $B\in\mathcal F_m$, the tower identity gives $\int_Bp_k(a)\,dP=P(B\cap\{X_0=a\})$ for all $k\ge m$. Since $0\le p_k(a)\le1$ and $p_k(a)\to p_\infty(a)$ almost surely, [F6] gives the same identity with $p_\infty(a)$. For fixed $a$, the finite measures $B\mapsto\int_Bp_\infty(a)\,dP$ and $B\mapsto P(B\cap\{X_0=a\})$ agree on the algebra of finite-past cylinders. Their agreement class is a monotone class by continuity of finite measures, so [F5] extends the identity to every $B\in\mathcal F^-$. Thus $p_\infty(a)$ is a conditional probability of $X_0=a$ given the full past. [F5, F6, step 2.1, given]

4.1 The event $\{p_\infty(a)=0\}$ belongs to $\mathcal F^-$. The conditional-probability identity from step 3.1 gives $$P(X_0=a,\ p_\infty(a)=0)=\int 1_{\{p_\infty(a)=0\}}p_\infty(a)\,dP=0.$$ Summing over the finite alphabet shows $p_\infty(X_0)>0$ almost surely, so $g_k\to g_\infty:=-\log_2p_\infty(X_0)$ almost surely. [F2, step 3.1, algebra]

5.1 For $t\ge0$ and $a\in\mathcal A$, let $\tau_a$ be the first $k$ with $p_k(a)<2^{-t}$. On each event $\{\tau_a=k\}\in\mathcal F_k$, the tower identity gives $$P(X_0=a,\tau_a=k)=\int_{\{\tau_a=k\}}p_k(a)\,dP\le2^{-t}P(\tau_a=k).$$ Summing over $k$ and then $a$ yields $P(G>t)\le|\mathcal A|2^{-t}$ for $G=\sup_k g_k$. For each integer $M\ge1$, $$G\wedge M\le1+\sum_{j=1}^{M-1}1_{\{G>j\}},$$ so [F7] and the tail bound give $\int G\,dP=\lim_M\int(G\wedge M)\,dP\le1+|\mathcal A|\sum_{j\ge1}2^{-j}<\infty$. Since $g_k\le G$ and $g_\infty\le G$ almost surely, [F6] also gives $\int g_k\,dP\to\int g_\infty\,dP$. [F2, F6, F7, given, algebra, step 4.1]

6.1 By stationarity [F1] and the chain rule [F3], $$H_n=\sum_{k=0}^{n-1}H(X_k\mid X_0^{k-1})=\sum_{k=0}^{n-1}H(X_0\mid X_{-k}^{-1})=\sum_{k=0}^{n-1}\int g_k\,dP.$$ Cesàro convergence and step 5.1 give $\lim_nH_n/n=\int g_\infty\,dP$; [F4] identifies this limit as $h$. This also covers zero-probability transitions, which are never observed. [F1, F2, F3, F4, step 5.1, algebra] ∎


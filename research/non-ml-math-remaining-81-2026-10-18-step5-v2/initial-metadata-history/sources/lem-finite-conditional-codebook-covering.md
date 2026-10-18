---
id: lem-finite-conditional-codebook-covering
kind: lemma
title: Conditional random-codebook covering for finite alphabets
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-finite-strongly-typical-set
  - def-it-finite-conditional-mutual-information
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; codebooks and alphabets are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapters 11–13, random covering-codebook selection and conditional typicality, printed pp. 224–226 and 305–330.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Cambridge University Press prepublication book"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 25, §25.2, Theorem 25.5 and Corollary 25.6 (covering and joint typicality), printed pp. 498–500.
---

## Statement

Let $(V,X,U)$ have a joint law $P_V(v)P_{X|V}(x|v)P_{U|X,V}(u|x,v)$ on finite alphabets. Fix $\eta>0$. There are tolerances $0<\delta_{\rm in}<\delta_{\rm out}$ such that, for every sufficiently large $n$, every $(v^n,x^n)$ in the support-restricted strongly typical set $T_{\delta_{\rm in}}^{(n)}(P_{VX})$, and every $R>I(X;U|V)+\eta$, a codebook of $\lceil e^{nR}\rceil$ conditionally independent words drawn from $P_{U|V}^{\otimes n}(\cdot\mid v^n)$ contains a word making $(v^n,x^n,u^n)\in T_{\delta_{\rm out}}^{(n)}(P_{VXU})$ with probability tending to one uniformly over those fixed pairs.

## Facts & Assumptions

**Given:** A finite law $P_{VXU}=P_VP_{X|V}P_{U|X,V}$ and $\eta>0$.

[F1] [[def-it-finite-strongly-typical-set]]: a block is strongly typical when each positive-mass joint letter has empirical frequency within a relative tolerance of its probability and zero-mass letters are absent.

[F2] [[def-it-finite-conditional-mutual-information]]: $I(X;U|V)$ is the finite average, over $v$, of $D(P_{XU|v}\|P_{X|v}P_{U|v})$ in nats.

## Proof

1.1 Fix $(v^n,x^n)\in T_{\delta_{\rm in}}^{(n)}(P_{VX})$. For this concentration calculation, draw an auxiliary word under $Q_n:=P_{U|X,V}^{\otimes n}(\cdot|x^n,v^n)$, rather than under the codebook law $C_n:=P_{U|V}^{\otimes n}(\cdot|v^n)$. For each positive-mass triple $(v,x,u)$, its empirical frequency under $Q_n$ has mean $\widehat P_{v^nx^n}(v,x)P_{U|X,V}(u|x,v)$, which differs from $P(v,x,u)$ by at most $\delta_{\rm in}P(v,x,u)$. Its variance is at most $1/(4n)$ because its indicator summands are independent across positions. Chebyshev's inequality with deviation threshold $(\delta_{\rm out}-\delta_{\rm in})P(v,x,u)$ and a finite union bound show that all positive-mass triple frequencies meet the $\delta_{\rm out}$ conditions with probability tending to one uniformly over the fixed input pairs. Zero-mass input pairs are absent and zero conditional-probability outputs are never generated. [F1, given, algebra]

2.1 For a triple word in $T_{\delta_{\rm out}}^{(n)}(P_{VXU})$, the exact likelihood ratio is $$\ln\frac{P_{U|X,V}^{\otimes n}(u^n|x^n,v^n)}{P_{U|V}^{\otimes n}(u^n|v^n)}=n\sum_{v,x,u}\widehat P_{v^nx^nu^n}(v,x,u)\ln\frac{P(u|x,v)}{P(u|v)}.$$ Every logarithm on the positive target support is finite. At the target law this finite sum is $I_P(X;U|V)$ by [F2]; it is linear in the empirical probabilities. Choose $\delta_{\rm out}$ small enough that it is at most $I_P(X;U|V)+\eta/3$ on every target-typical triple. On the target-typical set $T$, $Q_n/C_n\le e^{n(I_P(X;U|V)+\eta/3)}$ and $Q_n\ll C_n$. Therefore $C_n(T)\ge e^{-n(I_P(X;U|V)+\eta/3)}Q_n(T)$; step 1.1 gives a one-word match probability at least $(1-o(1))e^{-n(I_P(X;U|V)+\eta/3)}$, uniformly over the fixed input pairs. [F1, F2, step 1.1, algebra]

3.1 The codewords are conditionally independent given $v^n$. If $p_n(v^n,x^n)$ is their one-word match probability and $M_n=\lceil e^{nR}\rceil$, then the probability that no word matches is $(1-p_n)^{M_n}\le e^{-M_np_n}$. Since $R>I_P(X;U|V)+\eta$, step 2.1 gives $M_np_n\to\infty$ uniformly, so the no-match probability tends to zero. This proves the covering claim. [given, step 2.1, algebra] ∎

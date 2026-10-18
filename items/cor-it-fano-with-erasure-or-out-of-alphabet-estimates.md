---
id: cor-it-fano-with-erasure-or-out-of-alphabet-estimates
kind: corollary
title: "Fano bound for erasure and out-of-alphabet estimates"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [thm-it-fano-inequality, thm-it-finite-markov-data-processing, thm-it-finite-entropy-chain-rule, thm-it-finite-kl-nonnegative-equality, def-it-finite-mutual-information, thm-natural-logarithm-laws, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all variables and estimator outputs are finite."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 3, §3.6, printed pp. 56–58; randomized-estimator error-indicator proof, extended locally to arbitrary finite estimate alphabets."
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 4, §4.2, printed pp. 71–73; finite Fano error-indicator method."
---

## Statement

Let $X$ have a finite alphabet $\mathcal X$ of size $m\ge1$, let $Y$ be finite, and let $\widehat X$ be any finite estimate output generated from $Y$, with an output alphabet that may contain symbols outside $\mathcal X$. Assume $X\to Y\to\widehat X$, and set $P_e=\mathbb P[\widehat X\ne X]$. Use $h_2$ as defined in [[thm-it-fano-inequality]]. Then

$$H(X|Y)\le h_2(P_e)+P_e\ln m.$$

If $X$ is uniform on $\mathcal X$, then

$$ (1-P_e)\ln m\le I(X;Y)+h_2(P_e).$$

## Facts & Assumptions

**Given:** A finite joint pmf with $p_{XY\widehat X}=p_{XY}p_{\widehat X|Y}$, finite $\mathcal X$ of size $m\ge1$, and an arbitrary finite estimate alphabet.

[F1] [[thm-it-fano-inequality]]: $h_2(t)=-t\ln t-(1-t)\ln(1-t)$ with $0\ln0=0$.

[F2] [[thm-it-finite-markov-data-processing]]: for $X\to Y\to\widehat X$, $I(X;\widehat X)\le I(X;Y)$.

[F3] [[thm-it-finite-entropy-chain-rule]]: $I(X;Y)=H(X)-H(X|Y)$ and finite conditional entropy satisfies the chain rule.

[F4] [[thm-it-finite-kl-nonnegative-equality]]: finite KL divergence is nonnegative.

[F5] [[def-it-finite-mutual-information]]: $I(X;Y)=D(p_{XY}\|p_X\otimes p_Y)$.

[F6] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(p)=-\sum_{p_i>0}p_i\ln p_i$.

[F7] [[thm-natural-logarithm-laws]]: $\ln$ is increasing and $\ln1=0$.

## Proof

1.1 If $m=1$, then $X$ is constant, so $H(X|Y)=0$ and $I(X;Y)=0$ because $p_{XY}=p_X\otimes p_Y$; also $h_2(P_e)\ge0$ since $\ln t\le0$ for $0<t\le1$ by [F7], with the zero term set to $0$. Thus both claims hold. Assume $m\ge2$ below. From [F2] and [F3], $H(X|Y)\le H(X|\widehat X)$. [given, F2, F3, F5, F7, cases, algebra]

1.2 Define $E=\mathbf1\{X\ne\widehat X\}$. It is determined by $(X,\widehat X)$, so [F3]'s entropy chain rule gives $H(X|\widehat X)=H(E|\widehat X)+H(X|E,\widehat X)$. Also $H(E)=h_2(P_e)$ by [F1] and [F6]. The finite MI identity [F3] gives $H(E|\widehat X)=H(E)-I(E;\widehat X)$, and [F4]–[F5] make this MI nonnegative, so $H(E|\widehat X)\le h_2(P_e)$. [F1, F3, F4, F5, F6, given, algebra]

2.1 On $E=0$, $X=\widehat X$ and the conditional entropy is zero. On $E=1$, for each fixed estimator output the message $X$ has at most $m$ possible values. Any pmf $r$ on at most $m$ points has $H(r)\le\ln m$: pad it by zeros to $m$ coordinates and compare with the uniform pmf $u_m$; [F4] gives $0\le D(r\|u_m)=\ln m-H(r)$ by [F6]. Averaging the two branches yields $H(X|E,\widehat X)\le P_e\ln m$. [F4, F6, step 1.2, given, algebra]

3.1 Combining steps 1.1, 1.2, and 2.1 proves $H(X|Y)\le h_2(P_e)+P_e\ln m$. For uniform $X$, [F6] gives $H(X)=\ln m$; subtracting the conditional-entropy bound from $H(X)$ and using [F3] gives $(1-P_e)\ln m\le I(X;Y)+h_2(P_e)$. The formulas remain valid for $P_e=0$ or $1$ because zero-probability branches are omitted and [F1] fixes the endpoints of $h_2$. [F1, F3, F6, step 1.1, step 1.2, step 2.1, algebra] ∎

---
id: thm-it-fano-inequality
kind: theorem
title: "Finite-alphabet Fano inequality"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [thm-it-finite-markov-data-processing, thm-it-finite-entropy-chain-rule, thm-it-finite-kl-nonnegative-equality, thm-natural-logarithm-laws, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the estimator and all alphabets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 4, §4.2, printed pp. 71–73, Lemma 4.2.1; full finite error-indicator proof."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 3, §3.6, printed pp. 56–58, Theorem 3.12; randomized estimators and Fano bound."
---

## Statement

Let $X$ take values in an alphabet $\mathcal X$ of size $m\ge2$, let $Y$ be finite, and let $\widehat X$ be an estimator in the same alphabet generated from $Y$, so the joint pmf factors as $p_{XY\widehat X}=p_{XY}p_{\widehat X|Y}$. Put $P_e=\mathbb P[\widehat X\ne X]$ and define

$$h_2(t):=-t\ln t-(1-t)\ln(1-t),\qquad 0\ln0:=0.$$

Then

$$H(X|Y)\le h_2(P_e)+P_e\ln(m-1)\le \ln2+P_e\ln m.$$

For $m=1$, $X$ is constant and $H(X|Y)=0$.

## Facts & Assumptions

**Given:** A finite joint pmf of $X,Y,\widehat X$ with $p_{XY\widehat X}=p_{XY}p_{\widehat X|Y}$ and $|\mathcal X|=m\ge1$.

[F1] [[thm-it-finite-markov-data-processing]]: if $X\to Y\to\widehat X$, then $I(X;\widehat X)\le I(X;Y)$.

[F2] [[thm-it-finite-entropy-chain-rule]]: $I(X;Y)=H(X)-H(X|Y)$ and finite conditional entropy obeys the chain rule.

[F3] [[thm-it-finite-kl-nonnegative-equality]]: finite KL divergence is nonnegative, with equality iff its two probability vectors agree.

[F4] [[thm-natural-logarithm-laws]]: $\ln$ is increasing on $(0,\infty)$ and $\ln1=0$.

[F5] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(r)=-\sum_{r_i>0}r_i\ln r_i$, with $0\ln0=0$.

## Proof

1.1 If $m=1$, then $X$ is constant and $H(X|Y)=0$. Hence assume $m\ge2$. The factorization in the hypotheses is the Markov condition $X\to Y\to\widehat X$. By [F1], $I(X;\widehat X)\le I(X;Y)$; subtracting from the finite value $H(X)$ and using [F2] gives $H(X|Y)\le H(X|\widehat X)$. [given, F1, F2, F5, algebra, cases]

1.2 Set $E=\mathbf1\{X\ne\widehat X\}$. Since $E$ is determined by $(X,\widehat X)$, [F2] gives $H(X|\widehat X)=H(E|\widehat X)+H(X|E,\widehat X)$. The law of $E$ is Bernoulli with mass $P_e$ at $1$, so [F5] gives $H(E)=h_2(P_e)$. [F2, F5, given, algebra]

2.1 The finite MI identity in [F2] gives $H(E)-H(E|\widehat X)=I(E;\widehat X)$. By [F3], this MI, which is KL between the joint law and product marginals, is nonnegative. Thus $H(E|\widehat X)\le h_2(P_e)$. [F2, F3, step 1.2, algebra]

2.2 On $E=0$, $X=\widehat X$, so the conditional entropy of $X$ given $(E,\widehat X)$ is zero. On $E=1$ and a fixed value of $\widehat X$, at most $m-1$ values of $X$ remain. For any pmf $r$ on at most $k=m-1$ points, pad by zeros to a $k$-vector and compare with the uniform vector $u_k$: [F3] gives $0\le D(r\|u_k)=\ln k-H(r)$, so $H(r)\le\ln(m-1)$. Averaging these conditional entropies yields $H(X|E,\widehat X)\le P_e\ln(m-1)$. [F3, step 1.2, given, algebra]

3.1 Combining steps 1.2, 2.1, and 2.2 gives $H(X|\widehat X)\le h_2(P_e)+P_e\ln(m-1)$; step 1.1 then gives the stated sharp bound. [step 1.1, step 1.2, step 2.1, step 2.2, algebra]

4.1 Since $D((P_e,1-P_e)\|(1/2,1/2))=\ln2-h_2(P_e)\ge0$ by [F3], $h_2(P_e)\le\ln2$. Also $m-1\le m$ and [F4] makes $\ln(m-1)\le\ln m$, so step 3.1 implies the weaker bound. If $P_e=0$ or $1$, zero-probability conditional branches above are omitted and $h_2(P_e)=0$ by convention. [F3, F4, F5, given, step 3.1, algebra] ∎

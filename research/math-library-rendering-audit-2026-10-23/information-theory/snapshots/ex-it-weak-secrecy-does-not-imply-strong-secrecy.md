---
id: ex-it-weak-secrecy-does-not-imply-strong-secrecy
kind: example
title: "Weak secrecy does not imply strong secrecy"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-it-wiretap-channel, def-it-information-leakage-and-equivocation, def-it-weak-and-strong-secrecy, def-it-finite-mutual-information, thm-it-finite-entropy-chain-rule, thm-it-finite-kl-nonnegative-equality, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the channel, code, and message sets are finite at each blocklength."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 15"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_15.pdf
      locator: "PDF p. 1: strong-secrecy mutual information and variational-distance metrics; the normalized-leakage counterexample is derived locally."
    - title: "Matthieu R. Bloch and J. Nicholas Laneman, Strong Secrecy from Channel Resolvability, arXiv:1105.5419"
      url: https://arxiv.org/pdf/1105.5419
      locator: "§III: normalized, unnormalized, and total-variation secrecy metrics."
---

## Statement

Consider the noiseless finite wiretap channel with $\mathcal X=\mathcal Y=\mathcal Z=\{0,1\}$ and $W(y,z\mid x)=1$ exactly when $y=z=x$. At blocklength $n$, let $k_n=\lfloor\sqrt n\rfloor$, let $M_n$ be uniform on $\{0,1\}^{k_n}$, and transmit $X^n=(M_n,0^{n-k_n})$. Bob and Eve both observe the transmitted word exactly. This reliable code sequence satisfies weak secrecy but not strong secrecy: its leakage is $I(M_n;Z^n)=k_n\ln2\to\infty$, whereas $n^{-1}I(M_n;Z^n)\to0$. In general, strong secrecy implies weak secrecy.

## Facts & Assumptions

**Given:** The finite wiretap code model, finite mutual information and the weak/strong secrecy criteria.

[F1] [[def-it-wiretap-channel]]: a wiretap code has a uniform message, Bob observes $Y^n$, Eve observes $Z^n$, and error includes erasure.

[F2] [[def-it-information-leakage-and-equivocation]]: leakage is $I(M;Z^n)$ in nats and normalized leakage is $n^{-1}I(M;Z^n)$.

[F3] [[def-it-weak-and-strong-secrecy]]: weak secrecy requires normalized leakage to vanish, while strong secrecy requires unnormalized leakage to vanish.

[F4] [[def-it-finite-mutual-information]]: $I(M;Z^n)=D(P_{MZ^n}\|P_M\otimes P_{Z^n})$ for finite variables.

[F5] [[thm-it-finite-entropy-chain-rule]]: $I(M;Z^n)=H(M)-H(M\mid Z^n)$ and the entropy chain rule holds for finite variables.

[F6] [[thm-it-finite-kl-nonnegative-equality]]: finite KL divergence is nonnegative.

[F7] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: a uniform law on $N$ points has entropy $\ln N$.

## Proof

1.1 For each $n$, the input string has length $k_n+(n-k_n)=n$. The noiseless channel gives $Y^n=Z^n=X^n$ with probability one, so Bob recovers the first $k_n$ bits exactly and the error probability is zero. Eve's observation also determines $M_n$ exactly, hence $H(M_n\mid Z^n)=0$. [F1, given, construct]

2.1 By uniformity and [F7], $H(M_n)=\ln(2^{k_n})=k_n\ln2$. Thus [F5] gives $I(M_n;Z^n)=H(M_n)-H(M_n\mid Z^n)=k_n\ln2$. [F5, F7, step 1.1, algebra]

3.1 Since $\sqrt n-1<k_n\le\sqrt n$, one has $k_n\to\infty$ and $k_n/n\to0$. Step 2.1 therefore gives unnormalized leakage tending to infinity and normalized leakage tending to zero by [F2]. With zero error this is weak secrecy and failure of strong secrecy by [F3]. [F2, F3, step 2.1, algebra]

4.1 For any wiretap code sequence, [F4] identifies mutual information with finite KL divergence, and [F6] makes it nonnegative. Hence $0\le I(M_n;Z^n)/n\le I(M_n;Z^n)$ for $n\ge1$. If the right side tends to zero, so does the left side, proving that strong secrecy implies weak secrecy. [F2, F3, F4, F6, algebra] ∎

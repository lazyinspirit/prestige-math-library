---
id: thm-it-information-unit-conversion
kind: theorem
title: "Finite information quantities convert by the logarithm base"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [ def-it-information-units-and-logarithm-base, def-it-finite-conditional-entropy, def-it-finite-mutual-information, def-it-finite-conditional-mutual-information, thm-it-finite-kl-nonnegative-equality, def-qa-35-finite-probability-entropy-and-stochastic-matrices ]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all formulas are finite sums."
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
      locator: "Chapter 2, §2.2, printed pp. 18–20; nats and bits conventions."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 1, §1.1, printed pp. 9–12; base-2 entropy convention."
---

## Statement

For any $b>1$, define each base-$b$ finite information quantity by replacing $\ln$ with $\log_b$ in its defining finite formula. Then

$$H_b(p)=\frac{H(p)}{\ln b},\qquad D_b(p\|q)=\frac{D(p\|q)}{\ln b},$$

where the second equality is in $[0,+\infty]$ and $+\infty/\ln b:=+\infty$. The same conversion holds for finite conditional entropy, mutual information, and conditional mutual information. In particular, values in bits equal nats divided by $\ln2$.

## Facts & Assumptions

**Given:** A base $b>1$ and finite probability vectors or finite joint probability laws.

[F1] [[def-it-information-units-and-logarithm-base]]: $\log_b t=\ln(t)/\ln(b)$ for $t>0$, $\ln b>0$, and zero-mass terms use $0\log_b0=0$.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite entropy and KL use finite sums; a support failure gives KL value $+\infty$.

[F3] [[def-it-finite-conditional-entropy]]: $H(X|Y)$ is a finite weighted sum of entropies of positive-mass conditional pmfs.

[F4] [[def-it-finite-mutual-information]]: $I(X;Y)$ is a finite sum over positive joint support.

[F5] [[def-it-finite-conditional-mutual-information]]: $I(X;Y|Z)$ is a finite weighted sum of conditional KL values over positive-mass $z$.

## Proof

1.1 By [F1], $\ln b>0$, so division by $\ln b$ preserves order and sends $+\infty$ to $+\infty$. For entropy, replacing each $\ln p_i$ by $\log_b p_i=\ln p_i/\ln b$ factors the same positive scalar out of the finite sum; zero terms remain zero by [F1]. The identical termwise calculation applies to every finite KL sum when $p$ is supported by $q$. [given, F1, F2, algebra]

2.1 If $p_i>0=q_i$, both base conventions set the KL value to $+\infty$, agreeing with the extended-real equation. Conditional entropy is a finite weighted sum of the entropy terms from step 1.1 by [F3]; mutual information is a finite KL sum by [F4]; conditional mutual information is a finite weighted sum of conditional KL sums by [F5]. Factoring $1/\ln b$ from each of these finite sums proves all remaining conversions. [F1, F3, F4, F5, step 1.1, algebra] ∎

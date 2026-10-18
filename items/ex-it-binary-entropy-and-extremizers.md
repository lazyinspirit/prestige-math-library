---
id: ex-it-binary-entropy-and-extremizers
kind: example
title: "Binary entropy and its extremizers"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-information-units-and-logarithm-base, def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-it-finite-kl-nonnegative-equality, thm-natural-logarithm-laws]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions are finite."
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
      locator: "Chapter 2, §§2.2–2.3, printed pp. 18–23; finite entropy and the uniform-distribution maximum."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 1, §1.1, printed pp. 9–12, Example 1.1; Bernoulli entropy and extrema."
---

## Example

For a Bernoulli law $q=(p,1-p)$, the entropy in nats is
$$h(p):=H(q)=-p\ln p-(1-p)\ln(1-p),\qquad 0\ln0:=0.$$
It is zero exactly at $p=0,1$ and has unique maximum $\ln2$ at $p=1/2$.

## Facts & Assumptions

**Given:** $p\in[0,1]$ and the Bernoulli probability vector $q=(p,1-p)$.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(q)=-\sum_{q_i>0}q_i\ln q_i$, with zero terms set to $0$.

[F2] [[thm-it-finite-kl-nonnegative-equality]]: for finite probability vectors, $D(r\|s)\ge0$, with equality iff $r=s$.

[F3] [[thm-natural-logarithm-laws]]: $\ln$ is strictly increasing and $\ln1=0$.

## Verification

1.1 Substituting $q=(p,1-p)$ into [F1] gives the displayed formula. If $p=0$ or $p=1$, the nonzero coordinate is $1$ and [F3] gives $\ln1=0$, so $h(p)=0$. [given, F1, F3, algebra]

1.2 Let $u=(1/2,1/2)$. The finite KL formula gives $D(q\|u)=p\ln(2p)+(1-p)\ln(2(1-p))=\ln2-h(p)$, also at $p=0,1$ because zero terms are omitted. By [F2], this value is nonnegative and vanishes exactly when $q=u$, i.e. $p=1/2$. Thus $h(p)\le\ln2$ with a unique maximizer. [F1, F2, given, algebra]

2.1 If $0<p<1$, then $\ln p<0$ and $\ln(1-p)<0$ by [F3], so both terms in $h(p)$ are positive. Along with step 1.1 this proves that the only zeros are the endpoints. [F3, step 1.1, given, algebra] ∎

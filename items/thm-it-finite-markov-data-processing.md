---
id: thm-it-finite-markov-data-processing
kind: theorem
title: "Data processing for a finite Markov chain, with equality condition"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [thm-it-finite-entropy-chain-rule, thm-it-finite-conditional-mutual-information-identities-and-equality]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof uses finite conditional laws and finite sums."
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
      locator: "Chapter 2, §2.5, printed pp. 40–42; finite conditional independence and information chain identities."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 3, §§3.4–3.5, printed pp. 50–53, Theorem 3.7(c); Markov mutual-information DPI and equality."
---

## Statement

Let $X,Y,Z$ have a joint pmf on finite alphabets and suppose that, for every $y$ with $p_Y(y)>0$,

$$p_{XZ|y}(x,z)=p_{X|y}(x)p_{Z|y}(z).$$

This is the finite Markov condition $X\to Y\to Z$. Then

$$I(X;Z)\le I(X;Y),$$

with equality if and only if $I(X;Y|Z)=0$, equivalently $X$ and $Y$ are conditionally independent given every positive-mass value of $Z$.

## Facts & Assumptions

**Given:** A finite joint pmf $p_{XYZ}$ satisfying the stated Markov factorization.

[F1] [[thm-it-finite-entropy-chain-rule]]: $I(X;Y,Z)=I(X;Y)+I(X;Z|Y)=I(X;Z)+I(X;Y|Z)$.

[F2] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: finite CMI is nonnegative and vanishes exactly at conditional independence on each positive-mass conditioning value.

## Proof

1.1 For each $y$ with $p_Y(y)>0$, the hypothesis makes $p_{XZ|y}=p_{X|y}\otimes p_{Z|y}$. The corresponding conditional KL term in the definition of $I(X;Z|Y)$ is therefore $D(p_{XZ|y}\|p_{X|y}\otimes p_{Z|y})=0$, so the finite weighted sum gives $I(X;Z|Y)=0$. [given, F2, algebra]

2.1 Equating the two expansions in [F1] and using step 1.1 gives $I(X;Y)-I(X;Z)=I(X;Y|Z)$. This is nonnegative by [F2], proving data processing. The difference vanishes exactly when $I(X;Y|Z)=0$, and [F2] identifies that equality case with conditional independence of $X,Y$ given each positive-mass $z$. [F1, F2, step 1.1, algebra] ∎

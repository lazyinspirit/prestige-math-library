---
id: thm-it-finite-conditional-mutual-information-identities-and-equality
kind: theorem
title: "Finite conditional mutual information identities and equality"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-it-finite-conditional-mutual-information, def-it-finite-conditional-entropy, thm-it-finite-kl-nonnegative-equality, lem-it-finite-marginals-and-conditionals-are-pmfs, def-qa-35-finite-probability-entropy-and-stochastic-matrices]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all conditional distributions and sums are finite."
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
      locator: "Chapter 2, §2.5, printed pp. 40–41, Lemma 2.5.5; CMI nonnegativity, equality, and conditional independence."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 3, §3.4, printed pp. 50–52; CMI and conditional independence."
---

## Statement

For finite $X,Y,Z$,

$$I(X;Y|Z)=H(X|Z)+H(Y|Z)-H(X,Y|Z)\ge0.$$

Equality holds if and only if, for every $z$ with $p_Z(z)>0$, the conditional joint pmf factors as $p_{XY|z}=p_{X|z}p_{Y|z}$; this is conditional independence given $Z$.

## Facts & Assumptions

**Given:** A joint pmf $p_{XYZ}$ on finite alphabets; all entropies and conditional mutual information use the nats convention.

[F1] [[def-it-finite-conditional-mutual-information]]: $I(X;Y|Z)=\sum_{z:p_Z(z)>0}p_Z(z)D(p_{XY|z}\|p_{X|z}\otimes p_{Y|z})$.

[F2] [[def-it-finite-conditional-entropy]]: $H(U|Z)=\sum_{z:p_Z(z)>0}p_Z(z)H(p_{U|z})$, with zero-mass conditioning values omitted.

[F3] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(r)=-\sum_{r_i>0}r_i\ln r_i$, with $0\ln0=0$.

[F4] [[thm-it-finite-kl-nonnegative-equality]]: for finite probability vectors $r,s$, $D(r\|s)\ge0$, with equality exactly when $r=s$.

[F5] [[lem-it-finite-marginals-and-conditionals-are-pmfs]]: each positive-mass conditional joint vector and its marginals are probability vectors.

## Proof

1.1 Fix $z$ with $p_Z(z)>0$. By [F5], $p_{XY|z}$ and its marginals are pmfs. If $p_{XY|z}(x,y)>0$, then both marginals are positive at $x,y$. Expanding [F1] and collecting terms using [F3] gives $D(p_{XY|z}\|p_{X|z}\otimes p_{Y|z})=H(p_{X|z})+H(p_{Y|z})-H(p_{XY|z})$; zero coordinates contribute $0$, so no logarithm of zero is taken. [F1, F3, F5, algebra]

2.1 Multiply the identity in step 1.1 by $p_Z(z)$ and sum over positive-mass $z$. By [F1] and [F2], this gives the stated entropy identity. Each conditional KL is nonnegative by [F4], and every weight in the sum is positive. Hence the total is zero exactly when each conditional KL is zero, which by [F4] is exactly $p_{XY|z}=p_{X|z}\otimes p_{Y|z}$ for every positive-mass $z$. [F1, F2, F4, step 1.1, algebra] ∎

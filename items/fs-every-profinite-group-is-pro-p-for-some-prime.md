---
id: fs-every-profinite-group-is-pro-p-for-some-prime
kind: false-statement
title: "Every profinite group is pro-p for some prime"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-profinite-completion-of-z-is-the-product-of-all-zp, def-pro-p-group]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
    - title: "Brian Osserman, Inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
---

## Statement

Every profinite group is pro-$p$ for some prime $p$.

## Facts & Assumptions

**Given:** The profinite completion $\widehat{\mathbb Z}$.

[L1] $\widehat{\mathbb Z}\cong\prod_q\mathbb Z_q$ over all primes $q$ ([[prop-profinite-completion-of-z-is-the-product-of-all-zp]]).

[F1] A pro-$p$ group is an inverse limit of finite $p$-groups ([[def-pro-p-group]]).

## Refutation

**Proof technique:** direct.

1.1 The profinite group $\widehat{\mathbb Z}$ has nontrivial continuous quotients $\mathbb Z_q$ for every prime $q$ by [L1]. [L1, given]

2.1 If $\widehat{\mathbb Z}$ were pro-$p$ for some fixed prime $p$, then every finite quotient of $\widehat{\mathbb Z}$ would be a $p$-group by [F1]. For each prime $q\ne p$, the projection to the $q$-adic factor followed by reduction modulo $q$ gives a quotient $$\widehat{\mathbb Z}\twoheadrightarrow\mathbb Z_q\twoheadrightarrow\mathbb Z_q/q\mathbb Z_q\cong\mathbb Z/q\mathbb Z,$$ which is a nontrivial $q$-group. This contradiction shows that not every profinite group is pro-$p$. [F1, step 1.1, algebra]

3.1 Therefore the statement is false. [step 1.1, step 2.1] ∎

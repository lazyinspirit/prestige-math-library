---
id: fs-zp-is-the-profinite-completion-of-z
kind: false-statement
title: "Zp is the full profinite completion of the integers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-zp-is-the-pro-p-completion-of-the-integers, prop-profinite-completion-of-z-is-the-product-of-all-zp]
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
---

## Statement

$\mathbb Z_p$ is the full profinite completion of $\mathbb Z$.

## Facts & Assumptions

**Given:** A prime $p$.

[L1] $\mathbb Z_p$ is the pro-$p$ completion of $\mathbb Z$
([[thm-zp-is-the-pro-p-completion-of-the-integers]]).

[L2] The full profinite completion of $\mathbb Z$ is $\prod_q\mathbb Z_q$ over
all primes $q$ ([[prop-profinite-completion-of-z-is-the-product-of-all-zp]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], $\mathbb Z_p$ remembers only the finite quotients of $\mathbb Z$ whose order is a power of $p$. [L1, given]

2.1 By [L2], the full profinite completion also has the $q$-primary factor $\mathbb Z_q$ for every prime $q\ne p$. Therefore $\mathbb Z_p$ omits the prime-to-$p$ information and cannot be the whole profinite completion. [L2, step 1.1]

3.1 So the stated claim is false. [step 1.1, step 2.1] ∎

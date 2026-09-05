---
id: thm-dirichlet-l-nonvanishing-line-one
kind: theorem
title: "Nonprincipal Dirichlet L-functions do not vanish on Re s = 1 away from s = 1"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-product-dirichlet-l-nonvanishing-line-one]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 3.8"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

If $\chi\ne\chi_0$ is a Dirichlet character, then
$L(1+it,\chi)\ne0$ for every real $t\ne0$.

## Facts & Assumptions

**Given:** A nonprincipal Dirichlet character $\chi$ and a real number $t\ne0$.

[L1] The full product $\prod_{\psi\bmod q}L(s,\psi)$ has no zero on the line
$\operatorname{Re}s=1$ ([[thm-product-dirichlet-l-nonvanishing-line-one]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $L(1+it,\chi)=0$. Then the finite product over all characters modulo $q$ also vanishes at $1+it$, because one factor is zero there. [L1, given, assume-contra]

2.1 This contradicts [L1]. Therefore $L(1+it,\chi)\ne0$ for every real $t\ne0$. [step 1.1, L1, discharge-contradiction] ∎

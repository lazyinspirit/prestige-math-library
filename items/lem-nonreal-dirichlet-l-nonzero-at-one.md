---
id: lem-nonreal-dirichlet-l-nonzero-at-one
kind: lemma
title: "A nonreal Dirichlet L-function is nonzero at one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-product-dirichlet-l-nonvanishing-line-one, thm-principal-dirichlet-l-factorization, thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]
justified_by: []
proof_strategy: contradiction
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 3.10"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

If $\chi$ is a nonreal Dirichlet character, then $L(1,\chi)\ne0$.

## Facts & Assumptions

**Given:** A nonreal Dirichlet character $\chi$ modulo $q$.

[L1] The full product $\prod_{\psi\bmod q}L(s,\psi)$ has no zero on the line $\operatorname{Re}s=1$ ([[thm-product-dirichlet-l-nonvanishing-line-one]]).

[L2] The principal Dirichlet $L$-function has a simple pole at $s=1$ ([[thm-principal-dirichlet-l-factorization]]).

[L3] Every nonprincipal Dirichlet $L$-function is holomorphic on $\operatorname{Re}s>0$ ([[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]]).

[A1] Complex conjugation sends a Dirichlet character to another Dirichlet character $\bar\chi$, and $L(1,\bar\chi)=\overline{L(1,\chi)}$.

## Proof

**Proof technique:** contradiction.

1.1 Suppose $L(1,\chi)=0$. Then [A1] gives $L(1,\bar\chi)=0$ as well. Because $\chi$ is nonreal, the characters $\chi$ and $\bar\chi$ are distinct, so these are two different vanishing factors in the full finite product at $s=1$. [A1, given, assume-contra]

2.1 In the full product over all characters, [L2] contributes order $-1$ at $s=1$, while step 1.1 contributes at least $+1$ from each of the distinct factors $L(s,\chi)$ and $L(s,\bar\chi)$. Every remaining nonprincipal factor is holomorphic at $1$ by [L3], so it contributes order at least $0$. Hence the total product has order at least $+1$ at $1$, meaning a zero there. This contradicts [L1]. Therefore $L(1,\chi)\ne0$. [L1, L2, L3, step 1.1, discharge-contradiction] ∎

---
id: thm-platt-central-nonvanishing-through-conductor-2000000
kind: theorem
title: "Central nonvanishing for primitive Dirichlet L-functions through conductor 2,000,000"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-dirichlet-l-function
  - def-primitive-dirichlet-character-and-conductor
  - thm-primitive-dirichlet-l-analytic-continuation
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-primitive-dirichlet-l-functional-equation
proof_strategy: direct
sources:
  references:
    - title: "David J. Platt, Numerical Computations Concerning the GRH, arXiv:1305.3087v1"
      url: "https://arxiv.org/pdf/1305.3087v1"
      locator: "§7, Theorem 7.2, printed p. 15"
---

## Statement

For every integer $q$ with $1\le q\le2{,}000{,}000$ and every primitive Dirichlet character $\chi$ modulo $q$, the analytically continued value satisfies $L(\tfrac12,\chi)\ne0$.

## Statement references

[David J. Platt, *Numerical Computations Concerning the GRH*, arXiv:1305.3087v1, §7 Theorem 7.2](https://arxiv.org/pdf/1305.3087v1)

## Facts & Assumptions

**Given:** An integer $q$ with $1\le q\le2{,}000{,}000$, a primitive Dirichlet character $\chi$ modulo $q$, and the analytic continuation of $L(s,\chi)$.

[F1] The exact owner-authorized imported finite computation is Platt’s §7 Theorem 7.2, printed p. 15 ([complete arXiv v1 article](https://arxiv.org/pdf/1305.3087v1)): for every primitive character of modulus $q\le2{,}000{,}000$, $L(\tfrac12,\chi)\ne0$. The complete 15-page article was read; no production replay or per-character certificate package is claimed.

[F2] The owner authorization for run number-theory-all-141-2026-10-25 names the input platt-central-nonvanishing and permits this exact imported computation. It supplies no local replay or numerical-code acceptance.

[F3] [[def-dirichlet-l-function]] defines the Dirichlet series on $\operatorname{Re}s>1$.

[F4] [[thm-primitive-dirichlet-l-analytic-continuation]] gives the entire continuation for nonprincipal primitive characters, which are exactly the primitive characters with $q>1$.

[F5] [[def-primitive-dirichlet-character-and-conductor]] fixes the primitive-character and conductor convention.

[F6] [[thm-primitive-dirichlet-l-functional-equation]] fixes the completed-function and root-number convention used in Platt’s computation.

[F7] [[thm-riemann-zeta-continuation-to-the-right-half-plane]] gives the choice-free holomorphic continuation at $s=\tfrac12$ when $q=1$.

## Proof

1.1 The hypotheses in [F1] match the given primitive character and the stated modulus range. By [F3] the notation is the Dirichlet $L$-function. For $q>1$, [F4] gives its entire continuation; for $q=1$, the principal character gives zeta and [F7] supplies its holomorphic continuation at $\tfrac12$ without Countable Choice. The primitive-character convention and completed normalization are fixed by [F5]–[F6]. [given, F1, F3, F4, F5, F6, F7]

2.1 Platt’s authorized imported Theorem 7.2 states that this value is nonzero for every such character; applying it to the arbitrary $q$ and $\chi$ proves the conclusion. [given, F1, step 1.1] ∎

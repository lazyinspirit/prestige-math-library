---
id: thm-induced-dirichlet-l-finite-euler-factors
kind: theorem
title: "Finite Euler factors under character induction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-dirichlet-character-primitive-induction, def-dirichlet-l-function, thm-dirichlet-l-euler-product]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, equation (16.2)"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

If $\chi$ modulo $q$ is induced by its primitive ancestor $\chi^*$ modulo $d$,
then, for $\operatorname{Re}s>1$,
$$L(s,\chi)=L(s,\chi^*)\prod_{p\mid q,\ p\nmid d}(1-\chi^*(p)p^{-s}).$$

## Facts & Assumptions

**Given:** The indicated induced pair and $\operatorname{Re}s>1$.

[F1] The ancestor has conductor dividing $q$ ([[thm-dirichlet-character-primitive-induction]]).

[F2] Dirichlet $L$-functions have their absolutely convergent Euler products in this half-plane ([[thm-dirichlet-l-euler-product]]).

## Proof

**Proof technique:** direct.

1.1 In [F2], the local factors of $\chi$ and $\chi^*$ agree unless $p\mid q$ but $p\nmid d$; at exactly those primes $\chi(p)=0$, while the primitive factor is $(1-\chi^*(p)p^{-s})^{-1}$. [F1, F2, given]

2.1 Cancelling all common local factors and multiplying the finite exceptional set gives the displayed identity. [step 1.1, algebra] ∎

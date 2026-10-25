---
id: prop-simple-reflection-embedding-of-verma-modules
kind: proposition
title: "Simple-reflection embeddings of Verma modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-simple-root-singular-vector-in-a-verma-module, thm-universal-property-of-verma-modules, thm-pbw-model-of-a-verma-module, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O, Proposition 3.2"
      url: "https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
---

## Statement

If $\langle\lambda+\rho,\alpha_i^\vee\rangle\in\mathbb Z_{>0}$, there is an embedding $M(s_i\mathbin\cdot\lambda)\hookrightarrow M(\lambda)$.

## Facts & Assumptions

**Given:** The positive integer $m=\langle\lambda+\rho,\alpha_i^\vee\rangle$, the singular vector of [[lem-simple-root-singular-vector-in-a-verma-module]], and the universal property [[thm-universal-property-of-verma-modules]].

[F1] The PBW model identifies $M(\mu)$ with $U(\mathfrak n^-)v_\mu$ as a vector space for every $\mu$ ([[thm-pbw-model-of-a-verma-module]]).

[F2] The PBW filtration has $\operatorname{gr}U(\mathfrak n^-)\cong S(\mathfrak n^-)$ ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).

## Proof

**Proof technique:** direct.

1.1 The singular vector $f_i^m v_\lambda$ has weight $s_i\mathbin\cdot\lambda$, so the universal property gives a homomorphism $M(s_i\mathbin\cdot\lambda)\to M(\lambda)$ taking its highest vector to it. [given, construct]

2.1 By [F1], every source vector is uniquely $u v_{s_i\cdot\lambda}$ with $u\in U(\mathfrak n^-)$. Its image is $u f_i^m v_\lambda$, which vanishes only if $u f_i^m=0$ in $U(\mathfrak n^-)$, again by [F1]. If $u\ne0$, its highest nonzero PBW symbol and the symbol of $f_i^m$ have nonzero product in the polynomial domain $S(\mathfrak n^-)$ of [F2]. Therefore $u f_i^m\ne0$, and the map is injective. [F1, F2, step 1.1, algebra] ∎

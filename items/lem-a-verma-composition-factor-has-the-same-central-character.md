---
id: lem-a-verma-composition-factor-has-the-same-central-character
kind: lemma
title: "A Verma composition factor has the same central character"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-central-character-of-a-lie-algebra-module, lem-central-action-on-a-cyclic-highest-weight-module-is-scalar, thm-verma-module-has-a-unique-simple-quotient]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, §15.1"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

If $[M(\lambda):L(\mu)]\ne0$, then $\chi_\lambda=\chi_\mu$.

## Facts & Assumptions

**Given:** Central characters [[def-central-character-of-a-lie-algebra-module]], their scalar action [[lem-central-action-on-a-cyclic-highest-weight-module-is-scalar]], and the simple quotient notation [[thm-verma-module-has-a-unique-simple-quotient]].

## Proof

**Proof technique:** direct.

1.1 Every $z\in Z(U(\mathfrak g))$ acts on the cyclic highest-weight module $M(\lambda)$ by the scalar $\chi_\lambda(z)$. [given]

2.1 The same scalar action descends to each subquotient; on the composition factor $L(\mu)$ it is by definition $\chi_\mu(z)$. Hence the two characters agree on every $z$. [step 1.1, algebra] ∎

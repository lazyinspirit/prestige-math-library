---
id: thm-verma-embedding-for-an-arbitrary-positive-root
kind: theorem
title: "Verma embedding for an arbitrary positive root"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-simple-reflection-embedding-of-verma-modules, def-root-reflections-and-the-weyl-group-action, def-weyl-vector-rho-for-a-chosen-positive-system]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Theorem 15.11"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
---

## Statement

For $\alpha\in\Phi^+$, if $\langle\lambda+\rho,\alpha^\vee\rangle\in\mathbb Z_{>0}$, then $M(s_\alpha\mathbin\cdot\lambda)\hookrightarrow M(\lambda)$.

## Facts & Assumptions

**Given:** Simple-reflection embeddings [[prop-simple-reflection-embedding-of-verma-modules]] and the fixed reflection and dot-action conventions [[def-root-reflections-and-the-weyl-group-action]] and [[def-weyl-vector-rho-for-a-chosen-positive-system]].

[L1] Etingof's Theorem 15.11: when two shifted weights differ by a positive-integral root reflection, the corresponding Verma module embeds uniquely in the other; its proof uses the Shapovalov determinant generically and then takes a limit.

## Proof

**Proof technique:** direct.

1.1 Put $\nu=\lambda+\rho$ and $n=\langle\nu,\alpha^\vee\rangle$. Then $n\in\mathbb Z_{>0}$ and $s_\alpha\nu=\nu-n\alpha$, so $s_\alpha\nu$ is related to $\nu$ by one positive-integral root reflection. [given, algebra]

2.1 The source theorem [L1] applies to this one-reflection relation and gives a unique embedding $M(s_\alpha\nu-\rho)\hookrightarrow M(\nu-\rho)$. Since $s_\alpha\nu-\rho=s_\alpha\mathbin\cdot\lambda$, this is the asserted embedding. [step 1.1, L1] ∎

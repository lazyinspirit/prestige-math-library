---
id: cex-equal-central-character-does-not-give-every-verma-embedding-direction
kind: counterexample
title: "Equal central character does not give every Verma embedding direction"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-simple-root-singular-vector-in-a-verma-module, thm-universal-property-of-verma-modules, thm-pbw-model-of-a-verma-module, lem-harish-chandra-projection-computes-highest-weight-scalars]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Remark 15.10"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-09-receipts.jsonl (cex-equal-central-character-does-not-give-every-verma-embedding-direction). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement refuted

Equal central character of $\lambda$ and $\mu$ implies both $M(\mu)\to M(\lambda)$ and $M(\lambda)\to M(\mu)$ are nonzero.

## Counterexample

**Given:** A regular dominant integral weight $\lambda$ in type $A_2$ and a simple root $\alpha_1$. Verma modules use their supplied triangular decomposition.

**Proof technique:** direct.

1.1 Put $m=\langle\lambda+\rho,\alpha_1^\vee\rangle\in\mathbb Z_{>0}$ and $\mu=s_1\mathbin\cdot\lambda=\lambda-m\alpha_1$. The singular-vector lemma [[lem-simple-root-singular-vector-in-a-verma-module]] gives a nonzero highest vector $f_1^m v_\lambda$ of weight $\mu$ in $M(\lambda)$. The Verma universal property [[thm-universal-property-of-verma-modules]] therefore gives a nonzero map $M(\mu)\to M(\lambda)$. [given]

2.1 Every central element acts by a scalar on each cyclic highest-weight module by [[lem-harish-chandra-projection-computes-highest-weight-scalars]]. The nonzero map in step 1.1 intertwines these scalar actions, so $\chi_\mu=\chi_\lambda$. [step 1.1]

3.1 The PBW weight description [[thm-pbw-model-of-a-verma-module]] puts every weight of $M(\mu)$ in $\mu-Q^+$. Since $\lambda=\mu+m\alpha_1$ lies strictly above $\mu$, $M(\mu)$ has no vector of weight $\lambda$. A map $M(\lambda)\to M(\mu)$ must therefore kill its highest vector and is zero. Thus equal central characters do not give both embedding directions. [step 1.1, step 2.1] ∎

---
id: thm-verma-embedding-for-an-arbitrary-positive-root
kind: theorem
title: "Verma embedding for an arbitrary positive root"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-shapovalov-determinant-formula, lem-generic-shapovalov-radical-on-a-casimir-hyperplane, thm-universal-property-of-verma-modules, lem-a-nonzero-verma-homomorphism-is-injective, def-root-reflections-and-the-weyl-group-action, def-weyl-vector-rho-for-a-chosen-positive-system]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Theorem 15.11"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-04-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For $\alpha\in\Phi^+$, if $\langle\lambda+\rho,\alpha^\vee\rangle\in\mathbb Z_{>0}$, then $M(s_\alpha\mathbin\cdot\lambda)\hookrightarrow M(\lambda)$.

## Facts & Assumptions

**Given:** The determinant formula [[thm-shapovalov-determinant-formula]], its generic factor-hyperplane radical lemma [[lem-generic-shapovalov-radical-on-a-casimir-hyperplane]], and the reflection conventions [[def-root-reflections-and-the-weyl-group-action]] and [[def-weyl-vector-rho-for-a-chosen-positive-system]].

[F1] A singular vector yields a Verma homomorphism ([[thm-universal-property-of-verma-modules]]), and every nonzero Verma homomorphism is injective ([[lem-a-nonzero-verma-homomorphism-is-injective]]).

## Proof

**Proof technique:** direct.

1.1 Put $n=\langle\lambda+\rho,\alpha^\vee\rangle>0$ and $\mu=\lambda-n\alpha=s_\alpha\cdot\lambda$. At weight $\lambda-n\alpha$, the determinant formula has the factor $\langle\lambda+\rho,\alpha^\vee\rangle-n$ with exponent $K(0)=1$. Thus its hyperplane is a factor hyperplane, and at generic points $\eta$ on it the generic-radical lemma supplies a nonzero singular vector in $M(\eta)_{\eta-n\alpha}$. [given, algebra]

2.1 In fixed PBW coordinates the maps $e_i:M(\eta)_{\eta-n\alpha}\to M(\eta)_{\eta-n\alpha+\alpha_i}$ have matrix entries polynomial in $\eta$. Stack them to form one matrix $E(\eta)$. Step 1.1 says it has a nonzero kernel at a dense set of points on the affine hyperplane $H_{\alpha,n}$. Hence every maximal minor of $E$ vanishes identically on that hyperplane: a polynomial that vanishes outside a countable union of proper affine subspaces there is zero. In particular $E(\lambda)$ has a nonzero kernel. A vector in it is killed by every simple positive-root vector, hence by all of $\mathfrak n^+$, and has weight $\mu$. [step 1.1, algebra]

3.1 By [F1] this vector defines a nonzero map $M(\mu)\to M(\lambda)$, which is injective. Since $\mu=s_\alpha\cdot\lambda$, this is the required embedding. [F1, step 2.1] ∎

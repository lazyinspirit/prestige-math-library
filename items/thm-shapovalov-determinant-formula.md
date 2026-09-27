---
id: thm-shapovalov-determinant-formula
kind: theorem
title: "The Shapovalov determinant formula"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-shapovalov-determinant-on-a-weight-space, lem-shapovalov-determinant-hyperplane-factorization, lem-generic-shapovalov-radical-on-a-casimir-hyperplane, lem-transverse-shapovalov-pairing-on-a-generic-hyperplane]
proof_strategy: direct
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Exercise 8.15(iv)-(x)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
verification:
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

For $\lambda\in\mathfrak h^*$ and $\beta\in Q^+$, let $K(\gamma)$ be the
number of partitions of $\gamma\in Q^+$ into positive roots, and set
$K(\gamma)=0$ when $\gamma\notin Q^+$. Then

$$D_\beta(\lambda)\doteq\prod_{\alpha\in\Phi^+}\prod_{n\ge1}(\langle\lambda+\rho,\alpha^\vee\rangle-n)^{K(\beta-n\alpha)}.$$

For fixed $\beta$ only finitely many exponents are nonzero.

## Facts & Assumptions

**Given:** The determinant [[def-shapovalov-determinant-on-a-weight-space]], its preliminary factorization [[lem-shapovalov-determinant-hyperplane-factorization]], the generic radical [[lem-generic-shapovalov-radical-on-a-casimir-hyperplane]], and the perfect transverse pairing [[lem-transverse-shapovalov-pairing-on-a-generic-hyperplane]].

## Proof

**Proof technique:** direct.

1.1 The preliminary factorization gives nonnegative integers $m_{\alpha,n}(\beta)$ supported where $n\alpha\le\beta$. Its top PBW term gives $\deg D_\beta=\sum_{\alpha\in\Phi^+}\sum_{n\ge1}K(\beta-n\alpha)=\sum_{\alpha\in\Phi^+}\sum_{n\ge1}m_{\alpha,n}(\beta)$. Both sums are finite. [given, algebra]

2.1 Fix a pair $(\alpha,n)$ for which $m_{\alpha,n}(\beta)>0$. The hyperplane $H_{\alpha,n}$ is then a factor hyperplane of $D_\beta$, so the generic-radical lemma applies. At a generic point of this hyperplane the kernel in weight $\lambda-\beta$ has dimension $K(\beta-n\alpha)$, and the transverse-pairing lemma says the determinant's order along a transverse line is exactly this dimension. Other affine factors are nonzero at the chosen generic point. Thus $m_{\alpha,n}(\beta)=K(\beta-n\alpha)$. [given, step 1.1]

3.1 For every pair with $m_{\alpha,n}(\beta)=0$ one has $m_{\alpha,n}(\beta)\le K(\beta-n\alpha)$ trivially; step 2.1 gives equality for every positive multiplicity. The equality of finite total sums in step 1.1 therefore forces equality at every pair, including all pairs with vanishing preliminary multiplicity. Substituting these exponents into the factorization proves the formula. [step 1.1, step 2.1, algebra] ∎

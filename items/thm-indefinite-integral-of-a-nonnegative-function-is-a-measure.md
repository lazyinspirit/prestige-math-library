---
id: thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
kind: theorem
title: "The indefinite integral of a nonnegative measurable function is a measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integral-over-a-measurable-set, thm-simple-indefinite-integral-is-a-measure, thm-monotone-convergence-for-the-integral, cor-additivity-of-the-nonnegative-lebesgue-integral, def-measure]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (thm-indefinite-integral-of-a-nonnegative-function-is-a-measure). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, ch. 7"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., §2.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $f:X\to[0,+\infty]$ be measurable and define
$$\nu_f(A):=\int_A f\,d\mu \qquad (A\in\mathcal A).$$
Then $\nu_f$ is a measure on $(X,\mathcal A)$.

## Facts & Assumptions

**Given:** A nonnegative measurable function $f$.

[L1] The set function $A\mapsto\int_A f\,d\mu$ is defined by $A\mapsto\int f\chi_A\,d\mu$ ([[def-integral-over-a-measurable-set]]).

[L2] Monotone convergence holds for the nonnegative integral ([[thm-monotone-convergence-for-the-integral]]).

[L3] The nonnegative integral is additive on measurable sets ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[L4] A measure must vanish at the empty set and be countably additive on disjoint measurable sequences ([[def-measure]]).

## Proof

**Proof technique:** direct.

1.1 One has $\nu_f(\varnothing)=0$. If $(A_n)$ is a pairwise disjoint sequence, put $B_n:=\bigcup_{k<n}A_k$. Then $\chi_{B_n}\uparrow\chi_{\bigcup_kA_k}$, so $f\chi_{B_n}\uparrow f\chi_{\bigcup_kA_k}$, including where $f=+\infty$ under the convention $0\cdot\infty=0$. By [L2], $\nu_f(\bigcup_kA_k)=\lim_n\nu_f(B_n)$. [L1, L2, given]


2.1 Because the sets $A_k$ are disjoint, $f\chi_{B_n}=\sum_{k<n}f\chi_{A_k}$. Repeated use of [L3] gives $\nu_f(B_n)=\sum_{k<n}\nu_f(A_k)$. Taking the increasing limit in step 1.1 proves countable additivity. [step 1.1, L3, algebra]

3.1 Steps 1.1 and 2.1 verify the two conditions in [L4], so $\nu_f$ is a measure. [step 1.1, step 2.1, L4] ∎

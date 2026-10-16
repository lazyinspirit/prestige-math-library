---
id: thm-qc-measurement-variation-at-most-trace-distance
kind: theorem
title: "Measurement Variation At Most Trace Distance"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps: ["def-qc-trace-distance", "def-qc-povm-and-outcome-law", "thm-non-negative-operator-characterisations", "thm-non-negative-square-root-exists-and-is-unique", "thm-qc-hermitian-trace-norm-positive-negative-parts", "thm-qc-helstrom-binary-discrimination", "thm-trace-of-ab-equals-trace-of-ba"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§3.1.1–3.1.2, optimal measurement and total-variation bound."
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.6.2, PDF pp.39–41; raw trace norm and optimal-measurement discussion"
---

## Statement

Let $\rho,\sigma$ be density operators on a finite-dimensional complex Hilbert space and let $\{E_a\}_{a\in\mathcal A}$ be any finite POVM. If $p_a=\operatorname{tr}(\rho E_a)$ and $q_a=\operatorname{tr}(\sigma E_a)$, then
$$\frac12\sum_{a\in\mathcal A}|p_a-q_a|\le D(\rho,\sigma).$$
The two-effect projective measurement from the Holevo–Helstrom theorem attains equality.

## Facts & Assumptions

**Given:** Density operators $\rho,\sigma$ and a finite POVM $\{E_a\}$.

[F1] A finite POVM has nonnegative effects $E_a$, $\sum_aE_a=I$, and probabilities $p_a=\operatorname{tr}(\rho E_a)$ ([[def-qc-povm-and-outcome-law]]). The current QC04 definition body is present as a draft.

[F2] $D(\rho,\sigma)=\frac12\|\Delta\|_1$ for $\Delta=\rho-\sigma$ ([[def-qc-trace-distance]]).

[L1] For Hermitian trace-zero $\Delta=\Delta_+-\Delta_-$, $\operatorname{tr}\Delta_+=\operatorname{tr}\Delta_-=\frac12\|\Delta\|_1$ ([[thm-qc-hermitian-trace-norm-positive-negative-parts]]).

[L2] The positive spectral projection of $\Delta$ and its complement form an attaining binary projective measurement ([[thm-qc-helstrom-binary-discrimination]]).

[F3] If $A,B$ are nonnegative finite-dimensional operators, then $\operatorname{tr}(AB)=\operatorname{tr}(B^{1/2}AB^{1/2})\ge0$, since cyclicity identifies the traces and $B^{1/2}AB^{1/2}$ is nonnegative ([[thm-trace-of-ab-equals-trace-of-ba]], [[thm-non-negative-square-root-exists-and-is-unique]], [[thm-non-negative-operator-characterisations]]).

## Proof


1.1 Set $\delta_a=p_a-q_a=\operatorname{tr}(E_a\Delta)$. Since $\sum_aE_a=I$ and $\operatorname{tr}\Delta=\operatorname{tr}\rho-\operatorname{tr}\sigma=0$, one has $\sum_a\delta_a=0$. Therefore the sum of the positive $\delta_a$ equals $\frac12\sum_a|\delta_a|$. [given, F1, algebra]

2.1 Let $J=\{a:\delta_a>0\}$ and $E_J=\sum_{a\in J}E_a$. Positivity and completeness in [F1] imply $0\le E_J\le I$. By [L1], $\Delta=\Delta_+-\Delta_-$ with both parts non-negative. Then $\operatorname{tr}(E_J\Delta_- )\ge0$ and $\operatorname{tr}((I-E_J)\Delta_+)\ge0$ by [F3], so $\operatorname{tr}(E_J\Delta)\le\operatorname{tr}\Delta_+$. Consequently $$\frac12\sum_a|\delta_a|=\sum_{a\in J}\operatorname{tr}(E_a\Delta)=\operatorname{tr}(E_J\Delta)\le\operatorname{tr}\Delta_+=D(\rho,\sigma)$$ by [L1] and [F2]. [step 1.1, F1, F2, F3, L1, algebra]

3.1 For the positive spectral projection $E_+$ of $\Delta$, the binary measurement $(E_+,I-E_+)$ has signed outcome differences $\operatorname{tr}\Delta_+$ and $-\operatorname{tr}\Delta_+$; hence its total variation is $\operatorname{tr}\Delta_+=D$. It attains the bound in step 2.1. [L1, L2, step 2.1] ∎


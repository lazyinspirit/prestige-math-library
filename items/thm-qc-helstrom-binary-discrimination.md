---
id: thm-qc-helstrom-binary-discrimination
kind: theorem
title: "Helstrom Binary Discrimination"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: ["def-qc-trace-distance", "def-qc-povm-and-outcome-law", "thm-non-negative-operator-characterisations", "thm-non-negative-square-root-exists-and-is-unique", "thm-qc-hermitian-trace-norm-positive-negative-parts", "thm-trace-of-ab-equals-trace-of-ba"]
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
      locator: "§3.1.1–3.1.2, binary discrimination and trace-norm optimization."
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.6.2, PDF pp.39–41; raw trace norm and optimal-measurement discussion"
---

## Statement

Let $\rho,\sigma$ be density operators on a finite-dimensional complex Hilbert space. If they are presented with equal prior probability, the greatest success probability of any binary measurement for identifying the state is
$$\frac12(1+D(\rho,\sigma)).$$
The binary projective measurement whose first effect is the spectral projection of $\Delta=\rho-\sigma$ onto its strictly positive eigenspaces attains this value.

## Facts & Assumptions

**Given:** Density operators $\rho,\sigma$ and equal prior probabilities $1/2$.

[F1] $D(\rho,\sigma)=\frac12\|\rho-\sigma\|_1$ ([[def-qc-trace-distance]]).

[L1] A finite POVM has nonnegative effects summing to $I$ and outcome probabilities $p_a=\operatorname{tr}(\rho E_a)$ ([[def-qc-povm-and-outcome-law]]). The current QC04 definition body is present as a draft.

[L2] For Hermitian trace-zero $\Delta$, its positive and negative spectral parts satisfy $\operatorname{tr}\Delta_+=\operatorname{tr}\Delta_-=\frac12\|\Delta\|_1$ ([[thm-qc-hermitian-trace-norm-positive-negative-parts]]). The current QC01 theorem body is present as a draft.

[L3] If $A,B$ are nonnegative, then $\operatorname{tr}(AB)=\operatorname{tr}(B^{1/2}AB^{1/2})\ge0$ by cyclicity of trace and nonnegativity ([[thm-trace-of-ab-equals-trace-of-ba]], [[thm-non-negative-square-root-exists-and-is-unique]], [[thm-non-negative-operator-characterisations]]).

## Proof


1.1 Write a binary POVM as $(E,I-E)$ with $0\le E\le I$. Its equal-prior success probability is $$\frac12\operatorname{tr}(E\rho)+\frac12\operatorname{tr}((I-E)\sigma)=\frac12+\frac12\operatorname{tr}(E\Delta),\qquad \Delta=\rho-\sigma,$$ using $\operatorname{tr}\sigma=1$. [given, F1, L1, algebra]

1.2 For any such effect, [L2] gives $\operatorname{tr}(E\Delta)=\operatorname{tr}(E\Delta_+)-\operatorname{tr}(E\Delta_-)\le\operatorname{tr}\Delta_+$: the second trace is nonnegative by [L3], and $\operatorname{tr}((I-E)\Delta_+)\ge0$ by [L3] bounds the first by $\operatorname{tr}\Delta_+$. Thus [L2] implies $\operatorname{tr}(E\Delta)\le D(\rho,\sigma)$. [given, L2, L3, algebra]

2.1 Let $E_+$ be the orthogonal projection onto the positive eigenspaces of $\Delta$. Then $E_+\Delta=\Delta_+$, so $\operatorname{tr}(E_+\Delta)=\operatorname{tr}\Delta_+=D(\rho,\sigma)$ by [L2]. The binary projective measurement $(E_+,I-E_+)$ therefore attains the upper bound from step 1.2. [step 1.2, L2]

3.1 Substituting the maximum $\operatorname{tr}(E\Delta)=D$ into the success formula of step 1.1 gives $\frac12+\frac12D=\frac12(1+D)$, as claimed. [step 1.1, step 1.2, step 2.1, algebra] ∎


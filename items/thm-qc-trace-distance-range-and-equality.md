---
id: thm-qc-trace-distance-range-and-equality
kind: theorem
title: "Trace Distance Range And Equality"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: ["def-qc-trace-distance", "def-qc-density-operator", "thm-non-negative-operator-characterisations", "thm-non-negative-square-root-exists-and-is-unique", "thm-qc-hermitian-trace-norm-positive-negative-parts", "thm-singular-value-decomposition", "thm-trace-of-ab-equals-trace-of-ba"]
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
      locator: "§3.1.1–3.1.2, range and support equality cases."
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.6.2, PDF pp.39–41; raw trace norm and optimal-measurement discussion"
---

## Statement

For finite-dimensional density operators $\rho,\sigma$,
$$0\le D(\rho,\sigma)\le1.$$
Moreover, $D(\rho,\sigma)=0$ iff $\rho=\sigma$, and $D(\rho,\sigma)=1$ iff their supports are orthogonal.

## Facts & Assumptions

**Given:** Density operators $\rho,\sigma$ on a finite-dimensional complex Hilbert space.

[F1] $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$ ([[def-qc-trace-distance]]).

[F2] Density operators are non-negative with trace one ([[def-qc-density-operator]]). The current QC03 definition is present as a draft; its declared existence supplier is still unresolved.

[L1] If $\Delta=\rho-\sigma$ is Hermitian with trace zero, then its positive and negative spectral parts have equal trace $\frac12\|\Delta\|_1$ ([[thm-qc-hermitian-trace-norm-positive-negative-parts]]).

[F3] For nonnegative $Y$, write $\operatorname{supp}Y:=(\ker Y)^\perp$. If $P$ is an orthogonal projection and $\operatorname{tr}(PY)=0$, cyclicity gives $\operatorname{tr}(PY)=\operatorname{tr}((P\sqrt Y)^*(P\sqrt Y))$, a sum of squared coordinate moduli, so $P\sqrt Y=0$. The positive spectral decomposition gives $\ker\sqrt Y=\ker Y$, hence $\operatorname{range}\sqrt Y=\operatorname{supp}Y$ ([[thm-trace-of-ab-equals-trace-of-ba]], [[thm-non-negative-square-root-exists-and-is-unique]], [[thm-non-negative-operator-characterisations]]).

[L2] For nonnegative $A,B$, $\operatorname{tr}(AB)=\operatorname{tr}(B^{1/2}AB^{1/2})\ge0$ by cyclicity and positivity ([[thm-trace-of-ab-equals-trace-of-ba]], [[thm-non-negative-square-root-exists-and-is-unique]], [[thm-non-negative-operator-characterisations]]).

## Proof


1.1 Let $\Delta=\rho-\sigma=\Delta_+-\Delta_-$. Since $\operatorname{tr}\Delta=0$, [L1] gives $\operatorname{tr}\Delta_+=\operatorname{tr}\Delta_-=D\ge0$, proving the lower bound. [given, F1, F2, L1]

1.2 If $\operatorname{supp}\rho\perp\operatorname{supp}\sigma$, then $\rho\sigma=0$ and $\Delta$ acts as $\rho$ on $\operatorname{supp}\rho$, as $-\sigma$ on $\operatorname{supp}\sigma$, and as zero on the orthogonal complement. Hence $\|\Delta\|_1=\operatorname{tr}\rho+\operatorname{tr}\sigma=2$ and $D=1$. [given, F1, F2, algebra]

2.1 Let $P_+$ project onto the strictly positive eigenspaces of $\Delta$. Then $0\le P_+\le I$ and $D=\operatorname{tr}(P_+\Delta)=\operatorname{tr}(P_+\rho)-\operatorname{tr}(P_+\sigma)\le\operatorname{tr}(P_+\rho)\le1$. The first inequality uses $\operatorname{tr}(P_+\sigma)\ge0$ by [L2], and the last follows from $\operatorname{tr}((I-P_+)\rho)\ge0$ by [L2] and $\operatorname{tr}\rho=1$. [step 1.1, F2, L1, L2]

2.2 If $D=0$, [F1] gives $\|\rho-\sigma\|_1=0$, so definiteness of the trace norm gives $\rho=\sigma$. Conversely equal states have distance zero by [F1]. [F1, step 1.1, algebra]

3.1 Conversely, if $D=1$, then both inequalities in step 2.1 are equalities: $\operatorname{tr}(P_+\rho)=1$ and $\operatorname{tr}(P_+\sigma)=0$. Thus $\operatorname{tr}((I-P_+)\rho)=0$ and $\operatorname{tr}(P_+\sigma)=0$. Applying [F3] to each positive operator gives $(I-P_+)\sqrt\rho=0$ and $P_+\sqrt\sigma=0$, so $\operatorname{supp}\rho\subseteq\operatorname{ran}P_+$ and $\operatorname{supp}\sigma\subseteq\ker P_+$. These subspaces are orthogonal. [step 2.1, F2, F3] ∎


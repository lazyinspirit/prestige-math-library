---
id: thm-qc-fuchs-van-de-graaf
kind: theorem
title: "Fuchs Van De Graaf"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: ["def-qc-trace-distance", "def-qc-fidelity", "lem-qc-fidelity-classical-measurement-minimum", "lem-qc-pure-state-trace-distance", "thm-qc-fidelity-purification-characterization", "thm-qc-trace-distance-channel-contractivity", "thm-qc-isometry-partial-trace-is-channel", "def-qc-partial-trace", "thm-qc-measurement-variation-at-most-trace-distance"]
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
      locator: "§3.2.1–3.2.3, Fuchs–van de Graaf inequalities."
    - title: "John Preskill, Quantum Computation, Chapter 2: Foundations I: States and Ensembles (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap2_15.pdf"
      locator: "§2.6.1–2, PDF pp.36–40; complete cross-read qc_r2 ledger, summary/corroboration only"
---

## Statement

For density operators $\rho,\sigma$ on a nonzero finite-dimensional complex Hilbert space,
$$1-F(\rho,\sigma)\le D(\rho,\sigma)\le\sqrt{1-F(\rho,\sigma)^2},$$
where $F$ is root fidelity and $D(\rho,\sigma)=\tfrac12\|\rho-\sigma\|_1$.

## Facts & Assumptions

**Given:** Density operators $\rho,\sigma$ on a nonzero finite-dimensional $H$.

[L1] Some finite rank-one PVM has classical overlap $\sum_a\sqrt{p_aq_a}=F(\rho,\sigma)$, and every such measurement has total variation at most $D$ ([[lem-qc-fidelity-classical-measurement-minimum]], [[def-qc-trace-distance]], [[thm-qc-measurement-variation-at-most-trace-distance]]).

[L2] Taking the fixed auxiliary space $R=H$, there are purifications with overlap $F$ ([[thm-qc-fidelity-purification-characterization]]); the QC06 theorem proves this as part of its every-$R$ statement.

[L3] For unit vectors $x,y$, $D(|x\rangle\langle x|,|y\rangle\langle y|)=\sqrt{1-|\langle x,y\rangle|^2}$ ([[lem-qc-pure-state-trace-distance]]).

[L4] Partial trace is a channel ([[def-qc-partial-trace]], [[thm-qc-isometry-partial-trace-is-channel]]) and trace distance is contractive under channels ([[thm-qc-trace-distance-channel-contractivity]]).

## Proof


1.1 Let $(E_a)$ be the rank-one PVM from [L1], with probabilities $p_a=\operatorname{tr}(\rho E_a)$ and $q_a=\operatorname{tr}(\sigma E_a)$. For nonnegative $p,q$, $\sqrt{pq}\ge\min(p,q)$ because if $p\le q$ then $pq\ge p^2$, and the other case is symmetric. Since $\sum_a p_a=\sum_aq_a=1$, $$1-F=1-\sum_a\sqrt{p_aq_a}\le1-\sum_a\min(p_a,q_a)=\frac12\sum_a|p_a-q_a|\le D(\rho,\sigma).$$ The last inequality is [L1]. [given, L1, algebra]

2.1 Choose purifications $x,y$ attaining the overlap $|\langle x,y\rangle|=F(\rho,\sigma)$ by [L2]. By [L3], their pure-state trace distance is $\sqrt{1-F(\rho,\sigma)^2}$. Taking the partial trace over the auxiliary factor maps their rank-one projectors to $\rho$ and $\sigma$; contractivity [L4] therefore gives $D(\rho,\sigma)\le\sqrt{1-F(\rho,\sigma)^2}$. This proves the upper bound. [given, L2, L3, L4] ∎


---
id: thm-emg-field-normalization-equivalence
kind: theorem
title: "Exact geometric electrovac normalization"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-countable-choice
  - def-emg-geometric-scaling
  - def-gr-curvature-tensor-and-derived-tensors
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-geometric-scaling: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4, author-hosted full-text HTML, Maxwell action, Einstein equation and electromagnetic stress tensor"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, §§3.4–3.5, 4.3–4.5 and 7.2, curvature contractions, Maxwell equations and electromagnetic stress tensor"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $(M,g,N,o)$, $F$, $\kappa$, $\mu_0$, $\alpha$ and $\mathcal F=\alpha F$ be as in [[def-emg-geometric-scaling]], with curvature tensors defined by [[def-gr-curvature-tensor-and-derived-tensors]]. Let $\Lambda\in\mathbb R$ be a constant. Define the quadratic tensor

$$\mathcal Q_{ab}(g,F):=F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd},$$

where indices are raised with $g^{-1}$. Then the following equations for the same metric and two-form are equivalent:

$$G_{ab}(g)+\Lambda g_{ab}=\frac{\kappa}{\mu_0}\mathcal Q_{ab}(g,F),$$

$$G_{ab}(g)+\Lambda g_{ab}=2\mathcal Q_{ab}(g,\mathcal F),$$

$$\operatorname{Ric}_{ab}(g)-\Lambda g_{ab}=2\mathcal Q_{ab}(g,\mathcal F).$$

These are algebraic equivalences between tensor equations. No Maxwell equation, matter model, limiting procedure or physical solution is assumed.

## Facts & Assumptions

**Given:** The smooth Lorentzian geometry and positive parameters of [[def-emg-geometric-scaling]], a smooth real two-form $F$, and the curvature convention of [[def-gr-curvature-tensor-and-derived-tensors]]. The inherited geometric setup carries $\mathrm{AC}_\omega$ as in [A1]; this finite tensor calculation uses no further choice.

[F1] The geometric normalization has $\varepsilon_0=(\mu_0c^2)^{-1}$, $\kappa=8\pi G/c^4$, $\alpha^2=\kappa/(2\mu_0)$, and $\mathcal F=\alpha F$. ([[def-emg-geometric-scaling]])

[F2] The curvature convention defines $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12 Sg_{ab}$ and $S=g^{ab}\operatorname{Ric}_{ab}$ on the four-dimensional Lorentzian manifold. ([[def-gr-curvature-tensor-and-derived-tensors]])

[A1] The only inherited choice assumption is Countable Choice $\mathrm{AC}_\omega$, stated as choosing one element from each set in a countable family of nonempty sets. ([[def-countable-choice]])

## Proof

1.1 Contracting the displayed definition of $\mathcal Q$ gives $g^{ab}\mathcal Q_{ab}=F_{ac}F^{ac}-\tfrac14(g^{ab}g_{ab})F_{cd}F^{cd}=F_{cd}F^{cd}-F_{cd}F^{cd}=0$, because the metric dimension is four. Thus $\mathcal Q$ is trace-free. [given, F2, A1, algebra]

1.2 Each term of $\mathcal Q(g,F)$ contains exactly two factors linear in $F$, so for every scalar $s$, $\mathcal Q(g,sF)=s^2\mathcal Q(g,F)$. In particular, $\mathcal Q(g,\mathcal F)=\alpha^2\mathcal Q(g,F)$. [given, F1, algebra]

2.1 Since $2\alpha^2=\kappa/\mu_0$ by [F1], the right-hand side $(\kappa/\mu_0)\mathcal Q(g,F)$ equals $2\mathcal Q(g,\mathcal F)$; replacing it in the first equation proves equivalence of the first two equations in both directions. [F1, step 1.2, algebra]

2.2 By [F2], tracing the second equation gives $-S+4\Lambda=0$, since $g^{ab}G_{ab}=S-\tfrac12(4)S=-S$ and the right-hand side is trace-free by step 1.1. Hence $S=4\Lambda$. [F2, step 1.1, algebra]

3.1 Substituting $S=4\Lambda$ into $G_{ab}+\Lambda g_{ab}$ gives $\operatorname{Ric}_{ab}-2\Lambda g_{ab}+\Lambda g_{ab}=\operatorname{Ric}_{ab}-\Lambda g_{ab}$, proving the second equation implies the third. Conversely, tracing the third equation and using step 1.1 gives $S-4\Lambda=0$; substituting this into $G_{ab}$ recovers the second equation. [F2, step 1.1, step 2.2, algebra] ∎

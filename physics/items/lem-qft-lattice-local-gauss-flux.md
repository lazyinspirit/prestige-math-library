---
id: lem-qft-lattice-local-gauss-flux
kind: lemma
title: "Region charge equals boundary electric flux"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-qft-compact-lattice-gauge-data
  - lem-qft-lattice-gauss-projection
dependency_roles:
  def-qft-compact-lattice-gauge-data: mathematical-premise
  lem-qft-lattice-gauss-projection: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979)"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; relevant Hamiltonian and Gauss-law treatment in §VI.C, printed pp. 694–696. The Rome1 PDF is byte-identical to the previously retrieved full text."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020)"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text arXiv HTML rendition; §§2.1–2.4, printed pp. 3–8. The corresponding complete 32-page PDF was also retrieved and read."
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

Assume the data of [[def-qft-compact-lattice-gauge-data]] and let $R\subseteq V$. Define
$$\partial R=\{e\in E:\text{exactly one endpoint of }e\text{ lies in }R\},$$
with $\epsilon(e,R)=1$ when $s(e)\in R,t(e)\notin R$ and $\epsilon(e,R)=-1$ when $t(e)\in R,s(e)\notin R$. On the domain
$$\mathcal D_R=\mathcal H_{\rm phys}\cap\bigcap_{e\in\partial R}D(E_e),$$
the region number $N_R=\sum_{x\in R}(n_x-b_xI)$ obeys the exact identity
$$N_R\psi=\left(\sum_{e\in\partial R}\epsilon(e,R)E_e\right)\psi\qquad(\psi\in\mathcal D_R).$$
Thus for $R=V$, where $\partial R=\varnothing$, every physical vector has total occupation $\sum_x n_x=\sum_x b_x$. This finite-graph identity is exact and makes no continuum-limit claim.



## Facts & Assumptions

**Given:** A finite oriented graph, the joint diagonal Gauss operators, and their physical joint kernel.

[F1] [[lem-qft-lattice-gauss-projection]]: in the Fourier/occupation basis $G_x$ multiplies by $\gamma_x(\mathbf n,\mathbf m)=\sum_{s(e)=x}n_e-\sum_{t(e)=x}n_e-(m_x-b_x)$, and $\mathcal H_{\rm phys}=\bigcap_x\ker G_x$.

## Proof

**Given:** [F1] and $R\subseteq V$.

1.1 For every basis label $(\mathbf n,\mathbf m)$, summing $\gamma_x(\mathbf n,\mathbf m)$ over $x\in R$ cancels each link with both endpoints in $R$, leaves $+\!n_e$ on a link directed out of $R$ and $-\!n_e$ on a link directed into $R$, and subtracts $\sum_{x\in R}(m_x-b_x)$. Therefore $$\sum_{x\in R}\gamma_x(\mathbf n,\mathbf m)=\sum_{e\in\partial R}\epsilon(e,R)n_e-\sum_{x\in R}(m_x-b_x).$$ [F1, given, algebra]

2.1 The equality of basis multipliers in step 1.1 is an equality of diagonal operators on vectors for which both sides are defined. Every $\psi\in\mathcal D_R$ is in all $D(G_x)$ by physicality and in each boundary $D(E_e)$ by definition, while $N_R$ is bounded; applying the multiplier identity gives $\sum_{x\in R}G_x\psi=(\sum_{e\in\partial R}\epsilon(e,R)E_e-N_R)\psi$. [F1, step 1.1, algebra]

3.1 If $\psi\in\mathcal D_R\subseteq\mathcal H_{\rm phys}$, then $G_x\psi=0$ for every $x\in R$. Substitution in step 2.1 gives the claimed regional charge/flux identity. [step 2.1, given, algebra]

4.1 For $R=V$, every link has both endpoints in $R$, so $\partial R=\varnothing$ and the flux sum is zero. Step 3.1 then yields $N_V\psi=0$, which is exactly $\sum_x n_x\psi=(\sum_x b_x)\psi$ on all of $\mathcal H_{\rm phys}$. [step 3.1, algebra] ∎

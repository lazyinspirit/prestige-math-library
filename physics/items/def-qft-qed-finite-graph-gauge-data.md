---
id: def-qft-qed-finite-graph-gauge-data
kind: definition
title: Finite-graph U(1) phases for matrix kernels
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps: []
dependency_roles: {}
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Quantum Field Theory, §§6.1.1 and 6.3.1
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; local U(1) phase transformation and charged-fermion covariant derivative.
    - title: Mark Srednicki, Quantum Field Theory, §§67–68
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; QED current and Ward-identity conventions, printed pp. 400–404.
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

## Definition

Let $X$ and $E$ be finite sets, let $s,t:E\to X$ give the source and target of each directed edge, and assume $X\ne\varnothing$. Fix a positive integer $r$, a matrix $T_e\in M_r(\mathbb C)$ for each $e\in E$, and an external link phase $\zeta_e\in U(1):=\{z\in\mathbb C:|z|=1\}$. The finite spin space is $\mathcal H_X:=\bigoplus_{x\in X}\mathbb C^r$, of dimension $d=r|X|$.

For a real vertex phase $\theta=(\theta_x)_{x\in X}\in\mathbb R^X$, define
$$ \zeta_e^\theta:=e^{i(\theta_{s(e)}-\theta_{t(e)})}\zeta_e,\qquad D_\theta:=\operatorname{diag}_{x\in X}(e^{i\theta_x}I_r)\in GL_d(\mathbb C). $$
Define the link-hopping matrix $V(\zeta)\in M_d(\mathbb C)$ by its $x,y$ block indexed by $x,y\in X$
$$ V(\zeta)_{xy}:=\sum_{\substack{e\in E\\s(e)=x,\ t(e)=y}}T_e\zeta_e . $$
An empty sum is the zero $r\times r$ matrix. Additional fixed diagonal blocks belong to a separate base matrix. These data are finite-dimensional algebraic data; the phases are external parameters, not rotor multiplication operators on $L^2(\mathbb T^E)$.

The graph action uses the dimensionless phase angle $\theta$ as an independent external parameter. It does not choose an embedding of $G=(X,E,s,t)$ into spacetime or assert a continuum limit.

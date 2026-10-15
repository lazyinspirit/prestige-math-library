---
id: post-rpm-h-massless-shell-action
kind: postulate
title: "Separate massless shell action"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-countable-choice, def-rpm-h-background-and-model-quantities, def-rpm-h-cotangent-phase-space, def-rpm-h-regular-constraint-system]
dependency_roles:
  def-rpm-h-regular-constraint-system: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-rpm-h-background-and-model-quantities: formulation-prerequisite
  def-rpm-h-cotangent-phase-space: formulation-prerequisite
physical_scope: "Separate classical massless test-particle formulation with nonzero future-null momentum; no proper-time parameter, no mU identification and no empirical realization claim."
sources:
  references:
    - title: "W. F. Chagas-Filho, Free massless particles and extended space-time algebra, complete paper"
      url: "https://arxiv.org/pdf/hep-th/0401091"
      locator: "§§1–2, pp. 1–3, einbein action and massless constraint."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete lecture notes (arXiv:gr-qc/9712019v1)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Complete 238-page notes; Chapter 1, printed pp. 25–27, and Chapter 3, printed pp. 68–72; full relevant sections inspected."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

On a prescribed background $(M,g,T)$, choose an open parameter interval $I$ and a compact segment $[a,b]\subset I$ with $a<b$. In a spacetime chart containing the curve and sufficiently small variations, let $x:I\to M$ be smooth near $[a,b]$, let $p(\lambda)\in T^*_{x(\lambda)}M$ be a smooth covector field along $x$, and let $e$ be smooth and positive near $[a,b]$. In this chart, write $g_{ab}=g(\partial_a,\partial_b)$ for $a,b\in\{0,1,2,3\}$, let $(g^{ab})$ be the inverse matrix, and define $p^\sharp=\sum_{a,b=0}^3g^{ab}p_b\partial_a$; equivalently, $g(p^\sharp,w)=p(w)$ for every tangent vector $w$. Adopt the distinct massless classical particle action on this segment

$$S_{0,[a,b]}[x,p,e]=\int_a^b\left[p_a x'^a-eC_0(x,p)\right]d\lambda,\qquad C_0=\tfrac12g^{ab}p_ap_b.$$

Admissible variations are smooth one-parameter families of chart fields $(x_\epsilon,p_\epsilon,e_\epsilon)$ on a common neighborhood of $[a,b]$, with $x_\epsilon(a)=x(a)$ and $x_\epsilon(b)=x(b)$; the $p_\epsilon$ and $e_\epsilon$ variations are independent and have no endpoint constraints, while $e_\epsilon>0$ for sufficiently small $|\epsilon|$. Impose the physical branch only on stationary solutions after these variations: $p\ne0$ and $p^\sharp$ is future null. With all spacetime coordinates measured in metres and dimensionless $\lambda$, $p_a$ has units kg m/s, $C_0$ has units kg²m²/s² and $e$ has units s/kg, making the action J s. Other parameter units scale $e$ accordingly. This is a separate adopted model: null curves have no proper-time parameter, the model does not arise by setting $m=0$ in $P=mU$, and its positive momentum scale is additional initial data. On the nonzero branch, the vertical differential is $d_pC_0=p^\sharp\ne0$: nondegeneracy of $g^{-1}$ and $p\ne0$ give $p^\sharp\ne0$. Hence the shell is a regular primary constraint in the sense of [[def-rpm-h-regular-constraint-system]]. This postulate is not an empirical observation or a deduction from the massive model.

The cotangent phase-space carrier convention assumes countable choice ACω only; full choice is not assumed.

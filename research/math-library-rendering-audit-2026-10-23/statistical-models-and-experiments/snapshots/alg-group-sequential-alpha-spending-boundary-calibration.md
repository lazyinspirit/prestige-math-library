---
id: alg-group-sequential-alpha-spending-boundary-calibration
kind: algorithm
title: Recursive group-sequential boundary calibration
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-group-sequential-alpha-spending-design
  - def-axiom-of-choice
justified_by:
  - thm-group-sequential-alpha-spending-calibration
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "David L. DeMets and K. K. Gordon Lan, Interim Analysis: The Alpha Spending Function Approach, Statistics in Medicine 13 (1994), PDF pp. 2–3, 6–7"
      url: "https://eclass.uoa.gr/modules/document/file.php/MATH301/PracticalSession3/LanDeMets.pdf"
    - title: "Michael J. Grayling, James M. S. Wason, and Adrian P. Mander, Group Sequential Clinical Trial Designs for Normally Distributed Outcome Variables, The Stata Journal 18(2) (2018), PDF pp. 2–4"
      url: "https://arxiv.org/pdf/1710.03127"
    - title: "Giorgos Minas, Multivariate Global Testing and Adaptive Designs, PhD thesis, Chapter 5 §§5.3–5.3.1, printed pp. 72–73"
      url: "https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf"
---

## Definition

**Inputs:** The Axiom of Choice ([[def-axiom-of-choice]]) and a canonical design from
[[def-group-sequential-alpha-spending-design]] and a mode, either one-sided
upper-boundary or symmetric two-sided.

**Output:** The look boundaries for the selected mode.

Set $t_0=0$, $R_0=\varnothing$, and process $k=1,\ldots,K$ in order. Let
$R_{k-1}$ be the union of the crossing events already defined at the earlier
looks.

- If $A(t_k)=A(t_{k-1})$, set the boundary at look $k$ to $+\infty$. Its
  crossing event is empty, so $R_k=R_{k-1}$.
- If $A(t_k)>A(t_{k-1})$ and the mode is one-sided, choose the real number
  $b_k$ satisfying
  $$P_0(R_{k-1}\cup\{Z_k\ge b_k\})=A(t_k),$$
  and set $R_k=R_{k-1}\cup\{Z_k\ge b_k\}$.
- If $A(t_k)>A(t_{k-1})$ and the mode is symmetric two-sided, choose
  $c_k\ge0$ satisfying
  $$P_0(R_{k-1}\cup\{|Z_k|\ge c_k\})=A(t_k),$$
  and set $R_k=R_{k-1}\cup\{|Z_k|\ge c_k\}$.

The root-existence theorem
[[thm-group-sequential-alpha-spending-calibration]] proves that every
positive spending increment has a unique finite solution; the algorithm
therefore makes no arbitrary boundary selection. The procedure specifies
exact boundaries under the supplied joint null law. It does not prescribe a
numerical integration package or tolerance.

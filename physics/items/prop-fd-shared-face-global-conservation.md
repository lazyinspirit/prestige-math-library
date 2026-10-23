---
id: prop-fd-shared-face-global-conservation
kind: proposition
title: "Shared-face flux telescoping conservation"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-compressible-numerical-contract
dependency_roles:
  def-fd-compressible-numerical-contract: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "Complete 143-page course notes; §§3.4.1 and 3.4.3, PDF pp. 94–98: shared interface fluxes and cancellation of interior fluxes."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336 Lecture 19, Finite Volume Methods"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf"
      locator: "Complete six-page lecture note; pp. 1–2: cell-average states, conservative flux-difference update, and boundary flux accounting."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement

Fix $\gamma>1$, an integer $N\ge2$, a cell width $\Delta x>0$, a time step
$\Delta t\ge0$, and periodic cell states $U_i=(\rho_i,m_i,E_i)\in\mathcal G_\gamma$
for $i\in\mathbb Z/N\mathbb Z$. Assign one vector flux
$\widehat F_{i+1/2}\in\mathbb R^3$ to each periodic face and use that same
value in both neighboring cell updates
$$U_i^+=U_i-\lambda\left(\widehat F_{i+1/2}-\widehat F_{i-1/2}\right),\qquad \lambda=\frac{\Delta t}{\Delta x}.$$
Define the total conserved vector before and after the step by
$$M=\Delta x\sum_{i\in\mathbb Z/N\mathbb Z}U_i,\qquad M^+=\Delta x\sum_{i\in\mathbb Z/N\mathbb Z}U_i^+.$$
Then $M^+=M$. Thus the total density, momentum, and total energy components
are unchanged by this periodic shared-face update. This algebraic conservation
claim alone does not assert admissibility, entropy stability, or convergence.

## Statement references

[[def-fd-compressible-numerical-contract]] — fixes the Euler state, the shared-face update, and the meaning of one vector flux per face.

[De Sterck and Ullrich, §§3.4.1 and 3.4.3](https://climate.ucdavis.edu/AM452.pdf) — full course notes treatment of finite-volume updates and interior-flux cancellation.

[Seibold, MIT OCW Lecture 19](https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf) — full lecture-note treatment of cell averages and conservative face fluxes.

## Facts & Assumptions

**Given:** $\gamma>1$, $N\ge2$, $\Delta x>0$, $\Delta t\ge0$, periodic states
$U_i\in\mathcal G_\gamma$, one shared vector flux per face, and the stated update.

[A1] There is exactly one vector $\widehat F_{i+1/2}$ at each periodic face, and the update uses it with opposite signs in the two adjacent cells.

[F1] [[def-fd-compressible-numerical-contract]]: the one-step update is $U_i^+=U_i-\lambda(\widehat F_{i+1/2}-\widehat F_{i-1/2})$ with periodic indexing.

## Proof

1.1 Sum the stated update over the finite periodic index set and multiply by $\Delta x$. By [F1], the difference of totals is
$$M^+-M=-\Delta x\lambda\sum_{i\in\mathbb Z/N\mathbb Z}\left(\widehat F_{i+1/2}-\widehat F_{i-1/2}\right).$$
[A1] ensures that the same face vector is used in each occurrence. [given, A1, F1, algebra]

2.1 Periodic reindexing sends the list of faces $i-1/2$ bijectively to the list $i+1/2$, so
$\sum_i\widehat F_{i-1/2}=\sum_i\widehat F_{i+1/2}$ componentwise. The sum in step 1.1 is therefore zero and $M^+=M$. [step 1.1, A1, algebra] ∎

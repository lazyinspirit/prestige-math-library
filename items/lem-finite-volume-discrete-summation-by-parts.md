---
id: lem-finite-volume-discrete-summation-by-parts
kind: lemma
title: Discrete weak identity for a conservative finite-volume update
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps:
  [
    def-conservative-finite-volume-scheme,
    def-finite-volume-space-time-reconstruction
  ]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter
        3, complete chapter, PDF pp. 81–106"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "§3.4.1 and §3.4.3, pp. 94–99: cell-average updates, shared interface
        fluxes and cancellation of interior fluxes."
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Lecture 19: Finite Volume
        Methods, complete six-page note"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differen\
        tial-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S0\
        9_lec19.pdf"
      locator: "p. 1: finite-volume cell averages and the conservative flux-difference
        update."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $(U_j^{m,n})$ be a scheme from
[[def-conservative-finite-volume-scheme]], with reconstruction
$(\mathcal U_m,\mathcal Q_m)$ as in
[[def-finite-volume-space-time-reconstruction]]. For a test function
$\varphi\in C_c^\infty(\mathbb R\times(-\infty,T))$, define its space-time
cell average
$$ \Phi_j^{m,n}=\frac1{h_m\tau_m}\int_{t_n^m}^{t_{n+1}^m}\int_{I_j^m}\varphi(x,t)\,dx\,dt. $$ If $N\ge1$ is such that $\varphi$ vanishes for $t\ge t_{N-1}^m$, then $$ \sum_{j\in\mathbb Z}h_m U_j^{m,0}\Phi_j^{m,0} +\sum_{n=1}^{N-1}\sum_{j\in\mathbb Z}h_m U_j^{m,n} (\Phi_j^{m,n}-\Phi_j^{m,n-1}) +\sum_{n=0}^{N-1}\sum_{j\in\mathbb Z}\tau_m Q_{j+1/2}^{m,n} (\Phi_{j+1}^{m,n}-\Phi_j^{m,n})=0. $$
All sums are finite because $\varphi$ is compactly supported in space and time.

## Facts & Assumptions

**Given:** The grid, fluxes and update in
[[def-conservative-finite-volume-scheme]], the reconstruction convention in
[[def-finite-volume-space-time-reconstruction]], and the test and terminal index
in the Statement.

[F1] The cell update is
$h_m(U_j^{m,n+1}-U_j^{m,n})+\tau_m(Q_{j+1/2}^{m,n}-Q_{j-1/2}^{m,n})=0$.
([[def-conservative-finite-volume-scheme]])

[F2] The test averages $\Phi_j^{m,n}$ are constant on each cell-time slab, and
$\mathcal Q_m=Q_{j+1/2}^{m,n}$ on $I_j^m\times J_n^m$.
([[def-finite-volume-space-time-reconstruction]])

## Proof
1.1 Multiply [F1] by $\Phi_j^{m,n}$ and sum over $j\in\mathbb Z$ and $n=0,\ldots,N-1$. Only finitely many terms are nonzero, so the summed update is an exact finite sum equal to zero. [F1, F2, given]

2.1 For each fixed $j$, telescoping gives $$ \sum_{n=0}^{N-1}(U_j^{m,n+1}-U_j^{m,n})\Phi_j^{m,n} =-U_j^{m,0}\Phi_j^{m,0} +\sum_{n=1}^{N-1}U_j^{m,n}(\Phi_j^{m,n-1}-\Phi_j^{m,n}), $$ since $\Phi_j^{m,N-1}=0$ by the terminal support condition. [step 1.1, algebra]

3.1 Reindex the spatial flux sum: $$ \sum_j(Q_{j+1/2}^{m,n}-Q_{j-1/2}^{m,n})\Phi_j^{m,n} =\sum_jQ_{j+1/2}^{m,n}(\Phi_j^{m,n}-\Phi_{j+1}^{m,n}). $$ Substitute this and step 2.1 into step 1.1, then multiply the zero identity by $-1$ to obtain exactly the displayed formula. [step 1.1, step 2.1, algebra] ∎
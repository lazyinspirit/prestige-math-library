---
id: def-volume-product-integration-scheme
kind: definition
title: Cell-volume product integration for the scattering kernel
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-volume-integral-scattering-model, lem-dyadic-cell-average-projections-converge-in-l2, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, lem-volume-integral-operator-well-defined-and-bounded, lem-volume-far-field-map-is-bounded]
justified_by: []
proof_strategy: not-applicable
axiom_use: "The rule is definitional. Its matrix coefficients are finite by the cited kernel-integrability supplier."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 79–82, volume integral equation and compact-support convention; the L2 cell rule is supplied locally."
    - title: "Andreas Neubauer and Ronny Ramlau, Lecture Notes: Integral Equations and Boundary Value Problems, §3.3"
      url: "https://www.jyu.fi/en/file-download/download/public/28300"
      locator: "Printed pp. 60–65, Nyström finite-rank equation and reconstruction framework; the local scheme integrates 3D volume cell pairs exactly."
verification:
  precheck: n/a
---

## Definition

Let $D,q,k$ be as in [[def-volume-integral-scattering-model]], $0<|D|<\infty$, let $P_N$ be the dyadic cell-average projection of [[lem-dyadic-cell-average-projections-converge-in-l2]], and put $K_N:=P_NK_k$ and $f_N:=P_Nf$. This is a finite-rank volume product-integration rule on $L^2(D)$; the projection and kernel convention are fixed by those definitions.

For each positive-measure cell $E_{N,j}$ set $\phi_{N,j}:=|E_{N,j}|^{-1/2}\mathbf1_{E_{N,j}}$. The exact product-cell weights and right-hand side are
$$A^{(N)}_{ij}:=\langle K_k\phi_{N,j},\phi_{N,i}\rangle=\frac{1}{\sqrt{|E_{N,i}||E_{N,j}|}}\int_{E_{N,i}}\int_{E_{N,j}}G_k(x-y)q(y)\,dy\,dx,\qquad b^{(N)}_i:=\frac{1}{\sqrt{|E_{N,i}|}}\int_{E_{N,i}}f(x)\,dx.$$
The finite system is $(I-A^{(N)})c=b^{(N)}$, and its reconstruction is $u_N=\sum_jc_j\phi_{N,j}$. Equivalently, it solves $(I-K_N)u_N=f_N$ in $V_N$. Its far-field output is the exact cell integral
$$\mathcal F_N(c)(\theta):=\mathcal F_k[u_N](\theta)=\sum_j\frac{c_j}{4\pi\sqrt{|E_{N,j}|}}\int_{E_{N,j}}e^{-ik\theta\cdot y}q(y)\,dy.$$
A singular finite matrix has status `singular`; the definition makes no unconditional invertibility claim. The double integrals are taken over whole cell pairs, including diagonal pairs; no point value of $G_k$ at its singular diagonal is sampled. Finiteness is established by [[lem-volume-integral-operator-well-defined-and-bounded]] and [[lem-volume-far-field-map-is-bounded]].

The rule uses exact cell weights as a mathematical discretization. This definition makes no claim about floating-point evaluation or approximate cell weights.

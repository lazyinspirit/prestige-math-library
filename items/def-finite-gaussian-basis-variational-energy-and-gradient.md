---
id: def-finite-gaussian-basis-variational-energy-and-gradient
kind: definition
title: Finite tensor contractions and their variational energy and gradient
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: []
axiom_use: None. The expressions are finite real sums.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Trygve Helgaker, Molecular Integral Evaluation, 10th Sostrup Summer School lecture notes (2008)"
      url: "https://trygvehelgaker.no/Presentations/Sostrup_Integrals_2008.pdf"
      locator: "Complete 41-page PDF; finite one- and two-electron integral tensors and contractions on pp. 2 and 27–28."
    - title: "L. E. McMurchie and E. R. Davidson, One and Two Electron Integrals over Cartesian Gaussian Functions, UCRL-13791 (1976)"
      url: "https://digital.library.unt.edu/ark:/67531/metadc1057442/m2/1/high_res_d/5184486.pdf"
      locator: "Complete 23-page report; §§III–V, finite integral arrays and contraction loops on pp. 10–20."
---

## Definition

Let $n,r\ge1$ be integers, $C\in\mathbb R^{n\times r}$, $D\in\mathbb R^{r\times r}$, $H\in\mathbb R^{n\times n}$, and $G\in\mathbb R^{n\times n\times n\times n}$. Define their transformed tensors by
$$H'_{pq}=\sum_{a,b=1}^n C_{ap}H_{ab}C_{bq},\qquad G'_{pqrs}=\sum_{a,b,c,d=1}^n C_{ap}C_{bq}C_{cr}C_{ds}G_{abcd},$$
for $1\le p,q,r,s\le r$. Define the finite **variational energy functional**
$$E(C;D,H,G)=\sum_{p,q=1}^r D_{pq}H'_{pq}+\frac12\sum_{p,q,r,s=1}^r D_{pq}D_{rs}G'_{pqrs}.$$
Its gradient $\nabla_C E$ is the ordinary Euclidean gradient with respect to the $nr$ real entries of $C$. The basis dimension is $n$, the contracted dimension is $r$, and for any finite matrix or tensor $A$, $\|A\|_F=(\sum |A_{i_1\ldots i_k}|^2)^{1/2}$, with the sum over all its entries. This is a finite algebraic functional; it assumes no Hartree–Fock, self-consistency, or minimizing-state postulate.

For perturbed integral tensors $\widetilde H,\widetilde G$, write $\widetilde E$ for the same functional with those tensors and the same fixed $C,D$. The word “variational” here names the finite coefficient functional only; no claim about a stationary point or physical energy is included.

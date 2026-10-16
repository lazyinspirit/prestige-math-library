---
id: def-qa-26-hhl-reciprocal-filter
kind: definition
title: "Odd-well and even-ill reciprocal filter"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Definition

For $\kappa\ge1$ and real estimate $z$, put $u=|z|$ and define the odd well amplitude $f_\kappa$ and even ill amplitude $g_\kappa$ by
$$f_\kappa(z)=\begin{cases}\operatorname{sgn}(z)/(2\kappa u),&u\ge1/\kappa,\\[2pt]\tfrac12\sin(\pi\kappa(u-1/(2\kappa))),&1/(2\kappa)\le u<1/\kappa,\\[2pt]0,&u<1/(2\kappa),\end{cases}\qquad g_\kappa(z)=\begin{cases}0,&u\ge1/\kappa,\\[2pt]\tfrac12\cos(\pi\kappa(u-1/(2\kappa))),&1/(2\kappa)\le u<1/\kappa,\\[2pt]1/2,&u<1/(2\kappa),\end{cases}$$
where $\operatorname{sgn}(z)=1$ for $z>0$, $-1$ for $z<0$, and $0$ for $z=0$. The three flag amplitudes are $(h(z),f_\kappa(z),g_\kappa(z))$, where $h(z)=\sqrt{1-f_\kappa(z)^2-g_\kappa(z)^2}$. Labels are nothing, well, ill, respectively. This definition applies to every real decoded grid point, including points outside the supported spectrum.

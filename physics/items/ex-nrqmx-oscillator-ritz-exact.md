---
id: ex-nrqmx-oscillator-ritz-exact
kind: example
domain: mathematics
library: mathematics
title: Hermite Ritz exactness
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 3
deps:
  - thm-nrqmx-ritz-upper-bounds
  - thm-nrqm-oscillator-oscillator-scaling-and-exact-realization
  - thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - thm-unbounded-borel-functional-calculus
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  thm-nrqmx-ritz-upper-bounds: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: James Binney and David Skinner, The Physics of Quantum Mechanics,
        Cappella Archive (2008; revised printings 2009–2013)
      url: https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf
      locator: "Chapter 3 §3.1, printed pp.37–40 (PDF pp.44–47): harmonic-oscillator
        ladder spectrum and normalized ground state. The exact scaled
        coefficient-domain realization, completeness and Ritz computation are
        supplied by local mathematics."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Assume Choice and Countable Choice. Fix $m,\omega,\hbar>0$ and let $H_{\mathrm{osc}}$ be the self-adjoint coefficient-domain realization on $L^2(\mathbb R,dx)$ of $-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}+\frac{m\omega^2}{2}x^2$ with normalized Hermite eigenfunctions $(\psi_j)_{j\ge0}$, where $H_{\mathrm{osc}}\psi_j=E_j\psi_j$ and $E_j=\hbar\omega(j+\frac12)$. For $n\ge1$, let $V_n=\operatorname{span}\{\psi_0,\ldots,\psi_{n-1}\}\subseteq Q(H_{\mathrm{osc}})$. The $n$ Ritz values of the associated form on $V_n$ are exactly $E_0,\ldots,E_{n-1}$ in increasing order, and each continuum residual $(H_{\mathrm{osc}}-E_jI)\psi_j$ is zero.

## Example references

[[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]

[[thm-nrqmx-ritz-upper-bounds]]

[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]

[[thm-unbounded-borel-functional-calculus]]

## Facts & Assumptions

**Given:** Choice and Countable Choice; $m,\omega,\hbar>0$; the oscillator $H_{\mathrm{osc}}$; its normalized Hermite eigenfunctions $\psi_j$; and $V_n$ as in the Example.

[A1] Choice and Countable Choice are the assumptions of the form min–max result and the exact oscillator realization used here ([[def-axiom-of-choice]], [[def-countable-choice]]).

[F1] The oscillator realization is self-adjoint, has the stated coefficient domain, satisfies $H_{\mathrm{osc}}\ge\frac{\hbar\omega}{2}I>0$, its Hermite functions form a complete orthonormal family, and $H_{\mathrm{osc}}\psi_j=\hbar\omega(j+\tfrac12)\psi_j$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]).

[F2] In the spectral-form definition of [[thm-nrqmx-ritz-upper-bounds]], take $A=H_{\mathrm{osc}}$ and $c=0$. Since $H_{\mathrm{osc}}\ge0$, this gives $Q(H_{\mathrm{osc}})=D(S)$ and $q(f,g)=\langle Sf,Sg\rangle$ for $S=H_{\mathrm{osc}}^{1/2}$ defined by the Borel functional calculus.

[F3] The spectral/Borel calculus gives $D(H_{\mathrm{osc}})=\{f:\int x^2\,d\mu_f(x)<\infty\}$ and $Q(H_{\mathrm{osc}})=D(H_{\mathrm{osc}}^{1/2})=\{f:\int x\,d\mu_f(x)<\infty\}$ because $H_{\mathrm{osc}}\ge0$; $x\le1+x^2$ on $[0,\infty)$ therefore gives $D(H_{\mathrm{osc}})\subseteq Q(H_{\mathrm{osc}})$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]]).

[F4] The Ritz values on a finite-dimensional conforming form subspace are the ordered eigenvalues of its exact Gram/form generalized eigenproblem ([[thm-nrqmx-ritz-upper-bounds]]).

## Proof

1.1 By [F1], each $\psi_j\in D(H_{\mathrm{osc}})$, the family is orthonormal, and $H_{\mathrm{osc}}\psi_j=E_j\psi_j$. By [F3], each $\psi_j$ lies in $Q(H_{\mathrm{osc}})=D(S)$. The product rule gives $S^2=H_{\mathrm{osc}}$ with $D(S^2)=D(H_{\mathrm{osc}})$; since $S$ is self-adjoint, for $i,j<n$ we have $q(\psi_j,\psi_i)=\langle S\psi_j,S\psi_i\rangle=\langle S^2\psi_j,\psi_i\rangle=\langle H_{\mathrm{osc}}\psi_j,\psi_i\rangle=E_j\delta_{ij}$. Thus the Gram matrix on $V_n$ is the identity and its form matrix is diagonal with entries $E_0,\ldots,E_{n-1}$. [A1, F1, F2, F3, algebra]

2.1 Since $\hbar\omega>0$, $E_0<\cdots<E_{n-1}$. The generalized matrix eigenproblem therefore returns exactly these $n$ ordered Ritz values by [F4], and the oscillator eigenvalue equations in [F1] give $(H_{\mathrm{osc}}-E_jI)\psi_j=0$ for each $j<n$. [F1, F4, step 1.1, algebra]

3.1 Hence this conforming Hermite trial space attains the first $n$ oscillator eigenvalues exactly and every corresponding continuum residual vanishes. [step 2.1] ∎

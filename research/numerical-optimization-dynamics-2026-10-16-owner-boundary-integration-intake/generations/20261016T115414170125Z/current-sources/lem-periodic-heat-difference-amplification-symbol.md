---
id: lem-periodic-heat-difference-amplification-symbol
kind: lemma
title: Periodic heat-stencil eigenvalues and θ amplification factor
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-parabolic-theta-finite-difference-scheme
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations: A brief introduction to the theory of finite difference approximation of PDEs"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§5.2.1–§5.4, PDF pp. 59–64: finite-difference Fourier modes, explicit heat amplification, and the θ-scheme factor."
    - title: "Benjamin Seibold, MIT 18.336, Lecture 14: Von Neumann Stability Analysis (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c7c12accea163007923288875bb42604_MIT18_336S09_lec14.pdf"
      locator: "Complete PDF pp. 1–3: one- and two-dimensional heat symbols and the Crank–Nicolson factor."
    - title: "Martin Krosche, Hermann G. Matthies, and Oliver Kayser-Herold, Lecture Notes: Introduction to PDEs and Numerical Methods, Technical University Braunschweig, Revision 1.1 (2008), hosted by University of Jyväskylä"
      url: "https://users.jyu.fi/~rainom/pde/material/pde1en.pdf"
      locator: "Chapter 1 §§1.4.4–1.4.6, PDF pp. 21–29: θ time discretization, finite-grid matrix form, von Neumann stability, highest resolvable frequency, and separate stability/positivity conditions. The Fourier section assumes an infinite grid; no boundary claim is imported."
---

## Statement

On the finite periodic rectangular $d$-grid of [[def-parabolic-theta-finite-difference-scheme]], let $\ell_j\in\{0,\ldots,N_j-1\}$ and
$$
\phi_\ell(i)=\exp\left(2\pi\mathrm i\sum_{j=1}^d\frac{\ell_ji_j}{N_j}\right).
$$
Then $\phi_\ell$ is an eigenvector of $A_h^{\rm per}$ with eigenvalue
$$
\lambda_\ell=4\sum_{j=1}^d\frac{\kappa_j}{h_j^2}\sin^2\left(\frac{\pi\ell_j}{N_j}\right)\ge0.
$$
For zero source, the $\theta$ update multiplies this mode at each step by
$$
g_\theta(\ell)=\frac{1-(1-\theta)\Delta t\lambda_\ell}{1+\theta\Delta t\lambda_\ell}.
$$
The displayed modes form a basis of the complexified grid space, so this factor describes the full periodic update.

## Facts & Assumptions

**Given:** A finite periodic rectangular grid with $d\ge1$, $N_j\ge2$, $h_j=L_j/N_j$, $\kappa_j>0$, and $\theta\in[0,1]$ as defined in [[def-parabolic-theta-finite-difference-scheme]].

[F1] [[def-parabolic-theta-finite-difference-scheme]] defines $A_h^{\rm per}$ by periodic wraparound and the update $\Delta t^{-1}(U^{n+1}-U^n)+A_h^{\rm per}((1-\theta)U^n+\theta U^{n+1})=0$ when the source is zero.

## Proof

1.1 For each coordinate $j$, the mode satisfies $\phi_\ell(i+e_j)=e^{2\pi\mathrm i\ell_j/N_j}\phi_\ell(i)$ and $\phi_\ell(i-e_j)=e^{-2\pi\mathrm i\ell_j/N_j}\phi_\ell(i)$. Substitution into the $j$th stencil term gives $\kappa_jh_j^{-2}(2-e^{2\pi\mathrm i\ell_j/N_j}-e^{-2\pi\mathrm i\ell_j/N_j})\phi_\ell(i)=4\kappa_jh_j^{-2}\sin^2(\pi\ell_j/N_j)\phi_\ell(i)$. Summing over $j$ yields the asserted eigenvalue. [F1, algebra]

1.2 For one coordinate, the finite geometric sum $\sum_{r=0}^{N_j-1}e^{2\pi\mathrm i qr/N_j}$ equals $N_j$ if $q$ is divisible by $N_j$ and equals $0$ otherwise. Therefore distinct modes are orthogonal in the complexified grid inner product. There are exactly $\prod_jN_j$ such nonzero modes, equal to the dimension of the grid space, so they form a basis. [F1, algebra]

2.1 Substituting $U^n=a_n\phi_\ell$ into the zero-source update gives $(a_{n+1}-a_n)+\Delta t\lambda_\ell((1-\theta)a_n+\theta a_{n+1})=0$. Since $1+\theta\Delta t\lambda_\ell\ge1$, solving this scalar equation gives $a_{n+1}=g_\theta(\ell)a_n$. [F1, step 1.1, algebra]

3.1 By step 1.2 every grid vector is a finite linear combination of these modes, and the update acts on each component by the factor from step 2.1. Thus the stated factors describe the full update. [step 2.1, step 1.2, algebra] ∎

## Remarks

The calculation is for periodic grids. It does not establish stability of a finite Dirichlet matrix or of a variable-coefficient stencil.

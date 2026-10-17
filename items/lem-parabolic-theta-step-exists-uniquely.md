---
id: lem-parabolic-theta-step-exists-uniquely
kind: lemma
title: Unique solvability of an implicit θ heat step
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-parabolic-theta-finite-difference-scheme
  - lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint
justified_by: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations: A brief introduction to the theory of finite difference approximation of PDEs"
      url: "https://people.maths.ox.ac.uk/suli/nspdes.pdf"
      locator: "§5.5.1, PDF pp. 65–66: the θ-scheme Dirichlet system and its implicit matrix."
    - title: "Benjamin Seibold, MIT 18.336, Lecture 14: Von Neumann Stability Analysis (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c7c12accea163007923288875bb42604_MIT18_336S09_lec14.pdf"
      locator: "Complete PDF pp. 1–3: implicit θ amplification denominator for the periodic heat operator."
    - title: "Martin Krosche, Hermann G. Matthies, and Oliver Kayser-Herold, Lecture Notes: Introduction to PDEs and Numerical Methods, Technical University Braunschweig, Revision 1.1 (2008), hosted by University of Jyväskylä"
      url: "https://users.jyu.fi/~rainom/pde/material/pde1en.pdf"
      locator: "Chapter 1 §§1.4.4–1.4.6, PDF pp. 21–29: θ time discretization, finite-grid matrix form, von Neumann stability, highest resolvable frequency, and separate stability/positivity conditions. The Fourier section assumes an infinite grid; no boundary claim is imported."
---

## Statement

For every finite two-dimensional rectangular Dirichlet grid, $\Delta t>0$, $\theta\in[0,1]$, and interior right-hand side (including the known source and boundary contributions), the θ step of [[def-parabolic-theta-finite-difference-scheme]] has a unique interior solution. Its implicit matrix is $I+\theta\Delta t A_h$, where $A_h$ is the zero-boundary operator.

## Facts & Assumptions

**Given:** A finite rectangular interior grid, $\Delta t>0$, $\theta\in[0,1]$, and the θ update of [[def-parabolic-theta-finite-difference-scheme]].

[F1] [[def-parabolic-theta-finite-difference-scheme]] writes the Dirichlet step with unknown terms $(I+\theta\Delta t A_h)U^{n+1}$; all source and prescribed boundary rows are known right-hand-side terms.

[F2] [[lem-parabolic-dirichlet-laplacian-is-positive-selfadjoint]]: $\langle A_hv,v\rangle_h\ge0$ for every zero-boundary interior vector $v$.

## Proof

1.1 If $\theta=0$, the implicit matrix in [F1] is the identity, so for every right-hand side there is exactly one solution, namely that right-hand side. [F1, given]

1.2 Suppose $\theta>0$ and $(I+\theta\Delta t A_h)v=0$. Taking the weighted inner product with $v$ gives $\|v\|_h^2+\theta\Delta t\langle A_hv,v\rangle_h=0$. By [F2] the second term is nonnegative, so $\|v\|_h^2=0$ and $v=0$. [F1, F2, given, algebra]

2.1 The interior vector space is finite dimensional and the matrix is square. Its zero kernel from step 1.2 means its rank equals the dimension by rank-nullity; hence its range is the whole space. Thus every right-hand side has exactly one solution. [step 1.2, algebra] ∎

## Remarks

This is finite-dimensional solvability only; it makes no condition-number or mesh-uniform iterative-solver claim. No choice axiom is used.

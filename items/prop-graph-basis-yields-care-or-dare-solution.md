---
id: prop-graph-basis-yields-care-or-dare-solution
kind: proposition
title: "An invertible graph block converts an exact stable Schur or QZ basis
  into a Riccati solution"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - prop-care-hamiltonian-stable-graph
  - prop-dare-symplectic-pencil-graph-and-stable-spectrum
  - def-standard-continuous-and-discrete-riccati-equations
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Federico Poloni, Lecture notes on Riccati-type matrix equations"
      url: "https://pages.di.unipi.it/fpoloni/videolezioni/phd25/notes.pdf"
      locator: "§§5.1–5.2, DARE graph and symplectic matrix"
    - title: "A.A. Stoorvogel and A. Saberi, The discrete algebraic Riccati equation
        and linear matrix inequality, Memorandum COSOR 94-16"
      url: "https://pure.tue.nl/ws/portalfiles/portal/2465804/427410.pdf"
      locator: "§§2.5–2.7, invariant-subspace/pencil identity and infinite eigenvalues"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For the CARE case, suppose the exact Hamiltonian stable invariant subspace has a basis $U=\begin{bmatrix}U_1\\U_2\end{bmatrix}$ with $U_1$ invertible, and set $X=U_2U_1^{-1}$. If $X=X^*$, then $X$ solves the CARE and the restriction matrix on the graph is $A-GX$.

For the DARE case, suppose an exact stable deflating basis for the pencil $(N,M)$ is $U=\begin{bmatrix}U_1\\U_2\end{bmatrix}$ with $U_1$ invertible, and set $X=U_2U_1^{-1}$. If $X=X^*$ and $R+B^*XB\succ0$, then $X$ solves the DARE and the restriction matrix is $A_c=(I+GX)^{-1}A=A-B(R+B^*XB)^{-1}B^*XA$.

## Facts & Assumptions

**Given:** The CARE or DARE definitions and exact invariant or deflating subspace equations.

[F1] [[prop-care-hamiltonian-stable-graph]]: the CARE graph equation is $H[I;X]=[I;X](A-GX)$ and its lower block is equivalent to the CARE.

[F2] [[prop-dare-symplectic-pencil-graph-and-stable-spectrum]]: the DARE graph equation is $N[I;X]=M[I;X]A_c$ for $A_c=(I+GX)^{-1}A$.

[F3] [[def-standard-continuous-and-discrete-riccati-equations]]: the DARE is equivalently $X=Q+A^*X(I+GX)^{-1}A$ whenever $R+B^*XB$ is invertible.

## Proof

1.1 In either case, $U_2=XU_1$, so $U=[I;X]U_1$. If $H U=U T$ in the CARE case, right multiplication by $U_1^{-1}$ gives $H[I;X]=[I;X](U_1TU_1^{-1})$. The top block fixes the restriction matrix as $A-GX$; the bottom block reads $-Q-A^*X=X(A-GX)$, which is exactly $A^*X+XA-XGX+Q=0$. [F1, given, algebra]

2.1 If $NU=MU T$ in the DARE case, the same normalization gives $N[I;X]=M[I;X](U_1TU_1^{-1})$. The top block is $A=(I+GX)(U_1TU_1^{-1})$, so invertibility of $I+GX$ gives restriction matrix $(I+GX)^{-1}A$. The lower block is $X-Q=A^*X(I+GX)^{-1}A$, which is the DARE by [F3]. No claim survives an unverified leading-block inverse or a subsequent nonzero symmetry residual. [F2, F3, algebra] ∎

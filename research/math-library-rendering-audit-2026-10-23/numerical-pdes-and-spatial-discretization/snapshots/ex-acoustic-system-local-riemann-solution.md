---
id: ex-acoustic-system-local-riemann-solution
kind: example
title: "An acoustic system resolved into two characteristic waves"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps:
  - def-hyperbolic-system-and-characteristic-families
  - def-local-rarefaction-curve
  - def-mixed-characteristic-wave-curve
  - thm-local-small-data-riemann-solver
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 6 §6.5, printed pp. 64–67: linear system Riemann decomposition"
---

## Example

Consider $U_t+A U_x=0$ with $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$,
base state $\bar U=(0,0)^T$, and Riemann data $U_L=(0,0)^T$,
$U_R=(-\varepsilon,0)^T$. The eigenvalues are $-1,1$, so the system is
strictly hyperbolic and both fields are linearly degenerate. Use the constant
fields $r_-=(1,-1)^T$ and $r_+=(1,1)^T$. Choose
$0<\varepsilon<\delta$ and $\varepsilon<2\eta$, where $\delta,\eta>0$ are
the local solver radii at $\bar U$ for these fields.

## Facts & Assumptions

**Given:** The acoustic matrix, the two constant states chosen within the local solver radii, and the local solver for linearly-degenerate fields.

[F1] [[def-hyperbolic-system-and-characteristic-families]]: characteristic waves have eigenvectors of the flux Jacobian, and a linear constant-coefficient system has constant eigenpairs.

[F2] [[thm-local-small-data-riemann-solver]]: sufficiently close data are joined by the ordered local family waves; a linearly-degenerate family produces a contact.

[F3] [[def-local-rarefaction-curve]] and [[def-mixed-characteristic-wave-curve]]: for a linearly-degenerate field, $\Psi_i(\sigma;U)=R_i(\sigma;U)$, where $\partial_\sigma R_i=r_i(R_i)$ and $R_i(0;U)=U$.

## Verification

1.1 Direct multiplication gives eigenpairs $(-1,r_-= (1,-1)^T)$ and $(1,r_+=(1,1)^T)$. Since the system is linear, its two characteristic fields are linearly degenerate. The jump is $U_R-U_L=(-\varepsilon,0)^T=-\tfrac{\varepsilon}{2}r_--\tfrac{\varepsilon}{2}r_+$. [given, F1, algebra]

2.1 Since the chosen fields are constant, the initial-value equations in [F3] give $\Psi_\pm(\sigma;U)=U+\sigma r_\pm$. Thus the coefficients $\sigma_-=\sigma_+=-\varepsilon/2$ in step 1.1 are the solver's strengths for this normalization. They satisfy $|\sigma_\pm|<\eta$, and both data states lie in the prescribed radius-$\delta$ neighborhood. After the first wave the intermediate state is $U_M=U_L-\tfrac{\varepsilon}{2}r_-=(-\tfrac{\varepsilon}{2},\tfrac{\varepsilon}{2})^T$; after the second, $U_M-\tfrac{\varepsilon}{2}r_+=U_R$. By uniqueness in [F2], these are the solver's ordered contacts. For the first jump $A(U_M-U_L)=(-1)(U_M-U_L)$, and for the second $A(U_R-U_M)=(U_R-U_M)$, verifying Rankine–Hugoniot at the ordered speeds $-1$ and $1$. [given, step 1.1, F2, F3, algebra]

3.1 The profile equal to $U_L$ for $x/t<-1$, to $U_M$ for $-1<x/t<1$, and to $U_R$ for $x/t>1$ is therefore the two-contact local Riemann solution. [step 2.1, F2] ∎

## Diagram

The horizontal axis is $x$ and the vertical axis is $t$. Each ray from the
origin has slope $dx/dt=\lambda$; the two constant wedges carry $U_L,U_M,U_R$.
This picture records the wave ordering only; the algebraic Rankine–Hugoniot
checks above establish the solution.

```tikz
\begin{tikzpicture}[scale=1.1]
  \draw[->] (-1.5,0) -- (1.8,0) node[right] {$x$};
  \draw[->] (0,0) -- (0,2.0) node[above] {$t$};
  \draw[thick] (0,0) -- (-1.2,1.8) node[above left] {$x/t=-1$};
  \draw[thick] (0,0) -- (1.2,1.8) node[above right] {$x/t=1$};
  \node at (-0.8,1.15) {$U_L$};
  \node at (0,1.45) {$U_M$};
  \node at (0.8,1.15) {$U_R$};
\end{tikzpicture}
```

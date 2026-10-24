---
id: ex-na-ill-conditioned-levin-collocation
kind: example
title: A small Levin collocation residual can hide a large endpoint error
status: published
origin: pipeline
dependency_level: 4
deps:
  - alg-na-levin-collocation-quadrature
  - thm-na-levin-conditioned-residual-bound
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas
  and the cited calculus results."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "D. Levin, Procedures for computing one- and two-dimensional integrals of
        functions with rapid irregular oscillations, §1"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §3.3"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Fix $\omega=2\pi$, $0<\varepsilon<1$, $f=0$, $g(x)=x$ on $[0,1]$, and define
$$p_\varepsilon(x)=(\varepsilon+2-i\omega)x^3+(2i\omega-3-\varepsilon)x^2-i\omega x+1,\qquad \psi_1=1,\quad\psi_2=1+p_\varepsilon.$$
With endpoint nodes $0,1$, the collocation matrix is nonsingular and has $\kappa_2(A_\varepsilon)\ge2\omega/\varepsilon$. The exact coefficient vector is $0$, but $\widehat c=(-1,1)$ has residual $(0,\varepsilon)$ and endpoint output $-1$, while the exact integral is $0$.

## Facts & Assumptions

**Given:** The stated phase, amplitude, frequency, basis, endpoint nodes, and $0<\varepsilon<1$.

[F1] [[alg-na-levin-collocation-quadrature]]: the matrix entries are $A_{jk}=L_\omega\psi_k(x_j)$, a singular matrix returns failure, and a nonsingular solve returns the endpoint expression $p(1)e^{i\omega}-p(0)$.

[F2] [[thm-na-levin-conditioned-residual-bound]]: a coefficient residual contributes an endpoint error factor $\|d\|_2\|A^{-1}\|_2\|\rho\|_2$; the inverse norm equals $\kappa_2(A)/\|A\|_2$.

## Verification

1.1 Direct differentiation gives $p_\varepsilon(0)=1$, $p_\varepsilon(1)=0$, $p_\varepsilon'(0)=-i\omega$, and $p_\varepsilon'(1)=\varepsilon$. Therefore $L_\omega p_\varepsilon(0)=0$ and $L_\omega p_\varepsilon(1)=\varepsilon$. The basis functions are linearly independent because $p_\varepsilon$ is nonconstant, and [F1] gives $A_\varepsilon=\begin{bmatrix}i\omega&i\omega\\i\omega&i\omega+\varepsilon\end{bmatrix},\qquad \det A_\varepsilon=i\omega\varepsilon\ne0.$ [given, F1, algebra]

1.2 For $f=0$, the exact right-hand side and solution are zero. Multiplying $A_\varepsilon$ by $\widehat c=(-1,1)$ gives $\rho=(0,\varepsilon)$, while the associated polynomial is $\widehat p=-\psi_1+\psi_2=p_\varepsilon$. Its endpoint values give $Q(\widehat c)=0\cdot e^{i\omega}-1=-1$. Hence the exact integral is $0$ and the endpoint error has magnitude $1$ although $\|\rho\|_2=\varepsilon$. [given, F1, algebra]

2.1 Solving $A_\varepsilon z=(0,1)$ gives $z=(-1/\varepsilon,1/\varepsilon)$, so $\|A_\varepsilon^{-1}\|_2\ge\sqrt2/\varepsilon$. Also $\|A_\varepsilon\|_2\ge\|A_\varepsilon(1,0)^T\|_2=\sqrt2\,\omega$. Thus $\kappa_2(A_\varepsilon)\ge2\omega/\varepsilon\to\infty$ as $\varepsilon\downarrow0$. The factor in [F2] records this amplification; the residual norm alone cannot certify a small quadrature error. [given, F2, step 1.2, algebra] ∎

---
id: thm-na-levin-conditioned-residual-bound
kind: theorem
title: Levin endpoint identity and conditioned residual bound
status: published
origin: pipeline
dependency_level: 3
deps:
  - def-na-finite-interval-oscillatory-integral
  - lem-na-complex-phase-derivative
  - alg-na-levin-collocation-quadrature
  - thm-na-nonstationary-oscillatory-integration-by-parts
  - thm-integration-by-parts
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-multidimensional-integral-properties
  - lem-complex-conjugation-and-modulus-laws
  - def-real-and-complex-inner-product-space
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas
  and the cited calculus results."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. Levin, Procedures for computing one- and two-dimensional integrals of
        functions with rapid irregular oscillations, §1"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §3.3"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
    - title: "R. M. Stuart and J. Voss, Matrix Analysis and Algorithms, §2"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $a<b$, $s\ge1$, $\omega\in\mathbb R\setminus\{0\}$, complex-valued $f\in C^s[a,b]$, and real-valued $g\in C^{s+1}[a,b]$ with $|g'|\ge c>0$. Use a nonsingular collocation system from [[alg-na-levin-collocation-quadrature]], with complex-valued basis functions $\psi_k:[a,b]\to\mathbb C$ in $C^{s+1}[a,b]$. Write $A_{jk}=L_\omega\psi_k(x_j)$, $y_j=f(x_j)$, $c=A^{-1}y$, $p=\sum_kc_k\psi_k$, $Q=p(b)e^{i\omega g(b)}-p(a)e^{i\omega g(a)}$, and $r=f-L_\omega p$. Then
$$I_\omega(f,g;[a,b])-Q=I_\omega(r,g;[a,b])=\sum_{j=0}^{s-1}\frac{(-1)^j}{(i\omega)^{j+1}}\left[\frac{T_g^jr(x)}{g'(x)}e^{i\omega g(x)}\right]_a^b+\frac{(-1)^s}{(i\omega)^s}I_\omega(T_g^sr,g;[a,b]).$$
Put $E_j=|T_g^jf(a)/g'(a)|+|T_g^jf(b)/g'(b)|$, $V_j=\|v_j(a)\|_2+\|v_j(b)\|_2$ for $v_{j,k}(x)=T_g^j(L_\omega\psi_k)(x)/g'(x)$, and $K_s=(\sum_k\|T_g^s(L_\omega\psi_k)\|_\infty^2)^{1/2}$. Then
$$|I_\omega(f,g)-Q|\le\sum_{j=0}^{s-1}\frac{E_j+\|A^{-1}\|_2\|y\|_2V_j}{|\omega|^{j+1}}+\frac{b-a}{|\omega|^s}\left(\|T_g^sf\|_\infty+\|A^{-1}\|_2\|y\|_2K_s\right).$$
If an approximate coefficient vector $\widehat c$ has exact residual $\rho=A\widehat c-y$ and endpoint vector $d_k=\psi_k(b)e^{i\omega g(b)}-\psi_k(a)e^{i\omega g(a)}$, its output satisfies
$$|Q(\widehat c)-Q|\le\|d\|_2\|A^{-1}\|_2\|\rho\|_2=\|d\|_2\frac{\kappa_2(A)}{\|A\|_2}\|\rho\|_2.$$
If $B_s$ denotes the right-hand side of the preceding collocation bound, then
$$|I_\omega(f,g)-Q(\widehat c)|\le B_s+\|d\|_2\|A^{-1}\|_2\|\rho\|_2.$$
All vector norms are Euclidean, $\|A\|_2=\sup_{\|v\|_2=1}\|Av\|_2$ is the induced matrix norm, and $\kappa_2(A)=\|A\|_2\|A^{-1}\|_2$.
Thus a small nodal residual alone does not provide an integral-error bound; the smooth residual terms and inverse solve amplification are also required.

## Facts & Assumptions

**Given:** The stated functions, nonzero frequency, nonstationary phase, nonsingular collocation matrix, and exact arithmetic residual $\rho$ when an approximate coefficient vector is considered.

[F1] [[alg-na-levin-collocation-quadrature]]: $L_\omega p=p'+i\omega g'p$, $A_{jk}=L_\omega\psi_k(x_j)$, and the endpoint output is $p(b)e^{i\omega g(b)}-p(a)e^{i\omega g(a)}$.

[F2] [[lem-na-complex-phase-derivative]]: $(e^{i\omega g})'=i\omega g'e^{i\omega g}$.

[F3] [[thm-integration-by-parts]]: for real $C^1$ functions, $\int u v'=[uv]-\int u'v$; the complex identity follows componentwise.

[F4] [[thm-na-nonstationary-oscillatory-integration-by-parts]]: the $s$-step expansion and its remainder bound apply to every $C^s$ amplitude when $|g'|\ge c>0$.

[F5] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for finite real or complex vectors, $|\langle z,w\rangle|\le\|z\|_2\|w\|_2$.

[F6] Real Riemann integrals on an interval are linear by [[thm-multidimensional-integral-properties]] with $m=1$; the componentwise complex convention [[def-na-finite-interval-oscillatory-integral]] extends this to complex integrands.

[F7] The complex modulus is subadditive, $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F8] On $\mathbb C^n$ the Euclidean inner product is $\langle x,y\rangle=\sum_kx_k\overline{y_k}$, linear in the first argument, and $\|\overline d\|_2=\|d\|_2$ by [[def-real-and-complex-inner-product-space]] and [[lem-complex-conjugation-and-modulus-laws]].

## Proof

1.1 For any $p\in C^1[a,b]$, [F2] gives $(pe^{i\omega g})'=(L_\omega p)e^{i\omega g}$. Apply [F3] to the real and imaginary components of $p$ and $e^{i\omega g}$; the product rule and cancellation of the two $i\omega g'p$ terms yield $I_\omega(L_\omega p,g)=[pe^{i\omega g}]_a^b$. With $p$ from [F1] and $r=f-L_\omega p$, componentwise linearity [F6] gives $I_\omega(f,g)-Q=I_\omega(r,g)$. [given, F1, F2, F3, F6, algebra]

1.2 The coefficient equations imply $A(\widehat c-c)=\rho$, so $\widehat c-c=A^{-1}\rho$. The endpoint formula is linear in the coefficient vector, hence $Q(\widehat c)-Q=d^\top A^{-1}\rho$. [F1, given, algebra]

2.1 The hypotheses on $f,g,\psi_k$ make $r\in C^s[a,b]$. Apply [F4] to $r$ to obtain the displayed exact expansion and bound its integral remainder by $(b-a)|\omega|^{-s}\|T_g^sr\|_\infty$. [given, F4, step 1.1]

2.2 With $x=A^{-1}\rho$, [F8] gives $d^\top x=\langle x,\overline d\rangle$ and $\|\overline d\|_2=\|d\|_2$; Cauchy--Schwarz [F5] therefore gives $|d^\top A^{-1}\rho|\le\|d\|_2\|A^{-1}\|_2\|\rho\|_2$. The definition $\kappa_2(A)=\|A\|_2\|A^{-1}\|_2$ and nonsingularity give the displayed condition-number form. [F1, F5, F8, step 1.2, algebra]

3.1 Since $c=A^{-1}y$, $\|c\|_2\le\|A^{-1}\|_2\|y\|_2$. Linearity of $T_g$ gives $T_g^jr=T_g^jf-\sum_kc_kT_g^j(L_\omega\psi_k)$. At each endpoint, [F5] bounds the corresponding divided sum by $\|c\|_2\|v_j(a)\|_2$ or $\|c\|_2\|v_j(b)\|_2$; [F7] combines it with the amplitude term. On the interval [F5] bounds $\|\sum_kc_kT_g^s(L_\omega\psi_k)\|_\infty$ by $\|c\|_2K_s$, and [F7] gives $\|T_g^sr\|_\infty\le\|T_g^sf\|_\infty+\|c\|_2K_s$. Substitution in the expansion from step 2.1 gives the stated $E_j,V_j,K_s$ bound. [given, F4, F5, F7, step 2.1, algebra]

4.1 The complex triangle inequality [F7] combines the exact-collocation bound in step 3.1 with step 2.2, giving the stated integral bound for $Q(\widehat c)$. [F7, step 3.1, step 2.2, algebra] ∎
## Remarks

The residual $\rho$ in the theorem is the exact residual of the stated matrix equation. If matrix products and solves are rounded, this theorem alone does not certify that exact residual or a rounded solve.

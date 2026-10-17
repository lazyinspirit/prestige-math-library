---
id: thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix
kind: theorem
title: "Composite Simpson error bound for Chebyshev weighted mass entries"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-chebyshev-arcsine-weighted-l2-pairing, alg-chebyshev-composite-simpson-weighted-mass-matrix, thm-composite-simpson-error-bound, thm-sine-and-cosine-addition-formulas, thm-chebyshev-multiple-angle-identities, thm-sine-and-cosine-derivatives]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "No choice axiom is used; this is a finite trigonometric derivative bound and a quadrature estimate."
verification:
  precheck: pending
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §§3.1–3.3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–118 / PDF pp. 111–124; Chebyshev weighted mass integrals."
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, §7.2"
      url: "https://artowen.su.domains/mc/Ch-quadrature.pdf"
      locator: "Chapter 7, §7.2; composite Simpson rule and fourth-derivative error bound."
---
 
## Statement

Let $N\ge0$, let $M\ge2$ be even, put $h=\pi/M$, and let $G_{ij}=\langle T_i,T_j\rangle_C$ be the exact weighted mass entry from [[def-chebyshev-arcsine-weighted-l2-pairing]]. The approximation $M^S_{ij}$ from [[alg-chebyshev-composite-simpson-weighted-mass-matrix]] satisfies
$$
|G_{ij}-M^S_{ij}|\le \frac{\pi h^4}{180}(i+j)^4,\qquad 0\le i,j\le N.
$$

## Facts & Assumptions

**Given:** Integers $N\ge0$, even $M\ge2$, $h=\pi/M$, and indices $0\le i,j\le N$.

[F1] [[def-chebyshev-arcsine-weighted-l2-pairing]]: $\langle T_i,T_j\rangle_C=\int_0^\pi T_i(\cos\theta)T_j(\cos\theta)\,d\theta$.

[F2] [[alg-chebyshev-composite-simpson-weighted-mass-matrix]]: $M^S_{ij}$ is the composite Simpson value on $[0,\pi]$ for $g_{ij}(\theta)=T_i(\cos\theta)T_j(\cos\theta)$ with step $h$.

[F3] [[thm-composite-simpson-error-bound]]: if $g\in C^4([0,\pi])$, then $|\int_0^\pi g-Q_S(g;0,\pi,M)|\le \pi h^4\max|g^{(4)}|/180$.

[F4] [[thm-chebyshev-multiple-angle-identities]] and [[thm-sine-and-cosine-addition-formulas]]: $T_k(\cos\theta)=\cos(k\theta)$ and $2\cos u\cos v=\cos(u+v)+\cos(u-v)$.

[F5] [[thm-sine-and-cosine-derivatives]]: differentiating $\cos(k\theta)$ four times multiplies it by $k^4$.

## Proof
1.1 By [F4], $g_{ij}(\theta)=\tfrac12\{\cos((i+j)\theta)+\cos((i-j)\theta)\}.$ This finite trigonometric expression is $C^4$ on $[0,\pi]$. Its fourth derivative is $g_{ij}^{(4)}(\theta)=\tfrac12\{(i+j)^4\cos((i+j)\theta)+(i-j)^4\cos((i-j)\theta)\},$ by four applications of [F5]. Therefore $\max_{[0,\pi]}|g_{ij}^{(4)}|\le\tfrac12((i+j)^4+|i-j|^4)\le(i+j)^4.$ This also covers $i=j=0$, when the fourth derivative is zero. [given, F4, F5, algebra]

2.1 Apply [F3] to $g_{ij}$ and use [F1]–[F2] to identify the exact integral and the Simpson approximation. The derivative bound in step 1.1 gives the claimed entrywise error. [F1, F2, F3, step 1.1] ∎
